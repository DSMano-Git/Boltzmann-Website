import React from 'react';

const MacBookComponent = ({ isOpen = false }) => {
  const styles = {
    container: {
      width: '600px',
      height: '450px',
      perspective: '1200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    laptop: {
      transformStyle: 'preserve-3d',
      position: 'relative',
      transform: 'rotateX(-20deg) rotateY(-30deg) rotateZ(10deg)',
      animation: 'float 2s ease-in-out forwards',
    },
    lid: {
      width: '376px',
      height: '250px',
      background: 'linear-gradient(145deg, #f0f0f0, #e8e8e8)',
      transformOrigin: 'bottom center',
      borderRadius: '16px 16px 4px 4px',
      transform: isOpen ? 'rotateX(65deg)' : 'rotateX(65deg)',
      position: 'relative',
      right: 1,
      zIndex: 2,
      boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
      overflow: 'hidden',
      border: '1px solid #d0d0d0',
      borderBottom: '2px solid #c0c0c0',
      transition: 'transform 1s ease-out',
      animation: 'lidSequence 2s ease-in-out forwards',
    },
    lidBack: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
      borderRadius: '16px 16px 4px 4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'visible',
      transform: 'rotateX(180deg)',
      opacity: 1,
      animation: 'lidBackFade 2s ease-in-out forwards',
    },
    appleLogo: {
      width: '20px',
      height: '80px',
      background: 'rgba(255,255,255,0.9)',
      WebkitMask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E") center/contain no-repeat`,
      mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E") center/contain no-repeat`,
      opacity: 1,
      animation: 'logoFade 2s ease-in-out forwards',
    },
    screen: {
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: '#0d0d0d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    screenBezel: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '8px solid #0d0d0d',
      borderRadius: '8px',
      pointerEvents: 'none',
      zIndex: 2,
      boxSizing: 'border-box',
    },
    notch: {
      position: 'absolute',
      top: '6px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      height: '10px',
      background: '#0d0d0d',
      borderRadius: '0 0 8px 8px',
      zIndex: 3,
    },
    screenContent: {
      width: 'calc(100% - 16px)',
      height: 'calc(100% - 16px)',
      background: '#fff',
      opacity: 0,
      animation: 'screenFadeIn 0.5s ease 2.2s forwards',
      position: 'absolute',
      top: '8px',
      left: '8px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: '2px',
    },
    browserHeader: {
      height: '24px',
      background: '#f5f5f7',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      borderBottom: '1px solid #e1e1e3',
    },
    browserControls: {
      display: 'flex',
      gap: '6px',
      marginRight: '12px',
    },
    controlBtn: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
    },
    close: { background: '#ff5f56' },
    minimize: { background: '#ffbd2e' },
    maximize: { background: '#27c93f' },
    searchBar: {
      flex: 1,
      height: '18px',
      background: '#fff',
      borderRadius: '4px',
      border: '1px solid #d6d6d8',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      fontSize: '8px',
      color: '#555',
    },
    browserContent: {
      flex: 1,
      background: '#fff',
      padding: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    dashboard: {
      display: 'flex',
      gap: '12px',
      height: '100%',
    },
    sidebar: {
      width: '70px',
      background: '#f8f9fa',
      borderRadius: '4px',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    sidebarItem: {
      padding: '6px',
      borderRadius: '3px',
      fontSize: '7px',
      color: '#333',
      cursor: 'pointer',
      textAlign: 'center',
    },
    sidebarItemActive: {
      background: '#e9f0ff',
      color: '#0066ff',
      fontWeight: '500',
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    contentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px',
      alignItems: 'center',
    },
    contentTitle: {
      fontSize: '10px',
      fontWeight: '600',
      color: '#333',
    },
    contentControls: {
      display: 'flex',
      gap: '6px',
    },
    controlBtnSm: {
      padding: '3px 6px',
      background: '#f5f5f7',
      border: '1px solid #d6d6d8',
      borderRadius: '3px',
      fontSize: '7px',
      color: '#333',
      cursor: 'pointer',
    },
    dataGrid: {
      flex: 1,
      background: '#fff',
      border: '1px solid #e1e1e3',
      borderRadius: '4px',
      overflow: 'hidden',
      fontSize: '8px',
    },
    gridHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      background: '#f8f9fa',
      padding: '6px 8px',
      borderBottom: '1px solid #e1e1e3',
      fontWeight: '600',
      color: '#555',
    },
    gridRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      padding: '6px 8px',
      borderBottom: '1px solid #f0f0f0',
      color: '#333',
    },
    base: {
      width: '352px',
      background: 'linear-gradient(145deg, #e8e8e8, #d0d0d0)',
      padding: '12px',
      borderRadius: '4px 4px 18px 18px',
      boxShadow: '0 16px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
      transform: 'translateY(-2px)',
      zIndex: 1,
      position: 'relative',
      border: '1px solid #c0c0c0',
      borderTop: '2px solid #b8b8b8',
    },
    keyboard: {
      background: 'linear-gradient(145deg, #f0f0f0, #e0e0e0)',
      padding: '12px',
      display: 'grid',
      gridTemplateColumns: 'repeat(15, 1fr)',
      gap: '3px',
      marginBottom: '12px',
      borderRadius: '6px',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
      border: '1px solid #d0d0d0',
    },
    key: {
      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
      height: '14px',
      borderRadius: '2px',
      boxShadow: 'inset 0 -1px 2px rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.3)',
      border: '1px solid #333',
    },
    spacebar: {
      gridColumn: 'span 7',
      borderRadius: '3px',
    },
    trackpad: {
      width: '90px',
      height: '55px',
      background: 'linear-gradient(145deg, #f0f0f0, #e0e0e0)',
      margin: '0 auto',
      borderRadius: '8px',
      border: '1px solid #c0c0c0',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
    },
    hinge: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '4px',
      background: 'linear-gradient(90deg, #a0a0a0, #c0c0c0, #a0a0a0)',
      zIndex: 3,
      borderRadius: '0 0 2px 2px',
    },
    glare: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.1), transparent)',
      animation: 'glareMove 1s ease-in-out 2.5s forwards',
      pointerEvents: 'none',
      zIndex: 4,
      borderRadius: '16px 16px 4px 4px',
    },
  };

const keyframes = `
@keyframes float {
  0% {
    transform: rotateX(10deg) rotateY(1deg) rotateZ(0deg) translateY(0px);
  }
  100% {
    transform: rotateX(65deg) rotateY(3deg) rotateZ(-15deg) translateY(-15px);
  }
}
  
@keyframes lidSequence {
  0% { 
    transform: rotateX(-140deg);
  }
  100% { 
    transform: rotateX(-70deg);
  }
}
  
@keyframes lidBackFade {
  0% { 
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% { 
    opacity: 0;
  }
}
  
@keyframes logoFade {
  0% { 
    opacity: 1;
    transform: scale(1);
  }
  70% {
    opacity: 1;
    transform: scale(1);
  }
  85% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  100% { 
    opacity: 0;
    transform: scale(0);
  }
}
  
@keyframes screenFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
  
@keyframes glareMove {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      
      <div style={styles.container}>
        <div style={styles.laptop}>
          <div style={styles.lid}>
            <div style={styles.hinge}></div>
            <div style={styles.lidBack}>
              <div style={styles.appleLogo}></div>
            </div>
            <div style={styles.screen}>
              <div style={styles.screenBezel}></div>
              <div style={styles.notch}></div>
              <div style={styles.glare}></div>
              <div style={styles.screenContent}>
                <div style={styles.browserHeader}>
                  <div style={styles.browserControls}>
                    <div style={{...styles.controlBtn, ...styles.close}}></div>
                    <div style={{...styles.controlBtn, ...styles.minimize}}></div>
                    <div style={{...styles.controlBtn, ...styles.maximize}}></div>
                  </div>
                  <div style={styles.searchBar}>https://dashboard.example.com</div>
                </div>
                <div style={styles.browserContent}>
                  <div style={styles.dashboard}>
                    <div style={styles.sidebar}>
                      <div style={{...styles.sidebarItem, ...styles.sidebarItemActive}}>Dashboard</div>
                      <div style={styles.sidebarItem}>Analytics</div>
                      <div style={styles.sidebarItem}>Reports</div>
                      <div style={styles.sidebarItem}>Users</div>
                      <div style={styles.sidebarItem}>Settings</div>
                    </div>
                    <div style={styles.mainContent}>
                      <div style={styles.contentHeader}>
                        <div style={styles.contentTitle}>Analytics Overview</div>
                        <div style={styles.contentControls}>
                          <div style={styles.controlBtnSm}>Export</div>
                          <div style={styles.controlBtnSm}>Filter</div>
                        </div>
                      </div>
                      <div style={styles.dataGrid}>
                        <div style={styles.gridHeader}>
                          <div>Metric</div>
                          <div>Value</div>
                          <div>Change</div>
                          <div>Status</div>
                        </div>
                        <div style={styles.gridRow}>
                          <div>Users</div>
                          <div>12,453</div>
                          <div>+12%</div>
                          <div>Active</div>
                        </div>
                        <div style={styles.gridRow}>
                          <div>Revenue</div>
                          <div>$45,231</div>
                          <div>+8%</div>
                          <div>Growing</div>
                        </div>
                        <div style={styles.gridRow}>
                          <div>Sessions</div>
                          <div>8,921</div>
                          <div>-2%</div>
                          <div>Stable</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.base}>
            <div style={styles.keyboard}>
              {/* Row 1 - Function keys */}
              {Array.from({ length: 15 }, (_, i) => (
                <div key={`row1-${i}`} style={styles.key}></div>
              ))}
              
              {/* Row 2 - Numbers */}
              {Array.from({ length: 15 }, (_, i) => (
                <div key={`row2-${i}`} style={styles.key}></div>
              ))}
              
              {/* Row 3 - QWERTY */}
              {Array.from({ length: 15 }, (_, i) => (
                <div key={`row3-${i}`} style={styles.key}></div>
              ))}
              
              {/* Row 4 - ASDF */}
              {Array.from({ length: 15 }, (_, i) => (
                <div key={`row4-${i}`} style={styles.key}></div>
              ))}
              
              {/* Row 5 - ZXCV with spacebar */}
              {Array.from({ length: 4 }, (_, i) => (
                <div key={`row5-${i}`} style={styles.key}></div>
              ))}
              <div style={{...styles.key, ...styles.spacebar}}></div>
              {Array.from({ length: 4 }, (_, i) => (
                <div key={`row5-end-${i}`} style={styles.key}></div>
              ))}
            </div>
            <div style={styles.trackpad}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookComponent;