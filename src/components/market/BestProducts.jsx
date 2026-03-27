import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import styles from "./BestProducts.module.css";

// 화면 크기별로 보여줄 상품 수
function getBestPageSize() {
  const width = window.innerWidth;
  if (width >= 1200) return 4; // PC: 4개
  if (width >= 768) return 2;  // Tablet: 2개
  return 1;                    // Mobile: 1개
}

export default function BestProducts() {
  const pageSize = getBestPageSize();
  const { products, isLoading, error } = useProducts({
    page: 1,
    pageSize,
    orderBy: "favorite",
    keyword: "",
  });

  if (isLoading) return <p className={styles.message}>불러오는 중...</p>;
  if (error) return <p className={styles.message}>{error}</p>;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>베스트 상품</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}