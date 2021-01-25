
$(document).ready(function () {

    setTimeout(function () {

        new Chartist.Pie('.total-chart', {
            series: [20, 10],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true
        });

        new Chartist.Pie('.active-chart', {
            series: [47, 53],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>47%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.inactive-chart', {
            series: [50, 50],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>50%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.kyc-chart', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.region-chart', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.total-cards', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true
        });

        new Chartist.Pie('.alloc-cards', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.unalloc-cards', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.active-cards', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.inactive-cards', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.replace-card', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.perm-block', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.temp-block', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.total-trans', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true
        });

        new Chartist.Pie('.succ-trans', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.fail-trans', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.mer-trans', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.marrej-trans', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        new Chartist.Pie('.init-trans', {
            series: [60, 40],
        }, {
            donut: true,
            donutWidth: 30,
            height: 130 + 'px',
            donutSolid: true,
            startAngle: 0,
            showLabel: true,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '<h3>60%</h3>'
                    }]
                })
            ],
        });

        // line

        // new Chartist.Bar('.customer-data-bar', {
        //     labels: ['Registered', 'Active', 'Inactive', 'KYC', 'Cus by region'],
        //     series: [150, 50, 100, 200, 300]
        // }, {
        //     distributeSeries: true
        // });

    }, 200)

})

