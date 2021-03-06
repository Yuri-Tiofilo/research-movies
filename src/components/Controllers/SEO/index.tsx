import React from 'react'
import { Helmet } from 'react-helmet'

type SeoProps = {
  title?: string
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
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? '| Search Movies' : ''
  }`

  return (
    <Helmet>
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      <title>{pageTitle}</title>
      <link rel="canonical" href={linkCanonical} />

      {!shouldIndexPage && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  )
}

export { Seo }
