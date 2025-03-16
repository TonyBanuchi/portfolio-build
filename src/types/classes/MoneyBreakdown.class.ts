import { eCashRegisterStatusMessages } from "../enums/cashRegisterStatusMessages.enum";
import CalculateChangeResponse from "./CalculateChangeResponse";
import { MoneyUnit } from "./MoneyUnit.class";

export class MoneyBreakdown extends Object {
  PENNY: MoneyUnit;
  NICKEL: MoneyUnit;
  DIME: MoneyUnit;
  QUARTER: MoneyUnit;
  ONE: MoneyUnit;
  FIVE: MoneyUnit;
  TEN: MoneyUnit;
  TWENTY: MoneyUnit;
  FIFTY: MoneyUnit;
  'ONE HUNDRED': MoneyUnit;

  constructor(
    pennies: number = 0,
    nickels: number = 0,
    dimes: number = 0,
    quarters: number = 0,
    ones: number = 0,
    fives: number = 0,
    tens: number = 0,
    twenties: number = 0,
    fifties: number = 0,
    hundreds: number = 0
  ) {
    super();
    this.PENNY = new MoneyUnit(pennies, 0.01, 'Pennies');
    this.NICKEL = new MoneyUnit(nickels, 0.05, 'Nickels');
    this.DIME = new MoneyUnit(dimes, 0.10, 'Dimes');
    this.QUARTER = new MoneyUnit(quarters, 0.25, 'Quarters');
    this.ONE = new MoneyUnit(ones, 1.00, 'Ones');
    this.FIVE = new MoneyUnit(fives, 5.00, 'Fives');
    this.TEN = new MoneyUnit(tens, 10.00, 'Tens');
    this.TWENTY = new MoneyUnit(twenties, 20.00, 'Twenties');
    this.FIFTY = new MoneyUnit(fifties, 50.00, 'Fifties');
    this['ONE HUNDRED'] = new MoneyUnit(hundreds, 100.00, 'Hundreds');
  };

  total(): number {
    return parseFloat((this.PENNY.value() +
      this.NICKEL.value() +
      this.DIME.value() +
      this.QUARTER.value() +
      this.ONE.value() +
      this.FIVE.value() +
      this.TEN.value() +
      this.TWENTY.value() +
      this.FIFTY.value() +
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
    clone.FIFTY.unitCount = this.FIFTY.unitCount;
    clone["ONE HUNDRED"].unitCount = this["ONE HUNDRED"].unitCount;


    return clone;
  }

  addMoney(moneyIn: MoneyBreakdown): void {
    this.PENNY.unitCount += moneyIn.PENNY.unitCount;
    this.NICKEL.unitCount += moneyIn.NICKEL.unitCount;
    this.DIME.unitCount += moneyIn.DIME.unitCount;
    this.QUARTER.unitCount += moneyIn.QUARTER.unitCount;
    this.ONE.unitCount += moneyIn.ONE.unitCount;
    this.FIVE.unitCount += moneyIn.FIVE.unitCount;
    this.TEN.unitCount += moneyIn.TEN.unitCount;
    this.TWENTY.unitCount += moneyIn.TWENTY.unitCount;
    this.FIFTY.unitCount += moneyIn.FIFTY.unitCount;
    this["ONE HUNDRED"].unitCount += moneyIn["ONE HUNDRED"].unitCount;
  }

  removeMoney(moneyIn: MoneyBreakdown): void {
    this.PENNY.unitCount -= moneyIn.PENNY.unitCount;
    this.NICKEL.unitCount -= moneyIn.NICKEL.unitCount;
    this.DIME.unitCount -= moneyIn.DIME.unitCount;
    this.QUARTER.unitCount -= moneyIn.QUARTER.unitCount;
    this.ONE.unitCount -= moneyIn.ONE.unitCount;
    this.FIVE.unitCount -= moneyIn.FIVE.unitCount;
    this.TEN.unitCount -= moneyIn.TEN.unitCount;
    this.TWENTY.unitCount -= moneyIn.TWENTY.unitCount;
    this.FIFTY.unitCount -= moneyIn.FIFTY.unitCount;
    this["ONE HUNDRED"].unitCount -= moneyIn["ONE HUNDRED"].unitCount;
  }

  makeChange(price: number, moneyIn: MoneyBreakdown): CalculateChangeResponse {
    try {
      let changeAmount = parseFloat((moneyIn.total() - price).toFixed(2));
      const immChangeAmount = parseFloat((moneyIn.total() - price).toFixed(2));

      // Not Enough Cash Paid - Return Cash In - No Transaction
      if (changeAmount < 0) {
        return new CalculateChangeResponse(eCashRegisterStatusMessages.insuf, moneyIn);
      }

      // Exact change provided - add money in - complete transaction
      if (changeAmount === 0) {
        return new CalculateChangeResponse(eCashRegisterStatusMessages.exact, new MoneyBreakdown());
      }

      // Change Due - calcuate change
      // Money object for counted change
      const changeInHand = new MoneyBreakdown();

      // Money object for immutable cashDrawer
      const cashDrawerClone = this.clone();

      // Loop for denominations
      while (changeAmount >= 100 && cashDrawerClone["ONE HUNDRED"].unitCount > 0) {
        cashDrawerClone["ONE HUNDRED"].unitCount--;
        changeInHand["ONE HUNDRED"].unitCount++;
        changeAmount -= 100;
      }

      while (changeAmount >= 50 && cashDrawerClone.FIFTY.unitCount > 0) {
        cashDrawerClone.FIFTY.unitCount--;
        changeInHand.FIFTY.unitCount++;
        changeAmount -= 50;
      }

      while (changeAmount >= 20 && cashDrawerClone.TWENTY.unitCount > 0) {
        cashDrawerClone.TWENTY.unitCount--;
        changeInHand.TWENTY.unitCount++;
        changeAmount -= 20;
      }

      while (changeAmount >= 10 && cashDrawerClone.TEN.unitCount > 0) {
        cashDrawerClone.TEN.unitCount--;
        changeInHand.TEN.unitCount++;
        changeAmount -= 10;
      }

      while (changeAmount >= 5 && cashDrawerClone.FIVE.unitCount > 0) {
        cashDrawerClone.FIVE.unitCount--;
        changeInHand.FIVE.unitCount++;
        changeAmount -= 5;
      }

      while (changeAmount >= 1 && cashDrawerClone.ONE.unitCount > 0) {
        cashDrawerClone.ONE.unitCount--;
        changeInHand.ONE.unitCount++;
        changeAmount -= 1;
      }

      while (changeAmount >= 0.25 && cashDrawerClone.QUARTER.unitCount > 0) {
        cashDrawerClone.QUARTER.unitCount--;
        changeInHand.QUARTER.unitCount++;
        changeAmount = parseFloat((changeAmount - .25).toFixed(2));
      }

      while (changeAmount >= 0.10 && cashDrawerClone.DIME.unitCount > 0) {
        cashDrawerClone.DIME.unitCount--;
        changeInHand.DIME.unitCount++;
        changeAmount = parseFloat((changeAmount - .10).toFixed(2));
      }

      while (changeAmount >= 0.05 && cashDrawerClone.NICKEL.unitCount > 0) {
        cashDrawerClone.NICKEL.unitCount--;
        changeInHand.NICKEL.unitCount++;
        changeAmount = parseFloat((changeAmount - .05).toFixed(2));
      }

      while (changeAmount >= 0.01 && cashDrawerClone.PENNY.unitCount > 0) {
        cashDrawerClone.PENNY.unitCount--;
        changeInHand.PENNY.unitCount++;
        changeAmount = parseFloat((changeAmount - .01).toFixed(2));
      }

      if (changeAmount === 0 && changeInHand.total() === immChangeAmount) {
        return new CalculateChangeResponse(eCashRegisterStatusMessages.open, changeInHand)
      } else {
        throw new Error(eCashRegisterStatusMessages.Failed);
      }
    } catch (e) {
      console.log(e);
      return new CalculateChangeResponse(eCashRegisterStatusMessages.Failed, moneyIn)
    }
  }

  generateCashArray(): string[][] {
    return [
      [this.PENNY.plural, this.PENNY.unitCount.toString(), `$${this.PENNY.value().toFixed(2)}`],
      [this.NICKEL.plural, this.NICKEL.unitCount.toString(), `$${this.NICKEL.value().toFixed(2)}`],
      [this.DIME.plural, this.DIME.unitCount.toString(), `$${this.DIME.value().toFixed(2)}`],
      [this.QUARTER.plural, this.QUARTER.unitCount.toString(), `$${this.QUARTER.value().toFixed(2)}`],
      [this.ONE.plural, this.ONE.unitCount.toString(), `$${this.ONE.value().toFixed(2)}`],
      [this.FIVE.plural, this.FIVE.unitCount.toString(), `$${this.FIVE.value().toFixed(2)}`],
      [this.TEN.plural, this.TEN.unitCount.toString(), `$${this.TEN.value().toFixed(2)}`],
      [this.TWENTY.plural, this.TWENTY.unitCount.toString(), `$${this.TWENTY.value().toFixed(2)}`],
      [this.FIFTY.plural, this.FIFTY.unitCount.toString(), `$${this.FIFTY.value().toFixed(2)}`],
      [this["ONE HUNDRED"].plural, this["ONE HUNDRED"].unitCount.toString(), `$${this["ONE HUNDRED"].value().toFixed(2)}`]
    ]
  }
}
