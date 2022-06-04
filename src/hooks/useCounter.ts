import { RootState, useAppDispatch, useAppSelector } from '../store';
import {
  addPassion,
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  updatePassion,
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

  const onAddPassion = (message: string) => dispatch(addPassion(message));

  const onUpdatePassion = (index: number) => dispatch(updatePassion(index));

  return {
    counter,
    id: counter.id,
    increase,
    decrease,
    increaseByAmount,
    increaseAsync,
    increaseIfOdd,
    onAddPassion,
    onUpdatePassion,
  };
};
