import styles from './HomePageHowItWorksSection.module.scss';
import HowItWorksItem, { HowItWorksItemProps } from './HowItWorksItem';

export interface HomePageHowItWorksSectionProps {
  items?: HowItWorksItemProps[];
}

export default function HomePageHowItWorksSection(
  props: HomePageHowItWorksSectionProps
) {
  const {
    items = [
      {
        headingText: 'תתחילו מצפייה חינם בפרקים',
        contentText:
          'אנחנו לא רוצים שתקנו חתול בשק, תבחרו כל קורס שמעניין אתכם ותוכלו לראות לגמרי בחינם מספר פרקים שבחרנו בשבילכם מבלי לרכוש את הקורס כדי שתתרשמו מאיכות המרצים ושיטת ההוראה שלנו',
        primaryButtonText: 'תמליצו ותרוויחו',
        secondaryButtonText: 'צפו בקורסים',
        imageSrc: '/static/images/home/howItWork1.png',
        imageAlt: 'how mok works',
      },
      {
        headingText: ' תבחרו את פרק הזמן המתאים לקנייה',
        contentText:
          'לא בטוחים לכמה זמן תצטרכו גישה לקורס?,נותנים לכם גמישות בגישה לקורסים שלנו בהתאם לצרכים שלכם כדי שלא תצטרכו להתחייב ולשלם יותר סתם',
        primaryButtonText: 'תמליצו ותרוויחו',
        secondaryButtonText: 'צפו בקורסים',
        imageSrc: '/static/images/home/howItWork2.png',
        imageAlt: 'how mok works',
      },
      {
        headingText: 'תשתפו את הקורסים ותרוויחו ',
        contentText:
          'תבחרו קורס שאתם רוצים לשתף, תשלחו לינק לחבר ו-you’re good to go.תחזיקו אצבעות עד שאותו חבר יקנה את הקורס!כי כשהוא קונה, אתם מרווחים... כן כן, ממש ככה',
        primaryButtonText: 'תמליצו ותרוויחו',
        secondaryButtonText: 'צפו בקורסים',

        imageSrc: '/static/images/home/howItWork3.png',
        imageAlt: 'how mok works',
      },
      {
        headingText: 'עקבו בפאנל אישי אחרי כלהקורסים שלכם',
        contentText:
          'תוכלו לעקוב בצורה פשוטה אחרי כל הקורסים ששיתפתם, לראות את הסטטוס שלהם, אם החבר שלכם קנה את הקורס ולראות כמה צברתם למימוש באתר',
        primaryButtonText: 'תמליצו ותרוויחו',
        secondaryButtonText: 'צפו בקורסים',

        imageSrc: '/static/images/home/howItWork4.png',
        imageAlt: 'how mok works',
      },
    ],
  } = props;

  return (
    <section className={styles.howItWorkSection}>
      <div className={styles.container}>
        <h2>איך MOK עובדת?</h2>
        {items.map((item, index) => (
          <HowItWorksItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
