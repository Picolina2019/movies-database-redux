import _ from 'lodash';
import React from 'react';
import CallApi from '../../api/api';

export const MoviesHOC = (Component) =>
  class MoviesHOC extends React.Component {
    state = {
      movies: [],
    };

    getMovies = (filters, page) => {
      const { sort_by, primary_release_year, with_genres } = filters;
      const queryStringParams = {
        language: 'us-US',
        sort_by: sort_by,
        page: page,
        primary_release_year: primary_release_year,
      };

      if (with_genres.length > 0)
        queryStringParams.with_genres = with_genres.join(',');

      CallApi.get('/discover/movie', {
        params: queryStringParams,
      }).then((data) => {
        this.props.onChangePagination({
          page: data.page,
          total_pages: data.total_pages,
        });
        this.setState({
          movies: data.results,
        });
      });
    };

    componentDidMount() {
      this.getMovies(this.props.filters, this.props.page);
    }

    componentDidUpdate(prevProps) {
      if (!_.isEqual(this.props.filters, prevProps.filters)) {
        this.props.onChangePagination({ page: 1 });
        this.getMovies(this.props.filters, 1);
      }

      if (this.props.page !== prevProps.page) {
        this.getMovies(this.props.filters, this.props.page);
      }
    }

    render() {
      const { movies } = this.state;

      return <Component movies={movies} />;
    }
  };
