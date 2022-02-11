import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
export const Box = ()=>{

    const  theme  = useContext(ThemeContext)
    console.log(theme.primary.main)
    return <div style={{backgroundColor:theme.primary.main,color:theme.secondary.text, width:4 +'rem'}}>Theme context</div>
}