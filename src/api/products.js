const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({ page = 1, pageSize = 10, orderBy = "recent", keyword = "" }) {
  const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
  const response = await fetch(`${BASE_URL}/products?${params}`);

  if (!response.ok) {
    throw new Error("상품 목록을 불러오는데 실패했습니다.");
  }

  return response.json(); // { totalCount, list }
}