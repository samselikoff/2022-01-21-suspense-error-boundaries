import Head from "next/head";
import { useEffect, useState } from "react";
import { SWRConfig } from "swr";
import "tailwindcss/tailwind.css";
import "../../mirage";

let isClient = typeof window !== "undefined";

export default function App(props) {
  let [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <>
      <Head>
        {process.env.NODE_ENV !== "production" && (
          <script
            dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }}
          />
        )}
      </Head>

      {isClient && !isFirstRender ? (
        <SWRConfig
          value={{
            fetcher: (...args) =>
              fetch(...args).then((res) => {
                if (res.ok) {
                  return res.json();
                } else {
                  throw new Error("Fetch failed");
                }
              }),
          }}
        >
          <AppInner {...props} />
        </SWRConfig>
      ) : null}
    </>
  );
}

function AppInner({ Component, pageProps }) {
  return (
    <div className="flex justify-center w-full min-h-screen pt-8 antialiased xs:px-20 sm:px-10 md:pt-28 bg-slate-100">
      <div className="w-full max-w-sm px-8">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

const noOverlayWorkaroundScript = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })
`;
