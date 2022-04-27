const axios = require('axios')

var rfuid = process.argv[2];
// console.log(rfuid);
axios.post('http://afe47cabd8457497fbc403ec51c1c83a-1958255376.ap-east-1.elb.amazonaws.com:9001//seccam/reqentry',
    {
    "rfuid" : `${rfuid}`
    }
    ).then(res => {
        //console.log(`statusCode: ${res.status}`)
        console.log(res.data)
    }
    ).catch(error => {console.error(error)})