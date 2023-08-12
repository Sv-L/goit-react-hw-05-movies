import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button, BtnLabel } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
const Searchbar = ({ onSetSearch }) => {
  const [searchParams] = useSearchParams();
  const searchMovie = searchParams.get('query');
  const [search, setSearch] = useState(null);

  useEffect(() => {
    setSearch(searchMovie);
  }, [searchMovie]);

  const handleSearchChange = e => {
    const queryValue = e.currentTarget.value;
    queryValue !== '' ? setSearch(queryValue) : setSearch(null);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.movie.value.toLowerCase();
    if (query.trim() === '') {
      return alert('Please enter a search query');
    }
    if (search) onSetSearch({ query: search });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="movie"
        type="text"
        value={search ? search : ''}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleSearchChange}
      />
      <Button>
        <BsSearch />
        <BtnLabel>Search</BtnLabel>
      </Button>
    </Form>
  );
};

export default Searchbar;
