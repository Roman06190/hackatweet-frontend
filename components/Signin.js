import styles from "../styles/Signin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Signin(props) {
  const dispatch = useDispatch();
  const [usernameIn, setUsernameIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");

  function closeModale() {
    props.modaleSignin();
  }

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameIn,
        password: passwordIn,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          window.location.href = "/home";
        }
      });
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <div className={styles.delete}>
          <FontAwesomeIcon
            className={styles.iconDelete}
            onClick={closeModale}
            icon={faX}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className={styles.form}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faDove}
            rotation={180}
            style={{ color: "#ffffff" }}
          />
          <h2>Connect to Hackatweet</h2>
          <input
            onChange={(e) => setUsernameIn(e.target.value)}
            value={usernameIn}
            className={styles.input}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPasswordIn(e.target.value)}
            value={passwordIn}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <button onClick={() => handleConnection()} className={styles.btnUp}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
