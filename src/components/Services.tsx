import { Heart, Sparkles, Trophy, ExternalLink } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Interactive Quizzes',
      description:
        'Discover insights about your relationship dynamics with engaging, scientifically-backed quizzes designed to help you understand yourself and your partner better.',
      links: [
        {
          label: 'Try Romantic Quiz',
          url: 'https://syncwithlove.com/sync/romantic',
        },
        {
          label: 'Try Fun Quiz',
          url: 'https://syncwithlove.com/sync/fun',
        },
      ],
      color: 'from-rose-400 to-pink-400',
    },
    {
      icon: Sparkles,
      title: 'Love Tools',
      description:
        'Access a curated collection of practical tools and resources designed to enhance communication, deepen intimacy, and strengthen your emotional connection.',
      links: [
        {
          label: 'Explore Love Tools',
          url: 'https://syncwithlove.com',
        },
      ],
      color: 'from-pink-400 to-orange-400',
    },
    {
      icon: Trophy,
      title: 'Personal Coaching',
      description:
        'Work one-on-one with me to address specific challenges, set relationship goals, and develop personalized strategies for lasting positive change.',
      links: [
        {
          label: 'Romantic Challenge',
          url: 'https://syncwithlove.com/challenge/romantic',
        },
      ],
      color: 'from-orange-400 to-amber-400',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive relationship support tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                  <Icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold transition-colors group"
                      >
                        {link.label}
                        <ExternalLink
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Book a Coaching Session
          </a>
        </div>
      </div>
    </section>
  );
}
