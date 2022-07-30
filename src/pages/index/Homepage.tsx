import { Helmet } from "react-helmet";
import Header from "../../components/homepage/Header";
import BuyMeACoffeeSupport from "../../components/homepage/icon/BuyMeACoffee";
import GithubIcon from "../../components/homepage/icon/Github";
import ImageExample from "../../components/homepage/image_example/ImageExample";
import Title from "../../components/title/Title"
import styles from './HomePage.module.scss'
import StartButton from "../../components/homepage/startbutton/StartButton";
import { Link } from "react-router-dom";
const Homepage = () => {

    return (<div className={styles.main}>
        <Helmet>
          <title>Letter | Homepage</title>
        </Helmet>
        <div className={styles.App}>
          <div className={styles.container}>
            <Title />
            <div className={styles.Header}>
              <ImageExample/>
              <Header />
              <Link to="/writeletter" target="_blank">
                <StartButton />
              </Link>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <BuyMeACoffeeSupport/>
            <GithubIcon/>
          </div>
        </div>
      </div>)
}
export default Homepage;