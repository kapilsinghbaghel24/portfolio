import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children}) => {

  return (
    <>
      <Head>
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
