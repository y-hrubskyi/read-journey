import { useSearchParams } from "react-router-dom";

export const useBookFilters = () => {
  const [params, setParams] = useSearchParams();
  const title = params.get("title") ?? "";
  const author = params.get("author") ?? "";

  const setBookFilter = (key, value) => {
    if (value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setParams(params);
  };

  const resetBookFilters = () => {
    setParams({ title: "", author: "" });
  };

  return { title, author, setBookFilter, resetBookFilters };
};
