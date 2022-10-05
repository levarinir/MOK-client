import { ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "./SubHeader.module.scss"

export default function SubHeader() {
  return (
    <section className={styles.subheader}>
      <button className={styles.subheaderMenuItem}>
        <ChevronDownIcon className={styles.subheaderMenuItemIcon} />
        <span>בחירת תחום לימוד</span>
      </button>
    </section>
  );
}