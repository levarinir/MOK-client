import Head from "next/head";
import Header from "@/components/Header";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SubHeader } from "@/components/SubHeader";
import { HomePageCoursesListSection } from "@/components/HomePageCoursesSection";
import { HomePageHeroSection } from "@/components/HomePageHeroSection";
import { HomePageCoursesSelectionSection } from "@/components/HomePageCoursesSelectionSection";
import { HomePageHowToEarnPointsSection } from "@/components/HomePageHowToEarnPointsSection";
import { HomePageTestimonySection } from "@/components/HomePageTestimonySection";
import { Footer } from "@/components/Footer";
import { HomePageBottomHeroSection } from "@/components/HomePageBottomHeroSection";
import { HomePageRegisterAccountFormSection } from "@/components/HomePageRegisterAccountFormSection";

export default function HomePage() {
  const meta = (
    <Head>
      <title>Mok - בגרויות, מכינות אקדמיה</title>
    </Head>
  );

  const howItWorksSection = (
    <section className={styles.howItWorkSection}>
      <div className={styles.container}>
        <h2>איך MOK עובדת?</h2>
        <article>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <article className="">
            <h3>תתחילו מצפייה חינם בפרקים</h3>
            <p>
              אנחנו לא רוצים שתקנו חתול בשק, תבחרו כל קורס שמעניין אתכם ותוכלו
              לראות לגמרי בחינם מספר פרקים שבחרנו בשבילכם מבלי לרכוש את הקורס
              כדי שתתרשמו מאיכות המרצים ושיטת ההוראה שלנו
            </p>
            <div className={styles.buttons}>
              <Button>םיסרוקב ופצ</Button>
              <Button variant="outline">וחיוורתו וצילמת</Button>
            </div>
          </article>
        </article>
        <article>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <article className="">
            <h3>תתחילו מצפייה חינם בפרקים</h3>
            <p>
              אנחנו לא רוצים שתקנו חתול בשק, תבחרו כל קורס שמעניין אתכם ותוכלו
              לראות לגמרי בחינם מספר פרקים שבחרנו בשבילכם מבלי לרכוש את הקורס
              כדי שתתרשמו מאיכות המרצים ושיטת ההוראה שלנו
            </p>
            <div className={styles.buttons}>
              <Button>םיסרוקב ופצ</Button>
              <Button variant="outline">וחיוורתו וצילמת</Button>
            </div>
          </article>
        </article>
      </div>
    </section>
  );

  return (
    <main>
      {meta}
      <Header />
      <SubHeader />
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
      {howItWorksSection}
      <HomePageBottomHeroSection />
      <HomePageRegisterAccountFormSection />
      <Footer />
    </main>
  );
}
