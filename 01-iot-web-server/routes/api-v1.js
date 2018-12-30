const express = require('express');
const router = express.Router();

const session = require('../middleware/session');
const data_token = require('../middleware/data_token');

const auth = require('../controllers/auth');
const user = require('../controllers/user');
const device = require('../controllers/device');
const sensor = require('../controllers/sensor');
const data = require('../controllers/data');

// /api/v1/auth/registrate
//      POST    - registarate a new user
router.post("/auth/registrate", auth.registrate);

// /api/v1/auth/login
//      POST    - try to login
router.post('/auth/login', auth.login);

// /api/v1/auth/logout
//      POST    - logout
router.post('/auth/logout', session.isUserLogged, auth.logout);

// /api/v1/auth/changePassword
//      POST    - change password

// /api/v1/auth/forgotPassword
//      POST    - recover password if forgot

// /api/v1/user/:user_uid?session_token=XXX
//      GET     - get user info
router.get('/user/:user_id', session.isUserLogged, user.getUserById);

// /api/v1/user/:user_uid
//      PUT     - update user info

// /api/v1/user/:user_uid/device?session_token=XXX
//      GET     - get device list
router.get('/user/:user_id/device', session.isUserLogged, user.getDeviceList);

// /api/v1/user/:user_uid/device
//      POST    - add new device
router.post('/user/:user_id/device', session.isUserLogged, device.createNewDevice);

// /api/v1/user/:user_uid/device/:device_uid?session_token=XXX
//      GET     - get device info
router.get('/user/:user_id/device/:device_id', session.isUserLogged, device.getDeviceInfoById);

// [SAVE DATA]
// /api/v1/user/:user_uid/device/:device_uid
//      POST    - set sensors data

// /api/v1/user/:user_uid/device/:device_uid
//      PUT     - update device info
router.put('/user/:user_id/device/:device_id', session.isUserLogged, device.updateDeviceInfo);

// /api/v1/user/:user_uid/device/:device_uid
//      DELETE  - delete device
router.delete('/user/:user_id/device/:device_id', session.isUserLogged, device.deleteDevice);

// /api/v1/user/:user_uid/device/:device_uid/sensor
//      GET     - get sensors list
router.get('/user/:user_id/device/:device_id/sensor', session.isUserLogged, sensor.getSensorsList);

// /api/v1/user/:user_uid/device/:device_uid/sensor
//      POST    - add a new sensor
router.post('/user/:user_id/device/:device_id/sensor', session.isUserLogged, sensor.createNewSensor);

// /api/v1/user/:user_uid/device/:device_uid/sensor/:sensor_uid
//      GET     - get sensor info
router.get('/user/:user_id/device/:device_id/sensor/:sensor_id', session.isUserLogged, sensor.getSensorInfoById);

// [SAVE DATA]
// /api/v1/user/:user_uid/device/:device_uid/sensor/:sensor_uid
//      POST    - set sensor data

// /api/v1/user/:user_uid/device/:device_uid/sensor/:sensor_uid
//      PUT     - udpate sensor info
router.put('/user/:user_id/device/:device_id/sensor/:sensor_id', session.isUserLogged, sensor.updateSensorInfoById);

// /api/v1/user/:user_uid/device/:device_uid/sensor/:sensor_uid
//      DELETE  - delete sensor
router.delete('/user/:user_id/device/:device_id/sensor/:sensor_id', session.isUserLogged, sensor.deleteSensorById);
router.delete('/user/:user_id/device/:device_id/sensor/:sensor_id/clearData', session.isUserLogged, sensor.deleteSensorDataById);

// /data/:user_id/:device_id?data_token=XXX
//      GET     - get last data from all device sensors 


// POST    /data/:user_id/:device_id
// Save sensors data to db
//     Body:
//     @data_token - data_token
//     @data: [{sid: SENSOR_ID, v: NUMBER}, ...]
router.post('/data/:user_id/:device_id', data_token.checkDataToken, data.setDeviceSensorsData);

// /data/:user_id/:device_id/:sensor_id?data_token=XXX
//      GET     - get last sensor data
router.get('/data/:user_id/:device_id/:sensor_id', data_token.checkDataToken, data.getSensorData);

// /data/:user_id/:device_id/:sensor_id
//      POST    - Save sensor data to db
//      @data_token
//      @value
router.post('/data/:user_id/:device_id/:sensor_id',data_token.checkDataToken, data.setSensorDataById);


module.exports = router;