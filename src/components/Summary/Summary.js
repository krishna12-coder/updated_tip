import React, { useContext, useEffect, useState } from 'react';
import {
  BottomContainer,
  ResetButton,
  SummaryContainer,
  TipInfoContainer,
  TopContainer,
  TotalContainer,
} from './Summary.styled';
import { Text } from '../Text/Text';
import { TipInfo } from './TipInfo/TipInfo';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';
import { getCurrencyByIP } from '../../utils/currencyUtils'; // Corrected import path

export const Summary = () => {
  const {
    bill,
    tip,
    customTip,
    setCustomTip,
    setTip,
    setBill,
    tipPerPerson,
    totalAmount,
    setSliderValue,
  } = useContext(TipCalculatorContext); // Corrected typo

  const [currencySymbol, setCurrencySymbol] = useState('$'); // Default to USD

  useEffect(() => {
    const fetchCurrency = async () => {
      const symbol = await getCurrencyByIP();
      setCurrencySymbol(symbol);
    };

    fetchCurrency();
  }, []);

  const handleReset = () => {
    setCustomTip(0);
    setTip(0);
    setBill(0);
    setSliderValue(0); // Reset slider value
  };

  return (
    <SummaryContainer>
      <TopContainer>
        <TotalContainer>
          <TipInfo
            title1={'Tip Amount'}
            title2={'/ person'}
            value={tipPerPerson ? `${currencySymbol}${tipPerPerson.toFixed(2)}` : `${currencySymbol}0.00`}
          />
          <TipInfo
            title1={'Total Amount'}
            title2={''}
            value={totalAmount ? `${currencySymbol}${totalAmount.toFixed(2)}` : `${currencySymbol}0.00`}
          />
        </TotalContainer>
      </TopContainer>

      <BottomContainer>
        <ResetButton data-testid="reset-button" onClick={handleReset}>
          <Text>Reset</Text>
        </ResetButton>
      </BottomContainer>
    </SummaryContainer>
  );
};
