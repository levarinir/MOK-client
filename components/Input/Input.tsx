import styles from "./Input.module.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leadingElement?: React.ReactNode;
}

export default function Input({
  children,
  leadingElement,
  ...restOfProps
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.leadingElement}>{leadingElement}</div>
      <input {...restOfProps}>{children}</input>
    </div>
  );
}
