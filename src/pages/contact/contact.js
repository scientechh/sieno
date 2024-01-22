import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";
import {Alert, Button, LinearProgress, TextField} from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import axios from "axios";


export const Contact = () => {
    const { register, handleSubmit, reset} = useForm();
    const [isSend, setIsSend] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useRef();

    const onSubmit = (data) => {
        setLoading(true)
        axios.post(process.env.REACT_APP_NODE_URL + '/users/sendContactMess', {
            name: data.name,
            email: data.email,
            message: data.message
        }).then(r => {
            setLoading(false)
            setIsSend(true)
            reset()
        })
    };

    return(
        <div className={"contact container"}>
            <h2><ConnectWithoutContactIcon/> Կապ մեզ հետ</h2>

            <div className={"flex"}>
                <div className={"contact__info"}>
                    <p>
                        <span><MailOutlineIcon/> Էլ․ Հասցե</span>
                        sienoacademy@gmail.com
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
                    <TextField id="standard-basic"
                               style={{width: '100%'}}
                               label="Անուն" variant="standard" {...register("name")} required />
                    <TextField
                        style={{width: '100%'}}
                        id="standard-basic" label="Էլ․ Հասցե" variant="standard" {...register("email")} required/>
                    <TextField id="standard-multiline-static"
                               style={{width: '100%'}}
                               multiline
                               rows={4} label="Նամակ" variant="standard" {...register("message")} required/>

                    {
                        loading ? <LinearProgress /> : null
                    }
                    {isSend ? <Alert severity="success" className={'alertSend'}>Ուղարկված է</Alert> : null}

                    <Button variant="contained" className={'sendButton'} type={'submit'}>Ուղարկել <SendIcon/></Button>
                </form>
            </div>
        </div>
    )
}