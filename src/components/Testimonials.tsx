import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Michael',
      role: 'Married Couple',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "Rosa's coaching transformed our marriage. We were on the brink of separation, but her guidance helped us rediscover the love and connection we thought we'd lost. The tools from SyncWithLove are now part of our daily routine.",
      rating: 5,
    },
    {
      name: 'Jennifer Williams',
      role: 'Individual Client',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "I came to Rosa feeling lost in my dating life. Her insights and the interactive quizzes helped me understand my patterns and what I truly need in a relationship. I'm now in the healthiest relationship I've ever had!",
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Workshop Participant',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The Couples Connection Workshop was eye-opening. Rosa creates a safe, supportive environment where real growth happens. My partner and I learned communication techniques that have completely changed how we relate to each other.',
      rating: 5,
    },
    {
      name: 'Emily & James',
      role: 'Engaged Couple',
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "Before our wedding, we wanted to build a strong foundation. Rosa's premarital coaching gave us the skills and understanding to navigate challenges together. We feel confident and prepared for our future as a married couple.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real stories from people whose relationships have been transformed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all relative"
            >
              <Quote
                size={48}
                className="text-rose-200 absolute top-4 right-4 opacity-50"
              />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-rose-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your relationship?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
