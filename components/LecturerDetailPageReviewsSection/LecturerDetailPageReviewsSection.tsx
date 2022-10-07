import { GetServerSideProps } from "next";
import { Button } from "../Button";
import RatingReviewStars from "../RatingReviewStars/RatingReviewStars";
import styles from "./LecturerDetailPageReviewsSection.module.scss";
import Review, { ReviewProps } from "./Review";

export interface LecturerDetailPageReviewsSectionProps {
  overallRating: number;
  reviews: ReviewProps[];
}

export function LecturerDetailPageReviewsSection(
  props: LecturerDetailPageReviewsSectionProps
) {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <article className={styles.reviewsBox}>
          <h2 className={styles.reviewsBoxTitle}> םידימלת תוצלמה</h2>
          <p className={styles.reviewsBoxDescription}>
            ונלש םידימלתה הזה הרומה לע םיצילממ
          </p>
          <article className={styles.ratingNumberBox}>
            <p className={styles.ratingNumber}>{4}</p>
            <RatingReviewStars rating={0.5} />
            <p className={styles.ratingNumberDescription}>תורוקיב 12</p>
          </article>
          <div className={styles.reviews}>
            {props.reviews.map((review, index) => (
              <Review key={index} {...review} />
            ))}
          </div>
          <Button variant="secondary">תוצלמה דוע תוארל</Button>
        </article>
      </div>
    </section>
  );
}
