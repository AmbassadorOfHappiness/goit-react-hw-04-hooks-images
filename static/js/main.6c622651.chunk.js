(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__3ToBT",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__2RD_S"}},13:function(e,t,a){e.exports={Overlay:"modal_Overlay___MqWU",Modal:"modal_Modal__5Qlxq"}},24:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__8czvK"}},25:function(e,t,a){e.exports={Button:"button_Button__8uHry"}},27:function(e,t,a){e.exports={Container:"App_Container__12IM3"}},5:function(e,t,a){e.exports={Searchbar:"searchbar_Searchbar__1BSm8",SearchForm:"searchbar_SearchForm__dtMWX",SearchFormButton:"searchbar_SearchFormButton__2BC7u",SearchFormButtonLabel:"searchbar_SearchFormButtonLabel__2UIc2",SearchFormInput:"searchbar_SearchFormInput__1Ur4S"}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=a(14),s=a(4),u=a(11),l=a.n(u);l.a.defaults.baseURL="https://pixabay.com/api/";var m=a(5),b=a.n(m),h=a(1);function j(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(h.jsx)("header",{className:b.a.Searchbar,children:Object(h.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),o("")},children:[Object(h.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(h.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(h.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){var t=e.currentTarget.value.toLowerCase().trim();o(t)}})]})})}var d=a(24),f=a.n(d),O=function(e){var t=e.children;return Object(h.jsx)("ul",{className:f.a.ImageGallery,children:t})},g=a(12),p=a.n(g),_=function(e){var t=e.srcWebformat,a=e.onClick;return Object(h.jsx)("li",{className:p.a.ImageGalleryItem,onClick:a,children:Object(h.jsx)("img",{src:t,alt:"",className:p.a.ImageGalleryItemImage})})},S=a(25),v=a.n(S),x=function(e){var t=e.onClick;return Object(h.jsx)("button",{type:"button",onClick:t,className:v.a.Button,children:"Load more"})},y=a(13),I=a.n(y);function w(e){var t=e.children,a=e.onClose,r=function(e){"Escape"===e.code&&a()};return Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}})),Object(h.jsx)("div",{className:I.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(h.jsx)("div",{className:I.a.Modal,children:t})})}var C=a(26),F=a.n(C),k=function(){return Object(h.jsx)(F.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})},B=a(27),G=a.n(B);function N(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),u=o[0],m=o[1],b=Object(n.useState)(1),d=Object(s.a)(b,2),f=d[0],g=d[1],p=Object(n.useState)(!1),S=Object(s.a)(p,2),v=S[0],y=S[1],I=Object(n.useState)(null),C=Object(s.a)(I,2),F=C[0],B=C[1],N=Object(n.useState)(""),L=Object(s.a)(N,2),E=L[0],M=L[1],T=Object(n.useState)(!1),U=Object(s.a)(T,2),R=U[0],W=U[1];Object(n.useEffect)((function(){u&&q()}),[u]),Object(n.useEffect)((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[a]);var q=function(){var e={searchQuery:u,currentPage:f};y(!0),function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,c=e.pageSize,o=void 0===c?12:c;return l.a.get("/?key=".concat("23200970-d5201fb8f8a34679c1c031ab0","&q=").concat(a,"&page=").concat(r,"&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))}(e).then((function(e){return r([].concat(Object(i.a)(a),Object(i.a)(e)))}),g(f+1)).catch((function(e){return B(e)})).finally((function(){return y(!1)}))},z=function(){W((function(e){return!e}))},D=a.length>0&&!v;return Object(h.jsxs)("div",{className:G.a.Container,children:[Object(h.jsx)(j,{onSubmit:function(e){m(e),r([]),g(1),B(null)}}),F&&Object(h.jsx)("p",{children:"Sorry! Something went wrong. Try again, please!"}),Object(h.jsx)(O,{children:a.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return Object(h.jsx)(_,{srcWebformat:a,pictureId:t,onClick:function(){return M(n),void z()}},t)}))}),v&&Object(h.jsx)(k,{}),D&&Object(h.jsx)(x,{onClick:q,length:a.length}),R&&Object(h.jsx)(w,{onClose:z,children:Object(h.jsx)("img",{src:E,alt:""})})]})}a(71);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.6c622651.chunk.js.map