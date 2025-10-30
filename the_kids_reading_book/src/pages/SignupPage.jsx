import FreeTrialBanner from '../components/FreeTrialBanner';
import Signup from '../components/Signup';


function HomePage() {
  return (
    <>
    <div className="min-h-screen font-inter">
      <FreeTrialBanner />
      <Signup />
    </div>
    </>
  );
}

export default HomePage;
