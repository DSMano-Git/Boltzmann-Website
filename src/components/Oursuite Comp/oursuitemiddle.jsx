import React from 'react';
import { Shield, Globe, Scale, Users, CheckCircle } from 'lucide-react';

export default function Oursuitemiddle() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      icon: <Users size={52} style={{ color: '#8b5cf6' }} />,
      title: 'Multi-agent AI workflows',
      description: 'Automate complex scientific decisions with intelligent agent orchestration'
    },
    {
      icon: <Scale size={52} style={{ color: '#06b6d4' }} />,
      title: 'Customizable modules',
      description: 'Tailored solutions that adapt to your discovery stage and team requirements'
    },
    {
      icon: <Shield size={52} style={{ color: '#10b981' }} />,
      title: 'Built-in scientific reasoning',
      description: 'Reliable results powered by validated scientific methodologies and logic'
    },
    {
      icon: <Globe size={52} style={{ color: '#f59e0b' }} />,
      title: 'Cloud or on-prem ready',
      description: 'Flexible deployment options ensuring seamless scale and compliance'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        
        padding: '3rem 1rem',
        
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '400',
            color: '#1f2937',
            margin: 0,
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease'
          }}>
            Committed to scientific innovation
          </h2>
        </div>

        {/* Cards Container */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center'
        }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                height: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: '1 1 280px',
                maxWidth: '320px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Icon Container */}
              <div style={{
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${card.icon.props.style.color}20, ${card.icon.props.style.color}10)`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${card.icon.props.style.color}30`
                }}>
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#1f2937',
                  lineHeight: '1.3',
                  margin: '0 0 1rem 0',
                  textAlign: 'center'
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: '0 0 2rem 0',
                  fontWeight: '400'
                }}>
                  {card.description}
                </p>
              </div>


            </div>
          ))}
        </div>

        {/* Responsive Styles for Mobile */}
        <style jsx>{`
          @media (max-width: 1200px) {
            .cards-container {
              flex-wrap: wrap;
              justify-content: center;
            }
          }
          @media (max-width: 768px) {
            .cards-container {
              flex-direction: column;
              align-items: center;
            }
          }
        `}</style>
      </div>
    </section>
  );
}