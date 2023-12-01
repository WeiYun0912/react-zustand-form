import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const apiUrl = "https://dummyjson.com/products/";

const useProduct = create(
  persist(
    (set) => ({
      products: [],
      getProducts: async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        set({ products: data.products });
      },
    }),
    {
      name: "products",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProduct;
