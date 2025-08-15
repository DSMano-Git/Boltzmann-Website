import YearlyTimeline from '../components/TimelineJourneyNew';
import Aboutsection from '../components/AboutHeader';
import VisionMission from '../components/VisionMission';
import LogoCarousel from '../components/AboutImages';
import BusinessGuidance from '../components/AboutCards';
import  MissionSection from '../components/AboutInfo';
import  CultureCard from '../components/AboutInfocards';
import LeadershipSection from '../components/AboutTeam';
import Footer from '../components/Footer';
export default function About(){
return(
<>

    <Aboutsection
      logo="logo.png"
      title="We're Boltzmann"
      subtitle="About us"
      description="Since 2019, our AI-powered discovery platform has been transforming the way researchers, scientists, and innovators work—enabling faster breakthroughs, reducing costs, and driving sustainable innovation."
    />
    <MissionSection />
<BusinessGuidance />
 <VisionMission />
 <LogoCarousel />
<YearlyTimeline />
<CultureCard />
<LeadershipSection />
<Footer />
</>


)

}