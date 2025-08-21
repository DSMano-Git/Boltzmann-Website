import React from 'react';
import { Menu, X } from 'lucide-react';
export default function Oursuiteheader() {
const [isMenuOpen, setIsMenuOpen] = React.useState(false);
return (
<div style={{
minHeight: '100vh',
fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
 }}>
{/* Main Content */}
<main>
{/* Hero Section */}
<section style={{
background: 'linear-gradient(135deg, #d946ef 0%, #8b5cf6 25%, #06b6d4 75%, #0891b2 100%)',
position: 'relative',
overflow: 'hidden'
 }}>
{/* Curved bottom */}
<div style={{
position: 'absolute',
bottom: '-2px',
left: 0,
right: 0,
height: '100px',
background: 'white',
borderRadius: '50% 50% 0 0 / 100% 100% 0 0'
 }} />
<div style={{
maxWidth: '1200px',
margin: '0 auto',
padding: '6rem 2rem 8rem',
textAlign: 'center',
position: 'relative',
zIndex: 10
 }}>

<h1 style={{
color: 'white',
fontSize: 'clamp(2.1rem, 6vw, 5rem)',
fontWeight: '300',
lineHeight: '1.1',
margin: 0,
letterSpacing: '-0.02em'
 }}>
 Boltzmann AI Discovery Suite
</h1>
<p style={{color: 'white', fontSize: '1.7rem'}}
>Discover Smarter. Design Faster. Deliver Breakthroughs.
</p>
</div>
</section>
{/* Value Proposition Section */}
<section style={{
background: 'white',
padding: '6rem 2rem',
textAlign: 'center'
 }}>
<div style={{
maxWidth: '1000px',
margin: '0 auto'
 }}>
<h2 style={{
color: '#1f2937',
fontSize: 'clamp(2rem, 5vw, 3.5rem)',
fontWeight: '300',
lineHeight: '1.2',
margin: 0,
letterSpacing: '-0.01em'
 }}>
 What if your team could reclaim
{' '}
<span style={{
color: '#d946ef',
fontWeight: '600'
 }}>25%</span>
<br />
 of their discovery time every week?
</h2>
<p style={{
color: '#6b7280',
fontSize: '1.25rem',
lineHeight: '1.6',
marginTop: '3rem',
marginBottom: 0,
fontWeight: '400',
letterSpacing: '0.01em'
}}>Your AI Discovery Suite empowers R&D to go from idea to molecule, faster than ever—delivering insight, innovation, and impact at every stage.
</p>
</div>
</section>
</main>
</div>
 );
}