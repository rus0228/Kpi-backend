(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[805],{65911:function(wt,M,n){"use strict";var O=n(67294),Q=n(81257),ut=n(27199),S=n(30731),vt=n(4874),x=function(u,i){var y={};for(var s in u)Object.prototype.hasOwnProperty.call(u,s)&&i.indexOf(s)<0&&(y[s]=u[s]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,s=Object.getOwnPropertySymbols(u);Z<s.length;Z++)i.indexOf(s[Z])<0&&Object.prototype.propertyIsEnumerable.call(u,s[Z])&&(y[s[Z]]=u[s[Z]]);return y},ct=(0,O.forwardRef)(function(u,i){var y=u.style,s=y===void 0?{height:"inherit"}:y,Z=u.className,j=u.loading,R=u.loadingTemplate,U=u.errorTemplate,d=x(u,["style","className","loading","loadingTemplate","errorTemplate"]),H=(0,ut.Z)(Q.VT,d),E=H.chart,V=H.container;return(0,O.useImperativeHandle)(i,function(){return{getChart:function(){return E.current}}}),O.createElement(S.Z,{errorTemplate:U},j&&O.createElement(vt.Z,{loadingTemplate:R}),O.createElement("div",{className:Z,style:s,ref:V}))});M.Z=ct},90082:function(wt,M,n){"use strict";n.r(M),n.d(M,{default:function(){return Gt}});var O=n(58024),Q=n(39144),ut=n(13062),S=n(71230),vt=n(89032),x=n(15746),ct=n(22385),u=n(69713),i=n(11849),y=n(2824),s=n(67294),Z=n(21349),j=n(21010),R=n(3182),U=n(94043),d=n.n(U);function H(){return E.apply(this,arguments)}function E(){return E=(0,R.Z)(d().mark(function c(){return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,j.WY)("/api/fake_analysis_chart_data"));case 1:case"end":return o.stop()}},c)})),E.apply(this,arguments)}function V(c,v,o,l,r){return K.apply(this,arguments)}function K(){return K=(0,R.Z)(d().mark(function c(v,o,l,r,f){return d().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,j.WY)("/api/getSalesRevenueProfitQty?startTime=".concat(v,"&endTime=").concat(o,"&_startTime=").concat(l,"&_endTime=").concat(r,"&store=").concat(f));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),K.apply(this,arguments)}function Et(c,v,o,l,r){return N.apply(this,arguments)}function N(){return N=(0,R.Z)(d().mark(function c(v,o,l,r,f){return d().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,j.WY)("/api/getRepairsRevenueProfitQty?startTime=".concat(v,"&endTime=").concat(o,"&_startTime=").concat(l,"&_endTime=").concat(r,"&store=").concat(f));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),N.apply(this,arguments)}function $t(c,v,o,l,r){return G.apply(this,arguments)}function G(){return G=(0,R.Z)(d().mark(function c(v,o,l,r,f){return d().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,j.WY)("/api/getReturnsRevenueProfitQty?startTime=".concat(v,"&endTime=").concat(o,"&_startTime=").concat(l,"&_endTime=").concat(r,"&store=").concat(f));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),G.apply(this,arguments)}function Lt(c,v,o,l,r){return z.apply(this,arguments)}function z(){return z=(0,R.Z)(d().mark(function c(v,o,l,r,f){return d().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,j.WY)("/api/getPurchaseOrdersRevenueQty?startTime=".concat(v,"&endTime=").concat(o,"&_startTime=").concat(l,"&_endTime=").concat(r,"&store=").concat(f));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),z.apply(this,arguments)}function At(c,v,o,l,r){return J.apply(this,arguments)}function J(){return J=(0,R.Z)(d().mark(function c(v,o,l,r,f){return d().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,j.WY)("/api/getTotalData?startTime=".concat(v,"&endTime=").concat(o,"&_startTime=").concat(l,"&_endTime=").concat(r,"&store=").concat(f));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),J.apply(this,arguments)}function Mt(c,v,o,l,r,f){return X.apply(this,arguments)}function X(){return X=(0,R.Z)(d().mark(function c(v,o,l,r,f,g){return d().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,j.WY)("/api/getInventoryLossesData?startTime=".concat(v,"&endTime=").concat(o,"&_startTime=").concat(l,"&_endTime=").concat(r,"&store=").concat(f,"&kind=").concat(g)));case 1:case"end":return D.stop()}},c)})),X.apply(this,arguments)}var $=n(76723),pt=n(86582),ft=n(65911),t=n(85893),Ht=function(v){var o=v.revenueProfitQtyData,l=s.useMemo(function(){var B=[],Y=[],L=[];return o.map(function(F){B.push({time:F.time,value:parseFloat(F.revenue),type:"revenue"}),Y.push({time:F.time,value:parseFloat(F.profit),type:"profit"}),L.push({time:F.time,quantity:parseFloat(F.quantity)})}),{revenueData:B,profitData:Y,quantityData:L}},[o]),r=l.revenueData,f=l.profitData,g=l.quantityData,a=[].concat((0,pt.Z)(r),(0,pt.Z)(f)),D={data:[a,g],xField:"time",yField:["value","quantity"],geometryOptions:[{geometry:"column",isGroup:!0,seriesField:"type"},{geometry:"line",lineStyle:{lineWidth:2},smooth:!0}],height:260};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(S.Z,{gutter:16,children:(0,t.jsx)(x.Z,{span:24,children:(0,t.jsx)(ft.Z,(0,i.Z)({},D))})})})},k=Ht,Bt=function(v){var o=v.revenueQtyData,l=s.useMemo(function(){var g=[];return o.map(function(a){g.push({time:a.time,revenue:parseFloat(a.revenue),quantity:parseFloat(a.quantity)})}),{data:g}},[o]),r=l.data,f={data:[r,r],xField:"time",yField:["revenue","quantity"],geometryOptions:[{geometry:"column"},{geometry:"line",lineStyle:{lineWidth:2},smooth:!0}],height:260};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(S.Z,{gutter:16,children:(0,t.jsx)(x.Z,{span:24,children:(0,t.jsx)(ft.Z,(0,i.Z)({},f))})})})},Yt=Bt,P=n(84186),I=n(21937),_=n(68628),p=n(93356),Ut=n(4937),Vt=n(85518),Kt=Vt.tq?{marginTop:164}:{},W={xs:24,sm:24,md:24,lg:24,xl:8,style:{marginBottom:24}},Nt=function(){var v=(0,j.tT)("@@initialState"),o=v.initialState,l=(0,j.QT)(H),r=l.loading,f=l.data,g=s.useState([]),a=(0,y.Z)(g,2),D=a[0],B=a[1],Y=s.useState([]),L=(0,y.Z)(Y,2),F=L[0],zt=L[1],Jt=s.useState([]),ht=(0,y.Z)(Jt,2),Xt=ht[0],kt=ht[1],qt=s.useState([]),dt=(0,y.Z)(qt,2),te=dt[0],ee=dt[1],ae=s.useState({totalRevenue:0,preTotalRevenue:0,totalRevenueWithIva:0,preTotalRevenueWithIva:0,totalRevenueWithoutIva:0,preTotalRevenueWithoutIva:0,totalProfit:0,preTotalProfit:0,totalProfitWithIva:0,preTotalProfitWithIva:0,totalProfitWithoutIva:0,preTotalProfitWithoutIva:0,totalCost:0,preTotalCost:0,totalIva:0,preTotalIva:0}),mt=(0,y.Z)(ae,2),h=mt[0],re=mt[1],ne=s.useState({totalLosses:0,preTotalLosses:0}),Tt=(0,y.Z)(ne,2),q=Tt[0],oe=Tt[1],tt=h.totalRevenue,xt=h.preTotalRevenue,et=h.totalRevenueWithIva,yt=h.preTotalRevenueWithIva,at=h.totalRevenueWithoutIva,gt=h.preTotalRevenueWithoutIva,rt=h.totalProfit,jt=h.preTotalProfit,nt=h.totalProfitWithIva,Zt=h.preTotalProfitWithIva,ot=h.totalProfitWithoutIva,Rt=h.preTotalProfitWithoutIva,it=h.totalCost,Pt=h.preTotalCost,st=h.totalIva,It=h.preTotalIva,lt=q.totalLosses,_t=q.preTotalLosses,A=(0,Ut.H)(o),b=A.startTime,C=A.endTime,m=A._startTime,T=A._endTime,w=A.store;return s.useEffect(function(){V(b,C,m,T,w).then(function(e){B(e)}),Et(b,C,m,T,w).then(function(e){zt(e)}),$t(b,C,m,T,w).then(function(e){kt(e)}),Lt(b,C,m,T,w).then(function(e){ee(e)}),At(b,C,m,T,w).then(function(e){var Wt=parseFloat(e.current.sales_revenue_with_iva)+parseFloat(e.current.repairs_revenue_with_iva)-parseFloat(e.current.returns_revenue_with_iva),Dt=parseFloat(e.before.sales_revenue_with_iva)+parseFloat(e.before.repairs_revenue_with_iva)-parseFloat(e.before.returns_revenue_with_iva),Ft=parseFloat(e.current.sales_revenue_without_iva)+parseFloat(e.current.repairs_revenue_without_iva)-parseFloat(e.current.returns_revenue_without_iva),St=parseFloat(e.before.sales_revenue_without_iva)+parseFloat(e.before.repairs_revenue_without_iva)-parseFloat(e.before.returns_revenue_without_iva),Ot=parseFloat(e.current.sales_profit_with_iva)+parseFloat(e.current.repairs_profit_with_iva)-parseFloat(e.current.returns_profit_with_iva),Qt=parseFloat(e.before.sales_profit_with_iva)+parseFloat(e.before.repairs_profit_with_iva)-parseFloat(e.before.returns_profit_with_iva),bt=parseFloat(e.current.sales_profit_without_iva)+parseFloat(e.current.repairs_profit_without_iva)-parseFloat(e.current.returns_profit_without_iva),Ct=parseFloat(e.before.sales_profit_without_iva)+parseFloat(e.before.repairs_profit_without_iva)-parseFloat(e.before.returns_profit_without_iva),ie=Wt+Ft,se=Dt+St,le=Ot+bt,ue=Qt+Ct,ve=parseFloat(e.current.sales_cost)+parseFloat(e.current.repairs_cost)-parseFloat(e.current.returns_cost),ce=parseFloat(e.before.sales_cost)+parseFloat(e.before.repairs_cost)-parseFloat(e.before.returns_cost),pe=parseFloat(e.current.sales_iva)+parseFloat(e.current.repairs_iva)-parseFloat(e.current.returns_iva),fe=parseFloat(e.before.sales_iva)+parseFloat(e.before.repairs_iva)-parseFloat(e.before.returns_iva);re((0,i.Z)((0,i.Z)({},h),{},{totalRevenue:ie,preTotalRevenue:se,totalRevenueWithIva:Wt,preTotalRevenueWithIva:Dt,totalRevenueWithoutIva:Ft,preTotalRevenueWithoutIva:St,totalProfit:le,preTotalProfit:ue,totalProfitWithIva:Ot,preTotalProfitWithIva:Qt,totalProfitWithoutIva:bt,preTotalProfitWithoutIva:Ct,totalCost:ve,preTotalCost:ce,totalIva:pe,preTotalIva:fe}))}),Mt(b,C,m,T,w,"totalLosses").then(function(e){oe((0,i.Z)((0,i.Z)({},q),{},{totalLosses:e.current,preTotalLosses:e.prev}))})},[o]),(0,t.jsx)(Z.Z,{style:Kt,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.Suspense,{fallback:(0,t.jsx)($.Z,{}),children:[(0,t.jsxs)(S.Z,{gutter:24,children:[(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total Revenue",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:tt,prev:xt,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:tt})},footer:(0,t.jsx)(p.eW,{current:tt,prev:xt}),contentHeight:46})})),(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total Revenue with IVA",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:et,prev:yt,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:et})},footer:(0,t.jsx)(p.eW,{current:et,prev:yt}),contentHeight:46})})),(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total Revenue without IVA",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:at,prev:gt,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:at})},footer:(0,t.jsx)(p.eW,{current:at,prev:gt}),contentHeight:46})}))]}),(0,t.jsxs)(S.Z,{gutter:24,children:[(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total Cost of Goods",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:it,prev:Pt,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:it})},footer:(0,t.jsx)(p.eW,{current:it,prev:Pt}),contentHeight:46})})),(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total IVA",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:st,prev:It,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:st})},footer:(0,t.jsx)(p.eW,{current:st,prev:It}),contentHeight:46})})),(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total Losses",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:lt,prev:_t,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:lt})},footer:(0,t.jsx)(p.eW,{current:lt,prev:_t}),contentHeight:46})}))]}),(0,t.jsxs)(S.Z,{gutter:24,children:[(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total Profit",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:rt,prev:jt,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:rt})},footer:(0,t.jsx)(p.eW,{current:rt,prev:jt}),contentHeight:46})})),(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total Profit with IVA",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:nt,prev:Zt,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:nt})},footer:(0,t.jsx)(p.eW,{current:nt,prev:Zt}),contentHeight:46})})),(0,t.jsx)(x.Z,(0,i.Z)((0,i.Z)({},W),{},{children:(0,t.jsx)(P.th,{bordered:!1,title:"Total Profit without IVA",action:(0,t.jsx)(u.Z,{title:(0,t.jsx)(p.mO,{current:ot,prev:Rt,_startTime:m,_endTime:T}),children:(0,t.jsx)(_.Z,{})}),loading:r,total:function(){return(0,t.jsx)(I.Z,{children:ot})},footer:(0,t.jsx)(p.eW,{current:ot,prev:Rt}),contentHeight:46})}))]})]}),(0,t.jsx)(s.Suspense,{fallback:(0,t.jsx)($.Z,{}),children:(0,t.jsx)(Q.Z,{loading:r,title:"Sales",bordered:!1,bodyStyle:{padding:24,marginBottom:24},children:(0,t.jsx)(k,{revenueProfitQtyData:D})})}),(0,t.jsx)(s.Suspense,{fallback:(0,t.jsx)($.Z,{}),children:(0,t.jsx)(Q.Z,{loading:r,title:"Repairs",bordered:!1,bodyStyle:{padding:24,marginBottom:24},children:(0,t.jsx)(k,{revenueProfitQtyData:F})})}),(0,t.jsx)(s.Suspense,{fallback:(0,t.jsx)($.Z,{}),children:(0,t.jsx)(Q.Z,{loading:r,title:"Credit Notes",bordered:!1,bodyStyle:{padding:24,marginBottom:24},children:(0,t.jsx)(k,{revenueProfitQtyData:Xt})})}),(0,t.jsx)(s.Suspense,{fallback:(0,t.jsx)($.Z,{}),children:(0,t.jsx)(Q.Z,{loading:r,title:"Purchase Orders",bordered:!1,bodyStyle:{padding:24,marginBottom:24},children:(0,t.jsx)(Yt,{revenueQtyData:te})})})]})})},Gt=Nt}}]);
