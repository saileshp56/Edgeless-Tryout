import * as React from "react";
import styles from "../styles/SideBar.module.css";

const SideBar = () => {
  return (
    <>
      <div className={styles.div}>
        <div className={styles["div-2"]}>
          <input
            type="text"
            placeholder="Search by markets"
            className={styles.input}
          />
        </div>

        <div className={styles["div-4"]}>
          <div className={styles["div-5"]}>Sort by</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ae576d00460970af93bfd02f281f5dae8d7c4bd3e8b0bee15554a743f34d41e?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles.img}
          />
        </div>
        <div className={styles["combined-div"]}>

          <div className={styles["div-6"]}>
            <button className={styles["div-7"]}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e819afa091a2bbeb1977b68ff45934acb0ddb96c29794d431eb5506f86eb63a?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
                className={styles.img}
              />
              <div className={styles["div-8"]}>Trending</div>
            </button>
            <button className={styles["div-9"]}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5e12c28916edbd96fea24cf2ec4a7adb9fe0751b4476e01b79256e1ab8726a9?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
                className={styles.img}
              />
              <div className={styles["div-10"]}>Liquidity</div>
            </button>
          </div>
          <div className={styles["div-11"]}>
            <div className={styles["div-12"]}>
              <button className={styles["div-13"]}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a62c2f4ab6c19243fe69a7fe131fabc6b6bb652d5db1082b03396fc0724e226?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
                  className={styles.img}
                />
                <div className={styles["div-14"]}>Volume</div>
              </button>
              <button className={styles["div-15"]}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4582468e67058e464337635aab6bd960b90d65bd5f47ff51015fa033e9c31803?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
                  className={styles.img}
                />
                <div className={styles["div-16"]}>Ending</div>
              </button>
            </div>
            <div className={styles["div-17"]}>
              <button className={styles["div-18"]}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8025588ea18bf6f982862293b9c96ccae68b1ad1e7ef6531cdd86778ed61a47?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
                  className={styles.img}
                />
                <div className={styles["div-19"]}>Newest</div>
              </button>
              <button className={styles["div-20"]}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d56b448fb970651b4d29e95a8d9cf83be12045271cbe896a8f0af422bbd9524f?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
                  className={styles.img}
                />
                <div className={styles["div-21"]}>Competitive</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles["div-22"]}>
          <div className={styles["div-23"]}>End Date</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ae576d00460970af93bfd02f281f5dae8d7c4bd3e8b0bee15554a743f34d41e?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles.img}
          />
        </div>
        <div className={styles["div-24"]}>
          <div className={styles["radio-group"]}>
            <label className={styles["radio-label"]}>
              <span className={styles["radio-text"]}>Any</span>
              <input type="radio" name="dateFilter" className={styles["radio-input"]} />
            </label>
            <label className={styles["radio-label"]}>
              <span className={styles["radio-text"]}>Ends today</span>
              <input type="radio" name="dateFilter" className={styles["radio-input"]} />
            </label>
            <label className={styles["radio-label"]}>
              <span className={styles["radio-text"]}>Ends this week</span>
              <input type="radio" name="dateFilter" className={styles["radio-input"]} />
            </label>
            <label className={styles["radio-label"]}>
              <span className={styles["radio-text"]}>Ends this month</span>
              <input type="radio" name="dateFilter" className={styles["radio-input"]} />
            </label>
          </div>
        </div>
        <div className={styles["div-37"]}>
          <label className={styles["div-38"]}>
            <input type="text" className={styles["input-date"]} placeholder="Start date"/>
          </label>
          <div className={styles["div-39"]}>To</div>
          <label className={styles["div-40"]}>
            <input type="text" className={styles["input-date"]} placeholder="End date"/>
          </label>
        </div>
        <button className={styles["div-41"]}>Apply Options</button>
        <div className={styles["div-42"]}>
          <div className={styles["div-43"]}>Status</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5acdccba4e28dfb08c8d26f193c7bd0408a6d394c49c9816178067809de7863b?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles.img}
          />
        </div>
        <div className={styles["div-44"]}>
          <div className={styles["div-45"]}>Topics</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4dca16e27b8651f5838e77f9e1d8f21ae8d24a4c55ba7cc4ec9adf2baa5317e?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
}

export default SideBar;
