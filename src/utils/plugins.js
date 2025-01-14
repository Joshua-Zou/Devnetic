var LZString = function () { function o(o, r) { if (!t[o]) { t[o] = {}; for (var n = 0; n < o.length; n++)t[o][o.charAt(n)] = n } return t[o][r] } var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", t = {}, i = { compressToBase64: function (o) { if (null == o) return ""; var r = i._compress(o, 6, function (o) { return n.charAt(o) }); switch (r.length % 4) { default: case 0: return r; case 1: return r + "==="; case 2: return r + "=="; case 3: return r + "=" } }, decompressFromBase64: function (r) { return null == r ? "" : "" == r ? null : i._decompress(r.length, 32, function (e) { return o(n, r.charAt(e)) }) }, compressToUTF16: function (o) { return null == o ? "" : i._compress(o, 15, function (o) { return r(o + 32) }) + " " }, decompressFromUTF16: function (o) { return null == o ? "" : "" == o ? null : i._decompress(o.length, 16384, function (r) { return o.charCodeAt(r) - 32 }) }, compressToUint8Array: function (o) { for (var r = i.compress(o), n = new Uint8Array(2 * r.length), e = 0, t = r.length; t > e; e++) { var s = r.charCodeAt(e); n[2 * e] = s >>> 8, n[2 * e + 1] = s % 256 } return n }, decompressFromUint8Array: function (o) { if (null === o || void 0 === o) return i.decompress(o); for (var n = new Array(o.length / 2), e = 0, t = n.length; t > e; e++)n[e] = 256 * o[2 * e] + o[2 * e + 1]; var s = []; return n.forEach(function (o) { s.push(r(o)) }), i.decompress(s.join("")) }, compressToEncodedURIComponent: function (o) { return null == o ? "" : i._compress(o, 6, function (o) { return e.charAt(o) }) }, decompressFromEncodedURIComponent: function (r) { return null == r ? "" : "" == r ? null : (r = r.replace(/ /g, "+"), i._decompress(r.length, 32, function (n) { return o(e, r.charAt(n)) })) }, compress: function (o) { return i._compress(o, 16, function (o) { return r(o) }) }, _compress: function (o, r, n) { if (null == o) return ""; var e, t, i, s = {}, p = {}, u = "", c = "", a = "", l = 2, f = 3, h = 2, d = [], m = 0, v = 0; for (i = 0; i < o.length; i += 1)if (u = o.charAt(i), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = !0), c = a + u, Object.prototype.hasOwnProperty.call(s, c)) a = c; else { if (Object.prototype.hasOwnProperty.call(p, a)) { if (a.charCodeAt(0) < 256) { for (e = 0; h > e; e++)m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++; for (t = a.charCodeAt(0), e = 0; 8 > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } else { for (t = 1, e = 0; h > e; e++)m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0; for (t = a.charCodeAt(0), e = 0; 16 > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a] } else for (t = s[a], e = 0; h > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; l--, 0 == l && (l = Math.pow(2, h), h++), s[c] = f++, a = String(u) } if ("" !== a) { if (Object.prototype.hasOwnProperty.call(p, a)) { if (a.charCodeAt(0) < 256) { for (e = 0; h > e; e++)m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++; for (t = a.charCodeAt(0), e = 0; 8 > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } else { for (t = 1, e = 0; h > e; e++)m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0; for (t = a.charCodeAt(0), e = 0; 16 > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a] } else for (t = s[a], e = 0; h > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; l--, 0 == l && (l = Math.pow(2, h), h++) } for (t = 2, e = 0; h > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; for (; ;) { if (m <<= 1, v == r - 1) { d.push(n(m)); break } v++ } return d.join("") }, decompress: function (o) { return null == o ? "" : "" == o ? null : i._decompress(o.length, 32768, function (r) { return o.charCodeAt(r) }) }, _decompress: function (o, n, e) { var t, i, s, p, u, c, a, l, f = [], h = 4, d = 4, m = 3, v = "", w = [], A = { val: e(0), position: n, index: 1 }; for (i = 0; 3 > i; i += 1)f[i] = i; for (p = 0, c = Math.pow(2, 2), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; switch (t = p) { case 0: for (p = 0, c = Math.pow(2, 8), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; l = r(p); break; case 1: for (p = 0, c = Math.pow(2, 16), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; l = r(p); break; case 2: return "" }for (f[3] = l, s = l, w.push(l); ;) { if (A.index > o) return ""; for (p = 0, c = Math.pow(2, m), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; switch (l = p) { case 0: for (p = 0, c = Math.pow(2, 8), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; f[d++] = r(p), l = d - 1, h--; break; case 1: for (p = 0, c = Math.pow(2, 16), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; f[d++] = r(p), l = d - 1, h--; break; case 2: return w.join("") }if (0 == h && (h = Math.pow(2, m), m++), f[l]) v = f[l]; else { if (l !== d) return null; v = s + s.charAt(0) } w.push(v), f[d++] = s + v.charAt(0), h--, s = v, 0 == h && (h = Math.pow(2, m), m++) } } }; return i }(); "function" == typeof define && define.amd ? define(function () { return LZString }) : "undefined" != typeof module && null != module && (module.exports = LZString);
var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "\n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }


var downloadUrl;
if (window.isElectron) {
    downloadUrl = "https://devnetic.appdevleague.org/app/assets/plugins/"
} else {
    downloadUrl = "./assets/plugins/"
}

const codeEditorHelper = require("./codeEditor.js");
module.exports = {
    async load(pluginId) {
        if (window.pluginList && (window.pluginList[pluginId] === "loading" || window.pluginList[pluginId] === "loaded")) return "Error: plugin is currently loading/already loaded";
        if (!window.pluginList) window.pluginList = {};
        window.pluginList[pluginId] = "loading";

        var plugin;

        if (window.environment === "production") {
            plugin = await getFile("assets/plugins/"+pluginId+"/"+ pluginId+".min.js");
            if (!plugin) { delete window.pluginList[pluginId]; throw "Error: plugin " + pluginId + " not found locally!" }
        } else {
            plugin = await fetch("./assets/plugins/"+pluginId+"/"+pluginId+".min.js");
            plugin = await plugin.text();
        }

        var code = plugin
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = code;
        script.id = "plugin-" + pluginId;
        $("body").append(script);
        window.pluginList[pluginId] = "loaded";
        return true
    },
    async getCode(pluginId) {
        let plugin = await getFile("assets/plugins/"+pluginId+"/"+ pluginId+".min.js");
        if (!plugin) { delete window.pluginList[pluginId]; throw "Error: plugin " + pluginId + " not found locally!" }
        return plugin
    },
    async getVersion(pluginId) {
        let version = await getFile("assets/plugins/"+pluginId+"/VERSION.txt");
        return version
    },
    async download(pluginId, progress, done, silent) {
        var map;
        var currentProgress = 0;
        try {
            map = await fetch(downloadUrl + pluginId + "/files.map?version=" + Math.random());
            if (map.ok === false) throw "Failed to fetch"
            map = await map.json()
            for (let i in map) {
                let file = map[i];
                await fetchWithProgress(`${downloadUrl}${pluginId}/${file}`, i, map.length, progress || function () { })
            }


            done(true)
            let pluginName = this.availablePlugins().find(e => e.id == pluginId).name;
            if (!silent) {
                codeEditorHelper.showAlertModal("Successfully downloaded plugin " + pluginName, [{
                    text: "Ok", onclick: function () { codeEditorHelper.removeAlertModal(this.parentElement.parentElement.getAttribute('data-editor-alert-modal-index')) }
                }], "codicon-pass", 7)
            }
            return true;
        } catch (err) {
            codeEditorHelper.showAlertModal("We couldn't download the plugin! Check your internet connection and try again", [{
                text: "Ok", onclick: function () { codeEditorHelper.removeAlertModal(this.parentElement.parentElement.getAttribute('data-editor-alert-modal-index')) }
            }], "codicon-error")
            if (done) done("failed")
            return false;
        }
    },
    unload(pluginId) {
        var element = document.getElementById("plugin-" + pluginId)
        if (!element) throw "Error: plugin " + pluginId + " was never loaded"
        element.remove()
        delete window.pluginList[pluginId];
    },
    async remove(pluginId) {
        //localStorage.removeItem("plugin::" + pluginId);
        let fileMap = await getFile("assets/plugins/" + pluginId + "/files.map")
        fileMap = JSON.parse(fileMap)
        fileMap.forEach(file => {
            console.log("Deleting file: " + file)
            deleteFile(`assets/plugins/${pluginId}/${file}`)
        })


        let pluginName = this.availablePlugins().find(e => e.id == pluginId).name;
        codeEditorHelper.showAlertModal("Successfully removed plugin " + pluginName, [{
            text: "Ok", onclick: function () { codeEditorHelper.removeAlertModal(this.parentElement.parentElement.getAttribute('data-editor-alert-modal-index')) }
        }], "codicon-pass", 4)
    },
    availablePlugins() {
        // this function does NOT return the plugins that are already downloaded, but instead returns all plugins that are available for download! (including ones that are downloaded)
        return [
            {
                name: "Resizable Editor",
                description: "This plugin allows you to resize the editor window, as well as re-arange the tabs.",
                image: "./assets/plugins/betterEditor/betterEditor.png",
                id: "betterEditor",
                onInstall: "plugins.load(\"betterEditor\").then(() => updateEditorSettings({dividerPosition: null}))",
                latestVersion: "2.4.4"
                //https://interactjs.io/
            },
            {
                name: "Pyscript",
                description: "This plugin allows you to run python in the browser!",
                image: "./assets/plugins/brython/brython.svg",
                id: "brython",
                latestVersion: "4.0.1"
            },
            // {
            //     name: "CaptCC",
            //     description: "This plugin allows you to run basic C code in the browser!",
            //     image: "./assets/plugins/captCC/captCC.svg",
            //     id: "captCC",
            //     latestVersion: "0.0.1"
            //     //https://github.com/Captainarash/CaptCC
            // },
            {
                name: "JS-CPP",
                description: "This plugin compiles C++ code to Javascript!",
                image: "./assets/plugins/jscpp/jscpp.svg",
                id: "jscpp",
                latestVersion: "0.0.1"
                //https://github.com/felixhao28/JSCPP
            },
            {
                name: "Typescript",
                description: "This plugin allows you to run typescript in the browser!",
                image: "./assets/plugins/typescript/typescript.svg",
                id: "typescript",
                latestVersion: "0.0.1"
                //https://jsfiddle.net/k78t436y/
            },
            {
                name: "Markdown",
                description: "This plugin allows you to render markdown code in the browser!",
                image: "./assets/plugins/showdown/markdown-logo.png",
                id: "showdown",
                latestVersion: "2.1.0"
            },
            {
                name: "ReactJS",
                description: "This plugin allows you to create and preview a ReactJS website!",
                image: "./assets/plugins/react/react.svg",
                id: "react",
                latestVersion: "3.1.1"
            },
            {
                name: "Perl",
                description: "This plugin allows you to run perl code directly in the browser!!",
                image: "./assets/plugins/webperl/webperl.png",
                id: "webperl",
                latestVersion: "1.0.1"
            },
            {
                name: "Hex Editor",
                description: "View and edit binary files in the code editor!",
                image: "./assets/plugins/hexy/logo.png",
                id: "hexy",
                latestVersion: "1.0.0"
            },
        ]
    },
    async checkPluginStatus(pluginId) {
        try {
            await getFile("assets/plugins/"+pluginId+"/files.map")
            return true;
        }catch(err) {
            return false;
        }
    },
    async getDownloadSize(pluginId) {
        if (!window.pluginSizes) {
            let res = await fetch("./assets/plugins/sizes.json");
            res = await res.json();
            window.pluginSizes = res;
        }
        return window.pluginSizes[pluginId];
    },
    async getOldPlugins() {
        let allPlugins = this.availablePlugins();
        let installedPlugins = [];
        let oldPlugins = [];
        var self = this;
        let promiseOperations = [];
        allPlugins.forEach(e => {
            promiseOperations.push(async function () {
                let p = await self.checkPluginStatus(e.id);
                if (p) {
                    installedPlugins.push(e)
                }
            }())
        })
        await Promise.all(promiseOperations)
        promiseOperations = []
        installedPlugins.forEach(e => {
            promiseOperations.push(async function () {
                let pluginVersion = await self.getVersion(e.id)
                if (pluginVersion !== e.latestVersion) {
                    oldPlugins.push(e)
                }
            }())
        })
        await Promise.all(promiseOperations)
        return oldPlugins;
    },
    Base64: Base64
}
function openConnection() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('tAppCache');
        request.onsuccess = (event) => {
            let db = event.target.result;
            resolve(db)
        };
        request.onupgradeneeded = (event) => {
            let db = event.target.result;

            let store = db.createObjectStore('cachedPages', {
                autoIncrement: true
            });
        };
    })
}
function getFile(file) {
    return new Promise((resolve, reject) => {
        openConnection().then(db => {
            const txn = db.transaction('cachedPages', 'readwrite');
            const store = txn.objectStore('cachedPages')
            let query = store.get(window.location.origin + window.location.pathname.replace("index.html", "") + file);
            query.onsuccess = async function (event) {
                if (!query.result) return reject("File not found!");
                var response = new Response(query.result.data, query.result.response)
                response = await response.text()
                resolve(response)

            };
            query.onerror = function (event) {
                console.log(event.target.errorCode);
            }
            txn.oncomplete = function () {
                db.close();
            };
        })
    })
}
function deleteFile(file) {
    openConnection().then(db => {
        const txn = db.transaction('cachedPages', 'readwrite');
        const store = txn.objectStore('cachedPages')
        let query = store.openKeyCursor(window.location.origin + window.location.pathname.replace("index.html", "") + file);

        query.onsuccess = function (event) {
            store.delete(event.target.result.primaryKey)
            console.log("Deleted file!")
        };
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }
        txn.oncomplete = function () {
            db.close();
        };
    })
}

function addPlugin(id, text) {
    openConnection().then(db => {
        const txn = db.transaction('Plugincode', 'readwrite');
        const store = txn.objectStore('Plugincode');
        let query = store.put({ pluginId: id, code: text });
        query.onsuccess = function (event) {
        };
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }
        txn.oncomplete = function () {
            db.close();
        };
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function fetchWithProgress(path, fileNumber, fileCount, progressCallback) {
    console.log("Starting to download file " + path)
    return new Promise(async (resolve, reject) => {
        let response = await fetch(path);
        if (response.ok === false) reject("Failed to fetch")

        const reader = response.body.getReader();

        const contentLength = +response.headers.get('Content-Length');

        let receivedLength = 0; // received that many bytes at the moment
        let chunks = []; // array of received binary chunks (comprises the body)
        while (true) {
            const { done, value } = await reader.read();

            if (done) {
                break;
            }

            chunks.push(value);
            receivedLength += value.length;
            var currentProgress = (receivedLength / contentLength / fileCount) + (fileNumber / fileCount)
            progressCallback(currentProgress)
        }
        resolve()
    })
}