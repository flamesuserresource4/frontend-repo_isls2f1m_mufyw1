import { Shield, Zap, CreditCard, Webhook, KeyRound, Store } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fraud & Chargeback Protection',
    desc: 'Device fingerprinting, risk scoring, and automated verification to keep merchants safe.'
  },
  {
    icon: Zap,
    title: 'Automated Delivery',
    desc: 'License key generation, encrypted files, API delivery, and instant download links.'
  },
  {
    icon: CreditCard,
    title: 'Payments-as-a-Service',
    desc: 'Cards, PayPal, crypto, and bank methods with a simple fee per transaction.'
  },
  {
    icon: Store,
    title: 'White-label Storefronts',
    desc: 'Custom domains, themes, and branded checkout powered by our backend.'
  },
  {
    icon: KeyRound,
    title: 'Developer-first',
    desc: 'Full API, webhooks, SDKs, and bot integrations for Discord/Telegram.'
  },
  {
    icon: Webhook,
    title: 'Webhooks & Integrations',
    desc: 'Plug into your stack for fulfillment, CRM, and notification workflows.'
  }
];

function Features() {
  return (
    <section className="relative py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">What you get</h2>
        <p className="mt-3 text-blue-200/80 text-center max-w-2xl mx-auto">Everything required to run a digital product marketplace out of the box.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/7.5 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4">
                <f.icon size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;