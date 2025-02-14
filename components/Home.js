import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
import Link from "next/link";

function Home() {
  const [lastTweet, setLastTweet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweet/allTweets")
      .then((response) => response.json())
      .then((data) => {
        setLastTweet(data.tweets);
      });
  }, []);

  const tweets = lastTweet.map((data, i) => {
    return <LastTweets key={i} {...data} />;
  });

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
        <div className={styles.containTweets}>{tweets}</div>
      </div>
      <div className={styles.trends}>
        <h2>Trends</h2>
        <div className={styles.hash}></div>
      </div>
    </div>
  );
}

export default Home;
