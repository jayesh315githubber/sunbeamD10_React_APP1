console.log('inside app5.js');

const products = [
    {
        id: 1, title: 'product 1', description: 'descriptin1', price: 10,
        reviews: 'nice product'
    },
    {
        id: 2, title: 'product 2', description: 'descriptin2', price: 20,
        reviews: 'good product'
    },
    { id: 3, title: 'product 3', description: 'descriptin3', price: 30 },
    { id: 4, title: 'product 4', description: 'descriptin4', price: 40 },
    { id: 5, title: 'product 5', description: 'descriptin5', price: 50 }
]

const template = (
    <div>
        <h3>App5</h3>
        {
            products.map((product) => {
                return (
                    <div>
                        <div> id : {product.id} </div>
                        <div> title : {product.title} </div>
                        <div> descriptin : {product.description} </div>
                        <div> price : {product.price} </div>
                        {product.reviews && <div>reviews : {product.reviews}</div>}
                        <hr />
                    </div>
                )
            })
        }
    </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)