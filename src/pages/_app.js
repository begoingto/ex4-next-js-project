import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {

  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (<Layout>
    <Component {...pageProps} />
  </Layout>)
}
