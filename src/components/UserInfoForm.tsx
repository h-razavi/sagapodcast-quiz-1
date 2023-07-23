import React, { useRef, useState } from "react";
//
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
//
import Button from "./Button";

type Props = {
  onNext: () => void;
};

function UserInfoForm({ onNext }: Props) {
  const [formHasError, setFormHasError] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const storedEmail = localStorage.getItem("email");
  localStorage.setItem("userID", uuidv4());

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  function handleBlur() {
    const enteredName = nameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;

    const formIsValid = enteredName.length > 3 && validateEmail(enteredEmail);

    if (!formIsValid) {
      setFormHasError(true);
    } else {
      setFormHasError(false);
    }
  }

  //Get Username and Email in Form
  function handleUserInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredName = nameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;

    if (enteredEmail === storedEmail) {
      alert("شما قبلا با این ایمیل در کوئیز شرکت کرده اید");
      return;
    }

    const formIsValid = enteredName.length > 3 && validateEmail(enteredEmail);
    if (!formIsValid) {
      setFormHasError(true);
      return;
    }
    if (formIsValid) {
      localStorage.setItem("name", nameInputRef.current!.value);
      localStorage.setItem("email", emailInputRef.current!.value);
      onNext();
    }
  }

  return (
    <form className=" w-[50%]" onSubmit={handleUserInfo}>
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <motion.input
          whileFocus={{ scale: 1.2 }}
          onBlur={handleBlur}
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
          onBlur={handleBlur}
          transition={{ duration: 0.5, type: "tween" }}
          type="email"
          ref={emailInputRef}
          id="email"
          placeholder="*ایمیل"
          className="p-2 bg-transparent border-b-2  border-teal-400 placeholder:text-slate-500"
          required
        />
      </div>
      {formHasError && (
        <p className="text-sm italic text-red-500 font-light mt-4">
          لطفاً از درستی اطلاعات خود اطمینان یابید
        </p>
      )}
      <Button>شروع</Button>
    </form>
  );
}

export default UserInfoForm;
