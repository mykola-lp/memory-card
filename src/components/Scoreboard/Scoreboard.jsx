function Scoreboard({ score, bestScore }) {
  return (
    <section>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </section>
  );
}

export default Scoreboard;