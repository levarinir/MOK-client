import { Button } from "../Button";
import { Input } from "../Input";
import { UserIcon } from "@heroicons/react/24/outline";
import styles from "./HomePageRegisterAccountFormSection.module.scss";

export default function HomePageRegisterAccountFormSection() {
  return (
    <section className={styles.registerAccountFormSection}>
      <div className={styles.container}>
        <h2>רשק תריצי</h2>
        <form>
          <Input leadingElement={<UserIcon />} placeholder="אלמ םש" />
          <Input leadingElement={<UserIcon />} placeholder="ל”אוד" />
          <Input leadingElement={<UserIcon />} placeholder="ןופלט" />
          <Button>חלש</Button>
        </form>
      </div>
    </section>
  );
}
