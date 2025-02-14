import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
import Link from "next/link";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <Link href="/">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faDove}
            rotation={180}
            style={{ color: "#ffffff" }}
          />
        </Link>

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
      <div className={styles.middle}>
        <Tweet />
        <LastTweets />
      </div>
      <div className={styles.trends}>
        <h2>Trends</h2>
        <div className={styles.hash}></div>
      </div>
    </div>
  );
}

export default Home;
