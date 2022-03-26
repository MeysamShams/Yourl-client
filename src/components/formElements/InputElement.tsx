import { ChangeEventHandler, ReactElement } from "react"

interface InputElementProps{
    type:'text' | 'password' | 'email' | 'phone'
    name:string
    value:string,
    onChange:ChangeEventHandler
    errorMsg?:string
    className?:string
    placeholder?:string
    label?:string
    icon?:ReactElement
}
export const InputElement=(props:InputElementProps)=>{

    
    return(
        <div className='mt-4'>
            {props.label ? <label htmlFor={props.name}>{props.label}</label> : undefined}
            <input 
                name={props.name} 
                type={props.type}
                className={`${props.className } input rounded-md bg-gray-100 w-full`} 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <span style={props.errorMsg? {opacity:1}:{opacity:0}} className=" transition-all duration-700 text-xs text-rose-500 pt-2 text-left">{props.errorMsg}</span>
        </div>

    );
}