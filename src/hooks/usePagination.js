import { useSearchParams } from "react-router-dom";

import { BooksLimit } from "@/config/pagination/limits";
import { getDeviceType } from "@/utils/getDeviceType";

export const usePagination = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page") ?? 1;
  const limit = params.get("limit") ?? BooksLimit[getDeviceType()];

  const setPage = (value) => {
    params.set("page", value);
    setParams(params);
  };

  const setLimit = (value) => {
    params.set("limit", value);
    setParams(params);
  };

  return {
    page: Number(page),
    limit: Number(limit),
    setPage,
    setLimit,
  };
};
