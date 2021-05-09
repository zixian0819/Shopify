class HttpHelper {
  toUrlQuery(obj) {
    return Object.keys(obj || {})
      .map((key) => `${key}=${obj[key]}`)
      .join('&');
  }
  async ajax({ url, method = 'get', headers = {}, params } = {}) {
    const query = this.toUrlQuery(Object.assign(params, { apiKey: '1e9b6584' }));
    console.log("params:", params);
    console.log("query:",query)
    const _url = url + (query ? '?' + query : '');
    // debugger;
    console.log("url——:",_url)                                                  ;
    const result = await fetch(_url, { method, headers });
    console.log("method:", method);
    console.log("header:", headers);
    console.log("result:", result);
    // debugger;
    const body = await result.json();
    console.log("body:", body);
    return body;
  }

  async getApi(url, params) {
    console.log("url+params",url, params);
    return this.ajax({ url, method: 'get', params });
    return {
      Search: [
        {
          Title: 'Sister Act',
          Year: '1992',
          imdbID: 'tt0105417',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BNTFmOTYxOWMtMDE2MC00ODhmLTlhM2QtZjZkZmVhZGYyNGFlXkEyXkFqcGdeQXVyMjA0MzYwMDY@._V1_SX300.jpg',
        },
        { Title: 'Act of Valor', Year: '2012', imdbID: 'tt1591479', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTY3NDQxMDAzM15BMl5BanBnXkFtZTcwNzEyNjgzNw@@._V1_SX300.jpg' },
        {
          Title: 'Sister Act 2: Back in the Habit',
          Year: '1993',
          imdbID: 'tt0108147',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMmM0YjY5YjctYzljMy00ODcxLWI3ZDItMmE1MGU5YTI5MzI3XkEyXkFqcGdeQXVyMjA0MzYwMDY@._V1_SX300.jpg',
        },
        {
          Title: 'The Act of Killing',
          Year: '2012',
          imdbID: 'tt2375605',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BNmZjMDgyMDgtYWI4OS00YjZkLWEyODktNzE0MmViOTFjMDA4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        },
        { Title: 'Second Act', Year: '2018', imdbID: 'tt2126357', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ2MjI5Njk0MF5BMl5BanBnXkFtZTgwNDQ2NzczNTM@._V1_SX300.jpg' },
        {
          Title: 'The Act',
          Year: '2019',
          imdbID: 'tt8682948',
          Type: 'series',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMDMyZDY5NjktOTYxYS00YzlhLTllOTAtNGE3MDMxNmVhMjRmXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
        },
        { Title: 'The Children Act', Year: '2017', imdbID: 'tt6040662', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BODUwOTk1MzI3NF5BMl5BanBnXkFtZTgwNTI4NDE3NTM@._V1_SX300.jpg' },
        {
          Title: 'Class Act',
          Year: '1992',
          imdbID: 'tt0103978',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMjc1ZjdlMTQtMDA5MS00NGQzLWIzM2ItOTViNTlkOGVlODAzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
        },
        {
          Title: 'Patriot Act with Hasan Minhaj',
          Year: '2018–2020',
          imdbID: 'tt8080054',
          Type: 'series',
          Poster: 'https://m.media-amazon.com/images/M/MV5BZDUzZmIwYzMtMTNiNS00OTRlLTliYTgtZjljNjNjNTdkNDc4XkEyXkFqcGdeQXVyNjAxNDcwNzY@._V1_SX300.jpg',
        },
        {
          Title: 'Act of Violence',
          Year: '1948',
          imdbID: 'tt0041088',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BZjYyOTE2NDItZDVkOC00NzAzLWFlNzItMWYwZjQwMzY5OTI5XkEyXkFqcGdeQXVyMjY0MTI4MDU@._V1_SX300.jpg',
        },
      ],
      totalResults: '676',
      Response: 'True',
    };
  }

  async delay(time = 1500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time || 1500);
    });
  }
}

export default new HttpHelper();
