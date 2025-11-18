import Spline from '@splinetool/react-spline';

function Hero() {
  const backend = import.meta.env.VITE_BACKEND_URL || '';
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300/80 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">Fintech • Fraud-safe • API-first</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Sell digital goods with instant, secure delivery
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            A modern platform for software, scripts, keys, files, and subscriptions — automated payments, delivery, and built-in fraud prevention.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/30 transition">
              Try the live demo
            </a>
            <a href={backend || '#'} className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-medium border border-white/15 backdrop-blur transition">
              View API
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;