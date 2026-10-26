import { CHAT, STEPS } from "@/data/content";
import { isPlaceholder, phoneHref, site } from "@/data/site";
import { waBookingLink } from "@/lib/whatsapp";
import { Aurora } from "./Aurora";
import { CheckIcon, ClockIcon, DoubleCheckIcon, PhoneIcon, PinIcon, SendIcon, WhatsAppIcon } from "./icons";
import styles from "./Contact.module.css";

const STEP_TONE = ["c-green", "c-cyan", "c-pink"];
const STEP_CLASS = [styles.step1, "", styles.step3];

export function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <Aurora
        style={{ animationDuration: "40s" }}
        blobs={[
          { size: 600, right: "-100px", top: "0", color: "#16A34A" },
          { size: 520, left: "-160px", bottom: "-100px", color: "#0891B2", delay: "-7s" },
        ]}
      />
      <div className={styles.glowGreen} aria-hidden="true" />
      <div className={styles.glowCyan} aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={`${styles.info} reveal`}>
            <div className={styles.head}>
              <span className={`${styles.kicker} kicker`}>[ 04 // CONNECT ]</span>
              <h2 id="contact-title" className={styles.h2}>
                <span className={`${styles.h2a} c-cyan`}>БРОНЬ</span>
                <br />
                <span className={`${styles.h2b} glitch c-green`} data-text="В WHATSAPP">
                  В WHATSAPP
                </span>
              </h2>
              <p className={styles.lead}>
                Без форм и звонков. Напиши, во сколько придёшь и сколько вас — администратор закрепит места.
              </p>
            </div>

            <ol className={styles.steps}>
              {STEPS.map((text, i) => (
                <li key={text} className={`${styles.step} ${STEP_CLASS[i]} reveal`}>
                  <span className={`${styles.stepNum} ${STEP_TONE[i]}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.stepText}>{text}</span>
                </li>
              ))}
            </ol>

            <div className={styles.cta}>
              <div className={styles.waWrap}>
                <span className="ring-p cut" aria-hidden="true" />
                <span className="ring-p cut" style={{ animationDelay: "1.1s" }} aria-hidden="true" />
                <a className={`${styles.wa} wa cut`} href={waBookingLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className={styles.waIcon} />
                  НАПИСАТЬ В WHATSAPP
                </a>
              </div>
              <div className={`${styles.qr} hud`}>
                [QR-код
                <br />
                WhatsApp]
              </div>
              <span className={styles.hint}>
                &gt; или сканируй камерой телефона<span className="blink">_</span>
              </span>
            </div>
          </div>

          <div className={`${styles.mock} reveal`} aria-hidden="true">
            <div className="bob">
              <div className={styles.phone}>
                <div className={styles.screen}>
                  <div className={styles.notch} />
                  <div className={styles.chatHead}>
                    <span className={styles.avatar}>VS</span>
                    <div className={styles.chatName}>
                      <span className={styles.chatTitle}>V SOLO</span>
                      <span className={styles.online}>
                        <span className="blink">●</span> online
                      </span>
                    </div>
                  </div>
                  <div className={styles.msgs}>
                    <span className={styles.today}>Сегодня</span>
                    {CHAT.map((m) => (
                      <div
                        key={m.text}
                        className={`${styles.msg} ${m.from === "me" ? styles.me : styles.them} msg`}
                        style={{ animationDelay: m.delay }}
                      >
                        {m.text}
                        {m.time && (
                          <div className={styles.meta}>
                            {m.time}
                            <DoubleCheckIcon stroke="#67E8F9" />
                          </div>
                        )}
                      </div>
                    ))}
                    <div className={`${styles.msg} ${styles.them} ${styles.typing} msg`} style={{ animationDelay: "4.4s" }}>
                      <span className="dot" />
                      <span className="dot" style={{ animationDelay: ".15s" }} />
                      <span className="dot" style={{ animationDelay: ".3s" }} />
                    </div>
                  </div>
                  <div className={styles.inputBar}>
                    Сообщение
                    <span className={styles.send}>
                      <SendIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.badgeOk} bob`} style={{ animationDelay: "-1.5s" }}>
              <span className={styles.check}>
                <CheckIcon />
              </span>
              <span className={styles.badgeText}>
                БРОНЬ
                <br />
                ПОДТВЕРЖДЕНА
              </span>
            </div>
            <div className={`${styles.badgeSeats} bob`} style={{ animationDelay: "-3s" }}>
              2 места · 20:00
            </div>
          </div>
        </div>

        <div className={styles.tiles}>
          <div className={`${styles.tile} tile reveal cut`}>
            <PinIcon className={styles.tileIcon} />
            <div>
              <div className={styles.tileLabel}>АДРЕС</div>
              <div className={styles.tileVal}>{site.address}</div>
            </div>
          </div>
          <div className={`${styles.tile} ${styles.tilePhone} tile reveal cut`}>
            <PhoneIcon className={styles.tileIcon} />
            <div>
              <div className={styles.tileLabel}>ТЕЛЕФОН</div>
              {isPlaceholder(site.phone) ? (
                <div className={styles.tileVal}>{site.phone}</div>
              ) : (
                <a className={styles.tileVal} href={phoneHref}>
                  {site.phone}
                </a>
              )}
            </div>
          </div>
          <div className={`${styles.tile} tile reveal cut`}>
            <ClockIcon className={styles.tileIcon} width={28} height={28} />
            <div>
              <div className={styles.tileLabel}>РЕЖИМ</div>
              <div className={styles.tileVal}>{site.hours}</div>
            </div>
          </div>
          <div className={`${styles.tile} ${styles.tileLinks} tile reveal cut`}>
            <a className={`${styles.link} ghost cut`} href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className={`${styles.link} ghost cut`} href={site.social.twoGis} target="_blank" rel="noopener noreferrer">
              2ГИС
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
