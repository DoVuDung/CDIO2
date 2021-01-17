'use strict'
let express = require('express');
let app = express();

app.get('/', function(req, res) {

    const sql = require("mssql");

    // config for your database
    let config = {
        user: 'Sa',
        password: 'Dung5320',
        server: '127.0.0.1',
        database: 'CDIO2',
        port: 1433
    };

    // connect to your database
    sql.connect(config, function(err) {

        if (err) console.log(err);

        // create Request object
        const request = new sql.Request();

        // query to the database and get the records
        request.query('select * from from [dbo].[USER]', function(err, recordset) {

            if (err) console.log(err)

            // send records as a response
            //res.send(recordset);

            console.table(data.recordset);

        });
    }).then(r => {});
});

const server = app.listen(1433, function() {
    console.log('Server is running..');
});