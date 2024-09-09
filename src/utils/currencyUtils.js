// src/utils/currencyUtils.js

export const formatCurrency = (amount) => {
  return amount.toFixed(2); // Adjust formatting as needed
};

export const getCurrencyByIP = async () => {
  try {
    // Fetch IP address information from a public API
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    // Get the country code from the response
    const countryCode = data.country_code;

    // Define a mapping of country codes to currency symbols
    const currencyMap = {
      US: "$", // United States
      CA: "CA$", // Canada
      GB: "£", // United Kingdom
      EU: "€", // European Union
      IN: "₹", // India
      JP: "¥", // Japan
      CN: "¥", // China
      FR: "€", // France
      AU: "A$", // Australia
      IT: "€", // Italy
      ES: "€", // Spain
      CH: "CHF", // Switzerland
      MX: "$", // Mexico
      NZ: "$", // New Zealand
      DE: "€", // Germany
      GR: "€", // Greece
      PT: "€", // Portugal
      TH: "฿", // Thailand
      NL: "€", // Netherlands
      LK: "₹", // Sri Lanka
      TR: "₺", // Turkey
      AT: "€", // Austria
      BR: "R$", // Brazil
      CR: "₡", // Costa Rica
      HR: "kn", // Croatia
      DK: "kr", // Denmark
      MA: "MAD", // Morocco
      AE: "د.إ", // UAE (Dubai)
      FI: "€", // Finland
      NO: "kr", // Norway
      PH: "₱", // Philippines
      ID: "Rp", // Indonesia
      AR: "$", // Argentina
      MY: "RM", // Malaysia
      SG: "$", // Singapore
      // Add more countries and their corresponding currencies as needed
    };

    // Return the currency symbol based on the country code
    return currencyMap[countryCode] || "$"; // Default to USD if the country is not in the map
  } catch (error) {
    console.error("Error fetching currency data:", error);
    return "$"; // Default to USD in case of an error
  }
};
