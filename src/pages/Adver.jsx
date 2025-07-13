import boltbuzz from '../assets/boltz_buzz_logo.png'


const Adver =()=>{


   const Tsytle={display:'flex', padding:'10px', justifyContent:'space-between', flexDirection:'column', alignItems:'center'}
    const Pstyle={
        color:'black',
        fontWeight:'bold',
        fontSize:'16px',
        lineHeight:'30px'
    }
    return (
        <div style={{textAlign:'center',display:'flex',marginBottom:'80px', flexWrap:'wrap',justifyContent:'center'}}>
        <img src={boltbuzz} style={window.innerWidth>1200 ? {width:'30%', maxWidth:'30%', height:'100%',marginLeft:'10%', borderRadius:'10px'}: {width:'100%',height:'auto',borderRadius:'10px'}} alt="Boltz Buzz"/>
        <div style={window.innerWidth>600 ? {...Tsytle,maxWidth:'40%'}:{...Tsytle,maxWidth:'100%'}} >
          <p style={Pstyle}>Boltz Buzz is your monthly dose of insights into the latest happenings of drug discovery world 
          </p>
          <button style={{marginBottom:'10px'}}  className="Buttn" onClick={()=>{window.location.href ='https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7119930896895406080'}}>
            SUBSCRIBE NOW
          </button>
          <p style={Pstyle}>
            Get the latest updates on our newest innovations
          </p>
        </div>
    </div>
    )

}
export default Adver;
// This component is used to display the advertisement for Boltz Buzz, a monthly newsletter on drug