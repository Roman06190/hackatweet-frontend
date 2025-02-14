import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function LastTweets(props) {
  const [timer, setTimer] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    function howManyTime() {
      let posted = `${Date.parse(props.date)}`;
      let date = Date.now();
      let result = date - posted;
      let finalResult = new Date(result);

      setTimer(finalResult.getHours());
    }
    howManyTime();
  }, []);

  const handleLikeTweet = () => {
    setLiked(!liked);
    console.log(liked);
  };
  if (liked) {
    {
      color: "#e74c3c";
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <img className={styles.image} src="/profile.webp" alt="Photo profile" />
        <div className={styles.boxText}>
          <h3>{props.author.firstname}</h3>
          <p className={styles.para}>@{props.author.username}</p>
          <p className={styles.para}>. {timer} hours</p>
        </div>
      </div>
      <div>{props.content}</div>
      <div>
        <FontAwesomeIcon
          className={styles.iconHeart}
          icon={faHeart}
          style={{ color: "#ffffff" }}
          onClick={() => handleLikeTweet()}
        />
        <span>0</span>
        <FontAwesomeIcon className={styles.iconTrash} icon={faTrashCan} />
      </div>
    </div>
  );
}

export default LastTweets;
