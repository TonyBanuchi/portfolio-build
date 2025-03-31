// REACT Imports
import React, { useState } from "react";

// Component Imports
import CustomNumberField from "../../reusable/NumberField";
import { Button } from "@mui/material";

// type imports
import cashRegisterNumberFormat from "../../../types/constants/cashRegisterNumberFormat.const";

// Style Imports
import styles from "./KeyPad.module.scss";
import { BehaviorSubject, Observable } from "rxjs";

export interface IKeyPadProps {
  sendItem: (total: number) => void;
  clear: Observable<boolean>;
}

export function KeyPad(props: IKeyPadProps) {
  // STATE Context
  const [price, setPrice] = useState<number>(0);
  let clearState = false;

  // subscribe to triggers
  props.clear.subscribe((x: boolean) => {
    if (x !== clearState) {
      clearState = !clearState;
      setPrice(0);
      clearEntry();
    }
  });

  // Price input handler
  function setPriceHandler(value: number): void {
    setPrice(value);
    return;
  }
  let clearTriggerValue = false;
  const clearTrigger: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    clearTriggerValue
  );

  function addItem(): void {
    props.sendItem(price);
    clearEntry();
  }

  function clearEntry(): void {
    clearTriggerValue = !clearTriggerValue;
    clearTrigger.next(clearTriggerValue);
  }

  function keyPadHandler(key: number): void {
    let newValue = price.toFixed(2);
    newValue = newValue.replace(".", "");
    newValue += `${key}`;
    newValue =
      newValue.substring(0, newValue.length - 2) +
      "." +
      newValue.substring(newValue.length - 2);
    setPrice(Number(newValue));
  }

  return (
    <>
      <div className={`flex flex-col ${styles["key-pad-container"]}`}>
        <div className={`${styles["price-entry-display"]}`}>
          <CustomNumberField
            label={"Item Price"}
            name={"itemPrice"}
            fieldId={React.useId()}
            changeHandler={setPriceHandler}
            step={0.01}
            smallStep={0.1}
            largeStep={1}
            format={cashRegisterNumberFormat}
            clearTrigger={clearTrigger}
          />
        </div>
        <div className={`flex flex-row ${styles["key-pad"]}`}>
          <div className={`flex flex-col ${styles["key-pad-left"]}`}>
            <Button id="7" variant="contained" onClick={() => keyPadHandler(7)}>
              7
            </Button>
            <Button id="4" variant="contained" onClick={() => keyPadHandler(4)}>
              4
            </Button>
            <Button id="1" variant="contained" onClick={() => keyPadHandler(1)}>
              1
            </Button>
            <Button id="clear" variant="contained" onClick={clearEntry}>
              Clear
            </Button>
          </div>
          <div className={`flex flex-col ${styles["key-pad-center"]}`}></div>
          <Button id="8" variant="contained" onClick={() => keyPadHandler(8)}>
            8
          </Button>
          <Button id="5" variant="contained" onClick={() => keyPadHandler(5)}>
            5
          </Button>
          <Button id="2" variant="contained" onClick={() => keyPadHandler(2)}>
            2
          </Button>
          <Button id="0" variant="contained" onClick={() => keyPadHandler(0)}>
            0
          </Button>
          <div className={`flex flex-col ${styles["key-pad-right"]}`}></div>
        </div>
        <Button id="9" variant="contained" onClick={() => keyPadHandler(9)}>
          9
        </Button>
        <Button id="6" variant="contained" onClick={() => keyPadHandler(6)}>
          6
        </Button>
        <Button id="3" variant="contained" onClick={() => keyPadHandler(3)}>
          3
        </Button>
        <Button id="add" variant="contained" onClick={addItem}>
          Add
        </Button>
        <div className={`flex flex-row ${styles["key-pad-actions"]}`}></div>
      </div>
    </>
  );
}
