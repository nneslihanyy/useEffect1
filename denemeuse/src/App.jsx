import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [neslihan, setNeslihan] = useState(0);
  const [berkay, setBerkay] = useState(0);
  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz");
  }, []);

  useEffect(() => {
    console.log("Her zaman çalışır");
  });

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır Neslihan değerinde bir değişiklik olduğunda çalışır"
    );
  }, [neslihan]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır Berkay değerinde bir değişiklik olduğunda çalışır"
    );
  }, [berkay]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır Neslihan veya Berkay değerinde bir değişiklik olduğunda çalışır"
    );
  }, [neslihan, berkay]);
  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setNeslihan(neslihan + 1)}>Neslihan ++</button>
        <div>Neslihan :{neslihan}</div>
      </div>
      <div>
        <button onClick={() => setBerkay(berkay + 1)}>Berkay ++</button>
        <div>Berkay :{berkay}</div>
      </div>
    </div>
  );
}

export default App;
