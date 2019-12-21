(this.webpackJsonpfitsbook=this.webpackJsonpfitsbook||[]).push([[0],{50:function(e,t,a){e.exports=a(95)},62:function(e,t,a){},91:function(e,t){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(44),s=a.n(r),o=a(11),i=a(13);var l=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(o.b,{to:"/",className:"navbar-brand"},c.a.createElement("img",{src:"/img/data_science_icon.svg",width:"45",height:"45",alt:""}),c.a.createElement("span",{className:"ml-2"},"Fitsbook")),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{exact:!0,to:"/",className:"nav-link",activeClassName:"active"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{exact:!0,to:"/models",className:"nav-link",activeClassName:"active"},"Models")))))};var m=function(){return c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",null,"Fitsbook"),c.a.createElement("p",null,"Homepage")))},u=a(8),d=a.n(u),h=a(1),p=a(2),f=a(5),b=a(4),v=a(6),g=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"getModels",value:function(){return this.get("/models")}},{key:"getModel",value:function(e){return this.get("/model/".concat(e))}},{key:"getHistory",value:function(e){return this.get("/history/".concat(e))}},{key:"stopTraining",value:function(e){return this.basePost("/training/".concat(e,"/stop")).then((function(e){return e.text()}))}}]),t}(function(){function e(){Object(h.a)(this,e),this.API_ROOT="https://fitsbook.glitch.me/api",this.SOCKET_URL="https://fitsbook.glitch.me"}return Object(p.a)(e,[{key:"get",value:function(e){return fetch("".concat(this.API_ROOT).concat(e),{method:"GET",mode:"cors",redirect:"follow"}).then((function(e){return e.json()}))}},{key:"post",value:function(e,t){var a={method:"POST",mode:"cors",redirect:"follow",body:t};return fetch("".concat(this.API_ROOT).concat(e),a).then((function(e){return e.json()}))}},{key:"basePost",value:function(e,t){var a={method:"POST",mode:"cors",redirect:"follow",body:t};return fetch("".concat(this.API_ROOT).concat(e),a)}},{key:"ping",value:function(){fetch("".concat(this.API_ROOT,"/ping")).then((function(e){return e.text()})).then((function(e){return!!e}))}}]),e}()),y=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("span",{className:"spinner-grow spinner-grow-sm text-success"}),c.a.createElement("span",{className:"text-success ml-1"},"Training"))}}]),t}(c.a.Component);function E(e){return e.show?c.a.createElement("div",{className:"d-inline"},c.a.createElement("span",{className:"text-muted font-weight-bold text-uppercase"}," Duration: "),e.duration):null}var k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).props=e,a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e),a=("0"+t.getDate()).slice(-2),n=("0"+t.getMonth()).slice(-2),c=("0"+t.getFullYear()).slice(-2),r=("0"+t.getHours()).slice(-2),s=("0"+t.getMinutes()).slice(-2),o=("0"+t.getSeconds()).slice(-2);return"".concat(a,"/").concat(n,"/").concat(c," - ").concat(r,":").concat(s,":").concat(o)}},{key:"timeSince",value:function(e){var t=Math.floor((Date.now()-e)/1e3),a=Math.floor(t/31536e3);return a>1?a+" years ago":(a=Math.floor(t/2592e3))>1?a+" months ago":(a=Math.floor(t/86400))>1?a+" days ago":(a=Math.floor(t/3600))>1?a+" hours ago":(a=Math.floor(t/60))>1?a+" minutes ago":Math.floor(t)+" seconds ago"}},{key:"elapsedTime",value:function(e,t){var a=Math.abs((t-e)/1e3),n=Math.floor(a/86400),c=Math.floor(a/3600)%24,r=Math.floor(a/60)%60,s=a%60,o=n>0?n+" days, ":"";return o+=c>0?c+"h, ":"",o+=r>0?r+"min, ":"",o+=s>0?s+"s":""}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.model;return c.a.createElement(o.b,{to:"/stats/".concat(t),style:{color:"inherit",textDecoration:"none"}},c.a.createElement("div",{className:"card ".concat(this.props.className)},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h5",{className:"card-title"},a.model.name),!a.training_end&&c.a.createElement(y,null)),c.a.createElement("small",{className:"d-block card-text"},c.a.createElement("span",{className:"text-muted font-weight-bold text-uppercase"},"Started: "),this.timeSince(a.training_start)," \u2022",c.a.createElement(E,{show:a.training_end,duration:this.elapsedTime(a.training_start,a.training_end)})))))}}]),t}(c.a.Component),O=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={cards:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"createTable",value:function(e){for(var t=[],a=0;a<Math.ceil(e.length/2);a++){for(var n=[],r=0;r<2&&2*a+r<e.length;r++)n.push(c.a.createElement("div",{key:"e-".concat(a,"-").concat(r),className:"col-md-6"},e[2*a+r]));t.push(c.a.createElement("div",{key:"e-".concat(a),className:"row"},n))}return t}},{key:"componentDidMount",value:function(){var e,t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new g,n.next=3,d.a.awrap(e.getModels());case 3:t=n.sent,a=t.map((function(e){return c.a.createElement(k,{key:e.id,id:e.id,model:e,className:"mb-2"})})),this.setState({cards:a});case 6:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){return c.a.createElement("div",{className:"container mt-5"},this.createTable(this.state.cards))}}]),t}(c.a.Component),N=a(49),w=a(47),j=a.n(w),x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).chart=null,a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("react-chart");this.chartConfig={type:"line",data:{labels:[],datasets:[]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},aspectRatio:1.75,responsive:!0}},this.chartInstance=new j.a(e,this.chartConfig)}},{key:"componentDidUpdate",value:function(e,t){this.props.data&&(this.chartConfig.data.labels=this.props.data.labels,this.chartConfig.data.datasets=this.props.data.datasets,this.chartInstance.update())}},{key:"render",value:function(){return c.a.createElement("div",{style:{width:this.props.width,height:this.props.height}},c.a.createElement("canvas",{id:"react-chart"}))}}]),t}(c.a.Component),T=function(){function e(){Object(h.a)(this,e),this.colors=["rgb(75, 192, 192)","rgb(255, 99, 132)","rgb(153, 102, 255)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(54, 162, 235)","rgb(201, 203, 207)"],this.datasets=[]}return Object(p.a)(e,[{key:"createDatasetArray",value:function(e){var t=this;return e.map((function(e,a){return{label:e,data:[],borderColor:t.colors[a],backgroundColor:t.colors[a],fill:!1,lineTension:0}}))}},{key:"parse",value:function(e){if(0===this.datasets.length){if(!(e.length>0))return;var t=Object.keys(e[0].metrics);this.datasets=this.createDatasetArray(t)}var a=e.reduce((function(e,t){return Object.keys(t.metrics).forEach((function(a){a in e?e[a].push(t.metrics[a]):e[a]=[t.metrics[a]]})),e}),{}),n=e.map((function(e){return e.epoch}));return this.datasets.forEach((function(e){e.label in a&&(e.data=a[e.label])})),{labels:n,datasets:this.datasets}}}]),e}(),S=(a(62),function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"createTable",value:function(e,t){if(e){var a=Object.keys(e).map((function(a,n){return e[a]?c.a.createElement("tr",{key:t+"-"+n},c.a.createElement("td",null,a),c.a.createElement("td",null,e[a])):null}));return c.a.createElement("table",{className:"table table-sm table-borderless table-responsive mb-0"},c.a.createElement("tbody",null,a))}}},{key:"drawLayers",value:function(e,t){var a=this,n=e.map((function(e,n){return c.a.createElement("div",{className:"mt-2 px-1",key:"".concat(t,"-").concat(n)},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("a",{className:"btn btn-block btn-outline-".concat(e.info.Trainable?"primary":"secondary"),"data-toggle":"collapse",href:"#collapse-".concat(t,"-").concat(n)},e.className)),c.a.createElement("div",{className:"collapse",id:"collapse-".concat(t,"-").concat(n)},c.a.createElement("div",{className:"card card-body p-1 mt-2"},a.createTable(e.info,"collapse-".concat(t,"-").concat(n,"-info")))))}));return c.a.createElement("div",null,n)}},{key:"parseModelData",value:function(){var e=this.props.model;return e&&Object.keys(e).length>0?{Name:e.model.name,"Training Start":new Date(e.training_start).toLocaleString(),"Training End":new Date(e.training_end).toLocaleString(),Duration:"TODO"}:{}}},{key:"parseOptimizerData",value:function(){var e=this.props.model;return e&&Object.keys(e).length>0?{Name:e.optimizer.name,"Learning Rate":e.optimizer.config.learning_rate|e.optimizer.config.lr,Rho:e.optimizer.config.rho,Decay:e.optimizer.config.decay,Epsilon:e.optimizer.config.epsilon}:{}}},{key:"parseLayersData",value:function(){var e=this.props.model;return e&&Object.keys(e).length>0?e.model.config.layers.map((function(e){return{className:e.class_name,info:{Trainable:String(e.config.trainable),"Data Type":e.config.dtype,Units:e.config.units,Activation:e.config.activation,"Input Shape":e.config.batch_input_shape?"(".concat(String(e.config.batch_input_shape),")"):null}}})):[]}},{key:"render",value:function(){return c.a.createElement("div",{className:"sideModelInfo mt-1"},c.a.createElement("h5",{className:"mt-3"},"Model"),this.createTable(this.parseModelData(),"model"),c.a.createElement("h5",{className:"mt-3"},"Layers"),this.drawLayers(this.parseLayersData(),"layers"),c.a.createElement("h5",{className:"mt-3"},"Optimizer"),this.createTable(this.parseOptimizerData(),"optimizer"))}}]),t}(c.a.Component));function M(e){return c.a.createElement("div",{className:"alert alert-success ".concat(e.show?"":"d-none")},"Stop signal sent. The training will end at the end of the current epoch.")}var C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={showStopSignalNotification:!1},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"stopTrainingClickHandler",value:function(){var e,t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=new g,a.next=3,d.a.awrap(e.stopTraining(this.props.id));case 3:t=a.sent,console.log(t),"OK"===t&&this.setState({showStopSignalNotification:!0});case 6:case"end":return a.stop()}}),null,this)}},{key:"createModal",value:function(){var e=this;return c.a.createElement("div",{className:"modal fade",id:"training-panel-modal",tabIndex:"-1"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title"},"Confirm"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"})),c.a.createElement("div",{className:"modal-body"},"Do you really want to stop training?"),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),c.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return e.stopTrainingClickHandler()}},"Stop")))))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"alert alert-secondary"},c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement(y,null),c.a.createElement("button",{className:"btn btn-danger","data-toggle":"modal","data-target":"#training-panel-modal",disabled:this.state.showStopSignalNotification},"Stop Training"))),c.a.createElement(M,{show:this.state.showStopSignalNotification}),this.createModal("btn btn-primary"))}}]),t}(c.a.Component),D=a(48),_=a.n(D),I=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).params={id:e.match.params.id},a.state={data:null},a.socket=null,a.model=null,a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"drawChart",value:function(){var e,t,a,n;return d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=new g,c.next=3,d.a.awrap(e.getHistory(this.params.id));case 3:t=c.sent,a=new T,n=a.parse(t),this.setState({data:n});case 7:case"end":return c.stop()}}),null,this)}},{key:"socketUpdate",value:function(e){var t=this.state.data;if(t){var a=Object.keys(e.metrics);t.datasets.forEach((function(t){a.includes(t.label)&&t.data.push(e.metrics[t.label])})),t.labels.push(e.epoch),this.setState({data:Object(N.a)({},t)})}else this.drawChart()}},{key:"componentDidMount",value:function(){var e,t,a=this;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return this.socket=_()((new g).SOCKET_URL),this.socket.on("history-".concat(this.params.id),(function(e){console.log("socket data",e),a.socketUpdate(e)})),this.socket.on("training-".concat(this.params.id),(function(e){var t,n;return d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if("end"!==e){c.next=6;break}return t=new g,c.next=4,d.a.awrap(t.getModel(a.params.id));case 4:n=c.sent,a.setState({model:n});case 6:case"end":return c.stop()}}))})),e=new g,n.next=6,d.a.awrap(e.getModel(this.params.id));case 6:t=n.sent,this.setState({model:t}),this.drawChart();case 9:case"end":return n.stop()}}),null,this)}},{key:"componentWillUnmount",value:function(){this.socket.close()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-9 mt-5"},c.a.createElement(x,{data:this.state.data})),c.a.createElement("div",{className:"col-lg-3 h-100 pt-3"},function(t){if(t)return c.a.createElement(C,{id:e.params.id})}(this.state.model&&!this.state.model.training_end),c.a.createElement(S,{model:this.state.model}))))}}]),t}(c.a.Component);var A=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:m}),c.a.createElement(i.a,{path:"/models",component:O}),c.a.createElement(i.a,{path:"/stats/:id",component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(94);s.a.render(c.a.createElement(o.a,{basename:"/"},c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.dcfeb3ad.chunk.js.map