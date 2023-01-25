/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import hero from './media/hero.mp4';
import QRcode from './media/qrcode.png';

const mainLeft = css``;

const container = css`
  @media (min-width: 768px) {
    display: flex;
  }
`;
const containterContainingContainer = css`
  max-width: 1200px;
  margin: auto;

  @media (min-width: 768px) {
    min-width: 980px;
    max-width: 1400px;
  }
`;

const headerStyles = css`
  font-size: 3.43rem;
  line-height: 1.1;
  color: #034f4d;
  margin: 2rem;

  @media (min-width: 1440px) {
    margin: 2rem 2.5rem;
    font-size: 5.14rem;
    width: 30rem;
  }
  @media (min-width: 768px) {
    margin: 2rem 2.5rem;
    font-size: 4.57rem;
    width: 30rem;
  }
`;
const paragraphStyles = css`
  line-height: 1.5;
  margin: 2rem;
  font-weight: 300;
  font-size: 1.15rem;

  @media (min-width: 1440px) {
    margin: 2rem 2.5rem;
    width: 28rem;
    font-size: 1.71rem;
  }
  @media (min-width: 768px) {
    margin: 2rem 2.5rem;
    width: 28rem;
    font-size: 1.25rem;
  }
`;
const buttonStyles = css`
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

  font-size: 1.25rem;
  padding: 1.25rem 2.5rem;
`;
const getStartedContainerStyles = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
  @media (min-width: 768px) {
    position: static;
    padding: 0;
  }
`;
const getStartedStyles = css`
  border-radius: 6px;

  @media (min-width: 768px) {
    margin: 2rem 2.5rem;
  }
`;
const downloaderContainerContainerStyles = css`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const downloaderContainerStyles = css`
  color: #00a688;
  font-size: 2.5rem;
  position: relative;
  font-weight: bold;
`;

const downloaderStyles = css`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const downloaderScanArrowContainerStyles = css`
  position: absolute;
  top: 0;
  right: -3rem;
  transform: translateY(2px) scale(0.8);
`;
const downloaderScanArrowStyles = css`
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
const downloaderScanArrowInnerStyles = css`
  box-sizing: border-box;
  display: block;
  width: initial;
  overflow: hidden;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  max-width: 100%;
`;
const downloaderQrCodeContainerStyles = css`
  border-radius: 6px;
  overflow: hidden;
  margin-left: 3rem;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
const downloaderQrCodeStyles = css`
  height: 170px;
  width: 170px;
  display: block;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const heroContainer = css`
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
`;
const theHero = css`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const heroVideo = css`
  width: 100%;
  object-fit: contain;
  @media (min-width: 768px) {
    width: 900px;
  }
`;

export default function StartingPageSegment() {
  return (
    <div css={containterContainingContainer}>
      <div css={container}>
        <div css={mainLeft}>
          <h1 css={headerStyles}>
            <span>Invest in real estate for as little as $5</span>
          </h1>

          <p css={paragraphStyles}>
            <span>
              Buy shares of rental properties, earn monthly income, and grow
              your real estate portfolio.
            </span>
          </p>
          <div css={getStartedContainerStyles}>
            <div css={getStartedStyles}>
              <button css={buttonStyles}>
                <span>Get started</span>
              </button>
              <div css={downloaderContainerContainerStyles}>
                <div css={downloaderContainerStyles}>
                  <div css={downloaderStyles}>
                    <span>
                      Or scan to <br />
                      download
                    </span>
                  </div>

                  <div css={downloaderScanArrowContainerStyles}>
                    <span css={downloaderScanArrowStyles}>
                      <span css={downloaderScanArrowInnerStyles}>
                        <img
                          alt="ScanArrow"
                          src="https://landa.app/_next/static/media/arrow-green.825598ec.svg"
                        />
                      </span>
                    </span>
                  </div>
                </div>
                <div css={downloaderQrCodeContainerStyles}>
                  <img css={downloaderQrCodeStyles} alt="QRcode" src={QRcode} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div css={heroContainer}>
          <video autoPlay muted loop playsInline css={theHero}>
            <source css={heroVideo} src={hero} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
