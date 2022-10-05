import styles from "./HomePageTestimonySection.module.scss"

export default function HomePageTestimonySection() {
  return (
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
}