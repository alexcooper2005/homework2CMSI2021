import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState(""); 
  const [data, setData] = useState(null); 

  useEffect(() => {
    const amiiboName = encodeURIComponent(name.toLowerCase());
    const url = `https://www.amiiboapi.com/api/amiibo/?name=${amiiboName}`;
    
    fetch(url)
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        if (r.amiibo && r.amiibo.length > 0) {
          setData(r.amiibo[0]); 
        } else {
          setData(null); 
        }
      })
      .catch((e) => {
        console.error(e);
        setData(null); 
      });
  }, [name]);

  return (
    <div className="App">
      <Title text="Amiibo Info Lister" />
      <Entry action={setName} />
      <Info name={name} data={data} />
    </div>
  );
}
