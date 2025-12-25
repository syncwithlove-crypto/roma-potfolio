import { Sparkles, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-200 via-pink-200 to-orange-200 flex items-center justify-center overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rosa Parks - Relationship Advisor and Coach"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-rose-500 text-white p-6 rounded-2xl shadow-xl">
              <Sparkles size={32} />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a dedicated Relationship Advisor & Coach, I've devoted my career to helping
              individuals and couples navigate the complexities of love and connection. My
              mission is to empower people to build stronger, healthier, and more fulfilling
              relationships.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Through my platform, <strong>SyncWithLove</strong>, I've created innovative
              tools and resources that make relationship improvement accessible, engaging,
              and effective. From interactive quizzes to personalized coaching sessions,
              I combine professional expertise with modern technology to deliver real results.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With years of experience in relationship counseling and a passion for helping
              others thrive, I bring empathy, insight, and practical strategies to every
              client interaction. Whether you're looking to strengthen an existing relationship
              or develop better communication skills, I'm here to guide you on your journey.
            </p>

            <a
              href="https://syncwithlove.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Visit SyncWithLove.com <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
