const oracledb = require('oracledb');

exports.dbConnect = async () => {
    let clientOpts = {};

    if (process.platform === 'win32') {
    clientOpts = { libDir: 'C:\\oracle\\instantclient_21_13' };
    } else if (process.platform === 'darwin' && process.arch === 'x64') {
    clientOpts = { libDir: process.env.HOME + '/Downloads/instantclient_21_13' };
    }
    // else on other platforms like Linux the system library search path MUST always be
    // set before Node.js is started, for example with ldconfig or LD_LIBRARY_PATH.

    // enable node-oracledb Thick mode
    oracledb.initOracleClient(clientOpts);

    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

    try {
        const connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: process.env.DB_CONNECT_STRING
        });

        console.log('Successfully conected to DB!');

    } catch (err) {
        console.log('Unable to initialize connection!')
        console.log(err.message);
    }
}