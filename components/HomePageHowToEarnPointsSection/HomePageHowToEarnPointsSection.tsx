import styles from "./HomePageHowToEarnPointsSection.module.scss"

export default function HomePageHowToEarnPointsSection() {
  return (
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
}