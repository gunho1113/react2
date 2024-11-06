export default function StyledJsx() {
  return (
    <>
      <button className="button">Styled JSX</button>
      <style jsx global>
        {`
          .button {
            padding: 1em;
            border-radius: 1em;
            background: green;
            coloer: white;
          }
          span{
            background 
          }
        `}
      </style>
    </>
  );
}
