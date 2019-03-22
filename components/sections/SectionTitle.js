export const SectionTitle = props => (
  <h1>
    {props.children}
    <style jsx>{`
      h1 {
        font-size: calc(5em + 1vw);
        text-transform: uppercase;
        text-align: center;
        z-index: 1;
      }
    `}</style>
  </h1>
);
