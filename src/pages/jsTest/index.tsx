const Index = () => {

    const products = [
        {name: 'apples', category: 'fruits'},
        {name: 'oranges', category: 'fruits'},
        {name: 'potatoes', category: 'vegetables'}
    ];

    const groupByCategory = (products: { category: string }[]): {} => {
        let list = {}
        for (let i = 0; i < products.length; i++) {
            if (list.hasOwnProperty(products[i].category))
                list[products[i].category] = [...list[products[i].category], products[i]]
            else
                list[products[i].category] = [ products[i]]
        }

        return list
    }
    let result = groupByCategory(products);
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