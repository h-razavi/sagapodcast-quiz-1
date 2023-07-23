import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

type Props = {};

type dataType = {
  name: string;
  email: string;
  score: number;
  userID?: string;
  createdAt : string;
}[];

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Admin({}: Props) {
  const [data, setData] = useState<dataType | null>();
  const [hasAccess, setHasAccess] = useState(false);
  const [enteredPassword , setEnteredPassword] = useState("");

  const adminPass = import.meta.env.VITE_ADMIN_PASS;


  function checkEnteredPassword(){
    if(enteredPassword===adminPass){
        setHasAccess(true)
    }
  }

  const getData = async () => {
    const { data, error } = await supabase.from("users").select();
    if (error) {
      console.log(error);
    }
    setData(data?.sort((a, b) => b.score - a.score));
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className="text-white p-24">
      {!hasAccess ? (
        <form className="flex flex-col items-center gap-8 justify-center" onSubmit={checkEnteredPassword}>
          <input
            type="password"
            className="w-[25%] h-12 px-8 bg-transparent border-2 border-cyan-200 rounded-xl"
            onChange={(e)=>setEnteredPassword(e.target.value)}
          />
          <button className="bg-cyan-600 px-8 py-4 rounded-lg">برو</button>
        </form>
      ) : (
        <>
          <h2 className="text-center text-4xl text-question font-extrabold mb-6">
            نام و مشخصات شرکت کنندگان
          </h2>
          <div className="w-80vh h-full border-r-4 border-t-4 border-white rounded-lg">
            <div className="w-full flex justify-between border-b-4 font-extrabold text-2xl">
              <div className="w-[33%] border-l-4 border-white p-4">نام</div>
              <div className="w-[33%] border-l-4 border-white p-4">ایمیل</div>
              <div className="w-[33%] border-l-4 border-white p-4">امتیاز</div>
              <div className="w-[33%] border-l-4 border-white p-4">تاریخ ثبت</div>
            </div>
            {data &&
              data.map((user) => (
                <div className="w-full flex justify-between border-b-4 text-blue-200 text-2xl">
                  <div className="w-[33%] border-l-4 border-white p-4 text-wrap">
                    {user.name}
                  </div>
                  <div className="w-[33%] border-l-4 border-white p-4 break-all">
                    {user.email}
                  </div>
                  <div className="w-[33%] border-l-4 border-white p-4">
                    {user.score}
                  </div>
                  <div className="w-[33%] border-l-4 border-white p-4">
                    {user.createdAt}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;
