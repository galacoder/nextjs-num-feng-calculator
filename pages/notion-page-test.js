import React from "react";
import Head from "next/head";
import Layout from "../layout/Layout";

import { getPageTitle, getAllPagesInSpace } from "notion-utils";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const pageId = "0d71a213ad3943a0b6fac23be9db7d11";
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function NotionPage({ recordMap }) {
  if (!recordMap) {
    return null;
  }
  const title = getPageTitle(recordMap);
  console.log(title, recordMap);

  return (
    <>
      <Head>
        <meta name="description" content="Galatek Website" />
        <title>{title}</title>
      </Head>

      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </>
  );
}
