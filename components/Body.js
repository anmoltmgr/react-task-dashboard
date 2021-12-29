import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Board from "./Board";

import Midbar from "./midbar";
const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigationbar}>
        <Navbar />
      </div>
      <div>
        <Midbar />
      </div>
      <div>
        <Board />
      </div>
    </div>
  );
};

export default Body;
