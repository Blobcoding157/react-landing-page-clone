/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeadBanner from './HeadBanner';
import StartingPageSegment from './StartingPageSegment';

const mainStage = css`
  background-color: #f9f7f1;
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

function App() {
  return (
    <>
      <header>
        <HeadBanner />
      </header>

      <div css={mainStage}>
        <StartingPageSegment />
      </div>

      <footer>footer</footer>
    </>
  );
}

export default App;
