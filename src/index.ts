import { User } from './models/User'

const user = User.buildUser({ id: 1, name: 'Johnny Bola', age: 29 })

user.on('change', () => {
  console.log(user)
})

user.fetch()
