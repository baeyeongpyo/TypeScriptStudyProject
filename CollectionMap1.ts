import { Dictionary } from 'typescript-collections'

const map = new Dictionary<String, Boolean>()

map.setValue('aa', true)
map.setValue('bb', false)

console.log(map)

console.log(map.getValue('aa'))

map.forEach( key => {
    console.log(key)
    console.log(map.getValue(key))
})