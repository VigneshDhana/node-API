import React, { useEffect, useState } from "react";
import "./App.css";
import Print from "./components/table";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getdata() {
      let d = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/", {
          method: "GET",
        })
      ).json();
      setData(d);
    }
    getdata();
  }, []);

  return (
    <>
      {data.map((item, i) => (
        <Print item={item} key={i} />
      ))}
    </>
  );
}

export default App;
