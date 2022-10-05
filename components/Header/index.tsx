import styles from "./Header.module.scss";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <Image
              src="/static/images/header/logo.png"
              width={70}
              height={42}
              alt="MOK logo"
            />
          </a>
        </Link>
        <div className={styles.menu}>
          <button className={styles.cartButton}>
            <ShoppingCartIcon />
          </button>
          <div className={styles.desktopButtons}>
            <Button variant="secondary">המשרה</Button>
            <Button variant="outline">תורבחתה</Button>
          </div>
          <Button className={styles.navToggleButton} variant="outline">
            <Bars3Icon />
          </Button>
        </div>
      </div>
    </header>
  );
}
