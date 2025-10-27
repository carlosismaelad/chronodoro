import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <TimerIcon />
        <span>Chronodoro</span>
      </a>
    </div>
  );
}
