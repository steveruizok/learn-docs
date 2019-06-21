import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { colors } from "./colors";

const wrapper = css`
  margin: 0 auto;
  max-width: 1080px;
  padding: 0em 1.0875rem 1.45rem;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 160px 1fr;
  grid-gap: 64px;

  & a {
    color: #131315;
  }

  & thead {
    color: ${colors.Dark};
    background-color: #f3f3fa;
  }

  & th:first-of-type {
    width: 156px;
    padding-left: 1em;
  }

  & th {
    width: 200px;
    padding: 1em;
  }

  & th:last-child {
    padding-right: 1em;
    width: auto;
    border-right: none;
  }

  tbody {
    border-spacing: 1px;
  }

  & td:first-of-type {
    padding-left: 1em;
  }

  & td {
    vertical-align: top;
    padding: 1em;
    border-bottom: 1px solid ${colors.Border};
  }

  & td:last-of-type {
    padding-right: 1em;
    border-right: none;
  }

  & tr:last-child td {
    border-bottom: none;
  }

  & table {
    border-spacing: 0px;
    border-collapse: separate;
    background-color: #fdfdfd;
    border-radius: 4px;
    padding: 0;
    border: 1px solid ${colors.Border};
    width: 100%;
    overflow: hidden;
  }

  & ol {
    margin: 2em 0 2em 2.5em;
  }
`;

type LayoutProps = {
  readonly children?: React.ReactNode | ReadonlyArray<React.ReactNode>;
};

type RenderData = {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string;
      readonly description: string;
      readonly keywords: string;
    };
  };
  allMdx: any;
};

export const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(
          sort: { order: ASC, fields: [frontmatter___title] }
          limit: 2000
        ) {
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
    `}
    render={(data: RenderData) => {
      return (
        <>
          <Helmet
            titleTemplate={`%s - ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
            meta={[
              {
                name: "description",
                content: data.site.siteMetadata.description
              },
              {
                name: "keywords",
                content: data.site.siteMetadata.keywords
              }
            ]}
          />
          {/* <Header title={data.site.siteMetadata.title} /> */}
          <div css={wrapper}>
            <Sidebar edges={data.allMdx.edges} />
            <div style={{ paddingTop: "8px" }}>{children}</div>
          </div>
        </>
      );
    }}
  />
);
