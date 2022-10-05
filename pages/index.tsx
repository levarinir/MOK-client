import Head from "next/head";
import Header from "@/components/Header";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { UserIcon } from "@heroicons/react/24/outline";
import { SubHeader } from "@/components/SubHeader";
import { HomePageCoursesListSection } from "@/components/HomePageCoursesSection";
import { HomePageHeroSection } from "@/components/HomePageHeroSection";
import { HomePageCoursesSelectionSection } from "@/components/HomePageCoursesSelectionSection";
import { HomePageHowToEarnPointsSection } from "@/components/HomePageHowToEarnPointsSection";
import { HomePageTestimonySection } from "@/components/HomePageTestimonySection";
import Footer from "@/components/Footer/Footer";

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

  const bottomHeroSection = (
    <section className={styles.bottomHeroSection}>
      <div className={styles.container}>
        <article>
          <h2>םירבחל םיצילממ MOK-ב םיחוורמו</h2>
          <p>
            ,םינוק םה םאו םירבחל םיצילממ !לקו טושפ ךכ לכ םתרבצש ףסכב שמתשהל
            ולכות םיחוורמ םתא !רתאב סרוק לכ תיינקל
          </p>
          <Button>וישכע חיוורהל וליחתת</Button>
        </article>
        <img
          src="/assets/index-page/bottom-hero-image.png"
          alt="student"
          className={styles.bottomHeroImage}
        />
      </div>
    </section>
  );

  const registerAccountFormSection = (
    <section className={styles.registerAccountFormSection}>
      <div className={styles.container}>
        <h2>רשק תריצי</h2>
        <form>
          <Input leadingElement={<UserIcon />} placeholder="אלמ םש" />
          <Input leadingElement={<UserIcon />} placeholder="ל”אוד" />
          <Input leadingElement={<UserIcon />} placeholder="ןופלט" />
          <Button>חלש</Button>
        </form>
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
      {bottomHeroSection}
      {registerAccountFormSection}
      <Footer />
    </main>
  );
}
