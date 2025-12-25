import { BookOpen, Users, Award, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: BookOpen,
      title: 'Love Language Blog Series',
      description:
        'A comprehensive collection of articles exploring the five love languages and how to apply them in modern relationships. Practical tips and real-world examples help readers transform their communication.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Content', 'Education', 'Communication'],
    },
    {
      icon: Users,
      title: 'Couples Connection Workshop',
      description:
        'Interactive virtual workshops that brought together over 200 couples to learn and practice essential relationship skills. Featured guided exercises, Q&A sessions, and community building.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Workshop', 'Community', 'Growth'],
    },
    {
      icon: Award,
      title: 'Relationship Success Stories',
      description:
        'Documented transformations from clients who overcame communication barriers, rebuilt trust, and created thriving partnerships. These stories inspire and provide hope to others on their journey.',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Testimonials', 'Impact', 'Inspiration'],
    },
    {
      icon: BookOpen,
      title: 'SyncWithLove Platform',
      description:
        'Founded and developed an innovative digital platform featuring interactive quizzes, relationship tools, and challenges designed to help individuals and couples build stronger connections.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Platform', 'Technology', 'Innovation'],
      link: 'https://syncwithlove.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects & Portfolio
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transformative work that's making a real difference in people's lives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon size={32} />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold transition-colors group"
                    >
                      Learn More
                      <ExternalLink
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
