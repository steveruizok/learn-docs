import * as React from "react";

// @ts-ignore
import { Link, graphql } from "gatsby";
import { Layout } from "../components/Layout";

export const IndexPage = (props: any) => {
  return (
    <>
      <h1 style={{ marginBottom: 60 }}>Welcome</h1>
      <p>
        Welcome to the <b>Learn Design System</b> docs. The Learn Design System
        is a set of components designed to get you started prototyping with
        Framer X.
      </p>
      <p>
        On this page, you’ll find information on each of the components included
        in the Learn Design System. This page also includes information on
        colors, inputs and patterns of use.
      </p>
      <h2>Installation</h2>
      You can install the{" "}
      <a
        target="_blank"
        href="https://store.framer.com/package/steveruizok/education"
      >
        Learn Design System package
      </a>{" "}
      through the Framer X Store.
      <ol>
        <li>Open a Framer X project.</li>
        <li>Click the Store tab to open the Framer X Store.</li>
        <li>Search for "Learn".</li>
        <li>Click on the Learn Design System link .</li>
        <li>Click the Install button.</li>
        <li>
          When the install completes, open the components list in your project
          to see all of the package's components.
        </li>
      </ol>
      <h2>Source</h2>
      <p>
        You can find source files for the Learn Design System on its{" "}
        <a target="_blank" href="https://github.com/framer/framer-education">
          Github repository
        </a>
        .
      </p>
      <h2>Community</h2>
      <p>
        Visit our Spectrum channel to discuss the Learn Design System, connect
        with other users or find help with your projects.
      </p>
      <p>
        If you spot any errors in the package or in these docs, please let me
        know in the Spectrum channel, on Twitter at
        <a target="_blank" href="https://twitter.com/steveruizok">
          @steveruizok
        </a>{" "}
        or by email at steve@framer.com.
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
