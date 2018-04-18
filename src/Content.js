import React, { Component } from 'react';
import Header from './layouts/Header.js';
import Paper from 'material-ui/Paper';
import {
  SelectionState,
  PagingState,
  SortingState,
  FilteringState,
  IntegratedFiltering,
  IntegratedSorting,
  IntegratedPaging,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  TableSelection,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: [],
    };

    this.changeSelection = selection => this.setState({ selection });
  }

  render() {
    const { selection } = this.state;
    return (
      <div>
        <Header />
        <Paper>
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
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
            { category: 'High Visits/Low CVR', keyword: "飲料水", visits: 323232, cvr: 0.0003 },
          ]}
          columns={[
            { name: 'category', title: 'Category' },
            { name: 'keyword', title: 'Keyword' },
            { name: 'visits', title: 'Visits' },
            { name: 'cvr', title: 'CVR' },
          ]}>
          <SelectionState
            selection={selection}
            onSelectionChange={this.changeSelection}
          />
          <PagingState
            defaultCurrentPage={0}
            pageSize={6}
          />
          <SortingState
            defaultSorting={[{ columnName: 'visits', direction: 'desc' }]}
          />
          <FilteringState defaultFilters={[]} />
          <IntegratedSelection />
          <IntegratedPaging />
          <IntegratedSorting /> 
          <Table />
          <TableFilterRow />
          <TableHeaderRow showSortingControls />
          <TableSelection showSelectAll />
          <PagingPanel />
        </Grid>
        </Paper>
      </div>
    );
  }
}

export default Content;
