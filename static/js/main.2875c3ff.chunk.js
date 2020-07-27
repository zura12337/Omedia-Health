(this["webpackJsonpomedia-health"]=this["webpackJsonpomedia-health"]||[]).push([[0],{30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),l=a.n(i),c=(a(35),a(1)),s=a(2),o=a(4),d=a(3),u=(a(36),a(7)),m=a(21),h=a(15),p=a(28),v=a(13),b=function(e){var t=e.name,a=e.label,n=e.value,i=e.error,l=Object(v.a)(e,["name","label","value","error"]);return r.a.createElement("div",{className:"form-group m-2"},r.a.createElement("label",{className:"form-control-label",htmlFor:t},a),r.a.createElement("input",Object.assign({},l,{name:t,id:t,value:n,className:"form-control"})),i&&r.a.createElement("div",{className:"text-danger font-weight-bold mt-2 error"},i))},y=function(e){var t=e.name,a=e.label,n=e.options,i=e.error,l=Object(v.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group m-2"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},l,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),i&&r.a.createElement("div",{className:"text-danger font-weight-bold mt-2"},i))},f=a(5),g=a.n(f),E=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{date:null}},e.validate=function(){var t=g.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(p.a)(t.details);try{for(r.s();!(a=r.n()).done;){var i=a.value;n[i.path[0]]=i.message}}catch(l){r.e(l)}finally{r.f()}return console.log(n),n},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(h.a)({},a,n),i=Object(h.a)({},a,e.schema[a]),l=g.a.validate(r,i).error;return l?l.details[0].message:null},e.handleChange=function(t){var a=t.currentTarget,n=Object(m.a)({},e.state.errors),r=e.validateProperty(a);r?n[a.name]=r:delete n[a.name];var i=Object(m.a)({},e.state.data);i[a.name]=a.value,e.setState({data:i})},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e}return Object(s.a)(a,[{key:"renderButton",value:function(e){return r.a.createElement("button",{type:"submit",onClick:this.handleSubmit,className:"btn btn-primary btn-sm m-2 mb-5"},e)}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,i=n.data,l=n.errors;return r.a.createElement(b,{type:a,onChange:this.handleChange,name:e,label:t,error:l[e],value:i[e]})}},{key:"renderSelect",value:function(e,t,a){var n=this.state,i=n.data,l=n.errors;return r.a.createElement(y,{name:e,value:i[e],label:t,options:a,error:l[e],onChange:this.handleChange})}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.doSubmit=function(){localStorage.setItem("user",JSON.stringify(e.state.data)),e.props.history.push("/Omedia-Health"),window.location.reload(!1)},e.schema={name:g.a.string().required().label("Name"),email:g.a.string().required().email().label("Email"),desiredWeight:g.a.number().required().label("Desired Weight"),desiredMealCalories:g.a.number().required().label("Desired Meal Calories"),desiredActivityCalories:g.a.number().required().label("Desired Activity Calories"),password:g.a.string().required().label("Password")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center mb-5 mt-5"},"Register Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("name","Name"),this.renderInput("email","Email"),r.a.createElement("div",{className:"form-row m-1"},this.renderInput("desiredWeight","Desired Weight","number"),this.renderInput("desiredMealCalories","Desired Meal Calories","number"),this.renderInput("desiredActivityCalories","Desired Activity Calories","number")),this.renderInput("password","Password","password"),this.renderButton("Submit")))}}]),a}(E),C=a(19),j=a(18),N=a.n(j),k=function(e){var t=localStorage.getItem(e);return JSON.parse(t)},w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):N.a.get(e,t.path)},e.generateKey=function(e,t){return e.id+(t.path||t.key)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns,i=t.name,l=t.dimension,c=k("user");return r.a.createElement("tbody",null,a&&a.map((function(t){return"weight"===l?t[l].slice(0,-2)<=parseInt(c[i])?r.a.createElement("tr",{key:t.id},n.map((function(a){return r.a.createElement("td",{className:"text-success",key:e.generateKey(t,a)},e.renderCell(t,a))}))):r.a.createElement("tr",{key:t.id},n.map((function(a){return r.a.createElement("td",{className:"text-danger",key:e.generateKey(t,a)},e.renderCell(t,a))}))):"allMealCalories"===l||"mealCalories"===l?t[l]<=parseInt(c[i])?r.a.createElement("tr",{key:t.id},n.map((function(a){return r.a.createElement("td",{className:"text-success",key:e.generateKey(t,a)},e.renderCell(t,a))}))):r.a.createElement("tr",{key:t.id},n.map((function(a){return r.a.createElement("td",{className:"text-danger",key:e.generateKey(t,a)},e.renderCell(t,a))}))):t[l]>=parseInt(c[i])?r.a.createElement("tr",{key:t.date},n.map((function(a){return r.a.createElement("td",{className:"text-success",key:e.generateKey(t,a)},e.renderCell(t,a))}))):r.a.createElement("tr",{key:t.id},n.map((function(a){return r.a.createElement("td",{className:"text-danger",key:e.generateKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(n.Component),A=function(e){var t=e.columns,a=(e.label,e.data),n=e.name,i=e.dimension;return r.a.createElement("div",{className:"mt-2"},r.a.createElement("table",{className:"table mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("th",{key:e.path||e.key},e.label)})))),r.a.createElement(w,{columns:t,data:a,name:n,dimension:i})))},D=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e.columns=[{path:"date",label:"Date"},{path:"weight",label:"Weight"},{path:"meal",label:"Meals"},{path:"activity",label:"Activities"}],e.renderCell=function(e,t){return t.content?t.content(e):N.a.get(e,t.path)},e.generateKey=function(e,t){return e.id+(t.path||t.key)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=k("meal"),t=k("activity"),a=k("weight"),n=[];e?e.map((function(e){return n.push(e.date)})):e=[],t?t.map((function(e){return n.push(e.date)})):t=[],a?a.map((function(e){return n.push(e.date)})):a=[];var r=[].concat(Object(C.a)(e),Object(C.a)(t),Object(C.a)(a)),i=[];(n=n.filter((function(e,t){return n.indexOf(e)===t}))).forEach((function(e){i.push({date:e})})),i.forEach((function(n){for(var r=0;r<a.length;r++)a[r].date===n.date&&(n.weight=a[r].weight);for(r=0;r<e.length;r++){n.allMeal=new Array;for(r=0;r<e.length;r++)e[r].date===n.date&&n.allMeal.push(e[r].mealCalories);n.allMealCalories=n.allMeal.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0),0===n.allMealCalories&&(n.allMealCalories=null)}for(r=0;r<t.length;r++){n.totalActivity=new Array,n.totalDistance=new Array;for(r=0;r<t.length;r++)t[r].date===n.date&&(n.totalDistance.push(t[r].distance),n.totalActivity.push(t[r].activityCalories));n.totalActivityCalories=n.totalActivity.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0),n.totalDistance=n.totalDistance.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0),0===n.totalDistance&&(n.totalActivityCalories=null)}})),console.log(i);var l=k("user");this.setState({data:r,dates:n,result:i,user:l})}},{key:"render",value:function(){var e=this.columns,t=this.state,a=(t.data,t.dates,t.result),n=t.user;return r.a.createElement("div",{className:"mt-5"},r.a.createElement("h1",{className:"text-center"},"Dashboard"),r.a.createElement("div",{className:"mt-5"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.map((function(e){return r.a.createElement("th",{scope:"col",key:e.path},e.label)})))),r.a.createElement("tbody",null,a&&a.map((function(e){return r.a.createElement("tr",{key:e.date,scope:"row"},r.a.createElement("th",null,e.date),n&&e.weight&&n.desiredWeight>=parseInt(e.weight.slice(0,-2))?r.a.createElement("td",{className:"text-success"},e.weight):r.a.createElement("td",{className:"text-danger"},e.weight),n&&n.desiredMealCalories>=e.mealCalories?r.a.createElement("td",{className:"text-success"},e.allMealCalories):r.a.createElement("td",{className:"text-danger"},e.allMealCalories),n&&n.desiredActivityCalories<=e.totalActivityCalories?r.a.createElement("td",{className:"text-success"},e.totalActivityCalories):r.a.createElement("td",{className:"text-danger"},e.totalActivityCalories))}))))))}}]),a}(n.Component),S=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center mt-5"},"Page Not Found..."))},M=a(6),I=function(){var e=k("user");return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(M.c,{className:"nav-item nav-link active",to:"/dashboard"},"Dashboard",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(M.c,{className:"nav-item nav-link",to:"/weight"},"Weight"),r.a.createElement(M.c,{className:"nav-item nav-link",to:"/meal"},"Meal"),r.a.createElement(M.c,{className:"nav-item nav-link",to:"/activity"},"Activity"),!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{className:"nav-item nav-link",to:"/login"},"Login"),r.a.createElement(M.c,{className:"nav-item nav-link",to:"/register"},"Register")),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{className:"nav-item nav-link",to:"/profile"},e.name),r.a.createElement(M.c,{className:"nav-item nav-link",to:"/logout"},"Logout")))))},x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.clear(),window.location="/Omedia-Health"}},{key:"render",value:function(){return null}}]),a}(n.Component),T=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.doSubmit=function(){console.log("Login Failed")},e.schema={email:g.a.string().email().required().label("Email"),password:g.a.string().required().label("Password")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center mt-5 mb-5"},"Login Form"),this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderButton("Submit"))}}]),a}(E),W=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{}},e}return Object(s.a)(a,[{key:"renderDetail",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=k("user");return r.a.createElement("p",{className:"ml-5"},t,": ",n[e]," ",a)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"m-5"},"Profile"),this.renderDetail("name","Name"),this.renderDetail("email","Email"),this.renderDetail("desiredWeight","Desired Weight","Kg"),this.renderDetail("desiredMealCalories","Desired Meal Calories"),this.renderDetail("desiredActivityCalories","Desired Activity Calories"),r.a.createElement(M.c,{className:"btn btn-primary ml-5 m-2",to:"/profile/edit"},"Edit Profile"),r.a.createElement(M.c,{className:"btn btn-danger btn-logout m-2",to:"/logout"},"Logout"))}}]),a}(n.Component),q=function(){return Math.random().toString(36).substr(2,9)},F=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{id:0,date:{},weight:""},errors:{}},e.schema={id:g.a.any(),date:g.a.date().required().label("Date"),weight:g.a.number().required().label("Weight")},e.doSubmit=function(){var t=localStorage.getItem("weight");t=t?JSON.parse(t):[],e.state.data.weight=e.state.data.weight+" Kg";var a=e.props.match.params.id;if(console.log(a,e.state.data.weight),console.log(),"add"==a)e.state.data.id=t.length,t.push(e.state.data),e.state.data.id=q(),console.log(e.state.data.id),localStorage.setItem("weight",JSON.stringify(t)),e.props.history.push("/weight");else{for(var n=0;n<t.length;n++)if(a===t[n].id){t[n]=e.state.data;break}localStorage.setItem("weight",JSON.stringify(t)),e.props.history.push("/weight")}},e}return Object(s.a)(a,[{key:"populateWeight",value:function(){try{var e=this.props.match.params.id;if("new"===e)return;var t=localStorage.getItem("weight");for(var a in t=t?JSON.parse(t):[])e===t[a].id&&this.setState({data:this.mapToViewModel(t[a])})}catch(n){this.props.history.replace("/not-found")}}},{key:"componentDidMount",value:function(){this.populateWeight()}},{key:"mapToViewModel",value:function(e){var t=e.weight.slice(0,-2);return{id:e.id,date:e.date,weight:parseFloat(t)}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mt-5"},"Add Weight"),this.renderInput("date","Enter Date:","date"),this.renderInput("weight","Weight:","number"),this.renderButton("Submit"))}}]),a}(E),Y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).columns=[{path:"date",label:"Date (YYYY-MM-DD)"},{path:"weight",label:"Weight"}],e.editColumn={key:"edit",content:function(t){return r.a.createElement("button",{onClick:function(){return e.handleEdit(t)},className:"btn btn-primary btn-sm btn-edit"},"Edit")}},e.handleEdit=function(t){e.props.handleEdit(t)},k("user")&&e.columns.push(e.editColumn),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{columns:this.columns,data:e,name:"desiredWeight",dimension:"weight"}))}}]),a}(n.Component),J=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.doEdit=function(t){e.props.history.push("/weight/".concat(t.id))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=k("weight");this.setState({data:e})}},{key:"render",value:function(){var e=k("user"),t=this.state.data;return r.a.createElement("div",{className:"col"},e&&r.a.createElement(M.c,{className:"btn btn-primary mt-5",to:"/weight/add"},"Add Weight"),r.a.createElement(Y,{data:t,handleEdit:this.doEdit}))}}]),a}(n.Component),P=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.doSubmit=function(){localStorage.setItem("user",JSON.stringify(e.state.data)),e.props.history.push("/profile")},e.schema={name:g.a.string().required().label("Name"),email:g.a.string().required().email().label("Email"),desiredWeight:g.a.number().required().label("Desired Weight"),desiredMealCalories:g.a.number().required().label("Desired Meal Calories"),desiredActivityCalories:g.a.number().required().label("Desired Activity Calories"),password:g.a.string()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=k("user");this.setState({data:e})}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-left mt-5"},"Edit Profile"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("name","Name",void 0,e.name),this.renderInput("email","Email",void 0,e.email),this.renderInput("desiredWeight","Desired Weight","number",e.desiredWeight),this.renderInput("desiredMealCalories","Desired Meal Calories","number",e.desiredMealCalories),this.renderInput("desiredActivityCalories","Desired Activity Calories","number",e.desiredActivityCalories),this.renderButton("Submit Changes")))}}]),a}(E),K=function(e){e.path;var t=e.component,a=e.render,n=Object(v.a)(e,["path","component","render"]),i=k("user");return r.a.createElement(u.b,Object.assign({},n,{render:function(e){return i?t?r.a.createElement(t,e):a(e):r.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},B=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{id:0},errors:{}},e.schema={id:g.a.any(),name:g.a.string().required(),date:g.a.date().required(),mealCalories:g.a.number().required()},e.doSubmit=function(){var t=localStorage.getItem("meal");t=t?JSON.parse(t):[];var a=e.props.match.params.id;if(console.log(a),"add"===a)t.push(e.state.data),e.state.data.id=q(),localStorage.setItem("meal",JSON.stringify(t)),e.props.history.push("/meal");else{for(var n=0;n<t.length;n++)if(t[n].id===a){t[n]=e.state.data;break}localStorage.setItem("meal",JSON.stringify(t)),e.props.history.push("/meal")}},e}return Object(s.a)(a,[{key:"populateMeal",value:function(){try{var e=this.props.match.params.id;if("add"===e)return;var t=localStorage.getItem("meal");for(var a in t=t?JSON.parse(t):[])e===t[a].id&&this.setState({data:this.mapToViewModel(t[a])})}catch(n){this.props.history.replace("/not-found")}}},{key:"componentDidMount",value:function(){this.populateMeal()}},{key:"mapToViewModel",value:function(e){return{id:e.id,name:e.name,date:e.date,mealCalories:e.mealCalories}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mt-5"},"Add Meal"),this.renderInput("name","Name:","text"),this.renderInput("date","Enter Date:","date"),this.renderInput("mealCalories","Calories:","number"),this.renderButton("Submit"))}}]),a}(E),H=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).columns=[{path:"date",label:"Date (YYYY-MM-DD)",content:function(e){return r.a.createElement(M.b,{to:"/meal/details/".concat(e.date)},e.date)}},{path:"allMealCalories",label:"Calories"}],e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{columns:this.columns,data:e,name:"desiredMealCalories",dimension:"allMealCalories"}))}}]),a}(n.Component),R=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.doEdit=function(t){e.props.history.push("/meal/".concat(t.id))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=k("meal"),t=[],a=[];e?e.map((function(e){return t.push(e.date)})):e=[],(t=t.filter((function(e,a){return t.indexOf(e)===a}))).forEach((function(e){a.push({date:e})})),a.forEach((function(t){t.allMeal=new Array;for(var a=0;a<e.length;a++)e[a].date===t.date&&t.allMeal.push(e[a].mealCalories);t.allMealCalories=t.allMeal.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0)})),this.setState({data:a})}},{key:"render",value:function(){var e=k("user"),t=this.state.data;return r.a.createElement("div",{className:"col"},e&&r.a.createElement(M.c,{className:"btn btn-primary mt-5",to:"meal/add"},"Add Meal"),r.a.createElement(H,{data:t,handleEdit:this.doEdit}))}}]),a}(n.Component),V=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{id:0},errors:{}},e.schema={id:g.a.any(),distance:g.a.number().required().label("Distance"),date:g.a.date().required().label("Date"),activityType:g.a.string().required().label("Activity Type")},e.activityTypes=[{name:"Running",id:0},{name:"Swimming",id:1},{name:"Hiking",id:2}],e.doSubmit=function(){var t=localStorage.getItem("activity");t=t?JSON.parse(t):[],e.state.data.distance=e.state.data.distance+" Km";var a=e.props.match.params.id;if("add"===a){e.state.data.id=q();var n=parseInt(e.state.data.distance.slice(0,-2));t.push(e.state.data),"Running"===e.state.data?e.state.data.activityCalories=140*n:"Hiking"===e.state.data?e.state.data.activityCalories=40*n:e.state.data.activityCalories=300*n,localStorage.setItem("activity",JSON.stringify(t)),e.props.history.push("/activity")}else{for(var r=0;r<t.length;r++)if(t[r].id===a){t[r]=e.state.data;break}var i=parseInt(e.state.data.distance.slice(0,-2));"Running"===e.state.data.activityType?e.state.data.activityCalories=140*i:"Hiking"===e.state.data.activityType?e.state.data.activityCalories=40*i:e.state.data.activityCalories=300*i,localStorage.setItem("activity",JSON.stringify(t)),e.props.history.push("/activity")}},e}return Object(s.a)(a,[{key:"populateActivity",value:function(){try{var e=this.props.match.params.id;if("add"===e)return;var t=localStorage.getItem("activity");for(var a in t=t?JSON.parse(t):[])e===t[a].id&&this.setState({data:this.mapToViewModel(t[a])})}catch(n){this.props.history.push("/not-found")}}},{key:"componentDidMount",value:function(){this.populateActivity()}},{key:"mapToViewModel",value:function(e){var t=parseInt(e.distance.slice(0,-2));return{id:e.id,distance:t,activityType:e.activityType,date:e.date}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mt-5"},"Add Activity"),this.renderInput("distance","Distance:","number"),this.renderSelect("activityType","Activity Type:",this.activityTypes),this.renderInput("date","Enter Date:","date"),this.renderButton("Submit"))}}]),a}(E),L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).columns=[{path:"date",label:"Date (YYYY-MM-DD)",content:function(e){return r.a.createElement(M.b,{to:"/activity/details/".concat(e.date)},e.date)}},{path:"totalDistance",label:"Distance"},{path:"totalActivityCalories",label:"Burned Calories"}],e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{columns:this.columns,data:e,name:"desiredActivityCalories",dimension:"totalActivityCalories"}))}}]),a}(n.Component),z=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=k("activity"),t=[],a=[];e?e.map((function(e){return t.push(e.date)})):e=[],(t=t.filter((function(e,a){return t.indexOf(e)===a}))).forEach((function(e){a.push({date:e})})),a.forEach((function(t){t.totalActivity=new Array,t.totalDistance=new Array;for(var a=0;a<e.length;a++)e[a].date===t.date&&(t.totalDistance.push(e[a].distance),t.totalActivity.push(e[a].activityCalories));t.totalActivityCalories=t.totalActivity.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0),t.totalDistance=t.totalDistance.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0)})),this.setState({data:a})}},{key:"render",value:function(){var e=k("user"),t=this.state.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},e&&r.a.createElement(M.c,{className:"btn btn-primary mt-5",to:"activity/add"},"Add Activity"),r.a.createElement(L,{data:t,handleEdit:this.doEdit})))}}]),a}(n.Component),G=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={date:{}},e.columns=[{path:"name",label:"Name"},{path:"date",label:"Date (YYYY-MM-DD)"},{path:"mealCalories",label:"Calories"}],e.editColumn={key:"edit",content:function(t){return r.a.createElement("button",{onClick:function(){return e.handleEdit(t)},className:"btn btn-primary btn-sm btn-edit"},"Edit")}},e.handleEdit=function(t){e.props.history.push("/meal/".concat(t.id))},k("user")&&e.columns.push(e.editColumn),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=k("meal"),t=this.props.match.params.date;e=e?e.filter((function(e){return e.date==t})):[],this.setState({data:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{columns:this.columns,data:this.state.data,name:"desiredMealCalories",dimension:"mealCalories"}))}}]),a}(n.Component),Q=function(e){var t=e.items,a=e.textProperty,n=e.valueProperty,i=e.onItemSelect,l=e.selectedItem;return r.a.createElement("ul",{className:"class-group"},t.map((function(e){return r.a.createElement("li",{onClick:function(){return i(e)},key:e[n],className:e===l?"list-group-item active":"list-group-item"},e[a])})))};Q.defaultProps={textProperty:"name",valueProperty:"id"};var U=Q,X=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={data:[],activityTypes:[],selectedActivity:null},e.columns=[{path:"activityType",label:"Type"},{path:"date",label:"Date (YYYY-MM-DD)"},{path:"distance",label:"Distance"},{path:"activityCalories",label:"Burned Calories"}],e.editColumn={key:"edit",content:function(t){return r.a.createElement("button",{onClick:function(){return e.handleEdit(t)},className:"btn btn-primary btn-sm btn-edit"},"Edit")}},e.handleEdit=function(t){e.props.history.push("/activity/".concat(t.id))},e.handleActivitySelect=function(t){e.setState({selectedActivity:t})},e.getPageData=function(){var t=e.state,a=t.data,n=t.selectedActivity,r=a;return n&&n.id&&a&&(r=a.filter((function(e){return e.activityType===n.name})),console.log(r)),{data:r}},k("user")&&e.columns.push(e.editColumn),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=k("activity"),t=this.props.match.params.date;e?e.filter((function(e){return e.date==t})):e=[],this.setState({activityTypes:[{name:"All item",id:0},{name:"Running",id:1},{name:"Swimming",id:2},{name:"Hiking",id:3}],data:e})}},{key:"render",value:function(){var e=this.getPageData().data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 mt-5"},r.a.createElement(U,{items:this.state.activityTypes,selectedItem:this.state.selectedActivity,onItemSelect:this.handleActivitySelect})),r.a.createElement("div",{className:"col mt-4"},r.a.createElement(A,{columns:this.columns,data:e,name:"desiredActivityCalories",dimension:"activityCalories"})))}}]),a}(n.Component),Z=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement("div",{className:"container"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/register",component:O}),r.a.createElement(u.b,{path:"/login",component:T}),r.a.createElement(u.b,{path:"/dashboard",component:D}),r.a.createElement(K,{path:"/profile/edit",component:P}),r.a.createElement(u.b,{path:"/profile",component:W}),r.a.createElement(K,{path:"/weight/:id",component:F}),r.a.createElement(u.b,{path:"/weight",component:J}),r.a.createElement(K,{path:"/meal/details/:date",component:G}),r.a.createElement(K,{path:"/meal/:id",component:B}),r.a.createElement(u.b,{path:"/meal",component:R}),r.a.createElement(K,{path:"/activity/details/:date",component:X}),r.a.createElement(K,{path:"/activity/:id",component:V}),r.a.createElement(u.b,{path:"/activity",component:z}),r.a.createElement(u.b,{path:"/not-found",component:S}),r.a.createElement(u.b,{path:"/logout",component:x}),r.a.createElement(u.a,{from:"/",exact:!0,to:"/dashboard"}),r.a.createElement(u.a,{from:"/Omedia-Health",exact:!0,to:"dashboard"}),r.a.createElement(u.a,{to:"/not-found"}))))}}]),a}(n.Component);l.a.render(r.a.createElement(M.a,null,r.a.createElement(Z,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2875c3ff.chunk.js.map