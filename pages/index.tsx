import Head from "next/head";
import Header from "@/components/Header";
import styles from "./index.module.scss";
import { ChevronDownIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

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
      <h1 className={styles.heroHeadline}>
        קורסים אונליין לבגרויות, מכינות קדם אקדמיות ותואר ראשון
      </h1>
      <p className={styles.heroTextSmall}>
        לימודים לתלמידי בית ספר, משלימי ומשפרי בגרויות וחיילים משוחררים בכל רמות
        הלימוד במתמטיקה ופיסיקה. לימודי מכינות קדם אקדמיות לשיפור תנאי קבלה
        לתואר ראשון.
      </p>

      <div className={styles.heroCta}>
        <button className={styles.heroCtaButton}>יש לי שאלה!</button>

        <div className={styles.heroCtaProfilePictures}>
          {/* TODO: replace placeholder image with actual profile pictures */}
          <img src="https://thispersondoesnotexist.com/image" alt="" />
          <img src="https://thispersondoesnotexist.com/image" alt="" />
          <img src="https://thispersondoesnotexist.com/image" alt="" />
          <img src="https://thispersondoesnotexist.com/image" alt="" />
        </div>

        <p>םיעובק םישמתשמ +45k</p>
      </div>

      <div className={styles.heroImage}>
        <Image
          width={300}
          height={300}
          src="/assets/index-page/hero-image.png"
          alt="Student"
        />
      </div>
    </section>
  );

  return (
    <div>
      {meta}
      <Header />
      {subHeader}
      {hero}

      {/* <section className={styles.onlineCoursesSelectionSection}>
        <h2 className="">מבחר ענק של קורסים אונליין</h2>

      </section> */}

      <section className={styles.coursesListSection}>
        <h2>קורסי בגרות במתמטיקה</h2>
        <Link href="#">
          <a className={styles.seeMoreLink}>
            <span>צפייה בכל הקורסים</span>
            <ArrowLeftIcon />
          </a>
        </Link>

        
      </section>
    </div>
  );
}
