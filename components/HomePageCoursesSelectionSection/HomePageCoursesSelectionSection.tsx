import { Button } from "../Button";
import styles from "./HomePageCoursesSelectionSection.module.scss"

export default function HomePageCoursesSelectionSection() {
  return (
    <section className={styles.homePageCoursesSelectionSection}>
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
}