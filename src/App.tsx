import React, { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { CardInterface } from "./interfaces/Card";
import { getInfo } from "./services/CardService";

const App = () => {
  const [cardInfo, setCardInfo] = useState<CardInterface[]>();

  useEffect(() => {
    getCardInfo();
  }, [cardInfo]);

  const getCardInfo = () => {
    const info: CardInterface[] = getInfo();
    setCardInfo(info);
  };

  return (
    <div className="App">
      <div className="App-card-content">
        {cardInfo && cardInfo.map((card) => <Card cardInfo={card} />)}
      </div>
    </div>
  );
};

export default App;
