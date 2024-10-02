export default function Blog(props) {
  console.log(props);
  return (
    <>
      <h1>Blog page</h1>
      <h1>blog: {props.param.Blog}</h1>
      <h1>blog: {props.searchParams.id}</h1>
      <h1>blog: {props.searchParams.name}</h1>
    </>
  );
}
