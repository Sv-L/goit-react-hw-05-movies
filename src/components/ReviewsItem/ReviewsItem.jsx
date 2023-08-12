import { Item, Author } from './ReviewsItem.styled';
const ReviewsItem = ({ element }) => {
  return (
    <Item>
      <Author>
        author: <b>{element.author}</b>
      </Author>
      <p> {element.content}</p>
    </Item>
  );
};
export default ReviewsItem;
