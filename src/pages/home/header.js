import {Images} from "../../assets/images/images";
import {useCallback, useEffect, useState} from "react";


export const Header = () => {
    const [count, setCount] = useState(19)

    useEffect(() => {
        if (count !== 0){
            const a1 = document.querySelectorAll('.a1 > p')
            for (let i = 0; i < a1.length; i++) {
                setTimeout(() => {
                    if (a1[i].style.display === 'none'){
                        a1[i].style.display = 'block'
                    }else if(a1[i].style.display === 'block'){
                        a1[i].style.display = 'none'
                    }else{
                        a1[i].style.display = 'none'
                    }
                }, i*100)
            }
            const a2 = document.querySelectorAll('.a2 > p')
            for (let i = 0; i < a2.length; i++) {
                setTimeout(() => {
                    if (a2[i].style.display === 'none'){
                        a2[i].style.display = 'block'
                    }else if(a2[i].style.display === 'block'){
                        a2[i].style.display = 'none'
                    }else{
                        a2[i].style.display = 'none'
                    }
                }, i*100)
            }
            setTimeout(() => {
                setCount(count-1)
            }, 1000)
        }
    }, [count])


    return(
        <div className={"header container"}>
            <div className={"header__back"}>
                <div className={'a1'}>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                </div>
                <div className={'a2'}>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                    <p>Sieno Academy</p>
                </div>
            </div>
            <div className={"header__text"}>
                <h1>Լավագույն</h1>
                <h2>Ընտրություն</h2>
                <span>Sieno Academy</span>
            </div>
        </div>
    )
}