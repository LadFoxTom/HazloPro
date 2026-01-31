// prisma/seed.js
require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const workshops = [
  {
    slug: 'fontaneria-basica',
    title: 'Fontanería Básica',
    titleEn: 'Basic Plumbing',
    description: 'Aprende los fundamentos de la fontanería doméstica',
    descriptionEn: 'Learn the fundamentals of home plumbing',
    fullDescription: 'En este curso aprenderás todo lo necesario para realizar reparaciones básicas de fontanería en tu hogar. Desde arreglar grifos hasta instalar nuevas tuberías.',
    fullDescriptionEn: 'In this course you will learn everything necessary to perform basic plumbing repairs in your home. From fixing faucets to installing new pipes.',
    price: 295,
    lessons: 3,
    duration: '18 horas',
    durationEn: '18 hours',
    level: 'APRENDE',
    category: 'FONTANERIA',
    location: 'Madrid',
    imageUrl: 'img/waldemar-brandt-LXDwUbmPDQo-unsplash.jpg',
    isPopular: true,
    dates: [
      { date: new Date('2026-02-15'), spots: 4 },
      { date: new Date('2026-02-22'), spots: 2 },
      { date: new Date('2026-03-01'), spots: 8 },
    ],
  },
  {
    slug: 'electricidad-domestica',
    title: 'Electricidad Doméstica',
    titleEn: 'Home Electrical',
    description: 'Domina las instalaciones eléctricas básicas',
    descriptionEn: 'Master basic electrical installations',
    price: 345,
    lessons: 4,
    duration: '24 horas',
    durationEn: '24 hours',
    level: 'APRENDE',
    category: 'ELECTRICIDAD',
    location: 'Barcelona',
    imageUrl: 'img/planimetrica-rvNkkzPGJQE-unsplash.jpg',
    isPopular: true,
    dates: [
      { date: new Date('2026-02-18'), spots: 3 },
      { date: new Date('2026-02-25'), spots: 5 },
      { date: new Date('2026-03-08'), spots: 8 },
    ],
    fullDescription: 'Aprende a realizar instalaciones eléctricas seguras y a resolver problemas comunes en el hogar.',
    fullDescriptionEn: 'Learn to perform safe electrical installations and solve common problems at home.',
  },
  {
    slug: 'alicatado-azulejos',
    title: 'Alicatado y Azulejos',
    titleEn: 'Tiling Workshop',
    description: 'Técnicas profesionales de colocación de azulejos',
    descriptionEn: 'Professional tile laying techniques',
    price: 425,
    lessons: 5,
    duration: '30 horas',
    durationEn: '30 hours',
    level: 'CONSTRUYE',
    category: 'ALICATADO',
    location: 'Madrid',
    imageUrl: 'img/etienne-girardet-1fDq8DMtxJg-unsplash.jpg',
    isPopular: true,
    dates: [
      { date: new Date('2026-02-20'), spots: 2 },
      { date: new Date('2026-03-05'), spots: 6 },
    ],
    fullDescription: 'Domina el arte de colocar azulejos como un profesional. Aprende técnicas de corte, nivelación y rejuntado.',
    fullDescriptionEn: 'Master the art of laying tiles like a professional. Learn cutting, leveling and grouting techniques.',
  },
  {
    slug: 'carpinteria-basica',
    title: 'Carpintería Básica',
    titleEn: 'Basic Carpentry',
    description: 'Construye tus propios muebles de madera',
    descriptionEn: 'Build your own wooden furniture',
    price: 375,
    lessons: 4,
    duration: '24 horas',
    durationEn: '24 hours',
    level: 'APRENDE',
    category: 'CARPINTERIA',
    location: 'Valencia',
    imageUrl: 'img/tekton-YhKP9j4-5FQ-unsplash.jpg',
    isPopular: true,
    dates: [
      { date: new Date('2026-02-17'), spots: 5 },
      { date: new Date('2026-03-10'), spots: 8 },
    ],
    fullDescription: 'Aprende las técnicas fundamentales de carpintería y construye tu primer mueble.',
    fullDescriptionEn: 'Learn the fundamental carpentry techniques and build your first piece of furniture.',
  },
  {
    slug: 'pintura-decoracion',
    title: 'Pintura y Decoración',
    titleEn: 'Painting & Decoration',
    description: 'Técnicas de pintura para interiores',
    descriptionEn: 'Interior painting techniques',
    price: 195,
    lessons: 2,
    duration: '12 horas',
    durationEn: '12 hours',
    level: 'APRENDE',
    category: 'PINTURA',
    location: 'Madrid',
    imageUrl: 'img/ernys-cDw2cA9bbYs-unsplash.jpg',
    isPopular: false,
    dates: [
      { date: new Date('2026-02-16'), spots: 6 },
      { date: new Date('2026-02-23'), spots: 4 },
    ],
    fullDescription: 'Descubre los secretos de la pintura profesional para transformar cualquier espacio.',
    fullDescriptionEn: 'Discover the secrets of professional painting to transform any space.',
  },
  {
    slug: 'estucado-paredes',
    title: 'Estucado de Paredes',
    titleEn: 'Wall Plastering',
    description: 'Aprende a estucar como un profesional',
    descriptionEn: 'Learn professional plastering',
    price: 320,
    lessons: 3,
    duration: '18 horas',
    durationEn: '18 hours',
    level: 'CONSTRUYE',
    category: 'ESTUCADO',
    location: 'Barcelona',
    imageUrl: 'img/erik-mclean-w2bzXCx7Y3g-unsplash.jpg',
    isPopular: false,
    dates: [
      { date: new Date('2026-02-19'), spots: 3 },
      { date: new Date('2026-03-12'), spots: 7 },
    ],
    fullDescription: 'Domina las técnicas de estucado para conseguir paredes perfectamente lisas.',
    fullDescriptionEn: 'Master plastering techniques to achieve perfectly smooth walls.',
  },
  {
    slug: 'albanileria-basica',
    title: 'Albañilería Básica',
    titleEn: 'Basic Masonry',
    description: 'Fundamentos de construcción y albañilería',
    descriptionEn: 'Construction and masonry fundamentals',
    price: 450,
    lessons: 5,
    duration: '30 horas',
    durationEn: '30 hours',
    level: 'APRENDE',
    category: 'ALBANILERIA',
    location: 'Madrid',
    imageUrl: 'img/james-kovin-qqLxF3M-MA8-unsplash.jpg',
    isPopular: false,
    dates: [
      { date: new Date('2026-02-21'), spots: 4 },
      { date: new Date('2026-03-07'), spots: 8 },
    ],
    fullDescription: 'Aprende las bases de la albañilería para realizar pequeñas obras en casa.',
    fullDescriptionEn: 'Learn the basics of masonry to carry out small works at home.',
  },
  {
    slug: 'fontaneria-avanzada',
    title: 'Fontanería Avanzada',
    titleEn: 'Advanced Plumbing',
    description: 'Instalaciones completas de baño y cocina',
    descriptionEn: 'Complete bathroom and kitchen installations',
    price: 495,
    lessons: 6,
    duration: '36 horas',
    durationEn: '36 hours',
    level: 'DOMINA',
    category: 'FONTANERIA',
    location: 'Barcelona',
    imageUrl: 'img/sasun-bughdaryan-Re1O5byZ8bY-unsplash.jpg',
    isPopular: false,
    dates: [
      { date: new Date('2026-03-02'), spots: 2 },
      { date: new Date('2026-03-16'), spots: 5 },
    ],
    fullDescription: 'Lleva tus habilidades de fontanería al siguiente nivel con instalaciones completas.',
    fullDescriptionEn: 'Take your plumbing skills to the next level with complete installations.',
  },
  {
    slug: 'soldadura-basica',
    title: 'Soldadura Básica',
    titleEn: 'Basic Welding',
    description: 'Introducción a técnicas de soldadura',
    descriptionEn: 'Introduction to welding techniques',
    price: 385,
    lessons: 4,
    duration: '24 horas',
    durationEn: '24 hours',
    level: 'APRENDE',
    category: 'SOLDADURA',
    location: 'Madrid',
    imageUrl: 'img/ali-mkumbwa-1iho4gvI4-g-unsplash.jpg',
    isPopular: false,
    dates: [
      { date: new Date('2026-03-03'), spots: 4 },
      { date: new Date('2026-03-17'), spots: 6 },
    ],
    fullDescription: 'Aprende las técnicas básicas de soldadura para proyectos de metal.',
    fullDescriptionEn: 'Learn basic welding techniques for metal projects.',
  },
  {
    slug: 'instalacion-suelos',
    title: 'Instalación de Suelos',
    titleEn: 'Floor Installation',
    description: 'Parquet, laminado y vinílico',
    descriptionEn: 'Parquet, laminate and vinyl',
    price: 310,
    lessons: 3,
    duration: '18 horas',
    durationEn: '18 hours',
    level: 'APRENDE',
    category: 'SUELOS',
    location: 'Barcelona',
    imageUrl: 'img/valentina-giarre-jdriGWcZZKo-unsplash.jpg',
    isPopular: false,
    dates: [
      { date: new Date('2026-02-28'), spots: 5 },
      { date: new Date('2026-03-11'), spots: 7 },
    ],
    fullDescription: 'Domina la instalación de diferentes tipos de suelos para renovar cualquier espacio.',
    fullDescriptionEn: 'Master the installation of different types of floors to renovate any space.',
  },
  {
    slug: 'climatizacion-basica',
    title: 'Climatización Básica',
    titleEn: 'Basic HVAC',
    description: 'Instalación y mantenimiento de aire acondicionado',
    descriptionEn: 'AC installation and maintenance',
    price: 420,
    lessons: 4,
    duration: '24 horas',
    durationEn: '24 hours',
    level: 'CONSTRUYE',
    category: 'CLIMATIZACION',
    location: 'Valencia',
    imageUrl: 'img/ryno-marais-dhFpe7CTI5Y-unsplash.jpg',
    isPopular: false,
    dates: [
      { date: new Date('2026-03-04'), spots: 3 },
      { date: new Date('2026-03-18'), spots: 6 },
    ],
    fullDescription: 'Aprende a instalar y mantener sistemas de climatización doméstica.',
    fullDescriptionEn: 'Learn to install and maintain home air conditioning systems.',
  },
  {
    slug: 'bricolaje-completo',
    title: 'Bricolaje Completo',
    titleEn: 'Complete DIY',
    description: 'Curso integral de bricolaje doméstico',
    descriptionEn: 'Comprehensive home DIY course',
    price: 550,
    lessons: 8,
    duration: '48 horas',
    durationEn: '48 hours',
    level: 'TODOS',
    category: 'BRICOLAJE',
    location: 'Madrid',
    imageUrl: 'img/bob-van-aubel-KIJBRWBfhvM-unsplash.jpg',
    isPopular: false,
    dates: [
      { date: new Date('2026-02-24'), spots: 6 },
      { date: new Date('2026-03-14'), spots: 8 },
    ],
    fullDescription: 'El curso más completo de bricolaje que cubre todas las disciplinas esenciales.',
    fullDescriptionEn: 'The most complete DIY course covering all essential disciplines.',
  },
];

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.booking.deleteMany();
  await prisma.workshopDate.deleteMany();
  await prisma.workshop.deleteMany();
  await prisma.contact.deleteMany();

  // Create workshops with dates
  for (const workshopData of workshops) {
    const { dates, ...workshopFields } = workshopData;
    
    const workshop = await prisma.workshop.create({
      data: {
        ...workshopFields,
        dates: {
          create: dates.map(dateData => ({
            date: dateData.date,
            maxSpots: 10,
            bookedSpots: dateData.spots ? 10 - dateData.spots : 0,
          })),
        },
      },
    });

    console.log(`✅ Created workshop: ${workshop.title}`);
  }

  console.log('✨ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
