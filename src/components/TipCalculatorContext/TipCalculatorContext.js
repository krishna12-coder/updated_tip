import React, { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";

export const TipCalculatorContext = createContext();

export const TipCalculatorProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [tip, setTip] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [currencySymbol, setCurrencySymbol] = useState("$"); // Default to $

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const { currency } = response.data;
        setCurrencySymbol(currency || "$"); // Fallback to $ if no currency found
      } catch (error) {
        console.error("Failed to fetch currency:", error);
      }
    };

    fetchCurrency();
  }, []);

  const tipAmount = useMemo(
    () => bill * (sliderValue / 100),
    [bill, sliderValue]
  );
  const totalAmount = useMemo(() => bill + tipAmount, [bill, tipAmount]);
  const tipPerPerson = useMemo(() => tipAmount / 1, [tipAmount]); // Example calculation

  return (
    <TipCalculatorContext.Provider
      value={{
        bill,
        setBill,
        customTip,
        setCustomTip,
        setTip,
        tip,
        sliderValue,
        setSliderValue,
        tipAmount,
        totalAmount,
        tipPerPerson,
        currencySymbol, // Pass currency symbol to context
      }}
    >
      {children}
    </TipCalculatorContext.Provider>
  );
};
