export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getUTCFullYear();
  const month =
    Number(date.getUTCMonth() + 1) < 10
      ? `0${date.getUTCMonth() + 1}`
      : `${date.getUTCMonth() + 1}`;
  const day =
    Number(date.getUTCDate()) < 10
      ? `0${date.getUTCDate()}`
      : `${date.getUTCDate()}`;

  return `${year}/${month}/${day}`;
};
