import { site } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.big} stroke-text`} aria-hidden="true">
        CYBER CLUB
      </div>
      <div className={styles.inner}>
        <span>
          <span className={styles.cyber}>CYBER</span>
          <span className={styles.club}>CLUB</span> · {site.shortName}
        </span>
        <span>
          {site.address} · {site.phone}
        </span>
      </div>
    </footer>
  );
}
