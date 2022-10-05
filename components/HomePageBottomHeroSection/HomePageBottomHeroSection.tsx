import { Button } from "../Button";
import styles from "./HomePageBottomHeroSection.module.scss"

export default function HomePageBottomHeroSection() {
  return (
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
}