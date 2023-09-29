import data from './report.json' assert { type: 'json' };

function call(){
    console.log(data.stats.passes);
}
