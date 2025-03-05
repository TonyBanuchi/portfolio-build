import { MoneyUnit } from "./MoneyUnit.class";

export class MoneyBreakdown extends Object{
  PENNY: MoneyUnit;
  NICKEL: MoneyUnit;
  DIME: MoneyUnit;
  QUARTER: MoneyUnit;
  ONE: MoneyUnit;
  FIVE: MoneyUnit;
  TEN: MoneyUnit;
  TWENTY: MoneyUnit;
  'ONE HUNDRED': MoneyUnit;
  
  constructor(){
    super();
    this.PENNY = new MoneyUnit(0,0.01,'Pennies');
    this.NICKEL = new MoneyUnit(0,0.05,'Nickels');
    this.DIME = new MoneyUnit(0,0.10,'Dimes');
    this.QUARTER = new MoneyUnit(0,0.25,'Quarters');
    this.ONE = new MoneyUnit(0,1.00,'Ones');
    this.FIVE = new MoneyUnit(0,5.00,'Fives');
    this.TEN = new MoneyUnit(0,10.00,'Tens');
    this.TWENTY = new MoneyUnit(0,20.00,'Twenties');
    this['ONE HUNDRED'] = new MoneyUnit(0,100.00,'Hundreds');
  };

  total(): number{
     return parseFloat((this.PENNY.value() + 
    this.NICKEL.value() + 
    this.DIME.value() + 
    this.QUARTER.value() + 
    this.ONE.value() + 
    this.FIVE.value() + 
    this.TEN.value() + 
    this.TWENTY.value() + 
    this['ONE HUNDRED'].value()).toFixed(2));
  }

  clone(): MoneyBreakdown {
    const clone: MoneyBreakdown = new MoneyBreakdown();

    clone.PENNY.unitCount = this.PENNY.unitCount;
    clone.NICKEL.unitCount = this.NICKEL.unitCount;
    clone.DIME.unitCount = this.DIME.unitCount;
    clone.QUARTER.unitCount = this.QUARTER.unitCount;
    clone.ONE.unitCount = this.ONE.unitCount;
    clone.FIVE.unitCount = this.FIVE.unitCount;
    clone.TEN.unitCount = this.TEN.unitCount;
    clone.TWENTY.unitCount = this.TWENTY.unitCount;
    clone["ONE HUNDRED"].unitCount = this["ONE HUNDRED"].unitCount;
    

    return clone;
  }
}
