import { User } from './models/User'

const user = new User({ name: 'Artur', age: 20 })

user.on('change', () => {})
user.on('change', () => {})
user.on('click', () => {})

console.log(user)
