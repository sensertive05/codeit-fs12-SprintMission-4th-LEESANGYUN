import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";
import styles from "./ProductList.module.css";

const PAGE_SIZE = 10;

export default function ProductList() {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");

  const { products, totalCount, isLoading, error } = useProducts({
    page,
    pageSize: PAGE_SIZE,
    orderBy,
    keyword,
  });

  const handleSearch = (value) => {
    setKeyword(value);
    setPage(1); // 검색 시 1페이지로 초기화
  };

  const handleSortChange = (value) => {
    setOrderBy(value);
    setPage(1); // 정렬 변경 시 1페이지로 초기화
  };

  return (
    <section className={styles.section}>
      {/* 헤더: 타이틀 + 검색 + 정렬 */}
      <div className={styles.header}>
        <h2 className={styles.title}>전체 상품</h2>
        <div className={styles.controls}>
          <SearchBar onSearch={handleSearch} />
          <SortDropdown orderBy={orderBy} onSortChange={handleSortChange} />
        </div>
      </div>

      {/* 상품 목록 */}
      {isLoading && <p className={styles.message}>불러오는 중...</p>}
      {error && <p className={styles.message}>{error}</p>}
      {!isLoading && !error && products.length === 0 && (
        <p className={styles.message}>검색 결과가 없습니다.</p>
      )}
      {!isLoading && !error && products.length > 0 && (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* 페이지네이션 */}
      <Pagination
        currentPage={page}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
      />
    </section>
  );
}