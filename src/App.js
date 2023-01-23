/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import hero from './media/hero.mp4';

const bannerSectionStyles = css`
  background-color: azure;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

const navigationBannerElementStyles = css`
  list-style-type: none;
  display: flex;
  gap: 12px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Inter;

  cursor: pointer;
  font-size: 1.15rem;

  font-weight: 400;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`;
const navigationBannerButtonStyles = css`
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

const navigationBannerStyles = css`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
`;
const mainHeaderStyles = css`
  font-size: 3.43rem;
  line-height: 1.1;
  color: #034f4d;
  margin: 2rem;

  margin: 2rem 2.5rem;
`;
const mainParagraphStyles = css`
  line-height: 1.5;
  margin: 2rem;
  font-weight: 300;
  font-size: 1.15rem;
`;
const mainButtonStyles = css`
  font-size: 1.25rem;
  padding: 1.25rem 2.5rem;
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  color: #034f4d;
  background: #1fe7c3;
  border-radius: 6px;
  font-weight: 700;
  transition: background-color 0.1s, transform 0.1s;
`;

const mainHero = css`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const theHero = css`
  width: 100%;
`;
const mainLeft = css`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
`;
const mainStage = css`
  padding: 6rem 0;
`;
const mainContainer = css`
  display: flex;
  min-width: 980px;
  max-width: 1200px;
  margin: auto;
`;

const getStartedStyles = (css = `width: 100%;
padding: 1.5rem;`);
function App() {
  return (
    <>
      <header>
        <section css={bannerSectionStyles}>
          <div>
            <img
              alt="Landa"
              src="https://landa.app/_next/static/media/landa.25a72dc7.svg"
            />
          </div>
          <nav css={navigationBannerStyles}>
            <div css={navigationBannerElementStyles}>About us</div>
            <div css={navigationBannerElementStyles}>Help</div>
            <div css={navigationBannerElementStyles}>
              Learn
              <img
                alt="littleArrow"
                src="https://landa.app/_next/static/media/arrowDown.7802195b.svg"
              />
            </div>
            <div>
              <button css={navigationBannerButtonStyles}>Signup</button>
            </div>
          </nav>
        </section>
      </header>

      <main css={mainStage}>
        <div css={mainContainer}>
          <div css={mainLeft}>
            <span>
              <h1 css={mainHeaderStyles}>
                Invest in real estate for as little as $5
              </h1>
            </span>

            <p css={mainParagraphStyles}>
              <span>
                Buy shares of rental properties, earn monthly income, and grow
                your real estate portfolio.
              </span>
            </p>

            <div css={getStartedStyles}>
              <button css={mainButtonStyles}>
                <span>Get started</span>
              </button>
              <div>Or scan to download "arrow" "Image"</div>
            </div>
          </div>
          <div css={mainHero}>
            <video autoPlay muted loop playsInline css={theHero}>
              <source src={hero} type="video/mp4" />
            </video>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
