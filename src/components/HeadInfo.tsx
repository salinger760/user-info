import React from 'react'
import Head from 'next/head'

type Props = {
  siteTitle?: string
  pageDescription?: string
  pageBaseUrl?: string
  pagePath?: string
  pageImg?: string
  pageType?: string
  pageImgWidth?: number
  pageImgHeight?: number
}

const defaultTitle = 'demo title'
const defaultDescription = 'demo description'

const HeadInfo = ({
  siteTitle,
  pageDescription,
  pageBaseUrl,
  pagePath,
  pageImg,
  pageType,
  pageImgWidth,
  pageImgHeight,
}: Props): JSX.Element => {
  const title = siteTitle ? `${siteTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const baseUrl = pageBaseUrl ? pageBaseUrl : ''
  const path = pagePath ? pagePath : ''
  const type = pageType ? pageType : 'website'
  const imgUrl = pageImg ? pageImg : `${pageBaseUrl}/common/logo.png`
  const imgWidth = pageImgWidth ? pageImgWidth : 1200
  const imgHeight = pageImgHeight ? pageImgHeight : 640

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{siteTitle}</title>
      <meta name="keywords" content="" />
      <meta name="description" content={defaultTitle} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta
        name="format-detection"
        content="telephone=no,address=no,email=no"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default HeadInfo
