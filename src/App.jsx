import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  // Define state using useState hook
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  function reloadPage() {
    window.location.reload();
  }

  // useEffect hook to mimic componentDidMount
  useEffect(() => {
    console.log("COMPONENT DID MOUNT");

    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error("Failed to Fetch Advice");
        }
        const data = await response.json();
        console.log(data.slip.advice);
        console.log(data.slip.id);
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      } catch (error) {
        console.error("Error fetching advice:", error.message);
      }
    };
    fetchAdvice();
  }, []);

  return (
    <div className="app bg-dark-blue w-full h-screen flex justify-center items-center flex-col px-5">
      <Card advice={advice} adviceId={adviceId} onClick={reloadPage} />
    </div>
  );
}
export default App;
