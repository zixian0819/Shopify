import { useEffect, useState } from 'react';
import './App.css';
import Block from './components/Block';
import Search from './components/Search';
import RowItem from './components/RowItem';
import Loading from './components/Loading';
import HttpHelper from './common/HttpHelper';

function App() {
  let [s] = useState('');
  const [finished, setFinished] = useState(false);
  const [nominationsMap, setNominationsMap] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchData = async (keyword) => {
    if (keyword === s) {
      return;
    }
    setIsLoading(true);
    s = keyword;
    const { Search: list = [], Error } = await HttpHelper.getApi('http://www.omdbapi.com/', { s, page: 1 });

    await HttpHelper.delay();
    setList(list);
    setIsLoading(false);

    if (Error) {
      setErrorMsg(Error);
    } else {
      setErrorMsg('');
    }
  };

  const saveNominationsToLocalStorage = (item, index) => {
    if (Object.values(nominationsMap || {}).length >= 5) {
      setFinished(true);
      return;
    }
 
    const newValue = { ...nominationsMap };
    console.log("nominationmap", newValue)
    newValue[item.imdbID] = item;
    setNominationsMap(newValue);

    window.localStorage.setItem('nominations', JSON.stringify(newValue));
  };

  const removeNomination = (item) => {
    setFinished(false);
    const newValue = { ...nominationsMap };
    delete newValue[item.imdbID];
    setNominationsMap(newValue);
    window.localStorage.setItem('nominations', JSON.stringify(newValue));
  };

  const getNominations = () => {
    const str = window.localStorage.getItem('nominations');
    if (!str) {
      return;
    }
    try {
      const val = JSON.parse(str);
      setNominationsMap(val);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    getNominations();
  }, []);

  let title = 'Result for ' + (s ? `"${s}"` : '');

  return (
    <div className="center">
      <div className="App">
        <div className="shoppies">The Shoppies</div>
        <Search onSearch={(keyword) => searchData(keyword)} />

        <div className="row bg-white">
          <div className="col-1"> </div>
          <div className="col-0">{isLoading && <Loading />}</div>
          <div className="col-1"> </div>
        </div>

        <div className="row m-top-20">
          <div className="col-1 m-right-10">
            <Block title={title}>
              <ul>
                {list &&
                  list.length > 0 &&
                  list.map((row, index) => {
                    row.type = !nominationsMap[row.imdbID] ? 'Nominate' : '';
                    return <RowItem key={index} {...row} onNominate={() => saveNominationsToLocalStorage(row, index)} />;
                  })}
              </ul>
              {errorMsg && <h3 className="text-center">{errorMsg}</h3>}
            </Block>
          </div>
          <div className="col-1">
            <Block title="Nominations">
              <div>
                <ul>
                  {Object.values(nominationsMap || {}).map((row, index) => {
                    return <RowItem key={index} {...row} type="remove" onRemove={() => removeNomination(row)} />;
                  })}
                </ul>

                {finished && <h3 className="m-top-20 text-center">Finished</h3>}
              </div>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
