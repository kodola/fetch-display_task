const Income = ({id}) => {
    return fetch(`https://recruitment.hal.skygate.io/incomes/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const newest = new Date(
                Math.max.apply(
                    null,
                    data.incomes.map((e) => {
                        return new Date(e.date);
                    })
                )
            );
            const newestObj = data.incomes.filter(e => {
                const val = new Date(e.date);
                return val.getTime() === newest.getTime();
            })[0];
            const newestVal = newestObj.value;

            const incomVals = [];
            data.incomes.map((info) => incomVals.push(info.value));

            const incomNums = incomVals.map(Number);

            const total = incomNums.reduce((prev, curr) => prev + curr, 0).toFixed(2);

            const avg = (total / incomNums.length).toFixed(2);
            return {newestVal, avg, total};
        });
};

export default Income;