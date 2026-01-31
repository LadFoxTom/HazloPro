# Especificación de Contenido de Cursos / Course Content Specification

## 📋 Resumen / Summary

Este documento describe toda la información necesaria para las páginas de descripción de cursos, basado en las mejores prácticas de plataformas educativas exitosas como Mooivakonderwijs.

---

## 🆕 Nuevos Campos en el Schema

### Workshop Model - Campos Añadidos

| Campo | Tipo | Descripción ES | Descripción EN |
|-------|------|---------------|----------------|
| **learningObjectives** | Text (JSON) | Qué aprenderás - Lista de habilidades | What you'll learn - Skills list |
| **learningObjectivesEn** | Text (JSON) | Versión en inglés | English version |
| **targetAudience** | Text (JSON) | Para quién es el curso | Who the course is for |
| **targetAudienceEn** | Text (JSON) | Versión en inglés | English version |
| **prerequisites** | Text | Requisitos previos (opcional) | Prerequisites (optional) |
| **prerequisitesEn** | Text | Versión en inglés | English version |
| **included** | Text (JSON) | Qué está incluido en el precio | What's included in the price |
| **includedEn** | Text (JSON) | Versión en inglés | English version |
| **instructors** | Text (JSON) | Array de instructores con bio | Array of instructors with bio |
| **testimonials** | Text (JSON) | Reseñas de estudiantes | Student reviews |
| **hoursPerDay** | Int | Horas por día de clase | Hours per day of class |
| **practicePercentage** | Int | % de práctica | % practical work |
| **theoryPercentage** | Int | % de teoría | % theory |
| **address** | String | Dirección completa | Full address |
| **locationInfo** | Text | Info de ubicación (transporte, parking) | Location info (transport, parking) |
| **locationInfoEn** | Text | Versión en inglés | English version |
| **maxGroupSize** | Int | Tamaño máximo del grupo | Maximum group size |
| **hasCertificate** | Boolean | Si incluye certificado | If certificate included |

---

## 📝 Estructura de Datos JSON

### Learning Objectives (learningObjectives)

```json
[
  "Identificar y reparar fugas en grifos y tuberías",
  "Instalar y reemplazar grifos de cocina y baño",
  "Desatascar desagües y sifones",
  "Cambiar juntas y empaquetaduras"
]
```

### Target Audience (targetAudience)

```json
[
  "Propietarios que quieren realizar sus propias reparaciones",
  "Personas sin experiencia previa en fontanería",
  "Entusiastas del bricolaje"
]
```

### What's Included (included)

```json
[
  "Uso de herramientas profesionales",
  "Todos los materiales y piezas para prácticas",
  "Manual digital del curso",
  "Certificado de asistencia",
  "Café, té y refrigerios"
]
```

### Instructors (instructors)

```json
[
  {
    "name": "Carlos Martínez",
    "bio": "Fontanero profesional con 15 años de experiencia.",
    "bioEn": "Professional plumber with 15 years of experience."
  }
]
```

### Testimonials (testimonials)

```json
[
  {
    "name": "María G.",
    "quote": "¡Increíble! Ahora puedo arreglar los grifos de mi casa sin llamar a nadie.",
    "quoteEn": "Amazing! Now I can fix my home faucets without calling anyone."
  }
]
```

---

## 🎨 Secciones de la Página del Curso

### 1. Hero Section
**Información mostrada:**
- Imagen destacada del curso
- Título del curso
- Descripción corta
- Precio
- Badges (nivel, categoría, popular)

**Campos usados:**
- `imageUrl`
- `title` / `titleEn`
- `description` / `descriptionEn`
- `price`
- `level`
- `category`
- `isPopular`

---

### 2. Información General
**Título:** "Sobre este curso"

**Contenido:**
- Descripción completa del curso
- Para quién es (target audience)
- Requisitos previos (si hay)

**Campos usados:**
- `fullDescription` / `fullDescriptionEn`
- `targetAudience` / `targetAudienceEn`
- `prerequisites` / `prerequisitesEn`

---

### 3. Qué Aprenderás
**Título (ES):** "¿Qué aprenderás?"
**Título (EN):** "What will you learn?"

**Formato:** Lista con checkmarks ✓

**Campos usados:**
- `learningObjectives` / `learningObjectivesEn`

**Ejemplo visual:**
```
✓ Identificar y reparar fugas en grifos y tuberías
✓ Instalar y reemplazar grifos de cocina y baño
✓ Desatascar desagües y sifones
✓ Cambiar juntas y empaquetaduras
```

---

### 4. Información Práctica
**Título (ES):** "Información práctica"
**Título (EN):** "Practical information"

**Grid de tarjetas con iconos:**

| Ícono | Título | Contenido |
|-------|--------|-----------|
| 📅 | Duración | `lessons` días (`duration`) |
| ⏰ | Horario | `hoursPerDay` horas por día |
| 👥 | Tamaño del grupo | Máximo `maxGroupSize` participantes |
| 📊 | Contenido | `practicePercentage`% práctica, `theoryPercentage`% teoría |
| 🎓 | Nivel | `level` (Básico/Intermedio/Avanzado) |
| 📍 | Ubicación | `location` |
| 💰 | Precio | €`price` |
| 📜 | Certificado | `hasCertificate` ? "Incluido" : "No incluido" |

---

### 5. Qué está Incluido
**Título (ES):** "Qué está incluido"
**Título (EN):** "What's included"

**Formato:** Lista con checkmarks ✓

**Campos usados:**
- `included` / `includedEn`

**Ejemplo visual:**
```
✓ Uso de herramientas profesionales (llaves, cortadores, soldador)
✓ Todos los materiales y piezas para prácticas
✓ Manual digital del curso con esquemas técnicos
✓ Certificado de asistencia
✓ Café, té y refrigerios durante los descansos
✓ Asesoramiento post-curso por email
```

---

### 6. Instructores
**Título (ES):** "Tus instructores"
**Título (EN):** "Your instructors"

**Formato:** Tarjeta por instructor

**Campos usados:**
- `instructors` (array de objetos)

**Ejemplo visual:**
```
┌─────────────────────────────────────────┐
│  [Foto]  Carlos Martínez               │
│                                          │
│  Fontanero profesional con 15 años     │
│  de experiencia. Especialista en        │
│  instalaciones residenciales y          │
│  formación práctica.                    │
└─────────────────────────────────────────┘
```

---

### 7. Opiniones de Estudiantes
**Título (ES):** "Lo que dicen nuestros estudiantes"
**Título (EN):** "What our students say"

**Formato:** Cards de testimonios

**Campos usados:**
- `testimonials` (array de objetos)

**Ejemplo visual:**
```
┌─────────────────────────────────────────┐
│ "¡Increíble! Ahora puedo arreglar los  │
│ grifos de mi casa sin llamar a nadie.  │
│ Carlos explica todo de forma muy       │
│ clara."                                 │
│                                          │
│ — María G.                              │
└─────────────────────────────────────────┘
```

---

### 8. Ubicación y Acceso
**Título (ES):** "Cómo llegar"
**Título (EN):** "How to get there"

**Información mostrada:**
- Dirección completa
- Transporte público (metro, autobús)
- Parking
- Accesibilidad

**Campos usados:**
- `address`
- `location`
- `locationInfo` / `locationInfoEn`

**Ejemplo visual:**
```
📍 Calle de Artesanos 45, 28012 Madrid

🚇 Metro: Línea 1 (Menéndez Pelayo) - 5 min a pie
🚌 Autobús: Líneas 10, 14, 27 - Parada Artesanos
🚗 Parking gratuito disponible
```

---

### 9. Fechas Disponibles (Sidebar o Sección)
**Título (ES):** "Próximas fechas"
**Título (EN):** "Upcoming dates"

**Información por fecha:**
- Fecha de inicio
- Plazas disponibles
- Botón de inscripción

**Campos usados:**
- `dates` (relación con WorkshopDate)
- `dates.date`
- `dates.maxSpots`
- `dates.bookedSpots`

**Ejemplo visual:**
```
┌─────────────────────────────────────────┐
│ 📅 15 febrero 2026                      │
│ 👥 4 plazas disponibles de 8            │
│ [Inscribirse ahora →]                   │
├─────────────────────────────────────────┤
│ 📅 22 febrero 2026                      │
│ 👥 2 plazas disponibles de 8            │
│ [Inscribirse ahora →]                   │
└─────────────────────────────────────────┘
```

---

### 10. Cursos Relacionados (Opcional)
**Título (ES):** "También te puede interesar"
**Título (EN):** "You might also like"

**Mostrar:**
- 3-4 cursos de la misma categoría
- O cursos del siguiente nivel (básico → intermedio → avanzado)

---

## 🎯 Ejemplo Completo: Fontanería Básica

### ES - Español

```markdown
# Fontanería Básica para el Hogar

## Sobre este curso
En este curso práctico de 3 días aprenderás todo lo necesario para realizar 
reparaciones básicas de fontanería en tu hogar. Desde arreglar grifos que 
gotean hasta instalar nuevas tuberías y desagües.

### Para quién es este curso
✓ Propietarios que quieren realizar sus propias reparaciones
✓ Personas sin experiencia previa en fontanería
✓ Entusiastas del bricolaje que buscan ampliar sus habilidades

### Requisitos previos
No se requiere experiencia previa. Solo ganas de aprender y trabajar 
de forma práctica.

## ¿Qué aprenderás?
✓ Identificar y reparar fugas en grifos y tuberías
✓ Instalar y reemplazar grifos de cocina y baño
✓ Desatascar desagües y sifones
✓ Cambiar juntas y empaquetaduras
✓ Instalar tuberías de cobre y PVC
✓ Utilizar herramientas profesionales de fontanería

## Información práctica
📅 Duración: 3 días (18 horas totales)
⏰ Horario: 6 horas por día
👥 Grupo: Máximo 8 participantes
📊 Contenido: 80% práctica, 20% teoría
🎓 Nivel: Básico
💰 Precio: €295
📜 Certificado: Incluido

## Qué está incluido
✓ Uso de herramientas profesionales (llaves, cortadores, soldador)
✓ Todos los materiales y piezas para prácticas
✓ Manual digital del curso con esquemas técnicos
✓ Certificado de asistencia
✓ Café, té y refrigerios durante los descansos
✓ Asesoramiento post-curso por email

## Tu instructor
**Carlos Martínez**
Fontanero profesional con 15 años de experiencia. Especialista en 
instalaciones residenciales y formación práctica.

## Lo que dicen nuestros estudiantes
"¡Increíble! Ahora puedo arreglar los grifos de mi casa sin llamar a nadie. 
Carlos explica todo de forma muy clara."
— María G.

"El curso es muy práctico. Aprendí en 3 días lo que pensé que tardaría 
meses en dominar."
— Juan P.

## Cómo llegar
📍 Calle de Artesanos 45, 28012 Madrid

🚇 Metro: Línea 1 (Estación Menéndez Pelayo) - 5 min a pie
🚌 Autobús: Líneas 10, 14, 27 - Parada Artesanos
🚗 Parking gratuito en la calle lateral (Calle del Taller)
🚲 Aparcamiento de bicis disponible
```

---

## 📱 Estructura HTML Sugerida

```html
<div class="course-detail-page">
  <!-- Hero Section -->
  <section class="hero">
    <img src="{imageUrl}" alt="{title}">
    <div class="hero-content">
      <h1>{title}</h1>
      <p class="description">{description}</p>
      <div class="badges">
        <span class="badge level">{level}</span>
        <span class="badge category">{category}</span>
        {#if isPopular}<span class="badge popular">⭐ Popular</span>{/if}
      </div>
      <div class="price">€{price}</div>
    </div>
  </section>

  <!-- Main Content -->
  <div class="content-grid">
    <main class="main-content">
      <!-- About Section -->
      <section class="about">
        <h2>Sobre este curso</h2>
        <p>{fullDescription}</p>
      </section>

      <!-- Target Audience -->
      <section class="target-audience">
        <h3>Para quién es este curso</h3>
        <ul>
          {#each targetAudience as item}
            <li>✓ {item}</li>
          {/each}
        </ul>
      </section>

      <!-- Prerequisites (if any) -->
      {#if prerequisites}
        <section class="prerequisites">
          <h3>Requisitos previos</h3>
          <p>{prerequisites}</p>
        </section>
      {/if}

      <!-- Learning Objectives -->
      <section class="learning-objectives">
        <h2>¿Qué aprenderás?</h2>
        <ul class="checklist">
          {#each learningObjectives as objective}
            <li>✓ {objective}</li>
          {/each}
        </ul>
      </section>

      <!-- Practical Info -->
      <section class="practical-info">
        <h2>Información práctica</h2>
        <div class="info-grid">
          <div class="info-card">
            <span class="icon">📅</span>
            <span class="label">Duración</span>
            <span class="value">{lessons} días ({duration})</span>
          </div>
          <div class="info-card">
            <span class="icon">⏰</span>
            <span class="label">Horario</span>
            <span class="value">{hoursPerDay} horas/día</span>
          </div>
          <div class="info-card">
            <span class="icon">👥</span>
            <span class="label">Grupo</span>
            <span class="value">Máx. {maxGroupSize}</span>
          </div>
          <div class="info-card">
            <span class="icon">📊</span>
            <span class="label">Contenido</span>
            <span class="value">{practicePercentage}% práctica</span>
          </div>
        </div>
      </section>

      <!-- What's Included -->
      <section class="included">
        <h2>Qué está incluido</h2>
        <ul class="checklist">
          {#each included as item}
            <li>✓ {item}</li>
          {/each}
        </ul>
      </section>

      <!-- Instructors -->
      <section class="instructors">
        <h2>Tus instructores</h2>
        {#each instructors as instructor}
          <div class="instructor-card">
            <h3>{instructor.name}</h3>
            <p>{instructor.bio}</p>
          </div>
        {/each}
      </section>

      <!-- Testimonials -->
      <section class="testimonials">
        <h2>Lo que dicen nuestros estudiantes</h2>
        <div class="testimonials-grid">
          {#each testimonials as testimonial}
            <div class="testimonial-card">
              <blockquote>{testimonial.quote}</blockquote>
              <cite>— {testimonial.name}</cite>
            </div>
          {/each}
        </div>
      </section>

      <!-- Location -->
      <section class="location">
        <h2>Cómo llegar</h2>
        <p class="address">📍 {address}</p>
        <div class="location-info">
          {locationInfo}
        </div>
      </section>
    </main>

    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sticky-sidebar">
        <!-- Dates & Booking -->
        <section class="dates-booking">
          <h3>Próximas fechas</h3>
          {#each dates as date}
            <div class="date-card">
              <div class="date">{formatDate(date.date)}</div>
              <div class="spots">
                {date.maxSpots - date.bookedSpots} plazas disponibles
              </div>
              <button class="btn-primary">Inscribirse →</button>
            </div>
          {/each}
        </section>

        <!-- Quick Info -->
        <section class="quick-info">
          <h4>Resumen</h4>
          <ul>
            <li><strong>Precio:</strong> €{price}</li>
            <li><strong>Duración:</strong> {lessons} días</li>
            <li><strong>Nivel:</strong> {level}</li>
            <li><strong>Ubicación:</strong> {location}</li>
            <li><strong>Certificado:</strong> {hasCertificate ? 'Sí' : 'No'}</li>
          </ul>
        </section>
      </div>
    </aside>
  </div>
</div>
```

---

## 🔄 Migración de la Base de Datos

Para aplicar los cambios al schema:

```bash
# 1. Genera el cliente de Prisma con el nuevo schema
npx prisma generate

# 2. Crea una nueva migración
npx prisma migrate dev --name add_comprehensive_course_fields

# 3. Aplica la migración
npx prisma db push

# 4. Ejecuta el seed con los datos completos
node prisma/seed.js
```

---

## 📊 Comparación: Antes vs Después

### ANTES (Datos Básicos)
```json
{
  "title": "Fontanería Básica",
  "description": "Aprende los fundamentos",
  "price": 295,
  "lessons": 3,
  "duration": "18 horas",
  "level": "APRENDE",
  "location": "Madrid"
}
```

### DESPUÉS (Datos Completos)
```json
{
  "title": "Fontanería Básica para el Hogar",
  "description": "Aprende los fundamentos y ahorra en reparaciones",
  "fullDescription": "En este curso práctico de 3 días aprenderás...",
  "learningObjectives": ["Reparar fugas", "Instalar grifos", "..."],
  "targetAudience": ["Propietarios", "Principiantes", "..."],
  "prerequisites": "No se requiere experiencia previa",
  "included": ["Herramientas", "Materiales", "Certificado", "..."],
  "instructors": [{"name": "Carlos", "bio": "..."}],
  "testimonials": [{"name": "María", "quote": "..."}],
  "price": 295,
  "lessons": 3,
  "hoursPerDay": 6,
  "duration": "3 días (18 horas totales)",
  "practicePercentage": 80,
  "theoryPercentage": 20,
  "level": "APRENDE",
  "location": "Madrid Centro",
  "address": "Calle de Artesanos 45, 28012 Madrid",
  "locationInfo": "Metro Línea 1... Parking gratuito...",
  "maxGroupSize": 8,
  "hasCertificate": true
}
```

---

## ✅ Checklist de Implementación

- [x] Schema actualizado con nuevos campos
- [x] Seed data con información completa (12 cursos)
- [x] Datos en español e inglés
- [x] Estructura JSON documentada
- [ ] Frontend: Actualizar página de detalle de curso
- [ ] Frontend: Componentes para nuevas secciones
- [ ] Backend: Actualizar API para incluir nuevos campos
- [ ] Testing: Verificar renderizado de todos los campos
- [ ] SEO: Meta tags con nueva información
- [ ] Traducción: Verificar calidad de traducciones EN

---

## 🎓 Cursos de Ejemplo Completamente Desarrollados

Los siguientes cursos tienen **toda la información completa**:

1. ✅ **Fontanería Básica** - Ejemplo completo con toda la información
2. ✅ **Electricidad Doméstica** - Ejemplo completo
3. ✅ **Alicatado y Azulejos** - Ejemplo completo
4. ✅ **Carpintería Básica** - Ejemplo completo

Los demás cursos (5-12) tienen información básica pero completa, perfecta para expandir siguiendo el mismo patrón.

---

## 📞 Próximos Pasos

1. **Migrar la base de datos**: Ejecutar `npx prisma migrate dev`
2. **Actualizar el frontend**: Crear componentes para mostrar nueva información
3. **Actualizar la API**: Asegurar que devuelve todos los campos nuevos
4. **Testing**: Verificar que todo se muestra correctamente
5. **SEO**: Aprovechar la nueva información para mejor posicionamiento

---

*Documento creado: 30 Enero 2026*  
*Versión: 1.0*
