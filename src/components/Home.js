import * as React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MarketsNavBar from "./MarketsNavBar";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles["home-container"]}>
        <NavBar/>
        <div className={styles["content-container"]}>
          <div className={styles["content-sub-container"]}>
            <div className={styles["column"]}>
              <SideBar />
            </div>
            <div className={styles["column-2"]}>
              <MarketsNavBar />
              <div className={styles["grid-container"]}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className={styles["grid-item"]}>
                    Bet Opportunity {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
