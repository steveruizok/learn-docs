import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const wrapper = css`
  margin: 0 auto;
  max-width: 1260px;
  padding: 16px 1.0875rem 1.45rem;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 160px 1fr;
  grid-gap: 64px;

  & table {
    width: 100%;
    table-layout: fixed;
  }

  & a {
    color: #131315;
  }

  & th {
    width: 184px;
  }

  & th:last-child {
    width: auto;
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
