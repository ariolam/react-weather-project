import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather city="London" />{" "}
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://glittery-boba-1babca.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ariola Markou
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ariolam/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
