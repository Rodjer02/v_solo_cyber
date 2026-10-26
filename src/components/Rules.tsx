import { RULES, type Rule } from "@/data/content";
import { Aurora } from "./Aurora";
import { SpeakerIcon, TableIcon, TrashIcon } from "./icons";
import styles from "./Rules.module.css";

function RuleIcon({ icon }: { icon: Rule["icon"] }) {
  if (icon === "table") return <TableIcon />;
  if (icon === "speaker") return <SpeakerIcon />;
  return <TrashIcon />;
}

export function Rules() {
  return (
    <section id="rules" className={styles.section} aria-labelledby="rules-title">
      <Aurora
        style={{ zIndex: -1 }}
        blobs={[
          { size: 560, left: "-300px", top: "0", color: "#9333EA" },
          { size: 520, right: "-280px", top: "120px", color: "#E11D48", delay: "-8s" },
        ]}
      />

      <div className={`${styles.head} reveal`}>
        <div className={styles.line} aria-hidden="true" />
        <div className={styles.headText}>
          <span className={`${styles.kicker} kicker`}>[ 03 // CODE ]</span>
          <h2 id="rules-title" className={`${styles.h2} c-pink`}>
            V SOLO
          </h2>
        </div>
        <div className={styles.line} aria-hidden="true" />
      </div>

      <div className={styles.grid}>
        {RULES.map((r) => (
          <article key={r.code} className={`${styles.card} card hud reveal`}>
            <span className={styles.icon} aria-hidden="true">
              <RuleIcon icon={r.icon} />
            </span>
            <p className={`${styles.text} c-pink`}>{r.text}</p>
            <span className={styles.code}>{r.code}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
