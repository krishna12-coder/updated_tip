import styled from 'styled-components';
import colors from '../colors/colors';

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${colors.neutral.veryDarkCyan};
  border-radius: 1rem;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 80%;
    gap: 0;
    margin-left: 0rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 50%;
  /* background-color: red; */
  margin-top: 2rem;
`;

export const TipInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomContainer = styled.div`
  //could potnetially remove this?
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 20%;
  /* background-color: green; */
  margin-top: 4.5rem;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const TipAmountContainer = styled.div`
  width: 100%;
`;

export const TotalContainer = styled.div`
  width: 100%;
`;

export const ResetButton = styled.button`
  background-color: hsl(0, 0%, 50%); /* Medium gray */
  color: white;
  padding: 15px 30px; /* Increase padding for larger button */
  font-size: 1.1rem; /* Larger font size */
  border: none;
  border-radius: 8px; /* Optional: Increase border-radius for a more rounded button */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: hsl(0, 0%, 40%); /* Darker gray */
  }
`;
