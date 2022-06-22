import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { IPage } from '../../constants/pages';
import { getCurrentPage } from '../../helpers/getCurrentPage';

interface IProps { }

export const HeadPageTitle = (props: IProps) => {
  const { asPath: currentRoute } = useRouter();
  let title: string;

  if (currentRoute === '/') {
    title = 'Gaferbras | Tecnologia em Ferramentaria'
  } else {
    const currentPage: IPage | undefined = getCurrentPage(currentRoute);
    
    if (currentPage) {
      title = `${currentPage.title} | Gaferbras`
    } else {
      title = 'Gaferbras | Tecnologia em Ferramentaria'
    }
  }


  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}