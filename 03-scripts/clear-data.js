const fetch = require('isomorphic-fetch');

const user_id = 'r1hzXIGjB';
const device_id = 'X_IbunzLi';
//const sensor_id = 'KkEw9_Pt2';
//const sensor_id = '69Bgp8hfZ';
const data_token = 'rt3b4kvH10';
const session_token = '7j7bSxp9K';

const sensors = ["69Bgp8hfZ", "yoTkjVzM3", "utlfa4wF8"];

const data = {session_token};

const url = sensor_id => `http://localhost:5000/api/v1/user/${user_id}/device/${device_id}/sensor/${sensor_id}/clearData`;
const opt = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

const n = 10;
sensors.forEach(sensor => {
    fetch(url(sensor), opt)
    .then(res => {
        const promise = res.json();
        return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
    })
    .then(obj => console.log(obj))
    .catch(err => console.log(err.message));
});
