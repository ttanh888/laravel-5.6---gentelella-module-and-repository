const { mix } = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

var gentelellaTemplateDir = __dirname + '/node_modules/gentelella/';

mix.js([
    __dirname + '/Resources/assets/js/app.js',
], 'js/timekeeper.js').version();


mix.js(
    [
        gentelellaTemplateDir + 'vendors/fastclick/lib/fastclick.js',
        gentelellaTemplateDir + 'vendors/nprogress/nprogress.js',
        gentelellaTemplateDir + 'vendors/bootstrap/dist/js/bootstrap.min.js',
        gentelellaTemplateDir + 'vendors/Chart.js/dist/Chart.min.js',
        gentelellaTemplateDir + 'vendors/gauge.js/dist/gauge.min.js',
        gentelellaTemplateDir + 'vendors/bootstrap-progressbar/bootstrap-progressbar.min.js',
        gentelellaTemplateDir + 'vendors/iCheck/icheck.min.js',
        gentelellaTemplateDir + 'vendors/skycons/skycons.js',
        gentelellaTemplateDir + 'vendors/Flot/jquery.flot.js',
        gentelellaTemplateDir + 'vendors/Flot/jquery.flot.pie.js',
        gentelellaTemplateDir + 'vendors/Flot/jquery.flot.time.js',
        gentelellaTemplateDir + 'vendors/Flot/jquery.flot.stack.js',
        gentelellaTemplateDir + 'vendors/Flot/jquery.flot.resize.js',
        gentelellaTemplateDir + 'vendors/flot.orderbars/js/jquery.flot.orderBars.js',
        gentelellaTemplateDir + 'vendors/flot-spline/js/jquery.flot.spline.min.js',
        gentelellaTemplateDir + 'vendors/flot.curvedlines/curvedLines.js',
        gentelellaTemplateDir + 'vendors/DateJS/build/date.js',
        gentelellaTemplateDir + 'vendors/jqvmap/dist/jquery.vmap.js',
        gentelellaTemplateDir + 'vendors/jqvmap/dist/maps/jquery.vmap.world.js',
        gentelellaTemplateDir + 'vendors/jqvmap/examples/js/jquery.vmap.sampledata.js',
        __dirname + '/node_modules/moment/min/moment.min.js',
        gentelellaTemplateDir + 'vendors/bootstrap-daterangepicker/daterangepicker.js',
        gentelellaTemplateDir + 'build/js/custom.min.js',
    ],
    'js/gentelella.js').version();

mix.sass(__dirname + '/Resources/assets/sass/app.scss', 'css/timekeeper.css').version();

mix.styles(
    [
        gentelellaTemplateDir + 'vendors/bootstrap/dist/css/bootstrap.min.css',
        gentelellaTemplateDir + 'vendors/font-awesome/css/font-awesome.min.css',
        gentelellaTemplateDir + 'vendors/nprogress/nprogress.css',
        gentelellaTemplateDir + 'vendors/iCheck/skins/flat/green.css',
        gentelellaTemplateDir + 'vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css',
        gentelellaTemplateDir + 'vendors/jqvmap/dist/jqvmap.min.css',
        gentelellaTemplateDir + 'vendors/bootstrap-daterangepicker/daterangepicker.css',
        gentelellaTemplateDir + 'build/css/custom.min.css',
    ],
    '../../public/css/gentelella.css').version();

mix.copy([
    gentelellaTemplateDir + 'documentation/fonts/fonts',
    gentelellaTemplateDir + 'documentation/fonts',
], '../../public/fonts');

//
// if (mix.inProduction()) {
//     mix.version();
// }