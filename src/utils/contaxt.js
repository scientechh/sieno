import {createContext, useState} from "react";


export const AllContext = createContext()

export const AllContextFunc = ({children}) => {

    const [itemId, setItemId] = useState()

    const contentConverter = (json,  keywords) => {
        let jsx = []

        const replace = (text) => {
            let str = text

            // keywords?.map(el => (
            //     el ? str = str?.replaceAll(el, `<i>${el}</i>`) : null
            // ))

            return str
        }

        const listConvert = (list) => {
            let lis = []

            list?.map((el, i) => (
                lis.push(<li key={i} dangerouslySetInnerHTML={{__html: replace(el)}}/>)
            ))

            return lis
        }

        const types = {
            p: function (text, i) {
                return <p key={i} dangerouslySetInnerHTML={{__html: text}}/>
            },
            b: function (text, i) {
                return <b key={i} dangerouslySetInnerHTML={{__html: text}}/>
            },
            h3: function (text, i) {
                return <h3 key={i} dangerouslySetInnerHTML={{__html: text}}/>
            },
            h4: function (text, i) {
                return <h4 key={i} dangerouslySetInnerHTML={{__html: text}}/>
            },
            code: function (text, i) {
                return <pre key={i} dangerouslySetInnerHTML={{__html: text}}/>
            },
            i: function (text, i) {
                return <i key={i} dangerouslySetInnerHTML={{__html: text}}/>
            }
        }

        json?.map((el, i) => {
            switch (el.tag) {
                case 'video':
                    return jsx.push(
                        <iframe key={i} width="90%" src={el.content} title={`video${i}`}/>
                    )
                case 'img':
                    return jsx.push(
                        <img key={i} src={el.img} alt="alt" />
                    )
                case 'h2':
                    return jsx.push(
                        <h2 key={i} id={el.id}>
                            {el.content}
                        </h2>
                    )
                case 'a':
                    return jsx.push(
                        <a key={i} href={el.link} target={"_blank"} rel="noreferrer">
                            {replace(el.content)}
                        </a>
                    )
                case 'ul':
                    const liList = listConvert(el.content.split('\n'))
                    return jsx.push(<ul key={i}>{liList}</ul>)
                case 'ol':
                    const oliList = listConvert(el.content.split('\n'))
                    return jsx.push(<ol key={i}>{oliList}</ol>)
                case '&':
                    break
                default:
                    let getTag = types[el.tag](replace(el?.content), i)
                    return jsx.push(getTag)
            }
        })

        return jsx
    }

    return (
        <AllContext.Provider value={{itemId, setItemId, contentConverter}}>
            {children}
        </AllContext.Provider>
    )
}