export default props => (
  <div id={props.id} className="section">
    {props.children}
    <style jsx>{`
      .section {
        ${props.height ? `height: ${props.height};` : ''}
        ${props.minHeight ? `min-height: ${props.minHeight};` : ''}
        ${props.color ? `color: ${props.color};` : ''}
        ${props.backgroundColor ? `background: ${props.backgroundColor};` : ''}
      }
    `}</style>
    <style jsx>{`
      .section {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 8em;
        padding-bottom: 8em;
        padding-left: calc(2em + 2vw);
        padding-right: calc(2em + 2vw);
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
