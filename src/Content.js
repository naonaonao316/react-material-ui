import React, { Component } from 'react';
import Header from './layouts/Header.js';
import Paper from 'material-ui/Paper';
import {
  SearchState,
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
  Toolbar,
  SearchPanel,
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
    const categories = ['High Visits/High CVR',
                        'High Visits/Middle CVR',
                        'High Visits/Low CVR',
                        'Middle Visits/High CVR',
                        'Middle Visits/Middle CVR',
                        'Middle Visits/Low CVR',
                        'Low Visits/High CVR',
                        'Low Visits/Middle CVR',
                        'Low Visits/Low CVR'];

    const keywords = ['Nike',
                      'ビール',
                      'ふるさと納税',
                      'LG TV',
                      'くまもん',
                      'Game of thrones',
                      'Breaking Bad',
                      '飲料水',
                      'Asahi SuperDry',
                      '楽天パンダ',
                      '送料無料',
                      'アウトレット',
                      'カーディガン',
                      'ジャケット',
                      'breaking benjamin',
                      'メタルギアソリッド'];

   let data_num = 50000;
   let rows     = [];

   let row_data = Array.from({length: data_num}, (v, i) => {
     return Object.assign({}, {
       id: i,
       category: categories[Math.floor(Math.random()*categories.length)],
       keyword: keywords[Math.floor(Math.random()*keywords.length)],
       visits: Math.floor(Math.random() * 120000),
       cvr: Math.random()
     });
   })

    return (
      <div>
        <Header />
        <Paper>
        <Grid
          rows={row_data}
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
            pageSize={50}
          />
          <SortingState
            defaultSorting={[{ columnName: 'visits', direction: 'desc' }]}
          />
          <SearchState />
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />
          <IntegratedSelection />
          <IntegratedPaging />
          <IntegratedSorting /> 
          <Table />
          <TableFilterRow />
          <TableHeaderRow showSortingControls />
          <TableSelection showSelectAll />
          <PagingPanel />
          <Toolbar />
          <SearchPanel />
        </Grid>
        </Paper>
      </div>
    );
  }
}

export default Content;
