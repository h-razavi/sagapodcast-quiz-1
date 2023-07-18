import { useState } from "react";
import Quiz from "./components/Quiz";
import QuizOutro from "./components/QuizOutro";
import QuizResults from "./components/QuizResults";
import Welcome from "./components/Welcome";
import Final from "./components/Final";

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  

  function handleComponentChange() {
    if (currentComponentIndex < componentFlow.length-1) {
      setCurrentComponentIndex((prevComponentIndex) => prevComponentIndex + 1);
    } else if (currentComponentIndex===componentFlow.length-1) {
      setCurrentComponentIndex(0)
      localStorage.clear()
    }
  }

  const componentFlow = [
    { component: <Welcome onNext={handleComponentChange} />, id: "c1" },
    { component: <Quiz onNext={handleComponentChange} />, id: "c2" },
    { component: <QuizOutro onNext={handleComponentChange} />, id: "c3" },
    { component: <QuizResults onNext={handleComponentChange} />, id: "c3" },
    { component: <Final onNext={handleComponentChange} />, id: "c3" },
  ];

  console.log(currentComponentIndex , componentFlow.length)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 px-24  bg-welcomeBG bg-repeat overflow-hidden bg-fixed">
      {componentFlow[currentComponentIndex].component}
    </main>
  );
}

export default App;
