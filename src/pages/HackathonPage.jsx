
document.body.style.margin = '0';
document.body.style.padding = '0';
import React, { useState,useEffect } from 'react';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import Footer from '../components/Footer.jsx';
export default function HackathonPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occupation: '',
    skillLevel: '',
    interests: [],
    why: '',
    agree: false,
  });

  
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px',
      marginBottom: '30px'
    }}>
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            padding: '16px 0',
            background: '#f8f5ff',
            borderRadius: '12px',
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1a0933',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 2px 8px rgba(121, 40, 202, 0.08)'
          }}>
            <span style={{ position: 'relative', zIndex: 1 }}>
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: '#6b46c1',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '8px'
          }}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

  return (
    
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
         <h1>
  <span style={{
  color: '#fff',
  fontWeight: '700',
}}>
   InnovateBio Design Hackathon 2025
</span>

</h1>
<p style={styles.subTitle}>
  Powered by Generative & Agentic AI | Hosted by Boltzmann Labs
</p>

          <p style={styles.dateLocation}>21-25 July 2025, Online</p>
          <div style={styles.ctaContainer}>
             <a href="https://docs.google.com/forms/d/1GO1WUAtED0wnX4CBS_cy8w4ot-D23krd9cqw7G6ehUs/viewform?edit_requested=true" target='__blank'><button style={styles.secondaryButton}>Register Now</button></a>
         
            <a href="https://drive.google.com/file/d/1TZEb9fOWYQRLQP8nV7zn6CgwfPr2BU6m/view?usp=sharing" target='__blank'><button style={styles.secondaryButton}>Learn More</button></a>
          </div>
        </div>
      
      </header>

      {/* About Section */}
      <section style={{
  padding: '60px 20px',
  backgroundColor: '#f9f9f9'
}}>
  <div style={{
    textAlign: 'center',
  
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      color: '#4f1985',
     
      fontWeight: '700',

    }}>
      About the Hackathon
    </h2>
    <div style={{
      width: '60px',
      height: '4px',
      backgroundColor: '#4f1985',
      margin: '0 auto',
      marginBottom: '20px',
    }}></div>
  </div>
  <p style={{
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'justify',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333'
  }}>
    Join the brightest minds in molecular science and computational biology at the InnovateBio Design Hackathon 2025 – a virtual event where participants reimagine drug discovery using Boltzmann Labs’ Agentic AI-powered no-code discovery suite.
    This is your chance to pitch bold ideas, train on next-gen tools, and design drug candidates with the power of AI — all without writing a single line of code.
  </p>
</section>


<section style={styles.section}>
       <div style={{
    textAlign: 'center',
    marginBottom: '30px'
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      color: '#4f1985',
      marginBottom: '10px',
      fontWeight: '700',

    }}>
     What's unique about this Hackathon?
    </h2>
    <div style={{
      width: '60px',
      height: '4px',
      backgroundColor: '#4f1985',
      margin: '0 auto'
    }}></div>
  </div>
       <ul style={{
  listStyle: 'none',
  padding: 0,
  margin: 0,
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'left'
}}>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1.1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Hands-on access to Boltzmann Labs' proprietary Drug Discovery Suite.
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1.1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Training on the platform prior to the Hackathon
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1.1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Solve real-world problems in small molecule and protein design
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1.1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Mentorship & evaluation from domain experts
  </li>
</ul>

       
      
      </section>
      {/* Features Section */}
      <section style={{
  padding: '60px 20px',
  backgroundColor: '#f9f7fc',
  display: 'flex',
  justifyContent: 'center',
}}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    maxWidth: '1200px',
    justifyContent: 'center',
  }}>
    
    <div style={{
      flex: '1 1 250px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    }}>
      <DesignServicesOutlinedIcon fontSize="large" style={{ color: '#4f1985', fontSize: '48px', marginBottom: '16px' }} />
      <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>Design</h3>
      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>
        Build innovative solutions using cutting-edge technologies and frameworks.
      </p>
    </div>

    <div style={{
      flex: '1 1 250px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    }}>
      <SearchOutlinedIcon  fontSize="large" style={{ color: '#4f1985', fontSize: '48px', marginBottom: '16px' }} />
      <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>Discover</h3>
      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>
        Work with talented developers, designers, and entrepreneurs from diverse backgrounds.
      </p>
    </div>

    <div style={{
      flex: '1 1 250px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    }}>
      <TipsAndUpdatesOutlinedIcon fontSize="large" style={{ color: '#4f1985', fontSize: '48px', marginBottom: '16px' }} />
      <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>Disrupt</h3>
      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>
        Transform your ideas into working prototypes that solve real-world problems. 
        Experience the satisfaction of bringing your vision to life in just 48 hours.
      </p>
    </div>

   

  </div>
</section>
{/* Theory Containers Section */}
<section style={{
  padding: '60px 20px',
  backgroundColor: '#fff',
}}>
  <div style={{
    textAlign: 'center',
    marginBottom: '40px'
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      color: '#4f1985',
      marginBottom: '10px',
      fontWeight: '700',
    }}>
       Tracks You Can Choose From

    </h2>
    <div style={{
      width: '60px',
      height: '4px',
      backgroundColor: '#4f1985',
      margin: '0 auto'
    }}></div>
  </div>

  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    {/* Small Molecule Design Container */}
    <div style={{
      flex: '1 1 500px',
      backgroundColor: '#f9f7fc',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderLeft: '5px solid #4F1985'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div style={{
          backgroundColor: '  #4f1985',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '15px',
          fontWeight: '700'
        }}>1</div>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#4f1985',
          margin: 0
        }}>Small Molecule Design</h3>
      </div>
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#333',
        marginBottom: '20px'
      }}>
        
        Design or improve proteins with desirable properties using computational
tools. This track is ideal for those with a background in structural biology,
bioinformatics, or synthetic biology.
        
       
      </p>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '15px',
        // borderLeft: '3px solid #4f1985'
      }}>
        <h4 style={{
          color: '#4f1985',
          marginTop: 0,
          marginBottom: '10px'
        }}>Example challenges:</h4>
        <ul style={{
          paddingLeft: '20px',
          margin: 0
        }}>
          <li style={{ marginBottom: '8px' }}>Generate diverse analogs of a hit compound</li>
          <li style={{ marginBottom: '8px' }}>Design an ADMET-optimized inhibitor for a disease target</li>
        </ul>
      </div>
    </div>

    {/* Protein Engineering Container */}
    <div style={{
      flex: '1 1 500px',
      backgroundColor: '#f9f7fc',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderLeft: '5px solid #4f1985'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div style={{
          backgroundColor: '#4f1985',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '15px',
          fontWeight: '700'
        }}>2</div>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#4f1985',
          margin: 0
        }}>Protein Engineering</h3>
      </div>
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#333',
        marginBottom: '20px'
      }}>
       Design or improve proteins with desirable properties using computational
tools. This track is ideal for those with a background in structural biology,
bioinformatics, or synthetic biology.
      </p>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '15px',
        // borderLeft: '3px solid #4f1985'
      }}>
        <h4 style={{
          color: '#4f1985',
          marginTop: 0,
          marginBottom: '10px'
        }}>Example challenges:</h4>
        <ul style={{
          paddingLeft: '20px',
          margin: 0
        }}>
          <li style={{ marginBottom: '8px' }}>Design a novel binder or therapeutic protein</li>
          <li>Improve protein thermostability or solubility</li>
        </ul>
      </div>
    </div>
  </div>
</section>







{/* Prizes and Reward Section */}
<section style={{
  padding: '60px 20px',
  backgroundColor: '#f9f7fc',
}}>
  <div style={{
    textAlign: 'center',
    marginBottom: '40px',
  }}>
    <h2 style={{
      fontSize: '32px',
      color: '#4f1985',
      marginBottom: '10px',
      fontWeight: '700',
    }}>
      Prizes & Rewards
    </h2>
    <div style={{
      width: '60px',
      height: '4px',
      backgroundColor: '#4f1985',
      margin: '0 auto',
      borderRadius: '2px',
    }}></div>
  </div>

  {/* Top Row */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
  }}>
    <div style={{
      flex: '1 1 250px',
      maxWidth: '300px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      border: '1px solid #eee',
    }}>
      <EmojiEventsOutlinedIcon style={{ fontSize: '48px', color: '#4F1985', marginBottom: '16px' }} />
      <h3 style={{
        fontSize: '20px',
        fontWeight: '700',
        marginBottom: '8px',
            color: 'black',
      }}>Winners</h3>
      <p style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#4f1985',
        marginBottom: '12px',
      }}>₹10,000 
</p>
      <p style={{
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.5',
      }}>
        Cash prize for the top team
      </p>
    </div>

    <div style={{
      flex: '1 1 250px',
      maxWidth: '300px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      border: '1px solid #eee',
    }}>

      
      <SchoolOutlinedIcon style={{ fontSize: '48px', color: '#4F1985', marginBottom: '16px' }} />
      {/* <h3 style={{
        fontSize: '20px',
        fontWeight: '700',
        marginBottom: '8px',
            color: 'black',
      }}>Internship</h3> */}
      <p style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#4f1985',
        marginBottom: '12px',
      }}>Internship offers 
</p>
      <p style={{
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.5',
      }}>
        For student winners.
      </p>
    </div>

    <div style={{
      flex: '1 1 250px',
      maxWidth: '300px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      border: '1px solid #eee',
    }}>
      <VpnKeyOutlinedIcon style={{ fontSize: '48px', color: '#4F1985', marginBottom: '16px' }} />
      <h3 style={{
        fontSize: '20px',
        fontWeight: '700',
        marginBottom: '8px',
            color: 'black',
      }}></h3>
      <p style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#4f1985',
        marginBottom: '12px',
      }}>Platform access</p>
      <p style={{
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.5',
      }}>
       Agentic AI Discovery Suite

      </p>
    </div>
       <div style={{
      flex: '1 1 250px',
      maxWidth: '300px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      border: '1px solid #eee',
    }}>
      <WorkspacePremiumOutlinedIcon style={{ fontSize: '48px', color: '#4F1985', marginBottom: '16px' }} />
      <h3 style={{
        fontSize: '20px',
        fontWeight: '700',
        marginBottom: '8px',
            color: 'black',
      }}></h3>
      <p style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#4f1985',
        marginBottom: '12px',
      }}>Certificates</p>
      <p style={{
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.5',
      }}>
       For all participants.

      </p>
    </div>
  </div>

  {/* Bottom Row */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  }}>
    
  </div>
</section>

      {/* Schedule Section */}
 

<section style={{
  padding: '80px 20px',
  background: 'radial-gradient(circle at 20% 50%, rgba(121, 40, 202, 0.03) 0%, transparent 40%)',
 fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
}}>
   <div style={{
    textAlign: 'center',
    marginBottom: '40px',
  }}>
    <h2 style={{
      fontSize: '32px',
      color: '#4f1985',
      marginBottom: '10px',
      fontWeight: '700',
    }}>
      Event Schedule
    </h2>
    <div style={{
      width: '60px',
      height: '4px',
      backgroundColor: '#4f1985',
      margin: '0 auto',
      borderRadius: '2px',
    }}></div>
  </div>

  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    maxWidth: '1300px',
    margin: '0 auto'
  }}>

    {/* Premium Countdown Card */}
    <div style={{
      flex: '1 1 350px',
      maxWidth: '420px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 25px 50px -12px rgba(121, 40, 202, 0.15)',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      minHeight: '580px'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(121, 40, 202, 0.08) 0%, transparent 70%)',
        zIndex: -1
      }}></div>

      <div style={{
        background: 'linear-gradient(135deg, #7928CA, #5c1d99)',
        color: 'white',
        padding: '24px',
        fontSize: '1.3rem',
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: '0.5px'
      }}>
        Register
      </div>

      <div style={{ padding: '30px', textAlign: 'center' }}>
        <CountdownTimer targetDate="2025-07-11T23:59:59" />

        <div style={{
          background: 'rgba(121, 40, 202, 0.03)',
          borderRadius: '14px',
          padding: '20px',
          border: '1px dashed rgba(121, 40, 202, 0.2)',
          marginBottom: '30px'
        }}>
          <div style={{
            fontSize: '0.9rem',
            color: '#4a5568',
            fontWeight: '500',
            marginBottom: '6px'
          }}>Application Deadline</div>
          <div style={{
            fontSize: '1.3rem',
            color: '#7928CA',
            fontWeight: '700'
          }}>July 11, 2025</div>
        </div>

        <button style={{
          background: 'linear-gradient(135deg, #7928CA, #5c1d99)',
          color: 'white',
          border: 'none',
          padding: '16px 40px',
          borderRadius: '12px',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 10px 20px rgba(121, 40, 202, 0.2)'
        }}>
           <a 
  href="https://docs.google.com/forms/d/1GO1WUAtED0wnX4CBS_cy8w4ot-D23krd9cqw7G6ehUs/viewform?edit_requested=true"
  target='__blank' style={{textDecoration: 'none',color: 'white'}}
>
  Register Now
</a>

        </button>
      </div>
    </div>

    {/* Premium Training Card */}
<div style={{
  flex: '1 1 350px',
  maxWidth: '420px',
  background: 'white',
  borderRadius: '20px',
  boxShadow: '0 25px 50px -12px rgba(121, 40, 202, 0.15)',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  minHeight: '580px',
  perspective: '1000px' // Added for 3D effect
}}>
  <style>
    {`
      /* 3D Floating DNA */
      @keyframes dna-float {
        0%, 100% { 
          transform: translateZ(0) rotate(0deg); 
          filter: drop-shadow(0 5px 5px rgba(121, 40, 202, 0.3));
        }
        50% { 
          transform: translateZ(15px) rotate(5deg);
          filter: drop-shadow(0 15px 10px rgba(121, 40, 202, 0.4));
        }
      }
      .dna-3d {
        display: inline-block;
        transform-style: preserve-3d;
        animation: dna-float 4s ease-in-out infinite;
      }

      /* 3D Floating Flask */
      @keyframes flask-float {
        0%, 100% { 
          transform: translateZ(0) rotateX(0deg) rotateY(0deg);
          filter: drop-shadow(0 5px 5px rgba(121, 40, 202, 0.3));
        }
        25% { 
          transform: translateZ(10px) rotateX(5deg) rotateY(2deg);
        }
        50% { 
          transform: translateZ(15px) rotate(5deg);;
          filter: drop-shadow(0 15px 10px rgba(121, 40, 202, 0.4));
        }
        75% { 
          transform: translateZ(10px) rotateX(-3deg) rotateY(-2deg);
        }
      }
      .flask-3d {
        display: inline-block;
        transform-style: preserve-3d;
        animation: flask-float 5s ease-in-out infinite;
      }

      /* Bubble Physics */
      @keyframes bubble-pop {
        0% { 
          transform: translateZ(0) scale(0.3); 
          opacity: 0; 
        }
        20% { 
          opacity: 0.8; 
          filter: blur(0.5px);
        }
        100% { 
          transform: translateZ(20px) scale(1.2);
          opacity: 0;
        }
      }
      .flask-bubble {
        position: absolute;
        background: radial-gradient(circle, white 30%, rgba(255,255,255,0.3) 70%);
        border-radius: 50%;
        animation: bubble-pop 3s infinite;
        filter: blur(0.3px);
      }
    `}
  </style>

  <div style={headerStyle}>
  Train
</div>


  <div style={{ padding: '25px' ,textAlign: 'justify'}}>
    {[
      {
        title: 'Molecular Design',
        desc: ' Design new drug-like hit compounds or optimize known leads using virtual screening with QSPR and Pharmacophore Models',
        
        icon: '🧪',
        type: 'flask'
      },
      {
        title: 'Protein Engineering',
        desc: 'Engineer functional proteins using predictive AI tools — ideal for those in bioinformatics, structural biology, or synthetic biology.',
        
        icon: '🧬',
        type: 'dna'
      }
    ].map((session, idx) => (
      <div key={idx} style={{
        padding: '50px',
        marginBottom: '18px',
        borderRadius: '14px',
        background: '#f8f5ff',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            background: 'rgba(121, 40, 202, 0.1)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '15px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {session.type === 'flask' ? (
              <div className="flask-3d">
                <span style={{ fontSize: '1.5rem' }}>🧪</span>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flask-bubble" style={{
                    width: `${Math.random() * 4 + 3}px`,
                    height: `${Math.random() * 4 + 3}px`,
                    left: `${Math.random() * 20 + 5}px`,
                    bottom: '5px',
                    animationDelay: `${i * 0.6}s`,
                    opacity: 0
                  }}></div>
                ))}
              </div>
            ) : (
              <div className="dna-3d">
                <span style={{ fontSize: '1.5rem' }}>🧬</span>
              </div>
            )}
          </div>
          <h3 style={{
            fontSize: '1.2rem',
            color: '#1a0933',
            margin: 0,
            fontWeight: '700'
          }}>{session.title}</h3>
        </div>
        <p style={{
          fontSize: '0.95rem',
          color: '#4a5568',
          margin: '0 0 15px 0',
          lineHeight: '1.4',
          paddingLeft: '57px'
        }}>{session.desc}</p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '57px'
        }}>
          <span style={{
            fontSize: '0.9rem',
            color: '#7928CA',
            fontWeight: '600'
          }}>{session.date}</span>
        </div>
      </div>
    ))}
  </div>
</div>

    {/* Premium Schedule Card */}
    <div style={{
  flex: '1 1 350px',
  maxWidth: '420px',
  background: 'white',
  borderRadius: '20px',
  boxShadow: '0 25px 50px -12px rgba(121, 40, 202, 0.15)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  minHeight: '580px',
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 30px 60px -12px rgba(121, 40, 202, 0.2)'
  }
}}>
  {/* Header with gradient background */}
<div style={headerStyle}>
  Hack
</div>


{/* Timeline items */}
<div style={{ padding: '25px' }}>
  {[
    { 
      time: '15th July 2025', 
      title: 'Team Announcement',
      icon: '👥'
    },
    { 
      time: '17–18 July 2025', 
      title: 'Platform Training',
      icon: '🎓'
    },
    { 
      time: '21–25 July 2025', 
      title: 'Hackathon',
      icon: '💻'
    },
    { 
      time: '25th July 2025', 
      title: 'Final Submission',
      icon: '📝'
    },
    { 
      time: '30th July 2025', 
      title: 'Winner Announcement',
      icon: '🏆'
    }
  ].map((event, index) => (
    <div key={index} style={{
      padding: '20px',
      marginBottom: '15px',
      borderRadius: '14px',
      background: '#f8f5ff',
      transition: 'all 0.3s ease',
      borderLeft: '4px solid #7928CA',
      textDecoration: 'none'
    }}>
      <div style={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        textDecoration: 'none'
      }}>
        {/* Icon */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(121, 40, 202, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          flexShrink: 0,
          textDecoration: 'none'
        }}>
          {event.icon}
        </div>
        
        {/* Content */}
        <div style={{ flex: 1, textDecoration: 'none' }}>
          <div style={{
            color: '#7928CA',
            fontWeight: '700',
            fontSize: '0.9rem',
            marginBottom: '4px',
            textDecoration: 'none'
          }}>
            {event.time}
          </div>
          <h4 style={{
            margin: '0',
            fontSize: '1.1rem',
            color: '#1a0933',
            fontWeight: '700',
            textDecoration: 'none'
          }}>
            {event.title}
          </h4>
        </div>
      </div>
    </div>
  ))}
</div>


  {/* Decorative footer */}
  <div style={{
    height: '4px',
    // background: 'linear-gradient(90deg, #7928CA, #5c1d99)',
    marginTop: 'auto',
    textDecoration: 'none'
  }}></div>
</div>  
  </div>
</section>

{/* Sections*/}
<section style={{
  padding: '60px 20px',
  backgroundColor: '#f9f7fc',
  display: 'flex',
  justifyContent: 'center',
}}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    maxWidth: '1200px',
    justifyContent: 'center',
    textDecoration: 'none'
  }}>
    
    <div style={{
      flex: '1 1 250px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      textDecoration: 'none'
    }}>
      <SchoolOutlinedIcon fontSize="large" style={{ color: '#4f1985', fontSize: '48px', marginBottom: '16px' }} />
      <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>Who Can Participate?
</h3>
       <ul style={{
  listStyle: 'none',
  padding: 0,
  margin: 0,
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'left'
}}>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    PhD candidates & Postdocs
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Research scholars
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Master’s and advanced UG students
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Faculty & early-career professionals
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Max 3 members per team
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Open to participants from India, the USA, and beyond.
  </li>
</ul>


    </div>

    <div style={{
      flex: '1 1 250px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    }}>
     <AssignmentOutlinedIcon
  fontSize="large"
  style={{
    color: '#4f1985',
    fontSize: '48px',
    marginBottom: '16px'
  }}
/>

<h3
  style={{
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#4F1985'
  }}
>
  How to Participate?
</h3>

<p
  style={{
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.5',
    marginBottom: '20px',
    maxWidth: '700px'
  }}
>
  Work with talented developers, designers, and entrepreneurs from diverse backgrounds.
</p>

<ol
  style={{
    listStylePosition: 'inside',
    padding: 0,
    margin: 0,
    maxWidth: '700px',
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.7'
  }}
>
  <li style={{ marginBottom: '16px' }}>
    <span style={{ color: '#4f1985', fontWeight: '600' }}>Register & Submit Proposal:</span> Tell us your idea & how you’ll use the Boltzmann platform.
  </li>
  <li style={{ marginBottom: '16px' }}>
    <span style={{ color: '#4f1985', fontWeight: '600' }}>Get Shortlisted:</span> Ideas will be evaluated based on innovation, clarity & relevance.
  </li>
  <li style={{ marginBottom: '16px' }}>
    <span style={{ color: '#4f1985', fontWeight: '600' }}>Train with Us:</span> Attend 2 days of platform training (17–18 July).
  </li>
  <li style={{ marginBottom: '16px' }}>
    <span style={{ color: '#4f1985', fontWeight: '600' }}>Hack, Design & Submit:</span> You’ll have 5 days to build your solution using our Agentic AI tools.
  </li>
</ol>

    </div>

    <div style={{
      flex: '1 1 250px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    }}>
      <GavelOutlinedIcon fontSize="large" style={{ color: '#4f1985', fontSize: '48px', marginBottom: '16px' }} />
      <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>Judging Criteria</h3>
<ul style={{
  listStyle: 'none',
  padding: 0,
  margin: 0,
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'left'
}}>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Originality & Innovation
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Problem Clarity & Scientific Feasibility
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Relevance to Category
  </li>
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#333'
  }}>
    <span style={{ color: '#4f1985', marginRight: '10px', fontSize: '1.2rem' }}>✅</span>
    Potential Impact of the Solution
  </li>
</ul>

    </div>

   

  </div>
</section>  
{/* Registration Form */}
      <section style={{ ...styles.section1,marginTop: '4%'}}>
       
        <p style={styles.sectionText}>   Register now to secure your spot. Limited spaces available!</p>
         <div style={{
    textAlign: 'center',
    marginBottom: '30px'
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      color: '#4f1985',
      marginBottom: '10px',
      fontWeight: '700',

    }}>
     Ready to Join the Hackathon?

    </h2>
    <div style={{
      width: '60px',
      height: '4px',
      backgroundColor: '#4f1985',
      margin: '0 auto'
    }}></div>
  </div>
        
          
         <a href="https://docs.google.com/forms/d/1GO1WUAtED0wnX4CBS_cy8w4ot-D23krd9cqw7G6ehUs/viewform?edit_requested=true" target='__blank'> <button type="submit" style={styles.submitButton}>
            Register for the Hackathon
          </button>
        </a>
         <a href="https://www.linkedin.com/events/innovatebiodesignhackathon20257346481683258404865/theater/" target='__blank'> <button type="submit" style={styles.submitButton}>
            LinkedIn
          </button>
        </a>
      </section>


      {/* FAQ Section */}
      <section style={{ ...styles.section,marginTop: '-5%'}}  >
        <div style={{
    textAlign: 'center',
    marginBottom: '30px'
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      color: '#4f1985',
      marginBottom: '10px',
      fontWeight: '700',

    }}>
     Frequently Asked Questions
    </h2>
    <div style={{
      width: '60px',
      height: '4px',
      backgroundColor: '#4f1985',
      margin: '0 auto'
    }}></div>
  </div>
       <div style={styles.faqContainer}>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>Who can participate in the hackathon?</h3>
    <p style={styles.faqAnswer}>
      The hackathon is open to students (UG, PG, PhD), postdocs, faculty, early-career researchers, and professionals from academia or industry with an interest in drug discovery, molecular design, or protein engineering.
    </p>
  </div>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>Do I need prior coding experience?</h3>
    <p style={styles.faqAnswer}>
      No coding experience is required. The Boltzmann Labs Discovery Suite is no-code and powered by Agentic AI — you’ll get full training during the event.
    </p>
  </div>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>Can I register alone or do I need a team?</h3>
    <p style={styles.faqAnswer}>
      You can register individually or as a team (up to 3 members). If you’re solo and want teammates, we’ll help you connect with others during the onboarding phase.
    </p>
  </div>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>Is the event online or offline?</h3>
    <p style={styles.faqAnswer}>
      The entire event is virtual, so you can participate from anywhere in the world.
    </p>
  </div>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>What’s the cost of participation?</h3>
    <p style={styles.faqAnswer}>
      Participation is completely free.
    </p>
  </div>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>Will I receive training on the platform?</h3>
    <p style={styles.faqAnswer}>
      Yes! All shortlisted teams will receive hands-on training across two dedicated days (17–18 July 2025) before the hackathon begins.
    </p>
  </div>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>What kind of support is provided during the hackathon?</h3>
    <p style={styles.faqAnswer}>
      Mentors and technical experts will be available during the hackathon to guide you and answer any questions related to the platform or your challenge.
    </p>
  </div>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>What is Agentic AI?</h3>
    <p style={styles.faqAnswer}>
      Agentic AI is a multi-agent system developed by Boltzmann Labs that enables automated scientific ideation, hypothesis generation, and workflow execution. It reduces manual bottlenecks and accelerates innovation.
    </p>
  </div>
  <div style={styles.faqItem}>
    <h3 style={styles.faqQuestion}>Can international participants apply?</h3>
    <p style={styles.faqAnswer}>
      Yes! While some prizes are optimized for India-based participants, the hackathon welcomes entries from researchers and innovators globally, especially from India, the USA, and key research hubs.
    </p>
  </div>
</div>

      </section>
      {/* Who can participate?*/}


<section style={{
  padding: '60px 20px',
  backgroundColor: '#f9f7fc',
  display: 'flex',
  justifyContent: 'center',
}}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    maxWidth: '1200px',
    justifyContent: 'center',
  }}>
    
    <div style={{
      flex: '1 1 250px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    }}>
      
      <div style={{
  fontSize: '48px',
  marginBottom: '16px',
  color: '#4f1985'
}}>
  🧪
  
</div>

<h3 style={{
  fontSize: '20px',
  fontWeight: '600',
  marginBottom: '10px',
  color: '#333'
}}>
  Powered by Boltzmann Labs
</h3>

      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>
        The InnovateBio Hackathon 2025 runs on our Agentic AI Discovery Suite – designed to make end-to-end drug discovery faster, collaborative, and automated.
Explore the platform here: <a href="https://app.boltzmann.co" style={{color: 'blue'}}>https://app.boltzmann.co </a>

      </p>

    </div>

 <div
  style={{
    flex: '1 1 250px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '30px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  }}
>
  <div
    style={{
      fontSize: '48px',
      marginBottom: '16px',
      color: '#4f1985',
    }}
  >
    ❓
  </div>
  <h3
    style={{
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '12px',
      color: '#333',
    }}
  >
    Have Questions?
  </h3>

  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      marginTop: '20px',
      maxWidth: '280px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    {/* Email */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        color: '#555',
      }}
    >
      <EmailOutlinedIcon style={{ color: '#4f1985', marginRight: '10px', fontSize: '22px' }} />
      <a
        href="mailto:product@boltzmann.co"
        style={{
          color: '#4f1985',
          textDecoration: 'none',
          fontWeight: '500',
        }}
      >
        contact@boltzmann.co
      </a>
    </div>

    {/* Phone */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        color: '#555',
      }}
    >
      <CallOutlinedIcon style={{ color: '#4f1985', marginRight: '10px', fontSize: '22px' }} />
      <span style={{ color: '#333', fontWeight: '500' }}>
        +91-9498866488
      </span>
    </div>
  </div>
</div>


  </div>
</section>  

      
<Footer />
      
    </div>
  );
}
const headerStyle = {
  background: 'linear-gradient(135deg, #7928CA, #5c1d99)',
  color: 'white',
  padding: '24px',
  fontSize: '1.4rem',  // pick a middle ground between 1.3rem and 1.5rem
  fontWeight: '700',
  textAlign: 'center',
  letterSpacing: '0.5px',
  position: 'relative',
  overflow: 'hidden'
};

const styles = {
  container: {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  maxWidth: '100%',
  margin: '0 auto', // Changed from '20px auto' to remove top margin
  color: '#333',
  lineHeight: 1.6,
  overflowX: 'hidden', // Prevent horizontal overflow
  padding: 0, // Ensure no default padding
},
 hero: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  background: 'linear-gradient(135deg, #4F1985 0%,rgb(50, 55, 131) 100%)',
  color: 'white',
  textAlign: 'center',
  padding: '40px 20px',
  margin: 0,
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  position: 'relative',
  overflow: 'hidden',
  width: '100%', // Use viewport width
  left: '50%', // Center the element
  right: '50%', // Center the element
  marginLeft: '-50vw', // Offset for centering
  marginRight: '-50vw', // Offset for centering
},
  heroContent: {
    zIndex: 2,
    minWidth: '100%',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    perspective: '800px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.2,
    zIndex: 1,
    transition: "transform 0.6s ease",
    hover:{
      transform: 'rotateY(180deg)',
    }
  },
  mainTitle: {
    
  },
  subTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    fontWeight: '300',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dateLocation: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    fontWeight: '500',
  },
  ctaContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '30px',
  },
  primaryButton: {
    backgroundColor: '#fff',
    color: '#6e48aa',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    padding: '15px 30px',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
section: {
  padding: '80px 20px',
  margin: 0,
  width: '100%',
  boxSizing: 'border-box', // Include padding in width calculation
},
  
  section1: {
    position: 'relative',
    top: '-40px',
    padding: '80px 20px', // Standardize padding
  margin: 0,
  width: '100%',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#4F1985',
  },
  divider: {
    height: '4px',
    width: '80px',
    background: 'linear-gradient(90deg, #6e48aa, #9d50bb)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  sectionText: {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '800px',
    margin: '0 auto 30px',
    textAlign: 'center',
    lineHeight: 1.8,
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '40px',
    flexWrap: 'wrap',
  },
  statItem: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '12px',
    background: '#f7fafc',
    minWidth: '150px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  statNumber: {
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#6e48aa',
    marginBottom: '5px',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#718096',
  },
  featuresSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  featureBox: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    },
  },
  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#2d3748',
  },
  featureText: {
    color: '#4a5568',
    lineHeight: 1.7,
  },
  scheduleContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  scheduleDay: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  scheduleDayTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#6e48aa',
    paddingBottom: '10px',
    borderBottom: '1px solid #4F1985',
  },
  scheduleList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  scheduleItem: {
    display: 'flex',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px dashed #4F1985',
    ':last-child': {
      borderBottom: 'none',
      marginBottom: 0,
      paddingBottom: 0,
    },
  },
  scheduleTime: {
    fontWeight: '600',
    color: '#6e48aa',
    minWidth: '80px',
  },
  scheduleEvent: {
    flex: 1,
    color: '#4a5568',
  },
  prizesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  prizeCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    display: 'flex',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  prizePlace: {
    backgroundColor: '#6e48aa',
    color: 'white',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    fontWeight: '700',
    minWidth: '80px',
  },
  prizeContent: {
    padding: '20px',
    flex: 1,
  },
  prizeTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#2d3748',
  },
  prizeAmount: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#6e48aa',
    marginBottom: '10px',
  },
  prizeDescription: {
    color: '#4a5568',
    lineHeight: 1.6,
  },
  faqContainer: {
  maxWidth: '800px',
  margin: '40px auto 0',
  padding: '0 20px', // Add padding to prevent edge sticking
  boxSizing: 'border-box',
},
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '25px',
    marginBottom: '20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  faqQuestion: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '15px',
  },
  faqAnswer: {
    color: '#4a5568',
    lineHeight: 1.7,
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  formRow: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '0',
    },
  },
  formGroup: {
    flex: 1,
    marginBottom: '20px',
  },
  formLabel: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#2d3748',
  },
  formInput: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#6e48aa',
      boxShadow: '0 0 0 3px rgba(110, 72, 170, 0.1)',
    },
  },
  formSelect: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    appearance: 'none',
    // backgroundImage: 'url("292.4%22%3E%3Cpath%20fill%3D%22%236e48aa%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '12px auto',
    transition: 'border-color 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#6e48aa',
      boxShadow: '0 0 0 3px rgba(110, 72, 170, 0.1)',
    },
  },
  interestsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '10px',
    marginTop: '10px',
  },
  interestItem: {
    display: 'flex',
    alignItems: 'center',
  },
  checkboxInput: {
    marginRight: '8px',
    accentColor: '#6e48aa',
  },
  checkboxLabel: {
    fontSize: '0.95rem',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  formTextarea: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    minHeight: '120px',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#6e48aa',
      boxShadow: '0 0 0 3px rgba(110, 72, 170, 0.1)',
    },
  },
submitButton: {
  backgroundColor: '#4f1985',
  color: '#fff',
  border: 'none',
  padding: '12px 24px',
  fontSize: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  width: '90%',
  maxWidth: '320px',
  margin: '10px auto',
  display: 'block',
  textAlign: 'center',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  lineHeight: '1.2',
  '@media (max-width: 768px)': {
    width: '100%', // Full width on mobile
    padding: '12px', // Adjust padding
  }
},
 submitButton : {
  backgroundColor: '#4f1985',
  color: '#fff',
  border: 'none',
  padding: '12px 24px',
  fontSize: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  width: '90%',
  maxWidth: '320px',
  margin: '10px auto',
  display: 'block',
  textAlign: 'center',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  lineHeight: '1.2'
},

  link: {
    color: '#6e48aa',
    textDecoration: 'none',
    fontWeight: '500',
    ':hover': {
    
    },
  },
  sponsorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    marginTop: '40px',
  },
  sponsorLogo: {
    backgroundColor: '#f7fafc',
    padding: '20px 40px',
    borderRadius: '8px',
    fontWeight: '600',
    color: '#4a5568',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  footer: {
    backgroundColor: '#2d3748',
    color: 'white',
    padding: '60px 0 0',
    marginTop: '80px',
    borderRadius: '12px 12px 0 0',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap',
    gap: '40px',
  },
  footerSection: {
    flex: 1,
    minWidth: '200px',
  },
  footerTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#fff',
  },
  footerText: {
    color: '#cbd5e0',
    marginBottom: '10px',
    lineHeight: 1.6,
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
  },
  socialLink: {
    color: '#cbd5e0',
    textDecoration: 'none',
    ':hover': {
      color: '#fff',
      
    },
  },
  footerBottom: {
    textAlign: 'center',
    padding: '20px',
    borderTop: '1px solid #4a5568',
    marginTop: '40px',
    color: '#a0aec0',
    fontSize: '0.9rem',
  },
};

