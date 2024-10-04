import { useRouter } from "next/router"

export default function Foo(){
   const router = useRouter()
   const {foo,id,name} = router.query
   console.log()
   
    return(
        <></>
    )
}