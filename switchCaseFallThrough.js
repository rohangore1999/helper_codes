export const getFiltersCount = filters =>
  Object.keys(filters).reduce((previous, current) => {
    switch (current) {
      case 'searchKey':
      case 'targetAmountCondition':
      case 'sourceAmountCondition':
        return previous + 1;

      default:
        return labelMapping[current] ? previous + 1 : previous;
    }
  }, 0);
