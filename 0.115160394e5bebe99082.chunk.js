webpackJsonp([0],{rbsZ:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=l("WT6e"),e=function(){},r=l("/c+T"),o=function(){function n(n){this.httpService=n}return n.prototype.getData=function(){return this.httpService.getData("https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/images/")},n}(),i=function(){function n(n){this.dronestreService=n,this.attribution={license:"",photographer:"",site:"",source:""}}return n.prototype.ngOnInit=function(){this.getDronestreData()},n.prototype.getDronestreData=function(){var n=this;this.dronestreService.getData().subscribe(function(t){n.attribution=t.photos[0].attribution,n.href=t.photos[0].image.web},function(n){console.log(n)})},n}(),a=u.X({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin:10px 0}img[_ngcontent-%COMP%]{width:100%}"]],data:{}});function c(n){return u._15(0,[(n()(),u.Z(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u._14(1,null,["license\uff1a ",""])),(n()(),u._14(-1,null,["\n"])),(n()(),u.Z(3,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u._14(4,null,["photographer\uff1a ",""])),(n()(),u._14(-1,null,["\n"])),(n()(),u.Z(6,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),u._14(-1,null,["site\uff1a "])),(n()(),u.Z(8,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(n()(),u._14(9,null,["",""])),(n()(),u._14(-1,null,["\n"])),(n()(),u.Z(11,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),u._14(-1,null,["\n"]))],null,function(n,t){var l=t.component;n(t,1,0,l.attribution.license),n(t,4,0,l.attribution.photographer),n(t,8,0,u._2(1,"",l.attribution.source,"")),n(t,9,0,l.attribution.site),n(t,11,0,u._2(1,"",l.href,""),u._2(1,"",l.attribution.photographer,""))})}var s=u.V("app-dronestre",i,function(n){return u._15(0,[(n()(),u.Z(0,0,null,null,1,"app-dronestre",[],null,null,null,c,a)),u.Y(1,114688,null,0,i,[o],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),p=l("Xjw4"),h=l("bfOx");l.d(t,"DronestreModuleNgFactory",function(){return _});var _=u.W(e,[],function(n){return u._7([u._8(512,u.j,u.T,[[8,[s]],[3,u.j],u.u]),u._8(4608,p.i,p.h,[u.r,[2,p.n]]),u._8(4608,o,o,[r.a]),u._8(512,p.b,p.b,[]),u._8(512,h.m,h.m,[[2,h.r],[2,h.k]]),u._8(512,e,e,[]),u._8(1024,h.i,function(){return[[{path:"",component:i}]]},[])])})}});