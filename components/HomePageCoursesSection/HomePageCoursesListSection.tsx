import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CourseCard, { CourseCardProps } from "../CourseCard";
import styles from "./HomePageCoursesListSection.module.scss";
import utilityStyles from "../../styles/utilities.module.scss";

export interface HomePageCoursesListSectionProps {
  courses: CourseCardProps[];
  sectionTitle: string;
  seeMoreLinkHref: string;
  seeMoreLinkText: string;
}

export default function HomePageCoursesListSection(
  props: HomePageCoursesListSectionProps
) {
  return (
    <section className={styles.coursesListSection}>
      <div className={utilityStyles.container}>
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
          {props.courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
