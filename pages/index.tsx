import Head from "next/head";
import Header from "@/components/Header";
import styles from "./index.module.scss";
import { ChevronDownIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import { Button } from "@/components/Button";

export interface CoursesSectionProps {
  courses: CourseCardProps[];
  sectionTitle: string;
  seeMoreLinkHref: string;
  seeMoreLinkText: string;
}

function CoursesSection(props: CoursesSectionProps) {
  return (
    <section className={styles.coursesListSection}>
      <div className={styles.container}>
        <section className={styles.coursesListSectionHeader}>
          <h2>{props.sectionTitle}</h2>
          <Link href={props.seeMoreLinkHref}>
            <a className={styles.seeMoreLink}>
              <span>{props.seeMoreLinkText}</span>
              <ArrowLeftIcon />
            </a>
          </Link>
        </section>
        <div className={styles.cardList}>
          {props.courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const meta = (
    <Head>
      <title>Mok - בגרויות, מכינות אקדמיה</title>
    </Head>
  );

  const subHeader = (
    <section className={styles.subheader}>
      <button className={styles.subheaderMenuItem}>
        <ChevronDownIcon className={styles.subheaderMenuItemIcon} />
        <span>בחירת תחום לימוד</span>
      </button>
    </section>
  );

  const hero = (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroTexts}>
          <h1 className={styles.heroHeadline}>
            קורסים אונליין לבגרויות, מכינות קדם אקדמיות ותואר ראשון
          </h1>
          <p className={styles.heroTextSmall}>
            לימודים לתלמידי בית ספר, משלימי ומשפרי בגרויות וחיילים משוחררים בכל
            רמות הלימוד במתמטיקה ופיסיקה. לימודי מכינות קדם אקדמיות לשיפור תנאי
            קבלה לתואר ראשון.
          </p>
          <Button>יש לי שאלה!</Button>
          <div className={styles.heroCta}>
            <div className={styles.heroCtaProfilePictures}>
              {/* TODO: replace placeholder image with actual profile pictures */}
              <img src="https://thispersondoesnotexist.com/image" alt="" />
              <img src="https://thispersondoesnotexist.com/image" alt="" />
              <img src="https://thispersondoesnotexist.com/image" alt="" />
              <img src="https://thispersondoesnotexist.com/image" alt="" />
            </div>
            <p>םיעובק םישמתשמ +45k</p>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            width={500}
            height={500}
            src="/assets/index-page/hero-image.png"
            alt="Student"
          />
        </div>
      </div>
    </section>
  );

  const testimonySection = (
    <section className={styles.testimonySection}>
      <div className={styles.container}>
        <img src="/assets/index-page/testimony-image.png" alt="" />
        <p className={styles.testimonyMessage}>
          שדוח ךותב ךיא םיהדמ הז רשאמ רתוי דומלל יתחלצה הדות .רטסמסה לכב יתדמל
          הרזעה לע םכל הבר
        </p>
        <p>רותם ניסים</p>
        <p> הקיטמתמ תניכמב טנדוטס</p>
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

  return (
    <div>
      {meta}
      <Header />
      {subHeader}
      {hero}

      <CoursesSection
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

      <CoursesSection
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

      <CoursesSection
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
    </div>
  );
}
