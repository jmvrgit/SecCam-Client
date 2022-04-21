const axios = require('axios')

var rfuid = process.argv[2];
// console.log(rfuid);
axios.post('http://192.168.254.104:9001/seccam/reqentry',
    {
    "rfuid" : `${rfuid}`
    }
    ).then(res => {
        //console.log(`statusCode: ${res.status}`)
        console.log(res.data)
    }
    ).catch(error => {console.error(error)})