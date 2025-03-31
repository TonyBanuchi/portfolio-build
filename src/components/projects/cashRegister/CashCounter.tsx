// REACT Imports
import React, { useState } from "react";

// logic imports
import { Observable } from "rxjs";

// type imports
import { MoneyBreakdown } from "../../../types/classes/MoneyBreakdown.class";
import cashRegisterNumberFormat from "../../../types/constants/cashRegisterNumberFormat.const";

// component imports
import CustomNumberField from "../../reusable/NumberField";
import { Button } from "@mui/material";

//style imports
import styles from "./CashCounter.module.scss";
import featureStyles from "./CashRegister.module.scss";

export interface ICashCounterProps {
  sendCashCount: (newCashCount: MoneyBreakdown) => void;
  sendTotal: (total: number) => void;
  resetTrigger: Observable<boolean>;
}

export function CashCounter(props: ICashCounterProps) {
  // Establish State
  const [ones, setOnes] = useState<number>(0);
  const [fives, setFives] = useState<number>(0);
  const [tens, setTens] = useState<number>(0);
  const [twenties, setTwenties] = useState<number>(0);
  const [fifties, setFifties] = useState<number>(0);
  const [hundreds, setHundreds] = useState<number>(0);
  const [pennies, setPennies] = useState<number>(0);
  const [nickles, setNickels] = useState<number>(0);
  const [dimes, setDimes] = useState<number>(0);
  const [quarters, setQuarters] = useState<number>(0);
  const [cash, setCash] = useState<MoneyBreakdown>(new MoneyBreakdown());

  // configure parent trigger response
  props.resetTrigger.subscribe((observer) => {
    if (observer) {
      clearCash();
    }
  });

  // configure state handlers

  function setPenniesHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setPennies(value);
    }
    countCash();
  }

  function setNickelsHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setNickels(value);
    }
    countCash();
  }

  function setDimesHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setDimes(value);
    }
    countCash();
  }

  function setQuartersHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setQuarters(value);
    }
    countCash();
  }

  function setOnesHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setOnes(value);
    }
    countCash();
  }
  function setFivesHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setFives(value);
    }
    countCash();
  }
  function setTensHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setTens(value);
    }
    countCash();
  }
  function setTwentiesHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setTwenties(value);
    }
    countCash();
  }
  function setFiftiesHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setFifties(value);
    }
    countCash();
  }
  function setHundredsHandler(
    value: number | null,
    event: Event | undefined
  ): void {
    if (event && value) {
      setHundreds(value);
    }
    countCash();
  }

  function countCash(): void {
    const newCashCount: MoneyBreakdown = new MoneyBreakdown(
      pennies,
      nickles,
      dimes,
      quarters,
      ones,
      fives,
      tens,
      twenties,
      fifties,
      hundreds
    );
    setCash(newCashCount);
    props.sendTotal(cash.total());
  }

  function submitCash(): void {
    props.sendCashCount(cash);
  }

  function clearCash(): void {
    setPennies(0);
    setNickels(0);
    setDimes(0);
    setQuarters(0);
    setOnes(0);
    setFives(0);
    setTens(0);
    setTwenties(0);
    setFifties(0);
    setHundreds(0);
  }

  return (
    <>
      <p>start cash counter</p>
      <div
        className={`${styles["cash-input"]} ${featureStyles["purchase-controls"]} flex flex-row`}
      >
        <div className={styles.coins}>
          <div className={styles["coin-col-one"]}>
            <CustomNumberField
              label={"Pennies"}
              name={"pennies"}
              fieldId={React.useId()}
              changeHandler={setPenniesHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
            <CustomNumberField
              label={"Nickels"}
              name={"nickels"}
              fieldId={React.useId()}
              changeHandler={setNickelsHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
          </div>
          <div className={styles["coin-col-two"]}>
            <CustomNumberField
              label={"Dimes"}
              name={"dimes"}
              fieldId={React.useId()}
              changeHandler={setDimesHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
            <CustomNumberField
              label={"Quarters"}
              name={"quarters"}
              fieldId={React.useId()}
              changeHandler={setQuartersHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
          </div>
        </div>
        <div className={styles.bills}>
          <div className={styles["bill-col-one"]}>
            <CustomNumberField
              label={"Ones"}
              name={"ones"}
              fieldId={React.useId()}
              changeHandler={setOnesHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
            <CustomNumberField
              label={"Fives"}
              name={"fives"}
              fieldId={React.useId()}
              changeHandler={setFivesHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
            <CustomNumberField
              label={"Tens"}
              name={"tens"}
              fieldId={React.useId()}
              changeHandler={setTensHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
          </div>
          <div className={styles["bill-col-two"]}>
            <CustomNumberField
              label={"Twenties"}
              name={"twenties"}
              fieldId={React.useId()}
              changeHandler={setTwentiesHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
            <CustomNumberField
              label={"Fifties"}
              name={"fifties"}
              fieldId={React.useId()}
              changeHandler={setFiftiesHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
            <CustomNumberField
              label={"One Hundreds"}
              name={"hundreds"}
              fieldId={React.useId()}
              changeHandler={setHundredsHandler}
              step={1}
              smallStep={1}
              largeStep={10}
              format={cashRegisterNumberFormat}
            />
          </div>
        </div>
        <div className="btn-panel">
          <Button id="submit-btn" variant="contained" onClick={submitCash}>
            Submit
          </Button>
          <Button id="clear-btn" variant="contained" onClick={clearCash}>
            Clear
          </Button>
        </div>
      </div>
      <p>end cash counter</p>

    </>
  );
}
