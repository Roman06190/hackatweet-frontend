import styles from "../styles/Tweet.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LastTweets from "./LastTweets";

function Tweet(props) {
  const [newTweet, setNewTweet] = useState([]);
  const [lastTweet, setLastTweet] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const user = useSelector((state) => state.user.value);
  console.log(user);

  const handlePost = () => {
    fetch("http://localhost:3000/tweet/newTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tweet: newTweet,
        token: user.token,
        hashtag: null,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        props.refresher();
        setRefresh(!refresh);
      });
  };

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

  return (
    <>
      <div className={styles.home}>
        <h2>Home</h2>
        <div className={styles.tweet}>
          <textarea
            className={styles.textarea}
            placeholder="What's up?"
            onChange={(e) => setNewTweet(e.target.value)}
            value={newTweet}
            max-length={280}
          ></textarea>
          <div className={styles.submit}>
            <span>{newTweet.length}／280</span>
            <button onClick={handlePost} className={styles.btnTweet}>
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className={styles.containTweets}>{tweets}</div>
    </>
  );
}

export default Tweet;
