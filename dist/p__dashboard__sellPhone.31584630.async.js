(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[868],{23230:function(W){W.exports={chartCard:"chartCard___3TM4T",chartTop:"chartTop___3iur-",chartTopMargin:"chartTopMargin___24rCR",chartTopHasMargin:"chartTopHasMargin___3AQNY",metaWrap:"metaWrap___3Nuv1",avatar:"avatar___FoC4K",meta:"meta___1_3lt",action:"action___3uuUN",total:"total___D6PP7",content:"content___yyFJS",contentFixed:"contentFixed___3tZUw",footer:"footer___2Huhb",footerMargin:"footerMargin___38Y2F"}},16829:function(W){W.exports={field:"field___2ZfpN",label:"label___1hOvq",number:"number___2qklC"}},74450:function(W){W.exports={trendItem:"trendItem___2dudO",up:"up___1wFiw",down:"down___2tA2-",trendItemGrey:"trendItemGrey___1ksIM",reverseColor:"reverseColor___1BPCV"}},93356:function(W,R,e){"use strict";e.d(R,{eW:function(){return n},X6:function(){return v},mO:function(){return $},mj:function(){return m},Kz:function(){return U},qp:function(){return D}});var K=e(92077),d=e.n(K),E=e(11849),A=e(32059),G=e(93224),s=e(28991),o=e(67294),O={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},name:"caret-up",theme:"outlined"},x=O,Z=e(27029),f=function(a,t){return o.createElement(Z.Z,(0,s.Z)((0,s.Z)({},a),{},{ref:t,icon:x}))};f.displayName="CaretUpOutlined";var u=o.forwardRef(f),H={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},P=H,y=function(a,t){return o.createElement(Z.Z,(0,s.Z)((0,s.Z)({},a),{},{ref:t,icon:P}))};y.displayName="CaretDownOutlined";var c=o.forwardRef(y),j=e(94184),z=e.n(j),I=e(74450),F=e.n(I),i=e(85893),Q=function(a){var t,r=a.colorful,h=r===void 0?!0:r,p=a.reverseColor,g=p===void 0?!1:p,l=a.flag,N=a.children,M=a.className,b=(0,G.Z)(a,["colorful","reverseColor","flag","children","className"]),J=z()(F().trendItem,(t={},(0,A.Z)(t,F().trendItemGrey,!h),(0,A.Z)(t,F().reverseColor,g&&h),t),M),L={color:"green",fontSize:17},B={color:"red",fontSize:17};return(0,i.jsxs)("div",(0,E.Z)((0,E.Z)({},b),{},{className:J,title:typeof N=="string"?N:"",children:[(0,i.jsx)("span",{children:N}),l&&(0,i.jsx)("span",{style:l==="up"?L:B,children:l==="up"?(0,i.jsx)(u,{}):(0,i.jsx)(c,{})})]}))},C=Q,X=e(30381),S=e.n(X),n=function(a){var t=a.current,r=a.prev,h=t>r||r===null?"up":"down",p=t>r?"+".concat(d()((t-r)/r*100).format("0,0.00"),"%"):"".concat(d()((t-r)/r*100).format("0,0.00"),"%");return(0,i.jsx)(C,{flag:h,style:{marginRight:16},children:(0,i.jsx)("span",{style:{paddingRight:10},children:r!==null&&t!==null?p:"Empty previous or current value"})})},$=function(a){var t=a.current,r=a.prev,h=a._startTime,p=a._endTime,g=t>r?"+".concat(d()(t-r).format("0,0.00"),"\u20AC"):"".concat(d()(t-r).format("0,0.00"),"\u20AC"),l=t>r?"+".concat(d()((t-r)/r*100).format("0,0.00"),"%"):"".concat(d()((t-r)/r*100).format("0,0.00"),"%");return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:r!==null&&t!==null?l:"Empty previous or current value"}),(0,i.jsx)("div",{children:g}),(0,i.jsx)("div",{children:"".concat(S()(h).format("YYYY/MM/DD")," - ").concat(S()(p).format("YYYY/MM/DD"))})]})},m=function(a){var t=a.current,r=a.prev,h=a._startTime,p=a._endTime,g=t>r?"+".concat(d()(t-r).format("0,0")):"".concat(d()(t-r).format("0,0")),l=t>r?"+".concat(d()((t-r)/r*100).format("0,0.00"),"%"):"".concat(d()((t-r)/r*100).format("0,0.00"),"%");return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:l}),(0,i.jsx)("div",{children:g}),(0,i.jsx)("div",{children:"".concat(S()(h).format("YYYY/MM/DD")," - ").concat(S()(p).format("YYYY/MM/DD"))})]})},D=function(a){var t=a.seconds;t=Number(t);var r=Math.floor(t/(3600*24)),h=Math.floor(t%(3600*24)/3600),p=Math.floor(t%3600/60),g=Math.floor(t%60),l=r>0?r+"d":"",N=h>0?h+"h":"",M=p>0?p+"m":"",b=g>0?g+"s":"";return"".concat(l," ").concat(N," ").concat(M," ").concat(b)},U=function(a){var t=a.current,r=a.prev,h=a._startTime,p=a._endTime,g=t>r?t-r:r-t;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)(D,{seconds:g})}),(0,i.jsx)("div",{children:"".concat(S()(h).format("YYYY/MM/DD")," - ").concat(S()(p).format("YYYY/MM/DD"))})]})},v=function(a){var t=a.current,r=a.prev,h=t>r?"up":"down",p=t>r?t-r:r-t;return(0,i.jsx)(C,{flag:h,style:{marginRight:16},children:(0,i.jsx)("span",{children:(0,i.jsx)(D,{seconds:p})})})}},4937:function(W,R,e){"use strict";e.d(R,{H:function(){return E},l:function(){return A}});var K=e(30381),d=e.n(K),E=function(s){var o=s.store,O=d()(s.range[0]).format("YYYY-MM-DD HH:mm:ss"),x=d()(s.range[1]).format("YYYY-MM-DD HH:mm:ss");if(s.compare==="lastDuration"){var Z=d()(x).diff(O,"days"),f=d()(O,"YYYY-MM-DD HH:mm:ss").subtract(Z+1,"days").format("YYYY-MM-DD HH:mm:ss"),u=d()(f,"YYYY-MM-DD HH:mm:ss").add(Z,"days").format("YYYY-MM-DD 23:59:59");return{store:o,startTime:O,endTime:x,_startTime:f,_endTime:u}}if(s.compare==="lastYear"){var H=d()(O,"YYYY-MM-DD HH:mm:ss").subtract(1,"year"),P=d()(x,"YYYY-MM-DD HH:mm:ss").subtract(1,"year"),y=H.format("YYYY-MM-DD HH:mm:ss"),c=P.format("YYYY-MM-DD HH:mm:ss");return{store:o,startTime:O,endTime:x,_startTime:y,_endTime:c}}},A=function(s,o,O){var x=O===0?"":"\u20AC";if(o>0){var Z=O===0?s-o:(s-o).toFixed(2),f=Z/o*100;return{diff:Z>0?"+".concat(Z).concat(x):"".concat(Z).concat(x),percentage:f>0?"+".concat(f.toFixed(2),"%"):"".concat(f.toFixed(2),"%")}}else{var u=O===0?s:s.toFixed(2),H="\u221E";return{diff:u>0?"+".concat(u).concat(x):"".concat(u).concat(x),percentage:"no previous records"}}}},84186:function(W,R,e){"use strict";e.d(R,{th:function(){return F},c2:function(){return S}});var K=e(92077),d=e.n(K),E=e(11849),A=e(58024),G=e(39144),s=e(93224),o=e(32059),O=e(69610),x=e(54941),Z=e(81306),f=e(19809),u=e(67294),H=e(94184),P=e.n(H),y=e(23230),c=e.n(y),j=e(85893),z=function(m){if(!m&&m!==0)return null;var D;switch(typeof m){case"undefined":D=null;break;case"function":D=(0,j.jsx)("div",{className:c().total,children:m()});break;default:D=(0,j.jsx)("div",{className:c().total,children:m})}return D},I=function($){(0,Z.Z)(D,$);var m=(0,f.Z)(D);function D(){var U;(0,O.Z)(this,D);for(var v=arguments.length,T=new Array(v),a=0;a<v;a++)T[a]=arguments[a];return U=m.call.apply(m,[this].concat(T)),U.renderContent=function(){var t=U.props,r=t.contentHeight,h=t.title,p=t.avatar,g=t.action,l=t.total,N=t.footer,M=t.children,b=t.loading;return b?!1:(0,j.jsxs)("div",{className:c().chartCard,children:[(0,j.jsxs)("div",{className:P()(c().chartTop,(0,o.Z)({},c().chartTopMargin,!M&&!N)),children:[(0,j.jsx)("div",{className:c().avatar,children:p}),(0,j.jsxs)("div",{className:c().metaWrap,children:[(0,j.jsxs)("div",{className:c().meta,children:[(0,j.jsx)("span",{className:c().title,children:h}),(0,j.jsx)("span",{className:c().action,children:g})]}),z(l)]})]}),M&&(0,j.jsx)("div",{className:c().content,style:{height:r||"auto"},children:(0,j.jsx)("div",{className:r&&c().contentFixed,children:M})}),N&&(0,j.jsx)("div",{className:P()(c().footer,(0,o.Z)({},c().footerMargin,!M)),children:N})]})},U}return(0,x.Z)(D,[{key:"render",value:function(){var v=this.props,T=v.loading,a=T===void 0?!1:T,t=v.contentHeight,r=v.title,h=v.avatar,p=v.action,g=v.total,l=v.footer,N=v.children,M=(0,s.Z)(v,["loading","contentHeight","title","avatar","action","total","footer","children"]);return(0,j.jsx)(G.Z,(0,E.Z)((0,E.Z)({loading:a,bodyStyle:{padding:"20px 24px 8px 24px"}},M),{},{children:this.renderContent()}))}}]),D}(u.Component),F=I,i=e(16829),Q=e.n(i),C=function(m){var D=m.label,U=m.value,v=(0,s.Z)(m,["label","value"]);return(0,j.jsxs)("div",(0,E.Z)((0,E.Z)({className:Q().field},v),{},{children:[(0,j.jsx)("span",{className:Q().label,children:D}),(0,j.jsx)("span",{className:Q().number,children:U})]}))},X=C,S=function(m){return"".concat(d()(m).format("0,0.00")," \u20AC")},n={yuan:S,ChartCard:F,Field:X}},21937:function(W,R,e){"use strict";e.d(R,{Z:function(){return O}});var K=e(69610),d=e(54941),E=e(81306),A=e(19809),G=e(67294),s=e(84186),o=e(85893),O=function(x){(0,E.Z)(f,x);var Z=(0,A.Z)(f);function f(){var u;(0,K.Z)(this,f);for(var H=arguments.length,P=new Array(H),y=0;y<H;y++)P[y]=arguments[y];return u=Z.call.apply(Z,[this].concat(P)),u.main=null,u.renderToHtml=function(){var c=u.props.children;u.main&&(u.main.innerHTML=(0,s.c2)(c))},u}return(0,d.Z)(f,[{key:"componentDidMount",value:function(){this.renderToHtml()}},{key:"componentDidUpdate",value:function(){this.renderToHtml()}},{key:"render",value:function(){var H=this;return(0,o.jsx)("span",{ref:function(y){H.main=y}})}}]),f}(G.Component)},22019:function(W,R,e){"use strict";e.r(R),e.d(R,{default:function(){return U}});var K=e(13062),d=e(71230),E=e(89032),A=e(15746),G=e(22385),s=e(69713),o=e(11849),O=e(2824),x=e(21010),Z=e(21349),f=e(67294),u=e(3182),H=e(94043),P=e.n(H);function y(){return c.apply(this,arguments)}function c(){return c=(0,u.Z)(P().mark(function v(){return P().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,x.WY)("/api/fake_analysis_chart_data"));case 1:case"end":return a.stop()}},v)})),c.apply(this,arguments)}function j(v,T,a,t,r){return z.apply(this,arguments)}function z(){return z=(0,u.Z)(P().mark(function v(T,a,t,r,h){return P().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,x.WY)("/api/getSellPhoneData?startTime=".concat(T,"&endTime=").concat(a,"&_startTime=").concat(t,"&_endTime=").concat(r,"&store=").concat(h)));case 1:case"end":return g.stop()}},v)})),z.apply(this,arguments)}var I=e(84186),F=e(68628),i=e(21937),Q=e(30381),C=e(93356),X=e(4937),S=e(85518),n=e(85893),$=S.tq?{marginTop:164}:{},m={xs:24,sm:24,md:24,lg:24,xl:8},D=function(){var T=(0,x.tT)("@@initialState"),a=T.initialState,t=(0,x.QT)(y),r=t.loading,h=t.data,p=f.useState({cancelledOrders:0,receivedOrders:0,finishedOrders:0,totalPaidAmount:0,averageAmount:0,averageTime:0,_cancelledOrders:te,_receivedOrders:0,_finishedOrders:0,_totalPaidAmount:0,_averageAmount:0,_averageTime:0}),g=(0,O.Z)(p,2),l=g[0],N=g[1],M=(0,X.H)(a),b=M.startTime,J=M.endTime,L=M._startTime,B=M._endTime,ie=M.store,V=l.cancelledOrders,_=l.receivedOrders,w=l.finishedOrders,k=l.totalPaidAmount,q=l.averageAmount,ee=l.averageTime,te=l._cancelledOrders,re=l._receivedOrders,ae=l._finishedOrders,ne=l._totalPaidAmount,oe=l._averageAmount,se=l._averageTime;return f.useEffect(function(){j(b,J,L,B,ie).then(function(Y){N((0,o.Z)((0,o.Z)({},l),{},{cancelledOrders:parseFloat(Y.current.cancelledOrders),receivedOrders:parseFloat(Y.current.receivedOrders),finishedOrders:parseFloat(Y.current.finishedOrders),totalPaidAmount:parseFloat(Y.current.totalPaidAmount),averageAmount:parseFloat(Y.current.averageAmount),averageTime:parseFloat(Y.current.averageTime),_cancelledOrders:parseFloat(Y.prev.cancelledOrders),_receivedOrders:parseFloat(Y.prev.receivedOrders),_finishedOrders:parseFloat(Y.prev.finishedOrders),_totalPaidAmount:parseFloat(Y.prev.totalPaidAmount),_averageAmount:parseFloat(Y.prev.averageAmount),_averageTime:parseFloat(Y.prev.averageTime)}))})},[]),(0,n.jsx)(Z.Z,{style:$,children:(0,n.jsxs)(f.Suspense,{fallback:null,children:[(0,n.jsxs)(d.Z,{gutter:[24,24],children:[(0,n.jsx)(A.Z,(0,o.Z)((0,o.Z)({},m),{},{children:(0,n.jsx)(I.th,{bordered:!1,title:"Number of Orders Cancelled",action:(0,n.jsx)(s.Z,{title:(0,n.jsx)(C.mj,{current:V,prev:te,_startTime:L,_endTime:B}),children:(0,n.jsx)(F.Z,{})}),loading:r,total:function(){return(0,n.jsx)("div",{children:V})},footer:(0,n.jsx)(C.eW,{current:V,prev:te}),contentHeight:46})})),(0,n.jsx)(A.Z,(0,o.Z)((0,o.Z)({},m),{},{children:(0,n.jsx)(I.th,{bordered:!1,title:"Number of Orders Received",action:(0,n.jsx)(s.Z,{title:(0,n.jsx)(C.mj,{current:_,prev:re,_startTime:L,_endTime:B}),children:(0,n.jsx)(F.Z,{})}),loading:r,total:function(){return(0,n.jsx)("div",{children:_})},footer:(0,n.jsx)(C.eW,{current:_,prev:re}),contentHeight:46})})),(0,n.jsx)(A.Z,(0,o.Z)((0,o.Z)({},m),{},{children:(0,n.jsx)(I.th,{bordered:!1,title:"Number of Orders Finished",action:(0,n.jsx)(s.Z,{title:(0,n.jsx)(C.mj,{current:w,prev:ae,_startTime:L,_endTime:B}),children:(0,n.jsx)(F.Z,{})}),loading:r,total:function(){return(0,n.jsx)("div",{children:w})},footer:(0,n.jsx)(C.eW,{current:w,prev:ae}),contentHeight:46})}))]}),(0,n.jsxs)(d.Z,{gutter:[24,24],style:{marginTop:24},children:[(0,n.jsx)(A.Z,(0,o.Z)((0,o.Z)({},m),{},{children:(0,n.jsx)(I.th,{bordered:!1,title:"Total Amount Paid",action:(0,n.jsx)(s.Z,{title:(0,n.jsx)(C.mO,{current:k,prev:ne,_startTime:L,_endTime:B}),children:(0,n.jsx)(F.Z,{})}),loading:r,total:function(){return(0,n.jsx)(i.Z,{children:k})},footer:(0,n.jsx)(C.eW,{current:k,prev:ne}),contentHeight:46})})),(0,n.jsx)(A.Z,(0,o.Z)((0,o.Z)({},m),{},{children:(0,n.jsx)(I.th,{bordered:!1,title:"Average Amount Paid",action:(0,n.jsx)(s.Z,{title:(0,n.jsx)(C.mO,{current:q,prev:oe,_startTime:L,_endTime:B}),children:(0,n.jsx)(F.Z,{})}),loading:r,total:function(){return(0,n.jsx)(i.Z,{children:q})},footer:(0,n.jsx)(C.eW,{current:q,prev:oe}),contentHeight:46})})),(0,n.jsx)(A.Z,(0,o.Z)((0,o.Z)({},m),{},{children:(0,n.jsx)(I.th,{bordered:!1,title:"Average Time between Received and Finished",action:(0,n.jsx)(s.Z,{title:(0,n.jsx)(C.Kz,{current:ee,prev:se,_startTime:L,_endTime:B}),children:(0,n.jsx)(F.Z,{})}),loading:r,total:function(){return(0,n.jsx)(C.qp,{seconds:ee})},footer:(0,n.jsx)(C.X6,{current:ee,prev:se}),contentHeight:46})}))]})]})})},U=D}}]);
