// REACT Imports
import React, { useState } from 'react';

// Logic imports
import { Observable } from 'rxjs';

// Component Imports
import CustomNumberField from '../../reusable/NumberField';
import { Button } from '@mui/material';

// type imports
import cashRegisterNumberFormat from '../../../types/constants/cashRegisterNumberFormat.const';

// Style Imports
import styles from './ItemsList.module.scss';

export interface ICashCounterProps {
  sendTotal: (total: number) => void;
  resetTrigger: Observable<boolean>;

}

export function ItemsList(props: ICashCounterProps) {
  // STATE Context
  const [price, setPrice] = useState<number>(0);
  const [items, setItems] = useState<number[]>([]);

  // configure parent trigger response
  props.resetTrigger.subscribe((observer) => {
    if(observer){
      clearList();
    }
  })


  // Price input handler
  function setPriceHandler(value: number | null, event: Event | undefined): void {
    if (event && value) { setPrice(value); }
    return;
  }

  // Add item to list handler
  function addItem(): void {
    setItems([...items, price]);
    setTotalHandler();
  }

  // calculate and update total
  function setTotalHandler(): void {
    const newTotal = items.reduce((p: number, a: number) => parseInt((a += p).toFixed(2)), 0);
    props.sendTotal(newTotal);
  }

  // clear item list entries
  const clearList = () => { setItems([]) };

  return (
    <>
      <div id="purchase-container" className={styles.register}>
        <div className="items-list">
          <ul>
            {items.map((item) => (
              <li key={crypto.randomUUID()} >{item}</li>
            ))}
          </ul>
        </div>
        <div id="price-display" className="purchase-controls">
          <CustomNumberField
            label={"Item Price"}
            name={"itemPrice"}
            fieldId={React.useId()}
            changeHandler={setPriceHandler}
            step={.01}
            smallStep={.1}
            largeStep={1}
            format={cashRegisterNumberFormat}
          /><p id="price-symbol">
            Price: $<span id="price-value">{price}</span>
          </p>
        </div>
        <div className="btn-panel">
        <Button id="purchase-btn" variant="contained" onClick={addItem}>
          Add Item
        </Button>
        <Button id="acknowledge-btn" variant="contained" onClick={clearList}>
          Clear
        </Button>
      </div>
    </div >
    </>
  );
}
