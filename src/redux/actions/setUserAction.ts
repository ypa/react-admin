import { User } from '../../classes/user';

const setUser = (user: User) => ({
  type: 'SET_USER',
  user: user
})

export default setUser;
