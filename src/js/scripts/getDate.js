'use strict';

const getDate = () => {
  const today = new Date();
  const year = today.toLocaleString('default', { year: 'numeric' });
  const month = today.toLocaleString('default', { month: '2-digit' });
  const day = today.toLocaleString('default', { day: '2-digit' });
  return year + '-' + month + '-' + day;
};

export { getDate };
