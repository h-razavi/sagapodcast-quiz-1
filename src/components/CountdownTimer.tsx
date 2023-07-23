import { useState, useEffect } from "react";

type Props = {
  initialMinute: number;
  handleTimeout: () => void;
};

function CountdownTimer({ initialMinute, handleTimeout }: Props) {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          handleTimeout();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <div className="w-24 h-24 shadow-md absolute top-0 left-36 rounded-b-full flex justify-center items-center">
          <div
            dir="ltr"
            className="w-16 h-16 rounded-full bg-rose-800 bg-opacity-30 grid place-items-center font-bold"
          >
            {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;
