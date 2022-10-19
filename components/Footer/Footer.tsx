import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <article>
            <p>5  יחידות</p>
            <ul>
              <li>
                <Link href="#">
                  <a>שאלון 806</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>שאלון 806</a>
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <p>5 יחידות</p>
            <ul>
              <li>
                <Link href="#">
                <a>שאלון 806</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                <a>שאלון 806</a>
                </Link>
              </li>
            </ul>
          </article>
        </div>
        <div className={styles.copyright}>
          <p> הכנה לבגרויות, מכינות ואקדמיה - MOK © </p>
        </div>
      </div>
    </footer>
  );
}
