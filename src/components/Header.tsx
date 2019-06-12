import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
// @ts-ignore
import { Link } from 'gatsby'
import { LunrSearch } from './LunrSearch'

const style = {
  container: css`
    background: #0056fe;
    color: #3c3b68;
    margin-bottom: 1.45rem;
  `,
  wrapper: css`
    display: grid;
    grid-template-columns: auto 16rem;
    grid-template-rows: auto;
    align-items: center;
    height: 80px;
    padding: 0px 1.2em;
    margin: 0 auto;
    max-width: 960px;
  `,
  title: css`
    margin: 0;
    display: inline-block;
  `
}

const TitleLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:active,
  &:hover {
    color: #fff;
  }
`

type HeaderProps = {
  readonly title: string
}

export const Header = ({ title }: HeaderProps) => (
  <div css={style.container}>
    <div css={style.wrapper}>
      <h3 css={style.title}>
        <TitleLink to="/">{title}</TitleLink>
      </h3>
      <LunrSearch limit={10} />
    </div>
  </div>
)
