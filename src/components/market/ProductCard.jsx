import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { name, price, images, favoriteCount } = product;

  const imageUrl = images?.[0] ?? "/default-image.png";
  const formattedPrice = price.toLocaleString("ko-KR");

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{formattedPrice}원</p>
        <p className={styles.favorite}>❤️ {favoriteCount}</p>
      </div>
    </div>
  );
}