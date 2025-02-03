'use strict';

const formatDate = (date, format) => {
  const split = date.split('-');
  const year = split[0].slice(2);
  if (format === 'uk') {
    return `${split[2]}/${split[1]}/${year}`;
  } else if (format === 'us') {
    return `${split[1]}/${split[2]}/${year}`;
  }
};

export { formatDate };
