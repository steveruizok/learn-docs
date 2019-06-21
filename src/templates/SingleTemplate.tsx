import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Layout } from "../components/Layout";

const MDXRenderer = require("gatsby-mdx/mdx-renderer");

type ContentTemplateProps = {
  readonly data: {
    readonly mdx: Markdown;
    readonly site: Site;
  };
};

const ContentTemplate = ({ data }: ContentTemplateProps) => {
  const {
    mdx: { frontmatter, code }
  } = data;

  return (
    <Layout>
      <Helmet title={`${frontmatter.title}`} />
      <h1 style={{ marginBottom: 60 }}>{frontmatter.title}</h1>
      <MDXRenderer>{code.body}</MDXRenderer>
    </Layout>
  );
};

export default ContentTemplate;

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
`;
