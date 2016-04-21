var date = moment();
google.charts.setOnLoadCallback(drawChart);

google.charts.load('current', {'packages':['timeline']});

var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    onSelect: function() {

        date = this.getMoment();
        google.charts.setOnLoadCallback(drawChart);
    }
});

function drawChart() {

    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Position' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        [ 'Basil', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(5, 'weeks').toDate() ],
        [ 'Basil', 'Plant Outdoors', moment(date).toDate(), moment(date).add(1, 'weeks').toDate() ],

        [ 'Beets', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Beets', 'Direct Seed / Plant Outdoors', moment(date).subtract(2, 'weeks').toDate(), moment(date).toDate()  ],

        [ 'Broccoli', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Broccoli', 'Plant Outdoors', moment(date).subtract(2, 'weeks').toDate(), moment(date).toDate()  ],

        [ 'Cabbage', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Cabbage', 'Plant Outdoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(3, 'weeks').toDate()  ],

        [ 'Cauliflower', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Cauliflower', 'Plant Outdoors', moment(date).subtract(2, 'weeks').toDate(), moment(date).subtract(1, 'weeks').toDate()  ],

        [ 'Celery', 'Start Indoors', moment(date).subtract(12, 'weeks').toDate(), moment(date).subtract(10, 'weeks').toDate() ],
        [ 'Celery', 'Plant Outdoors', moment(date).toDate(), moment(date).add(1, 'weeks').toDate()  ],

        [ 'Corn', 'Start Indoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(2, 'weeks').toDate() ],
        [ 'Corn', 'Direct Seed / Plant Outdoors', moment(date).toDate(), moment(date).add(2, 'weeks').toDate()  ],

        [ 'Cucumber', 'Start Indoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(3, 'weeks').toDate() ],
        [ 'Cucumber', 'Direct Seed / Plant Outdoors', moment(date).add(1, 'weeks').toDate() , moment(date).add(3, 'weeks').toDate() ],

        [ 'Eggplant', 'Start Indoors', moment(date).subtract(10, 'weeks').toDate(), moment(date).subtract(8, 'weeks').toDate() ],
        [ 'Eggplant', 'Plant Outdoors', moment(date).add(1, 'weeks').toDate(), moment(date).add(2, 'weeks').toDate() ],

        [ 'Kale', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Kale', 'Plant Outdoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(3, 'weeks').toDate() ],

        [ 'Kohlrabi', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Kohlrabi', 'Plant Outdoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(3, 'weeks').toDate() ],

        [ 'Lettuce', 'Start Indoors', moment(date).subtract(5, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Lettuce', 'Plant Outdoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(3, 'weeks').toDate() ],

        [ 'Parsley', 'Start Indoors', moment(date).subtract(10, 'weeks').toDate(), moment(date).subtract(9, 'weeks').toDate() ],
        [ 'Parsley', 'Plant Outdoors', moment(date).subtract(3, 'weeks').toDate(), moment(date).subtract(2, 'weeks').toDate() ],

        [ 'Peas', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Peas', 'Direct Seed / Plant Outdoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(2, 'weeks').toDate() ],

        [ 'Pepper', 'Start Indoors', moment(date).subtract(10, 'weeks').toDate(), moment(date).subtract(8, 'weeks').toDate() ],
        [ 'Pepper', 'Plant Outdoors', moment(date).add(1, 'weeks').toDate(), moment(date).add(2, 'weeks').toDate() ],

        [ 'Radish', 'Direct Seed / Plant Outdoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(3, 'weeks').toDate() ],

        [ 'Spinach', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Spinach', 'Direct Seed / Plant Outdoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(3, 'weeks').toDate() ],

        [ 'Swiss Chard', 'Start Indoors', moment(date).subtract(6, 'weeks').toDate(), moment(date).subtract(4, 'weeks').toDate() ],
        [ 'Swiss Chard', 'Plant Outdoors', moment(date).subtract(3, 'weeks').toDate(), moment(date).subtract(2, 'weeks').toDate() ],

        [ 'Tomato', 'Start Indoors', moment(date).subtract(8, 'weeks').toDate(), moment(date).subtract(6, 'weeks').toDate() ],
        [ 'Tomato', 'Plant Outdoors', moment(date).toDate(), moment(date).add(2, 'weeks').toDate() ],

        [ 'Zucchini', 'Start Indoors', moment(date).subtract(4, 'weeks').toDate(), moment(date).subtract(3, 'weeks').toDate() ],
        [ 'Zucchini', 'Direct Seed / Plant Outdoors', moment(date).add(1, 'weeks').toDate() , moment(date).add(3, 'weeks').toDate() ],


    ]);

    var options = {
        timeline: {
            groupByRowLabel: true
        },
        colors: ['#81c784', 'lightblue', 'yellow'],
        avoidOverlappingGridLines: false
    };

    var chart = new google.visualization.Timeline(document.getElementById('chart_div'));

    chart.draw(dataTable, options);

    // resizes chart for respsonsiveness
    function resizeHandler () {
        chart.draw(dataTable, options);
    }
    if (window.addEventListener) {
        window.addEventListener('resize', resizeHandler, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onresize', resizeHandler);
    }

}
