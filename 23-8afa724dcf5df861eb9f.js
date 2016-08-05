webpackJsonp([23],{"./node_modules/webidl2/index.js":function(e,t,n){e.exports=n("./node_modules/webidl2/lib/webidl2.js")},"./node_modules/webidl2/lib/webidl2.js":function(e,t){!function(){var t=function(e){var t=[],n={"float":/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][-+]?[0-9]+)?|[0-9]+[Ee][-+]?[0-9]+)/,integer:/^-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)/,identifier:/^[A-Z_a-z][0-9A-Z_a-z]*/,string:/^"[^"]*"/,whitespace:/^(?:[\t\n\r ]+|[\t\n\r ]*((\/\/.*|\/\*(.|\n|\r)*?\*\/)[\t\n\r ]*))+/,other:/^[^\t\n\r 0-9A-Z_a-z]/},r=[];for(var i in n)r.push(i);for(;e.length>0;){for(var a=!1,l=0,u=r.length;l<u;l++){var o=r[l];if(e=e.replace(n[o],function(e){return t.push({type:o,value:e}),a=!0,""}),a)break}if(!a)throw new Error("Token stream not progressing")}return t},n=function(e,t){var n=1;e=e.slice();var r="float",i="integer",a="identifier",l="string",u="other",o=function(e,t,n,r){this.message=e,this.line=t,this.input=n,this.tokens=r};o.prototype.toString=function(){return this.message+", line "+this.line+" (tokens: '"+this.input+"')\n"+JSON.stringify(this.tokens,null,4)};var s=function(t){for(var r="",i=0,a=5;i<a&&e.length>i;)r+=e[i].value,i++;throw new o(t,n,r,e.slice(0,5))},f=null,p=function(t,n){if(e.length&&e[0].type===t)return"undefined"==typeof n||e[0].value===n?(f=e.shift(),t===a&&(f.value=f.value.replace(/^_/,"")),f):void 0},c=function(){if(e.length&&"whitespace"===e[0].type){var t=e.shift();return t.value.replace(/\n/g,function(e){return n++,e}),t}},v=function(e,t){for(var n={type:"whitespace",value:""};;){var r=c();if(!r)break;n.value+=r.value}if(n.value.length>0){if(e){var r=n.value,i={ws:/^([\t\n\r ]+)/,"line-comment":/^\/\/(.*)\n?/m,"multiline-comment":/^\/\*((?:.|\n|\r)*?)\*\//},a=[];for(var l in i)a.push(l);for(;r.length;){for(var u=!1,o=0,s=a.length;o<s;o++){var f=a[o];if(r=r.replace(i[f],function(n,r){return e.push({type:f+(t?"-"+t:""),value:r}),u=!0,""}),u)break}if(!u)throw new Error("Surprising white space construct.")}}return n}},d=function(){var e="";return v(),p(a,"unsigned")&&(e="unsigned "),v(),p(a,"short")?e+"short":p(a,"long")?(e+="long",v(),p(a,"long")?e+" long":e):void(e&&s("Failed to parse integer type"))},m=function(){var e="";return v(),p(a,"unrestricted")&&(e="unrestricted "),v(),p(a,"float")?e+"float":p(a,"double")?e+"double":void(e&&s("Failed to parse float type"))},y=function(){var e=d()||m();return e?e:(v(),p(a,"boolean")?"boolean":p(a,"byte")?"byte":p(a,"octet")?"octet":void 0)},h=function(){if(p(a,"true"))return{type:"boolean",value:!0};if(p(a,"false"))return{type:"boolean",value:!1};if(p(a,"null"))return{type:"null"};if(p(a,"Infinity"))return{type:"Infinity",negative:!1};if(p(a,"NaN"))return{type:"NaN"};var t=p(r)||p(i);if(t)return{type:"number",value:1*t.value};var n=p(u,"-");if(n){if(p(a,"Infinity"))return{type:"Infinity",negative:!0};e.unshift(n)}},g=function(e){for(;;)if(v(),p(u,"?"))e.nullable&&s("Can't nullable more than once"),e.nullable=!0;else{if(!p(u,"["))return;v(),p(u,"]")||s("Unterminated array type"),e.array?(e.array++,e.nullableArray.push(e.nullable)):(e.array=1,e.nullableArray=[e.nullable]),e.nullable=!1}},b=function(){var e,t,n=y(),r={sequence:!1,generic:null,nullable:!1,array:!1,union:!1};if(n)r.idlType=n;else{if(!(e=p(a)))return;if(t=e.value,v(),p(u,"<"))return"sequence"===t&&(r.sequence=!0),r.generic=t,r.idlType=N()||s("Error parsing generic type "+t),v(),p(u,">")||s("Unterminated generic type "+t),g(r),r;r.idlType=t}return g(r),r.nullable&&!r.array&&"any"===r.idlType&&s("Type any cannot be made nullable"),r},k=function(){if(v(),p(u,"(")){var e={sequence:!1,generic:null,nullable:!1,array:!1,union:!0,idlType:[]},t=N()||s("Union type with no content");for(e.idlType.push(t);;){if(v(),!p(a,"or"))break;var n=N()||s("No type after 'or' in union type");e.idlType.push(n)}return p(u,")")||s("Unterminated union type"),g(e),e}},N=function(){return b()||k()},T=function(t){var n={optional:!1,variadic:!1};n.extAttrs=A(t),v(t,"pea");var r=p(a,"optional");if(r&&(n.optional=!0,v()),n.idlType=N(),!n.idlType)return void(r&&e.unshift(r));var i=f;n.optional||(v(),e.length>=3&&"other"===e[0].type&&"."===e[0].value&&"other"===e[1].type&&"."===e[1].value&&"other"===e[2].type&&"."===e[2].value&&(e.shift(),e.shift(),e.shift(),n.variadic=!0)),v();var l=p(a);return l?(n.name=l.value,n.optional&&(v(),n["default"]=q()),n):(r&&e.unshift(r),void e.unshift(i))},x=function(e){var t=[],n=T(e?t:null);if(n)for(t.push(n);;){if(v(e?t:null),!p(u,","))return t;var r=T(e?t:null)||s("Trailing comma in arguments list");t.push(r)}},w=function(){v();var e=N();if(e&&(v(),p(u,","))){v();var t=N();if(t)return[e,t]}},U=function(e){v();var t=p(a);if(t){var n={name:t.value,arguments:null};v();var r=p(u,"=");if(r){var i;if(v(),i=p(a))n.rhs=i;else if(p(u,"(")){i=[];var l=p(a);l&&(i=[l.value]),B(i),p(u,")")||s("Unexpected token in extended attribute argument list or type pair"),n.rhs={type:"identifier-list",value:i}}if(!n.rhs)return s("No right hand side to extended attribute assignment")}if(v(),p(u,"(")){var o,f;(o=x(e))?n.arguments=o:(f=w())?n.typePair=f:n.arguments=[],v(),p(u,")")||s("Unexpected token in extended attribute argument list or type pair")}return n}},A=function(e){var t=[];if(v(e),!p(u,"["))return t;for(t[0]=U(e)||s("Extended attribute with not content"),v();p(u,",");)t.push(U(e)||s("Trailing comma in extended attribute")),v();return p(u,"]")||s("No end of extended attribute"),t},q=function(){if(v(),p(u,"=")){v();var e=h();if(e)return e;if(p(u,"["))return p(u,"]")||s("Default sequence value must be empty"),{type:"sequence",value:[]};var t=p(l)||s("No value for default");return t.value=t.value.replace(/^"/,"").replace(/"$/,""),t}},z=function(e){if(v(e,"pea"),p(a,"const")){var t={type:"const",nullable:!1};v();var n=y();n||(n=p(a)||s("No type for const"),n=n.value),t.idlType=n,v(),p(u,"?")&&(t.nullable=!0,v());var r=p(a)||s("No name for const");t.name=r.value,v(),p(u,"=")||s("No value assignment for const"),v();var i=h();return i?t.value=i:s("No value for const"),v(),p(u,";")||s("Unterminated const"),t}},E=function(){if(v(),p(u,":")){v();var e=p(a)||s("No type in inheritance");return e.value}},I=function(e,t){v(),e||(e={});var n=p(a);return e.name=n?n.value:null,v(),p(u,"(")||s("Invalid operation"),e.arguments=x(t)||[],v(),p(u,")")||s("Unterminated operation"),v(),p(u,";")||s("Unterminated operation"),e},j=function(t){v(t,"pea");var n;if(p(a,"callback")){v();var r=p(a,"interface");if(r)return e.unshift(r),n=D(),n.type="callback interface",n;var i=p(a)||s("No name for callback");return n={type:"callback",name:i.value},v(),p(u,"=")||s("No assignment in callback"),v(),n.idlType=M(),v(),p(u,"(")||s("No arguments in callback"),n.arguments=x(t)||[],v(),p(u,")")||s("Unterminated callback"),v(),p(u,";")||s("Unterminated callback"),n}},_=function(t){v(t,"pea");var n=[],r={type:"attribute","static":!1,stringifier:!1,inherit:!1,readonly:!1};p(a,"static")?(r["static"]=!0,n.push(f)):p(a,"stringifier")&&(r.stringifier=!0,n.push(f));var i=v();if(i&&n.push(i),p(a,"inherit")){(r["static"]||r.stringifier)&&s("Cannot have a static or stringifier inherit"),r.inherit=!0,n.push(f);var i=v();i&&n.push(i)}if(p(a,"readonly")){r.readonly=!0,n.push(f);var i=v();i&&n.push(i)}if(!p(a,"attribute"))return void(e=n.concat(e));v(),r.idlType=N()||s("No type in attribute"),r.idlType.sequence&&s("Attributes cannot accept sequence types"),v();var l=p(a)||s("No name in attribute");return r.name=l.value,v(),p(u,";")||s("Unterminated attribute"),r},M=function(){var e=N();if(!e){if(p(a,"void"))return"void";s("No return type")}return e},S=function(e){v(e,"pea");for(var t={type:"operation",getter:!1,setter:!1,creator:!1,deleter:!1,legacycaller:!1,"static":!1,stringifier:!1};;)if(v(),p(a,"getter"))t.getter=!0;else if(p(a,"setter"))t.setter=!0;else if(p(a,"creator"))t.creator=!0;else if(p(a,"deleter"))t.deleter=!0;else{if(!p(a,"legacycaller"))break;t.legacycaller=!0}if(t.getter||t.setter||t.creator||t.deleter||t.legacycaller)return v(),t.idlType=M(),I(t,e),t;if(p(a,"static"))return t["static"]=!0,t.idlType=M(),I(t,e),t;if(p(a,"stringifier"))return t.stringifier=!0,-v(),p(u,";")?t:(t.idlType=M(),I(t,e),t);if(t.idlType=M(),v(),p(a,"iterator")){if(v(),t.type="iterator",p(a,"object"))t.iteratorObject="object";else if(p(u,"=")){v();var n=p(a)||s("No right hand side in iterator");t.iteratorObject=n.value}return v(),p(u,";")||s("Unterminated iterator"),t}return I(t,e),t},B=function(e){for(;;){if(v(),!p(u,","))break;v();var t=p(a)||s("Trailing comma in identifiers list");e.push(t.value)}},F=function(e){if(v(e,"pea"),p(a,"serializer")){var t={type:"serializer"};if(v(),p(u,"=")){if(v(),p(u,"{")){t.patternMap=!0,v();var n=p(a);n&&"getter"===n.value?t.names=["getter"]:n&&"inherit"===n.value?(t.names=["inherit"],B(t.names)):n?(t.names=[n.value],B(t.names)):t.names=[],v(),p(u,"}")||s("Unterminated serializer pattern map")}else if(p(u,"[")){t.patternList=!0,v();var n=p(a);n&&"getter"===n.value?t.names=["getter"]:n?(t.names=[n.value],B(t.names)):t.names=[],v(),p(u,"]")||s("Unterminated serializer pattern list")}else{var r=p(a)||s("Invalid serializer");t.name=r.value}return v(),p(u,";")||s("Unterminated serializer"),t}return p(u,";")||(t.idlType=M(),v(),t.operation=I(null,e)),t}},O=function(){return p(a,"iterable")?"iterable":p(a,"legacyiterable")?"legacyiterable":p(a,"maplike")?"maplike":p(a,"setlike")?"setlike":void 0},Z=function(){return p(a,"maplike")?"maplike":p(a,"setlike")?"setlike":void 0},C=function(t){v(t,"pea");var n=[],r={type:null,idlType:null,readonly:!1};if(p(a,"readonly")){r.readonly=!0,n.push(f);var i=v();i&&n.push(i)}var l=r.readonly?Z:O,o=l();if(!o)return void(e=n.concat(e));var c="maplike"===o,d=c||"iterable"===o;if(r.type=o,"maplike"!==r.type&&"setlike"!==r.type&&delete r.readonly,v(),p(u,"<")){if(r.idlType=N()||s("Error parsing "+o+" declaration"),v(),d){var m=null;p(u,",")&&(v(),m=N(),v()),m?r.idlType=[r.idlType,m]:c&&s("Missing second type argument in "+o+" declaration")}p(u,">")||s("Unterminated "+o+" declaration"),v(),p(u,";")||s("Missing semicolon after "+o+" declaration")}else s("Error parsing "+o+" declaration");return r},D=function(e,n){if(v(e?null:n,"pea"),p(a,"interface")){v();var r=p(a)||s("No name for interface"),i=[],l={type:"interface",name:r.value,partial:!1,members:i};for(e||(l.inheritance=E()||null),v(),p(u,"{")||s("Bodyless interface");;){if(v(n?i:null),p(u,"}"))return v(),p(u,";")||s("Missing semicolon after interface"),l;var o=A(n?i:null);v();var f=z(n?i:null);if(f)f.extAttrs=o,l.members.push(f);else{var c=t.allowNestedTypedefs&&W(n?i:null)||C(n?i:null)||F(n?i:null)||_(n?i:null)||S(n?i:null)||s("Unknown member");c.extAttrs=o,l.members.push(c)}}}},J=function(e){if(v(e,"pea"),p(a,"partial")){var t=L(!0,e)||D(!0,e)||s("Partial doesn't apply to anything");return t.partial=!0,t}},L=function(e,t){if(v(e?null:t,"pea"),p(a,"dictionary")){v();var n=p(a)||s("No name for dictionary"),r=[],i={type:"dictionary",name:n.value,partial:!1,members:r};for(e||(i.inheritance=E()||null),v(),p(u,"{")||s("Bodyless dictionary");;){if(v(t?r:null),p(u,"}"))return v(),p(u,";")||s("Missing semicolon after dictionary"),i;var l=A(t?r:null);v(t?r:null,"pea");var o=p(a,"required"),f=N()||s("No type for dictionary member");v();var n=p(a)||s("No name for dictionary member"),c=q();o&&c&&s("Required member must not have a default"),i.members.push({type:"field",name:n.value,required:!!o,idlType:f,extAttrs:l,"default":c}),v(),p(u,";")||s("Unterminated dictionary member")}}},P=function(e){if(v(e,"pea"),p(a,"exception")){v();var t=p(a)||s("No name for exception"),n=[],r={type:"exception",name:t.value,members:n};for(r.inheritance=E()||null,v(),p(u,"{")||s("Bodyless exception");;){if(v(e?n:null),p(u,"}"))return v(),p(u,";")||s("Missing semicolon after exception"),r;var i=A(e?n:null);v(e?n:null,"pea");var l=z();if(l)l.extAttrs=i,r.members.push(l);else{var o=N();v();var t=p(a);v(),o&&t&&p(u,";")||s("Unknown member in exception body"),r.members.push({type:"field",name:t.value,idlType:o,extAttrs:i})}}}},R=function(e){if(v(e,"pea"),p(a,"enum")){v();var t=p(a)||s("No name for enum"),n=[],r={type:"enum",name:t.value,values:n};v(),p(u,"{")||s("No curly for enum");for(var i=!1;;){if(v(e?n:null),p(u,"}"))return v(),p(u,";")||s("No semicolon after enum"),r;var o=p(l)||s("Unexpected value in enum");r.values.push(o.value.replace(/"/g,"")),v(e?n:null),p(u,",")?(e&&n.push({type:","}),v(e?n:null),i=!0):i=!1}}},W=function(e){if(v(e,"pea"),p(a,"typedef")){var t={type:"typedef"};v(),t.typeExtAttrs=A(),v(e,"tpea"),t.idlType=N()||s("No type in typedef"),v();var n=p(a)||s("No name in typedef");return t.name=n.value,v(),p(u,";")||s("Unterminated typedef"),t}},X=function(t){v(t,"pea");var n=p(a);if(n){var r=v();if(p(a,"implements")){var i={type:"implements",target:n.value};v();var l=p(a)||s("Incomplete implements statement");return i["implements"]=l.value,v(),p(u,";")||s("No terminating ; for implements statement"),i}e.unshift(r),e.unshift(n)}},$=function(e){return j(e)||D(!1,e)||J(e)||L(!1,e)||P(e)||R(e)||W(e)||X(e)},G=function(t){if(!e.length)return[];for(var n=[];;){var r=A(t?n:null),i=$(t?n:null);if(!i){r.length&&s("Stray extended attributes");break}i.extAttrs=r,n.push(i)}return n},H=G(t.ws);return e.length&&s("Unrecognised tokens"),H},r="undefined"!=typeof e&&e.exports,i={parse:function(e,r){r||(r={});var i=t(e);return n(i,r)}};r?e.exports=i:self.WebIDL2=i}()}});