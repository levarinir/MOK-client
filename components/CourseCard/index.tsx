import styles from './CourseCard.module.scss';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

export interface CourseCardProps {
  cardImageSrc: string;
  isFavorited?: boolean;
  title: string;
  href?: string;
  description: string;
  duration?: string;
  price: number;
  rating: number;
  usersNumber: number;
}

function CourseCard(props: CourseCardProps) {
  return (
    <Link href={props.href}>
      <a>
        <article className={styles.courseCard}>
          <Image
            width="100%"
            height={180}
            src={props.cardImageSrc}
            alt={props.title}
          />
          <p className={styles.title}>{props.title}</p>
          {props.description && (
            <p className={styles.description}>{props.description}</p>
          )}
          <p className={styles.duration}>
            <PlayCircleIcon className={styles.playIcon} />
            <span>{+props.duration}</span>
            <span> שיעורים </span>
          </p>
          <p className={styles.price}>
            החל מ-
            <span>₪ {props.price}</span>
          </p>
          <div className={styles.divider}></div>
          <footer>
            {new Intl.NumberFormat('en-US', {
              notation: 'compact',
            }).format(props.usersNumber) + 'k'}{' '}
            אנשים
            <p className={styles.rating}>
              <StarIcon className={styles.ratingIcon} />
              {props.rating}
            </p>
          </footer>
        </article>
      </a>
    </Link>
  );
}

export default CourseCard;
