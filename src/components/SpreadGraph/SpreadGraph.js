import React, { Component } from "react";
import styles from "./SpreadGraph.module.css";
import Chart from "../../components/SpreadGraph/Chart/Chart";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class SpreadGraph extends Component {
  state = {
    currentkey: "confirmed"
  };

  intervalId;
  componentDidMount() {
    this.props.onFetchChart();
    this.intervalId = setInterval(() => this.props.onFetchChart, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  renderChart = (keyname) => {
    this.setState({
      currentkey: keyname
    });
   
  };
  render() {
    let casesarray = [];
    let num;
    if (this.props.chartdata) {
      let cases = this.props.chartdata[this.state.currentkey];
      console.log(cases);
      for (let key in cases) {
        let arr = [];
        arr.push(key, cases[key]);
        casesarray.push(arr);
      }
      casesarray.unshift(["date", "cases"]);
      let date = casesarray[casesarray.length - 1];
      console.log(date);
      let now = date[0];
      let today = date[1];
      let y = casesarray[casesarray.length - 2];
      console.log(y);
      //  let yesterday=y[0];
      //  console.log(yesterday);
      //  let diff=today-yesterday;
      let type = this.state.currentkey;
      let upper = type.toUpperCase();
      if (this.state.currentkey === "confirmed") {
        num = this.props.cases.totalCases;
      }
      if (this.state.currentkey === "recovered") {
        num = this.props.cases.recovered;
      }
      if (this.state.currentkey === "deceased") {
        num = this.props.cases.totalDeaths;
      }
      if (num > 999) {
        num = (num / 1000).toFixed(1) + "k";
      }
      if (today > 999) {
        today = (today / 1000).toFixed(1) + "k";
      }
      return (
        <div className={styles.MainBox}>
          <div className={styles.Box}>
            <div className={styles.Heading}>Spread Trends</div>
            <div>
              <button
                className={styles.ToggleButtons}
                onClick={() => this.renderChart("confirmed")}
              >
                Confirmed
              </button>
              <button
                className={styles.ToggleButtons}
                onClick={() => this.renderChart("recovered")}
              >
                Recovered
              </button>
              <button
                className={styles.ToggleButtons}
                onClick={() => this.renderChart("deceased")}
              >
                Deceased
              </button>
            </div>
          </div>
          <div className={styles.GraphDiv}>
            <div className={styles.Graph}>
              <p className={styles.Type}>{upper}</p>
              <p className={styles.Type}>{now}</p>
              <p className={styles.Num}>
                {num}
                <span className={styles.TodayCases}>+{today}</span>
              </p>
            </div>
            <Chart dataarray={casesarray} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    chartdata: state.charts.chart,
    cases: state.cases.coronaStats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchChart: () => dispatch(actions.fetchCharts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpreadGraph);
