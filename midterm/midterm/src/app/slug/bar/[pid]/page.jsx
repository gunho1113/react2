import { useRouter } from "next/router";

export default function Pid() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <h1>{props.param.props}</h1>
    </>
  );
}
