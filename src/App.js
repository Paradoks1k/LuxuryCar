import "./App.css";
import { Footer } from "./components/footer";
import { Headerr } from "./components/header";
import { MainSection } from "./components/main-section";
import { Wraper } from "./components/wraper";

function App() {
  return (
    <div className="App">
      <Wraper>
        <Headerr />
        <MainSection />
        <Footer />
      </Wraper>
    </div>
  );
}

export default App;
