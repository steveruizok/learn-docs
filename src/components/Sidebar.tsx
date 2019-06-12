import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

type SidebarProps = {
  readonly edges: Edges<Markdown>
}

const list = css`
  line-height: 1.8;
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
  font-family: 'Merriweather Sans', Arial, Helvetica, sans-serif;

  & a {
    text-decoration: none;
  }
`

const item = css``

export const Sidebar = ({ edges }: SidebarProps) => (
  <ul css={list}>
    {edges.map(({ node }) => {
      const { path, title } = node.frontmatter
      return (
        <li css={item} key={path}>
          <Link activeStyle={{ color: '#0056fe' }} to={path}>
            {title}
          </Link>
        </li>
      )
    })}
  </ul>
)
