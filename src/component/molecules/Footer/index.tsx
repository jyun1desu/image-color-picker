import React from "react";
import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Copyright © 2021 - jyun1desu</span>
      <span className={styles.dividedLine}>|</span>
      <a
        href="https://github.com/jyun1desu/image-color-picker"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </footer>
  );
}
