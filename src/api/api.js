import queryString from 'query-string';
export const API_KEY_4 =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjdmZGQ1Y2NmMDgzZjJlNzRlZDE4YWQzNmZjOTg1MyIsInN1YiI6IjVlYmVhYjY3MTVhNGExMDAxYzllODQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bZhJmqNgYvTJMKuczqKGbgx7qjpN-As3kcfcZsZFbGY';
export const API_KEY_3 = 'ff7fdd5ccf083f2e74ed18ad36fc9853';
export const API_URL = 'https://api.themoviedb.org/3';

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((response) => {
        response.json().then((error) => {
          reject(error);
        });
      });
  });
};

export default class CallApi {
  static get(url, options = {}) {
    const { params = {} } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params,
    };

    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
          
        },
      }
    );
  }
  static post(url, options = {}) {
    const { params = {}, body = {} } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params,
    };
    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        
        },
        body: JSON.stringify(body),
      }
    );
  }
  static delete(url, options = {}) {
    const { params = {}, body = {} } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params,
    };
    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
          
        },
        body: JSON.stringify(body),
      }
    );
  }
}
