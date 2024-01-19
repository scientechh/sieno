import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";


export const Contact = () => {
    const { register, handleSubmit} = useForm();
    const [isSend, setIsSend] = useState(false)
    const form = useRef();

    const onSubmit = () => {
        emailjs.sendForm('service_eyhh1qs', 'template_lzyu41t', form.current, 'qc9wYSvl8s8uYAkVt')
            .then((result) => {
                setIsSend(true)
            }, (error) => {
                console.log(error.text);
            })
    };

    return(
        <div className={"contact container"}>
            <h2><ConnectWithoutContactIcon/> Կապ մեզ հետ</h2>

            <div className={"flex"}>
                <div className={"contact__info"}>
                    <p>
                        <span><MailOutlineIcon/> Էլ․ Հասցե</span>
                        scientech.itcompany@gmail.com
                    </p>
                    <p>
                        <span><PhoneEnabledIcon/> Հեռ․</span>
                        +374 91 690212
                    </p>
                    <div>
                        <a href="https://www.facebook.com/sscientech/" rel={"noopener"}><FacebookIcon/> Facebook</a>
                        <a href="https://www.instagram.com/sscientech/" rel={"noopener"}><InstagramIcon/> Instagram</a>
                    </div>
                </div>

                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={"Անուն"} name={"name"} {...register("name", { required: true })} />
                    <input placeholder={"Էլ․ Հասցե"} name={"email"} {...register("email", { required: true })} />
                    <textarea placeholder={"Նամակ"} name={"message"} {...register("message", { required: true })}/>
                    {isSend ? <b>Ուղարկված է</b> : ""}
                    <button>Ուղարկել <SendIcon/></button>
                </form>
            </div>
        </div>
    )
}