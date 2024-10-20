import css from './FriendList.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className={css.friendListItem}>
        <img src={avatar} alt={`${name} avatar`} width="48" />
        <p>{name}</p>
        <p style={isOnline ? { color: 'green' } : { color: 'red' }}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </li>
    );
  });
};

export default FriendListItem;
