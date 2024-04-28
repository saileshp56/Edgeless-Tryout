import * as React from "react";
import styles from "../styles/Withdraw.module.css"

const WithdrawAmount = ({ amount, balance, currency }) => {
  return (
    <div className={styles["deposit-amount"]}>
      <div className={styles["amount"]}><input type="number" placeholder="0.0"/></div>
      <div className={styles["balance-info"]}>
        <div className={styles["balance"]}>
          <span className={styles["label"]}>Balance:{" "}</span>
          <span className={styles["value"]}>{balance}</span>
        </div>
        <div className={styles["currency-info"]}>
          <button className={styles["max-button"]}>Max</button>
          <div className={styles["currency"]}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cedd063c4dafbfc97de2464a465dfcf0edec6d21ed0be75e3c0dd9e4e9935639?apiKey=2f8bf3435d9d4c40a340203ca27ec7bb&" alt="" className={styles["currency-icon"]} />
            <div className={styles["currency-code"]}>{currency}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Withdraw = () => {
  const depositData = {
    amount: "0.654",
    balance: "0.654",
    currency: "SOL",
  };

  return (
    <>
      <div className={styles["deposit-card"]}>
        <header className={styles["card-header"]}>
        <div className={styles["card-header-label"]}>
          Withdraw
          </div>
        </header>
        <div className={styles["amount-label"]}>Amount</div>
        <WithdrawAmount {...depositData} />
        <div className={styles["address-label"]}>Address</div>
        <div className={styles["address-value"]}>
      <div className={styles["address-input"]}>
        <input type="text" placeholder="0x0"/>
        </div>

        <div className={styles["currency-info"]}>

            <div className={styles["disconnect-wrapper"]}>

            <button className={styles["disconnect-code"]}>disconnect</button>
            </div>
            </div>

        
        </div>

        
       


        <button className={styles["deposit-button"]}>Withdraw</button>
        <div className={styles["terms-notice"]}>
          <span className={styles["underline"]}>Terms & conditions</span> apply
        </div>
      </div>

  
    </>
  );
}


export default Withdraw;