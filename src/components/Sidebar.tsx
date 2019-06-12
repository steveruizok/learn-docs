import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

type SidebarProps = {
  readonly edges: Edges<Markdown>;
};

const list = css`
  line-height: 1.8;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 3rem;
  text-align: right;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;

  & h3 {
    padding-bottom: 0.5em;
  }

  & a {
    text-decoration: none;
  }
`;

const item = css``;

export const Sidebar = ({ edges }: SidebarProps) => (
  <ul css={list}>
    {edges.map(({ node }) => {
      const { path, title } = node.frontmatter;
      return (
        <li css={item} key={path}>
          <Link
            style={{ color: "#3c3b68" }}
            activeStyle={{ color: "#0056fe" }}
            to={path}
          >
            <h3 style={{ color: "inherit" }}>{title}</h3>
          </Link>
        </li>
      );
    })}
  </ul>
);
