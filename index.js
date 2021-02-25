const data = {name: "Steve", email: "steve@steve.com"};
const configObj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data)
};

function submitData(){
    fetch("http://localhost:3000/users", configObj)
    .then(r => r.json())
    .then( function (object)  {
        document.body.innerHTML = object[ "id" ]
      } )
    ;
}

submitData()
