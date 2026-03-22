/**
 * Главная страница портфолио
 *
 * ⚠️ ДАННЫЕ ДЛЯ ЗАПОЛНЕНИЯ: app/data/portfolio.ts
 */

'use client';

import { useEffect } from 'react';
import { portfolioData } from './data/portfolio';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contacts from './components/sections/Contacts';

// Навигационные пункты
const navItems = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Home() {
  const { profile, settings, skills, projects, contacts } = portfolioData;

  // Применение темы при загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      if (settings.defaultTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else if (settings.defaultTheme === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    } else {
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, [settings]);

  return (
    <>
      {/* Шапка */}
      <Header
        name={profile.name}
        navItems={navItems}
      />

      {/* Основной контент */}
      <main className="flex-1">
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contacts contacts={contacts} location={profile.location} />
      </main>

      {/* Подвал */}
      <Footer name={profile.name} contacts={contacts} />
    </>
  );
}
