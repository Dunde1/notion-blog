import "@common/styles/index.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { CustomHead } from "@components/others";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CustomHead path={pathname} />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
