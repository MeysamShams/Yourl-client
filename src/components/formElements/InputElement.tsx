import { ChangeEventHandler, ReactElement } from "react"
import './inputElement.css'
interface InputElementProps{
    type:'text' | 'password' | 'email' | 'phone'
    name:string
    value:string,
    onChange:ChangeEventHandler
    isTouched?:boolean
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
            {(props.isTouched && props.errorMsg) ? <span className="showInputError transition-all text-xs text-rose-500 pt-2 text-left">{props.errorMsg}</span> : null}
        </div>

    );
}