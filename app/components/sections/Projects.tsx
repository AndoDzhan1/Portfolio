/**
 * Секция Projects - проекты разработчика
 * Стиль: BMW M Performance
 */

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Project } from '../../types/portfolio';
import Section from '../ui/Section';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section
      id="projects"
      title="Проекты"
      subtitle="Избранные работы, которыми я горжусь"
      className="bg-gray-50 dark:bg-gray-950"
      showMStripe
    >
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-red-100 dark:bg-red-950/10 rounded-full filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 dark:bg-blue-950/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(project.slug)}
            className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-premium-lg hover:shadow-red-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-800 animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Изображение проекта */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Градиентный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Оверлей при наведении с кнопками */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6">
                <div className="flex gap-3 w-full animate-slide-in-up">
                  {project.demoUrl && (
                    <button
                      onClick={(e) => handleLinkClick(e, project.demoUrl!)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      aria-label="Демо-версия"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Демо
                    </button>
                  )}
                  {project.repoUrl && (
                    <button
                      onClick={(e) => handleLinkClick(e, project.repoUrl!)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/30"
                      aria-label="Репозиторий"
                    >
                      <Github className="w-5 h-5" />
                      Код
                    </button>
                  )}
                </div>
              </div>

              {/* Год проекта с анимацией */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-sm font-bold rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>
              </div>

              {/* M-полоса при наведении */}
              <div className="absolute top-0 left-0 right-0 h-1 bmw-m-stripe opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Информация о проекте */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                {project.title}
                <span className="w-0 h-0.5 bg-red-600 group-hover:w-8 transition-all duration-300" />
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Технологии с анимацией */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 transform hover:scale-105 cursor-default animate-scale-in"
                    style={{ animationDelay: `${index * 150 + techIndex * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Кнопки действий (видимые всегда на мобильных) */}
              <div className="flex gap-3 mt-6 md:hidden">
                {project.demoUrl && (
                  <button
                    onClick={(e) => handleLinkClick(e, project.demoUrl!)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Демо
                  </button>
                )}
                {project.repoUrl && (
                  <button
                    onClick={(e) => handleLinkClick(e, project.repoUrl!)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-black dark:text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    Код
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Призыв к действию с анимацией */}
      {projects.length > 0 && (
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: `${projects.length * 150}ms` }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:shadow-red-500/20 transform hover:-translate-y-2"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Больше проектов на GitHub
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      )}
    </Section>
  );
}
