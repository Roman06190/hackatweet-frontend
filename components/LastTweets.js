import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function LastTweets() {
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
      <div>Welcome to ＃hackatweet guys :-D</div>
      <div>
        <FontAwesomeIcon
          className={styles.iconHeart}
          icon={faHeart}
          style={{ color: "#ffffff" }}
        />
        <span>0</span>
        <FontAwesomeIcon className={styles.iconTrash} icon={faTrashCan} />
      </div>
    </div>
  );
}

export default LastTweets;
