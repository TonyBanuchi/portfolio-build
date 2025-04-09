// REACT Imports
import { useState } from 'react';

// Logic imports
import { BehaviorSubject, Observable } from 'rxjs';

// Component Imports
import { Button } from '@mui/material';
import { KeyPad } from './KeyPad';


// Style Imports
import styles from './ItemsList.module.scss';

export interface ICashCounterProps {
  sendTotal: (total: number) => void;
  resetTrigger: Observable<boolean>;

}

export function ItemsList(props: ICashCounterProps) {
  // STATE Context
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [items, setItems] = useState<number[]>([]);

  // configure parent trigger response
  props.resetTrigger.subscribe((observer) => {
    if(observer){
      clearList();
    }
  })

  let keypadTriggerValue = false;
  const keyPadClear: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(keypadTriggerValue);

  // Add item to list handler
  function addItem(item: number): void {
    setItems([...items, item]);
    setTotalHandler();
  }

  // calculate and update total
  function setTotalHandler(): void {
    const newTotal = items.reduce((p: number, a: number) => parseInt((a += p).toFixed(2)), 0);
    setTotalPrice(newTotal);
  }

  // clear item list entries
  const clearList = () => { 
    setItems([]) 
    keypadTriggerValue = !keypadTriggerValue;
    keyPadClear.next(keypadTriggerValue);
    setTotalPrice(0);
  };

  function sendTotalHandler():void {
      props.sendTotal(totalPrice);
  }

  return (
    <>
      <div className={`${styles.register} flex flex-col`}>
      <div className={`flex flex-row`}>
        <div className={`${styles["items-list"]}`}>
          <ul>
            {items.map((item) => (
              <li key={crypto.randomUUID()} >{item}</li>
            ))}
          </ul>
        </div>
        <div id="price-display" className={`${styles["purchase-controls"]}`}>{`$${totalPrice.toFixed(2)}`}
        <KeyPad sendItem={(item: number) => addItem(item)} clear={keyPadClear}/>
        </div>
        </div>
        <div className={`${styles["btn-panel"]}`}>
        <Button id="purchase-btn" variant="contained" onClick={sendTotalHandler}>
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
