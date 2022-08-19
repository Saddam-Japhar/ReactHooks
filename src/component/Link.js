import { useState } from "react"

const Link =({className, href, children})=> {
    
    const handleClick = (event)=>{
        if(event.metaKey|| event.ctrlKey){
            return
        }
        console.log("printing event.target", event.target.href)
        event.preventDefault()
        window.history.pushState({},'',href)
        const navEvent= new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }
    return (
        <a onClick={handleClick} className={className} href={href} >
            {children}
        </a>
    )
}

export default Link