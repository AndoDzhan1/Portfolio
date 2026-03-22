/**
 * Страница отдельного проекта
 * Стиль: BMW M Performance
 */

'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Section from '../../components/ui/Section';
import { ArrowLeft, ExternalLink, Github, Code } from 'lucide-react';

// Навигационные пункты (ссылки на главную страницу)
const navItems = [
  { label: 'Обо мне', href: '/#about' },
  { label: 'Навыки', href: '/#skills' },
  { label: 'Проекты', href: '/#projects' },
  { label: 'Контакты', href: '/#contacts' },
];

// Навигационные пункты для шапки (используют Link)
const navItemsForHeader = [
  { label: 'Обо мне', href: '/#about', scroll: true },
  { label: 'Навыки', href: '/#skills', scroll: true },
  { label: 'Проекты', href: '/#projects', scroll: true },
  { label: 'Контакты', href: '/#contacts', scroll: true },
];

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [scrolled, setScrolled] = useState(false);

  // Отслеживание скролла для шапки
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Поиск проекта по slug
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header name={portfolioData.profile.name} navItems={navItems} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
              Проект не найден
            </h1>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Вернуться к проектам
            </Link>
          </div>
        </main>
        <Footer name={portfolioData.profile.name} contacts={portfolioData.contacts} />
      </>
    );
  }

  return (
    <>
      <Header 
        name={portfolioData.profile.name} 
        navItems={navItems}
        transparent={!scrolled}
        hideName
      />

      <main className="flex-1">
        {/* Hero секция с изображением проекта */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-gray-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Кнопка назад - встроена в шапку на мобильных, в Hero на десктопе */}
          <div className="md:absolute md:bottom-8 md:right-8 fixed top-4 left-4 z-[60]">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-lg transition-all duration-300 shadow-lg"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden md:inline">Назад</span>
            </Link>
          </div>

          {/* Заголовок проекта */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-lg">
                  {project.year}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Основной контент */}
        <Section
          id="project-details"
          title="Детали проекта"
          subtitle="Подробная информация о проекте"
          className="bg-gray-50 dark:bg-gray-950"
          showMStripe
        >
          <div className="max-w-4xl mx-auto">
            {/* Описание проекта */}
            <div className="mb-12 animate-fade-in">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
                Описание проекта
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Изображения проекта */}
            <div className="mb-12 animate-scale-in">
              {/* Титульное изображение */}
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>

              {/* Галерея дополнительных изображений */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - изображение ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Технологии */}
            <div className="mb-12 animate-fade-in">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-red-600" />
                Технологии
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-base font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 transform hover:scale-105 cursor-default animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Ссылки */}
            {(project.repoUrl || project.demoUrl) && (
              <div className="mb-12 animate-fade-in">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
                  <ExternalLink className="w-6 h-6 text-red-600" />
                  Ссылки
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-6 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:shadow-red-500/20 transform hover:-translate-y-2"
                    >
                      <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      Репозиторий
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-red-500/30 transform hover:-translate-y-2"
                    >
                      <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      Демо-версия
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Кнопка назад внизу */}
            <div className="text-center animate-fade-in">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-black dark:text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Вернуться к проектам
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer name={portfolioData.profile.name} contacts={portfolioData.contacts} />
    </>
  );
}
