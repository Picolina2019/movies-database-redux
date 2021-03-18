import React, { Component } from 'react';
import UISelect from '../UIComponents/UISelect';

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
    const { sort_by, onChangeFilters, options } = this.props;

    return (
      <UISelect
        id='sort_by'
        name='sort_by'
        value={sort_by}
        onChange={onChangeFilters}
        labelText='Sort By '>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </UISelect>
    );
  }
}
