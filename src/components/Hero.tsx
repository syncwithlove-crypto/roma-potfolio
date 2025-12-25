import { Heart, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-400 via-pink-400 to-orange-300 text-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex justify-center mb-6">
          <Heart size={64} className="text-white animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Rosa Parks
        </h1>

        <p className="text-2xl md:text-3xl mb-4 font-light">
          Relationship Advisor & Coach
        </p>

        <p className="text-xl md:text-2xl mb-12 opacity-90">
          SyncWithLove Founder
        </p>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Helping individuals and couples build deeper connections, improve communication,
          and create lasting, fulfilling relationships through personalized coaching and
          innovative tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-white text-rose-600 rounded-full font-semibold hover:bg-rose-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
          >
            Explore Services <ArrowRight size={20} />
          </button>

          <a
            href="https://syncwithlove.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
          >
            Visit SyncWithLove.com
          </a>
        </div>
      </div>
    </section>
  );
}
