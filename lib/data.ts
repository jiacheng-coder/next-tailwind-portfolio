import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

// export const intro = "Welcome to my portfolio. I'm JiaCheng Zhu, a front-end developer in China. I enjoy building sites & apps!"
export const intro = '你好，我是嘉诚。我是一名前端开发工程师，目前正逐步往全栈方向发展，我喜欢用代码创造新事物并达成良好的用户体验。'

export const personalInfo = {
  // contactMe: 'Contact Me',
  contactMe: 'Email Me',
  // downloadResume: 'Download Resume',
  downloadResume: 'Check Resume',
  githubUrl: 'https://github.com/jiacheng-coder',
  email: 'jiachengcoder@gmail.com',
}

// export const links = [
//   {
//     name: 'Home',
//     hash: '#home',
//   },
//   {
//     name: 'About',
//     hash: '#about',
//   },
//   {
//     name: 'Projects',
//     hash: '#projects',
//   },
//   {
//     name: 'Skills',
//     hash: '#skills',
//   },
//   {
//     name: 'Experience',
//     hash: '#experience',
//   },
//   {
//     name: 'Contact',
//     hash: '#contact',
//   },
// ] as const

export const links = [
  {
    name: '首页',
    hash: '#home',
  },
  {
    name: '关于我',
    hash: '#about',
  },
  {
    name: '项目',
    hash: '#projects',
  },
  {
    name: '技术栈',
    hash: '#skills',
  },
  {
    name: '个人经历',
    hash: '#experience',
  },
  {
    name: '联系我',
    hash: '#contact',
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
  'Tailwind',
  'Framer Motion',
  'Ant Design',
  'Roo UI',
  'Node.js',
  'Express',
  'MySQL',
  'Docker',
  'Nginx',
  // 'Redux',
  // 'GraphQL',
  // 'Apollo',
  // 'PostgreSQL',
  // 'Python',
  // 'Django',
] as const

export const experiencesData = [
  {
    title: '第四届字节跳动青训营',
    location: '',
    description: '面向高校学生的前端开发青训营，系统学习开发知识、Git协作知识等',
    icon: React.createElement(LuGraduationCap),
    date: '2022.7 - 2022.9',
    skills: ['Vue2', 'Element', 'Webpack'],
  },
  {
    title: 'WeCQU 小程序',
    location: '重庆·中国',
    description: '负责 WeCQU 小程序的开发与重构，期间促成了6000+的用户增长',
    icon: React.createElement(CgWorkAlt),
    date: '2022.10 - 2023.5',
    skills: ['微信小程序', 'GraceUI'],
  },
  {
    title: '校园生态圈 C 端（H5页面）',
    location: '重庆·中国',
    description: '',
    icon: React.createElement(FaReact),
    date: '2023.11 - 2023.12',
    skills: ['Vue3 + Uniapp', 'GraceUI 6', 'Vite'],
  },
  {
    title: '运营 M 端系统（美团）',
    location: '成都·中国',
    description: '提报活动全链路配置的 M 端系统, 基于 React 全家桶、Vite 打包工具落地业务开发',
    icon: React.createElement(FaReact),
    date: '2023.6 - 2023.9',
    skills: ['React', 'Roo UI', 'Webpack + Vite'],
  },
  {
    title: '校园生态圈·广告联盟',
    location: '重庆·中国',
    description: '提报活动全链路配置的 M 端系统, 基于 React 全家桶、Vite 打包工具落地业务开发',
    icon: React.createElement(FaReact),
    date: '2023.11 - 2023.12',
    skills: ['Vue3 + Uniapp', 'GraceUI 6', 'Vite'],
  },
  {
    title: '线上教学平台（全栈）',
    location: '重庆·中国',
    description: '提报活动全链路配置的 M 端系统, 基于 React 全家桶、Vite 打包工具落地业务开发',
    icon: React.createElement(FaReact),
    date: '2023.11 - 2023.12',
    skills: ['React', 'Roo UI', 'Webpack + Vite'],
  },
] as const
