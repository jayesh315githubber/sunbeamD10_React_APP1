console.log('inside app2.js');


// getting values from an array
const persons = ['person1','person2','person3','person4','person5']

const template = (
<div>
    <h3>App2</h3>
    {
        persons.map((person)=>{
            return <p>{person}</p>
        })
    }

</div>
)

const root = document.getElementById('app')
ReactDOM.render(template,root)