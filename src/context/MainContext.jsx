import { createContext, useState } from "react";


export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    localStorage.setItem('cart', cartProducts);

  const contextValue = {
    cartProducts,
    setCartProducts
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};