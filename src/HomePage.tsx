import React from 'react';
import { SiteFrame } from './components/layout/SiteFrame';
import { Hero } from './components/hero/Hero';
import { ReassuranceStrip } from './components/sections/ReassuranceStrip';
import { UserProblemsSection } from './components/sections/UserProblemsSection';
import { WhatAreAlignersSection } from './components/sections/WhatAreAlignersSection';
import { SuitabilitySection } from './components/sections/SuitabilitySection';
import { TreatmentJourneySection } from './components/sections/TreatmentJourneySection';
import { AdultOrthodonticsSection } from './components/sections/AdultOrthodonticsSection';
import { DailyLifeSection } from './components/sections/DailyLifeSection';
import { PriceExplanationSection } from './components/sections/PriceExplanationSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { RetentionSection } from './components/sections/RetentionSection';
import { PractitionerSection } from './components/sections/PractitionerSection';
import { LocalSeteSection } from './components/sections/LocalSeteSection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <SiteFrame pathname="/">
      <>
        <Hero />
        <ReassuranceStrip />
        <UserProblemsSection />
        <WhatAreAlignersSection />
        <SuitabilitySection />
        <TreatmentJourneySection />
        <AdultOrthodonticsSection />
        <DailyLifeSection />
        <PriceExplanationSection />
        <ComparisonSection />
        <RetentionSection />
        <PractitionerSection />
        <LocalSeteSection />
        <FAQSection />
        <FinalCTASection />
      </>
    </SiteFrame>
  );
}
