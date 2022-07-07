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
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/teams/ariolam/overview?_ga=2.31828414.1222677229.1657026152-283144925.1646049587"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
