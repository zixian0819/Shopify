import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import './Search.css';
const subscribeInputChange = new Subject();

const Search = ({ onSearch }) => {
  const [keyword, setKeywod] = useState('');

  useEffect(() => {
    subscribeInputChange.pipe(debounceTime(500)).subscribe((value) => {
      if (value !== keyword) {
        onSearch && onSearch(value);
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="bg-white p-10 font-size-14 searchCss">
      <div className="font-size-16 m-bottom-5">Movie title</div>
      <div className="row">
        <div className="icon icon-search"></div>
        <input
          type="search"
          value={keyword}
          placeholder="Please enter keyword"
          onChange={(e) => {
            setKeywod(e.target.value.trim());
            subscribeInputChange.next(e.target.value.trim());
          }}
        />
      </div>
    </div>
  );
};

export default Search;
