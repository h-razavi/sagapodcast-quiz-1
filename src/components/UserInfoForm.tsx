import React , {useRef} from 'react'
import {motion} from "framer-motion"
import { useId } from 'react';
import Button from './Button';

type Props = {
    onNext : ()=>void
}

function UserInfoForm({onNext}: Props) {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const storedEmail = localStorage.getItem("email");
    const userID = localStorage.setItem("userID",useId());
    

    //Get Username and Email in Form  
  function handleUserInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredName = nameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;
    const formIsValid =
      enteredName.length > 5 &&
      enteredEmail.length > 0 &&
      enteredEmail.includes("@");
    if (formIsValid) {
      localStorage.setItem("name", nameInputRef.current!.value);
      localStorage.setItem("email", emailInputRef.current!.value);
      onNext();
    } else if (storedEmail && storedEmail === enteredEmail) {
      alert("شما قبلا با این ایمیل در کوئیز شرکت کرده اید");
    } else {
      alert("لطفا اطلاعات خود را به شکل صحیح وارد نمائید");
    }
  }
    

  return (
    <form className=" w-[50%]" onSubmit={handleUserInfo}>
    <div className="flex flex-col lg:flex-row gap-8 justify-center">
      <motion.input
        whileFocus={{ scale: 1.2 }}
        transition={{ duration: 0.5, type: "tween" }}
        type="text"
        ref={nameInputRef}
        id="name"
        placeholder="*نام"
        className="p-2 bg-transparent border-b-2  border-teal-400 placeholder:text-slate-500"
        required
      />
      <motion.input
        whileFocus={{ scale: 1.2 }}
        transition={{ duration: 0.5, type: "tween" }}
        type="email"
        ref={emailInputRef}
        id="email"
        placeholder="*ایمیل"
        className="p-2 bg-transparent border-b-2  border-teal-400 placeholder:text-slate-500"
        required
      />
    </div>
    <Button>شروع</Button>
  </form>
  )
}

export default UserInfoForm