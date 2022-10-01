import styles from "./Header.module.css";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles["header"]}>
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

      <div className={styles["header__menu"]}>
        <button
          className={styles["header__menu_cart_button"]}
          // className="h-11 w-11 p-2 text-custom-secondary"
        >
          <ShoppingCartIcon></ShoppingCartIcon>
        </button>

        <button className={styles["header__menu_nav_toggle_button"]}>
          <Bars3Icon />
        </button>
      </div>
    </header>
  );
}
