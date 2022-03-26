import { MouseEventHandler, ReactNode } from "react"

interface ButtonProps{
    type?:"button" | "submit" | "reset"
    fullWidth?:boolean
    handleClick?:MouseEventHandler
    children:ReactNode
    isLoading:boolean
}
export const Button=(props:ButtonProps)=>{
    return(
        <button type={props.type || "submit"} onClick={props.handleClick} className={`${props.fullWidth && 'btn-block'} btn my-5 bg-violet-500 hover:bg-violet-800 border-0 ${props.isLoading && 'loading'}`}>{props.children}</button>
    );
}