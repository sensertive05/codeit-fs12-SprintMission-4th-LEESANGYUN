import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(value.trim());
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    // 검색어 지웠을 때 바로 전체 목록으로 복귀
    if (e.target.value === "") {
      onSearch("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>🔍</span>
      <input
        className={styles.input}
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}