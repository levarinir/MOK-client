import { Button } from '../Button';
import { MultiLineString } from '../MultiLineString';
import styles from './HomePageCoursesSelectionSection.module.scss';
import { useState, useRef } from 'react';
import CurserCardSection from '../CurserCardSection/CurserCardSection';

const defaultCourseSelections: HomePageCoursesSelectionSectionProps['courseSelections'] =
  [
    {
      courseSelectionTabName: 'בגרויות במתמטיקה',
      courseSelectionTabTitleWidth: '155px',
      courseSelectionHeadingText: 'קורסים של בגרויות במתמטיקה',
      courseSelectionContentText:
        'בחלק של בגרויות  במתמטיקה באתר MOK תמצאו קורסים אונליין ללימוד כל הרמות במתמטיקה עבור 5, 4, 3 יחידות לימוד בהתאם לתכנית לימודים העדכנית של משרד החינוך. הקורסים מתאימים הן לתלמידי בית ספר שרוצים לשפר את השליטה שלהם בחומר לפני הבחינה או המתכונת והן לחיילים משוחררים שרוצים להעלות את הסכם ולשפר את תעודת הבגרות לקראת שיפור תנאי הקבלה לתואר ראשון. הקורסים מועברים ע”י מרצים מוכרים בתעשייה בעלי רקורד עשיר בתחום ולימדו במוסדות הנבחרים במדינה.',
      courseTypes: [
        {
          name: '5 יחידות',
          buttonTitle: 'צפייה בכל הקורסים',
          courses: [
            {
              name: 'קורס לשאלון 581 (806)',
              icon: '/static/icons/diagram.png',
            },
            {
              name: 'קורס לשאלון 582 (807)',
              icon: '/static/icons/diagram.png',
            },
          ],
        },
        {
          name: '4 יחידות',
          buttonTitle: 'צפייה בכל הקורסים',
          courses: [
            {
              name: 'קורס לשאלון 481 (804)',
              icon: '/static/icons/diagram.png',
            },
            {
              name: 'קורס לשאלון 482 (805)',
              icon: '/static/icons/diagram.png',
            },
          ],
        },
        {
          name: '3 יחידות',
          buttonTitle: 'צפייה בכל הקורסים',
          courses: [
            {
              name: 'קורס לשאלון 382 (803)',
              icon: '/static/icons/diagram.png',
            },
          ],
        },
        {
          name: 'קורס ריענון',
          buttonTitle: 'צפייה בכל הקורסים',
          courses: [
            {
              name: 'קדם אלגברה וגיאומטריה',
              icon: '/static/icons/diagram.png',
            },
          ],
        },
      ],
    },
    {
      courseSelectionTabName: 'מכינות קדם אקדמיות',
      courseSelectionTabTitleWidth: '175px',
      courseSelectionHeadingText: 'קורסים של מכינות קדם אקדמיות',
      courseSelectionContentText:
        'בחלק של מכינות אקדמיות ב-MOK תמצאו קורסים המשפרים את סיכויים להצליח במכינה שלכם על ידי boost נוסף של ארגון החומר לפי סרטוני וידאו מסודרים בהתאם לסילבוס עדכני וייעודי למוסד לימוד שלכם. בנוסף תראו קורסים המתאימים לתלמידים הלומדים עצמאית ומנסים לשפר את סיכויי הקבלה שלהם לתואר ראשון לאוניברסטאות, טכניון ומכללות. התכנים כוללים מכינות במתמטיקה, פיסיקה, מבחני סיווג לקבלה למוסדות לימוד  ',
      courseTypes: [
        {
          name: 'טכניון',
          buttonTitle: 'צפייה בכל הקורסים',
          courses: [
            {
              name: 'מכינת מתמטיקה - סמסטר ראשון',
              icon: '/static/icons/diagram.png',
            },
            {
              name: 'מכינת מתמטיקה - תואר שני',
              icon: '/static/icons/diagram.png',
            },
            {
              name: 'מבחן סיווג קבלה לטכניון',
              icon: '/static/icons/open-book.png',
            },
            {
              name: 'בחינות סימולציה',
              icon: '/static/icons/square.png',
            },
          ],
        },
        {
          name: 'אוניברסיטת בן גוריון  ',
          buttonTitle: 'צפייה בכל הקורסים',
          courses: [
            {
              name: 'מכינת מתמטיקה - סמסטר ראשון',
              icon: '/static/icons/diagram.png',
            },
            {
              name: 'מכינת מתמטיקה - תואר שני',
              icon: '/static/icons/diagram.png',
            },
            {
              name: 'בחינות סימולציה',
              icon: '/static/icons/square.png',
            },
            {
              name: 'פתרונות ',
              icon: '/static/icons/diagram.png',
            },
          ],
        },
      ],
    },
    {
      courseSelectionTabName: 'תואר ראשון',
      courseSelectionTabTitleWidth: '100px',
      courseSelectionHeadingText: 'קורסים של תואר ראשון',
      courseSelectionContentText:
        'בחלק של מכינות אקדמיות באתר MOK תמצאו קורסים החופפים לקורסי ליבה הנלמדים בתואר הראשון למדעים מדוייקים או תארי הנדסה וכוללים קורסים כמו אלגברה 1מ, אלגברה לינארית, חדוא 1, חדוא 2, אינפי ועוד. הקורסים נועדו כדי להקל על סטודנטים לתואר ראשון להנגיש   תכנים הנלמדים באוניברסיטאות ומכללות בצורה של שיעורים מוקלטים, מתוייגים ומסודרים אשר מועברים בהתאם לתכניות לימוד של מוסדות להשכלה גבוהה ונלמדים ע”י מרצים בכירים בתעשייה כמו טכניון ואוניברסיטת בן גוריון.  ',
      courseTypes: [
        {
          name: 'קורסי ליבה',
          buttonTitle: 'צפייה בכל הקורסים',
          courses: [
            {
              name: 'מד”ר',
              icon: '/static/icons/square.png',
            },
            {
              name: 'אלגברה 1מ',
              icon: '/static/icons/diagram.png',
            },
            {
              name: 'אלגברה לינארית',
              icon: '/static/icons/open-book.png',
            },
          ],
        },
      ],
    },
  ];

export interface HomePageCoursesSelectionSectionProps {
  sectionHeadingText?: string;

  sectionContent?: string;
  courseSelections?: {
    courseSelectionTabName: string;
    courseSelectionTabTitleWidth?: string;
    courseSelectionHeadingText: string;
    courseSelectionContentText: string;
    courseTypes: {
      name: string;
      buttonTitle: string;
      courses: {
        name: string;
        icon: React.ReactNode;
      }[];
    }[];
  }[];
}

export default function HomePageCoursesSelectionSection(
  props: HomePageCoursesSelectionSectionProps
) {
  const { courseSelections = defaultCourseSelections } = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const selectedTabIndexWidth = useRef();
  return (
    <section className={styles.homePageCoursesSelectionSection}>
      <div className={styles.container}>
        <h2>{props.sectionHeadingText}</h2>
        <MultiLineString multiLineString={props.sectionContent} />
        <div className={styles.tabsOuter}>
          <div className={styles.tabs}>
            {courseSelections.map((courseSelection, index) => (
              <div key={index} className={styles.tabItem}>
                <>
                  <button
                    onClick={() => setSelectedTabIndex(index)}
                    ref={selectedTabIndexWidth}
                  >
                    {courseSelection.courseSelectionTabName}
                  </button>
                  {index == selectedTabIndex ? (
                    // <div className={styles.tabIsSelectedIndicator}></div>
                    <CurserCardSection
                      width={
                        courseSelections[selectedTabIndex]
                          .courseSelectionTabTitleWidth
                      }
                    />
                  ) : null}
                </>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.contentOuter}>
          <div className={styles.contentInner}>
            <article>
              <p className={styles.title}>
                {courseSelections[selectedTabIndex].courseSelectionHeadingText}
              </p>
              <MultiLineString
                multiLineString={
                  courseSelections[selectedTabIndex].courseSelectionContentText
                }
              />
            </article>
          </div>
        </div>
        <div className={styles.courses}>
          {courseSelections[selectedTabIndex].courseTypes.map(
            (courseType, index) => (
              <article key={index}>
                <header>
                  <p>{courseType.name}</p>
                </header>
                <div className={styles.coursesMain}>
                  <main>
                    <div className={styles.coursesList}>
                      {courseType.courses.map((course, index) => (
                        <div className={styles.courseName} key={index}>
                          <img src={course.icon} />
                          <p>{course.name}</p>
                        </div>
                      ))}
                    </div>
                  </main>
                  <Button className="full">{courseType.buttonTitle}</Button>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
