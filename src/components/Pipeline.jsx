import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

export default function Pipeline() {
  const stages = [
    'Target ID',
    'Hit ID',
    'Lead OPT',
    'PreClinical',
    'Clinical'
  ];

  const diseases = [
    { name: 'Oncology-1', progress: 40 },
    { name: 'Oncology-2', progress: 20 },
    { name: 'Oncology-3', progress: 40 },
    { name: 'Auto-Immune 1', progress: 60 },
    { name: 'Auto-Immune 2', progress: 20 }
  ];

  // Animate progress on load
  const [animatedProgress, setAnimatedProgress] = useState(
    diseases.map(() => 0)
  );

  useEffect(() => {
    const timers = diseases.map((d, idx) =>
      setTimeout(() => {
        setAnimatedProgress((prev) =>
          prev.map((p, i) => (i === idx ? d.progress : p))
        );
      }, 300 + idx * 200)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      // color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* <Helmet>
        <title>Boltzmann | Pipeline</title>
        <meta name="description" content="Boltzmann Pipeline" />
      </Helmet> */}

      <div style={{ 
        flex: '1',
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '60px 20px',
        width: '100%'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: '800',
          color: '#8b5cf6',
          marginBottom: '40px'
        }}>
          PIPELINE
        </h2>

        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          backgroundColor: '#ffff',
          borderRadius: '12px 12px 0 0',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '16px',
            fontWeight: '700',
            color: '#501f84',
            backgroundColor: '#f9fafb'
          }}>
            Name
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${stages.length}, 1fr)`,
            backgroundColor: '#f9fafb'
          }}>
            {stages.map((stage) => (
              <div key={stage} style={{
                padding: '16px',
                fontWeight: '700',
                color: '#501f84',
                textAlign: 'center',
                borderLeft: '1px solid #e5e7eb'
              }}>
                {stage}
              </div>
            ))}
          </div>
        </div>

        {/* Rows */}
        {diseases.map((item, idx) => (
          <div key={item.name} style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            backgroundColor: '#ffff',
            borderBottom: '1px solid #e5e7eb',
            alignItems: 'center'
          }}>
            {/* Name */}
            <div style={{
              padding: '16px',
              color: '#501f84',
              fontWeight: '600',
              backgroundColor: '#f9fafb'
            }}>
              {item.name}
            </div>

            {/* Progress bar - spans all stages */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${stages.length}, 1fr)`,
              padding: '0 16px'
            }}>
              <div style={{
                gridColumn: `1 / span ${stages.length}`,
                padding: '16px 0'
              }}>
                <div style={{
                  width: '100%',
                  height: '14px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    width: `${animatedProgress[idx]}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #8b5cf6, #6366f1, #ec4899)',
                    borderRadius: '999px',
                    transition: 'width 1.5s ease'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div style={{
          maxWidth: '1200px',
          margin: '80px auto 0',
          padding: '60px 40px',
          backgroundColor: 'white',
          borderRadius: '16px',
          color: '#1F1F2E'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: '800',
            color: '#8b5cf6',
            marginBottom: '16px'
          }}>
            Partnerships
          </h2>
          <p style={{
            textAlign: 'center',
            fontWeight: '700',
            marginBottom: '32px',
            fontSize: '18px'
          }}>
            Get In Touch
          </p>
          <p style={{ marginBottom: '24px', lineHeight: '1.6', fontSize: '18px' }}>
            Boltzmann Labs has created an AI-based drug discovery platform that can accelerate the process of therapeutics research and explore the chemical space in an efficient and user-friendly interface.
          </p>
          <p style={{ marginBottom: '40px', lineHeight: '1.6', fontSize: '18px' }}>
            Using a data-driven approach, BoltChem, our proprietary small molecule design and discovery software can be utilized to design novel drugs for any disease target de novo.
          </p>

          {/* Action Buttons - Side by Side */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            <button 
              style={{
                backgroundColor: '#501f84',
                color: 'white',
                padding: '16px 32px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                flex: '1',
                maxWidth: '300px',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(80, 31, 132, 0.3)'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(80, 31, 132, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              Why partner with us?
            </button>
            <button 
              style={{
                backgroundColor: '#501f84',
                color: 'white',
                padding: '16px 32px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                flex: '1',
                maxWidth: '300px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(80, 31, 132, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              End Goals
            </button>
          </div>
        </div>
{/* 
        <div style={{
          maxWidth: '1200px',
          margin: '40px auto 0',
          padding: '40px 20px',
          backgroundColor: 'white',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          color: '#1F1F2E'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            Academic Partnership Program
            <div style={{
              flex: '1 1 300px',
              border: '1px solid black',
              textAlign: 'justify',
              borderRadius: '8px',
              padding: '24px'
            }}>
              <button style={{
                border: 'none',
                borderRadius: '50px',
                background: '#4F1985',
                color: '#fff',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontSize: '16px',
                padding: '15px',
                display: 'block',
                margin: '0 auto 20px',
                width: 'fit-content'
              }}>
                Academic Partnership Program
              </button>
              <p style={{ lineHeight: '1.6', fontSize: '18px' }}>
                Academic institutes and laboratories are invited to propose a disease or protein target for which experts will perform De Novo drug design. Best molecules shall be synthesized and validated.
              </p>
            </div>

          
            <div style={{
              flex: '1 1 300px',
              border: '1px solid black',
              textAlign: 'justify',
              borderRadius: '8px',
              padding: '24px'
            }}>
              <button style={{
                border: 'none',
                borderRadius: '50px',
                background: '#4F1985',
                color: '#fff',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontSize: '16px',
                padding: '15px',
                display: 'block',
                margin: '0 auto 20px',
                width: 'fit-content'
              }}>
                Joint Ventures
              </button>
              <p style={{ lineHeight: '1.6', fontSize: '18px' }}>
                Both Boltzmann and the partner will use their computational and biological expertise to co-create effective novel therapeutics with shared risks and rewards.
              </p>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}