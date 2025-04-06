import { isSupportedCountry, CountryCode } from "libphonenumber-js/mobile";

export const LocalStorage = {
  get defaultCountryCode(): CountryCode {
    return "TH";
  },
  get countryCode(): CountryCode {
    const countryCode = localStorage.getItem("country-code");

    return countryCode && isSupportedCountry(countryCode)
      ? countryCode
      : LocalStorage.defaultCountryCode;
  },
  set countryCode(value: CountryCode) {
    localStorage.setItem("country-code", value);
  },
};
