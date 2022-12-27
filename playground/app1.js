console.log('inside app1.js');

const personName = 'person'
const address = 'pune'
const phone = '+46464'
const email = 'person1@test.com'

const template = (<div>
    <h3>App1</h3>
    <div>name : {personName}</div>
    <div>address : {address}</div>
    <div>phone : {phone}</div>
    <div>email : {email}</div>
</div>
)

const root = document.getElementById('app')
ReactDOM.render(template,root)