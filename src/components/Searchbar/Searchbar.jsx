import { useState } from 'react';

const Searchbar = ({ onSetSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Please enter a search query');
      return;
    }
    // setSearch('');
    onSetSearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleSearchChange}
      />
      <button>Search</button>
    </form>
  );
};

export default Searchbar;
