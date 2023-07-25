import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

type DataType = {
  email: string;
  text: string;
}[];

function Reports() {
  const [data, setData] = useState<DataType | null>(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");

  const adminPass = import.meta.env.VITE_ADMIN_PASS;

  function checkEnteredPassword() {
    if (enteredPassword === adminPass) {
      setHasAccess(true);
    }
  }

  const getData = async () => {
    const { data, error } = await supabase.from("issues").select();
    if (error) {
      console.log(error);
    }
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className="text-white p-24">
      {!hasAccess ? (
        <form
          className="flex flex-col items-center gap-8 justify-center"
          onSubmit={checkEnteredPassword}
        >
          <input
            type="password"
            className="w-[25%] h-12 px-8 bg-transparent border-2 border-cyan-200 rounded-xl"
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
          <button className="bg-cyan-600 px-8 py-4 rounded-lg">برو</button>
        </form>
      ) : (
        <>
          <h2 className="text-center text-4xl text-question font-extrabold mb-6">
            گزارشات دریافت شده
          </h2>
          <div className="w-80vw h-full border-r-4 border-t-4 border-white rounded-lg">
            <div className="w-full flex justify-between border-b-4 font-extrabold text-2xl">
              <div className="w-[30%] border-l-4 border-white p-4">ایمیل</div>
              <div className="w-[70%] border-l-4 border-white p-4">شرح</div>
            </div>
            {data &&
              data.map((reoprt) => (
                <div
                  className="w-full flex justify-between border-b-4 text-blue-200 text-2xl"
                  key={reoprt.email}
                >
                  <div className="w-[30%] border-l-4 border-white p-4 truncate">
                    {reoprt.email}
                  </div>
                  <div className="w-[70%] border-l-4 border-white p-4 break-all">
                    {reoprt.text}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Reports;
