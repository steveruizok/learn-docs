import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

type SidebarProps = {
  readonly edges: Edges<Markdown>;
};

const list = css`
  line-height: 1.8;
  list-style: none;
  padding-top: 8px;
  margin: 0rem 0 3rem;
  text-align: left;

  & h4 {
    padding-bottom: 0.35em;
  }

  & a {
    text-decoration: none;
  }
`;

export const Sidebar = ({ edges }: SidebarProps) => (
  <ul css={list}>
    {edges.map(({ node }) => {
      const { path, title } = node.frontmatter;
      return (
        <li key={path}>
          <Link
            style={{ color: "#444444" }}
            activeStyle={{ color: "#0056fe" }}
            to={path}
          >
            <h4 style={{ color: "inherit" }}>{title}</h4>
          </Link>
        </li>
      );
    })}
  </ul>
);
