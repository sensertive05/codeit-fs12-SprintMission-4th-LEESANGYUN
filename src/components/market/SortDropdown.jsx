import { useState } from "react";
import styles from "./SortDropdown.module.css";

const OPTIONS = [
  { label: "최신순", value: "recent" },
  { label: "좋아요순", value: "favorite" },
];

export default function SortDropdown({ orderBy, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = OPTIONS.find((opt) => opt.value === orderBy)?.label;

  const handleSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setIsOpen((prev) => !prev)}>
        {selectedLabel}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>▼</span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {OPTIONS.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.option} ${opt.value === orderBy ? styles.active : ""}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}