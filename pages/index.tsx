import Head from 'next/head';

import { HomePageCoursesListSection } from '@/components/HomePageCoursesSection';
import { HomePageHeroSection } from '@/components/HomePageHeroSection';
import { HomePageCoursesSelectionSection } from '@/components/HomePageCoursesSelectionSection';
import { HomePageHowToEarnPointsSection } from '@/components/HomePageHowToEarnPointsSection';
import { HomePageTestimonySection } from '@/components/HomePageTestimonySection';
import { HomePageBottomHeroSection } from '@/components/HomePageBottomHeroSection';
import { HomePageRegisterAccountFormSection } from '@/components/HomePageRegisterAccountFormSection';
import { HomePageHowItWorksSection } from '@/components/HomePageHowItWorksSection';
import Layout from '../components/Layout';

export default function HomePage() {
  const meta = (
    <Head>
      <title>Mok - בגרויות, מכינות אקדמיה</title>
    </Head>
  );

  return (
    <Layout>
      {meta}
      <main>
        <HomePageHeroSection />
        <HomePageCoursesSelectionSection />
        <HomePageHowToEarnPointsSection />
        <HomePageCoursesListSection
          sectionTitle="קורסי בגרויות במתמטיקה"
          seeMoreLinkText="צפייה בכל הקורסים"
          seeMoreLinkHref="#"
          courseSectionIndex={0}
        />
        <HomePageCoursesListSection
          sectionTitle="קורסי מכינות קדם אקדמיות"
          seeMoreLinkText="צפייה בכל הקורסים"
          seeMoreLinkHref="#"
          courseSectionIndex={1}
        />
        <HomePageCoursesListSection
          sectionTitle="קורסי תואר ראשון"
          seeMoreLinkText="צפייה בכל הקורסים"
          seeMoreLinkHref="#"
          courseSectionIndex={2}
        />
        <HomePageTestimonySection />
        <HomePageHowItWorksSection />
        <HomePageBottomHeroSection />
        <HomePageRegisterAccountFormSection />
      </main>
    </Layout>
  );
}
