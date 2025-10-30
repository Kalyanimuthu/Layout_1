import React from 'react';

import GoldPromo from '../components/GoldPromo';
import PlanComparison from '../components/PlanComparison';
import GoldPlanBenefits from '../components/GoldPlanBenefits';
import MembershipFAQ from '../components/MembershipFAQ';


function LibraryPage() {
  return (
    <div className="min-h-screen font-inter">
        <GoldPromo />
        <PlanComparison />
        <GoldPlanBenefits />
        <MembershipFAQ />
    </div>
  );
}

export default LibraryPage;
