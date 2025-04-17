export const FormatDate = (input: string, locale: string) => {
  const [datePart, timePart] = input.split(' ');
  const [day, month, year] = datePart.split('/');

  const date = new Date(`${year}-${month}-${day}T${timePart}`);

  const formatted = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);

  return formatted;
};
