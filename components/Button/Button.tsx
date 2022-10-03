import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button(props: ButtonProps) {
  const { variant = "primary" } = props;

  return (
    <button {...props} className={`${styles.button} ${styles[variant]}`}>
      {props.children}
    </button>
  );
}
