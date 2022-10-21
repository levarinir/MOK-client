import styles from './HomePageTestimonySection.module.scss';

export default function HomePageTestimonySection() {
  return (
    <section className={styles.testimonySection}>
      <div className={styles.container}>
        <img src="/assets/index-page/testimony-image.png" alt="" />
        <div className={styles.testimonyContent}>
          <p className={styles.testimonyMessage}>
            זה מדהים איך בתוך חודש הצלחתי
          </p>
          <p className={styles.testimonyMessage}>
            ללמוד יותר מאשר למדתי בכל הסמסטר
          </p>
          <p className={styles.testimonyMessage}>תודה רבה לכם על העזרה</p>
          <p className={styles.testimonyName}>רותם ניסים</p>
          <p className={styles.testimonyWhere}>סטודנט למכינת מתמטיקה בטכניון</p>
        </div>
      </div>
    </section>
  );
}
