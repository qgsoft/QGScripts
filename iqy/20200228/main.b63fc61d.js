(function (e) {
    function t(t) {
        for (var r, o, c = t[0], u = t[1], s = t[2], l = 0, p = []; l < c.length; l++) o = c[l], i[o] && p.push(i[o][0]), i[o] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        d && d(t);
        while (p.length) p.shift()();
        return a.push.apply(a, s || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
                var u = n[o];
                0 !== i[u] && (r = !1)
            }
            r && (a.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var r = {},
        i = {
            main: 0
        },
        a = [];

    function o(e) {
        return c.p + "js/" + ({
            appaca: "appaca",
            "chunk-channel": "chunk-channel",
            "chunk-common": "chunk-common",
            app: "app",
            appae: "appae",
            appcad: "appcad",
            appccj: "appccj",
            appcd: "appcd",
            appcds: "appcds",
            appcedu: "appcedu",
            appcf: "appcf",
            appcg: "appcg",
            appch: "appch",
            appcjk: "appcjk",
            appcjlp: "appcjlp",
            appckj: "appckj",
            appcly: "appcly",
            appcmy: "appcmy",
            appcph: "appcph",
            appcqc: "appcqc",
            appcqycp: "appcqycp",
            appcs: "appcs",
            appcsh: "appcsh",
            appcss: "appcss",
            appctkx: "appctkx",
            appcwdy: "appcwdy",
            appcyc: "appcyc",
            appcyl: "appcyl",
            appcyx: "appcyx",
            appcyy: "appcyy",
            appczx: "appczx",
            appczy: "appczy",
            applv: "applv",
            appmil: "appmil",
            appty: "appty",
            appvip: "appvip",
            "chunk-play": "chunk-play",
            "chunk-video": "chunk-video",
            appcapd: "appcapd",
            app404: "app404",
            appa: "appa",
            appb: "appb",
            appcl: "appcl",
            appcr: "appcr",
            appf: "appf",
            apppi: "apppi",
            apps: "apps",
            appsa: "appsa",
            appsal: "appsal",
            appsech: "appsech",
            appsmv: "appsmv",
            appsq: "appsq",
            apptl: "apptl",
            apptw: "apptw",
            appua: "appua",
            appuac: "appuac",
            appuamn: "appuamn",
            appucr: "appucr",
            appucu: "appucu",
            appuf: "appuf",
            appufb: "appufb",
            appufl: "appufl",
            appufv: "appufv",
            appuh: "appuh",
            appui: "appui",
            appul: "appul",
            appup: "appup",
            appur: "appur",
            appus: "appus",
            appusic: "appusic",
            appusp: "appusp",
            appvce: "appvce",
            appvcu: "appvcu",
            appvt: "appvt",
            appyl: "appyl",
            appP: "appP",
            appplist: "appplist",
            appbk: "appbk",
            appchot: "appchot",
            "chunk-security": "chunk-security",
            appsecbm: "appsecbm",
            appseccc: "appseccc",
            appseccmi: "appseccmi",
            appsecda: "appsecda",
            appsecdac: "appsecdac",
            appsecdae: "appsecdae",
            appsecdelpro: "appsecdelpro",
            appsecdsuc: "appsecdsuc",
            appsecfp: "appsecfp",
            appsecfpe: "appsecfpe",
            appseclr: "appseclr",
            appsecmailsms: "appsecmailsms",
            appsecphonesms: "appsecphonesms",
            appsecqac: "appsecqac",
            appsecubp: "appsecubp",
            appsecucp: "appsecucp",
            appsecucpi: "appsecucpi",
            appps: "appps",
            appPK: "appPK",
            appPb: "appPb",
            appPl: "appPl",
            appPm: "appPm",
            appPs: "appPs",
            appPw: "appPw",
            appVc: "appVc",
            appPslt: "appPslt",
            appPllt: "appPllt"
        }[e] || e) + "." + {
            appaca: "d8998b1e",
            "chunk-channel": "58e1bd4e",
            "chunk-common": "abc417a0",
            app: "16bf9969",
            appae: "48b1b9ea",
            appcad: "53c76c9e",
            appccj: "96f79ead",
            appcd: "29e748e6",
            appcds: "1c72e0f4",
            appcedu: "8f978b57",
            appcf: "4ac33df8",
            appcg: "e40b57d4",
            appch: "3e350759",
            appcjk: "1ee279f0",
            appcjlp: "55c77472",
            appckj: "300ce588",
            appcly: "0622dc4c",
            appcmy: "90a1dba9",
            appcph: "bec99f54",
            appcqc: "c1466291",
            appcqycp: "be066b96",
            appcs: "dfcda97b",
            appcsh: "75297f1a",
            appcss: "f790879e",
            appctkx: "69bad805",
            appcwdy: "3bd2ae1f",
            appcyc: "c24f9082",
            appcyl: "084f39e9",
            appcyx: "f566ab52",
            appcyy: "3f384dcb",
            appczx: "d8a98533",
            appczy: "2a100735",
            applv: "e528c47d",
            appmil: "76ea9b63",
            appty: "743edcac",
            appvip: "08986520",
            "chunk-play": "c7805b49",
            "chunk-video": "e658e905",
            appcapd: "ba362e41",
            app404: "4baa9187",
            appa: "d8de8c4b",
            appb: "c4970b15",
            appcl: "02c80edd",
            appcr: "a7e95460",
            appf: "1a06b631",
            apppi: "073b8356",
            apps: "06e2fd08",
            appsa: "87d3058c",
            appsal: "29e0a18f",
            appsech: "be07e211",
            appsmv: "f31c7534",
            appsq: "782ae50a",
            apptl: "4181e455",
            apptw: "977f49ff",
            appua: "21499ab5",
            appuac: "28d302bd",
            appuamn: "5cb5e346",
            appucr: "817f6b2d",
            appucu: "e00194b2",
            appuf: "fa9bb460",
            appufb: "53431040",
            appufl: "4dd5e857",
            appufv: "386635f8",
            appuh: "a1e71e05",
            appui: "b08c1e7c",
            appul: "fc90738f",
            appup: "958df155",
            appur: "3355c25a",
            appus: "f1b918e9",
            appusic: "d4e44d5f",
            appusp: "be6c5db0",
            appvce: "eb3704b0",
            appvcu: "9b92eff6",
            appvt: "ae1104dc",
            appyl: "1acd0942",
            "chunk-2d0a38f9": "b111a162",
            "chunk-2d0b6ebd": "4884fa71",
            "chunk-2d0c192a": "5028eb5b",
            "chunk-2d0e1764": "35b19a52",
            "chunk-2d21392b": "198b6d2c",
            "chunk-2d21e566": "18274c60",
            "chunk-2d21f0fb": "2576fff8",
            "chunk-2d2244f4": "c31b33c5",
            "chunk-2d23066a": "977079aa",
            "chunk-2d237b11": "7a6664ff",
            appP: "01def64e",
            appplist: "26e2cc5f",
            appbk: "e39dca1e",
            appchot: "f1982454",
            "chunk-security": "4645e36b",
            appsecbm: "d3edc4db",
            appseccc: "17be87d2",
            appseccmi: "87b7c089",
            appsecda: "cb31ed39",
            appsecdac: "4180dd7d",
            appsecdae: "495493b0",
            appsecdelpro: "f9e2e6ea",
            appsecdsuc: "896acd1f",
            appsecfp: "c254ed6b",
            appsecfpe: "22e250b9",
            appseclr: "a103702d",
            appsecmailsms: "9fdd1e51",
            appsecphonesms: "04276495",
            appsecqac: "6bc3498e",
            appsecubp: "e3db54ec",
            appsecucp: "6770c12e",
            appsecucpi: "711b346d",
            appps: "2a072ae6",
            appPK: "a785af38",
            appPb: "d3cf422f",
            appPl: "3e12e201",
            appPm: "4c10721e",
            appPs: "a6b1a078",
            appPw: "c1479328",
            appVc: "080a12d6",
            appPslt: "f98c7c93",
            appPllt: "17a5b074"
        }[e] + ".js"
    }

    function c(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function (e) {
        var t = [],
            n = i[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise(function (t, r) {
                    n = i[e] = [t, r]
                });
                t.push(n[2] = r);
                var a, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = o(e), a = function (t) {
                    u.onerror = u.onload = null, clearTimeout(s);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src,
                                o = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + a + ")");
                            o.type = r, o.request = a, n[1](o)
                        }
                        i[e] = void 0
                    }
                };
                var s = setTimeout(function () {
                    a({
                        type: "timeout",
                        target: u
                    })
                }, 12e4);
                u.onerror = u.onload = a, document.head.appendChild(u)
            }
        return Promise.all(t)
    }, c.m = e, c.c = r, c.d = function (e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, c.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var r in e) c.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "//static.iqiyi.com/js/html5/js/app/", c.oe = function (e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var l = 0; l < u.length; l++) t(u[l]);
    var d = s;
    a.push(["dae0", "chunk-vendors"]), n()
})({
    "05d8": function (e, t, n) {
        "use strict";
        var r, i, a = n("3b2f"),
            o = n("8f8a"),
            c = {
                name: "GlobalToast",
                mixins: [o["a"]],
                data: function () {
                    return {
                        show: !1,
                        text: "",
                        timer: null
                    }
                }, methods: {
                    bindEvents: function () {
                        var e = this;
                        this.$on("show", function (t) {
                            var n = t.text,
                                r = t.timeout,
                                i = void 0 === r ? 2e3 : r;
                            n && (e.text = n, e.$nextTick(function () {
                                clearTimeout(e.timer), e.show = !0, e.timer = setTimeout(function () {
                                    e.show = !1
                                }, i)
                            }))
                        }), this.$on("hide", function () {
                            e.show = !1
                        })
                    }
                }, render: function (e) {
                    return this.show ? e(a["a"], {
                        props: {
                            text: this.text,
                            customStyle: {
                                top: "55%"
                            }
                        }
                    }) : null
                }
            },
            u = c,
            s = n("2877"),
            l = Object(s["a"])(u, r, i, !1, null, null, null);
        t["a"] = l.exports
    }, "061a": function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("b2e7");
        Object(r["R"])()
    }, "0fa5": function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("795b"),
            i = n.n(r),
            a = n("7279"),
            o = n.n(a),
            c = n("8296"),
            u = Object(c["K"])("performance", {
                feedback: !0
            });

        function s() {
            return new i.a(function (e) {
                window.addEventListener("load", function (t) {
                    e()
                }), setTimeout(function () {
                    e()
                }, 7e3)
            })
        }

        function l() {
            var e = o.a.timing,
                t = {
                    responseStart: e.responseStart - e.navigationStart,
                    domInteractive: e.domInteractive - e.navigationStart,
                    domComplete: e.domComplete - e.navigationStart
                };
            return t
        }
        s().then(function () {
            u.log(l())
        })
    }, "11ad": function (e, t, n) {
        "use strict";
        n.d(t, "p", function () {
            return h
        }), n.d(t, "z", function () {
            return m
        }), n.d(t, "A", function () {
            return b
        }), n.d(t, "y", function () {
            return y
        }), n.d(t, "B", function () {
            return k
        }), n.d(t, "g", function () {
            return _
        }), n.d(t, "i", function () {
            return x
        }), n.d(t, "a", function () {
            return N
        }), n.d(t, "e", function () {
            return I
        }), n.d(t, "r", function () {
            return O
        }), n.d(t, "s", function () {
            return j
        }), n.d(t, "d", function () {
            return C
        }), n.d(t, "h", function () {
            return A
        }), n.d(t, "j", function () {
            return S
        }), n.d(t, "u", function () {
            return E
        }), n.d(t, "t", function () {
            return P
        }), n.d(t, "w", function () {
            return H
        }), n.d(t, "x", function () {
            return T
        }), n.d(t, "v", function () {
            return L
        }), n.d(t, "l", function () {
            return q
        }), n.d(t, "o", function () {
            return R
        }), n.d(t, "m", function () {
            return B
        }), n.d(t, "c", function () {
            return U
        }), n.d(t, "q", function () {
            return M
        }), n.d(t, "f", function () {
            return D
        }), n.d(t, "n", function () {
            return V
        }), n.d(t, "b", function () {
            return $
        }), n.d(t, "k", function () {
            return G
        });
        var r = n("5176"),
            i = n.n(r),
            a = (n("96cf"), n("3b8d")),
            o = n("8d81"),
            c = n.n(o),
            u = n("936f"),
            s = n("8296"),
            l = n("b2e7"),
            d = n("b383"),
            p = n.n(d),
            f = n("2c06"),
            h = s["L"].android ? "02022001010000000000" : "02032001010000000000";

        function m(e) {
            return v.apply(this, arguments)
        }

        function v() {
            return v = Object(a["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (t.authcookie) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return");
                    case 2:
                        return e.next = 4, Object(l["Q"])(i()({
                            antiCsrf: c()(t.authcookie),
                            qyid: Object(l["w"])(),
                            fields: "private,userinfo,reginfo"
                        }, t));
                    case 4:
                        return n = e.sent, n.qd_sc = Object(f["C"])(n, "&"), e.next = 8, u["a"].post(l["f"], p.a.stringify(n), {
                            withCredentials: !0,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        });
                    case 8:
                        return r = e.sent, e.abrupt("return", r.data);
                    case 10:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), v.apply(this, arguments)
        }

        function b() {
            return g.apply(this, arguments)
        }

        function g() {
            return g = Object(a["a"])(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), g.apply(this, arguments)
        }

        function y() {
            return w.apply(this, arguments)
        }

        function w() {
            return w = Object(a["a"])(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), w.apply(this, arguments)
        }

        function k(e) {
            return e
        }
        var _ = "//sns-comment.iqiyi.com/v3/comment/get_second_comments.action",
            x = "//sns-api.iqiyi.com/apis/friend/are_friends.action",
            N = "//pub.m.iqiyi.com/h5/videoList/",
            I = "//pub.m.iqiyi.com/h5/main/index",
            O = "//pub.m.iqiyi.com/h5/main/filmTv",
            j = "//pub.m.iqiyi.com/h5/main/filmTv/spage/",
            C = "//pub.m.iqiyi.com/h5/main/channel",
            A = "//pub.m.iqiyi.com/h5/main/404/",
            S = "//pub.m.iqiyi.com/h5/main/guess/ychase/",
            E = "//pub.m.iqiyi.com/h5/main/timeline/",
            P = "//pub.m.iqiyi.com/h5/main/movie/tagWall/",
            H = "//pub.m.iqiyi.com/h5/main/vip/i_topic_",
            T = "//pub.m.iqiyi.com/h5/main/youxi/",
            L = "//pub.m.iqiyi.com/h5/main/vip/celebrity",
            q = "//pub.m.iqiyi.com/h5/main/cube/videos",
            R = "//pub.m.iqiyi.com/h5/main/outside/play/",
            B = "//pub.m.iqiyi.com/h5/main/",
            U = "//pub.m.iqiyi.com/h5/main/category/tree",
            M = "//search.video.iqiyi.com/o",
            D = "//pub.m.iqiyi.com/h5/main/hotFeeds/",
            V = "//pub.m.iqiyi.com/h5/main/playlist/",
            $ = "//baike.iqiyi.com/v1/bk/entry/get_entry_info.action",
            G = "//pub.m.iqiyi.com/h5/main/miniVideo/share/"
    }, "14cb": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "m-header-only"
                }, [n("header", {
                    staticClass: "m-header",
                    class: [{
                            "header-fixed": e.fixed && !e.isLandscape
                        },
                        e.headerTop
                    ]
                }, [n("AuraLogoIqiyi", {
                    attrs: {
                        to: "/"
                    }
                }), n("i", {
                    staticClass: "army-icon"
                }), n("div", {
                    staticClass: "m-user"
                }, [e.isHideSearch ? e._e() : n("div", {
                    staticClass: "header-search"
                }, [n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607061_search",
                        expression: "'607061_search'"
                    }, {
                        name: "show-pingback",
                        rawName: "v-show-pingback",
                        value: "607061_search",
                        expression: "'607061_search'"
                    }],
                    staticClass: "c-glyphicon c-glyphicon-searchfine",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.showSearch
                    }
                })]), n("div", {
                    staticClass: "header-recorder"
                }, [n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607061_record",
                        expression: "'607061_record'"
                    }],
                    staticClass: "c-glyphicon c-glyphicon-recorder",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function (t) {
                            return e.toHref("/u/record")
                        }
                    }
                })]), n("div", {
                    staticClass: "header-login"
                }, [n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607061_login",
                        expression: "'607061_login'"
                    }],
                    staticClass: "link-login",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function (t) {
                            return e.toHref("/u/")
                        }
                    }
                }, [e._v("我的")])]), n("BoxShow", {
                    attrs: {
                        vfms: ["m_453_360o"]
                    }
                }, [n("HeaderTopButton", e._b({
                    attrs: {
                        src: e.headerCallAppBtn
                    }
                }, "HeaderTopButton", e.$attrs, !1))], 1)], 1)], 1)])
            },
            i = [],
            a = n("cebc"),
            o = n("2f62"),
            c = n("f4c6"),
            u = n("8300"),
            s = n("7f00"),
            l = n("4e77"),
            d = n("c415"),
            p = {
                name: "HeaderTop",
                components: {
                    AuraLogoIqiyi: c["a"],
                    BoxShow: u["a"],
                    HeaderTopButton: s["a"]
                },
                mixins: [d["a"]],
                props: {
                    fixed: {
                        type: Boolean,
                        default: !1
                    },
                    to: {
                        type: Boolean,
                        default: !0
                    },
                    isHideSearch: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function () {
                    return {
                        isLandscape: !1,
                        candidate: null
                    }
                }, computed: Object(a["a"])({}, Object(o["e"])({
                    headerTop: function (e) {
                        return e.pageStyle.headerTop
                    }, headerCallAppBtn: function (e) {
                        return e.pageStyle.headerCallAppBtn
                    }
                })),
                mounted: function () {
                    var e = this;
                    this.isLandscape = 90 === window.orientation || -90 === window.orientation, Object(l["c"])(function (t) {
                        e.isLandscape = t.landscape
                    })
                }, methods: Object(a["a"])({}, Object(o["b"])(["showSearch"]), {
                    toHref: function (e) {
                        this.to ? this.$router.push({
                            path: e
                        }) : setTimeout(function () {
                            window.location.href = e
                        }, 200)
                    }
                })
            },
            f = p,
            h = n("2877"),
            m = Object(h["a"])(f, r, i, !1, null, null, null);
        t["a"] = m.exports
    }, "21fd": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return y
        }), n.d(t, "b", function () {
            return w
        }), n.d(t, "c", function () {
            return M
        }), n.d(t, "r", function () {
            return D
        }), n.d(t, "s", function () {
            return V
        }), n.d(t, "t", function () {
            return G
        }), n.d(t, "k", function () {
            return z
        }), n.d(t, "g", function () {
            return F
        }), n.d(t, "d", function () {
            return W
        }), n.d(t, "q", function () {
            return ee
        }), n.d(t, "f", function () {
            return ne
        }), n.d(t, "l", function () {
            return oe
        }), n.d(t, "h", function () {
            return ue
        }), n.d(t, "u", function () {
            return de
        }), n.d(t, "e", function () {
            return fe
        }), n.d(t, "o", function () {
            return me
        }), n.d(t, "w", function () {
            return ve
        }), n.d(t, "i", function () {
            return be
        }), n.d(t, "p", function () {
            return ge
        }), n.d(t, "m", function () {
            return ye
        }), n.d(t, "v", function () {
            return we
        }), n.d(t, "x", function () {
            return ke
        }), n.d(t, "j", function () {
            return _e
        }), n.d(t, "n", function () {
            return xe
        });
        var r = n("cebc"),
            i = n("5176"),
            a = n.n(i),
            o = n("a745"),
            c = n.n(o),
            u = (n("96cf"), n("e814")),
            s = n.n(u),
            l = n("0a0d"),
            d = n.n(l),
            p = (n("ac6a"), n("f3e2"), n("7f7f"), n("3b8d")),
            f = n("936f"),
            h = n("8296"),
            m = n("4f30"),
            v = n("2c06"),
            b = n("b2e7"),
            g = n("73d4"),
            y = 1,
            w = 2,
            k = 0,
            _ = "VIDEO_PLAY_MODE_VERTICAL",
            x = "//pub.m.iqiyi.com/jp/h5/count/hotDisplay/",
            N = "//pub.m.iqiyi.com/jp/h5/recommend/videos/",
            I = "//pub.m.iqiyi.com/h5/main/recVideos/halfplay/",
            O = "//pub.m.iqiyi.com/jp/h5/videos",
            j = "//pub.m.iqiyi.com/jp/h5/count/hotIndex",
            C = "//pub.m.iqiyi.com/jp/h5/count/play",
            A = "//pub.m.iqiyi.com/jp/h5/count/plays",
            S = "//pub.m.iqiyi.com/h5/main/videoList/superAlbum/",
            E = "//pub.m.iqiyi.com/h5/main/videoList/othlist/",
            P = "//pub.m.iqiyi.com/h5/main/videoList/fragment/",
            H = "//pub.m.iqiyi.com/h5/main/videoList/music/",
            T = "//pub.m.iqiyi.com/h5/main/collection/",
            L = 1,
            q = 2,
            R = 3,
            B = 6048e5,
            U = 432e5;

        function M() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.qipuId || e.qipu_id || e.id || e.tvid || e.tv_id || e.playVideoId || e.tvId || "",
                n = e.albumId || e.aid || e.album_id || t || "",
                r = e.cid || e.channelId || e.album_channel || "",
                i = e.vid || "";
            return {
                tvid: t,
                aid: n,
                cid: r,
                vid: i
            }
        }

        function D(e, t) {
            f["a"].jsonpCacheHot(x, {
                params: {
                    qipuId: e.qipuId,
                    channelId: e.channelId,
                    videoDisplay: e.videoDisplay,
                    albumDisplay: e.albumDisplay
                }
            }, {
                qStore: {
                    timeout: 200
                }
            }).next(t)
        }

        function V(e) {
            return $.apply(this, arguments)
        }

        function $() {
            return $ = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = t.qipuId, r = c()(n) ? n.join() : n, i = "".concat(O, "/").concat(r, "/"), e.next = 5, f["a"].jsonp(i);
                    case 5:
                        return a = e.sent, o = a.data, e.abrupt("return", o ? 1 === o.length ? o[0] : o : {});
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), $.apply(this, arguments)
        }

        function G(e) {
            e = e || {};
            var t = {
                album: !1,
                source: !1,
                movie: !1,
                short: !1
            };
            return e.isFeatureFilm ? e.videoType === y ? t.album = !0 : e.videoType === w ? t.source = !0 : e.cid === +m["CHANNEL_DIANYING"] || e.cid === +m["CHANNEL_DONGMAN"] ? t.movie = !0 : t.short = !0 : t.short = !0, t
        }

        function z(e) {
            return Y.apply(this, arguments)
        }

        function Y() {
            return Y = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, o = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = o.length > 1 && void 0 !== o[1] && o[1], r = {
                            type: t.type || "video",
                            size: t.size || 12,
                            area: t.area || "h_swan",
                            evid: t.evid,
                            pageId: t.pageId,
                            entitySource: t.entitySource,
                            referenceId: t.referenceId,
                            channelId: t.channelId,
                            albumId: t.albumId,
                            purchaseTypes: t.purchaseTypes,
                            tagSet: t.tagSet,
                            tagSizes: t.tagSizes,
                            onlyId: t.onlyId,
                            onlyAlbum: t.onlyAlbum,
                            filterStatus: t.filterStatus,
                            featureStatus: t.featureStatus,
                            uid: Object(v["x"])() || Object(b["w"])(),
                            ppuid: Object(b["C"])(),
                            advertStatus: t.advertStatus || 1
                        }, e.next = 4, K(a()({}, r, Object(g["b"])()), n);
                    case 4:
                        return i = e.sent, e.abrupt("return", i);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Y.apply(this, arguments)
        }

        function F(e) {
            return Q.apply(this, arguments)
        }

        function Q() {
            return Q = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, i, a, o = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = o.length > 1 && void 0 !== o[1] && o[1], i = Object(r["a"])({}, {
                            qyid: Object(v["x"])() || Object(b["w"])()
                        }, t), e.next = 4, K(i, n);
                    case 4:
                        return a = e.sent, e.abrupt("return", a);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Q.apply(this, arguments)
        }

        function K(e) {
            return J.apply(this, arguments)
        }

        function J() {
            return J = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, i, a, o, c, u = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (n = u.length > 1 && void 0 !== u[1] && u[1], i = n ? I : N, a = Object(r["a"])({}, t), "h_swan" !== a.area) {
                            e.next = 9;
                            break
                        }
                        return e.next = 6, f["a"].jsonpCache(i, {
                            headers: {
                                "User-Agent": a.ua
                            },
                            params: a
                        }, {
                            qStore: {
                                timeout: 400
                            }
                        });
                    case 6:
                        e.t0 = e.sent, e.next = 12;
                        break;
                    case 9:
                        return e.next = 11, f["a"].jsonp(i, {
                            headers: {
                                "User-Agent": a.ua
                            },
                            params: a
                        });
                    case 11:
                        e.t0 = e.sent;
                    case 12:
                        return o = e.t0, c = o && o.data, c.videos || (c = c ? c.data : c), c && c.videos && c.videos.forEach(function (e) {
                            e.upperRightCorner = be(e), 2 === e.type && (e.upperRightCorner = ""), e.mainTitle = a.onlyAlbum ? e.albumName || e.vt || e.shortTitle : e.vt || e.shortTitle, e.subTitle = e.subtitle = e.desc, 1 === e.hotDisplayStatus && 0 !== e.hotDisplayCount ? e.showContent = "热度 ".concat(e.hotDisplayCount) : 0 === e.hotDisplayStatus && 0 !== e.hotDisplayCount && (e.showContent = "".concat(Object(h["w"])(e.hotDisplayCount), "次播放"))
                        }), e.abrupt("return", c);
                    case 17:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), J.apply(this, arguments)
        }

        function W(e) {
            return X.apply(this, arguments)
        }

        function X() {
            return X = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, i, a;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = {
                            collectionId: 0,
                            pageNum: 1,
                            pageSize: 10,
                            isList: !0
                        }, n = Object(r["a"])({}, n, t), e.next = 4, f["a"].jsonp(T, {
                            params: n
                        });
                    case 4:
                        return i = e.sent, a = i && i.data && i.data.data, e.abrupt("return", a);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), X.apply(this, arguments)
        }

        function Z(e) {
            var t = "",
                n = e.solo,
                r = e.sourceId;
            return r || 1 !== n ? r || 0 !== n ? r && (t = 2) : t = 1 : t = 7, t
        }

        function ee(e, t) {
            return te.apply(this, arguments)
        }

        function te() {
            return te = Object(p["a"])(regeneratorRuntime.mark(function e(t, n) {
                var r, i;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (e.prev = 0, !n) {
                            e.next = 8;
                            break
                        }
                        return e.next = 4, ne(t);
                    case 4:
                        return r = e.sent, e.abrupt("return", r[t]);
                    case 8:
                        return e.next = 10, ie(t);
                    case 10:
                        return i = e.sent, e.abrupt("return", i.count || 0);
                    case 12:
                        e.next = 17;
                        break;
                    case 14:
                        return e.prev = 14, e.t0 = e["catch"](0), e.abrupt("return", 0);
                    case 17:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [0, 14]
                ])
            })), te.apply(this, arguments)
        }

        function ne(e) {
            return re.apply(this, arguments)
        }

        function re() {
            return re = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return c()(t) || (t = [t]), e.next = 3, f["a"].jsonp("".concat(j, "/?ids=").concat(t.join(","))).catch(function () {
                            return {}
                        });
                    case 3:
                        return n = e.sent, e.abrupt("return", n && n.data);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), re.apply(this, arguments)
        }

        function ie(e) {
            return ae.apply(this, arguments)
        }

        function ae() {
            return ae = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (t) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return");
                    case 2:
                        return n = c()(t) ? "".concat(A, "/").concat(t.join(",")) : "".concat(C, "/").concat(t), e.next = 5, f["a"].jsonp(n);
                    case 5:
                        return r = e.sent, e.abrupt("return", r && r.data);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ae.apply(this, arguments)
        }

        function oe() {
            return ce.apply(this, arguments)
        }

        function ce() {
            return ce = Object(p["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, n = {
                            qipuId: t.id,
                            channelId: t.cid
                        }, e.next = 4, f["a"].jsonp(S, {
                            params: n
                        });
                    case 4:
                        if (r = e.sent, i = r && r.data, !i || !i.data) {
                            e.next = 9;
                            break
                        }
                        return le(i.data, t), e.abrupt("return", i && i.data);
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ce.apply(this, arguments)
        }

        function ue() {
            return se.apply(this, arguments)
        }

        function se() {
            return se = Object(p["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = i.length > 0 && void 0 !== i[0] ? i[0] : {}, n = {
                            albumId: t.albumId,
                            page: t.page || 1,
                            size: t.size || 12
                        }, e.next = 4, f["a"].jsonp(H, {
                            params: n
                        });
                    case 4:
                        if (r = e.sent, !r || !r.data || "A00000" !== r.data.code) {
                            e.next = 7;
                            break
                        }
                        return e.abrupt("return", r.data.data);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), se.apply(this, arguments)
        }

        function le(e, t) {
            e.mainTitle = e.collectionInfo && e.collectionInfo.name, e.items && e.items.length && e.items.forEach(function (e, n) {
                e.isSelected = e.albumId ? e.isSource ? e.albumId === +t.sourceId : e.albumId === +t.albumId : e.qipuId === +t.tvId, e.subType = Z(e), e.mainTitle = e.name, e.url = Object(h["P"])(e.pageUrl), e.tvId = e.qipuId || e.tvId, e.albumId = e.aqipuId || e.albumId, e.isQiyiProduced = e.isQiyiProduced || !!e.qiyiProduced, e.isExclusive = e.isExclusive || !!e.exclusive, e.upperRightCorner = be(e), e.showContent = e.showContent ? e.showContent : e.lowerLeftCorner, e.subtitle = e.focus
            })
        }

        function de() {
            return pe.apply(this, arguments)
        }

        function pe() {
            return pe = Object(p["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, n = {
                            qipuId: t.qipuId,
                            type: t.type
                        }, e.next = 4, f["a"].jsonp(E, {
                            params: n
                        });
                    case 4:
                        return r = e.sent, i = r && r.data, i && i.data && i.data.videos && i.data.videos.forEach(function (e) {
                            e.mainTitle = e.vt || e.shortTitle
                        }), e.abrupt("return", i && i.data ? i.data.videos : null);
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), pe.apply(this, arguments)
        }

        function fe() {
            return he.apply(this, arguments)
        }

        function he() {
            return he = Object(p["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, n = {
                            videoId: t.qipuId,
                            albumId: t.albumId
                        }, e.next = 4, f["a"].jsonp(P, {
                            params: n
                        });
                    case 4:
                        return r = e.sent, i = r && r.data, e.abrupt("return", i && i.data ? i.data.videos : null);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), he.apply(this, arguments)
        }

        function me(e) {
            if (e) {
                var t = {
                        isEnd: e.latestVideoOrder >= e.videoCount,
                        latestOrder: e.latestVideoOrder,
                        latestPublishTime: e.latestVideoIssueTime
                    },
                    n = e.latestVideoIssueTime - e.firstVideoIssueTime <= U,
                    r = d()() - e.latestVideoIssueTime <= B;
                return t.isEnd ? t.isShowNew = !n && r : t.isShowNew = r, t
            }
        }

        function ve(e, t) {
            var n = e.type || e.contentType;
            if (1 !== n) return !1;
            var r = e.order || e.pd;
            return t.isShowNew && (r === t.latestOrder || t.latestPublishTime - e.publishTime <= U)
        }

        function be(e) {
            var t = ge(e);
            return t || (e.isNew ? "新" : e.isPaikeType ? "拍客" : void 0 !== e.type && 1 !== e.type ? "预告" : void 0)
        }

        function ge(e) {
            return e.qiyiProduced || e.isQiyiProduced ? "自制" : e.exclusive || e.isExclusive ? "独播" : e.payMark === q || e.isPaid ? "付费" : e.payMark === R || e.isCoupon ? "用券" : e.isSd ? "1080P" : e.payMark === L || e.isVip ? "VIP" : void 0
        }

        function ye(e) {
            return e.qiyiProduced || e.isQiyiProduced ? "自制" : e.exclusive || e.isExclusive ? "独播" : 1 === e.payMark || e.isVip ? "VIP" : 1 !== e.type ? "预告" : void 0
        }

        function we() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return s()(e.unlockedBusinessType) === k
        }

        function ke() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.playMode === _
        }

        function _e(e) {
            return we(e) ? "cqdb" : 0 !== e.payMark || e.isVip ? "VIP" : e.isNew ? "NEW" : 1 !== e.type ? "预告" : void 0
        }

        function xe(e) {
            return 1 === e.payMark || e.isVip ? "VIP" : e.isNew ? "NEW" : 1 !== e.type ? "预告" : void 0
        }
    }, "240d": function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return u
        }), n.d(t, "a", function () {
            return s
        }), n.d(t, "c", function () {
            return l
        }), n.d(t, "b", function () {
            return d
        }), n.d(t, "f", function () {
            return p
        }), n.d(t, "d", function () {
            return f
        });
        n("4917"), n("a481"), n("57e7"), n("6d67");
        var r = /(_\d+_\d+)?\.(jpg|bmp|png|webp)$/i,
            i = /(\.iqiyipic\.com\/((image\/201(8|9)((?!pl_).)*)|(common\/lego\/201(8|9).*))|(zhibo.*))\.(jpg|bmp|png|gif)$/,
            a = /gif$/i,
            o = /webp$/i,
            c = /mp([0-9])([0-9])/;

        function u() {
            return u.is = void 0 !== u.is ? u.is : !![].map && 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp"), u.is
        }

        function s(e, t) {
            return e && t ? e.replace(r, function (e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return "_".concat(t, ".").concat(r)
            }) : e
        }

        function l(e) {
            return e.replace(i, "$1.webp")
        }

        function d(e) {
            return c.test(e) && f(e) ? e.replace(c, "mp$2").replace(a, "jpg") : e
        }

        function p(e) {
            return h(e) ? e.replace(c, "mp$2").replace(o, "jpg") : e
        }

        function f(e) {
            return a.test(e)
        }

        function h(e) {
            return o.test(e)
        }
    }, "24d6": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var r = n("d225"),
            i = n("b0b4"),
            a = function () {
                function e() {
                    Object(r["a"])(this, e)
                }
                return Object(i["a"])(e, [{
                    key: "on",
                    value: function (e, t) {
                        return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
                    }
                }, {
                    key: "once",
                    value: function (e, t) {
                        var n = this;

                        function r() {
                            n.off(e, r), t.apply(this, arguments)
                        }
                        return this._callbacks = this._callbacks || {}, r.fn = t, this.on(e, r), this
                    }
                }, {
                    key: "off",
                    value: function (e, t) {
                        if (this._callbacks = this._callbacks || {}, !arguments.length) return this._callbacks = {}, this;
                        var n, r = this._callbacks[e];
                        if (!r) return this;
                        if (1 === arguments.length) return delete this._callbacks[e], this;
                        for (var i = 0; i < r.length; i++)
                            if (n = r[i], n === t || n.fn === t) {
                                r.splice(i, 1);
                                break
                            }
                        return this
                    }
                }, {
                    key: "trigger",
                    value: function (e) {
                        this._callbacks = this._callbacks || {};
                        var t = [].slice.call(arguments, 1),
                            n = this._callbacks[e];
                        if (n) {
                            n = n.slice(0);
                            for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
                        }
                        return this
                    }
                }, {
                    key: "listeners",
                    value: function (e) {
                        return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
                    }
                }, {
                    key: "hasListeners",
                    value: function (e) {
                        return !!this.listeners(e).length
                    }
                }]), e
            }()
    }, "2c06": function (e, t, n) {
        "use strict";
        n.d(t, "d", function () {
            return f
        }), n.d(t, "k", function () {
            return h
        }), n.d(t, "j", function () {
            return m
        }), n.d(t, "h", function () {
            return v
        }), n.d(t, "l", function () {
            return b
        }), n.d(t, "i", function () {
            return g
        }), n.d(t, "r", function () {
            return y
        }), n.d(t, "e", function () {
            return k
        }), n.d(t, "f", function () {
            return x
        }), n.d(t, "c", function () {
            return I
        }), n.d(t, "b", function () {
            return O
        }), n.d(t, "m", function () {
            return j
        }), n.d(t, "n", function () {
            return C
        }), n.d(t, "o", function () {
            return A
        }), n.d(t, "p", function () {
            return S
        }), n.d(t, "q", function () {
            return P
        }), n.d(t, "a", function () {
            return H
        }), n.d(t, "g", function () {
            return T
        }), n.d(t, "y", function () {
            return q
        }), n.d(t, "E", function () {
            return R
        }), n.d(t, "v", function () {
            return B
        }), n.d(t, "z", function () {
            return M
        }), n.d(t, "w", function () {
            return D
        }), n.d(t, "C", function () {
            return $
        }), n.d(t, "D", function () {
            return G
        }), n.d(t, "x", function () {
            return Y
        }), n.d(t, "G", function () {
            return F
        }), n.d(t, "u", function () {
            return Q
        }), n.d(t, "s", function () {
            return K
        }), n.d(t, "B", function () {
            return J
        }), n.d(t, "t", function () {
            return W
        }), n.d(t, "F", function () {
            return X
        }), n.d(t, "H", function () {
            return Z
        }), n.d(t, "A", function () {
            return ee
        });
        n("6d67");
        var r = n("a4bb"),
            i = n.n(r),
            a = (n("55dd"), n("cebc")),
            o = (n("386d"), n("a481"), n("0a0d"), n("a78e")),
            c = n.n(o),
            u = n("8d81"),
            s = n.n(u),
            l = (n("b2e7"), n("8296")),
            d = n("b383"),
            p = n.n(d),
            f = "home",
            h = "f_359_jlll",
            m = "f_359_jlll",
            v = "f_360_jlll",
            b = "f_391_opll",
            g = "bdst",
            y = "coop_military",
            w = "QC004",
            k = "QC006",
            _ = "QC007",
            x = "QC015",
            N = "QC142",
            I = "P00003",
            O = "P00001",
            j = "h5_add_shortcut_open_status",
            C = "popFlowTime",
            A = "userPref",
            S = "_wantSeeSubTip",
            E = "w0JD89dhtS7BdPLU2",
            P = "suid",
            H = "qyid",
            T = "related_id",
            L = {
                path: "/",
                domain: "iqiyi.com"
            };

        function q() {
            var e = document.referrer || "DIRECT";
            return D(_, e)
        }

        function R(e) {
            var t = U();
            return V(x, t.vfm, e)
        }

        function B() {
            var e = U();
            return e.cfrm
        }

        function U() {
            return p.a.parse(location.search.replace("?", ""))
        }

        function M() {
            var e = U();
            return V(x, e.msrc)
        }

        function D(e, t) {
            var n = c.a.get(e);
            return n || (n = "function" === typeof t ? t() : t, c.a.set(e, n, L)), n
        }

        function V(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = n.expires,
                i = t;
            if (i) {
                var o = L;
                r && (o = Object(a["a"])({
                    expires: r
                }, L)), c.a.set(e, i, o)
            } else i = c.a.get(e);
            return i
        }

        function $(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "|",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E,
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = z(e, t, n, r);
            return s()(unescape(encodeURIComponent(i)))
        }

        function G(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "|",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E,
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = z(e, t, n, r);
            return s()(window.btoa(unescape(encodeURIComponent(i))))
        }

        function z(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "|",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E,
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                a = i()(e).sort(),
                o = a.map(function (t) {
                    return "".concat(t, "=").concat(e[t])
                }).join(t);
            return o = n ? o + (r ? t : "") + n : o, o
        }

        function Y() {
            return l["J"].getItem(H) || ""
        }

        function F(e) {
            var t = "QIYICOM";
            t === e && c.a.set(w, "0", Object(a["a"])({
                expires: 1e3
            }, L))
        }

        function Q() {
            var e = c.a.get(w);
            return "0" === e
        }

        function K() {
            return l["p"].iPhone ? 12 : 13
        }

        function J() {
            return "02000021010000000000"
        }

        function W() {
            var e = p.a.parse(location.search.replace("?", ""));
            return e.agentversion || ("paopao_app" === e.origin ? "1.0.0" : "9.2.0")
        }

        function X() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = "10001",
                n = "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd",
                r = l["h"].getKeyPair(t, "", n),
                i = l["h"].encryptedString(r, encodeURIComponent(e)).replace(/\s/g, "-");
            return i
        }

        function Z() {
            var e = U(),
                t = e.fv;
            return t && c.a.set(N, t, Object(a["a"])({
                expires: 3
            }, L)), t
        }

        function ee() {
            return "undefined" === typeof window ? "" : Z() || c.a.get(N) || ""
        }
    }, "302b": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            i = [
                function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "page-c-items"
                    }, [n("footer", {
                        staticClass: "m-footer"
                    }, [n("img", {
                        attrs: {
                            src: "//www.iqiyipic.com/common/fix/h5-aura/foot.png"
                        }
                    })])])
                }
            ],
            a = {
                name: "AuraFooter",
                serverCacheKey: function () {
                    return "footer"
                }
            },
            o = a,
            c = n("2877"),
            u = Object(c["a"])(o, r, i, !1, null, null, null);
        t["a"] = u.exports
    }, 3853: function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    on: {
                        touchstart: function (e) {
                            e.stopPropagation()
                        }
                    }
                }, [e._t("default")], 2)
            },
            i = [],
            a = {
                name: "ModalEvent",
                mounted: function () {
                    document.addEventListener("touchstart", this.touchStartHandle)
                }, destroyed: function () {
                    document.removeEventListener("touchstart", this.touchStartHandle)
                }, methods: {
                    touchStartHandle: function (e) {
                        this.$emit("document:touchstart", e)
                    }
                }
            },
            o = a,
            c = n("2877"),
            u = Object(c["a"])(o, r, i, !1, null, null, null);
        t["a"] = u.exports
    }, "38ff": function (e, t, n) {
        "use strict";
        var r, i, a = n("a4bb"),
            o = n.n(a),
            c = (n("ac6a"), n("f3e2"), n("cebc")),
            u = (n("96cf"), n("3b8d")),
            s = n("5176"),
            l = n.n(s),
            d = (n("c5f6"), n("ba45")),
            p = n("2c06"),
            f = n("5321"),
            h = n("8296"),
            m = {
                name: "ButtonDown",
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    currentPage: {
                        type: String,
                        default: ""
                    },
                    toPage: {
                        type: String,
                        default: d["c"]
                    },
                    isDownApp: {
                        type: Boolean,
                        default: !0
                    },
                    downAppPos: {
                        type: String,
                        default: ""
                    },
                    schemaUrl: {
                        type: String,
                        default: ""
                    },
                    downAppUrl: {
                        type: String,
                        default: ""
                    },
                    downAppAndroidUrl: {
                        type: String,
                        default: ""
                    },
                    downAppIosUrl: {
                        type: String,
                        default: ""
                    },
                    subtype: {
                        type: [String, Number],
                        default: d["b"]
                    },
                    rseat: {
                        type: String,
                        default: ""
                    },
                    extralOptions: {
                        type: Object,
                        default: function () {
                            return {}
                        }
                    },
                    ulink: {
                        type: String,
                        default: ""
                    },
                    androidSchemaUrl: {
                        type: String,
                        default: ""
                    },
                    iosSchemaUrl: {
                        type: String,
                        default: ""
                    },
                    showCopyCode: {
                        type: Boolean,
                        default: !0
                    }
                },
                computed: {
                    SUBTYPE: function () {
                        return this.subtype ? this.subtype : d["b"]
                    }
                },
                mounted: function () {
                    this.currentPage === p["d"] && Object(d["t"])({
                        query: l()(Object(d["n"])(), {
                            ftype: 27,
                            subtype: this.SUBTYPE
                        }),
                        downApp: {
                            downAppUrl: this.downAppUrl,
                            downAppPos: this.downAppPos
                        }
                    })
                }, methods: {
                    callApp: function () {
                    }(),
                    checkCodeToast: function (e) {
                        var t = e.showCopyCode;
                        !1 !== t && !1 !== this.showCopyCode && Object(d["j"])() && this.$dispatch("GlobalToast", "show", {
                            text: "已为您复制视频口令，快去爱奇艺APP观看吧！",
                            timeout: 5e3
                        })
                    }, failUnionHandle: function (e) {
                        var t = e.failToUrl;
                        t && (window.location.href = t)
                    }, getPlayOptions: function (e) {
                        try {
                            if (e.video) {
                                var t = {};
                                o()(e).forEach(function (n) {
                                    "video" !== n && (t[n] = e[n])
                                }), e = t
                            }
                            return e.progress ? e : this.$qiyiPlayer && this.$qiyiPlayer.currentTime ? l()(e, {
                                progress: this.$qiyiPlayer.currentTime()
                            }) : e
                        } catch (n) {
                            console.log("error", n)
                        }
                    }, downLoadApp: function () {
                        if (this.isDownApp) {
                            var e = Object(d["m"])({
                                downAppUrl: this.downAppUrl,
                                downAppPos: this.downAppPos,
                                downAppAndroidUrl: this.downAppAndroidUrl,
                                downAppIosUrl: this.downAppIosUrl
                            });
                            Object(d["k"])(e)
                        }
                    }, sendDownPingback: function (e) {
                        this.rseat && Object(f["l"])({
                            rt: {
                                A: "a",
                                IMG: "i"
                            }[e.nodeName] || "e",
                            rseat: this.rseat,
                            rlink: e.getAttribute("href"),
                            packgtype: h["L"].android ? "androidphone" : "iphone"
                        })
                    }, downLoadAndSendPingback: function (e) {
                        this.downLoadApp(), this.sendDownPingback(e.target)
                    }
                }, render: function (e) {
                    var t = this.tag;
                    return e(t, {
                        directives: [{
                            name: "protect",
                            value: !0
                        }, {
                            name: "copy-callapp",
                            value: {
                                video: this.extralOptions,
                                subtype: this.SUBTYPE
                            }
                        }],
                        on: {
                            click: this.callApp
                        }
                    }, [this.$slots.default])
                }
            },
            v = m,
            b = n("2877"),
            g = Object(b["a"])(v, r, i, !1, null, null, null);
        t["a"] = g.exports
    }, "3b2f": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", {
                    staticClass: "m-toast",
                    style: e.customStyle
                }, [n("div", {
                    staticClass: "info"
                }, [e._t("default"), e._t("text", [n("div", {
                    domProps: {
                        innerHTML: e._s(e.text)
                    }
                })])], 2)])
            },
            i = [],
            a = {
                name: "AuraToast",
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    customStyle: {
                        type: Object,
                        default: function () {
                            return {}
                        }
                    }
                }
            },
            o = a,
            c = n("2877"),
            u = Object(c["a"])(o, r, i, !1, null, null, null);
        t["a"] = u.exports
    }, "3bfe": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", {
                    staticClass: "m-title",
                    class: e.titleClass[e.abSample]
                }, [n("AuraLink", e._b({}, "AuraLink", e.$attrs, !1), [n("i", {
                    class: e.icon
                }), n("h2", {
                    staticClass: "c-title-des"
                }, [e._v(" " + e._s(e.title) + " ")])]), e._t("rightBtn")], 2)
            },
            i = [],
            a = n("c415"),
            o = {
                name: "AuraCardTitle",
                mixins: [a["a"]],
                inheritAttrs: !1,
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    icon: {
                        type: String,
                        default: ""
                    }
                },
                data: function () {
                    return {
                        titleClass: {
                            a: "m-titleNew",
                            b: ""
                        }
                    }
                }
            },
            c = o,
            u = n("2877"),
            s = Object(u["a"])(c, r, i, !1, null, null, null);
        t["a"] = s.exports
    }, "3e9e": function (e, t, n) {
        "use strict";
        var r = n("a4bb"),
            i = n.n(r),
            a = (n("55dd"), n("7514"), n("96cf"), n("3b8d")),
            o = n("5176"),
            c = n.n(o),
            u = (n("20d6"), n("ac6a"), n("f3e2"), n("d225")),
            s = n("b0b4"),
            l = n("308d"),
            d = n("6bb5"),
            p = n("4e2b"),
            f = n("bd86"),
            h = n("2b0e"),
            m = n("24d6"),
            v = n("8296"),
            b = Object(v["K"])("playList"),
            g = "unknown",
            y = ["add", "update", "upsert", "append", "prepend"],
            w = Object(f["a"])({
                first: 0,
                albumList: 1,
                focus: 2,
                videoAround: 3,
                series: 4,
                soundtrack: 5,
                recommend: 6,
                bodanList: 7,
                bodanRelatedAlbum: 8,
                bodanRecommend: 9
            }, g, 1 / 0),
            k = function (e) {
                function t() {
                    var e;
                    return Object(u["a"])(this, t), e = Object(l["a"])(this, Object(d["a"])(t).call(this)), e.index = 0, e.lists = {}, e.curQipuId = "", e.curCard = g, e.enableNextCard = !0, e.ACTIONS = y, e
                }
                return Object(p["a"])(t, e), Object(s["a"])(t, [{
                    key: "setEnableNextCard",
                    value: function (e) {
                        this.enableNextCard = e
                    }
                }, {
                    key: "addVideo",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        if (e.card = e.card || g, this.lists[e.card] || (this.lists[e.card] = {
                            priority: 1 / 0,
                            videos: [],
                            hook: null,
                            next: null
                        }), e.card && (this.lists[e.card].priority = w[e.card]), e.hook && (this.lists[e.card].hook = e.hook), e.next && (this.lists[e.card].next = e.next), e.qipuId)
                            if (t) {
                                var n = 0;
                                this.lists[e.card].videos.forEach(function (t, r) {
                                    t.group === e.group && (n = r + 1)
                                }), this.lists[e.card].videos.splice(n, 0, this.buildVideo(e))
                            } else this.lists[e.card].videos.push(this.buildVideo(e))
                    }
                }, {
                    key: "removeVideo",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (e.card = e.card || g, this.lists[e.card]) {
                            var t = this.lists[e.card].videos.findIndex(function (t) {
                                return t.adIndex ? t.adIndex === e.adIndex : t.qipuId === e.qipuId
                            }); - 1 !== t && this.lists[e.card].videos.splice(t, 1)
                        }
                    }
                }, {
                    key: "appendVideo",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.addVideo(e)
                    }
                }, {
                    key: "prependVideo",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.addVideo(e, !0)
                    }
                }, {
                    key: "updateVideo",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = this.getVideo(e);
                        return !!t && c()(t, e)
                    }
                }, {
                    key: "upsertVideo",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.updateVideo(e) || this.addVideo(e)
                    }
                }, {
                    key: "buildVideo",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = {
                                vfrmblk: e.vfrmblk,
                                vfrmrst: e.vfrmrst,
                                adIndex: e.adIndex,
                                isAdvert: e.isAdvert,
                                card: e.card,
                                qipuId: e.qipuId,
                                url: e.url,
                                continuous: e.continuous,
                                redirect: e.redirect,
                                vfrm: e.vfrm,
                                position: e.position,
                                player: e.player,
                                source: e.source,
                                playStrategy: e.playStrategy,
                                el: e.el,
                                stop: e.stop,
                                noUpdateUrl: e.noUpdateUrl,
                                selectClass: e.selectClass,
                                block: e.block,
                                rseat: e.rseat,
                                noStart: e.noStart,
                                advertInfo: e.advertInfo,
                                index: e.index,
                                group: e.group,
                                noPlay: e.noPlay || !1,
                                mainTitle: e.mainTitle
                            };
                        for (var n in t) {
                            var r = t[n];
                            void 0 === r && delete t[n]
                        }
                        return t
                    }
                }, {
                    key: "setCurVideo",
                    value: function (e) {
                        var t = this,
                            n = e.qipuId,
                            r = e.index,
                            i = e.card,
                            o = void 0 === i ? g : i,
                            c = this.getVideo({
                                qipuId: n,
                                index: r,
                                card: o
                            });
                        c ? (this.curQipuId = n, this.curCard = o, this.index = r, this.trigger("change", c), b.log("change", "curVideo:", c, "\n lists:", this.lists)) : h["default"].nextTick(Object(a["a"])(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.callHook({
                                        notFound: !0
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                            }, e)
                        })))
                    }
                }, {
                    key: "getCurVideo",
                    value: function () {
                        return this.getVideo({
                            qipuId: this.curQipuId,
                            index: this.index,
                            card: this.curCard
                        })
                    }
                }, {
                    key: "getVideo",
                    value: function (e) {
                        var t = e.qipuId,
                            n = e.index,
                            r = e.card,
                            i = void 0 === r ? g : r;
                        return t && this.lists[i] ? n ? this.lists[i].videos.find(function (e) {
                            return e.qipuId === t && e.index === n
                        }) : this.lists[i].videos.find(function (e) {
                            return e.qipuId === t
                        }) : null
                    }
                }, {
                    key: "next",
                    value: function () {
                        var e = Object(a["a"])(regeneratorRuntime.mark(function e() {
                            var t, n, r;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.getCurVideo(), t) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (n = this.getNextVideo(t), r = this.lists[this.curCard], !r || !r.next || "function" !== typeof r.next) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.next = 8, r.next({
                                        curVideo: t
                                    });
                                case 8:
                                    return e.next = 10, h["default"].nextTick();
                                case 10:
                                    if (n = this.getNextVideo(t), n) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 13:
                                    e.next = 21;
                                    break;
                                case 15:
                                    if (n && n.card === t.card) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, this.callHook({
                                        isEnd: !0
                                    });
                                case 18:
                                    if (n = this.getNextVideo(t), n) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 21:
                                    t.stop ? this.trigger("stop", t) : this.trigger("next", n);
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "getNextVideo",
                    value: function (e) {
                        var t = e.card,
                            n = e.qipuId,
                            r = this.getCardNextVideo({
                                card: t,
                                qipuId: n
                            });
                        if (!r) {
                            if (!this.enableNextCard) return null;
                            var i = this.getNextCard(t);
                            if (!i || !this.lists[i] || !this.lists[i].videos.length) return null;
                            r = this.lists[i].videos[0]
                        }
                        return r.continuous ? r : this.getNextVideo(r)
                    }
                }, {
                    key: "getCardNextVideo",
                    value: function (e) {
                        var t = e.card,
                            n = e.qipuId;
                        if (!t || !n || !this.lists[t]) return null;
                        var r = this.lists[t].videos.sort(function (e, t) {
                                return isNaN(e.index) || isNaN(t.index) ? 0 : e.index - t.index
                            }),
                            i = r.findIndex(function (e) {
                                return e.qipuId === n
                            });
                        return -1 !== i && i + 1 < r.length ? r[i + 1] : null
                    }
                }, {
                    key: "getNextCard",
                    value: function (e) {
                        var t = i()(this.lists).sort(function (e, t) {
                                return w[e] - w[t]
                            }),
                            n = t.findIndex(function (t) {
                                return t === e
                            });
                        return n + 1 < t.length ? t[n + 1] : ""
                    }
                }, {
                    key: "callHook",
                    value: function () {
                        var e = Object(a["a"])(regeneratorRuntime.mark(function e(t) {
                            var n;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    if (this.curQipuId && this.curCard) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (n = this.lists[this.curCard], !n || !n.hook || "function" !== typeof n.hook) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 6, n.hook({
                                        notFound: t.notFound,
                                        isEnd: t.isEnd,
                                        curQipuId: this.curQipuId,
                                        curCard: this.curCard
                                    });
                                case 6:
                                    return e.next = 8, h["default"].nextTick();
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "clear",
                    value: function () {
                        this.lists = {}, this.curQipuId = "", this.curCard = g
                    }
                }]), t
            }(m["a"]),
            _ = function (e) {
                var t;
                return function () {
                    return t || (t = new e(arguments)), t
                }
            };
        t["a"] = _(k)()
    }, "4e77": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return p
        }), n.d(t, "c", function () {
            return f
        }), n.d(t, "f", function () {
            return h
        }), n.d(t, "e", function () {
            return m
        }), n.d(t, "h", function () {
            return v
        }), n.d(t, "b", function () {
            return k
        }), n.d(t, "d", function () {
            return x
        }), n.d(t, "g", function () {
            return N
        });
        n("57e7"), n("55dd"), n("ac6a"), n("f3e2");
        var r = n("0f32"),
            i = n.n(r),
            a = n("fe90"),
            o = [],
            c = [],
            u = [],
            s = [],
            l = [],
            d = 100;

        function p(e, t) {
            e.idKey = t, o.push(e), o.sort(function (e, t) {
                return "video_href_click" === e.idKey ? -1 : "video_href_click" === t.idKey ? 1 : 0
            })
        }

        function f(e) {
            u.push(e)
        }

        function h(e) {
            var t = u.indexOf(e);
            t > -1 && u.splice(t, 1)
        }

        function m(e) {
            c.push(e)
        }

        function v(e) {
            var t = c.indexOf(e);
            t > -1 && c.splice(t, 1)
        }
        a["a"].document.addEventListener("click", function (e) {
            o.forEach(function (t) {
                t(e)
            })
        }), "undefined" !== typeof window && window.addEventListener("orientationchange" in window ? "orientationchange" : "resize", i()(function (e) {
            e.portrait = 180 === window.orientation || 0 === window.orientation, e.landscape = 90 === window.orientation || -90 === window.orientation, u.forEach(function (t) {
                try {
                    t(e)
                } catch (n) {}
            })
        })), a["a"].document.addEventListener("scroll", i()(function (e) {
            e.scrollDirection = y().scrollDirection, e.scrollOffset = y().scrollOffset, c.forEach(function (t) {
                try {
                    t(e)
                } catch (n) {}
            })
        }, d));
        var b = {
                x: "undefined",
                y: "undefined"
            },
            g = "";

        function y() {
            "undefined" === typeof b.x && (b.x = window.pageXOffset, b.y = window.pageYOffset);
            var e = b.x - window.pageXOffset,
                t = b.y - window.pageYOffset;
            return e < 0 ? g = "right" : e > 0 ? g = "left" : t + 20 < 0 ? g = "down" : t - 20 > 0 && (g = "up"), b.x = window.pageXOffset, b.y = window.pageYOffset, {
                scrollDirection: g,
                scrollOffset: b
            }
        }

        function w(e) {
            s.forEach(function (t) {
                e.online = navigator.onLine, t(e)
            })
        }

        function k(e) {
            s.push(e)
        }

        function _(e, t) {
            l.forEach(function (n) {
                e.active = t, n(e)
            })
        }

        function x(e) {
            l.push(e)
        }

        function N(e) {
            var t = l.indexOf(e);
            t > -1 && l.splice(t, 1)
        }

        function I() {
            var e = {};
            return "undefined" !== typeof document.hidden ? (e.hidden = "hidden", e.event = "visibilitychange", e.state = "visibilityState") : "undefined" !== typeof document.webkitHidden ? (e.hidden = "webkitHidden", e.event = "webkitvisibilitychange", e.state = "webkitVisibilityState") : "undefined" !== typeof document.mozHidden ? (e.hidden = "mozHidden", e.event = "mozvisibilitychange", e.state = "mozVisibilityState") : "undefined" !== typeof document.msHidden && (e.hidden = "msHidden", e.event = "msvisibilitychange", e.state = "msVisibilityState"), e
        }
        "undefined" !== typeof window && (window.addEventListener("online", w), window.addEventListener("offline", w)), "undefined" !== typeof window && (window.addEventListener("focus", function (e) {
            return _(e, !0)
        }), window.addEventListener("blur", function (e) {
            return _(e, !1)
        }), window.addEventListener("beforeunload", function (e) {
            return _(e, !1)
        })), a["a"].document.addEventListener(I.event, function (e) {
            return _(e, document[I.hidden])
        })
    }, "4f30": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "CHANNEL_HOME", function () {
            return a
        }), n.d(t, "CHANNEL_DIANYING", function () {
            return o
        }), n.d(t, "CHANNEL_DIANSHIJU", function () {
            return c
        }), n.d(t, "CHANNEL_JILUPIAN", function () {
            return u
        }), n.d(t, "CHANNEL_DONGMAN", function () {
            return s
        }), n.d(t, "CHANNEL_YINYUE", function () {
            return l
        }), n.d(t, "CHANNEL_ZONGYI", function () {
            return d
        }), n.d(t, "CHANNEL_YULE", function () {
            return p
        }), n.d(t, "CHANNEL_GAME", function () {
            return f
        }), n.d(t, "CHANNEL_LVYOU", function () {
            return h
        }), n.d(t, "CHANNEL_PIANHUA", function () {
            return m
        }), n.d(t, "CHANNEL_GONGKAIKE", function () {
            return v
        }), n.d(t, "CHANNEL_JIAOYU", function () {
            return b
        }), n.d(t, "CHANNEL_SHISHANG", function () {
            return g
        }), n.d(t, "CHANNEL_SHISHANGZONGYI", function () {
            return y
        }), n.d(t, "CHANNEL_SHAOER", function () {
            return w
        }), n.d(t, "CHANNEL_WEIDIANYING", function () {
            return k
        }), n.d(t, "CHANNEL_TIYU", function () {
            return _
        }), n.d(t, "CHANNEL_AOYUN", function () {
            return x
        }), n.d(t, "CHANNEL_ZHIBO", function () {
            return N
        }), n.d(t, "CHANNEL_GUANGGAO", function () {
            return I
        }), n.d(t, "CHANNEL_SHENGHUO", function () {
            return O
        }), n.d(t, "CHANNEL_FUN", function () {
            return j
        }), n.d(t, "CHANNEL_QIPA", function () {
            return C
        }), n.d(t, "CHANNEL_CAIJING", function () {
            return A
        }), n.d(t, "CHANNEL_ZIXUN", function () {
            return S
        }), n.d(t, "CHANNEL_QICHE", function () {
            return E
        }), n.d(t, "CHANNEL_YUANCHUANG", function () {
            return P
        }), n.d(t, "CHANNEL_JUNSHI", function () {
            return H
        }), n.d(t, "CHANNEL_MUYING", function () {
            return T
        }), n.d(t, "CHANNEL_KEJI", function () {
            return L
        }), n.d(t, "CHANNEL_TUOKOUXIU", function () {
            return q
        }), n.d(t, "CHANNEL_JIANKANG", function () {
            return R
        }), n.d(t, "CHANNEL_GONGYI", function () {
            return B
        }), n.d(t, "CHANNEL_TAOMI", function () {
            return U
        }), n.d(t, "CHANNEL_LIANXIANGHEZUO", function () {
            return M
        }), n.d(t, "CHANNEL_PIANMAQICESHI", function () {
            return D
        }), n.d(t, "CHANNEL_OTHER", function () {
            return V
        }), n.d(t, "CHANNEL_CESHI", function () {
            return $
        }), n.d(t, "CHANNEL_VIP", function () {
            return G
        }), n.d(t, "CHANNEL_QIYICHUPIN", function () {
            return z
        }), n.d(t, "CHANNEL_AIPINDAO", function () {
            return Y
        }), n.d(t, "CHANNEL_YINGXUN", function () {
            return F
        }), n.d(t, "CHANNEL_LIVE", function () {
            return Q
        }), n.d(t, "CHANNEL_SHOW", function () {
            return K
        }), n.d(t, "CHANNEL_LIB", function () {
            return J
        }), n.d(t, "CHANNEL_HOT", function () {
            return W
        }), n.d(t, "CHANNEL_BILLBOARD", function () {
            return X
        }), n.d(t, "PAGE_SINGLE", function () {
            return Z
        }), n.d(t, "getChannels", function () {
            return te
        }), n.d(t, "getChannel", function () {
            return ne
        }), n.d(t, "formatTitle", function () {
            return ie
        });
        var r = n("a4bb"),
            i = n.n(r),
            a = (n("ac6a"), n("f3e2"), n("7514"), n("6762"), n("2fdb"), n("d25f"), "0"),
            o = "1",
            c = "2",
            u = "3",
            s = "4",
            l = "5",
            d = "6",
            p = "7",
            f = "8",
            h = "9",
            m = "10",
            v = "11",
            b = "12",
            g = "13",
            y = "14",
            w = "15",
            k = "16",
            _ = "17",
            x = "18",
            N = "19",
            I = "20",
            O = "21",
            j = "22",
            C = "23",
            A = "24",
            S = "25",
            E = "26",
            P = "27",
            H = "28",
            T = "29",
            L = "30",
            q = "31",
            R = "32",
            B = "33",
            U = "91",
            M = "92",
            D = "96",
            V = "97",
            $ = "99",
            G = "120",
            z = "111",
            Y = "134",
            F = "121",
            Q = "live",
            K = "show",
            J = "lib",
            W = "hotSpot",
            X = "billboard",
            Z = "single",
            ee = [{
                name: "精选",
                id: a,
                url: "/",
                rseat: "707061_navhome",
                page: Z
            }, {
                name: "VIP会员",
                id: G,
                url: "/vip/",
                rseat: "707061_navvip",
                page: Z,
                playOrder: 0
            }, {
                name: "热点",
                id: W,
                url: "/feed/",
                rseat: "612061_hotfeed",
                page: Z
            }, {
                name: "电视剧",
                id: c,
                url: "/dianshiju/",
                rseat: "707061_navdianshiju",
                page: Z,
                playOrder: 2
            }, {
                name: "电影",
                id: o,
                url: "/dianying/",
                rseat: "707061_navdianying",
                page: Z,
                playOrder: 1
            }, {
                name: "儿童",
                id: w,
                url: "/shaoer/",
                rseat: "707061_navertong",
                page: Z,
                playOrder: 16
            }, {
                name: "综艺",
                id: d,
                url: "/zongyi/",
                rseat: "707061_navzongyi",
                page: Z,
                playOrder: 3
            }, {
                name: "动漫",
                id: s,
                url: "/dongman/",
                rseat: "707063_navdongman",
                page: Z,
                playOrder: 4
            }, {
                name: "直播",
                id: Q,
                url: "/live/",
                rseat: "707061_navzhibo",
                page: Z
            }, {
                name: "资讯",
                id: S,
                url: "/zixun/",
                rseat: "707061_navzixun",
                page: Z,
                playOrder: 26
            }, {
                name: "爱奇艺号",
                id: Y,
                url: "/aipindao/",
                rseat: "71128_header_aipindao",
                page: Z
            }, {
                name: "娱乐",
                id: p,
                url: "/yule/",
                rseat: "707061_navyule",
                page: Z,
                playOrder: 5
            }, {
                name: "原创",
                id: P,
                url: "/yuanchuang/",
                rseat: "707061_navyuanchuang",
                page: Z,
                playOrder: 25
            }, {
                name: "搞笑",
                id: j,
                url: "/fun/",
                rseat: "707061_navgaoxiao",
                page: Z,
                playOrder: 13
            }, {
                name: "影讯",
                id: F,
                url: "/yingxun/",
                rseat: "707061_navyingxun",
                page: Z
            }, {
                name: "健康",
                id: R,
                url: "/jiankang/",
                rseat: "707061_navjiankang",
                page: Z,
                playOrder: 22
            }, {
                name: "生活",
                id: O,
                url: "/life/",
                rseat: "707061_navshenghuo",
                page: Z,
                playOrder: 17
            }, {
                name: "母婴",
                id: T,
                url: "/muying/",
                rseat: "707061_navmuying",
                page: Z,
                playOrder: 21
            }, {
                name: "脱口秀",
                id: q,
                url: "/tuokouxiu/",
                rseat: "707061_navtuokouxiu",
                page: Z,
                playOrder: 8
            }, {
                name: "军事",
                id: H,
                url: "/mil/",
                rseat: "707061_navjunshi",
                page: Z,
                playOrder: 18
            }, {
                name: "片花",
                id: m,
                url: "/pianhua/",
                rseat: "707061_navpianhua",
                page: Z,
                playOrder: 7
            }, {
                name: "旅游",
                id: h,
                url: "/lvyou/",
                rseat: "707061_navlvyou",
                page: Z,
                playOrder: 22
            }, {
                name: "时尚",
                id: g,
                url: "/shishang/",
                rseat: "707061_navshishang",
                page: Z,
                playOrder: 12
            }, {
                name: "知识",
                id: b,
                url: "/edu/",
                rseat: "707061_navjiaoyu",
                page: Z,
                playOrder: 20
            }, {
                name: "财经",
                id: A,
                url: "/caijing/",
                rseat: "707061_navcaijing",
                page: Z,
                playOrder: 14
            }, {
                name: "音乐",
                id: l,
                url: "/yinyue/",
                rseat: "707061_navyinyue",
                page: Z,
                playOrder: 10
            }, {
                name: "汽车",
                id: E,
                url: "/qiche/",
                rseat: "707061_navqiche",
                page: Z,
                playOrder: 24
            }, {
                name: "纪录片",
                id: u,
                url: "/jilupian/",
                rseat: "707061_navjilupian",
                page: Z,
                playOrder: 11
            }, {
                name: "体育",
                id: _,
                url: "/sports/",
                rseat: "707061_navtiyu",
                page: Z,
                playOrder: 10.1
            }, {
                name: "游戏",
                id: f,
                url: "/youxi/",
                rseat: "707061_navyouxi",
                page: Z,
                playOrder: 9
            }, {
                name: "科技",
                id: L,
                url: "/keji/",
                rseat: "707061_navkeji",
                page: Z,
                playOrder: 23
            }, {
                name: "网络电影",
                id: k,
                url: "/weidianying/",
                rseat: "707061_navwangluodianying",
                page: Z,
                playOrder: 6
            }, {
                name: "广告",
                id: I,
                url: "/ad/",
                rseat: "707061_navguanggao",
                page: Z
            }, {
                name: "爱奇艺出品",
                id: z,
                url: "/qiyichupin/",
                rseat: "707061_naviqiyi",
                page: Z
            }, {
                name: "公益",
                id: B,
                url: "/gongyi/",
                rseat: "707061_navgongyi",
                page: Z,
                playOrder: 19
            }, {
                name: "风云榜",
                id: X,
                url: "/billboard.html",
                rseat: "707061_navbillboard",
                page: Z
            }, {
                name: "演出",
                id: K,
                url: "/show/",
                rseat: "810121_navyanchu",
                page: Z
            }, {
                name: "全网影视",
                id: J,
                url: "/lib/",
                rseat: "707061_navvideo"
            }];

        function te(e) {
            return e ? ee.filter(function (t) {
                return e.includes(t.id)
            }) : ee
        }

        function ne(e) {
            var t = te();
            return t.find(function (t) {
                return t.id === e
            })
        }

        function re(e, t, n) {
            return e.videos.forEach(function (e, r) {
                0 === r && n || 2 === e.contentType && "6" !== t && (e.mainTitle = e.subtitle || e.subTitle || e.mainTitle)
            }), e
        }

        function ie(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return t && "doubleTitle" !== n ? (t += "", i()(n).length && void 0 === n[e.order] ? e : re(e, t, n[e.order])) : e
        }
    }, 5191: function (e, t, n) {
        "use strict";
        var r = n("51cb");
        n.d(t, "b", function () {
            return r["b"]
        }), n.d(t, "a", function () {
            return r["a"]
        })
    }, "51cb": function (e, t, n) {
        "use strict";
        var r = n("795b"),
            i = n.n(r),
            a = (n("7f7f"), {
                js: {
                    tag: "script",
                    urlAttr: "src",
                    attrs: {
                        async: !0
                    }
                },
                css: {
                    tag: "link",
                    urlAttr: "href",
                    attrs: {
                        type: "text/css",
                        rel: "stylesheet"
                    }
                }
            });

        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = a[t.type || "js"],
                r = document.querySelector("".concat(n.tag, "[").concat(n.urlAttr, '="').concat(e, '"]'));
            if (r || !e) return i.a.resolve();
            var o = document.getElementsByTagName("script")[0] || document.head,
                c = document.createElement(n.tag);
            for (var u in c[n.urlAttr] = e, n.attrs) c[u] = n.attrs[u];
            return o.parentNode.insertBefore(c, o), new i.a(function (t, n) {
                c.onload = function () {
                    c = null, t()
                }, c.onerror = function (t) {
                    s(), t.url = e, n(t)
                }
            });

            function s() {
                c.parentNode && c.parentNode.removeChild(c), c = null
            }
        }
        var c = "https://security.iqiyi.com/static/cook/v1/cooksdk.js";

        function u() {
            var e = "getFingerPrint";
            return l(e, function () {
                return d()
            })
        }

        function s() {
            var e = "getEnvInfo";
            return l(e, function () {
                return v()
            })
        }

        function l(e, t) {
            l.cache = l.cache || {};
            var n = l.cache[e];
            return n || (l.cache[e] = t())
        }

        function d() {
            try {
                var e = "undefined" === typeof dfp ? o(c) : i.a.resolve();
                return e.then(function () {
                    var e = h();
                    return e || p(), e || ""
                })
            } catch (t) {
                return ""
            }
        }

        function p() {
            clearTimeout(p.time), p.time = setTimeout(function () {
                f()
            }, 2e3)
        }

        function f() {
            return window.dfp.tryGetFingerPrint() || ""
        }

        function h() {
            try {
                return window.dfp.getDfpCache() || ""
            } catch (e) {
                return ""
            }
        }

        function m() {
            return new i.a(function (e, t) {
                window.dfp.getEnvInfo(function (t) {
                    e(t || "")
                })
            })
        }

        function v() {
            try {
                var e = "undefined" === typeof dfp ? o(c) : i.a.resolve();
                return e.then(function () {
                    return m()
                })
            } catch (t) {
                return ""
            }
        }
        n("57e7");
        var b = n("0a0d"),
            g = n.n(b),
            y = n("b383"),
            w = n.n(y),
            k = 0;

        function _() {}

        function x(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = N(r.params),
                o = r.prefix || "__jp",
                c = r.callback || o + g()() + k++,
                u = r.timeout || 15e3,
                s = document.getElementsByTagName("script")[0] || document.head;
            return new i.a(function (r, i) {
                function o() {
                    t.removeEventListener("error", l), t.parentNode && t.parentNode.removeChild(t), window[c] = _, n && clearTimeout(n)
                }

                function l() {
                    o(), i(Error("error"))
                }
                u && (n = setTimeout(function () {
                    o(), i(Error("timeout"))
                }, u)), window[c] = function (e) {
                    o(), r({
                        data: e
                    })
                }, a.callback = c, e = "".concat(e).concat(e.indexOf("?") > -1 ? "&" : "?").concat(w.a.stringify(a)), t = document.createElement("script"), t.addEventListener("error", l), t.src = e, s.parentNode.insertBefore(t, s)
            })
        }

        function N() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = {};
            for (var n in e) {
                var r = e[n];
                e.hasOwnProperty(n) && void 0 !== r && (t[n] = e[n])
            }
            return t
        }
        n("6b54"), n("87b3");
        var I = n("f499"),
            O = n.n(I),
            j = (n("a481"), {}),
            C = {},
            A = E() || T(j),
            S = P() || T(C);

        function E() {
            var e;
            try {
                window.sessionStorage.removeItem("_Q_test_"), window.sessionStorage.setItem("_Q_test_", 1), window.sessionStorage.removeItem("_Q_test_"), e = window.sessionStorage
            } catch (t) {
                return null
            }
            return H(e)
        }

        function P() {
            var e;
            try {
                window.localStorage.removeItem("_Q_test_"), window.localStorage.setItem("_Q_test_", 1), window.localStorage.removeItem("_Q_test_"), e = window.localStorage
            } catch (t) {
                return null
            }
            return H(e)
        }

        function H(e) {
            var t = "__string__";
            return {
                getItem: function (n) {
                    var r = e.getItem(n);
                    if (r && r.indexOf(t) >= 0) return r.replace(t, "");
                    if ("undefined" !== r) try {
                        return JSON.parse(r)
                    } catch (i) {
                        return r
                    }
                }, setItem: function (r, i) {
                    var a;
                    a = n(i) ? i + t : O()(i), e.setItem(r, a)
                }, removeItem: function (t) {
                    e.removeItem(t)
                }
            };

            function n(e) {
                return "[object String]" === Object.prototype.toString.call(e)
            }
        }

        function T(e) {
            return {
                getItem: function (t) {
                    return e[t]
                }, setItem: function (t, n) {
                    e[t] = n
                }, removeItem: function (t) {
                    delete e[t]
                }
            }
        }
        var L = n("a78e"),
            q = n.n(L),
            R = {};

        function B(e, t) {
            void 0 === e && void 0 === t || (R[e] = t, S.setItem(e, t), q.a.set(e, t, {
                expires: 365,
                path: "/",
                domain: "iqiyi.com"
            }))
        }

        function U(e) {
            if (R[e]) return R[e];
            var t = S.getItem(e),
                n = q.a.get(e);
            return (t || n) && B(e, t || n), R[e]
        }
        n.d(t, "b", function () {
            return u
        }), n.d(t, "a", function () {
            return s
        }), n.d(t, "e", function () {
            return o
        }), n.d(t, "d", function () {
            return x
        }), n.d(t, "g", function () {
            return A
        }), n.d(t, "f", function () {
            return S
        }), n.d(t, "h", function () {
            return B
        }), n.d(t, "c", function () {
            return U
        })
    }, 5321: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return N
        }), n.d(t, "k", function () {
            return O
        }), n.d(t, "x", function () {
            return C
        }), n.d(t, "o", function () {
            return A
        }), n.d(t, "n", function () {
            return S
        }), n.d(t, "w", function () {
            return E
        }), n.d(t, "v", function () {
            return P
        }), n.d(t, "i", function () {
            return H
        }), n.d(t, "s", function () {
            return T
        }), n.d(t, "y", function () {
            return L
        }), n.d(t, "A", function () {
            return R
        }), n.d(t, "g", function () {
            return B
        }), n.d(t, "B", function () {
            return U
        }), n.d(t, "u", function () {
            return M
        }), n.d(t, "r", function () {
            return $
        }), n.d(t, "q", function () {
            return z
        }), n.d(t, "p", function () {
            return Y
        }), n.d(t, "h", function () {
            return F
        });
        n("96cf");
        var r, i = n("5176"),
            a = n.n(i),
            o = (n("7f7f"), n("3b8d")),
            c = n("bd86"),
            u = n("cebc"),
            s = n("0a0d"),
            l = n.n(s),
            d = n("b383"),
            p = n.n(d),
            f = n("b2e7"),
            h = n("4f30"),
            m = n("8296"),
            v = n("5191"),
            b = n("8d81"),
            g = n.n(b),
            y = n("ec1c");
        n.d(t, "b", function () {
            return y["a"]
        }), n.d(t, "c", function () {
            return y["b"]
        }), n.d(t, "d", function () {
            return y["c"]
        }), n.d(t, "e", function () {
            return y["d"]
        }), n.d(t, "f", function () {
            return y["e"]
        }), n.d(t, "j", function () {
            return y["g"]
        }), n.d(t, "l", function () {
            return y["h"]
        }), n.d(t, "m", function () {
            return y["i"]
        }), n.d(t, "t", function () {
            return y["j"]
        }), n.d(t, "z", function () {
            return y["k"]
        });
        var w = "//msg.qy.net/b",
            k = "//msg.qy.net/v5/alt/act",
            _ = "//msg.qy.net/tmpstats.gif",
            x = "//msg.qy.net/v5/bi/opendata",
            N = "block",
            I = {
                c1: "",
                tmplt: ""
            };

        function O() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            for (var t in Object(y["f"])(e), I) {
                var n = e[t];
                I[t] = void 0 !== n && "" !== n ? n : ""
            }
        }

        function j(e) {
            return e.android ? "android" : e.ios ? "ios" : e.wp ? "windows" : e.blackberry ? "blackberry" : ""
        }

        function C(e) {
            var t = {
                    bstp: e.bstp || 2,
                    p1: "2_20_201",
                    p2: "2011",
                    u: Object(f["w"])(),
                    pu: Object(f["C"])(),
                    rn: l()(),
                    purl: e.purl || 3,
                    stime: l()(),
                    mod: "cn_s",
                    rfr: encodeURIComponent(document.referrer),
                    s_mode: e.mode || 1,
                    c1: e.c1,
                    rpage: e.rpage,
                    s2: e.s2,
                    t: e.t,
                    block: e.block,
                    position: e.position,
                    rseat: e.rseat,
                    s_bkt: e.sbkt,
                    s_e: e.se,
                    s_r: e.sr,
                    s_rq: e.srq,
                    s_ilayer: e.silayer,
                    s_qr: e.sqr,
                    s_itype: e.sitype,
                    s_ptype: e.ptype,
                    s_target: e.starget,
                    s_source: e.source,
                    s_subsrc: e.ssubsrc,
                    s_ct: e.sct,
                    s_page: e.spage,
                    s_sr: e.ssr,
                    s_token: e.stoken,
                    s_docids: e.sdocids,
                    s_st: e.sst,
                    s_ad: e.sad,
                    s_att: e.satt,
                    s_relq: e.srelq,
                    s_site: e.ssite,
                    s_tag: e.stag
                },
                n = {};
            for (var r in t) {
                var i = t[r];
                void 0 !== i && "" !== i && (n[r] = i)
            }
            n.t = n.t || "", n.pu = n.pu || "", n.position = n.position || "", n.block = n.block || "", n.rfr = n.rfr || "", n.rseat = n.rseat || "", n.s_tag = n.s_tag || "", n.c1 = n.c1 || "", n.s_docids = n.s_docids || "", n.s_r = n.s_r || "";
            var a = new Image;
            a.src = "".concat(k, "?").concat(p.a.stringify(n))
        }

        function A(e) {
            P(Object(u["a"])({
                type: "recctplay20121226",
                usract: "userclick",
                cid: -1,
                path: 2,
                t: l()()
            }, e))
        }

        function S(e) {
            P(Object(u["a"])({
                type: "showlizard20130613",
                usract: 1,
                cid: -1,
                path: 2,
                t: l()()
            }, e))
        }

        function E(e) {
            P(Object(u["a"])({
                type: "recctplay20121226"
            }, e))
        }

        function P(e) {
            var t = Object(u["a"])({
                    type: e.type,
                    usract: e.usract,
                    ppuid: Object(f["C"])(),
                    uid: Object(f["w"])(),
                    event_id: e.event_id,
                    bkt: e.bkt,
                    area: e.area,
                    platform: 31,
                    rank: e.rank,
                    taid: e.taid,
                    tcid: e.tcid,
                    albumlist: e.albumList,
                    cid: e.cid,
                    aid: e.aid,
                    source: e.source
                }, e),
                n = {};
            for (var r in t) {
                var i = t[r];
                void 0 !== i && "" !== i && (n[r] = i)
            }
            t.ppuid = t.ppuid || "";
            var a = new Image;
            a.src = "".concat(_, "?").concat(p.a.stringify(n))
        }
        var H = (r = {}, Object(c["a"])(r, h["CHANNEL_ZONGYI"], "504091_6"), Object(c["a"])(r, h["CHANNEL_DIANYING"], "504091_1"), Object(c["a"])(r, h["CHANNEL_WEIDIANYING"], "504091_16"), r);

        function T(e) {
            var t = {
                    p1: "2_20_201",
                    u: Object(f["w"])(),
                    pu: Object(f["C"])(),
                    rfr: encodeURIComponent(document.referrer),
                    stime: l()(),
                    t: e.t,
                    mcnt: "lgzr",
                    r_bkt: e.r_bkt,
                    r_area: e.r_area,
                    r_eventid: e.r_eventid,
                    r_itemlist: e.r_itemlist,
                    r_originl: e.r_originl,
                    r_source: e.r_source,
                    r_ext: e.r_ext,
                    l_parm: e.l_parm,
                    l_ab: e.l_ab,
                    r_rank: e.r_rank,
                    block: e.block,
                    rseat: e.rseat,
                    r_cid: e.r_cid,
                    r_tcid: e.r_tcid,
                    abtest: e.abtest,
                    r_themeid: e.r_themeid,
                    r_isVip: e.r_isVip,
                    r_tvid: e.r_tvid,
                    purl: e.purl,
                    r_vidlist: e.r_vidlist,
                    hu: e.hu,
                    rpage: e.rpage,
                    position: e.position,
                    bstp: 62,
                    c_rtype: "P1"
                },
                n = {};
            for (var r in t) {
                var i = t[r];
                void 0 !== i && "" !== i && (n[r] = i)
            }
            var a = new Image;
            a.src = "".concat(k, "?").concat(p.a.stringify(n))
        }

        function L(e) {
            return q.apply(this, arguments)
        }

        function q() {
            return q = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = Object(f["w"])(), e.t0 = t.cid, e.t1 = t.qipuId, e.t2 = t.shrtgt, e.t3 = t.rseat, e.t4 = t.tmplt, e.t5 = n, e.t6 = Object(f["C"])(), e.next = 10, Object(v["b"])();
                    case 10:
                        e.t7 = e.sent, e.t8 = g()(n + "share_pingback" + 1 * new Date), e.t9 = (new Date).getTime(), r = {
                            c1: e.t0,
                            r: e.t1,
                            shrtgt: e.t2,
                            rseat: e.t3,
                            tmplt: e.t4,
                            u: e.t5,
                            pu: e.t6,
                            dfp: e.t7,
                            e: e.t8,
                            t: 20,
                            pf: 2,
                            p: 20,
                            p1: 201,
                            s1: 1,
                            bstp: "30_shr",
                            rn: e.t9,
                            shrtp: 1,
                            a: "dockshr",
                            s2: "2_1"
                        }, i = new Image, i.src = "".concat(w, "?").concat(p.a.stringify(r));
                    case 16:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), q.apply(this, arguments)
        }

        function R(e, t) {
            var n = e.target;
            while (t !== n && ("A" !== n.tagName || !B(n))) n = n.parentNode;
            var r = B(n);
            if (r) {
                var i = t.getAttribute("target");
                e.preventDefault(), U(r, i)
            }
        }

        function B(e) {
            var t = e.getAttribute("href");
            return "#" === t || /javascript:/i.test(t) ? "" : t
        }

        function U(e, t) {
            e && setTimeout(function () {
                "_blank" === t ? window.open(e, t) : location.href = e
            }, 200)
        }

        function M(e) {
            var t = Object(u["a"])({
                    t: "30",
                    pf: /pps.tv/i.test(document.domain) ? 202 : 2,
                    p: "20",
                    p1: "201",
                    u: Object(f["w"])(),
                    pu: Object(f["C"])(),
                    rn: String(Math.floor(999999999 * Math.random())),
                    r: e.url || location.href,
                    tm: e.tm
                }, I),
                n = new Image;
            n.src = "".concat(w, "?").concat(p.a.stringify(t))
        }

        function D() {
            return "".concat(Object(m["z"])().width, "*").concat(Object(m["z"])().height)
        }

        function V(e) {
            var t = {
                p1: "2_20_201",
                device_id: Object(f["w"])(),
                flashuid: Object(f["w"])(),
                v: "1.0",
                os_t: j(m["L"]),
                os_v: m["L"].version,
                ua_model: m["M"].version,
                brand: m["M"].name,
                lang: "zh-cn",
                resolution: D(),
                rn: String(Math.floor(999999999 * Math.random())),
                rfr: document.referrer,
                url: location.href || "",
                ce: String(Math.floor(999999999 * Math.random()))
            };
            a()(t, e);
            var n = new Image;
            n.src = "".concat(x, "?").concat(p.a.stringify(t))
        }

        function $(e) {
            V(a()({
                type: 5,
                act_name: document.title,
                duration: e.duration
            }, e))
        }
        var G = null;

        function z(e) {
            G = String(Math.floor(999999999 * Math.random())), V(a()({
                type: 3,
                tvid: e.tvid,
                aid: e.aid,
                cid: e.cid,
                pid: G
            }, e))
        }

        function Y(e) {
            V(a()({
                type: 4,
                tvid: e.tvid,
                aid: e.aid,
                cid: e.cid,
                pid: G,
                duration: e.duration
            }, e))
        }

        function F(e) {
            var t = Object(u["a"])({
                    t: "",
                    rpage: "",
                    rseat: "",
                    block: "",
                    p1: "2_20_201",
                    p2: "",
                    c1: "",
                    qpid: "",
                    aid: "",
                    s2: "",
                    s3: "",
                    s4: "",
                    r_eventid: "",
                    r_bkt: "",
                    r_area: "",
                    r_rank: "",
                    r_ext: "",
                    r_tvid: "",
                    r_feedid: "",
                    u: Object(f["w"])(),
                    pu: Object(f["C"])()
                }, e),
                n = new Image;
            n.src = "".concat(k, "?").concat(p.a.stringify(t))
        }
    }, "53a7": function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return l
        }), n.d(t, "d", function () {
            return d
        }), n.d(t, "c", function () {
            return f
        }), n.d(t, "a", function () {
            return m
        }), n.d(t, "b", function () {
            return b
        });
        var r = n("f499"),
            i = n.n(r),
            a = (n("96cf"), n("3b8d")),
            o = n("795b"),
            c = n.n(o),
            u = n("8296"),
            s = "//statics-web.iqiyi.com/common/jssdk/iqiyiJsBridge-v2-min.js";

        function l() {
            return new c.a(function (e, t) {
                u["p"].iqiyi || t(new Error), window.iqiyi ? window.iqiyi.init(function (t) {
                    e(t)
                }, t) : Object(u["I"])(s).then(function () {
                    window.iqiyi ? window.iqiyi.init(function (t) {
                        e(t)
                    }, t) : t(new Error)
                }, t)
            })
        }

        function d() {
            return p.apply(this, arguments)
        }

        function p() {
            return p = Object(a["a"])(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = "", e.prev = 1, e.next = 4, l();
                    case 4:
                        return n = e.sent, e.abrupt("return", n && n.data ? n.data.qyID : t);
                    case 8:
                        return e.prev = 8, e.t0 = e["catch"](1), e.abrupt("return", t);
                    case 11:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [1, 8]
                ])
            })), p.apply(this, arguments)
        }

        function f() {
            return h.apply(this, arguments)
        }

        function h() {
            return h = Object(a["a"])(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, l();
                    case 3:
                        return t = e.sent, e.abrupt("return", t && t.data && t.data.dfp);
                    case 7:
                        return e.prev = 7, e.t0 = e["catch"](0), e.abrupt("return", "");
                    case 10:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [0, 7]
                ])
            })), h.apply(this, arguments)
        }

        function m() {
            return v.apply(this, arguments)
        }

        function v() {
            return v = Object(a["a"])(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, l();
                    case 3:
                        t = e.sent, t && window.iqiyi.closePage(), e.next = 9;
                        break;
                    case 7:
                        e.prev = 7, e.t0 = e["catch"](0);
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [0, 7]
                ])
            })), v.apply(this, arguments)
        }

        function b(e, t, n) {
            return g.apply(this, arguments)
        }

        function g() {
            return g = Object(a["a"])(regeneratorRuntime.mark(function e(t, n, r) {
                var a, o;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, l();
                    case 3:
                        if (a = e.sent, !a) {
                            e.next = 7;
                            break
                        }
                        return window.iqiyi.commonInvoke(t, n, function (e) {
                            "function" === typeof r && r(e)
                        }), e.abrupt("return", !0);
                    case 7:
                        e.next = 15;
                        break;
                    case 9:
                        if (e.prev = 9, e.t0 = e["catch"](0), "function" !== typeof r) {
                            e.next = 15;
                            break
                        }
                        return o = {
                            success: !1
                        }, r(i()(o)), e.abrupt("return", !1);
                    case 15:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [0, 9]
                ])
            })), g.apply(this, arguments)
        }
    }, 6451: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return a
        }), n.d(t, "a", function () {
            return o
        }), n.d(t, "b", function () {
            return c
        });
        var r = n("2b0e"),
            i = n("8296");

        function a(e, t) {
            var n = o(e);
            if (n) {
                var i = r["default"].prototype.$qiyiPlayer.$el;
                if (!n && !i) return;
                var a = n.offsetTop,
                    u = n.clientWidth,
                    s = n.offsetLeft;
                i.style.top = "".concat(a, "px"), i.style.width = "".concat(u, "px"), i.style.left = "".concat(s, "px"), i.style.position = "absolute", i.style.index = 1e3, t && c(n)
            }
        }

        function o(e) {
            return e.position ? Object(i["N"])(e.el, e.position, !0) : null
        }

        function c(e) {
            var t = r["default"].prototype.$qiyiPlayer.$el;
            if (e || t) {
                var n = e.offsetTop,
                    i = document.documentElement.clientHeight || document.body.clientHeight,
                    a = t.offsetHeight;
                try {
                    window.scrollTo({
                        top: n + -i / 2 + a / 2,
                        behavior: "smooth"
                    })
                } catch (o) {
                    window.scrollTo(0, n + -i / 2 + a / 2)
                }
            }
        }
    }, "65d4": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("keep-alive", [e.show ? n("HeaderSearch", {
                    on: {
                        search: e.search
                    }
                }) : e._e()], 1), n("HeaderTop", e._b({}, "HeaderTop", e.$attrs, !1)), e.showNav ? n("HeaderNav", e._b({}, "HeaderNav", e.$attrs, !1)) : e._e()], 1)
            },
            i = [],
            a = n("a4bb"),
            o = n.n(a),
            c = (n("ac6a"), n("f3e2"), n("cebc")),
            u = n("2f62"),
            s = n("14cb"),
            l = n("72be"),
            d = n("6659"),
            p = n("2c06"),
            f = n("b383"),
            h = n.n(f),
            m = {
                name: "Header",
                components: {
                    HeaderTop: s["a"],
                    HeaderNav: l["a"],
                    HeaderSearch: d["a"]
                },
                inheritAttrs: !1,
                props: {
                    showNav: {
                        type: Boolean,
                        default: !0
                    },
                    pageStyle: {
                        type: Object,
                        default: null
                    }
                },
                computed: Object(u["e"])({
                    show: "searchShow"
                }),
                serverPrefetch: function () {
                    this.setPageStyle()
                }, beforeRouteEnter: function (e, t, n) {
                    n(function (e) {
                        e.setPageStyle()
                    })
                }, beforeUpdate: function () {
                    this.setPageStyle()
                }, mounted: function () {
                    this.setHeaderHeight(this.$el.offsetHeight)
                }, methods: Object(c["a"])({}, Object(u["d"])(["setHeaderHeight"]), {
                    setPageStyle: function () {
                        var e, t = this;
                        e = this.$cookies.get(p["f"]) === p["r"] || this.$route.query.vfm === p["r"] ? {
                            headerTop: "header-army",
                            headerNav: "nav-head-army",
                            searchBtn: "search-army",
                            headerCallAppBtn: null
                        } : {
                            headerTop: "m-header-customized",
                            headerNav: "m-header-customized",
                            searchBtn: "m-header-customized",
                            headerCallAppBtn: null
                        }, this.pageStyle && o()(e).forEach(function (n) {
                            t.pageStyle && t.pageStyle[n] && (e[n] += " " + t.pageStyle[n])
                        }), this.$store.commit("setPageStyle", e)
                    }, search: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (e.key) {
                            var t = {
                                source: e.source,
                                key: e.key,
                                pos: e.pos,
                                vfrm: e.vfrm
                            };
                            location.href = "/search.html?".concat(h.a.stringify(t))
                        }
                    }
                })
            },
            v = m,
            b = n("2877"),
            g = Object(b["a"])(v, r, i, !1, null, null, null);
        t["a"] = g.exports
    }, 6659: function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    }],
                    staticClass: "m-search-full",
                    class: [{
                            "m-search-full-bgfff": e.coverShow
                        },
                        e.wrapperClass[e.abSample]
                    ]
                }, [n("section", {
                    staticClass: "m-header-search m-search-page"
                }, [n("div", {
                    staticClass: "header-search-box"
                }, [n("AuraLogoIqiyi", {
                    attrs: {
                        href: "/"
                    }
                }), n("div", {
                    staticClass: "header-searchInput"
                }, [n("form", {
                    attrs: {
                        action: "javascript:void(0);"
                    }
                }, [n("input", {
                    directives: [{
                        name: "focus",
                        rawName: "v-focus",
                        value: e.show,
                        expression: "show"
                    }],
                    ref: "input",
                    staticClass: "search-input",
                    attrs: {
                        placeholder: e.placeholder,
                        type: "search",
                        autovalue: "",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.inputValue
                    },
                    on: {
                        input: e.onInput,
                        search: e.onSearch
                    }
                }), n("a", {
                    class: e.inputSearchClassWrap[e.abSample],
                    attrs: {
                        href: "javascript:void(0);"
                    }
                }, [n("i", {
                    class: e.inputSearchClass[e.abSample]
                })]), n("a", {
                    class: e.inputCloseClassWrap[e.abSample],
                    attrs: {
                        href: "javascript:void(0);"
                    }
                }, [n("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.searchBtnShow,
                        expression: "searchBtnShow"
                    }],
                    class: e.inputCloseClass[e.abSample],
                    on: {
                        click: function (t) {
                            return t.preventDefault(), t.stopPropagation(), e.clear(t)
                        }
                    }
                })])])]), n("div", {
                    staticClass: "header-searchBtn"
                }, [n("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.searchBtnShow,
                        expression: "searchBtnShow"
                    }],
                    staticClass: "c-btn btn-search",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function (t) {
                            return e.search({
                                key: e.inputValue,
                                source: "input",
                                vfrm: "2-3-0-1"
                            })
                        }
                    }
                }, [e._v("搜索")]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.searchBtnShow,
                        expression: "!searchBtnShow"
                    }],
                    on: {
                        click: e.close
                    }
                }, [n("a", {
                    staticClass: "c-btn btn-cancle",
                    attrs: {
                        href: "javascript:void(0);"
                    }
                }, [e._v("取消")])])])], 1), n("HeaderSearchSuggest", {
                    attrs: {
                        "input-value": e.inputValue,
                        load: e.show,
                        search: e.search
                    }
                })], 1)])
            },
            i = [],
            a = (n("386d"), n("cebc")),
            o = n("2f62"),
            c = n("f4c6"),
            u = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("div", {
                    staticClass: "header-search-suggest"
                }, [n("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.suggests.length,
                        expression: "suggests.length"
                    }],
                    staticClass: "list-suggest"
                }, e._l(e.suggests, function (t, r) {
                    return n("li", {
                        key: r
                    }, [n("a", {
                        staticClass: "javascript:void(0)",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (n) {
                                return e.search({
                                    key: t.name,
                                    source: "suggest",
                                    pos: r + 1,
                                    vfrm: "2-3-3-1"
                                })
                            }
                        }
                    }, [e._v("\n          " + e._s(t.name) + "\n        ")])])
                }), 0), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.suggests.length && !e.inputValue,
                        expression: "!suggests.length && !inputValue"
                    }]
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.searchHistorys.length > 0,
                        expression: "searchHistorys.length > 0"
                    }],
                    staticClass: "search-item"
                }, [n("div", {
                    staticClass: "search-title"
                }, [n("div", {
                    staticClass: "c-title"
                }, [e._v("搜索历史")]), n("a", {
                    staticClass: "c-clearRecord",
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    domProps: {
                        innerHTML: e._s(e.clearRecordHtml[e.abSample])
                    },
                    on: {
                        click: e.clearSearchHistory
                    }
                })]), n("div", {
                    staticClass: "search-list"
                }, e._l(e.searchHistorys.slice(0, 6), function (t, r) {
                    return n("a", {
                        key: r,
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (n) {
                                return e.search({
                                    key: t,
                                    source: "history",
                                    pos: r + 1,
                                    vfrm: "2-3-0-1"
                                })
                            }
                        }
                    }, [e._v(e._s(t))])
                }), 0)]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.searchHots.length,
                        expression: "searchHots.length"
                    }],
                    staticClass: "search-item search-hot-item"
                }, [e._m(0), n("div", {
                    staticClass: "search-list"
                }, e._l(e.searchHots.slice(0, 6), function (t, r) {
                    return n("a", {
                        key: r,
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (n) {
                                return e.search({
                                    key: t.query,
                                    source: "hot",
                                    pos: r + 1,
                                    vfrm: "2-3-0-1"
                                })
                            }
                        }
                    }, [e._v(e._s(t.query))])
                }), 0)])])])])
            },
            s = [
                function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "search-title"
                    }, [n("div", {
                        staticClass: "c-title"
                    }, [e._v("热门搜索")])])
                }
            ],
            l = n("c415"),
            d = {
                name: "HeaderSearchSuggest",
                mixins: [l["a"]],
                props: {
                    inputValue: {
                        type: String,
                        default: ""
                    },
                    load: {
                        type: Boolean,
                        default: !1
                    },
                    search: {
                        type: Function,
                        default: function () {}
                    }
                },
                data: function () {
                    return {
                        clearRecordHtml: {
                            a: '<i class="c-channelAll c-channelAll-cleanUp"></i>',
                            b: "清空记录"
                        }
                    }
                }, computed: Object(a["a"])({}, Object(o["e"])(["suggests", "searchHots", "searchHistorys"])),
                watch: {
                    inputValue: function (e, t) {
                        this.getSuggest(e)
                    }, load: function (e, t) {
                        !this.searchHots.length && e && this.getSearchHot()
                    }
                },
                mounted: function () {
                    this.getSearchHistory(), this.load && this.getSearchHot()
                }, methods: Object(o["b"])(["clearSearchHistory", "getSearchHistory", "getSearchHot", "getSuggest"])
            },
            p = d,
            f = n("2877"),
            h = Object(f["a"])(p, u, s, !1, null, null, null),
            m = h.exports,
            v = {
                inserted: function (e, t) {
                    t.value ? e.focus() : e.blur()
                }, update: function (e, t) {
                    t.value ? e.focus() : e.blur()
                }
            },
            b = {
                name: "HeaderSearch",
                components: {
                    AuraLogoIqiyi: c["a"],
                    HeaderSearchSuggest: m
                },
                directives: {
                    focus: v
                },
                mixins: [l["a"]],
                data: function () {
                    return {
                        inputValue: this.searchValue,
                        isInputed: !1,
                        wrapperClass: {
                            a: "mSiteHeader_searchFull",
                            b: ""
                        },
                        inputSearchClass: {
                            a: "c-channelAll c-channelAll-search",
                            b: "c-glyphicon c-glyphicon-search"
                        },
                        inputSearchClassWrap: {
                            a: "inputSearch_icon",
                            b: ""
                        },
                        inputCloseClass: {
                            a: "c-channelAll c-channelAll-close",
                            b: "c-glyphicon c-glyphicon-close"
                        },
                        inputCloseClassWrap: {
                            a: "inputClose_icon",
                            b: ""
                        }
                    }
                }, computed: Object(a["a"])({
                    searchBtnShow: function () {
                        return !!this.inputValue
                    }, coverShow: function () {
                        return this.show && (!this.inputValue || !!this.suggests.length)
                    }
                }, Object(o["e"])({
                    show: "searchShow",
                    placeholder: "searchPlaceholder",
                    suggests: "suggests",
                    searchValue: "searchValue"
                })),
                watch: {
                    searchValue: function () {
                        this.searchValue && (this.inputValue = this.searchValue)
                    }, inputValue: function (e, t) {
                        this.$emit("update:inputValue", this.inputValue)
                    }, show: function () {
                        this.show && (document.documentElement.scrollTop = 0, document.body.scrollTop = 0)
                    }
                },
                mounted: function () {
                    this.inputValue = this.searchValue
                }, methods: Object(a["a"])({
                    clear: function () {
                        this.$refs.input.focus(), this.inputValue = ""
                    }, onSearch: function () {
                        var e = this.inputValue || this.placeholder,
                            t = this.isInputed ? "input" : "default";
                        this.search({
                            key: e,
                            source: t,
                            vfrm: "2-3-0-1"
                        })
                    }, onInput: function (e) {
                        this.inputValue = e.target.value, this.isInputed = !0
                    }, search: function (e) {
                        this.$emit("search", e), this.hideSearch()
                    }, close: function () {
                        this.$emit("close"), this.hideSearch()
                    }
                }, Object(o["b"])(["hideSearch"]))
            },
            g = b,
            y = Object(f["a"])(g, r, i, !1, null, null, null);
        t["a"] = y.exports
    }, "6bb4": function (e, t, n) {
        "use strict";
        var r, i, a = {
                name: "AuraLink",
                props: {
                    to: {
                        type: String,
                        default: ""
                    },
                    href: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String,
                        default: ""
                    }
                },
                render: function (e) {
                    var t = this.$scopedSlots.default ? this.$scopedSlots.default() : null;
                    return this.to ? e("router-link", {
                        attrs: {
                            to: this.to
                        }
                    }, [t]) : e("a", {
                        attrs: {
                            href: this.href || "javascript:void(0)",
                            title: this.title || ""
                        }
                    }, [t])
                }
            },
            o = a,
            c = n("2877"),
            u = Object(c["a"])(o, r, i, !1, null, null, null);
        t["a"] = u.exports
    }, "72be": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("AuraHeadLabels", e._b({
                    staticClass: "m-nav-head-only",
                    attrs: {
                        "head-class": e.headerNav
                    }
                }, "AuraHeadLabels", e.$attrs, !1), [e._l(e.channels, function (t) {
                    return n("li", {
                        key: t.id,
                        attrs: {
                            selected: e.selected(t.id)
                        }
                    }, [n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.rseat,
                            expression: "channel.rseat"
                        }],
                        staticClass: "c-linkChannel",
                        class: {
                            selected: e.selected(t.id)
                        },
                        attrs: {
                            href: t.url,
                            title: t.name
                        },
                        on: {
                            click: function (n) {
                                return n.preventDefault(), e.to(t)
                            }
                        }
                    }, [e._v("\n      " + e._s(t.name) + "\n    ")])])
                }), n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607051_channellist",
                        expression: "'607051_channellist'"
                    }],
                    staticClass: "c-menu-linkmore",
                    attrs: {
                        slot: "extra",
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: e.toChannelList
                    },
                    slot: "extra"
                }, [n("i", {
                    staticClass: "menu-more-icon"
                })])], 2)
            },
            i = [],
            a = n("cebc"),
            o = n("2f62"),
            c = n("4f30"),
            u = n("84cd"),
            s = n("b9df"),
            l = n("5321"),
            d = {
                name: "HeadNav",
                components: {
                    AuraHeadLabels: u["a"],
                    AuraHeadLabel: s["a"]
                },
                inheritAttrs: !1,
                props: {
                    channelId: {
                        type: String,
                        default: ""
                    }
                },
                data: function () {
                    return {
                        channels: Object(c["getChannels"])()
                    }
                }, computed: Object(a["a"])({}, Object(o["e"])({
                    defaultChannelId: "channelId",
                    headerNav: function (e) {
                        return e.pageStyle.headerNav
                    }
                })),
                methods: {
                    selected: function (e) {
                        return this.channelId ? this.channelId === e : this.defaultChannelId === e
                    }, to: function (e) {
                        e.page === c["PAGE_SINGLE"] ? this.$router.push({
                            path: e.url
                        }) : Object(l["B"])(e.url)
                    }, toChannelList: function () {
                        this.$router.push({
                            path: "/channel_list.html"
                        })
                    }
                }
            },
            p = d,
            f = n("2877"),
            h = Object(f["a"])(p, r, i, !1, null, null, null);
        t["a"] = h.exports
    }, "73d4": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return d
        }), n.d(t, "b", function () {
            return h
        });
        n("96cf");
        var r = n("3b8d"),
            i = n("936f"),
            a = n("2c06"),
            o = n("b2e7"),
            c = n("cecc"),
            u = "//pub.m.iqiyi.com/jp/h5/count/control/proxy/";

        function s(e, t) {
            return l.apply(this, arguments)
        }

        function l() {
            return l = Object(r["a"])(regeneratorRuntime.mark(function e(t, n) {
                var r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, i["a"].jsonp(t, {
                            params: n
                        });
                    case 3:
                        return r = e.sent, e.abrupt("return", r && r.data && "A00000" === r.data.code ? r.data.data : {});
                    case 7:
                        return e.prev = 7, e.t0 = e["catch"](0), e.abrupt("return", {
                            error: !0
                        });
                    case 10:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [0, 7]
                ])
            })), l.apply(this, arguments)
        }

        function d(e) {
            return p.apply(this, arguments)
        }

        function p() {
            return p = Object(r["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = {
                            is_iqiyi: !0,
                            qypid: Object(a["B"])(),
                            business: t.business,
                            is_video_page: t.is_video_page,
                            tvid: t.tvid,
                            albumid: t.aid,
                            categoryid: t.cid,
                            rpage: f(window.location.href),
                            s2: f(document.referrer),
                            uid: Object(o["C"])(),
                            block: t.block,
                            version: "1.0.0"
                        }, e.next = 3, s(u, n);
                    case 3:
                        return r = e.sent, e.abrupt("return", r);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), p.apply(this, arguments)
        }

        function f(e) {
            return window.btoa(Object(c["a"])(e))
        }

        function h() {
            return {
                rpage: f(window.location.href),
                s2: f(document.referrer)
            }
        }
    }, "78f5": function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return r
        }), n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return a
        });
        n("6b54"), n("87b3");

        function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !e || e <= 0 || isNaN(e) ? t.toString() : e < 1e4 ? e.toString() : e < 1e8 ? Math.floor(e / 1e3) / 10 + "万" : Math.floor(e / 1e7) / 10 + "亿"
        }

        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !e || e <= 0 || isNaN(e) ? t : e < 1e4 ? e : e <= 999e4 ? (e / 1e4).toFixed(1) + "w" : "999w+"
        }

        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !e || e <= 0 || isNaN(e) ? t : e < 1e5 ? o(e, ",", 3) : e < 1e6 ? (e / 1e4).toFixed(1) + "万" : e < 1e8 ? (e / 1e4).toFixed(0) + "万" : (e / 1e8).toFixed(1) + "亿"
        }

        function o(e, t, n) {
            for (var r = e.toString(), i = "", a = r.length; a > 0; a -= n) {
                var o = a - n < 0 ? 0 : a - n;
                i = t + r.slice(o, a) + i
            }
            return i.substring(1)
        }
    }, "7aa9": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        n("28a5"), n("57e7");
        var r = n("e814"),
            i = n.n(r);
        n("a481"), n("4917");

        function a(e) {
            if ("undefined" !== typeof window && a._detect) return a._detect;
            var t = {},
                n = {},
                r = {},
                c = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                u = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = !!e.match(/\(Macintosh; Intel /),
                l = e.match(/(iPad).*OS\s([\d_]+)/),
                d = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !l && e.match(/(iPhone\sOS)\s([\d_]+)/),
                f = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                h = e.match(/Windows Phone ([\d.]+)/),
                m = f && e.match(/TouchPad/),
                v = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                b = e.match(/Firefox\/([\d.]+)/),
                g = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                y = !v && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                w = y || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),
                k = e.match(/(QQBrowser)\/([\d.]+)/),
                _ = e.match(/baiduboxapp\/([\d.]+)/i),
                x = e.match(/baidubrowser\/([\d.]+)/i),
                N = e.match(/MicroMessenger\/([\d.]+)/i),
                I = e.match(/iqiyi\s*IqiyiVersion\/([\d.]+)/i),
                O = e.match(/FanFanApp/i),
                j = e.match(/RainbowApp\//i),
                C = e.match(/(?:ucbrowser|ucweb)\/([\d.]+)/i) || "undefined" !== typeof ucweb,
                A = e.match(/(QQ)\/([\d.]+)/),
                S = e.match(/iqiyireader IqiyiReaderVersion\/([\d.]+)/i),
                E = e.match(/IqiyiVersion_Reader\/([\d.]+)/i),
                P = e.match(/Youku\/([\d.]+)/i),
                H = e.match(/VideoArticle\/([\d.]+)/i),
                T = e.match(/NewsArticle\/([\d.]+)/i),
                L = e.match(/VivoBrowser\/([\d.]+)/i),
                q = e.match(/OppoBrowser\/(\w+)/i),
                R = e.match(/SogouMobileBrowser\/(\w+)/i),
                B = e.match(/Quark\/(\w+)/i),
                U = e.match(/HuaweiBrowser\/(\w+)/i),
                M = e.match(/Migu\/miguvideo/i),
                D = e.match(/LetvClient(\w+)/i),
                V = e.match(/HanjuTV\/(\w+)/i),
                $ = e.match(/OPPO (\w+) |Build\/OPM(\w+)|OppoBrowser\/(\w+)/i),
                G = e.match(/vivo (\w+) /i),
                z = e.match(/SM-(\w+) /i),
                Y = e.match(/(?:Letv|Le) (\w+) Build/i),
                F = e.match(/(?:MI) ([\w ]+) Build/i),
                Q = e.match(/(?:HUAWEI ([\w-]+) Build)|(?:; (?:HW-)?([\w-]+) Build\/(?:HUAWEI|HONOR))/i),
                K = e.match(/(?:Redmi|HM) ([\w ]+) Build/i),
                J = e.match(/(((?:meizu\/|m|mx|PRO) ?(?:[0-9]+)) ?(?:\w*)) Build/i),
                W = e.match(/miuibrowser/i),
                X = e.match(/ImgoTV/i),
                Z = e.match(/weibo/i),
                ee = e.match(/SohuVideoMobile/i),
                te = e.match(/(QQLiveBrowser)\/([\d.]+)/);
            return J && (r.meizu = !0, r.version = J[1], r.name = "meizu"), $ && (r.oppo = !0, r.version = $[1] || $[2], r.name = "oppo"), G && (r.vivo = !0, r.version = G[1], r.name = "vivo"), z && (r.sumsung = !0, r.version = z[1], r.name = "sumsung"), Y && (r.le = !0, r.version = Y[1], r.name = "le"), F && (r.mi = !0, r.version = F[1], r.name = "mi"), Q && (r.huawei = !0, r.version = Q[1] || Q[2], r.name = "huawei"), K && (r.redmi = !0, r.version = K[1], r.name = "redmi"), u && (t.android = !0, t.version = u[2]), p && !d && (t.ios = t.iphone = !0, t.version = p[2].replace(/_/g, ".")), l && (t.ios = t.ipad = !0, t.version = l[2].replace(/_/g, ".")), d && (t.ios = t.ipod = !0, t.version = d[3] ? d[3].replace(/_/g, ".") : null), h && (t.wp = !0, t.version = h[1]), f && (t.webos = !0, t.version = f[2]), m && (t.touchpad = !0), y && (n.webview = !0, n.name = "webview"), c && (n.webkit = !0, n.name = "webkit", n.version = c[1]), w && (s || t.ios) && (n.safari = !0, n.name = "safari", t.ios || (n.version = w[1])), v && (n.chrome = !0, n.name = "chrome", n.version = v[1]), W && (n.miuibrowser = !0, n.name = "miuibrowser"), L && (n.vivobrowser = !0, n.name = "vivobrowser"), q && (n.oppobrowser = !0, n.name = "oppobrowser"), k && (n.qq = !0, n.name = "qq", n.version = k[2]), _ && (n.baidubox = !0, n.name = "baidubox", n.version = _[1]), x && (n.baidubrowser = !0, n.name = "baidubrowser", n.version = x[1]), R && (n.sougouBrowser = !0, n.name = "sougouBrowser"), N && (n.weixin = !0, n.name = "weixin", n.version = N[1]), A && (n.qqApp = !0, n.name = "qqApp", n.version = A[2]), X && (n.imgoTV = !0, n.name = "imgoTV"), Z && (n.weibo = !0, n.name = "weibo"), ee && (n.sohuApp = !0, n.name = "sohuApp"), I && (n.iqiyi = !0, n.name = "iqiyi", n.version = I[1]), O && (n.fanfanapp = !0, n.name = "fanfanapp"), j && (n.rainbowapp = !0, n.name = "rainbowapp"), C && (n.uc = !0, n.name = "uc", n.version = C[1]), b && (n.firefox = !0, n.name = "firefox", n.version = b[1]), g && (t.firefoxos = !0, n.name = "firefoxos", t.version = g[1]), S && (n.readApp = !0, n.name = "readApp", n.version = S[1]), E && (n.readPlugin = !0, n.name = "readPlugin", n.version = E[1]), P && (n.youku = !0, n.name = "youku", n.version = P[1]), H && (n.xigua = !0, n.name = "xigua", n.version = H[1]), T && (n.toutiao = !0, n.name = "toutiao", n.version = T[1]), B && (n.quark = !0, n.name = "quark"), U && (n.huaweiBrowser = !0, n.name = "huaweiBrowser"), M && (n.miguvideo = !0, n.name = "miguvideo"), D && (n.letv = !0, n.name = "letv"), V && (n.hanjutv = !0, n.name = "hanjutv"), "undefined" !== typeof window && (n.txTV = t.ios ? !!te : !!window.TenvideoJSBridge, n.txTV && (n.name = "txTV")), n.compareVersion = function (e, t) {
                e = o(e), t = o(t);
                for (var n = 0; n < e.length || n < t.length;) {
                    var r = n < e.length && "undefined" !== typeof e[n] ? i()(e[n]) : 0,
                        a = n < t.length && "undefined" !== typeof t[n] ? i()(t[n]) : 0;
                    if (r > a) return 1;
                    if (r < a) return -1;
                    n++
                }
                return 0
            }, t.phone = !(t.ipod || !(u || p || f || v && e.match(/Android/) || v && e.match(/CriOS\/([\d.]+)/) || b && e.match(/Mobile/) || e.match(/Touch/))), a._detect = {
                os: t,
                browser: n,
                osProducer: r
            }, a._detect
        }

        function o(e) {
            return e.indexOf(".") > -1 ? e.split(".").slice(0, 3) : [e.slice(0, 6)]
        }
    }, "7f00": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [e.topButton ? e._e() : n("ButtonDown", {
                    directives: [{
                        name: "show-pingback",
                        rawName: "v-show-pingback",
                        value: "804231_navxiazai",
                        expression: "'804231_navxiazai'"
                    }],
                    staticClass: "iqiyi-h5-empty",
                    class: e.headClass,
                    staticStyle: {
                        display: "block !important"
                    },
                    attrs: {
                        subtype: "144",
                        "down-app-pos": "home_banner_down",
                        rseat: "603091_2"
                    }
                }, [n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "mcltdown_2hmbnr",
                        expression: "'mcltdown_2hmbnr'"
                    }],
                    class: e.btnImgUrl ? "link-app-img" : "link-app",
                    style: "background-image: url(" + e.btnImgUrl + ")",
                    attrs: {
                        href: "javascript:void(0)"
                    }
                }, [e._v("\n      " + e._s(e.btnImgUrl ? "" : "下载APP") + "\n    ")])]), e.topButton ? n("portal-target", {
                    attrs: {
                        name: e.topButton
                    }
                }, [n("div", {
                    staticClass: "iqiyi-h5-empty",
                    class: e.headClass,
                    staticStyle: {
                        display: "block !important"
                    }
                }, [n("a", {
                    class: e.btnImgUrl ? "link-app-img" : "link-app",
                    style: "background-image: url(" + e.btnImgUrl + ")",
                    attrs: {
                        href: "javascript:void(0)"
                    }
                }, [e._v("\n        " + e._s(e.btnImgUrl ? "" : "下载APP") + "\n      ")])])]) : e._e()], 1)
            },
            i = [],
            a = n("38ff"),
            o = {
                name: "HeaderTopButton",
                components: {
                    ButtonDown: a["a"]
                },
                props: {
                    topButton: {
                        type: String,
                        default: ""
                    },
                    src: {
                        type: String,
                        default: "//pic1.iqiyipic.com/common/lego/20190603/39255f3e620a4ee69bb90932aa62b5a3.png"
                    },
                    headClass: {
                        type: String,
                        default: "header-app"
                    }
                },
                data: function () {
                    return {}
                }, computed: {
                    btnImgUrl: function () {
                        return this.src || "//pic1.iqiyipic.com/common/lego/20190603/39255f3e620a4ee69bb90932aa62b5a3.png"
                    }
                }
            },
            c = o,
            u = n("2877"),
            s = Object(u["a"])(c, r, i, !1, null, null, null);
        t["a"] = s.exports
    }, 8262: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0a0d"),
            i = n.n(r),
            a = n("cebc"),
            o = (n("96cf"), n("3b8d")),
            c = n("2b0e"),
            u = n("5321"),
            s = n("9520"),
            l = n.n(s),
            d = n("8296"),
            p = n("ba45"),
            f = Object(d["K"])("pingback", {
                feedback: !0
            }),
            h = Object(d["K"])("page", {
                feedback: !0
            });
        t["default"] = function (e) {
            var t = e.router;

            function n(e) {
                return r.apply(this, arguments)
            }

            function r() {
                return r = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                    var n, r, i;
                    return regeneratorRuntime.wrap(function (e) {
                        while (1) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.matched[t.matched.length - 1], r = (n.meta || {}).pingbackOptions, i = {}, !l()(r)) {
                                e.next = 7;
                                break
                            }
                            return e.next = 6, r();
                        case 6:
                            i = e.sent;
                        case 7:
                            Object(u["k"])(i);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                    }, e)
                })), r.apply(this, arguments)
            }

            function s(e, t) {
                var n = e.matched[e.matched.length - 1],
                    r = (n.meta || {}).pingback,
                    i = !0;
                if (l()(r)) i = r();
                else if ("single" === r)
                    for (var a = e.matched, o = t.matched, c = 0; c < a.length; c++) {
                        if (a[c] !== o[c]) {
                            i = !0;
                            break
                        }
                        i = !1
                    } else !1 === r && (i = !1);
                return i
            }

            function d() {
                var e = i()(),
                    n = !0;

                function r() {
                    a(), window.removeEventListener("pagehide", r)
                }

                function a() {
                    e && (Object(u["u"])({
                        tm: Math.ceil((i()() - e) / 1e3)
                    }), Object(u["r"])({
                        duration: i()() - e
                    }))
                }
                t.afterEach(function (t, r) {
                    if (n) n = !1;
                    else {
                        var o = s(t, r);
                        o && (a(), e = i()())
                    }
                }), window.addEventListener("pagehide", r), window.addEventListener("pageshow", function () {
                    e = i()(), window.removeEventListener("pagehide", r), window.addEventListener("pagehide", r)
                })
            }
            t.afterEach(function () {
                var e = Object(o["a"])(regeneratorRuntime.mark(function e(t, r) {
                    var i;
                    return regeneratorRuntime.wrap(function (e) {
                        while (1) switch (e.prev = e.next) {
                        case 0:
                            return i = s(t, r), e.next = 3, n(t);
                        case 3:
                            i && (h.log("to: ".concat(t.fullPath, " from: ").concat(r.fullPath)), c["default"].nextTick(function () {
                                Object(u["t"])(Object(a["a"])({
                                    rfr: "/" !== r.fullPath ? "".concat(location.origin).concat(r.fullPath) : document.referrer
                                }, Object(p["l"])(), Object(p["q"])())).then(function (e) {
                                    return f.log("pv", e)
                                })
                            }));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    }, e)
                }));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }()), d()
        }
    }, 8296: function (e, t, n) {
        "use strict";
        var r = n("b134"),
            i = n("240d"),
            a = n("78f5"),
            o = n("0a0d"),
            c = n.n(o),
            u = n("8d81"),
            s = n.n(u);

        function l() {
            return d({
                userAgent: window.navigator.userAgent,
                cookie: document.cookie
            })
        }

        function d() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.userAgent,
                n = void 0 === t ? "" : t,
                r = e.cookie,
                i = void 0 === r ? "" : r;
            return s()(n + i + Math.random() + c()())
        }
        n("57e7");
        var p = n("5176"),
            f = n.n(p),
            h = n("795b"),
            m = n.n(h),
            v = n("b383"),
            b = n.n(v);

        function g() {}

        function y(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "iqiyi.com",
                r = t.timeout || 5e3;
            return new m.a(function (i, a) {
                var o;
                document.domain = n, r && (o = setTimeout(function () {
                    h(), a(Error("timeout"))
                }, r));
                var c = l(),
                    u = document.createElement("iframe");
                u.setAttribute("style", "display:none"), document.body.appendChild(u), u.addEventListener("load", function () {
                    clearTimeout(o);
                    try {
                        this.contentDocument.head.innerHTML || m(new Error("innerHTML error"))
                    } catch (e) {
                        m(e)
                    }
                }), u.addEventListener("error", m);
                var s = "QiyiCallback" + c;
                window[s] = function (e) {
                    i(e)
                };
                var d = f()({
                        callback: s
                    }, t),
                    p = "".concat(e).concat(e.indexOf("?") > -1 ? "&" : "?").concat(b.a.stringify(d));

                function h() {
                    u.removeEventListener("error", m), document.body.removeChild(u), window[s] = g, o && clearTimeout(o)
                }

                function m(e) {
                    h(), a(e || Error("error"))
                }
                u.setAttribute("src", p)
            })
        }
        n("c5f6");
        var w = n("e814"),
            k = n.n(w);

        function _(e, t) {
            var n = function () {},
                r = function (e) {
                    setTimeout(e || n, 0)
                },
                i = {
                    addEventListener: !!window.addEventListener,
                    touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                    transitions: function (e) {
                        var t = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                        for (var n in t)
                            if (void 0 !== e.style[t[n]]) return !0;
                        return !1
                    }(document.createElement("swipe"))
                };
            if (e) {
                var a, o, c, u, s = e.children[0];
                t = t || {};
                var l = k()(t.startSlide, 10) || 0,
                    d = t.speed || 300;
                t.continuous = void 0 === t.continuous || t.continuous;
                var p, f, h = t.auto || 0,
                    m = {},
                    v = {},
                    b = {
                        handleEvent: function (e) {
                            switch (e.type) {
                            case "touchstart":
                                this.start(e);
                                break;
                            case "touchmove":
                                this.move(e);
                                break;
                            case "touchend":
                                r(this.end(e));
                                break;
                            case "webkitTransitionEnd":
                            case "msTransitionEnd":
                            case "oTransitionEnd":
                            case "otransitionend":
                            case "transitionend":
                                r(this.transitionEnd(e));
                                break;
                            case "resize":
                                r(g);
                                break
                            }
                            t.stopPropagation && e.stopPropagation()
                        }, start: function (e) {
                            var t = e.touches[0];
                            m = {
                                x: t.pageX,
                                y: t.pageY,
                                time: +new Date
                            }, f = void 0, v = {}, s.addEventListener("touchmove", this, !1), s.addEventListener("touchend", this, !1)
                        }, move: function (e) {
                            if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                                t.disableScroll && e.preventDefault();
                                var n = e.touches[0];
                                v = {
                                    x: n.pageX - m.x,
                                    y: n.pageY - m.y
                                }, "undefined" == typeof f && (f = !!(f || Math.abs(v.x) < Math.abs(v.y))), f || (e.preventDefault(), C(), t.continuous ? (I(_(l - 1), v.x + o[_(l - 1)], 0), I(l, v.x + o[l], 0), I(_(l + 1), v.x + o[_(l + 1)], 0)) : (v.x = v.x / (!l && v.x > 0 || l == a.length - 1 && v.x < 0 ? Math.abs(v.x) / c + 1 : 1), I(l - 1, v.x + o[l - 1], 0), I(l, v.x + o[l], 0), I(l + 1, v.x + o[l + 1], 0)))
                            }
                        }, end: function (e) {
                            var n = +new Date - m.time,
                                r = Number(n) < 250 && Math.abs(v.x) > 20 || Math.abs(v.x) > c / 2,
                                i = !l && v.x > 0 || l == a.length - 1 && v.x < 0;
                            t.continuous && (i = !1);
                            var u = v.x < 0;
                            f || (r && !i ? (u ? (t.continuous ? (N(_(l - 1), -c, 0), N(_(l + 2), c, 0)) : N(l - 1, -c, 0), N(l, o[l] - c, d), N(_(l + 1), o[_(l + 1)] - c, d), l = _(l + 1)) : (t.continuous ? (N(_(l + 1), c, 0), N(_(l - 2), -c, 0)) : N(l + 1, c, 0), N(l, o[l] + c, d), N(_(l - 1), o[_(l - 1)] + c, d), l = _(l - 1)), t.callback && t.callback(l, a[l])) : t.continuous ? (N(_(l - 1), -c, d), N(l, 0, d), N(_(l + 1), c, d)) : (N(l - 1, -c, d), N(l, 0, d), N(l + 1, c, d))), s.removeEventListener("touchmove", b, !1), s.removeEventListener("touchend", b, !1)
                        }, transitionEnd: function (e) {
                            k()(e.target.getAttribute("data-index"), 10) == l && (h && j(), t.transitionEnd && t.transitionEnd.call(e, l, a[l]))
                        }
                    };
                return g(), h && j(), i.addEventListener ? (i.touch && s.addEventListener("touchstart", b, !1), i.transitions && (s.addEventListener("webkitTransitionEnd", b, !1), s.addEventListener("msTransitionEnd", b, !1), s.addEventListener("oTransitionEnd", b, !1), s.addEventListener("otransitionend", b, !1), s.addEventListener("transitionend", b, !1)), window.addEventListener("resize", b, !1)) : window.onresize = function () {
                    g()
                }, {
                    setup: function () {
                        g()
                    }, slide: function (e, t) {
                        C(), x(e, t)
                    }, prev: function () {
                        C(), y()
                    }, next: function () {
                        C(), w()
                    }, stop: function () {
                        C()
                    }, getPos: function () {
                        return l
                    }, getNumSlides: function () {
                        return u
                    }, kill: function () {
                        C(), s.style.width = "", s.style.left = "";
                        var e = a.length;
                        while (e--) {
                            var t = a[e];
                            t.style.width = "", t.style.left = "", i.transitions && I(e, 0, 0)
                        }
                        i.addEventListener ? (s.removeEventListener("touchstart", b, !1), s.removeEventListener("webkitTransitionEnd", b, !1), s.removeEventListener("msTransitionEnd", b, !1), s.removeEventListener("oTransitionEnd", b, !1), s.removeEventListener("otransitionend", b, !1), s.removeEventListener("transitionend", b, !1), window.removeEventListener("resize", b, !1)) : window.onresize = null
                    }
                }
            }

            function g() {
                a = s.children, u = a.length, a.length < 2 && (t.continuous = !1), i.transitions && t.continuous && a.length < 3 && (s.appendChild(a[0].cloneNode(!0)), s.appendChild(s.children[1].cloneNode(!0)), a = s.children), o = new Array(a.length), c = e.getBoundingClientRect().width || e.offsetWidth, s.style.width = a.length * c + "px";
                var n = a.length;
                while (n--) {
                    var r = a[n];
                    r.style.width = c + "px", r.setAttribute("data-index", n), i.transitions && (r.style.left = n * -c + "px", N(n, l > n ? -c : l < n ? c : 0, 0))
                }
                t.continuous && i.transitions && (N(_(l - 1), -c, 0), N(_(l + 1), c, 0)), i.transitions || (s.style.left = l * -c + "px"), e.style.visibility = "visible"
            }

            function y() {
                t.continuous ? x(l - 1) : l && x(l - 1)
            }

            function w() {
                t.continuous ? x(l + 1) : l < a.length - 1 && x(l + 1)
            }

            function _(e) {
                return (a.length + e % a.length) % a.length
            }

            function x(e, n) {
                if (l != e) {
                    if (i.transitions) {
                        var u = Math.abs(l - e) / (l - e);
                        if (t.continuous) {
                            var s = u;
                            u = -o[_(e)] / c, u !== s && (e = -u * a.length + e)
                        }
                        var p = Math.abs(l - e) - 1;
                        while (p--) N(_((e > l ? e : l) - p - 1), c * u, 0);
                        e = _(e), N(l, c * u, n || d), N(e, 0, n || d), t.continuous && N(_(e - u), -c * u, 0)
                    } else e = _(e), O(l * -c, e * -c, n || d);
                    l = e, r(t.callback && t.callback(l, a[l]))
                }
            }

            function N(e, t, n) {
                I(e, t, n), o[e] = t
            }

            function I(e, t, n) {
                var r = a[e],
                    i = r && r.style;
                i && (i.webkitTransitionDuration = i.MozTransitionDuration = i.msTransitionDuration = i.OTransitionDuration = i.transitionDuration = n + "ms", i.webkitTransform = "translate(" + t + "px,0)translateZ(0)", i.msTransform = i.MozTransform = i.OTransform = "translateX(" + t + "px)")
            }

            function O(e, n, r) {
                if (r) var i = +new Date,
                    o = setInterval(function () {
                        var c = +new Date - i;
                        if (c > r) return s.style.left = n + "px", h && j(), t.transitionEnd && t.transitionEnd.call(event, l, a[l]), void clearInterval(o);
                        s.style.left = (n - e) * (Math.floor(c / r * 100) / 100) + e + "px"
                    }, 4);
                else s.style.left = n + "px"
            }

            function j() {
                p = setTimeout(w, h)
            }

            function C() {
                h = 0, clearTimeout(p)
            }
        }
        var x = n("dff0"),
            N = (n("6d67"), n("a745")),
            I = n.n(N),
            O = (n("a481"), n("e2a0")),
            j = n.n(O),
            C = n("1a8c"),
            A = n.n(C);

        function S(e) {
            if (!e) return e;
            if (j()(e)) e = Object(i["c"])(e);
            else if (I()(e)) e = e.map(function (e) {
                return S(e)
            });
            else if (A()(e))
                for (var t in e) e.hasOwnProperty(t) && (e[t] = S(e[t]));
            return e
        }

        function E(e) {
            return new m.a(function (t, n) {
                return setTimeout(function () {
                    return t()
                }, e)
            })
        }
        var P = n("d225"),
            H = n("b0b4"),
            T = function () {
                function e(t, n) {
                    Object(P["a"])(this, e), this.callback = t, this.timer = null, this.delay = n || 1e3
                }
                return Object(H["a"])(e, [{
                    key: "start",
                    value: function () {
                        var e = this;
                        this.timer = setTimeout(function () {
                            e.callback(), e.timer && e.start()
                        }, this.delay)
                    }
                }, {
                    key: "stop",
                    value: function () {
                        clearTimeout(this.timer), this.timer = null
                    }
                }]), e
            }(),
            L = (n("d25f"), n("cebc")),
            q = (n("4917"), n("386d"), /((http(s)?:)?\/\/)?(www|m)\.(i)?qiyi\.com/i),
            R = /^(http(s)?:\/\/)/i,
            B = /((http(?:s)?:)?(?:\/\/)?([^\/]*\.([^\/]+\.[^\/]+)))?([^?#]*)?(\?[^#]*)?(#.*)?/,
            U = {
                parse: z,
                stringify: G,
                addQuery: F,
                getQuery: Y,
                getRdr: Q
            };

        function M(e, t) {
            if (e) {
                t = t || window.location.protocol;
                var n = /^(https?)?:?\/\//;
                return n.test(e) ? e.replace(n, t + "//") : t + "//" + e
            }
        }

        function D(e) {
            return e ? e.replace(q, "") : e
        }

        function V(e) {
            return e ? e.replace(R, "//") : e
        }

        function $(e, t) {
            var n = z(e);
            return n.protocol = t || location.protocol, G(n)
        }

        function G(e) {
            var t = e.protocol,
                n = e.host,
                r = e.pathname,
                i = e.search,
                a = e.hash;
            return "".concat(t, "//").concat(n).concat(r).concat(i).concat(a)
        }

        function z() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = e.match(B) || [],
                n = t[1] || "",
                r = t[2] || "",
                i = t[3] || "",
                a = t[4] || "",
                o = t[5] || "",
                c = t[6] || "",
                u = t[7] || "";
            return {
                origin: n,
                protocol: r,
                host: i,
                domain: a,
                pathname: o,
                search: c,
                hash: u
            }
        }

        function Y(e) {
            var t = z(e),
                n = t.search;
            return b.a.parse(n.slice(1))
        }

        function F(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = z(e),
                r = n.origin,
                i = n.pathname,
                a = n.search,
                o = n.hash,
                c = b.a.parse(a.slice(1));
            t = Object(L["a"])({}, c, t);
            var u = b.a.stringify(t);
            return "".concat(r).concat(i).concat(u ? "?" : "").concat(u).concat(o)
        }

        function Q(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return K(e, {
                filter: function (e) {
                    var t = ["iqiyi.com", "qiyi.com", "pps.tv", "iqiyi.qixiu"],
                        n = e ? z(e) : [],
                        r = n && n.domain;
                    return t.indexOf(r) >= 0 ? e : ""
                }, defaultUrl: t
            })
        }

        function K(e, t) {
            e = e && "undefined" !== e ? e : "";
            var n = decodeURIComponent(e);
            return n = t.filter ? t.filter(n) : n, n || t.defaultUrl || ""
        }
        n("28a5");
        var J, W, X, Z, ee = {},
            te = 16,
            ne = te,
            re = 65536,
            ie = re >>> 1,
            ae = re * re,
            oe = re - 1,
            ce = function (e) {
                this.digits = "boolean" === typeof e && !0 === e ? null : W.slice(0), this.isNeg = !1
            };
        ee.setMaxDigits = function (e) {
            J = e, W = new Array(J);
            for (var t = 0; t < W.length; t++) W[t] = 0;
            X = new ce, Z = new ce, Z.digits[0] = 1
        }, ee.setMaxDigits(20);
        var ue = 15;
        ee.biFromNumber = function (e) {
            var t = new ce;
            t.isNeg = e < 0, e = Math.abs(e);
            var n = 0;
            while (e > 0) t.digits[n++] = e & oe, e = Math.floor(e / re);
            return t
        };
        var se = ee.biFromNumber(1e15);
        ee.biFromDecimal = function (e) {
            var t, n = "-" === e.charAt(0),
                r = n ? 1 : 0;
            while (r < e.length && "0" === e.charAt(r))++r;
            if (r === e.length) t = new ce;
            else {
                var i = e.length - r,
                    a = i % ue;
                0 === a && (a = ue), t = ee.biFromNumber(Number(e.substr(r, a))), r += a;
                while (r < e.length) t = ee.biAdd(ee.biMultiply(t, se), ee.biFromNumber(Number(e.substr(r, ue)))), r += ue;
                t.isNeg = n
            }
            return t
        }, ee.biCopy = function (e) {
            var t = new ce(!0);
            return t.digits = e.digits.slice(0), t.isNeg = e.isNeg, t
        }, ee.reverseStr = function (e) {
            for (var t = "", n = e.length - 1; n > -1; --n) t += e.charAt(n);
            return t
        };
        var le = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        ee.biToString = function (e, t) {
            var n = new ce;
            n.digits[0] = t;
            var r = ee.biDivideModulo(e, n),
                i = le[r[1].digits[0]];
            while (1 === ee.biCompare(r[0], X)) r = ee.biDivideModulo(r[0], n), i += le[r[1].digits[0]];
            return (e.isNeg ? "-" : "") + ee.reverseStr(i)
        }, ee.biToDecimal = function (e) {
            var t = new ce;
            t.digits[0] = 10;
            var n = ee.biDivideModulo(e, t),
                r = String(n[1].digits[0]);
            while (1 === ee.biCompare(n[0], X)) n = ee.biDivideModulo(n[0], t), r += String(n[1].digits[0]);
            return (e.isNeg ? "-" : "") + ee.reverseStr(r)
        };
        var de = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        ee.digitToHex = function (e) {
            for (var t = 15, n = "", r = 0; r < 4; ++r) n += de[e & t], e >>>= 4;
            return ee.reverseStr(n)
        }, ee.biToHex = function (e) {
            for (var t = "", n = ee.biHighIndex(e); n > -1; --n) t += ee.digitToHex(e.digits[n]);
            return t
        }, ee.charToHex = function (e) {
            var t, n = 48,
                r = n + 9,
                i = 97,
                a = i + 25,
                o = 65,
                c = 90;
            return t = e >= n && e <= r ? e - n : e >= o && e <= c ? 10 + e - o : e >= i && e <= a ? 10 + e - i : 0, t
        }, ee.hexToDigit = function (e) {
            for (var t = 0, n = Math.min(e.length, 4), r = 0; r < n; ++r) t <<= 4, t |= ee.charToHex(e.charCodeAt(r));
            return t
        }, ee.biFromHex = function (e) {
            for (var t = new ce, n = e.length, r = n, i = 0; r > 0; r -= 4, ++i) t.digits[i] = ee.hexToDigit(e.substr(Math.max(r - 4, 0), Math.min(r, 4)));
            return t
        }, ee.biFromString = function (e, t) {
            var n = "-" === e.charAt(0),
                r = n ? 1 : 0,
                i = new ce,
                a = new ce;
            a.digits[0] = 1;
            for (var o = e.length - 1; o >= r; o--) {
                var c = e.charCodeAt(o),
                    u = ee.charToHex(c),
                    s = ee.biMultiplyDigit(a, u);
                i = ee.biAdd(i, s), a = ee.biMultiplyDigit(a, t)
            }
            return i.isNeg = n, i
        }, ee.biDump = function (e) {
            return (e.isNeg ? "-" : "") + e.digits.join(" ")
        }, ee.biAdd = function (e, t) {
            var n;
            if (e.isNeg !== t.isNeg) t.isNeg = !t.isNeg, n = ee.biSubtract(e, t), t.isNeg = !t.isNeg;
            else {
                n = new ce;
                for (var r, i = 0, a = 0; a < e.digits.length; ++a) r = e.digits[a] + t.digits[a] + i, n.digits[a] = r % re, i = Number(r >= re);
                n.isNeg = e.isNeg
            }
            return n
        }, ee.biSubtract = function (e, t) {
            var n;
            if (e.isNeg !== t.isNeg) t.isNeg = !t.isNeg, n = ee.biAdd(e, t), t.isNeg = !t.isNeg;
            else {
                var r, i;
                n = new ce, i = 0;
                for (var a = 0; a < e.digits.length; ++a) r = e.digits[a] - t.digits[a] + i, n.digits[a] = r % re, n.digits[a] < 0 && (n.digits[a] += re), i = 0 - Number(r < 0);
                if (-1 === i) {
                    i = 0;
                    for (var o = 0; o < e.digits.length; ++o) r = 0 - n.digits[o] + i, n.digits[o] = r % re, n.digits[o] < 0 && (n.digits[o] += re), i = 0 - Number(r < 0);
                    n.isNeg = !e.isNeg
                } else n.isNeg = e.isNeg
            }
            return n
        }, ee.biHighIndex = function (e) {
            var t = e.digits.length - 1;
            while (t > 0 && 0 === e.digits[t])--t;
            return t
        }, ee.biNumBits = function (e) {
            var t, n = ee.biHighIndex(e),
                r = e.digits[n],
                i = (n + 1) * ne;
            for (t = i; t > i - ne; --t) {
                if (0 !== (32768 & r)) break;
                r <<= 1
            }
            return t
        }, ee.biMultiply = function (e, t) {
            for (var n, r, i, a = new ce, o = ee.biHighIndex(e), c = ee.biHighIndex(t), u = 0; u <= c; ++u) {
                n = 0, i = u;
                for (var s = 0; s <= o; ++s, ++i) r = a.digits[i] + e.digits[s] * t.digits[u] + n, a.digits[i] = r & oe, n = r >>> te;
                a.digits[u + o + 1] = n
            }
            return a.isNeg = e.isNeg !== t.isNeg, a
        }, ee.biMultiplyDigit = function (e, t) {
            var n, r, i, a = new ce;
            n = ee.biHighIndex(e), r = 0;
            for (var o = 0; o <= n; ++o) i = a.digits[o] + e.digits[o] * t + r, a.digits[o] = i & oe, r = i >>> te;
            return a.digits[1 + n] = r, a
        }, ee.arrayCopy = function (e, t, n, r, i) {
            for (var a = Math.min(t + i, e.length), o = t, c = r; o < a; ++o, ++c) n[c] = e[o]
        };
        var pe = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
        ee.biShiftLeft = function (e, t) {
            var n = Math.floor(t / ne),
                r = new ce;
            ee.arrayCopy(e.digits, 0, r.digits, n, r.digits.length - n);
            for (var i = t % ne, a = ne - i, o = r.digits.length - 1, c = o - 1; o > 0; --o, --c) r.digits[o] = r.digits[o] << i & oe | (r.digits[c] & pe[i]) >>> a;
            return r.digits[0] = r.digits[o] << i & oe, r.isNeg = e.isNeg, r
        };
        var fe = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];

        function he(e) {
            var t = ee,
                n = t.biDivideByRadixPower(e, this.k - 1),
                r = t.biMultiply(n, this.mu),
                i = t.biDivideByRadixPower(r, this.k + 1),
                a = t.biModuloByRadixPower(e, this.k + 1),
                o = t.biMultiply(i, this.modulus),
                c = t.biModuloByRadixPower(o, this.k + 1),
                u = t.biSubtract(a, c);
            u.isNeg && (u = t.biAdd(u, this.bkplus1));
            var s = t.biCompare(u, this.modulus) >= 0;
            while (s) u = t.biSubtract(u, this.modulus), s = t.biCompare(u, this.modulus) >= 0;
            return u
        }

        function me(e, t) {
            var n = ee.biMultiply(e, t);
            return this.modulo(n)
        }

        function ve(e, t) {
            var n = new ce;
            n.digits[0] = 1;
            var r = e,
                i = t;
            while (1) {
                if (0 !== (1 & i.digits[0]) && (n = this.multiplyMod(n, r)), i = ee.biShiftRight(i, 1), 0 === i.digits[0] && 0 === ee.biHighIndex(i)) break;
                r = this.multiplyMod(r, r)
            }
            return n
        }
        ee.biShiftRight = function (e, t) {
            var n = Math.floor(t / ne),
                r = new ce;
            ee.arrayCopy(e.digits, n, r.digits, 0, e.digits.length - n);
            for (var i = t % ne, a = ne - i, o = 0, c = o + 1; o < r.digits.length - 1; ++o, ++c) r.digits[o] = r.digits[o] >>> i | (r.digits[c] & fe[i]) << a;
            return r.digits[r.digits.length - 1] >>>= i, r.isNeg = e.isNeg, r
        }, ee.biMultiplyByRadixPower = function (e, t) {
            var n = new ce;
            return ee.arrayCopy(e.digits, 0, n.digits, t, n.digits.length - t), n
        }, ee.biDivideByRadixPower = function (e, t) {
            var n = new ce;
            return ee.arrayCopy(e.digits, t, n.digits, 0, n.digits.length - t), n
        }, ee.biModuloByRadixPower = function (e, t) {
            var n = new ce;
            return ee.arrayCopy(e.digits, 0, n.digits, 0, t), n
        }, ee.biCompare = function (e, t) {
            if (e.isNeg !== t.isNeg) return 1 - 2 * Number(e.isNeg);
            for (var n = e.digits.length - 1; n >= 0; --n)
                if (e.digits[n] !== t.digits[n]) return e.isNeg ? 1 - 2 * Number(e.digits[n] > t.digits[n]) : 1 - 2 * Number(e.digits[n] < t.digits[n]);
            return 0
        }, ee.biDivideModulo = function (e, t) {
            var n, r, i = ee.biNumBits(e),
                a = ee.biNumBits(t),
                o = t.isNeg;
            if (i < a) return e.isNeg ? (n = ee.biCopy(Z), n.isNeg = !t.isNeg, e.isNeg = !1, t.isNeg = !1, r = ee.biSubtract(t, e), e.isNeg = !0, t.isNeg = o) : (n = new ce, r = ee.biCopy(e)), [n, r];
            n = new ce, r = e;
            var c = Math.ceil(a / ne) - 1,
                u = 0;
            while (t.digits[c] < ie) t = ee.biShiftLeft(t, 1), ++u, ++a, c = Math.ceil(a / ne) - 1;
            r = ee.biShiftLeft(r, u), i += u;
            var s = Math.ceil(i / ne) - 1,
                l = ee.biMultiplyByRadixPower(t, s - c);
            while (-1 !== ee.biCompare(r, l))++n.digits[s - c], r = ee.biSubtract(r, l);
            for (var d = s; d > c; --d) {
                var p = d >= r.digits.length ? 0 : r.digits[d],
                    f = d - 1 >= r.digits.length ? 0 : r.digits[d - 1],
                    h = d - 2 >= r.digits.length ? 0 : r.digits[d - 2],
                    m = c >= t.digits.length ? 0 : t.digits[c],
                    v = c - 1 >= t.digits.length ? 0 : t.digits[c - 1];
                n.digits[d - c - 1] = p === m ? oe : Math.floor((p * re + f) / m);
                var b = n.digits[d - c - 1] * (m * re + v),
                    g = p * ae + (f * re + h);
                while (b > g)--n.digits[d - c - 1], b = n.digits[d - c - 1] * (m * re | v), g = p * re * re + (f * re + h);
                l = ee.biMultiplyByRadixPower(t, d - c - 1), r = ee.biSubtract(r, ee.biMultiplyDigit(l, n.digits[d - c - 1])), r.isNeg && (r = ee.biAdd(r, l), --n.digits[d - c - 1])
            }
            return r = ee.biShiftRight(r, u), n.isNeg = e.isNeg !== o, e.isNeg && (n = o ? ee.biAdd(n, Z) : ee.biSubtract(n, Z), t = ee.biShiftRight(t, u), r = ee.biSubtract(t, r)), 0 === r.digits[0] && 0 === ee.biHighIndex(r) && (r.isNeg = !1), [n, r]
        }, ee.biDivide = function (e, t) {
            return ee.biDivideModulo(e, t)[0]
        }, ee.biModulo = function (e, t) {
            return ee.biDivideModulo(e, t)[1]
        }, ee.biMultiplyMod = function (e, t, n) {
            return ee.biModulo(ee.biMultiply(e, t), n)
        }, ee.biPow = function (e, t) {
            var n = Z,
                r = e;
            while (1) {
                if (0 !== (1 & t) && (n = ee.biMultiply(n, r)), t >>= 1, 0 === t) break;
                r = ee.biMultiply(r, r)
            }
            return n
        }, ee.biPowMod = function (e, t, n) {
            var r = Z,
                i = e,
                a = t;
            while (1) {
                if (0 !== (1 & a.digits[0]) && (r = ee.biMultiplyMod(r, i, n)), a = ee.biShiftRight(a, 1), 0 === a.digits[0] && 0 === ee.biHighIndex(a)) break;
                i = ee.biMultiplyMod(i, i, n)
            }
            return r
        }, ee.BarrettMu = function (e) {
            this.modulus = ee.biCopy(e), this.k = ee.biHighIndex(this.modulus) + 1;
            var t = new ce;
            t.digits[2 * this.k] = 1, this.mu = ee.biDivide(t, this.modulus), this.bkplus1 = new ce, this.bkplus1.digits[this.k + 1] = 1, this.modulo = he, this.multiplyMod = me, this.powMod = ve
        };
        var be = function (e, t, n) {
            var r = ee;
            this.e = r.biFromHex(e), this.d = r.biFromHex(t), this.m = r.biFromHex(n), this.chunkSize = 2 * r.biHighIndex(this.m), this.radix = 16, this.barrett = new r.BarrettMu(this.m)
        };
        ee.getKeyPair = function (e, t, n) {
            return new be(e, t, n)
        }, "undefined" === typeof ee.twoDigit && (ee.twoDigit = function (e) {
            return (e < 10 ? "0" : "") + String(e)
        }), ee.encryptedString = function (e, t) {
            var n = [],
                r = t.length,
                i = 0;
            while (i < r) n[i] = t.charCodeAt(i), i++;
            while (n.length % e.chunkSize !== 0) n[i++] = 0;
            var a, o, c, u = n.length,
                s = "";
            for (i = 0; i < u; i += e.chunkSize) {
                for (c = new ce, a = 0, o = i; o < i + e.chunkSize; ++a) c.digits[a] = n[o++], c.digits[a] += n[o++] << 8;
                var l = e.barrett.powMod(c, e.e),
                    d = 16 === e.radix ? ee.biToHex(l) : ee.biToString(l, e.radix);
                s += d + " "
            }
            return s.substring(0, s.length - 1)
        }, ee.decryptedString = function (e, t) {
            var n, r, i, a = t.split(" "),
                o = "";
            for (n = 0; n < a.length; ++n) {
                var c;
                for (c = 16 === e.radix ? ee.biFromHex(a[n]) : ee.biFromString(a[n], e.radix), i = e.barrett.powMod(c, e.d), r = 0; r <= ee.biHighIndex(i); ++r) o += String.fromCharCode(255 & i.digits[r], i.digits[r] >> 8)
            }
            return 0 === o.charCodeAt(o.length - 1) && (o = o.substring(0, o.length - 1)), o
        }, ee.setMaxDigits(130);
        n("0cd8");

        function ge() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function (e) {
                return t.reduce(function (e, t) {
                    return t(e)
                }, e)
            }
        }
        var ye, we = n("f499"),
            ke = n.n(we),
            _e = n("7618"),
            xe = (n("6762"), n("bd86")),
            Ne = n("09c9"),
            Ie = n.n(Ne),
            Oe = n("5a0c"),
            je = n.n(Oe),
            Ce = n("51cb"),
            Ae = (n("96cf"), n("3b8d")),
            Se = n("5191"),
            Ee = n("a78e"),
            Pe = n.n(Ee),
            He = "//msg.qy.net/qos",
            Te = "QC006",
            Le = "suid";

        function qe() {
            return Re.apply(this, arguments)
        }

        function Re() {
            return Re = Object(Ae["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a, o = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, n = c()(), r = Be(), e.t0 = L["a"], e.t1 = Ue(), e.t2 = Me(), e.t3 = n, e.next = 9, Object(Se["b"])();
                    case 9:
                        e.t4 = e.sent, e.t5 = r, e.t6 = n, e.t7 = r, e.t8 = t.ec, e.t9 = t.desc, e.t10 = location.href || "", e.t11 = {
                            u: e.t1,
                            pu: e.t2,
                            rn: e.t3,
                            p1: "2_20_201",
                            v: "1.0",
                            dfp: e.t4,
                            de: e.t5,
                            stime: e.t6,
                            sid: e.t7,
                            t: 0,
                            ec: e.t8,
                            diy_ec: e.t9,
                            purl: e.t10
                        }, e.t12 = t, i = (0, e.t0)(e.t11, e.t12), a = new Image, a.src = "".concat(He, "?").concat(b.a.stringify(i));
                    case 21:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Re.apply(this, arguments)
        }

        function Be() {
            return Be.eventID ? Be.eventID : (Be.eventID = s()(window.navigator.userAgent + document.cookie + c()()), Be.eventID)
        }

        function Ue() {
            return Ce["f"].getItem(Le) || Pe.a.get(Te)
        }

        function Me() {
            return De().uid
        }

        function De() {
            var e = Pe.a.get("P00002");
            return e ? JSON.parse(e) : {
                uid: ""
            }
        }
        var Ve = "track",
            $e = 500,
            Ge = [],
            ze = 100 * Math.random() <= 10,
            Ye = "000",
            Fe = "100",
            Qe = "200",
            Ke = "300",
            Je = "400",
            We = "500",
            Xe = "600",
            Ze = (ye = {}, Object(xe["a"])(ye, Ye, "error"), Object(xe["a"])(ye, Fe, "vue error"), Object(xe["a"])(ye, Qe, "player error"), Object(xe["a"])(ye, Ke, "store error"), Object(xe["a"])(ye, Je, "resouce error"), Object(xe["a"])(ye, We, "unhandledrejection"), Object(xe["a"])(ye, Xe, "iframe error"), ye);

        function et(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return t.feedback && Ge.push(e), Ie.a.apply(this, arguments)
        }

        function tt(e) {
            var t = e.msg,
                n = e.args,
                r = e.level,
                i = e.instance;
            try {
                var a = Ge.includes(i),
                    o = ze && "error" === r;
                if (!a && !o) return;
                var c = n.reduce(function (e, t) {
                        return "object" !== Object(_e["a"])(t) ? e : (t && t.ec && (t.ec_name = Ze[t.ec] || ""), e + " " + ke()(t))
                    }, ""),
                    u = "".concat(je()(new Date).format("YYYY-MM-DD HH:mm:ss"), " ").concat(r.toUpperCase(), " ::: ").concat(t, " ").concat(c);
                a && nt(u), o && qe({
                    ec: n && n[0] && n[0].ec || Ye,
                    desc: u
                })
            } catch (s) {}
        }

        function nt(e) {
            try {
                var t = Ce["f"].getItem(Ve),
                    n = [];
                t && (n = t.split("\n")).length > $e && (n = n.slice(-$e)), n.push(e), Ce["f"].setItem(Ve, n.join("\n"))
            } catch (r) {}
        }

        function rt() {
            var e = "";
            try {
                e = Ce["f"].getItem(Ve)
            } catch (t) {}
            return e
        }

        function it() {
            try {
                Ce["f"].setItem(Ve, "")
            } catch (e) {}
        }
        "undefined" !== typeof window && (Ie.a.transports = [tt]);
        var at = {};

        function ot(e, t) {
            void 0 === e && void 0 === t || (at[e] = t, Ce["f"].setItem(e, t), Pe.a.set(e, t, {
                expires: 365,
                path: "/",
                domain: "iqiyi.com"
            }))
        }

        function ct(e) {
            if (at[e]) return at[e];
            var t = Ce["f"].getItem(e),
                n = Pe.a.get(e);
            return (t || n) && ot(e, t || n), at[e]
        }
        n("6b54"), n("87b3");
        var ut = null,
            st = null;

        function lt() {
            return dt.apply(this, arguments)
        }

        function dt() {
            return dt = Object(Ae["a"])(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (t = window.CryptoJS, n = "//static.iqiyi.com/js/html5/js/lib/crypto-js.js", t) {
                            e.next = 6;
                            break
                        }
                        return e.next = 5, Object(Ce["e"])(n);
                    case 5:
                        t = window.CryptoJS;
                    case 6:
                        return !t || st && ut || (st = t.enc.Utf8.parse("612ca3d5a5ee8b15"), ut = t.enc.Utf8.parse("39c4172793a17c61")), e.abrupt("return", t);
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), dt.apply(this, arguments)
        }

        function pt(e) {
            return ft.apply(this, arguments)
        }

        function ft() {
            return ft = Object(Ae["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, lt();
                    case 2:
                        return n = e.sent, t = n.enc.Utf8.parse(t), r = n.AES.encrypt(t, st, {
                            iv: ut,
                            mode: n.mode.CBC,
                            padding: n.pad.Pkcs7
                        }), e.abrupt("return", n.enc.Base64.stringify(r.ciphertext));
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ft.apply(this, arguments)
        }

        function ht(e) {
            return mt.apply(this, arguments)
        }

        function mt() {
            return mt = Object(Ae["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, lt();
                    case 2:
                        return n = e.sent, t = n.enc.Base64.parse(t), r = n.enc.Base64.stringify(t), i = n.AES.decrypt(r, st, {
                            iv: ut,
                            mode: n.mode.CBC,
                            padding: n.pad.Pkcs7
                        }), a = i.toString(n.enc.Utf8), e.abrupt("return", a);
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), mt.apply(this, arguments)
        }

        function vt(e) {
            return "string" !== typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
        }
        var bt = {
            formatTime: gt,
            formatSecond: wt,
            formatTimeStr: yt
        };

        function gt(e) {
            e = e ? k()(e) : 0, e = e > 0 ? e : 0;
            var t = e / 3600 >> 0,
                n = e % 3600 / 60 >> 0,
                r = e % 3600 % 60,
                i = t ? 1 === t.toString().length ? "0" + t + ":" : t + ":" : "";
            return i += n ? 1 === n.toString().length ? "0" + n + ":" : n + ":" : "00:", i += 1 === r.toString().length ? "0" + r : r, i
        }

        function yt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
            e = e ? k()(e) : 0, e = e > 0 ? e : 0;
            var n = new Date(e),
                r = n.getMonth() + 1,
                i = n.getDate();
            return r = r > 9 ? r : "0" + r, i = i > 9 ? i : "0" + i, "".concat(n.getFullYear()).concat(t).concat(r).concat(t).concat(i)
        }

        function wt(e) {
            var t = k()(e),
                n = 0;
            t > 60 && (n = k()(t / 60), t = k()(t % 60), n > 60 && (n = k()(n % 60)));
            var r = {
                sec: t
            };
            return n > 0 && (r.min = n), r
        }

        function kt() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = e.split(":");
            2 === t.length && t.unshift("00");
            var n = 3600 * t[0],
                r = 60 * t[1],
                i = 1 * t[2];
            return n + r + i
        }
        n.d(t, "u", function () {
            return r["b"]
        }), n.d(t, "L", function () {
            return r["c"]
        }), n.d(t, "p", function () {
            return r["a"]
        }), n.d(t, "M", function () {
            return r["d"]
        }), n.d(t, "G", function () {
            return i["e"]
        }), n.d(t, "v", function () {
            return i["a"]
        }), n.d(t, "bb", function () {
            return i["f"]
        }), n.d(t, "w", function () {
            return a["c"]
        }), n.d(t, "o", function () {
            return a["a"]
        }), n.d(t, "r", function () {
            return a["b"]
        }), n.d(t, "Z", function () {
            return l
        }), n.d(t, "C", function () {
            return y
        }), n.d(t, "i", function () {
            return _
        }), n.d(t, "W", function () {
            return x["i"]
        }), n.d(t, "B", function () {
            return x["b"]
        }), n.d(t, "F", function () {
            return x["e"]
        }), n.d(t, "N", function () {
            return x["f"]
        }), n.d(t, "D", function () {
            return x["c"]
        }), n.d(t, "S", function () {
            return x["h"]
        }), n.d(t, "z", function () {
            return x["a"]
        }), n.d(t, "X", function () {
            return x["j"]
        }), n.d(t, "E", function () {
            return x["d"]
        }), n.d(t, "R", function () {
            return S
        }), n.d(t, "ab", function () {
            return E
        }), n.d(t, "j", function () {
            return T
        }), n.d(t, "k", function () {
            return U
        }), n.d(t, "l", function () {
            return M
        }), n.d(t, "P", function () {
            return D
        }), n.d(t, "Q", function () {
            return V
        }), n.d(t, "U", function () {
            return $
        }), n.d(t, "h", function () {
            return ee
        }), n.d(t, "O", function () {
            return ge
        }), n.d(t, "a", function () {
            return Ye
        }), n.d(t, "g", function () {
            return Fe
        }), n.d(t, "c", function () {
            return Qe
        }), n.d(t, "f", function () {
            return Ke
        }), n.d(t, "e", function () {
            return Je
        }), n.d(t, "d", function () {
            return We
        }), n.d(t, "b", function () {
            return Xe
        }), n.d(t, "K", function () {
            return et
        }), n.d(t, "y", function () {
            return rt
        }), n.d(t, "s", function () {
            return it
        }), n.d(t, "V", function () {
            return ot
        }), n.d(t, "A", function () {
            return ct
        }), n.d(t, "n", function () {
            return pt
        }), n.d(t, "m", function () {
            return ht
        }), n.d(t, "Y", function () {
            return vt
        }), n.d(t, "t", function () {
            return bt
        }), n.d(t, "x", function () {
            return gt
        }), n.d(t, "q", function () {
            return kt
        }), n.d(t, "H", function () {
            return Ce["d"]
        }), n.d(t, "I", function () {
            return Ce["e"]
        }), n.d(t, "J", function () {
            return Ce["f"]
        }), n.d(t, "T", function () {
            return Ce["g"]
        })
    }, 8300: function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [e.show ? e._t("default") : e._e()], 2)
            },
            i = [],
            a = (n("3b2b"), n("759f"), n("0cd8"), n("57e7"), n("2c06")),
            o = n("8296"),
            c = {
                name: "BoxShow",
                props: {
                    vfms: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    browsers: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    lrfrs: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    }
                },
                data: function () {
                    return {
                        show: !0
                    }
                }, beforeMount: function () {
                    if (this.vfms && this.vfms.length) {
                        var e = Object(a["E"])();
                        this.show = -1 === this.vfms.indexOf(e)
                    }
                    if (this.browsers && this.browsers.length) {
                        var t = this.browsers.reduce(function (e, t) {
                            return e || o["p"][t]
                        }, !1);
                        this.show = !t
                    }
                    if (this.lrfrs && this.lrfrs.length) {
                        var n = Object(a["y"])();
                        "DIRECT" !== n && (this.show = !this.lrfrs.some(function (e) {
                            return new RegExp(e).test(n)
                        }))
                    }
                }
            },
            u = c,
            s = n("2877"),
            l = Object(s["a"])(u, r, i, !1, null, null, null);
        t["a"] = l.exports
    }, "84cd": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("div", {
                    class: {
                        "nav-head-fixed": e.fix
                    }
                }, [n("nav", {
                    class: ["g-nav-head", e.navClass]
                }, [n("div", {
                    ref: "wrapper",
                    staticClass: "m-nav-head m-sliding",
                    class: e.headClass
                }, [n("ul", {
                    staticClass: "m-nav-head-list m-sliding-list"
                }, [e._t("default")], 2)]), e._t("extra")], 2)])])
            },
            i = [],
            a = (n("7514"), n("5176")),
            o = n.n(a),
            c = (n("d263"), n("4e77")),
            u = n("1fba"),
            s = {
                name: "AuraHeadLabels",
                props: {
                    headClass: {
                        type: String,
                        default: ""
                    },
                    fixed: {
                        type: Boolean,
                        default: !1
                    },
                    navClass: {
                        type: String,
                        default: ""
                    }
                },
                data: function () {
                    return {
                        isLandscape: !1,
                        halfNavWidth: ""
                    }
                }, computed: {
                    fix: function () {
                        return this.fixed && !this.isLandscape
                    }
                }, mounted: function () {
                    var e = this;
                    this.isLandscape = 90 === window.orientation || -90 === window.orientation, Object(c["c"])(function (t) {
                        e.isLandscape = t.landscape
                    }), this.$nextTick(function () {
                        this.scroll = new u["a"](this.$refs.wrapper, o()({
                            scrollX: !0,
                            eventPassthrough: !1,
                            preventDefault: !0,
                            click: !0,
                            HWCompositing: !1,
                            useTransition: !1
                        })), this.scrollToElement()
                    })
                }, updated: function () {
                    this.scrollToElement()
                }, destroyed: function () {
                    this.scroll && this.scroll.destroy()
                }, methods: {
                    scrollToElement: function () {
                        var e = this.getElement();
                        if (e) {
                            var t = this.$el.clientWidth / 2;
                            this.scroll && this.scroll.scrollToElement(e, 0, -t + e.offsetWidth / 2)
                        }
                    }, getElement: function () {
                        var e = null;
                        return this.$scopedSlots.default().find(function (t, n) {
                            var r = t.componentInstance || {},
                                i = t.data.attrs || {},
                                a = r.selected || i.selected;
                            a && (e = r.$el || t.elm)
                        }), e
                    }
                }
            },
            l = s,
            d = n("2877"),
            p = Object(d["a"])(l, r, i, !1, null, null, null);
        t["a"] = p.exports
    }, "88a6": function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("AuraLink", e._b({
                    staticClass: "m-link"
                }, "AuraLink", e.$attrs, !1), [e.hideExtra ? e._e() : n("i", {
                    class: e.moreIconClass[e.abSample]
                }), e._v(e._s(e.text) + "\n")])
            },
            i = [],
            a = n("c415"),
            o = {
                name: "AuraCardMore",
                mixins: [a["a"]],
                inheritAttrs: !1,
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    hideExtra: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function () {
                    return {
                        moreIconClass: {
                            a: "c-channelAll c-channelAll-morevideo",
                            b: "c-glyphicon c-glyphicon-morevideo"
                        }
                    }
                }
            },
            c = o,
            u = n("2877"),
            s = Object(u["a"])(c, r, i, !1, null, null, null);
        t["a"] = s.exports
    }, "8f8a": function (e, t, n) {
        "use strict";
        t["a"] = {
            mounted: function () {
                this.bindEvents && this.bindEvents()
            }
        }
    }, "936f": function (e, t, n) {
        "use strict";
        var r = n("795b"),
            i = n.n(r),
            a = n("5176"),
            o = n.n(a),
            c = n("a4bb"),
            u = n.n(c),
            s = (n("0cd8"), n("55dd"), n("96cf"), n("3b8d")),
            l = n("bc3a"),
            d = n.n(l),
            p = n("8296"),
            f = n("5bce"),
            h = n("8d81"),
            m = n.n(h);

        function v() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            arguments.length > 1 && arguments[1];
            return m()(u()(e).reduce(function (t, n) {
                return t.push("".concat(n, "=").concat(e[n])), t
            }, []).sort().join("|"))
        }
        d.a.jsonp = function () {
            var e = Object(s["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, e.next = 3, Object(p["H"])(t, n);
                    case 3:
                        return r = e.sent, i = r.data, i = Object(p["G"])() ? Object(p["R"])(i) : i, e.abrupt("return", {
                            data: i
                        });
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            }));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), d.a.secureJsonp = function () {
            var e = Object(s["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = i.length > 1 && void 0 !== i[1] ? i[1] : {}, r = i.length > 2 ? i[2] : void 0, n.params = o()(n.params, {
                            p_t: r
                        }), n.params = o()(n.params, {
                            sign: v(n.params, r)
                        }), e.abrupt("return", d.a.jsonp(t, n));
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }, e)
            }));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), d.a.interceptors.response.use(function (e) {
            return e.data = Object(p["G"])() ? Object(p["R"])(e.data) : e.data, e
        }, function (e) {
            return i.a.reject(e)
        });
        var b = new f["a"],
            g = new f["b"]({
                name: "main-site-request",
                maxNum: 100,
                exp: 2592e5
            });
        d.a.jsonpCache = Object(f["c"])(d.a.jsonp, {
            qBuffer: {
                cache: b,
                default: !0
            },
            qStore: {
                cache: g,
                default: !0,
                hot: !1
            }
        }), d.a.jsonpCacheHot = Object(f["c"])(d.a.jsonp, {
            qBuffer: {
                cache: b,
                default: !0
            },
            qStore: {
                cache: g,
                default: !0,
                hot: !0
            }
        }), d.a.getCache = Object(f["c"])(Object(s["a"])(regeneratorRuntime.mark(function e() {
            var t, n = arguments;
            return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, d.a.get.apply(d.a, n);
                case 2:
                    return t = e.sent, e.abrupt("return", {
                        status: t.status,
                        data: t.data
                    });
                case 4:
                case "end":
                    return e.stop()
                }
            }, e)
        })), {
            qBuffer: {
                cache: b,
                default: !0
            },
            qStore: {
                cache: g,
                default: !0,
                hot: !1
            }
        }), d.a.getCacheHot = Object(f["c"])(d.a.get, {
            qBuffer: {
                cache: b,
                default: !0
            },
            qStore: {
                cache: g,
                default: !0,
                hot: !0
            }
        }), d.a.postCache = Object(f["c"])(Object(s["a"])(regeneratorRuntime.mark(function e() {
            var t, n = arguments;
            return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, d.a.post.apply(d.a, n);
                case 2:
                    return t = e.sent, e.abrupt("return", {
                        status: t.status,
                        data: t.data
                    });
                case 4:
                case "end":
                    return e.stop()
                }
            }, e)
        })), {
            qBuffer: {
                cache: b,
                default: !0
            },
            qStore: {
                cache: g
            }
        }), t["a"] = d.a
    }, "9b6b": function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return o
        }), n.d(t, "a", function () {
            return c
        }), n.d(t, "d", function () {
            return u
        }), n.d(t, "c", function () {
            return s
        }), n.d(t, "e", function () {
            return l
        }), n.d(t, "f", function () {
            return d
        });
        n("0cd8"), n("6762"), n("2fdb"), n("96cf");
        var r = n("3b8d"),
            i = n("936f"),
            a = "//pub.m.iqiyi.com/h5/main/resource",
            o = "5440589312",
            c = "1978692812",
            u = "13015969312",
            s = "13013290412",
            l = "13014216512";

        function d(e) {
            return p.apply(this, arguments)
        }

        function p() {
            return p = Object(r["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, o;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, i["a"].jsonpCache("".concat(a, "/").concat(t, "/"), {
                            qStore: {
                                timeout: 200
                            }
                        });
                    case 2:
                        if (n = e.sent, r = n.data && n.data.data, o = r && r.list || [], !t.includes(",")) {
                            e.next = 9;
                            break
                        }
                        return e.abrupt("return", o.reduce(function (e, t) {
                            return e[t.id] = t, e
                        }, {}));
                    case 9:
                        return e.abrupt("return", o[0]);
                    case 10:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), p.apply(this, arguments)
        }
    }, "9d09": function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return c
        }), n.d(t, "b", function () {
            return u
        }), n.d(t, "a", function () {
            return s
        });
        var r = n("f499"),
            i = n.n(r),
            a = n("8296"),
            o = "__cgrecord__";

        function c(e) {
            var t = {
                rseat: e.rseat,
                block: e.block
            };
            if (e.block && e.rseat) {
                var n = i()(t);
                try {
                    a["T"].setItem(o, n)
                } catch (r) {
                    return r
                }
            }
        }

        function u() {
            try {
                var e = a["T"].getItem(o);
                if (e) return JSON.parse(e)
            } catch (t) {
                return t
            }
        }

        function s() {
            try {
                a["T"].removeItem(o)
            } catch (e) {
                return e
            }
        }
    }, ab22: function (e, t, n) {
        "use strict";
        n.d(t, "s", function () {
            return m
        }), n.d(t, "a", function () {
            return b
        }), n.d(t, "g", function () {
            return C
        }), n.d(t, "t", function () {
            return A
        }), n.d(t, "n", function () {
            return E
        }), n.d(t, "p", function () {
            return H
        }), n.d(t, "h", function () {
            return T
        }), n.d(t, "q", function () {
            return q
        }), n.d(t, "o", function () {
            return R
        }), n.d(t, "r", function () {
            return B
        }), n.d(t, "b", function () {
            return M
        }), n.d(t, "c", function () {
            return D
        }), n.d(t, "d", function () {
            return V
        }), n.d(t, "k", function () {
            return $
        }), n.d(t, "m", function () {
            return z
        }), n.d(t, "j", function () {
            return Y
        }), n.d(t, "e", function () {
            return Q
        }), n.d(t, "f", function () {
            return X
        }), n.d(t, "l", function () {
            return ee
        }), n.d(t, "i", function () {
            return ne
        });
        var r = n("cebc"),
            i = (n("6b54"), n("87b3"), n("ac6a"), n("f3e2"), n("96cf"), n("4f37"), n("28a5"), n("6d67"), n("795b")),
            a = n.n(i),
            o = (n("d25f"), n("7f7f"), n("57e7"), n("3b8d")),
            c = n("a745"),
            u = n.n(c),
            s = n("936f"),
            l = n("8296"),
            d = n("b2e7"),
            p = n("1a8c"),
            f = n.n(p),
            h = n("4f30"),
            m = {
                short: {
                    feed: 20
                },
                wechat: {
                    around: 20
                }
            },
            v = {
                horizontal: {
                    album: "longseriestplt",
                    source: "longsourcetplt",
                    movie: "longmovietplt",
                    short: "shortvideotplt"
                },
                vertical: "verticalvideotplt",
                wechat: "videosharetplt",
                bodan: "bodantplt",
                knowledge: "longkpptplt"
            },
            b = "defaultplaytplt",
            g = {
                image: ["//www.iqiyipic.com/common/fix/h5-aura/playPage-icon-2019040315.png", "//www.iqiyipic.com/common/fix/h5-v3/player-tip-bg.jpg", "//www.iqiyipic.com/common/fix/h5-aura/player-bg-20190321.png", "//www.iqiyipic.com/common/fix/h5-v3/am-update-icon.png"],
                script: ["//static.iqiyi.com/js/common/ares4-h5.min.js", "//static.iqiyi.com/js/common/f6a3054843de4645b34d205a9f377d25.js"]
            },
            y = "//pub.m.iqiyi.com/jp/h5/descList/",
            w = "//pub.m.iqiyi.com/h5/main/subscribe/info/",
            k = "//pub.m.iqiyi.com/h5/main/proxy/score/",
            _ = "//pub.m.iqiyi.com/h5/main/resource/",
            x = "//pub.m.iqiyi.com/h5/main/play/advert/",
            N = "//pub.m.iqiyi.com/jp/h5/game/recommend/upLive/",
            I = {
                HD: "高清视频–爱奇艺",
                MVHD: "高清MV在线观看–爱奇艺",
                FULLHD: "高清完整版在线观看–爱奇艺",
                RIGHTHD: "高清正版视频–爱奇艺"
            },
            O = "unknown",
            j = {
                horizontal: {
                    album: "albumList",
                    source: "albumList",
                    movie: "first",
                    short: "first"
                },
                vertical: O,
                wechat: {},
                knowledge: {
                    album: "albumList",
                    source: "albumList"
                }
            };

        function C(e, t) {
            var n = O;
            for (var r in e)
                if (e[r]) {
                    if (n = j[r], u()(n)) break;
                    for (var i in t)
                        if (t[i]) {
                            n = n[i] || O;
                            break
                        }
                    break
                }
            return n
        }

        function A() {
            return S.apply(this, arguments)
        }

        function S() {
            return S = Object(o["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, n = {
                            proxyUri: "soya/add_movie_score",
                            qipu_id: t.qipuId,
                            score: t.score,
                            appid: 24,
                            qyid: Object(d["w"])(),
                            _: (new Date).getTime(),
                            authcookie: Object(d["x"])()
                        }, e.next = 4, s["a"].jsonp(k, {
                            params: n
                        }, {
                            timeout: 1e3
                        });
                    case 4:
                        return r = e.sent, i = r && r.data, e.abrupt("return", {
                            success: "A00000" === i.code && i.data && i.data.succeed
                        });
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), S.apply(this, arguments)
        }

        function E() {
            return P.apply(this, arguments)
        }

        function P() {
            return P = Object(o["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, n = {
                            proxyUri: "soya/get_user_movie_score",
                            qipu_id: t.qipuId,
                            uid: Object(d["C"])(),
                            appid: 24,
                            qyid: Object(d["w"])(),
                            _: (new Date).getTime(),
                            authcookie: Object(d["x"])()
                        }, e.next = 4, s["a"].jsonp(k, {
                            params: n
                        }, {
                            timeout: 1e3
                        });
                    case 4:
                        if (r = e.sent, i = r && r.data, "A00000" !== i.code || !i.data) {
                            e.next = 10;
                            break
                        }
                        return e.abrupt("return", {
                            score: i.data[0].score[0]
                        });
                    case 10:
                        return e.abrupt("return", {
                            score: -1
                        });
                    case 11:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), P.apply(this, arguments)
        }

        function H(e, t) {
            var n = b;
            if (e.bodan) return v["bodan"];
            for (var r in e)
                if (e[r]) {
                    if (n = v[r], f()(n))
                        for (var i in t)
                            if (t[i]) {
                                n = n[i] || b;
                                break
                            }
                    break
                }
            return n
        }

        function T(e) {
            return L.apply(this, arguments)
        }

        function L() {
            return L = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, s["a"].jsonp("".concat(y).concat(t.aid, "/").concat(t.videoId, "/").concat(t.page, "/").concat(t.size, "/"), {
                            params: {
                                source: t.source
                            }
                        });
                    case 2:
                        if (n = e.sent, !(n && n.data && "A00000" === n.data.code && n.data.descInfo)) {
                            e.next = 6;
                            break
                        }
                        return n.data.descInfo.forEach(function (e) {
                            e.pageUrl = e.pageUrl && Object(l["P"])(e.pageUrl)
                        }), e.abrupt("return", n.data.descInfo);
                    case 6:
                        return e.abrupt("return", null);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), L.apply(this, arguments)
        }

        function q(e, t) {
            if (e.short) {
                var n = "";
                22 === t ? n = "27-2-11-1" : t <= 9 ? n = "31-20".concat(t, "-20-7") : t || (n = "31-2".concat(t, "-20-7"));
                var r = ["22", "25", "5"];
                return n = n && r.indexOf(t) >= 0 ? n.slice(0, n.length - 1) + "0" : n.slice(0, n.length - 1) + "8", n
            }
            return e.album ? "30-26-19-7" : e.source ? "30-28-19-7" : void 0
        }

        function R(e, t, n) {
            if (!e || !t || !t.qipuId) return "";
            n = n || {};
            var r = "",
                i = t.cid + "";
            if (e.album) {
                var a = n.albumName && t.order ? n.albumName + "第" + t.order + "集" : ""; - 1 !== [h["CHANNEL_DIANSHIJU"], h["CHANNEL_DONGMAN"]].indexOf(i) ? r = c([a, t.channelName, I.RIGHTHD]) : -1 !== [h["CHANNEL_JIAOYU"], h["CHANNEL_KEJI"], h["CHANNEL_GONGKAIKE"]].indexOf(i) ? (i === h["CHANNEL_GONGKAIKE"] && (t.channelName = "公开课"), r = c([a, t.videoName, t.channelName, I.RIGHTHD])) : r = -1 !== [h["CHANNEL_JILUPIAN"], h["CHANNEL_WEIDIANYING"], h["CHANNEL_MUYING"], h["CHANNEL_YUANCHUANG"], h["CHANNEL_JUNSHI"]].indexOf(i) ? c([a, t.shortTitle, t.channelName, I.RIGHTHD]) : -1 !== [h["CHANNEL_SHAOER"], h["CHANNEL_GAME"]].indexOf(i) ? c([t.videoName, t.channelName, I.RIGHTHD]) : c([a, t.shortTitle, t.channelName, I.HD])
            } else if (e.source) {
                var o = t.sourceName && t.period ? t.sourceName + "_" + t.period + "期" : ""; - 1 !== [h["CHANNEL_DIANSHIJU"], h["CHANNEL_JUNSHI"], h["CHANNEL_CAIJING"], h["CHANNEL_SHENGHUO"], h["CHANNEL_MUYING"], h["CHANNEL_JIANKANG"], h["CHANNEL_QICHE"]].indexOf(i) ? r = c([o, t.videoName, t.channelName, I.RIGHTHD]) : -1 !== [h["CHANNEL_ZONGYI"], h["CHANNEL_KEJI"], h["CHANNEL_TIYU"], h["CHANNEL_LVYOU"], h["CHANNEL_ZIXUN"], h["CHANNEL_YULE"], h["CHANNEL_JIAOYU"], h["CHANNEL_SHISHANG"], h["CHANNEL_FUN"], h["CHANNEL_YUANCHUANG"], h["CHANNEL_JILUPIAN"], h["CHANNEL_DIANYING"], h["CHANNEL_SHISHANGZONGYI"], h["CHANNEL_GONGYI"], h["CHANNEL_TUOKOUXIU"]].indexOf(i) ? (i === h["CHANNEL_SHISHANGZONGYI"] && (t.channelName = "时尚综艺"), r = c([o, t.shortTitle, t.channelName, I.RIGHTHD])) : r = i === h["CHANNEL_DONGMAN"] ? c([o, t.videoName, t.channelName, I.RIGHTHD]) : -1 !== [h["CHANNEL_SHAOER"], h["CHANNEL_GAME"]].indexOf(i) ? c([o, t.channelName, I.RIGHTHD]) : i === h["CHANNEL_YINYUE"] ? c([o, t.videoName, t.channelName, I.MVHD]) : c([o, t.videoName, t.channelName, I.RIGHTHD])
            } else e.short ? r = i === h["CHANNEL_PIANHUA"] ? c([t.videoName, t.channelName, I.RIGHTHD]) : i === h["CHANNEL_YINYUE"] ? c([t.videoName, t.channelName, I.MVHD]) : i === h["CHANNEL_DONGMAN"] ? c([t.videoName, t.channelName, I.FULLHD]) : c([t.videoName, t.channelName, I.HD]) : e.movie ? i !== h["CHANNEL_PIANHUA"] && (r = c([t.videoName, t.channelName, I.FULLHD])) : r = t.name || I.RIGHTHD;
            return r;

            function c(e) {
                return u()(e) ? e.filter(function (e) {
                    return !!e
                }).join("-") : ""
            }
        }

        function B(e) {
            if (!e) return a.a.resolve();
            var t = document.querySelector('script[src="'.concat(e, '"]'));
            if (t) return a.a.resolve();
            var n = document.getElementsByTagName("script")[0] || document.head,
                r = document.createElement("script");
            return r.src = e, r.async = !0, n.parentNode.insertBefore(r, n), new a.a(function (e, t) {
                r.onload = function () {
                    r = null, e(!0)
                }, r.onerror = function (e) {
                    i(), t(e)
                }
            });

            function i() {
                r.parentNode && r.parentNode.removeChild(r), r = null
            }
        }
        var U = "//pub.m.iqiyi.com/jp/h5/count/hotTrend/",
            M = "//static.iqiyi.com/js/html5/js/lib/echarts.1.0.0.min.js",
            D = 1,
            V = 2;

        function $(e) {
            return G.apply(this, arguments)
        }

        function G() {
            return G = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, s["a"].jsonp(U, {
                            params: t
                        });
                    case 3:
                        if (n = e.sent, !(n && n.data && "A00000" === n.data.code && n.data.data)) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("return", {
                            status: "success",
                            data: n.data.data
                        });
                    case 8:
                        if (!(n && n.data && ["A00004", "B00001"].indexOf(n.data.code) > -1)) {
                            e.next = 10;
                            break
                        }
                        return e.abrupt("return", {
                            status: "fail",
                            data: {}
                        });
                    case 10:
                        e.next = 15;
                        break;
                    case 12:
                        return e.prev = 12, e.t0 = e["catch"](0), e.abrupt("return", {
                            status: "retry",
                            data: {}
                        });
                    case 15:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [0, 12]
                ])
            })), G.apply(this, arguments)
        }

        function z() {
            var e = [],
                t = function (t) {
                    var n = g[t];
                    e = e.concat(n.map(function (e) {
                        return {
                            rel: "preload",
                            href: e,
                            as: t
                        }
                    }))
                };
            for (var n in g) t(n);
            return e
        }

        function Y(e) {
            return F.apply(this, arguments)
        }

        function F() {
            return F = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = t.featureId, r = t.qipuId, i = "".concat(w).concat(n, "/").concat(r, "/"), e.next = 4, s["a"].jsonp(i);
                    case 4:
                        return a = e.sent, o = a.data, e.abrupt("return", o && "A00000" === o.code ? o.data : {});
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), F.apply(this, arguments)
        }

        function Q(e) {
            return K.apply(this, arguments)
        }

        function K() {
            return K = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = t.id, r = "".concat(_).concat(n, "/"), e.next = 4, s["a"].jsonp(r);
                    case 4:
                        return i = e.sent, a = i.data, o = [], "A00000" === a.code && (o = a.data && a.data.list && a.data.list[0] && a.data.list[0].items), o.length > 0 && o.map(function (e) {
                            e.qipuId && "number" === typeof e.qipuId && (e.qipuId = Math.abs(e.qipuId).toString()), e.kvs && (e.zhipaiFullImg = e.kvs.page_bigimg, e.zhipaiImg = e.kvs.page_img, e.paimingFullImg = e.kvs.h5_bigimg, e.paimingImg = e.kvs.h5_img, e.zhipaiUrl = e.kvs.page_url, e.paimingUrl = e.kvs.h5_url, e.valid_album_id = W(e.kvs.valid_album_id), e.block = e.kvs.block || "801161_1", e.zhipaiRseat = e.kvs.page_rseat && e.kvs.page_rseat.trim(), e.paimingRseat = e.kvs.h5_rseat && e.kvs.h5_rseat.trim(), e.card_type = J(1 * e.kvs.card_type, 1 * e.kvs.card_position, e.kvs.Rb_ShowOn))
                        }), e.abrupt("return", o);
                    case 10:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), K.apply(this, arguments)
        }
        var J = function (e, t, n) {
                return "false" === n ? "none" : 0 === e && 0 === t ? "both_paiming" : 0 === e && 1 === t ? "both_zhipai" : 1 === e ? "paiming" : 2 === e ? "zhipai" : 3 === e ? "none" : void 0
            },
            W = function (e) {
                return e.trim().split(/\s*,\s*/)
            };

        function X(e) {
            return Z.apply(this, arguments)
        }

        function Z() {
            return Z = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = t.channelId, r = "".concat(x).concat(n, "/"), e.next = 4, s["a"].jsonp(r);
                    case 4:
                        return i = e.sent, a = i.data, e.abrupt("return", a && "A00000" === a.code ? a.data : {});
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Z.apply(this, arguments)
        }

        function ee(e) {
            return te.apply(this, arguments)
        }

        function te() {
            return te = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                var n, i;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = Object(r["a"])({}, t), e.next = 3, s["a"].jsonp(N, {
                            params: n
                        });
                    case 3:
                        return i = e.sent, e.abrupt("return", i && i.data || {});
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), te.apply(this, arguments)
        }

        function ne(e) {
            var t = e.videoInfo,
                n = e.verticalVideoInfo,
                r = e.vertical;
            return t && !r ? {
                aid: t.aid,
                tvid: t.qipuId,
                cid: t.cid,
                vid: t.vid,
                playModel: t.playModel,
                video: t
            } : {
                qipuId: n.qipuId,
                albumId: n.albumId,
                collectionId: n.collectionId,
                isJiepai: n.jiepai,
                contentType: t.contentType,
                channelId: n.channelId,
                isUGC: t.isUGC
            }
        }
    }, ab6e: function (e, t) {}, b0a3: function (e, t, n) {
        "use strict";
        var r = n("a4bb"),
            i = n.n(r),
            a = (n("ac6a"), n("f3e2"), n("d225")),
            o = n("b0b4"),
            c = {
                mail: {
                    tip: "您的账号当前处于安全环境，可直接",
                    mailSuccessTip: "邮件发送成功，立即",
                    openMail: "进入邮箱",
                    look: "查看",
                    mailPlaceholder: "请输入未绑定过的邮箱",
                    modify: "修改",
                    getAuthcode: "获取验证码",
                    mailFormatErrorTip: "邮箱格式错误， 请重新输入",
                    mailHasBind: "该邮箱已被绑定",
                    authcodePlaceholder: "请输入收到的验证码",
                    resendAuthcode: "重新发送验证码",
                    countDown: "秒后重发",
                    authcodeError: "验证码错误，请重新输入",
                    close: "关闭",
                    congratulate: "恭喜你！",
                    success: "成功！",
                    fail: "失败！",
                    confirm: "确定",
                    mailColon: "邮箱：",
                    authCodeFormatError: "验证码格式不正确",
                    verifyFail: "验证失败，请重试",
                    sessionIdErr: "当前操作已失效，请重新开始～"
                },
                bindPhone: {
                    title: "绑定手机"
                },
                changePhone: {
                    title: "修改手机"
                },
                password: {
                    tip: "您的账号当前处于安全环境，可直接",
                    firstInputPlaceholder: "请输入密码",
                    firstErrorTip: "请输入8-20位密码，字母/数字/字符至少两种",
                    passwordGrade: "密码安全等级",
                    secondInputPlaceholder: "请再次输入密码",
                    secondErrorTip: "两次密码输入不一致",
                    confirm: "确定",
                    close: "关闭",
                    weak: "弱",
                    middle: "中",
                    strong: "强",
                    setPasswordSuccess: "设置密码成功",
                    modifyPasswordSuccess: "修改密码成功",
                    bindPhoneInfo: "请先绑定手机号"
                },
                findPassword: {
                    title: "找回密码",
                    placeholder: "请输入手机号或邮箱",
                    submit: "确定",
                    err: "请输入正确的手机号或邮箱",
                    inputTip: "请输入可以接收短信/邮件的手机号/邮箱",
                    bottomTip: "原邮箱无法接收邮件，请先绑定手机"
                },
                common: {
                    title: {
                        bindMail: "绑定邮箱",
                        changeMail: "修改邮箱",
                        activeMail: "激活邮箱",
                        mailsms: "邮箱验证",
                        changePassword: "修改密码",
                        setPassword: "设置密码",
                        findPassword: "找回密码",
                        cp: "修改手机",
                        bp: "绑定手机"
                    },
                    verifyPhone: {
                        bottomTip: {
                            phone: "原手机号无法接收短信？",
                            email: "原邮箱无法接收邮件，请先绑定手机"
                        },
                        popTip: {
                            upTip: "请在8.4以上版本爱奇艺手机APP内使用申诉系统",
                            middleTitle: "操作方式",
                            middleInfo: "我的-帮助反馈-修改手机-手机号停用",
                            leftBtnText: "我知道了"
                        },
                        method: {
                            byPhone: "通过手机",
                            byEmail: "通过邮箱",
                            verify: "验证",
                            mailSwitch: "切换邮箱验证",
                            phoneSwitch: "切换手机验证"
                        },
                        topTip: {
                            prefix: "您的账号当前处于安全环境，",
                            end: "前请先进行安全验证"
                        },
                        custom: {
                            topTip: "为了保障您的账号安全，注销前需要您本人进行用户身份验证"
                        }
                    },
                    stopEntry: "您的账号当前处于高危环境，无法进行操作",
                    phoneInput: {
                        sendCodeBtn: "获取短信验证码",
                        topTip: "您的账号当前处于安全环境，可直接修改手机",
                        placeholder: "请输入手机号",
                        err: "手机号格式错误"
                    },
                    smsVerify: {
                        update: "修改",
                        phoneNumber: "手机号",
                        bindSuccess: "恭喜你! 手机绑定成功",
                        changeSuccess: "恭喜你! 手机修改成功",
                        leftBtnText: "关闭",
                        title: {
                            bp: "绑定手机",
                            cp: "修改手机",
                            vp: "手机验证",
                            findPassword: "安全验证"
                        },
                        sessionIdErr: "当前操作已失效，请重新开始～"
                    },
                    entryCheck: "正在检测您的账号安全，请稍后...",
                    entryCheckErr: "网络繁忙，请刷新再试～"
                },
                area: {
                    CN: "中国大陆",
                    TW: "台湾地区"
                }
            },
            u = {
                mail: {
                    tip: "您的賬號當前處於安全環境，可直接",
                    mailSuccessTip: "郵件發送成功，立即",
                    openMail: "進入郵箱",
                    look: "查看",
                    mailPlaceholder: "請輸入未綁定過的郵箱",
                    modify: "修改",
                    getAuthcode: "獲取驗證碼",
                    mailFormatErrorTip: "郵箱格式錯誤，請重新輸入",
                    mailHasBind: "該郵箱已被綁定",
                    authcodePlaceholder: "請輸入收到的驗證碼",
                    resendAuthcode: "重新發送驗證碼",
                    countDown: "秒后重發",
                    authcodeError: "驗證碼錯誤，請重新輸入",
                    close: "關閉",
                    congratulate: "恭喜你！",
                    success: "成功！",
                    fail: "失敗！",
                    confirm: "確定",
                    mailColon: "郵箱：",
                    authCodeFormatError: "驗證碼格式不正確",
                    verifyFail: "驗證失敗，請重試",
                    sessionIdErr: "當前操作已失效，請重新開始～"
                },
                bindPhone: {
                    title: "綁定手機"
                },
                changePhone: {
                    title: "修改手機"
                },
                findPassword: {
                    title: "找回密碼",
                    placeholder: "請輸入手機號或郵箱",
                    submit: "確定",
                    err: "請輸入正確的手機號或郵箱",
                    inputTip: "請輸入可以接收短信/郵件的手機號/郵箱",
                    bottomTip: "原郵箱無法接收郵件，請先綁定手機"
                },
                password: {
                    tip: "您的賬號當前處於安全環境，可直接",
                    firstInputPlaceholder: "請輸入密碼",
                    firstErrorTip: "請輸入8-20位密碼，字母/數字/字符至少兩種",
                    passwordGrade: "密碼安全等級",
                    secondInputPlaceholder: "請再次輸入密碼",
                    secondErrorTip: "兩次密碼輸入不一致",
                    confirm: "確定",
                    close: "關閉",
                    weak: "弱",
                    middle: "中",
                    strong: "強",
                    setPasswordSuccess: "設置密碼成功",
                    modifyPasswordSuccess: "修改密碼成功",
                    bindPhoneInfo: "請先綁定手機號"
                },
                common: {
                    title: {
                        bindMail: "綁定郵箱",
                        changeMail: "修改郵箱",
                        activeMail: "激活郵箱",
                        mailsms: "郵箱驗證",
                        changePassword: "修改密碼",
                        setPassword: "設置密碼",
                        findPassword: "找回密碼",
                        cp: "修改手機",
                        bp: "綁定手機"
                    },
                    verifyPhone: {
                        bottomTip: {
                            phone: "原手機號無法接收短信?",
                            email: "原郵箱無法接收郵件，請先綁定手機"
                        },
                        popTip: {
                            upTip: "請在8.4以上版本愛奇藝手機APP內使用申訴系統",
                            middleTitle: "操作方式",
                            middleInfo: "我的-幫助反饋-修改手機-手機號停用",
                            leftBtnText: "我知道了"
                        },
                        method: {
                            byPhone: "通過手機",
                            byEmail: "通過郵箱",
                            verify: "驗證",
                            mailSwitch: "切換郵箱驗證",
                            phoneSwitch: "切換手機驗證"
                        },
                        topTip: {
                            prefix: "您的賬號當前處於安全環境，",
                            end: "前請先進行安全驗證"
                        },
                        custom: {
                            topTip: "為了保障您的賬號安全，註銷前需要您本人進行用戶身份驗證"
                        }
                    },
                    stopEntry: "您的賬號當前處於高危環境，無法進行操作",
                    phoneInput: {
                        sendCodeBtn: "獲取短信驗證碼",
                        topTip: "您的賬號當前處於安全環境，可直接修改手機",
                        placeholder: "請輸入手機號",
                        err: "手機號格式錯誤"
                    },
                    smsVerify: {
                        update: "修改",
                        phoneNumber: "手機號",
                        bindSuccess: "恭喜你! 手機綁定成功",
                        changeSuccess: "恭喜你! 手機修改成",
                        leftBtnText: "關閉",
                        title: {
                            bp: "綁定手機",
                            cp: "修改手機",
                            vp: "手機驗證",
                            findPassword: "安全驗證"
                        },
                        sessionIdErr: "當前操作已失效，請重新開始～"
                    },
                    entryCheck: "正在檢測您的賬號安全，請稍後...",
                    entryCheckErr: "網絡繁忙，請刷新再試～"
                },
                area: {
                    CN: "中國大陸",
                    TW: "台灣地區"
                }
            },
            s = {
                cn: c,
                tw: u
            },
            l = n("a78e"),
            d = n.n(l);
        n.d(t, "b", function () {
            return p
        }), n.d(t, "a", function () {
            return f
        }), n.d(t, "c", function () {
            return h
        });
        var p = "IQIYIH5_LOCALE",
            f = function () {
                function e(t) {
                    var n = t.locale;
                    Object(a["a"])(this, e), this.locale = n || "cn"
                }
                return Object(o["a"])(e, [{
                    key: "t",
                    value: function (e) {
                        var t = s[this.locale],
                            n = {};
                        return i()(t).forEach(function (r) {
                            r === e && (n = t[r])
                        }), n
                    }
                }]), e
            }();

        function h() {
            return d.a.get(p) || ""
        }
    }, b134: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return o
        }), n.d(t, "a", function () {
            return c
        }), n.d(t, "d", function () {
            return u
        });
        var r = n("fe90"),
            i = n("7aa9");
        n.d(t, "b", function () {
            return i["a"]
        });
        var a = Object(i["a"])(r["a"].navigator.userAgent),
            o = a.os,
            c = a.browser,
            u = a.osProducer
    }, b2e7: function (e, t, n) {
        "use strict";
        n.d(t, "l", function () {
            return I
        }), n.d(t, "k", function () {
            return O
        }), n.d(t, "q", function () {
            return j
        }), n.d(t, "n", function () {
            return C
        }), n.d(t, "p", function () {
            return A
        }), n.d(t, "o", function () {
            return S
        }), n.d(t, "m", function () {
            return E
        }), n.d(t, "j", function () {
            return T
        }), n.d(t, "i", function () {
            return L
        }), n.d(t, "h", function () {
            return q
        }), n.d(t, "g", function () {
            return R
        }), n.d(t, "c", function () {
            return V
        }), n.d(t, "f", function () {
            return $
        }), n.d(t, "a", function () {
            return te
        }), n.d(t, "b", function () {
            return ne
        }), n.d(t, "d", function () {
            return re
        }), n.d(t, "e", function () {
            return ie
        }), n.d(t, "y", function () {
            return de
        }), n.d(t, "C", function () {
            return pe
        }), n.d(t, "w", function () {
            return he
        }), n.d(t, "S", function () {
            return me
        }), n.d(t, "T", function () {
            return ve
        }), n.d(t, "B", function () {
            return be
        }), n.d(t, "M", function () {
            return ge
        }), n.d(t, "N", function () {
            return ye
        }), n.d(t, "x", function () {
            return we
        }), n.d(t, "O", function () {
            return ke
        }), n.d(t, "P", function () {
            return _e
        }), n.d(t, "A", function () {
            return xe
        }), n.d(t, "X", function () {
            return Ie
        }), n.d(t, "V", function () {
            return je
        }), n.d(t, "t", function () {
            return Ae
        }), n.d(t, "s", function () {
            return Ee
        }), n.d(t, "W", function () {
            return He
        }), n.d(t, "D", function () {
            return Le
        }), n.d(t, "r", function () {
            return Re
        }), n.d(t, "v", function () {
            return Ue
        }), n.d(t, "z", function () {
            return De
        }), n.d(t, "R", function () {
            return Ve
        }), n.d(t, "Q", function () {
            return Ge
        }), n.d(t, "J", function () {
            return Ye
        }), n.d(t, "U", function () {
            return Ke
        }), n.d(t, "H", function () {
            return tt
        }), n.d(t, "L", function () {
            return rt
        }), n.d(t, "I", function () {
            return at
        }), n.d(t, "K", function () {
            return ct
        }), n.d(t, "u", function () {
            return st
        }), n.d(t, "G", function () {
            return dt
        });
        var r = n("f499"),
            i = n.n(r),
            a = n("0a0d"),
            o = n.n(a),
            c = n("5176"),
            u = n.n(c),
            s = (n("57e7"), n("96cf"), n("cebc")),
            l = (n("28a5"), n("0cd8"), n("4917"), n("3b8d")),
            d = n("a78e"),
            p = n.n(d),
            f = n("8296"),
            h = n("8d81"),
            m = n.n(h),
            v = n("936f"),
            b = n("5191"),
            g = n("2c06"),
            y = n("9b6b"),
            w = n("b383"),
            k = n("ba45"),
            _ = n("53a7"),
            x = n("11ad");
        n.d(t, "E", function () {
            return x["z"]
        }), n.d(t, "F", function () {
            return x["A"]
        });
        var N = "",
            I = "1",
            O = "3",
            j = "4",
            C = "7",
            A = "5",
            S = "8",
            E = "16",
            P = "newbie",
            H = "other",
            T = "1",
            L = "3",
            q = "0",
            R = "2",
            B = 119,
            U = {
                upd: {
                    value: "0"
                }
            },
            M = "",
            D = null,
            V = "//www.iqiyi.com/common/h5vip/cashierTransfer.html",
            $ = "https://passport.iqiyi.com/apis/profile/info.action",
            G = "https://passport.iqiyi.com/user/logout.php",
            z = "https://passport.iqiyi.com/apis/user/verify_status.action",
            Y = "https://passport.iqiyi.com/apis/user/modify_icon.action",
            F = "https://passport.iqiyi.com/apis/user/update_info.action",
            Q = "https://passport.iqiyi.com/apis/user/update_nickname.action",
            K = "https://passport.iqiyi.com/apis/user/authlogin.action?cookieVer=1&keep=1",
            J = "https://passport.iqiyi.com/apis/reglogin/renew_authcookie.action",
            W = "https://userpref.iqiyi.com/apis/userpref/list.action",
            X = "https://userpref.iqiyi.com/apis/userpref/add.action",
            Z = "https://sns-api.iqiyi.com/apis/friend/cntStat.action",
            ee = "//act.vip.iqiyi.com/interact/api/show",
            te = "02022001010000000000",
            ne = "02032001010000000000",
            re = "02022001010010000000",
            ie = "02032001010010000000",
            ae = "w0JD89dhtS7BdPLU2",
            oe = "//vinfo.vip.iqiyi.com/external/vip_users",
            ce = "//cmonitor.iqiyi.com/apis/user/check_vip.action",
            ue = "97ae2982356f69d8",
            se = "H_RENEW_COUNT",
            le = "ugc_space";

        function de() {
            return p.a.get("P00003")
        }

        function pe() {
            return fe().uid
        }

        function fe() {
            var e = p.a.get("P00002");
            return e ? JSON.parse(e) : {
                uid: ""
            }
        }

        function he() {
            if (M) return M;
            var e = f["J"].getItem(g["q"]),
                t = p.a.get(g["e"]);
            if (M = e || t) return (!t || !e) && me(M), M;
            var n = Object(f["Z"])();
            return me(n), n
        }

        function me(e) {
            !0, M = e, f["J"].setItem(g["q"], e), p.a.set(g["e"], e, {
                expires: 365,
                path: "/",
                domain: "iqiyi.com"
            })
        }

        function ve(e) {
            Object(f["V"])(g["g"], e)
        }

        function be() {
            return Object(f["A"])(g["g"])
        }

        function ge() {
            var e = p.a.get("P00002"),
                t = p.a.get("P00003");
            return ye({
                p00002: e,
                p00003: t
            })
        }

        function ye(e) {
            var t = e.p00002,
                n = e.p00003;
            return t && "deleted" !== t && "0" !== t && n && "deleted" !== n && "0" !== n
        }

        function we() {
            return p.a.get("P00001") || ""
        }

        function ke() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (f["p"].iqiyi) Object(_["e"])().then(function () {
                f["L"].ios ? Object(k["x"])(e.redirectUrl) : Object(k["w"])(e.redirectUrl)
            });
            else {
                var t = e.redirectUrl ? "?redirect_url=".concat(encodeURIComponent(e.redirectUrl)) : "";
                location.href = "/user.html".concat(t, "#baseLogin")
            }
        }

        function _e() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return location.href = "".concat(G, "?url=").concat(encodeURIComponent(e.redirectUrl || window.location.href), "&logoutcb=Q.__logoutcb"), {
                code: "A00000"
            }
        }

        function xe() {
            var e = "realName";
            return f["J"].getItem(e) || []
        }

        function Ne(e) {
            var t = "realName";
            f["J"].setItem(t, e)
        }

        function Ie() {
            return Oe.apply(this, arguments)
        }

        function Oe() {
            return Oe = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (t = xe(), n = pe(), !(t.indexOf(n) > -1)) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return", {
                            code: "A00000"
                        });
                    case 4:
                        return r = {
                            agenttype: Object(g["s"])(),
                            ptid: x["p"]
                        }, r.qd_sc = Object(g["C"])(r, "&", ae), e.next = 8, v["a"].post(z, Object(w["stringify"])(r), {
                            withCredentials: !0,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        });
                    case 8:
                        return i = e.sent, a = i.data, "A00000" === a.code && (t.push(n), Ne(t)), e.abrupt("return", a);
                    case 12:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Oe.apply(this, arguments)
        }

        function je(e) {
            return Ce.apply(this, arguments)
        }

        function Ce() {
            return Ce = Object(l["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = {
                            icon: t,
                            authcookie: we(),
                            agenttype: Object(g["s"])()
                        }, e.next = 3, v["a"].get(Y, {
                            params: u()({
                                qd_sc: Object(g["C"])(n, "&", ae)
                            }, n)
                        }, {
                            withCredentials: !0,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        });
                    case 3:
                        return r = e.sent, e.abrupt("return", r.data);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Ce.apply(this, arguments)
        }

        function Ae(e) {
            var t = [],
                n = /[~`!@#$%^&*()\-+=|\\[\]{}:;'"，。；、“”￥%<>\/]/;
            e && e.match(n) && t.push({
                name: "illegalSymbol",
                msg: '昵称中不能包含以下符号："~`!@#$%^&*()-+=|\\[]{}:;\'，。；、“”￥%<>/"'
            });
            var r = Se(e);
            return (r > 30 || r < 4) && t.push({
                name: "tooShortOrToolong",
                msg: "昵称4-30个字符"
            }), e && e.match(/^\d/) && t.push({
                name: "numBeginning",
                msg: "昵称不能以数字开头"
            }), 0 === t.length || t
        }

        function Se(e) {
            var t = 0;
            if (e) {
                var n = /[\u4e00-\u9fa5]/;
                t = e.split("").reduce(function (e, t, r) {
                    return e + (n.test(t) ? 2 : 1)
                }, t)
            }
            return t
        }

        function Ee() {
            return Pe.apply(this, arguments)
        }

        function Pe() {
            return Pe = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = {
                            authcookie: we(),
                            agenttype: Object(g["s"])()
                        }, e.next = 3, v["a"].post(Q, Object(w["stringify"])(t), {
                            withCredentials: !0,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        });
                    case 3:
                        return n = e.sent, r = n.data, e.abrupt("return", "A00000" === r.code && 1 === r.data);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Pe.apply(this, arguments)
        }

        function He(e) {
            return Te.apply(this, arguments)
        }

        function Te() {
            return Te = Object(l["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = u()(t, {
                            cookieVer: 1,
                            authcookie: we(),
                            agenttype: Object(g["s"])()
                        }), e.next = 3, v["a"].post(F, Object(w["stringify"])(n), {
                            withCredentials: !0,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        });
                    case 3:
                        return r = e.sent, i = r.data, e.abrupt("return", i);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Te.apply(this, arguments)
        }

        function Le(e) {
            return qe.apply(this, arguments)
        }

        function qe() {
            return qe = Object(l["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, v["a"].jsonp(Z, {
                            params: {
                                myuid: t.myuid,
                                source: le
                            }
                        });
                    case 2:
                        return n = e.sent, r = n.data, e.abrupt("return", "A00000" === r.code && r.data);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), qe.apply(this, arguments)
        }

        function Re(e, t) {
            return Be.apply(this, arguments)
        }

        function Be() {
            return Be = Object(l["a"])(regeneratorRuntime.mark(function e(t, n) {
                var r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        r = t || window.location.href, window.location.href = "".concat(K, "&redirect_url=").concat(encodeURIComponent(r), "&agenttype=12&authcookie=").concat(n);
                    case 2:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Be.apply(this, arguments)
        }

        function Ue() {
            return Me.apply(this, arguments)
        }

        function Me() {
            return Me = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, Object(y["f"])(y["a"]).catch(function () {
                            return {
                                kvs: {
                                    diamond: "on"
                                }
                            }
                        });
                    case 2:
                        return t = e.sent, e.abrupt("return", "off" !== t.kvs.diamond);
                    case 4:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Me.apply(this, arguments)
        }

        function De(e) {
            var t = "//serv.vip.iqiyi.com/order/preview.action?pid=a0226bd958843452&platform=".concat(ue, "&fc=acf43fd4a349feb4&qy_fr=H5-VIP-0201#type=0"),
                n = "//serv.vip.iqiyi.com/order/preview.action?pid=a0226bd958843452&platform=".concat(ue, "&fc=acf43fd4a349feb4&qy_fr=H5-VIP-0201#type=0"),
                r = "//vip.iqiyi.com/studentvip-h5.html";
            switch (e) {
            case j:
                return {
                    id: "diamond",
                    name: "钻石",
                    url: t
                };
            case I:
                return {
                    id: "gold",
                    name: "黄金",
                    url: t
                };
            case E:
                return {
                    id: "student",
                    name: "学生",
                    url: r
                };
            case O:
                return {
                    id: "silver",
                    name: "白银",
                    url: n
                };
            case P:
                return {
                    id: "newbie",
                    url: t
                };
            default:
                return {
                    id: H,
                    name: "其他",
                    url: t
                }
            }
        }

        function Ve() {
            return $e.apply(this, arguments)
        }

        function $e() {
            return $e = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (t = p.a.get(se), !t && ge()) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return");
                    case 3:
                        return p.a.set(se, o()(), {
                            path: "/",
                            domain: "iqiyi.com",
                            expires: 1
                        }), e.next = 6, Ge({
                            device_id: he(),
                            cookieVer: 1
                        });
                    case 6:
                        n = e.sent, v["a"].post(J, Object(w["stringify"])(n), {
                            withCredentials: !0,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        });
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), $e.apply(this, arguments)
        }

        function Ge(e, t) {
            return ze.apply(this, arguments)
        }

        function ze() {
            return ze = Object(l["a"])(regeneratorRuntime.mark(function e(t, n) {
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t.agenttype = Object(g["s"])(), t.ptid = x["p"], e.next = 4, Object(b["b"])();
                    case 4:
                        return t.dfp = e.sent, n && (t.qd_sc = Object(g["C"])(t, "&", ae)), e.abrupt("return", t);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ze.apply(this, arguments)
        }

        function Ye() {
            return Fe.apply(this, arguments)
        }

        function Fe() {
            return Fe = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : "", n = {
                            P00001: we(),
                            code: t,
                            platform: ue,
                            deviceID: he(),
                            version: "1.0",
                            lang: "cn",
                            app_lm: "cn"
                        }, e.next = 4, v["a"].get(ee, {
                            params: n
                        });
                    case 4:
                        if (r = e.sent, i = r.data || {}, "A00000" !== i.code || !i.data.detail) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("return", i.data.detail);
                    case 8:
                        return e.abrupt("return", "");
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Fe.apply(this, arguments)
        }

        function Qe() {
            var e = f["J"].getItem(g["o"]) || {};
            return e = Object(s["a"])({}, U, e), e
        }

        function Ke(e, t) {
            return Je.apply(this, arguments)
        }

        function Je() {
            return Je = Object(l["a"])(regeneratorRuntime.mark(function e(t, n) {
                var r, i, a;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (r = Qe(), !n) {
                            e.next = 17;
                            break
                        }
                        if (!ge()) {
                            e.next = 13;
                            break
                        }
                        return e.next = 5, Ze(t, n);
                    case 5:
                        if (i = e.sent, !i) {
                            e.next = 10;
                            break
                        }
                        r[t] = n, e.next = 11;
                        break;
                    case 10:
                        return e.abrupt("return", !1);
                    case 11:
                        e.next = 14;
                        break;
                    case 13:
                        r[t] = n;
                    case 14:
                        f["J"].setItem(g["o"], r), e.next = 23;
                        break;
                    case 17:
                        if (!ge()) {
                            e.next = 23;
                            break
                        }
                        return e.next = 20, We(t);
                    case 20:
                        a = e.sent, r = Object(s["a"])({}, r, a), f["J"].setItem(g["o"], r);
                    case 23:
                        return e.abrupt("return", r);
                    case 24:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Je.apply(this, arguments)
        }

        function We(e) {
            return Xe.apply(this, arguments)
        }

        function Xe() {
            return Xe = Object(l["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = {
                            authcookie: we(),
                            props: t,
                            agentType: B
                        }, e.prev = 1, e.next = 4, v["a"].jsonp(W, {
                            params: n
                        });
                    case 4:
                        return r = e.sent, e.abrupt("return", r && r.data && "A00000" === r.data.code && r.data.data);
                    case 8:
                        return e.prev = 8, e.t0 = e["catch"](1), e.abrupt("return", {});
                    case 11:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [1, 8]
                ])
            })), Xe.apply(this, arguments)
        }

        function Ze(e, t) {
            return et.apply(this, arguments)
        }

        function et() {
            return et = Object(l["a"])(regeneratorRuntime.mark(function e(t, n) {
                var r, i;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return r = {
                            authcookie: we(),
                            prop: t,
                            value: n.value,
                            agentType: B
                        }, e.prev = 1, e.next = 4, v["a"].jsonp(X, {
                            params: r
                        });
                    case 4:
                        return i = e.sent, e.abrupt("return", i && i.data && "success" === i.data.msg && "A00000" === i.data.code);
                    case 8:
                        return e.prev = 8, e.t0 = e["catch"](1), e.abrupt("return", !1);
                    case 11:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [1, 8]
                ])
            })), et.apply(this, arguments)
        }

        function tt(e) {
            return nt.apply(this, arguments)
        }

        function nt() {
            return nt = Object(l["a"])(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (ge()) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return", [N]);
                    case 4:
                        if (!D) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("return", D.ut);
                    case 8:
                        e.prev = 8, D = JSON.parse(p.a.get("ut")), e.next = 15;
                        break;
                    case 12:
                        return e.prev = 12, e.t0 = e["catch"](8), e.abrupt("return", rt());
                    case 15:
                        if (!D || D.uid !== pe() || !D.ut) {
                            e.next = 20;
                            break
                        }
                        return setTimeout(rt, 1e3), e.abrupt("return", D.ut);
                    case 20:
                        return e.abrupt("return", rt());
                    case 21:
                    case "end":
                        return e.stop()
                    }
                }, e, null, [
                    [8, 12]
                ])
            })), nt.apply(this, arguments)
        }

        function rt() {
            return it.apply(this, arguments)
        }

        function it() {
            return it = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, ct().catch(function () {});
                    case 2:
                        return t = e.sent, t = t || [N], D = {
                            ut: t,
                            uid: pe()
                        }, n = i()(D), r = .5, t && p.a.set("ut", n, {
                            expires: r,
                            path: "/",
                            domain: "iqiyi.com"
                        }), e.abrupt("return", t);
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), it.apply(this, arguments)
        }

        function at() {
            return ot.apply(this, arguments)
        }

        function ot() {
            return ot = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (t = we(), t) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return", null);
                    case 3:
                        return n = {
                            platform: ue,
                            appVersion: "1.0",
                            bizSource: "h5_web",
                            messageId: "vinfo_" + Object(f["Z"])(),
                            version: "3.0",
                            vipTypes: "1,3,4,5,7,8,10,13,14,18",
                            P00001: t
                        }, e.next = 6, v["a"].get(oe, {
                            params: n,
                            withCredentials: !0
                        });
                    case 6:
                        return r = e.sent, i = r.data, e.abrupt("return", "A00000" === i.code ? i : null);
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ot.apply(this, arguments)
        }

        function ct() {
            return ut.apply(this, arguments)
        }

        function ut() {
            return ut = Object(l["a"])(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", at().then(function (e) {
                            if ("A00000" !== e.code) return "";
                            var t = [],
                                n = e.data;
                            for (var r in n) {
                                var i = n[r];
                                i && i.status === T && t.push(i.vipType)
                            }
                            return t.length ? t : ""
                        }));
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ut.apply(this, arguments)
        }

        function st() {
            return lt.apply(this, arguments)
        }

        function lt() {
            return lt = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = Object(g["s"])(), n = we(), r = {
                            agenttype: t,
                            sign: m()(n.substring(4, 36) + "|" + t + "|" + ae),
                            ptid: x["p"],
                            version: "3.0"
                        }, e.next = 5, v["a"].get(ce, {
                            params: r,
                            withCredentials: !0
                        });
                    case 5:
                        return i = e.sent, a = i.data, e.abrupt("return", a);
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), lt.apply(this, arguments)
        }

        function dt() {
            return pt.apply(this, arguments)
        }

        function pt() {
            return pt = Object(l["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (t = null, ge()) {
                            e.next = 4;
                            break
                        }
                        return t = null, e.abrupt("return");
                    case 4:
                        return e.next = 6, st();
                    case 6:
                        if (n = e.sent, "A10002" !== n.code && "A10004" !== n.code) {
                            e.next = 11;
                            break
                        }
                        t = 0, e.next = 15;
                        break;
                    case 11:
                        return e.next = 13, ct().catch(function () {
                            t = 1
                        });
                    case 13:
                        r = e.sent, 0 === r.length ? t = -1 : r.indexOf(I) > -1 ? t = 3 : r.indexOf(O) > -1 ? t = 2 : r.indexOf(j) > -1 && (t = 4);
                    case 15:
                        return e.abrupt("return", t);
                    case 16:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), pt.apply(this, arguments)
        }
    }, b4d0: function (e, t, n) {
        "use strict";
        n.d(t, "l", function () {
            return w
        }), n.d(t, "n", function () {
            return k
        }), n.d(t, "o", function () {
            return x
        }), n.d(t, "p", function () {
            return N
        }), n.d(t, "q", function () {
            return I
        }), n.d(t, "r", function () {
            return O
        }), n.d(t, "s", function () {
            return j
        }), n.d(t, "m", function () {
            return C
        }), n.d(t, "u", function () {
            return E
        }), n.d(t, "t", function () {
            return P
        }), n.d(t, "e", function () {
            return H
        }), n.d(t, "i", function () {
            return T
        }), n.d(t, "j", function () {
            return L
        }), n.d(t, "f", function () {
            return q
        }), n.d(t, "d", function () {
            return R
        }), n.d(t, "c", function () {
            return B
        }), n.d(t, "g", function () {
            return U
        }), n.d(t, "h", function () {
            return M
        }), n.d(t, "k", function () {
            return D
        }), n.d(t, "b", function () {
            return V
        }), n.d(t, "a", function () {
            return $
        }), n.d(t, "I", function () {
            return X
        }), n.d(t, "M", function () {
            return ne
        }), n.d(t, "J", function () {
            return ie
        }), n.d(t, "K", function () {
            return oe
        }), n.d(t, "H", function () {
            return ue
        }), n.d(t, "x", function () {
            return de
        }), n.d(t, "G", function () {
            return pe
        }), n.d(t, "B", function () {
            return fe
        }), n.d(t, "C", function () {
            return he
        }), n.d(t, "D", function () {
            return me
        }), n.d(t, "F", function () {
            return ge
        }), n.d(t, "z", function () {
            return we
        }), n.d(t, "y", function () {
            return ke
        }), n.d(t, "E", function () {
            return _e
        }), n.d(t, "w", function () {
            return Oe
        }), n.d(t, "L", function () {
            return Ce
        }), n.d(t, "A", function () {
            return Pe
        }), n.d(t, "v", function () {
            return He
        });
        n("759f");
        var r = n("a4bb"),
            i = n.n(r),
            a = (n("55dd"), n("ac6a"), n("f3e2"), n("cebc")),
            o = (n("96cf"), n("6762"), n("2fdb"), n("0cd8"), n("d25f"), n("e814")),
            c = n.n(o),
            u = (n("28a5"), n("a745")),
            s = n.n(u),
            l = n("5176"),
            d = n.n(l),
            p = (n("6d67"), n("b54a"), n("a481"), n("3b2b"), n("3b8d")),
            f = n("b383"),
            h = n.n(f),
            m = n("936f"),
            v = n("8296"),
            b = n("b2e7"),
            g = n("2c06"),
            y = n("5321"),
            w = 1,
            k = 2,
            _ = 4,
            x = 3,
            N = 6,
            I = 7,
            O = 8,
            j = 9,
            C = 11,
            A = 101,
            S = 1e3,
            E = "relate",
            P = "intent",
            H = "input",
            T = "related",
            L = "suggest",
            q = "more",
            R = "correct",
            B = 18,
            U = "NC",
            M = "OT",
            D = "ugc_openapi_qyplayer",
            V = "TEMPORARY",
            $ = "NORMAL",
            G = "//search.video.iqiyi.com/o",
            z = "//search.video.iqiyi.com/m",
            Y = "//ota.iqiyi.com/adf/c5ea53395d574e88b2838ef1be7f4402",
            F = "//ota.iqiyi.com/adf/00b345c8144145aba21afa55a135037b",
            Q = "//pub.m.iqiyi.com/jp/h5/search/fragment/",
            K = "//qiyu.iqiyi.com/p13n20",
            J = /([[\](+)$.?^{}|\-*])/g,
            W = /(\d{4})(\d{2})(\d{2})/g;

        function X(e) {
            return Z.apply(this, arguments)
        }

        function Z() {
            return Z = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, o, c, u = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, r = Object(a["a"])({
                            if : "html5",
                            key: t.key,
                            pageNum: t.pageNum || 1,
                            pageSize: t.pageSize || 20,
                            channel_name: t.channelName,
                            u: t.anonymousUid || Object(b["w"])(),
                            pu: t.uid || Object(b["C"])(),
                            video_allow_3rd: t.videoAllow3rd || 1,
                            intent_result_number: t.intentResultNumber || 10,
                            intent_category_type: t.intentCategory || 1,
                            timeLength: t.timeLength,
                            releaseDate: t.releaseDate,
                            mode: t.mode,
                            need_qc: t.needQc,
                            three_category: ye(t.threeCategory),
                            vfrm: t.vfrm || "2-3-0-1",
                            type: t.type,
                            no_play_control: Object(g["u"])() ? 1 : void 0
                        }, n), e.next = 4, m["a"].jsonpCache(t.url || G, {
                            params: r
                        }, {
                            qStore: {
                                timeout: 300
                            }
                        });
                    case 4:
                        if (i = e.sent, o = i.data, !o) {
                            e.next = 13;
                            break
                        }
                        return e.next = 10, ee(o, r);
                    case 10:
                        e.t0 = e.sent, e.next = 14;
                        break;
                    case 13:
                        e.t0 = null;
                    case 14:
                        return c = e.t0, e.abrupt("return", c);
                    case 16:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Z.apply(this, arguments)
        }

        function ee(e, t) {
            return te.apply(this, arguments)
        }

        function te() {
            return te = Object(p["a"])(regeneratorRuntime.mark(function e(t, n) {
                var r, a, o, c, u, s, l;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return r = {
                            key: n.key,
                            eventId: t.event_id,
                            bkt: t.bkt,
                            searchTime: t.search_time,
                            serverTime: t.server_time,
                            isInvalidQuery: !!t.is_invalid_query,
                            indexLayer: t.index_layer,
                            graphType: t.graph_type || "",
                            terms: t.terms,
                            resultNum: t.result_num,
                            maxResultNumber: t.max_result_number,
                            pageNum: t.page_num,
                            pageSize: t.page_size,
                            qc: t.qc,
                            needQc: t.need_qc,
                            isreplaced: t.isreplaced,
                            sBubble: !1,
                            intentType: t.intent_type || "",
                            realQuery: t.real_query
                        }, a = t.docinfos, o = [], c = [], u = [], s = !1, a && a.forEach(function (e) {
                            var a = e.albumDocInfo,
                                l = a.videoDocType,
                                d = 7,
                                p = a.app && a.app.running_platform && "";
                            if (l !== _ && l !== S && (l !== A || v["L"].android && p.includes(d))) {
                                if (e.is_from_intent) {
                                    if (!(c.length < 6)) return void(s = !0);
                                    a.addFromIntent = !0
                                }
                                a.docId = e.doc_id, a.sort = e.sort, a.pos = e.pos, a.pageNum = e.page_num, a.isFromIntent = e.is_from_intent, a.serverTime = t.server_time, a.key = n.key, a.rq = t.isreplaced && t.qc || n.key, a.vfrm = n.vfrm;
                                var f = a.siteId && a.siteId.replace(/pps/, "iqiyi");
                                if (a.siteIn = "iqiyi" === f, ![x, A].includes(l)) {
                                    var h = a.video_lib_meta || {},
                                        m = 15,
                                        b = !(!a.downloadable_platforms || !a.downloadable_platforms.includes(m));
                                    a.isDownload = b, b && (a.iosDownlink = Y, a.androidDownlink = F), a.siteIn || !a.siteIn && !i()(h).length ? (a.title = a.albumTitle || "", a.albumImg = a.albumImg || a.albumVImage || a.albumHImage || "") : h && (a.title = h.title || "", a.albumImg = h.poster)
                                }
                                a.circle_summaries && a.circle_summaries.length > 0 && (r.isBubble = a.videoDocType === w && !a.album_type && a.series && !a.isFromIntent);
                                var g = "",
                                    y = "";
                                if (a.channel) {
                                    var k = a.channel.split(",");
                                    k.length > 1 && (a.channelName = y = k[0] || "", a.channelId = g = k[1] || "")
                                }
                                if (a.channelId = g, a.channelName = y, l !== A && l !== O && l !== x && l !== C && g && y) {
                                    var N = u.some(function (e) {
                                        return e.id === g
                                    });
                                    N || u.push({
                                        id: g,
                                        name: y
                                    })
                                }
                                a.pageUrl = ve(a), a.addFromIntent ? c.push(a) : o.push(a)
                            }
                        }), c.length && (l = t.intent_pos, o.splice(l ? l - 1 : 0, 0, {
                            videoDocType: P,
                            docs: c,
                            key: n.key,
                            termQuery: t.term_query,
                            realQuery: t.real_query,
                            scoringMode: t.scoring_mode,
                            intentMore: s
                        })), r.docs = o, r.channels = u, e.abrupt("return", r);
                    case 11:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), te.apply(this, arguments)
        }

        function ne(e) {
            return re.apply(this, arguments)
        }

        function re() {
            return re = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (n = t.filter(function (e) {
                            return 10 === e.collection_type || e.source_provider === D
                        }), n.length) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return");
                    case 3:
                        return r = n.map(function (e) {
                            return e.albumId
                        }), e.next = 6, Ne(r);
                    case 6:
                        i = e.sent, i && n.forEach(function (e) {
                            i.forEach(function (t) {
                                e.albumId === t.qipuId && (e.pageUrl = He(t.pageUrl, {
                                    vfrm: e.vfrm
                                }))
                            })
                        });
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), re.apply(this, arguments)
        }

        function ie() {
            return ae.apply(this, arguments)
        }

        function ae() {
            return ae = Object(p["a"])(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, m["a"].getCache(z, {
                            params: {
                                if : "hotQuery",
                                p: 15,
                                is_qipu_platform: 1
                            },
                            withCredentials: !0
                        }, {
                            qStore: {
                                timeout: 300
                            }
                        });
                    case 2:
                        return t = e.sent, e.abrupt("return", t.data);
                    case 4:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ae.apply(this, arguments)
        }

        function oe(e) {
            return ce.apply(this, arguments)
        }

        function ce() {
            return ce = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, m["a"].getCache(z, {
                            params: {
                                if : "related_query",
                                key: t.key
                            },
                            withCredentials: !0
                        }, {
                            qStore: {
                                timeout: 300
                            }
                        });
                    case 2:
                        return n = e.sent, e.abrupt("return", n.data);
                    case 4:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ce.apply(this, arguments)
        }

        function ue(e, t) {
            var n = new RegExp("(".concat(se(t), ")"), "gi");
            return Object(v["B"])(e).replace(n, '<span class="green">$1</span>')
        }

        function se() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.replace(/\\/g, "\\\\").replace(J, "\\$1")
        }

        function le(e) {
            return ("" + e).replace(W, function (e, t, n, r) {
                return [n, r].join("-")
            })
        }

        function de(e) {
            return ("" + e).replace(W, function (e, t, n, r) {
                return [t, n, r].join("-")
            })
        }

        function pe(e) {
            var t = 1 === e.paymark,
                n = 2 === e.paymark,
                r = e.siteIn && 3 === e.paymark || !e.siteIn && 2 === e.isPurchase,
                i = e.is_qiyi_produced,
                a = e.is_exclusive,
                o = !!e.special_content_type;
            return {
                isVip: t,
                isBill: n,
                isPaid: r,
                isQiyiProduced: i,
                isExclusive: a,
                isPaike: o,
                isPre: e.isPre,
                isNew: e.isNew
            }
        }

        function fe(e) {
            var t = pe(e);
            return he(t)
        }

        function he(e) {
            return e.isQiyiProduced ? "自制" : e.isExclusive ? "独播" : e.isPaid ? "付费" : e.isBill ? "用券" : e.isVip ? "VIP" : e.isPaike ? "拍客" : e.isNew ? "新" : e.isPre ? "预告" : void 0
        }

        function me(e) {
            var t = pe(e);
            return t.isQiyiProduced ? "自制" : t.isExclusive ? "独播" : t.isPaike ? "拍客" : void 0
        }

        function ve(e, t) {
            var n = e.videoinfos || [];
            t = t || n[0] || {};
            var r = e.video_lib_meta || {},
                i = t.itemLink,
                a = e.siteIn ? i : r.link || i;
            return a = e.siteIn ? Object(v["P"])(a) : a, He(Object(v["P"])(a), {
                vfrm: e.vfrm
            })
        }

        function be(e, t) {
            return e = e || [], e.map(function (e, n) {
                return d()(e, {
                    type: t,
                    ptype: "1-1-5-".concat(e.itemNumber)
                })
            })
        }

        function ge(e) {
            var t = e.newest_item_number,
                n = be(e.videoinfos, "video"),
                r = be(e.prevues, "prevue");
            if (r.reverse(), r && r.length > 0) {
                var i = r[r.length - 1];
                while (i.itemNumber <= t) r.pop(), i = r[r.length - 1]
            }
            var a = r.length > 0 ? r.length - 1 : 0;
            Array.prototype.splice.apply(r, [a, 0].concat(n));
            var o = [],
                c = 0;
            while (++c <= 5) {
                var u = r.pop();
                if (!u) break;
                if ("prevue" === u.type) o.push(u);
                else if (4 === c) {
                    var s = r[r.length - 2];
                    if (s && "video" === s.type) {
                        o.unshift({
                            type: "more"
                        }), o.unshift(n[0]);
                        break
                    }
                    o.unshift(u)
                } else o.unshift(u)
            }
            return o.map(function (t) {
                var n = {
                    text: t.itemNumber,
                    pageUrl: He(t.itemLink, {
                        vfrm: e.vfrm
                    }),
                    ptype: t.ptype
                };
                return n.pageUrl = e.siteIn ? Object(v["P"])(n.pageUrl) : n.pageUrl, "video" === t.type ? (n.isNew = t.is_new, n.isVip = (e.paymark && 1 === e.paymark || !e.paymark) && t.is_vip, n.isBill = 2 === e.paymark && t.is_vip, n.isPaid = 3 === e.paymark && t.is_vip, n.payMarkUrl = Object(v["v"])(t.pay_mark_url, "0_34")) : "prevue" === t.type ? n.isPre = !0 : (n.text = "...", n.ptype = "1-1-14", n.pageUrl = He(o[0].itemLink, {
                    vfrm: e.vfrm
                }), n.pageUrl = e.siteIn ? Object(v["P"])(n.pageUrl) : n.pageUrl), n.upperRightCorner = he(n), n
            })
        }

        function ye(e) {
            return s()(e) ? encodeURIComponent(e.join(",")).replace(/%/g, "_") : e
        }

        function we(e) {
            if (!e) return "";
            var t, n = e.split("-"),
                r = c()(n[1], 10);
            return e = c()(n[2], 10), 1 === r && e >= 20 || 2 === r && e <= 18 ? t = "水瓶座" : 2 === r && e >= 19 || 3 === r && e <= 20 ? t = "双鱼座" : 3 === r && e >= 21 || 4 === r && e <= 19 ? t = "白羊座" : 4 === r && e >= 20 || 5 === r && e <= 20 ? t = "金牛座" : 5 === r && e >= 21 || 6 === r && e <= 21 ? t = "双子座" : 6 === r && e >= 22 || 7 === r && e <= 22 ? t = "巨蟹座" : 7 === r && e >= 23 || 8 === r && e <= 22 ? t = "狮子座" : 8 === r && e >= 23 || 9 === r && e <= 22 ? t = "处女座" : 9 === r && e >= 23 || 10 === r && e <= 23 ? t = "天秤座" : 10 === r && e >= 24 || 11 === r && e <= 22 ? t = "天蝎座" : 11 === r && e >= 23 || 12 === r && e <= 21 ? t = "射手座" : (12 === r && e >= 22 || 1 === r && e <= 19) && (t = "摩羯座"), t
        }

        function ke(e) {
            return e ? (e = String(e), [e.substring(0, 4), e.substring(4, 6), e.substring(6, 8)].filter(function (e) {
                return !!e
            }).join("-")) : ""
        }

        function _e() {
            return xe.apply(this, arguments)
        }

        function xe() {
            return xe = Object(p["a"])(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return t = {
                            area: "h_lizard",
                            uid: b["w"],
                            ppuid: Object(b["C"])(),
                            cid_num: "-1_8",
                            rltfmt: "json"
                        }, e.next = 3, m["a"].jsonp(K, {
                            params: t
                        });
                    case 3:
                        return n = e.sent, r = n.data, e.abrupt("return", r && "A00000" === r.code ? r : null);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), xe.apply(this, arguments)
        }

        function Ne(e) {
            return Ie.apply(this, arguments)
        }

        function Ie() {
            return Ie = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, m["a"].jsonp("".concat(Q).concat(t.join(",")));
                    case 2:
                        return n = e.sent, r = n.data, e.abrupt("return", r && "A00000" === r.code ? r.videos : null);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Ie.apply(this, arguments)
        }

        function Oe(e) {
            return je.apply(this, arguments)
        }

        function je() {
            return je = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o, c, u = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, r = Se(n.sqr, t), i = n.s2, a = n.source, o = n.rpage || 3, c = (t.docs || []).filter(function (e) {
                            return !!e
                        }), c.forEach(function (e, c) {
                            e.pingback = {
                                t: 20,
                                bstp: n.bstp,
                                purl: n.purl,
                                c1: e.channelId,
                                position: c + 1,
                                rseat: c + 1,
                                ssite: e.siteId || "iqiyi",
                                sitype: e.isFromIntent ? 1 : 0,
                                spage: t.pageNum || 1,
                                sr: e.key,
                                se: t.eventId,
                                sbkt: t.bkt,
                                srq: t.realQuery,
                                silayer: t.indexLayer,
                                starget: e.docId,
                                ptype: e.ptype || n.ptype,
                                mode: n.mode,
                                rpage: o,
                                sqr: r,
                                s2: i,
                                source: a
                            }
                        });
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), je.apply(this, arguments)
        }

        function Ce(e) {
            return Ae.apply(this, arguments)
        }

        function Ae() {
            return Ae = Object(p["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o, c = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, r = Se(n.sqr, t), i = n.sitype, void 0 === i && (i = t.graphType && 1 === t.graphType.type && 1 === t.graphType.intent_sub_type ? 1 : 0), a = Ee(t.docs), o = {
                            t: 22,
                            bstp: n.bstp || 2,
                            sst: t.searchTime || t.search_time || "",
                            spage: t.pageNum || 1,
                            sr: t.key,
                            sbkt: t.bkt,
                            se: t.eventId,
                            srq: t.realQuery,
                            silayer: t.indexLayer,
                            sqr: r,
                            sitype: i,
                            sdocids: a,
                            rpage: n.rpage || 3,
                            stoken: n.stoken,
                            sad: void 0 !== n.sad ? n.sad : t.isBubble ? 1 : "",
                            ssr: n.ssr,
                            ptype: n.ptype,
                            satt: n.satt,
                            sct: n.sct,
                            s2: n.s2,
                            source: n.source || "",
                            mode: n.mode || "",
                            purl: n.purl || "",
                            stag: n.stag || ""
                        }, Object(y["x"])(o);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), Ae.apply(this, arguments)
        }

        function Se(e, t) {
            return void 0 === e && (e = t.isreplaced ? 1 : t.intentType ? 10 : 0), e
        }

        function Ee() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = e.reduce(function (e, t) {
                    if (t && t.videoDocType === P) {
                        var n = t.docs;
                        e += Ee(n)
                    } else t && (e += "".concat(e ? ";" : "").concat(t.docId, ",").concat(t.siteId, ",").concat(t.channelId));
                    return e
                }, "");
            return t
        }

        function Pe(e) {
            var t = e.video_lib_meta || {},
                n = "";
            if (e.videoDocType === w && 1 === e.album_type) {
                var r = e.videoinfos || [],
                    i = r[0].year,
                    a = i ? le(i) : "";
                a && (n = "".concat(a, "期"))
            } else {
                var o = t.total_video_count || e.itemTotalNumber,
                    c = e.newest_item_number;
                c === o && c ? n = "".concat(o, "集全") : c ? n = "更新至".concat(c, "集") : e.score && (n = String(e.score.toFixed(1)))
            }
            return n
        }

        function He(e, t) {
            return e ? "".concat(e).concat(e.includes("?") ? "&" : "?").concat(h.a.stringify(t)) : e
        }
    }, b9df: function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("li", [n("a", e._g(e._b({
                    staticClass: "c-linkChannel",
                    class: {
                        selected: e.selected
                    }
                }, "a", e.$attrs, !1), e.$listeners), [e._v("\n    " + e._s(e.text) + "\n  ")])])
            },
            i = [],
            a = {
                name: "AuraHeadLabel",
                props: {
                    selected: {
                        type: Boolean,
                        default: !1
                    },
                    text: {
                        type: String,
                        default: ""
                    }
                }
            },
            o = a,
            c = n("2877"),
            u = Object(c["a"])(o, r, i, !1, null, null, null);
        t["a"] = u.exports
    }, ba45: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return y
        }), n.d(t, "c", function () {
            return w
        }), n.d(t, "f", function () {
            return k
        }), n.d(t, "d", function () {
            return _
        }), n.d(t, "e", function () {
            return x
        }), n.d(t, "g", function () {
            return N
        }), n.d(t, "a", function () {
            return I
        }), n.d(t, "j", function () {
            return E
        }), n.d(t, "q", function () {
            return P
        }), n.d(t, "l", function () {
            return H
        }), n.d(t, "h", function () {
            return L
        }), n.d(t, "t", function () {
            return R
        }), n.d(t, "m", function () {
            return M
        }), n.d(t, "o", function () {
            return D
        }), n.d(t, "n", function () {
            return V
        }), n.d(t, "B", function () {
            return $
        }), n.d(t, "p", function () {
            return K
        }), n.d(t, "y", function () {
            return J
        }), n.d(t, "s", function () {
            return W
        }), n.d(t, "C", function () {
            return X
        }), n.d(t, "u", function () {
            return Z
        }), n.d(t, "z", function () {
            return ee
        }), n.d(t, "v", function () {
            return te
        }), n.d(t, "A", function () {
            return ne
        }), n.d(t, "i", function () {
            return re
        });
        n("96cf");
        var r = n("3b8d"),
            i = n("5176"),
            a = n.n(i),
            o = n("0a0d"),
            c = n.n(o),
            u = (n("57e7"), n("7f7f"), n("759f"), n("9ef0")),
            s = n("e272"),
            l = n("2c06"),
            d = n("b383"),
            p = n.n(d),
            f = n("2b0e"),
            h = n("1a8c"),
            m = n.n(h),
            v = n("b2e7"),
            b = n("8296"),
            g = n("4f30");
        n.d(t, "k", function () {
            return u["a"]
        }), n.d(t, "r", function () {
            return u["c"]
        }), n.d(t, "w", function () {
            return u["g"]
        }), n.d(t, "x", function () {
            return u["h"]
        });
        var y = "154",
            w = "home",
            k = "play",
            _ = "hot",
            x = "interactive",
            N = "verticalPlay",
            I = "custom",
            O = "defaultplaytplt",
            j = {
                horizontal: {
                    album: "longseriestplt",
                    source: "longsourcetplt",
                    movie: "longmovietplt",
                    short: "shortvideotplt"
                },
                vertical: "verticalvideotplt",
                wechat: "videosharetplt",
                bodan: "bodantplt",
                knowledge: "longkpptplt"
            },
            C = !0,
            A = !1,
            S = ["vivobrowser"];

        function E() {
            if (!C) return !0;
            var e = !A || Object(s["b"])();
            return S.some(function (e) {
                return !!b["p"][e]
            }) && e
        }

        function P() {
            var e = "",
                t = "";
            if (f["default"].store && f["default"].store.state && f["default"].store.state.play && f["default"].store.state.play.videoInfo) {
                var n = f["default"].store.state.play.videoInfo;
                e = n.tvid || n.qipuId || "", t = n.aid || n.albumId || ""
            }
            return {
                tvid: e,
                aid: t
            }
        }

        function H() {
            var e = P();
            return {
                compinfo: [b["p"].name || "NUll", F() || "NULL", e.tvid || "NULL", e.aid || "NULL"].join(";")
            }
        }

        function T() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.cid || (e.data ? e.data.cid : "") || "";
            return t && t + "" === g["CHANNEL_SHAOER"] ? e : (b["p"].weixin && (e.subtype = "420"), b["p"].baidubox && (e.subtype = "348"), b["p"].qqApp && (e.subtype = "H5QQlq_1670"), e)
        }
        var L = {
            danmu: {
                subtype: "H5bfql_1109",
                downloadUrl: "http://ota.iqiyi.com/f4.jsp?url=h5_pinglun",
                rseat: "h5_player_danmu",
                block: "h5_block_player_danmu"
            },
            loading: {
                subtype: "H5bfqh_1110",
                downloadUrl: "http://ota.iqiyi.com/f4.jsp?url=h5_pinglun",
                rseat: "h5_player_loading",
                block: "h5_block_player_loading"
            }
        };

        function q(e) {
            var t = "//ota.iqiyi.com/f2.jsp",
                n = Object(l["E"])() || Object(l["z"])(),
                r = p.a.stringify({
                    pos: e,
                    msrc: n,
                    vfm: n,
                    qyid: Object(v["w"])(),
                    qypid: "-1_2031"
                });
            return "".concat(t, "?").concat(r)
        }

        function R(e) {
            return e.query.subtype = B(), Object(u["d"])(e).catch(function () {
                if (U()) {
                    var t = M(e.downApp);
                    Object(u["a"])(t)
                }
            })
        }

        function B() {
            var e = 156,
                t = Object(l["E"])(),
                n = Object(l["v"])();
            return n === l["h"] ? e = 451 : t === l["k"] || n === l["j"] ? e = 450 : t === l["l"] && (e = 398), e
        }

        function U() {
            var e = [l["l"]],
                t = [l["h"]];
            return -1 !== e.indexOf(Object(l["E"])()) || -1 !== t.indexOf(Object(l["v"])())
        }

        function M() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.downAppUrl,
                n = e.downAppPos,
                r = e.downAppAndroidUrl,
                i = e.downAppIosUrl;
            if (t = t || (b["L"].android ? r : i), !t) {
                var a = Object(l["v"])(),
                    o = Object(l["E"])();
                t = "play_3rdparty_open" === n ? q(n) : a === l["h"] ? "//mbdapp.iqiyi.com/j/ap/iqiyi_617.apk" : a === l["i"] ? "//mbdapp.iqiyi.com/j/ap/iqiyi_10304.apk" : o === l["l"] ? "//mbdapp.iqiyi.com/j/ap/iqiyi_10238.apk" : n ? q(n) : b["L"].android ? "//mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk" : "//ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
            }
            return t
        }

        function D(e) {
            var t = e.schemaUrl,
                n = e.androidSchemaUrl,
                r = e.iosSchemaUrl;
            return t || (b["L"].android ? n : r)
        }

        function V() {
            var e = {};
            return b["p"].baidubox && (e = {
                package: "com.baidu.searchbox",
                deeplink: "baiduboxapp://donothing",
                time: c()()
            }), e
        }

        function $(e) {
            return Object(u["l"])(e)
        }
        var G = "h5-main-site";

        function z(e) {
            var t = {
                relatedId: Object(v["B"])(),
                fv: Object(l["A"])(),
                CoustomOptions: {
                    from: G
                }
            };
            return function (n) {
                return t.CoustomOptions.autoCall = n.autoCall, t.CoustomOptions.forceFrame = n.forceFrame, e(a()(T(n), t))
            }
        }

        function Y(e) {
            return {
                tvid: e.qipuId,
                album_id: e.albumId,
                content_type: e.contentType || "",
                channel_id: e.channelId || "",
                episode_type: e.isUGC ? "ugc" : "PPC",
                bizStatistics: {
                    from_type: e.from_type || 27,
                    from_subtype: e.from_subtype || 634
                },
                subtype: e.subtype,
                open_type: 1
            }
        }

        function F() {
            if (f["default"].store && f["default"].store.state && f["default"].store.state.play) {
                var e = O,
                    t = f["default"].store.state.play,
                    n = t.template,
                    r = t.subTemplate;
                if (n.bodan) return j["bodan"];
                for (var i in n)
                    if (n[i]) {
                        if (e = j[i], m()(e))
                            for (var a in r)
                                if (r[a]) {
                                    e = e[a] || O;
                                    break
                                }
                        break
                    }
                return e
            }
            return ""
        }

        function Q(e) {
            return {
                tvid: e.qipuId,
                album_id: e.albumId,
                collection_id: e.collectionId,
                bizStatistics: {
                    rpage: "jpv_h5",
                    block: "jpv_h5_b",
                    rseat: "jpv_h5_r",
                    from_type: "27",
                    from_subtype: "801"
                },
                subtype: "H5xsph_1321",
                open_type: 1,
                playType: "0",
                bizType: "100",
                jpType: "1"
            }
        }
        var K = z(u["b"]),
            J = function (e) {
                var t = "";
                return f["default"].store && f["default"].store.state && f["default"].store.state.play && (t = f["default"].store.state.play.channelId), a()(e, {
                    c1: t,
                    tmplt: F()
                }), z(u["i"])(e)
            },
            W = function (e) {
                return e = e.params || e.query || e, z(u["d"])(e)
            },
            X = (z(u["m"]), z(u["n"])),
            Z = z(u["e"]),
            ee = z(u["j"]),
            te = z(u["f"]),
            ne = z(u["k"]);

        function re(e) {
            return ie.apply(this, arguments)
        }

        function ie() {
            return ie = Object(r["a"])(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = t.isJiepai ? Q(t) : Y(t), f["default"].store && f["default"].store.state && f["default"].store.state.play && (n.c1 = f["default"].store.state.play.channelId, n.tmplt = F()), a()(t, n), e.abrupt("return", X(t));
                    case 4:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), ie.apply(this, arguments)
        }
    }, c0ba: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return s
        }), n.d(t, "b", function () {
            return l
        });
        n("57e7");
        var r = n("75fc"),
            i = (n("ac6a"), n("f3e2"), n("d225")),
            a = n("b0b4"),
            o = n("bd86"),
            c = n("4e77"),
            u = n("8296"),
            s = function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(i["a"])(this, e), Object(o["a"])(this, "num", 0), this.callback = t || function () {}, this.idKey = n.key || "_clickId", this.optionsKey = "".concat(this.idKey, "Options"), this.init()
                }
                return Object(a["a"])(e, [{
                    key: "init",
                    value: function () {
                        var e = this;
                        Object(c["a"])(function (t) {
                            var n = t.target;
                            if (!Object(u["F"])(n)) {
                                while (!n[e.idKey])
                                    if (n = n.parentNode, !n || Object(u["F"])(n)) return;
                                e.callback(n, n[e.optionsKey] || {}, t)
                            }
                        }, this.idKey)
                    }
                }, {
                    key: "observe",
                    value: function (e, t) {
                        e[this.idKey] = this.num = this.num + 1, e[this.optionsKey] = t
                    }
                }, {
                    key: "unobserve",
                    value: function (e) {
                        delete e[this.idKey], delete e[this.optionsKey]
                    }
                }]), e
            }(),
            l = function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.key,
                        a = n.multiple;
                    Object(i["a"])(this, e), Object(o["a"])(this, "num", 0), this.callback = t || function () {}, this.idKey = r || "_interId", this.optionsKey = "".concat(this.idKey, "Options"), this.showKey = "".concat(this.idKey, "Show"), this.multipleKey = "".concat(this.idKey, "Multi"), this.multiple = !!a, this.isObserver = "undefined" !== typeof IntersectionObserver, this.els = [], this.intersectionObserver = null, this.init()
                }
                return Object(a["a"])(e, [{
                    key: "init",
                    value: function () {
                        var e = this;
                        this.isObserver ? this.intersectionObserver = new IntersectionObserver(function (t) {
                            t.forEach(function (t) {
                                var n = t.target;
                                t.intersectionRatio <= 0 || e.onShow(n, n[e.multipleKey])
                            })
                        }) : (this._notify = function () {
                            var t = Object(r["a"])(e.els);
                            t.forEach(function (t) {
                                Object(u["W"])(t) && e.onShow(t, t[e.multipleKey])
                            })
                        }, Object(c["e"])(this._notify))
                    }
                }, {
                    key: "onShow",
                    value: function (e, t) {
                        t ? this.callback(e, e[this.optionsKey]) : e[this.showKey] || (e[this.showKey] = !0, this.callback(e, e[this.optionsKey]), this.unobserve(e))
                    }
                }, {
                    key: "observe",
                    value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = n.multiple,
                            i = void 0 !== r && r;
                        e[this.idKey] = this.num = this.num + 1, e[this.optionsKey] = t, e[this.showKey] = !1, e[this.multipleKey] = i || this.multiple, this.isObserver ? this.intersectionObserver.observe(e) : this.els.push(e)
                    }
                }, {
                    key: "unobserve",
                    value: function (e) {
                        delete e[this.idKey], delete e[this.optionsKey], delete e[this.showKey], delete e[this.multipleKey];
                        try {
                            if (this.isObserver) this.intersectionObserver.unobserve(e);
                            else {
                                var t = this.els.indexOf(e);
                                t > -1 && this.els.splice(t, 1)
                            }
                        } catch (n) {}
                    }
                }, {
                    key: "notify",
                    value: function () {
                        this._notify && this._notify()
                    }
                }]), e
            }()
    }, c415: function (e, t, n) {
        "use strict";
        t["a"] = {
            inject: {
                abtest: {
                    default: {
                        sample: "b"
                    }
                }
            },
            computed: {
                abSample: function () {
                    return this.abtest.sample
                }
            }
        }
    }, cecc: function (e, t, n) {
        "use strict";

        function r(e) {
            var t = 500;
            return e.length > t ? e.substring(0, t) : e
        }
        n.d(t, "a", function () {
            return r
        })
    }, dae0: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = {};
        n.r(r), n.d(r, "showSearch", function () {
            return _
        }), n.d(r, "hideSearch", function () {
            return x
        }), n.d(r, "getSuggest", function () {
            return N
        }), n.d(r, "getSearchHot", function () {
            return O
        }), n.d(r, "getSearchHistory", function () {
            return C
        }), n.d(r, "setSearchHistory", function () {
            return A
        }), n.d(r, "clearSearchHistory", function () {
            return S
        }), n.d(r, "getUserInfo", function () {
            return E
        }), n.d(r, "getUserVipInfo", function () {
            return H
        }), n.d(r, "getUserInfoByUid", function () {
            return L
        });
        var i = {};
        n.r(i), n.d(i, "toggleSearch", function () {
            return U
        }), n.d(i, "setSuggest", function () {
            return M
        }), n.d(i, "setSearchHot", function () {
            return D
        }), n.d(i, "setSearchHistory", function () {
            return V
        }), n.d(i, "setUserInfo", function () {
            return $
        }), n.d(i, "setUserVipInfo", function () {
            return G
        }), n.d(i, "setPageStyle", function () {
            return z
        }), n.d(i, "setChannelId", function () {
            return Y
        }), n.d(i, "setHeaderFix", function () {
            return F
        }), n.d(i, "setHeaderHeight", function () {
            return Q
        }), n.d(i, "setIsLogin", function () {
            return K
        }), n.d(i, "setHotQuery", function () {
            return J
        }), n.d(i, "setAbtest", function () {
            return W
        });
        n("7f7f");
        var a = n("2b0e"),
            o = n("cebc"),
            c = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("router-view", {
                    attrs: {
                        name: "header"
                    }
                }), n("router-view"), n("global-components")], 1)
            },
            u = [],
            s = n("2877"),
            l = {},
            d = Object(s["a"])(l, c, u, !1, null, null, null),
            p = d.exports,
            f = (n("54ba"), n("2f62"));

        function h() {
            return {
                pageStyle: {},
                searchShow: !1,
                searchPlaceholder: "",
                searchValue: "",
                suggestCache: {},
                suggests: [],
                searchHots: [],
                searchHistorys: [],
                userInfo: {
                    userinfo: {}
                },
                userVipInfo: {},
                channelId: "",
                headerFix: !0,
                baike: {},
                headerHeight: 0,
                isLogin: !1,
                hotIndex: -1,
                hotQuery: [],
                abtest: ""
            }
        }
        var m = n("a4bb"),
            v = n.n(m),
            b = (n("96cf"), n("57e7"), n("28a5"), n("3b8d")),
            g = n("8296"),
            y = n("936f"),
            w = n("b2e7"),
            k = n("b4d0");

        function _(e) {
            var t = e.commit,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t("toggleSearch", {
                show: !0,
                placeholder: n.placeholder,
                searchValue: n.searchValue
            })
        }

        function x(e) {
            var t = e.commit;
            t("toggleSearch", {
                show: !1
            })
        }

        function N(e, t) {
            return I.apply(this, arguments)
        }

        function I() {
            return I = Object(b["a"])(regeneratorRuntime.mark(function e(t, n) {
                var r, i, a, o, c;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (r = t.commit, i = t.state, a = i.suggestCache[n], a) {
                            e.next = 8;
                            break
                        }
                        return e.next = 5, y["a"].jsonp("//suggest.video.iqiyi.com/", {
                            params: {
                                key: n,
                                if : "mobile",
                                platform: 31,
                                ppuid: ""
                            }
                        });
                    case 5:
                        o = e.sent, c = o.data, a = "A00000" === c.code ? c.data : [];
                    case 8:
                        r("setSuggest", {
                            key: n,
                            suggests: a
                        });
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), I.apply(this, arguments)
        }

        function O(e) {
            return j.apply(this, arguments)
        }

        function j() {
            return j = Object(b["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = t.commit, e.next = 3, Object(k["J"])();
                    case 3:
                        r = e.sent, r && n("setSearchHot", r.data);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), j.apply(this, arguments)
        }

        function C(e) {
            var t = e.commit,
                n = g["J"].getItem("phone-search-history") || "";
            t("setSearchHistory", n)
        }

        function A(e, t) {
            var n = e.commit,
                r = g["J"].getItem("phone-search-history") || "",
                i = r.split("^"),
                a = i.indexOf(t);
            a > -1 && i.splice(a, 1), i.unshift(t), r = i.join("^"), n("setSearchHistory", r)
        }

        function S(e) {
            var t = e.commit;
            t("setSearchHistory", "")
        }

        function E(e) {
            return P.apply(this, arguments)
        }

        function P() {
            return P = Object(b["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o, c = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        if (n = t.commit, r = t.state, i = c.length > 1 && void 0 !== c[1] ? c[1] : {}, !i.refresh && v()(r.userInfo.userinfo).length) {
                            e.next = 7;
                            break
                        }
                        return i.authcookie = this.$cookies.get("P00001"), e.next = 6, w["E"](i);
                    case 6:
                        a = e.sent;
                    case 7:
                        o = a && "A00000" === a.code ? a.data : r.userInfo, o && n("setUserInfo", o);
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }, e, this)
            })), P.apply(this, arguments)
        }

        function H(e) {
            return T.apply(this, arguments)
        }

        function T() {
            return T = Object(b["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = t.commit, r = t.state, e.next = 3, w["I"]().catch(function () {});
                    case 3:
                        i = e.sent, a = i && "A00000" === i.code ? i.data : r.userVipInfo, a && n("setUserVipInfo", a);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), T.apply(this, arguments)
        }

        function L(e) {
            return q.apply(this, arguments)
        }

        function q() {
            return q = Object(b["a"])(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a, o, c = arguments;
                return regeneratorRuntime.wrap(function (e) {
                    while (1) switch (e.prev = e.next) {
                    case 0:
                        return n = t.commit, r = t.state, i = c.length > 1 && void 0 !== c[1] ? c[1] : {}, e.next = 4, w["F"](i);
                    case 4:
                        a = e.sent, o = a && "A00000" === a.code ? a.data : r.userInfo, o && n("setUserInfo", o);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }, e)
            })), q.apply(this, arguments)
        }
        var R = n("5176"),
            B = n.n(R);
        n("d25f");

        function U(e, t) {
            e.searchShow = t.show, e.searchPlaceholder = t.placeholder || e.searchPlaceholder, e.searchValue = t.searchValue
        }

        function M(e, t) {
            e.suggests = t.suggests, e.suggestCache[t.key] = t.suggests
        }

        function D(e, t) {
            e.searchHots = t
        }

        function V(e, t) {
            var n = t ? t.split("^") : [];
            e.searchHistorys = n.filter(function (e) {
                return !!e
            }), g["J"].setItem("phone-search-history", t)
        }

        function $(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e.userInfo = t
        }

        function G(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e.userVipInfo = t
        }

        function z(e, t) {
            e.pageStyle = B()({}, e.pageStyle, t)
        }

        function Y(e, t) {
            e.channelId = void 0 !== t ? String(t) : t
        }

        function F(e, t) {
            e.headerFix = t
        }

        function Q(e, t) {
            e.headerHeight = t
        }

        function K(e) {
            e.isLogin = Object(w["N"])({
                p00002: this.$cookies.get("P00002"),
                p00003: this.$cookies.get("P00003")
            })
        }

        function J(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; - 1 === e.hotIndex && (e.hotQuery = t, e.hotIndex = Math.floor(Math.random() * t.length))
        }

        function W(e, t) {
            e.abtest = t
        }
        var X = n("ab6e");

        function Z() {
            return new f["a"].Store({
                state: h,
                getters: X,
                actions: r,
                mutations: i
            })
        }
        a["default"].use(f["a"]);
        var ee = n("8c4f"),
            te = n("795b"),
            ne = n.n(te),
            re = n("65d4"),
            ie = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("keep-alive", [e.show ? n("HeaderSearch", {
                    on: {
                        search: e.search
                    }
                }) : e._e()], 1), n("HeaderPlayTop", e._b({}, "HeaderPlayTop", e.$attrs, !1))], 1)
            },
            ae = [],
            oe = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "m-navigation"
                }, [n("header", {
                    class: [{
                        "navigation-fixed": e.fixed && !e.isLandscape && e.headerFix
                    }, {
                        "m-navigation-vip": e.isPurchase()
                    }, "m-navigation-content"]
                }, [n("AuraLogoIqiyi", {
                    attrs: {
                        to: "/"
                    }
                }), n("div", {
                    staticClass: "m-user"
                }, [n("HeaderPlayNav"), n("div", {
                    staticClass: "header-search"
                }, [n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607061_search",
                        expression: "'607061_search'"
                    }],
                    staticClass: "c-glyphicon c-glyphicon-searchnavigation",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.showSearch
                    }
                })]), n("div", {
                    staticClass: "header-login"
                }, [n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607061_login",
                        expression: "'607061_login'"
                    }],
                    staticClass: "link-login",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function (t) {
                            return e.toHref("/u/")
                        }
                    }
                }, [e._v("\n          " + e._s(e.loginText) + "\n        ")])]), n("BoxShow", {
                    attrs: {
                        vfms: ["m_453_360o"]
                    }
                }, [n("HeaderTopButton", e._b({}, "HeaderTopButton", e.$attrs, !1))], 1)], 1)], 1)])
            },
            ce = [],
            ue = n("f4c6"),
            se = n("8300"),
            le = n("7f00"),
            de = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ModalEvent", {
                    on: {
                        "document:touchstart": function (t) {
                            e.navShow = !1
                        }
                    }
                }, [n("div", {
                    staticClass: "header-foldNav",
                    class: {
                        selected: e.navShow
                    },
                    on: {
                        click: function (t) {
                            e.navShow = !e.navShow
                        }
                    }
                }, [n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "1902281_contents",
                        expression: "'1902281_contents'"
                    }],
                    staticClass: "c-glyphicon c-glyphicon-menuList",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        touchstart: function (e) {
                            e.stopPropagation()
                        }
                    }
                }), n("div", {
                    staticClass: "m-navigation-unfold"
                }, [n("ul", {
                    staticClass: "nav-list"
                }, e._l(e.channels, function (t) {
                    return n("li", {
                        key: t.id,
                        class: {
                            selected: t.id == e.channelId
                        }
                    }, [n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.rseat,
                            expression: "channel.rseat"
                        }],
                        staticClass: "c-linkChannel",
                        attrs: {
                            href: t.url,
                            title: t.name
                        },
                        on: {
                            touchstart: function (e) {
                                e.stopPropagation()
                            }, click: function (n) {
                                return n.preventDefault(), e.to(t)
                            }
                        }
                    }, [e._v("\n            " + e._s(t.name) + "\n          ")])])
                }), 0)])])])
            },
            pe = [],
            fe = (n("55dd"), n("a481"), n("0cd8"), n("4f30")),
            he = n("5321"),
            me = n("3853"),
            ve = {
                name: "HeadPlayNav",
                components: {
                    ModalEvent: me["a"]
                },
                inheritAttrs: !1,
                data: function () {
                    return {
                        channels: [],
                        navShow: !1
                    }
                }, computed: Object(o["a"])({}, Object(f["e"])("play", ["channelId"])),
                watch: {
                    navShow: function () {
                        if (!g["L"].ios) {
                            var e = document.getElementById("video");
                            e && (e.style.display = this.navShow ? "none" : "block")
                        }
                    }
                },
                mounted: function () {
                    var e = Object(fe["getChannels"])(),
                        t = e.reduce(function (e, t) {
                            if (void 0 !== t.playOrder) {
                                var n = B()({}, t);
                                t.id === fe["CHANNEL_VIP"] && (n.name = "VIP"), n.rseat = n.rseat.replace(/\d+_nav/, "nav_"), e.push(n)
                            }
                            return e
                        }, []);
                    t.push({
                        name: "知识付费",
                        url: "//zhishi.m.iqiyi.com/",
                        rseat: "nav_zhishi",
                        playOrder: 27
                    }), t.sort(function (e, t) {
                        return e.playOrder < t.playOrder ? -1 : 1
                    }), this.channels = t
                }, methods: {
                    to: function (e) {
                        e.page === fe["PAGE_SINGLE"] ? this.$router.push({
                            path: e.url
                        }) : Object(he["B"])(e.url)
                    }
                }
            },
            be = ve,
            ge = Object(s["a"])(be, de, pe, !1, null, null, null),
            ye = ge.exports,
            we = n("4e77"),
            ke = {
                name: "HeaderTop",
                components: {
                    AuraLogoIqiyi: ue["a"],
                    BoxShow: se["a"],
                    HeaderPlayNav: ye,
                    HeaderTopButton: le["a"]
                },
                props: {
                    fixed: {
                        type: Boolean,
                        default: !1
                    },
                    isPurchase: {
                        type: Function,
                        default: function () {
                            return !1
                        }
                    },
                    to: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function () {
                    return {
                        isLandscape: !1
                    }
                }, computed: Object(o["a"])({}, Object(f["e"])(["headerFix"]), {
                    loginText: function () {
                        return this.$cookies.get("P00001") ? "我的" : "登录"
                    }
                }),
                mounted: function () {
                    var e = this;
                    this.isLandscape = 90 === window.orientation || -90 === window.orientation, Object(we["c"])(function (t) {
                        e.isLandscape = t.landscape
                    })
                }, methods: Object(o["a"])({}, Object(f["b"])(["showSearch"]), {
                    toHref: function (e) {
                        this.to ? this.$router.push({
                            path: e
                        }) : setTimeout(function () {
                            window.location.href = e
                        }, 200)
                    }
                })
            },
            _e = ke,
            xe = Object(s["a"])(_e, oe, ce, !1, null, null, null),
            Ne = xe.exports,
            Ie = n("6659"),
            Oe = n("b383"),
            je = n.n(Oe),
            Ce = {
                name: "Header",
                components: {
                    HeaderPlayTop: Ne,
                    HeaderSearch: Ie["a"]
                },
                inheritAttrs: !1,
                computed: Object(f["e"])({
                    show: "searchShow"
                }),
                methods: {
                    search: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (e.key) {
                            var t = {
                                source: e.source,
                                key: e.key,
                                pos: e.pos,
                                vfrm: e.vfrm
                            };
                            location.href = "/search.html?".concat(je.a.stringify(t))
                        }
                    }
                }
            },
            Ae = Ce,
            Se = Object(s["a"])(Ae, ie, ae, !1, null, null, null),
            Ee = Se.exports,
            Pe = n("ab22"),
            He = n("3e9e"),
            Te = function (e) {
                e.routes = e.routes.concat([{
                    path: "/(phone|pad)?/(ios|android|pad)?/:pre(v|w)_:id.html",
                    components: {
                        header: Ee,
                        default: function () {
                            return Promise.all([n.e("chunk-play"), n.e("chunk-common"), n.e("appP")]).then(n.bind(null, "23d5"))
                        }
                    },
                    meta: {
                        pingback: function () {
                            var e = He["a"].getCurVideo();
                            return !e || e.redirect
                        }, pingbackOptions: function () {
                            return new ne.a(function (e) {
                                if (a["default"].store && a["default"].store.state && a["default"].store.state.play) {
                                    var t = a["default"].store.state.play,
                                        n = t.verticalVideoInfo.jiepai;
                                    e({
                                        c1: t.channelId,
                                        tmplt: Object(Pe["p"])(t.template, t.subTemplate),
                                        sprov: n ? "pgc_jpai_iqiyi" : ""
                                    })
                                } else {
                                    var r = a["default"].store.watch(function (e) {
                                        if (!e.play) return null;
                                        var t = e.play.channelId,
                                            n = Object(Pe["p"])(e.play.template, e.play.subTemplate),
                                            r = e.play.verticalVideoInfo.jiepai;
                                        return t && n !== Pe["a"] ? {
                                            cid: t,
                                            tmplt: n,
                                            isJiepai: r
                                        } : null
                                    }, function (t, n) {
                                        t && (r && r(), r = null, e({
                                            c1: t.cid,
                                            tmplt: t.tmplt,
                                            sprov: t.isJiepai ? "pgc_jpai_iqiyi" : ""
                                        }))
                                    });
                                    setTimeout(function () {
                                        r && (r(), r = null, e({
                                            tmplt: Pe["a"]
                                        }))
                                    }, 3e3)
                                }
                            })
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            isPurchase: function () {
                                var e = a["default"].store && a["default"].store.state && a["default"].store.state.play;
                                return !!(e && e.template.movie && e.videoInfo.purchaseType) && 0 !== e.videoInfo.purchaseType
                            }, topButton: "playTopButton"
                        }
                    }
                }, {
                    path: "/s/:id.html",
                    redirect: "/v_:id.html"
                }, {
                    path: "/(phone|pad)?/(ios|android|pad)?/:channel(\\w+)?/:date(\\d+)/:random(\\w+).html",
                    beforeEnter: function (e, t, n) {
                        if ("undefined" === typeof window) return n("/404.html");
                        location.href = e.fullPath, n(!1)
                    }
                }, {
                    path: "/(phone|pad)?/(ios|android|pad)?/play.html",
                    beforeEnter: function (e, t, n) {
                        if ("undefined" === typeof window) return n("/404.html");
                        location.href = e.fullPath, n(!1)
                    }
                }, {
                    path: "/m/comment/release",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("appcr")]).then(n.bind(null, "363d"))
                    }
                }, {
                    path: "/m/comment/detail",
                    component: function () {
                        return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcd")]).then(n.bind(null, "91d5"))
                    }
                }, {
                    path: "/search.html",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("apps")]).then(n.bind(null, "7614"))
                    }, meta: {
                        pingback: "single"
                    }
                }, {
                    path: "/search/termQuery.html",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("appsq")]).then(n.bind(null, "34b0"))
                    }
                }, {
                    path: "/a_:id.html",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appa")]).then(n.bind(null, "4198"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0
                        }
                    }
                }, {
                    path: "/(phone|pad)?/(ios|android|pad)?/playlist:id.html",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-play"), n.e("chunk-common"), n.e("appplist")]).then(n.bind(null, "6a9a"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0
                        }
                    }
                }, {
                    path: "/m/iframe/index.html",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("apppi")]).then(n.bind(null, "a48c"))
                    }
                }, {
                    path: "/m/share/album/:id",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("appsa")]).then(n.bind(null, "6377"))
                    }
                }, {
                    path: "/m/share/albums/:id",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("appsal")]).then(n.bind(null, "021b"))
                    }
                }, {
                    path: "/m5/share/:source/timeline.html",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("apptl")]).then(n.bind(null, "31ca"))
                    }
                }, {
                    path: "/activity/callapp",
                    component: function () {
                        return n.e("appaca").then(n.bind(null, "7221"))
                    }
                }, {
                    path: "/m/smallvideo/share",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appsmv")]).then(n.bind(null, "ada5"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !0,
                            topButton: "smallTopButton"
                        }
                    }
                }, {
                    path: "/billboard.html",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("appb")]).then(n.bind(null, "3123"))
                    }, meta: {
                        pingback: "single"
                    }
                }, {
                    path: "/m/follow",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appf")]).then(n.bind(null, "4879"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/m/baike",
                    components: {
                        header: Ee,
                        default: function () {
                            return Promise.all([n.e("chunk-play"), n.e("chunk-video"), n.e("chunk-common"), n.e("appbk")]).then(n.bind(null, "736c"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0
                        }
                    }
                }, {
                    path: "*",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("app404")]).then(n.bind(null, "8689"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0
                        }
                    }
                }])
            },
            Le = function (e) {
                e.routes = e.routes.concat([{
                    path: "/u/",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appuh")]).then(n.bind(null, "47f0"))
                        }
                    },
                    props: {
                        header: {
                            channelId: "-"
                        }
                    }
                }, {
                    path: "/u/about",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appua")]).then(n.bind(null, "9f21"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/u/about/license",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appul")]).then(n.bind(null, "96f9"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/u/about/informant",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appui")]).then(n.bind(null, "e40c"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/u/record",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appur")]).then(n.bind(null, "9999"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !0
                        }
                    }
                }, {
                    path: "/u/fav",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appuf")]).then(n.bind(null, "0f4a"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !0
                        }
                    },
                    redirect: "/u/fav/video",
                    children: [{
                        path: "video",
                        component: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appufv")]).then(n.bind(null, "0e05"))
                        }
                    }, {
                        path: "literature",
                        component: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appufl")]).then(n.bind(null, "2c89"))
                        }
                    }]
                }, {
                    path: "/u/sub",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appus")]).then(n.bind(null, "b155"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !0
                        }
                    }
                }, {
                    path: "/u/like",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appul")]).then(n.bind(null, "856f"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !0
                        }
                    }
                }, {
                    path: "/u/feedback",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appufb")]).then(n.bind(null, "8f4e"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !0
                        }
                    }
                }, {
                    path: "/u/checkuser",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("appucu")]).then(n.bind(null, "7e7e"))
                    }
                }, {
                    path: "/u/private",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appup")]).then(n.bind(null, "d297"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/u/account",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appuac")]).then(n.bind(null, "757c"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/u/modifyName",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appuamn")]).then(n.bind(null, "c536"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/u/:uid/person",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appusp")]).then(n.bind(null, "3ee7"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/u/:uid/ic",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appusic")]).then(n.bind(null, "172e"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1
                        }
                    }
                }, {
                    path: "/u/copyright",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("appucr")]).then(n.bind(null, "c387"))
                    }
                }])
            },
            qe = function (e) {
                e.routes = e.routes.concat([{
                    path: "/m/security/home",
                    name: "securityHome",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appsech")]).then(n.bind(null, "d57d"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !1,
                            to: !0,
                            showNav: !1
                        }
                    }
                }, {
                    path: "/m/security/setPassword",
                    name: "setPassword",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common")]).then(n.bind(null, "8c4a"))
                    }
                }, {
                    path: "/m/security/changePassword",
                    name: "changePassword",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common")]).then(n.bind(null, "8c4a"))
                    }
                }, {
                    path: "/m/security/mailMode",
                    name: "mailMode",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecbm")]).then(n.bind(null, "ec3e"))
                    }
                }, {
                    path: "/m/security/bindMail",
                    name: "bindMail",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecbm")]).then(n.bind(null, "8c4a"))
                    }
                }, {
                    path: "/m/security/changeMail",
                    name: "changeMail",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common")]).then(n.bind(null, "8c4a"))
                    }
                }, {
                    path: "/m/security/activeMail",
                    name: "activeMail",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common")]).then(n.bind(null, "8c4a"))
                    }
                }, {
                    path: "/m/security/mailInput",
                    name: "mailInput",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appseccmi")]).then(n.bind(null, "bb75"))
                    }
                }, {
                    path: "/m/security/passwordInput",
                    name: "passwordInput",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appseccmi")]).then(n.bind(null, "b5cc"))
                    }
                }, {
                    path: "/m/security/phoneMode",
                    name: "phoneMode",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecbm")]).then(n.bind(null, "ec3e"))
                    }
                }, {
                    path: "/m/security/changePhone",
                    name: "changePhone",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecucp")]).then(n.bind(null, "198c"))
                    }
                }, {
                    path: "/m/security/changePhoneInput",
                    name: "changePhoneInput",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecucpi")]).then(n.bind(null, "3c02"))
                    }
                }, {
                    path: "/m/security/bindPhone",
                    name: "bindPhone",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecubp")]).then(n.bind(null, "4ff9"))
                    }
                }, {
                    path: "/m/security/phoneSms",
                    name: "phonesms",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecphonesms")]).then(n.bind(null, "c822"))
                    }
                }, {
                    path: "/m/security/mailSms",
                    name: "mailsms",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecmailsms")]).then(n.bind(null, "a268"))
                    }
                }, {
                    path: "/m/security/cancellation",
                    name: "cancellation",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appseccc")]).then(n.bind(null, "9186"))
                    }
                }, {
                    path: "/m/security/deleteAccount",
                    name: "deleteAccount",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecda")]).then(n.bind(null, "3fa7"))
                    }
                }, {
                    path: "/m/security/deleteAccountEntry",
                    name: "deleteAccountEntry",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecdae")]).then(n.bind(null, "7141"))
                    }
                }, {
                    path: "/m/security/deleteCheck",
                    name: "deleteCheck",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecdac")]).then(n.bind(null, "e754"))
                    }
                }, {
                    path: "/m/security/deletedSuccess",
                    name: "delSuc",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecdsuc")]).then(n.bind(null, "53ce"))
                    }
                }, {
                    path: "/m/security/queryAndCancel",
                    name: "queryAndCancel",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecqac")]).then(n.bind(null, "1dfc"))
                    }
                }, {
                    path: "/m/security/deleteProgress",
                    name: "deleteProgress",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecdelpro")]).then(n.bind(null, "03c3"))
                    }
                }, {
                    path: "/m/security/loginRecord",
                    name: "loginRecord",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appseclr")]).then(n.bind(null, "957d"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !1,
                            showNav: !1,
                            to: !1
                        }
                    }
                }, {
                    path: "/m/security/findPassword",
                    name: "findPassword",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecfp")]).then(n.bind(null, "1124"))
                    }
                }, {
                    path: "/m/security/findPassEntry",
                    name: "findPassEntry",
                    component: function () {
                        return Promise.all([n.e("chunk-security"), n.e("chunk-common"), n.e("appsecfpe")]).then(n.bind(null, "66385"))
                    }
                }])
            },
            Re = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("AbTest", {
                    attrs: {
                        "ab-config": "homeUIUpdate"
                    },
                    on: {
                        sample: function (t) {
                            return e.abtest.sample = t
                        }
                    },
                    scopedSlots: e._u([{
                        key: "a",
                        fn: function () {
                            return [n("HeaderChannel", e._b({}, "HeaderChannel", e.$attrs, !1))]
                        }, proxy: !0
                    }, {
                        key: "b",
                        fn: function () {
                            return [n("Header", e._b({}, "Header", e.$attrs, !1))]
                        }, proxy: !0
                    }])
                })
            },
            Be = [],
            Ue = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("keep-alive", [e.show ? n("HeaderSearch", {
                    on: {
                        search: e.search
                    }
                }) : e._e()], 1), n("section", {
                    staticClass: "mSiteHeader",
                    class: e.headerTop
                }, [n("div", {
                    staticClass: "mSiteHeader-wrap",
                    class: {
                        noFixed: !(e.fixed && !e.isLandscape)
                    }
                }, [n("HeaderChannelTop", e._b({}, "HeaderChannelTop", e.$attrs, !1)), e.showNav ? n("HeaderChannelNav", e._b({}, "HeaderChannelNav", e.$attrs, !1)) : e._e()], 1)])], 1)
            },
            Me = [],
            De = (n("ac6a"), n("f3e2"), function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "site_header"
                }, [n("AuraLogoIqiyi", {
                    attrs: {
                        to: "/"
                    }
                }), n("div", {
                    directives: [{
                        name: "show-pingback",
                        rawName: "v-show-pingback",
                        value: "190911_searchbar",
                        expression: "'190911_searchbar'"
                    }],
                    staticClass: "header_search"
                }, [n("div", {
                    staticClass: "search_box"
                }, [n("span", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "706061_home1",
                        expression: "'706061_home1'"
                    }],
                    staticClass: "search_input",
                    on: {
                        click: function (t) {
                            return e.showSearch({
                                searchValue: e.text
                            })
                        }
                    }
                }, [e._v("\n        " + e._s(e.text) + "\n      ")]), n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "706061_home1",
                        expression: "'706061_home1'"
                    }],
                    staticClass: "search_icon",
                    attrs: {
                        href: "/search.html?source=input&vfrm=2-3-0-1&key=" + e.text
                    }
                }, [n("i", {
                    staticClass: "c-channelAll c-channelAll-search"
                })])])]), n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607061_login",
                        expression: "'607061_login'"
                    }],
                    staticClass: "header_login",
                    attrs: {
                        href: "javascript:void(0);",
                        title: "我的"
                    },
                    on: {
                        click: function (t) {
                            return e.toHref("/u/")
                        }
                    }
                }, [n("i", {
                    staticClass: "c-channelAll c-channelAll-headerLogin"
                })]), n("BoxShow", {
                    attrs: {
                        vfms: ["m_453_360o"]
                    }
                }, [n("HeaderTopButton", e._b({
                    attrs: {
                        src: e.headerCallAppBtn,
                        "head-class": "header_app"
                    }
                }, "HeaderTopButton", e.$attrs, !1))], 1)], 1)
            }),
            Ve = [],
            $e = n("c415"),
            Ge = {
                name: "HeaderChannelTop",
                components: {
                    AuraLogoIqiyi: ue["a"],
                    BoxShow: se["a"],
                    HeaderTopButton: le["a"]
                },
                mixins: [$e["a"]],
                props: {
                    to: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function () {
                    return {
                        newHeaderCallAppBtn: "http://www.iqiyipic.com/common/fix/h5-aura/header-rightBtn.png"
                    }
                }, computed: Object(o["a"])({}, Object(f["e"])({
                    headerTop: function (e) {
                        return e.pageStyle.headerTop
                    }, headerCallAppBtn: function (e) {
                        return e.pageStyle.headerCallAppBtn || this.newHeaderCallAppBtn
                    }, text: function (e) {
                        var t = e.hotQuery,
                            n = e.hotIndex;
                        return t && n > -1 && t[n] || ""
                    }
                })),
                methods: Object(o["a"])({}, Object(f["b"])(["showSearch"]), {
                    toHref: function (e) {
                        this.to ? this.$router.push({
                            path: e
                        }) : setTimeout(function () {
                            window.location.href = e
                        }, 200)
                    }
                })
            },
            ze = Ge,
            Ye = Object(s["a"])(ze, De, Ve, !1, null, null, null),
            Fe = Ye.exports,
            Qe = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("AuraHeadChannelLabels", e._b({}, "AuraHeadChannelLabels", e.$attrs, !1), [e._l(e.channels, function (t) {
                    return n("li", {
                        key: t.id,
                        attrs: {
                            selected: e.selected(t.id)
                        }
                    }, [n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.rseat,
                            expression: "channel.rseat"
                        }],
                        staticClass: "c-linkChannel",
                        class: {
                            selected: e.selected(t.id)
                        },
                        attrs: {
                            href: t.url
                        },
                        on: {
                            click: function (n) {
                                return n.preventDefault(), e.to(t)
                            }
                        }
                    }, [e._v("\n      " + e._s(t.name) + "\n    ")])])
                }), n("a", {
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607051_channellist",
                        expression: "'607051_channellist'"
                    }],
                    staticClass: "nav_linkmore",
                    attrs: {
                        slot: "extra",
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: e.toChannelList
                    },
                    slot: "extra"
                }, [n("i", {
                    staticClass: "c-channelAll c-channelAll-menuMore"
                })])], 2)
            },
            Ke = [],
            Je = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "site_nav"
                }, [n("div", {
                    ref: "wrapper",
                    staticClass: "nav_list"
                }, [n("ul", {
                    staticClass: "m-nav-head-list"
                }, [e._t("default")], 2)]), e._t("extra")], 2)
            },
            We = [],
            Xe = (n("7514"), n("1fba")),
            Ze = {
                name: "AuraHeadChannelLabels",
                mounted: function () {
                    this.$nextTick(function () {
                        this.scroll = new Xe["a"](this.$refs.wrapper, B()({
                            scrollX: !0,
                            eventPassthrough: !1,
                            preventDefault: !0,
                            click: !0,
                            HWCompositing: !1,
                            useTransition: !1
                        })), this.scrollToElement()
                    })
                }, updated: function () {
                    this.scrollToElement()
                }, destroyed: function () {
                    this.scroll && this.scroll.destroy()
                }, methods: {
                    scrollToElement: function () {
                        var e = this.getElement();
                        if (e) {
                            var t = this.$el.clientWidth / 2;
                            this.scroll && this.scroll.scrollToElement(e, 0, -t + e.offsetWidth / 2)
                        }
                    }, getElement: function () {
                        var e = null;
                        return this.$scopedSlots.default().find(function (t, n) {
                            var r = t.componentInstance || {},
                                i = t.data.attrs || {},
                                a = r.selected || i.selected;
                            a && (e = r.$el || t.elm)
                        }), e
                    }
                }
            },
            et = Ze,
            tt = Object(s["a"])(et, Je, We, !1, null, null, null),
            nt = tt.exports,
            rt = {
                name: "HeaderChannelNav",
                components: {
                    AuraHeadChannelLabels: nt
                },
                inheritAttrs: !1,
                props: {
                    channelId: {
                        type: String,
                        default: ""
                    }
                },
                data: function () {
                    return {
                        channels: Object(fe["getChannels"])()
                    }
                }, computed: Object(o["a"])({}, Object(f["e"])({
                    defaultChannelId: "channelId",
                    headerNav: function (e) {
                        return e.pageStyle.headerNav
                    }
                })),
                methods: {
                    selected: function (e) {
                        return this.channelId ? this.channelId === e : this.defaultChannelId === e
                    }, to: function (e) {
                        e.page === fe["PAGE_SINGLE"] ? this.$router.push({
                            path: e.url
                        }) : Object(he["B"])(e.url)
                    }, toChannelList: function () {
                        this.$router.push({
                            path: "/channel_list.html"
                        })
                    }
                }
            },
            it = rt,
            at = Object(s["a"])(it, Qe, Ke, !1, null, null, null),
            ot = at.exports,
            ct = n("2c06"),
            ut = {
                name: "HeaderChannel",
                components: {
                    HeaderChannelTop: Fe,
                    HeaderChannelNav: ot,
                    HeaderSearch: Ie["a"]
                },
                inheritAttrs: !1,
                props: {
                    fixed: {
                        type: Boolean,
                        default: !1
                    },
                    showNav: {
                        type: Boolean,
                        default: !0
                    },
                    pageStyle: {
                        type: Object,
                        default: null
                    }
                },
                data: function () {
                    return {
                        isLandscape: !1
                    }
                }, computed: Object(f["e"])(Object(o["a"])({
                    show: "searchShow"
                }, Object(f["e"])({
                    headerTop: function (e) {
                        return e.pageStyle.headerTop
                    }
                }))),
                serverPrefetch: function () {
                    this.setPageStyle()
                }, beforeRouteEnter: function (e, t, n) {
                    n(function (e) {
                        e.setPageStyle()
                    })
                }, beforeUpdate: function () {
                    this.setPageStyle()
                }, mounted: function () {
                    this.setHeaderHeight(this.$el.offsetHeight), this.bindOrientation()
                }, methods: Object(o["a"])({}, Object(f["d"])(["setHeaderHeight"]), {
                    setPageStyle: function () {
                        var e, t = this;
                        e = this.$cookies.get(ct["f"]) === ct["r"] || this.$route.query.vfm === ct["r"] ? {
                            headerTop: "header-army",
                            headerNav: "nav-head-army",
                            searchBtn: "search-army",
                            headerCallAppBtn: null
                        } : {
                            headerTop: "m-header-customized",
                            headerNav: "m-header-customized",
                            searchBtn: "m-header-customized",
                            headerCallAppBtn: null
                        }, this.pageStyle && v()(e).forEach(function (n) {
                            t.pageStyle && t.pageStyle[n] && (e[n] += " " + t.pageStyle[n])
                        }), this.$store.commit("setPageStyle", e)
                    }, search: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (e.key) {
                            var t = {
                                source: e.source,
                                key: e.key,
                                pos: e.pos,
                                vfrm: e.vfrm
                            };
                            location.href = "/search.html?".concat(je.a.stringify(t))
                        }
                    }, bindOrientation: function () {
                        var e = this;
                        this.isLandscape = 90 === window.orientation || -90 === window.orientation, Object(we["c"])(function (t) {
                            e.isLandscape = t.landscape
                        })
                    }
                })
            },
            st = ut,
            lt = Object(s["a"])(st, Ue, Me, !1, null, null, null),
            dt = lt.exports,
            pt = {
                name: "HeaderAB",
                components: {
                    Header: re["a"],
                    HeaderChannel: dt
                },
                inheritAttrs: !1,
                provide: function () {
                    return {
                        abtest: this.abtest
                    }
                }, data: function () {
                    return {
                        abtest: {
                            sample: "b"
                        }
                    }
                }
            },
            ft = pt,
            ht = Object(s["a"])(ft, Re, Be, !1, null, null, null),
            mt = ht.exports,
            vt = function (e) {
                e.routes = e.routes.concat([{
                    path: "/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appch")]).then(n.bind(null, "db32"))
                        }
                    },
                    props: {
                        header: {
                            channelId: fe["CHANNEL_HOME"],
                            fixed: !0,
                            isHideSearch: !0,
                            pageStyle: {
                                headerTop: "m-header-channelHome",
                                headerNav: "m-header-channelHome",
                                searchBtn: "m-header-channelHome"
                            }
                        }
                    }
                }, {
                    path: "/feed/",
                    alias: "/feeds/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-play"), n.e("chunk-video"), n.e("chunk-common"), n.e("appchot")]).then(n.bind(null, "8a08"))
                        }
                    },
                    props: {
                        header: {
                            channelId: fe["CHANNEL_HOT"],
                            fixed: !0
                        }
                    }
                }, {
                    path: "/aipindao/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-play"), n.e("chunk-video"), n.e("chunk-common"), n.e("appcapd")]).then(n.bind(null, "b305"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_AIPINDAO"]
                        }
                    }
                }, {
                    path: "/yingxun/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-play"), n.e("chunk-video"), n.e("chunk-common"), n.e("appcapd")]).then(n.bind(null, "5dff"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_YINGXUN"]
                        }
                    }
                }, {
                    path: "/zongyi/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appczy")]).then(n.bind(null, "9cad"))
                        }
                    },
                    props: {
                        header: {
                            channelId: fe["CHANNEL_ZONGYI"],
                            fixed: !0
                        }
                    }
                }, {
                    path: "/show/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcs")]).then(n.bind(null, "7e86"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_SHOW"]
                        }
                    }
                }, {
                    path: "/mil/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appmil")]).then(n.bind(null, "1506"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_JUNSHI"]
                        }
                    }
                }, {
                    path: "/dianshiju/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcds")]).then(n.bind(null, "54dc"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_DIANSHIJU"]
                        }
                    }
                }, {
                    path: "/zixun/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appczx")]).then(n.bind(null, "968e"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_ZIXUN"]
                        }
                    }
                }, {
                    path: "/fun/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcf")]).then(n.bind(null, "97f9"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_FUN"]
                        }
                    }
                }, {
                    path: "/gongyi/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcg")]).then(n.bind(null, "6bcd"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_GONGYI"]
                        }
                    }
                }, {
                    path: "/yuanchuang/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcyc")]).then(n.bind(null, "30cd"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_YUANCHUANG"]
                        }
                    }
                }, {
                    path: "/life/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcsh")]).then(n.bind(null, "923e"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_SHENGHUO"]
                        }
                    }
                }, {
                    path: "/tuokouxiu/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appctkx")]).then(n.bind(null, "3fb6"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_TUOKOUXIU"]
                        }
                    }
                }, {
                    path: "/lvyou/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcly")]).then(n.bind(null, "cd0c"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_LVYOU"]
                        }
                    }
                }, {
                    path: "/edu/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcedu")]).then(n.bind(null, "aa40"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_JIAOYU"]
                        }
                    }
                }, {
                    path: "/qiche/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcqc")]).then(n.bind(null, "9a06"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_QICHE"]
                        }
                    }
                }, {
                    path: "/keji/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appckj")]).then(n.bind(null, "767c"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_KEJI"]
                        }
                    }
                }, {
                    path: "/dongman/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcd")]).then(n.bind(null, "f4c2"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_DONGMAN"]
                        }
                    }
                }, {
                    path: "/yule/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcyl")]).then(n.bind(null, "b701"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_YULE"]
                        }
                    }
                }, {
                    path: "/channel_list.html",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appcl")]).then(n.bind(null, "632b"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !0
                        }
                    }
                }, {
                    path: "/jiankang/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcjk")]).then(n.bind(null, "b146"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_JIANKANG"]
                        }
                    }
                }, {
                    path: "/ad/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcad")]).then(n.bind(null, "9672"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_GUANGGAO"]
                        }
                    }
                }, {
                    path: "/jilupian/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcjlp")]).then(n.bind(null, "2531"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_JILUPIAN"]
                        }
                    }
                }, {
                    path: "/yinyue/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcyy")]).then(n.bind(null, "8cd4"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_YINYUE"]
                        }
                    }
                }, {
                    path: "/youxi/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcyx")]).then(n.bind(null, "0327"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_GAME"]
                        }
                    }
                }, {
                    path: "/caijing/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appccj")]).then(n.bind(null, "3f4c"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_CAIJING"]
                        }
                    }
                }, {
                    path: "/shishang/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcss")]).then(n.bind(null, "110d"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_SHISHANG"]
                        }
                    }
                }, {
                    path: "/pianhua/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcph")]).then(n.bind(null, "ecc7"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_PIANHUA"]
                        }
                    }
                }, {
                    path: "/muying/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcmy")]).then(n.bind(null, "22f3"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_MUYING"]
                        }
                    }
                }, {
                    path: "/qiyichupin/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcqycp")]).then(n.bind(null, "cddb"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_QIYICHUPIN"]
                        }
                    }
                }, {
                    path: "/weidianying/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appcwdy")]).then(n.bind(null, "42d2"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_WEIDIANYING"]
                        }
                    }
                }, {
                    path: "/sports/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appty")]).then(n.bind(null, "6442"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_TIYU"]
                        }
                    }
                }, {
                    path: "/live/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("applv")]).then(n.bind(null, "16f3"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_LIVE"]
                        }
                    }
                }, {
                    path: "/shaoer/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appae")]).then(n.bind(null, "6084"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_SHAOER"]
                        }
                    }
                }, {
                    path: "/vip/i_topic_:id.html",
                    name: "vipTopic",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appvt")]).then(n.bind(null, "3c95"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !0,
                            fixed: !0
                        }
                    }
                }, {
                    path: "/vip/:id?",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("appvip")]).then(n.bind(null, "595f"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_VIP"],
                            navClass: "m-vip-nav-head"
                        }
                    }
                }, {
                    path: "/dianying/",
                    components: {
                        header: mt,
                        default: function () {
                            return Promise.all([n.e("chunk-channel"), n.e("chunk-common"), n.e("app")]).then(n.bind(null, "449c"))
                        }
                    },
                    props: {
                        header: {
                            fixed: !0,
                            channelId: fe["CHANNEL_DIANYING"]
                        }
                    }
                }, {
                    path: "/m5/movie/tagWall.html",
                    name: "tagWall",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("apptw")]).then(n.bind(null, "ca53"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !1
                        }
                    }
                }, {
                    path: "/m5/youxi/:id.html",
                    name: "youxiList",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appyl")]).then(n.bind(null, "6ceb"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !1
                        }
                    }
                }, {
                    path: "/m5/yingxun/wantSee.html",
                    name: "wantSee",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appyl")]).then(n.bind(null, "2cab"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !0
                        }
                    }
                }, {
                    path: "/m/(vip|dianying)/cube",
                    name: "vipCube",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appvcu")]).then(n.bind(null, "ff5d"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !1
                        }
                    }
                }, {
                    path: "/m/vip/celebrity",
                    name: "vipCelebrity",
                    components: {
                        header: re["a"],
                        default: function () {
                            return Promise.all([n.e("chunk-common"), n.e("appvce")]).then(n.bind(null, "5aac"))
                        }
                    },
                    props: {
                        header: {
                            showNav: !1,
                            fixed: !1
                        }
                    }
                }])
            },
            bt = function (e) {
                e.routes = e.routes.concat([{
                    path: "/shareplay.html",
                    component: function () {
                        return Promise.all([n.e("chunk-video"), n.e("chunk-common"), n.e("appps")]).then(n.bind(null, "b671"))
                    }
                }, {
                    path: "/openplay.html",
                    component: function () {
                        return Promise.all([n.e("chunk-video"), n.e("chunk-common"), n.e("appps")]).then(n.bind(null, "b671"))
                    }
                }])
            },
            gt = function (e) {
                e.routes = e.routes.concat([{
                    path: "/m/appeal/oldaccount",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d21392b")]).then(n.bind(null, "acf9"))
                    }, meta: {
                        requiresAuth: !0
                    }
                }, {
                    path: "/m/appeal/ways",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d0b6ebd")]).then(n.bind(null, "1ee8"))
                    }
                }, {
                    path: "/m/appeal/factors",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d23066a")]).then(n.bind(null, "ebb9"))
                    }
                }, {
                    path: "/m/appeal/factors/uploadPic",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d21f0fb")]).then(n.bind(null, "d7e7"))
                    }
                }, {
                    path: "/m/appeal/authways",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d2244f4")]).then(n.bind(null, "e01d"))
                    }
                }, {
                    path: "/m/appeal/newphone",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d21e566")]).then(n.bind(null, "d4aa"))
                    }
                }, {
                    path: "/m/appeal/process",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d0c192a")]).then(n.bind(null, "472c"))
                    }
                }, {
                    path: "/m/appeal/cancel/request",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d237b11")]).then(n.bind(null, "fbcb"))
                    }
                }, {
                    path: "/m/appeal/cancel/result",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d0e1764")]).then(n.bind(null, "7b14"))
                    }
                }])
            },
            yt = function (e) {
                e.routes = e.routes.concat([{
                    path: "/m/exception",
                    component: function () {
                        return Promise.all([n.e("chunk-common"), n.e("chunk-2d0a38f9")]).then(n.bind(null, "0366"))
                    }
                }])
            };

        function wt() {
            var e = {
                mode: "history",
                scrollBehavior: function (e, t, n) {
                    return n || {
                        x: 0,
                        y: 0
                    }
                }, routes: []
            };
            return Te(e), vt(e), Le(e), qe(e), bt(e), gt(e), yt(e), new ee["a"](e)
        }
        a["default"].use(ee["a"]);
        var kt, _t, xt, Nt, It, Ot, jt, Ct, At = n("31bd"),
            St = n("85f2"),
            Et = n.n(St),
            Pt = n("8958"),
            Ht = n.n(Pt),
            Tt = n("a78e"),
            Lt = n.n(Tt),
            qt = function (e) {
                return Ht.a.parse(e || "")
            },
            Rt = function (e, t) {
                var n = e.req,
                    r = !1,
                    i = new a["default"]({
                        data: function () {
                            var e = r ? n.headers.cookie : document.cookie;
                            return e = e || "", {
                                cookies: qt(e),
                                cookie: e
                            }
                        }, methods: {
                            get: function (e) {
                                return r ? this.cookies[e] : Lt.a.get(e)
                            }, set: function () {
                                Lt.a.set.apply(Lt.a, arguments), this.cookies = qt(document.cookie || ""), this.cookie = document.cookie
                            }, remove: function () {
                                Lt.a.remove.apply(Lt.a, arguments), this.cookies = qt(document.cookie || ""), this.cookie = document.cookie
                            }
                        }
                    });
                t("cookies", i)
            },
            Bt = function (e, t) {
                var n = e.req,
                    r = !1,
                    i = new a["default"]({
                        data: function () {
                            return {
                                userAgent: r ? n.get("User-Agent") : window.navigator.userAgent
                            }
                        }
                    });
                t("userAgent", i)
            },
            Ut = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("MainLink", e._b({
                    directives: [{
                        name: "video-href",
                        rawName: "v-video-href",
                        value: e.video,
                        expression: "video"
                    }],
                    attrs: {
                        tag: e.tag,
                        href: e.$attrs.href || "javascript:void(0);",
                        title: e.video.mainTitle || e.video.title || e.video.subTitle || ""
                    }
                }, "MainLink", e.$attrs, !1), [n("div", {
                    staticClass: "c-rt"
                }, [e._t("rt", [e.video.upperRightCorner || e.video.payMarkUrl ? n("AuraVideoPicicon", {
                    attrs: {
                        text: e.video.upperRightCorner,
                        "pay-mark-url": e.video.payMarkUrl
                    }
                }) : e._e()])], 2), n("div", {
                    staticClass: "c-lb"
                }, [e._t("lb", [e.cornerStatus.lb && e.video.lowerLeftCorner ? n("span", {
                    class: e.cornerStatus.lb.class || "c-date"
                }, [e._v(e._s(e.video.lowerLeftCorner))]) : e._e()], {
                    video: e.video
                })], 2), n("div", {
                    staticClass: "c-rb"
                }, [e._t("rb", [!1 !== e.cornerStatus.rb && e.video.lowerRightCorner && e.video.lowerRightCorner.includes(".") && !isNaN(+e.video.lowerRightCorner) ? n("span", {
                    key: "score",
                    staticClass: "c-date c-date-score"
                }, [n("i", {
                    staticClass: "score-item"
                }, [e._v(e._s(e.video.lowerRightCorner))])]) : !1 !== e.cornerStatus.rb && e.video.lowerRightCorner ? n("span", {
                    key: "text",
                    staticClass: "c-date"
                }, [2 === e.video.type && e.video.playCount ? n("i", {
                    staticClass: "c-icon-total"
                }) : e._e(), e._v("\n        " + e._s(e.video.lowerRightCorner) + "\n      ")]) : e._e()])], 2), n("div", {
                    staticClass: "c-lt"
                }, [e._t("lt")], 2), n("div", {
                    staticClass: "c-lrb"
                }, [e._t("lrb", [e.video.lowerMiddleCorner ? n("span", {
                    staticClass: "c-date"
                }, [e._v("\n        " + e._s(e.video.lowerMiddleCorner) + "\n      ")]) : e._e()])], 2), e._t("extra")], 2)
            },
            Mt = [],
            Dt = {
                name: "AuraVideo",
                props: {
                    video: {
                        type: Object,
                        default: function () {
                            return {}
                        }
                    },
                    cornerStatus: {
                        type: Object,
                        default: function () {
                            return {}
                        }
                    },
                    tag: {
                        type: String,
                        default: "a"
                    }
                }
            },
            Vt = Dt,
            $t = Object(s["a"])(Vt, Ut, Mt, !1, null, null, null),
            Gt = $t.exports,
            zt = n("ff9b"),
            Yt = (n("6b54"), n("87b3"), {
                APP: {
                    className: "c-picicon-laqi"
                },
                "自制": {
                    className: {
                        a: "c-superscript c-superscript-self",
                        b: "c-picicon-self"
                    }
                },
                "独播": {
                    className: {
                        a: "c-superscript c-superscript-onlyPlay",
                        b: "c-picicon-onlyPlay"
                    }
                },
                "付费": {
                    className: {
                        a: "c-superscript c-superscript-pay",
                        b: "c-picicon-pay"
                    }
                },
                "用券": {
                    className: "c-picicon-coupons"
                },
                VIP: {
                    className: {
                        a: "c-superscript c-superscript-vip",
                        b: "c-picicon-vip"
                    }
                },
                "1080P": {
                    className: "c-picicon-1080P"
                },
                "拍客": {
                    className: "c-picicon-paike"
                },
                "专题": {
                    className: {
                        a: "c-superscript c-superscript-zt",
                        b: "c-picicon-zt"
                    }
                },
                NEW: {
                    className: "c-picicon-new"
                },
                "预告": {
                    className: "c-picicon-prevue"
                },
                "合集": {
                    className: "c-picicon-heji"
                },
                "片段": {
                    className: "c-picicon-pianduan"
                },
                "试看": {
                    className: "c-picicon-trysee"
                },
                cqdb: {
                    className: "c-picicon-cqdb"
                }
            }),
            Ft = {
                name: "AuraVideoPicicon",
                mixins: [$e["a"]],
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    payMarkUrl: {
                        type: String,
                        default: ""
                    },
                    picicon: {
                        type: String,
                        default: "c-picicon"
                    }
                },
                render: function (e) {
                    if (this.text) {
                        var t = Yt[this.text];
                        return t ? e("i", {
                            class: [this.picicon, "[object Object]" === Object.prototype.toString.call(t.className) ? t.className[this.abSample] : t.className]
                        }) : e()
                    }
                    if (this.payMarkUrl) return e("i", {
                        class: [this.picicon, "c-picicon-vipType"],
                        style: {
                            "background-image": "url(".concat(this.payMarkUrl, ")")
                        }
                    })
                }
            },
            Qt = Ft,
            Kt = Object(s["a"])(Qt, kt, _t, !1, null, null, null),
            Jt = Kt.exports,
            Wt = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", {
                    class: [e.customerClass, e.boxMargin]
                }, [n("ul", {
                    class: e.customerUlClass
                }, e._l(e.videos, function (t, r) {
                    return n("li", {
                        directives: [{
                            name: "copy-callapp",
                            rawName: "v-copy-callapp",
                            value: {
                                video: t,
                                subtype: e.subtype
                            },
                            expression: "{video, subtype}"
                        }, {
                            name: "play",
                            rawName: "v-play",
                            value: t.play,
                            expression: "video.play"
                        }],
                        key: r,
                        class: {
                            selected: e.curQipuId === t.qipuId
                        },
                        on: {
                            click: function (n) {
                                return e.$emit("click", t, r, n)
                            }
                        }
                    }, [n("a", {
                        staticClass: "rank-link",
                        attrs: {
                            href: t.play ? "javascript:void(0)" : t.pageUrl || "javascript:void(0);"
                        }
                    }, [n("AuraVideo", {
                        staticClass: "img",
                        style: {
                            "background-image": "url(" + (t.imageUrl || "//www.iqiyipic.com/common/fix/h5-aura-img/imgLogo-default.png") + ")"
                        },
                        attrs: {
                            video: t,
                            tag: "div"
                        }
                    }), n("div", {
                        staticClass: "info"
                    }, [n("span", {
                        class: ["c-title", {
                            "c-row-title": e.showRowTitle
                        }]
                    }, [e._v(e._s(t.mainTitle))]), e.showDesc && t.desc ? n("span", {
                        staticClass: "c-des"
                    }, [e._v(e._s(t.desc))]) : e._e(), e.showSubTitle && t.subTitle ? n("span", {
                        staticClass: "c-type"
                    }, [e._v("\n            " + e._s(t.subTitle) + "\n          ")]) : e._e(), e._t("extra", null, {
                        video: t
                    })], 2)], 1)])
                }), 0), e._t("bottom")], 2)
            },
            Xt = [],
            Zt = (n("c5f6"), {
                name: "AuraVideoRowList",
                props: {
                    subtype: {
                        type: [String, Number],
                        default: ""
                    },
                    videos: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    showSubTitle: {
                        type: Boolean,
                        default: !0
                    },
                    showRowTitle: {
                        type: Boolean,
                        default: !0
                    },
                    showDesc: {
                        type: Boolean,
                        default: !0
                    },
                    customerClass: {
                        type: String,
                        default: "m-imgTextList"
                    },
                    customerUlClass: {
                        type: String,
                        default: "imgTextList-item"
                    },
                    noboxMargin: {
                        type: Boolean,
                        default: !1
                    },
                    curQipuId: {
                        type: Number,
                        default: 0
                    }
                },
                computed: {
                    boxMargin: function () {
                        return this.noboxMargin ? "" : this.videos.length <= 10 ? "mtb10" : "mt10"
                    }
                }
            }),
            en = Zt,
            tn = Object(s["a"])(en, Wt, Xt, !1, null, null, null),
            nn = tn.exports,
            rn = n("88a6"),
            an = n("3bfe"),
            on = n("302b"),
            cn = n("6bb4"),
            un = n("3b2f"),
            sn = (n("6d67"), {
                homeUIUpdate: {
                    localSample: ["[012389ab]", "[4567cdef]"],
                    abtestList: {
                        testA: "a",
                        testB: "b"
                    },
                    showDefault: "a",
                    byAnonymousUid: !1
                },
                PlayLongAroundVideo: {
                    experimentID: "PlayLongAroundVideo",
                    abtestParams: ["zhoubian"],
                    abtestList: {
                        testA: "zhoubianA",
                        testB: "zhoubianB"
                    }
                },
                VideoRecommend: {
                    experimentID: "VideoRecommend",
                    abtestParams: ["VideoRecommend"],
                    abtestList: {
                        testA: "VideoRecommendA",
                        testB: "VideoRecommendB"
                    },
                    localSample: [/[8,9,a,b,c,d,e,f]/, /[0,1,2,3,4,5,6,7]/],
                    byAnonymousUid: !0
                },
                HomeHeaderTop: {
                    experimentID: "HomeHeaderTop",
                    abtestParams: ["HeaderTop"],
                    abtestList: {
                        testA: "HeaderTopA",
                        testB: "HeaderTopB"
                    }
                },
                HomeDaoliu: {
                    experimentID: "HomeHeaderTop",
                    abtestParams: ["HomeDaoliu"],
                    abtestList: {
                        testA: "HomeDaoliuA",
                        testB: "HomeDaoliuB",
                        testC: "HomeDaoliuC"
                    }
                },
                CopyCode: {
                    experimentID: "CopyCode",
                    abtestParams: ["CopyCode"],
                    default: "CopyCodeUse",
                    abtestList: {
                        testA: "CopyCodeUse",
                        testB: "CopyCodeNotUse"
                    }
                },
                MoreTest: [{
                    name: "testname",
                    experimentID: "testid",
                    abtestList: ["h5home_app_testA", "h5home_app_testB"],
                    variants: [{
                        weight: 0
                    }, {
                        weight: 1
                    }, {
                        weight: 1
                    }]
                }]
            }),
            ln = n("e272"),
            dn = "//pub.m.iqiyi.com/h5/abtest/getByParams/",
            pn = {
                inheritAttrs: !1,
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    abConfig: {
                        type: [String, Object],
                        required: !0
                    }
                },
                data: function () {
                    return {
                        anonymousUid: ""
                    }
                }, computed: Object(o["a"])({}, Object(f["e"])({
                    abId: "abtest"
                }), {
                    candidate: function () {
                        return this.refresh(this.anonymousUid || this.abId)
                    }, config: function () {
                        return ("[object String]" === Object.prototype.toString.call(this.abConfig) ? sn[this.abConfig] : this.abConfig) || {}
                    }
                }),
                serverPrefetch: function () {
                    this.setAbtest()
                }, beforeRouteUpdate: function () {
                    this.setAbtest()
                }, beforeMount: function () {
                    if (this.setAbtest(), this.config.byAnonymousUid) {
                        var e = Object(w["w"])();
                        this.anonymousUid = e[e.length - 1]
                    }
                }, render: function (e) {
                    if (this.candidate) {
                        var t = this.$scopedSlots[this.candidate];
                        return t && 1 === t.length && t[0].tag ? t[0] : e(this.tag, {
                            attrs: {
                                "data-abtest": !0,
                                "data-candidate": this.candidate
                            }
                        }, t({
                            candidate: this.candidate
                        }))
                    }
                }, methods: {
                    refresh: function (e) {
                        return this.config.localSample ? this.getDistribution(e) : this.config.abtestParams ? this.getLibra() : void 0
                    }, setAbtest: function () {
                        var e = this.$store.state.abtest;
                        e || (e = this.$cookies.get("H5_AB"), e && this.$store.commit("setAbtest", e))
                    }, getDistribution: function (e) {
                        var t = this.getCandidate(e);
                        return this.showTestResult(t)
                    }, getCandidate: function (e) {
                        var t = Object(ln["a"])(e || this.abId, this.config) || this.config.showDefault;
                        return t
                    }, showTestResult: function (e) {
                        var t = this.restoredCandidate(e),
                            n = v()(this.$scopedSlots).indexOf(e);
                        return this.$emit("sample", e, n), t
                    }, getLibra: function () {
                        var e = Object(b["a"])(regeneratorRuntime.mark(function e() {
                            var t = this;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.getLibraCandidate().then(function (e) {
                                        return t.showTestResult(e)
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getLibraCandidate: function () {
                        var e = this,
                            t = {
                                id: this.abId,
                                paramList: this.config.abtestParams
                            };
                        return y["a"].jsonp(dn, {
                            params: t
                        }).then(function (e) {
                            return e.data.data.map(function (e) {
                                return e.value
                            })
                        }).catch(function () {
                            return e._pick()
                        })
                    }, restoredCandidate: function (e) {
                        return e && e in this.$scopedSlots ? e : this._pick()
                    }, _pick: function () {
                        var e = this.config.showDefault || v()(this.$scopedSlots)[0];
                        return this.$emit("pick", e, v()(this.$scopedSlots).indexOf(e)), e
                    }, resample: function () {
                        var e = this._pick();
                        this.$emit("sample", e, v()(this.$scopedSlots).indexOf(e))
                    }
                }
            },
            fn = function () {
                a["default"].component("AuraVideo", Gt), a["default"].component("AuraVideoList", zt["a"]), a["default"].component("AuraVideoPicicon", Jt), a["default"].component("AuraVideoRowList", nn), a["default"].component("AuraCardMore", rn["a"]), a["default"].component("AuraCardTitle", an["a"]), a["default"].component("AuraFooter", on["a"]), a["default"].component("AuraLink", cn["a"]), a["default"].component("AuraToast", un["a"]), a["default"].component("AbTest", pn)
            },
            hn = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("GlobalCallapp"), n("GlobalPopup"), n("GlobalToast"), n("GlobalClipboard"), n("GlobalSwitcher")], 1)
            },
            mn = [],
            vn = (n("d92a"), n("fd12")),
            bn = n("8f8a"),
            gn = {
                name: "GlobalPopup",
                components: {
                    AuraPopup: vn["a"]
                },
                mixins: [bn["a"]],
                data: function () {
                    return {
                        leftButtonClick: function () {}, rightButtonClick: function () {}, title: "",
                        info: "",
                        show: !1
                    }
                }, methods: {
                    bindEvents: function () {
                        var e = this;
                        this.$on("show", function (t) {
                            var n = t.leftButtonClick,
                                r = t.rightButtonClick,
                                i = t.leftButtonText,
                                a = t.rightButtonText,
                                o = t.title,
                                c = t.info;
                            e.leftButtonClick = n, e.rightButtonClick = r, e.leftButtonText = i, e.rightButtonText = a, e.title = o, e.info = c, e.show = !0
                        }), this.$on("close", function () {
                            e.show = !1
                        })
                    }, close: function () {
                        this.show = !1
                    }
                }, render: function (e) {
                    try {
                        var t = this,
                            n = e(vn["a"], {
                                props: {
                                    title: t.title,
                                    info: t.info,
                                    leftButtonText: t.leftButtonText,
                                    rightButtonText: t.rightButtonText
                                },
                                on: {
                                    leftButtonClick: t.leftButtonClick.bind(t),
                                    rightButtonClick: t.rightButtonClick.bind(t),
                                    closeBtnClick: t.close.bind(t)
                                }
                            }),
                            r = this.show ? [n] : [];
                        return e("div", null, r)
                    } catch (i) {
                        console.log("error", i)
                    }
                }
            },
            yn = gn,
            wn = Object(s["a"])(yn, xt, Nt, !1, null, null, null),
            kn = wn.exports,
            _n = n("38ff"),
            xn = n("ba45"),
            Nn = {
                name: "GlobalCallapp",
                mixins: [bn["a"]],
                data: function () {
                    return {
                        subtype: "",
                        ftype: "",
                        downAppAndroidUrl: "",
                        extralOptions: {}
                    }
                }, methods: {
                    bindEvents: function () {
                        var e = this;
                        this.$on("toPlay", function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.toPage = t.vertical ? xn["g"] : xn["f"], e.eventHandler(t)
                        }), this.$on("toHot", function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.toPage = xn["d"], e.eventHandler(t)
                        }), this.$on("toHome", function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.toPage = xn["c"], e.eventHandler(t)
                        })
                    }, eventHandler: function (e) {
                        var t = this,
                            n = e.event,
                            r = void 0 === n ? {
                                target: "a"
                            } : n,
                            i = e.extralOptions,
                            a = e.subtype,
                            o = e.subType,
                            c = e.ftype,
                            u = void 0 === c ? "27" : c,
                            s = e.downAppAndroidUrl,
                            l = e.rseat,
                            d = e.showCopyCode,
                            p = e.failToUrl,
                            f = e.isDownApp;
                        this.downAppAndroidUrl = s || "", this.subtype = a || o, this.ftype = u, this.extralOptions = i || {}, this.rseat = l || "", this.isDownApp = f, this.showCopyCode = d, this.$nextTick(function () {
                            t.$refs.ButtonDown.callApp(r, {
                                showCopyCode: d,
                                failToUrl: p
                            })
                        })
                    }
                }, render: function (e) {
                    return e(_n["a"], {
                        ref: "ButtonDown",
                        props: {
                            rseat: this.rseat,
                            toPage: this.toPage,
                            downAppAndroidUrl: this.downAppAndroidUrl,
                            extralOptions: this.extralOptions,
                            subtype: this.subtype,
                            ftype: this.ftype,
                            tag: "a",
                            isDownApp: this.isDownApp,
                            showCopyCode: this.showCopyCode
                        }
                    })
                }
            },
            In = Nn,
            On = Object(s["a"])(In, It, Ot, !1, null, null, null),
            jn = On.exports,
            Cn = n("05d8"),
            An = {
                name: "GlobalClipboard",
                mixins: [bn["a"]],
                data: function () {
                    return {
                        text: "",
                        callback: function () {}
                    }
                }, methods: {
                    bindEvents: function () {
                        var e = this;
                        this.$on("copy", function (t) {
                            var n = t.text,
                                r = t.callback,
                                i = void 0 === r ? function () {} : r;
                            n && (e.text = n, e.callback = i, e.$nextTick(function () {
                                var t = new Event("click");
                                e.$el.dispatchEvent(t)
                            }))
                        })
                    }
                }, render: function (e) {
                    return e("div", {
                        directives: [{
                            name: "clipboard",
                            value: this.callback.bind(this),
                            arg: "callback"
                        }, {
                            name: "clipboard",
                            value: this.text,
                            arg: "text"
                        }]
                    })
                }
            },
            Sn = An,
            En = Object(s["a"])(Sn, jt, Ct, !1, null, null, null),
            Pn = En.exports,
            Hn = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div")
            },
            Tn = [],
            Ln = (n("6762"), n("2fdb"), Object(g["K"])("switch", {
                feedback: !0
            })),
            qn = {
                name: "GlobalSwitcher",
                mounted: function () {
                    var e = Object(b["a"])(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            while (1) switch (e.prev = e.next) {
                            case 0:
                                a["default"].prototype.$GlobalSwitcher = this;
                            case 1:
                            case "end":
                                return e.stop()
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                methods: {
                    getConditions: function () {
                        var e = Object(w["w"])().length - 1,
                            t = Object(w["w"])().charAt(e),
                            n = Object(g["u"])(window.navigator.userAgent).browser.name ? Object(g["u"])(window.navigator.userAgent).browser.name : "noua";
                        return {
                            vfm: Object(ct["E"])(),
                            refer: g["k"].parse(Object(ct["y"])()).host,
                            jsuid: t,
                            ua: n
                        }
                    }, isReady: function (e) {
                        var t = this;
                        return new ne.a(function (n) {
                            var r = t.$store.state[e] && t.$store.state[e].diversionInfo;
                            if (r) return n(r);
                            t.watcher && t.watcher(), t.watcher = t.$store.watch(function (t) {
                                return !!t[e] && t[e].dataDone
                            }, function (r, i) {
                                r && n(t.$store.state[e] && t.$store.state[e].diversionInfo)
                            })
                        })
                    }, getFilters: function () {
                        var e = Object(b["a"])(regeneratorRuntime.mark(function e(t, n) {
                            var r, i, a;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    return r = !1, e.next = 3, this.isReady(n);
                                case 3:
                                    if (i = e.sent, i && i.isOpen) {
                                        e.next = 7;
                                        break
                                    }
                                    return Ln.log(!1, ", page:", n, ", code:", t, ", diversionInfo:", i), e.abrupt("return", !1);
                                case 7:
                                    return a = this.getConditions(), i.config.forEach(function (e) {
                                        if (t === e.code) {
                                            var n = !e.vfm || !e.vfm.split(",").includes(a.vfm),
                                                i = !e.jsuid || !e.jsuid.split(",").includes(a.jsuid),
                                                o = !e.refer || !e.refer.split(",").includes(a.refer),
                                                c = !e.ua || !e.ua.split(",").includes(a.ua),
                                                u = n && i && o && c;
                                            r = u
                                        }
                                    }, this), Ln.log(r, ", page:", n, ", code:", t, ", diversionInfo:", i), e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t(t, n) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getParams: function (e, t) {
                        var n = this.$store.state[t] && this.$store.state[t].diversionInfo;
                        return n.config.find(function (t) {
                            return e === t.code
                        })
                    }
                }
            },
            Rn = qn,
            Bn = Object(s["a"])(Rn, Hn, Tn, !1, null, null, null),
            Un = Bn.exports,
            Mn = {
                name: "GlobalComponents",
                components: {
                    GlobalPopup: kn,
                    GlobalCallapp: jn,
                    GlobalClipboard: Pn,
                    GlobalToast: Cn["a"],
                    GlobalSwitcher: Un
                }
            },
            Dn = Mn,
            Vn = Object(s["a"])(Dn, hn, mn, !1, null, null, null),
            $n = Vn.exports,
            Gn = (n("759f"), ["iqiyi.com", "javascript:void"]),
            zn = ["so.iqiyi.com/links/"];

        function Yn(e, t) {
            return 0 === e.indexOf(t)
        }

        function Fn(e) {
            return Yn(e, "http://") || Yn(e, "https://") || Yn(e, "//")
        }

        function Qn(e, t) {
            return t.some(function (t) {
                return e.includes(t)
            })
        }

        function Kn(e) {
            return !!Fn(e) && (!Qn(e, Gn) || Qn(e, zn))
        }
        var Jn, Wn, Xn = {
                name: "MainLink",
                props: {
                    href: {
                        type: String,
                        default: "javascript:void(0);"
                    },
                    tag: {
                        type: String,
                        default: "a"
                    },
                    title: {
                        type: String,
                        default: ""
                    }
                },
                render: function () {
                    var e = arguments[0],
                        t = this.tag,
                        n = Kn(this.href) ? "nofollow" : "";
                    return e(t, {
                        attrs: {
                            href: this.href,
                            title: this.title,
                            rel: n
                        }
                    }, [this.$slots.default])
                }
            },
            Zn = Xn,
            er = Object(s["a"])(Zn, Jn, Wn, !1, null, null, null),
            tr = er.exports,
            nr = function () {
                a["default"].component("GlobalComponents", $n), a["default"].component("MainLink", tr)
            },
            rr = n("b0a3"),
            ir = function (e, t) {
                var n = e.req,
                    r = new a["default"]({
                        data: function () {
                            var e = i();
                            return {
                                i18n: new rr["a"]({
                                    locale: e
                                })
                            }
                        }, methods: {
                            t: function (e) {
                                return this.i18n.t(e)
                            }, is: function (e) {
                                return this.i18n.locale.includes(e)
                            }
                        }
                    });

                function i() {
                    var e = !1;
                    if (e) {
                        var t = "//".concat(n.headers.host).concat(n.url);
                        return g["k"].getQuery(t).lang || Ht.a.parse(n.headers.cookie || "")[rr["b"]]
                    }
                    var r = location.href,
                        i = g["k"].getQuery(r).lang || Lt.a.get(rr["b"]);
                    return i && Lt.a.set(rr["b"], i, {
                        path: "/",
                        domain: "iqiyi.com"
                    }), i
                }
                t("i18n", r)
            },
            ar = "IQIYIH5_WEBP",
            or = function (e, t) {
                e.req;
                var n = document.cookie,
                    r = Ht.a.parse(n || ""),
                    i = r[ar],
                    a = "1" === i;
                void 0 === i ? (a = Object(g["G"])(), Lt.a.set(ar, a ? 1 : 0, {
                    expires: 15,
                    path: "/",
                    domain: "iqiyi.com"
                })) : g["G"].is = a, t("webp", a)
            },
            cr = n("5cd9"),
            ur = n.n(cr);

        function sr(e, t) {
            function n(e, t, r) {
                this.$children.forEach(function (i) {
                    var a = i.$options.name;
                    a === e ? i.$emit(t, r) : n.call(i, e, t, r)
                })
            }

            function r(e, t, r) {
                var i = this.$parent || this.$root,
                    a = i.$options.name;
                while (i && (!a || a !== e)) i = i.$parent, i && (a = i.$options.name);
                i ? i.$emit(t, r) : n.call(this.$root, e, t, r)
            }
            t("dispatch", r), t("brodcast", n)
        }

        function lr(e, t) {
            n("0fa5"), n("f15d"), n("061a");
            var r = n("8262"),
                i = r.default;

            function o(n, r) {
                n = "$".concat(n), t[n] = r, e.store[n] = r;
                var i = "__iqiyi_" + n + "_installed__";
                a["default"][i] || (a["default"][i] = !0, a["default"].use(function () {
                    a["default"].prototype.hasOwnProperty(n) || Et()(a["default"].prototype, n, {
                        get: function () {
                            return this.$root.$options[n]
                        }
                    })
                }))
            }
            i(e), Rt(e, o), Bt(e, o), fn(e, o), ir(e, o), or(e, o), sr(e, o), nr(e, o), a["default"].use(ur.a)
        }

        function dr() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = wt(),
                n = Z();
            a["default"].router = t, a["default"].store = n, Object(At["sync"])(n, t);
            var r = {
                router: t,
                store: n,
                components: {
                    App: p
                },
                render: function (e) {
                    return e("App")
                }
            };
            lr(Object(o["a"])({}, e, {
                router: t,
                store: n
            }), r);
            var i = new a["default"](r);
            return {
                app: i,
                store: n,
                router: t
            }
        }

        function pr() {
            if ("https:" === location.protocol && "serviceWorker" in navigator) {
                navigator.serviceWorker.register("/service-worker.js");
                0
            }
        }
        a["default"].config.productionTip = !1;
        var fr = Object(g["K"])("global", {
            feedback: !0
        });
        window.onerror = function (e, t, n, r, i) {
            fr.error({
                message: i.message,
                stack: i.stack,
                ec: g["a"],
                handler: "window.onerror",
                error: i
            })
        }, window.addEventListener("error", function (e) {
            var t = {};
            if (e.error) {
                var n = e.error,
                    r = n.message,
                    i = n.stack;
                t = {
                    message: r,
                    stack: i
                }, t.ec = g["a"]
            } else {
                var a = e.target || {},
                    o = a.src,
                    c = a.tagName,
                    u = a.error;
                t.target = {
                    src: o,
                    tagName: c,
                    error: u
                }, t.message = u ? u.message : "", t.code = u && u.code ? "".concat(u.constructor.name, " ").concat(u.code) : "", t.ec = g["e"]
            }
            t.handler = "window error listener", t.type = e.type, t.error = e, fr.error(t)
        }, !0), window.addEventListener("unhandledrejection", function (e) {
            e.preventDefault(), fr.error({
                message: e.reason,
                ec: g["d"],
                event: e
            })
        }), a["default"].config.errorHandler = function (e, t, n) {
            fr.error({
                compName: t.$options.name,
                info: n,
                stack: e.stack,
                ec: g["g"],
                error: e
            })
        }, a["default"].config.productionTip = !1, a["default"].mixin({
            beforeRouteUpdate: function (e, t, n) {
                var r = this.$options.asyncData;
                r ? r({
                    store: this.$store,
                    route: e,
                    isClient: !0,
                    isUpdate: !0
                }).then(n).catch(n) : n()
            }, beforeMount: function () {
                var e = this.$options.asyncData;
                e && (this.dataPromise = e({
                    store: this.$store,
                    route: this.$route,
                    isClient: !0
                }))
            }
        });
        var hr = dr(),
            mr = hr.app,
            vr = hr.router,
            br = hr.store;
        window.__INITIAL_STATE__ && br.replaceState(window.__INITIAL_STATE__), vr.onReady(function () {
            mr.$mount("#app")
        }), window.addEventListener("load", function () {
            return pr()
        })
    }, dff0: function (e, t, n) {
        "use strict";
        n.d(t, "i", function () {
            return d
        }), n.d(t, "b", function () {
            return p
        }), n.d(t, "e", function () {
            return f
        }), n.d(t, "f", function () {
            return h
        }), n.d(t, "c", function () {
            return m
        }), n.d(t, "h", function () {
            return v
        }), n.d(t, "g", function () {
            return b
        }), n.d(t, "a", function () {
            return g
        }), n.d(t, "j", function () {
            return w
        }), n.d(t, "d", function () {
            return k
        });
        var r = n("774e"),
            i = n.n(r),
            a = (n("57e7"), n("a481"), /&/g),
            o = /</g,
            c = />/g,
            u = / /g,
            s = /'/g,
            l = /"/g;

        function d(e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            var t = e.getBoundingClientRect(),
                n = document.documentElement.clientHeight || document.body.clientHeight;
            return !(t.bottom <= 0 || t.top >= n)
        }

        function p() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = "";
            return e.length ? (t = e.replace(a, "&amp;"), t = t.replace(o, "&lt;"), t = t.replace(c, "&gt;"), t = t.replace(u, "&nbsp;"), t = t.replace(s, "&#39;"), t = t.replace(l, "&quot;"), t) : ""
        }

        function f(e) {
            return e === document.body || e === document.documentElement || e === document
        }

        function h(e, t, n) {
            var r = n ? e.parentNode : e;
            while (r && r.tagName !== t) r = r.parentNode;
            return r
        }

        function m(e) {
            if (!e) return null;
            var t = e.parentNode;
            return i()(t.children).indexOf(e)
        }

        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (e) {
                var n = e.offsetTop - t;
                b(n)
            }
        }

        function b(e) {
            document.documentElement.scrollTop = e, document.body.scrollTop = e
        }

        function g() {
            return {
                width: screen.width * window.devicePixelRatio,
                height: screen.height * window.devicePixelRatio
            }
        }
        var y = 0;

        function w(e) {
            if (document) {
                var t = document.body;
                e ? (y = window.scrollY, t.style.position = "fixed", t.style.top = -y + "px", t.style.width = "100%", t.style.height = "100%") : (t.style.position = "", t.style.top = "", window.scrollTo(0, y))
            }
        }

        function k(e) {
            try {
                setTimeout(function () {
                    var t = e.value.length;
                    e.setSelectionRange(t, t)
                }, 20)
            } catch (t) {}
        }
    }, e272: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return i
        }), n.d(t, "a", function () {
            return c
        });
        n("20d6"), n("4917"), n("a4bb");
        var r = n("b2e7");

        function i() {
            var e = a(Object(r["w"])());
            return e
        }

        function a(e) {
            var t = e.length - 1,
                n = e.charAt(t),
                r = n.match(/[0-1]/),
                i = n.match(/[2-9a-f]/);
            return r ? !!r : !i && !!r
        }

        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = "A";
            if (!e) return "test".concat(n);
            var r = e.charAt(e.length - 1),
                i = t.findIndex(function (e) {
                    return r.match(e)
                });
            return "test".concat(i > -1 ? String.fromCharCode(n.charCodeAt(0) + i) : n)
        }

        function c(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = o(e, t.localSample);
            return t.abtestList[n] || ""
        }
    }, ec1c: function (e, t, n) {
        "use strict";
        var r = n("0a0d"),
            i = n.n(r),
            a = n("5176"),
            o = n.n(a),
            c = n("cebc"),
            u = n("b383"),
            s = n.n(u),
            l = n("8d81"),
            d = n.n(l),
            p = (n("386d"), n("a481"), n("a78e")),
            f = n.n(p),
            h = (n("6b54"), n("87b3"), n("f499")),
            m = n.n(h),
            v = (n("57e7"), n("7aa9")),
            b = {},
            g = {},
            y = (I() || C(b), O() || C(g));

        function w() {
            var e = x(),
                t = e.browser;
            return t.iqiyi ? 3 : 1
        }

        function k() {
            var e = x(),
                t = e.browser,
                n = "";
            for (var r in t)
                if ("boolean" === typeof t[r] && t[r]) {
                    n = r;
                    break
                }
            return n
        }

        function _() {
            var e = x(),
                t = e.os;
            return t.android ? "android" : t.ios ? "ios" : t.wp ? "windows" : t.blackberry ? "blackberry" : ""
        }

        function x() {
            try {
                var e = x.detect;
                return e || (e = x.detect = Object(v["a"])(window.navigator.userAgent), e)
            } catch (t) {
                return {}
            }
        }

        function N() {
            return d()(window.navigator.userAgent + document.cookie + Math.random() + i()())
        }

        function I() {
            var e;
            try {
                window.sessionStorage.removeItem("_Q_test_"), window.sessionStorage.setItem("_Q_test_", 1), window.sessionStorage.removeItem("_Q_test_"), e = window.sessionStorage
            } catch (t) {
                return null
            }
            return j(e)
        }

        function O() {
            var e;
            try {
                window.localStorage.removeItem("_Q_test_"), window.localStorage.setItem("_Q_test_", 1), window.localStorage.removeItem("_Q_test_"), e = window.localStorage
            } catch (t) {
                return null
            }
            return j(e)
        }

        function j(e) {
            var t = "__string__";
            return {
                getItem: function (n) {
                    var r = e.getItem(n);
                    if (r && r.indexOf(t) >= 0) return r.replace(t, "");
                    if ("undefined" !== r) try {
                        return JSON.parse(r)
                    } catch (i) {
                        return r
                    }
                }, setItem: function (r, i) {
                    var a;
                    a = n(i) ? i + t : m()(i), e.setItem(r, a)
                }, removeItem: function (t) {
                    e.removeItem(t)
                }
            };

            function n(e) {
                return "[object String]" === Object.prototype.toString.call(e)
            }
        }

        function C(e) {
            return {
                getItem: function (t) {
                    return e[t]
                }, setItem: function (t, n) {
                    e[t] = n
                }, removeItem: function (t) {
                    delete e[t]
                }
            }
        }
        var A = !1,
            S = "",
            E = "",
            P = /^\/[vw]_(.*)\.html/;

        function H() {
            return T().uid
        }

        function T() {
            var e = f.a.get("P00002");
            return e ? JSON.parse(e) : {
                uid: ""
            }
        }

        function L() {
            var e = location.pathname;
            return e && P.test(e) ? "" : E || (E = f.a.get("H5_AB") || "")
        }

        function q() {
            if (S) return S;
            var e = y.getItem($),
                t = f.a.get(U);
            if (S = e || t) return (!t || !e) && R(S), S;
            var n = N();
            return R(n), n
        }

        function R(e) {
            A = !0, S = e, y.setItem($, e), f.a.set(U, e, {
                expires: 365,
                path: "/",
                domain: "iqiyi.com"
            })
        }

        function B() {
            var e = S || y.getItem($) || f.a.get(U);
            return !e || A
        }
        var U = "QC006",
            M = "QC007",
            D = "QC008",
            V = "QC015",
            $ = "suid",
            G = "qyid";
        var z = {
            path: "/",
            domain: "iqiyi.com"
        };

        function Y() {
            var e = document.referrer || "DIRECT";
            return F(M, e)
        }

        function F(e, t) {
            var n = f.a.get(e);
            return n || (n = "function" === typeof t ? t() : t, f.a.set(e, n, z)), n
        }

        function Q() {
            var e = q();
            return d()("".concat(e, "veid").concat(i()()))
        }

        function K() {
            var e = q();
            return d()("".concat(e, "weid").concat(i()()))
        }

        function J() {
            return s.a.parse(location.search.replace("?", ""))
        }

        function W() {
            var e = J();
            return ne(V, e.msrc)
        }

        function X(e) {
            return F(D, e)
        }

        function Z(e) {
            var t = J();
            return ne(V, t.vfm, e)
        }

        function ee() {
            return y.getItem(G) || ""
        }

        function te() {
            return y.getItem($) || ""
        }

        function ne(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = n.expires,
                i = t;
            if (i) {
                var a = z;
                r && (a = Object(c["a"])({
                    expires: r
                }, z)), f.a.set(e, i, a)
            } else i = f.a.get(e);
            return i
        }
        var re = n("51cb");
        n.d(t, "c", function () {
            return ue
        }), n.d(t, "a", function () {
            return se
        }), n.d(t, "d", function () {
            return le
        }), n.d(t, "b", function () {
            return de
        }), n.d(t, "f", function () {
            return me
        }), n.d(t, "e", function () {
            return ve
        }), n.d(t, "g", function () {
            return be
        }), n.d(t, "j", function () {
            return ge
        }), n.d(t, "h", function () {
            return we
        }), n.d(t, "i", function () {
            return ke
        }), n.d(t, "k", function () {
            return _e
        });
        var ie, ae, oe = 31,
            ce = 2031,
            ue = 15,
            se = 1,
            le = 2,
            de = 13,
            pe = "//msg.qy.net/jpb.gif",
            fe = "//msg.qy.net/b",
            he = {
                c1: "",
                tmplt: "",
                sprov: ""
            };

        function me() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            for (var t in e.weid && (ie = e.weid), he) {
                var n = e[t];
                he[t] = void 0 !== n && "" !== n ? n : ""
            }
        }

        function ve() {
            return Object(c["a"])({
                weid: ie
            }, he)
        }

        function be() {
            return ae = Q(), ae
        }

        function ge() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.platform || (/pps.tv/i.test(document.domain) ? ce : oe),
                n = e.tmplt;
            ie = K();
            var r = B() ? 1 : 0;
            return Object(re["b"])().then(function (i) {
                var a = o()({
                        abtest: L(),
                        rdm: String(Math.floor(999999999 * Math.random())),
                        qtcurl: location.href,
                        rfr: document.referrer,
                        flshuid: q(),
                        lrfr: Y(),
                        ppuid: H(),
                        platform: t,
                        weid: ie,
                        nu: r,
                        tmplt: n,
                        qtsid: X(ie),
                        msrc: W(),
                        vfm: Z(),
                        re: screen.width * window.devicePixelRatio + "*" + screen.height * window.devicePixelRatio,
                        os: _(),
                        as: ye(t, ie),
                        dfp: i,
                        pagecat: w(),
                        device_id: ee(),
                        suid: te()
                    }, he, e),
                    c = s.a.stringify(a),
                    u = new Image(1, 1);
                return u.src = "".concat(pe, "?").concat(c), a
            })
        }

        function ye(e, t) {
            var n = "ChEnYH0415dadrrEDFf2016",
                r = q();
            return d()("".concat(e).concat(r).concat(t).concat(n))
        }

        function we(e) {
            return Object(re["b"])().then(function (t) {
                var n = q(),
                    r = Object(c["a"])({
                        t: 20,
                        pf: /pps.tv/i.test(document.domain) ? 202 : 2,
                        p: "20",
                        p1: "201",
                        u: n,
                        pu: H(),
                        jsuid: n,
                        ce: ie,
                        rn: (new Date).getTime(),
                        dfp: t,
                        pagecat: w(),
                        qtcurl: location.href,
                        vfm: Z(),
                        abtest: L()
                    }, he);
                for (var i in e) {
                    var a = e[i];
                    void 0 !== a && "" !== a && (r[i] = 0 === a ? "0" : a)
                }
                var o = new Image;
                return o.src = "".concat(fe, "?").concat(s.a.stringify(r)), r
            })
        }

        function ke(e) {
            if (e.block) return Object(re["b"])().then(function (t) {
                var n = Object(c["a"])({
                    t: "21",
                    bstp: "0",
                    pf: /pps.tv/i.test(document.domain) ? 202 : 2,
                    p: "20",
                    p1: "201",
                    u: q(),
                    pu: H(),
                    rn: String(Math.floor(999999999 * Math.random())),
                    block: e.block,
                    c1: e.c1,
                    dfp: t,
                    pagecat: w(),
                    qtcurl: location.href,
                    vfm: Z(),
                    abtest: L()
                }, he);
                for (var r in e) {
                    var i = e[r];
                    void 0 !== i && "" !== i && (n[r] = 0 === i ? "0" : i)
                }
                var a = new Image;
                return a.src = "".concat(fe, "?").concat(s.a.stringify(n)), n
            })
        }

        function _e(e) {
            var t = J();
            return Object(re["b"])().then(function (n) {
                var r = e.coustomVvOptions || {},
                    a = Object(c["a"])({
                        t: e.t,
                        tm: e.tm,
                        pt: e.pt,
                        rfr: e.rfr || document.referrer,
                        ft: e.videoType,
                        r: e.tvid,
                        vid: e.vid,
                        plid: e.plid,
                        from_ra: e.from_ra,
                        to_ra: e.to_ra,
                        ra: e.ra || "",
                        fatherid: e.fatherid || "",
                        vfrm: e.vfrm || Z(),
                        tmplt: e.tmplt,
                        c1: e.c1,
                        upderid: e.upderid,
                        ht: e.ht,
                        hu: e.hu,
                        ps3: e.ps3,
                        ps4: e.ps4,
                        s3: e.s3,
                        s4: e.s4,
                        ispre: e.ispre,
                        feedId: e.feedId,
                        s1: 1,
                        pf: "2",
                        p: "20",
                        p1: "201",
                        p2: t.version ? "1015" : "1011",
                        msrc: W() || "",
                        vfm: Z() || "",
                        ve: ae,
                        ce: ie,
                        u: q(),
                        nu: B() ? 1 : 0,
                        pu: H(),
                        rn: i()(),
                        os: _(),
                        lrfr: Y() || "",
                        coop: t.coop || "",
                        openId: t.appKey || "",
                        dfp: n,
                        purl: location.href || "",
                        mod: "cn_s",
                        duby: e.duby,
                        plyrtp: e.playerType,
                        p1new: "2_20_201",
                        ptid: "00000021010000000000",
                        br: k(),
                        ps2: document.referrer || "",
                        videotp: 0,
                        vfrmblk: e.vfrmblk || "",
                        vfrmrst: e.vfrmrst || "",
                        fstply: e.fstply,
                        abtest: L()
                    }, he, r),
                    o = {};
                for (var u in a) {
                    var l = a[u];
                    void 0 !== l && (o[u] = l)
                }
                var d = new Image;
                return d.src = "".concat(fe, "?").concat(s.a.stringify(o)), o
            })
        }
    }, f15d: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("2b0e"),
            i = n("774e"),
            a = n.n(i),
            o = (n("759f"), n("6762"), n("a4bb")),
            c = n.n(o),
            u = (n("ac6a"), n("f3e2"), n("0a0d")),
            s = n.n(u),
            l = n("5176"),
            d = n.n(l),
            p = n("1fba"),
            f = n("0f32"),
            h = n.n(f),
            m = {},
            v = {
                inserted: function (e, t) {
                    var n = this,
                        r = new p["a"](e, d()({
                            eventPassthrough: !1,
                            preventDefault: !0,
                            click: !0,
                            probeType: 0
                        }, t.modifiers, t.value)),
                        i = s()(),
                        a = ["beforeScrollStart", "scrollStart", "scroll", "scrollCancel", "scrollEnd", "touchEnd", "flick", "refresh", "destroy", "pullingDown", "pullingUp", "zoomStart", "zoomEnd"];
                    t.value && c()(t.value).forEach(function (e) {
                        a.includes(e) && r.on(e, h()(function () {
                            var i = {
                                x: r.x,
                                y: r.y,
                                maxScrollX: r.maxScrollX,
                                maxScrollY: r.maxScrollY,
                                movingDirectionX: r.movingDirectionX,
                                movingDirectionY: r.movingDirectionY,
                                directionX: r.directionX,
                                directionY: r.directionY,
                                enabled: r.enabled,
                                isInTransition: r.isInTransition,
                                isAnimating: r.isAnimating
                            };
                            t.value[e].call(n, i)
                        }))
                    }), e.dataset.scrollId = i, m[i] = r, t.value && b(e, t, r)
                }, componentUpdated: function (e, t) {
                    var n = m[e.dataset.scrollId];
                    if (n && (n.refresh(), t.value)) {
                        var r = t.value,
                            i = r.x,
                            a = r.y;
                        "number" === typeof i && "number" === typeof a && n.scrollTo(i, a)
                    }
                }, unbind: function (e) {
                    var t = e.dataset.scrollId,
                        n = m[t];
                    n && n.destroy(), delete m[t]
                }
            };

        function b(e, t, n) {
            var r = t.value.videos || [],
                i = t.value.position,
                a = g(e);
            a && r.length && i && r.some(function (e, r) {
                var o = a[r];
                e.isSelected && o && o.nodeName === i && (o.classList.add(t.value.selectClass), n.scrollToElement(o, 0, !0, !0))
            })
        }

        function g(e) {
            var t = e.children ? e.children.length : "";
            if (1 === t) {
                var n = e.children[0].children;
                return a()(n).length ? n : null
            }
        }
        var y = n("e2a0"),
            w = n.n(y),
            k = n("5321"),
            _ = n("c0ba"),
            x = n("8296"),
            N = Object(x["K"])("pingback", {
                feedback: !0
            }),
            I = new _["a"](function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t.callback || C;
                if (t) {
                    if (r(e, t), n.defaultPrevented) return;
                    Object(k["A"])(n, e)
                }
            }),
            O = {
                bind: function (e, t) {
                    I.observe(e, t.value)
                }, unbind: function (e) {
                    I.unobserve(e)
                }
            },
            j = {
                A: "a",
                IMG: "i",
                ELSE: "e"
            };

        function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            w()(t) && (t = {
                rseat: t
            });
            var n = j[e.tagName] || j.OTHER;
            if (t.rseat) {
                var r = A(e);
                Object(k["l"])(d()({
                    rt: n,
                    block: r,
                    rlink: Object(k["g"])(e)
                }, t)).then(function (e) {
                    return N.log("click", e)
                })
            }
        }

        function A(e) {
            if (!Object(x["F"])(e)) {
                var t = "";
                while (!(t = e[k["a"]]))
                    if (e = e.parentNode, !e || Object(x["F"])(e)) return;
                return t || ""
            }
        }
        var S = n("ba45"),
            E = new _["b"](function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.block,
                    r = t.callback || k["m"];
                n && r(d()(t, Object(S["l"])()))
            }),
            P = {
                bind: function (e, t) {
                    var n = t.value,
                        r = w()(t.value) ? {
                            block: n
                        } : n || {};
                    e[k["a"]] = r.block, E.observe(e, r, t.modifiers)
                }, inserted: function () {
                    E.notify()
                }, unbind: function (e) {
                    E.unobserve(e), delete e[k["a"]]
                }
            },
            H = new _["a"](function (e, t, n) {
                if (t) {
                    if (Object(k["x"])(t), n.defaultPrevented) return;
                    Object(k["A"])(n, e)
                }
            }, {
                key: "_searchId"
            }),
            T = {
                bind: function (e, t) {
                    H.observe(e, t.value)
                }, unbind: function (e) {
                    H.unobserve(e)
                }
            },
            L = new _["b"](function (e, t) {
                var n = t.image;
                q(e, n)
            }, {
                key: "lazyload"
            });

        function q(e, t) {
            if (t) {
                var n = new Image;
                n.src = t, n.onload = function () {
                    "img" === e.tagName.toLowerCase() ? e.setAttribute("src", t) : e.style.backgroundImage = "url(".concat(t, ")")
                }
            }
        }
        var R = {
                bind: function (e, t) {
                    if (t.value) {
                        var n = w()(t.value) ? {
                                image: t.value
                            } : t.value || {},
                            r = n.defaultImage;
                        r && q(e, r), L.observe(e, n)
                    }
                }, inserted: function () {
                    L.notify()
                }, unbind: function (e) {
                    L.unobserve(e)
                }
            },
            B = {
                bind: function (e, t) {
                    var n = 0;

                    function r(e) {
                        n = e.touches[0].pageY
                    }
                    var i = function (t) {
                        var r = t.touches[0].pageY;
                        (r - n > 0 && e.scrollTop <= 0 || r - n < 0 && e.clientHeight + e.scrollTop >= e.scrollHeight) && t.cancelable && t.preventDefault()
                    };
                    e.addEventListener("touchstart", r), e.addEventListener("touchmove", i), e.prevent = {
                        touchstart: function () {
                            e.removeEventListener("touchstart", r)
                        }, touchmove: function () {
                            e.removeEventListener("touchmove", i)
                        }
                    }
                }, unbind: function (e) {
                    var t = e.prevent,
                        n = t.touchstart,
                        r = t.touchmove;
                    n(), r()
                }
            },
            U = (n("2fdb"), n("db0c")),
            M = n.n(U),
            D = (n("386d"), n("a481"), n("cebc")),
            V = n("3e9e"),
            $ = n("b383"),
            G = n.n($),
            z = n("6dd8"),
            Y = n("9d09"),
            F = n("6451"),
            Q = Object(x["K"])("player", {
                feedback: !0
            }),
            K = /(\d{1,2}-\d{1,2}-\d{1,2}-)\d{1}/,
            J = "screenOutStopContinue",
            W = /\/([vw])_(.*)\.html/;

        function X(e) {
            var t = e ? {
                show: e.advertInfo,
                imageUrl: e.advertInfo && e.advertInfo.imageUrl,
                brandLogo: e.advertInfo && e.advertInfo.brandLogo,
                brandName: e.advertInfo && e.advertInfo.brandName,
                landingUrl: e.advertInfo && e.advertInfo.landingUrl,
                btnContent: e.advertInfo && e.advertInfo.btnContent,
                videoQipuId: e.advertInfo && e.advertInfo.videoQipuId,
                ad_rseat: "".concat(e.advertInfo && e.advertInfo.adRseat, "_").concat(e.adIndex),
                adfinish_block: "".concat(e.advertInfo && e.advertInfo.adFinshBlock, "_").concat(e.adIndex)
            } : {};
            r["default"].store.commit("play/setAdInfoFeed", t)
        }

        function Z(e) {
            return x["L"].android && x["p"].chrome && e && e.video && e.video.isFullscreen()
        }

        function ee(e, t) {
            if (e && e.qipuId && e.url) {
                var n = V["a"].getCurVideo() || {};
                n.qipuId || r["default"].store.commit("play/setLoadInfo", {});
                var i = n.qipuId !== e.qipuId,
                    a = r["default"].prototype.$qiyiPlayer;
                if (V["a"].setCurVideo(e), e.redirect || Object(Y["c"])({
                    block: e.block,
                    rseat: e.rseat
                }), X(e.isAdvert ? e : {}), !i) return a.show(), re(e), Object(F["c"])(e, !t), e.isAdvert && (e.tvid = e.qipuId, a.updateVVOptions(e), a.seek(0)), a.play();
                if (a && (a.clear(), a.show(), a.preplay(), re(e), Object(F["c"])(e, !t)), e.noUpdateUrl) r["default"].store.dispatch("play/getPlay", Object(D["a"])({}, te(e.url), {
                    redirect: !1,
                    noUpdateUrl: e.noUpdateUrl
                }));
                else {
                    var o = e.live ? e.url : ne(e, t);
                    if (e.redirect) return window.location.href = o;
                    r["default"].router.push({
                        path: o
                    })
                }
                e.select ? V["a"].on("change", function (e) {
                    re(e, !0), Object(F["c"])(e, !t)
                }) : (re(e, !0), Object(F["c"])(e, !t))
            }
        }

        function te() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = W.exec(e);
            return t && t.length >= 3 ? {
                pre: t[1],
                id: t[2]
            } : {}
        }

        function ne(e, t) {
            var n = x["k"].parse(e.url),
                r = x["k"].parse(location.href),
                i = (e.vfrm ? "#" + e.vfrm : "") || n.hash || r.hash,
                a = i ? i.replace(K, function (e, n) {
                    return n + (t ? "7" : "8")
                }) : "",
                o = G.a.parse(r.search.slice(1));
            o.list && delete o.list;
            var c = Object(D["a"])({}, o, G.a.parse(n.search.slice(1))),
                u = G.a.stringify(c);
            return "".concat(n.pathname).concat(u ? "?" : "").concat(u).concat(a)
        }

        function re(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = !1;
            M()(V["a"].lists).forEach(function (r) {
                for (var i = r.videos, a = 0; a < i.length; a++) {
                    if (!i[a].el) return;
                    if (i[a].qipuId === e.qipuId && i[a].adIndex === e.adIndex && i[a].card === e.card && t) {
                        if (n) continue;
                        i[a].el.classList.add("selected"), n = !0
                    } else "series" === i[a].card && "series" !== e.card || i[a].el.classList.remove("selected")
                }
            })
        }

        function ie() {
            var e = !0,
                t = ae();
            if (t.playStrategy === J) {
                var n = Object(F["a"])(t);
                n && (e = Object(x["W"])(n))
            }
            return e
        }

        function ae() {
            return V["a"].getCurVideo() || {}
        }

        function oe(e) {
            return "none" === e ? "" : V["a"].ACTIONS.includes(e) ? e : "add"
        }
        "undefined" !== typeof window && new z["a"](function (e, t) {
            var n = V["a"].getCurVideo() || {};
            Object(F["c"])(n)
        }).observe(document.body), V["a"].on("next", function (e) {
            var t = r["default"].prototype.$qiyiPlayer;
            if (t && Q.log("curTime", t.currentTime()), Q.log("play continuously:", e.card, e.qipuId), e.noPlay || e.noStart || !ie() && !Z(t)) {
                t.hide(), re(e, !1);
                var n = Object(F["a"])(e);
                Object(F["b"])(n)
            } else {
                e.isAdvert ? r["default"].store.commit("play/setVideoType", "ad") : r["default"].store.commit("play/setVideoType", "normal");
                try {
                    x["T"].setItem("isSwitch", "2")
                } catch (i) {}
                ee(e)
            }
        });
        var ce = new _["a"](function (e, t) {
                var n = t && t.callback || ee;
                if (!t || t._skip) return !1;
                var i = r["default"].prototype.$qiyiPlayer;
                i && Q.log("curTime", i.currentTime()), Q.log("play by click:", t.card, t.qipuId), t.isAdvert ? r["default"].store.commit("play/setVideoType", "ad") : r["default"].store.commit("play/setVideoType", "normal");
                try {
                    x["T"].setItem("isSwitch", "3")
                } catch (a) {}
                n(Object(D["a"])({}, V["a"].getVideo(t) || {}, t), !0)
            }, {
                key: "play_clickId"
            }),
            ue = {
                bind: function (e, t) {
                    var n = t.value;
                    if (n) {
                        var r = oe(n.action);
                        if (r) {
                            var i = r + "Video";
                            V["a"][i] && V["a"][i](Object(D["a"])({
                                el: e
                            }, n))
                        }
                        n.callApp || ce.observe(e, n)
                    }
                }, unbind: function (e, t) {
                    var n = t.value;
                    if (n) {
                        var r = oe(n.action);
                        ["add", "prepend", "append"].includes(r) && V["a"].removeVideo(n), n.callApp || ce.unobserve(e)
                    }
                }
            },
            se = (n("d92a"), n("d225")),
            le = n("b0b4"),
            de = function () {
                function e(t) {
                    Object(se["a"])(this, e), this.callback = function () {}, this.text = "", this.fakeElem = null, this.container = t
                }
                return Object(le["a"])(e, [{
                    key: "setVal",
                    value: function (e, t) {
                        this[e] = t
                    }
                }, {
                    key: "copyText",
                    value: function () {
                        var e;
                        try {
                            e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return this.callback(e)
                    }
                }, {
                    key: "selectFake",
                    value: function () {
                        this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style.left = "-9999px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, "SPAN" === this.container.tagName ? this.container.parentElement.appendChild(this.fakeElem) : this.container.appendChild(this.fakeElem), this.selectedText = this.select(this.fakeElem), this.copyText()
                    }
                }, {
                    key: "select",
                    value: function (e) {
                        var t = e.hasAttribute("readonly");
                        return t || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly"), e.value
                    }
                }, {
                    key: "removeFake",
                    value: function () {
                        this.container && this.fakeElem && this.container.removeChild(this.fakeElem), this.fakeElem = null
                    }
                }, {
                    key: "destory",
                    value: function () {
                        this.removeFake(), this.text = "", this.callback = null
                    }
                }]), e
            }(),
            pe = {
                bind: function (e, t) {
                    e._clipBoard = e._clipBoard ? e._clipBoard : new de(e), "callback" === t.arg ? e._clipBoard.setVal("callback", t.value) : (e._clipBoard.setVal("text", t.value), e.addEventListener("click", e._clipBoard.selectFake.bind(e._clipBoard)))
                }, update: function (e, t) {
                    "callback" === t.arg ? e._clipBoard.setVal("callback", t.value) : e._clipBoard.setVal("text", t.value)
                }, unbind: function (e, t) {
                    e._clipBoard && (e.removeEventListener("click", e._clipBoard.selectFake), e._clipBoard.destory()), delete e._clipBoard
                }
            },
            fe = (n("28a5"), n("6d67"), n("f499")),
            he = n.n(fe);

        function me(e) {
            for (var t = he()(e), n = "", r = 0; r < t.length; r++) {
                var i = t.charCodeAt(r) - 1;
                n += String.fromCharCode(i)
            }
            return n
        }

        function ve(e) {
            var t = e.universalUrl,
                n = e.popMessage,
                r = void 0 === n ? "" : n,
                i = e.icon,
                a = void 0 === i ? "" : i;
            if (!t) return "";
            var o = {
                timestamp: (new Date).getTime(),
                from: "h5_base",
                universal_url: t,
                pop_message: window.encodeURIComponent(r),
                icon: a
            };
            return window.btoa(me(o))
        }
        var be = n("21fd");

        function ge() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return d()({}, e, Object(be["c"])(e))
        }

        function ye(e) {
            return e.title || e.mainTitle || e.subTitle || e.itemTitle || e.itemshortTitle || e.shortTitle || e.album_name || e.videoName || ""
        }

        function we(e, t) {
            var n = Object(S["p"])(Object(D["a"])({}, e, {
                    subtype: t,
                    forceSchema: !0
                })),
                r = n.url;
            e.video && (e = ge(e.video));
            var i = ye(e);
            if (!i) return "";
            var a = ve({
                universalUrl: r,
                popMessage: i,
                icon: Object(x["l"])(e.image || e.imageUrl || e.itemHImage || e.album_pic_url || "")
            });
            return a
        }
        var ke = {
                bind: function (e, t) {
                    if (Object(S["j"])() && t.value && t.value.video)
                        if ("callback" === t.arg) e._clipBoard && e._clipBoard.setVal("callback", t.value);
                        else try {
                            var n = t.value,
                                r = n.video,
                                i = n.subtype,
                                a = ge(r);
                            if (!a || !i) return;
                            e._clipBoard = e._clipBoard ? e._clipBoard : new de(e);
                            var o = we(a, i);
                            e._clipBoard.setVal("text", o), e.addEventListener("click", e._clipBoard.selectFake.bind(e._clipBoard))
                        } catch (c) {
                            console.log("copyCode error", c)
                        }
                }, update: function (e, t) {
                    if (Object(S["j"])())
                        if ("callback" === t.arg) e._clipBoard && e._clipBoard.setVal("callback", t.value);
                        else {
                            var n = t.value,
                                r = n.video,
                                i = n.subtype;
                            if (!r || !i) return;
                            var a = ge(r);
                            if (!a.tvid) return;
                            var o = we(a, i);
                            e._clipBoard && e._clipBoard.setVal("text", o)
                        }
                }, unbind: function (e, t) {
                    e._clipBoard && (e.removeEventListener("click", e._clipBoard.selectFake), e._clipBoard.destory()), delete e._clipBoard
                }
            },
            _e = n("dff0"),
            xe = (n("96cf"), n("3b8d"));
        n("7f7f");

        function Ne() {
            var e;
            null == window.MutationObserver && (e = function () {
                function e(e) {
                    this.callBack = e
                }
                return e.prototype.observe = function (e, t) {
                    return this.element = e, this.interval = setInterval(function (e) {
                        return function () {
                            var t;
                            if (t = e.element.innerHTML, t !== e.oldHtml) return e.oldHtml = t, e.callBack.apply(null)
                        }
                    }(this), 200), this.interval
                }, e.prototype.disconnect = function () {
                    return window.clearInterval(this.interval)
                }, e
            }(), window.MutationObserver = e)
        }
        Ne();
        var Ie = ["border", "borderRadius", "color", "background", "width", "height", "backgroundImage"],
            Oe = document.createElement("style");

        function je(e) {
            var t = window.getComputedStyle(e, null) || {},
                n = e.style;
            return {
                el: e,
                computedStyle: t,
                elStyle: n
            }
        }

        function Ce(e) {
            var t = e.el,
                n = e.computedStyle,
                r = e.elStyle,
                i = "".concat(t.tagName, "-").concat(s()()),
                a = "." + i + "{";
            for (var o in n) a += "".concat(o, ":").concat(n[o], ";");
            return {
                style: a + "}",
                name: i,
                el: t,
                elStyle: r,
                computedStyle: n
            }
        }

        function Ae(e) {
            var t = e.el,
                n = e.name,
                r = e.style,
                i = (e.elStyle, e.computedStyle),
                a = JSON.parse(he()(i));
            return t.style.display = "block", Ie.forEach(function (e) {
                t.style[e] = a[e]
            }), setTimeout(function () {
                t.className = n
            }, 200), r
        }

        function Se(e) {
            document.getElementsByTagName("HEAD").item(0).appendChild(Oe), Oe.innerHTML += "\n" + e
        }
        Oe.type = "text/css";
        var Ee = Object(x["O"])(je, Ce, Ae, Se);

        function Pe(e, t) {
            Ee(e), t || e.childNodes && e.childNodes.forEach(function (e) {
                "A" === e.tagName && Pe(e, !0)
            })
        }
        var He = function () {
                function e(t) {
                    Object(se["a"])(this, e), this.observer = new MutationObserver(this.mutationHandle.bind(this)), this.observer.observe(t, this.getConfig())
                }
                return Object(le["a"])(e, [{
                    key: "getConfig",
                    value: function () {
                        return {
                            attributes: !0,
                            attributeOldValue: !0,
                            subtree: !0,
                            childList: !0,
                            characterData: !0,
                            characterDataOldValue: !0
                        }
                    }
                }, {
                    key: "mutationHandle",
                    value: function (e) {
                        e.forEach(function (e) {})
                    }
                }, {
                    key: "destory",
                    value: function () {
                        this.observer.disconnect()
                    }
                }]), e
            }(),
            Te = function () {
                function e(t) {
                    Object(se["a"])(this, e), this.el = t, this.initDisplay = this.el.style.display
                }
                return Object(le["a"])(e, [{
                    key: "trySolutions",
                    value: function () {}
                }, {
                    key: "detect",
                    value: function () {
                        var e = Object(xe["a"])(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(x["ab"])(2e3);
                                case 2:
                                    return e.abrupt("return", Object(x["W"])(this.el));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "addImportant",
                    value: function () {
                        this.el.style.cssText += "display: ".concat(this.initDisplay, " !important;")
                    }
                }, {
                    key: "rmoveSensitiveClass",
                    value: function () {
                        Pe(this.el)
                    }
                }]), e
            }();

        function Le(e, t) {
            var n = this;
            e.forEach(function (e) {
                e.target === n && !e.contentRect.width && e.contentRect.height
            })
        }
        var qe = {
                bind: function (e, t, n) {
                    e.observer = new He(e), e.resizeObserver = new z["a"](Le.bind(e)).observe(e);
                    var r = new Te(e);
                    setTimeout(function () {
                        Object(_e["i"])(e) || r.addImportant()
                    }, 5e3)
                }, unbind: function (e, t) {
                    e.observer.destory(), delete e.observer, delete e.resizeObserver
                }
            },
            Re = n("e814"),
            Be = n.n(Re);

        function Ue(e, t, n) {
            var r = t.video,
                i = t.context;
            return r && 1 === Be()(r.interactionType) ? (i && i.$dispatch && i.$dispatch("GlobalCallapp", "toPlay", {
                extralOptions: {
                    aid: r.albumId || r.aid,
                    tvid: r.qipuId || r.tvid,
                    cid: r.cid,
                    vid: r.vid,
                    video: r
                },
                subtype: "H5hdjf_1549",
                event: n,
                showCopyCode: !1
            }), "done") : "next"
        }

        function Me(e, t, n) {
            return Object(k["A"])(n, e), "done"
        }

        function De() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function () {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e].apply(t, arguments);
                    if ("done" === n) break
                }
            }
        }
        var Ve = new _["a"](function (e, t, n) {
                var r = t.video,
                    i = t.context;
                r.play || (n.preventDefault(), De(Ue, Me)(e, {
                    video: r,
                    context: i
                }, n))
            }, {
                key: "video_href_click"
            }),
            $e = {
                bind: function (e, t, n) {
                    var r = t.value;
                    Ve.observe(e, {
                        video: r,
                        context: n.context
                    })
                }, unbind: function (e, t) {
                    Ve.unobserve(e)
                }
            };
        r["default"].directive("scroll", v), r["default"].directive("pingback", O), r["default"].directive("show-pingback", P), r["default"].directive("search-pingback", T), r["default"].directive("lazyload", R), r["default"].directive("prevent", B), r["default"].directive("play", ue), r["default"].directive("clipboard", pe), r["default"].directive("copy-callapp", ke), r["default"].directive("protect", qe), r["default"].directive("video-href", $e)
    }, f4c6: function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("AuraLink", e._b({
                    directives: [{
                        name: "pingback",
                        rawName: "v-pingback",
                        value: "607051_home",
                        expression: "'607051_home'"
                    }],
                    class: e.logoClass[e.abSample],
                    attrs: {
                        title: "爱奇艺"
                    }
                }, "AuraLink", e.$attrs, !1))
            },
            i = [],
            a = n("c415"),
            o = {
                mixins: [a["a"]],
                data: function () {
                    return {
                        logoClass: {
                            a: "headerLogo-iqiyi",
                            b: "logo-iqiyi"
                        }
                    }
                }
            },
            c = o,
            u = n("2877"),
            s = Object(u["a"])(c, r, i, !1, null, null, null);
        t["a"] = s.exports
    }, fd12: function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("div", {
                    staticClass: "cover"
                }), n("section", {
                    staticClass: "m-popup"
                }, [n("div", {
                    staticClass: "popup-info",
                    class: {
                        textInfoLeft: "left" == e.infoStyle
                    }
                }, [e.title ? n("div", {
                    staticClass: "c-title"
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.title)
                    }
                }), e._t("title"), n("a", {
                    staticClass: "popup-close",
                    class: {
                        dn: !e.isCloseShow
                    },
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: function (t) {
                            return e.$emit("closeBtnClick", t)
                        }
                    }
                }, [n("i", {
                    staticClass: "c-glyphicon c-glyphicon-guideClose"
                })])], 2) : e._e(), e.info ? n("div", {
                    staticClass: "c-des"
                }, [n("div", {
                    staticClass: "c-info",
                    domProps: {
                        innerHTML: e._s(e.info)
                    }
                })]) : e._e()]), n("div", {
                    staticClass: "popup-btn",
                    class: {
                        "popup-btn-only": "none" == e.btnStyle,
                        "single-btn": "single" == e.btnStyle
                    }
                }, [e.leftButtonText ? n("a", {
                    staticClass: "c-btn-link",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function (t) {
                            return e.$emit("leftButtonClick", t)
                        }
                    }
                }, [e._v("\n        " + e._s(e.leftButtonText) + "\n      ")]) : e._e(), e.rightButtonText ? n("a", {
                    staticClass: "c-btn-link",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function (t) {
                            return e.$emit("rightButtonClick", t)
                        }
                    }
                }, [e._v("\n        " + e._s(e.rightButtonText) + "\n      ")]) : e._e()])])])
            },
            i = [],
            a = {
                name: "AuraPopup",
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    info: {
                        type: String,
                        default: ""
                    },
                    leftButtonText: {
                        type: String,
                        default: ""
                    },
                    rightButtonText: {
                        type: String,
                        default: ""
                    },
                    infoStyle: {
                        type: String,
                        default: ""
                    },
                    isCloseShow: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    btnStyle: function () {
                        return "" !== this.leftButtonText && "" !== this.rightButtonText ? "double" : "" !== this.leftButtonText && "" === this.rightButtonText ? "single" : ("" === this.leftButtonText && this.rightButtonText, "none")
                    }
                }
            },
            o = a,
            c = n("2877"),
            u = Object(c["a"])(o, r, i, !1, null, null, null);
        t["a"] = u.exports
    }, fe90: function (e, t, n) {
        "use strict";
        t["a"] = window
    }, ff9b: function (e, t, n) {
        "use strict";
        var r = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", {
                    staticClass: "m-pic"
                }, [n("ul", {
                    staticClass: "m-pic-list",
                    class: {
                        "m-sliding-list": e.isShowSlide
                    }
                }, [e._l(e.showVideos, function (t, r) {
                    return n("li", {
                        directives: [{
                            name: "copy-callapp",
                            rawName: "v-copy-callapp",
                            value: {
                                video: t,
                                subtype: e.subtype
                            },
                            expression: "{video, subtype}"
                        }, {
                            name: "play",
                            rawName: "v-play",
                            value: t.play,
                            expression: "video.play"
                        }, {
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.itemPingBack || e.itempingback,
                            expression: "video.itemPingBack || itempingback"
                        }],
                        key: t.qipuId + "-" + r,
                        class: {
                            selected: e.curQipuId === t.qipuId
                        },
                        style: e.liStyle,
                        on: {
                            click: function (n) {
                                return e.$emit("click", t, r, n)
                            }
                        }
                    }, [e._t("top", null, {
                        video: t
                    }), n("div", {
                        staticClass: "piclist-img"
                    }, [e._t("img", [e.lazyload ? n("AuraVideo", {
                        directives: [{
                            name: "lazyload",
                            rawName: "v-lazyload",
                            value: t.imageUrl,
                            expression: "video.imageUrl"
                        }],
                        staticClass: "piclist-link",
                        style: {
                            "background-image": "url('//www.iqiyipic.com/common/fix/h5-aura-img/imgLogo-default.png'})"
                        },
                        attrs: {
                            href: t.play ? "javascript:void(0)" : "" + t.pageUrl,
                            video: t,
                            "corner-status": e.cornerStatus
                        }
                    }) : n("AuraVideo", {
                        staticClass: "piclist-link",
                        style: {
                            "background-image": "url(" + (t.imageUrl || "//www.iqiyipic.com/common/fix/h5-aura-img/imgLogo-default.png") + ")"
                        },
                        attrs: {
                            href: t.play ? "javascript:void(0)" : "" + t.pageUrl,
                            video: t,
                            "corner-status": e.cornerStatus
                        }
                    })], {
                        video: t
                    })], 2), e.hideTitle ? e._e() : n("div", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.itemPingTitle || e.itempingback,
                            expression: "video.itemPingTitle || itempingback"
                        }],
                        staticClass: "piclist-title"
                    }, [e._t("title", [t.mainTitle ? n("div", {
                        class: ["c-title", {
                            "text-ellipsis": e.ellipsis
                        }]
                    }, [n("a", {
                        directives: [{
                            name: "video-href",
                            rawName: "v-video-href",
                            value: t,
                            expression: "video"
                        }],
                        attrs: {
                            href: t.play ? "javascript:void(0)" : "" + t.pageUrl,
                            title: t[e.mainTitleField] || t.mainTitle || t.title || t.subTitle || ""
                        }
                    }, [e._v("\n              " + e._s(t[e.mainTitleField] || t.mainTitle) + "\n            ")])]) : e._e(), t.subtitle && !e.hideSubTitle ? n("div", {
                        class: ["c-info", {
                            "text-ellipsis": e.ellipsis
                        }]
                    }, [n("a", {
                        directives: [{
                            name: "video-href",
                            rawName: "v-video-href",
                            value: t,
                            expression: "video"
                        }],
                        attrs: {
                            href: t.play ? "javascript:void(0)" : "" + t.pageUrl,
                            title: t.subtitle
                        }
                    }, [e._v("\n              " + e._s(t.subtitle) + "\n            ")])]) : e._e()], {
                        video: t
                    }), e._t("titleBottom", null, {
                        video: t
                    })], 2), e._t("bottom", null, {
                        video: t
                    })], 2)
                }), e._t("extra", null, {
                    videos: e.videos
                })], 2), e._t("dot", null, {
                    videos: e.videos
                })], 2)
            },
            i = [],
            a = (n("6d67"), n("d25f"), n("c5f6"), n("8296")),
            o = {
                name: "AuraVideoList",
                props: {
                    subtype: {
                        type: [String, Number],
                        default: ""
                    },
                    videos: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    ellipsis: {
                        type: Boolean,
                        default: !0
                    },
                    hideSubTitle: {
                        type: Boolean,
                        default: !1
                    },
                    hideTitle: {
                        type: Boolean,
                        default: !1
                    },
                    cornerStatus: {
                        type: Object,
                        default: function () {
                            return {}
                        }
                    },
                    mainTitleField: {
                        type: String,
                        default: ""
                    },
                    curQipuId: {
                        type: Number,
                        default: 0
                    },
                    isShowSlide: {
                        type: Boolean,
                        default: !0
                    },
                    itempingback: {
                        type: [String, Object],
                        default: ""
                    },
                    vfrmblk: {
                        type: String,
                        default: ""
                    },
                    lazyload: {
                        type: Boolean,
                        default: !1
                    },
                    liStyle: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    showVideos: function () {
                        var e = this;
                        return this.videos.filter(function (e) {
                            return e.mainTitle
                        }), this.vfrmblk && this.videos.map(function (t) {
                            return t.pageUrl = a["k"].addQuery(t.pageUrl, {
                                vfrmblk: e.vfrmblk
                            }), t
                        }), this.videos
                    }
                }
            },
            c = o,
            u = n("2877"),
            s = Object(u["a"])(c, r, i, !1, null, null, null);
        t["a"] = s.exports
    }
});