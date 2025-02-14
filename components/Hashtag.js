import styles from "../styles/Hashtag.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import Trends from "./Trends";
import Link from "next/link";

function Hashtag({ params: { slug } }) {
  const [searchTag, setSearchTag] = useState("");
  const [trends, setTrends] = useState([]);
  const user = useSelector((state) => state.user.value);

  // Fetch des #

  useEffect(() => {
    fetch("http://localhost:3000/tweet")
      .then((response) => response.json())
      .then((data) => {
        setTrends(data.hashtag);
      });
  }, []);

  const trendList = trends.map((data, i) => {
    if (data.hashtag !== null) {
      return <Trends key={i} {...data} />;
    }
  });

  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <Link href="/home">
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
        <div className={styles.home}>
          <h2>Hashtag</h2>
          <div className={styles.search}>
            <textarea
              className={styles.textarea}
              onChange={(e) => setSearchTag(e.target.value)}
              value={searchTag}
            ></textarea>
          </div>
        </div>
      </div>
      <div className={styles.trends}>
        <h2>Trends</h2>
        <div className={styles.hash}>{trendList}</div>
      </div>
    </div>
  );
}

export default Hashtag;
