const Index = () => {

    function jumpingOnClouds(c: number[]): number {
        // Write your code here
        const sunC = c.length - 1;
        let steps = 0;
        for (let i = 0; i < sunC; i++) {
            if (c[i + 2] < 1) {
                steps += 1;
                i++;
            } else {
                steps += 1;
            }
        }
        return steps;
    }

    let result = jumpingOnClouds([0, 0, 0 ,0 ,1 ,0]);
    console.log('result', result);

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