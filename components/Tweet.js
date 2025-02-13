import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <img className={styles.image} src="/profile.webp" alt="Photo profile" />
        <div className={styles.boxText}>
          <h3>John</h3>
          <p className={styles.para}>@JohnCena</p>
          <p className={styles.para}>. Date</p>
        </div>
      </div>
      <div>Welcome to #hackatweet guys :-D</div>
    </div>
  );
}

export default Tweet;
