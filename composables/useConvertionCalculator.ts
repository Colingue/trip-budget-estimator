import currencyData from "../data/currencyRate.json";

type CurrencyRates = {
  [key: string]: number;
};

export function useConvertionCalculator() {
  const getConvertionRate = (targetCurrency: string) => {
    const rates = currencyData.rates as CurrencyRates;
    return rates[targetCurrency];
  };

  const convertCurrency = async (
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ) => {
    const fromRate = await getConvertionRate(fromCurrency);
    const toRate = await getConvertionRate(toCurrency);

    return (amount / fromRate) * toRate;
  };

  return { getConvertionRate, convertCurrency };
}
