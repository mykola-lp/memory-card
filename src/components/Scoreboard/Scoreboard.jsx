function Scoreboard({ score, bestScore }) {
  return (
    <section className="scoreboard">
      <p>Score: {score}</p>

      <p>Best Score: {bestScore}</p>
    </section>
  );
}

export default Scoreboard;