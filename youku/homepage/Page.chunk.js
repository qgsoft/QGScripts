(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        128: function (e, t, a) {
            "use strict";
            var n = a(0),
                c = a.n(n),
                o = (a(301), a(3));
            a(302), Object(o.connect)((function (e) {
                return {
                    pathname: e.page.pathname
                }
            }))((function (e) {
                return c.a.createElement("div", {
                    className: "pageFooter"
                }, c.a.createElement("div", null, "Copyright\xa92019 \u4f18\u9177 youku.com \u7248\u6743\u6240\u6709"), c.a.createElement("div", null, c.a.createElement("a", {
                    target: "_blank",
                    href: "//c.youku.com/piracy",
                    style: {
                        marginRight: "2px"
                    }
                }, "\u53cd\u76d7\u7248\u76d7\u94fe\u58f0\u660e"), c.a.createElement("a", {
                    href: "http://beian.miit.gov.cn/state/outPortal/loginPortal.action",
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, "\u4eacICP\u8bc1060288\u53f7"), c.a.createElement("a", {
                    href: "http://www.hd315.gov.cn/beian/view.asp?bianhao=010202006082400023",
                    target: "_blank"
                })))
            })), a(2), t.a = function (e) {
                return c.a.createElement("div", null, c.a.createElement("div", {
                    id: "yk-header"
                }), c.a.createElement("div", {
                    id: "app"
                }, e.children))
            }
        }, 129: function (e, t, a) {
            "use strict";
            a.r(t),
                function (e, n) {
                    var c = a(0),
                        o = a.n(c),
                        r = a(29),
                        i = a.n(r),
                        s = a(3),
                        l = a.n(s),
                        u = a(23),
                        m = a(59),
                        p = a(11),
                        h = a(85);
                    a(128);
                    t.default = function () {
                        var e = l()({
                            history: Object(p.a)(),
                            initialState: {
                                page: {
                                    pageData: window.__INITIAL_DATA__,
                                    hostname: window.location.hostname,
                                    search: location.search,
                                    pathname: location.pathname,
                                    mtConfig: window.mtConfig,
                                    env: window.__ENV__
                                }
                            }
                        });
                        h.a.forEach((function (t) {
                            e.model(t)
                        })), e.router((function () {
                            return o.a.createElement(u.BrowserRouter, null, o.a.createElement(u.Switch, null, m.a.map((function (e) {
                                var t = e.path,
                                    a = e.exact,
                                    n = e.component;
                                return o.a.createElement(u.Route, {
                                    key: t,
                                    path: t,
                                    exact: a,
                                    component: n
                                })
                            }))))
                        }));
                        var t = e.start();
                        window._SSRERR_ ? i.a.render(o.a.createElement(t, null), document.getElementById("app")) : i.a.hydrate(o.a.createElement(t, null), document.getElementById("app"))
                    }()
                }.call(this, a(86)(e), a(17))
        }, 183: function (e, t) {}, 2: function (e, t, a) {
            "use strict";
            a.d(t, "h", (function () {
                return n
            })), a.d(t, "i", (function () {
                return c
            })), a.d(t, "g", (function () {
                return o
            })), a.d(t, "f", (function () {
                return r
            })), a.d(t, "d", (function () {
                return i
            })), a.d(t, "c", (function () {
                return s
            })), a.d(t, "b", (function () {
                return l
            })), a.d(t, "a", (function () {
                return u
            })), a.d(t, "e", (function () {
                return p
            }));
            var n = function (e, t) {
                    var a = r(t).refer,
                        n = e.action.type,
                        c = !1,
                        o = navigator.userAgent;
                    switch (o && /baiduboxapp/i.test(o) && (c = !0), a && null !== a.match("ykty-cooperation") && (c = !0), c = !0, n) {
                    case "JUMP_TO_SHOW":
                    case "JUMP_TO_VIDEO":
                        return "//m.youku.com/".concat(!0 === c ? "alipay_video" : "video", "/id_").concat(e.action.extra.value, ".html").concat(t);
                    case "JUMP_TO_PLAY_LIST":
                        return "//m.youku.com/".concat(!0 === c ? "alipay_video" : "video", "/id_").concat(e.action.extra.videoId, "==.html?").concat(t);
                    case "JUMP_TO_URL":
                    case "JUMP_TO_NATIVE":
                        return e.action.extra.value + t;
                    default:
                        console.log("\u6682\u4e0d\u652f\u6301\u6b64\u7c7b\u578b\u8df3\u8f6c".concat(n))
                    }
                },
                c = a(237),
                o = function (e) {
                    return Object.keys(e).map((function (t) {
                        return t + "=" + e[t]
                    })).join("&")
                };

            function r(e) {
                if (e && -1 === e.indexOf("?")) return {};
                for (var t = {}, a = e.substring(e.indexOf("?") + 1).split("&"), n = 0; n < a.length; n++) {
                    var c = a[n].split("=");
                    c[0] && c[1] && (t[c[0]] = c[1])
                }
                return t
            }
            var i = {
                    "\u72ec\u64ad": "singleIcon",
                    VIP: "vipIcon",
                    "\u4e13\u9898": "specialIcon",
                    "\u5e7f\u544a": "advertiseIcon",
                    "VIP\u534a\u4ef7": "vipIcon",
                    HDR: "vipIcon",
                    "\u675c\u6bd4": "vipIcon",
                    "\u9996\u64ad": "specialIcon",
                    "\u5168\u7f51\u9996\u64ad": "specialIcon",
                    default: "defaultIcon"
                },
                s = {
                    "\u9996\u9875": "https://www.youku.com",
                    "\u5267\u96c6": "https://tv.youku.com/",
                    "\u7535\u5f71": "https://movie.youku.com/",
                    "\u4f1a\u5458": "https://vip.youku.com",
                    "\u7efc\u827a": "https://zy.youku.com/",
                    "\u97f3\u4e50": "https://music.youku.com",
                    "\u52a8\u6f2b": "https://comic.youku.com/",
                    "\u5c11\u513f": "https://child.youku.com/",
                    "\u8d44\u8baf": "https://news.youku.com",
                    "\u7eaa\u5b9e": "https://jilupian.youku.com/",
                    "\u8d22\u7ecf": "https://finance.youku.com/",
                    "\u4f53\u80b2": "https://sports.youku.com",
                    "\u6559\u80b2": "https://edu.youku.com/",
                    "\u5a31\u4e50": "https://ent.youku.com/",
                    "\u6e38\u620f": "https://game.youku.com/",
                    "\u79d1\u6280": "https://tech.youku.com/",
                    "\u641e\u7b11": "https://fun.youku.com/",
                    "\u751f\u6d3b": "https://life.youku.com/",
                    "\u65c5\u6e38": "https://travel.youku.com",
                    "\u6c7d\u8f66": "https://auto.youku.com/",
                    "\u65f6\u5c1a": "https://fashion.youku.com/",
                    "\u76f4\u64ad": "https://live.youku.com/",
                    "\u8d44\u8baf\xb7\u5a31\u4e50": "https://ent.youku.com/",
                    "\u5a31\u4e50\u73b0\u573a": "https://ent.youku.com/",
                    "\u7eaa\u5b9e\xb7\u6587\u5316": "https://jilupian.youku.com/"
                },
                l = function () {
                    window.addEventListener("load", (function () {
                        setTimeout((function () {
                            var e = {
                                    actid: "948c2d6816f041db957b64588bed46cc",
                                    actpage: "82bfa7986f934252a019655727e1e578",
                                    isYouku: !0
                                },
                                t = window.performance.timing;
                            try {
                                window.goldlog && window.goldlog.record("/yt/ykpage.standard.performance", "OTHER", o({
                                    actid: e.actid,
                                    actpage: e.actpage,
                                    isyouku: e.isYouku,
                                    from: e.from,
                                    refer: window.fromText,
                                    firstPaint: t.domLoading - t.navigationStart,
                                    readyTime: t.domComplete - t.navigationStart,
                                    loadTime: t.loadEventEnd - t.navigationStart
                                }), "GET")
                            } catch (a) {
                                console.log(a)
                            }
                        }), 100)
                    }))
                },
                u = {
                    tysx: (window && window.navigator && window.navigator.userAgent || "").toLowerCase().indexOf("newtysx") > 1
                };

            function m(e) {
                return ("object" === typeof e || "function" === typeof e) && null !== e
            }
            var p = function e(t) {
                if (!m(t)) throw new Error("obj \u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\uff01");
                var a = Array.isArray(t) ? [] : {},
                    n = Object.getOwnPropertySymbols(t);
                for (var c in n.length > 0 && n.forEach((function (n) {
                    a[n] = m(t[n]) ? e(t[n]) : t[n]
                })), t) a[c] = m(t[c]) ? e(t[c]) : t[c];
                return a
            }
        }, 235: function (e, t, a) {}, 236: function (e, t, a) {}, 239: function (e, t, a) {}, 283: function (e, t, a) {}, 284: function (e, t, a) {}, 285: function (e, t, a) {}, 286: function (e, t, a) {}, 287: function (e, t, a) {}, 288: function (e, t, a) {}, 289: function (e, t, a) {}, 291: function (e, t, a) {}, 292: function (e, t, a) {}, 293: function (e, t, a) {}, 294: function (e, t, a) {}, 295: function (e, t, a) {}, 296: function (e, t, a) {}, 297: function (e, t, a) {}, 298: function (e, t, a) {}, 299: function (e, t, a) {}, 300: function (e, t, a) {}, 302: function (e, t, a) {}, 59: function (e, t, a) {
            "use strict";
            var n = a(4),
                c = a(5),
                o = a(7),
                r = a(6),
                i = a(8),
                s = a(0),
                l = a.n(s),
                u = a(125),
                m = a.n(u),
                p = a(3),
                h = (a(235), a(126)),
                d = a.n(h),
                y = (a(236), a(2));
            a(239);
            var f, v, g, k = function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            isClient: !1
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.setState({
                                isClient: !0,
                                startX: "",
                                startY: ""
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props.comData;
                            return l.a.createElement("div", {
                                className: "CarouselContainer"
                            }, l.a.createElement(d.a, {
                                autoplay: !0,
                                customPaging: function (e) {
                                    return l.a.createElement("span", {
                                        className: "sliderDotItem"
                                    })
                                }
                            }, Object.keys(t.itemMap).map((function (a) {
                                var n = t.itemMap[a];
                                return l.a.createElement("a", {
                                    key: "Carousel".concat(a),
                                    onTouchStart: function (t) {
                                        e.setState({
                                            startX: t.touches ? t.touches[0].pageX : t.clientX,
                                            startY: t.touches ? t.touches[0].pageY : t.clientY
                                        })
                                    }, onTouchEnd: function (t) {
                                        t.changedTouches[0].pageX === e.state.startX && t.changedTouches[0].pageY === e.state.startY && (location.href = Object(y.h)(n, e.props.search) + "".concat(-1 !== Object(y.h)(n, e.props.search).indexOf("?") ? "&" : "?", "spm=").concat(t.target.getAttribute("data-spm-anchor-id")))
                                    }
                                }, l.a.createElement("div", {
                                    className: "sliderContainer"
                                }, l.a.createElement("img", {
                                    src: e.state.isClient ? Object(y.i)(n.img) : n.img,
                                    alt: n.title,
                                    className: "carouselImg"
                                }), l.a.createElement("div", {
                                    className: "sliderDescContainer"
                                }, n.mark && n.mark.text ? l.a.createElement("div", {
                                    className: "".concat(n.mark && y.d[n.mark.text] || y.d.default, " sliderMark")
                                }, n.mark && n.mark.text) : "", l.a.createElement("span", {
                                    className: "sliderTitle"
                                }, n.title)), l.a.createElement("div", {
                                    className: "sliderLayer"
                                })))
                            }))))
                        }
                    }]), t
                }(s.Component),
                b = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search,
                        pathname: e.page.pathname
                    }
                }))(k),
                w = (a(283), Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))((function (e) {
                    var t = e.comData;
                    return l.a.createElement("div", {
                        className: "paaContainer"
                    }, Object.keys(t.itemMap).map((function (a) {
                        var n = t.itemMap[a];
                        return l.a.createElement("a", {
                            href: Object(y.h)(n, e.search),
                            key: "paa".concat(n.title)
                        }, l.a.createElement("div", {
                            className: "defaultItemBg"
                        }, l.a.createElement("img", {
                            src: Object(y.i)(n.img),
                            alt: n.title,
                            className: "paaImg",
                            suppressHydrationWarning: !0
                        }), l.a.createElement("div", {
                            className: "pLayer"
                        }), n.mark && n.mark.text ? l.a.createElement("div", {
                            className: y.d[n.mark.text] || y.d.default
                        }, " ", n.mark.text) : "", l.a.createElement("div", {
                            className: "pSummary",
                            style: n.summary && n.summary.match(/\./) ? {
                                color: "ff6600",
                                fontWeight: "bold"
                            } : {}
                        }, n.summary)), l.a.createElement("div", {
                            className: "pName paaName"
                        }, n.title), l.a.createElement("div", {
                            className: "pDesc paaName"
                        }, n.subtitle))
                    })))
                }))),
                E = (a(284), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            firstArr: [],
                            start: 0,
                            end: "\u6b63\u5728\u70ed\u64ad" === e.title ? 6 : 4,
                            arr: [],
                            itemNum: "\u6b63\u5728\u70ed\u64ad" === e.title ? 6 : 4,
                            isClient: !1
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.props.comData,
                                t = [];
                            Object.keys(e.itemMap).map((function (a) {
                                t.push(e.itemMap[a])
                            })), this.setState({
                                arr: t,
                                firstArr: t.slice(this.state.start, this.state.end)
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            this.setState({
                                isClient: !0
                            })
                        }
                    }, {
                        key: "changeList",
                        value: function () {
                            var e = this.state,
                                t = e.arr,
                                a = e.itemNum;
                            if (t.length <= a) this.props.dispatch({
                                type: "ykToast/showDelay",
                                payload: {
                                    content: "\u6682\u65e0\u53ef\u6362\u5185\u5bb9"
                                }
                            });
                            else {
                                var n = this.state.start + 4,
                                    c = this.state.end + 4;
                                n >= this.state.arr.length && (n = 0, c = 4, this.setState({
                                    firstArr: this.state.arr.slice(n, c)
                                })), this.state.arr.slice(n, c).length < 4 ? this.setState({
                                    start: n,
                                    end: c,
                                    firstArr: this.state.arr.slice(n - (4 - this.state.arr.slice(n, c).length), c)
                                }) : this.setState({
                                    start: n,
                                    end: c,
                                    firstArr: this.state.arr.slice(n, c)
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props;
                            return l.a.createElement("div", {
                                className: "pbbContainer"
                            }, this.state.firstArr.map((function (a) {
                                return l.a.createElement("a", {
                                    href: Object(y.h)(a, t.search),
                                    key: "pbb".concat(a.title)
                                }, l.a.createElement("div", {
                                    className: "pbbDescContainer"
                                }, l.a.createElement("div", {
                                    className: "defaultItemBg"
                                }, l.a.createElement("img", {
                                    src: e.state.isClient ? Object(y.i)(a.img) : a.img,
                                    alt: a.title,
                                    className: "pbbImg",
                                    suppressHydrationWarning: !0
                                }), l.a.createElement("div", {
                                    className: "pLayer"
                                }), a.mark && a.mark.text ? l.a.createElement("div", {
                                    className: y.d[a.mark.text] || y.d.default
                                }, " ", a.mark.text) : "", l.a.createElement("div", {
                                    className: "pSummary",
                                    style: a.summary && a.summary.match(/\./) ? {
                                        color: "ff6600"
                                    } : {}
                                }, a.summary)), l.a.createElement("div", {
                                    className: "pName pbbName"
                                }, a.title), l.a.createElement("div", {
                                    className: "pDesc pbbName"
                                }, a.subtitle)))
                            })), l.a.createElement("div", {
                                className: "bottomContainer",
                                style: y.c[t.title] ? {
                                    display: "flex"
                                } : {
                                    display: "none"
                                }
                            }, l.a.createElement("a", {
                                href: y.c[t.title]
                            }, l.a.createElement("div", {
                                className: "goToChannel"
                            }, "\u8fdb\u5165", "\u7eaa\u5b9e\xb7\u6587\u5316" === t.title ? "\u7eaa\u5b9e" : "\u5a31\u4e50\u73b0\u573a" === t.title ? "\u5a31\u4e50" : t.title, "\u9891\u9053", l.a.createElement("img", {
                                src: "https://img.alicdn.com/tfs/TB1ctykkbr1gK0jSZR0XXbP8XXa-24-24.png",
                                alt: "",
                                className: "toChannelImg"
                            }))), l.a.createElement("div", {
                                className: "goToChannel",
                                onClick: function () {
                                    e.changeList()
                                }
                            }, "\u6362\u4e00\u6362", l.a.createElement("img", {
                                src: "https://img.alicdn.com/tfs/TB1nF9mkbY1gK0jSZTEXXXDQVXa-24-24.png",
                                alt: "",
                                className: "toChannelImg"
                            }))))
                        }
                    }]), t
                }(s.Component)),
                O = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(E),
                j = (a(285), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            firstArr: [],
                            start: 0,
                            end: 6,
                            arr: [],
                            itemNum: 6
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.props.comData,
                                t = [];
                            Object.keys(e.itemMap).map((function (a) {
                                t.push(e.itemMap[a])
                            })), this.setState({
                                arr: t,
                                firstArr: t.slice(this.state.start, this.state.end)
                            })
                        }
                    }, {
                        key: "changeList",
                        value: function () {
                            var e = this.state,
                                t = e.arr,
                                a = e.itemNum;
                            if (t.length <= a) this.props.dispatch({
                                type: "ykToast/showDelay",
                                payload: {
                                    content: "\u6682\u65e0\u53ef\u6362\u5185\u5bb9"
                                }
                            });
                            else {
                                var n = this.state.start + 6,
                                    c = this.state.end + 6;
                                n >= this.state.arr.length && (n = 0, c = 6, this.setState({
                                    firstArr: this.state.arr.slice(n, c)
                                })), this.state.arr.slice(n, c).length < 6 ? this.setState({
                                    start: n,
                                    end: c,
                                    firstArr: this.state.arr.slice(n - (6 - this.state.arr.slice(n, c).length), c)
                                }) : this.setState({
                                    start: n,
                                    end: c,
                                    firstArr: this.state.arr.slice(n, c)
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props;
                            return l.a.createElement("div", {
                                className: "pccContainer"
                            }, this.state.firstArr.map((function (t) {
                                return l.a.createElement("a", {
                                    className: "pccItem",
                                    href: Object(y.h)(t, e.props.search),
                                    key: "pcc".concat(t.title).concat(t.subtitle)
                                }, l.a.createElement("div", {
                                    className: "pccDescContainer"
                                }, l.a.createElement("div", {
                                    className: "defaultItemBg"
                                }, l.a.createElement("img", {
                                    src: Object(y.i)(t.img),
                                    alt: t.title,
                                    className: "pccImg",
                                    suppressHydrationWarning: !0
                                }), l.a.createElement("div", {
                                    className: "pLayer"
                                }), t.mark && t.mark.text ? l.a.createElement("div", {
                                    className: y.d[t.mark.text] || y.d.default
                                }, " ", t.mark.text) : "", l.a.createElement("div", {
                                    className: "pSummary",
                                    style: t.summary && t.summary.match(/\./) ? {
                                        color: "ff6600"
                                    } : {}
                                }, t.summary)), l.a.createElement("div", {
                                    className: "pName pccName"
                                }, t.title), l.a.createElement("div", {
                                    className: "pDesc pccName"
                                }, t.subtitle)))
                            })), l.a.createElement("div", {
                                className: "bottomContainer",
                                style: y.c[t.title] ? {
                                    display: "flex"
                                } : {
                                    display: "none"
                                }
                            }, l.a.createElement("a", {
                                href: y.c[t.title]
                            }, l.a.createElement("div", {
                                className: "goToChannel"
                            }, "\u8fdb\u5165", t.title, "\u9891\u9053", l.a.createElement("img", {
                                src: "https://img.alicdn.com/tfs/TB1ctykkbr1gK0jSZR0XXbP8XXa-24-24.png",
                                alt: "",
                                className: "toChannelImg"
                            }))), l.a.createElement("div", {
                                className: "goToChannel",
                                onClick: function () {
                                    e.changeList()
                                }
                            }, "\u6362\u4e00\u6362", l.a.createElement("img", {
                                src: "https://img.alicdn.com/tfs/TB1nF9mkbY1gK0jSZTEXXXDQVXa-24-24.png",
                                alt: "",
                                className: "toChannelImg"
                            }))))
                        }
                    }]), t
                }(s.Component)),
                N = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(j),
                C = (a(286), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            firstArr: [],
                            start: 0,
                            end: 4,
                            arr: [],
                            isClient: !1,
                            itemNum: 0,
                            showChangList: !1
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.props.comData,
                                t = e.itemNum || 0,
                                a = [];
                            Object.keys(e.itemMap).map((function (t) {
                                a.push(e.itemMap[t])
                            })), this.setState({
                                itemNum: t,
                                end: t,
                                arr: a,
                                firstArr: a.slice(this.state.start, t),
                                showChangList: a.length > t
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            this.setState({
                                isClient: !0
                            })
                        }
                    }, {
                        key: "changeList",
                        value: function () {
                            var e = this.state,
                                t = e.arr,
                                a = e.itemNum;
                            if (t.length <= a) this.props.dispatch({
                                type: "ykToast/showDelay",
                                payload: {
                                    content: "\u6682\u65e0\u53ef\u6362\u5185\u5bb9"
                                }
                            });
                            else {
                                var n = this.state.start + this.state.itemNum,
                                    c = this.state.end + this.state.itemNum;
                                n >= this.state.arr.length && (n = 0, c = this.state.itemNum, this.setState({
                                    firstArr: this.state.arr.slice(n, c)
                                })), this.state.arr.slice(n, c).length < this.state.itemNum ? this.setState({
                                    start: n,
                                    end: c,
                                    firstArr: this.state.arr.slice(n - (this.state.itemNum - this.state.arr.slice(n, c).length), c)
                                }) : this.setState({
                                    start: n,
                                    end: c,
                                    firstArr: this.state.arr.slice(n, c)
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props;
                            return l.a.createElement("div", {
                                className: "pbbContainer vipPbbContainer"
                            }, this.state.firstArr.map((function (a) {
                                return l.a.createElement("a", {
                                    href: Object(y.h)(a, t.search),
                                    key: "pbb".concat(a.title),
                                    className: "chItem"
                                }, l.a.createElement("div", {
                                    className: "pbbDescContainer"
                                }, l.a.createElement("div", {
                                    style: {
                                        position: "relative"
                                    }
                                }, l.a.createElement("img", {
                                    src: e.state.isClient ? Object(y.i)(a.img) : a.img,
                                    alt: a.title,
                                    className: "pbbImg",
                                    suppressHydrationWarning: !0
                                }), l.a.createElement("div", {
                                    className: "pLayer"
                                }), a.mark && a.mark.text ? l.a.createElement("div", {
                                    className: y.d[a.mark.text] || y.d.default
                                }, " ", a.mark.text) : "", l.a.createElement("div", {
                                    className: "pSummary",
                                    style: a.summary && a.summary.match(/\./) ? {
                                        color: "ff6600"
                                    } : {}
                                }, a.summary)), l.a.createElement("div", {
                                    className: "pName pbbName"
                                }, a.title), l.a.createElement("span", {
                                    className: "pDesc pbbName ".concat(a.tags ? "subTitle" : "")
                                }, a.tags ? a.tags[0].title : a.subtitle)))
                            })), l.a.createElement("div", {
                                className: "bottomContainer",
                                style: this.state.showChangList ? {
                                    display: "flex"
                                } : {
                                    display: "none"
                                }
                            }, l.a.createElement("div", {
                                className: "goToChannel",
                                onClick: function () {
                                    e.changeList()
                                }
                            }, t.changeText && t.changeText.text || "\u6362\u4e00\u6362", l.a.createElement("img", {
                                src: "https://img.alicdn.com/tfs/TB1nF9mkbY1gK0jSZTEXXXDQVXa-24-24.png",
                                alt: "",
                                className: "toChannelImg"
                            }))))
                        }
                    }]), t
                }(s.Component)),
                S = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(C),
                _ = (a(287), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            firstArr: [],
                            start: 0,
                            end: 6,
                            arr: []
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.props.comData,
                                t = [];
                            Object.keys(e.itemMap).map((function (a) {
                                t.push(e.itemMap[a])
                            })), this.setState({
                                arr: t
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", {
                                className: "pccContainer pccContainerScroll"
                            }, this.state.arr.map((function (t) {
                                return l.a.createElement("a", {
                                    href: Object(y.h)(t, e.props.search),
                                    key: "pcc".concat(t.title).concat(t.subtitle)
                                }, l.a.createElement("div", {
                                    className: "pccDescContainer"
                                }, l.a.createElement("div", {
                                    style: {
                                        position: "relative"
                                    }
                                }, l.a.createElement("img", {
                                    src: Object(y.i)(t.img),
                                    alt: t.title,
                                    className: "pccImg",
                                    suppressHydrationWarning: !0
                                }), l.a.createElement("div", {
                                    className: "pLayer"
                                }), t.mark && t.mark.text ? l.a.createElement("div", {
                                    className: y.d[t.mark.text] || y.d.default
                                }, " ", t.mark.text) : "", l.a.createElement("div", {
                                    className: "pSummary",
                                    style: t.summary && t.summary.match(/\./) ? {
                                        color: "ff6600"
                                    } : {}
                                }, t.summary)), l.a.createElement("div", {
                                    className: "pName pccName"
                                }, t.title), l.a.createElement("div", {
                                    className: "pDesc pccName"
                                }, t.subtitle)))
                            })))
                        }
                    }]), t
                }(s.Component)),
                x = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(_),
                T = (a(288), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            arr: []
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.props.comData,
                                t = [];
                            Object.keys(e.itemMap).map((function (a) {
                                t.push(e.itemMap[a])
                            })), this.setState({
                                arr: t
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", {
                                className: "pccContainer pccContainerScroll2"
                            }, this.state.arr.map((function (t) {
                                return l.a.createElement("a", {
                                    href: Object(y.h)(t, e.props.search),
                                    key: "pcc".concat(t.title).concat(t.subtitle)
                                }, l.a.createElement("div", {
                                    className: "pccDescContainer"
                                }, l.a.createElement("div", {
                                    style: {
                                        position: "relative"
                                    }
                                }, l.a.createElement("img", {
                                    src: Object(y.i)(t.img),
                                    alt: t.title,
                                    className: "pccImg",
                                    suppressHydrationWarning: !0
                                }), l.a.createElement("div", {
                                    className: "pLayer"
                                }), t.mark && t.mark.text ? l.a.createElement("div", {
                                    className: y.d[t.mark.text] || y.d.default
                                }, " ", t.mark.text) : "", l.a.createElement("div", {
                                    className: "pSummary",
                                    style: t.summary && t.summary.match(/\./) ? {
                                        color: "ff6600"
                                    } : {}
                                }, t.summary)), l.a.createElement("div", {
                                    className: "pName pccName"
                                }, t.title), l.a.createElement("div", {
                                    className: "pDesc pccName"
                                }, t.property.displayformat)))
                            })))
                        }
                    }]), t
                }(s.Component)),
                D = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(T),
                I = (a(289), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            firstArr: [],
                            start: 0,
                            end: 4,
                            arr: [],
                            isClient: !1,
                            itemNum: 0
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.props.comData,
                                t = e.itemNum || 0,
                                a = [];
                            Object.keys(e.itemMap).map((function (t) {
                                a.push(e.itemMap[t])
                            })), this.setState({
                                itemNum: t,
                                end: t,
                                arr: a
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            this.setState({
                                isClient: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", {
                                className: "privContainer totalCount".concat(this.state.itemNum)
                            }, this.state.arr.map((function (t, a) {
                                return l.a.createElement("a", {
                                    href: t.action && t.action.extra && t.action.extra.value || "javascript:void(0);",
                                    key: "pbb".concat(a),
                                    className: "privItem"
                                }, l.a.createElement("div", {
                                    style: {
                                        position: "relative"
                                    }
                                }, l.a.createElement("img", {
                                    src: e.state.isClient ? Object(y.i)(t.img) : t.img,
                                    alt: t.title,
                                    suppressHydrationWarning: !0
                                })))
                            })))
                        }
                    }]), t
                }(s.Component)),
                L = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(I),
                A = a(35),
                X = a.n(A),
                M = a(127);
            a(291);
            g = window.location.search, (v = Object(y.f)(g)).tags && delete v.tags, g = Object(y.g)(v);
            var q = {
                    appKey: 24679788,
                    v: "1.0",
                    ecode: 0,
                    type: "post",
                    dataType: "json"
                },
                B = function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            isVip: !1,
                            vipDesc: "",
                            vipDescLink: "",
                            memberExpire: "",
                            memberName: "",
                            userIcon: "https://gw.alicdn.com/tfs/TB1A1KRaLWG3KVjSZFPXXXaiXXa-84-84.png",
                            userLevel: "",
                            btnText: "",
                            btnLink: ""
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "getVipInfo",
                        value: function () {
                            var e = Object(M.a)(X.a.mark((function e() {
                                var t, a;
                                return X.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (f = window.lib.mtop).config.prefix = "acs", f.config.subDomain = "", f.config.mainDomain = "youku.com", t = {
                                            show: 3,
                                            deviceType: "h5"
                                        }, q.api = "mtop.youku.vip.xtop.member.profile.get", q.data = {
                                            req: JSON.stringify(t)
                                        }, a = {}, e.prev = 8, e.next = 11, f.request(q);
                                    case 11:
                                        a = e.sent, e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(8), console.log("err=>", a), window.JSTracker2 && window.JSTracker2.push({
                                            msg: JSON.stringify({
                                                req: t,
                                                res: a
                                            })
                                        });
                                    case 18:
                                        this.handleData(a.data || {});
                                    case 19:
                                    case "end":
                                        return e.stop()
                                    }
                                }), e, this, [
                                    [8, 14]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "handleData",
                        value: function (e) {
                            var t = {};
                            Array.isArray(e.member_list) && e.member_list.forEach((function (e) {
                                var a = {};
                                a.exptime = e.exptime, a.icon = e.icon, a.starttime = e.starttime, a.member_name = e.member_name, a.limitdays = e.limitdays || 0, t[e.member_id] = a
                            }));
                            var a = !1,
                                n = "",
                                c = "",
                                o = "",
                                r = "",
                                i = "javascript:void(0);";
                            "100006" in t ? (a = !0, n = String(t[100006].exptime).substr(0, 10), c = "\u7eed\u8d39", o = "//h5.vip.youku.com/cashdesk?type=tvvip&tags=h5vipbanner_001".concat(g ? "&" + g : ""), r = "\u9177\u55b5VIP".concat(n, "\u5230\u671f"), i = "//h5.vip.youku.com/account") : "100002" in t ? (a = !0, n = String(t[100002].exptime).substr(0, 10), c = "\u7eed\u8d39", o = "//h5.vip.youku.com/cashdesk?type=vip&tags=h5vipbanner_001".concat(g ? "&" + g : ""), r = "\u4f18\u9177VIP".concat(n, "\u5230\u671f"), i = "//h5.vip.youku.com/account") : (a = !1, c = "\u7acb\u5373\u5f00\u901a", o = "//h5.vip.youku.com/cashdesk?type=vip&tags=h5vipbanner_001".concat(g ? "&" + g : ""), r = "\u5f00\u901a\u4f1a\u5458\u6d77\u91cf\u7247\u5e93\u968f\u610f\u770b"), this.setState({
                                isVip: a,
                                vipDesc: r,
                                vipDescLink: i,
                                btnText: c,
                                btnLink: o,
                                userIcon: e.user_icon || "https://gw.alicdn.com/tfs/TB1A1KRaLWG3KVjSZFPXXXaiXXa-84-84.png",
                                userLevel: e.gradeData && e.gradeData.vip_level || ""
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            this.getVipInfo()
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return l.a.createElement("div", {
                                className: "vipProfileContainer"
                            }, l.a.createElement("a", {
                                href: this.state.vipDescLink,
                                className: "userInfo"
                            }, l.a.createElement("img", {
                                src: this.state.userIcon
                            }), "" !== this.state.userLevel && l.a.createElement("span", {
                                className: "level"
                            }, "V", this.state.userLevel), l.a.createElement("span", {
                                className: "vipDesc"
                            }, this.state.vipDesc)), "" !== this.state.btnText && l.a.createElement("a", {
                                href: this.state.btnLink,
                                className: "btn"
                            }, this.state.btnText))
                        }
                    }]), t
                }(s.Component),
                R = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(B),
                H = (a(292), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            bannerImg: "",
                            dataItem: {}
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this.props.comData,
                                t = e.item && (e.item.gifImg || e.item.img),
                                a = [],
                                n = {};
                            Object.keys(e.itemMap).map((function (t) {
                                a.push(e.itemMap[t])
                            })), Array.isArray(a) && (n = a[0]), this.setState({
                                bannerImg: t,
                                link: n.action && n.action.extra && n.action.extra.value
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return this.state.bannerImg ? l.a.createElement("div", {
                                className: "pccContainer phone-activity-header"
                            }, l.a.createElement("a", {
                                href: this.state.link
                            }, l.a.createElement("div", {
                                className: "pccDescContainer"
                            }, l.a.createElement("img", {
                                src: Object(y.i)(this.state.bannerImg),
                                suppressHydrationWarning: !0
                            })))) : null
                        }
                    }]), t
                }(s.Component)),
                P = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(H),
                V = (a(293), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            activityBg: "",
                            arr: []
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.props.comData,
                                t = [],
                                a = e.extraExtend && e.extraExtend.img;
                            Object.keys(e.itemMap).map((function (a) {
                                t.push(e.itemMap[a])
                            })), this.setState({
                                arr: t,
                                activityBg: a
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", {
                                className: "pccContainerScrollAct",
                                style: {
                                    backgroundImage: "url(" + this.state.activityBg + ")",
                                    backgroundPosition: "left top",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% auto"
                                }
                            }, this.state.arr.map((function (t) {
                                return l.a.createElement("a", {
                                    href: Object(y.h)(t, e.props.search),
                                    key: "pcc".concat(t.title).concat(t.subtitle)
                                }, l.a.createElement("div", {
                                    className: "pccDescContainer"
                                }, l.a.createElement("div", {
                                    style: {
                                        position: "relative"
                                    }
                                }, l.a.createElement("img", {
                                    src: Object(y.i)(t.img),
                                    alt: t.title,
                                    className: "pccImg",
                                    suppressHydrationWarning: !0
                                }), l.a.createElement("div", {
                                    className: "pLayer"
                                }), t.mark && t.mark.text ? l.a.createElement("div", {
                                    className: y.d[t.mark.text] || y.d.default
                                }, " ", t.mark.text) : "", l.a.createElement("div", {
                                    className: "pSummary2"
                                }, t.summary))))
                            })))
                        }
                    }]), t
                }(s.Component)),
                K = Object(p.connect)((function (e) {
                    return {
                        search: e.page.search
                    }
                }))(V),
                W = a(16);

            function F() {
                var e = window && window.navigator.userAgent;
                if (e.indexOf("Baiduspider") > -1 || e.indexOf("YisouSpider") > -1 || e.indexOf("360Spider") > -1 || e.indexOf("HaosouSpider") > -1 || e.indexOf("AdsBot-Google-Mobile") > -1 || e.indexOf("Googlebot") > -1 || e.indexOf("bingbot") > -1 || e.indexOf("Sosospider") > -1 || e.indexOf("Sogou web spider") > -1 || e.indexOf("Sogou inst spider") > -1 || e.indexOf("Sogou News Spider") > -1 || e.indexOf("Sogou Video Spider") > -1) return !0
            }
            var J, U = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    var t = e.stopSpider;
                    if (!t || "EXP" !== e.gmKey || !F()) {
                        var a = {
                            gmKey: "CLK",
                            spmAB: "a2hww.12518357",
                            spmC: "",
                            spmD: ""
                        };
                        e = Object.assign({}, a, e);
                        var n = "".concat(e.spmAB, ".").concat(e.spmC, ".").concat(e.spmD),
                            c = e.exargs,
                            o = [{
                                exargs: Object(W.a)({
                                    "data-spm": n
                                }, c),
                                pageurl: window.location.href
                            }],
                            r = {};
                        "CLK" === e.gmKey && (r.clkdata = JSON.stringify(o)), "EXP" === e.gmKey && (r.expdata = JSON.stringify(o));
                        var i = [];
                        for (var s in r) i.push("".concat(s, "=").concat(r[s]));
                        var l = window.goldlog_queue || (window.goldlog_queue = []);
                        l.push({
                            action: "goldlog.record",
                            arguments: ["/yt/youku.h5.control", e.gmKey, i.join("&"), "POST"]
                        })
                    }
                },
                z = (a(294), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).sendClickLog = function (e) {
                            U({
                                spmC: "h5_index_adBanner",
                                spmD: "zjn_m",
                                gmKey: "CLK"
                            }), window.location.href = e
                        }, a.state = {
                            imgUrl: "",
                            imgClickUrl: ""
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this.props.comData;
                            this.setState({
                                imgUrl: e.itemMap && e.itemMap.imgUrl,
                                imgClickUrl: e.itemMap && e.itemMap.link
                            }, (function () {
                                U({
                                    spmC: "h5_index_adBanner",
                                    spmD: "zjn_m",
                                    gmKey: "EXP"
                                })
                            }))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.state,
                                a = t.imgUrl,
                                n = t.imgClickUrl;
                            return l.a.createElement("div", {
                                className: "ad-banner-wrapper"
                            }, l.a.createElement("a", {
                                href: null,
                                rel: "noopener noreferrer",
                                onClick: function () {
                                    e.sendClickLog(n)
                                }
                            }, a ? l.a.createElement("img", {
                                src: a
                            }) : null))
                        }
                    }]), t
                }(s.Component)),
                Y = function (e) {
                    function t() {
                        var e;
                        return Object(n.a)(this, t), (e = Object(o.a)(this, Object(r.a)(t).call(this))).state = {
                            tag: ["PHONE_BASE_B", "PHONE_BASE_C", "PHONE_BASE_A", "PHONE_DBCSL_A", "CARD_HORIZONTAL", "CARD_HORIZONTAL_SCOLL", "CARD_RESERVATION_V2", "CARD_PRIVILEGE_AREA", "VIP_PROFILE", "PHONE_ACTIVITY_SCROLLER", "PHONE_ACTIVITY_HEADER", "ADBANNER"],
                            sliderTag: /PHONE_LUNBO_?|CARD_TOP_SLIDE/,
                            match: {
                                PHONE_BASE_B: O,
                                PHONE_BASE_A: w,
                                PHONE_BASE_C: N,
                                CARD_HORIZONTAL_SCOLL: x,
                                CARD_HORIZONTAL: S,
                                CARD_RESERVATION_V2: D,
                                CARD_PRIVILEGE_AREA: L,
                                VIP_PROFILE: R,
                                PHONE_ACTIVITY_HEADER: P,
                                PHONE_ACTIVITY_SCROLLER: K,
                                ADBANNER: z
                            },
                            components: []
                        }, e
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.organizeData(this.props.drawerData);
                            this.setState({
                                components: e
                            })
                        }
                    }, {
                        key: "organizeData",
                        value: function (e) {
                            var t = this,
                                a = [];
                            return e.components ? (e.components.map((function (e) {
                                (-1 !== t.state.tag.indexOf(e.template.tag) || t.state.sliderTag.test(e.template.tag)) && a.push(e)
                            })), a) : []
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", null, this.state.components.length && this.props.drawerData.title && !this.props.drawerData.title.match("\u8f6e\u64ad\u56fe") ? l.a.createElement("div", {
                                className: "drawerTitle ".concat("/vip" === this.props.pathname ? "vipTag" : "")
                            }, this.props.drawerData.title) : "", this.state.components.map((function (t, a) {
                                var n = e.state.match[t.template.tag];
                                if (e.state.sliderTag.test(t.template.tag) && (n = b), n) return l.a.createElement("div", {
                                    "data-spm": e.props.dataSpm,
                                    key: "components".concat(a)
                                }, l.a.createElement(n, {
                                    comData: t,
                                    lazyload: e.props.lazyload,
                                    title: e.props.drawerData.title || ""
                                }))
                            })))
                        }
                    }]), t
                }(s.Component),
                Z = Object(p.connect)((function (e) {
                    return {
                        pathname: e.page.pathname
                    }
                }))(Y),
                G = (a(295), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {}, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function () {
                            var e = this;
                            return this.props.show ? l.a.createElement("div", {
                                className: "yk-modal"
                            }, l.a.createElement("div", {
                                className: "modal-box"
                            }, this.props.title && l.a.createElement("div", {
                                className: "modal-title"
                            }, this.props.title), this.props.content && l.a.createElement("div", {
                                className: "modal-content"
                            }, this.props.content), this.props.buttons.length > 0 && l.a.createElement("div", {
                                className: "modal-foot"
                            }, this.props.buttons.map((function (t) {
                                return l.a.createElement("a", {
                                    key: "btn-".concat(t.type),
                                    href: "javascript:void(0)",
                                    className: "confirm" === t.type ? "ok-btn" : "cancel" === t.type ? "cancel-btn" : "",
                                    onClick: function () {
                                        e.handleConfirmClick(t.type)
                                    }
                                }, t.text)
                            }))))) : null
                        }
                    }, {
                        key: "handleConfirmClick",
                        value: function (e) {
                            var t = this.props.okCbFn,
                                a = this.props.cancelCbFn;
                            "confirm" === e ? t && t() : a && a(), this.props.dispatch({
                                type: "ykModal/hide"
                            })
                        }
                    }]), t
                }(s.Component)),
                Q = Object(p.connect)((function (e) {
                    return Object(W.a)({}, e.ykModal)
                }))(G),
                $ = (a(296), function (e) {
                    function t() {
                        return Object(n.a)(this, t), Object(o.a)(this, Object(r.a)(t).apply(this, arguments))
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this.props;
                            y.a.tysx && e.mtConfig.tysx && e.mtConfig.tysx.content && "/" === e.pathname && this.props.dispatch({
                                type: "ykModal/show",
                                payload: {
                                    type: e.mtConfig.tysx.type || "alert",
                                    content: e.mtConfig.tysx.content,
                                    buttons: e.mtConfig.tysx.buttons || [{
                                        text: "\u6211\u77e5\u9053\u4e86",
                                        type: "confirm"
                                    }],
                                    okCbFn: function () {}
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return l.a.createElement("div", null, l.a.createElement(Q, null))
                        }
                    }]), t
                }(s.Component)),
                ee = Object(p.connect)((function (e) {
                    return {
                        pathname: e.page.pathname,
                        mtConfig: e.page.mtConfig
                    }
                }))($),
                te = (a(297), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            show: !1
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this.props;
                            y.a.tysx && e.mtConfig && e.mtConfig.bannerConfig && "/" === e.pathname && this.setState({
                                show: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return this.state.show ? l.a.createElement("div", {
                                className: "head-banner"
                            }, l.a.createElement("a", {
                                href: this.props.mtConfig.bannerConfig && this.props.mtConfig.bannerConfig.link || "javascript: void(0);"
                            }, l.a.createElement("img", {
                                src: this.props.mtConfig.bannerConfig && this.props.mtConfig.bannerConfig.imgUrl || ""
                            }))) : null
                        }
                    }]), t
                }(s.Component)),
                ae = Object(p.connect)((function (e) {
                    return {
                        pathname: e.page.pathname,
                        mtConfig: e.page.mtConfig
                    }
                }))(te),
                ne = (a(298), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {}, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function () {
                            return this.props.show && this.props.content ? l.a.createElement("div", {
                                className: "yk-toast ".concat(this.props.showMask && "mask", " ").concat(this.props.rootClass || ""),
                                onClick: this.handleClick.bind(this)
                            }, l.a.createElement("div", {
                                className: "modal-box"
                            }, this.props.content && l.a.createElement("div", {
                                className: "modal-content"
                            }, l.a.createElement("span", {
                                className: "text",
                                dangerouslySetInnerHTML: {
                                    __html: this.props.content
                                }
                            })))) : null
                        }
                    }, {
                        key: "handleClick",
                        value: function () {
                            this.props.showMask && this.props.dispatch({
                                type: "ykToast/hide"
                            })
                        }
                    }]), t
                }(s.Component)),
                ce = Object(p.connect)((function (e) {
                    return Object(W.a)({}, e.ykToast)
                }))(ne),
                oe = {
                    "pre-active11.youku.com": "yk_h5_index",
                    "youku.com": "yk_h5_index",
                    "www.youku.com": "yk_h5_index",
                    "tv.youku.com": "yk_h5_tv",
                    "movie.youku.com": "yk_h5_movie",
                    "youku.com/vip": "yk_h5_vip",
                    "zy.youku.com": "yk_h5_zy",
                    "music.youku.com": "yk_h5_music",
                    "comic.youku.com": "yk_h5_comic",
                    "child.youku.com": "yk_h5_child",
                    "news.youku.com": "yk_h5_news",
                    "jilupian.youku.com": "yk_h5_jilupian",
                    "finance.youku.com": "yk_h5_finance",
                    "sports.youku.com": "yk_h5_sports",
                    "edu.youku.com": "yk_h5_edu",
                    "ent.youku.com": "yk_h5_ent",
                    "game.youku.com": "yk_h5_game",
                    "tech.youku.com": "yk_h5_tech",
                    "fun.youku.com": "yk_h5_fun",
                    "life.youku.com": "yk_h5_life",
                    "travel.youku.com": "yk_h5_travel",
                    "auto.youku.com": "yk_h5_auto",
                    "fashion.youku.com": "yk_h5_fashion",
                    "baby.youku.com": "yk_h5_baby",
                    "live.youku.com": "yk_h5_live"
                },
                re = {
                    "\u9996\u9875": "https://www.youku.com",
                    "\u5267\u96c6": "https://tv.youku.com/",
                    "\u7535\u5f71": "https://movie.youku.com/",
                    "\u4f1a\u5458": "https://youku.com/vip",
                    "\u7efc\u827a": "https://zy.youku.com/",
                    "\u97f3\u4e50": "https://music.youku.com",
                    "\u52a8\u6f2b": "https://comic.youku.com/",
                    "\u5c11\u513f": "https://child.youku.com/",
                    "\u8d44\u8baf": "https://news.youku.com",
                    "\u7eaa\u5b9e": "https://jilupian.youku.com/",
                    "\u8d22\u7ecf": "https://finance.youku.com/",
                    "\u4f53\u80b2": "https://sports.youku.com",
                    "\u6559\u80b2": "https://edu.youku.com/",
                    "\u5a31\u4e50": "https://ent.youku.com/",
                    "\u6e38\u620f": "https://game.youku.com/",
                    "\u79d1\u6280": "https://tech.youku.com/",
                    "\u641e\u7b11": "https://fun.youku.com/",
                    "\u751f\u6d3b": "https://life.youku.com/",
                    "\u65c5\u6e38": "https://travel.youku.com",
                    "\u6c7d\u8f66": "https://auto.youku.com/",
                    "\u65f6\u5c1a": "https://fashion.youku.com/",
                    "\u76f4\u64ad": "https://live.youku.com/"
                },
                ie = !1,
                se = {
                    backgroundColor: "#B30702",
                    fontIconColor: "#E3B6A2",
                    inputBgColor: "#b82224",
                    activeColor: "#B30702"
                },
                le = (a(299), oe),
                ue = re,
                me = ie,
                pe = se;
            (J = window.lib.mtop).config.prefix = "acs", J.config.subDomain = "", J.config.mainDomain = "youku.com";
            var he = {
                    appKey: 24679788,
                    v: "2.0",
                    ecode: 0,
                    dataType: "json"
                },
                de = function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            defaultSearchText: ""
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this;
                            window.getUserInfo = this.getUserInfo, window.getHotSearch = this.getHotSearch, window.mplayConfig = this.mplayConfig, this.initHtml(), this.initNav(), this.getRecommend();
                            var t = document.createElement("script");
                            t.src = "https://huodong.m.taobao.com/api/data/v2/714e206843fe47b5af0b4ce46b403f6e.js", document.getElementsByTagName("head")[0].appendChild(t), t.onload = function () {
                                e.initPosition(), e.createJsonp({
                                    url: "https://cmstool.youku.com/cms/player/userinfo/user_info",
                                    extra: "callback=window.getUserInfo&t=".concat((new Date).getTime())
                                }), e.createJsonp({
                                    url: "https://tip.soku.com/searches/soku/kubox/v4/by_keyword.json",
                                    extra: "jsoncallback=window.getHotSearch&site=61&t=".concat((new Date).getTime())
                                }), document.querySelector("#yk-search-input").onclick = function () {
                                    document.querySelector(".panel-nav-container").style.display = "none", !document.querySelector("#yk-search-input").value && window.showHotSearch && (document.querySelector(".hot-search-container").style.display = "block")
                                }, document.querySelector("#yk-search-input").onkeyup = function (e) {
                                    13 === e.keyCode && (window.location.href = "https://www.soku.com/m/y/video?q=".concat(document.querySelector("#yk-search-input").value || document.querySelector(".default-search").innerText))
                                }, document.querySelector(".search-logo").onclick = function () {
                                    window.location.href = "https://www.soku.com/m/y/video?q=".concat(document.querySelector("#yk-search-input").value || document.querySelector(".default-search").innerText)
                                }, document.querySelector("#yk-search-input").oninput = function (t) {
                                    var a = document.querySelector("#yk-search-input").value;
                                    a ? (document.querySelector(".hot-search-container").style.display = "none", document.querySelector(".default-search").style.display = "none", e.getSearchRes(a)) : (window.showHotSearch && (document.querySelector(".hot-search-container").style.display = "block"), document.querySelector(".yk-search-result-container").style.display = "none")
                                }, document.querySelector(".yk-hot-close").onclick = function () {
                                    document.querySelector(".hot-search-container").style.display = "none"
                                }, document.querySelector(".nav-arrow").onclick = function () {
                                    document.querySelector(".panel-nav-container").style.display = "block", document.querySelector(".yk-nav").style.display = "none"
                                }, e.insertArrow(), window.rotateScreenTimeout = null;
                                var t = "onorientationchange" in window ? "orientationchange" : "resize";
                                window.addEventListener(t, (function () {
                                    window.rotateScreenTimeout && clearTimeout(window.rotateScreenTimeout), window.rotateScreenTimeout = setTimeout(e.insertArrow, 200)
                                }), !1)
                            }
                        }
                    }, {
                        key: "mplayConfig",
                        value: function (e) {
                            window.pageConfig = e
                        }
                    }, {
                        key: "getUserInfo",
                        value: function (e) {
                            var t = e.data;
                            if (t && t.avatar) {
                                document.querySelector("#yk-user-img").style.display = "block";
                                var a = t.avatar.middle;
                                document.querySelector("#yk-user-img").setAttribute("src", a)
                            }
                        }
                    }, {
                        key: "getCookie",
                        value: function (e) {
                            if (document.cookie.length > 0) {
                                var t = document.cookie.indexOf(e + "=");
                                if (-1 !== t) {
                                    t = t + e.length + 1;
                                    var a = document.cookie.indexOf(";", t);
                                    return -1 === a && (a = document.cookie.length), unescape(document.cookie.substring(t, a))
                                }
                            }
                            return ""
                        }
                    }, {
                        key: "getSearchRes",
                        value: function (e) {
                            var t = this;
                            if (J) {
                                J.config.prefix = "acs", J.config.subDomain = "", J.config.mainDomain = "youku.com", he.api = "mtop.youku.soku.yksearch", he.v = "2.0";
                                var a = {
                                    appScene: "kubox",
                                    appCaller: "h5",
                                    s: "h5",
                                    device: "h5",
                                    platform: "h5",
                                    keyword: e,
                                    utdid: this.getCookie("cna")
                                };
                                he.data = a, J.request(he).then((function (e) {
                                    if (e && e.data && e.data.nodes && e.data.nodes.length > 0) {
                                        var a = e.data.nodes[0].nodes[0].nodes,
                                            n = a.length > 5 ? a.slice(0, 5) : a;
                                        if (0 !== n.length) {
                                            document.querySelector(".yk-search-result-container").style.display = "block", document.querySelector(".yk-search-close").onclick = function () {
                                                var e = t.state.defaultSearchText;
                                                document.querySelector(".yk-search-result-container").style.display = "none", document.querySelector("#yk-search-input").value = e
                                            };
                                            for (var c = "", o = 0; o < n.length; o++) c += "<li class='yk-search-li' onclick=\"location.href='https://www.soku.com/m/y/video?q=".concat(n[o].data.w, "'\"\n                  ><span class='search-result-name'>").concat(n[o].data.w, "</span></li>");
                                            document.querySelector("#yk-search-ul").innerHTML = c
                                        } else document.querySelector(".yk-search-result-container").style.display = "none"
                                    }
                                }))
                            }
                        }
                    }, {
                        key: "getHotSearch",
                        value: function (e) {
                            var t = "";
                            if ((e = e.s) && 0 !== e.length) {
                                window.showHotSearch = !0;
                                for (var a = 0; a < 5; a++) t += " <a href='https://www.soku.com/m/y/video?q=".concat(e[a].w || e[a].n, '\'><li>\n              <div class="hot-container">\n                <i class="hot-common-tip hot-').concat(a + 1, '-tip">').concat(a + 1, '</i>\n                <div class="search-res-name">\n                 ').concat(e[a].w || e[a].n, "\n                </div>\n              </div>\n            </li></a>");
                                document.querySelector(".hot-search-ul").innerHTML = t
                            } else window.showHotSearch = !1
                        }
                    }, {
                        key: "insertArrow",
                        value: function () {
                            document.querySelector("#panel-arrow-li") && document.querySelector("#panel-arrow-li").remove();
                            var e = window.innerWidth || document.documentElement.clientWidth,
                                t = parseInt(document.querySelector("html").style.fontSize),
                                a = .32 * t,
                                n = Math.floor(e / (a + .3 * t)),
                                c = document.querySelectorAll(".panel-nav li")[n - 1],
                                o = document.createElement("li");
                            o.setAttribute("id", "panel-arrow-li"), o.innerHTML = "<img src='https://img.alicdn.com/tfs/TB1qJ0cXKuSBuNjy1XcXXcYjFXa-44-44.png' class='panel-arrow'>", document.querySelector(".panel-nav").insertBefore(o, c), document.querySelector(".panel-arrow").onclick = function () {
                                document.querySelector(".panel-nav-container").style.display = "none", document.querySelector(".yk-nav").style.display = "block"
                            }
                        }
                    }, {
                        key: "initHtml",
                        value: function () {
                            document.querySelector("#ykheader-loading-img").remove(), document.querySelector("#yk-header").innerHTML = '<header>\n        <div class="yk-header-container" style=\''.concat(me ? "background: ".concat(pe.backgroundColor) : "", '\'>\n          <span data-spm=\'yklogo\'><a href="https://www.youku.com"><img src="https://img.alicdn.com/tfs/TB1XqTXka61gK0jSZFlXXXDKFXa-180-36.png" alt="" id=\'yk-logo\' ></a></span>\n          <span data-spm=\'yksearch\'><a><div class="yk-search-container"><input type="text" name="" id="yk-search-input" style=\'').concat(me ? "background:".concat(pe.inputBgColor, ";color:").concat(pe.fontIconColor) : "", "'><img src=\"").concat(me ? "https://gw.alicdn.com/tfs/TB1sWR5JVzqK1RjSZFCXXbbxVXa-48-48.png" : "https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png", '" alt="" class="search-logo"><div class="default-search" style=\'').concat(me ? "color:".concat(pe.fontIconColor) : "", "'></div></div></a></span>\n          \n          <span data-spm='profile'><a href=\"").concat("https://account.youku.com/?callback=" + location.href, '"><img src="').concat(me ? "https://gw.alicdn.com/tfs/TB1b1F8J3HqK1RjSZJnXXbNLpXa-60-60.png" : "https://img.alicdn.com/tfs/TB10zdbXL5TBuNjSspmXXaDRVXa-44-44.png", '" alt="" id=\'default-user-img\' ></a></span>\n          <span data-spm=\'profile\'><a href="https://i.youku.com/u/profile"><img src="" alt="" id=\'yk-user-img\'></a></span>\n        </div>\n        <div class="yk-search-result-container">\n          <div id="yk-search-result">\n            <ul id="yk-search-ul"></ul>\n          </div>\n          <div class="yk-search-close">\n            \u5173\u95ed\n          </div>\n        </div>\n        <div class="hot-search-container">\n          <div class=\'tip\'>\n            <i class="hot"></i>\u5927\u5bb6\u90fd\u5728\u641c\n          </div>\n         <ul class=\'hot-search-ul\' data-spm=\'hotsearch\'>\n      \n         </ul>\n         <div class="yk-hot-close">\n            \u5173\u95ed\n          </div>\n        </div>\n        <nav class="yk-nav" data-spm=\'yknav\'>\n          <ul class=\'header-nav\'>\n            \n          </ul>\n          <img src="https://img.alicdn.com/tfs/TB18vFaXGmWBuNjy1XaXXXCbXXa-44-44.png" alt="" class="nav-arrow">\n        </nav>\n        <div class=\'panel-nav-container\' data-spm=\'panel-nav\'>\n          <ul class=\'panel-nav\'>\n            \n            </ul>\n        </div>\n      </header>')
                        }
                    }, {
                        key: "createJsonp",
                        value: function (e) {
                            var t = document.createElement("script");
                            t.src = e.url + "?" + e.extra, document.getElementsByTagName("head")[0].appendChild(t)
                        }
                    }, {
                        key: "initNav",
                        value: function () {
                            var e = "";
                            Object.keys(ue).map((function (t) {
                                e += '<li><a href="'.concat(ue[t], '">').concat(t, "</a></li>")
                            })), document.querySelector(".header-nav").innerHTML = e, document.querySelector(".panel-nav").innerHTML = e
                        }
                    }, {
                        key: "getRecommend",
                        value: function () {
                            var e = this,
                                t = J.config;
                            J.config.prefix = "acs", J.config.subDomain = "m", J.config.mainDomain = "taobao.com", he.api = "mtop.relationrecommend.WirelessRecommend.recommend";
                            var a = le[window.location.hostname] || "",
                                n = window.location.pathname;
                            "/vip" === n && (a = "/vip" === n ? "yk_h5_vip" : "");
                            var c = Object(y.f)(window.location.href);
                            c && c.page && le[c.page] && (a = le[c.page]);
                            var o = {
                                appId: "14177",
                                params: JSON.stringify({
                                    count: "1",
                                    fr: "h5",
                                    x_utdid: this.getCookie("cna"),
                                    channel: a,
                                    app_source: "h5"
                                })
                            };
                            he.data = o, J.request(he).then((function (a) {
                                J.config = t;
                                var n = a.data.q.length > 12 ? a.data.q.slice(0, 10) + "..." : a.data.q;
                                e.setState({
                                    defaultSearchText: n
                                }, (function () {
                                    document.querySelector(".default-search").innerText = n
                                }))
                            }))
                        }
                    }, {
                        key: "initPosition",
                        value: function () {
                            if (window.goalNav) {
                                for (var e, t = document.querySelectorAll(".header-nav li"), a = 0; a < t.length; a++)
                                    if (t[a].innerText === window.goalNav) {
                                        e = t[a];
                                        break
                                    }
                                var n = e.offsetLeft;
                                document.querySelector(".header-nav").scrollLeft = n - 140, e.innerHTML += "<span class='nav-active-bottom ".concat(me ? "festival-active-bottom" : "", "'></span>"), e.childNodes[0].classList.add("nav-active")
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return l.a.createElement("div", null)
                        }
                    }]), t
                }(s.Component),
                ye = (a(300), function (e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(r.a)(t).call(this, e))).state = {
                            showLayer: !1,
                            moduleList: [],
                            clientModuleList: []
                        }, a
                    }
                    return Object(i.a)(t, e), Object(c.a)(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = Object(y.e)(this.props.pageData.data.moduleList),
                                t = [],
                                a = [];
                            ("local" === this.props.env || "youku.com" === this.props.hostname || "www.youku.com" === this.props.hostname || "pre-active11.youku.com" === this.props.hostname) && "/" === this.props.pathname && this.props.mtConfig && this.props.mtConfig.adBannerConfig && this.props.mtConfig.adBannerConfig.enable && e.splice(3, 0, {
                                components: [{
                                    itemMap: {
                                        imgUrl: this.props.mtConfig.adBannerConfig.imgUrl,
                                        link: this.props.mtConfig.adBannerConfig.link
                                    },
                                    template: {
                                        tag: "ADBANNER"
                                    }
                                }]
                            }), e.length > 5 ? (t = e.slice(0, 5), a = e.slice(5, e.length), this.setState({
                                clientModuleList: a
                            })) : t = e, this.setState({
                                moduleList: t
                            })
                        }
                    }, {
                        key: "toTop",
                        value: function () {
                            window.scrollTo(0, 0)
                        }
                    }, {
                        key: "getSpm",
                        value: function (e) {
                            try {
                                var t = this.props.hostname;
                                return "www.youku.com" === t || "youku.com" === t ? "homeDrawer".concat(e) : "".concat(t.split(".")[0], "Drawer").concat(e)
                            } catch (a) {
                                return console.log("getSpm Error ".concat(a)), "homeDrawer".concat(e)
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            var e = this;
                            0 !== this.state.clientModuleList.length && this.setState({
                                moduleList: this.state.moduleList.concat(this.state.clientModuleList)
                            }), window.onscroll = function () {
                                (document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) > 100 ? e.setState({
                                    showLayer: !0
                                }) : e.setState({
                                    showLayer: !1
                                })
                            }, Object(y.b)()
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", null, l.a.createElement(de, null), l.a.createElement(ae, null), this.state.moduleList.map((function (t, a) {
                                return a > 5 ? l.a.createElement(m.a, {
                                    key: "drawerLazy".concat(a),
                                    height: 100
                                }, l.a.createElement(Z, {
                                    drawerData: t,
                                    lazyload: !0,
                                    dataSpm: e.getSpm(a)
                                })) : l.a.createElement(Z, {
                                    drawerData: t,
                                    key: "drawer".concat(a),
                                    dataSpm: e.getSpm(a)
                                })
                            })), this.state.showLayer ? l.a.createElement("img", {
                                src: "//gw.alicdn.com/tfs/TB1mMz2LMTqK1RjSZPhXXXfOFXa-168-168.png",
                                alt: "",
                                style: {
                                    width: "56px",
                                    position: "fixed",
                                    bottom: "50px",
                                    right: "10px",
                                    zIndex: "999",
                                    display: "block"
                                },
                                onClick: function () {
                                    return e.toTop()
                                }
                            }) : "", l.a.createElement(ee, null), l.a.createElement(ce, null))
                        }
                    }]), t
                }(s.Component)),
                fe = [{
                    path: "*",
                    component: Object(p.connect)((function (e) {
                        return {
                            pageData: e.page.pageData,
                            mtConfig: e.page.mtConfig,
                            hostname: e.page.hostname,
                            pathname: e.page.pathname,
                            env: e.page.env
                        }
                    }))(ye)
                }];
            t.a = fe
        }, 85: function (e, t, a) {
            "use strict";
            var n = a(16),
                c = {
                    namespace: "ykModal",
                    state: {
                        show: !1,
                        type: "alert",
                        title: "",
                        content: "",
                        buttons: [{
                            type: "confirm",
                            text: "\u6211\u77e5\u9053\u4e86"
                        }],
                        okCbFn: null,
                        cancelCbFn: null
                    },
                    reducers: {
                        show: function (e, t) {
                            var a = t.payload;
                            return e.show = !0, Object(n.a)({}, e, a)
                        }, hide: function (e, t) {
                            t.payload;
                            return e.show = !1, Object(n.a)({}, e)
                        }
                    },
                    effects: {},
                    subscriptions: {}
                },
                o = a(35),
                r = a.n(o),
                i = function (e) {
                    return new Promise((function (t) {
                        setTimeout(t, e)
                    }))
                },
                s = {
                    namespace: "ykToast",
                    state: {
                        show: !1,
                        content: "",
                        showMask: !1,
                        timeout: 2e3
                    },
                    reducers: {
                        show: function (e, t) {
                            var a = t.payload;
                            return e.show = !0, Object(n.a)({}, e, a)
                        }, hide: function (e, t) {
                            t.payload;
                            return e.show = !1, Object(n.a)({}, e)
                        }
                    },
                    effects: {
                        showDelay: r.a.mark((function e(t, a) {
                            var n, c, o, s, l;
                            return r.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.payload, c = a.put, o = a.call, s = a.select, e.next = 4, s((function (e) {
                                        return e.ykToast.timeout
                                    }));
                                case 4:
                                    return l = e.sent, e.next = 7, c({
                                        type: "show",
                                        payload: n
                                    });
                                case 7:
                                    return e.next = 9, o(i, l);
                                case 9:
                                    return e.next = 11, c({
                                        type: "hide"
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                            }), e)
                        }))
                    },
                    subscriptions: {}
                };
            t.a = [{
                    namespace: "page",
                    state: {
                        pageData: {},
                        mtConfig: {}
                    },
                    reducers: {},
                    effects: {}
                },
                c, s
            ]
        }
    },
    [
        [129, 2, 1]
    ]
]);
//# sourceMappingURL=Page.chunk.js.map