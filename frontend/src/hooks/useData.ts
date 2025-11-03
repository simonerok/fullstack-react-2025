import { useEffect, useState } from "react";

import type { AxiosRequestConfig } from "axios";
import { CanceledError } from "axios";

import { axiosClient } from "../services/api-client";
import type { Response } from "../services/api-client";

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      axiosClient
        .get<Response<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res: { data: Response<T> }) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err: unknown) => {
          if (err instanceof CanceledError) return;
          const message = err instanceof Error ? err.message : String(err);
          setError(message);
          console.log(err);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
