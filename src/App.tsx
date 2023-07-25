import { useState } from "react";
//
import { supabase } from "./supabaseClient";
//
import Quiz from "./components/Quiz";
import QuizResults from "./components/QuizResults";
import Welcome from "./components/Welcome";
import Final from "./components/Final";
import Footer from "./components/Footer";


function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const score = Number(localStorage.getItem("userScore"));
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const userID = localStorage.getItem("userID");
  const now = new Date();
  const createdAt = now.toISOString().split("T")[0];

  function handleComponentChange() {
    if (currentComponentIndex < componentFlow.length - 1) {
      setCurrentComponentIndex((prevComponentIndex) => prevComponentIndex + 1);
    } else if (currentComponentIndex === componentFlow.length - 1) {
      setCurrentComponentIndex(0);
      localStorage.removeItem("userScore");
    }
  }

  async function handleSubmitData() {
    setLoading(true);
    const { error } = await supabase
      .from("users")
      .insert({ name, email, score, userID, createdAt })
      .select();
    console.log(error);
    setLoading(false);
    handleComponentChange();
  }

  const componentFlow = [
    { component: <Welcome onNext={handleComponentChange} />, id: "c1" },
    { component: <Quiz onNext={handleComponentChange} />, id: "c2" },
    {
      component: <QuizResults onNext={handleSubmitData} loading={loading} />,
      id: "c3",
    },
    { component: <Final onNext={handleComponentChange} />, id: "c4" },
  ];

  return (
    <main className="flex min-h-screen flex-col justify-evenly items-center py-12 px-24  bg-welcomeBG bg-repeat lg:overflow-hidden overflow-auto overflow-x-hidden bg-fixed">
      {componentFlow[currentComponentIndex].component}
      <Footer />
    </main>
  );
}

export default App;
