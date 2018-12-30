const fetch = require('isomorphic-fetch');

const user_id = 'r1hzXIGjB';
const device_id = 'X_IbunzLi';
const sensor_id = 'KkEw9_Pt2';
//const sensor_id = '69Bgp8hfZ';
const data_token = 'rt3b4kvH10';

const sensors = ["utlfa4wF8", "69Bgp8hfZ", "yoTkjVzM3"];

const data = {data_token};

const url = `http://localhost:5000/api/v1/data/${user_id}/${device_id}`;
const opt = value => ({
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            data_token,
            data:
                [
                    {sid: sensors[0], v: value * 0.8},
                    {sid: sensors[1], v: value * 0.8},
                    {sid: sensors[2], v: value * 1.2}
                ]
        }
    )
});

const n = 1;

for (let i = 0; i < n; i++) {
    fetch(url, opt(i * Math.floor(Math.random() * 100)))
        .then(res => {
            const promise = res.json();
            return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
        })
        .then(obj => console.log(i, obj))
        .catch(err => console.log(i, err.message));
}