(function() {
function drawChart(linka) {
    Highcharts.chart('linky', {
        chart: {
            type: 'column'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Průměrné zpoždění na lince ' + linka
        },
        subtitle: {
            text: 'od 14. března do 3. dubna 2018'
        },
        xAxis: {
            categories: Array.from(Array(13).keys()),
            crosshair: true,
            title: {
                text: 'hodina'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Průměrné zpoždění (minuty)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}. hodina</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} min.</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'průměrné zpoždění',
            data: Object.values(hourly[linka]),
            showInLegend: false
        }]
    });
};

$( function() {
    var options = '<select>'
    var linky = Object.keys(hourly)
    
    for (var li in linky) {
        options += '<option value="' + linky[li] + '">' + linky[li] + '</option>'
    };
    options += '</select>'
    $('.sbox').html(options)
    $('.sbox').change(function(e){
        drawChart(e.target.value)
    })
} );

drawChart('S1: Kolín - Praha Mas.n.')
})();