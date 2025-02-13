import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import Signup from "./Signup";
import Signin from "./Signin";
import { useState } from "react";

function Login() {
  const [displaySignup, setDisplaySignup] = useState(false);
  const [displaySignin, setDisplaySignin] = useState(false);

  function modaleSignup() {
    setDisplaySignup(!displaySignup);
  }

  function modaleSignin() {
    setDisplaySignin(!displaySignin);
  }

  return (
    <div className={styles.main}>
      <div className={styles.boxLeft}>
        <FontAwesomeIcon
          className={styles.iconLeft}
          icon={faDove}
          rotation={180}
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className={styles.boxRight}>
        <div className={styles.containerLog}>
          <FontAwesomeIcon
            className={styles.iconRight}
            icon={faDove}
            rotation={180}
            style={{ color: "#ffffff" }}
          />
          <h1 className={styles.title}>See what's happening</h1>
          <h2>Join Hackatweet today.</h2>
          <button className={styles.btnUp} onClick={modaleSignup}>
            Sign up
          </button>
          {displaySignup ? <Signup modaleSignup={modaleSignup} /> : null}
          <p>Already have an account?</p>
          <button className={styles.btnIn} onClick={modaleSignin}>
            Sign in
          </button>
          {displaySignin ? <Signin modaleSignin={modaleSignin} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Login;
