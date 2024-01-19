import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import emailjs from "@emailjs/browser";


export const Form = ({ title,  type }) => {
    const { register, handleSubmit  } = useForm();
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isSend, setIsSend] = useState(false)
    const date = new Date()
    const form = useRef()

    const Submit = () => {
        emailjs.sendForm('service_eyhh1qs', 'template_c5i9a3f', form.current, 'qc9wYSvl8s8uYAkVt')
            .then((result) => {
                setIsSend(true)
            }, (error) => {
                console.log(error.text);
            })
    }

    return(
        <form onSubmit={handleSubmit(Submit)} ref={form}>
            <div className={"form"}>
                <div className={"form__left"}>
                    <div>
                        <label htmlFor="name">Անուն</label>
                        <input type="text" id={"name"} {...register("name")} required/>
                    </div>
                    <div>
                        <label htmlFor="surname">Ազգանուն</label>
                        <input type="text" id={"surname"} {...register("surname")} required/>
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="email">Էլ․ Հասցե</label>
                        <input type="email" id={"email"} {...register("email")} required/>
                    </div>
                    <div>
                        <label>Հեռ․</label>
                        <PhoneInput
                            country={'am'}
                            regions={'asia'}
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e)}
                        />
                        <input type="text" name={"phone"} value={phoneNumber} style={{display: "none"}}/>
                        <input type="text" name={"title"} value={title} style={{display: "none"}}/>
                        <input type="text" name={"type"} value={type} style={{display: "none"}}/>
                        <input type="text" name={"date"} value={`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`} style={{display: "none"}}/>
                    </div>
                </div>

                <div>
                    <label htmlFor="more">Այլ Տվյալներ</label>
                    <textarea id="more" name={"more"} {...register("moreInfo")}/>
                </div>
            </div>
            {isSend ? <b>Ուղարկված է</b> : ""}
            <button>
                <DoneAllIcon/>
                Հաստատել
            </button>
        </form>
    )
}