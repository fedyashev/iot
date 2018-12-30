const fetch = require('isomorphic-fetch');

const user_id = 'r1hzXIGjB';
const device_id = 'X_IbunzLi';
const sensor_id = 'KkEw9_Pt2';
//const sensor_id = '69Bgp8hfZ';
const data_token = 'rt3b4kvH10';

const data = {data_token};

const url = `http://localhost:5000/api/v1/data/${user_id}/${device_id}/${sensor_id}`;
const opt = value => ({
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data_token, value})
});

const n = 10;

for (let i = 0; i < n; i++) {
    fetch(url, opt(i * 10))
        .then(res => {
            const promise = res.json();
            return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
        })
        .then(obj => console.log(i, obj))
        .catch(err => console.log(i, err.message));
}