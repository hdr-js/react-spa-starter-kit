export default {
  AllString: /.*?/,
  NumberOnly: /^[0-9]*$/,
  NumberWithOneOptionalDot: /^\d{0,60}\.?\d{0,60}$/,
  NumberWithTwoOptionalDot: /^\d{0,60}\.?\d{0,60}\.?\d{0,60}$/,
  NumberWithOneDots: /^\d{1,2}\.\d{1,2}$/,
  NumberWithTwoDots: /^\d{1,2}\.\d{1,2}\.\d{1,2}$/,
  PhoneNumberLibya: /^\+\d{2}[- ]?\d{5}[- ]?\d{5}$/,
  PhoneNumber: /^(\+|00)[0-9]{1,3}[0-9]{11}(?:x.+)?$/,
  TimeFormat: /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
};
