import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
import Trends from "./Trends";
import Link from "next/link";

function Home() {
  const [lastTweet, setLastTweet] = useState([]);
  const [trends, setTrends] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    fetch("http://localhost:3000/tweet/allTweets")
      .then((response) => response.json())
      .then((data) => {
        setLastTweet(data.tweets);
      });
  }, [refresh]);

  const tweets = lastTweet.map((data, i) => {
    return <LastTweets key={i} {...data} />;
  });

  // Fetch des #

  useEffect(() => {
    fetch("http://localhost:3000/tweet")
      .then((response) => response.json())
      .then((data) => {
        setTrends(data.hashtag);
      });
  }, [refresh]);

  const trendList = trends.map((data, i) => {
    if (data.hashtag !== null) {
      return <Trends key={i} {...data} />;
    }
  });

  function refresher() {
    setRefresh(!refresh);
  }

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
              <h3>{user.firstname}</h3>
              <p className={styles.urlProfile}>@{user.username}</p>
            </div>
          </div>
          <Link href="/">
            <button className={styles.btnLogout}>Logout</button>
          </Link>
        </div>
      </div>
      <div className={styles.middle}>
        <Tweet refresher={refresher} />
        <div className={styles.containTweets}>{tweets}</div>
      </div>
      <div className={styles.trends}>
        <h2>Trends</h2>
        <div className={styles.hash}>{trendList}</div>
      </div>
    </div>
  );
}

export default Home;
