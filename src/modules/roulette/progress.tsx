import { useAppContext } from "@/context";
import styles from "./progress.module.css";

export function Progress() {
  const {
    state: { suspense },
  } = useAppContext();
  return (
    <div
      className={["relative rounded-md h-10 w-full", styles.progress, suspense && styles["progress-animated"]]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
