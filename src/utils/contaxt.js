import {createContext, useState} from "react";


export const AllContext = createContext()

export const AllContextFunc = ({ children }) => {

    const [itemId, setItemId] = useState()

    const contentConverter = (obj) => {
        let convertedArr = []
        for (const objKey in obj) {
            switch (objKey.slice(1,2)){
                case "h":
                    switch (objKey.slice(1,3)){
                        case "h1":
                            convertedArr = [...convertedArr, <h1>{obj[objKey]}</h1>]
                            break
                        case "h2":
                            convertedArr = [...convertedArr, <h2>{obj[objKey]}</h2>]
                            break
                        case "h3":
                            convertedArr = [...convertedArr, <h3>{obj[objKey]}</h3>]
                            break
                        default:
                            convertedArr = [...convertedArr]
                            break
                    }
                    break;
                case "p":
                    convertedArr = [...convertedArr, <p>{obj[objKey]}</p>]
                    break;
                case "b":
                    convertedArr = [...convertedArr, <b>{obj[objKey]}</b>]
                    break;
                case "u":
                    let li = []
                    obj[objKey]?.map((el, i) => (
                        li.push(<li key={i}>{el}</li>)
                    ))
                    convertedArr = [...convertedArr, <ul>
                        {li}
                    </ul>]
                    break;
                case "o":
                    let oli = []
                    obj[objKey]?.map((el, i) => (
                        oli.push(<li key={i}>{el}</li>)
                    ))
                    convertedArr = [...convertedArr, <ol>
                        {oli}
                    </ol>]
                    break;
                default:
                    convertedArr = [...convertedArr]
                    break
            }
        }
        return convertedArr
    }

    return(
        <AllContext.Provider value={{itemId, setItemId, contentConverter}}>
            {children}
        </AllContext.Provider>
    )
}