var testDB = require('realm')

const TestSchema = {
    name : 'testSC3',
    properties:{
        name : 'string',
        boo : 'bool'
    }
}
const TestSchema1 = {
    name : 'testSC',
    properties:{
        name : 'string',
        age : 'int'
    }
}

let realm = new testDB({schema: [TestSchema,TestSchema1]});

realm.write(() =>{
    let testCreate = realm.create('testSC3',{
        name : 'A', boo : false
    })
})


let realmPrint = realm.objects('testSC')

console.log(realmPrint)