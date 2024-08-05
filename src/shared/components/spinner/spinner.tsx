import styles from "./spinner.module.css";

export function Spinner(props: { className?: string; classNameSize?: string }) {
  return (
    <span
      className={[props.className, props.classNameSize || "w-6 h-6 border-4", "block rounded-full", styles.spinner]
        .filter(Boolean)
        .join(" ")}
      aria-busy
      role="alert"
    />
  );
}
