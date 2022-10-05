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

export default function HomePage() {
  const meta = (
    <Head>
      <title>Mok - בגרויות, מכינות אקדמיה</title>
    </Head>
  );

  const courseTypesSection = (
    <section className={styles.courseTypesSection}>
      <div className={styles.container}>
        <h2>מבחר ענק של קורסים אונליין</h2>
        <p>דומלל וצרתש םוחת ורחבת</p>
        <div className={styles.tabsOuter}>
          <div className={styles.tabs}>
            <div className={styles.tabItem}>
              <button>תואר ראשון</button>
              <div className={styles.tabIsSelectedIndicator}></div>
            </div>
            <div className={styles.tabItem}>
              <button>מכינות קדם אקדמיות</button>
            </div>
            <div className={styles.tabItem}>
              <button> הקיטמתמב תויורגב</button>
            </div>
          </div>
        </div>
        <div className={styles.contentOuter}>
          <div className={styles.contentInner}>
            <article>
              <p className={styles.title}>קורסים של תואר ראשון</p>
              <p className={styles.description}>
                בחלק של מכינות אקדמיות באתר MOK תמצאו קורסים החופפים לקורסי ליבה
                הנלמדים בתואר הראשון למדעים מדוייקים או תארי הנדסה וכוללים
                קורסים כמו אלגברה 1מ, אלגברה לינארית, חדוא 1, חדוא 2, אינפי
                ועוד. הקורסים נועדו כדי להקל על סטודנטים לתואר ראשון להנגיש
                תכנים הנלמדים באוניברסיטאות ומכללות בצורה של שיעורים מוקלטים,
                מתוייגים ומסודרים אשר מועברים בהתאם לתכניות לימוד של מוסדות
                להשכלה גבוהה ונלמדים ע”י מרצים בכירים בתעשייה כמו טכניון
                ואוניברסיטת בן גוריון.
              </p>
            </article>
          </div>
        </div>
        <div className={styles.courses}>
          <article>
            <header>
              <p>טכניון</p>
            </header>
            <main>
              <ul>
                <li>מכינת מתמטיקה - תואר שני</li>
              </ul>
            </main>
            <Button>צפייה בכל הקורסים</Button>
          </article>
        </div>
      </div>
    </section>
  );

  const testimonySection = (
    <section className={styles.testimonySection}>
      <div className={styles.container}>
        <img src="/assets/index-page/testimony-image.png" alt="" />
        <div className={styles.testimonyContent}>
          <p className={styles.testimonyMessage}>
            שדוח ךותב ךיא םיהדמ הז רשאמ רתוי דומלל יתחלצה הדות .רטסמסה לכב יתדמל
            הרזעה לע םכל הבר
          </p>
          <p className={styles.testimonyName}>רותם ניסים</p>
          <p> הקיטמתמ תניכמב טנדוטס</p>
        </div>
      </div>
    </section>
  );

  const howToEarnPointsSection = (
    <section className={styles.howToEarnPointsSection}>
      <div className={styles.container}>
        <h2>תהפכו להיות MOK-ים ותרוויחו</h2>
        <article>
          <h3>גלו איך צוברים נקודות למימוש </h3>
          <p>
            תמליצו לחברים על הקורסים שאהבתם ותוכלו לצבור ולממש את הסכום לקניית
            כל קורס שתבחרו באתר
          </p>
        </article>
      </div>
    </section>
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

  const footerSection = (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <article>
            <p>5 תודיחי</p>
            <ul>
              <li>
                <Link href="#">
                  <a>806 ןולאש</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>806 ןולאש</a>
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <p>5 תודיחי</p>
            <ul>
              <li>
                <Link href="#">
                  <a>806 ןולאש</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>806 ןולאש</a>
                </Link>
              </li>
            </ul>
          </article>
        </div>
        <div className={styles.copyright}>
          <p> הימדקאו תוניכמ ,תויורגבל הנכה - MOK © </p>
        </div>
      </div>
    </footer>
  );

  return (
    <main>
      {meta}
      <Header />
      <SubHeader />
      <HomePageHeroSection />
      {courseTypesSection}
      {howToEarnPointsSection}

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

      {testimonySection}
      {howItWorksSection}
      {bottomHeroSection}
      {registerAccountFormSection}
      {footerSection}
    </main>
  );
}
