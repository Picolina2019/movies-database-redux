import React, { Component } from 'react';

export default class SortBy extends Component {
  static defaultProps = {
    options: [
      {
        label: 'Popularity desc',
        value: 'popularity.desc',
      },
      {
        label: 'Popularity asc',
        value: 'popularity.asc',
      },
      {
        label: 'Rating desc',
        value: 'vote_average.desc',
      },
      {
        label: 'Rating asc',
        value: 'vote_average.asc',
      },
    ],
  };
  render() {
    const { sort_by, onChangeFilters,options } = this.props;

    return (
      <div className='form-group'>
        <label htmlFor='sort_by'>Sort by:</label>
        <select
          className='form-control'
          id='sort_by'
          value={sort_by}
          onChange={onChangeFilters}
          name='sort_by'>
          {options.map((option) => {
            return (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
