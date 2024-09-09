import React, { useContext, useState } from 'react';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';
import {
  IconContainer,
  StyledInput,
  StyledInputContainer,
  ValidationContainer,
} from './InputField.styled';
import { Text } from '../Text/Text';
import colors from '../colors/colors';

export const InputField = ({ title, type, icon, value }) => {  // Ensure `value` is destructured here
  const { setBill, setNoOfPersons, noOfPersons, currencySymbol } = useContext(TipCalculatorContext);

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const inputValue = Number(e.target.value);

    if (title === 'Bill') {
      setBill(inputValue);
    }
    if (title === 'Number of People') {
      setNoOfPersons(inputValue);
    }

    if (inputValue === 0) {
      setError('Cannot be Zero');
    } else {
      setError('');
    }
  };

  return (
    <StyledInputContainer>
      <ValidationContainer>
        <Text padding="0 0 10px 0" color={colors.neutral.darkGrayishCyan}>
          {title}
        </Text>
        {error && (
          <Text padding="0 0 10px 0" color={colors.error}>
            {error}
          </Text>
        )}
      </ValidationContainer>
      <IconContainer src={icon} />
      <StyledInput
        placeholder={`${currencySymbol}`} // Display the currency symbol in the placeholder
        type={type}
        onChange={handleInputChange}
        error={Boolean(error)}
        data-testid="input-field"
        value={value || ''}  // Ensure value is correctly passed
      />
    </StyledInputContainer>
  );
};
