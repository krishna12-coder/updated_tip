// tipPerPerson = bill amount x tip percentage / number of people
export const tipPerPerson = (tip, customTip, noOfPersons, bill) => {
  // Remove calculation logic related to noOfPersons
  if (noOfPersons === 0) return 0;

  const userTip = customTip !== 0 ? customTip / 100 : tip / 100;
  const tipPerPerson = (bill * userTip) / noOfPersons;
  return tipPerPerson.toFixed(2);
};

// totalPerPerson = tipPerPerson + bill / number of people
export const totalPerPerson = (tip, customTip, noOfPersons, bill) => {
  // Remove calculation logic related to noOfPersons
  if (noOfPersons === 0) return 0;

  const userTip = tip !== 0 ? tip / 100 : customTip / 100;
  const tipPerPerson = (bill * userTip) / noOfPersons;
  const totalPerPerson = tipPerPerson + bill / noOfPersons;
  return totalPerPerson.toFixed(2);
};
