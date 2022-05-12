import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import styles from '../styles/Counter.module.css';

export function Counter() {
  const {
    counter,
    increase,
    decrease,
    increaseByAmount,
    increaseAsync,
    increaseIfOdd,
  } = useCounter();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrease()}
        >
          -
        </button>
        <span className={styles.value}>{counter.value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increase()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => increaseByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => increaseAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => increaseIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
