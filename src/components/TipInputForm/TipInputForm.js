import React, { useContext, useEffect } from 'react';
import {
  SelectTipContainer,
  SelectTipGrid,
  SelectTipItems,
  TipInputFormContainer,
  CustomTipInput,
  SliderContainer,
  SliderValueText
} from './TipInputForm.styled';
import { InputField } from '../InputField/InputField';
import { Text } from '../Text/Text';
import colors from '../colors/colors';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';

export const TipInputForm = () => {
  const {
    customTip,
    setCustomTip,
    setTip,
    tip,
    bill,
    sliderValue,
    setSliderValue,
    currencySymbol // Get currency symbol from context
  } = useContext(TipCalculatorContext);

  const handleButtonClick = (percentage) => {
    if (customTip !== 0) {
      setCustomTip(0);
    }
    setTip(percentage);
    setSliderValue(percentage); // Update slider value when button is clicked
  };

  const handleOnChange = (e) => {
    if (tip !== 0) {
      setTip(0);
    }
    setCustomTip(Number(e.target.value));
    setSliderValue(Number(e.target.value)); // Update slider value when custom tip is entered
  };

  const handleSliderChange = (e) => {
    const percentage = Number(e.target.value);
    setSliderValue(percentage);
    setTip(0); // Reset tip when slider is used
    setCustomTip(0); // Clear custom tip value
  };

  useEffect(() => {
    setTip(sliderValue);
  }, [sliderValue, setTip]);

  return (
    <TipInputFormContainer>
      <InputField
        title="Bill"
        placeholder="0"
        type="number"
        value={bill}
      />
      <SelectTipContainer>
        <Text padding="0 0 10px 0" color={colors.neutral.darkGrayishCyan}>
          Select Tip %
        </Text>
        <SelectTipGrid data-testid="tip-buttons">
          {[5, 10, 15, 20].map((percentage) => (
            <SelectTipItems
              onClick={() => handleButtonClick(percentage)}
              isSelected={tip === percentage || sliderValue === percentage}
              key={percentage}
            >
              <Text>{percentage}%</Text>
            </SelectTipItems>
          ))}
          <CustomTipInput
            placeholder="Custom"
            type="number"
            onChange={handleOnChange}
            value={customTip ? customTip : ''}
            data-cy="customInput-cy-btn"
          />
        </SelectTipGrid>
        <SliderContainer>
          <input
            type="range"
            min="0"
            max="30" // Limit the maximum value to 30
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
            style={{ width: '100%' }}
          />
          <SliderValueText>
            {sliderValue}%
          </SliderValueText>
        </SliderContainer>
      </SelectTipContainer>
    </TipInputFormContainer>
  );
};
