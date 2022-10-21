import { Button } from '../Button';
import styles from './HomePageBottomHeroSection.module.scss';

export default function HomePageBottomHeroSection() {
  return (
    <section className={styles.bottomHeroSection}>
      <div className={styles.container}>
        <article>
          <h2>ממליצים לחברים ומרווחים ב- MOK</h2>
          <p>
            כל כך פשוט וקל! ממליצים לחברים ואם הם קונים אתם מרוויחים. תוכלו
            להשתמש בכסף שצברתם לקניית כל קורס באתר!
          </p>

          <Button>תתחילו להרוויח עכשיו</Button>
        </article>
        <img
          src="/assets/index-page/bottom-hero-image.png"
          alt="student"
          className={styles.bottomHeroImage}
        />
      </div>
    </section>
  );
}
