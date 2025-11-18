import Hero from './components/Hero';
import Features from './components/Features';
import DemoFlow from './components/DemoFlow';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <Features />
      <DemoFlow />
      <footer className="py-10 text-center text-blue-200/70 border-t border-white/10 bg-slate-900">
        Built for digital sellers • Secure by design • API-first
      </footer>
    </div>
  );
}

export default App;