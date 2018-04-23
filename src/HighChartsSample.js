import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, Tooltip
} from 'react-jsx-highcharts';

const plotOptions = {
  series: {
    pointStart: Date.UTC(2010, 0, 1),
    pointInterval: 24 * 3600 * 1000 * 30
  }
};

const App = () => (
  <div className="app">
    <HighchartsChart plotOptions={plotOptions}>
      <Chart />

      <Title>Problem keyword tracking, 2018</Title>

      <Legend layout="vertical" align="right" verticalAlign="middle" />
      <Tooltip />
      <XAxis type="datetime">
        <XAxis.Title>Month</XAxis.Title>
      </XAxis>

      <YAxis id="number">
        <YAxis.Title>Evaluation</YAxis.Title>
        <LineSeries id="installation" name="T-shirt" data={[Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4)]} />
        <LineSeries id="manufacturing" name="Breaking bad" data={[Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4)]} />
        <LineSeries id="sales-distribution" name="Thor" data={[Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4)]} />
        <LineSeries id="project-development" name="Fabric Softner" data={[Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4)]} />
        <LineSeries id="other" name="Water" data={[Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 4)]} />
      </YAxis>
    </HighchartsChart>
  </div>
);

export default withHighcharts(App, Highcharts);
