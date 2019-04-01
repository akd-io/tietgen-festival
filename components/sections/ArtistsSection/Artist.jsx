export default props => {
  const handleOnClick = () => {
    props.updateModalData({
      title: props.artist.name,
      imageUrl: props.artist.imageUrl,
      content: props.artist.description,
    });
  };

  return (
    <>
      <a
        onClick={handleOnClick}
        onMouseOver={() => props.onMouseOver()}
        onMouseOut={() => props.onMouseOut()}
      >
        {props.artist.name}
      </a>
      <style jsx>{`
        a {
          background-color: ${props.backgroundColor};
        }
      `}</style>
      <style jsx>{`
        a,
        a:link,
        a:visited {
          display: inline-block;
          margin: 0.2em;
          margin-left: 0;
          margin-right: 0;
          padding: 1.25em;
          padding-bottom: 0.35em;
          padding-top: 0.45em;
          overflow-y: hidden;
          font-family: 'TypoPRO Bebas Neue', sans-serif;
          font-weight: bold;
          font-size: calc(2rem + 1.5vw);
          line-height: 0.8em;
          text-align: center;
          transition: transform 0.1s ease;
          transform: skew(-20deg) scale(0.9);
          user-select: none;
          cursor: pointer;
        }
        a:hover,
        a:active {
          transform: skew(-20deg) scale(1);
        }
      `}</style>
    </>
  );
};
