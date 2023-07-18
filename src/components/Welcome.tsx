import { useRef } from "react";
import Container from "./Container";
import Button from "./Button";

type Props = {
  onNext: () => void;
};

function Welcome({ onNext }: Props) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
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
    } else {
      alert("لطفا اطلاعات خود را به شکل صحیح وارد نمائید");
    }
  }

  return (
    <section className="text-center">
      <Container>
        <h2 className="text-4xl font-bold my-2 text-question">سلام!</h2>
        <h2 className="text-2xl font-bold my-4 text-question">
          به اولین کوئیز پادکست ساگا خوش اومدید!
        </h2>
        <p className="font-light italic text-question opacity-75">
          این کوئیز شامل 20 سوال چهار گزینه‌ای هست که دانش شما رو در زمینه
          اساطیر و افسانه‌ها تست می‌کنه
        </p>
        <p className="my-4 italic">برای شروع نام و ایمیل خود را وارد کنید:</p>
        <form className=" w-[50%]" onSubmit={handleUserInfo}>
          <div className="flex gap-4 justify-center">
            <input
              type="text"
              ref={nameInputRef}
              id="name"
              placeholder="*نام"
              className="p-2 bg-transparent border-b-2  border-teal-400 placeholder:text-slate-500"
              required
            />
            <input
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
      </Container>
    </section>
  );
}

export default Welcome;
