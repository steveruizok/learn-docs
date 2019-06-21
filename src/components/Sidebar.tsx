import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { Logo } from "./Logo";

type SidebarProps = {
  readonly edges: Edges<Markdown>;
};

const list = css`
  line-height: 1.8;
  list-style: none;
  padding-top: 8px;
  margin: 16px 0 3rem;
  text-align: left;

  & h4 {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 0em;
  }

  & a {
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export const Sidebar = ({ edges }: SidebarProps) => (
  <ul css={list}>
    <li>
      <Link to="/">
        <Logo />
      </Link>
    </li>
    {edges.map(({ node }) => {
      const { path, title } = node.frontmatter;
      return (
        <li key={path} style={{ paddingLeft: 8 }}>
          <Link
            style={{ color: "#555555" }}
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
