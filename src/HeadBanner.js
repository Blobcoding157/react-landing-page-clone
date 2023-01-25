/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const bannerStyles = css`
  background-color: #f9f7f1;
  color: #000;
  display: flex;
  z-index: 3;
  flex-direction: row;
  align-items: center;
  position: static;
  justify-content: space-between;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 1.7rem 3.45rem;
  }
`;
const logoContainer = css`
  cursor: pointer;
  padding: 0.3rem;
  transition: opacity 0.2s ease;
`;

const logoElement = css`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  max-width: 100%;
`;

const navElementStyles = css`
  list-style-type: none;
  display: flex;
  gap: 12px;

  cursor: pointer;
  font-size: 1.15rem;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Inter;
  font-weight: 400;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`;
const buttonStyles = css`
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  border: 0;
  display: block;
  width: 100%;
  color: #034f4d;
  background: #1fe7c3;
  border-radius: 6px;
  font-weight: bold;
  transition: background 100ms, box-shadow 100ms;
`;

const navigationStyles = css`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
`;

export default function HeadBanner() {
  return (
    <section css={bannerStyles}>
      <div css={logoContainer}>
        <img
          css={logoElement}
          alt="Landa"
          src="https://landa.app/_next/static/media/landa.25a72dc7.svg"
        />
      </div>
      <nav css={navigationStyles}>
        <div css={navElementStyles}>About us</div>
        <div css={navElementStyles}>Help</div>
        <div css={navElementStyles}>
          Learn
          <img
            alt="littleArrow"
            src="https://landa.app/_next/static/media/arrowDown.7802195b.svg"
          />
        </div>
        <div>
          <button css={buttonStyles}>Signup</button>
        </div>
      </nav>
    </section>
  );
}
