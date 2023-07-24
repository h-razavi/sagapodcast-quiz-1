import {FormEvent, useState} from "react";
//
import { supabase } from "../supabaseClient";
//
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
    closeModal: ()=>void
};

function ReportForm({closeModal}: Props) {
const [email , setEmail] = useState("");
const [text , setText] = useState("");
const [isLoading , setIsLoading] = useState(false)

const time = new Date().toISOString()





async function handleSubmit(e:FormEvent){
    e.preventDefault()
    setIsLoading(true)
    const {error} = await supabase.from("issues").insert({time,email,text}).select()
    
    console.log(error)
    setIsLoading(false)
    closeModal()
}

console.log(email,text)
  return (
    <form className="w-full p-6 flex flex-col items-center gap-3" onSubmit={handleSubmit}>
    <button className="absolute left-8 top-6" onClick={closeModal}>&#10060;</button>
      <p className="text-xs font-bold">
        لطفاً شرح مشکل بوجود آمده را به همراه ایمیل خود ثبت نمائید
      </p>
      <input
        required
        type="email"
        name="email"
        id="email"
        className="bg-slate-100 w-1/2 p-2 rounded-md"
        placeholder="ایمیل*"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <textarea
        required
        name="desc"
        id="desc"
        cols={30}
        rows={10}
        className="bg-slate-100 w-1/2 p-2 rounded-md"
        placeholder="َشرح مشکل پیش آمده*"
        onChange={(e)=>setText(e.target.value)}
      ></textarea>
      <Button>{!isLoading?"ثبت":<LoadingSpinner />}</Button>
    </form>
  );
}

export default ReportForm;
