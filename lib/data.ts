import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const intro = "Welcome to my portfolio. I'm JiaCheng Zhu, a front-end developer in China. I enjoy building sites & apps!"

export const personalInfo = {
  contactMe: 'Contact Me',
  downloadResume: 'Download Resume',
  githubUrl: 'https://github.com/jiacheng-coder',
  email: 'jiachengcoder@gmail.com',
}

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: '第四届字节跳动青训营',
    location: 'Online Campus',
    description: '面向高校学生的前端开发青训营，系统学习开发知识、Git协作知识等',
    icon: React.createElement(LuGraduationCap),
    date: '2022.7 - 2022.9',
    skills: ['Vue2', 'Element', 'Webpack'],
  },
  {
    title: 'Front-End Developer',
    location: 'ChongQing, China',
    description: '负责WeCQU小程序的开发与重构，期间促成了6000+的用户增长',
    icon: React.createElement(CgWorkAlt),
    date: '2022.10 - 2023.7',
    skills: ['Vue2', 'Element', 'Webpack'],
  },
  {
    title: 'Front-End Developer',
    location: 'ChengDu, China',
    description: '提报活动全链路配置的 M 端系统, 基于 React 全家桶、Vite 打包工具落地业务开发',
    icon: React.createElement(FaReact),
    date: '2021 - present',
    skills: ['Vue2', 'Element', 'Webpack'],
  },
] as const

export const projectsData = [
  {
    title: 'CorpComment',
    description: 'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description: 'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description: 'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Vue',
  'React',
  'Next.js',
  'WeChat MiniProgram',
  'Uniapp H5',
  'Node.js',
  'Tailwind',
  'Framer Motion',
  'Ant Design',
  'Roo UI',
  // 'MongoDB',
  // 'Redux',
  // 'GraphQL',
  // 'Apollo',
  // 'Express',
  // 'PostgreSQL',
  // 'Python',
  // 'Django',
] as const
