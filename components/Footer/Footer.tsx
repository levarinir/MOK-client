import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <article>
            <p>5 תודיחי</p>
            <ul>
              <li>
                <Link href="#">
                  <a>806 ןולאש</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>806 ןולאש</a>
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <p>5 תודיחי</p>
            <ul>
              <li>
                <Link href="#">
                  <a>806 ןולאש</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>806 ןולאש</a>
                </Link>
              </li>
            </ul>
          </article>
        </div>
        <div className={styles.copyright}>
          <p> הימדקאו תוניכמ ,תויורגבל הנכה - MOK © </p>
        </div>
      </div>
    </footer>
  );
}
