'use strict';

console.log('inside app5.js');

var products = [{
    id: 1, title: 'product 1', description: 'descriptin1', price: 10,
    reviews: 'nice product'
}, {
    id: 2, title: 'product 2', description: 'descriptin2', price: 20,
    reviews: 'good product'
}, { id: 3, title: 'product 3', description: 'descriptin3', price: 30 }, { id: 4, title: 'product 4', description: 'descriptin4', price: 40 }, { id: 5, title: 'product 5', description: 'descriptin5', price: 50 }];

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h3',
        null,
        'App5'
    ),
    products.map(function (product) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                ' id : ',
                product.id,
                ' '
            ),
            React.createElement(
                'div',
                null,
                ' title : ',
                product.title,
                ' '
            ),
            React.createElement(
                'div',
                null,
                ' descriptin : ',
                product.description,
                ' '
            ),
            React.createElement(
                'div',
                null,
                ' price : ',
                product.price,
                ' '
            ),
            product.reviews && React.createElement(
                'div',
                null,
                'reviews : ',
                product.reviews
            ),
            React.createElement('hr', null)
        );
    })
);

var root = document.getElementById('app');
ReactDOM.render(template, root);
