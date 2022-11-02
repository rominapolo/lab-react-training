import React from 'react'

export default function Greetings(props) {
    console.log (props)
    let greeting = ""
    switch (props.lang) {
        case "de":
            greeting = "Hallo";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        case "es":
            greeting = "Hola";
            break;
        case "en":
            greeting = "Hello";
            break;
        default: 
            greeting = "HELLO";
    }
  return (
    
    <div>
    <h3>{`${greeting} ${props.children}`} </h3>
    </div>
  )


}

