import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Quiz from "./components/Quiz";
import QuizResults from "./components/QuizResults";
import Welcome from "./components/Welcome";
import Final from "./components/Final";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const score = Number(localStorage.getItem("userScore"));
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const userID = localStorage.getItem("userID")

  function handleComponentChange() {
    if (currentComponentIndex < componentFlow.length - 1) {
      setCurrentComponentIndex((prevComponentIndex) => prevComponentIndex + 1);
    } else if (currentComponentIndex === componentFlow.length - 1) {
      setCurrentComponentIndex(0);
      localStorage.removeItem("userScore");
    }
  }

  async function handleSubmitData() {
    const { error } = await supabase
      .from("users")
      .insert({ name, email, score , userID })
      .select();
    console.log(error);
    handleComponentChange()
  }

  const componentFlow = [
    { component: <Welcome onNext={handleComponentChange} />, id: "c1" },
    { component: <Quiz onNext={handleComponentChange} />, id: "c2" },
    // { component: <QuizOutro onNext={handleComponentChange} />, id: "c3" },
    { component: <QuizResults onNext={handleSubmitData} />, id: "c4" },
    { component: <Final onNext={handleComponentChange} />, id: "c5" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 px-24  bg-welcomeBG bg-repeat lg:overflow-hidden overflow-auto bg-fixed">
      {componentFlow[currentComponentIndex].component}
    </main>
  );
}

export default App;
