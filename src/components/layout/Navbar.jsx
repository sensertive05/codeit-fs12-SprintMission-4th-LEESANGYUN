import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          🐼 판다마켓
        </a>
        <button className={styles.loginBtn}>로그인</button>
      </div>
    </header>
  );
}