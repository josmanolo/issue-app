(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(7),o=n.n(l),i=(n(16),n(1)),c=n(2),r=n(4),u=n(3),h=n(5),m=n(8),d=n.n(m),p=function(){return s.a.createElement("header",null,s.a.createElement("img",{src:d.a}),s.a.createElement("h1",null,"Issue Report"))},f=n(9),b=function(e){var t=e.handleClose,n=e.show,a=e.children,l=n?"modal display-block":"modal display-none";return s.a.createElement("div",{className:l},s.a.createElement("section",{className:"modal-main"},a,s.a.createElement("button",{onClick:t},"Accept")))},E=function(){return s.a.createElement("p",{className:"txtI"},"Fill out the form to report the issue")},g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).stateModal={show:!1},e.showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(f.a)({},a,s))},e.handleClick=function(){e.showModal();var t={title:e.state.title,body:e.state.issue};fetch("https://api.github.com/repos/josmanolo/issues-list/issues",{headers:{"Content-Type":"application/vnd.github.v3+json",Authorization:"token bf9d7a82b53f56127ee1466777fc9824e84b4897"},method:"POST",body:JSON.stringify(t)}).then(function(e){console.log(e)})},e.state={title:"",issue:""},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"sectionForm"},s.a.createElement(E,null),s.a.createElement("a",{className:"link",href:"https://github.com/josmanolo/issues-list"},"https://github.com/josmanolo/issues-list"),s.a.createElement("form",null,s.a.createElement("input",{placeholder:"Title",type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),s.a.createElement("input",{placeholder:"Issue",type:"text",name:"issue",value:this.state.issue,onChange:this.handleChange}),s.a.createElement("a",{onClick:this.handleClick},"Send")),s.a.createElement(b,{show:this.state.show,handleClose:this.hideModal},s.a.createElement("p",null,"Your Issue has been published!")))}}]),t}(a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"main"},s.a.createElement(p,null),s.a.createElement(g,null))}}]),t}(a.Component);o.a.render(s.a.createElement(j,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n.p+"static/media/issue.f8567058.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.637d5a33.chunk.js.map