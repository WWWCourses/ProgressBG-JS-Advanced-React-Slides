let user = {
    'name':'Ada',
    'age': 21,
    'address':{
        'town': 'Varna',
        'zip': 1234
    }
}

const keys = Object.values(user)
console.log(keys);


// for (const key in user) {
//     console.log(key);
// }