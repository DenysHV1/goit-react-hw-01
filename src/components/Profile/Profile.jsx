import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.userBlock}>
      <div className={css.userTopBlock}>
        <img className={css.userImg} src={image} alt={`${name} avatar`} />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.userList}>
        <li className={css.userInfo}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>

        <li className={css.userInfo}>
          <span>Views</span>
          <span>{views}</span>
        </li>

        <li className={css.userInfo}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
