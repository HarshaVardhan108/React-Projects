import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <div>
        <h1>Signature app</h1>
        <h3>{name}</h3>
        <h3>{date}</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          tenetur inventore iure sequi molestiae repellat, esse sint expedita
          recusandae porro?
        </p>
      </div>

      <div>
        <input type="date" name="" id="" onChange={(e) => setDate(e.target.value)} />
        &nbsp;
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

    </>
  );
}

export default App;
