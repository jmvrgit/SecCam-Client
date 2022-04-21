const axios = require('axios')
const FormData = require('form-data');
const fs = require('fs');

var picture = process.argv[2];
var rfuid = process.argv[3];
axios.post('http://192.168.254.104:9001/seccam/add',
  {
    "picture" : picture ,
    "rfuid" : rfuid
  }
    ).then(res => {console.log(`statusCode: ${res.status}`)}).catch(error => {console.error(error)})

const formData = new FormData();
formData.append('photo', fs.createReadStream(picture));
  const res = axios.post('http://192.168.254.104:9001/seccam/upload', formData, {headers: formData.getHeaders()});

axios.get('http://192.168.254.104:9001/seccam/connect',
  {
    "picture" : picture ,
    "rfuid" : rfuid
  }
    ).then(res => {console.log(`statusCode: ${res.status}`)}).catch(error => {console.error(error)})
