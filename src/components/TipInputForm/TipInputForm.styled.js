import styled from "styled-components";
import colors from "../colors/colors";
import { Text } from "../Text/Text"; // Ensure Text component is imported

export const TipInputFormContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2.5rem;
  width: 90%;
  padding: 0 16px 2px 2px;

  @media (max-width: 768px) {
    width: 90%;
    gap: 1.5rem;
    height: 30rem;
  }
`;

export const SelectTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SelectTipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SelectTipItems = styled.div`
  background-color: ${(props) =>
    props.isSelected ? colors.primary : colors.neutral.grayishCyan};
  color: ${(props) =>
    props.isSelected ? colors.neutral.white : colors.neutral.white};
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: ${colors.primary}; /* Change background color on hover */
    color: ${colors.neutral.white}; /* Change text color on hover */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
  }
`;

export const CustomTipInput = styled.input`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  width: 85%;
  height: 1.2rem;
  border-radius: 0.3rem;
  border: 1px solid ${colors.neutral.grayishCyan}; /* Add border to the input */
  padding: 0.5rem;
  ::placeholder {
    color: ${colors.neutral
      .lightGrayishCyan}; /* Adjust placeholder color if needed */
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.neutral
      .lightGrayishCyan}; /* Change background color on hover */
    color: ${colors.neutral.black}; /* Change text color on hover */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;

export const SliderText = styled(Text)`
  margin-top: 0.5rem;
  text-align: center;
  color: ${(props) => props.color || "#000"};
  visibility: visible; /* Ensure the text is visible */
  font-size: 1rem; /* Adjust font size if necessary */
`;

export const SliderInput = styled.input`
  width: 100%;
  margin: 0;
`;

export const SliderValueText = styled.span`
  font-size: 1rem; /* Adjust font size if necessary */
  color: black; /* Set text color to black */
  margin-top: 0.5rem; /* Ensure margin space between slider and text */
  text-align: center; /* Center align the text */
  display: block; /* Ensure the text appears as a block element */
`;
