import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
// @ts-ignore
import { Link } from "gatsby";
import { Logo } from "./Logo";
// import { LunrSearch } from "./LunrSearch";

const style = {
  container: css`
    background: #0056fe;
    color: #3c3b68;
  `,
  wrapper: css`
    display: grid;
    grid-template-columns: 48px 1fr 16rem;
    grid-template-rows: 80px;
    grid-gap: 16px;
    align-items: center;
    height: 80px;
    padding: 0px 1.2em;
    margin: 0 auto;
    max-width: 1260px;
  `,
  title: css`
    margin: 0;
    min-width: 256px;
    display: inline-block;
  `
};

const TitleLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:active,
  &:hover {
    color: #fff;
  }
`;

type HeaderProps = {
  readonly title: string;
};

export const Header = ({ title }: HeaderProps) => (
  <div css={style.container}>
    <div css={style.wrapper}>
      <div
        css={css`
          width: 48px;
          height: 48px;
        `}
      >
        <TitleLink to="/">
          <Logo />
        </TitleLink>
      </div>
    </div>

    {/* <LunrSearch limit={10} /> */}
  </div>
);
