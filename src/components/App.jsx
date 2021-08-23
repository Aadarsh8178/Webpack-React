import "../styles/index.css";
import Recipes from "./Recipes";

function App(props) {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi From App React</h1>
          <Recipes />
        </section>
      </main>
    </>
  );
}

export default App;