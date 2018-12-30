(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),o=a(39),l=a(2),i=a(11),m=a(15),u=a(16),d=a(20),v=a(17),f=a(21),E=a(40),p=a(37),N=function(e){var t=e.user,a=e.onLogout;return r.a.createElement("header",{className:"mb-3"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom"},r.a.createElement("span",null,r.a.createElement(p.a,{className:"navbar-brand",to:t?"/user":"/login"},"IoT")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},t?r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{className:"nav-link",to:"/device"},"Devices")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{className:"nav-link",to:"/data"},"Data")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{className:"nav-link",to:"/user"},r.a.createElement("span",{className:"text-warning font-weight-bold"},t.username))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{className:"nav-link",to:"/logout",onClick:function(e){e.preventDefault(),a()}},"Logout"))):r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{className:"nav-link",to:"/registrate"},"Registrate"))))))},h=a(41),g=a(38),b=function(e){var t,a,n=e.onLogin;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-sm-12 col-md-8 col-lg-6 col-lx-4"},r.a.createElement("form",{className:"bg-light border rounded p-3",onSubmit:function(e){e.preventDefault(),n(t.value,a.value)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"usernameInput"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"usernameInput",placeholder:"Username",ref:function(e){return t=e}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"passwordInput"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"passwordInput",placeholder:"Password",ref:function(e){return a=e}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"))))},D=function(e){var t,a,n,c,s=e.onSubmitRegistrateForm,o=e.setErrorMessage;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6"},r.a.createElement("form",{className:"bg-light border rounded p-3",onSubmit:function(e){e.preventDefault(),n.value!==c.value?o("Password is not confirmed."):s(t.value,n.value,a.value)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"usernameInput"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"usernameInput",placeholder:"Username",ref:function(e){return t=e}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"emailInput"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"emailInput","aria-describedby":"emailHelp",placeholder:"Enter email",ref:function(e){return a=e}}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"passwordInput"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"passwordInput",placeholder:"Password",ref:function(e){return n=e}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"conformPasswordInput"},"Confirm password"),r.a.createElement("input",{type:"password",className:"form-control",id:"conformPasswordInput",placeholder:"Confirm password",ref:function(e){return c=e}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))},S=function(e){var t=e.user;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col"},t?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"user_id: ".concat(t._id)),r.a.createElement("li",{className:"list-group-item"},"username: ".concat(t.username)),r.a.createElement("li",{className:"list-group-item"},"email: ".concat(t.email)),r.a.createElement("li",{className:"list-group-item"},"data_token: ".concat(t.data_token)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",null,r.a.createElement(p.a,{to:"/device"},"Devices")," ",t.devices.length))):r.a.createElement("p",{className:"h1 text-danger"},"User data not found")))},w=function(e){var t,a,n=e.data,c=n.date,s=n.device,o=n.sensor,l=n.value,i=n.units,m=e.onRefreshSensorData;return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center align-middle"},r.a.createElement("button",{className:"btn btn-sm btn-secondary p-2",onClick:(t=s._id,a=o._id,function(e){e.preventDefault(),m(t,a)})}," ")),r.a.createElement("td",{className:"text-center align-middle"},c?new Date(c).toLocaleString("en-US",{timeZone:"Europe/Minsk",hour12:!1}):"---"),r.a.createElement("td",{className:"text-center align-middle"},r.a.createElement(p.a,{to:"/device/".concat(s._id)},s.name)),r.a.createElement("td",{className:"text-center align-middle"},r.a.createElement(p.a,{to:"/device/".concat(s._id,"/sensor/").concat(o._id)},o.name)),r.a.createElement("td",{className:"text-center align-middle"},l||"---"),r.a.createElement("td",{className:"text-center align-middle"},i))},y=function(e){var t=e.user,a=e.onRefreshAllData,n=e.onRefreshSensorData;return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered table-hover table-sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",className:"text-center"},r.a.createElement("button",{className:"btn btn-sm btn-secondary p-2",onClick:function(e){e.preventDefault(),a()}}," ")),r.a.createElement("th",{scope:"col",className:"text-center"},"Date"),r.a.createElement("th",{scope:"col",className:"text-center"},"Device"),r.a.createElement("th",{scope:"col",className:"text-center"},"Sensor"),r.a.createElement("th",{scope:"col",className:"text-center"},"Value"),r.a.createElement("th",{scope:"col",className:"text-center"},"Units"))),r.a.createElement("tbody",{style:{fontSize:"0.85rem"}},t&&t.devices&&t.devices.map(function(e){return e.sensors.map(function(t){return r.a.createElement(w,{key:"".concat(t._id,"-").concat(t.lastData?t.lastData.date:"null"),data:{date:t.lastData?t.lastData.date:null,device:e,sensor:t,value:t.lastData?t.lastData.value:null,units:t.units},onRefreshSensorData:n})})}))))},k=function(e){var t=e.device;return r.a.createElement("nav",{className:"nav mb-3"},r.a.createElement(p.a,{to:"/device/".concat(t._id,"/createSensor"),className:"nav-link"},"Add sensor"),r.a.createElement(p.a,{to:"/device/".concat(t._id,"/renameDevice"),className:"nav-link"},"Rename"),r.a.createElement(p.a,{to:"/device/".concat(t._id,"/deleteDevice"),className:"nav-link"},"Delete"))},x=function(e){var t=e.device;return r.a.createElement("div",{className:"mb-3"},r.a.createElement("p",{className:"h3 text-center mb-1"},"Device info"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item p-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-2 col-lg-2"},"device_id:"),r.a.createElement("div",{className:"col-8 col-md-10 col-lg-10"},t._id))),r.a.createElement("li",{className:"list-group-item p-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-2 col-lg-2"},"name:"),r.a.createElement("div",{className:"col-8 col-md-10 col-lg-10"},t.name)))))},O=function(e){var t=e.device,a=e.onRefreshSensorData,n=e.onRefreshDeviceData;return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("p",{className:"h3 text-center mb-1"},"Sensors list"),r.a.createElement("table",{className:"table table-bordered table-hover table-sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",className:"text-center"},r.a.createElement("button",{className:"btn btn-sm btn-secondary p-2",onClick:function(e){e.preventDefault(),n(t._id)}}," ")),r.a.createElement("th",{scope:"col",className:"text-center"},"Name"),r.a.createElement("th",{scope:"col",className:"text-center"},"Units"),r.a.createElement("th",{scope:"col",className:"text-center"},"Value"),r.a.createElement("th",{scope:"col",className:"text-center"},"Date"))),r.a.createElement("tbody",{style:{fontSize:"0.85rem"}},t&&t.sensors.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{className:"btn btn-sm btn-secondary p-2",onClick:(n=t._id,c=e._id,function(e){e.preventDefault(),a(n,c)})}," ")),r.a.createElement("td",{className:"text-center"},r.a.createElement(p.a,{to:"/device/".concat(t._id,"/sensor/").concat(e._id)},e.name)),r.a.createElement("td",{className:"text-center"},e.units),r.a.createElement("td",{className:"text-center"},e.lastData?e.lastData.value:"---"),r.a.createElement("td",{className:"text-center"},e.lastData?new Date(e.lastData.date).toLocaleString("en-US",{timeZone:"Europe/Minsk",hour12:!1}):"---"));var n,c}))))},j=function(e){return r.a.createElement("section",null,r.a.createElement(k,e),r.a.createElement(x,e),r.a.createElement(O,e))},C=function(e){var t,a=e.onCreateNewDevice;return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"New device name","aria-label":"New device name","aria-describedby":"btnCreateNewDevice",ref:function(e){return t=e}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-success",type:"button",id:"btnCreateNewDevice",onClick:function(e){e.preventDefault(),a(t.value),t.value=""}},"Create")))},R=function(e){var t=e.device;return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},r.a.createElement(p.a,{to:"/device/".concat(t._id)},t.name)),r.a.createElement("td",{className:"text-center"},t.sensors.length),r.a.createElement("td",{className:"text-center"},r.a.createElement("div",{className:"dropdown ml-auto"},r.a.createElement("button",{className:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"dropdownMenu-device-".concat(t._id),"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Action"),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenu-device-".concat(t._id)},r.a.createElement(p.a,{to:"/device/".concat(t._id,"/createSensor"),className:"dropdown-item"},"Add sensor"),r.a.createElement(p.a,{to:"/device/".concat(t._id,"/renameDevice"),className:"dropdown-item"},"Rename"),r.a.createElement(p.a,{to:"/device/".concat(t._id,"/deleteDevice"),className:"dropdown-item"},"Delete")))))},I=function(e){var t=e.user;return r.a.createElement("table",{className:"table table-bordered table-hover table-sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",className:"text-center"},"Device"),r.a.createElement("th",{scope:"col",className:"text-center"},"Sensors"),r.a.createElement("th",{scope:"col",className:"text-center"},"Action"))),r.a.createElement("tbody",{style:{fontSize:"0.85rem"}},t&&t.devices&&t.devices.map(function(e){return r.a.createElement(R,{key:e._id,device:e})})))},T=function(e){var t=e.user,a=e.onCreateNewDevice;return r.a.createElement("div",null,r.a.createElement(C,{onCreateNewDevice:a}),t&&r.a.createElement(I,{user:t}))},L=function(e){var t=e.device,a=e.onDeleteDevice,n=function(e){return function(n){n.preventDefault(),a(t._id,e)}};return r.a.createElement("div",{className:"border p-5"},r.a.createElement("div",{className:"mb-5"},r.a.createElement("p",{className:"h3 text-center"},"Delete device ".concat(t.name,"?"))),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"ml-5"},r.a.createElement("button",{className:"btn btn-success",onClick:n(!0)},"Yes")),r.a.createElement("div",{className:"mr-5"},r.a.createElement("button",{className:"btn btn-danger",onClick:n(!1)},"No"))))},_=function(e){var t,a=e.device,n=e.onRenameDevice;return r.a.createElement("div",null,r.a.createElement("p",{className:"h3 text-center"},"Enter new device name"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"New device name","aria-label":"New device name","aria-describedby":"btnCreateNewDevice",ref:function(e){return t=e},defaultValue:a.name}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-success",type:"button",id:"btnCreateNewDevice",onClick:function(e){e.preventDefault(),n(a._id,t.value)}},"Rename"))))},F=function(e){var t=e.device,a=e.onRenameDevice;return r.a.createElement(_,{device:t,onRenameDevice:a})},P=function(e){var t=e.match.params,a=t.device_id,n=t.sensor_id,c=e.onRefreshSensorData;return r.a.createElement("nav",{className:"nav mb-2"},r.a.createElement(p.a,{to:"/device/".concat(a,"/sensor/").concat(n,"/editSensor"),className:"nav-link"},"Edit"),r.a.createElement(p.a,{to:"/device/".concat(a,"/sensor/").concat(n,"/deleteSensor"),className:"nav-link"},"Delete"),r.a.createElement(p.a,{to:"",className:"nav-link",onClick:function(e,t){return function(a){a.preventDefault(),c(e,t)}}(a,n)},"Refresh"))},A=function(e){var t=e.sensor;return r.a.createElement("div",null,r.a.createElement("p",{className:"h3 text-center mb-1"},"Sensor info"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item p-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-2 col-lg-2"},"sensor_id:"),r.a.createElement("div",{className:"col-8 col-md-10 col-lg-10"},t._id))),r.a.createElement("li",{className:"list-group-item p-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-2 col-lg-2"},"name:"),r.a.createElement("div",{className:"col-8 col-md-10 col-lg-10"},t.name))),r.a.createElement("li",{className:"list-group-item p-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-2 col-lg-2"},"units:"),r.a.createElement("div",{className:"col-8 col-md-10 col-lg-10"},t.units))),r.a.createElement("li",{className:"list-group-item p-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-2 col-lg-2"},"date:"),r.a.createElement("div",{className:"col-8 col-md-10 col-lg-10"},t.lastData?new Date(t.lastData.date).toLocaleString("en-US",{timeZone:"Europe/Minsk",hour12:!1}):"---"))),r.a.createElement("li",{className:"list-group-item p-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-2 col-lg-2"},"value:"),r.a.createElement("div",{className:"col-8 col-md-10 col-lg-10"},t.lastData?t.lastData.value:"---")))))},B=function(e){return r.a.createElement("section",null,r.a.createElement(P,e),r.a.createElement(A,e))},M=function(e){var t,a,n=e.onCreateSensor,c=e.device_id;return r.a.createElement("div",{className:"mb-2"},r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{className:"h4"},"Create a new sensor")),r.a.createElement("div",{className:"input-group "},r.a.createElement("input",{type:"text",className:"form-control w-50",placeholder:"Sensor name",ref:function(e){return t=e}}),r.a.createElement("input",{type:"text",className:"form-control mx-2",placeholder:"Units",ref:function(e){return a=e}}),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n(c,t.value,a.value)}},"Create")))},J=function(e){var t=e.onCreateSensor,a=e.match.params.device_id;return r.a.createElement(M,{onCreateSensor:t,device_id:a})},V=function(e){var t,a,n=e.sensor,c=e.onEditSensor,s=e.match.params.device_id;return r.a.createElement("div",null,r.a.createElement("p",{className:"h3 text-center mb-1"},"Edit sensor: ".concat(n.name)),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputName",className:"col-sm-2 col-form-label"},"Name"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",className:"form-control",id:"inputName",placeholder:"New name",defaultValue:n.name,ref:function(e){return t=e}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputUnits",className:"col-sm-2 col-form-label"},"Units"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",className:"form-control",id:"inputUnits",placeholder:"New units",defaultValue:n.units,ref:function(e){return a=e}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),c(s,n._id,t.value,a.value)}},"Update")))))},G=function(e){return r.a.createElement(V,e)},z=function(e){var t=e.sensor,a=e.onDeleteSensor,n=e.match.params.device_id,c=function(e){return function(r){r.preventDefault(),a(n,t._id,e)}};return r.a.createElement("div",{className:"border p-5"},r.a.createElement("div",{className:"mb-5"},r.a.createElement("p",{className:"h3 text-center"},"Delete sensor ".concat(t.name,"?"))),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"ml-5"},r.a.createElement("button",{className:"btn btn-success",onClick:c(!0)},"Yes")),r.a.createElement("div",{className:"mr-5"},r.a.createElement("button",{className:"btn btn-danger",onClick:c(!1)},"No"))))},Z=function(e){var t=e.user,a=e.setErrorMessage,n=e.onLogin,c=e.onSubmitRegistrateForm,s=e.onCreateNewDevice,o=e.onDeleteDevice,l=e.onCreateSensor,i=e.onRenameDevice,m=e.onEditSensor,u=e.onDeleteSensor,d=e.onRefreshAllData,v=e.onRefreshSensorData,f=e.onRefreshDeviceData;return r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(g.a,{path:"/login",render:function(e){return r.a.createElement(b,Object.assign({},e,{onLogin:n}))}}),r.a.createElement(g.a,{path:"/registrate",render:function(e){return r.a.createElement(D,Object.assign({},e,{onSubmitRegistrateForm:c,setErrorMessage:a}))}}),r.a.createElement(g.a,{exact:!0,path:"/data",render:function(e){return r.a.createElement(y,Object.assign({},e,{user:t,onRefreshAllData:d,onRefreshSensorData:v}))}}),r.a.createElement(g.a,{exact:!0,path:"/user",render:function(e){return r.a.createElement(S,Object.assign({},e,{user:t}))}}),r.a.createElement(g.a,{exact:!0,path:"/device",render:function(e){return r.a.createElement(T,Object.assign({},e,{user:t,onCreateNewDevice:s}))}}),r.a.createElement(g.a,{exact:!0,path:"/device/:device_id",render:function(e){return t&&r.a.createElement(j,Object.assign({},e,{device:t.devices.find(function(t){return t._id===e.match.params.device_id}),onRefreshSensorData:v,onRefreshDeviceData:f}))}}),r.a.createElement(g.a,{exact:!0,path:"/device/:device_id/createSensor",render:function(e){return t&&r.a.createElement(J,Object.assign({},e,{onCreateSensor:l}))}}),r.a.createElement(g.a,{exact:!0,path:"/device/:device_id/deleteDevice",render:function(e){return t&&r.a.createElement(L,Object.assign({},e,{device:t.devices.find(function(t){return t._id===e.match.params.device_id}),onDeleteDevice:o}))}}),r.a.createElement(g.a,{exact:!0,path:"/device/:device_id/renameDevice",render:function(e){return t&&r.a.createElement(F,Object.assign({},e,{device:t.devices.find(function(t){return t._id===e.match.params.device_id}),onRenameDevice:i}))}}),r.a.createElement(g.a,{exact:!0,path:"/device/:device_id/sensor/:sensor_id",render:function(e){return t&&r.a.createElement(B,Object.assign({},e,{sensor:t.devices.find(function(t){return t._id===e.match.params.device_id}).sensors.find(function(t){return t._id===e.match.params.sensor_id}),onRefreshSensorData:v}))}}),r.a.createElement(g.a,{exact:!0,path:"/device/:device_id/sensor/:sensor_id/editSensor",render:function(e){return t&&r.a.createElement(G,Object.assign({},e,{sensor:t.devices.find(function(t){return t._id===e.match.params.device_id}).sensors.find(function(t){return t._id===e.match.params.sensor_id}),onEditSensor:m}))}}),r.a.createElement(g.a,{exact:!0,path:"/device/:device_id/sensor/:sensor_id/deleteSensor",render:function(e){return t&&r.a.createElement(z,Object.assign({},e,{sensor:t.devices.find(function(t){return t._id===e.match.params.device_id}).sensors.find(function(t){return t._id===e.match.params.sensor_id}),onDeleteSensor:u}))}})))},H=function(e){var t=e.message,a=e.onAlertClose;return r.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},r.a.createElement("span",null,t),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(e){e.preventDefault(),a()}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},Y=a(4),W=a.n(Y),q={login:function(e,t){var a={username:e,password:t},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};return W()("/api/v1/auth/login",n).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},logout:function(e,t){var a={user_id:e,session_token:t},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};return W()("/api/v1/auth/logout",n).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},registrate:function(e,t,a){var n={username:e,password:t,email:a},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};return W()("/api/v1/auth/registrate",r).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},getUserById:function(e,t){var a="/api/v1/user/".concat(e,"?session_token=").concat(t);return W()(a,{method:"GET"}).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},getDeviceList:function(e,t){var a="/api/v1/user/".concat(e,"/device?session_token=").concat(t);return W()(a,{method:"GET"}).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},createNewDevice:function(e,t,a){var n={name:a,session_token:t},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},c="/api/v1/user/".concat(e,"/device");return W()(c,r).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},deleteDevice:function(e,t,a){var n={session_token:a},r={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},c="/api/v1/user/".concat(e,"/device/").concat(t);return W()(c,r).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},createNewSensor:function(e,t,a,n,r){var c={session_token:a,name:n,units:r},s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},o="/api/v1/user/".concat(e,"/device/").concat(t,"/sensor");return W()(o,s).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},renameDevice:function(e,t,a,n){var r={session_token:a,name:n},c={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},s="/api/v1/user/".concat(e,"/device/").concat(t);return W()(s,c).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},editSensor:function(e,t,a,n,r,c){var s={session_token:n,name:r,units:c},o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)},l="/api/v1/user/".concat(e,"/device/").concat(t,"/sensor/").concat(a);return W()(l,o).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},deleteSensor:function(e,t,a,n){var r={session_token:n},c={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},s="/api/v1/user/".concat(e,"/device/").concat(t,"/sensor/").concat(a);return W()(s,c).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},getSensorInfoById:function(e,t,a,n){var r="/api/v1/user/".concat(e,"/device/").concat(t,"/sensor/").concat(a,"?session_token=").concat(n);return W()(r,{method:"GET"}).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})},getDeviceInfoById:function(e,t,a){var n="/api/v1/user/".concat(e,"/device/").concat(t,"?session_token=").concat(a);return W()(n,{method:"GET"}).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw new Error(e.message)})})}},K=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this,e))).handlerLogin=function(e,t){q.login(e,t).then(function(e){var t=e.user_id,n=e.session_token;if(!t||!n)throw new Error("Incorrect response data");q.getUserById(t,n).then(function(e){a.setState({user:e,session_token:n},function(){a.props.history.push("/data")})}).catch(function(e){a.setState({message:e.message})})}).catch(function(e){a.setState({message:e.message})})},a.handlerLogout=function(){a.setState({user:null,session_token:null,message:null}),a.props.history.push("/login")},a.handlerAlertClose=function(){return a.setState({message:null})},a.handleSubmitRegistrateForm=function(e,t,n){q.registrate(e,t,n).then(function(e){a.setState({message:"Registration success."},function(){a.props.history.push("/login")})}).catch(function(e){a.setState({message:e.message})})},a.handleCreateNewDevice=function(e){if(e){var t=a.state.user;q.createNewDevice(t._id,a.state.session_token,e).then(function(n){var r=[].concat(Object(i.a)(t.devices),[n]),c=Object(l.a)({},t,{devices:r});a.setState({user:c,message:"Device ".concat(e," created.")})}).catch(function(e){a.setState({message:e.message})})}else a.setState({message:"Incorrect new device name"})},a.handleDeleteDevice=function(e,t){if(t){var n=a.state,r=n.user,c=n.session_token;q.deleteDevice(r._id,e,c).then(function(t){var n=Object(i.a)(r.devices).filter(function(t){return t._id!==e}),c=Object(l.a)({},r,{devices:n});a.props.history.push("/device"),a.setState({user:c,message:"Device deleted"})}).catch(function(e){return a.setState({message:e.message})})}else a.props.history.goBack()},a.setErrorMessage=function(e){return a.setState({message:e})},a.isAuthenticated=function(){return null!=a.state.session_token},a.handleCreateNewSensor=function(e,t,n){if(e&&t&&n){var r=a.state,c=r.user,s=r.session_token,o=c._id;q.createNewSensor(o,e,s,t,n).then(function(t){var n=Object(l.a)({},c);n.devices.find(function(t){return t._id===e}).sensors.push(t),a.setState(Object(l.a)({},a.state,{user:n,message:"Sensor created"}),function(){a.props.history.push("/device/".concat(e))})}).catch(function(e){return a.setState({message:e.message})})}else a.setState({message:"Incorrect sensor name or units"})},a.handleRenameDevice=function(e,t){var n=a.state,r=n.user,c=n.session_token;q.renameDevice(r._id,e,c,t).then(function(t){var n=Object(l.a)({},r);n.devices.find(function(t){return t._id===e}).name=t.name,a.props.history.goBack(),a.setState(Object(l.a)({},a.state,{user:n,message:"Device renamed"}))}).catch(function(e){return a.setState(Object(l.a)({},a.state,{message:e.message}))})},a.handleEditSensor=function(e,t,n,r){var c=a.state,s=c.user,o=c.session_token;q.editSensor(s._id,e,t,o,n,r).then(function(n){var r=Object(l.a)({},s),c=r.devices.find(function(t){return t._id===e}).sensors.find(function(e){return e._id===t});c.name=n.name,c.units=n.units,a.props.history.goBack(),a.setState(Object(l.a)({},a.state,{user:r,message:"Sensor updated"}))}).catch(function(e){return a.setState(Object(l.a)({},a.state,{message:e.message}))})},a.handleDeleteSensor=function(e,t,n){if(n){var r=a.state,c=r.user,s=r.session_token;q.deleteSensor(c._id,e,t,s).then(function(n){var r=Object(l.a)({},c),s=r.devices.find(function(t){return t._id===e}).sensors.filter(function(e){return e._id!==t});r.devices.find(function(t){return t._id===e}).sensors=s,a.props.history.push("/device/".concat(e)),a.setState(Object(l.a)({},a.state,{user:r,message:"Sensor deleted"}))}).catch(function(e){return a.setState(Object(l.a)({},a.state,{message:e.message}))})}else a.props.history.goBack()},a.handlerRefreshAllData=function(){var e=a.state,t=e.user,n=e.session_token;q.getUserById(t._id,n).then(function(e){return a.setState({user:e,session_token:n})}).catch(function(e){return a.setState(Object(l.a)({},a.state,{message:e.message}))})},a.handleRefreshSensorData=function(e,t){var n=a.state,r=n.user,c=n.session_token;q.getSensorInfoById(r._id,e,t,c).then(function(n){var c=Object(l.a)({},r),s=c.devices.find(function(t){return t._id===e}),o=s.sensors.map(function(e){return e._id===t?n:e});s.sensors=o,a.setState(Object(l.a)({},a.state,{user:c}))}).catch(function(e){return a.setState(Object(l.a)({},a.state,{message:e.message}))})},a.handleRefreshDeviceData=function(e){var t=a.state,n=t.user,r=t.session_token;q.getDeviceInfoById(n._id,e,r).then(function(t){var r=n.devices.map(function(a){return a._id===e?t:a}),c=Object(l.a)({},n,{devices:r});a.setState(Object(l.a)({},a.state,{user:c}))}).catch(function(e){return a.setState(Object(l.a)({},a.state,{message:e.message}))})},a.state={user:null,session_token:null,message:null},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.history.push("/login")}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.message;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(N,{user:t,onLogout:this.handlerLogout}),a&&r.a.createElement(H,{message:a,onAlertClose:this.handlerAlertClose}),r.a.createElement(Z,{user:t,isAuthenticated:this.isAuthenticated,onLogin:this.handlerLogin,setErrorMessage:this.setErrorMessage,onSubmitRegistrateForm:this.handleSubmitRegistrateForm,onCreateNewDevice:this.handleCreateNewDevice,onDeleteDevice:this.handleDeleteDevice,onCreateSensor:this.handleCreateNewSensor,onRenameDevice:this.handleRenameDevice,onEditSensor:this.handleEditSensor,onDeleteSensor:this.handleDeleteSensor,onRefreshAllData:this.handlerRefreshAllData,onRefreshSensorData:this.handleRefreshSensorData,onRefreshDeviceData:this.handleRefreshDeviceData})))}}]),t}(n.Component),Q=Object(E.a)(K);a(31),a(33);s.a.render(r.a.createElement(o.a,null,r.a.createElement(Q,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.a37cb167.chunk.js.map