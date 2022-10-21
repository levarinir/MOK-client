import { Button } from '../Button';
import MultiLineString from '../MultiLineString/MultiLineString';
import styles from './HomePageHowItWorksSection.module.scss';

export interface HowItWorksItemProps {
  imageSrc: string;
  imageAlt: string;
  headingText: string;
  contentText: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export default function HowItWorksItem(props: HowItWorksItemProps) {
  return (
    <article>
      <div>
        <h3>{props.headingText}</h3>
        <MultiLineString multiLineString={props.contentText} />
        <div className={styles.buttons}>
          <Button variant="primary2">{props.primaryButtonText}</Button>
          <Button variant="outline">{props.primaryButtonText}</Button>
        </div>
      </div>
      <img src={props.imageSrc} alt={props.imageAlt} />
    </article>
  );
}
