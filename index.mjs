import { ToWords } from "to-words";
const toWords = new ToWords({
  localeCode: "en-GH",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
    currencyOptions: {
      // can be used to override defaults for the selected locale
      name: "Ghana Cedi",
      plural: "Ghana Cedis",
      fractionalUnit: {
        name: "Pesewa",
        plural: "Pesewas",
        symbol: "",
      },
    },
  },
});
let words = toWords.convert(100452.99);
console.log(words);
