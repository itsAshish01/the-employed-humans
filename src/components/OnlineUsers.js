import './OnlineUsers.css';
import { useCollection } from '../hooks/useCollection';
import Avatar from './Avatar';

const OnlineUsers = () => {
  const { documents, error } = useCollection('users');

  return (
    <div className='user-list'>
      <h2>All Users</h2>
      {error && <div className='error'>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div className='user-list-item ' key={user.id}>
            <Avatar src={user.photoURL} />
            <span>{user.displayName}</span>
            {user.online && <div className='online-user'></div>}
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;
