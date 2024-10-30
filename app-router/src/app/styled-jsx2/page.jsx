export default function StyledJsx() {
  return (
    <>
      <button className="button">Styled JSX</button>
      <style jsx>
        {`
          .button {
            padding: 1em;
            border-radius: 1em;
            background: green;
            coloer: white;
          }
        `}
      </style>
    </>
  );
}
