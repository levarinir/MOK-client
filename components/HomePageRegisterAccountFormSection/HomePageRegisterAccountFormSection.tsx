import { Button } from '../Button';
import { Input } from '../Input';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/outline';
import styles from './HomePageRegisterAccountFormSection.module.scss';

export default function HomePageRegisterAccountFormSection() {
  return (
    <section className={styles.registerAccountFormSection}>
      <div className={styles.container}>
        <h2>יצירת קשר</h2>
        <form>
          <Input leadingElement={<UserIcon />} placeholder="שם מלא" />
          <Input leadingElement={<EnvelopeIcon />} placeholder="דוא״ל" />
          <Input
            leadingElement={<PhoneArrowDownLeftIcon />}
            placeholder="טלפון"
          />
          <Button variant="secondary" className={styles.sendBtn}>
            שלח
          </Button>
        </form>
      </div>
    </section>
  );
}
