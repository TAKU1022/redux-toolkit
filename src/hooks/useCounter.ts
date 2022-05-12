import { RootState, useAppDispatch, useAppSelector } from '../store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
} from '../store/features/counter/counterSlice';

export const useCounter = () => {
  const counter = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  const increase = () => dispatch(increment());

  const decrease = () => dispatch(decrement());

  const increaseByAmount = (amount: number) =>
    dispatch(incrementByAmount(amount));

  const increaseAsync = (amount: number) => dispatch(incrementAsync(amount));

  const increaseIfOdd = (amount: number) => dispatch(incrementIfOdd(amount));

  return {
    counter,
    increase,
    decrease,
    increaseByAmount,
    increaseAsync,
    increaseIfOdd,
  };
};
