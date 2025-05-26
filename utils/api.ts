export const useApi = () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase;

  return {
    get: <T>(url: string) => $fetch<T>(`${baseUrl}${url}`),
  };
};
