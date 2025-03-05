// React Imports
import React, { useState } from "react";

// Icon Imports
//import { MoneyBreakdown } from "../../types/classes/MoneyBreakdown.class";
//import { MoneyUnit } from "../../types/classes/MoneyUnit.class";

// Style Imports
import "./CashRegister.scss";
import CustomNumberField from "../reusable/NumberField";
import { Button } from "@mui/material";

export default function CashRegister() {
  // establish component local start values **Not used with STATE tracking**
  const cashRegisterNumberFormat: Intl.NumberFormatOptions = {
    style: "currency", 
    currencySign: "standard", 
    currency: "USD", 
    useGrouping: true
  };

  // Establish State for cash input
  const [cashValue, setCashValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);

  // Establish State cash Drawer

  // Set cash input handler
  function setCashValueHandler(value: number | null, event: Event | undefined): void {
    if(event && value){setCashValue(value);}
    return;
  }

  function setPriceValueHandler(value: number | null, event: Event | undefined): void {
    if(event && value){setPriceValue(value);}
    return;
  }

  return (
    <>
      <main className="content-container">
        <div className="title-container">
          <h1 className="title">Cash Register Calculator</h1>
        </div>
        <div id="purchase-container" className="register">
          <div id="price-display" className="purchase-controls">
            <CustomNumberField 
              label={"Ammount Paid"} 
              name={"itemPrice"} 
              fieldId={React.useId()} 
              changeHandler={setPriceValueHandler}
              step = {.01}
              smallStep = {.1}
              largeStep = {1}
              format = {cashRegisterNumberFormat}
            /><p id="price-symbol">
              Price: $<span id="price-value"></span>
            </p>
          </div>
          <div id="cash-input" className="purchase-controls">

            <CustomNumberField 
              label={"Ammount Paid"} 
              name={"cashIn"} 
              fieldId={React.useId()} 
              changeHandler={setCashValueHandler}
              step = {.01}
              smallStep = {.1}
              largeStep = {1}
              format = {cashRegisterNumberFormat}
            />
            <Button id="purchase-btn" variant="contained" onClick={purchase}>
              Purchase
            </Button>
          </div>
        </div>
        <div id="change-due" className="register">{cashValue}</div>
        <div id="cash-drawer" className="register">{priceValue}</div>
      </main>
    </>
  );
}

const purchase = () => {
  //const changeDue = cashValue - priceValue
  //const cashIn = cash();
  //const cashDrawer = countCashDrawer();
  //calculateChange(price, cashIn);
  //cashInput.value = "";
};


/*

  const cid: [string, number][] = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ];
  
  const statusMsgs: {
    insuf: string;
    open: string;
    closed: string;
    exact: string;
  } = {
    insuf: "Status: INSUFFICIENT_FUNDS",
    open: "Status: OPEN",
    closed: "Status: CLOSED",
    exact: "No change due - customer paid with exact cash",
  };


const price: number = 1.87;


const cashInput: string = document.getElementById("cash");
const cash = () => Number(cashInput.value);
const changeDueElement = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const priceElement = document.getElementById("price-value");
const cashDrawerElement = document.getElementById("cash-drawer");



const countCashDrawer = () => {
  const cashDrawer = new MoneyBreakdown();
  cid.forEach((unit) => {
    cashDrawer[unit[0]].unitCount =
      unit[1] / cashDrawer[unit[0]].valueMultiplier;
  });
  return cashDrawer;
};

const updateCashDrawer = (changeGiven) => {
  const cashDrawer = countCashDrawer();
  cashDrawerElement.innerHTML = `<p><strong>Cash in Drawer:</strong></p>`;
  const tempCashDrawer = cashDrawer.clone();

  const indexes = Object.keys(tempCashDrawer);
  const newCid = [];
  for (const index of indexes) {
    tempCashDrawer[index].unitCount -= changeGiven[index].unitCount;
    const cashRow = document.createElement("p");
    cashRow.className = "cash-drawer-row";
    cashRow.innerHTML = `<span class="left">${
      tempCashDrawer[index].plural
    }:</span> <span class="right">$${tempCashDrawer[index]
      .value()
      .toFixed(2)}</span>`;
    cashDrawerElement.appendChild(cashRow);
    newCid.push([index, tempCashDrawer[index].value()]);
  }
};

const updateRegister = (moneyOut, msg) => {
  changeDueElement.innerHTML = "";
  const msgElement = document.createElement("p");
  msgElement.id = "status-msg";
  msgElement.textContent = msg;
  changeDueElement.appendChild(msgElement);

  if (msg === statusMsgs.open || msg === statusMsgs.closed) {
    updateCashDrawer(moneyOut);
    const indexes = Object.keys(moneyOut);
    const changeElements = [];
    for (const index of indexes) {
      if (moneyOut[index].unitCount) {
        const changeRow = document.createElement("p");
        changeRow.classList.add("change-row");
        changeRow.innerHTML = `<span class="left">${index}: </span><span class="right">$${Number(
          moneyOut[index].value().toFixed(2)
        )}</span>`;
        changeElements.push(changeRow);
      }
    }
    changeElements.reverse().forEach((el) => {
      changeDueElement.appendChild(el);
    });
  }
};

const getAvailableChangeBreakdown = (
  change,
  tempCashDrawer,
  availableChange = new MoneyBreakdown()
) => {
  let changeCalc = Number((change * 100).toFixed(2));

  switch (true) {
    //$0
    case changeCalc === 0:
      return availableChange;
    //$100
    case changeCalc >= 10000 && tempCashDrawer["ONE HUNDRED"].unitCount > 0: {
      availableChange["ONE HUNDRED"].unitCount++;
      tempCashDrawer["ONE HUNDRED"].unitCount--;
      changeCalc -= 10000;
      break;
    }
    //$20
    case changeCalc >= 2000 && tempCashDrawer.TWENTY.unitCount > 0: {
      availableChange.TWENTY.unitCount++;
      tempCashDrawer.TWENTY.unitCount--;
      changeCalc -= 2000;
      break;
    }
    //$10
    case changeCalc >= 1000 && tempCashDrawer.TEN.unitCount > 0: {
      availableChange.TEN.unitCount++;
      tempCashDrawer.TEN.unitCount--;
      changeCalc -= 1000;
      break;
    }
    //$5
    case changeCalc >= 500 && tempCashDrawer.FIVE.unitCount > 0: {
      availableChange.FIVE.unitCount++;
      tempCashDrawer.FIVE.unitCount--;
      changeCalc -= 500;
      break;
    }
    //$1
    case changeCalc >= 100 && tempCashDrawer.ONE.unitCount > 0: {
      availableChange.ONE.unitCount++;
      tempCashDrawer.ONE.unitCount--;
      changeCalc -= 100;
      break;
    }
    //$0.25
    case changeCalc >= 25 && tempCashDrawer.QUARTER.unitCount > 0: {
      availableChange.QUARTER.unitCount++;
      tempCashDrawer.QUARTER.unitCount--;
      changeCalc -= 25;
      break;
    }
    //$0.10
    case changeCalc >= 10 && tempCashDrawer.DIME.unitCount > 0: {
      availableChange.DIME.unitCount++;
      tempCashDrawer.DIME.unitCount--;
      changeCalc -= 10;
      break;
    }
    //$0.05
    case changeCalc >= 5 && tempCashDrawer.NICKEL.unitCount > 0: {
      availableChange.NICKEL.unitCount++;
      tempCashDrawer.NICKEL.unitCount--;
      changeCalc -= 5;
      break;
    }
    //$0.01
    case changeCalc >= 1 && tempCashDrawer.PENNY.unitCount > 0: {
      availableChange.PENNY.unitCount++;
      tempCashDrawer.PENNY.unitCount--;
      changeCalc -= 1;
      break;
    }
    default:
      return availableChange;
  }

  return getAvailableChangeBreakdown(
    Number((changeCalc / 100).toFixed(2)),
    tempCashDrawer,
    availableChange
  );
};

const getExactChangeBreakdown = (
  change,
  exactChange = new MoneyBreakdown()
) => {
  let changeCalc = Number((change * 100).toFixed(2));
  switch (true) {
    //$0
    case changeCalc === 0:
      return exactChange;
    //$100
    case changeCalc >= 10000: {
      exactChange["ONE HUNDRED"].unitCount++;
      changeCalc -= 10000;
      break;
    }
    //$20
    case changeCalc >= 2000: {
      exactChange.TWENTY.unitCount++;
      changeCalc -= 2000;
      break;
    }
    //$10
    case changeCalc >= 1000: {
      exactChange.TEN.unitCount++;
      changeCalc -= 1000;
      break;
    }
    //$5
    case changeCalc >= 500: {
      exactChange.FIVE.unitCount++;
      changeCalc -= 500;
      break;
    }
    //$1
    case changeCalc >= 100: {
      exactChange.ONE.unitCount++;
      changeCalc -= 100;
      break;
    }
    //$0.25
    case changeCalc >= 25: {
      exactChange.QUARTER.unitCount++;
      changeCalc -= 25;
      break;
    }
    //$0.10
    case changeCalc >= 10: {
      exactChange.DIME.unitCount++;
      changeCalc -= 10;
      break;
    }
    //$0.05
    case changeCalc >= 5: {
      exactChange.NICKEL.unitCount++;
      changeCalc -= 5;
      break;
    }
    //$0.01
    default: {
      exactChange.PENNY.unitCount++;
      changeCalc -= 1;
    }
  }

  return getExactChangeBreakdown(
    Number((changeCalc / 100).toFixed(2)),
    exactChange
  );
};

const getRegisterStatus = (changeObj) => {
  const cashDrawer = countCashDrawer();
  const tempCashDrawer = cashDrawer.clone();
  console.log(
    `Change: ${changeObj.total()}\nDrawer: ${tempCashDrawer.total()}\nEqual: ${
      Number(changeObj.total().toFixed(2)) ===
      Number(tempCashDrawer.total().toFixed(2))
    }`
  );
  if (
    Number(changeObj.total().toFixed(2)) ===
    Number(tempCashDrawer.total().toFixed(2))
  ) {
    updateRegister(tempCashDrawer, statusMsgs.closed);
  } else if (changeObj.total() > tempCashDrawer.total()) {
    updateRegister(changeObj, statusMsgs.insuf);
  } else {
    const isChangeOnHand = cid.map(
      (unit) => changeObj[unit[0]].value() <= tempCashDrawer[unit[0]].value()
    );

    if (isChangeOnHand.every((test) => test)) {
      updateRegister(changeObj, statusMsgs.open);
    } else {
      const newChange = getAvailableChangeBreakdown(
        changeObj.total(),
        tempCashDrawer
      );

      if (newChange.total().toFixed(2) === changeObj.total().toFixed(2)) {
        updateRegister(newChange, statusMsgs.open);
      } else {
        updateRegister({}, statusMsgs.insuf);
      }
    }
  }
};

const calculateChange = (amt, paid) => {
  if (paid < amt) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  const changeAmount = paid - amt;

  if (changeAmount === 0) {
    updateRegister({}, statusMsgs.exact);
    return;
  }

  const changeObj = getExactChangeBreakdown(changeAmount);

  getRegisterStatus(changeObj);
};

purchaseBtn.addEventListener("click", purchase);
updateCashDrawer(new MoneyBreakdown());
priceElement.textContent = price.toFixed(2);
*/