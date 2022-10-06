import { ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "./SubHeader.module.scss"

export default function SubHeader() {
  return (
    <section className={styles.subheader}>
      <button className={styles.subheaderMenuItem}>
        <ChevronDownIcon className={styles.subheaderMenuItemIcon} />
        <span>הקיטמתמב תויורגב</span>
      </button>
      <button className={styles.subheaderMenuItem}>
        <ChevronDownIcon className={styles.subheaderMenuItemIcon} />
        <span>תוניכמ</span>
      </button>
      <button className={styles.subheaderMenuItem}>
        <ChevronDownIcon className={styles.subheaderMenuItemIcon} />
        <span>תואר ראשון</span>
      </button>
    </section>
  );
}