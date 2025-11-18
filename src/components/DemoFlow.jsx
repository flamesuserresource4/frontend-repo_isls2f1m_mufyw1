import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || '';

function DemoFlow() {
  const [loading, setLoading] = useState(false);
  const [seed, setSeed] = useState(null);
  const [order, setOrder] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [error, setError] = useState(null);

  const canRun = Boolean(API);

  const seedDemo = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch(`${API}/seed`, { method: 'POST' });
      const data = await res.json();
      setSeed(data);
    } catch (e) {
      setError('Failed to seed demo.');
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async () => {
    if (!seed?.product_id) return;
    setLoading(true); setError(null);
    try {
      const res = await fetch(`${API}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: seed.product_id,
          buyer_email: 'buyer@example.com',
          currency: 'USD',
          device_fp: 'demo-device-fp-1234'
        })
      });
      const data = await res.json();
      setOrder(data);
    } catch (e) {
      setError('Failed to create order.');
    } finally {
      setLoading(false);
    }
  };

  const simulatePayment = async () => {
    if (!order?.order_id) return;
    setLoading(true); setError(null);
    try {
      const res = await fetch(`${API}/payments/webhook`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'payment.succeeded',
          data: {
            order_id: order.order_id,
            amount: 29,
            currency: 'USD',
            processor: 'card',
            processor_ref: 'demo_123'
          }
        })
      });
      const data = await res.json();
      setDelivery(data.delivery);
    } catch (e) {
      setError('Failed to simulate payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center">Try the automated flow</h2>
        <p className="mt-2 text-blue-200/80 text-center">Seed a product, create an order, then simulate a successful payment to see instant delivery.</p>

        {!canRun && (
          <p className="mt-6 text-center text-amber-300">Backend URL not configured. Set VITE_BACKEND_URL to enable the live demo.</p>
        )}

        <div className="mt-10 max-w-3xl mx-auto grid gap-4">
          <button disabled={!canRun || loading} onClick={seedDemo} className="rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-medium border border-white/15 backdrop-blur transition disabled:opacity-50">1) Seed demo data</button>
          <button disabled={!seed || loading} onClick={createOrder} className="rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-medium border border-white/15 backdrop-blur transition disabled:opacity-50">2) Create order</button>
          <button disabled={!order || loading} onClick={simulatePayment} className="rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/30 transition disabled:opacity-50">3) Simulate payment</button>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          {seed && (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-blue-100">
              <div className="font-semibold text-white mb-1">Seeded</div>
              <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(seed, null, 2)}</pre>
            </div>
          )}
          {order && (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-blue-100 mt-4">
              <div className="font-semibold text-white mb-1">Order</div>
              <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(order, null, 2)}</pre>
            </div>
          )}
          {delivery && (
            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 backdrop-blur p-4 text-green-100 mt-4">
              <div className="font-semibold text-white mb-1">Delivery</div>
              <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(delivery, null, 2)}</pre>
            </div>
          )}
          {error && (
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 backdrop-blur p-4 text-red-100 mt-4">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DemoFlow;