import React, { Component } from 'react';
import Header from './layouts/Header.js';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';

class Content extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid
          rows={[
            { category: 'High Visits/Low CVR', keyword: "ふるさと納税", visits: 123099, cvr: 0.02 },
            { category: 'High Visits/Low CVR', keyword: "NIKE", visits: 34443, cvr: 0.03 },
            { category: 'High Visits/Low CVR', keyword: "LG TV", visits: 3434, cvr: 0.003 },
            { category: 'High Visits/Low CVR', keyword: "くまもん", visits: 4343, cvr: 0.3 },
            { category: 'High Visits/Low CVR', keyword: "Game of thrones", visits: 545554, cvr: 0.03 },
            { category: 'High Visits/Low CVR', keyword: "Breaking bad", visits: 54343, cvr: 0.02 },
            { category: 'High Visits/Low CVR', keyword: "送料無料", visits: 333, cvr: 0.3 },
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
          ]}
          columns={[
            { name: 'category', title: 'Category' },
            { name: 'keyword', title: 'Keyword' },
            { name: 'visits', title: 'Visits' },
            { name: 'cvr', title: 'CVR' },
          ]}>
          <SortingState
            defaultSorting={[{ columnName: 'visits', direction: 'desc' }]}
          />
          <IntegratedSorting /> 
          <Table />
          <TableHeaderRow showSortingControls />
        </Grid>
      </div>
    );
  }
}

export default Content;
