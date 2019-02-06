export const SectionTitle = props => (
  <h1>
    {props.children}
    <style jsx>{`
      h1 {
        font-size: calc(2em + 2vw);
        text-transform: uppercase;
      }
    `}</style>
  </h1>
);
