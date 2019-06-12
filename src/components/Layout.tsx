import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { colors } from "./colors";

const wrapper = css`
  margin: 0 auto;
  max-width: 1260px;
  padding: 16px 1.0875rem 1.45rem;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 160px 1fr;
  grid-gap: 64px;

  & a {
    color: #131315;
  }

  & thead {
    color: ${colors.Dark};
    background-color: ${colors.Neutral};
  }

  & th {
    width: 156px;
    padding: 0.5 1em;
  }

  & th:first-of-type {
    padding-left: 1em;
  }

  & th:last-child {
    padding-right: 0em;
    width: auto;
  }

  tbody {
    border-spacing: 1px;
  }

  & td:first-of-type {
    padding-left: 1em;
  }

  & td {
    vertical-align: top;
    padding: 0.5 1em;
    border-bottom: 1px solid ${colors.Border};
  }

  & tr:last-child td {
    border-bottom: none;
  }

  & table {
    border-spacing: 0px;
    border-collapse: separate;
    background-color: #fdfdfd;
    border-radius: 8px;
    padding: 0;
    border: 1px solid ${colors.Border};
    width: 100%;
  }
`;

type LayoutProps = {
  readonly children?: React.ReactNode | ReadonlyArray<React.ReactNode>;
};

type RenderData = {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string;
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
                content: "Demo site for a Gatsby Starter in TypeScript"
              },
              {
                name: "keywords",
                content: "gatsby, gatsbyjs, sample, demo, typescript"
              }
            ]}
          />
          <Header title={data.site.siteMetadata.title} />
          <div css={wrapper}>
            <Sidebar edges={data.allMdx.edges} />
            <div>{children}</div>
          </div>
        </>
      );
    }}
  />
);
