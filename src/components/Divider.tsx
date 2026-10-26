import styles from "./Divider.module.css";

type Props = {
  label: string;
  /** Наклон в другую сторону. */
  flip?: boolean;
  /** Сдвиг фазы hue-анимации, чтобы разделители не мигали синхронно. */
  delay?: string;
  sparkDelay?: string;
};

export function Divider({ label, flip = false, delay, sparkDelay }: Props) {
  return (
    <div className={styles.divider} aria-hidden="true" style={delay ? { animationDelay: delay } : undefined}>
      <div className={`${styles.track} ${flip ? styles.flip : ""}`}>
        <span className={styles.line} />
        <span className={styles.line2} />
        <span className={styles.line3} />
        <span className={styles.spark} style={sparkDelay ? { animationDelay: sparkDelay } : undefined} />
      </div>
      <span className={styles.label}>&gt; {label}</span>
    </div>
  );
}
