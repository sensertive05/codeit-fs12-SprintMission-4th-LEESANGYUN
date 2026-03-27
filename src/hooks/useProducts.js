import { useState, useEffect } from "react";
import { getProducts } from "../api/products";

export function useProducts({ page, pageSize, orderBy, keyword }) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getProducts({ page, pageSize, orderBy, keyword })
      .then((data) => {
        setProducts(data.list);
        setTotalCount(data.totalCount);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [page, pageSize, orderBy, keyword]);

  return { products, totalCount, isLoading, error };
}