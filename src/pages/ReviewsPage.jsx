import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import List from 'components/List';
import ReviewsItem from '../components/ReviewsItem/ReviewsItem';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  console.log(loading);
  useEffect(() => {
    if (error) {
      setError(false);
    }
    setLoading(true);
    const fetchSendReviews = async () => {
      try {
        const sendReviews = await fetchReviews(movieId);
        if (sendReviews) {
          setReviews(sendReviews);
          console.log('rev', sendReviews);
        }
        if (sendReviews.length === 0) {
          throw new Error(`The resource you requested could not be found.`);
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSendReviews();
  }, [error, movieId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <List
          data={reviews}
          ItemComponent={ReviewsItem}
          className={'reviews-list'}
        />
      )}
    </>
  );
};
export default ReviewsPage;
