import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
import Link from "next/link";

function Home() {
  // const deleteable = useSelector((state) => state.deleteable.value);

  const [tweetData, setTweetData] = useState([
    {
      content: "Je suis un tweet",
      date: Date.now(),
      author: "Herve",
      hashtag: "#DestroyAllHuman",
    },
  ]);
  const [lastTweet, setLastTweet] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/allTweets")
      .then((response) => response.json())
      .then((data) => {
        setLastTweet(data.allTweets[0]);
        setTweetData(data.allTweets.filter((data, i) => i > 0));
      });
  }, []);

  console.log("tweets are:", tweetData, "and last tweet is:", lastTweet);

  const tweets = tweetData.map((data, i) => {
    const isDeleteable = tweetData.some(
      (deleteable) => deleteable.title === data.tweet
    );

    return <Tweet key={i} {...data} isDeleteable={isDeleteable} />;
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
        <LastTweets />
        {tweets}
      </div>
      <div className={styles.trends}>
        <h2>Trends</h2>
        <div className={styles.hash}></div>
      </div>
    </div>
  );
}

export default Home;
