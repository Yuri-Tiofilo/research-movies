import React from 'react'
import { Helmet } from 'react-helmet'

// import { Container } from './styles';

type SeoProps = {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
  linkCanonical?: string
}

const Seo = ({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
  linkCanonical = 'https://seacrh-movies-q2.netlify.app'
}: SeoProps) => {
  console.log('veio aqui no seo')
  return (
    <div>
      <Helmet>
        {description && <meta name="description" content={description} />}
        {image && <meta name="image" content={image} />}
        <title>{title}</title>
        <link rel="canonical" href={linkCanonical} />

        {!shouldIndexPage && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>
    </div>
  )
}

export { Seo }
