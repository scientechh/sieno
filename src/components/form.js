import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import emailjs from "@emailjs/browser";
import {Alert, Button, createTheme, InputAdornment, LinearProgress, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

export const Form = ({ title,  type }) => {
    const { register, handleSubmit, reset  } = useForm();
    const [isSend, setIsSend] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useRef()

    const Submit = (data) => {
        setLoading(true)
        axios.post('http://localhost:5000/users/sendGmail', {
            surname: data.surname,
            name: data.name,
            email: data.email,
            title: title,
            phone: data.phone,
            type: type,
            more: data.moreInfo
        }).then(r => {
            if (r.data.accepted[0] === data.email){
                setLoading(false)
                setIsSend(true)
                reset()
            }
        })
    }

    return(
        <form onSubmit={handleSubmit(Submit)} ref={form}>
            <div className={"form"}>
                <div className={"form__left"}>
                    <TextField id="standard-basic" label="Անուն" variant="standard" {...register("name")} required/>
                    <TextField id="standard-basic" label="Ազգանուն" variant="standard" {...register("surname")} required/>
                </div>

                <div>
                    <TextField id="standard-basic" label="Էլ․ Հասցե" variant="standard" {...register("email")} required/>
                    <TextField id="standard-basic" label="Հեռախոսահամար" variant="standard" {...register("phone")} required/>
                </div>

                <div>
                    <TextField
                        id="standard-multiline-static"
                        label="Այլ Տվյալներ"
                        multiline
                        rows={4}
                        variant="standard"
                        sx={{color: '#8504d6'}}
                        {...register("moreInfo")}
                    />
                </div>
            </div>
            {
                loading ? <LinearProgress /> : null
            }

            {isSend ? <Alert severity="success" className={'alertSend'}>Ձեր Հայտը Ուղարկված է</Alert> : null}
            <Button variant="contained" className={'sendButton'} type={"submit"}><DoneAllIcon/> Հաստատել</Button>
        </form>
    )
}