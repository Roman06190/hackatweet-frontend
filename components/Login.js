import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.boxLeft}>
        <FontAwesomeIcon
          icon={faTwitter}
          rotation={180}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className={styles.boxRight}>
        <FontAwesomeIcon
          icon={faTwitter}
          rotation={180}
          size="lg"
          style={{ color: "#ffffff" }}
        />
        <h1>See what's happening</h1>
        <h2>Join Hackatweet today.</h2>
        <button>Sign up</button>
        <p>Already have an account</p>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
