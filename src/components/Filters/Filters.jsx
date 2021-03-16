import React from 'react';
import GenresContainer from './Genres/GenresContainer';
import Pagination from './Pagination';
import PrimaryReleaseYear from './PrimaryreleaseYear';
import SortBy from './SortBy';

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, primary_release_year, with_genres },
      onChangeFilters,
      page,
      total_pages,
      onChangePagination,
    } = this.props;
    return (
      <form className='mb-3'>
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />

        <PrimaryReleaseYear
          primary_release_year={primary_release_year}
          onChangeFilters={onChangeFilters}
        />
        <GenresContainer
          with_genres={with_genres}
          onChangeFilters={onChangeFilters}
        />
        <Pagination
          page={page}
          total_pages={total_pages}
          onChangePagination={onChangePagination}
        />
      </form>
    );
  }
}
