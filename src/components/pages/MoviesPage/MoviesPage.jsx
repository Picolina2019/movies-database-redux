import React, { Component } from 'react';
import Filters from '../../Filters/Filters';
import MovieList from '../../Movies/MovieList';

export default class MoviesPage extends Component {
  state = {
    filters: {
      sort_by: 'popularity.desc',
      primary_release_year: '2018',
      with_genres: [],
    },
    page: 1,
    totalPages: '',
  };

  onChangeFilters = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: value,
      },
    }));
  };

  onChangePagination = ({ page, total_pages = this.state.total_pages }) => {
    this.setState({
      page,
      total_pages,
    });
  };

  render() {
    const { filters, page, total_pages } = this.state;
    return (
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-4'>
            <div className='card' style={{ width: '100%' }}>
              <div className='card-body'>
                <h3>Filters</h3>
                <Filters
                  page={page}
                  filters={filters}
                  onChangeFilters={this.onChangeFilters}
                  onChangePagination={this.onChangePagination}
                  total_pages={total_pages}
                />
              </div>
            </div>
          </div>
          <div className='col-8'>
            <MovieList
              filters={filters}
              page={page}
              onChangePagination={this.onChangePagination}
            />
          </div>
        </div>
      </div>
    );
  }
}
