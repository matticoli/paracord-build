(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a(279)},111:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(67),o=a.n(i),s=(a(111),a(40)),r=a(41),c=a(43),u=a(42),d=a(44),h=(a(68),a(103)),p=a.n(h),g=(a(217),a(16)),m=a.n(g),f=(a(266),a(268),a(104)),b=a.n(f),y={initialize:function(e){this.app=m.a.initializeApp({apiKey:"AIzaSyA2qBQFBKatLl9z8wFwR4RnuDX2_QnG2Sk",authDomain:"paracord-engine.firebaseapp.com",databaseURL:"https://paracord-engine.firebaseio.com",projectId:"paracord-engine",storageBucket:"paracord-engine.appspot.com",messagingSenderId:"512623900874"}),y.db=m.a.firestore(this.app),y.auth=m.a.auth(),y.base=b.a.createClass(y.db),y.auth.onAuthStateChanged(function(t){e(t||null)})},showAuthPopup:function(){var e=new m.a.auth.GoogleAuthProvider;this.auth.signInWithPopup(e).then(function(e){this.user=e.user,console.log(this.user)}).catch(function(e){})}},k=y,v=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={pageData:a.props.pageData};return a.modules={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image"],["clean"]]},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"updatePage",value:function(e,t,a,n){this.editor||(this.editor=n);var l=n.getContents();console.log(l),this.state.pageData.ref.set({deltas:JSON.stringify(l)},{merge:!0})}},{key:"handleDelete",value:function(){window.confirm("Are you sure you want to delete this page?\nYou can't undo this!")&&this.state.pageData.ref.delete()}},{key:"handleColorChange",value:function(e){this.state.pageData.ref.set({color:e.target.value},{merge:!0})}},{key:"handleTitleChange",value:function(e){this.state.pageData.ref.set({title:e.target.value},{merge:!0})}},{key:"componentWillMount",value:function(){k.app&&this.state.pageData.ref.onSnapshot(function(e){console.log(e.data()),this.editor}.bind(this))}},{key:"render",value:function(){var e=this.props.pageData&&this.props.pageData.ref.path||"";return e=e.substr(e.lastIndexOf("/")+1),l.a.createElement("div",null,l.a.createElement("div",{className:"EditToolbar"},l.a.createElement("button",{onClick:this.props.returnFunc},"Back"),l.a.createElement("button",{style:{backgroundColor:"red"},onClick:this.handleDelete.bind(this)},"Delete"),l.a.createElement("label",null,"Page Title: "),l.a.createElement("input",{className:"EditBarInput",type:"text",defaultValue:this.state.pageData.title||"white",onChange:this.handleTitleChange.bind(this)}),l.a.createElement("label",null,"Tile Color: "),l.a.createElement("input",{className:"EditBarInput",type:"text",defaultValue:this.state.pageData.color||"white",onChange:this.handleColorChange.bind(this)}),l.a.createElement("label",null,"Page ID (For Linking): "),l.a.createElement("input",{className:"EditBarInput",readOnly:"true",type:"text",value:e})),l.a.createElement(p.a,{className:"ReactQuill",modules:this.modules,defaultValue:JSON.parse(this.state.pageData.deltas)||"",onChange:this.updatePage.bind(this)}))}}]),t}(n.Component),E=a(105),w=a.n(E),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:null,stories:[],selectedStory:null,selectedPage:null},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleLoginClicked",value:function(){k.showAuthPopup()}},{key:"handleLogoutClicked",value:function(){window.confirm("Sign out?")&&(k.auth.signOut(),window.location.reload(!0))}},{key:"handleUserAuth",value:function(e){this.setState({user:e}),e&&k.base.bindCollection("Stories",{context:this,state:"stories",withRefs:!0})}},{key:"handleStorySelected",value:function(e){this.state.selectedStory,this.setState({selectedStory:e}),e&&k.base.bindCollection(e.ref.collection("Pages"),{context:this,state:"pages",withRefs:!0})}},{key:"handleTileDragStart",value:function(e){e.dataTransfer.setDragImage(new Image(0,0),0,0)}},{key:"handleTileDrag",value:function(e,t){var a=this.state.pages;0===e.pageX&&0===e.pageY||(a[this.state.pages.indexOf(t)].x=e.pageX,a[this.state.pages.indexOf(t)].y=e.pageY-200,this.setState({pages:a}))}},{key:"handleTileRelease",value:function(e,t){t.ref.set({x:e.pageX<0?0:e.pageX,y:e.pageY-200<0?0:e.pageY-200},{merge:!0})}},{key:"handlePageSelect",value:function(e){this.setState({selectedPage:e})}},{key:"addTile",value:function(){this.state.selectedStory.ref.collection("Pages").add({title:window.prompt("Enter Page Title:")||"New Page",x:300,y:300,deltas:"{}",editing:null})}},{key:"addStory",value:function(){var e={};e[this.state.user.uid]="rwa",k.db.collection("Stories").add({title:window.prompt("Enter story name:")||"My Story",description:window.prompt("Enter story description:"),public:!1,users:e})}},{key:"componentWillMount",value:function(){k.app||k.initialize(this.handleUserAuth.bind(this)),console.log("Will bind..")}},{key:"render",value:function(){var e=this,t=this.state.user?l.a.createElement("div",null,l.a.createElement("img",{className:"authUI",onClick:this.handleLogoutClicked,src:this.state.user.photoURL})):l.a.createElement("div",null,l.a.createElement("button",{className:"authUI",onClick:this.handleLoginClicked.bind(this)},"Login")),a=null!==this.state.selectedStory?l.a.createElement("div",null):l.a.createElement("div",null,this.state.stories.map(function(t){return l.a.createElement("div",{className:"storyListItem",key:t.ref.path,onClick:function(){e.handleStorySelected(t)}},l.a.createElement("h5",null,t.title),l.a.createElement("p",null,t.description))}),l.a.createElement("button",{className:"AddTileButton",onClick:function(){e.addStory()}},"+")),n=this.state.selectedStory&&this.state.pages&&l.a.createElement("div",{className:"pageTileContainer"},this.state.pages.map(function(t){var a={position:"absolute",width:"100px",height:"100px",padding:"5px",top:"calc(10vh + "+t.y+"px)",left:t.x+"px",backgroundColor:t.color||"white",overflow:"hidden",zIndex:10};return console.log(t.ref.path),l.a.createElement("div",{key:t.ref.path,className:t.ref.path.substring(t.ref.path.lastIndexOf("/")+1),draggable:"true",onDrag:function(a){e.handleTileDrag(a,t)},onDragStart:function(t){e.handleTileDragStart(t)},onDragEnd:function(a){e.handleTileRelease(a,t)},onClick:function(){e.handlePageSelect(t)},style:a},l.a.createElement("h5",null,t.title),l.a.createElement("p",null,t.ref.path.substring(t.ref.path.lastIndexOf("/")+1)))}),l.a.createElement(w.a,{from:"IrKYmclgh80Hpf42rWQk",to:"rTO5188xnem2HaxKoqbr"}),l.a.createElement("button",{className:"AddTileButton",onClick:function(){e.addTile()}},"+")),i=this.state.selectedPage?l.a.createElement(v,{pageData:this.state.selectedPage,returnFunc:function(){return e.handlePageSelect(null)}}):void 0;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h5",null,l.a.createElement("button",{className:"BackButton",hidden:null===this.state.selectedStory,onClick:function(){e.handleStorySelected(null),e.handlePageSelect(null)}}," ","<<"),"Paracord ",l.a.createElement("span",null,l.a.createElement("i",null,"[beta]"))),t),l.a.createElement("div",{className:"App-content"},i||n||a))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){}},[[106,2,1]]]);
//# sourceMappingURL=main.49c26f9b.chunk.js.map