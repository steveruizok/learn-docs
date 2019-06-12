import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Layout } from '../components/Layout'

const MDXRenderer = require('gatsby-mdx/mdx-renderer')

type PageTemplateProps = {
  readonly data: {
    readonly mdx: Markdown
    readonly site: Site
  }
}

const PageTemplate = ({ data }: PageTemplateProps) => {
  const {
    mdx: { frontmatter, code }
  } = data

  return (
    <Layout>
      <Helmet title={`${frontmatter.title}`} />
      <h1>{frontmatter.title}</h1>
      <MDXRenderer>{code.body}</MDXRenderer>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      code {
        body
      }
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        path
        title
      }
    }
  }
`
