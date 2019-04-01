export default props => {
  return (
    <h1>
      {props.children}
      <style jsx>{`
        h1 {
          font-size: calc(3em + 2vw);
          text-transform: uppercase;
          text-align: center;
          z-index: 1;
        }
      `}</style>
    </h1>
  );
};
