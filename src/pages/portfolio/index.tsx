import Head from "next/head";
import portfolio from '@/data/portfolio.json';
import ListChrono from "@/components/lists/listChrono/listChrono";

export default function Portfolio() {
  return(
    <>
      <Head>
        <title>Portfolio | Kevin Oliveira</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>
            <strong>Portfolio</strong>
          </h1>

          <ListChrono list={portfolio} />
        </div>
      </div>
    </>
  )
}