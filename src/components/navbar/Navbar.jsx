import styles from "./Navbar.module.scss";

export default function navbar() {
  return (
    <div>
      <input type="checkbox" id="theme-mode" className={styles.mode} hidden />

      <div className={styles.container}>
        <div className={styles.wrap}>
          <input
            type="radio"
            id="rd-1"
            name="radio"
            className={styles.rd1}
            hidden
          />
          <label htmlFor="rd-1" className={styles.label} style={{ "--index": 0 }}>
            <span>About Me</span>
          </label>

          <input
            type="radio"
            id="rd-2"
            name="radio"
            className={styles.rd2}
            hidden
          />
          <label htmlFor="rd-2" className={styles.label} style={{ "--index": 1 }}>
            <span>Summary</span>
          </label>

          <input
            type="radio"
            id="rd-3"
            name="radio"
            className={styles.rd3}
            hidden
          />
          <label htmlFor="rd-3" className={styles.label} style={{ "--index": 2 }}>
            <span>Portfolio</span>
          </label>

          <div className={styles.bar}></div>
          <div className={styles.slidebar}></div>
        </div>
      </div>
    </div>
  );
}
