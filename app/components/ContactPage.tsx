'use client'
import mail from "@/public/mail.svg"
import user from "@/public/user.svg"
import message from "@/public/message.svg"
import Image from "next/image"
export default function ContactPage(){
    return(
        <section className="contact flex w-full flex-col mt-12 sm:mt-0 justify-center h-screen items-center text-center select-none gap-5">
            <header><h1 className="text-4xl text-titleBlue font-bold">¡Contact me!</h1></header>
            <form className="contact-form flex flex-col w-full max-w-96 gap-2 ">
                <div className="flex flex-row gap-2 items-center justify-center sm:justify-start">                
                    <label htmlFor="mail" className="sm:text-start text-md font-sans">Give me your mail</label> 
                    <Image src={mail} width={25} height={25} alt="Mail"/>
                </div>
                <input type="email" placeholder="E-mail" name="mail" className="border-2 rounded-xl border-slate-800 text-white p-1 bg-slate-900"/>
                <div className="flex flex-row gap-2 items-center justify-center sm:justify-start">
                    <label htmlFor="name" className="sm:text-start text-md font-sans ">Tell me your name</label>
                    <Image src={user} width={25} height={25} alt="Name"/>
                </div>
                <input type="text" placeholder="Name or company" name="name" className="border-2 rounded-xl border-slate-800 text-white p-1 bg-slate-900"/>
                <div className="flex flex-row gap-2 items-center justify-center sm:justify-start">
                    <label htmlFor="message" className="sm:text-start text-md font-sans">Send me a message</label>
                    <Image src={message} width={25} height={25} alt="Message"/>
                </div>
                <textarea placeholder="Message" name="message" className="text-white h-24 p-1 bg-slate-900 border-2 rounded-xl border-slate-800"></textarea>
                <button type="submit" className="bg-black w-1/3 justify-self-center mx-auto sm:mx-1 rounded-lg bg-blue-400 my-2 ">Enviar</button>
            </form>
        </section>
    )
}