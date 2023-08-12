import moviePoster from '../../images/profile.png';
import { Item, Profile, Actor, Character } from './CastItem.styled';
const CastItem = ({ element }) => {
  const src = element.profile_path
    ? `https://image.tmdb.org/t/p/w45${element.profile_path}`
    : moviePoster;
  return (
    <Item>
      <Profile src={src} alt={`profile for ${element.name}`} />
      <Actor>{element.name}</Actor>
      {element.character && (
        <Character>
          character:<b> {element.character}</b>
        </Character>
      )}
    </Item>
  );
};
export default CastItem;
