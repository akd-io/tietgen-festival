import { useState } from 'react';

export default props => (
  <>
    <div>{props.children}</div>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: 1100px;
      }
    `}</style>
  </>
);
