import React, { useState } from 'react';

const customStyles = {
  root: {
    '--color-primary': '#3E5C43',
    '--color-accent': '#558B55',
    '--color-accent-hover': '#457045',
    '--color-bg-body': '#F9FAF8',
    '--color-bg-surface': '#FFFFFF',
    '--color-text-main': '#2A3B2A',
    '--color-text-muted': '#6B7A6B',
    '--color-border': '#E0E5E0',
    '--radius-sm': '4px',
    '--radius-md': '8px',
    '--radius-lg': '12px',
    '--font-serif': "'DM Serif Display', serif",
    '--font-sans': "'Inter', sans-serif",
    '--shadow-sm': '0 1px 2px rgba(42, 59, 42, 0.05)',
    '--shadow-md': '0 4px 12px rgba(42, 59, 42, 0.08)'
  }
};

const CheckboxItem = ({ checked, onChange, children }) => {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-main)', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          appearance: 'none',
          width: '18px',
          height: '18px',
          border: '2px solid var(--color-border)',
          borderRadius: '4px',
          transition: 'all 0.2s',
          backgroundColor: checked ? 'var(--color-accent)' : 'transparent',
          borderColor: checked ? 'var(--color-accent)' : 'var(--color-border)',
          backgroundImage: checked ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\")" : 'none',
          backgroundSize: '12px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {children}
    </label>
  );
};

const WorkshopCard = ({ workshop, onBook }) => {
  return (
    <article style={{
      background: 'var(--color-bg-surface)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--color-border)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.borderColor = '#C0CGC0';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = 'var(--color-border)';
    }}>
      <div style={{ height: '180px', width: '100%', backgroundColor: '#E8EBE8', position: 'relative', overflow: 'hidden' }}>
        <span style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '4px 10px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: 'var(--color-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          zIndex: 1
        }}>
          {workshop.badge}
        </span>
        <img 
          src={workshop.image} 
          alt={workshop.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: '1.2' }}>
          {workshop.title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg style={{ width: '16px', height: '16px', opacity: '0.7' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{workshop.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg style={{ width: '16px', height: '16px', opacity: '0.7' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{workshop.location}</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
          <div>
            <div style={{ fontWeight: '600', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>{workshop.price}</div>
            <div style={{ fontSize: '0.8rem', color: workshop.spots === 'Waitlist' ? 'var(--color-text-muted)' : '#D97706', fontWeight: '500' }}>
              {workshop.spots}
            </div>
          </div>
          <button 
            onClick={() => onBook(workshop)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '0.9rem',
              textDecoration: 'none',
              border: workshop.buttonType === 'outline' ? '1px solid var(--color-border)' : 'none',
              backgroundColor: workshop.buttonType === 'outline' ? 'transparent' : 'var(--color-accent)',
              color: workshop.buttonType === 'outline' ? 'var(--color-text-main)' : 'white'
            }}
            onMouseEnter={(e) => {
              if (workshop.buttonType === 'outline') {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent)';
              } else {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)';
              }
            }}
            onMouseLeave={(e) => {
              if (workshop.buttonType === 'outline') {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-text-main)';
              } else {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              }
            }}>
            {workshop.buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <div style={{
      height: '120px',
      borderRadius: 'var(--radius-md)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      backgroundColor: category.bgColor
    }}>
      <img src={category.image} alt={category.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1rem',
        background: 'linear-gradient(to top, rgba(30,50,30,0.8), transparent)',
        color: 'white',
        fontWeight: '500',
        fontSize: '0.95rem'
      }}>
        {category.name}
      </div>
    </div>
  );
};

const App = () => {
  const [filters, setFilters] = useState({
    plumbingPiping: true,
    electricalBasics: false,
    woodworking: false,
    tilingMasonry: false,
    paintingDrywall: false,
    beginnerFriendly: false,
    intermediate: false,
    professionalCert: false,
    thisWeekend: false,
    nextWeek: false
  });

  const workshops = [
    {
      id: 1,
      badge: 'Beginner',
      image: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&q=80&w=600',
      title: 'Residential Plumbing Basics',
      date: 'Sat, Oct 14 • 09:00 - 14:00',
      location: 'Madrid Central Workshop',
      price: '€120',
      spots: '4 spots left',
      buttonText: 'Book',
      buttonType: 'primary'
    },
    {
      id: 2,
      badge: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1565514020125-99d790d965e6?auto=format&fit=crop&q=80&w=600',
      title: 'Joinery & Cabinet Making',
      date: 'Sun, Oct 15 • 10:00 - 16:00',
      location: 'Valencia Trade Hub',
      price: '€185',
      spots: 'Waitlist',
      buttonText: 'Details',
      buttonType: 'outline'
    },
    {
      id: 3,
      badge: 'Beginner',
      image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=600',
      title: 'Home Wiring Safety',
      date: 'Sat, Oct 21 • 09:00 - 13:00',
      location: 'Barcelona Tech Center',
      price: '€95',
      spots: '12 spots left',
      buttonText: 'Book',
      buttonType: 'primary'
    },
    {
      id: 4,
      badge: 'Pro',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600',
      title: 'Arc Welding Intro',
      date: 'Sat, Oct 28 • 08:00 - 15:00',
      location: 'Bilbao Industrial Park',
      price: '€210',
      spots: '2 spots left',
      buttonText: 'Book',
      buttonType: 'primary'
    }
  ];

  const categories = [
    { name: 'Plumbing', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400', bgColor: '#A3B18A' },
    { name: 'Electrical', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400', bgColor: '#588157' },
    { name: 'Carpentry', image: 'https://images.unsplash.com/photo-1601058268499-e52642d18d89?auto=format&fit=crop&q=80&w=400', bgColor: '#3A5A40' },
    { name: 'Tiling', image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80&w=400', bgColor: '#DAD7CD' }
  ];

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const handleBook = (workshop) => {
    alert(`Booking ${workshop.title}`);
  };

  return (
    <div style={{ ...customStyles.root, fontFamily: 'var(--font-sans)', backgroundColor: 'var(--color-bg-body)', color: 'var(--color-text-main)', lineHeight: '1.5', fontSize: '15px', WebkitFontSmoothing: 'antialiased', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <header style={{
        background: 'var(--color-bg-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0 2rem',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: '400' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          TallerBrico
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-primary)', fontWeight: '500', fontSize: '0.95rem', transition: 'color 0.2s' }}>Workshops</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text-main)', fontWeight: '500', fontSize: '0.95rem', transition: 'color 0.2s' }}>Instructors</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text-main)', fontWeight: '500', fontSize: '0.95rem', transition: 'color 0.2s' }}>Locations</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text-main)', fontWeight: '500', fontSize: '0.95rem', transition: 'color 0.2s' }}>About</a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text-main)', fontWeight: '500', fontSize: '0.95rem' }}>Log in</a>
          <a href="#" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: '0.9rem',
            textDecoration: 'none',
            border: 'none',
            backgroundColor: 'var(--color-accent)',
            color: 'white'
          }}>For Companies</a>
        </div>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem', padding: '2rem', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Category</h3>
            <CheckboxItem checked={filters.plumbingPiping} onChange={() => handleFilterChange('plumbingPiping')}>Plumbing & Piping</CheckboxItem>
            <CheckboxItem checked={filters.electricalBasics} onChange={() => handleFilterChange('electricalBasics')}>Electrical Basics</CheckboxItem>
            <CheckboxItem checked={filters.woodworking} onChange={() => handleFilterChange('woodworking')}>Woodworking</CheckboxItem>
            <CheckboxItem checked={filters.tilingMasonry} onChange={() => handleFilterChange('tilingMasonry')}>Tiling & Masonry</CheckboxItem>
            <CheckboxItem checked={filters.paintingDrywall} onChange={() => handleFilterChange('paintingDrywall')}>Painting & Drywall</CheckboxItem>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Skill Level</h3>
            <CheckboxItem checked={filters.beginnerFriendly} onChange={() => handleFilterChange('beginnerFriendly')}>Beginner Friendly</CheckboxItem>
            <CheckboxItem checked={filters.intermediate} onChange={() => handleFilterChange('intermediate')}>Intermediate</CheckboxItem>
            <CheckboxItem checked={filters.professionalCert} onChange={() => handleFilterChange('professionalCert')}>Professional Cert.</CheckboxItem>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Availability</h3>
            <CheckboxItem checked={filters.thisWeekend} onChange={() => handleFilterChange('thisWeekend')}>This Weekend</CheckboxItem>
            <CheckboxItem checked={filters.nextWeek} onChange={() => handleFilterChange('nextWeek')}>Next Week</CheckboxItem>
          </div>
        </aside>

        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)', lineHeight: '1.1', maxWidth: '600px' }}>Master the Trade</h1>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', fontSize: '1.1rem' }}>Hands-on construction workshops in your city.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {workshops.map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} onBook={handleBook} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;