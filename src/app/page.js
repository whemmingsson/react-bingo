"use client";
import Grid from "./components/grid";

export default function Home() {
  const wordList = ["EBITDA", "progress", "recovery", "double click", "margins", "competition", "Spotify", "plans", "CLV", "ISOC", "the market", "stock price", "expansion", "growth", "profitability", "content", "technical difficulties", "profitable growth", "north star", "Atlas", "metrics", "threat", "transition", "Norstedts", "Voice switcher", "are you in the call?", "can you see my screen?", "deeply sorry", "tough times", "I'm amazed", "The Board"];
  //const wordList = ["A", "word", "longword", "longest word", "ABC"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Grid n={5} words={wordList} />
    </main>
  );
}
