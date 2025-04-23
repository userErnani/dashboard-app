import { useRouter } from 'next/router';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const hideSidebar = router.pathname === '/login';

  return (
    <>
      {!hideSidebar ? (
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
