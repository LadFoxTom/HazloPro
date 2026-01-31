import Link from "next/link"
import { Wrench, Calendar, Users, Award, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">HazloPro</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#workshops" className="text-gray-700 hover:text-teal-600 transition-colors">
                Talleres
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contacto
              </Link>
              <Link
                href="/admin"
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Aprende, Construye y Domina
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Talleres profesionales de bricolaje y construcción. Desde fontanería hasta carpintería,
            desarrolla tus habilidades con instructores expertos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#workshops"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-lg font-medium"
            >
              Ver Talleres
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors text-lg font-medium"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegir HazloPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Talleres Prácticos
              </h3>
              <p className="text-gray-600">
                Aprende haciendo con proyectos reales y ejercicios prácticos guiados por expertos.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Grupos Reducidos
              </h3>
              <p className="text-gray-600">
                Máximo 10 participantes por taller para garantizar atención personalizada.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Certificación
              </h3>
              <p className="text-gray-600">
                Recibe un certificado de finalización y desarrolla habilidades profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="workshops" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Calendar className="w-16 h-16 text-teal-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Talleres Próximamente
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos preparando una increíble selección de talleres. Regístrate para recibir notificaciones
            cuando estén disponibles.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Notificarme
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">HazloPro</span>
              </div>
              <p className="text-gray-400">
                Talleres profesionales de bricolaje y construcción en España.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#workshops" className="text-gray-400 hover:text-white transition-colors">
                    Talleres
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="text-gray-400 hover:text-white transition-colors">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@hazlopro.es</li>
                <li>Tel: +34 XXX XXX XXX</li>
                <li>Madrid, Barcelona, Valencia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 HazloPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
