import Image from "next/image";
import { Button } from "../Button";
import styles from "./LecturerDetailPageHeroSection.module.scss";

export interface LecturerDetailPageHeroSectionProps {
  lecturerImageSrc: string;
  lecturerName: string;
  lecturerTitle: string;
  lecturerDescription: string;
  lecturerFee: number;
}

export function LecturerDetailPageHeroSection(
  props: LecturerDetailPageHeroSectionProps
) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            src={props.lecturerImageSrc}
            alt={props.lecturerName}
          />
        </div>
        <h1>{props.lecturerName}</h1>
        <p className={styles.lecturerTitle}>{props.lecturerTitle}</p>
        <h2> הצרמה תודוא</h2>
        <p className={styles.description}>{props.lecturerDescription}</p>

        <article>
          <div className={styles.dropdownAndPrice}>
            <select name="" id="">
              <option></option>
            </select>
            <select name="" id=""></select>
            <p>
              {new Intl.NumberFormat(["he", "en"], {
                style: "currency",
                currency: "ILS",
              }).format(props.lecturerFee)}
            </p>
          </div>
          <Button type="submit">סרוקל םשריהל</Button>
        </article>
      </div>
    </section>
  );
}
