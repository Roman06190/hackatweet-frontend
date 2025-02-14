import styles from "../styles/Trends.module.css";
import Link from "next/link";

function Trends(props) {
  return (
    <>
      <div className={styles.container}>
        <p>{props.hashtag}</p>
        <p className={styles.count}>{props.tweet.length} Tweets</p>
      </div>
    </>
  );
}

export default Trends;
