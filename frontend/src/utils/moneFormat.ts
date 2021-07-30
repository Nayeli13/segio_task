export default function Format(str: number) {
  try {
    const moneyForat = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
      maximumSignificantDigits: 4,
      maximumFractionDigits: 2,
    });
    const format = moneyForat.format(str);
    return format;
  } catch (error) {
    console.error(error);
  }
}
