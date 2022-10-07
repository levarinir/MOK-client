import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import styles from "./RatingReviewStars.module.scss";

export interface RatingReviewStarsProps {
  rating: number;
}

export default function RatingReviewStars(props: RatingReviewStarsProps) {
  return (
    <div className={styles.ratingReviewStars}>
      {Array(5)
        .fill(null)
        .map((_, index) =>
          index < Math.ceil(props.rating * 5) ? (
            <StarIconSolid className={styles.starIcon} />
          ) : (
            <StarIconOutline className={styles.starIcon} />
          )
        )}
    </div>
  );
}
