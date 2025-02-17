import { useState } from "react";

function LemonadeStand() {
  const [profit, setProfit] = useState(0);

  const sellLemonade = () => {
    setProfit(profit + 5);
  };

  const buyLemons = () => {
    setProfit(profit - 2);
  };

  return (
    <>
      <div className="lemonade-stand">
        <h1>Lemonade Stand  🍋</h1>
        <h2>Lemonade Profit : $ {profit}</h2>
        <button onClick={sellLemonade} className="button">
          Sælg Lemonade
        </button>
        <button onClick={buyLemons} className="button">
          Køb Citroner
        </button>
      </div>
    </>
  );
}

export default LemonadeStand;