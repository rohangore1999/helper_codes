// filters = {} contains the field which are selected in Search and Filter
// like whenever you want to convert some object with lot of conditions which actually requires you to mutate the actual object you are iterating mujhe reduce sahi lagta hai..
// ValidatedFilter is the new object which we are setting to our setFilters

const handleFiltersChange = filters => {
    const validatedFilter = Object.keys(filters).reduce((previous, current) => {
        switch (current) {
            case 'searchValue':
                if (!filters.searchKey) {
                    return {
                        ...previous,
                        [current]: filters[current],
                        searchKey: 'remitterPhoneNumber',
                    };
                }
                return {
                    ...previous,
                    [current]: filters[current],
                    searchKey: filters.searchKey,
                };

            case 'sourceAmountCondition':
                if (filters.sourceAmountCondition === 'BETWEEN') {
                    if (filters.startSourceAmount && filters.endSourceAmount) {
                        return {
                            ...previous,
                            [current]: filters[current],
                            startSourceAmount: filters.startSourceAmount,
                            endSourceAmount: filters.endSourceAmount,
                        };
                    }
                } else if (filters.startSourceAmount) {
                    return {
                        ...previous,
                        [current]: filters[current],
                        startSourceAmount: filters.startSourceAmount,
                    };
                }
                return previous;

            case 'targetAmountCondition':
                if (filters.targetAmountCondition === 'BETWEEN') {
                    if (filters.startTargetAmount && filters.endTargetAmount) {
                        return {
                            ...previous,
                            [current]: filters[current],
                            startTargetAmount: filters.startTargetAmount,
                            endTargetAmount: filters.endTargetAmount,
                        };
                    }
                } else if (filters.startTargetAmount) {
                    return {
                        ...previous,
                        [current]: filters[current],
                        startTargetAmount: filters.startTargetAmount,
                    };
                }
                return previous;

            default:
                if (labelMapping[current]) {
                    return { ...previous, [current]: filters[current] };
                }

                return previous;
        }
    }, {});

    setFilters(validatedFilter);
    setCurrentPage(1);
};