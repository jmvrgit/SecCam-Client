const axios = require('axios')
const FormData = require('form-data');
const fs = require('fs');

var picture = process.argv[2];
var rfuid = process.argv[3];
var url = "http://afe47cabd8457497fbc403ec51c1c83a-1958255376.ap-east-1.elb.amazonaws.com:9001"
axios.post(url + '/seccam/add',
  {
    "picture" : picture ,
    "rfuid" : rfuid
  }
    ).then(res => {console.log(`statusCode: ${res.status}`)}).catch(error => {console.error(error)})

const formData = new FormData();
formData.append('photo', fs.createReadStream(picture));
  const res = axios.post(url + '/seccam/upload', formData, {headers: formData.getHeaders()});