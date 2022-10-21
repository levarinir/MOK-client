import styles from './Button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'primary2';
}

export default function Button({ className, ...restOfProps }: ButtonProps) {
  const { variant = 'primary' } = restOfProps;
  return (
    <button
      {...restOfProps}
      className={`${styles.button} ${styles[variant]} ${
        className === 'full' ? styles.full : className
      }`}
    >
      {restOfProps.children}
    </button>
  );
}
