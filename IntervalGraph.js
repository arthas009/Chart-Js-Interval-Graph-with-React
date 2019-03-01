import React, {Component} from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-zoom';


class RightUpperGraphRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myChart: null,
        };
    }
    componentDidMount() {
        /* FIND THE CHART FROM ITS REF */
        var ctx = this.refs.myGraphCanvas;
        Chart.defaults.global.elements.line.fill = false;
        this.state.myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: YOUR_LABELS,
                datasets: YOUR_DATASET
            },
            options: {
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                pan: {
                    enabled: true,
                    mode: "y",
                    speed: 10,
                    threshold: 10
                },
                zoom: {
                    enabled: true,
                    drag: false,
                    mode: "xy",
                    limits: {
                        max: 10,
                        min: 0.5
                    }
                },
                responsive: true,
                animation: false,
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'rgb(255, 99, 132)'
                    }
                },
                title: {
                    display: true,
                    text: 'Denemeler'
                },
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            // Include sign in the ticks
                            callback: function (value, index, values) {
                                if(value>0)
                                    return '+' + value;
                                else
                                    return value;
                            }
                        }
                    }]
                }

            },

        });   

        /* DYNAMICALLY AND INTERVALLY UPDATE THE CHART IN EACH 3 SEC */
        this.intervalID = setInterval(() => {
          this.float();
        }, 3000);
    }

    componentWillUnmount()
    {
      if(this.state.myChart)
         this.state.myChart.destroy();

        /* close the interval function so that we can use another one later */
      clearInterval(this.intervalID)

    /* floating graph */
    float = () =>
    {
    /*
    * CREATE A FOR LOOP HERE TO ITERATE OVER ALL YOUR DATASET AND UPDATE LAST ELEMENT OF DATASET WITH A NEW NUMBER
    */
    
        this.state.myChart.data.datasets = YOUR_NEW_DATASET;
        this.state.myChart.update();
    };

    /* 
    *CALL  RENDER FUNCTION
    *DO WHATEVER YOU WANT TO DO HERE
    */
    render() {

        return (
        
        );
    }

}

export default RightUpperGraphRenderer;
