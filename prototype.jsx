import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Euro, Users, ChevronRight, ChevronDown, Globe, Menu, X, Check, Building2, User, Mail, Phone, Home, MessageSquare, Briefcase, Info, Send } from 'lucide-react';

// ============================================
// DESIGN TOKENS & THEME
// ============================================
const theme = {
  colors: {
    primary: '#2D7A7A',      // Teal green (main brand color)
    primaryDark: '#1F5F5F',   // Darker teal for hover
    primaryLight: '#E8F4F4',  // Light teal for backgrounds
    secondary: '#F5A623',     // Warm orange for accents
    text: '#2C3E50',          // Dark blue-gray for text
    textLight: '#6B7C8A',     // Lighter text
    background: '#FAFBFC',    // Off-white background
    white: '#FFFFFF',
    border: '#E1E8ED',
    success: '#27AE60',
    error: '#E74C3C',
  }
};

// ============================================
// MOCK DATA
// ============================================
const workshops = [
  {
    id: 1,
    title: 'Fontanería Básica',
    titleEn: 'Basic Plumbing',
    description: 'Aprende los fundamentos de la fontanería doméstica',
    descriptionEn: 'Learn the fundamentals of home plumbing',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=250&fit=crop',
    price: 295,
    lessons: 3,
    location: 'Madrid',
    category: 'fontaneria',
    level: 'Básico',
    duration: '18 horas',
    popular: true,
    dates: [
      { date: '2026-02-15', spots: 4 },
      { date: '2026-02-22', spots: 2 },
      { date: '2026-03-01', spots: 8 },
      { date: '2026-03-15', spots: 6 },
    ],
    fullDescription: 'En este curso aprenderás todo lo necesario para realizar reparaciones básicas de fontanería en tu hogar. Desde arreglar grifos hasta instalar nuevas tuberías.',
  },
  {
    id: 2,
    title: 'Electricidad Doméstica',
    titleEn: 'Home Electrical',
    description: 'Domina las instalaciones eléctricas básicas',
    descriptionEn: 'Master basic electrical installations',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop',
    price: 345,
    lessons: 4,
    location: 'Barcelona',
    category: 'electricidad',
    level: 'Básico',
    duration: '24 horas',
    popular: true,
    dates: [
      { date: '2026-02-18', spots: 3 },
      { date: '2026-02-25', spots: 5 },
      { date: '2026-03-08', spots: 8 },
    ],
    fullDescription: 'Aprende a realizar instalaciones eléctricas seguras y a resolver problemas comunes en el hogar.',
  },
  {
    id: 3,
    title: 'Alicatado y Azulejos',
    titleEn: 'Tiling Workshop',
    description: 'Técnicas profesionales de colocación de azulejos',
    descriptionEn: 'Professional tile laying techniques',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=250&fit=crop',
    price: 425,
    lessons: 5,
    location: 'Madrid',
    category: 'alicatado',
    level: 'Intermedio',
    duration: '30 horas',
    popular: true,
    dates: [
      { date: '2026-02-20', spots: 2 },
      { date: '2026-03-05', spots: 6 },
    ],
    fullDescription: 'Domina el arte de colocar azulejos como un profesional. Aprende técnicas de corte, nivelación y rejuntado.',
  },
  {
    id: 4,
    title: 'Carpintería Básica',
    titleEn: 'Basic Carpentry',
    description: 'Construye tus propios muebles de madera',
    descriptionEn: 'Build your own wooden furniture',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=250&fit=crop',
    price: 375,
    lessons: 4,
    location: 'Valencia',
    category: 'carpinteria',
    level: 'Básico',
    duration: '24 horas',
    popular: true,
    dates: [
      { date: '2026-02-17', spots: 5 },
      { date: '2026-03-10', spots: 8 },
    ],
    fullDescription: 'Aprende las técnicas fundamentales de carpintería y construye tu primer mueble.',
  },
  {
    id: 5,
    title: 'Pintura y Decoración',
    titleEn: 'Painting & Decoration',
    description: 'Técnicas de pintura para interiores',
    descriptionEn: 'Interior painting techniques',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=250&fit=crop',
    price: 195,
    lessons: 2,
    location: 'Madrid',
    category: 'pintura',
    level: 'Básico',
    duration: '12 horas',
    popular: false,
    dates: [
      { date: '2026-02-16', spots: 6 },
      { date: '2026-02-23', spots: 4 },
    ],
    fullDescription: 'Descubre los secretos de la pintura profesional para transformar cualquier espacio.',
  },
  {
    id: 6,
    title: 'Estucado de Paredes',
    titleEn: 'Wall Plastering',
    description: 'Aprende a estucar como un profesional',
    descriptionEn: 'Learn professional plastering',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop',
    price: 320,
    lessons: 3,
    location: 'Barcelona',
    category: 'estucado',
    level: 'Intermedio',
    duration: '18 horas',
    popular: false,
    dates: [
      { date: '2026-02-19', spots: 3 },
      { date: '2026-03-12', spots: 7 },
    ],
    fullDescription: 'Domina las técnicas de estucado para conseguir paredes perfectamente lisas.',
  },
  {
    id: 7,
    title: 'Albañilería Básica',
    titleEn: 'Basic Masonry',
    description: 'Fundamentos de construcción y albañilería',
    descriptionEn: 'Construction and masonry fundamentals',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop',
    price: 450,
    lessons: 5,
    location: 'Madrid',
    category: 'albanileria',
    level: 'Básico',
    duration: '30 horas',
    popular: false,
    dates: [
      { date: '2026-02-21', spots: 4 },
      { date: '2026-03-07', spots: 8 },
    ],
    fullDescription: 'Aprende las bases de la albañilería para realizar pequeñas obras en casa.',
  },
  {
    id: 8,
    title: 'Fontanería Avanzada',
    titleEn: 'Advanced Plumbing',
    description: 'Instalaciones completas de baño y cocina',
    descriptionEn: 'Complete bathroom and kitchen installations',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=250&fit=crop',
    price: 495,
    lessons: 6,
    location: 'Barcelona',
    category: 'fontaneria',
    level: 'Avanzado',
    duration: '36 horas',
    popular: false,
    dates: [
      { date: '2026-03-02', spots: 2 },
      { date: '2026-03-16', spots: 5 },
    ],
    fullDescription: 'Lleva tus habilidades de fontanería al siguiente nivel con instalaciones completas.',
  },
  {
    id: 9,
    title: 'Bricolaje Completo',
    titleEn: 'Complete DIY',
    description: 'Curso integral de bricolaje doméstico',
    descriptionEn: 'Comprehensive home DIY course',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=250&fit=crop',
    price: 550,
    lessons: 8,
    location: 'Valencia',
    category: 'bricolaje',
    level: 'Todos los niveles',
    duration: '48 horas',
    popular: false,
    dates: [
      { date: '2026-02-24', spots: 6 },
      { date: '2026-03-14', spots: 8 },
    ],
    fullDescription: 'El curso más completo de bricolaje que cubre todas las disciplinas esenciales.',
  },
  {
    id: 10,
    title: 'Soldadura Básica',
    titleEn: 'Basic Welding',
    description: 'Introducción a técnicas de soldadura',
    descriptionEn: 'Introduction to welding techniques',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop',
    price: 385,
    lessons: 4,
    location: 'Madrid',
    category: 'soldadura',
    level: 'Básico',
    duration: '24 horas',
    popular: false,
    dates: [
      { date: '2026-03-03', spots: 4 },
      { date: '2026-03-17', spots: 6 },
    ],
    fullDescription: 'Aprende las técnicas básicas de soldadura para proyectos de metal.',
  },
  {
    id: 11,
    title: 'Instalación de Suelos',
    titleEn: 'Floor Installation',
    description: 'Parquet, laminado y vinílico',
    descriptionEn: 'Parquet, laminate and vinyl',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    price: 310,
    lessons: 3,
    location: 'Barcelona',
    category: 'suelos',
    level: 'Básico',
    duration: '18 horas',
    popular: false,
    dates: [
      { date: '2026-02-28', spots: 5 },
      { date: '2026-03-11', spots: 7 },
    ],
    fullDescription: 'Domina la instalación de diferentes tipos de suelos para renovar cualquier espacio.',
  },
  {
    id: 12,
    title: 'Climatización Básica',
    titleEn: 'Basic HVAC',
    description: 'Instalación y mantenimiento de aire acondicionado',
    descriptionEn: 'AC installation and maintenance',
    image: 'https://images.unsplash.com/photo-1631545806609-1505ab5c5cf9?w=400&h=250&fit=crop',
    price: 420,
    lessons: 4,
    location: 'Valencia',
    category: 'climatizacion',
    level: 'Intermedio',
    duration: '24 horas',
    popular: false,
    dates: [
      { date: '2026-03-04', spots: 3 },
      { date: '2026-03-18', spots: 6 },
    ],
    fullDescription: 'Aprende a instalar y mantener sistemas de climatización doméstica.',
  },
];

const categories = [
  { id: 'all', name: 'Todos', nameEn: 'All' },
  { id: 'fontaneria', name: 'Fontanería', nameEn: 'Plumbing' },
  { id: 'electricidad', name: 'Electricidad', nameEn: 'Electrical' },
  { id: 'alicatado', name: 'Alicatado', nameEn: 'Tiling' },
  { id: 'carpinteria', name: 'Carpintería', nameEn: 'Carpentry' },
  { id: 'pintura', name: 'Pintura', nameEn: 'Painting' },
  { id: 'estucado', name: 'Estucado', nameEn: 'Plastering' },
  { id: 'albanileria', name: 'Albañilería', nameEn: 'Masonry' },
  { id: 'bricolaje', name: 'Bricolaje', nameEn: 'DIY' },
  { id: 'soldadura', name: 'Soldadura', nameEn: 'Welding' },
  { id: 'suelos', name: 'Suelos', nameEn: 'Flooring' },
  { id: 'climatizacion', name: 'Climatización', nameEn: 'HVAC' },
];

const locations = ['Madrid', 'Barcelona', 'Valencia'];
const levels = ['Básico', 'Intermedio', 'Avanzado', 'Todos los niveles'];

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  es: {
    nav: {
      workshops: 'Talleres',
      about: 'Sobre Nosotros',
      vacancies: 'Trabaja con Nosotros',
      contact: 'Contacto',
    },
    hero: {
      title: 'Aprende un oficio con tus propias manos',
      subtitle: 'Cursos prácticos de bricolaje y construcción impartidos por profesionales con años de experiencia',
      cta: 'Ver todos los cursos',
    },
    popular: 'Más Populares',
    otherCourses: 'Otros Cursos',
    seeAll: 'Ver todos los cursos',
    price: 'Precio',
    lessons: 'Clases',
    location: 'Ubicación',
    viewCourse: 'Ver curso',
    filters: {
      title: 'Filtros',
      category: 'Categoría',
      location: 'Ubicación',
      level: 'Nivel',
      priceRange: 'Rango de precio',
      clear: 'Limpiar filtros',
    },
    course: {
      duration: 'Duración',
      level: 'Nivel',
      includes: 'Qué incluye',
      materials: 'Todos los materiales',
      certificate: 'Certificado de finalización',
      support: 'Soporte post-curso',
      smallGroups: 'Grupos reducidos (máx. 10)',
      selectDate: 'Selecciona una fecha',
      spotsLeft: 'plazas disponibles',
      signUp: 'Inscribirme',
      soldOut: 'Agotado',
    },
    signup: {
      title: 'Inscripción',
      personal: 'Datos Personales',
      firstName: 'Nombre',
      lastName: 'Apellidos',
      email: 'Correo electrónico',
      emailConfirm: 'Confirmar correo',
      phone: 'Teléfono',
      birthdate: 'Fecha de nacimiento',
      address: 'Dirección',
      street: 'Calle y número',
      city: 'Ciudad',
      postalCode: 'Código postal',
      isCompany: 'Inscripción como empresa',
      company: 'Datos de Empresa',
      companyName: 'Nombre de empresa',
      cif: 'CIF/NIF',
      companyAddress: 'Dirección fiscal',
      terms: 'Acepto las condiciones generales y entiendo que esta inscripción conlleva obligación de pago.',
      termsLink: 'Ver condiciones generales',
      submit: 'Confirmar inscripción',
      comments: 'Comentarios adicionales',
    },
    confirmation: {
      title: '¡Inscripción confirmada!',
      message: 'Hemos recibido tu inscripción correctamente.',
      emailSent: 'Te hemos enviado un correo de confirmación a',
      nextSteps: 'Próximos pasos',
      step1: 'Recibirás la factura por correo electrónico',
      step2: 'Realiza el pago en los próximos 7 días',
      step3: 'Recibirás información detallada antes del curso',
      backHome: 'Volver al inicio',
    },
    about: {
      title: 'Sobre Nosotros',
      mission: 'Nuestra Misión',
      missionText: 'Creemos que todo el mundo debería poder aprender un oficio con sus propias manos. Nuestros cursos combinan teoría y práctica para que salgas preparado para cualquier proyecto.',
      values: 'Nuestros Valores',
      value1: 'Aprendizaje práctico',
      value2: 'Grupos reducidos',
      value3: 'Profesores expertos',
      value4: 'Materiales incluidos',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes alguna pregunta? Estamos aquí para ayudarte.',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar mensaje',
      },
      info: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        hours: 'Horario de atención',
        hoursValue: 'Lun - Vie: 9:00 - 18:00',
      },
    },
    vacancies: {
      title: 'Trabaja con Nosotros',
      subtitle: '¿Eres un profesional con pasión por enseñar? Únete a nuestro equipo.',
      openPositions: 'Posiciones Abiertas',
      noPositions: 'Actualmente no hay posiciones abiertas. Envíanos tu CV igualmente.',
      sendCV: 'Enviar CV',
    },
    footer: {
      description: 'Aprende oficios prácticos con profesionales experimentados. Cursos de fontanería, electricidad, carpintería y más.',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      cookies: 'Política de Cookies',
    },
  },
  en: {
    nav: {
      workshops: 'Workshops',
      about: 'About Us',
      vacancies: 'Careers',
      contact: 'Contact',
    },
    hero: {
      title: 'Learn a trade with your own hands',
      subtitle: 'Practical DIY and construction courses taught by professionals with years of experience',
      cta: 'View all courses',
    },
    popular: 'Most Popular',
    otherCourses: 'Other Courses',
    seeAll: 'View all courses',
    price: 'Price',
    lessons: 'Lessons',
    location: 'Location',
    viewCourse: 'View course',
    filters: {
      title: 'Filters',
      category: 'Category',
      location: 'Location',
      level: 'Level',
      priceRange: 'Price range',
      clear: 'Clear filters',
    },
    course: {
      duration: 'Duration',
      level: 'Level',
      includes: 'What\'s included',
      materials: 'All materials',
      certificate: 'Completion certificate',
      support: 'Post-course support',
      smallGroups: 'Small groups (max. 10)',
      selectDate: 'Select a date',
      spotsLeft: 'spots left',
      signUp: 'Sign up',
      soldOut: 'Sold out',
    },
    signup: {
      title: 'Registration',
      personal: 'Personal Details',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      emailConfirm: 'Confirm email',
      phone: 'Phone',
      birthdate: 'Date of birth',
      address: 'Address',
      street: 'Street and number',
      city: 'City',
      postalCode: 'Postal code',
      isCompany: 'Register as company',
      company: 'Company Details',
      companyName: 'Company name',
      cif: 'Tax ID',
      companyAddress: 'Billing address',
      terms: 'I accept the general terms and understand that this registration entails payment obligation.',
      termsLink: 'View general terms',
      submit: 'Confirm registration',
      comments: 'Additional comments',
    },
    confirmation: {
      title: 'Registration confirmed!',
      message: 'We have received your registration successfully.',
      emailSent: 'We have sent a confirmation email to',
      nextSteps: 'Next steps',
      step1: 'You will receive the invoice by email',
      step2: 'Complete payment within 7 days',
      step3: 'You will receive detailed information before the course',
      backHome: 'Back to home',
    },
    about: {
      title: 'About Us',
      mission: 'Our Mission',
      missionText: 'We believe everyone should be able to learn a trade with their own hands. Our courses combine theory and practice so you leave prepared for any project.',
      values: 'Our Values',
      value1: 'Hands-on learning',
      value2: 'Small groups',
      value3: 'Expert teachers',
      value4: 'Materials included',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a question? We\'re here to help.',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send message',
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Office hours',
        hoursValue: 'Mon - Fri: 9:00 - 18:00',
      },
    },
    vacancies: {
      title: 'Careers',
      subtitle: 'Are you a professional with a passion for teaching? Join our team.',
      openPositions: 'Open Positions',
      noPositions: 'Currently no open positions. Send us your CV anyway.',
      sendCV: 'Send CV',
    },
    footer: {
      description: 'Learn practical trades with experienced professionals. Courses in plumbing, electrical, carpentry and more.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      cookies: 'Cookie Policy',
    },
  },
};

// ============================================
// COMPONENTS
// ============================================

// Header Component
const Header = ({ currentPage, setCurrentPage, lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-800">
              HazloPro
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('workshops')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'workshops' 
                  ? 'text-teal-600' 
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              {t.nav.workshops}
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-teal-600' 
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => setCurrentPage('vacancies')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'vacancies' 
                  ? 'text-teal-600' 
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              {t.nav.vacancies}
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contact' 
                  ? 'text-teal-600' 
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              {t.nav.contact}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center border-l pl-6 ml-2">
              <Globe className="w-4 h-4 text-gray-400 mr-2" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="text-sm text-gray-600 bg-transparent border-none cursor-pointer focus:outline-none focus:ring-0"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => { setCurrentPage('workshops'); setMobileMenuOpen(false); }}
                className="text-left text-gray-600 hover:text-teal-600"
              >
                {t.nav.workshops}
              </button>
              <button
                onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
                className="text-left text-gray-600 hover:text-teal-600"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => { setCurrentPage('vacancies'); setMobileMenuOpen(false); }}
                className="text-left text-gray-600 hover:text-teal-600"
              >
                {t.nav.vacancies}
              </button>
              <button
                onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
                className="text-left text-gray-600 hover:text-teal-600"
              >
                {t.nav.contact}
              </button>
              <div className="flex items-center pt-4 border-t">
                <Globe className="w-4 h-4 text-gray-400 mr-2" />
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="text-sm text-gray-600 bg-transparent border-none"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Workshop Card Component
const WorkshopCard = ({ workshop, lang, onClick }) => {
  const t = translations[lang];
  const title = lang === 'en' ? workshop.titleEn : workshop.title;
  const description = lang === 'en' ? workshop.descriptionEn : workshop.description;

  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={() => onClick(workshop)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={workshop.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {workshop.popular && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            ⭐ Popular
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-teal-700 text-xs font-medium px-3 py-1 rounded-full">
          {workshop.level}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Info Table */}
        <div className="grid grid-cols-3 gap-2 text-center mb-4 py-3 bg-gray-50 rounded-lg">
          <div>
            <p className="text-xs text-gray-400 mb-1">{t.price}</p>
            <p className="text-sm font-semibold text-gray-800">€{workshop.price}</p>
          </div>
          <div className="border-x border-gray-200">
            <p className="text-xs text-gray-400 mb-1">{t.lessons}</p>
            <p className="text-sm font-semibold text-gray-800">{workshop.lessons}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">{t.location}</p>
            <p className="text-sm font-semibold text-gray-800">{workshop.location}</p>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center group">
          {t.viewCourse}
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ lang, setCurrentPage }) => {
  const t = translations[lang].footer;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-white">
                HazloPro
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              {t.description}
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <span className="text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <span className="text-sm">YT</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('workshops')}
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  {translations[lang].nav.workshops}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  {translations[lang].nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('vacancies')}
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  {translations[lang].nav.vacancies}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  {translations[lang].nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-teal-500" />
                <span>Calle Principal 123<br/>28001 Madrid</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-teal-500" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-teal-500" />
                <span>info@tallerpro.es</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2026 HazloPro. {t.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-teal-400">{t.privacy}</a>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-400">{t.terms}</a>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-400">{t.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// PAGES
// ============================================

// Home Page
const HomePage = ({ lang, setCurrentPage, setSelectedWorkshop }) => {
  const t = translations[lang];
  const popularWorkshops = workshops.filter(w => w.popular).slice(0, 4);
  const otherWorkshops = workshops.filter(w => !w.popular).slice(0, 8);

  const handleWorkshopClick = (workshop) => {
    setSelectedWorkshop(workshop);
    setCurrentPage('course');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Content (60%) */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <button
                onClick={() => setCurrentPage('workshops')}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center shadow-lg shadow-teal-600/20"
              >
                {t.hero.cta}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>

              {/* Hero Image */}
              <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop"
                  alt="Workshop"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </div>

            {/* Right Content - Popular Grid (40%) */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-orange-500 mr-2">⭐</span>
                {t.popular}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {popularWorkshops.map((workshop) => (
                  <div
                    key={workshop.id}
                    onClick={() => handleWorkshopClick(workshop)}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="h-28 overflow-hidden">
                      <img
                        src={workshop.image}
                        alt={lang === 'en' ? workshop.titleEn : workshop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-1 group-hover:text-teal-600 transition-colors">
                        {lang === 'en' ? workshop.titleEn : workshop.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                        {lang === 'en' ? workshop.descriptionEn : workshop.description}
                      </p>
                      <div className="grid grid-cols-3 gap-1 text-center py-2 bg-gray-50 rounded-md text-xs">
                        <div>
                          <p className="text-gray-400">{t.price}</p>
                          <p className="font-semibold text-gray-800">€{workshop.price}</p>
                        </div>
                        <div className="border-x border-gray-200">
                          <p className="text-gray-400">{t.lessons}</p>
                          <p className="font-semibold text-gray-800">{workshop.lessons}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">{t.location}</p>
                          <p className="font-semibold text-gray-800 truncate">{workshop.location}</p>
                        </div>
                      </div>
                      <button className="w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium py-2 rounded-md transition-colors">
                        {t.viewCourse}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {t.otherCourses}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherWorkshops.map((workshop) => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
                lang={lang}
                onClick={handleWorkshopClick}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('workshops')}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center"
            >
              {t.seeAll}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">{lang === 'es' ? 'Alumnos formados' : 'Students trained'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">12</div>
              <div className="text-gray-600">{lang === 'es' ? 'Cursos disponibles' : 'Courses available'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">4.9</div>
              <div className="text-gray-600">{lang === 'es' ? 'Valoración media' : 'Average rating'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">3</div>
              <div className="text-gray-600">{lang === 'es' ? 'Ubicaciones' : 'Locations'}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Workshops Page (with filters)
const WorkshopsPage = ({ lang, setCurrentPage, setSelectedWorkshop }) => {
  const t = translations[lang];
  const [filters, setFilters] = useState({
    category: 'all',
    location: '',
    level: '',
    priceMin: '',
    priceMax: '',
  });
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredWorkshops = workshops.filter((workshop) => {
    if (filters.category !== 'all' && workshop.category !== filters.category) return false;
    if (filters.location && workshop.location !== filters.location) return false;
    if (filters.level && workshop.level !== filters.level) return false;
    if (filters.priceMin && workshop.price < parseInt(filters.priceMin)) return false;
    if (filters.priceMax && workshop.price > parseInt(filters.priceMax)) return false;
    return true;
  });

  const handleWorkshopClick = (workshop) => {
    setSelectedWorkshop(workshop);
    setCurrentPage('course');
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      location: '',
      level: '',
      priceMin: '',
      priceMax: '',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">{t.filters.title}</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-teal-600 hover:text-teal-700"
                >
                  {t.filters.clear}
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.filters.category}
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {lang === 'en' ? cat.nameEn : cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.filters.location}
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">{lang === 'es' ? 'Todas' : 'All'}</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.filters.level}
                </label>
                <select
                  value={filters.level}
                  onChange={(e) => setFilters({ ...filters, level: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">{lang === 'es' ? 'Todos' : 'All'}</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.filters.priceRange}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceMin}
                    onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                    className="w-1/2 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                    className="w-1/2 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {t.nav.workshops}
              </h1>
              <span className="text-sm text-gray-500">
                {filteredWorkshops.length} {lang === 'es' ? 'cursos encontrados' : 'courses found'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredWorkshops.map((workshop) => (
                <WorkshopCard
                  key={workshop.id}
                  workshop={workshop}
                  lang={lang}
                  onClick={handleWorkshopClick}
                />
              ))}
            </div>
            {filteredWorkshops.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">
                  {lang === 'es' ? 'No se encontraron cursos con estos filtros.' : 'No courses found with these filters.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Course Detail Page
const CoursePage = ({ lang, workshop, setCurrentPage, setSelectedDate }) => {
  const t = translations[lang];
  const [selectedDateState, setSelectedDateState] = useState(null);
  const title = lang === 'en' ? workshop.titleEn : workshop.title;
  const description = lang === 'en' ? workshop.descriptionEn : workshop.description;

  const handleSignUp = () => {
    if (selectedDateState) {
      setSelectedDate(selectedDateState);
      setCurrentPage('signup');
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', options);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-gray-500 hover:text-teal-600"
              >
                {lang === 'es' ? 'Inicio' : 'Home'}
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <button 
                onClick={() => setCurrentPage('workshops')}
                className="text-gray-500 hover:text-teal-600"
              >
                {t.nav.workshops}
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-teal-600 font-medium">{title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={workshop.image}
                alt={title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Title and badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1 rounded-full">
                {workshop.level}
              </span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {workshop.location}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-8">{workshop.fullDescription}</p>

            {/* Course Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <Euro className="w-5 h-5 text-teal-600 mb-2" />
                <p className="text-sm text-gray-500">{t.price}</p>
                <p className="text-xl font-bold text-gray-900">€{workshop.price}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <Clock className="w-5 h-5 text-teal-600 mb-2" />
                <p className="text-sm text-gray-500">{t.course.duration}</p>
                <p className="text-xl font-bold text-gray-900">{workshop.duration}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <Calendar className="w-5 h-5 text-teal-600 mb-2" />
                <p className="text-sm text-gray-500">{t.lessons}</p>
                <p className="text-xl font-bold text-gray-900">{workshop.lessons} {lang === 'es' ? 'clases' : 'classes'}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <Users className="w-5 h-5 text-teal-600 mb-2" />
                <p className="text-sm text-gray-500">{lang === 'es' ? 'Grupo' : 'Group'}</p>
                <p className="text-xl font-bold text-gray-900">Max. 10</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.course.includes}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-gray-700">{t.course.materials}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-gray-700">{t.course.certificate}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-gray-700">{t.course.support}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-gray-700">{t.course.smallGroups}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Calendar (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t.course.selectDate}
              </h3>
              
              <div className="space-y-3 mb-6">
                {workshop.dates.map((dateOption, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDateState(dateOption)}
                    disabled={dateOption.spots === 0}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      selectedDateState?.date === dateOption.date
                        ? 'border-teal-600 bg-teal-50'
                        : dateOption.spots === 0
                        ? 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">
                          {formatDate(dateOption.date)}
                        </p>
                        <p className={`text-sm ${dateOption.spots <= 3 ? 'text-orange-500' : 'text-gray-500'}`}>
                          {dateOption.spots > 0 
                            ? `${dateOption.spots} ${t.course.spotsLeft}`
                            : t.course.soldOut
                          }
                        </p>
                      </div>
                      {selectedDateState?.date === dateOption.date && (
                        <Check className="w-5 h-5 text-teal-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Total</span>
                  <span className="text-2xl font-bold text-gray-900">€{workshop.price}</span>
                </div>
              </div>

              <button
                onClick={handleSignUp}
                disabled={!selectedDateState || selectedDateState.spots === 0}
                className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  selectedDateState && selectedDateState.spots > 0
                    ? 'bg-teal-600 hover:bg-teal-700 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {t.course.signUp}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                {lang === 'es' 
                  ? 'La inscripción conlleva obligación de pago'
                  : 'Registration entails payment obligation'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sign Up Page
const SignUpPage = ({ lang, workshop, selectedDate, setCurrentPage, setUserEmail }) => {
  const t = translations[lang].signup;
  const [isCompany, setIsCompany] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    phone: '',
    birthdate: '',
    street: '',
    city: '',
    postalCode: '',
    companyName: '',
    cif: '',
    companyAddress: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted && formData.email === formData.emailConfirm) {
      setUserEmail(formData.email);
      setCurrentPage('confirmation');
    }
  };

  const isFormValid = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'emailConfirm', 'phone', 'birthdate', 'street', 'city', 'postalCode'];
    const allFilled = requiredFields.every(field => formData[field].trim() !== '');
    const emailsMatch = formData.email === formData.emailConfirm;
    const companyValid = !isCompany || (formData.companyName && formData.cif);
    return allFilled && emailsMatch && termsAccepted && companyValid;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', options);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-4">
            <img
              src={workshop.image}
              alt={lang === 'en' ? workshop.titleEn : workshop.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-gray-900">
                {lang === 'en' ? workshop.titleEn : workshop.title}
              </h2>
              <p className="text-sm text-gray-500">{formatDate(selectedDate.date)}</p>
              <p className="text-sm text-gray-500">{workshop.location}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">€{workshop.price}</p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">{t.title}</h1>

          {/* Personal Data */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-teal-600" />
              {t.personal}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.firstName}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.lastName}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.email}<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.emailConfirm}<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="emailConfirm"
                  value={formData.emailConfirm}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                    formData.emailConfirm && formData.email !== formData.emailConfirm
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.birthdate}<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.phone}<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Home className="w-5 h-5 mr-2 text-teal-600" />
              {t.address}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.street}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.city}<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.postalCode}<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Company Toggle */}
          <div className="mb-8">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isCompany}
                onChange={(e) => setIsCompany(e.target.checked)}
                className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-700 flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                {t.isCompany}
              </span>
            </label>
          </div>

          {/* Company Data (conditional) */}
          {isCompany && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">{t.company}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.companyName}<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required={isCompany}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.cif}<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cif"
                    value={formData.cif}
                    onChange={handleChange}
                    required={isCompany}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.companyAddress}
                  </label>
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder={lang === 'es' ? 'Dejar vacío si es igual a la dirección personal' : 'Leave empty if same as personal address'}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Comments */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.comments}
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Terms */}
          <div className="mb-8">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-5 h-5 mt-0.5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="ml-3 text-sm text-gray-600">
                {t.terms}{' '}
                <a href="#" className="text-teal-600 hover:underline">
                  {t.termsLink}
                </a>
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full py-4 rounded-xl font-semibold transition-colors ${
              isFormValid()
                ? 'bg-teal-600 hover:bg-teal-700 text-white'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

// Confirmation Page
const ConfirmationPage = ({ lang, userEmail, setCurrentPage }) => {
  const t = translations[lang].confirmation;

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600 mb-6">{t.message}</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-500">{t.emailSent}</p>
            <p className="font-medium text-gray-900">{userEmail}</p>
          </div>

          {/* Next Steps */}
          <div className="text-left mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">{t.nextSteps}</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <span className="text-xs font-semibold text-teal-600">1</span>
                </div>
                <p className="text-gray-600">{t.step1}</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <span className="text-xs font-semibold text-teal-600">2</span>
                </div>
                <p className="text-gray-600">{t.step2}</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <span className="text-xs font-semibold text-teal-600">3</span>
                </div>
                <p className="text-gray-600">{t.step3}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage('home')}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-xl transition-colors"
          >
            {t.backHome}
          </button>
        </div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{t.title}</h1>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.mission}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t.missionText}</p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t.values}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[t.value1, t.value2, t.value3, t.value4].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-teal-600" />
                </div>
                <p className="font-medium text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = ({ lang }) => {
  const t = translations[lang].contact;

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                {t.form.send}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.info.address}</h3>
                  <p className="text-gray-600">Calle Principal 123<br/>28001 Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.info.phone}</h3>
                  <p className="text-gray-600">+34 912 345 678</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.info.email}</h3>
                  <p className="text-gray-600">info@tallerpro.es</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.info.hours}</h3>
                  <p className="text-gray-600">{t.info.hoursValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Vacancies Page
const VacanciesPage = ({ lang }) => {
  const t = translations[lang].vacancies;

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t.openPositions}</h2>
          
          {/* Example Position */}
          <div className="border border-gray-200 rounded-xl p-6 mb-4 hover:border-teal-300 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {lang === 'es' ? 'Instructor de Fontanería' : 'Plumbing Instructor'}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Madrid
                  </span>
                  <span className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {lang === 'es' ? 'Tiempo parcial' : 'Part-time'}
                  </span>
                </div>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                {lang === 'es' ? 'Aplicar' : 'Apply'}
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 mb-4 hover:border-teal-300 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {lang === 'es' ? 'Instructor de Electricidad' : 'Electrical Instructor'}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Barcelona
                  </span>
                  <span className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {lang === 'es' ? 'Tiempo completo' : 'Full-time'}
                  </span>
                </div>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                {lang === 'es' ? 'Aplicar' : 'Apply'}
              </button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-600 mb-4">{t.noPositions}</p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              {t.sendCV}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function HazloProApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('es');
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            lang={lang}
            setCurrentPage={setCurrentPage}
            setSelectedWorkshop={setSelectedWorkshop}
          />
        );
      case 'workshops':
        return (
          <WorkshopsPage
            lang={lang}
            setCurrentPage={setCurrentPage}
            setSelectedWorkshop={setSelectedWorkshop}
          />
        );
      case 'course':
        return selectedWorkshop ? (
          <CoursePage
            lang={lang}
            workshop={selectedWorkshop}
            setCurrentPage={setCurrentPage}
            setSelectedDate={setSelectedDate}
          />
        ) : (
          <HomePage lang={lang} setCurrentPage={setCurrentPage} setSelectedWorkshop={setSelectedWorkshop} />
        );
      case 'signup':
        return selectedWorkshop && selectedDate ? (
          <SignUpPage
            lang={lang}
            workshop={selectedWorkshop}
            selectedDate={selectedDate}
            setCurrentPage={setCurrentPage}
            setUserEmail={setUserEmail}
          />
        ) : (
          <HomePage lang={lang} setCurrentPage={setCurrentPage} setSelectedWorkshop={setSelectedWorkshop} />
        );
      case 'confirmation':
        return (
          <ConfirmationPage
            lang={lang}
            userEmail={userEmail}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'about':
        return <AboutPage lang={lang} />;
      case 'contact':
        return <ContactPage lang={lang} />;
      case 'vacancies':
        return <VacanciesPage lang={lang} />;
      default:
        return <HomePage lang={lang} setCurrentPage={setCurrentPage} setSelectedWorkshop={setSelectedWorkshop} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lang={lang}
        setLang={setLang}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer lang={lang} setCurrentPage={setCurrentPage} />
    </div>
  );
}
