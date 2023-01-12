import logo from "./jplAvatar.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Próximamente sitio web de JPL</p>
        <a
          className="App-link"
          href="https://github.com/JPLACLAU"
          target="_blank"
          rel="noopener noreferrer"
        >
          JPL's Github
        </a>
      </header>
    </div>
  );
}

export default App;
