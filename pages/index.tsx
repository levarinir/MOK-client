import Head from "next/head";
import Header from "@/components/Header";
import { SubHeader } from "@/components/SubHeader";
import { HomePageCoursesListSection } from "@/components/HomePageCoursesSection";
import { HomePageHeroSection } from "@/components/HomePageHeroSection";
import { HomePageCoursesSelectionSection } from "@/components/HomePageCoursesSelectionSection";
import { HomePageHowToEarnPointsSection } from "@/components/HomePageHowToEarnPointsSection";
import { HomePageTestimonySection } from "@/components/HomePageTestimonySection";
import { Footer } from "@/components/Footer";
import { HomePageBottomHeroSection } from "@/components/HomePageBottomHeroSection";
import { HomePageRegisterAccountFormSection } from "@/components/HomePageRegisterAccountFormSection";
import { HomePageHowItWorksSection } from "@/components/HomePageHowItWorksSection";

export default function HomePage() {
  const meta = (
    <Head>
      <title>Mok - בגרויות, מכינות אקדמיה</title>
    </Head>
  );

  return (
    <>
      {meta}
      <Header />
      <SubHeader />
      <main>
        <HomePageHeroSection />
        <HomePageCoursesSelectionSection />
        <HomePageHowToEarnPointsSection />
        <HomePageCoursesListSection
          sectionTitle="קורסי תואר ראשון"
          seeMoreLinkText="צפייה בכל הקורסים"
          seeMoreLinkHref="#"
          courses={Array(4).fill({
            cardImageSrc: "https://picsum.photos/id/237/200/300",
            title: "קורס לשאלון 482 (805)",
            href: "#",
            description: "מרצה הקורס: ארז כהן",
            duration: 8400,
            isFavorited: false,
            price: 48,
            rating: 0.82,
            viewerCount: 1000,
          })}
        />
        <HomePageCoursesListSection
          sectionTitle="קורסי מכינות קדם אקדמיות"
          seeMoreLinkText="צפייה בכל הקורסים"
          seeMoreLinkHref="#"
          courses={Array(4).fill({
            cardImageSrc: "https://picsum.photos/id/237/200/300",
            title: "קורס לשאלון 482 (805)",
            href: "#",
            description: "מרצה הקורס: ארז כהן",
            duration: 8400,
            isFavorited: false,
            price: 48,
            rating: 0.82,
            viewerCount: 1000,
          })}
        />
        <HomePageCoursesListSection
          sectionTitle="קורסי תואר ראשון"
          seeMoreLinkText="צפייה בכל הקורסים"
          seeMoreLinkHref="#"
          courses={Array(4).fill({
            cardImageSrc: "https://picsum.photos/id/237/200/300",
            title: "קורס לשאלון 482 (805)",
            href: "#",
            description: "מרצה הקורס: ארז כהן",
            duration: 8400,
            isFavorited: false,
            price: 48,
            rating: 0.82,
            viewerCount: 1000,
          })}
        />
        <HomePageTestimonySection />
        <HomePageHowItWorksSection />
        <HomePageBottomHeroSection />
        <HomePageRegisterAccountFormSection />
      </main>
      <Footer />
    </>
  );
}
