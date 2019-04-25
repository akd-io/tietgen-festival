export default props => (
  <>
    <h1>{props.children}</h1>
    <style jsx>{`
      h1 {
        font-size: calc(3em + 2vw);
        text-transform: uppercase;
        text-align: center;
        z-index: 1;
      }
    `}</style>
  </>
);
