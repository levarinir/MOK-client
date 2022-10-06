import styles from "./CourseCard.module.scss";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export interface CourseCardProps {
  cardImageSrc: string;
  isFavorited: boolean;
  title: string;
  href: string;
  description: string;
  duration: number;
  price: number;
  rating: number;
  viewerCount: number;
}

function CourseCard(props: CourseCardProps) {
  return (
    <Link href={props.href}>
      <a>
        <article className={styles.courseCard}>
          <Image width="100%" height={146} src={props.cardImageSrc} alt={props.title} />
          <p className={styles.title}>{props.title}</p>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.duration}>
            <PlayCircleIcon className={styles.playIcon} />
            <span>{(props.duration / 60).toFixed()}</span>
            <span> םירועיש </span>
          </p>
          <p className={styles.price}>
            החל מ-
            <span>₪ {props.price}</span>
          </p>
          <div className={styles.divider}></div>
          <footer>
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
            }).format(props.viewerCount)}{" "}
            םישנא
            <p className={styles.rating}>
              <StarIcon className={styles.ratingIcon} />
              {props.rating * 5}
            </p>
          </footer>
        </article>
      </a>
    </Link>
  );
}

export default CourseCard;
