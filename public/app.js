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
        coursesFound: 'cursos encontrados',
        home: 'Inicio',
        workshopsSubtitle: 'Encuentra el curso perfecto para ti',
        filters: {
            title: 'Filtros',
            category: 'Categoría',
            location: 'Ubicación',
            level: 'Nivel',
            availability: 'Disponibilidad',
            clear: 'Limpiar filtros',
            thisWeekend: 'Este fin de semana',
            nextWeek: 'Próxima semana',
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
            paymentNotice: 'La inscripción conlleva obligación de pago',
            aboutCourse: 'Sobre este curso',
            whatYouLearn: '¿Qué aprenderás?',
            forWhom: 'Para quién es este curso',
            prerequisites: 'Requisitos previos',
            practicalInfo: 'Información práctica',
            days: 'días',
            hoursPerDay: 'horas por día',
            totalHours: 'horas totales',
            maxParticipants: 'participantes máximo',
            practice: 'Práctica',
            theory: 'Teoría',
            groupSize: 'Tamaño del grupo',
            instructors: 'Tus instructores',
            reviews: 'Lo que dicen nuestros estudiantes',
            howToGetThere: 'Cómo llegar',
            address: 'Dirección',
            transport: 'Transporte',
            relatedCourses: 'También te puede interesar',
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
        trust: {
            students: 'Alumnos formados',
            courses: 'Cursos disponibles',
            rating: 'Valoración media',
            locations: 'Ubicaciones',
        },
        forCompanies: 'Para Empresas',
        total: 'Total',
        popularBadge: 'Popular',
        details: 'Detalles',
        classes: 'clases',
        stickyCta: {
            title: '¿Listo para empezar?',
            subtitle: 'Explora nuestros 30+ cursos prácticos',
        },
        categories: {
            title: 'Categorías',
        },
        contact: {
            title: 'Contacto',
            subtitle: '¿Tienes alguna pregunta? Estamos aquí para ayudarte',
            form: {
                name: 'Nombre completo',
                email: 'Correo electrónico',
                subject: 'Asunto',
                message: 'Mensaje',
                send: 'Enviar mensaje',
                sending: 'Enviando...',
                success: '¡Mensaje enviado! Te responderemos pronto.',
                error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
            },
            info: {
                title: 'Información de contacto',
                address: 'Dirección',
                phone: 'Teléfono',
                email: 'Correo electrónico',
                hours: 'Horario de atención',
                hoursValue: 'Lunes a Viernes: 9:00 - 18:00',
            },
        },
        about: {
            title: 'Sobre Nosotros',
            heroHeadline: 'Llevando la cultura del bricolaje a España, un taller a la vez',
            heroIntro: 'HazloPro nació de una simple observación: en los Países Bajos, los talleres de bricolaje están por todas partes. En España, son sorprendentemente raros. Estamos aquí para cambiar eso conectando artesanos cualificados con personas ansiosas por aprender.',
            ourStory: 'Nuestra Historia',
            storySubheading: 'De la cultura del bricolaje holandesa a la artesanía española',
            storyText: 'Cuando me mudé a España como emprendedor con pasión por el trabajo manual, inmediatamente noté que faltaba algo. En los Países Bajos, podías encontrar talleres para todo: alicatado, carpintería, trabajo eléctrico, fontanería. Los cursos de fin de semana eran parte de la cultura. En España, a pesar de la rica tradición del país en artesanía y oficios cualificados, estas oportunidades de aprendizaje eran difíciles de encontrar. Los propietarios querían aprender. Los aficionados querían mejorar sus habilidades. Pero los talleres simplemente no estaban ahí. Así nació HazloPro. Nuestra misión es simple: conectar a los talentosos artesanos de España con personas que quieren aprender. Reunimos a instructores motivados que aman compartir su experiencia con estudiantes que están ansiosos por ensuciarse las manos.',
            howWeWork: 'Cómo Trabajamos',
            howWeWork1Title: 'Instructores Expertos con Pasión',
            howWeWork1Text: 'Cada taller es impartido por profesionales que no solo conocen su oficio, sino que realmente disfrutan enseñándolo. Nuestros instructores son artesanos activos que aportan experiencia del mundo real y entusiasmo a cada sesión.',
            howWeWork2Title: 'Aprendizaje Práctico',
            howWeWork2Text: 'Creemos que la mejor manera de aprender es haciendo. Nuestros talleres se centran en habilidades prácticas que puedes aplicar inmediatamente en casa o en el trabajo.',
            howWeWork3Title: 'Grupos Pequeños, Atención Personalizada',
            howWeWork3Text: 'Mantenemos nuestros grupos pequeños para que cada participante reciba orientación individual y pueda trabajar a su propio ritmo.',
            howWeWork4Title: 'Para Todos',
            howWeWork4Text: 'Ya seas un propietario que quiere abordar proyectos por sí mismo, un profesional que busca ampliar sus habilidades, o una empresa que busca actividades de team-building, tenemos talleres para ti.',
            values: 'Nuestros Valores',
            value1Emoji: '🔨',
            value1Title: 'Aprender Haciendo',
            value1Text: 'La teoría tiene su lugar, pero creemos que las habilidades reales vienen de la práctica práctica en un ambiente de apoyo.',
            value2Emoji: '🤝',
            value2Title: 'Transferencia de Conocimiento',
            value2Text: 'Nuestros instructores son apasionados por compartir lo que saben. Sin secretos, sin atajos, solo experiencia honesta transmitida.',
            value3Emoji: '⚡',
            value3Title: 'Práctico y Aplicable',
            value3Text: 'Cada técnica que enseñamos tiene aplicación inmediata en el mundo real. Sales con habilidades que puedes usar la misma semana.',
            value4Emoji: '🌱',
            value4Title: 'Construir Confianza',
            value4Text: 'Más allá de las habilidades técnicas, te ayudamos a desarrollar la confianza para abordar proyectos de forma independiente.',
            whoFor: '¿Para Quién Son Nuestros Talleres?',
            whoFor1Emoji: '🏠',
            whoFor1Title: 'Propietarios',
            whoFor1Text: 'Que quieren ahorrar dinero y ganar independencia manejando sus propias reparaciones y mejoras.',
            whoFor2Emoji: '🎓',
            whoFor2Title: 'Cambios de Carrera',
            whoFor2Text: 'Buscando una introducción a oficios cualificados o explorando nuevas direcciones profesionales.',
            whoFor3Emoji: '👨‍🔧',
            whoFor3Title: 'Entusiastas del Bricolaje',
            whoFor3Text: 'Que quieren mejorar sus habilidades y aprender técnicas profesionales.',
            whoFor4Emoji: '👥',
            whoFor4Title: 'Empresas',
            whoFor4Text: 'Buscando experiencias prácticas y atractivas de team-building u oportunidades de desarrollo del personal.',
            faq: 'Preguntas Frecuentes',
            faq1Question: '¿Necesito traer mis propias herramientas?',
            faq1Answer: 'No, proporcionamos todas las herramientas y equipos profesionales para cada taller.',
            faq2Question: 'Nunca he hecho esto antes, ¿está bien?',
            faq2Answer: '¡Absolutamente! Muchos de nuestros talleres están diseñados específicamente para principiantes. Empezamos desde lo básico y construimos desde ahí.',
            faq3Question: '¿Están incluidos los materiales?',
            faq3Answer: 'Sí, todos los materiales necesarios para los ejercicios prácticos están incluidos en la tarifa del curso.',
            faq4Question: '¿Ofrecen talleres en inglés?',
            faq4Answer: 'Podemos organizar talleres en inglés para grupos. Contáctanos para discutir tus necesidades.',
            faq5Question: '¿Pueden crear talleres personalizados para nuestra empresa?',
            faq5Answer: '¡Sí! Regularmente desarrollamos talleres a medida para empresas. Ya sea team-building o desarrollo de habilidades específicas, podemos crear algo que se ajuste a tus necesidades.',
            cta: '¿Listo para aprender algo nuevo?',
        },
        vacancies: {
            title: 'Trabaja con Nosotros',
            subtitle: '¿Eres un profesional con pasión por enseñar? Únete a nuestro equipo.',
            openPositions: 'Vacantes Abiertas',
            noPositions: 'Actualmente no hay vacantes abiertas. Envíanos tu CV de todas formas.',
            sendCV: 'Enviar CV',
            apply: 'Aplicar',
            partTime: 'Media jornada',
            fullTime: 'Jornada completa',
            location: 'Ubicación',
            cvForm: {
                title: 'Envío de CV',
                name: 'Nombre completo',
                email: 'Correo electrónico',
                phone: 'Teléfono',
                position: 'Posición de interés',
                message: 'Mensaje (opcional)',
                cvFile: 'Adjuntar CV (PDF)',
                submit: 'Enviar CV',
                sending: 'Enviando...',
                success: '¡CV enviado! Te contactaremos pronto.',
                error: 'Error al enviar CV. Por favor, inténtalo de nuevo.',
            },
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
        coursesFound: 'courses found',
        home: 'Home',
        workshopsSubtitle: 'Find the perfect course for you',
        filters: {
            title: 'Filters',
            category: 'Category',
            location: 'Location',
            level: 'Level',
            availability: 'Availability',
            clear: 'Clear filters',
            thisWeekend: 'This weekend',
            nextWeek: 'Next week',
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
            paymentNotice: 'Registration entails payment obligation',
            aboutCourse: 'About this course',
            whatYouLearn: 'What will you learn?',
            forWhom: 'Who is this course for?',
            prerequisites: 'Prerequisites',
            practicalInfo: 'Practical information',
            days: 'days',
            hoursPerDay: 'hours per day',
            totalHours: 'total hours',
            maxParticipants: 'maximum participants',
            practice: 'Practice',
            theory: 'Theory',
            groupSize: 'Group size',
            instructors: 'Your instructors',
            reviews: 'What our students say',
            howToGetThere: 'How to get there',
            address: 'Address',
            transport: 'Transport',
            relatedCourses: 'You might also like',
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
        trust: {
            students: 'Students trained',
            courses: 'Courses available',
            rating: 'Average rating',
            locations: 'Locations',
        },
        forCompanies: 'For Companies',
        total: 'Total',
        popularBadge: 'Popular',
        details: 'Details',
        classes: 'classes',
        stickyCta: {
            title: 'Ready to start?',
            subtitle: 'Explore our 30+ practical courses',
        },
        categories: {
            title: 'Categories',
        },
        contact: {
            title: 'Contact',
            subtitle: 'Have a question? We\'re here to help',
            form: {
                name: 'Full name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send message',
                sending: 'Sending...',
                success: 'Message sent! We\'ll get back to you soon.',
                error: 'Error sending message. Please try again.',
            },
            info: {
                title: 'Contact information',
                address: 'Address',
                phone: 'Phone',
                email: 'Email',
                hours: 'Business hours',
                hoursValue: 'Monday to Friday: 9:00 AM - 6:00 PM',
            },
        },
        about: {
            title: 'About Us',
            heroHeadline: 'Bringing DIY culture to Spain, one workshop at a time',
            heroIntro: 'HazloPro was born from a simple observation: in the Netherlands, DIY workshops are everywhere. In Spain, they\'re surprisingly rare. We\'re here to change that by connecting skilled craftspeople with people eager to learn.',
            ourStory: 'Our Story',
            storySubheading: 'From Dutch DIY culture to Spanish craftsmanship',
            storyText: 'When I moved to Spain as an entrepreneur with a passion for hands-on work, I immediately noticed something missing. Back in the Netherlands, you could find workshops for everything - tiling, carpentry, electrical work, plumbing. Weekend courses were part of the culture. In Spain, despite the country\'s rich tradition of craftsmanship and skilled trades, these learning opportunities were hard to find. Homeowners wanted to learn. Hobbyists wanted to improve their skills. But the workshops simply weren\'t there. That\'s when HazloPro was born. Our mission is simple: connect Spain\'s talented craftspeople with people who want to learn. We bring together motivated instructors who love sharing their expertise with students who are eager to get their hands dirty.',
            howWeWork: 'How We Work',
            howWeWork1Title: 'Expert Instructors with Passion',
            howWeWork1Text: 'Every workshop is taught by professionals who don\'t just know their trade - they genuinely enjoy teaching it. Our instructors are active craftspeople who bring real-world experience and enthusiasm to every session.',
            howWeWork2Title: 'Hands-On Learning',
            howWeWork2Text: 'We believe the best way to learn is by doing. Our workshops focus on practical skills you can immediately apply at home or at work.',
            howWeWork3Title: 'Small Groups, Personal Attention',
            howWeWork3Text: 'We keep our groups small so every participant gets individual guidance and can work at their own pace.',
            howWeWork4Title: 'For Everyone',
            howWeWork4Text: 'Whether you\'re a homeowner wanting to tackle projects yourself, a professional looking to expand your skillset, or a company seeking team-building activities - we have workshops for you.',
            values: 'Our Values',
            value1Emoji: '🔨',
            value1Title: 'Learning by Doing',
            value1Text: 'Theory has its place, but we believe real skills come from hands-on practice in a supportive environment.',
            value2Emoji: '🤝',
            value2Title: 'Knowledge Transfer',
            value2Text: 'Our instructors are passionate about sharing what they know. No secrets, no shortcuts - just honest expertise passed on.',
            value3Emoji: '⚡',
            value3Title: 'Practical & Applicable',
            value3Text: 'Every technique we teach has immediate real-world application. You leave with skills you can use the same week.',
            value4Emoji: '🌱',
            value4Title: 'Building Confidence',
            value4Text: 'Beyond the technical skills, we help you develop the confidence to tackle projects independently.',
            whoFor: 'Who Are Our Workshops For?',
            whoFor1Emoji: '🏠',
            whoFor1Title: 'Homeowners',
            whoFor1Text: 'Who want to save money and gain independence by handling their own repairs and improvements.',
            whoFor2Emoji: '🎓',
            whoFor2Title: 'Career Changers',
            whoFor2Text: 'Looking for an introduction to skilled trades or exploring new professional directions.',
            whoFor3Emoji: '👨‍🔧',
            whoFor3Title: 'DIY Enthusiasts',
            whoFor3Text: 'Who want to level up their skills and learn professional techniques.',
            whoFor4Emoji: '👥',
            whoFor4Title: 'Companies',
            whoFor4Text: 'Seeking practical, engaging team-building experiences or staff development opportunities.',
            faq: 'Frequently Asked Questions',
            faq1Question: 'Do I need to bring my own tools?',
            faq1Answer: 'No, we provide all professional tools and equipment for every workshop.',
            faq2Question: 'I\'ve never done this before - is that okay?',
            faq2Answer: 'Absolutely! Many of our workshops are designed specifically for beginners. We start from the basics and build up from there.',
            faq3Question: 'Are materials included?',
            faq3Answer: 'Yes, all materials needed for the practical exercises are included in the course fee.',
            faq4Question: 'Do you offer workshops in English?',
            faq4Answer: 'We can arrange English-language workshops for groups. Contact us to discuss your needs.',
            faq5Question: 'Can you create custom workshops for our company?',
            faq5Answer: 'Yes! We regularly develop tailored workshops for businesses. Whether it\'s team building or specific skill development, we can create something that fits your needs.',
            cta: 'Ready to learn something new?',
        },
        vacancies: {
            title: 'Careers',
            subtitle: 'Are you a professional with a passion for teaching? Join our team.',
            openPositions: 'Open Positions',
            noPositions: 'Currently no open positions. Send us your CV anyway.',
            sendCV: 'Send CV',
            apply: 'Apply',
            partTime: 'Part-time',
            fullTime: 'Full-time',
            location: 'Location',
            cvForm: {
                title: 'CV Submission',
                name: 'Full name',
                email: 'Email',
                phone: 'Phone',
                position: 'Position of interest',
                message: 'Message (optional)',
                cvFile: 'Attach CV (PDF)',
                submit: 'Send CV',
                sending: 'Sending...',
                success: 'CV sent! We\'ll contact you soon.',
                error: 'Error sending CV. Please try again.',
            },
        },
    },
};

// ============================================
// API CONFIGURATION
// ============================================
const API_BASE_URL = window.location.origin.includes('localhost') 
  ? 'http://localhost:3001/api' 
  : '/api';

// ============================================
// COUNTRY CODES FOR PHONE INPUT
// ============================================
const countryCodes = [
  { code: '+34', country: 'ES', flag: '🇪🇸', name: 'España' },
  { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Nederland' },
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Deutschland' },
  { code: '+32', country: 'BE', flag: '🇧🇪', name: 'België' },
  { code: '+351', country: 'PT', flag: '🇵🇹', name: 'Portugal' },
  { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italia' },
  { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Schweiz' },
  { code: '+43', country: 'AT', flag: '🇦🇹', name: 'Österreich' },
  { code: '+45', country: 'DK', flag: '🇩🇰', name: 'Danmark' },
  { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Sverige' },
  { code: '+47', country: 'NO', flag: '🇳🇴', name: 'Norge' },
  { code: '+48', country: 'PL', flag: '🇵🇱', name: 'Polska' },
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'USA/Canada' },
];

function renderCountryCodeOptions(selectedCode = '+34') {
    return countryCodes.map(c => 
        `<option value="${c.code}" ${c.code === selectedCode ? 'selected' : ''}>${c.flag} ${c.code}</option>`
    ).join('');
}

// ============================================
// GLOBAL STATE
// ============================================
let currentLang = 'es';
let currentPage = 'home';
let isNavigating = false;
let selectedWorkshop = null;
let selectedDate = null;
let selectedDates = [];
let currentDateView = 'calendar';
let calendarMonth = new Date().getMonth();
let calendarYear = new Date().getFullYear();
let popularSliderInterval = null;
let currentPopularSlide = 0;
let popularWorkshopsList = [];
let filters = {
    categories: [],
    levels: [],
    locations: [],
};

// ============================================
// PERFORMANCE CACHE
// ============================================
const cache = {
    workshops: null,
    workshopsTimestamp: null,
    categories: null,
    categoriesTimestamp: null,
    CACHE_DURATION: 10 * 1000 // 10 seconds - short for development
};

function isCacheValid(timestamp) {
    if (!timestamp) return false;
    return (Date.now() - timestamp) < cache.CACHE_DURATION;
}

function clearCache() {
    cache.workshops = null;
    cache.workshopsTimestamp = null;
    cache.categories = null;
    cache.categoriesTimestamp = null;
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

function formatDate(dateStr) {
    let date;
    if (typeof dateStr === 'string') {
        date = new Date(dateStr);
    } else if (dateStr instanceof Date) {
        date = dateStr;
    } else {
        date = new Date(dateStr);
    }
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', options);
}

function getWorkshopTitle(workshop) {
    if (currentLang === 'en' && workshop.titleEn) {
        return workshop.titleEn;
    }
    return workshop.title || workshop.name;
}

function getWorkshopDescription(workshop) {
    if (currentLang === 'en' && workshop.descriptionEn) {
        return workshop.descriptionEn;
    }
    return workshop.description || workshop.fullDescription || '';
}

function getWorkshopLevel(workshop) {
    const levelMap = {
        'APRENDE': currentLang === 'es' ? 'Aprende' : 'Learn',
        'CONSTRUYE': currentLang === 'es' ? 'Construye' : 'Build',
        'DOMINA': currentLang === 'es' ? 'Domina' : 'Master',
        'TODOS': currentLang === 'es' ? 'Todos los Niveles' : 'All Levels',
        // Legacy support for old values
        'BASICO': currentLang === 'es' ? 'Aprende' : 'Learn',
        'INTERMEDIO': currentLang === 'es' ? 'Construye' : 'Build',
        'AVANZADO': currentLang === 'es' ? 'Domina' : 'Master',
    };
    return levelMap[workshop.level] || workshop.level || 'Todos los Niveles';
}

// ============================================
// API FUNCTIONS
// ============================================
async function fetchWorkshops(forceRefresh = false) {
    try {
        // Return cached data if valid
        if (!forceRefresh && cache.workshops && isCacheValid(cache.workshopsTimestamp)) {
            console.log('✅ Using cached workshops data');
            return cache.workshops;
        }
        
        console.log('🔄 Fetching fresh workshops data...');
        const response = await fetch(`${API_BASE_URL}/workshops`);
        if (!response.ok) throw new Error('Failed to fetch workshops');
        const data = await response.json();
        
        // Update cache
        cache.workshops = data;
        cache.workshopsTimestamp = Date.now();
        
        return data;
    } catch (error) {
        console.error('Error fetching workshops:', error);
        // Return cached data if available, even if expired
        return cache.workshops || [];
    }
}

async function fetchWorkshopBySlug(slug) {
    try {
        // First try to find in cached workshops to avoid API call
        if (cache.workshops && isCacheValid(cache.workshopsTimestamp)) {
            const workshop = cache.workshops.find(w => {
                const workshopSlug = w.slug || (w.id ? `workshop-${w.id}` : 'workshop');
                return workshopSlug === slug || w.id?.toString() === slug.replace('workshop-', '');
            });
            if (workshop) {
                console.log('✅ Found workshop in cache');
                return workshop;
            }
        }
        
        console.log('🔄 Fetching workshop by slug:', slug);
        const response = await fetch(`${API_BASE_URL}/workshops/${slug}`);
        if (!response.ok) {
            // Try to find in all workshops as fallback
            const allWorkshops = await fetchWorkshops();
            const workshop = allWorkshops.find(w => {
                const workshopSlug = w.slug || (w.id ? `workshop-${w.id}` : 'workshop');
                return workshopSlug === slug || w.id?.toString() === slug.replace('workshop-', '');
            });
            if (workshop) return workshop;
            throw new Error('Workshop not found');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching workshop:', error);
        // Try fallback: fetch all and find by slug
        try {
            const allWorkshops = await fetchWorkshops();
            const workshop = allWorkshops.find(w => {
                const workshopSlug = w.slug || (w.id ? `workshop-${w.id}` : 'workshop');
                return workshopSlug === slug || w.id?.toString() === slug.replace('workshop-', '');
            });
            return workshop || null;
        } catch (fallbackError) {
            console.error('Fallback fetch also failed:', fallbackError);
            return null;
        }
    }
}

// ============================================
// LANGUAGE & TRANSLATION
// ============================================
async function changeLanguage(lang) {
    if (currentLang === lang) return; // No change needed
    
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Sync both language selectors (desktop and mobile)
    const desktopSelect = document.getElementById('languageSelect');
    const mobileSelect = document.getElementById('mobileLanguageSelect');
    if (desktopSelect) desktopSelect.value = lang;
    if (mobileSelect) mobileSelect.value = lang;
    
    // Update all translatable elements without re-fetching data
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            el.textContent = translation;
        }
    });
    
    // Only re-render content-specific elements (workshop cards, course details, etc.)
    // This avoids unnecessary API calls
    try {
        if (currentPage === 'home') {
            // Re-render workshop cards and categories with cached data
            const allWorkshops = cache.workshops || await fetchWorkshops();
            const popularWorkshops = allWorkshops.filter(w => w.isPopular || w.popular).slice(0, 4);
            const otherWorkshops = allWorkshops.filter(w => !w.isPopular && !w.popular).slice(0, 8);
            
            // Update popular slider content
            const popularSliderTrack = document.getElementById('popularSliderTrack');
            if (popularSliderTrack && popularWorkshops.length > 0) {
                popularSliderTrack.innerHTML = popularWorkshops.map(w => createWorkshopCard(w, false, true)).join('');
            }
            
            // Update other courses
            const otherCoursesGrid = document.getElementById('otherCoursesGrid');
            if (otherCoursesGrid && otherWorkshops.length > 0) {
                otherCoursesGrid.innerHTML = otherWorkshops.map(w => createWorkshopCard(w)).join('');
            }
        } else if (currentPage === 'workshops') {
            // Re-apply filters with cached data
            await applyFilters();
        } else if (currentPage === 'course') {
            if (selectedWorkshop) {
                renderCoursePage();
            }
        } else if (currentPage === 'signup') {
            if (selectedWorkshop && selectedDate) {
                renderSignupPage();
            }
        } else if (currentPage === 'confirmation') {
            renderConfirmationPage();
        } else if (currentPage === 'contact') {
            renderContactPage();
        } else if (currentPage === 'vacancies') {
            renderVacanciesPage();
        }
    } catch (error) {
        console.error('Error re-rendering page:', error);
    }
}

// Make changeLanguage globally available
window.changeLanguage = changeLanguage;

// ============================================
// NAVIGATION
// ============================================
async function navigateTo(page, data = null, updateHash = true) {
    // Prevent multiple simultaneous navigations (but allow hashchange-triggered navigations)
    // If updateHash is false, it means this was triggered by hashchange, so allow it
    if (isNavigating && updateHash) {
        return;
    }
    
    isNavigating = true;
    
    try {
        // Stop slider when navigating away from home
        if (currentPage === 'home' && page !== 'home') {
            stopPopularSliderAutoRotate();
        }
        
        // Update URL hash if not called from hashchange event
        if (updateHash && page !== 'course' && page !== 'signup' && page !== 'confirmation') {
            const newHash = page === 'home' ? '' : page;
            if (window.location.hash.slice(1) !== newHash) {
                window.location.hash = newHash;
            }
        }
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        // Show target page
        const targetPage = document.getElementById(`page-${page}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page || (page === 'home' && link.dataset.page === 'workshops')) {
                link.classList.add('active');
            }
        });
        
        currentPage = page;
        
        // Page-specific actions
        if (page === 'home') {
            await renderHomePage();
        } else if (page === 'workshops') {
            await renderWorkshopsPage();
        } else if (page === 'course' && data) {
            resetDateView();
            selectedWorkshop = data;
            selectedDate = null; // Reset selected date
            renderCoursePage();
        } else if (page === 'signup') {
            if (!selectedWorkshop || !selectedDate) {
                if (selectedWorkshop) {
                    navigateTo('course', selectedWorkshop);
                } else {
                    await navigateTo('home');
                }
                return;
            }
            renderSignupPage();
        } else if (page === 'confirmation') {
            renderConfirmationPage();
        } else if (page === 'contact') {
            renderContactPage();
        } else if (page === 'about') {
            renderAboutPage();
        } else if (page === 'vacancies') {
            renderVacanciesPage();
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error rendering page:', error);
        alert(currentLang === 'es' ? 'Error al cargar la página' : 'Error loading page');
    } finally {
        isNavigating = false;
    }
}

// Make navigateTo globally available
window.navigateTo = navigateTo;

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

// Make toggleMobileMenu globally available
window.toggleMobileMenu = toggleMobileMenu;

// ============================================
// RENDER FUNCTIONS
// ============================================

// Workshop Card HTML
function createWorkshopCard(workshop, isMini = false, isSlider = false) {
    const title = getWorkshopTitle(workshop);
    const description = getWorkshopDescription(workshop);
    // Get extended description for popular slider cards
    const fullDescription = isSlider ? (currentLang === 'en' ? (workshop.fullDescriptionEn || '') : (workshop.fullDescription || '')) : '';
    const level = getWorkshopLevel(workshop);
    const dates = workshop.dates || [];
    const minSpots = dates.length > 0 
        ? Math.min(...dates.map(d => (d.maxSpots || 10) - (d.bookedSpots || 0)))
        : (workshop.dates && workshop.dates.length > 0 ? Math.min(...workshop.dates.map(d => d.spots || 0)) : 0);
    const t = translations[currentLang];
    
    // Find first available date
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    let nextAvailableDate = null;
    if (dates.length > 0) {
        const availableDates = dates
            .map(d => {
                const dateStr = typeof d.date === 'string' ? d.date : d.date.toISOString();
                const dateObj = new Date(dateStr);
                dateObj.setHours(0, 0, 0, 0);
                const availableSpots = (d.maxSpots || 10) - (d.bookedSpots || 0);
                return { date: dateObj, dateStr, availableSpots };
            })
            .filter(d => d.date >= now && d.availableSpots > 0)
            .sort((a, b) => a.date - b.date);
        
        if (availableDates.length > 0) {
            nextAvailableDate = availableDates[0].dateStr;
        }
    }
    
    const workshopSlug = workshop.slug || (workshop.id ? `workshop-${workshop.id}` : 'workshop');
    
    if (isMini) {
        return `
            <div class="workshop-card-mini" onclick="navigateToCourse('${workshopSlug}')">
                <div class="workshop-card-image">
                    <img src="${workshop.imageUrl || workshop.image}" alt="${title}" loading="lazy">
                </div>
                <div class="workshop-card-content">
                    <h3 class="workshop-card-title">${title}</h3>
                    <p class="workshop-card-description">${description}</p>
                    <div class="info-table">
                        <div class="info-table-item">
                            <div class="info-table-label">${t.price}</div>
                            <div class="info-table-value">€${workshop.price}</div>
                        </div>
                        <div class="info-table-item">
                            <div class="info-table-label">${t.lessons}</div>
                            <div class="info-table-value">${workshop.lessons}</div>
                        </div>
                        <div class="info-table-item">
                            <div class="info-table-label">${t.location}</div>
                            <div class="info-table-value">${workshop.location}</div>
                        </div>
                    </div>
                    <button class="btn btn-primary">${t.viewCourse}</button>
                </div>
            </div>
        `;
    }
    
    const cardClass = isSlider ? 'workshop-card workshop-card-slider' : 'workshop-card';
    
    return `
        <article class="${cardClass}" onclick="navigateToCourse('${workshopSlug}')">
            <div class="workshop-card-image">
                <span class="workshop-card-badge">${level}</span>
                ${(!isSlider && (workshop.popular || workshop.isPopular)) ? `<span class="workshop-card-popular">⭐ ${t.popularBadge || 'Popular'}</span>` : ''}
                <img src="${workshop.imageUrl || workshop.image}" alt="${title}" loading="lazy">
            </div>
            <div class="workshop-card-content">
                <h2 class="workshop-card-title">${title}</h2>
                <p class="workshop-card-description">${description}</p>
                ${isSlider && fullDescription ? `
                <p class="workshop-card-extended-description">${fullDescription.length > 150 ? fullDescription.substring(0, 150) + '...' : fullDescription}</p>
                ` : ''}
                <div class="workshop-card-info">
                    <div class="workshop-card-info-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>${workshop.lessons} ${t.lessons.toLowerCase()}</span>
                    </div>
                    <div class="workshop-card-info-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${workshop.location}</span>
                    </div>
                </div>
                <div class="workshop-card-footer">
                    <div>
                        <div class="workshop-card-price">€${workshop.price}</div>
                        ${nextAvailableDate ? `<div class="workshop-card-next-date">${formatDate(nextAvailableDate)}</div>` : ''}
                    </div>
                    <button class="btn ${minSpots > 0 ? 'btn-primary' : 'btn-outline'}">${minSpots > 0 ? t.viewCourse : (t.details || 'Details')}</button>
                </div>
            </div>
        </article>
    `;
}

// Categories Slider Functions
let currentCategoriesSlide = 0;
let categoriesList = [];

function initCategoriesSlider(categories) {
    if (!categories || categories.length === 0) return;
    
    categoriesList = categories;
    currentCategoriesSlide = 0;
    
    const sliderTrack = document.getElementById('categoriesSliderTrack');
    
    if (!sliderTrack) return;
    
    // Render categories
    sliderTrack.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.id}')">
            <img src="${cat.image || 'img/category-placeholder.jpg'}" alt="${currentLang === 'en' ? cat.nameEn : cat.name}" loading="lazy">
            <div class="category-card-overlay">${currentLang === 'en' ? cat.nameEn : cat.name}</div>
        </div>
    `).join('');
    
    // Update slider position
    updateCategoriesSlider();
    
    // Setup navigation buttons
    const prevBtn = document.getElementById('categoriesSliderPrev');
    const nextBtn = document.getElementById('categoriesSliderNext');
    
    if (prevBtn) {
        prevBtn.onclick = () => {
            prevCategoriesSlide();
        };
    }
    
    if (nextBtn) {
        nextBtn.onclick = () => {
            nextCategoriesSlide();
        };
    }
}

function updateCategoriesSlider() {
    const sliderTrack = document.getElementById('categoriesSliderTrack');
    const slider = document.getElementById('categoriesSlider');
    
    if (!sliderTrack || !slider || !categoriesList || categoriesList.length === 0) return;
    
    // Get container width to calculate proper slide width
    const containerWidth = slider.offsetWidth;
    const cardsPerView = 4;
    
    // Calculate how many slides we can show (4 per view)
    const totalSlides = Math.ceil(categoriesList.length / cardsPerView);
    const maxSlide = Math.max(0, totalSlides - 1);
    
    // Clamp current slide
    currentCategoriesSlide = Math.min(currentCategoriesSlide, maxSlide);
    
    // Calculate transform: move by one viewport width (container width)
    const translateX = currentCategoriesSlide * containerWidth;
    
    sliderTrack.style.transform = `translateX(-${translateX}px)`;
    
    // Update button states
    const prevBtn = document.getElementById('categoriesSliderPrev');
    const nextBtn = document.getElementById('categoriesSliderNext');
    
    if (prevBtn) {
        prevBtn.style.opacity = currentCategoriesSlide === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentCategoriesSlide === 0 ? 'not-allowed' : 'pointer';
        prevBtn.disabled = currentCategoriesSlide === 0;
    }
    
    if (nextBtn) {
        nextBtn.style.opacity = currentCategoriesSlide >= maxSlide ? '0.5' : '1';
        nextBtn.style.cursor = currentCategoriesSlide >= maxSlide ? 'not-allowed' : 'pointer';
        nextBtn.disabled = currentCategoriesSlide >= maxSlide;
    }
}

function nextCategoriesSlide() {
    if (!categoriesList || categoriesList.length === 0) return;
    
    const totalSlides = Math.ceil(categoriesList.length / 4);
    const maxSlide = Math.max(0, totalSlides - 1);
    
    if (currentCategoriesSlide < maxSlide) {
        currentCategoriesSlide++;
        updateCategoriesSlider();
    }
}

function prevCategoriesSlide() {
    if (!categoriesList || categoriesList.length === 0) return;
    
    if (currentCategoriesSlide > 0) {
        currentCategoriesSlide--;
        updateCategoriesSlider();
    }
}

// Update slider on window resize
let categoriesResizeTimeout;
window.addEventListener('resize', () => {
    if (categoriesResizeTimeout) {
        clearTimeout(categoriesResizeTimeout);
    }
    categoriesResizeTimeout = setTimeout(() => {
        if (categoriesList.length > 0) {
            updateCategoriesSlider();
        }
    }, 250);
});

// Popular Slider Functions
function initPopularSlider(workshops) {
    if (!workshops || workshops.length === 0) return;
    
    popularWorkshopsList = workshops;
    currentPopularSlide = 0;
    
    const sliderTrack = document.getElementById('popularSliderTrack');
    const sliderDots = document.getElementById('popularSliderDots');
    
    if (!sliderTrack || !sliderDots) return;
    
    // Render slides (slider variant - no popular badge)
    sliderTrack.innerHTML = workshops.map(w => createWorkshopCard(w, false, true)).join('');
    
    // Render dots
    sliderDots.innerHTML = workshops.map((_, index) => 
        `<button class="slider-dot ${index === 0 ? 'active' : ''}" onclick="goToPopularSlide(${index})" aria-label="Go to slide ${index + 1}"></button>`
    ).join('');
    
    // Update slider position
    updatePopularSlider();
    
    // Start auto-rotate
    startPopularSliderAutoRotate();
}

function updatePopularSlider() {
    const sliderTrack = document.getElementById('popularSliderTrack');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (!sliderTrack) return;
    
    sliderTrack.style.transform = `translateX(-${currentPopularSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPopularSlide);
    });
}

function goToPopularSlide(index) {
    if (!popularWorkshopsList || popularWorkshopsList.length === 0) return;
    
    currentPopularSlide = index % popularWorkshopsList.length;
    updatePopularSlider();
    resetPopularSliderAutoRotate();
}

function nextPopularSlide() {
    if (!popularWorkshopsList || popularWorkshopsList.length === 0) return;
    
    currentPopularSlide = (currentPopularSlide + 1) % popularWorkshopsList.length;
    updatePopularSlider();
    resetPopularSliderAutoRotate();
}

function prevPopularSlide() {
    if (!popularWorkshopsList || popularWorkshopsList.length === 0) return;
    
    currentPopularSlide = (currentPopularSlide - 1 + popularWorkshopsList.length) % popularWorkshopsList.length;
    updatePopularSlider();
    resetPopularSliderAutoRotate();
}

function startPopularSliderAutoRotate() {
    stopPopularSliderAutoRotate();
    popularSliderInterval = setInterval(() => {
        nextPopularSlide();
    }, 5000);
}

function stopPopularSliderAutoRotate() {
    if (popularSliderInterval) {
        clearInterval(popularSliderInterval);
        popularSliderInterval = null;
    }
}

function resetPopularSliderAutoRotate() {
    stopPopularSliderAutoRotate();
    startPopularSliderAutoRotate();
}

// Home Page
async function renderHomePage() {
    const t = translations[currentLang];
    
    try {
        // Fetch ALL workshops (not filtered by popular)
        const allWorkshops = await fetchWorkshops();
        console.log('✅ Fetched workshops from API:', allWorkshops.length);
        
        // Filter popular workshops
        const popularWorkshops = allWorkshops.filter(w => w.isPopular || w.popular).slice(0, 4);
        console.log('✅ Popular workshops:', popularWorkshops.length);
        
        // Initialize slider
        initPopularSlider(popularWorkshops);
        
        // Setup navigation buttons
        const prevBtn = document.getElementById('popularSliderPrev');
        const nextBtn = document.getElementById('popularSliderNext');
        const sliderContainer = document.querySelector('.popular-slider-container');
        
        if (prevBtn) {
            prevBtn.onclick = () => {
                prevPopularSlide();
            };
        }
        
        if (nextBtn) {
            nextBtn.onclick = () => {
                nextPopularSlide();
            };
        }
        
        // Pause on hover
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => {
                stopPopularSliderAutoRotate();
            });
            
            sliderContainer.addEventListener('mouseleave', () => {
                startPopularSliderAutoRotate();
            });
        }
        
        // Categories - fetch from API with caching
        try {
            let categories;
            if (cache.categories && isCacheValid(cache.categoriesTimestamp)) {
                console.log('✅ Using cached categories');
                categories = cache.categories;
            } else {
                console.log('🔄 Fetching categories...');
                const categoriesResponse = await fetch(`${API_BASE_URL}/categories`);
                categories = await categoriesResponse.json();
                cache.categories = categories;
                cache.categoriesTimestamp = Date.now();
            }
            initCategoriesSlider(categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
        
        // Other courses
        const otherWorkshops = allWorkshops.filter(w => !w.isPopular && !w.popular).slice(0, 8);
        console.log('✅ Other workshops:', otherWorkshops.length);
        
        const otherCoursesGrid = document.getElementById('otherCoursesGrid');
        if (otherCoursesGrid && otherWorkshops.length > 0) {
            otherCoursesGrid.innerHTML = otherWorkshops.map(w => createWorkshopCard(w)).join('');
        } else if (otherCoursesGrid) {
            console.warn('⚠️ No other workshops found');
        }
    } catch (error) {
        console.error('Error rendering home page:', error);
    }
    
    // Cleanup slider on page change
    stopPopularSliderAutoRotate();
}

function filterByCategory(categoryId) {
    filters.categories = [categoryId];
    navigateTo('workshops');
}

// Workshops Page
async function renderWorkshopsPage() {
    await renderFilters();
    await applyFilters();
}

async function renderFilters() {
    const t = translations[currentLang];
    const filtersSidebar = document.getElementById('filtersSidebar');
    
    if (!filtersSidebar) return;
    
    try {
        // Fetch categories with caching
        let categories;
        if (cache.categories && isCacheValid(cache.categoriesTimestamp)) {
            console.log('✅ Using cached categories');
            categories = cache.categories;
        } else {
            console.log('🔄 Fetching categories...');
            const categoriesResponse = await fetch(`${API_BASE_URL}/categories`);
            categories = await categoriesResponse.json();
            cache.categories = categories;
            cache.categoriesTimestamp = Date.now();
        }
        
        // Use cached workshops data
        const workshops = await fetchWorkshops();
        const locations = [...new Set(workshops.map(w => w.location).filter(Boolean))].sort();
        const levels = [...new Set(workshops.map(w => w.level).filter(Boolean))].sort();
                    
                    filtersSidebar.innerHTML = `
                        <h3 data-i18n="filters.title">${t.filters.title}</h3>
                        
                        <!-- Category Filter -->
                        <div class="filter-section">
                            <div class="filter-section-title" data-i18n="filters.category">${t.filters.category}</div>
                            <div id="categoryFilters">
                                ${categories.map(cat => `
                                    <label class="checkbox-item">
                                        <input type="checkbox" 
                                            ${filters.categories.includes(cat.id) ? 'checked' : ''} 
                                            onchange="toggleFilter('categories', '${cat.id}')">
                                        <span>${currentLang === 'en' ? cat.nameEn : cat.name}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Location Filter -->
                        ${locations.length > 0 ? `
                            <div class="filter-section">
                                <div class="filter-section-title" data-i18n="filters.location">${t.filters.location}</div>
                                <div id="locationFilters">
                                    ${locations.map(loc => `
                                        <label class="checkbox-item">
                                            <input type="checkbox" 
                                                ${filters.locations.includes(loc) ? 'checked' : ''} 
                                                onchange="toggleFilter('locations', '${loc}')">
                                            <span>${loc}</span>
                                        </label>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        <!-- Level Filter -->
                        ${levels.length > 0 ? `
                            <div class="filter-section">
                                <div class="filter-section-title" data-i18n="filters.level">${t.filters.level}</div>
                                <div id="levelFilters">
                                    ${levels.map(level => {
                                        const levelLabel = getWorkshopLevel({ level });
                                        return `
                                            <label class="checkbox-item">
                                                <input type="checkbox" 
                                                    ${filters.levels.includes(level) ? 'checked' : ''} 
                                                    onchange="toggleFilter('levels', '${level}')">
                                                <span>${levelLabel}</span>
                                            </label>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        <!-- Clear Filters -->
                        <div class="filter-clear">
                            <button class="filter-clear-btn" onclick="clearFilters()" data-i18n="filters.clear">
                                ${t.filters.clear}
                            </button>
                        </div>
                    `;
    } catch (error) {
        console.error('Error rendering filters:', error);
    }
}

// Debounce helper
let filterDebounceTimer = null;
function debounce(func, delay) {
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(filterDebounceTimer);
        filterDebounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

const debouncedApplyFilters = debounce(applyFilters, 300);

function toggleFilter(type, value) {
    if (type === 'categories') {
        const index = filters.categories.indexOf(value);
        if (index > -1) {
            filters.categories.splice(index, 1);
        } else {
            filters.categories.push(value);
        }
    } else if (type === 'locations') {
        const index = filters.locations.indexOf(value);
        if (index > -1) {
            filters.locations.splice(index, 1);
        } else {
            filters.locations.push(value);
        }
    } else if (type === 'levels') {
        const index = filters.levels.indexOf(value);
        if (index > -1) {
            filters.levels.splice(index, 1);
        } else {
            filters.levels.push(value);
        }
    }
    debouncedApplyFilters();
}

async function clearFilters() {
    filters.categories = [];
    filters.levels = [];
    filters.locations = [];
    await renderFilters();
    await applyFilters();
}

async function applyFilters() {
    const t = translations[currentLang];
    const workshopsGrid = document.getElementById('workshopsGrid');
    
    if (!workshopsGrid) return;
    
    try {
        const allWorkshops = await fetchWorkshops();
        let filtered = [...allWorkshops];
        
        // Apply category filter
        if (filters.categories.length > 0) {
            filtered = filtered.filter(w => filters.categories.includes(w.category));
        }
        
        // Apply location filter
        if (filters.locations.length > 0) {
            filtered = filtered.filter(w => filters.locations.includes(w.location));
        }
        
        // Apply level filter
        if (filters.levels.length > 0) {
            filtered = filtered.filter(w => filters.levels.includes(w.level));
        }
        
        // Render results
        if (filtered.length === 0) {
            workshopsGrid.innerHTML = `<p style="text-align: center; padding: 3rem; color: var(--color-text-muted);">${currentLang === 'es' ? 'No se encontraron cursos.' : 'No courses found.'}</p>`;
        } else {
            workshopsGrid.innerHTML = filtered.map(w => createWorkshopCard(w)).join('');
        }
    } catch (error) {
        console.error('Error applying filters:', error);
    }
}

async function navigateToCourse(slug) {
    try {
        const workshop = await fetchWorkshopBySlug(slug);
        if (workshop) {
            navigateTo('course', workshop);
        } else {
            console.error('Workshop not found:', slug);
            alert(currentLang === 'es' ? 'Curso no encontrado' : 'Course not found');
        }
    } catch (error) {
        console.error('Error navigating to course:', error);
        alert(currentLang === 'es' ? 'Error al cargar el curso' : 'Error loading course');
    }
}

function selectDate(dateIndex) {
    try {
        if (!selectedWorkshop || !selectedWorkshop.dates) {
            console.error('No workshop or dates available');
            return;
        }
        
        const dates = selectedWorkshop.dates || [];
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const availableDates = dates.filter(d => {
            try {
                const dateStr = typeof d.date === 'string' ? d.date : d.date.toISOString();
                const dateObj = new Date(dateStr);
                dateObj.setHours(0, 0, 0, 0);
                return dateObj >= now;
            } catch (e) {
                console.error('Error filtering date:', e);
                return false;
            }
        });
        
        if (dateIndex >= 0 && dateIndex < availableDates.length) {
            selectedDate = availableDates[dateIndex];
            
            // Update UI
            const dateOptions = document.querySelectorAll('.date-option');
            dateOptions.forEach((el, idx) => {
                if (idx === dateIndex) {
                    el.classList.add('selected');
                    el.style.borderColor = 'var(--color-accent)';
                    el.style.background = 'var(--color-bg-body)';
                } else {
                    el.classList.remove('selected');
                    el.style.borderColor = 'var(--color-border)';
                    el.style.background = 'var(--color-bg-surface)';
                }
            });
            
            // Update signup button
            const signupBtn = document.getElementById('courseSignupBtn');
            if (signupBtn) {
                signupBtn.disabled = false;
                signupBtn.textContent = translations[currentLang].course.signUp;
                signupBtn.style.opacity = '1';
                signupBtn.style.cursor = 'pointer';
            }
        } else {
            console.error('Invalid date index:', dateIndex);
        }
    } catch (error) {
        console.error('Error in selectDate:', error);
    }
}

function renderCoursePage() {
    try {
        const coursePage = document.getElementById('page-course');
        if (!coursePage) {
            console.error('Course page element not found');
            return;
        }
        
        if (!selectedWorkshop) {
            console.error('No workshop selected');
            coursePage.innerHTML = `
                <div class="container" style="padding: 2rem; text-align: center;">
                    <p>${currentLang === 'es' ? 'Curso no encontrado' : 'Course not found'}</p>
                    <button class="btn btn-primary" onclick="navigateTo('home')">${translations[currentLang].home}</button>
                </div>
            `;
            return;
        }
        
        const t = translations[currentLang];
        const title = getWorkshopTitle(selectedWorkshop);
        const description = getWorkshopDescription(selectedWorkshop);
        const fullDescription = currentLang === 'en' ? selectedWorkshop.fullDescriptionEn : selectedWorkshop.fullDescription;
        const level = getWorkshopLevel(selectedWorkshop);
        const dates = selectedWorkshop.dates || [];
        
        // Parse JSON fields
        const learningObjectives = selectedWorkshop.learningObjectives ? 
            JSON.parse(currentLang === 'en' ? selectedWorkshop.learningObjectivesEn : selectedWorkshop.learningObjectives) : [];
        const targetAudience = selectedWorkshop.targetAudience ? 
            JSON.parse(currentLang === 'en' ? selectedWorkshop.targetAudienceEn : selectedWorkshop.targetAudience) : [];
        const included = selectedWorkshop.included ? 
            JSON.parse(currentLang === 'en' ? selectedWorkshop.includedEn : selectedWorkshop.included) : [];
        const instructors = selectedWorkshop.instructors ? JSON.parse(selectedWorkshop.instructors) : [];
        const testimonials = selectedWorkshop.testimonials ? JSON.parse(selectedWorkshop.testimonials) : [];
        const locationInfo = currentLang === 'en' ? selectedWorkshop.locationInfoEn : selectedWorkshop.locationInfo;
        const prerequisites = currentLang === 'en' ? selectedWorkshop.prerequisitesEn : selectedWorkshop.prerequisites;
    
    // Filter out past dates
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const availableDates = dates.filter(d => {
        const dateStr = typeof d.date === 'string' ? d.date : d.date.toISOString();
        const dateObj = new Date(dateStr);
        dateObj.setHours(0, 0, 0, 0);
        return dateObj >= now;
    });
    
    // Set calendar to first available date when rendering course page
    if (availableDates.length > 0) {
        const firstDate = new Date(availableDates[0].date);
        calendarMonth = firstDate.getMonth();
        calendarYear = firstDate.getFullYear();
    }
    
    coursePage.innerHTML = `
        <div class="container" style="padding: 2rem;">
            <!-- Breadcrumb -->
            <nav style="margin-bottom: 2rem; font-size: 0.9rem;">
                <a href="#" onclick="navigateTo('home')" style="color: var(--color-text-muted);">${t.home}</a>
                <span style="margin: 0 0.5rem; color: var(--color-text-muted);">/</span>
                <a href="#" onclick="navigateTo('workshops')" style="color: var(--color-text-muted);">${t.nav.workshops}</a>
                <span style="margin: 0 0.5rem; color: var(--color-text-muted);">/</span>
                <span style="color: var(--color-accent);">${title}</span>
            </nav>
            
            <div class="course-layout" style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: start;">
                <!-- Main Content -->
                <div>
                    <!-- Hero Image -->
                    <div style="border-radius: var(--radius-xl); overflow: hidden; margin-bottom: 2rem; box-shadow: var(--shadow-lg);">
                        <img src="${selectedWorkshop.imageUrl || selectedWorkshop.image || 'img/placeholder.jpg'}" alt="${title}" style="width: 100%; height: 400px; object-fit: cover;" loading="lazy">
                    </div>
                    
                    <!-- Title and Badges -->
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; align-items: center;">
                        <span style="background: var(--color-accent); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); font-size: 0.85rem; font-weight: 600;">${level}</span>
                        <span style="background: var(--color-bg-body); color: var(--color-text-main); padding: 0.5rem 1rem; border-radius: var(--radius-md); font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; gap: 0.5rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            ${selectedWorkshop.location}
                        </span>
                        ${selectedWorkshop.isPopular ? '<span style="background: linear-gradient(135deg, #f39c12, #e67e22); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;"><span>⭐</span> Popular</span>' : ''}
                    </div>
                    
                    <h1 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--color-primary); margin-bottom: 1.5rem; line-height: 1.2;">${title}</h1>
                    <p style="font-size: 1.1rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 2rem;">${description}</p>
                    
                    <!-- About Course -->
                    ${fullDescription ? `
                        <div style="margin-bottom: 3rem;">
                            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 1.5rem;">${t.course.aboutCourse}</h2>
                            <div style="font-size: 1rem; color: var(--color-text-main); line-height: 1.8; white-space: pre-line;">${fullDescription}</div>
                        </div>
                    ` : ''}
                    
                    <!-- Target Audience -->
                    ${targetAudience.length > 0 ? `
                        <div style="margin-bottom: 3rem;">
                            <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-primary); margin-bottom: 1rem;">${t.course.forWhom}</h3>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
                                ${targetAudience.map(item => `
                                    <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" style="margin-top: 2px; flex-shrink: 0;">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span style="line-height: 1.6;">${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    
                    <!-- Prerequisites -->
                    ${prerequisites ? `
                        <div style="margin-bottom: 3rem;">
                            <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-primary); margin-bottom: 1rem;">${t.course.prerequisites}</h3>
                            <p style="font-size: 1rem; color: var(--color-text-main); line-height: 1.7;">${prerequisites}</p>
                        </div>
                    ` : ''}
                    
                    <!-- What You'll Learn -->
                    ${learningObjectives.length > 0 ? `
                        <div style="margin-bottom: 3rem;">
                            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 1.5rem;">${t.course.whatYouLearn}</h2>
                            <ul style="list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                                ${learningObjectives.map(objective => `
                                    <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" style="margin-top: 2px; flex-shrink: 0;">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span style="line-height: 1.6;">${objective}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    
                    <!-- Practical Info -->
                    <div style="margin-bottom: 3rem;">
                        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 1.5rem;">${t.course.practicalInfo}</h2>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                            <div style="background: var(--color-bg-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📅</div>
                                <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.25rem;">${t.course.duration}</div>
                                <div style="font-weight: 600; color: var(--color-primary);">${selectedWorkshop.lessons || 'N/A'} ${t.course.days}</div>
                            </div>
                            <div style="background: var(--color-bg-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏰</div>
                                <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.25rem;">${t.course.duration}</div>
                                <div style="font-weight: 600; color: var(--color-primary);">${selectedWorkshop.hoursPerDay || 6} ${t.course.hoursPerDay}</div>
                            </div>
                            <div style="background: var(--color-bg-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">👥</div>
                                <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.25rem;">${t.course.groupSize}</div>
                                <div style="font-weight: 600; color: var(--color-primary);">${t.course.maxParticipants.replace('participantes máximo', selectedWorkshop.maxGroupSize || 10).replace('maximum participants', selectedWorkshop.maxGroupSize || 10)}</div>
                            </div>
                            <div style="background: var(--color-bg-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💰</div>
                                <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.25rem;">${t.price}</div>
                                <div style="font-weight: 600; color: var(--color-primary);">€${selectedWorkshop.price}</div>
                            </div>
                        </div>
                        
                        <!-- Practice/Theory Bar -->
                        ${selectedWorkshop.practicePercentage ? `
                            <div style="margin-top: 1.5rem;">
                                <div style="display: flex; height: 60px; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-md);">
                                    <div style="flex: ${selectedWorkshop.practicePercentage}; background: linear-gradient(135deg, #558B55 0%, #3E5C43 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">
                                        ${selectedWorkshop.practicePercentage}% ${t.course.practice}
                                    </div>
                                    <div style="flex: ${selectedWorkshop.theoryPercentage || 20}; background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">
                                        ${selectedWorkshop.theoryPercentage || 20}% ${t.course.theory}
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    
                    <!-- What's Included -->
                    ${included.length > 0 ? `
                        <div style="margin-bottom: 3rem;">
                            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 1.5rem;">${t.course.includes}</h2>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
                                ${included.map(item => `
                                    <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" style="margin-top: 2px; flex-shrink: 0;">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span style="line-height: 1.6;">${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    
                    <!-- Instructors -->
                    ${instructors.length > 0 ? `
                        <div style="margin-bottom: 3rem;">
                            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 1.5rem;">${t.course.instructors}</h2>
                            ${instructors.map(instructor => `
                                <div style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 2rem; display: flex; gap: 1.5rem; align-items: flex-start; margin-bottom: 1rem;">
                                    <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #558B55, #3E5C43); display: flex; align-items: center; justify-content: center; font-size: 2rem; flex-shrink: 0;">👤</div>
                                    <div>
                                        <h3 style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--color-primary); margin-bottom: 0.5rem;">${instructor.name}</h3>
                                        <p style="color: var(--color-text-muted); line-height: 1.7;">${currentLang === 'en' ? instructor.bioEn : instructor.bio}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    <!-- Testimonials -->
                    ${testimonials.length > 0 ? `
                        <div style="margin-bottom: 3rem;">
                            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 1.5rem;">${t.course.reviews}</h2>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
                                ${testimonials.map(testimonial => `
                                    <div style="background: #fafcfc; border-left: 4px solid var(--color-primary); padding: 1.5rem; border-radius: var(--radius-md);">
                                        <blockquote style="font-style: italic; color: var(--color-text-main); margin-bottom: 1rem; line-height: 1.6;">"${currentLang === 'en' ? testimonial.quoteEn : testimonial.quote}"</blockquote>
                                        <cite style="font-style: normal; font-weight: 600; color: var(--color-primary); font-size: 0.9rem;">— ${testimonial.name}</cite>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Location Info -->
                    ${selectedWorkshop.address || locationInfo ? `
                        <div style="margin-bottom: 3rem;">
                            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 1.5rem;">${t.course.howToGetThere}</h2>
                            ${selectedWorkshop.address ? `
                                <p style="font-weight: 600; color: var(--color-text-main); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    ${selectedWorkshop.address}
                                </p>
                            ` : ''}
                            ${locationInfo ? `
                                <div style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.5rem; line-height: 1.8; white-space: pre-line; color: var(--color-text-main);">${locationInfo}</div>
                            ` : ''}
                        </div>
                    ` : ''}
                </div>
                
                <!-- Sidebar -->
                <div style="position: sticky; top: 100px;">
                    <div style="background: var(--color-bg-surface); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--color-text-main); margin: 0;">${t.course.selectDate}</h3>
                            <div style="display: flex; gap: 0.25rem; background: var(--color-bg-body); border-radius: var(--radius-md); padding: 0.25rem;">
                                <button id="listViewBtn" onclick="toggleDateView('list')" style="padding: 0.5rem; border-radius: var(--radius-sm); background: ${currentDateView === 'list' ? 'var(--color-accent)' : 'transparent'}; color: ${currentDateView === 'list' ? 'white' : 'var(--color-text-muted)'}; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="8" y1="6" x2="21" y2="6"></line>
                                        <line x1="8" y1="12" x2="21" y2="12"></line>
                                        <line x1="8" y1="18" x2="21" y2="18"></line>
                                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                    </svg>
                                </button>
                                <button id="calendarViewBtn" onclick="toggleDateView('calendar')" style="padding: 0.5rem; border-radius: var(--radius-sm); background: ${currentDateView === 'calendar' ? 'var(--color-accent)' : 'transparent'}; color: ${currentDateView === 'calendar' ? 'white' : 'var(--color-text-muted)'}; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <div id="dateOptionsContainer" style="${currentDateView === 'calendar' ? 'display: none;' : ''}">
                            ${availableDates.length > 0 ? `
                                <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
                                    ${availableDates.map((dateOption, index) => {
                                        const dateStr = typeof dateOption.date === 'string' ? dateOption.date : dateOption.date.toISOString();
                                        const availableSpots = (dateOption.maxSpots || 10) - (dateOption.bookedSpots || 0);
                                        const isDisabled = availableSpots === 0;
                                        const isLow = availableSpots > 0 && availableSpots <= 3;
                                        
                                        const isSelected = selectedDate && selectedDate.id === dateOption.id;
                                        return `
                                            <div class="date-option ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}" 
                                                 data-index="${index}"
                                                 data-date="${dateStr}"
                                                 onclick="${isDisabled ? '' : `selectDate(${index})`}"
                                                 style="padding: 1rem; border: 2px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}; border-radius: var(--radius-md); cursor: ${isDisabled ? 'not-allowed' : 'pointer'}; background: ${isSelected ? 'var(--color-bg-body)' : 'var(--color-bg-surface)'}; transition: all 0.2s; ${isDisabled ? 'opacity: 0.5;' : ''}">
                                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                                    <div>
                                                        <div style="font-weight: 600; color: var(--color-text-main); margin-bottom: 0.25rem;">${formatDate(dateStr)}</div>
                                                        <div style="font-size: 0.85rem; color: ${isLow ? 'var(--color-warning)' : 'var(--color-text-muted)'};">${availableSpots > 0 ? `${availableSpots} ${t.course.spotsLeft}` : t.course.soldOut}</div>
                                                    </div>
                                                    ${isSelected ? `
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            ` : `
                                <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">${currentLang === 'es' ? 'No hay fechas disponibles' : 'No dates available'}</p>
                            `}
                        </div>
                        
                        <div id="calendarViewContainer" style="${currentDateView === 'list' ? 'display: none;' : ''}">
                            ${renderCalendarHTML(availableDates, t)}
                        </div>
                        
                        <div style="border-top: 1px solid var(--color-border); padding-top: 1.5rem; margin-bottom: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                                <span style="color: var(--color-text-muted);">${t.total}:</span>
                                <span style="font-weight: 700; font-size: 1.25rem; color: var(--color-primary);">€${selectedWorkshop.price}</span>
                            </div>
                        </div>
                        
                        <button id="courseSignupBtn" 
                                class="btn btn-primary btn-block" 
                                onclick="handleCourseSignup()"
                                ${!selectedDate ? 'disabled' : ''}
                                style="${!selectedDate ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                            ${selectedDate ? t.course.signUp : t.course.selectDate}
                        </button>
                        
                        <p style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 1rem; text-align: center;">${t.course.paymentNotice}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
        
        // Reset selected date if not in available dates
        if (selectedDate && !availableDates.find(d => d.id === selectedDate.id)) {
            selectedDate = null;
        }
        
        // Attach calendar event listeners after DOM is updated
        setTimeout(() => {
            attachCalendarEventListeners();
        }, 0);
    } catch (error) {
        console.error('Error rendering course page:', error);
        const coursePage = document.getElementById('page-course');
        if (coursePage) {
            coursePage.innerHTML = `
                <div class="container" style="padding: 2rem; text-align: center;">
                    <p style="color: var(--color-error);">${currentLang === 'es' ? 'Error al cargar el curso' : 'Error loading course'}</p>
                    <button class="btn btn-primary" onclick="navigateTo('home')">${translations[currentLang].home}</button>
                </div>
            `;
        }
    }
}

function handleCourseSignup() {
    // Support both single date and multiple dates
    if (!selectedDate && selectedDates.length === 0) {
        alert(translations[currentLang].course.selectDate);
        return;
    }
    if (!selectedWorkshop) {
        console.error('No workshop selected');
        return;
    }
    navigateTo('signup');
}

function attachCalendarEventListeners() {
    const calendarViewContainer = document.getElementById('calendarViewContainer');
    if (!calendarViewContainer) return;
    
    // Remove existing event listeners by cloning (but keep the ID)
    const hasListeners = calendarViewContainer.hasAttribute('data-listeners-attached');
    if (hasListeners) {
        // Remove old listeners by replacing the container
        const newContainer = calendarViewContainer.cloneNode(true);
        newContainer.id = 'calendarViewContainer'; // Ensure ID is preserved
        newContainer.removeAttribute('data-listeners-attached');
        calendarViewContainer.parentNode.replaceChild(newContainer, calendarViewContainer);
        // Get reference to the new container
        const updatedContainer = document.getElementById('calendarViewContainer');
        if (!updatedContainer) return;
        
        // Use event delegation for better reliability
        updatedContainer.addEventListener('click', handleCalendarClick);
        updatedContainer.setAttribute('data-listeners-attached', 'true');
    } else {
        // Use event delegation for better reliability
        calendarViewContainer.addEventListener('click', handleCalendarClick);
        calendarViewContainer.setAttribute('data-listeners-attached', 'true');
    }
}

function handleCalendarClick(e) {
    // Handle navigation buttons
    if (e.target.closest('.calendar-nav-prev')) {
        e.preventDefault();
        e.stopPropagation();
        changeCalendarMonth(-1);
        return;
    }
    
    if (e.target.closest('.calendar-nav-next')) {
        e.preventDefault();
        e.stopPropagation();
        changeCalendarMonth(1);
        return;
    }
    
    // Handle calendar day clicks
    const clickableDay = e.target.closest('.calendar-day-clickable');
    if (clickableDay) {
        e.preventDefault();
        e.stopPropagation();
        const dateKey = clickableDay.getAttribute('data-date-key');
        const dateIndex = parseInt(clickableDay.getAttribute('data-date-index'));
        if (dateKey && !isNaN(dateIndex)) {
            toggleCalendarDate(dateKey, dateIndex);
        }
    }
}

function renderCalendarHTML(dates, t) {
    // Don't reset calendar month/year here - it should be set before calling this function
    // This prevents resetting when navigating months or selecting dates
    
    const monthNames = currentLang === 'es' 
        ? ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayNames = currentLang === 'es'
        ? ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá']
        : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    
    // Create a map of available dates
    const availableDatesMap = new Map();
    dates.forEach((dateOption, index) => {
        let dateStr = typeof dateOption.date === 'string' ? dateOption.date : dateOption.date.toISOString();
        if (dateStr.includes('T')) {
            dateStr = dateStr.split('T')[0];
        }
        const dateKey = dateStr;
        const availableSpots = (dateOption.maxSpots || 10) - (dateOption.bookedSpots || 0);
        availableDatesMap.set(dateKey, {
            index,
            dateOption,
            availableSpots,
            isDisabled: availableSpots === 0,
            isLow: availableSpots > 0 && availableSpots <= 3
        });
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(calendarYear, calendarMonth, 1);
    const lastDay = new Date(calendarYear, calendarMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    let calendarHTML = `
        <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <button class="calendar-nav-prev" data-direction="-1" style="padding: 0.5rem; border-radius: var(--radius-sm); background: var(--color-bg-body); color: var(--color-text-main); border: 1px solid var(--color-border); cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <div style="font-weight: 600; color: var(--color-text-main); font-size: 1rem;">${monthNames[calendarMonth]} ${calendarYear}</div>
                <button class="calendar-nav-next" data-direction="1" style="padding: 0.5rem; border-radius: var(--radius-sm); background: var(--color-bg-body); color: var(--color-text-main); border: 1px solid var(--color-border); cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
            <div style="display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.25rem; margin-bottom: 0.5rem;">
                ${dayNames.map(day => `<div style="text-align: center; font-size: 0.75rem; font-weight: 600; color: var(--color-text-muted); padding: 0.5rem 0;">${day}</div>`).join('')}
            </div>
            <div style="display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.25rem; width: 100%; box-sizing: border-box;">
    `;
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
        calendarHTML += '<div style="aspect-ratio: 1; min-width: 0;"></div>';
    }
    
    // Add days of the month
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(calendarYear, calendarMonth, day);
        const dateKey = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dateInfo = availableDatesMap.get(dateKey);
        const isPast = currentDate < now;
        const isToday = currentDate.getTime() === now.getTime();
        
        let dayStyle = 'aspect-ratio: 1; border: 2px solid var(--color-border); border-radius: var(--radius-sm); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0.125rem; cursor: pointer; transition: all 0.2s; position: relative; background: var(--color-bg-surface); min-width: 0; width: 100%; max-width: 100%; box-sizing: border-box; overflow: hidden;';
        
        if (isPast) {
            dayStyle += 'opacity: 0.3; cursor: not-allowed;';
        } else if (isToday) {
            dayStyle += 'border-color: var(--color-accent); background: #F0F8F0;';
        }
        
        if (dateInfo) {
            if (dateInfo.isDisabled) {
                dayStyle += 'opacity: 0.4; cursor: not-allowed; background: var(--color-bg-body); border-color: var(--color-border);';
            } else {
                dayStyle += 'border-color: var(--color-accent); background: #F0F8F0;';
                if (dateInfo.isLow) {
                    dayStyle += 'border-color: var(--color-warning); background: #FFF8E1;';
                }
            }
        } else {
            dayStyle += 'background: var(--color-bg-body); cursor: default;';
        }
        
        // Check if selected
        const isSelected = dateInfo && selectedDates.some(d => {
            let dStr = typeof d.date === 'string' ? d.date : d.date.toISOString();
            if (dStr.includes('T')) {
                dStr = dStr.split('T')[0];
            }
            return dStr === dateKey;
        });
        
        if (isSelected) {
            dayStyle += 'background: var(--color-accent); color: white; border-color: var(--color-accent); font-weight: 600;';
        }
        
        const spotsInfo = dateInfo ? (dateInfo.availableSpots > 0 ? `${dateInfo.availableSpots}` : '') : '';
        const isClickable = dateInfo && !dateInfo.isDisabled && !isPast;
        const dayClass = isClickable ? 'calendar-day-clickable' : '';
        const dataAttrs = isClickable ? `data-date-key="${dateKey}" data-date-index="${dateInfo.index}"` : '';
        
        calendarHTML += `
            <div class="calendar-day ${dayClass}" ${dataAttrs} style="${dayStyle}">
                <span style="font-size: 0.75rem; font-weight: 500; line-height: 1;">${day}</span>
                ${spotsInfo ? `<span style="font-size: 0.6rem; font-weight: 600; margin-top: 0.125rem; line-height: 1; opacity: ${isSelected ? '1' : '0.8'}; color: ${isSelected ? 'white' : 'inherit'};">${spotsInfo}</span>` : ''}
            </div>
        `;
    }
    
    calendarHTML += '</div></div>';
    return calendarHTML;
}

function toggleDateView(view) {
    currentDateView = view;
    
    const dateOptionsContainer = document.getElementById('dateOptionsContainer');
    const calendarViewContainer = document.getElementById('calendarViewContainer');
    const listViewBtn = document.getElementById('listViewBtn');
    const calendarViewBtn = document.getElementById('calendarViewBtn');
    
    if (dateOptionsContainer && calendarViewContainer && listViewBtn && calendarViewBtn) {
        if (view === 'calendar') {
            dateOptionsContainer.style.display = 'none';
            calendarViewContainer.style.display = 'block';
            listViewBtn.style.background = 'transparent';
            listViewBtn.style.color = 'var(--color-text-muted)';
            calendarViewBtn.style.background = 'var(--color-accent)';
            calendarViewBtn.style.color = 'white';
            
            // Re-render calendar if needed
            if (selectedWorkshop) {
                const t = translations[currentLang];
                const dates = selectedWorkshop.dates || [];
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                const availableDates = dates.filter(d => {
                    const dateStr = typeof d.date === 'string' ? d.date : d.date.toISOString();
                    const dateObj = new Date(dateStr);
                    dateObj.setHours(0, 0, 0, 0);
                    return dateObj >= now;
                });
                calendarViewContainer.innerHTML = renderCalendarHTML(availableDates, t);
                attachCalendarEventListeners();
            }
        } else {
            dateOptionsContainer.style.display = 'block';
            calendarViewContainer.style.display = 'none';
            listViewBtn.style.background = 'var(--color-accent)';
            listViewBtn.style.color = 'white';
            calendarViewBtn.style.background = 'transparent';
            calendarViewBtn.style.color = 'var(--color-text-muted)';
        }
    }
}

function changeCalendarMonth(direction) {
    calendarMonth += direction;
    if (calendarMonth < 0) {
        calendarMonth = 11;
        calendarYear--;
    } else if (calendarMonth > 11) {
        calendarMonth = 0;
        calendarYear++;
    }
    
    if (selectedWorkshop && currentDateView === 'calendar') {
        const t = translations[currentLang];
        const dates = selectedWorkshop.dates || [];
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const availableDates = dates.filter(d => {
            const dateStr = typeof d.date === 'string' ? d.date : d.date.toISOString();
            const dateObj = new Date(dateStr);
            dateObj.setHours(0, 0, 0, 0);
            return dateObj >= now;
        });
        const calendarViewContainer = document.getElementById('calendarViewContainer');
        if (calendarViewContainer) {
            calendarViewContainer.innerHTML = renderCalendarHTML(availableDates, t);
            attachCalendarEventListeners();
        }
    }
}

// Make functions globally available immediately
window.changeCalendarMonth = changeCalendarMonth;
window.toggleDateView = toggleDateView;
window.toggleCalendarDate = toggleCalendarDate;
window.attachCalendarEventListeners = attachCalendarEventListeners;

function toggleCalendarDate(dateKey, index) {
    const workshop = selectedWorkshop;
    if (!workshop) return;
    
    const dates = workshop.dates || [];
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    // Normalize date strings for comparison
    const normalizeDate = (date) => {
        let dStr = typeof date === 'string' ? date : date.toISOString();
        if (dStr.includes('T')) {
            dStr = dStr.split('T')[0];
        }
        return dStr;
    };
    
    // Find the date option by dateKey instead of relying on index
    const dateOption = dates.find(d => {
        const dStr = normalizeDate(d.date);
        return dStr === dateKey;
    });
    
    if (!dateOption) {
        console.warn('Date option not found for key:', dateKey);
        return;
    }
    
    // Check if date is in the past
    const dateObj = new Date(dateOption.date);
    dateObj.setHours(0, 0, 0, 0);
    if (dateObj < now) {
        return; // Don't allow selecting past dates
    }
    
    // Check if already selected
    const isSelected = selectedDates.some(d => {
        return normalizeDate(d.date) === dateKey;
    });
    
    if (isSelected) {
        // Remove from selection
        selectedDates = selectedDates.filter(d => {
            return normalizeDate(d.date) !== dateKey;
        });
    } else {
        // Add to selection
        selectedDates.push(dateOption);
    }
    
    // Get available dates for re-rendering
    const availableDates = dates.filter(d => {
        const dateStr = typeof d.date === 'string' ? d.date : d.date.toISOString();
        const dateObj = new Date(dateStr);
        dateObj.setHours(0, 0, 0, 0);
        return dateObj >= now;
    });
    
    // Re-render calendar to update selection
    const t = translations[currentLang];
    const calendarViewContainer = document.getElementById('calendarViewContainer');
    if (calendarViewContainer) {
        calendarViewContainer.innerHTML = renderCalendarHTML(availableDates, t);
        attachCalendarEventListeners();
    }
    
    // Update signup button
    const signupBtn = document.getElementById('courseSignupBtn');
    if (signupBtn) {
        signupBtn.disabled = selectedDates.length === 0 && !selectedDate;
        signupBtn.style.opacity = (selectedDates.length === 0 && !selectedDate) ? '0.5' : '1';
        signupBtn.style.cursor = (selectedDates.length === 0 && !selectedDate) ? 'not-allowed' : 'pointer';
    }
    
    // Update selectedDate for backward compatibility (use first selected)
    selectedDate = selectedDates.length > 0 ? selectedDates[0] : null;
}

function renderSignupPage() {
    const signupPage = document.getElementById('page-signup');
    if (!signupPage || !selectedWorkshop) {
        console.error('Signup page or workshop not available');
        if (!selectedWorkshop) {
            navigateTo('home');
        }
        return;
    }
    
    if (!selectedDate) {
        alert(translations[currentLang].course.selectDate);
        navigateTo('course', selectedWorkshop);
        return;
    }
    
    const t = translations[currentLang];
    const title = getWorkshopTitle(selectedWorkshop);
    const dateStr = typeof selectedDate.date === 'string' ? selectedDate.date : selectedDate.date.toISOString();
    
    signupPage.innerHTML = `
        <div class="container" style="padding: 2rem; max-width: 800px;">
            <h1 style="font-family: var(--font-serif); font-size: 2rem; color: var(--color-primary); margin-bottom: 2rem;">${t.signup.title}</h1>
            
            <!-- Summary -->
            <div style="background: var(--color-bg-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 2rem;">
                <h3 style="font-weight: 600; margin-bottom: 1rem;">${title}</h3>
                <div style="color: var(--color-text-muted);">
                    <div>${formatDate(dateStr)}</div>
                    <div>${selectedWorkshop.location}</div>
                    <div style="margin-top: 0.5rem; font-weight: 600; color: var(--color-primary);">€${selectedWorkshop.price}</div>
                </div>
            </div>
            
            <form onsubmit="submitSignup(event)" style="display: flex; flex-direction: column; gap: 1.5rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.firstName} *</label>
                    <input type="text" name="firstName" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.lastName} *</label>
                    <input type="text" name="lastName" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.email} *</label>
                    <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.emailConfirm} *</label>
                    <input type="email" name="emailConfirm" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.phone}</label>
                    <div style="display: flex;">
                        <select name="phoneCountryCode" style="padding: 0.75rem; border: 1px solid var(--color-border); border-right: none; border-radius: var(--radius-md) 0 0 var(--radius-md); background: var(--color-bg-surface); min-width: 100px; font-size: 0.95rem;">
                            ${renderCountryCodeOptions('+34')}
                        </select>
                        <input type="tel" name="phone" placeholder="612 345 678" style="flex: 1; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                    </div>
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.birthdate}</label>
                    <input type="date" name="birthdate" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.street}</label>
                    <input type="text" name="street" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                </div>
                
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.city}</label>
                        <input type="text" name="city" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.postalCode}</label>
                        <input type="text" name="postalCode" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                    </div>
                </div>
                
                <div>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" name="isCompany" onchange="toggleCompanyFields()">
                        <span>${t.signup.isCompany}</span>
                    </label>
                </div>
                
                <div id="companyFields" style="display: none; flex-direction: column; gap: 1.5rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.companyName}</label>
                        <input type="text" name="companyName" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.cif}</label>
                        <input type="text" name="companyCif" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.companyAddress}</label>
                        <input type="text" name="companyAddress" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                    </div>
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">${t.signup.comments}</label>
                    <textarea name="comments" rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); resize: vertical;"></textarea>
                </div>
                
                <div>
                    <label style="display: flex; align-items: flex-start; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" required style="margin-top: 0.25rem;">
                        <span style="font-size: 0.9rem;">${t.signup.terms}</span>
                    </label>
                </div>
                
                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">${t.signup.submit}</button>
            </form>
        </div>
    `;
}

function toggleCompanyFields() {
    const companyFields = document.getElementById('companyFields');
    const isCompanyCheckbox = document.querySelector('input[name="isCompany"]');
    if (companyFields && isCompanyCheckbox) {
        companyFields.style.display = isCompanyCheckbox.checked ? 'flex' : 'none';
    }
}

function renderConfirmationPage() {
    const confirmationPage = document.getElementById('page-confirmation');
    if (!confirmationPage) return;
    
    const t = translations[currentLang];
    const email = window.bookingEmail || '';
    
    confirmationPage.innerHTML = `
        <div class="container" style="padding: 4rem 2rem; max-width: 800px; text-align: center;">
            <div style="background: var(--color-bg-surface); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);">
                <div style="width: 80px; height: 80px; background: var(--color-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                
                <h1 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--color-primary); margin-bottom: 1rem;">${t.confirmation.title}</h1>
                <p style="font-size: 1.1rem; color: var(--color-text-muted); margin-bottom: 2rem;">${t.confirmation.message}</p>
                
                ${email ? `
                    <p style="color: var(--color-text-main); margin-bottom: 2rem;">
                        ${t.confirmation.emailSent} <strong>${email}</strong>
                    </p>
                ` : ''}
                
                <div style="background: var(--color-bg-body); padding: 2rem; border-radius: var(--radius-md); margin: 2rem 0; text-align: left;">
                    <h2 style="font-size: 1.25rem; font-weight: 600; color: var(--color-primary); margin-bottom: 1rem;">${t.confirmation.nextSteps}</h2>
                    <ol style="list-style: decimal; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; color: var(--color-text-main);">
                        <li>${t.confirmation.step1}</li>
                        <li>${t.confirmation.step2}</li>
                        <li>${t.confirmation.step3}</li>
                    </ol>
                </div>
                
                <button class="btn btn-primary btn-lg" onclick="navigateTo('home')" style="margin-top: 2rem;">
                    ${t.confirmation.backHome}
                </button>
            </div>
        </div>
    `;
}

function resetDateView() {
    currentDateView = 'calendar';
    calendarMonth = new Date().getMonth();
    calendarYear = new Date().getFullYear();
}

// Contact Page
function renderContactPage() {
    const contactPage = document.getElementById('page-contact');
    if (!contactPage) {
        console.error('Contact page element not found');
        return;
    }
    
    const t = translations[currentLang].contact;
    
    contactPage.innerHTML = `
        <div class="container" style="padding: 4rem 2rem;">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h1 style="font-family: var(--font-serif); font-size: 3rem; color: var(--color-primary); margin-bottom: 1rem;">${t.title}</h1>
                <p style="font-size: 1.1rem; color: var(--color-text-muted);">${t.subtitle}</p>
            </div>
            
            <div id="contactPageGrid" style="display: grid; grid-template-columns: 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto;">
                <style>
                    @media (min-width: 768px) {
                        #contactPageGrid {
                            grid-template-columns: 1fr 1fr !important;
                        }
                    }
                </style>
                <!-- Contact Form -->
                <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-xl); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);">
                    <h2 style="font-size: 1.5rem; font-weight: 600; color: var(--color-primary); margin-bottom: 2rem;">${currentLang === 'es' ? 'Envíanos un mensaje' : 'Send us a message'}</h2>
                    <form id="contactForm" onsubmit="submitContactForm(event)" style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.form.name} *</label>
                            <input type="text" name="name" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem; transition: var(--transition);" onfocus="this.style.borderColor='var(--color-accent)'; this.style.outline='none';" onblur="this.style.borderColor='var(--color-border)';">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.form.email} *</label>
                            <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem; transition: var(--transition);" onfocus="this.style.borderColor='var(--color-accent)'; this.style.outline='none';" onblur="this.style.borderColor='var(--color-border)';">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.form.subject} *</label>
                            <input type="text" name="subject" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem; transition: var(--transition);" onfocus="this.style.borderColor='var(--color-accent)'; this.style.outline='none';" onblur="this.style.borderColor='var(--color-border)';">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.form.message} *</label>
                            <textarea name="message" required rows="6" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem; resize: vertical; font-family: inherit; transition: var(--transition);" onfocus="this.style.borderColor='var(--color-accent)'; this.style.outline='none';" onblur="this.style.borderColor='var(--color-border)';"></textarea>
                        </div>
                        
                        <div id="contactFormMessage" style="display: none; padding: 1rem; border-radius: var(--radius-md); margin-top: 0.5rem;"></div>
                        
                        <button type="submit" id="contactSubmitBtn" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 0.5rem;">
                            ${t.form.send}
                        </button>
                    </form>
                </div>
                
                <!-- Contact Info -->
                <div style="display: flex; flex-direction: column; gap: 2rem;">
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-xl); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);">
                        <h2 style="font-size: 1.5rem; font-weight: 600; color: var(--color-primary); margin-bottom: 1.5rem;">${t.info.title}</h2>
                        
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <div style="display: flex; align-items: start; gap: 1rem;">
                                <div style="width: 40px; height: 40px; background: var(--color-accent); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <div style="font-weight: 600; color: var(--color-text-main); margin-bottom: 0.25rem;">${t.info.address}</div>
                                    <div style="color: var(--color-text-muted);">Madrid, España</div>
                                </div>
                            </div>
                            
                            <div style="display: flex; align-items: start; gap: 1rem;">
                                <div style="width: 40px; height: 40px; background: var(--color-accent); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <div style="font-weight: 600; color: var(--color-text-main); margin-bottom: 0.25rem;">${t.info.phone}</div>
                                    <div style="color: var(--color-text-muted);">+34 900 123 456</div>
                                </div>
                            </div>
                            
                            <div style="display: flex; align-items: start; gap: 1rem;">
                                <div style="width: 40px; height: 40px; background: var(--color-accent); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <div style="font-weight: 600; color: var(--color-text-main); margin-bottom: 0.25rem;">${t.info.email}</div>
                                    <div style="color: var(--color-text-muted);">info@tallerbrico.es</div>
                                </div>
                            </div>
                            
                            <div style="display: flex; align-items: start; gap: 1rem;">
                                <div style="width: 40px; height: 40px; background: var(--color-accent); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <div style="font-weight: 600; color: var(--color-text-main); margin-bottom: 0.25rem;">${t.info.hours}</div>
                                    <div style="color: var(--color-text-muted);">${t.info.hoursValue}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderAboutPage() {
    const aboutPage = document.getElementById('page-about');
    if (!aboutPage) {
        console.error('About page element not found');
        return;
    }
    
    const t = translations[currentLang]?.about;
    if (!t) {
        console.error('About translations not found for language:', currentLang);
        aboutPage.innerHTML = `
            <div class="container" style="padding: 4rem 2rem; text-align: center;">
                <h1>Error loading page</h1>
                <p>Please try again later.</p>
            </div>
        `;
        return;
    }
    
    aboutPage.innerHTML = `
        <div style="max-width: 1200px; margin: 0 auto; padding: 4rem 2rem;">
            <!-- Hero Section -->
            <div style="text-align: center; margin-bottom: 5rem;">
                <h1 style="font-family: var(--font-serif); font-size: 3.5rem; color: var(--color-primary); margin-bottom: 1.5rem; line-height: 1.2;">${t.heroHeadline}</h1>
                <p style="font-size: 1.25rem; color: var(--color-text-muted); line-height: 1.8; max-width: 800px; margin: 0 auto;">${t.heroIntro}</p>
            </div>
            
            <!-- Our Story Section -->
            <div style="background: var(--color-bg-surface); padding: 4rem; border-radius: var(--radius-xl); border: 1px solid var(--color-border); box-shadow: var(--shadow-md); margin-bottom: 4rem;">
                <h2 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--color-primary); margin-bottom: 1rem;">${t.ourStory}</h2>
                <h3 style="font-size: 1.5rem; color: var(--color-text-main); margin-bottom: 2rem; font-weight: 600;">${t.storySubheading}</h3>
                <p style="font-size: 1.1rem; color: var(--color-text-muted); line-height: 1.9;">${t.storyText}</p>
            </div>
            
            <!-- How We Work Section -->
            <div style="margin-bottom: 4rem;">
                <h2 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--color-primary); margin-bottom: 3rem; text-align: center;">${t.howWeWork}</h2>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;">
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                        <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.howWeWork1Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.howWeWork1Text}</p>
                    </div>
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                        <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.howWeWork2Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.howWeWork2Text}</p>
                    </div>
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                        <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.howWeWork3Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.howWeWork3Text}</p>
                    </div>
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                        <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.howWeWork4Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.howWeWork4Text}</p>
                    </div>
                </div>
            </div>
            
            <!-- Our Values Section -->
            <div style="background: var(--color-bg-surface); padding: 4rem; border-radius: var(--radius-xl); border: 1px solid var(--color-border); box-shadow: var(--shadow-md); margin-bottom: 4rem;">
                <h2 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--color-primary); margin-bottom: 3rem; text-align: center;">${t.values}</h2>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.5rem;">
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${t.value1Emoji}</div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.value1Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.value1Text}</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${t.value2Emoji}</div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.value2Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.value2Text}</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${t.value3Emoji}</div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.value3Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.value3Text}</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${t.value4Emoji}</div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.value4Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.value4Text}</p>
                    </div>
                </div>
            </div>
            
            <!-- Who Are Our Workshops For Section -->
            <div style="margin-bottom: 4rem;">
                <h2 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--color-primary); margin-bottom: 3rem; text-align: center;">${t.whoFor}</h2>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;">
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${t.whoFor1Emoji}</div>
                        <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.whoFor1Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.whoFor1Text}</p>
                    </div>
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${t.whoFor2Emoji}</div>
                        <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.whoFor2Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.whoFor2Text}</p>
                    </div>
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${t.whoFor3Emoji}</div>
                        <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.whoFor3Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.whoFor3Text}</p>
                    </div>
                    <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${t.whoFor4Emoji}</div>
                        <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem; font-weight: 600;">${t.whoFor4Title}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.whoFor4Text}</p>
                    </div>
                </div>
            </div>
            
            <!-- FAQ Section -->
            <div style="background: var(--color-bg-surface); padding: 4rem; border-radius: var(--radius-xl); border: 1px solid var(--color-border); box-shadow: var(--shadow-md); margin-bottom: 4rem;">
                <h2 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--color-primary); margin-bottom: 3rem; text-align: center;">${t.faq}</h2>
                <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 800px; margin: 0 auto;">
                    <div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 0.75rem; font-weight: 600;">${t.faq1Question}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.faq1Answer}</p>
                    </div>
                    <div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 0.75rem; font-weight: 600;">${t.faq2Question}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.faq2Answer}</p>
                    </div>
                    <div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 0.75rem; font-weight: 600;">${t.faq3Question}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.faq3Answer}</p>
                    </div>
                    <div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 0.75rem; font-weight: 600;">${t.faq4Question}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.faq4Answer}</p>
                    </div>
                    <div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary); margin-bottom: 0.75rem; font-weight: 600;">${t.faq5Question}</h3>
                        <p style="color: var(--color-text-muted); line-height: 1.7;">${t.faq5Answer}</p>
                    </div>
                </div>
            </div>
            
            <!-- Call-to-Action Section -->
            <div style="text-align: center; background: var(--color-accent); padding: 4rem 2rem; border-radius: var(--radius-xl); color: white;">
                <h2 style="font-family: var(--font-serif); font-size: 2.5rem; margin-bottom: 2rem;">${t.cta}</h2>
                <button class="btn btn-dark btn-lg" onclick="navigateTo('workshops')" style="background: white; color: var(--color-accent); border: none;">
                    ${currentLang === 'es' ? 'Ver todos los cursos' : 'View all courses'}
                </button>
            </div>
        </div>
    `;
}

async function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const submitBtn = document.getElementById('contactSubmitBtn');
    const messageDiv = document.getElementById('contactFormMessage');
    const t = translations[currentLang].contact;
    
    // Disable submit button
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t.form.sending;
    }
    
    // Hide previous messages
    if (messageDiv) {
        messageDiv.style.display = 'none';
        messageDiv.className = '';
    }
    
    try {
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };
        
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to submit contact form');
        }
        
        const result = await response.json();
        
        // Show success message
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.style.background = 'var(--color-success)';
            messageDiv.style.color = 'white';
            messageDiv.style.border = 'none';
            messageDiv.textContent = t.form.success;
        }
        
        // Reset form
        form.reset();
        
        // Re-enable submit button after 3 seconds
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = t.form.send;
            }
            if (messageDiv) {
                messageDiv.style.display = 'none';
            }
        }, 3000);
        
    } catch (error) {
        console.error('Error submitting contact form:', error);
        
        // Show error message
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.style.background = 'var(--color-error)';
            messageDiv.style.color = 'white';
            messageDiv.style.border = 'none';
            messageDiv.textContent = t.form.error;
        }
        
        // Re-enable submit button
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = t.form.send;
        }
    }
}

// Vacancies/Careers Page
function renderVacanciesPage() {
    const vacanciesPage = document.getElementById('page-vacancies');
    if (!vacanciesPage) {
        console.error('Vacancies page element not found');
        return;
    }
    
    const t = translations[currentLang]?.vacancies;
    if (!t) {
        console.error('Vacancies translations not found for language:', currentLang);
        vacanciesPage.innerHTML = `
            <div class="container" style="padding: 4rem 2rem; text-align: center;">
                <h1>Error loading page</h1>
                <p>Please try again later.</p>
            </div>
        `;
        return;
    }
    
    // Example positions - in a real app, these would come from an API
    const positions = [
        {
            id: 1,
            title: currentLang === 'es' ? 'Instructor de Fontanería' : 'Plumbing Instructor',
            location: 'Madrid',
            type: currentLang === 'es' ? 'Tiempo parcial' : 'Part-time',
            description: currentLang === 'es' 
                ? 'Buscamos un profesional con experiencia en fontanería para impartir cursos prácticos.'
                : 'We are looking for a professional with plumbing experience to teach practical courses.'
        },
        {
            id: 2,
            title: currentLang === 'es' ? 'Instructor de Electricidad' : 'Electrical Instructor',
            location: 'Barcelona',
            type: currentLang === 'es' ? 'Tiempo completo' : 'Full-time',
            description: currentLang === 'es'
                ? 'Buscamos un electricista certificado para enseñar nuestros cursos de electricidad.'
                : 'We are looking for a certified electrician to teach our electrical courses.'
        }
    ];
    
    vacanciesPage.innerHTML = `
        <div class="container" style="padding: 4rem 2rem;">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h1 style="font-family: var(--font-serif); font-size: 3rem; color: var(--color-primary); margin-bottom: 1rem;">${t.title}</h1>
                <p style="font-size: 1.1rem; color: var(--color-text-muted); max-width: 600px; margin: 0 auto;">${t.subtitle}</p>
            </div>
            
            <div style="max-width: 1000px; margin: 0 auto;">
                <!-- Open Positions -->
                <div style="background: var(--color-bg-surface); padding: 2.5rem; border-radius: var(--radius-xl); border: 1px solid var(--color-border); box-shadow: var(--shadow-md); margin-bottom: 2rem;">
                    <h2 style="font-size: 1.75rem; font-weight: 600; color: var(--color-primary); margin-bottom: 2rem;">${t.openPositions}</h2>
                    
                    ${positions.length > 0 ? `
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            ${positions.map(position => `
                                <div style="border: 2px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; transition: all 0.3s; hover:border-color: var(--color-accent);" 
                                     onmouseover="this.style.borderColor='var(--color-accent)'; this.style.boxShadow='var(--shadow-sm)';" 
                                     onmouseout="this.style.borderColor='var(--color-border)'; this.style.boxShadow='none';">
                                    <div style="display: flex; justify-content: space-between; align-items: start; flex-wrap: wrap; gap: 1rem;">
                                        <div style="flex: 1; min-width: 250px;">
                                            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--color-text-main); margin-bottom: 0.75rem;">${position.title}</h3>
                                            <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.75rem;">
                                                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--color-text-muted); font-size: 0.9rem;">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <span>${position.location}</span>
                                                </div>
                                                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--color-text-muted); font-size: 0.9rem;">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                                    </svg>
                                                    <span>${position.type}</span>
                                                </div>
                                            </div>
                                            <p style="color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6;">${position.description}</p>
                                        </div>
                                        <button onclick="openCVModal(${position.id}, '${position.title.replace(/'/g, "\\'")}')" 
                                                class="btn btn-primary" 
                                                style="white-space: nowrap;">
                                            ${t.apply}
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p style="color: var(--color-text-muted); text-align: center; padding: 2rem;">${t.noPositions}</p>
                    `}
                </div>
                
                <!-- CV Submission Section -->
                <div style="background: var(--color-bg-body); padding: 2.5rem; border-radius: var(--radius-xl); border: 1px solid var(--color-border); box-shadow: var(--shadow-md); text-align: center;">
                    <p style="color: var(--color-text-muted); margin-bottom: 1.5rem; font-size: 1.05rem;">${t.noPositions}</p>
                    <button onclick="openCVModal(null, null)" class="btn btn-dark btn-lg">
                        ${t.sendCV}
                    </button>
                </div>
            </div>
        </div>
        
        <!-- CV Modal -->
        <div id="cvModal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); z-index: 1000; align-items: center; justify-content: center; padding: 2rem;">
            <div style="background: white; border-radius: var(--radius-xl); padding: 2.5rem; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative;">
                <button onclick="closeCVModal()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-muted); padding: 0.5rem; line-height: 1;">&times;</button>
                <h2 style="font-family: var(--font-serif); font-size: 2rem; color: var(--color-primary); margin-bottom: 1.5rem;">${t.cvForm.title}</h2>
                <form id="cvForm" onsubmit="submitCVForm(event)" style="display: flex; flex-direction: column; gap: 1.5rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.cvForm.name} *</label>
                        <input type="text" name="name" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.cvForm.email} *</label>
                        <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.cvForm.phone}</label>
                        <div style="display: flex;">
                            <select name="phoneCountryCode" style="padding: 0.75rem; border: 1px solid var(--color-border); border-right: none; border-radius: var(--radius-md) 0 0 var(--radius-md); background: var(--color-bg-surface); min-width: 100px; font-size: 0.95rem;">
                                ${renderCountryCodeOptions('+34')}
                            </select>
                            <input type="tel" name="phone" placeholder="612 345 678" style="flex: 1; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 1rem;">
                        </div>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.cvForm.position}</label>
                        <input type="text" name="position" id="cvPositionInput" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.cvForm.cvFile} *</label>
                        <input type="file" name="cvFile" accept=".pdf,.doc,.docx" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-text-main);">${t.cvForm.message}</label>
                        <textarea name="message" rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem; resize: vertical; font-family: inherit;"></textarea>
                    </div>
                    <div id="cvFormMessage" style="display: none; padding: 1rem; border-radius: var(--radius-md);"></div>
                    <button type="submit" id="cvSubmitBtn" class="btn btn-primary btn-lg" style="width: 100%;">
                        ${t.cvForm.submit}
                    </button>
                </form>
            </div>
        </div>
    `;
}

function openCVModal(positionId, positionTitle) {
    const modal = document.getElementById('cvModal');
    const positionInput = document.getElementById('cvPositionInput');
    
    if (modal) {
        modal.style.display = 'flex';
        if (positionInput && positionTitle) {
            positionInput.value = positionTitle;
        }
    }
}

function closeCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'none';
        const form = document.getElementById('cvForm');
        if (form) {
            form.reset();
        }
        const messageDiv = document.getElementById('cvFormMessage');
        if (messageDiv) {
            messageDiv.style.display = 'none';
        }
    }
}

async function submitCVForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const submitBtn = document.getElementById('cvSubmitBtn');
    const messageDiv = document.getElementById('cvFormMessage');
    const t = translations[currentLang].vacancies;
    
    // Disable submit button
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t.cvForm.sending;
    }
    
    // Hide previous messages
    if (messageDiv) {
        messageDiv.style.display = 'none';
    }
    
    try {
        // Combine country code with phone number
        const phoneCountryCode = formData.get('phoneCountryCode') || '+34';
        const phoneNumber = formData.get('phone') || '';
        if (phoneNumber) {
            formData.set('phone', `${phoneCountryCode} ${phoneNumber}`);
        }
        formData.delete('phoneCountryCode');
        
        const response = await fetch(`${API_BASE_URL}/vacancies/cv`, {
            method: 'POST',
            body: formData,
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to submit CV');
        }
        
        const result = await response.json();
        
        // Show success message
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.style.background = 'var(--color-accent)';
            messageDiv.style.color = 'white';
            messageDiv.style.border = 'none';
            messageDiv.textContent = t.cvForm.success;
        }
        
        // Reset form
        form.reset();
        
        // Close modal after 2 seconds
        setTimeout(() => {
            closeCVModal();
        }, 2000);
        
    } catch (error) {
        console.error('Error submitting CV:', error);
        
        // Show error message
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.style.background = 'var(--color-error)';
            messageDiv.style.color = 'white';
            messageDiv.style.border = 'none';
            messageDiv.textContent = t.cvForm.error;
        }
        
        // Re-enable submit button
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = t.cvForm.submit;
        }
    }
}

async function submitSignup(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const email = formData.get('email');
    const emailConfirm = formData.get('emailConfirm');
    
    if (email !== emailConfirm) {
        alert(currentLang === 'es' ? 'Los correos electrónicos no coinciden' : 'Emails do not match');
        return;
    }
    
    if (!selectedWorkshop || !selectedDate) {
        alert(currentLang === 'es' ? 'Por favor selecciona un curso y fecha' : 'Please select a course and date');
        return;
    }
    
    try {
        // Combine country code with phone number
        const phoneCountryCode = formData.get('phoneCountryCode') || '+34';
        const phoneNumber = formData.get('phone') || '';
        const fullPhone = phoneNumber ? `${phoneCountryCode} ${phoneNumber}` : '';
        
        const bookingData = {
            workshopId: selectedWorkshop.id,
            workshopDateId: selectedDate.id,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: email,
            emailConfirm: emailConfirm,
            phone: fullPhone,
            birthdate: formData.get('birthdate'),
            street: formData.get('street'),
            city: formData.get('city'),
            postalCode: formData.get('postalCode'),
            isCompany: formData.get('isCompany') === 'on',
            companyName: formData.get('companyName'),
            companyCif: formData.get('companyCif'),
            companyAddress: formData.get('companyAddress'),
            comments: formData.get('comments'),
        };
        
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to create booking');
        }
        
        const result = await response.json();
        // Store email for confirmation page
        window.bookingEmail = result.booking.email;
        navigateTo('confirmation');
    } catch (error) {
        console.error('Error submitting signup:', error);
        alert(currentLang === 'es' ? 'Error al enviar la inscripción' : 'Error submitting registration');
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    // Set initial language first
    await changeLanguage('es');
    
    // Check hash on initial load
    const hash = window.location.hash.slice(1); // Remove the '#'
    const initialPage = hash || 'home';
    
    // Initial render
    await navigateTo(initialPage);
    
    // Listen for hash changes (for browser back/forward buttons)
    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.slice(1);
        const newPage = newHash || 'home';
        navigateTo(newPage, null, false); // false = don't update hash (already changed)
    });
    
    // Sticky CTA bar scroll behavior
    const stickyCta = document.getElementById('stickyCta');
    let lastScrollY = window.scrollY;
    
    if (stickyCta) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroSection = document.querySelector('.hero');
            const heroHeight = heroSection ? heroSection.offsetHeight : 400;
            
            // Show sticky bar after scrolling past hero section
            if (scrollY > heroHeight) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
            
            lastScrollY = scrollY;
        });
    }
});
