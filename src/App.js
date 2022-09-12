import "./App.css";
import "./header.css";
import "./group.css";
import "./matches.css";
import Group from "./components/Group";

const groups = [
  {
    nameGroup: "A",
    countries: ["qa", "ec", "sn", "nl"],
  },
  {
    nameGroup: "B",
    countries: ["gb-eng", "ir", "us", "gb-wls"],
  },
  {
    nameGroup: "C",
    countries: ["ar", "sa", "mx", "pl"],
  },
  {
    nameGroup: "D",
    countries: ["fr", "dk", "tn", "au"],
  },
  {
    nameGroup: "E",
    countries: ["es", "de", "jp", "cr"],
  },
  {
    nameGroup: "F",
    countries: ["be", "ca", "ma", "hr"],
  },
  { 
    nameGroup: "G", 
    countries: ["br", "rs", "cm", "ch"] 
  },
  {
    nameGroup: "H",
    countries: ["pt", "gh", "uy", "kr"],
  },
];

function App() {

  return (
    <div className="App">
      {groups.map((group) => {
        return <Group key={group.nameGroup} groupName={group.nameGroup} group={group} />;
      })}
    </div>
  );
}

export default App;
