import Image from 'next/image';
import { Button } from '../Button';
import styles from './HomePageHeroSection.module.scss';

export default function HomePageHeroSection() {
  return (
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
            <p>45k+ משתמשים רשומים</p>
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
}
