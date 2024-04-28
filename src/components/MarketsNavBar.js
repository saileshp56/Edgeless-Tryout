import * as React from "react";
import styles from "../styles/MarketsNavBar.module.css";

const tags = [
  { name: "All markets", color: "black" },
  { name: "US Presidential Election", color: "light" },
  { name: "Joe Biden", color: "light" },
  { name: "Liquidity", color: "light" },
  { name: "Business", color: "light" },
  { name: "Global Economics", color: "light" },
  { name: "China", color: "light" },
  { name: "Donald Trump", color: "light" },
  { name: "Europe", color: "light" },
  { name: "Dollar", color: "light" },
];

const Tag = ({ name, color }) => (
  <button className={`${styles.tag} ${color === "black" ? styles["tag-black"] : styles["tag-light"]}`}>
    {name}
  </button>
);

const MarketsNavBar = () => {
  return (
    <>
      <div className={styles["tags-container"]}>
        <button className={styles["icon-wrapper"]}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf2c057d79b89a1cb9758fc696071247ff76f6da29591a3ea0b5ce289417f488?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&"
            className={styles.icon}
            alt="Menu icon"
          />
        </button>
        <div className={styles["divider-line"]}></div>
        <div className={styles["tags-list"]}>
          {tags.map((tag, index) => (
            <Tag key={index} name={tag.name} color={tag.color} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MarketsNavBar;
