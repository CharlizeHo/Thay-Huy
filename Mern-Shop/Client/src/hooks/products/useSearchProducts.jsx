import { useQuery } from "@tanstack/react-query";
import useDebounce from "../useDebounce";
import { searchProducts } from "../../services/productService";

const useSearchProducts = (searchString, delay = 500) => {
    const debouncedSearchTerm = useDebounce(searchString, delay);
  
    const { data, isLoading } = useQuery({
      queryKey: ["products", { q: debouncedSearchTerm }],
      queryFn: () => searchProducts(searchString),
      // return axios.get("/products/search", { params: { q: searchString } });
    });
    return {data, isLoading}
  };

export default useSearchProducts