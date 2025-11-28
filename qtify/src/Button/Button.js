import styles from "./Button.module.css";

export default function Button ({Text, handleClick}) {
    return (
        <button className={styles.feedBack} onClick={handleClick}>{Text}</button>
    )
};