// Add your code here

function submitData(userName, userEmail){
    
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(
            {
            name: userName,
            email: userEmail,
        }),
    })
        .then(res => res.json())
        .then(data => document.querySelector('body').append(data.id))
        .catch(function(error){
            document.querySelector('body').append(error.message)
        })
    
};

