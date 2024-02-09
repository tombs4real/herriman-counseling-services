(window.webpackJsonp = window.webpackJsonp || []).push([
    ["f496"], {
        "+l0x": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = "",
                    n = r.config.queryDelim ? t.split(r.config.queryDelim) : t.split("?");
                r.config.mockFormat && n[1] && (e = n[1].match(/\.[\d\w]+$/)[0], n[1] = n[1].replace(e, ""));
                var o = n[0],
                    a = n[1];
                if (!a) return [o, {}];
                for (var i = a.split("&"), s = {}, c = i.length, p = 0; p < c; p++) {
                    var u = i[p].split("="),
                        l = u[0],
                        _ = u[1];
                    s[l] = decodeURIComponent(_)
                }
                return [o, s, e]
            };
            var r = n("jYid")
        },
        "+t3Y": function(t, e, n) {
            "use strict";
            t.exports = i;
            var r = n("A/eZ"),
                o = n("nrnY");

            function a(t, e) {
                var n = this._transformState;
                n.transforming = !1;
                var r = n.writecb;
                if (!r) return this.emit("error", new Error("write callback called multiple times"));
                n.writechunk = null, n.writecb = null, null != e && this.push(e), r(t);
                var o = this._readableState;
                o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
            }

            function i(t) {
                if (!(this instanceof i)) return new i(t);
                r.call(this, t), this._transformState = {
                    afterTransform: a.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", s)
            }

            function s() {
                var t = this;
                "function" == typeof this._flush ? this._flush((function(e, n) {
                    c(t, e, n)
                })) : c(this, null, null)
            }

            function c(t, e, n) {
                if (e) return t.emit("error", e);
                if (null != n && t.push(n), t._writableState.length) throw new Error("Calling transform done when ws.length != 0");
                if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
                return t.push(null)
            }
            o.inherits = n("wfEq"), o.inherits(i, r), i.prototype.push = function(t, e) {
                return this._transformState.needTransform = !1, r.prototype.push.call(this, t, e)
            }, i.prototype._transform = function(t, e, n) {
                throw new Error("_transform() is not implemented")
            }, i.prototype._write = function(t, e, n) {
                var r = this._transformState;
                if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
                    var o = this._readableState;
                    (r.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                }
            }, i.prototype._read = function(t) {
                var e = this._transformState;
                null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
            }, i.prototype._destroy = function(t, e) {
                var n = this;
                r.prototype._destroy.call(this, t, (function(t) {
                    e(t), n.emit("close")
                }))
            }
        },
        10: function(t, e) {},
        11: function(t, e) {},
        12: function(t, e) {},
        "1bJ0": function(t, e, n) {
            (function(r) {
                function o() {
                    var t;
                    try {
                        t = e.storage.debug
                    } catch (t) {}
                    return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t
                }(e = t.exports = n("FDyG")).log = function() {
                    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }, e.formatArgs = function(t) {
                    var n = this.useColors;
                    if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
                        var r = "color: " + this.color;
                        t.splice(1, 0, r, "color: inherit");
                        var o = 0,
                            a = 0;
                        t[0].replace(/%[a-zA-Z%]/g, (function(t) {
                            "%%" !== t && (o++, "%c" === t && (a = o))
                        })), t.splice(a, 0, r)
                    }
                }, e.save = function(t) {
                    try {
                        null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                    } catch (t) {}
                }, e.load = o, e.useColors = function() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                    try {
                        return window.localStorage
                    } catch (t) {}
                }(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) {
                    try {
                        return JSON.stringify(t)
                    } catch (t) {
                        return "[UnexpectedJSONParseError]: " + t.message
                    }
                }, e.enable(o())
            }).call(this, n("5IsQ"))
        },
        "1hwd": function(t, e) {
            t.exports = function() {
                for (var t = {}, e = 0; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var o in r) n.call(r, o) && (t[o] = r[o])
                }
                return t
            };
            var n = Object.prototype.hasOwnProperty
        },
        "25o0": function(t, e) {
            function n(t, e) {
                t.onload = function() {
                    this.onerror = this.onload = null, e(null, t)
                }, t.onerror = function() {
                    this.onerror = this.onload = null, e(new Error("Failed to load " + this.src), t)
                }
            }

            function r(t, e) {
                t.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, e(null, t))
                }
            }
            t.exports = function(t, e, o) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                "function" == typeof e && (o = e, e = {}), e = e || {}, o = o || function() {}, i.type = e.type || "text/javascript", i.charset = e.charset || "utf8", i.async = !("async" in e && !e.async), i.src = t, e.attrs && function(t, e) {
                    for (var n in e) t.setAttribute(n, e[n])
                }(i, e.attrs), e.text && (i.text = "" + e.text), ("onload" in i ? n : r)(i, o), i.onload || n(i, o), a.appendChild(i)
            }
        },
        "2CfY": function(t, e, n) {
            t.exports = function(t) {
                var e = {};

                function n(r) {
                    if (e[r]) return e[r].exports;
                    var o = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var o in t) n.d(r, o, function(e) {
                            return t[e]
                        }.bind(null, o));
                    return r
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, n.p = "", n(n.s = 90)
            }({
                17: function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e.default = void 0;
                    var r = n(18),
                        o = function() {
                            function t() {}
                            return t.getFirstMatch = function(t, e) {
                                var n = e.match(t);
                                return n && n.length > 0 && n[1] || ""
                            }, t.getSecondMatch = function(t, e) {
                                var n = e.match(t);
                                return n && n.length > 1 && n[2] || ""
                            }, t.matchAndReturnConst = function(t, e, n) {
                                if (t.test(e)) return n
                            }, t.getWindowsVersionName = function(t) {
                                switch (t) {
                                    case "NT":
                                        return "NT";
                                    case "XP":
                                        return "XP";
                                    case "NT 5.0":
                                        return "2000";
                                    case "NT 5.1":
                                        return "XP";
                                    case "NT 5.2":
                                        return "2003";
                                    case "NT 6.0":
                                        return "Vista";
                                    case "NT 6.1":
                                        return "7";
                                    case "NT 6.2":
                                        return "8";
                                    case "NT 6.3":
                                        return "8.1";
                                    case "NT 10.0":
                                        return "10";
                                    default:
                                        return
                                }
                            }, t.getMacOSVersionName = function(t) {
                                var e = t.split(".").splice(0, 2).map((function(t) {
                                    return parseInt(t, 10) || 0
                                }));
                                if (e.push(0), 10 === e[0]) switch (e[1]) {
                                    case 5:
                                        return "Leopard";
                                    case 6:
                                        return "Snow Leopard";
                                    case 7:
                                        return "Lion";
                                    case 8:
                                        return "Mountain Lion";
                                    case 9:
                                        return "Mavericks";
                                    case 10:
                                        return "Yosemite";
                                    case 11:
                                        return "El Capitan";
                                    case 12:
                                        return "Sierra";
                                    case 13:
                                        return "High Sierra";
                                    case 14:
                                        return "Mojave";
                                    case 15:
                                        return "Catalina";
                                    default:
                                        return
                                }
                            }, t.getAndroidVersionName = function(t) {
                                var e = t.split(".").splice(0, 2).map((function(t) {
                                    return parseInt(t, 10) || 0
                                }));
                                if (e.push(0), !(1 === e[0] && e[1] < 5)) return 1 === e[0] && e[1] < 6 ? "Cupcake" : 1 === e[0] && e[1] >= 6 ? "Donut" : 2 === e[0] && e[1] < 2 ? "Eclair" : 2 === e[0] && 2 === e[1] ? "Froyo" : 2 === e[0] && e[1] > 2 ? "Gingerbread" : 3 === e[0] ? "Honeycomb" : 4 === e[0] && e[1] < 1 ? "Ice Cream Sandwich" : 4 === e[0] && e[1] < 4 ? "Jelly Bean" : 4 === e[0] && e[1] >= 4 ? "KitKat" : 5 === e[0] ? "Lollipop" : 6 === e[0] ? "Marshmallow" : 7 === e[0] ? "Nougat" : 8 === e[0] ? "Oreo" : 9 === e[0] ? "Pie" : void 0
                            }, t.getVersionPrecision = function(t) {
                                return t.split(".").length
                            }, t.compareVersions = function(e, n, r) {
                                void 0 === r && (r = !1);
                                var o = t.getVersionPrecision(e),
                                    a = t.getVersionPrecision(n),
                                    i = Math.max(o, a),
                                    s = 0,
                                    c = t.map([e, n], (function(e) {
                                        var n = i - t.getVersionPrecision(e),
                                            r = e + new Array(n + 1).join(".0");
                                        return t.map(r.split("."), (function(t) {
                                            return new Array(20 - t.length).join("0") + t
                                        })).reverse()
                                    }));
                                for (r && (s = i - Math.min(o, a)), i -= 1; i >= s;) {
                                    if (c[0][i] > c[1][i]) return 1;
                                    if (c[0][i] === c[1][i]) {
                                        if (i === s) return 0;
                                        i -= 1
                                    } else if (c[0][i] < c[1][i]) return -1
                                }
                            }, t.map = function(t, e) {
                                var n, r = [];
                                if (Array.prototype.map) return Array.prototype.map.call(t, e);
                                for (n = 0; n < t.length; n += 1) r.push(e(t[n]));
                                return r
                            }, t.getBrowserAlias = function(t) {
                                return r.BROWSER_ALIASES_MAP[t]
                            }, t.getBrowserTypeByAlias = function(t) {
                                return r.BROWSER_MAP[t] || ""
                            }, t
                        }();
                    e.default = o, t.exports = e.default
                },
                18: function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e.ENGINE_MAP = e.OS_MAP = e.PLATFORMS_MAP = e.BROWSER_MAP = e.BROWSER_ALIASES_MAP = void 0, e.BROWSER_ALIASES_MAP = {
                        "Amazon Silk": "amazon_silk",
                        "Android Browser": "android",
                        Bada: "bada",
                        BlackBerry: "blackberry",
                        Chrome: "chrome",
                        Chromium: "chromium",
                        Epiphany: "epiphany",
                        Firefox: "firefox",
                        Focus: "focus",
                        Generic: "generic",
                        "Google Search": "google_search",
                        Googlebot: "googlebot",
                        "Internet Explorer": "ie",
                        "K-Meleon": "k_meleon",
                        Maxthon: "maxthon",
                        "Microsoft Edge": "edge",
                        "MZ Browser": "mz",
                        "NAVER Whale Browser": "naver",
                        Opera: "opera",
                        "Opera Coast": "opera_coast",
                        PhantomJS: "phantomjs",
                        Puffin: "puffin",
                        QupZilla: "qupzilla",
                        QQ: "qq",
                        QQLite: "qqlite",
                        Safari: "safari",
                        Sailfish: "sailfish",
                        "Samsung Internet for Android": "samsung_internet",
                        SeaMonkey: "seamonkey",
                        Sleipnir: "sleipnir",
                        Swing: "swing",
                        Tizen: "tizen",
                        "UC Browser": "uc",
                        Vivaldi: "vivaldi",
                        "WebOS Browser": "webos",
                        WeChat: "wechat",
                        "Yandex Browser": "yandex",
                        Roku: "roku"
                    }, e.BROWSER_MAP = {
                        amazon_silk: "Amazon Silk",
                        android: "Android Browser",
                        bada: "Bada",
                        blackberry: "BlackBerry",
                        chrome: "Chrome",
                        chromium: "Chromium",
                        epiphany: "Epiphany",
                        firefox: "Firefox",
                        focus: "Focus",
                        generic: "Generic",
                        googlebot: "Googlebot",
                        google_search: "Google Search",
                        ie: "Internet Explorer",
                        k_meleon: "K-Meleon",
                        maxthon: "Maxthon",
                        edge: "Microsoft Edge",
                        mz: "MZ Browser",
                        naver: "NAVER Whale Browser",
                        opera: "Opera",
                        opera_coast: "Opera Coast",
                        phantomjs: "PhantomJS",
                        puffin: "Puffin",
                        qupzilla: "QupZilla",
                        qq: "QQ Browser",
                        qqlite: "QQ Browser Lite",
                        safari: "Safari",
                        sailfish: "Sailfish",
                        samsung_internet: "Samsung Internet for Android",
                        seamonkey: "SeaMonkey",
                        sleipnir: "Sleipnir",
                        swing: "Swing",
                        tizen: "Tizen",
                        uc: "UC Browser",
                        vivaldi: "Vivaldi",
                        webos: "WebOS Browser",
                        wechat: "WeChat",
                        yandex: "Yandex Browser"
                    }, e.PLATFORMS_MAP = {
                        tablet: "tablet",
                        mobile: "mobile",
                        desktop: "desktop",
                        tv: "tv"
                    }, e.OS_MAP = {
                        WindowsPhone: "Windows Phone",
                        Windows: "Windows",
                        MacOS: "macOS",
                        iOS: "iOS",
                        Android: "Android",
                        WebOS: "WebOS",
                        BlackBerry: "BlackBerry",
                        Bada: "Bada",
                        Tizen: "Tizen",
                        Linux: "Linux",
                        ChromeOS: "Chrome OS",
                        PlayStation4: "PlayStation 4",
                        Roku: "Roku"
                    }, e.ENGINE_MAP = {
                        EdgeHTML: "EdgeHTML",
                        Blink: "Blink",
                        Trident: "Trident",
                        Presto: "Presto",
                        Gecko: "Gecko",
                        WebKit: "WebKit"
                    }
                },
                90: function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e.default = void 0;
                    var r, o = (r = n(91)) && r.__esModule ? r : {
                            default: r
                        },
                        a = n(18);
                    var i = function() {
                        function t() {}
                        var e;
                        return t.getParser = function(t, e) {
                            if (void 0 === e && (e = !1), "string" != typeof t) throw new Error("UserAgent should be a string");
                            return new o.default(t, e)
                        }, t.parse = function(t) {
                            return new o.default(t).getResult()
                        }, (e = [{
                            key: "BROWSER_MAP",
                            get: function() {
                                return a.BROWSER_MAP
                            }
                        }, {
                            key: "ENGINE_MAP",
                            get: function() {
                                return a.ENGINE_MAP
                            }
                        }, {
                            key: "OS_MAP",
                            get: function() {
                                return a.OS_MAP
                            }
                        }, {
                            key: "PLATFORMS_MAP",
                            get: function() {
                                return a.PLATFORMS_MAP
                            }
                        }]) && function(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }(t, e), t
                    }();
                    e.default = i, t.exports = e.default
                },
                91: function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e.default = void 0;
                    var r = c(n(92)),
                        o = c(n(93)),
                        a = c(n(94)),
                        i = c(n(95)),
                        s = c(n(17));

                    function c(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    var p = function() {
                        function t(t, e) {
                            if (void 0 === e && (e = !1), null == t || "" === t) throw new Error("UserAgent parameter can't be empty");
                            this._ua = t, this.parsedResult = {}, !0 !== e && this.parse()
                        }
                        var e = t.prototype;
                        return e.getUA = function() {
                            return this._ua
                        }, e.test = function(t) {
                            return t.test(this._ua)
                        }, e.parseBrowser = function() {
                            var t = this;
                            this.parsedResult.browser = {};
                            var e = r.default.find((function(e) {
                                if ("function" == typeof e.test) return e.test(t);
                                if (e.test instanceof Array) return e.test.some((function(e) {
                                    return t.test(e)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser
                        }, e.getBrowser = function() {
                            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                        }, e.getBrowserName = function(t) {
                            return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                        }, e.getBrowserVersion = function() {
                            return this.getBrowser().version
                        }, e.getOS = function() {
                            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                        }, e.parseOS = function() {
                            var t = this;
                            this.parsedResult.os = {};
                            var e = o.default.find((function(e) {
                                if ("function" == typeof e.test) return e.test(t);
                                if (e.test instanceof Array) return e.test.some((function(e) {
                                    return t.test(e)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os
                        }, e.getOSName = function(t) {
                            var e = this.getOS().name;
                            return t ? String(e).toLowerCase() || "" : e || ""
                        }, e.getOSVersion = function() {
                            return this.getOS().version
                        }, e.getPlatform = function() {
                            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                        }, e.getPlatformType = function(t) {
                            void 0 === t && (t = !1);
                            var e = this.getPlatform().type;
                            return t ? String(e).toLowerCase() || "" : e || ""
                        }, e.parsePlatform = function() {
                            var t = this;
                            this.parsedResult.platform = {};
                            var e = a.default.find((function(e) {
                                if ("function" == typeof e.test) return e.test(t);
                                if (e.test instanceof Array) return e.test.some((function(e) {
                                    return t.test(e)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform
                        }, e.getEngine = function() {
                            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                        }, e.getEngineName = function(t) {
                            return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                        }, e.parseEngine = function() {
                            var t = this;
                            this.parsedResult.engine = {};
                            var e = i.default.find((function(e) {
                                if ("function" == typeof e.test) return e.test(t);
                                if (e.test instanceof Array) return e.test.some((function(e) {
                                    return t.test(e)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine
                        }, e.parse = function() {
                            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                        }, e.getResult = function() {
                            return Object.assign({}, this.parsedResult)
                        }, e.satisfies = function(t) {
                            var e = this,
                                n = {},
                                r = 0,
                                o = {},
                                a = 0;
                            if (Object.keys(t).forEach((function(e) {
                                    var i = t[e];
                                    "string" == typeof i ? (o[e] = i, a += 1) : "object" == typeof i && (n[e] = i, r += 1)
                                })), r > 0) {
                                var i = Object.keys(n),
                                    s = i.find((function(t) {
                                        return e.isOS(t)
                                    }));
                                if (s) {
                                    var c = this.satisfies(n[s]);
                                    if (void 0 !== c) return c
                                }
                                var p = i.find((function(t) {
                                    return e.isPlatform(t)
                                }));
                                if (p) {
                                    var u = this.satisfies(n[p]);
                                    if (void 0 !== u) return u
                                }
                            }
                            if (a > 0) {
                                var l = Object.keys(o).find((function(t) {
                                    return e.isBrowser(t, !0)
                                }));
                                if (void 0 !== l) return this.compareVersion(o[l])
                            }
                        }, e.isBrowser = function(t, e) {
                            void 0 === e && (e = !1);
                            var n = this.getBrowserName().toLowerCase(),
                                r = t.toLowerCase(),
                                o = s.default.getBrowserTypeByAlias(r);
                            return e && o && (r = o.toLowerCase()), r === n
                        }, e.compareVersion = function(t) {
                            var e = [0],
                                n = t,
                                r = !1,
                                o = this.getBrowserVersion();
                            if ("string" == typeof o) return ">" === t[0] || "<" === t[0] ? (n = t.substr(1), "=" === t[1] ? (r = !0, n = t.substr(2)) : e = [], ">" === t[0] ? e.push(1) : e.push(-1)) : "=" === t[0] ? n = t.substr(1) : "~" === t[0] && (r = !0, n = t.substr(1)), e.indexOf(s.default.compareVersions(o, n, r)) > -1
                        }, e.isOS = function(t) {
                            return this.getOSName(!0) === String(t).toLowerCase()
                        }, e.isPlatform = function(t) {
                            return this.getPlatformType(!0) === String(t).toLowerCase()
                        }, e.isEngine = function(t) {
                            return this.getEngineName(!0) === String(t).toLowerCase()
                        }, e.is = function(t) {
                            return this.isBrowser(t) || this.isOS(t) || this.isPlatform(t)
                        }, e.some = function(t) {
                            var e = this;
                            return void 0 === t && (t = []), t.some((function(t) {
                                return e.is(t)
                            }))
                        }, t
                    }();
                    e.default = p, t.exports = e.default
                },
                92: function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e.default = void 0;
                    var r, o = (r = n(17)) && r.__esModule ? r : {
                            default: r
                        },
                        a = /version\/(\d+(\.?_?\d+)+)/i,
                        i = [{
                            test: [/googlebot/i],
                            describe: function(t) {
                                var e = {
                                        name: "Googlebot"
                                    },
                                    n = o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/opera/i],
                            describe: function(t) {
                                var e = {
                                        name: "Opera"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:opera)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/opr\/|opios/i],
                            describe: function(t) {
                                var e = {
                                        name: "Opera"
                                    },
                                    n = o.default.getFirstMatch(/(?:opr|opios)[\s\/](\S+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/SamsungBrowser/i],
                            describe: function(t) {
                                var e = {
                                        name: "Samsung Internet for Android"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/Whale/i],
                            describe: function(t) {
                                var e = {
                                        name: "NAVER Whale Browser"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/MZBrowser/i],
                            describe: function(t) {
                                var e = {
                                        name: "MZ Browser"
                                    },
                                    n = o.default.getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/focus/i],
                            describe: function(t) {
                                var e = {
                                        name: "Focus"
                                    },
                                    n = o.default.getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/swing/i],
                            describe: function(t) {
                                var e = {
                                        name: "Swing"
                                    },
                                    n = o.default.getFirstMatch(/(?:swing)[\s\/](\d+(?:\.\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/coast/i],
                            describe: function(t) {
                                var e = {
                                        name: "Opera Coast"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:coast)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/yabrowser/i],
                            describe: function(t) {
                                var e = {
                                        name: "Yandex Browser"
                                    },
                                    n = o.default.getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/ucbrowser/i],
                            describe: function(t) {
                                var e = {
                                        name: "UC Browser"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:ucbrowser)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/Maxthon|mxios/i],
                            describe: function(t) {
                                var e = {
                                        name: "Maxthon"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:Maxthon|mxios)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/epiphany/i],
                            describe: function(t) {
                                var e = {
                                        name: "Epiphany"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:epiphany)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/puffin/i],
                            describe: function(t) {
                                var e = {
                                        name: "Puffin"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:puffin)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/sleipnir/i],
                            describe: function(t) {
                                var e = {
                                        name: "Sleipnir"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:sleipnir)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/k-meleon/i],
                            describe: function(t) {
                                var e = {
                                        name: "K-Meleon"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/(?:k-meleon)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/micromessenger/i],
                            describe: function(t) {
                                var e = {
                                        name: "WeChat"
                                    },
                                    n = o.default.getFirstMatch(/(?:micromessenger)[\s\/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/qqbrowser/i],
                            describe: function(t) {
                                var e = {
                                        name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
                                    },
                                    n = o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[\/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/msie|trident/i],
                            describe: function(t) {
                                var e = {
                                        name: "Internet Explorer"
                                    },
                                    n = o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/\sedg\//i],
                            describe: function(t) {
                                var e = {
                                        name: "Microsoft Edge"
                                    },
                                    n = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/edg([ea]|ios)/i],
                            describe: function(t) {
                                var e = {
                                        name: "Microsoft Edge"
                                    },
                                    n = o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/vivaldi/i],
                            describe: function(t) {
                                var e = {
                                        name: "Vivaldi"
                                    },
                                    n = o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/seamonkey/i],
                            describe: function(t) {
                                var e = {
                                        name: "SeaMonkey"
                                    },
                                    n = o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/sailfish/i],
                            describe: function(t) {
                                var e = {
                                        name: "Sailfish"
                                    },
                                    n = o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/silk/i],
                            describe: function(t) {
                                var e = {
                                        name: "Amazon Silk"
                                    },
                                    n = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/phantom/i],
                            describe: function(t) {
                                var e = {
                                        name: "PhantomJS"
                                    },
                                    n = o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/slimerjs/i],
                            describe: function(t) {
                                var e = {
                                        name: "SlimerJS"
                                    },
                                    n = o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(t) {
                                var e = {
                                        name: "BlackBerry"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(t) {
                                var e = {
                                        name: "WebOS Browser"
                                    },
                                    n = o.default.getFirstMatch(a, t) || o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(t) {
                                var e = {
                                        name: "Bada"
                                    },
                                    n = o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(t) {
                                var e = {
                                        name: "Tizen"
                                    },
                                    n = o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/qupzilla/i],
                            describe: function(t) {
                                var e = {
                                        name: "QupZilla"
                                    },
                                    n = o.default.getFirstMatch(/(?:qupzilla)[\s\/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/firefox|iceweasel|fxios/i],
                            describe: function(t) {
                                var e = {
                                        name: "Firefox"
                                    },
                                    n = o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s\/](\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/chromium/i],
                            describe: function(t) {
                                var e = {
                                        name: "Chromium"
                                    },
                                    n = o.default.getFirstMatch(/(?:chromium)[\s\/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/chrome|crios|crmo/i],
                            describe: function(t) {
                                var e = {
                                        name: "Chrome"
                                    },
                                    n = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/GSA/i],
                            describe: function(t) {
                                var e = {
                                        name: "Google Search"
                                    },
                                    n = o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: function(t) {
                                var e = !t.test(/like android/i),
                                    n = t.test(/android/i);
                                return e && n
                            },
                            describe: function(t) {
                                var e = {
                                        name: "Android Browser"
                                    },
                                    n = o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/playstation 4/i],
                            describe: function(t) {
                                var e = {
                                        name: "PlayStation 4"
                                    },
                                    n = o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/safari|applewebkit/i],
                            describe: function(t) {
                                var e = {
                                        name: "Safari"
                                    },
                                    n = o.default.getFirstMatch(a, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/.*/i],
                            describe: function(t) {
                                var e = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                return {
                                    name: o.default.getFirstMatch(e, t),
                                    version: o.default.getSecondMatch(e, t)
                                }
                            }
                        }];
                    e.default = i, t.exports = e.default
                },
                93: function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e.default = void 0;
                    var r, o = (r = n(17)) && r.__esModule ? r : {
                            default: r
                        },
                        a = n(18),
                        i = [{
                            test: [/Roku\/DVP/],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                                return {
                                    name: a.OS_MAP.Roku,
                                    version: e
                                }
                            }
                        }, {
                            test: [/windows phone/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                                return {
                                    name: a.OS_MAP.WindowsPhone,
                                    version: e
                                }
                            }
                        }, {
                            test: [/windows/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
                                    n = o.default.getWindowsVersionName(e);
                                return {
                                    name: a.OS_MAP.Windows,
                                    version: e,
                                    versionName: n
                                }
                            }
                        }, {
                            test: [/macintosh/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."),
                                    n = o.default.getMacOSVersionName(e),
                                    r = {
                                        name: a.OS_MAP.MacOS,
                                        version: e
                                    };
                                return n && (r.versionName = n), r
                            }
                        }, {
                            test: [/(ipod|iphone|ipad)/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                                return {
                                    name: a.OS_MAP.iOS,
                                    version: e
                                }
                            }
                        }, {
                            test: function(t) {
                                var e = !t.test(/like android/i),
                                    n = t.test(/android/i);
                                return e && n
                            },
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/android[\s\/-](\d+(\.\d+)*)/i, t),
                                    n = o.default.getAndroidVersionName(e),
                                    r = {
                                        name: a.OS_MAP.Android,
                                        version: e
                                    };
                                return n && (r.versionName = n), r
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
                                    n = {
                                        name: a.OS_MAP.WebOS
                                    };
                                return e && e.length && (n.version = e), n
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || o.default.getFirstMatch(/\bbb(\d+)/i, t);
                                return {
                                    name: a.OS_MAP.BlackBerry,
                                    version: e
                                }
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                                return {
                                    name: a.OS_MAP.Bada,
                                    version: e
                                }
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i, t);
                                return {
                                    name: a.OS_MAP.Tizen,
                                    version: e
                                }
                            }
                        }, {
                            test: [/linux/i],
                            describe: function() {
                                return {
                                    name: a.OS_MAP.Linux
                                }
                            }
                        }, {
                            test: [/CrOS/],
                            describe: function() {
                                return {
                                    name: a.OS_MAP.ChromeOS
                                }
                            }
                        }, {
                            test: [/PlayStation 4/],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/PlayStation 4[\/\s](\d+(\.\d+)*)/i, t);
                                return {
                                    name: a.OS_MAP.PlayStation4,
                                    version: e
                                }
                            }
                        }];
                    e.default = i, t.exports = e.default
                },
                94: function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e.default = void 0;
                    var r, o = (r = n(17)) && r.__esModule ? r : {
                            default: r
                        },
                        a = n(18),
                        i = [{
                            test: [/googlebot/i],
                            describe: function() {
                                return {
                                    type: "bot",
                                    vendor: "Google"
                                }
                            }
                        }, {
                            test: [/huawei/i],
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/(can-l01)/i, t) && "Nova",
                                    n = {
                                        type: a.PLATFORMS_MAP.mobile,
                                        vendor: "Huawei"
                                    };
                                return e && (n.model = e), n
                            }
                        }, {
                            test: [/nexus\s*(?:7|8|9|10).*/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Nexus"
                                }
                            }
                        }, {
                            test: [/ipad/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Apple",
                                    model: "iPad"
                                }
                            }
                        }, {
                            test: [/kftt build/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Amazon",
                                    model: "Kindle Fire HD 7"
                                }
                            }
                        }, {
                            test: [/silk/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Amazon"
                                }
                            }
                        }, {
                            test: [/tablet(?! pc)/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet
                                }
                            }
                        }, {
                            test: function(t) {
                                var e = t.test(/ipod|iphone/i),
                                    n = t.test(/like (ipod|iphone)/i);
                                return e && !n
                            },
                            describe: function(t) {
                                var e = o.default.getFirstMatch(/(ipod|iphone)/i, t);
                                return {
                                    type: a.PLATFORMS_MAP.mobile,
                                    vendor: "Apple",
                                    model: e
                                }
                            }
                        }, {
                            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile,
                                    vendor: "Nexus"
                                }
                            }
                        }, {
                            test: [/[^-]mobi/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(t) {
                                return "blackberry" === t.getBrowserName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile,
                                    vendor: "BlackBerry"
                                }
                            }
                        }, {
                            test: function(t) {
                                return "bada" === t.getBrowserName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(t) {
                                return "windows phone" === t.getBrowserName()
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile,
                                    vendor: "Microsoft"
                                }
                            }
                        }, {
                            test: function(t) {
                                var e = Number(String(t.getOSVersion()).split(".")[0]);
                                return "android" === t.getOSName(!0) && e >= 3
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet
                                }
                            }
                        }, {
                            test: function(t) {
                                return "android" === t.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(t) {
                                return "macos" === t.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.desktop,
                                    vendor: "Apple"
                                }
                            }
                        }, {
                            test: function(t) {
                                return "windows" === t.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.desktop
                                }
                            }
                        }, {
                            test: function(t) {
                                return "linux" === t.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.desktop
                                }
                            }
                        }, {
                            test: function(t) {
                                return "playstation 4" === t.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tv
                                }
                            }
                        }, {
                            test: function(t) {
                                return "roku" === t.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tv
                                }
                            }
                        }];
                    e.default = i, t.exports = e.default
                },
                95: function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e.default = void 0;
                    var r, o = (r = n(17)) && r.__esModule ? r : {
                            default: r
                        },
                        a = n(18),
                        i = [{
                            test: function(t) {
                                return "microsoft edge" === t.getBrowserName(!0)
                            },
                            describe: function(t) {
                                if (/\sedg\//i.test(t)) return {
                                    name: a.ENGINE_MAP.Blink
                                };
                                var e = o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                                return {
                                    name: a.ENGINE_MAP.EdgeHTML,
                                    version: e
                                }
                            }
                        }, {
                            test: [/trident/i],
                            describe: function(t) {
                                var e = {
                                        name: a.ENGINE_MAP.Trident
                                    },
                                    n = o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: function(t) {
                                return t.test(/presto/i)
                            },
                            describe: function(t) {
                                var e = {
                                        name: a.ENGINE_MAP.Presto
                                    },
                                    n = o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: function(t) {
                                var e = t.test(/gecko/i),
                                    n = t.test(/like gecko/i);
                                return e && !n
                            },
                            describe: function(t) {
                                var e = {
                                        name: a.ENGINE_MAP.Gecko
                                    },
                                    n = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }, {
                            test: [/(apple)?webkit\/537\.36/i],
                            describe: function() {
                                return {
                                    name: a.ENGINE_MAP.Blink
                                }
                            }
                        }, {
                            test: [/(apple)?webkit/i],
                            describe: function(t) {
                                var e = {
                                        name: a.ENGINE_MAP.WebKit
                                    },
                                    n = o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                                return n && (e.version = n), e
                            }
                        }];
                    e.default = i, t.exports = e.default
                }
            })
        },
        "2Fjn": function(t, e, n) {
            "use strict";
            var r = n("s4hn"),
                o = n.n(r),
                a = n("1qCV"),
                i = n.n(a);

            function s(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        a = i()(t);
                    for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (o.a) {
                    var s = o()(t);
                    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            n.d(e, "a", (function() {
                return s
            }))
        },
        "2rXV": function(t, e, n) {
            "use strict";
            var r = function() {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if (void 0 !== r) return r;
                throw new Error("unable to locate global object")
            }();
            t.exports = e = r.fetch, e.default = r.fetch.bind(r), e.Headers = r.Headers, e.Request = r.Request, e.Response = r.Response
        },
        "3mKH": function(t, e, n) {
            (function(t, r, o) {
                var a = n("eoLT"),
                    i = n("wfEq"),
                    s = n("5Ekh"),
                    c = e.readyStates = {
                        UNSENT: 0,
                        OPENED: 1,
                        HEADERS_RECEIVED: 2,
                        LOADING: 3,
                        DONE: 4
                    },
                    p = e.IncomingMessage = function(e, n, i, c) {
                        var p = this;
                        if (s.Readable.call(p), p._mode = i, p.headers = {}, p.rawHeaders = [], p.trailers = {}, p.rawTrailers = [], p.on("end", (function() {
                                t.nextTick((function() {
                                    p.emit("close")
                                }))
                            })), "fetch" === i) {
                            if (p._fetchResponse = n, p.url = n.url, p.statusCode = n.status, p.statusMessage = n.statusText, n.headers.forEach((function(t, e) {
                                    p.headers[e.toLowerCase()] = t, p.rawHeaders.push(e, t)
                                })), a.writableStream) {
                                var u = new WritableStream({
                                    write: function(t) {
                                        return new Promise((function(e, n) {
                                            p._destroyed ? n() : p.push(new r(t)) ? e() : p._resumeFetch = e
                                        }))
                                    },
                                    close: function() {
                                        o.clearTimeout(c), p._destroyed || p.push(null)
                                    },
                                    abort: function(t) {
                                        p._destroyed || p.emit("error", t)
                                    }
                                });
                                try {
                                    return void n.body.pipeTo(u).catch((function(t) {
                                        o.clearTimeout(c), p._destroyed || p.emit("error", t)
                                    }))
                                } catch (t) {}
                            }
                            var l = n.body.getReader();
                            ! function t() {
                                l.read().then((function(e) {
                                    if (!p._destroyed) {
                                        if (e.done) return o.clearTimeout(c), void p.push(null);
                                        p.push(new r(e.value)), t()
                                    }
                                })).catch((function(t) {
                                    o.clearTimeout(c), p._destroyed || p.emit("error", t)
                                }))
                            }()
                        } else if (p._xhr = e, p._pos = 0, p.url = e.responseURL, p.statusCode = e.status, p.statusMessage = e.statusText, e.getAllResponseHeaders().split(/\r?\n/).forEach((function(t) {
                                var e = t.match(/^([^:]+):\s*(.*)/);
                                if (e) {
                                    var n = e[1].toLowerCase();
                                    "set-cookie" === n ? (void 0 === p.headers[n] && (p.headers[n] = []), p.headers[n].push(e[2])) : void 0 !== p.headers[n] ? p.headers[n] += ", " + e[2] : p.headers[n] = e[2], p.rawHeaders.push(e[1], e[2])
                                }
                            })), p._charset = "x-user-defined", !a.overrideMimeType) {
                            var _ = p.rawHeaders["mime-type"];
                            if (_) {
                                var f = _.match(/;\s*charset=([^;])(;|$)/);
                                f && (p._charset = f[1].toLowerCase())
                            }
                            p._charset || (p._charset = "utf-8")
                        }
                    };
                i(p, s.Readable), p.prototype._read = function() {
                    var t = this._resumeFetch;
                    t && (this._resumeFetch = null, t())
                }, p.prototype._onXHRProgress = function() {
                    var t = this,
                        e = t._xhr,
                        n = null;
                    switch (t._mode) {
                        case "text:vbarray":
                            if (e.readyState !== c.DONE) break;
                            try {
                                n = new o.VBArray(e.responseBody).toArray()
                            } catch (t) {}
                            if (null !== n) {
                                t.push(new r(n));
                                break
                            }
                        case "text":
                            try {
                                n = e.responseText
                            } catch (e) {
                                t._mode = "text:vbarray";
                                break
                            }
                            if (n.length > t._pos) {
                                var a = n.substr(t._pos);
                                if ("x-user-defined" === t._charset) {
                                    for (var i = new r(a.length), s = 0; s < a.length; s++) i[s] = 255 & a.charCodeAt(s);
                                    t.push(i)
                                } else t.push(a, t._charset);
                                t._pos = n.length
                            }
                            break;
                        case "arraybuffer":
                            if (e.readyState !== c.DONE || !e.response) break;
                            n = e.response, t.push(new r(new Uint8Array(n)));
                            break;
                        case "moz-chunked-arraybuffer":
                            if (n = e.response, e.readyState !== c.LOADING || !n) break;
                            t.push(new r(new Uint8Array(n)));
                            break;
                        case "ms-stream":
                            if (n = e.response, e.readyState !== c.LOADING) break;
                            var p = new o.MSStreamReader;
                            p.onprogress = function() {
                                p.result.byteLength > t._pos && (t.push(new r(new Uint8Array(p.result.slice(t._pos)))), t._pos = p.result.byteLength)
                            }, p.onload = function() {
                                t.push(null)
                            }, p.readAsArrayBuffer(n)
                    }
                    t._xhr.readyState === c.DONE && "ms-stream" !== t._mode && t.push(null)
                }
            }).call(this, n("5IsQ"), n("zkTx").Buffer, n("pCvA"))
        },
        "4RUT": function(t, e, n) {
            (function(r) {
                var o;
                ! function(a) {
                    "use strict";
                    void 0 === (o = function() {
                        return function(t) {
                            var e = t.scheduler,
                                n = null != r && "function" == typeof r.emit ? function(t, e) {
                                    return "unhandledRejection" === t ? r.emit(t, e.value, e) : r.emit(t, e)
                                } : "undefined" != typeof self && function() {
                                    if ("function" == typeof CustomEvent) try {
                                        return new CustomEvent("unhandledRejection") instanceof CustomEvent
                                    } catch (t) {}
                                    return !1
                                }() ? function(t, e) {
                                    return function(n, r) {
                                        var o = new e(n, {
                                            detail: {
                                                reason: r.value,
                                                key: r
                                            },
                                            bubbles: !1,
                                            cancelable: !0
                                        });
                                        return !t.dispatchEvent(o)
                                    }
                                }(self, CustomEvent) : "undefined" != typeof self && function() {
                                    if ("undefined" != typeof document && "function" == typeof document.createEvent) try {
                                        return document.createEvent("CustomEvent").initCustomEvent("eventType", !1, !0, {}), !0
                                    } catch (t) {}
                                    return !1
                                }() ? function(t, e) {
                                    return function(n, r) {
                                        var o = e.createEvent("CustomEvent");
                                        return o.initCustomEvent(n, !1, !0, {
                                            reason: r.value,
                                            key: r
                                        }), !t.dispatchEvent(o)
                                    }
                                }(self, document) : N,
                                o = Object.create || function(t) {
                                    function e() {}
                                    return e.prototype = t, new e
                                };

                            function a(t, e) {
                                this._handler = t === h ? e : function(t) {
                                    var e = new m;
                                    try {
                                        t((function(t) {
                                            e.resolve(t)
                                        }), n, (function(t) {
                                            e.notify(t)
                                        }))
                                    } catch (t) {
                                        n(t)
                                    }
                                    return e;

                                    function n(t) {
                                        e.reject(t)
                                    }
                                }(t)
                            }

                            function i(t) {
                                return O(t) ? t : new a(h, new w(f(t)))
                            }

                            function s(t) {
                                return new a(h, new w(new x(t)))
                            }

                            function c() {
                                return L
                            }

                            function p(t, e, n) {
                                for (var r, o = "function" == typeof e ? function(r, o, a) {
                                        a.resolved || u(n, l, r, t(e, o, r), a)
                                    } : l, i = new m, s = n.length >>> 0, c = new Array(s), p = 0; p < n.length && !i.resolved; ++p) void 0 !== (r = n[p]) || p in n ? u(n, o, p, r, i) : --s;
                                return 0 === s && i.become(new y(c)), new a(h, i);

                                function l(t, e, n) {
                                    c[t] = e, 0 == --s && n.become(new y(c))
                                }
                            }

                            function u(t, e, n, r, o) {
                                if (T(r)) {
                                    var a = function(t) {
                                            return O(t) ? t._handler.join() : d(t)
                                        }(r),
                                        i = a.state();
                                    0 === i ? a.fold(e, n, void 0, o) : i > 0 ? e(n, a.value, o) : (o.become(a), l(t, n + 1, a))
                                } else e(n, r, o)
                            }

                            function l(t, e, n) {
                                for (var r = e; r < t.length; ++r) _(f(t[r]), n)
                            }

                            function _(t, e) {
                                if (t !== e) {
                                    var n = t.state();
                                    0 === n ? t.visit(t, void 0, t._unreport) : n < 0 && t._unreport()
                                }
                            }

                            function f(t) {
                                return O(t) ? t._handler.join() : T(t) ? d(t) : new y(t)
                            }

                            function d(t) {
                                try {
                                    var e = t.then;
                                    return "function" == typeof e ? new b(e, t) : new y(t)
                                } catch (t) {
                                    return new x(t)
                                }
                            }

                            function h() {}

                            function A() {}
                            a.resolve = i, a.reject = s, a.never = c, a._defer = function() {
                                return new a(h, new m)
                            }, a._handler = f, a.prototype.then = function(t, e, n) {
                                var r = this._handler,
                                    o = r.join().state();
                                if ("function" != typeof t && o > 0 || "function" != typeof e && o < 0) return new this.constructor(h, r);
                                var a = this._beget(),
                                    i = a._handler;
                                return r.chain(i, r.receiver, t, e, n), a
                            }, a.prototype.catch = function(t) {
                                return this.then(void 0, t)
                            }, a.prototype._beget = function() {
                                return t = this._handler, new(0, this.constructor)(h, new m(t.receiver, t.join().context));
                                var t
                            }, a.all = function(t) {
                                return p(D, null, t)
                            }, a.race = function(t) {
                                return "object" != typeof t || null === t ? s(new TypeError("non-iterable passed to race()")) : 0 === t.length ? c() : 1 === t.length ? i(t[0]) : function(t) {
                                    var e, n, r, o = new m;
                                    for (e = 0; e < t.length; ++e)
                                        if (void 0 !== (n = t[e]) || e in t) {
                                            if (0 !== (r = f(n)).state()) {
                                                o.become(r), l(t, e + 1, r);
                                                break
                                            }
                                            r.visit(o, o.resolve, o.reject)
                                        }
                                    return new a(h, o)
                                }(t)
                            }, a._traverse = function(t, e) {
                                return p(Q, t, e)
                            }, a._visitRemaining = l, h.prototype.when = h.prototype.become = h.prototype.notify = h.prototype.fail = h.prototype._unreport = h.prototype._report = N, h.prototype._state = 0, h.prototype.state = function() {
                                return this._state
                            }, h.prototype.join = function() {
                                for (var t = this; void 0 !== t.handler;) t = t.handler;
                                return t
                            }, h.prototype.chain = function(t, e, n, r, o) {
                                this.when({
                                    resolver: t,
                                    receiver: e,
                                    fulfilled: n,
                                    rejected: r,
                                    progress: o
                                })
                            }, h.prototype.visit = function(t, e, n, r) {
                                this.chain(g, t, e, n, r)
                            }, h.prototype.fold = function(t, e, n, r) {
                                this.when(new B(t, e, n, r))
                            }, M(h, A), A.prototype.become = function(t) {
                                t.fail()
                            };
                            var g = new A;

                            function m(t, e) {
                                a.createContext(this, e), this.consumers = void 0, this.receiver = t, this.handler = void 0, this.resolved = !1
                            }

                            function w(t) {
                                this.handler = t
                            }

                            function b(t, n) {
                                m.call(this), e.enqueue(new C(t, n, this))
                            }

                            function y(t) {
                                a.createContext(this), this.value = t
                            }
                            M(h, m), m.prototype._state = 0, m.prototype.resolve = function(t) {
                                this.become(f(t))
                            }, m.prototype.reject = function(t) {
                                this.resolved || this.become(new x(t))
                            }, m.prototype.join = function() {
                                if (!this.resolved) return this;
                                for (var t = this; void 0 !== t.handler;)
                                    if ((t = t.handler) === this) return this.handler = new x(new TypeError("Promise cycle"));
                                return t
                            }, m.prototype.run = function() {
                                var t = this.consumers,
                                    e = this.handler;
                                this.handler = this.handler.join(), this.consumers = void 0;
                                for (var n = 0; n < t.length; ++n) e.when(t[n])
                            }, m.prototype.become = function(t) {
                                this.resolved || (this.resolved = !0, this.handler = t, void 0 !== this.consumers && e.enqueue(this), void 0 !== this.context && t._report(this.context))
                            }, m.prototype.when = function(t) {
                                this.resolved ? e.enqueue(new I(t, this.handler)) : void 0 === this.consumers ? this.consumers = [t] : this.consumers.push(t)
                            }, m.prototype.notify = function(t) {
                                this.resolved || e.enqueue(new k(t, this))
                            }, m.prototype.fail = function(t) {
                                var e = void 0 === t ? this.context : t;
                                this.resolved && this.handler.join().fail(e)
                            }, m.prototype._report = function(t) {
                                this.resolved && this.handler.join()._report(t)
                            }, m.prototype._unreport = function() {
                                this.resolved && this.handler.join()._unreport()
                            }, M(h, w), w.prototype.when = function(t) {
                                e.enqueue(new I(t, this))
                            }, w.prototype._report = function(t) {
                                this.join()._report(t)
                            }, w.prototype._unreport = function() {
                                this.join()._unreport()
                            }, M(m, b), M(h, y), y.prototype._state = 1, y.prototype.fold = function(t, e, n, r) {
                                ! function(t, e, n, r, o) {
                                    if ("function" != typeof t) return o.become(n);
                                    a.enterContext(n),
                                        function(t, e, n, r, o) {
                                            try {
                                                t.call(r, e, n, o)
                                            } catch (t) {
                                                o.become(new x(t))
                                            }
                                        }(t, e, n.value, r, o), a.exitContext()
                                }(t, e, this, n, r)
                            }, y.prototype.when = function(t) {
                                R(t.fulfilled, this, t.receiver, t.resolver)
                            };
                            var v = 0;

                            function x(t) {
                                a.createContext(this), this.id = ++v, this.value = t, this.handled = !1, this.reported = !1, this._report()
                            }

                            function E(t, e) {
                                this.rejection = t, this.context = e
                            }

                            function j(t) {
                                this.rejection = t
                            }
                            M(h, x), x.prototype._state = -1, x.prototype.fold = function(t, e, n, r) {
                                r.become(this)
                            }, x.prototype.when = function(t) {
                                "function" == typeof t.rejected && this._unreport(), R(t.rejected, this, t.receiver, t.resolver)
                            }, x.prototype._report = function(t) {
                                e.afterQueue(new E(this, t))
                            }, x.prototype._unreport = function() {
                                this.handled || (this.handled = !0, e.afterQueue(new j(this)))
                            }, x.prototype.fail = function(t) {
                                this.reported = !0, n("unhandledRejection", this), a.onFatalRejection(this, void 0 === t ? this.context : t)
                            }, E.prototype.run = function() {
                                this.rejection.handled || this.rejection.reported || (this.rejection.reported = !0, n("unhandledRejection", this.rejection) || a.onPotentiallyUnhandledRejection(this.rejection, this.context))
                            }, j.prototype.run = function() {
                                this.rejection.reported && (n("rejectionHandled", this.rejection) || a.onPotentiallyUnhandledRejectionHandled(this.rejection))
                            }, a.createContext = a.enterContext = a.exitContext = a.onPotentiallyUnhandledRejection = a.onPotentiallyUnhandledRejectionHandled = a.onFatalRejection = N;
                            var S = new h,
                                L = new a(h, S);

                            function I(t, e) {
                                this.continuation = t, this.handler = e
                            }

                            function k(t, e) {
                                this.handler = e, this.value = t
                            }

                            function C(t, e, n) {
                                this._then = t, this.thenable = e, this.resolver = n
                            }

                            function B(t, e, n, r) {
                                this.f = t, this.z = e, this.c = n, this.to = r, this.resolver = g, this.receiver = this
                            }

                            function O(t) {
                                return t instanceof a
                            }

                            function T(t) {
                                return ("object" == typeof t || "function" == typeof t) && null !== t
                            }

                            function R(t, e, n, r) {
                                if ("function" != typeof t) return r.become(e);
                                a.enterContext(e),
                                    function(t, e, n, r) {
                                        try {
                                            r.become(f(t.call(n, e)))
                                        } catch (t) {
                                            r.become(new x(t))
                                        }
                                    }(t, e.value, n, r), a.exitContext()
                            }

                            function P(t, e, n, r, o) {
                                if ("function" != typeof t) return o.notify(e);
                                a.enterContext(n),
                                    function(t, e, n, r) {
                                        try {
                                            r.notify(t.call(n, e))
                                        } catch (t) {
                                            r.notify(t)
                                        }
                                    }(t, e, r, o), a.exitContext()
                            }

                            function Q(t, e, n) {
                                try {
                                    return t(e, n)
                                } catch (t) {
                                    return s(t)
                                }
                            }

                            function M(t, e) {
                                e.prototype = o(t.prototype), e.prototype.constructor = e
                            }

                            function D(t, e) {
                                return e
                            }

                            function N() {}
                            return I.prototype.run = function() {
                                this.handler.join().when(this.continuation)
                            }, k.prototype.run = function() {
                                var t = this.handler.consumers;
                                if (void 0 !== t)
                                    for (var e, n = 0; n < t.length; ++n) P((e = t[n]).progress, this.value, this.handler, e.receiver, e.resolver)
                            }, C.prototype.run = function() {
                                var t = this.resolver;
                                ! function(t, e, n, r, o) {
                                    try {
                                        t.call(e, n, r, o)
                                    } catch (t) {
                                        r(t)
                                    }
                                }(this._then, this.thenable, (function(e) {
                                    t.resolve(e)
                                }), (function(e) {
                                    t.reject(e)
                                }), (function(e) {
                                    t.notify(e)
                                }))
                            }, B.prototype.fulfilled = function(t) {
                                this.f.call(this.c, this.z, t, this.to)
                            }, B.prototype.rejected = function(t) {
                                this.to.reject(t)
                            }, B.prototype.progress = function(t) {
                                this.to.notify(t)
                            }, a
                        }
                    }.call(e, n, e, t)) || (t.exports = o)
                }(n("Z66Z"))
            }).call(this, n("5IsQ"))
        },
        "4aJ6": function(t, e, n) {
            "use strict";
            n("iur1");
            var r = n("PAFS"),
                o = n("MBcE"),
                a = n("GGqZ"),
                i = /./.toString,
                s = function(t) {
                    n("sU/p")(RegExp.prototype, "toString", t, !0)
                };
            n("E7Vc")((function() {
                return "/a/b" != i.call({
                    source: "a",
                    flags: "b"
                })
            })) ? s((function() {
                var t = r(this);
                return "/".concat(t.source, "/", "flags" in t ? t.flags : !a && t instanceof RegExp ? o.call(t) : void 0)
            })) : "toString" != i.name && s((function() {
                return i.call(this)
            }))
        },
        "4fiG": function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    return t.tryCatchResolve = e, t;

                    function t(t, n) {
                        return arguments.length < 2 && (n = e),
                            function(e, o, a) {
                                var i = t._defer(),
                                    s = a.length;
                                return r({
                                    f: e,
                                    thisArg: o,
                                    args: a,
                                    params: new Array(s),
                                    i: s - 1,
                                    call: n
                                }, i._handler), i
                            };

                        function r(e, r) {
                            if (e.i < 0) return n(e.f, e.thisArg, e.params, r);
                            t._handler(e.args[e.i]).fold(o, e, void 0, r)
                        }

                        function o(t, e, n) {
                            t.params[t.i] = e, t.i -= 1, r(t, n)
                        }
                    }

                    function e(t, e, n, r) {
                        try {
                            r.resolve(t.apply(e, n))
                        } catch (t) {
                            r.reject(t)
                        }
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        "4lWJ": function(t, e, n) {
            n("MRte"), t.exports = n("TaGV").Object.getOwnPropertySymbols
        },
        "552i": function(t, e) {
            const n = "\n  srcSet\n  webpSrcSet\n  sizes\n  src\n\n  # size information (post-transformations)\n  width\n  height\n  aspectRatio\n\n  # SEO attributes\n  alt\n  title\n\n  # background color placeholder or...\n  bgColor\n\n  # blur-up placeholder, JPEG format, base64-encoded\n  base64\n",
                r = `query {\n  global {\n    siteTitle\n    siteDescription\n    navigationItems{\n      slug\n      title\n      mobileOnly\n    }\n    contactAddresses {\n      email\n    }\n    socialChannels {\n      id\n      url\n      channelType {\n        channelTypeValue\n        channelName\n      }\n    }\n    moreLinks {\n      id\n      slug\n      title\n    }\n    insiderBannerTitle\n    insiderBannerText\n    insiderBannerCta\n    insiderBannerLegals\n    footerDisclamer\n    downloadAppCta\n    appModuleHeader\n    appModuleSuheader\n    googlePlayUrl\n    appstoreUrl\n  }\n  homepageFeaturedShowsModule {\n    featuredShowsHeadline\n    cta\n    featuredShows {\n      id\n    }\n  }\n  allHomepageProductModules {\n    image {\n      id\n      responsiveImage(imgixParams: { ar: "1:2", auto: format, fit: crop}) {\n        ${n}\n      }\n    }\n  }\n  insiderBanner {\n    newsletterConfirmationTitle\n    newsletterConfirmationText\n  }\n  showsPage {\n    id\n    featuredShowHeadline\n    showsListHeadline\n    featuredShow {\n      id\n    }\n  }\n  allShows {\n    id\n    title\n    showsSlug\n    description\n    starring\n    desktopThumbnail {\n      responsiveImage(imgixParams: {w: 480, auto: format, fit: max}) {\n        ${n}\n      }\n    }\n    mobileThumbnail {\n      url(imgixParams: {w: "640", dpr: "1", auto: compress, fit: max})\n      responsiveImage(imgixParams: {w: 640, auto: format, fit: max}) {\n        ${n}\n      }\n    }\n    logo {\n      url\n    }\n    youtubeId {\n      providerUid\n      thumbnailUrl\n      url\n    }\n  }\n  homepage {\n    displayNewsBanner\n    newsBannerHeading\n    newsBannerLink\n    homepageModules\n  }\n  homepageHeroModule {\n    title\n    video {\n      url\n    }\n    videoPoster {\n      url(imgixParams: {w: "1440", auto: compress, fit: max})\n      responsiveImage(imgixParams: {w: 1440, auto: format, fit: max}) {\n        ${n}\n      }\n    }\n    portraitVideo {\n      url\n    }\n    portraitVideoPoster {\n      url(imgixParams: {w: "768", auto: compress, fit: max})\n      responsiveImage(imgixParams: {w: 1080, auto: format, fit: max}) {\n        ${n}\n      }\n    }\n    captions {\n      url\n    }\n    formHeader\n    endframeTitle\n    endframeText\n  }\n  allValueProps {\n    id\n    headline\n    image {\n      responsiveImage(imgixParams: {w: "400", auto: format, fit: max}) {\n        ${n}\n      }\n    }\n    landscapeImage {\n      responsiveImage(imgixParams: {w: "400", auto: format, fit: max}) {\n        ${n}\n      }\n    }\n  }\n  aboutPage {\n    title\n    ourStoryTitle\n    ourStoryText\n    ourTeamTitle\n    ourTeamText\n    ourStoryHeroImage {\n      responsiveImage(imgixParams: {w: 1200, auto: format, ar: "16:9", fit: max}) {\n        ${n}\n      }\n      alt\n    }\n  }\n  careersPage {\n    title\n    jobsCta\n    jobsUrl\n    ourTeamTitle\n    ourTeamText\n    ourTeamHeroImage {\n      responsiveImage(imgixParams: {w: 1200, auto: format, ar: "16:9", fit: max}) {\n        ${n}\n      }\n      alt\n    }\n    ourValuesTitle\n    ourValuesText\n    ourValuesCoreValues {\n      name\n      description\n      valueIcon {\n        url\n      }\n    }\n    ourValuesFooter\n  }\n  allTeamMembers {\n    fullName\n    role\n    position\n    image {\n      responsiveImage(imgixParams: {ar: "1:1", fit: crop, w: "220", auto: format, ar: "16:9", fit: max}) {\n        ${n}\n      }\n      alt\n    }\n  }\n  newsPage {\n    latestNews\n    loadMoreButton\n  }\n  cookieNotice {\n    cookieNotice\n  }\n  privacyPolicy {\n    privacyPolicy\n  }\n  termsOfService {\n    termsOfService\n  }\n  allNewsItems {\n    id\n    publicationHeadline\n    publication\n    pullQuote\n    publicationDate\n    featured\n    articleUrl\n    openGraphImage\n  }\n  allInstagramItems {\n    id\n    postUrl\n    media {\n      responsiveImage(imgixParams: {ar: "1:1", w: "420", auto: format, fit: max}) {\n        ${n}\n      }\n      alt\n    }\n  }\n  allTwitterItems {\n    id\n    profileName\n    postUrl\n    tweetDate\n    tweet\n    profilePicture {\n      responsiveImage(imgixParams: {ar: "1:1", w: "52", auto: format, fit: max}) {\n        ${n}\n      }\n    }\n  }\n  error {\n    pageNotFoundTitle\n    pageNotFoundCta\n    pageNotFoundUrl\n  }\n}`,
                o = `query($slug: String!) {\n  currentShow: allShows(filter: {showsSlug: {eq: $slug}}) {\n    id\n    title\n    description\n    showsSlug\n    videoCtaLabel\n    youtubeId {\n      providerUid\n      thumbnailUrl\n      url\n    }\n    desktopThumbnail {\n      responsiveImage(imgixParams: {w: 480, auto: format, fit: max}) {\n        ${n}\n      }\n    }\n    mobileThumbnail {\n      url(imgixParams: {w: "860", dpr: "1", auto: compress, fit: max, blur:"200"})\n      responsiveImage(imgixParams: {w: 860, auto: format, fit: max}) {\n        ${n}\n      }\n    }\n    logo {\n      url\n    }\n  }\n}`;
            t.exports = {
                fullSiteQuery: r,
                allShowsQuery: o
            }
        },
        "5Ekh": function(t, e, n) {
            (e = t.exports = n("B0Cl")).Stream = e, e.Readable = e, e.Writable = n("g+31"), e.Duplex = n("A/eZ"), e.Transform = n("+t3Y"), e.PassThrough = n("OLMR")
        },
        "5IsQ": function(t, e) {
            var n, r, o = t.exports = {};

            function a() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : a
                } catch (t) {
                    n = a
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (t) {
                    r = i
                }
            }();
            var c, p = [],
                u = !1,
                l = -1;

            function _() {
                u && c && (u = !1, c.length ? p = c.concat(p) : l = -1, p.length && f())
            }

            function f() {
                if (!u) {
                    var t = s(_);
                    u = !0;
                    for (var e = p.length; e;) {
                        for (c = p, p = []; ++l < e;) c && c[l].run();
                        l = -1, e = p.length
                    }
                    c = null, u = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function d(t, e) {
                this.fun = t, this.array = e
            }

            function h() {}
            o.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                p.push(new d(t, e)), 1 !== p.length || u || s(f)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function(t) {
                return []
            }, o.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        },
        "6jsY": function(t, e, n) {
            "use strict";
            var r = n("PL1w"),
                o = r(n("ZOIa")),
                a = r(n("U8Yc")),
                i = r(n("KBEF")),
                s = r(n("J/q3")),
                c = r(n("3esu")),
                p = r(n("8m4E")),
                u = r(n("Od8a"));
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e.default = t, e
                }(n("mXGw")),
                _ = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n("OWZz")),
                f = n("MUK1"),
                d = n("bBV7"),
                h = function(t) {
                    function e() {
                        return (0, i.default)(this, e), (0, c.default)(this, (0, p.default)(e).apply(this, arguments))
                    }
                    return (0, u.default)(e, t), (0, s.default)(e, [{
                        key: "getChildContext",
                        value: function() {
                            return {
                                router: d.makePublicRouterInstance(this.props.router)
                            }
                        }
                    }, {
                        key: "componentDidCatch",
                        value: function(t) {
                            throw t
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.router,
                                n = t.Component,
                                r = t.pageProps,
                                o = m(e);
                            return l.default.createElement(A, null, l.default.createElement(n, (0, a.default)({}, r, {
                                url: o
                            })))
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function(t) {
                            var e = t.Component,
                                n = (t.router, t.ctx);
                            try {
                                return o.default.resolve(f.loadGetInitialProps(e, n)).then((function(t) {
                                    return {
                                        pageProps: t
                                    }
                                }))
                            } catch (t) {
                                return o.default.reject(t)
                            }
                        }
                    }]), e
                }(l.Component);
            h.childContextTypes = {
                router: _.default.object
            }, e.default = h;
            var A = function(t) {
                function e() {
                    return (0, i.default)(this, e), (0, c.default)(this, (0, p.default)(e).apply(this, arguments))
                }
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "componentDidMount",
                    value: function() {
                        this.scrollToHash()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.scrollToHash()
                    }
                }, {
                    key: "scrollToHash",
                    value: function() {
                        var t = window.location.hash;
                        if (t = !!t && t.substring(1)) {
                            var e = document.getElementById(t);
                            e && setTimeout((function() {
                                return e.scrollIntoView()
                            }), 0)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.children
                    }
                }]), e
            }(l.Component);
            e.Container = A;
            var g = f.execOnce((function() {}));

            function m(t) {
                var e = t.pathname,
                    n = t.asPath,
                    r = t.query;
                return {get query() {
                        return g(), r
                    },
                    get pathname() {
                        return g(), e
                    },
                    get asPath() {
                        return g(), n
                    },
                    back: function() {
                        g(), t.back()
                    },
                    push: function(e, n) {
                        return g(), t.push(e, n)
                    },
                    pushTo: function(e, n) {
                        g();
                        var r = n ? e : null,
                            o = n || e;
                        return t.push(r, o)
                    },
                    replace: function(e, n) {
                        return g(), t.replace(e, n)
                    },
                    replaceTo: function(e, n) {
                        g();
                        var r = n ? e : null,
                            o = n || e;
                        return t.replace(r, o)
                    }
                }
            }
            e.createUrl = m
        },
        "7oMz": function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    return function(t) {
                        return t.prototype.with = t.prototype.withThis = function(t) {
                            var e = this._beget(),
                                n = e._handler;
                            return n.receiver = t, this._handler.chain(n, t), e
                        }, t
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        "8KCz": function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    return function(n) {
                        var r = n.resolve,
                            o = n.reject,
                            a = n.prototype.catch;

                        function i(t, e, n, o) {
                            var a, i = t.call(e);
                            return "object" != typeof(a = i) && "function" != typeof a || null === a ? n(o) : function(t, e, n) {
                                return r(t).then((function() {
                                    return e(n)
                                }))
                            }(i, n, o)
                        }
                        return n.prototype.done = function(t, e) {
                            this._handler.visit(this._handler.receiver, t, e)
                        }, n.prototype.catch = n.prototype.otherwise = function(e) {
                            return arguments.length < 2 ? a.call(this, e) : "function" != typeof e ? this.ensure(t) : a.call(this, (n = arguments[1], r = e, function(t) {
                                return function(t, e) {
                                    return function(t) {
                                        return t === Error || null != t && t.prototype instanceof Error
                                    }(e) ? t instanceof e : e(t)
                                }(t, r) ? n.call(this, t) : o(t)
                            }));
                            var n, r
                        }, n.prototype.finally = n.prototype.ensure = function(t) {
                            return "function" != typeof t ? this : this.then((function(n) {
                                return i(t, this, e, n)
                            }), (function(e) {
                                return i(t, this, o, e)
                            }))
                        }, n.prototype.else = n.prototype.orElse = function(t) {
                            return this.then(void 0, (function() {
                                return t
                            }))
                        }, n.prototype.yield = function(t) {
                            return this.then((function() {
                                return t
                            }))
                        }, n.prototype.tap = function(t) {
                            return this.then(t).yield(this)
                        }, n
                    };

                    function t() {
                        throw new TypeError("catch predicate must be a function")
                    }

                    function e(t) {
                        return t
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        "9lmX": function(t, e, n) {
            n("zWrT");
            var r = n("TaGV").Object;
            t.exports = function(t, e) {
                return r.getOwnPropertyDescriptor(t, e)
            }
        },
        "A/eZ": function(t, e, n) {
            "use strict";
            var r = n("upWy"),
                o = Object.keys || function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e
                };
            t.exports = l;
            var a = n("nrnY");
            a.inherits = n("wfEq");
            var i = n("B0Cl"),
                s = n("g+31");
            a.inherits(l, i);
            for (var c = o(s.prototype), p = 0; p < c.length; p++) {
                var u = c[p];
                l.prototype[u] || (l.prototype[u] = s.prototype[u])
            }

            function l(t) {
                if (!(this instanceof l)) return new l(t);
                i.call(this, t), s.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", _)
            }

            function _() {
                this.allowHalfOpen || this._writableState.ended || r.nextTick(f, this)
            }

            function f(t) {
                t.end()
            }
            Object.defineProperty(l.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(l.prototype, "destroyed", {
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(t) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
                }
            }), l.prototype._destroy = function(t, e) {
                this.push(null), this.end(), r.nextTick(e, t)
            }
        },
        ANQQ: function(t, e, n) {
            (function(e, r, o) {
                var a = n("eoLT"),
                    i = n("wfEq"),
                    s = n("3mKH"),
                    c = n("5Ekh"),
                    p = n("NY/1"),
                    u = s.IncomingMessage,
                    l = s.readyStates,
                    _ = t.exports = function(t) {
                        var n, r = this;
                        c.Writable.call(r), r._opts = t, r._body = [], r._headers = {}, t.auth && r.setHeader("Authorization", "Basic " + new e(t.auth).toString("base64")), Object.keys(t.headers).forEach((function(e) {
                            r.setHeader(e, t.headers[e])
                        }));
                        var o = !0;
                        if ("disable-fetch" === t.mode || "requestTimeout" in t && !a.abortController) o = !1, n = !0;
                        else if ("prefer-streaming" === t.mode) n = !1;
                        else if ("allow-wrong-content-type" === t.mode) n = !a.overrideMimeType;
                        else {
                            if (t.mode && "default" !== t.mode && "prefer-fast" !== t.mode) throw new Error("Invalid value for opts.mode");
                            n = !0
                        }
                        r._mode = function(t, e) {
                            return a.fetch && e ? "fetch" : a.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : a.msstream ? "ms-stream" : a.arraybuffer && t ? "arraybuffer" : a.vbArray && t ? "text:vbarray" : "text"
                        }(n, o), r._fetchTimer = null, r.on("finish", (function() {
                            r._onFinish()
                        }))
                    };
                i(_, c.Writable), _.prototype.setHeader = function(t, e) {
                    var n = t.toLowerCase(); - 1 === f.indexOf(n) && (this._headers[n] = {
                        name: t,
                        value: e
                    })
                }, _.prototype.getHeader = function(t) {
                    var e = this._headers[t.toLowerCase()];
                    return e ? e.value : null
                }, _.prototype.removeHeader = function(t) {
                    delete this._headers[t.toLowerCase()]
                }, _.prototype._onFinish = function() {
                    var t = this;
                    if (!t._destroyed) {
                        var n = t._opts,
                            i = t._headers,
                            s = null;
                        "GET" !== n.method && "HEAD" !== n.method && (s = a.arraybuffer ? p(e.concat(t._body)) : a.blobConstructor ? new r.Blob(t._body.map((function(t) {
                            return p(t)
                        })), {
                            type: (i["content-type"] || {}).value || ""
                        }) : e.concat(t._body).toString());
                        var c = [];
                        if (Object.keys(i).forEach((function(t) {
                                var e = i[t].name,
                                    n = i[t].value;
                                Array.isArray(n) ? n.forEach((function(t) {
                                    c.push([e, t])
                                })) : c.push([e, n])
                            })), "fetch" === t._mode) {
                            var u = null;
                            if (a.abortController) {
                                var _ = new AbortController;
                                u = _.signal, t._fetchAbortController = _, "requestTimeout" in n && 0 !== n.requestTimeout && (t._fetchTimer = r.setTimeout((function() {
                                    t.emit("requestTimeout"), t._fetchAbortController && t._fetchAbortController.abort()
                                }), n.requestTimeout))
                            }
                            r.fetch(t._opts.url, {
                                method: t._opts.method,
                                headers: c,
                                body: s || void 0,
                                mode: "cors",
                                credentials: n.withCredentials ? "include" : "same-origin",
                                signal: u
                            }).then((function(e) {
                                t._fetchResponse = e, t._connect()
                            }), (function(e) {
                                r.clearTimeout(t._fetchTimer), t._destroyed || t.emit("error", e)
                            }))
                        } else {
                            var f = t._xhr = new r.XMLHttpRequest;
                            try {
                                f.open(t._opts.method, t._opts.url, !0)
                            } catch (e) {
                                return void o.nextTick((function() {
                                    t.emit("error", e)
                                }))
                            }
                            "responseType" in f && (f.responseType = t._mode.split(":")[0]), "withCredentials" in f && (f.withCredentials = !!n.withCredentials), "text" === t._mode && "overrideMimeType" in f && f.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in n && (f.timeout = n.requestTimeout, f.ontimeout = function() {
                                t.emit("requestTimeout")
                            }), c.forEach((function(t) {
                                f.setRequestHeader(t[0], t[1])
                            })), t._response = null, f.onreadystatechange = function() {
                                switch (f.readyState) {
                                    case l.LOADING:
                                    case l.DONE:
                                        t._onXHRProgress()
                                }
                            }, "moz-chunked-arraybuffer" === t._mode && (f.onprogress = function() {
                                t._onXHRProgress()
                            }), f.onerror = function() {
                                t._destroyed || t.emit("error", new Error("XHR error"))
                            };
                            try {
                                f.send(s)
                            } catch (e) {
                                return void o.nextTick((function() {
                                    t.emit("error", e)
                                }))
                            }
                        }
                    }
                }, _.prototype._onXHRProgress = function() {
                    (function(t) {
                        try {
                            var e = t.status;
                            return null !== e && 0 !== e
                        } catch (t) {
                            return !1
                        }
                    })(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress())
                }, _.prototype._connect = function() {
                    var t = this;
                    t._destroyed || (t._response = new u(t._xhr, t._fetchResponse, t._mode, t._fetchTimer), t._response.on("error", (function(e) {
                        t.emit("error", e)
                    })), t.emit("response", t._response))
                }, _.prototype._write = function(t, e, n) {
                    this._body.push(t), n()
                }, _.prototype.abort = _.prototype.destroy = function() {
                    this._destroyed = !0, r.clearTimeout(this._fetchTimer), this._response && (this._response._destroyed = !0), this._xhr ? this._xhr.abort() : this._fetchAbortController && this._fetchAbortController.abort()
                }, _.prototype.end = function(t, e, n) {
                    "function" == typeof t && (n = t, t = void 0), c.Writable.prototype.end.call(this, t, e, n)
                }, _.prototype.flushHeaders = function() {}, _.prototype.setTimeout = function() {}, _.prototype.setNoDelay = function() {}, _.prototype.setSocketKeepAlive = function() {};
                var f = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
            }).call(this, n("zkTx").Buffer, n("pCvA"), n("5IsQ"))
        },
        Ax1p: function(t, e, n) {
            (function(e) {
                ! function(e) {
                    "use strict";
                    var n = {
                        newline: /^\n+/,
                        code: /^( {4}[^\n]+\n*)+/,
                        fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                        heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
                        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                        html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                        nptable: A,
                        table: A,
                        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
                        text: /^[^\n]+/
                    };

                    function r(t) {
                        this.tokens = [], this.tokens.links = Object.create(null), this.options = t || v.defaults, this.rules = n.normal, this.options.pedantic ? this.rules = n.pedantic : this.options.gfm && (this.rules = n.gfm)
                    }
                    n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, n.def = _(n.def).replace("label", n._label).replace("title", n._title).getRegex(), n.bullet = /(?:[*+-]|\d{1,9}\.)/, n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, n.item = _(n.item, "gm").replace(/bull/g, n.bullet).getRegex(), n.list = _(n.list).replace(/bull/g, n.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + n.def.source + ")").getRegex(), n._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", n._comment = /<!--(?!-?>)[\s\S]*?-->/, n.html = _(n.html, "i").replace("comment", n._comment).replace("tag", n._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), n.paragraph = _(n._paragraph).replace("hr", n.hr).replace("heading", " {0,3}#{1,6} +").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", n._tag).getRegex(), n.blockquote = _(n.blockquote).replace("paragraph", n.paragraph).getRegex(), n.normal = g({}, n), n.gfm = g({}, n.normal, {
                        nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                        table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
                    }), n.pedantic = g({}, n.normal, {
                        html: _("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", n._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                        fences: A,
                        paragraph: _(n.normal._paragraph).replace("hr", n.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", n.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
                    }), r.rules = n, r.lex = function(t, e) {
                        return new r(e).lex(t)
                    }, r.prototype.lex = function(t) {
                        return t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(t, !0)
                    }, r.prototype.token = function(t, e) {
                        var r, o, a, i, s, c, p, l, _, f, d, h, A, g, b, y;
                        for (t = t.replace(/^ +$/gm, ""); t;)
                            if ((a = this.rules.newline.exec(t)) && (t = t.substring(a[0].length), a[0].length > 1 && this.tokens.push({
                                    type: "space"
                                })), a = this.rules.code.exec(t)) {
                                var v = this.tokens[this.tokens.length - 1];
                                t = t.substring(a[0].length), v && "paragraph" === v.type ? v.text += "\n" + a[0].trimRight() : (a = a[0].replace(/^ {4}/gm, ""), this.tokens.push({
                                    type: "code",
                                    codeBlockStyle: "indented",
                                    text: this.options.pedantic ? a : w(a, "\n")
                                }))
                            } else if (a = this.rules.fences.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "code",
                            lang: a[2] ? a[2].trim() : a[2],
                            text: a[3] || ""
                        });
                        else if (a = this.rules.heading.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "heading",
                            depth: a[1].length,
                            text: a[2]
                        });
                        else if ((a = this.rules.nptable.exec(t)) && (c = {
                                type: "table",
                                header: m(a[1].replace(/^ *| *\| *$/g, "")),
                                align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: a[3] ? a[3].replace(/\n$/, "").split("\n") : []
                            }).header.length === c.align.length) {
                            for (t = t.substring(a[0].length), d = 0; d < c.align.length; d++) /^ *-+: *$/.test(c.align[d]) ? c.align[d] = "right" : /^ *:-+: *$/.test(c.align[d]) ? c.align[d] = "center" : /^ *:-+ *$/.test(c.align[d]) ? c.align[d] = "left" : c.align[d] = null;
                            for (d = 0; d < c.cells.length; d++) c.cells[d] = m(c.cells[d], c.header.length);
                            this.tokens.push(c)
                        } else if (a = this.rules.hr.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "hr"
                        });
                        else if (a = this.rules.blockquote.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "blockquote_start"
                        }), a = a[0].replace(/^ *> ?/gm, ""), this.token(a, e), this.tokens.push({
                            type: "blockquote_end"
                        });
                        else if (a = this.rules.list.exec(t)) {
                            for (t = t.substring(a[0].length), p = {
                                    type: "list_start",
                                    ordered: g = (i = a[2]).length > 1,
                                    start: g ? +i : "",
                                    loose: !1
                                }, this.tokens.push(p), l = [], r = !1, A = (a = a[0].match(this.rules.item)).length, d = 0; d < A; d++) f = (c = a[d]).length, ~(c = c.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") && (f -= c.length, c = this.options.pedantic ? c.replace(/^ {1,4}/gm, "") : c.replace(new RegExp("^ {1," + f + "}", "gm"), "")), d !== A - 1 && (s = n.bullet.exec(a[d + 1])[0], (i.length > 1 ? 1 === s.length : s.length > 1 || this.options.smartLists && s !== i) && (t = a.slice(d + 1).join("\n") + t, d = A - 1)), o = r || /\n\n(?!\s*$)/.test(c), d !== A - 1 && (r = "\n" === c.charAt(c.length - 1), o || (o = r)), o && (p.loose = !0), y = void 0, (b = /^\[[ xX]\] /.test(c)) && (y = " " !== c[1], c = c.replace(/^\[[ xX]\] +/, "")), _ = {
                                type: "list_item_start",
                                task: b,
                                checked: y,
                                loose: o
                            }, l.push(_), this.tokens.push(_), this.token(c, !1), this.tokens.push({
                                type: "list_item_end"
                            });
                            if (p.loose)
                                for (A = l.length, d = 0; d < A; d++) l[d].loose = !0;
                            this.tokens.push({
                                type: "list_end"
                            })
                        } else if (a = this.rules.html.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: this.options.sanitize ? "paragraph" : "html",
                            pre: !this.options.sanitizer && ("pre" === a[1] || "script" === a[1] || "style" === a[1]),
                            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : u(a[0]) : a[0]
                        });
                        else if (e && (a = this.rules.def.exec(t))) t = t.substring(a[0].length), a[3] && (a[3] = a[3].substring(1, a[3].length - 1)), h = a[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[h] || (this.tokens.links[h] = {
                            href: a[2],
                            title: a[3]
                        });
                        else if ((a = this.rules.table.exec(t)) && (c = {
                                type: "table",
                                header: m(a[1].replace(/^ *| *\| *$/g, "")),
                                align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: a[3] ? a[3].replace(/\n$/, "").split("\n") : []
                            }).header.length === c.align.length) {
                            for (t = t.substring(a[0].length), d = 0; d < c.align.length; d++) /^ *-+: *$/.test(c.align[d]) ? c.align[d] = "right" : /^ *:-+: *$/.test(c.align[d]) ? c.align[d] = "center" : /^ *:-+ *$/.test(c.align[d]) ? c.align[d] = "left" : c.align[d] = null;
                            for (d = 0; d < c.cells.length; d++) c.cells[d] = m(c.cells[d].replace(/^ *\| *| *\| *$/g, ""), c.header.length);
                            this.tokens.push(c)
                        } else if (a = this.rules.lheading.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "heading",
                            depth: "=" === a[2].charAt(0) ? 1 : 2,
                            text: a[1]
                        });
                        else if (e && (a = this.rules.paragraph.exec(t))) t = t.substring(a[0].length), this.tokens.push({
                            type: "paragraph",
                            text: "\n" === a[1].charAt(a[1].length - 1) ? a[1].slice(0, -1) : a[1]
                        });
                        else if (a = this.rules.text.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "text",
                            text: a[0]
                        });
                        else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0));
                        return this.tokens
                    };
                    var o = {
                        escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
                        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                        url: A,
                        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                        strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
                        em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
                        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                        br: /^( {2,}|\\)\n(?!\s*$)/,
                        del: A,
                        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
                    };

                    function a(t, e) {
                        if (this.options = e || v.defaults, this.links = t, this.rules = o.normal, this.renderer = this.options.renderer || new i, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                        this.options.pedantic ? this.rules = o.pedantic : this.options.gfm && (this.options.breaks ? this.rules = o.breaks : this.rules = o.gfm)
                    }

                    function i(t) {
                        this.options = t || v.defaults
                    }

                    function s() {}

                    function c(t) {
                        this.tokens = [], this.token = null, this.options = t || v.defaults, this.options.renderer = this.options.renderer || new i, this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new p
                    }

                    function p() {
                        this.seen = {}
                    }

                    function u(t, e) {
                        if (e) {
                            if (u.escapeTest.test(t)) return t.replace(u.escapeReplace, (function(t) {
                                return u.replacements[t]
                            }))
                        } else if (u.escapeTestNoEncode.test(t)) return t.replace(u.escapeReplaceNoEncode, (function(t) {
                            return u.replacements[t]
                        }));
                        return t
                    }

                    function l(t) {
                        return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, (function(t, e) {
                            return "colon" === (e = e.toLowerCase()) ? ":" : "#" === e.charAt(0) ? "x" === e.charAt(1) ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""
                        }))
                    }

                    function _(t, e) {
                        return t = t.source || t, e = e || "", {
                            replace: function(e, n) {
                                return n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1"), t = t.replace(e, n), this
                            },
                            getRegex: function() {
                                return new RegExp(t, e)
                            }
                        }
                    }

                    function f(t, e, n) {
                        if (t) {
                            try {
                                var r = decodeURIComponent(l(n)).replace(/[^\w:]/g, "").toLowerCase()
                            } catch (t) {
                                return null
                            }
                            if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
                        }
                        e && !h.test(n) && (n = function(t, e) {
                            return d[" " + t] || (/^[^:]+:\/*[^\/]*$/.test(t) ? d[" " + t] = t + "/" : d[" " + t] = w(t, "/", !0)), t = d[" " + t], "//" === e.slice(0, 2) ? t.replace(/:[\s\S]*/, ":") + e : "/" === e.charAt(0) ? t.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + e : t + e
                        }(e, n));
                        try {
                            n = encodeURI(n).replace(/%25/g, "%")
                        } catch (t) {
                            return null
                        }
                        return n
                    }
                    o._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~", o.em = _(o.em).replace(/punctuation/g, o._punctuation).getRegex(), o._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g, o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, o._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, o.autolink = _(o.autolink).replace("scheme", o._scheme).replace("email", o._email).getRegex(), o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, o.tag = _(o.tag).replace("comment", n._comment).replace("attribute", o._attribute).getRegex(), o._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, o._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, o.link = _(o.link).replace("label", o._label).replace("href", o._href).replace("title", o._title).getRegex(), o.reflink = _(o.reflink).replace("label", o._label).getRegex(), o.normal = g({}, o), o.pedantic = g({}, o.normal, {
                        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                        link: _(/^!?\[(label)\]\((.*?)\)/).replace("label", o._label).getRegex(),
                        reflink: _(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", o._label).getRegex()
                    }), o.gfm = g({}, o.normal, {
                        escape: _(o.escape).replace("])", "~|])").getRegex(),
                        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                        del: /^~+(?=\S)([\s\S]*?\S)~+/,
                        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
                    }), o.gfm.url = _(o.gfm.url, "i").replace("email", o.gfm._extended_email).getRegex(), o.breaks = g({}, o.gfm, {
                        br: _(o.br).replace("{2,}", "*").getRegex(),
                        text: _(o.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
                    }), a.rules = o, a.output = function(t, e, n) {
                        return new a(e, n).output(t)
                    }, a.prototype.output = function(t) {
                        for (var e, n, r, o, i, s, c = ""; t;)
                            if (i = this.rules.escape.exec(t)) t = t.substring(i[0].length), c += u(i[1]);
                            else if (i = this.rules.tag.exec(t)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(i[0]) ? this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) && (this.inRawBlock = !1), t = t.substring(i[0].length), c += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : u(i[0]) : i[0];
                        else if (i = this.rules.link.exec(t)) {
                            var p = b(i[2], "()");
                            if (p > -1) {
                                var l = 4 + i[1].length + p;
                                i[2] = i[2].substring(0, p), i[0] = i[0].substring(0, l).trim(), i[3] = ""
                            }
                            t = t.substring(i[0].length), this.inLink = !0, r = i[2], this.options.pedantic ? (e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)) ? (r = e[1], o = e[3]) : o = "" : o = i[3] ? i[3].slice(1, -1) : "", r = r.trim().replace(/^<([\s\S]*)>$/, "$1"), c += this.outputLink(i, {
                                href: a.escapes(r),
                                title: a.escapes(o)
                            }), this.inLink = !1
                        } else if ((i = this.rules.reflink.exec(t)) || (i = this.rules.nolink.exec(t))) {
                            if (t = t.substring(i[0].length), e = (i[2] || i[1]).replace(/\s+/g, " "), !(e = this.links[e.toLowerCase()]) || !e.href) {
                                c += i[0].charAt(0), t = i[0].substring(1) + t;
                                continue
                            }
                            this.inLink = !0, c += this.outputLink(i, e), this.inLink = !1
                        } else if (i = this.rules.strong.exec(t)) t = t.substring(i[0].length), c += this.renderer.strong(this.output(i[4] || i[3] || i[2] || i[1]));
                        else if (i = this.rules.em.exec(t)) t = t.substring(i[0].length), c += this.renderer.em(this.output(i[6] || i[5] || i[4] || i[3] || i[2] || i[1]));
                        else if (i = this.rules.code.exec(t)) t = t.substring(i[0].length), c += this.renderer.codespan(u(i[2].trim(), !0));
                        else if (i = this.rules.br.exec(t)) t = t.substring(i[0].length), c += this.renderer.br();
                        else if (i = this.rules.del.exec(t)) t = t.substring(i[0].length), c += this.renderer.del(this.output(i[1]));
                        else if (i = this.rules.autolink.exec(t)) t = t.substring(i[0].length), r = "@" === i[2] ? "mailto:" + (n = u(this.mangle(i[1]))) : n = u(i[1]), c += this.renderer.link(r, null, n);
                        else if (this.inLink || !(i = this.rules.url.exec(t))) {
                            if (i = this.rules.text.exec(t)) t = t.substring(i[0].length), this.inRawBlock ? c += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : u(i[0]) : i[0]) : c += this.renderer.text(u(this.smartypants(i[0])));
                            else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0))
                        } else {
                            if ("@" === i[2]) r = "mailto:" + (n = u(i[0]));
                            else {
                                do {
                                    s = i[0], i[0] = this.rules._backpedal.exec(i[0])[0]
                                } while (s !== i[0]);
                                n = u(i[0]), r = "www." === i[1] ? "http://" + n : n
                            }
                            t = t.substring(i[0].length), c += this.renderer.link(r, null, n)
                        }
                        return c
                    }, a.escapes = function(t) {
                        return t ? t.replace(a.rules._escapes, "$1") : t
                    }, a.prototype.outputLink = function(t, e) {
                        var n = e.href,
                            r = e.title ? u(e.title) : null;
                        return "!" !== t[0].charAt(0) ? this.renderer.link(n, r, this.output(t[1])) : this.renderer.image(n, r, u(t[1]))
                    }, a.prototype.smartypants = function(t) {
                        return this.options.smartypants ? t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : t
                    }, a.prototype.mangle = function(t) {
                        if (!this.options.mangle) return t;
                        for (var e, n = "", r = t.length, o = 0; o < r; o++) e = t.charCodeAt(o), Math.random() > .5 && (e = "x" + e.toString(16)), n += "&#" + e + ";";
                        return n
                    }, i.prototype.code = function(t, e, n) {
                        var r = (e || "").match(/\S*/)[0];
                        if (this.options.highlight) {
                            var o = this.options.highlight(t, r);
                            null != o && o !== t && (n = !0, t = o)
                        }
                        return r ? '<pre><code class="' + this.options.langPrefix + u(r, !0) + '">' + (n ? t : u(t, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? t : u(t, !0)) + "</code></pre>"
                    }, i.prototype.blockquote = function(t) {
                        return "<blockquote>\n" + t + "</blockquote>\n"
                    }, i.prototype.html = function(t) {
                        return t
                    }, i.prototype.heading = function(t, e, n, r) {
                        return this.options.headerIds ? "<h" + e + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + t + "</h" + e + ">\n" : "<h" + e + ">" + t + "</h" + e + ">\n"
                    }, i.prototype.hr = function() {
                        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                    }, i.prototype.list = function(t, e, n) {
                        var r = e ? "ol" : "ul";
                        return "<" + r + (e && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + t + "</" + r + ">\n"
                    }, i.prototype.listitem = function(t) {
                        return "<li>" + t + "</li>\n"
                    }, i.prototype.checkbox = function(t) {
                        return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                    }, i.prototype.paragraph = function(t) {
                        return "<p>" + t + "</p>\n"
                    }, i.prototype.table = function(t, e) {
                        return e && (e = "<tbody>" + e + "</tbody>"), "<table>\n<thead>\n" + t + "</thead>\n" + e + "</table>\n"
                    }, i.prototype.tablerow = function(t) {
                        return "<tr>\n" + t + "</tr>\n"
                    }, i.prototype.tablecell = function(t, e) {
                        var n = e.header ? "th" : "td";
                        return (e.align ? "<" + n + ' align="' + e.align + '">' : "<" + n + ">") + t + "</" + n + ">\n"
                    }, i.prototype.strong = function(t) {
                        return "<strong>" + t + "</strong>"
                    }, i.prototype.em = function(t) {
                        return "<em>" + t + "</em>"
                    }, i.prototype.codespan = function(t) {
                        return "<code>" + t + "</code>"
                    }, i.prototype.br = function() {
                        return this.options.xhtml ? "<br/>" : "<br>"
                    }, i.prototype.del = function(t) {
                        return "<del>" + t + "</del>"
                    }, i.prototype.link = function(t, e, n) {
                        if (null === (t = f(this.options.sanitize, this.options.baseUrl, t))) return n;
                        var r = '<a href="' + u(t) + '"';
                        return e && (r += ' title="' + e + '"'), r + ">" + n + "</a>"
                    }, i.prototype.image = function(t, e, n) {
                        if (null === (t = f(this.options.sanitize, this.options.baseUrl, t))) return n;
                        var r = '<img src="' + t + '" alt="' + n + '"';
                        return e && (r += ' title="' + e + '"'), r + (this.options.xhtml ? "/>" : ">")
                    }, i.prototype.text = function(t) {
                        return t
                    }, s.prototype.strong = s.prototype.em = s.prototype.codespan = s.prototype.del = s.prototype.text = function(t) {
                        return t
                    }, s.prototype.link = s.prototype.image = function(t, e, n) {
                        return "" + n
                    }, s.prototype.br = function() {
                        return ""
                    }, c.parse = function(t, e) {
                        return new c(e).parse(t)
                    }, c.prototype.parse = function(t) {
                        this.inline = new a(t.links, this.options), this.inlineText = new a(t.links, g({}, this.options, {
                            renderer: new s
                        })), this.tokens = t.reverse();
                        for (var e = ""; this.next();) e += this.tok();
                        return e
                    }, c.prototype.next = function() {
                        return this.token = this.tokens.pop(), this.token
                    }, c.prototype.peek = function() {
                        return this.tokens[this.tokens.length - 1] || 0
                    }, c.prototype.parseText = function() {
                        for (var t = this.token.text;
                            "text" === this.peek().type;) t += "\n" + this.next().text;
                        return this.inline.output(t)
                    }, c.prototype.tok = function() {
                        switch (this.token.type) {
                            case "space":
                                return "";
                            case "hr":
                                return this.renderer.hr();
                            case "heading":
                                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, l(this.inlineText.output(this.token.text)), this.slugger);
                            case "code":
                                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                            case "table":
                                var t, e, n, r, o = "",
                                    a = "";
                                for (n = "", t = 0; t < this.token.header.length; t++) n += this.renderer.tablecell(this.inline.output(this.token.header[t]), {
                                    header: !0,
                                    align: this.token.align[t]
                                });
                                for (o += this.renderer.tablerow(n), t = 0; t < this.token.cells.length; t++) {
                                    for (e = this.token.cells[t], n = "", r = 0; r < e.length; r++) n += this.renderer.tablecell(this.inline.output(e[r]), {
                                        header: !1,
                                        align: this.token.align[r]
                                    });
                                    a += this.renderer.tablerow(n)
                                }
                                return this.renderer.table(o, a);
                            case "blockquote_start":
                                for (a = "";
                                    "blockquote_end" !== this.next().type;) a += this.tok();
                                return this.renderer.blockquote(a);
                            case "list_start":
                                a = "";
                                for (var i = this.token.ordered, s = this.token.start;
                                    "list_end" !== this.next().type;) a += this.tok();
                                return this.renderer.list(a, i, s);
                            case "list_item_start":
                                a = "";
                                var c = this.token.loose,
                                    p = this.token.checked,
                                    u = this.token.task;
                                for (this.token.task && (a += this.renderer.checkbox(p));
                                    "list_item_end" !== this.next().type;) a += c || "text" !== this.token.type ? this.tok() : this.parseText();
                                return this.renderer.listitem(a, u, p);
                            case "html":
                                return this.renderer.html(this.token.text);
                            case "paragraph":
                                return this.renderer.paragraph(this.inline.output(this.token.text));
                            case "text":
                                return this.renderer.paragraph(this.parseText());
                            default:
                                var _ = 'Token with "' + this.token.type + '" type was not found.';
                                if (!this.options.silent) throw new Error(_);
                                console.log(_)
                        }
                    }, p.prototype.slug = function(t) {
                        var e = t.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
                        if (this.seen.hasOwnProperty(e)) {
                            var n = e;
                            do {
                                this.seen[n]++, e = n + "-" + this.seen[n]
                            } while (this.seen.hasOwnProperty(e))
                        }
                        return this.seen[e] = 0, e
                    }, u.escapeTest = /[&<>"']/, u.escapeReplace = /[&<>"']/g, u.replacements = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    }, u.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, u.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
                    var d = {},
                        h = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

                    function A() {}

                    function g(t) {
                        for (var e, n, r = 1; r < arguments.length; r++)
                            for (n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t
                    }

                    function m(t, e) {
                        var n = t.replace(/\|/g, (function(t, e, n) {
                                for (var r = !1, o = e; --o >= 0 && "\\" === n[o];) r = !r;
                                return r ? "|" : " |"
                            })).split(/ \|/),
                            r = 0;
                        if (n.length > e) n.splice(e);
                        else
                            for (; n.length < e;) n.push("");
                        for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                        return n
                    }

                    function w(t, e, n) {
                        if (0 === t.length) return "";
                        for (var r = 0; r < t.length;) {
                            var o = t.charAt(t.length - r - 1);
                            if (o !== e || n) {
                                if (o === e || !n) break;
                                r++
                            } else r++
                        }
                        return t.substr(0, t.length - r)
                    }

                    function b(t, e) {
                        if (-1 === t.indexOf(e[1])) return -1;
                        for (var n = 0, r = 0; r < t.length; r++)
                            if ("\\" === t[r]) r++;
                            else if (t[r] === e[0]) n++;
                        else if (t[r] === e[1] && --n < 0) return r;
                        return -1
                    }

                    function y(t) {
                        t && t.sanitize && !t.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
                    }

                    function v(t, e, n) {
                        if (null == t) throw new Error("marked(): input parameter is undefined or null");
                        if ("string" != typeof t) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected");
                        if (n || "function" == typeof e) {
                            n || (n = e, e = null), y(e = g({}, v.defaults, e || {}));
                            var o, a, i = e.highlight,
                                s = 0;
                            try {
                                o = r.lex(t, e)
                            } catch (t) {
                                return n(t)
                            }
                            a = o.length;
                            var p = function(t) {
                                if (t) return e.highlight = i, n(t);
                                var r;
                                try {
                                    r = c.parse(o, e)
                                } catch (e) {
                                    t = e
                                }
                                return e.highlight = i, t ? n(t) : n(null, r)
                            };
                            if (!i || i.length < 3) return p();
                            if (delete e.highlight, !a) return p();
                            for (; s < o.length; s++) ! function(t) {
                                "code" !== t.type ? --a || p() : i(t.text, t.lang, (function(e, n) {
                                    return e ? p(e) : null == n || n === t.text ? --a || p() : (t.text = n, t.escaped = !0, void(--a || p()))
                                }))
                            }(o[s])
                        } else try {
                            return e && (e = g({}, v.defaults, e)), y(e), c.parse(r.lex(t, e), e)
                        } catch (t) {
                            if (t.message += "\nPlease report this to https://github.com/markedjs/marked.", (e || v.defaults).silent) return "<p>An error occurred:</p><pre>" + u(t.message + "", !0) + "</pre>";
                            throw t
                        }
                    }
                    A.exec = A, v.options = v.setOptions = function(t) {
                        return g(v.defaults, t), v
                    }, v.getDefaults = function() {
                        return {
                            baseUrl: null,
                            breaks: !1,
                            gfm: !0,
                            headerIds: !0,
                            headerPrefix: "",
                            highlight: null,
                            langPrefix: "language-",
                            mangle: !0,
                            pedantic: !1,
                            renderer: new i,
                            sanitize: !1,
                            sanitizer: null,
                            silent: !1,
                            smartLists: !1,
                            smartypants: !1,
                            xhtml: !1
                        }
                    }, v.defaults = v.getDefaults(), v.Parser = c, v.parser = c.parse, v.Renderer = i, v.TextRenderer = s, v.Lexer = r, v.lexer = r.lex, v.InlineLexer = a, v.inlineLexer = a.output, v.Slugger = p, v.parse = v, t.exports = v
                }(this || "undefined" != typeof window && window)
            }).call(this, n("pCvA"))
        },
        B0Cl: function(t, e, n) {
            "use strict";
            (function(e, r) {
                var o = n("upWy");
                t.exports = w;
                var a, i = n("kah5");
                w.ReadableState = m, n("hBZP").EventEmitter;
                var s = function(t, e) {
                        return t.listeners(e).length
                    },
                    c = n("n428"),
                    p = n("pRMk").Buffer,
                    u = e.Uint8Array || function() {},
                    l = n("nrnY");
                l.inherits = n("wfEq");
                var _ = n(11),
                    f = void 0;
                f = _ && _.debuglog ? _.debuglog("stream") : function() {};
                var d, h = n("IPtZ"),
                    A = n("xTpk");
                l.inherits(w, c);
                var g = ["error", "close", "destroy", "pause", "resume"];

                function m(t, e) {
                    t = t || {};
                    var r = e instanceof(a = a || n("A/eZ"));
                    this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                    var o = t.highWaterMark,
                        i = t.readableHighWaterMark,
                        s = this.objectMode ? 16 : 16384;
                    this.highWaterMark = o || 0 === o ? o : r && (i || 0 === i) ? i : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new h, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (d || (d = n("soc2").StringDecoder), this.decoder = new d(t.encoding), this.encoding = t.encoding)
                }

                function w(t) {
                    if (a = a || n("A/eZ"), !(this instanceof w)) return new w(t);
                    this._readableState = new m(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), c.call(this)
                }

                function b(t, e, n, r, o) {
                    var a, i = t._readableState;
                    return null === e ? (i.reading = !1, function(t, e) {
                            if (!e.ended) {
                                if (e.decoder) {
                                    var n = e.decoder.end();
                                    n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length)
                                }
                                e.ended = !0, E(t)
                            }
                        }(t, i)) : (o || (a = function(t, e) {
                            var n, r;
                            return r = e, p.isBuffer(r) || r instanceof u || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
                        }(i, e)), a ? t.emit("error", a) : i.objectMode || e && e.length > 0 ? ("string" == typeof e || i.objectMode || Object.getPrototypeOf(e) === p.prototype || (e = function(t) {
                            return p.from(t)
                        }(e)), r ? i.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : y(t, i, e, !0) : i.ended ? t.emit("error", new Error("stream.push() after EOF")) : (i.reading = !1, i.decoder && !n ? (e = i.decoder.write(e), i.objectMode || 0 !== e.length ? y(t, i, e, !1) : S(t, i)) : y(t, i, e, !1))) : r || (i.reading = !1)),
                        function(t) {
                            return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
                        }(i)
                }

                function y(t, e, n, r) {
                    e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && E(t)), S(t, e)
                }
                Object.defineProperty(w.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(t) {
                        this._readableState && (this._readableState.destroyed = t)
                    }
                }), w.prototype.destroy = A.destroy, w.prototype._undestroy = A.undestroy, w.prototype._destroy = function(t, e) {
                    this.push(null), e(t)
                }, w.prototype.push = function(t, e) {
                    var n, r = this._readableState;
                    return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = p.from(t, e), e = ""), n = !0), b(this, t, e, !1, n)
                }, w.prototype.unshift = function(t) {
                    return b(this, t, null, !0, !1)
                }, w.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }, w.prototype.setEncoding = function(t) {
                    return d || (d = n("soc2").StringDecoder), this._readableState.decoder = new d(t), this._readableState.encoding = t, this
                };
                var v = 8388608;

                function x(t, e) {
                    return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                        return t >= v ? t = v : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
                    }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
                }

                function E(t) {
                    var e = t._readableState;
                    e.needReadable = !1, e.emittedReadable || (f("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? o.nextTick(j, t) : j(t))
                }

                function j(t) {
                    f("emit readable"), t.emit("readable"), C(t)
                }

                function S(t, e) {
                    e.readingMore || (e.readingMore = !0, o.nextTick(L, t, e))
                }

                function L(t, e) {
                    for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (f("maybeReadMore read 0"), t.read(0), n !== e.length);) n = e.length;
                    e.readingMore = !1
                }

                function I(t) {
                    f("readable nexttick read 0"), t.read(0)
                }

                function k(t, e) {
                    e.reading || (f("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), C(t), e.flowing && !e.reading && t.read(0)
                }

                function C(t) {
                    var e = t._readableState;
                    for (f("flow", e.flowing); e.flowing && null !== t.read(););
                }

                function B(t, e) {
                    return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = function(t, e, n) {
                        var r;
                        return t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function(t, e) {
                            var n = e.head,
                                r = 1,
                                o = n.data;
                            for (t -= o.length; n = n.next;) {
                                var a = n.data,
                                    i = t > a.length ? a.length : t;
                                if (i === a.length ? o += a : o += a.slice(0, t), 0 == (t -= i)) {
                                    i === a.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = a.slice(i));
                                    break
                                }++r
                            }
                            return e.length -= r, o
                        }(t, e) : function(t, e) {
                            var n = p.allocUnsafe(t),
                                r = e.head,
                                o = 1;
                            for (r.data.copy(n), t -= r.data.length; r = r.next;) {
                                var a = r.data,
                                    i = t > a.length ? a.length : t;
                                if (a.copy(n, n.length - t, 0, i), 0 == (t -= i)) {
                                    i === a.length ? (++o, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = a.slice(i));
                                    break
                                }++o
                            }
                            return e.length -= o, n
                        }(t, e), r
                    }(t, e.buffer, e.decoder), n);
                    var n
                }

                function O(t) {
                    var e = t._readableState;
                    if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                    e.endEmitted || (e.ended = !0, o.nextTick(T, e, t))
                }

                function T(t, e) {
                    t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
                }

                function R(t, e) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (t[n] === e) return n;
                    return -1
                }
                w.prototype.read = function(t) {
                    f("read", t), t = parseInt(t, 10);
                    var e = this._readableState,
                        n = t;
                    if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return f("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? O(this) : E(this), null;
                    if (0 === (t = x(t, e)) && e.ended) return 0 === e.length && O(this), null;
                    var r, o = e.needReadable;
                    return f("need readable", o), (0 === e.length || e.length - t < e.highWaterMark) && f("length less than watermark", o = !0), e.ended || e.reading ? f("reading or ended", o = !1) : o && (f("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = x(n, e))), null === (r = t > 0 ? B(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && O(this)), null !== r && this.emit("data", r), r
                }, w.prototype._read = function(t) {
                    this.emit("error", new Error("_read() is not implemented"))
                }, w.prototype.pipe = function(t, e) {
                    var n = this,
                        a = this._readableState;
                    switch (a.pipesCount) {
                        case 0:
                            a.pipes = t;
                            break;
                        case 1:
                            a.pipes = [a.pipes, t];
                            break;
                        default:
                            a.pipes.push(t)
                    }
                    a.pipesCount += 1, f("pipe count=%d opts=%j", a.pipesCount, e);
                    var c = e && !1 === e.end || t === r.stdout || t === r.stderr ? m : p;

                    function p() {
                        f("onend"), t.end()
                    }
                    a.endEmitted ? o.nextTick(c) : n.once("end", c), t.on("unpipe", (function e(r, o) {
                        f("onunpipe"), r === n && o && !1 === o.hasUnpiped && (o.hasUnpiped = !0, f("cleanup"), t.removeListener("close", A), t.removeListener("finish", g), t.removeListener("drain", u), t.removeListener("error", h), t.removeListener("unpipe", e), n.removeListener("end", p), n.removeListener("end", m), n.removeListener("data", d), l = !0, !a.awaitDrain || t._writableState && !t._writableState.needDrain || u())
                    }));
                    var u = function(t) {
                        return function() {
                            var e = t._readableState;
                            f("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && s(t, "data") && (e.flowing = !0, C(t))
                        }
                    }(n);
                    t.on("drain", u);
                    var l = !1,
                        _ = !1;

                    function d(e) {
                        f("ondata"), _ = !1, !1 !== t.write(e) || _ || ((1 === a.pipesCount && a.pipes === t || a.pipesCount > 1 && -1 !== R(a.pipes, t)) && !l && (f("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, _ = !0), n.pause())
                    }

                    function h(e) {
                        f("onerror", e), m(), t.removeListener("error", h), 0 === s(t, "error") && t.emit("error", e)
                    }

                    function A() {
                        t.removeListener("finish", g), m()
                    }

                    function g() {
                        f("onfinish"), t.removeListener("close", A), m()
                    }

                    function m() {
                        f("unpipe"), n.unpipe(t)
                    }
                    return n.on("data", d),
                        function(t, e, n) {
                            if ("function" == typeof t.prependListener) return t.prependListener(e, n);
                            t._events && t._events[e] ? i(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n)
                        }(t, "error", h), t.once("close", A), t.once("finish", g), t.emit("pipe", n), a.flowing || (f("pipe resume"), n.resume()), t
                }, w.prototype.unpipe = function(t) {
                    var e = this._readableState,
                        n = {
                            hasUnpiped: !1
                        };
                    if (0 === e.pipesCount) return this;
                    if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), this);
                    if (!t) {
                        var r = e.pipes,
                            o = e.pipesCount;
                        e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                        for (var a = 0; a < o; a++) r[a].emit("unpipe", this, n);
                        return this
                    }
                    var i = R(e.pipes, t);
                    return -1 === i ? this : (e.pipes.splice(i, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n), this)
                }, w.prototype.on = function(t, e) {
                    var n = c.prototype.on.call(this, t, e);
                    if ("data" === t) !1 !== this._readableState.flowing && this.resume();
                    else if ("readable" === t) {
                        var r = this._readableState;
                        r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && E(this) : o.nextTick(I, this))
                    }
                    return n
                }, w.prototype.addListener = w.prototype.on, w.prototype.resume = function() {
                    var t = this._readableState;
                    return t.flowing || (f("resume"), t.flowing = !0, function(t, e) {
                        e.resumeScheduled || (e.resumeScheduled = !0, o.nextTick(k, t, e))
                    }(this, t)), this
                }, w.prototype.pause = function() {
                    return f("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (f("pause"), this._readableState.flowing = !1, this.emit("pause")), this
                }, w.prototype.wrap = function(t) {
                    var e = this,
                        n = this._readableState,
                        r = !1;
                    for (var o in t.on("end", (function() {
                            if (f("wrapped end"), n.decoder && !n.ended) {
                                var t = n.decoder.end();
                                t && t.length && e.push(t)
                            }
                            e.push(null)
                        })), t.on("data", (function(o) {
                            f("wrapped data"), n.decoder && (o = n.decoder.write(o)), n.objectMode && null == o || (n.objectMode || o && o.length) && (e.push(o) || (r = !0, t.pause()))
                        })), t) void 0 === this[o] && "function" == typeof t[o] && (this[o] = function(e) {
                        return function() {
                            return t[e].apply(t, arguments)
                        }
                    }(o));
                    for (var a = 0; a < g.length; a++) t.on(g[a], this.emit.bind(this, g[a]));
                    return this._read = function(e) {
                        f("wrapped _read", e), r && (r = !1, t.resume())
                    }, this
                }, Object.defineProperty(w.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }), w._fromList = B
            }).call(this, n("pCvA"), n("5IsQ"))
        },
        CE3R: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
                value: function(t) {
                    if (null == this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                    if ("function" != typeof t) throw new TypeError("predicate must be a function");
                    for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], a = 0; a < r; a++)
                        if (e = n[a], t.call(o, e, a, n)) return a;
                    return -1
                },
                enumerable: !1,
                configurable: !1,
                writable: !1
            }), e.default = !0
        },
        DyjV: function(t, e, n) {
            "use strict";
            var r = n("W0B4"),
                o = n.n(r),
                a = n("mXGw"),
                i = n.n(a),
                s = n("OoM2"),
                c = n.n(s),
                p = n("ZvjG"),
                u = n.n(p),
                l = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                _ = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                };

            function f(t) {
                return _({}, t, {
                    playerVars: _({}, t.playerVars, {
                        autoplay: 0,
                        start: 0,
                        end: 0
                    })
                })
            }
            var d = function(t) {
                function e(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.onPlayerReady = function(t) {
                        return n.props.onReady(t)
                    }, n.onPlayerError = function(t) {
                        return n.props.onError(t)
                    }, n.onPlayerStateChange = function(t) {
                        switch (n.props.onStateChange(t), t.data) {
                            case e.PlayerState.ENDED:
                                n.props.onEnd(t);
                                break;
                            case e.PlayerState.PLAYING:
                                n.props.onPlay(t);
                                break;
                            case e.PlayerState.PAUSED:
                                n.props.onPause(t)
                        }
                    }, n.onPlayerPlaybackRateChange = function(t) {
                        return n.props.onPlaybackRateChange(t)
                    }, n.onPlayerPlaybackQualityChange = function(t) {
                        return n.props.onPlaybackQualityChange(t)
                    }, n.createPlayer = function() {
                        if ("undefined" != typeof document) {
                            var t = _({}, n.props.opts, {
                                videoId: n.props.videoId
                            });
                            n.internalPlayer = u()(n.container, t), n.internalPlayer.on("ready", n.onPlayerReady), n.internalPlayer.on("error", n.onPlayerError), n.internalPlayer.on("stateChange", n.onPlayerStateChange), n.internalPlayer.on("playbackRateChange", n.onPlayerPlaybackRateChange), n.internalPlayer.on("playbackQualityChange", n.onPlayerPlaybackQualityChange)
                        }
                    }, n.resetPlayer = function() {
                        return n.internalPlayer.destroy().then(n.createPlayer)
                    }, n.updatePlayer = function() {
                        n.internalPlayer.getIframe().then((function(t) {
                            n.props.id ? t.setAttribute("id", n.props.id) : t.removeAttribute("id"), n.props.className ? t.setAttribute("class", n.props.className) : t.removeAttribute("class")
                        }))
                    }, n.updateVideo = function() {
                        if (void 0 !== n.props.videoId && null !== n.props.videoId) {
                            var t = !1,
                                e = {
                                    videoId: n.props.videoId
                                };
                            "playerVars" in n.props.opts && (t = 1 === n.props.opts.playerVars.autoplay, "start" in n.props.opts.playerVars && (e.startSeconds = n.props.opts.playerVars.start), "end" in n.props.opts.playerVars && (e.endSeconds = n.props.opts.playerVars.end)), t ? n.internalPlayer.loadVideoById(e) : n.internalPlayer.cueVideoById(e)
                        } else n.internalPlayer.stopVideo()
                    }, n.refContainer = function(t) {
                        n.container = t
                    }, n.container = null, n.internalPlayer = null, n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, i.a.Component), l(e, [{
                    key: "componentDidMount",
                    value: function() {
                        this.createPlayer()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t) {
                        (function(t, e) {
                            return t.id !== e.id || t.className !== e.className
                        })(t, this.props) && this.updatePlayer(),
                            function(t, e) {
                                return !c()(f(t.opts), f(e.opts))
                            }(t, this.props) && this.resetPlayer(),
                            function(t, e) {
                                if (t.videoId !== e.videoId) return !0;
                                var n = t.opts.playerVars || {},
                                    r = e.opts.playerVars || {};
                                return n.start !== r.start || n.end !== r.end
                            }(t, this.props) && this.updateVideo()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.internalPlayer.destroy()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return i.a.createElement("div", {
                            className: this.props.containerClassName
                        }, i.a.createElement("div", {
                            id: this.props.id,
                            className: this.props.className,
                            ref: this.refContainer
                        }))
                    }
                }]), e
            }();
            d.propTypes = {
                videoId: o.a.string,
                id: o.a.string,
                className: o.a.string,
                containerClassName: o.a.string,
                opts: o.a.objectOf(o.a.any),
                onReady: o.a.func,
                onError: o.a.func,
                onPlay: o.a.func,
                onPause: o.a.func,
                onEnd: o.a.func,
                onStateChange: o.a.func,
                onPlaybackRateChange: o.a.func,
                onPlaybackQualityChange: o.a.func
            }, d.defaultProps = {
                id: null,
                className: null,
                opts: {},
                containerClassName: "",
                onReady: function() {},
                onError: function() {},
                onPlay: function() {},
                onPause: function() {},
                onEnd: function() {},
                onStateChange: function() {},
                onPlaybackRateChange: function() {},
                onPlaybackQualityChange: function() {}
            }, d.PlayerState = {
                UNSTARTED: -1,
                ENDED: 0,
                PLAYING: 1,
                PAUSED: 2,
                BUFFERING: 3,
                CUED: 5
            }, e.a = d
        },
        EN2N: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = (r = n("25o0")) && r.__esModule ? r : {
                default: r
            };
            e.default = function(t) {
                return new Promise((function(e) {
                    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) e(window.YT);
                    else {
                        var n = "http:" === window.location.protocol ? "http:" : "https:";
                        (0, o.default)(n + "//www.youtube.com/iframe_api", (function(e) {
                            e && t.trigger("error", e)
                        }));
                        var r = window.onYouTubeIframeAPIReady;
                        window.onYouTubeIframeAPIReady = function() {
                            r && r(), e(window.YT)
                        }
                    }
                }))
            }, t.exports = e.default
        },
        ER37: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function(t) {
                    var e = n("oYIp"),
                        r = n("4fiG");
                    return function(t) {
                        var n = r(t),
                            o = t.resolve,
                            a = t.all,
                            i = Array.prototype.reduce,
                            s = Array.prototype.reduceRight,
                            c = Array.prototype.slice;
                        return t.any = function(e) {
                            for (var n, r, o = t._defer(), a = o._handler, i = e.length >>> 0, s = i, c = [], p = 0; p < i; ++p)
                                if (void 0 !== (r = e[p]) || p in e) {
                                    if ((n = t._handler(r)).state() > 0) {
                                        a.become(n), t._visitRemaining(e, p, n);
                                        break
                                    }
                                    n.visit(a, u, l)
                                } else --s;
                            return 0 === s && a.reject(new RangeError("any(): array must not be empty")), o;

                            function u(t) {
                                c = null, this.resolve(t)
                            }

                            function l(t) {
                                this.resolved || (c.push(t), 0 == --s && this.reject(c))
                            }
                        }, t.some = function(e, n) {
                            var r, o, a, i = t._defer(),
                                s = i._handler,
                                c = [],
                                p = [],
                                u = e.length >>> 0,
                                l = 0;
                            for (a = 0; a < u; ++a)(void 0 !== (o = e[a]) || a in e) && ++l;
                            for (n = Math.max(n, 0), r = l - n + 1, n > (l = Math.min(n, l)) ? s.reject(new RangeError("some(): array must contain at least " + n + " item(s), but had " + l)) : 0 === l && s.resolve(c), a = 0; a < u; ++a)(void 0 !== (o = e[a]) || a in e) && t._handler(o).visit(s, _, f, s.notify);
                            return i;

                            function _(t) {
                                this.resolved || (c.push(t), 0 == --l && (p = null, this.resolve(c)))
                            }

                            function f(t) {
                                this.resolved || (p.push(t), 0 == --r && (c = null, this.reject(p)))
                            }
                        }, t.settle = function(t) {
                            return a(t.map(p))
                        }, t.map = function(e, n) {
                            return t._traverse(n, e)
                        }, t.filter = function(e, n) {
                            var r = c.call(e);
                            return t._traverse(n, r).then((function(e) {
                                return function(e, n) {
                                    for (var r = n.length, o = new Array(r), a = 0, i = 0; a < r; ++a) n[a] && (o[i++] = t._handler(e[a]).value);
                                    return o.length = i, o
                                }(r, e)
                            }))
                        }, t.reduce = function(t, e) {
                            return arguments.length > 2 ? i.call(t, u(e), arguments[2]) : i.call(t, u(e))
                        }, t.reduceRight = function(t, e) {
                            return arguments.length > 2 ? s.call(t, u(e), arguments[2]) : s.call(t, u(e))
                        }, t.prototype.spread = function(t) {
                            return this.then(a).then((function(e) {
                                return t.apply(this, e)
                            }))
                        }, t;

                        function p(n) {
                            var r;
                            return n instanceof t && (r = n._handler.join()), r && 0 === r.state() || !r ? o(n).then(e.fulfilled, e.rejected) : (r._unreport(), e.inspect(r))
                        }

                        function u(t) {
                            return function(e, r, o) {
                                return n(t, void 0, [e, r, o])
                            }
                        }
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        F56x: function(t, e) {
            t.exports = function(t, e, n, r) {
                var o = n ? n.call(r, t, e) : void 0;
                if (void 0 !== o) return !!o;
                if (t === e) return !0;
                if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
                var a = Object.keys(t),
                    i = Object.keys(e);
                if (a.length !== i.length) return !1;
                for (var s = Object.prototype.hasOwnProperty.bind(e), c = 0; c < a.length; c++) {
                    var p = a[c];
                    if (!s(p)) return !1;
                    var u = t[p],
                        l = e[p];
                    if (!1 === (o = n ? n.call(r, u, l, p) : void 0) || void 0 === o && u !== l) return !1
                }
                return !0
            }
        },
        FDyG: function(t, e, n) {
            var r;

            function o(t) {
                function n() {
                    if (n.enabled) {
                        var t = n,
                            o = +new Date,
                            a = o - (r || o);
                        t.diff = a, t.prev = r, t.curr = o, r = o;
                        for (var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s];
                        i[0] = e.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
                        var c = 0;
                        i[0] = i[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                            if ("%%" === n) return n;
                            c++;
                            var o = e.formatters[r];
                            if ("function" == typeof o) {
                                var a = i[c];
                                n = o.call(t, a), i.splice(c, 1), c--
                            }
                            return n
                        })), e.formatArgs.call(t, i), (n.log || e.log || console.log.bind(console)).apply(t, i)
                    }
                }
                return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = function(t) {
                    var n, r = 0;
                    for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
                    return e.colors[Math.abs(r) % e.colors.length]
                }(t), "function" == typeof e.init && e.init(n), n
            }(e = t.exports = o.debug = o.default = o).coerce = function(t) {
                return t instanceof Error ? t.stack || t.message : t
            }, e.disable = function() {
                e.enable("")
            }, e.enable = function(t) {
                e.save(t), e.names = [], e.skips = [];
                for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && ("-" === (t = n[o].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
            }, e.enabled = function(t) {
                var n, r;
                for (n = 0, r = e.skips.length; n < r; n++)
                    if (e.skips[n].test(t)) return !1;
                for (n = 0, r = e.names.length; n < r; n++)
                    if (e.names[n].test(t)) return !0;
                return !1
            }, e.humanize = n("kKrb"), e.names = [], e.skips = [], e.formatters = {}
        },
        FIWN: function(t, e, n) {
            "use strict";
            t.exports = function() {}
        },
        FaXh: function(t, e) {
            e.read = function(t, e, n, r, o) {
                var a, i, s = 8 * o - r - 1,
                    c = (1 << s) - 1,
                    p = c >> 1,
                    u = -7,
                    l = n ? o - 1 : 0,
                    _ = n ? -1 : 1,
                    f = t[e + l];
                for (l += _, a = f & (1 << -u) - 1, f >>= -u, u += s; u > 0; a = 256 * a + t[e + l], l += _, u -= 8);
                for (i = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; i = 256 * i + t[e + l], l += _, u -= 8);
                if (0 === a) a = 1 - p;
                else {
                    if (a === c) return i ? NaN : 1 / 0 * (f ? -1 : 1);
                    i += Math.pow(2, r), a -= p
                }
                return (f ? -1 : 1) * i * Math.pow(2, a - r)
            }, e.write = function(t, e, n, r, o, a) {
                var i, s, c, p = 8 * a - o - 1,
                    u = (1 << p) - 1,
                    l = u >> 1,
                    _ = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    f = r ? 0 : a - 1,
                    d = r ? 1 : -1,
                    h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, i = u) : (i = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -i)) < 1 && (i--, c *= 2), (e += i + l >= 1 ? _ / c : _ * Math.pow(2, 1 - l)) * c >= 2 && (i++, c /= 2), i + l >= u ? (s = 0, i = u) : i + l >= 1 ? (s = (e * c - 1) * Math.pow(2, o), i += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, o), i = 0)); o >= 8; t[n + f] = 255 & s, f += d, s /= 256, o -= 8);
                for (i = i << o | s, p += o; p > 0; t[n + f] = 255 & i, f += d, i /= 256, p -= 8);
                t[n + f - d] |= 128 * h
            }
        },
        GkPX: function(t, e, n) {
            var r = n("U1KF").f,
                o = Function.prototype,
                a = /^\s*function ([^ (]*)/;
            "name" in o || n("GGqZ") && r(o, "name", {
                configurable: !0,
                get: function() {
                    try {
                        return ("" + this).match(a)[1]
                    } catch (t) {
                        return ""
                    }
                }
            })
        },
        HrKg: function(t, e) {
            t.exports = {
                100: "Continue",
                101: "Switching Protocols",
                102: "Processing",
                200: "OK",
                201: "Created",
                202: "Accepted",
                203: "Non-Authoritative Information",
                204: "No Content",
                205: "Reset Content",
                206: "Partial Content",
                207: "Multi-Status",
                208: "Already Reported",
                226: "IM Used",
                300: "Multiple Choices",
                301: "Moved Permanently",
                302: "Found",
                303: "See Other",
                304: "Not Modified",
                305: "Use Proxy",
                307: "Temporary Redirect",
                308: "Permanent Redirect",
                400: "Bad Request",
                401: "Unauthorized",
                402: "Payment Required",
                403: "Forbidden",
                404: "Not Found",
                405: "Method Not Allowed",
                406: "Not Acceptable",
                407: "Proxy Authentication Required",
                408: "Request Timeout",
                409: "Conflict",
                410: "Gone",
                411: "Length Required",
                412: "Precondition Failed",
                413: "Payload Too Large",
                414: "URI Too Long",
                415: "Unsupported Media Type",
                416: "Range Not Satisfiable",
                417: "Expectation Failed",
                418: "I'm a teapot",
                421: "Misdirected Request",
                422: "Unprocessable Entity",
                423: "Locked",
                424: "Failed Dependency",
                425: "Unordered Collection",
                426: "Upgrade Required",
                428: "Precondition Required",
                429: "Too Many Requests",
                431: "Request Header Fields Too Large",
                451: "Unavailable For Legal Reasons",
                500: "Internal Server Error",
                501: "Not Implemented",
                502: "Bad Gateway",
                503: "Service Unavailable",
                504: "Gateway Timeout",
                505: "HTTP Version Not Supported",
                506: "Variant Also Negotiates",
                507: "Insufficient Storage",
                508: "Loop Detected",
                509: "Bandwidth Limit Exceeded",
                510: "Not Extended",
                511: "Network Authentication Required"
            }
        },
        Hyru: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], t.exports = e.default
        },
        IPtZ: function(t, e, n) {
            "use strict";
            var r = n("pRMk").Buffer,
                o = n(12);
            t.exports = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.head = null, this.tail = null, this.length = 0
                }
                return t.prototype.push = function(t) {
                    var e = {
                        data: t,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
                }, t.prototype.unshift = function(t) {
                    var e = {
                        data: t,
                        next: this.head
                    };
                    0 === this.length && (this.tail = e), this.head = e, ++this.length
                }, t.prototype.shift = function() {
                    if (0 !== this.length) {
                        var t = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
                    }
                }, t.prototype.clear = function() {
                    this.head = this.tail = null, this.length = 0
                }, t.prototype.join = function(t) {
                    if (0 === this.length) return "";
                    for (var e = this.head, n = "" + e.data; e = e.next;) n += t + e.data;
                    return n
                }, t.prototype.concat = function(t) {
                    if (0 === this.length) return r.alloc(0);
                    if (1 === this.length) return this.head.data;
                    for (var e, n, o = r.allocUnsafe(t >>> 0), a = this.head, i = 0; a;) e = o, n = i, a.data.copy(e, n), i += a.data.length, a = a.next;
                    return o
                }, t
            }(), o && o.inspect && o.inspect.custom && (t.exports.prototype[o.inspect.custom] = function() {
                var t = o.inspect({
                    length: this.length
                });
                return this.constructor.name + " " + t
            })
        },
        JLxL: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.__PictureImpl = e.__SourceImpl = e.Source = e.Picture = e.__ReactImgixImpl = e.default = void 0, n("CE3R");
            var r = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== _(t) && "function" != typeof t) return {
                        default: t
                    };
                    var e = function() {
                        if ("function" != typeof WeakMap) return null;
                        var t = new WeakMap;
                        return function() {
                            return t
                        }, t
                    }();
                    if (e && e.has(t)) return e.get(t);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(t, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = t[o]
                        }
                    return n.default = t, e && e.set(t, n), n
                }(n("mXGw")),
                o = l(n("W0B4")),
                a = l(n("UM9n")),
                i = l(n("t7VS")),
                s = l(n("+l0x")),
                c = n("btuv"),
                p = n("jYid"),
                u = n("hxtY");

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function _(t) {
                return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function h(t, e, n) {
                return e && d(t.prototype, e), n && d(t, n), t
            }

            function A(t, e) {
                return !e || "object" !== _(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function g(t) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function m(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && function(t, e) {
                    (Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }(t, e)
            }

            function w(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function b(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        a = Object.keys(t);
                    for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function y() {
                return (y = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var v = function(t) {
                    return "react-imgix-".concat(t)
                },
                x = {
                    auto: ["format"]
                },
                E = {
                    src: "src",
                    srcSet: "srcSet",
                    sizes: "sizes"
                },
                j = function() {},
                S = {
                    className: o.default.string,
                    onMounted: o.default.func,
                    htmlAttributes: o.default.object
                },
                L = y({}, S, {
                    disableQualityByDPR: o.default.bool,
                    disableSrcSet: o.default.bool,
                    disableLibraryParam: o.default.bool,
                    imgixParams: o.default.object,
                    sizes: o.default.string,
                    width: o.default.number,
                    height: o.default.number,
                    src: o.default.string.isRequired
                }),
                I = function(t, e) {
                    t && ("function" == typeof t ? t(e) : t.current = e)
                },
                k = function(t, e, n, r, o) {
                    return t + "&h=" + r + "&w=" + n + e + " " + n + "w"
                },
                C = function(t, e, n, r, o) {
                    return t + "&w=" + n + e + " " + n + "w"
                },
                B = function(t, e, n, r) {
                    return t + "&q=" + n + "&dpr=" + r + e + " " + r + "x"
                },
                O = function(t, e, n, r) {
                    return t + "&dpr=" + r + e + " " + r + "x"
                },
                T = function(t, e, n, r) {
                    return t + "&q=" + n + "&dpr=" + r + e + " " + r + "x"
                };

            function R(t) {
                var e, n = t.src,
                    r = t.width,
                    o = t.height,
                    c = t.disableLibraryParam,
                    l = t.disableSrcSet,
                    _ = t.imgixParams,
                    f = t.disableQualityByDPR,
                    d = null != r || null != o,
                    h = function(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    a = void 0;
                                try {
                                    for (var i, s = t[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
                                } catch (t) {
                                    o = !0, a = t
                                } finally {
                                    try {
                                        r || null == s.return || s.return()
                                    } finally {
                                        if (o) throw a
                                    }
                                }
                                return n
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }()
                    }((0, s.default)(n), 3),
                    A = h[0],
                    g = h[1],
                    m = h[2],
                    w = y({}, g, _, c ? {} : {
                        ixlib: "react-".concat("9.0.1")
                    }, d && o ? {
                        height: o
                    } : {}, d && r ? {
                        width: r
                    } : {}),
                    v = (0, i.default)(A, w);
                if (l) e = v;
                else if (d) {
                    var x = w.q,
                        E = b(w, ["q"]),
                        j = (0, i.default)(A, E),
                        S = T;
                    x ? S = B : f && (S = O), e = "";
                    for (var L = u.DPR_QUALITY_VALUES.length, I = 0; I < L; I++) {
                        var R = u.DPR_QUALITY_VALUES[I];
                        e += S(j, m, x || R, I + 1) + ", "
                    }
                    e = e.slice(0, -2)
                } else {
                    w.width, w.w;
                    var P = w.height,
                        Q = b(w, ["width", "w", "height"]),
                        M = (0, i.default)(A, Q),
                        D = _.ar,
                        N = (null != D && function(t) {
                            "string" == typeof t && /^\d+(\.\d+)?:\d+(\.\d+)?$/.test(t)
                        }(D), C);
                    P && (N = k), e = "";
                    for (var q = a.default.length, H = 0; H < q; H++) e += N(M, m, a.default[H], P) + ", ";
                    e = e.slice(0, -2)
                }
                return p.config.debugUrl && e.split(", ").map((function(t) {
                    var e = t.split(" ")[0];
                    return e.match(/&$/) ? console.log("[ react-imgix ] :: ".concat(e.slice(0, -1))) : console.log("[ react-imgix ] :: ".concat(e))
                })), {
                    src: v,
                    srcSet: e
                }
            }

            function P(t) {
                var e = y({}, x, t.imgixParams);
                return y({}, e)
            }
            var Q = function(t) {
                function e(t) {
                    var n;
                    return f(this, e), (n = A(this, g(e).call(this, t))).imgRef = null, n
                }
                return m(e, r.Component), h(e, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMounted(this.imgRef)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e = this,
                            n = this.props,
                            o = n.disableSrcSet,
                            a = (n.type, n.width),
                            i = n.height,
                            s = R(y({}, this.props, {
                                type: "img",
                                imgixParams: P(this.props)
                            })),
                            c = s.src,
                            p = s.srcSet,
                            u = y({}, E, this.props.attributeConfig),
                            l = y({}, this.props.htmlAttributes, (w(t = {}, u.sizes, this.props.sizes), w(t, "className", this.props.className), w(t, "width", a <= 1 ? null : a), w(t, "height", i <= 1 ? null : i), w(t, u.src, c), w(t, "ref", (function(t) {
                                e.imgRef = t, void 0 !== e.props.htmlAttributes && "ref" in e.props.htmlAttributes && I(e.props.htmlAttributes.ref, e.imgRef)
                            })), t));
                        return o || (l[u.srcSet] = p), r.default.createElement("img", l)
                    }
                }]), e
            }();
            e.__ReactImgixImpl = Q, w(Q, "propTypes", y({}, L)), w(Q, "defaultProps", {
                disableSrcSet: !1,
                onMounted: j
            }), Q.displayName = "ReactImgix";
            var M = function(t) {
                function e(t) {
                    var n;
                    return f(this, e), (n = A(this, g(e).call(this, t))).pictureRef = null, n
                }
                return m(e, r.Component), h(e, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMounted(this.pictureRef)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props.children,
                            n = r.default.Children.map(e, (function(t, e) {
                                return r.default.cloneElement(t, {
                                    key: v(e),
                                    _inPicture: !0
                                })
                            })) || [],
                            o = n.findIndex((function(t) {
                                return "img" === t.type || t.type === Q || t.type === N
                            }));
                        return -1 === o && p.config.warnings.fallbackImage ? console.warn("No fallback <img /> or <Imgix /> found in the children of a <picture> component. A fallback image should be passed to ensure the image renders correctly at all dimensions.") : o !== n.length - 1 && n.push(n.splice(o, 1)[0]), r.default.createElement("picture", {
                            ref: function(e) {
                                return t.pictureRef = e
                            },
                            children: n
                        })
                    }
                }]), e
            }();
            e.__PictureImpl = M, w(M, "propTypes", y({}, S, {
                children: o.default.any
            })), w(M, "defaultProps", {
                onMounted: j
            }), M.displayName = "ReactImgixPicture";
            var D = function(t) {
                function e(t) {
                    var n;
                    return f(this, e), (n = A(this, g(e).call(this, t))).sourceRef = null, n
                }
                return m(e, r.Component), h(e, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMounted(this.sourceRef)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e = this,
                            n = this.props,
                            o = n.disableSrcSet,
                            a = n.width,
                            i = n.height,
                            s = R(y({}, this.props, {
                                type: "source",
                                imgixParams: P(this.props)
                            })),
                            c = s.src,
                            p = s.srcSet,
                            u = y({}, E, this.props.attributeConfig),
                            l = y({}, this.props.htmlAttributes, (w(t = {}, u.sizes, this.props.sizes), w(t, "className", this.props.className), w(t, "width", a <= 1 ? null : a), w(t, "height", i <= 1 ? null : i), w(t, "ref", (function(t) {
                                e.sourceRef = t, void 0 !== e.props.htmlAttributes && "ref" in e.props.htmlAttributes && I(e.props.htmlAttributes.ref, e.sourceRef)
                            })), t));
                        return l[u.srcSet] = o ? c : "".concat(p), r.default.createElement("source", l)
                    }
                }]), e
            }();
            e.__SourceImpl = D, w(D, "propTypes", y({}, L)), w(D, "defaultProps", {
                disableSrcSet: !1,
                onMounted: j
            }), D.displayName = "ReactImgixSource";
            var N = (0, p.compose)(c.ShouldComponentUpdateHOC)(Q),
                q = (0, p.compose)(c.ShouldComponentUpdateHOC)(M);
            e.Picture = q;
            var H = (0, p.compose)(c.ShouldComponentUpdateHOC)(D);
            e.Source = H;
            var U = N;
            e.default = U
        },
        KlUR: function(t, e, n) {
            "use strict";
            e.byteLength = function(t) {
                var e = p(t),
                    n = e[0],
                    r = e[1];
                return 3 * (n + r) / 4 - r
            }, e.toByteArray = function(t) {
                var e, n, r = p(t),
                    i = r[0],
                    s = r[1],
                    c = new a(function(t, e, n) {
                        return 3 * (e + n) / 4 - n
                    }(0, i, s)),
                    u = 0,
                    l = s > 0 ? i - 4 : i;
                for (n = 0; n < l; n += 4) e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], c[u++] = e >> 16 & 255, c[u++] = e >> 8 & 255, c[u++] = 255 & e;
                return 2 === s && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, c[u++] = 255 & e), 1 === s && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, c[u++] = e >> 8 & 255, c[u++] = 255 & e), c
            }, e.fromByteArray = function(t) {
                for (var e, n = t.length, o = n % 3, a = [], i = 0, s = n - o; i < s; i += 16383) a.push(u(t, i, i + 16383 > s ? s : i + 16383));
                return 1 === o ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), a.join("")
            };
            for (var r = [], o = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = i.length; s < c; ++s) r[s] = i[s], o[i.charCodeAt(s)] = s;

            function p(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
            }

            function u(t, e, n) {
                for (var o, a, i = [], s = e; s < n; s += 3) o = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), i.push(r[(a = o) >> 18 & 63] + r[a >> 12 & 63] + r[a >> 6 & 63] + r[63 & a]);
                return i.join("")
            }
            o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
        },
        "NY/1": function(t, e, n) {
            var r = n("zkTx").Buffer;
            t.exports = function(t) {
                if (t instanceof Uint8Array) {
                    if (0 === t.byteOffset && t.byteLength === t.buffer.byteLength) return t.buffer;
                    if ("function" == typeof t.buffer.slice) return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength)
                }
                if (r.isBuffer(t)) {
                    for (var e = new Uint8Array(t.length), n = t.length, o = 0; o < n; o++) e[o] = t[o];
                    return e.buffer
                }
                throw new Error("Argument must be a Buffer")
            }
        },
        OLMR: function(t, e, n) {
            "use strict";
            t.exports = a;
            var r = n("+t3Y"),
                o = n("nrnY");

            function a(t) {
                if (!(this instanceof a)) return new a(t);
                r.call(this, t)
            }
            o.inherits = n("wfEq"), o.inherits(a, r), a.prototype._transform = function(t, e, n) {
                n(null, t)
            }
        },
        OoM2: function(t, e, n) {
            "use strict";
            var r = Array.isArray,
                o = Object.keys,
                a = Object.prototype.hasOwnProperty;
            t.exports = function t(e, n) {
                if (e === n) return !0;
                if (e && n && "object" == typeof e && "object" == typeof n) {
                    var i, s, c, p = r(e),
                        u = r(n);
                    if (p && u) {
                        if ((s = e.length) != n.length) return !1;
                        for (i = s; 0 != i--;)
                            if (!t(e[i], n[i])) return !1;
                        return !0
                    }
                    if (p != u) return !1;
                    var l = e instanceof Date,
                        _ = n instanceof Date;
                    if (l != _) return !1;
                    if (l && _) return e.getTime() == n.getTime();
                    var f = e instanceof RegExp,
                        d = n instanceof RegExp;
                    if (f != d) return !1;
                    if (f && d) return e.toString() == n.toString();
                    var h = o(e);
                    if ((s = h.length) !== o(n).length) return !1;
                    for (i = s; 0 != i--;)
                        if (!a.call(n, h[i])) return !1;
                    for (i = s; 0 != i--;)
                        if (!t(e[c = h[i]], n[c])) return !1;
                    return !0
                }
                return e != e && n != n
            }
        },
        Pi0g: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    function t(t) {
                        this._async = t, this._running = !1, this._queue = this, this._queueLen = 0, this._afterQueue = {}, this._afterQueueLen = 0;
                        var e = this;
                        this.drain = function() {
                            e._drain()
                        }
                    }
                    return t.prototype.enqueue = function(t) {
                        this._queue[this._queueLen++] = t, this.run()
                    }, t.prototype.afterQueue = function(t) {
                        this._afterQueue[this._afterQueueLen++] = t, this.run()
                    }, t.prototype.run = function() {
                        this._running || (this._running = !0, this._async(this.drain))
                    }, t.prototype._drain = function() {
                        for (var t = 0; t < this._queueLen; ++t) this._queue[t].run(), this._queue[t] = void 0;
                        for (this._queueLen = 0, this._running = !1, t = 0; t < this._afterQueueLen; ++t) this._afterQueue[t].run(), this._afterQueue[t] = void 0;
                        this._afterQueueLen = 0
                    }, t
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        QfSp: function(t, e, n) {
            (function(e, r) {
                const o = n("w7gO"),
                    a = n("lVFF"),
                    {
                        join: i
                    } = n("R8iU"),
                    {
                        asyncForEach: s
                    } = n("dn7a"),
                    c = i(e.cwd(), "src/static/content");
                async function p(t) {
                    const e = t;
                    return new Promise(n => {
                        if (-1 !== t.indexOf("datocms")) {
                            const t = e.split("/"),
                                s = t[t.length - 1],
                                p = s.split(".")[1].split("?")[0],
                                u = function(t) {
                                    return t ? (/^[?#]/.test(t) ? t.slice(1) : t).split("&").reduce((t, e) => {
                                        const [n, r] = e.split("=");
                                        return t[n] = r ? decodeURIComponent(r.replace(/\+/g, " ")) : "", t
                                    }, {}) : {}
                                }(s).fm || p,
                                l = `${s.replace(/\./g,"__").replace(/\?/g,"__").replace(/:/g,"_").replace(/%3A/g,"_").replace(/&/g,"_").replace(/=/g,"-")}.${u}`,
                                _ = i(c, l),
                                f = `/static/content/${l}`;
                            if (a.existsSync(_)) r.nbAssetsSkipped += 1, n(f);
                            else {
                                const t = a.createWriteStream(_);
                                o.get(e, e => {
                                    e.pipe(t), t.on("finish", () => {
                                        t.close(() => {
                                            r.nbAssetsCached += 1, n(f)
                                        })
                                    })
                                })
                            }
                        } else n(t)
                    })
                }
                async function u(t) {
                    let e = "";
                    const n = t.split(",");
                    let r, o, a = 0;
                    const i = n.length;
                    return await s(n, async t => {
                        o = t.split(" ");
                        const [n, s] = o;
                        r = await p(n), e += `${r} ${s}`, a < i - 1 && (e += ",\n"), a += 1
                    }), e
                }
                t.exports = {
                    download: p,
                    downloadSrcSet: u,
                    downloadResponsiveImage: async function(t) {
                        const e = await p(t.src);
                        t.src = e;
                        const n = await u(t.srcSet);
                        t.srcSet = n;
                        const r = await u(t.webpSrcSet);
                        return t.webpSrcSet = r, t
                    }
                }
            }).call(this, n("5IsQ"), n("pCvA"))
        },
        R8iU: function(t, e, n) {
            (function(t) {
                function n(t, e) {
                    for (var n = 0, r = t.length - 1; r >= 0; r--) {
                        var o = t[r];
                        "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
                    }
                    if (e)
                        for (; n--; n) t.unshift("..");
                    return t
                }

                function r(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t) && n.push(t[r]);
                    return n
                }
                e.resolve = function() {
                    for (var e = "", o = !1, a = arguments.length - 1; a >= -1 && !o; a--) {
                        var i = a >= 0 ? arguments[a] : t.cwd();
                        if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                        i && (e = i + "/" + e, o = "/" === i.charAt(0))
                    }
                    return (o ? "/" : "") + (e = n(r(e.split("/"), (function(t) {
                        return !!t
                    })), !o).join("/")) || "."
                }, e.normalize = function(t) {
                    var a = e.isAbsolute(t),
                        i = "/" === o(t, -1);
                    return (t = n(r(t.split("/"), (function(t) {
                        return !!t
                    })), !a).join("/")) || a || (t = "."), t && i && (t += "/"), (a ? "/" : "") + t
                }, e.isAbsolute = function(t) {
                    return "/" === t.charAt(0)
                }, e.join = function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return e.normalize(r(t, (function(t, e) {
                        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                        return t
                    })).join("/"))
                }, e.relative = function(t, n) {
                    function r(t) {
                        for (var e = 0; e < t.length && "" === t[e]; e++);
                        for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
                        return e > n ? [] : t.slice(e, n - e + 1)
                    }
                    t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
                    for (var o = r(t.split("/")), a = r(n.split("/")), i = Math.min(o.length, a.length), s = i, c = 0; c < i; c++)
                        if (o[c] !== a[c]) {
                            s = c;
                            break
                        }
                    var p = [];
                    for (c = s; c < o.length; c++) p.push("..");
                    return (p = p.concat(a.slice(s))).join("/")
                }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
                    if ("string" != typeof t && (t += ""), 0 === t.length) return ".";
                    for (var e = t.charCodeAt(0), n = 47 === e, r = -1, o = !0, a = t.length - 1; a >= 1; --a)
                        if (47 === (e = t.charCodeAt(a))) {
                            if (!o) {
                                r = a;
                                break
                            }
                        } else o = !1;
                    return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : t.slice(0, r)
                }, e.basename = function(t, e) {
                    var n = function(t) {
                        "string" != typeof t && (t += "");
                        var e, n = 0,
                            r = -1,
                            o = !0;
                        for (e = t.length - 1; e >= 0; --e)
                            if (47 === t.charCodeAt(e)) {
                                if (!o) {
                                    n = e + 1;
                                    break
                                }
                            } else -1 === r && (o = !1, r = e + 1);
                        return -1 === r ? "" : t.slice(n, r)
                    }(t);
                    return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
                }, e.extname = function(t) {
                    "string" != typeof t && (t += "");
                    for (var e = -1, n = 0, r = -1, o = !0, a = 0, i = t.length - 1; i >= 0; --i) {
                        var s = t.charCodeAt(i);
                        if (47 !== s) - 1 === r && (o = !1, r = i + 1), 46 === s ? -1 === e ? e = i : 1 !== a && (a = 1) : -1 !== e && (a = -1);
                        else if (!o) {
                            n = i + 1;
                            break
                        }
                    }
                    return -1 === e || -1 === r || 0 === a || 1 === a && e === r - 1 && e === n + 1 ? "" : t.slice(e, r)
                };
                var o = "b" === "ab".substr(-1) ? function(t, e, n) {
                    return t.substr(e, n)
                } : function(t, e, n) {
                    return e < 0 && (e = t.length + e), t.substr(e, n)
                }
            }).call(this, n("5IsQ"))
        },
        RFRr: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                var t = n("YNMu");
                return {
                    page: t.default || t
                }
            }])
        },
        Rbzu: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var r = n("tvLF"),
                o = n.n(r),
                a = n("s4hn"),
                i = n.n(a),
                s = n("1qCV"),
                c = n.n(s),
                p = n("azxR");

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = c()(n);
                    "function" == typeof i.a && (r = r.concat(i()(n).filter((function(t) {
                        return o()(n, t).enumerable
                    })))), r.forEach((function(e) {
                        Object(p.a)(t, e, n[e])
                    }))
                }
                return t
            }
        },
        SXWZ: function(t, e, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            n.r(e);
            var o = n("mXGw"),
                a = n("W0B4"),
                i = n.n(a),
                s = n("iXzu");
            n.d(e, "withContentRect", (function() {
                return l
            }));
            var c = ["client", "offset", "scroll", "bounds", "margin"];

            function p(t) {
                var e = [];
                return c.forEach((function(n) {
                    t[n] && e.push(n)
                })), e
            }

            function u(t, e) {
                var n = {};
                if (e.indexOf("client") > -1 && (n.client = {
                        top: t.clientTop,
                        left: t.clientLeft,
                        width: t.clientWidth,
                        height: t.clientHeight
                    }), e.indexOf("offset") > -1 && (n.offset = {
                        top: t.offsetTop,
                        left: t.offsetLeft,
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }), e.indexOf("scroll") > -1 && (n.scroll = {
                        top: t.scrollTop,
                        left: t.scrollLeft,
                        width: t.scrollWidth,
                        height: t.scrollHeight
                    }), e.indexOf("bounds") > -1) {
                    var r = t.getBoundingClientRect();
                    n.bounds = {
                        top: r.top,
                        right: r.right,
                        bottom: r.bottom,
                        left: r.left,
                        width: r.width,
                        height: r.height
                    }
                }
                if (e.indexOf("margin") > -1) {
                    var o = getComputedStyle(t);
                    n.margin = {
                        top: o ? parseInt(o.marginTop) : 0,
                        right: o ? parseInt(o.marginRight) : 0,
                        bottom: o ? parseInt(o.marginBottom) : 0,
                        left: o ? parseInt(o.marginLeft) : 0
                    }
                }
                return n
            }

            function l(t) {
                return function(e) {
                    var n, a;
                    return a = n = function(n) {
                        var a, i;

                        function c() {
                            for (var e, r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                            return (e = n.call.apply(n, [this].concat(o)) || this).state = {
                                contentRect: {
                                    entry: {},
                                    client: {},
                                    offset: {},
                                    scroll: {},
                                    bounds: {},
                                    margin: {}
                                }
                            }, e._animationFrameID = null, e._resizeObserver = null, e._node = null, e.measure = function(n) {
                                var r = u(e._node, t || p(e.props));
                                n && (r.entry = n[0].contentRect), e._animationFrameID = window.requestAnimationFrame((function() {
                                    null !== e._resizeObserver && (e.setState({
                                        contentRect: r
                                    }), "function" == typeof e.props.onResize && e.props.onResize(r))
                                }))
                            }, e._handleRef = function(t) {
                                null !== e._resizeObserver && null !== e._node && e._resizeObserver.unobserve(e._node), e._node = t, null !== e._resizeObserver && null !== e._node && e._resizeObserver.observe(e._node);
                                var n = e.props.innerRef;
                                n && ("function" == typeof n ? n(e._node) : n.current = e._node)
                            }, e
                        }
                        i = n, (a = c).prototype = Object.create(i.prototype), a.prototype.constructor = a, a.__proto__ = i;
                        var l = c.prototype;
                        return l.componentDidMount = function() {
                            this._resizeObserver = new s.default(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), "function" == typeof this.props.onResize && this.props.onResize(u(this._node, t || p(this.props))))
                        }, l.componentWillUnmount = function() {
                            null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), window.cancelAnimationFrame(this._animationFrameID)
                        }, l.render = function() {
                            var t = this.props,
                                n = (t.innerRef, t.onResize, function(t, e) {
                                    if (null == t) return {};
                                    var n, r, o = {},
                                        a = Object.keys(t);
                                    for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                                    return o
                                }(t, ["innerRef", "onResize"]));
                            return Object(o.createElement)(e, r({}, n, {
                                measureRef: this._handleRef,
                                measure: this.measure,
                                contentRect: this.state.contentRect
                            }))
                        }, c
                    }(o.Component), n.propTypes = {
                        client: i.a.bool,
                        offset: i.a.bool,
                        scroll: i.a.bool,
                        bounds: i.a.bool,
                        margin: i.a.bool,
                        innerRef: i.a.oneOfType([i.a.object, i.a.func]),
                        onResize: i.a.func
                    }, a
                }
            }
            var _ = l()((function(t) {
                var e = t.measure,
                    n = t.measureRef,
                    r = t.contentRect;
                return (0, t.children)({
                    measure: e,
                    measureRef: n,
                    contentRect: r
                })
            }));
            _.displayName = "Measure", _.propTypes.children = i.a.func, e.default = _
        },
        TC2y: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function(t) {
                    var e = n("hkrM"),
                        r = n("ER37"),
                        o = n("8KCz"),
                        a = n("x/f/"),
                        i = n("UMpp"),
                        s = n("hRF4"),
                        c = n("yh4/"),
                        p = n("7oMz"),
                        u = n("YsiS"),
                        l = n("iKwt"),
                        _ = [r, o, a, s, c, i, p, e, u].reduce((function(t, e) {
                            return e(t)
                        }), n("bcjR")),
                        f = n("4fiG")(_);

                    function d(t, e, n, r) {
                        var o = _.resolve(t);
                        return arguments.length < 2 ? o : o.then(e, n, r)
                    }

                    function h(t) {
                        return function() {
                            for (var e = 0, n = arguments.length, r = new Array(n); e < n; ++e) r[e] = arguments[e];
                            return f(t, this, r)
                        }
                    }

                    function A(t) {
                        for (var e = 0, n = arguments.length - 1, r = new Array(n); e < n; ++e) r[e] = arguments[e + 1];
                        return f(t, this, r)
                    }

                    function g() {
                        var t = _._defer();

                        function e(e) {
                            t._handler.resolve(e)
                        }

                        function n(e) {
                            t._handler.reject(e)
                        }

                        function r(e) {
                            t._handler.notify(e)
                        }
                        this.promise = t, this.resolve = e, this.reject = n, this.notify = r, this.resolver = {
                            resolve: e,
                            reject: n,
                            notify: r
                        }
                    }
                    return d.promise = function(t) {
                        return new _(t)
                    }, d.resolve = _.resolve, d.reject = _.reject, d.lift = h, d.try = A, d.attempt = A, d.iterate = _.iterate, d.unfold = _.unfold, d.join = function() {
                        return _.all(arguments)
                    }, d.all = function(t) {
                        return d(t, _.all)
                    }, d.settle = function(t) {
                        return d(t, _.settle)
                    }, d.any = h(_.any), d.some = h(_.some), d.race = h(_.race), d.map = function(t, e) {
                        return d(t, (function(t) {
                            return _.map(t, e)
                        }))
                    }, d.filter = function(t, e) {
                        return d(t, (function(t) {
                            return _.filter(t, e)
                        }))
                    }, d.reduce = h(_.reduce), d.reduceRight = h(_.reduceRight), d.isPromiseLike = function(t) {
                        return t && "function" == typeof t.then
                    }, d.Promise = _, d.defer = function() {
                        return new g
                    }, d.TimeoutError = l, d
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        UM9n: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = function() {
                for (var t, e = [], n = 100; n <= 8192;) e.push((t = n, 2 * Math.round(t / 2))), n *= 1.16;
                return e.push(8192), e
            }();
            e.default = r
        },
        UMpp: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function(t) {
                    var e = n("oYIp").inspect;
                    return function(t) {
                        return t.prototype.inspect = function() {
                            return e(t._handler(this))
                        }, t
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        YNMu: function(t, e, n) {
            "use strict";
            n.r(e), n("Z8gF"), n("GkPX"), n("asZ9"), n("W1QL");
            var r = n("UrUy"),
                o = n.n(r),
                a = n("JYC+"),
                i = n.n(a),
                s = (n("wcNg"), n("R3/3")),
                c = n("LkAs"),
                p = n("bMj6"),
                u = n("hZod"),
                l = n("YKN3"),
                _ = n("Moms"),
                f = n("tEuJ"),
                d = n("azxR"),
                h = n("mXGw"),
                A = n.n(h),
                g = n("0EY2"),
                m = n.n(g),
                w = n("o42t"),
                b = n.n(w),
                y = n("tGpF"),
                v = n.n(y),
                x = n("W0B4"),
                E = n("aKSz"),
                j = n("2CfY"),
                S = n.n(j),
                L = n("8Jek"),
                I = n.n(L),
                k = n("bBV7"),
                C = n.n(k),
                B = n("FkNS"),
                O = n.n(B),
                T = n("fXBr"),
                R = n("DPDk"),
                P = n("/m4v"),
                Q = n("DyjV"),
                M = n("a133"),
                D = n("wP3V"),
                N = n("N+vV"),
                q = n.n(N),
                H = function(t) {
                    function e(t) {
                        var n;
                        return Object(c.default)(this, e), n = Object(p.default)(this, Object(u.default)(e).call(this, t)), Object(d.a)(Object(l.default)(n), "onTouchMove", (function(t) {
                            t.preventDefault()
                        })), Object(d.a)(Object(l.default)(n), "onVideoReady", (function(t) {
                            n.videoPlayerEl = t.target
                        })), Object(d.a)(Object(l.default)(n), "onVideoPause", (function() {
                            n.setState({
                                clickedPlay: !1
                            })
                        })), Object(d.a)(Object(l.default)(n), "onVideoPlay", (function() {
                            n.setState({
                                isTrailerPlaying: !0,
                                clickedPlay: !0
                            })
                        })), Object(d.a)(Object(l.default)(n), "onVideoEnd", (function() {
                            n.setState({
                                clickedPlay: !1,
                                isTrailerPlaying: !1
                            });
                            var t = n.props.currentShow;
                            window.gtag("event", "Video Ends: ".concat(t.title), {
                                event_category: "Show Page"
                            }), D.a.logEvent("ShowPage: Ends ".concat(t.title))
                        })), Object(d.a)(Object(l.default)(n), "onClickPlay", (function() {
                            var t = n.props.currentShow;
                            n.videoPlayerEl && (n.videoPlayerEl.playVideo(), window.gtag("event", "Video Starts: ".concat(t.title), {
                                event_category: "Show Page"
                            }), D.a.logEvent("ShowPage: VideoStarts ".concat(t.title)), n.setState({
                                clickedPlay: !0
                            }))
                        })), Object(d.a)(Object(l.default)(n), "onClickClose", (function() {
                            var t = n.props.previousRoute;
                            C.a.push(t)
                        })), n.state = {
                            loadYTIframe: !1,
                            isTrailerPlaying: !1,
                            clickedPlay: !1
                        }, n
                    }
                    return Object(f.default)(e, t), Object(_.default)(e, null, [{
                        key: "getInitialProps",
                        value: function() {
                            var t = Object(s.default)(o.a.mark((function t(e) {
                                var r, a, s, c, p, u, l, _, f, d, A;
                                return o.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (r = e.ctx, a = e.query, s = v()().publicRuntimeConfig, c = s.DATO_API_TOKEN, p = s.DATO_GRAPHQL_URI, u = n("2rXV"), l = {}, !h.Component.getInitialProps) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.next = 7, h.Component.getInitialProps(r);
                                        case 7:
                                            l = t.sent;
                                        case 8:
                                            return l.showSlug = a.id, _ = n("552i"), f = _.allShowsQuery, t.next = 12, u(p, {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json",
                                                    Authorization: "Bearer ".concat(c)
                                                },
                                                body: i()({
                                                    query: f,
                                                    variables: {
                                                        slug: a.id
                                                    }
                                                })
                                            });
                                        case 12:
                                            return d = t.sent, t.next = 15, d.json();
                                        case 15:
                                            return A = t.sent, l.currentShow = A.data.currentShow[0], t.abrupt("return", {
                                                pageProps: l,
                                                query: a
                                            });
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), Object(_.default)(e, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this,
                                e = this.props.deviceOS;
                            this.elToTransition = document.querySelectorAll(".custom-slide-in-animation"), document.body.classList.add("no-scroll"), document.addEventListener("touchmove", this.onTouchMove), "iOS" !== e && "Android" !== e && this.setState({
                                clickedPlay: !0
                            }), setTimeout((function() {
                                t.elToTransition.forEach((function(t) {
                                    t.classList.add("sliding-in"), t.classList.remove("custom-slide-in-animation")
                                }))
                            }), 300), setTimeout((function() {
                                t.elToTransition.forEach((function(t) {
                                    t.classList.remove("sliding-in")
                                }))
                            }), 1e3), setTimeout((function() {
                                t.setState({
                                    loadYTIframe: !0
                                })
                            }), 400)
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(t) {
                            return this.props.currentShow === t.currentShow
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.body.classList.remove("no-scroll"), document.removeEventListener("touchmove", this.onTouchMove)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.state,
                                e = t.isTrailerPlaying,
                                n = t.clickedPlay,
                                r = t.loadYTIframe,
                                o = this.props,
                                a = o.currentShow,
                                i = o.siteTitle;
                            if (!a) return null;
                            var s, c = I()(q.a.watchTrailer, Object(d.a)({}, q.a.fadeOutTrailerPlaying, n)),
                                p = I()(q.a.shadow, Object(d.a)({}, q.a.fadeOutTrailerPlaying, n)),
                                u = I()(q.a.showThumbnail, Object(d.a)({}, q.a.fadeOutTrailerPlaying, e)),
                                l = I()(q.a.bigTogglePlayPauseBtn, q.a.circleButton, "big-toggle-play-pause-btn", Object(d.a)({}, q.a.fadeOutTrailerPlaying, n)),
                                _ = "".concat(i, " - ").concat(a.title),
                                f = "https://youtube.com/v/".concat(a.youtubeId.providerUid);
                            return s = -1 !== a.mobileThumbnail.url.indexOf("https") && -1 !== a.mobileThumbnail.url.indexOf("http") ? a.mobileThumbnail.url : "https://quibi.com".concat(a.mobileThumbnail.url), A.a.createElement(h.Fragment, null, A.a.createElement(m.a, null, A.a.createElement("title", null, _), A.a.createElement("meta", {
                                property: "og:title",
                                content: _
                            }), A.a.createElement("meta", {
                                property: "twitter:title",
                                content: _
                            }), A.a.createElement("meta", {
                                name: "description",
                                content: a.description
                            }), A.a.createElement("meta", {
                                property: "og:description",
                                content: a.description
                            }), A.a.createElement("meta", {
                                name: "twitter:description",
                                content: a.description
                            }), A.a.createElement("meta", {
                                property: "og:image",
                                content: s
                            }), A.a.createElement("meta", {
                                property: "og:video",
                                content: f
                            }), A.a.createElement("meta", {
                                property: "og:type",
                                content: "video.movie"
                            }), A.a.createElement("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }), A.a.createElement("meta", {
                                name: "twitter:player",
                                content: f
                            }), A.a.createElement("meta", {
                                name: "twitter:image",
                                content: s
                            })), A.a.createElement("div", {
                                className: q.a.youtubeModal
                            }, A.a.createElement("div", {
                                className: q.a.backgroundClick,
                                onClick: this.onClickClose
                            }), A.a.createElement("button", {
                                type: "button",
                                className: "".concat(q.a.closeButton, " custom-slide-in-animation"),
                                onClick: this.onClickClose
                            }), A.a.createElement("button", {
                                type: "button",
                                className: "".concat(q.a.videoContainer, " custom-slide-in-animation"),
                                onClick: this.onClickPlay
                            }, r && A.a.createElement(Q.a, {
                                videoId: a.youtubeId.providerUid,
                                className: q.a.trailer,
                                opts: {
                                    height: "390",
                                    width: "640",
                                    playerVars: {
                                        rel: 0,
                                        autoplay: 1,
                                        controls: 1,
                                        showinfo: 0
                                    }
                                },
                                onReady: this.onVideoReady,
                                onPause: this.onVideoPause,
                                onPlay: this.onVideoPlay,
                                onEnd: this.onVideoEnd
                            }), A.a.createElement("div", {
                                className: p
                            }), A.a.createElement(M.Image, {
                                className: u,
                                alt: a.title,
                                data: a.mobileThumbnail.responsiveImage
                            }), A.a.createElement("div", {
                                type: "button",
                                className: l
                            }, A.a.createElement("div", {
                                className: q.a.buttonIcon
                            })), !e && A.a.createElement("h5", {
                                className: c
                            }, a.videoCtaLabel)), A.a.createElement("h5", {
                                className: "".concat(q.a.showItemTitle, " custom-slide-in-animation")
                            }, a.title), A.a.createElement("h5", {
                                className: "".concat(q.a.heroShowDescription, " custom-slide-in-animation")
                            }, a.starring), A.a.createElement(R.a, {
                                className: "".concat(q.a.seeMoreShows, " custom-slide-in-animation"),
                                href: "/shows",
                                ariaLabel: "Watch more trailers",
                                outline: !0
                            }, A.a.createElement("span", null, "Watch More Trailers"))))
                        }
                    }]), e
                }(h.Component),
                U = Object(P.b)((function(t) {
                    return {
                        isMobile: t.app.isMobile,
                        deviceOS: t.app.deviceOS
                    }
                }), null)(H),
                z = n("cBIk"),
                F = n("ppBa"),
                G = n("Rbzu"),
                Y = {
                    state: {
                        isMobile: !1,
                        isTablet: !1,
                        isDesktop: !1,
                        isPortrait: !1,
                        wasHomepageVideoPlayed: !1,
                        userInteractionDetected: !1,
                        isTouch: !1,
                        isMobileNavOpen: !1,
                        isHomePageVideoVisible: !1,
                        hideNewsBanner: !0,
                        referrer: null,
                        deviceOS: null
                    },
                    reducers: {
                        setDeviceOS: function(t, e) {
                            return Object(G.a)({}, t, {
                                deviceOS: e
                            })
                        },
                        setHideNewsBanner: function(t, e) {
                            return Object(G.a)({}, t, {
                                hideNewsBanner: e
                            })
                        },
                        setReferrer: function(t, e) {
                            return Object(G.a)({}, t, {
                                referrer: e
                            })
                        },
                        setHomepageVideoPlayer: function(t) {
                            return Object(G.a)({}, t, {
                                wasHomepageVideoPlayed: !0
                            })
                        },
                        setUserInteractionDetected: function(t) {
                            return Object(G.a)({}, t, {
                                userInteractionDetected: !0
                            })
                        },
                        setMobileNavOpen: function(t, e) {
                            return Object(G.a)({}, t, {
                                isMobileNavOpen: e
                            })
                        },
                        setHomePageVideoVisibility: function(t, e) {
                            return Object(G.a)({}, t, {
                                isHomePageVideoVisible: e
                            })
                        },
                        setIsTouch: function(t, e) {
                            return Object(G.a)({}, t, {
                                isTouch: e
                            })
                        },
                        setIsPortraitMode: function(t, e) {
                            return Object(G.a)({}, t, {
                                isPortrait: e
                            })
                        },
                        setIsMobile: function(t, e) {
                            return Object(G.a)({}, t, {
                                isMobile: e
                            })
                        },
                        setIsTablet: function(t, e) {
                            return Object(G.a)({}, t, {
                                isTablet: e
                            })
                        },
                        setIsDesktop: function(t, e) {
                            return Object(G.a)({}, t, {
                                isDesktop: e
                            })
                        }
                    }
                },
                W = Object(F.init)({
                    models: {
                        app: Y
                    },
                    redux: {
                        initialState: {
                            app: {
                                isHomePageVideoVisible: !1,
                                isMobileNavOpen: !1,
                                isPortrait: null,
                                isMobile: !0,
                                isTablet: !1,
                                isDesktop: !1,
                                userInteractionDetected: !1,
                                isTouch: null,
                                referrer: null,
                                hideNewsBanner: !0,
                                deviceOS: null
                            }
                        }
                    }
                }),
                V = n("Qi1R"),
                Z = n("5dyF"),
                J = n.n(Z),
                K = n("7r6H"),
                X = n.n(K),
                $ = Object(P.b)((function(t) {
                    return {
                        isMobile: t.app.isMobile
                    }
                }))((function(t) {
                    var e = t.navigationItems,
                        n = t.moreLinks,
                        r = t.contactAddresses,
                        o = t.socialChannels,
                        a = t.footerDisclamer,
                        i = t.displayNewsDisclaimer,
                        s = t.isMobile;
                    return A.a.createElement("footer", {
                        className: X.a.container
                    }, A.a.createElement("div", {
                        className: X.a.inner
                    }, A.a.createElement("div", {
                        className: X.a.logoContainer
                    }, A.a.createElement(J.a, {
                        href: "/"
                    }, A.a.createElement("a", {
                        className: X.a.logo,
                        href: "/",
                        "aria-label": "Navigate to the homepage"
                    }, "Quibi")), A.a.createElement("em", null, "© 2020 Quibi")), A.a.createElement("div", {
                        className: X.a.navContainer
                    }, !s && A.a.createElement("div", {
                        className: X.a.mainNavContainer
                    }, A.a.createElement("p", {
                        className: X.a.mainNavTitle
                    }, "About us"), A.a.createElement("ul", null, e.map((function(t) {
                        return A.a.createElement("li", {
                            key: t.slug,
                            className: X.a.mainNav
                        }, A.a.createElement(J.a, {
                            href: t.slug,
                            as: t.slug
                        }, A.a.createElement("a", {
                            href: t.slug,
                            "aria-label": "Navigate to the ".concat(t.title, " page")
                        }, t.title)))
                    })))), A.a.createElement("div", {
                        className: X.a.mainNavContainer
                    }, A.a.createElement("p", {
                        className: X.a.mainNavTitle
                    }, "More info"), A.a.createElement("ul", null, n.map((function(t) {
                        return A.a.createElement("li", {
                            key: t.slug,
                            className: X.a.mainNav
                        }, A.a.createElement(J.a, {
                            href: t.slug,
                            as: t.slug
                        }, A.a.createElement("a", {
                            href: t.slug,
                            target: 0 === t.slug.indexOf("http://") || 0 === t.slug.indexOf("https://") ? "_blank" : "_self",
                            rel: 0 === t.slug.indexOf("http://") || 0 === t.slug.indexOf("https://") ? "noopener noreferrer" : "",
                            "aria-label": "Navigate to the ".concat(t.title, " page")
                        }, t.title)))
                    })))), A.a.createElement("div", {
                        className: X.a.mainNavContainer
                    }, A.a.createElement("p", {
                        className: X.a.mainNavTitle
                    }, "Contact us"), A.a.createElement("ul", null, r.map((function(t) {
                        return A.a.createElement("li", {
                            key: t.email,
                            className: X.a.mainNav
                        }, A.a.createElement("a", {
                            href: "mailto:".concat(t.email),
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, t.email))
                    })))), A.a.createElement("div", {
                        className: X.a.socialNavContainer
                    }, A.a.createElement("p", {
                        className: X.a.mainNavTitle
                    }, "Follow us"), A.a.createElement("ul", {
                        className: X.a.socialNavInner
                    }, o.map((function(t) {
                        return A.a.createElement("li", {
                            key: t.url,
                            className: X.a.socialNav
                        }, A.a.createElement(R.a, {
                            href: t.url,
                            className: X.a.socialChannelButton,
                            icon: t.channelType.channelTypeValue,
                            ariaLabel: "Follow us on ".concat(t.channelType.channelName),
                            onClick: function() {
                                window.gtag("event", "Clicked ".concat(t.channelType.channelName), {
                                    event_category: "Social"
                                })
                            }
                        }))
                    }))))), i && A.a.createElement("em", {
                        className: X.a.footerDisclamer
                    }, a)))
                })),
                tt = n("Z5fB"),
                et = n.n(tt),
                nt = Object(P.b)((function(t) {
                    return {
                        isMobile: t.app.isMobile
                    }
                }), (function(t) {
                    return {
                        setHideNewsBanner: t.app.setHideNewsBanner
                    }
                }))((function(t) {
                    var e = t.publicationHeadline,
                        n = t.articleUrl,
                        r = t.id,
                        o = t.setHideNewsBanner,
                        a = function() {
                            localStorage.setItem("hide-featured:".concat(r), !0), o(!0)
                        },
                        i = I()(et.a.container, {});
                    return A.a.createElement("div", {
                        className: i
                    }, A.a.createElement("button", {
                        type: "button",
                        className: et.a.closeButton,
                        onClick: a
                    }, "Close"), n && A.a.createElement("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: function() {
                            window.gtag("event", "Clicked Banner", {
                                event_category: "Featured News",
                                event_label: e
                            }), a()
                        },
                        className: et.a.articleLink
                    }, A.a.createElement("em", {
                        className: "".concat(et.a.publicationHeadline, " ").concat(et.a.isLink)
                    }, e)), (!n || "" === n) && A.a.createElement("div", {
                        className: et.a.articleLink
                    }, A.a.createElement("em", {
                        className: et.a.publicationHeadline
                    }, e)))
                })),
                rt = n("Iejh"),
                ot = n.n(rt),
                at = function() {
                    return A.a.createElement("div", {
                        className: ot.a.container
                    }, A.a.createElement("div", {
                        className: "".concat(ot.a.logoContainer, " logo-container")
                    }, A.a.createElement(J.a, {
                        href: "/"
                    }, A.a.createElement("a", {
                        className: ot.a.logo,
                        href: "/"
                    }, "Quibi"))))
                },
                it = n("vXKV"),
                st = n("eXtU"),
                ct = n.n(st);

            function pt(t) {
                O.a.show(t.target)
            }
            var ut = !0,
                lt = Object(P.b)((function(t) {
                    return {
                        isMobile: t.app.isMobile,
                        isTablet: t.app.isTablet,
                        isMobileNavOpen: t.app.isMobileNavOpen,
                        deviceOS: t.app.deviceOS
                    }
                }), (function(t) {
                    return {
                        setMobileNavOpen: t.app.setMobileNavOpen
                    }
                }))((function(t) {
                    var e = t.navigationItems,
                        n = t.contactAddresses,
                        r = t.socialChannels,
                        o = t.isMobile,
                        a = t.isMobileNavOpen,
                        i = t.setMobileNavOpen,
                        s = t.appstoreUrl,
                        c = t.googlePlayUrl,
                        p = t.downloadAppCta,
                        u = t.deviceOS,
                        l = t.isTablet,
                        _ = t.appModuleHeader,
                        f = t.appModuleSuheader,
                        h = t.isPreorderButtonPrimary,
                        g = I()(ct.a.preorderButton),
                        m = null;
                    if ("iOS" === u || "macOS" === u && l ? m = s : "Android" === u && (m = c), o) {
                        var w = I()(ct.a.mobileNavContainer, Object(d.a)({}, ct.a.open, a));
                        return A.a.useEffect((function() {
                            ut || window.gtag("event", a ? "Open nav" : " Close nav", {
                                event_category: "Mobile nav"
                            }), ut = !1, a ? (document.body.classList.add("mobile-nav-open"), setTimeout((function() {
                                document.body.classList.add("mobile-nav-open--complete")
                            }), 400)) : (document.body.classList.remove("mobile-nav-open--complete"), document.body.classList.remove("mobile-nav-open"), setTimeout((function() {
                                document.body.classList.remove("mobile-nav-open--complete")
                            }), 500));
                            var t = function() {
                                return i(!1)
                            };
                            return window.addEventListener("resize", t),
                                function() {
                                    window.removeEventListener("resize", t)
                                }
                        }), [a]), A.a.createElement("nav", {
                            className: ct.a.mobileNav
                        }, A.a.createElement(R.a, {
                            className: ct.a.toggleMobileNav,
                            icon: a ? "open-nav" : "close-nav",
                            onClick: function() {
                                return i(!a)
                            },
                            ariaLabel: "".concat(a ? "Open" : "Close", " navigation")
                        }), A.a.createElement("div", {
                            className: w
                        }, A.a.createElement("button", {
                            type: "button",
                            className: ct.a.backdrop,
                            onClick: function() {
                                return i(!1)
                            }
                        }), A.a.createElement("ul", {
                            className: ct.a.mobileMainNavContainer
                        }, e.map((function(t) {
                            return A.a.createElement("li", {
                                key: t.slug,
                                className: ct.a.mobileMainNav
                            }, A.a.createElement(J.a, {
                                href: t.slug,
                                as: t.slug,
                                scroll: !1
                            }, A.a.createElement("a", {
                                href: t.slug,
                                onClick: function() {
                                    return i(!1)
                                }
                            }, t.title)))
                        }))), A.a.createElement("p", {
                            className: ct.a.mobileSecondaryNav
                        }, "Contact us"), A.a.createElement("ul", {
                            className: ct.a.mobileMainNavContainer
                        }, n.map((function(t) {
                            return A.a.createElement("li", {
                                key: t.email,
                                className: "".concat(ct.a.mobileSecondaryNav, " ").concat(ct.a.emailLink)
                            }, A.a.createElement("a", {
                                href: "mailto:".concat(t.email),
                                onClick: function() {
                                    return i(!1)
                                },
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, t.email))
                        }))), A.a.createElement("p", {
                            className: ct.a.mobileSecondaryNav
                        }, "Follow us"), A.a.createElement("ul", {
                            className: ct.a.mobileSocialNavContainer
                        }, r.map((function(t) {
                            return A.a.createElement("li", {
                                key: t.url,
                                className: ct.a.mobileSocialNav
                            }, A.a.createElement(R.a, {
                                href: t.url,
                                className: ct.a.socialChannelButton,
                                icon: t.channelType.channelTypeValue,
                                onClick: function() {
                                    i(!1), window.gtag("event", "Clicked ".concat(t.channelType.channelName), {
                                        event_category: "Social"
                                    })
                                },
                                ariaLabel: "Follow us on ".concat(t.channelType.channelName)
                            }))
                        })))))
                    }
                    var b = e.filter((function(t) {
                        return !t.mobileOnly
                    }));
                    return A.a.createElement("nav", {
                        className: ct.a.desktopNav
                    }, !m && A.a.createElement(O.a, {
                        id: "preorder-tooltip",
                        effect: "solid",
                        place: "bottom",
                        type: "light",
                        eventOff: "mouseenter",
                        "aria-haspopup": "true",
                        delayShow: 0,
                        delayHide: 300,
                        offset: {
                            left: 100,
                            top: -4
                        },
                        clickable: !0,
                        afterShow: pt
                    }, A.a.createElement(it.a, {
                        appInfo: {
                            downloadAppCta: p,
                            appstoreUrl: s,
                            googlePlayUrl: c,
                            appModuleHeader: _,
                            appModuleSuheader: f
                        }
                    })), A.a.createElement("ul", {
                        className: ct.a.desktopContainer
                    }, b.map((function(t) {
                        return A.a.createElement("li", {
                            key: t.slug
                        }, A.a.createElement(J.a, {
                            href: t.slug,
                            as: t.slug,
                            scroll: !1
                        }, A.a.createElement("a", {
                            href: t.slug
                        }, t.title)))
                    })), A.a.createElement("li", {
                        "data-tip": "preorder",
                        "data-for": "preorder-tooltip",
                        className: ct.a.preorderContainer
                    }, A.a.createElement(R.a, {
                        primary: h,
                        className: g,
                        ariaLabel: p,
                        href: m,
                        onClick: function() {
                            window.gtag("event", "Clicked preorder", {
                                event_category: "Nav"
                            }), D.a.logEvent("Nav: Clicked preorder")
                        }
                    }, A.a.createElement("span", null, p)))))
                })),
                _t = n("GFNa"),
                ft = n.n(_t),
                dt = function(t) {
                    function e(t) {
                        var n;
                        return Object(c.default)(this, e), n = Object(p.default)(this, Object(u.default)(e).call(this, t)), Object(d.a)(Object(l.default)(n), "onInteractionDetected", (function() {
                            var t = n.props.setUserInteractionDetected;
                            document.body.removeEventListener("click", n.onInteractionDetected), t()
                        })), Object(d.a)(Object(l.default)(n), "onComponentVisible", (function(t) {
                            t.forEach((function(t) {
                                if (t.boundingClientRect.bottom < 0) return t.target.classList.remove("slide-in-animation"), void window.scrollObserver.unobserve(t.target);
                                if (t.isIntersecting) {
                                    var e = 0;
                                    performance.now() - n.lastPageChange < 500 && (e = 900);
                                    var r = Math.min(1e3, Math.max(.2 * t.boundingClientRect.top, 0));
                                    window.scrollObserver.unobserve(t.target), setTimeout((function() {
                                        t.target.classList.add("sliding-in"), t.target.classList.remove("slide-in-animation")
                                    }), r + e), setTimeout((function() {
                                        t.target.classList.remove("sliding-in")
                                    }), r + 2e3 + e)
                                }
                            }))
                        })), Object(d.a)(Object(l.default)(n), "startObserve", (function() {
                            n.targetsToObserve = document.querySelectorAll(".slide-in-animation"), n.targetsToObserve.forEach((function(t) {
                                window.scrollObserver.observe(t)
                            }))
                        })), Object(d.a)(Object(l.default)(n), "onPageChangeStart", (function(t) {
                            document.body.classList.remove("mobile-nav-open--complete"), document.body.classList.remove("mobile-nav-open");
                            var e = n.props.pageProps.pathname;
                            if (n.previousRoute = e, t !== e) {
                                n.scrollWhileTransition = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop, window.addEventListener("scroll", n.onScrollWhileRouteTransition), n.targetsToObserve.forEach((function(t) {
                                    window.scrollObserver.unobserve(t)
                                }));
                                var r = n.props.setHideNewsBanner,
                                    o = n.state.featuredNewsBanner,
                                    a = localStorage.getItem("hide-featured:".concat(o.id)) || !1;
                                "/" !== t && "" !== t ? r(!0) : a || r(!1)
                            }
                        })), Object(d.a)(Object(l.default)(n), "onPageChangeComplete", (function(t) {
                            var e = n.props.pageProps,
                                r = e.GA_ID;
                            e.query, "/news" === t || "/news/" === t ? n.setState({
                                displayNewsDisclaimer: !0
                            }) : n.setState({
                                displayNewsDisclaimer: !1
                            }), !0 === window.acceptAnalytics && (window.gtag("config", r, {
                                page_path: t
                            }), D.a.trackPageView(t), window.twq && window.twq("track", "PageView"), window.snaptr && window.snaptr("track", "PAGE_VIEW")), n.lastPageChange = performance.now(), n.startObserve(), n.stickyWrapperRef.current.classList.remove("hide-logo")
                        })), Object(d.a)(Object(l.default)(n), "onScrollPage", (function() {
                            var t = n.props.pageProps.pathname,
                                e = 0;
                            n.headerRef.current && (e = n.headerRef.current.getBoundingClientRect().height);
                            var r = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
                            if (r > 500) document.documentElement.classList.add("black"), document.documentElement.classList.remove("deep");
                            else if ("" !== t && "/" !== t) {
                                document.documentElement.classList.remove("black");
                                var o = t.split("/");
                                "shows" !== o[1] && "show-details" !== o[1] || document.documentElement.classList.add("black")
                            }
                            r < n.lastScrollY ? (n.isStickyHidden && n.stickyWrapperRef.current && (n.stickyWrapperRef.current.style.height = "".concat(Math.max(r, e), "px")), n.isStickyHidden = !1, n.lastScrollY = r) : (!n.isStickyHidden && n.stickyWrapperRef.current && (n.stickyWrapperRef.current.style.height = "".concat(Math.max(r + e, e), "px")), n.isStickyHidden = !0, n.lastScrollY = r)
                        })), Object(d.a)(Object(l.default)(n), "setPageBackgroundColor", (function() {
                            var t = n.props.pageProps.pathname,
                                e = t.split("/");
                            document.documentElement.classList.remove("black"), document.documentElement.classList.remove("white"), "" !== t && "/" !== t && "shows" !== e[1] && "show-details" !== e[1] || document.documentElement.classList.add("black"), "/news" !== t && "/news/" !== t || document.documentElement.classList.add("white")
                        })), Object(d.a)(Object(l.default)(n), "onResize", (function() {
                            var t = n.props,
                                e = t.setIsPortraitMode,
                                r = t.setIsMobile,
                                o = t.setIsTablet,
                                a = t.setIsDesktop;
                            e(Object(V.b)()), r(window.innerWidth < 768 && window.innerWidth / window.innerHeight < 1.2), document.body.classList.remove("mobile-nav-open"), o(window.innerWidth >= 768 && window.innerWidth < 1024), a(window.innerWidth >= 1024)
                        })), Object(d.a)(Object(l.default)(n), "onTouchStart", (function() {
                            (0, n.props.setIsTouch)(!0), document.body.removeEventListener("touchstart", n.onTouchStart)
                        })), Object(d.a)(Object(l.default)(n), "onScrollWhileRouteTransition", (function() {
                            n.nextPageScrollPosition = 0, window.removeEventListener("scroll", n.onScrollWhileRouteTransition), window.scrollTo(0, n.scrollWhileTransition)
                        })), Object(d.a)(Object(l.default)(n), "onPageTransitionOut", (function() {
                            document.body.classList.remove("page-loaded");
                            var t = n.props.pageProps.pathname,
                                e = t.split("/");
                            n.pageTransitionOverlayEl.classList.remove("black"), n.pageTransitionOverlayEl.classList.remove("swiping-out"), n.pageTransitionOverlayEl.classList.add("swiping-in"), "/" !== t && "" !== t && "shows" !== e[1] && "show-details" !== e[1] && "/confirmation/" !== t && "/confirmation" !== t || n.pageTransitionOverlayEl.classList.add("black")
                        })), Object(d.a)(Object(l.default)(n), "onPageTransitionIn", (function() {
                            setTimeout((function() {
                                window.scrollTo(0, n.nextPageScrollPosition), window.removeEventListener("scroll", n.onScrollWhileRouteTransition), n.pageTransitionOverlayEl.classList.remove("swiping-in"), n.pageTransitionOverlayEl.classList.add("swiping-out"), n.scrollWhileTransition = 0, n.setPageBackgroundColor()
                            }), 800), setTimeout((function() {
                                window.scrollTo(0, n.nextPageScrollPosition), n.nextPageScrollPosition = 0, n.pageTransitionOverlayEl.classList.remove("black"), n.pageTransitionOverlayEl.classList.remove("swiping-out"), document.body.classList.add("page-loaded")
                            }), 1400)
                        })), n.scrollWhileTransition = 0, n.nextPageScrollPosition = 0, n.lastScrollY = 0, n.state = {
                            isHeaderFloating: !1,
                            displayNewsDisclaimer: !1,
                            featuredNewsBanner: {}
                        }, n.isStickyHidden = !1, n.stickyWrapperRef = A.a.createRef(), n.headerRef = A.a.createRef(), n
                    }
                    return Object(f.default)(e, t), Object(_.default)(e, null, [{
                        key: "getInitialProps",
                        value: function() {
                            var t = Object(s.default)(o.a.mark((function t(e) {
                                var r, a, s, c, p, u, l, _, f, d, h, A, g, m, w, b, y, x, E, j, S, L, I;
                                return o.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (r = e.Component, a = e.ctx, s = {}, !r.getInitialProps) {
                                                t.next = 6;
                                                break
                                            }
                                            return t.next = 5, r.getInitialProps(a);
                                        case 5:
                                            s = t.sent;
                                        case 6:
                                            if (c = v()().publicRuntimeConfig, p = c.USE_GRAPHQL, u = c.DATO_API_TOKEN, l = c.DATO_GRAPHQL_URI, _ = c.GA_ID, f = c.KILL_PAGE_TRANSITIONS, d = c.TWITTER_PIXEL_ID, h = c.SNAP_PIXEL_ID, A = c.IMGIX_QUERY_DELIM, g = c.IMGIX_DEBUG_URL, m = n("2rXV"), w = a.pathname, b = a.query, s.pathname = w, s.query = b, A && (T.PublicConfigAPI.setMockFormat(!0), T.PublicConfigAPI.setQueryDelim(A)), g && T.PublicConfigAPI.setDebugUrl(!0), "1" !== p) {
                                                t.next = 28;
                                                break
                                            }
                                            return x = n("p5jI"), E = n("552i"), j = E.fullSiteQuery, t.next = 18, m(l, {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json",
                                                    Authorization: "Bearer ".concat(u)
                                                },
                                                body: i()({
                                                    query: j,
                                                    variables: {
                                                        locale: "en"
                                                    }
                                                })
                                            });
                                        case 18:
                                            return S = t.sent, t.next = 21, S.json();
                                        case 21:
                                            return L = t.sent, t.next = 24, x(L);
                                        case 24:
                                            I = t.sent, y = I, t.next = 29;
                                            break;
                                        case 28:
                                            y = {
                                                global: {
                                                    siteTitle: "Quibi ",
                                                    siteDescription: "Quick bites of captivating entertainment, created for mobile by the best talent, designed to fit perfectly into any moment of your day.",
                                                    navigationItems: [{
                                                        slug: "/",
                                                        title: "Home",
                                                        mobileOnly: !0
                                                    }, {
                                                        slug: "/shows",
                                                        title: "Shows",
                                                        mobileOnly: !1
                                                    }, {
                                                        slug: "/our-story",
                                                        title: "Our Story",
                                                        mobileOnly: !1
                                                    }, {
                                                        slug: "/news",
                                                        title: "News",
                                                        mobileOnly: !1
                                                    }, {
                                                        slug: "/careers",
                                                        title: "Careers",
                                                        mobileOnly: !1
                                                    }],
                                                    contactAddresses: [{
                                                        email: "press@quibi.com"
                                                    }, {
                                                        email: "help@quibi.com"
                                                    }],
                                                    socialChannels: [{
                                                        id: "1893098",
                                                        url: "https://twitter.com/quibi?lang=en",
                                                        channelType: {
                                                            channelTypeValue: "twitter",
                                                            channelName: "Twitter"
                                                        }
                                                    }, {
                                                        id: "1893097",
                                                        url: "https://www.instagram.com/quibi/?hl=en",
                                                        channelType: {
                                                            channelTypeValue: "instagram",
                                                            channelName: "Instagram"
                                                        }
                                                    }, {
                                                        id: "1893165",
                                                        url: "https://www.youtube.com/c/quibi",
                                                        channelType: {
                                                            channelTypeValue: "youtube",
                                                            channelName: "Youtube"
                                                        }
                                                    }, {
                                                        id: "1893164",
                                                        url: "https://www.linkedin.com/company/quibi-mobiletv",
                                                        channelType: {
                                                            channelTypeValue: "linkedin",
                                                            channelName: "LinkedIn"
                                                        }
                                                    }],
                                                    moreLinks: [{
                                                        id: "1903654",
                                                        slug: "/privacy-policy",
                                                        title: "Privacy Policy"
                                                    }, {
                                                        id: "1903657",
                                                        slug: "/terms-of-service",
                                                        title: "Terms of Service"
                                                    }],
                                                    insiderBannerTitle: "Sign up to learn more about our limited time 90-day free trial and exclusive perks. It’ll be gone in a Quibi.",
                                                    insiderBannerText: "Try 90 days free.<br>Limited time. Learn more.\n<br/>",
                                                    insiderBannerCta: "Confirm",
                                                    insiderBannerLegals: "I’d like to receive updates, special offers and other information from Quibi. Here is our <a target='_blank' rel='noopener noreferrer'  href=\"/privacy-policy/\">Privacy Policy</a>.\n<br/>",
                                                    footerDisclamer: "The links to third-party articles on this website are provided for informational purposes only and for ease of reference. The inclusion of any article does not constitute a representation or warranty by Quibi that such article is accurate and complete or is free from any misstatements or omissions. Quibi disclaims any duty or responsibility to provide any supplements, corrections or updates to any such articles.",
                                                    downloadAppCta: "Pre-order",
                                                    appModuleHeader: "Launching April 6",
                                                    appModuleSuheader: "Pre-order Quibi Now",
                                                    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.quibi.qlient",
                                                    appstoreUrl: "https://itunes.apple.com/us/app/quibi-new-episodes-daily/id1449048178"
                                                },
                                                homepageFeaturedShowsModule: {
                                                    featuredShowsHeadline: "WATCH THE NEWEST TRAILERS",
                                                    cta: "More Trailers",
                                                    featuredShows: [{
                                                        id: "2553233"
                                                    }, {
                                                        id: "2553304"
                                                    }, {
                                                        id: "2553395"
                                                    }]
                                                },
                                                allHomepageProductModules: [{
                                                    image: {
                                                        id: "1267463",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-0__25_fit-crop.jpg 93w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-0__5_fit-crop.jpg 187w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-0__75_fit-crop.jpg 281w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-1_fit-crop.jpg 375w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-1__5_fit-crop.jpg 562w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-2_fit-crop.jpg 750w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-3_fit-crop.jpg 1125w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-4_fit-crop.jpg 1500w",
                                                            webpSrcSet: "/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-0__25_fit-crop_fm-webp.webp 93w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-0__5_fit-crop_fm-webp.webp 187w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-0__75_fit-crop_fm-webp.webp 281w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-1_fit-crop_fm-webp.webp 375w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-1__5_fit-crop_fm-webp.webp 562w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-2_fit-crop_fm-webp.webp 750w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-3_fit-crop_fm-webp.webp 1125w,\n/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_dpr-4_fit-crop_fm-webp.webp 1500w",
                                                            sizes: "(max-width: 375px) 100vw, 375px",
                                                            src: "/static/content/1580412030-quality-shows-v3__jpg__ar-1_2_auto-format_fit-crop.jpg",
                                                            width: 375,
                                                            height: 750,
                                                            aspectRatio: .5,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#32c7cd",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIyslLiofIiEtKz41Jik0NSEaNkExNTk7OjU+JS44PUMwPD5FOjYBCgsLDg0OHBAQHDscFig7LzsvOy8vOy87OzUvOy87Lzs7Ly87Ly8vOy8vNS87Ly87Lzs7LzsvLy8vOy87Ly87L//AABEIABgADAMBIgACEQEDEQH/xAAYAAEAAwEAAAAAAAAAAAAAAAAFAQQGAP/EACEQAAEDAgcBAAAAAAAAAAAAAAEAAgQDBQYREhUlMXEh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AvMi8m3xG3qNyLvAmmSae5A5hE3qVT3F30dBMVYZmN3iWKhpv0oy5YmlzJrq1I6GkZAFSuQn/2Q=="
                                                        }
                                                    }
                                                }, {
                                                    image: {
                                                        id: "1267464",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-0__25_fit-crop.jpg 93w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-0__5_fit-crop.jpg 187w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-0__75_fit-crop.jpg 281w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-1_fit-crop.jpg 375w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-1__5_fit-crop.jpg 562w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-2_fit-crop.jpg 750w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-3_fit-crop.jpg 1125w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-4_fit-crop.jpg 1500w",
                                                            webpSrcSet: "/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-0__25_fit-crop_fm-webp.webp 93w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-0__5_fit-crop_fm-webp.webp 187w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-0__75_fit-crop_fm-webp.webp 281w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-1_fit-crop_fm-webp.webp 375w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-1__5_fit-crop_fm-webp.webp 562w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-2_fit-crop_fm-webp.webp 750w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-3_fit-crop_fm-webp.webp 1125w,\n/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_dpr-4_fit-crop_fm-webp.webp 1500w",
                                                            sizes: "(max-width: 375px) 100vw, 375px",
                                                            src: "/static/content/1580412043-new-episodes-v3__jpg__ar-1_2_auto-format_fit-crop.jpg",
                                                            width: 375,
                                                            height: 750,
                                                            aspectRatio: .5,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#902af7",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEwgPExULDhgQDg0ODhENFREYFxMlGCImJhYdHy0jJh0oJhUeJjUlKC0vMjIyHiI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7OzsvOzsvOzs7Ozs7Ozs7Lzs7Lzs7OzsvOzs7Ly8vOy87Ozs7LzsvLy87Lzs1Ly8vL//AABEIABgADAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAFAAEE/8QAHhAAAQQCAwEAAAAAAAAAAAAAAgABAxEEEhMhMQX/xAAWAQADAAAAAAAAAAAAAAAAAAADBAX/xAAbEQACAQUAAAAAAAAAAAAAAAAAAQIDERMhMf/aAAwDAQACEQMRAD8ALMetkTPFvK5JM5hfGd7WADYhtMqsBx7C8X6vPhu9qos2g9UUU+cnFuwddSP/2Q=="
                                                        }
                                                    }
                                                }, {
                                                    image: {
                                                        id: "1267466",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-0__25_fit-crop.jpg 93w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-0__5_fit-crop.jpg 187w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-0__75_fit-crop.jpg 281w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-1_fit-crop.jpg 375w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-1__5_fit-crop.jpg 562w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-2_fit-crop.jpg 750w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-3_fit-crop.jpg 1125w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-4_fit-crop.jpg 1500w",
                                                            webpSrcSet: "/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-0__25_fit-crop_fm-webp.webp 93w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-0__5_fit-crop_fm-webp.webp 187w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-0__75_fit-crop_fm-webp.webp 281w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-1_fit-crop_fm-webp.webp 375w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-1__5_fit-crop_fm-webp.webp 562w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-2_fit-crop_fm-webp.webp 750w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-3_fit-crop_fm-webp.webp 1125w,\n/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_dpr-4_fit-crop_fm-webp.webp 1500w",
                                                            sizes: "(max-width: 375px) 100vw, 375px",
                                                            src: "/static/content/1580412057-on-the-go-v3__jpg__ar-1_2_auto-format_fit-crop.jpg",
                                                            width: 375,
                                                            height: 750,
                                                            aspectRatio: .5,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#a2d064",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLChEXDhgZGQ0NFRYSFREYFxMlHRYfIiYmHysjJh4oHhUmJTUlKC0vMjIyHiI4PTcwPCsxMi8BCgsLDg0OHBAQHDseFig7LzsvLy81Oy8vLzsvOzUvLy8vLzU7NS8vLy8vOy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgADAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAEBQADBv/EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAgMRBBMFEnH/xAAWAQADAAAAAAAAAAAAAAAAAAABAgP/xAAaEQACAgMAAAAAAAAAAAAAAAAAAQIRAyEx/9oADAMBAAIRAxEAPwDISYtHrSodB1dSbTFu4ILIe0TFSWRhvQJPyQEoNpXl8uN5qz4oomjFUBcP/9k="
                                                        }
                                                    }
                                                }, {
                                                    image: {
                                                        id: "1367341",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-0__25_fit-crop.jpg 112w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-0__5_fit-crop.jpg 225w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-0__75_fit-crop.jpg 337w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-1_fit-crop.jpg 450w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-1__5_fit-crop.jpg 675w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-2_fit-crop.jpg 901w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-3_fit-crop.jpg 1351w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-4_fit-crop.jpg 1802w",
                                                            webpSrcSet: "/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-0__25_fit-crop_fm-webp.webp 112w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-0__5_fit-crop_fm-webp.webp 225w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-0__75_fit-crop_fm-webp.webp 337w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-1_fit-crop_fm-webp.webp 450w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-1__5_fit-crop_fm-webp.webp 675w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-2_fit-crop_fm-webp.webp 901w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-3_fit-crop_fm-webp.webp 1351w,\n/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_dpr-4_fit-crop_fm-webp.webp 1802w",
                                                            sizes: "(max-width: 450px) 100vw, 450px",
                                                            src: "/static/content/1582571789-product-module-4__jpg__ar-1_2_auto-format_fit-crop.jpg",
                                                            width: 450,
                                                            height: 901,
                                                            aspectRatio: .5,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c17d1d",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIDwgLERYLDhgVGhEZGRoOEBESFxklGBYWFhUaHysjHSkoHRUWMDUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs1Ozs7Lzs7LzsvOzsvLy8vOzsvOy8vOy8vOy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgADAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAAAwYE/8QAHRAAAQQCAwAAAAAAAAAAAAAAAwABAhEEBRITIf/EABYBAQEBAAAAAAAAAAAAAAAAAAQFAf/EABsRAAICAwEAAAAAAAAAAAAAAAACARIRIUEE/9oADAMBAAIRAxEAPwCfwI0Lis+QB3M6djFaM6tMLOPYplejmUnx7CjP6kZW7aBnjaEJCLDTiTPQ1H0f/9k="
                                                        }
                                                    }
                                                }],
                                                insiderBanner: {
                                                    newsletterConfirmationTitle: "You’re a Quibi Insider now!",
                                                    newsletterConfirmationText: "Keep an eye on your inbox.<br>Limited time 90-day free trial offer and exclusive perks await.\n<br/>"
                                                },
                                                showsPage: {
                                                    id: "3132353",
                                                    featuredShowHeadline: "NEW SHOWS EVERY WEEK. \nNEW EPISODES EVERY DAY.",
                                                    showsListHeadline: "WATCH THE NEWEST TRAILERS",
                                                    featuredShow: null
                                                },
                                                allShows: [{
                                                    id: "2553233",
                                                    title: "Survive",
                                                    showsSlug: "survive",
                                                    description: "There's only one rule when you're fighting for your life. Sophie Turner and Corey Hawkins. Survive. Coming April 2020. Only on Quibi. ",
                                                    starring: "Starring Sophie Turner",
                                                    desktopThumbnail: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-0__25_fit-max_w-480.jpg 120w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-0__5_fit-max_w-480.jpg 240w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-0__75_fit-max_w-480.jpg 360w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-1_fit-max_w-480.jpg 480w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-1__5_fit-max_w-480.jpg 720w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-2_fit-max_w-480.jpg 960w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-3_fit-max_w-480.jpg 1440w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-4_fit-max_w-480.jpg 1920w",
                                                            webpSrcSet: "/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-480.webp 120w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-480.webp 240w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-480.webp 360w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-1_fit-max_fm-webp_w-480.webp 480w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-480.webp 720w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-2_fit-max_fm-webp_w-480.webp 960w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-3_fit-max_fm-webp_w-480.webp 1440w,\n/static/content/1581012751-survivevertical-key-art__jpg__auto-format_dpr-4_fit-max_fm-webp_w-480.webp 1920w",
                                                            sizes: "(max-width: 480px) 100vw, 480px",
                                                            src: "/static/content/1581012751-survivevertical-key-art__jpg__auto-format_fit-max_w-480.jpg",
                                                            width: 480,
                                                            height: 711,
                                                            aspectRatio: .6750272628135223,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#dd5c24",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICBMQExALDhgNDg0NDxINFg0YFx8eGBYVFhUaHysjGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsdIig7Oy87Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAEAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAFAAEE/8QAIBAAAQMDBQEAAAAAAAAAAAAAAQACAwURUQQGE2FiJP/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERL/2gAMAwEAAhEDEQA/AGt1M+uE+gm2yA0lo6RO5bSaiO2VsLyymtvhT0y+FQZU5OXWxtOUnUhxUm4wqUSFFBXN0f/Z"
                                                        }
                                                    },
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583532707-survproductshowlevels01horzv03-1__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7764618800888232,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#3a6391",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLChYTDh4QDQkNDhEXDQ0NFx8ZGBYTFhUmHysjGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDUlIh0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAEAAMG/8QAHxAAAAUEAwAAAAAAAAAAAAAAAAECAwQFERMhBhIi/8QAFgEBAQEAAAAAAAAAAAAAAAAABAIA/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAIRAQP/2gAMAwEAAhEDEQA/ANhPk4iuLqXMypsCPIJ3SgiKylpPkZ7SlkB8isbZ7EA686rqZCBnNtxQ7rdP/9k="
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1581022459-survivelogo__svg.svg"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "UmIVtF9JdCQ",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/UmIVtF9JdCQ/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=UmIVtF9JdCQ"
                                                    }
                                                }, {
                                                    id: "2553304",
                                                    title: "Most Dangerous Game",
                                                    showsSlug: "most-dangerous-game",
                                                    description: "Staying alive comes at a price. Liam Hemsworth and Christoph Waltz. Most Dangerous Game. Coming April 2020. Only on Quibi. ",
                                                    starring: "Starring Liam Hemsworth and Christoph Waltz",
                                                    desktopThumbnail: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-0__25_fit-max_w-480.jpg 120w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-0__5_fit-max_w-480.jpg 240w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-0__75_fit-max_w-480.jpg 360w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-1_fit-max_w-480.jpg 480w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-1__5_fit-max_w-480.jpg 720w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-2_fit-max_w-480.jpg 960w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-3_fit-max_w-480.jpg 1440w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-4_fit-max_w-480.jpg 1920w",
                                                            webpSrcSet: "/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-480.webp 120w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-480.webp 240w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-480.webp 360w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-1_fit-max_fm-webp_w-480.webp 480w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-480.webp 720w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-2_fit-max_fm-webp_w-480.webp 960w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-3_fit-max_fm-webp_w-480.webp 1440w,\n/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_dpr-4_fit-max_fm-webp_w-480.webp 1920w",
                                                            sizes: "(max-width: 480px) 100vw, 480px",
                                                            src: "/static/content/1581012861-most-dangerous-gamevertical-key-art__jpg__auto-format_fit-max_w-480.jpg",
                                                            width: 480,
                                                            height: 690,
                                                            aspectRatio: .6949152542372882,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#255ea9",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLERYVDhgVDRUVFRIODhUYFxcZHSIWIhUaHyslGh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oIig7Ozs7Ly8vLy8vNS87Oy8vNS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAEAMBIgACEQEDEQH/xAAZAAABBQAAAAAAAAAAAAAAAAAFAAEDBAb/xAAdEAABBAIDAAAAAAAAAAAAAAADAAEEEQISBSEx/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABoRAAICAwAAAAAAAAAAAAAAAAECACEDERL/2gAMAwEAAhEDEQA/AMKGA7dUml8Y+l0jw8Md2UsoOLi8Tch2sMlMINxlURlcIfYSSSEHJETyKn//2Q=="
                                                        }
                                                    },
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583532611-mdgproductshowlevels01horzv02__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7777777777777777,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#3d85d4",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLChYLDhcVFRkVDhcNDRENFx0aGBYfFhUaHysjHR0oHRUWJDUlKC0vMjIyHSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7OzsvOzs7Ozs7Lzs1OzsvOzUvLzs7Oy8vOy87NTsvLy8vLy8vLy8vNS8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABAUG/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIABAMFIRET/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABwRAAICAgMAAAAAAAAAAAAAAAIDAAEhMQQREv/aAAwDAQACEQMRAD8AzD2vkwPkr6/Yhkk7NXRj0Shrq2MKORo8k9XDGoLrEX3F4jGSB7CP3KeJl6IQDms94ilCIj1P/9k="
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1581022472-most-dangerous-game2-lineslogo__svg.svg"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "d7Lc8Eo6yTc",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/d7Lc8Eo6yTc/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=d7Lc8Eo6yTc"
                                                    }
                                                }, {
                                                    id: "2553395",
                                                    title: "NightGowns",
                                                    showsSlug: "nightgowns",
                                                    description: "Nothing feels more alive. Sasha Velour welcomes you to NightGowns. Coming April 2020. Only on Quibi.",
                                                    starring: "Starring Sasha Velour",
                                                    desktopThumbnail: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-0__25_fit-max_w-480.jpg 120w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-0__5_fit-max_w-480.jpg 240w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-0__75_fit-max_w-480.jpg 360w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-1_fit-max_w-480.jpg 480w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-1__5_fit-max_w-480.jpg 720w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-2_fit-max_w-480.jpg 960w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-3_fit-max_w-480.jpg 1440w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-4_fit-max_w-480.jpg 1920w",
                                                            webpSrcSet: "/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-480.webp 120w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-480.webp 240w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-480.webp 360w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-1_fit-max_fm-webp_w-480.webp 480w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-480.webp 720w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-2_fit-max_fm-webp_w-480.webp 960w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-3_fit-max_fm-webp_w-480.webp 1440w,\n/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_dpr-4_fit-max_fm-webp_w-480.webp 1920w",
                                                            sizes: "(max-width: 480px) 100vw, 480px",
                                                            src: "/static/content/1581052681-nightgownsvertical-key-art__jpg__auto-format_fit-max_w-480.jpg",
                                                            width: 480,
                                                            height: 810,
                                                            aspectRatio: .592557251908397,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c89735",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLDRYLFxgLFhYODRUNDQ0YFx8ZGCIVIhYaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAOHC8cIig7LzsvOy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgADgMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABAUG/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAEDAgQREgUhI//EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAaEQADAAMBAAAAAAAAAAAAAAAAARESISIC/9oADAMBAAIRAxEAPwDYX0b3TErhZwW+Qh7RMmiw0F5bzgs5pc5Cn1pQhexqnUAGSVCb0f/Z"
                                                        }
                                                    },
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583532646-gownproductshowlevels01horzv01__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7777777777777777,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c69538",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwwHBgoTCAoNDQ4NDg0ODgYHDhENDhEYFxYZGBYVFhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8lIiUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAZAAABBQAAAAAAAAAAAAAAAAADAAECBAb/xAAcEAABAwUAAAAAAAAAAAAAAAAAAQIRAwQSMTL/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/EABkRAAMAAwAAAAAAAAAAAAAAAAABAhEhMf/aAAwDAQACEQMRAD8A3E5DOZCEaWw7+SVORSyjVcIHcrCiEtAfT//Z"
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1581053816-nightgowns-logo__svg.svg"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "bBT5t5Zd4kg",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/bBT5t5Zd4kg/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=bBT5t5Zd4kg"
                                                    }
                                                }, {
                                                    id: "2189741",
                                                    title: "The Fugitive",
                                                    showsSlug: "the-fugitive",
                                                    description: "Wrongfully accused. On the run. The Fugitive. Kiefer Sutherland and Boyd Holbrook. Coming April 2020. Only on Quibi.",
                                                    starring: "Starring Kiefer Sutherland and Boyd Holbrook",
                                                    desktopThumbnail: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-0__25_fit-max_w-480.jpg 120w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-0__5_fit-max_w-480.jpg 240w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-0__75_fit-max_w-480.jpg 360w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-1_fit-max_w-480.jpg 480w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-1__5_fit-max_w-480.jpg 720w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-2_fit-max_w-480.jpg 960w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-3_fit-max_w-480.jpg 1440w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-4_fit-max_w-480.jpg 1920w",
                                                            webpSrcSet: "/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-480.webp 120w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-480.webp 240w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-480.webp 360w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-1_fit-max_fm-webp_w-480.webp 480w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-480.webp 720w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-2_fit-max_fm-webp_w-480.webp 960w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-3_fit-max_fm-webp_w-480.webp 1440w,\n/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_dpr-4_fit-max_fm-webp_w-480.webp 1920w",
                                                            sizes: "(max-width: 480px) 100vw, 480px",
                                                            src: "/static/content/1581012665-the-fugitivevertical-key-art__jpg__auto-format_fit-max_w-480.jpg",
                                                            width: 480,
                                                            height: 726,
                                                            aspectRatio: .6602768903088392,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#ea1216",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICBAUDw4LFhgOCw0LDhENDg0NFx8ZGBYVFhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAOFS8dIh0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgADwMBEQACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAEAwD/xAAcEAACAgIDAAAAAAAAAAAAAAABAgADBBESISL/xAAZAQACAwEAAAAAAAAAAAAAAAACBQMEBgH/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIDBCH/2gAMAwEAAhEDEQA/ABYq8XEUQjedOiY687QSVCu6Bo2mnIQe9Ms9vQhFVvwCtnqRyxn0ZmyLSqiEyhUn/9k="
                                                        }
                                                    },
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583532760-thefugitiveproductshowlevelheros1hor33__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7764618800888232,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#f80b0c",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoNDhgODg4NDh0NCw0WFx8ZGBYfIhUeKysjGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA0QHC8lIiYvLy8vLzUvLy8vLy81Ly8vLy8vLzU1NS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBEQACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAFBP/EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAgQhERIDBRP/xAAYAQEBAAMAAAAAAAAAAAAAAAAFAwEEB//EABsRAAIDAAMAAAAAAAAAAAAAAAABAgMRBCEx/9oADAMBAAIRAxEAPwAPlg6inFA2S062r+i7r4tBYriwvkX6xTxDAtjAydmhDnFxwVJLR2axFsU6ilaKBb/Sh/IcLLIRWn//2Q=="
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1581022487-the-fugitivelogo__svg.svg"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "nKPuomRV5C8",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/nKPuomRV5C8/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=nKPuomRV5C8"
                                                    }
                                                }, {
                                                    id: "2189742",
                                                    title: "Flipped",
                                                    showsSlug: "flipped",
                                                    description: "Will Forte. Kaitlin Olson. Renovations & cartels. Flipped. Coming April 2020. Only on Quibi. ",
                                                    starring: "Starring Kaitlin Olson and Will Forte",
                                                    desktopThumbnail: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-0__25_fit-max_w-480.jpg 120w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-0__5_fit-max_w-480.jpg 240w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-0__75_fit-max_w-480.jpg 360w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-1_fit-max_w-480.jpg 480w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-1__5_fit-max_w-480.jpg 720w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-2_fit-max_w-480.jpg 960w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-3_fit-max_w-480.jpg 1440w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-4_fit-max_w-480.jpg 1920w",
                                                            webpSrcSet: "/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-480.webp 120w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-480.webp 240w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-480.webp 360w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-1_fit-max_fm-webp_w-480.webp 480w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-480.webp 720w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-2_fit-max_fm-webp_w-480.webp 960w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-3_fit-max_fm-webp_w-480.webp 1440w,\n/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_dpr-4_fit-max_fm-webp_w-480.webp 1920w",
                                                            sizes: "(max-width: 480px) 100vw, 480px",
                                                            src: "/static/content/1581012707-flippedvertical-key-art__jpg__auto-format_fit-max_w-480.jpg",
                                                            width: 480,
                                                            height: 726,
                                                            aspectRatio: .6602768903088392,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#bd3634",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgQDg0VDh8QHR0dIx8wJCIdLhYeHy0jGh0oKSEiMDUlKC0vMjIyHSI4PTcwPC0xMi8BCgsLDg0OHBAQHDsoIig7Ozs7OzU1Lzs7Ozs7Ozs1Ly81OzsvOy81Ozs7Oy87Ozs7LzsvLy87Ly87Lzs1Ly8vL//AABEIABgADwMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAAAwEEBv/EACEQAAEEAQMFAAAAAAAAAAAAAAIAAQMFEQYSIQQiMUFx/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMA/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECERMhQv/aAAwDAQACEQMRAD8AdVRvuUX0eAb6mVEw7vKXqPqAaNufaLjtUKUjOUds5tnKp6tujCIRB+534QhaDb0R5s//2Q=="
                                                        }
                                                    },
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583532820-flipproductshowlevels01horzv02__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7764618800888232,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#ae754e",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgQDg0NGh0VFhEYIx8lJCIfKxotHzc1HS40KSEmMEElKDI1Mj4yJS44PTcwPC01Pi8BCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsvNTsvNTs7Ozs7Oy87LzU7Lzs7Oy81LzUvOzU1L//AABEIAA0AGAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABgcF/8QAHxAAAgEEAgMAAAAAAAAAAAAAAQIDAAURMQQGIUGR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMC/8QAGREAAwEBAQAAAAAAAAAAAAAAAQIDADER/9oADAMBAAIRAxEAPwBM6bdgZTFJ4ZT9qkrdI14+xqopYpGjuaFTsEU+NO54+/VFqfG1lpszul5jdTEpyzUUq3x2e5Nk5wKKTNiFGyaE83//2Q=="
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1581022495-flippedlogo__svg.svg"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "fWrd4mhGhwg",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/fWrd4mhGhwg/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=fWrd4mhGhwg"
                                                    }
                                                }, {
                                                    id: "2189740",
                                                    title: "Elba vs Block",
                                                    showsSlug: "elba-vs-block",
                                                    description: "Insane stunts, cars, and superstars. Idris Elba and Ken Block go head to head to see who’s the best behind the driver’s seat. Elba Vs. Block. Coming April 2020. Only on Quibi. ",
                                                    starring: "Starring Idris Elba and Ken Block",
                                                    desktopThumbnail: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-0__25_fit-max_w-480.jpg 120w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-0__5_fit-max_w-480.jpg 240w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-0__75_fit-max_w-480.jpg 360w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-1_fit-max_w-480.jpg 480w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-1__5_fit-max_w-480.jpg 720w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-2_fit-max_w-480.jpg 960w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-3_fit-max_w-480.jpg 1440w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-4_fit-max_w-480.jpg 1920w",
                                                            webpSrcSet: "/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-480.webp 120w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-480.webp 240w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-480.webp 360w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-1_fit-max_fm-webp_w-480.webp 480w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-480.webp 720w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-2_fit-max_fm-webp_w-480.webp 960w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-3_fit-max_fm-webp_w-480.webp 1440w,\n/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_dpr-4_fit-max_fm-webp_w-480.webp 1920w",
                                                            sizes: "(max-width: 480px) 100vw, 480px",
                                                            src: "/static/content/1581012691-elba-vs-blockvertical-key-art__jpg__auto-format_fit-max_w-480.jpg",
                                                            width: 480,
                                                            height: 726,
                                                            aspectRatio: .6602768903088392,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#eda633",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICBELCgoRFSQcFg0NDRETDg0NFxMZGBYVIhUmHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oIig7Lzs7Ly8vLy8vLzsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgADwMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAAAwQC/8QAHhAAAQMEAwAAAAAAAAAAAAAAAQACBBESFCIDBSH/xAAWAQEBAQAAAAAAAAAAAAAAAAAFAgH/xAAaEQACAgMAAAAAAAAAAAAAAAAAAQIhESIz/9oADAMBAAIRAxEAPwCYxjzjxVRRjihT+uDbDckTTR+qLT0yJShaQl0rGatRn5WxQhSuRjdn/9k="
                                                        }
                                                    },
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583532876-evsbproductshowlevels01horzv01__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7764618800888232,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#eb9c36",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhYICA8QFg0XDg0QDQ0NFhEOFg0NFxUZGBYVFhUdHysjGh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLAg0OHBAQHDsoIig7Oy8vOy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAADBAACBf/EABwQAAIBBQEAAAAAAAAAAAAAAAACAQMEBRIhE//EABYBAQEBAAAAAAAAAAAAAAAAAAUEAP/EABoRAAIDAQEAAAAAAAAAAAAAAAEFAAIhQRL/2gAMAwEAAhEDEQA/AFbbHQ0h6uL16Uxdd2bprVmnQL8tz2KWCWtdERtl8uED0lhpIYlkMk4ooOz/2Q=="
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1581022503-elba-vs-blocklogo__svg.svg"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "ZunLf3pcMTQ",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/ZunLf3pcMTQ/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=ZunLf3pcMTQ"
                                                    }
                                                }, {
                                                    id: "3383676",
                                                    title: "Agua Donkeys",
                                                    showsSlug: "agua-donkeys",
                                                    description: "Very cool. Pretty mellow. So sick. MP Cunningham and Jeremy Jackson. Agua Donkeys. Coming April 2020. Only on Quibi. ",
                                                    starring: "",
                                                    desktopThumbnail: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-0__25_fit-max_w-480.png 120w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-0__5_fit-max_w-480.png 240w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-0__75_fit-max_w-480.png 360w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-1_fit-max_w-480.png 480w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-1__5_fit-max_w-480.png 720w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-2_fit-max_w-480.png 960w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-3_fit-max_w-480.png 1440w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-4_fit-max_w-480.png 1920w",
                                                            webpSrcSet: "/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-0__25_fit-max_fm-webp_w-480.webp 120w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-0__5_fit-max_fm-webp_w-480.webp 240w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-0__75_fit-max_fm-webp_w-480.webp 360w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-1_fit-max_fm-webp_w-480.webp 480w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-1__5_fit-max_fm-webp_w-480.webp 720w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-2_fit-max_fm-webp_w-480.webp 960w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-3_fit-max_fm-webp_w-480.webp 1440w,\n/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_dpr-4_fit-max_fm-webp_w-480.webp 1920w",
                                                            sizes: "(max-width: 480px) 100vw, 480px",
                                                            src: "/static/content/1583305683-agdproducts01whitettunstacked__png__auto-format_fit-max_w-480.png",
                                                            width: 480,
                                                            height: 48,
                                                            aspectRatio: 10,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#ffffff",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoSCAgLChIVDhUQFQ0NDh0TDhUNFxYZGBYTFhUmHy0jGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLBQUFEAUFEC8cFhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAIAGAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAABwL/xAAYEAEBAAMAAAAAAAAAAAAAAAAAAQMRIf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCykAGMtsnLoAH/2Q=="
                                                        }
                                                    },
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583305646-agdproductshowlevels01horzv01__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7777777777777777,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#176c91",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhYNDQgLDQoRDhINBw4ICBENFgcYFxUZGBYVFhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDscIhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAEBQEA/8QAHBAAAgICAwAAAAAAAAAAAAAAAAIBBQQSAxEy/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQX/xAAbEQACAQUAAAAAAAAAAAAAAAABAwACERIxUf/aAAwDAQACEQMRAD8AXk0/SheKv1YvZLzKhE9CaBJwcy24Jq3aDii7TEGDgIhzOz//2Q=="
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1583305551-agdproducts01whitettunstacked__png.png"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "zowhunw_LBc",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/zowhunw_LBc/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=zowhunw_LBc"
                                                    }
                                                }, {
                                                    id: "3383682",
                                                    title: "Barkitecture",
                                                    showsSlug: "barkitecture",
                                                    description: "These dog houses are OFF THE LEASH luxurious. Because today and every day is #LoveYourPetDay. Tyler Cameron and Delia Kenza. Barkitecture. Coming April 2020. Only on Quibi.",
                                                    starring: "",
                                                    desktopThumbnail: null,
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583306120-barkproductshowlevels01horzv01__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7777777777777777,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#459fb9",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFQoLDhcaGg0ZDh0VFREOIx8ZGCYfFhUdIC0jGh0oHRYWMDUlKC0vMjIyGS44PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs7Ozs1Oy87Ozs7Ly87Ozs7Ly8vLzsvLzs7Ozs7Ozs7Ly8vOzs7Ozs1Ly8vOy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAFBgEEBwD/xAAeEAACAgEFAQAAAAAAAAAAAAABBAACAwUREyEyBv/EABYBAQEBAAAAAAAAAAAAAAAAAAMEAf/EABwRAAEDBQAAAAAAAAAAAAAAAAEAAgMEERIhMf/aAAwDAQACEQMRAD8AE/Pt0aIIMcKY68W+8y3RGLrZgKHox3W1DNbGATHqnjLSGmIsrzL1VzJgdyxyep0jErB1bJK0OX//2Q=="
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1583306151-barkproducts01whitettunstacked__png.png"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "5HDqnjCNjLE",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/5HDqnjCNjLE/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=5HDqnjCNjLE"
                                                    }
                                                }, {
                                                    id: "3383684",
                                                    title: "Fierce Queens",
                                                    showsSlug: "fierce-queens",
                                                    description: "For all the Fierce Queens out there. Fierce Queens with Reese Witherspoon. Coming April 6.",
                                                    starring: "",
                                                    desktopThumbnail: null,
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583306307-fiercequeenshorizontalprimaryqpid__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7777777777777777,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c27d47",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLExMXDhkVFQ0ZDhUNEhEOFxoZHRYVFhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDscIigvLy8vLzUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAGBAD/xAAeEAABAwUBAQAAAAAAAAAAAAACAAEDBAURIUExFP/EABYBAQEBAAAAAAAAAAAAAAAAAAQDAv/EABkRAQACAwAAAAAAAAAAAAAAAAEAEQISMf/aAAwDAQACEQMRAD8AZXyMTgffESpSGnqXbPVfcbhMUb5dGvpN6j3qHkj2Jx2IsN2nDSyioZCcGyspNM3bP//Z"
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1583306313-fiercequeenstitleoriginalunstacked__png.png"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "XpfQfF3BuTY",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/XpfQfF3BuTY/hqdefault.jpg",
                                                        url: "https://youtu.be/XpfQfF3BuTY"
                                                    }
                                                }, {
                                                    id: "3383685",
                                                    title: "Punk'd",
                                                    showsSlug: "punk-d",
                                                    description: "Chance The Rapper is now Chance The Pranker. No one is safe. ",
                                                    starring: "",
                                                    desktopThumbnail: null,
                                                    mobileThumbnail: {
                                                        url: "/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-compress_dpr-1_fit-max_w-640.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_w-640.jpg 160w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_w-640.jpg 320w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_w-640.jpg 480w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_w-640.jpg 640w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_w-640.jpg 960w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_w-640.jpg 1280w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_w-640.jpg 1920w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_w-640.jpg 2560w",
                                                            webpSrcSet: "/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-640.webp 160w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-640.webp 320w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-640.webp 480w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-1_fit-max_fm-webp_w-640.webp 640w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-640.webp 960w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-2_fit-max_fm-webp_w-640.webp 1280w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-3_fit-max_fm-webp_w-640.webp 1920w,\n/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_dpr-4_fit-max_fm-webp_w-640.webp 2560w",
                                                            sizes: "(max-width: 640px) 100vw, 640px",
                                                            src: "/static/content/1583306373-punkproductshowlevels01horzv01__jpg__auto-format_fit-max_w-640.jpg",
                                                            width: 640,
                                                            height: 360,
                                                            aspectRatio: 1.7777777777777777,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#da132f",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgZDg0NDh0VFhEdIx8lGCUlHhwdLS0vLik2KS0WMDUxKC0vMjIyGS44PTcwPCsxNS8BCgsLDg0OHBAQHDscIig7LzUvOzs7LzsvOzUvLy8vNTsvOy87OzU7Ly8vLy8vLzs1Oy87Ly8vLzU7Ly8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAZAAABBQAAAAAAAAAAAAAAAAAEAAMFBgf/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDBREhBHETMkH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAwDAQACEQMRAD8AzylsnzSFrmbH0KyefDMlD8Gu48PowDoJ7ksDdBNYrkHNamI6YT0kpWvr4JRl7cpIpEb/2Q=="
                                                        }
                                                    },
                                                    logo: {
                                                        url: "/static/content/1583306377-punkdproducts01ttunstackedbottomaligned__png.png"
                                                    },
                                                    youtubeId: {
                                                        providerUid: "R5kzoCjh1XA",
                                                        thumbnailUrl: "https://i.ytimg.com/vi/R5kzoCjh1XA/hqdefault.jpg",
                                                        url: "https://www.youtube.com/watch?v=R5kzoCjh1XA"
                                                    }
                                                }],
                                                homepage: {
                                                    displayNewsBanner: !0,
                                                    newsBannerHeading: "Enjoy 90 days free. Limited Time.",
                                                    newsBannerLink: "",
                                                    homepageModules: ["hero-video", "preorder-app-banner", "featured-shows-v2", "value-props", "featured-shows", "insider-banner"]
                                                },
                                                homepageHeroModule: {
                                                    title: "Quick bites.<br>Big stories.\n<br/>",
                                                    video: {
                                                        url: "/static/content/1583384064-quibicontentanthemlightweight30olv__mp4.mp4"
                                                    },
                                                    videoPoster: {
                                                        url: "/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-compress_fit-max_w-1440.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-0__25_fit-max_w-1440.jpg 360w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-0__5_fit-max_w-1440.jpg 720w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-0__75_fit-max_w-1440.jpg 1080w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-1_fit-max_w-1440.jpg 1440w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-1__5_fit-max_w-1440.jpg 2160w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-2_fit-max_w-1440.jpg 2880w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-3_fit-max_w-1440.jpg 4320w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-4_fit-max_w-1440.jpg 5760w",
                                                            webpSrcSet: "/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-1440.webp 360w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-1440.webp 720w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-1440.webp 1080w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-1_fit-max_fm-webp_w-1440.webp 1440w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-1440.webp 2160w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-2_fit-max_fm-webp_w-1440.webp 2880w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-3_fit-max_fm-webp_w-1440.webp 4320w,\n/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_dpr-4_fit-max_fm-webp_w-1440.webp 5760w",
                                                            sizes: "(max-width: 1440px) 100vw, 1440px",
                                                            src: "/static/content/1583435086-quibicontentanthemlightweight30olv__jpg__auto-format_fit-max_w-1440.jpg",
                                                            width: 1440,
                                                            height: 810,
                                                            aspectRatio: 1.7777777777777777,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#f7c454",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIDQgLDQ4QDhgPDRkNDh0NFg0NFxUZGBYfFhUdKyslHR0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDseIhw7Ozs1Ly87OzUvLzUvNS8vLy8vLzs7NS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAABgIDBf/EAB4QAAEDBAMAAAAAAAAAAAAAAAIAATEDBAUSEZHh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwQC/8QAGxEAAgEFAAAAAAAAAAAAAAAAAQIAAxESISL/2gAMAwEAAhEDEQA/AFW3ETeVZXpCwylq1ylbn1Tu8vXEIbtAabZSq/O5oGIuUoS4+TududmQtFDCDLP/2Q=="
                                                        }
                                                    },
                                                    portraitVideo: {
                                                        url: "/static/content/1583701880-quibi30light9x16__mp4.mp4"
                                                    },
                                                    portraitVideoPoster: {
                                                        url: "/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-compress_fit-max_w-768.jpg",
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-0__25_fit-max_w-1080.jpg 270w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-0__5_fit-max_w-1080.jpg 540w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-0__75_fit-max_w-1080.jpg 810w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-1_fit-max_w-1080.jpg 1080w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-1__5_fit-max_w-1080.jpg 1620w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-2_fit-max_w-1080.jpg 2160w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-3_fit-max_w-1080.jpg 3240w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-4_fit-max_w-1080.jpg 4320w",
                                                            webpSrcSet: "/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-1080.webp 270w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-1080.webp 540w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-1080.webp 810w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-1_fit-max_fm-webp_w-1080.webp 1080w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-1080.webp 1620w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-2_fit-max_fm-webp_w-1080.webp 2160w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-3_fit-max_fm-webp_w-1080.webp 3240w,\n/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_dpr-4_fit-max_fm-webp_w-1080.webp 4320w",
                                                            sizes: "(max-width: 1080px) 100vw, 1080px",
                                                            src: "/static/content/1583435083-quibi30light9x16option1r2__jpg__auto-format_fit-max_w-1080.jpg",
                                                            width: 1080,
                                                            height: 1920,
                                                            aspectRatio: .5625,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#d89d41",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhYYIx8lLS0aIiEmKzclMC0oHSEaJTUlKD0vMj4yJSI4SUUwPCsxMi8BCgsLDg0OHBAQHDsoIig7OzsvOzs7Ozs7NS87Ozs7OzsvLzs7OzsvOy8vLy8vLy8vOy8vLzUvLy8vLy8vLy8vL//AABEIABgADQMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABAYD/8QAIRAAAQMEAQUAAAAAAAAAAAAAAQACBAMFESFRBhITI0H/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGhEAAgIDAAAAAAAAAAAAAAAAAhEAARITMf/aAAwDAQACEQMRAD8AlLPBMal2JC9WwyZQdvQVFTexp0l5BY6plDE7o3GkFYKTFPqPNQBwc0crOVfn+X1jIH3KEJdAPYbYSU//2Q=="
                                                        }
                                                    },
                                                    captions: null,
                                                    formHeader: "Try 90 days free.<br>Limited time. Learn more.\n<br/>",
                                                    endframeTitle: "Enjoy 90 days free. Sign up to learn more.",
                                                    endframeText: "It’ll be gone in a Quibi."
                                                },
                                                allValueProps: [{
                                                    id: "2165622",
                                                    headline: "MOVIE-QUALITY SHOWS<br>DESIGNED FOR YOUR PHONE\n<br/>",
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-0__25_fit-max_w-400.jpg 93w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-0__5_fit-max_w-400.jpg 187w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-0__75_fit-max_w-400.jpg 281w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-1_fit-max_w-400.jpg 375w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-1__5_fit-max_w-400.jpg 562w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-2_fit-max_w-400.jpg 750w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-3_fit-max_w-400.jpg 1125w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-4_fit-max_w-400.jpg 1500w",
                                                            webpSrcSet: "/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-400.webp 93w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-400.webp 187w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-400.webp 281w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-1_fit-max_fm-webp_w-400.webp 375w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-400.webp 562w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-2_fit-max_fm-webp_w-400.webp 750w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-3_fit-max_fm-webp_w-400.webp 1125w,\n/static/content/1580412030-quality-shows-v3__jpg__auto-format_dpr-4_fit-max_fm-webp_w-400.webp 1500w",
                                                            sizes: "(max-width: 375px) 100vw, 375px",
                                                            src: "/static/content/1580412030-quality-shows-v3__jpg__auto-format_fit-max_w-400.jpg",
                                                            width: 375,
                                                            height: 812,
                                                            aspectRatio: .4618226600985222,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#32c7cd",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhoQDg0NDh0VFhEYHh8lJC4fJSEmKzcvJjAoLCEWMEE6KDkvNTU+MTo4STc6SCsxOi8BCgsLDg0OHBAQHDseHig7OzsvNS8vOy81Ozs7Oy87Lzs7Lzs7Oy8vOzsvLy8vOzsvLy8vLy81Ly8vOzsvLy8vL//AABEIABgACwMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABQYE/8QAJRAAAQMCBAcBAAAAAAAAAAAAAwABBAIRBRQVQRIhIjEycoEG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQIx/9oADAMBAAIRAxEAPwDcCK+qfEnxGO+fN7KhDKHqV7t2STEZY8+bqbyTVShBftZNMly1C5W2qSqXj86TKIZivQ1b34W2QhC1/9k="
                                                        }
                                                    },
                                                    landscapeImage: null
                                                }, {
                                                    id: "2165697",
                                                    headline: "NEW EPISODES EVERY&nbsp;DAY,<br>EACH 10 MINUTES OR&nbsp;LESS\n<br/>",
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-0__25_fit-max_w-400.jpg 93w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-0__5_fit-max_w-400.jpg 187w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-0__75_fit-max_w-400.jpg 281w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-1_fit-max_w-400.jpg 375w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-1__5_fit-max_w-400.jpg 562w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-2_fit-max_w-400.jpg 750w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-3_fit-max_w-400.jpg 1125w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-4_fit-max_w-400.jpg 1500w",
                                                            webpSrcSet: "/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-400.webp 93w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-400.webp 187w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-400.webp 281w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-1_fit-max_fm-webp_w-400.webp 375w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-400.webp 562w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-2_fit-max_fm-webp_w-400.webp 750w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-3_fit-max_fm-webp_w-400.webp 1125w,\n/static/content/1580412043-new-episodes-v3__jpg__auto-format_dpr-4_fit-max_fm-webp_w-400.webp 1500w",
                                                            sizes: "(max-width: 375px) 100vw, 375px",
                                                            src: "/static/content/1580412043-new-episodes-v3__jpg__auto-format_fit-max_w-400.jpg",
                                                            width: 375,
                                                            height: 812,
                                                            aspectRatio: .4618226600985222,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#902af7",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgUFQoLDhgQDg0VDiINEREYLismGCIiJhUaHzcjJh0oNRoiNjUlKC0vMjI+JSI4PTcwPC0xMi8BCgsLDg0OHBAQHDsoIig7Ozs7Ozs7OzU7Ozs7Ozs7Lzs7NS87Ly8vOy87Oy81Oy81Oy8vLzsvLy81Ly8vLy8vL//AABEIABgACwMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAFAAIE/8QAHRAAAgICAwEAAAAAAAAAAAAAAQIAAwRRESJBBf/EABYBAAMAAAAAAAAAAAAAAAAAAAMEBf/EABsRAAEEAwAAAAAAAAAAAAAAAAEAAgMhETJh/9oADAMBAAIRAxEAPwAqxeAWhFtRaxjsxS29Tik8zErqVBjQmQRFaGxvqm/AO/ZavO6CSSTJHlppHbtji//Z"
                                                        }
                                                    },
                                                    landscapeImage: null
                                                }, {
                                                    id: "2165700",
                                                    headline: "WATCH ON-THE-GO<br>AND OFFLINE ANYTIME\n<br/>",
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-0__25_fit-max_w-400.jpg 93w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-0__5_fit-max_w-400.jpg 187w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-0__75_fit-max_w-400.jpg 281w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-1_fit-max_w-400.jpg 375w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-1__5_fit-max_w-400.jpg 562w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-2_fit-max_w-400.jpg 750w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-3_fit-max_w-400.jpg 1125w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-4_fit-max_w-400.jpg 1500w",
                                                            webpSrcSet: "/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-400.webp 93w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-400.webp 187w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-400.webp 281w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-1_fit-max_fm-webp_w-400.webp 375w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-400.webp 562w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-2_fit-max_fm-webp_w-400.webp 750w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-3_fit-max_fm-webp_w-400.webp 1125w,\n/static/content/1580412057-on-the-go-v3__jpg__auto-format_dpr-4_fit-max_fm-webp_w-400.webp 1500w",
                                                            sizes: "(max-width: 375px) 100vw, 375px",
                                                            src: "/static/content/1580412057-on-the-go-v3__jpg__auto-format_fit-max_w-400.jpg",
                                                            width: 375,
                                                            height: 812,
                                                            aspectRatio: .4618226600985222,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#a2d064",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhIQDg0NGBYVIhUVFysuIhYaJhUaMi0jHSIoIhYaJEExKC0vMjUyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7LzsvLzs7Ly81LzsvOzsvLy8vLy8vOy8vLy8vNS8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgACwMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAEBQEDBgD/xAAeEAACAwABBQAAAAAAAAAAAAABAwACEQUEEzJRcf/EABYBAAMAAAAAAAAAAAAAAAAAAAECA//EABoRAAICAwAAAAAAAAAAAAAAAAABEUECAyH/2gAMAwEAAhEDEQA/AMczpT4ygoIOeo4aad/IA29Q232TWxhngG/kxVu7FLuXJdYgEjZE6MsFAKP/2Q=="
                                                        }
                                                    },
                                                    landscapeImage: null
                                                }, {
                                                    id: "2165701",
                                                    headline: "A VIEWING EXPERIENCE  OPTIMIZED FOR YOU, NO MATTER HOW YOU HOLD YOUR PHONE\n<br/>",
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-0__25_fit-max_w-400.jpg 93w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-0__5_fit-max_w-400.jpg 187w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-0__75_fit-max_w-400.jpg 281w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-1_fit-max_w-400.jpg 375w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-1__5_fit-max_w-400.jpg 562w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-2_fit-max_w-400.jpg 750w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-3_fit-max_w-400.jpg 1125w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-4_fit-max_w-400.jpg 1500w",
                                                            webpSrcSet: "/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-400.webp 93w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-400.webp 187w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-400.webp 281w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-1_fit-max_fm-webp_w-400.webp 375w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-400.webp 562w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-2_fit-max_fm-webp_w-400.webp 750w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-3_fit-max_fm-webp_w-400.webp 1125w,\n/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_dpr-4_fit-max_fm-webp_w-400.webp 1500w",
                                                            sizes: "(max-width: 375px) 100vw, 375px",
                                                            src: "/static/content/1580412069-viewing-experience-landscape-v3__jpg__auto-format_fit-max_w-400.jpg",
                                                            width: 375,
                                                            height: 812,
                                                            aspectRatio: .4618226600985222,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#8f37d8",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLDRYNDhURDg0ODhQNEg0OFxMZGBYTFiEdHysjHR0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQFS8oGCg7Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgACwMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBAEFBwD/xAAbEAEAAgIDAAAAAAAAAAAAAAABAAIEEQUSIf/EABYBAQEBAAAAAAAAAAAAAAAAAAECAP/EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIRAxEAPwDO74rWCcNWW+UVEgwrqI0yHIZ3TSsXOTro9kTpgm//2Q=="
                                                        }
                                                    },
                                                    landscapeImage: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-0__25_fit-max_w-400.jpg 93w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-0__5_fit-max_w-400.jpg 187w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-0__75_fit-max_w-400.jpg 281w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-1_fit-max_w-400.jpg 375w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-1__5_fit-max_w-400.jpg 562w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-2_fit-max_w-400.jpg 750w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-3_fit-max_w-400.jpg 1125w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-4_fit-max_w-400.jpg 1500w",
                                                            webpSrcSet: "/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-0__25_fit-max_fm-webp_w-400.webp 93w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-0__5_fit-max_fm-webp_w-400.webp 187w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-0__75_fit-max_fm-webp_w-400.webp 281w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-1_fit-max_fm-webp_w-400.webp 375w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-1__5_fit-max_fm-webp_w-400.webp 562w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-2_fit-max_fm-webp_w-400.webp 750w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-3_fit-max_fm-webp_w-400.webp 1125w,\n/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_dpr-4_fit-max_fm-webp_w-400.webp 1500w",
                                                            sizes: "(max-width: 375px) 100vw, 375px",
                                                            src: "/static/content/1580412132-viewing-experience-portrait-v3__jpg__auto-format_fit-max_w-400.jpg",
                                                            width: 375,
                                                            height: 812,
                                                            aspectRatio: .4618226600985222,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#972cf8",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgNBgoIBw0LBw8NDhgQDggHDhEJDRENFx8lGBYVFhUaHysjGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAKFS8cFig7OzsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgACwMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAAAwECB//EAB8QAAEDAwUAAAAAAAAAAAAAAAABAgMEI3ETIiQzYf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AM7pmc9XeFp+52SaZU1VUXM+87IJLppN6iZpbrsgA0v/2Q=="
                                                        }
                                                    }
                                                }],
                                                aboutPage: {
                                                    title: "Quick Bites.\nBig Stories. ",
                                                    ourStoryTitle: "Our Story",
                                                    ourStoryText: "\nGot a few minutes? That’s all you need to be entertained, informed and\ninspired.\n\nLaunching this April, Quibi will present fresh content\nfrom today’s top talent—one quick bite at a time. Get\nready to make any moment extraordinary with incredible\nstorytelling delivered right to your phone. From daily\nessentials to breakout shows, the next chapter will always\nbe waiting.",
                                                    ourTeamTitle: "Our Team",
                                                    ourTeamText: "Meet some of the people behind Quibi. We all have our own stories that brought us here. Now we’re working together to bring storytelling into life’s in-between moments.",
                                                    ourStoryHeroImage: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-0__25_fit-max_w-1200.jpg 300w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-0__5_fit-max_w-1200.jpg 600w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-0__75_fit-max_w-1200.jpg 900w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-1_fit-max_w-1200.jpg 1200w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-1__5_fit-max_w-1200.jpg 1800w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-2_fit-max_w-1200.jpg 2400w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-3_fit-max_w-1200.jpg 3600w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-4_fit-max_w-1200.jpg 4800w",
                                                            webpSrcSet: "/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-1200.webp 300w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-1200.webp 600w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-1200.webp 900w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-1200.webp 1200w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-1200.webp 1800w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-1200.webp 2400w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-1200.webp 3600w,\n/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-1200.webp 4800w",
                                                            sizes: "(max-width: 1200px) 100vw, 1200px",
                                                            src: "/static/content/1578344272-our-story-hero2__jpg__ar-16_9_auto-format_fit-max_w-1200.jpg",
                                                            width: 1200,
                                                            height: 483,
                                                            aspectRatio: 2.4813278008298756,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c97650",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhsOFQ0NDh0VHRYMFyMaJRYTHSEqHysvJh0oHRUWJDUlKDkvMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQEDsoIigvOy8vOy87Ozs1Oy87Oy87Ly8vOzs7OzUvLy8vLy8vLy8vOy8vLy8vLy8vLy8vLy8vL//AABEIAAkAGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAEBgADBf/EACEQAAECBQUBAAAAAAAAAAAAAAMAAgQHESEyARRxgZIG/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMC/8QAHhEAAgEDBQAAAAAAAAAAAAAAAQIAEVKhAwQTMkH/2gAMAwEAAhEDEQA/ABjTQJS8Ebwq4eZTiPptS6ctWJEYocGaIdygNOLMUof14+A+8c9txO06USwLFRUGotkwS9e8/9k="
                                                        },
                                                        alt: null
                                                    }
                                                },
                                                careersPage: {
                                                    title: "Be Part of<br>our Story. \n<br/>",
                                                    jobsCta: "Career Opportunities",
                                                    jobsUrl: "https://quibi.wd5.myworkdayjobs.com/quibicareers",
                                                    ourTeamTitle: "The Start of Something New",
                                                    ourTeamText: "We’re a little bit Silicon Valley. And a little bit Hollywood. Pulling from the best of both worlds to shape the future of storytelling.",
                                                    ourTeamHeroImage: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-0__25_fit-max_w-1200.jpg 300w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-0__5_fit-max_w-1200.jpg 600w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-0__75_fit-max_w-1200.jpg 900w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-1_fit-max_w-1200.jpg 1200w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-1__5_fit-max_w-1200.jpg 1800w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-2_fit-max_w-1200.jpg 2400w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-3_fit-max_w-1200.jpg 3600w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-4_fit-max_w-1200.jpg 4800w",
                                                            webpSrcSet: "/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-1200.webp 300w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-1200.webp 600w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-1200.webp 900w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-1200.webp 1200w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-1200.webp 1800w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-1200.webp 2400w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-1200.webp 3600w,\n/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-1200.webp 4800w",
                                                            sizes: "(max-width: 1200px) 100vw, 1200px",
                                                            src: "/static/content/1576547076-career-page-photo-retouched__jpg__ar-16_9_auto-format_fit-max_w-1200.jpg",
                                                            width: 1200,
                                                            height: 675,
                                                            aspectRatio: 1.7777777777777777,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#cab54d",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgXFhUNDikVIhEgIx8dHRcmJRgdHzclHR0qHSEWJDUlKC0vMjIyJSI4PTc1PCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ly87Ozs7LzsvOzs7NS8vLy8vOy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAFAQMG/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIABQMRIQQG/8QAFgEAAwAAAAAAAAAAAAAAAAAAAgME/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAAwQREjH/2gAMAwEAAhEDEQA/AHLq8xviI2IVWetWctCLDZXpMuquLCtyCo2IdWOrDcXtbnF5sW2IAEmZT6zbeRukSIyrq1epSuKpHs//2Q=="
                                                        },
                                                        alt: null
                                                    },
                                                    ourValuesTitle: "Quibi Core Values",
                                                    ourValuesText: "Our mission is to entertain, inspire, and inform by making mobile moments extraordinary. \nWant in? We only ask five things:\n",
                                                    ourValuesCoreValues: [{
                                                        name: "Be the Audience",
                                                        description: "We put our audience first by understanding, representing and relating to them, every day. Both in front of and behind the camera, our team and our product will reflect the audience.\n",
                                                        valueIcon: {
                                                            url: "/static/content/1576212625-audience__svg.svg"
                                                        }
                                                    }, {
                                                        name: "Be a Trailblazer ",
                                                        description: "From script to screen, we take risks, learn from our stumbles and support others as they do the same. We crack the code on the impossible, get it done and set the precedent.",
                                                        valueIcon: {
                                                            url: "/static/content/1576212629-trailblazer__svg.svg"
                                                        }
                                                    }, {
                                                        name: "Choose the Hard Right vs. the Easy Wrong",
                                                        description: "We act with integrity, even when no one's watching. We are accountable for our actions and our mistakes. Our team will be transparent. Every day, we work to make our customers, colleagues and company proud.",
                                                        valueIcon: {
                                                            url: "/static/content/1576212633-hard__svg.svg"
                                                        }
                                                    }, {
                                                        name: "Learn from Everywhere",
                                                        description: "Everyone has a right to the mic, including yourself. This means we are empathetically candid and open to feedback. We seek out alternative points of view, experiment, debate with respect, commit and follow through with action.",
                                                        valueIcon: {
                                                            url: "/static/content/1576212637-learn__svg.svg"
                                                        }
                                                    }, {
                                                        name: "Exceed Expectations",
                                                        description: 'We hold ourselves and each action to the highest standard. Our team over delivers for customers and each other. From casting to coding, we raise the bar and deliver the "Wow".',
                                                        valueIcon: {
                                                            url: "/static/content/1576212639-exceed__svg.svg"
                                                        }
                                                    }],
                                                    ourValuesFooter: "We didn’t say they’d be five easy things, but we’re building a team of collaborative and effective individuals who challenge each other to learn and grow everyday. So, the real question is - are you ready to roll up your sleeves and show us what you got?"
                                                },
                                                allTeamMembers: [{
                                                    fullName: "Meg Whitman",
                                                    role: "Chief Executive Officer",
                                                    position: 1,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939548-meg-whitman-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#ca7468",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIDggSDQ0QDg8QDQ0NDxENDQ0YFx8dGCIfFiEaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oIig7OzsvNTY1Ly8vLzs7Ozs7Oy8vLy8vLy8vLzI7OC82Ly8vLy8vLy81NTUvLy81Ly8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAABQYHBAH/xAAeEAACAgMAAwEAAAAAAAAAAAAAAQIEAwUREhNBIf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/8QAGxEBAAIDAQEAAAAAAAAAAAAAAQADAhEhEgT/2gAMAwEAAhEDEQA/ANauTSgyfy24xy86dmwur1P9IXYbf13OeX0hdYYpuJpr9YzQKWVTigEuj2CniT6BceQ6di63elPG10i9q3Kz5d+noB/pxFBiKMkwY401+WPGl0AAUHIXe5//2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Jeffrey Katzenberg",
                                                    role: "Founder & Chairman of the Board",
                                                    position: 2,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939571-jeffrey-katzenberg-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#aa5336",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEAgWDxUTDhgODQ0NDh0NFg4NFx8ZKhYVIhUaHysjJh0oHSEeJTUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHTsoIig7Ozs7Ly8wLy87NTs7Ozs7Oy87Ni87Ly87Ly87Oy8vOy8vLy8vOzU1Ly8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAABAYHBQL/xAAgEAABAwMFAQAAAAAAAAAAAAACAAEFBBJBAwYREyIh/8QAFgEBAQEAAAAAAAAAAAAAAAAABAUD/8QAHhEAAgIABwAAAAAAAAAAAAAAAQIAAwQREiEiMTL/2gAMAwEAAhEDEQA/ANRkvAcqBRVAkfHK8z0iA6DvdhVuJl2OpdrsrK1siIilNSky7aw3CihjXg+m31FuvUK45TLZndXZoF7wuPCTJd7ldlEQ8T7Eo4PeljLQW43AG9IiJ1YzWRr3IcgT/9k="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Juan Bongiovanni",
                                                    role: "Head of Growth Marketing",
                                                    position: 3,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939761-juan-bongiovanni-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c27667",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhMIDQ8ODQ0JDhgNBwcNCxEOFgcYFxMZGBYVFhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8pHSgvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEBAAMAAAAAAAAAAAAAAAAFAAEEBv/EAB0QAAMAAgIDAAAAAAAAAAAAAAABAwIEBRITIoH/xAAXAQEBAQEAAAAAAAAAAAAAAAACAwEA/8QAGhEBAAIDAQAAAAAAAAAAAAAAAQACAxEhMf/aAAwDAQACEQMRAD8A7fkM0pgWFE7DHJJuYFCeTv8AQZLaZTHQsR7Wy9SM6030MFB2QW4zY3J9sA6OsvKRGWBnUUjWvFdSIhhyF9n/2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Tom Conrad",
                                                    role: "Chief Product Officer",
                                                    position: 4,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1576703810-tom-conrad-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#a55a4c",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEwgVFg0LDhwWDQ0NDhUNFg0OFxgZGBYWFhUaHysjGh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDUcHSg7NS8vLy8vLy8vLy8vLzwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAADAAMAAAAAAAAAAAAAAAAABQYBAwf/xAAfEAABAwQDAQAAAAAAAAAAAAAAAQIEAwURQRMhMRL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEA//EABsRAAIDAQEBAAAAAAAAAAAAAAABAgMREiEE/9oADAMBAAIRAxEAPwDqd0bikqiSK5OXA1vUpqUV70TMOaiyfdkrJ4xFNfSZSqzLQNTJbPhOwLRfgeaxk3ebo5aK9k5AuDudVzsyBO5LUW+aTxjateFpM9MAAmuK5BXTamf/2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Doug Herzog",
                                                    role: "Senior Content Executive",
                                                    position: 5,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939687-doug-herzog-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#4662b0",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgXFRUVGg0ZFhUZDhUVDQ0NFxYZGBYVFiEmHysjGh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oHyg1NTU7Ly81NS8vNS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEAAwEAAAAAAAAAAAAAAAAABQYHBP/EAB4QAAICAwADAQAAAAAAAAAAAAABAgQDBSEREzES/8QAFwEBAAMAAAAAAAAAAAAAAAAAAwECBP/EABoRAAMBAAMAAAAAAAAAAAAAAAABAgMREjH/2gAMAwEAAhEDEQA/ANJvZlCH04a1iM8nGR222a9b8SI/V7ByzdYelNC559lyXWMl+QcOOypQXQLPgVLhmXY907/FIkKeV4pJ+QDVeclY0pIs1G05wXQAGkkQ2z//2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Megan Imbres",
                                                    role: "Head of Brand & Content Marketing",
                                                    position: 6,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939741-megan-imbress-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 210,
                                                            aspectRatio: 1.0438413361169103,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#e50731",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEQgVDgsPDhgVDQ0NGBQPFhEWFx8lHhoUFiEdHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDAlIig7Ozs7NTUvLy8vLzU7Ozs7Oy8yLy8vLy8vLzUvLy8vLy81Ly8vLy81Ly8vLy81Ly8vL//AABEIABYAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABgcEAf/EACIQAAEDAgYDAAAAAAAAAAAAAAABAgMEBgUSIUFCYRETI//EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAHxEAAgIBBAMAAAAAAAAAAAAAAQIAA1EEMTIzERMi/9oADAMBAAIRAxEAPwClY7KjIFXoWsMmbJUrrubLqrstI5fOwq2riPvqna8g99oRgMxNFRYFsSkRuyxocMrpvkmoCkPkQli/UTrmnc6kcnQq2fK5tZInnmoAT9R2rL2hA9TymwvV0SAAD12ka/mZ/9k="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Robert Kelly",
                                                    role: "General Counsel",
                                                    position: 7,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939633-robert-kelly-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c5735f",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgVDhYLDhYVDQ4NExIhIhsQFx0eGCITFh4aHyslJh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAPHC8cIig7LzsvNS81Ly8vLzYvOzs7Ly8vLy8vLy8vLy8vOy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABgUHAf/EACAQAAIBBAIDAQAAAAAAAAAAAAABAgMEBSERQRIxgQb/xAAWAQEBAQAAAAAAAAAAAAAAAAADBAH/xAAaEQACAwEBAAAAAAAAAAAAAAABAgADIRES/9oADAMBAAIRAxEAPwDp2VhxSZg28Oa3028zdQVF7J6xvIOu99h2Pwxqqwwm2qTUAHcw8FsCKcgMvDJfO5dxt2+eiOx36RSvZQUvTAMuUZEoY7KeObbprZ4AIoHJO7H1P//Z"
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Craig Kurland",
                                                    role: "Head of Business Affairs",
                                                    position: 8,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939705-craig-kurland-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c16f5c",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIDQgQEA4SDhIQDQ0NDhENDREOFxMZGBYVFhUdHyslGh0oKRUWJTUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8gHSU1LzUvLy8vLy8vLy8vLzIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAABAUGAwL/xAAeEAABBAIDAQAAAAAAAAAAAAAAAQIDBREhBBJBMf/EABYBAQEBAAAAAAAAAAAAAAAAAAMCAf/EABkRAAMBAQEAAAAAAAAAAAAAAAABAhEhA//aAAwDAQACEQMRAD8A39knWMqeNIiyYJ91yWpCuygr5+0679It4L5xpoHNy0HJ/Ia1ibBc9QVz0z9nYrIzGSPWvXOQBKlGTb092lksDPoANlLCLp6f/9k="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Jim O’Gorman",
                                                    role: "Head of Talent & Organization",
                                                    position: 9,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939649-jim-o-gorman-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#be6b57",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEQgLFg8VDhAVDQ0NDhgODg0YFx0hGCIVFhUmHysjGh0oHRUiJDUlKC0vMjIyHSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8lHSgvLy8vLy8vLy8vLy8vLzUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAABAMGAQUH/8QAHhAAAgEEAwEAAAAAAAAAAAAAAAIBAwQFERIhMUH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgH/xAAaEQACAwEBAAAAAAAAAAAAAAAAAQIDESES/9oADAMBAAIRAxEAPwDqV/HBNiFrWhn0S5u8WKM9mgxt7yr+/Q7JYxqoekWeou1AXa7SEjsyInwGSx4U3I5dqya2QY2tKtyACbEtNqk1EYv8xNFPQABoRWEt6z//2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Rob Post",
                                                    role: "Chief Technology Officer",
                                                    position: 10,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1576205648-rob-post-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#375ba2",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoOEAgXDRUVDhgQDQ0NDxINDQ0NFx8gGCIfIiEaHysjGh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDUoIig7NS87Ly81NS8vLy8vLy8vLy8vLy81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABQYHBP/EACEQAAEDBAEFAAAAAAAAAAAAAAABAgQDBSFBFBESEzKB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwEEAP/EABoRAAMBAAMAAAAAAAAAAAAAAAABAhEDITH/2gAMAwEAAhEDEQA/AOrXTFEhRnp5vpUvchraC50ZaJPTkrnZG2LxxqNQqdWA8jZrOxMg4Gp7Jt/mqkd2dGHi3NeW7OwDZwQqltkVteFORe1pU/YAAVK0Oren/9k="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Gina Stikes",
                                                    role: "Head of PR & Corporate Communications",
                                                    position: 11,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939724-gina-stikes-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c8744b",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEggVEQ4QDhgSDg0PDhIODRUNGBglGBYVFhUmHysjHR0oKRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHS8lIig7Ozs1LzUvNjsvLzU7Ozs1Ly8vOzsvMi8vNS8vOy87Oy8vLy8vOzs7Ozs7Ly87PC8vNf/AABEIABgAGAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABwUGBP/EACAQAAEDBAIDAAAAAAAAAAAAAAABAgUDBBFBEyEGEkL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEA//EAB0RAAICAgMBAAAAAAAAAAAAAAABAgMEESExMhL/2gAMAwEAAhEDEQA/AKtIORKSnJXFy1tfGdm/J3ScK96JtMy/Be4zshfaq+y+PS7FwUGwrNexAYEFJJUpNX2AiL2g8oaej2SN0q0V7Jd5I9zrrOfoAHmrlD8OTXRswV85lFqZ0AB0EvlBZ+mf/9k="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Jim Toth",
                                                    role: "Head of Content Acquisition & Talent",
                                                    position: 12,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.png 55w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.png 110w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.png 165w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-1_fit-max_w-220.png 220w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.png 330w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-2_fit-max_w-220.png 440w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-3_fit-max_w-220.png 660w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-4_fit-max_w-220.png 880w",
                                                            webpSrcSet: "/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939670-jim-toth-2x__png__ar-16_9_auto-format_fit-max_w-220.png",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#a5523c",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFgoLDhgQDhcVFxcVFRgeLh8eGiIbIhUmHysvHR0uIiEdJTUqNC0vMjU7GS5EPTcwPC4xMi8BCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NTs7OzI7Ozs7LzsvNjs7Lzs7Oy87NTs7OzsvLzsvPP/AABEIABgAGAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAABgEFBwT/xAAhEAACAQIGAwAAAAAAAAAAAAAAAQIDBAUGESEiQRIUI//EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAHBEAAgICAwAAAAAAAAAAAAAAAAECEQMSBDFx/9oADAMBAAIRAxEAPwDVcUjpSbKK3knW0LTG72EKD0fQqWmJwd015dh5HQ2KNoa1HWIHNTvoOC3AaHQE1TEnMeYXTtJyctkjPsPzZU9/k+LexIAZ4pxKuPKl6OFLM/yT8iQAq462xpsim3sf/9k="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    fullName: "Ambereen Toubassy",
                                                    role: "Chief Financial Officer",
                                                    position: 13,
                                                    image: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-0__25_fit-max_w-220.jpg 55w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-0__5_fit-max_w-220.jpg 110w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-0__75_fit-max_w-220.jpg 165w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-1_fit-max_w-220.jpg 220w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-1__5_fit-max_w-220.jpg 330w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-2_fit-max_w-220.jpg 440w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-3_fit-max_w-220.jpg 660w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-4_fit-max_w-220.jpg 880w",
                                                            webpSrcSet: "/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-0__25_fit-max_fm-webp_w-220.webp 55w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-0__5_fit-max_fm-webp_w-220.webp 110w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-0__75_fit-max_fm-webp_w-220.webp 165w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-1_fit-max_fm-webp_w-220.webp 220w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-1__5_fit-max_fm-webp_w-220.webp 330w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-2_fit-max_fm-webp_w-220.webp 440w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-3_fit-max_fm-webp_w-220.webp 660w,\n/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_dpr-4_fit-max_fm-webp_w-220.webp 880w",
                                                            sizes: "(max-width: 220px) 100vw, 220px",
                                                            src: "/static/content/1575939582-ambereen-toubassy-2x__jpg__ar-16_9_auto-format_fit-max_w-220.jpg",
                                                            width: 220,
                                                            height: 220,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#c8803f",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoTEAgXDxYLDhQTDQ0NFxUODg0YFxMaGCIVFiEdHysjJh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDUoIig7Lzs7Ly81NTUvOzsvOzU7Ly8vLzUvLy8vLy87PC8vLzUvLy8vLy8vLy8vLy8vNS8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABgUHBP/EACAQAAIBBAIDAQAAAAAAAAAAAAABBAIDIUEFExIUgRH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEBQP/xAAcEQACAgIDAAAAAAAAAAAAAAABAgADBDIREiL/2gAMAwEAAhEDEQA/AOg8xWulk1ErXs/TT5mYul50TUCX+ynnZlbcEIETj09lJlvYqXggeCzLXWsg3VuRCOnDSZ5Sa6rTyYkC+1JedgEzM3WOxWIUyitzGqFkAFCvWDtPqf/Z"
                                                        },
                                                        alt: null
                                                    }
                                                }],
                                                newsPage: {
                                                    latestNews: "News Highlights",
                                                    loadMoreButton: "Load more"
                                                },
                                                cookieNotice: {
                                                    cookieNotice: '<p><b>COOKIES AND SIMILAR TECHNOLOGIES</b></p><p><b><i><span style="font-weight: 400;">Last Updated</span></i><span style="font-weight: 400;">: February 1, 2020</span></b></p><p><strong>What are Cookies?</strong></p><p><span style="font-weight: 400;">A cookie is a small text file that a website saves on your computer or device when you visit a website or app. It enables a website or app to remember your actions and preferences (such as language preferences) over a period of time. For example, they let you avoid having to re-enter your login when you come back to the website or browse from one page to another. Similar technologies, such as local storage, can serve the same function and we may use them as appropriate.&nbsp;</span></p><p><strong>How do we use Cookies?&nbsp;</strong></p><p><span style="font-weight: 400;">Our website, app, and emails may use cookies and similar technologies to understand how you interact with our services, remember your preferences or behavior, inform digital and email advertising campaigns, and to improve our services. We describe the purposes for which we use cookies in further detail below. We retain the information we collect through cookies for up to 12 months from the last time you visit our site, app, or open our email or otherwise as described below.</span></p><p><strong>Cookies used on the Website and App</strong></p><p><span style="font-weight: 400;">A list of the cookies that we use on our website or apps is found below.</span><span style="font-weight: 400;">&nbsp;</span></p><table><tbody><tr><td><p><b>Cookie</b> <b>&nbsp;type</b></p></td><td><p><b>Examples</b></p></td><td><p><b>Purpose of cookie</b></p></td></tr><tr><td><p><span style="font-weight: 400;">Strictly necessary cookies</span></p></td><td><p><span style="font-weight: 400;">Cookies that start with &ldquo;ab.storage&rdquo; set by quibi.com.</span></p></td><td><p><span style="font-weight: 400;">These cookies and other technologies are essential in order to enable the Website or App to provide the feature you have requested, such as remembering you have logged in and providing video content.</span></p></td></tr><tr><td><p><span style="font-weight: 400;">Advertising</span></p></td><td><p><span style="font-weight: 400;">The &ldquo;fbp&rdquo; cookie set by &ldquo;quibi.com.&rdquo; Cookies set by &ldquo;doubleclick.net&rdquo;, &ldquo;google.com&rdquo;, &ldquo;twitter.com&rdquo; and &ldquo;facebook.com&rdquo;. </span></p></td><td><p><span style="font-weight: 400;">These cookies are used for advertising and marketing purposes. For example, when we buy ads on social media platforms, we use data collected via these cookies to generate reports to understand which ads resulted in the most sign ups.<br /></span><a href="https://policies.google.com/technologies/types?hl=en" target="_blank" rel="noopener"><span style="font-weight: 400;">Learn more</span></a><span style="font-weight: 400;"> about Google Ads Conversion and DoubleClick cookies. <br /><a href="https://www.facebook.com/policy/cookies/" target="_blank" rel="noopener"><span style="font-weight: 400;">Learn more</span></a> about Facebook cookies.<br /><a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank" rel="noopener"><span style="font-weight: 400;">Learn more</span></a> about Twitter cookies.</span><span style="font-weight: 400;"><br /></span></p></td></tr><tr><td><p><span style="font-weight: 400;">Analytics cookies</span></p></td><td><p><span style="font-weight: 400;">&ldquo;_ga&rdquo;, &ldquo;_gid&rdquo;, &ldquo;_gat&rdquo;, &ldquo;mprtcl&rdquo; cookies set by quibi.com and cookies set by &ldquo;mparticle.com&rdquo;</span></p></td><td><p><span style="font-weight: 400;">These cookies are used to collect information about how visitors use our website and app. We use the information to compile reports, to help us improve the website, and to optimize our advertising campaigns. They may also be used for retargeting.&nbsp;<br /></span><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener"><span style="font-weight: 400;">Learn more</span></a><span style="font-weight: 400;"> about Google Analytics cookies.&nbsp;<br /></span><a href="https://www.mparticle.com/cookie-policy" target="_blank" rel="noopener"><span style="font-weight: 400;">Learn more</span></a><span style="font-weight: 400;"> about mParticle cookies.</span></p></td></tr><tr><td><p><span style="font-weight: 400;">Email list cookies</span></p></td><td><p><span style="font-weight: 400;">Cookies are set within your emails and when you subscribe on our website. </span></p></td><td><p><span style="font-weight: 400;">These cookies are used to help manage and track sign ups to our email list, including from within certain email apps to track views and clicks. Visit</span><span style="font-weight: 400;">&nbsp;</span><a href="https://www.braze.com/cookies/" target="_blank" rel="noopener"><span style="font-weight: 400;">Braze</span></a><span style="font-weight: 400;"> for more information.</span></p></td></tr></tbody></table><p><span style="font-weight: 400;">This list may be incomplete, especially as our services, vendors, and vendors&rsquo; practices change. If you receive a cookie from us that is not on this list and have questions, please reach out to us at </span><a target="_blank" href="mailto:privacy-contact@quibi.com" rel="noopener"><span style="font-weight: 400;">privacy-contact@quibi.com</span></a><span style="font-weight: 400;"> for more information.</span></p><p><strong>How to control Cookies</strong><span style="font-weight: 400;">&nbsp;</span></p><p><span style="font-weight: 400;">While we don&rsquo;t manage the options offered by browsers to control cookies, all the most popular browsers give users significant transparency and control over cookies. Specifically, they allow you to control or delete cookies as you wish. In the settings, there will likely be an option to delete all cookies for that browser. Additionally, many browsers allow you to view and delete cookies just for individual websites. If you delete cookies for our website, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work. For more information, see </span><a target="_blank" href="http://www.aboutcookies.org" rel="noopener"><span style="font-weight: 400;">www.aboutcookies.org</span></a><span style="font-weight: 400;">.</span></p><p><span style="font-weight: 400;">For control over technologies that are similar to cookies, check your browser&rsquo;s settings. For example, they may allow you to clear all site settings, which includes cookies and local storage information. On mobile apps, you can typically delete an app&rsquo;s cookies and other locally stored information relating to that app from your device&rsquo;s settings. For more information on your choices, please see the </span><a href="/privacy-policy/#7"><span style="font-weight: 400;">Choices</span></a><span style="font-weight: 400;"> section in our Privacy Notice.</span></p><p><i><span style="font-weight: 400;">This notice was last updated January 1st, 2020.</span></i></p>'
                                                },
                                                privacyPolicy: {
                                                    privacyPolicy: '<h2>Privacy Policy<b></b></h2><p><i><span style="font-weight: 400;">Last Updated</span></i><span style="font-weight: 400;">: February 1, 2020</span><b></b></p><p id="1"><b>1. INTRODUCTION</b></p><p><span style="font-weight: 400;">We (Quibi Holdings, LLC, or &ldquo;</span><b>Quibi</b><span style="font-weight: 400;">&rdquo;) collect, use, and otherwise process various kinds of information from or about you or your device (&ldquo;</span><b>personal information</b><span style="font-weight: 400;">&rdquo;) to provide you with our Services. </span><span style="font-weight: 400;">As used in this Privacy Policy, the &ldquo;Services" means the personalized service provided by Quibi for discovering and watching Quibi content, including all features and functionalities, recommendations and reviews, the mobile applications (&ldquo;</span><b>App</b><span style="font-weight: 400;">&rdquo;), the website (&ldquo;</span><b>Website</b><span style="font-weight: 400;">&rdquo;), user interfaces, marketing campaigns, social features, as well as all content and software associated with our service (collectively, including the App and Website, the &ldquo;</span><b>Services</b><span style="font-weight: 400;">&rdquo;).</span></p><p><span style="font-weight: 400;">We may use all personal information in the manner described in this Privacy Policy or as otherwise permitted by law. </span></p><p><b>If you do not consent to the collection and use of personal information in accordance with this Privacy Policy, then do not use the Services.</b></p><p id="2"><b>2. INFORMATION WE COLLECT</b></p><p><span style="font-weight: 400;">Quibi may collect the following categories of personal information from the sources identified below:</span></p><blockquote><p><span style="font-weight: 400;">a. <span style="text-decoration: underline;">Information you actively provide to us:</span> We collect the information you actively provide to us, which may include personal information. For example, if you submit your email address to us to receive updates about our service, we&rsquo;ll store that email to provide that service. We may also collect information you submit through other means including customer service, surveys, contests, promotions, comments directed to us, or your settings.</span><span style="font-weight: 400;"></span></p><p><span style="font-weight: 400;">b. <span style="text-decoration: underline;">Usage and log data:</span> We collect information when you use and interact with the Services. For example, we may collect your IP address, device type, device language setting, screen size, device identifiers, advertising identifiers, fonts, browser type, your actions in the Services, and viewing data.</span></p><p><span style="font-weight: 400;">c. <span style="text-decoration: underline;">Data collected through cookies and similar technologies</span></span><span style="font-weight: 400;">: We use cookies and similar technologies to help collect usage information and store your preferences. For more information about cookies visit our <a href="/cookie-notice/">Cookies and Similar Technologies notice</a>. </span><span style="font-weight: 400;">We do not currently respond to browser do-not-track signals because there is currently no consensus among the industry as to what &ldquo;Do Not Track&rdquo; signals mean and how to respond to them.&nbsp;</span></p><p><span style="font-weight: 400;">d. <span style="text-decoration: underline;">Data from other parties:</span> We work with other parties to support our services, better reach potential users, to monetize our service, and other reasons as described below. These parties may send us information about you, your device, or browser (such as demographics and online history) for the purposes described in this Privacy Policy. For example, we may receive information on when you click on the links in the emails we send you so we can better optimize our messaging.</span></p></blockquote><p id="3"><b>3. USE OF INFORMATION WE COLLECT</b></p><p><span style="text-decoration: underline;"><span style="font-weight: 400;">a. Use of Personal Information:&nbsp;</span></span></p><p><span style="font-weight: 400;">We use the categories of personal information listed above for the following purposes: </span></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">providing the functionality of the Services and fulfilling your requests;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">contacting you, including for promotional purposes;&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">customizing content and advertising for you;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">improving our Services and developing new products and services;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">business reporting and analysis, including compiling aggregate or anonymized data;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">fraud and security monitoring; </span></li><li style="font-weight: 400;">conducting research;</li><li style="font-weight: 400;">facilitating social sharing, should you choose to use those features;</li><li style="font-weight: 400;">allowing you to participate in sweepstakes, contests, or other promotions, should you choose to participate in them;</li><li style="font-weight: 400;">protecting your and our rights;</li><li style="font-weight: 400;">customer support;</li><li style="font-weight: 400;">managing payments, subscriptions, and free trials;</li><li style="font-weight: 400;">performing obligations and exercising rights under our Terms of Use and this Privacy Policy; and</li><li style="font-weight: 400;">any other purpose that is disclosed to you at the time we collect the information or that is related to a request made by you.&nbsp;</li></ul><p><span style="font-weight: 400;">We will engage in these activities to manage our contractual relationship with you, to comply with a legal obligation, where we have a legitimate interest in doing so, or with your consent to the extent required by law.</span></p><p><span style="font-weight: 400;">b. <span style="text-decoration: underline;">Use of Aggregated or De-Identified Information:</span></span></p><p><span style="font-weight: 400;">We may collect and use information that is no longer reasonably linked to an individual, device, or household for any purpose. For example, we may aggregate or de-identify personal information and analyze the resulting statistical information to improve our services.</span></p><p id="4"><b>4. SHARING PERSONAL INFORMATION WITH THIRD PARTIES</b></p><p><span style="font-weight: 400;">We may share your personal information as follows: </span></p><blockquote><p><span style="font-weight: 400;">a. <span style="text-decoration: underline;">Service Providers:</span> We may share personal information with third-party service providers for them to facilitate services they provide to us. These services include things like website hosting; data storage; data analysis; personalized advertising, measurement and verification; social sharing; payment processing; order fulfillment; information technology and related infrastructure provision; customer service; email and notifications delivery (including marketing messaging); and auditing. </span></p><p><span style="font-weight: 400;">b. <span style="text-decoration: underline;">For legal reasons:</span> We may share personal information as we believe necessary or appropriate to comply with applicable laws and regulations; to cooperate with law enforcement; to enforce our terms and conditions; to protect our rights, privacy, safety, or property and/or that of our affiliates, you, or others; to prevent or take action regarding possible illegal activities or a violation of our policies; or for other legal reasons. These obligations may arise from laws and requests from authorities outside your country of residence.</span></p><p><span style="font-weight: 400;">c. <span style="text-decoration: underline;">In connection with a sale or business transaction:</span> We may disclose or transfer your personal information to a potential or actual buyer in the event of any reorganization, merger, sale, joint venture, assignment, transfer, or other disposition of all or any portion of our business, assets, or stock (including in connection with any bankruptcy or similar proceedings), including any due diligence related to such a transaction, in accordance with applicable law.</span></p><p><span style="font-weight: 400;">d. <span style="text-decoration: underline;">With your consent or when you otherwise choose to share:</span> We may share personal information with any party when we have your consent or when you otherwise choose to share such information, for example by using our social sharing functions or participating in contests (which may have their own terms)</span></p></blockquote><p id="5"><b>5. SECURITY</b></p><p><span style="font-weight: 400;">We use organizational, technical, physical, and administrative data security measures intended to protect personal information within our organization. Note that if you allow others to access your account, they may be able to view information about or stored within your account, including what content you&rsquo;ve viewed.</span></p><p id="6"><b>6. ADVERTISING</b></p><blockquote><p><span style="font-weight: 400;">a. <span style="text-decoration: underline;">In general</span></span></p><p><span style="font-weight: 400;">Advertisers (including Quibi), advertising technology companies, and/or service providers that perform advertising-related services for Quibi and our business partners use personal information in order to tailor ads, measure ad effectiveness, and enable other enhancements. This information may relate to your use of the Services, websites you visited, advertisements you viewed, and your other activities online. Advertising that is based on information collected from or about you across websites, applications, and other platforms over time is known as interest-based or online behavioral advertising. You have some control over how and whether you are subject to such advertising as described below. </span></p><p><span style="font-weight: 400;">b. <span style="text-decoration: underline;">Ads for Quibi</span></span></p><p><span style="font-weight: 400;">We advertise Quibi on publishers such as Facebook, Instagram, and YouTube. When you view a Quibi ad on one of those publishers, whether or not you click on it, Quibi, advertising technology companies, and service providers that perform advertising-related services for us and our business partners may collect personal information. The information practices of third parties who display Quibi ads are governed by their own privacy policies and are not governed by this Privacy Policy. For example, to learn about how Google processes your personal information in relation to serving ads and what choices you may have, visit their site </span><a target="_blank" href="https://policies.google.com/technologies/partner-sites" rel="noopener"><span style="font-weight: 400;">here</span></a><span style="font-weight: 400;">.</span></p><p><span style="font-weight: 400;">c. <span style="text-decoration: underline;">Third-party ads on Quibi</span></span></p><p><span style="font-weight: 400;">If you subscribe to an ad-supported plan, the ads you see may be tailored for you based in part on the personal information we collect from your use of the Services (e.g. your age), as well as information we receive from third parties. Under these plans, you cannot opt out of seeing ads, or from having us measure your engagement with the ads, but you can opt out of certain ad targeting based on your activity outside of the Quibi App or Website. To opt out of that kind of ad targeting, see the <a href="#7">Choices</a> section below. </span></p></blockquote><p id="7"><b>7. CHOICES</b></p><p><span style="font-weight: 400;">You have the following choices when it comes to our use of your personal information:</span></p><p><b>a. Ad Targeting</b></p><ul><li><b>Opt Out of Cross-App Advertising</b><ul><li><span style="font-weight: 400;">Cross-app advertising is the collection or use of data collected across different apps to infer your interests and tailor advertising. To opt out of cross-app advertising on your device (including the App), select &ldquo;Limit Ad Tracking&rdquo; in your iOS settings or &ldquo;Opt out of ad personalization&rdquo; in your Android settings. Details and instructions on how to find these settings on commonly used mobile devices can be found</span> <a target="_blank" href="https://www.networkadvertising.org/mobile-choices" rel="noopener"><span>here</span></a><span style="font-weight: 400;">.</span></li></ul></li></ul><ul><li><b>Opt Out of Interest-Based Advertising On Your Browser</b><ul><li><span style="font-weight: 400;">To opt out of interest-based advertising from many online advertisers (including some or all of Quibi&rsquo;s digital advertising partners) on your browser, please use the tools available at the appropriate links for your region below.</span><br /><ul><li>In the US: <a target="_blank" href="http://optout.networkadvertising.org/?c=1" rel="noopener"><span>Network Advertising Initiative (NAI)</span></a><span style="font-weight: 400;">; </span><a target="_blank" href="http://www.aboutads.info/" rel="noopener"><span>Digital Advertising Alliance (DAA)</span></a><span style="font-weight: 400;"> </span></li><li>In Europe: <span style="font-weight: 400;"><a target="_blank" href="http://www.youronlinechoices.com/" rel="noopener">European Interactive Digital Advertising Alliance (EDAA)</a></span></li><li><b><span style="font-weight: 400;">In Canada</span>: <a target="_blank" href="http://www.youradchoices.ca/" rel="noopener"><span style="font-weight: 400;">Ad Choices: Digital Advertising Alliance of Canada (DAAC)</span></a><span style="font-weight: 400;"> / </span><a target="_blank" href="http://www.youradchoices.ca/fr" rel="noopener"><span style="font-weight: 400;">Choix de Pub: l\'Alliance de la publicit&eacute; num&eacute;rique du Canada (DAAC)</span></a></b></li></ul></li></ul></li></ul><p><b>b. Ad Measurement</b></p><p><b><span style="font-weight: 400;">The App includes software that enables third parties to measure ad viewership and similar statistics. When you enable the &ldquo;Limit Ad Tracking&rdquo; or &ldquo;Opt out of ad personalization&rdquo; option on your device, user-level demographic measurement tracking on the App will be disabled for certain vendors (e.g,. </span><a href="https://www.nielsen.com/us/en/legal/privacy-statement/digital-measurement/" target="_blank" rel="noopener"><span style="font-weight: 400;">Nielsen</span></a><span style="font-weight: 400;">). This will not disable ad measurement for aggregate statistical purposes. Details and instructions on how to find these settings on commonly used mobile devices can be found </span><a href="https://www.networkadvertising.org/mobile-choices" target="_blank" rel="noopener"><span style="font-weight: 400;">here</span></a><span style="font-weight: 400;">.</span></b><b></b></p><p><b>c. Marketing Emails and Text Messages</b></p><p><span style="font-weight: 400;">If you no longer want to receive marketing-related emails or text messages from us on a going-forward basis, you may opt out by following the instructions contained in each such email or text message, or by opting out from the Settings page in the App. We will try to comply with your request(s) as soon as reasonably practicable or as required by applicable law. Please note that if you opt out of receiving marketing-related emails from us, we may still send you administrative messages, from which you cannot opt out.&nbsp;</span></p><p><b>d. Push Notifications</b></p><p><span style="font-weight: 400;">You can choose to receive or disable push notifications from us in your device settings, and you can turn those settings on or off at any time. </span></p><p id="8"><b>8. YOUR RIGHTS</b></p><p><span style="font-weight: 400;">If you would like to request to access, correct, update, suppress, restrict, or delete personal information, object to or opt out of the processing of personal information,withdraw your consent for the collection, use, or disclosure of your personal information, or if you would like to request to receive a copy of your personal information (to the extent these rights are provided to you by applicable law), you may contact us in accordance with the Contact Us section below and clearly describe your request. We will respond to your request consistent with applicable law.&nbsp;</span></p><p><span style="font-weight: 400;">In your request, please make clear what personal information you would like to have provided or changed, or whether you would like to have your personal information suppressed from our database. For your protection, we may only implement requests with respect to the personal information associated with the particular email address that you use to send us your request, and we may need to verify your identity before implementing your request.&nbsp;</span></p><p><span style="font-weight: 400;">We will try to comply with your request as soon as reasonably practicable or as required by applicable law. Please note that if you choose to suppress or delete information, we may need to retain certain information for purposes such as recordkeeping, security, fraud prevention,legal requirements, and/or to complete any transactions that you began prior to requesting a change or deletion</span></p><p id="9"><b>9. RETENTION&nbsp;</b></p><p><span style="font-weight: 400;">We retain personal information for as long as needed or permitted in light of the purpose(s) for which it was obtained and consistent with applicable law. The criteria used to determine our retention periods may include: </span></p><ul><li><span style="font-weight: 400;">how long we have a legitimate business need in keeping the personal information, or, if our collection is based on consent, whether you have revoked your consent;&nbsp;</span></li><li><span style="font-weight: 400;">the length of time we have an ongoing relationship with you and provide the Services to you (for example, for as long as you have an account with us or keep using the Services);</span></li><li><span style="font-weight: 400;">whether there is a legal obligation to which we are subject (for example, certain laws require us to keep records of your transactions for a certain period of time before we can delete them); or</span></li><li><span style="font-weight: 400;">whether retention is advisable to protect our rights or the rights or freedoms of our users (such as in regard to applicable statutes of limitations, litigation, or regulatory investigations). </span></li></ul><p id="10"><b>10. THIRD-PARTY ACCESS POINTS OR LINKS</b></p><p><span style="font-weight: 400;">This Privacy Policy does not address, and we are not responsible for the privacy, security, information, or other practices of any third parties, including any third party operating any website or service to which our Services link. The inclusion of a link in our Services does not imply endorsement of the linked site or service by us or by our affiliates.</span></p><p><span style="font-weight: 400;">In addition, we are not responsible for the information collection, use, disclosure, or security policies or practices of other organizations, such as Facebook, Apple, Google, or any other app developer, app provider, social media platform provider, operating system provider, wireless service provider, or device manufacturer, including with respect to any personal information you disclose to other organizations through or in connection with the Services.</span></p><p id="11"><b>11. USE OF THE SERVICES BY CHILDREN</b></p><p><span style="font-weight: 400;">The App is not directed to individuals under the age of sixteen (16) and we do not knowingly collect or sell personal information from children (as defined under applicable law) without involvement and approval of a parent or guardian, unless consistent with applicable law. </span></p><p id="12"><b>12. INTERNATIONAL PROCESSING </b></p><p><span style="font-weight: 400;">Your personal information may be stored and processed in any country where we have facilities or in which we engage service providers, and, by using the Services, you understand that your information may be transferred to countries outside of your country of residence, including the United States, which may have data protection rules that are different from those of your country. In certain circumstances, courts, law enforcement agencies, regulatory agencies or security authorities in those other countries may be entitled to access your personal information.</span></p><p><span style="font-weight: 400;">Some non-EEA countries are recognized by the European Commission as providing an adequate level of data protection according to EEA standards (the full list of these countries is available </span><a href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en" target="_blank" rel="noopener"><span style="font-weight: 400;">here</span></a><span style="font-weight: 400;">)</span><b>. </b><span style="font-weight: 400;">For transfers from the EEA to countries not considered adequate by the European Commission, we have put in place adequate measures, such as standard contractual clauses adopted by the European Commission to protect your personal information. You may obtain a copy of these measures by contacting us in accordance with the &ldquo;Contact Us&rdquo; section below. </span></p><p id="13"><b>13. SENSITIVE INFORMATION</b></p><p><span style="font-weight: 400;">Unless we request it, do not send or disclose to us any sensitive personal information (e.g., social security/social insurance numbers, copies of personal identification cards such as drivers licenses, information related to racial or ethnic origin, political opinions, religion or other beliefs, health, biometrics or genetic characteristics, criminal background, or trade union membership) on or through the Services, through customer service, or otherwise.</span></p><p id="14"><b>14. THIRD-PARTY PAYMENT SERVICE</b></p><p><span style="font-weight: 400;">We use third-party payment services (through the Apple and Google app stores) or subscription partners (such as T-Mobile) to process payments. If you subscribe to our Services, your payment information will be collected by such third parties, and will be subject to the applicable third party&rsquo;s privacy policy, rather than this Privacy Policy. We have no control over, and are not responsible for, this third party&rsquo;s collection, use, and disclosure of your personal information. We have no access to your payment information. </span></p><p id="15"><b>15. UPDATES TO THIS PRIVACY POLICY</b></p><p><span style="font-weight: 400;">The &ldquo;</span><i><span style="font-weight: 400;">Last Updated</span></i><span style="font-weight: 400;">&rdquo; legend at the top of this Privacy Policy indicates when this Privacy Policy was last revised. We reserve the right to revise this Privacy Policy from time to time. Any changes will become effective when we post the revised Privacy Policy on the Services or as otherwise stated in the revised Privacy Policy. </span></p><p id="16"><b>16. CONTACT US</b></p><p><span style="font-weight: 400;">Quibi Holdings, LLC located at 6555 Barton Avenue, Los Angeles, CA, 90038 is the company responsible for collection, use, and disclosure of your personal information under this Privacy Policy.</span></p><p><span style="font-weight: 400;">If you have any questions about this Privacy Policy, please contact us at </span><a target="_blank" href="mailto:privacy-contact@quibi.com" rel="noopener"><span style="font-weight: 400;">privacy-contact@quibi.com</span></a><span style="font-weight: 400;"> or:</span><span style="font-weight: 400;"></span></p><p><a href="https://www.google.com/maps/place/Quibi/@34.0879474,-118.3348257,15z" target="_blank" rel="noopener"><span style="font-weight: 400;">Legal Department<br />Quibi Holdings, LLC<br />6555 Barton Avenue<br />Los Angeles, CA 90038</span></a><a href="https://www.google.com/maps/place/Quibi/@34.0879474,-118.3348257,15z"><span style="font-weight: 400;"></span></a></p><p id="17"><b>17. ADDITIONAL INFORMATION FOR EEA RESIDENTS</b></p><p><span style="font-weight: 400;">Our legal bases for processing your personal information are that processing your data is:</span></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Necessary for the performance of a contract between you and us, for example if we&rsquo;re providing you with a service that you have requested;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Necessary for compliance with Quibi&rsquo;s legal obligations;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Necessary for our legitimate interests, including for the purposes described above, including to customize content for you and continue to develop and improve our services; or</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">With your consent or at your direction.</span></li></ul><p><span style="font-weight: 400;">If you do not provide certain information to us sufficient to verify your identity, we may, in some circumstances, be unable to comply with our obligations or provide you with the services that you request.</span></p><p><span style="font-weight: 400;">On matters relating to the processing of personal data, EEA residents may:</span></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Contact us directly at </span><a target="_blank" href="mailto:privacy-contact@quibi.com" rel="noopener"><span style="font-weight: 400;">privacy-contact@quibi.com</span></a></li><li style="font-weight: 400;"><span style="font-weight: 400;">Contact our appointed EU Representative at VeraSafe via:</span></li><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Telephone: <a href="tel:+420-228-881-031">+420 228 881 031</a></span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Contact form: </span><a target="_blank" href="https://www.verasafe.com/privacy-services/contact-article-27-representative" rel="noopener"><span style="font-weight: 400;">https://www.verasafe.com/privacy-services/contact-article-27-representative</span></a><span style="font-weight: 400;"> &lsquo;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Mail:&nbsp;</span><span style="font-weight: 400;"></span></li></ul></ul><p><a href="https://www.google.com/maps?q=VeraSafe+Ireland+Ltd.+Unit+3D+North+Point+House+North+Point+Business+Park+New+Mallow+Road+Cork+T23AT2P+Ireland&amp;rlz=1C5CHFA_enUS884US884" target="_blank" rel="noopener"><span style="font-weight: 400;">VeraSafe Ireland Ltd.<br />Unit 3D North Point House<br />North Point Business Park<br />New Mallow Road<br />Cork T23AT2P<br />Ireland</span></a></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Lodge a complaint with an EU/EEA data protection authority for your country or region where you have your habitual residence or place of work or where an alleged infringement of applicable data protection law occurs. A list of data protection authorities is available </span><a href="http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080"><span style="font-weight: 400;">here</span></a><span style="font-weight: 400;">.</span></li></ul><p id="18"><b>18. ADDITIONAL INFORMATION FOR CALIFORNIA RESIDENTS</b></p><p><span style="font-weight: 400;">Effective January 1st, 2020, the California Privacy Protection Act (&ldquo;CCPA&rdquo;) provides its residents with certain rights. If you are a California resident, the law permits you to request that we disclose to you the following information covering the past twelve months: the categories of personal information we collected about you and the categories of sources from which we collected such personal information; the specific pieces of personal information we collected about you; the business or commercial purpose for collecting or selling (if applicable)</span> <span style="font-weight: 400;">personal information about you; the categories of third parties with whom we shared personal information about you; the categories of personal information about you that we sold and the categories of third parties to whom we sold such personal information (if applicable); and the categories of personal information about you that we otherwise shared or disclosed, and the categories of third parties with whom we shared or disclosed such personal information (if applicable). Additionally, you may request that we delete personal information we have collected from you as defined under the California Privacy Protection Act (&ldquo;CCPA&rdquo;).&nbsp;</span></p><p><span style="font-weight: 400;">To make a request to use one of these rights, please contact us in accordance with the &ldquo;Contact Us&rdquo; section above. You must use the email used in your account to make the request. Alternatively, you may designate an authorized agent to make a data request to us on your behalf under the CCPA. In order for such an agent to make a request, they must provide proof of their power of attorney and valid government identification of both the requester and the agent. In some instances, we may decline to honor your request where an exception applies, such as where the disclosure of personal information would adversely affect the rights and freedoms of another California resident. Consistent with California law, we will not charge you different prices or provide a different quality of service if you use your rights unless it relates to the value of the information.</span></p><p><span style="font-weight: 400;">We have not &ldquo;sold&rdquo; personal information as defined by the CCPA. We do permit other parties to collect information through the Services and share information with other parties for business purposes. These business purposes are described above. </span></p><h4><strong>Quibi and the Q Logo are trademarks of Quibi Holdings, LLC.&nbsp; All other product names, company names, marks, logos, and symbols are trademarks of their respective owners.</strong></h4>'
                                                },
                                                termsOfService: {
                                                    termsOfService: '<h2>Terms of Service</h2><p><i><span style="font-weight: 400;">Last Updated</span></i><span style="font-weight: 400;">: February 1, 2020</span></p><p><span style="font-weight: 400;">These terms of use (&ldquo;</span><b>Terms</b><span style="font-weight: 400;">&rdquo;) are a contract between you and Quibi Holdings, LLC (&ldquo;</span><b>Quibi</b><span style="font-weight: 400;">,&rdquo; &ldquo;</span><b>we</b><span style="font-weight: 400;">,&rdquo; or &ldquo;</span><b>us</b><span style="font-weight: 400;">&rdquo;). </span><span style="font-weight: 400;">These terms govern your use of the personalized service provided by Quibi for discovering and watching Quibi content, including all features and functionalities, recommendations and reviews, the mobile applications (&ldquo;</span><b>App</b><span style="font-weight: 400;">&rdquo;), the website (&ldquo;</span><b>Website</b><span style="font-weight: 400;">&rdquo;), user interfaces, marketing campaigns, as well as all content and software associated with our service (collectively, including the App and Website, the &ldquo;</span><b>Services</b><span style="font-weight: 400;">&rdquo;). </span><span style="font-weight: 400;">By clicking to accept these Terms or otherwise using the Services, you agree to these Terms. If you don&rsquo;t agree to any of these Terms, you are not permitted to use the Services.</span></p><p><b>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT ALL DISPUTES EXCEPT FOR INJUNCTIVE RELIEF AND DISPUTES ELIGIBLE FOR SMALL CLAIMS COURT WILL BE RESOLVED BY BINDING ARBITRATION AND NOT COURTS, JUDGES, OR JURIES, AND YOUR CLAIMS CANNOT BE BROUGHT AS A CLASS ACTION AGAINST US. Please review Section 18 (&ldquo;Disputes&rdquo;) for full details. </b></p><p><span style="font-weight: 400;">When using the Services, you agree to comply with and are subject to any posted guidelines, rules, or supplemental terms applicable to such services or features, as may be posted from time to time on the Services. All such guidelines, rules, or terms are hereby incorporated by reference into the Terms. To the extent that you are asked to review and accept any supplemental terms that expressly conflict with these Terms, the supplemental terms associated with the applicable portion of the Services will govern with respect to your use of such portion of the Services, and prevail over these Terms to the extent of the conflict.</span></p><p>&nbsp;<span style="font-weight: 400;">We can change these Terms at any time. If we believe a change is material or are legally required to provide notice, we&rsquo;ll use commercially reasonable efforts to let you know before the change takes effect, such as through a notice by email or through the Services. Changes to these terms that we believe are immaterial are effective immediately upon posting of the new Terms to the Services. By using the Services on or after that effective date, you agree to the new Terms. If you don&rsquo;t agree with any changes to these Terms, you must immediately delete your account on the Services, as any use of the Services after the effective date of the new Terms will be subject to the new Terms.</span></p><p><span style="font-weight: 400;">By using the Services, you affirm that (a) you are of the age of majority in your jurisdiction (usually 18, but not always) to enter into these Terms,</span><span style="font-weight: 400;"> (b) you have not previously been terminated, removed, or suspended from the Services, and (c) you are located in one of the geographic territories to which Quibi directs the Services.</span><span style="font-weight: 400;">&nbsp;</span></p><p><span style="font-weight: 400;">Quibi may use third parties, service providers, and business partners </span><b>(&ldquo;Providers&rdquo;) </b><span style="font-weight: 400;">to provide its service and related functionality. By using the Services, you agree to let Quibi and Providers collect and use information as detailed in our </span><a href="https://quibi.com/privacy-policy/"><span style="font-weight: 400;">Privacy Policy</span></a><span style="font-weight: 400;">. You further consent to letting Quibi and its Providers to transfer, store, and process your information (including your personal information) both within and outside of the United States.</span></p><h2 id="2"><b>2. Registration; Passwords</b></h2><p><span style="font-weight: 400;">You may need to register for an account to use all or part of the Services, such as the App or our email list. When you register for an account or sign up for our mailing list, you may be required to provide us with some information about yourself, including personal information such as your email address, gender identity, password, and year of birth. You represent and warrant that the information you provide to us is accurate. We may require that you change any password or other information that you provide to us in registering for an account. Your username and password are for your personal use only, may not be shared by you, and should be kept confidential. You agree to use a strong, unique password for Quibi Services that is not used on other services. You, and not Quibi, are responsible for any use or misuse of your account or password, and you must promptly notify us of any confidentiality breach or unauthorized use of your login information or your Services account.</span></p><h2 id="3"><b>3. Subscription</b></h2><p><span style="font-weight: 400;">If you subscribe to the Services, your subscription will continue and automatically renew until terminated. You can cancel your subscription before it renews as set out below in the &ldquo;Cancellation&rdquo; section. By subscribing to the Services, you agree that Quibi or its payment processor may charge the service fees listed on the Services on a periodic basis to the payment method you specify at the time of your initial purchase. All fees for the Services are non-refundable, to the fullest extent permitted under applicable law. You acknowledge and agree that any fees for the Services may increase at any time, subject to any prior notice that we may provide. Additional fees may apply for new features, content, or additions to the Services that may be made available from time to time, in which case Quibi will provide you with notice in advance of charging the additional fees. In the event Quibi charges additional fees in connection with the Services, you will have an opportunity to review and accept the additional fees that you will be charged, prior to being charged. If you do not accept any such additional fees, Quibi may discontinue your access to the Services. You acknowledge and agree that Quibi may use Apple Pay, Google Pay, or other third-party payment processors to process fees for the Services on our behalf, and that Quibi will not be liable for any errors caused by such third-party payment processors.&nbsp;</span></p><p><span style="font-weight: 400;">We may offer a number of subscription plans, including special promotional plans or memberships offered by third parties in conjunction with the provision of their own products and services. We are not responsible for the products and services provided by such third parties. The subscription plans may have differing conditions and limitations, which will be disclosed at your sign-up or in other communications made available to you. You can find specific details regarding your subscription to the Services in the Settings section of the Services. </span></p><h2 id="4"><b>4. Free Trials</b></h2><p><span style="font-weight: 400;">We may sometimes offer free trials to a particular Service or subscription plan for certain qualifying users. If we offer you a free trial, the specific terms of your free trial will be stated either in the material describing the particular free trial or during your sign-up for the free trial. Upon signing up, our payment processor may charge a small amount to verify that your payment method is valid.&nbsp;</span><span style="background-color: transparent; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit;"></span></p><p><span style="font-weight: 400;">Once your free trial period ends, we will begin billing your payment method for your periodic subscription fees (plus any applicable taxes), unless you cancel prior to the end of your free trial. For that reason, unless otherwise indicated in the free trial description, you will be asked to set up a valid payment method when redeeming a free trial offer. For existing subscribers who accept a free trial to a Service, at the end of the free trial, you may be charged a prorated amount for the Service to cover the period between the date the free trial ends and the date your next billing period begins.&nbsp;</span></p><p><span style="font-weight: 400;">If you don&rsquo;t want to be charged after your free trial period, please cancel your subscription no later than the day before the last day of your free trial period. If you cancel your subscription during a free trial or while using a promotional code or other credits, cancellation may be effective immediately. </span></p><h2 id="5"><b>5. Cancellation</b></h2><p><span style="font-weight: 400;">Your subscription will continue in effect on a recurring basis corresponding to the term of your subscription unless and until you cancel your subscription or the account or Services are otherwise suspended or discontinued pursuant to these Terms. You must cancel your subscription before your next renewal date in order to avoid billing for each renewal period. We or our payment processor will bill the periodic subscription fee plus any applicable taxes to the active payment method at the time. If you modify your subscription to switch from one subscription level to another (e.g. from the ad-free to the ad-supported plan) during your billing period, you may not have continued access to your original subscription level. If you cancel your subscription, cancellation will be effective at the end of the current billing period -- this means that you will have continued access to your subscription for the remainder of that period, but you will not receive a refund.&nbsp;</span></p><p><span style="font-weight: 400;">You will also forfeit any service, referral, or redeemed gift card credits upon cancellation, including if you switch your billing method from Quibi&rsquo;s direct billing to a third-party payment processor like Apple Pay or Google Pay, or vice versa.&nbsp;</span></p><p><span style="font-weight: 400;">You can cancel your subscription by logging into your Services account and following the instructions in the settings of the App. If you pay for the Services through your account with a third party (e.g. through the Google Play store) and want to cancel your subscription or manage your billing, you may need to do so through your account with such third party. </span></p><h2 id="2"><b>6. Ownership of Content and Services</b></h2><p><span style="font-weight: 400;">The Services are owned and operated by Quibi. You acknowledge and agree that Quibi and/or Quibi&rsquo;s content, technology, and Providers own all right, title, and interest in and to the Services, including: (a) all videos, audio, images, graphics, text, interfaces, information, data, software, and all other elements of the Services, and the design, selection, look, feel, and arrangement thereof; and (b) all intellectual property and other legal rights (including, but not limited to, any and all copyrights, patents, patent applications, trade secrets, trademarks and other intangible rights) therein and thereto. You may not publish, reproduce, distribute, display, perform, edit, adapt, modify, or otherwise exploit any part of the Services or any content or information made available through the Services without Quibi&rsquo;s written consent. You will not earn or acquire any ownership rights in any copyrights, patents, trade secrets, trademarks or other intellectual property rights on account of these Terms or any access to or use of the Services. You agree that all content provided to you through the Services is owned by Quibi, Providers and/or other third parties and that you will have no ownership rights in such content.</span></p><h2 id="7"><b>7. License Grant and Restrictions</b></h2><p><span style="font-weight: 400;">Subject to your compliance with these Terms and payment of all applicable fees, Quibi hereby grants you a limited, personal, nonexclusive, non-transferable, non-sublicensable, and revocable license to access and use the Services using the functionality of the Apps on your personal device(s), solely for your personal, noncommercial use, as provided herein. </span></p><p><span style="font-weight: 400;">You may not use the Services for any other purpose, nor may you:</span></p><ol><li style="font-weight: 400;"><span style="font-weight: 400;">transfer or otherwise permit any other person or entity to access the Services using your account, which you acknowledge and agree is personal to you and is non-transferable;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">publish, reproduce, distribute, display, perform, edit, adapt, modify, create derivative works of, resell, or otherwise exploit the Services or any content distributed thereon under any circumstances;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">circumvent or disable any content protection system or digital rights management technology used with the Services;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">decompile, reverse engineer, disassemble or otherwise reduce the Services or any software or technology provided to you in connection with the Services, to a human-readable form, except to the extent expressly permitted by applicable law notwithstanding this restriction;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">remove identification, copyright, trademark, or other proprietary notices from content or materials provided on the Services;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">access or use the Services in an unlawful or unauthorized manner;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">access or tamper with non-public areas of the Services, our computer systems, or the systems of our Providers;&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">access or search the Services by any means other than the generally available, published interfaces (e.g., APIs) that we provide;&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">forge any TCP/IP packet header or any part of the header information in any email or posting, or in any way use the Services to send altered, deceptive, or false information;&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Impersonate or otherwise pose as someone you aren&rsquo;t in communicating with us, creating an account, or otherwise using the Services.&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">interfere with, or disrupt, the access of any user, host, or network, including sending a virus, overloading, flooding, spamming, mail-bombing the Services, or by scripting the creation of content or accounts in such a manner as to interfere with or create an undue burden on the Services; or</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">attempt to do, or assist any third party in doing, any of the foregoing.</span></li></ol><p><span style="font-weight: 400;">You may access our Services only for your personal, individual use, not for commercial or professional purposes, and only via our App or standard browsers like Chrome, Safari, Firefox, Internet Explorer, or the like, and not with scripts, bots or other automation code that access our Services to extract content or information ("Crawling"). You must not conduct or support Crawling of our Services, except with prior written notice to us and in full compliance with the provisions of our robots.txt file. We reserve the right to withdraw our permission to Crawling for any and all reasons, including, without limitation, our assessment that your Crawling places an excessive load or burden on the Services (as determined by Quibi).</span></p><p><span style="font-weight: 400;">Our Services (including our App and Website), software, and any copyrighted materials we make accessible as part of our Services are licensed, not sold to you. You must not copy, adapt, distribute, publicly display or publicly perform any copyrighted materials we make available as part of our Services, except in full compliance with these Terms, which constitute license conditions and limitations, and contractual covenants.</span></p><p><span style="font-weight: 400;">You understand and agree that third-party terms and fees, such as those from your mobile carrier or Internet service provider, may apply to the use and operation of your device in connection with your use of the Services, and that you are solely responsible for any such third-party terms and fees.</span></p><p><span style="font-weight: 400;">You acknowledge that the Services are licensed, not sold to you and that third-party terms and fees, such as those from your mobile carrier or Internet service provider, may apply to the use and operation of your device in connection with your use of the Services, and that you are solely responsible for any such third-party terms and fees.</span></p><h2 id="8"><b>8. Access to Services</b></h2><p><span style="font-weight: 400;">You acknowledge the following:</span></p><ol><li style="font-weight: 400;"><span style="font-weight: 400;">Quibi requires high-speed Internet access, a Quibi-compatible device, and at least one valid, accepted method of payment enabled in Google or Apple&rsquo;s app store or a qualifying plan with one of our subscription partners. The quality of the content may differ based on your device, settings, and network quality.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Certain features, content, or Services may not be available at all times, geographic locations, or devices;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Access to the Services may be interrupted for reasons within or beyond the control of Quibi, and that Quibi cannot and does not guarantee you will be able to access or use the Services whenever you wish to do so; and&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Quibi offers its Services in locations, times, and on platforms (such as Android or iOS) in its sole discretion, and availability may be unavailable, prohibited, revoked, or discontinued at any time.</span></li></ol><p><span style="font-weight: 400;">To the fullest extent permitted under applicable law, we will not be liable for any change to or any discontinuation of the Services. </span><span style="font-weight: 400;">You agree that no refunds, discounts, or other consideration shall be provided to you by Quibi or its Providers for being unable to access the Services or part of the Services unless legally required. </span></p><h2 id="9"><b>9. Third Party Services and Links</b></h2><p><span style="font-weight: 400;">The Services may contain links to third-party content and integrations with third parties, such as advertisers and social media sites. Quibi does not control, endorse, sponsor, recommend, or otherwise accept responsibility for any loss or damage that may arise from your use of such third-party content and integrations. These links and integrations are provided only as a convenience, and Quibi does not make any representations or warranties with respect to third-party links and integrations. Use of any linked third-party content and integrations is at your own risk and subject to the terms of use for such third-party content.</span></p><h2 id="10"><b>10. Security</b></h2><p><span style="font-weight: 400;">If you find a security vulnerability in the Services, you must report the issue to us and keep it confidential until we have fixed the vulnerability. You can reach us at </span><a href="mailto:bug-report@quibi.com" target="_blank" rel="noopener">bug-report@quibi.com</a><span style="font-weight: 400;">. </span></p><h2 id="11"><b>11. Quibi&rsquo;s Trademarks</b></h2><p><span style="font-weight: 400;">The word &ldquo;Quibi,&rdquo; the Quibi logo, and other Quibi marks, graphics, and logos are trademarks of Quibi. None of the Quibi trademarks may be used, copied, downloaded, or otherwise exploited without Quibi&rsquo;s prior written consent in each instance. You may not use our trade names, trademarks, service marks or logos in connection with any product or service that is not ours, or in any manner that is likely to cause confusion. Nothing contained on the Services should be construed as granting any right to use any trade names, trademarks, service marks or logos without the express prior written consent of Quibi or the owner of the marks, as applicable.</span></p><h2 id="12"><b>12. Promotions</b></h2><p><span style="font-weight: 400;">Any sweepstakes, contests, raffles, surveys, games, or similar promotions (collectively, &ldquo;Promotions&rdquo;) made available through the Services will be governed by rules that are separate from these Terms. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms, the Promotion rules will govern.</span></p><h2 id="13"><b>13. Communications with You</b></h2><p><span style="font-weight: 400;">Quibi and Providers may communicate with you about the Services, including through one or more third party e-mail or survey services, via methods determined by Quibi, including through the Services or contact information you provide as part of the registration process for the Services. As permitted by applicable law, Quibi and/or Providers may send you communications that (i) solicit Feedback via email, surveys, bug reports, or other methods Quibi may determine; (ii) collect additional information regarding issues you report in your Feedback; (iii) notify you of changes to the Services or these Terms; and (iv) tell you about future Quibi programs, products or services. You agree that any such notices, disclosures, and other communications will satisfy Quibi&rsquo;s applicable legal notification requirements. Quibi recommends that you keep a copy of any electronic communications we send to you for your records.&nbsp;</span></p><h2 id="14"><strong>14. Unsolicited Materials</strong></h2><p><span style="font-weight: 400;">Quibi does not accept unsolicited materials or ideas for content. Should you send any unsolicited materials or ideas, you do so with the understanding that (a) there is no implied agreement of any sort between you and Quibi regarding such materials or ideas, (b) no consideration of any sort will be provided to you, (c) neither Quibi nor any of its affiliates is responsible for the alleged or actual similarity of any content or programming in any media to such unsolicited materials, and (d) you are hereby waiving and releasing any and all moral rights or other claims against Quibi and its affiliates related to such materials and ideas, even if any content or programming developed, produced or exploited by Quibi or its affiliates in any manner is substantially similar to the material or idea you submitted to us. Quibi&rsquo;s standard policy is to return unsolicited materials submitted in writing (and delete any materials submitted electronically) without reviewing them or keeping a copy.</span></p><h2 id="15"><b>15. Feedback</b></h2><p><span style="font-weight: 400;">Quibi may use any comments, information, ideas, concepts, suggestions, reviews, techniques, or any other material contained in any communication you send to us (&ldquo;</span><b>Feedback</b><span style="font-weight: 400;">&rdquo;), including customer support inquiries or responses to surveys, worldwide and in perpetuity without compensation, acknowledgment or payment to you for any purpose whatsoever, including, but not limited to, developing, manufacturing, and marketing products and creating, modifying, or improving the Quibi Services. In addition, you agree to waive and not to enforce any &ldquo;moral rights&rdquo; in and to the Feedback, to the extent permitted by applicable law. </span></p><h2 id="16"><b>16. Customer Support</b></h2><p><span style="font-weight: 400;">Quibi cares about your issues, thoughts, and concerns. To help us find the best person to address your issue, please email the appropriate contact below:</span></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Report a bug or vulnerability: </span><a href="mailto:bug-report@quibi.com"><span style="font-weight: 400;">bug-report@quibi.com</span></a><span style="font-weight: 400;">&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Give us feedback: </span><a href="mailto:feedback@quibi.com"><span style="font-weight: 400;">feedback@quibi.com</span></a><span style="font-weight: 400;">&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Use your data rights: </span><a href="mailto:data-rights@quibi.com"><span style="font-weight: 400;">data-rights@quibi.com</span></a><span style="font-weight: 400;">&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Privacy issue: </span><a href="mailto:privacy-contact@quibi.com"><span style="font-weight: 400;">privacy-contact@quibi.com</span></a></li><li style="font-weight: 400;"><span style="font-weight: 400;">File a legal complaint against us: </span><a href="mailto:dispute-notice@quibi.com"><span style="font-weight: 400;">dispute-notice@quibi.com</span></a><span style="font-weight: 400;">&nbsp;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Submissions for content: n/a (we do not accept unsolicited submissions, see below)</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">General question: </span><a href="mailto:care@quibi.com"><span style="font-weight: 400;">care@quibi.com</span></a><span style="font-weight: 400;"> </span></li></ul><h2 id="17"><strong>17. Complaints</strong></h2><p><span style="font-weight: 400;">If you have a question or complaint regarding our Services, please send an e-mail to <a href="mailto:help@quibi.com">help@quibi.com</a>. You may also contact us by writing to <a href="https://www.google.com/maps/place/6555+Barton+Ave,+Los+Angeles,+CA+90038/" target="_blank" rel="noopener">6555 Barton Ave, Los Angeles, CA 90038</a> or by phone at <a href="tel:1-888-382-3130">1-888-382-3130</a>. Please note that e-mail communications will not necessarily be secure; accordingly you should not include credit card information or other sensitive information in your e-mail correspondence with us. California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by mail at <a href="https://www.google.com/maps/place/1625+N+Market+Blvd,+Sacramento,+CA+95834" target="_blank" rel="noopener">1625 North Market Blvd., Sacramento, CA 95834</a>, or by telephone at <a href="tel:1-916-445-1254">(916) 445-1254</a> or <a href="tel:1-800-952-5210">(800) 952-5210</a>.</span></p><h2 id="18"><b>18. Disputes</b></h2><p><span style="text-decoration: underline;"><b>Informally First</b><b>. </b></span><span style="font-weight: 400;">If you have an issue or concern we&rsquo;d like to try to work it out informally first. Before filing a claim against Quibi, you agree to try to resolve the dispute informally by contacting </span><a href="mailto:dispute-notice@quibi.com"><span style="font-weight: 400;">dispute-notice@quibi.com</span></a><span style="font-weight: 400;">. We&rsquo;ll try to resolve the dispute informally by responding to you by email. If the dispute is not resolved within 15 days of submission, you or Quibi may bring a formal proceeding. </span></p><p><span style="text-decoration: underline;"><b>Venue.</b></span><span style="font-weight: 400;"> You and Quibi agree that any judicial proceeding to resolve claims relating to these terms or the Service will be brought in the federal or state courts of Los Angeles County, California, subject to the mandatory arbitration provisions below. Both you and Quibi consent to venue and personal jurisdiction in such courts for any matters not resolved by arbitration as provided below. If you reside in a country (e.g., in the EU or Canada) with laws that give consumers the right to bring disputes in their local courts, this paragraph doesn&rsquo;t affect those rights.</span></p><p><span style="text-decoration: underline;"><b>Arbitration. Unless you are a consumer located in a jurisdiction that prohibits the exclusive use of arbitration for dispute resolution or class action waivers, you also agree to the following mandatory arbitration provisions and class action waivers to the </b><b>extent they are not prohibited under local, applicable law:</b></span></p><blockquote><p><b>a.<span style="text-decoration: underline;">We both agree to arbitrate</span>. <span style="font-weight: 400;">You and Quibi each agree to resolve any claims relating to these Terms or the Services (&ldquo;Disputes&rdquo;) through final and binding arbitration by a single arbitrator, except as set forth under Exceptions to Agreement to Arbitrate below. This includes disputes arising out of or relating to interpretation or application of this &ldquo;Mandatory Arbitration Provisions&rdquo; section, including its enforceability, revocability, or validity. </span><span style="font-weight: 400;">YOU ARE GIVING UP THE RIGHT TO LITIGATE (OR PARTICIPATE IN AS A PARTY OR CLASS MEMBER) ALL DISPUTES IN COURT BEFORE A JUDGE OR JURY. INSTEAD, ALL DISPUTES WILL BE RESOLVED BEFORE A NEUTRAL ARBITRATOR, WHOSE DECISION WILL BE FINAL EXCEPT FOR A LIMITED RIGHT OF APPEAL UNDER THE FEDERAL ARBITRATION ACT OR SIMILAR LEGISLATION IN THE JURISDICTION WHERE THE ARBITRATION IS SEATED.</span></b></p><p><b>b. <span style="text-decoration: underline;">Opt-out of agreement to arbitrate</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> You can decline this agreement to arbitrate by emailing us at </span><a href="mailto:arbitration-optout@quibi.com"><span style="font-weight: 400;">arbitration-optout@quibi.com</span></a><span style="font-weight: 400;"> from the email associated with your account (if applicable), including your name and a statement of your intention to opt out in the body of the email. If you agreed to a previous version of these Terms that allowed you to opt out of arbitration, your previous choice to opt out or not opt out remains binding. </span></b></p><p><b>c. <span style="text-decoration: underline;">Arbitration Procedures</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> Any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined exclusively by arbitration in Los Angeles, California in the United States of America before an arbitrator. The arbitration shall be administered by JAMS pursuant to its JAMS&rsquo; Streamlined Arbitration Rules and Procedures. The language to be used in the arbitral proceedings will be English. Judgment on the Award may be entered in any court having jurisdiction. This clause shall not preclude parties from seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction.</span></b></p><p><b>d. <span style="text-decoration: underline;">Arbitration Fees and Incentives.</span><span style="font-weight: 400;"> The JAMS rules will govern payment of all arbitration fees. Quibi will pay all arbitration fees for individual arbitration for claims for less than USD $75,000. If you receive an arbitration award that is more favorable than any other we make to resolve the Dispute, we will pay you USD $1,000 in addition to the award. Quibi will not seek its attorneys&rsquo; fees and costs in arbitration unless the arbitrator determines that your claim is frivolous. </span></b></p><p><b>e. <span style="text-decoration: underline;">Exceptions to the Agreement to Arbitrate.</span><span style="font-weight: 400;"> Either you or Quibi may assert Disputes, if they qualify, in small claims court in Los Angeles, CA, or any United States county where you live or work. Quibi may bring a lawsuit solely for injunctive relief to stop unauthorized use or abuse of the Services, or intellectual property infringement (for example, trademark, trade secret, copyright, or patent rights) without first engaging in arbitration or the informal dispute-resolution process described above. If the agreement to arbitrate is found not to apply to you or your claim, you agree to the exclusive jurisdiction of the state and federal courts in Los Angeles County, California to resolve your claim to the fullest extent permitted by applicable law. </span></b></p><p><b>f. <span style="text-decoration: underline;">NO CLASS ACTIONS.</span> <span style="font-weight: 400;">TO THE FULLEST EXTENT OF THE LAW, YOU AND QUIBI AGREE THAT ANY PROCEEDINGS TO RESOLVE OR LITIGATE ANY DISPUTE IN ANY FORUM WILL BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS, AND NEITHER YOU NOR QUIBI WILL SEEK TO HAVE ANY DISPUTE HEARD AS A CLASS ACTION OR IN ANY OTHER PROCEEDING IN WHICH EITHER PARTY ACTS OR PROPOSES TO ACT IN A REPRESENTATIVE CAPACITY. No arbitration or proceeding will be combined with another without the prior written consent of all parties to all affected arbitrations or proceedings.</span></b></p><p><b>g. <span style="text-decoration: underline;">Filing Period</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> TO THE FULLEST EXTENT PERMITTED BY LAW, ANY DISPUTE UNDER THESE TERMS MUST BE FILED WITHIN ONE (1) YEAR, EITHER IN AN ARBITRATION PROCEEDING OR AS OTHERWISE PROVIDED ABOVE IN SECTION 22(e). The one-year period begins when the events giving rise to the Dispute first occur. If a claim is not submitted within one year, it is permanently barred. This period can only be extended by the written consent of both parties. No statutes or provisions of law that would toll or otherwise affect the time in which a party may bring a claim shall operate to extend the period limited in this Section, and any such statutes and provisions are hereby waived, to the fullest extent permitted by law.</span></b></p><p><b>h. <span style="text-decoration: underline;">Modifications.</span><span style="font-weight: 400;"> You have the right to reject any changes to this arbitration provision, except for a change to Quibi&rsquo;s contact information. You may reject a change by sending us written notice within 30 days. This will result in your account on the Services being immediately terminated. Note that this arbitration provision, as it was prior to the rejected changes, will remain in effect.</span></b></p></blockquote><h2 id="19"><strong>19. Disclaimer of Warranties</strong></h2><p><span style="font-weight: 400;">YOU EXPRESSLY AGREE THAT YOUR USE OF THE SERVICES IS AT YOUR OWN RISK. THE SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, TO THE FULLEST EXTENT PERMITTED BY LAW, AND ARE PROVIDED WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. WITHOUT LIMITING THE FOREGOING, QUIBI, PROVIDERS, THEIR RESPECTIVE AFFILIATES, SUCCESSORS AND ASSIGNS, OR ANY OF THEIR RESPECTIVE INVESTORS, DIRECTORS, OFFICERS, EMPLOYEES, PROVIDERS (INCLUDING THOSE WHO HELP ADMINISTER AND OPERATE THOSE SERVICES), AGENTS, AND SUPPLIERS (COLLECTIVELY, THE &ldquo;QUIBI PARTIES&rdquo;) DO NOT MAKE ANY WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, TITLE, MERCHANTABILITY, COMPLETENESS, AVAILABILITY, COMPATIBILITY, OR NON-INFRINGEMENT; OR THAT THE SERVICES WILL BE UNINTERRUPTED, FREE OF VIRUSES AND OTHER HARMFUL COMPONENTS, ACCURATE, ERROR FREE, OR RELIABLE; OR AS TO THE ACCURACY, CURRENCY, OR COMPLETENESS OF ANY INFORMATION MADE AVAILABLE THROUGH THE SERVICES, WHETHER PROVIDED IN VIDEO, AUDIO, TEXTUAL, GRAPHICAL, OR OTHER FORM (THE &ldquo;</span><b>SERVICE CONTENT</b><span style="font-weight: 400;">&rdquo;). QUIBI PARTIES NO NOT MAKE ANY REPRESENTATIONS OR WARRANTIES WITH RESPECT TO ANY PROVIDERS. QUIBI PARTIES ARE NOT RESPONSIBLE OR LIABLE FOR ANY DECISIONS YOU MAY MAKE IN RELIANCE ON THE SERVICES OR SERVICE CONTENT, OR FOR ANY DEFECTS OR ERRORS IN THE SERVICE, FOR YOUR USE OF THE APPS WITH HARDWARE THAT DOES NOT MEET THE MINIMUM REQUIREMENTS SPECIFIED BY QUIBI, OR FOR YOUR USE OF ANY VERSION OF THE APPS OTHER THAN THE MOST RECENT GENERALLY AVAILABLE RELEASE OF SUCH APPS. YOU EXPRESSLY AGREE THAT YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY, TO THE FULLEST EXTENT PERMITTED BY LAW, INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE, OR THE LOSS OF DATA, THAT RESULTS FROM USE OF THE SERVICES.</span></p><h2 id="20"><b>20. Limitations of Liability</b></h2><p><span style="font-weight: 400;">This paragraph is inapplicable in Quebec: TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL QUIBI BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR OTHER DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF SAVINGS OR REVENUE, LOSS OF USE, LOSS OF LIFE OR HEALTH, THE CLAIMS OF THIRD PARTIES, AND ANY COST OF ANY SUBSTITUTE SERVICES, ARISING OUT OF OR IN ANY WAY RELATED TO THE SERVICES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER THEORY, EVEN IF THE QUIBI PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE QUIBI PARTIES&rsquo; TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE EXCEED THE GREATER OF THE ACTUAL AMOUNT YOU PAID FOR THE SERVICES (IF ANY) AND USD $100. THE PARTIES AGREE THAT THE FOREGOING LIMITATIONS ARE ESSENTIAL TO THE BASIS OF THE BARGAIN CONTEMPLATED BY THESE TERMS.</span></p><p><span style="font-weight: 400;">THE FOREGOING LIMITATIONS SHALL APPLY ONLY TO THE EXTENT PERMISSIBLE UNDER APPLICABLE LAW (SOME JURISDICTIONS DO NOT PERMIT DISCLAIMERS OF IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO THESE TERMS MAY NOT APPLY TO YOU).</span></p><h2 id="21"><b>21. Indemnity</b></h2><p><span style="font-weight: 400;">To the fullest extent permitted under applicable law, you agree to defend, indemnify, and hold harmless the Quibi Parties (as defined above) and their respective successors and assigns, from and against all claims, liabilities, damages, judgments, awards, losses, costs, expenses and fees (including attorneys&rsquo; fees) arising out of or relating to (a) your use of, or activities in connection with the Services (including all Feedback); (b) any violation or alleged violation of these Terms by you, and (c) your fraud, intentional misconduct, negligence, or other tortious or criminal acts or omissions. Quibi reserves the right to employ separate counsel and assume the exclusive defense and control of any matter otherwise subject to indemnification by you. In such event, you shall provide Quibi with such information and assistance as Quibi reasonably requests.</span></p><h2 id="22"><b>22. Termination</b></h2><p><span style="font-weight: 400;">Quibi may terminate or suspend your use of the Services at any time and without prior notice, for any or no reason, including if Quibi believes that you have violated or acted inconsistently with the letter or spirit of these Terms. Upon any such termination or suspension, your right to use the Services will immediately cease, and Quibi may, without liability to you or any third party to the fullest extent permitted by applicable law, immediately deactivate or delete your account, and all associated data and materials, without any obligation to provide any further access to such data or materials. Quibi reserves the right to pursue all rights and remedies available at law or equity. These terms shall survive the termination of your account, deletion of data, and opt out by the user.</span></p><h2 id="23"><b>23. Governing Law</b></h2><p><span style="font-weight: 400;">These Terms are governed by the laws of the United States (including federal arbitration law) and the State of California, U.S.A., without regard to its principles of conflicts of law, and regardless of your location. </span></p><h2 id="24"><b>24. Miscellaneous</b></h2><blockquote><p><b>a. <span style="text-decoration: underline;">Quibi&rsquo;s Relationship with You</span><span style="font-weight: 400;">. These Terms do not, and shall not be construed to, create any partnership, joint venture, employer-employee, agency or franchisor-franchisee relationship between you and Quibi.</span></b></p><p><b>b. <span style="text-decoration: underline;">No waiver</span><span style="font-weight: 400;">. Quibi&rsquo;s failure to enforce any provisions of these Terms or respond to a violation of these by any person does not waive Quibi&rsquo;s right to subsequently enforce any terms or conditions of the Terms or respond to any such violations.</span></b></p><p><b>c. <span style="text-decoration: underline;">Severability</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> If any provision of these terms is found invalid by a court of competent jurisdiction, you agree that such provision shall be deemed severable from these Terms, that the court should try to give effect to the parties&rsquo; intentions as reflected in the provision, and that all other provisions of the Terms will remain in full effect.</span></b></p><p><b>d. <span style="text-decoration: underline;">Assignment, Transfer, and Sublicensing.</span> <span style="font-weight: 400;">You may not assign, transfer or sublicense any or all of your rights or obligations under these Terms without our express prior written consent. We may assign, transfer or sublicense any or all of our rights or obligations under these Terms without restriction. </span></b></p><p><b>e. <span style="text-decoration: underline;">Headings</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> Any heading, caption or section title contained herein is for convenience only, and in no way defines or explains or affects the interpretation of any section or provision or the rights of any party. </span></b></p><p><b>f. <span style="text-decoration: underline;">Interpretation</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> All terms defined in the singular shall have the same meanings when used in the plural, where appropriate and unless otherwise specified. Any use of the term &ldquo;including&rdquo; or variations thereof in these Terms shall be construed as if followed by the phrase &ldquo;without limitation.&rdquo; </span></b></p><p><b>g. <span style="text-decoration: underline;">Force Majeure</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> Quibi will not be responsible for any failure to fulfill any obligation due to any cause beyond its reasonable control.</span></b></p><p><b>h. <span style="text-decoration: underline;">Entire agreement</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> These Terms (including any document incorporated by reference into them) are the whole agreement between Quibi and you concerning the Services.</span></b></p><p><b>i. <span style="text-decoration: underline;">Notices</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> Notices to you (including notices of changes to these Terms) may be made via posting to the Services or by e-mail (including in each case via links), or by regular mail. </span></b></p><p><b>j. <span style="text-decoration: underline;">Admissibility.</span><span style="font-weight: 400;"> Without limitation, a printed version of these Terms and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to these Terms to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.</span></b></p><p><b>k. <span style="text-decoration: underline;">Export Control</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> You hereby represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &ldquo;terrorist supporting&rdquo; country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.</span></b></p><p><b>l. <span style="text-decoration: underline;">Language</span><span style="font-weight: 400;"><span style="text-decoration: underline;">.</span> The parties have requested and agreed that this contract and all related documents shall be drafted in English only.</span></b></p></blockquote><h2><b>Apple-Specific Terms</b></h2><p><span style="font-weight: 400;">In addition to your agreement with the foregoing terms and conditions, and notwithstanding anything to the contrary herein, the following provisions apply with respect to your use of any version of the Apps compatible with the iOS operating system of Apple Inc. (&ldquo;</span><b>Apple</b><span style="font-weight: 400;">&rdquo;). Apple is not a party to these Terms and does not own and is not responsible for the App. Apple is not providing any warranty for the App except, if applicable, to refund the purchase price for it. Apple is not responsible for maintenance or other support services for the App and shall not be responsible for any other claims, losses, liabilities, damages, costs or expenses with respect to the App, including any third-party product liability claims, claims that the App fails to conform to any applicable legal or regulatory requirement, claims arising under consumer protection or similar legislation, and claims with respect to intellectual property infringement. Any inquiries or complaints relating to the use of the App, including those pertaining to intellectual property rights, must be directed to Company in accordance with the &ldquo;</span><i><span style="font-weight: 400;">Information or Complaints</span></i><span style="font-weight: 400;">&rdquo; section above. The license you have been granted herein to our iOS-compatible App is limited to a non-transferable license to use the App on an Apple-branded product that runs Apple&rsquo;s iOS operating system and is owned or controlled by you, or as otherwise permitted by the Usage Rules set forth in Apple&rsquo;s App Store Terms of Service, except that the App may also be accessed and used by other accounts associated with you via Apple&rsquo;s Family Sharing or volume purchasing programs. In addition, you must comply with the terms of any third-party agreement applicable to you when using the App, such as your wireless data service agreement. Apple and Apple&rsquo;s subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance of the terms and conditions of these Terms, will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof; notwithstanding the foregoing, Company&rsquo;s right to enter into, rescind or terminate any variation, waiver or settlement under these Terms are not subject to the consent of any third party.</span></p><p><span style="font-weight: 400;">&copy; 2020 Quibi Holdings, LLC unless otherwise noted. All rights reserved.</span></p><p><strong>Quibi and the Q Logo are trademarks of Quibi Holdings, LLC.&nbsp; All other product names, company names, marks, logos, and symbols are trademarks of their respective owners.</strong></p>'
                                                },
                                                allNewsItems: [{
                                                    id: "3591386",
                                                    publicationHeadline: "What Should You Watch on Quibi When It Launches in April?",
                                                    publication: "Vanity Fair",
                                                    pullQuote: "Quibi, the ambitious short-form content platform designed specifically for smartphones, is set to launch in one month, on April 6. ",
                                                    publicationDate: "2020-03-05",
                                                    featured: !0,
                                                    articleUrl: "https://www.vanityfair.com/hollywood/2020/03/quibi-shows-list",
                                                    openGraphImage: "https://media.vanityfair.com/photos/5e62b20024008c0008036c5e/16:9/w_1280,c_limit/105_Survive_106_00608RC.jpg"
                                                }, {
                                                    id: "3379732",
                                                    publicationHeadline: "See J. Lo, Chrissy Teigen, Liam Hemsworth in first look photos from their Quibi shows",
                                                    publication: "Entertainment Weekly",
                                                    pullQuote: "See which shows will be debuting with Quibi’s April 6 launch.",
                                                    publicationDate: "2020-03-02",
                                                    featured: !1,
                                                    articleUrl: "https://ew.com/tv/quibi-first-look-photos-jennifer-lopez-chrissy-teigen-liam-hemsworth/",
                                                    openGraphImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F02%2FQuibi-2000.jpg"
                                                }, {
                                                    id: "3073787",
                                                    publicationHeadline: "Kaitlin Olson Says Her Upcoming Quibi Series Flipped 'Was Inspired' by Chip and Joanna Gaines ",
                                                    publication: "People",
                                                    pullQuote: "",
                                                    publicationDate: "2020-01-24",
                                                    featured: !1,
                                                    articleUrl: "https://people.com/tv/kaitlin-olson-says-upcoming-quibi-show-flipped-inspired-chip-joanna-gaines/",
                                                    openGraphImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2020%2F01%2Fquibi.jpg%3Fcrop%3D0px%2C0px%2C1500px%2C787.5px%26resize%3D1200%2C630"
                                                }, {
                                                    id: "3073683",
                                                    publicationHeadline: "Demi Lovato’s New Talk Show Could Be the Thing That Sways You to Get Quibi",
                                                    publication: "Vulture",
                                                    pullQuote: "",
                                                    publicationDate: "2020-02-06",
                                                    featured: !1,
                                                    articleUrl: "https://www.vulture.com/2020/02/demi-lovato-quibi-show.html",
                                                    openGraphImage: "https://pixel.nymag.com/imgs/daily/vulture/2020/02/06/06-demi-lovato.w1200.h630.jpg"
                                                }, {
                                                    id: "2075059",
                                                    publicationHeadline: "Watch the Quibi CES Keynote",
                                                    publication: "CES",
                                                    pullQuote: "Quibi CEO Meg Whitman and Founder Jeffrey Katzenberg gave a first look at the future of mobile-first entertainment at CES. Quibi debuted its Turnstyle technology, an engineering breakthrough in video streaming and user experience.",
                                                    publicationDate: "2020-01-08",
                                                    featured: !1,
                                                    articleUrl: "https://www.youtube.com/watch?v=LXOG9yNRjxk",
                                                    openGraphImage: "/static/content/1580837785-keynotethumbnailplayhead__jpg.jpg"
                                                }, {
                                                    id: "1863383",
                                                    publicationHeadline: "Short clips, big risk: This mysterious startup wants to turn streaming on its head",
                                                    publication: "CNN",
                                                    pullQuote: "Katzenberg and Whitman's pitch for Quibi, which is set to launch in April 2020 for $4.99 a month with ads and $7.99 a month without, is simple yet distinctive. The service offers videos and series that are cut into segments shorter than 10 minutes. The content ranges from scripted, fictional series to news and sports highlights. And all of it can be viewed only on mobile devices",
                                                    publicationDate: "2019-10-11",
                                                    featured: !1,
                                                    articleUrl: "https://www.cnn.com/2019/10/03/business/quibi-whitman-katzenberg-risk-takers/index.html",
                                                    openGraphImage: "https://cdn.cnn.com/cnnnext/dam/assets/191001150111-01-risk-takers-series---meg-whitman-and-jeffrey-katzenberg---quibi-super-tease.jpg"
                                                }, {
                                                    id: "1949679",
                                                    publicationHeadline: "Streamer Quibi Sells $150 Million in Ads, Avoids Product Placement",
                                                    publication: "The Wall Street Journal",
                                                    pullQuote: "Quibi Chief Executive Meg Whitman said that the short-form streaming-video service’s $150 million in ad sales will limit its risks for the first year after its launch, and that the company will encourage content creators to use advertisers’ products in programming.",
                                                    publicationDate: "2019-10-22",
                                                    featured: !1,
                                                    articleUrl: "https://www.wsj.com/articles/streamer-quibi-sells-150-million-in-ads-avoids-product-placement-11571770554",
                                                    openGraphImage: "https://images.wsj.net/im-119480/social"
                                                }, {
                                                    id: "1949699",
                                                    publicationHeadline: "Quibi’s Jeffrey Katzenberg, Meg Whitman to Deliver CES 2020 Keynote",
                                                    publication: "Variety",
                                                    pullQuote: "",
                                                    publicationDate: "2019-10-03",
                                                    featured: !1,
                                                    articleUrl: "https://variety.com/2019/digital/news/ces-quibi-jeffrey-katzenberg-meg-whitman-1203357736/",
                                                    openGraphImage: "https://pmcvariety.files.wordpress.com/2019/07/meg-whitman-and-jeffrey-katzenberg-quibi.jpg?w=700&h=393&crop=1"
                                                }, {
                                                    id: "1963031",
                                                    publicationHeadline: "Quibi is a built-for-millennials streaming service. But will they pay $5 a month?",
                                                    publication: "Los Angeles Times",
                                                    pullQuote: "",
                                                    publicationDate: "2019-08-01",
                                                    featured: !1,
                                                    articleUrl: "https://www.latimes.com/entertainment-arts/story/2019-07-31/can-quibi-reinvent-mobile-storytelling",
                                                    openGraphImage: "https://ca-times.brightspotcdn.com/dims4/default/14bf81f/2147483647/strip/true/crop/4200x2205+0+244/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F78%2Fe2%2F22226c874c26a7574adb99112220%2F460261-et-0723-quibi-tv-katzenberg-whitman-cmh-01-jpg.jpg"
                                                }, {
                                                    id: "1796021",
                                                    publicationHeadline: "Katzenberg and Whitman: Hollywood’s New Odd Couple.",
                                                    publication: "FORTUNE ",
                                                    pullQuote: "The movie mogul (Disney, DreamWorks Animation) and tech executive (eBay, Hewlett Packard) are aiming for short-form glory with the well-funded Quibi.",
                                                    publicationDate: "2019-01-23",
                                                    featured: !1,
                                                    articleUrl: "https://fortune.com/longform/katzenberg-whitman-hollywood-mobile-streaming-quibi/",
                                                    openGraphImage: "https://content.fortune.com/wp-content/uploads/2019/01/qui02.katzenberg-and-whitman-couch.jpg?resize=1200,600"
                                                }, {
                                                    id: "2044085",
                                                    publicationHeadline: "Streaming Service Quibi Agrees to Partner with T-Mobile",
                                                    publication: "Forbes",
                                                    pullQuote: "",
                                                    publicationDate: "2019-10-22",
                                                    featured: !1,
                                                    articleUrl: "https://www.forbes.com/sites/annabellewoodward1/2019/10/22/1-billion-hollywood-backed-streaming-service-quibi-to-partner-with-t-mobile/#5be1bb1b3f96",
                                                    openGraphImage: "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F538437348%2F960x0.jpg"
                                                }, {
                                                    id: "1963052",
                                                    publicationHeadline: "What Is Jeffrey Katzenberg’s Quibi All About, and Why Should You Care?",
                                                    publication: "Vanity Fair",
                                                    pullQuote: "",
                                                    publicationDate: "2019-06-14",
                                                    featured: !1,
                                                    articleUrl: "https://www.vanityfair.com/hollywood/2019/06/quibi-jeffrey-katzenberg-streaming-platform-interview",
                                                    openGraphImage: "https://media.vanityfair.com/photos/5d03acff76711f312e7fe6b3/16:9/w_1280,c_limit/Jeffrey-Katzenberg%25E2%2580%2599s-Quibi.jpg"
                                                }, {
                                                    id: "1949689",
                                                    publicationHeadline: "Quibi Founders Look to Upend Mobile Streaming Experience",
                                                    publication: "Bloomberg",
                                                    pullQuote: "",
                                                    publicationDate: "2019-01-16",
                                                    featured: !1,
                                                    articleUrl: "https://www.bloomberg.com/news/videos/2019-01-16/quibi-founders-look-to-upend-mobile-streaming-experience-video",
                                                    openGraphImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iw3wz4sp2_Fo/v5/-1x-1.jpg"
                                                }, {
                                                    id: "2015588",
                                                    publicationHeadline: "Meg Whitman: What I've Learned From Quibi's Millennial and Gen Z Staff",
                                                    publication: "The Hollywood Reporter",
                                                    pullQuote: "",
                                                    publicationDate: "2019-11-07",
                                                    featured: !1,
                                                    articleUrl: "https://www.hollywoodreporter.com/news/meg-whitman-what-ive-learned-quibis-millennial-gen-z-staff-1252378",
                                                    openGraphImage: "/static/img/news/meg-whtiman_cropped.jpg"
                                                }, {
                                                    id: "1963038",
                                                    publicationHeadline: "Video Platform Quibi Will Launch in April With 6 Brand Partners Including P&G, Walmart and PepsiCo",
                                                    publication: "Adweek",
                                                    pullQuote: "",
                                                    publicationDate: "2019-06-19",
                                                    featured: !1,
                                                    articleUrl: "https://www.adweek.com/tv-video/video-platform-quibi-will-launch-in-april-with-6-brand-partners-including-pg-walmart-and-pepsico/",
                                                    openGraphImage: "https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/06/quibi-cannes-content-2019-600x315.jpg"
                                                }],
                                                allInstagramItems: [{
                                                    id: "1857806",
                                                    postUrl: "https://www.instagram.com/p/B538MhXJ5jX/",
                                                    media: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_w-420.png 105w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_w-420.png 210w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_w-420.png 315w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-1_fit-max_w-420.png 420w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_w-420.png 630w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-2_fit-max_w-420.png 840w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-3_fit-max_w-420.png 1260w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-4_fit-max_w-420.png 1680w",
                                                            webpSrcSet: "/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-420.webp 105w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-420.webp 210w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-420.webp 315w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-420.webp 420w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-420.webp 630w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-420.webp 840w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-420.webp 1260w,\n/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-420.webp 1680w",
                                                            sizes: "(max-width: 420px) 100vw, 420px",
                                                            src: "/static/content/1576717857-screen-shot-2019-12-18-at-5-10-46-pm__png__ar-1_1_auto-format_fit-max_w-420.png",
                                                            width: 420,
                                                            height: 420,
                                                            aspectRatio: .9983221476510066,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7f51ff",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhYTDxMVDRAQFQ0MDQ0NDhYODQ0NFxYZGCIVIhUmKysjGh0oHSEiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDUmIiUvLy8vLy8vLy8vLy8vNS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAFwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAEAAMGAf/EABwQAAIDAAMBAAAAAAAAAAAAAAABAgQSAxEiBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAwb/xAAaEQADAAMBAAAAAAAAAAAAAAAAAQIDESES/9oADAMBAAIRAxEAPwAyruZoqEkhdfPY7xg295nL0XqunOc9dxZ6NuZ0RRZWx7CK2+M1X0+4kRWsctg0EsW3JkRC8ID/2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    id: "1857807",
                                                    postUrl: "https://www.instagram.com/p/B538KvPpzn0/",
                                                    media: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_w-420.png 105w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_w-420.png 210w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_w-420.png 315w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-1_fit-max_w-420.png 420w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_w-420.png 630w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-2_fit-max_w-420.png 840w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-3_fit-max_w-420.png 1260w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-4_fit-max_w-420.png 1680w",
                                                            webpSrcSet: "/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-420.webp 105w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-420.webp 210w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-420.webp 315w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-420.webp 420w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-420.webp 630w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-420.webp 840w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-420.webp 1260w,\n/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-420.webp 1680w",
                                                            sizes: "(max-width: 420px) 100vw, 420px",
                                                            src: "/static/content/1576717814-screen-shot-2019-12-18-at-5-10-05-pm__png__ar-1_1_auto-format_fit-max_w-420.png",
                                                            width: 420,
                                                            height: 421,
                                                            aspectRatio: .9966386554621849,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#8253ff",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoSDREPCBAIDw0NBwgHDhEJDggYFx8ZGBYVIiEaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8dHR4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAFwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABAIFAf/EABsQAAICAwEAAAAAAAAAAAAAAAABERICAwQh/8QAGAEAAgMAAAAAAAAAAAAAAAAAAQIAAwb/xAAYEQEBAQEBAAAAAAAAAAAAAAABABECIf/aAAwDAQACEQMRAD8AneNj1aXA1NSVeVN311jlevtztyhg10tWA20l6Gl0SgAoLGn3ZywALS//2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    id: "1863127",
                                                    postUrl: "https://www.instagram.com/p/B538I6BJWRH/",
                                                    media: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_w-420.png 105w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_w-420.png 210w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_w-420.png 315w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-1_fit-max_w-420.png 420w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_w-420.png 630w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-2_fit-max_w-420.png 840w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-3_fit-max_w-420.png 1260w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-4_fit-max_w-420.png 1680w",
                                                            webpSrcSet: "/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-420.webp 105w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-420.webp 210w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-420.webp 315w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-420.webp 420w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-420.webp 630w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-420.webp 840w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-420.webp 1260w,\n/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-420.webp 1680w",
                                                            sizes: "(max-width: 420px) 100vw, 420px",
                                                            src: "/static/content/1576717761-screen-shot-2019-12-18-at-5-09-11-pm__png__ar-1_1_auto-format_fit-max_w-420.png",
                                                            width: 420,
                                                            height: 421,
                                                            aspectRatio: .9966499162479061,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#8253ff",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhUQCAgLDw0NDhgNDQ0RGh0NFg0NFx4ZGBYTFhUmIysjHR0oHRYWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8dICgvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAFwMBIgACEQEDEQH/xAAYAAEBAAMAAAAAAAAAAAAAAAAEAAECBv/EAB8QAAECBwEBAAAAAAAAAAAAAAABEgIDBBEUMUEhBf/EABcBAQEBAQAAAAAAAAAAAAAAAAMABgL/xAAaEQACAwEBAAAAAAAAAAAAAAAAAQIDESES/9oADAMBAAIRAxEAPwA+KsRulBEiaHym3F2gZw20r2ngzl05ufTLCpkfVtcQitZaFzW9Nk+n5syQrqi2dYgc+scuyIi8IsP/2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    id: "1863130",
                                                    postUrl: "https://www.instagram.com/p/B6HUpaOnz6k/",
                                                    media: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_w-420.png 105w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_w-420.png 210w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_w-420.png 315w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-1_fit-max_w-420.png 420w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_w-420.png 630w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-2_fit-max_w-420.png 840w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-3_fit-max_w-420.png 1260w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-4_fit-max_w-420.png 1680w",
                                                            webpSrcSet: "/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-420.webp 105w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-420.webp 210w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-420.webp 315w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-420.webp 420w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-420.webp 630w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-420.webp 840w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-420.webp 1260w,\n/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-420.webp 1680w",
                                                            sizes: "(max-width: 420px) 100vw, 420px",
                                                            src: "/static/content/1576717524-screen-shot-2019-12-18-at-5-04-54-pm__png__ar-1_1_auto-format_fit-max_w-420.png",
                                                            width: 420,
                                                            height: 420,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7a50fc",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICBAREhYVFRgcEQ0WGR0NEA0YFxogGBYfFhUdHysjHR0oKRUWJDUlKC0vMjIyHSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oIig7OzUvNS81Ly8vLy87OzsvLzUvLzU1Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEBAAMAAAAAAAAAAAAAAAAABQIDBP/EAB0QAAIBBAMAAAAAAAAAAAAAAAABBAIDBRIREyH/xAAZAQACAwEAAAAAAAAAAAAAAAADBQIEBgD/xAAcEQACAgIDAAAAAAAAAAAAAAABAgADBBEFEyH/2gAMAwEAAhEDEQA/ANcK29i3bXFskxKkmUu1aGnzritgWTZjuScutkwY5C4nyBtj2EVicHOpxRpfpSpkt0AFHkK17BDugBkjKynbpbAA2xa1NQhqq1K+z//Z"
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    id: "1863129",
                                                    postUrl: "https://www.instagram.com/p/B6HUUXTnp9R/",
                                                    media: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_w-420.png 105w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_w-420.png 210w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_w-420.png 315w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-1_fit-max_w-420.png 420w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_w-420.png 630w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-2_fit-max_w-420.png 840w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-3_fit-max_w-420.png 1260w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-4_fit-max_w-420.png 1680w",
                                                            webpSrcSet: "/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-420.webp 105w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-420.webp 210w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-420.webp 315w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-420.webp 420w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-420.webp 630w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-420.webp 840w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-420.webp 1260w,\n/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-420.webp 1680w",
                                                            sizes: "(max-width: 420px) 100vw, 420px",
                                                            src: "/static/content/1576717591-screen-shot-2019-12-18-at-5-06-01-pm__png__ar-1_1_auto-format_fit-max_w-420.png",
                                                            width: 420,
                                                            height: 420,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7d51fd",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBw8HBhMPExILCg4OFhgMDQ0VDRENDQcOFxYcGBYVFiEaHysjGikoKRYWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDAoIig7OzUvLy81Ly8vLzU7NS81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEAAwEAAAAAAAAAAAAAAAAAAgMEAf/EABwQAAICAwEBAAAAAAAAAAAAAAACBBIBAxEhBf/EABgBAAIDAAAAAAAAAAAAAAAAAAIDAAQG/8QAGxEBAAMBAAMAAAAAAAAAAAAAAQACAxEEEhP/2gAMAwEAAhEDEQA/AKdC2IyFpgnBbw59FuIa/wAndpqVh6HbTImbZBVDfrAu/RkZoj7aYK5u+6gA7Z1bix6HZkjNXIAH+pBQ7P/Z"
                                                        },
                                                        alt: null
                                                    }
                                                }, {
                                                    id: "1863128",
                                                    postUrl: "https://www.instagram.com/p/B6HT8uAHNPs/",
                                                    media: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_w-420.png 105w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_w-420.png 210w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_w-420.png 315w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-1_fit-max_w-420.png 420w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_w-420.png 630w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-2_fit-max_w-420.png 840w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-3_fit-max_w-420.png 1260w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-4_fit-max_w-420.png 1680w",
                                                            webpSrcSet: "/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-420.webp 105w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-420.webp 210w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-420.webp 315w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-420.webp 420w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-420.webp 630w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-420.webp 840w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-420.webp 1260w,\n/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-420.webp 1680w",
                                                            sizes: "(max-width: 420px) 100vw, 420px",
                                                            src: "/static/content/1576717697-screen-shot-2019-12-18-at-5-07-59-pm__png__ar-1_1_auto-format_fit-max_w-420.png",
                                                            width: 420,
                                                            height: 420,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7a50fc",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHEAoPDg8NDQ8SDQ0NDQkNDRENFg0NFxMaGBYVFiEmHysjGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oHSg1NS88NS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EABsQAQACAgMAAAAAAAAAAAAAAAACAwERBBIh/8QAGAEBAAMBAAAAAAAAAAAAAAAAAgEDBgD/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhAxESIkH/2gAMAwEAAhEDEQA/AOez0qgrKW2tWcNvkzcKLd9tGXIxoRypBRy0Jqyk8kLdAUoJysHpS6fZAJcUjmz/2Q=="
                                                        },
                                                        alt: null
                                                    }
                                                }],
                                                allTwitterItems: [{
                                                    id: "1861307",
                                                    profileName: "Quibi",
                                                    postUrl: "https://twitter.com/Quibi/status/1206590303228059650",
                                                    tweetDate: "2019-12-16",
                                                    tweet: "Dwayne Johnson isn’t the only rock coming to Quibi.<br>#LegendsOfTheHiddenTemple Quibi.<br>2020.\n<br/>",
                                                    profilePicture: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_w-52.jpg 13w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_w-52.jpg 26w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_w-52.jpg 39w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_w-52.jpg 52w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_w-52.jpg 78w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_w-52.jpg 104w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_w-52.jpg 156w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_w-52.jpg 208w",
                                                            webpSrcSet: "/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-52.webp 13w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-52.webp 26w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-52.webp 39w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-52.webp 52w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-52.webp 78w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-52.webp 104w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-52.webp 156w,\n/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-52.webp 208w",
                                                            sizes: "(max-width: 52px) 100vw, 52px",
                                                            src: "/static/content/1576719093-qolcqc61400x400__jpg__ar-1_1_auto-format_fit-max_w-52.jpg",
                                                            width: 52,
                                                            height: 52,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7622fe",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFQoXDhgQFRkVDh0VDRAXFx8ZGBkfIhUdHysjGh0oKRYiMDUlKC0vMjIyGSI4PTcwPC0xMi8BCgsLDg0OHBAQHDsoIig7Ozs7NTs7NTsvLzU7LzUvLzUvLy81Ly81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABQcCAf/EABwQAAICAwEBAAAAAAAAAAAAAAEDAAIEERIFUf/EABgBAQADAQAAAAAAAAAAAAAAAAEDBAUC/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEEEiH/2gAMAwEAAhEDEQA/ALGxgXQ2tFw9VQbz0Jv2LXrjHn5J8zJyx6GhvW5o8Tiq6LbZ0lpTF5FGV2DOxB5bmFQ63CUraussDB9kpDlGpiM+Ksu65EIRrslHxMBijCqqoAEIQkM5NsGf/9k="
                                                        }
                                                    }
                                                }, {
                                                    id: "1857809",
                                                    profileName: "Quibi",
                                                    postUrl: "https://twitter.com/Quibi/status/1207032536632717312",
                                                    tweetDate: "2019-12-17",
                                                    tweet: "Bathroom break.<br>This time next year.<br>What Quibi show are you watching?\n<br/>RT for #LegendsOfTheHiddenTemple<br>&lt;3 for #Reno911\n<br/>",
                                                    profilePicture: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_w-52.jpg 13w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_w-52.jpg 26w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_w-52.jpg 39w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_w-52.jpg 52w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_w-52.jpg 78w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_w-52.jpg 104w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_w-52.jpg 156w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_w-52.jpg 208w",
                                                            webpSrcSet: "/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-52.webp 13w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-52.webp 26w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-52.webp 39w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-52.webp 52w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-52.webp 78w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-52.webp 104w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-52.webp 156w,\n/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-52.webp 208w",
                                                            sizes: "(max-width: 52px) 100vw, 52px",
                                                            src: "/static/content/1576719899-qolcqc61400x400__jpg__ar-1_1_auto-format_fit-max_w-52.jpg",
                                                            width: 52,
                                                            height: 52,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7622fe",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFQoXDhgQFRkVDh0VDRAXFx8ZGBkfIhUdHysjGh0oKRYiMDUlKC0vMjIyGSI4PTcwPC0xMi8BCgsLDg0OHBAQHDsoIig7Ozs7NTs7NTsvLzU7LzUvLzUvLy81Ly81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABQcCAf/EABwQAAICAwEBAAAAAAAAAAAAAAEDAAIEERIFUf/EABgBAQADAQAAAAAAAAAAAAAAAAEDBAUC/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEEEiH/2gAMAwEAAhEDEQA/ALGxgXQ2tFw9VQbz0Jv2LXrjHn5J8zJyx6GhvW5o8Tiq6LbZ0lpTF5FGV2DOxB5bmFQ63CUraussDB9kpDlGpiM+Ksu65EIRrslHxMBijCqqoAEIQkM5NsGf/9k="
                                                        }
                                                    }
                                                }, {
                                                    id: "1857810",
                                                    profileName: "Quibi",
                                                    postUrl: "https://twitter.com/Quibi/status/1206641886716293120",
                                                    tweetDate: "2019-12-16",
                                                    tweet: "Punk’d.<br>Singled Out.<br>And now #LegendsOfTheHiddenTemple.\n<br/>Your childhood, but make it Quibi.\n<br/>",
                                                    profilePicture: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_w-52.jpg 13w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_w-52.jpg 26w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_w-52.jpg 39w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_w-52.jpg 52w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_w-52.jpg 78w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_w-52.jpg 104w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_w-52.jpg 156w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_w-52.jpg 208w",
                                                            webpSrcSet: "/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-52.webp 13w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-52.webp 26w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-52.webp 39w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-52.webp 52w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-52.webp 78w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-52.webp 104w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-52.webp 156w,\n/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-52.webp 208w",
                                                            sizes: "(max-width: 52px) 100vw, 52px",
                                                            src: "/static/content/1576719971-qolcqc61400x400__jpg__ar-1_1_auto-format_fit-max_w-52.jpg",
                                                            width: 52,
                                                            height: 52,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7622fe",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFQoXDhgQFRkVDh0VDRAXFx8ZGBkfIhUdHysjGh0oKRYiMDUlKC0vMjIyGSI4PTcwPC0xMi8BCgsLDg0OHBAQHDsoIig7Ozs7NTs7NTsvLzU7LzUvLzUvLy81Ly81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABQcCAf/EABwQAAICAwEBAAAAAAAAAAAAAAEDAAIEERIFUf/EABgBAQADAQAAAAAAAAAAAAAAAAEDBAUC/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEEEiH/2gAMAwEAAhEDEQA/ALGxgXQ2tFw9VQbz0Jv2LXrjHn5J8zJyx6GhvW5o8Tiq6LbZ0lpTF5FGV2DOxB5bmFQ63CUraussDB9kpDlGpiM+Ksu65EIRrslHxMBijCqqoAEIQkM5NsGf/9k="
                                                        }
                                                    }
                                                }, {
                                                    id: "1857960",
                                                    profileName: "Quibi",
                                                    postUrl: "https://twitter.com/Quibi/status/1206384949605142529",
                                                    tweetDate: "2019-12-15",
                                                    tweet: "One of LA’s best chefs thinks he knew a barber named Quibi once.\n<br/>",
                                                    profilePicture: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_w-52.jpg 13w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_w-52.jpg 26w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_w-52.jpg 39w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_w-52.jpg 52w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_w-52.jpg 78w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_w-52.jpg 104w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_w-52.jpg 156w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_w-52.jpg 208w",
                                                            webpSrcSet: "/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-52.webp 13w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-52.webp 26w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-52.webp 39w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-52.webp 52w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-52.webp 78w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-52.webp 104w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-52.webp 156w,\n/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-52.webp 208w",
                                                            sizes: "(max-width: 52px) 100vw, 52px",
                                                            src: "/static/content/1576720047-qolcqc61400x400__jpg__ar-1_1_auto-format_fit-max_w-52.jpg",
                                                            width: 52,
                                                            height: 52,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7622fe",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFQoXDhgQFRkVDh0VDRAXFx8ZGBkfIhUdHysjGh0oKRYiMDUlKC0vMjIyGSI4PTcwPC0xMi8BCgsLDg0OHBAQHDsoIig7Ozs7NTs7NTsvLzU7LzUvLzUvLy81Ly81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABQcCAf/EABwQAAICAwEBAAAAAAAAAAAAAAEDAAIEERIFUf/EABgBAQADAQAAAAAAAAAAAAAAAAEDBAUC/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEEEiH/2gAMAwEAAhEDEQA/ALGxgXQ2tFw9VQbz0Jv2LXrjHn5J8zJyx6GhvW5o8Tiq6LbZ0lpTF5FGV2DOxB5bmFQ63CUraussDB9kpDlGpiM+Ksu65EIRrslHxMBijCqqoAEIQkM5NsGf/9k="
                                                        }
                                                    }
                                                }, {
                                                    id: "1857961",
                                                    profileName: "Quibi",
                                                    postUrl: "https://twitter.com/Quibi/status/1206382433077100544",
                                                    tweetDate: "2019-12-15",
                                                    tweet: "This gleeful Quibi star thinks a Quibi is that flap on a cereal box top. 🤷\n<br/>",
                                                    profilePicture: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_w-52.jpg 13w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_w-52.jpg 26w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_w-52.jpg 39w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_w-52.jpg 52w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_w-52.jpg 78w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_w-52.jpg 104w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_w-52.jpg 156w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_w-52.jpg 208w",
                                                            webpSrcSet: "/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-52.webp 13w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-52.webp 26w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-52.webp 39w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-52.webp 52w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-52.webp 78w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-52.webp 104w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-52.webp 156w,\n/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-52.webp 208w",
                                                            sizes: "(max-width: 52px) 100vw, 52px",
                                                            src: "/static/content/1576720115-qolcqc61400x400__jpg__ar-1_1_auto-format_fit-max_w-52.jpg",
                                                            width: 52,
                                                            height: 52,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7622fe",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFQoXDhgQFRkVDh0VDRAXFx8ZGBkfIhUdHysjGh0oKRYiMDUlKC0vMjIyGSI4PTcwPC0xMi8BCgsLDg0OHBAQHDsoIig7Ozs7NTs7NTsvLzU7LzUvLzUvLy81Ly81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABQcCAf/EABwQAAICAwEBAAAAAAAAAAAAAAEDAAIEERIFUf/EABgBAQADAQAAAAAAAAAAAAAAAAEDBAUC/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEEEiH/2gAMAwEAAhEDEQA/ALGxgXQ2tFw9VQbz0Jv2LXrjHn5J8zJyx6GhvW5o8Tiq6LbZ0lpTF5FGV2DOxB5bmFQ63CUraussDB9kpDlGpiM+Ksu65EIRrslHxMBijCqqoAEIQkM5NsGf/9k="
                                                        }
                                                    }
                                                }, {
                                                    id: "1861306",
                                                    profileName: "Quibi",
                                                    postUrl: "https://twitter.com/Quibi/status/1206379916549328899",
                                                    tweetDate: "2019-12-15",
                                                    tweet: "Someone on a Quibi show that rhymes with Smisshy’s Shmort thinks Quibi is a snack.\n<br/>",
                                                    profilePicture: {
                                                        responsiveImage: {
                                                            srcSet: "/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_w-52.jpg 13w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_w-52.jpg 26w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_w-52.jpg 39w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_w-52.jpg 52w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_w-52.jpg 78w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_w-52.jpg 104w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_w-52.jpg 156w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_w-52.jpg 208w",
                                                            webpSrcSet: "/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__25_fit-max_fm-webp_w-52.webp 13w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__5_fit-max_fm-webp_w-52.webp 26w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-0__75_fit-max_fm-webp_w-52.webp 39w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1_fit-max_fm-webp_w-52.webp 52w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-1__5_fit-max_fm-webp_w-52.webp 78w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-2_fit-max_fm-webp_w-52.webp 104w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-3_fit-max_fm-webp_w-52.webp 156w,\n/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_dpr-4_fit-max_fm-webp_w-52.webp 208w",
                                                            sizes: "(max-width: 52px) 100vw, 52px",
                                                            src: "/static/content/1576720179-qolcqc61400x400__jpg__ar-1_1_auto-format_fit-max_w-52.jpg",
                                                            width: 52,
                                                            height: 52,
                                                            aspectRatio: 1,
                                                            alt: null,
                                                            title: null,
                                                            bgColor: "#7622fe",
                                                            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFQoXDhgQFRkVDh0VDRAXFx8ZGBkfIhUdHysjGh0oKRYiMDUlKC0vMjIyGSI4PTcwPC0xMi8BCgsLDg0OHBAQHDsoIig7Ozs7NTs7NTsvLzU7LzUvLzUvLy81Ly81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABQcCAf/EABwQAAICAwEBAAAAAAAAAAAAAAEDAAIEERIFUf/EABgBAQADAQAAAAAAAAAAAAAAAAEDBAUC/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEEEiH/2gAMAwEAAhEDEQA/ALGxgXQ2tFw9VQbz0Jv2LXrjHn5J8zJyx6GhvW5o8Tiq6LbZ0lpTF5FGV2DOxB5bmFQ63CUraussDB9kpDlGpiM+Ksu65EIRrslHxMBijCqqoAEIQkM5NsGf/9k="
                                                        }
                                                    }
                                                }],
                                                error: {
                                                    pageNotFoundTitle: "The page you’re looking for can’t be found.",
                                                    pageNotFoundCta: "quibi.com",
                                                    pageNotFoundUrl: "https://quibi.com/"
                                                }
                                            };
                                        case 29:
                                            return s.GA_ID = _, s.TWITTER_PIXEL_ID = d, s.SNAP_PIXEL_ID = h, s.KILL_PAGE_TRANSITIONS = f, s.content = y, t.abrupt("return", {
                                                pageProps: s
                                            });
                                        case 35:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), Object(_.default)(e, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this.props,
                                e = t.pageProps,
                                r = e.TWITTER_PIXEL_ID,
                                o = e.SNAP_PIXEL_ID,
                                a = e.pathname,
                                i = e.query,
                                s = e.content.homepage,
                                c = s.displayNewsBanner,
                                p = s.newsBannerHeading,
                                u = s.newsBannerLink,
                                l = t.setIsTouch,
                                _ = t.setReferrer,
                                f = t.setHideNewsBanner,
                                d = t.setDeviceOS;
                            n("lNt4").attach(document.body), -1 === window.location.hostname.indexOf("brl-") && "localhost" !== window.location.hostname || (window.acceptAnalytics = !0, window.gtag("config", window.GA_ID, {
                                send_page_view: !1
                            }), window.gtag("config", window.GA_ID, {
                                page_path: window.location.pathname
                            })), !1 !== window.acceptAnalytics && (D.a.trackPageView(a), window.twq && (window.twq("init", r), window.twq("track", "PageView")), window.snaptr && (window.snaptr("init", o), window.snaptr("track", "PAGE_VIEW"))), this.onResize(), window.addEventListener("resize", this.onResize), i.id ? this.previousRoute = "/" : this.previousRoute = a, "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
                            var h = S.a.getParser(window.navigator.userAgent).getPlatform().type;
                            l("tablet" === h || "mobile" === h), d(S.a.getParser(window.navigator.userAgent).getOS().name), this.lastPageChange = performance.now() - 500, this.onScrollPage(), window.addEventListener("scroll", this.onScrollPage), document.body.addEventListener("touchstart", this.onTouchStart), document.body.addEventListener("click", this.onInteractionDetected), this.pageTransitionOverlayEl = document.querySelector(".page-transition-overlay"), C.a.events.on("routeChangeStart", this.onPageChangeStart), C.a.events.on("routeChangeComplete", this.onPageChangeComplete), "/news" !== a && "/news/" !== a || this.setState({
                                displayNewsDisclaimer: !0
                            });
                            var A = {
                                id: encodeURI(p),
                                publicationHeadline: p,
                                articleUrl: u
                            };
                            this.setState({
                                featuredNewsBanner: A
                            });
                            var g = JSON.parse(localStorage.getItem("hide-featured:".concat(A.id))) || !1;
                            "/" !== a && "" !== a && (g = !0), c || (g = !0), f(g), g || document.body.classList.add("news-banner-visible"), i.referrer && _(decodeURI(i.referrer)), window.scrollObserver = new IntersectionObserver(this.onComponentVisible, {
                                root: null,
                                rootMargin: "0px",
                                threshold: 0,
                                delay: 100
                            }), this.startObserve(), this.setPageBackgroundColor(), document.documentElement.classList.remove("loading"), document.body.classList.add("page-loaded")
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t) {
                            var e = this.props.hideNewsBanner;
                            e !== t.hideNewsBanner && (e ? document.body.classList.remove("news-banner-visible") : document.body.classList.add("news-banner-visible"))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e, n = this.state,
                                r = n.displayNewsDisclaimer,
                                o = n.featuredNewsBanner,
                                a = this.props,
                                i = a.Component,
                                s = a.pageProps,
                                c = a.isHomePageVideoVisible,
                                p = a.hideNewsBanner,
                                u = a.isMobile,
                                l = a.deviceOS,
                                _ = a.pageProps,
                                f = _.query,
                                h = _.KILL_PAGE_TRANSITIONS,
                                g = _.content,
                                b = g.homepageHeroModule,
                                y = g.homepage,
                                v = g.allShows,
                                x = s.content.global,
                                j = x.siteTitle,
                                S = x.siteDescription,
                                L = x.contactAddresses,
                                k = x.socialChannels,
                                C = x.navigationItems,
                                B = x.footerDisclamer,
                                T = x.moreLinks,
                                P = x.appstoreUrl,
                                Q = x.googlePlayUrl,
                                M = x.downloadAppCta,
                                N = x.appModuleHeader,
                                q = x.appModuleSuheader,
                                H = "show-details" === s.pathname.split("/")[1] || "shows" === s.pathname.split("/")[1],
                                z = "" === s.pathname || "/" === s.pathname,
                                F = "/confirmation" === s.pathname || "/confirmation/" === s.pathname,
                                G = I()(ft.a.pageHeader, (t = {}, Object(d.a)(t, ft.a.show, H), Object(d.a)(t, ft.a.homepage, z), Object(d.a)(t, ft.a.confirmation, F), t)),
                                Y = I()(ft.a.pageContainerWrapper, {
                                    "kill-page-transitions": "1" === h
                                }),
                                W = C.concat(T).filter((function(t) {
                                    return t.slug === s.pathname || "".concat(t.slug, "/") === s.pathname
                                }));
                            W && W.length > 0 && (e = W[0].title), "" !== s.pathname && "/" !== s.pathname && "/confirmation" !== s.pathname && "/confirmation/" !== s.pathname || (e = b.title.replace(/<[^>]*>?/gm, "").replace(".", ". "));
                            var V, Z = s.pathname.split("/"),
                                J = s.pathname,
                                K = e ? "".concat(j, " - ").concat(e) : j,
                                X = S,
                                tt = !1;
                            f.id && (J = "/shows", tt = !0, V = v.filter((function(t) {
                                return t.showsSlug === f.id
                            }))[0]), c || "" !== s.pathname && s.pathname;
                            var et = "/" === s.pathname || "" === s.pathname || "shows" === Z[1] || "show-details" === Z[1] || "/confirmation" === s.pathname || "/confirmation/" === s.pathname;
                            return A.a.createElement(w.Container, null, A.a.createElement(m.a, null, A.a.createElement("title", null, K), !f.id && A.a.createElement("meta", {
                                property: "og:title",
                                content: K
                            }), A.a.createElement("meta", {
                                name: "description",
                                content: X
                            }), !f.id && A.a.createElement("meta", {
                                property: "og:description",
                                content: X
                            }), A.a.createElement("meta", {
                                property: "og:url",
                                content: "https://quibi.com".concat(J).concat(f.id ? "/".concat(f.id, "/") : "")
                            }), A.a.createElement("meta", {
                                property: "og:site_name",
                                content: K
                            }), !f.id && A.a.createElement("meta", {
                                name: "twitter:title",
                                content: K
                            }), A.a.createElement("meta", {
                                name: "twitter:description",
                                content: X
                            }), A.a.createElement("meta", {
                                name: "twitter:site",
                                content: "@quibi"
                            }), !f.id && A.a.createElement("meta", {
                                property: "og:image",
                                content: "https://quibi.com/static/img/share-image.jpg"
                            }), !f.id && A.a.createElement("meta", {
                                name: "twitter:image",
                                content: "https://quibi.com/static/img/share-image.jpg"
                            }), f.id && A.a.createElement("meta", {
                                name: "twitter:image",
                                content: ""
                            })), A.a.createElement(E.CSSTransition, { in : tt, unmountOnExit: !0, timeout: 700, classNames: "youtube-modal"
                            }, A.a.createElement(U, {
                                siteTitle: j,
                                currentShow: V,
                                previousRoute: this.previousRoute
                            })), A.a.createElement("div", {
                                className: ft.a.stickyWrapper,
                                ref: this.stickyWrapperRef
                            }, A.a.createElement(E.CSSTransition, { in : !p && y.displayNewsBanner, unmountOnExit: !0, timeout: 500, classNames: "news-banner"
                            }, A.a.createElement(nt, {
                                publicationHeadline: o.publicationHeadline,
                                articleUrl: o.articleUrl,
                                id: o.id
                            })), A.a.createElement("header", {
                                className: G,
                                ref: this.headerRef
                            }, A.a.createElement(at, null), u && A.a.createElement("div", {
                                "data-tip": "preorder-tooltip",
                                "data-for": "preorder-tooltip-mobile"
                            }, "Android" !== l && "iOS" !== l && A.a.createElement(O.a, {
                                id: "preorder-tooltip-mobile",
                                effect: "solid",
                                place: "bottom",
                                type: "light",
                                eventOff: "mouseenter",
                                "aria-haspopup": "true",
                                delayShow: 0,
                                delayHide: 300,
                                clickable: !0
                            }, A.a.createElement(it.a, {
                                appInfo: {
                                    downloadAppCta: M,
                                    appstoreUrl: P,
                                    googlePlayUrl: Q,
                                    appModuleHeader: N,
                                    appModuleSuheader: q
                                }
                            })), A.a.createElement(R.a, {
                                primary: et,
                                className: ft.a.preorderButton,
                                ariaLabel: M,
                                href: "iOS" === l ? P : Q,
                                onClick: function() {
                                    window.gtag("event", "Clicked preorder", {
                                        event_category: "Nav"
                                    }), D.a.logEvent("Nav: Clicked preorder")
                                }
                            }, A.a.createElement("span", null, M))), A.a.createElement(lt, {
                                isPreorderButtonPrimary: et,
                                navigationItems: C,
                                contactAddresses: L,
                                socialChannels: k,
                                appModuleHeader: N,
                                appModuleSuheader: q,
                                appstoreUrl: P,
                                googlePlayUrl: Q,
                                downloadAppCta: M
                            }))), A.a.createElement(O.a, {
                                effect: "solid",
                                place: "bottom",
                                "aria-haspopup": "true",
                                delayShow: 0,
                                event: "no-event",
                                offset: {
                                    left: 0
                                },
                                className: ft.a.errorTooltip
                            }), A.a.createElement(E.TransitionGroup, {
                                className: "page-transition-wrapper"
                            }, A.a.createElement(E.CSSTransition, {
                                key: s.pathname,
                                timeout: 1e3,
                                classNames: "route-transition",
                                onExit: this.onPageTransitionOut,
                                onEntering: this.onPageTransitionIn
                            }, A.a.createElement("div", {
                                className: Y
                            }, A.a.createElement(i, s)))), A.a.createElement($, {
                                navigationItems: C,
                                contactAddresses: L,
                                socialChannels: k,
                                moreLinks: T,
                                footerDisclamer: B,
                                displayNewsDisclaimer: r
                            }))
                        }
                    }]), e
                }(b.a);
            Object(d.a)(dt, "propTypes", {
                setIsTouch: x.func,
                isHomePageVideoVisible: x.bool,
                hideNewsBanner: x.bool,
                isMobileNavOpen: x.bool,
                isMobile: x.bool,
                setUserInteractionDetected: x.func,
                setHideNewsBanner: x.func,
                deviceOS: x.string,
                setReferrer: x.func,
                setDeviceOS: x.func
            }), e.default = Object(z.a)(W, (function(t) {
                return {
                    scrollSpeed: t.app.scrollSpeed,
                    isHomePageVideoVisible: t.app.isHomePageVideoVisible,
                    isMobileNavOpen: t.app.isMobileNavOpen,
                    isMobile: t.app.isMobile,
                    hideNewsBanner: t.app.hideNewsBanner,
                    deviceOS: t.app.deviceOS
                }
            }), (function(t) {
                var e = t.app;
                return {
                    setIsTouch: e.setIsTouch,
                    setIsPortraitMode: e.setIsPortraitMode,
                    setIsMobile: e.setIsMobile,
                    setIsTablet: e.setIsTablet,
                    setIsDesktop: e.setIsDesktop,
                    setUserInteractionDetected: e.setUserInteractionDetected,
                    setReferrer: e.setReferrer,
                    setHideNewsBanner: e.setHideNewsBanner,
                    setDeviceOS: e.setDeviceOS
                }
            }))(dt)
        },
        YsiS: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function(t) {
                    var e = n("xtUC").setTimer,
                        r = n("vBUX");
                    return function(t) {
                        var n, i = a,
                            s = a;
                        "undefined" != typeof console && (n = console, i = void 0 !== n.error ? function(t) {
                            n.error(t)
                        } : function(t) {
                            n.log(t)
                        }, s = void 0 !== n.info ? function(t) {
                            n.info(t)
                        } : function(t) {
                            n.log(t)
                        }), t.onPotentiallyUnhandledRejection = function(t) {
                            f(l, t)
                        }, t.onPotentiallyUnhandledRejectionHandled = function(t) {
                            f(_, t)
                        }, t.onFatalRejection = function(t) {
                            f(o, t.value)
                        };
                        var c = [],
                            p = [],
                            u = null;

                        function l(t) {
                            t.handled || (p.push(t), i("Potentially unhandled rejection [" + t.id + "] " + r.formatError(t.value)))
                        }

                        function _(t) {
                            var e = p.indexOf(t);
                            e >= 0 && (p.splice(e, 1), s("Handled previous rejection [" + t.id + "] " + r.formatObject(t.value)))
                        }

                        function f(t, n) {
                            c.push(t, n), null === u && (u = e(d, 0))
                        }

                        function d() {
                            for (u = null; c.length > 0;) c.shift()(c.shift())
                        }
                        return t
                    };

                    function o(t) {
                        throw t
                    }

                    function a() {}
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        Z66Z: function(t, e) {
            t.exports = function() {
                throw new Error("define cannot be used indirect")
            }
        },
        ZvjG: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                o = s(n("pfcB")),
                a = s(n("EN2N")),
                i = s(n("cXzP"));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var c = void 0;
            e.default = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = (0, o.default)();
                if (c || (c = (0, a.default)(s)), e.events) throw new Error("Event handlers cannot be overwritten.");
                if ("string" == typeof t && !document.getElementById(t)) throw new Error('Element "' + t + '" does not exist.');
                e.events = i.default.proxyEvents(s);
                var p = new Promise((function(n) {
                        "object" === (void 0 === t ? "undefined" : r(t)) && t.playVideo instanceof Function ? n(t) : c.then((function(r) {
                            var o = new r.Player(t, e);
                            return s.on("ready", (function() {
                                n(o)
                            })), null
                        }))
                    })),
                    u = i.default.promisifyPlayer(p, n);
                return u.on = s.on, u.off = s.off, u
            }, t.exports = e.default
        },
        bcjR: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function(t) {
                    return n("4RUT")({
                        scheduler: new(n("Pi0g"))(n("xtUC").asap)
                    })
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        btuv: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("h8yL");
            Object.keys(r).forEach((function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return r[t]
                    }
                })
            }))
        },
        c0bG: function(t, e, n) {
            "use strict";
            (function(t) {
                function r(t) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.__BackgroundImpl = e.Background = void 0;
                var o = u(n("mXGw")),
                    a = function(t) {
                        if (t && t.__esModule) return t;
                        if (null === t || "object" !== r(t) && "function" != typeof t) return {
                            default: t
                        };
                        var e = function() {
                            if ("function" != typeof WeakMap) return null;
                            var t = new WeakMap;
                            return function() {
                                return t
                            }, t
                        }();
                        if (e && e.has(t)) return e.get(t);
                        var n = {},
                            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var a in t)
                            if (Object.prototype.hasOwnProperty.call(t, a)) {
                                var i = o ? Object.getOwnPropertyDescriptor(t, a) : null;
                                i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = t[a]
                            }
                        return n.default = t, e && e.set(t, n), n
                    }(n("SXWZ")),
                    i = u(n("t7VS")),
                    s = u(n("+l0x")),
                    c = u(n("UM9n")),
                    p = u(n("zE2g"));

                function u(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function l() {
                    return (l = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }

                function _(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function f(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? _(Object(n), !0).forEach((function(e) {
                            d(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function d(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var h = function(e) {
                    var n = e.measureRef,
                        r = (e.measure, e.contentRect),
                        a = e.imgixParams,
                        u = void 0 === a ? {} : a,
                        _ = (e.onLoad, e.disableLibraryParam),
                        d = e.src,
                        h = e.children,
                        A = e.className,
                        g = void 0 === A ? "" : A,
                        m = u.w,
                        w = u.h,
                        b = null != r.bounds.top,
                        y = e.htmlAttributes || {},
                        v = (2, +(u.dpr || t.devicePixelRatio || 1).toFixed(2)),
                        x = y.ref,
                        E = function(t) {
                            n(t), "function" == typeof x && x(t)
                        },
                        j = function() {
                            if (null != m && null != w) return {
                                width: m,
                                height: w
                            };
                            if (!b) return {
                                width: void 0,
                                height: void 0
                            };
                            var t, e = r.bounds.width / r.bounds.height;
                            if (null == m && null == w) {
                                var n = (t = r.bounds.width, (0, p.default)(t, c.default));
                                return {
                                    width: n,
                                    height: Math.ceil(n / e)
                                }
                            }
                            if (null != m) {
                                var o = Math.ceil(m / e);
                                return {
                                    width: m,
                                    height: o
                                }
                            }
                            return null != w ? {
                                width: Math.ceil(w * e),
                                height: w
                            } : void 0
                        }(),
                        S = j.width,
                        L = j.height,
                        I = null != S && null != L,
                        k = f({}, y);
                    if (!I) return o.default.createElement("div", l({}, k, {
                        className: "react-imgix-bg-loading ".concat(g),
                        ref: E
                    }), h);
                    var C, B, O, T, R, P = (B = (C = function(t, e) {
                            return function(t) {
                                if (Array.isArray(t)) return t
                            }(t) || function(t, e) {
                                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                                    var n = [],
                                        r = !0,
                                        o = !1,
                                        a = void 0;
                                    try {
                                        for (var i, s = t[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
                                    } catch (t) {
                                        o = !0, a = t
                                    } finally {
                                        try {
                                            r || null == s.return || s.return()
                                        } finally {
                                            if (o) throw a
                                        }
                                    }
                                    return n
                                }
                            }(t, e) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }()
                        }((0, s.default)(d), 3))[0], O = C[1], T = C[2], R = f({}, O, {
                            fit: "crop"
                        }, u, {}, _ ? {} : {
                            ixlib: "react-".concat("9.0.1")
                        }, {
                            width: S,
                            height: L,
                            dpr: v
                        }), (0, i.default)(B, R, T)),
                        Q = f({}, y.style, {
                            backgroundImage: "url(".concat(P, ")"),
                            backgroundSize: void 0 !== (y.style || {}).backgroundSize ? y.style.backgroundSize : "cover"
                        });
                    return o.default.createElement("div", l({}, k, {
                        className: g,
                        ref: E,
                        style: Q
                    }), h)
                };
                e.__BackgroundImpl = h;
                var A = (0, a.withContentRect)("bounds")(h);
                e.Background = A
            }).call(this, n("pCvA"))
        },
        cBIk: function(t, e, n) {
            "use strict";
            (function(t) {
                var r = n("UrUy"),
                    o = n.n(r),
                    a = (n("wcNg"), n("R3/3")),
                    i = n("Rbzu"),
                    s = n("2Fjn"),
                    c = (n("4aJ6"), n("mXGw")),
                    p = n.n(c),
                    u = n("/m4v"),
                    l = function() {
                        return "[object process]" === Object.prototype.toString.call(t.process)
                    },
                    _ = function(t) {
                        return l() || "undefined" == typeof window ? t : (window.__NEXT_REMATCH_STORE__ || (window.__NEXT_REMATCH_STORE__ = t), window.__NEXT_REMATCH_STORE__)
                    };
                e.a = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function(t) {
                        var n = e[0],
                            r = e.slice(1),
                            c = u.b.apply(null, r)(t),
                            f = function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.store,
                                    r = t.initialProps,
                                    o = (t.initialState, Object(s.a)(t, ["store", "initialProps", "initialState"]));
                                return p.a.createElement(u.a, {
                                    store: e && e.dispatch ? e : _(n)
                                }, p.a.createElement(c, Object(i.a)({}, r, o)))
                            };
                        return f.getInitialProps = Object(a.default)(o.a.mark((function e() {
                            var r, a, s, c, p = arguments;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = p.length > 0 && void 0 !== p[0] ? p[0] : {}, a = l(), s = _(n), !t.getInitialProps) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 6, t.getInitialProps(Object(i.a)({}, r, {
                                            isServer: a,
                                            store: s
                                        }));
                                    case 6:
                                        e.t0 = e.sent, e.next = 10;
                                        break;
                                    case 9:
                                        e.t0 = {};
                                    case 10:
                                        return c = e.t0, e.abrupt("return", {
                                            store: s,
                                            initialState: s.getState(),
                                            initialProps: c
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), f
                    }
                }
            }).call(this, n("pCvA"))
        },
        cXzP: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = s(n("1bJ0")),
                o = s(n("fVwV")),
                a = s(n("Hyru")),
                i = s(n("zL1T"));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var c = (0, r.default)("youtube-player"),
                p = {
                    proxyEvents: function(t) {
                        var e = {},
                            n = function(n) {
                                var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                                e[r] = function(e) {
                                    c('event "%s"', r, e), t.trigger(n, e)
                                }
                            },
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var s, p = a.default[Symbol.iterator](); !(r = (s = p.next()).done); r = !0) n(s.value)
                        } catch (t) {
                            o = !0, i = t
                        } finally {
                            try {
                                !r && p.return && p.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return e
                    },
                    promisifyPlayer: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {},
                            r = function(r) {
                                e && i.default[r] ? n[r] = function() {
                                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                                    return t.then((function(t) {
                                        var e = i.default[r],
                                            o = t.getPlayerState(),
                                            a = t[r].apply(t, n);
                                        return e.stateChangeRequired || Array.isArray(e.acceptableStates) && -1 === e.acceptableStates.indexOf(o) ? new Promise((function(n) {
                                            t.addEventListener("onStateChange", (function r() {
                                                var o = t.getPlayerState(),
                                                    a = void 0;
                                                "number" == typeof e.timeout && (a = setTimeout((function() {
                                                    t.removeEventListener("onStateChange", r), n()
                                                }), e.timeout)), Array.isArray(e.acceptableStates) && -1 !== e.acceptableStates.indexOf(o) && (t.removeEventListener("onStateChange", r), clearTimeout(a), n())
                                            }))
                                        })).then((function() {
                                            return a
                                        })) : a
                                    }))
                                } : n[r] = function() {
                                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                                    return t.then((function(t) {
                                        return t[r].apply(t, n)
                                    }))
                                }
                            },
                            a = !0,
                            s = !1,
                            c = void 0;
                        try {
                            for (var p, u = o.default[Symbol.iterator](); !(a = (p = u.next()).done); a = !0) r(p.value)
                        } catch (t) {
                            s = !0, c = t
                        } finally {
                            try {
                                !a && u.return && u.return()
                            } finally {
                                if (s) throw c
                            }
                        }
                        return n
                    }
                };
            e.default = p, t.exports = e.default
        },
        ct8n: function(t, e, n) {
            (function(e) {
                function n(t) {
                    try {
                        if (!e.localStorage) return !1
                    } catch (t) {
                        return !1
                    }
                    var n = e.localStorage[t];
                    return null != n && "true" === String(n).toLowerCase()
                }
                t.exports = function(t, e) {
                    if (n("noDeprecation")) return t;
                    var r = !1;
                    return function() {
                        if (!r) {
                            if (n("throwDeprecation")) throw new Error(e);
                            n("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0
                        }
                        return t.apply(this, arguments)
                    }
                }
            }).call(this, n("pCvA"))
        },
        dn7a: function(t, e) {
            t.exports.asyncForEach = async function(t, e) {
                for (let n = 0; n < t.length; n += 1) await e(t[n], n, t)
            }
        },
        eoLT: function(t, e, n) {
            (function(t) {
                e.fetch = s(t.fetch) && s(t.ReadableStream), e.writableStream = s(t.WritableStream), e.abortController = s(t.AbortController), e.blobConstructor = !1;
                try {
                    new Blob([new ArrayBuffer(1)]), e.blobConstructor = !0
                } catch (t) {}
                var n;

                function r() {
                    if (void 0 !== n) return n;
                    if (t.XMLHttpRequest) {
                        n = new t.XMLHttpRequest;
                        try {
                            n.open("GET", t.XDomainRequest ? "/" : "https://example.com")
                        } catch (t) {
                            n = null
                        }
                    } else n = null;
                    return n
                }

                function o(t) {
                    var e = r();
                    if (!e) return !1;
                    try {
                        return e.responseType = t, e.responseType === t
                    } catch (t) {}
                    return !1
                }
                var a = void 0 !== t.ArrayBuffer,
                    i = a && s(t.ArrayBuffer.prototype.slice);

                function s(t) {
                    return "function" == typeof t
                }
                e.arraybuffer = e.fetch || a && o("arraybuffer"), e.msstream = !e.fetch && i && o("ms-stream"), e.mozchunkedarraybuffer = !e.fetch && a && o("moz-chunked-arraybuffer"), e.overrideMimeType = e.fetch || !!r() && s(r().overrideMimeType), e.vbArray = s(t.VBArray), n = null
            }).call(this, n("pCvA"))
        },
        fVwV: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], t.exports = e.default
        },
        fXBr: function(t, e, n) {
            "use strict";

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Picture", {
                enumerable: !0,
                get: function() {
                    return o.Picture
                }
            }), Object.defineProperty(e, "Source", {
                enumerable: !0,
                get: function() {
                    return o.Source
                }
            }), Object.defineProperty(e, "PublicConfigAPI", {
                enumerable: !0,
                get: function() {
                    return a.PublicConfigAPI
                }
            }), Object.defineProperty(e, "buildURL", {
                enumerable: !0,
                get: function() {
                    return i.buildURLPublic
                }
            }), Object.defineProperty(e, "Background", {
                enumerable: !0,
                get: function() {
                    return s.Background
                }
            }), e.default = void 0;
            var o = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== r(t) && "function" != typeof t) return {
                        default: t
                    };
                    var e = function() {
                        if ("function" != typeof WeakMap) return null;
                        var t = new WeakMap;
                        return function() {
                            return t
                        }, t
                    }();
                    if (e && e.has(t)) return e.get(t);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in t)
                        if (Object.prototype.hasOwnProperty.call(t, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(t, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = t[a]
                        }
                    return n.default = t, e && e.set(t, n), n
                }(n("JLxL")),
                a = n("zSzO"),
                i = n("t7VS"),
                s = n("c0bG");
            var c = o.default;
            e.default = c
        },
        "g+31": function(t, e, n) {
            "use strict";
            (function(e) {
                var r = n("upWy");

                function o(t) {
                    var e = this;
                    this.next = null, this.entry = null, this.finish = function() {
                        ! function(t, e, n) {
                            var r = t.entry;
                            for (t.entry = null; r;) {
                                var o = r.callback;
                                e.pendingcb--, o(void 0), r = r.next
                            }
                            e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                        }(e, t)
                    }
                }
                t.exports = A;
                var a, i = r.nextTick;
                A.WritableState = h;
                var s = n("nrnY");
                s.inherits = n("wfEq");
                var c, p = {
                        deprecate: n("ct8n")
                    },
                    u = n("n428"),
                    l = n("pRMk").Buffer,
                    _ = e.Uint8Array || function() {},
                    f = n("xTpk");

                function d() {}

                function h(t, e) {
                    a = a || n("A/eZ"), t = t || {};
                    var s = e instanceof a;
                    this.objectMode = !!t.objectMode, s && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                    var c = t.highWaterMark,
                        p = t.writableHighWaterMark,
                        u = this.objectMode ? 16 : 16384;
                    this.highWaterMark = c || 0 === c ? c : s && (p || 0 === p) ? p : u, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                    var l = !1 === t.decodeStrings;
                    this.decodeStrings = !l, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
                        ! function(t, e) {
                            var n = t._writableState,
                                o = n.sync,
                                a = n.writecb;
                            if (function(t) {
                                    t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
                                }(n), e) ! function(t, e, n, o, a) {
                                --e.pendingcb, n ? (r.nextTick(a, o), r.nextTick(v, t, e), t._writableState.errorEmitted = !0, t.emit("error", o)) : (a(o), t._writableState.errorEmitted = !0, t.emit("error", o), v(t, e))
                            }(t, n, o, e, a);
                            else {
                                var s = b(n);
                                s || n.corked || n.bufferProcessing || !n.bufferedRequest || w(t, n), o ? i(m, t, n, s, a) : m(t, n, s, a)
                            }
                        }(e, t)
                    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
                }

                function A(t) {
                    if (a = a || n("A/eZ"), !(c.call(A, this) || this instanceof a)) return new A(t);
                    this._writableState = new h(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), u.call(this)
                }

                function g(t, e, n, r, o, a, i) {
                    e.writelen = r, e.writecb = i, e.writing = !0, e.sync = !0, n ? t._writev(o, e.onwrite) : t._write(o, a, e.onwrite), e.sync = !1
                }

                function m(t, e, n, r) {
                    n || function(t, e) {
                        0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
                    }(t, e), e.pendingcb--, r(), v(t, e)
                }

                function w(t, e) {
                    e.bufferProcessing = !0;
                    var n = e.bufferedRequest;
                    if (t._writev && n && n.next) {
                        var r = e.bufferedRequestCount,
                            a = new Array(r),
                            i = e.corkedRequestsFree;
                        i.entry = n;
                        for (var s = 0, c = !0; n;) a[s] = n, n.isBuf || (c = !1), n = n.next, s += 1;
                        a.allBuffers = c, g(t, e, !0, e.length, a, "", i.finish), e.pendingcb++, e.lastBufferedRequest = null, i.next ? (e.corkedRequestsFree = i.next, i.next = null) : e.corkedRequestsFree = new o(e), e.bufferedRequestCount = 0
                    } else {
                        for (; n;) {
                            var p = n.chunk,
                                u = n.encoding,
                                l = n.callback;
                            if (g(t, e, !1, e.objectMode ? 1 : p.length, p, u, l), n = n.next, e.bufferedRequestCount--, e.writing) break
                        }
                        null === n && (e.lastBufferedRequest = null)
                    }
                    e.bufferedRequest = n, e.bufferProcessing = !1
                }

                function b(t) {
                    return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
                }

                function y(t, e) {
                    t._final((function(n) {
                        e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), v(t, e)
                    }))
                }

                function v(t, e) {
                    var n = b(e);
                    return n && (function(t, e) {
                        e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, r.nextTick(y, t, e)) : (e.prefinished = !0, t.emit("prefinish")))
                    }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n
                }
                s.inherits(A, u), h.prototype.getBuffer = function() {
                        for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
                        return e
                    },
                    function() {
                        try {
                            Object.defineProperty(h.prototype, "buffer", {
                                get: p.deprecate((function() {
                                    return this.getBuffer()
                                }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                            })
                        } catch (t) {}
                    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(A, Symbol.hasInstance, {
                        value: function(t) {
                            return !!c.call(this, t) || this === A && t && t._writableState instanceof h
                        }
                    })) : c = function(t) {
                        return t instanceof this
                    }, A.prototype.pipe = function() {
                        this.emit("error", new Error("Cannot pipe, not readable"))
                    }, A.prototype.write = function(t, e, n) {
                        var o, a = this._writableState,
                            i = !1,
                            s = !a.objectMode && (o = t, l.isBuffer(o) || o instanceof _);
                        return s && !l.isBuffer(t) && (t = function(t) {
                            return l.from(t)
                        }(t)), "function" == typeof e && (n = e, e = null), s ? e = "buffer" : e || (e = a.defaultEncoding), "function" != typeof n && (n = d), a.ended ? function(t, e) {
                            var n = new Error("write after end");
                            t.emit("error", n), r.nextTick(e, n)
                        }(this, n) : (s || function(t, e, n, o) {
                            var a = !0,
                                i = !1;
                            return null === n ? i = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (i = new TypeError("Invalid non-string/buffer chunk")), i && (t.emit("error", i), r.nextTick(o, i), a = !1), a
                        }(this, a, t, n)) && (a.pendingcb++, i = function(t, e, n, r, o, a) {
                            if (!n) {
                                var i = function(t, e, n) {
                                    return t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = l.from(e, n)), e
                                }(e, r, o);
                                r !== i && (n = !0, o = "buffer", r = i)
                            }
                            var s = e.objectMode ? 1 : r.length;
                            e.length += s;
                            var c = e.length < e.highWaterMark;
                            if (c || (e.needDrain = !0), e.writing || e.corked) {
                                var p = e.lastBufferedRequest;
                                e.lastBufferedRequest = {
                                    chunk: r,
                                    encoding: o,
                                    isBuf: n,
                                    callback: a,
                                    next: null
                                }, p ? p.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                            } else g(t, e, !1, s, r, o, a);
                            return c
                        }(this, a, s, t, e, n)), i
                    }, A.prototype.cork = function() {
                        this._writableState.corked++
                    }, A.prototype.uncork = function() {
                        var t = this._writableState;
                        t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || w(this, t))
                    }, A.prototype.setDefaultEncoding = function(t) {
                        if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
                        return this._writableState.defaultEncoding = t, this
                    }, Object.defineProperty(A.prototype, "writableHighWaterMark", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState.highWaterMark
                        }
                    }), A.prototype._write = function(t, e, n) {
                        n(new Error("_write() is not implemented"))
                    }, A.prototype._writev = null, A.prototype.end = function(t, e, n) {
                        var o = this._writableState;
                        "function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null != t && this.write(t, e), o.corked && (o.corked = 1, this.uncork()), o.ending || o.finished || function(t, e, n) {
                            e.ending = !0, v(t, e), n && (e.finished ? r.nextTick(n) : t.once("finish", n)), e.ended = !0, t.writable = !1
                        }(this, o, n)
                    }, Object.defineProperty(A.prototype, "destroyed", {
                        get: function() {
                            return void 0 !== this._writableState && this._writableState.destroyed
                        },
                        set: function(t) {
                            this._writableState && (this._writableState.destroyed = t)
                        }
                    }), A.prototype.destroy = f.destroy, A.prototype._undestroy = f.undestroy, A.prototype._destroy = function(t, e) {
                        this.end(), e(t)
                    }
            }).call(this, n("pCvA"))
        },
        h8yL: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ShouldComponentUpdateHOC = void 0;
            var r = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== a(t) && "function" != typeof t) return {
                        default: t
                    };
                    var e = function() {
                        if ("function" != typeof WeakMap) return null;
                        var t = new WeakMap;
                        return function() {
                            return t
                        }, t
                    }();
                    if (e && e.has(t)) return e.get(t);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var i = r ? Object.getOwnPropertyDescriptor(t, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = t[o]
                        }
                    return n.default = t, e && e.set(t, n), n
                }(n("mXGw")),
                o = n("jYid");

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function c(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t, e) {
                return (p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            e.ShouldComponentUpdateHOC = function(t) {
                var e = function(e) {
                    function n() {
                        var t, e, r, i, p, u, l;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        for (var _ = arguments.length, f = new Array(_), d = 0; d < _; d++) f[d] = arguments[d];
                        return r = this, i = (t = s(n)).call.apply(t, [this].concat(f)), e = !i || "object" !== a(i) && "function" != typeof i ? c(r) : i, l = function(t) {
                            var n = e.props;
                            return (0, o.warning)(t.onMounted == e.props.onMounted, "props.onMounted() is changing between renders. This is probably not intended. Ensure that a class method is being passed to Imgix rather than a function that is created every render. If this is intended, ignore this warning."), !(0, o.shallowEqual)(n, t, (function(t, e, n) {
                                return "children" === n ? (0, o.shallowEqual)(t, e) : "imgixParams" === n ? (0, o.shallowEqual)(t, e, (function(t, e) {
                                    if (Array.isArray(t)) return (0, o.shallowEqual)(t, e)
                                })) : "htmlAttributes" === n ? (0, o.shallowEqual)(t, e) : "attributeConfig" === n ? (0, o.shallowEqual)(t, e) : void 0
                            }))
                        }, (u = "shouldComponentUpdate") in (p = c(e)) ? Object.defineProperty(p, u, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : p[u] = l, e
                    }
                    var u, l;
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && p(t, e)
                    }(n, r.Component), u = n, (l = [{
                        key: "render",
                        value: function() {
                            return r.default.createElement(t, this.props)
                        }
                    }]) && i(u.prototype, l), n
                }();
                return e.displayName = "ShouldComponentUpdateHOC(".concat(t.displayName, ")"), e
            }
        },
        hBZP: function(t, e, n) {
            "use strict";
            var r, o = "object" == typeof Reflect ? Reflect : null,
                a = o && "function" == typeof o.apply ? o.apply : function(t, e, n) {
                    return Function.prototype.apply.call(t, e, n)
                };
            r = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            } : function(t) {
                return Object.getOwnPropertyNames(t)
            };
            var i = Number.isNaN || function(t) {
                return t != t
            };

            function s() {
                s.init.call(this)
            }
            t.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
            var c = 10;

            function p(t) {
                return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners
            }

            function u(t, e, n, r) {
                var o, a, i, s;
                if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
                if (void 0 === (a = t._events) ? (a = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== a.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), a = t._events), i = a[e]), void 0 === i) i = a[e] = n, ++t._eventsCount;
                else if ("function" == typeof i ? i = a[e] = r ? [n, i] : [i, n] : r ? i.unshift(n) : i.push(n), (o = p(t)) > 0 && i.length > o && !i.warned) {
                    i.warned = !0;
                    var c = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = i.length, s = c, console && console.warn && console.warn(s)
                }
                return t
            }

            function l(t, e, n) {
                var r = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: n
                    },
                    o = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
                        this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, a(this.listener, this.target, t))
                    }.bind(r);
                return o.listener = n, r.wrapFn = o, o
            }

            function _(t, e, n) {
                var r = t._events;
                if (void 0 === r) return [];
                var o = r[e];
                return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(t) {
                    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                    return e
                }(o) : d(o, o.length)
            }

            function f(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var n = e[t];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function d(t, e) {
                for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
                return n
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return c
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    c = t
                }
            }), s.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, s.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t, this
            }, s.prototype.getMaxListeners = function() {
                return p(this)
            }, s.prototype.emit = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                var r = "error" === t,
                    o = this._events;
                if (void 0 !== o) r = r && void 0 === o.error;
                else if (!r) return !1;
                if (r) {
                    var i;
                    if (e.length > 0 && (i = e[0]), i instanceof Error) throw i;
                    var s = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
                    throw s.context = i, s
                }
                var c = o[t];
                if (void 0 === c) return !1;
                if ("function" == typeof c) a(c, this, e);
                else {
                    var p = c.length,
                        u = d(c, p);
                    for (n = 0; n < p; ++n) a(u[n], this, e)
                }
                return !0
            }, s.prototype.addListener = function(t, e) {
                return u(this, t, e, !1)
            }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t, e) {
                return u(this, t, e, !0)
            }, s.prototype.once = function(t, e) {
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                return this.on(t, l(this, t, e)), this
            }, s.prototype.prependOnceListener = function(t, e) {
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                return this.prependListener(t, l(this, t, e)), this
            }, s.prototype.removeListener = function(t, e) {
                var n, r, o, a, i;
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                if (void 0 === (r = this._events)) return this;
                if (void 0 === (n = r[t])) return this;
                if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
                else if ("function" != typeof n) {
                    for (o = -1, a = n.length - 1; a >= 0; a--)
                        if (n[a] === e || n[a].listener === e) {
                            i = n[a].listener, o = a;
                            break
                        }
                    if (o < 0) return this;
                    0 === o ? n.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }(n, o), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, i || e)
                }
                return this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t) {
                var e, n, r;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
                if (0 === arguments.length) {
                    var o, a = Object.keys(n);
                    for (r = 0; r < a.length; ++r) "removeListener" !== (o = a[r]) && this.removeAllListeners(o);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(e = n[t])) this.removeListener(t, e);
                else if (void 0 !== e)
                    for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
                return this
            }, s.prototype.listeners = function(t) {
                return _(this, t, !0)
            }, s.prototype.rawListeners = function(t) {
                return _(this, t, !1)
            }, s.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e)
            }, s.prototype.listenerCount = f, s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? r(this._events) : []
            }
        },
        hRF4: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    return function(t) {
                        var e = t.resolve;
                        return t.iterate = function(t, e, r, o) {
                            return n((function(e) {
                                return [e, t(e)]
                            }), e, r, o)
                        }, t.unfold = n, t;

                        function n(t, r, o, a) {
                            return e(a).then((function(n) {
                                return e(r(n)).then((function(r) {
                                    return r ? n : e(t(n)).spread(i)
                                }))
                            }));

                            function i(a, i) {
                                return e(o(a)).then((function() {
                                    return n(t, r, o, i)
                                }))
                            }
                        }
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        hkrM: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function(t) {
                    var e = n("xtUC"),
                        r = n("iKwt");

                    function o(t, n, r, o) {
                        return e.setTimer((function() {
                            t(r, o, n)
                        }), n)
                    }
                    return function(t) {
                        function n(t, e, n) {
                            o(a, t, e, n)
                        }

                        function a(t, e) {
                            e.resolve(t)
                        }

                        function i(t, e, n) {
                            var o = void 0 === t ? new r("timed out after " + n + "ms") : t;
                            e.reject(o)
                        }
                        return t.prototype.delay = function(t) {
                            var e = this._beget();
                            return this._handler.fold(n, t, void 0, e._handler), e
                        }, t.prototype.timeout = function(t, n) {
                            var r = this._beget(),
                                a = r._handler,
                                s = o(i, t, n, r._handler);
                            return this._handler.visit(a, (function(t) {
                                e.clearTimer(s), this.resolve(t)
                            }), (function(t) {
                                e.clearTimer(s), this.reject(t)
                            }), a.notify), r
                        }, t
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        hxtY: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DPR_QUALITY_VALUES = e.DPR_QUALITY = void 0;
            var r = {
                q_dpr1: 75,
                q_dpr2: 50,
                q_dpr3: 35,
                q_dpr4: 23,
                q_dpr5: 20
            };
            e.DPR_QUALITY = r;
            var o = function(t) {
                for (var e = [], n = Object.keys(t), r = 0; r < n.length; r++) e.push(t[n[r]]);
                return e
            }(r);
            e.DPR_QUALITY_VALUES = o
        },
        iKwt: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    function t(e) {
                        Error.call(this), this.message = e, this.name = t.name, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t)
                    }
                    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        iXzu: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    var n = function() {
                            if ("undefined" != typeof Map) return Map;

                            function t(t, e) {
                                var n = -1;
                                return t.some((function(t, r) {
                                    return t[0] === e && (n = r, !0)
                                })), n
                            }
                            return function() {
                                function e() {
                                    this.__entries__ = []
                                }
                                return Object.defineProperty(e.prototype, "size", {
                                    get: function() {
                                        return this.__entries__.length
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), e.prototype.get = function(e) {
                                    var n = t(this.__entries__, e),
                                        r = this.__entries__[n];
                                    return r && r[1]
                                }, e.prototype.set = function(e, n) {
                                    var r = t(this.__entries__, e);
                                    ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                                }, e.prototype.delete = function(e) {
                                    var n = this.__entries__,
                                        r = t(n, e);
                                    ~r && n.splice(r, 1)
                                }, e.prototype.has = function(e) {
                                    return !!~t(this.__entries__, e)
                                }, e.prototype.clear = function() {
                                    this.__entries__.splice(0)
                                }, e.prototype.forEach = function(t, e) {
                                    void 0 === e && (e = null);
                                    for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                        var o = r[n];
                                        t.call(e, o[1], o[0])
                                    }
                                }, e
                            }()
                        }(),
                        r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                        o = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                        a = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(t) {
                            return setTimeout((function() {
                                return t(Date.now())
                            }), 1e3 / 60)
                        },
                        i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                        s = "undefined" != typeof MutationObserver,
                        c = function() {
                            function t() {
                                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                                    var n = !1,
                                        r = !1,
                                        o = 0;

                                    function i() {
                                        n && (n = !1, t()), r && c()
                                    }

                                    function s() {
                                        a(i)
                                    }

                                    function c() {
                                        var t = Date.now();
                                        if (n) {
                                            if (t - o < 2) return;
                                            r = !0
                                        } else n = !0, r = !1, setTimeout(s, 20);
                                        o = t
                                    }
                                    return c
                                }(this.refresh.bind(this))
                            }
                            return t.prototype.addObserver = function(t) {
                                ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                            }, t.prototype.removeObserver = function(t) {
                                var e = this.observers_,
                                    n = e.indexOf(t);
                                ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
                            }, t.prototype.refresh = function() {
                                this.updateObservers_() && this.refresh()
                            }, t.prototype.updateObservers_ = function() {
                                var t = this.observers_.filter((function(t) {
                                    return t.gatherActive(), t.hasActive()
                                }));
                                return t.forEach((function(t) {
                                    return t.broadcastActive()
                                })), t.length > 0
                            }, t.prototype.connect_ = function() {
                                r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                            }, t.prototype.disconnect_ = function() {
                                r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                            }, t.prototype.onTransitionEnd_ = function(t) {
                                var e = t.propertyName,
                                    n = void 0 === e ? "" : e;
                                i.some((function(t) {
                                    return !!~n.indexOf(t)
                                })) && this.refresh()
                            }, t.getInstance = function() {
                                return this.instance_ || (this.instance_ = new t), this.instance_
                            }, t.instance_ = null, t
                        }(),
                        p = function(t, e) {
                            for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                                var o = r[n];
                                Object.defineProperty(t, o, {
                                    value: e[o],
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                })
                            }
                            return t
                        },
                        u = function(t) {
                            return t && t.ownerDocument && t.ownerDocument.defaultView || o
                        },
                        l = A(0, 0, 0, 0);

                    function _(t) {
                        return parseFloat(t) || 0
                    }

                    function f(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        return e.reduce((function(e, n) {
                            return e + _(t["border-" + n + "-width"])
                        }), 0)
                    }
                    var d = "undefined" != typeof SVGGraphicsElement ? function(t) {
                        return t instanceof u(t).SVGGraphicsElement
                    } : function(t) {
                        return t instanceof u(t).SVGElement && "function" == typeof t.getBBox
                    };

                    function h(t) {
                        return r ? d(t) ? function(t) {
                            var e = t.getBBox();
                            return A(0, 0, e.width, e.height)
                        }(t) : function(t) {
                            var e = t.clientWidth,
                                n = t.clientHeight;
                            if (!e && !n) return l;
                            var r = u(t).getComputedStyle(t),
                                o = function(t) {
                                    for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                                        var o = r[n],
                                            a = t["padding-" + o];
                                        e[o] = _(a)
                                    }
                                    return e
                                }(r),
                                a = o.left + o.right,
                                i = o.top + o.bottom,
                                s = _(r.width),
                                c = _(r.height);
                            if ("border-box" === r.boxSizing && (Math.round(s + a) !== e && (s -= f(r, "left", "right") + a), Math.round(c + i) !== n && (c -= f(r, "top", "bottom") + i)), ! function(t) {
                                    return t === u(t).document.documentElement
                                }(t)) {
                                var p = Math.round(s + a) - e,
                                    d = Math.round(c + i) - n;
                                1 !== Math.abs(p) && (s -= p), 1 !== Math.abs(d) && (c -= d)
                            }
                            return A(o.left, o.top, s, c)
                        }(t) : l
                    }

                    function A(t, e, n, r) {
                        return {
                            x: t,
                            y: e,
                            width: n,
                            height: r
                        }
                    }
                    var g = function() {
                            function t(t) {
                                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = A(0, 0, 0, 0), this.target = t
                            }
                            return t.prototype.isActive = function() {
                                var t = h(this.target);
                                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                            }, t.prototype.broadcastRect = function() {
                                var t = this.contentRect_;
                                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                            }, t
                        }(),
                        m = function(t, e) {
                            var n, r, o, a, i, s, c, u = (r = (n = e).x, o = n.y, a = n.width, i = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), p(c, {
                                x: r,
                                y: o,
                                width: a,
                                height: i,
                                top: o,
                                right: r + a,
                                bottom: i + o,
                                left: r
                            }), c);
                            p(this, {
                                target: t,
                                contentRect: u
                            })
                        },
                        w = function() {
                            function t(t, e, r) {
                                if (this.activeObservations_ = [], this.observations_ = new n, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                                this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r
                            }
                            return t.prototype.observe = function(t) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" != typeof Element && Element instanceof Object) {
                                    if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var e = this.observations_;
                                    e.has(t) || (e.set(t, new g(t)), this.controller_.addObserver(this), this.controller_.refresh())
                                }
                            }, t.prototype.unobserve = function(t) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" != typeof Element && Element instanceof Object) {
                                    if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var e = this.observations_;
                                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                                }
                            }, t.prototype.disconnect = function() {
                                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                            }, t.prototype.gatherActive = function() {
                                var t = this;
                                this.clearActive(), this.observations_.forEach((function(e) {
                                    e.isActive() && t.activeObservations_.push(e)
                                }))
                            }, t.prototype.broadcastActive = function() {
                                if (this.hasActive()) {
                                    var t = this.callbackCtx_,
                                        e = this.activeObservations_.map((function(t) {
                                            return new m(t.target, t.broadcastRect())
                                        }));
                                    this.callback_.call(t, e, t), this.clearActive()
                                }
                            }, t.prototype.clearActive = function() {
                                this.activeObservations_.splice(0)
                            }, t.prototype.hasActive = function() {
                                return this.activeObservations_.length > 0
                            }, t
                        }(),
                        b = "undefined" != typeof WeakMap ? new WeakMap : new n,
                        y = function t(e) {
                            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            var n = c.getInstance(),
                                r = new w(e, n, this);
                            b.set(this, r)
                        };
                    ["observe", "unobserve", "disconnect"].forEach((function(t) {
                        y.prototype[t] = function() {
                            var e;
                            return (e = b.get(this))[t].apply(e, arguments)
                        }
                    }));
                    var v = void 0 !== o.ResizeObserver ? o.ResizeObserver : y;
                    e.default = v
                }.call(this, n("pCvA"))
        },
        iur1: function(t, e, n) {
            n("GGqZ") && "g" != /./g.flags && n("U1KF").f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n("MBcE")
            })
        },
        jYid: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.compose = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return 0 === e.length ? function(t) {
                    return t
                } : 1 === e.length ? e[0] : e.reduce((function(t, e) {
                    return function() {
                        return t(e.apply(void 0, arguments))
                    }
                }))
            }, Object.defineProperty(e, "warning", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(e, "shallowEqual", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(e, "config", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            });
            var r = i(n("FIWN")),
                o = i(n("F56x")),
                a = i(n("zSzO"));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
        },
        kKrb: function(t, e) {
            var n = 1e3,
                r = 6e4,
                o = 36e5,
                a = 24 * o;

            function i(t, e, n) {
                if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
            }
            t.exports = function(t, e) {
                e = e || {};
                var s, c = typeof t;
                if ("string" === c && t.length > 0) return function(t) {
                    if (!((t = String(t)).length > 100)) {
                        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                        if (e) {
                            var i = parseFloat(e[1]);
                            switch ((e[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * i;
                                case "days":
                                case "day":
                                case "d":
                                    return i * a;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return i * o;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return i * r;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return i * n;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return i;
                                default:
                                    return
                            }
                        }
                    }
                }(t);
                if ("number" === c && !1 === isNaN(t)) return e.long ? i(s = t, a, "day") || i(s, o, "hour") || i(s, r, "minute") || i(s, n, "second") || s + " ms" : function(t) {
                    return t >= a ? Math.round(t / a) + "d" : t >= o ? Math.round(t / o) + "h" : t >= r ? Math.round(t / r) + "m" : t >= n ? Math.round(t / n) + "s" : t + "ms"
                }(t);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
            }
        },
        kah5: function(t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == n.call(t)
            }
        },
        lNt4: function(t, e, n) {
            var r;
            ! function() {
                "use strict";

                function o(t, e) {
                    var n;
                    if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !o.notNeeded(t)) {
                        for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = 0, s = r.length; a < s; a++) this[r[a]] = c(this[r[a]], this);
                        i && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
                            var o = Node.prototype.removeEventListener;
                            "click" === e ? o.call(t, e, n.hijacked || n, r) : o.call(t, e, n, r)
                        }, t.addEventListener = function(e, n, r) {
                            var o = Node.prototype.addEventListener;
                            "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(t) {
                                t.propagationStopped || n(t)
                            }), r) : o.call(t, e, n, r)
                        }), "function" == typeof t.onclick && (n = t.onclick, t.addEventListener("click", (function(t) {
                            n(t)
                        }), !1), t.onclick = null)
                    }

                    function c(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }
                }
                var a = navigator.userAgent.indexOf("Windows Phone") >= 0,
                    i = navigator.userAgent.indexOf("Android") > 0 && !a,
                    s = /iP(ad|hone|od)/.test(navigator.userAgent) && !a,
                    c = s && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                    p = s && /OS [6-7]_\d/.test(navigator.userAgent),
                    u = navigator.userAgent.indexOf("BB10") > 0;
                o.prototype.needsClick = function(t) {
                    switch (t.nodeName.toLowerCase()) {
                        case "button":
                        case "select":
                        case "textarea":
                            if (t.disabled) return !0;
                            break;
                        case "input":
                            if (s && "file" === t.type || t.disabled) return !0;
                            break;
                        case "label":
                        case "iframe":
                        case "video":
                            return !0
                    }
                    return /\bneedsclick\b/.test(t.className)
                }, o.prototype.needsFocus = function(t) {
                    switch (t.nodeName.toLowerCase()) {
                        case "textarea":
                            return !0;
                        case "select":
                            return !i;
                        case "input":
                            switch (t.type) {
                                case "button":
                                case "checkbox":
                                case "file":
                                case "image":
                                case "radio":
                                case "submit":
                                    return !1
                            }
                            return !t.disabled && !t.readOnly;
                        default:
                            return /\bneedsfocus\b/.test(t.className)
                    }
                }, o.prototype.sendClick = function(t, e) {
                    var n, r;
                    document.activeElement && document.activeElement !== t && document.activeElement.blur(), r = e.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
                }, o.prototype.determineEventType = function(t) {
                    return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
                }, o.prototype.focus = function(t) {
                    var e;
                    s && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
                }, o.prototype.updateScrollParent = function(t) {
                    var e, n;
                    if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
                        n = t;
                        do {
                            if (n.scrollHeight > n.offsetHeight) {
                                e = n, t.fastClickScrollParent = n;
                                break
                            }
                            n = n.parentElement
                        } while (n)
                    }
                    e && (e.fastClickLastScrollTop = e.scrollTop)
                }, o.prototype.getTargetElementFromEventTarget = function(t) {
                    return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
                }, o.prototype.onTouchStart = function(t) {
                    var e, n, r;
                    if (t.targetTouches.length > 1) return !0;
                    if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], s) {
                        if ((r = window.getSelection()).rangeCount && !r.isCollapsed) return !0;
                        if (!c) {
                            if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                            this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
                        }
                    }
                    return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
                }, o.prototype.touchHasMoved = function(t) {
                    var e = t.changedTouches[0],
                        n = this.touchBoundary;
                    return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
                }, o.prototype.onTouchMove = function(t) {
                    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
                }, o.prototype.findControl = function(t) {
                    return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
                }, o.prototype.onTouchEnd = function(t) {
                    var e, n, r, o, a, u = this.targetElement;
                    if (!this.trackingClick) return !0;
                    if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
                    if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                    if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, p && (a = t.changedTouches[0], (u = document.elementFromPoint(a.pageX - window.pageXOffset, a.pageY - window.pageYOffset) || u).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (r = u.tagName.toLowerCase())) {
                        if (e = this.findControl(u)) {
                            if (this.focus(u), i) return !1;
                            u = e
                        }
                    } else if (this.needsFocus(u)) return t.timeStamp - n > 100 || s && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), s && "select" === r || (this.targetElement = null, t.preventDefault()), !1);
                    return !(!s || c || !(o = u.fastClickScrollParent) || o.fastClickLastScrollTop === o.scrollTop) || (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
                }, o.prototype.onTouchCancel = function() {
                    this.trackingClick = !1, this.targetElement = null
                }, o.prototype.onMouse = function(t) {
                    return !(this.targetElement && !t.forwardedTouchEvent && t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), 1))
                }, o.prototype.onClick = function(t) {
                    var e;
                    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
                }, o.prototype.destroy = function() {
                    var t = this.layer;
                    i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
                }, o.notNeeded = function(t) {
                    var e, n, r;
                    if (void 0 === window.ontouchstart) return !0;
                    if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                        if (!i) return !0;
                        if (e = document.querySelector("meta[name=viewport]")) {
                            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                            if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                        }
                    }
                    if (u && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]"))) {
                        if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                        if (document.documentElement.scrollWidth <= window.outerWidth) return !0
                    }
                    return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || !!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === t.style.touchAction || "manipulation" === t.style.touchAction
                }, o.attach = function(t, e) {
                    return new o(t, e)
                }, void 0 === (r = function() {
                    return o
                }.call(e, n, e, t)) || (t.exports = r)
            }()
        },
        lVFF: function(t, e) {},
        n428: function(t, e, n) {
            t.exports = n("hBZP").EventEmitter
        },
        nrnY: function(t, e, n) {
            (function(t) {
                function n(t) {
                    return Object.prototype.toString.call(t)
                }
                e.isArray = function(t) {
                    return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t)
                }, e.isBoolean = function(t) {
                    return "boolean" == typeof t
                }, e.isNull = function(t) {
                    return null === t
                }, e.isNullOrUndefined = function(t) {
                    return null == t
                }, e.isNumber = function(t) {
                    return "number" == typeof t
                }, e.isString = function(t) {
                    return "string" == typeof t
                }, e.isSymbol = function(t) {
                    return "symbol" == typeof t
                }, e.isUndefined = function(t) {
                    return void 0 === t
                }, e.isRegExp = function(t) {
                    return "[object RegExp]" === n(t)
                }, e.isObject = function(t) {
                    return "object" == typeof t && null !== t
                }, e.isDate = function(t) {
                    return "[object Date]" === n(t)
                }, e.isError = function(t) {
                    return "[object Error]" === n(t) || t instanceof Error
                }, e.isFunction = function(t) {
                    return "function" == typeof t
                }, e.isPrimitive = function(t) {
                    return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
                }, e.isBuffer = t.isBuffer
            }).call(this, n("zkTx").Buffer)
        },
        o42t: function(t, e, n) {
            t.exports = n("6jsY")
        },
        oYIp: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    return {
                        pending: function() {
                            return {
                                state: "pending"
                            }
                        },
                        fulfilled: e,
                        rejected: t,
                        inspect: function(n) {
                            var r = n.state();
                            return 0 === r ? {
                                state: "pending"
                            } : r > 0 ? e(n.value) : t(n.value)
                        }
                    };

                    function t(t) {
                        return {
                            state: "rejected",
                            reason: t
                        }
                    }

                    function e(t) {
                        return {
                            state: "fulfilled",
                            value: t
                        }
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        p5jI: function(t, e, n) {
            (function(e, r) {
                const o = n("Ax1p"),
                    a = n("TC2y"),
                    {
                        downloadResponsiveImage: i,
                        download: s
                    } = n("QfSp"),
                    {
                        asyncForEach: c
                    } = n("dn7a"),
                    p = new o.Renderer,
                    {
                        CACHE_IMAGES: u
                    } = e.env;
                p.paragraph = t => `${t}\n<br/>`, p.link = function(t, e, n) {
                    return o.Renderer.prototype.link.call(this, t, e, n).replace("<a", "<a target='_blank' rel='noopener noreferrer' ")
                }, o.setOptions({
                    smartypants: !0,
                    breaks: !0,
                    gfm: !0
                });
                const l = t => o(t, {
                    renderer: p
                });
                async function _(t, e) {
                    const n = new Set;
                    let r = [t];
                    for (; r.length;) {
                        const o = [],
                            a = [];
                        if (await c(r, async t => {
                                await c(Object.keys(t), async r => {
                                    const c = t[r];
                                    if (r === e) {
                                        let e;
                                        e = "responsiveImage" === r ? await i(c) : await s(c), t[r] = e, a.push(c)
                                    } else c && "object" == typeof c && !n.has(c) && (n.add(c), o.push(c))
                                })
                            }), a.length) return t;
                        r = o
                    }
                    return t
                }
                async function f(t, e) {
                    return t instanceof Array ? Promise.all(t.map(async t => _(t, e))) : t instanceof Object ? _(t, e) : t
                }
                t.exports = async function({
                    data: t
                }) {
                    r.nbAssetsCached = 0, r.nbAssetsSkipped = 0, u && console.log("[33m", "⚠  Caching DatoCMS assets...");
                    const e = await a.reduce(Object.keys(t), async(e, n) => {
                        switch (u && (console.log("[33m", `     Parsing ${n}...`), t[n] = await f(t[n], "openGraphImage"), t[n] = await f(t[n], "url"), t[n] = await f(t[n], "responsiveImage")), n) {
                            case "global":
                                {
                                    const r = function(t) {
                                        return Object.assign(t, {
                                            insiderBannerLegals: l(t.insiderBannerLegals),
                                            insiderBannerText: l(t.insiderBannerText)
                                        })
                                    }(t[n]);
                                    return Object.assign(e, {
                                        global: r
                                    })
                                }
                            case "homepageHeroModule":
                                {
                                    const r = function(t) {
                                        return Object.assign(t, {
                                            title: l(t.title),
                                            formHeader: l(t.formHeader)
                                        })
                                    }(t[n]);
                                    return Object.assign(e, {
                                        homepageHeroModule: r
                                    })
                                }
                            case "insiderBanner":
                                {
                                    const r = function(t) {
                                        return Object.assign(t, {
                                            newsletterConfirmationText: l(t.newsletterConfirmationText)
                                        })
                                    }(t[n]);
                                    return Object.assign(e, {
                                        insiderBanner: r
                                    })
                                }
                            case "careersPage":
                                {
                                    const r = function(t) {
                                        return Object.assign(t, {
                                            title: l(t.title)
                                        })
                                    }(t[n]);
                                    return Object.assign(e, {
                                        careersPage: r
                                    })
                                }
                            case "allTwitterItems":
                                {
                                    const r = function(t) {
                                        return t.map(t => Object.assign(t, {
                                            tweet: l(t.tweet)
                                        }))
                                    }(t[n]);
                                    return Object.assign(e, {
                                        allTwitterItems: r
                                    })
                                }
                            case "allValueProps":
                                {
                                    const r = function(t) {
                                        return t.map(t => Object.assign(t, {
                                            headline: l(t.headline)
                                        }))
                                    }(t[n]);
                                    return Object.assign(e, {
                                        allValueProps: r
                                    })
                                }
                            default:
                                return Object.assign(e, {
                                    [n]: t[n]
                                })
                        }
                    }, {});
                    return u && (console.log("[32m", `✔  Caching complete. ${r.nbAssetsCached} asset(s) cached, ${r.nbAssetsSkipped} asset(s) skipped.`), console.log("[37m")), e
                }
            }).call(this, n("5IsQ"), n("pCvA"))
        },
        pRMk: function(t, e, n) {
            var r = n("zkTx"),
                o = r.Buffer;

            function a(t, e) {
                for (var n in t) e[n] = t[n]
            }

            function i(t, e, n) {
                return o(t, e, n)
            }
            o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? t.exports = r : (a(r, e), e.Buffer = i), a(o, i), i.from = function(t, e, n) {
                if ("number" == typeof t) throw new TypeError("Argument must not be a number");
                return o(t, e, n)
            }, i.alloc = function(t, e, n) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                var r = o(t);
                return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r
            }, i.allocUnsafe = function(t) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                return o(t)
            }, i.allocUnsafeSlow = function(t) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                return r.SlowBuffer(t)
            }
        },
        pfcB: function(t, e, n) {
            "use strict";
            var r;
            r = function() {
                var t = {},
                    e = {};
                return t.on = function(t, n) {
                    var r = {
                        name: t,
                        handler: n
                    };
                    return e[t] = e[t] || [], e[t].unshift(r), r
                }, t.off = function(t) {
                    var n = e[t.name].indexOf(t); - 1 !== n && e[t.name].splice(n, 1)
                }, t.trigger = function(t, n) {
                    var r, o = e[t];
                    if (o)
                        for (r = o.length; r--;) o[r].handler(n)
                }, t
            }, t.exports = r
        },
        ppBa: function(t, e, n) {
            (function(t, n) {
                ! function(e) {
                    "use strict";
                    var r = function() {
                        return (r = Object.assign || function(t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t
                        }).apply(this, arguments)
                    };

                    function o(t, e, n, r) {
                        return new(n || (n = Promise))((function(o, a) {
                            function i(t) {
                                try {
                                    c(r.next(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function s(t) {
                                try {
                                    c(r.throw(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function c(t) {
                                t.done ? o(t.value) : new n((function(e) {
                                    e(t.value)
                                })).then(i, s)
                            }
                            c((r = r.apply(t, e || [])).next())
                        }))
                    }

                    function a(t, e) {
                        var n, r, o, a, i = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a;

                        function s(a) {
                            return function(s) {
                                return function(a) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i;) try {
                                        if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                        switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                            case 0:
                                            case 1:
                                                o = a;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, r = a[1], a = [0];
                                                continue;
                                            case 7:
                                                a = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = 0 < (o = i.trys).length && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!o || o[0] < a[1] && a[1] < o[3])) {
                                                    i.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && i.label < o[1]) {
                                                    i.label = o[1], o = a;
                                                    break
                                                }
                                                if (o && i.label < o[2]) {
                                                    i.label = o[2], i.ops.push(a);
                                                    break
                                                }
                                                o[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        a = e.call(t, i)
                                    } catch (t) {
                                        a = [6, t], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & a[0]) throw a[1];
                                    return {
                                        value: a[0] ? a[1] : void 0,
                                        done: !0
                                    }
                                }([a, s])
                            }
                        }
                    }
                    var i, s, c = function(t) {},
                        p = {
                            exposed: {
                                storeDispatch: function(t, e) {
                                    console.warn("Warning: store not yet loaded")
                                },
                                storeGetState: function() {
                                    console.warn("Warning: store not yet loaded")
                                },
                                dispatch: function(t) {
                                    return this.storeDispatch(t)
                                },
                                createDispatcher: function(t, e) {
                                    var n = this;
                                    return function(r, i) {
                                        return o(n, void 0, Promise, (function() {
                                            var n;
                                            return a(this, (function(o) {
                                                return n = {
                                                    type: t + "/" + e
                                                }, void 0 !== r && (n.payload = r), void 0 !== i && (n.meta = i), [2, this.dispatch(n)]
                                            }))
                                        }))
                                    }
                                }
                            },
                            onStoreCreated: function(t) {
                                return this.storeDispatch = t.dispatch, this.storeGetState = t.getState, {
                                    dispatch: this.dispatch
                                }
                            },
                            onModel: function(t) {
                                if (this.dispatch[t.name] = {}, t.reducers)
                                    for (var e = 0, n = Object.keys(t.reducers); e < n.length; e++) {
                                        var r = n[e];
                                        this.validate([
                                            [!!r.match(/\/.+\//), "Invalid reducer name (" + t.name + "/" + r + ")"],
                                            ["function" != typeof t.reducers[r], "Invalid reducer (" + t.name + "/" + r + "). Must be a function"]
                                        ]), this.dispatch[t.name][r] = this.createDispatcher.call(this, t.name, r)
                                    }
                            }
                        },
                        u = {
                            exposed: {
                                effects: {}
                            },
                            onModel: function(t) {
                                if (t.effects)
                                    for (var e = "function" == typeof t.effects ? t.effects(this.dispatch) : t.effects, n = 0, r = Object.keys(e); n < r.length; n++) {
                                        var o = r[n];
                                        this.validate([
                                            [!!o.match(/\//), "Invalid effect name (" + t.name + "/" + o + ")"],
                                            ["function" != typeof e[o], "Invalid effect (" + t.name + "/" + o + "). Must be a function"]
                                        ]), this.effects[t.name + "/" + o] = e[o].bind(this.dispatch[t.name]), this.dispatch[t.name][o] = this.createDispatcher.call(this, t.name, o), this.dispatch[t.name][o].isEffect = !0
                                    }
                            },
                            middleware: function(t) {
                                var e = this;
                                return function(n) {
                                    return function(r) {
                                        return o(e, void 0, void 0, (function() {
                                            return a(this, (function(e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return r.type in this.effects ? [4, n(r)] : [3, 2];
                                                    case 1:
                                                        return e.sent(), [2, this.effects[r.type](r.payload, t.getState(), r.meta)];
                                                    case 2:
                                                        return [2, n(r)]
                                                }
                                            }))
                                        }))
                                    }
                                }
                            }
                        },
                        l = ("function" == typeof(s = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : n).Symbol) ? s.observable ? i = s.observable : (i = s("observable"), s.observable = i) : i = "@@observable", i),
                        _ = function() {
                            return Math.random().toString(36).substring(7).split("").join(".")
                        },
                        f = {
                            INIT: "@@redux/INIT" + _(),
                            REPLACE: "@@redux/REPLACE" + _(),
                            PROBE_UNKNOWN_ACTION: function() {
                                return "@@redux/PROBE_UNKNOWN_ACTION" + _()
                            }
                        };

                    function d(t, e, n) {
                        var r;
                        if ("function" == typeof e && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");
                        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
                            if ("function" != typeof n) throw Error("Expected the enhancer to be a function.");
                            return n(d)(t, e)
                        }
                        if ("function" != typeof t) throw Error("Expected the reducer to be a function.");
                        var o = t,
                            a = e,
                            i = [],
                            s = i,
                            c = !1;

                        function p() {
                            s === i && (s = i.slice())
                        }

                        function u() {
                            if (c) throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                            return a
                        }

                        function _(t) {
                            if ("function" != typeof t) throw Error("Expected the listener to be a function.");
                            if (c) throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                            var e = !0;
                            return p(), s.push(t),
                                function() {
                                    if (e) {
                                        if (c) throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                                        e = !1, p();
                                        var n = s.indexOf(t);
                                        s.splice(n, 1)
                                    }
                                }
                        }

                        function h(t) {
                            if (! function(t) {
                                    if ("object" != typeof t || null === t) return !1;
                                    for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
                                    return Object.getPrototypeOf(t) === e
                                }(t)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
                            if (void 0 === t.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                            if (c) throw Error("Reducers may not dispatch actions.");
                            try {
                                c = !0, a = o(a, t)
                            } finally {
                                c = !1
                            }
                            for (var e = i = s, n = 0; n < e.length; n++)(0, e[n])();
                            return t
                        }
                        return h({
                            type: f.INIT
                        }), (r = {
                            dispatch: h,
                            subscribe: _,
                            getState: u,
                            replaceReducer: function(t) {
                                if ("function" != typeof t) throw Error("Expected the nextReducer to be a function.");
                                o = t, h({
                                    type: f.REPLACE
                                })
                            }
                        })[l] = function() {
                            var t, e = _;
                            return (t = {
                                subscribe: function(t) {
                                    if ("object" != typeof t || null === t) throw new TypeError("Expected the observer to be an object.");

                                    function n() {
                                        t.next && t.next(u())
                                    }
                                    return n(), {
                                        unsubscribe: e(n)
                                    }
                                }
                            })[l] = function() {
                                return this
                            }, t
                        }, r
                    }

                    function h(t) {
                        for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
                            var o = e[r];
                            "function" == typeof t[o] && (n[o] = t[o])
                        }
                        var a, i, s = Object.keys(n);
                        try {
                            Object.keys(i = n).forEach((function(t) {
                                var e = i[t];
                                if (void 0 === e(void 0, {
                                        type: f.INIT
                                    })) throw Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                                if (void 0 === e(void 0, {
                                        type: f.PROBE_UNKNOWN_ACTION()
                                    })) throw Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + f.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                            }))
                        } catch (t) {
                            a = t
                        }
                        return function(t, e) {
                            if (void 0 === t && (t = {}), a) throw a;
                            for (var r, o, i = !1, c = {}, p = 0; p < s.length; p++) {
                                var u = s[p],
                                    l = t[u],
                                    _ = (0, n[u])(l, e);
                                if (void 0 === _) {
                                    var f = "Given " + ((o = (r = e) && r.type) && 'action "' + o + '"' || "an action") + ', reducer "' + u + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
                                    throw Error(f)
                                }
                                c[u] = _, i = i || _ !== l
                            }
                            return i ? c : t
                        }
                    }

                    function A(t, e) {
                        return function() {
                            return e(t.apply(this, arguments))
                        }
                    }

                    function g() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return 0 === e.length ? function(t) {
                            return t
                        } : 1 === e.length ? e[0] : e.reduce((function(t, e) {
                            return function() {
                                return t(e.apply(void 0, arguments))
                            }
                        }))
                    }

                    function m() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return function(t) {
                            return function() {
                                var n = t.apply(void 0, arguments),
                                    r = function() {
                                        throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                                    },
                                    o = {
                                        getState: n.getState,
                                        dispatch: function() {
                                            return r.apply(void 0, arguments)
                                        }
                                    },
                                    a = e.map((function(t) {
                                        return t(o)
                                    }));
                                return function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                                        })))), r.forEach((function(e) {
                                            var r, o, a;
                                            a = n[o = e], o in (r = t) ? Object.defineProperty(r, o, {
                                                value: a,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : r[o] = a
                                        }))
                                    }
                                    return t
                                }({}, n, {
                                    dispatch: r = g.apply(void 0, a)(n.dispatch)
                                })
                            }
                        }
                    }
                    var w = Object.freeze({
                            createStore: d,
                            combineReducers: h,
                            bindActionCreators: function(t, e) {
                                if ("function" == typeof t) return A(t, e);
                                if ("object" != typeof t || null === t) throw Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                                for (var n = Object.keys(t), r = {}, o = 0; o < n.length; o++) {
                                    var a = n[o],
                                        i = t[a];
                                    "function" == typeof i && (r[a] = A(i, e))
                                }
                                return r
                            },
                            applyMiddleware: m,
                            compose: g,
                            __DO_NOT_USE__ActionTypes: f
                        }),
                        b = [p, u],
                        y = function() {
                            function t(t) {
                                var e = this;
                                this.plugins = [], this.config = t, this.pluginFactory = {
                                    config: t,
                                    validate: c,
                                    create: function(t) {
                                        t.onInit && t.onInit.call(this);
                                        var e = {};
                                        if (t.exposed)
                                            for (var n = 0, r = Object.keys(t.exposed); n < r.length; n++) {
                                                var o = r[n];
                                                this[o] = "function" == typeof t.exposed[o] ? t.exposed[o].bind(this) : Object.create(t.exposed[o])
                                            }
                                        for (var a = 0, i = ["onModel", "middleware", "onStoreCreated"]; a < i.length; a++) {
                                            var s = i[a];
                                            t[s] && (e[s] = t[s].bind(this))
                                        }
                                        return e
                                    }
                                };
                                for (var n = 0, r = b.concat(this.config.plugins); n < r.length; n++) this.plugins.push(this.pluginFactory.create(r[n]));
                                this.forEachPlugin("middleware", (function(t) {
                                    e.config.redux.middlewares.push(t)
                                }))
                            }
                            return t.prototype.forEachPlugin = function(t, e) {
                                for (var n = 0, r = this.plugins; n < r.length; n++) {
                                    var o = r[n];
                                    o[t] && e(o[t])
                                }
                            }, t.prototype.getModels = function(t) {
                                return Object.keys(t).map((function(e) {
                                    return r({
                                        name: e
                                    }, t[e], {
                                        reducers: t[e].reducers || {}
                                    })
                                }))
                            }, t.prototype.addModel = function(t) {
                                this.forEachPlugin("onModel", (function(e) {
                                    return e(t)
                                }))
                            }, t.prototype.init = function() {
                                var t = this;
                                this.models = this.getModels(this.config.models);
                                for (var e = 0, n = this.models; e < n.length; e++) this.addModel(n[e]);
                                var o = function(t) {
                                        var e = this,
                                            n = t.redux,
                                            o = t.models,
                                            a = n.combineReducers || h,
                                            i = n.createStore || d,
                                            s = void 0 !== n.initialState ? n.initialState : {};
                                        this.reducers = n.reducers, this.mergeReducers = function(t) {
                                            return void 0 === t && (t = {}), e.reducers = r({}, e.reducers, t), Object.keys(e.reducers).length ? a(e.reducers) : function(t) {
                                                return t
                                            }
                                        }, this.createModelReducer = function(t) {
                                            for (var n = t.baseReducer, r = {}, o = 0, a = Object.keys(t.reducers || {}); o < a.length; o++) {
                                                var i = a[o],
                                                    s = -1 < i.indexOf("/") ? i : t.name + "/" + i;
                                                r[s] = t.reducers[i]
                                            }
                                            var c = function(e, n) {
                                                return void 0 === e && (e = t.state), "function" == typeof r[n.type] ? r[n.type](e, n.payload, n.meta) : e
                                            };
                                            e.reducers[t.name] = n ? function(t, e) {
                                                return c(n(t, e), e)
                                            } : c
                                        };
                                        for (var c = 0, p = o; c < p.length; c++) this.createModelReducer(p[c]);
                                        this.createRootReducer = function(t) {
                                            void 0 === t && (t = {});
                                            var n = e.mergeReducers();
                                            return Object.keys(t).length ? function(e, r) {
                                                return n(t[r.type] ? (0, t[r.type])(e, r) : e, r)
                                            } : n
                                        };
                                        var u = this.createRootReducer(n.rootReducers),
                                            l = m.apply(w, n.middlewares),
                                            _ = function(t) {
                                                void 0 === t && (t = {});
                                                var e = t.disabled,
                                                    n = function(t, e) {
                                                        var n = {};
                                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                                                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                                            var o = 0;
                                                            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]])
                                                        }
                                                        return n
                                                    }(t, ["disabled"]);
                                                return !e && "object" == typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(n) : g
                                            }(n.devtoolOptions).apply(void 0, n.enhancers.concat([l]));
                                        return this.store = i(u, s, _), this
                                    }.call(this, {
                                        redux: this.config.redux,
                                        models: this.models
                                    }),
                                    a = r({
                                        name: this.config.name
                                    }, o.store, {
                                        model: function(e) {
                                            t.addModel(e), o.mergeReducers(o.createModelReducer(e)), o.store.replaceReducer(o.createRootReducer(t.config.redux.rootReducers)), o.store.dispatch({
                                                type: "@@redux/REPLACE "
                                            })
                                        }
                                    });
                                return this.forEachPlugin("onStoreCreated", (function(t) {
                                    var e = t(a);
                                    e && Object.keys(e || {}).forEach((function(t) {
                                        a[t] = e[t]
                                    }))
                                })), a
                            }, t
                        }(),
                        v = function(t) {
                            console.warn(t)
                        },
                        x = function(t, e) {
                            return e ? r({}, e, t || {}) : t || {}
                        },
                        E = 0,
                        j = function(t) {
                            void 0 === t && (t = {});
                            var e = t.name || "" + E;
                            E += 1;
                            var n = function(t) {
                                for (var e = r({
                                        name: t.name,
                                        models: {},
                                        plugins: []
                                    }, t, {
                                        redux: r({
                                            reducers: {},
                                            rootReducers: {},
                                            enhancers: [],
                                            middlewares: []
                                        }, t.redux, {
                                            devtoolOptions: r({
                                                name: t.name
                                            }, t.redux && t.redux.devtoolOptions ? t.redux.devtoolOptions : {})
                                        })
                                    }), n = 0, o = e.plugins; n < o.length; n++) {
                                    var a = o[n];
                                    if (a.config) {
                                        var i = x(e.models, a.config.models);
                                        e.models = i, e.plugins = e.plugins.concat(a.config.plugins || []), a.config.redux && (e.redux.initialState = x(e.redux.initialState, a.config.redux.initialState), e.redux.reducers = x(e.redux.reducers, a.config.redux.reducers), e.redux.rootReducers = x(e.redux.rootReducers, a.config.redux.reducers), e.redux.enhancers = e.redux.enhancers.concat(a.config.redux.enhancers || []), e.redux.middlewares = e.redux.middlewares.concat(a.config.redux.middlewares || []), e.redux.combineReducers = e.redux.combineReducers || a.config.redux.combineReducers, e.redux.createStore = e.redux.createStore || a.config.redux.createStore)
                                    }
                                }
                                return e
                            }(r({}, t, {
                                name: e
                            }));
                            return new y(n).init()
                        },
                        S = {
                            init: j
                        };
                    e.getState = function() {
                        v("global getState has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.getState.")
                    }, e.dispatch = function() {
                        v("global dispatch has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.dispatch.")
                    }, e.createModel = function(t) {
                        return t
                    }, e.init = j, e.default = S, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }(e)
            }).call(this, n("pCvA"), n("RoC8")(t))
        },
        "s+Xr": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = {
                BUFFERING: 3,
                ENDED: 0,
                PAUSED: 2,
                PLAYING: 1,
                UNSTARTED: -1,
                VIDEO_CUED: 5
            }, t.exports = e.default
        },
        s4hn: function(t, e, n) {
            t.exports = n("4lWJ")
        },
        sOO9: function(t, e, n) {
            (function(t) {
                var r = n("ANQQ"),
                    o = n("3mKH"),
                    a = n("1hwd"),
                    i = n("HrKg"),
                    s = n("so/P"),
                    c = e;
                c.request = function(e, n) {
                    e = "string" == typeof e ? s.parse(e) : a(e);
                    var o = -1 === t.location.protocol.search(/^https?:$/) ? "http:" : "",
                        i = e.protocol || o,
                        c = e.hostname || e.host,
                        p = e.port,
                        u = e.path || "/";
                    c && -1 !== c.indexOf(":") && (c = "[" + c + "]"), e.url = (c ? i + "//" + c : "") + (p ? ":" + p : "") + u, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
                    var l = new r(e);
                    return n && l.on("response", n), l
                }, c.get = function(t, e) {
                    var n = c.request(t, e);
                    return n.end(), n
                }, c.ClientRequest = r, c.IncomingMessage = o.IncomingMessage, c.Agent = function() {}, c.Agent.defaultMaxSockets = 4, c.globalAgent = new c.Agent, c.STATUS_CODES = i, c.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
            }).call(this, n("pCvA"))
        },
        soc2: function(t, e, n) {
            "use strict";
            var r = n("pRMk").Buffer,
                o = r.isEncoding || function(t) {
                    switch ((t = "" + t) && t.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function a(t) {
                var e;
                switch (this.encoding = function(t) {
                    var e = function(t) {
                        if (!t) return "utf8";
                        for (var e;;) switch (t) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return t;
                            default:
                                if (e) return;
                                t = ("" + t).toLowerCase(), e = !0
                        }
                    }(t);
                    if ("string" != typeof e && (r.isEncoding === o || !o(t))) throw new Error("Unknown encoding: " + t);
                    return e || t
                }(t), this.encoding) {
                    case "utf16le":
                        this.text = c, this.end = p, e = 4;
                        break;
                    case "utf8":
                        this.fillLast = s, e = 4;
                        break;
                    case "base64":
                        this.text = u, this.end = l, e = 3;
                        break;
                    default:
                        return this.write = _, void(this.end = f)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e)
            }

            function i(t) {
                return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
            }

            function s(t) {
                var e = this.lastTotal - this.lastNeed,
                    n = function(t, e, n) {
                        if (128 != (192 & e[0])) return t.lastNeed = 0, "�";
                        if (t.lastNeed > 1 && e.length > 1) {
                            if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
                            if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�"
                        }
                    }(this, t);
                return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
            }

            function c(t, e) {
                if ((t.length - e) % 2 == 0) {
                    var n = t.toString("utf16le", e);
                    if (n) {
                        var r = n.charCodeAt(n.length - 1);
                        if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1)
                    }
                    return n
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
            }

            function p(t) {
                var e = t && t.length ? this.write(t) : "";
                if (this.lastNeed) {
                    var n = this.lastTotal - this.lastNeed;
                    return e + this.lastChar.toString("utf16le", 0, n)
                }
                return e
            }

            function u(t, e) {
                var n = (t.length - e) % 3;
                return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n))
            }

            function l(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
            }

            function _(t) {
                return t.toString(this.encoding)
            }

            function f(t) {
                return t && t.length ? this.write(t) : ""
            }
            e.StringDecoder = a, a.prototype.write = function(t) {
                if (0 === t.length) return "";
                var e, n;
                if (this.lastNeed) {
                    if (void 0 === (e = this.fillLast(t))) return "";
                    n = this.lastNeed, this.lastNeed = 0
                } else n = 0;
                return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || ""
            }, a.prototype.end = function(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed ? e + "�" : e
            }, a.prototype.text = function(t, e) {
                var n = function(t, e, n) {
                    var r = e.length - 1;
                    if (r < n) return 0;
                    var o = i(e[r]);
                    return o >= 0 ? (o > 0 && (t.lastNeed = o - 1), o) : --r < n || -2 === o ? 0 : (o = i(e[r])) >= 0 ? (o > 0 && (t.lastNeed = o - 2), o) : --r < n || -2 === o ? 0 : (o = i(e[r])) >= 0 ? (o > 0 && (2 === o ? o = 0 : t.lastNeed = o - 3), o) : 0
                }(this, t, e);
                if (!this.lastNeed) return t.toString("utf8", e);
                this.lastTotal = n;
                var r = t.length - (n - this.lastNeed);
                return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r)
            }, a.prototype.fillLast = function(t) {
                if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
            }
        },
        t7VS: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.buildURLPublic = function(t) {
                var e, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).disableLibraryParam,
                    s = (n = 3, function(t) {
                        if (Array.isArray(t)) return t
                    }(e = (0, o.default)(t)) || function(t, e) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var i, s = t[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
                            } catch (t) {
                                o = !0, a = t
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (o) throw a
                                }
                            }
                            return n
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()),
                    p = s[0],
                    l = s[1],
                    _ = s[2];
                return u(p, i({}, l, r, a ? {} : {
                    ixlib: "react-".concat(c)
                }), _)
            }, e.default = void 0;
            var r, o = (r = n("+l0x")) && r.__esModule ? r : {
                    default: r
                },
                a = n("jYid");

            function i() {
                return (i = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var s = n("v8WV").Base64,
                c = "9.0.1",
                p = Object.freeze({
                    brightness: "bri",
                    contrast: "con",
                    exposure: "exp",
                    gamma: "gam",
                    highlights: "high",
                    hue: "hue",
                    invert: "invert",
                    saturation: "sat",
                    shaddows: "shad",
                    sharpness: "sharp",
                    "unsharp-mask": "usm",
                    "unsharp-radius": "usmrad",
                    vibrance: "vib",
                    "auto-features": "auto",
                    "background-color": "bg",
                    blend: "blend",
                    "blend-mode": "bm",
                    "blend-align": "ba",
                    "blend-alpha": "balph",
                    "blend-padding": "bp",
                    "blend-width": "bw",
                    "blend-height": "bh",
                    "blend-fit": "bf",
                    "blend-crop": "bc",
                    "blend-size": "bs",
                    "blend-x": "bx",
                    "blend-y": "by",
                    border: "border",
                    padding: "pad",
                    "face-index": "faceindex",
                    "face-padding": "facepad",
                    faces: "faces",
                    "chroma-subsampling": "chromasub",
                    "color-quantization": "colorquant",
                    download: "dl",
                    DPI: "dpi",
                    format: "fm",
                    "lossless-compression": "lossless",
                    quality: "q",
                    "mask-image": "mask",
                    "noise-blur": "nr",
                    "noise-sharpen": "nrs",
                    "flip-direction": "flip",
                    orientation: "or",
                    "rotation-angle": "rot",
                    "crop-mode": "crop",
                    "fit-mode": "fit",
                    "image-height": "h",
                    "image-width": "w",
                    blurring: "blur",
                    halftone: "htn",
                    monotone: "mono",
                    pixelate: "px",
                    "sepia-tone": "sepia",
                    height: "h",
                    width: "w"
                });

            function u(t, e, n) {
                if (!t) return "";
                for (var r = Object.keys(e), o = r.length, i = t + "?", c = 0; c < o; c++) {
                    var u = r[c],
                        l = e[u];
                    "64" === (u = p[u] ? p[u] : encodeURIComponent(u)).substr(-2) && (l = s.encodeURI(l)), i += u + "=" + encodeURIComponent(l) + "&"
                }
                return a.config.queryDelim && (i = i.indexOf(a.config.queryDelim) > -1 ? i.replace("?", "&") : i.replace("?", a.config.queryDelim)), a.config.debugUrl && console.log("[ react-imgix ] :: ".concat(i.slice(0, -1)).concat(n || "")), "".concat(i.slice(0, -1)).concat(n || "")
            }
            Object.freeze({
                auto: "format"
            });
            var l = u;
            e.default = l
        },
        tvLF: function(t, e, n) {
            t.exports = n("9lmX")
        },
        upWy: function(t, e, n) {
            "use strict";
            (function(e) {
                void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
                    nextTick: function(t, n, r, o) {
                        if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                        var a, i, s = arguments.length;
                        switch (s) {
                            case 0:
                            case 1:
                                return e.nextTick(t);
                            case 2:
                                return e.nextTick((function() {
                                    t.call(null, n)
                                }));
                            case 3:
                                return e.nextTick((function() {
                                    t.call(null, n, r)
                                }));
                            case 4:
                                return e.nextTick((function() {
                                    t.call(null, n, r, o)
                                }));
                            default:
                                for (a = new Array(s - 1), i = 0; i < a.length;) a[i++] = arguments[i];
                                return e.nextTick((function() {
                                    t.apply(null, a)
                                }))
                        }
                    }
                } : t.exports = e
            }).call(this, n("5IsQ"))
        },
        v8WV: function(module, exports, __webpack_require__) {
            (function(global) {
                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, t, e;
                t = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : this, e = function(global) {
                    "use strict";
                    global = global || {};
                    var _Base64 = global.Base64,
                        version = "2.5.1",
                        buffer;
                    if (module.exports) try {
                        buffer = eval("require('buffer').Buffer")
                    } catch (t) {
                        buffer = void 0
                    }
                    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        b64tab = function(t) {
                            for (var e = {}, n = 0, r = t.length; n < r; n++) e[t.charAt(n)] = n;
                            return e
                        }(b64chars),
                        fromCharCode = String.fromCharCode,
                        cb_utob = function(t) {
                            if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? fromCharCode(192 | e >>> 6) + fromCharCode(128 | 63 & e) : fromCharCode(224 | e >>> 12 & 15) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e);
                            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                            return fromCharCode(240 | e >>> 18 & 7) + fromCharCode(128 | e >>> 12 & 63) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e)
                        },
                        re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        utob = function(t) {
                            return t.replace(re_utob, cb_utob)
                        },
                        cb_encode = function(t) {
                            var e = [0, 2, 1][t.length % 3],
                                n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                            return [b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), e >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), e >= 1 ? "=" : b64chars.charAt(63 & n)].join("")
                        },
                        btoa = global.btoa ? function(t) {
                            return global.btoa(t)
                        } : function(t) {
                            return t.replace(/[\s\S]{1,3}/g, cb_encode)
                        },
                        _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(t) {
                            return (t.constructor === buffer.constructor ? t : buffer.from(t)).toString("base64")
                        } : function(t) {
                            return (t.constructor === buffer.constructor ? t : new buffer(t)).toString("base64")
                        } : function(t) {
                            return btoa(utob(t))
                        },
                        encode = function(t, e) {
                            return e ? _encode(String(t)).replace(/[+\/]/g, (function(t) {
                                return "+" == t ? "-" : "_"
                            })).replace(/=/g, "") : _encode(String(t))
                        },
                        encodeURI = function(t) {
                            return encode(t, !0)
                        },
                        re_btou = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
                        cb_btou = function(t) {
                            switch (t.length) {
                                case 4:
                                    var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                                    return fromCharCode(55296 + (e >>> 10)) + fromCharCode(56320 + (1023 & e));
                                case 3:
                                    return fromCharCode((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                                default:
                                    return fromCharCode((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                            }
                        },
                        btou = function(t) {
                            return t.replace(re_btou, cb_btou)
                        },
                        cb_decode = function(t) {
                            var e = t.length,
                                n = e % 4,
                                r = (e > 0 ? b64tab[t.charAt(0)] << 18 : 0) | (e > 1 ? b64tab[t.charAt(1)] << 12 : 0) | (e > 2 ? b64tab[t.charAt(2)] << 6 : 0) | (e > 3 ? b64tab[t.charAt(3)] : 0),
                                o = [fromCharCode(r >>> 16), fromCharCode(r >>> 8 & 255), fromCharCode(255 & r)];
                            return o.length -= [0, 0, 2, 1][n], o.join("")
                        },
                        _atob = global.atob ? function(t) {
                            return global.atob(t)
                        } : function(t) {
                            return t.replace(/\S{1,4}/g, cb_decode)
                        },
                        atob = function(t) {
                            return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        },
                        _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(t) {
                            return (t.constructor === buffer.constructor ? t : buffer.from(t, "base64")).toString()
                        } : function(t) {
                            return (t.constructor === buffer.constructor ? t : new buffer(t, "base64")).toString()
                        } : function(t) {
                            return btou(_atob(t))
                        },
                        decode = function(t) {
                            return _decode(String(t).replace(/[-_]/g, (function(t) {
                                return "-" == t ? "+" : "/"
                            })).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        },
                        noConflict = function() {
                            var t = global.Base64;
                            return global.Base64 = _Base64, t
                        };
                    if (global.Base64 = {
                            VERSION: version,
                            atob: atob,
                            btoa: btoa,
                            fromBase64: decode,
                            toBase64: encode,
                            utob: utob,
                            encode: encode,
                            encodeURI: encodeURI,
                            btou: btou,
                            decode: decode,
                            noConflict: noConflict,
                            __buffer__: buffer
                        }, "function" == typeof Object.defineProperty) {
                        var noEnum = function(t) {
                            return {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        };
                        global.Base64.extendString = function() {
                            Object.defineProperty(String.prototype, "fromBase64", noEnum((function() {
                                return decode(this)
                            }))), Object.defineProperty(String.prototype, "toBase64", noEnum((function(t) {
                                return encode(this, t)
                            }))), Object.defineProperty(String.prototype, "toBase64URI", noEnum((function() {
                                return encode(this, !0)
                            })))
                        }
                    }
                    return global.Meteor && (Base64 = global.Base64), module.exports ? module.exports.Base64 = global.Base64 : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return global.Base64
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), {
                        Base64: global.Base64
                    }
                }, module.exports = e(t)
            }).call(this, __webpack_require__("pCvA"))
        },
        vBUX: function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    return {
                        formatError: function(e) {
                            var n = "object" == typeof e && null !== e && (e.stack || e.message) ? e.stack || e.message : t(e);
                            return e instanceof Error ? n : n + " (WARNING: non-Error used)"
                        },
                        formatObject: t,
                        tryStringify: e
                    };

                    function t(t) {
                        var n = String(t);
                        return "[object Object]" === n && "undefined" != typeof JSON && (n = e(t, n)), n
                    }

                    function e(t, e) {
                        try {
                            return JSON.stringify(t)
                        } catch (t) {
                            return e
                        }
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        w7gO: function(t, e, n) {
            var r = n("sOO9"),
                o = n("so/P"),
                a = t.exports;
            for (var i in r) r.hasOwnProperty(i) && (a[i] = r[i]);

            function s(t) {
                if ("string" == typeof t && (t = o.parse(t)), t.protocol || (t.protocol = "https:"), "https:" !== t.protocol) throw new Error('Protocol "' + t.protocol + '" not supported. Expected "https:"');
                return t
            }
            a.request = function(t, e) {
                return t = s(t), r.request.call(this, t, e)
            }, a.get = function(t, e) {
                return t = s(t), r.get.call(this, t, e)
            }
        },
        wfEq: function(t, e) {
            "function" == typeof Object.create ? t.exports = function(t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : t.exports = function(t, e) {
                if (e) {
                    t.super_ = e;
                    var n = function() {};
                    n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                }
            }
        },
        "x/f/": function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    return function(t) {
                        return t.prototype.fold = function(e, n) {
                            var r = this._beget();
                            return this._handler.fold((function(n, r, o) {
                                t._handler(n).fold((function(t, n, r) {
                                    r.resolve(e.call(this, n, t))
                                }), r, this, o)
                            }), n, r._handler.receiver, r._handler), r
                        }, t
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        xTpk: function(t, e, n) {
            "use strict";
            var r = n("upWy");

            function o(t, e) {
                t.emit("error", e)
            }
            t.exports = {
                destroy: function(t, e) {
                    var n = this,
                        a = this._readableState && this._readableState.destroyed,
                        i = this._writableState && this._writableState.destroyed;
                    return a || i ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || r.nextTick(o, this, t), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, (function(t) {
                        !e && t ? (r.nextTick(o, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t)
                    })), this)
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                }
            }
        },
        xtUC: function(t, e, n) {
            (function(r) {
                var o;
                ! function(a) {
                    "use strict";
                    void 0 === (o = function(t) {
                        var e, o = "undefined" != typeof setTimeout && setTimeout,
                            a = function(t, e) {
                                return setTimeout(t, e)
                            },
                            i = function(t) {
                                return clearTimeout(t)
                            },
                            s = function(t) {
                                return o(t, 0)
                            };
                        if (void 0 !== r && "[object process]" === Object.prototype.toString.call(r)) s = function(t) {
                            return r.nextTick(t)
                        };
                        else if (e = "undefined" != typeof MutationObserver && MutationObserver || "undefined" != typeof WebKitMutationObserver && WebKitMutationObserver) s = function(t) {
                            var e, n = document.createTextNode("");
                            new t((function() {
                                var t = e;
                                e = void 0, t()
                            })).observe(n, {
                                characterData: !0
                            });
                            var r = 0;
                            return function(t) {
                                e = t, n.data = r ^= 1
                            }
                        }(e);
                        else if (!o) {
                            var c = n(10);
                            a = function(t, e) {
                                return c.setTimer(e, t)
                            }, i = c.cancelTimer, s = c.runOnLoop || c.runOnContext
                        }
                        return {
                            setTimer: a,
                            clearTimer: i,
                            asap: s
                        }
                    }.call(e, n, e, t)) || (t.exports = o)
                }(n("Z66Z"))
            }).call(this, n("5IsQ"))
        },
        "yh4/": function(t, e, n) {
            var r;
            ! function(o) {
                "use strict";
                void 0 === (r = function() {
                    return function(t) {
                        return t.prototype.progress = function(t) {
                            return this.then(void 0, void 0, t)
                        }, t
                    }
                }.call(e, n, e, t)) || (t.exports = r)
            }(n("Z66Z"))
        },
        zE2g: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t, e) {
                if (t < e[0]) return e[0];
                if (t > e[e.length - 1]) return e[e.length - 1];
                for (var n, r = 0, o = e.length - 1; o - r > 1;) e[n = Math.floor((r + o) / 2)] < t ? r = n : o = n;
                return t - e[r] < e[o] - t ? e[r] : e[o]
            }
        },
        zL1T: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = (r = n("s+Xr")) && r.__esModule ? r : {
                default: r
            };
            e.default = {
                pauseVideo: {
                    acceptableStates: [o.default.ENDED, o.default.PAUSED],
                    stateChangeRequired: !1
                },
                playVideo: {
                    acceptableStates: [o.default.ENDED, o.default.PLAYING],
                    stateChangeRequired: !1
                },
                seekTo: {
                    acceptableStates: [o.default.ENDED, o.default.PLAYING, o.default.PAUSED],
                    stateChangeRequired: !0,
                    timeout: 3e3
                }
            }, t.exports = e.default
        },
        zSzO: function(t, e, n) {
            "use strict";

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PublicConfigAPI = e.default = void 0;
            var o = {
                    warnings: {
                        fallbackImage: !0,
                        sizesAttribute: !0,
                        invalidARFormat: !0
                    },
                    queryDelim: null,
                    debugUrl: !1,
                    mockFormat: !1
                },
                a = function(t, e) {
                    t && t in o.warnings && (o.warnings[t] = e)
                },
                i = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, n;
                    return e = t, n = [{
                        key: "disableWarning",
                        value: function(t) {
                            a(t, !1)
                        }
                    }, {
                        key: "enableWarning",
                        value: function(t) {
                            a(t, !0)
                        }
                    }, {
                        key: "setQueryDelim",
                        value: function(t) {
                            ! function(t) {
                                o.queryDelim = t
                            }(t)
                        }
                    }, {
                        key: "setDebugUrl",
                        value: function(t) {
                            ! function(t) {
                                o.debugUrl = t
                            }(t)
                        }
                    }, {
                        key: "setMockFormat",
                        value: function(t) {
                            ! function(t) {
                                o.mockFormat = t
                            }(t)
                        }
                    }], null && r(e.prototype, null), n && r(e, n), t
                }();
            e.PublicConfigAPI = i;
            var s = o;
            e.default = s
        },
        zWrT: function(t, e, n) {
            var r = n("T/1i"),
                o = n("0HwX").f;
            n("qNvu")("getOwnPropertyDescriptor", (function() {
                return function(t, e) {
                    return o(r(t), e)
                }
            }))
        },
        zkTx: function(t, e, n) {
            "use strict";
            (function(t) {
                var r = n("KlUR"),
                    o = n("FaXh"),
                    a = n("kah5");

                function i() {
                    return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function s(t, e) {
                    if (i() < e) throw new RangeError("Invalid typed array length");
                    return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t
                }

                function c(t, e, n) {
                    if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                        return l(this, t)
                    }
                    return p(this, t, e, n)
                }

                function p(t, e, n, r) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = _(t, e), t
                    }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                        if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                        var r = 0 | d(e, n),
                            o = (t = s(t, r)).write(e, n);
                        return o !== r && (t = t.slice(0, o)), t
                    }(t, e, n) : function(t, e) {
                        if (c.isBuffer(e)) {
                            var n = 0 | f(e.length);
                            return 0 === (t = s(t, n)).length ? t : (e.copy(t, 0, 0, n), t)
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? s(t, 0) : _(t, e);
                            if ("Buffer" === e.type && a(e.data)) return _(t, e.data)
                        }
                        var r;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }

                function u(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function l(t, e) {
                    if (u(e), t = s(t, e < 0 ? 0 : 0 | f(e)), !c.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < e; ++n) t[n] = 0;
                    return t
                }

                function _(t, e) {
                    var n = e.length < 0 ? 0 : 0 | f(e.length);
                    t = s(t, n);
                    for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                    return t
                }

                function f(t) {
                    if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                    return 0 | t
                }

                function d(t, e) {
                    if (c.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n) return 0;
                    for (var r = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return q(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return H(t).length;
                        default:
                            if (r) return q(t).length;
                            e = ("" + e).toLowerCase(), r = !0
                    }
                }

                function h(t, e, n) {
                    var r = t[e];
                    t[e] = t[n], t[n] = r
                }

                function A(t, e, n, r, o) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                        if (o) return -1;
                        n = t.length - 1
                    } else if (n < 0) {
                        if (!o) return -1;
                        n = 0
                    }
                    if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, n, r, o);
                    if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : g(t, [e], n, r, o);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function g(t, e, n, r, o) {
                    var a, i = 1,
                        s = t.length,
                        c = e.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        i = 2, s /= 2, c /= 2, n /= 2
                    }

                    function p(t, e) {
                        return 1 === i ? t[e] : t.readUInt16BE(e * i)
                    }
                    if (o) {
                        var u = -1;
                        for (a = n; a < s; a++)
                            if (p(t, a) === p(e, -1 === u ? 0 : a - u)) {
                                if (-1 === u && (u = a), a - u + 1 === c) return u * i
                            } else -1 !== u && (a -= a - u), u = -1
                    } else
                        for (n + c > s && (n = s - c), a = n; a >= 0; a--) {
                            for (var l = !0, _ = 0; _ < c; _++)
                                if (p(t, a + _) !== p(e, _)) {
                                    l = !1;
                                    break
                                }
                            if (l) return a
                        }
                    return -1
                }

                function m(t, e, n, r) {
                    n = Number(n) || 0;
                    var o = t.length - n;
                    r ? (r = Number(r)) > o && (r = o) : r = o;
                    var a = e.length;
                    if (a % 2 != 0) throw new TypeError("Invalid hex string");
                    r > a / 2 && (r = a / 2);
                    for (var i = 0; i < r; ++i) {
                        var s = parseInt(e.substr(2 * i, 2), 16);
                        if (isNaN(s)) return i;
                        t[n + i] = s
                    }
                    return i
                }

                function w(t, e, n, r) {
                    return U(q(e, t.length - n), t, n, r)
                }

                function b(t, e, n, r) {
                    return U(function(t) {
                        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                        return e
                    }(e), t, n, r)
                }

                function y(t, e, n, r) {
                    return b(t, e, n, r)
                }

                function v(t, e, n, r) {
                    return U(H(e), t, n, r)
                }

                function x(t, e, n, r) {
                    return U(function(t, e) {
                        for (var n, r, o, a = [], i = 0; i < t.length && !((e -= 2) < 0); ++i) r = (n = t.charCodeAt(i)) >> 8, o = n % 256, a.push(o), a.push(r);
                        return a
                    }(e, t.length - n), t, n, r)
                }

                function E(t, e, n) {
                    return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                }

                function j(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var r = [], o = e; o < n;) {
                        var a, i, s, c, p = t[o],
                            u = null,
                            l = p > 239 ? 4 : p > 223 ? 3 : p > 191 ? 2 : 1;
                        if (o + l <= n) switch (l) {
                            case 1:
                                p < 128 && (u = p);
                                break;
                            case 2:
                                128 == (192 & (a = t[o + 1])) && (c = (31 & p) << 6 | 63 & a) > 127 && (u = c);
                                break;
                            case 3:
                                a = t[o + 1], i = t[o + 2], 128 == (192 & a) && 128 == (192 & i) && (c = (15 & p) << 12 | (63 & a) << 6 | 63 & i) > 2047 && (c < 55296 || c > 57343) && (u = c);
                                break;
                            case 4:
                                a = t[o + 1], i = t[o + 2], s = t[o + 3], 128 == (192 & a) && 128 == (192 & i) && 128 == (192 & s) && (c = (15 & p) << 18 | (63 & a) << 12 | (63 & i) << 6 | 63 & s) > 65535 && c < 1114112 && (u = c)
                        }
                        null === u ? (u = 65533, l = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), o += l
                    }
                    return function(t) {
                        var e = t.length;
                        if (e <= S) return String.fromCharCode.apply(String, t);
                        for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += S));
                        return n
                    }(r)
                }
                e.Buffer = c, e.SlowBuffer = function(t) {
                    return +t != t && (t = 0), c.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }(), e.kMaxLength = i(), c.poolSize = 8192, c._augment = function(t) {
                    return t.__proto__ = c.prototype, t
                }, c.from = function(t, e, n) {
                    return p(null, t, e, n)
                }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                    value: null,
                    configurable: !0
                })), c.alloc = function(t, e, n) {
                    return function(t, e, n, r) {
                        return u(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof r ? s(t, e).fill(n, r) : s(t, e).fill(n) : s(t, e)
                    }(null, t, e, n)
                }, c.allocUnsafe = function(t) {
                    return l(null, t)
                }, c.allocUnsafeSlow = function(t) {
                    return l(null, t)
                }, c.isBuffer = function(t) {
                    return !(null == t || !t._isBuffer)
                }, c.compare = function(t, e) {
                    if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var n = t.length, r = e.length, o = 0, a = Math.min(n, r); o < a; ++o)
                        if (t[o] !== e[o]) {
                            n = t[o], r = e[o];
                            break
                        }
                    return n < r ? -1 : r < n ? 1 : 0
                }, c.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, c.concat = function(t, e) {
                    if (!a(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return c.alloc(0);
                    var n;
                    if (void 0 === e)
                        for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                    var r = c.allocUnsafe(e),
                        o = 0;
                    for (n = 0; n < t.length; ++n) {
                        var i = t[n];
                        if (!c.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                        i.copy(r, o), o += i.length
                    }
                    return r
                }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) h(this, e, e + 1);
                    return this
                }, c.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) h(this, e, e + 3), h(this, e + 1, e + 2);
                    return this
                }, c.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) h(this, e, e + 7), h(this, e + 1, e + 6), h(this, e + 2, e + 5), h(this, e + 3, e + 4);
                    return this
                }, c.prototype.toString = function() {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? j(this, 0, t) : function(t, e, n) {
                        var r = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (e >>>= 0)) return "";
                        for (t || (t = "utf8");;) switch (t) {
                            case "hex":
                                return k(this, e, n);
                            case "utf8":
                            case "utf-8":
                                return j(this, e, n);
                            case "ascii":
                                return L(this, e, n);
                            case "latin1":
                            case "binary":
                                return I(this, e, n);
                            case "base64":
                                return E(this, e, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return C(this, e, n);
                            default:
                                if (r) throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), r = !0
                        }
                    }.apply(this, arguments)
                }, c.prototype.equals = function(t) {
                    if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === c.compare(this, t)
                }, c.prototype.inspect = function() {
                    var t = "",
                        n = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
                }, c.prototype.compare = function(t, e, n, r, o) {
                    if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                    if (r >= o && e >= n) return 0;
                    if (r >= o) return -1;
                    if (e >= n) return 1;
                    if (this === t) return 0;
                    for (var a = (o >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (e >>>= 0), s = Math.min(a, i), p = this.slice(r, o), u = t.slice(e, n), l = 0; l < s; ++l)
                        if (p[l] !== u[l]) {
                            a = p[l], i = u[l];
                            break
                        }
                    return a < i ? -1 : i < a ? 1 : 0
                }, c.prototype.includes = function(t, e, n) {
                    return -1 !== this.indexOf(t, e, n)
                }, c.prototype.indexOf = function(t, e, n) {
                    return A(this, t, e, n, !0)
                }, c.prototype.lastIndexOf = function(t, e, n) {
                    return A(this, t, e, n, !1)
                }, c.prototype.write = function(t, e, n, r) {
                    if (void 0 === e) r = "utf8", n = this.length, e = 0;
                    else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                    else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var o = this.length - e;
                    if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var a = !1;;) switch (r) {
                        case "hex":
                            return m(this, t, e, n);
                        case "utf8":
                        case "utf-8":
                            return w(this, t, e, n);
                        case "ascii":
                            return b(this, t, e, n);
                        case "latin1":
                        case "binary":
                            return y(this, t, e, n);
                        case "base64":
                            return v(this, t, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return x(this, t, e, n);
                        default:
                            if (a) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), a = !0
                    }
                }, c.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var S = 4096;

                function L(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                    return r
                }

                function I(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                    return r
                }

                function k(t, e, n) {
                    var r = t.length;
                    (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var o = "", a = e; a < n; ++a) o += N(t[a]);
                    return o
                }

                function C(t, e, n) {
                    for (var r = t.slice(e, n), o = "", a = 0; a < r.length; a += 2) o += String.fromCharCode(r[a] + 256 * r[a + 1]);
                    return o
                }

                function B(t, e, n) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function O(t, e, n, r, o, a) {
                    if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > o || e < a) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > t.length) throw new RangeError("Index out of range")
                }

                function T(t, e, n, r) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var o = 0, a = Math.min(t.length - n, 2); o < a; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
                }

                function R(t, e, n, r) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var o = 0, a = Math.min(t.length - n, 4); o < a; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
                }

                function P(t, e, n, r, o, a) {
                    if (n + r > t.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function Q(t, e, n, r, a) {
                    return a || P(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4
                }

                function M(t, e, n, r, a) {
                    return a || P(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8
                }
                c.prototype.slice = function(t, e) {
                    var n, r = this.length;
                    if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), c.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = c.prototype;
                    else {
                        var o = e - t;
                        n = new c(o, void 0);
                        for (var a = 0; a < o; ++a) n[a] = this[a + t]
                    }
                    return n
                }, c.prototype.readUIntLE = function(t, e, n) {
                    t |= 0, e |= 0, n || B(t, e, this.length);
                    for (var r = this[t], o = 1, a = 0; ++a < e && (o *= 256);) r += this[t + a] * o;
                    return r
                }, c.prototype.readUIntBE = function(t, e, n) {
                    t |= 0, e |= 0, n || B(t, e, this.length);
                    for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o;
                    return r
                }, c.prototype.readUInt8 = function(t, e) {
                    return e || B(t, 1, this.length), this[t]
                }, c.prototype.readUInt16LE = function(t, e) {
                    return e || B(t, 2, this.length), this[t] | this[t + 1] << 8
                }, c.prototype.readUInt16BE = function(t, e) {
                    return e || B(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, c.prototype.readUInt32LE = function(t, e) {
                    return e || B(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, c.prototype.readUInt32BE = function(t, e) {
                    return e || B(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, c.prototype.readIntLE = function(t, e, n) {
                    t |= 0, e |= 0, n || B(t, e, this.length);
                    for (var r = this[t], o = 1, a = 0; ++a < e && (o *= 256);) r += this[t + a] * o;
                    return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r
                }, c.prototype.readIntBE = function(t, e, n) {
                    t |= 0, e |= 0, n || B(t, e, this.length);
                    for (var r = e, o = 1, a = this[t + --r]; r > 0 && (o *= 256);) a += this[t + --r] * o;
                    return a >= (o *= 128) && (a -= Math.pow(2, 8 * e)), a
                }, c.prototype.readInt8 = function(t, e) {
                    return e || B(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, c.prototype.readInt16LE = function(t, e) {
                    e || B(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt16BE = function(t, e) {
                    e || B(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt32LE = function(t, e) {
                    return e || B(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, c.prototype.readInt32BE = function(t, e) {
                    return e || B(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, c.prototype.readFloatLE = function(t, e) {
                    return e || B(t, 4, this.length), o.read(this, t, !0, 23, 4)
                }, c.prototype.readFloatBE = function(t, e) {
                    return e || B(t, 4, this.length), o.read(this, t, !1, 23, 4)
                }, c.prototype.readDoubleLE = function(t, e) {
                    return e || B(t, 8, this.length), o.read(this, t, !0, 52, 8)
                }, c.prototype.readDoubleBE = function(t, e) {
                    return e || B(t, 8, this.length), o.read(this, t, !1, 52, 8)
                }, c.prototype.writeUIntLE = function(t, e, n, r) {
                    t = +t, e |= 0, n |= 0, r || O(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++a < n && (o *= 256);) this[e + a] = t / o & 255;
                    return e + n
                }, c.prototype.writeUIntBE = function(t, e, n, r) {
                    t = +t, e |= 0, n |= 0, r || O(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = n - 1,
                        a = 1;
                    for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) this[e + o] = t / a & 255;
                    return e + n
                }, c.prototype.writeUInt8 = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                }, c.prototype.writeUInt16LE = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : T(this, t, e, !0), e + 2
                }, c.prototype.writeUInt16BE = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : T(this, t, e, !1), e + 2
                }, c.prototype.writeUInt32LE = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : R(this, t, e, !0), e + 4
                }, c.prototype.writeUInt32BE = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1), e + 4
                }, c.prototype.writeIntLE = function(t, e, n, r) {
                    if (t = +t, e |= 0, !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        O(this, t, e, n, o - 1, -o)
                    }
                    var a = 0,
                        i = 1,
                        s = 0;
                    for (this[e] = 255 & t; ++a < n && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1), this[e + a] = (t / i >> 0) - s & 255;
                    return e + n
                }, c.prototype.writeIntBE = function(t, e, n, r) {
                    if (t = +t, e |= 0, !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        O(this, t, e, n, o - 1, -o)
                    }
                    var a = n - 1,
                        i = 1,
                        s = 0;
                    for (this[e + a] = 255 & t; --a >= 0 && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1), this[e + a] = (t / i >> 0) - s & 255;
                    return e + n
                }, c.prototype.writeInt8 = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, c.prototype.writeInt16LE = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : T(this, t, e, !0), e + 2
                }, c.prototype.writeInt16BE = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : T(this, t, e, !1), e + 2
                }, c.prototype.writeInt32LE = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : R(this, t, e, !0), e + 4
                }, c.prototype.writeInt32BE = function(t, e, n) {
                    return t = +t, e |= 0, n || O(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1), e + 4
                }, c.prototype.writeFloatLE = function(t, e, n) {
                    return Q(this, t, e, !0, n)
                }, c.prototype.writeFloatBE = function(t, e, n) {
                    return Q(this, t, e, !1, n)
                }, c.prototype.writeDoubleLE = function(t, e, n) {
                    return M(this, t, e, !0, n)
                }, c.prototype.writeDoubleBE = function(t, e, n) {
                    return M(this, t, e, !1, n)
                }, c.prototype.copy = function(t, e, n, r) {
                    if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                    var o, a = r - n;
                    if (this === t && n < e && e < r)
                        for (o = a - 1; o >= 0; --o) t[o + e] = this[o + n];
                    else if (a < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < a; ++o) t[o + e] = this[o + n];
                    else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
                    return a
                }, c.prototype.fill = function(t, e, n, r) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                            var o = t.charCodeAt(0);
                            o < 256 && (t = o)
                        }
                        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                    } else "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                    if (n <= e) return this;
                    var a;
                    if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                        for (a = e; a < n; ++a) this[a] = t;
                    else {
                        var i = c.isBuffer(t) ? t : q(new c(t, r).toString()),
                            s = i.length;
                        for (a = 0; a < n - e; ++a) this[a + e] = i[a % s]
                    }
                    return this
                };
                var D = /[^+\/0-9A-Za-z-_]/g;

                function N(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function q(t, e) {
                    var n;
                    e = e || 1 / 0;
                    for (var r = t.length, o = null, a = [], i = 0; i < r; ++i) {
                        if ((n = t.charCodeAt(i)) > 55295 && n < 57344) {
                            if (!o) {
                                if (n > 56319) {
                                    (e -= 3) > -1 && a.push(239, 191, 189);
                                    continue
                                }
                                if (i + 1 === r) {
                                    (e -= 3) > -1 && a.push(239, 191, 189);
                                    continue
                                }
                                o = n;
                                continue
                            }
                            if (n < 56320) {
                                (e -= 3) > -1 && a.push(239, 191, 189), o = n;
                                continue
                            }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else o && (e -= 3) > -1 && a.push(239, 191, 189);
                        if (o = null, n < 128) {
                            if ((e -= 1) < 0) break;
                            a.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0) break;
                            a.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0) break;
                            a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return a
                }

                function H(t) {
                    return r.toByteArray(function(t) {
                        if ((t = function(t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                            }(t).replace(D, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function U(t, e, n, r) {
                    for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                    return o
                }
            }).call(this, n("pCvA"))
        }
    },
    [
        ["RFRr", "5d41", "9da1", "ad9d"]
    ]
]);
