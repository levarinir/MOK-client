import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import CourseCard, { CourseCardProps } from '../CourseCard';
import styles from './HomePageCoursesListSection.module.scss';
import utilityStyles from '../../styles/utilities.module.scss';
import data from '../../data/courses.json';
import { useState, useEffect } from 'react';
import { ButtonCard } from '../ButtonCard';
export interface HomePageCoursesListSectionProps {
  courseSectionIndex: number;
  sectionTitle: string;
  seeMoreLinkHref: string;
  seeMoreLinkText: string;
}

export default function HomePageCoursesListSection(
  props: HomePageCoursesListSectionProps
) {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [courseListSection, setCourseListSection] = useState([]);

  useEffect(() => {
    const arr = courseInSection(data[props.courseSectionIndex].courseTypes);
    setCourseListSection(arr);
  }, []);
  const courseInSection = (coursesType) => {
    const arr = [];
    for (let i = 0; i < coursesType.length; i++) {
      for (let j = 0; j < coursesType[i].courses.length; j++) {
        arr.push(coursesType[i].courses[j]);
      }
    }
    return arr;
  };

  const handleClick = (side) => {
    console.log('Comp: HomePageCoursesList, Func: handleClick, side: ', side);
    if (side === 'Right') {
      console.log('handleClick side===right');
      if (currentCourseIndex > 0) {
        setCurrentCourseIndex(currentCourseIndex - 1);
      }
    } else if (side === 'Left') {
      setCurrentCourseIndex(currentCourseIndex + 1);
    }
  };

  return (
    <section className={styles.coursesListSection}>
      <div className={`${utilityStyles.container} ${styles.container}`}>
        <section className={styles.coursesListSectionHeader}>
          <h2>{props.sectionTitle}</h2>
          <Link href={props.seeMoreLinkHref}>
            <a className={styles.seeMoreLink}>
              <span>{props.seeMoreLinkText}</span>
              <ArrowLeftIcon />
            </a>
          </Link>
        </section>
        <div className={styles.cardList}>
          {courseListSection.map((course, index) => (
            <>
              {currentCourseIndex > 0 && (
                <ButtonCard
                  side="Right"
                  clickBtn={() => handleClick('Right')}
                />
              )}
              {index >= currentCourseIndex &&
                index < currentCourseIndex + 4 && (
                  <CourseCard key={index} {...course} />
                )}

              {courseListSection.length > 3 &&
                currentCourseIndex < courseListSection.length - 4 && (
                  <ButtonCard
                    side="Left"
                    clickBtn={() => handleClick('Left')}
                  />
                )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
