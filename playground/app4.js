console.log('inside app4.js');

const person = {
    name : 'person2',
    address : 'pune',
    email : 'person2@gmail.com'
}


const template = (
<div>
    <h3>App4</h3>
    <div>name : {person.name}</div>
    <div>address : {person['address']}</div>
    {/* <div>phone : {person.phone ? person.phone : '-NA-'}</div>
    <div>email : {person.email ? person.email : '-NA-'}</div> */}


{/* conditional compilation/rendering */}
    {person.phone && <div> phone : {person.phone}</div>}
    {person.email && <div> phone : {person.email}</div>}
</div>
)

const root = document.getElementById('app')
ReactDOM.render(template,root)