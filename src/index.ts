import { User } from './models/user'

const user = new User({ name: 'Artur', age: 20 })

user.set({ name: 'Artur Alves Serra' })

console.log(user.get('name'))
console.log(user.get('age'))
