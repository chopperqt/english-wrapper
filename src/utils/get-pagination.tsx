export const getPagination = (page: number, size: number) => {
  if (page < 2) {
    return {
      from: 0,
      to: size,
    };
  }

  const to = page * size - 1;
  const from = to - size;

  return {
    to,
    from,
  };
};
