import styles from "./Header.module.scss";
import StartButton from "./startbutton/StartButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.Header}>
        A Fun Way To A Send <span className={styles.Span}>Letter</span>✉️
        <br />
        <br />
        <p>*no registration required* 🥰</p>
      </h1>
    </div>
  );
};
export default Header;
