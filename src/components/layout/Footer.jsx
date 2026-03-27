import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© 2024 판다마켓. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#">개인정보처리방침</a>
          <a href="#">이용약관</a>
          <a href="#">문의하기</a>
        </div>
      </div>
    </footer>
  );
}