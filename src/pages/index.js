import Head from 'next/head';
import ProductList from '@container/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yardsales</title>
      </Head>
      <ProductList />
    </>
  );
}
