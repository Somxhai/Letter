import styles from "./LetterPage.module.scss";
import LetterTitle from "../../components/title/LetterTitle";
import { useState } from "react";
const LetterPage = () => {
  const [letter, setLetter] = useState(0);
  function onType() {
    let text:string = (document.getElementById("textarea") as HTMLInputElement).value;
    setLetter(text.length);
    // let refactor_str:string = text.replace(/\s+/g,' ').trim();
    return text;
  }
  return (
    <div className={styles.title}>
      <LetterTitle />
      <div className={styles.form}>
        <form>
          <div className={styles.wrapper}>
            <textarea
            onChange={onType}
            id="textarea"
              autoFocus={true}
              rows={5}
              cols={60}
              name="string"
              placeholder="write your letter here!"
            />
            <div id="count">{letter}/300</div>
            <br />
            <input type="submit" value="send the letter" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LetterPage;
