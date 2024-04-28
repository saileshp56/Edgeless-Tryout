import * as React from "react";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
  return (
    <div className={styles.div}>
      <div className={styles["logo-box"]}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c222e5c882195ac43748be8384dec5c081c1c628e39f2eeb91511c928a9caf?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
          className={styles.logo}
        />
      </div>
      <div className={styles["search-bar"]}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/47f8781bf975ae0f5626728aed39b39e7ae40e12cf549240046b90dff8329100?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
          className={styles["magnifying-glass"]}
        />
        <input
          type="text"
          placeholder="Search by markets, name or keywords"
          className={styles.input}
        />
      </div>
      <div className={styles["empty-block"]}></div>
      <div className={styles["nav-link"]}>
        <button className={styles["div-7"]}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e79a49bf024438698850dd5ad5f14d407fb29f63d6a8dceeb436bfa3d223f0?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles["img-3"]}
          />
          Markets
        </button>
        <button className={styles["div-9"]}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b3077c22d476fe51efbb6314a3739d0058b3be5e1b4da157f558949b96e6bff?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles["img-4"]}
          />
          Activity
        </button>
        <button className={styles["div-11"]}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc9c911dbbb43ef5c12b393f4a9dced79b407a12b05f2753853c02d787b45833?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles["img-5"]}
          />
          Ranks
        </button>
        <button className={styles["div-13"]}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0060797cee1910bfa33c5a33e9afb531e4c669811d6ffa79a3f74dab1e872bcf?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles["img-6"]}
          />
          Favourites
        </button>
      </div>
      <div className={styles["div-15"]}>
        <div className={styles["div-16"]}>
          <button className={styles["create-button"]}>Create</button>
          <button className={styles["log-in-button"]}>Log In</button>
          <button className={styles["sign-up-button"]}>Sign Up</button>
        </div>
        <button className={styles["img-7-button"]}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56aebbb003eea6f28d0712a05e0a7dce2371ad46f9989d2850e13e554cffc555?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles["img-7"]}
          />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
