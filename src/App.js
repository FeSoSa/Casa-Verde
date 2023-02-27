import React, { useEffect, useState } from "react";
import Menu from "./Components/menu";
import Newsletter from "./Components/newsletter";
import Ofertas from "./Components/ofertas";
import req from "./req";
import './App.css'
import './Components/body/reset.css'
import './Components/body/body.css'

function App() {

  const [PlantList, setPlantList] = useState([])


  useEffect(() => {
    const loadAll = async () => {
      let list = await req.getPlant();
      setPlantList(list)
    }

    loadAll()
  }, []);

  return (
    <div className="App">
      <Menu />
      <Newsletter />
      {PlantList.map((item, key) => (
        <Ofertas items={item} key={key}/>
      ))}
    </div>
  );
}

export default App;
