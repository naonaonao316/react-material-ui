import React, { Component } from 'react';

export default class FilterTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: [
        {id: 1, name: 'Michael', height: 179},
        {id: 2, name: 'Chris', height: 167},
        {id: 3, name: 'Bob', height: 159},
        {id: 4, name: 'Ken', height: 165},
      ]
    };
  }

  render() {
    const { tableData } = this.state;
/*    const TableContent = ({tableData}) => ( 
      {tableData.map(data => (
        <td>{data.id}</td>
      ))}
    ); */

    return (
      <div>
        Hello
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Height</th>
          </tr>
          <tr>
          </tr>
        </table>
      </div>
    );
  }
}
