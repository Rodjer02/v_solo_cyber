import { BONUS_TIERS } from "@/data/content";
import { tg } from "@/lib/format";
import { Aurora } from "./Aurora";
import { DatabaseIcon, GiftIcon } from "./icons";
import styles from "./Bonus.module.css";

export function Bonus() {
  return (
    <section id="bonus" className={styles.section} aria-labelledby="bonus-title">
      <Aurora
        blobs={[
          { size: 640, left: "-120px", top: "-80px", color: "#DB2777" },
          { size: 560, right: "-100px", bottom: "-120px", color: "#6D28D9", delay: "-6s" },
          { size: 360, left: "50%", top: "20%", color: "#0891B2", delay: "-11s" },
        ]}
      />
      <div className="scanlines" aria-hidden="true" />

      <div className={styles.inner}>
        <div className={`${styles.head} reveal`}>
          <div className={styles.headLeft}>
            <GiftIcon className={`${styles.gift} bob`} />
            <div className={styles.headText}>
              <span className="kicker">[ 02 // BONUS ]</span>
              <h2 id="bonus-title" className={styles.h2}>
                <span className={`${styles.h2a} c-cyan`}>Размер имеет</span>
                <br />
                <span className={`${styles.h2b} glitch c-pink`} data-text="значение!">
                  значение!
                </span>
              </h2>
            </div>
          </div>
          <p className={styles.lead}>Пополняйте аккаунт и получайте бонусы!</p>
        </div>

        <div className={styles.grid}>
          {BONUS_TIERS.map(([pay, bonus]) => {
            const pct = (bonus / pay) * 100;
            return (
              <div key={pay} className={`${styles.card} card cut reveal`}>
                <div className={styles.cardTop}>
                  <span className={styles.label}>ПОПОЛНЕНИЕ</span>
                  <DatabaseIcon className={styles.db} />
                </div>
                <div className={styles.amounts}>
                  <div className={`${styles.pay} c-cyan`}>{tg(pay)}</div>
                  <div className={styles.bonusRow}>
                    <span className={styles.bonusLabel}>БОНУС</span>
                    <span className={`${styles.bonus} c-pink`}>+{tg(bonus)}</span>
                  </div>
                </div>
                <div className={styles.bar} aria-hidden="true">
                  <div className={`${styles.fill} fill`} style={{ width: `${Math.min(100, pct * 2)}%` }} />
                </div>
                <div className={styles.foot}>
                  <span>+{Math.round(pct)}%</span>
                  <span>на счёте: {tg(pay + bonus)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
