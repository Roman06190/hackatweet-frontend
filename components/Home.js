import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import Tweet from "./Tweet";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faDove}
          rotation={180}
          style={{ color: "#ffffff" }}
        />
        <div className={styles.profile}>
          <div className={styles.boxBottom}>
            <img
              className={styles.image}
              src="/profile.webp"
              alt="Photo profile"
            />
            <div className={styles.boxText}>
              <h3>John</h3>
              <p className={styles.urlProfile}>@JohnCena</p>
            </div>
          </div>
          <button className={styles.btnLogout}>Logout</button>
        </div>
      </div>
      <div className={styles.tweets}>
        <h2>Home</h2>
        <div className={styles.tweet}>
          <textarea
            className={styles.textarea}
            placeholder="What's up?"
          ></textarea>
          <div className={styles.submit}>
            <span>0/280</span>
            <button className={styles.btnTweet}>Tweet</button>
          </div>
        </div>
        <div className={styles.containerTweets}>
          <Tweet />
        </div>
      </div>
      <div className={styles.trends}>
        <h2>Trends</h2>
        <div className={styles.hash}>
          <div>
            <h3>#hackatweet</h3>
            <p>2 Tweets</p>
          </div>
          <div>
            <h3>#hackatweet</h3>
            <p>2 Tweets</p>
          </div>
          <div>
            <h3>#hackatweet</h3>
            <p>2 Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
