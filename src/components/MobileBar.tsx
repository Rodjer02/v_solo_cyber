import { waBookingLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import styles from "./MobileBar.module.css";

export function MobileBar() {
  return (
    <div className={styles.bar}>
      <a className={`${styles.wa} wa cut`} href={waBookingLink} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon width={20} height={20} />
        НАПИСАТЬ В WHATSAPP
      </a>
    </div>
  );
}
