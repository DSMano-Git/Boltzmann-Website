import React from 'react';
import { Sparkles, Globe, Clock } from 'lucide-react';

export default function Oursuitedata() {
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

  const features = [
    {
      icon: <Sparkles size={32} style={{ color: '#8b5cf6' }} />,
      title: 'Multi-Agent AI Specialists',
      description: 'Smart AI agents collaborate seamlessly to accelerate scientific breakthroughs and deliver faster results.'
    },
    {
      icon: <Globe size={32} style={{ color: '#06b6d4' }} />,
      title: 'End-to-End Automation',
      description: 'Complete workflow from molecule design to synthesis planning, safety checks, and data analysis.'
    },
    {
      icon: <Clock size={32} style={{ color: '#10b981' }} />,
      title: 'Lab-Level Expertise',
      description: 'Experience next-level precision with AI that thinks like a full team of experts working in harmony.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        background: '#ffffff',
        padding: '6rem 2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        {/* Left Side - Title */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '400',
            color: '#1f2937',
            lineHeight: '1.1',
            margin: 0,
            letterSpacing: '-0.02em'
          }}>
            The power of{' '}
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #d946ef, #8b5cf6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '600'
            }}>
             Boltzmann AI Discovery Suite
            </span>
          </h2>
        </div>

        {/* Right Side - Features */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 0.2 + 0.3}s`
              }}
            >
              {/* Icon Container */}
              <div style={{
                width: '60px',
                height: '60px',
                background: `linear-gradient(135deg, ${feature.icon.props.style.color}15, ${feature.icon.props.style.color}05)`,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2px solid ${feature.icon.props.style.color}20`,
                flexShrink: 0
              }}>
                {feature.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: '0 0 1rem 0',
                  lineHeight: '1.3'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 968px) {
          .grid-container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .features-container {
            align-items: center !important;
          }
          .feature-item {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>

      {/* Apply responsive classes */}
      <div style={{ display: 'none' }}>
        <div className="grid-container" />
        <div className="features-container" />
        <div className="feature-item" />
      </div>
    </section>
  );
}