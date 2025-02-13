import styles from "../styles/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faX } from "@fortawesome/free-solid-svg-icons";

function Signup(props) {
  function closeModale() {
    props.modaleSignup();
  }

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
          <input className={styles.input} type="text" placeholder="Firstname" />
          <input className={styles.input} type="text" placeholder="Username" />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <button className={styles.btnUp}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
