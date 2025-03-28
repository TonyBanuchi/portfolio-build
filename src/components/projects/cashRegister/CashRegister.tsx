// React Imports
import { useState } from "react";

// logic imports
import { BehaviorSubject } from "rxjs";

// componenet imports
import { Button } from "@mui/material";
import { ItemsList } from "./ItemsList";
import { CashCounter } from "./CashCounter";

// type imports
import { MoneyBreakdown } from "../../../types/classes/MoneyBreakdown.class";
import { eCashRegisterStatusMessages } from "../../../types/enums/cashRegisterStatusMessages.enum";
import CalculateChangeResponse from "../../../types/classes/CalculateChangeResponse";

// Style Imports
import styles from "./CashRegister.module.scss";
import UnderConstruction from "../../under-construction/UnderConstruction";

export default function CashRegister() {
  // Establish State variables
  const [cashDrawer, setCashDrawer] = useState<MoneyBreakdown>(
    new MoneyBreakdown()
  );
  const [cashDrawerState, setDrawerState] =
    useState<eCashRegisterStatusMessages>(eCashRegisterStatusMessages.load);
  const [changeBrkDwn, setChangeBrkDwn] = useState<MoneyBreakdown>(
    new MoneyBreakdown()
  );
  const [changeTotal, setChangeTotal] = useState<number>(0);

  // state from List
  const [priceValue, setPriceValue] = useState<number>(0);

  // state from CashCounter for transactions
  const [moneyIn, setMoneyIn] = useState<MoneyBreakdown>(new MoneyBreakdown());
  const [amountPaid, setAmountPaid] = useState<number>(0);

  // Clears transaction variables to prepare for next sale
  const clearTrigger: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  const resetRegister = () => {
    clearTrigger.next(true);
    clearTrigger.next(false);
  };

  // Set event handlers
  function setCashDrawerHandler(
    moneyChange: MoneyBreakdown,
    type: "add" | "remove"
  ): void {
    const clone: MoneyBreakdown = cashDrawer.clone();
    switch (type) {
      case "add":
        clone.addMoney(moneyChange);
        break;
      case "remove":
        clone.removeMoney(moneyChange);
        break;
    }

    setCashDrawer(clone);
  }

  const setDrawerStateHandler = (status: eCashRegisterStatusMessages): void => {
    setDrawerState(status);
  };

  const updateRegister = (update: CalculateChangeResponse): void => {
    switch (update.status) {
      // Money In returned to customer, no money added or removed
      case eCashRegisterStatusMessages.Failed: {
        setDrawerStateHandler(eCashRegisterStatusMessages.Failed);
        break;
      }

      // Money in added to cash drawer, no money returned
      case eCashRegisterStatusMessages.exact: {
        setDrawerStateHandler(eCashRegisterStatusMessages.exact);
        setCashDrawerHandler(moneyIn, "add");
        break;
      }

      // Money returned to customer, nothing added or removed from cash drawer
      case eCashRegisterStatusMessages.insuf: {
        setDrawerStateHandler(eCashRegisterStatusMessages.insuf);
        break;
      }

      // Drawer Closed previous state acknowledged
      case eCashRegisterStatusMessages.closed: {
        setDrawerStateHandler(eCashRegisterStatusMessages.closed);
        setCashDrawerHandler(update.change, "remove");
        break;
      }

      // Remove all money from cash draw and prepare for new load
      case eCashRegisterStatusMessages.empty: {
        setDrawerStateHandler(eCashRegisterStatusMessages.empty);
        setCashDrawer(new MoneyBreakdown());
        break;
      }

      // Drawer Open ready to recieve new cash
      case eCashRegisterStatusMessages.new: {
        setDrawerStateHandler(eCashRegisterStatusMessages.new);
        break;
      }

      // Add new cash to existing drawer
      case eCashRegisterStatusMessages.load: {
        setDrawerStateHandler(eCashRegisterStatusMessages.load);
        setCashDrawerHandler(moneyIn, "add");
        break;
      }

      // Sale conducted, new money in, prepare for change out
      case eCashRegisterStatusMessages.open: {
        setDrawerStateHandler(eCashRegisterStatusMessages.open);
        setCashDrawerHandler(moneyIn, "add");
        setChangeBrkDwn(update.change);
        setChangeTotal(update.change.total());
        break;
      }

      case eCashRegisterStatusMessages.systemError: {
        setDrawerStateHandler(eCashRegisterStatusMessages.Failed);
        break;
      }
    }
  };

  const purchase = () => {
    const makeChangeResponse: CalculateChangeResponse = cashDrawer.makeChange(
      priceValue,
      moneyIn
    );
    updateRegister(makeChangeResponse);
  };

  // Acknowledge register state
  const acknowledge = (): void => {
    switch (cashDrawerState) {
      /**
       * Action: Acknowledged Failed, Insuff, or exact change transaction
       * Update: Close drawer, and clear transaction details
       */
      case (eCashRegisterStatusMessages.exact,
      eCashRegisterStatusMessages.insuf,
      eCashRegisterStatusMessages.Failed): {
        setDrawerStateHandler(eCashRegisterStatusMessages.closed);
        resetRegister();
        break;
      }

      /**
       * Action: Register cleared, empty register remains
       * Update: Change status to new and launch cash input modal.
       */
      // Remove all money from cash drawer and prepare for new load
      case eCashRegisterStatusMessages.empty: {
        setDrawerStateHandler(eCashRegisterStatusMessages.new);
        break;
      }

      /**
       * Action: Drawer placed in new state, moeny-in provided
       * Update:
       */
      // Drawer Open ready to recieve new cash
      case eCashRegisterStatusMessages.new: {
        setDrawerStateHandler(eCashRegisterStatusMessages.open);
        break;
      }

      /**
       * Action:
       * Update:
       */
      // Add new cash to existing drawer
      case eCashRegisterStatusMessages.load: {
        setDrawerStateHandler(eCashRegisterStatusMessages.open);
        break;
      }

      /**
       * Action:
       * Update:
       */
      // Sale conducted, new money in, prepare for change out
      case eCashRegisterStatusMessages.open: {
        setDrawerStateHandler(eCashRegisterStatusMessages.open);
        setCashDrawerHandler(moneyIn, "add");
        break;
      }

      /**
       * Action:
       * Update:
       */
      case eCashRegisterStatusMessages.systemError: {
        setDrawerStateHandler(eCashRegisterStatusMessages.Failed);
        break;
      }
    }
  };

  // Acknowledge register state
  const retry = (): void => {
    switch (cashDrawerState) {
      // Money In returned to customer, no money added or removed
      case (eCashRegisterStatusMessages.Failed,
      // Money returned to customer, nothing added or removed from cash drawer
      eCashRegisterStatusMessages.insuf): {
        purchase();
        break;
      }
    }
  };

  if (false){return (<><UnderConstruction /></>)}
  return (
    <>
      <div className={`${styles['content-container']} flex flex-col soft-padding`}>
        <div className={`${styles['title-container']}`}>
          <h1 className={styles.title}>Cash Register Calculator</h1>
        </div>
        <div id="purchase-container" className={styles.register}>
          <ItemsList sendTotal={setPriceValue} resetTrigger={clearTrigger} />
          <div id="price-display" className={`${styles['purchase-controls']}`}>
            <p id="price-symbol">
              Price: $<span id="price-value">{priceValue}</span>
            </p>
          </div>
          <div id="amtPaid-display" className={`${styles['purchase-controls']}`}>
            <p id="amtPaid-symbol">
              Amount Paid: $<span id="amtPaid-value">{amountPaid}</span>
            </p>
          </div>
          <div id="cash-input" className={`${styles['purchase-controls']}`}>
            <CashCounter
              sendCashCount={setMoneyIn}
              sendTotal={setAmountPaid}
              resetTrigger={clearTrigger}
            />
            <Button id="purchase-btn" variant="contained" onClick={purchase}>
              Purchase
            </Button>
            <Button
              id="acknowledge-btn"
              variant="contained"
              onClick={acknowledge}
            >
              Acknowledge
            </Button>
            <Button id="retry-btn" variant="contained" onClick={retry}>
              Retry
            </Button>
          </div>
        </div>
        <div id="change-due" className={styles.register}>
          {changeTotal}
        </div>
        <div className={`${styles['money-breakdown']}`}>
          <table>
            <thead>
              <tr>
                <th>Denomination</th>
                <th>#</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {changeBrkDwn.generateCashArray().map((denom: string[]) => {
                return (
                  <tr key={crypto.randomUUID()}>
                    <td>{denom[0]}</td>
                    <td>{denom[1]}</td>
                    <td>{denom[2]}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td />
                <td />
                <td>{changeBrkDwn.total()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}