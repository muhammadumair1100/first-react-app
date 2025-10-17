import { useEffect, useState } from "react";

export default function Joker() {
  const [jokes, setJokes] = useState({});

  const getNewJoke = async () => {
    const r = await fetch(
      "  https://official-joke-api.appspot.com/random_joke"
    );
    const data = await r.json();
    setJokes(data);
  };

  useEffect(() => {
    async function getJokes() {
      const r = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await r.json();
      setJokes(data);
    }
    getJokes();
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <h2>setup: {jokes.setup}</h2>
      <h3>punchLine: {jokes.punchline}</h3>
      <button onClick={getNewJoke}>New Joke!</button>
    </div>
  );
}
