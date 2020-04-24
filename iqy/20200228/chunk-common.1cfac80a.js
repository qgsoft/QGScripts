(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-common"], {
        "00b9": function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return b
            }), n.d(e, "f", function () {
                return k
            }), n.d(e, "a", function () {
                return x
            }), n.d(e, "e", function () {
                return C
            }), n.d(e, "c", function () {
                return j
            }), n.d(e, "g", function () {
                return I
            }), n.d(e, "h", function () {
                return L
            }), n.d(e, "i", function () {
                return E
            }), n.d(e, "d", function () {
                return q
            });
            n("ac6a"), n("f3e2"), n("7f7f"), n("96cf");
            var i = n("3b8d"),
                r = n("936f"),
                a = n("b2e7"),
                s = n("2c06"),
                o = n("8296"),
                c = "//paopao.iqiyi.com/apis/e/paopao/list.action",
                u = "//paopao.iqiyi.com/apis/e/user/info.action",
                l = "//api-t.iqiyi.com/feed/get_user_feeds",
                d = "//api-t.iqiyi.com/feed/agree",
                p = "//paopao.iqiyi.com/apis/e/starwall/basic_wall.action",
                h = "//paopao.iqiyi.com/apis/e/starwall/wallBaseInfos.action",
                f = "//pub.m.iqiyi.com/h5/bubble/influence.json",
                m = "//paopao.iqiyi.com/apis/e/starwall/wallBaseInfos.action",
                v = "//qiqu.iqiyi.com/apis/tagcategoryvideos",
                y = 119,
                g = "9.2.0";

            function b() {
                return w.apply(this, arguments)
            }

            function w() {
                return w = Object(i["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = {
                                authcookie: Object(a["x"])(),
                                m_device_id: Object(a["w"])(),
                                agenttype: y,
                                agentversion: g
                            }, t.next = 3, r["a"].jsonpCache(c, {
                                params: e
                            });
                        case 3:
                            return n = t.sent, i = n.data, t.abrupt("return", "A00000" === i.code ? i.data.atoken : null);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), w.apply(this, arguments)
            }

            function k(t) {
                return _.apply(this, arguments)
            }

            function _() {
                return _ = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, s, o, c;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, b({
                                agenttype: y
                            });
                        case 2:
                            return n = t.sent, i = {
                                atoken: n,
                                uid: e,
                                authcookie: Object(a["x"])(),
                                device_id: Object(a["w"])(),
                                agenttype: y,
                                agentversion: g
                            }, t.next = 6, r["a"].jsonp(u, {
                                params: i
                            });
                        case 6:
                            return s = t.sent, o = s.data, c = {
                                user_concerned_size: o.data.concerned_size,
                                user_wall_size: o.data.wall_size,
                                user_big_v: o.data.userinfo.isvip,
                                user_kol: o.data.userinfo.kol
                            }, t.abrupt("return", {
                                data: {
                                    userCircleInfo: c
                                }
                            });
                        case 10:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), _.apply(this, arguments)
            }

            function x(t) {
                return S.apply(this, arguments)
            }

            function S() {
                return S = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, r["a"].get(d, {
                                params: {
                                    authcookie: Object(a["x"])(),
                                    device_id: Object(a["w"])(),
                                    agenttype: y,
                                    wallId: e.wallId,
                                    feedId: e.feedId,
                                    sourceType: e.sourceType,
                                    owner: e.uid,
                                    agree: e.agree || e.isAgree ? 0 : 1
                                }
                            });
                        case 2:
                            return n = t.sent, t.abrupt("return", n);
                        case 4:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), S.apply(this, arguments)
            }

            function C(t) {
                return O.apply(this, arguments)
            }

            function O() {
                return O = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, r["a"].jsonp(l, {
                                params: {
                                    authcookie: Object(a["x"])(),
                                    owner: e.uid,
                                    agenttype: y,
                                    num: e.pageSize,
                                    feedId: e.lastFeedId,
                                    feedTypes: e.feedTypes
                                }
                            });
                        case 2:
                            return n = t.sent, t.abrupt("return", n.data);
                        case 4:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), O.apply(this, arguments)
            }

            function j(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return T = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, o;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, b({
                                agenttype: y
                            });
                        case 2:
                            return n = t.sent, i = {
                                cIds: e.wallIds,
                                atoken: n,
                                m_device_id: Object(a["w"])(),
                                agenttype: y,
                                agentversion: Object(s["u"])()
                            }, t.next = 6, r["a"].jsonp(h, {
                                params: i
                            });
                        case 6:
                            if (o = t.sent, !o || "A00000" !== o.data.code) {
                                t.next = 9;
                                break
                            }
                            return t.abrupt("return", o.data.data);
                        case 9:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), T.apply(this, arguments)
            }

            function I(t) {
                return P.apply(this, arguments)
            }

            function P() {
                return P = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, a;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                type: e.pageType,
                                page: e.pageNum,
                                startDate: e.startDate || ""
                            }, t.next = 3, r["a"].jsonp(f, {
                                params: n
                            });
                        case 3:
                            return i = t.sent, a = i.data, t.abrupt("return", "A00000" === a.code ? a.data : null);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), P.apply(this, arguments)
            }

            function L(t) {
                return R.apply(this, arguments)
            }

            function R() {
                return R = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, s;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                m_device_id: Object(a["w"])(),
                                agenttype: y,
                                agentversion: g,
                                atoken: e.atoken,
                                cIds: e.cIds
                            }, t.next = 3, r["a"].jsonp(m, {
                                params: n
                            });
                        case 3:
                            return i = t.sent, s = i.data, t.abrupt("return", "A00000" === s.code ? s.data : null);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), R.apply(this, arguments)
            }

            function E(t) {
                return A.apply(this, arguments)
            }

            function A() {
                return A = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, a;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                tag_category: e.name,
                                rltnum: e.rltnum || 30,
                                area: e.area,
                                cid: e.cid,
                                id: e.tvid,
                                tag_limit: e.tagLimit,
                                rltfmt: "json",
                                play_platform: "H5_QIYI"
                            }, t.next = 3, r["a"].jsonp(v, {
                                params: n
                            });
                        case 3:
                            return i = t.sent, a = i.data, "A00000" === a.code && (a.data.forEach(function (t) {
                                t.pageUrl = Object(o["R"])(t.pageUrl), t.pictureUrl = Object(o["v"])(t.pictureUrl, "195_260")
                            }), a.pingback = {
                                area: a.area,
                                bkt: a.bucket,
                                event_id: a.event_id
                            }), t.abrupt("return", a);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), A.apply(this, arguments)
            }

            function q(t) {
                return N.apply(this, arguments)
            }

            function N() {
                return N = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, o;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                agentversion: Object(s["u"])(),
                                authcooakie: Object(a["x"])(),
                                agenttype: Object(s["t"])(),
                                m_device_id: Object(a["w"])(),
                                wallId: e.wallId || "",
                                qypid: e.qypid,
                                atoken: e.atoken
                            }, t.next = 3, r["a"].jsonp(p, {
                                params: n
                            });
                        case 3:
                            return i = t.sent, o = i.data, t.abrupt("return", "A00000" === o.code ? o.data : null);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), N.apply(this, arguments)
            }
        }, "0460": function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return k
            }), n.d(e, "a", function () {
                return x
            }), n.d(e, "d", function () {
                return C
            }), n.d(e, "c", function () {
                return j
            }), n.d(e, "e", function () {
                return L
            }), n.d(e, "g", function () {
                return E
            }), n.d(e, "f", function () {
                return q
            });
            var i = n("795b"),
                r = n.n(i),
                a = (n("96cf"), n("3b8d")),
                s = n("8296"),
                o = n("936f"),
                c = n("b383"),
                u = n("b2e7"),
                l = n("5191"),
                d = n("2c06"),
                p = n("11ad"),
                h = "https://security.iqiyi.com/static/verifycenter/js/verifycenter.js",
                f = "https://qcaptcha.iqiyi.com/api/outer/sbox/sbox_init_key",
                m = "https://qcaptcha.iqiyi.com/api/outer/verifycenter/initpage",
                v = "https://qcaptcha.iqiyi.com/api/outer/verifycenter/sendMail",
                y = "https://qcaptcha.iqiyi.com/api/outer/verifycenter/verify",
                g = "https://static.iqiyi.com/js/html5/js/lib/funbss644.js";

            function b() {
                return w.apply(this, arguments)
            }

            function w() {
                return w = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(s["K"])(h));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), w.apply(this, arguments)
            }

            function k(t) {
                return _.apply(this, arguments)
            }

            function _() {
                return _ = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, b();
                        case 2:
                            return t.t0 = e.wrapper, t.t1 = e.callback, t.t2 = e.captchaType, t.t3 = e.phoneNumber, t.t4 = e.areaCode, t.t5 = e.requestType, t.t6 = e.token, t.next = 11, Object(l["b"])();
                        case 11:
                            return t.t7 = t.sent, t.t8 = p["p"], t.t9 = Object(d["t"])(), t.t10 = Object(u["w"])(), t.t11 = e.isTw ? "zh_tw" : "zh_cn", n = {
                                wrapper: t.t0,
                                callback: t.t1,
                                captchaType: t.t2,
                                phoneNumber: t.t3,
                                areaCode: t.t4,
                                requestType: t.t5,
                                token: t.t6,
                                dfp: t.t7,
                                ptid: t.t8,
                                agentType: t.t9,
                                deviceId: t.t10,
                                clientVersion: 1,
                                type: !1,
                                language: t.t11
                            }, t.abrupt("return", new window.VerifyCenter(n));
                        case 18:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), _.apply(this, arguments)
            }

            function x(t) {
                return S.apply(this, arguments)
            }

            function S() {
                return S = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, b();
                        case 2:
                            return t.t0 = e.wrapper, t.t1 = e.token, t.t2 = e.callback, t.t3 = e.isTw ? "zh_tw" : "zh_cn", t.next = 8, Object(l["b"])();
                        case 8:
                            return t.t4 = t.sent, n = {
                                wrapper: t.t0,
                                token: t.t1,
                                callback: t.t2,
                                language: t.t3,
                                dfp: t.t4,
                                captchaType: "slidecode",
                                type: !1
                            }, t.abrupt("return", new window.VerifyCenter(n));
                        case 11:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), S.apply(this, arguments)
            }

            function C() {
                return O.apply(this, arguments)
            }

            function O() {
                return O = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(s["K"])(g);
                        case 2:
                            return e = window.SECSDK.getSecure(), t.t0 = e, t.next = 6, Object(l["b"])();
                        case 6:
                            return t.t1 = t.sent, t.next = 9, Object(u["x"])();
                        case 9:
                            return t.t2 = t.sent, n = {
                                secure: t.t0,
                                dfp: t.t1,
                                authcookie: t.t2,
                                platform: "web",
                                nifc: !1
                            }, t.abrupt("return", o["a"].post(f, Object(c["stringify"])(n)).then(function (t) {
                                if ("A00000" === t.data.code) {
                                    var e = t.data.data.sr,
                                        n = t.data.data.sid,
                                        i = t.data.data.sign;
                                    return new r.a(function (t, r) {
                                        window.SECSDK.init({
                                            sr: e,
                                            sid: n,
                                            sign: i
                                        }, function (e) {
                                            e.success && window.SECSDK.getVersion(function (e) {
                                                t(e)
                                            })
                                        })
                                    })
                                }
                            }).catch(function () {
                                return !1
                            }));
                        case 12:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), O.apply(this, arguments)
            }

            function j(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return T = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", new r.a(function (t, n) {
                                window.SECSDK.encrypt(e, function (e) {
                                    e.success && t(e.data)
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), T.apply(this, arguments)
            }

            function I(t) {
                return P.apply(this, arguments)
            }

            function P() {
                return P = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", new r.a(function (t, n) {
                                window.SECSDK.decrypt(e, function (e) {
                                    e.success && t(e.data)
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), P.apply(this, arguments)
            }

            function L(t) {
                return R.apply(this, arguments)
            }

            function R() {
                return R = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                cryptSrcData: e.cryptSrcData,
                                cryptVersion: e.cryptVersion,
                                platform: e.platform,
                                nifc: e.nifc
                            }, t.abrupt("return", o["a"].post(m, Object(c["stringify"])(n)).then(function (t) {
                                if (200 === t.status) return I(t.data)
                            }).catch(function () {
                                return !1
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), R.apply(this, arguments)
            }

            function E(t) {
                return A.apply(this, arguments)
            }

            function A() {
                return A = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                cryptSrcData: e.cryptSrcData,
                                cryptVersion: e.cryptVersion,
                                platform: e.platform,
                                nifc: e.nifc
                            }, t.abrupt("return", o["a"].post(v, Object(c["stringify"])(n)).then(function (t) {
                                if (200 === t.status) return I(t.data)
                            }).catch(function () {
                                return !1
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), A.apply(this, arguments)
            }

            function q(t) {
                return N.apply(this, arguments)
            }

            function N() {
                return N = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                cryptSrcData: e.cryptSrcData,
                                cryptVersion: e.cryptVersion,
                                platform: e.platform,
                                nifc: e.nifc
                            }, t.abrupt("return", o["a"].post(y, Object(c["stringify"])(n)).then(function (t) {
                                if (200 === t.status) return I(t.data)
                            }).catch(function () {
                                return !1
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), N.apply(this, arguments)
            }
        }, "0578": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t.isForbidError ? n("section", {
                        staticClass: "m-closeUser-tip outsiteplay-tip"
                    }, [t._m(0), t._m(1)]) : t._e(), t.isConcurrentError ? n("section", {
                        staticClass: "m-closeUser-tip outsiteplay-tip"
                    }, [t._m(2), t._m(3)]) : t._e()])
                },
                r = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("span", {
                            staticClass: "icon-wrap"
                        }, [n("i", {
                            staticClass: "c-playPage-icon c-playPage-warn"
                        })])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "c-info"
                        }, [n("div", {
                            staticClass: "info-txt"
                        }, [t._v("您的会员账号出现异常登录且已被多次冻结")]), n("div", {
                            staticClass: "info-txt"
                        }, [t._v("请拨打客服电话解封："), n("a", {
                            attrs: {
                                href: "tel:400-800-7171"
                            }
                        }, [t._v("400-800-7171")]), t._v("。")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("span", {
                            staticClass: "icon-wrap"
                        }, [n("i", {
                            staticClass: "c-playPage-icon c-playPage-warn"
                        })])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "c-info"
                        }, [n("div", {
                            staticClass: "info-txt"
                        }, [t._v("您的VIP账号已被多人使用，")]), n("div", {
                            staticClass: "info-txt"
                        }, [t._v("暂时无法观看。想继续观看？")]), n("div", {
                            staticClass: "info-txt"
                        }, [t._v("请关闭其他设备下的视频播放或\n        "), n("a", {
                            staticClass: "green",
                            attrs: {
                                href: "https://m.iqiyi.com/m/security/changePassword"
                            }
                        }, [t._v("修改密码")])])])
                    }
                ],
                a = (n("57e7"), n("96cf"), n("3b8d")),
                s = (n("c5f6"), n("b2e7")),
                o = n("6f18"),
                c = n("8296"),
                u = {
                    name: "VideoLayerAccountError",
                    props: {
                        qipuId: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            isConcurrentError: !1,
                            isForbidError: !1,
                            timer: null
                        }
                    }, computed: {
                        isShow: function () {
                            return this.isConcurrentError || this.isForbidError
                        }, block: function () {
                            return this.isConcurrentError ? "1504121_1" : this.isForbidError ? "1504121_2" : ""
                        }
                    }, beforeMount: function () {
                        var t = this,
                            e = this.$parent;
                        e.$on("created", function () {
                            t.$player = e, e.on("play", function () {
                                t.timer && t.timer.start()
                            }), e.on("pause", function () {
                                t.timer && t.timer.stop()
                            }), e.$on("loaded", function () {
                                t.checkVip()
                            })
                        })
                    }, methods: {
                        checkVip: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e, n, i, r = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (Object(s["M"])()) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 2:
                                        return t.next = 4, Object(s["u"])();
                                    case 4:
                                        e = t.sent, "A00000" === e.code ? (n = e.data ? e.data.keepalive : "", i = 1e3 * (+n || 30), this.timer && this.timer.stop(), this.timer = new c["j"](function () {
                                            Object(o["e"])({
                                                tvid: r.qipuId
                                            })
                                        }, i)) : ["A10001", "A10002", "A10004"].indexOf(e.code) >= 0 && (this.isConcurrentError = "A10001" === e.code, this.isForbidError = "A10001" !== e.code, this.$player.src(""), this.$parent.$emit("layerShow", {
                                            type: this.isConcurrentError ? "concurrent" : "forbid"
                                        }));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                l = u,
                d = n("2877"),
                p = Object(d["a"])(l, i, r, !1, null, null, null);
            e["a"] = p.exports
        }, "090f": function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return i
            });
            n("a481");

            function i(t) {
                return t.replace(/^https?:/, "")
            }
        }, "0b16": function (t, e, n) {
            "use strict";
            var i = n("1985"),
                r = n("35e86");

            function a() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }
            e.parse = k, e.resolve = x, e.resolveObject = S, e.format = _, e.Url = a;
            var s = /^([a-z0-9.+-]+:)/i,
                o = /:[0-9]*$/,
                c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                u = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
                l = ["{", "}", "|", "\\", "^", "`"].concat(u),
                d = ["'"].concat(l),
                p = ["%", "/", "?", ";", "#"].concat(d),
                h = ["/", "?", "#"],
                f = 255,
                m = /^[+a-z0-9A-Z_-]{0,63}$/,
                v = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                y = {
                    javascript: !0,
                    "javascript:": !0
                },
                g = {
                    javascript: !0,
                    "javascript:": !0
                },
                b = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                w = n("b383");

            function k(t, e, n) {
                if (t && r.isObject(t) && t instanceof a) return t;
                var i = new a;
                return i.parse(t, e, n), i
            }

            function _(t) {
                return r.isString(t) && (t = k(t)), t instanceof a ? t.format() : a.prototype.format.call(t)
            }

            function x(t, e) {
                return k(t, !1, !0).resolve(e)
            }

            function S(t, e) {
                return t ? k(t, !1, !0).resolveObject(e) : e
            }
            a.prototype.parse = function (t, e, n) {
                if (!r.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var a = t.indexOf("?"),
                    o = -1 !== a && a < t.indexOf("#") ? "?" : "#",
                    u = t.split(o),
                    l = /\\/g;
                u[0] = u[0].replace(l, "/"), t = u.join(o);
                var k = t;
                if (k = k.trim(), !n && 1 === t.split("#").length) {
                    var _ = c.exec(k);
                    if (_) return this.path = k, this.href = k, this.pathname = _[1], _[2] ? (this.search = _[2], this.query = e ? w.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
                }
                var x = s.exec(k);
                if (x) {
                    x = x[0];
                    var S = x.toLowerCase();
                    this.protocol = S, k = k.substr(x.length)
                }
                if (n || x || k.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var C = "//" === k.substr(0, 2);
                    !C || x && g[x] || (k = k.substr(2), this.slashes = !0)
                }
                if (!g[x] && (C || x && !b[x])) {
                    for (var O, j, T = -1, I = 0; I < h.length; I++) {
                        var P = k.indexOf(h[I]); - 1 !== P && (-1 === T || P < T) && (T = P)
                    }
                    j = -1 === T ? k.lastIndexOf("@") : k.lastIndexOf("@", T), -1 !== j && (O = k.slice(0, j), k = k.slice(j + 1), this.auth = decodeURIComponent(O)), T = -1;
                    for (I = 0; I < p.length; I++) {
                        P = k.indexOf(p[I]); - 1 !== P && (-1 === T || P < T) && (T = P)
                    } - 1 === T && (T = k.length), this.host = k.slice(0, T), k = k.slice(T), this.parseHost(), this.hostname = this.hostname || "";
                    var L = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!L)
                        for (var R = this.hostname.split(/\./), E = (I = 0, R.length); I < E; I++) {
                            var A = R[I];
                            if (A && !A.match(m)) {
                                for (var q = "", N = 0, $ = A.length; N < $; N++) A.charCodeAt(N) > 127 ? q += "x" : q += A[N];
                                if (!q.match(m)) {
                                    var V = R.slice(0, I),
                                        B = R.slice(I + 1),
                                        U = A.match(v);
                                    U && (V.push(U[1]), B.unshift(U[2])), B.length && (k = "/" + B.join(".") + k), this.hostname = V.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > f ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), L || (this.hostname = i.toASCII(this.hostname));
                    var M = this.port ? ":" + this.port : "",
                        H = this.hostname || "";
                    this.host = H + M, this.href += this.host, L && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== k[0] && (k = "/" + k))
                }
                if (!y[S])
                    for (I = 0, E = d.length; I < E; I++) {
                        var D = d[I];
                        if (-1 !== k.indexOf(D)) {
                            var F = encodeURIComponent(D);
                            F === D && (F = escape(D)), k = k.split(D).join(F)
                        }
                    }
                var z = k.indexOf("#"); - 1 !== z && (this.hash = k.substr(z), k = k.slice(0, z));
                var W = k.indexOf("?");
                if (-1 !== W ? (this.search = k.substr(W), this.query = k.substr(W + 1), e && (this.query = w.parse(this.query)), k = k.slice(0, W)) : e && (this.search = "", this.query = {}), k && (this.pathname = k), b[S] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    M = this.pathname || "";
                    var Q = this.search || "";
                    this.path = M + Q
                }
                return this.href = this.format(), this
            }, a.prototype.format = function () {
                var t = this.auth || "";
                t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "",
                    n = this.pathname || "",
                    i = this.hash || "",
                    a = !1,
                    s = "";
                this.host ? a = t + this.host : this.hostname && (a = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && r.isObject(this.query) && Object.keys(this.query).length && (s = w.stringify(this.query));
                var o = this.search || s && "?" + s || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || b[e]) && !1 !== a ? (a = "//" + (a || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : a || (a = ""), i && "#" !== i.charAt(0) && (i = "#" + i), o && "?" !== o.charAt(0) && (o = "?" + o), n = n.replace(/[?#]/g, function (t) {
                    return encodeURIComponent(t)
                }), o = o.replace("#", "%23"), e + a + n + o + i
            }, a.prototype.resolve = function (t) {
                return this.resolveObject(k(t, !1, !0)).format()
            }, a.prototype.resolveObject = function (t) {
                if (r.isString(t)) {
                    var e = new a;
                    e.parse(t, !1, !0), t = e
                }
                for (var n = new a, i = Object.keys(this), s = 0; s < i.length; s++) {
                    var o = i[s];
                    n[o] = this[o]
                }
                if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;
                if (t.slashes && !t.protocol) {
                    for (var c = Object.keys(t), u = 0; u < c.length; u++) {
                        var l = c[u];
                        "protocol" !== l && (n[l] = t[l])
                    }
                    return b[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
                }
                if (t.protocol && t.protocol !== n.protocol) {
                    if (!b[t.protocol]) {
                        for (var d = Object.keys(t), p = 0; p < d.length; p++) {
                            var h = d[p];
                            n[h] = t[h]
                        }
                        return n.href = n.format(), n
                    }
                    if (n.protocol = t.protocol, t.host || g[t.protocol]) n.pathname = t.pathname;
                    else {
                        var f = (t.pathname || "").split("/");
                        while (f.length && !(t.host = f.shift()));
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), n.pathname = f.join("/")
                    } if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                        var m = n.pathname || "",
                            v = n.search || "";
                        n.path = m + v
                    }
                    return n.slashes = n.slashes || t.slashes, n.href = n.format(), n
                }
                var y = n.pathname && "/" === n.pathname.charAt(0),
                    w = t.host || t.pathname && "/" === t.pathname.charAt(0),
                    k = w || y || n.host && t.pathname,
                    _ = k,
                    x = n.pathname && n.pathname.split("/") || [],
                    S = (f = t.pathname && t.pathname.split("/") || [], n.protocol && !b[n.protocol]);
                if (S && (n.hostname = "", n.port = null, n.host && ("" === x[0] ? x[0] = n.host : x.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)), t.host = null), k = k && ("" === f[0] || "" === x[0])), w) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, x = f;
                else if (f.length) x || (x = []), x.pop(), x = x.concat(f), n.search = t.search, n.query = t.query;
                else if (!r.isNullOrUndefined(t.search)) {
                    if (S) {
                        n.hostname = n.host = x.shift();
                        var C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                        C && (n.auth = C.shift(), n.host = n.hostname = C.shift())
                    }
                    return n.search = t.search, n.query = t.query, r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
                }
                if (!x.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
                for (var O = x.slice(-1)[0], j = (n.host || t.host || x.length > 1) && ("." === O || ".." === O) || "" === O, T = 0, I = x.length; I >= 0; I--) O = x[I], "." === O ? x.splice(I, 1) : ".." === O ? (x.splice(I, 1), T++) : T && (x.splice(I, 1), T--);
                if (!k && !_)
                    for (; T--; T) x.unshift("..");
                !k || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), j && "/" !== x.join("/").substr(-1) && x.push("");
                var P = "" === x[0] || x[0] && "/" === x[0].charAt(0);
                if (S) {
                    n.hostname = n.host = P ? "" : x.length ? x.shift() : "";
                    C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                    C && (n.auth = C.shift(), n.host = n.hostname = C.shift())
                }
                return k = k || n.host && x.length, k && !P && x.unshift(""), x.length ? n.pathname = x.join("/") : (n.pathname = null, n.path = null), r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n
            }, a.prototype.parseHost = function () {
                var t = this.host,
                    e = o.exec(t);
                e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
            }
        }, "0da7": function (t, e, n) {
            "use strict";
            var i = n("d225"),
                r = n("b0b4");

            function a(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push("".concat(n, "=").concat(encodeURIComponent(t[n]) || ""));
                return e.join("&")
            }
            var s = n("7aa9");

            function o() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    n = e.topicInfo,
                    i = void 0 === n ? "" : n,
                    r = e.title,
                    o = void 0 === r ? "" : r,
                    c = e.url,
                    u = void 0 === c ? "" : c,
                    l = e.site,
                    d = void 0 === l ? "爱奇艺" : l,
                    p = e.icon,
                    h = void 0 === p ? "" : p,
                    f = e.desc,
                    m = void 0 === f ? "" : f,
                    v = e.titleWebo,
                    y = void 0 === v ? "" : v,
                    g = "",
                    b = "";
                if ("weibo" === t) {
                    var w = {
                        appkey: "1925825497",
                        url: u,
                        title: y || "".concat(i).concat(o, " (来自@爱奇艺)")
                    };
                    g = "http://v.t.sina.com.cn/share/share.php?".concat(a(w)), window.location.href = g
                } else if ("qzone" === t) {
                    var k = {
                        url: u,
                        showcount: "1",
                        site: d,
                        title: o,
                        pics: h,
                        summary: m
                    };
                    b = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?".concat(a(k)), Object(s["a"])(window.navigator.userAgent).browser.baidubox ? location.href = b : window.open(b, "_blank")
                }
            }
            var c = n("f499"),
                u = n.n(c);
            n("a481");

            function l(t, e) {
                var n = "",
                    i = window.navigator.userAgent;
                "qq" === t ? n = Object(s["a"])(i).os.ios ? "mqqapi://share/to_fri?src_type=web&version=1&file_type=news" : "mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news" : "qzone" === t && (n = Object(s["a"])(i).os.ios ? "mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A" : "mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1"), d(n, e)
            }

            function d(t, e) {
                var n = t + "&" + p(e),
                    i = window.navigator.userAgent;
                if (Object(s["a"])(i).os.ios) location.href = n;
                else {
                    var r = document.createElement("iframe");
                    r.style.display = "none", r.src = n, document.body.appendChild(r), setTimeout(function () {
                        r && r.parentNode && r.parentNode.removeChild(r)
                    }, 2e3)
                }
            }

            function p(t) {
                var e = t.url,
                    n = t.title,
                    i = t.desc,
                    r = t.icon,
                    a = [],
                    s = {
                        share_id: 924053302,
                        url: window.btoa(e),
                        title: h.encode(n),
                        description: h.encode(i),
                        previewimageUrl: window.btoa(r),
                        image_url: window.btoa(r)
                    };
                for (var o in s) s.hasOwnProperty(o) && a.push(o + "=" + s[o]);
                return a.join("&")
            }
            var h = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function (t) {
                    var e, n, i, r, a, s, o, c = "",
                        u = 0;
                    for (t = this._utf8_encode(t); u < t.length;) e = t.charCodeAt(u++), n = t.charCodeAt(u++), i = t.charCodeAt(u++), r = e >> 2, a = (3 & e) << 4 | n >> 4, s = (15 & n) << 2 | i >> 6, o = 63 & i, isNaN(n) ? s = o = 64 : isNaN(i) && (o = 64), c = c + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(s) + this._keyStr.charAt(o);
                    return c
                }, _utf8_encode: function (t) {
                    t = t.replace(/\r\n/g, "\n");
                    for (var e = "", n = 0; n < t.length; n++) {
                        var i = t.charCodeAt(n);
                        i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
                    }
                    return e
                }
            };

            function f(t, e) {
                var n = e.title,
                    i = e.desc,
                    r = e.url,
                    a = e.icon,
                    o = window.navigator.userAgent;
                Object(s["a"])(o).browser.qq && !Object(s["a"])(o).browser.weixin ? v(t, {
                    title: n,
                    desc: i,
                    url: r,
                    icon: a
                }) : "undefined" !== typeof ucweb ? w(t, {
                    title: n,
                    desc: i,
                    url: r,
                    icon: a
                }) : Object(s["a"])(o).browser.uc && Object(s["a"])(o).os.ios ? k(t, {
                    title: n,
                    desc: i,
                    url: r,
                    icon: a
                }) : Object(s["a"])(o).browser.baidubrowser && Object(s["a"])(o).os.ios ? b({
                    title: n,
                    desc: i,
                    url: r,
                    icon: a
                }) : Object(s["a"])(o).browser.baidubox && Object(s["a"])(o).os.ios ? g({
                    title: n,
                    desc: i,
                    url: r,
                    icon: a
                }) : Object(s["a"])(o).browser.baidubox && Object(s["a"])(o).os.android ? y({
                    title: n,
                    desc: i,
                    url: r,
                    icon: a
                }) : "qq" !== t && "qzone" !== t || l(t, {
                    title: n,
                    desc: i,
                    url: r,
                    icon: a
                })
            }

            function m() {
                var t = document.getElementsByTagName("script")[0],
                    e = document.createElement("script");
                e.src = "https://jsapi.qq.com/get?api=app.share", e.async = !0, t.parentNode.insertBefore(e, t), e.onload = function () {}
            }

            function v(t, e) {
                var n = e.title,
                    i = e.desc,
                    r = e.url,
                    a = e.icon,
                    s = {
                        wechatTimeline: 8,
                        wechatFriend: 1,
                        qq: 4,
                        qzone: 3
                    },
                    o = s[t];
                browser.app.share({
                    title: n,
                    description: i,
                    url: r,
                    img_url: a,
                    to_app: o
                })
            }

            function y(t) {
                var e = t.title,
                    n = t.desc,
                    i = t.url,
                    r = t.icon,
                    a = {
                        obj: "Bdbox_android_utils",
                        func: "callShare",
                        args: ["{imageUrl: '',\n    mediaType: 'all',\n    title: '".concat(e, "',\n    content: '").concat(n, "',\n    linkUrl: '").concat(i, "',\n    iconUrl: '").concat(r, "'}")]
                    };
                prompt("BdboxApp:".concat(u()(a)))
            }

            function g(t) {
                var e = t.title,
                    n = t.desc,
                    i = t.url,
                    r = t.icon,
                    a = {
                        title: e,
                        content: n,
                        iconUrl: r,
                        linkUrl: i
                    },
                    s = "baiduboxapp://callShare?options=\n    ".concat(encodeURIComponent(u()(a)), "\n    &successcallback=NativeShareSuccessCallback\n    &errorcallback=NativeShareFailCallback&minver=5.3.5");
                window.location.href = s
            }

            function b(t) {
                var e = t.title,
                    n = t.desc,
                    i = t.url,
                    r = t.icon;
                location.href = "baidubrowserapp://bd_utils?action=shareWebPage&params=\n    ".concat(encodeURIComponent(u()({
                    title: e,
                    content: n,
                    imageurl: r,
                    landurl: i,
                    mediaType: 0,
                    share_type: "webpage"
                })))
            }

            function w(t, e) {
                var n = e.title,
                    i = e.desc,
                    r = e.url,
                    a = e.icon,
                    s = {
                        wechatTimeline: "WechatTimeline",
                        wechatFriend: "WechatFriends",
                        qq: "QQ",
                        qzone: "Qzone"
                    };
                "wechatTimeline" !== t && "wechatFriend" !== t || (a = "");
                var o = s[t];
                ucweb.startRequest("shell.page_share", [n, i, r, o, "", "", a])
            }

            function k(t, e) {
                var n = e.title,
                    i = e.desc,
                    r = e.url,
                    a = e.icon,
                    s = {
                        wechatTimeline: "kWeixinFriend",
                        wechatFriend: "kWeixin",
                        qq: "kQQ",
                        qzone: "kQZone"
                    },
                    o = s[t];
                ucbrowser.web_shareEX && ucbrowser.web_shareEX(u()({
                    title: n,
                    content: i,
                    sourceUrl: r,
                    imageUrl: a,
                    target: o
                }))
            }

            function _(t, e) {
                var n = document.getElementsByTagName("script")[0],
                    i = document.createElement("script");
                i.src = t, i.async = !0, n.parentNode.insertBefore(i, n), i.onload = function () {
                    e()
                }
            }
            var x = "//static.iqiyi.com/js/html5/js/lib/clipboard.min.js";

            function S(t) {
                var e = t.copyDom,
                    n = t.copyCallback;
                C() ? e.style.display = "none" : _(x, function () {
                    var t = new Clipboard(e);
                    t.on("success", function () {
                        n()
                    })
                })
            }

            function C() {
                var t = window.navigator.userAgent,
                    e = /iPhone OS (\d*)_(\d*)/i.exec(t),
                    n = e && 8 === e[1];
                return /BLN-TL10/i.test(t) || /PE-TL20/i.test(t) || n || /VivoBrowser/i.test(t)
            }
            var O = n("0b16");

            function j(t, e) {
                var n = Object(O["parse"])(t);
                return n.protocol = e || location.protocol, Object(O["format"])(n)
            }
            n.d(e, "a", function () {
                return T
            });
            var T = function () {
                function t(e) {
                    var n = e.title,
                        r = void 0 === n ? "" : n,
                        a = e.url,
                        o = void 0 === a ? "" : a,
                        c = e.icon,
                        u = void 0 === c ? "" : c,
                        l = e.desc,
                        d = void 0 === l ? "" : l,
                        p = e.topicInfo,
                        h = void 0 === p ? "" : p,
                        f = e.titleWebo,
                        v = void 0 === f ? "" : f,
                        y = e.site,
                        g = void 0 === y ? "" : y,
                        b = e.copyDom,
                        w = void 0 === b ? null : b,
                        k = e.copyCallback,
                        _ = void 0 === k ? function () {} : k;
                    Object(i["a"])(this, t), this.title = r, this.url = j(o, "http"), this.icon = j(u, "http"), this.desc = d.length > 50 ? "".concat(d.slice(0, 50), "...") : d, this.topicInfo = h, this.titleWebo = v, this.site = g, Object(s["a"])(navigator.userAgent).browser.qq && m(), w && (this.copyDom = w, this.copyCallback = _, S({
                        copyDom: w,
                        copyCallback: _
                    }))
                }
                return Object(r["a"])(t, [{
                    key: "shareToWeibo",
                    value: function () {
                        o("weibo", this)
                    }
                }, {
                    key: "shareToQzone",
                    value: function () {
                        var t = Object(s["a"])(navigator.userAgent),
                            e = t.browser,
                            n = t.os;
                        "undefined" !== typeof ucweb || e.baidubrowser && n.ios || e.baidubox || e.chrome && n.android || e.oppo || e.weixin ? o("qzone", this) : f("qzone", this)
                    }
                }, {
                    key: "shareToQQ",
                    value: function () {
                        f("qq", this)
                    }
                }, {
                    key: "shareToWeixin",
                    value: function () {
                        f("wechatFriend", this)
                    }
                }, {
                    key: "shareToWXFriends",
                    value: function () {
                        f("wechatTimeline", this)
                    }
                }]), t
            }()
        }, "0e44": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("section", {
                        staticClass: "m-appeal-form"
                    }, [n("AppealInput", {
                        attrs: {
                            value: t.account,
                            type: "number",
                            placeholder: "请输入手机号"
                        },
                        on: {
                            "update:value": function (e) {
                                t.account = e
                            }, "blur:input": t.blurInput
                        },
                        scopedSlots: t._u([{
                            key: "area",
                            fn: function () {
                                return [n("SecurityAreaCode", {
                                    attrs: {
                                        "use-case": t.useCase,
                                        "area-code": t.acode
                                    },
                                    on: {
                                        "update:areaCode": function (e) {
                                            t.acode = e
                                        }, "update:area-code": function (e) {
                                            t.acode = e
                                        }
                                    }
                                })]
                            }, proxy: !0
                        }])
                    }), n("AppealInput", {
                        ref: "smscodeInput",
                        attrs: {
                            err: t.phoneerr || t.smserr,
                            value: t.smscode,
                            "is-need-clear": !1,
                            "format-callback": t.format,
                            type: "number",
                            placeholder: "请输短信验证码"
                        },
                        on: {
                            "update:value": [
                                function (e) {
                                    t.smscode = e
                                },
                                t.verifySmscode
                            ],
                            "blur:input": t.verifySmscode
                        },
                        scopedSlots: t._u([{
                            key: "right",
                            fn: function () {
                                return [n("SecuritySmsCodeGet", {
                                    ref: "smscode",
                                    attrs: {
                                        disable: !t.cansmscode
                                    },
                                    on: {
                                        "click:get": t.getSmsCode
                                    }
                                })]
                            }, proxy: !0
                        }])
                    })], 1), t.verifyToken ? n("SecuritySlideCode", {
                        attrs: {
                            token: t.verifyToken,
                            "is-tw": !1
                        },
                        on: {
                            slideVerifySuccess: t.onSildeVerifySuccess,
                            slideVerifyFail: function (e) {
                                return t.$emit("error", e)
                            }
                        }
                    }) : t._e(), n("AppealButton", {
                        attrs: {
                            text: t.text,
                            disable: t.disable
                        },
                        on: {
                            submit: t.verifyPhone
                        }
                    })], 1)
                },
                r = [],
                a = (n("a481"), n("96cf"), n("3b8d")),
                s = (n("57e7"), n("4cb4")),
                o = n("37024"),
                c = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isTimeout,
                            expression: "!isTimeout"
                        }],
                        class: ["yzm-link", {
                            disabled: t.disable
                        }],
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.getSmsCode
                        }
                    }, [t._v(t._s(t.isResend ? "重新获取" : "获取验证码"))]), n("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isTimeout,
                            expression: "isTimeout"
                        }],
                        staticClass: "yzm-link disabled",
                        attrs: {
                            href: "javascript:void(0)"
                        }
                    }, [t._v(t._s(t.counter) + "后重试")])])
                },
                u = [],
                l = n("8296"),
                d = {
                    name: "SecuritySmsCodeGet",
                    props: {
                        disable: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function () {
                        return {
                            isTimeout: !1,
                            isResend: !1,
                            counter: "60s"
                        }
                    }, methods: {
                        getSmsCode: function () {
                            this.$emit("click:get")
                        }, smsCodeTimeout: function () {
                            var t = this;
                            this.isTimeout = !0;
                            var e = 60,
                                n = new l["j"](function () {
                                    e -= 1, e ? t.counter = "".concat(e, "s") : (n.stop(), t.isTimeout = !1, t.isResend = !0, t.counter = "60s")
                                });
                            n.start()
                        }
                    }
                },
                p = d,
                h = n("2877"),
                f = Object(h["a"])(p, c, u, !1, null, null, null),
                m = f.exports,
                v = n("a5a6"),
                y = n("d006"),
                g = n("fdc4"),
                b = n("261c"),
                w = {
                    name: "AppealPhoneVerify",
                    components: {
                        SecurityAreaCode: s["a"],
                        SecuritySlideCode: o["a"],
                        SecuritySmsCodeGet: m,
                        AppealInput: v["a"],
                        AppealButton: y["a"]
                    },
                    props: {
                        text: {
                            type: String,
                            default: "下一步"
                        }
                    },
                    data: function () {
                        return {
                            account: "",
                            smscode: "",
                            acode: 86,
                            phoneerr: "",
                            smserr: "",
                            useCase: "1",
                            slideToken: "",
                            verifyToken: ""
                        }
                    }, computed: {
                        isMail: function () {
                            return this.account && this.account.indexOf("@") > -1
                        }, disable: function () {
                            return !(this.account && this.smscode) || !!this.phoneerr || !!this.smserr || !Object(g["k"])(this.account, this.acode)
                        }, cansmscode: function () {
                            return this.account && Object(g["k"])(this.account, this.acode) && !this.phoneerr
                        }
                    }, watch: {
                        account: function () {
                            this.phoneerr = this.account && !this.checkAccount() ? g["f"] : ""
                        }, acode: function () {
                            this.blurInput()
                        }
                    }, methods: {
                        verifyPhone: function () {
                            this.checkSmscode() ? this.$emit("submit", {
                                vaildate: !this.disable,
                                acode: this.acode,
                                account: this.account,
                                smscode: this.smscode,
                                err: this.phoneerr
                            }) : this.smserr = "短信验证码应为6位"
                        }, getSmsCode: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e, n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.$refs.smscodeInput.focusInput(), this.blurInput()) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return this.$refs.smscode.smsCodeTimeout(), e = {
                                            area: this.acode,
                                            username: this.account,
                                            slideToken: this.slideToken
                                        }, t.next = 7, Object(b["o"])(e);
                                    case 7:
                                        n = t.sent, n.success || (n.isSileVerify ? this.verifyToken = n.token : (n.isHeightRisk, this.$emit("error", {
                                            title: "绑定新手机失败",
                                            msg: n.msg
                                        })));
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        verifySmscode: function () {
                            this.checkSmscode(), this.$emit("click:send", {
                                vaildate: !this.smserr
                            })
                        }, onSildeVerifySuccess: function (t) {
                            this.verifyToken = "", this.slideToken = t.token, t.token ? (this.$refs.smscode.smsCodeTimeout(), this.getSmsCode()) : this.$emit("error", {
                                title: "绑定新手机失败",
                                msg: t.msg
                            })
                        }, checkAccount: function () {
                            return this.isMail ? Object(g["l"])(this.account) : !Object(g["k"])(this.account, this.acode) || Object(g["m"])(this.account, this.acode)
                        }, blurInput: function () {
                            if (this.isMail) this.phoneerr = Object(g["l"])(this.account) ? "" : g["f"];
                            else {
                                if (Object(g["k"])(this.account, this.acode) && Object(g["m"])(this.account, this.acode)) return this.phoneerr = "", !0;
                                this.phoneerr = g["f"]
                            }
                            return !1
                        }, checkLength: g["k"],
                        checkSmscode: function () {
                            var t = this.smscode.length;
                            return t > g["g"] ? (this.smserr = "短信验证码应为6位", !1) : (t === g["g"] && (this.smserr = ""), t === g["g"])
                        }, format: function (t) {
                            return t.replace(g["h"], "$1")
                        }
                    }
                },
                k = w,
                _ = Object(h["a"])(k, i, r, !1, null, null, null);
            e["a"] = _.exports
        }, 1140: function (t, e) {
            (function (e) {
                t.exports = e
            }).call(this, {})
        }, "120a": function (t, e, n) {
            "use strict";
            var i = n("8c18"),
                r = n.n(i);
            r.a
        }, "12a0": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t.videos.length ? n("div", {
                        staticClass: "m-box",
                        attrs: {
                            name: "m-albumList"
                        }
                    }, [n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("AuraCardTitle", {
                        attrs: {
                            title: t.videoTitle
                        },
                        scopedSlots: t._u([{
                            key: "rightBtn",
                            fn: function () {
                                return [n("a", {
                                    staticClass: "c-link",
                                    attrs: {
                                        href: "javascript:void(0)"
                                    },
                                    on: {
                                        click: t.showSourceLayer
                                    }
                                }, [t._v("\n            " + t._s(t.updateStrategy) + "\n            "), n("i", {
                                    staticClass: "c-glyphicon c-glyphicon-arrowRight"
                                })])]
                            }, proxy: !0
                        }], null, !1, 105532721)
                    })], 1), n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("ScrollLoad", {
                        class: t.coverClass,
                        attrs: {
                            callback: t.scrollLoadPage,
                            "load-completed": t.loadCompleted,
                            length: t.length,
                            "qipu-id": t.videoInfo.qipuId,
                            "is-init-load": t.rightPage !== t.totalPages - 1,
                            "layer-open": t.layerOpen,
                            tag: "section"
                        },
                        on: {
                            loadFailure: t.onLoadFailure
                        }
                    }, [n("ul", {
                        staticClass: "m-pic-list m-sliding-list",
                        staticStyle: {
                            transform: "translate(0px, 0px) scale(1)"
                        }
                    }, t._l(t.videos, function (e, i) {
                        return n("li", {
                            directives: [{
                                name: "pingback",
                                rawName: "v-pingback",
                                value: "l" + (i + 1),
                                expression: "`l${index + 1}`"
                            }, {
                                name: "play",
                                rawName: "v-play",
                                value: {
                                    continuous: t.continuous,
                                    card: "albumList",
                                    selectClass: "selected",
                                    qipuId: e.qipuId,
                                    index: e.index,
                                    url: e.pageUrl,
                                    redirect: t.redirectLink,
                                    action: "upsert",
                                    next: t.callNext
                                },
                                expression: "{\n              continuous: continuous,\n              card: 'albumList',\n              selectClass: 'selected',\n              qipuId: video.qipuId,\n              index: video.index,\n              url: video.pageUrl,\n              redirect: redirectLink,\n              action: 'upsert',\n              next: callNext\n            }"
                            }],
                            key: e.id + "_" + i + "_album",
                            staticClass: "c-album-item",
                            class: {
                                selected: t.videoInfo.qipuId === e.qipuId
                            }
                        }, [n("div", {
                            staticClass: "piclist-img"
                        }, [n("a", {
                            staticClass: "piclist-link",
                            style: {
                                "background-image": "url(" + e.imageUrl + ")"
                            },
                            attrs: {
                                title: e.title,
                                href: "javascript:void(0)"
                            }
                        }, [n("div", {
                            staticClass: "c-rt"
                        }, [e.payMarkUrl ? n("AuraVideoPicicon", {
                            attrs: {
                                "pay-mark-url": e.payMarkUrl,
                                text: e.upperRightCorner
                            }
                        }) : t._e()], 1), n("div", {
                            staticClass: "c-rb"
                        }, [n("span", {
                            staticClass: "c-date"
                        }, [t._v(t._s(e.period))])])])]), n("div", {
                            staticClass: "piclist-title"
                        }, [n("div", {
                            staticClass: "c-title"
                        }, [n("a", {
                            attrs: {
                                href: "javascript:void(0);"
                            }
                        }, [t._v(t._s(e.shortTitle))])])])])
                    }), 0)])], 1)]) : t.isLoad ? n("section", {
                        staticClass: "m-loading-info"
                    }, [n("div", {
                        staticClass: "c-info"
                    }, [t._v("当前剧集目前暂无内容或版权，请持续关注更新")])]) : t._e()])
                },
                r = [],
                a = (n("a481"), n("7514"), n("a745")),
                s = n.n(a),
                o = n("e814"),
                c = n.n(o),
                u = n("795b"),
                l = n.n(u),
                d = (n("57e7"), n("20d6"), n("bd86")),
                p = (n("96cf"), n("3b8d")),
                h = (n("ac6a"), n("f3e2"), n("0cd8"), n("cebc")),
                f = (n("c5f6"), n("2f62")),
                m = n("1d52"),
                v = n("6e73"),
                y = n("21fd"),
                g = n("3e9e"),
                b = n("5a0c"),
                w = n.n(b),
                k = {
                    name: "SourceCard",
                    components: {
                        ScrollLoad: v["a"]
                    },
                    props: {
                        sourceId: {
                            type: Number,
                            default: 0
                        },
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        updateStrategy: {
                            type: String,
                            default: ""
                        },
                        coverClass: {
                            type: String,
                            default: ""
                        },
                        videoTitle: {
                            type: String,
                            default: ""
                        },
                        continuous: {
                            type: Boolean,
                            default: !0
                        },
                        redirectLink: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            videos: [],
                            isLoad: !1,
                            leftPage: 0,
                            rightPage: 0,
                            curPage: 0,
                            nextPage: 0,
                            loadCompleted: !1,
                            nextYear: "",
                            nextMonth: "",
                            hasLoadPage: []
                        }
                    }, computed: Object(h["a"])({}, Object(f["e"])("play", ["videoList", "albumInfo", "layerOpen", "sourceListInfo", "layerPage", "secureJsonpToken"]), {
                        summary: function () {
                            var t = this.videoList.summary,
                                e = [];
                            return t.reduce(function (t, n) {
                                n.monthList.forEach(function (t) {
                                    e.push({
                                        year: n.year,
                                        month: t
                                    })
                                })
                            }, {}), e
                        }, length: function () {
                            return this.videos.length
                        }, totalPages: function () {
                            return this.summary.length
                        }
                    }),
                    watch: {
                        layerPage: function () {
                            var t = Object(p["a"])(regeneratorRuntime.mark(function t(e, n) {
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e === n) {
                                            t.next = 7;
                                            break
                                        }
                                        return this.videos = this.sourceListInfo[e], this.rightPage = e, this.hasLoadPage = [], this.hasLoadPage.push(e), t.next = 7, this.loadPrePage(e);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e, n) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        videoList: {
                            handler: function () {
                                this.videos = this.formatVideos(this.videoList.videos, this.curPage)
                            }, immediate: !0
                        }
                    },
                    beforeMount: function () {
                        this.initVideos(), this.$store.dispatch("play/sourceListInfo", Object(d["a"])({}, this.rightPage, this.formatVideos(this.videoList.videos, this.curPage))), this.$store.dispatch("play/sourceSummary", this.summary)
                    }, mounted: function () {
                        var t = {
                            card: "albumList",
                            action: "update",
                            qipuId: this.videoInfo.qipuId
                        };
                        g["a"].setCurVideo(t)
                    }, methods: {
                        initVideos: function () {
                            var t = Object(p["a"])(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.setCurrentPage(), e = this.rightPage, this.videoList.videos.length) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 5, this.loadSource(e);
                                    case 5:
                                        return this.hasLoadPage.push(e), t.next = 8, this.loadPrePage(e);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        setCurrentPage: function () {
                            var t = {
                                year: this.videoList.currentYear,
                                month: this.videoList.currentMonth
                            };
                            this.curPage = this.summary.findIndex(function (e) {
                                return e.year === t.year && e.month === t.month
                            }), this.rightPage = this.summary.findIndex(function (e) {
                                return e.year === t.year && e.month === t.month
                            })
                        }, loadPrePage: function (t) {
                            if (t > 0) return this.leftPage = t - 1, this.loadSource(this.leftPage, !1)
                        }, scrollLoadPage: function (t) {
                            var e = t.scrollToRight;
                            e ? this.rightPage = this.rightPage + 1 : this.leftPage = this.leftPage - 1;
                            var n = e ? this.rightPage : this.leftPage;
                            return n < 0 || n >= this.totalPages || this.hasLoadPage.indexOf(n) > -1 ? l.a.resolve() : this.loadSource(n, e)
                        }, callNext: function () {
                            var t = Object(p["a"])(regeneratorRuntime.mark(function t(e) {
                                var n, i, r, a, s, o, u = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        for (i in n = e.curVideo, this.sourceListInfo)
                                            for (r = 0; r < this.sourceListInfo[i].length; r++) this.sourceListInfo[i][r].qipuId === n.qipuId && (a = this.sourceListInfo[i][r], this.nextYear = a.period.slice(0, 4), this.nextMonth = a.period.slice(5, 7), this.nextPage = c()(i));
                                        if (s = this.summary.findIndex(function (t) {
                                            return t.year === u.nextYear && t.month === u.nextMonth
                                        }) + 1, this.sourceListInfo[this.nextPage] && !(s >= this.totalPages)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 5:
                                        if (o = this.sourceListInfo[this.nextPage].findIndex(function (t) {
                                            return t.qipuId === n.qipuId
                                        }) + 1, o !== this.sourceListInfo[this.nextPage].length) {
                                            t.next = 11;
                                            break
                                        }
                                        if (!(this.hasLoadPage.indexOf(this.nextPage + 1) > -1)) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 9:
                                        return t.next = 11, this.loadSource(this.nextPage + 1, !0);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        loadSource: function () {
                            var t = Object(p["a"])(regeneratorRuntime.mark(function t(e, n) {
                                var i, r, a, s, o, c;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = this.summary[e], r = i.year, a = i.month, s = {
                                            sourceId: this.videoInfo.sourceId,
                                            year: r,
                                            month: a,
                                            token: this.secureJsonpToken
                                        }, t.next = 4, Object(m["d"])(s);
                                    case 4:
                                        return o = t.sent, c = this.formatVideos(o, e), this.videos = n ? this.videos.concat(c) : c.concat(this.videos), this.hasLoadPage.push(e), t.abrupt("return", this.$store.dispatch("play/sourceListInfo", Object(d["a"])({}, e, c)));
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e, n) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        formatVideos: function (t, e) {
                            var n = this;
                            return s()(t) && t.length ? (t.forEach(function (t, i) {
                                t.index = Object(m["c"])(e, i), t.upperRightCorner = Object(y["n"])(t), t.order = t.pd, t.title = n.title(t), t.period = t.period ? w()(t.period).format("YYYY-MM-DD") : "", t.selected = n.qipuId === t.qipuId
                            }), t) : []
                        }, onLoadFailure: function (t) {
                            this.loadCompleted = !0
                        }, title: function (t) {
                            var e = t.period ? w()(t.period).format("YYYY-MM-DD") : "",
                                n = this.formatTitle(t.shortTitle);
                            return (e ? "".concat(e, "期") : "") + (n ? ": ".concat(n) : "")
                        }, formatTitle: function (t) {
                            var e = [/第[\d]*集/, /[\d]*\./, /[\d]*、/, /[\d]*\s/];
                            return e.find(function (e) {
                                e.test(t) && (t = t.replace(e, ""))
                            }), t
                        }, showSourceLayer: function () {
                            this.$emit("showSourceLayer")
                        }
                    }
                },
                _ = k,
                x = n("2877"),
                S = Object(x["a"])(_, i, r, !1, null, null, null);
            e["a"] = S.exports
        }, 1533: function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return m
            }), n.d(e, "a", function () {
                return v
            }), n.d(e, "c", function () {
                return b
            }), n.d(e, "e", function () {
                return k
            }), n.d(e, "g", function () {
                return S
            }), n.d(e, "d", function () {
                return O
            }), n.d(e, "f", function () {
                return T
            });
            var i = n("0a0d"),
                r = n.n(i),
                a = n("a745"),
                s = n.n(a),
                o = (n("96cf"), n("3b8d")),
                c = n("936f"),
                u = n("e2a0"),
                l = n.n(u),
                d = n("b2e7"),
                p = n("8296"),
                h = n("11ad"),
                f = n("2c06"),
                m = 1,
                v = 2,
                y = "//sns-api.iqiyi.com/apis/friend/add_friends.action",
                g = "//sns-api.iqiyi.com/apis/friend/remove_friends.action";

            function b(t) {
                return w.apply(this, arguments)
            }

            function w() {
                return w = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                types: 1,
                                agent_type: 201,
                                p1: "2_20_201",
                                u: Object(d["w"])(),
                                uids: e.uids,
                                source: e.source || (p["N"].android ? 5 : 7),
                                dec_tp: "pgc" === e.subType ? "1" : "3"
                            }, t.next = 3, c["a"].jsonp(y, {
                                params: n
                            });
                        case 3:
                            return i = t.sent, r = i.data, t.abrupt("return", r && "A00000" === r.code);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), w.apply(this, arguments)
            }

            function k(t) {
                return _.apply(this, arguments)
            }

            function _() {
                return _ = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                sns_type: 1,
                                agent_type: 201,
                                p1: "2_20_201",
                                u: Object(d["w"])(),
                                uids: e.uids,
                                source: e.source || (p["N"].android ? 5 : 7),
                                dec_tp: "pgc" === e.subType ? "1" : "3"
                            }, t.next = 3, c["a"].jsonp(g, {
                                params: n
                            });
                        case 3:
                            return i = t.sent, r = i.data, t.abrupt("return", r && "A00000" === r.code);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), _.apply(this, arguments)
            }
            var x = "fragment friendInfoFields on FriendList {\n  page\n  pageSize\n  total\n  userInfos {\n    followedCount\n    friend {\n      status\n      uid\n    }\n    iUser\n    icon\n    mark\n    nickName\n    recommand\n    uid\n  }\n}";

            function S(t) {
                return C.apply(this, arguments)
            }

            function C() {
                return C = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = s.length > 1 && void 0 !== s[1] ? s[1] : {}, i = s.length > 2 && void 0 !== s[2] ? s[2] : {}, r = "\n    query UserInfoList($fparams: InfoParams, $rparams: InfoParams) {\n      user(params: $fparams) {\n        ...friendInfoFields\n      }\n      recommandUser(params: $rparams) {\n        ...friendInfoFields\n      }\n    }\n    ".concat(x), t.next = 5, c["a"].get("/u/api/graphql", {
                                params: {
                                    query: r,
                                    variables: {
                                        fparams: {
                                            myuid: Object(d["y"])() + "",
                                            uid: e + "",
                                            pageSize: n.pageSize,
                                            page: n.page
                                        },
                                        rparams: {
                                            myuid: Object(d["y"])() + "",
                                            uid: e + "",
                                            pageSize: i.pageSize,
                                            page: i.page
                                        }
                                    }
                                }
                            });
                        case 5:
                            return a = t.sent, t.abrupt("return", a && a.data && a.data.data);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), C.apply(this, arguments)
            }

            function O(t, e) {
                return j.apply(this, arguments)
            }

            function j() {
                return j = Object(o["a"])(regeneratorRuntime.mark(function t(e, n) {
                    var i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, c["a"].jsonpCache(h["i"], {
                                params: {
                                    myuid: e,
                                    uids: s()(n) ? n.join(",") : n
                                }
                            });
                        case 2:
                            return i = t.sent, r = l()(i.data) ? JSON.parse(i.data) : i.data || {}, t.abrupt("return", "A00000" === r.code && r);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), j.apply(this, arguments)
            }

            function T(t) {
                return I.apply(this, arguments)
            }

            function I() {
                return I = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, a;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                timestamp: r()()
                            }, t.next = 3, c["a"].get("//m.iqiyi.com/u/api/".concat(e, "/friend/add"), {
                                params: n,
                                headers: {
                                    Token: Object(f["D"])(n, "|", "w1517404027635", !0)
                                }
                            });
                        case 3:
                            return i = t.sent, a = i.data, t.abrupt("return", a && "A00000" === a.code);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), I.apply(this, arguments)
            }
        }, 1985: function (t, e, n) {
            (function (t, i) {
                var r; /*! https://mths.be/punycode v1.4.1 by @mathias */
                (function (a) {
                    e && e.nodeType, t && t.nodeType;
                    var s = "object" == typeof i && i;
                    s.global !== s && s.window !== s && s.self;
                    var o, c = 2147483647,
                        u = 36,
                        l = 1,
                        d = 26,
                        p = 38,
                        h = 700,
                        f = 72,
                        m = 128,
                        v = "-",
                        y = /^xn--/,
                        g = /[^\x20-\x7E]/,
                        b = /[\x2E\u3002\uFF0E\uFF61]/g,
                        w = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        k = u - l,
                        _ = Math.floor,
                        x = String.fromCharCode;

                    function S(t) {
                        throw new RangeError(w[t])
                    }

                    function C(t, e) {
                        var n = t.length,
                            i = [];
                        while (n--) i[n] = e(t[n]);
                        return i
                    }

                    function O(t, e) {
                        var n = t.split("@"),
                            i = "";
                        n.length > 1 && (i = n[0] + "@", t = n[1]), t = t.replace(b, ".");
                        var r = t.split("."),
                            a = C(r, e).join(".");
                        return i + a
                    }

                    function j(t) {
                        var e, n, i = [],
                            r = 0,
                            a = t.length;
                        while (r < a) e = t.charCodeAt(r++), e >= 55296 && e <= 56319 && r < a ? (n = t.charCodeAt(r++), 56320 == (64512 & n) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536) : (i.push(e), r--)) : i.push(e);
                        return i
                    }

                    function T(t) {
                        return C(t, function (t) {
                            var e = "";
                            return t > 65535 && (t -= 65536, e += x(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += x(t), e
                        }).join("")
                    }

                    function I(t) {
                        return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : u
                    }

                    function P(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                    }

                    function L(t, e, n) {
                        var i = 0;
                        for (t = n ? _(t / h) : t >> 1, t += _(t / e); t > k * d >> 1; i += u) t = _(t / k);
                        return _(i + (k + 1) * t / (t + p))
                    }

                    function R(t) {
                        var e, n, i, r, a, s, o, p, h, y, g = [],
                            b = t.length,
                            w = 0,
                            k = m,
                            x = f;
                        for (n = t.lastIndexOf(v), n < 0 && (n = 0), i = 0; i < n; ++i) t.charCodeAt(i) >= 128 && S("not-basic"), g.push(t.charCodeAt(i));
                        for (r = n > 0 ? n + 1 : 0; r < b;) {
                            for (a = w, s = 1, o = u;; o += u) {
                                if (r >= b && S("invalid-input"), p = I(t.charCodeAt(r++)), (p >= u || p > _((c - w) / s)) && S("overflow"), w += p * s, h = o <= x ? l : o >= x + d ? d : o - x, p < h) break;
                                y = u - h, s > _(c / y) && S("overflow"), s *= y
                            }
                            e = g.length + 1, x = L(w - a, e, 0 == a), _(w / e) > c - k && S("overflow"), k += _(w / e), w %= e, g.splice(w++, 0, k)
                        }
                        return T(g)
                    }

                    function E(t) {
                        var e, n, i, r, a, s, o, p, h, y, g, b, w, k, C, O = [];
                        for (t = j(t), b = t.length, e = m, n = 0, a = f, s = 0; s < b; ++s) g = t[s], g < 128 && O.push(x(g));
                        i = r = O.length, r && O.push(v);
                        while (i < b) {
                            for (o = c, s = 0; s < b; ++s) g = t[s], g >= e && g < o && (o = g);
                            for (w = i + 1, o - e > _((c - n) / w) && S("overflow"), n += (o - e) * w, e = o, s = 0; s < b; ++s)
                                if (g = t[s], g < e && ++n > c && S("overflow"), g == e) {
                                    for (p = n, h = u;; h += u) {
                                        if (y = h <= a ? l : h >= a + d ? d : h - a, p < y) break;
                                        C = p - y, k = u - y, O.push(x(P(y + C % k, 0))), p = _(C / k)
                                    }
                                    O.push(x(P(p, 0))), a = L(n, w, i == r), n = 0, ++i
                                }++n, ++e
                        }
                        return O.join("")
                    }

                    function A(t) {
                        return O(t, function (t) {
                            return y.test(t) ? R(t.slice(4).toLowerCase()) : t
                        })
                    }

                    function q(t) {
                        return O(t, function (t) {
                            return g.test(t) ? "xn--" + E(t) : t
                        })
                    }
                    o = {
                        version: "1.4.1",
                        ucs2: {
                            decode: j,
                            encode: T
                        },
                        decode: R,
                        encode: E,
                        toASCII: q,
                        toUnicode: A
                    }, r = function () {
                        return o
                    }.call(e, n, e, t), void 0 === r || (t.exports = r)
                })()
            }).call(this, n("bf96")(t), n("483b"))
        }, "1d21": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        ref: "root"
                    }, [t._t("default")], 2)
                },
                r = [],
                a = (n("57e7"), n("774e")),
                s = n.n(a),
                o = (n("7514"), n("c5f6"), n("1fba")),
                c = {
                    name: "Scroll",
                    props: {
                        listLength: {
                            type: Number,
                            default: 0
                        },
                        probeType: {
                            type: Number,
                            default: 1
                        },
                        click: {
                            type: Boolean,
                            default: !0
                        },
                        scrollX: {
                            type: Boolean,
                            default: !1
                        },
                        content: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            scroll: "",
                            itemWidth: 0
                        }
                    }, mounted: function () {
                        var t = this;
                        this.$nextTick(function () {
                            var e = t.$refs.root;
                            t.scroll = new o["a"](e, {
                                probeType: t.probeType,
                                scrollX: t.scrollX,
                                click: t.click,
                                eventPassthrough: "vertical"
                            });
                            var n = e.children[0];
                            t.itemWidth = Math.abs(n.clientWidth) / t.listLength, t.scrollToElement(), t.scroll.on("scroll", function () {
                                t.sendShowElement()
                            }), t.scroll.on("scrollEnd", function () {
                                t.sendShowElement()
                            })
                        })
                    }, destroyed: function () {
                        this.scroll.destroy()
                    }, methods: {
                        sendShowElement: function () {
                            var t = Math.floor(Math.abs(this.scroll.x) / this.itemWidth);
                            this.$emit("scrollToIndex", t)
                        }, scrollToElement: function () {
                            var t = this.getElement();
                            if (t) {
                                var e = this.$el.clientWidth / 2;
                                this.scroll && this.scroll.scrollToElement(t, 0, -e + t.offsetWidth / 2)
                            }
                        }, getElement: function () {
                            var t = null,
                                e = this.$slots.default[0],
                                n = e.children || e.elm.children || [];
                            return n && s()(n).find(function (e, n) {
                                var i = e.elm ? e.elm.className : e.className;
                                i && i.indexOf("selected") > -1 && (t = e.elm || e)
                            }), t
                        }
                    }
                },
                u = c,
                l = n("2877"),
                d = Object(l["a"])(u, i, r, !1, null, null, null);
            e["a"] = d.exports
        }, "1d52": function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return S
            }), n.d(e, "b", function () {
                return O
            }), n.d(e, "d", function () {
                return P
            }), n.d(e, "e", function () {
                return A
            }), n.d(e, "c", function () {
                return N
            });
            n("96cf");
            var i = n("f499"),
                r = n.n(i),
                a = n("0a0d"),
                s = n.n(a),
                o = (n("57e7"), n("ac6a"), n("f3e2"), n("a745")),
                c = n.n(o),
                u = n("3b8d"),
                l = n("936f"),
                d = n("8296"),
                p = n("5a0c"),
                h = n.n(p),
                f = n("8d81"),
                m = n.n(f),
                v = n("21fd"),
                y = "//pub.m.iqiyi.com/h5/main/videoList/album/",
                g = "//pub.m.iqiyi.com/h5/main/videoList/source/month/",
                b = "//pub.m.iqiyi.com/h5/main/miniVideo/sdvlist",
                w = 6048e5,
                k = 432e5,
                _ = {},
                x = {};

            function S(t) {
                return C.apply(this, arguments)
            }

            function C() {
                return C = Object(u["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (n = {
                                albumId: e.albumId,
                                size: e.size || 10,
                                page: e.page,
                                needPrevue: void 0 === e.needPrevue || e.needPrevue,
                                needVipPrevue: void 0 !== e.needVipPrevue && e.needVipPrevue
                            }, i = q(n), _[i]) {
                                t.next = 12;
                                break
                            }
                            return t.next = 5, l["a"].jsonp(y, {
                                params: n
                            }).catch(function (t) {});
                        case 5:
                            if (r = t.sent, !r || !r.data.data) {
                                t.next = 10;
                                break
                            }
                            return T(r.data.data, e.updateInfo), _[i] = r.data.data, t.abrupt("return", r.data.data);
                        case 10:
                            t.next = 13;
                            break;
                        case 12:
                            return t.abrupt("return", _[i]);
                        case 13:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), C.apply(this, arguments)
            }

            function O(t) {
                return j.apply(this, arguments)
            }

            function j() {
                return j = Object(u["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, a, s, o, c;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = e.sourceId, i = e.videoId, r = e.beforeSize, a = e.afterSize, s = e.selfFiltered, o = {
                                selfFiltered: s
                            }, t.prev = 2, t.next = 5, l["a"].jsonp("".concat(b, "/").concat(n, "/").concat(i, "/").concat(r, "/").concat(a, "/"), {
                                params: o
                            });
                        case 5:
                            if (c = t.sent, "A00000" !== c.data.code) {
                                t.next = 10;
                                break
                            }
                            return t.abrupt("return", c.data.data.videos || []);
                        case 10:
                            return t.abrupt("return", []);
                        case 11:
                            t.next = 16;
                            break;
                        case 13:
                            return t.prev = 13, t.t0 = t["catch"](2), t.abrupt("return", []);
                        case 16:
                        case "end":
                            return t.stop()
                        }
                    }, t, null, [
                        [2, 13]
                    ])
                })), j.apply(this, arguments)
            }

            function T(t, e) {
                return I.apply(this, arguments)
            }

            function I() {
                return I = Object(u["a"])(regeneratorRuntime.mark(function t(e, n) {
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            e && c()(e.videos) && e.videos.forEach(function (t) {
                                t.vt || (t.subTitle = "".concat(t.subTitle, " ").concat(t.shortTitle)), t.mainTitle = 1 === t.type ? t.subTitle || t.shortTitle : t.vt || t.shortTitle, t.num = t.pd && t.pd < 10 ? "0".concat(t.pd, "集") : "".concat(t.pd, "集"), t.payMarkUrl = "", t.qipuId = t.qipuId || t.tvId, t.pageUrl = t.pageUrl && Object(d["R"])(t.pageUrl), t.isNew = !!n && E(t, n), t.upperRightCorner = V(t), t.lowerRightCorner = t.duration
                            });
                        case 1:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), I.apply(this, arguments)
            }

            function P(t) {
                return L.apply(this, arguments)
            }

            function L() {
                return L = Object(u["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, a;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (n = {
                                sourceId: e.sourceId,
                                year: e.year,
                                month: e.month,
                                order: e.order || "desc"
                            }, i = e.token, r = q(n), x[r]) {
                                t.next = 13;
                                break
                            }
                            return t.next = 6, l["a"].secureJsonp(g, {
                                params: n
                            }, i).catch(function (t) {});
                        case 6:
                            if (a = t.sent, !a || !a.data.data.videos) {
                                t.next = 11;
                                break
                            }
                            return R(a.data.data.videos), x[r] = a.data.data.videos, t.abrupt("return", a && a.data.data.videos);
                        case 11:
                            t.next = 14;
                            break;
                        case 13:
                            return t.abrupt("return", x[r]);
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), L.apply(this, arguments)
            }

            function R(t) {
                c()(t) && t.forEach(function (t) {
                    t.pageUrl = t.pageUrl && (t.pageUrl.indexOf("vfrm") > -1 ? t.pageUrl : "".concat(Object(d["R"])(t.pageUrl), "#vfrm=30-28-15-7")), t.id = t.qipuId || t.tvId || t.id, t.vt = t.subTitle || t.vt, t.mainTitle = t.shortTitle || t.vt, t.imageUrl = Object(d["v"])(t.imageUrl, "284_160"), t.pubtime = h()(t.period).format("YYYY-MM-DD"), t.lowerRightCorner = t.pubtime && "".concat(t.pubtime, "期"), t.upperRightCorner = $(t), t.explain = t.playCount && "".concat(Object(d["w"])(t.playCount), "次播放"), t.hotNumInfo = "undefined" !== typeof t.hotNum ? "热度 ".concat(t.hotNum) : ""
                })
            }

            function E(t, e) {
                var n = t.type || t.contentType;
                if (1 !== n) return !1;
                var i = t.order || t.pd;
                return e.isShowNew && (i === e.latestOrder || e.latestPublishTime - t.publishTime <= k)
            }

            function A(t) {
                var e = {
                        isEnd: (t.latestOrder || t.latestVideoOrder) >= t.videoCount,
                        latestOrder: t.latestOrder || t.latestVideoOrder,
                        latestIssueTime: t.latestVideo ? t.latestVideo.publishTime : t.latestPublishTime,
                        firstIssueTime: t.firstVideo ? t.firstVideo.publishTime : t.firstPublishTime
                    },
                    n = s()(),
                    i = e.latestIssueTime - e.firstIssueTime <= k,
                    r = n - e.latestIssueTime <= w;
                return e.isEnd ? e.isShowNew = !i && r : e.isShowNew = r, e
            }

            function q(t) {
                return m()("".concat(r()(t)))
            }

            function N(t, e) {
                var n = 1e3 + t;
                return 1e5 * n + e
            }

            function $(t) {
                return 1 === t.payMark || t.isVip ? "VIP" : 2 === t.payMark ? "付费" : 3 === t.payMark ? "用券" : void 0
            }

            function V() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(v["v"])(t) ? "cqdb" : 0 !== t.payMark || t.isVip ? "VIP" : t.isNew ? "NEW" : 1 !== t.type ? "预告" : void 0
            }
        }, "1d84": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "m-appeal-supplement",
                        on: {
                            click: t.changeWay
                        }
                    }, [t._v("\n  换个验证方式？\n")])
                },
                r = [],
                a = {
                    name: "AppealChangeWay",
                    methods: {
                        changeWay: function () {
                            this.$router.push("/m/appeal/ways")
                        }
                    }
                },
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, "1fa0": function (t, e, n) {
            "use strict";
            var i = n("7618"),
                r = (n("96cf"), n("3b8d")),
                a = n("795b"),
                s = n.n(a),
                o = n("d225"),
                c = n("b0b4"),
                u = n("2a84"),
                l = "m3u8",
                d = "mp4";

            function p() {
                return u["j"].ios && !u["a"].readApp && !u["a"].readPlugin || u["k"].redmi && "NOTE 2" === u["k"].version.toUpperCase() && u["j"].android && Object(u["b"])(u["j"].version, "5.0") > 0 && !u["a"].baidubrowser || (u["a"].baidubox || u["a"].baidubrowser || u["a"].weixin || !u["a"].weixin && u["a"].qq && Object(u["b"])(u["a"].version, "7.6") >= 0) && u["j"].android && Object(u["b"])(u["j"].version, "4.4") >= 0 || u["a"].vivobrowser && u["j"].android && Object(u["b"])(u["j"].version, "5.0") > 0 ? l : d
            }

            function h() {
                return u["j"].ios ? "qc_100001_100102" : "qc_100001_100186"
            }
            n.d(e, "a", function () {
                return v
            });
            var f = "02020031010000000000",
                m = {},
                v = function () {
                    function t() {
                        Object(o["a"])(this, t), m = null
                    }
                    return Object(c["a"])(t, [{
                        key: "loadJS",
                        value: function () {
                            return window.__player__ || (window.__player__ = {}), window.__player__.engine = {
                                qvs: u["j"].ios || u["j"].android && u["a"].isChrome(),
                                mp4: p() === d,
                                m3u8: p() === l
                            }, window.QiyiPlayerLoader ? new s.a(function (t, e) {
                                t()
                            }) : Object(u["h"])(location.protocol + "//static.iqiyi.com/js/player_v2/pcweb.mbweb.20200305.js")
                        }
                    }, {
                        key: "createPlayer",
                        value: function () {
                            var t = Object(r["a"])(regeneratorRuntime.mark(function t(e) {
                                var n = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new s.a(function (t, r) {
                                            return n.loadJS().then(function () {
                                                if (!window.QiyiPlayerLoader) return t({
                                                    type: "error",
                                                    msg: "QiyiPlayerLoader is ".concat(Object(i["a"])(window.QiyiPlayerLoader))
                                                }), !1;
                                                window.QiyiPlayerLoader.ready(function (n) {
                                                    var i = e.addata,
                                                        r = {
                                                            videoId: e.videoId,
                                                            tvid: e.tvid,
                                                            vid: e.vid,
                                                            autoplay: !!e.autoplay,
                                                            ptid: f,
                                                            isPrevent: e.isPrevent,
                                                            addata: {
                                                                adPlayerId: i.playerId || h(),
                                                                adTheme: i.adTheme || "default",
                                                                relatedTheme: i.relatedTheme || "default",
                                                                rate: i.rate || ""
                                                            },
                                                            adapi: e.adapi || {}
                                                        };
                                                    m = n.createPlayer(r), t(m)
                                                })
                                            }).catch(function (e) {
                                                t(e)
                                            })
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "loadSource",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            t.cupid = t.adId || h(), m.switchVideo(t)
                        }
                    }, {
                        key: "preload",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            m.checkPreload() && t.tvid && m.preload(t.tvid, t.vid)
                        }
                    }, {
                        key: "setPreviewEnd",
                        value: function () {
                            m.setPreviewEnd()
                        }
                    }, {
                        key: "stopAres",
                        value: function () {
                            m.stopAres()
                        }
                    }, {
                        key: "sendPauseVV",
                        value: function () {
                            m.sendPauseVV()
                        }
                    }, {
                        key: "sendEndVV",
                        value: function () {
                            m.sendEndVV()
                        }
                    }, {
                        key: "switchDefinition",
                        value: function (t) {
                            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            m.switchDefinition(t, e)
                        }
                    }, {
                        key: "setPlayPingbackInfo",
                        value: function (t) {
                            m.setPlayPingbackInfo(t)
                        }
                    }, {
                        key: "getEngineType",
                        value: function () {
                            return m.getEngineType()
                        }
                    }, {
                        key: "getVd",
                        value: function () {
                            return m.vd
                        }
                    }, {
                        key: "clear",
                        value: function () {
                            m = null
                        }
                    }, {
                        key: "isAd",
                        value: function () {
                            return m.isAd()
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return p()
                        }
                    }, {
                        key: "getSkipHeaderTime",
                        value: function () {
                            return m.getSkipHeaderTime()
                        }
                    }, {
                        key: "getSkipTailTime",
                        value: function () {
                            return m.getSkipTailTime()
                        }
                    }, {
                        key: "isSkipPrelude",
                        value: function (t) {
                            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return m.isSkipPrelude(t, e)
                        }
                    }, {
                        key: "setTempStore",
                        value: function () {
                            try {
                                m.setTempStore()
                            } catch (t) {}
                        }
                    }]), t
                }()
        }, 2350: function (t, e) {
            function n(t, e) {
                var n = t[1] || "",
                    r = t[3];
                if (!r) return n;
                if (e && "function" === typeof btoa) {
                    var a = i(r),
                        s = r.sources.map(function (t) {
                            return "/*# sourceURL=" + r.sourceRoot + t + " */"
                        });
                    return [n].concat(s).concat([a]).join("\n")
                }
                return [n].join("\n")
            }

            function i(t) {
                var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                    n = "sourceMappingURL=data:application/json;charset=utf-8;base64," + e;
                return "/*# " + n + " */"
            }
            t.exports = function (t) {
                var e = [];
                return e.toString = function () {
                    return this.map(function (e) {
                        var i = n(e, t);
                        return e[2] ? "@media " + e[2] + "{" + i + "}" : i
                    }).join("")
                }, e.i = function (t, n) {
                    "string" === typeof t && (t = [
                        [null, t, ""]
                    ]);
                    for (var i = {}, r = 0; r < this.length; r++) {
                        var a = this[r][0];
                        "number" === typeof a && (i[a] = !0)
                    }
                    for (r = 0; r < t.length; r++) {
                        var s = t[r];
                        "number" === typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
                    }
                }, e
            }
        }, "23b1": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("AuraPopup", t._b({
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShow,
                            expression: "isShow"
                        }],
                        on: {
                            leftButtonClick: function (e) {
                                t.isShow = !1
                            }, rightButtonClick: t.bindPhone
                        }
                    }, "AuraPopup", t.popup, !1))], 1)
                },
                r = [],
                a = (n("96cf"), n("3b8d")),
                s = (n("57e7"), n("fd12")),
                o = n("b2e7"),
                c = {
                    name: "UserVerify",
                    components: {
                        AuraPopup: s["a"]
                    },
                    props: {
                        verify: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            popup: {},
                            isShow: !1
                        }
                    }, watch: {
                        verify: function (t) {
                            t && this.verifyUser()
                        }
                    }, mounted: function () {
                        var t = Object(o["A"])().indexOf(Object(o["C"])()) > -1;
                        t && this.$emit("success")
                    }, methods: {
                        showPopup: function (t) {
                            this.popup = t, this.isShow = !0
                        }, verifyUser: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (Object(o["M"])()) {
                                            t.next = 3;
                                            break
                                        }
                                        return location.href = "/user.html?redirect_url=".concat(encodeURIComponent(location.href)), t.abrupt("return");
                                    case 3:
                                        return t.prev = 3, t.next = 6, Object(o["X"])();
                                    case 6:
                                        e = t.sent, "A00101" === e.code ? (this.showPopup({
                                            info: "操作频繁，请稍后再试",
                                            leftButtonText: "确定"
                                        }), this.$emit("failure")) : "A00000" !== e.code ? (this.showPopup({
                                            title: "验证手机",
                                            info: "应国家相关法律要求，在使用信息 发布等互联网服务时，需要先完成 验证手机",
                                            leftButtonText: "取消",
                                            rightButtonText: "去验证手机"
                                        }), this.$emit("failure")) : this.$emit("success"), t.next = 14;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t["catch"](3), this.showPopup({
                                            info: "哎呀，出错了，请稍后再试",
                                            leftButtonText: "确定"
                                        }), this.$emit("failure");
                                    case 14:
                                        this.$emit("update:verify", !1);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this, [
                                    [3, 10]
                                ])
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        bindPhone: function () {
                            location.href = "//m.iqiyi.com/m5/security/bindPhone.html?redirect_url=".concat(encodeURIComponent(location.href))
                        }
                    }
                },
                u = c,
                l = n("2877"),
                d = Object(l["a"])(u, i, r, !1, null, null, null);
            e["a"] = d.exports
        }, "23fe": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.apps && t.apps.length ? n("BoxShow", {
                        staticClass: "m-box",
                        attrs: {
                            vfms: ["m_453_360o", "m_376_bdll", "6_55_97", "m_364_vivo"],
                            name: "m-recList"
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "804231_apptuijian",
                            expression: "'804231_apptuijian'"
                        }],
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("AuraCardTitle", {
                        attrs: {
                            icon: t.titleIcon ? "c-channelicon c-channel-yingyong" : "",
                            title: "应用推荐"
                        }
                    })], 1), n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("section", {
                        staticClass: "m-list-app"
                    }, [n("ul", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "804231_apptuijian",
                            expression: "'804231_apptuijian'"
                        }],
                        staticClass: "list-app"
                    }, t._l(t.apps, function (e, i) {
                        return n("li", {
                            key: i
                        }, [n("a", {
                            attrs: {
                                href: e.ad_link,
                                title: e.ad_name
                            }
                        }, [n("img", {
                            attrs: {
                                src: e.list_logo,
                                width: "100%"
                            }
                        }), n("div", {
                            staticClass: "c-title"
                        }, [t._v(t._s(e.ad_name))])])])
                    }), 0)])])]) : t._e()
                },
                r = [],
                a = (n("6d67"), n("96cf"), n("3b8d")),
                s = (n("c5f6"), n("8300")),
                o = n("3bfe"),
                c = n("bc3a"),
                u = n.n(c),
                l = n("b2e7"),
                d = n("8296"),
                p = "other",
                h = "adpop";

            function f() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
                return t === h ? d["N"].android ? 1 : 5 : t === p ? d["N"].android ? 41 : 42 : void 0
            }

            function m(t) {
                return v.apply(this, arguments)
            }

            function v() {
                return v = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = "//pub.m.iqiyi.com/api/getNewAdInfo", i = {}, i.key = "20359201cba5f0b43704e65d1e0cbec7", i.version = "1.0", i.batch = 1, i.type = "json", i.qyid = Object(l["w"])(), i.slotid = e.slotid, i.appNum = e.appNum, t.next = 11, u.a.get(n, {
                                params: i
                            });
                        case 11:
                            return r = t.sent, t.abrupt("return", r.data);
                        case 13:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), v.apply(this, arguments)
            }
            var y = {
                    name: "AppRecommend",
                    components: {
                        AuraCardTitle: o["a"],
                        BoxShow: s["a"]
                    },
                    props: {
                        slotType: {
                            type: String,
                            default: p
                        },
                        titleIcon: {
                            type: Boolean,
                            default: !0
                        },
                        appNum: {
                            type: Number,
                            default: 4
                        }
                    },
                    data: function () {
                        return {
                            apps: [],
                            slotid: f(this.slotType)
                        }
                    }, beforeMount: function () {
                        var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                            var e, n;
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, m({
                                        slotid: this.slotid,
                                        appNum: this.appNum
                                    }).catch(function () {});
                                case 2:
                                    if (e = t.sent, e) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    n = e.response.result[this.slotid], this.apps = n.adinfo.slice(0, this.appNum).map(this.format);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    methods: {
                        format: function (t) {
                            return "爱奇艺视频" === t.ad_name ? d["p"].weixin : "爱奇艺阅读" === t.ad_name ? t.rseat = "805091_dwnpos1" : "爱奇艺动漫" === t.ad_name ? t.rseat = "805091_dwnpos2" : "奇巴布" === t.ad_name ? t.rseat = "805091_dwnpos3" : "奇秀直播" === t.ad_name && (t.rseat = "805091_dwnpos4"), t
                        }
                    }
                },
                g = y,
                b = n("2877"),
                w = Object(b["a"])(g, i, r, !1, null, null, null);
            e["a"] = w.exports
        }, "248c": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "m-video-player-wrap"
                    }, [n("section", {
                        staticClass: "m-video-player m-video-fullScreenWrap change",
                        class: t.playerClass,
                        style: t.playerStyle
                    }, [n("QiyiVideo", {
                        ref: "video",
                        staticClass: "m-player hideControls",
                        attrs: {
                            tvid: t.tvid,
                            vid: t.vid,
                            "ad-params": t.adParams,
                            autoplay: t.autoplay,
                            rate: t.rate,
                            "control-ele": t.controlEle
                        },
                        on: {
                            inited: t.initQiyiVideo,
                            error: function (e) {
                                return t.$emit("error", e)
                            }
                        }
                    }), n("QiyiPosterLayer", t._b({
                        ref: "qiyiPosterLayer"
                    }, "QiyiPosterLayer", t.$attrs, !1)), t.playButton ? n("QiyiPlayButton", {
                        ref: "playButton",
                        on: {
                            playClick: t.togglePlay
                        }
                    }) : t._e(), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.titleShow && t.dashboardShow,
                            expression: "titleShow && dashboardShow"
                        }],
                        staticClass: "video-title"
                    }, [n("span", {
                        staticClass: "c-title"
                    }, [t._v(t._s(t.videoName))])]), t.dashboard ? [n("QiyiDashboard", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isVideo,
                            expression: "isVideo"
                        }],
                        ref: "dashboard",
                        attrs: {
                            "is-video": t.isVideo
                        },
                        on: {
                            playClick: t.togglePlay,
                            seek: t.seek,
                            fullscreen: t._handleFullscreen,
                            dashboardShowChange: t._setDashboardShow
                        }
                    }), n("QiyiAdDashboard", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isVideo,
                            expression: "!isVideo"
                        }],
                        on: {
                            voiceClick: t.toggleMuted,
                            fullscreen: t._handleFullscreen
                        }
                    })] : t._e(), t._t("layer"), t.source ? n("QiyiSourceLayer", t._b({
                        attrs: {
                            "vip-type": t.vipType,
                            "video-name": t.videoName,
                            "is-show-vip-layer": t.isShowVipLayer
                        },
                        on: {
                            sourceTypeChange: t._sourceTypeHandle,
                            sourceLayerFoo: t._sourceLayerFooHandle,
                            sourceVipType: t._sourceVipType,
                            noSourceLayer: function (e) {
                                t.noSourceLayer = e
                            }
                        }
                    }, "QiyiSourceLayer", t.$attrs, !1)) : t._e(), n("QiyiLoading", t._b({
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.forceShowLayer,
                            expression: "!forceShowLayer"
                        }],
                        ref: "loading",
                        attrs: {
                            "loading-callapp": t.loadingCallapp
                        }
                    }, "QiyiLoading", t.$attrs, !1)), n("QiyiPlayLimit", t._b({
                        on: {
                            replayPlay: function (e) {
                                return t.seek(0)
                            }, play: t.play,
                            stopPlay: function (e) {
                                t.played = !1
                            }, show: function (e) {
                                return t.$emit("limitShow", e)
                            }, playLimited: function (e) {
                                t.isPlayLimited = e
                            }
                        },
                        scopedSlots: t._u([t.limitCallAppCustom ? {
                            key: "callApp",
                            fn: function () {
                                return [t._t("limitCallApp")]
                            }, proxy: !0
                        } : null], null, !0)
                    }, "QiyiPlayLimit", t.$attrs, !1)), t.limit && t.noSourceLayer ? n("QiyiLimit", t._b({
                        on: {
                            replayPlay: function (e) {
                                return t.seek(0)
                            }, play: t.play,
                            stopPlay: function (e) {
                                t.played = !1
                            }, show: function (e) {
                                return t.$emit("limitShow", e)
                            }
                        },
                        scopedSlots: t._u([t.limitCallAppCustom ? {
                            key: "callApp",
                            fn: function () {
                                return [t._t("limitCallApp")]
                            }, proxy: !0
                        } : null], null, !0)
                    }, "QiyiLimit", t.$attrs, !1)) : t._e(), n("QiyiBottomBuyLayer", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.dashboardShow,
                            expression: "!dashboardShow"
                        }]
                    }), n("QiyiVideoContinue", {
                        ref: "videoContinue",
                        on: {
                            seek: t.seek,
                            srcChange: t.play,
                            videoStatusChange: t.onVideoStatusChange,
                            play: t._handlePlay,
                            ended: t._handleEnded
                        }
                    })], 2), t.vv ? n("QiyiVV", {
                        ref: "vv",
                        attrs: {
                            "is-video": t.isVideo,
                            "vv-options": t.vvOptions,
                            "coustom-vv-options": t.coustomVvOptions,
                            "player-type": t.playerType,
                            rate: t.rate
                        },
                        on: {
                            sendVV: function (e) {
                                return t.$emit("sendVV", e)
                            }
                        }
                    }) : t._e()], 1), t.record ? n("QiyiRecord", {
                        ref: "record",
                        attrs: {
                            "skip-head-and-end": t.skipHeadAndEnd
                        },
                        on: {
                            ended: t._handleEnded
                        }
                    }) : t._e(), t.source ? n("portal-target", {
                        attrs: {
                            name: "playerPopupContainer"
                        }
                    }) : t._e()], 1)
                },
                r = [],
                a = (n("7514"), n("cebc")),
                s = (n("7f7f"), n("57e7"), n("96cf"), n("3b8d")),
                o = (n("c5f6"), function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("video", {
                        attrs: {
                            id: "video",
                            "webkit-playsinline": "",
                            playsinline: ""
                        }
                    })
                }),
                c = [],
                u = (n("d92a"), n("1fa0")),
                l = n("6ffa"),
                d = {
                    name: "QiyiVideo",
                    props: {
                        tvid: {
                            type: [Number, String],
                            required: !0
                        },
                        vid: {
                            type: String,
                            default: ""
                        },
                        adParams: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        autoplay: {
                            type: Boolean,
                            default: !1
                        },
                        controlEle: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            isLoadVideoSdk: null,
                            seekLock: !0,
                            isCreated: !1
                        }
                    }, created: function () {
                        var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    return e = document.getElementById("video"), t.next = 4, this.createQiyiVideo(e);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    methods: {
                        createQiyiVideo: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                                var n, i = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.isCreated) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return this.isCreated = !0, this.player = new u["a"], t.next = 6, this.player.createPlayer({
                                            videoId: "video",
                                            tvid: this.tvid,
                                            vid: this.vid,
                                            autoplay: this.autoplay,
                                            addata: Object(a["a"])({
                                                playerId: this.adParams.adId
                                            }, this.adParams),
                                            adapi: {
                                                height: this.videoHeight.bind(this),
                                                width: this.videoWidth.bind(this),
                                                fullscreen: this.toggleFullscreen.bind(this),
                                                isfullscreen: this.isFullscreen.bind(this)
                                            },
                                            isPrevent: this.isPrevent.bind(this)
                                        });
                                    case 6:
                                        n = t.sent, n && "error" !== n.type ? (this.video = new l["a"]({
                                            sdk: n,
                                            video: e || this.$el,
                                            controlEle: this.controlEle ? document.getElementById(this.controlEle) : ""
                                        }), this.player.getVideo = function () {
                                            return i.video || {}
                                        }, this.init()) : this.$emit("error", {
                                            targetName: "api",
                                            msg: n ? n.msg || "load_sdk" : "init_player"
                                        });
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        init: function () {
                            var t = this.player;
                            this.player.isSkipPrelude(), this.$emit("inited", t)
                        }, videoWidth: function () {
                            return this.video.width()
                        }, videoHeight: function () {
                            return this.video.height()
                        }, toggleFullscreen: function () {
                            var t = this.video.isFullscreen();
                            t ? this.video.exitFullscreen() : (this.video.play(), this.video.fullscreen())
                        }, isFullscreen: function () {
                            return this.video.isFullscreen()
                        }, isPrevent: function () {
                            var t = this.video && this.video.getSrcStatus();
                            return !t
                        }
                    }
                },
                p = d,
                h = n("2877"),
                f = Object(h["a"])(p, o, c, !1, null, null, null),
                m = f.exports,
                v = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div")
                },
                y = [],
                g = {
                    name: "QiyiVideoContinue",
                    data: function () {
                        return {
                            isAd: !1
                        }
                    }, beforeMount: function () {
                        this.init()
                    }, methods: {
                        init: function () {
                            var t = this,
                                e = this.$parent;
                            e.$on("created", function (e) {
                                t.qiyiVideo = e, t.bindEvent()
                            })
                        }, bindEvent: function () {
                            var t = this,
                                e = this.$parent;
                            e.$on("load", function () {
                                e.off("playing", t.play), e.once("playing", t.play)
                            }), e.$on("loaded", function (e) {
                                t.isHttp = e.videoInfo.isHttp, t.isMp4 = "mp4" === e.type, t.prv = e.videoInfo.prv, t.videoStatus = ""
                            }), e.on("pause", function () {
                                !t.isHttp && t.prv && e.currentTime() >= e.duration() && !t.isAd && t.$emit("ended", "VIDEO", !0)
                            }), e.on("ended", function () {
                                e.reset(), t.triggerVideoStatus(), t.isAd ? (e.off("playing", t.play), e.once("playing", t.play), t.$emit("srcChange")) : t.$emit("ended", t.videoStatus)
                            }), e.on("adended", function () {
                                setTimeout(function () {
                                    t.triggerVideoStatus()
                                }, 100), e.off("playing", t.play), e.once("playing", t.play)
                            }), e.on("fullscreenchange", function () {
                                t.isAd = t.qiyiVideo.isAd(), t.isAd || t.triggerVideoStatus()
                            })
                        }, triggerVideoStatus: function () {
                            this.isAd = this.qiyiVideo.isAd();
                            var t = this.videoStatus;
                            this.videoStatus = this.isAd ? "AD" : "VIDEO", this.videoStatus !== t && this.$emit("videoStatusChange", this.videoStatus)
                        }, play: function () {
                            this.triggerVideoStatus();
                            var t = this.$parent;
                            !t.paused() && t.src() && this.$emit("play", {
                                videoStatus: this.videoStatus
                            })
                        }, skipAd: function () {
                            var t = this.$parent;
                            this.isMp4 ? (t.off("playing", this.play), t.once("playing", this.play)) : this.play()
                        }
                    }
                },
                b = g,
                w = Object(h["a"])(b, v, y, !1, null, null, null),
                k = w.exports,
                _ = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.isLimit ? n("div", [t.startShow ? n("div", {
                        staticClass: "m-play-appGuide",
                        style: "background-image: url(" + t.poster + ");"
                    }, [n("div", {
                        staticClass: "handle"
                    }, [n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "h5_xuanji_5min",
                            expression: "'h5_xuanji_5min'"
                        }],
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.play
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-albumPlay"
                    }), t._v("试看5分钟\n      ")]), n("ButtonDown", {
                        staticClass: "c-link",
                        attrs: {
                            subtype: t.subtype,
                            "extral-options": t.extralOptions(),
                            tag: "a",
                            href: "javascript:void(0);",
                            "to-page": "play"
                        }
                    }, [t._v("\n        进入爱奇艺观看完整版\n      ")])], 1)]) : t._e(), t.endShow ? n("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "h5_block_xianbo_seeend",
                            expression: "'h5_block_xianbo_seeend'"
                        }],
                        staticClass: "m-player-tip m-video-limitePlay"
                    }, [n("div", {
                        staticClass: "player-tip-inner"
                    }, [t.isVip ? t._e() : n("div", {
                        staticClass: "c-player-tip-info"
                    }, [t._v("试看结束")]), n("div", {
                        staticClass: "c-player-tip-info"
                    }, [t._v(t._s(t.tipInfo))]), n("div", {
                        staticClass: "player-tip-btn"
                    }, [n("ButtonDown", {
                        staticClass: "c-link laqi",
                        attrs: {
                            subtype: t.subtype,
                            "extral-options": t.extralOptions(),
                            tag: "a",
                            rseat: "h5_xianbo_seeend",
                            href: "javascript:void(0);",
                            "to-page": "play"
                        }
                    }, [t._v("观看完整版\n        ")])], 1), t.isVip ? t._e() : n("a", {
                        staticClass: "c-refresh-btn",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.replayPlay
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-playRefresh"
                    }), t._v("重新播放\n      ")])])]) : t._e()]) : t._e()
                },
                x = [],
                S = n("795b"),
                C = n.n(S),
                O = n("2a84"),
                j = n("38ff"),
                T = n("ba45"),
                I = n("f191"),
                P = n("b2e7"),
                L = n("5321"),
                R = {
                    name: "QiyiPlayLimit",
                    components: {
                        ButtonDown: j["a"]
                    },
                    props: {
                        subtype: {
                            type: String,
                            default: "H5qzql_523"
                        },
                        templateType: {
                            type: String,
                            default: ""
                        },
                        redirect: {
                            type: Boolean,
                            default: !1
                        },
                        playTemplate: {
                            type: String,
                            default: ""
                        },
                        second: {
                            type: Number,
                            default: 300
                        },
                        poster: {
                            type: String,
                            default: ""
                        },
                        limitFilter: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            startShow: !1,
                            endShow: !1,
                            purchaseType: 0,
                            isVip: !1,
                            tipInfo: "请打开爱奇艺APP观看完整版",
                            videoInfo: {},
                            isLimit: !1,
                            vipUser: !1
                        }
                    }, computed: {
                        show: function () {
                            return this.startShow || this.endShow
                        }
                    }, watch: {
                        show: function (t) {
                            this.$emit("show", t), this.$emit("playLimited", !0)
                        }
                    }, beforeMount: function () {
                        this.isVipUser(), this.init()
                    }, methods: {
                        init: function () {
                            var t = this;
                            this.$parent.$on("created", function () {
                                t.video = t.$parent.video, t.video.once("play", function () {
                                    t.isLimit && (t.stop(), t.start())
                                })
                            }), this.$parent.$on("load", function (e) {
                                t.purchaseType = e.purchaseType
                            }), this.$parent.$on("loaded", function (e) {
                                t.videoInfo = e.videoInfo;
                                var n = e.videoInfo;
                                t.tvid = n.tvid, t.duration = n.duration, n && (n.purchaseType = +t.purchaseType), t.isLimit = Object(I["a"])(n, t.playTemplate, t.limitFilter, t.vipUser), t.isLimit && (1 !== +t.purchaseType && 2 !== +t.purchaseType || t.vipUser ? (t.isVip = !1, t.tipInfo = "请打开爱奇艺APP观看完整版 ", t.startShow = !t.redirect, t.endShow = !1) : (t.isVip = !0, t.tipInfo = "由于版权限制，请打开爱奇艺App观看完整版", t.endShow = !0, t.startShow = !1), t.video.pause(), t.$emit("stopPlay"))
                            })
                        }, extralOptions: function () {
                            var t = this.cid || this.videoInfo.cid || (this.videoInfo.data ? this.videoInfo.data.cid : "") || "",
                                e = this.tvid || this.videoInfo.tvid || "";
                            return {
                                progress: this.$parent.video.currentTime(),
                                ftype: 27,
                                cid: t,
                                tvid: e
                            }
                        }, callApp: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = T["h"][t] || {},
                                n = this.subtype,
                                i = this.cid || this.videoInfo.cid || (this.videoInfo.data ? this.videoInfo.data.cid : "") || "",
                                r = this.tvid || this.videoInfo.tvid || "";
                            return Object(T["y"])({
                                down: 0,
                                ftype: 27,
                                progress: this.$parent.video.currentTime(),
                                cid: i,
                                tvid: r,
                                subtype: n
                            }).catch(function () {
                                var t = e.downloadUrl || Object(T["m"])({
                                    downAppPos: "play_button_open"
                                });
                                return Object(T["k"])(t), C.a.reject(new Error("callapp fail"))
                            })
                        }, play: function () {
                            Object(L["g"])({
                                rseat: "h5_xuanji_5min"
                            }), this.hide(), this.$emit("play")
                        }, replayPlay: function () {
                            this.hide(), this.$emit("replayPlay")
                        }, continuePlay: function () {
                            this.hide(), this.continue = !0, this.$emit("play")
                        }, hide: function () {
                            O["j"].android && this.video.show(), this.startShow = !1, this.endShow = !1
                        }, redirectOrCallApp: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.callApp().catch(function () {
                                t.toCopy && (location.href = "/m5/app/guide.html?redirect_url=".concat(encodeURIComponent(location.href)))
                            })
                        }, start: function () {
                            this.timer = E(1e3)(this.limit.bind(this))
                        }, stop: function () {
                            this.timer && this.timer()
                        }, limit: function () {
                            var t = this.$parent.currentTime(),
                                e = this.second,
                                n = this.duration;
                            n <= e || this.continue || (t > e + 3 ? (this.video.seek(e), this.hide()) : t > e && this.showLayerAndPause())
                        }, showLayerAndPause: function () {
                            O["j"].android && this.video.hide(), this.video.paused() || (this.video.exitFullscreen(), this.startShow = !1, this.endShow = !0, this.video.pause())
                        }, isVipUser: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                                var e, n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (Object(P["M"])()) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 2:
                                        return t.next = 4, Object(P["u"])();
                                    case 4:
                                        return e = t.sent, t.next = 7, Object(P["I"])();
                                    case 7:
                                        if (n = t.sent, "A00000" !== e.code) {
                                            t.next = 16;
                                            break
                                        }
                                        if (!(n && n.data && n.data.vip_info && +n.data.vip_info.vipType === +P["k"])) {
                                            t.next = 14;
                                            break
                                        }
                                        return this.vipUser = !1, t.abrupt("return", !1);
                                    case 14:
                                        return this.vipUser = !0, t.abrupt("return", !1);
                                    case 16:
                                        return t.abrupt("return", !1);
                                    case 17:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                };

            function E(t) {
                return function e(n) {
                    return clearTimeout(E.time), E.time = setTimeout(function () {
                            n(), e(n)
                        }, t),
                        function () {
                            clearTimeout(E.time)
                        }
                }
            }
            var A = R,
                q = Object(h["a"])(A, _, x, !1, null, null, null),
                N = q.exports,
                $ = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.posterShow,
                            expression: "posterShow"
                        }]
                    }, [t.poster ? n("div", {
                        staticClass: "m-video-poster"
                    }, [n("img", {
                        attrs: {
                            id: "player-posterimg",
                            src: t.poster
                        }
                    })]) : t._e(), t.title ? n("div", {
                        staticClass: "video-title"
                    }, [n("span", {
                        staticClass: "c-title"
                    }, [t._v(t._s(t.title))])]) : t._e(), t.num || t.time ? n("div", {
                        staticClass: "playCount-time"
                    }, [t.num ? n("span", {
                        staticClass: "c-num"
                    }, [t._v(t._s(t.num))]) : t._e(), t.time ? n("span", {
                        staticClass: "c-time"
                    }, [t._v(t._s(t.time))]) : t._e()]) : t._e()])
                },
                V = [],
                B = {
                    name: "QiyiPoster",
                    inheritAttrs: !1,
                    props: {
                        poster: {
                            type: String,
                            default: ""
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        num: {
                            type: String,
                            default: ""
                        },
                        time: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            posterShow: !0
                        }
                    }, beforeMount: function () {
                        var t = this;
                        this.$parent.$on("created", function () {
                            t.init()
                        })
                    }, methods: {
                        init: function () {
                            var t = this;
                            this.$parent.on("playing", function () {
                                t.posterShow = !1
                            })
                        }
                    }
                },
                U = B,
                M = Object(h["a"])(U, $, V, !1, null, null, null),
                H = M.exports,
                D = (n("6762"), n("2fdb"), function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "m-player-tip"
                    }, [n("div", {
                        staticClass: "player-tip-inner"
                    }, [n("div", {
                        staticClass: "c-player-tip-info",
                        domProps: {
                            innerHTML: t._s(t.info.text)
                        }
                    }), t.info.returnHomeText ? n("a", {
                        staticClass: "c-btn",
                        attrs: {
                            href: "//m.iqiyi.com/"
                        }
                    }, [t._v("\n      " + t._s(t.info.returnHomeText) + "\n    ")]) : t._e(), t.info.callAppText ? n("a", {
                        staticClass: "c-btn",
                        attrs: {
                            "down-app-pos": "play_oversea_error_down",
                            rseat: ""
                        },
                        on: {
                            click: t.callApp
                        }
                    }, [t._v("\n      " + t._s(t.info.callAppText) + "\n    ")]) : t._e(), t.code ? n("div", {
                        staticClass: "c-error-info"
                    }, [t._v("\n      错误代码: " + t._s(t.code) + "\n    ")]) : t._e()])])
                }),
                F = [],
                z = n("ec1c"),
                W = {
                    name: "QiyiSourceCodeLayer",
                    props: {
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        }
                    },
                    computed: {
                        code: function () {
                            var t = this.videoInfo,
                                e = t.code,
                                n = t.data,
                                i = n.st;
                            return e && i ? "".concat(e, "_").concat(i) : ""
                        }, info: function () {
                            var t = {},
                                e = this.videoInfo,
                                n = e.data,
                                i = n.st;
                            return t = this.isPano(e) ? {
                                text: "很抱歉，<br>当前节目只能在客户端观看",
                                callAppText: "去爱奇艺APP观看"
                            } : this.videoInfo.code ? "A00001" === this.videoInfo.code ? {
                                text: "很抱歉<br>您所查看的视频不存在",
                                returnHomeText: "去看看其他视频"
                            } : 501 === i ? {
                                text: "很抱歉，该平台无法观看本视频<br>下载爱奇艺APP观看海量高清视频",
                                callAppText: "去爱奇艺APP观看"
                            } : 502 === i ? {
                                text: "很抱歉，由于版权限制，<br>您所在的地区暂时无法观看该视频",
                                returnHomeText: "去看看其他视频"
                            } : [505, 506].includes(i) ? {
                                text: "很抱歉<br>由于视频版权限制，您无法观看该视频",
                                callAppText: "去爱奇艺APP观看"
                            } : 509 === i ? {
                                text: "很抱歉，该视频为私密视频，本平台暂无法观看",
                                returnHomeText: "去看看其他视频"
                            } : 503 === i ? {
                                text: "很抱歉<br>该视频尚未通过审核，暂时无法观看",
                                returnHomeText: "去看看其他视频"
                            } : [492, 405, 406].includes(i) ? {
                                text: "很抱歉<br>您所查看的视频已下线",
                                returnHomeText: "去看看其他视频"
                            } : [602, 701, 702, 703].includes(i) ? {
                                text: "提示<br>用券或超前点播视频是单独付费类型,不在VIP范围内。请在热播期后再来观看",
                                callAppText: "请耐心等待"
                            } : {
                                text: "很抱歉<br>您所查看的视频不存在",
                                returnHomeText: "去看看其他视频"
                            } : {
                                text: "很抱歉<br>当前视频暂时无法播放，请您稍后再试",
                                returnHomeText: "去看看其他视频"
                            }, t
                        }
                    },
                    methods: {
                        isPano: function (t) {
                            var e = t && t.data ? t.data : t;
                            if (e.p.pano) {
                                var n = e.p.pano.type;
                                return 1 !== n
                            }
                            return !1
                        }, callApp: function (t) {
                            var e = this;
                            Object(T["y"])(Object(a["a"])({
                                subtype: 152,
                                down: "0"
                            }, this.videoInfo)).catch(function () {
                                var n = Object(T["m"])({
                                    downAppUrl: e.downAppUrl,
                                    downAppPos: e.downAppPos,
                                    downAppAndroidUrl: e.downAppAndroidUrl,
                                    downAppIosUrl: e.downAppIosUrl
                                });
                                Object(T["k"])(n);
                                var i = t.target;
                                Object(z["c"])({
                                    rt: {
                                        A: "a",
                                        IMG: "i"
                                    }[i.nodeName] || "e",
                                    rseat: "mcltdown_4bfydwn",
                                    rlink: i.getAttribute("href"),
                                    packgtype: O["j"].android ? "androidphone" : "iphone"
                                })
                            })
                        }
                    }
                },
                Q = W,
                X = Object(h["a"])(Q, D, F, !1, null, null, null),
                Y = X.exports,
                G = (n("a481"), n("bd86")),
                J = n("a78e"),
                K = n.n(J),
                Z = "QC006",
                tt = "suid",
                et = "1",
                nt = "4",
                it = "",
                rt = "//act.vip.iqiyi.com/interact/api/show",
                at = "97ae2982356f69d8";

            function st() {
                var t = K.a.get("P00002"),
                    e = K.a.get("P00003");
                return t && "deleted" !== t && e && "deleted" !== e
            }

            function ot() {
                return K.a.get("P00001") || ""
            }

            function ct() {
                if (it) return it;
                var t = O["i"].getItem(tt),
                    e = K.a.get(Z);
                if (it = t || e) return (!e || !t) && ut(it), it;
                var n = Object(O["m"])();
                return ut(n), n
            }

            function ut(t) {
                it = t, O["i"].setItem(tt, t), K.a.set(Z, t, {
                    expires: 31536e6,
                    path: "/",
                    domain: "iqiyi.com"
                })
            }

            function lt() {
                return dt.apply(this, arguments)
            }

            function dt() {
                return dt = Object(s["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r, a = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : "", n = {
                                P00001: ot(),
                                code: e,
                                platform: at,
                                deviceID: ct(),
                                version: "1.0",
                                lang: "cn",
                                app_lm: "cn"
                            }, t.next = 4, Object(O["g"])(rt, {
                                params: n
                            });
                        case 4:
                            if (i = t.sent, r = i.data || {}, "A00000" !== r.code || !r.data.detail) {
                                t.next = 8;
                                break
                            }
                            return t.abrupt("return", r.data.detail);
                        case 8:
                            return t.abrupt("return", "");
                        case 9:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), dt.apply(this, arguments)
            }
            var pt, ht, ft, mt, vt = n("51cb"),
                yt = n("e814"),
                gt = n.n(yt),
                bt = n("5176"),
                wt = n.n(bt),
                kt = (n("6d67"), {
                    name: "EduPackageLayer",
                    props: {
                        videoName: {
                            type: String,
                            default: ""
                        },
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        layerInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        }
                    },
                    data: function () {
                        return {
                            layerShow: !1,
                            packages: [],
                            index: 0
                        }
                    }, methods: {
                        show: function () {
                            this.formatPackage(), this.layerShow = !0
                        }, hideLayer: function () {
                            this.layerShow = !1
                        }, updateIndex: function (t) {
                            this.index = t
                        }, formatPackage: function () {
                            var t = this,
                                e = this.layerInfo,
                                n = e.aid,
                                i = e.data;
                            i && i.package && (this.packages = i.package.map(function (e) {
                                return wt()({}, e, {
                                    price: gt()(e.price || 0) / 100,
                                    originPrice: gt()(e.originPrice || 0) / 100,
                                    halfPrice: gt()(e.halfPrice || 0) / 100,
                                    content: e.content.map(function (t) {
                                        return t.url = t.url.replace(/((http(s)?:)?\/\/)?(www|m)\.(i)?qiyi\.com/i, ""), t
                                    }),
                                    validityPeriod: e.validityPeriod ? e.validityPeriod.slice(0, -3) : "",
                                    videoName: t.videoName,
                                    aid: n
                                })
                            }))
                        }, buyPackage: function () {
                            var t = this.packages[this.index],
                                e = "a3c61c9f84531245",
                                n = "".concat(window.location.protocol, "//m.iqiyi.com/productPay.html?fc=").concat(e, "&serviceCode=").concat(t.serviceCode || "", "&aid=").concat(t.aid || "", "&pid=").concat(t.pid || "");
                            st() || (n = "//m.iqiyi.com/user.html?redirect_url=".concat(encodeURIComponent(n))), window.location.href = n
                        }
                    }, render: function () {
                        var t = this,
                            e = arguments[0],
                            n = this.packages.map(function (n, i) {
                                return e("li", {
                                    class: [i === t.index && "selected"]
                                }, [e("a", {
                                    attrs: {
                                        href: "javascript:void(0);"
                                    },
                                    class: "c-link-item",
                                    on: {
                                        click: t.updateIndex.bind(t, i)
                                    }
                                }, ["套餐", i + 1])])
                            }),
                            i = this.packages[this.index],
                            r = i ? i.content.map(function (t) {
                                return e("li", [e("div", {
                                    class: "piclist-img"
                                }, [e("a", {
                                    attrs: {
                                        href: t.url ? t.url : "javascript:void(0);"
                                    },
                                    class: "piclist-link",
                                    style: "background-image:url(".concat(t.pic, ")")
                                }, [e("div", {
                                    class: "c-rb"
                                }, [e("span", {
                                    class: "c-date"
                                }, [t.set ? "".concat(t.set, "集全") : ""])]), e("div", {
                                    class: "c-videoplay hide"
                                }, [e("i", {
                                    class: "c-videoplay-icon c-videoplay-small"
                                })])])]), e("div", {
                                    class: "piclist-title"
                                }, [e("div", {
                                    class: "c-title"
                                }, [e("a", {
                                    attrs: {
                                        href: t.url ? t.url : "javascript:void(0);"
                                    }
                                }, [t.name])])])])
                            }) : [];
                        return e("div", [
                            [this.layerShow && e("div", {
                                class: "m-cover-popup",
                                style: "overflow-y:scroll;"
                            }, [e("div", {
                                class: "m-Package-details"
                            }, [e("div", {
                                class: "content-header"
                            }, [e("div", {
                                class: "header-fixed"
                            }, [e("div", {
                                class: "content"
                            }, [e("h1", {
                                class: "c-title"
                            }, ["套餐详情"]), e("a", {
                                attrs: {
                                    href: "javascript:void(0);"
                                },
                                class: "close-info-btn",
                                on: {
                                    click: this.hideLayer
                                }
                            }, [e("i", {
                                class: "c-glyphicon c-glyphicon-guideClose"
                            })])])])]), e("div", {
                                class: "c-info"
                            }, [this.videoName ? "《".concat(this.videoName, "》包含在 如下套餐中:") : ""]), e("div", {
                                class: "m-sliding"
                            }, [e("div", {
                                class: "contain clearfix"
                            }, [e("ul", {
                                class: "list-item m-sliding-list",
                                style: "overflow-x:scroll;width:100%;"
                            }, [n])])])]), e("div", {
                                class: "m-setMeal-info"
                            }, [e("div", {
                                class: "left-wrap"
                            }, [e("div", {
                                class: "c-title"
                            }, [i.name ? i.name : "高等数学全部讲解高等数学全部讲解高 等数学全部讲解"]), e("div", {
                                class: "c-price"
                            }, ["优惠价：", i.price, "元 ", i.price < i.originPrice && e("span", {
                                class: "c-line-through"
                            }, ["（原价", i.originPrice, "元）"])]), e("div", {
                                class: "c-time"
                            }, ["有效期：", i.validity, " 至 ", i.validityPeriod])]), e("div", {
                                class: "right-wrap",
                                on: {
                                    click: this.buyPackage.bind(this)
                                }
                            }, [e("span", {
                                class: "c-btn-pay"
                            }, ["打包购买"])])]), e("div", {
                                class: "m-box m-box-top m-box-bottom"
                            }, [e("div", {
                                class: "m-setMeal-tiele"
                            }, [e("div", {
                                class: "title"
                            }, [e("h3", {
                                class: "c-title-des"
                            }, ["包含专辑(", i.content.length, ")"])])]), e("div", {
                                class: "m-box-items m-box-items-full"
                            }, [e("section", {
                                class: "m-pic m-pic-vercital m-pic-vercital-sliding m-sliding"
                            }, [e("ul", {
                                class: "m-pic-list m-sliding-list m-pic-list-new",
                                style: "transform: translate(0px, 0px) translateZ(0px);overflow-x:scroll;width:100%;"
                            }, [r])])])])])]
                        ])
                    }
                }),
                _t = kt,
                xt = Object(h["a"])(_t, pt, ht, !1, null, null, null),
                St = xt.exports,
                Ct = {
                    name: "QiyiSourceVipLayer",
                    components: {
                        Login: {
                            functional: !0,
                            render: function (t, e) {
                                var n = e.props;
                                return t("div", {
                                    class: "c-login-tip-info"
                                }, [n.label, t("a", {
                                    directives: [{
                                        name: "show-pingback",
                                        value: "8051101_db_login_block"
                                    }, {
                                        name: "pingback",
                                        value: "8051101_db_login"
                                    }],
                                    attrs: {
                                        href: "//m.iqiyi.com/user.html"
                                    },
                                    domProps: {
                                        innerHTML: n.text
                                    },
                                    class: "c-link"
                                })])
                            }
                        },
                        VipMarketButton: {
                            functional: !0,
                            render: function (t, e) {
                                var n = e.props,
                                    i = n.marketTip || {},
                                    r = i.detail || {},
                                    a = n.aid || n.tvid,
                                    s = (r.redirectUrl1 ? r.redirectUrl1 + "&aid=".concat(a) : "") || "//m.iqiyi.com/pay.html?fc=".concat(n.fc, "&aid=").concat(a);
                                return t("div", {
                                    class: "vipPlayer-tip"
                                }, [t("a", {
                                    directives: [{
                                        name: "show-pingback",
                                        value: n.block
                                    }, {
                                        name: "pingback",
                                        value: n.rseat
                                    }],
                                    attrs: Object(G["a"])({
                                        href: "javascript:void(0)"
                                    }, "href", s),
                                    class: "c-btn"
                                }, [n.text]), r.text1 ? t("span", {
                                    directives: [{
                                        name: "show-pingback",
                                        value: "8051101_dbq_qipao_block"
                                    }],
                                    class: "c-info"
                                }, [r.text1]) : t("span", {
                                    class: "c-info"
                                }, ["立送", n.vodCouponCount ? "".concat(n.vodCouponCount, "张") : null, "点播券"])])
                            }
                        },
                        TipInfo: {
                            functional: !0,
                            render: function (t, e) {
                                var n = e.props;
                                return t("div", {
                                    class: "c-player-tip-info"
                                }, [n.text])
                            }
                        },
                        BuyButton: {
                            functional: !0,
                            render: function (t, e) {
                                var n = e.props,
                                    i = n.price,
                                    r = n.originPrice || i,
                                    a = null;
                                i < r ? a = "会员特惠".concat(i, "元(原价").concat(r, "元)") : i === r && (a = "".concat(i, "元购买本片"));
                                var s = "".concat(window.location.protocol, "//m.iqiyi.com/productPay.html?fc=").concat(n.fc, "&serviceCode=").concat(n.serviceCode || "", "&aid=").concat(n.aid || "", "&pid=").concat(n.pid || "");
                                st() || (s = "//m.iqiyi.com/user.html?redirect_url=".concat(encodeURIComponent(s)));
                                var o = [n.className, "c-btn-buy"];
                                return t("a", {
                                    directives: [{
                                        name: "show-pingback",
                                        value: n.block
                                    }, {
                                        name: "pingback",
                                        value: n.rseat
                                    }],
                                    attrs: {
                                        href: s
                                    },
                                    class: o
                                }, [a])
                            }
                        },
                        VipBuyButton: {
                            functional: !0,
                            render: function (t, e) {
                                var n = e.props,
                                    i = n.aid || n.tvid,
                                    r = "//m.iqiyi.com/pay.html?fc=".concat(n.fc, "&aid=").concat(i);
                                return t("div", {
                                    class: "vipPlayer-tip"
                                }, [t("a", {
                                    attrs: {
                                        href: r
                                    },
                                    class: "c-btn"
                                }, ["开通会员", n.price, "元购买"])])
                            }
                        },
                        CouponLayer: {
                            props: {
                                videoName: {
                                    type: String,
                                    default: ""
                                },
                                validityPeriod: {
                                    type: String,
                                    default: ""
                                },
                                leftCouponNum: {
                                    type: Number,
                                    default: 0
                                },
                                useVodCouponUrl: {
                                    type: String,
                                    default: ""
                                }
                            },
                            data: function () {
                                return {
                                    toastText: "",
                                    toastShow: !1,
                                    popupShow: !1
                                }
                            }, methods: {
                                useCoupon: function () {
                                    var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                                        var e;
                                        return regeneratorRuntime.wrap(function (t) {
                                            while (1) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, Object(vt["d"])(this.useVodCouponUrl.replace(/^(http(s)?:\/\/)/i, "//")).catch(function () {
                                                    return {
                                                        data: {}
                                                    }
                                                });
                                            case 2:
                                                e = t.sent, "A00000" === e.data.code ? (this.showToast("已使用 1 张点播券, 请在 48 小时内完成观看"), setTimeout(function () {
                                                    window.location.reload()
                                                }, 3e3)) : this.showToast("点播券消费失败");
                                            case 4:
                                            case "end":
                                                return t.stop()
                                            }
                                        }, t, this)
                                    }));

                                    function e() {
                                        return t.apply(this, arguments)
                                    }
                                    return e
                                }(),
                                show: function () {
                                    this.hideToast(), this.popupShow = !0
                                }, showToast: function (t) {
                                    var e = this;
                                    this.hide(), this.toastText = t || "", this.toastShow = !0, setTimeout(function () {
                                        e.hideToast()
                                    }, 2e3)
                                }, hideToast: function () {
                                    this.toastShow = !1
                                }, hide: function () {
                                    this.popupShow = !1
                                }
                            }, render: function () {
                                var t = arguments[0];
                                return t("div", [
                                    [this.popupShow && t("div", [t("div", {
                                        class: "cover"
                                    }), t("div", {
                                        class: "m-player-buy-pop"
                                    }, [t("div", {
                                        class: "info"
                                    }, [t("div", {
                                        class: "title"
                                    }, [this.videoName ? "观看《".concat(this.videoName, "》") : ""]), t("div", {
                                        class: "des"
                                    }, ["观影有效期至：", this.validityPeriod]), t("div", {
                                        class: "des"
                                    }, ["剩余", t("span", {
                                        class: "orange"
                                    }, [this.leftCouponNum]), "张点播券，使用", t("span", {
                                        class: "orange"
                                    }, ["1"]), "张"])]), t("div", {
                                        class: "handle"
                                    }, [t("a", {
                                        attrs: {
                                            href: "javascript:void(0)"
                                        },
                                        class: "c-link",
                                        on: {
                                            click: this.hide
                                        }
                                    }, ["取消"]), t("a", {
                                        attrs: {
                                            href: "javascript:void(0)"
                                        },
                                        class: "c-link orange",
                                        on: {
                                            click: this.useCoupon
                                        }
                                    }, ["使用"])])])]), this.toastShow && t("div", {
                                        class: "m-toast m-player-toast"
                                    }, [t("div", {
                                        class: "info"
                                    }, [this.toastText])])]
                                ])
                            }
                        },
                        EduPackageLayer: St
                    },
                    props: {
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        vipType: {
                            type: String,
                            default: ""
                        },
                        videoName: {
                            type: String,
                            default: ""
                        },
                        layerInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        templateType: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            vipHtml: ""
                        }
                    }, methods: {
                        useCoupon: function () {
                            this.$refs.coupon.show()
                        }, buyPackage: function () {
                            this.$refs.eduPackageLayer.show()
                        }
                    }, render: function () {
                        var t = arguments[0];
                        if (0 === this.templateType) return null;
                        var e = this.layerInfo,
                            n = this.videoInfo,
                            i = this.templateType,
                            r = e.price,
                            a = e.vipPrice,
                            s = e.originPrice,
                            o = e.leftCouponNum,
                            c = e.useVodCouponUrl,
                            u = e.validityPeriod,
                            l = this.videoName,
                            d = "1" === n.prvType && n.src,
                            p = !1;

                        function h() {
                            var e = "//sports.iqiyi.com/resource/h5/live-buy.html",
                                i = n.aid ? "".concat(e, "?cid=").concat(n.aid || "", "&isLive=0&isShowMemOnly=1") : "javascript:void(0)";
                            return t("a", {
                                attrs: {
                                    href: i
                                },
                                class: "c-btn"
                            }, [t("i", {
                                class: "icon-sports-vip"
                            }), "立即购买"])
                        }
                        var f = "";
                        if (1 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "".concat(d ? "试看结束，" : "", "由于版权方要求，本片需购买观看")
                            }
                        }), t("div", {
                            class: "c-player-btn"
                        }, [r <= a ? t("BuyButton", {
                            attrs: {
                                price: r,
                                "class-name": "vipPlayer-tip",
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "b10b185d7db52958"
                            }
                        }) : [t("BuyButton", {
                            attrs: {
                                price: r,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "b10b185d7db52958"
                            }
                        }), t("VipBuyButton", {
                            attrs: {
                                price: a,
                                fc: "bb2942736c2d5e67",
                                aid: n.aid,
                                tvid: n.tvid
                            }
                        })]]), t("Login", {
                            attrs: {
                                label: "已购本片？请",
                                text: "登录观看"
                            }
                        })]);
                        else if (2 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "".concat(d ? "试看结束，" : "", "由于版权方要求，本片需购买观看")
                            }
                        }), t("div", {
                            class: "vipPlayer-tip"
                        }, [t("BuyButton", {
                            attrs: {
                                price: r,
                                "origin-price": s,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                "class-name": "c-btn",
                                fc: "b10b185d7db52958"
                            }
                        })])]);
                        else if (3 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "".concat(d ? "试看结束，" : "", "由于版权方要求，本片需购买观看")
                            }
                        }), t("div", {
                            class: "c-player-btn"
                        }, [r <= a ? t("BuyButton", {
                            attrs: {
                                price: r,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                "class-name": "vipPlayer-tip",
                                fc: "b10b185d7db52958"
                            }
                        }) : [t("BuyButton", {
                            attrs: {
                                price: r,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "b10b185d7db52958"
                            }
                        }), t("VipBuyButton", {
                            attrs: {
                                price: a,
                                fc: "bb2942736c2d5e67",
                                aid: n.aid,
                                tvid: n.tvid
                            }
                        })]])]);
                        else if (4 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "".concat(d ? "试看结束，" : "", "由于版权方要求，本片需用券观看")
                            }
                        }), t("div", {
                            class: "c-player-btn"
                        }, [t("BuyButton", {
                            attrs: {
                                price: r,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "b10b185d7db52958"
                            }
                        }), t("VipMarketButton", {
                            attrs: {
                                "vod-coupon-count": e.vodCouponCount,
                                "market-tip": e.marketTip,
                                aid: e.aid,
                                fc: "b6c004c57a163f9a",
                                text: "开通VIP会员"
                            }
                        })]), t("Login", {
                            attrs: {
                                label: "已是会员或已购买，",
                                text: "请登录"
                            }
                        })]);
                        else if (5 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "".concat(d ? "试看结束，" : "", "由于版权方要求，本片需用券观看")
                            }
                        }), t("div", {
                            class: "c-ticket-tip"
                        }, ["您还有", o, "张券可用于观看本片"]), t("div", {
                            class: "c-player-btn"
                        }, [t("BuyButton", {
                            attrs: {
                                price: r,
                                "origin-price": s,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "b10b185d7db52958"
                            }
                        }), t("div", {
                            class: "vipPlayer-tip"
                        }, [t("a", {
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            class: "c-btn",
                            on: {
                                click: this.useCoupon
                            }
                        }, ["用券观看"])]), t("portal", {
                            attrs: {
                                to: "playerPopupContainer"
                            }
                        }, [t("CouponLayer", {
                            ref: "coupon",
                            attrs: {
                                "video-name": l,
                                "validity-period": u,
                                "left-coupon-num": o,
                                "use-vod-coupon-url": c
                            }
                        })])])]);
                        else if (6 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "".concat(d ? "试看结束，" : "", "由于版权方要求，本片需用券观看")
                            }
                        }), t("div", {
                            class: "c-ticket-tip"
                        }, ["您的点播券已用完"]), t("div", {
                            class: "c-player-btn"
                        }, [t("BuyButton", {
                            attrs: {
                                price: r,
                                "origin-price": s,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "b10b185d7db52958"
                            }
                        }), t("VipMarketButton", {
                            attrs: {
                                "vod-coupon-count": e.vodCouponCount,
                                "market-tip": e.marketTip,
                                aid: e.aid,
                                fc: "b6c004c57a163f9a",
                                text: "续费VIP会员"
                            }
                        })])]);
                        else if (7 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "".concat(d ? "试看结束，" : "", "由于版权方要求，本片需用券观看")
                            }
                        }), t("div", {
                            class: "c-ticket-tip"
                        }, ["您还有", o, "张券可用于观看本片"]), t("div", {
                            class: "c-player-btn"
                        }, [t("BuyButton", {
                            attrs: {
                                price: r,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "b10b185d7db52958"
                            }
                        }), t("div", {
                            class: "vipPlayer-tip"
                        }, [t("a", {
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            class: "c-btn",
                            on: {
                                click: this.useCoupon
                            }
                        }, ["用券观看"])]), t("portal", {
                            attrs: {
                                to: "playerPopupContainer"
                            }
                        }, [t("CouponLayer", {
                            ref: "coupon",
                            attrs: {
                                "video-name": l,
                                "validity-period": u,
                                "left-coupon-num": o,
                                "use-vod-coupon-url": c
                            }
                        })])])]);
                        else if (8 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "".concat(d ? "试看结束，" : "", "由于版权方要求，本片需用券观看")
                            }
                        }), t("div", {
                            class: "c-player-btn"
                        }, [t("BuyButton", {
                            attrs: {
                                price: r,
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "b10b185d7db52958"
                            }
                        }), t("VipMarketButton", {
                            attrs: {
                                "vod-coupon-count": e.vodCouponCount,
                                "market-tip": e.marketTip,
                                aid: e.aid,
                                fc: "b6c004c57a163f9a",
                                text: "开通VIP会员"
                            }
                        })])]);
                        else if (9 === i) p = t("div", {
                            class: "m-player-tip m-sportsPlayer-tip"
                        }, [t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "购买观看完整版"
                            }
                        }), [h(e, n)], t("Login", {
                            attrs: {
                                label: "我有体育会员/球票，",
                                text: '请登录<i class="c-glyphicon c-glyphicon-roundArrow">'
                            }
                        })])]);
                        else if (10 === i) p = t("div", {
                            class: "m-player-tip m-sportsPlayer-tip"
                        }, [t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "购买观看完整版"
                            }
                        }), [h()]])]);
                        else if (11 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("div", {
                            class: "c-player-tip-info"
                        }, [l ? "《".concat(l, "》为爱奇艺付费内容") : "本片为爱奇艺付费内容", t("br"), "请购买套餐后观看"]), t("div", {
                            class: "vipPlayer-tip"
                        }, [t("a", {
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            class: "c-btn",
                            on: {
                                click: this.buyPackage
                            }
                        }, ["打包购买"]), t("span", {
                            class: "c-info hie"
                        }, ["同时购买多个专辑更划算"])]), t("portal", {
                            attrs: {
                                to: "playerPopupContainer"
                            }
                        }, [t(St, {
                            ref: "eduPackageLayer",
                            attrs: {
                                "video-name": l,
                                "layer-info": e,
                                "video-info": n
                            }
                        })])]);
                        else if (13 === i) f = t("div", {
                            class: "player-tip-inner"
                        }, [t("TipInfo", {
                            attrs: {
                                text: "爱奇艺付费影片，观看完整版请开通VIP"
                            }
                        }), t("div", {
                            class: "c-player-btn"
                        }, [t("BuyButton", {
                            attrs: {
                                price: r,
                                block: "8051101_db_dandian_block",
                                rseat: "8051101_db_dandian",
                                "service-code": e.serviceCode,
                                aid: e.aid,
                                pid: e.pid,
                                fc: "9b43045a005a9061"
                            }
                        }), t("VipMarketButton", {
                            attrs: {
                                block: "8051101_db_buy_block",
                                rseat: "8051101_db_buy",
                                "vod-coupon-count": e.vodCouponCount,
                                "market-tip": e.marketTip,
                                aid: e.aid,
                                fc: "9b43045a005a9061",
                                text: "开通VIP会员"
                            }
                        })]), t("Login", {
                            attrs: {
                                label: "已是VIP，",
                                text: "请登录"
                            }
                        })]);
                        else if (14 === i) {
                            var m;
                            f = t("div", {
                                class: "player-tip-inner"
                            }, [t("TipInfo", {
                                attrs: {
                                    text: "爱奇艺付费影片，观看完整版请开通VIP"
                                }
                            }), t("div", {
                                class: "c-player-btn"
                            }, [t("BuyButton", {
                                attrs: {
                                    price: r,
                                    block: "8051101_db_buy_block",
                                    rseat: "8051101_db_dandian",
                                    fc: "9b43045a005a9061",
                                    "service-code": e.serviceCode,
                                    aid: e.aid,
                                    pid: e.pid
                                }
                            }), t("VipMarketButton", {
                                attrs: (m = {
                                    block: "8051101_db_dandian_block",
                                    rseat: "8051101_db_buy",
                                    "vod-coupon-count": e.vodCouponCount,
                                    "market-tip": e.marketTip,
                                    aid: e.aid,
                                    fc: "9b43045a005a9061",
                                    text: "开通VIP会员"
                                }, Object(G["a"])(m, "aid", n.aid), Object(G["a"])(m, "tvid", n.tvid), m)
                            })])])
                        } else if (15 === i) {
                            var v;
                            f = t("div", {
                                class: "player-tip-inner"
                            }, [t("TipInfo", {
                                attrs: {
                                    text: "爱奇艺付费影片，观看完整版请开通VIP"
                                }
                            }), t("div", {
                                class: "c-player-btn"
                            }, [t("VipMarketButton", {
                                attrs: (v = {
                                    block: "8051101_vip_buy_block",
                                    rseat: "8051101_vip_buy",
                                    "vod-coupon-count": e.vodCouponCount,
                                    "market-tip": e.marketTip,
                                    aid: e.aid,
                                    fc: "9b43045a005a9061",
                                    text: "开通VIP会员"
                                }, Object(G["a"])(v, "aid", n.aid), Object(G["a"])(v, "tvid", n.tvid), v)
                            })]), t("Login", {
                                attrs: {
                                    label: "已是VIP，",
                                    text: "请登录"
                                }
                            })])
                        } else if (16 === i) {
                            var y;
                            f = t("div", {
                                class: "player-tip-inner"
                            }, [t("TipInfo", {
                                attrs: {
                                    text: "爱奇艺付费影片，观看完整版请开通VIP"
                                }
                            }), t("div", {
                                class: "c-player-btn"
                            }, [t("VipMarketButton", {
                                attrs: (y = {
                                    block: "8051101_vip_buy_block",
                                    rseat: "8051101_vip_buy",
                                    "vod-coupon-count": e.vodCouponCount,
                                    "market-tip": e.marketTip,
                                    aid: e.aid,
                                    fc: "9b43045a005a9061",
                                    text: "开通VIP会员"
                                }, Object(G["a"])(y, "aid", n.aid), Object(G["a"])(y, "tvid", n.tvid), y)
                            })])])
                        } else if (18 === i || 17 === i) {
                            var g = 17 === i ? t("a", {
                                    attrs: {
                                        href: "//m.iqiyi.com/user.html"
                                    },
                                    class: "c-login"
                                }, ["请登录"]) : null,
                                b = t("a", {
                                    attrs: {
                                        href: e.data && e.data.purchase && e.data.purchase[0].url || "javascript:void(0);"
                                    },
                                    class: "c-btn"
                                }, [e.data && e.data.purchase && e.data.purchase[0].info || ""]);
                            p = t("div", {
                                class: "m-player-tip m-sportsPlayer-tip"
                            }, [t("div", {
                                class: "player-tip-inner"
                            }, [t("div", {
                                class: "c-player-tip-tlt"
                            }, [l]), t("div", {
                                class: "c-player-tip-info"
                            }, [e.data && e.data.contentInfo ? e.data.contentInfo.info : ""]), t("div", {
                                class: "c-player-btnBox"
                            }, [g, b])])])
                        }
                        var w = !!p;
                        return t("div", [w ? p : t("div", {
                            class: "m-player-tip"
                        }, [t("div", {
                            class: "m-player-tip m-vipPlayer-tip"
                        }, [f])])])
                    }
                },
                Ot = Ct,
                jt = Object(h["a"])(Ot, ft, mt, !1, null, null, null),
                Tt = jt.exports,
                It = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "m-player-laqiPop-box"
                    }, [n("img", {
                        staticClass: "layer-video-img",
                        attrs: {
                            src: t.poster
                        }
                    }), n("div", {
                        staticClass: "m-player-laqiPop"
                    }, [n("div", {
                        staticClass: "player-tip-inner"
                    }, [n("div", {
                        staticClass: "player-tip-info"
                    }, [t._v("\n        请打开爱奇艺APP，观看完整版视频\n      ")]), n("div", {
                        staticClass: "player-tip-btn"
                    }, [n("a", {
                        ref: "copyLink",
                        staticClass: "c-link laqi",
                        attrs: {
                            href: "javascript:void(0)"
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-iqy"
                    }), t._v("\n          前往APP观看\n        ")])])])])])
                },
                Pt = [],
                Lt = {
                    name: "QiyiSourceSealRivalLayer",
                    props: {
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        poster: {
                            type: String,
                            default: ""
                        }
                    },
                    mounted: function () {
                        var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.init();
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    methods: {
                        init: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                                var e, n = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, Object(z["d"])({
                                            block: "804231_toutiao_xianbofuceng"
                                        }), t.next = 4, this.registerCopy(this.$refs.copyLink, "http://ota.iqiyi.com/f4.jsp?url=h5_fuceng");
                                    case 4:
                                        e = t.sent, e.on("success", function () {
                                            Object(z["c"])({
                                                rseat: O["j"].ios ? "804231_toutiaourl_ios" : "804231_toutiaourl_android"
                                            }), n.$emit("sourceLayerFoo", {
                                                code: "sealingRivalCopyLink",
                                                data: {
                                                    code: "success"
                                                }
                                            })
                                        }), t.next = 11;
                                        break;
                                    case 8:
                                        throw t.prev = 8, t.t0 = t["catch"](0), t.t0;
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this, [
                                    [0, 8]
                                ])
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        registerCopy: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t(e, n) {
                                var i, r = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = "//static.iqiyi.com/js/html5/js/lib/clipboard.min.js", e.setAttribute("data-clipboard-text", n), t.abrupt("return", new C.a(function () {
                                            var t = Object(s["a"])(regeneratorRuntime.mark(function t(n, a) {
                                                var s;
                                                return regeneratorRuntime.wrap(function (t) {
                                                    while (1) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (!r.isNotSupportCopy()) {
                                                            t.next = 4;
                                                            break
                                                        }
                                                        a(new Error("notSupport")), t.next = 7;
                                                        break;
                                                    case 4:
                                                        return t.next = 6, Object(O["h"])(i);
                                                    case 6:
                                                        window.Clipboard ? (s = new window.Clipboard(e), n(s)) : a(new Error("noClipboard"));
                                                    case 7:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                                }, t)
                                            }));
                                            return function (e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t)
                            }));

                            function e(e, n) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        isNotSupportCopy: function () {
                            var t = window.navigator.userAgent,
                                e = /iPhone OS (\d*)_(\d*)/i.exec(t),
                                n = e && 8 === e[1];
                            return /BLN-TL10/i.test(t) || /PE-TL20/i.test(t) || n || /VivoBrowser/i.test(t)
                        }
                    }
                },
                Rt = Lt,
                Et = Object(h["a"])(Rt, It, Pt, !1, null, null, null),
                At = Et.exports,
                qt = "//serv.vip.iqiyi.com/pay/queryLayer.action",
                Nt = 0,
                $t = 1,
                Vt = 2,
                Bt = 3,
                Ut = 4,
                Mt = 5,
                Ht = 6,
                Dt = 7,
                Ft = 8,
                zt = 9,
                Wt = 10,
                Qt = 11,
                Xt = 13,
                Yt = 14,
                Gt = 15,
                Jt = 16,
                Kt = 17,
                Zt = 18,
                te = 0,
                ee = 1,
                ne = 2,
                ie = 3,
                re = 4,
                ae = 5;

            function se(t) {
                return oe.apply(this, arguments)
            }

            function oe() {
                return oe = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = e.aid, i = e.pre, t.next = 3, he(n);
                        case 3:
                            return r = t.sent, wt()(r, r.data), r.aid = n, r.pre = i, r.price = r.price ? gt()(r.price) / 100 : "", r.originPrice = r.originPrice ? gt()(r.originPrice) / 100 : "", r.halfPrice = r.halfPrice ? gt()(r.halfPrice) / 100 : "", r.vipPrice = r.vipPrice ? gt()(r.vipPrice) / 100 : r.vipPrice, r.marketTip = r.marketTip ? JSON.parse(r.marketTip) : r.marketTip, r.validityPeriod = r.validityPeriod ? r.validityPeriod.slice(0, -3) : "", t.abrupt("return", r);
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), oe.apply(this, arguments)
            }

            function ce(t, e) {
                return ue.apply(this, arguments)
            }

            function ue() {
                return ue = Object(s["a"])(regeneratorRuntime.mark(function t(e, n) {
                    var i, r, a, s, o, c, u, l, d, p;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (i = Nt, r = 0, a = 6, s = 1, o = e.vipContentType, c = gt()(e.sourceType), o !== r) {
                                t.next = 32;
                                break
                            }
                            if (u = le(e), u !== te) {
                                t.next = 12;
                                break
                            }
                            i = Nt, t.next = 30;
                            break;
                        case 12:
                            return l = e.leftCouponNum, d = st(), t.next = 16, !!st && de(n);
                        case 16:
                            p = t.sent, i = i || u === ne && !d && $t, i = i || u === ne && d && p && Vt, i = i || u === ne && d && !p && Bt, i = i || u === ie && !d && Ut, i = i || u === ie && d && p && l && Mt, i = i || u === ie && d && p && !l && Ht, i = i || u === ie && d && !p && l && Dt, i = i || u === ie && d && !p && !l && Ft, i = i || u === re && Qt, i = i || u === ae && !d && Xt, i = i || u === ae && d && Yt, i = i || u === ee && !d && Gt, i = i || u === ee && d && Jt;
                        case 30:
                            t.next = 33;
                            break;
                        case 32:
                            1 === c ? i = st() ? Zt : Kt : [a, s].indexOf(o) > -1 && (i = st() ? Wt : zt);
                        case 33:
                            return t.abrupt("return", i);
                        case 34:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), ue.apply(this, arguments)
            }

            function le(t) {
                var e, n = t.isSupportVod,
                    i = t.isSupportVodCoupon,
                    r = t.isSupportMonth,
                    a = t.isSupportPackage;
                return e = e || !n && r && !i && ee, e = e || n && !r && !i && ne, e = e || n && !r && i && ie, e = e || a && !n && !r && !i && re, e = e || n && r && !i && ae, e || te
            }

            function de(t) {
                return pe.apply(this, arguments)
            }

            function pe() {
                return pe = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", e.indexOf(nt) > -1 || e.indexOf(et) > -1);
                        case 1:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), pe.apply(this, arguments)
            }

            function he(t) {
                return Object(vt["d"])(qt, {
                    params: {
                        aid: t,
                        platform: "97ae2982356f69d8",
                        platformType: "h5",
                        messageid: Object(O["m"])(),
                        version: "7.0",
                        P00001: ot(),
                        dataType: "json"
                    },
                    withCredentials: !0
                }).then(function (t) {
                    return t.data || {}
                })
            }
            var fe, me, ve = 0,
                ye = 1,
                ge = 2,
                be = 3,
                we = {
                    0: "none",
                    1: "code",
                    2: "vip",
                    3: "rival"
                },
                ke = {
                    name: "QiyiSourceLayer",
                    components: {
                        QiyiSourceCodeLayer: Y,
                        QiyiSourceVipLayer: Tt
                    },
                    props: {
                        vipType: {
                            type: String,
                            default: ""
                        },
                        videoName: {
                            type: String,
                            default: ""
                        },
                        isShowVipLayer: {
                            type: Boolean,
                            default: !0
                        },
                        poster: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            sourceType: ve,
                            vipStatus: {},
                            videoInfo: {},
                            layerInfo: {},
                            templateType: 0,
                            show: !1
                        }
                    }, beforeMount: function () {
                        this.init()
                    }, methods: {
                        init: function () {
                            this.bindEvent()
                        }, bindEvent: function () {
                            var t = this,
                                e = this.$parent;
                            e.$on("load", function () {
                                t.show && (t.show = !1, e.showVideo())
                            }), e.$on("loaded", function () {
                                var e = Object(s["a"])(regeneratorRuntime.mark(function e(n) {
                                    var i, r, s;
                                    return regeneratorRuntime.wrap(function (e) {
                                        while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.videoInfo = n.videoInfo, i = !!t.isSourceVip(t.videoInfo), r = {}, t.$emit("noSourceLayer", !i && !t.isSourceCode(t.videoInfo)), t.videoInfo.prv ? t.emitSourceType(ve) : (s = t.setSourceType(t.videoInfo), t.emitSourceType(s)), !i) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 8, t.getVipLayerInfo();
                                        case 8:
                                            r = e.sent;
                                        case 9:
                                            t.$emit("sourceVipType", Object(a["a"])({}, r, {
                                                isVip: i
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                        }
                                    }, e)
                                }));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }()), e.$on("recharge", function () {
                                if (t.videoInfo.prv) {
                                    var e = t.setSourceType(t.videoInfo);
                                    t.emitSourceType(e)
                                }
                            }), e.$on("showSourceLayer", function () {
                                var e = t.setSourceType(t.videoInfo);
                                t.emitSourceType(e)
                            })
                        }, getVipLayerInfo: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                                var e, n, i, r;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.videoInfo, t.next = 3, se({
                                            aid: e.albumId || e.aid || e.tvid
                                        });
                                    case 3:
                                        return this.layerInfo = n = t.sent, t.next = 6, ce(n, this.vipType);
                                    case 6:
                                        return this.templateType = i = t.sent, t.next = 9, le(n);
                                    case 9:
                                        return r = t.sent, t.abrupt("return", {
                                            templateType: i,
                                            layerInfo: n,
                                            layerType: r
                                        });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        isPano: function (t) {
                            var e = t && t.data ? t.data : t;
                            if (e && e.p && e.p.pano) {
                                var n = e.p.pano.type;
                                return 1 !== n
                            }
                            return !1
                        }, setSourceType: function (t) {
                            return this.isSourceVip(t) ? this.sourceType = ge : this.isSourceCode(t) ? this.isSealRivalCode(t) ? this.sourceType = be : this.sourceType = ye : this.sourceType = ve, this.sourceType
                        }, emitSourceType: function (t) {
                            var e = this.$parent;
                            this.show = t !== ve, this.$emit("sourceTypeChange", {
                                type: t,
                                name: we[t]
                            }), this.show && (e.pause(), e.hideVideo())
                        }, isSourceCode: function (t) {
                            var e = t.data,
                                n = t.src || "",
                                i = t.code,
                                r = e.st;
                            return !("A00000" === i && [101, 200].includes(r) && n) || this.isPano(e) || "A00004" === i
                        }, isSealRivalCode: function (t) {
                            return "A00030" === t.code
                        }, isSourceVip: function (t) {
                            var e = t.data,
                                n = e.boss_ts;
                            return n.code && "A00000" !== n.code || t.prvType
                        }, sourceLayerFooHandle: function (t) {
                            this.$emit("sourceLayerFoo", t)
                        }
                    }, render: function () {
                        var t = arguments[0];
                        if (this.sourceType !== ve && this.show) return this.sourceType === ye ? t(Y, {
                            attrs: {
                                "video-info": this.videoInfo
                            }
                        }) : this.sourceType === ge && this.isShowVipLayer ? t(Tt, {
                            attrs: {
                                "video-info": this.videoInfo,
                                "vip-type": this.vipType,
                                "video-name": this.videoName,
                                "layer-info": this.layerInfo,
                                "template-type": this.templateType
                            }
                        }) : this.sourceType === be ? t(At, {
                            attrs: {
                                "video-info": this.videoInfo,
                                poster: this.poster
                            },
                            on: Object(a["a"])({}, {
                                sourceLayerFoo: this.sourceLayerFooHandle
                            })
                        }) : null
                    }
                },
                _e = ke,
                xe = Object(h["a"])(_e, fe, me, !1, null, null, null),
                Se = xe.exports,
                Ce = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "190910_videoplay",
                            expression: "'190910_videoplay'"
                        }, {
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "190910_videoplay",
                            expression: "'190910_videoplay'"
                        }, {
                            name: "show",
                            rawName: "v-show",
                            value: t.playShow,
                            expression: "playShow"
                        }],
                        attrs: {
                            onclick: "if(!this.getAttribute('srcset')) {\n    this.setAttribute('playBtnClickedBeforeInit', 'true');\n    if (!document.getElementById('video').src) {\n      document.getElementById('video').load();\n    }\n  }"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("playClick")
                            }
                        }
                    }, [t.prvShow ? n("div", {
                        key: "prv",
                        staticClass: "c-vipPlayer-btn"
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-tryPlay"
                    }), t._v("试看6分钟\n  ")]) : n("div", {
                        key: "common",
                        staticClass: "c-videoplay"
                    }, [n("i", {
                        staticClass: "c-player-icon c-player-big"
                    })])])
                },
                Oe = [],
                je = {
                    name: "QiyiPlayButton",
                    data: function () {
                        return {
                            playShow: !0,
                            prvShow: !1
                        }
                    }, beforeMount: function () {
                        var t = this;
                        this.$parent.$on("created", function (e) {
                            var n = e.getVideo();
                            n.on("playing", function () {
                                t.playShow = !1
                            }), n.on("pause", function () {
                                t.playShow = !0
                            }), n.on("src", function () {
                                t.$el.getAttribute("srcset") || !t.$el.getAttribute("playBtnClickedBeforeInit") && !document.querySelector("[playBtnClickedBeforeInit=true]") || t.$parent.play(), t.$el.setAttribute("srcset", !0)
                            })
                        }), this.$parent.$on("loaded", function (e) {
                            var n = e.videoInfo;
                            n.prv && (t.prvShow = !0)
                        }), this.$parent.$on("clear", function () {
                            t.playShow = !1, t.prvShow = !1
                        }), this.$parent.$on("videoChange", function () {
                            t.playShow = !1, t.prvShow = !1
                        })
                    }
                },
                Te = je,
                Ie = Object(h["a"])(Te, Ce, Oe, !1, null, null, null),
                Pe = Ie.exports,
                Le = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showAutoHide,
                            expression: "showAutoHide"
                        }],
                        staticClass: "m-video-dashboard"
                    }, [n("div", {
                        staticClass: "video-console"
                    }, [n("div", {
                        staticClass: "video-switch",
                        class: {
                            selected: !t.paused
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("playClick")
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-switchPlay"
                    })]), n("span", {
                        staticClass: "timeDisplay-current"
                    }, [t._v(t._s(t.currentTime))]), n("div", {
                        ref: "progress",
                        staticClass: "video-progress",
                        on: {
                            touchstart: t.touchstart,
                            touchmove: function (e) {
                                return e.preventDefault(), t.touchmove(e)
                            }, touchend: t.touchend
                        }
                    }, [n("div", {
                        staticClass: "progress-track"
                    }, [n("div", {
                        staticClass: "progress-load",
                        style: {
                            width: t.progressLoad
                        }
                    }), n("div", {
                        staticClass: "progress-play",
                        style: {
                            width: t.progressPlay
                        }
                    }), n("div", {
                        staticClass: "progress-seek",
                        style: {
                            left: t.progressSeek
                        }
                    })])]), n("span", {
                        staticClass: "timeDisplay-duration"
                    }, [t._v(t._s(t.duration))])]), n("span", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "h5_player_danmu",
                            expression: "'h5_player_danmu'"
                        }, {
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "h5_block_player_danmu",
                            expression: "'h5_block_player_danmu'"
                        }],
                        staticClass: "danmu",
                        on: {
                            click: function (e) {
                                t.callApp("danmu").catch(function () {})
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-icon-danmu"
                    })]), n("div", {
                        staticClass: "fullScreen",
                        class: {
                            selected: t.isFullscreen
                        },
                        on: {
                            click: t.fullscreen
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-fullscreenNew"
                    })])]), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.regulationShow,
                            expression: "regulationShow"
                        }],
                        staticClass: "video-regulation",
                        class: {
                            backOff: t.direction < 0
                        },
                        staticStyle: {
                            display: "none"
                        }
                    }, [t._m(0), n("div", {
                        staticClass: "regulation-progress"
                    }, [n("i", {
                        staticClass: "progress-time",
                        style: {
                            width: t.progressRegulation
                        }
                    })]), n("div", {
                        staticClass: "video-time"
                    }, [n("span", {
                        staticClass: "timeCurrent"
                    }, [t._v(t._s(t.currentTime))]), n("span", {
                        staticClass: "line"
                    }, [t._v("/")]), n("span", {
                        staticClass: "timeDuration"
                    }, [t._v(t._s(t.duration))])])])])
                },
                Re = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "regulation-status"
                        }, [n("i", {
                            staticClass: "c-glyphicon c-glyphicon-forward"
                        })])
                    }
                ],
                Ee = {
                    data: function () {
                        return {
                            showAutoHide: !1
                        }
                    }, beforeMount: function () {
                        var t = this;
                        this.$parent.$on("created", function () {
                            t.initAutoHide()
                        })
                    }, methods: {
                        initAutoHide: function () {
                            var t = this,
                                e = this.$parent;
                            e.on("playing", function () {
                                t.autoHide()
                            }), e.on("pause", function () {
                                t.showDashBoard()
                            }), e.on("click", function () {
                                e.paused() || (t.showAutoHide = !t.showAutoHide, t.showAutoHide && t.autoHide())
                            })
                        }, showDashBoard: function () {
                            this.stopHideTimer(), this.showAutoHide = !0
                        }, autoHide: function () {
                            var t = this;
                            this.stopHideTimer(), this.timer = setTimeout(function () {
                                t.showAutoHide = !1
                            }, 3e3)
                        }, stopHideTimer: function () {
                            clearTimeout(this.timer)
                        }
                    }
                },
                Ae = {
                    beforeMount: function () {
                        var t = this;
                        this.$parent.$on("loaded", function (e) {
                            t.videoInfo = e.videoInfo
                        })
                    }, methods: {
                        callApp: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = T["h"][t] || {},
                                n = e.subtype || this.subType || 149,
                                i = this.cid || this.videoInfo.cid || (this.videoInfo.data ? this.videoInfo.data.cid : "") || "",
                                r = this.tvid || this.videoInfo.tvid || "";
                            return Object(T["y"])({
                                down: 0,
                                ftype: 27,
                                progress: this.$parent.video.currentTime(),
                                cid: i,
                                tvid: r,
                                subtype: n
                            }).catch(function () {
                                var t = e.downloadUrl || Object(T["m"])({
                                    downAppPos: "play_button_open"
                                });
                                return Object(T["k"])(t), C.a.reject(new Error("callapp fail"))
                            })
                        }
                    }
                },
                qe = {
                    name: "QiyiDashboard",
                    mixins: [Ee, Ae],
                    props: {
                        isVideo: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            isFullscreen: !1,
                            regulationShow: !1,
                            paused: !0,
                            duration: "",
                            currentTime: "",
                            progressPlay: "",
                            progressSeek: "",
                            progressLoad: "",
                            progressRegulation: "",
                            direction: 0
                        }
                    }, computed: {
                        extraOptions: function () {
                            return this.videoInfo.tvid ? {
                                tvid: this.videoInfo.tvid,
                                aid: this.videoInfo.aid,
                                cid: this.videoInfo.cid,
                                vid: this.videoInfo.vid
                            } : {}
                        }
                    }, watch: {
                        showAutoHide: function (t) {
                            this.$emit("dashboardShowChange", t)
                        }
                    }, beforeMount: function () {
                        var t = this;
                        this.$parent.$on("created", function () {
                            t.init()
                        })
                    }, methods: {
                        init: function () {
                            var t = this.$parent;
                            this.paused = t.paused(), this.bindEvent()
                        }, bindEvent: function () {
                            var t = this,
                                e = this.$parent;
                            e.$on("load", function () {
                                t.showAutoHide = !1
                            }), e.$on("playStart", function (t) {
                                var n = t.status;
                                "VIDEO" === n && e.muted(!1)
                            }), e.on("playing", function () {
                                t.paused = e.paused(), t.duration = Object(O["c"])(e.duration())
                            }), e.on("pause", function () {
                                t.paused = e.paused()
                            }), e.on("durationchange", function () {
                                t.duration = Object(O["c"])(e.duration())
                            }), e.on("timeupdate", function () {
                                t.updateProgressAndTime()
                            }), e.on("seeking", function () {
                                t.updateProgressAndTime()
                            }), e.on("progress", function () {
                                var e = t.getBufferPercent();
                                t.updateProgressLoad(e)
                            }), e.on("touchstart", function (n) {
                                if (t.isVideo) {
                                    t.isDragingVideo = !0, t.lockRegulation = !1;
                                    var i = n.touches[0];
                                    t.videoStartSecond = e.currentTime(), t.videoStartPos = i.pageX, t.videoStartYPos = i.pageY
                                }
                            }), e.on("touchmove", function (e) {
                                if (t.isVideo && !t.lockRegulation) {
                                    var n = e.touches[0],
                                        i = Math.abs(n.pageY - t.videoStartYPos),
                                        r = Math.abs(n.pageX - t.videoStartPos);
                                    (r || i) && (!t.regulationShow && i >= 1 && r < 5 ? t.lockRegulation = !0 : t.isDragingVideo && (t.regulationShow = !0, e.preventDefault(), e.stopPropagation(), t.isDraging = !0, t.videoSeekPos = n.pageX, t.seekVideo(t.videoSeekPos)))
                                }
                            }), e.on("touchend", function () {
                                if (t.isVideo && !t.lockRegulation && (t.isDragingVideo = !1, t.regulationShow)) {
                                    t.isDraging = !1, t.regulationShow = !1, t.direction = 0;
                                    var e = t.seekVideo(t.videoSeekPos);
                                    t.$emit("seek", e)
                                }
                            }), e.on("fullscreenchange", function (e) {
                                t.isFullscreen = e.isFullscreen
                            })
                        }, getBufferPercent: function () {
                            var t = this.$parent,
                                e = t.duration();
                            return e ? t.video.buffered() / e : 0
                        }, updateProgress: function (t) {
                            var e = "".concat(100 * t, "%");
                            this.progressPlay = e, this.progressSeek = e, this.progressRegulation = e
                        }, updateProgressLoad: function (t) {
                            var e = "".concat(100 * t, "%");
                            this.progressLoad = e
                        }, touchstart: function (t) {
                            this.isDraging = !0, this.seekPos = t.touches[0].pageX, this.stopHideTimer()
                        }, touchmove: function (t) {
                            this.isDraging = !0, this.seekPos = t.touches[0].pageX, this.seekDashboard(this.seekPos)
                        }, touchend: function () {
                            var t = this.seekDashboard(this.seekPos);
                            this.isDraging = !1, this.$emit("seek", t)
                        }, seekDashboard: function (t) {
                            var e = this.$refs.progress,
                                n = e.getBoundingClientRect().left,
                                i = e.offsetWidth,
                                r = t - n,
                                a = Math.min(Math.max(r, 0), i),
                                s = a / i;
                            return this.updateProgress(s), this.updateCurrentTimeProgress(s)
                        }, seekVideo: function (t) {
                            var e = this.videoStartPos,
                                n = t - e,
                                i = this.$parent.duration(),
                                r = i / 2e3,
                                a = (this.videoStartSecond + n * r) / i;
                            return a = Math.min(Math.max(a, 0), 1), this.direction = n > 0 ? 1 : -1, this.updateProgress(a), this.updateCurrentTimeProgress(a)
                        }, updateCurrentTimeProgress: function (t) {
                            var e = this.$parent.duration(),
                                n = t * e;
                            return this.updateCurrentTime(n), n
                        }, updateCurrentTime: function (t) {
                            t >= 0 && (this.currentTime = Object(O["c"])(t))
                        }, fullscreen: function (t) {
                            var e = this.$parent.src();
                            !e || e.indexOf(".html") >= 0 || this.$emit("fullscreen", t)
                        }, updateProgressAndTime: function () {
                            if (!this.isDraging) {
                                var t = this.$parent.currentTime(),
                                    e = this.$parent.duration(),
                                    n = t / e;
                                this.updateCurrentTime(t), this.updateProgress(n)
                            }
                        }
                    }
                },
                Ne = qe,
                $e = Object(h["a"])(Ne, Le, Re, !1, null, null, null),
                Ve = $e.exports,
                Be = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "handle-ad"
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showAutoHide,
                            expression: "showAutoHide"
                        }],
                        staticClass: "player-voice",
                        class: {
                            selected: t.muted
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("voiceClick")
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-player-icon c-player-voice"
                    })]), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.fullScreenShow,
                            expression: "fullScreenShow"
                        }],
                        staticClass: "player-fullscreen",
                        class: {
                            selected: t.isFullScreen
                        },
                        on: {
                            click: t.fullscreen
                        }
                    }, [n("i", {
                        staticClass: "c-player-icon c-player-fullscreen"
                    })])])])
                },
                Ue = [],
                Me = {
                    name: "QiyiAdDashboard",
                    mixins: [Ee],
                    data: function () {
                        return {
                            isFullScreen: !1,
                            fullScreenShow: !1,
                            muted: !1
                        }
                    }, beforeMount: function () {
                        var t = this;
                        this.$parent.$on("created", function () {
                            t.bindEvent()
                        }), this.$parent.$on("load", function () {
                            t.fullScreenShow = !1, t.showAutoHide = !1, t.muted = !1
                        })
                    }, methods: {
                        bindEvent: function () {
                            var t = this,
                                e = this.$parent;
                            e.on("playing", function () {
                                t.fullScreenShow = !0
                            }), e.on("muted", function (e) {
                                t.muted = e
                            }), e.on("fullscreenchange", function (e) {
                                t.isFullScreen = e.isFullscreen
                            })
                        }, fullscreen: function (t) {
                            this.$emit("fullscreen", t), this.isFullScreen = this.$parent.video.isFullscreen()
                        }
                    }
                },
                He = Me,
                De = Object(h["a"])(He, Be, Ue, !1, null, null, null),
                Fe = De.exports,
                ze = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loadingTipShow,
                            expression: "loadingTipShow"
                        }],
                        staticClass: "m-player-tip"
                    }, [n("div", {
                        staticClass: "player-tip-inner"
                    }, [n("div", {
                        staticClass: "c-player-tip-info"
                    }, [n("i", {
                        staticClass: "player-loading-logo",
                        style: "background-image:url(" + t.loadingImage + ")"
                    }), n("div", {
                        staticClass: "player-loading-info"
                    }, [n("i", {
                        staticClass: "update-icon"
                    }), t._v("正在全力加载\n          "), t.loadingCallapp ? n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "h5_player_loading",
                            expression: "'h5_player_loading'"
                        }],
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                t.callApp("loading").catch(function () {})
                            }
                        }
                    }, [t._v("\n            ,去爱奇艺APP流畅看\n          ")]) : t._e()])])])]), t._m(0), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loadingShow && !t.quailtyChange,
                            expression: "loadingShow && !quailtyChange"
                        }],
                        staticClass: "c-player-loading"
                    }, [n("i", {
                        staticClass: "loading-icon"
                    }), t._v(" 正在全力加载\n    "), t.loadingCallapp ? n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "h5_player_loading",
                            expression: "'h5_player_loading'"
                        }],
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                t.callApp("loading").catch(function () {})
                            }
                        }
                    }, [t._v("\n      ,去爱奇艺APP流畅看\n    ")]) : t._e()]), t.quailtyChange ? n("div", {
                        staticClass: "c-player-loading"
                    }, [n("span", [t._v("\n      已切换到\n      "), n("a", {
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [t._v("\n        " + t._s(t.quailtyChange) + "\n      ")])])]) : t._e()])
                },
                We = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "c-player-loading dn"
                        }, [n("i", {
                            staticClass: "loading-icon"
                        }), t._v(" 正在全力加载，\n    "), n("a", {
                            staticClass: "c-link",
                            attrs: {
                                href: "javascript:void(0)"
                            }
                        }, [t._v("刷新")]), t._v("重试\n  ")])
                    }
                ],
                Qe = {
                    name: "QiyiLoading",
                    mixins: [Ae],
                    props: {
                        loadingCallapp: {
                            type: Boolean,
                            default: !0
                        },
                        loadingImage: {
                            type: String,
                            default: "//m.iqiyipic.com/common/lego/20181127/84cbd21b7e8844689f99fe48bb0de6d6.png"
                        }
                    },
                    data: function () {
                        return {
                            loadingShow: !1,
                            loadingTipShow: !1,
                            quailtyChange: "",
                            isFirstClick: !0,
                            isVideoDataReady: !1
                        }
                    }, watch: {
                        loadingTipShow: function (t) {
                            t || (this.isFirstClick = !1)
                        }
                    }, beforeMount: function () {
                        this.init()
                    }, methods: {
                        init: function () {
                            var t = this;
                            this.beforeVideoCreated(), this.$parent.$on("created", function () {
                                var n = t.$parent.video;
                                n.once("play", e), t.bindEvent(n)
                            }), this.$parent.$on("load", function () {
                                var i = t.$parent.video;
                                i.off("playing", n), i.off("play", e), i.once("playing", n), i.once("play", e)
                            }), this.$parent.$on("src", function () {
                                t.isVideoDataReady = !0
                            });
                            var e = function () {
                                    t.loadingTipShow = !0
                                },
                                n = function () {
                                    t.$logger.log("hidetip");
                                    var n = t.$parent.video;
                                    n.off("play", e), t.loadingTipShow = !1, t.isFirstClick = !1
                                };
                            this.$parent.$on("sourceTypeChange", function (e) {
                                var n = e.type;
                                0 !== n && (t.loadingTipShow = !1)
                            }), this.$parent.$on("layerShow", function (e) {
                                var n = e.type;
                                n && (t.loadingTipShow = !1)
                            }), this.$parent.$on("quailtyChange", function (e) {
                                t.quailtyChange = e
                            })
                        }, beforeVideoCreated: function () {
                            var t = this;
                            document.querySelector("[playBtnClickedBeforeInit=true]") && (this.loadingTipShow = !0), this.$parent.$on("playBtnClick", function () {
                                t.isFirstClick && !t.isVideoDataReady && (t.loadingTipShow = !0), t.isFirstClick = !1
                            }), this.$parent.$on("videoChange", function () {
                                t.$logger.log("change"), t.isVideoDataReady || (t.loadingTipShow = !0)
                            })
                        }, bindEvent: function (t) {
                            var e = this;
                            t.on("playing", function () {
                                e.loadingShow = !1
                            }), t.on("timeupdate", function () {
                                e.loadingShow && t.buffered() > 2 && (e.loadingShow = !1)
                            }), t.on("waiting", function () {
                                e.loadingShow = !0, Object(z["d"])({
                                    block: "h5_block_player_loading"
                                })
                            })
                        }
                    }
                },
                Xe = Qe,
                Ye = Object(h["a"])(Xe, ze, We, !1, null, null, null),
                Ge = Ye.exports,
                Je = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t.startShow ? n("div", {
                        staticClass: "m-play-appGuide",
                        style: "background-image: url(" + t.poster + ")"
                    }, [n("div", {
                        staticClass: "handle"
                    }, [n("a", {
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.play
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-albumPlay"
                    }), t._v("试看5分钟\n      ")]), n("a", {
                        directives: [{
                            name: "copy-callapp",
                            rawName: "v-copy-callapp",
                            value: {
                                video: t.videoInfo,
                                subtype: t.subType
                            },
                            expression: "{video: videoInfo, subtype: subType}"
                        }],
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                return t.redirectOrCallApp({
                                    toCopy: !0
                                })
                            }
                        }
                    }, [t._v("\n        进入爱奇艺观看完整版\n      ")])])]) : t._e(), t.endShow ? n("div", {
                        staticClass: "m-play-appGuide guide-bgcol",
                        style: "background-image: url(" + t.poster + ")"
                    }, [n("a", {
                        directives: [{
                            name: "copy-callapp",
                            rawName: "v-copy-callapp",
                            value: {
                                video: t.videoInfo,
                                subtype: t.subType
                            },
                            expression: "{video: videoInfo, subtype: subType}"
                        }],
                        staticClass: "c-link c-link-iqy",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                return t.redirectOrCallApp({
                                    toCopy: !0
                                })
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-iqy"
                    }), t._v("进入爱奇艺，观看完整版\n    ")]), n("a", {
                        staticClass: "c-link c-link-again",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.replayPlay
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-album-Bplay"
                    }), t._v("重新播放\n    ")])]) : t._e(), t.continueShow ? n("div", {
                        staticClass: "m-play-appGuide guide-bgcol",
                        style: "background-image: url(" + t.poster + ")"
                    }, [t._t("callApp", [n("a", {
                        directives: [{
                            name: "copy-callapp",
                            rawName: "v-copy-callapp",
                            value: {
                                video: t.videoInfo,
                                subtype: t.subType
                            },
                            expression: "{video: videoInfo, subtype: subType}"
                        }, {
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "806081_floatlayer",
                            expression: "'806081_floatlayer'"
                        }, {
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "806081_daoliu",
                            expression: "'806081_daoliu'"
                        }],
                        staticClass: "c-link c-link-iqy",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.redirectOrCallApp
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-iqy"
                    }), t._v("打开爱奇艺，提升3倍流畅度!\n      ")])]), n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "806081_continue",
                            expression: "'806081_continue'"
                        }],
                        staticClass: "c-link c-link-again",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.continuePlay
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-album-Bplay"
                    }), t._v("继续播\n    ")])], 2) : t._e()])
                },
                Ke = [],
                Ze = (n("759f"), n("386d"), n("b383")),
                tn = n.n(Ze),
                en = "QC015",
                nn = "QC007";

            function rn() {
                return O["a"].iPhone ? 12 : 13
            }

            function an() {
                var t = dn();
                return pn(en, t.msrc)
            }

            function sn(t) {
                var e = dn();
                return pn(en, e.vfm, t)
            }

            function on() {
                var t = dn();
                return t.cfrm
            }

            function cn() {
                var t = document.referrer || "DIRECT";
                return un(nn, t)
            }

            function un(t, e) {
                var n = K.a.get(t);
                return n || (n = "function" === typeof e ? e() : e, K.a.set(t, n, ln)), n
            }
            var ln = {
                path: "/",
                domain: "iqiyi.com"
            };

            function dn() {
                return tn.a.parse(location.search.replace("?", ""))
            }

            function pn(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = n.expires,
                    r = e;
                if (r) {
                    var s = ln;
                    i && (s = Object(a["a"])({
                        expires: i
                    }, ln)), K.a.set(t, r, s)
                } else r = K.a.get(t);
                return r
            }
            var hn = n("4f30"),
                fn = Object(G["a"])({}, hn["CHANNEL_SHAOER"], "H55fza_589"),
                mn = {
                    name: "QiyiLimit",
                    mixins: [Ae],
                    props: {
                        subtype: {
                            type: String,
                            default: "H5qzql_523"
                        },
                        templateType: {
                            type: String,
                            default: ""
                        },
                        second: {
                            type: Number,
                            default: 300
                        },
                        poster: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            startShow: !1,
                            endShow: !1,
                            continueShow: !1,
                            purchaseType: 0,
                            videoInfo: {},
                            blackCondtionSubtype: ""
                        }
                    }, computed: {
                        show: function () {
                            return this.startShow || this.endShow || this.continueShow
                        }, subType: function () {
                            return this.blackCondtionSubtype || fn[this.videoInfo.cid || (this.videoInfo.data ? this.videoInfo.data.cid : "")] || this.subtype
                        }
                    }, watch: {
                        show: function (t) {
                            this.$emit("show", t)
                        }
                    }, beforeMount: function () {
                        this.init()
                    }, methods: {
                        init: function () {
                            var t = this;
                            this.$parent.$on("created", function () {
                                t.video = t.$parent.video, t.video.once("play", function () {
                                    t.isLimit = t.getLimitStatus(), t.isLimit && (t.stop(), t.start())
                                })
                            }), this.$parent.$on("load", function (e) {
                                t.purchaseType = e.purchaseType
                            }), this.$parent.$on("loaded", function (e) {
                                var n = e.videoInfo;
                                t.tvid = n.tvid, t.duration = n.duration, t.isLimit = t.getLimitStatus(), t.isLimit && (t.startCondition() && (t.video.pause(), t.$emit("stopPlay"), t.startShow = !0), t.endShow = !1, t.continueShow = !1)
                            })
                        }, play: function () {
                            this.hide(), this.$emit("play")
                        }, replayPlay: function () {
                            this.hide(), this.$emit("replayPlay")
                        }, continuePlay: function () {
                            this.hide(), this.continue = !0, this.$emit("play")
                        }, hide: function () {
                            O["j"].android && this.video.show(), this.startShow = !1, this.endShow = !1, this.continueShow = !1
                        }, redirectOrCallApp: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.toCopy && !this.blackCondtionSubtype ? {
                                    failToUrl: "/m5/app/guide.html?redirect_url=".concat(encodeURIComponent(location.href))
                                } : {};
                            this.callApp(e)
                        }, getLimitStatus: function () {
                            return this.blackCondtion() || !this.whiteCondtion()
                        }, blackCondtion: function () {
                            var t = this,
                                e = this.$GlobalSwitcher.getParams("source_limit", "play");
                            if (!e) return !1;
                            var n = e.configs;
                            if (!n || !n.length) return !1;
                            var i = this.videoInfo.qipuId || this.videoInfo.tvid || this.videoInfo.id || "",
                                r = this.videoInfo.aid || this.videoInfo.albumId || "",
                                a = sn() || on();
                            return n.some(function (e) {
                                var n = e.subtype,
                                    s = e.vfm,
                                    o = e.qipuId,
                                    c = o && o.indexOf(i) >= 0,
                                    u = o && o.indexOf(r) >= 0,
                                    l = s && s.indexOf(a) >= 0,
                                    d = (c || u) && l;
                                return d && n && (t.blackCondtionSubtype = n), d
                            })
                        }, whiteCondtion: function () {
                            return -1 === ["MOVIE", "ALBUM", "SOURCE"].indexOf(this.templateType) || ["2008_aldbd"].indexOf(sn() || on()) >= 0 || /$http(s)?:\/\/([^\s]+).baidu.com/.test(document.referrer) || O["a"].baidubox || this.duration < this.second || 0 !== this.purchaseType || !O["a"].txTV && O["a"].weixin
                        }, startCondition: function () {
                            return this.blackCondtion() || O["a"].txTV || O["a"].youku || O["a"].xigua || O["a"].toutiao
                        }, endCondtion: function () {
                            return this.blackCondtion() || O["a"].txTV || O["a"].youku || O["a"].xigua || O["a"].toutiao
                        }, continueCondition: function () {
                            return !this.blackCondtion() && !O["a"].txTV && !O["a"].youku && !O["a"].xigua && !O["a"].toutiao
                        }, start: function () {
                            this.timer = vn(1e3)(this.limit.bind(this))
                        }, stop: function () {
                            this.timer && this.timer()
                        }, limit: function () {
                            var t = this.$parent.currentTime(),
                                e = this.second,
                                n = this.duration;
                            n <= e || this.continue || (t > e + 3 ? this.continueCondition() || (this.video.seek(e), this.hide()) : t > e && this.showLayerAndPause())
                        }, showLayerAndPause: function () {
                            O["j"].android && this.video.hide(), this.video.paused() || (this.video.exitFullscreen(), this.startShow = !1, this.endCondtion() ? this.endShow = !0 : this.continueCondition() && (this.continueShow = !0, this.continue = !0), this.video.pause())
                        }
                    }
                };

            function vn(t) {
                return function e(n) {
                    return clearTimeout(vn.time), vn.time = setTimeout(function () {
                            n(), e(n)
                        }, t),
                        function () {
                            clearTimeout(vn.time)
                        }
                }
            }
            var yn = mn,
                gn = Object(h["a"])(yn, Je, Ke, !1, null, null, null),
                bn = gn.exports,
                wn = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div")
                },
                kn = [],
                _n = {
                    name: "QiyiVV",
                    props: {
                        vvOptions: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        coustomVvOptions: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        isVideo: {
                            type: Boolean,
                            default: !0
                        },
                        playerType: {
                            type: String,
                            default: ""
                        },
                        rate: {
                            type: Number,
                            default: void 0
                        }
                    },
                    data: function () {
                        return {
                            refer: "",
                            href: "",
                            useHref: !1,
                            lastPlayerSeconds: 0,
                            vvParams: null
                        }
                    }, computed: {
                        _vvOptions: function () {
                            return this.vvOptions
                        }, _isVideo: function () {
                            return this.isVideo
                        }
                    }, watch: {
                        _vvOptions: function (t, e) {
                            t.tvid !== e.tvid && (this.realVideoPlayed = !1, this.isPrv = t.prv ? "1" : "0", this.lastPlayerSeconds = 0, this.setParams())
                        }, _isVideo: function (t) {
                            t && this.checkRealVideoVV()
                        }
                    }, beforeMount: function () {
                        var t = this;
                        this.realVideoPlayed = !1, this.lastPlayerSeconds = 0, this.$parent.$on("created", function (e) {
                            t.qiyiVideo = e
                        })
                    }, methods: {
                        setParams: function () {
                            var t = this,
                                e = this.formatParams(),
                                n = Object(z["a"])(),
                                i = dn();
                            this.vvParams = Object(a["a"])({}, e, this.coustomVvOptions, {
                                tmplt: n.tmplt || "",
                                ce: n.weid || "",
                                sprov: n.sprov,
                                lrfr: cn(),
                                vfm: an(),
                                openid: i.appKey,
                                p2: i.version ? "1015" : "1011",
                                abtest: "h5player_new",
                                br: Object(O["d"])(),
                                os: Object(O["e"])()
                            }), this.qiyiVideo.setPlayPingbackInfo(this.vvParams), this.$parent.on("pause", function () {
                                t.isVideo && t.sendPauseVV()
                            })
                        }, sendPauseVV: function () {
                            this.isPrevent({
                                pt: this.$parent.currentTime()
                            }) || (this.qiyiVideo.sendPauseVV(), this.$emit("sendVV", this.vvParams))
                        }, sendEndVV: function (t) {
                            this.lastPlayerSeconds = 0, this.isPrevent({
                                pt: this.$parent.currentTime()
                            }) || (t ? this.qiyiVideo.setPreviewEnd() : this.qiyiVideo.sendEndVV(), this.$emit("sendVV", this.vvParams))
                        }, isPrevent: function (t) {
                            return Math.floor(t.pt) === this.lastPlayerSeconds || (this.lastPlayerSeconds = Math.floor(t.pt), !1)
                        }, bindEvent: function () {
                            var t = this,
                                e = this.$parent;
                            e.on("playing", function () {
                                t.checkRealVideoVV()
                            })
                        }, checkRealVideoVV: function () {
                            !this.realVideoPlayed && this.isVideo && (this.realVideoPlayed = !0)
                        }, formatParams: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return {
                                duby: t.duby || this._vvOptions.duby,
                                plyrtp: t.plyrtp || this.playerType,
                                rfr: this.getRefer(),
                                ft: this.qiyiVideo.getType(),
                                tvid: this._vvOptions.tvid,
                                vid: this._vvOptions.vid,
                                c1: this._vvOptions.c1,
                                ps3: this._vvOptions.ps3 || "",
                                ps4: this._vvOptions.ps4 || "",
                                s3: this._vvOptions.s3 || "",
                                s4: this._vvOptions.s4 || "",
                                vfrmblk: this.$route.query.vfrmblk || this._vvOptions.vfrmblk,
                                vfrmrst: this._vvOptions.vfrmrst,
                                fatherid: this._vvOptions.fatherid || "",
                                ra: this.rate || "",
                                s1: 1,
                                pf: "2",
                                p: "20",
                                p1: "201",
                                p1new: "2_20_201",
                                fstply: this._vvOptions.fstply
                            }
                        }, getRefer: function () {
                            return this.refer = this.refer || document.referrer, this.href = this.href || location.href, this.useHref || this.href === location.href || (this.refer = this.href, this.useHref = !0), this.refer
                        }
                    }
                },
                xn = _n,
                Sn = Object(h["a"])(xn, wn, kn, !1, null, null, null),
                Cn = Sn.exports,
                On = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.vipShow && !t.adPlaying ? n("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: t.pingback,
                            expression: "pingback"
                        }, {
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.pingback,
                            expression: "pingback"
                        }],
                        staticClass: "c-openVip"
                    }, [t.labelShow ? n("span", [t._v("观看完整版，请")]) : t._e(), n("a", {
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: t.toVip
                        }
                    }, [n("span", [t._v("\n      " + t._s(t.text) + "\n    ")]), t.vipMarket.text1 ? n("span", {
                        staticClass: "c-marketing"
                    }, [t._v("\n      " + t._s(t.vipMarket.text1) + "\n    ")]) : t._e()])]) : t._e()
                },
                jn = [],
                Tn = {
                    name: "QiyiBottomBuyLayer",
                    data: function () {
                        return {
                            vipShow: !1,
                            labelShow: !0,
                            adPlaying: !1,
                            pingback: "",
                            text: "开通会员",
                            vipMarket: {},
                            tvid: 0
                        }
                    }, beforeMount: function () {
                        var t = this,
                            e = this.$parent;
                        e.$on("load", function (e) {
                            t.labelShow = !0, t.vipShow = !1, t.tvid = e.tvid
                        }), e.$on("loaded", function (n) {
                            var i = n.videoInfo;
                            i.prv && (e.off("playing", t.hideLabel), e.once("playing", t.hideLabel), t.shouldShowLayer = !0)
                        }), e.$on("sourceVipType", function (e) {
                            var n = e.layerType,
                                i = e.isVip;
                            i && t.shouldShowLayer && t.showVipLayer(n)
                        }), e.$on("playStart", function (e) {
                            var n = e.status;
                            t.adPlaying = "AD" === n
                        })
                    }, methods: {
                        showVipLayer: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return [te, ee, ae].indexOf(e) > -1 ? (this.text = "开通会员", this.pingback = "711142_video_vip1") : ne === e ? (this.text = "购买本片", this.pingback = "711142_video_viponce") : ie === e && (this.text = "用券观看", this.pingback = "711142_video_vipquan"), t.next = 3, this.vipMarketCheck();
                                    case 3:
                                        this.vipShow = !0;
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        vipMarketCheck: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = "b5a0d92aa6966a99", t.next = 3, lt(e).catch(function () {});
                                    case 3:
                                        this.vipMarket = t.sent, this.vipMarket = this.vipMarket || {};
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        toVip: function () {
                            this.vipMarket.redirectUrl1 ? window.location.href = "".concat(this.vipMarket.redirectUrl1, "&aid=").concat(this.tvid) : this.$parent.showSourceLayer()
                        }, hideLabel: function () {
                            this.labelShow = !1
                        }
                    }
                },
                In = Tn,
                Pn = Object(h["a"])(In, On, jn, !1, null, null, null),
                Ln = Pn.exports,
                Rn = n("5bce"),
                En = "play-record",
                An = "https://l-rcd.iqiyi.com/apis/qiyirc/getvplay",
                qn = "https://l-rcd.iqiyi.com/apis/qiyirc/setrc",
                Nn = "https://nl-rcd.iqiyi.com/apis/urc/setrc",
                $n = null;

            function Vn(t) {
                return Bn.apply(this, arguments)
            }

            function Bn() {
                return Bn = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Un(e).catch(function () {});
                        case 2:
                            return n = t.sent, n && n.data && "A00000" === n.code && (i = n.data.videoPlayTime || 0), t.abrupt("return", i || 0);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), Bn.apply(this, arguments)
            }

            function Un(t) {
                return Mn.apply(this, arguments)
            }

            function Mn() {
                return Mn = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(vt["d"])(An, {
                                params: {
                                    tvId: e,
                                    agent_type: rn()
                                }
                            });
                        case 2:
                            return n = t.sent, t.abrupt("return", n.data);
                        case 4:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), Mn.apply(this, arguments)
            }

            function Hn() {
                return $n || ($n = new Rn["b"]({
                    name: En,
                    maxNum: 50
                }))
            }

            function Dn(t) {
                if (!t) return 0;
                var e = Xn(t);
                return e ? Hn().get(e) : 0
            }

            function Fn() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (t.tvid && !isNaN(t.time)) {
                    var e = Xn(t.tvid);
                    e && (t.time ? Hn().set(e, t.time) : Hn().delete(e))
                }
            }

            function zn(t) {
                return st() ? Wn(t) : Qn(t)
            }

            function Wn() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(vt["d"])(qn, {
                    params: {
                        tvId: t.tvid,
                        videoPlayTime: t.time,
                        terminalId: "31",
                        agent_type: rn()
                    }
                })
            }

            function Qn() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(vt["d"])(Nn, {
                    params: {
                        tvId: t.tvid,
                        videoPlayTime: t.time,
                        terminalId: "31",
                        ckuid: ct(),
                        agent_type: rn()
                    }
                })
            }

            function Xn(t) {
                return "".concat(ct(), "-").concat(t)
            }
            var Yn, Gn, Jn = {
                    name: "QiyiRecord",
                    props: {
                        skipHeadAndEnd: {
                            type: Boolean,
                            default: !1
                        },
                        enableGetRecord: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function () {
                        return {
                            progress: 0,
                            tvid: "",
                            noRecord: !1,
                            beginTime: 0,
                            endTime: 1 / 0,
                            isEnd: !1
                        }
                    }, beforeMount: function () {
                        var t = this,
                            e = this.$parent;
                        e.$on("load", function (n) {
                            t.isEnd = !1, e.off("pause", t.pauseHandle), e.off("ended", t.endedHandle), t.stopRecord(), t.progress = n.progress, t.tvid = n.tvid, t.noRecord = n.noRecord
                        }), e.$on("playStart", function (n) {
                            var i = n.status;
                            if ("VIDEO" === i) {
                                if (e.on("pause", t.pauseHandle), e.on("ended", t.endedHandle), !t.enableGetRecord) return;
                                t.useRecord().then(function () {
                                    t.startRecord()
                                })
                            }
                        }), this.skipHeadAndEnd && (e.$on("loaded", function (n) {
                            var i = n.videoInfo,
                                r = e.qiyiVideo;
                            i && i.data && i.data.p && (t.beginTime = r.getSkipHeaderTime(), t.endTime = r.getSkipTailTime())
                        }), e.$on("created", function (n) {
                            e.on("timeupdate", function () {
                                var n = e.currentTime();
                                t.endTime > 0 && n >= t.endTime && !t.isEnd && (t.isEnd = !0, t.$emit("ended", "VIDEO"))
                            })
                        }))
                    }, methods: {
                        useRecord: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                                var e, n, i, r;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = this.$parent, !this.noRecord || !e.isVideo) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", this.$emit("videoRecord", {
                                            time: 0
                                        }));
                                    case 3:
                                        if (n = !0, !this.progress) {
                                            t.next = 9;
                                            break
                                        }
                                        i = this.progress, n = !1, t.next = 14;
                                        break;
                                    case 9:
                                        if (i = Dn(this.tvid), !st()) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.next = 13, Vn(this.tvid);
                                    case 13:
                                        i = t.sent;
                                    case 14:
                                        r = !!this.skipHeadAndEnd && this.checkSkipHead({
                                            time: i,
                                            isFromRecord: n
                                        }), i > 0 && !r && this.$parent.seek(i);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        checkSkipHead: function (t) {
                            var e = t.time,
                                n = t.isFromRecord;
                            return !(!this.beginTime || this.beginTime < 0) && (!(e && !(e > 0 && e < this.beginTime && n)) && (this.$parent.seek(this.beginTime), !0))
                        }, startRecord: function () {
                            this.startRemoteRecord(), st() || this.startLocalRecord()
                        }, startRemoteRecord: function () {
                            var t = this;
                            this.remoteRecordTimer = setInterval(function () {
                                t.addRemoteRecord()
                            }, 12e4)
                        }, startLocalRecord: function () {
                            var t = this;
                            this.localRecordTimer = setInterval(function () {
                                t.addLocalRecord()
                            }, 2e3)
                        }, stopRecord: function () {
                            clearInterval(this.remoteRecordTimer), clearInterval(this.localRecordTimer)
                        }, addRecord: function (t) {
                            this.addLocalRecord(t), this.addRemoteRecord(t)
                        }, addLocalRecord: function (t) {
                            Fn({
                                tvid: this.tvid,
                                time: this.getCurrentTime(t)
                            })
                        }, addRemoteRecord: function (t) {
                            zn({
                                tvid: this.tvid,
                                time: this.getCurrentTime(t)
                            })
                        }, pauseHandle: function () {
                            !this.isEnd && !this.$parent.ended() && this.getCurrentTime() && this.addRecord()
                        }, endedHandle: function () {
                            this.isEnd = !0, this.addRecord(0)
                        }, getCurrentTime: function (t) {
                            return void 0 !== t ? t : gt()(this.$parent.currentTime(), 10)
                        }
                    }, render: function () {
                        return null
                    }
                },
                Kn = Jn,
                Zn = Object(h["a"])(Kn, Yn, Gn, !1, null, null, null),
                ti = Zn.exports,
                ei = {
                    methods: {
                        off: function (t, e) {
                            this.video && this.video.off(t, e)
                        }, on: function (t, e) {
                            this.video && this.video.on(t, e)
                        }, once: function (t, e) {
                            this.video && this.video.once(t, e)
                        }, showVideo: function () {
                            this.video.show()
                        }, hideVideo: function () {
                            this.video.hide()
                        }, buffered: function () {
                            return this.video.buffered()
                        }, paused: function () {
                            return this.video && this.video.paused()
                        }, pause: function (t) {
                            this.video && this.video.pause(t)
                        }, muted: function (t) {
                            return this.video.muted(t)
                        }, fullscreen: function () {
                            this.video.requestFullscreen()
                        }, requestFullscreen: function () {
                            this.video.requestFullscreen()
                        }, exitFullscreen: function () {
                            this.video.exitFullscreen()
                        }, currentTime: function () {
                            return this.video ? this.video.currentTime() : 0
                        }, src: function (t) {
                            return this.video && this.video.src(t)
                        }, lockSeek: function () {
                            this.video.lockSeek()
                        }, unLockSeek: function () {
                            this.video.unLockSeek()
                        }, reset: function () {
                            return this.video.reset()
                        }, destroy: function () {
                            return this.video.destroy()
                        }, ended: function () {
                            return this.video.ended()
                        }
                    }
                };
            n("f3e2");

            function ni() {
                var t = {};
                return "undefined" !== typeof document.hidden ? (t.hidden = "hidden", t.event = "visibilitychange", t.state = "visibilityState") : "undefined" !== typeof document.webkitHidden ? (t.hidden = "webkitHidden", t.event = "webkitvisibilitychange", t.state = "webkitVisibilityState") : "undefined" !== typeof document.mozHidden ? (t.hidden = "mozHidden", t.event = "mozvisibilitychange", t.state = "mozVisibilityState") : "undefined" !== typeof document.msHidden && (t.hidden = "msHidden", t.event = "msvisibilitychange", t.state = "msVisibilityState"), t
            }
            var ii = [];

            function ri(t) {
                ii.push(t)
            }

            function ai(t, e) {
                ii.forEach(function (n) {
                    t.active = e, n(t)
                })
            }
            var si = {
                    mounted: function () {
                        this.bindGlobalEvent()
                    }, methods: {
                        bindGlobalEvent: function () {
                            this.loseFocusPause && this.autoPauseLoseFocus()
                        }, autoPauseLoseFocus: function () {
                            var t = this;
                            if ("undefined" !== typeof window) {
                                var e = ni();
                                window.addEventListener("focus", function (t) {
                                    return ai(t, !0)
                                }), window.addEventListener("blur", function (t) {
                                    return ai(t, !1)
                                }), window.addEventListener("beforeunload", function (t) {
                                    return ai(t, !1)
                                }), window.document.addEventListener(e.event, function (t) {
                                    return ai(t, document[e.hidden])
                                }), ri(function (e) {
                                    e.active ? t.play() : t.pause()
                                })
                            }
                        }
                    }
                },
                oi = ["created", "videoChanged", "videoChange", "authReady", "skipAd", "load", "error", "loaded", "playEnd", "recharge", "fullscreenClick"],
                ci = {
                    name: "QiyiPlayer",
                    components: {
                        QiyiVideoContinue: k,
                        QiyiPosterLayer: H,
                        QiyiSourceLayer: Se,
                        QiyiPlayButton: Pe,
                        QiyiDashboard: Ve,
                        QiyiAdDashboard: Fe,
                        QiyiLoading: Ge,
                        QiyiLimit: bn,
                        QiyiPlayLimit: N,
                        QiyiBottomBuyLayer: Ln,
                        QiyiRecord: ti,
                        QiyiVideo: m,
                        QiyiVV: Cn
                    },
                    mixins: [ei, si],
                    inheritAttrs: !1,
                    props: {
                        autoplay: {
                            type: Boolean,
                            default: !1
                        },
                        adParams: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        tvid: {
                            type: [Number, String],
                            required: !0
                        },
                        vid: {
                            type: String,
                            default: ""
                        },
                        purchaseType: {
                            type: Number,
                            default: void 0
                        },
                        vipType: {
                            type: String,
                            default: ""
                        },
                        videoName: {
                            type: String,
                            default: ""
                        },
                        titleShow: {
                            type: Boolean,
                            default: !1
                        },
                        controlEle: {
                            type: String,
                            default: ""
                        },
                        dashboard: {
                            type: Boolean,
                            default: !0
                        },
                        limit: {
                            type: Boolean,
                            default: !1
                        },
                        ad: {
                            type: Boolean,
                            default: !0
                        },
                        playButton: {
                            type: Boolean,
                            default: !0
                        },
                        record: {
                            type: Boolean,
                            default: !1
                        },
                        skipHeadAndEnd: {
                            type: Boolean,
                            default: !1
                        },
                        source: {
                            type: Boolean,
                            default: !0
                        },
                        vv: {
                            type: Boolean,
                            default: !0
                        },
                        playerClass: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        playerStyle: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        quailtyChange: {
                            type: String,
                            default: ""
                        },
                        isShowVipLayer: {
                            type: Boolean,
                            default: !0
                        },
                        forceShowLayer: {
                            type: Boolean,
                            default: !1
                        },
                        loadingCallapp: {
                            type: Boolean,
                            default: !0
                        },
                        fatherid: {
                            type: Number,
                            default: 0
                        },
                        playerType: {
                            type: String,
                            default: "0"
                        },
                        rate: {
                            type: Number,
                            default: void 0
                        },
                        loseFocusPause: {
                            type: Boolean,
                            default: !1
                        },
                        limitCallAppCustom: {
                            type: Boolean,
                            default: !1
                        },
                        coustomVvOptions: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        }
                    },
                    data: function () {
                        return {
                            videoStatus: "",
                            qiyiVideo: {},
                            isResetVideo: !1,
                            video: null,
                            authData: null,
                            isVideo: !0,
                            isHttp: !0,
                            dashboardShow: !1,
                            noSourceLayer: !0,
                            vvOptions: {
                                tvid: "",
                                vid: "",
                                c1: "",
                                ht: "",
                                prv: "",
                                duration: "",
                                vfrmblk: "",
                                vfrmrst: "",
                                fatherid: "",
                                ps3: "",
                                ps4: "",
                                s3: "",
                                s4: ""
                            },
                            videoInfo: {},
                            isAndroid: !1,
                            isBaidu: !1,
                            isPlay: !1,
                            btnPlay: !1
                        }
                    }, watch: {
                        quailtyChange: function (t) {
                            this.$emit("quailtyChange", t)
                        }
                    }, methods: {
                        initQiyiVideo: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                                var n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        this.qiyiVideo = e, this.video = this.qiyiVideo.getVideo() || {}, n = this.qiyiVideo.getEngineType(), this.isHttp = "HTTP" === n, this.bindEvent(), this.playState();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        bindEvent: function () {
                            var t = this;
                            for (var e in this.$emit("created", this.qiyiVideo), this.$emit("load", {
                                purchaseType: this.purchaseType,
                                tvid: this.tvid,
                                isInit: !0
                            }), this.$listeners) - 1 === oi.indexOf(e) && this.video.on(e, this.$listeners[e]);
                            this.video.on("videoChange", function () {
                                t.$emit("videoChange")
                            }), this.video.on("videoChanged", function () {
                                t.$emit("videoChanged")
                            }), this.video.on("recharge", function () {
                                t.$emit("recharge")
                            }), this.video.on("error", function (e) {
                                t.$emit("error", e)
                            }), this.on("authRomte", function (e) {
                                if (e && "P00001" !== e.code) {
                                    var n = e;
                                    t.authData = {
                                        videoInfo: n,
                                        adInfo: {},
                                        type: t.isHttp ? n.type : "mp4"
                                    }, t.$emit("authReady", t.qiyiVideo)
                                }
                            }), this.on("skipAd", function () {
                                t.$refs.videoContinue.skipAd()
                            })
                        }, playState: function () {
                            var t = this;
                            this.isAndroid = O["j"].android, this.isBaidu = O["a"].baidubox || O["a"].baidubrowser, this.isAndroid && this.video.on("play", function () {
                                try {
                                    t.video.show(), t.isBaidu && (t.btnPlay ? t.btnPlay = !1 : t.isPlay = !0)
                                } catch (e) {
                                    console.log(e)
                                }
                            })
                        }, loadSource: function (t) {
                            this.$emit("load", t), this.video.setSrcStatus(!0), this.load(t)
                        }, load: function (t) {
                            this.qiyiVideo.loadSource({
                                tvid: t.tvid,
                                vid: t.vid,
                                autoplay: t.autoplay,
                                adId: t.adId,
                                autoSwitch: !0,
                                supportSwitchToCurrent: !0
                            })
                        }, afterAuth: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = this.authData || {},
                                n = this.getDuby(e);
                            this.updateVVOptions(Object(a["a"])({}, t, {
                                prv: e.videoInfo.prv || e.videoInfo.prvType,
                                duration: e.videoInfo.duration,
                                duby: n
                            })), t.albumId && (e.videoInfo.albumId = t.albumId || e.videoInfo.aid), this.updateVideoInfo(e.videoInfo), this.$emit("loaded", this.authData)
                        }, togglePlay: function () {
                            this.$emit("playBtnClick"), this.video && (this.paused() ? (this.isResetVideo ? this.replay() : this.play(), this.isResetVideo = !1) : this.pause())
                        }, play: function () {
                            this.video && (this.isAndroid && (this.video.show(), this.isBaidu && (this.btnPlay = !0)), this.src() ? this.video.play() : (console.log("src is not null"), this.played = !0))
                        }, preload: function (t) {
                            this.qiyiVideo.preload(t)
                        }, switchRate: function (t) {
                            this.qiyiVideo.switchDefinition(t)
                        }, getVd: function () {
                            return this.qiyiVideo.getVd()
                        }, getDuby: function (t) {
                            var e = t.videoInfo.data.ctl,
                                n = e && e.bid,
                                i = t.videoInfo.data.program.video || [],
                                r = i.find(function (t) {
                                    return n === t.bid
                                });
                            return r && r.isdol
                        }, updateVVOptions: function (t) {
                            this.vvOptions = {
                                tvid: t.tvid,
                                vid: t.vid,
                                c1: t.channelId || t.cid,
                                ht: t.purchaseType,
                                prv: t.prv,
                                duration: t.duration,
                                vfrmblk: t.vfrmblk || "",
                                vfrmrst: t.vfrmrst || "",
                                fatherid: this.fatherid,
                                temlt: t.tmplt,
                                duby: t.duby,
                                ps3: t.ps3,
                                ps4: t.ps4,
                                s3: t.s3,
                                s4: t.s4,
                                fstply: t.fstply
                            }
                        }, updateVideoInfo: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.videoInfo = t
                        }, showSourceLayer: function () {
                            this.$emit("showSourceLayer")
                        }, toggleMuted: function () {
                            this.muted(!this.muted())
                        }, getReadyState: function () {
                            return this.video.getReadyState()
                        }, seek: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            t = Math.min(t, this.duration() - 1);
                            var n = this.video.seek(t, e);
                            n && !e && this.video.play()
                        }, duration: function () {
                            return this.authData.videoInfo.prv ? this.authData.videoInfo.prvTime : this.video.duration()
                        }, onVideoStatusChange: function (t) {
                            this.isVideo = "VIDEO" === t, this.$emit("videoStatusChange", this.isVideo), this.isVideo ? this.unLockSeek() : this.lockSeek(), this.played && this.play()
                        }, preplay: function () {
                            this.video && (this.video.preplay(), this.$refs.loading.loadingTipShow = !0)
                        }, replay: function () {
                            this.$emit("load", {
                                purchaseType: this.purchaseType,
                                tvid: this.tvid
                            }), this.video.setSrcStatus(!0), this.$refs.loading.loadingTipShow = !0, this.video.replay()
                        }, clear: function () {
                            this.video && (!this.video.ended() && this.$refs.vv && this.$refs.vv.sendPauseVV(), this.$refs.record.pauseHandle(), this.$emit("clear"), this.src(""), this.qiyiVideo.stopAres())
                        }, removeSrc: function () {
                            this.src() && (this.pause(!0), this.src(""), this.video && this.video.isFullscreen() && this.exitFullscreen())
                        }, hide: function () {
                            this.$el.style.display = "none", this.$emit("hidePlayer")
                        }, show: function () {
                            this.$el.style.display = "block"
                        }, _handelBeforeEnded: function (t) {
                            this.$refs.vv.sendEndVV(t)
                        }, resetVideo: function () {
                            this.isAndroid ? O["a"].oppobrowser ? (this.isResetVideo = !0, this.video.hide(), this.src(""), this.$refs.loading.loadingShow = !1, this.$refs.qiyiPosterLayer.posterShow = !0) : this.isBaidu ? this.isBaidu && !this.isPlay ? (this.video.hide(), this.seek(.1, !0), this.setTempStore(), this.$refs.dashboard.showDashBoard(), this.$refs.playButton.playShow = !0, this.$refs.loading.loadingShow = !1, this.$refs.qiyiPosterLayer.posterShow = !0) : this.isPlay = !1 : (this.video.hide(), this.seek(.1, !0), this.setTempStore(), this.$refs.loading.loadingShow = !1, this.$refs.qiyiPosterLayer.posterShow = !0) : this.isBaidu ? (this.isResetVideo = !0, this.removeSrc(), this.$refs.loading.loadingShow = !1, this.$refs.qiyiPosterLayer.posterShow = !0) : (this.seek(0, !0), this.setTempStore(), this.$refs.qiyiPosterLayer.posterShow = !0)
                        }, setTempStore: function () {
                            this.qiyiVideo.setTempStore()
                        }, _handleEnded: function (t, e) {
                            this._handelBeforeEnded(e), this.pause(), this.reset(), this.$emit("playEnd", {
                                status: t,
                                end: !0,
                                prv: this.videoInfo.prv
                            })
                        }, _handlePlay: function (t) {
                            var e = t.videoStatus;
                            this.$emit("playStart", {
                                status: e
                            })
                        }, _toggleFullscreen: function () {
                            var t = this.video.isFullscreen();
                            t ? this.exitFullscreen() : (this.play(), this.fullscreen())
                        }, _handleFullscreen: function (t) {
                            t.isFullscreen = this.video.isFullscreen(), this.$emit("fullscreenClick", t), t.defaultPrevented || this._toggleFullscreen()
                        }, _sourceTypeHandle: function (t) {
                            0 !== t.type && this.video.hide(), this.$emit("sourceTypeChange", t)
                        }, _sourceLayerFooHandle: function (t) {
                            var e = t.code,
                                n = t.data;
                            this.$emit("sourceLayerFoo", {
                                code: e,
                                data: n
                            })
                        }, _setDashboardShow: function (t) {
                            this.dashboardShow = t
                        }, _sourceVipType: function (t) {
                            this.$emit("sourceVipType", t)
                        }
                    }
                },
                ui = ci,
                li = Object(h["a"])(ui, i, r, !1, null, null, null);
            e["a"] = li.exports
        }, "261c": function (t, e, n) {
            "use strict";
            n.d(e, "c", function () {
                return v
            }), n.d(e, "f", function () {
                return y
            }), n.d(e, "d", function () {
                return g
            }), n.d(e, "e", function () {
                return b
            }), n.d(e, "b", function () {
                return w
            }), n.d(e, "a", function () {
                return k
            }), n.d(e, "g", function () {
                return _
            }), n.d(e, "k", function () {
                return B
            }), n.d(e, "n", function () {
                return M
            }), n.d(e, "l", function () {
                return D
            }), n.d(e, "m", function () {
                return z
            }), n.d(e, "o", function () {
                return Q
            }), n.d(e, "x", function () {
                return Y
            }), n.d(e, "s", function () {
                return J
            }), n.d(e, "q", function () {
                return Z
            }), n.d(e, "u", function () {
                return et
            }), n.d(e, "t", function () {
                return it
            }), n.d(e, "v", function () {
                return at
            }), n.d(e, "h", function () {
                return ot
            }), n.d(e, "r", function () {
                return ct
            }), n.d(e, "w", function () {
                return lt
            }), n.d(e, "j", function () {
                return pt
            }), n.d(e, "i", function () {
                return ft
            }), n.d(e, "p", function () {
                return bt
            });
            n("28a5"), n("57e7");
            var i = n("0a0d"),
                r = n.n(i),
                a = (n("96cf"), n("3b8d")),
                s = n("a78e"),
                o = n.n(s),
                c = n("936f"),
                u = n("b383"),
                l = n("11ad"),
                d = n("b2e7"),
                p = n("5191"),
                h = n("2c06"),
                f = n("53a7"),
                m = n("8296"),
                v = "1",
                y = "2",
                g = "3",
                b = "4",
                w = 29,
                k = 4,
                _ = "is_password",
                x = "//passport.iqiyi.com/appeal/check/check_appeal_info.action",
                S = "//passport.iqiyi.com/appeal/check/get_check_type.action",
                C = "//passport.iqiyi.com/appeal/f3s_check/id_info.action",
                O = "https://passport.iqiyi.com/appeal/user/get_access_token.action",
                j = "//passport.iqiyi.com/appeal/user/verify_phone.action",
                T = "//passport.iqiyi.com/appeal/check/get_appeal_process.action",
                I = "//passport.iqiyi.com/appeal/f3s_check/id_pic.action",
                P = "//passport.iqiyi.com/appeal/order/skip_identity_auth.action",
                L = "//passport.iqiyi.com/appeal/third/get_third_type.action",
                R = "//passport.iqiyi.com/appeal/third/check_atoken.action",
                E = "//passport.iqiyi.com/apis/phone/secure_send_cellphone_authcode.action",
                A = "https://upload.iqiyi.com/common_upload",
                q = "https://passport.iqiyi.com/appeal/c/confirm.action",
                N = m["N"].android ? "iu7sgbiow!jsllmkgw5anlewgued" : "okiuygbg76wb!gdimo*ysb",
                $ = "当前网络开小差啦，请稍后再试",
                V = "unbind_token";

            function B() {
                return U.apply(this, arguments)
            }

            function U() {
                return U = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = s.length > 0 && void 0 !== s[0] ? s[0] : {}, t.t0 = l["p"], t.t1 = Object(h["t"])(), t.next = 5, Object(f["d"])();
                        case 5:
                            return t.t2 = t.sent, t.next = 8, yt();
                        case 8:
                            return t.t3 = t.sent, t.t4 = r()(), n = {
                                ptid: t.t0,
                                agenttype: t.t1,
                                appeal_type: "1",
                                device_id: t.t2,
                                dfp: t.t3,
                                timestamp: t.t4
                            }, e.username && (n.username = e.username || ""), n.sign = Object(h["E"])(n, "&", N), t.next = 15, c["a"].post(x, Object(u["stringify"])(n), {
                                withCredentials: !0
                            }).catch(function () {});
                        case 15:
                            return i = t.sent, a = i && i.data || {}, a.success = a && "A00000" === a.code, a.isMainDevice = a.data && "0" === a.data.check_type, a.msg = a.success ? "" : a.msg || $, a.success && a.data && vt(V, a.data.appeal_id), a.code && "A00000" !== a.code && (a.msg = a.msg || "您的账号不符合申诉条件"), t.abrupt("return", a);
                        case 23:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), U.apply(this, arguments)
            }

            function M() {
                return H.apply(this, arguments)
            }

            function H() {
                return H = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return s.length > 0 && void 0 !== s[0] ? s[0] : {}, t.t0 = l["p"], t.t1 = Object(h["t"])(), t.t2 = mt(), t.next = 6, Object(f["d"])();
                        case 6:
                            return t.t3 = t.sent, t.next = 9, yt();
                        case 9:
                            return t.t4 = t.sent, t.t5 = r()(), e = {
                                ptid: t.t0,
                                agenttype: t.t1,
                                appeal_id: t.t2,
                                device_id: t.t3,
                                dfp: t.t4,
                                timestamp: t.t5
                            }, e.sign = Object(h["E"])(e, "&", N), t.next = 15, c["a"].post(S, Object(u["stringify"])(e), {
                                withCredentials: !0
                            }).catch(function () {});
                        case 15:
                            return n = t.sent, i = n && n.data || {}, i.success = i && "A00000" === i.code, i.success && i.data ? (a = i.data.check_type || "", i.checkTypes = a.indexOf("&") >= 0 ? a.split("&") : [a]) : i.msg = i.msg || $, t.abrupt("return", i);
                        case 20:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), H.apply(this, arguments)
            }

            function D() {
                return F.apply(this, arguments)
            }

            function F() {
                return F = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = s.length > 0 && void 0 !== s[0] ? s[0] : {}, t.t0 = l["p"], t.t1 = Object(h["t"])(), t.t2 = mt(), t.t3 = e.realname, t.t4 = e.verifyId, t.next = 8, Object(f["d"])();
                        case 8:
                            return t.t5 = t.sent, t.next = 11, yt();
                        case 11:
                            return t.t6 = t.sent, t.t7 = r()(), n = {
                                ptid: t.t0,
                                agenttype: t.t1,
                                appeal_id: t.t2,
                                real_name: t.t3,
                                id_no: t.t4,
                                device_id: t.t5,
                                dfp: t.t6,
                                timestamp: t.t7
                            }, n.sign = Object(h["E"])(n, "&", N), t.next = 17, c["a"].post(C, Object(u["stringify"])(n), {
                                withCredentials: !0
                            }).catch(function () {});
                        case 17:
                            return i = t.sent, a = i && i.data || {}, a.success = a && "A00000" === a.code, a.msg = a.success ? "" : a.msg || $, a.success && a.data && vt(V, a.data.appeal_id), t.abrupt("return", a);
                        case 23:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), F.apply(this, arguments)
            }

            function z() {
                return W.apply(this, arguments)
            }

            function W() {
                return W = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return a.length > 0 && void 0 !== a[0] ? a[0] : {}, t.t0 = l["p"], t.t1 = Object(h["t"])(), t.t2 = mt(), t.next = 6, Object(f["d"])();
                        case 6:
                            return t.t3 = t.sent, t.next = 9, yt();
                        case 9:
                            return t.t4 = t.sent, t.t5 = r()(), e = {
                                ptid: t.t0,
                                agenttype: t.t1,
                                appeal_id: t.t2,
                                device_id: t.t3,
                                dfp: t.t4,
                                timestamp: t.t5
                            }, e.sign = Object(h["E"])(e, "&", N), t.next = 15, c["a"].post(O, Object(u["stringify"])(e), {
                                withCredentials: !0
                            }).catch(function () {});
                        case 15:
                            return n = t.sent, i = n && n.data || {}, i.success = i && "A00000" === i.code, i.msg = i.success ? "" : i.msg || $, t.abrupt("return", i);
                        case 20:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), W.apply(this, arguments)
            }

            function Q() {
                return X.apply(this, arguments)
            }

            function X() {
                return X = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a, s, o = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = o.length > 0 && void 0 !== o[0] ? o[0] : {}, t.t0 = Object(h["H"])(e.username), t.t1 = e.area, t.next = 5, Object(f["d"])();
                        case 5:
                            return t.t2 = t.sent, t.next = 8, yt();
                        case 8:
                            return t.t3 = t.sent, t.t4 = r()(), t.t5 = l["p"], n = {
                                cellphoneNumber: t.t0,
                                area_code: t.t1,
                                device_id: t.t2,
                                dfp: t.t3,
                                requestType: 4,
                                serviceId: 1,
                                agenttype: 211,
                                nr: 1,
                                timestamp: t.t4,
                                ptid: t.t5
                            }, e.slideToken && (n.env_token = e.slideToken), n.qd_sc = Object(h["D"])(n, "&", "0gs4kw8ofr3jv7nzq2iu6mye1ht5lx9p"), t.next = 16, c["a"].post(E, Object(u["stringify"])(n)).catch(function () {});
                        case 16:
                            return i = t.sent, a = i && i.data || {}, a.success = a && "A00000" === a.code, a.msg = a.success ? "" : a.msg || $, a.success || (a.isHeightRisk = "P00107" === a.code || "P00159" === a.code, "P00223" === a.code && (s = a && a.data && a.data.data || {}, 2 === s.level && 3 === s.auth_type ? (a.token = s.token, a.isSileVerify = !0) : 3 === s.level && (a.isHeightRisk = !0))), t.abrupt("return", a);
                        case 22:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), X.apply(this, arguments)
            }

            function Y() {
                return G.apply(this, arguments)
            }

            function G() {
                return G = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = s.length > 0 && void 0 !== s[0] ? s[0] : {}, t.t0 = e.phone, t.t1 = e.acode, t.t2 = e.authcode, t.t3 = l["p"], t.t4 = Object(h["t"])(), t.t5 = mt(), t.next = 9, Object(f["d"])();
                        case 9:
                            return t.t6 = t.sent, t.next = 12, yt();
                        case 12:
                            return t.t7 = t.sent, t.t8 = r()(), n = {
                                phone: t.t0,
                                area_code: t.t1,
                                authcode: t.t2,
                                ptid: t.t3,
                                agenttype: t.t4,
                                appeal_id: t.t5,
                                device_id: t.t6,
                                dfp: t.t7,
                                timestamp: t.t8
                            }, n.sign = Object(h["E"])(n, "&", N), t.next = 18, c["a"].post(j, Object(u["stringify"])(n)).catch(function () {});
                        case 18:
                            return i = t.sent, a = i && i.data || {}, a.success = a && "A00000" === a.code, a.msg = a.success ? a.msg : a.msg || $, t.abrupt("return", a);
                        case 23:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), G.apply(this, arguments)
            }

            function J(t) {
                return K.apply(this, arguments)
            }

            function K() {
                return K = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, a;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.t0 = e.phone, t.t1 = e.acode, t.t2 = e.authcode, t.t3 = l["p"], t.t4 = Object(h["t"])(), t.next = 7, Object(f["d"])();
                        case 7:
                            return t.t5 = t.sent, t.next = 10, yt();
                        case 10:
                            return t.t6 = t.sent, t.t7 = r()(), n = {
                                phone: t.t0,
                                area_code: t.t1,
                                authcode: t.t2,
                                ptid: t.t3,
                                agenttype: t.t4,
                                device_id: t.t5,
                                dfp: t.t6,
                                timestamp: t.t7
                            }, n.sign = Object(h["E"])(n, "&", N), t.next = 16, c["a"].post(T, Object(u["stringify"])(n)).catch(function () {});
                        case 16:
                            return i = t.sent, a = i && i.data || {}, a.success = a && "A00000" === a.code, a.msg = a.success ? a.data.msg : a.msg || $, a.status = a && a.data && a.data.status, a.title = a && a.data && a.data.title, t.abrupt("return", a);
                        case 23:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), K.apply(this, arguments)
            }

            function Z() {
                return tt.apply(this, arguments)
            }

            function tt() {
                return tt = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = s.length > 0 && void 0 !== s[0] ? s[0] : {}, t.t0 = e.bussiness || "skipIdentifyAuth", t.t1 = mt(), t.next = 5, Object(f["d"])();
                        case 5:
                            return t.t2 = t.sent, t.t3 = nt(), t.next = 9, yt();
                        case 9:
                            return t.t4 = t.sent, t.t5 = r()(), t.t6 = l["p"], n = {
                                bussiness: t.t0,
                                appeal_id: t.t1,
                                device_id: t.t2,
                                username: t.t3,
                                dfp: t.t4,
                                timestamp: t.t5,
                                ptid: t.t6
                            }, n.sign = Object(h["E"])(n, "&", N), t.next = 16, c["a"].post(P, Object(u["stringify"])(n)).catch(function () {});
                        case 16:
                            return i = t.sent, a = i && i.data || {}, a.success = a && "A00000" === a.code, a.msg = a.success ? a.msg : a.msg || $, a.success ? vt(V, a && a.data && a.data.process_id) : "E00008" === a.code && (a.bt = "contactService"), t.abrupt("return", a);
                        case 22:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), tt.apply(this, arguments)
            }

            function et(t) {
                o.a.set("appealName", t, {
                    path: "/",
                    domain: "iqiyi.com"
                }), m["V"].setItem("appealName", t)
            }

            function nt() {
                var t = Object(h["x"])("appealName");
                return t && "undefined" !== t ? t : m["V"].getItem("appealName") || Object(h["x"])("P000email") || ""
            }

            function it() {
                return rt.apply(this, arguments)
            }

            function rt() {
                return rt = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = s.length > 0 && void 0 !== s[0] ? s[0] : {}, t.t0 = l["p"], t.t1 = Object(h["t"])(), t.t2 = mt(), t.t3 = e.picUrl, t.next = 7, Object(f["d"])();
                        case 7:
                            return t.t4 = t.sent, t.next = 10, yt();
                        case 10:
                            return t.t5 = t.sent, t.t6 = r()(), n = {
                                ptid: t.t0,
                                agenttype: t.t1,
                                appeal_id: t.t2,
                                id_pic_url: t.t3,
                                device_id: t.t4,
                                dfp: t.t5,
                                timestamp: t.t6
                            }, n.sign = Object(h["E"])(n, "&", N), t.next = 16, c["a"].post(I, Object(u["stringify"])(n)).catch(function () {});
                        case 16:
                            return i = t.sent, a = i && i.data || {}, a.success = a && "A00000" === a.code, a.msg = a.success ? a.msg : a.msg || $, t.abrupt("return", a);
                        case 21:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), rt.apply(this, arguments)
            }

            function at() {
                return st.apply(this, arguments)
            }

            function st() {
                return st = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r, a = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : {}, n = new FormData, n.append("file", e.file), n.append("access_token", e.accessToken), n.append("file_type", e.fileType), t.next = 7, c["a"].post(A, n, {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            });
                        case 7:
                            return i = t.sent, r = i && i.data || {}, r.success = r && "A00000" === r.code, r.msg = r.success ? r.msg : r.msg || $, r.httpInnerUrl = r.data && r.data.httpInnerUrl, t.abrupt("return", r);
                        case 13:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), st.apply(this, arguments)
            }
            var ot = {
                1: {
                    img: "//www.iqiyipic.com/common/fix/h5-passport3.0/result-ing.png",
                    imgDark: "//www.iqiyipic.com/common/fix/h5-passport3.0/result-ing-dark.png"
                },
                2: {
                    img: "//www.iqiyipic.com/common/fix/h5-passport3.0/result-succeed.png",
                    imgDark: "//www.iqiyipic.com/common/fix/h5-passport3.0/result-succeed-dark.png"
                },
                3: {
                    img: "//www.iqiyipic.com/common/fix/h5-passport3.0/result-error.png",
                    imgDark: "//www.iqiyipic.com/common/fix/h5-passport3.0/result-error-dark.png"
                }
            };

            function ct() {
                return ut.apply(this, arguments)
            }

            function ut() {
                return ut = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return a.length > 0 && void 0 !== a[0] ? a[0] : {}, t.t0 = l["p"], t.t1 = Object(h["t"])(), t.t2 = mt(), t.next = 6, Object(f["d"])();
                        case 6:
                            return t.t3 = t.sent, t.next = 9, yt();
                        case 9:
                            return t.t4 = t.sent, t.t5 = r()(), e = {
                                ptid: t.t0,
                                agenttype: t.t1,
                                appeal_id: t.t2,
                                device_id: t.t3,
                                dfp: t.t4,
                                timestamp: t.t5
                            }, e.sign = Object(h["E"])(e, "&", N), t.next = 15, c["a"].post(L, Object(u["stringify"])(e), {
                                withCredentials: !0
                            }).catch(function () {});
                        case 15:
                            return n = t.sent, i = n && n.data || {}, i.success = i && "A00000" === i.code, i.msg = i.success ? "" : i.msg || $, t.abrupt("return", i);
                        case 20:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), ut.apply(this, arguments)
            }

            function lt() {
                return dt.apply(this, arguments)
            }

            function dt() {
                return dt = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = s.length > 0 && void 0 !== s[0] ? s[0] : {}, t.t0 = e.snstype, t.t1 = e.snstype === k ? e.uid : "", t.t2 = e.snstype === k ? e.atoken : "", t.t3 = e.snstype === w ? e.code : "", t.t4 = m["p"].version, t.t5 = l["p"], t.t6 = Object(h["t"])(), t.t7 = mt(), t.next = 11, Object(f["d"])();
                        case 11:
                            return t.t8 = t.sent, t.next = 14, yt();
                        case 14:
                            return t.t9 = t.sent, t.t10 = r()(), n = {
                                snstype: t.t0,
                                ouid: t.t1,
                                atoken: t.t2,
                                code: t.t3,
                                union_app: "003",
                                app_version: t.t4,
                                isapp: "1",
                                ptid: t.t5,
                                agenttype: t.t6,
                                appeal_id: t.t7,
                                device_id: t.t8,
                                dfp: t.t9,
                                timestamp: t.t10
                            }, n.sign = Object(h["E"])(n, "&", N), t.next = 20, c["a"].post(R, Object(u["stringify"])(n), {
                                withCredentials: !0
                            }).catch(function () {});
                        case 20:
                            return i = t.sent, a = i && i.data || {}, a.success = a && "A00000" === a.code, a.msg = a.success ? "" : a.msg || $, t.abrupt("return", a);
                        case 25:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), dt.apply(this, arguments)
            }

            function pt() {
                return ht.apply(this, arguments)
            }

            function ht() {
                return ht = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r, a = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : {}, t.t0 = e.token, t.t1 = l["p"], t.t2 = Object(d["w"])(), t.next = 6, yt();
                        case 6:
                            return t.t3 = t.sent, t.next = 9, Object(p["a"])();
                        case 9:
                            return t.t4 = t.sent, t.t5 = (new Date).getTime(), n = {
                                token: t.t0,
                                ptid: t.t1,
                                device_id: t.t2,
                                dfp: t.t3,
                                envinfo: t.t4,
                                timestamp: t.t5
                            }, n.sign = Object(h["E"])(n, "&", N), t.next = 15, c["a"].post(q, Object(u["stringify"])(n), {
                                withCredentials: !0
                            }).catch(function () {});
                        case 15:
                            return i = t.sent, r = i && i.data || {}, r.success = r && "A00000" === r.code, r.status = r && "C00002" === r.code ? "invaild" : "", t.abrupt("return", r);
                        case 20:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), ht.apply(this, arguments)
            }

            function ft() {
                return !m["p"].iqiyi || m["p"].compareVersion(m["p"].version, "11.2.0") >= 0
            }

            function mt() {
                var t = Object(h["x"])(V);
                return t && "undefined" !== t ? t : m["V"].getItem(V) || ""
            }

            function vt(t, e) {
                o.a.set(t, e, {
                    path: "/",
                    domain: "iqiyi.com"
                }), m["V"].setItem(t, e)
            }

            function yt() {
                return gt.apply(this, arguments)
            }

            function gt() {
                return gt = Object(a["a"])(regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(f["c"])();
                        case 2:
                            if (t.t0 = t.sent, t.t0) {
                                t.next = 7;
                                break
                            }
                            return t.next = 6, Object(p["b"])();
                        case 6:
                            t.t0 = t.sent;
                        case 7:
                            return e = t.t0, t.abrupt("return", e);
                        case 9:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), gt.apply(this, arguments)
            }

            function bt() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                location.href = "/m5/security/verifyResult.html?" + Object(u["stringify"])({
                    f: "VERIFYID",
                    r: t.title,
                    t: t.msg,
                    isHideNav: 1
                })
            }
        }, "2a84": function (t, e, n) {
            "use strict";
            n.d(e, "j", function () {
                return h
            }), n.d(e, "a", function () {
                return f
            }), n.d(e, "k", function () {
                return m
            }), n.d(e, "c", function () {
                return v
            }), n.d(e, "m", function () {
                return y
            }), n.d(e, "b", function () {
                return g
            });
            n("28a5");
            var i = n("0a0d"),
                r = n.n(i),
                a = (n("6b54"), n("87b3"), n("e814")),
                s = n.n(a),
                o = n("8d81"),
                c = n.n(o),
                u = n("7aa9");
            n.d(e, "d", function () {
                return u["b"]
            }), n.d(e, "e", function () {
                return u["c"]
            });
            var l = n("51cb");
            n.d(e, "f", function () {
                return l["c"]
            }), n.d(e, "g", function () {
                return l["d"]
            }), n.d(e, "h", function () {
                return l["e"]
            }), n.d(e, "i", function () {
                return l["f"]
            }), n.d(e, "l", function () {
                return l["h"]
            });
            var d = "";
            "undefined" !== typeof window && (d = window.navigator.userAgent);
            var p = Object(u["a"])(d),
                h = p.os,
                f = p.browser,
                m = p.osProducer;

            function v(t) {
                t = +t, t = s()(t);
                var e = t / 3600 >> 0,
                    n = t % 3600 / 60 >> 0,
                    i = t % 3600 % 60,
                    r = e ? 1 === e.toString().length ? "0" + e + ":" : e + ":" : "";
                return r += n ? 1 === n.toString().length ? "0" + n + ":" : n + ":" : "00:", r += 1 === i.toString().length ? "0" + i : i, r
            }

            function y() {
                return c()(window.navigator.userAgent + document.cookie + Math.random() + r()())
            }

            function g(t, e) {
                try {
                    for (var n, i, r = t.split("."), a = e.split("."), o = Math.max(r.length, a.length), c = 0, u = 0; u < o && !c; u++) n = s()(r[u], 10) || 0, i = s()(a[u], 10) || 0, n < i && (c = -1), n > i && (c = 1);
                    return c
                } catch (l) {
                    return 0
                }
            }
        }, "2af2": function (t, e, n) {
            "use strict";
            n("96cf");
            var i = n("3b8d"),
                r = (n("28a5"), n("0a0d")),
                a = n.n(r),
                s = (n("6b54"), n("87b3"), n("795b")),
                o = n.n(s),
                c = (n("57e7"), n("b383")),
                u = n.n(c),
                l = 0;

            function d() {}

            function p(t) {
                var e, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = i.params || {},
                    s = i.prefix || "__jp",
                    c = i.callback || s + a()() + l++,
                    p = i.timeout || 15e3,
                    h = document.getElementsByTagName("script")[0] || document.head;
                return new o.a(function (i, a) {
                    function s() {
                        e.removeEventListener("error", o), e.parentNode && e.parentNode.removeChild(e), window[c] = d, n && clearTimeout(n)
                    }

                    function o() {
                        s(), a(Error("error"))
                    }
                    p && (n = setTimeout(function () {
                        s(), a(Error("timeout"))
                    }, p)), window[c] = function (t) {
                        s(), i({
                            data: t
                        })
                    }, r.callback = c, t = "".concat(t).concat(t.indexOf("?") > -1 ? "&" : "?").concat(u.a.stringify(r)), e = document.createElement("script"), e.addEventListener("error", o), e.src = t, h.parentNode.insertBefore(e, h)
                })
            }
            n("7f7f"), n("b54a"), n("4917"), n("a481");
            var h = n("f499"),
                f = n.n(h);

            function m(t, e) {
                function n(e, n, i) {
                    t.WeixinJSBridge ? WeixinJSBridge.invoke(e, r(n), function (t) {
                        s(e, t, i)
                    }) : u(e, i)
                }

                function i(e, n, i) {
                    t.WeixinJSBridge ? WeixinJSBridge.on(e, function (t) {
                        i && i.trigger && i.trigger(t), s(e, t, n)
                    }) : u(e, i || n)
                }

                function r(t) {
                    return t = t || {}, t.appId = L.appId, t.verifyAppId = L.appId, t.verifySignType = "sha1", t.verifyTimestamp = L.timestamp + "", t.verifyNonceStr = L.nonceStr, t.verifySignature = L.signature, t
                }

                function a(t) {
                    return {
                        timeStamp: t.timestamp + "",
                        nonceStr: t.nonceStr,
                        package: t.package,
                        paySign: t.paySign,
                        signType: t.signType || "SHA1"
                    }
                }

                function s(t, e, n) {
                    var i, r;
                    switch (delete e.err_code, delete e.err_desc, delete e.err_detail, i = e.errMsg, i || (i = e.err_msg, delete e.err_msg, i = o(t, i), e.errMsg = i), n = n || {}, n._complete && (n._complete(e), delete n._complete), i = e.errMsg || "", L.debug && !n.isInnerInvoke && alert(f()(e)), r = i.indexOf(":"), i.substring(r + 1)) {
                    case "ok":
                        n.success && n.success(e);
                        break;
                    case "cancel":
                        n.cancel && n.cancel(e);
                        break;
                    default:
                        n.fail && n.fail(e)
                    }
                    n.complete && n.complete(e)
                }

                function o(t, e) {
                    var n, i, r = t,
                        a = v[r];
                    return a && (r = a), n = "ok", e && (i = e.indexOf(":"), n = e.substring(i + 1), "confirm" == n && (n = "ok"), "failed" == n && (n = "fail"), -1 != n.indexOf("failed_") && (n = n.substring(7)), -1 != n.indexOf("fail_") && (n = n.substring(5)), n = n.replace(/_/g, " "), n = n.toLowerCase(), ("access denied" == n || "no permission to execute" == n) && (n = "permission denied"), "config" == r && "function not exist" == n && (n = "ok"), "" == n && (n = "fail")), r + ":" + n
                }

                function c(t) {
                    var e, n, i, r;
                    if (t) {
                        for (e = 0, n = t.length; n > e; ++e) i = t[e], r = m[i], r && (t[e] = r);
                        return t
                    }
                }

                function u(t, e) {
                    if (!(!L.debug || e && e.isInnerInvoke)) {
                        var n = v[t];
                        n && (t = n), e && e._complete && delete e._complete, console.log('"' + t + '",', e || "")
                    }
                }

                function l() {
                    0 != P.preVerifyState && (k || _ || L.debug || "6.0.2" > O || P.systemType < 0 || j || (j = !0, P.appId = L.appId, P.initTime = I.initEndTime - I.initStartTime, P.preVerifyTime = I.preVerifyEndTime - I.preVerifyStartTime, A.getNetworkType({
                        isInnerInvoke: !0,
                        success: function (t) {
                            var e, n;
                            P.networkType = t.networkType, e = "http://open.weixin.qq.com/sdk/report?v=" + P.version + "&o=" + P.preVerifyState + "&s=" + P.systemType + "&c=" + P.clientVersion + "&a=" + P.appId + "&n=" + P.networkType + "&i=" + P.initTime + "&p=" + P.preVerifyTime + "&u=" + P.url, n = new Image, n.src = e
                        }
                    })))
                }

                function d() {
                    return (new Date).getTime()
                }

                function p(e) {
                    x && (t.WeixinJSBridge ? e() : y.addEventListener && y.addEventListener("WeixinJSBridgeReady", e, !1))
                }

                function h() {
                    A.invoke || (A.invoke = function (e, n, i) {
                        t.WeixinJSBridge && WeixinJSBridge.invoke(e, r(n), i)
                    }, A.on = function (e, n) {
                        t.WeixinJSBridge && WeixinJSBridge.on(e, n)
                    })
                }
                var m, v, y, g, b, w, k, _, x, S, C, O, j, T, I, P, L, R, E, A;
                if (!t.jWeixin) return m = {
                    config: "preVerifyJSAPI",
                    onMenuShareTimeline: "menu:share:timeline",
                    onMenuShareAppMessage: "menu:share:appmessage",
                    onMenuShareQQ: "menu:share:qq",
                    onMenuShareWeibo: "menu:share:weiboApp",
                    onMenuShareQZone: "menu:share:QZone",
                    previewImage: "imagePreview",
                    getLocation: "geoLocation",
                    openProductSpecificView: "openProductViewWithPid",
                    addCard: "batchAddCard",
                    openCard: "batchViewCard",
                    chooseWXPay: "getBrandWCPayRequest"
                }, v = function () {
                    var t, e = {};
                    for (t in m) e[m[t]] = t;
                    return e
                }(), y = t.document, g = y.title, b = navigator.userAgent.toLowerCase(), w = navigator.platform.toLowerCase(), k = !(!w.match("mac") && !w.match("win")), _ = -1 != b.indexOf("wxdebugger"), x = -1 != b.indexOf("micromessenger"), S = -1 != b.indexOf("android"), C = -1 != b.indexOf("iphone") || -1 != b.indexOf("ipad"), O = function () {
                    var t = b.match(/micromessenger\/(\d+\.\d+\.\d+)/) || b.match(/micromessenger\/(\d+\.\d+)/);
                    return t ? t[1] : ""
                }(), j = !1, T = !1, I = {
                    initStartTime: d(),
                    initEndTime: 0,
                    preVerifyStartTime: 0,
                    preVerifyEndTime: 0
                }, P = {
                    version: 1,
                    appId: "",
                    initTime: 0,
                    preVerifyTime: 0,
                    networkType: "",
                    preVerifyState: 1,
                    systemType: C ? 1 : S ? 2 : -1,
                    clientVersion: O,
                    url: encodeURIComponent(location.href)
                }, L = {}, R = {
                    _completes: []
                }, E = {
                    state: 0,
                    data: {}
                }, p(function () {
                    I.initEndTime = d()
                }), A = {
                    config: function (t) {
                        L = t, u("config", t);
                        var e = !1 !== L.check;
                        p(function () {
                            var t, i, r;
                            if (e) n(m.config, {
                                verifyJsApiList: c(L.jsApiList)
                            }, function () {
                                R._complete = function (t) {
                                    I.preVerifyEndTime = d(), E.state = 1, E.data = t
                                }, R.success = function () {
                                    P.preVerifyState = 0
                                }, R.fail = function (t) {
                                    R._fail ? R._fail(t) : E.state = -1
                                };
                                var t = R._completes;
                                return t.push(function () {
                                    l()
                                }), R.complete = function () {
                                    for (var e = 0, n = t.length; n > e; ++e) t[e]();
                                    R._completes = []
                                }, R
                            }()), I.preVerifyStartTime = d();
                            else {
                                for (E.state = 1, t = R._completes, i = 0, r = t.length; r > i; ++i) t[i]();
                                R._completes = []
                            }
                        }), L.beta && h()
                    }, ready: function (t) {
                        0 != E.state ? t() : (R._completes.push(t), !x && L.debug && t())
                    }, error: function (t) {
                        "6.0.2" > O || T || (T = !0, -1 == E.state ? t(E.data) : R._fail = t)
                    }, checkJsApi: function (t) {
                        var e = function (t) {
                            var e, n, i = t.checkResult;
                            for (e in i) n = v[e], n && (i[n] = i[e], delete i[e]);
                            return t
                        };
                        n("checkJsApi", {
                            jsApiList: c(t.jsApiList)
                        }, function () {
                            return t._complete = function (t) {
                                if (S) {
                                    var n = t.checkResult;
                                    n && (t.checkResult = JSON.parse(n))
                                }
                                t = e(t)
                            }, t
                        }())
                    }, onMenuShareTimeline: function (t) {
                        i(m.onMenuShareTimeline, {
                            complete: function () {
                                n("shareTimeline", {
                                    title: t.title || g,
                                    desc: t.title || g,
                                    img_url: t.imgUrl || "",
                                    link: t.link || location.href,
                                    type: t.type || "link",
                                    data_url: t.dataUrl || ""
                                }, t)
                            }
                        }, t)
                    }, onMenuShareAppMessage: function (t) {
                        i(m.onMenuShareAppMessage, {
                            complete: function () {
                                n("sendAppMessage", {
                                    title: t.title || g,
                                    desc: t.desc || "",
                                    link: t.link || location.href,
                                    img_url: t.imgUrl || "",
                                    type: t.type || "link",
                                    data_url: t.dataUrl || ""
                                }, t)
                            }
                        }, t)
                    }, onMenuShareQQ: function (t) {
                        i(m.onMenuShareQQ, {
                            complete: function () {
                                n("shareQQ", {
                                    title: t.title || g,
                                    desc: t.desc || "",
                                    img_url: t.imgUrl || "",
                                    link: t.link || location.href
                                }, t)
                            }
                        }, t)
                    }, onMenuShareWeibo: function (t) {
                        i(m.onMenuShareWeibo, {
                            complete: function () {
                                n("shareWeiboApp", {
                                    title: t.title || g,
                                    desc: t.desc || "",
                                    img_url: t.imgUrl || "",
                                    link: t.link || location.href
                                }, t)
                            }
                        }, t)
                    }, onMenuShareQZone: function (t) {
                        i(m.onMenuShareQZone, {
                            complete: function () {
                                n("shareQZone", {
                                    title: t.title || g,
                                    desc: t.desc || "",
                                    img_url: t.imgUrl || "",
                                    link: t.link || location.href
                                }, t)
                            }
                        }, t)
                    }, startRecord: function (t) {
                        n("startRecord", {}, t)
                    }, stopRecord: function (t) {
                        n("stopRecord", {}, t)
                    }, onVoiceRecordEnd: function (t) {
                        i("onVoiceRecordEnd", t)
                    }, playVoice: function (t) {
                        n("playVoice", {
                            localId: t.localId
                        }, t)
                    }, pauseVoice: function (t) {
                        n("pauseVoice", {
                            localId: t.localId
                        }, t)
                    }, stopVoice: function (t) {
                        n("stopVoice", {
                            localId: t.localId
                        }, t)
                    }, onVoicePlayEnd: function (t) {
                        i("onVoicePlayEnd", t)
                    }, uploadVoice: function (t) {
                        n("uploadVoice", {
                            localId: t.localId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        }, t)
                    }, downloadVoice: function (t) {
                        n("downloadVoice", {
                            serverId: t.serverId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        }, t)
                    }, translateVoice: function (t) {
                        n("translateVoice", {
                            localId: t.localId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        }, t)
                    }, chooseImage: function (t) {
                        n("chooseImage", {
                            scene: "1|2",
                            count: t.count || 9,
                            sizeType: t.sizeType || ["original", "compressed"],
                            sourceType: t.sourceType || ["album", "camera"]
                        }, function () {
                            return t._complete = function (t) {
                                if (S) {
                                    var e = t.localIds;
                                    e && (t.localIds = JSON.parse(e))
                                }
                            }, t
                        }())
                    }, previewImage: function (t) {
                        n(m.previewImage, {
                            current: t.current,
                            urls: t.urls
                        }, t)
                    }, uploadImage: function (t) {
                        n("uploadImage", {
                            localId: t.localId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        }, t)
                    }, downloadImage: function (t) {
                        n("downloadImage", {
                            serverId: t.serverId,
                            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                        }, t)
                    }, getNetworkType: function (t) {
                        var e = function (t) {
                            var e, n, i, r = t.errMsg;
                            if (t.errMsg = "getNetworkType:ok", e = t.subtype, delete t.subtype, e) t.networkType = e;
                            else switch (n = r.indexOf(":"), i = r.substring(n + 1)) {
                            case "wifi":
                            case "edge":
                            case "wwan":
                                t.networkType = i;
                                break;
                            default:
                                t.errMsg = "getNetworkType:fail"
                            }
                            return t
                        };
                        n("getNetworkType", {}, function () {
                            return t._complete = function (t) {
                                t = e(t)
                            }, t
                        }())
                    }, openLocation: function (t) {
                        n("openLocation", {
                            latitude: t.latitude,
                            longitude: t.longitude,
                            name: t.name || "",
                            address: t.address || "",
                            scale: t.scale || 28,
                            infoUrl: t.infoUrl || ""
                        }, t)
                    }, getLocation: function (t) {
                        t = t || {}, n(m.getLocation, {
                            type: t.type || "wgs84"
                        }, function () {
                            return t._complete = function (t) {
                                delete t.type
                            }, t
                        }())
                    }, hideOptionMenu: function (t) {
                        n("hideOptionMenu", {}, t)
                    }, showOptionMenu: function (t) {
                        n("showOptionMenu", {}, t)
                    }, closeWindow: function (t) {
                        t = t || {}, n("closeWindow", {}, t)
                    }, hideMenuItems: function (t) {
                        n("hideMenuItems", {
                            menuList: t.menuList
                        }, t)
                    }, showMenuItems: function (t) {
                        n("showMenuItems", {
                            menuList: t.menuList
                        }, t)
                    }, hideAllNonBaseMenuItem: function (t) {
                        n("hideAllNonBaseMenuItem", {}, t)
                    }, showAllNonBaseMenuItem: function (t) {
                        n("showAllNonBaseMenuItem", {}, t)
                    }, scanQRCode: function (t) {
                        t = t || {}, n("scanQRCode", {
                            needResult: t.needResult || 0,
                            scanType: t.scanType || ["qrCode", "barCode"]
                        }, function () {
                            return t._complete = function (t) {
                                var e, n;
                                C && (e = t.resultStr, e && (n = JSON.parse(e), t.resultStr = n && n.scan_code && n.scan_code.scan_result))
                            }, t
                        }())
                    }, openProductSpecificView: function (t) {
                        n(m.openProductSpecificView, {
                            pid: t.productId,
                            view_type: t.viewType || 0,
                            ext_info: t.extInfo
                        }, t)
                    }, addCard: function (t) {
                        var e, i, r, a, s = t.cardList,
                            o = [];
                        for (e = 0, i = s.length; i > e; ++e) r = s[e], a = {
                            card_id: r.cardId,
                            card_ext: r.cardExt
                        }, o.push(a);
                        n(m.addCard, {
                            card_list: o
                        }, function () {
                            return t._complete = function (t) {
                                var e, n, i, r = t.card_list;
                                if (r) {
                                    for (r = JSON.parse(r), e = 0, n = r.length; n > e; ++e) i = r[e], i.cardId = i.card_id, i.cardExt = i.card_ext, i.isSuccess = !!i.is_succ, delete i.card_id, delete i.card_ext, delete i.is_succ;
                                    t.cardList = r, delete t.card_list
                                }
                            }, t
                        }())
                    }, chooseCard: function (t) {
                        n("chooseCard", {
                            app_id: L.appId,
                            location_id: t.shopId || "",
                            sign_type: t.signType || "SHA1",
                            card_id: t.cardId || "",
                            card_type: t.cardType || "",
                            card_sign: t.cardSign,
                            time_stamp: t.timestamp + "",
                            nonce_str: t.nonceStr
                        }, function () {
                            return t._complete = function (t) {
                                t.cardList = t.choose_card_info, delete t.choose_card_info
                            }, t
                        }())
                    }, openCard: function (t) {
                        var e, i, r, a, s = t.cardList,
                            o = [];
                        for (e = 0, i = s.length; i > e; ++e) r = s[e], a = {
                            card_id: r.cardId,
                            code: r.code
                        }, o.push(a);
                        n(m.openCard, {
                            card_list: o
                        }, t)
                    }, chooseWXPay: function (t) {
                        n(m.chooseWXPay, a(t), t)
                    }
                }, e && (t.wx = t.jWeixin = A), A
            }
            var v = n("6199"),
                y = n.n(v),
                g = "//bird.if.iqiyi.com/wechat/jsapi_ticket",
                b = "wx85e5e7f44c7cc50e";

            function w(t) {
                return p(g, {
                    params: {
                        appid: t || b
                    }
                }).then(function (t) {
                    var e = t.data;
                    return "A0000" === e.code ? e.jsapi_ticket : ""
                })
            }

            function k() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = m(window);
                return t = e.jsApiTicket ? o.a.resolve(e.jsApiTicket) : w(e.appid), t.then(function (t) {
                    if (t) {
                        var i = Math.random().toString(36).substr(2),
                            r = a()(),
                            s = y()("jsapi_ticket=".concat(t, "&noncestr=").concat(i, "&timestamp=").concat(r, "&url=").concat(location.href.split("#")[0])),
                            c = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "onVoicePlayEnd", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"];
                        return new o.a(function (t, a) {
                            n.ready(function () {
                                t(n)
                            }), n.error(function () {
                                a(n)
                            }), n.config({
                                debug: !0 === e.debug,
                                appId: e.appId || b,
                                timestamp: r,
                                nonceStr: i,
                                signature: s,
                                jsApiList: e.jsApiList || c
                            })
                        })
                    }
                    return o.a.reject(new Error("ticket is null"))
                })
            }
            var _ = n("8296");

            function x() {
                return S.apply(this, arguments)
            }

            function S() {
                return S = Object(i["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (e = i.length > 0 && void 0 !== i[0] ? i[0] : {}, _["p"].weixin) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return t.next = 5, j();
                        case 5:
                            return n = t.sent, t.abrupt("return", n && n.onMenuShareTimeline(e));
                        case 7:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), S.apply(this, arguments)
            }

            function C(t) {
                return O.apply(this, arguments)
            }

            function O() {
                return O = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (_["p"].weixin) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4, j();
                        case 4:
                            return n = t.sent, t.abrupt("return", n && n.onMenuShareAppMessage(e));
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), O.apply(this, arguments)
            }

            function j() {
                if (j.promise) return j.promise;
                var t = k();
                return j.promise = t, t.catch(function () {
                    j.promise = null
                })
            }
            n.d(e, "b", function () {
                return x
            }), n.d(e, "a", function () {
                return C
            })
        }, "2c8b": function (t, e, n) {
            "use strict";
            var i = function (t, e) {
                    var n = e._c;
                    return n("section", {
                        staticClass: "m-appeal-result"
                    }, [n("picture", {
                        staticClass: "result-img"
                    }, [n("source", {
                        attrs: {
                            srcset: e.props.imgDark || "//www.iqiyipic.com/common/fix/h5-passport3.0/result-succeed-dark.png",
                            media: "(prefers-color-scheme: dark)"
                        }
                    }), n("img", {
                        attrs: {
                            src: e.props.img
                        }
                    })]), n("div", {
                        staticClass: "result-title"
                    }, [e._v(e._s(e.props.title))]), n("div", {
                        staticClass: "result-info",
                        domProps: {
                            innerHTML: e._s(e.props.info)
                        }
                    }), e._t("action"), e._t("extra")], 2)
                },
                r = [],
                a = n("2877"),
                s = {},
                o = Object(a["a"])(s, i, r, !0, null, null, null);
            e["a"] = o.exports
        }, "2ecd": function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return i
            });
            n("ac6a"), n("f3e2"), n("0cd8"), n("c5f6");

            function i(t, e) {
                var n, i, r, a, s, o, c, u, l, d, p, h, f, m, v = 0,
                    y = -1,
                    g = null,
                    b = null,
                    w = null,
                    k = 0,
                    _ = {
                        handleEvent: function (t) {
                            switch (s && t.stopPropagation(), t.type) {
                            case "touchstart":
                                this.onTouchStart(t);
                                break;
                            case "touchmove":
                                this.onTouchMove(t);
                                break;
                            case "touchend":
                                this.onTouchEnd(t);
                                break;
                            case "webkitTransitionEnd":
                            case "msTransitionEnd":
                            case "oTransitionEnd":
                            case "otransitionend":
                            case "transitionend":
                                this.onTransitionEnd(t);
                                break
                            }
                        }, onTouchStart: function (t) {
                            var e = t.touches[0];
                            d = {
                                x: e.pageX,
                                y: e.pageY,
                                time: +new Date
                            }, p = void 0, h = {}
                        }, onTouchMove: function (t) {
                            if (a && t.preventDefault(), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                                a && t.preventDefault();
                                var e = t.touches[0];
                                h = {
                                    x: e.pageX - d.x,
                                    y: e.pageY - d.y
                                }, "undefined" === typeof p && (p = !!(p || Math.abs(h.x) < Math.abs(h.y))), p || (t.preventDefault(), R(), B($(v - 2), h.x + N(-2), 0), B($(v - 1), h.x + N(-1), 0), B($(v), h.x + N(0), 0), B($(v + 1), h.x + N(1), 0), B($(v + 2), h.x + N(2), 0))
                            }
                        }, onTouchEnd: function (t) {
                            var e = +new Date - d.time,
                                n = Number(e) < 250 && Math.abs(h.x) > 20 || Math.abs(h.x) > k / 2,
                                i = h.x < 0 ? -1 : 1;
                            !p && n ? (E(v, r, i), setTimeout(function () {
                                l(i, v, $(v))
                            }, 0)) : (B($(v - 2), N(-2), r), B($(v - 1), N(-1), r), B($(v), N(0), r), B($(v + 1), N(1), r), B($(v + 2), N(2), r)), I()
                        }, onTransitionEnd: function (t) {
                            var e = b.reduce(function (e, n, i) {
                                return n === t.target ? i : e
                            }, -1);
                            v === e && I()
                        }
                    };

                function x() {
                    t && t.children.length && (w = t, A(), S(e), j(), C(), I(), "undefined" !== typeof window && window.addEventListener("orientationchange" in window ? "orientationchange" : "resize", function (t) {
                        U()
                    }))
                }

                function S(t) {
                    t = t || {}, n = t.direction || "left", i = t.delay || 2e3, r = t.speed || 300, a = t.disableScroll || !1, s = t.stopPropagation || !1, o = t.startIndex || 0, c = !1 !== t.autoPlay, u = "function" === typeof t.callback ? t.callback : function () {}, l = "function" === typeof t.touchEndBack ? t.touchEndBack : function () {}
                }

                function C() {
                    v = o || 0, y = "left" === n ? -1 : 1, b.forEach(function (t) {
                        t.style.position = "absolute"
                    }), O(), T(), q(v), b.forEach(function (t) {
                        t.style.visibility = "visible"
                    })
                }

                function O() {
                    var t = b.length;
                    if (!(t >= 5)) {
                        switch (t) {
                        case 4:
                        case 3:
                            e();
                            break;
                        case 2:
                            e(2);
                            break;
                        case 1:
                            e(4);
                            break
                        }
                        A()
                    }

                    function e() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            n = document.createDocumentFragment();
                        while (e-- > 0)
                            for (var i = 0; i < t; i++) {
                                var r = b[i].cloneNode(!0);
                                r.classList.remove("selected"), n.appendChild(r)
                            }
                        w.appendChild(n)
                    }
                }

                function j() {
                    var e = t;
                    e.addEventListener("touchstart", _, !1), e.addEventListener("touchmove", _, !1), e.addEventListener("touchend", _, !1), e.addEventListener("webkitTransitionEnd", _, !1), e.addEventListener("msTransitionEnd", _, !1), e.addEventListener("oTransitionEnd", _, !1), e.addEventListener("otransitionend", _, !1), e.addEventListener("transitionend", _, !1)
                }

                function T() {
                    k = w.offsetWidth;
                    var t = $(v),
                        e = $(v + 1),
                        n = t.offsetWidth,
                        i = e.offsetWidth;
                    f = i, m = (k - n) / 2
                }

                function I() {
                    c && (g && R(), g = setTimeout(function () {
                        P()
                    }, i))
                }

                function P() {
                    E(v, r, y)
                }

                function L() {
                    E(v, r, -1 * y)
                }

                function R() {
                    clearTimeout(g)
                }

                function E(t, e, n) {
                    setTimeout(function () {
                        var i = $(t + 2 * n);
                        i.style.visibility = "hidden", B(i, N(-2 * n), 0), i.style.visibility = "visible", B($(t + 1 * n), N(2 * n), e), B($(t), N(1 * n), e);
                        var r = $(t - 1 * n);
                        Array.prototype.slice.call(r.parentNode.children).forEach(function (t) {
                            t.classList.remove("selected")
                        }), B(r, N(0), e), r.classList.add("selected"), B($(t - 2 * n), N(-1 * n), e), v = V(v - 1 * n), setTimeout(function () {
                            u(v, $(v))
                        }, 0)
                    }, 20)
                }

                function A() {
                    b = Array.prototype.slice.call(w.children)
                }

                function q(t) {
                    for (var e = 0, n = b.length; e < n; e++) {
                        var i = b[e],
                            r = e;
                        B(i, N(-2 * y), 0), i.setAttribute("data-index", r)
                    }
                    B($(t - 2), N(-2), 0), B($(t - 1), N(-1), 0), B($(t), N(0), 0), B($(t + 1), N(1), 0), B($(t + 2), N(2), 0)
                }

                function N(t) {
                    var e, n = m,
                        i = -f + m,
                        r = k - m;
                    return 0 === t ? e = n : t < 0 ? e = i + (t + 1) * f : t > 0 && (e = r + (t - 1) * f), e
                }

                function $(t) {
                    return b[V(t)]
                }

                function V(t) {
                    return (b.length + t % b.length) % b.length
                }

                function B(t, e, n) {
                    var i = t,
                        r = i && i.style;
                    r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + "ms", r.webkitTransform = "translate(" + e + "px,0)translateZ(0)", r.msTransform = r.MozTransform = r.OTransform = "translateX(" + e + "px)")
                }

                function U() {
                    R(), setTimeout(function () {
                        T(), q(v), I()
                    }, 200)
                }
                return x(), {
                    start: function () {
                        I()
                    }, prev: function () {
                        R(), L()
                    }, next: function () {
                        R(), P()
                    }, stop: function () {
                        R()
                    }, refresh: function () {
                        U()
                    }
                }
            }
            "undefined" !== typeof window && (window.jQuery || window.Zepto) && function (t) {
                t.fn.Carousel = function (e) {
                    return this.each(function () {
                        t(this).data("Swipe", new i(t(this)[0], e))
                    })
                }
            }(window.jQuery || window.Zepto)
        }, 3115: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.show ? n("div", [n("BottomAppRecommend", {
                        attrs: {
                            cids: t.cids,
                            "filter-status": t.filterStatus,
                            utype: t.utype,
                            subtype: t.subtype,
                            rseat: t.rseat
                        },
                        on: {
                            close: t.close
                        }
                    })], 1) : t._e()
                },
                r = [],
                a = (n("759f"), n("0a0d")),
                s = n.n(a),
                o = n("8296"),
                c = n("4e77"),
                u = n("2c06"),
                l = n("bfde"),
                d = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.items.length ? n("section", {
                        staticClass: "m-iqyDown"
                    }, [n("div", {
                        staticClass: "iqy-items"
                    }, [n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.rseat,
                            expression: "rseat"
                        }],
                        staticClass: "close-item",
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-guideClose"
                    })]), n("div", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.rseat,
                            expression: "rseat"
                        }, {
                            name: "swipe",
                            rawName: "v-swipe",
                            value: t.swipeOptions,
                            expression: "swipeOptions"
                        }]
                    }, [n("ul", {
                        staticClass: "list-items"
                    }, [t._l(t.items, function (e, i) {
                        return n("li", {
                            key: i,
                            staticStyle: {
                                float: "left",
                                width: "100%",
                                position: "relative"
                            }
                        }, [n("ButtonDown", {
                            staticClass: "list-info",
                            attrs: {
                                "extral-options": t.extralOptions(e),
                                subtype: t.subtype,
                                href: "javascript:void(0);",
                                "to-page": "play",
                                "down-app-pos": "channelHome_nativeapp_down",
                                rseat: "603091_14"
                            }
                        }, [n("span", {
                            staticClass: "img",
                            style: "background-image:url(" + e.album_pic_url + ")"
                        }), n("div", {
                            staticClass: "info"
                        }, [n("div", {
                            staticClass: "c-title"
                        }, [t._v(t._s(e.album_name))]), e.hotNum ? n("div", {
                            staticClass: "c-des"
                        }, [t._v("热度" + t._s(e.hotNum) + "\n              ")]) : t._e()])])], 1)
                    }), t._m(0)], 2)]), t.index !== t.items.length ? n("ButtonDown", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.rseat,
                            expression: "rseat"
                        }],
                        attrs: {
                            "extral-options": t.extralOptions(t.items[t.index]),
                            subtype: t.subtype,
                            "to-page": "play",
                            "down-app-pos": "channelHome_nativeapp_down",
                            rseat: "603091_14"
                        }
                    }, [n("span", {
                        staticClass: "c-btn c-btn-hollow"
                    }, [t._v(t._s(t.callAppButton))])]) : t._e(), t.index === t.items.length ? n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.rseat,
                            expression: "rseat"
                        }],
                        attrs: {
                            href: "//www.iqiyi.com/common/flow_select_new.html?from=h52"
                        }
                    }, [n("span", {
                        staticClass: "c-btn c-btn-hollow"
                    }, [t._v("点击查看")])]) : t._e(), n("div", {
                        staticClass: "list-dot"
                    }, [n("div", {
                        staticClass: "dot-inner"
                    }, t._l(t.items.length + 1, function (e) {
                        return n("i", {
                            key: e,
                            staticClass: "dot-item",
                            class: {
                                selected: e === t.index + 1
                            }
                        })
                    }), 0)])], 1)]) : t._e()
                },
                p = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("li", {
                            staticStyle: {
                                float: "left",
                                width: "100%",
                                position: "relative"
                            }
                        }, [n("a", {
                            staticClass: "list-info",
                            attrs: {
                                href: "//www.iqiyi.com/common/flow_select_new.html?from=h52"
                            }
                        }, [n("span", {
                            staticClass: "img",
                            staticStyle: {
                                "background-image": "url(//www.iqiyipic.com/common/fix/h5-aura/iqydown-flow.jpg)"
                            }
                        }), n("div", {
                            staticClass: "info"
                        }, [n("div", {
                            staticClass: "c-title"
                        }, [t._v("打开爱奇艺APP，免流量看视频")])])])])
                    }
                ],
                h = (n("6d67"), n("96cf"), n("3b8d")),
                f = n("f112"),
                m = n("240d"),
                v = n("38ff"),
                y = n("5bcb"),
                g = n("936f"),
                b = {
                    name: "BottomAppRecommend",
                    components: {
                        ButtonDown: v["a"]
                    },
                    directives: {
                        swipe: y["a"]
                    },
                    props: {
                        cids: {
                            type: String,
                            default: ""
                        },
                        utype: {
                            type: String,
                            default: ""
                        },
                        filterStatus: {
                            type: String,
                            default: ""
                        },
                        subtype: {
                            type: String,
                            default: ""
                        },
                        rseat: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        var t = this;
                        return {
                            items: [],
                            index: 0,
                            swipeOptions: {
                                stopPropagation: !0,
                                startSlide: 0,
                                callback: function (e) {
                                    t.index = e
                                }, continuous: !0,
                                auto: 3e3
                            },
                            callAppButton: ""
                        }
                    }, mounted: function () {
                        this.init()
                    }, methods: {
                        init: function () {
                            var t = Object(h["a"])(regeneratorRuntime.mark(function t() {
                                var e, n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.t0 = this.utype, !this.filterStatus) {
                                            t.next = 5;
                                            break
                                        }
                                        t.t1 = this.filterStatus, t.next = 8;
                                        break;
                                    case 5:
                                        return t.next = 7, this.getFilterStatus();
                                    case 7:
                                        t.t1 = t.sent;
                                    case 8:
                                        return t.t2 = t.t1, t.t3 = this.cids, e = {
                                            utype: t.t0,
                                            filterStatus: t.t2,
                                            cids: t.t3,
                                            len: 4,
                                            dim: "hour",
                                            area: "m_iqiyi"
                                        }, t.next = 13, Object(f["a"])(e).catch(function () {
                                            return []
                                        });
                                    case 13:
                                        n = t.sent, n.length > 0 ? (this.items = n.map(function (t) {
                                            return t.album_pic_url = Object(m["a"])(t.album_pic_url, "160_90"), t
                                        }), this.callAppButton = "打开APP") : (this.items.push({
                                            album_pic_url: "//www.iqiyipic.com/common/fix/h5-v3/iqy-linklogo.png",
                                            album_name: "上客户端看，更高清！更流畅！"
                                        }), this.callAppButton = "立即安装");
                                    case 15:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getFilterStatus: function () {
                            var t = Object(h["a"])(regeneratorRuntime.mark(function t() {
                                var e, n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = "//pub.m.iqiyi.com/h5/main/filter/", t.next = 3, g["a"].jsonp(e).catch(function () {
                                            return !1
                                        });
                                    case 3:
                                        if (n = t.sent, !n || !n.data || "A00000" !== n.data.code) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return", n.data.data.filterStatus + "");
                                    case 8:
                                        return t.abrupt("return", !1);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        extralOptions: function (t) {
                            return {
                                aid: t && t.album_id,
                                tvid: t && t.tv_id,
                                cid: t && t.album_channel,
                                vid: t && t.vid,
                                video: t
                            }
                        }
                    }
                },
                w = b,
                k = n("2877"),
                _ = Object(k["a"])(w, d, p, !1, null, null, null),
                x = _.exports,
                S = n("5321"),
                C = {
                    name: "BottomAppBanner",
                    components: {
                        BottomAppRecommend: x
                    },
                    props: {
                        cids: {
                            type: String,
                            default: ""
                        },
                        filterStatus: {
                            type: String,
                            default: ""
                        },
                        utype: {
                            type: String,
                            default: ""
                        },
                        block: {
                            type: String,
                            default: ""
                        },
                        rseat: {
                            type: String,
                            default: ""
                        },
                        subtype: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            show: !1
                        }
                    }, mounted: function () {
                        Object(c["e"])(this.showBottom)
                    }, destroyed: function () {
                        Object(c["h"])(this.showBottom)
                    }, methods: {
                        init: function () {
                            if (!this.browserFilter() && !Object(l["b"])()) {
                                var t = +o["L"].getItem(u["n"]),
                                    e = 1728e5;
                                (!t || s()() - t > e) && (this.show = !0, Object(S["h"])({
                                    block: this.block
                                }))
                            }
                        }, browserFilter: function () {
                            return l["a"].some(function (t) {
                                return !!o["p"][t]
                            })
                        }, showBottom: function (t) {
                            t.scrollOffset.y > 110 && !this.show && this.init()
                        }, close: function () {
                            this.show = !1, o["L"].setItem(u["n"], s()())
                        }
                    }
                },
                O = C,
                j = Object(k["a"])(O, i, r, !1, null, null, null);
            e["a"] = j.exports
        }, 3260: function (t, e, n) {
            "use strict";
            var i = n("0a0d"),
                r = n.n(i);
            e["a"] = function (t) {
                var e = r()() - 1e3 * t,
                    n = new Date(1e3 * t),
                    i = new Date;
                return e < 6e4 ? "刚刚" : e < 36e5 ? "".concat(Math.floor(e / 6e4), "分钟前") : e > 36e5 && n.getDate() === i.getDate() ? "".concat(Math.floor(e / 36e5), "小时前") : e > 36e5 && n.getDate() + 1 === i.getDate() ? "昨天".concat(n.getHours(), "时").concat(n.getMinutes(), "分") : "".concat(n.getMonth() + 1, "月").concat(n.getDate(), "日")
            }
        }, "35e86": function (t, e, n) {
            "use strict";
            t.exports = {
                isString: function (t) {
                    return "string" === typeof t
                }, isObject: function (t) {
                    return "object" === typeof t && null !== t
                }, isNull: function (t) {
                    return null === t
                }, isNullOrUndefined: function (t) {
                    return null == t
                }
            }
        }, "360b": function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return o
            }), n.d(e, "a", function () {
                return c
            }), n.d(e, "c", function () {
                return u
            });
            n("96cf");
            var i = n("3b8d"),
                r = n("936f"),
                a = n("b2e7"),
                s = "//act.vip.iqiyi.com/interact/api/v2/show",
                o = "4",
                c = "12";

            function u() {
                return l.apply(this, arguments)
            }

            function l() {
                return l = Object(i["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, o, c, u, l, d = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = d.length > 0 && void 0 !== d[0] ? d[0] : {}, n = {
                                tv_id: e.qipuId,
                                cid: e.cid,
                                vt: e.vt,
                                P00001: Object(a["x"])(),
                                interfaceCode: "8e2577b5189352e0",
                                platform: "97ae2982356f69d8",
                                deviceID: Object(a["w"])(),
                                lang: "zh_CN",
                                app_lm: "cn"
                            }, t.next = 4, r["a"].get(s, {
                                params: n
                            }, {
                                timeout: 1e3
                            }).catch(function () {});
                        case 4:
                            return i = t.sent, o = i && i.data, c = {}, o && "A00000" === o.code && o.data && o.data[0] && (c.interfaceCode = o.data[0].interfaceCode, u = o.data[0].interfaceData || {}, "A00000" === u.respCode && (l = u.respData, l && (c.strategyCode = l.strategyCode, c.covers = l.covers, c.success = !0))), t.abrupt("return", c);
                        case 9:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), l.apply(this, arguments)
            }
        }, 37024: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                },
                r = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "m-box"
                        }, [n("div", {
                            staticClass: "m-box-items m-box-items-full cover"
                        }, [n("div", {
                            staticClass: "m-popup popup-yzm"
                        }, [n("div", {
                            staticClass: "m-yzm-code-wrap",
                            attrs: {
                                id: "slide"
                            }
                        })])])])
                    }
                ],
                a = (n("96cf"), n("3b8d")),
                s = n("0460"),
                o = {
                    name: "SecuritySlideCode",
                    props: {
                        token: {
                            type: String,
                            default: ""
                        },
                        isTw: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            slideVerify: null
                        }
                    }, mounted: function () {
                        var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(s["a"])({
                                        wrapper: document.getElementById("slide"),
                                        callback: this.callback,
                                        token: this.token,
                                        isTw: this.isTw
                                    });
                                case 2:
                                    this.slideVerify = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    destroyed: function () {
                        this.slideVerify.remove()
                    }, methods: {
                        callback: function (t) {
                            t && "A00000" === t.code ? (this.$emit("slideVerifySuccess", t), this.slideVerify.remove()) : this.$emit("slideVerifyFail", t)
                        }
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = l.exports
        }, "3a65": function (t, e, n) {
            "use strict";
            var i, r, a = n("48e0"),
                s = {
                    name: "DigitNumItem",
                    components: {
                        DigitItem: a["a"]
                    },
                    props: {
                        video: {
                            type: Object,
                            default: function () {}
                        },
                        selected: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    render: function () {
                        var t = arguments[0],
                            e = this.video,
                            n = [t("span", {
                                class: "num"
                            }, [e.pd]), t("div", {
                                class: "c-rt"
                            }, [e.upperRightCorner ? t("AuraVideoPicicon", {
                                attrs: {
                                    text: e.upperRightCorner,
                                    picicon: "c-picicon-s"
                                }
                            }) : null]), t("span", {
                                class: ["album-current", {
                                    hide: !this.selected
                                }]
                            }, [t("i", {
                                class: "c-glyphicon c-glyphicon-albumPlay"
                            })])];
                        return t(a["a"], {
                            attrs: {
                                playOptions: this.$attrs["play-options"],
                                clickHandle: this.$attrs["click-handle"],
                                mainVideo: this.$attrs["main-video"],
                                tag: this.$attrs["tag"],
                                video: this.video
                            }
                        }, [].concat(n))
                    }
                },
                o = s,
                c = n("2877"),
                u = Object(c["a"])(o, i, r, !1, null, null, null);
            e["a"] = u.exports
        }, "45bc": function (t, e, n) {
            "use strict";
            var i = n("8296");
            n.d(e, "c", function () {
                return i["w"]
            }), n.d(e, "b", function () {
                return i["r"]
            }), n.d(e, "a", function () {
                return i["o"]
            })
        }, "465e": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "m-pp-view-pic"
                    }, [n("ImageViewerTitle", {
                        attrs: {
                            images: t.images,
                            index: t.index
                        }
                    }), n("div", {
                        directives: [{
                            name: "swipe",
                            rawName: "v-swipe",
                            value: t.swipeOptions,
                            expression: "swipeOptions"
                        }],
                        staticClass: "pp-view-pic",
                        on: {
                            click: function (e) {
                                return t.hide()
                            }
                        }
                    }, [n("ul", {
                        staticClass: "list-pp-view-pic"
                    }, t._l(t.images, function (e, i) {
                        return n("li", {
                            key: i
                        }, [n("img", {
                            directives: [{
                                name: "image",
                                rawName: "v-image",
                                value: {
                                    defaultImage: t.thumbnails[i],
                                    load: !0
                                },
                                expression: "{defaultImage: thumbnails[index], load: true}"
                            }],
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                src: t.images[i].url
                            }
                        })])
                    }), 0)])], 1)
                },
                r = [],
                a = (n("c5f6"), function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "pp-view-pic_warn"
                    }, [t._v(t._s(t.title))])
                }),
                s = [],
                o = {
                    name: "ImageViewerTitle",
                    props: {
                        images: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        index: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        title: function () {
                            var t = this.images.length,
                                e = this.index;
                            return "".concat(e % t + 1, "/").concat(t)
                        }
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, a, s, !1, null, null, null),
                d = l.exports,
                p = n("5bcb"),
                h = {
                    inserted: function (t, e) {
                        if (t.dataset.src) t.setAttribute("src", t.dataset.src);
                        else {
                            var n = t.getAttribute("src"),
                                i = e.value,
                                r = i.defaultImage,
                                a = void 0 === r ? n : r,
                                s = i.load,
                                o = void 0 !== s && s;
                            a && t.setAttribute("src", a), o && m(t);
                            var c = new Image;
                            c.onload = function () {
                                t.dataset.src = "src", t.style.width = "auto", t.setAttribute("src", n), v(t)
                            }, c.onerror = function () {
                                v(t), f(t)
                            }, c.src = n
                        }
                    }
                };

            function f(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "加载失败 稍后重试",
                    n = document.createElement("div");
                n.innerHTML = '\n    <div class="m-toast">\n      <div class="info">\n        '.concat(e, "\n      </div>\n    </div>\n  "), t.appendChild(n)
            }

            function m(t) {
                var e = document.createElement("div");
                return e.innerHTML = '\n    <div class="m-loading-full">\n      <i class="icon-loading"></i>\n    </div>\n  ', t.appendChild(e), e
            }

            function v(t) {
                var e = t.parentNode.querySelector(".m-loading-full");
                e.style.display = "none"
            }
            var y = {
                    name: "ImageViewer",
                    components: {
                        ImageViewerTitle: d
                    },
                    directives: {
                        swipe: p["a"],
                        image: h
                    },
                    props: {
                        images: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        startIndex: {
                            type: Number,
                            default: 0
                        },
                        scrollTop: {
                            type: Number,
                            default: 0
                        },
                        thumbnails: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        }
                    },
                    data: function () {
                        var t = this;
                        return {
                            index: this.startIndex,
                            swipeOptions: {
                                stopPropagation: !0,
                                startSlide: this.startIndex,
                                callback: function (e, n) {
                                    t.index = e
                                }, continuous: 2 !== this.images.length
                            }
                        }
                    }, methods: {
                        hide: function () {
                            var t = this;
                            this.$emit("update:show", !1), this.$nextTick(function () {
                                document.body.scrollTop = t.scrollTop, document.documentElement.scrollTop = t.scrollTop
                            })
                        }
                    }
                },
                g = y,
                b = Object(u["a"])(g, i, r, !1, null, null, null);
            e["a"] = b.exports
        }, "469f": function (t, e, n) {
            n("6c1c"), n("1654"), t.exports = n("7d7b")
        }, "474a": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.defaultImage,
                            expression: "defaultImage"
                        }],
                        staticStyle: {
                            "margin-top": "-1000px",
                            position: "absolute"
                        },
                        attrs: {
                            src: "//www.iqiyipic.com/common/fix/iqiyi-wechat/logo.jpg"
                        }
                    })
                },
                r = [],
                a = n("cebc"),
                s = (n("b54a"), n("2af2")),
                o = n("8296"),
                c = {
                    name: "WechatShare",
                    props: {
                        options: {
                            type: Object,
                            default: function () {
                                return {
                                    title: "",
                                    desc: "",
                                    link: "",
                                    imgUrl: ""
                                }
                            }
                        },
                        defaultImage: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    watch: {
                        options: {
                            handler: function (t, e) {
                                this.refresh()
                            }, deep: !0
                        }
                    },
                    mounted: function () {
                        this.refresh()
                    }, methods: {
                        refresh: function () {
                            this.options.link || (this.options.link = location.href), this.options.imgUrl = Object(o["W"])(this.options.imgUrl), Object(s["b"])(Object(a["a"])({}, this.options, {
                                link: o["k"].addQuery(this.options.link, {
                                    weixin_platform: "moment"
                                })
                            })), Object(s["a"])(Object(a["a"])({}, this.options, {
                                link: o["k"].addQuery(this.options.link, {
                                    weixin_platform: "friend"
                                })
                            }))
                        }
                    }
                },
                u = c,
                l = n("2877"),
                d = Object(l["a"])(u, i, r, !1, null, null, null);
            e["a"] = d.exports
        }, "48e0": function (t, e, n) {
            "use strict";
            var i, r, a = n("cebc"),
                s = n("38ff"),
                o = n("21fd"),
                c = n("ba45"),
                u = n("ab22"),
                l = {
                    components: {
                        ButtonDown: s["a"]
                    },
                    props: {
                        playOptions: {
                            type: Object,
                            default: function () {}
                        },
                        video: {
                            type: Object,
                            default: function () {}
                        },
                        clickHandle: {
                            type: Function,
                            default: function () {}
                        },
                        tag: {
                            type: String,
                            default: "div"
                        },
                        mainVideo: {
                            type: Object,
                            default: function () {}
                        }
                    },
                    render: function () {
                        var t = this,
                            e = arguments[0],
                            n = this.video;
                        if (Object(o["v"])(n)) {
                            var i = Object(o["x"])(n),
                                r = i ? Object(u["i"])({
                                    videoInfo: this.mainVideo || {}, verticalVideoInfo: this.video || {}, vertical: i
                                }) : Object(a["a"])({}, Object(o["c"])(n), {
                                    video: n
                                });
                            return e(s["a"], {
                                attrs: {
                                    extralOptions: r,
                                    subtype: "H5syzh_1341",
                                    toPage: i ? c["g"] : c["f"],
                                    tag: "a"
                                }
                            }, [this.$slots.default])
                        }
                        var l = this.tag,
                            d = function () {
                                t.clickHandle(n)
                            };
                        return e(l, {
                            directives: [{
                                name: "play",
                                value: this.playOptions
                            }],
                            attrs: {
                                title: n.title,
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: d
                            }
                        }, [this.$slots.default])
                    }
                },
                d = l,
                p = n("2877"),
                h = Object(p["a"])(d, i, r, !1, null, null, null);
            e["a"] = h.exports
        }, "499e": function (t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = [], i = {}, r = 0; r < e.length; r++) {
                    var a = e[r],
                        s = a[0],
                        o = a[1],
                        c = a[2],
                        u = a[3],
                        l = {
                            id: t + ":" + r,
                            css: o,
                            media: c,
                            sourceMap: u
                        };
                    i[s] ? i[s].parts.push(l) : n.push(i[s] = {
                        id: s,
                        parts: [l]
                    })
                }
                return n
            }
            n.r(e), n.d(e, "default", function () {
                return f
            });
            var r = "undefined" !== typeof document;
            if ("undefined" !== typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var a = {},
                s = r && (document.head || document.getElementsByTagName("head")[0]),
                o = null,
                c = 0,
                u = !1,
                l = function () {},
                d = null,
                p = "data-vue-ssr-id",
                h = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function f(t, e, n, r) {
                u = n, d = r || {};
                var s = i(t, e);
                return m(s),
                    function (e) {
                        for (var n = [], r = 0; r < s.length; r++) {
                            var o = s[r],
                                c = a[o.id];
                            c.refs--, n.push(c)
                        }
                        e ? (s = i(t, e), m(s)) : s = [];
                        for (r = 0; r < n.length; r++) {
                            c = n[r];
                            if (0 === c.refs) {
                                for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                                delete a[c.id]
                            }
                        }
                    }
            }

            function m(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e],
                        i = a[n.id];
                    if (i) {
                        i.refs++;
                        for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                        for (; r < n.parts.length; r++) i.parts.push(y(n.parts[r]));
                        i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
                    } else {
                        var s = [];
                        for (r = 0; r < n.parts.length; r++) s.push(y(n.parts[r]));
                        a[n.id] = {
                            id: n.id,
                            refs: 1,
                            parts: s
                        }
                    }
                }
            }

            function v() {
                var t = document.createElement("style");
                return t.type = "text/css", s.appendChild(t), t
            }

            function y(t) {
                var e, n, i = document.querySelector("style[" + p + '~="' + t.id + '"]');
                if (i) {
                    if (u) return l;
                    i.parentNode.removeChild(i)
                }
                if (h) {
                    var r = c++;
                    i = o || (o = v()), e = b.bind(null, i, r, !1), n = b.bind(null, i, r, !0)
                } else i = v(), e = w.bind(null, i), n = function () {
                    i.parentNode.removeChild(i)
                };
                return e(t),
                    function (i) {
                        if (i) {
                            if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
                            e(t = i)
                        } else n()
                    }
            }
            var g = function () {
                var t = [];
                return function (e, n) {
                    return t[e] = n, t.filter(Boolean).join("\n")
                }
            }();

            function b(t, e, n, i) {
                var r = n ? "" : i.css;
                if (t.styleSheet) t.styleSheet.cssText = g(e, r);
                else {
                    var a = document.createTextNode(r),
                        s = t.childNodes;
                    s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(a, s[e]) : t.appendChild(a)
                }
            }

            function w(t, e) {
                var n = e.css,
                    i = e.media,
                    r = e.sourceMap;
                if (i && t.setAttribute("media", i), d.ssrId && t.setAttribute(p, e.id), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
                else {
                    while (t.firstChild) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
        }, "49ce": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.toggle,
                            expression: "toggle"
                        }]
                    }, [n("AuraToast", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "loading" === t.type,
                            expression: "type === 'loading'"
                        }],
                        staticClass: "toast-square",
                        attrs: {
                            text: t.content
                        }
                    }, [n("i", {
                        staticClass: "loading-icon"
                    })]), n("AuraToast", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "complete" === t.type,
                            expression: "type === 'complete'"
                        }],
                        staticClass: "toast-square",
                        attrs: {
                            text: t.content
                        }
                    }, [n("i", {
                        staticClass: "success-icon"
                    })]), n("AuraToast", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "oneline" === t.type,
                            expression: "type === 'oneline'"
                        }],
                        attrs: {
                            text: t.content
                        }
                    })], 1)
                },
                r = [],
                a = (n("c5f6"), n("57e7"), {
                    name: "UserAccountTip",
                    props: {
                        type: {
                            required: !0,
                            type: String,
                            default: "none",
                            validator: function (t) {
                                return ["none", "loading", "complete", "oneline"].indexOf(t) > -1
                            }
                        },
                        content: {
                            type: String,
                            default: ""
                        },
                        delayTime: {
                            type: Number,
                            default: 3e3
                        },
                        toggle: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            timer: null
                        }
                    }, watch: {
                        toggle: function (t, e) {
                            this.toggle && this.autoHide()
                        }, delayTime: function (t, e) {
                            this.autoHide()
                        }
                    }, methods: {
                        autoHide: function () {
                            var t = this;
                            this.delayTime > -1 && (clearTimeout(this.timer), this.timer = setTimeout(function () {
                                return t.$emit("update:toggle", !1)
                            }, this.delayTime))
                        }
                    }
                }),
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, "4cb4": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "input-label"
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-arrowDown"
                    }), n("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.areaCode,
                            expression: "areaCode"
                        }],
                        staticClass: "input-select",
                        on: {
                            change: function (e) {
                                var n = Array.prototype.filter.call(e.target.options, function (t) {
                                    return t.selected
                                }).map(function (t) {
                                    var e = "_value" in t ? t._value : t.value;
                                    return e
                                });
                                t.areaCode = e.target.multiple ? n : n[0]
                            }
                        }
                    }, t._l(t.areaList, function (e, i) {
                        return n("option", {
                            key: i,
                            domProps: {
                                value: e.acode
                            }
                        }, [t._v("\n      " + t._s(e.name) + "\n    ")])
                    }), 0)])
                },
                r = [],
                a = (n("96cf"), n("3b8d")),
                s = n("dd38"),
                o = {
                    name: "SecurityAreaCode",
                    props: {
                        useCase: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            areaCode: 86,
                            areaList: [{
                                name: this.$i18n.t("area").CN,
                                acode: 86
                            }, {
                                name: this.$i18n.t("area").TW,
                                acode: 886
                            }]
                        }
                    }, watch: {
                        areaCode: function () {
                            this.updateAreaCode()
                        }
                    }, mounted: function () {
                        this.updateAreaCode(), this.getAreaCodeList()
                    }, methods: {
                        updateAreaCode: function () {
                            this.$emit("update:areaCode", this.areaCode)
                        }, getAreaCodeList: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(s["d"])({
                                            useCase: this.useCase
                                        });
                                    case 2:
                                        e = t.sent, this.areaList = e && e.list || [];
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = l.exports
        }, "4f63": function (t, e, n) {
            "use strict";
            var i = n("d0f9"),
                r = n.n(i);
            r.a
        }, "4fa6": function (t, e, n) {
            "use strict";

            function i(t) {
                t && (location.href = t)
            }
            e["a"] = {
                bind: function (t, e, n) {
                    t.hrefClick = function () {
                        i(e.value.url)
                    }, t.addEventListener("click", t.hrefClick)
                }, unbind: function (t) {
                    t.removeEventListener("click", t.hrefClick)
                }
            }
        }, "50b8": function (t, e, n) {
            "use strict";
            var i = function (t, e) {
                    e._c;
                    return e._m(0)
                },
                r = [
                    function (t, e) {
                        var n = e._c;
                        return n("div", {
                            staticClass: "m-cancelAppeal-headLogo"
                        }, [n("div", {
                            staticClass: "logo-iqiyi-green"
                        })])
                    }
                ],
                a = n("2877"),
                s = {},
                o = Object(a["a"])(s, i, r, !0, null, null, null);
            e["a"] = o.exports
        }, 5118: function (t, e, n) {
            (function (t) {
                var i = "undefined" !== typeof t && t || "undefined" !== typeof self && self || window,
                    r = Function.prototype.apply;

                function a(t, e) {
                    this._id = t, this._clearFn = e
                }
                e.setTimeout = function () {
                    return new a(r.call(setTimeout, i, arguments), clearTimeout)
                }, e.setInterval = function () {
                    return new a(r.call(setInterval, i, arguments), clearInterval)
                }, e.clearTimeout = e.clearInterval = function (t) {
                    t && t.close()
                }, a.prototype.unref = a.prototype.ref = function () {}, a.prototype.close = function () {
                    this._clearFn.call(i, this._id)
                }, e.enroll = function (t, e) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                }, e.unenroll = function (t) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                }, e._unrefActive = e.active = function (t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                        t._onTimeout && t._onTimeout()
                    }, e))
                }, n("6017"), e.setImmediate = "undefined" !== typeof self && self.setImmediate || "undefined" !== typeof t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" !== typeof self && self.clearImmediate || "undefined" !== typeof t && t.clearImmediate || this && this.clearImmediate
            }).call(this, n("483b"))
        }, 5846: function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return h
            }), n.d(e, "a", function () {
                return k
            });
            n("96cf"), n("ac6a"), n("f3e2");
            var i, r = n("a745"),
                a = n.n(r),
                s = (n("4917"), n("a481"), n("795b")),
                o = n.n(s),
                c = n("3b8d"),
                u = n("936f"),
                l = "//emoticon-sns.iqiyi.com/jaguar-core/query_config?bussiness=feedStatic",
                d = /(\[[^\[\]]*\])/g,
                p = null;

            function h() {
                return f.apply(this, arguments)
            }

            function f() {
                return f = Object(c["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, r, s, o, c, u = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = u.length > 0 && void 0 !== u[0] ? u[0] : 21, i = i || y(), t.next = 4, i;
                        case 4:
                            for (n = t.sent, r = [], s = [], n.data && a()(n.data) && n.data.forEach(function (t) {
                                s = s.concat(t.emoticonList)
                            }), o = Math.ceil(s.length / e), c = 0; c < o; c++) r.push(s.slice(c * e, (c + 1) * e));
                            return t.abrupt("return", r);
                        case 11:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), f.apply(this, arguments)
            }

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return v = Object(c["a"])(regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (!p) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", p);
                        case 2:
                            return i = i || y(), t.next = 5, i;
                        case 5:
                            return e = t.sent, p = {}, e.data && a()(e.data) && e.data.forEach(function (t) {
                                t.emoticonList.forEach(function (t) {
                                    p[t.content] = t.picUrl
                                })
                            }), t.abrupt("return", p);
                        case 9:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), v.apply(this, arguments)
            }

            function y() {
                return new o.a(function (t, e) {
                    u["a"].jsonp(l).then(function (n) {
                        "A00000" === n.data.code ? t(n.data) : e(n.data.msg)
                    }, function (t) {
                        e(t)
                    })
                })
            }

            function g(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return '<span data-content="'.concat(t, "\" class='c-emoji-pic' style='background-image:url(\"").concat(e.replace(/^https?:/, ""), "\");'></span>")
            }

            function b() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return t.replace(d, function (t) {
                    return e[t] ? g(t, e[t]) : t
                })
            }

            function w(t, e) {
                a()(t.data) ? t.data.forEach(function (n) {
                    n[t.key] = b(n[t.key], e), t.next && n[t.next.dataKey] && w({
                        data: n[t.next.dataKey],
                        key: t.next.key
                    }, e)
                }) : (t.data[t.key] = b(t.data[t.key], e), t.next && t.data[t.next.dataKey] && w({
                    data: t.data[t.next.dataKey],
                    key: t.next.key
                }, e))
            }

            function k(t) {
                return _.apply(this, arguments)
            }

            function _() {
                return _ = Object(c["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, m();
                        case 3:
                            n = t.sent, w(e, n), t.next = 10;
                            break;
                        case 7:
                            t.prev = 7, t.t0 = t["catch"](0), console.log(t.t0);
                        case 10:
                        case "end":
                            return t.stop()
                        }
                    }, t, null, [
                        [0, 7]
                    ])
                })), _.apply(this, arguments)
            }
        }, "59c3": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "m-box-items m-box-items-full",
                        on: {
                            click: t.onClick
                        }
                    }, [t._t("default", [n("div", {
                        class: t.btnClass
                    }, [n("div", {
                        staticClass: "btn-wrap"
                    }, [n("a", {
                        staticClass: "c-btn c-btn-block",
                        attrs: {
                            href: t.url
                        }
                    }, [n("span", {
                        class: t.titleClass
                    }, [t._v("\n            " + t._s(t.title) + "\n          ")])])])])], {
                        url: t.url,
                        title: t.title,
                        titleClass: t.titleClass,
                        btnClass: t.btnClass
                    })], 2)
                },
                r = [],
                a = {
                    name: "AuraFullButton",
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        url: {
                            type: String,
                            default: "javascript:void(0);"
                        },
                        titleClass: {
                            type: String,
                            default: ""
                        },
                        btnClass: {
                            type: String,
                            default: ""
                        },
                        customFace: {
                            type: String,
                            default: "false"
                        }
                    },
                    methods: {
                        onClick: function () {
                            this.$emit("click")
                        }
                    }
                },
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, "5bcb": function (t, e, n) {
            "use strict";
            var i = n("0a0d"),
                r = n.n(i),
                a = n("8296"),
                s = {};
            e["a"] = {
                inserted: function (t, e) {
                    var n = r()();
                    t.dataset.swipeId = n, s[n] = new a["i"](t, e.value || {})
                }, componentUpdated: function (t, e) {
                    var n = t.dataset.swipeId,
                        i = s[n];
                    i && i.setup()
                }, unbind: function (t) {
                    var e = t.dataset.swipeId,
                        n = s[e];
                    n && (delete s[e], n.kill())
                }
            }
        }, "5d73": function (t, e, n) {
            t.exports = n("469f")
        }, "5df3": function (t, e, n) {
            "use strict";
            var i = n("02f4")(!0);
            n("01f9")(String, "String", function (t) {
                this._t = String(t), this._i = 0
            }, function () {
                var t, e = this._t,
                    n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = i(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        }, 6017: function (t, e, n) {
            (function (t, e) {
                (function (t, n) {
                    "use strict";
                    if (!t.setImmediate) {
                        var i, r = 1,
                            a = {},
                            s = !1,
                            o = t.document,
                            c = Object.getPrototypeOf && Object.getPrototypeOf(t);
                        c = c && c.setTimeout ? c : t, "[object process]" === {}.toString.call(t.process) ? h() : f() ? m() : t.MessageChannel ? v() : o && "onreadystatechange" in o.createElement("script") ? y() : g(), c.setImmediate = u, c.clearImmediate = l
                    }

                    function u(t) {
                        "function" !== typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var s = {
                            callback: t,
                            args: e
                        };
                        return a[r] = s, i(r), r++
                    }

                    function l(t) {
                        delete a[t]
                    }

                    function d(t) {
                        var e = t.callback,
                            i = t.args;
                        switch (i.length) {
                        case 0:
                            e();
                            break;
                        case 1:
                            e(i[0]);
                            break;
                        case 2:
                            e(i[0], i[1]);
                            break;
                        case 3:
                            e(i[0], i[1], i[2]);
                            break;
                        default:
                            e.apply(n, i);
                            break
                        }
                    }

                    function p(t) {
                        if (s) setTimeout(p, 0, t);
                        else {
                            var e = a[t];
                            if (e) {
                                s = !0;
                                try {
                                    d(e)
                                } finally {
                                    l(t), s = !1
                                }
                            }
                        }
                    }

                    function h() {
                        i = function (t) {
                            e.nextTick(function () {
                                p(t)
                            })
                        }
                    }

                    function f() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                n = t.onmessage;
                            return t.onmessage = function () {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }

                    function m() {
                        var e = "setImmediate$" + Math.random() + "$",
                            n = function (n) {
                                n.source === t && "string" === typeof n.data && 0 === n.data.indexOf(e) && p(+n.data.slice(e.length))
                            };
                        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), i = function (n) {
                            t.postMessage(e + n, "*")
                        }
                    }

                    function v() {
                        var t = new MessageChannel;
                        t.port1.onmessage = function (t) {
                            var e = t.data;
                            p(e)
                        }, i = function (e) {
                            t.port2.postMessage(e)
                        }
                    }

                    function y() {
                        var t = o.documentElement;
                        i = function (e) {
                            var n = o.createElement("script");
                            n.onreadystatechange = function () {
                                p(e), n.onreadystatechange = null, t.removeChild(n), n = null
                            }, t.appendChild(n)
                        }
                    }

                    function g() {
                        i = function (t) {
                            setTimeout(p, 0, t)
                        }
                    }
                })("undefined" === typeof self ? "undefined" === typeof t ? this : t : self)
            }).call(this, n("483b"), n("4362"))
        }, 6199: function (module, exports, __webpack_require__) {
            (function (process, global) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                /*
                 * [js-sha1]{@link https://github.com/emn178/js-sha1}
                 *
                 * @version 0.6.0
                 * @author Chen, Yi-Cyuan [emn178@gmail.com]
                 * @copyright Chen, Yi-Cyuan 2014-2017
                 * @license MIT
                 */
                /*
                 * [js-sha1]{@link https://github.com/emn178/js-sha1}
                 *
                 * @version 0.6.0
                 * @author Chen, Yi-Cyuan [emn178@gmail.com]
                 * @copyright Chen, Yi-Cyuan 2014-2017
                 * @license MIT
                 */
                (function () {
                    "use strict";
                    var root = "object" === typeof window ? window : {},
                        NODE_JS = !root.JS_SHA1_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node;
                    NODE_JS && (root = global);
                    var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && "object" === typeof module && module.exports,
                        AMD = __webpack_require__("1140"),
                        HEX_CHARS = "0123456789abcdef".split(""),
                        EXTRA = [-2147483648, 8388608, 32768, 128],
                        SHIFT = [24, 16, 8, 0],
                        OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
                        blocks = [],
                        createOutputMethod = function (t) {
                            return function (e) {
                                return new Sha1(!0).update(e)[t]()
                            }
                        },
                        createMethod = function () {
                            var t = createOutputMethod("hex");
                            NODE_JS && (t = nodeWrap(t)), t.create = function () {
                                return new Sha1
                            }, t.update = function (e) {
                                return t.create().update(e)
                            };
                            for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                                var n = OUTPUT_TYPES[e];
                                t[n] = createOutputMethod(n)
                            }
                            return t
                        },
                        nodeWrap = function (method) {
                            var crypto = eval("require('crypto')"),
                                Buffer = eval("require('buffer').Buffer"),
                                nodeMethod = function (t) {
                                    if ("string" === typeof t) return crypto.createHash("sha1").update(t, "utf8").digest("hex");
                                    if (t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                    else if (void 0 === t.length) return method(t);
                                    return crypto.createHash("sha1").update(new Buffer(t)).digest("hex")
                                };
                            return nodeMethod
                        };

                    function Sha1(t) {
                        t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                    }
                    Sha1.prototype.update = function (t) {
                        if (!this.finalized) {
                            var e = "string" !== typeof t;
                            e && t.constructor === root.ArrayBuffer && (t = new Uint8Array(t));
                            var n, i, r = 0,
                                a = t.length || 0,
                                s = this.blocks;
                            while (r < a) {
                                if (this.hashed && (this.hashed = !1, s[0] = this.block, s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), e)
                                    for (i = this.start; r < a && i < 64; ++r) s[i >> 2] |= t[r] << SHIFT[3 & i++];
                                else
                                    for (i = this.start; r < a && i < 64; ++r) n = t.charCodeAt(r), n < 128 ? s[i >> 2] |= n << SHIFT[3 & i++] : n < 2048 ? (s[i >> 2] |= (192 | n >> 6) << SHIFT[3 & i++], s[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++]) : n < 55296 || n >= 57344 ? (s[i >> 2] |= (224 | n >> 12) << SHIFT[3 & i++], s[i >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & i++], s[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++r)), s[i >> 2] |= (240 | n >> 18) << SHIFT[3 & i++], s[i >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & i++], s[i >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & i++], s[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++]);
                                this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.block = s[16], this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                        }
                    }, Sha1.prototype.finalize = function () {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var t = this.blocks,
                                e = this.lastByteIndex;
                            t[16] = this.block, t[e >> 2] |= EXTRA[3 & e], this.block = t[16], e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash()
                        }
                    }, Sha1.prototype.hash = function () {
                        var t, e, n, i = this.h0,
                            r = this.h1,
                            a = this.h2,
                            s = this.h3,
                            o = this.h4,
                            c = this.blocks;
                        for (e = 16; e < 80; ++e) n = c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16], c[e] = n << 1 | n >>> 31;
                        for (e = 0; e < 20; e += 5) t = r & a | ~r & s, n = i << 5 | i >>> 27, o = n + t + o + 1518500249 + c[e] << 0, r = r << 30 | r >>> 2, t = i & r | ~i & a, n = o << 5 | o >>> 27, s = n + t + s + 1518500249 + c[e + 1] << 0, i = i << 30 | i >>> 2, t = o & i | ~o & r, n = s << 5 | s >>> 27, a = n + t + a + 1518500249 + c[e + 2] << 0, o = o << 30 | o >>> 2, t = s & o | ~s & i, n = a << 5 | a >>> 27, r = n + t + r + 1518500249 + c[e + 3] << 0, s = s << 30 | s >>> 2, t = a & s | ~a & o, n = r << 5 | r >>> 27, i = n + t + i + 1518500249 + c[e + 4] << 0, a = a << 30 | a >>> 2;
                        for (; e < 40; e += 5) t = r ^ a ^ s, n = i << 5 | i >>> 27, o = n + t + o + 1859775393 + c[e] << 0, r = r << 30 | r >>> 2, t = i ^ r ^ a, n = o << 5 | o >>> 27, s = n + t + s + 1859775393 + c[e + 1] << 0, i = i << 30 | i >>> 2, t = o ^ i ^ r, n = s << 5 | s >>> 27, a = n + t + a + 1859775393 + c[e + 2] << 0, o = o << 30 | o >>> 2, t = s ^ o ^ i, n = a << 5 | a >>> 27, r = n + t + r + 1859775393 + c[e + 3] << 0, s = s << 30 | s >>> 2, t = a ^ s ^ o, n = r << 5 | r >>> 27, i = n + t + i + 1859775393 + c[e + 4] << 0, a = a << 30 | a >>> 2;
                        for (; e < 60; e += 5) t = r & a | r & s | a & s, n = i << 5 | i >>> 27, o = n + t + o - 1894007588 + c[e] << 0, r = r << 30 | r >>> 2, t = i & r | i & a | r & a, n = o << 5 | o >>> 27, s = n + t + s - 1894007588 + c[e + 1] << 0, i = i << 30 | i >>> 2, t = o & i | o & r | i & r, n = s << 5 | s >>> 27, a = n + t + a - 1894007588 + c[e + 2] << 0, o = o << 30 | o >>> 2, t = s & o | s & i | o & i, n = a << 5 | a >>> 27, r = n + t + r - 1894007588 + c[e + 3] << 0, s = s << 30 | s >>> 2, t = a & s | a & o | s & o, n = r << 5 | r >>> 27, i = n + t + i - 1894007588 + c[e + 4] << 0, a = a << 30 | a >>> 2;
                        for (; e < 80; e += 5) t = r ^ a ^ s, n = i << 5 | i >>> 27, o = n + t + o - 899497514 + c[e] << 0, r = r << 30 | r >>> 2, t = i ^ r ^ a, n = o << 5 | o >>> 27, s = n + t + s - 899497514 + c[e + 1] << 0, i = i << 30 | i >>> 2, t = o ^ i ^ r, n = s << 5 | s >>> 27, a = n + t + a - 899497514 + c[e + 2] << 0, o = o << 30 | o >>> 2, t = s ^ o ^ i, n = a << 5 | a >>> 27, r = n + t + r - 899497514 + c[e + 3] << 0, s = s << 30 | s >>> 2, t = a ^ s ^ o, n = r << 5 | r >>> 27, i = n + t + i - 899497514 + c[e + 4] << 0, a = a << 30 | a >>> 2;
                        this.h0 = this.h0 + i << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + a << 0, this.h3 = this.h3 + s << 0, this.h4 = this.h4 + o << 0
                    }, Sha1.prototype.hex = function () {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            n = this.h2,
                            i = this.h3,
                            r = this.h4;
                        return HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r]
                    }, Sha1.prototype.toString = Sha1.prototype.hex, Sha1.prototype.digest = function () {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            n = this.h2,
                            i = this.h3,
                            r = this.h4;
                        return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
                    }, Sha1.prototype.array = Sha1.prototype.digest, Sha1.prototype.arrayBuffer = function () {
                        this.finalize();
                        var t = new ArrayBuffer(20),
                            e = new DataView(t);
                        return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), t
                    };
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.sha1 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                        return exports
                    }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                })()
            }).call(this, __webpack_require__("4362"), __webpack_require__("483b"))
        }, 6330: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.show ? n("div", {
                        staticClass: "m-player-tip"
                    }, [t._m(0)]) : t._e()
                },
                r = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "player-tip-inner"
                        }, [n("div", {
                            staticClass: "c-player-tip-info"
                        }, [t._v("\n      很抱歉"), n("br"), t._v("当前视频暂时无法播放，请您稍后再试\n    ")]), n("a", {
                            staticClass: "c-btn",
                            attrs: {
                                href: "//m.iqiyi.com/"
                            }
                        }, [t._v("\n      去看看其他视频\n    ")])])
                    }
                ],
                a = {
                    name: "VideoLayerDefaultError",
                    props: {
                        show: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    watch: {
                        show: function (t) {
                            t && this.$parent.$emit("layerShow", {
                                type: "defaultError"
                            })
                        }
                    }
                },
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, "657d": function (t, e, n) {
            e = t.exports = n("2350")(!1), e.push([t.i, ".list-leave-active[data-v-7ca2c801]{transition:all .5s ease-out}.list-leave-to[data-v-7ca2c801]{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}", ""])
        }, "657e": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("transition-group", {
                        staticClass: "list-items",
                        attrs: {
                            appear: !1,
                            name: "list",
                            tag: "ul"
                        }
                    }, t._l(t.users, function (e) {
                        return e.nickName && e.uid ? n("li", {
                            key: e.uid
                        }, [n("a", {
                            directives: [{
                                name: "pingback",
                                rawName: "v-pingback",
                                value: t.pingback.itemPingback,
                                expression: "pingback.itemPingback"
                            }],
                            staticClass: "items-link",
                            attrs: {
                                href: "/u/" + e.uid
                            }
                        }, [n("div", {
                            staticClass: "photo"
                        }, [n("img", {
                            attrs: {
                                src: e.icon
                            }
                        })]), n("div", {
                            staticClass: "content"
                        }, [n("div", {
                            staticClass: "title"
                        }, [n("span", {
                            staticClass: "c-name"
                        }, [t._v(t._s(e.nickName))]), 1 === e.mark || 2 === e.mark ? n("i", {
                            staticClass: "icon-home-i"
                        }) : t._e(), 2 === e.mark ? n("i", {
                            staticClass: "icon-home-mt"
                        }) : t._e()]), n("div", {
                            staticClass: "info"
                        }, [n("div", {
                            staticClass: "c-desc"
                        }, [t._v(t._s(e.recommand))]), n("div", {
                            staticClass: "c-num"
                        }, [t._v("\n              " + t._s(t._f("formatNum")(e.followedCount)) + "人关注\n            ")])])])]), t._t("default", [n("SubButton", {
                            attrs: {
                                status: e.friend.status,
                                uid: e.friend.uid,
                                "sub-pingback": t.pingback.subPingback,
                                "update-pingback": t.pingback.updatePingback
                            },
                            on: {
                                add: function (n) {
                                    return t.onAdd(e)
                                }
                            }
                        })], {
                            user: e
                        })], 2) : t._e()
                    }), 0)], 1)
                },
                r = [],
                a = (n("96cf"), n("3b8d")),
                s = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t.status === t.notSubScribed ? n("span", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.subPingback,
                            expression: "subPingback"
                        }],
                        key: "subscribe",
                        staticClass: "handle",
                        on: {
                            click: function (e) {
                                return t.$emit("add")
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-guideClose"
                    }), t._v("关注\n  ")]) : n("span", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.updatePingback,
                            expression: "updatePingback"
                        }],
                        key: "toFriend",
                        staticClass: "handle",
                        staticStyle: {
                            cursor: "pointer"
                        },
                        attrs: {
                            href: "/u/" + t.uid
                        }
                    }, [t._v("查看更新")])])
                },
                o = [],
                c = (n("c5f6"), n("1533")),
                u = {
                    name: "SubButton",
                    props: {
                        status: {
                            type: Number,
                            required: !0
                        },
                        uid: {
                            type: [String, Number],
                            required: !0
                        },
                        subPingback: {
                            type: String,
                            default: ""
                        },
                        updatePingback: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            notSubScribed: c["a"]
                        }
                    }
                },
                l = u,
                d = n("2877"),
                p = Object(d["a"])(l, s, o, !1, null, null, null),
                h = p.exports,
                f = n("45bc"),
                m = n("b2e7"),
                v = {
                    name: "SubList",
                    components: {
                        SubButton: h
                    },
                    filters: {
                        formatNum: f["c"]
                    },
                    props: {
                        users: {
                            type: Array,
                            default: null
                        },
                        pingback: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        }
                    },
                    methods: {
                        onAdd: function (t) {
                            Object(m["M"])() ? this.addFriend(t) : window.location.href = "/user.html"
                        }, addFriend: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                                var n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Object(c["c"])({
                                            uids: e.uid
                                        });
                                    case 3:
                                        n = t.sent, n ? this.$emit("addSuccess", e) : this.$emit("addFailure", e), t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), this.$emit("addFailure", e);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this, [
                                    [0, 7]
                                ])
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                y = v,
                g = (n("120a"), Object(d["a"])(y, i, r, !1, null, "7ca2c801", null));
            e["a"] = g.exports
        }, "666d": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.walls.length > 1 ? n("div", {
                        staticClass: "m-box",
                        attrs: {
                            name: "m-paopao"
                        }
                    }, [n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("AuraCardTitle", {
                        attrs: {
                            title: t.title
                        }
                    })], 1), n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("VideoStarCircleList", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.itemPingback,
                            expression: "itemPingback"
                        }],
                        class: t.classForList,
                        attrs: {
                            walls: t.walls
                        }
                    })], 1)]) : t._e()
                },
                r = [],
                a = (n("7514"), n("6d67"), n("d25f"), n("96cf"), n("3b8d")),
                s = (n("c5f6"), function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        directives: [{
                            name: "scroll",
                            rawName: "v-scroll.scrollX",
                            value: {
                                eventPassthrough: "vertical"
                            },
                            expression: "{eventPassthrough: 'vertical'}",
                            modifiers: {
                                scrollX: !0
                            }
                        }],
                        staticClass: "m-starCircle-list m-sliding"
                    }, [n("ul", {
                        staticClass: "list-items m-sliding-list"
                    }, t._l(t.walls, function (e) {
                        return n("li", {
                            key: e.id
                        }, [e.pageUrl ? n("a", {
                            staticClass: "star-link",
                            attrs: {
                                href: e.pageUrl
                            }
                        }, [n("span", {
                            staticClass: "c-photo",
                            style: {
                                "background-image": "url(" + e.icon + ")"
                            }
                        }), n("span", {
                            staticClass: "c-title"
                        }, [t._v(t._s(e.name))]), e.desc ? n("span", {
                            staticClass: "c-des"
                        }, [t._v(t._s(e.desc))]) : t._e()]) : t._e()])
                    }), 0)])
                }),
                o = [],
                c = {
                    name: "VideoStarCircleList",
                    props: {
                        walls: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        }
                    }
                },
                u = c,
                l = n("2877"),
                d = Object(l["a"])(u, s, o, !1, null, null, null),
                p = d.exports,
                h = n("00b9"),
                f = {
                    name: "AlbumStarCircle",
                    components: {
                        VideoStarCircleList: p
                    },
                    props: {
                        min: {
                            type: Number,
                            default: 3
                        },
                        max: {
                            type: Number,
                            default: 1 / 0
                        },
                        maCircleIds: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        characters: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        itemPingback: {
                            type: String,
                            default: ""
                        },
                        classForList: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            walls: []
                        }
                    }, computed: {
                        circleIds: function () {
                            var t = this.maCircleIds || [];
                            return t.length < this.min ? [] : t.length > this.max ? t.slice(0, this.max) : t
                        }
                    }, beforeMount: function () {
                        this.init()
                    }, methods: {
                        init: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e, n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.circleIds.length) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.next = 4, Object(h["c"])({
                                            wallIds: this.circleIds.join(",")
                                        });
                                    case 4:
                                        e = t.sent, e = e || [], n = this.getCharacters(), this.walls = this.circleIds.map(function (t, i) {
                                            var r = e.find(function (e) {
                                                return e.id === t
                                            });
                                            if (r) return r.pageUrl = "//m.iqiyi.com/m5/bubble/circleInfo_w".concat(r.id, "_p15.html#production"), n && (r.desc = n[i]), r
                                        }).filter(function (t) {
                                            return !!t
                                        });
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getCharacters: function () {
                            return this.characters.map(function (t) {
                                return t ? "饰".concat(t) : ""
                            })
                        }
                    }
                },
                m = f,
                v = Object(l["a"])(m, i, r, !1, null, null, null);
            e["a"] = v.exports
        }, 6810: function (t, e, n) {
            "use strict";
            n("c5f6");
            var i, r, a = n("ff9b"),
                s = n("c415"),
                o = {
                    name: "VideoList",
                    components: {
                        AuraVideoList: a["a"]
                    },
                    mixins: [s["a"]],
                    props: {
                        videos: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        pageSize: {
                            type: Number,
                            default: -1
                        },
                        end: {
                            type: Number,
                            default: -1
                        },
                        start: {
                            type: Number,
                            default: -1
                        },
                        remainder: {
                            type: Number,
                            default: 0
                        },
                        moreClass: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            page: 0,
                            linkMoreClass: {
                                a: "m-linkMoreBgBtn",
                                b: ""
                            },
                            refreshIconClass: {
                                a: "c-channelAll c-channelAll-refreshnew",
                                b: "c-glyphicon c-glyphicon-refreshnew"
                            }
                        }
                    }, computed: {
                        _videos: function () {
                            var t = this.videos;
                            if (this.end > -1 || this.start > -1) {
                                var e = this.start > -1 ? this.start : 0,
                                    n = this.end > -1 ? this.end : this.videos.length;
                                t = this.videos.slice(e, n)
                            }
                            if (this.remainder) {
                                var i = t.length,
                                    r = i - i % this.remainder;
                                t = t.slice(0, r)
                            }
                            return t
                        }, startVideoList: function () {
                            return this.start > -1 ? this.videos.slice(0, this.start) : []
                        }, videoList: function () {
                            return this.pageSize < 0 ? this._videos : this._videos.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize)
                        }, total: function () {
                            return this.pageSize < 0 ? 0 : Math.floor(this._videos.length / this.pageSize)
                        }
                    }, methods: {
                        switchPage: function () {
                            this.page = (this.page + 1) % this.total
                        }
                    }, render: function (t) {
                        if (this.videoList.length || this.startVideoList.length) {
                            var e = this.$scopedSlots.body ? this.$scopedSlots.body({
                                    videos: this.videoList,
                                    startVideos: this.startVideoList
                                }) : null,
                                n = null;
                            return (this.$slots.footer || this.total >= 2) && (n = t("section", {
                                class: [this.moreClass, "m-linkMore", this.linkMoreClass[this.abSample]]
                            }, [this.$slots.footer, this.total >= 2 && t("a", {
                                attrs: {
                                    href: "javascript:void(0);"
                                },
                                class: "m-link",
                                on: {
                                    click: this.switchPage
                                }
                            }, [t("i", {
                                class: this.refreshIconClass[this.abSample]
                            }), "换一批"])])), t("div", {
                                class: "m-box",
                                attrs: {
                                    name: "m-videoList"
                                }
                            }, [t("div", {
                                class: "m-box-items m-box-items-full"
                            }, [this.$slots.header]), t("div", {
                                class: "m-box-items m-box-items-full"
                            }, [e]), t("div", {
                                class: "m-box-items m-box-items-full"
                            }, [n]), this.$slots.extra])
                        }
                        return null
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = l.exports
        }, "686b": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.show ? n("div", [n("BottomHotWords", {
                        attrs: {
                            cid: t.cids,
                            rseat: t.rseat
                        }
                    })], 1) : t._e()
                },
                r = [],
                a = (n("96cf"), n("3b8d")),
                s = n("4e77"),
                o = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.hotWords.length ? n("section", {
                        staticClass: "m-hotWords-bottom"
                    }, [n("div", {
                        staticClass: "hotWords-wrap"
                    }, [n("div", {
                        staticClass: "hotWords-list"
                    }, t._l(t.hotWords, function (e, i) {
                        return n("a", {
                            directives: [{
                                name: "pingback",
                                rawName: "v-pingback",
                                value: t.rseat,
                                expression: "rseat"
                            }],
                            key: i,
                            staticClass: "c-link",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function (n) {
                                    return t.callSearch(e)
                                }
                            }
                        }, [n("i", {
                            class: "c-icon-hotWords hotWords-num" + (i + 1)
                        }), n("span", {
                            staticClass: "hot-info"
                        }, [t._v(t._s(e.query))]), n("i", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: i < 4,
                                expression: "index < 4"
                            }],
                            staticClass: "c-icon-hotWords",
                            class: t.hotWord(i)
                        })])
                    }), 0)])]) : t._e()
                },
                c = [],
                u = n("e814"),
                l = n.n(u),
                d = (n("57e7"), n("f112")),
                p = n("ba45"),
                h = n("8296"),
                f = {
                    name: "BottomHotWords",
                    props: {
                        cid: {
                            type: String,
                            default: ""
                        },
                        rseat: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            hotWords: {}
                        }
                    }, mounted: function () {
                        this.init()
                    }, methods: {
                        init: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e, n, i, r;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = [1, 2, 4, 6], n = e.indexOf(l()(this.cid)), i = n >= 0 ? this.cid : 0, r = {
                                            cid: i
                                        }, t.next = 6, Object(d["c"])(r);
                                    case 6:
                                        this.hotWords = t.sent;
                                    case 7:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        hotWord: function (t) {
                            return 0 === t || 1 === t ? "hotWords-fei" : "hotWords-re"
                        }, getSubType: function () {
                            var t = this.$GlobalSwitcher.getParams("player_bottom", "play");
                            if (t) return t.subtype
                        }, callSearch: function (t) {
                            Object(p["z"])({
                                keyword: Object(h["D"])(t.query),
                                source: "h5_hot",
                                subtype: this.getSubType()
                            }).catch(function () {
                                Object(p["k"])(Object(p["m"])())
                            })
                        }
                    }
                },
                m = f,
                v = n("2877"),
                y = Object(v["a"])(m, o, c, !1, null, null, null),
                g = y.exports,
                b = n("5321"),
                w = {
                    name: "BottomAppBannerHot",
                    components: {
                        BottomHotWords: g
                    },
                    props: {
                        cids: {
                            type: String,
                            default: ""
                        },
                        block: {
                            type: String,
                            default: ""
                        },
                        rseat: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            show: !1
                        }
                    }, mounted: function () {
                        Object(s["e"])(this.showBottom)
                    }, destroyed: function () {
                        Object(s["h"])(this.showBottom)
                    }, methods: {
                        init: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.$GlobalSwitcher.getFilters("player_bottom", "play");
                                    case 2:
                                        this.show = t.sent, Object(b["h"])({
                                            block: this.block
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        showBottom: function (t) {
                            t.scrollOffset.y > 110 && !this.show && this.init()
                        }
                    }
                },
                k = w,
                _ = Object(v["a"])(k, i, r, !1, null, null, null);
            e["a"] = _.exports
        }, "6e73": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        ref: "root"
                    }, [t._t("default")], 2)
                },
                r = [],
                a = (n("7514"), n("d92a"), n("c5f6"), n("0f32")),
                s = n.n(a),
                o = n("1fba"),
                c = {
                    name: "ScrollLoad",
                    props: {
                        callback: {
                            type: Function,
                            default: function () {
                                return null
                            }
                        },
                        loadCompleted: {
                            type: Boolean,
                            default: !1
                        },
                        length: {
                            type: Number,
                            default: 0
                        },
                        isInitLoad: {
                            type: Boolean,
                            default: !1
                        },
                        qipuId: {
                            type: Number,
                            default: 0
                        },
                        layerOpen: {
                            type: Boolean,
                            default: !0
                        },
                        isLoadMore: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            isLoading: !1,
                            scroll: null,
                            isPosition: !0
                        }
                    }, watch: {
                        length: function (t, e) {
                            t !== e && this.resetPostion()
                        }, qipuId: function (t, e) {
                            t === e || this.layerOpen || (this.isPosition = !0, this.resetPostion())
                        }, layerOpen: function (t) {
                            t || (this.isPosition = !0, this.initLoad(), this.resetPostion())
                        }
                    }, mounted: function () {
                        this.$nextTick(function () {
                            this.scroll = new o["a"](this.$refs.root, {
                                eventPassthrough: "vertical",
                                preventDefault: !0,
                                click: !1,
                                probeType: 2,
                                scrollX: !0
                            }), this.initLoad(), this.scrollToElement(), this.scroll.on("scroll", s()(function () {
                                this.scrollhandle()
                            }.bind(this)))
                        })
                    }, destroyed: function () {
                        this.scroll.off("scroll", this.scrollhandle.bind(this))
                    }, methods: {
                        initLoad: function () {
                            if (this.$refs.root.scrollWidth && this.$refs.root.scrollWidth >= Math.abs(this.scroll.maxScrollX) && this.callback && this.isInitLoad || this.isLoadMore) {
                                this.isPosition = !0;
                                var t = !this.isLoadMore;
                                this.scrollToElement(), this.loadMore(t)
                            }
                        }, resetPostion: function () {
                            this.$nextTick(function () {
                                this.scroll.refresh(), this.isPosition && this.scrollToElement()
                            })
                        }, scrollToElement: function () {
                            var t = this.getElement();
                            this.scroll.scrollToElement(t, 0, !0, !0)
                        }, getElement: function () {
                            var t = null;
                            return this.$slots.default.find(function (e, n) {
                                var i = e.children;
                                i.find(function (e, n) {
                                    var i = e.data.class,
                                        r = i.selected;
                                    r && (t = e.elm)
                                })
                            }), t
                        }, scrollhandle: function () {
                            var t = 1 === this.scroll.movingDirectionX,
                                e = -1 === this.scroll.movingDirectionX;
                            !this.callback || this.loadCompleted || this.isLoading || (t && Math.abs(this.scroll.maxScrollX) - Math.abs(this.scroll.x) < 300 || e && Math.abs(this.scroll.x) <= 100) && (this.isLoading = !0, this.isPosition = !1, this.loadMore(t))
                        }, loadMore: function (t) {
                            var e = this;
                            this.callback({
                                scrollToRight: t
                            }).catch(function (t) {
                                e.$emit("loadFailure", t)
                            }).finally(function () {
                                e.isLoading = !1
                            })
                        }
                    }
                },
                u = c,
                l = n("2877"),
                d = Object(l["a"])(u, i, r, !1, null, null, null);
            e["a"] = d.exports
        }, "6f18": function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return c
            }), n.d(e, "f", function () {
                return f
            }), n.d(e, "b", function () {
                return v
            }), n.d(e, "c", function () {
                return g
            }), n.d(e, "d", function () {
                return w
            }), n.d(e, "e", function () {
                return x
            });
            var i = n("cebc"),
                r = (n("96cf"), n("3b8d")),
                a = n("2c06"),
                s = n("b2e7"),
                o = n("936f"),
                c = "//m.iqiyi.com/m5/security/bindPhone.html",
                u = "https://cmonitor.iqiyi.com/apis/cmonitor/keepalive.action",
                l = "//subscription.iqiyi.com/services/subscribe/add.htm",
                d = "//subscription.iqiyi.com/services/subscribe/cancel.htm",
                p = "//subscription.iqiyi.com/services/subscribe/countAndState.htm",
                h = "jfaljluixn39012$#";

            function f() {
                return m.apply(this, arguments)
            }

            function m() {
                return m = Object(r["a"])(regeneratorRuntime.mark(function t() {
                    var e, n = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {}, t.abrupt("return", e.isSubed ? g(e) : v(e));
                        case 2:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), m.apply(this, arguments)
            }

            function v(t) {
                return y.apply(this, arguments)
            }

            function y() {
                return y = Object(r["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, k(l, {
                                subKeys: e.subKeys
                            });
                        case 2:
                            return n = t.sent, t.abrupt("return", {
                                success: n && "A00000" === n.code,
                                data: n
                            });
                        case 4:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), y.apply(this, arguments)
            }

            function g(t) {
                return b.apply(this, arguments)
            }

            function b() {
                return b = Object(r["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, k(d, {
                                subKeys: e.subKeys
                            });
                        case 2:
                            return n = t.sent, t.abrupt("return", {
                                success: n && "A00000" === n.code,
                                data: n
                            });
                        case 4:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), b.apply(this, arguments)
            }

            function w(t) {
                return k(p, {
                    subKeys: t.subKeys
                })
            }

            function k(t) {
                return _.apply(this, arguments)
            }

            function _() {
                return _ = Object(r["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, r, a, s = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = s.length > 1 && void 0 !== s[1] ? s[1] : {}, r = Object(i["a"])({
                                subType: 2,
                                agentType: 13
                            }, n), t.next = 4, o["a"].jsonp(e, {
                                params: r
                            }).catch(function () {});
                        case 4:
                            return a = t.sent, t.abrupt("return", a && a.data ? a.data : {});
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), _.apply(this, arguments)
            }

            function x() {
                return S.apply(this, arguments)
            }

            function S() {
                return S = Object(r["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = r.length > 0 && void 0 !== r[0] ? r[0] : {}, n = {
                                agenttype: Object(a["t"])(),
                                authcookie: Object(s["x"])(),
                                device_id: Object(s["w"])(),
                                tv_id: e.tvid
                            }, n.sign = Object(a["D"])(n, "|", h, !0), t.next = 5, o["a"].get(u, {
                                params: n
                            });
                        case 5:
                            return i = t.sent, t.abrupt("return", i && i.data ? i.data.data : null);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), S.apply(this, arguments)
            }
        }, "6ffa": function (t, e, n) {
            "use strict";
            n("57e7"), n("ac6a"), n("f3e2"), n("d92a");
            var i = n("e814"),
                r = n.n(i),
                a = n("d225"),
                s = n("b0b4"),
                o = n("308d"),
                c = n("6bb5"),
                u = n("4e2b"),
                l = function () {
                    function t() {
                        Object(a["a"])(this, t)
                    }
                    return Object(s["a"])(t, [{
                        key: "on",
                        value: function (t, e) {
                            return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this
                        }
                    }, {
                        key: "once",
                        value: function (t, e) {
                            var n = this;

                            function i() {
                                n.off(t, i), e.apply(this, arguments)
                            }
                            return this._callbacks = this._callbacks || {}, i.fn = e, this.on(t, i), this
                        }
                    }, {
                        key: "off",
                        value: function (t, e) {
                            if (this._callbacks = this._callbacks || {}, !arguments.length) return this._callbacks = {}, this;
                            var n, i = this._callbacks[t];
                            if (!i) return this;
                            if (1 === arguments.length) return delete this._callbacks[t], this;
                            for (var r = 0; r < i.length; r++)
                                if (n = i[r], n === e || n.fn === e) {
                                    i.splice(r, 1);
                                    break
                                }
                            return this
                        }
                    }, {
                        key: "trigger",
                        value: function (t) {
                            this._callbacks = this._callbacks || {};
                            var e = [].slice.call(arguments, 1),
                                n = this._callbacks[t];
                            if (n) {
                                n = n.slice(0);
                                for (var i = 0, r = n.length; i < r; ++i) n[i].apply(this, e)
                            }
                            return this
                        }
                    }, {
                        key: "listeners",
                        value: function (t) {
                            return this._callbacks = this._callbacks || {}, this._callbacks[t] || []
                        }
                    }, {
                        key: "hasListeners",
                        value: function (t) {
                            return !!this.listeners(t).length
                        }
                    }]), t
                }(),
                d = n("2a84"),
                p = n("7504");
            n("0cd8");

            function h(t, e) {
                var n = "HTTP" === e;
                t = t || {};
                var i = t.data = t.data || {},
                    r = i.boss_ts = (i["boss_ts"] ? i["boss_ts"] : i["boss"]) || {};
                if (r.data = r && r.data ? r.data : {}, i.program = i.program || {}, i.p = i.p || {}, t.aid = i.aid, t.tvid = i.tvid, t.prvType = "1" === r.data.prv ? r.previewType : "", "1" === r.data.prv && ("1" === r.previewType ? t.prvTime = 60 * r.previewTime : "3" === r.previewType && (t.prvTime = r.previewTime)), i.program.video) {
                    var a = i.program.video.reduce(function (t, e) {
                        return e._selected ? e : t
                    }, {});
                    t.cid = a.cid, t.vid = a.vid, t.duration = a.duration, t.isHttp = n, t.src = n ? "mp4" === a.ff ? a.mp4Url : a.url : a.mu, t.bid = a.bid, t.type = a.ff
                }
                return t.prv = t.src && t.prvType && 708 !== i.st, t
            }
            var f = n("8296");
            n.d(e, "a", function () {
                return v
            });
            var m = Object(f["M"])("player", {
                    feedback: !1
                }),
                v = function (t) {
                    function e(t) {
                        var n;
                        return Object(a["a"])(this, e), n = Object(o["a"])(this, Object(c["a"])(e).call(this)), n.sdk = t.sdk || {}, n.video = t.video || {}, n.controlEle = t.controlEle, n._seekLock = !1, n._timeupdatetime = 0, n.setSrcStatus(!0), n.bindNativeEvent(), n.bindSdkEvent(), n.updateFullScreen(), n
                    }
                    return Object(u["a"])(e, t), Object(s["a"])(e, [{
                        key: "bindNativeEvent",
                        value: function () {
                            var t = this;
                            d["j"].ios && 11 === r()(d["j"].version) ? this.video.addEventListener("touchend", function () {
                                t.trigger("click")
                            }) : this.video.addEventListener("click", function () {
                                t.trigger("click")
                            }), this.video.addEventListener("touchstart", function (e) {
                                t.trigger("touchstart", e)
                            }), this.video.addEventListener("touchmove", function (e) {
                                t.trigger("touchmove", e)
                            }), this.video.addEventListener("touchend", function (e) {
                                t.trigger("touchend", e)
                            }), this.playerZone = d["j"].ios ? this.video : this.controlEle || this.video.parentNode, this.playerZone && this.playerZone.addEventListener(p["a"].fullscreenchange, this._handleFullscreenchange.bind(this))
                        }
                    }, {
                        key: "bindSdkEvent",
                        value: function () {
                            var t = this;
                            y.forEach(function (e) {
                                t.sdk.on(e, function () {
                                    t.trigger(e)
                                })
                            });
                            var e = this.sdk.CoreType;
                            this.sdk.on(e.NTF_StatusChanged, function (n) {
                                switch (n.state) {
                                case e.Status_AdLoadstart:
                                    t.trigger("loadstart", n);
                                    break;
                                case e.Status_Ready:
                                    t.isFirst = !0;
                                    var i = t.video.src;
                                    t.trigger("src", i);
                                    break;
                                case e.Status_LoadedMetaData:
                                    if (t.isFirst) t.isFirst = !1;
                                    else {
                                        var r = t.video.src;
                                        t.trigger("src", r)
                                    }
                                    break;
                                case e.Status_Play:
                                    m.log("sdk event play"), t.trigger("play", n);
                                    break;
                                case e.Status_AdPlaying:
                                    m.log("sdk event ad playing"), t.trigger("playing", n);
                                    break;
                                case e.Status_Playing:
                                    m.log("sdk event video playing"), t.trigger("playing", n);
                                    break;
                                case e.Status_AdPaused:
                                case e.Status_Paused:
                                    m.log("sdk event pause"), t.trigger("pause", n);
                                    break;
                                case e.Status_AdWaiting:
                                case e.Status_Waiting:
                                    t.trigger("waiting", n);
                                    break;
                                case e.Status_AdError:
                                    t.trigger("error", {
                                        targetName: "ad"
                                    });
                                    break;
                                case e.Status_PlayError:
                                    t.trigger("error", {
                                        targetName: "play"
                                    });
                                    break;
                                case e.Status_AdStalled:
                                    t.trigger("stalled", n);
                                    break;
                                case e.Status_Stoped:
                                    m.log("sdk event ended"), t.trigger("ended", n);
                                    break;
                                case e.Status_Loaddone:
                                    break;
                                default:
                                }
                            }), this.sdk.on(e.Status_AresEnded, function () {
                                m.log("sdk event adended"), t.trigger("adended", event)
                            }), this.sdk.on(e.NTF_DashRemote, function (e) {
                                var n = t.sdk.getEngineType(),
                                    i = h(e, n);
                                t.trigger("authRomte", i)
                            }), this.sdk.on(e.NTF_AD_EVENTNOAD, function () {
                                t.trigger("skipAd")
                            }), this.sdk.on(e.NTF_VideoChange, function () {
                                m.log("sdk event videochange"), t.setSrcStatus(!0), t.trigger("videoChange")
                            }), this.sdk.on(e.NTF_VideoChanged, function () {
                                t.trigger("videoChanged")
                            }), this.sdk.on(e.NTF_VRSPreloaded, function () {
                                t.trigger("vrsPreloaded")
                            }), this.sdk.on(e.NTF_DefinitionSwitching, function () {
                                t.trigger("rateSwitching")
                            }), this.sdk.on(e.NTF_DefinitionSwitched, function (e) {
                                t.trigger("rateSwitched", e)
                            }), this.sdk.on(e.NTF_Recharge, function (e) {
                                t.trigger("recharge", e)
                            }), this.sdk.on(e.NTF_Error, function (e) {
                                e && e.code && (e && e.code.indexOf("P") > -1 ? t.trigger("error", {
                                    targetName: "api",
                                    msg: e.code
                                }) : t.trigger("error", {
                                    targetName: "sdk",
                                    msg: "SDK_code:".concat(e.code, "-type:").concat(e.type || "", "-st:").concat(e.st || "")
                                }))
                            })
                        }
                    }, {
                        key: "play",
                        value: function () {
                            m.log("call sdk video play"), this.sdk.play(!0)
                        }
                    }, {
                        key: "preplay",
                        value: function () {
                            try {
                                var t = d["j"].android && d["a"].qq;
                                this._chromePlayed || t || !(d["a"].chrome || d["j"].ios || d["a"].vivobrowser) || (m.log("call video preplay"), this.sdk.play(!0), this._chromePlayed = !0)
                            } catch (e) {}
                        }
                    }, {
                        key: "replay",
                        value: function () {
                            m.log("replay"), this.sdk.replay()
                        }
                    }, {
                        key: "refresh",
                        value: function () {
                            this.sdk.refresh()
                        }
                    }, {
                        key: "paused",
                        value: function () {
                            return this.sdk.isPaused()
                        }
                    }, {
                        key: "pause",
                        value: function (t) {
                            return m.log("call video pause, isForce:", !!t), this.sdk.pause(!1, t)
                        }
                    }, {
                        key: "src",
                        value: function (t) {
                            if ("" !== t) return this.video.src || document.getElementById("video").src;
                            var e = this.sdk.getEngineType();
                            this.isHttp = "HTTP" === e, this.setSrcStatus(!1), this.sdk.cleanSrc(), this.video.removeAttribute("src"), this.video.load(), m.log("set src empty, engineType:", e)
                        }
                    }, {
                        key: "getSrcStatus",
                        value: function () {
                            return m.log("isSetSrc", this.isSetSrc), this.isSetSrc
                        }
                    }, {
                        key: "setSrcStatus",
                        value: function (t) {
                            this.isSetSrc = t
                        }
                    }, {
                        key: "getReadyState",
                        value: function () {
                            return this.video.readyState
                        }
                    }, {
                        key: "currentTime",
                        value: function () {
                            return this.sdk.getCurrenttime()
                        }
                    }, {
                        key: "duration",
                        value: function () {
                            return this.sdk.getDuration() || NaN
                        }
                    }, {
                        key: "buffered",
                        value: function () {
                            return this.sdk.getBufferTime()
                        }
                    }, {
                        key: "seek",
                        value: function (t, e) {
                            return "number" === typeof t && (this.sdk.seek(t, null, e), !0)
                        }
                    }, {
                        key: "lockSeek",
                        value: function () {
                            this._seekLock = !0
                        }
                    }, {
                        key: "unLockSeek",
                        value: function () {
                            this._seekLock = !1
                        }
                    }, {
                        key: "checkSeekBack",
                        value: function () {
                            if (this._seekLock) {
                                var t = this.sdk.getCurrenttime();
                                if (t - this._timeupdatetime > 2) return this.seek(this._timeupdatetime), !0
                            }
                            return !1
                        }
                    }, {
                        key: "_handleAdtimeupdate",
                        value: function () {
                            this.checkSeekBack() || (this._timeupdatetime = this.currentTime(), this.trigger("timeupdate"))
                        }
                    }, {
                        key: "_handleAdseeking",
                        value: function (t) {
                            this.checkSeekBack() || this.trigger("seeking")
                        }
                    }, {
                        key: "_handleAdseeked",
                        value: function () {
                            this._seekLock || this.trigger("seeked")
                        }
                    }, {
                        key: "muted",
                        value: function (t) {
                            if ("undefined" === typeof t) return this.sdk.getMuted();
                            this.sdk.setMuted(t), this.trigger("muted", t)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._timeupdatetime = 0, this.sdk.destroy()
                        }
                    }, {
                        key: "reset",
                        value: function () {
                            this._timeupdatetime = 0
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            this.video.style.display = "none", this.video.style.top = "-1000px"
                        }
                    }, {
                        key: "show",
                        value: function () {
                            this.video.style.display = "block", this.video.style.top = "0px"
                        }
                    }, {
                        key: "width",
                        value: function () {
                            return this.video.offsetWidth
                        }
                    }, {
                        key: "height",
                        value: function () {
                            return this.video.offsetHeight
                        }
                    }, {
                        key: "ended",
                        value: function () {
                            return this.video.ended
                        }
                    }, {
                        key: "isFullscreen",
                        value: function () {
                            return p["a"].isFullscreen()
                        }
                    }, {
                        key: "updateFullScreen",
                        value: function () {
                            p["a"].requestFullscreen || this.video.webkitEnterFullscreen && (p["a"].requestFullscreen = "webkitEnterFullscreen")
                        }
                    }, {
                        key: "requestFullscreen",
                        value: function () {
                            p["a"].requestFullscreen && this.playerZone[p["a"].requestFullscreen]()
                        }
                    }, {
                        key: "_handleFullscreenchange",
                        value: function (t) {
                            t.isFullscreen = this.isFullscreen(), this.trigger("fullscreenchange", t)
                        }
                    }, {
                        key: "exitFullscreen",
                        value: function () {
                            try {
                                p["a"].exitFullscreen && p["a"].isFullscreen() && document[p["a"].exitFullscreen]().catch(function () {})
                            } catch (t) {}
                        }
                    }]), e
                }(l),
                y = ["loadstart", "pause", "waiting", "progress", "abort", "canplay", "canplaythrough", "playing", "play", "ended", "durationchange", "error", "seeked", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "resize", "volumechange", "texttrackchange", "touchstart", "touchmove", "touchend", "change", "cancel", "seeking", "adseeking", "adseeked", "adtimeupdate"]
        }, "703e": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.show,
                            expression: "show"
                        }],
                        staticClass: "m-player-tip"
                    }, [n("div", {
                        staticClass: "player-tip-inner"
                    }, [n("div", {
                        staticClass: "c-player-tip-info"
                    }, [t._v("\n      网络未连接 请检查网络设置\n    ")]), n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: {
                                rseat: "805141_bfqrefresh",
                                block: "805141_bfqrefresh"
                            },
                            expression: "{rseat: '805141_bfqrefresh', block: '805141_bfqrefresh'}"
                        }],
                        staticClass: "c-btn",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("reload")
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-playRefresh"
                    }), t._v("刷新重试\n    ")])])])
                },
                r = [],
                a = n("4e77"),
                s = n("ec1c"),
                o = n("8296"),
                c = Object(o["M"])("network", {
                    feedback: !0
                }),
                u = {
                    name: "VideoLayerNetwork",
                    data: function () {
                        return {
                            show: !1,
                            online: !0,
                            isVideo: !1,
                            load: !1,
                            waitingTime: 5e3
                        }
                    }, watch: {
                        online: function (t, e) {
                            this.check()
                        }, show: function (t, e) {
                            t && (Object(s["d"])({
                                block: "805141_bfqrefresh"
                            }), this.$parent.$emit("layerShow", {
                                type: "network"
                            }))
                        }, isVideo: function (t, e) {
                            t && !this.online && (this.show = !0, this.$parent.pause())
                        }
                    }, beforeMount: function () {
                        var t = this,
                            e = this.$parent;
                        this.$parent.$on("load", function () {
                            t.isVideo = !1, t.load = !0
                        }), this.$parent.$on("clear", function () {
                            t.isVideo = !1, t.load = !1, t.show = !1
                        }), e.$on("videoStatusChange", function (e) {
                            t.isPlayed && e && (t.isVideo = e, t.check()), t.isPlayed = !1
                        }), e.$on("playStart", function (e) {
                            var n = e.status;
                            t.isPlayed = !0, "VIDEO" === n && (t.isVideo = !0)
                        }), Object(a["b"])(function (e) {
                            t.online = e.online, c.log("online:", t.online, ", connection:", t.getConnection())
                        }), c.log("online:", this.online, ", connection:", this.getConnection())
                    }, methods: {
                        check: function () {
                            var t = this;
                            if (this.online) {
                                if (clearTimeout(this.timer), !this.load) return;
                                this.show = !1, this.isVideo ? Object(s["d"])({
                                    block: "805141_bfqreautoplay"
                                }) : this.$emit("reload"), this.$parent.play()
                            } else this.isVideo && (this.timer = setTimeout(function () {
                                t.show = !0, t.$parent.pause()
                            }, this.waitingTime))
                        }, getConnection: function () {
                            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection,
                                e = {};
                            for (var n in t) "function" !== typeof t[n] && (e[n] = t[n]);
                            return e
                        }
                    }
                },
                l = u,
                d = n("2877"),
                p = Object(d["a"])(l, i, r, !1, null, null, null);
            e["a"] = p.exports
        }, "73d5": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShow,
                            expression: "isShow"
                        }],
                        staticClass: "m-topSite-wrap"
                    }, [n("section", {
                        staticClass: "m-topSite m-borderB",
                        class: {
                            "m-topSite-fixed": t.fixed
                        }
                    }, [t._t("left", [t.leftUrl || t.leftHref ? n("AuraLink", {
                        staticClass: "c-goback",
                        attrs: {
                            to: t.leftUrl,
                            href: t.leftHref
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-arrowLeft"
                    })]) : n("a", {
                        staticClass: "c-goback",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.goBack
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-arrowLeft"
                    })])]), n("div", {
                        staticClass: "c-content"
                    }, [t._v(t._s(t.title))]), t._t("right", [t.rightUrl && t.rightTitle ? n("a", {
                        staticClass: "c-more-link",
                        attrs: {
                            href: t.rightUrl
                        }
                    }, [t._v("\n        " + t._s(t.rightTitle) + "\n      ")]) : t._e()])], 2)])
                },
                r = [],
                a = n("6bb4"),
                s = {
                    name: "AuraHeadTitle",
                    components: {
                        AuraLink: a["a"]
                    },
                    props: {
                        isShow: {
                            type: Boolean,
                            default: !0
                        },
                        fixed: {
                            type: Boolean,
                            default: !1
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        leftUrl: {
                            type: String,
                            default: ""
                        },
                        leftHref: {
                            type: String,
                            default: ""
                        },
                        rightUrl: {
                            type: String,
                            default: ""
                        },
                        rightTitle: {
                            type: String,
                            default: ""
                        }
                    },
                    methods: {
                        goBack: function () {
                            window.history.back()
                        }
                    }
                },
                o = s,
                c = n("2877"),
                u = Object(c["a"])(o, i, r, !1, null, null, null);
            e["a"] = u.exports
        }, 7504: function (t, e, n) {
            "use strict";
            (function (t) {
                for (var i, r = n("7618"), a = (n("ac6a"), n("f3e2"), {}), s = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], o = s[0], c = t.document || {}, u = 0; u < s.length; u++)
                    if (s[u][1] in c) {
                        i = s[u];
                        break
                    }
                if (i)
                    for (var l = 0; l < i.length; l++) a[o[l]] = i[l];

                function d(t, e) {
                    var n;
                    return ["webkit", "moz", "ms", "o", ""].forEach(function (i) {
                        if (!n) {
                            "" === i && (e = e.slice(0, 1).toLowerCase() + e.slice(1));
                            var a = Object(r["a"])(t[i + e]);
                            a + "" !== "undefined" && (n = "function" === a ? t[i + e]() || !0 : t[i + e])
                        }
                    }), n
                }
                a.isFullscreen = function () {
                    return c.IsFullScreen || d(c, "FullScreen") || d(c, "IsFullScreen")
                }, e["a"] = a
            }).call(this, n("483b"))
        }, "768b": function (t, e, n) {
            "use strict";
            var i = n("a745"),
                r = n.n(i);

            function a(t) {
                if (r()(t)) return t
            }
            var s = n("5d73"),
                o = n.n(s);

            function c(t, e) {
                var n = [],
                    i = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var s, c = o()(t); !(i = (s = c.next()).done); i = !0)
                        if (n.push(s.value), e && n.length === e) break
                } catch (u) {
                    r = !0, a = u
                } finally {
                    try {
                        i || null == c["return"] || c["return"]()
                    } finally {
                        if (r) throw a
                    }
                }
                return n
            }

            function u() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }

            function l(t, e) {
                return a(t) || c(t, e) || u()
            }
            n.d(e, "a", function () {
                return l
            })
        }, "784b": function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return a
            }), n.d(e, "d", function () {
                return s
            }), n.d(e, "f", function () {
                return c
            }), n.d(e, "c", function () {
                return d
            }), n.d(e, "b", function () {
                return p
            }), n.d(e, "e", function () {
                return h
            });
            n("7f7f");
            var i = n("a78e"),
                r = n.n(i),
                a = {
                    300: {
                        rate: 2,
                        name: "高清",
                        _rate: 0
                    },
                    200: {
                        rate: 1,
                        name: "流畅",
                        _rate: 1
                    },
                    100: {
                        rate: 96,
                        name: "极速",
                        _rate: 2
                    }
                },
                s = {
                    96: 2,
                    2: 0,
                    1: 1
                },
                o = {
                    0: "300",
                    1: "200",
                    2: "100"
                },
                c = {
                    2: "300",
                    1: "200",
                    96: "100"
                },
                u = "play_stream";

            function l(t) {
                return o[t] ? a[o[t]] : null
            }

            function d(t) {
                var e = l(t);
                return e ? e.rate : null
            }

            function p(t) {
                return a[t]
            }

            function h(t) {
                r.a.set(u, t, {
                    expires: 365,
                    path: "/",
                    domain: "iqiyi.com"
                })
            }
        }, "7b93": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("Popup", {
                        attrs: {
                            show: t.publishCommentVisible,
                            fullscreen: !0,
                            "scroll-top": t.scrollTop,
                            position: "bottom"
                        }
                    }, [n("div", {
                        staticClass: "g-publisher"
                    }, [n("section", {
                        staticClass: "m-comment-topSite"
                    }, [n("a", {
                        staticClass: "c-goback",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.back
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-arrowLeft"
                    })]), n("div", {
                        staticClass: "c-content"
                    }, [t._v("发布评论")]), n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "707211_paopaofabu",
                            expression: "'707211_paopaofabu'"
                        }],
                        staticClass: "c-handle-link",
                        class: {
                            disabled: !t.userInput && !Object.keys(t.image).length
                        },
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.publish
                        }
                    }, [t._v("发布")])]), n("section", {
                        staticClass: "m-comment-editor"
                    }, [n("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.userInput,
                            expression: "userInput"
                        }],
                        staticClass: "c-editor",
                        attrs: {
                            placeholder: t.placeHolder,
                            maxlength: "5000"
                        },
                        domProps: {
                            value: t.userInput
                        },
                        on: {
                            input: function (e) {
                                e.target.composing || (t.userInput = e.target.value)
                            }
                        }
                    })]), n("section", {
                        staticClass: "m-comment-toolbar"
                    }, [n("div", {
                        staticClass: "toolbar-tab"
                    }, [n("a", {
                        staticClass: "tab-item",
                        class: {
                            selected: "Emoji" === t.tabName
                        },
                        on: {
                            click: function (e) {
                                t.tabName = "Emoji"
                            }
                        }
                    }, [t._v("表情\n        ")]), n("a", {
                        staticClass: "tab-item",
                        class: {
                            selected: "ImageUpload" === t.tabName
                        },
                        on: {
                            click: function (e) {
                                t.tabName = "ImageUpload"
                            }
                        }
                    }, [t._v("图片")])]), n("div", {
                        staticClass: "m-comment-toolbar-body"
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "Emoji" === t.tabName,
                            expression: "tabName === 'Emoji'"
                        }]
                    }, [t.emojiList.length ? n("section", {
                        staticClass: "m-comment-emoji"
                    }, [n("div", {
                        directives: [{
                            name: "swipe",
                            rawName: "v-swipe",
                            value: t.swipeOptions,
                            expression: "swipeOptions"
                        }],
                        staticClass: "comment-emoji"
                    }, [n("ul", {
                        staticClass: "list-comment-emoji"
                    }, t._l(t.emojiList, function (e, i) {
                        return n("li", {
                            key: e[0].id,
                            staticStyle: {
                                position: "relative",
                                display: "block",
                                float: "left"
                            }
                        }, t._l(t.emojiList[i], function (e) {
                            return n("span", {
                                key: e.order,
                                staticClass: "c-emoji-pic",
                                style: {
                                    "background-image": "url(" + t.removeProtocol(e.picUrl) + ")"
                                },
                                on: {
                                    click: function (n) {
                                        t.userInput += e.content
                                    }
                                }
                            })
                        }), 0)
                    }), 0)]), n("div", {
                        staticClass: "comment-emoji-dot"
                    }, [n("div", {
                        staticClass: "dot-inner"
                    }, t._l(t.emojiList, function (e, i) {
                        return n("i", {
                            key: e[0].id,
                            staticClass: "dot-item",
                            class: {
                                selected: t.index % 2 === i
                            }
                        })
                    }), 0)])]) : t._e(), t.emojiFail ? n("section", {
                        staticClass: "m-comment-tip"
                    }, [n("i", {
                        staticClass: "tip-icon"
                    }), n("div", {
                        staticClass: "info",
                        staticStyle: {
                            "letter-spacing": "0"
                        }
                    }, [t._v("出错了，刷新页面试试吧")])]) : t._e()]), n("section", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "ImageUpload" === t.tabName,
                            expression: "tabName === 'ImageUpload'"
                        }],
                        staticClass: "m-comment-picture"
                    }, [n("div", {
                        staticClass: "picture-title"
                    }, [t._v("只能上传一张图片哦")]), n("ul", {
                        staticClass: "comment-picture"
                    }, [t.image.url ? n("li", [n("span", {
                        staticClass: "c-picture"
                    }, [n("span", {
                        staticClass: "picture-img",
                        style: "background-image: url(" + t.removeProtocol(t.image.url) + ")"
                    }, ["gif" === t.image.type.toLowerCase() ? n("i", {
                        staticClass: "picicon"
                    }, [t._v("GIF")]) : t._e()])]), n("a", {
                        staticClass: "close-picture",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.removeImage
                        }
                    })]) : t._e(), t.imageUploadSuccess ? t._e() : n("li", [n("a", {
                        staticClass: "c-add-picture",
                        attrs: {
                            href: "javascript:void(0)"
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-add"
                    })]), n("FileUpload", {
                        attrs: {
                            upload: t.upload,
                            "input-name": "pic",
                            "upload-callback-name": "paopaoUploadSuc"
                        },
                        on: {
                            success: t.onSuccess,
                            failure: t.failure,
                            loading: t.loading
                        }
                    })], 1)])])])])]), n("AuraToast", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.toastShow,
                            expression: "toastShow"
                        }],
                        class: t.toastClass,
                        scopedSlots: t._u([{
                            key: "text",
                            fn: function () {
                                return [n("span", {
                                    domProps: {
                                        innerHTML: t._s(t.toastText)
                                    }
                                })]
                            }, proxy: !0
                        }, {
                            key: "default",
                            fn: function () {
                                return [n("i", {
                                    class: t.toastIcon
                                })]
                            }, proxy: !0
                        }])
                    })], 1)
                },
                r = [],
                a = (n("4917"), n("96cf"), n("3b8d")),
                s = n("5bcb"),
                o = n("090f"),
                c = n("8296"),
                u = n("b2e7"),
                l = n("87ac"),
                d = n("5846"),
                p = n("e8eb"),
                h = n("8530"),
                f = 21,
                m = {
                    name: "CommentPublish",
                    components: {
                        FileUpload: p["a"],
                        Popup: h["a"]
                    },
                    directives: {
                        swipe: s["a"]
                    },
                    props: {
                        contentId: {
                            type: String,
                            default: ""
                        },
                        replyId: {
                            type: String,
                            default: ""
                        },
                        publishCommentVisible: {
                            type: Boolean,
                            default: !1
                        },
                        placeHolder: {
                            type: String,
                            default: "我来说两句"
                        },
                        aid: {
                            type: String,
                            default: ""
                        },
                        cid: {
                            type: String,
                            default: ""
                        },
                        isVideoPage: {
                            type: Boolean,
                            default: !1
                        },
                        fakeWriteEnable: {
                            type: Boolean,
                            default: !1
                        },
                        auditStrategyEnable: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        var t = this;
                        return {
                            tabName: "Emoji",
                            toastText: "",
                            toastShow: !1,
                            toastIcon: "",
                            toastClass: "",
                            userInput: "",
                            imageUploadSuccess: !1,
                            image: {},
                            emojiList: [],
                            emojiFail: !1,
                            index: 0,
                            swipeOptions: {
                                startSlide: 0,
                                callback: function (e, n) {
                                    t.index = e
                                }, continuous: !1
                            },
                            scrollTop: 0
                        }
                    }, computed: {
                        EmojiOrImage: function () {
                            return "CommentPublish" + this.tabName
                        }, text: function () {
                            return this.userInput.slice(0, 5e3)
                        }
                    }, watch: {
                        publishCommentVisible: function (t) {
                            this.scrollTop = t ? document.body.scrollTop || document.documentElement.scrollTop : this.scrollTop
                        }
                    }, beforeMount: function () {
                        var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, Object(d["b"])(f);
                                case 3:
                                    this.emojiList = t.sent, t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6, t.t0 = t["catch"](0), this.emojiFail = !0;
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                            }, t, this, [
                                [0, 6]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    methods: {
                        publish: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e, n, i;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = {
                                            isVideoPage: this.isVideoPage,
                                            aid: this.aid,
                                            cid: this.cid
                                        }, t.next = 3, Object(l["j"])(this.contentId, this.text, this.image, this.replyId, e);
                                    case 3:
                                        n = t.sent, n ? (this.fakeWriteEnable && this.auditStrategyEnable ? this.setToast("发布成功", "success-icon", "toast-square") : this.setToast("评论正在审核，请耐心等待哦~"), this.clearToast(2e3), this.isVideoPage ? (i = "COMMENT_INFO", c["L"].setItem(i, n), this.$emit("success", i)) : this.$emit("success", n), this.refresh()) : (this.setToast("发布失败"), this.clearToast(2e3));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        checkValidHeadshot: function (t) {
                            var e = 5242880;
                            return !t.type.match(/(jpeg|gif|png|bmp)/) && t.size >= e ? "仅支持jpg,jpeg,gif,png,bmp格式且图片大小不能大于5M" : t.type.match(/(jpeg|gif|png|bmp)/) ? t.size >= e ? "图片大小不能大于5M" : void 0 : "仅支持jpg,jpeg,gif,png,bmp格式图片"
                        }, upload: function (t, e) {
                            if (window.parent.paopaoUploadSuc = function () {}, t.target.value) {
                                var n = this.checkValidHeadshot(t.target.files[0]);
                                if (n) throw new Error(n);
                                if (t.target.value) {
                                    var i = "//api.t.iqiyi.com/feed/upload_pic",
                                        r = {
                                            authcookie: Object(u["x"])()
                                        };
                                    return e(i, r), !0
                                }
                            }
                        }, loading: function () {
                            this.setToast("正在上传中...", "loading-icon")
                        }, onSuccess: function (t) {
                            "A00000" === t.code ? (this.image = {
                                url: this.getThumbnail(t.data.share_url),
                                type: t.data.picType,
                                width: t.data.width,
                                height: t.data.height,
                                swift_url: t.data.share_url,
                                fileId: t.data.file_id
                            }, this.imageUploadSuccess = !0, this.toastShow = !1) : (this.setToast("网络状况不佳，请稍后重试"), this.clearToast(2e3))
                        }, failure: function (t) {
                            this.setToast(t.msg), this.clearToast(2e3)
                        }, setToast: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                            this.toastText = t, this.toastIcon = e, this.toastClass = n, this.toastShow = !0
                        }, clearToast: function () {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
                            setTimeout(function () {
                                t.toastShow = !1
                            }, e)
                        }, getThumbnail: function (t) {
                            return "".concat(t, "&authtype=passport&authtoken=").concat(Object(u["x"])())
                        }, removeImage: function () {
                            this.image = {}, this.imageUploadSuccess = !1
                        }, refresh: function () {
                            this.userInput = "", this.image = {}, this.imageUploadSuccess = !1, this.tabName = "Emoji"
                        }, back: function () {
                            this.$emit("back"), this.refresh()
                        }, removeProtocol: o["a"]
                    }
                },
                v = m,
                y = n("2877"),
                g = Object(y["a"])(v, i, r, !1, null, null, null);
            e["a"] = g.exports
        }, "7d7b": function (t, e, n) {
            var i = n("e4ae"),
                r = n("7cd6");
            t.exports = n("584a").getIterator = function (t) {
                var e = r(t);
                if ("function" != typeof e) throw TypeError(t + " is not iterable!");
                return i(e.call(t))
            }
        }, "7d82": function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return b
            }), n.d(e, "c", function () {
                return w
            }), n.d(e, "a", function () {
                return k
            }), n.d(e, "i", function () {
                return _
            }), n.d(e, "j", function () {
                return C
            }), n.d(e, "d", function () {
                return j
            }), n.d(e, "e", function () {
                return I
            }), n.d(e, "h", function () {
                return R
            }), n.d(e, "g", function () {
                return V
            }), n.d(e, "f", function () {
                return F
            });
            n("0cd8");
            var i = n("cebc"),
                r = (n("96cf"), n("5176")),
                a = n.n(r),
                s = (n("6d67"), n("a481"), n("ac6a"), n("f3e2"), n("3b8d")),
                o = n("e814"),
                c = n.n(o),
                u = n("8d81"),
                l = n.n(u),
                d = n("8296"),
                p = n("b2e7"),
                h = n("5191"),
                f = n("936f"),
                m = "//iface2.iqiyi.com/like/mergeLike",
                v = "//iface2.iqiyi.com/like/disLikeMulti",
                y = "//iface2.iqiyi.com/like/cancelLike",
                g = "//iface2.iqiyi.com/like/getLikeObjList",
                b = "today",
                w = "week",
                k = "earlier";

            function _(t) {
                var e = new Date,
                    n = Date.parse("".concat(e.getFullYear(), "/").concat(e.getMonth() + 1, "/").concat(e.getDate())),
                    i = n - 6048e5;
                return t = c()(t), t = t < 1e10 ? 1e3 * t : t, t >= n ? b : t < n && t >= i ? w : t < i ? k : void 0
            }

            function x() {
                return S.apply(this, arguments)
            }

            function S() {
                return S = Object(s["a"])(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.t0 = Object(p["w"])(), t.next = 3, Object(h["b"])();
                        case 3:
                            return t.t1 = t.sent, t.t2 = Object(p["C"])() || void 0, t.abrupt("return", {
                                businessType: 14,
                                qyid: t.t0,
                                dfp: t.t1,
                                psp_uid: t.t2
                            });
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), S.apply(this, arguments)
            }

            function C() {
                return O.apply(this, arguments)
            }

            function O() {
                return O = Object(s["a"])(regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, x();
                        case 2:
                            return e = t.sent, n = Object(i["a"])({
                                isClear: 1
                            }, e), t.abrupt("return", f["a"].get(m, {
                                params: n
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), O.apply(this, arguments)
            }

            function j() {
                return T.apply(this, arguments)
            }

            function T() {
                return T = Object(s["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, r, a = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : "", t.next = 3, x();
                        case 3:
                            return n = t.sent, r = Object(i["a"])({
                                entityIds: e
                            }, n), t.abrupt("return", f["a"].get(v, {
                                params: r
                            }));
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), T.apply(this, arguments)
            }

            function I() {
                return P.apply(this, arguments)
            }

            function P() {
                return P = Object(s["a"])(regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, x();
                        case 2:
                            return e = t.sent, t.abrupt("return", f["a"].get(y, {
                                params: e
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), P.apply(this, arguments)
            }

            function L() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return t.forEach(function (t) {
                    t.duration = t.duration ? d["t"].formatTime(t.duration) : "", t.group = _(t.timestamp), t.webUrl = t.webUrl ? t.webUrl.replace(/^http:/, "") : "", t.selected = !1
                }), t
            }

            function R() {
                return E.apply(this, arguments)
            }

            function E() {
                return E = Object(s["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, r, a, s, o = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = o.length > 0 && void 0 !== o[0] ? o[0] : {}, t.next = 3, x();
                        case 3:
                            return n = t.sent, r = Object(i["a"])({
                                pagesize: e.pageSize || 20,
                                page: e.page || 1
                            }, n), t.next = 7, f["a"].get(g, {
                                params: r
                            });
                        case 7:
                            return a = t.sent, s = a.data, s.data = "A00000" === s.code ? L(s.data) : [], t.abrupt("return", s);
                        case 11:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), E.apply(this, arguments)
            }
            var A = 1,
                q = 2,
                N = 7,
                $ = 9;

            function V() {
                return B.apply(this, arguments)
            }

            function B() {
                return B = Object(s["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r, a, s, o = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (e = o.length > 0 && void 0 !== o[0] ? o[0] : 0, n = o.length > 1 && void 0 !== o[1] ? o[1] : 20, i = "A00000", r = [], a = 0, !Object(p["M"])()) {
                                t.next = 12;
                                break
                            }
                            return t.next = 8, U(e, n);
                        case 8:
                            s = t.sent, r = "A00000" === s.code ? H(s.data.data) : [], i = s.code, a = s.data.cnt;
                        case 12:
                            return t.abrupt("return", {
                                code: i,
                                total: a,
                                data: {
                                    total: a,
                                    favs: r,
                                    page: e,
                                    pageSize: n
                                }
                            });
                        case 13:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), B.apply(this, arguments)
            }

            function U() {
                return M.apply(this, arguments)
            }

            function M() {
                return M = Object(s["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r, a = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : 0, n = a.length > 1 && void 0 !== a[1] ? a[1] : 20, i = "//subscription.iqiyi.com/apis/watchlater/list.action", t.next = 5, f["a"].jsonp(i, {
                                params: {
                                    agentType: 1,
                                    subTypes: "".concat(A, ",").concat(q, ",").concat($, ",").concat(N),
                                    pageSize: n,
                                    page: e
                                }
                            });
                        case 5:
                            return r = t.sent, t.abrupt("return", r.data);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), M.apply(this, arguments)
            }

            function H() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return t.map(function (t) {
                    return {
                        channelId: t.channelId,
                        url: Object(d["S"])(t.videoUrl),
                        imageUrl: D(t.videoImageUrl),
                        name: t.videoName.replace("第1集", ""),
                        videoDuration: t.videoDuration,
                        playTime: d["t"].formatTime(t.videoDuration)
                    }
                })
            }

            function D(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /.(jpg|bmp|gif)/i;
                return /iqiyipic/i.test(t) ? t.replace(e, "_320_180.$1") : t
            }

            function F(t) {
                return Object(p["M"])() ? z(t) : X(t)
            }

            function z(t) {
                return W.apply(this, arguments)
            }

            function W() {
                return W = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, a, s;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Q(e);
                        case 2:
                            if (n = t.sent, i = n.data, i = void 0 === i ? {} : i, r = i.data, r = void 0 === r ? {} : r, a = r.data, s = void 0 === a ? [] : a, s.length) {
                                t.next = 10;
                                break
                            }
                            return t.abrupt("return", {
                                code: "000000",
                                cnt: 0,
                                data: {
                                    books: s,
                                    count: 0,
                                    page: e.pageNo,
                                    pageSize: e.pageSize
                                }
                            });
                        case 10:
                            return t.abrupt("return", {
                                code: n.code || "000000",
                                cnt: n.data.count || 0,
                                data: {
                                    books: s.reduce(function (t, e) {
                                        return 3 === e.status ? t : (t.push(G(e)), t)
                                    }, []),
                                    count: s.length,
                                    page: e.pageNo,
                                    pageSize: e.pageSize
                                }
                            });
                        case 11:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), W.apply(this, arguments)
            }

            function Q(t) {
                var e = "//api-yuedu.iqiyi.com/book/h5/cloudShelf/pullCloudShelf";
                return Object(d["E"])(e, tt(a()({
                    userId: Object(p["C"])(),
                    time: 0,
                    pageSize: 20,
                    pageNo: 1
                }, t)))
            }

            function X(t) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return Y = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, s, o, c, u;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, K(e);
                        case 2:
                            if (n = t.sent, i = n.data, i = void 0 === i ? {} : i, r = i.bookDetail, r) {
                                t.next = 8;
                                break
                            }
                            return t.abrupt("return", {
                                code: "000000"
                            });
                        case 8:
                            return t.next = 10, Z(r.bookId);
                        case 10:
                            if (s = t.sent, o = s.data, c = void 0 === o ? {} : o, u = J(c, 0), u) {
                                t.next = 16;
                                break
                            }
                            return t.abrupt("return", {
                                code: "000000"
                            });
                        case 16:
                            return r.readingProgress = 0, a()(r, u), t.abrupt("return", {
                                code: "A00001",
                                cnt: 1,
                                data: {
                                    books: [G(r)],
                                    count: 1,
                                    page: 1
                                }
                            });
                        case 19:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), Y.apply(this, arguments)
            }

            function G(t) {
                var e = t.bookId,
                    n = t.chapterId,
                    i = t.chapterTitle,
                    r = t.readingProgress,
                    a = t.serializeStatus,
                    s = t.pic,
                    o = t.picUrl,
                    c = void 0 === o ? s : o,
                    u = t.author,
                    l = t.title;
                return {
                    picUrl: c,
                    title: l,
                    readUrl: "//wenxue.m.iqiyi.com/book/reader-".concat(e, "-").concat(n, ".html"),
                    progressContent: r > 0 ? "进度：".concat(i) : "未开始阅读",
                    progressButton: "继续阅读",
                    content: 1 === a ? "已完结" : "连载中",
                    author: "作者：".concat(u)
                }
            }

            function J(t, e) {
                var n = t.volumes,
                    i = void 0 === n ? [] : n,
                    r = i[e] || {},
                    a = r.chapters,
                    s = void 0 === a ? [] : a;
                return s[e] || {}
            }

            function K(t) {
                var e = "//api-yuedu.iqiyi.com/book/h5/cloudShelf/recommondeBook";
                return t.userId = "read", Object(d["E"])(e, tt(t))
            }

            function Z(t) {
                var e = "//api-yuedu.iqiyi.com/book/h5/catalog/all";
                return Object(d["E"])(e, tt({
                    userId: "read",
                    pageSize: 20,
                    pageNo: 1,
                    bookId: t
                }))
            }

            function tt(t) {
                var e = "864394106400106",
                    n = (new Date).getTime();
                return a()({
                    qiyiId: e,
                    timeStamp: n,
                    srcPlatform: 15,
                    md5: l()("".concat(e).concat(t.userId).concat(n))
                }, t)
            }
        }, "7e9b": function (t, e, n) {
            "use strict";
            n.d(e, "d", function () {
                return p
            }), n.d(e, "e", function () {
                return v
            }), n.d(e, "b", function () {
                return S
            }), n.d(e, "c", function () {
                return C
            }), n.d(e, "a", function () {
                return T
            });
            n("57e7"), n("7514"), n("96cf");
            var i = n("3b8d"),
                r = (n("6d67"), n("0a0d")),
                a = n.n(r),
                s = n("cebc"),
                o = n("5321"),
                c = n("c0ba"),
                u = n("8296"),
                l = n("b2e7"),
                d = new c["a"](function (t, e, n) {
                    e.card && f(e, n)
                }, {
                    key: "_clickRecommend"
                }),
                p = {
                    bind: function (t, e, n) {
                        h(t, e, n)
                    }, unbind: function (t) {
                        d.unobserve(t)
                    }, update: function (t, e, n) {
                        d.unobserve(t), h(t, e, n)
                    }
                };

            function h(t, e, n) {
                var i = e.value || {},
                    r = i.card || {},
                    a = n.componentInstance || {},
                    o = a.videos || r.videos;
                d.observe(t, Object(s["a"])({
                    videos: o
                }, i))
            }

            function f(t, e) {
                if (t && t.pingback) {
                    var n = t.card,
                        i = t.pingback,
                        r = t.videos;
                    e.preventDefault();
                    var a = e.target,
                        s = Object(u["P"])(a, "LI"),
                        c = Object(u["F"])(s);
                    if ("number" === typeof c) {
                        var l = r[c];
                        if (l) {
                            var d = {
                                type: "recctplay20121226",
                                usract: "userclick",
                                area: i.area,
                                bkt: i.bkt,
                                event_id: i.event_id,
                                rank: c,
                                taid: l.albumId,
                                tcid: l.channelId,
                                block: n.cardName,
                                tagset: n.tag
                            };
                            Object(o["q"])(d), t.noRedirect || e.defaultPrevented || setTimeout(function () {
                                window.location.href = l.pageUrl
                            }, 200)
                        }
                    }
                }
            }
            var m = new c["b"](function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    y(e)
                }, {
                    key: "_interRecommendId"
                }),
                v = {
                    bind: function (t, e) {
                        m.observe(t, e.value || {})
                    }, inserted: function () {
                        m.notify()
                    }, unbind: function (t) {
                        m.unobserve(t)
                    }
                };

            function y(t) {
                if (t && t.pingback) {
                    var e = t.card,
                        n = t.pingback,
                        i = {
                            usract: 1,
                            type: "showlizard20130613",
                            area: n.area,
                            bkt: n.bkt,
                            event_id: n.event_id,
                            t: a()(),
                            albumlist: e.videos.map(function (t) {
                                return t.videoId || t.qipuId
                            }).join(","),
                            cid: e.videos.map(function (t) {
                                return t.channelId || t.cid
                            }).join(","),
                            block: e.cardName,
                            tagset: e.tag
                        };
                    Object(o["q"])(i)
                }
            }
            var g = new c["b"](function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    O(e)
                }, {
                    key: "_autoInterRecommendId"
                }),
                b = new c["b"](function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (e.card) {
                        var n = e.card,
                            i = e.block,
                            r = e.channelId;
                        Object(o["n"])({
                            t: 21,
                            block: i,
                            purl: r,
                            r_bkt: n.kvs.bkt,
                            r_area: n.kvs.r_area,
                            r_cid: n.kvs.r_cid,
                            r_eventid: n.kvs.e,
                            r_itemlist: n.kvs.itemlist,
                            r_rank: n.kvs.r_rank,
                            r_originl: n.kvs.r_originl,
                            r_source: n.kvs.r_source,
                            r_themeid: n.kvs.card_id,
                            r_isVip: n.kvs.r_isVip,
                            rpage: location.href,
                            hu: w || -1,
                            position: n.order,
                            abtest: ""
                        })
                    }
                }, {
                    key: "_newInterRecommendId"
                }),
                w = null,
                k = !1;

            function _() {
                return x.apply(this, arguments)
            }

            function x() {
                return x = Object(i["a"])(regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (Object(l["M"])()) {
                                t.next = 3;
                                break
                            }
                            return w = null, t.abrupt("return");
                        case 3:
                            return k = !0, t.next = 6, Object(l["u"])();
                        case 6:
                            if (e = t.sent, "A10002" !== e.code && "A10004" !== e.code) {
                                t.next = 11;
                                break
                            }
                            w = 0, t.next = 15;
                            break;
                        case 11:
                            return t.next = 13, Object(l["K"])().catch(function () {
                                w = 1
                            });
                        case 13:
                            n = t.sent, 0 === n.length ? w = -1 : n.indexOf(l["l"]) > -1 ? w = 3 : n.indexOf(l["k"]) > -1 ? w = 2 : n.indexOf(l["q"]) > -1 && (w = 4);
                        case 15:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), x.apply(this, arguments)
            }
            var S = {
                    bind: function () {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t(e, n) {
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (k) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, _();
                                case 3:
                                    g.observe(e, n.value || {});
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                            }, t)
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    inserted: function () {
                        g.notify()
                    }, unbind: function (t) {
                        g.unobserve(t)
                    }
                },
                C = {
                    bind: function () {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t(e, n) {
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (k) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, _();
                                case 3:
                                    b.observe(e, n.value || {});
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                            }, t)
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    inserted: function () {
                        b.notify()
                    }, unbind: function (t) {
                        b.unobserve(t)
                    }
                };

            function O(t) {
                if (t && t.block) {
                    var e = t.card,
                        n = t.block,
                        i = t.channelId,
                        r = t.index,
                        a = e.videos.find(function (t) {
                            return t.kvs && t.kvs.r_bkt
                        });
                    a && Object(o["n"])({
                        t: 21,
                        block: n,
                        purl: o["e"][i],
                        r_bkt: e.videos[0].kvs.r_bkt,
                        r_ext: e.videos[0].kvs.r_ext,
                        l_parm: e.videos[0].kvs.l_parm,
                        r_area: e.videos[0].kvs.l_ab,
                        r_vidlist: e.videos.map(function (t) {
                            return t.videoId
                        }).join(","),
                        position: r,
                        rpage: location.href,
                        hu: w
                    })
                }
            }
            var j = new c["a"](function (t, e, n) {
                    e.card && I(e, n)
                }, {
                    key: "_autoClickRecommend"
                }),
                T = {
                    bind: function (t, e, n) {
                        var i = e.value || {},
                            r = i.card || {},
                            a = n.componentInstance || {},
                            o = a.videos || r.videos;
                        j.observe(t, Object(s["a"])({
                            videos: o
                        }, i))
                    }, unbind: function (t) {
                        j.unobserve(t)
                    }
                };

            function I(t, e) {
                var n = t.card,
                    i = t.videos,
                    r = t.rseat,
                    a = t.channelId,
                    s = t.block,
                    c = t.rankStart,
                    l = e.target,
                    d = Object(u["P"])(l, "LI"),
                    p = Object(u["F"])(d),
                    h = i[p],
                    f = h.kvs || {};
                f.rseat = r || f.rseat, f.r_bkt && Object(o["n"])({
                    t: 20,
                    r_bkt: f.r_bkt,
                    r_ext: f.r_ext,
                    l_parm: f.l_parm,
                    r_area: f.r_area,
                    r_eventid: f.e,
                    r_originl: f.r_originl,
                    r_source: f.r_source,
                    l_ab: f.l_ab,
                    r_rank: c ? p + c : p,
                    r_tvid: h.videoId,
                    purl: o["e"][a] || a,
                    rseat: f.rseat,
                    r_tcid: a,
                    r_isVip: f.r_isVip,
                    r_themeid: n.kvs.card_id,
                    abtest: "",
                    block: s,
                    rpage: location.href,
                    hu: w || -1
                }), e.defaultPrevented || setTimeout(function () {
                    window.location.href = h.pageUrl
                }, 200)
            }
        }, 8530: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.show && !t.fullscreen,
                            expression: "show && !fullscreen"
                        }],
                        staticClass: "cover",
                        on: {
                            click: function (e) {
                                return t.$emit("coverClick")
                            }
                        }
                    }), n("transition", {
                        attrs: {
                            name: t.currTransition
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.show,
                            expression: "show"
                        }],
                        staticClass: "h-popup",
                        class: [t.position ? "h-popup-" + t.position + " h-popup-transition" : "", t.fullscreen ? "h-popup-fullscreen" : ""]
                    }, [n("div", {
                        staticStyle: {
                            height: "100%",
                            overflow: "scroll"
                        }
                    }, [t._t("default")], 2)])])], 1)
                },
                r = [],
                a = (n("c5f6"), {
                    name: "CommentReportPopup",
                    props: {
                        show: {
                            type: Boolean,
                            default: !1
                        },
                        transition: {
                            type: String,
                            default: "h-popup-slide"
                        },
                        position: {
                            type: String,
                            default: ""
                        },
                        fullscreen: {
                            type: Boolean,
                            default: !1
                        },
                        scrollTop: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            currTransition: this.popupTransition
                        }
                    }, watch: {
                        show: function (t) {
                            !t && this.hide()
                        }
                    }, beforeMount: function () {
                        this.currTransition = "" !== this.currTransition ? "h-popup-slide-".concat(this.position) : this.currTransition
                    }, methods: {
                        hide: function () {
                            var t = this;
                            this.$nextTick(function () {
                                document.body.scrollTop = t.scrollTop, document.documentElement.scrollTop = t.scrollTop
                            })
                        }
                    }
                }),
                s = a,
                o = (n("4f63"), n("2877")),
                c = Object(o["a"])(s, i, r, !1, null, "2edf3d91", null);
            e["a"] = c.exports
        }, "87ac": function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return _
            }), n.d(e, "e", function () {
                return A
            }), n.d(e, "h", function () {
                return M
            }), n.d(e, "g", function () {
                return D
            }), n.d(e, "d", function () {
                return F
            }), n.d(e, "j", function () {
                return W
            }), n.d(e, "c", function () {
                return Y
            }), n.d(e, "i", function () {
                return J
            }), n.d(e, "k", function () {
                return Z
            }), n.d(e, "l", function () {
                return et
            }), n.d(e, "f", function () {
                return it
            }), n.d(e, "m", function () {
                return rt
            });
            var i = n("5176"),
                r = n.n(i),
                a = n("0a0d"),
                s = n.n(a),
                o = (n("0cd8"), n("96cf"), n("a4bb")),
                c = n.n(o),
                u = (n("55dd"), n("a481"), n("ac6a"), n("f3e2"), n("3b8d")),
                l = n("936f"),
                d = n("8d81"),
                p = n.n(d),
                h = n("11ad"),
                f = n("b2e7"),
                m = n("b383"),
                v = n("5846"),
                y = n("5191"),
                g = n("8296"),
                b = n("a78e"),
                w = n.n(b),
                k = n("73d4");
            n.d(e, "b", function () {
                return k["a"]
            });
            var _ = "play_wechat_like_comment",
                x = "W3FfZnFY4OZgmxkL",
                S = "//sns-comment.iqiyi.com/v3/comment/publish.action",
                C = "//sns-comment.iqiyi.com/v3/comment/get_count_data.action",
                O = "//sns-comment.iqiyi.com/v3/comment/get_comments.action",
                j = "//sns-comment.iqiyi.com/v3/comment/like.action",
                T = "//sns-comment.iqiyi.com/v3/comment/remove_like.action",
                I = "//sns-comment.iqiyi.com/v3/comment/get_bulk_count_data.action",
                P = "//sns-comment.iqiyi.com/v3/comment/delete_comment.action",
                L = "//sns-comment.iqiyi.com/v3/comment/report_comment.action",
                R = 119,
                E = 17;

            function A() {
                return q.apply(this, arguments)
            }

            function q() {
                return q = Object(u["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r, a = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : {}, n = {
                                types: e.types,
                                content_id: e.tvid,
                                last_hot_id: e.hotLastId,
                                last_hot_score: e.lastHotScore,
                                last_id: e.commonLastId,
                                business_type: E,
                                agent_type: R,
                                agent_version: "9.9.0",
                                authcookie: Object(f["x"])()
                            }, t.next = 4, l["a"].jsonp(O, {
                                params: n
                            });
                        case 4:
                            if (i = t.sent, r = i && i.data && "A00000" === i.data.code ? i.data.data : null, !r) {
                                t.next = 13;
                                break
                            }
                            return N(r.hot), N(r.comments), t.next = 11, B(r.hot);
                        case 11:
                            return t.next = 13, B(r.comments);
                        case 13:
                            return t.abrupt("return", r);
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), q.apply(this, arguments)
            }

            function N() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                t.forEach(function (t) {
                    t.picture = t.picture ? $(t.picture) : t.picture, t.userInfo = t.userInfo ? V(t.userInfo) : t.userInfo
                })
            }

            function $(t) {
                return t.url = t.dynamicUrl || Object(g["db"])(t.url), t.smallUrl = t.dynamicUrl || Object(g["db"])(t.smallUrl), t
            }

            function V(t) {
                return t.icon = t.icon.replace(/^https?:/, ""), t
            }

            function B() {
                return U.apply(this, arguments)
            }

            function U() {
                return U = Object(u["a"])(regeneratorRuntime.mark(function t() {
                    var e, n = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : [], t.abrupt("return", Object(v["a"])({
                                data: e,
                                key: "content",
                                next: {
                                    dataKey: "replySource",
                                    key: "content"
                                }
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), U.apply(this, arguments)
            }

            function M() {
                return H.apply(this, arguments)
            }

            function H() {
                return H = Object(u["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = r.length > 0 && void 0 !== r[0] ? r[0] : "", n = r.length > 1 && void 0 !== r[1] ? r[1] : "", t.next = 4, l["a"].jsonp(h["g"], {
                                params: {
                                    authcookie: Object(f["x"])(),
                                    content_id: e,
                                    agent_version: "9.9.0",
                                    business_type: 17,
                                    agent_type: R,
                                    m_device_id: "f49d6f06b950f6ada6d850bdbaa71886",
                                    page_size: 10,
                                    last_id: n
                                }
                            });
                        case 4:
                            return i = t.sent, t.next = 7, B(i.data.data.comments);
                        case 7:
                            return t.abrupt("return", i.data.data);
                        case 8:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), H.apply(this, arguments)
            }

            function D(t, e) {
                var n = {
                    authcookie: Object(f["x"])(),
                    contentId: t,
                    businessType: 17
                };
                l["a"].jsonpCacheHot(C, {
                    params: n
                }, {
                    qStore: {
                        timeout: 200
                    }
                }).next(e)
            }

            function F(t) {
                return z.apply(this, arguments)
            }

            function z() {
                return z = Object(u["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, a;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = e.ids, i = {
                                businessType: 17,
                                content_ids: n || []
                            }, t.next = 4, l["a"].jsonp(I, {
                                params: i
                            });
                        case 4:
                            if (r = t.sent, "A00000" === r.data.code) {
                                t.next = 7;
                                break
                            }
                            return t.abrupt("return", {});
                        case 7:
                            return a = r.data.data || [], t.abrupt("return", a.reduce(function (t, e) {
                                return t[e.contentId] = e.commentCount, t
                            }, {}));
                        case 9:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), z.apply(this, arguments)
            }

            function W(t, e, n, i, r) {
                return Q.apply(this, arguments)
            }

            function Q() {
                return Q = Object(u["a"])(regeneratorRuntime.mark(function t(e, n, i, a, o) {
                    var u, d;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.t0 = Object(f["x"])(), t.t1 = e || "", t.t2 = n, t.t3 = s()(), t.next = 6, Object(y["b"])();
                        case 6:
                            return t.t4 = t.sent, u = {
                                authcookie: t.t0,
                                agenttype: 119,
                                agentversion: "9.9.0",
                                content_id: t.t1,
                                text: t.t2,
                                business_type: 17,
                                qypid: "02000021010000000000",
                                m_device_id: "02000021010000000000",
                                timestamp: t.t3,
                                dfp: t.t4
                            }, c()(i).length && r()(u, {
                                pic_width: i.width,
                                pic_height: i.height,
                                pic_url: i.url,
                                pic_swift_url: i.swift_url,
                                pic_type: i.type,
                                pic_fileId: i.fileId
                            }), o.isVideoPage ? (u.isVideoPage = o.isVideoPage, u.aid = o.aid, u.cid = o.cid) : u.reply_id = a, u.sign = X(u), d = null, t.prev = 12, t.next = 15, l["a"].post(S, Object(m["stringify"])(u));
                        case 15:
                            if (d = t.sent, "A00000" !== d.data.code) {
                                t.next = 20;
                                break
                            }
                            return t.abrupt("return", d.data.data);
                        case 20:
                            return t.abrupt("return", !1);
                        case 21:
                            t.next = 26;
                            break;
                        case 23:
                            return t.prev = 23, t.t5 = t["catch"](12), t.abrupt("return", !1);
                        case 26:
                        case "end":
                            return t.stop()
                        }
                    }, t, null, [
                        [12, 23]
                    ])
                })), Q.apply(this, arguments)
            }

            function X(t) {
                var e = c()(t).sort(),
                    n = "POST".concat(S.slice(2), "?");
                return e.forEach(function (e, i, r) {
                    n += "".concat(e, "=").concat(t[e]), i !== r.length - 1 && (n += "&")
                }), p()(n += x)
            }

            function Y(t) {
                return G.apply(this, arguments)
            }

            function G() {
                return G = Object(u["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                authcookie: Object(f["x"])(),
                                business_type: 17,
                                reply_id: e
                            }, t.prev = 1, t.next = 4, l["a"].post(P, Object(m["stringify"])(n));
                        case 4:
                            if (i = t.sent, "A00000" !== i.data.code) {
                                t.next = 9;
                                break
                            }
                            return t.abrupt("return", !0);
                        case 9:
                            return t.abrupt("return", !1);
                        case 10:
                            t.next = 15;
                            break;
                        case 12:
                            return t.prev = 12, t.t0 = t["catch"](1), t.abrupt("return", !1);
                        case 15:
                        case "end":
                            return t.stop()
                        }
                    }, t, null, [
                        [1, 12]
                    ])
                })), G.apply(this, arguments)
            }

            function J(t) {
                return K.apply(this, arguments)
            }

            function K() {
                return K = Object(u["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.t0 = Object(f["x"])(), t.t1 = e, t.next = 4, Object(y["b"])();
                        case 4:
                            return t.t2 = t.sent, n = {
                                business_type: 17,
                                authcookie: t.t0,
                                content_id: t.t1,
                                dfp: t.t2
                            }, t.next = 8, l["a"].jsonp(j, {
                                params: n
                            }).catch(function () {
                                return {}
                            });
                        case 8:
                            if (i = t.sent, !i || !i.data || "A00000" !== i.data.code) {
                                t.next = 13;
                                break
                            }
                            return t.abrupt("return", !0);
                        case 13:
                            return t.abrupt("return", !1);
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), K.apply(this, arguments)
            }

            function Z(t) {
                return tt.apply(this, arguments)
            }

            function tt() {
                return tt = Object(u["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.t0 = Object(f["x"])(), t.t1 = e, t.next = 4, Object(y["b"])();
                        case 4:
                            return t.t2 = t.sent, n = {
                                business_type: 17,
                                authcookie: t.t0,
                                content_id: t.t1,
                                dfp: t.t2
                            }, t.next = 8, l["a"].jsonp(T, {
                                params: n
                            }).catch(function () {
                                return {}
                            });
                        case 8:
                            if (i = t.sent, !i || !i.data || "A00000" !== i.data.code) {
                                t.next = 13;
                                break
                            }
                            return t.abrupt("return", !0);
                        case 13:
                            return t.abrupt("return", !1);
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), tt.apply(this, arguments)
            }

            function et(t) {
                return nt.apply(this, arguments)
            }

            function nt() {
                return nt = Object(u["a"])(regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                reason: e.reason,
                                other_reason: e.other_reason,
                                content_id: e.commentId,
                                authcookie: Object(f["x"])(),
                                business_type: 17
                            }, t.abrupt("return", l["a"].jsonp(L, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), nt.apply(this, arguments)
            }

            function it() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = w.a.get(t);
                return e = e ? JSON.parse(e) : null, e
            }

            function rt(t, e) {
                w.a.set(t, e, {
                    expires: 1 / 0,
                    domain: ".iqiyi.com",
                    path: "/"
                })
            }
        }, "8a88": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.show ? n("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "704251_bancommercial",
                            expression: "'704251_bancommercial'"
                        }],
                        staticClass: "m-player-tip"
                    }, [n("div", {
                        staticClass: "player-tip-inner"
                    }, [t._m(0), n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "704251_bantovip",
                            expression: "'704251_bantovip'"
                        }],
                        staticClass: "c-btn",
                        attrs: {
                            href: "https://m.iqiyi.com/pay.html?platform=97ae2982356f69d8&serviceCode=lyksc7aq36aedndk&pid=a0226bd958843452&fc=9254fde39b3da1a7&aid=" + (t.albumId || t.tvid)
                        }
                    }, [t._v("开通VIP会员")])])]) : t._e()
                },
                r = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "c-player-tip-info"
                        }, [t._v("\n      呃...广告无法正常播放了"), n("br"), t._v("\n      开通VIP广告权益，或关闭屏蔽广告功能\n    ")])
                    }
                ],
                a = (n("d92a"), n("c5f6"), {
                    name: "VideoLayerAdError",
                    props: {
                        albumId: {
                            type: Number,
                            default: 0
                        },
                        tvid: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            show: !1
                        }
                    }, beforeMount: function () {
                        var t = this;
                        window.__player__ || (window.__player__ = {}), window.__player__.errorTip = this.showLayer.bind(this);
                        var e = this.$parent;
                        e.$on("created", function () {
                            e.$on("load", function () {
                                t.show = !1
                            })
                        })
                    }, methods: {
                        showLayer: function () {
                            this.show = !0, this.$parent.src(""), this.$parent.$emit("layerShow", {
                                type: "adError"
                            })
                        }
                    }
                }),
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, "8a92": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n(t.is, {
                        tag: "a",
                        staticClass: "m-user-base",
                        attrs: {
                            to: t.to
                        }
                    }, [n("span", {
                        staticClass: "base-tit"
                    }, [t.icon ? n("i", {
                        class: ["c-myicon", t.icon]
                    }) : t._e(), t._v(t._s(t.title) + "\n  ")]), t._t("default"), n("i", {
                        staticClass: "c-glyphicon c-glyphicon-arrowRight"
                    })], 2)
                },
                r = [],
                a = {
                    name: "AuraNav",
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        icon: {
                            type: String,
                            default: ""
                        },
                        to: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        is: function () {
                            return this.to ? "router-link" : "a"
                        }
                    }
                },
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, "8b4a": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("PlayInfoLayer", t._g(t._b({
                        style: "overflow: hidden",
                        attrs: {
                            id: "PlayAlbumLayer",
                            "associated-id": t.videoInfo.qipuId,
                            "pop-class": "m-episode-pop",
                            "close-rseat": "507141_2",
                            name: "m-albumListLayer"
                        },
                        scopedSlots: t._u([{
                            key: "content",
                            fn: function () {
                                return [n("section", {
                                    staticClass: "g-tab-num g-tab-txt"
                                }, [n("div", {
                                    staticClass: "m-tab-num m-sliding"
                                }, [n("div", {
                                    staticClass: "m-tab-num-list m-sliding-list",
                                    staticStyle: {
                                        "-webkit-transform": "translate(0px, 0px) scale(1)",
                                        transform: "translate(0px, 0px) scale(1)"
                                    }
                                }, [n("span", {
                                    staticClass: "c-tab-item",
                                    class: ["c-tab-item", {
                                        selected: t.isNumList
                                    }],
                                    attrs: {
                                        name: "m-digit"
                                    },
                                    on: {
                                        click: function (e) {
                                            return t.changeListType("digit")
                                        }
                                    }
                                }, [t._v("选集")]), n("span", {
                                    directives: [{
                                        name: "pingback",
                                        rawName: "v-pingback",
                                        value: "810291_xjfjtab",
                                        expression: "'810291_xjfjtab'"
                                    }],
                                    class: ["c-tab-item", {
                                        selected: t.isTextList
                                    }],
                                    attrs: {
                                        name: "m-text"
                                    },
                                    on: {
                                        click: function (e) {
                                            return t.changeListType("text")
                                        }
                                    }
                                }, [t._v("分期简介")])])])]), n("section", {
                                    staticClass: "g-tab-num g-tab-episodeNum"
                                }, [n("VideoSourceTabs", {
                                    attrs: {
                                        "format-summary": t.sourceSummary,
                                        "cur-year": t.curDate.year,
                                        "cur-month": t.curDate.month,
                                        "paging-type": "group"
                                    },
                                    on: {
                                        changeTab: t.toggleChangeTab
                                    }
                                })], 1), t.isNumList ? n("PlayPositionLayer", {
                                    attrs: {
                                        "cur-page": t.page
                                    }
                                }, [n("div", {
                                    staticClass: "m-imgTextList m-episode-intro"
                                }, [n("ul", {
                                    staticClass: "imgTextList-item"
                                }, t._l(t.videos, function (e, i) {
                                    return n("li", {
                                        directives: [{
                                            name: "pingback",
                                            rawName: "v-pingback",
                                            value: "l" + (i + 1),
                                            expression: "`l${index + 1}`"
                                        }, {
                                            name: "play",
                                            rawName: "v-play",
                                            value: {
                                                continuous: t.continuous,
                                                card: "albumList",
                                                action: "upsert",
                                                selectClass: "selected",
                                                qipuId: e.qipuId,
                                                url: e.pageUrl,
                                                block: "lesson_area",
                                                rseat: "l" + (i + 1),
                                                index: e.index,
                                                redirect: t.redirectLink
                                            },
                                            expression: "{\n              continuous: continuous,\n              card: 'albumList',\n              action: 'upsert',\n              selectClass: 'selected',\n              qipuId: video.qipuId,\n              url: video.pageUrl,\n              block: 'lesson_area',\n              rseat: `l${index + 1}`,\n              index: video.index,\n              redirect: redirectLink\n            }"
                                        }],
                                        key: e.id + "_" + i + "_albumlayer",
                                        staticClass: "m-anthologyList-item",
                                        class: {
                                            selected: t.videoInfo.qipuId === e.qipuId
                                        },
                                        on: {
                                            click: t.toggleVideoClick
                                        }
                                    }, [n("a", {
                                        staticClass: "rank-link",
                                        attrs: {
                                            title: e.title,
                                            href: "javascript:void(0)"
                                        }
                                    }, [n("div", {
                                        staticClass: "img",
                                        style: "background-image:url(" + e.imageUrl + ");"
                                    }, [n("div", {
                                        staticClass: "c-rt"
                                    }, [e.upperRightCorner ? n("AuraVideoPicicon", {
                                        attrs: {
                                            text: e.upperRightCorner
                                        }
                                    }) : t._e()], 1), n("div", {
                                        staticClass: "c-rb"
                                    }, [n("span", {
                                        staticClass: "c-date"
                                    }, [t._v(t._s(e.period))])])]), n("div", {
                                        staticClass: "info"
                                    }, [n("span", {
                                        staticClass: "c-title"
                                    }, [t._v(t._s(e.shortTitle))]), t.subTemplate.source ? n("span", {
                                        staticClass: "c-video"
                                    }, [t._v("本期热度 " + t._s(e.hotNum))]) : n("span", {
                                        staticClass: "c-video"
                                    }, [t._v("热度 " + t._s(e.hotNum))])])])])
                                }), 0)])]) : t.isTextList ? n("PlayPositionLayer", {
                                    attrs: {
                                        "cur-page": t.page
                                    }
                                }, [n("SourceText", {
                                    attrs: {
                                        videos: t.videos,
                                        "is-load": t.isLoad,
                                        continuous: t.continuous,
                                        "redirect-link": t.redirectLink,
                                        "cur-page": t.page
                                    }
                                })], 1) : t._e()]
                            }, proxy: !0
                        }])
                    }, "PlayInfoLayer", t.$attrs, !1), t.$listeners))
                },
                r = [],
                a = n("a745"),
                s = n.n(a),
                o = n("bd86"),
                c = (n("96cf"), n("3b8d")),
                u = (n("20d6"), n("a481"), n("7514"), n("ac6a"), n("f3e2"), n("0cd8"), n("cebc")),
                l = n("2f62"),
                d = n("d7dd"),
                p = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t.videos && t.videos.length ? n("section", {
                        staticClass: "c-dramasList m-episode-intro",
                        staticStyle: {
                            overflow: "scroll-y"
                        },
                        attrs: {
                            name: "m-text"
                        }
                    }, t._l(t.videos, function (e, i) {
                        return n("div", {
                            key: e.id + "_" + i + "_albumlayer",
                            attrs: {
                                title: e.title
                            },
                            on: {
                                click: t.toggleVideoClick
                            }
                        }, [n("div", {
                            directives: [{
                                name: "play",
                                rawName: "v-play",
                                value: {
                                    card: "albumList",
                                    continuous: t.continuous,
                                    url: e.pageUrl,
                                    qipuId: e.qipuId,
                                    vfrm: t.vfrm,
                                    index: e.index,
                                    redirect: t.redirectLink
                                },
                                expression: "{\n          card: 'albumList',\n          continuous: continuous,\n          url: video.pageUrl,\n          qipuId: video.qipuId,\n          vfrm: vfrm,\n          index: video.index,\n          redirect: redirectLink\n        }"
                            }],
                            staticClass: "c-title-xs",
                            class: {
                                selected: t.videoInfo.qipuId === e.qipuId
                            }
                        }, [t._m(0, !0), e.subTitle ? n("span", [n("span", {
                            staticClass: "album-info"
                        }, [t._v(t._s(e.subTitle))])]) : n("span", [n("span", {
                            staticClass: "album-info"
                        }, [t._v(t._s(e.pd))]), t._v(t._s(e.vt || e.shortTitle) + "\n        ")])]), e.desc ? n("div", {
                            staticClass: "info",
                            attrs: {
                                "data-descQipuID": e.qipuId
                            }
                        }, [t._v("\n        " + t._s(e.desc) + "\n      ")]) : t._e()])
                    }), 0) : t.isLoad ? n("section", {
                        staticClass: "m-loading-info"
                    }, [n("div", {
                        staticClass: "c-info"
                    }, [t._v("当前剧集目前暂无内容或版权，请持续关注更新")])]) : t._e()])
                },
                h = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("span", {
                            staticClass: "video-status"
                        }, [n("i", {
                            staticClass: "c-playPage-icon c-playPage-play"
                        })])
                    }
                ],
                f = (n("c5f6"), {
                    name: "SourceText",
                    props: {
                        videos: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        vfrm: {
                            type: String,
                            default: ""
                        },
                        isLoad: {
                            type: Boolean,
                            default: !1
                        },
                        continuous: {
                            type: Boolean,
                            default: !0
                        },
                        redirectLink: {
                            type: Boolean,
                            default: !1
                        },
                        curPage: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: Object(u["a"])({}, Object(l["e"])("play", ["videoList", "albumInfo", "subTemplate", "videoInfo", "sourceListInfo", "layerPage", "layerOpen"]), {
                        selectIndex: function () {
                            return this.videoInfo.order
                        }
                    }),
                    watch: {
                        page: function (t, e) {
                            t !== e && (this.videos = this.sourceListInfo[this.page])
                        }, layerOpen: function (t) {
                            t && (this.page = this.getPage(), this.videos = this.sourceListInfo[this.page])
                        }
                    },
                    methods: {
                        getPage: function () {
                            return this.selectIndex ? Math.ceil(this.selectIndex / this.videoList.pageSize) : this.videoList.currentPage
                        }, toggleVideoClick: function () {
                            this.$store.dispatch("play/layerPage", this.curPage)
                        }
                    }
                }),
                m = f,
                v = n("2877"),
                y = Object(v["a"])(m, p, h, !1, null, null, null),
                g = y.exports,
                b = n("d4db"),
                w = n("1d52"),
                k = n("dbce"),
                _ = n("21fd"),
                x = n("5a0c"),
                S = n.n(x),
                C = {
                    name: "SourceLayer",
                    components: {
                        PlayInfoLayer: b["a"],
                        VideoSourceTabs: d["a"],
                        PlayPositionLayer: k["a"],
                        SourceText: g
                    },
                    props: {
                        continuous: {
                            type: Boolean,
                            default: !0
                        },
                        redirectLink: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            page: 0,
                            videos: [],
                            listType: "digit",
                            isLoad: !1
                        }
                    }, computed: Object(u["a"])({}, Object(l["e"])("play", ["albumInfo", "videoInfo", "subTemplate", "videoList", "sourceListInfo", "sourceSummary", "layerOpen", "secureJsonpToken"]), {
                        curDate: function () {
                            return {
                                year: this.videoInfo.period.slice(0, 4),
                                month: this.videoInfo.period.slice(4, 6)
                            }
                        }, updateStatus: function () {
                            return this.subTemplate.source && this.albumInfo.showContent ? this.albumInfo.showContent : this.subTemplate.short ? this.videoInfo.issueTime + "发布" : ""
                        }, isNumList: function () {
                            return "digit" === this.listType
                        }, isTextList: function () {
                            return "text" === this.listType
                        }, summary: function () {
                            var t = this.videoList.summary,
                                e = [];
                            return t.reduce(function (t, n) {
                                n.monthList.forEach(function (t) {
                                    e.push({
                                        year: n.year,
                                        month: t
                                    })
                                })
                            }, {}), e
                        }
                    }),
                    watch: {
                        page: function (t, e) {
                            t !== e && (this.videos = this.sourceListInfo[this.page])
                        }, layerOpen: function (t) {
                            t && (this.setPage(this.curDate), this.videos = this.sourceListInfo[this.page])
                        }
                    },
                    methods: {
                        title: function (t) {
                            if (this.subTemplate.source) {
                                var e = t.period ? S()(t.period).format("YYYY-MM-DD") : "",
                                    n = this.formatTitle(t.shortTitle);
                                return (e ? "".concat(e, "期") : "") + (n ? ": ".concat(n) : "")
                            }
                            return t.videoName || t.shortTitle
                        }, formatTitle: function (t) {
                            var e = [/第[\d]*集/, /[\d]*\./, /[\d]*、/, /[\d]*\s/];
                            return e.find(function (e) {
                                e.test(t) && (t = t.replace(e, ""))
                            }), t
                        }, setPage: function (t) {
                            this.page = this.sourceSummary.findIndex(function (e) {
                                return e.year === t.year && e.month === t.month
                            })
                        }, setCurDate: function (t) {
                            this.curDate = t
                        }, callNext: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark(function t(e) {
                                var n, i, r;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.curVideo, i = this.page, r = this.sourceListInfo[i].findIndex(function (t) {
                                            return t.qipuId === n.qipuId
                                        }) + 1, r !== this.sourceListInfo[i].length) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 6, this.toggleChangeTab(this.summary[this.page + 1], this.page + 1);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        toggleChangeTab: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark(function t(e, n) {
                                var i, r, a;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.setPage(e), i = this.sourceListInfo[n || this.page], !i || !i.length) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return r = {
                                            sourceId: this.videoInfo.sourceId,
                                            year: e.year,
                                            month: e.month,
                                            token: this.secureJsonpToken
                                        }, t.next = 7, Object(w["d"])(r);
                                    case 7:
                                        a = t.sent, this.videos = this.formatVideos(a, n || this.page), this.$store.dispatch("play/sourceListInfo", Object(o["a"])({}, this.page, this.videos));
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e, n) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        formatVideos: function (t, e) {
                            var n = this;
                            return s()(t) && t.length ? (t.forEach(function (t, i) {
                                t.index = Object(w["c"])(e, i), t.period = S()(t.period).format("YYYY-MM-DD"), t.upperRightCorner = Object(_["j"])(t), t.order = t.pd, t.title = n.title(t)
                            }), t) : []
                        }, toggleVideoClick: function () {
                            this.$store.dispatch("play/layerPage", this.page)
                        }, changeListType: function (t) {
                            this.listType = t
                        }
                    }
                },
                O = C,
                j = Object(v["a"])(O, i, r, !1, null, null, null);
            e["a"] = j.exports
        }, "8c18": function (t, e, n) {
            var i = n("657d");
            "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var r = n("499e").default;
            r("144c8554", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        }, "8ce2": function (t, e, n) {
            "use strict";
            n.d(e, "c", function () {
                return f
            }), n.d(e, "b", function () {
                return v
            }), n.d(e, "a", function () {
                return g
            }), n.d(e, "d", function () {
                return w
            });
            var i = n("a745"),
                r = n.n(i),
                a = (n("6d67"), n("96cf"), n("3b8d")),
                s = n("936f"),
                o = n("11ad"),
                c = n("1a51"),
                u = n("5321"),
                l = n("b2e7"),
                d = n("6f18"),
                p = n("8296"),
                h = n("21fd");

            function f(t) {
                return m.apply(this, arguments)
            }

            function m() {
                return m = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, a, c, u, l = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = l.length > 1 && void 0 !== l[1] ? l[1] : 1, i = l.length > 2 && void 0 !== l[2] ? l[2] : 10, e = 7 === "".concat(e).length ? e + "02" : e, a = {
                                page: n,
                                size: i
                            }, t.next = 6, s["a"].jsonp("".concat(o["n"]).concat(e, "/"), {
                                params: a,
                                withCredentials: !0
                            });
                        case 6:
                            if (c = t.sent, u = c && c.data && c.data.data || {}, u.videos && !(u.videos.length <= 0)) {
                                t.next = 12;
                                break
                            }
                            return t.abrupt("return", null);
                        case 12:
                            return u.videos = u.videos.map(function (t, e) {
                                return t.index = (n - 1) * i + (e + 1), t.tags && r()(t.tags) && t.tags.length > 0 ? t.tags = t.tags.join("·") : t.tags = "", t.mainActors && r()(t.mainActors) && t.mainActors.length > 0 ? t.mainActors = t.mainActors.join("/") : t.mainActors = "", t.imageUrl = t.imageUrl ? Object(p["v"])(t.imageUrl, "480_270") : "", t.qualityImageUrl = t.qualityImageUrl ? Object(p["v"])(t.qualityImageUrl, "180_236") : "", t.endImageUrl = t.qualityImageUrl ? Object(p["v"])(t.qualityImageUrl, "284_160") : "", t.duration = p["t"].formatTime(+t.duration), t.play = {
                                    qipuId: t.qipuId,
                                    url: t.videoUrl || t.pageUrl,
                                    noUpdateUrl: !0,
                                    card: "feed",
                                    action: "upsert",
                                    position: "DIV",
                                    playStrategy: "screenOutStopContinue",
                                    continuous: !1,
                                    player: {
                                        title: !0
                                    }
                                }, t
                            }), t.abrupt("return", u.videos);
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), m.apply(this, arguments)
            }

            function v(t) {
                return y.apply(this, arguments)
            }

            function y() {
                return y = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, a, c, u = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = u.length > 1 && void 0 !== u[1] ? u[1] : 1, i = u.length > 2 && void 0 !== u[2] ? u[2] : 10, e = 7 === "".concat(e).length ? e + "02" : e, r = {
                                page: n,
                                size: i
                            }, t.next = 6, s["a"].jsonp("".concat(o["n"]).concat(e, "/"), {
                                params: r,
                                withCredentials: !0
                            });
                        case 6:
                            if (a = t.sent, c = a && a.data && a.data.data || {}, c.items && !(c.items.length <= 0)) {
                                t.next = 12;
                                break
                            }
                            return t.abrupt("return", null);
                        case 12:
                            return c.items = c.items.map(function (t, e) {
                                return t.index = (n - 1) * i + (e + 1), t.imageUrl = t.imageUrl ? Object(p["v"])(t.imageUrl, "320_180") : "", t.upperRightCorner = Object(h["p"])(t), t.issueTime = p["t"].formatTimeStr(+t.issueTime) + "发布", t
                            }), t.abrupt("return", c.items);
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), y.apply(this, arguments)
            }

            function g(t, e, n) {
                return b.apply(this, arguments)
            }

            function b() {
                return b = Object(a["a"])(regeneratorRuntime.mark(function t(e, n, i) {
                    var r, a, s;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (!Object(l["M"])()) {
                                t.next = 24;
                                break
                            }
                            if (r = {
                                subType: e.videoType,
                                channelId: e.cid,
                                subKey: e.albumId || e.id
                            }, i) {
                                t.next = 14;
                                break
                            }
                            return t.next = 5, Object(c["g"])(r);
                        case 5:
                            if (a = t.sent, !a.success) {
                                t.next = 11;
                                break
                            }
                            return Object(u["g"])({
                                rseat: n
                            }), t.abrupt("return", {
                                success: !0,
                                msg: "收藏成功，可在“我的”页面查看"
                            });
                        case 11:
                            return t.abrupt("return", {
                                success: !1,
                                msg: "网络异常，请稍后重试"
                            });
                        case 12:
                            t.next = 22;
                            break;
                        case 14:
                            return t.next = 16, Object(c["f"])(r);
                        case 16:
                            if (s = t.sent, !s.success) {
                                t.next = 21;
                                break
                            }
                            return t.abrupt("return", {
                                success: !0,
                                msg: "已取消收藏"
                            });
                        case 21:
                            return t.abrupt("return", {
                                success: !1,
                                msg: "网络异常，请稍后重试"
                            });
                        case 22:
                            t.next = 25;
                            break;
                        case 24:
                            Object(l["O"])();
                        case 25:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), b.apply(this, arguments)
            }

            function w(t, e, n) {
                return k.apply(this, arguments)
            }

            function k() {
                return k = Object(a["a"])(regeneratorRuntime.mark(function t(e, n, i) {
                    var r, a, s, o, c, p;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (!Object(l["M"])()) {
                                t.next = 20;
                                break
                            }
                            return r = "1" === n.kvs.subscribeStatus, a = {
                                subKeys: e,
                                isSubed: r
                            }, t.next = 5, Object(d["f"])(a);
                        case 5:
                            if (s = t.sent, s) {
                                t.next = 9;
                                break
                            }
                            return o = "由于网络问题，请稍后重试", t.abrupt("return", {
                                success: !1,
                                msg: o
                            });
                        case 9:
                            if (!s.success) {
                                t.next = 16;
                                break
                            }
                            return r || Object(u["g"])({
                                rseat: i
                            }), n.kvs.subscribeStatus = r ? "0" : "1", c = r ? "预约已取消" : "预约成功<br>下载手机APP，上线立即提醒您 ", t.abrupt("return", {
                                success: !0,
                                msg: c
                            });
                        case 16:
                            return p = r ? "取消预约失败，请稍后重试" : "预约失败，请稍后重试", t.abrupt("return", {
                                success: !1,
                                msg: p
                            });
                        case 18:
                            t.next = 21;
                            break;
                        case 20:
                            Object(l["O"])();
                        case 21:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), k.apply(this, arguments)
            }
        }, "9a35": function (t, e, n) {
            "use strict";
            n("96cf");
            var i, r, a = n("3b8d"),
                s = (n("c5f6"), n("21fd")),
                o = n("8296"),
                c = {
                    name: "VideoCount",
                    props: {
                        status: {
                            type: Number,
                            required: !0
                        },
                        count: {
                            type: Number,
                            default: 0
                        },
                        id: {
                            type: Number,
                            default: 0
                        },
                        hotTitle: {
                            type: String,
                            default: "热度"
                        }
                    },
                    data: function () {
                        return {
                            value: null
                        }
                    }, computed: {
                        isRemote: function () {
                            return this.id && !this.count
                        }
                    }, watch: {
                        count: function () {
                            this.initCount()
                        }, id: function () {
                            this.initCount()
                        }
                    }, beforeMount: function () {
                        this.initCount()
                    }, methods: {
                        initCount: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.isRemote) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 3, Object(s["q"])(this.id, this.status);
                                    case 3:
                                        e = t.sent, t.next = 7;
                                        break;
                                    case 6:
                                        e = this.count;
                                    case 7:
                                        e && (this.value = Object(o["w"])(e));
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, render: function (t) {
                        return 1 === this.status && this.value ? t("span", {
                            class: this.isRemote ? "play-count" : "c-video"
                        }, [this.hotTitle, " ", this.value]) : 0 === this.status ? this.isRemote ? t("span", {
                            class: "play-count"
                        }, [t("i", {
                            class: "c-glyphicon c-glyphicon-album-Bplay"
                        }), this.value]) : t("span", {
                            class: "c-video"
                        }, [this.value, "次播放"]) : void 0
                    }
                },
                u = c,
                l = n("2877"),
                d = Object(l["a"])(u, i, r, !1, null, null, null);
            e["a"] = d.exports
        }, "9ba8": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        directives: [{
                            name: "play",
                            rawName: "v-play",
                            value: t.getVPlay(t.video),
                            expression: "getVPlay(video)"
                        }, {
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.rseat,
                            expression: "rseat"
                        }],
                        staticClass: "m-video-player",
                        on: {
                            click: function () {}
                        }
                    }, [n("div", {
                        staticClass: "m-video-poster"
                    }, [n("img", {
                        attrs: {
                            id: "player-posterimg",
                            src: t.video.imageUrl
                        }
                    })]), t._m(0), n("div", {
                        staticClass: "video-title"
                    }, [n("span", {
                        staticClass: "c-title"
                    }, [t._v(t._s(t.video.mainTitle))])]), n("div", {
                        staticClass: "playCount-time"
                    }, [t.video.showContent ? n("span", {
                        staticClass: "c-num"
                    }, [t._v("\n      " + t._s(t.video.showContent) + "\n    ")]) : t._e(), t.video.duration ? n("span", {
                        staticClass: "c-time"
                    }, [t._v("\n      " + t._s(t.video.duration) + "\n    ")]) : t._e()])])
                },
                r = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "c-videoplay"
                        }, [n("i", {
                            staticClass: "c-player-icon c-player-big"
                        })])
                    }
                ],
                a = n("cebc"),
                s = {
                    name: "PlayerPlaceholder",
                    inheritAttrs: !1,
                    props: {
                        video: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        callback: {
                            type: Function,
                            default: null
                        },
                        cardName: {
                            type: String,
                            default: "feed"
                        },
                        rseat: {
                            type: String,
                            default: ""
                        },
                        playOptions: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        }
                    },
                    methods: {
                        getVPlay: function (t) {
                            return Object(a["a"])({
                                qipuId: t.qipuId,
                                url: t.url,
                                noUpdateUrl: !0,
                                card: this.cardName,
                                action: "upsert",
                                position: "DIV",
                                playStrategy: "screenOutStopContinue",
                                continuous: !0,
                                source: {
                                    noAD: !0
                                },
                                player: {
                                    title: !0
                                },
                                hook: this.callback
                            }, this.playOptions)
                        }
                    }
                },
                o = s,
                c = n("2877"),
                u = Object(c["a"])(o, i, r, !1, null, null, null);
            e["a"] = u.exports
        }, "9bf7": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        ref: "selElem",
                        staticClass: "m-tab-num-list m-sliding-list"
                    }, t._l(t.tags, function (e, i) {
                        return n("span", {
                            key: i,
                            class: ["c-tab-item", {
                                selected: i == t.curGroupIndex
                            }],
                            on: {
                                click: function (e) {
                                    return t.changeTag(i)
                                }
                            }
                        }, [t._v(t._s(e.groupName))])
                    }), 0)
                },
                r = [],
                a = {
                    name: "VideoEpisodeTabs",
                    props: {
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        pagingType: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            tags: [],
                            curGroupIndex: 0
                        }
                    }, watch: {
                        videoInfo: function (t, e) {
                            e && t.currentPage === e.currentPage || this.paging()
                        }
                    }, mounted: function () {
                        this.paging(), this.setTagPosition()
                    }, methods: {
                        paging: function () {
                            if (!this.videoInfo) return !1;
                            this.tags = [];
                            var t, e = this.videoInfo.total,
                                n = this.videoInfo.pageSize || 10,
                                i = this.videoInfo.currentPage - 1,
                                r = 0;
                            "video" === this.pagingType ? t = 0 !== i ? i : 1 : this.curGroupIndex = i || 0, r = e % n === 0 ? e / n - 1 : e / n;
                            for (var a = 0; a <= r; a++) {
                                var s = a * n + 1,
                                    o = (a + 1) * n,
                                    c = Math.min(o, e),
                                    u = s === e ? s : "".concat(s, "-").concat(c);
                                t && t >= s && t <= c && (this.curGroupIndex = a), this.tags.push({
                                    from: s,
                                    end: o,
                                    to: c,
                                    groupName: u
                                })
                            }
                        }, setTagPosition: function () {
                            this.$nextTick(function () {})
                        }, changeTag: function (t) {
                            this.curGroupIndex = t, this.$emit("changeTag", t + 1)
                        }
                    }
                },
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, "9e5e": function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.rootShow,
                            expression: "rootShow"
                        }],
                        staticClass: "m-sideBar",
                        staticStyle: {
                            display: "none"
                        }
                    }, [n("div", {}, [n("a", {
                        staticClass: "m-goTop",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                return e.stopPropagation(), e.preventDefault(), t.backTop(e)
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-arrowUp"
                    }), n("span", [t._v("顶部")])])])])
                },
                r = [],
                a = (n("c5f6"), {
                    name: "BackTop",
                    props: {
                        height: {
                            type: Number,
                            default: 2e3
                        }
                    },
                    data: function () {
                        return {
                            rootShow: !1
                        }
                    }, mounted: function () {
                        this.scrollFn = this.onScroll()
                    }, destroyed: function () {
                        this.scrollFn()
                    }, methods: {
                        onScroll: function () {
                            var t, e = this,
                                n = function () {
                                    cancelAnimationFrame(t), t = requestAnimationFrame(function () {
                                        var t = document.documentElement.scrollTop || document.body.scrollTop;
                                        e.rootShow = t >= e.height
                                    })
                                };
                            return window.addEventListener("scroll", n),
                                function () {
                                    window.removeEventListener("scroll", n)
                                }
                        }, backTop: function () {
                            document.documentElement.scrollTop = 0, document.body.scrollTop = 0
                        }
                    }
                }),
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, a542: function (t, e, n) {
            "use strict";
            var i = function (t, e) {
                    var n = e._c;
                    return n("section", {
                        staticClass: "m-appeal-pageTip"
                    }, [n("div", {
                        staticClass: "info"
                    }, [e._t("body"), e._v("\n    " + e._s(e.props.note) + "\n  ")], 2)])
                },
                r = [],
                a = n("2877"),
                s = {},
                o = Object(a["a"])(s, i, r, !0, null, null, null);
            e["a"] = o.exports
        }, a5a6: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "input-wrap"
                    }, [t._t("area"), n("div", {
                        staticClass: "input-component"
                    }, ["checkbox" === t.type ? n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.input,
                            expression: "input"
                        }],
                        ref: "input",
                        staticClass: "input-text",
                        attrs: {
                            placeholder: t.placeholder,
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.input) ? t._i(t.input, null) > -1 : t.input
                        },
                        on: {
                            input: t.changeValue,
                            blur: function (e) {
                                return t.$emit("blur:input")
                            }, change: function (e) {
                                var n = t.input,
                                    i = e.target,
                                    r = !!i.checked;
                                if (Array.isArray(n)) {
                                    var a = null,
                                        s = t._i(n, a);
                                    i.checked ? s < 0 && (t.input = n.concat([a])) : s > -1 && (t.input = n.slice(0, s).concat(n.slice(s + 1)))
                                } else t.input = r
                            }
                        }
                    }) : "radio" === t.type ? n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.input,
                            expression: "input"
                        }],
                        ref: "input",
                        staticClass: "input-text",
                        attrs: {
                            placeholder: t.placeholder,
                            type: "radio"
                        },
                        domProps: {
                            checked: t._q(t.input, null)
                        },
                        on: {
                            input: t.changeValue,
                            blur: function (e) {
                                return t.$emit("blur:input")
                            }, change: function (e) {
                                t.input = null
                            }
                        }
                    }) : n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.input,
                            expression: "input"
                        }],
                        ref: "input",
                        staticClass: "input-text",
                        attrs: {
                            placeholder: t.placeholder,
                            type: t.type
                        },
                        domProps: {
                            value: t.input
                        },
                        on: {
                            input: [
                                function (e) {
                                    e.target.composing || (t.input = e.target.value)
                                },
                                t.changeValue
                            ],
                            blur: function (e) {
                                return t.$emit("blur:input")
                            }
                        }
                    }), n("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.input && t.isNeedClear,
                            expression: "input && isNeedClear"
                        }],
                        staticClass: "input-delete",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.clear
                        }
                    }, [n("i", {
                        staticClass: "c-passport-icon icon-delete"
                    })]), t._t("right")], 2), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.inputTip,
                            expression: "inputTip"
                        }],
                        staticClass: "input-tip"
                    }, [t._v(t._s(t.inputTip))]), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.mailListShow,
                            expression: "mailListShow"
                        }],
                        staticClass: "email-pop"
                    }, [n("ul", {
                        staticClass: "list-item"
                    }, t._l(t.mailList, function (e, i) {
                        return n("li", {
                            key: i,
                            on: {
                                click: function (n) {
                                    return t.completeAccount(t.mailName + "@" + e)
                                }
                            }
                        }, [t._v("\n          " + t._s(t.mailName + "@" + e) + "\n        ")])
                    }), 0)])], 2), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.err,
                            expression: "err"
                        }],
                        staticClass: "input-tip input-warn"
                    }, [n("i", {
                        staticClass: "c-passport-icon icon-warn"
                    }), t._v(t._s(t.err) + "\n  ")])])
                },
                r = [],
                a = (n("4f37"), n("57e7"), n("d25f"), n("4917"), n("fdc4")),
                s = n("8296"),
                o = {
                    name: "AppealInput",
                    props: {
                        placeholder: {
                            type: String,
                            default: ""
                        },
                        err: {
                            type: String,
                            default: ""
                        },
                        value: {
                            type: String,
                            default: ""
                        },
                        inputTip: {
                            type: String,
                            default: ""
                        },
                        type: {
                            type: String,
                            default: "text"
                        },
                        isNeedClear: {
                            type: Boolean,
                            default: !0
                        },
                        formatCallback: {
                            type: Function,
                            default: null
                        },
                        isMoveRange: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            input: this.value,
                            mailListShow: !1
                        }
                    }, computed: {
                        mailName: function () {
                            return this.input.match(/(.*)@/) && this.input.match(/(.*)@/)[1]
                        }, mailList: function () {
                            var t = this;
                            return a["e"].filter(function (e) {
                                return e.indexOf(t.input.match(/@(.*)/) && t.input.match(/@(.*)/)[1]) > -1
                            })
                        }
                    }, watch: {
                        input: function (t) {
                            this.mailListShow = this.mailList.length && this.input.indexOf("@") > -1
                        }
                    }, methods: {
                        focusInput: function () {
                            this.$refs.input.focus()
                        }, clear: function () {
                            this.input = "", this.$emit("update:value", "")
                        }, changeValue: function () {
                            this.input = this.input.trim(), "function" === typeof this.formatCallback && (this.input = this.formatCallback(this.input)), this.isMoveRange && Object(s["G"])(this.$refs.input), this.$emit("update:value", this.input)
                        }, completeAccount: function (t) {
                            var e = this;
                            this.input = t.trim(), this.$nextTick(function () {
                                e.mailListShow = !1
                            }), this.mailListShow = !1, this.$emit("update:value", this.input)
                        }
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = l.exports
        }, a8db: function (t, e, n) {
            "use strict";
            var i = n("e265"),
                r = n.n(i),
                a = n("a4bb"),
                s = n.n(a);

            function o(t, e) {
                if (null == t) return {};
                var n, i, r = {},
                    a = s()(t);
                for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
                return r
            }

            function c(t, e) {
                if (null == t) return {};
                var n, i, a = o(t, e);
                if (r.a) {
                    var s = r()(t);
                    for (i = 0; i < s.length; i++) n = s[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            n.d(e, "a", function () {
                return c
            })
        }, aa91: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t.loadShow ? n("div", {
                        staticClass: "m-loading-circle"
                    }, [n("i", {
                        staticClass: "green-circle-icon loading-rotate"
                    })]) : t._e(), t._t("error", [!t.loadShow && t.errorShow ? n("section", {
                        staticClass: "m-nowifi-tip"
                    }, [n("i", {
                        staticClass: "wifi-icon"
                    }), n("div", {
                        staticClass: "info"
                    }, [t._v("哎呀，数据获取失败~")]), n("div", {
                        staticClass: "btn-wrap"
                    }, [t._m(0), n("div", {
                        staticClass: "btn-link"
                    }, [n("a", {
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                return t.load()
                            }
                        }
                    }, [t._v("\n            刷新一下\n          ")])])])]) : t._e()]), t.loadShow || t.errorShow ? t._e() : n("div", [t._t("default")], 2)], 2)
                },
                r = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "btn-link"
                        }, [n("a", {
                            staticClass: "c-link",
                            attrs: {
                                href: "/"
                            }
                        }, [t._v("去爱奇艺首页\n          ")])])
                    }
                ],
                a = n("795b"),
                s = n.n(a),
                o = {
                    name: "LoadPage",
                    props: {
                        callback: {
                            type: Function,
                            default: null
                        },
                        initLoad: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function () {
                        return {
                            errorShow: !1,
                            loadShow: this.initLoad,
                            callbackFn: this.callback
                        }
                    }, beforeMount: function () {
                        this.load()
                    }, methods: {
                        load: function (t) {
                            var e = this,
                                n = t || this.callbackFn;
                            if (n) return this.callbackFn = n, this.loadShow = !0, s.a.resolve(n()).then(function () {
                                e.loadShow = !1, e.errorShow = !1
                            }, function () {
                                e.loadShow = !1, e.errorShow = !0
                            })
                        }
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = l.exports
        }, b163: function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return g
            }), n.d(e, "a", function () {
                return b
            });
            n("96cf"), n("4f37"), n("57e7"), n("c5f6"), n("a481");
            var i = n("e814"),
                r = n.n(i),
                a = n("5176"),
                s = n.n(a),
                o = (n("28a5"), n("a745")),
                c = n.n(o),
                u = (n("ac6a"), n("f3e2"), n("7618")),
                l = n("3b8d"),
                d = n("936f"),
                p = n("8296"),
                h = n("4f30"),
                f = n("b4d0"),
                m = n("b2e7"),
                v = "//search.video.iqiyi.com/o",
                y = {};

            function g(t) {
                y = {
                    imgH: t.imgH,
                    currentCid: t.cid,
                    searchNum: t.pageSize
                }
            }

            function b(t) {
                return w.apply(this, arguments)
            }

            function w() {
                return w = Object(l["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, a, o;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            for (r in n = {
                                qyid: Object(m["w"])(),
                                access_play_control_platform: 15,
                                site: "iqiyi",
                                if : "html5",
                                pu: Object(m["C"])(),
                                u: Object(m["w"])(),
                                _: (new Date).getTime()
                            }, i = s()({}, e, n), i) "undefined" === typeof i[r] && (i[r] = "");
                            return t.next = 5, d["a"].jsonp(v, {
                                params: i
                            });
                        case 5:
                            return a = t.sent, o = k(a.data), t.abrupt("return", o || []);
                        case 8:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), w.apply(this, arguments)
            }

            function k(t) {
                var e = t.docinfos,
                    n = {
                        docs: []
                    },
                    i = [];
                return t && "object" === Object(u["a"])(t) && t.result_num && t.result_num > 0 && t.docinfos && (n.success = !0, 0 === t.docinfos.length ? n.isFinal = !0 : t.page_size && (t.page_size > t.docinfos.length || t.result_num / t.page_size <= t.page_num) ? n.isFinal = !0 : (n.success = !1, n.isFinal = !1)), e && e.forEach(function (e) {
                    var n = _(e, t.server_time);
                    n && i.push(n)
                }), 0 === i.length ? n.isEmpty = !0 : i.length !== t.docinfos.length && (y.searchNum % 2 === 0 ? i.length = i.length - i.length % 2 : y.searchNum % 3 === 0 && (i.length = i.length - i.length % 3), t.length < 1 && (n.isEmpty = !0)), n.docs = i || {}, n.eventId = t.event_id, n.bkt = t.bkt, n.search_time = t.search_time, n.docinfos = t.docinfos, n.pageNum = t.page_num, n
            }

            function _(t, e) {
                var n = {},
                    i = t.albumDocInfo;
                if (!c()(i.videoinfos)) return null;
                var r = i.videoinfos[0],
                    a = i.channel.split(","),
                    o = a[1];
                return t.categoryId = o, n.docId = t.doc_id, n.siteId = i.siteId, n.channelId = o, n.albumId = i.albumId, n.pageUrl = Object(p["R"])(r && r.itemLink || i.albumLink), n.upperRightCorner = i ? Object(f["B"])(i) : "", n.lowerLeftCorner = x(o, i.videoinfos[0].initialIssueTime, e), n.imageUrl = S(i), s()(n, C(i), j(i), O(i.paymark)), n
            }

            function x(t, e, n) {
                if (t = r()(t), t !== r()(h["CHANNEL_YULE"]) && t !== r()(h["CHANNEL_ZIXUN"])) return "";
                /Invalid /gi.test(new Date(e)) && (e = e.replace(/-/g, "/")), e = new Date(e), /Invalid /gi.test(new Date(n)) && (n = n.replace(/-/g, "/")), n = new Date(n);
                var i = (n - e) / 1e3,
                    a = "";
                return i < 3600 ? a = "刚刚" : i < 86400 ? a = Math.round(i / 3600) + "小时前发布" : i < 172800 && (a = "昨天"), a
            }

            function S(t) {
                var e = "",
                    n = t.videoinfos[0];
                return e = 1 === t.videoDocType ? r()(y.currentCid) === r()(h["CHANNEL_MUYING"]) ? t.albumImg : 1 === t.album_type ? n.itemHImage : t.albumImg : 2 === t.videoDocType ? n.itemHImage : n ? n.itemHImage : t ? t.albumImg : "", e = y.imgH ? Object(p["v"])(e, "284_160") : Object(p["v"])(e, "195_260"), e
            }

            function C(t) {
                var e, n, i = t.videoinfos[0];
                if (1 === t.videoDocType)
                    if (1 === t.album_type) e = i.year ? (i.year + "").replace(/\d{4}(\d{2})(\d{2})/, "$1-$2") + "期" : "";
                    else if (0 === t.album_type || t.series) {
                    var r = t.newest_item_number || i.itemNumber;
                    e = r !== t.itemTotalNumber ? "更新至" + r + "集" : r + "集全"
                } else {
                    var a = 0 !== t.score && t.score ? t.score : 8;
                    e = a === Math.floor(a) ? a + ".0" : Number(a).toFixed(1), n = !0
                } else 2 === t.videoDocType && (e = p["t"].formatTime(i.timeLength));
                return {
                    rbContent: e,
                    isMovie: n
                }
            }

            function O(t) {
                if (t) {
                    var e = {};
                    switch (t) {
                    case 1:
                        e.isVip = !0;
                        break;
                    case 2:
                        e.isVip = !0;
                        break;
                    case 3:
                        e.isPaid = !0;
                        break;
                    default:
                        break
                    }
                    return e
                }
            }

            function j(t) {
                var e, n, i = t.categoryId,
                    a = t.videoinfos[0];
                return 1 === t.videoDocType ? 1 === t.album_type ? (e = [r()(h["CHANNEL_ZONGYI"]), r()(h["CHANNEL_TUOKOUXIU"]), r()(h["CHANNEL_MUYING"])].indexOf(r()(y.currentCid)) > -1 ? t.albumTitle : a.itemshortTitle && a.itemshortTitle.trim() || a.itemTitle || t.albumTitle, r()(y.currentCid) === r()(h["CHANNEL_VIP"]) && "综艺,6" === t.channel && (e = t.albumTitle), n = a.itemshortTitle || a.itemTitle) : 0 === t.album_type || t.series ? (e = t.albumTitle, n = a.subTitle || T(t.threeCategory, 2)) : (e = t.albumTitle, n = a.subtitle || T(t.threeCategory, 2)) : 2 === t.videoDocType ? (e = 16 === i ? a.itemshortTitle || a.itemTitle : a.itemTitle || a.itemshortTitle, n = a.subTitle || T(t.threeCategory, 2)) : e = a.itemTitle || a.itemshortTitle, r()(y.currentCid) !== r()(h["CHANNEL_ZONGYI"]) && r()(y.currentCid) !== r()(h["CHANNEL_TUOKOUXIU"]) && (n = ""), {
                    mainTitle: e,
                    subTitle: n
                }
            }

            function T(t, e) {
                if ("string" !== typeof t) return "";
                var n = t.split(" "),
                    i = [];
                return n.forEach(function (t) {
                    var e = t ? t.split(",") : [];
                    e.length > 0 && i.push(e[0])
                }), i.slice(0, e).join(" ")
            }
        }, b2dc: function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return o
            }), n.d(e, "a", function () {
                return c
            });
            n("6d67"), n("28a5");
            var i = n("f499"),
                r = n.n(i),
                a = n("8296"),
                s = "__bhrecord__";

            function o() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                try {
                    a["V"].setItem(s, r()(t))
                } catch (e) {
                    return e
                }
            }

            function c() {
                var t = [];
                try {
                    var e = a["V"].getItem(s).split("|");
                    return e.map(function (e) {
                        t.push(JSON.parse(e))
                    }), t
                } catch (n) {
                    return n
                }
            }
        }, b5c7: function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return v
            }), n.d(e, "a", function () {
                return y
            }), n.d(e, "d", function () {
                return g
            }), n.d(e, "c", function () {
                return S
            });
            var i = n("5176"),
                r = n.n(i),
                a = n("e814"),
                s = n.n(a),
                o = (n("ac6a"), n("f3e2"), n("96cf"), n("a481"), n("3b8d")),
                c = n("b2e7"),
                u = n("b134"),
                l = n("8296"),
                d = n("936f"),
                p = "//l-rcd.iqiyi.com/apis/qiyirc/getallrc",
                h = "//nl-rcd.iqiyi.com/apis/urc/getrc",
                f = "//l-rcd.iqiyi.com/apis/mbd/delete.action",
                m = "//nl-rcd.iqiyi.com/apis/mbd/delete.action",
                v = 1,
                y = 0;

            function g() {
                return b.apply(this, arguments)
            }

            function b() {
                return b = Object(o["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r, a, o = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (e = o.length > 0 && void 0 !== o[0] ? o[0] : {}, n = {
                                agentType: 1,
                                pageNum: e.page || 1,
                                pageSize: e.pageSize || 20,
                                only_long: e.onlyLongVideo || y,
                                dp: 3
                            }, !Object(c["M"])()) {
                                t.next = 8;
                                break
                            }
                            return t.next = 5, w(n);
                        case 5:
                            i = t.sent, t.next = 11;
                            break;
                        case 8:
                            return t.next = 10, _(n);
                        case 10:
                            i = t.sent;
                        case 11:
                            return "A00000" === i.code && (r = i.data.records, a = void 0 === r ? [] : r, a.forEach(function (t) {
                                var e = s()(t.videoPlayTime);
                                t.videoUrl = Object(l["S"])(t.videoUrl), t.videoPlayTime = isNaN(e) ? 0 : e, t.remainTime = l["t"].formatTime(t.videoDuration - t.videoPlayTime), t.duration = l["t"].formatTime(t.videoDuration), t.resizedVideoImageUrl = T(t.videoImageUrlVertical, /_\d{2}_\d{3}\.(jpg|bmp|gif)/i)
                            })), t.abrupt("return", i);
                        case 13:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), b.apply(this, arguments)
            }

            function w(t) {
                return k.apply(this, arguments)
            }

            function k() {
                return k = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, d["a"].jsonp(p, {
                                params: e
                            });
                        case 2:
                            return n = t.sent, i = n.data, i.data = r()(i.data || {}, {
                                page: e.page,
                                pageSize: e.pageSize
                            }), t.abrupt("return", i);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), k.apply(this, arguments)
            }

            function _(t) {
                return x.apply(this, arguments)
            }

            function x() {
                return x = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e.ckuid = Object(c["w"])(), t.next = 3, d["a"].jsonp(h, {
                                params: e
                            });
                        case 3:
                            return n = t.sent, i = n.data, t.abrupt("return", {
                                code: i.code,
                                data: {
                                    pageSize: e.pageSize,
                                    page: e.page,
                                    records: i.data,
                                    total: i.count
                                }
                            });
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), x.apply(this, arguments)
            }

            function S() {
                return C.apply(this, arguments)
            }

            function C() {
                return C = Object(o["a"])(regeneratorRuntime.mark(function t() {
                    var e, n, i, r = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = r.length > 0 && void 0 !== r[0] ? r[0] : {}, n = {
                                auth: Object(c["x"])(),
                                ckuid: Object(c["w"])(),
                                agent_type: 1,
                                version: u["e"].version,
                                ua: u["f"].version,
                                empty: e.empty
                            }, 1 !== e.empty && (n.del_records = e.del_records), t.next = 5, O(n);
                        case 5:
                            return i = t.sent, t.abrupt("return", i);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), C.apply(this, arguments)
            }

            function O(t) {
                return j.apply(this, arguments)
            }

            function j() {
                return j = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = Object(c["M"])() ? f : m, t.next = 3, d["a"].jsonp(n, {
                                params: e
                            });
                        case 3:
                            return i = t.sent, r = i.data, t.abrupt("return", {
                                code: r.code,
                                data: r
                            });
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), j.apply(this, arguments)
            }

            function T(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /.(jpg|bmp|gif)/i;
                return /iqiyipic/i.test(t) ? t.replace(e, "_320_180.$1") : t
            }
        }, b924: function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return d
            }), n.d(e, "c", function () {
                return h
            }), n.d(e, "f", function () {
                return f
            }), n.d(e, "e", function () {
                return m
            }), n.d(e, "d", function () {
                return v
            }), n.d(e, "a", function () {
                return y
            }), n.d(e, "g", function () {
                return g
            });
            var i = n("f499"),
                r = n.n(i),
                a = (n("28a5"), n("5a0c")),
                s = n.n(a),
                o = n("4f30"),
                c = n("8296"),
                u = "https://m.iqiyi.com",
                l = "https://m.tw.iqiyi.com";

            function d(t) {
                if (t) {
                    var e = "",
                        n = "",
                        i = "",
                        r = "0",
                        a = t.albumName,
                        c = t.albumPageUrl,
                        u = t.channelUrl,
                        l = t.channelName,
                        d = t.videoCount,
                        h = t.desc,
                        f = t.picUrl,
                        m = t.latestVideoOrder,
                        v = t.channelId + "",
                        y = t.directors && t.directors.split(",")[0],
                        g = t.mainActors && t.mainActors.split(",").slice(0, 3).join(","),
                        b = t.area && t.area[0],
                        w = s()(t.period).format("YYYY-MM-DD"),
                        k = "https:".concat(t.videoUrl),
                        _ = "https:".concat(t.videoUrl),
                        x = t.languages && t.languages.join(",");
                    return t.isSource || v !== o["CHANNEL_DIANSHIJU"] ? t.isSource || v !== o["CHANNEL_DONGMAN"] ? t.isSource && v === o["CHANNEL_ZONGYI"] ? (e = "".concat(a, "-综艺-高清正版视频在线观看-爱奇艺"), n = "《".concat(a, "》是").concat(b, "综艺节目。节目简介：").concat(p(h, 150)), i = "".concat(a, ",").concat(a, "高清视频,").concat(a, "全集")) : v === o["CHANNEL_YINYUE"] ? (e = "".concat(a, "-").concat(l, "-高清正版视频在线观看-爱奇艺"), n = "《".concat(a, "》是").concat(b).concat(x, "音乐专辑，爱奇艺在线观看《").concat(a, "》完整版高清视频。节目简介：").concat(p(h, 150)), i = "".concat(a, ",").concat(a, "高清视频,").concat(a, "音乐专辑")) : (e = "".concat(a, "-").concat(l, "-高清正版视频在线观看-爱奇艺"), n = "《".concat(a, "》是").concat(l, "视频专辑，爱奇艺在线观看《").concat(a, "》高清视频节目。节目简介：").concat(p(h, 150)), i = "".concat(a, ",").concat(a, "高清视频,").concat(a, "在线观看")) : t.latestVideoOrder > 0 ? (e = "".concat(a, "-动漫动画-全集高清正版视频在线观看-爱奇艺"), n = "《".concat(a, "》是").concat(b, "类型动漫，于").concat(w, "上映，共").concat(d, "集。爱奇艺在线观看《").concat(a, "》全集高清视频。剧情简介：").concat(p(h, 100)), i = "".concat(a, ",").concat(a, "动漫,").concat(a, "全集, ").concat(a, "在线观看")) : (e = "".concat(a, "-动漫动画-高清正版视频在线观看-爱奇艺"), n = "《".concat(a, "》是").concat(b, "类型动漫，于").concat(w, "上映，共").concat(d, "集。爱奇艺在线观看《").concat(a, "》高清视频。剧情简介：").concat(p(h, 100)), i = "".concat(a, ",").concat(a, "动漫,").concat(a, "在线观看")) : m > 0 ? (e = "".concat(a, "-").concat(l, "-全集高清正版视频在线观看-爱奇艺"), n = "《".concat(a, "》是由").concat(y, "导演,").concat(g, "等主演的").concat(b, "电视剧,总共").concat(d, "集。爱奇艺在线观看《").concat(a, "》全集高清视频。剧情简介：").concat(p(h, 150)), i = "".concat(a, ",").concat(a, "电视剧,").concat(a, "全集")) : (e = "".concat(a, "-").concat(l, "-高清正版视频在线观看-爱奇艺"), n = "《".concat(a, "》是由").concat(y, "导演,").concat(g, "等主演的").concat(b, "电视剧,总共").concat(d, "集。爱奇艺在线观看《").concat(a, "》高清视频。剧情简介：").concat(p(h, 100)), i = "".concat(a, ",").concat(a, "电视剧,").concat(a, "在线观看, ").concat(a, "剧情介绍")), {
                        title: e,
                        description: n,
                        keywords: i,
                        appid: r,
                        pubDate: w,
                        thumbnailUrl: f,
                        url: k,
                        canonical: _,
                        albumName: a,
                        albumPageUrl: c,
                        channelUrl: u,
                        channelName: l
                    }
                }
            }

            function p(t, e) {
                return t.length > e ? "".concat(t.substring(0, e), "...") : t
            }

            function h(t) {
                return {
                    rel: "alternate",
                    href: "android-app://com.qiyi.video/http/m.iqiyi.com".concat(t ? Object(c["R"])(t) : "/")
                }
            }

            function f(t) {
                return {
                    type: "application/ld+json",
                    textContent: r()({
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        name: t.title,
                        "@id": t.videoUrl,
                        uploadDate: t.issueTime,
                        datePublished: t.issueTime,
                        description: t.desc,
                        thumbnailUrl: t.thumbnailUrl
                    }, null, 2)
                }
            }

            function m(t, e) {
                var n = [{
                    "@type": "ListItem",
                    position: 1,
                    item: {
                        "@id": "http://m.iqiyi.com/",
                        name: "爱奇艺",
                        image: "https://www.iqiyipic.com/common/fix/h5-v3/iqiyi-logo.png"
                    }
                }, {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                        "@id": t.channelUrl,
                        name: t.channelName,
                        image: "https://www.iqiyipic.com/common/fix/h5-v3/iqiyi-logo.png"
                    }
                }];
                1 !== e && 2 !== e || n.push({
                    "@type": "ListItem",
                    position: 3,
                    item: {
                        "@id": t.albumPageUrl,
                        name: t.albumName,
                        image: t.athumbnailUrl || t.thumbnailUrl
                    }
                }), 0 !== e && 2 !== e || n.push({
                    "@type": "ListItem",
                    position: 0 === e ? 3 : 4,
                    item: {
                        "@id": t.videoUrl,
                        name: t.videoName,
                        image: t.thumbnailUrl
                    }
                });
                var i = {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: n
                };
                return {
                    type: "application/ld+json",
                    textContent: r()(i, null, 2)
                }
            }

            function v(t) {
                return {
                    type: "application/ld+json",
                    textContent: r()({
                        "@context": "https://ziyuan.baidu.com/contexts/cambrian.jsonld",
                        "@id": u + Object(c["R"])(t.canonical),
                        appid: "1584928185071026",
                        title: t.title,
                        images: [t.thumbnailUrl],
                        description: t.description,
                        pubDate: t.pubDate
                    }, null, 2)
                }
            }

            function y(t) {
                var e = [{
                    name: "keywords",
                    lang: "zh-CN",
                    content: t.keywords
                }, {
                    name: "description",
                    lang: "zh-CN",
                    content: t.description
                }, {
                    name: "appid",
                    content: t.appid
                }, {
                    name: "title",
                    lang: "zh-CN",
                    content: t.title
                }];
                return t.canonical ? e.concat([{
                    name: "canonical",
                    href: t.canonical
                }, {
                    rel: "alternate",
                    hreflang: "zh-CN",
                    href: u + Object(c["R"])(t.canonical)
                }, {
                    rel: "alternate",
                    hreflang: "zh",
                    href: u + Object(c["R"])(t.canonical)
                }, {
                    rel: "alternate",
                    hreflang: "zh-TW",
                    href: l + Object(c["R"])(t.canonical)
                }]) : e
            }

            function g(t) {
                return [{
                    itemprop: "name",
                    content: t.title
                }, {
                    itemprop: "description",
                    content: t.description
                }, {
                    itemprop: "video",
                    itemscope: "",
                    itemref: "1 2 3 4 5 6 7",
                    itemtype: "http://schema.org/VideoObject"
                }, {
                    id: "1",
                    itemprop: "image",
                    content: t.thumbnailUrl
                }, {
                    id: "2",
                    itemprop: "thumbnailUrl",
                    content: t.thumbnailUrl
                }, {
                    id: "3",
                    itemprop: "url",
                    content: u + Object(c["R"])(t.canonical)
                }, {
                    id: "4",
                    itemprop: "uploadDate",
                    content: t.pubDate
                }, {
                    id: "5",
                    itemprop: "datePublished",
                    content: t.pubDate
                }, {
                    id: "6",
                    itemprop: "inLanguage",
                    content: "zh-CN"
                }, {
                    id: "7",
                    itemprop: "contentLocation",
                    content: "中国"
                }]
            }
        }, bf96: function (t, e) {
            t.exports = function (t) {
                return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function () {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function () {
                        return t.i
                    }
                }), t.webpackPolyfill = 1), t
            }
        }, bfde: function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return s
            }), n.d(e, "b", function () {
                return o
            });
            n("57e7"), n("759f");
            var i = n("2c06"),
                r = n("b134"),
                a = ["m.baidu.com", "www.baidu.com", "v.baidu.com", "sp3.baidu.com", "baike.baidu.com", "tieba.baidu.com"],
                s = ["weixin"];

            function o() {
                return c() || u()
            }

            function c() {
                return r["a"].baidubox || r["a"].baidubrowser
            }

            function u() {
                var t = Object(i["z"])();
                return a.some(function (e) {
                    return t.indexOf(e) >= 0
                })
            }
        }, c3bb: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("section", {
                        staticClass: "m-linkMore borderTB"
                    }, [n("router-link", {
                        staticClass: "m-link",
                        attrs: {
                            to: "/u/feedback?entry=" + t.entry
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-feed"
                    }), t._v("意见反馈\n    ")])], 1)])
                },
                r = [],
                a = {
                    name: "FeedBack",
                    props: {
                        entry: {
                            type: String,
                            default: "other"
                        }
                    }
                },
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, c7b5: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t.title ? n("div", {
                        staticClass: "aboutUs-title"
                    }, [t._v("\n    " + t._s(t.title) + "\n  ")]) : t._e(), n("ul", {
                        staticClass: "aboutUs-list"
                    }, t._l(t.items, function (t, e) {
                        return n("li", {
                            key: e
                        }, [n("AuraNav", {
                            attrs: {
                                href: t.url,
                                title: t.title
                            }
                        })], 1)
                    }), 0)])
                },
                r = [],
                a = n("8a92"),
                s = {
                    name: "UserAboutList",
                    components: {
                        AuraNav: a["a"]
                    },
                    props: {
                        items: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        title: {
                            type: String,
                            default: ""
                        }
                    }
                },
                o = s,
                c = n("2877"),
                u = Object(c["a"])(o, i, r, !1, null, null, null);
            e["a"] = u.exports
        }, ccc1: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "m-cancelAppeal-foottext"
                    }, [t._v("Copyright © " + t._s(t.year) + " 爱奇艺 All Rights Reserved")])
                },
                r = [],
                a = {
                    name: "AppealCancelFooter",
                    computed: {
                        year: function () {
                            return (new Date).getFullYear()
                        }
                    }
                },
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, d006: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("a", {
                        class: ["m-appeal-btn", {
                            "btn-disable": t.disable
                        }],
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.submit
                        }
                    }, [t._v("\n  " + t._s(t.text) + "\n")])
                },
                r = [],
                a = {
                    name: "AppealButton",
                    props: {
                        disable: {
                            type: Boolean,
                            default: !1
                        },
                        text: {
                            type: String,
                            default: ""
                        },
                        submitErr: {
                            type: String,
                            default: ""
                        }
                    },
                    methods: {
                        submit: function () {
                            this.disable || this.$emit("submit")
                        }
                    }
                },
                s = a,
                o = n("2877"),
                c = Object(o["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        }, d0f9: function (t, e, n) {
            var i = n("dbfb");
            "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var r = n("499e").default;
            r("0f7d116d", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        }, d323: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.videos.length ? n("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: t.showPingback,
                            expression: "showPingback"
                        }],
                        staticClass: "m-box",
                        attrs: {
                            name: "m-videoRec"
                        }
                    }, [n("div", {
                        ref: "rec",
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("AuraCardTitle", {
                        attrs: {
                            title: "猜你喜欢"
                        }
                    })], 1), n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("AuraVideoRowList", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.itemPingback,
                            expression: "itemPingback"
                        }],
                        attrs: {
                            subtype: t.subtype,
                            videos: t.videos.slice(0, t.pageSize * (t.page + 1)),
                            "show-desc": !1
                        },
                        on: {
                            click: t.videoClick
                        },
                        scopedSlots: t._u([{
                            key: "extra",
                            fn: function (e) {
                                var i = e.video;
                                return [n("VideoCount", {
                                    attrs: {
                                        status: i.hotDisplayStatus,
                                        count: i.hotDisplayCount,
                                        "hot-title": t.hotTitle
                                    }
                                })]
                            }
                        }], null, !1, 3539922810)
                    })], 1), (t.page + 1) * t.pageSize < t.videos.length ? n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("section", {
                        staticClass: "m-linkMore"
                    }, [n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.morePingback,
                            expression: "morePingback"
                        }],
                        staticClass: "m-link m-love-link",
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function (e) {
                                t.page = t.page + 1
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-morevideo"
                    }), t._v("查看更多\n      ")])])]) : t._e()]) : t._e()
                },
                r = [],
                a = (n("57e7"), n("ac6a"), n("f3e2"), n("96cf"), n("3b8d")),
                s = n("cebc"),
                o = (n("c5f6"), n("2f62")),
                c = n("9a35"),
                u = n("21fd"),
                l = n("5321"),
                d = n("8296"),
                p = n("4e77"),
                h = {
                    name: "VideoRecommend",
                    components: {
                        VideoCount: c["a"]
                    },
                    props: {
                        allNum: {
                            type: Number,
                            default: 16
                        },
                        pageSize: {
                            type: Number,
                            default: 3
                        },
                        channelId: {
                            type: Number,
                            default: 0
                        },
                        isCallApp: {
                            type: Boolean,
                            default: !1
                        },
                        isUgc: {
                            type: Boolean,
                            default: !1
                        },
                        tvid: {
                            type: Number,
                            default: 0
                        },
                        albumId: {
                            type: Number,
                            default: 0
                        },
                        showPingback: {
                            type: String,
                            default: ""
                        },
                        morePingback: {
                            type: String,
                            default: ""
                        },
                        itemPingback: {
                            type: String,
                            default: ""
                        },
                        vfrm: {
                            type: String,
                            default: ""
                        },
                        useLongParam: {
                            type: Boolean,
                            default: !1
                        },
                        hotTitle: {
                            type: String,
                            default: "热度"
                        }
                    },
                    data: function () {
                        return {
                            videos: [],
                            page: 0,
                            pingback: {},
                            subtype: "H5cnxh_823"
                        }
                    }, computed: Object(s["a"])({}, Object(o["e"])("play", ["videoInfo"])),
                    beforeMount: function () {
                        var t = this;
                        this.init();
                        var e = !1;
                        Object(p["e"])(function () {
                            !e && Object(d["Y"])(t.$refs.rec) && (t.sendMirrorRecommend(), e = !0)
                        })
                    }, methods: {
                        init: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e, n, i = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = {
                                            channelId: this.channelId,
                                            videoId: this.tvid,
                                            albumId: this.albumId,
                                            onlyAlbum: !0
                                        }, t.next = 3, Object(u["g"])(e, !0);
                                    case 3:
                                        n = t.sent, n && (n.videos && n.videos.forEach(function (t) {
                                            t.pageUrl = t.pageUrl.indexOf("vfrm") > -1 ? t.pageUrl : "".concat(t.pageUrl, "#vfrm=").concat(i.vfrm), i.isCallApp ? (t.upperRightCorner = "APP", t.play = {
                                                callApp: !0,
                                                card: "recommend",
                                                redirect: !0,
                                                url: t.pageUrl,
                                                qipuId: t.qipuId,
                                                continuous: !0,
                                                selectClass: "selected"
                                            }) : i.useLongParam && (t.play = {
                                                callApp: !0,
                                                card: "recommend",
                                                redirect: !0,
                                                url: t.pageUrl,
                                                qipuId: t.qipuId,
                                                continuous: !0,
                                                selectClass: "selected"
                                            })
                                        }), this.videos = this.videos.concat(n.videos), this.pingback = n.pingback);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        sendMirrorRecommend: function () {
                            var t = [],
                                e = [],
                                n = [],
                                i = [],
                                r = [];
                            this.videos.forEach(function (a, s) {
                                t.push(a.albumId || a.qipuId || a.id), i.push(a.qipuId || a.id || a.tvid), e.push(a.pingBack ? a.pingBack.rSource : ""), r.push(a.pingBack ? a.pingBack.rOriginl : ""), n.push(s)
                            }), Object(l["d"])({
                                t: 21,
                                block: this.showPingback,
                                r_bkt: this.pingback.bkt,
                                r_eventid: this.pingback.eventId || this.pingback.event_id,
                                r_area: this.pingback.area,
                                r_rank: n.join(","),
                                r_aidlist: i.join(","),
                                r_cid: this.channelId,
                                r_source: e.join(","),
                                r_usract: "show",
                                r_aid: this.albumId,
                                r_originl: r.join(",")
                            })
                        }, videoClick: function (t, e) {
                            Object(l["d"])({
                                r_usract: "userclick",
                                t: 20,
                                block: this.showPingback,
                                rseat: this.itemPingback,
                                r_eventid: this.pingback.eventId || this.pingback.event_id,
                                r_bkt: this.pingback.bkt,
                                r_area: this.pingback.area,
                                r_tcid: t.cid || t.channelId || "",
                                r_cid: this.channelId,
                                r_aid: this.albumId,
                                r_taid: t.id || t.aid || t.qipuId,
                                r_source: t.pingBack ? t.pingBack.rSource : "",
                                r_rank: e,
                                r_originl: t.pingBack ? t.pingBack.rOriginl : ""
                            }), this.isCallApp ? this.$dispatch("GlobalCallapp", "toPlay", {
                                extralOptions: {
                                    aid: t.aid || t.albumId,
                                    cid: t.cid,
                                    vid: t.vid,
                                    tvid: t.tvid || t.id || t.qipuId,
                                    video: t
                                },
                                subtype: this.subtype
                            }) : location.href = t.pageUrl
                        }
                    }
                },
                f = h,
                m = n("2877"),
                v = Object(m["a"])(f, i, r, !1, null, null, null);
            e["a"] = v.exports
        }, d409: function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return h
            });
            n("d92a");
            var i = n("d225"),
                r = n("b0b4"),
                a = n("308d"),
                s = n("6bb5"),
                o = n("4e2b"),
                c = n("24d6"),
                u = "up",
                l = "down",
                d = "right",
                p = "left",
                h = function (t) {
                    function e() {
                        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object(i["a"])(this, e), t = Object(a["a"])(this, Object(s["a"])(e).call(this)), t.threshold = n.threshold || 4, t.startY = 0, t.startX = 0, t.ticking = !1, t
                    }
                    return Object(o["a"])(e, t), Object(r["a"])(e, [{
                        key: "unbind",
                        value: function (t) {
                            t.removeEventListener("touchstart", this.onTouchStart.bind(this)), t.removeEventListener("touchmove", this.onTouchMove.bind(this))
                        }
                    }, {
                        key: "bind",
                        value: function (t) {
                            t.addEventListener("touchstart", this.onTouchStart.bind(this)), t.addEventListener("touchmove", this.onTouchMove.bind(this))
                        }
                    }, {
                        key: "onTouchStart",
                        value: function (t) {
                            this.startY = t.targetTouches[0].pageY, this.startX = t.targetTouches[0].pageX
                        }
                    }, {
                        key: "onTouchMove",
                        value: function (t) {
                            var e = this;
                            this.ticking || (requestAnimationFrame(function () {
                                var n = t.targetTouches[0].pageY - e.startY,
                                    i = t.targetTouches[0].pageX - e.startX;
                                e.getGesture(i, n), e.ticking = !1
                            }), this.ticking = !0)
                        }
                    }, {
                        key: "getGesture",
                        value: function (t, e) {
                            var n = "",
                                i = Math.abs(e),
                                r = Math.abs(t);
                            n = i > r ? i > this.threshold ? e > 0 ? l : u : "" : r > this.threshold ? t > 0 ? d : p : "", n && this.trigger(n)
                        }
                    }]), e
                }(c["a"])
        }, d4db: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.init ? n("ModalEvent", {
                        staticClass: "m-video-info-fixed",
                        class: [t.open ? t.layerClass : "am-video-info-close", t.popClass, t.layerInfo],
                        style: {
                            height: t.height + "px",
                            overflow: "scroll"
                        },
                        on: {
                            "document:touchstart": function (e) {
                                t.modal && t.close()
                            }
                        }
                    }, [t._t("close", [n("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: t.closeRseat,
                            expression: "closeRseat"
                        }],
                        class: t.closeBtn ? t.closeBtn : "close-item",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            touchstart: function (e) {
                                return e.stopPropagation(), t.close(e)
                            }, click: t.close
                        }
                    }, [n("i", {
                        class: t.closeIcon ? t.closeIcon : "c-glyphicon c-glyphicon-guideClose"
                    })])]), t._t("content")], 2) : t._e()
                },
                r = [],
                a = (n("d92a"), n("c5f6"), n("3853")),
                s = n("8296"),
                o = {
                    name: "PlayInfoLayer",
                    components: {
                        ModalEvent: a["a"]
                    },
                    props: {
                        open: {
                            type: Boolean,
                            default: !1
                        },
                        modal: {
                            type: Boolean,
                            default: !0
                        },
                        noheader: {
                            type: Boolean,
                            default: !0
                        },
                        closeRseat: {
                            type: String,
                            default: ""
                        },
                        popClass: {
                            type: String,
                            default: "m-episode-pop"
                        },
                        layerInfo: {
                            type: String,
                            default: ""
                        },
                        associatedId: {
                            type: Number,
                            default: 0
                        },
                        closeBtn: {
                            type: String,
                            default: ""
                        },
                        closeIcon: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            layerClass: this.noheader ? "am-video-info-ios-show" : "am-video-info-android-show",
                            init: !1,
                            height: 1e3,
                            offsetTop: 0,
                            HeightDone: !0
                        }
                    }, watch: {
                        open: function (t, e) {
                            this.init = !!t, this.$store.commit("play/setLayerOpen", t), Object(s["Z"])(t), t ? (this.updateHeight(), this.updateLayerId(this.associatedId)) : this.offsetTop = 0
                        }, associatedId: function (t, e) {
                            this.updateLayerId(t)
                        }
                    }, mounted: function () {
                        window.addEventListener("resize", this.updateHeight)
                    }, destroyed: function () {
                        window.removeEventListener("resize", this.updateHeight)
                    }, methods: {
                        close: function (t) {
                            var e = this;
                            setTimeout(function () {
                                e.$emit("update:open", !1)
                            }, 300)
                        }, updateHeight: function () {
                            setTimeout(function t() {
                                if (this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, this.offsetTop !== this.$el.offsetTop || this.viewportHeight < this.$el.offsetTop) return this.offsetTop = this.$el.offsetTop, setTimeout(t.bind(this), 200);
                                this.height = this.viewportHeight - this.$el.offsetTop
                            }.bind(this), 100)
                        }, updateLayerId: function (t) {
                            t && this.$store.commit("play/setLayerId", t)
                        }
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = l.exports
        }, d5cb: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t._t("default"), n("AppealTipPanel", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.tipPanel && (t.tipPanel.title || t.tipPanel.isLoading),
                            expression: "tipPanel && (tipPanel.title || tipPanel.isLoading)"
                        }],
                        attrs: {
                            "close-icon": t.tipPanel.closeIcon,
                            "loading-icon": t.tipPanel.loadingIcon,
                            "is-loading": t.tipPanel.isLoading,
                            title: t.tipPanel.title,
                            info: t.tipPanel.info,
                            "button-info": t.tipPanel.buttonInfo,
                            callback: t.tipPanel.callback
                        },
                        on: {
                            close: t.clearToast
                        }
                    }), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.text,
                            expression: "text"
                        }],
                        staticClass: "m-passport-toast"
                    }, [n("div", {
                        staticClass: "info"
                    }, [t._v("\n      " + t._s(t.text) + "\n    ")])])], 2)
                },
                r = [],
                a = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "cover"
                    }), n("section", {
                        staticClass: "m-passport-popup"
                    }, [t.closeIcon ? n("a", {
                        staticClass: "popup-close",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("close")
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-passport-icon icon-close"
                    })]) : t._e(), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isLoading && (t.title || t.info),
                            expression: "!isLoading && (title || info)"
                        }],
                        staticClass: "popup-info"
                    }, [n("div", {
                        staticClass: "c-title"
                    }, [t._v("\n        " + t._s(t.title) + "\n      ")]), t.info ? n("div", {
                        staticClass: "c-info"
                    }, [t._v("\n        " + t._s(t.info) + "\n      ")]) : t._e()]), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.buttonInfo && !t.isLoading,
                            expression: "buttonInfo && !isLoading"
                        }],
                        staticClass: "popup-btn"
                    }, t._l(t.buttonInfo, function (e, i) {
                        return n("a", {
                            key: i,
                            staticClass: "c-btn-link",
                            class: {
                                "c-btn-block": 1 === t.buttonInfo.length
                            },
                            attrs: {
                                href: e.url
                            },
                            on: {
                                click: e.callback
                            }
                        }, [t._v(t._s(e.text))])
                    }), 0), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isLoading,
                            expression: "isLoading"
                        }],
                        staticClass: "m-passport-loading"
                    }, [n("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loadingIcon,
                            expression: "loadingIcon"
                        }],
                        staticClass: "passport-icon-loading"
                    }), n("div", {
                        staticClass: "info"
                    }, [t._v(t._s(t.info || "加载中..."))])])])])
                },
                s = [],
                o = {
                    name: "AppealTipPanel",
                    props: {
                        closeIcon: {
                            type: Boolean,
                            default: !0
                        },
                        loadingIcon: {
                            type: Boolean,
                            default: !0
                        },
                        isLoading: {
                            type: Boolean,
                            default: !1
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        info: {
                            type: String,
                            default: ""
                        },
                        buttonInfo: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        }
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, a, s, !1, null, null, null),
                d = l.exports,
                p = n("fe3a"),
                h = {
                    name: "AppealPage",
                    components: {
                        AppealTipPanel: d
                    },
                    mixins: [p["a"]],
                    props: {
                        title: {
                            type: String,
                            default: ""
                        }
                    },
                    style: ["base", "securityNew", "securityVerifySmscode"],
                    title: function () {
                        return this.title || "账户申诉"
                    }, data: function () {
                        return {
                            tipPanel: {},
                            text: ""
                        }
                    }, mounted: function () {
                        document.addEventListener("focusout", function () {
                            var t = 90 === window.orientation || -90 === window.orientation;
                            t || window.scrollTo(0, 0)
                        })
                    }, methods: {
                        clearToast: function () {
                            this.tipPanel = {
                                closeIcon: !1,
                                loadingIcon: !1,
                                isLoading: !1,
                                title: "",
                                info: "",
                                buttonInfo: null,
                                callback: null
                            }
                        }, toast: function (t) {
                            t.isMiniToast ? (this.text = t.text, this.clear(t)) : this.tipPanel = t
                        }, loading: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.tipPanel = {
                                closeIcon: !0,
                                isLoading: !0,
                                loadingIcon: !0,
                                info: t.info || ""
                            }
                        }, clear: function (t) {
                            var e = this;
                            setTimeout(function () {
                                e.text = ""
                            }, t.delay || 2e3)
                        }
                    }
                },
                f = h,
                m = Object(u["a"])(f, i, r, !1, null, null, null);
            e["a"] = m.exports
        }, d7dd: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("section", {
                        staticClass: "g-tab-num"
                    }, [n("div", {
                        staticClass: "m-tab-num-title"
                    }, [n("span", {
                        domProps: {
                            innerHTML: t._s(t.year)
                        }
                    }), t._v("年\n    ")]), n("VideoTabScroll", {
                        staticClass: "m-tab-num m-sliding",
                        attrs: {
                            "list-length": t.summarys.length,
                            "scroll-x": !0
                        },
                        on: {
                            scrollToIndex: t.changeYear
                        }
                    }, [n("div", {
                        staticClass: "m-tab-num-list m-sliding-list"
                    }, t._l(t.summarys, function (e, i) {
                        return n("span", {
                            key: i,
                            class: ["c-tab-item", {
                                selected: "" + e.year + e.month == t.curDate
                            }],
                            on: {
                                click: function (e) {
                                    return t.changeTab(i)
                                }
                            }
                        }, [t._v(t._s(e.month) + "月")])
                    }), 0)])], 1)])
                },
                r = [],
                a = (n("ac6a"), n("f3e2"), n("a745")),
                s = n.n(a),
                o = n("1d21"),
                c = {
                    name: "VideoSourceTabs",
                    components: {
                        VideoTabScroll: o["a"]
                    },
                    props: {
                        formatSummary: {
                            type: [Array, String],
                            default: function () {
                                return []
                            }
                        },
                        summaryInfo: {
                            type: [Array, String],
                            default: function () {
                                return []
                            }
                        },
                        curYear: {
                            type: String,
                            default: ""
                        },
                        curMonth: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            year: this.curYear,
                            curDate: "".concat(this.curYear).concat(this.curMonth)
                        }
                    }, computed: {
                        summarys: function () {
                            if (this.formatSummary.length) return this.formatSummary;
                            var t = [];
                            return s()(this.summaryInfo) && this.summaryInfo.forEach(function (e) {
                                e.monthList.forEach(function (n) {
                                    t.push({
                                        year: e.year,
                                        month: n
                                    })
                                })
                            }), t
                        }
                    }, methods: {
                        changeTab: function (t) {
                            var e = this.summarys[t];
                            this.curDate = "".concat(e.year).concat(e.month), this.changeYear(t), this.$emit("changeTab", e)
                        }, changeYear: function (t) {
                            this.year = this.summarys[t].year
                        }
                    }
                },
                u = c,
                l = n("2877"),
                d = Object(l["a"])(u, i, r, !1, null, null, null);
            e["a"] = d.exports
        }, da1f: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        ref: "root",
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("section", {
                        staticClass: "m-loading-info"
                    }, [n("div", {
                        staticClass: "c-info"
                    }, [t.loadComplete ? t._t("complete", [t._v("没有更多了")]) : t.error ? t._t("error", [t._v("\n        数据加载失败，请\n        "), n("a", {
                        staticClass: "c-green",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.refresh
                        }
                    }, [t._v("点击刷新")]), t._v("\n        重试\n      ")]) : t._t("loading", [t._v("爱奇艺努力加载中... ")])], 2)])])
                },
                r = [],
                a = (n("d92a"), n("96cf"), n("3b8d")),
                s = n("4e77"),
                o = {
                    name: "LoadBottom",
                    props: {
                        callback: {
                            type: Function,
                            default: null
                        },
                        loadComplete: {
                            type: Boolean,
                            default: !1
                        },
                        load: {
                            type: Boolean,
                            default: !1
                        },
                        container: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            error: !1,
                            errorNum: 0,
                            maxError: 3,
                            autoReloadNum: 0,
                            autoReloadMax: 5,
                            loading: !1,
                            scrollBottom: function () {}
                        }
                    }, watch: {
                        load: function (t) {
                            this.initLoad()
                        }, loadComplete: function (t) {
                            var e = this;
                            t ? this.scrollBottom() : this.scrollBottom = c.call(this, function () {
                                return e.loadData()
                            })
                        }
                    }, mounted: function () {
                        var t = this;
                        !this.loadComplete && this.callback && (this.container && (this.containerNode = document.querySelector("#".concat(this.container)) || this.$el.parentNode), this.initLoad(), this.scrollBottom = c.call(this, function () {
                            return t.loadData()
                        }))
                    }, destroyed: function () {
                        this.scrollBottom()
                    }, methods: {
                        refresh: function () {
                            this.loadData()
                        }, initLoad: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.load || !u.apply(this)) {
                                            t.next = 4;
                                            break
                                        }
                                        return this.$emit("update:load", !1), t.next = 4, this.loadData();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        loadData: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e, n = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = this.$refs.root && this.$refs.root.offsetHeight, !this.loading && e) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return this.loading = !0, this.error = !1, t.abrupt("return", this.callback().then(function () {
                                            n.errorNum = 0
                                        }).catch(function () {
                                            n.error = !0, n.errorNum++, n.$emit("loadFailure")
                                        }).finally(Object(a["a"])(regeneratorRuntime.mark(function t() {
                                            return regeneratorRuntime.wrap(function (t) {
                                                while (1) switch (t.prev = t.next) {
                                                case 0:
                                                    if (n.loading = !1, !(n.errorNum > n.maxError)) {
                                                        t.next = 3;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 3:
                                                    if (!u.apply(n) || n.loadComplete) {
                                                        t.next = 6;
                                                        break
                                                    }
                                                    return t.next = 6, n.initLoad();
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                                }
                                            }, t)
                                        }))));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                };

            function c(t) {
                var e = l.bind(this, t);
                return this.container ? this.containerNode.addEventListener("scroll", e) : Object(s["e"])(e),
                    function () {
                        Object(s["h"])(e)
                    }
            }

            function u() {
                if (this.container) {
                    var t = this.containerNode;
                    return t.scrollTop + t.offsetHeight >= t.scrollHeight - 50
                }
                return document.documentElement.offsetHeight - window.scrollY - window.screen.height <= 200
            }

            function l(t) {
                u.apply(this) && t()
            }
            var d = o,
                p = n("2877"),
                h = Object(p["a"])(d, i, r, !1, null, null, null);
            e["a"] = h.exports
        }, dbce: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        ref: "root",
                        style: {
                            height: t.height + "px"
                        }
                    }, [n("div", {
                        ref: "layer"
                    }, [t._t("default")], 2)])
                },
                r = [],
                a = (n("6762"), n("2fdb"), n("7514"), n("774e")),
                s = n.n(a),
                o = (n("c5f6"), n("8296")),
                c = n("1fba"),
                u = {
                    name: "PlayPositionLayer",
                    props: {
                        curPage: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            height: 0,
                            scroll: null
                        }
                    }, watch: {
                        curPage: function (t, e) {
                            t !== e && this.scroll && this.scroll.refresh()
                        }
                    }, mounted: function () {
                        var t = this;
                        this.updateHeight(), this.$nextTick(function () {
                            this.initScroll()
                        }), this.actionForSafari(function () {
                            window.addEventListener("resize", t.updateHeight)
                        })
                    }, destroyed: function () {
                        var t = this;
                        this.scroll = null, this.actionForSafari(function () {
                            window.removeEventListener("resize", t.updateHeight)
                        })
                    }, methods: {
                        initScroll: function () {
                            var t = this.$refs.root;
                            this.scroll = new c["a"](t, {
                                scrollY: !0,
                                click: !0
                            }), this.scrollToElement()
                        }, scrollToElement: function () {
                            var t = this.$refs.layer;
                            if (t) {
                                var e = null,
                                    n = s()(t.children);
                                n.find(function (t, n) {
                                    Array.prototype.includes.call(t.classList, "selected") && (e = t)
                                }), e && this.scroll.scrollToElement(e, 0, !0, !0)
                            }
                        }, updateHeight: function () {
                            var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                                e = document.getElementById("video"),
                                n = e && e.parentNode.clientHeight;
                            this.height = t - n - this.$el.offsetTop
                        }, actionForSafari: function (t) {
                            o["p"].safari && t && t()
                        }
                    }
                },
                l = u,
                d = n("2877"),
                p = Object(d["a"])(l, i, r, !1, null, null, null);
            e["a"] = p.exports
        }, dbfb: function (t, e, n) {
            e = t.exports = n("2350")(!1), e.push([t.i, ".h-popup-slide-top-enter[data-v-2edf3d91],.h-popup-slide-top-leave-active[data-v-2edf3d91]{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.h-popup-slide-right-enter[data-v-2edf3d91],.h-popup-slide-right-leave-active[data-v-2edf3d91]{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.h-popup-slide-bottom-enter[data-v-2edf3d91],.h-popup-slide-bottom-leave-active[data-v-2edf3d91]{-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}.h-popup-slide-left-enter[data-v-2edf3d91],.h-popup-slide-left-leave-active[data-v-2edf3d91]{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}", ""])
        }, dd38: function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return h
            }), n.d(e, "b", function () {
                return f
            }), n.d(e, "d", function () {
                return y
            }), n.d(e, "c", function () {
                return w
            });
            var i = n("795b"),
                r = n.n(i),
                a = (n("96cf"), n("57e7"), n("7f7f"), n("0cd8"), n("6d67"), n("3b8d")),
                s = n("936f"),
                o = n("b383"),
                c = n("8296"),
                u = n("5191"),
                l = n("b0a3"),
                d = n("11ad"),
                p = n("2c06"),
                h = "3",
                f = "4",
                m = "https://passport.iqiyi.com/apis/phone/get_support_areacode.action?smart",
                v = "";

            function y(t) {
                return g.apply(this, arguments)
            }

            function g() {
                return g = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, a, c, l;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (v = e.useCase, n = S(), !n || !n.list) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return", r.a.resolve(n));
                        case 4:
                            return t.next = 6, Object(u["b"])();
                        case 6:
                            return t.t0 = t.sent, t.t1 = d["p"], t.t2 = Object(p["t"])(), t.t3 = O() ? "zh_TW" : "zh_CN", t.t4 = e.useCase, i = {
                                local: 1,
                                dfp: t.t0,
                                ptid: t.t1,
                                agenttype: t.t2,
                                lang: t.t3,
                                use_case: t.t4
                            }, t.next = 14, s["a"].postCache(m, Object(o["stringify"])(i), {
                                timeout: 500
                            }, {
                                qStore: {
                                    id: C()
                                }
                            }).catch(function () {
                                return k()
                            });
                        case 14:
                            return a = t.sent, c = a && a.data, c && "A00000" === c.code ? (c = b(c.data), x({
                                list: c
                            })) : c = k(), l = {
                                list: c
                            }, t.abrupt("return", l);
                        case 19:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), g.apply(this, arguments)
            }

            function b(t) {
                var e = t.areas || [],
                    n = t.local;
                return e.map(function (t) {
                    return t = t.value[0], t.selected = t.acode === n.acode ? "selected" : "", t
                })
            }

            function w(t) {
                var e = S(),
                    n = e && e.list;
                return n = n || [], t = t || "86", n.reduce(function (e, n) {
                    return String(n.acode) === t ? n.name : e
                }, "")
            }

            function k() {
                var t = [];
                return t = O() ? [new _("中國大陸", "Z", 48, 86), new _("台灣地區", "T", 228, 886), new _("香港地區", "X", 95, 852), new _("澳門地區", "A", 148, 853)] : [new _("中国大陆", "Z", 48, 86), new _("台湾地区", "T", 228, 886), new _("香港地区", "X", 95, 852), new _("澳门地区", "A", 148, 853)], t[0].selected = "selected", t
            }

            function _(t, e, n, i) {
                this.name = t, this.init = e, this.rcode = n, this.acode = i
            }

            function x(t) {
                c["L"].setItem(C(), t)
            }

            function S() {
                return c["L"].getItem(C())
            }

            function C() {
                return O() ? "tw_area_".concat(v) : "cn_area_".concat(v)
            }

            function O() {
                return Object(l["c"])().indexOf("tw") > -1
            }
        }, dfb9: function (t, e, n) {
            "use strict";
            n("96cf");
            var i = n("3b8d"),
                r = (n("7514"), n("0cd8"), n("ac6a"), n("f3e2"), n("8296")),
                a = n("b2e7"),
                s = n("1533"),
                o = n("6f18");
            e["a"] = {
                props: {
                    feature: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    }
                },
                data: function () {
                    return {
                        likeData: {},
                        commentData: {},
                        subUserData: {},
                        subVideoData: {},
                        favVideoData: {}
                    }
                }, beforeMount: function () {
                    this.uid = +Object(a["C"])()
                }, methods: {
                    getFeatures: function (t) {
                        var e = this;
                        this.feature.forEach(function (n) {
                            e["get".concat(Object(r["ab"])(n))] && e["get".concat(Object(r["ab"])(n))](t)
                        })
                    }, getSubUser: function (t) {
                        var e = this;
                        if (t && Object(a["M"])()) {
                            var n = t.reduce(function (t, e) {
                                return e.authedSelfMedia && t.push(e.uid), t
                            }, []);
                            return Object(s["d"])(this.uid, n).then(function (i) {
                                if (i && i.data) {
                                    var r = {};
                                    n.forEach(function (t) {
                                        r[t] = !!i.data.find(function (e) {
                                            return e.fuid === +t
                                        })
                                    }), t.forEach(function (t) {
                                        e.subUserData[t.uid] ? e.subUserData[t.uid].isSubed = r[t.uid] : e.subUserData[t.uid] = {
                                            isSubed: r[t.uid]
                                        }, e.$set(t, "subUser", e.subUserData[t.uid])
                                    })
                                }
                            })
                        }
                    }, getSubVideo: function () {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                            var n, i, r, a = this;
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.reduce(function (t, e) {
                                        return e && t.push(e.qipuId || e.albumId), t
                                    }, []).join(","), !n) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 4, Object(o["d"])({
                                        subKeys: n
                                    });
                                case 4:
                                    i = t.sent, r = i.data, e.forEach(function (t) {
                                        if (t) {
                                            var e = t.fatherVideo && t.fatherVideo.qipuId || t.qipuId,
                                                n = r ? r[t.qipuId] : {};
                                            a.subUserData[e] ? (a.subUserData[e].isSubed = n.state, a.subUserData[e].count = n.count) : a.subUserData[e] = {
                                                isSubed: n.state,
                                                count: n.count
                                            }, a.$set(t, "subVideo", a.subUserData[e])
                                        }
                                    });
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                            }, t)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            }
        }, e4ab: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("iframe", {
                        staticStyle: {
                            "min-width": "100%",
                            width: "100px",
                            "min-height": "600px"
                        },
                        attrs: {
                            id: "iframe",
                            height: t.height + "px",
                            src: t.iframeSrc,
                            width: "100%",
                            scrolling: "no",
                            frameborder: "0"
                        }
                    })
                },
                r = [],
                a = n("8296"),
                s = Object(a["M"])("iframe", {
                    feedback: !0
                }),
                o = {
                    name: "CommonIframe",
                    props: {
                        src: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            iframeSrc: "",
                            height: ""
                        }
                    }, beforeMount: function () {
                        document.domain = "iqiyi.com", window.resetIframeHeight = this.resetIframeHeight
                    }, mounted: function () {
                        document.getElementById("iframe").onerror = function (t, e, n, i, r) {
                            s.error({
                                message: r.message,
                                stack: r.stack,
                                ec: a["b"],
                                error: r
                            })
                        }, this.iframeSrc = this.src, this.refreshHeight()
                    }, activated: function () {
                        this.resetIframeHeight()
                    }, methods: {
                        refreshHeight: function () {
                            var t = this;
                            this.resetIframeHeight(), document.getElementById("iframe").addEventListener("load", function () {
                                return t.resetIframeHeight()
                            })
                        }, resetIframeHeight: function (t) {
                            if (!t) {
                                var e = document.getElementById("iframe"),
                                    n = e.contentWindow || e.contentDocument.parentWindow,
                                    i = n.document;
                                if (!i.body) return;
                                t = i.documentElement.offsetHeight || i.body.offsetHeight, t && (this.height = t)
                            }
                            t && (this.height = t)
                        }
                    }
                },
                c = o,
                u = n("2877"),
                l = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = l.exports
        }, e7f9: function (t, e, n) {
            "use strict";

            function i(t, e) {
                return e = {
                    exports: {}
                }, t(e, e.exports), e.exports
            }
            var r = i(function (t) {
                    function e() {
                        return t.exports = e = Object.assign || function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                            }
                            return t
                        }, e.apply(this, arguments)
                    }
                    t.exports = e
                }),
                a = i(function (t) {
                    var e = function (t) {
                        var e, n = Object.prototype,
                            i = n.hasOwnProperty,
                            r = "function" === typeof Symbol ? Symbol : {},
                            a = r.iterator || "@@iterator",
                            s = r.asyncIterator || "@@asyncIterator",
                            o = r.toStringTag || "@@toStringTag";

                        function c(t, e, n, i) {
                            var r = e && e.prototype instanceof m ? e : m,
                                a = Object.create(r.prototype),
                                s = new T(i || []);
                            return a._invoke = S(t, n, s), a
                        }

                        function u(t, e, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: t.call(e, n)
                                }
                            } catch (i) {
                                return {
                                    type: "throw",
                                    arg: i
                                }
                            }
                        }
                        t.wrap = c;
                        var l = "suspendedStart",
                            d = "suspendedYield",
                            p = "executing",
                            h = "completed",
                            f = {};

                        function m() {}

                        function v() {}

                        function y() {}
                        var g = {};
                        g[a] = function () {
                            return this
                        };
                        var b = Object.getPrototypeOf,
                            w = b && b(b(I([])));
                        w && w !== n && i.call(w, a) && (g = w);
                        var k = y.prototype = m.prototype = Object.create(g);

                        function _(t) {
                            ["next", "throw", "return"].forEach(function (e) {
                                t[e] = function (t) {
                                    return this._invoke(e, t)
                                }
                            })
                        }

                        function x(t) {
                            function e(n, r, a, s) {
                                var o = u(t[n], t, r);
                                if ("throw" !== o.type) {
                                    var c = o.arg,
                                        l = c.value;
                                    return l && "object" === typeof l && i.call(l, "__await") ? Promise.resolve(l.__await).then(function (t) {
                                        e("next", t, a, s)
                                    }, function (t) {
                                        e("throw", t, a, s)
                                    }) : Promise.resolve(l).then(function (t) {
                                        c.value = t, a(c)
                                    }, function (t) {
                                        return e("throw", t, a, s)
                                    })
                                }
                                s(o.arg)
                            }
                            var n;

                            function r(t, i) {
                                function r() {
                                    return new Promise(function (n, r) {
                                        e(t, i, n, r)
                                    })
                                }
                                return n = n ? n.then(r, r) : r()
                            }
                            this._invoke = r
                        }

                        function S(t, e, n) {
                            var i = l;
                            return function (r, a) {
                                if (i === p) throw new Error("Generator is already running");
                                if (i === h) {
                                    if ("throw" === r) throw a;
                                    return P()
                                }
                                n.method = r, n.arg = a;
                                while (1) {
                                    var s = n.delegate;
                                    if (s) {
                                        var o = C(s, n);
                                        if (o) {
                                            if (o === f) continue;
                                            return o
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (i === l) throw i = h, n.arg;
                                        n.dispatchException(n.arg)
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    i = p;
                                    var c = u(t, e, n);
                                    if ("normal" === c.type) {
                                        if (i = n.done ? h : d, c.arg === f) continue;
                                        return {
                                            value: c.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === c.type && (i = h, n.method = "throw", n.arg = c.arg)
                                }
                            }
                        }

                        function C(t, n) {
                            var i = t.iterator[n.method];
                            if (i === e) {
                                if (n.delegate = null, "throw" === n.method) {
                                    if (t.iterator["return"] && (n.method = "return", n.arg = e, C(t, n), "throw" === n.method)) return f;
                                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return f
                            }
                            var r = u(i, t.iterator, n.arg);
                            if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, f;
                            var a = r.arg;
                            return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, f) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, f)
                        }

                        function O(t) {
                            var e = {
                                tryLoc: t[0]
                            };
                            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                        }

                        function j(t) {
                            var e = t.completion || {};
                            e.type = "normal", delete e.arg, t.completion = e
                        }

                        function T(t) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], t.forEach(O, this), this.reset(!0)
                        }

                        function I(t) {
                            if (t) {
                                var n = t[a];
                                if (n) return n.call(t);
                                if ("function" === typeof t.next) return t;
                                if (!isNaN(t.length)) {
                                    var r = -1,
                                        s = function n() {
                                            while (++r < t.length)
                                                if (i.call(t, r)) return n.value = t[r], n.done = !1, n;
                                            return n.value = e, n.done = !0, n
                                        };
                                    return s.next = s
                                }
                            }
                            return {
                                next: P
                            }
                        }

                        function P() {
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        return v.prototype = k.constructor = y, y.constructor = v, y[o] = v.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
                            var e = "function" === typeof t && t.constructor;
                            return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                        }, t.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, o in t || (t[o] = "GeneratorFunction")), t.prototype = Object.create(k), t
                        }, t.awrap = function (t) {
                            return {
                                __await: t
                            }
                        }, _(x.prototype), x.prototype[s] = function () {
                            return this
                        }, t.AsyncIterator = x, t.async = function (e, n, i, r) {
                            var a = new x(c(e, n, i, r));
                            return t.isGeneratorFunction(n) ? a : a.next().then(function (t) {
                                return t.done ? t.value : a.next()
                            })
                        }, _(k), k[o] = "Generator", k[a] = function () {
                            return this
                        }, k.toString = function () {
                            return "[object Generator]"
                        }, t.keys = function (t) {
                            var e = [];
                            for (var n in t) e.push(n);
                            return e.reverse(),
                                function n() {
                                    while (e.length) {
                                        var i = e.pop();
                                        if (i in t) return n.value = i, n.done = !1, n
                                    }
                                    return n.done = !0, n
                                }
                        }, t.values = I, T.prototype = {
                            constructor: T,
                            reset: function (t) {
                                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(j), !t)
                                        for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                                }, stop: function () {
                                    this.done = !0;
                                    var t = this.tryEntries[0],
                                        e = t.completion;
                                    if ("throw" === e.type) throw e.arg;
                                    return this.rval
                                }, dispatchException: function (t) {
                                    if (this.done) throw t;
                                    var n = this;

                                    function r(i, r) {
                                        return o.type = "throw", o.arg = t, n.next = i, r && (n.method = "next", n.arg = e), !!r
                                    }
                                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                        var s = this.tryEntries[a],
                                            o = s.completion;
                                        if ("root" === s.tryLoc) return r("end");
                                        if (s.tryLoc <= this.prev) {
                                            var c = i.call(s, "catchLoc"),
                                                u = i.call(s, "finallyLoc");
                                            if (c && u) {
                                                if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                                if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                            } else if (c) {
                                                if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                            } else {
                                                if (!u) throw new Error("try statement without catch or finally");
                                                if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                            }
                                        }
                                    }
                                }, abrupt: function (t, e) {
                                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                        var r = this.tryEntries[n];
                                        if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                            var a = r;
                                            break
                                        }
                                    }
                                    a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                                    var s = a ? a.completion : {};
                                    return s.type = t, s.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(s)
                                }, complete: function (t, e) {
                                    if ("throw" === t.type) throw t.arg;
                                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                                }, finish: function (t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var n = this.tryEntries[e];
                                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), f
                                    }
                                },
                                catch: function (t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var n = this.tryEntries[e];
                                        if (n.tryLoc === t) {
                                            var i = n.completion;
                                            if ("throw" === i.type) {
                                                var r = i.arg;
                                                j(n)
                                            }
                                            return r
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                }, delegateYield: function (t, n, i) {
                                    return this.delegate = {
                                        iterator: I(t),
                                        resultName: n,
                                        nextLoc: i
                                    }, "next" === this.method && (this.arg = e), f
                                }
                        }, t
                    }(t.exports);
                    try {
                        regeneratorRuntime = e
                    } catch (n) {
                        Function("r", "regeneratorRuntime = r")(e)
                    }
                }),
                s = a;

            function o(t, e, n, i, r, a, s) {
                try {
                    var o = t[a](s),
                        c = o.value
                } catch (u) {
                    return void n(u)
                }
                o.done ? e(c) : Promise.resolve(c).then(i, r)
            }

            function c(t) {
                return function () {
                    var e = this,
                        n = arguments;
                    return new Promise(function (i, r) {
                        var a = t.apply(e, n);

                        function s(t) {
                            o(a, i, r, s, c, "next", t)
                        }

                        function c(t) {
                            o(a, i, r, s, c, "throw", t)
                        }
                        s(void 0)
                    })
                }
            }
            var u = c,
                l = {
                    iqiyi: function () {
                        return !!navigator.userAgent.match(/iqiyi\s*IqiyiVersion\/([\d.]+)/i)
                    }, zhishi: function () {
                        return !!navigator.userAgent.match(/knowledge\s*KnowledgeVersion\/([\d.]+)/i)
                    }, chrome: function () {
                        return !!navigator.userAgent.match(/Chrome\/([\d.]+)/) || !!navigator.userAgent.match(/CriOS\/([\d.]+)/)
                    }, android: function () {
                        return !!navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
                    }, iOS: function () {
                        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
                    }, iOSEgt9: function () {
                        return this.iOS() && /OS (\d+)/i.exec(navigator.userAgent)[1] >= 9
                    }, iphoneX: function () {
                        return "undefined" !== typeof window && (/iphone/gi.test(navigator.userAgent) && window.screen.height >= 812)
                    }, vivo: function () {
                        return !!navigator.userAgent.match(/vivo (\w+) /i)
                    }, qq: function () {
                        return !!navigator.userAgent.match(/(QQBrowser)\/([\d.]+)/)
                    }, uc: function () {
                        return !!navigator.userAgent.match(/UCBrowser/i)
                    }, baidu: function () {
                        return !!navigator.userAgent.match(/baidu/i)
                    }, wechat: function () {
                        return /MicroMessenger/.test(navigator.userAgent)
                    }
                },
                d = {
                    IQIYI: "iqiyi",
                    KNOWLEDGE: "knowledge"
                },
                p = {
                    ANDROID: "com.iqiyi.knowledge",
                    IOS: "knowledge://mobile/register_business/com_iqiyi_knowledge"
                },
                h = {
                    zhishiOtaLink: "//ota.iqiyi.com/f4.jsp?url=zhishi_h5",
                    zhishiLink: "//zhishi.iqiyi.com/kpp/download/index.html",
                    iqiyiLink: "//www.iqiyi.com/app/register_business/index.html",
                    zhishiQQLink: "//a.app.qq.com/o/simple.jsp?pkgname=com.iqiyi.knowledge",
                    iqiyiQQLink: "//a.app.qq.com/o/simple.jsp?pkgname=com.qiyi.video",
                    iqiyiULink: "//www.iqiyi.com/app/register_business/index.html",
                    zhishiULink: "//www.iqiyi.com/knowledge/ulink/register_business/index.html"
                };

            function f() {
                return new Promise(function (t, e) {
                    "undefined" !== typeof iqiyi ? iqiyi.ready(function (n) {
                        n ? t() : e(new Error("initIqy error: iqiyi.ready"))
                    }) : e(new Error("initIqy error: iqiyi not found, please detect iqiyi sdk has been installed!"))
                })
            }
            var m = {
                    ANDROID: "com.iqiyi.knowledge",
                    IOS: "knowledge://mobile/register_business/com_iqiyi_knowledge"
                },
                v = function () {
                    function t() {
                        this.isInstalled = !1
                    }
                    var e = t.prototype;
                    return e.is = function () {
                        var t = u(s.mark(function t() {
                            var e, n = this;
                            return s.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    if ("undefined" !== typeof iqiyi) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", Promise.reject(new Error("isAppInstalled error: iqiyi not found, please detect iqiyi sdk has been installed!")));
                                case 2:
                                    if (!this.isInstalled) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return", !0);
                                case 4:
                                    return e = m.ANDROID, l.iOS() && (e = m.IOS), t.next = 8, f();
                                case 8:
                                    return t.abrupt("return", new Promise(function (t, i) {
                                        iqiyi.checkStatusApp({
                                            scheme: e
                                        }, function (e) {
                                            l.iOS() ? n.isInstalled = e.result : n.isInstalled = e.data.appinstallstatus, t(n.isInstalled)
                                        })
                                    }));
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(), t
                }(),
                y = new v,
                g = function (t) {
                    return new Promise(function (e) {
                        setTimeout(function () {
                            e()
                        }, t)
                    })
                },
                b = {
                    app: {
                        bizId: 1400,
                        bizSub: {
                            category: 1,
                            column: 7,
                            discovery: 2,
                            coupon_center: 18,
                            category_filter: 20,
                            category_all: 21,
                            learning: 2,
                            package: 26,
                            lecturer: 15,
                            set_meal_payment: 205,
                            column_refresh: 204
                        }
                    },
                    plugin: {
                        bizId: 14,
                        bizSub: {
                            category: 12,
                            column: 7,
                            discovery: 2,
                            coupon_center: 18,
                            category_filter: 20,
                            category_all: 21,
                            user_favor: 3,
                            package: 26,
                            lecturer: 15,
                            set_meal_payment: 205,
                            column_refresh: 204
                        }
                    }
                },
                w = {
                    getBizStr: function (t) {
                        var e = t.schema,
                            n = t.type;
                        if (!n) throw new Error("getBizStr error: config type not set");
                        if (!e) throw new Error("getBizStr error: config schema not set");
                        var i = {
                                biz_params: "",
                                biz_extend_params: "",
                                biz_dynamic_params: t.dynamic || "",
                                biz_statistics: t.statistics || ""
                            },
                            r = b.app,
                            a = r.bizSub,
                            s = r.bizId,
                            o = a.category;
                        return "iqiyi" === e && (a = b.plugin.bizSub, s = b.plugin.bizId, o = a.category), Object.hasOwnProperty.call(a, n) ? i.biz_sub_id = a[n] : i.biz_sub_id = o, JSON.stringify({
                            biz_id: s,
                            biz_plugin: p.ANDROID,
                            biz_params: i
                        })
                    }, getAppSchemaURL: function (t) {
                        return "knowledge://mobile/register_business/com_iqiyi_knowledge?pluginParams=" + encodeURIComponent(encodeURIComponent(t))
                    }, getPluginSchemaURL: function (t) {
                        return "iqiyi://mobile/register_business/com_iqiyi_knowledge?pluginParams=" + encodeURIComponent(encodeURIComponent(t))
                    }, getUniversalURL: function (t, e) {
                        var n = h.zhishiULink;
                        return "iqiyi" === t && (n = h.iqiyiULink), e ? n + "?pluginParams=" + encodeURIComponent(encodeURIComponent(e)) : n
                    }, getBrowserSchemaURL: function (t, e) {
                        var n = h.zhishiQQLink,
                            i = this.getAppSchemaURL(t);
                        return "iqiyi" === e && (n = h.iqiyiQQLink, i = this.getPluginSchemaURL(t)), l.wechat() ? n + "&android_schema=" + encodeURIComponent(i) : i
                    }, asyncOpenLink: function () {
                        var t = u(s.mark(function t(e) {
                            var n, i;
                            return s.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (n = 3e3, l.iOS() && !l.iOSEgt9() && (n = 5e3), !(l.chrome() || l.iOSEgt9() || l.wechat())) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 5, g(200);
                                case 5:
                                    window.location.href = e, t.next = 9;
                                    break;
                                case 8:
                                    this.openWithFrame(e);
                                case 9:
                                    return t.next = 11, g(n);
                                case 11:
                                    if (i = document.hidden || document.webkitHidden, i) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.abrupt("return", Promise.reject());
                                case 14:
                                    return t.abrupt("return", Promise.resolve());
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    download: function (t, e) {
                        void 0 === t && (t = d.KNOWLEDGE), void 0 === e && (e = !1);
                        var n = h.iqiyiLink;
                        t === d.KNOWLEDGE && (n = e ? h.zhishiOtaLink : h.zhishiLink), "string" === typeof e && (e.startsWith("http") || e.startsWith("//")) && (n = e), l.vivo() ? this.openWithFrame(n) : location.href = n
                    }, openWithFrame: function (t) {
                        var e = document.getElementById("open_app_iframe");
                        e || (e = document.createElement("iframe"), e.id = "open_app_iframe", e.classList.add("dn"), e.setAttribute("name", "open_app_iframe"), document.body.appendChild(e)), e.setAttribute("src", t)
                    }, openWithBrowser: function (t, e, n) {
                        var i = this;
                        void 0 === t && (t = d.KNOWLEDGE), void 0 === n && (n = !1), this.asyncOpenLink(this.getBrowserSchemaURL(e, t))["catch"](function () {
                            i.download(t, n)
                        })
                    }, openWithRegistration: function (t, e) {
                        l.iOS() ? location.href = t === d.KNOWLEDGE ? this.getUniversalURL(t, e) : this.getPluginSchemaURL(e) : location.href = t === d.KNOWLEDGE ? this.getAppSchemaURL(e) : this.getPluginSchemaURL(e)
                    }, openWithUniversalLink: function (t, e) {
                        location.href = this.getUniversalURL(t, e)
                    }
                },
                k = {
                    prepare: function () {
                        l.iqiyi() && y.is()
                    }, open: function () {
                        var t = u(s.mark(function t(e) {
                            var n, i, r;
                            return s.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                case 0:
                                    if ("undefined" === typeof e.download && (e.download = !1), !l.zhishi()) {
                                        t.next = 8;
                                        break
                                    }
                                    if (e.schema = d.KNOWLEDGE, n = w.getBizStr(e), n) {
                                        t.next = 6;
                                        break
                                    }
                                    throw new Error("open error: detect app and reg type in app not support!");
                                case 6:
                                    return w.openWithRegistration(e.schema, n), t.abrupt("return");
                                case 8:
                                    if (!l.iqiyi()) {
                                        t.next = 21;
                                        break
                                    }
                                    if ("undefined" === typeof e.schema && (e.schema = d.IQIYI), e.schema !== d.IQIYI) {
                                        t.next = 13;
                                        break
                                    }
                                    return w.openWithRegistration(e.schema, w.getBizStr(e)), t.abrupt("return");
                                case 13:
                                    return t.next = 15, y.is();
                                case 15:
                                    if (i = t.sent, i) {
                                        t.next = 19;
                                        break
                                    }
                                    return l.android() ? w.download(d.KNOWLEDGE, e.download) : w.openWithUniversalLink(d.KNOWLEDGE, ""), t.abrupt("return");
                                case 19:
                                    return w.openWithRegistration(d.KNOWLEDGE, w.getBizStr(e)), t.abrupt("return");
                                case 21:
                                    if (!e.link) {
                                        t.next = 24;
                                        break
                                    }
                                    return location.href = e.link, t.abrupt("return");
                                case 24:
                                    if ("undefined" === typeof e.schema && (e.schema = d.KNOWLEDGE), r = w.getBizStr(e), !l.iOSEgt9()) {
                                        t.next = 29;
                                        break
                                    }
                                    return l.uc() ? w.openWithBrowser(e.schema, r, e.download) : w.openWithUniversalLink(e.schema, r), t.abrupt("return");
                                case 29:
                                    if (!l.baidu()) {
                                        t.next = 32;
                                        break
                                    }
                                    return w.download(e.schema, e.download), t.abrupt("return");
                                case 32:
                                    w.openWithBrowser(e.schema, r, e.download);
                                case 33:
                                case "end":
                                    return t.stop()
                                }
                            }, t)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    openHomeInApp: function (t) {
                        void 0 === t && (t = {}), this.open(r({
                            schema: d.KNOWLEDGE,
                            type: "category"
                        }, t))
                    }, openColumnInApp: function (t, e) {
                        void 0 === e && (e = {}), this.open(r({
                            schema: d.KNOWLEDGE,
                            type: "column",
                            dynamic: "id=" + t
                        }, e))
                    }, openColumn: function (t, e) {
                        void 0 === e && (e = {}), this.open(r({
                            type: "column",
                            dynamic: "id=" + t,
                            link: "//zhishi.m.iqiyi.com/column?columnId=" + t
                        }, e))
                    }
                };
            e["a"] = k
        }, e8eb: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("form", {
                        ref: "form",
                        attrs: {
                            action: t.formUrl,
                            method: "post",
                            enctype: "multipart/form-data",
                            target: "uploadIframe"
                        }
                    }, [n("input", {
                        ref: "pictureInput",
                        staticClass: "select-input",
                        attrs: {
                            name: t.inputName,
                            type: "file"
                        },
                        on: {
                            change: t.onUpload
                        }
                    }), t._l(t.formItems, function (t) {
                        return n("input", {
                            key: t.id,
                            staticStyle: {
                                display: "none"
                            },
                            attrs: {
                                name: t.name
                            },
                            domProps: {
                                value: t.value
                            }
                        })
                    })], 2), n("iframe", {
                        ref: "uploadIframe",
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            name: "uploadIframe"
                        },
                        on: {
                            load: t.onIframeLoad
                        }
                    })])
                },
                r = [],
                a = n("a4bb"),
                s = n.n(a),
                o = (n("6d67"), n("d92a"), n("96cf"), n("3b8d")),
                c = (n("c5f6"), {
                    name: "FileUpload",
                    props: {
                        upload: {
                            type: Function,
                            default: function () {}
                        },
                        timeout: {
                            type: Number,
                            default: 1e4
                        },
                        inputName: {
                            type: String,
                            default: ""
                        },
                        uploadCallbackName: {
                            type: String,
                            default: "__formUploadCallback"
                        }
                    },
                    data: function () {
                        return {
                            formUrl: "",
                            formItems: []
                        }
                    }, methods: {
                        onUpload: function () {
                            var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                                var n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.upload(e, this.createFormAjax.bind(this));
                                    case 3:
                                        n = t.sent, n && this.$emit("loading", e), t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), this.$emit("failure", {
                                            msg: t.t0.message
                                        });
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this, [
                                    [0, 7]
                                ])
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        createFormAjax: function (t, e) {
                            var n = this;
                            window.document.domain = "iqiyi.com", console.log(this.uploadCallbackName), window[this.uploadCallbackName] = function (t) {
                                delete window[n.uploadCallbackName], n.cleanup(), n.$emit("success", t)
                            }, this.formUrl = t, e.callback = this.uploadCallbackName, this.formItems = s()(e).map(function (t, n) {
                                return {
                                    name: t,
                                    value: e[t],
                                    id: n + 1
                                }
                            }), this.$nextTick(function () {
                                n.$refs.form.submit()
                            }), this.timeout && (this.timer = setTimeout(function () {
                                n.cleanup(), n.$emit("failure", {
                                    msg: "网络状况不佳，请稍后重试"
                                })
                            }, this.timeout))
                        }, cleanup: function () {
                            clearTimeout(this.timer), this.$refs.pictureInput.value = ""
                        }, onIframeLoad: function (t) {
                            try {
                                var e = this.$refs.uploadIframe.contentWindow,
                                    n = e.document.body.innerHtml;
                                console.log(n), n && this.$emit("success", JSON.parse(n))
                            } catch (i) {
                                this.cleanup(), this.$emit("failure", {
                                    msg: "网络状况不佳，请稍后重试"
                                })
                            }
                        }
                    }
                }),
                u = c,
                l = n("2877"),
                d = Object(l["a"])(u, i, r, !1, null, null, null);
            e["a"] = d.exports
        }, e917: function (t, e, n) {
            "use strict";
            var i = function (t, e) {
                    var n = e._c;
                    return n("section", {
                        staticClass: "m-appeal-title"
                    }, [e._v("\n  " + e._s(e.props.title) + "\n")])
                },
                r = [],
                a = n("2877"),
                s = {},
                o = Object(a["a"])(s, i, r, !0, null, null, null);
            e["a"] = o.exports
        }, eb20: function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return l
            }), n.d(e, "a", function () {
                return d
            });
            var i = n("cebc"),
                r = n("a8db"),
                a = n("e2a0"),
                s = n.n(a),
                o = n("5321"),
                c = n("c0ba"),
                u = n("8296");

            function l() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.sendShow,
                    n = void 0 === e ? null : e,
                    i = Object(r["a"])(t, ["sendShow"]),
                    a = new c["b"](function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = e.block,
                            r = e.callback || n || o["h"];
                        i && r(e)
                    }, i),
                    u = "".concat(i.key, "_").concat(o["a"]);
                return {
                    bind: function (t, e) {
                        var n = e.value,
                            i = s()(e.value) ? {
                                block: n
                            } : n || {};
                        t[u] = i.block, a.observe(t, i, e.modifiers)
                    }, inserted: function () {
                        a.notify()
                    }, unbind: function (t) {
                        a.unobserve(t), delete t[u]
                    }
                }
            }

            function d() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.sendClick,
                    n = void 0 === e ? null : e,
                    i = Object(r["a"])(t, ["sendClick"]),
                    a = new c["a"](function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 ? arguments[2] : void 0,
                            a = e.callback || p;
                        if (e) {
                            if (a(t, e, n, i.key), r.defaultPrevented) return;
                            Object(o["v"])(r, t)
                        }
                    }, i);
                return {
                    bind: function (t, e) {
                        a.observe(t, e.value)
                    }, unbind: function (t) {
                        a.unobserve(t)
                    }
                }
            }

            function p(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0;
                if (s()(e) && (e = {
                    rseat: e
                }), e.rseat) {
                    var a = h(t, r),
                        c = n || o["g"];
                    c(Object(i["a"])({
                        block: a
                    }, e))
                }
            }

            function h(t, e) {
                if (!Object(u["H"])(t)) {
                    var n = "";
                    while (!(n = t["".concat(e, "_").concat(o["a"])]))
                        if (t = t.parentNode, !t || Object(u["H"])(t)) return;
                    return n || ""
                }
            }
        }, f112: function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return f
            }), n.d(e, "a", function () {
                return v
            }), n.d(e, "c", function () {
                return b
            });
            n("795b"), n("5df3"), n("768b");
            var i = n("f499"),
                r = n.n(i),
                a = (n("96cf"), n("55dd"), n("ac6a"), n("f3e2"), n("7f7f"), n("6d67"), n("3b8d")),
                s = n("936f"),
                o = n("8d81"),
                c = n.n(o),
                u = (n("00b9"), n("21fd")),
                l = "//pub.m.iqiyi.com/h5/main/hotList/interRep/",
                d = "//api-top.iqiyi.com/index/top",
                p = "//api-top.iqiyi.com/index/fronts",
                h = "//pub.m.iqiyi.com/h5/main/proxy/searchVideo/";

            function f(t) {
                return m.apply(this, arguments)
            }

            function m() {
                return m = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, a, o, u;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            if (e.channelId && e.dim && e.type) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            if (n = {
                                channelId: e.channelId,
                                dim: e.dim,
                                type: e.type,
                                pageNum: e.pageNum || 1,
                                len: e.pageSize || 10,
                                isCtrl: e.isCtrl || 0
                            }, f.cache = f.cache || {}, i = c()(r()(n)), a = f.cache[i], !a) {
                                t.next = 8;
                                break
                            }
                            return t.abrupt("return", a);
                        case 8:
                            return t.next = 10, s["a"].jsonp(l, {
                                params: n
                            });
                        case 10:
                            return o = t.sent, u = o.data, t.abrupt("return", u && "A00000" === u.code ? f.cache[i] = u.data : []);
                        case 13:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), m.apply(this, arguments)
            }

            function v(t) {
                return y.apply(this, arguments)
            }

            function y() {
                return y = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r, a, o;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = e.cids ? p : d, t.next = 3, s["a"].get(n, {
                                params: e
                            });
                        case 3:
                            if (i = t.sent, !i || !i.data || "A00000" !== i.data.code) {
                                t.next = 17;
                                break
                            }
                            if (r = e.cids ? g(i.data.data) : i.data.data[0].albums, "1" !== e.filterStatus) {
                                t.next = 14;
                                break
                            }
                            return a = [], r.forEach(function (t) {
                                a.push(t.qipu_id)
                            }), t.next = 11, Object(u["f"])(a).catch(function () {
                                return r
                            });
                        case 11:
                            return o = t.sent, r.forEach(function (t) {
                                t.hotNum = o[t.qipu_id]
                            }), t.abrupt("return", r);
                        case 14:
                            return t.abrupt("return", r);
                        case 17:
                            return t.abrupt("return", []);
                        case 18:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), y.apply(this, arguments)
            }

            function g(t) {
                var e = [];
                return t.forEach(function (t) {
                    e = e.concat(t.albums)
                }), e.sort(function (t, e) {
                    return e.album_count_hour - t.album_count_hour
                }), e.slice(0, 4)
            }

            function b(t) {
                return w.apply(this, arguments)
            }

            function w() {
                return w = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                if : "hotQuery",
                                response_type: 0,
                                categoryId: e.cid
                            }, t.next = 3, s["a"].jsonp(h, {
                                params: n
                            });
                        case 3:
                            return i = t.sent, r = i.data, t.abrupt("return", r.data ? r.data.slice(0, 8) : null);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), w.apply(this, arguments)
            }
        }, f191: function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return o
            }), n.d(e, "b", function () {
                return c
            });
            n("6762"), n("2fdb");
            var i = n("4f30"),
                r = n("3e9e"),
                a = n("b2e7"),
                s = [i["CHANNEL_DIANSHIJU"], i["CHANNEL_ZONGYI"], i["CHANNEL_JILUPIAN"]];

            function o(t, e, n, i) {
                var o = r["a"].getCurVideo(),
                    c = o && "focus" === o.card,
                    u = t && t.data && t.data.cid ? t.data.cid + "" : "",
                    l = t && (1 === t.purchaseType || 2 === t.purchaseType) || !t.prv,
                    d = !0;
                return Object(a["M"])() && i && (d = !!t.src), s.includes(u) && n && l && "bodan" !== e && !c && d
            }

            function c(t, e, n) {
                var i = r["a"].getCurVideo(),
                    a = i && "focus" === i.card,
                    o = t ? t.cid + "" : "",
                    c = t && (1 === t.purchaseType || 2 === t.purchaseType) || t.isLongVideo;
                return s.includes(o) && n && c && "bodan" !== e && !a
            }
        }, f2ae: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        ref: "wrapper",
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [n("div", {
                        ref: "content",
                        class: t.innerClass
                    }, [n("div", {
                        ref: "pullDown"
                    }, [t.pullDownRefresh && !t.showEmptyTip ? t._t("pulldown", [n("section", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback.multiple",
                            value: t.showPingback.pulldown,
                            expression: "showPingback.pulldown",
                            modifiers: {
                                multiple: !0
                            }
                        }, {
                            name: "show",
                            rawName: "v-show",
                            value: t.showPullDownLoading,
                            expression: "showPullDownLoading"
                        }],
                        staticClass: "m-hotSpot-update"
                    }, [t._m(0)]), n("portal", {
                        attrs: {
                            to: "topTip"
                        }
                    }, [n("section", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.up.error,
                            expression: "up.error"
                        }],
                        staticClass: "m-hotSpot-recommendTip am_recommendTip",
                        staticStyle: {
                            "z-index": "1000"
                        }
                    }, [t._v("数据获取失败，请下拉页面重试\n          ")]), n("section", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.up.loading && !t.up.complete && t.up.latestNum,
                            expression: "!up.loading && !up.complete && up.latestNum"
                        }],
                        staticClass: "m-hotSpot-recommendTip am_recommendTip",
                        staticStyle: {
                            "z-index": "1000"
                        }
                    }, [t._v("为您推荐" + t._s(t.up.latestNum) + "条新视频\n          ")])])], {
                        pullDownRefresh: t.pullDownRefresh,
                        showPullDownLoading: t.showPullDownLoading,
                        loading: t.up.loading,
                        error: t.up.error,
                        complete: t.up.complete,
                        latestNum: t.up.latestNum,
                        loadList: t.loadList
                    }) : t._e()], 2), t._t("top", null, {
                        listLength: t.list.length
                    }), t._l(t.list, function (e, i) {
                        return n("div", {
                            key: e.id || e.qipuId || i
                        }, [t._t("listItem", null, {
                            video: e,
                            index: i
                        }), t.middleTip && t.latestUpFeedId && i < t.latestUpFeedNum && e.feedId === t.latestUpFeedId ? t._t("middleTip", [n("section", {
                            directives: [{
                                name: "show-pingback",
                                rawName: "v-show-pingback",
                                value: t.showPingback.middle,
                                expression: "showPingback.middle"
                            }],
                            staticClass: "m-hotSpot-bannerTip bgcol"
                        }, [n("a", {
                            staticClass: "c-link",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: t.onMiddleClick
                            }
                        }, [t._v("上次看到这里，点击刷新"), n("i", {
                            staticClass: "c-glyphicon c-glyphicon-refresh"
                        })])])], {
                            onMiddleClick: t.onMiddleClick
                        }) : t._e()], 2)
                    }), t.pullUpLoad && !t.showEmptyTip ? t._t("pullup", [n("section", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.down.loading,
                            expression: "down.loading"
                        }],
                        staticClass: "m-hotSpot-update"
                    }, [t._m(1)]), n("section", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.down.error,
                            expression: "down.error"
                        }],
                        staticClass: "m-hotSpot-bannerTip",
                        on: {
                            click: function (e) {
                                return t.loadList()
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-glyphicon c-glyphicon-refresh"
                    }), t._v("数据加载失败，请"), n("a", {
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        }
                    }, [t._v("点击刷新")]), t._v("重试\n      ")]), n("section", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.down.complete,
                            expression: "down.complete"
                        }],
                        staticClass: "m-hotSpot-update"
                    }, [t._m(2)])], {
                        pullUpLoad: t.pullUpLoad,
                        loading: t.down.loading,
                        error: t.down.error,
                        complete: t.down.complete,
                        latestNum: t.down.latestNum,
                        loadList: t.loadList
                    }) : t._e(), t._t("extra")], 2), t.showEmptyTip ? t._t("empty", [n("div", {
                        staticClass: "m-box"
                    }, [n("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [n("section", {
                        staticClass: "m-nowifi-tip tip-fixed"
                    }, [n("i", {
                        staticClass: "wifi-icon"
                    }), t.errorNum ? n("div", [n("div", {
                        staticClass: "info"
                    }, [t._v("哎呀，数据获取失败~")]), n("div", {
                        staticClass: "btn-wrap"
                    }, [n("div", {
                        staticClass: "btn-link"
                    }, [n("a", {
                        staticClass: "c-link",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function (e) {
                                return t.loadList()
                            }
                        }
                    }, [t._v("刷新一下")])])])]) : n("div", {
                        staticClass: "info"
                    }, [t._v("精彩视频，马上呈现")])])])])]) : t._e(), n("portal-target", {
                        attrs: {
                            name: "topTip"
                        }
                    })], 2)
                },
                r = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "inner"
                        }, [n("i", {
                            staticClass: "am-loading-icon"
                        })])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "inner"
                        }, [n("i", {
                            staticClass: "update-icon"
                        }), n("span", {
                            staticClass: "c-info"
                        }, [t._v("正在加载")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "inner"
                        }, [n("span", {
                            staticClass: "c-info"
                        }, [t._v("没有更多了")])])
                    }
                ],
                a = (n("a481"), n("57e7"), n("d92a"), n("96cf"), n("3b8d")),
                s = (n("c5f6"), n("1fba")),
                o = n("dfb9"),
                c = n("3e9e"),
                u = n("8296"),
                l = "horizontal",
                d = "vertical",
                p = {
                    name: "FeedScroll",
                    mixins: [o["a"]],
                    props: {
                        initList: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        callback: {
                            type: Function,
                            default: null
                        },
                        showPingback: {
                            type: Object,
                            default: function () {
                                return {
                                    pulldown: {},
                                    middle: {},
                                    pullup: {}
                                }
                            }
                        },
                        probeType: {
                            type: Number,
                            default: 1
                        },
                        click: {
                            type: Boolean,
                            default: !0
                        },
                        direction: {
                            type: String,
                            default: d
                        },
                        scrollbar: {
                            type: null,
                            default: !1
                        },
                        pullDownRefresh: {
                            type: null,
                            default: !1
                        },
                        pullUpLoad: {
                            type: null,
                            default: !1
                        },
                        startY: {
                            type: Number,
                            default: 0
                        },
                        freeScroll: {
                            type: Boolean,
                            default: !1
                        },
                        innerClass: {
                            type: String,
                            default: ""
                        },
                        middleTip: {
                            type: Boolean,
                            default: !1
                        },
                        emptyTip: {
                            type: Boolean,
                            default: !0
                        },
                        tipDelay: {
                            type: Number,
                            default: 3e3
                        },
                        screenOutStop: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function () {
                        return {
                            list: [],
                            up: {
                                loading: !1,
                                error: !1,
                                complete: !1,
                                latestNum: 0
                            },
                            down: {
                                loading: !1,
                                error: !1,
                                complete: !1,
                                latestNum: 0
                            },
                            aboveTop: !1,
                            contentOffsetTop: 0,
                            stopScroll: !1,
                            latestUpFeedId: 0,
                            latestUpFeedNum: 0,
                            isMiddleClick: !1,
                            errorNum: 0,
                            maxError: 3,
                            beforeX: 0,
                            beforeY: 0
                        }
                    }, computed: {
                        showPullDownLoading: function () {
                            return this.up.loading || this.aboveTop || this.isMiddleClick
                        }, showEmptyTip: function () {
                            return this.emptyTip && !this.list.length
                        }
                    }, watch: {
                        list: function () {
                            this.list.length < 4 && !this.down.complete && this.loadList()
                        }, showPullDownLoading: function (t) {
                            var e = this;
                            !this.contentOffsetTop && t ? this.$nextTick(function () {
                                e.contentOffsetTop = -e.$refs.pullDown.offsetHeight || -44, e.resetPlayerOffset(-e.contentOffsetTop)
                            }) : this.resetPlayerOffset(t ? -this.contentOffsetTop : this.contentOffsetTop)
                        }
                    }, created: function () {
                        this.list = this.initList.concat(this.list)
                    }, mounted: function () {
                        this.$nextTick(function () {
                            this.initScroll(), this.list.length && (this.getFeatures(this.list), this.forceUpdate())
                        }), this.bindEvent()
                    }, methods: {
                        loadList: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                                var n, i, r = this;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.callback && !this.down.complete) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return n = this[e ? "up" : "down"], this.resetState(n), n.loading = !0, t.next = 7, this.callback(e).catch(function () {
                                            return !1
                                        });
                                    case 7:
                                        if (i = t.sent, n.error = !i, n.complete = i && !i.length, n.latestNum = i ? i.length : 0, i) {
                                            t.next = 17;
                                            break
                                        }
                                        if (this.errorNum++, !(this.errorNum < this.maxError)) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.abrupt("return", this.loadList(e));
                                    case 15:
                                        t.next = 21;
                                        break;
                                    case 17:
                                        this.errorNum = 0, e ? (this.list = i.concat(this.list), this.latestUpFeedNum = n.latestNum, this.latestUpFeedNum >= 0 && i[this.latestUpFeedNum - 1] && (this.latestUpFeedId = i[this.latestUpFeedNum - 1].feedId)) : this.list = this.list.concat(i), this.getFeatures(i), this.$qiyiPlayer && (this.$qiyiPlayer.pause(), this.$qiyiPlayer.hide());
                                    case 21:
                                        this.$nextTick(function () {
                                            r.forceUpdate()
                                        }), clearTimeout(this.timer), e && this.tipDelay >= 0 && (this.timer = setTimeout(this.resetState.bind(this, n), this.tipDelay));
                                    case 24:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        resetState: function (t) {
                            t.loading = !1, t.error = !1, t.complete = !1, t.latestNum = 0
                        }, removeItem: function (t) {
                            var e = this.list.indexOf(t); - 1 !== e && this.list.length && this.list.splice(e, 1)
                        }, bindEvent: function () {
                            var t = this;
                            c["a"].on("next", function (e) {
                                if (e.position) {
                                    var n = Object(u["P"])(e.el, e.position, !0);
                                    t.scrollToElement(n, 500, !0, !0)
                                }
                            }), setTimeout(function () {
                                var e = t.$qiyiPlayer;
                                e && e.on("fullscreenchange", function (e) {
                                    e.isFullscreen ? (t.beforeX = t.scroll.startX, t.beforeY = t.scroll.startY) : setTimeout(function () {
                                        t.scrollTo(t.beforeX, t.beforeY)
                                    }, 200)
                                })
                            }, 500)
                        }, onMiddleClick: function () {
                            var t = this;
                            this.isMiddleClick = !0, this.scroll.scrollTo(0, 0), this.loadList(!0).then(function () {
                                t.isMiddleClick = !1
                            }), this.$emit("middleClick")
                        }, initScroll: function () {
                            var t = this;
                            if (this.$refs.wrapper) {
                                var e = {
                                    probeType: this.probeType,
                                    click: this.click,
                                    scrollY: this.freeScroll || this.direction === d,
                                    scrollX: this.freeScroll || this.direction === l,
                                    scrollbar: this.scrollbar,
                                    pullDownRefresh: this.pullDownRefresh,
                                    pullUpLoad: this.pullUpLoad,
                                    startY: this.startY,
                                    freeScroll: this.freeScroll
                                };
                                this.scroll = new s["a"](this.$refs.wrapper, e), this.scroll.on("scroll", function (e) {
                                    !t.isMiddleClick && t.stopScroll && t.scroll.y > 0 && t.scroll.scrollTo(0, 0), t.aboveTop = t.scroll.y > 0, t.checkPausePlayer(), t.$emit("scroll", e)
                                }), this.scroll.on("beforeScrollStart", function () {
                                    t.stopScroll = t.scroll.y < 0, t.$emit("beforeScrollStart")
                                }), this.pullDownRefresh && this._initPullDownRefresh(), this.pullUpLoad && this._initPullUpLoad()
                            }
                        }, disable: function () {
                            this.scroll && this.scroll.disable()
                        }, enable: function () {
                            this.scroll && this.scroll.enable()
                        }, refresh: function () {
                            this.scroll && this.scroll.refresh()
                        }, scrollTo: function () {
                            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
                        }, scrollToElement: function () {
                            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
                        }, destroy: function () {
                            this.scroll.destroy()
                        }, forceUpdate: function () {
                            this.pullDownRefresh && this.up.loading ? (this.up.loading = !1, this.scroll.finishPullDown(), this.refresh()) : this.pullUpLoad && this.down.loading ? (this.down.loading = !1, this.scroll.finishPullUp(), this.refresh()) : this.refresh()
                        }, _initPullDownRefresh: function () {
                            var t = this;
                            this.scroll.on("pullingDown", function () {
                                t.loadList(!0), t.$emit("pullingDown")
                            })
                        }, _initPullUpLoad: function () {
                            var t = this;
                            this.scroll.on("pullingUp", function () {
                                t.loadList(), t.$emit("pullingUp")
                            })
                        }, resetPlayerOffset: function (t) {
                            var e = this.$qiyiPlayer.$el;
                            if (e && t) {
                                var n = +e.style.top.replace("px", "");
                                e.style.top = "".concat(n + t, "px")
                            }
                        }, checkPausePlayer: function () {
                            var t = this.$qiyiPlayer;
                            if (this.screenOutStop && t) {
                                var e = t.$el;
                                !e || t.video.isFullscreen() || Object(u["Y"])(e) || (t.pause(), t.hide())
                            }
                        }
                    }
                },
                h = p,
                f = n("2877"),
                m = Object(f["a"])(h, i, r, !1, null, null, null);
            e["a"] = m.exports
        }, f933: function (t, e, n) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t._l(t.videos, function (e, i) {
                        return n("div", {
                            directives: [{
                                name: "show-pingback",
                                rawName: "v-show-pingback",
                                value: {
                                    block: t.block
                                },
                                expression: "{block}"
                            }],
                            key: e.qipuId + "_" + i,
                            staticClass: "m-box"
                        }, [t._t("feedinfo", [n("div", {
                            staticClass: "m-box-items m-box-items-full"
                        }, [n("PlayerPlaceholder", t._b({
                            attrs: {
                                video: e,
                                callback: t.load
                            }
                        }, "PlayerPlaceholder", t.$attrs, !1)), t._t("infobar", null, {
                            video: e
                        })], 2)], {
                            video: e
                        })], 2)
                    }), t._t("player"), n("LoadBottom", t._b({
                        attrs: {
                            load: t.initVideos.length < 3,
                            callback: t.load.bind(this)
                        },
                        scopedSlots: t._u([{
                            key: "loading",
                            fn: function () {
                                return [t._t("loading")]
                            }, proxy: !0
                        }], null, !0)
                    }, "LoadBottom", t.$attrs, !1))], 2)
                },
                r = [],
                a = (n("96cf"), n("3b8d")),
                s = n("9ba8"),
                o = n("da1f"),
                c = n("dfb9"),
                u = {
                    name: "FeedBottom",
                    components: {
                        PlayerPlaceholder: s["a"],
                        LoadBottom: o["a"]
                    },
                    mixins: [c["a"]],
                    props: {
                        initVideos: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        callback: {
                            type: Function,
                            default: null
                        },
                        block: {
                            type: String,
                            default: ""
                        },
                        feature: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        }
                    },
                    data: function () {
                        return {
                            videos: []
                        }
                    }, created: function () {
                        this.videos = this.initVideos.concat(this.videos)
                    }, mounted: function () {
                        this.$nextTick(function () {
                            this.videos.length && this.getFeatures(this.videos)
                        })
                    }, methods: {
                        load: function () {
                            var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.callback) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.next = 4, this.callback();
                                    case 4:
                                        if (e = t.sent, e) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 7:
                                        if (e.length) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return", {
                                            complete: !0
                                        });
                                    case 9:
                                        return this.videos = this.videos.concat(e), this.getFeatures(e), t.abrupt("return", e);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                l = u,
                d = n("2877"),
                p = Object(d["a"])(l, i, r, !1, null, null, null);
            e["a"] = p.exports
        }, fdc4: function (t, e, n) {
            "use strict";
            n.d(e, "e", function () {
                return i
            }), n.d(e, "b", function () {
                return s
            }), n.d(e, "d", function () {
                return o
            }), n.d(e, "h", function () {
                return c
            }), n.d(e, "c", function () {
                return u
            }), n.d(e, "g", function () {
                return l
            }), n.d(e, "a", function () {
                return d
            }), n.d(e, "f", function () {
                return p
            }), n.d(e, "m", function () {
                return m
            }), n.d(e, "k", function () {
                return v
            }), n.d(e, "l", function () {
                return y
            }), n.d(e, "i", function () {
                return g
            }), n.d(e, "j", function () {
                return b
            });
            var i = ["qq.com", "163.com", "126.com", "sina.com", "hotmail.com", "gmail.com", "sohu.com", "139.com", "189.com", "21cn.com"],
                r = /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                a = /(^\d{15}$)|(^\d{17}(\d|X)$)/,
                s = /(\d{6})(\d{8})(\w{1,4})\w*/,
                o = /(\w{18})\w*/,
                c = /^(\w{6})\w*/,
                u = 18,
                l = 6,
                d = "请输入正确的手机号或邮箱",
                p = "请输入正确的手机号",
                h = 86,
                f = 886;

            function m(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 86;
                return e === h ? /^1\d{10}$/g.test(t) : e === f ? /^\d{10}$/g.test(t) : /^\d{1,20}$/.test(t)
            }

            function v(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 86;
                return e === h ? t.length >= 11 : e === f ? t.length >= 10 : t.length <= 20
            }

            function y(t) {
                return r.test(t)
            }

            function g(t) {
                return a.test(t)
            }

            function b(t) {
                return t.length >= 15
            }
        }, fe3a: function (t, e, n) {
            "use strict";
            n("ac6a"), n("f3e2");
            var i = n("bd86"),
                r = (n("7f7f"), n("a745")),
                a = n.n(r),
                s = n("a4bb"),
                o = n.n(s),
                c = (n("6d67"), n("e2a0")),
                u = n.n(c),
                l = n("1a8c"),
                d = n.n(l),
                p = n("9520"),
                h = n.n(p),
                f = (n("a481"), /<|>|&|\//g);

            function m(t) {
                return t ? t.replace(f, function (t) {
                    return encodeURI(t)
                }) : ""
            }

            function v(t) {
                var e = t.$options.head;
                if (e) {
                    var n = h()(e) ? e.call(t) : e;
                    if (n) return y(n)
                }
            }

            function y() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o()(t).map(function (e) {
                    var n, i = t[e];
                    return u()(i) ? n = [{
                        textContent: i
                    }] : a()(i) ? n = i : d()(i) && (n = [i]), n.map(function (t) {
                        return g(e, t)
                    }).join("")
                }).join(" ")
            }

            function g(t, e) {
                var n = m(o()(e).map(function (t) {
                        var n = e[t];
                        if ("textContent" !== t && !d()(n)) return "".concat(t, '="').concat(n, '"')
                    }).join(" ")),
                    r = m(o()(e).map(function (t) {
                        var n = e[t];
                        return "textContent" === t ? n : d()(n) ? y(Object(i["a"])({}, t, n)) : void 0
                    }).join(" "));
                return "<".concat(t, " ").concat(n, ">").concat(r, "</").concat(t, ">")
            }

            function b(t) {
                var e = t.$options.title;
                return e ? h()(e) ? e.call(t) : e : "爱奇艺"
            }
            var w = {
                    serverPrefetch: function () {
                        this.$ssrContext.head = v(this), this.$ssrContext.title = b(this)
                    }, beforeMount: function () {
                        document.title = b(this)
                    }, beforeRouteUpdate: function (t, e, n) {
                        n(), document.title = b(this)
                    }
                },
                k = (n("96cf"), n("3b8d")),
                _ = n("a78e"),
                x = n.n(_),
                S = n("f499"),
                C = n.n(S),
                O = n("936f"),
                j = n("5321"),
                T = "//wlink.qy.net",
                I = [59468, 53498, 54128, 51595],
                P = "getQiyiId",
                L = "getCookie",
                R = "app_server_fail_num",
                E = "app_server_retry_time",
                A = {
                    0: 0,
                    1: 6e5,
                    2: 72e5,
                    3: 18e6,
                    4: 36e6,
                    5: 864e5
                };

            function q(t) {
                var e = {
                    ua: t.ua || "iqiyi_h5",
                    params: t.params,
                    action: t.action
                };
                e = U(C()(e));
                var n = I.length;
                return N(e, n)
            }

            function N(t, e) {
                return $.apply(this, arguments)
            }

            function $() {
                return $ = Object(k["a"])(regeneratorRuntime.mark(function t(e, n) {
                    var i, r;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, n--, t.next = 4, V(e);
                        case 4:
                            return i = t.sent, r = i ? i.data : "", Object(j["h"])({
                                block: "devid_success"
                            }), t.abrupt("return", M(r));
                        case 10:
                            if (t.prev = 10, t.t0 = t["catch"](0), !(n > 0)) {
                                t.next = 16;
                                break
                            }
                            return t.abrupt("return", N(e, n));
                        case 16:
                            Object(j["h"])({
                                block: "devid_failure"
                            }), H(), console.log("所有端口均返回失败，通信失败");
                        case 19:
                        case "end":
                            return t.stop()
                        }
                    }, t, null, [
                        [0, 10]
                    ])
                })), $.apply(this, arguments)
            }

            function V(t) {
                return B.apply(this, arguments)
            }

            function B() {
                return B = Object(k["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return V.index = void 0 === V.index ? 0 : (V.index + 1) % I.length, n = I[V.index], t.next = 4, O["a"].post("".concat(T, ":").concat(n), e, {
                                timeout: 1e3,
                                headers: {
                                    Accept: "text/plain"
                                }
                            });
                        case 4:
                            return i = t.sent, t.abrupt("return", i);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), B.apply(this, arguments)
            }

            function U(t) {
                for (var e = "", n = 0; n < t.length; n++) {
                    var i = t.charCodeAt(n) - 1;
                    e += String.fromCharCode(i)
                }
                return window.btoa(e)
            }

            function M(t) {
                for (var e = "", n = window.atob(t), i = 0; i < n.length; i++) {
                    var r = n.charCodeAt(i) + 1;
                    e += String.fromCharCode(r)
                }
                return JSON.parse(e)
            }

            function H() {
                var t = x.a.get(R);
                t = isNaN(t) || "undefined" === t || t > 5 ? 1 : ++t, x.a.set(R, t, {
                    expires: 365,
                    path: "/",
                    domain: "iqiyi.com"
                });
                var e = A[t];
                x.a.set(E, 1, {
                    expires: new Date((new Date).getTime() + e) || 0,
                    path: "/",
                    domain: "iqiyi.com"
                })
            }
            var D = n("53a7"),
                F = n("8296"),
                z = n("b2e7"),
                W = n("2c06");

            function Q() {
                F["p"].iqiyi ? X() : Z() && G()
            }

            function X() {
                return Y.apply(this, arguments)
            }

            function Y() {
                return Y = Object(k["a"])(regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(D["d"])();
                        case 3:
                            e = t.sent, e && K({
                                cookie: Object(z["w"])(),
                                qyid: e
                            }), t.next = 10;
                            break;
                        case 7:
                            t.prev = 7, t.t0 = t["catch"](0), K({
                                cookie: Object(z["w"])()
                            });
                        case 10:
                        case "end":
                            return t.stop()
                        }
                    }, t, null, [
                        [0, 7]
                    ])
                })), Y.apply(this, arguments)
            }

            function G() {
                return J.apply(this, arguments)
            }

            function J() {
                return J = Object(k["a"])(regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = {
                                params: {
                                    cookie: Object(z["w"])()
                                },
                                action: [P, L]
                            }, t.next = 3, q(e);
                        case 3:
                            n = t.sent, K(n);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), J.apply(this, arguments)
            }

            function K(t) {
                t && t.cookie && Object(z["S"])(t.cookie), t && t.qyid && F["L"].setItem(W["a"], t.qyid)
            }

            function Z() {
                var t = x.a.get(R) || 0,
                    e = x.a.get(E);
                return !t || t > 5 || !e || "undefined" === e || "undefined" === t
            }
            var tt = {
                    mounted: function () {
                        this.$nextTick(function () {
                            F["N"].android && !Object(W["y"])() && Q()
                        })
                    }
                },
                et = n("795b"),
                nt = n.n(et),
                it = (n("5df3"), n("db0c")),
                rt = n.n(it),
                at = (n("0cd8"), n("7514"), "//static.iqiyi.com/css/20190722/h5-search.css"),
                st = "//static.iqiyi.com/css/2019112717/h5-passport-aura3.0.css",
                ot = "//static.iqiyi.com/css/2019112717/h5-passport-aura.css",
                ct = "//security.iqiyi.com/static/verifycenter/css/verifycenter.css",
                ut = "//static.iqiyi.com/css/20200228/h5-aura.css",
                lt = "//static.iqiyi.com/css/20200310/h5-play-aura.css",
                dt = "//static.iqiyi.com/css/20200228/h5-channel-aura.css",
                pt = "//static.iqiyi.com/css/2019050917/h5-mine-aura.css",
                ht = "//static.iqiyi.com/css/2019071218/h5-comment-aura2.css",
                ft = "//static.iqiyi.com/css/2019012809/h5-album-aura.css",
                mt = "//static.iqiyi.com/css/2019012809/h5-movieLib-aura.css",
                vt = "//static.iqiyi.com/css/20190424/h5-reportFaq-aura.css",
                yt = "//static.iqiyi.com/css/2019111117/h5-verticaVideo-aura.css",
                gt = "//static.iqiyi.com/css/2019012809/h5-newExpress-aura.css",
                bt = "//static.iqiyi.com/css/2019072215/h5-outsitePlay-aura.css",
                wt = "//static.iqiyi.com/css/2019102317/h5-encyclopedia-aura.css",
                kt = "//static.iqiyi.com/css/2020022817/infringement.css",
                _t = "//static.iqiyi.com/css/20191220/h5-bodanList-aura.css",
                xt = "//static.iqiyi.com/css/2019012809/404.css",
                St = "//static.iqiyi.com/css/20190923/h5-pc.css",
                Ct = {
                    styles: [{
                        key: "base",
                        url: ut
                    }, {
                        key: "play",
                        url: lt
                    }, {
                        key: "user",
                        url: pt
                    }, {
                        key: "feedback",
                        url: vt
                    }, {
                        key: "verticalVideo",
                        url: yt
                    }, {
                        key: "search",
                        url: at
                    }, {
                        key: "album",
                        url: ft
                    }, {
                        key: "shareAlbum",
                        url: mt
                    }, {
                        key: "channel",
                        url: dt
                    }, {
                        key: "404",
                        url: xt
                    }, {
                        key: "security",
                        url: ot
                    }, {
                        key: "securityNew",
                        url: st
                    }, {
                        key: "securityVerifySmscode",
                        url: ct
                    }, {
                        key: "timeline",
                        url: gt
                    }, {
                        key: "comment",
                        url: ht
                    }, {
                        key: "shareplay",
                        url: bt
                    }, {
                        key: "baike",
                        url: wt
                    }, {
                        key: "copyright",
                        url: kt
                    }, {
                        key: "login",
                        url: St
                    }, {
                        key: "playlist",
                        url: _t
                    }]
                },
                Ot = Ct.styles || [];

            function jt(t) {
                if (/\.css$/.test(t)) return t;
                var e = Ot.find(function (e) {
                    return e.key === t
                });
                return e ? e.url : ""
            }

            function Tt(t) {
                return t = h()(t) ? t.call(this) : t, t = a()(t) ? t : [t], t
            }
            var It = {
                    serverPrefetch: function () {
                        this.setStyle(Tt.call(this, this.$options.style))
                    }, methods: {
                        setStyle: function (t) {
                            t && (t = Tt(t), t.map(function (t) {
                                return Object(F["K"])(jt(t), {
                                    type: "css"
                                })
                            }))
                        }
                    }, beforeRouteEnter: function (t, e, n) {
                        var i, r = t.matched[t.matched.length - 1];
                        if (r.components ? i = rt()(r.components).reduce(function (t, e) {
                            return t || e.style
                        }, "") : r.component && (i = r.component.style), i)
                            if (h()(i)) n();
                            else {
                                i = Tt(i);
                                var a = i.map(function (t) {
                                    return Object(F["K"])(jt(t), {
                                        type: "css"
                                    })
                                });
                                nt.a.all(a).finally(function () {
                                    n()
                                })
                            } else n()
                    }
                },
                Pt = n("5176"),
                Lt = n.n(Pt);
            n("57e7");

            function Rt(t) {
                return Et.apply(this, arguments)
            }

            function Et() {
                return Et = Object(k["a"])(regeneratorRuntime.mark(function t(e) {
                    var n, i;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(F["m"])(e);
                        case 3:
                            return n = t.sent, i = JSON.parse(n), i = Lt()(i, {
                                reltyp: "1"
                            }), t.next = 8, Object(F["n"])(C()(i));
                        case 8:
                            e = t.sent, Object(z["T"])(e), t.next = 14;
                            break;
                        case 12:
                            t.prev = 12, t.t0 = t["catch"](0);
                        case 14:
                        case "end":
                            return t.stop()
                        }
                    }, t, null, [
                        [0, 12]
                    ])
                })), Et.apply(this, arguments)
            }

            function At(t) {
                return qt.apply(this, arguments)
            }

            function qt() {
                return qt = Object(k["a"])(regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                        case 0:
                            Object(z["T"])(e);
                        case 1:
                        case "end":
                            return t.stop()
                        }
                    }, t)
                })), qt.apply(this, arguments)
            }
            var Nt = {
                    mounted: function () {
                        var t = F["k"].getQuery(location.href);
                        t._frd && (-1 !== ["wechat_circle", "qq_zone"].indexOf(t.social_platform) ? Rt(t._frd) : At(t._frd))
                    }
                },
                $t = n("cebc"),
                Vt = n("a8db"),
                Bt = {
                    data: function () {
                        return {
                            callappCode: "",
                            codeTypeMap: {
                                home: "toHome",
                                player: "toPlay",
                                channel: "toHome"
                            }
                        }
                    }, mounted: function () {
                        var t = this;
                        this.$nextTick(Object(k["a"])(regeneratorRuntime.mark(function e() {
                            var n, i, r, a, s, o, c;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.callappCode, i = t.name, n && i && t.$GlobalSwitcher) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return e.next = 6, t.$GlobalSwitcher.getFilters(n, i);
                                case 6:
                                    if (r = e.sent, r) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 9:
                                    return a = t.$GlobalSwitcher.getParams(n, i), e.next = 12, t.getCallappOptions();
                                case 12:
                                    s = e.sent, o = s.extralOptions, c = Object(Vt["a"])(s, ["extralOptions"]), t.silentCallApp(Object($t["a"])({
                                        extralOptions: o,
                                        subtype: a ? a.subtype : "",
                                        type: t.codeTypeMap[n]
                                    }, c));
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                            }, e)
                        })))
                    }, methods: {
                        silentCallApp: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.extralOptions,
                                n = t.type,
                                i = Object(Vt["a"])(t, ["extralOptions", "type"]);
                            this.$dispatch("GlobalCallapp", n, Object($t["a"])({
                                extralOptions: Object($t["a"])({
                                    forceFrame: !0,
                                    forceSchema: !0
                                }, e),
                                isDownApp: !1,
                                showCopyCode: !1
                            }, i))
                        }, getCallappOptions: function () {
                            return {}
                        }
                    }
                };
            e["a"] = {
                mixins: [w, tt, It, Nt, Bt],
                beforeMount: function () {
                    Object(W["J"])()
                }
            }
        }
    }
]);