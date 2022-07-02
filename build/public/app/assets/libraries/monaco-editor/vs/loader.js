"use strict";/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.29.2(df04357573e045be658960bd50ff0a45d6d1eadb)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/var _amdLoaderGlobal=this,_commonjsGlobal=typeof global=="object"?global:{},AMDLoader;(function(f){f.global=_amdLoaderGlobal;var E=function(){function h(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1}return Object.defineProperty(h.prototype,"isWindows",{get:function(){return this._detect(),this._isWindows},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isNode",{get:function(){return this._detect(),this._isNode},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isElectronRenderer",{get:function(){return this._detect(),this._isElectronRenderer},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isWebWorker",{get:function(){return this._detect(),this._isWebWorker},enumerable:!1,configurable:!0}),h.prototype._detect=function(){this._detected||(this._detected=!0,this._isWindows=h._isWindows(),this._isNode=typeof module!="undefined"&&!!module.exports,this._isElectronRenderer=typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.electron!="undefined"&&process.type==="renderer",this._isWebWorker=typeof f.global.importScripts=="function")},h._isWindows=function(){return typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0?!0:typeof process!="undefined"?process.platform==="win32":!1},h}();f.Environment=E})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var E=function(){function a(i,p,s){this.type=i,this.detail=p,this.timestamp=s}return a}();f.LoaderEvent=E;var h=function(){function a(i){this._events=[new E(1,"",i)]}return a.prototype.record=function(i,p){this._events.push(new E(i,p,f.Utilities.getHighPerformanceTimestamp()))},a.prototype.getEvents=function(){return this._events},a}();f.LoaderEventRecorder=h;var _=function(){function a(){}return a.prototype.record=function(i,p){},a.prototype.getEvents=function(){return[]},a.INSTANCE=new a,a}();f.NullLoaderEventRecorder=_})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var E=function(){function h(){}return h.fileUriToFilePath=function(_,a){if(a=decodeURI(a).replace(/%23/g,"#"),_){if(/^file:\/\/\//.test(a))return a.substr(8);if(/^file:\/\//.test(a))return a.substr(5)}else if(/^file:\/\//.test(a))return a.substr(7);return a},h.startsWith=function(_,a){return _.length>=a.length&&_.substr(0,a.length)===a},h.endsWith=function(_,a){return _.length>=a.length&&_.substr(_.length-a.length)===a},h.containsQueryString=function(_){return/^[^\#]*\?/gi.test(_)},h.isAbsolutePath=function(_){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(_)},h.forEachProperty=function(_,a){if(_){var i=void 0;for(i in _)_.hasOwnProperty(i)&&a(i,_[i])}},h.isEmpty=function(_){var a=!0;return h.forEachProperty(_,function(){a=!1}),a},h.recursiveClone=function(_){if(!_||typeof _!="object"||_ instanceof RegExp||!Array.isArray(_)&&Object.getPrototypeOf(_)!==Object.prototype)return _;var a=Array.isArray(_)?[]:{};return h.forEachProperty(_,function(i,p){p&&typeof p=="object"?a[i]=h.recursiveClone(p):a[i]=p}),a},h.generateAnonymousModule=function(){return"===anonymous"+h.NEXT_ANONYMOUS_ID+++"==="},h.isAnonymousModule=function(_){return h.startsWith(_,"===anonymous")},h.getHighPerformanceTimestamp=function(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=f.global.performance&&typeof f.global.performance.now=="function"),this.HAS_PERFORMANCE_NOW?f.global.performance.now():Date.now()},h.NEXT_ANONYMOUS_ID=1,h.PERFORMANCE_NOW_PROBED=!1,h.HAS_PERFORMANCE_NOW=!1,h}();f.Utilities=E})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){function E(a){if(a instanceof Error)return a;var i=new Error(a.message||String(a)||"Unknown Error");return a.stack&&(i.stack=a.stack),i}f.ensureError=E;var h=function(){function a(){}return a.validateConfigurationOptions=function(i){function p(e){if(e.phase==="loading"){console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}if(e.phase==="factory"){console.error('The factory method of "'+e.moduleId+'" has thrown an exception'),console.error(e);return}}if(i=i||{},typeof i.baseUrl!="string"&&(i.baseUrl=""),typeof i.isBuild!="boolean"&&(i.isBuild=!1),typeof i.paths!="object"&&(i.paths={}),typeof i.config!="object"&&(i.config={}),typeof i.catchError=="undefined"&&(i.catchError=!1),typeof i.recordStats=="undefined"&&(i.recordStats=!1),typeof i.urlArgs!="string"&&(i.urlArgs=""),typeof i.onError!="function"&&(i.onError=p),Array.isArray(i.ignoreDuplicateModules)||(i.ignoreDuplicateModules=[]),i.baseUrl.length>0&&(f.Utilities.endsWith(i.baseUrl,"/")||(i.baseUrl+="/")),typeof i.cspNonce!="string"&&(i.cspNonce=""),typeof i.preferScriptTags=="undefined"&&(i.preferScriptTags=!1),Array.isArray(i.nodeModules)||(i.nodeModules=[]),i.nodeCachedData&&typeof i.nodeCachedData=="object"&&(typeof i.nodeCachedData.seed!="string"&&(i.nodeCachedData.seed="seed"),(typeof i.nodeCachedData.writeDelay!="number"||i.nodeCachedData.writeDelay<0)&&(i.nodeCachedData.writeDelay=1e3*7),!i.nodeCachedData.path||typeof i.nodeCachedData.path!="string")){var s=E(new Error("INVALID cached data configuration, 'path' MUST be set"));s.phase="configuration",i.onError(s),i.nodeCachedData=void 0}return i},a.mergeConfigurationOptions=function(i,p){i===void 0&&(i=null),p===void 0&&(p=null);var s=f.Utilities.recursiveClone(p||{});return f.Utilities.forEachProperty(i,function(e,t){e==="ignoreDuplicateModules"&&typeof s.ignoreDuplicateModules!="undefined"?s.ignoreDuplicateModules=s.ignoreDuplicateModules.concat(t):e==="paths"&&typeof s.paths!="undefined"?f.Utilities.forEachProperty(t,function(r,n){return s.paths[r]=n}):e==="config"&&typeof s.config!="undefined"?f.Utilities.forEachProperty(t,function(r,n){return s.config[r]=n}):s[e]=f.Utilities.recursiveClone(t)}),a.validateConfigurationOptions(s)},a}();f.ConfigurationOptionsUtil=h;var _=function(){function a(i,p){if(this._env=i,this.options=h.mergeConfigurationOptions(p),this._createIgnoreDuplicateModulesMap(),this._createNodeModulesMap(),this._createSortedPathsRules(),this.options.baseUrl===""){if(this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){var s=this.options.nodeRequire.main.filename,e=Math.max(s.lastIndexOf("/"),s.lastIndexOf("\\"));this.options.baseUrl=s.substring(0,e+1)}if(this.options.nodeMain&&this._env.isNode){var s=this.options.nodeMain,e=Math.max(s.lastIndexOf("/"),s.lastIndexOf("\\"));this.options.baseUrl=s.substring(0,e+1)}}}return a.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={};for(var i=0;i<this.options.ignoreDuplicateModules.length;i++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[i]]=!0},a.prototype._createNodeModulesMap=function(){this.nodeModulesMap=Object.create(null);for(var i=0,p=this.options.nodeModules;i<p.length;i++){var s=p[i];this.nodeModulesMap[s]=!0}},a.prototype._createSortedPathsRules=function(){var i=this;this.sortedPathsRules=[],f.Utilities.forEachProperty(this.options.paths,function(p,s){Array.isArray(s)?i.sortedPathsRules.push({from:p,to:s}):i.sortedPathsRules.push({from:p,to:[s]})}),this.sortedPathsRules.sort(function(p,s){return s.from.length-p.from.length})},a.prototype.cloneAndMerge=function(i){return new a(this._env,h.mergeConfigurationOptions(i,this.options))},a.prototype.getOptionsLiteral=function(){return this.options},a.prototype._applyPaths=function(i){for(var p,s=0,e=this.sortedPathsRules.length;s<e;s++)if(p=this.sortedPathsRules[s],f.Utilities.startsWith(i,p.from)){for(var t=[],r=0,n=p.to.length;r<n;r++)t.push(p.to[r]+i.substr(p.from.length));return t}return[i]},a.prototype._addUrlArgsToUrl=function(i){return f.Utilities.containsQueryString(i)?i+"&"+this.options.urlArgs:i+"?"+this.options.urlArgs},a.prototype._addUrlArgsIfNecessaryToUrl=function(i){return this.options.urlArgs?this._addUrlArgsToUrl(i):i},a.prototype._addUrlArgsIfNecessaryToUrls=function(i){if(this.options.urlArgs)for(var p=0,s=i.length;p<s;p++)i[p]=this._addUrlArgsToUrl(i[p]);return i},a.prototype.moduleIdToPaths=function(i){var p=this.nodeModulesMap[i]===!0||this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(i);if(p)return this.isBuild()?["empty:"]:["node|"+i];var s=i,e;if(!f.Utilities.endsWith(s,".js")&&!f.Utilities.isAbsolutePath(s)){e=this._applyPaths(s);for(var t=0,r=e.length;t<r;t++)this.isBuild()&&e[t]==="empty:"||(f.Utilities.isAbsolutePath(e[t])||(e[t]=this.options.baseUrl+e[t]),!f.Utilities.endsWith(e[t],".js")&&!f.Utilities.containsQueryString(e[t])&&(e[t]=e[t]+".js"))}else!f.Utilities.endsWith(s,".js")&&!f.Utilities.containsQueryString(s)&&(s=s+".js"),e=[s];return this._addUrlArgsIfNecessaryToUrls(e)},a.prototype.requireToUrl=function(i){var p=i;return f.Utilities.isAbsolutePath(p)||(p=this._applyPaths(p)[0],f.Utilities.isAbsolutePath(p)||(p=this.options.baseUrl+p)),this._addUrlArgsIfNecessaryToUrl(p)},a.prototype.isBuild=function(){return this.options.isBuild},a.prototype.isDuplicateMessageIgnoredFor=function(i){return this.ignoreDuplicateModulesMap.hasOwnProperty(i)},a.prototype.getConfigForModule=function(i){if(this.options.config)return this.options.config[i]},a.prototype.shouldCatchError=function(){return this.options.catchError},a.prototype.shouldRecordStats=function(){return this.options.recordStats},a.prototype.onError=function(i){this.options.onError(i)},a}();f.Configuration=_})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var E=function(){function e(t){this._env=t,this._scriptLoader=null,this._callbackMap={}}return e.prototype.load=function(t,r,n,u){var o=this;if(!this._scriptLoader)if(this._env.isWebWorker)this._scriptLoader=new a;else if(this._env.isElectronRenderer){var c=t.getConfig().getOptionsLiteral().preferScriptTags;c?this._scriptLoader=new h:this._scriptLoader=new i(this._env)}else this._env.isNode?this._scriptLoader=new i(this._env):this._scriptLoader=new h;var l={callback:n,errorback:u};if(this._callbackMap.hasOwnProperty(r)){this._callbackMap[r].push(l);return}this._callbackMap[r]=[l],this._scriptLoader.load(t,r,function(){return o.triggerCallback(r)},function(d){return o.triggerErrorback(r,d)})},e.prototype.triggerCallback=function(t){var r=this._callbackMap[t];delete this._callbackMap[t];for(var n=0;n<r.length;n++)r[n].callback()},e.prototype.triggerErrorback=function(t,r){var n=this._callbackMap[t];delete this._callbackMap[t];for(var u=0;u<n.length;u++)n[u].errorback(r)},e}(),h=function(){function e(){}return e.prototype.attachListeners=function(t,r,n){var u=function(){t.removeEventListener("load",o),t.removeEventListener("error",c)},o=function(l){u(),r()},c=function(l){u(),n(l)};t.addEventListener("load",o),t.addEventListener("error",c)},e.prototype.load=function(t,r,n,u){if(/^node\|/.test(r)){var o=t.getConfig().getOptionsLiteral(),c=p(t.getRecorder(),o.nodeRequire||f.global.nodeRequire),l=r.split("|"),d=null;try{d=c(l[1])}catch(m){u(m);return}t.enqueueDefineAnonymousModule([],function(){return d}),n()}else{var v=document.createElement("script");v.setAttribute("async","async"),v.setAttribute("type","text/javascript"),this.attachListeners(v,n,u);var y=t.getConfig().getOptionsLiteral().trustedTypesPolicy;y&&(r=y.createScriptURL(r)),v.setAttribute("src",r);var g=t.getConfig().getOptionsLiteral().cspNonce;g&&v.setAttribute("nonce",g),document.getElementsByTagName("head")[0].appendChild(v)}},e}();function _(e){var t=e.getConfig().getOptionsLiteral().trustedTypesPolicy;try{var r=t?self.eval(t.createScript("","true")):new Function("true");return r.call(self),!0}catch(n){return!1}}var a=function(){function e(){this._cachedCanUseEval=null}return e.prototype._canUseEval=function(t){return this._cachedCanUseEval===null&&(this._cachedCanUseEval=_(t)),this._cachedCanUseEval},e.prototype.load=function(t,r,n,u){var o=t.getConfig().getOptionsLiteral().trustedTypesPolicy,c=/^((http:)|(https:)|(file:))/.test(r)&&r.substring(0,self.origin.length)!==self.origin;if(!c&&this._canUseEval(t)){fetch(r).then(function(l){if(l.status!==200)throw new Error(l.statusText);return l.text()}).then(function(l){l=l+`
//# sourceURL=`+r;var d=o?self.eval(o.createScript("",l)):new Function(l);d.call(self),n()}).then(void 0,u);return}try{o&&(r=o.createScriptURL(r)),importScripts(r),n()}catch(l){u(l)}},e}(),i=function(){function e(t){this._env=t,this._didInitialize=!1,this._didPatchNodeRequire=!1}return e.prototype._init=function(t){this._didInitialize||(this._didInitialize=!0,this._fs=t("fs"),this._vm=t("vm"),this._path=t("path"),this._crypto=t("crypto"))},e.prototype._initNodeRequire=function(t,r){var n=r.getConfig().getOptionsLiteral().nodeCachedData;if(!n||this._didPatchNodeRequire)return;this._didPatchNodeRequire=!0;var u=this,o=t("module");function c(l){var d=l.constructor,v=function(g){try{return l.require(g)}finally{}};return v.resolve=function(g,m){return d._resolveFilename(g,l,!1,m)},v.resolve.paths=function(g){return d._resolveLookupPaths(g,l)},v.main=process.mainModule,v.extensions=d._extensions,v.cache=d._cache,v}o.prototype._compile=function(l,d){var v=o.wrap(l.replace(/^#!.*/,"")),y=r.getRecorder(),g=u._getCachedDataPath(n,d),m={filename:d},U;try{var I=u._fs.readFileSync(g);U=I.slice(0,16),m.cachedData=I.slice(16),y.record(60,g)}catch(M){y.record(61,g)}var b=new u._vm.Script(v,m),R=b.runInThisContext(m),P=u._path.dirname(d),w=c(this),O=[this.exports,w,this,d,P,process,_commonjsGlobal,Buffer],C=R.apply(this.exports,O);return u._handleCachedData(b,v,g,!m.cachedData,r),u._verifyCachedData(b,v,g,U,r),C}},e.prototype.load=function(t,r,n,u){var o=this,c=t.getConfig().getOptionsLiteral(),l=p(t.getRecorder(),c.nodeRequire||f.global.nodeRequire),d=c.nodeInstrumenter||function(R){return R};this._init(l),this._initNodeRequire(l,t);var v=t.getRecorder();if(/^node\|/.test(r)){var y=r.split("|"),g=null;try{g=l(y[1])}catch(R){u(R);return}t.enqueueDefineAnonymousModule([],function(){return g}),n()}else{r=f.Utilities.fileUriToFilePath(this._env.isWindows,r);var m=this._path.normalize(r),U=this._getElectronRendererScriptPathOrUri(m),I=Boolean(c.nodeCachedData),b=I?this._getCachedDataPath(c.nodeCachedData,r):void 0;this._readSourceAndCachedData(m,b,v,function(R,P,w,O){if(R){u(R);return}var C;P.charCodeAt(0)===e._BOM?C=e._PREFIX+P.substring(1)+e._SUFFIX:C=e._PREFIX+P+e._SUFFIX,C=d(C,m);var M={filename:U,cachedData:w},S=o._createAndEvalScript(t,C,M,n,u);o._handleCachedData(S,C,b,I&&!w,t),o._verifyCachedData(S,C,b,O,t)})}},e.prototype._createAndEvalScript=function(t,r,n,u,o){var c=t.getRecorder();c.record(31,n.filename);var l=new this._vm.Script(r,n),d=l.runInThisContext(n),v=t.getGlobalAMDDefineFunc(),y=!1,g=function(){return y=!0,v.apply(null,arguments)};return g.amd=v.amd,d.call(f.global,t.getGlobalAMDRequireFunc(),g,n.filename,this._path.dirname(n.filename)),c.record(32,n.filename),y?u():o(new Error("Didn't receive define call in "+n.filename+"!")),l},e.prototype._getElectronRendererScriptPathOrUri=function(t){if(!this._env.isElectronRenderer)return t;var r=t.match(/^([a-z])\:(.*)/i);return r?"file:///"+(r[1].toUpperCase()+":"+r[2]).replace(/\\/g,"/"):"file://"+t},e.prototype._getCachedDataPath=function(t,r){var n=this._crypto.createHash("md5").update(r,"utf8").update(t.seed,"utf8").update(process.arch,"").digest("hex"),u=this._path.basename(r).replace(/\.js$/,"");return this._path.join(t.path,u+"-"+n+".code")},e.prototype._handleCachedData=function(t,r,n,u,o){var c=this;t.cachedDataRejected?this._fs.unlink(n,function(l){o.getRecorder().record(62,n),c._createAndWriteCachedData(t,r,n,o),l&&o.getConfig().onError(l)}):u&&this._createAndWriteCachedData(t,r,n,o)},e.prototype._createAndWriteCachedData=function(t,r,n,u){var o=this,c=Math.ceil(u.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),l=-1,d=0,v=void 0,y=function(){setTimeout(function(){v||(v=o._crypto.createHash("md5").update(r,"utf8").digest());var g=t.createCachedData();if(!(g.length===0||g.length===l||d>=5)){if(g.length<l){y();return}l=g.length,o._fs.writeFile(n,Buffer.concat([v,g]),function(m){m&&u.getConfig().onError(m),u.getRecorder().record(63,n),y()})}},c*Math.pow(4,d++))};y()},e.prototype._readSourceAndCachedData=function(t,r,n,u){if(!r)this._fs.readFile(t,{encoding:"utf8"},u);else{var o=void 0,c=void 0,l=void 0,d=2,v=function(y){y?u(y):--d==0&&u(void 0,o,c,l)};this._fs.readFile(t,{encoding:"utf8"},function(y,g){o=g,v(y)}),this._fs.readFile(r,function(y,g){!y&&g&&g.length>0?(l=g.slice(0,16),c=g.slice(16),n.record(60,r)):n.record(61,r),v()})}},e.prototype._verifyCachedData=function(t,r,n,u,o){var c=this;!u||t.cachedDataRejected||setTimeout(function(){var l=c._crypto.createHash("md5").update(r,"utf8").digest();u.equals(l)||(o.getConfig().onError(new Error("FAILED TO VERIFY CACHED DATA, deleting stale '"+n+"' now, but a RESTART IS REQUIRED")),c._fs.unlink(n,function(d){d&&o.getConfig().onError(d)}))},Math.ceil(5e3*(1+Math.random())))},e._BOM=65279,e._PREFIX="(function (require, define, __filename, __dirname) { ",e._SUFFIX=`
});`,e}();function p(e,t){if(t.__$__isRecorded)return t;var r=function(u){e.record(33,u);try{return t(u)}finally{e.record(34,u)}};return r.__$__isRecorded=!0,r}f.ensureRecordedNodeRequire=p;function s(e){return new E(e)}f.createScriptLoader=s})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var E=function(){function s(e){var t=e.lastIndexOf("/");t!==-1?this.fromModulePath=e.substr(0,t+1):this.fromModulePath=""}return s._normalizeModuleId=function(e){var t=e,r;for(r=/\/\.\//;r.test(t);)t=t.replace(r,"/");for(t=t.replace(/^\.\//g,""),r=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;r.test(t);)t=t.replace(r,"/");return t=t.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,""),t},s.prototype.resolveModule=function(e){var t=e;return f.Utilities.isAbsolutePath(t)||(f.Utilities.startsWith(t,"./")||f.Utilities.startsWith(t,"../"))&&(t=s._normalizeModuleId(this.fromModulePath+t)),t},s.ROOT=new s(""),s}();f.ModuleIdResolver=E;var h=function(){function s(e,t,r,n,u,o){this.id=e,this.strId=t,this.dependencies=r,this._callback=n,this._errorback=u,this.moduleIdResolver=o,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}return s._safeInvokeFunction=function(e,t){try{return{returnedValue:e.apply(f.global,t),producedError:null}}catch(r){return{returnedValue:null,producedError:r}}},s._invokeFactory=function(e,t,r,n){return e.isBuild()&&!f.Utilities.isAnonymousModule(t)?{returnedValue:null,producedError:null}:e.shouldCatchError()?this._safeInvokeFunction(r,n):{returnedValue:r.apply(f.global,n),producedError:null}},s.prototype.complete=function(e,t,r){this._isComplete=!0;var n=null;if(this._callback)if(typeof this._callback=="function"){e.record(21,this.strId);var u=s._invokeFactory(t,this.strId,this._callback,r);n=u.producedError,e.record(22,this.strId),!n&&typeof u.returnedValue!="undefined"&&(!this.exportsPassedIn||f.Utilities.isEmpty(this.exports))&&(this.exports=u.returnedValue)}else this.exports=this._callback;if(n){var o=f.ensureError(n);o.phase="factory",o.moduleId=this.strId,this.error=o,t.onError(o)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null},s.prototype.onDependencyError=function(e){return this._isComplete=!0,this.error=e,this._errorback?(this._errorback(e),!0):!1},s.prototype.isComplete=function(){return this._isComplete},s}();f.Module=h;var _=function(){function s(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}return s.prototype.getMaxModuleId=function(){return this._nextId},s.prototype.getModuleId=function(e){var t=this._strModuleIdToIntModuleId.get(e);return typeof t=="undefined"&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t},s.prototype.getStrModuleId=function(e){return this._intModuleIdToStrModuleId[e]},s}(),a=function(){function s(e){this.id=e}return s.EXPORTS=new s(0),s.MODULE=new s(1),s.REQUIRE=new s(2),s}();f.RegularDependency=a;var i=function(){function s(e,t,r){this.id=e,this.pluginId=t,this.pluginParam=r}return s}();f.PluginDependency=i;var p=function(){function s(e,t,r,n,u){u===void 0&&(u=0),this._env=e,this._scriptLoader=t,this._loaderAvailableTimestamp=u,this._defineFunc=r,this._requireFunc=n,this._moduleIdProvider=new _,this._config=new f.Configuration(this._env),this._hasDependencyCycle=!1,this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}return s.prototype.reset=function(){return new s(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)},s.prototype.getGlobalAMDDefineFunc=function(){return this._defineFunc},s.prototype.getGlobalAMDRequireFunc=function(){return this._requireFunc},s._findRelevantLocationInStack=function(e,t){for(var r=function(m){return m.replace(/\\/g,"/")},n=r(e),u=t.split(/\n/),o=0;o<u.length;o++){var c=u[o].match(/(.*):(\d+):(\d+)\)?$/);if(c){var l=c[1],d=c[2],v=c[3],y=Math.max(l.lastIndexOf(" ")+1,l.lastIndexOf("(")+1);if(l=l.substr(y),l=r(l),l===n){var g={line:parseInt(d,10),col:parseInt(v,10)};return g.line===1&&(g.col-="(function (require, define, __filename, __dirname) { ".length),g}}}throw new Error("Could not correlate define call site for needle "+e)},s.prototype.getBuildInfo=function(){if(!this._config.isBuild())return null;for(var e=[],t=0,r=0,n=this._modules2.length;r<n;r++){var u=this._modules2[r];if(!!u){var o=this._buildInfoPath[u.id]||null,c=this._buildInfoDefineStack[u.id]||null,l=this._buildInfoDependencies[u.id];e[t++]={id:u.strId,path:o,defineLocation:o&&c?s._findRelevantLocationInStack(o,c):null,dependencies:l,shim:null,exports:u.exports}}}return e},s.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new f.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=f.NullLoaderEventRecorder.INSTANCE),this._recorder},s.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},s.prototype.enqueueDefineAnonymousModule=function(e,t){if(this._currentAnonymousDefineCall!==null)throw new Error("Can only have one anonymous define call per script file");var r=null;this._config.isBuild()&&(r=new Error("StackLocation").stack||null),this._currentAnonymousDefineCall={stack:r,dependencies:e,callback:t}},s.prototype.defineModule=function(e,t,r,n,u,o){var c=this;o===void 0&&(o=new E(e));var l=this._moduleIdProvider.getModuleId(e);if(this._modules2[l]){this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");return}var d=new h(l,e,this._normalizeDependencies(t,o),r,n,o);this._modules2[l]=d,this._config.isBuild()&&(this._buildInfoDefineStack[l]=u,this._buildInfoDependencies[l]=(d.dependencies||[]).map(function(v){return c._moduleIdProvider.getStrModuleId(v.id)})),this._resolve(d)},s.prototype._normalizeDependency=function(e,t){if(e==="exports")return a.EXPORTS;if(e==="module")return a.MODULE;if(e==="require")return a.REQUIRE;var r=e.indexOf("!");if(r>=0){var n=t.resolveModule(e.substr(0,r)),u=t.resolveModule(e.substr(r+1)),o=this._moduleIdProvider.getModuleId(n+"!"+u),c=this._moduleIdProvider.getModuleId(n);return new i(o,c,u)}return new a(this._moduleIdProvider.getModuleId(t.resolveModule(e)))},s.prototype._normalizeDependencies=function(e,t){for(var r=[],n=0,u=0,o=e.length;u<o;u++)r[n++]=this._normalizeDependency(e[u],t);return r},s.prototype._relativeRequire=function(e,t,r,n){if(typeof t=="string")return this.synchronousRequire(t,e);this.defineModule(f.Utilities.generateAnonymousModule(),t,r,n,null,e)},s.prototype.synchronousRequire=function(e,t){t===void 0&&(t=new E(e));var r=this._normalizeDependency(e,t),n=this._modules2[r.id];if(!n)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!n.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(n.error)throw n.error;return n.exports},s.prototype.configure=function(e,t){var r=this._config.shouldRecordStats();t?this._config=new f.Configuration(this._env,e):this._config=this._config.cloneAndMerge(e),this._config.shouldRecordStats()&&!r&&(this._recorder=null)},s.prototype.getConfig=function(){return this._config},s.prototype._onLoad=function(e){if(this._currentAnonymousDefineCall!==null){var t=this._currentAnonymousDefineCall;this._currentAnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}},s.prototype._createLoadError=function(e,t){var r=this,n=this._moduleIdProvider.getStrModuleId(e),u=(this._inverseDependencies2[e]||[]).map(function(c){return r._moduleIdProvider.getStrModuleId(c)}),o=f.ensureError(t);return o.phase="loading",o.moduleId=n,o.neededBy=u,o},s.prototype._onLoadError=function(e,t){var r=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new h(e,this._moduleIdProvider.getStrModuleId(e),[],function(){},function(){},null));for(var n=[],u=0,o=this._moduleIdProvider.getMaxModuleId();u<o;u++)n[u]=!1;var c=!1,l=[];for(l.push(e),n[e]=!0;l.length>0;){var d=l.shift(),v=this._modules2[d];v&&(c=v.onDependencyError(r)||c);var y=this._inverseDependencies2[d];if(y)for(var u=0,o=y.length;u<o;u++){var g=y[u];n[g]||(l.push(g),n[g]=!0)}}c||this._config.onError(r)},s.prototype._hasDependencyPath=function(e,t){var r=this._modules2[e];if(!r)return!1;for(var n=[],u=0,o=this._moduleIdProvider.getMaxModuleId();u<o;u++)n[u]=!1;var c=[];for(c.push(r),n[e]=!0;c.length>0;){var l=c.shift(),d=l.dependencies;if(d)for(var u=0,o=d.length;u<o;u++){var v=d[u];if(v.id===t)return!0;var y=this._modules2[v.id];y&&!n[v.id]&&(n[v.id]=!0,c.push(y))}}return!1},s.prototype._findCyclePath=function(e,t,r){if(e===t||r===50)return[e];var n=this._modules2[e];if(!n)return null;var u=n.dependencies;if(u)for(var o=0,c=u.length;o<c;o++){var l=this._findCyclePath(u[o].id,t,r+1);if(l!==null)return l.push(e),l}return null},s.prototype._createRequire=function(e){var t=this,r=function(n,u,o){return t._relativeRequire(e,n,u,o)};return r.toUrl=function(n){return t._config.requireToUrl(e.resolveModule(n))},r.getStats=function(){return t.getLoaderEvents()},r.hasDependencyCycle=function(){return t._hasDependencyCycle},r.config=function(n,u){u===void 0&&(u=!1),t.configure(n,u)},r.__$__nodeRequire=f.global.nodeRequire,r},s.prototype._loadModule=function(e){var t=this;if(!(this._modules2[e]||this._knownModules2[e])){this._knownModules2[e]=!0;var r=this._moduleIdProvider.getStrModuleId(e),n=this._config.moduleIdToPaths(r),u=/^@[^\/]+\/[^\/]+$/;this._env.isNode&&(r.indexOf("/")===-1||u.test(r))&&n.push("node|"+r);var o=-1,c=function(l){if(o++,o>=n.length)t._onLoadError(e,l);else{var d=n[o],v=t.getRecorder();if(t._config.isBuild()&&d==="empty:"){t._buildInfoPath[e]=d,t.defineModule(t._moduleIdProvider.getStrModuleId(e),[],null,null,null),t._onLoad(e);return}v.record(10,d),t._scriptLoader.load(t,d,function(){t._config.isBuild()&&(t._buildInfoPath[e]=d),v.record(11,d),t._onLoad(e)},function(y){v.record(12,d),c(y)})}};c(null)}},s.prototype._loadPluginDependency=function(e,t){var r=this;if(!(this._modules2[t.id]||this._knownModules2[t.id])){this._knownModules2[t.id]=!0;var n=function(u){r.defineModule(r._moduleIdProvider.getStrModuleId(t.id),[],u,null,null)};n.error=function(u){r._config.onError(r._createLoadError(t.id,u))},e.load(t.pluginParam,this._createRequire(E.ROOT),n,this._config.getOptionsLiteral())}},s.prototype._resolve=function(e){var t=this,r=e.dependencies;if(r)for(var n=0,u=r.length;n<u;n++){var o=r[n];if(o===a.EXPORTS){e.exportsPassedIn=!0,e.unresolvedDependenciesCount--;continue}if(o===a.MODULE){e.unresolvedDependenciesCount--;continue}if(o===a.REQUIRE){e.unresolvedDependenciesCount--;continue}var c=this._modules2[o.id];if(c&&c.isComplete()){if(c.error){e.onDependencyError(c.error);return}e.unresolvedDependenciesCount--;continue}if(this._hasDependencyPath(o.id,e.id)){this._hasDependencyCycle=!0,console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(o.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");var l=this._findCyclePath(o.id,e.id,0)||[];l.reverse(),l.push(o.id),console.warn(l.map(function(y){return t._moduleIdProvider.getStrModuleId(y)}).join(` => 
`)),e.unresolvedDependenciesCount--;continue}if(this._inverseDependencies2[o.id]=this._inverseDependencies2[o.id]||[],this._inverseDependencies2[o.id].push(e.id),o instanceof i){var d=this._modules2[o.pluginId];if(d&&d.isComplete()){this._loadPluginDependency(d.exports,o);continue}var v=this._inversePluginDependencies2.get(o.pluginId);v||(v=[],this._inversePluginDependencies2.set(o.pluginId,v)),v.push(o),this._loadModule(o.pluginId);continue}this._loadModule(o.id)}e.unresolvedDependenciesCount===0&&this._onModuleComplete(e)},s.prototype._onModuleComplete=function(e){var t=this,r=this.getRecorder();if(!e.isComplete()){var n=e.dependencies,u=[];if(n)for(var o=0,c=n.length;o<c;o++){var l=n[o];if(l===a.EXPORTS){u[o]=e.exports;continue}if(l===a.MODULE){u[o]={id:e.strId,config:function(){return t._config.getConfigForModule(e.strId)}};continue}if(l===a.REQUIRE){u[o]=this._createRequire(e.moduleIdResolver);continue}var d=this._modules2[l.id];if(d){u[o]=d.exports;continue}u[o]=null}e.complete(r,this._config,u);var v=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,v)for(var o=0,c=v.length;o<c;o++){var y=v[o],g=this._modules2[y];g.unresolvedDependenciesCount--,g.unresolvedDependenciesCount===0&&this._onModuleComplete(g)}var m=this._inversePluginDependencies2.get(e.id);if(m){this._inversePluginDependencies2.delete(e.id);for(var o=0,c=m.length;o<c;o++)this._loadPluginDependency(e.exports,m[o])}}},s}();f.ModuleManager=p})(AMDLoader||(AMDLoader={}));var define,AMDLoader;(function(f){var E=new f.Environment,h=null,_=function(s,e,t){typeof s!="string"&&(t=e,e=s,s=null),(typeof e!="object"||!Array.isArray(e))&&(t=e,e=null),e||(e=["require","exports","module"]),s?h.defineModule(s,e,t,null,null):h.enqueueDefineAnonymousModule(e,t)};_.amd={jQuery:!0};var a=function(s,e){e===void 0&&(e=!1),h.configure(s,e)},i=function(){if(arguments.length===1){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0])){a(arguments[0]);return}if(typeof arguments[0]=="string")return h.synchronousRequire(arguments[0])}if((arguments.length===2||arguments.length===3)&&Array.isArray(arguments[0])){h.defineModule(f.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null);return}throw new Error("Unrecognized require call")};i.config=a,i.getConfig=function(){return h.getConfig().getOptionsLiteral()},i.reset=function(){h=h.reset()},i.getBuildInfo=function(){return h.getBuildInfo()},i.getStats=function(){return h.getLoaderEvents()},i.define=function(){return _.apply(null,arguments)};function p(){if(typeof f.global.require!="undefined"||typeof require!="undefined"){var s=f.global.require||require;if(typeof s=="function"&&typeof s.resolve=="function"){var e=f.ensureRecordedNodeRequire(h.getRecorder(),s);f.global.nodeRequire=e,i.nodeRequire=e,i.__$__nodeRequire=e}}E.isNode&&!E.isElectronRenderer?(module.exports=i,require=i):(E.isElectronRenderer||(f.global.define=_),f.global.require=i)}f.init=p,(typeof f.global.define!="function"||!f.global.define.amd)&&(h=new f.ModuleManager(E,f.createScriptLoader(E),_,i,f.Utilities.getHighPerformanceTimestamp()),typeof f.global.require!="undefined"&&typeof f.global.require!="function"&&i.config(f.global.require),define=function(){return _.apply(null,arguments)},define.amd=_.amd,typeof doNotInitLoader=="undefined"&&p())})(AMDLoader||(AMDLoader={}));

//# sourceMappingURL=../../min-maps/vs/loader.js.map