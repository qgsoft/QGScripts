/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(44)
    }, 44: function (a, b, c) {
        function d(a) {
            return h = Txplayer.$, this.dataset = {}, this.context = a, h.Deferred || c(47), h.Callbacks || c(48), h.jsonp || c(49), this.init()
        }
        var e = c(45),
            f = c(46),
            g = Txplayer.util,
            h = Txplayer.$;
        d.prototype = {
            init: function () {
                return this.dataset.defer = Txplayer.$.Deferred(), this.context.config.containerId ? (this.setGetScript(), this.dataset.$container = Txplayer.$("#" + this.context.config.containerId), this.dataset.$container && this.dataset.$container.length ? (this.loadHTML5PlayerSkin(), this.write(), this.exportsModuleApis(), this.addEventListener(), this.dataset.defer) : (g.showError("H5HtmlFrame\u521d\u59cb\u5316\u9519\u8bef", "\u6ca1\u627e\u5230id=" + this.context.config.containerId + "\u7684dom\u8282\u70b9"), this.dataset.defer.reject(), this.dataset.defer)) : (g.showError("H5HtmlFrame\u521d\u59cb\u5316\u9519\u8bef", "containerId\u6ca1\u627e\u5230"), this.dataset.defer.reject(), this.dataset.defer)
            }, getModStyle: function () {
                function a(a) {
                    return a = a || "100%", "number" == typeof a ? parseInt(a) + "px" : "string" == typeof a ? a.indexOf("%") > -1 ? a : parseInt(a) + "px" : a
                }
                var b = [];
                return b.push("width:" + a(this.context.config.width)), b.push("height:" + a(this.context.config.height)), b.join(";")
            }, loadHTML5PlayerSkin: function () {
                var a, b = this;
                return (a = Txplayer.dataset.H5PlayerStyleUrl[this.context.config.bannerNewsUI ? "news" : this.context.config.playerType]) ? void g.loadCss(a).done(function () {
                    b.dataset.defer.resolve()
                }).fail(function () {
                    g.showError("\u627e\u4e0d\u5230\u64ad\u653e\u5668\u7684\u76ae\u80a4\u6837\u5f0f\u6587\u4ef6", Txplayer.dataset.H5PlayerStyleUrl)
                }) : void b.dataset.defer.resolve()
            }, write: function () {
                0 === Txplayer.$(".txp_svg_sprite").length && Txplayer.$("head").append(Txplayer.$.tmpl(f, {}));
                var a, b = {
                        playerid: "txplayer_" + this.context.config.playerId,
                        mod_stype: this.getModStyle()
                    },
                    c = ["H5HtmlFrame.write Error:"],
                    d = this,
                    g = function () {
                        c = c.join("\n"), d.context.msg.broadcast(Txplayer.apiList.privateApi.reportError, {
                            msg: c,
                            code: Txplayer.define.reportCode.JS_ERROR,
                            stack: a
                        })
                    };
                try {
                    var h = Txplayer.$.tmpl(e, b);
                    this.dataset.$container.html(h), this.dataset.$playermod = this.dataset.$container.find("#" + b.playerid), this.context.dataset.$playermod = this.dataset.$playermod, Txplayer.dataset.maxId++
                } catch (i) {
                    c.push(i.message), a = i.stack
                }
                return c.length > 1 ? void g() : void this.context.msg.on("ready", function () {
                    d.context.dataset.playerWidth = d.dataset.$playermod.width(), d.context.dataset.playerHeight = d.dataset.$playermod.height(), d.dataset.videoSize = {
                        width: d.dataset.$playermod.width(),
                        height: d.dataset.$playermod.height()
                    }
                })
            }, resize: function (a) {
                var b = this;
                "object" !== Txplayer.$.type(a) || Txplayer.$.isEmptyObject(a) || !a.hasOwnProperty("width") && !a.hasOwnProperty("height") || (this.dataset.$playermod.css(a), setTimeout(function () {
                    b.context.dataset.playerWidth = b.dataset.$container.width(), b.context.dataset.playerHeight = b.dataset.$container.height(), b.context.msg.broadcast("resize", {
                        height: b.context.dataset.playerHeight,
                        width: b.context.dataset.playerWidth
                    })
                }, 200))
            }, autoResize: function (a) {
                a = a || "width";
                var b = this.dataset.videoSize || {
                    width: 16,
                    height: 9
                };
                if (!(b && b.width && b.height)) return !1;
                if ("width" === a) {
                    var c = this.dataset.$playermod.width();
                    this.resize({
                        height: parseInt(c * (b.height / b.width)) || b.height
                    })
                } else {
                    var d = this.dataset.$playermod.height();
                    this.resize({
                        width: b.width || parseInt(d * (b.width / b.height))
                    })
                }
            }, destroy: function (a) {
                var b = this;
                if ("all" === a)
                    for (var c in Txplayer.dataset._instance) Txplayer.dataset._instance[c] && "function" === Txplayer.$.type(Txplayer.dataset._instance[c].destroy) && Txplayer.dataset._instance[c].destroy();
                else if ("H5HtmlFrame" === a) Txplayer.$.each(this.dataset.moduleApis, function (a, c) {
                    b.context.msg.off(a, c)
                }), Txplayer.$.each(this, function (a, b) {
                    b = null
                });
                else if ("string" === Txplayer.$.type(a)) b.context.msg.broadcast("destroyPlugin", a);
                else {
                    b.dataset.$container.html("");
                    var d = b.context.dataset.playerId;
                    b.context.msg.broadcast("destroyPlugin"), Txplayer.dataset._instance[d] && (Txplayer.dataset._instance[d] = null, delete Txplayer.dataset._instance[d])
                }
            }, getPlayerSize: function () {
                return {
                    width: this.context.dataset.playerWidth,
                    height: this.context.dataset.playerHeight
                }
            }, addEventListener: function () {
                var a = this;
                try {
                    h(window).on("orientationchange", function (b) {
                        0 === window.orientation ? setTimeout(function () {
                            a.autoResize()
                        }, 200) : setTimeout(function () {
                            a.resize({
                                height: h(window).height()
                            })
                        }, 200)
                    })
                } catch (b) {
                    g.log("\u4e0d\u652f\u6301\u65cb\u5c4f\u76d1\u542c")
                }
                this.dataset.$playermod.on(Txplayer.dataset.clickEventName, function (b) {
                    var c = b.target,
                        d = Txplayer.$(c),
                        e = d.attr("data-report");
                    e || (e = d.parent().attr("data-report")), e || (e = d.parent().parent().attr("data-report")), e && a.context.msg.broadcast("reportUsrAction", {
                        usr_action: e
                    })
                })
            }, exportsModuleApis: function () {
                var a = this;
                this.dataset.moduleApis = {}, this.dataset.moduleApis.resize = this.resize.bind(this), this.dataset.moduleApis.destroy = this.destroy.bind(this), this.dataset.moduleApis.getPlayerSize = this.getPlayerSize.bind(this), this.dataset.moduleApis.autoResize = this.autoResize.bind(this), Txplayer.$.extend(this.context.userApi, this.dataset.moduleApis), this.dataset.privatesApi = {}, Txplayer.$.extend(this.context.privateApi, this.dataset.privatesApi), this.dataset.dataApis = {}, Txplayer.$.each(this.dataset.dataApis, function (b, c) {
                    a.context.msg.setData(b, c)
                })
            }, setGetScript: function () {
                "undefined" == typeof Txplayer.$.getScript && (Txplayer.$.getScript = function (a, b) {
                    var c = document.createElement("script");
                    c.async = "async", c.src = a, b && (c.onload = b), document.getElementsByTagName("head")[0].appendChild(c)
                })
            }
        }, Txplayer.register("H5HtmlFrame", d)
    }, 45: function (a, b) {
        a.exports = '<txpdiv class="txp_player" id="<%=playerid%>" style="<%=mod_stype%>">\n<txpdiv class="txp_gradient_top"></txpdiv>\n<txpdiv class="txp_gradient_bottom"></txpdiv>\n</txpdiv>'
    }, 46: function (a, b) {
        a.exports = '<svg class="txp_svg_sprite" display="none" version="1.1" xmlns="http://www.w3.org/2000/svg">\n\t<symbol id="txp_svg_play_lg" viewBox="0 0 100 100">\n\t\t<circle cx="50" cy="50" r="50" style="fill:#222;fill-opacity:0.75"></circle>\n\t\t<path transform="translate(36, 33)" d="M0.6,2C0.6,2,0,3.5,0,16.9C0,30.3,0.6,32,0.6,32c0,1.5,1.6,2.5,2.9,1.8c0,0,3-0.5,15.2-6.6c12.2-6.1,14.2-8.4,14.2-8.4c1.5-0.7,1.5-2.8,0-3.6c0,0-3.3-3.1-14.2-8.6C7.9,1.1,3.5,0.2,3.5,0.2C2.1-0.5,0.6,0.5,0.6,2z" style="\n\t\tfill:#fff;" />\n\t</symbol>\n\t<symbol id="txp_svg_play" viewBox="0 0 56 56">\n\t\t<path d="M14.569 13.867s-.563 1.42-.563 14.059.563 14.188.563 14.188a1.925 1.925 0 0 0 2.8 1.677s2.938-.442 14.763-6.211 13.8-7.914 13.8-7.914a1.859 1.859 0 0 0 0-3.352s-3.24-2.875-13.8-8.095c-10.444-5.165-14.767-6.029-14.767-6.029a1.924 1.924 0 0 0-2.796 1.677z" style="fill:#fff" />\n\t</symbol>\n\t<symbol id="txp_svg_fullscreen" viewBox="0 0 48 48">\n\t\t<path d="M9.5 37h10a1.5 1.5 0 0 1 0 3h-10a1.5 1.5 0 0 1 0-3zm0-10a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-3 0v-10A1.5 1.5 0 0 1 9.5 27zM8.43 37.353L19.353 26.43a1.545 1.545 0 1 1 2.185 2.184L10.614 39.538a1.545 1.545 0 1 1-2.184-2.185zM28.5 8h10a1.5 1.5 0 0 1 0 3h-10a1.5 1.5 0 0 1 0-3zm10 0A1.5 1.5 0 0 1 40 9.5v10a1.5 1.5 0 0 1-3 0v-10A1.5 1.5 0 0 1 38.5 8zM26.43 19.354L37.353 8.43a1.545 1.545 0 0 1 2.185 2.184L28.614 21.538a1.545 1.545 0 0 1-2.184-2.184z"/>\n\t</symbol>\n\t<symbol id="txp_svg_fullscreen_true" viewBox="0 0 48 48">\n\t\t<path d="M39.538 10.615L31.153 19H37.5a1.5 1.5 0 0 1 0 3h-10a1.5 1.5 0 0 1-1.386-.937 1.52 1.52 0 0 1-.114-.735V10.5a1.5 1.5 0 0 1 3 0v6.283l8.353-8.353a1.545 1.545 0 1 1 2.185 2.185zM20.5 39a1.5 1.5 0 0 1-1.5-1.5v-6.347l-8.386 8.385a1.545 1.545 0 1 1-2.184-2.184L16.783 29H10.5a1.5 1.5 0 0 1 0-3h9.828a1.518 1.518 0 0 1 .733.113A1.5 1.5 0 0 1 22 27.5v10a1.5 1.5 0 0 1-1.5 1.5z"/>\n\t</symbol>\n\t<symbol id="txp_svg_pause" viewBox="0 0 56 56">\n\t\t<path d="M39 49a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4 4 4 0 0 1 4 4v34a4 4 0 0 1-4 4zm-22 0a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4 4 4 0 0 1 4 4v34a4 4 0 0 1-4 4z"/>\n\t</symbol>\n\t<symbol id="txp_svg_replay" viewBox="0 0 32 32">\n\t\t<path d="M18 30a13.956 13.956 0 0 1-9.9-4.1l2.121-2.121A11 11 0 1 0 7 16h4.006L5.5 22 0 16h4a14 14 0 1 1 14 14z"/>\n\t</symbol>\n\t<symbol id="txp_svg_download" viewBox="0 0 32 32">\n\t\t<path d="M25 31H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h1v3a4 4 0 0 0-4 4v15a4 4 0 0 0 4 4h15a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4V2h1a6 6 0 0 1 6 6v17a6 6 0 0 1-6 6zm-7.32-7.616A1.473 1.473 0 0 1 16.5 24a1.307 1.307 0 0 1-.227-.052 1.389 1.389 0 0 1-.352-.081 1.445 1.445 0 0 1-.239-.16 1.356 1.356 0 0 1-.209-.139c-.013-.013-.016-.03-.028-.043s-.045-.025-.061-.047L9.4 17.458a1.445 1.445 0 0 1 0-2.036 1.424 1.424 0 0 1 2.024 0L15 19.019V1.5a1.5 1.5 0 1 1 3 0v17.489l3.546-3.567a1.424 1.424 0 0 1 2.024 0 1.445 1.445 0 0 1 0 2.036z"/>\n\t</symbol>\n\t<symbol id="txp_svg_vip" viewBox="0 0 32 32">\n\t\t<path d="M30.988 11.688l-4.482 3.949A13.979 13.979 0 0 0 27 12c0-0.312-0.027-0.616-0.047-0.923Zm-7.321 9.367L25.263 29l-7.349-3.9A14.012 14.012 0 0 0 23.667 21.055ZM13 24a11.955 11.955 0 0 1-8.857-3.924 11.987 11.987 0 0 0 16.7-17.142A11.991 11.991 0 0 1 13 24Zm8.99-13A9.972 9.972 0 0 1 8.473 20.358l0.358-1.78L2.154 12.694a10.051 10.051 0 0 1-0.127-1.16l9.411-1.425L15.995 1 16.01 1.009l4.553 9.1 1.394 0.211C21.971 10.547 21.99 10.773 21.99 11ZM12.437 25.972L6.737 29 7.56 24.9A13.946 13.946 0 0 0 12.437 25.972Z"></path>\n\t</symbol>\n</svg>'
    }, 47: function (a, b) {
        ! function (a) {
            function b(c) {
                var d = [
                        ["resolve", "done", a.Callbacks({
                            once: 1,
                            memory: 1
                        }), "resolved"],
                        ["reject", "fail", a.Callbacks({
                            once: 1,
                            memory: 1
                        }), "rejected"],
                        ["notify", "progress", a.Callbacks({
                            memory: 1
                        })]
                    ],
                    e = "pending",
                    f = {
                        state: function () {
                            return e
                        }, always: function () {
                            return g.done(arguments).fail(arguments), this
                        }, then: function () {
                            var c = arguments;
                            return b(function (b) {
                                a.each(d, function (d, e) {
                                    var h = a.isFunction(c[d]) && c[d];
                                    g[e[1]](function () {
                                        var c = h && h.apply(this, arguments);
                                        if (c && a.isFunction(c.promise)) c.promise().done(b.resolve).fail(b.reject).progress(b.notify);
                                        else {
                                            var d = this === f ? b.promise() : this,
                                                g = h ? [c] : arguments;
                                            b[e[0] + "With"](d, g)
                                        }
                                    })
                                }), c = null
                            }).promise()
                        }, promise: function (b) {
                            return null != b ? a.extend(b, f) : f
                        }
                    },
                    g = {};
                return a.each(d, function (a, b) {
                    var c = b[2],
                        h = b[3];
                    f[b[1]] = c.add, h && c.add(function () {
                        e = h
                    }, d[1 ^ a][2].disable, d[2][2].lock), g[b[0]] = function () {
                        return g[b[0] + "With"](this === g ? f : this, arguments), this
                    }, g[b[0] + "With"] = c.fireWith
                }), f.promise(g), c && c.call(g, g), g
            }
            if ("function" != typeof a.Deferred) {
                var c = Array.prototype.slice;
                a.when = function (d) {
                    var e, f, g, h = c.call(arguments),
                        i = h.length,
                        j = 0,
                        k = 1 !== i || d && a.isFunction(d.promise) ? i : 0,
                        l = 1 === k ? d : b(),
                        m = function (a, b, d) {
                            return function (f) {
                                b[a] = this, d[a] = arguments.length > 1 ? c.call(arguments) : f, d === e ? l.notifyWith(b, d) : --k || l.resolveWith(b, d)
                            }
                        };
                    if (i > 1)
                        for (e = new Array(i), f = new Array(i), g = new Array(i); j < i; ++j) h[j] && a.isFunction(h[j].promise) ? h[j].promise().done(m(j, g, h)).fail(l.reject).progress(m(j, f, e)) : --k;
                    return k || l.resolveWith(g, h), l.promise()
                }, a.Deferred = b
            }
        }(Zepto)
    }, 48: function (a, b) {
        ! function (a) {
            "function" != typeof a.Callbacks && (a.Callbacks = function (b) {
                b = a.extend({}, b);
                var c, d, e, f, g, h, i = [],
                    j = !b.once && [],
                    k = function (a) {
                        for (c = b.memory && a, d = !0, h = f || 0, f = 0, g = i.length, e = !0; i && h < g; ++h)
                            if (i[h].apply(a[0], a[1]) === !1 && b.stopOnFalse) {
                                c = !1;
                                break
                            }
                        e = !1, i && (j ? j.length && k(j.shift()) : c ? i.length = 0 : l.disable())
                    },
                    l = {
                        add: function () {
                            if (i) {
                                var d = i.length,
                                    h = function (c) {
                                        a.each(c, function (a, c) {
                                            "function" == typeof c ? b.unique && l.has(c) || i.push(c) : c && c.length && "string" != typeof c && h(c)
                                        })
                                    };
                                h(arguments), e ? g = i.length : c && (f = d, k(c))
                            }
                            return this
                        }, remove: function () {
                            return i && a.each(arguments, function (b, c) {
                                for (var d;
                                    (d = a.inArray(c, i, d)) > -1;) i.splice(d, 1), e && (d <= g && --g, d <= h && --h)
                            }), this
                        }, has: function (b) {
                            return !(!i || !(b ? a.inArray(b, i) > -1 : i.length))
                        }, empty: function () {
                            return g = i.length = 0, this
                        }, disable: function () {
                            return i = j = c = void 0, this
                        }, disabled: function () {
                            return !i
                        }, lock: function () {
                            return j = void 0, c || l.disable(), this
                        }, locked: function () {
                            return !j
                        }, fireWith: function (a, b) {
                            return !i || d && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], e ? j.push(b) : k(b)), this
                        }, fire: function () {
                            return l.fireWith(this, arguments)
                        }, fired: function () {
                            return !!d
                        }
                    };
                return l
            })
        }(Zepto)
    }, 49: function (a, b) {
        ! function (a) {
            function b() {}

            function c(a) {
                g = [a]
            }

            function d(a, b, c) {
                return a && a.apply(b.context || b, c)
            }

            function e(a) {
                return /\?/.test(a) ? "&" : "?"
            }

            function f(f) {
                function n(a) {
                    X++ || (Y(), S && (A[U] = {
                        s: [a]
                    }), O && (a = O.apply(f, [a])), d(L, f, [a, v, f]), d(N, f, [f, v]))
                }

                function F(a) {
                    X++ || (Y(), S && a != w && (A[U] = a), d(M, f, [f, a]), d(N, f, [f, a]))
                }
                f = a.extend({}, C, f);
                var G, H, I, J, K, L = f.success,
                    M = f.error,
                    N = f.complete,
                    O = f.dataFilter,
                    P = f.callbackParameter,
                    Q = f.callback,
                    R = f.cache,
                    S = f.pageCache,
                    T = f.charset,
                    U = f.url,
                    V = f.data,
                    W = f.timeout,
                    X = 0,
                    Y = b;
                return y && y(function (a) {
                    a.done(L).fail(M), L = a.resolve, M = a.reject
                }).promise(f), f.abort = function () {
                    !X++ && Y()
                }, d(f.beforeSend, f, [f]) === !1 || X ? f : (U = U || j, V = V ? "string" == typeof V ? V : a.param(V, f.traditional) : j, U += V ? e(U) + V : j, P && (U += e(U) + encodeURIComponent(P) + "=?"), !R && !S && (U += e(U) + "_" + (new Date).getTime() + "="), U = U.replace(/=\?(&|$)/, "=" + Q + "$1"), S && (G = A[U]) ? G.s ? n(G.s[0]) : F(G) : (x[Q] = c, I = a(u)[0], I.id = m + B++, T && (I[i] = T), D && D.version() < 11.6 ? (J = a(u)[0]).text = "document.getElementById('" + I.id + "')." + p + "()" : I[h] = h, E && (I.htmlFor = I.id, I.event = o), I[q] = I[p] = I[r] = function (a) {
                    if (!I[s] || !/i/.test(I[s])) {
                        try {
                            I[o] && I[o]()
                        } catch (b) {}
                        a = g, g = 0, a ? n(a[0]) : F(k)
                    }
                }, I.src = U, Y = function (a) {
                    K && clearTimeout(K), I[r] = I[q] = I[p] = null, z[t](I), J && z[t](J)
                }, z[l](I, H = z.firstChild), J && z[l](J, H), K = W > 0 && setTimeout(function () {
                    F(w)
                }, W)), f)
            }
            var g, h = "async",
                i = "charset",
                j = "",
                k = "error",
                l = "insertBefore",
                m = "_jqjsp",
                n = "on",
                o = n + "click",
                p = n + k,
                q = n + "load",
                r = n + "readystatechange",
                s = "readyState",
                t = "removeChild",
                u = "<script>",
                v = "success",
                w = "timeout",
                x = window,
                y = a.Deferred,
                z = a("head")[0] || document.documentElement,
                A = {},
                B = 0,
                C = {
                    callback: m,
                    url: location.href
                },
                D = x.opera,
                E = !!a("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;
            f.setup = function (b) {
                a.extend(C, b)
            }, a.jsonp = f
        }(Txplayer.$)
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(55)
    }, 55: function (a, b) {
        function c() {
            this.cache = {}, this.wxCallbacks = []
        }
        var d = {
                set: function (a, b, c, d, e) {
                    if (e) {
                        var f = new Date,
                            g = new Date;
                        g.setTime(f.getTime() + 36e5 * e)
                    }
                    return document.cookie = a + "=" + b + "; " + (e ? "expires=" + g.toGMTString() + "; " : "") + (d ? "path=" + d + "; " : "path=/; ") + (c ? "domain=" + c + ";" : "domain=" + window.location.host + ";"), !0
                }, get: function (a) {
                    var b = new RegExp("(?:^|;+|\\s+)" + a + "=([^;]*)"),
                        c = document.cookie.match(b);
                    return c ? c[1] : ""
                }, del: function (a, b, c) {
                    var d = new Date;
                    d.setTime(d.getTime() - 1), document.cookie = a + "=; expires=" + d.toGMTString() + ";" + (c ? "path=" + c + "; " : "path=/; ") + (b ? "domain=" + b + ";" : "domain=" + window.location.host + ";")
                }
            },
            e = {
                ajax: function (a, b, c) {
                    if (!a || "function" != typeof b || "function" != typeof c) return {
                        error: "ajax params error"
                    };
                    var d;
                    if (window.jQuery && jQuery.ajax) d = jQuery.ajax;
                    else if (window.Zepto && Zepto.ajax) d = Zepto.ajax;
                    else {
                        if (!(window.Txplayer && Txplayer.$ && Txplayer.$.ajax)) return void c({
                            error: "$.ajax not found"
                        });
                        d = Txplayer.$.ajax
                    }
                    a.success = function (a) {
                        b(a)
                    }, a.error = function (a) {
                        c({
                            error: a
                        })
                    }, d(a)
                }
            },
            f = navigator.userAgent.toLowerCase(),
            g = {
                isqqlive: f.indexOf("qqlive") > -1 || f.indexOf("qqlivebrowser") > -1 || f.indexOf("qqlivehdbrowser") > -1,
                ismqq: /qq\/([\d\.]+)/i.test(f),
                isipad: f.search(/ipad/i) > -1
            };
        c.prototype = {
            isLogin: function (a) {
                a = a || function () {};
                var b = this;
                return g.isqqlive ? void this.tvGetCookie(["qq", "wx"], function (b) {
                    var c;
                    try {
                        c = JSON.parse(b)
                    } catch (d) {}
                    c && a(c.result && c.result.qq ? 1 : c.result && c.result.wx ? 2 : 0)
                }) : g.ismqq ? void b.isQQLogin(function (b) {
                    a(b ? 1 : 0, null)
                }) : void this.getWXCookie(function (c) {
                    b.isQQLogin(function (d) {
                        return d && c && "wx" !== c.main_login ? void a(1, null) : void b.isWXLogin(function (b) {
                            b && "wx" === b.main_login ? a(2, b) : a(0, null)
                        })
                    })
                })
            }, goLogin: function (a) {
                a = window.self == top ? a || window.location.href : a || top.location.href;
                var b = "http://v.qq.com/h5/login/middle.html?low_login=1";
                b = b + "&ru=" + encodeURIComponent(a), window.self == top ? window.location.href = b : top.location.href = b
            }, getUserInfo: function () {
                var a, b, c = this;
                if (arguments.length > 1 && "string" == typeof arguments[0]) {
                    var d = arguments[0];
                    a = "" === d ? 0 : d, b = arguments[1]
                } else b = arguments[0];
                "function" != typeof b && (b = function () {}), this.isLogin(function (d, e) {
                    if (0 === d) return void b({
                        error: "not login"
                    });
                    if (g.isqqlive) {
                        var f = a && [a];
                        return void c.tvGetUserInfo(f || ["qq", "wx"], function (c) {
                            var e, f;
                            try {
                                e = JSON.parse(c)
                            } catch (g) {}
                            if (!e) return void b({
                                error: "parse tv cookie fail"
                            });
                            1 === d ? f = "qq" : 2 === d && (f = "wx");
                            var h = a || f,
                                i = h && e && e.result && e.result[h];
                            b(i && i.nickname ? {
                                nick: i.nickname,
                                face: i.headImgUrl,
                                type: f
                            } : {
                                error: "get tv " + f + " user info fail"
                            })
                        })
                    }
                    1 === d ? c.requestQQInfo(function (a) {
                        b(a && a.nick ? {
                            nick: a.nick,
                            face: a.qqface,
                            type: "qq"
                        } : {
                            error: "requestQQInfo fail"
                        })
                    }) : 2 === d && b(e && e.nick ? {
                        nick: decodeURIComponent(e.nick),
                        face: e.head,
                        type: "wx"
                    } : {
                        error: "get weixin info fail"
                    })
                })
            }, checkQQLogin: function (a) {
                a = a || function () {};
                var b = d.get("lskey"),
                    c = d.get("luin"),
                    e = d.get("uin"),
                    f = d.get("skey");
                a(e && f ? 2 : b && c ? 1 : 0)
            }, isQQLogin: function (a) {
                a = a || function () {}, this.checkQQLogin(function (b) {
                    a(0 !== b)
                })
            }, isQQLowLogin: function (a) {
                a = a || function () {}, this.checkQQLogin(function (b) {
                    a(1 === b)
                })
            }, getUin: function (a) {
                a = a || function () {};
                var b;
                this.isQQLowLogin(function (c) {
                    b = c ? d.get("luin") : d.get("uin"), b ? (b = parseInt(b.replace(/^o0*/g, ""), 10), a(b)) : a(0)
                })
            }, getSkey: function (a) {
                a = a || function () {};
                var b = d.get("skey"),
                    c = d.get("lskey");
                a(b || c)
            }, time33: function (a) {
                for (var b = 0, c = a.length, d = 5381; b < c; ++b) d += (d << 5) + a.charAt(b).charCodeAt();
                return 2147483647 & d
            }, gTk: function (a) {
                a = a || function () {};
                var b = this;
                this.getWXCookie(function (c) {
                    "wx" == c.main_login ? a(b.time33(c.vusession), "wx") : b.getSkey(function (c) {
                        var d = c ? b.time33(c) : "";
                        a(d, "")
                    })
                })
            }, requestQQInfo: function (a) {
                a = a || function () {};
                var b, c = this,
                    d = function () {
                        c.checkQQLogin(function (c) {
                            return 0 === c ? void a({
                                error: "qq not login"
                            }) : (b = 1 === c ? 1 : 0, void f())
                        })
                    },
                    f = function () {
                        e.ajax({
                            url: "//video.qq.com/fcgi-bin/get_userinfo",
                            data: {
                                otype: "json",
                                type: 2,
                                _: +new Date,
                                low_login: b
                            },
                            dataType: "jsonp",
                            timeout: 5e3
                        }, function (b) {
                            b = {
                                qqface: b.data[0].headurl,
                                nick: b.data[0].nick
                            }, a(b)
                        }, function (b) {
                            a(b)
                        })
                    };
                d()
            }, openQQLogin: function (a) {
                a = a || {};
                var b = location.protocol + "//video.qq.com/fcgi-bin/qq_login?redirect_url=" + encodeURIComponent(a.s_url || location.href);
                delete a.s_url;
                var c = "//ui.ptlogin2.qq.com/cgi-bin/login?",
                    d = {
                        link_target: "blank",
                        low_login: 0,
                        target: "self",
                        style: 9,
                        appid: "532001601",
                        pt_no_onekey: a.disableOnKey ? 1 : 0,
                        s_url: encodeURIComponent(b)
                    },
                    e = [];
                for (var f in d) a.hasOwnProperty(f) ? e.push(f + "=" + a[f]) : e.push(f + "=" + d[f]);
                c += e.join("&"), setTimeout(function () {
                    window.location.href = c
                }, 200)
            }, qqLogout: function () {
                d.set("nickCookie", "", location.host, "/", -24), d.set("encuinCookie", "", location.host, "/", -24), d.set("skey", "", ".qq.com", "/", -24), d.set("uin", "", ".qq.com", "/", -24), this.isQQLowLogin(function (a) {
                    a && (d.set("lskey", "", ".qq.com", "/", -24), d.set("luin", "", ".qq.com", "/", -24))
                }), (new Image).src = "//video.qq.com/fcgi-bin/logout?_=" + Math.random()
            }, openWXLogin: function (a) {
                a = a || window.location.href;
                var b = "//video.qq.com/fcgi-bin/wx_login?from=1&redirect_url=" + encodeURIComponent(a);
                document.location.href = b
            }, getWXCookie: function (a) {
                a = a || function () {};
                try {
                    if (Txplayer && Txplayer.disableAdGetWxCookie) return void a({})
                } catch (b) {}
                var c = this,
                    d = location.protocol + "//video.qq.com/getcookie/getcookie.html.html";
                if (d += "?t=" + +new Date, "qq.com" !== document.domain) return void a({
                    error: "document.domain\u4e0d\u7b49\u4e8eqq.com\uff0c\u8de8\u57df\u5931\u8d25"
                });
                if (c.cache.wxAuthCache) return void a(c.cache.wxAuthCache);
                c.wxCallbacks.push(a), window.txvGetLoginCookiesCallback = function (b) {
                    if (c.cache.wxAuthCache = b, setInterval(function () {
                        c.cache.wxAuthCache = null
                    }, 2e4), !c.wxCallbacks || !c.wxCallbacks.length) return void a(b);
                    for (var d; c.wxCallbacks.length;) d = c.wxCallbacks.shift(), "function" == typeof d && d.call(c, b)
                };
                var e = "tvp_login_cross_domin_frame",
                    f = document.getElementById(e);
                f ? (document.body.removeChild(f), f = document.createElement("iframe"), f.src = d, f.id = e, f.style.display = "none", document.body.appendChild(f)) : (f = document.createElement("iframe"), f.src = d, f.id = e, f.style.display = "none", document.body.appendChild(f))
            }, isWXLogin: function (a) {
                a = a || function () {};
                var b = this,
                    c = {};
                this.getWXCookie(function (d) {
                    return d && d.access_token && d.appid && d.openid && d.vuserid && d.vusession && d.refresh_token ? void b.checkWXLogin(function (b) {
                        if (!b || b.errcode + "" != "0") return void a(!1);
                        if (b && b.vuserid && b.access_token) {
                            for (var e in d) c[e] = d[e];
                            for (var f in b) c[f] = b[f];
                            a(c)
                        } else a(!1)
                    }) : void a(!1)
                })
            }, checkWXLogin: function (a) {
                a = a || function () {};
                var b = "//video.qq.com/fcgi-bin/check_login",
                    c = e.ajax({
                        url: b,
                        timeout: 5e3,
                        dataType: "jsonp"
                    }, function (b) {
                        a(b)
                    }, function (b) {
                        a(b)
                    });
                c && c.error && a(c)
            }, wxLogout: function (a) {
                a = a || function () {};
                var b = "//video.qq.com/fcgi-bin/logout";
                this.cache && this.cache.wxAuthCache && (this.cache.wxAuthCache = null);
                var c = e.ajax({
                    url: b,
                    dataType: "jsonp",
                    timeout: 5e3
                }, function (b) {
                    a(b)
                }, function (b) {
                    a(b)
                });
                c && c.error && a(c)
            }, tenvideoJSReady: function (a) {
                return a = a || function () {}, "object" == typeof window.TenvideoJSBridge ? void a() : void document.addEventListener("onTenvideoJSBridgeReady", function () {
                    a()
                }, !1)
            }, tvLogin: function (a, b) {
                b = b || function () {}, this.tenvideoJSReady(function () {
                    TenvideoJSBridge.invoke("actionLogin", {
                        type: a
                    }), TenvideoJSBridge.on("onActionLoginFinish", b), TenvideoJSBridge.on("actionLoginFinish", b)
                })
            }, tvLoginQQ: function (a) {
                a = a || function () {}, this.tvLogin("qq", a)
            }, tvLoginWX: function (a) {
                a = a || function () {}, this.tvLogin("wx", a)
            }, tvLoginTV: function (a) {
                a = a || function () {}, this.tvLogin("tv", a)
            }, tvSwitchLogin: function (a, b) {
                b = b || function () {}, g.isipad ? b(new Error("iPad not support SwitchLogin")) : this.tenvideoJSReady(function () {
                    TenvideoJSBridge.invoke("switchLoginState", {
                        userType: a
                    }), TenvideoJSBridge.on("onSwitchLoginStateResponse", function (a) {
                        var c;
                        if ("string" == typeof a) try {
                            c = JSON.parse(a)
                        } catch (d) {} else c = a;
                        if (c && 0 === parseInt(c.errCode)) b(null, c);
                        else {
                            var e = c && c.errCode || -100,
                                f = c && c.errMsg || "app error",
                                g = new Error(f);
                            g.code = e, g.result = a, b(g)
                        }
                    })
                })
            }, tvGetCookie: function (a, b) {
                this.tenvideoJSReady(function () {
                    TenvideoJSBridge.invoke("getCookie", {
                        type: a
                    }, b)
                })
            }, tvGetMainCookie: function (a) {
                this.tenvideoJSReady(function () {
                    TenvideoJSBridge.invoke("getMainCookie", null, a)
                })
            }, tvGetUserInfo: function (a, b) {
                this.tenvideoJSReady(function () {
                    TenvideoJSBridge.invoke("getUserInfo", {
                        type: a
                    }, b)
                })
            }
        };
        var h = new c;
        h.cookie = d, window.Txplayer && Txplayer.util && !Txplayer.util.txLoginOnMobile ? (Txplayer.util.txLoginOnMobile = h, Txplayer.register("H5Login", function (a) {
            this.context = a
        })) : window.Txplayer || (window.txLoginOnMobile = h)
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(93)
    }, 93: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(94),
            h = ["VIP\u771f\u5c0a\u8d35\uff0c\u957f\u957f\u7684\u7247\u5934\u5e7f\u544a\u5df2\u4e3a\u60a8\u8df3\u8fc7\uff01", "VIP\u5c31\u662f\u4efb\u6027\uff0c\u5c31\u4e0d\u770b\u7247\u593445\u79d2\u5e7f\u544a\uff01", "VIP\u65f6\u95f4\u5b9d\u8d35\uff0c\u514d\u6392\u961f\u6781\u901f\u64ad\u653e\uff01", "\u6709\u4e00\u79cd\u5e78\u798f\uff0c\u53ebVIP\u514d\u5e7f\u544a\uff01", "VIP\u597d\u798f\u5229\uff0c45\u79d2\u5e7f\u544a\u76f4\u63a5\u8df3\u8fc7\u5566\uff01", "VIP\u597d\u8d34\u5fc3\uff0c\u53c8\u9ed8\u9ed8\u7701\u4e0b60\u79d2\u5e7f\u544a\u65f6\u95f4\uff01"];
        d.prototype = {
            init: function () {
                this.write(), this.addEventListerner()
            }, write: function () {
                var a = {
                        loading: "txp-ui-loading",
                        continuePlay: "txp-ui-continue-play",
                        hide: Txplayer.dataset.hideClass,
                        tipsText: "txp-ui-tips",
                        vipIcon: "txp-ui-vipIcon"
                    },
                    b = e.tmpl(g, a);
                this.context.dataset.$playermod.append(b), this.dataset.$loading = this.context.dataset.$playermod.find('[data-role="' + a.loading + '"]'), this.dataset.$continue = this.context.dataset.$playermod.find('[data-role="' + a.continuePlay + '"]'), this.dataset.$tipsText = this.context.dataset.$playermod.find('[data-role="' + a.tipsText + '"]'), this.dataset.$vipIcon = this.context.dataset.$playermod.find('[data-role="' + a.vipIcon + '"]')
            }, remove: function () {
                this.dataset.$loading.remove()
            }, hide: function () {
                this.dataset.$loading.addClass(Txplayer.dataset.hideClass)
            }, show: function () {
                2 == this.context.dataset.playerState || this.context.dataset.playBtnShowing || this.dataset.$loading.removeClass(Txplayer.dataset.hideClass)
            }, addEventListerner: function () {
                var a = this;
                this.dataset.eventsList = {}, this.dataset.eventsList[f.getUniqueMsgKey("videoPlaying")] = function () {
                    a.hide()
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoPause")] = function () {
                    a.hide()
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoSeeked")] = function () {
                    a.hide()
                }, this.dataset.eventsList[f.getUniqueMsgKey("h5networkBadEnd")] = function () {
                    a.hide()
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoLoadstart")] = function () {
                    a.show()
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoSeeking")] = function () {
                    a.show()
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoWaiting")] = function (b) {
                    a.show()
                }, this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function (b) {
                    a.show()
                }, this.dataset.eventsList[f.getUniqueMsgKey("h5networkBadStart")] = function () {
                    a.show()
                }, this.dataset.eventsList[f.getUniqueMsgKey("showContinuePlay")] = function (b) {
                    if ("number" == typeof b) {
                        var c = parseInt(b / 60),
                            d = parseInt(b % 60),
                            e = "\u4e0a\u6b21\u89c2\u770b\u81f3" + (c ? c + "\u5206" : "") + d + "\u79d2\uff0c\u6b63\u5728\u4e3a\u4f60\u7eed\u64ad";
                        a.dataset.$tipsText.text(e), a.dataset.$continue.removeClass(Txplayer.dataset.hideClass), a.dataset.$vipIcon.addClass(Txplayer.dataset.hideClass), setTimeout(function () {
                            a.dataset.$continue.addClass(Txplayer.dataset.hideClass)
                        }, 3e3)
                    }
                }, this.dataset.eventsList[f.getUniqueMsgKey("showVipTips")] = function () {
                    a.dataset.$tipsText.text(h[Math.ceil(6 * Math.random()) - 1]), a.dataset.$vipIcon.removeClass(Txplayer.dataset.hideClass), a.dataset.$continue.removeClass(Txplayer.dataset.hideClass), setTimeout(function () {
                        a.dataset.$continue.addClass(Txplayer.dataset.hideClass)
                    }, 3e3)
                }, this.dataset.eventsList[f.getUniqueMsgKey("error")] = function () {
                    a.hide()
                }, e.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }
        }, Txplayer.register("H5UiLoading", d)
    }, 94: function (a, b) {
        a.exports = '<txpdiv  class="txp_overlay_loading">\n    <txpdiv class="txp_text <%=hide%>" data-role="<%=continuePlay%>">\n        <svg class="txp_icon txp_icon_vip <%=hide%>" data-role="<%=vipIcon%>" width="32" height="32" viewBox="0 0 32 32"><use class="txp_svg_vip" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=svgPrefix%>#txp_svg_vip"></use></svg>\n        <span data-role="<%=tipsText%>"></span>\n    </txpdiv>\n    <txpdiv class="txp_icon_loading <%=hide%>" data-role="<%=loading%>"></txpdiv>\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(99)
    }, 99: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(100);
        d.prototype = {
            init: function () {
                this.write(), this.addEventListener()
            }, write: function () {
                var a = {
                    hideClass: Txplayer.dataset.hideClass,
                    playLayer: "txp-h5-ui-play-layer",
                    playBtn: "txp-h5-ui-play-btn",
                    trialBtn: "txp-h5-ui-trial-btn",
                    replayBtn: "txp-h5-ui-replay-btn"
                };
                this.dataset.renderData = a;
                var b = e.tmpl(g, a);
                this.context.dataset.$playermod.append(b), this.dataset.$playLayer = this.context.dataset.$playermod.find('[data-role="' + a.playLayer + '"]'), this.dataset.$btn = this.dataset.$playLayer.find(".txp_btn"), this.dataset.$btn1 = this.context.dataset.$playermod.find('[data-role="' + a.playBtn + '"]'), this.dataset.$btn2 = this.context.dataset.$playermod.find('[data-role="' + a.trialBtn + '"]'), this.dataset.$btn2Text = this.context.dataset.$playermod.find('[data-role="' + a.trialBtn + '"]').find(".txp_text"), this.dataset.$btn3 = this.context.dataset.$playermod.find('[data-role="' + a.replayBtn + '"]'), this.dataset.disableUi = !!this.context.config.hideControlUI, this.initDisPlay()
            }, initDisPlay: function () {
                var a = this.context.dataset.playState;
                "undefined" != typeof a && a !== -1 && a !== !1 && null !== a || this.limitPlay()
            }, hide: function () {
                this.context.dataset.playBtnShowing = !1, this.dataset.$playLayer.addClass(Txplayer.dataset.hideClass)
            }, show: function (a) {
                this.dataset.disableUi || (a = a || 1, this.dataset.$playLayer.removeClass(Txplayer.dataset.hideClass).children().removeClass(Txplayer.dataset.showClass), this.dataset["$btn" + a].addClass(Txplayer.dataset.showClass), 2 == a && this.dataset.$btn2Text.text("\u8bd5\u770b" + this.context.dataset.playerLimitTime + "\u5206\u949f"), this.context.dataset.playBtnShowing = !0)
            }, remove: function () {
                this.dataset.$playLayer.remove()
            }, limitPlay: function () {
                this.show(this.context.dataset.isLimit ? 2 : 1)
            }, addEventListener: function () {
                var a = this;
                this.dataset.$btn.on(Txplayer.dataset.clickEventName, function () {
                    e(this).attr("data-role") == a.dataset.renderData.replayBtn ? (a.context.msg.broadcast("beforeVideoRePlay"), a.context.msg.broadcast("androidHack")) : a.context.msg.broadcast("qqNewsHack"), a.context.msg.broadcast("playControl", {
                        autoplay: !0
                    }), Txplayer.hasFirstClick || (Txplayer.hasFirstClick = !0, Txplayer.msg.broadcast("firstClick"))
                }), this.dataset.eventsList = {}, this.dataset.eventsList[f.getUniqueMsgKey("hideUiPlay")] = function () {
                    a.hide()
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoPlaying")] = function () {
                    a.hide()
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoPlay")] = function () {
                    a.hide()
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoPause")] = function (b) {
                    b.playListType && a.limitPlay()
                }, this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function (a) {}, this.dataset.eventsList[f.getUniqueMsgKey("videoEnd")] = function (b) {
                    b && ("film" === b.playListType || "endingad" === b.playListType) && b.isAllEnd && a.show(3)
                }, this.dataset.eventsList[f.getUniqueMsgKey("limitInitStart")] = function (b) {
                    1 !== a.context.dataset.playerstate && !a.context.dataset.isPlayingAd && a.limitPlay()
                }, this.dataset.eventsList[f.getUniqueMsgKey("openAdLink")] = function (b) {
                    a.context.dataset.isPlayingAd && a.show(a.context.dataset.isLimit ? 2 : 1)
                }, this.context.config.hideControlUI && (this.dataset.eventsList[f.getUniqueMsgKey("disableUi")] = function (b) {
                    a.dataset.disableUi = !0
                }, this.dataset.eventsList[f.getUniqueMsgKey("enableUi")] = function (b) {
                    a.dataset.disableUi = !1
                }), e.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }
        }, Txplayer.register("H5UiPlay", d)
    }, 100: function (a, b) {
        a.exports = '<txpdiv data-role="<%=playLayer%>" class="txp_overlay_play <%=hideClass%>">\n  <button data-role="<%=playBtn%>" class="txp_btn txp_btn_play_lg" data-status="play" aria-label="\u64ad\u653e">\n    <svg class="txp_icon txp_icon_play_lg" viewBox="0 0 68 68"><use xlink:href="<%=svgPrefix%>#txp_svg_play_lg"></use></svg>\n  </button>\n  <button data-role="<%=trialBtn%>" class="txp_btn txp_btn_trial" aria-label="\u8bd5\u770b5\u5206\u949f">\n    <svg class="txp_icon txp_icon_play" viewBox="0 0 56 56"><use xlink:href="<%=svgPrefix%>#txp_svg_play"></use></svg>\n    <txpdiv class="txp_text">\u8bd5\u770b5\u5206\u949f</txpdiv>\n  </button>\n  <button data-role="<%=replayBtn%>" class="txp_btn txp_btn_replay" aria-label="\u91cd\u65b0\u64ad\u653e">\n    <svg class="txp_icon txp_icon_replay" viewBox="0 0 30 30"><use class="txp_svg_replay" xlink:href="<%=svgPrefix%>#txp_svg_replay"></use></svg>\n    <txpdiv class="txp_text">\u91cd\u65b0\u64ad\u653e</txpdiv>\n  </button>\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(101)
    }, 86: function (a, b) {
        a.exports = '<txpdiv data-role="<%=poster%>" class="txp_poster"></txpdiv>'
    }, 101: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(86);
        d.prototype = {
            init: function () {
                this.dataset.showPoster = !0, this.context.config.poster === !1 ? this.dataset.showPoster = !1 : "string" === e.type(this.context.config.poster) && (this.context.dataset.poster = this.context.config.poster), this.context.dataset.forcePoster = this.context.dataset.poster || "", this.dataset.vidChangeFlag = !0, this.write(), this.initDisplay(), this.addEventListerner(), this.exportsModuleApis()
            }, initDisplay: function (a) {
                function b(a) {
                    if (d.context.dataset.forcePoster ? d.context.dataset.poster = d.context.dataset.forcePoster : d.context.dataset.poster || (f.mobile ? d.context.dataset.poster = f.getMobileVideoPosterByVid(c, 0) : d.context.dataset.poster = f.getPcVideoPosterByVid(c)), d.context.dataset.poster) {
                        var b = {
                            "background-image": "url(" + d.context.dataset.poster + ")",
                            "background-size": "cover"
                        };
                        a && (b.background = "black"), d.dataset.$poster.css(b), d.show()
                    }
                }
                if ((!this.context.config.official || !this.context.dataset.autoplay && !this.context.config.autoplay) && this.dataset.showPoster) {
                    var c = this.context.dataset.vid || this.context.config.vid,
                        d = this;
                    c ? b(a) : this.context.msg.on("ready", function () {
                        c = d.context.dataset.vid, b(a)
                    })
                }
            }, write: function () {
                var a = {
                    poster: "txp-ui-poster"
                };
                this.dataset.renderData = a;
                var b = e.tmpl(g, a);
                this.context.dataset.$playermod.append(b), this.dataset.$poster = this.context.dataset.$playermod.find('[data-role="' + a.poster + '"]')
            }, remove: function () {
                this.dataset.$poster.remove && this.dataset.$poster.remove()
            }, setPoster: function (a) {
                "string" === e.type(a) && (this.context.dataset.forcePoster = a)
            }, getPoster: function () {
                return this.context.dataset.poster
            }, hide: function () {
                this.context.userMsg.broadcast("firstFrame"), this.dataset.$poster.addClass(Txplayer.dataset.hideClass)
            }, show: function () {
                this.dataset.$poster.removeClass(Txplayer.dataset.hideClass)
            }, addEventListerner: function () {
                var a = this,
                    b = this.context.dataset.playState,
                    c = this.context.dataset.isPlayingAd;
                (e.inArray(b, [0, 1, 3]) > -1 || c) && this.hide(), this.dataset.eventsList = {}, this.dataset.eventsList[f.getUniqueMsgKey("videoPlaying")] = function () {
                    f.browser.x5 || (a.dataset.vidChangeFlag = !1, a.hide())
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoTimeUpdate")] = function (b) {
                    f.browser.x5 && a.dataset.vidChangeFlag && b && b.videoTag && b.videoTag.currentTime > .01 && (a.dataset.vidChangeFlag = !1, a.hide())
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoPlay")] = function () {}, this.dataset.eventsList[f.getUniqueMsgKey("videoEnd")] = function (b) {
                    b && b.isAllEnd && (a.dataset.vidChangeFlag = !0, a.show())
                }, this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function (b) {
                    a.dataset.vidChangeFlag = !0, a.context.dataset.poster = null, a.initDisplay()
                }, this.dataset.eventsList[f.getUniqueMsgKey("playStateChange")] = function (b) {
                    b = b || {}, 0 === b.state && (f.mobile || (a.context.dataset.poster = null), a.initDisplay())
                }, e.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                }), this.dataset.$poster.on("click", function () {
                    a.context.dataset.$shadow && a.context.dataset.$shadow.trigger("click")
                }).on("dblclick", function () {
                    a.context.dataset.$shadow && a.context.dataset.$shadow.trigger("dblclick")
                })
            }, exportsModuleApis: function () {
                this.dataset.moduleApis = {}, this.dataset.moduleApis.getPoster = this.getPoster.bind(this), this.dataset.moduleApis.setPoster = this.setPoster.bind(this), e.extend(this.context.userApi, this.dataset.moduleApis)
            }
        }, Txplayer.register("H5UiPoster", d)
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(56)
    }, 56: function (a, b) {
        function c(a) {
            d = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var d = Txplayer.$,
            e = Txplayer.util;
        c.prototype = {
            init: function () {
                this.addEventListener()
            }, getDefaultParams: function () {
                this.dataset.format || (this.dataset.format = this.context.dataset.currentDefinitionFormat || ""), this.dataset.rate || (this.dataset.rate = this.context.dataset.currentDefinitionRate || ""), this.dataset.cdnID || (this.dataset.cdnID = this.context.dataset.cdnID);
                var a = e.getLoginID(),
                    b = this.context.dataset.platform,
                    c = {
                        loginid: a.loginId,
                        loginex: a.loginIdEx,
                        logintype: "wxid" == a.mainLogin ? 3 : "qq" == a.mainLogin ? 1 : 0,
                        guid: this.context.dataset.guid || "",
                        longitude: Txplayer.dataset.locationData && Txplayer.dataset.locationData.longitude || "",
                        latitude: Txplayer.dataset.locationData && Txplayer.dataset.locationData.latitude || "",
                        vip: this.isVip(),
                        online: navigator.onLine ? 1 : 0,
                        p2p: this.context.dataset.useP2P ? 1 : 0,
                        downloadkit: 0,
                        resolution: [screen.width, screen.height, window.devicePixelRatio || 1].join("*"),
                        testid: this.context.dataset.reportTestId || "",
                        osver: [e.os.name, e.os.version].join(" "),
                        playerver: "",
                        playertype: 1,
                        uip: this.context.dataset.reportUsrIP || "",
                        confid: "",
                        cdnip: "",
                        cdnid: this.dataset.cdnID || "",
                        cdnuip: "",
                        freetype: "",
                        sstrength: "",
                        network: "",
                        speed: "",
                        device: "",
                        appver: Txplayer.dataset.ver,
                        p2pver: "",
                        url: location.href,
                        refer: document.referrer,
                        ua: e.getReportUA(),
                        ptag: e.getPTAG(),
                        flowid: this.context.dataset.flowid,
                        platform: b || "",
                        dltype: this.context.dataset.useHls ? 3 : 1,
                        vid: this.context.dataset.vid || this.context.config.vid,
                        fmt: this.dataset.format || "",
                        rate: this.dataset.rate || "",
                        clip: this.context.dataset.reportClip || "",
                        status: this.context.dataset.reportStatus || "",
                        type: this.context.dataset.reportType || "",
                        duration: this.context.dataset.duration || "",
                        cid: this.context.config.cid
                    };
                return c
            }, isVip: function () {
                var a = 0;
                return this.context && this.context.config && "function" === d.type(this.context.config.getUserType) && (a = 2 == this.context.config.getUserType() ? 1 : 0), a
            }, getLocation: function () {
                var a = {},
                    b = d.Deferred();
                return "https:" === location.protocol && navigator.geolocation && navigator.geolocation.getCurrentPosition ? navigator.geolocation.getCurrentPosition(function (c) {
                    a = c && c.coords ? {
                        latitude: c.coords.latitude,
                        longitude: c.coords.longitude
                    } : {
                        latitude: "",
                        longitude: ""
                    }, b.resolve(a)
                }, function (a) {
                    b.resolve({
                        latitude: "",
                        longitude: ""
                    })
                }) : b.resolve({
                    latitude: "",
                    longitude: ""
                }), b
            }, resetDataset: function () {
                this.dataset = {}
            }, report: function (a) {
                this.dataset.hasOwnProperty("sequence") || (this.dataset.sequence = -1), ++this.dataset.sequence, a.hasOwnProperty("seq") && "" !== a.seq || (a.seq = this.dataset.sequence || 0);
                var b = new Image,
                    c = "//btrace.video.qq.com/kvcollect?BossId=5948&Pwd=403447344&";
                c += d.param(a), b.src = c
            }, step0: function () {
                var a = {
                    code: "",
                    stime: this.context.config.pageInitTime
                };
                a = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(a)
                }), a.step = 0, this.report(a)
            }, step5: function () {
                var a = this.context.config.playerInitTime || this.context.dataset.playerCreateStartTime,
                    b = {
                        stime: a,
                        etime: this.context.dataset.playerCreateEndTime,
                        code: this.context.dataset.errorCodeOfStep5 || ""
                    };
                b = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(b)
                }), b.step = 5, this.report(b)
            }, step10: function (a) {
                var b = {
                    stime: this.dataset.adCgiRequestStartTime,
                    etime: this.dataset.adCgiRequestEndTime,
                    code: this.dataset.errorCodeOfStep10 || "",
                    ip: ""
                };
                if (a) {
                    if (!this.context.dataset.cacheLoadinadData) return;
                    var c = +new Date;
                    b = {
                        stime: c,
                        etime: c,
                        code: this.context.dataset.cacheLoadinadData.errorCodeOfStep10 || "",
                        ip: ""
                    }
                }
                b = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(b)
                }), b.step = 10, this.report(b)
            }, step15: function (a) {
                a = a || {};
                var b = {
                    ip: this.context.dataset.reportUsrIP,
                    stime: a.startTime,
                    etime: a.endTime,
                    code: ""
                };
                a.errCode ? b.code = a.errCode : "timeout" === a.err ? b.code = Txplayer.errcode.getPlatformErrorCode("getinfo", "neterror", "03") : a.err && !a.hasOwnProperty("code") ? b.code = Txplayer.errcode.getPlatformErrorCode("getinfo", "neterror", "01") : a.err && a.hasOwnProperty("code") && (b.code = Txplayer.errcode.getPlatformErrorCode("getinfo", "cgiInnerError", a.code + "")), b = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(b)
                }), b.step = 15, this.report(b)
            }, step20: function (a) {
                a = a || {};
                var b = {
                    ip: this.context.dataset.reportUsrIP,
                    stime: a.startTime,
                    etime: a.endTime,
                    code: a.errCode || ""
                };
                b = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(b)
                }), b.step = 20, this.report(b)
            }, step25: function () {
                if (this.dataset.hasOwnProperty("cacheOfStep25") && this.dataset.cacheOfStep25.length) {
                    var a = d.extend(this.getDefaultParams(), {
                        data: JSON.stringify(this.dataset.cacheOfStep25)
                    });
                    a.step = 25, this.report(a)
                }
            }, cacheStep25Data: function (a) {
                a = a || {}, this.dataset.hasOwnProperty("cacheOfStep25") || (this.dataset.cacheOfStep25 = []);
                var b = {
                    vid: a.currentAdVid || this.dataset.currentAdVid,
                    format: "",
                    stime: this.dataset.adPlayStart || "",
                    letime: this.dataset.adPlayingStart || "",
                    pstime: this.dataset.adPlayingStart || "",
                    petime: this.dataset.adPlayErrorTime || this.dataset.adPlayEndTime || "",
                    playduration: this.dataset.adPlayDuration || 0,
                    duration: a.currentAdDuration || this.dataset.currentAdDuration || 0,
                    code: this.dataset.errorCodeOfStep25 || ""
                };
                b.pstime && b.stime && b.pstime - b.stime <= 200 && (b.stime = b.letime = b.pstime), this.dataset.cacheOfStep25.push(b)
            }, step30: function (a) {
                a = a || {};
                var b = {
                    stime: this.dataset.playTime || "",
                    etime: this.dataset.playingTime || +new Date,
                    bufferduration: "",
                    vt: this.context.dataset.cdnID || "",
                    url: a.url || this.context.dataset.currentVideoUrl || "",
                    urlindex: this.context.dataset.urlindex || 0,
                    code: this.dataset.errorCodeOfStep30 || ""
                };
                this.dataset.hlsPlayTimeTheFirstTime && (b.stime = this.dataset.hlsPlayTimeTheFirstTime), b = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(b)
                }), b.step = 30, this.report(b)
            }, deleteErrorCodes: function () {
                for (var a in this.dataset) a && 0 == a.indexOf("errorCodeOfStep") && delete this.dataset[a]
            }, step35: function () {
                if (!(this.dataset.waitingStartTime && this.dataset.waitingEndTime && this.dataset.waitingEndTime - this.dataset.waitingStartTime <= 200) && !(this.dataset.waitingDuration < 200) && this.context.dataset.currentTime) {
                    var a = "";
                    this.dataset.errorCodeOfStep35 && this.context.dataset.currentVideoUrl && (a = this.context.dataset.currentVideoUrl);
                    var b = {
                        val: [{
                            reason: "",
                            scene: 1,
                            format: this.context.dataset.currentDefinitionFormat || "",
                            ptime: parseInt(this.context.dataset.currentTime) || "",
                            stime: this.dataset.waitingStartTime || "",
                            etime: this.dataset.waitingEndTime || "",
                            code: this.dataset.errorCodeOfStep35 || "",
                            url: a
                        }],
                        tcount: 1,
                        tduration: this.dataset.waitingDuration || ""
                    };
                    b = d.extend(this.getDefaultParams(), {
                        data: JSON.stringify(b)
                    }), b.step = 35, this.report(b)
                }
            }, step40: function (a) {
                a = a || {};
                var b = {
                    tcount: 1,
                    tbcount: 0,
                    tbduration: this.dataset.seekWaitingDuration || 0,
                    val: {
                        format: this.context.dataset.currentDefinitionFormat,
                        pstime: a.currentTimeWhenSeekStart || this.dataset.currentTimeWhenSeekStart || "",
                        petime: a.currentTimeWhenSeekEnd || "",
                        code: this.dataset.errorCodeOfStep40 || ""
                    }
                };
                b.val.lstime = this.dataset.seekWaitingStartTime, b.val.letime = this.dataset.seekEndTime, b.tbcount = 1, b.val = [b.val], b = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(b)
                }), b.step = 40, this.report(b), delete this.dataset.seekWaitingDuration
            }, step47: function (a) {
                var b = {
                    stime: a.stime || "",
                    etime: a.etime || "",
                    url: a.url || "",
                    vt: this.context.dataset.cdnID || "",
                    urlindex: this.context.dataset.urlindex || 0,
                    cdnip: "",
                    code: ""
                };
                b = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(b)
                }), b.step = 47, this.report(b)
            }, step50: function (a) {
                var b = a || this.getStep50Data();
                this.report(b), this.handlerStep50Data("delete", b.vid)
            }, getStep50Data: function (a) {
                a = a || {};
                var b = {
                    reason: a.reason || 0,
                    etime: +new Date,
                    playduration: this.dataset.userPlayedTime || 0,
                    code: this.dataset.errorCodeOfStep50 || ""
                };
                return b = d.extend(this.getDefaultParams(), {
                    data: JSON.stringify(b)
                }), b.step = 50, b.seq = this.dataset.sequence ? this.dataset.sequence + 1 : 1, b
            }, autoReportStep50: function (a) {
                a = a || {}, a.hasOwnProperty("limitTime") || (a.limitTime = !0);
                var b = this.handlerStep50Data("get");
                if ("object" == d.type(b))
                    for (var c in b)
                        if ("object" === d.type(b[c]) && (!a.prevVid || a.prevVid === c)) {
                            if (a.limitTime && +new Date - b[c].updateTime < 3e4) continue;
                            delete b[c].updateTime, this.step50(b[c]), this.handlerStep50Data("delete", b[c].vid)
                        }
            }, autoSaveStep50Data: function () {
                var a = this.getStep50Data({
                    reason: 1
                });
                a && a.vid && (a.updateTime = +new Date, this.handlerStep50Data("save", this.context.dataset.vid, a))
            }, handlerStep50Data: function (a, b, c) {
                if ("delete" !== a && "save" !== a || b) {
                    var f, g, h, i = Txplayer.dataset.localStorageKey.userPlayedTime;
                    f = e.getData(i), f || (f = "{}");
                    try {
                        g = JSON.parse(f)
                    } catch (j) {
                        h = !0
                    }
                    if (h || !g || "object" != d.type(g)) return void e.delData(i);
                    if ("delete" === a && g[b]) delete g[b], e.setData(i, JSON.stringify(g));
                    else {
                        if ("get" === a) return b ? g[b] : g;
                        "save" === a && c && (g[b] = c, e.setData(i, JSON.stringify(g)))
                    }
                }
            }, resetDataset: function () {
                this.dataset = {}
            }, addEventListener: function () {
                var a = this;
                this.autoReportStep50(), this.context.dataset.isReady ? a.step5() : this.context.msg.on("ready", function () {
                    a.step5()
                }), this.context.config.pageInitTime && this.step0(), this.context.msg.on("getinfoFinish", function (b) {
                    b && b.err && !b.isLastRetry || a.step15(b)
                }), this.context.msg.on("getkeyFinish", function (b) {
                    b && b.err && !b.isLastRetry && !b.em || a.step20(b)
                }), this.context.msg.on("adCgiLoaded", function (b) {
                    if (b = b || {}, b.adType && "\u524d\u8d34" == b.adType) {
                        var c = "";
                        1 == b.code ? c = Txplayer.errcode.getPlatformErrorCode("ad", "neterror", "01") : 3 == b.code ? c = Txplayer.errcode.getPlatformErrorCode("ad", "neterror", "03") : 4 == b.code && (c = Txplayer.errcode.getPlatformErrorCode("ad", "neterror", "04")), b.etime && b.stime && (a.dataset.errorCodeOfStep10 = c, a.dataset.adCgiRequestStartTime = b.stime, a.dataset.adCgiRequestEndTime = b.etime, a.step10(), delete a.dataset.errorCodeOfStep10)
                    }
                }), this.context.msg.on("videoPlay", function (b) {
                    if (b && "film" !== b.playListType) {
                        a.dataset.adPlayStart = +new Date;
                        var c;
                        if (a.context.dataset.adList && (c = a.context.dataset.adList[b.index]), c && c.image) {
                            var e = "";
                            "array" === d.type(c.image) ? e = c.image[0].vid : "object" === d.type(c.image) && (e = c.image.vid), a.dataset.currentAdVid = e, a.dataset.currentAdDuration = Number(c.duration) / 1e3
                        }
                    }
                }), this.context.msg.on("videoPlaying", function (b) {
                    return b = b || {}, "film" === b.playListType ? void(a.dataset.cacheOfStep25 && a.dataset.cacheOfStep25.length && (a.step25(), delete a.dataset.adPlayDuration, a.dataset.cacheOfStep25 = [])) : void(a.dataset.adPlayingStart = +new Date)
                }), this.context.msg.on("videoTimeUpdate", function (b) {
                    b && "film" !== b.playListType && ("number" != typeof a.dataset.adPlayDuration && (a.dataset.adPlayDuration = 0), a.dataset.adPlayDuration++)
                }), this.context.msg.on("videoEnd", function (b) {
                    b = b || {}, "loadingad" == b.playListType && (a.dataset.adPlayEndTime = +new Date, b && "error" == b.from && (a.dataset.errorCodeOfStep25 = Txplayer.errcode.getPlatformErrorCode("ad", "aderror", "02")), a.cacheStep25Data(), delete a.dataset.adPlayDuration)
                }), this.context.msg.on("reportVideoError", function (b) {
                    if (b = b || {}, "film" !== b.type) {
                        a.dataset.adPlayErrorTime = +new Date, a.dataset.errorCodeOfStep25 = b.code;
                        var c = a.context.dataset.adList[b.index];
                        if (c && c.image) {
                            var e = "";
                            "array" === d.type(c.image) ? e = c.image[0].vid : "object" === d.type(c.image) && (e = c.image.vid), a.cacheStep25Data({
                                currentAdVid: e,
                                currentAdDuration: Number(c.duration) / 1e3
                            }), delete a.dataset.errorCodeOfStep25, delete a.dataset.adPlayErrorTime
                        }
                    }
                });
                var b = 0;
                this.context.msg.on("videoPlay.h5report-step30", function (b) {
                    "film" === b.playListType && (a.dataset.playTime = +new Date, a.dataset.currentVideoIndex = b.index)
                }), this.context.msg.on("videoPlaying.h5report-step30", function (c) {
                    if ("film" === c.playListType) {
                        b = 0;
                        var d = a.dataset.hasOwnProperty("playingTime");
                        if (a.dataset.playingTime = +new Date, a.deleteErrorCodes(), c.videoTag) var e = c.videoTag.src;
                        d || a.step30({
                            url: e || ""
                        })
                    }
                });
                var c = function () {
                        a.dataset.hasOwnProperty("waitingTimes") || (a.dataset.waitingTimes = 0), a.dataset.waitingTimes++
                    },
                    e = function () {
                        var b = a.dataset.waitingEndTime - a.dataset.waitingStartTime;
                        b > 3e4 && (b = 3e4), "number" !== d.type(a.dataset.waitingDuration) && (a.dataset.waitingDuration = 0), a.dataset.waitingDuration = b
                    },
                    f = function (b) {
                        a.context.dataset.useChromeHls && a.context.msg.broadcast("reportChromeHlsError", 0), a.dataset.waitingTimes > 20 || (a.dataset.waitingStartTime = +new Date, c(), a.context.msg.off("videoPlaying.h5report-step35"), a.context.msg.once("videoPlaying.h5report-step35", function () {
                            a.dataset.waitingEndTime = +new Date, e(), delete a.dataset.errorCodeOfStep35, a.step35()
                        }))
                    };
                this.context.msg.on("videoWaiting", function (b) {
                    b && !b.seeking && "film" === b.playListType && a.dataset.hasOwnProperty("playingTime") && (a.context.dataset.isVideoSeeking || a.context.dataset.isDefinitionSwitching || f(b))
                }), this.context.msg.on("h5networkBadStart", function (b) {
                    "film" === b.playListType && (b.isOnWaiting || a.context.dataset.isVideoSeeking || a.context.dataset.isDefinitionSwitching || f(b))
                });
                var g = function () {
                    return a.dataset.userSeekTimes > 32 || (a.dataset.hasOwnProperty("userSeekTimes") || (a.dataset.userSeekTimes = 1), !1)
                };
                this.context.msg.on("seekStart", function (b) {
                    b && b.isUserAction === !1 || g() || (b.currentTimeWhenSeekStart && (a.dataset.currentTimeWhenSeekStart = b.currentTimeWhenSeekStart), a.dataset.seekStartTime = +new Date, "number" !== d.type(a.dataset.seekTimes) && (a.dataset.seekTimes = 0), a.dataset.seekTimes += 1, a.context.msg.off("videoWaiting.h5report-step40"), a.context.msg.off("reportVideoError.h5report-step40"), a.context.msg.once("videoPlaying.h5report-step40", function (b) {
                        b && b.seeking && "film" === b.playListType && (a.context.msg.off("videoWaiting.h5report-step40"), a.context.msg.off("reportVideoError.h5report-step40"))
                    }))
                }), this.context.msg.on("seekEnd", function (b) {
                    if ((!b || b.isUserAction !== !1) && !g() && (a.dataset.seekEndTime = +new Date, a.context.msg.off("videoWaiting.h5report-step40"), a.context.msg.off("reportVideoError.h5report-step40"), b && b.seekStartTime && b.seekEndTime)) {
                        var c = b.seekEndTime - b.seekStartTime,
                            d = c > 200;
                        b.hasOwnProperty("isSeekTimeInBuffer") && b.isSeekTimeInBuffer && (d = !1), a.dataset.seekWaitingDuration = c, a.dataset.seekWaitingStartTime = b.seekStartTime, delete a.dataset.errorCodeOfStep40, a.step40({
                            currentTimeWhenSeekStart: b.currentTimeWhenSeekStart,
                            currentTimeWhenSeekEnd: b.currentTimeWhenSeekEnd,
                            isSeekOfWaiting: d
                        }), delete a.dataset.seekWaitingStartTime, a.dataset.userSeekTimes += 1
                    }
                }), this.context.msg.on("h5ChangeCdn", function (b) {
                    a.step47({
                        stime: b.stime,
                        etime: +new Date,
                        url: b.url
                    })
                }), this.context.msg.on("videoEnd.h5report-step50", function (b) {
                    b && b.playListTypeEnd && "film" === b.playListType && (a.step50(), delete a.dataset.userPlayedTime)
                }), this.context.msg.on("error.h5report-step50", function (b) {
                    b && "film" !== b.type && "cgi" !== b.type || (b && b.code && (a.dataset.errorCodeOfStep50 = b.code, a.dataset.hasOwnProperty("playingTime") || (a.dataset.errorCodeOfStep30 = b.errCode)), !a.dataset.hasOwnProperty("playingTime") && a.dataset.errorCodeOfStep30 ? (a.step30(), delete a.dataset.errorCodeOfStep30) : a.dataset.hasOwnProperty("playingTime") && (a.dataset.errorCodeOfStep31 || (a.dataset.errorCodeOfStep40 ? (a.step40(), delete a.dataset.errorCodeOfStep40) : a.dataset.errorCodeOfStep35 && (a.step35(), delete a.dataset.errorCodeOfStep35))), a.dataset.step50_TIMER && (clearTimeout(a.dataset.step50_TIMER), a.dataset.step50_TIMER = null), a.dataset.step50_TIMER = setTimeout(function () {
                        a.step50(), delete a.dataset.errorCodeOfStep50
                    }, 50))
                }), this.context.msg.on("videoTimeUpdate", function (b) {
                    return b && "film" === b.playListType ? ("number" != typeof a.dataset.userPlayedTime && (a.dataset.userPlayedTime = 0), a.dataset.userPlayedTime++, void a.autoSaveStep50Data()) : void a.autoSaveStep50Data()
                }), this.context.msg.on("vidChange", function (c, d) {
                    a.autoReportStep50({
                        limitTime: !1,
                        prevVid: d
                    }), b = 0, a.resetDataset()
                })
            }
        }, Txplayer.register("H5MReport", c)
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(92)
    }, 92: function (a, b) {
        function c(a) {
            this.dataset = {}, this.context = a, this.init()
        }
        var d = Txplayer.util;
        c.prototype = {
            init: function () {
                this.exportsModuleApis()
            }, exportsModuleApis: function () {
                var a = this;
                this.dataset.eventsList = {}, this.dataset.eventsList[d.getUniqueMsgKey("getVideoUrlSuccess")] = function () {
                    a.context.config.isShowDurationLimit && a.limitInit()
                }, this.dataset.eventsList[d.getUniqueMsgKey("getVideoStaticInfoSuccess")] = function () {
                    a.context.config.isShowDurationLimit && a.limitInit()
                }, this.dataset.eventsList[d.getUniqueMsgKey("vidChange")] = function () {
                    a.dataset.hasInit = !1
                }, Txplayer.$.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                }), this.context.userApi.isLimit = function () {
                    return a.context.dataset.isLimit
                }
            }, limitInit: function () {
                this.dataset.hasInit || "vod" == this.context.config.videoType && this.context.config.isUseHtml5UI && (this.context.config.isShortVideo || d.isSupportApp() && (this.dataset.isLimit = this.hasLimit(), this.context.dataset.isLimit = this.dataset.isLimit, this.dataset.type = this.getLimitCase(), 0 !== this.dataset.type && (this.start(), this.dataset.hasInit = !0)))
            }, hasLimit: function () {
                var a;
                if (this.context.dataset.videoStaticInfo && 0 !== this.context.dataset.videoStaticInfo.limit && !isNaN(+this.context.dataset.videoStaticInfo.preview)) return 1 != this.context.dataset.videoStaticInfo.limit && 3 != this.context.dataset.videoStaticInfo.limit || (this.context.dataset.isNeedPay = !0), this.dataset.duration = this.context.dataset.videoStaticInfo.preview, a = this.dataset.duration - 29, this.context.dataset.playerLimitTime = a < 0 ? 1 : Math.ceil(a / 60), !0;
                var b = this.context.dataset.getinfoJSON;
                return !!(b && b.exem && b.preview) && (this.dataset.duration = b.preview, a = this.dataset.duration - 29, this.context.dataset.playerLimitTime = a < 0 ? 1 : Math.ceil(a / 60), !0)
            }, getLimitCase: function () {
                var a = !1;
                return (d.browser.wechat || d.browser.mqq || d.browser.qqnews) && (a = !0), this.dataset.isLimit ? a ? 1 : 2 : a ? 3 : 0
            }, whatPageType: function () {
                var a, b, c = d.getPlatformCode();
                try {
                    b = top.location.host
                } catch (e) {
                    b = null
                }
                return a = 1 === c ? "mp.weixin.qq.com" === b ? 1 : "view.inews.qq.com" === b ? 2 : 3 : 2 === c ? "view.inews.qq.com" === b ? 4 : 5 : 3 === c ? 6 : 7
            }, start: function () {
                if (this.context.dataset.isLimit) {
                    var a = this.context.dataset.playState;
                    "undefined" != typeof a && a !== -1 && a !== !1 && null !== a || (this.context.msg.broadcast("limitInitStart"), this.context.userMsg.broadcast("limitInitStart", !!this.context.dataset.isLimit))
                }
            }
        }, Txplayer.register("H5UiLimit", c)
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(104)
    }, 104: function (a, b, c) {
        function d(a) {
            this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.util,
            f = c(105);
        d.prototype = {
            init: function () {
                this.context.config.disableH5Seek || (this.write(), this.addEventListerner(), this.progressOnTouch())
            }, write: function () {
                var a = {
                        hideClass: Txplayer.dataset.hideClass,
                        time: "txp-h5-ui-speedy",
                        currentTime: "txp-h5-ui-speedy-currenttime",
                        playedProgress: "txp-h5-ui-speedy-playedprogress"
                    },
                    b = Txplayer.$.tmpl(f, a);
                this.context.dataset.$playermod.append(b), this.dataset.$time = this.context.dataset.$playermod.find('[data-role="' + a.time + '"]'), this.dataset.$currentTime = this.context.dataset.$playermod.find('[data-role="' + a.currentTime + '"]'), this.dataset.$playedProgress = this.context.dataset.$playermod.find('[data-role="' + a.playedProgress + '"]'), this.dataset.disable = !!this.context.config.hideControlUI
            }, remove: function () {
                this.dataset.$time.remove()
            }, show: function () {
                this.dataset.$time.removeClass(Txplayer.dataset.hideClass)
            }, hide: function () {
                this.dataset.$time.addClass(Txplayer.dataset.hideClass)
            }, updateTime: function (a) {
                if ("number" === Txplayer.$.type(a) && this.context.dataset.duration) {
                    this.dataset.$currentTime.html(e.formatPlayTime(a));
                    var b = parseInt(100 * a / this.context.dataset.duration);
                    this.dataset.$playedProgress.css("width", b + "%")
                }
            }, calcTime: function (a) {
                var b = this.context.dataset.currentTime,
                    c = b + parseInt(a / 5);
                return c >= this.context.dataset.duration && (c = this.context.dataset.duration - 1), c < 0 && (c = 0), c
            }, progressOnTouch: function () {
                var a, b, c = this;
                a = b = {
                    x: 0,
                    y: 0,
                    time: 0
                };
                var d = !1,
                    e = !1,
                    f = function () {
                        return c.context.dataset.isPlayingAd || "film" !== c.context.dataset.currentPlayListType || c.context.dataset.isControlTouch || !c.context.dataset.currentTime || 0 == c.context.dataset.playState || c.dataset.disable
                    };
                this.context.dataset.$playermod.on("touchstart", function (b) {
                    f() || (1 === c.context.dataset.playState ? e = !1 : e || 2 !== c.context.dataset.playState || (e = !0), b = b.originalEvent ? b.originalEvent : b, b && b.touches && b.touches.length && (b = b.targetTouches[0], a = {
                        x: b.pageX,
                        y: b.pageY,
                        time: +new Date
                    }))
                }).on("touchmove", function (g) {
                    if (!f() && !e && (g = g.originalEvent ? g.originalEvent : g, g && g.touches && 1 == g.touches.length)) {
                        var h = g.touches[0].pageX - a.x,
                            i = g.touches[0].pageY - a.y;
                        if (Math.abs(h) >= Math.abs(i) && (g.preventDefault ? g.preventDefault() : window.event && (window.event.returnValue = !1)), g = g.touches[0], b = {
                            x: g.pageX - a.x,
                            y: g.pageY - a.y
                        }, (b.x > 30 || b.x < -30) && Math.abs(b.x) > 3 * Math.abs(b.y) && (d || (d = !0, c.context.msg.broadcast("pause"), c.show())), d) {
                            var j = c.calcTime(b.x);
                            c.updateTime(j), c.context.msg.broadcast("speedyTouchmove", j), c.context.msg.broadcast("hideUiPlay")
                        }
                    }
                }).on("touchend", function (e) {
                    if (!f() && d) {
                        a.time, d = !1, c.hide();
                        var g = +new Date - a.time;
                        Number(g) <= 100 && (c.context.msg.broadcast("playControl", {
                            autoplay: !0
                        }), c.context.msg.broadcast("userPlayPlayer")), c.context.msg.broadcast("seekTo", c.calcTime(b.x))
                    }
                })
            }, addEventListerner: function () {}
        }, Txplayer.register("H5UiSpeedy", d)
    }, 105: function (a, b) {
        a.exports = '<txpdiv data-role="<%=time%>" class="txp_overlay_speedy <%=hideClass%>">\n\t<txpdiv class="txp_speedy_inner">\n\t\t<txpdiv class="txp_speedy_text" data-role="<%=currentTime%>">00:00</txpdiv>\n\t\t<txpdiv class="txp_speedy_bar"><txpdiv class="txp_speedy_current" style="width:0%" data-role="<%=playedProgress%>"></txpdiv></txpdiv>\n\t</txpdiv>\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(87)
    }, 87: function (a, b, c) {
        function d(a) {
            this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.util,
            f = c(88);
        d.prototype = {
            init: function () {
                this.write(), this.addEventListerner()
            }, write: function () {
                var a = {
                        dialog: "txp-ui-dialog",
                        dialogText: "txp-ui-dialog-text",
                        dialogErrCode: "txp-ui-dialog-errcode",
                        dialogBtn: "txp-ui-dialog-button",
                        url: this.context.config.otherVideoLink,
                        hide: Txplayer.dataset.hideClass,
                        adBlock: "txp-ui-adblock",
                        adBlockText: "txp-ui-adBlock-text",
                        adBlockTime: "txp-ui-adBlock-time",
                        adBlockUrl: "txp-ui-adBlock-url",
                        banTips: "txp-banTips-tips"
                    },
                    b = Txplayer.$.tmpl(f, a);
                this.context.dataset.$playermod.append(b), this.dataset.$dialog = this.context.dataset.$playermod.find('[data-role="' + a.dialog + '"]'), this.dataset.$dialogText = this.context.dataset.$playermod.find('[data-role="' + a.dialogText + '"]'), this.dataset.$dialogErrCode = this.context.dataset.$playermod.find('[data-role="' + a.dialogErrCode + '"]'), this.dataset.$dialogBtn = this.context.dataset.$playermod.find('[data-role="' + a.dialogBtn + '"]'), this.dataset.$adBlock = this.context.dataset.$playermod.find('[data-role="' + a.adBlock + '"]'), this.dataset.$adBlockText = this.context.dataset.$playermod.find('[data-role="' + a.adBlockText + '"]'), this.dataset.$adBlockTime = this.context.dataset.$playermod.find('[data-role="' + a.adBlockTime + '"]'), this.dataset.$adBlockUrl = this.context.dataset.$playermod.find('[data-role="' + a.adBlockUrl + '"]'), this.dataset.$banTips = this.context.dataset.$playermod.find('[data-role="' + a.banTips + '"]'), this.dataset.$banTipsClick = this.dataset.$banTips.find(".banTipsClick")
            }, remove: function () {
                this.dataset.$dialog.remove()
            }, hide: function () {
                this.dataset.$dialog.addClass(Txplayer.dataset.hideClass)
            }, hideAd: function () {
                this.dataset.$adBlock.addClass(Txplayer.dataset.hideClass)
            }, addEventListerner: function () {
                var a = this;
                this.dataset.$dialogBtn.on(Txplayer.dataset.clickEventName, function () {
                    window.location.reload()
                }), this.dataset.$banTipsClick.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        vid: a.context.dataset.vid
                    })
                }), this.dataset.eventsList = {}, this.dataset.eventsList[e.getUniqueMsgKey("videoPlaying")] = function () {
                    a.hide()
                }, this.dataset.eventsList[e.getUniqueMsgKey("vidChange")] = function () {
                    a.hide()
                }, this.dataset.eventsList[e.getUniqueMsgKey("error")] = function (b) {
                    b && "film" !== b.type && "cgi" !== b.type || a.showErrorUiTips(b)
                }, this.dataset.eventsList[e.getUniqueMsgKey("adError")] = function (b) {
                    a.isFirstTime()
                }, this.dataset.eventsList[e.getUniqueMsgKey("banError")] = function (b) {
                    a.showBanTips()
                }, Txplayer.$.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }, isFirstTime: function () {
                var a = this,
                    b = e.cookie.get("adBlock1st");
                if (b)
                    if (1 == b) {
                        e.cookie.set("adBlock1st", 2, "", "", 24), this.showAdErrorUiTips(), this.context.userMsg.broadcast("playStateChange", 3);
                        var c = 45,
                            d = setInterval(function () {
                                c > 0 ? a.dataset.$adBlockTime.text(c--) : (a.context.msg.broadcast("adBlockTipsFinish"), a.hideAd(), clearInterval(d))
                            }, 1e3)
                    } else this.dataset.$adBlockText.text("\u5e7f\u544a\u88ab\u62e6\u622a\u63d2\u4ef6\u8bef\u4f24\u4e86\uff0c\u89c6\u9891\u65e0\u6cd5\u64ad\u653e"), this.context.userMsg.broadcast("playStateChange", 3), this.showAdErrorUiTips();
                else e.cookie.set("adBlock1st", 1, "", "", 24), this.context.msg.broadcast("adBlockTipsFinish")
            }, showAdErrorUiTips: function () {
                this.dataset.$adBlock.removeClass(Txplayer.dataset.hideClass)
            }, showErrorUiTips: function (a) {
                var b = a.code + "";
                b && b.indexOf("_") > -1 && (b = b.split("_")[0]), this.dataset.$dialog.removeClass(Txplayer.dataset.hideClass), this.dataset.$dialogText.html(a.msg || Txplayer.errcode.defaultMsg), this.dataset.$dialogErrCode.html("\u9519\u8bef\u7801\uff1a" + [a.code, this.context.dataset.playerId].join(","))
            }, showBanTips: function () {
                this.dataset.$banTips.removeClass(Txplayer.dataset.hideClass)
            }
        }, Txplayer.register("H5UiErrorShow", d)
    }, 88: function (a, b) {
        a.exports = '<txpdiv data-role="<%=dialog%>" class="txp_overlay_error <%=hide%>">\n\t<div data-role="<%=dialogText%>" class="txp_error_title"></div>\n\t<div data-role="<%=dialogErrCode%>" class="txp_error_desc"></div>\n\t<a href="<%=url%>" target="_blank" class="txp_btn_em">\u770b\u770b\u522b\u7684\u89c6\u9891</a>\n\t<a class="txp_replay" data-role="<%=dialogBtn%>" href="javascript:;">\n\t\t<svg class="txp_icon txp_icon_replay" viewBox="0 0 30 30"><use class="txp_svg_replay" xlink:href="<%=svgPrefix%>#txp_svg_replay"></use></svg>\n\t\t<txpdiv class="txp_text">\u5237\u65b0\u91cd\u8bd5</txpdiv>\n\t</a>\n</txpdiv>\n<txpdiv data-role="<%=adBlock%>" class="txp_overlay_error <%=hide%>">\n\t<div data-role="<%=adBlockText%>" class="txp_error_title">\u5e7f\u544a\u88ab\u62e6\u622a\u63d2\u4ef6\u8bef\u4f24\u4e86\uff0c<span class="txp_error_em" data-role="<%=adBlockTime%>">45</span>\u79d2\u540e\u64ad\u653e</div>\n\t<div>\u5173\u95ed\u62e6\u622a\u63d2\u4ef6\u6062\u590d\u6b63\u5e38</div>\n\t<!--<a href="" target="_blank" class="txp_btn_em" data-role="<%=adBlockUrl%>">\u5173\u95ed\u62e6\u622a\u63d2\u4ef6\u6062\u590d\u6b63\u5e38</a>-->\n</txpdiv>\n<txpdiv data-role="<%=banTips%>" class="txp_overlay_error <%=hide%>" >\n    <div>\u5f53\u524d\u73af\u5883\u65e0\u6cd5\u89c2\u770b\uff0c\u8bf7\u6253\u5f00\u817e\u8baf\u89c6\u9891APP</div>\n    <div style="margin-top: 16px;\n    background: #FF6022;\n    height: 44px;\n    line-height: 44px;\n    padding: 0px 22px;\n    border-radius: 8px;" class="banTipsClick">\u6253\u5f00\u817e\u8baf\u89c6\u9891\u770b\u5b8c\u6574\u7248</div>\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(95)
    }, 95: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = (Txplayer.util, c(96)),
            g = "//i.gtimg.cn/qqlive/images/20170222/qing_224_70.png",
            h = {};
        d.prototype = {
            init: function () {
                this.dataset.useWatermark = !1, this.write(), this.addEventListerner()
            }, write: function () {
                var a = {
                    watermark: "txp-watermark"
                };
                this.dataset.renderData = a;
                var b = e.tmpl(f, a);
                this.context.dataset.$playermod.append(b), this.dataset.$watermark = this.context.dataset.$playermod.find('[data-role="' + a.watermark + '"]')
            }, show: function () {
                this.dataset.useWatermark && !this.dataset.notShow && this.dataset.$watermark.removeClass("txp_none")
            }, hide: function () {
                this.dataset.$watermark.addClass("txp_none")
            }, setWaterMark: function (a) {
                var b = this,
                    c = b.context.dataset.$playermod.height() / b.context.dataset.videoHeight,
                    d = b.context.dataset.$playermod.width() / b.context.dataset.videoWidth,
                    f = {};
                if (b.dataset.$watermark.empty(), a.length > 1) {
                    var g = a.length;
                    if (e.each(a, function (a, b) {
                        "fail" == h[b.url] && g--
                    }), 0 == g) return void b.setWaterMark(b.dataset.defaultMark)
                }
                e.each(a, function (e, g) {
                    f = {
                        x: g.x * d,
                        y: g.y * c,
                        h: g.h * d,
                        w: g.w * d,
                        url: g.surl || g.url || "//i.gtimg.cn/qqlive/images/20170222/qing_224_70.png"
                    }, b.dataset.$watermark.append(b.setSingleMark(f.x, f.y, f.h, f.w, f.url, a.length))
                })
            }, setSingleMark: function (a, b, c, d, f, i) {
                var j = e('<txpdiv class="txp_watermark"  style="position:absolute;z-index:3;background-size:contain;background-position:center;background-repeat:no-repeat;"></txpdiv>');
                j.css("right", a).css("top", b).css("width", d).css("height", c);
                var k = new Image;
                return k.onload = function () {
                    j.css("background-image", "url(" + f + ")"), h[f] = "success"
                }, k.onerror = function () {
                    1 == i && j.css("background-image", "url(" + g + ")"), h[f] = "fail"
                }, h[f] ? "success" == h[f] ? j.css("background-image", "url(" + f + ")") : 1 == i && j.css("background-image", "url(" + g + ")") : k.src = f, j
            }, getIndex: function (a, b) {
                var c = a.start,
                    d = 1e3 * (b - c),
                    f = a.list,
                    g = -1;
                return e.each(f, function (a) {
                    d >= f[a]["in"] && d <= f[a].out && (g = a)
                }), g
            }, checkImg: function () {}, initDynamic: function (a) {
                var b = this;
                e.ajax({
                    url: a.action,
                    dataType: "jsonp",
                    timeout: 5e3,
                    jsonpCallback: "txplayerJsonpCallBack_getwatermark"
                }).done(function (a) {
                    for (var c = b.context.dataset.continuePlayTime || 0, d = 0 == a.repeat ? Math.ceil((b.context.dataset.duration - a.start / 1e3) / (a.duration / 1e3)) : a.repeat, f = [], g = 0; g < d; g++) e.each(a.scenes, function (b, c) {
                        var d = {
                            "in": g * a.duration + c["in"],
                            out: g * a.duration + c.out,
                            wi: c.wi
                        };
                        f[g * a.scenes.length + b] = d
                    });
                    var h;
                    b.dataset.dynamicSetting = {
                        start: a.start / 1e3,
                        end: (a.start + a.duration) / 1e3,
                        current: 0,
                        list: f
                    }, h = b.getIndex(b.dataset.dynamicSetting, c), h > -1 && (b.setWaterMark(b.dataset.dynamicSetting.list[h].wi), b.dataset.dynamicSetting.current = h), b.context.msg.on("videoTimeUpdate.watermark", function (a) {
                        if (void 0 != b.context.dataset.currentTime) {
                            var c = b.getIndex(b.dataset.dynamicSetting, b.context.dataset.currentTime);
                            c > -1 ? (c != b.dataset.dynamicSetting.current && (b.dataset.dynamicSetting.current = c, b.dataset.$watermark.css("background-image", ""), b.setWaterMark(b.dataset.dynamicSetting.list[c].wi)), b.dataset.notShow && (b.dataset.notShow = !1, b.show())) : (!b.dataset.notShow && b.hide(), b.dataset.notShow = !0)
                        }
                    })
                }).fail(function () {
                    b.setWaterMark(a.wi)
                })
            }, addEventListerner: function () {
                var a = this;
                this.context.msg.on("getWatermarkSuccess", function (b) {
                    a.dataset.useWatermark = !0, a.dataset.defaultMark = b.wi, b.action ? a.initDynamic(b) : a.setWaterMark(b.wi)
                }), this.context.msg.on("vidChange", function () {
                    a.dataset.useWatermark = !1, a.context.msg.off("videoTimeUpdate.watermark")
                }), this.context.msg.on("playStateChange", function (b) {
                    1 == b || 3 == b || 2 == b ? a.show() : a.hide()
                })
            }
        }, Txplayer.register("H5UILogo", d)
    }, 96: function (a, b) {
        a.exports = '<txpdiv data-role="<%=watermark%>" style="position: absolute;width: 100%;height: 100%;overflow: hidden;left:0;top:0;">\n</txpdiv>\n'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(124)
    }, 68: function (a, b) {
        var c = {
                unstarted: -1,
                ended: 0,
                playing: 1,
                paused: 2,
                buffering: 3,
                cued: 4,
                stop: 5
            },
            d = {
                msd: "\u6d41\u7545180P",
                sd: "\u6807\u6e05270P",
                hd: "\u9ad8\u6e05480P",
                shd: "\u8d85\u6e05720P",
                fhd: "\u84dd\u51491080P",
                uhd: "4K"
            };
        a.exports = {
            playerstate: c,
            definitionMap: d
        }
    }, 124: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util;
        c(68).definitionMap;
        d.prototype = {
            init: function () {
                var a = this;
                this.dataset.dataKey = Txplayer.dataset.localStorageKey.playTime, this.dataset.videoPlayedIndex = 0, this.resetDataset(), this.addEventListener(), this.exportsModuleApis(), f.getQQLiveDeviceInfo(function (b) {
                    b && (a.dataset.commonExtInfo = b)
                })
            }, resetDataset: function () {
                if (this.dataset.isGetinfoDone) {
                    var a = ["commonExtInfo", "videoPlayedIndex", "isGetinfoDone", "dataKey", "prevDefinition", "setDefinitionStartTime", "hasReportLoadingadLoadTime", "filmFirstPlayingTime"];
                    for (var b in this.dataset) e.inArray(b, a) > -1 || ("realPlayTime_TIMER" !== b && "totalPlayTime_TIMER" !== b || clearInterval(this.dataset[b]), delete this.dataset[b])
                }
            }, resetDatasetOnVidChange: function () {
                var a = ["hasGetVplayPageRecoReport", "isGetinfoDone", "setDefinitionStartTime", "hasReportLoadingadLoadTime", "filmFirstPlayingTime", "timeupdateCounter"],
                    b = this;
                e.each(a, function (a, c) {
                    delete b.dataset[c]
                })
            }, getVplayPageRecoReport: function () {
                try {
                    var a = sessionStorage.getItem("report_recomm_player");
                    a ? Txplayer.dataset.vplayPageRecoReport = a : "coolOpen" === this.context.config.playerType && (Txplayer.dataset.vplayPageRecoReport = a), sessionStorage.removeItem("report_recomm_player")
                } catch (b) {}
            }, getDefaultReportData: function () {
                var a = this;
                !this.dataset.hasGetVplayPageRecoReport && this.context.config.reportRecomm && (this.dataset.hasGetVplayPageRecoReport = !0, "coolOpen" === this.context.config.playerType ? setTimeout(function () {
                    a.getVplayPageRecoReport()
                }) : this.getVplayPageRecoReport());
                var b = {
                    uin: Txplayer.util.getQQFromCookie(),
                    vid: this.context.dataset.vid || "",
                    coverid: this.context.dataset.cid || "",
                    pid: this.context.dataset.playerId || "",
                    guid: this.context.dataset.guid || "",
                    cmid: this.context.dataset.guid || "",
                    unid: this.context.dataset.unid || "",
                    vt: this.getCDNChannelId(),
                    type: this.getBusinessType(),
                    url: document.URL,
                    bi: this.getCurrentVideoDuration(),
                    bt: this.context.dataset.duration || "",
                    version: Txplayer.dataset.ver || "",
                    platform: this.context.dataset.platform,
                    format: this.context.dataset.currentDefinitionFormat || "",
                    defn: this.context.dataset.definition || "",
                    ctime: f.dateFormat(),
                    ptag: f.getPTAG(),
                    isvip: -1,
                    tpid: this.context.dataset.tpid || "",
                    pversion: this.context.config.playerType,
                    hc_uin: Txplayer.util.getQQFromCookie(),
                    hc_main_login: Txplayer.util.cookie.get("main_login"),
                    hc_vuserid: Txplayer.util.cookie.get("vuserid"),
                    hc_openid: Txplayer.util.cookie.get("openid"),
                    hc_appid: Txplayer.util.cookie.get("appid"),
                    hc_pvid: Txplayer.util.cookie.get("pgv_pvid"),
                    hc_ssid: Txplayer.util.cookie.get("psessionid"),
                    hc_qq: Txplayer.util.getQQFromCookie(),
                    hh_ua: f.getReportUA(),
                    ua: f.getReportUA(),
                    ckey: this.context.dataset.ckey || "",
                    iformat: this.context.dataset.currentDefinitionFormat || "",
                    hh_ref: f.getTopFrameUrl(),
                    vuid: Txplayer.util.cookie.get("vuserid"),
                    vsession: Txplayer.util.cookie.get("vusession"),
                    format_ua: f.getFormatUA(),
                    common_rcd_info: this.context.config.common_rcd_info || "",
                    common_ext_info: this.context.config.common_ext_info || this.dataset.commonExtInfo || ""
                };
                return b.v_idx = this.dataset.videoPlayedIndex || 0, b.rcd_info = Txplayer.dataset.vplayPageRecoReport || "", b.extrainfo = this.context.config.extrainfo || "", this.context && this.context.config && "function" === e.type(this.context.config.getUserType) && (b.isvip = 2 == this.context.config.getUserType() ? 1 : 0), this.context.dataset.useHls || (b.vurl = this.context.dataset.currentVideoUrl || ""), b
            }, reportStep3: function (a) {
                var b = {
                        step: 3,
                        val: 0 === this.context.dataset.connectionPlayType ? 1 : 2,
                        idx: this.context.dataset.connectionPlayType,
                        c_info: this.context.config.getOuterReportData()
                    },
                    c = {
                        width: this.context.dataset.playerWidth,
                        height: this.context.dataset.playerHeight
                    };
                c && c.width && c.height && (b.diagonal = parseInt(Math.sqrt(Math.pow(c.width, 2) + Math.pow(c.height, 2)))), b.isfocustab = this.context.dataset.isWindowFocus, b.isvisible = this.context.msg.getData("isPlayerInScreen"), b.isfocustab = b.isfocustab ? 1 : 0, b.isvisible = b.isvisible ? 1 : 0, this.doBossReport(b)
            }, reportStep4: function () {
                var a = {
                        step: 4,
                        val: this.context.msg.getData("calcTotalPlaylist", "film"),
                        val1: 1,
                        bi: this.context.dataset.hasOwnProperty("isPlayingAd") ? 2 : 1,
                        idx: this.context.dataset.connectionPlayType,
                        c_info: this.context.config.getOuterReportData()
                    },
                    b = {
                        width: this.context.dataset.playerWidth,
                        height: this.context.dataset.playerHeight
                    };
                b && b.width && b.height && (a.diagonal = parseInt(Math.sqrt(Math.pow(b.width, 2) + Math.pow(b.height, 2)))), a.isfocustab = this.context.dataset.isWindowFocus, a.isvisible = this.context.msg.getData("isPlayerInScreen"), a.isfocustab = a.isfocustab ? 1 : 0, a.isvisible = a.isvisible ? 1 : 0, a.reportFrom = this.context.config.reportFrom, this.doBossReport(a)
            }, reportStep5: function (a) {
                a = a || {};
                var b;
                a.isEnd ? b = {
                    step: 5,
                    val: 1e3 * a.realtime,
                    val1: a.isEnd ? 1 : 2,
                    bi: a.totaltime
                } : (b = a, b.val1 = a.isEnd ? 1 : 2, b.val = 1e3 * a.realtime, b.bi = a.totaltime, b.step = 5, delete b.isEnd, delete b.realtime, delete b.totaltime), b.idx = this.context.dataset.connectionPlayType;
                var c = {
                    width: this.context.dataset.playerWidth,
                    height: this.context.dataset.playerHeight
                };
                c && c.width && c.height && (b.diagonal = parseInt(Math.sqrt(Math.pow(c.width, 2) + Math.pow(c.height, 2)))), a.vid && (b.vid = a.vid), b.isfocustab = this.context.dataset.isWindowFocus, b.isvisible = this.context.msg.getData("isPlayerInScreen"), b.isfocustab = b.isfocustab ? 1 : 0, b.isvisible = b.isvisible ? 1 : 0, b.c_info = this.context.config.getOuterReportData(), this.doBossReport(b)
            }, reportStep6: function (a) {
                var b = {
                        step: 6,
                        val: a.firstLoadTime,
                        val1: a.loadingAdStatus,
                        val2: 1,
                        idx: this.context.dataset.connectionPlayType,
                        bi: "",
                        bt: "",
                        c_info: this.context.config.getOuterReportData()
                    },
                    c = {
                        width: this.context.dataset.playerWidth,
                        height: this.context.dataset.playerHeight
                    };
                c && c.width && c.height && (b.diagonal = parseInt(Math.sqrt(Math.pow(c.width, 2) + Math.pow(c.height, 2)))), b.isfocustab = this.context.dataset.isWindowFocus, b.isvisible = this.context.msg.getData("isPlayerInScreen"), b.isfocustab = b.isfocustab ? 1 : 0, b.isvisible = b.isvisible ? 1 : 0, "number" === e.type(this.dataset.firstLoadingadEndTime) && "number" === e.type(this.dataset.loadingadProgressedTime) && (b.bi = this.dataset.firstLoadingadEndTime - this.dataset.loadingadProgressedTime), this.doBossReport(b)
            }, reportStep7: function (a) {
                var b = {
                    step: 7,
                    val: 0,
                    val1: 0,
                    idx: this.context.dataset.connectionPlayType,
                    c_info: this.context.config.getOuterReportData()
                };
                this.doBossReport(b)
            }, reportStep70: function (a) {
                var b = {
                    step: 70,
                    val: a
                };
                this.doBossReport(b)
            }, reportStep30: function (a) {
                var b = {
                    step: 30,
                    val: a.loadTime,
                    val1: a.hasOwnProperty("val1") ? a.val1 : 0,
                    val2: 2,
                    bi: this.context.dataset.videoDuration
                };
                this.context.dataset.useHls ? b.val2 = 3 : "html5hd" === this.context.config.playerType ? b.val2 = 1 : "ipadh5" !== this.context.config.playerType && "h5" !== this.context.config.playerType || (b.val2 = 2), this.doBossReport(b)
            }, reportStep50: function (a) {
                var b = {
                    step: 50,
                    val: a.loadTime || "",
                    val1: a.hasOwnProperty("val1") ? a.val1 : 0,
                    val2: 1,
                    bi: this.context.dataset.videoDuration
                };
                this.context.dataset.useHls ? b.val2 = 3 : "html5hd" === this.context.config.playerType ? b.val2 = 1 : "ipadhtml5" !== this.context.config.playerType && "h5" !== this.context.config.playerType || (b.val2 = 2), this.doBossReport(b)
            }, reportStep60: function (a) {
                var b = {
                    step: 60,
                    val: a.seekCostTime,
                    val1: a.hasOwnProperty("val1") ? a.val1 : 0,
                    val2: 1,
                    bi: this.context.dataset.videoDuration
                };
                this.context.dataset.useHls ? b.val2 = 3 : "html5hd" === this.context.config.playerType ? b.val2 = 1 : "ipadh5" !== this.context.config.playerType && "h5" !== this.context.config.playerType || (b.val2 = 2), this.doBossReport(b)
            }, reportStep31_51: function (a) {
                if (a.hasOwnProperty("waitingTime")) {
                    var b = a.waitingTime > 1e4;
                    a.waitingTime = b ? 1e4 : a.waitingTime;
                    var c = {
                        step: a.step,
                        val: a.waitingTime,
                        val1: b,
                        val2: 1,
                        bi: this.context.dataset.videoDuration || this.context.dataset.duration,
                        bt: this.context.dataset.duration
                    };
                    this.context.dataset.useHls ? c.val2 = 3 : "html5hd" === this.context.config.playerType ? c.val2 = 1 : "ipadh5" !== this.context.config.playerType && "h5" !== this.context.config.playerType || (c.val2 = 2), this.doBossReport(c)
                }
            }, reportStep35: function (a) {
                a = a || {};
                var b;
                "number" !== e.type(this.dataset.filmFirstPlayingTime) || "number" !== e.type(this.dataset.loadingadEndTime) && "number" !== e.type(this.dataset.filmFirstPlayTime) || (b = this.dataset.filmFirstPlayingTime - (this.dataset.loadingadEndTime || this.dataset.filmFirstPlayTime));
                var c = {
                    step: 35,
                    val: a.swtichTime || b,
                    val1: "",
                    val2: this.context.dataset.adDuration || 0,
                    bi: this.context.dataset.videoDuration
                };
                "number" === e.type(this.context.dataset.preloadStartTime) && "number" === e.type(this.dataset.loadingadEndTime) && (c.val1 = this.dataset.loadingadEndTime - this.context.dataset.preloadStartTime), this.doBossReport(c)
            }, reportStep55: function (a) {
                var b = {
                    step: 55,
                    val: a.swtichTime,
                    val1: "",
                    val2: a.prevFilmDuration,
                    bi: this.context.dataset.videoDuration
                };
                this.doBossReport(b)
            }, reportStep100: function (a) {
                var b = {
                    step: 100,
                    val: a.costTime,
                    val1: a.val1,
                    val2: 1,
                    bi: this.context.dataset.videoDuration,
                    predefn: a.predefn
                };
                this.context.dataset.useHls ? b.val2 = 3 : "html5hd" === this.context.config.playerType ? b.val2 = 1 : "ipadh5" !== this.context.config.playerType && "h5" !== this.context.config.playerType || (b.val2 = 2), this.doBossReport(b)
            }, reportStep1011: function (a) {
                var b = {
                    step: "1011",
                    val1: 0,
                    val2: 0,
                    vt: 0
                };
                b.val = a.costTime, a.err ? a.code ? (b.val1 = 3, b.val2 = a.code) : (b.val1 = 2, b.val2 = 444) : b.val1 = 1, this.doBossReport(b)
            }, reportStep1003: function (a) {
                var b = {
                    step: "1003",
                    val1: 0,
                    val2: 0,
                    vt: 0
                };
                b.val = a.costTime, a.err ? a.code ? (b.val1 = 3, b.val2 = a.code) : a.code || !a.filename || a.key ? (b.val1 = 2, b.val2 = 445) : (b.val1 = 4, b.val2 = 445) : b.val1 = 1, this.doBossReport(b)
            }, getCDNChannelId: function () {
                var a = this.context.dataset.filmVideoData,
                    b = this.context.msg.getData("getPlayListIndex", "film");
                return a && a[b] ? a[b].vt : ""
            }, getCurrentVideoDuration: function () {
                var a = this.context.dataset.filmVideoData,
                    b = this.context.msg.getData("getPlayListIndex", "film");
                return a && a[b] ? a[b].duration : ""
            }, getBusinessType: function () {
                var a = this.context.dataset.getinfoJSON;
                return a && a.vl && a.vl.vi && a.vl.vi[0] && "object" === e.type(a.vl.vi[0]) && a.vl.vi[0].hasOwnProperty("type") ? a.vl.vi[0].type : ""
            }, doBossReport: function (a) {
                var b, c, d = {};
                d = e.extend(this.getDefaultReportData(), a), d && d.bi && (d.bi = parseInt(d.bi)), d && d.bt && (d.bt = parseInt(d.bt)), "html5hd" !== this.context.config.playerType && f.mobile ? "ipadh5" === this.context.config.playerType || f.os.ipad ? (b = "4299", c = "694498052") : "h5" === this.context.config.playerType || f.os.android || f.os.ios ? (b = "2865", c = "1698957057") : (b = "2865", c = "1698957057") : (b = "4298", c = "686148428"), "4298" !== b && "2865" !== b || (d.cpay = this.context.dataset.isNeedPay ? 1 : 0, d.tpay = this.context.dataset.userPayStatus || 0, d.dltype = this.context.dataset.useHls ? this.context.dataset.dltype || 3 : 1);
                var g = "//btrace.video.qq.com/kvcollect?BossId={bossid}&Pwd={pwd}".replace("{bossid}", b).replace("{pwd}", c);
                d.common_rcd_info || d.common_ext_info ? f.strongReport({
                    url: g,
                    data: d,
                    withCredentials: !0
                }) : (g += "&" + e.param(d), f.report(g, this.context.config.unblockReport))
            }, playTimeHeartBeatStart: function () {
                var a = this;
                this.dataset.realPlayTime_TIMER || (this.dataset.realPlayTime_TIMER = setInterval(function () {
                    a.dataset.realPlayTime || (a.dataset.realPlayTime = 0), a.dataset.realPlayTime += 5, a.saveData()
                }, 5e3)), this.dataset.totalPlayTime_TIMER || (this.dataset.totalPlayTime_TIMER = setInterval(function () {
                    a.dataset.totalPlayTime || (a.dataset.totalPlayTime = 0), a.dataset.totalPlayTime += 5, a.context.dataset.userTotalPlayedTime = a.dataset.totalPlayTime
                }, 5e3))
            }, playTimeHeartBeatStop: function (a) {
                clearInterval(this.dataset.totalPlayTime_TIMER), delete this.dataset.totalPlayTime_TIMER, a && (clearInterval(this.dataset.realPlayTime_TIMER), delete this.dataset.realPlayTime_TIMER)
            }, saveData: function () {
                var a, b = f.getData(this.dataset.dataKey),
                    c = this.context.dataset.vid;
                if (b) try {
                    a = JSON.parse(b)
                } catch (d) {
                    a = {}
                } else a = {};
                return c ? (a[c] = {
                    lastupdate: +new Date,
                    realtime: this.dataset.realPlayTime,
                    totaltime: this.dataset.totalPlayTime
                }, a[c] = e.extend(this.getDefaultReportData(), a[c]), void f.setData(this.dataset.dataKey, JSON.stringify(a))) : void f.showError("saveData Error", "\u627e\u4e0d\u5230vid")
            }, getData: function () {
                var a, b = f.getData(this.dataset.dataKey),
                    c = this.context.dataset.vid;
                if (b) try {
                    a = JSON.parse(b)
                } catch (d) {
                    a = {}
                } else a = {};
                return c ? a[c] : void f.showError("getData Error", "\u627e\u4e0d\u5230vid")
            }, clearData: function (a) {
                var b, c = f.getData(this.dataset.dataKey);
                if (a = a || this.context.dataset.vid, c) try {
                    b = JSON.parse(c)
                } catch (d) {
                    b = {}
                } else b = {};
                return a ? (b[a] && delete b[a], void f.setData(this.dataset.dataKey, JSON.stringify(b))) : void f.showError("clearData Error", "\u627e\u4e0d\u5230vid")
            }, reportPlayTimeWhenPageInit: function () {
                var a, b = f.getData(this.dataset.dataKey),
                    c = this,
                    d = function (a, b) {
                        if (a) {
                            var d = parseInt(+new Date / 1e3),
                                e = parseInt(parseInt(a.lastupdate) / 1e3);
                            d - e <= 180 || (a.isEnd = !1, c.reportStep5(a), c.clearData(b))
                        }
                    };
                try {
                    a = JSON.parse(b)
                } catch (e) {
                    a = {}
                }
                for (var g in a) d(a[g], g)
            }, reportPlayTimeOnEnded: function () {
                var a, b = f.getData(this.dataset.dataKey),
                    c = this,
                    d = this.context.dataset.vid,
                    e = function (a, b) {
                        a = a && a[b] ? a[b] : null, a && (a.isEnd = !0, c.reportStep5(a), c.clearData(b))
                    };
                try {
                    a = JSON.parse(b)
                } catch (g) {
                    a = {}
                }
                e(a, d)
            }, reportPlayTimeOnBeforeVideoPlay: function (a) {
                if (a) {
                    var b, c = f.getData(this.dataset.dataKey),
                        d = this,
                        e = a,
                        g = function (a, b) {
                            a = a && a[b] ? a[b] : null, a && (a.vid = b, a.isEnd = !0, d.reportStep5(a), d.clearData(b))
                        };
                    try {
                        b = JSON.parse(c)
                    } catch (h) {
                        b = {}
                    }
                    g(b, e)
                }
            }, getVideoAreaLevel: function () {
                var a = this.context.dataset.getinfoJSON;
                return a && a.vl && a.vl.vi && a.vl.vi.length && a.vl.vi[0] ? a.vl.vi[0].level : ""
            }, reportLoginUserPlayTime: function (a) {
                if (a = a || !1, "v.qq.com" === location.hostname || "film.qq.com" === location.hostname) {
                    var b;
                    if (this.context.config && "function" === e.type(this.context.config.getUserType)) try {
                        b = this.context.config.getUserType()
                    } catch (c) {}
                    "number" !== e.type(b) || b <= 0 || this.context.msg.broadcast("reportLoginUserPlayTime", {
                        isend: a
                    })
                }
            }, getReport6Status: function () {
                return this.context.dataset.isLoadingAdEmpty || !this.context.dataset.hasOwnProperty("isPlayingAd") ? 1 : this.dataset.isFilmBuffered ? 2 : 3
            }, reportIrs: function () {
                var a = this.context.config.playerType || "";
                if (a = a.toLowerCase(), f.inArray(["h5", "h5tiny"], a) === -1 && ("v.qq.com" === location.hostname || "film.qq.com" === location.hostname)) {
                    var b = new Image(1, 1);
                    this.context.dataset.vid && (b.src = "//v12-" + this.context.dataset.vid.toLowerCase() + ".z.irs01.com?p=v12&ts=" + +new Date)
                }
            }, addEventListener: function () {
                var a = this;
                this.context.msg.on("beforeVideoPlay", function (b, c) {
                    b = b || {}, a.reportStep3(b.isNewPlay), a.reportIrs(), a.reportPlayTimeOnBeforeVideoPlay(c)
                }), this.context.msg.on("vidChange", function (b, c) {
                    a.resetDataset(), a.dataset.videoPlayedIndex++
                }), this.context.msg.on("getVideoUrlSuccess", function (b, c) {
                    a.resetDataset(), setTimeout(function () {
                        a.reportStep4(), a.dataset.isGetinfoDone = !0, a.context.dataset.reportVideoLevel = a.getVideoAreaLevel(), a.context.dataset.reportCDNChannelId = a.getCDNChannelId(), a.context.dataset.reportBusinessType = a.getBusinessType()
                    }, 0)
                }), this.context.msg.on("vidChange", function () {
                    a.resetDatasetOnVidChange()
                }), this.context.msg.on("videoPause", function () {
                    a.context.dataset.isPlayingAd || a.playTimeHeartBeatStop()
                }), this.context.msg.on("videoPlay", function (b) {
                    b && "loadingad" === b.playListType && (a.dataset.loadingadPlayTime || (a.dataset.loadingadPlayTime = +new Date)), "film" !== b.playListType || 0 !== b.index || a.dataset.filmFirstPlayTime || (a.dataset.filmFirstPlayTime = +new Date), "film" === b.playListType && b.index > 0 && (a.dataset.filmPlayTime || (a.dataset.filmPlayTime = {}), a.dataset.filmPlayTime[b.index] || (a.dataset.filmPlayTime[b.index] = +new Date))
                }), this.context.msg.on("videoPlaying", function (b) {
                    b && "film" === b.playListType && (a.dataset.filmFirstPlayingTime || (a.dataset.filmFirstPlayingTime = +new Date, a.reportStep6({
                        firstLoadTime: a.dataset.filmFirstPlayingTime - a.dataset.filmFirstPlayTime,
                        loadingAdStatus: a.getReport6Status()
                    }), a.reportStep35())), b && "film" === b.playListType && a.playTimeHeartBeatStart(), b && "loadingad" === b.playListType && (a.dataset.loadingadPlayingTime || (a.dataset.loadingadPlayingTime = +new Date, a.reportStep7())), b && "film" === b.playListType && 0 === b.index && !a.dataset.filmPlayingTime && a.dataset.filmFirstPlayTime && (a.dataset.filmPlayingTime = +new Date, a.reportStep30({
                        loadTime: a.dataset.filmPlayingTime - (a.dataset.preloadStartTime || a.dataset.filmFirstPlayTime)
                    })), b && "film" === b.playListType && b.index > 0 && a.dataset.filmPlayTime && (a.dataset.filmPlayingTime || (a.dataset.filmPlayingTime = {}), a.dataset.filmPlayingTime[b.index] || (a.dataset.filmPlayingTime[b.index] = +new Date, a.reportStep50({
                        loadTime: a.dataset.filmPlayingTime[b.index] - a.dataset.filmPlayTime[b.index]
                    })))
                }), this.context.msg.on("videoProgressDone", function (b) {
                    !a.dataset.hasOwnProperty("loadingadProgressedTime") && b && "loadingad" === b.playListType && (a.dataset.loadingadProgressedTime = +new Date)
                }), this.context.msg.on("videoWaiting", function (b) {
                    if (!a.context.dataset.isPlayingAd && !("film" !== b.playListType || b && b.videoTag && 0 === b.videoTag.buffered.length)) {
                        var c = a.context.dataset.isVideoSeeking;
                        if (!c && !b.seeking && (a.dataset.waitingTimes || (a.dataset.waitingTimes = 0), 1 !== a.dataset.waitingTimes)) {
                            a.dataset.waitingTimes++;
                            var d, e = "videoTimeUpdate.waiting_report",
                                f = +new Date;
                            a.context.msg.off(e), a.context.msg.once(e, function () {
                                var c;
                                d = +new Date, c = 0 === b.index ? 31 : 51, a.reportStep31_51({
                                    step: c,
                                    waitingTime: d - f
                                })
                            })
                        }
                    }
                }), this.context.msg.on("networkBadStart", function (b) {
                    if ("film" === b.playListType && !b.isOnWaiting) {
                        var c = a.context.dataset.isVideoSeeking;
                        if (!c) {
                            a.dataset.waitingTimes ? a.dataset.waitingTimes++ : a.dataset.waitingTimes = 1;
                            var d, e = "networkBadEnd.waiting_report",
                                f = +new Date;
                            a.context.msg.off(e), a.context.msg.once(e, function () {
                                var c;
                                d = +new Date, c = 0 === b.index ? 31 : 51, a.reportStep31_51({
                                    step: c,
                                    waitingTime: d - f
                                })
                            })
                        }
                    }
                }), this.context.msg.on("videoEnd", function (b) {
                    if ("film" === b.playListType && (a.dataset.waitingTimes = 0), b.playListTypeEnd && "loadingad" === b.playListType && (a.dataset.loadingadEndTime = +new Date), "film" === b.playListType && !b.playListTypeEnd) {
                        var c, d = +new Date,
                            e = b.videoTag.duration || a.context.dataset.videoDuration;
                        a.context.msg.once("videoPlaying.switch_film_section_report", function () {
                            c = +new Date, a.reportStep55({
                                swtichTime: c - d,
                                prevFilmDuration: e
                            })
                        })
                    }
                    "film" === b.playListType && b.playListTypeEnd && (a.playTimeHeartBeatStop(!0), a.reportPlayTimeOnEnded(), a.reportLoginUserPlayTime(!0)), a.dataset.hasOwnProperty("firstLoadingadEndTime") || "loadingad" !== b.playListType || (a.dataset.firstLoadingadEndTime = +new Date)
                }), this.context.msg.on("videoTimeUpdate", function (b) {
                    b && "film" === b.playListType && (a.dataset.timeupdateCounter ? a.dataset.timeupdateCounter += 1 : a.dataset.timeupdateCounter = 1, a.dataset.timeupdateCounter % 300 === 0 && a.reportLoginUserPlayTime(!1)), b && "loadingad" === b.playListType && (a.dataset.isFilmBuffered || (a.dataset.isFilmBuffered = a.context.msg.getData("isPreloadVideoBuffered")))
                }), this.context.msg.on("getinfoFinish", function (b) {
                    b = b || {}, a.reportStep1011(b)
                }), this.context.msg.on("getkeyStart", function () {
                    a.dataset.getkeyStartTime = +new Date
                }), this.context.msg.on("getkeyFinish", function (b) {
                    b = b || {}, a.dataset.getkeyEndTime = +new Date, a.reportStep1003(b)
                }), this.context.msg.on("ready", function () {
                    a.reportPlayTimeWhenPageInit()
                }), this.context.msg.on("seekStart", function () {
                    a.dataset.filmSeekStartTime = +new Date
                }), this.context.msg.on("seekEnd", function () {
                    a.dataset.filmSeekEndTime = +new Date, a.reportStep60({
                        seekCostTime: a.dataset.filmSeekEndTime - a.dataset.filmSeekStartTime
                    })
                }), this.context.msg.on("seekFail", function () {
                    a.dataset.filmSeekFailTime = +new Date, a.reportStep60({
                        val1: 1,
                        seekCostTime: a.dataset.filmSeekFailTime - a.dataset.filmSeekStartTime
                    })
                }), this.context.msg.on("setDefinitionStart", function () {
                    a.dataset.setDefinitionStartTime = +new Date, a.dataset.prevDefinition = a.context.dataset.duration
                }), this.context.msg.on("setDefinitionDone", function () {
                    a.dataset.setDefinitionDoneTime = +new Date, a.reportStep100({
                        costTime: a.dataset.setDefinitionDoneTime - a.dataset.setDefinitionStartTime,
                        val1: 2,
                        predefn: a.dataset.prevDefinition
                    })
                }), this.context.msg.on("setDefinitionFail", function (b) {
                    a.dataset.setDefinitionFailTime = +new Date, a.reportStep100({
                        costTime: a.dataset.setDefinitionFailTime - a.dataset.setDefinitionStartTime,
                        val1: 3,
                        predefn: a.dataset.prevDefinition
                    })
                }), this.context.msg.on("videoPlay", function (b) {
                    if (b = b || {}, !b || "film" === b.playListType) {
                        var c = +new Date;
                        a.dataset.hasOwnProperty("_1_bufferFailTime") || 0 !== b.index || (a.context.msg.off("error._1_bufferFailTime"), a.context.msg.once("error._1_bufferFailTime", function (b) {
                            a.context.msg.off("videoPlaying._1_bufferFailTime"), a.dataset._1_bufferFailTime = +new Date, a.reportStep30({
                                loadTime: a.dataset._1_bufferFailTime - c,
                                val1: 1
                            })
                        }), a.context.msg.once("videoPlaying._1_bufferFailTime", function () {
                            a.context.msg.off("error._1_bufferFailTime")
                        })), !a.dataset.hasOwnProperty("_2_bufferFailTime") && b.index > 0 && (a.context.msg.once("error._2_bufferFailTime", function (b) {
                            a.context.msg.off("videoPlaying._2_bufferFailTime"), a.dataset._2_bufferFailTime = +new Date, a.reportStep50({
                                loadTime: a.dataset._2_bufferFailTime - c,
                                val1: 1
                            })
                        }), a.context.msg.once("videoPlaying._2_bufferFailTime", function () {
                            a.context.msg.off("error._2_bufferFailTime")
                        }))
                    }
                })
            }, setExtrainfo: function (a) {
                this.context.config.extrainfo = a || ""
            }, setCommonRcdInfo: function (a) {
                this.context.config.common_rcd_info = a || ""
            }, setCommonExtInfo: function (a) {
                this.context.config.common_ext_info = a || ""
            }, exportsModuleApis: function () {
                this.dataset.moduleApis = {}, this.dataset.moduleApis.setExtrainfo = this.setExtrainfo.bind(this), this.dataset.moduleApis.setCommonRcdInfo = this.setCommonRcdInfo.bind(this), this.dataset.moduleApis.setCommonExtInfo = this.setCommonExtInfo.bind(this), e.extend(this.context.userApi, this.dataset.moduleApis)
            }
        }, Txplayer.register("HdPlayerReport", d)
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(64)
    }, 64: function (module, exports) {
        ! function (a) {
            function b(d) {
                if (c[d]) return c[d].exports;
                var e = c[d] = {
                    exports: {},
                    id: d,
                    loaded: !1
                };
                return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
            }
            var c = {};
            return b.m = a, b.c = c, b.p = "", b(0)
        }([
            function (a, b, c) {
                c(1), c(2), c(4), c(5), c(6), a.exports = c(7)
            },
            function (a, b) {
                function c(a) {
                    this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
                }
                var d = Txplayer.util;
                c.prototype = {
                    init: function () {
                        this.loadSubPlugins()
                    }, loadSubPlugins: function () {
                        var a = ["HdPlayerAd", "HdPlayerAdReport", "UiPlayerAd", "YaliuPlayer", "ViewMonitor"],
                            b = {
                                superMsg: this.context.msg,
                                userMsg: this.context.userMsg,
                                msg: this.context.msg,
                                $mod: {
                                    $playermod: this.context.dataset.$playermod,
                                    $progressmod: this.context.dataset.$progressmod,
                                    $buttonsleftmod: this.context.dataset.$buttonsleftmod,
                                    $buttonsrightmod: this.context.dataset.$buttonsrightmod
                                },
                                gpApi: {
                                    isPrepLoad: !1,
                                    currentVid: "",
                                    nextVid: "",
                                    videoAdList: {},
                                    adtypeMap: {},
                                    adType2VideoType: {
                                        "\u524d\u8d34": "loadingad",
                                        "\u4e2d\u63d2": "insertad",
                                        "\u540e\u8d34": "endingad"
                                    },
                                    videoType2AdType: {
                                        loadingad: "\u524d\u8d34",
                                        insertad: "\u4e2d\u63d2",
                                        endingad: "\u540e\u8d34"
                                    }
                                }
                            };
                        Txplayer.$.extend(b, this.context), d.loadPlugins.call(this, a, b, this.context.config.settings)
                    }
                }, Txplayer.register("H5PlayerAd", c)
            },
            function (module, exports, __webpack_require__) {
                function UiPlayerAd(a) {
                    $ = Txplayer.$, this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
                }
                var $ = Txplayer.$,
                    util = Txplayer.util,
                    api = Txplayer.apiList,
                    htmlstr = __webpack_require__(3);
                UiPlayerAd.prototype = {
                    init: function () {
                        this.dataset.muteClass = "txp_btn_ad_mute", this.write(), this.addEventListener(), this.exportsModuleApis()
                    }, write: function () {
                        var a = {
                            hideClass: Txplayer.dataset.hideClass,
                            noSkipTipsText: "\u4e3a\u4e86\u7ed9\u817e\u8baf\u89c6\u9891\u7528\u6237\u63d0\u4f9b\u66f4\u591a\u4f18\u8d28\u7f8e\u5267\uff0c\u5e94\u7248\u6743\u65b9\uff08\u534e\u7eb3\uff09\u8981\u6c42\uff0c\u597d\u83b1\u575e\u4f1a\u5458\u5728\u89c2\u770b\u534e\u7eb3\u7f8e\u5267\u65f6\u65e0\u6cd5\u8df3\u8fc7\u5e7f\u544a\uff08\u300a\u5438\u8840\u9b3c\u65e5\u8bb0\u300b\u300a\u7834\u4ea7\u59d0\u59b9\u300b\u300a\u65e0\u803b\u4e4b\u5f92\u300b\u7b49\uff09\u3002\u6211\u4eec\u4f1a\u4e3a\u4f1a\u5458\u7528\u6237\u7ee7\u7eed\u4e89\u53d6\u514d\u5e7f\u544a\u6743\u76ca\uff0c\u8bf7\u60a8\u8c05\u89e3\uff0c\u8c22\u8c22\uff01",
                            noSkipTipsTextMobile: "\u4e3a\u4e86\u7ed9\u817e\u8baf\u89c6\u9891\u7528\u6237\u63d0\u4f9b\u66f4\u591a\u4f18\u8d28\u5f71\u7247\uff0c\u5e94\u7248\u6743\u65b9\u8981\u6c42\uff0cVIP\u7528\u6237\u5728\u89c2\u770b\u8be5\u7248\u5f71\u7247\u65f6\u65e0\u6cd5\u514d\u5e7f\u544a\u3002\u6211\u4eec\u4f1a\u4e3aVIP\u7528\u6237\u7ee7\u7eed\u4e89\u53d6\u514d\u5e7f\u544a\u6743\u76ca\uff0c\u8bf7\u60a8\u8c05\u89e3\uff0c\u8c22\u8c22\uff01",
                            trueview: "txp-ui-loadingad-trueview",
                            trueviewText: "txp-ui-loadingad-trueviewText",
                            countDown: "txp-ui-loadingad-countDown",
                            canSkip: "txp-ui-loadingad-canskip",
                            enterAd: "txp-ui-loadingad-enterAd",
                            noSkip: "txp-ui-loadingad-noskip",
                            noSkipText: "txp-ui-loadingad-noSkipText",
                            linkArea: "txp-ui-loadingad-linkarea",
                            detail: "txp-ui-loadingad-detail",
                            adMod: "txp-ui-loadingad-mod",
                            volume: "txp-ui-loadingad-volume",
                            time: "txp-ui-loadingad-time",
                            close: "txp-ui-loadingad-close",
                            closeText: "txp-ui-loadingad-closetext",
                            trueviewClose: "txp-ui-loadingad-trueviewClose",
                            trueviewCloseText: "txp-ui-loadingad-trueviewClosetext",
                            why: "txp-ui-loadingad-why",
                            pauseAd: "txp-ui-loadingad-pasuead",
                            yaliuAd: "txp-ui-loadingad-yaliuad",
                            pauseAdImg: "txp-ui-loadingad-pasuead-img",
                            pauseAdClose: "txp-ui-loadingad-pausead-close",
                            ivbAd: "txp-ui-ivbad",
                            ivbAdImg: "txp-ui-ivbad-img",
                            dspName: "txp-ui-loadingad-pasuead-dspName",
                            noSkipTips: "txp-ui-loadingad-no-skip-tips",
                            noSkipTipsClose: "txp-ui-loadingad-no-skip-tips-close",
                            isSkipAdButtonShow: this.isSkipAdButtonShow(),
                            isTrueviewButtonShow: this.isTrueviewButtonShow(),
                            isUseMobileUI: this.isUseMobileUI(),
                            isVshou: this.isVshou()
                        };
                        this.dataset.renderData = a;
                        var b = $.tmpl(htmlstr, a);
                        this.context.$mod.$playermod.append(b), this.dataset.$ad = this.context.$mod.$playermod.find("[data-role=" + a.adMod + "]"), this.dataset.$trueview = this.context.$mod.$playermod.find("[data-role=" + a.trueview + "]"), this.dataset.$trueviewText = this.context.$mod.$playermod.find("[data-role=" + a.trueviewText + "]"), this.dataset.$countDown = this.context.$mod.$playermod.find("[data-role=" + a.countDown + "]"), this.dataset.$canSkip = this.context.$mod.$playermod.find("[data-role=" + a.canSkip + "]"), this.dataset.$noSkip = this.context.$mod.$playermod.find("[data-role=" + a.noSkip + "]"), this.dataset.$noSkipText = this.context.$mod.$playermod.find("[data-role=" + a.noSkipText + "]"), this.dataset.$enterAd = this.context.$mod.$playermod.find("[data-role=" + a.enterAd + "]"), this.dataset.$linkArea = this.context.$mod.$playermod.find("[data-role=" + a.linkArea + "]"), this.dataset.$detail = this.context.$mod.$playermod.find("[data-role=" + a.detail + "]"), this.dataset.$volume = this.context.$mod.$playermod.find("[data-role=" + a.volume + "]"), this.dataset.$time = this.context.$mod.$playermod.find("[data-role=" + a.time + "]"), this.dataset.$close = this.context.$mod.$playermod.find("[data-role=" + a.close + "]"), this.dataset.$closeText = this.context.$mod.$playermod.find("[data-role=" + a.closeText + "]"), this.dataset.$trueviewClose = this.context.$mod.$playermod.find("[data-role=" + a.trueviewClose + "]"), this.dataset.$trueviewCloseText = this.context.$mod.$playermod.find("[data-role=" + a.trueviewCloseText + "]"), this.dataset.$why = this.context.$mod.$playermod.find("[data-role=" + a.why + "]"), this.dataset.$pauseAd = this.context.$mod.$playermod.find("[data-role=" + a.pauseAd + "]"), this.dataset.$yaliuAd = this.context.$mod.$playermod.find("[data-role=" + a.yaliuAd + "]"), this.dataset.$pauseAdImg = this.context.$mod.$playermod.find("[data-role=" + a.pauseAdImg + "]"), this.dataset.$ivbAd = this.context.$mod.$playermod.find("[data-role=" + a.ivbAd + "]"), this.dataset.$ivbAdImg = this.context.$mod.$playermod.find("[data-role=" + a.ivbAdImg + "]"), this.dataset.$noSkipTips = this.context.$mod.$playermod.find("[data-role=" + a.noSkipTips + "]"), this.dataset.$noSkipTipsClose = this.context.$mod.$playermod.find("[data-role=" + a.noSkipTipsClose + "]"), this.dataset.$pauseAdClose = this.context.$mod.$playermod.find("[data-role=" + a.pauseAdClose + "]"), this.dataset.$dspName = this.context.$mod.$playermod.find("[data-role=" + a.dspName + "]"), this.initDisplay(), this.dataset.yaliuRenderTimers = {}, this.dataset.yaliuCycleTimers = {}
                    }, remove: function () {
                        this.dataset.$ad.remove()
                    }, initDisplay: function () {
                        util.isSupportMute() || this.dataset.$volume.addClass(Txplayer.dataset.hideClass)
                    }, hide: function () {
                        this.dataset.$ad.addClass(Txplayer.dataset.hideClass), this.dataset.$trueview.addClass(Txplayer.dataset.hideClass), this.dataset.$canSkip.addClass(Txplayer.dataset.hideClass), this.dataset.$noSkip.addClass(Txplayer.dataset.hideClass), this.dataset.$enterAd.addClass(Txplayer.dataset.hideClass), this.dataset.$linkArea.addClass(Txplayer.dataset.hideClass), this.dataset.$detail.addClass(Txplayer.dataset.hideClass), this.dataset.$volume.addClass(Txplayer.dataset.hideClass), this.dataset.$close.addClass(Txplayer.dataset.hideClass), this.dataset.$closeText.addClass(Txplayer.dataset.hideClass), this.dataset.$trueviewClose.css("display", "none"), this.dataset.$trueviewCloseText.addClass(Txplayer.dataset.hideClass), this.dataset.$ivbAd.addClass(Txplayer.dataset.hideClass), this.dataset.$pauseAd.addClass(Txplayer.dataset.hideClass), this.dataset.$dspName.addClass(Txplayer.dataset.hideClass)
                    }, hideTime: function (a) {
                        a ? this.dataset.$time.addClass(Txplayer.dataset.hideClass) : this.dataset.$time.removeClass(Txplayer.dataset.hideClass)
                    }, mute: function () {
                        this.dataset.$volume.addClass(this.dataset.muteClass), "pc" === this.context.gpApi.pf_ex ? this.context.msg.broadcast("adMute", {
                            showTips: !1,
                            broadcast: !1
                        }) : this.context.msg.broadcast("mute", {
                            showTips: !1,
                            broadcast: !1
                        }), this.context.msg.broadcast("adMuteChange", {
                            mute: !0
                        })
                    }, unMute: function () {
                        this.dataset.$volume.removeClass(this.dataset.muteClass), "pc" === this.context.gpApi.pf_ex ? this.context.msg.broadcast("adUnMute", {
                            showTips: !1
                        }) : this.context.msg.broadcast("unMute", {
                            showTips: !1
                        });
                        var a = this.context.dataset.volume;
                        "number" === $.type(a) && a || (a = Txplayer.defaultconfig.volume), "pc" !== this.context.gpApi.pf_ex && this.context.msg.broadcast("setVolume", {
                            volume: a,
                            isUserAction: !1
                        }), this.context.msg.broadcast("adMuteChange", {
                            mute: !1
                        })
                    }, openAdLink: function (a) {
                        if (this.context.dataset.currentAdInfo && this.context.dataset.currentAdInfo.link) {
                            !Txplayer.util.mobile || "ZT" == this.context.dataset.currentAdInfo.type && "WZ" == this.context.dataset.currentAdInfo.type || this.context.msg.broadcast("pauseAd"), window.open(this.context.dataset.currentAdInfo.link);
                            var b = $.extend({}, this.context.dataset.currentAdInfo);
                            a && (b.txpType = a), this.context.msg.broadcast("openAdLink", b)
                        }
                    }, skipAd: function (a) {
                        this.stopAdCountDownTime(), this.context.dataset.isPlayingAd = !1, this.dataset.adPlayedSeconds = null, this.context.dataset.isSkipAd = !0, this.context.msg.broadcast("skipAd", a)
                    }, getScale: function (a, b, c, d, e) {
                        var f, g, h;
                        return f = c / a, g = d / b, h = Math.min(f, g), e && (e.width = parseInt(e.width * h), e.height = parseInt(e.height * h)), h
                    }, showIvbAd: function (a) {
                        if (a && a.length) {
                            a = a[0], this.context.dataset.currentAdInfo = a;
                            var b = this.getRichData(a);
                            if (b && b.plugins && "new_ivb" === b.plugins.plugType) {
                                var c = 1e3 * parseInt(b.plugins.easeInTime) || 5e3,
                                    d = 1e3 * parseInt(b.plugins.easeOutTime) || 5e3,
                                    e = 1e3 * parseInt(b.plugins.stayTime) || 5e3,
                                    f = function (a) {
                                        var f = function (a, c) {
                                            b.plugins[a] && (c = c || 0, setTimeout(function () {
                                                Txplayer.util.report(b.plugins[a])
                                            }, c))
                                        };
                                        "start" != a && a || f("startReportUrl"), "end" == a && f("endReportUrl"), a || f("endReportUrl", c + d + e)
                                    };
                                if ("N" == b.plugins.needAdMark) return void f();
                                this.dataset.$ad.removeClass(Txplayer.dataset.hideClass), this.dataset.$ivbAd.removeClass(Txplayer.dataset.hideClass);
                                var g, h = {
                                        width: 960,
                                        height: 60
                                    },
                                    i = this,
                                    j = 50,
                                    k = 0,
                                    l = 1;
                                g = b.plugins.res[0].content, i.dataset.$ivbAdImg.attr("src", g), this.dataset.$ivbAdImg.off("click").on("click", function () {
                                    i.openAdLink()
                                });
                                var m = function () {
                                    l = i.getScale(h.width, h.height, i.context.dataset.playerWidth / 2, i.context.dataset.playerHeight, h), i.dataset.$ivbAdImg.css(h), i.dataset.$ivbAd.css({
                                        width: h.width + 50,
                                        height: h.height,
                                        fontSize: parseInt(12 * l)
                                    })
                                };
                                this.context.msg.on("resize.ivb", function () {
                                    m(), k > 0 && o(k)
                                }), m(), this.dataset.$ivbAd.css("left", "initial");
                                var n = function (a) {
                                    a ? i.dataset.$ivbAd.css("bottom", j) : i.dataset.$ivbAd.css("bottom", 5)
                                };
                                n(i.context.dataset.isControlShow), this.context.msg.on("hideUiControl.ivb", function () {
                                    i.context.dataset.isControlShow && n(!1)
                                }), this.context.msg.on("beforeUiControlShow.ivb", function () {
                                    i.context.dataset.isControlShow || n(!0)
                                });
                                var o = function (a) {
                                    switch (k = a, a) {
                                    case 0:
                                        i.dataset.$ivbAd.css({
                                            left: 0,
                                            right: 0,
                                            bottom: j
                                        }), f("end");
                                        break;
                                    case 1:
                                        var b = (i.context.dataset.playerWidth - h.width - 50) / 2;
                                        i.dataset.$ivbAd.css({
                                            right: b
                                        }), f("start");
                                        break;
                                    case 2:
                                        i.dataset.$ivbAd.css({
                                            right: i.context.dataset.playerWidth
                                        })
                                    }
                                };
                                i.dataset.$ivbAd.css({
                                    right: -(h.width + 50)
                                }), i.dataset.$ivbAd.css({
                                    transitionProperty: "right",
                                    transitionDuration: c + "ms"
                                }), setTimeout(function () {
                                    o(1)
                                }, 100), setTimeout(function () {
                                    i.dataset.$ivbAd.css({
                                        transitionDuration: d + "ms"
                                    }), o(2)
                                }, c + e), setTimeout(function () {
                                    i.context.msg.off("hideUiControl.ivb"), i.context.msg.off("beforeUiControlShow.ivb"), i.context.msg.off("resize.ivb"), i.dataset.$ad.addClass(Txplayer.dataset.hideClass), i.dataset.$ivbAd.addClass(Txplayer.dataset.hideClass), o(0)
                                }, c + e + d)
                            }
                        }
                    }, showPauseAd: function (a) {
                        if (!a || !a.length) return this.dataset.$ad.addClass(Txplayer.dataset.hideClass), void this.dataset.$pauseAd.addClass(Txplayer.dataset.hideClass);
                        a = a[0], this.context.dataset.currentAdInfo = a, this.dataset.$ad.removeClass(Txplayer.dataset.hideClass), this.dataset.$pauseAd.removeClass(Txplayer.dataset.hideClass);
                        var b = a.dsp_name || "";
                        this.dataset.$dspName.html(b);
                        var c, d, e, f = this;
                        if ("array" === $.type(a.image) && (a.image = a.image[0]), c = a.image.url, d = parseInt(a.image.width), e = parseInt(a.image.height), c && 0 === c.indexOf("http")) {
                            if (this.dataset.pauseAdSize = {
                                width: d,
                                height: e,
                                bottom: this.dataset.$pauseAd.css("bottom")
                            }, Txplayer.util.mobile && !Txplayer.util.os.ipad) {
                                var g, h, i, j, k;
                                g = 768 / document.body.clientWidth, h = 432 / document.body.clientHeight, i = Math.max(g, h), d = parseInt(d / i), e = parseInt(e / i), j = (document.body.clientHeight - e) / 2, k = (document.body.clientWidth - d) / 2, f.dataset.$pauseAd.css({
                                    width: d,
                                    height: e,
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: "40px",
                                    position: "absolute",
                                    margin: "auto"
                                })
                            }
                            this.dataset.$pauseAdImg.attr("src", c).css({
                                width: d,
                                height: e
                            }), this.dataset.$pauseAdImg.off("click").on("click", function () {
                                "N" === a.no_click && a.link && f.openAdLink("pauseAd")
                            }), this.dataset.isPauseAdShow = !0, this.hideUiPlay(), this.context.msg.broadcast("pauseAdShow", this.context.dataset.currentAdInfo)
                        }
                    }, renderYaliuAd: function (a) {
                        "pc" === this.context.gpApi.pf_ex ? this.renderYaliuAdByMP4(a, a.mp4_index) : this.renderYaliuAdByPNG(a, a.png_index)
                    }, renderYaliuAdByPNG: function (a, b) {
                        var c = this,
                            d = "yaliu-ad-canvas-" + a.cid;
                        if ("N" == a.no_click) var e = '<canvas data-role="' + d + '" style="display:none;pointer-events:auto;cursor:pointer;"></canvas>';
                        else var e = '<canvas data-role="' + d + '" style="display:none;"></canvas>';
                        var f = this.context.$mod.$playermod.find("[data-role=" + d + "]");
                        f[0] || (this.dataset.$yaliuAd.append(e), f = this.context.$mod.$playermod.find("[data-role=" + d + "]"));
                        var g = this.context.dataset.currentTime - a.anchor.begin / 1e3,
                            h = a.material[b].data.frames;
                        if (a.anchor.interval && "" != a.anchor.interval) var i = 0;
                        else var i = parseInt(g) * a.material[b].data.fps;
                        var j = this.context.$mod.$playermod[0],
                            k = f[0].getContext("2d"),
                            l = a.material[b].data.width,
                            m = a.material[b].data.height,
                            n = j.clientWidth * a.anchor.pos_w,
                            o = j.clientHeight * a.anchor.pos_h,
                            p = j.clientWidth * a.anchor.pos_x,
                            q = j.clientHeight * a.anchor.pos_y;
                        k.clearRect(0, 0, n, o), f.attr("width", n), f.attr("height", o), f.css({
                            position: "absolute",
                            display: "block",
                            left: p,
                            top: q
                        }), this.dataset.$yaliuAd.css({
                            display: "block"
                        }), "N" == a.no_click && f.off("click").on("click", function () {
                            window.open(a.link), c.context.msg.broadcast("openAdLink", a)
                        }), this.context.dataset.canReportCids[a.cid] && !this.context.dataset.hasReportCids[a.cid] && (this.context.msg.broadcast("reportAd", a), this.context.dataset.hasReportCids[a.cid] = !0), document.createElement("img"), this.dataset.$yaliuAd.removeClass(Txplayer.dataset.hideClass);
                        var r = a.offscreenCanvasArr,
                            s = j.clientWidth,
                            t = j.clientHeight,
                            u = setInterval(function () {
                                return c.context.$mod.$playermod[0], 3 == c.context.dataset.playState ? void f.css({
                                    display: "none"
                                }) : 2 == c.context.dataset.playState ? (w(), void v(!1)) : (w(), v(!0), void((i == h.length - 1 || i > h.length - 1) && (c.dataset.$yaliuAd.addClass(Txplayer.dataset.hideClass), a.anchor.interval && (c.dataset.yaliuCycleTimers[a.cid] = setTimeout(function () {
                                    i = 0;
                                    var b = c.context.dataset.hasShowCidArr.indexOf(a.cid);
                                    b > -1 && c.context.dataset.hasShowCidArr.splice(b, 1)
                                }, a.anchor.interval)), f.css({
                                    display: "none"
                                }), clearInterval(u), u = null)))
                            }, 1e3 / a.material[b].data.fps);
                        this.dataset.yaliuRenderTimers[a.cid] = u;
                        var v = function (a) {
                                k.clearRect(0, 0, n, o), k.drawImage(r[i], 0, 0, l, m, 0, 0, n, o), a && i++
                            },
                            w = function () {
                                s == j.clientWidth && t == j.clientHeight || (n = j.clientWidth * a.anchor.pos_w, o = j.clientHeight * a.anchor.pos_h, p = j.clientWidth * a.anchor.pos_x, q = j.clientHeight * a.anchor.pos_y, f.attr("width", n), f.attr("height", o), f.css({
                                    position: "absolute",
                                    display: "block",
                                    left: p,
                                    top: q
                                }), s = j.clientWidth, t = j.clientHeight), f.css({
                                    display: "block"
                                })
                            }
                    }, renderYaliuAdByMP4: function (a, b) {
                        var c = this,
                            d = "yaliuad-" + a.cid,
                            e = "yaliu-sample-canvas-" + a.cid,
                            f = "yaliu-ad-canvas-" + a.cid,
                            g = '<txpdiv data-role="' + d + '"><canvas data-role="' + e + '" style="display:none;"></canvas><canvas data-role="' + f + '" style="position:absolute;"></canvas></txpdiv>',
                            h = c.context.$mod.$playermod.find("[data-role=" + d + "]");
                        h[0] || c.dataset.$yaliuAd.append(g);
                        var i = a.videoElement,
                            j = c.context.$mod.$playermod.find("[data-role=" + e + "]"),
                            k = c.context.$mod.$playermod.find("[data-role=" + f + "]");
                        i.setAttribute("crossOrigin", "*");
                        var l = c.context.$mod.$playermod[0],
                            m = j[0].getContext("2d"),
                            n = k[0].getContext("2d"),
                            o = a.material[b].width,
                            p = a.material[b].height,
                            q = l.clientWidth * a.anchor.pos_w,
                            r = l.clientHeight * a.anchor.pos_h,
                            s = l.clientWidth * a.anchor.pos_x,
                            t = l.clientHeight * a.anchor.pos_y,
                            u = l.clientWidth,
                            v = l.clientHeight;
                        j.attr("width", o), j.attr("height", p), k.attr("width", o / 2), k.attr("height", p), k.css({
                            left: s,
                            top: t,
                            width: q,
                            height: r,
                            display: "block"
                        }), c.dataset.$yaliuAd.css({
                            display: "block"
                        }), "N" == a.no_click && k.off("click").on("click", function () {
                            window.open(a.link), c.context.msg.broadcast("openAdLink", a)
                        });
                        var w = c.context.dataset.currentTime - a.anchor.begin / 1e3;
                        a.anchor.interval && "" != a.anchor.interval ? i.currentTime = 0 : i.currentTime = w, this.context.dataset.canReportCids[a.cid] && !this.context.dataset.hasReportCids[a.cid] && i.videoCanPlay && (this.context.msg.broadcast("reportAd", a), this.context.dataset.hasReportCids[a.cid] = !0);
                        var x = setInterval(function () {
                            if (3 == c.context.dataset.playState) return void k.css({
                                display: "none"
                            });
                            if (2 == c.context.dataset.playState) return z(), void i.pause();
                            if (1 == c.context.dataset.playState) {
                                if (!i.videoCanPlay) return;
                                z(), i.play()
                            }
                            return i.paused || i.ended ? (a.anchor.interval && "" != a.anchor.interval && (c.dataset.yaliuCycleTimers[a.cid] = setTimeout(function () {
                                var b = c.context.dataset.hasShowCidArr.indexOf(a.cid);
                                b > -1 && c.context.dataset.hasShowCidArr.splice(b, 1)
                            }, a.anchor.interval)), k.css({
                                display: "none"
                            }), clearInterval(x), void(x = null)) : void y()
                        }, 1e3 / 24);
                        this.dataset.yaliuRenderTimers[a.cid] = x;
                        var y = function () {
                                m.drawImage(i, 0, 0, o, p);
                                for (var a = m.getImageData(o / 2, 0, o / 2, p), b = m.getImageData(0, 0, o / 2, p), c = b.data.length / 4, d = 0; d < c; d++) b.data[4 * d + 3] = a.data[4 * d + 1];
                                n.putImageData(b, 0, 0)
                            },
                            z = function () {
                                u == l.clientWidth && v == l.clientHeight || (q = l.clientWidth * a.anchor.pos_w, r = l.clientHeight * a.anchor.pos_h, s = l.clientWidth * a.anchor.pos_x, t = l.clientHeight * a.anchor.pos_y, k.css({
                                    position: "absolute",
                                    display: "block",
                                    left: s,
                                    top: t,
                                    width: q,
                                    height: r
                                }), u = l.clientWidth, v = l.clientHeight), k.css({
                                    display: "block"
                                })
                            }
                    }, isSkipAdButtonShow: function () {
                        return !((!Txplayer.util.mobile || Txplayer.util.os.ipad) && (Txplayer.util.mobile && !Txplayer.util.os.ipad || "v.qq.com" !== location.hostname && 6 != this.context.dataset.businessId) || !this.context.config || "function" !== $.type(this.context.config.showOpenVIPGuide))
                    }, isTrueviewButtonShow: function () {
                        return !(!Txplayer.util.mobile || !this.context.config || "function" !== $.type(this.context.config.showOpenVIPGuide))
                    }, isUseMobileUI: function () {
                        return !(!Txplayer.util.mobile || Txplayer.util.os.ipad)
                    }, isVshou: function () {
                        return !(!this.context.config || "vshou" !== this.context.config.playerType)
                    }, isHBO: function () {
                        var a = this;
                        return !(!a.context.dataset.adJson || !a.context.dataset.adJson.adLoc || "2" !== a.context.dataset.adJson.adLoc.adFlag)
                    }, isHuaNa: function () {
                        var a = this;
                        return !(!a.context.dataset.adJson || !a.context.dataset.adJson.adLoc || "1" !== a.context.dataset.adJson.adLoc.adFlag)
                    }, isAdType: function (a) {
                        if (!a) return !1;
                        var b = ["loadingad", "insertad", "endingad"];
                        return $.inArray(a, b) > -1
                    }, hideUiPlay: function () {
                        var a = this;
                        a.context.msg.broadcast("hideUiPlay"), a.context.msg.once("videoPause.noSkipTips", function () {
                            a.context.msg.broadcast("hideUiPlay")
                        })
                    }, adSkip: function (a) {
                        var b = this;
                        b.context.dataset.adReportData.isskip = 1, b.context.dataset.adReportData.skiptime = parseInt(b.dataset.adPlayedSeconds), b.context.msg.broadcast("adSkip"), b.skipAd(a), b.hide()
                    }, getRichData: function (data) {
                        var params, richdata;
                        return data && data.params && (params = decodeURIComponent(data.params)), params && (richdata = params.split("richdata=")[1], eval("richdata=" + richdata)), richdata
                    }, showAdUIOnPlaying: function () {
                        var a = this,
                            b = a.context.dataset.currentPlayListType;
                        if (a.isAdType(b) && (a.hide(), !a.context.dataset.isSkipAd)) {
                            a.dataset.adListLenth = a.context.msg.getData("calcTotalPlaylist", b);
                            var c = a.getRichData(this.context.dataset.currentAdInfo);
                            if (this.context.dataset.currentAdInfo) {
                                var d = this.context.dataset.currentAdInfo.dsp_name || "";
                                d ? (this.dataset.$dspName.html(d), this.dataset.$dspName.removeClass(Txplayer.dataset.hideClass)) : this.dataset.$dspName.addClass(Txplayer.dataset.hideClass)
                            }
                            if (a.dataset.trueview = !1, a.dataset.isAdCanNotSkip = a.context.dataset.isAdCanNotSkip, a.dataset.$ad.removeClass(Txplayer.dataset.hideClass), a.dataset.$detail.removeClass(Txplayer.dataset.hideClass), util.isSupportMute() && a.dataset.$volume.removeClass(Txplayer.dataset.hideClass), a.dataset.$linkArea.removeClass(Txplayer.dataset.hideClass), a.dataset.duration = a.context.dataset.getAdDuration, a.context.dataset.isAdCanSkip) a.isHuaNa() ? a.dataset.$noSkipText.html("\u5e94\u7248\u6743\u65b9\u8981\u6c42\uff0cVIP\u65e0\u6cd5\u514d\u8be5\u7247\u5e7f\u544a") : a.isHBO() && (a.dataset.$noSkipText.html("\u5e94\u5185\u5bb9\u65b9\u8981\u6c42\uff0cVIP\u65e0\u6cd5\u514d\u8be5\u7247\u5e7f\u544a"), a.dataset.$why.addClass(Txplayer.dataset.hideClass)), a.dataset.$noSkip.removeClass(Txplayer.dataset.hideClass);
                            else if (Txplayer.util.mobile && 1 == a.dataset.adListLenth && c && c.plugins && "Y" === c.plugins.trueview) {
                                if (a.dataset.trueview = !0, a.dataset.$trueview.removeClass(Txplayer.dataset.hideClass), a.isTrueviewButtonShow()) {
                                    var e = a.context.dataset.currentAdInfo.duration / 1e3;
                                    e > 10 && (!a.dataset.hasOwnProperty("countDown") || a.dataset.countDown == -1) ? (a.dataset.$trueviewText.removeClass(Txplayer.dataset.hideClass), a.dataset.countDown = 5, a.dataset.$countDown.html(a.dataset.countDown)) : (0 === a.dataset.countDown || e <= 10) && (e <= 10 && a.dataset.$trueviewText.addClass(Txplayer.dataset.hideClass), a.dataset.$trueviewClose.css("display", "inline-block"), a.dataset.$trueviewCloseText.removeClass(Txplayer.dataset.hideClass))
                                }
                            } else if (!this.context.dataset.currentAdInfo || "WK" !== this.context.dataset.currentAdInfo.type && "KB" !== this.context.dataset.currentAdInfo.type ? a.hideTime(!1) : a.hideTime(!0), a.dataset.$canSkip.removeClass(Txplayer.dataset.hideClass), a.isSkipAdButtonShow()) {
                                var f = a.context.dataset.adJson.adLoc.duration;
                                f && f > 0 && f < 180 ? a.dataset.$closeText.html("\u5173\u95ed\u5e7f\u544a") : a.dataset.$closeText.html("VIP\u514d\u5e7f\u544a"), a.dataset.$close.removeClass(Txplayer.dataset.hideClass), a.dataset.$closeText.removeClass(Txplayer.dataset.hideClass)
                            }
                            a.dataset.$noSkipTips.addClass(Txplayer.dataset.hideClass)
                        }
                    }, stopAdCountDownTime: function () {
                        var a = this;
                        a.dataset.adCountDownTimer && (clearInterval(a.dataset.adCountDownTimer), a.dataset.adCountDownTimer = null)
                    }, startAdCountDownTime: function () {
                        var a = this;
                        a.dataset.notShowTime = 0, $(this.context.dataset.adList).each(function (b, c) {
                            c.duration && ("WK" != c.type && "KB" != c.type || (a.dataset.notShowTime += parseInt(c.duration, 10) / 1e3))
                        }), this.stopAdCountDownTime();
                        var b, c, d = '<span class="txp_ad_skip" style="background: none">\u5373\u5c06\u8fdb\u5165\u4e0b\u4e00\u96c6\uff1a</span>';
                        "number" === $.type(a.context.dataset.adDuration) && ("number" !== $.type(a.dataset.adPlayedSeconds) && (a.dataset.adPlayedSeconds = 0), c = parseInt(a.context.dataset.adDuration - parseInt(a.dataset.adPlayedSeconds) - a.dataset.notShowTime), c > 0 && (a.context.gpApi.isPrepLoad ? a.dataset.$time.html(d + c) : a.dataset.$time.html(c))), this.dataset.adCountDownTimer = setInterval(function () {
                            return a.dataset.adPlayedSeconds += .1, a.context.dataset.adDuration || "number" === $.type(a.context.dataset.adDuration) ? (b = a.context.dataset.adDuration - a.dataset.adPlayedSeconds, b = parseInt(10 * b) / 10, b <= 0 ? (a.dataset.countDown = -1, a.hide(), a.skipAd({
                                force: !0
                            }), void a.stopAdCountDownTime()) : void(b === parseInt(b) && (c = b - a.dataset.notShowTime, c > 0 && (a.context.gpApi.isPrepLoad ? a.dataset.$time.html(d + c) : a.dataset.$time.html(c)), a.dataset.countDown > 0 && (a.dataset.countDown--, a.dataset.countDown > 0 ? a.dataset.$countDown.html(a.dataset.countDown) : (a.isTrueviewButtonShow() && (a.dataset.$trueviewClose.css("display", "inline-block"), a.dataset.$trueviewCloseText.removeClass(Txplayer.dataset.hideClass)), a.dataset.$trueviewText.addClass(Txplayer.dataset.hideClass)))))) : (a.hide(), void a.stopAdCountDownTime())
                        }, 100)
                    }, getCurrentAdInfo: function () {
                        if (this.context.dataset.isPlayingAd) {
                            var a = this.context.dataset.currentPlayListType,
                                b = this.context.msg.getData("getPlayListIndex", a);
                            this.context.dataset.adList && this.context.dataset.adList[b] && (this.context.dataset.currentAdInfo = this.context.dataset.adList[b]), this.context.dataset.currentAdInfo && "film" === this.context.dataset.currentAdInfo.type && (this.context.dataset.currentAdInfo = null)
                        }
                    }, clearVideoAd: function (a) {
                        this.hide(), this.dataset.adPlayedSeconds = null, this.stopAdCountDownTime(), a && this.context.gpApi.videoAdList && (this.context.gpApi.videoAdList[a] = [])
                    }, addEventListener: function () {
                        var a = this;
                        this.dataset.eventsList = {}, this.dataset.eventsList[util.getUniqueMsgKey("resize")] = function (a) {}, this.dataset.eventsList[util.getUniqueMsgKey("enterBrowserFullscreen")] = function (b) {
                            a.dataset.isPauseAdShow && Txplayer.util.mobile && !Txplayer.util.os.ipad && a.dataset.$pauseAd.removeClass(Txplayer.dataset.hideClass)
                        };
                        var b = function (b) {
                                a.dataset.yaliuRenderTimers && a.dataset.yaliuRenderTimers[b] && (clearInterval(a.dataset.yaliuRenderTimers[b]), a.dataset.yaliuRenderTimers[b] = null), a.dataset.yaliuCycleTimers && a.dataset.yaliuCycleTimers[b] && (clearTimeout(a.dataset.yaliuCycleTimers[b]), a.dataset.yaliuCycleTimers[b] = null)
                            },
                            c = function (b) {
                                if (a.context.dataset.hasShowCidArr && a.context.dataset.hasShowCidArr.indexOf(b) > -1) {
                                    var c = "yaliu-ad-canvas-" + b,
                                        d = a.context.$mod.$playermod.find("[data-role=" + c + "]");
                                    d.css({
                                        display: "none"
                                    });
                                    var e = a.context.dataset.hasShowCidArr.indexOf(b);
                                    a.context.dataset.hasShowCidArr.splice(e, 1)
                                }
                            };
                        this.dataset.eventsList[util.getUniqueMsgKey("userSeekStart")] = function (a) {}, this.dataset.eventsList[util.getUniqueMsgKey("userSeekEnd")] = function (a) {}, this.dataset.eventsList[util.getUniqueMsgKey("yaliuKeybroadSeek")] = function (a) {
                            b(a), c(a)
                        }, this.dataset.eventsList[util.getUniqueMsgKey("exitBrowserFullscreen")] = function (b) {
                            a.dataset.isPauseAdShow && Txplayer.util.mobile && !Txplayer.util.os.ipad && a.dataset.$pauseAd.addClass(Txplayer.dataset.hideClass)
                        }, this.dataset.eventsList[util.getUniqueMsgKey("smallWindowModeChange")] = function (b) {
                            if (a.dataset.isPauseAdShow) {
                                var c = a.dataset.pauseAdSize.width,
                                    d = a.dataset.pauseAdSize.height,
                                    e = a.dataset.pauseAdSize.bottom;
                                if (b.isSmallWindow) {
                                    var f = d / 214,
                                        g = c / 380;
                                    g >= f ? (c /= g, d /= g) : (c /= f, d /= f), e = "0"
                                }
                                a.dataset.$pauseAd.css({
                                    width: c,
                                    height: d,
                                    bottom: e
                                })
                            }
                        }, this.dataset.eventsList[util.getUniqueMsgKey("enterAd")] = function (d) {
                            var e = 10,
                                f = function () {
                                    if (e <= 0) {
                                        if (clearTimeout(h), a.dataset.$enterAd.addClass(Txplayer.dataset.hideClass), a.context.dataset.yaliuCidArr)
                                            for (var d = 0; d < a.context.dataset.yaliuCidArr.length; d++) {
                                                var g = a.context.dataset.yaliuCidArr[d];
                                                b(g), c(g)
                                            }
                                    } else {
                                        a.dataset.$time.html(e), e--;
                                        var h = setTimeout(f, 1e3)
                                    }
                                };
                            f(), a.dataset.$ad.removeClass(Txplayer.dataset.hideClass), a.dataset.$enterAd.removeClass(Txplayer.dataset.hideClass), a.hideTime(!1)
                        }, this.dataset.eventsList[util.getUniqueMsgKey("videoPlay")] = function (b) {
                            a.dataset.isPauseAdShow && (a.hide(), a.dataset.isPauseAdShow = !1)
                        }, this.dataset.eventsList[util.getUniqueMsgKey("videoPlaying")] = function (b) {
                            b && "film" !== b.playListType ? (a.getCurrentAdInfo(), a.context.dataset.isSkipAd || a.startAdCountDownTime(), a.showAdUIOnPlaying()) : (a.context.dataset.isSkipAd = !1, a.hide(), a.stopAdCountDownTime())
                        }, this.dataset.eventsList[util.getUniqueMsgKey("userStopVideo")] = function (b) {
                            a.hide(), a.dataset.adPlayedSeconds = null, a.stopAdCountDownTime()
                        }, this.dataset.eventsList[util.getUniqueMsgKey("videoEnd")] = function (b) {
                            a.dataset.countDown = -1, b.playListTypeEnd && a.isAdType(b.playListType) && a.clearVideoAd(b.playListType), b.playListTypeEnd && b.isAllEnd && a.clearVideoAd()
                        }, this.dataset.eventsList[util.getUniqueMsgKey("error")] = function (b) {
                            if (b && !a.isAdType(b.type)) return void(a.dataset.adPlayedSeconds = null);
                            var c = a.context.dataset.currentPlayListType,
                                d = !1;
                            b.type == c && $.isArray(a.context.gpApi.videoAdList[c]) && b.index == a.context.gpApi.videoAdList[b.type].length - 1 && (d = !0), d && a.clearVideoAd(b.type)
                        }, this.dataset.eventsList[util.getUniqueMsgKey("videoPause")] = function (b) {
                            b && "film" !== b.playListType && a.stopAdCountDownTime()
                        }, this.dataset.eventsList[util.getUniqueMsgKey("vidChange")] = function (d) {
                            if (a.dataset.adPlayedSeconds = null, a.dataset.countDown = -1, a.stopAdCountDownTime(), a.context.dataset.yaliuCidArr && a.context.dataset.yaliuCidArr.length > 0)
                                for (var e = 0; e < a.context.dataset.yaliuCidArr.length; e++) {
                                    var f = a.context.dataset.yaliuCidArr[e];
                                    b(f), c(f)
                                }
                        }, this.dataset.eventsList[util.getUniqueMsgKey("ivbAdDataReady")] = function (b) {
                            b && "array" === $.type(b) && b.length && a.showIvbAd(b)
                        }, this.dataset.eventsList[util.getUniqueMsgKey("pauseAdDataReady")] = function (b) {
                            if (b && "array" === $.type(b) && b.length) {
                                if ("insertad" === a.context.dataset.currentPlayListType) return;
                                if (1 === a.context.dataset.playState) return;
                                a.showPauseAd(b)
                            }
                        }, this.dataset.eventsList[util.getUniqueMsgKey("volumeChange")] = function (b) {
                            b && b.volume > 0 ? (a.dataset.$volume.removeClass(a.dataset.muteClass), a.context.msg.broadcast("adMuteChange", {
                                mute: !1
                            })) : (a.context.dataset.isMute ? b.volume = 0 : b && b.hasOwnProperty("volume") ? b.volume = 0 : b.volume = a.context.dataset.volume, 0 === b.volume && (a.dataset.$volume.addClass(a.dataset.muteClass), a.context.msg.broadcast("adMuteChange", {
                                mute: !0
                            })))
                        }, this.dataset.eventsList[util.getUniqueMsgKey("renderYaliu")] = function (b) {
                            "pc" === a.context.gpApi.pf_ex ? a.dataset.adType = "PSJ" : a.dataset.adType = "WSJ", a.renderYaliuAd(b)
                        }, $.each(this.dataset.eventsList, function (b, c) {
                            a.context.msg.on(b, c)
                        }), this.dataset.privateApis = {}, this.dataset.privateApis.clearLoadingAd = function () {
                            a.hide(), a.context.msg.broadcast("pauseAd")
                        }, $.each(this.dataset.privateApis, function (b, c) {
                            a.context.msg.on(b, c)
                        });
                        var d = function () {
                            if (a.dataset.trueview) return void a.adSkip({
                                force: !0
                            });
                            var b = a.context.dataset.duration,
                                c = a.context.config.vid,
                                d = a.context.config.cid || "";
                            b && b > 0 && b < 180 ? a.adSkip() : a.isSkipAdButtonShow() && (Txplayer.util.mobile && !Txplayer.util.os.ipad ? Txplayer.util.txLoginOnMobile && "function" === $.type(Txplayer.util.txLoginOnMobile.isLogin) && Txplayer.util.txLoginOnMobile.isLogin(function (a) {
                                if (0 === a) Txplayer.util.txLoginOnMobile.goLogin();
                                else {
                                    var b = Txplayer.util.os.ios ? "ios" : "android",
                                        e = Txplayer.util.getPayUrl("ad", c, d, b);
                                    self == top ? window.location.href = e : top.location.href = e
                                }
                            }) : a.context.config.showOpenVIPGuide(), a.context.msg.broadcast("pauseAd"), a.context.msg.broadcast("closeAdClick"))
                        };
                        this.dataset.$close.on("click", function () {
                            d()
                        }), this.dataset.$closeText.on("click", function () {
                            d()
                        }), this.dataset.$trueviewClose.on("click", function () {
                            d()
                        }), this.dataset.$trueviewCloseText.on("click", function () {
                            d()
                        }), this.dataset.$volume.on("click", function () {
                            a.dataset.$volume.hasClass(a.dataset.muteClass) ? a.unMute({
                                showTips: !1
                            }) : a.mute({
                                showTips: !1
                            })
                        }), this.dataset.$detail.on("click", function () {
                            a.openAdLink()
                        }), this.dataset.$linkArea.on("click", function () {
                            a.openAdLink()
                        }), this.dataset.$why.on("click", function () {
                            a.context.msg.broadcast("pauseAd"), a.hideUiPlay(), a.dataset.$noSkipTips.removeClass(Txplayer.dataset.hideClass)
                        }), this.dataset.$noSkipTipsClose.on("click", function () {
                            a.context.msg.broadcast("playAd"), a.dataset.$noSkipTips.addClass(Txplayer.dataset.hideClass)
                        }), this.dataset.$pauseAdClose.on("click", function () {
                            a.dataset.$pauseAd.addClass(Txplayer.dataset.hideClass), a.hide()
                        }), this.context.msg.on("error", function (b) {
                            b && "film" !== b.type && "cgi" !== b.type || (a.context.msg.broadcast("pause"), a.context.msg.broadcast("clearFocusVideoUrl"), a.hide())
                        }), this.context.msg.on("beforeVideoPlay", function () {
                            a.hide()
                        }), this.context.msg.on("setDefinitionStart", function () {
                            a.dataset.$pauseAd.addClass(Txplayer.dataset.hideClass), a.hide()
                        })
                    }, exportsModuleApis: function () {
                        var a = this;
                        this.dataset.privateApis = {}, this.dataset.privateApis.hidePlayAdUI = function () {
                            a.hide()
                        }, this.dataset.privateApis.stopAdCountDownTime = function () {
                            a.stopAdCountDownTime()
                        }, this.dataset.privateApis.adMuteStateUpdate = function (b) {
                            b && b.hasOwnProperty("mute") && (b.mute ? a.mute() : a.unMute())
                        }, $.each(this.dataset.privateApis, function (b, c) {
                            a.context.msg.on(b, c)
                        })
                    }
                }, Txplayer.register("UiPlayerAd", UiPlayerAd)
            },
            function (a, b) {
                a.exports = '<txpdiv data-role="<%=adMod%>" class="txp_ad <%=hideClass%>"> <txpdiv class=txp_ad_inner> <% if(!isUseMobileUI){%> <a data-role="<%=linkArea%>" href=javascript:; class="txp_ad_link <%=hideClass%>"></a> <% } %> <a data-role="<%=detail%>" href=javascript:; class="txp_ad_more <%=hideClass%>">\u8be6\u60c5\u70b9\u51fb <txpdiv class=txp_icon_arrow></txpdiv> </a> <txpdiv style="left:10px;bottom:10px;position:absolute;opacity:.6;font-size:12px;text-shadow:2px 2px #000" data-role="<%=dspName%>" class="<%=hideClass%>"></txpdiv> <txpdiv class=txp_ad_control> <txpdiv data-role="<%=enterAd%>" class="txp_ad_skip <%=hideClass%>"> <txpdiv data-role="<%=time%>" class=txp_ad_countdown>10</txpdiv> <txpdiv class=txp_ad_skip_text>\u8fdb\u5165\u5e7f\u544a</txpdiv> </txpdiv> <txpdiv data-role="<%=trueview%>" class="txp_ad_skip <%=hideClass%>"> <txpdiv data-role="<%=time%>" class=txp_ad_countdown></txpdiv> <% if(isTrueviewButtonShow) {%> <txpdiv data-role="<%=trueviewText%>" class=txp_ad_skip_text>\u4f60\u53ef\u4ee5\u5728<span data-role="<%=countDown%>">5</span>\u79d2\u540e\u5173\u95ed\u5e7f\u544a </txpdiv> <txpdiv data-role="<%=trueviewCloseText%>" class="txp_ad_skip_text <%=hideClass%>">\u5173\u95ed\u5e7f\u544a</txpdiv> <button data-role="<%=trueviewClose%>" class="txp_btn txp_btn_close <%=hideClass%>" title=\u5173\u95ed\u5e7f\u544a></button> <% } else {%> <txpdiv data-role="<%=time%>" class=txp_ad_countdown></txpdiv> \u5e7f\u544a <% } %> </txpdiv> <txpdiv data-role="<%=canSkip%>" class="txp_ad_skip <%=hideClass%>"> <% if(!isSkipAdButtonShow||isVshou) {%> \u5e7f\u544a\u5269\u4f59: <txpdiv data-role="<%=time%>" class=txp_ad_countdown></txpdiv> \u79d2 <% } else {%> <txpdiv data-role="<%=time%>" class=txp_ad_countdown></txpdiv> <% if(isUseMobileUI){%> <button data-role="<%=closeText%>" class=txp_ad_skip_text title=VIP\u514d\u5e7f\u544a>VIP\u514d\u5e7f\u544a</button> <%}else{%> <%if(isVshou) {%> <txpdiv class=txp_ad_skip_text>\u5e7f\u544a</txpdiv> <%}else{%> <txpdiv data-role="<%=closeText%>" class="txp_ad_skip_text <%=hideClass%>">VIP\u514d\u5e7f\u544a</txpdiv> <button data-role="<%=close%>" class="txp_btn txp_btn_close <%=hideClass%>" title=VIP\u514d\u5e7f\u544a></button> <% }} }%> </txpdiv> <txpdiv data-role="<%=noSkip%>" class="txp_ad_skip <%=hideClass%>"> <txpdiv data-role="<%=time%>" class=txp_ad_countdown></txpdiv> <txpdiv data-role="<%=noSkipText%>" class=txp_ad_skip_text>\u5e94\u7248\u6743\u65b9\u8981\u6c42\uff0cVIP\u65e0\u6cd5\u514d\u8be5\u7247\u5e7f\u544a</txpdiv> <button data-role="<%=why%>" class="txp_btn txp_btn_hint" title=\u65e0\u6cd5\u8df3\u8fc7\u5e7f\u544a\u8bf4\u660e></button> </txpdiv> <button data-role="<%=volume%>" class="txp_btn txp_btn_ad_volume <%=hideClass%>"> <svg class="txp_icon txp_icon_volume" version=1.1 viewBox="0 0 24 24"> <use class=txp_svg_volume xmlns:xlink=http://www.w3.org/1999/xlink xlink:href=#txp_svg_volume></use> <use class=txp_svg_volume_mute xmlns:xlink=http://www.w3.org/1999/xlink xlink:href=#txp_svg_volume_mute></use> </svg> </button> </txpdiv> <% if(isUseMobileUI){ %> <txpdiv data-role="<%=noSkipTips%>" class="txp_ad_forbidden <%=hideClass%>"> <div class=txp_forbidden_text> <%=noSkipTipsTextMobile%> </div> <a data-role="<%=noSkipTipsClose%>" class=txp_btn_em href=#>\u6211\u77e5\u9053\u4e86</a> </txpdiv> <% }else{ %> <txpdiv data-role="<%=noSkipTips%>" class="txp_ad_dialog <%=hideClass%>"> <txpdiv class=txp_dialog_bd> <%=noSkipTipsText%> </txpdiv> <txpdiv data-role="<%=noSkipTipsClose%>" class=txp_ad_btn>\u6211\u77e5\u9053\u4e86!</txpdiv> <a target=_blank; class=txp_ad_fb href="http://support.qq.com/write.shtml?fid=850">\u610f\u89c1\u53cd\u9988</a> <button data-role="<%=noSkipTipsClose%>" class="txp_btn txp_btn_close"></button> </txpdiv> <% } %> </txpdiv> <txpdiv class="txp_ad_corner <%=hideClass%>"> <img alt=""> </txpdiv> <txpdiv data-role="<%=pauseAd%>" class="txp_ad_center <%=hideClass%>"> <button data-role="<%=pauseAdClose%>" class="txp_btn txp_btn_close txp_btn_close_ad" title=\u8df3\u8fc7\u5e7f\u544a></button> <img data-role="<%=pauseAdImg%>" alt=""> <txpdiv style=left:8px;bottom:8px;position:absolute;opacity:.6;font-size:12px> <txpdiv style="background:#000;display:inline-block;box-shadow:2px 2px #000">\u5e7f\u544a</txpdiv> <txpdiv data-role="<%=dspName%>" style="display:inline-block;margin-left:10px;text-shadow:2px 2px #000"></txpdiv> </txpdiv> </txpdiv> <txpdiv class="txp_ad_bottom <%=hideClass%>"> <img alt=""> </txpdiv> <txpdiv data-role="<%=ivbAd%>" class="txp_ad_bottom_lg <%=hideClass%>" style=position:absolute;z-index:2> <img data-role="<%=ivbAdImg%>" alt=""> <span style=opacity:.7>\u5e7f\u544a</span> </txpdiv> </txpdiv> <txpdiv data-role="<%=yaliuAd%>" class="<%=hideClass%>" style=z-index:2;position:absolute> </txpdiv>';
            },
            function (a, b) {
                function c(a, b) {
                    return "string" == Txplayer.$.type(a) && b && (a += a.indexOf("?") == -1 ? "?" : "&" + Txplayer.$.param(b)), a
                }

                function d(a) {
                    g = Txplayer.$, this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
                }
                var e, f, g = Txplayer.$,
                    h = (Txplayer.apiList, Txplayer.util),
                    i = {
                        "not-start": 0,
                        "request-cgi": 1,
                        "request-cgi-done": 1.1,
                        playing: 2,
                        "play-end": 3
                    },
                    j = {
                        "\u524d\u8d34": "WL|WK",
                        "\u4e2d\u63d2": "WC",
                        "\u540e\u8d34": "WH",
                        "\u6682\u505c": "WZ",
                        "\u53e3\u64ad": "WK",
                        ivb: "WI",
                        "\u538b\u6d41": "WSJ"
                    },
                    k = {
                        1: {
                            type: "ivb",
                            area: 1
                        }
                    },
                    l = "WL|WK|WC|WH",
                    m = 0,
                    n = "H5",
                    o = "6",
                    p = 1;
                Txplayer.util.os.phone || Txplayer.util.os.tablet ? Txplayer.util.os.ipad ? o = "6" : Txplayer.util.os.iphone ? o = "3" : Txplayer.util.os.android && Txplayer.util.os.tablet ? o = "4" : Txplayer.util.os.android && Txplayer.util.os.phone && (o = "5") : o = "0";
                var q = 0,
                    r = null;
                d.prototype = {
                    init: function () {
                        this.dataset.dataKey = Txplayer.dataset.localStorageKey.adRfid, this.context.dataset.isPlayingAd = !1, this.initAdParams(), this.addEventListener(), this.exportsModuleApis()
                    }, initAdParams: function () {
                        this.context.dataset.adReportData = {}, this.dataset.useMiaoBo = !0, e = this.context.gpApi, "pc" !== this.getExtentionPlatform() && "mac" !== this.getExtentionPlatform() || "h5" == this.context.config.playerType ? f = this.getExtentionPlatform() : (n = this.isInSite() ? "in" : "out", j = {
                            "\u524d\u8d34": "LD|KB|PVL",
                            "\u4e2d\u63d2": "ZC",
                            "\u540e\u8d34": "HT",
                            "\u6682\u505c": "ZT",
                            "\u53e3\u64ad": "KB",
                            "\u538b\u6d41": "PSJ",
                            PPB: "PPB",
                            PVL: "PVL",
                            ivb: "ZI"
                        }, l = "LD|KB|ZC|HT", f = "pc", p = 2), this.context.dataset.adReportData.pf = n, this.context.gpApi.adtypeMap = j, this.context.gpApi.pf_ex = f, this.getReqId()
                    }, supportAd: function (a) {
                        var b = this,
                            c = {
                                mac: "\u524d\u8d34,\u540e\u8d34,\u4e2d\u63d2,\u6682\u505c,PPB,PVL,ivb,\u538b\u6d41",
                                pc: "\u524d\u8d34,\u540e\u8d34,\u4e2d\u63d2,\u6682\u505c,PPB,PVL,ivb,\u538b\u6d41",
                                ipad: "\u524d\u8d34,\u540e\u8d34,\u6682\u505c,ivb,\u538b\u6d41",
                                mobile: "\u524d\u8d34,\u540e\u8d34,\u6682\u505c,ivb,\u538b\u6d41",
                                android: "\u524d\u8d34,\u540e\u8d34,\u6682\u505c,ivb,\u538b\u6d41",
                                "default": "\u524d\u8d34,\u540e\u8d34"
                            };
                        if ("pc" == f) return !0;
                        if (Txplayer.util.os.ipad) {
                            if (c.ipad.indexOf(a) >= 0) return !0
                        } else if (Txplayer.util.mobile) {
                            if (c.mobile.indexOf(a) >= 0) return "\u6682\u505c" != a || !!b.context.dataset.isBrowserFullscreen
                        } else if (Txplayer.util.os.android) {
                            if (c.android.indexOf(a) >= 0) return !0
                        } else if (c["default"].indexOf(a) >= 0) return !0;
                        return !1
                    }, getExtentionPlatform: function () {
                        return h.os.iphone ? "iphone" : h.os.ipad ? "ipad" : h.os.android ? "android" : h.os.mac ? "mac" : h.os.windows ? "pc" : ""
                    }, isVideoAd: function (a) {
                        if (!a) return !1;
                        var b = ["loadingad", "insertad", "endingad"];
                        return g.inArray(a, b) > -1
                    }, getAdChannelId: function () {
                        if (/ptag=wx\.search/i.test(location.href)) return 64;
                        if (this.context.config && this.context.config.hasOwnProperty("chid") && "" != this.context.config.chid) return this.context.config.chid;
                        var a = "";
                        return /(.*\.)3g\.qq\.com$/i.test(window.location.hostname) ? a = 13 : /(.*\.)?v\.qq\.com$/i.test(window.location.hostname) || h.browser.qqlive ? a = h.browser.wechat && Txplayer.util.mobile ? 180 : 0 : h.browser.wechat && window.location.href.indexOf("/x/qqnews/") > -1 ? a = 3 : h.browser.mqq ? a = 10 : h.browser.qqnews && (a = 2), a
                    }, isInSite: function () {
                        return "v.qq.com" === location.hostname || "film.qq.com" === location.hostname || 8 === h.getAdChannelId(this.context.config)
                    }, noAd4Advertisers: function () {
                        return "700700700" === Txplayer.util.getUrlParam("oid")
                    }, abortAndReRequest: function () {
                        this.dataset.ajaxAdRequest && "function" === Txplayer.$.type(this.dataset.ajaxAdRequest.abort) && this.dataset.ajaxAdRequest.abort(), this.requestCgi({
                            adType: "\u524d\u8d34"
                        })
                    }, listenTouch: function (a) {
                        if ("mac" === this.getExtentionPlatform()) {
                            var b = this,
                                c = function (a) {
                                    "block" == a.target.style.display && (r = a.target, q < r.currentTime && b.context.dataset.isPlayingAd && (r.currentTime = q))
                                },
                                d = setInterval(function () {
                                    r && (q = r.currentTime)
                                }, 1e3);
                            a ? (Txplayer.$("video").off("seeking.touchbarAd"), Txplayer.$("video").off("seeked.touchbarAd"), Txplayer.$("video").on("seeking.touchbarAd", c), Txplayer.$("video").on("seeked.touchbarAd", c)) : (clearInterval(d), Txplayer.$("video").off("seeking.touchbarAd"), Txplayer.$("video").off("seeked.touchbarAd"))
                        }
                    }, isCgiRequest: function (a, b) {
                        var c = "\u524d\u8d34,\u540e\u8d34";
                        if (this.dataset.requestList && this.dataset.requestList[b]) {
                            if (c.indexOf(b) > -1 && this.dataset.requestList[b].vid == a && this.dataset.requestList[b].status) return !0;
                            if (c.indexOf(b) < 0 && this.dataset.requestList[b].vid == a && "hasRequest" == this.dataset.requestList[b].status) return !0
                        }
                        return !1
                    }, setCgiStatus: function (a, b, c) {
                        this.dataset.requestList || (this.dataset.requestList = {}), this.dataset.requestList[b] = {
                            vid: a,
                            status: c
                        }
                    }, removeUrlParams: function (a) {
                        if ("string" == typeof a) {
                            var b = document.createElement("a");
                            return b.href = a, b.protocol + "//" + b.host + b.pathname
                        }
                    }, getDefaultAdRequestParams: function (a) {
                        var b = this.removeUrlParams(document.referrer) || "";
                        if (!b && top !== window) try {
                            b = this.removeUrlParams(top.location.href) || ""
                        } catch (a) {}
                        return b
                    }, requestCgi: function (a) {
                        var b = this;
                        if (a = a || {}, "view.inews.qq.com" === window.location.hostname && "\u524d\u8d34" === a.adType) return void b.context.msg.broadcast("loadingadIsEmpty", !1);
                        var c = {},
                            d = "http://livew.l.qq.com/livemsg?",
                            k = Txplayer.$.Deferred();
                        if (isPrepLoad = a.isPrepLoad || !1, vid = a.vid || this.context.dataset.vid, cid = a.cid || b.context.dataset.cid || "", rfid = h.getData(this.dataset.dataKey), !a.adType) return void h.showError("\u8bf7\u6c42\u5e7f\u544acgi\u53c2\u6570\u9519\u8bef, adType\u5fc5\u987b\u4f20");
                        if (b.supportAd(a.adType) && !this.isCgiRequest(vid, a.adType)) {
                            "https:" === location.protocol && (d = "https://livew.l.qq.com/livemsg?");
                            var l = function (c) {
                                "\u524d\u8d34" === a.adType ? b.context.msg.broadcast("loadingadIsEmpty", isPrepLoad) : "\u540e\u8d34" === a.adType ? b.context.msg.broadcast("adEnd", {
                                    type: "endingad"
                                }) : "\u538b\u6d41" === a.adType && b.context.msg.broadcast("reportDp3B", {
                                    bid: "10091000",
                                    step: "2",
                                    errorcode: "102"
                                }), b.context.dataset.adReportData.errorcode = 101, c || b.context.msg.broadcast("lviewRequestOver", {
                                    adType: j[a.adType],
                                    vid: vid
                                })
                            };
                            if (this.noAd4Advertisers() && "\u524d\u8d34" === a.adType) return void l();
                            if (!this.noAd4Advertisers()) {
                                b.context.config && "function" === Txplayer.$.type(b.context.config.getUserType) && (b.dataset.pu = b.context.config.getUserType());
                                var o = {
                                    pf: n,
                                    ad_type: j[a.adType],
                                    pf_ex: f,
                                    refer: b.getDefaultAdRequestParams() || "",
                                    url: location.href,
                                    ty: "web",
                                    plugin: "1.0.0",
                                    v: Txplayer.dataset.ver,
                                    coverid: cid,
                                    pt: b.context.dataset.businessId || "",
                                    vid: vid,
                                    flowid: b.context.dataset.flowid || "",
                                    guid: b.context.dataset.guid || "",
                                    vptag: "",
                                    pu: b.dataset.pu || "-1",
                                    chid: h.getAdChannelId(b.context.config),
                                    adaptor: p,
                                    dtype: 1,
                                    live: m,
                                    resp_type: "json",
                                    _time_random: +new Date
                                };
                                try {
                                    ("v.qq.com" == location.host || location.href.indexOf("m.v.qq.com/x/") > -1) && (o = $.extend(o, this.context.dataset.txplayerAuth.ad()))
                                } catch (b) {}
                                a.hasOwnProperty("zcindex") && (o.zcindex = a.zcindex), "\u524d\u8d34" === a.adType && rfid && (o.rfid = rfid), b.context.dataset.trailerMode && (o.page = "trailerMode", o.trailerMode = 1), "coolOpen" == b.context.config.playerType && (o.page = "coolOpen", b.context.dataset.isAnNewPlayAction ? o.channelId = 1 : o.channelId = 2), "page_langSwitch" == b.context.dataset.adext && (o.page = "langSwitch"), "pc" === f && (o.page || (o.page = b.context.config.adPage)), isPrepLoad && (o.preload = 1, o.url = location.href.replace(/(\/)([A-Za-z0-9]+)(\.html)/, "$" + vid + "$3"));
                                var q = h.getAdChannelId(b.context.config);
                                q && (o.chid = q);
                                var r = function (d) {
                                        if (b.setCgiStatus(vid, a.adType, "done"), !d) return c.code = 4, void l();
                                        if (!(d && d.adList && d.adList.item)) return c.code = 4, void l();
                                        if (d.adList.has_scene_info && "0" === d.adList.has_scene_info || "\u524d\u8d34" !== a.adType) {
                                            if ("\u538b\u6d41" === a.adType) return b.context.dataset.adReportData.adType = j[a.adType], void b.context.msg.broadcast("loadendyaliu", d)
                                        } else b.context.msg.broadcast("loadyaliu", "loadyaliu");
                                        var f;
                                        if (isPrepLoad ? (b.dataset.prepOrderList || (b.dataset.prepOrderList = {}), f = b.dataset.prepOrderList) : f = b.context.dataset, f.adJson = d, d.adLoc && d.adLoc.adFlag + "" != "0" && (f.isAdCanSkip = !0), c.code = 0, f.adList = [], b.dataset.isAdPlayStart = !1, f.reportIndex = 0, b.dataset.isPing = !1, Txplayer.$.isArray(d.adList.item) ? f.adList = d.adList.item : d.adList.item.image && f.adList.push(d.adList.item), "PPB" == a.adType ? b.context.msg.broadcast("ppbAdDataReady", f.adList) : "ivb" === a.adType ? (b.context.msg.broadcast("ivbAdDataReady", f.adList), b.context.msg.broadcast("reportAd", f.adJson.adList.item[0])) : "\u6682\u505c" === a.adType ? (f.adList = b.filterAdRes(f.adList, !0), 0 === f.adList.length ? b.context.msg.broadcast("reportAd", f.adJson.adList.item[0]) : b.context.msg.broadcast("reportAd", f.adList), b.dataset.isPing = !0) : (f.adList = b.filter(f.adList), g.extend(e.videoAdList[e.adType2VideoType[a.adType]], f.adList)), "\u524d\u8d34" === a.adType && (b.dataset.pvlAd = b.filterAdByType(d.adList.item, "PVL"), b.dataset.loadingAd = f.adList.concat(b.dataset.pvlAd)), b.context.msg.broadcast("lviewRequestOver", {
                                            adType: j[a.adType],
                                            vid: vid,
                                            adJson: d
                                        }), "\u524d\u8d34" === a.adType && (b.listenTouch(1), b.recordInsertAdStartTime(d.adLoc.breakTime), d.adLoc.mult && d.adLoc.mult.ivb && b.recordMultTime(d.adLoc.mult.ivb), 0 == b.dataset.pvlAd.length && 0 == f.adList.length || b.context.msg.broadcast("loadingAdDataReady", b.dataset.loadingAd, isPrepLoad)), "\u540e\u8d34" === a.adType && (b.listenTouch(1), b.context.msg.broadcast("endingAdDataReady", f.adList), b.context.dataset.nextVid && b.context.dataset.nextVideoInfo && b.context.dataset.nextVideoInfo.vid && (e.isPrepLoad = !0, b.requestCgi({
                                            adType: "\u524d\u8d34",
                                            isPrepLoad: !0,
                                            vid: b.context.dataset.nextVideoInfo.vid,
                                            cid: b.context.dataset.nextVideoInfo.cid
                                        }))), 0 === f.adList.length) {
                                            if ("\u524d\u8d34" === a.adType && 0 != b.dataset.pvlAd.length) return;
                                            return void l(d)
                                        }
                                        "\u4e2d\u63d2" === a.adType && (b.listenTouch(1), b.updateInsertAdListStatus(b.dataset.currentInsertAdPoint, i["request-cgi-done"]), b.dataset.isEnterAd = !0, b.context.dataset.isPlayingAd = !0, b.context.msg.broadcast("disableProgress"), b.context.msg.broadcast("disablePlayBtn"), b.context.msg.broadcast("disableDefinitionBtn"), b.enterAd(), setTimeout(function () {
                                            b.context.msg.broadcast("insertAdDataReady", {
                                                data: b.context.dataset.adList,
                                                insertTime: b.dataset.currentInsertAdPoint
                                            }), b.dataset.isEnterAd = !1
                                        }, 1e4)), "\u6682\u505c" === a.adType && b.context.msg.broadcast("pauseAdDataReady", b.context.dataset.adList), f.adDuration = b.getAdDuration(), k.resolve()
                                    },
                                    s = function () {
                                        if (!b.isCgiRequest(vid, a.adType)) {
                                            e.videoAdList[e.adType2VideoType[a.adType]] = [], b.setCgiStatus(vid, a.adType, "hasRequest"), b.context.dataset.adReportData.aid2oid = -1, b.context.dataset.adReportData.adType = j[a.adType], d += Txplayer.$.param(o), h.showInfo("HdPlayerAd.requestCgi.data", o);
                                            var f = Txplayer.$.Deferred();
                                            f.then(function (a) {
                                                return a
                                            }, function () {
                                                return b.dataset.ajaxAdRequest = Txplayer.$.jsonp({
                                                    url: d,
                                                    dataType: "jsonp",
                                                    callbackParameter: "callback",
                                                    callback: Txplayer.util.getJsonpCallbackName("livew"),
                                                    timeout: 2e4
                                                })
                                            }).done(r).fail(function (d, e) {
                                                b.context.dataset.adReportData.errorcode = 202, b.context.msg.broadcast("lviewRequestError", {
                                                    adType: j[a.adType],
                                                    vid: vid
                                                }), b.setCgiStatus(vid, a.adType, "fail"), "timeout" === e ? c.code = 3 : c.code = 1;
                                                var f;
                                                f = 404 === d.status ? "\u68c0\u6d4b\u5e7f\u544a\u88ab\u5c4f\u853d" : d.status, h.showError("\u5e7f\u544a\u8bf7\u6c42\u5931\u8d25", f + "-" + e), "\u524d\u8d34" === a.adType && b.context.msg.broadcast("loadingAdRequestError", {
                                                    code: d.status,
                                                    msg: f,
                                                    isPrepLoad: isPrepLoad
                                                }), "\u538b\u6d41" === a.adType && b.context.msg.broadcast("reportDp3B", {
                                                    bid: "10091000",
                                                    step: "2",
                                                    errorcode: "101"
                                                }), k.reject()
                                            }).always(function (d, e) {
                                                c.stime = (new Date).getTime(), c.adType = a.adType, c.isPrepLoad = isPrepLoad, c.vid = vid, b.dataset.useMiaoBo = !1, c.etime = (new Date).getTime(), b.context.dataset.adReportData.aid2oid = c.etime - c.stime, b.context.msg.broadcast("adCgiLoaded", c)
                                            }), b.dataset.useMiaoBo && "\u524d\u8d34" === a.adType && "function" == typeof _tenplayer_getAdData && _tenplayer_getAdData() ? f.resolve(_tenplayer_getAdData()) : f.reject()
                                        }
                                    };
                                if (!Txplayer.util.mobile || Txplayer.util.os.ipad || !Txplayer.util.txLoginOnMobile || "function" !== g.type(Txplayer.util.txLoginOnMobile.getWXCookie) || "v.qq.com" != location.href && "m.v.qq.com" != location.href) return "wx" === h.cookie.get("main_login") && (o.uid = h.cookie.get("vuserid"), o.tkn = h.cookie.get("vusession"), o.lt = "wx"), s(), k;
                                var t = !1;
                                Txplayer.util.txLoginOnMobile.getWXCookie(function (a) {
                                    return t ? k : ("wx" === a.main_login && (o.uid = a.vuserid, o.tkn = a.vusession, o.lt = "wx"), s(), t = !0, k)
                                })
                            }
                        }
                    }, setReportNull: function (a) {
                        a.order_id = "1", a.reportUrl = a.reportUrl.replace(/(livemsg\?o\=)(\d+)(\&)/, "$190$3"), a.reportUrlOther = null, a.reportUrlSDK = null
                    }, checkSuffix: function (a, b) {
                        a = a.toLowerCase();
                        var c = /\.(\w+)(?:$|\?|\#)/.exec(a);
                        if (!c || !c[1]) return !1;
                        if (!b) return c[1];
                        if ("string" == typeof b) return c[1] === b;
                        if (Txplayer.$.isArray(b)) {
                            for (var d = !1, e = b.length - 1; e >= 0; e--)
                                if (c[1] === b[e]) return d = !0, !0;
                            return !1
                        }
                    }, filterRichMedia: function (a) {
                        return !!(a && a.display_code && a.display_code.length > 0 && "Empty" != a.display_code) && (this.setReportNull(a), !0)
                    }, filterAdByType: function (a, b) {
                        var c = [],
                            a = a || [],
                            b = b || l;
                        return Txplayer.$(a).each(function (a, d) {
                            d && b.indexOf(d.type) >= 0 && c.push(d)
                        }), c
                    }, filter: function (a) {
                        var b, c, d, e, f, g = [],
                            h = this;
                        for (a = Txplayer.$.isArray(a) ? a : [], b = 0, c = a.length; b < c; b++)
                            if (d = a[b] || {}, d.oIdx = b + 1, e && e == d.type ? e == d.type && f++ : (f = 1, e = d.type), d.lcount = f, !h.filterRichMedia(d) && d && d.image && d.duration > 0 && (d.image = (Txplayer.$.isArray(d.image) ? d.image[0] : d.image) || {}, d.image && (d.image.url || d.image.vid))) {
                                if (h.checkSuffix(d.image.url, "mp4")) {
                                    d.link = "Y" === d.no_click ? "" : d.link, g.push(d);
                                    continue
                                }
                                h.setReportNull(d)
                            }
                        return g
                    }, filterAdRes: function (a, b) {
                        var c = [],
                            d = this;
                        return Txplayer.$(a).each(function (a, e) {
                            b && d.filterRichMedia(e) || e && e.image && ("array" === Txplayer.$.type(e.image) && (e.image = e.image[0]), e.image && e.image.width && e.image.height && e.image.url && (d.checkSuffix(e.image.url, ["jpg", "png", "jpeg"]) ? c.push(e) : d.setReportNull(e)))
                        }), c
                    }, recordMultTime: function (a) {
                        var b = this;
                        b.dataset.adLocTimes = [], Txplayer.$(a).each(function (a, c) {
                            c && c.time && b.dataset.adLocTimes.push({
                                index: a,
                                time: c.time / 1e3,
                                type: c.type,
                                area: k[c.type].area
                            })
                        })
                    }, recordInsertAdStartTime: function (a) {
                        if (a && a.hasOwnProperty("t")) {
                            var b = this,
                                c = [];
                            c = "string" === Txplayer.$.type(a.t) ? [a.t] : a.t, b.dataset.insertAdList = [];
                            var d = function (a) {
                                    var c = b.context.msg.getData("calcTotalPlaylist", "film");
                                    if (0 === c) return b.context.msg.once("getVideoUrlSuccess.recordInsertAdStartTime", function () {
                                        setTimeout(e, 100), b.context.msg.off("getVideoUrlSuccess.recordInsertAdStartTime")
                                    }), 0;
                                    if (c >= 2) {
                                        var d = a % 300;
                                        (d >= 285 || d <= 15) && (a += 30, a >= b.context.dataset.duration && (a -= 60))
                                    }
                                    return parseInt(a)
                                },
                                e = function () {
                                    b.dataset.insertAdList = [], Txplayer.$(c).each(function (a, c) {
                                        var e = d(parseInt(c));
                                        0 !== e && b.dataset.insertAdList.push({
                                            startTime: e,
                                            status: i["not-start"]
                                        })
                                    })
                                };
                            e()
                        }
                    }, checkInTimeArea: function (a, b, c) {
                        return a > b + c ? -1 : a < b - c ? 1 : 0
                    }, getAdPlayPoint: function (a) {
                        if (a && this.dataset.adLocTimes) {
                            a = parseInt(a);
                            var b = this;
                            return b.dataset.currentAdPoint = -1, Txplayer.$(b.dataset.adLocTimes).each(function (c, d) {
                                var e = b.checkInTimeArea(a, d.time, d.area);
                                return 0 === e ? b.dataset.currentAdPoint = c : 1 === e ? (b.dataset.nextAdPoint = c, -1) : void 0
                            }), -1
                        }
                    }, checkAdTime: function (a) {
                        if (a && this.dataset.adLocTimes) {
                            a = parseInt(a);
                            var b = this;
                            b.getAdPlayPoint(a), b.dataset.currentAdPoint > -1 && (this.requestCgi({
                                adType: k[b.dataset.adLocTimes[b.dataset.currentAdPoint].type].type,
                                zcindex: b.dataset.adLocTimes[b.dataset.currentAdPoint].index
                            }), b.dataset.adLocTimes.splice(b.dataset.currentAdPoint, 1)), 0 === b.dataset.adLocTimes.length
                        }
                    }, startInsertAd: function (a) {
                        if (a && this.dataset.insertAdList) {
                            a = parseInt(a);
                            var b = !1,
                                c = 0,
                                d = this,
                                e = function (b) {
                                    return a <= b + 15 && a >= b - 15
                                };
                            Txplayer.$(d.dataset.insertAdList).each(function (a, f) {
                                if (e(f.startTime) && parseInt(f.status) === i["not-start"]) return d.dataset.currentInsertAdPoint = f.startTime, b = !0, c = a, !1
                            }), b && (this.requestCgi({
                                adType: "\u4e2d\u63d2",
                                zcindex: c
                            }), this.updateInsertAdListStatus(d.dataset.currentInsertAdPoint, i["request-cgi"]))
                        }
                    }, updateInsertAdListStatus: function (a, b) {
                        a && b && Txplayer.$(this.dataset.insertAdList).each(function (c, d) {
                            if (d.startTime === a) return d.status = b, !1
                        })
                    }, getAdCurrentTime: function () {
                        if (!this.context.dataset.isPlayingAd) return 0;
                        var a = (this.context.dataset.currentPlayListType, this.context.dataset.playListIndex),
                            b = this.context.dataset.videoCurrentTime,
                            c = 0,
                            d = 0;
                        return Txplayer.$(this.context.dataset.adList).each(function (b, d) {
                            return b !== a && void(d.duration && (c += parseInt(d.duration, 10) / 1e3))
                        }), d = b + c, parseInt(d)
                    }, getAdDuration: function () {
                        var a = 0;
                        return g(this.context.dataset.adList).each(function (b, c) {
                            c.duration && (a += parseInt(c.duration, 10) / 1e3)
                        }), this.dataset.errAdTime && "number" == g.type(this.dataset.errAdTime) && (a -= this.dataset.errAdTime), a
                    }, getCurrentAdInfo: function () {
                        if (!this.context.dataset.isPlayingAd) return {};
                        var a = this.context.dataset.currentPlayListType;
                        if ("film" === a) return {};
                        var b, c = this.context.msg.getData("getPlayListIndex", a);
                        return this.context.dataset.adList && this.context.dataset.adList[c] && (b = this.context.dataset.adList[c]), b ? b : {}
                    }, isAdCanSkip: function () {
                        return !(!this.context.dataset.adJson || !this.context.dataset.adJson.adLoc || "0" === this.context.dataset.adJson.adLoc.adFlag)
                    }, pauseAd: function () {
                        this.context.msg.broadcast("pause")
                    }, playAd: function () {
                        this.context.msg.broadcast("play")
                    }, enterAd: function () {
                        this.context.msg.broadcast("enterAd")
                    }, skipAd: function (a) {
                        a = a || {};
                        var b = {
                            type: this.context.dataset.currentPlayListType,
                            force: !!a.force
                        };
                        return this.clearDelayReport(), a.force ? void this.context.msg.broadcast("handlerSkipAd", b) : void(this.context.dataset.duration > 180 || (this.context.dataset.isPlayingAd = !1, this.dataset.isEnterAd = !1, this.context.msg.broadcast("handlerSkipAd", b)))
                    }, skipErrorAd: function (a, b) {
                        if (a) {
                            var c = this,
                                d = c.context.dataset.currentPlayListType,
                                e = c.filterAdByType(c.context.dataset.adList, l),
                                f = e.length - 1 == a.index;
                            a.hasOwnProperty("index") && c.context.dataset.adList[a.index] && (c.dataset.errAdTime || (c.dataset.errAdTime = 0), c.dataset.errAdTime += c.context.dataset.adList[a.index].duration / 1e3, c.context.dataset.adDuration = c.getAdDuration()), f && (c.context.dataset.isPlayingAd = !1, c.dataset.isEnterAd = !1, c.dataset.errAdTime = null), b || c.context.msg.broadcast("loadingAdPlayError", {
                                isLastAd: f,
                                type: d
                            })
                        }
                    }, saveRFID: function () {
                        var a = this;
                        a.context.dataset.adJson && a.context.dataset.adJson.adLoc && a.context.dataset.adJson.adLoc.rfid && h.setData(a.dataset.dataKey, a.context.dataset.adJson.adLoc.rfid)
                    }, checkPing: function () {
                        var a = this,
                            b = a.getCurrentAdInfo() || {};
                        if (!a.dataset.isEnterAd && (a.dataset.isAdPlayStart || !(a.context.dataset.adList.length > 0) || b.hasOwnProperty("oIdx")))
                            if (a.context.dataset.reportIndex > a.context.dataset.adJson.adList.item.length) a.context.dataset.reportIndex = 0, a.dataset.isPing = !0;
                            else if (!a.dataset.isPing) {
                            a.context.dataset.reportIndex || (a.context.dataset.reportIndex = 1);
                            var c = a.context.dataset.reportIndex,
                                d = b.oIdx || a.context.dataset.adJson.adList.item.length;
                            for (0 == a.context.dataset.adList.length && (d = a.context.dataset.adJson.adList.item.length); c <= d;) {
                                var e = a.context.dataset.adJson.adList.item[c - 1];
                                e && "1" == e.order_id ? (a.getReportItem(c), a.reportAdByOid(c)) : c == d && (a.context.msg.broadcast("startViewMonitor", b), a.getReportItem(), a.reportAdByOid()), c++, a.context.dataset.reportIndex = c
                            }
                            d === a.context.dataset.adJson.adList.item.length && (a.dataset.isPing = !0, a.context.dataset.reportIndex = 0)
                        }
                    }, getReportItem: function (a) {
                        var b = this,
                            d = a ? b.context.dataset.adJson.adList.item[a - 1] : b.getCurrentAdInfo(),
                            e = [],
                            g = 0;
                        d && (d.reportUrl && (g = isNaN(d.ReportTime) ? 0 : Math.ceil(d.ReportTime / 1e3), e.push({
                            time: g,
                            url: c(d.reportUrl, {
                                pf_ex: f,
                                tpid: b.context.dataset.adJson.adLoc.tpid || ""
                            }),
                            isOther: !1
                        })), d.reportUrlOther && d.reportUrlOther.reportitem && (Txplayer.$.isArray(d.reportUrlOther.reportitem) || (d.reportUrlOther.reportitem = [d.reportUrlOther.reportitem]), Txplayer.$.each(d.reportUrlOther.reportitem, function (a, b) {
                            b && b.url && (g = isNaN(b.reporttime) ? 0 : Math.ceil(b.reporttime / 1e3), e.push({
                                time: g,
                                url: b.url,
                                isOther: !0
                            }))
                        })), d.reportUrlSDK && d.reportUrlSDK.reportitem && (Txplayer.$.isArray(d.reportUrlSDK.reportitem) || (d.reportUrlSDK.reportitem = [d.reportUrlSDK.reportitem]), Txplayer.$.each(d.reportUrlSDK.reportitem, function (a, b) {
                            b && b.url && (g = isNaN(b.reporttime) ? 0 : Math.ceil(b.reporttime / 1e3), e.push({
                                time: g,
                                url: b.url,
                                isOther: !0
                            }))
                        })), b.context.dataset.reportObjArr = e)
                    }, reportAdByOid: function (a) {
                        function b(a, b, c) {
                            var e;
                            e = 2 === m ? isNaN(c) ? Math.ceil(currentTime) : c : 0, e = b && b.ReportTime < e ? b.ReportTime : e;
                            var f = {
                                from: o,
                                pf: n,
                                v: Txplayer.dataset.ver,
                                dura: d.context.dataset.duration,
                                coverid: d.context.dataset.cid || "",
                                vptag: Txplayer.util.getPTAG() || "",
                                url: location.href,
                                oadid: d.context.dataset.adJson.adLoc.aid || "",
                                lcount: a || 1,
                                t: 1e3 * e
                            };
                            return "Empty" == b.display_code && (f.chid = h.getAdChannelId(d.context.config)), f
                        }
                        var d = this;
                        if (d.context.dataset.reportObjArr && d.context.dataset.reportObjArr[0]) {
                            var e = a ? d.context.dataset.adJson.adList.item[a - 1] : d.getCurrentAdInfo();
                            if (!e) return;
                            Txplayer.$.each(d.context.dataset.reportObjArr, function (a, f) {
                                if (d.context.dataset.reportObjArr[a]) {
                                    var g = 2 === m ? currentTime : 0;
                                    if (f) {
                                        var h = {
                                            url: document.URL
                                        };
                                        f.isOther || (h = Txplayer.$.extend(h, b(e.lcount, e, f.time)));
                                        var i = c(f.url, h),
                                            j = d.context.dataset.reportObjArr;
                                        g > f.time && g - f.time < 1 || f.time <= g ? Txplayer.util.report(i) : d.delayReport(i, 1e3 * parseInt(f.time)), j[a] = void 0
                                    }
                                }
                            }), d.context.dataset.reportObjArr = null
                        }
                    }, delayReport: function (a, b) {
                        var c = this,
                            d = setTimeout(function () {
                                Txplayer.util.report(a)
                            }, b);
                        c.dataset.delayReportArr || (c.dataset.delayReportArr = []), c.dataset.delayReportArr.push(d)
                    }, clearDelayReport: function () {
                        var a = this;
                        a.dataset.delayReportArr && Txplayer.$.each(a.dataset.delayReportArr, function (a, b) {
                            b && clearTimeout(b), b = null
                        })
                    }, getAdPlayStatus: function () {
                        return this.context.dataset.currentPlayListType && "film" !== this.context.dataset.currentPlayListType ? this.context.dataset.isPlayingAd = !0 : this.context.dataset.isPlayingAd = !1
                    }, addEventListener: function () {
                        var a = this;
                        this.dataset.eventsList = {}, this.dataset.eventsList[h.getUniqueMsgKey("adPluginMsg")] = function (b) {
                            switch (b.name) {
                            case "requestCgi":
                                a.requestCgi({
                                    adType: b.params
                                });
                                break;
                            case "reportAd":
                                a.context.msg.broadcast("reportAd", b.params)
                            }
                        }, this.dataset.eventsList[h.getUniqueMsgKey("videoTimeUpdate")] = function (b) {
                            if (a.dataset.isEnterAd) a.context.dataset.isPlayingAd = !0;
                            else if (a.context.dataset.isPlayingAd) return void(b && "film" === b.playListType && !a.dataset.isEnterAd && (a.context.dataset.isPlayingAd = !1));
                            a.supportAd("\u4e2d\u63d2") && a.startInsertAd(a.context.dataset.currentTime), a.checkAdTime(a.context.dataset.currentTime)
                        }, this.dataset.eventsList[h.getUniqueMsgKey("videoTimeUpdate")] = function (b) {
                            var c = (a.context.dataset.currentPlayListType, a.context.dataset.currentTime),
                                d = a.context.dataset.duration,
                                e = a.context.dataset.playEndTime;
                            b && "film" === b.playListType && !a.dataset.hasRequestEndingAdData && a.context.dataset.isTheLastOfCurrentType && (a.context.dataset.skipPrelude && e > 0 && c >= e && (a.dataset.hasRequestEndingAdData = !0, a.requestCgi({
                                adType: "\u540e\u8d34"
                            })), d && d - c <= 5 && (a.dataset.hasRequestEndingAdData = !0, a.requestCgi({
                                adType: "\u540e\u8d34"
                            }))), a.context.dataset.adJson && a.context.dataset.adJson.adList && a.checkPing()
                        }, this.dataset.eventsList[h.getUniqueMsgKey("videoEnd")] = function (b) {
                            b.playListTypeEnd && "loadingad" === b.playListType ? (a.context.dataset.isPlayingAd = !1, a.context.msg.broadcast("loadingAdEnded"), a.saveRFID()) : b.playListTypeEnd && "insertad" === b.playListType && (a.context.dataset.isPlayingAd = !1, a.updateInsertAdListStatus(a.dataset.currentInsertAdPoint, i["play-end"]), a.context.msg.broadcast("insertAdEnded")), b.playListTypeEnd && "film" !== b.playListType && (a.listenTouch(0), a.checkPing(), a.context.msg.broadcast("adEnd", {
                                type: b.playListType
                            }), a.context.userMsg.broadcast("adEnd", {
                                type: b.playListType
                            }), a.dataset.errAdTime = 0)
                        }, this.dataset.eventsList[h.getUniqueMsgKey("videoPlaying")] = function (b) {
                            var c = a.context.dataset.currentPlayListType;
                            return "film" === c ? void(a.dataset.errAdTime = null) : void("loadingad" !== c || a.dataset.loadingAdHasPlayed ? "insertad" !== c || a.dataset.insertAdHasPlayed ? "endingad" !== c || a.dataset.endingAdHasPlayed || (a.context.msg.broadcast("endingAdStart"), a.context.userMsg.broadcast("adStart", {
                                type: c
                            }), a.dataset.endingAdHasPlayed = !0) : (a.context.msg.broadcast("insertAdStart"), a.context.userMsg.broadcast("adStart", {
                                type: c
                            }), a.dataset.insertAdHasPlayed = !0) : (a.context.msg.broadcast("loadingAdStart"), a.context.userMsg.broadcast("adStart", {
                                type: c
                            }), a.dataset.loadingAdHasPlayed = !0))
                        }, this.dataset.eventsList[h.getUniqueMsgKey("videoPlay")] = function (b) {
                            a.getAdPlayStatus() && (a.dataset.isAdPlayStart = !0)
                        }, this.dataset.eventsList[h.getUniqueMsgKey("videoPlaying")] = function (b) {
                            a.getAdPlayStatus() && (a.dataset.isAdPlayStart = !0)
                        }, this.dataset.eventsList[h.getUniqueMsgKey("userPausePlayer")] = function () {
                            a.context.dataset.isPlayingAd || a.requestCgi({
                                adType: "\u6682\u505c"
                            })
                        }, this.dataset.eventsList[h.getUniqueMsgKey("userStopVideo")] = function (b) {
                            a.dataset.requestList = null
                        }, this.dataset.eventsList[h.getUniqueMsgKey("videoEnd")] = function (b) {
                            "film" === b.playListType || "endingad" === b.playListType && b.playListTypeEnd || a.context.msg.broadcast("hideUiPlay"), b.playListTypeEnd && b.isAllEnd && (a.context.dataset.isPlayingAd = !1, a.dataset.hasRequestGetinfo = !1, a.dataset.hasRequestEndingAdData = !1, a.dataset.isEnterAd = !1)
                        }, this.dataset.eventsList[h.getUniqueMsgKey("getVideoUrlSuccess")] = function () {
                            a.dataset.hasRequestGetinfo = !0
                        }, this.dataset.eventsList[h.getUniqueMsgKey("error")] = function (b) {
                            return b && !a.isVideoAd(b.type) ? void(a.dataset.errAdTime = null) : (a.context.dataset.adReportData.errorcode = 207, a.context.msg.broadcast("reportAdError", b), void a.skipErrorAd(b))
                        }, this.dataset.eventsList[h.getUniqueMsgKey("vidChange")] = function (b, c) {
                            a.dataset.hasRequestLoadingAdData = null, a.dataset.hasRequestEndingAdData = null, a.dataset.hasRequestGetinfo = null, a.context.dataset.isPlayingAd = !1, a.dataset.loadingAdHasPlayed = null, a.dataset.insertAdHasPlayed = null, a.dataset.endingAdHasPlayed = null, a.dataset.errAdTime = null, a.dataset.isEnterAd = !1, a.context.dataset.isSkipAd = !1
                        }, this.dataset.eventsList[h.getUniqueMsgKey("beforeVideoPlay")] = function (b, c) {
                            a.dataset.hasRequestLoadingAdData = null, a.dataset.hasRequestGetinfo = null, e.isPrepLoad = !1, e.currentVid = b, a.dataset.requestList && a.dataset.requestList["\u524d\u8d34"] && b !== c ? a.dataset.requestList["\u524d\u8d34"].vid != b ? (a.dataset.requestList = null, a.abortAndReRequest()) : (a.dataset.isPing = !1, g.extend(a.context.dataset, a.dataset.prepOrderList), a.context.dataset.adDuration = a.getAdDuration(), a.dataset.prepOrderList = null) : (a.dataset.requestList = null, a.requestCgi({
                                adType: "\u524d\u8d34"
                            })), a.listenTouch(0)
                        }, this.dataset.eventsList[h.getUniqueMsgKey("beforeVideoRePlay")] = function (b) {
                            a.dataset.hasRequestLoadingAdData = null, a.dataset.hasRequestGetinfo = null, a.dataset.isEnterAd = !1, a.context.dataset.isRePlay = !0, a.context.dataset.isSkipAd = !1, a.context.dataset.isPlayingAd = !1, a.dataset.loadingAdHasPlayed = null, a.dataset.insertAdHasPlayed = null, a.dataset.endingAdHasPlayed = null, a.dataset.requestList = null
                        }, this.dataset.eventsList[h.getUniqueMsgKey("requestYaliu")] = function (b) {
                            a.context.dataset.yaliuRequestStart = (new Date).getTime(), a.context.msg.broadcast("reportDp3B", {
                                bid: "10091000",
                                step: "1"
                            }), e.isPrepLoad ? a.requestCgi({
                                adType: "\u538b\u6d41",
                                isPrepLoad: !0,
                                vid: a.context.dataset.nextVideoInfo.vid,
                                cid: a.context.dataset.nextVideoInfo.cid
                            }) : a.requestCgi({
                                adType: "\u538b\u6d41"
                            })
                        }, Txplayer.$.each(this.dataset.eventsList, function (b, c) {
                            a.context.msg.on(b, c)
                        }), this.context.userMsg.on("1080pVipGuideClose.hdplayerad", function (b) {
                            b && "closeSkipAd" === b.action && a.playAd()
                        })
                    }, exportsModuleApis: function () {
                        var a = this;
                        this.dataset.privateApis = {}, this.dataset.privateApis.pauseAd = this.pauseAd.bind(this), this.dataset.privateApis.playAd = this.playAd.bind(this), this.dataset.privateApis.skipAd = this.skipAd.bind(this), this.dataset.privateApis.requestLoadingAd = function () {
                            a.requestCgi({
                                adType: "\u524d\u8d34"
                            })
                        }, Txplayer.$.each(this.dataset.privateApis, function (b, c) {
                            a.context.msg.on(b, c)
                        })
                    }, getReqId: function () {
                        for (var a = [], b = "0123456789abcdef", c = 0; c < 36; c++) a[c] = b.substr(Math.floor(16 * Math.random()), 1);
                        a[14] = "4", a[19] = b.substr(3 & a[19] | 8, 1), a[8] = a[13] = a[18] = a[23] = "-";
                        var d = a.join("");
                        this.context.dataset.reqId = d
                    }
                }, Txplayer.register("HdPlayerAd", d)
            },
            function (a, b, c) {
                function d(a) {
                    e = Txplayer.$, this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
                }
                var e = Txplayer.$,
                    f = Txplayer.util;
                Txplayer.apiList, c(3), d.prototype = {
                    init: function () {
                        this.write(), this.addEventListener()
                    }, write: function () {}, assemble: function (a) {
                        for (var b = {
                            adList: {
                                has_scene_info: a.adList.has_scene_info,
                                IsNeedTime: a.adList.IsNeedTime,
                                item: []
                            },
                            adGetv: a.adGetv,
                            adLoc: a.adLoc
                        }, c = 0; c < a.adList.item.length; c++) {
                            var d = a.adList.item[c].anchor_binding;
                            if (d)
                                for (var e = 0; e < d.length; e++) {
                                    var f = a.adList.item[c].order_id,
                                        g = d[e].cid,
                                        h = d[e].anchor_rule_id,
                                        i = d[e].anchor_id,
                                        j = this.assembleEachOrder(f, g, h, i, a.adList.item[c], a.scene_info.anchor_rule);
                                    b.adList.item.push(j)
                                }
                        }
                        return b
                    }, assembleEachOrder: function (a, b, c, d, e, f) {
                        var g = JSON.parse(JSON.stringify(e));
                        delete g.creative, delete g.anchor_binding;
                        for (var h = 0; h < e.creative.length; h++) {
                            var i = e.creative[h];
                            if (i.id == b)
                                for (var j in i) "id" == j ? g.cid = i[j] : g[j] = i[j]
                        }
                        for (var h = 0; h < e.anchor_binding.length; h++) {
                            var k = e.anchor_binding[h];
                            k.cid == b && k.anchor_rule_id == c && k.anchor_id == d && (g.link = k.link, g.report_url = k.report_url, g.anchor_rule_id = c)
                        }
                        for (var h = 0; h < f.length; h++)
                            if (f[h].id == c)
                                for (var l = f[h].anchor, m = 0; m < l.length; m++) l[m].id == d && (g.anchor = l[m], g.anchor_rule_type = f[h].type);
                        return g
                    }, requestPNG: function (a, b) {
                        0 == a.indexOf("http://") && (a = "https://" + a.split("http://")[1]);
                        var c = this;
                        Txplayer.$.jsonp({
                            url: a,
                            dataType: "jsonp",
                            callbackParameter: "callback",
                            callback: "adplayerYaliuJsonpCallback",
                            timeout: 2e4,
                            cache: !0
                        }).done(function (a) {
                            for (var d = c.dataset.expandingOrders, e = 0; e < d.length; e++)
                                if (d[e].cid == b) {
                                    var f = d[e].png_index;
                                    d[e].material[f].data = a, d[e].offscreenCanvasArr = [];
                                    var g = a.width,
                                        h = a.height;
                                    d[e].anchor.pos_w = g / 1920, d[e].anchor.pos_h = h / 1080;
                                    for (var i = 0; i < a.frames.length - 1; i++) {
                                        var j = a.frames[i],
                                            k = "data:image/png;base64," + a.data[j];
                                        c.getOffscreenCanvas(k, i, g, h, e, b)
                                    }
                                }
                            c.context.msg.broadcast("reportDp3B", {
                                bid: "10091000",
                                step: "4",
                                errorcode: "100",
                                index: b,
                                type: "png",
                                cost: (new Date).getTime() - c.context.dataset.yaliuFodderStart[b]
                            })
                        }).fail(function (a, d) {
                            c.context.msg.broadcast("reportDp3B", {
                                bid: "10091000",
                                step: "4",
                                errorcode: "101",
                                type: "png",
                                cost: (new Date).getTime() - c.context.dataset.yaliuFodderStart[b]
                            })
                        })
                    }, requestMP4: function (a, b) {
                        0 == a.indexOf("http://") && (a = "https://" + a.split("http://")[1]);
                        for (var c = this, d = c.dataset.expandingOrders, e = 0; e < d.length; e++)
                            if (d[e].cid == b) {
                                var f = d[e].mp4_index,
                                    g = d[e].material[f].width / 2,
                                    h = d[e].material[f].height;
                                d[e].anchor.pos_w = g / 1920, d[e].anchor.pos_h = h / 1080;
                                var i = document.createElement("video");
                                d[e].videoElement = i, i.style.width = g + "px", i.style.height = h + "px";
                                var j = new XMLHttpRequest;
                                j.open("GET", a, !0), j.responseType = "arraybuffer", j.timeout = "6000", j.send(), j.onload = function () {
                                    if (200 !== j.status) return alert("Unexpected status code " + j.status + " for " + a), !1;
                                    var d = new Uint8Array(j.response),
                                        e = window.URL.createObjectURL(new Blob([d], {
                                            type: "video/mp4"
                                        }));
                                    i.src = e, i.videoCanPlay = !0, c.context.msg.broadcast("reportDp3B", {
                                        bid: "10091000",
                                        step: "4",
                                        errorcode: "100",
                                        index: b,
                                        type: "mp4",
                                        cost: (new Date).getTime() - c.context.dataset.yaliuFodderStart[b]
                                    })
                                }, j.onerror = function () {
                                    c.context.msg.broadcast("reportDp3B", {
                                        bid: "10091000",
                                        step: "4",
                                        errorcode: "101",
                                        type: "mp4",
                                        cost: (new Date).getTime() - c.context.dataset.yaliuFodderStart[b]
                                    })
                                }
                            }
                    }, getOffscreenCanvas: function (a, b, c, d, e, f) {
                        var g = this,
                            h = document.createElement("img");
                        h.src = a, h.onload = function () {
                            var a = document.createElement("canvas"),
                                f = a.getContext("2d");
                            a.width = c, a.height = d, f.drawImage(h, 0, 0, c, d), g.dataset.expandingOrders[e].offscreenCanvasArr[b] = a
                        }
                    }, addEventListener: function () {
                        var a = this;
                        this.dataset.eventsList = {};
                        var b = this.dataset.eventsList;
                        b[f.getUniqueMsgKey("videoTimeUpdate")] = function (b) {
                            var c = a.context.dataset.currentTime,
                                d = a.dataset.expandingOrders;
                            if (d && b)
                                for (var e = 0; e < d.length; e++) {
                                    if ("pc" === a.context.gpApi.pf_ex) var f = a.checkTime(d[e], c, 6e3);
                                    else var f = a.checkTime(d[e], c, 2e4);
                                    var g = a.checkTime(d[e], c, 0);
                                    f && !d[e].preload && (a.preload(d[e]), d[e].preload = !0), g ? a.context.dataset.canReportCids[d[e].cid] = !0 : (a.context.dataset.canReportCids[d[e].cid] = !1, a.context.dataset.hasReportCids[d[e].cid] = !1, a.context.msg.broadcast("yaliuKeybroadSeek", d[e].cid)), g && a.context.dataset.hasShowCidArr.indexOf(d[e].cid) == -1 && 1 == a.context.dataset.playState && a.context.dataset.vid == d[e].vid && "film" == b.playListType && ("pc" === a.context.gpApi.pf_ex ? (a.context.dataset.hasShowCidArr.push(d[e].cid),
                                        a.context.msg.broadcast("renderYaliu", d[e])) : d[e].material[d[e].png_index].data && (a.context.dataset.hasShowCidArr.push(d[e].cid), a.context.msg.broadcast("renderYaliu", d[e]))), "film" != b.playListType && a.context.msg.broadcast("yaliuKeybroadSeek", d[e].cid)
                                }
                        }, b[f.getUniqueMsgKey("loadyaliu")] = function (b) {
                            a.context.msg.broadcast("requestYaliu")
                        }, b[f.getUniqueMsgKey("loadendyaliu")] = function (b) {
                            a.context.dataset.yaliuRequestEnd = (new Date).getTime(), a.context.msg.broadcast("reportDp3B", {
                                bid: "10091000",
                                step: "2",
                                errorcode: "100",
                                cost: a.context.dataset.yaliuRequestEnd - a.context.dataset.yaliuRequestStart
                            }), a.context.dataset.hasShowCidArr = [], a.context.dataset.canReportCids = {}, a.context.dataset.hasReportCids = {}, a.context.dataset.yaliuCidArr = [], a.dataset.expandingOrders = a.assemble(b).adList.item;
                            for (var c = b.adLoc.vid, d = a.dataset.expandingOrders, e = d.length - 1; e >= 0; e--) {
                                for (var b = d[e], f = b.material.length - 1; f >= 0; f--) {
                                    var g = b.material[f].url;
                                    ".mp4" === g.substring(g.length - 4).toLowerCase() ? b.mp4_index = f : ".json" === g.substring(g.length - 5).toLowerCase() && (b.png_index = f)
                                }
                                b.vid = c, a.context.dataset.hasReportCids[b.cid] = !1, a.context.dataset.yaliuCidArr.push(b.cid)
                            }
                            a.context.dataset.yaliuFodderStart = {}
                        }, Txplayer.$.each(this.dataset.eventsList, function (b, c) {
                            a.context.msg.on(b, c)
                        }), a.checkTime = function (b, c, d) {
                            var e;
                            return c *= 1e3, e = b.anchor.interval && "" != b.anchor.interval ? b.anchor.begin <= c + d && 1e3 * a.context.dataset.duration - b.anchor.end > c : b.anchor.begin <= c + d && parseInt(b.anchor.begin) + parseInt(b.duration) > c
                        }, a.preload = function (b) {
                            "pc" === a.context.gpApi.pf_ex ? (a.requestMP4(b.material[b.mp4_index].url, b.cid), a.context.msg.broadcast("reportDp3B", {
                                bid: "10091000",
                                step: "3",
                                type: "mp4"
                            })) : (a.requestPNG(b.material[b.png_index].url, b.cid), a.context.msg.broadcast("reportDp3B", {
                                bid: "10091000",
                                step: "3",
                                type: "png"
                            })), a.context.dataset.yaliuFodderStart[b.cid] = (new Date).getTime()
                        }
                    }
                }, Txplayer.register("YaliuPlayer", d)
            },
            function (a, b) {
                function c(a) {
                    d = Txplayer.$, this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.api = {
                        url: "//ra.gtimg.com/web/viewability/viewability.js",
                        reportData: null,
                        startMonitor: null
                    }, this.init()
                }
                var d = Txplayer.$,
                    e = Txplayer.util;
                Txplayer.apiList, c.prototype = {
                    init: function () {
                        this.addEventListener()
                    }, initApi: function (a) {
                        var b = this;
                        return d.getScript(b.api.url, function () {
                            crystal && crystal.startviewability && (b.api.startMonitor = crystal.startviewability), a && a()
                        }, function () {})
                    }, getReportData: function (a) {
                        var b = [];
                        if (!(a && a.reportUrlView && a.reportUrlView.reportitem && a.reportUrlView.reportitem.length > 0)) return this.api.reportData = null;
                        for (var b = [], c = 0; c < a.reportUrlView.reportitem.length; c++) {
                            var d;
                            a.reportUrlView.reportitem[c] && a.reportUrlView.reportitem[c].url && (d = a.reportUrlView.reportitem[c].url), b.push(d)
                        }
                        return this.api.reportData = {
                            objectID: this.context.$mod.$playermod.selector,
                            reportItemUrl: b,
                            oid: a.order_id,
                            duration: a.duration,
                            retry: 0
                        }
                    }, addEventListener: function () {
                        var a = this;
                        this.dataset.eventsList = {};
                        var b = this.dataset.eventsList;
                        b[e.getUniqueMsgKey("startViewMonitor")] = function (b) {
                            a.getReportData(b), a.api.reportData && (a.api.startMonitor ? a.api.startMonitor(a.api.reportData) : a.initApi(function () {
                                a.api.startMonitor(a.api.reportData)
                            }))
                        }, Txplayer.$.each(this.dataset.eventsList, function (b, c) {
                            a.context.msg.on(b, c)
                        })
                    }
                }, Txplayer.register("ViewMonitor", c)
            },
            function (a, b) {
                function c(a) {
                    d = Txplayer.$, this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
                }
                var d = Txplayer.$,
                    e = (Txplayer.apiList, Txplayer.util);
                c.prototype = {
                    init: function () {
                        this.addEventListener(), this.dp3Report(1)
                    }, setReportTimeData: function () {
                        if (this.dataset.adData || "object" === Txplayer.$.type(this.dataset.adData)) {
                            var a = [],
                                b = this;
                            this.dataset.reportData = {}, this.dataset.adData.hasOwnProperty("ReportTime") && this.dataset.adData.reportUrl && (this.dataset.reportData[this.dataset.adData.ReportTime] = [this.dataset.adData.reportUrl]), this.dataset.adData.reportUrlOther && this.dataset.adData.reportUrlOther.reportitem && (a = "object" === Txplayer.$.type(this.dataset.adData.reportUrlOther.reportitem) ? [this.dataset.adData.reportUrlOther.reportitem] : this.dataset.adData.reportUrlOther.reportitem), a.length && Txplayer.$(a).each(function (a, c) {
                                c.hasOwnProperty("reporttime") && c.url && (b.dataset.reportData[c.reporttime] || (b.dataset.reportData[c.reporttime] = []), b.dataset.reportData[c.reporttime].push(c.url))
                            })
                        }
                    }, getAdItemParma: function (a, b, c) {
                        var d = this;
                        return c && c.adJson && (d.dataset.adJson = c.adJson), d.dataset.adJson && d.dataset.adJson[a] && d.dataset.adJson[a].hasOwnProperty(b) ? d.dataset.adJson[a][b] : ""
                    }, dp3Report: function (a, b) {
                        if (a) {
                            b || (b = {});
                            var c = this;
                            c.context.dataset && c.context.dataset.adReportData && c.context.dataset.adReportData.adType && (this.dataset.adType = c.context.dataset.adReportData.adType);
                            var d, f = e.cookie.get("luin") || e.cookie.get("uin") || "",
                                g = {},
                                h = {
                                    requestid: this.context.dataset.guid,
                                    pf: "H5",
                                    chid: e.getAdChannelId(c.context.config),
                                    adtype: b.adType || this.dataset.adType || "",
                                    timestamp: +new Date,
                                    mvid: b.vid || this.context.dataset.vid || "",
                                    videoDuration: this.context.dataset.duration || 0,
                                    coverid: "",
                                    qq: f
                                },
                                i = "//dp3.qq.com/qqvideo/?",
                                j = {};
                            if (2 === a || 5 === a) {
                                var k = [],
                                    l = [],
                                    m = [];
                                if (items = c.getAdItemParma("adList", "item", b), items) {
                                    var n = "object" === Txplayer.$.type(items) ? [items] : items;
                                    Txplayer.$(n).each(function (a, b) {
                                        b.order_id && b.duration && (b.duration && m.push(b.duration), b.image && b.image.vid ? l.push(b.image.vid) : "array" === Txplayer.$.type(b.image) && b.image.length && b.image[0].vid && l.push(b.image[0].vid), k.push(b.order_id))
                                    })
                                }
                                j.oid = k.join(","), j.vid = l.join(","), j.videopt = m.join(",")
                            }
                            1 === a ? d = {} : 2 === a ? d = {
                                vid2aid: c.getAdItemParma("adLoc", "vid2aid", b),
                                aid2oid: c.context.dataset.adReportData.aid2oid || "",
                                oid2url: c.getAdItemParma("adGetv", "oid2url", b),
                                merged: 1,
                                adaptor: 1,
                                errorcode: c.context.dataset.adReportData.errorcode || "",
                                adid: c.getAdItemParma("adLoc", "aid", b),
                                oid: j.oid,
                                vid: j.vid
                            } : 3 === a ? d = {
                                videofbt: c.context.dataset.adReportData.videofbt || "",
                                errorcode: c.context.dataset.adReportData.errorcode || ""
                            } : 4 === a ? d = {
                                isskip: c.context.dataset.adReportData.isskip || "",
                                errorcode: c.context.dataset.adReportData.errorcode || "",
                                skiptime: c.context.dataset.adReportData.skiptime || "",
                                adDidShowTime: c.context.dataset.videoCurrentTime
                            } : 5 === a && (d = {
                                errorcode: "",
                                adtt: this.context.dataset.adDuration,
                                videopt: j.videopt,
                                videott: b.adRealPlayedTime
                            }), d && (g = Txplayer.$.extend(h, d), g.step = a, i += Txplayer.$.param(g), e.report(i), c.context.dataset.adReportData = {})
                        }
                    }, dp3BReport: function (a) {
                        var b = this;
                        b.context.dataset && b.context.dataset.adReportData && b.context.dataset.adReportData.adType && (this.dataset.adType = b.context.dataset.adReportData.adType);
                        var c = "//dp3.qq.com/stdlog?",
                            d = {
                                bid: a.bid,
                                vid: this.context.dataset.vid,
                                coverid: this.context.dataset.cid,
                                guid: this.context.dataset.guid,
                                qq: e.cookie.get("luin") || e.cookie.get("uin") || "",
                                adtype: this.dataset.adType || "",
                                oid: a.oid || "",
                                adid: this.dataset.adJson ? this.dataset.adJson.adLoc.aid : "",
                                index: a.creativeid || "",
                                step: a.step || "",
                                errorcode: a.errorcode || "",
                                cost: a.cost || "",
                                reqid: this.context.dataset.reqid,
                                pf: "H5",
                                type: a.type || "",
                                timestamp: (new Date).getTime()
                            };
                        c += Txplayer.$.param(d), e.report(c)
                    }, resetDataset: function () {
                        delete this.dataset.adFirstPlayTime, delete this.dataset.adFirstPlayingTime, delete this.dataset.adRealPlayedTime
                    }, getCurrentAdInfo: function () {
                        if (!this.context.dataset.isPlayingAd) return {};
                        var a, b = (this.context.dataset.playListType, this.context.dataset.currentPlayListIndex);
                        return this.context.dataset.adList && this.context.dataset.adList[b] && (a = this.context.dataset.adList[b]), a ? a : {}
                    }, addEventListener: function () {
                        var a = this;
                        this.dataset.eventsList = {}, this.dataset.eventsList[e.getUniqueMsgKey("videoTimeUpdate")] = function (b) {
                            if (b && "loadingad" === b.playListType && b.videoTag) {
                                "array" === Txplayer.$.type(a.dataset.adRealPlayedTime) && (a.dataset.adRealPlayedTime[a.dataset.adRealPlayedTime.length - 1] = a.dataset.adRealPlayedTime[a.dataset.adRealPlayedTime.length - 1] + 1);
                                var c = parseInt(b.videoTag.currentTime);
                                a.dataset.reportData && a.dataset.reportData[c] && Txplayer.$(a.dataset.reportData[c]).each(function (a, b) {
                                    e.report(b)
                                })
                            }
                        }, this.dataset.eventsList[e.getUniqueMsgKey("videoPlay")] = function (b) {
                            b && ("loadingad" !== b.playListType && "insertad" !== b.playListType && "endingad" !== b.playListType || (a.dataset.adRealPlayedTime || (a.dataset.adRealPlayedTime = []), a.dataset.adRealPlayedTime.hasOwnProperty(b.videoTag.src) || (a.dataset.adRealPlayedTime[b.videoTag.src] = null, a.dataset.adRealPlayedTime.push(-1)), a.dataset.adFirstPlayTime = +new Date, a.context.dataset.adReportData.videofbt = +new Date, a.dataset.adData = a.getCurrentAdInfo(), a.setReportTimeData()))
                        }, this.dataset.eventsList[e.getUniqueMsgKey("videoPlaying")] = function (b) {
                            b && ("loadingad" !== b.playListType && "insertad" !== b.playListType && "endingad" !== b.playListType || (a.context.dataset.adReportData.videofbt && a.context.dataset.adReportData.videofbt > 0 && (a.context.dataset.adReportData.videofbt = +new Date - a.context.dataset.adReportData.videofbt), a.dp3Report(3, {
                                adType: a.context.gpApi.adtypeMap[a.context.gpApi.videoType2AdType[b.playListType]],
                                vid: a.context.gpApi.currentVid || ""
                            })))
                        }, this.dataset.eventsList[e.getUniqueMsgKey("openAdLink")] = function (a) {
                            if (a && a.clickReportUrlOther && a.clickReportUrlOther.reportitem) return void e.report(a.clickReportUrlOther.reportitem.url)
                        }, this.dataset.eventsList[e.getUniqueMsgKey("reportAd")] = function (b) {
                            var c = [];
                            Txplayer.$.isArray(b) && (b = b[0]), b && "object" == typeof b && (b.reportUrl && e.report(b.reportUrl), b.report_url && e.report(b.report_url), b.reportUrlOther && b.reportUrlOther.reportitem && ("object" === Txplayer.$.type(b.reportUrlOther.reportitem) ? c.push(b.reportUrlOther.reportitem) : c = b.reportUrlOther.reportitem), Txplayer.$(c).each(function (a, b) {
                                b && b.url && e.report(b.url)
                            }), a.resetDataset(), a.dataset.adType = b ? b.type : "", a.dataset.adJson = a.context.dataset.adJson, a.dp3Report(3))
                        }, this.dataset.eventsList[e.getUniqueMsgKey("videoEnd")] = function (b) {
                            !b.playListTypeEnd || "loadingad" !== b.playListType && "insertad" !== b.playListType && "endingad" !== b.playListType || a.dp3Report(5, {
                                adType: a.context.gpApi.adtypeMap[a.context.gpApi.videoType2AdType[b.playListType]],
                                vid: a.context.gpApi.currentVid || "",
                                adRealPlayedTime: "array" === Txplayer.$.type(a.dataset.adRealPlayedTime) ? a.dataset.adRealPlayedTime.join(",") : ""
                            })
                        }, this.dataset.eventsList[e.getUniqueMsgKey("lviewRequestOver")] = function (b) {
                            a.resetDataset(), setTimeout(function () {
                                a.dp3Report(2, b)
                            }, 100)
                        }, this.dataset.eventsList[e.getUniqueMsgKey("lviewRequestError")] = function (b) {
                            a.resetDataset(), setTimeout(function () {
                                a.dp3Report(2, b)
                            }, 100)
                        }, this.dataset.eventsList[e.getUniqueMsgKey("reportAdError")] = function (b) {
                            a.resetDataset(), a.dp3Report(3, {
                                adType: a.context.gpApi.adtypeMap[a.context.gpApi.videoType2AdType[b.playListType]],
                                vid: a.context.gpApi.currentVid || ""
                            })
                        }, this.dataset.eventsList[e.getUniqueMsgKey("adSkip")] = function (b) {
                            a.dp3Report(4, {
                                vid: a.context.gpApi.currentVid || ""
                            })
                        }, this.dataset.eventsList[e.getUniqueMsgKey("reportDp3B")] = function (b) {
                            a.dp3BReport(b)
                        }, Txplayer.$.each(this.dataset.eventsList, function (b, c) {
                            a.context.msg.on(b, c)
                        })
                    }
                }, Txplayer.register("HdPlayerAdReport", c)
            }
        ])
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(62)
    }, 62: function (a, b, c) {
        function d(a) {
            this.dataset = {
                vidChangeFlag: !0
            }, this.context = a, this.init()
        }

        function e(a, b, c) {
            a = a || {};
            var d = "";
            return "film" !== c && b.error ? d = Txplayer.errcode.getPlatformErrorCode("ad", "aderror", "0" + (b.error.code - 1)) : "film" !== c && "timeout" === a ? d = Txplayer.errcode.getPlatformErrorCode("ad", "aderror", "03") : "film" !== c && a.error ? d = Txplayer.errcode.getPlatformErrorCode("ad", "aderror", "0" + (a.error - 1)) : b.error && (d = Txplayer.errcode.getPlatformErrorCode("player", "h5video", "0" + (b.error.code - 1))), d
        }
        var f = c(63),
            g = Txplayer.$,
            h = Txplayer.util;
        d.prototype = {
            init: function () {
                g = Txplayer.$, this.updatePlayListIndex(0), this.playStateInit(), this.write(), this.loadSubPlugins()
            }, playStateInit: function () {
                this.context.dataset.playState = -1
            }, write: function () {
                this.context.config.isUseCrossOrigin = this.context.config.enableMoblieDefn || this.context.config.isUseCrossOrigin, this.context.dataset.$playermod.append(this.buildHTML()), this.dataset.$videomod = this.context.dataset.$playermod.find('[data-role="' + this.dataset.renderData.videomod + '"]'), this.context.dataset.$videomod = this.dataset.$videomod, this.dataset.$video = this.dataset.$videomod.find("video"), this.dataset.videoTag = this.dataset.$video[0], this.context.dataset.videoTag = this.dataset.videoTag, this.kyleHack(), this.context.dataset.isMuted = this.context.config.muted || !1, this.addEventListener(), this.exportsModuleApis();
                try {
                    this.context.userMsg.broadcast("write")
                } catch (a) {}
                this.context.msg.broadcast("write")
            }, kyleHack: function () {
                function a(a) {
                    return "function" == typeof a && /native code/.test(a.toString())
                }

                function b(a) {
                    return a && "function" == typeof a.then
                }
                var c = this;
                if (c.dataset && c.dataset.videoTag) {
                    var d = c.dataset.videoTag.play;
                    a(d) && Object.defineProperty(c.dataset.videoTag, "play", {
                        get: function () {
                            return function () {
                                var a = d.call(c.dataset.videoTag);
                                return b(a) ? a["catch"](function (a) {}) : a
                            }
                        }
                    })
                }
            }, remove: function () {
                this.dataset.$video.removeAttr("src"), this.dataset.$video.remove(), this.dataset.videoTag = null, this.dataset.$videomod.remove()
            }, loadSubPlugins: function () {
                var a = [];
                this.context.pluginConfig && "array" === g.type(this.context.pluginConfig.subPlugins) && (a = this.context.pluginConfig.subPlugins.slice(0));
                var b = {
                    config: this.context.config,
                    msg: this.context.msg,
                    userMsg: this.context.userMsg,
                    $mod: {
                        $videomod: this.dataset.$videomod
                    },
                    dataset: this.context.dataset
                };
                h.loadPlugins.call(this, a, b)
            }, buildHTML: function () {
                var a = this,
                    b = {
                        videomod: "txp-video-wrapper",
                        data: {
                            attrs: a.getAttrs().join(" "),
                            videoStyle: a.getVideoStyles()
                        }
                    };
                this.dataset.renderData = b;
                var c = g.tmpl(f, b);
                return c
            }, getAttrs: function () {
                var a = {
                        isUsePlayinline: ['playsinline="isiPhoneShowPlaysinline" x5-video-player-type="h5-page" t7-video-player-type="inline" '],
                        isUseWebkitPlayinline: ['webkit-playsinline="isiPhoneShowPlaysinline"'],
                        isUseAirplay: "x-webkit-airplay",
                        isUseControl: 'controls="controls"',
                        isUsePreload: ['preload="auto"', 'preload="none"'],
                        isUseCrossOrigin: 'crossOrigin="anonymous"',
                        muted: "muted",
                        isUseIgnore: 'x5-video-ignore-metadata="true"'
                    },
                    b = [];
                for (var c in a) Txplayer.$.isArray(a[c]) ? this.context.config[c] === !0 ? b.push(a[c][0]) : b.push(a[c][1]) : this.context.config[c] === !0 && b.push(a[c]);
                return b
            }, getVideoStyles: function () {
                var a = [];
                return a.push("background-color:#000"), a.push("width:100%"), a.push("height:100%"), this.context.config.h5VerticalFull && a.push("transform: scale(1.2)"), a.join(";")
            }, setPlayState: function (a) {
                var b = this;
                if ("number" === g.type(a) && a !== this.context.dataset.playState) {
                    this.context.dataset.playState = a;
                    try {
                        setTimeout(function () {
                            b.context.userMsg.broadcast("playStateChange", a)
                        }, 0)
                    } catch (c) {}
                    this.context.msg.broadcast("playStateChange", a)
                }
            }, getPlayState: function () {
                return this.context.dataset.playState
            }, setFocusVideoCurrentTime: function (a, b, c) {
                var d = this.dataset.videoTag;
                if ("number" === g.type(a) && !(a < 0)) {
                    if (c && 0 == d.duration) return void this.context.msg.once("durationchange", function (b) {
                        b.currentTime = a
                    });
                    if (a > d.duration) return d.currentTime = d.duration, void h.showError("setFocusVideoCurrentTime Error", "time=" + a + ",duration=" + d.duration);
                    d.currentTime = a, b && d.play()
                }
            }, handlerAllTheLoadingadError: function () {
                if (this.context.dataset.playList && this.context.dataset.playList.length) {
                    var a = 0;
                    g.each(this.context.dataset.playList, function (b, c) {
                        c && "loadingad" === c.type && c.error && a++
                    }), a === this.context.dataset.playList.length && (this.clearPlaylist("loadingad"), this.clearFocusVideoUrl(), this.context.dataset.currentPlayListType = null, this.context.msg.broadcast("allTheLoadingAdIsError"))
                }
            }, handlerEndingadError: function () {
                this.context.msg.broadcast("videoEnd", {
                    videoTag: this.dataset.videoTag,
                    index: this.context.dataset.playListIndex,
                    playListType: "endingad",
                    isAllEnd: !0,
                    playListTypeEnd: !0
                })
            }, playTheNext: function (a) {
                if (a = a || {}, this.isTheLastOfPlayList()) return void("loadingad" === a.from ? this.handlerAllTheLoadingadError() : "endingad" === a.from && this.handlerEndingadError());
                this.updatePlayListIndex(this.context.dataset.playListIndex + 1);
                var b = this.context.dataset.playList[this.context.dataset.playListIndex];
                b && b.url && this.dataset && this.dataset.videoTag && (this.dataset.videoTag.src = b.url, this.dataset.videoTag.load(), this.dataset.videoTag.play())
            }, isPlaying: function () {
                return !this.dataset.videoTag.paused
            }, pause: function () {
                this.dataset.videoTag.pause()
            }, isTheLastOfPlayList: function (a) {
                if (!this.context.dataset.playList || 0 === this.context.dataset.playList.length) return !0;
                var b = this.context.dataset.playList.length,
                    c = this.context.dataset.playListIndex;
                if (a) {
                    var d = this.calcTotalPlaylist(a),
                        e = this.getPlayListIndex(a);
                    return e + 1 >= d
                }
                return c + 1 >= b
            }, calcTotalPlaylist: function (a) {
                if (!a) return this.context.dataset.playList.length;
                var b = 0;
                return g(this.context.dataset.playList).each(function (c, d) {
                    d.type === a && b++
                }), b
            }, clearPlaylist: function (a) {
                a || (this.context.dataset.playList = []);
                var b = [],
                    c = this.context.dataset.playList[this.context.dataset.playListIndex],
                    d = this.context.dataset.playListIndex,
                    e = !1;
                g(this.context.dataset.playList).each(function (f, g) {
                    return g === c && (e = !0), g.type === a ? void(e || d--) : (b.push(g), void(g === c && (d = b.length - 1)))
                }), this.context.dataset.playList = b, a ? (d < 0 && (d = 0), this.updatePlayListIndex(d)) : this.updatePlayListIndex(0)
            }, clearFocusVideoUrl: function () {
                if (this.dataset.videoTag) {
                    var a = this.dataset.videoTag;
                    a.pause(), a.src = "", g(a).removeAttr("src")
                }
            }, getPlayListIndex: function (a) {
                var b = 0,
                    c = this;
                return a && g(c.context.dataset.playList).each(function (d, e) {
                    return c.context.dataset.playListIndex !== d && void(e.type !== a && b++)
                }), c.context.dataset.playListIndex - b
            }, getCurrentType: function () {
                if (this.context.dataset.playList) {
                    var a = this.context.dataset.playList[this.context.dataset.playListIndex];
                    return a && a.type
                }
            }, videoRequestFullScreen: function () {
                //console.log("进入全屏");
                var a = this.dataset.videoTag;
                a = a.parentNode.parentNode;
                a && (a.requestFullscreen ? a.requestFullscreen() : a.webkitEnterFullscreen ? a.webkitEnterFullscreen() : a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : h.showError("videoRequestFullScreen", "not support"))
            }, videoExitFullScreen: function () {
                //console.log("退出全屏");
                var a = this.dataset.videoTag;
                a = a.parentNode.parentNode;
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                a.webkitExitFullscreen && a.webkitExitFullscreen() 
            }, updatePlayListIndex: function (a) {
                h.showInfo("H5Player.updatePlayListIndex", a), "number" === g.type(a) && (this.context.dataset.playListIndex = a, this.setCurrentPlayListType())
            }, setCurrentPlayListType: function () {
                if (this.context.dataset.playList) {
                    var a = this.context.dataset.playList[this.context.dataset.playListIndex];
                    a && a.type && (this.context.dataset.currentPlayListType = a.type, this.context.dataset.isTheLastOfCurrentType = this.isTheLastOfPlayList(a.type))
                }
            }, addUrls2Player: function (a, b) {
                var c = {},
                    d = this;
                if ("array" === g.type(a) && (c.data = a), "object" === g.type(a) && "array" === g.type(a.data) && (c = a), "array" !== g.type(c.data)) return void h.showInfo("addUrls2Player \u53c2\u6570\u9519\u8bef");
                if (d.context.dataset.playList && !c.clear || (d.context.dataset.playList = [], d.updatePlayListIndex(0)), c.data && c.type && c.repalcePlayList === !0)
                    if (c.data.length === d.calcTotalPlaylist(c.type)) {
                        var e = 0;
                        g(d.context.dataset.playList).each(function (a, b) {
                            b.type === c.type && (d.context.dataset.playList[a] = c.data[e], e++)
                        })
                    } else d.context.dataset.playList = [], d.context.dataset.playList = c.data;
                else c.data && c.type && c.hasOwnProperty("startIndex") ? d.context.dataset.playList = h.insert2Array(c.data, c.startIndex, d.context.dataset.playList) : d.context.dataset.playList = d.context.dataset.playList.concat(c.data);
                !d.context.dataset.currentPlayListType && d.context.dataset.hasOwnProperty("playListIndex") && d.updatePlayListIndex(d.context.dataset.playListIndex)
            }, play: function (a) {
                function b() {
                    var a = c.context.dataset.playList[c.context.dataset.playListIndex];
                    a && a.url && (c.updateCurrentVideoUrl(a.url), c.dataset.videoTag.src = a.url)
                }
                var c = this;
                return this.context.dataset.playList && this.context.dataset.playList.length ? ("string" === g.type(a) ? a = {
                    url: a
                } : "undefined" === g.type(a) && (a = {}), "number" === g.type(a.updateIndex) && this.updatePlayListIndex(a.updateIndex), a && "undefined" === g.type(a.autoplay) && (a.autoplay = this.context.dataset.autoplay), void(a.url ? (this.updateCurrentVideoUrl(a.url), this.dataset.videoTag.src = a.url, a.autoplay && (this.dataset.videoTag.load(), this.setMute(this.context.dataset.isMuted), this.dataset.videoTag.play())) : this.dataset.videoTag.src ? (this.dataset.videoTag.currentTime || (this.dataset.videoTag.load(), this.setMute(this.context.dataset.isMuted)), this.dataset.videoTag.play()) : (b(), this.dataset.videoTag.load(), a.autoplay && (this.setMute(this.context.dataset.isMuted), this.dataset.videoTag.play())))) : void h.error("can not find urls data, please addURLSData first!")
            }, getThePlayListIndex: function (a, b) {
                if (!a) return -1;
                b = "number" === g.type(b) ? b : this.calcTotalPlaylist(a);
                var c, d = 0;
                return g.each(this.context.dataset.playList, function (e, f) {
                    if (f && f.type === a && (d++, d === b)) return c = e, !1
                }), c
            }, handlerSkipAd: function (a) {
                a = a || {};
                var b = this.dataset.videoTag;
                "film" !== a.type && this.updatePlayListIndex(this.getThePlayListIndex(a.type)), "film" !== this.context.dataset.currentPlayListType && !b.ended && this.context.dataset.playList && this.context.dataset.playList.length > this.context.dataset.playListIndex && g(b).trigger("ended", {
                    from: "error"
                })
            }, qqNewsHack: function () {
                (h.isNews() || h.isNewsPlugin() || "yoo.qq.com" === window.location.hostname) && this.context.dataset.playState == -1 && this.dataset.videoTag.play()
            }, androidHack: function () {
                h.os.android && this.dataset.videoTag.play()
            }, setMute: function (a) {
                a = a || !1, this.dataset.$video && (this.dataset.$video.get(0).muted = a, this.context.dataset.isMuted = a)
            }, mute: function () {
                this.setMute(!0)
            }, unMute: function () {
                this.setMute(!1)
            }, isMute: function () {
                return this.context.dataset.isMuted
            }, getVolume: function () {
                return this.dataset.$video ? 100 * this.dataset.$video.get(0).volume : 0
            }, setVolume: function () {}, getPlayRate: function () {
                return this.dataset.$video ? this.dataset.$video.get(0).playbackRate : 0
            }, setPlayRate: function () {}, getBackupUrl: function () {
                var a = this;
                if (this.context.dataset.backupUrls && this.context.dataset.backupUrls.length < 2) return this.context.dataset.urlindex = 0, this.context.dataset.backupUrls[0].url;
                var b = this.context.dataset.backupUrls[1].url;
                return this.context.dataset.urlindex = 1, location.href.indexOf("m.v.qq.com") < 0 && g.each(this.context.dataset.backupUrls, function (c, d) {
                    if (d.url.indexOf("http:") > -1 && c > 0) return b = d.url, a.context.dataset.urlindex = c, !1
                }), b
            }, handleError: function (a) {
                var b = this;
                b.dataset.timer && clearInterval(b.dataset.timer);
                b.context.dataset.currentTime || 0;
                if (this.context.dataset.reconnectPlaytime = parseInt(b.context.dataset.currentTime), a = a || this.dataset.$video.get(0), b.context.dataset.hasVideoRetry && 0 != b.context.dataset.hasVideoRetry || "film" != b.getCurrentType()) b.context.dataset.hasGetinfoRetry || "film" != b.getCurrentType() || (b.setPlayState(-1), b.context.msg.broadcast("getInfoRetry"), b.context.dataset.hasGetinfoRetry = !0);
                else {
                    var c = a.src,
                        d = b.getBackupUrl();
                    b.updateCurrentVideoUrl(d), a.src = d, a.load(), a.play(), b.context.dataset.hasVideoRetry = 1, b.context.msg.broadcast("h5ChangeCdn", {
                        url: c,
                        stime: +new Date
                    })
                }
            }, updateCurrentVideoUrl: function (a) {
                a && (a.indexOf("blob:") > -1 || a.indexOf("mediasource:") > -1 || (this.context.dataset.currentVideoUrl = a))
            }, addEventListener: function () {
                var a = this,
                    b = -1;
                this.dataset.$video.on("canplay", function () {
                    a.context.msg.broadcast("videoCanplay", this)
                }).on("play", function () {
                    var b = this;
                    a.context.msg.broadcast("videoPlay", {
                        videoTag: this,
                        playListType: a.getCurrentType(),
                        index: a.getPlayListIndex(a.getCurrentType())
                    }), "film" == a.getCurrentType() && a.context.config.h5loop ? this.setAttribute("loop", "loop") : this.removeAttribute("loop"), a.dataset.timer && clearInterval(a.dataset.timer), a.dataset.count = 0, a.dataset.cTime = 0, a.dataset.timer = setInterval(function () {
                        a.dataset.cTime != a.context.dataset.currentTime || b.paused ? (a.dataset.cTime = a.context.dataset.currentTime, a.dataset.count = 0) : ++a.dataset.count > 20 && (a.handleError(), clearInterval(a.dataset.timer))
                    }, 1e3)
                }).on("durationchange", function () {
                    a.context.msg.broadcast("durationchange", this)
                }).on("playing", function () {
                    var b = a.getCurrentType();
                    a.context.msg.broadcast("videoPlaying", {
                        videoTag: this,
                        playListType: b,
                        index: a.getPlayListIndex(a.getCurrentType())
                    }), "film" === a.context.dataset.currentPlayListType && a.setPlayState(1)
                }).on("progress", function () {
                    a.context.msg.broadcast("videoProgress", {
                        videoTag: this
                    })
                }).on("pause", function () {
                    h.log("-----paused-----"), a.context.msg.broadcast("videoPause", {
                        videoTag: this,
                        playListType: a.getCurrentType()
                    }), "film" === a.context.dataset.currentPlayListType && a.setPlayState(2)
                }).on("timeupdate", function () {
                    var c = a.getCurrentType();
                    a.dataset.vidChangeFlag && this.currentTime > 0 && (a.dataset.vidChangeFlag = !1, a.context.msg.broadcast("videoTimeUpdate", {
                        videoTag: this,
                        playListType: c
                    }), "film" === c && a.context.userMsg.broadcast("timeupdate", {
                        videoTag: this,
                        playListType: c
                    }));
                    var d = parseInt(this.currentTime);
                    0 !== this.currentTime && (a.context.dataset.currentTime = this.currentTime), d !== b && (b = d, a.context.msg.broadcast("videoTimeUpdate", {
                        videoTag: this,
                        playListType: c
                    }), "film" === c && a.context.userMsg.broadcast("timeupdate", {
                        videoTag: this,
                        playListType: c
                    }))
                }).on("ended", function (b, c) {
                    a.dataset.timer && clearInterval(a.dataset.timer);
                    var d = a.getCurrentType(),
                        e = a.isTheLastOfPlayList(d),
                        f = a.isTheLastOfPlayList(),
                        g = a.getPlayListIndex(d);
                    a.context.msg.broadcast("videoEnd", {
                        videoTag: this,
                        index: g,
                        playListType: d,
                        isAllEnd: f,
                        playListTypeEnd: e,
                        from: c && c.from || "videoEvent"
                    })
                }).on("error", function (b) {
                    var c = {},
                        d = {
                            1: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25[\u53d6\u56de\u8fc7\u7a0b\u88ab\u7528\u6237\u4e2d\u6b62]",
                            2: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25[\u5f53\u4e0b\u8f7d\u65f6\u53d1\u751f\u9519\u8bef]",
                            3: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25[\u5f53\u89e3\u7801\u65f6\u53d1\u751f\u9519\u8bef]",
                            4: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25[\u4e0d\u652f\u6301\u97f3\u9891/\u89c6\u9891]"
                        };
                    if (a.dataset.timer && clearInterval(a.dataset.timer), this && this.error && (c.code = this.error.code, c.msg = d[c.code]), a.context.dataset.hasVideoRetry && 0 != a.context.dataset.hasVideoRetry && a.context.dataset.hasGetinfoRetry || "film" != a.getCurrentType())
                        if (c.type = a.getCurrentType(), c.videoTag = this, "loadingad" === c.type || "endingad" === c.type) {
                            a.context.dataset.playList[a.context.dataset.playListIndex] && (a.context.dataset.playList[a.context.dataset.playListIndex].error = !0), a.context.msg.broadcast("error", c);
                            var f = e({}, this, c.type);
                            a.context.msg.broadcast("reportVideoError", {
                                type: c.type,
                                index: a.context.dataset.playListIndex,
                                code: f || c.code || "",
                                url: a.context.dataset.currentVideoUrl || "",
                                hasRetry: a.context.dataset.hasVideoRetry
                            }), a.playTheNext({
                                from: c.type
                            })
                        } else c.flowId = a.context.dataset.flowid, a.context.msg.broadcast("error", c), a.context.userMsg.broadcast("error", c);
                    else a.handleError()
                }).on("waiting", function () {
                    a.context.msg.broadcast("videoWaiting", {
                        videoTag: this,
                        index: a.getPlayListIndex(a.getCurrentType()),
                        playListType: a.getCurrentType()
                    }), "film" === a.context.dataset.currentPlayListType && a.setPlayState(3)
                }).on("seeking", function () {
                    a.context.msg.broadcast("videoSeeking")
                }).on("seeked", function () {
                    a.context.msg.broadcast("videoSeeked")
                }).on("webkitendfullscreen", function () {
                    a.context.msg.broadcast("webkitendfullscreen"), a.context.msg.broadcast("screenChange", !1, !1), h.log("video \u76d1\u542c\u5230\u4e8b\u4ef61")
                }).on("webkitbeginfullscreen", function () {
                    a.context.msg.broadcast("screenChange", !1, !0), h.log("video \u76d1\u542c\u5230\u4e8b\u4ef65")
                }).on("x5videoenterfullscreen", function () {
                    a.context.msg.broadcast("screenChange", !1, !0), h.log("video \u76d1\u542c\u5230\u4e8b\u4ef62")
                }).on("x5videoexitfullscreen", function () {
                    a.context.msg.broadcast("screenChange", !1, !1), h.log("video \u76d1\u542c\u5230\u4e8b\u4ef63")
                }).on("webkitfullscreenchange", function () {
                    h.log("video \u76d1\u542c\u5230\u4e8b\u4ef64")
                }), this.context.msg.on("handlerSkipAd", function (b, c) {
                    a.handlerSkipAd(b)
                }), this.context.msg.on("addUrls2Player", this.addUrls2Player.bind(this)), this.context.msg.on("videoEnd", function (b) {
                    if (b && b.videoTag) {
                        try {
                            b.videoTag.pause(), b.videoTag.src = ""
                        } catch (c) {}
                        g(b.videoTag).removeAttr("src"), b.videoTag.load()
                    }
                    b.isAllEnd ? (a.updatePlayListIndex(0), a.clearPlaylist(), a.setPlayState(0)) : a.playTheNext(), b && b.playListTypeEnd && b.playListType && a.clearPlaylist(b.playListType)
                }), this.context.msg.on("playerReInit", function (b, c) {
                    a.context.dataset.hasOwnProperty("playList") && (a.dataset.vidChangeFlag = !0, a.context.dataset.currentPlayListType = null, a.setPlayState(-1), a.clearPlaylist())
                }), this.context.msg.on("vidChange", function (c) {
                    a.context.config.disableTimeupdateHack || (b = -1, a.dataset.vidChangeFlag = !0), a.dataset.videoTag.pause(), g(a.dataset.videoTag).removeAttr("src"), a.dataset.videoTag.load(), a.context.dataset.currentPlayListType = null, a.clearPlaylist()
                }), this.context.msg.on("play", this.play.bind(this)), this.context.msg.on("pause", this.pause.bind(this)), this.context.msg.on("playTheNext", this.playTheNext.bind(this)), this.context.msg.on("clearFocusVideoUrl", this.clearFocusVideoUrl.bind(this)), this.context.msg.on("videoRequestFullScreen", this.videoRequestFullScreen.bind(this)), this.context.msg.on("videoExitFullScreen", this.videoExitFullScreen.bind(this)), this.context.msg.on("setFocusVideoCurrentTime", this.setFocusVideoCurrentTime.bind(this)), this.context.msg.on("qqNewsHack", this.qqNewsHack.bind(this)), this.context.msg.on("androidHack", this.androidHack.bind(this))
            }, exportsModuleApis: function () {
                var a = this;
                this.dataset.moduleApis = {}, this.dataset.moduleApis.getPlayerState = this.getPlayState.bind(this), this.dataset.moduleApis.mute = this.mute.bind(this), this.dataset.moduleApis.unMute = this.unMute.bind(this), this.dataset.moduleApis.isMute = this.isMute.bind(this), this.dataset.moduleApis.getVolume = this.getVolume.bind(this), this.dataset.moduleApis.setVolume = this.setVolume.bind(this), this.dataset.moduleApis.getPlaybackRate = this.getPlayRate.bind(this), this.dataset.moduleApis.setPlaybackRate = this.setPlayRate.bind(this), this.dataset.moduleApis.callPlayerExtendMethod = function () {
                    var a = Array.prototype.slice.call(arguments, 0),
                        b = a.shift();
                    if (b) switch (a.length) {
                    case 1:
                        try {
                            this.context.msg.broadcast(b, a[0])
                        } catch (c) {}
                        break;
                    case 2:
                        try {
                            this.context.msg.broadcast(b, a[0], a[1])
                        } catch (c) {}
                        break;
                    default:
                        try {
                            this.context.msg.broadcast(b, a)
                        } catch (c) {}
                    }
                }, g.extend(this.context.userApi, this.dataset.moduleApis), this.dataset.dataApis = {}, this.dataset.dataApis.calcTotalPlaylist = function (b, c) {
                    c.data = a.calcTotalPlaylist(b)
                }, this.dataset.dataApis.getPlayListIndex = function (b, c) {
                    c.data = a.getPlayListIndex(b)
                }, g.each(this.dataset.dataApis, function (b, c) {
                    a.context.msg.setData(b, c)
                })
            }
        }, Txplayer.register("H5Player", d)
    }, 63: function (a, b) {
        a.exports = '<txpdiv data-role="<%=videomod%>" class="txp_video_container">\n  <video style="<%=data.videoStyle%>" <%=data.attrs%> data-role="txp_video_tag" />\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(241)
    }, 241: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(242);
        d.prototype = {
            init: function () {
                this.write(), this.addEventListerner()
            }, write: function () {
                var a = {
                    shadow: "txp-shadow-mod"
                };
                this.dataset.renderData = a;
                var b = e.tmpl(g, a);
                this.context.$mod.$videomod.append(b), this.context.dataset.$shadow = this.context.$mod.$videomod.find("[data-role=" + a.shadow + "]")
            }, remove: function () {
                this.context.dataset.$shadow.remove()
            }, initHDPlayerEvent: function () {
                var a = 0,
                    b = 400,
                    c = !1,
                    d = this,
                    e = function () {
                        d.handlerClick()
                    },
                    g = function () {
                        d.handlerDblClick()
                    };
                this.context.dataset.$shadow.off("click.uishadow").off("dblclick.uishadow").on("click.uishadow", function (g) {
                    d.context.dataset.isRightClickMenu || (f.v4log("clickTigger: "), clearTimeout(a), a = setTimeout(function () {
                        c || e(), c = !1
                    }, b))
                }).on("dblclick.uishadow", function (a) {
                    c = !0, g()
                })
            }, handlerClick: function () {
                f.v4log("handlerClick: ");
                var a = this;
                try {
                    a.context.userMsg.broadcast("userClickPlayBtn")
                } catch (b) {}
                return a.context.dataset.getinfoJSON ? void(1 === a.context.dataset.playState ? (a.context.msg.broadcast("pause"), a.context.msg.broadcast("userPausePlayer"), a.context.userMsg.broadcast("pause")) : (a.context.msg.broadcast("playControl", {
                    connectionPlayType: 1
                }), a.context.msg.broadcast("userPlayPlayer"))) : (a.context.msg.broadcast("beforeVideoRePlay"), a.context.msg.broadcast("playControl", {
                    playStartTime: a.context.dataset.playStartTime,
                    playEndTime: a.context.dataset.playEndTime,
                    vid: a.context.dataset.vid,
                    connectionPlayType: 1
                }), void a.context.msg.broadcast("userPlayPlayer"))
            }, handlerDblClick: function () {
                f.v4log("handlerDblClick: "), this.context.msg.broadcast("UiShadownDblClick")
            }, addEventListerner: function () {
                f.mobile || this.initHDPlayerEvent()
            }
        }, Txplayer.register("UiShadow", d)
    }, 242: function (a, b) {
        a.exports = '<txpdiv data-role="<%=shadow%>" class="txp_shadow"></txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(125)
    }, 125: function (a, b) {
        function c(a) {
            d = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var d = Txplayer.$,
            e = Txplayer.util;
        c.prototype = {
            init: function () {
                this.dataset.delayTime = 0, this.dataset.delayLimit = 5, this.dataset.currentTime = 0, this.context.config.enableHevc && (this.context.dataset.videoTag && this.checkCanPlay(), this.addEventListener())
            }, checkCanPlay: function () {
                var a = this;
                location.href.indexOf("banHD=true") > -1 || this.context.dataset.videoTag.canPlayType && "probably" == this.context.dataset.videoTag.canPlayType('video/mp4; codecs="hvc1.1.L0.0"') && (this.context.dataset.supportHevc = !0, this.context.dataset.videoTag.addEventListener("x5mediaextrainfo", function (b) {
                    a.context.userMsg.broadcast("x5mediaextrainfo", b), 700 == b.what && (0 == a.dataset.delayTime && (a.dataset.currentTime = (new Date).valueOf()), a.dataset.delayTime++, 5 == a.dataset.delayTime && (new Date).valueOf() - a.dataset.currentTime < 1e4 ? a.refreshPage() : a.dataset.delayTime = 0)
                }))
            }, refreshPage: function () {
                window.confirm("\u8d85\u6e05\u64ad\u653e\u4e0d\u6d41\u7545\uff0c\u73b0\u5207\u56de\u666e\u901a\u6e05\u6670\u5ea6"), window.location.href = e.appendParamsToUrl(window.location.href, {
                    banHD: !0
                })
            }, addEventListener: function () {
                var a = this;
                this.context.msg.on("write", function () {
                    a.checkCanPlay()
                })
            }
        }, Txplayer.register("HDSupport", c)
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(83)
    }, 83: function (a, b, c) {
        function d(a) {
            f = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = c(84),
            f = Txplayer.$,
            g = Txplayer.util;
        d.prototype = {
            init: function () {
                this.dataset.controlHideClass = "txp_autohide", this.context.dataset.isControlShow = !0, this.write(), this.addEventListener(), this.exportsModuleApis(), this.loadSubPlugins()
            }, write: function () {
                var a = {
                        controlWrap: "txp-control-wrap",
                        progressRole: "txp-control-progress",
                        buttonsLeftRole: "txp-control-left",
                        buttonsRightRole: "txp-control-right",
                        controlTop: this.context.config.controlTop ? this.context.config.controlTop : 0
                    },
                    b = f.tmpl(e, a);
                this.context.dataset.$playermod.append(b), this.dataset.$playermod = this.context.dataset.$playermod, this.dataset.$controlWrap = this.context.dataset.$playermod.find('[data-role="' + a.controlWrap + '"]'), this.dataset.$progressmod = this.context.dataset.$playermod.find('[data-role="' + a.progressRole + '"]'), this.dataset.$buttonsleftmod = this.context.dataset.$playermod.find('[data-role="' + a.buttonsLeftRole + '"]'), this.dataset.$buttonsrightmod = this.context.dataset.$playermod.find('[data-role="' + a.buttonsRightRole + '"]'), this.context.dataset.$playermod.addClass(this.dataset.controlHideClass), this.dataset.disableUi = !!this.context.config.hideControlUI || this.context.config.isInteract, this.context.dataset.isControlShow = !1
            }, remove: function () {
                this.dataset.$controlWrap.remove()
            }, loadSubPlugins: function () {
                var a = [];
                this.context.pluginConfig && "array" === f.type(this.context.pluginConfig.subPlugins) && (a = this.context.pluginConfig.subPlugins.slice(0));
                var b = {
                    msg: this.context.msg,
                    userMsg: this.context.userMsg,
                    userApi: this.context.userApi,
                    privateApi: this.context.privateApi,
                    dataset: this.context.dataset,
                    config: this.context.config,
                    $mod: {
                        $playermod: this.dataset.$playermod,
                        $progressmod: this.dataset.$progressmod,
                        $buttonsleftmod: this.dataset.$buttonsleftmod,
                        $buttonsrightmod: this.dataset.$buttonsrightmod
                    }
                };
                g.loadPlugins.call(this, a, b, this.context.config.settings)
            }, addEventListener: function () {
                function a(a) {
                    if (!a || !a.force) {
                        if (1 !== e.context.dataset.playState && !e.context.dataset.isPlayingAd) return;
                        if (e.context.dataset.isFocusVideoBufferIng) return;
                        if (e.context.dataset.isVideoSeeking) return
                    }
                    e.context.dataset.$playermod.addClass(e.dataset.controlHideClass), e.context.msg.broadcast("hideUiControl"), e.context.userMsg.broadcast("hideUiControl"), e.context.dataset.isControlShow = !1, e.dataset.hideControl_TIMER && (clearTimeout(e.dataset.hideControl_TIMER), e.dataset.hideControl_TIMER = null)
                }

                function b() {
                    return !e.context.dataset.$playermod.hasClass(e.dataset.controlHideClass)
                }

                function c() {
                    e.dataset.disableUi || (e.context.msg.broadcast("beforeUiControlShow"), e.context.userMsg.broadcast("showUiControl"), e.context.dataset.$playermod.removeClass(e.dataset.controlHideClass), e.context.dataset.isControlShow = !0, e.context.msg.broadcast("videoTimeUpdate"), d())
                }

                function d() {
                    e.dataset.hideControl_TIMER && (clearTimeout(e.dataset.hideControl_TIMER), e.dataset.hideControl_TIMER = null), e.dataset.hideControl_TIMER = setTimeout(function () {
                        e.context.dataset.disableHideControl || a()
                    }, 3e3)
                }
                var e = this;
                this.dataset.hideControl_TIMER = null, this.context.msg.on("ready", function () {
                    e.context.dataset.$shadow && e.context.dataset.$shadow.on("touchend", function (d) {
                        if (b()) a();
                        else {
                            var f = e.context.dataset.playState;
                            e.context.dataset.isPlayingAd || 1 !== f && 2 !== f && 3 !== f || c()
                        }
                    }), e.context.msg.on("userClickPlaybackRate", function () {
                        var a = e.context.dataset.playState;
                        e.context.dataset.isPlayingAd || 1 !== a && 2 !== a && 3 !== a || c()
                    })
                }), this.dataset.eventsList = {}, this.dataset.eventsList[g.getUniqueMsgKey("videoPause")] = function (a) {
                    a.videoTag.src && a.playListType && (a && a.end || e.context.dataset.isPlayingAd || c())
                }, this.dataset.eventsList[g.getUniqueMsgKey("videoEnd")] = function (b) {
                    b && ("film" === b.playListType || "endingad" === b.playListType) && a({
                        force: !0
                    })
                }, this.dataset.eventsList[g.getUniqueMsgKey("videoPlaying")] = function (b) {
                    return b && "film" !== b.playListType ? void a({
                        force: !0
                    }) : void d()
                }, this.dataset.eventsList[g.getUniqueMsgKey("error")] = function (b) {
                    b && "film" !== b.type && "cgi" !== b.type || a({
                        force: !0
                    })
                }, this.context.config.hideControlUI && (this.dataset.eventsList[g.getUniqueMsgKey("disableUi")] = function (a) {
                    e.dataset.disableUi = !0
                }, this.dataset.eventsList[g.getUniqueMsgKey("enableUi")] = function (a) {
                    e.dataset.disableUi = !1
                }), f.each(this.dataset.eventsList, function (a, b) {
                    e.context.msg.on(a, b)
                })
            }, exportsModuleApis: function () {}
        }, Txplayer.register("H5UiControl", d)
    }, 84: function (a, b) {
        a.exports = '<txpdiv data-role="<%=controlWrap%>" class="txp_bottom" style="bottom:<%=controlTop%>px">\n\t<txpdiv class="txp_left_controls" data-role="<%=buttonsLeftRole%>"></txpdiv>\n\t<txpdiv class="txp_progress_bar_container" data-role="<%=progressRole%>"></txpdiv>\n\t<txpdiv class="txp_right_controls" data-role="<%=buttonsRightRole%>"></txpdiv>\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(174)
    }, 174: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(175);
        d.prototype = {
            init: function () {
                this.write(), this.addEventListener()
            }, write: function () {
                var a = {
                        playBtn: "txp-ui-control-playbtn",
                        tips: "txp-ui-control-playbtn-tips",
                        isUseH5Type: f.isUseH5Type(),
                        tabindex: Txplayer.dataset.tabindex++
                    },
                    b = e.tmpl(g, a);
                this.context.$mod.$buttonsleftmod.append(b), this.dataset.$playbtn = this.context.$mod.$buttonsleftmod.find('[data-role="' + a.playBtn + '"]'), this.dataset.$tips = this.context.$mod.$buttonsleftmod.find('[data-role="' + a.tips + '"]')
            }, remove: function () {
                this.dataset.$playbtn.remove()
            }, initPlayState: function () {
                var a = this.context.dataset.playState;
                1 === a || 3 === a ? (this.dataset.$playbtn.attr("data-status", "pause"), this.dataset.$tips.html("\u6682\u505c")) : 0 === a ? (this.dataset.$playbtn.attr("data-status", "replay"), this.dataset.$tips.html("\u91cd\u65b0\u64ad\u653e")) : (this.dataset.$playbtn.attr("data-status", "play"), this.dataset.$tips.html("\u64ad\u653e"))
            }, bindMouseEvent: function () {
                var a = this;
                this.dataset.$playbtn.on("mouseenter", function () {
                    a.dataset.$playbtn.addClass(Txplayer.dataset.btnHoverClass)
                }).on("mouseleave", function () {
                    a.dataset.$playbtn.removeClass(Txplayer.dataset.btnHoverClass)
                })
            }, stopPauseTimer: function () {
                this.dataset.pauseTimer && (clearTimeout(this.dataset.pauseTimer), this.dataset.pauseTimer = null)
            }, addEventListener: function () {
                var a = this;
                this.initPlayState(), this.dataset.$playbtn.on(Txplayer.dataset.clickEventName, function () {
                    var b = (e(this), a.context.dataset.isPlayingAd);
                    b || (a.context.msg.broadcast("reportUsrAction", {
                        usr_action: a.dataset.$playbtn.attr("data-status")
                    }), "pause" === a.dataset.$playbtn.attr("data-status") ? (a.context.msg.broadcast("pause"), a.context.msg.broadcast("userPausePlayer"), a.context.userMsg.broadcast("pause"), a.context.userMsg.broadcast("playClick", 2)) : ("replay" === a.dataset.$playbtn.attr("data-status") ? (a.context.msg.broadcast("beforeVideoRePlay"), a.context.msg.broadcast("playControl", {
                        vid: a.context.dataset.vid,
                        connectionPlayType: 1,
                        playStartTime: a.context.dataset.playStartTime,
                        playEndTime: a.context.dataset.playEndTime
                    }), a.context.userMsg.broadcast("playClick", 1)) : (a.context.msg.broadcast("playControl", {
                        connectionPlayType: 1
                    }), a.context.userMsg.broadcast("playClick", 1)), a.context.msg.broadcast("userPlayPlayer")))
                }), this.dataset.eventsList = {}, this.dataset.eventsList[f.getUniqueMsgKey("videoPlay")] = function () {
                    a.dataset.isAllEnd = !1, a.dataset.$playbtn.attr("data-status", "pause"), a.dataset.$tips.html("\u6682\u505c")
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoPause")] = function (b) {
                    if ((!b || "film" == b.playListType) && (!a.context.dataset.isDefinitionSwitching || a.context.dataset.useChromeHls)) {
                        var c = function () {
                            a.dataset.isAllEnd = !0, a.dataset.$playbtn.attr("data-status", "replay"), a.dataset.$playbtn.removeClass("txp_disabled"), a.dataset.$tips.html("\u91cd\u65b0\u64ad\u653e")
                        };
                        return b && "canplayTimeLimit" == b.from ? void c() : void(a.context.dataset.isVideoSeeking || (a.stopPauseTimer(), a.dataset.pauseTimer = setTimeout(function () {
                            if ((!a.context.dataset.isDefinitionSwitching || a.context.dataset.useChromeHls) && !a.context.dataset.isVideoSeeking && !a.dataset.isAllEnd && 2 === a.context.dataset.playState) {
                                if (a.context.dataset.canPlayTime && a.context.dataset.currentTime >= a.context.dataset.canPlayTime) return void c();
                                a.dataset.$playbtn.attr("data-status", "play"), a.dataset.$tips.html("\u64ad\u653e")
                            }
                        }, 200)))
                    }
                }, this.dataset.eventsList[f.getUniqueMsgKey("seekEnd")] = function (b) {
                    if ("h5" != a.context.config.playerType && 2 === a.context.dataset.playState && (!a.context.dataset.canPlayTime || a.context.dataset.currentTime < a.context.dataset.canPlayTime)) {
                        if (f.os.ipad) return;
                        a.dataset.$playbtn.attr("data-status", "play"), a.dataset.$tips.html("\u64ad\u653e")
                    }
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoEnd")] = function (b) {
                    b && b.isAllEnd && (a.dataset.isAllEnd = !0, a.context.msg.broadcast("pause"), a.dataset.$playbtn.attr("data-status", "replay"), a.dataset.$playbtn.removeClass("txp_disabled"), a.dataset.$tips.html("\u91cd\u65b0\u64ad\u653e"))
                }, this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function (b) {
                    a.dataset.$playbtn.attr("data-status", "play"), a.dataset.$tips.html("\u64ad\u653e")
                }, this.dataset.eventsList[f.getUniqueMsgKey("beforeVideoPlay")] = function (b) {
                    a.dataset.isAllEnd = !1
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoPlaying")] = function (b) {
                    setTimeout(function () {
                        if ("film" != a.context.dataset.currentPlayListType) {
                            if (a.dataset.$playbtn.hasClass("txp_disabled")) return;
                            a.dataset.$playbtn.addClass("txp_disabled")
                        } else a.dataset.$playbtn.removeClass("txp_disabled")
                    }, 100)
                }, this.dataset.eventsList[f.getUniqueMsgKey("userStopVideo")] = function (b) {
                    a.initPlayState(), a.dataset.$playbtn.removeClass("txp_disabled")
                }, this.dataset.eventsList[f.getUniqueMsgKey("disablePlayBtn")] = function (b) {
                    a.dataset.$playbtn.addClass("txp_disabled")
                }, e.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                }), f.mobile || this.bindMouseEvent()
            }
        }, Txplayer.register("UiControlPlay", d)
    }, 175: function (a, b) {
        a.exports = '<txpdiv data-role="<%=playBtn%>" class="txp_btn txp_btn_play" data-status="play" aria-label="\u64ad\u653e/\u6682\u505c">\n  <% if(isUseH5Type){ %>\n  <svg class="txp_icon txp_icon_play" viewBox="0 0 60 60" >\n\t<use class="txp_svg_play" xlink:href="<%=svgPrefix%>#txp_svg_play" />\n\t<use class="txp_svg_pause" xlink:href="<%=svgPrefix%>#txp_svg_pause" />\n\t<use class="txp_svg_stop" xlink:href="<%=svgPrefix%>#txp_svg_stop" />\n\t<use class="txp_svg_replay" xlink:href="<%=svgPrefix%>#txp_svg_replay" />\n  </svg>\n  <% }else{%>\n  <svg class="txp_icon txp_icon_play" version="1.1" viewBox="0 0 36 36">\n    <use class="txp_svg_symbol txp_svg_play" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=svgPrefix%>#txp_svg_play"></use>\n    <use class="txp_svg_symbol txp_svg_pause" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=svgPrefix%>#txp_svg_pause"></use>\n    <use class="txp_svg_symbol txp_svg_stop" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=svgPrefix%>#txp_svg_stop"></use>\n    <use class="txp_svg_symbol txp_svg_replay" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=svgPrefix%>#txp_svg_replay"></use>\n  </svg>\n  <txpdiv data-role="<%=tips%>" class="txp_tooltip">\u64ad\u653e</txpdiv>\n  <% } %>\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(243)
    }, 243: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = (Txplayer.apiList, c(244));
        d.prototype = {
            init: function () {
                this.write(), this.addEventListerner()
            }, write: function () {
                var a = {
                        time: "txp-control-time-mod",
                        currentTimeRole: "txp-control-currenttime",
                        durationRole: "txp-control-duration"
                    },
                    b = e.tmpl(g, a);
                this.context.$mod.$buttonsleftmod.append(b), this.dataset.$time = this.context.$mod.$buttonsleftmod.find('[data-role="' + a.time + '"]'), this.dataset.$currenttime = this.context.$mod.$buttonsleftmod.find('[data-role="' + a.currentTimeRole + '"]'), this.dataset.$duration = this.context.$mod.$buttonsleftmod.find('[data-role="' + a.durationRole + '"]')
            }, remove: function () {
                this.dataset.$time.remove()
            }, updateDuration: function (a) {
                if ("undefined" === e.type(a) && (a = this.context.dataset.duration), "number" === e.type(a))
                    if (0 == a) {
                        var b = this.context.dataset.playList || [];
                        if (1 === b.length) {
                            var c = this.context.msg.getData("getFocusVideoTag");
                            a = c && c.duration || 0, "number" === e.type(a) && a > 0 && (this.dataset.$duration.html(f.formatPlayTime(a)), this.context.dataset.duration = a)
                        }
                    } else this.dataset.$duration.html(f.formatPlayTime(a))
            }, updateCurrentTime: function (a) {
                "undefined" === e.type(a) && (a = this.context.dataset.currentTime);
                var b = this.context.dataset.duration;
                if (0 == b) {
                    var c = this.context.dataset.playList || [];
                    if (1 === c.length) {
                        var d = this.context.msg.getData("getFocusVideoTag");
                        b = d && d.duration || 0, "number" === e.type(b) && b > 0 && (this.dataset.$duration.html(f.formatPlayTime(b)), this.context.dataset.duration = b)
                    }
                }
                "number" !== e.type(b) || a > b || "number" === e.type(a) && this.dataset.$currenttime.html(f.formatPlayTime(a))
            }, addEventListerner: function () {
                var a = this;
                a.updateDuration(), this.dataset.eventsList = {}, this.dataset.eventsList[f.getUniqueMsgKey("getVideoUrlSuccess")] = function () {
                    a.updateDuration()
                }, this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function () {
                    a.updateCurrentTime(0), a.updateDuration(0)
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoEnd")] = function (b) {
                    b && "film" === b.playListType && (b.playListTypeEnd || b.isTheLastFilm) && (a.context.dataset.canPlayTime ? a.updateCurrentTime(a.context.dataset.canPlayTime) : a.updateCurrentTime(0), a.updateDuration())
                }, this.dataset.eventsList[f.getUniqueMsgKey("playStateChange")] = function (b) {
                    b && 0 == b.state && (a.updateDuration(0), a.updateCurrentTime(0))
                }, this.dataset.eventsList.beforeVideoRePlay = function () {
                    a.updateDuration()
                }, this.dataset.eventsList.videoHlsManifestParsed = function (b) {
                    var c = b && b.totalduration;
                    "undefined" != typeof a.context.dataset.duration && 0 != a.context.dataset.duration || a.updateDuration(c)
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoTimeUpdate")] = function (b) {
                    a.context.dataset.isControlShow && "film" == a.context.dataset.currentPlayListType && a.updateCurrentTime()
                }, this.dataset.eventsList[f.getUniqueMsgKey("beforeUiControlShow")] = function (b) {
                    a.context.dataset.isPlayingAd || a.context.dataset.isControlShow || a.updateCurrentTime()
                }, this.dataset.eventsList[f.getUniqueMsgKey("speedyTouchmove")] = function (b) {
                    a.updateCurrentTime(b)
                }, this.dataset.eventsList[f.getUniqueMsgKey("progressUpdate")] = function (b) {
                    var c = a.context.dataset.duration,
                        d = c * b / 100 > c ? c : c * b / 100;
                    a.updateCurrentTime(d)
                }, this.dataset.eventsList[f.getUniqueMsgKey("seekStart")] = function (b) {
                    b && "number" === e.type(b.seekTime) && a.updateCurrentTime(b.seekTime)
                }, e.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }
        }, Txplayer.register("UiShowTime", d)
    }, 244: function (a, b) {
        a.exports = '<txpdiv data-role="<%=time%>" class="txp_time_display">\n  <txpdiv class="txp_time_current" data-role="<%=currentTimeRole%>">00:00</txpdiv>\n  <txpdiv class="txp_time_separator">/</txpdiv>\n  <txpdiv class="txp_time_duration" data-role="<%=durationRole%>">00:00</txpdiv>\n  <txpdiv class="txp_live_badge">\u76f4\u64ad</txpdiv>\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(102)
    }, 102: function (a, b, c) {
        function d(a) {
            e = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(103);
        d.prototype = {
            init: function () {
                this.write(), this.addEventListerner()
            }, write: function () {
                var a = {
                    loadedProgress: "txp-control-load-progress",
                    playedProgress: "txp-control-play-progress",
                    playedPoint: "txp-control-play-point",
                    progressList: "txp-control-progress-list",
                    progressIndicator: "txp-control-progress-indicator",
                    tabindex: Txplayer.dataset.tabindex++
                };
                this.dataset.renderData = a;
                var b = e.tmpl(g, a);
                this.context.$mod.$progressmod.append(b), this.dataset.$loadedProgress = this.context.$mod.$progressmod.find('[data-role="' + a.loadedProgress + '"]'), this.dataset.$playprogress = this.context.$mod.$progressmod.find('[data-role="' + a.playedProgress + '"]'), this.dataset.$playpoint = this.context.$mod.$progressmod.find('[data-role="' + a.playedPoint + '"]'), this.dataset.$progressIndicator = this.context.$mod.$progressmod.find('[data-role="' + a.progressIndicator + '"]'), this.dataset.$progressList = this.context.$mod.$progressmod.find('[data-role="' + a.progressList + '"]')
            }, remove: function () {
                this.dataset.$loadedProgress.remove(), this.dataset.$playprogress.remove(), this.dataset.$playpoint.remove(), this.dataset.$progressIndicator.remove(), this.dataset.$progressList.remove()
            }, progressOnMouseMove: function () {
                var a, b, c, d = !1,
                    f = this,
                    g = -1,
                    h = !1,
                    i = function (b) {
                        e(b.target).data("role") === f.dataset.renderData.progressList || "txp-control-progress" === e(b.target).data("role") ? g = b.offsetX : e(b.target).data("role") === f.dataset.renderData.progressIndicator ? g = b.target.offsetLeft + b.target.offsetParent.offsetLeft + b.offsetX : (e(b.target).data("role") === f.dataset.renderData.playedPoint || e(b.target).data("role") === f.dataset.renderData.playedProgress || e(b.target).data("role") === f.dataset.renderData.loadedProgress || e(b.target).hasClass("txp_interact_dot")) && (g = b.target.offsetLeft + b.offsetX), g !== -1 && (c = parseInt(g / a * 1e4) / 100)
                    },
                    j = function (b) {
                        var c = parseInt(g / a * 1e4) / 100,
                            d = 0 === g ? 0 : parseInt(g / a * 1e4) / 100;
                        f.dataset.$playprogress.css("width", c + "%"), f.dataset.$playpoint.css("left", d + "%"), "mousedown" == b && f.context.msg.broadcast("userSeekStart", {
                            time: parseInt(f.context.dataset.duration * c / 100)
                        }), "mouseup" == b && f.context.msg.broadcast("userSeekEnd", {
                            time: parseInt(f.context.dataset.duration * c / 100)
                        })
                    };
                this.context.$mod.$progressmod.on("mouseenter", function () {
                    f.context.dataset.isPlayingAd || f.isVideoCanNotPlay() || (d = !0, a = f.dataset.$progressList.width(), b = f.dataset.$progressIndicator.width())
                }).on("mouseleave", function () {
                    f.context.dataset.isPlayingAd || (h && (f.context.msg.broadcast("playControl"), h = !1), d = !1)
                }).on("mousedown", function (a) {
                    f.context.dataset.isPlayingAd || f.isVideoCanNotPlay() || (h = !0, d = !0, f.context.msg.broadcast("pause"), i(a), j("mousedown"))
                }).on("mousemove", function (a) {
                    f.context.dataset.isPlayingAd || f.isVideoCanNotPlay() || (i(a), h && d && j())
                }).on("mouseup touchend", function (b) {
                    if (!f.dataset.duration) return void(h = !1);
                    if (!f.context.dataset.isPlayingAd && h) {
                        f.context.dataset.playState;
                        i(b);
                        var c = parseInt(f.dataset.duration * (g / a));
                        j("mouseup"), f.context.msg.broadcast("seekTo", c), d = !1, h = !1
                    }
                })
            }, isVideoCanNotPlay: function () {
                var a = this.context.dataset.playState;
                return 0 === a || a === -1
            }, progressOnTouch: function () {
                var a, b, c, d, e = this,
                    f = function (a) {
                        var f = parseInt(b / c * 1e4) / 100,
                            g = parseInt((b - d / 2) / c * 1e4) / 100;
                        e.dataset.$playprogress.css("width", f + "%"), e.dataset.$playpoint.css("left", g + "%"), e.context.msg.broadcast("progressUpdate", f), "touchstart" == a && e.context.msg.broadcast("userSeekStart", {
                            time: parseInt(e.context.dataset.duration * f / 100)
                        }), "touchend" == a && e.context.msg.broadcast("userSeekEnd", {
                            time: parseInt(e.context.dataset.duration * f / 100)
                        })
                    };
                this.context.$mod.$progressmod.on("touchstart", function (g) {
                    e.context.dataset.isPlayingAd || (g = g.originalEvent ? g.originalEvent : g, g && g.touches && g.touches.length && (g = g.touches[0], a = e.dataset.$progressList.offset().left, b = g.pageX - a, c = e.dataset.$progressList.width(), d = e.dataset.$progressIndicator.width(), f("touchstart"), e.context.dataset.isControlTouch = !0, e.context.msg.broadcast("pause")))
                }).on("touchmove", function (c) {
                    e.context.dataset.isPlayingAd || (c = c.originalEvent ? c.originalEvent : c, c && c.touches && c.touches.length && (c.preventDefault(), c = c.touches[0], b = c.pageX - a, b > e.dataset.$progressList.width() ? b = e.dataset.$progressList.width() : b < 0 && (b = 0), f(), e.context.dataset.isControlTouch = !0))
                }).on("touchend", function (a) {
                    if (!e.context.dataset.isPlayingAd) {
                        var d = parseInt(e.dataset.duration * (b / c));
                        d >= e.dataset.duration && (d = e.dataset.duration - 1), f("touchend"), e.context.dataset.isControlTouch = !1, e.context.msg.broadcast("seekTo", d)
                    }
                })
            }, updateBufferedBar: function (a) {
                if (this.dataset.duration && a) {
                    var b = parseInt(100 * a / this.dataset.duration);
                    b > 100 && (b = 100), this.dataset.$loadedProgress.css({
                        width: b + "%"
                    })
                }
            }, addEventListerner: function () {
                var a = this,
                    b = a.context.dataset.duration;
                b && (a.dataset.duration = b), this.dataset.eventsList = {}, this.dataset.eventsList[f.getUniqueMsgKey("getVideoUrlSuccess")] = function () {
                    var b = a.context.dataset.duration;
                    a.dataset.duration = b
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoTimeUpdate")] = function () {
                    if (a.context.dataset.isControlShow && !a.context.dataset.isPlayingAd && a.dataset.duration && !a.context.dataset.isVideoSeeking) {
                        var b = a.context.dataset.currentTime,
                            c = b / a.dataset.duration;
                        c = 100 * c, c > 100 && (c = 100), c += "%", a.dataset.$playprogress.css("width", c), a.dataset.$playpoint.css("left", c), a.updateBufferedBar(a.context.dataset.bufferedTime)
                    }
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoProgress")] = function () {
                    a.context.dataset.isControlShow && a.updateBufferedBar(a.context.dataset.bufferedTime)
                }, this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function () {
                    a.dataset.$loadedProgress.css({
                        width: "0%"
                    }), a.dataset.$playprogress.css("width", "0%"), a.dataset.$playpoint.css("left", "0%")
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoPlaying")] = function (b) {
                    b && "endingad" === b.playListType && (a.dataset.$loadedProgress.css({
                        width: "0%"
                    }), a.dataset.$playprogress.css("width", "0%"), a.dataset.$playpoint.css("left", "0%"))
                }, this.dataset.eventsList[f.getUniqueMsgKey("videoEnd")] = function (b) {
                    b && b.isAllEnd && (a.dataset.$loadedProgress.css({
                        width: "0%"
                    }), a.dataset.$playprogress.css("width", "0%"), a.dataset.$playpoint.css("left", "0%"))
                }, this.dataset.eventsList[f.getUniqueMsgKey("speedyTouchmove")] = function (b) {
                    var c = 100 * b / a.dataset.duration + "%";
                    a.dataset.$playprogress.css("width", c), a.dataset.$playpoint.css("left", c)
                }, e.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                }), f.mobile ? this.progressOnTouch() : this.progressOnMouseMove()
            }
        }, Txplayer.register("H5UIProgress", d)
    }, 103: function (a, b) {
        a.exports = '<txpdiv class="txp_progress_list" data-role="<%=progressList%>">\n    <txpdiv class="txp_progress_load" style="width:0%" data-role="<%=loadedProgress%>"></txpdiv>\n    <txpdiv class="txp_progress_play" style="width:0%" data-role="<%=playedProgress%>"></txpdiv>\n</txpdiv>\n\n<txpdiv class="txp_btn_scrubber" style="left:0%" data-role="<%=playedPoint%>">\n    <txpdiv class="txp_scrubber_indicator" data-role="<%=progressIndicator%>"></txpdiv>\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2020-02-21 15:56:16
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
 */
! function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(42)
    }, 25: function (a, b) {
        a.exports = '<button data-role="<%=definitionBtn%>" class="txp_btn txp_btn_definition" data-status="false" aria-label="\u9ad8\u6e05">\n\t<txpdiv class="txp_label">蓝光</txpdiv>\n</button>'
    }, 42: function (a, b, c) {
        function d(a) {
            this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.util,
            f = c(25),
            g = c(43);
        d.prototype = {
            init: function () {
                this.disableHD() || (this.dataset.reportPromotionId = "860", this.dataset.downloadState = 1, this.dataset.statusText = {
                    1: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891",
                    3: "\u7ee7\u7eed\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    4: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    5: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    6: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    7: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    8: "\u5230\u817e\u8baf\u89c6\u9891\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9"
                }, this.dataset.statusText2 = {
                    1: "\u5230\u5c0f\u4f01\u9e45\u4e50\u56ed\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    2: "\u5230\u5c0f\u4f01\u9e45\u4e50\u56ed\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    3: "\u5230\u5c0f\u4f01\u9e45\u4e50\u56ed\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    4: "\u5230\u5c0f\u4f01\u9e45\u4e50\u56ed\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    5: "\u5230\u5c0f\u4f01\u9e45\u4e50\u56ed\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    6: "\u5230\u5c0f\u4f01\u9e45\u4e50\u56ed\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    7: "\u5230\u5c0f\u4f01\u9e45\u4e50\u56ed\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9",
                    8: "\u5230\u5c0f\u4f01\u9e45\u4e50\u56ed\u89c2\u770b\u9ad8\u6e05\u5185\u5bb9"
                }, this.write(), this.addEventListener())
            }, write: function () {
                var a = {
                        hideClass: Txplayer.dataset.hideClass,
                        definitionBtn: "txp-h5-ui-control-definitionbtn",
                        tabindex: Txplayer.dataset.tabindex++,
                        definitionLayer: "txp-h5-ui-control-definitionLayer",
                        definitionOpenapp: "txp-h5-ui-hd-banner"
                    },
                    b = Txplayer.$.tmpl(f, a);
                this.context.$mod.$buttonsrightmod.append(b), this.dataset.$definitionBtn = this.context.$mod.$buttonsrightmod.find('[data-role="' + a.definitionBtn + '"]');
                var c = Txplayer.$.tmpl(g, a);
                this.context.$mod.$playermod.append(c), this.dataset.$definitionLayer = this.context.$mod.$playermod.find('[data-role="' + a.definitionLayer + '"]'), this.dataset.$hdDownloadBanner = this.context.$mod.$playermod.find('[data-role="' + a.definitionOpenapp + '"]'), this.hideLayer(), e.os.ios && this.dataset.$definitionBtn.css("width", "40px")
            }, updateBanner: function (a) {
                1 == a ? (this.changeStatus(6), this.dataset.downloadState = 6) : 2 == a ? this.changeStatus(1) : a == -1 && this.changeStatus(8), this.bindClickReport()
            }, bindClickReport: function () {
            }, changeStatus: function (a) {
                a && (this.dataset.$hdDownloadBanner.html(this.dataset.statusText[a]), this.context.config.bannerEvent && this.dataset.$hdDownloadBanner.html(this.dataset.statusText2[a]))
            }, hideLayer: function () {
                this.dataset.$definitionLayer && this.dataset.$definitionLayer.addClass(Txplayer.dataset.hideClass)
            }, showLayer: function () {
                this.dataset.$definitionLayer && this.dataset.$definitionLayer.removeClass(Txplayer.dataset.hideClass)
            }, remove: function () {
                this.dataset.$definitionBtn && this.dataset.$definitionBtn.remove()
            }, disableHD: function () {
                return e && e.browser && e.browser.qqlive || e.isInIframe() || this.context.config.hideHD || this.context.config.enableMoblieDefn
            }, stepReport: function (a, b) {
                var c = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || ""
                };
                this.context.msg.broadcast("bannerReport", c)
            }, addEventListener: function () {
            }
        }, Txplayer.register("H5HdBanner", d)
    }, 43: function (a, b) {
        a.exports = '<div data-role="<%=definitionLayer%>" class="txp_overlay_hint <%=hideClass%>">\n\t<a data-role="<%=definitionOpenapp%>" href="javascript:;" class="tvp_btn_normal"></a>\n</div>'
    }
});