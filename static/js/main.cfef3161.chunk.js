(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{20:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(3),o=n.n(c),s=n(7),i=n.n(s);n(20),n(6);var r=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Troll Face",width:"150"}),Object(a.jsx)("p",{children:"Meme Generator"})]})},m=n(8),l=n(9),d=n(10),h=n(4),u=n(14),j=n(13),b=n(12),g=n(11),p=n.n(g),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImages:[]},e.changeHandler=e.changeHandler.bind(Object(h.a)(e)),e.submitHandler=e.submitHandler.bind(Object(h.a)(e)),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImages:n})}))}},{key:"changeHandler",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(m.a)({},n,a))}},{key:"submitHandler",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImages.length),n=this.state.allMemeImages[t].url;this.setState({randomImage:n})}},{key:"downloadMeme",value:function(){b.a(document.getElementById("memeImg")).then((function(e){p.a.saveAs(e,"memeImg.png")}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"meme-form",onSubmit:this.submitHandler,children:[Object(a.jsx)("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.changeHandler}),Object(a.jsx)("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.changeHandler}),Object(a.jsx)("button",{children:"Generate"})]}),Object(a.jsx)("div",{id:"downloadSection",children:Object(a.jsx)("button",{id:"btnDownloadMeme",onClick:this.downloadMeme,children:"Download Meme"})}),Object(a.jsxs)("div",{className:"meme",id:"memeImg",children:[Object(a.jsx)("img",{src:this.state.randomImage,alt:""}),Object(a.jsx)("h2",{className:"top",children:this.state.topText}),Object(a.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(o.a.Component);n(24);var f=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(r,{}),Object(a.jsx)(x,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),O()},6:function(e,t,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.cfef3161.chunk.js.map