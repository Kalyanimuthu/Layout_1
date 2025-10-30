import FreeTrialBanner from '../components/FreeTrialBanner';
import Login from '../components/Login';


function HomePage() {
  return (
    <>
    <div className="min-h-screen font-inter">
      <FreeTrialBanner />
      
      <Login />
    </div>
    </>
  );
}

export default HomePage;
