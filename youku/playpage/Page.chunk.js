(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        100: function (e, t, a) {
            "use strict";
            var n, i = a(7),
                o = a.n(i),
                r = a(9),
                s = a.n(r),
                c = a(10),
                l = a.n(c),
                d = a(11),
                u = a.n(d),
                m = a(12),
                p = a.n(m),
                h = a(13),
                f = a.n(h),
                g = a(0),
                v = a.n(g),
                y = a(48),
                w = a.n(y),
                b = a(95),
                k = a.n(b),
                E = a(3),
                S = (a(256), a(5)),
                C = a(2),
                O = (a(258), a(28)),
                N = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            moduleKey: "h5_detail_guide",
                            action: {},
                            title: "",
                            subType: ""
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = (this.props.comData || {}).dataNode || [],
                                t = e[0] && e[0].data || {};
                            this.setState({
                                action: t.action || {}, title: t.title || "",
                                subType: t.subType || "NORMAL"
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            Object(C.a)({
                                spmC: this.state.moduleKey,
                                spmD: "banner",
                                gmKey: "EXP"
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return v.a.createElement("div", {
                                className: "clipboard h5-detail-guide ".concat("VIP" === this.state.subType ? "vip-theme" : ""),
                                onClick: function () {
                                    
                                }
                            }, v.a.createElement("a", {
                                className: "text"
                            }, this.state.title))
                        }
                    }, {
                        key: "callapp",
                        value: function () {
                            
                        }
                    }]), t
                }(g.Component),
                D = (a(292), a(28)),
                j = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            moduleKey: a.props.comData.type,
                            isClient: !1,
                            Data: ""
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = (this.props.comData || {}).dataNode || [],
                                t = e[0] && e[0].data || {};
                            this.setState({
                                Data: t
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            this.state.Data.img && Object(C.a)({
                                spmC: "h5_ad_banner",
                                spmD: "show",
                                gmKey: "EXP"
                            }), this.setState({
                                isClient: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return v.a.createElement("div", {
                                className: "h5-detail-ad"
                            }, v.a.createElement("a", {
                                className: "text clipboard",
                                onClick: function () {
                                   
                                }
                            }, v.a.createElement("img", {
                                src: this.state.isClient ? Object(S.useWebp)(this.state.Data.img) : this.state.Data.img,
                                alt: this.state.Data.title
                            })))
                        }
                    }, {
                        key: "callapp",
                        value: function () {
                            
                        }
                    }]), t
                }(g.Component),
                x = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))(j),
                _ = (a(293), a(28)),
                A = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))((function (e) {
                    var t = e.videoMap.videoId,
                        a = Object(g.useRef)(null),
                        n = function () {
                            window.location.href = "https://account.youku.com/?callback=".concat(encodeURIComponent(window.location.href))
                        };
                    return Object(g.useEffect)((function () {
                        if (e.videoMap.allowComment) {
                            a.current.innerHTML = "", window.ykComment && window.ykComment("YKComment", {
                                operate: 17,
                                text: 8,
                                objectId: t,
                                objectType: "1",
                                source: "",
                                appKey: "b92f45cce7ebabdb1b282d5b3b667162",
                                loginFunc: n,
                                configId: "e691def2ec95644e",
                                launchApp: function (e) {
                                    _ && _.default({
                                        spmC: "comment",
                                        spmD: "showmore",
                                        source: "comment"
                                    })
                                }
                            });
                            var i = document.querySelector("#YKComment"),
                                o = document.querySelector("#comment-frame");
                            window.addEventListener("message", (function (e) {
                                e.data.height && (i && i.setAttribute("style", "height:".concat(e.data.height, "px;")), o && o.setAttribute("style", "width:100%; height:".concat(e.data.height, "px;")))
                            }), !1), Object(C.a)({
                                spmC: "comment",
                                spmD: "show",
                                gmKey: "EXP"
                            })
                        }
                    }), [0]), e.videoMap.allowComment && v.a.createElement("div", {
                        id: "YKComment",
                        className: "h5-detail-comment",
                        ref: a
                    })
                })),
                T = (a(294), a(28)),
                M = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            showMod: !0,
                            moduleKey: "jiugongge",
                            pageSize: 9,
                            currentPageNum: 0,
                            showChange: !1,
                            totalList: [],
                            showList: [],
                            isClient: !1,
                            existIds: {}
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e, t = (this.props.comData || {}).dataNode || [],
                                a = !1,
                                n = !0;
                            t.map((function (e, t) {
                                e.pos = t + 1
                            })), t.length > this.state.pageSize ? (a = !0, e = this.getShowData(t)) : t.length % 3 === 0 ? e = t : n = !1, this.setState({
                                showMod: n,
                                showChange: a,
                                showList: e,
                                totalList: t
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            var e = this;
                            this.state.showMod && (this.setState({
                                isClient: !0
                            }), this.checkElExist(), document.addEventListener("scroll", (function () {
                                e.checkElExist()
                            })))
                        }
                    }, {
                        key: "checkElExist",
                        value: function () {
                            var e = document.querySelector("#feed-lists").querySelectorAll("li.card-item");
                            if (e.length > 0)
                                for (var t = 0; t < e.length; t++) {
                                    var a = e[t],
                                        n = a.getAttribute("data-vid") || "",
                                        i = 0 === n.indexOf("X"),
                                        o = a.getBoundingClientRect();
                                    o.top < window.innerHeight && o.bottom > 0 && !this.state.existIds["id_".concat(n)] && (this.state.existIds["id_".concat(n)] = !0, Object(C.a)({
                                        id: n,
                                        spmC: this.state.moduleKey,
                                        spmD: (i ? "vdo_" : "show_") + n,
                                        gmKey: "EXP"
                                    }))
                                }
                        }
                    }, {
                        key: "getShowData",
                        value: function (e, t, a) {
                            var n = [];
                            if (e = e || this.state.totalList || [], t = Number(t || this.state.pageSize), a = Number(a || this.state.currentPageNum), Array.isArray(e) && e.length > 0) {
                                for (var i = e.length, o = t * a, r = t, s = o; s < o + r; s++) {
                                    var c = e[s % i];
                                    n.push(c)
                                }
                                this.setState({
                                    currentPageNum: ++a
                                })
                            }
                            return n
                        }
                    }, {
                        key: "jump",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.data.action.value;
                            if (t) {
                                var a = 0 === t.indexOf("X");
                                T && T.default({
                                    id: t,
                                    spmC: this.state.moduleKey,
                                    source: "jiugongge",
                                    spmD: (a ? "vdo_" : "show_") + t
                                })
                            }
                        }
                    }, {
                        key: "change",
                        value: function () {
                            var e = this.getShowData();
                            if (e.length > 0) {
                                this.setState({
                                    showList: e
                                });
                                var t = this.itemWrap.getBoundingClientRect().top,
                                    a = document.body.scrollTop;
                                document.body.scrollTop = a + t, Object(C.a)({
                                    spmC: this.state.moduleKey,
                                    spmD: "change"
                                })
                            }
                            this.checkElExist()
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return this.state.showMod && v.a.createElement("div", {
                                className: "h5-detail-recommend",
                                ref: function (t) {
                                    e.itemWrap = t
                                }
                            }, v.a.createElement("h1", {
                                className: "mod-title"
                            }, "\u4e3a\u4f60\u63a8\u8350"), v.a.createElement("div", {
                                className: "card-list clipboard"
                            }, v.a.createElement("ul", {
                                id: "feed-lists"
                            }, this.state.showList.map((function (t) {
                                return v.a.createElement(w.a, {
                                    height: "2.45rem",
                                    offset: 500,
                                    key: "card".concat(t.pos)
                                }, v.a.createElement("li", {
                                    key: "card".concat(t.pos),
                                    className: "card-item",
                                    "data-pos": t.pos,
                                    "data-vid": t.data && t.data.action && t.data.action.value,
                                    onClick: e.jump.bind(e, t)
                                }, v.a.createElement("a", {
                                    href: "javascript:void(0);"
                                }, v.a.createElement("div", {
                                    className: "section-top"
                                }, v.a.createElement("img", {
                                    src: e.state.isClient ? Object(S.useWebp)(t.data.img) : t.data.img
                                }), v.a.createElement("time", null, t.data.summary)), v.a.createElement("div", {
                                    className: "section-btm"
                                }, v.a.createElement("h2", null, t.data.title), v.a.createElement("p", null, t.data.subtitle)))))
                            }))), this.state.showChange && v.a.createElement("div", {
                                className: "change-nextpage",
                                onClick: this.change.bind(this)
                            }, "\u6362\u4e00\u6362", v.a.createElement("img", {
                                src: "https://gw.alicdn.com/tfs/TB1YYyika61gK0jSZFlXXXDKFXa-36-36.png"
                            }))))
                        }
                    }]), t
                }(g.Component),
                P = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))(M),
                I = (a(295), a(28)),
                K = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            moduleKey: "feed",
                            pageSize: 9,
                            currentPageNum: 0,
                            pos: 0,
                            showChange: !1,
                            totalList: [],
                            showList: [],
                            isClient: !1,
                            existIds: {}
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e, t = (this.props.comData || {}).dataNode || [],
                                a = !1;
                            t.map((function (e, t) {
                                e.pos = t + 1
                            })), t.length > this.state.pageSize ? (a = !0, e = this.getShowData(t)) : e = t, this.setState({
                                showChange: a,
                                showList: e,
                                totalList: t
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            var e = this;
                            this.setState({
                                isClient: !0
                            }), this.checkElExist(), document.addEventListener("scroll", (function () {
                                e.checkElExist()
                            }))
                        }
                    }, {
                        key: "checkElExist",
                        value: function () {
                            var e = document.querySelector("#feed-lists").querySelectorAll("li.feed-item");
                            if (e.length > 0)
                                for (var t = 0; t < e.length; t++) {
                                    var a = e[t],
                                        n = a.getAttribute("data-vid") || "",
                                        i = 0 === n.indexOf("X"),
                                        o = a.getBoundingClientRect();
                                    o.top < window.innerHeight && o.bottom > 0 && !this.state.existIds["id_".concat(n)] && (this.state.existIds["id_".concat(n)] = !0, Object(C.a)({
                                        id: n,
                                        spmC: this.state.moduleKey,
                                        spmD: (i ? "vdo_" : "show_") + n,
                                        gmKey: "EXP"
                                    }))
                                }
                        }
                    }, {
                        key: "getShowData",
                        value: function (e, t, a) {
                            var n = [];
                            if (e = e || this.state.totalList || [], t = Number(t || this.state.pageSize), a = Number(a || this.state.currentPageNum), Array.isArray(e) && e.length > 0) {
                                for (var i = e.length, o = t * a, r = t, s = o; s < o + r; s++) {
                                    if (s >= i) {
                                        a = -1;
                                        break
                                    }
                                    var c = e[s];
                                    n.push(c)
                                }
                                this.setState({
                                    currentPageNum: ++a
                                })
                            }
                            return n
                        }
                    }, {
                        key: "jump",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.data.action.value;
                            if (t) {
                                var a = 0 === t.indexOf("X");
                                I && I.default({
                                    id: t,
                                    spmC: this.state.moduleKey,
                                    source: "feed",
                                    spmD: (a ? "vdo_" : "show_") + t
                                })
                            }
                        }
                    }, {
                        key: "change",
                        value: function () {
                            var e = this.getShowData();
                            if (e.length > 0) {
                                this.setState({
                                    showList: e
                                }), this.checkElExist();
                                var t = this.itemWrap.getBoundingClientRect().top,
                                    a = document.body.scrollTop;
                                document.body.scrollTop = a + t, Object(C.a)({
                                    spmC: this.state.moduleKey,
                                    spmD: "change"
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return v.a.createElement("div", {
                                className: "h5-detail-feed",
                                ref: function (t) {
                                    e.itemWrap = t
                                }
                            }, v.a.createElement("h1", {
                                className: "mod-title"
                            }, "\u4e3a\u4f60\u63a8\u8350"), v.a.createElement("div", {
                                className: "feed-list clipboard"
                            }, v.a.createElement("ul", {
                                id: "feed-lists"
                            }, this.state.showList.map((function (t) {
                                return v.a.createElement(w.a, {
                                    height: "2.61rem",
                                    key: "feed".concat(t.pos)
                                }, v.a.createElement("li", {
                                    key: "feed".concat(t.pos),
                                    className: "feed-item",
                                    "data-pos": t.pos,
                                    "data-vid": t.data && t.data.action && t.data.action.value,
                                    onClick: e.jump.bind(e, t)
                                }, v.a.createElement("a", {
                                    href: "javascript:void(0);"
                                }, v.a.createElement("div", {
                                    className: "section-top"
                                }, v.a.createElement("img", {
                                    src: e.state.isClient ? Object(S.useWebp)(t.data.img) : t.data.img
                                }), v.a.createElement("h2", null, t.data.title, v.a.createElement("time", null, t.data.summary)), v.a.createElement, v.a.createElement("i", {
                                    className: "heat"
                                }, t.data.totalVv)), v.a.createElement("div", {
                                    className: "section-btm"
                                }))))
                            }))), this.state.showChange && v.a.createElement("div", {
                                className: "change-nextpage",
                                onClick: this.change.bind(this)
                            }, "\u6362\u4e00\u6362", v.a.createElement("img", {
                                src: "https://gw.alicdn.com/tfs/TB1YYyika61gK0jSZFlXXXDKFXa-36-36.png"
                            }))))
                        }
                    }]), t
                }(g.Component),
                L = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))(K),
                X = a(22),
                B = a.n(X),
                R = function (e) {
                    if (document.cookie && document.cookie.length > 0) {
                        var t = document.cookie.indexOf("".concat(e, "="));
                        if (-1 !== t) {
                            t = t + e.length + 1;
                            var a = document.cookie.indexOf(";", t);
                            return -1 === a && (a = document.cookie.length), unescape(document.cookie.substring(t, a))
                        }
                    }
                    return ""
                },
                F = null,
                U = {
                    v: "1.0",
                    prefix: "acs",
                    subDomain: "",
                    mainDomain: "youku.com",
                    appKey: "24679788",
                    ecode: 0
                };
            window.lib && ((F = window.lib.mtop || {}).config.prefix = U.prefix, F.config.subDomain = U.subDomain, F.config.mainDomain = U.mainDomain), n = {
                appKey: U.appKey,
                v: U.v,
                ecode: U.ecode,
                type: "post",
                dataType: "json"
            };
            var V, H = {
                "mtop.tudou.subscribe.relation.relationservicemtop.destroy/1.0": {
                    api: "mtop.tudou.subscribe.relation.relationservicemtop.destroy",
                    data: {
                        result: !0
                    },
                    ret: ["SUCCESS::\u8c03\u7528\u6210\u529f"],
                    v: "1.0"
                },
                "mtop.tudou.subscribe.relation.relationservicemtop.create/1.0": {
                    api: "mtop.tudou.subscribe.relation.relationservicemtop.create",
                    data: {
                        result: !0
                    },
                    ret: ["SUCCESS::\u8c03\u7528\u6210\u529f"],
                    v: "1.0"
                }
            };
            V = window.__WPO, window.__WPO ? V = window.__WPO : (V = a(296)).setConfig({
                sample: 1,
                spmId: "a2h0j.10182321",
                errMsgFilter: /(debug)|(testing)/
            });
            var W = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.msg;
                    t && ("object" === Object(S.getType)(t) && (t = JSON.stringify(t)), V && V.error(e.category || "sys", t))
                },
                q = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (e.api) {
                        var t = e.api,
                            a = void 0 !== e.isSuccess && e.isSuccess,
                            n = e.delay || 0,
                            i = e.msgCode,
                            o = e.msgDetail;
                        "object" === Object(S.getType)(o) && (o = JSON.stringify(o)), V && V.retCode(t, a, n, i, o)
                    }
                },
                z = function (e, t) {
                    e && (t ? V && V.speed(e, t) : V && V.speed(e))
                };

            function J(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(a), !0).forEach((function (t) {
                        B()(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : J(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var Q = !1;

            function G(e) {
                if (Q && e) {
                    var t = H[e];
                    return new Promise((function (e, a) {
                        "SUCCESS::\u8c03\u7528\u6210\u529f" === t.ret[0] ? e(t) : a(t)
                    }))
                }
            }

            function Z(e) {
                var t, a, n;
                return o.a.async((function (i) {
                    for (;;) switch (i.prev = i.next) {
                    case 0:
                        return a = +new Date, i.prev = 1, i.next = 4, o.a.awrap(F.request(e));
                    case 4:
                        return t = i.sent, n = +new Date, q({
                            api: e.api,
                            isSuccess: !0,
                            msgCode: "".concat(t.ret[0]),
                            delay: n - a,
                            msgDetail: JSON.stringify({
                                request: e.data,
                                response: t
                            })
                        }), i.abrupt("return", Promise.resolve(t));
                    case 10:
                        return i.prev = 10, i.t0 = i.catch(1), n = +new Date, q({
                            api: e.api,
                            isSuccess: !1,
                            msgCode: "".concat(i.t0.ret[0]),
                            delay: n - a,
                            msgDetail: JSON.stringify({
                                request: e.data,
                                response: i.t0
                            })
                        }), i.abrupt("return", Promise.reject(i.t0));
                    case 15:
                    case "end":
                        return i.stop()
                    }
                }), null, null, [
                    [1, 10]
                ])
            }
            var $ = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (void 0 === e.userId || void 0 === e.UGCuserId) return {};
                    F.config.prefix = "acs", F.config.subDomain = "", F.config.mainDomain = "youku.com";
                    var t = n,
                        a = R("__ysuid") || "",
                        i = [];
                    i.push(e.userId, e.UGCuserId);
                    var o = "[" + i.join(",") + "]";
                    return t.api = "mtop.youku.follow.batchIsFollow", t.data = {
                        guid: a,
                        obj_type: 1,
                        obj_id_list: o
                    }, !Q || "local" !== window.__ENV__ && "daily" !== window.__ENV__ ? Z(t) : G(t.api)
                },
                ee = function (e) {
                    var t = n;
                    t.api = "mtop.youku.xiaochengxu.wx.h5.ewm";
                    var a = {
                        vid: e.vid,
                        sendRandom: e.sendRandom
                    };
                    return t.data = a, Z(t)
                },
                te = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    var t = n,
                        a = R("__ysuid") || "";
                    return e.state ? t.api = "mtop.tudou.subscribe.relation.relationservicemtop.destroy/1.0" : t.api = "mtop.tudou.subscribe.relation.relationservicemtop.create/1.0", t.data = {
                        target_id: e.target_id,
                        platform: 0,
                        guid: a,
                        did: 3,
                        is_utdid: !1
                    }, !Q || "local" !== window.__ENV__ && "daily" !== window.__ENV__ ? Z(t) : G(t.api)
                },
                ae = function (e) {
                    var t = n;
                    return t.api = "mtop.youku.mplay.action.addupdown", t.AntiFlood = !0, t.data = {
                        vid: e,
                        flag: 1
                    }, !Q || "local" !== window.__ENV__ && "daily" !== window.__ENV__ ? Z(t) : G(t.api)
                },
                ne = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (void 0 !== e.keyword && "" !== e.keyword) {
                        F.config.prefix = "acs", F.config.subDomain = "", F.config.mainDomain = "youku.com";
                        var t = n;
                        return t.api = "mtop.youku.soku.yksearch", t.v = "2.0", t.data = Y({
                            appScene: "kubox",
                            appCaller: "h5",
                            s: "h5",
                            device: "h5",
                            platform: "h5",
                            utdid: R("cna")
                        }, e), !Q || "local" !== window.__ENV__ && "daily" !== window.__ENV__ ? Z(t) : G(t.api)
                    }
                },
                ie = function () {
                    var e = Object.assign({}, n);
                    return F.config.prefix = "acs", F.config.subDomain = "m", F.config.mainDomain = "taobao.com", e.api = "mtop.relationrecommend.WirelessRecommend.recommend", e.v = "2.0", e.data = {
                        appId: "14177",
                        params: JSON.stringify({
                            count: "1",
                            fr: "h5",
                            app_source: "h5",
                            x_utdid: R("cna"),
                            channel: "yk_h5_playpage"
                        })
                    }, !Q || "local" !== window.__ENV__ && "daily" !== window.__ENV__ ? Z(e) : G(e.api)
                },
                oe = function (e) {
                    var t = window.xparamsString.refer;
                    F.config.prefix = "acs", F.config.subDomain = "", F.config.mainDomain = "youku.com";
                    var a = n,
                        i = location.href;
                    t || (i += "&refer=qita_product.fujianxun_00002257_000000_NFNrem_18122700"), a.api = "com.youku.aplatform.weakGet";
                    var o = {
                        targetUrl: i,
                        sourceType: "invisible",
                        title: document.title || "",
                        picUrl: window.xparamsString.uImg,
                        bizId: "common",
                        videoId: window.vid,
                        watchCount: window.xparamsString.uVv || 0,
                        btnName: "\u7acb\u5373\u89c2\u770b",
                        extendInfo: JSON.stringify({
                            url: location.href,
                            cookie: "cna=".concat(R("cna"), ";ua=").concat(window.navigator.userAgent)
                        })
                    };
                    return Object.assign(o, e), a.data = {
                        bizType: "ykPassword.genPassword",
                        bizParam: JSON.stringify(o)
                    }, F.request(a)
                },
                re = a(141),
                se = (a(310), a(28)),
                ce = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            moduleKey: "h5_detail_info",
                            showName: e.videoMap.showName || e.videoMap.videoTitle,
                            introData: {},
                            subscribeData: {},
                            starList: [],
                            isDetail: !1,
                            isOpenCall: !1,
                            briefBtnText: "\u7b80\u4ecb",
                            heatIcon: "",
                            upState: !1,
                            totalUp: e.videoMap.totalUp,
                            isSubscribed: !1
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this,
                                t = (this.props.comData || {}).dataNode || [],
                                a = {},
                                n = {},
                                i = [];
                            i.diretor = [], i.actor = [], t.map((function (t) {
                                if (10010 === t.type) {
                                    if ((a = t.data || {}).subTitleList = [], Array.isArray(a.subTitles) && (a.subTitles.map((function (t) {
                                        var n = {};
                                        if ("PLAY_VV" === t.subtitleType) {
                                            n.subtitle = t.subtitle || a.heat;
                                            var i = "";
                                            t.extra >= 7 ? i = "https://gw.alicdn.com/tfs/TB1.hX5CNTpK1RjSZR0XXbEwXXa-42-42.png" : t.extra >= 4 ? i = "https://gw.alicdn.com/tfs/TB13PR.CMHqK1RjSZJnXXbNLpXa-42-42.png" : t.extra >= 1 && (i = "https://gw.alicdn.com/tfs/TB1JpF7CFzqK1RjSZSgXXcpAVXa-42-42.png"), e.setState({
                                                heatIcon: i
                                            })
                                        } else "GENRE" === t.subtitleType ? n.subtitle = t.subtitle || a.showGenre : n.subtitle = t.subtitle || "";
                                        n.subtitleType = t.subtitleType, a.subTitleList.push(n)
                                    })), a.scorePrefix && a.socreValue)) {
                                        var o = {
                                            subtitleType: "SCORE"
                                        };
                                        o.subtitle = "".concat(a.socreValue, "\u5206"), a.subTitleList.splice(1, 0, o)
                                    }
                                } else 10012 === t.type ? n = t.data || {} : 10011 === t.type && ("\u5bfc\u6f14" === t.data.subtitle ? i.diretor.push(t.data.title) : i.actor.push(t.data.title), i.push(t.data))
                            })), this.setState({
                                introData: a,
                                subscribeData: n,
                                starList: i
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            this.getSubscribe(), this.setState({
                                upState: !!window.localStorage["wechatPraiseState_".concat(this.props.videoMap.vId)]
                            }), Object(C.a)({
                                spmC: this.state.moduleKey,
                                spmD: "total",
                                gmKey: "EXP"
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return v.a.createElement("div", {
                                className: "h5-detail-info"
                            }, v.a.createElement("div", {
                                className: "brief-info"
                            }, v.a.createElement("div", {
                                className: "brief-title",
                                onClick: this.switchDetail.bind(this)
                            }, v.a.createElement("div", {
                                className: "module-name"
                            }, this.state.introData.mark && this.state.introData.mark.data.text && v.a.createElement("span", {
                                className: "icon-".concat(this.state.introData.mark && this.state.introData.mark.data.color)
                            }, this.state.introData.mark.data.text), v.a.createElement("h1", null, this.state.showName)), v.a.createElement("a", {
                                href: "javascript:void(0)",
                                className: "showMore"
                            }, this.state.briefBtnText, v.a.createElement("img", {
                                className: "".concat(this.state.isDetail && "active", " ").concat(this.state.isOpenCall && "iscall"),
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTCsrKysrKy0tLSsrKywsLCsrK3Pa218AAAAGdFJOUwDzOy2l6AsspekAAABdSURBVCjPY2AYhoDZxQCNwcCaJgRhKKYFQIXU0hIVQDSTWFoSXBVEmWIaXBVQFqQMSsHMAClTTIOZCVOGogiiAEURRBmqIrAyVEVgZWiK0KyDKUNXxMBg4swwXAEAoNkVY7GaTioAAAAASUVORK5CYII="
                            }))), v.a.createElement("div", {
                                className: "brief-score"
                            }, this.state.introData.subTitleList && this.state.introData.subTitleList.map((function (t, a) {
                                return t.subtitle && v.a.createElement("span", {
                                    className: "".concat("PLAY_VV" === t.subtitleType ? "hotVv" : ""),
                                    key: "subtile".concat(a)
                                }, "PLAY_VV" === t.subtitleType ? e.state.heatIcon && v.a.createElement("img", {
                                    src: e.state.heatIcon
                                }) || null : a > 0 ? v.a.createElement("span", {
                                    className: "divide"
                                }, "/") : "", v.a.createElement("span", null, t.subtitle))
                            })))), this.state.isDetail ? v.a.createElement("div", {
                                className: "brief-more"
                            }, this.state.subscribeData.ownerUid && v.a.createElement("div", {
                                className: "subscribe"
                            }, v.a.createElement("a", {
                                href: "//i.youku.com/u/" + this.state.subscribeData.ownerUid,
                                className: "author-container"
                            }, v.a.createElement("img", {
                                src: this.state.subscribeData.img
                            }), v.a.createElement("div", {
                                className: "user-describe"
                            }, v.a.createElement("h3", {
                                className: "title"
                            }, this.state.subscribeData.title), v.a.createElement("p", {
                                className: "subtitle"
                            }, this.state.subscribeData.subtitle))), v.a.createElement("a", {
                                href: "javascript:void(0);",
                                onClick: this.changeSubscribe.bind(this, this.state.isSubscribed),
                                className: "subscribe-btn ".concat(this.state.isSubscribed && "grey-btn")
                            }, this.state.isSubscribed ? "\u5df2\u8ba2\u9605" : "\u8ba2\u9605")), this.state.starList.length > 0 && v.a.createElement("div", {
                                className: "celebrity-group"
                            }, this.state.starList.diretor.length > 0 && v.a.createElement("span", {
                                className: "celebrity-type"
                            }, "\u5bfc\u6f14\uff1a", this.state.starList.diretor.join(",")), this.state.starList.actor.length > 0 && v.a.createElement("span", {
                                className: "celebrity-list"
                            }, "\u4e3b\u6f14\uff1a", this.state.starList.actor.join(","))), v.a.createElement("p", {
                                className: "brief-desc"
                            }, this.state.introData.desc), v.a.createElement("div", {
                                className: "praise-wrap"
                            }, v.a.createElement("div", {
                                className: "flex-box praise-conatiner",
                                onClick: this.addPraise.bind(this)
                            }, v.a.createElement("img", {
                                src: this.state.upState ? "https://gw.alicdn.com/tfs/TB1fqkoGYrpK1RjSZTEXXcWAVXa-60-60.png" : "https://gw.alicdn.com/tfs/TB14YslGY2pK1RjSZFsXXaNlXXa-60-60.png",
                                alt: "",
                                className: "praise-img"
                            }), v.a.createElement("span", null, this.state.totalUp || 0, "\u4eba\u8d5e\u8fc7")), v.a.createElement("div", {
                                className: "flex-box report-container",
                                onClick: this.reportVideo.bind(this)
                            }, v.a.createElement("img", {
                                src: "https://gw.alicdn.com/tfs/TB18EAjGYvpK1RjSZFqXXcXUVXa-60-60.png",
                                alt: ""
                            }), v.a.createElement("span", null, "\u5185\u5bb9\u4e3e\u62a5")))) : "", v.a.createElement("div", {
                                className: "brief-btm"
                            }, v.a.createElement("div", {
                                className: "item",
                                onClick: this.jumpComment.bind(this)
                            }, v.a.createElement("i", {
                                className: "comment"
                            }), this.props.videoMap.totalComment > 0 ? v.a.createElement("span", null, this.props.videoMap.totalComment, "\u70ed\u8bc4") : v.a.createElement("span", null, "\u8bc4\u8bba")), v.a.createElement("div", {
                                className: "item",
                                onClick: this.toHD.bind(this)
                            }, v.a.createElement("i", {
                                className: "toHD clipboard"
                            }), v.a.createElement("span", null, "\u6781\u6e05")), v.a.createElement("div", {
                                className: "item",
                                onClick: this.download.bind(this)
                            }, v.a.createElement("i", {
                                className: "download clipboard"
                            }), v.a.createElement("span", null, "\u7f13\u5b58")), v.a.createElement("div", {
                                className: "item",
                                onClick: this.share.bind(this)
                            }, v.a.createElement("i", {
                                className: "share"
                            }), v.a.createElement("span", null, "\u5206\u4eab"))))
                        }
                    }, {
                        key: "switchDetail",
                        value: function (e) {
                            this.state.isOpenCall ? se && se.default({
                                spmC: this.state.moduleKey,
                                source: "mplaypage12",
                                spmD: "mplaypage12"
                            }) : (this.setState({
                                isDetail: !this.state.isDetail
                            }), this.state.isDetail ? Object(C.a)({
                                spmC: this.state.moduleKey,
                                spmD: "detailBtnClose"
                            }) : Object(C.a)({
                                spmC: this.state.moduleKey,
                                spmD: "detailBtnOpen"
                            }))
                        }
                    }, {
                        key: "getSubscribe",
                        value: function () {
                            var e, t, a;
                            return o.a.async((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (e = window.__USERINFO__.oneId || "", t = this.state.subscribeData.ownerUid && Object(re.decode)(this.state.subscribeData.ownerUid)) {
                                        n.next = 4;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 4:
                                    return n.next = 6, o.a.awrap($({
                                        userId: e,
                                        UGCuserId: t
                                    }));
                                case 6:
                                    (a = n.sent).data && a.data.resultData && a.data.resultData[t] && this.setState({
                                        isSubscribed: !0
                                    });
                                case 8:
                                case "end":
                                    return n.stop()
                                }
                            }), null, this)
                        }
                    }, {
                        key: "changeSubscribe",
                        value: function (e) {
                            var t;
                            return o.a.async((function (a) {
                                for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (window.__USERINFO__ && window.__USERINFO__.oneId) {
                                        a.next = 3;
                                        break
                                    }
                                    return location.href = "//account.youku.com/?callback=".concat(encodeURIComponent(window.location.href)), a.abrupt("return");
                                case 3:
                                    return a.prev = 3, a.next = 6, o.a.awrap(te({
                                        target_id: this.state.subscribeData.ownerUid,
                                        state: e
                                    }));
                                case 6:
                                    a.sent.data.result && (t = !e), this.setState({
                                        isSubscribed: t
                                    }), a.next = 14;
                                    break;
                                case 11:
                                    a.prev = 11, a.t0 = a.catch(3), "object" === Object(S.getType)(a.t0) ? (a.t0 && a.t0.ret[0]).indexOf("-302::Relation Exists") > -1 && this.setState({
                                        isSubscribed: !this.state.isSubscribed
                                    }) : W({
                                        category: "tryCatch",
                                        msg: "h5-detail-info:changeSubscribe:".concat(JSON.stringify(a.t0))
                                    });
                                case 14:
                                    e ? Object(C.a)({
                                        spmC: this.state.moduleKey,
                                        spmD: "cancelSubscribe"
                                    }) : Object(C.a)({
                                        spmC: this.state.moduleKey,
                                        spmD: "subscribe"
                                    });
                                case 15:
                                case "end":
                                    return a.stop()
                                }
                            }), null, this, [
                                [3, 11]
                            ])
                        }
                    }, {
                        key: "reportVideo",
                        value: function () {
                            var e = this.props.videoMap.videoId;
                            location.href = "http://h5.m.youku.com/app/moreplatfeedback.html?playId=".concat(e), Object(C.a)({
                                spmC: this.state.moduleKey,
                                spmD: "reportText"
                            })
                        }
                    }, {
                        key: "download",
                        value: function () {
                            se && se.default({
                                spmC: this.state.moduleKey,
                                source: "download",
                                spmD: "download"
                            })
                        }
                    }, {
                        key: "toHD",
                        value: function () {
                            se && se.default({
                                spmC: this.state.moduleKey,
                                source: "definition",
                                spmD: "definition"
                            })
                        }
                    }, {
                        key: "jumpComment",
                        value: function () {
                            try {
                                var e = document.querySelector("#YKComment").getBoundingClientRect().top;
                                document.body.scrollTop = e, document.documentElement.scrollTop = e, Object(C.a)({
                                    spmC: this.state.moduleKey,
                                    spmD: "commentBtn"
                                })
                            } catch (t) {
                                W({
                                    category: "tryCatch",
                                    msg: "h5-detail-info:jumpComment:".concat(JSON.stringify(t))
                                })
                            }
                        }
                    }, {
                        key: "addPraise",
                        value: function () {
                            var e, t;
                            return o.a.async((function (a) {
                                for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!this.state.upState) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return e = this.props.videoMap.vId, a.prev = 3, a.next = 6, o.a.awrap(ae(e));
                                case 6:
                                    a.next = 11;
                                    break;
                                case 8:
                                    a.prev = 8, a.t0 = a.catch(3), W({
                                        category: "tryCatch",
                                        msg: "h5-detail-info:addPraise:".concat(JSON.stringify(a.t0))
                                    });
                                case 11:
                                    window.localStorage["wechatPraiseState_".concat(e)] = 1, (t = String(this.state.totalUp)).indexOf("\u4e07") < 0 && t.indexOf("\u4ebf") < 0 && (t = parseInt(t) + 1), this.setState({
                                        upState: !0,
                                        totalUp: t
                                    }), Object(C.a)({
                                        spmC: this.state.moduleKey,
                                        spmD: "addPraise"
                                    });
                                case 16:
                                case "end":
                                    return a.stop()
                                }
                            }), null, this, [
                                [3, 8]
                            ])
                        }
                    }, {
                        key: "share",
                        value: function () {
                            /micromessenger/i.test(navigator.userAgent) || /weibo/i.test(navigator.userAgent) || /dingtalk/i.test(navigator.userAgent) ? this.props.dispatch({
                                type: "ykToast/show",
                                payload: {
                                    content: "\u70b9\u51fb\u6b64\u5904\u5206\u4eab",
                                    showMask: !0,
                                    rootClass: "share-wrap"
                                }
                            }) : this.props.dispatch({
                                type: "ykToast/showDelay",
                                payload: {
                                    content: "\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u5206\u4eab<br/>\u6309\u94ae\u5206\u4eab\u7ed9\u597d\u53cb\u54e6"
                                }
                            })
                        }
                    }]), t
                }(g.Component),
                le = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))(ce),
                de = (a(311), Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))((function (e) {
                    var t, a = e.comData,
                        n = e.videoMap.videoId,
                        i = function (e) {
                            e && (location.href = "/video/id_".concat(e, ".html").concat(location.search), Object(C.a)({
                                spmC: "anthology",
                                spmD: "click_" + e,
                                id: e
                            }))
                        };
                    a.dataNode.length && a.dataNode.map((function (e, a) {
                        e.data.action && e.data.action.value === n && (t = a)
                    }));
                    var o = document.querySelector("html").style.fontSize.replace("px", ""),
                        r = 0 === a.positionStyle ? .72 : 1.35,
                        s = t * r * o;
                    return document.querySelector(".anthologyStageContainer").scrollLeft = s, Object(C.a)({
                        spmC: "anthology",
                        spmD: "show",
                        gmKey: "EXP"
                    }), v.a.createElement("div", {
                        className: "anthologyContainer"
                    }, v.a.createElement("h1", {
                        className: "mod-title"
                    }, "\u9009\u96c6"), v.a.createElement("div", {
                        className: "anthologyStageContainer ".concat(0 === a.positionStyle && "style0")
                    }, a.dataNode.length && a.dataNode.map((function (e, n) {
                        return 0 === a.positionStyle ? v.a.createElement("div", {
                            className: "anthologyStageStyle0".concat(n === t ? " stageActive" : "").concat(e.data && e.data.mark && e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" === e.data.mark.data.text ? " markBgImg" : ""),
                            key: n,
                            onClick: function () {
                                i(e.data.action && e.data.action.value)
                            }
                        }, e.data.stage, e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" !== e.data.mark.data.text && v.a.createElement("div", {
                            className: "mark",
                            style: {
                                backgroundColor: Object(S.getColor)(e.data.mark.data.color)
                            }
                        }, v.a.createElement("span", null, e.data.mark.data.text))) : v.a.createElement("div", {
                            className: "anthologyStageStyle1".concat(n === t ? " stageActive" : "").concat(e.data && e.data.mark && e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" === e.data.mark.data.text ? " markBgImg" : ""),
                            key: e.data.img,
                            onClick: function () {
                                i(e.data.action && e.data.action.value)
                            }
                        }, v.a.createElement("div", {
                            className: "stageStyle1Container"
                        }, v.a.createElement("div", {
                            className: "stageStyle1ImgContainer"
                        }, v.a.createElement("img", {
                            src: e.data.img,
                            alt: ""
                        }), v.a.createElement("div", {
                            className: "summary"
                        }, e.data.summary), e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" !== e.data.mark.data.text && v.a.createElement("div", {
                            className: "mark",
                            style: {
                                backgroundColor: Object(S.getColor)(e.data.mark.data.color)
                            }
                        }, v.a.createElement("span", null, e.data.mark.data.text))), v.a.createElement("div", {
                            className: "title".concat(n === t ? " stageActive" : "")
                        }, e.data.title && (e.data.title.length > 15 ? e.data.title.slice(0, 15) + "..." : e.data.title)), v.a.createElement("div", {
                            className: "subTitle".concat(n === t ? " stageActive" : "")
                        }, e.data.subtitle)))
                    }))))
                }))),
                ue = a(14),
                me = a.n(ue),
                pe = (a(315), Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))((function (e) {
                    var t = Object(g.useState)(-1),
                        a = me()(t, 2),
                        n = a[0],
                        i = a[1],
                        o = e.comData,
                        r = e.videoMap.videoId;
                    return Object(g.useEffect)((function () {
                        var e = -1,
                            t = Object(S.getParam)("lang"),
                            a = !1;
                        o.dataNode.length && o.dataNode.map((function (n, i) {
                            a || n.data.action && n.data.action.value === r && (t ? n.data.langCode === t ? (e = i, a = !0) : e = i : (e = i, a = !0))
                        })), i(-1 === e ? 0 : e);
                        var n = document.querySelector("html").style.fontSize.replace("px", ""),
                            s = 0 === o.positionStyle ? .72 : 1.35,
                            c = e * s * n;
                        document.querySelector(".seriesStageContainer").scrollLeft = c, Object(C.a)({
                            spmC: "series",
                            spmD: "show",
                            gmKey: "EXP"
                        })
                    }), [0]), v.a.createElement("div", {
                        className: "series"
                    }, v.a.createElement("h1", {
                        className: "mod-title"
                    }, "\u7cfb\u5217\u7535\u5f71"), v.a.createElement("div", {
                        className: "seriesStageContainer"
                    }, o.dataNode.length && o.dataNode.map((function (e, t) {
                        return v.a.createElement("div", {
                            className: "seriesStageStyle1 ".concat(t === n ? "stageActive" : ""),
                            key: "".concat(e.data.action && e.data.action.value).concat(e.data.title),
                            onClick: function () {
                                ! function (e, t) {
                                    var a = location.search;
                                    if (t)
                                        if (a) {
                                            a = a.substr(1);
                                            var n = Object(S.queryStringToObj)(a);
                                            n.lang = t, a = "?".concat(Object(S.objToQueryString)(n))
                                        } else a = "?lang=".concat(t);
                                    location.href = "/video/id_".concat(e, ".html").concat(a), Object(C.a)({
                                        spmC: "series",
                                        spmD: "click_" + e,
                                        id: e
                                    })
                                }(e.data.action && e.data.action.value, e.data.langCode)
                            }
                        }, v.a.createElement("div", {
                            className: "stageStyle1Container"
                        }, v.a.createElement("div", {
                            className: "stageStyle1ImgContainer"
                        }, v.a.createElement("img", {
                            src: e.data.img,
                            alt: ""
                        }), v.a.createElement("div", {
                            className: "summary"
                        }, e.data.summary), e.data.mark && v.a.createElement("div", {
                            className: "style1Mark",
                            style: {
                                backgroundColor: Object(S.getColor)(e.data.mark.data.color)
                            }
                        }, e.data.mark.data.text)), v.a.createElement("div", {
                            className: "title ".concat(t === n ? "stageActive" : "")
                        }, e.data.title && (e.data.title.length > 15 ? e.data.title.slice(0, 15) + "..." : e.data.title)), v.a.createElement("div", {
                            className: "subTitle ".concat(t === n ? "stageActive" : "")
                        }, e.data.subtitle)))
                    }))))
                }))),
                he = (a(316), Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))((function (e) {
                    var t = Object(g.useState)(!1),
                        a = me()(t, 2),
                        n = a[0],
                        i = a[1],
                        o = Object(g.useState)("h5-detail-corner"),
                        r = me()(o, 1)[0],
                        s = {},
                        c = e.comData && e.comData.dataNode;
                    Array.isArray(c) && (s = c[0] && c[0].data || {});
                    var l = s.img || "",
                        d = s.action && s.action.value || "",
                        u = {};
                    return "" !== s.widgetWidth && (u.width = Number(s.widgetWidth) / 100 + "rem"), "" !== s.widgetHeight && (u.height = Number(s.widgetHeight) / 100 + "rem"), "" !== s.widgetBottom && (u.bottom = Number(s.widgetBottom) / 100 + "rem"), "" !== s.widgetRight && (u.right = Number(s.widgetRight) / 100 + "rem"), Object(g.useEffect)((function () {
                        l && d && i(!0), Object(C.a)({
                            spmC: r,
                            spmD: "show",
                            gmKey: "EXP"
                        })
                    }), [0]), n && v.a.createElement("div", {
                        className: "Corner-container",
                        style: u
                    }, v.a.createElement("img", {
                        src: l,
                        alt: "",
                        className: "Corner",
                        onClick: function () {
                            Object(C.a)({
                                spmC: r,
                                spmD: "click"
                            }), location.href = d
                        }
                    }), v.a.createElement("img", {
                        onClick: function () {
                            Object(C.a)({
                                spmC: r,
                                spmD: "close"
                            }), i(!1)
                        }, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABZpJREFUaAXdmz9vHEUYxpMAlhGOY+xIToMtI8sQDkVyEQq7chGQMD6Jwi1KQU2BhOATICEkSoQQ38ACpBOmSOPKBpEiKOIKTlESG4oY6SwnGBEi/j2/tWezu97d25md27vzKz3ePzfzvvO7mZuZnR2fPtU9G5LrWWlampQuSKPS8JF0OPXwSA90vCftStvSLemR5N1Oe/YI0CvSvDQjPSG52D/KdEe6If0g8YV4MV/AcyrNq1JNOuOlZI+d/KvTpnRNaj2+7XZWFvgFha1LNN0qjKbekH52DeYKfE4BV6XLroFL5ruu/GvSfVs/LsAvK8jb0tO2wTyn/1P+vpB+svFr26lckfOr0lM2QbqUljLQQf4l3S4aoygwzt+SXpNcWkXR8timoywvSeclOjY6uFwrAnxWHt6RLuV66u2Hzyn8i9JNKXf87gRMzQL7vNTv9qwKyGjBuJ1Z052Aacb9XLMqXsyARj/G7kYu8oCvKB2/2UEzmndmR5YFzNBzVeqnDkrFKWwXlfKu9FsyR9o0kEkF4+ygwsJI2WGAJWZpwMygej2piBXS8QIGWGKWBGZu3KvpYqxgni5ggSm0JHA9/MTiZGRk5MzKysr58fHxJy2yFUqKT3wTo1CG44liTNEC8og3ezx9/h0K0mw235yamppot9u/1+v1b7e2tqwn9WlRFhYWzjUajdcnJibO7uzstGu12tcHBweZY2yaD92DCbbg0TL6rfE8a21LS0vjwJKRgq2vr79BQa0dJTLgA1/45CNiECuRrOhlyGaAR5WTh3dr29zc3KdmTcaxsbFnykIbWHwZv8Qglrm2PMIGY7g6wVOHged+Ydvb2/ubZry/v/+HyVQGOg0W38QglolheYQNxhBy3tJBLDm/2eXl5W/KQmfB4ttDvxAwQj4kzcQIHC7KQncZFiIYhwCmF8uaYuqj4uYKXQEsEDDOAsy6sTezha4I1vBNA8wiuVcrCl0xLIyTTLI/kEr/hvGWtDwg0jJ8RYceOj1PHVSyKOb6DsAfSsHEwdz1ecyCJkbFsIRs06R519M1y2rePYCFcbjrwERJg+Y+VkEzPgx0+DcAjt448efUMK8su2ppv2MTsMw01PiwOD7sOnAaLM247DTUAjKaNAD29u416pnzLFiGHh9z72S8AtcPqGHevHu3PFg6sbSOrILmfQ/gXd+0nWBNvB5A7wK8bQrg41gU1sSqGHobYN6qs6eitNnCmoAVQcN4C2DetrGBpJS5wpqgFUDD+Ahg7Mbhwe1vWVgTtcvQASMPDxgLXB9J5gvgXiFj3bjVaq2a1UUylZ0upn2BLOLNzc2tOa5rsbT7vhQMS5SRsbjJia0tLi6O+YQlflpNE4NYtuU7Sg9bMN+I1ug1F2cbGxt7LJKTl1rw9TxroM0SMDGI5VJG5QnZTJM2ft7TidPbBxbJWTd2bHIm/rEjPxlqFliHtw74YxT62DhOAvPi6V3z4Qk5fiKOcCNbtEnDxwfXOTkhBksIC1MSmHtrEpu+Bt1ggCVmaevR7I/4VeLVRLLJxzL38cV/Kttn0i/JMqYBk4a9EYCz6WsQ7UsV+vu0gmcBk/a2xA43dsUMkn2nwn6VVeA8YPIwYLPDjb1Pg2BU0udS5kvzTsBkvCkxNvc7NLCfSrkdbidg5Q+eptjOB3C/Nm+aMTWbC6vPC781pKbZzkdHdlHql96b3pgOit9sZjPWZ6EVqeEwsU5oNnelSxIbT3tp1CZDT2pvnFUw15pi08qqdDnLcZfvM4NiUnHfNo4rsInD3LsuWT9wGAeWRx4EGlJsumjjoyywiTWnE7YG1aS06apJ53Lkt8nwyCNey8VBNI8vYONzVCdMSeelGcm2j1CWwFhwYw2KZRlGiODhXcfS5hs4WiA2y9DUp6VJ6YLEFzJ8JB2q/1e8/wHw9LaeEeqiHgAAAABJRU5ErkJggg==",
                        alt: "",
                        className: "close"
                    }))
                }))),
                fe = (a(317), Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))((function (e) {
                    var t = Object(g.useState)(""),
                        a = me()(t, 2),
                        n = a[0],
                        i = a[1],
                        r = Object(g.useState)("h5-detail-wechatqrcode"),
                        s = me()(r, 1)[0];
                    return Object(g.useEffect)((function () {
                        Object(C.a)({
                                spmC: s,
                                spmD: "show",
                                gmKey: "EXP"
                            }),
                            function () {
                                var t, a;
                                o.a.async((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!/micromessenger/i.test(navigator.userAgent)) {
                                            n.next = 7;
                                            break
                                        }
                                        return 100, t = e.videoMap.videoId, n.next = 5, o.a.awrap(ee({
                                            vid: t,
                                            sendRandom: 100
                                        }));
                                    case 5:
                                        a = n.sent, i(a.data.data);
                                    case 7:
                                    case "end":
                                        return n.stop()
                                    }
                                }))
                            }()
                    }), 0), n && v.a.createElement("div", {
                        className: "weChatQrcode-container"
                    }, v.a.createElement("img", {
                        src: "data:image/png;base64," + n,
                        alt: "",
                        className: "weChatQrcode",
                        onClick: function () {
                            Object(C.a)({
                                spmC: s,
                                spmD: "click"
                            })
                        }
                    }))
                }))),
                ge = (a(318), a(128)),
                ve = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            moduleKey: "h5_adbar",
                            isClient: !1
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentWillMount",
                        value: function () {}
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            var e = this;
                            this.setState({
                                isClient: !0
                            }, (function () {
                                e.createJs(), Object(C.a)({
                                    spmC: e.state.moduleKey,
                                    spmD: "show",
                                    gmKey: "EXP"
                                })
                            }))
                        }
                    }, {
                        key: "createJs",
                        value: function () {
                            var e = document.createElement("script");
                            e.src = "//g.alicdn.com/mm/yksdk/0.1.31/pagesdk.js", document.body.appendChild(e), e.onload = function () {
                                window.adPageSDK && new(0, window.adPageSDK)({
                                    requestURL: "//sealine.youku.com/yk/vhtml",
                                    requestData: {
                                        bt: "phone",
                                        os: ge.os.isIOS ? "ios" : "android",
                                        v: window.__INITIAL_DATA__.videoMap.vId
                                    }
                                }).check()
                            }
                        }
                    }, {
                        key: "sendH5AdClickLog",
                        value: function () {
                            Object(C.a)({
                                spmC: this.state.moduleKey,
                                spmD: "click"
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return v.a.createElement("div", {
                                className: "h5-adContainer",
                                "data-adpid": "1425020640",
                                onClick: this.sendH5AdClickLog
                            })
                        }
                    }]), t
                }(g.Component),
                ye = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))(ve),
                we = function (e) {
                    function t() {
                        var e;
                        return s()(this, t), (e = u()(this, p()(t).call(this))).state = {
                            component: {},
                            match: {
                                "h5-detail-guide": N,
                                "h5-detail-ad": x,
                                "h5-detail-comment": A,
                                "h5-detail-recommend": P,
                                "h5-detail-info": le,
                                "h5-detail-anthology": de,
                                "h5-detail-feed": L,
                                "h5-detail-series": pe,
                                "h5-detail-corner": he,
                                "h5-detail-wechat": fe,
                                "h5-adbar": ye
                            }
                        }, e
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.organizeData(this.props.drawerData);
                            Object(S.isEmptyObject)(e) || this.setState({
                                component: e
                            })
                        }
                    }, {
                        key: "inBlackList",
                        value: function (e) {
                            for (var t = !1, a = 0; a < e.blackListRefer.length; a++) {
                                var n = e.blackListRefer[a];
                                if (this.props.refer === n) {
                                    t = !0;
                                    break
                                }
                            }
                            for (var i = 0; i < e.blackUA.length; i++) {
                                var o = e.blackUA[i];
                                if (this.props.userAgent.indexOf(o) > -1) {
                                    t = !0;
                                    break
                                }
                            }
                            return t
                        }
                    }, {
                        key: "organizeData",
                        value: function (e) {
                            var t = e.type,
                                a = this.props.platoConfig && this.props.platoConfig.relations || {};
                            if (t in a) {
                                var n = a[t];
                                if (Array.isArray(n.blackListRefer) && n.blackListRefer.length > 0 || Array.isArray(n.blackUA) && n.blackUA.length > 0)
                                    if (!0 === this.inBlackList(n)) return {};
                                return e
                            }
                            return {}
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.state.component.componentId,
                                t = "";
                            return e in this.state.match && (t = this.state.match[e]), t ? v.a.createElement("div", {
                                "data-spm": this.props.dataSpm
                            }, v.a.createElement(t, {
                                comData: this.state.component,
                                lazyload: this.props.lazyload,
                                title: this.props.drawerData.componentName || ""
                            })) : null
                        }
                    }]), t
                }(g.Component),
                be = Object(E.connect)((function (e) {
                    return {
                        platoConfig: e.page.platoConfig,
                        userAgent: e.page.userAgent,
                        refer: e.page.refer
                    }
                }))(we),
                ke = (a(319), a(320), Object(E.connect)((function (e) {
                    return {
                        channels: e.page.pageConfig.channels,
                        userInfo: e.page.userInfo
                    }
                }))((function (e) {
                    for (var t = e.userInfo.oneId, a = e.userInfo.nickname, n = e.channels || [], i = Math.ceil(n.length / 3), o = [], r = Object(g.useState)(!1), s = me()(r, 2), c = s[0], l = s[1], d = function (e) {
                        var t = n.filter((function (t, a) {
                            return a >= 4 * e && a < 4 * e + 4
                        }));
                        o.push(t)
                    }, u = 0; u < i; u++) d(u);
                    var m = e.userInfo && e.userInfo.user_icon || "https://gw.alicdn.com/tfs/TB1VEXab7L0gK0jSZFtXXXQCXXa-72-72.png",
                        p = function () {
                            Object(C.a)({
                                spmC: "sidepanel",
                                spmD: "personalcenter"
                            }), location.href = "//i.youku.com/u/profile"
                        };
                    return v.a.createElement("div", {
                        className: "h5-panel"
                    }, !0 === e.show && v.a.createElement("div", {
                        className: "x_sidepanel_p"
                    }, v.a.createElement("div", {
                        className: "toast show",
                        onClick: function (t) {
                            e.toggelMenu()
                        }
                    }), v.a.createElement("div", {
                        id: "panel",
                        className: "outside panel_right"
                    }, v.a.createElement("div", {
                        className: "x_sidepanel"
                    }, v.a.createElement("div", {
                        className: "x_user x_sp_botline"
                    }, t ? v.a.createElement("div", {
                        className: "x_ydl"
                    }, v.a.createElement("div", {
                        className: "x_avatar"
                    }, v.a.createElement("img", {
                        src: m,
                        onClick: p
                    })), v.a.createElement("div", {
                        class: "txt"
                    }, v.a.createElement("a", {
                        href: "javascript:void(0);",
                        className: "logout",
                        onClick: function () {
                            Object(C.a)({
                                spmC: "sidepanel",
                                spmD: "logout"
                            }), location.href = "https://account.youku.com/logoutAll.htm"
                        }
                    }, "\u767b\u51fa"), v.a.createElement("em", {
                        onClick: p
                    }, a))) : v.a.createElement("div", {
                        className: "x_wdl",
                        onClick: function () {
                            Object(C.a)({
                                spmC: "sidepanel",
                                spmD: "login"
                            }), location.href = "https://account.youku.com/?callback=".concat(encodeURIComponent(window.location.href))
                        }
                    }, v.a.createElement("div", {
                        className: "x_avatar"
                    }, v.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB1UGfGkeT2gK0jSZFvXXXnFXXa-80-80.png"
                    })), v.a.createElement("div", {
                        className: "txt"
                    }, v.a.createElement("a", {
                        href: null
                    }, "\u70b9\u51fb\u767b\u5f55"), v.a.createElement("p", null, "\u6211\u7684\u5730\u76d8\u6211\u505a\u4e3b\uff0c\u505a\u4e3b\u600e\u80fd\u4e0d\u767b\u5f55")))), n.length > 0 && v.a.createElement("div", {
                        className: "x_channel"
                    }, v.a.createElement("div", {
                        className: "hd on"
                    }, v.a.createElement("i", {
                        onClick: function () {
                            l(!c)
                        }, className: "x_icon_arw".concat(c ? " active" : "")
                    }), v.a.createElement("i", {
                        className: "x_icon_pd"
                    }), v.a.createElement("span", {
                        class: "channel-title"
                    }, "\u9891\u9053")), v.a.createElement("ul", {
                        className: "bd"
                    }, o.map((function (e, t) {
                        return v.a.createElement("li", {
                            key: t,
                            className: "".concat(t > 4 && !c ? "hide" : "")
                        }, e.map((function (t, a) {
                            return v.a.createElement("label", {
                                key: e + "_" + a
                            }, v.a.createElement("a", {
                                href: null,
                                onClick: function () {
                                    return function (e) {
                                        e.url && (Object(C.a)({
                                            spmC: "sidepanel",
                                            spmD: "channel",
                                            exargs: {
                                                "data-objecttitle": e.name
                                            }
                                        }), location.href = e.url)
                                    }(t)
                                }
                            }, t.name))
                        })))
                    })))), v.a.createElement("div", {
                        className: "x_dingyue"
                    }, v.a.createElement("div", {
                        className: "hd",
                        onClick: function () {
                            Object(C.a)({
                                spmC: "sidepanel",
                                spmD: "subscribe"
                            }), location.href = "//ding.youku.com/u/subscribeUpdate"
                        }
                    }, v.a.createElement("i", {
                        className: "x_icon_dy"
                    }), v.a.createElement("span", {
                        class: "channel-title"
                    }, "\u6211\u7684\u8ba2\u9605")))))))
                }))),
                Ee = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap,
                        userInfo: e.page.userInfo,
                        pageConfig: e.page.pageConfig
                    }
                }))((function (e) {
                    var t = Object(g.useState)(!1),
                        a = me()(t, 2),
                        n = a[0],
                        i = a[1],
                        r = Object(g.useState)(""),
                        s = me()(r, 2),
                        c = s[0],
                        l = s[1],
                        d = Object(g.useState)(""),
                        u = me()(d, 2),
                        m = u[0],
                        p = u[1],
                        h = Object(g.useState)([]),
                        f = me()(h, 2),
                        y = f[0],
                        w = f[1],
                        b = Object(g.useState)(!1),
                        k = me()(b, 2),
                        E = k[0],
                        S = k[1],
                        O = void 0 !== e.userInfo.oneId,
                        N = e.userInfo && e.userInfo.user_icon || "https://gw.alicdn.com/tfs/TB1VEXab7L0gK0jSZFtXXXQCXXa-72-72.png",
                        D = Object(g.useRef)(null),
                        j = e.pageConfig.header && e.pageConfig.header.themeConfig || {};
                    Object(g.useEffect)((function () {
                        M().then((function (e) {
                            e.data && e.data.q && p(e.data.q.length > 12 ? e.data.q.slice(0, 10) + "..." : e.data.q)
                        }))
                    }), 0);
                    var x = function () {
                            Object(C.a)({
                                spmC: "header",
                                spmD: E ? "hidesidepannel" : "showsidepanel"
                            }), E ? window.isVideoPlay && (document.querySelector(".x-video-player").style.left = "0", document.querySelector(".x-video-poster").style.display = "none") : window.isVideoPlay && (document.querySelector(".x-video-player").style.left = "-9999px", document.querySelector(".x-video-poster").style.display = "block"), S(!E)
                        },
                        _ = function () {
                            i(!n), w([]), window.scrollTo(0, 0), Object(C.a)({
                                spmC: "header",
                                spmD: "searchcancel"
                            })
                        },
                        A = function (e) {
                            "" !== e && void 0 !== e && (location.href = "https://www.soku.com/m/y/video?q=".concat(e))
                        },
                        T = function (e) {
                            var t, a;
                            return o.a.async((function (i) {
                                for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (!n || !e) {
                                        i.next = 7;
                                        break
                                    }
                                    return i.next = 3, o.a.awrap(ne({
                                        keyword: e
                                    }));
                                case 3:
                                    (t = i.sent) && t.data && t.data.nodes && t.data.nodes.length > 0 && ((a = t.data.nodes[0].nodes[0].nodes).length > 5 && (a = a.slice(0, 5)), w(a)), i.next = 9;
                                    break;
                                case 7:
                                    l(""), w([]);
                                case 9:
                                case "end":
                                    return i.stop()
                                }
                            }))
                        },
                        M = function () {
                            return o.a.async((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", ie());
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                            }))
                        };
                    return Object(g.useEffect)((function () {
                        Object(C.a)({
                            spmC: "header",
                            spmD: "show",
                            gmKey: "EXP"
                        })
                    }), [0]), v.a.createElement("div", {
                        className: "h5-header"
                    }, !1 === n ? v.a.createElement("header", {
                        className: "yk_header",
                        style: {
                            backgroundColor: "".concat(j.backgroundColor || null)
                        }
                    }, v.a.createElement("a", {
                        href: null,
                        className: "icon menu_icon",
                        style: {
                            backgroundImage: "".concat(j.menuIcon && "url(" + j.menuIcon + ")")
                        },
                        onClick: x
                    }), v.a.createElement("a", {
                        href: "//www.youku.com/",
                        className: "icon logo_icon"
                    }), v.a.createElement("a", {
                        href: null,
                        className: "icon search_icon",
                        onClick: function () {
                            i(!n), window.scrollTo(0, 0), Object(C.a)({
                                spmC: "header",
                                spmD: "searchbutton"
                            })
                        }, style: {
                            backgroundImage: "".concat(j.searchIcon && "url(" + j.searchIcon + ")")
                        }
                    }), O ? v.a.createElement("a", {
                        href: "//i.youku.com/u/profile",
                        className: "icon login_icon"
                    }, v.a.createElement("img", {
                        src: N
                    })) : v.a.createElement("a", {
                        onClick: function () {
                            Object(C.a)({
                                spmC: "header",
                                spmD: "login"
                            }), location.href = "https://account.youku.com/?callback=".concat(encodeURIComponent(window.location.href))
                        }, href: null,
                        className: "icon nologin_icon",
                        style: {
                            backgroundImage: "".concat(j.userIcon && "url(" + j.userIcon + ")")
                        }
                    })) : v.a.createElement("header", {
                        className: "x_search_panel"
                    }, v.a.createElement("div", {
                        className: "x_search"
                    }, v.a.createElement("div", {
                        className: "searchbox",
                        style: {
                            backgroundColor: "".concat(j.backgroundColor || null)
                        }
                    }, v.a.createElement("form", {
                        action: "javascript:void(0);"
                    }, v.a.createElement("div", {
                        className: "x_search_default",
                        style: {
                            display: "".concat(c ? "none" : "")
                        }
                    }, m), v.a.createElement("input", {
                        type: "search",
                        value: c,
                        onChange: function (e) {
                            l(e.target.value), T(e.target.value)
                        }, ref: D,
                        style: {
                            backgroundColor: "".concat(j.searchBgColor || null),
                            color: "".concat(j.fontColor || "")
                        }
                    }), c && v.a.createElement("div", {
                        className: "delIconWrapper",
                        onClick: function () {
                            l(""), w([]), D.current.focus()
                        }
                    }, v.a.createElement("img", {
                        src: j.deleteIcon || "https://gw.alicdn.com/tfs/TB1fXipMjDpK1RjSZFrXXa78VXa-48-48.png",
                        className: "delIcon"
                    }))), "" === c ? v.a.createElement("a", {
                        href: "javascript:void(0);",
                        className: "cancle",
                        onClick: _,
                        style: {
                            color: "".concat(j.fontColor || null)
                        }
                    }, "\u53d6\u6d88") : v.a.createElement("button", {
                        className: "s_btn",
                        style: {
                            color: "".concat(j.fontColor || "")
                        },
                        onClick: function () {
                            return A(c)
                        }
                    }, "\u641c\u7d22")), y.length > 0 && v.a.createElement("div", {
                        className: "s_list"
                    }, v.a.createElement("ul", null, y.map((function (e, t) {
                        return v.a.createElement("li", {
                            key: "r" + t,
                            onClick: function () {
                                return A(e.data.w)
                            }
                        }, v.a.createElement("h3", null, v.a.createElement("span", null, e.data.w)))
                    }))))), v.a.createElement("div", {
                        className: "toast",
                        onClick: _
                    })), v.a.createElement(ke, {
                        show: E,
                        toggelMenu: x
                    }))
                })),
                Se = (a(321), (new Date).getFullYear()),
                Ce = function (e) {
                    return v.a.createElement("div", {
                        className: "yk-footer"
                    }, v.a.createElement("div", {
                        className: "copyright"
                    }, v.a.createElement("p", null, "Copyright\xa9", Se, " \u4f18\u9177 youku.com \u7248\u6743\u6240\u6709"), v.a.createElement("a", {
                        target: "_blank",
                        href: "//c.youku.com/piracy"
                    }, "\u53cd\u76d7\u7248\u76d7\u94fe\u58f0\u660e"), v.a.createElement("a", {
                        href: "http://beian.miit.gov.cn/state/outPortal/loginPortal.action",
                        target: "_blank"
                    }, "\u4eacICP\u8bc1060288\u53f7"), v.a.createElement("a", {
                        href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000017",
                        target: "_blank"
                    }, v.a.createElement("i", {
                        className: "ico-icp",
                        title: "\u7ecf\u8425\u6027\u7f51\u7ad9\u5907\u6848"
                    }))))
                },
                Oe = (a(322), a(39)),
                Ne = a(28),
                De = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            moduleKey: "player",
                            lang: "",
                            playerWidth: "",
                            playerHeight: "",
                            istop: !1,
                            player: null,
                            verticalStyle: e.videoMap.verticalStyle,
                            comData: e.comData || {}, paid: e.videoMap.paid,
                            trialTime: 0,
                            playerMaskFlag: !1,
                            maskCallupText: ""
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this,
                                t = Object(S.getParam)("lang");
                            t && (this.lang = t), this.changeSize(), this.initPlayer(), Object(C.a)({
                                spmC: this.state.moduleKey,
                                spmD: "show",
                                gmKey: "EXP"
                            }), document.addEventListener("scroll", (function () {
                                e.stayPlayer()
                            })), window.onresize = function () {
                                e.changeSize()
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            this.state.playerMaskFlag = false;
                            this.state.istop = false;
                            return v.a.createElement("div", {
                                className: "h5-detail-player"
                            }, v.a.createElement("div", {
                                className: "player-box ".concat(this.state.istop ? "staytop" : ""),
                                id: "playerBox",
                                style: {
                                    width: "".concat(this.state.playerWidth, "px"),
                                    height: "".concat(this.state.playerHeight, "px")
                                }
                            }, v.a.createElement("div", {
                                id: "player",
                                className: "player",
                                ref: function (t) {
                                    e.playerDom = t
                                }
                            })), v.a.createElement("div", {
                                className: "playerhold",
                                style: {
                                    width: "".concat(this.state.playerWidth, "px"),
                                    height: "".concat(this.state.playerHeight, "px")
                                },
                                ref: function (t) {
                                    e.playerholder = t
                                }
                            }), this.state.playerMaskFlag ? v.a.createElement("div", {
                                className: "playerMode",
                                style: {
                                    width: "".concat(this.state.playerWidth, "px"),
                                    height: "".concat(this.state.playerHeight, "px")
                                }
                            }, v.a.createElement("div", {
                                className: "myButton tryFiveMin",
                                onClick: this.playFiveMinute.bind(this)
                            }, v.a.createElement("div", {
                                className: "triangle"
                            }), v.a.createElement("span", null, this.props.videoMap.toFind ? "\u70b9\u51fb\u8bd5\u770b" : "\u8bd5\u770b".concat(this.state.trialTime > 0 && Math.floor(this.state.trialTime / 60) + "\u5206\u949f" || ""))), v.a.createElement("div", {
                                className: "myButton jumpToApp",
                                onClick: this.jumpApp.bind(this)
                            }, v.a.createElement("span", null, this.state.maskCallupText))) : null)
                        }
                    }, {
                        key: "changeSize",
                        value: function () {
                            var e = document.documentElement.clientWidth,
                                t = e,
                                a = "";
                            a = (this.state.verticalStyle, 9 * e / 16), this.setState({
                                playerWidth: t,
                                playerHeight: a
                            })
                        }
                    }, {
                        key: "initPlayer",
                        value: function () {
                            var e = this,
                                t = Object(S.getParam)("ctid");
                            this.playerDom.innerHTML = "";
                            var a = Oe.browser.isLiebao ? this.getReferrerCid() : "",
                                n = {
                                    id: "youku-player",
                                    vid: this.state.comData.videoId,
                                    prefer: "h5",
                                    expand: 0,
                                    canWide: 0,
                                    paid: "",
                                    client_id: t || a || "youkumobileplaypage",
                                    wintype: "interior",
                                    events: {
                                        onPlayStart: this.onPlayH5.bind(this),
                                        onPlayEnd: this.onPlayEnd.bind(this),
                                        onMediaSrcOK: this.onMediaSrcOK.bind(this),
                                        onReady: this.onReadyH5.bind(this)
                                    },
                                    playlistconfig: {},
                                    vvlogconfig: {
                                        rurl: window.document.referrer
                                    },
                                    adconfig: {},
                                    control: {}
                                };
                            window.vData.politicsSensitive && (n.client_id = "1c9aa3003b83b3b2"), this.state.verticalStyle;
                            var i = window.navigator.userAgent.toLowerCase();
                            /micromessenger/i.test(i) && (n.weixin = !0), window.xparamsString && window.xparamsString.firsttime && (n.firsttime = window.xparamsString.firsttime), window.xparamsString && void 0 !== window.xparamsString.adext && "" !== window.xparamsString.adext && (n.adconfig = {
                                adext: window.xparamsString.adext
                            }), window.xparamsString && 1 === window.xparamsString.diy && (n.ftime = window.xparamsString.ftime, n.etime = window.xparamsString.etime, n.clientid = window.xparamsString.clientid), this.lang && (n.control.lang = this.lang);
                            var o = {
                                    dash: {
                                        videoInterest: !0
                                    },
                                    event: {
                                        startPlay: function () {
                                            e.onPlayStartH5()
                                        }
                                    },
                                    hidetitle: !1,
                                    posterType: "episode"
                                },
                                r = new window.YKPlayer.Player("player", n, o);
                            this.listenNet(), this.setState({
                                player: r
                            })
                        }
                    }, {
                        key: "getPlayerInfo",
                        value: function () {
                            if (this.state.player) {
                                var e = this.state.player._videoInfo || {},
                                    t = Number(e.trial && e.trial.time) || 300;
                                this.setState({
                                    trialTime: t
                                }), window.vData.trialTime = t
                            }
                        }
                    }, {
                        key: "onReadyH5",
                        value: function () {
                            if (this.state.player) {
                                this.getPlayerInfo();
                                var e = !1,
                                    t = window.currentRefer && window.currentRefer.videoMask;
                                if (("all" === t || "short" === t && !0 === window.toFind || "long" === t && !1 === window.toFind) && (e = !0), ("anybody" !== (this.state.player._videoInfo && this.state.player._videoInfo.video && this.state.player._videoInfo.video.privacy) || window.vData.politicsSensitive) && (e = !1), !0 === e && (window.__USERINFO__.oneId && !window.__USERINFO__.is_vip || !window.__USERINFO__.oneId) && 0 === this.state.paid) {
                                    var a = document.querySelector(".x-video-button");
                                    Object(C.a)({
                                        spmC: this.state.moduleKey,
                                        spmD: "exp",
                                        gmKey: "EXP"
                                    }), this.setState({
                                        playerMaskFlag: !0
                                    }), a.style.setProperty("display", "block", "important");
                                    var n = "";
                                    n = window.toFind ? window.currentRefer.maskCallupShortText || "" : window.currentRefer.maskCallupLongText || "", this.setState({
                                        maskCallupText: n
                                    })
                                }
                                Object(C.a)({
                                    spmC: "".concat(this.props.videoMap.toFind ? "shortvideo" : "longvideo"),
                                    spmD: "exp",
                                    gmKey: "EXP",
                                    stopSpider: !0
                                })
                            }
                        }
                    }, {
                        key: "onPlayStartH5",
                        value: function () {
                            window.isVideoPlay = !0, this.getNetworkType()
                        }
                    }, {
                        key: "onPlayH5",
                        value: function () {
                            var e = window.innerHeight || document.documentElement.clientHeight;
                            if (1 === this.state.verticalStyle) {
                                this.setState({
                                    playerHeight: e
                                });
                                var t = document.querySelector("html").style.fontSize.replace("px", "");
                                document.documentElement.scrollTop = .43 * Number(t), document.body.scrollTop = .43 * Number(t)
                            }
                        }
                    }, {
                        key: "onPlayerCompleteH5",
                        value: function (e) {
                            if (e && e.vid) {
                                var t = location.href,
                                    a = e.encodevid || e.vid;
                                t.split("id_").length > 1 ? window.location.href = "".concat(t.split("id_")[0], "id_").concat(a, ".html") : window.location.href = "".concat(t.split("?")[0], "?videoid=").concat(a)
                            }
                        }
                    }, {
                        key: "onPlayEnd",
                        value: function () {
                            var e = window.innerWidth || document.documentElement.clientWidth;
                            1 === this.state.verticalStyle && this.setState({
                                playerHeight: 9 * e / 16
                            })
                        }
                    }, {
                        key: "onMediaSrcOK",
                        value: function (e, t) {
                            "3gphd" === e && "" !== t && (window.downloadUrl = t)
                        }
                    }, {
                        key: "stayPlayer",
                        value: function () {
                            if (this.playerholder) {
                                var e = !1,
                                    t = this.playerholder.getBoundingClientRect();
                                e = !!(!this.state.istop && t.top <= 0 && !this.state.player.isPause || this.state.istop && t.top <= 0) && !(1 === this.state.verticalStyle), this.setState({
                                    istop: e
                                })
                            }
                        }
                    }, {
                        key: "_orientationChange",
                        value: function (e) {
                            "onorientationchange" in window ? window.onorientationchange = function () {
                                setTimeout(e, 200).bind(this)
                            }.bind(this) : window.onresize = this.debounce(e, 100, !0)
                        }
                    }, {
                        key: "getReferrerCid",
                        value: function () {
                            var e = document.referrer;
                            return e ? Object(S.getParam)("ctid", e) : ""
                        }
                    }, {
                        key: "listenNet",
                        value: function () {
                            var e = this;
                            document.addEventListener("h5NetworkChange", (function () {
                                e.getNetworkType()
                            }), !1)
                        }
                    }, {
                        key: "getNetworkType",
                        value: function () {
                            window.AlipayJSBridge && window.AlipayJSBridge.call("getNetworkType", (function (e) {
                                /wifi/i.test(e.networkInfo || e.networkType)
                            }))
                        }
                    }, {
                        key: "playFiveMinute",
                        value: function () {
                            window.isVideoPlay = !0, this.state.player.play(), this.setState({
                                playerMaskFlag: !1
                            }), Object(C.a)({
                                spmC: this.state.moduleKey,
                                spmD: "play"
                            })
                        }
                    }, {
                        key: "jumpApp",
                        value: function () {
                           
                        }
                    }]), t
                }(g.Component),
                je = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))(De),
                xe = (a(323), a(28).default),
                _e = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap,
                        userInfo: e.page.userInfo
                    }
                }))((function (e) {
                    var t = Object(g.useState)(!1),
                        a = me()(t, 2),
                        n = a[0],
                        i = a[1],
                        o = function () {
                            var e = "https://acz.youku.com/wow/ykpage/act/aki96rjthui?sharepolitetoken=".concat(window.xparamsString.sharepolitetoken, "&_wvUseWKWebView=YES&from=player&vid=").concat(window.vid);
                            xe({
                                openHalfEncodeUrl: e
                            })
                        };
                    return Object(g.useEffect)((function () {
                        if (window.xparamsString.sharepolitetoken && !window.__USERINFO__.is_vip) {
                            i(!0);
                            var e = 0,
                                t = setInterval((function () {
                                    (e += 1) > 10 && clearInterval(t);
                                    var a = document.createElement("button");
                                    a.className = "politePlayerButton", a.innerText = "\u514d\u8d39\u770b\u672c\u96c6", a.onclick = o, document.querySelector(".player-box").append(a), document.querySelectorAll(".x-btn") && document.querySelectorAll(".x-btn")[1] && (clearInterval(t), document.querySelectorAll(".x-btn")[1].style.position = "absolute", document.querySelectorAll(".x-btn")[1].style.left = "0.38rem")
                                }), 700)
                        }
                    }), [0]), v.a.createElement("div", null, n && v.a.createElement("div", null, v.a.createElement("div", {
                        className: "politelayer"
                    }), v.a.createElement("img", {
                        src: "https://img.alicdn.com/tfs/TB1FiiagHj1gK0jSZFuXXcrHpXa-78-78.png",
                        alt: "",
                        className: "closePoliteBtn",
                        onClick: function () {
                            i(!1)
                        }
                    }), v.a.createElement("div", {
                        className: "politeContainer"
                    }, v.a.createElement("img", {
                        className: "politeTopImg",
                        src: "https://gw.alicdn.com/tfs/TB1IizVgQY2gK0jSZFgXXc5OFXa-858-108.png"
                    }), v.a.createElement("div", {
                        className: "politeBgContainer"
                    }, v.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB13o5XgRr0gK0jSZFnXXbRRXXa-186-72.png",
                        alt: "",
                        className: "lock"
                    }), v.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB1.vX.gO_1gK0jSZFqXXcpaXXa-888-624.png",
                        alt: "",
                        className: "bgImg"
                    }), v.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB1EyqagHj1gK0jSZFuXXcrHpXa-333-333.png",
                        alt: "",
                        className: "starImg"
                    }), v.a.createElement("div", {
                        className: "videoTitle"
                    }, e.videoMap.showName), v.a.createElement("div", {
                        className: "videoIndex"
                    }, "\u7b2c", e.videoMap.showVideoStage, "\u96c6")), v.a.createElement("div", {
                        className: "politeBtn",
                        onClick: function () {
                            o()
                        }
                    }, "\u52a0\u5165\u7ec4\u961f\u514d\u8d39\u770b >"))))
                }));
            a(324);

            function Ae(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            var Te = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {}, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "render",
                        value: function () {
                            var e = this;
                            return this.props.show && this.props.content ? v.a.createElement("div", {
                                className: "yk-modal"
                            }, v.a.createElement("div", {
                                className: "modal-box"
                            }, this.props.showCloseBtn && v.a.createElement("a", {
                                href: null,
                                className: "close",
                                onClick: function () {
                                    e.handleConfirmClick()
                                }
                            }, v.a.createElement("span", null, "\xd7")), this.props.title && v.a.createElement("div", {
                                className: "modal-title"
                            }, this.props.title), this.props.content && v.a.createElement("div", {
                                className: "modal-content"
                            }, this.props.content), this.props.buttons.length > 0 && v.a.createElement("div", {
                                className: "modal-foot"
                            }, this.props.buttons.map((function (t) {
                                return v.a.createElement("a", {
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
                }(g.Component),
                Me = Object(E.connect)((function (e) {
                    return function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ae(Object(a), !0).forEach((function (t) {
                                B()(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ae(Object(a)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }({}, e.ykModal)
                }))(Te);
            a(325);

            function Pe(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            var Ie = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {}, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "render",
                        value: function () {
                            return this.props.show && this.props.content ? v.a.createElement("div", {
                                className: "yk-toast ".concat(this.props.showMask && "mask", " ").concat(this.props.rootClass || ""),
                                onClick: this.handleClick.bind(this)
                            }, v.a.createElement("div", {
                                className: "modal-box"
                            }, this.props.content && v.a.createElement("div", {
                                className: "modal-content"
                            }, v.a.createElement("span", {
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
                }(g.Component),
                Ke = Object(E.connect)((function (e) {
                    return function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Pe(Object(a), !0).forEach((function (t) {
                                B()(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Pe(Object(a)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }({}, e.ykToast)
                }))(Ie),
                Le = a(28),
                Xe = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            moduleKey: "thirdparty",
                            baseExpireKey: "callapp-modal",
                            timer: null
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this,
                                t = Number(window.currentRefer.timeout);
                            "" !== window.currentRefer.name && t > 0 && this.canPopModal() && !window.vData.politicsSensitive && (this.state.timer && clearTimeout(this.state.timer), this.state.timer = setTimeout((function () {
                                e.showThirdpartModal()
                            }), t))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return null
                        }
                    }, {
                        key: "showThirdpartModal",
                        value: function () {
                            var e = this;
                            this.props.dispatch({
                                type: "ykModal/show",
                                payload: {
                                    type: "alert",
                                    showCloseBtn: !0,
                                    content: window.currentRefer.text,
                                    buttons: [{
                                        text: window.currentRefer.button,
                                        type: "confirm"
                                    }],
                                    okCbFn: function () {
                                        Le && Le.default({
                                            spmC: "modal",
                                            spmD: "confirm",
                                            source: "thirdparty"
                                        })
                                    }, cancelCbFn: function () {
                                        Object(C.a)({
                                            spmC: "modal",
                                            spmD: "close"
                                        }), e.setExpireString()
                                    }
                                }
                            }), Object(C.a)({
                                spmC: "modal",
                                spmD: "exp",
                                gmKey: "EXP"
                            })
                        }
                    }, {
                        key: "canPopModal",
                        value: function () {
                            var e = Number(window.currentRefer.interval),
                                t = !0,
                                a = this.getExpireString();
                            if (a) {
                                var n = +new Date - Number(a);
                                e > 0 && n <= e && (t = !1)
                            }
                            return t
                        }
                    }, {
                        key: "setExpireString",
                        value: function () {
                            window.localStorage.setItem(this.state.baseExpireKey + window.currentRefer.name, +new Date)
                        }
                    }, {
                        key: "getExpireString",
                        value: function () {
                            return window.localStorage.getItem(this.state.baseExpireKey + window.currentRefer.name)
                        }
                    }]), t
                }(g.Component),
                Be = Object(E.connect)((function (e) {
                    return {
                        videoMap: e.page.pageData.videoMap
                    }
                }))(Xe);
            var Re = {
                    initData: null,
                    init: function (e) {
                        Re.initData = e;
                        var t = "//".concat(location.host, "/api/weixin/getWeixinJssdk?link=").concat(encodeURIComponent(location.href));
                        fetch(t).then((function (e) {
                            return e.json()
                        })).then((function (e) {
                            Re.callback(e.data)
                        }), (function (e) {
                            console.log("getWeixinJssdk fail ".concat(e))
                        })).catch((function (e) {
                            console.log("getWeixinJssdk fail ".concat(e))
                        }))
                    }, callback: function (e) {
                        var t = /test=1/i.test(window.location.href);
                        wx && wx.config({
                            debug: t,
                            appId: e.appId,
                            timestamp: e.timestamp,
                            nonceStr: e.nonceStr,
                            signature: e.signature,
                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"]
                        }), wx && wx.ready((function () {
                            Re.shareTimeline(), Re.shareAppMessage(), Re.shareQQ(), Re.shareQZone()
                        }))
                    }, shareTimeline: function () {
                        var e = Re.initData;
                        wx && wx.onMenuShareTimeline({
                            title: e.timelineTitle,
                            desc: e.desc,
                            link: e.link,
                            imgUrl: e.shareImage,
                            success: function () {}, cancel: function () {}
                        })
                    }, shareAppMessage: function () {
                        var e = Re.initData;
                        wx && wx.onMenuShareAppMessage({
                            title: e.title,
                            desc: e.desc,
                            link: e.link,
                            imgUrl: e.shareImage,
                            success: function () {}, cancel: function () {}
                        })
                    }, shareQQ: function () {
                        var e = Re.initData;
                        wx && wx.onMenuShareQQ({
                            title: e.title,
                            desc: e.desc,
                            link: e.link,
                            imgUrl: e.shareImage,
                            success: function () {}
                        })
                    }, shareQZone: function () {
                        var e = Re.initData;
                        wx && wx.onMenuShareQZone({
                            title: e.title,
                            desc: e.desc,
                            link: e.link,
                            imgUrl: e.shareImage,
                            success: function () {}
                        })
                    }
                },
                Fe = {
                    initData: null,
                    init: function (e) {
                        try {
                            Fe.initData = e, dd.ready((function () {
                                var e = Fe.initData;
                                dd.biz.navigation.setRight({
                                    show: !0,
                                    control: !0,
                                    text: "",
                                    onSuccess: function (t) {
                                        dd.biz.util.share({
                                            type: 0,
                                            url: e.link,
                                            title: e.title,
                                            content: e.desc,
                                            image: e.shareImage,
                                            onSuccess: function () {}, onFail: function (e) {}
                                        })
                                    }, onFail: function (e) {}
                                }), dd.biz.navigation.setTitle({
                                    title: e.title,
                                    onSuccess: function (e) {}, onFail: function (e) {}
                                })
                            }))
                        } catch (t) {
                            console.log(t)
                        }
                    }
                };

            function Ue() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = window.navigator.userAgent,
                    a = e;
                a.title = a.title || window.document.title, a.timelineTitle = a.timelineTitle || a.title || window.document.title, a.desc = a.desc || "\u8be5\u89c6\u9891\u6765\u81ea\u300c\u4f18\u9177\u300d\u4e2d\u56fd\u9886\u5148\u7684\u89c6\u9891\u7f51\u7ad9,\u4e3a\u60a8\u63d0\u4f9b\u9ad8\u6e05,\u6d41\u7545\u7684\u89c6\u9891\u4f53\u9a8c", a.link = a.link || window.location.href, a.shareImage = a.shareImage || "https://static.youku.com/h5/html/share/images/h5_300x300.png", /MicroMessenger/i.test(t) ? (! function (e) {
                    document.addEventListener("WeixinJSBridgeReady", (function () {
                        WeixinJSBridge.on("menu:share:appmessage", (function () {
                            WeixinJSBridge.invoke("sendAppMessage", {
                                appid: "",
                                img_url: e.shareImage,
                                img_width: "640",
                                img_height: "640",
                                link: e.link,
                                desc: e.desc,
                                title: e.title
                            }, (function () {}))
                        })), WeixinJSBridge.on("menu:share:timeline", (function () {
                            WeixinJSBridge.invoke("shareTimeline", {
                                appid: "",
                                img_url: e.shareImage,
                                img_width: "640",
                                img_height: "640",
                                link: e.link,
                                desc: e.desc,
                                title: e.timelineTitle
                            }, (function () {}))
                        }))
                    }), !1)
                }(a), Re.init(a)) : /DingTalk/i.test(t) && Fe.init(a)
            }
            a(326);
            var Ve = function (e) {
                    function t(e) {
                        var a;
                        return s()(this, t), (a = u()(this, p()(t).call(this, e))).state = {
                            showLayer: !1,
                            moduleList: [],
                            clientModuleList: []
                        }, a
                    }
                    return f()(t, e), l()(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = this.props.pageData.componentList || [],
                                t = [],
                                a = [];
                            e.length > 5 ? (t = e.slice(0, 5), a = e.slice(5, e.length), this.setState({
                                clientModuleList: a
                            })) : t = e, this.setState({
                                moduleList: t
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            var e, t;
                            return o.a.async((function (a) {
                                for (;;) switch (a.prev = a.next) {
                                case 0:
                                    try {
                                        e = new k.a(location.href), window.xparamsString = e.params
                                    } catch (n) {
                                        window.xparamsString = {}
                                    }
                                    return 0 !== this.state.clientModuleList.length && this.setState({
                                        moduleList: this.state.moduleList.concat(this.state.clientModuleList)
                                    }), a.prev = 2, a.next = 5, o.a.awrap(oe());
                                case 5:
                                    t = a.sent, window.xparamsString.usecret = t.data.result.model.password, a.next = 12;
                                    break;
                                case 9:
                                    a.prev = 9, a.t0 = a.catch(2), window.xparamsString.usecret = "";
                                case 12:
                                    window.addEventListener("load", this.reportPerformance), Object(C.a)({
                                        spmC: "page",
                                        spmD: "exp",
                                        gmKey: "EXP",
                                        stopSpider: !0
                                    }), Ue({
                                        title: window.__METADATA__ && window.__METADATA__.title,
                                        link: window.location.href,
                                        desc: window.__METADATA__ && window.__METADATA__.description,
                                        shareImage: window.__METADATA__ && window.__METADATA__.shareImg
                                    }), this.copyUSecret();
                                case 16:
                                case "end":
                                    return a.stop()
                                }
                            }), null, this, [
                                [2, 9]
                            ])
                        }
                    }, {
                        key: "copyUSecret",
                        value: function () {
                            document.documentElement.addEventListener("click", (function (e) {
                                try {
                                    window.xparamsString.usecret && Object(S.setUSecret)(e)
                                } catch (e) {
                                    console.log(e)
                                }
                            }), !1)
                        }
                    }, {
                        key: "reportPerformance",
                        value: function () {
                            if (window.performance) {
                                var e = window.performance.timing;
                                e && setTimeout((function () {
                                    var t = e.responseStart - e.navigationStart,
                                        a = e.domContentLoadedEventStart - e.navigationStart;
                                    z("s1", t), z("s2", a), Object(C.a)({
                                        spmC: "pagePerformance",
                                        spmD: "report",
                                        gmKey: "EXP",
                                        exargs: {
                                            "data-firstpaint": t,
                                            "data-domready": a
                                        }
                                    })
                                }), 500)
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return v.a.createElement("div", null, v.a.createElement(Ee, null), v.a.createElement(je, {
                                comData: this.props.pageData.videoMap
                            }), this.state.moduleList.map((function (e, t) {
                                return t > 10 ? v.a.createElement(w.a, {
                                    key: "drawerLazy".concat(t),
                                    height: 100
                                }, v.a.createElement(be, {
                                    drawerData: e,
                                    lazyload: !0
                                })) : v.a.createElement(be, {
                                    drawerData: e,
                                    key: "drawer".concat(t)
                                })
                            })), v.a.createElement(_e, null), v.a.createElement(Ce, null), v.a.createElement(Be, null), v.a.createElement(Me, null), v.a.createElement(Ke, null))
                        }
                    }]), t
                }(g.Component),
                He = Object(E.connect)((function (e) {
                    return {
                        pageData: e.page.pageData
                    }
                }))(Ve),
                We = [{
                    path: "/video/:video",
                    component: He,
                    exact: !0
                }, {
                    path: "/alipay_video/:video",
                    component: He,
                    exact: !0
                }];
            t.a = We
        }, 101: function (e, t, a) {
            "use strict";
            var n = a(22),
                i = a.n(n);

            function o(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(a), !0).forEach((function (t) {
                        i()(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var s = {
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
                            return e.show = !0, r({}, e, {}, a)
                        }, hide: function (e, t) {
                            t.payload;
                            return e.show = !1, r({}, e)
                        }
                    },
                    effects: {},
                    subscriptions: {}
                },
                c = a(7),
                l = a.n(c);

            function d(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(a), !0).forEach((function (t) {
                        i()(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var m = function (e) {
                    return new Promise((function (t) {
                        setTimeout(t, e)
                    }))
                },
                p = {
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
                            return e.show = !0, u({}, e, {}, a)
                        }, hide: function (e, t) {
                            t.payload;
                            return e.show = !1, u({}, e)
                        }
                    },
                    effects: {
                        showDelay: l.a.mark((function e(t, a) {
                            var n, i, o, r, s;
                            return l.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.payload, i = a.put, o = a.call, r = a.select, e.next = 4, r((function (e) {
                                        return e.ykToast.timeout
                                    }));
                                case 4:
                                    return s = e.sent, e.next = 7, i({
                                        type: "show",
                                        payload: n
                                    });
                                case 7:
                                    return e.next = 9, o(m, s);
                                case 9:
                                    return e.next = 11, i({
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
                s, p
            ]
        }, 141: function (e, t, a) {
            "use strict";
            (function (t) {
                var n = "X",
                    i = "U",
                    o = a(308);

                function r(e) {
                    var a, n = "";
                    return s(e = e.replace(/^c([a-z]{1})([0-9]+)/gi, "")) && (n = o((a = function (e) {
                        return s(e) && (e = e.substring(1)), e
                    }(e), t.from(a, "base64").toString())).shiftRight(2)), n.toString()
                }

                function s(e) {
                    return !(0 !== e.indexOf(n) && 0 !== e.indexOf(i))
                }
                e.exports = {
                    decodeId: function (e) {
                        var t = null;
                        if (/^[0-9]*$/.test(e)) return e;
                        if ("string" === typeof e) {
                            if (/^[0-9]*$/.test(e)) return e;
                            t = r(e)
                        } else Array.isArray(e) && (t = e.map((function (e) {
                            return r(e)
                        })));
                        return t
                    }, encodeId: function (e) {
                        return /^[0-9]*$/.test(e) ? "U" + t.from(String(o(e).shiftLeft(2))).toString("base64") : e
                    }, decode: r
                }
            }).call(this, a(304).Buffer)
        }, 142: function (e, t, a) {
            "use strict";
            var n = a(0),
                i = a.n(n),
                o = a(3);
            a(133);
            t.a = Object(o.connect)((function (e) {
                return {
                    videoMap: e.page.pageData.videoMap
                }
            }))((function (e) {
                return i.a.createElement("div", null, i.a.createElement("div", {
                    id: "app"
                }, e.children))
            }))
        }, 147: function (e, t, a) {
            "use strict";
            a.r(t),
                function (e) {
                    var n = a(0),
                        i = a.n(n),
                        o = a(37),
                        r = a.n(o),
                        s = a(3),
                        c = a.n(s),
                        l = a(41),
                        d = a(100),
                        u = a(6),
                        m = a(101),
                        p = (a(142), a(5));
                    t.default = function () {
                        var e = c()({
                            history: Object(u.a)(),
                            initialState: {
                                page: {
                                    pageData: window.__INITIAL_DATA__,
                                    hostname: window.location.hostname,
                                    search: location.search,
                                    pathname: location.pathname,
                                    platoConfig: window.__PLATOCONFIG__,
                                    userInfo: window.__USERINFO__,
                                    pageConfig: window.pageConfig,
                                    refer: Object(p.getParam)("refer"),
                                    userAgent: window.navigator.userAgent
                                }
                            }
                        });
                        m.a.forEach((function (t) {
                            e.model(t)
                        }));
                        for (var t = Object(p.getParam)("refer"), a = null, n = window.pageConfig.thirdparty && window.pageConfig.thirdparty.refer || [], o = 0; o < n.length; o++) {
                            var s = n[o];
                            if (s.name === t) {
                                a = s;
                                break
                            }
                        }
                        a || (a = window.pageConfig.thirdparty && window.pageConfig.thirdparty.default || {}), window.vData.refer = t, window.currentRefer = a, e.router((function () {
                            return i.a.createElement(l.BrowserRouter, null, i.a.createElement(l.Switch, null, d.a.map((function (e) {
                                var t = e.path,
                                    a = e.exact,
                                    n = e.component;
                                return i.a.createElement(l.Route, {
                                    key: t,
                                    path: t,
                                    exact: a,
                                    component: n
                                })
                            }))))
                        }));
                        var h = e.start();
                        window._SSRERR_ ? r.a.render(i.a.createElement(h, null), document.getElementById("app")) : r.a.hydrate(i.a.createElement(h, null), document.getElementById("app"))
                    }()
                }.call(this, a(102)(e))
        }, 2: function (e, t, a) {
            "use strict";
            var n = a(22),
                i = a.n(n);

            function o(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(a), !0).forEach((function (t) {
                        i()(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function s() {
                var e = window && window.navigator.userAgent;
                if (e.indexOf("Baiduspider") > -1 || e.indexOf("YisouSpider") > -1 || e.indexOf("360Spider") > -1 || e.indexOf("HaosouSpider") > -1 || e.indexOf("AdsBot-Google-Mobile") > -1 || e.indexOf("Googlebot") > -1 || e.indexOf("bingbot") > -1 || e.indexOf("Sosospider") > -1 || e.indexOf("Sogou web spider") > -1 || e.indexOf("Sogou inst spider") > -1 || e.indexOf("Sogou News Spider") > -1 || e.indexOf("Sogou Video Spider") > -1) return !0
            }
            t.a = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var t = e.stopSpider;
                if (!t || "EXP" !== e.gmKey || !s()) {
                    var a = {
                        gmKey: "CLK",
                        spmAB: "a2h0j.10182321",
                        spmC: "h5playpagev2",
                        spmD: "defaultpos",
                        scmAB: "20140719.rcmd",
                        isVideo: window.vData.isVideo,
                        id: window.vData.vId
                    };
                    e = Object.assign({}, a, e);
                    var n = "".concat(e.spmAB, ".").concat(e.spmC, ".").concat(e.spmD),
                        i = "".concat(e.scmAB, ".").concat(e.scmC || e.spmC, ".").concat(e.scmD || (e.isVideo ? "vdo_" + e.id : "show_" + e.id)),
                        o = e.exargs,
                        c = [{
                            exargs: r({
                                "data-spm": n,
                                "data-scm": i,
                                "data-logver": "v2",
                                "data-vdotype": window.vData.toFind ? "short" : "long"
                            }, o),
                            pageurl: window.location.href
                        }],
                        l = {};
                    "CLK" === e.gmKey && (l.clkdata = JSON.stringify(c)), "EXP" === e.gmKey && (l.expdata = JSON.stringify(c));
                    var d = [];
                    for (var u in l) d.push("".concat(u, "=").concat(l[u]));
                    var m = window.goldlog_queue || (window.goldlog_queue = []);
                    m.push({
                        action: "goldlog.record",
                        arguments: ["/yt/youku.h5.control", e.gmKey, d.join("&"), "POST"]
                    })
                }
            }
        }, 201: function (e, t) {}, 256: function (e, t, a) {}, 258: function (e, t, a) {}, 28: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(96),
                i = a.n(n),
                o = a(140),
                r = a.n(o),
                s = a(39),
                c = a(5),
                l = a(2),
                d = s.browser.isIOS,
                u = Object(c.getParam)("refer"),
                m = "http://acz-jump.youku.com/wow/ykpage/act/ulink?spm=a2hww.12518357.homeDrawer3.1&action=play&source=a2h0j.10182321.download&pagetype=playerPage&title=%E5%8A%A0%E6%B2%B9%EF%BC%8C%E4%BD%A0%E6%98%AF%E6%9C%80%E6%A3%92%E7%9A%84%20TV%E7%89%88&callup_type=clk&is_h5=1&vid=XNDI5NjQwNTYxMg&ua=Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2011_0%20like%20Mac%20OS%20X)%20AppleWebKit%2F604.1.38%20(KHTML%2C%20like%20Gecko)%20Version%2F11.0%20Mobile%2F15A372%20Safari%2F604.1&ccts=1564905348107&cookieid=i1XxFFS5Pk0CAWoLKcam8ate&refer_url=http%3A%2F%2Fm1.youku.com%2Fvideo%2Fid_XNDI5NjQwNTYxMg%3D%3D.html%3Fspm%3Da2hww.12518357.homeDrawer3.1&fua=safari&special=1&ts=1564905348119",
                p = "https://down2.youku.com/youku/down.php?pub=9a89d83e08103905";
            t.default = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var t = e.id || window.vData.vId,
                    a = t;
                if (t) {
                    var n = !0 === e.isVideo || window.vData.isVideo,
                        o = e.action ? e.action : !n && d ? "playVideo" : "play",
                        c = e.source,
                        h = e.spmC,
                        f = e.spmD || c,
                        g = e.sign || (window.vData.toFind ? "find" : "");
                    
                    Object(l.a)({
                        spmC: h,
                        spmD: f,
                        id: t,
                        exargs: {
                            "data-callapp": "clk"
                        }
                    });
                    window.location.href = "/video/id_" + t + ".html";
                }
            }
        }, 292: function (e, t, a) {}, 293: function (e, t, a) {}, 294: function (e, t, a) {}, 295: function (e, t, a) {}, 310: function (e, t, a) {}, 311: function (e, t, a) {}, 315: function (e, t, a) {}, 316: function (e, t, a) {}, 317: function (e, t, a) {}, 318: function (e, t, a) {}, 319: function (e, t, a) {}, 320: function (e, t, a) {}, 321: function (e, t, a) {}, 322: function (e, t, a) {}, 323: function (e, t, a) {}, 324: function (e, t, a) {}, 325: function (e, t, a) {}, 326: function (e, t, a) {}, 5: function (e, t, a) {
            var n = this,
                i = a(92),
                o = a(127),
                r = {
                    BLUE: "#3692ff",
                    GOLDEN: "#EBBA73",
                    RED: "#FC4273"
                },
                s = function (e, t) {
                    return function e(a) {
                        if ("HTML" === a.tagName || "BODY" === a.tagName) return !1;
                        return ("class" === t ? a.classList.contains("clipboard") : a.getAttribute("data-send")) ? a : a.parentNode ? e(a.parentNode) : a
                    }(e.target)
                };
            e.exports = {
                objToQueryString: function (e) {
                    return Object.keys(e).map((function (t) {
                        return t + "=" + e[t]
                    })).join("&")
                }, queryStringToObj: function (e) {
                    var t = {};
                    return e ? (e.split("&").forEach((function (e) {
                        var a = e.split("=");
                        void 0 === t[a[0]] && (t[a[0]] = a[1] || "")
                    })), t) : t
                }, debounce: function (e, t, a, i) {
                    var o, r = i || n;
                    return function () {
                        var n = arguments;

                        function i() {
                            a || e.apply(r, n), o = null
                        }
                        o ? clearTimeout(o) : a && e.apply(r, n), o = setTimeout(i, t || 100)
                    }
                }, getParam: function (e, t) {
                    var a, n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i");
                    return null != (a = t ? t.substr(1).match(n) : window && window.location.search.substr(1).match(n)) ? unescape(a[2]) : null
                }, useWebp: o,
                getType: function (e) {
                    return Object.prototype.toString.call(e).slice(8, -1).toLocaleLowerCase()
                }, getColor: function (e) {
                    return r[e]
                }, findNode: s,
                setUSecret: function (e) {
                    var t = s(e, "class");
                    if (t)
                        if (window.ucapi && window.ucapi.base && window.ucapi.base.copyToClipboard) {
                            var a = window.xparamsString.usecret;
                            window.ucapi.base.copyToClipboard({
                                text: a,
                                toast: 0,
                                success: function () {
                                    console.log("\u590d\u5236\u5bc6\u4ee4\u6210\u529f")
                                }, fail: function () {
                                    console.log("\u590d\u5236\u5bc6\u4ee4\u5931\u8d25")
                                }
                            })
                        } else i.Copy(window.xparamsString.usecret, t)
                }, isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                }
            }
        }, 92: function (e, t) {
            e.exports = {
                Copy: function (e, t) {
                    this.text = e, this.container = t, this.createEle()
                }, createEle: function () {
                    var e = this,
                        t = "rtl" === document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function () {
                        return e.removeFake()
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("div"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                    var a = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = "".concat(a, "px"), this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.fakeElem.innerText = this.text, this.container.appendChild(this.fakeElem), this.container.parentNode && (this.selectedText = this.select(), this.copyText(), this.clearSelection())
                }, removeFake: function () {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.fakeElem = null)
                }, select: function () {
                    var e = window.getSelection(),
                        t = document.createRange();
                    t.selectNodeContents(this.fakeElem), e.removeAllRanges(), e.addRange(t)
                }, copyText: function () {
                    document.execCommand("copy")
                }, clearSelection: function () {
                    this.fakeElem && this.fakeElem.focus(), window.getSelection().removeAllRanges(), this.container.removeChild(this.fakeElem)
                }
            }
        }
    },
    [
        [147, 4, 0]
    ]
]);
//# sourceMappingURL=Page.chunk.js.map