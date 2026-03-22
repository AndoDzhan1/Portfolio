/**
 * Типы данных для портфолио
 * 
 * ⚠️ ФАЙЛ С ТИПАМИ - НЕ РЕДАКТИРОВАТЬ (кроме добавления новых типов)
 * Данные для заполнения находятся в: app/data/portfolio.ts
 */

/** Основная информация о пользователе */
export interface Profile {
  /** Имя и фамилия */
  name: string;
  /** Краткая должность/специализация */
  title: string;
  /** Краткое описание (1-2 предложения) */
  tagline: string;
  /** Подробное описание "Обо мне" */
  about: string;
  /** URL аватара/фото */
  avatar: string;
  /** Местоположение */
  location: string;
  /** Годы опыта */
  experienceYears: number;
}

/** Настройки сайта */
export interface SiteSettings {
  /** Тема по умолчанию: 'light' | 'dark' | 'system' */
  defaultTheme: 'light' | 'dark' | 'system';
}

/** Навык */
export interface Skill {
  /** Название навыка */
  name: string;
  /** Уровень владения (0-100) */
  level: number;
  /** Категория навыка */
  category: SkillCategory;
}

/** Категории навыков */
export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'tools' 
  | 'design'
  | 'other';

/** Опыт работы */
export interface Experience {
  /** Должность */
  position: string;
  /** Компания */
  company: string;
  /** Дата начала (YYYY-MM) */
  startDate: string;
  /** Дата окончания (YYYY-MM) или "present" */
  endDate: string;
  /** Описание достижений */
  description: string[];
}

/** Проект */
export interface Project {
  /** Название проекта */
  title: string;
  /** Описание проекта */
  description: string;
  /** Используемые технологии */
  technologies: string[];
  /** URL демо-версии */
  demoUrl?: string;
  /** URL репозитория */
  repoUrl?: string;
  /** URL титульного изображения проекта */
  image: string;
  /** Год создания */
  year: number;
  /** Уникальный slug для страницы проекта */
  slug: string;
  /** Галерея изображений проекта (дополнительные фото) */
  gallery?: string[];
}

/** Контактная информация */
export interface Contact {
  /** Тип контакта */
  type: ContactType;
  /** Название/метка */
  label: string;
  /** URL или значение */
  value: string;
  /** Иконка (название из Lucide) */
  icon: string;
}

/** Типы контактов */
export type ContactType = 
  | 'email' 
  | 'telegram' 
  | 'github' 
  | 'linkedin' 
  | 'phone'
  | 'max'
  | 'vk'
  | 'yandexMusic'
  | 'kinopoisk'
  | 'other';

/** Все данные портфолио */
export interface PortfolioData {
  /** Основная информация */
  profile: Profile;
  /** Настройки сайта (тема) */
  settings: SiteSettings;
  /** Навыки */
  skills: Skill[];
  /** Опыт работы */
  experience: Experience[];
  /** Проекты */
  projects: Project[];
  /** Контакты */
  contacts: Contact[];
}
