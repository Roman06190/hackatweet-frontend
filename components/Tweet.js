import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div className={styles.home}>
      <h2>Home</h2>
      <div className={styles.tweet}>
        <textarea
          className={styles.textarea}
          placeholder="What's up?"
        ></textarea>
        <div className={styles.submit}>
          <span>0／280</span>
          <button className={styles.btnTweet}>Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
