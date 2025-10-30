import GettingStarted from '../components/GettingStarted';
import GuestReaderPromo from '../components/GuestReaderPromo';
import RoleOptions from '../components/RoleOptions';

function SchoolsPage() {
  return (
    <>
    <div className="min-h-screen font-inter">
      <GuestReaderPromo />
      <RoleOptions />
      <GettingStarted />
    </div>
    </>
  );
}

export default SchoolsPage;
