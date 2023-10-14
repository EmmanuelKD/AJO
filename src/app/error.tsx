"use client"
import Error from "next/error";

export default function LocalError({error,reset}:{
    error:Error,
    reset:()=>void
}){
return(<>Error plrase Reset <button onClick={reset}>reset</button></>)
}