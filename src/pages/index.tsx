import * as React from "react";

// @ts-ignore
import { Link, graphql } from "gatsby";
import { Layout } from "../components/Layout";

export const IndexPage = (props: any) => {
  return (
    <>
      <h1>Welcome</h1>
      <p>
        Welcome to the <b>Learn Design System</b> docs.
      </p>

      <p>
        On this page, you’ll find information on each component included in the
        Learn Design System, together with information on colors, inputs and
        patterns of use.
      </p>

      <h2>Installation</h2>

      <p>
        Open Framer X Store and{" "}
        <a
          target="_blank"
          href="https://store.framer.com/package/steveruizok/education"
        >
          install the Learn package
        </a>
      </p>
    </>
  );
};

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
);

export default LayoutIndexPage;

export const pageQuery = graphql`
  query {
    home: allMdx(filter: { frontmatter: { title: { eq: "Home" } } }, limit: 1) {
      edges {
        node {
          id
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            date(formatString: "MMMM D, YYYY")
            tags
          }
        }
      }
    }
  }
`;
