/** @format */

import { createContext, useCallback, useState } from 'react';
import { IProduct } from './../models/models';

export interface IContext {
  currentCataloge: Array<IProduct>;
  setCurrentCataloge: any;
  currentCart: Array<IProduct>;
  setCurrentCart: any;
}
const defaultContext: IContext = {
  currentCataloge: [],
  setCurrentCataloge: null,
  currentCart: [],
  setCurrentCart: null,
};

export const Context = createContext<IContext>(defaultContext);
export const useContextEdit = (): IContext => {
  const [currentCataloge, setCurrentCatalogeState] = useState(defaultContext.currentCataloge);
  const [currentCart, setCurrentCartState] = useState(defaultContext.currentCart);

  const setCurrentCataloge = useCallback((value: Array<IProduct>) => {
    if (value) setCurrentCatalogeState(value);
  }, []);
  const setCurrentCart = useCallback((value: Array<IProduct>) => {
    if (value) setCurrentCartState(value);
  }, []);

  return {
    currentCataloge,
    setCurrentCataloge,
    currentCart,
    setCurrentCart,
  };
};
