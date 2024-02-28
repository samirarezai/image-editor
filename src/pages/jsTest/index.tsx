const Index = () => {

    function whatFlavors(cost: number[], money: number): void {
        // Write your code here
        const n = cost.length;
        const listMap = new Map(cost.map((obj, index) => [obj, index]));

        let result = 0;
        let num = 0;
        for (let i = 0; i < n; i++) {
            if (cost[i] < money && !result) {
                num = i + 1;
                const value = listMap.get(money - cost[i]);
                if (value) {
                    result = value + 1;
                }
            }
        }
        console.log(`${num} ${result}`)
    }

    whatFlavors([2, 2, 4, 3], 4)
    return (
        <div>
            <p>
                check value:
            </p>
            <div>
                <div id="display">0</div>
                <button id="start">Start</button>
                <button id="stop">Stop</button>
            </div>
        </div>
    );
};

export default Index;