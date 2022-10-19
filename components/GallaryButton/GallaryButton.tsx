import styles from './GallaryButton.module.scss';

export interface GallaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
}

export default function GallaryButton() {
  return <button className={`${styles.button}`}></button>;
}
