import BookChatHero from '../components/BookChatHero';
import StorytimePromo from '../components/StorytimePromo';
import FamilyPlanPromo from '../components/FamilyPlanPromo';
import HowItWorks from '../components/HowItWorks';
import LibraryPromo from '../components/LibraryHero';
import TestimonialSection from '../components/TestimonialSection';


function HomePage() {
  return (
    <>
    <div className="min-h-screen font-inter">
      <BookChatHero />
      <StorytimePromo />
      <FamilyPlanPromo />
      <HowItWorks />
      <LibraryPromo />
      <TestimonialSection />
    </div>
    </>
  );
}

export default HomePage;
