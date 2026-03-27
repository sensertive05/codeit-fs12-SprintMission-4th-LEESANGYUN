import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BestProducts from "../components/market/BestProducts";
import ProductList from "../components/market/ProductList";
import styles from "./MarketPage.module.css";

export default function MarketPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <BestProducts />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}