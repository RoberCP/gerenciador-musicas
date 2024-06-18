import "@/styles/globals.css";
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { AuthProvider } from "@/components/authContext";
import NavBar from "@/components/navBar";

function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return (
    <AuthProvider>
      {render ? (
        <>
          <NavBar />
          <Component {...pageProps} />
        </>
      ) : null}
    </AuthProvider>
  );
}
export default App;