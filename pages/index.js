import React from "react";
import Layout from "../layout/Layout";
import Welcome from "./welcome";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sang Le Tech</title>
        <meta name="Description" content="SLT Numerology Fengshui Calculator" />
      </Head>
      <Welcome />
    </Layout>
  );
}

// // DOCUMENTATION: http://styletron.org

// import { styled, useStyletron } from 'styletron-react'

// // statically styled component
// const Title = styled('h1', {
//   color: 'red',
//   fontSize: '82px',
// })

// // dynamically styled component
// const SubTitle = styled('h2', ({ $size }) => ({
//   color: 'blue',
//   fontSize: `${$size}px`,
// }))

// export default function Home() {
//   // an alternative hook based API
//   const [css] = useStyletron()
//   return (
//     <div>
//       <Title>Title</Title>
//       <SubTitle $size={50}>Subtitle</SubTitle>
//       <p className={css({ fontSize: '32px' })}>Styled by hook</p>
//     </div>
//   )
// }
