import styles from "../styles/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";

function Signup(props) {
  const dispatch = useDispatch();
  const [firstnameUp, setFirstnameUp] = useState("");
  const [usernameUp, setUsernameUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");

  function closeModale() {
    props.modaleSignup();
  }

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstnameUp,
        username: usernameUp,
        password: passwordUp,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              firstname: firstnameUp,
              username: usernameUp,
              token: data.token,
            })
          );
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
          <h2>Create your Hackatweet account</h2>
          <input
            onChange={(e) => setFirstnameUp(e.target.value)}
            value={firstnameUp}
            className={styles.input}
            type="text"
            placeholder="Firstname"
          />
          <input
            onChange={(e) => setUsernameUp(e.target.value)}
            value={usernameUp}
            className={styles.input}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPasswordUp(e.target.value)}
            value={passwordUp}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <button onClick={() => handleRegister()} className={styles.btnUp}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
