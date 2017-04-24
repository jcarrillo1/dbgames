import auth from './auth';
import image from './image';
import games from './games';
import users from './users';

export default {
  ...auth,
  ...image,
  ...games,
  ...users,
};
