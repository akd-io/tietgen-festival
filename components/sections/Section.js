export const Section = props => (
  <div id={props.id} className="section">
    {props.children}
    <style jsx>{`
      .section {
        ${"height" in props ? `height: ${props.height};` : ""}
        ${"minHeight" in props ? `min-height: ${props.minHeight};` : ""}
        ${"color" in props ? `color: ${props.color};` : ""}
        ${
          "backgroundColor" in props
            ? `background-color: ${props.backgroundColor};`
            : ""
        }
        ${
          "backgroundImage" in props
            ? `background-image: url(${props.backgroundImage});`
            : ""
        }
      }
    `}</style>
    <style jsx>{`
      .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 8em;
        padding-bottom: 8em;
        padding-left: calc(2em + 2vw);
        padding-right: calc(2em + 2vw);
        box-sizing: border-box;
        background-position: center;
        background-size: cover;
      }
    `}</style>
  </div>
);
