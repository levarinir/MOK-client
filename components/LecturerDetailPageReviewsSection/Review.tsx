import Image from "next/image";
import { MultiLineString } from "../MultiLineString";
import RatingReviewStars from "../RatingReviewStars/RatingReviewStars";
import styles from "./Review.module.scss";

export interface ReviewProps {
  profilePictureSrc: string;
  fullName: string;
  rating: number;
  content: string;
}

export default function Review(props: ReviewProps) {
  return (
    <article className={styles.review}>
      <div className={styles.userDetail}>
        <div className={styles.profilePicture}>
          <Image
            layout="fill"
            src={props.profilePictureSrc}
            alt={props.fullName}
          />
        </div>
        <div className={styles.fullNameAndRating}>
          <p>{props.fullName}</p>
          <RatingReviewStars rating={props.rating} />
        </div>
        <div className={styles.content}>
          <MultiLineString multiLineString={props.content} />
        </div>
      </div>
    </article>
  );
}
