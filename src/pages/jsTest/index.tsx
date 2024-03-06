const Index = () => {

    function minimumAbsoluteDifference(arr: number[]): number {
        // Write your code here
        const ln = arr.length;

        for (let i = 0; i < ln; i++) {
            for (let j = i; j < ln; j++) {
                if (arr[j] < arr[i]) {
                    const cup = arr[i];
                    arr[i] = arr[j];
                    arr[j] = cup;
                }
            }
        }
        let result = null;
        for (let i = 0; i < ln; i++) {
            const mn = Math.abs(arr[i] - arr[i + 1])
            if (result === null || mn < result)
                result = mn
        }

        return result;
    }

    console.log(minimumAbsoluteDifference([3, -7, 0]))
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