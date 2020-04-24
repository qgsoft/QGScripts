/*!
	author: shuo.ls
	date: 2020-03
*/
! function () {
    var v = function (f, s) {
        var c, u, t, n, e, l, i, p, d, h, m, r, a, g, o, v, y, w, b, k, _, x, S, T, D, C, E, A, I, L, M, F, N, P, H = s.Array,
            j = s.Object,
            U = s.Function,
            R = s.undefined,
            q = s.navigator || {},
            $ = s.location,
            B = q.userAgent || "",
            z = ["ms", "Moz", "webkit"],
            O = /^<(style|option|optgroup|td|th|tr|tbody|thead|tfoot|caption|col|colgroup)[\s>]/i,
            W = /^([^/?#:]*:|)[/]{2,}([^/?#:]+\.[^./?#:]+|):?(\d+|)([^?#]*)(\?[^#]*|)(#.*|)$/,
            V = function (t) {
                var e;
                return !t && /^(null|undefined|NaN)$/.test(t) ? e = t + "" : "object" == (e = typeof t) && (at(t) ? e = "array" : ot(t) || (e = "")), e || ""
            },
            K = function (t) {
                var e;
                try {
                    (e = ((t.constructor || t) + "").match(/^\s*(?:function|\[object)\s+([\w]+)/)) && (e = e[1], /^HTMLDocument/.test(e) ? e = "Document" : /^(HTML|SVG).*Element/.test(e) && (e = "HTMLElement"))
                } catch (t) {}
                return e || ""
            },
            X = function (t, e, n) {
                return isNaN(t = parseInt(t)) ? e : t < 0 ? n + t : t
            },
            G = function (t, e) {
                var n = t && t.length;
                return 0 < n ? t[X(e, e, n)] : R
            },
            Y = function (t) {
                var e = t[0],
                    n = e && e.length;
                if (0 < n) {
                    var r = n - 1,
                        i = 0,
                        a = r;
                    if (2 < t.length)
                        if (!0 === t[2]) i = r, a = 0;
                        else {
                            if (i = X(t[2], i, n), a = X(t[3], a, n), r < i && r < a || i < 0 && a < 0) return null;
                            i < a ? (i = Math.max(i, 0), a = Math.min(a, r)) : a < i && (i = Math.min(i, r), a = Math.max(a, 0))
                        }
                    for (var o = {
                        source: e,
                        errorItems: [],
                        indexStart: i,
                        indexEnd: a
                    }; i <= r;) {
                        var s = e[i];
                        if (!1 === kt(t[1], o, [i, s], function (t) {
                            o.errorItems.push(s), t && dt(t.stack)
                        })) {
                            o.breakItem = s, o.breakIndex = i;
                            break
                        }
                        if (i === a) break;
                        a < i ? i-- : i++
                    }
                    return o
                }
                return null
            },
            Q = function (t) {
                var e = 0,
                    n = t[0],
                    r = {
                        source: n,
                        errorItems: []
                    };
                for (var i in n) {
                    e++;
                    var a = n[i];
                    if (!1 === kt(t[1], r, [i, a], function (t) {
                        r.errorItems.push(a), t && dt(t.stack)
                    })) {
                        r.breakItem = a, r.breakKey = i;
                        break
                    }
                }
                return e ? r : null
            },
            J = function (t, e) {
                e = 0 < e ? e : 2;
                var n = (t = /^\d+$/.test(t) ? t + "" : "0").length;
                return n < e ? new H(e - n + 1).join(0) + t : t
            },
            Z = function (t) {
                var e, n = 1 == t ? "Height" : "Width",
                    r = Lt();
                return e = (e = "client" + n) in r ? r[e] : (e = "inner" + n) in s ? s[e] : (e = "offset" + n) in r ? r[e] : 0
            },
            tt = function (t, e, n, r) {
                var i;
                if (t && "function" === V(t)) try {
                    i = t.apply(e || this, n)
                } catch (t) {
                    r ? i = tt(r, null, [t]) : t && dt(t.stack || t)
                } else r && (i = tt(r, e, []));
                return i
            },
            et = function (t, e) {
                var n = this;
                Pt(t, e, function (t) {
                    n[n.length++] = t
                })
            },
            nt = function (t) {
                return "string" === V(t)
            },
            rt = function (t) {
                return "number" === V(t)
            },
            it = function (t) {
                return "function" === V(t)
            },
            at = H.isArray ? function (t) {
                return H.isArray(t)
            } : function (t) {
                return t && t.constructor === H
            },
            ot = function (t) {
                return t && t.constructor === j
            },
            st = function (t) {
                return t && "Date" === K(t)
            },
            ct = function (t) {
                return t && "HTMLElement" === K(t)
            },
            ut = function (t) {
                return t && (t === s || "Window" === K(t))
            },
            lt = function (t) {
                return t && t.constructor === et
            },
            ft = function (t) {
                var e = t[0],
                    n = V(e);
                if ("function" === n) return Jt(e, t[1]);
                if ("string" === n && (e = e.match(/^([?!@])(.*)/))) {
                    var r = e[2];
                    switch (e[1]) {
                    case "?":
                        return Jt.get(r);
                    case "!":
                        return kt(Jt.query(r)[0], this, zt(t, 1));
                    case "@":
                        var i, a;
                        return mt(t, function (t, e) {
                            !1 === e ? Jt.remove(r) : it(e) ? i = e : nt(e) && (a = e)
                        }, 1), i ? Jt.set(r, i, a) : Jt.query(r)[0]
                    }
                }
                return new et(t[0], t[1])
            },
            pt = (c = !/MSIE|rv:11/.test(B), t = "padding:0 5px;color:#fff;font-weight:bold;line-height:1.5;border-radius:3px;", (u = function (t, e) {
                var n = [t],
                    r = V(e);
                if ("undefined" == r) e = u.configMap[u.configDefault];
                else if ("string" == r) {
                    var i = e;
                    (e = u.configMap[e]) && !e.text && (e.text = i)
                } else "object" !== r && (e = null); if (e) {
                    var a = e.mark;
                    if (a && a.text) {
                        var o = a.text.replace(/\{time\}/gi, Kt(new Date, "{HH}:{mm}:{ss}.{S}"));
                        n = c ? ["%c" + o, a.style, t] : ["@" + o, t]
                    } else c && (a = e.style) && (n = /string|number/.test(V(t)) ? ["%c" + t, a] : ["%cLog:", a, t])
                }
                if (s.console) try {
                    s.console.log.apply(this, n)
                } catch (t) {}
            }).configDefault = "log", u.configMap = {
                log: {
                    mark: {
                        style: "background:rgb(34,177,76);" + t,
                        text: "Log[{time}]"
                    }
                },
                error: {
                    mark: {
                        style: "background:rgb(255,0,0);" + t,
                        text: "Error[{time}]"
                    }
                },
                warn: {
                    mark: {
                        style: "background:rgb(253,177,33);" + t,
                        text: "Warn[{time}]"
                    }
                }
            }, u),
            dt = function (t) {
                pt(t, "error")
            },
            ht = function (t, e) {
                return t && "function" === V(e) && Q(arguments)
            },
            mt = function (t, e) {
                return t && "function" === V(e) && Y(arguments)
            },
            gt = function (t, e) {
                return (t + "").replace(1 == e ? /^\s+|\s+$|\s+(?=\s)/g : /^\s+|\s+$/g, "")
            },
            vt = function (t, e) {
                var n = "";
                for (e = 0 < e ? e : 36, t = 0 < t ? t : 10; !n.length || 0 < t && n.length < t;) n += Math.random().toString(e).replace(/^0\./, "");
                return 0 < t ? n.substring(0, t) : n
            },
            yt = function (t, e) {
                return t += "", e ? t.replace(/\b[a-z]/g, function (t) {
                    return t.toUpperCase()
                }) : t ? t[0].toUpperCase() + t.slice(1) : ""
            },
            wt = function (t, e) {
                return (t + "").replace(e || /[^\w\s]/g, function (t) {
                    return "\\" + ((t = t.charCodeAt(0).toString(16)).length <= 2 ? "x" : "u") + (t.length % 2 ? "0" : "") + t
                })
            },
            bt = function (t, e) {
                return e ? (t + "").replace(e, function (t) {
                    return /[\x00-\x7f]/.test(t) ? "%" + t.charCodeAt(0).toString(16) : encodeURIComponent(t)
                }) : encodeURIComponent(t)
            },
            kt = function (t, n, r, i) {
                if (void 0 === r ? r = [] : at(r) || (r = [r]), "function" !== V(i) && (i = null), "array" !== V(t)) return tt(t, n, r, i);
                var a = [];
                return mt(t, function (t, e) {
                    a.push(tt(e, n, r.slice(), i))
                }), a
            },
            _t = function (t, e, n, r) {
                if (nt(t) && (t = {
                    name: t
                }), t && t.name) try {
                    var i = f.createEvent(t.type || "Event");
                    i.data = n, kt(t.init, this, [i]), i.initEvent(t.name, !!t.canBubble, !!t.cancelable), Pt(e || f, null, function (t) {
                        t.dispatchEvent && t.dispatchEvent(i)
                    })
                } catch (t) {
                    if (it(r)) return r(t);
                    dt(t.stack)
                } else if (it(r)) return r()
            },
            xt = function (t, r, n) {
                var i = {};
                return mt(t.split("&"), function (t, e) {
                    (!n || e) && e.replace(/([^=]+)=?(.*)/, function (t, e, n) {
                        if (!1 !== r) {
                            try {
                                e = decodeURIComponent(e)
                            } catch (t) {}
                            try {
                                n = decodeURIComponent(n)
                            } catch (t) {}
                        }
                        e in i ? (nt(i[e]) && (i[e] = [i[e]]), i[e].push(n)) : i[e] = n
                    })
                }), i
            },
            St = function (t) {
                if (/^\{.*\}$|^\[.*\]$|^".*"$|^'.*'$|^(\d+|true|false|null)$/.test(t)) try {
                    return new U("return (" + t + ")")()
                } catch (t) {
                    dt(t.stack)
                }
            },
            Tt = function (t) {
                var e, n = [];
                (n = (t = "string" === V(t) ? t : $.href).match(W)) || (n = $.href.match(W), (e = t.match(/^(\?[^#]+|)(#.+|)$/)) ? (n[5] = e[1], n[6] = e[2]) : (e = t.match(/^([^?#]*)(\?[^#]+|)(#.+|)$/)) && (n[4] = ("/" === e[1][0] ? "" : n[4]) + e[1], n[5] = e[2], n[6] = e[3]));
                var r = n[1] || $.protocol,
                    i = n[2],
                    a = n[3],
                    o = n[4],
                    s = n[5],
                    c = n[6],
                    u = i + (a ? ":" : "") + a,
                    l = r + "//" + u;
                return {
                    protocol: r,
                    hostname: i,
                    port: a,
                    pathname: o,
                    search: s,
                    hash: c,
                    host: u,
                    origin: l,
                    href: l + o + s + c,
                    searchParam: xt(n[5].replace(/^\?/, "")),
                    searchParamUncode: xt(n[5].replace(/^\?/, ""), !1),
                    hashParam: xt(n[6].replace(/^#!?/, "")),
                    hashParamUncode: xt(n[6].replace(/^#!?/, ""), !1)
                }
            },
            Dt = function (t, e) {
                if (e) {
                    var n = Tt(t),
                        r = n.searchParam;
                    ht(e, function (t, e) {
                        r[t] = e
                    });
                    var i = $t(r);
                    return n.origin + n.pathname + (i ? "?" : "") + i
                }
                return t
            },
            Ct = function (t) {
                if (t) {
                    if (lt(t)) return arguments.callee(t[0]);
                    switch (K(t)) {
                    case "Document":
                        return t;
                    case "Window":
                        return t.document;
                    case "HTMLElement":
                    case "Text":
                        return t.ownerDocument;
                    case "MNElement":
                        return arguments.callee(t[0])
                    }
                }
                return f
            },
            Et = function (t) {
                if (t && nt(t)) {
                    -1 < t.indexOf("-") && (t = t.replace(/^-[^-]+-|-([^-])([^-]+)/g, function (t, e, n) {
                        return e ? e.toUpperCase() + n.toLowerCase() : ""
                    })), t = t.replace(/^(?:ms|moz|webkit)(.)/i, function (t, e) {
                        return e.toLowerCase()
                    });
                    var n = Lt().style;
                    if (t in n) return t;
                    var r = "";
                    if (!/float$/i.test(t) || !((r = "styleFloat") in n || (r = "cssFloat") in n)) {
                        r = "";
                        var i = yt(t);
                        mt(z, function (t, e) {
                            if (e + i in n) return r = e + i, !1
                        })
                    }
                    return r
                }
                return ""
            },
            At = (n = s.getComputedStyle ? function (t, e) {
                return s.getComputedStyle(t, null).getPropertyValue(e.replace(/(^webkit|^Moz|^ms|[A-Z])/g, "-$1").toLowerCase())
            } : function (t, e) {
                return t.currentStyle[e] || ""
            }, function (t, e) {
                if (t && e) try {
                    return n(t, Et(e))
                } catch (t) {}
                return ""
            }),
            It = function (t, e) {
                var n = 0,
                    r = 0,
                    i = 0,
                    a = 0,
                    o = 0,
                    s = 0;
                try {
                    var c = t.getBoundingClientRect(),
                        u = 0,
                        l = 0;
                    e && (u = jt(0), l = jt(1)), n = c.top + l, r = c.left + u, i = c.right + u, a = c.bottom + l, o = i - r, s = a - n
                } catch (t) {}
                return {
                    top: n,
                    left: r,
                    right: i,
                    bottom: a,
                    width: o,
                    height: s
                }
            },
            Lt = function () {
                return e && e.parentNode || (e = f.getElementsByTagName("html")[0]), e
            },
            Mt = function (t) {
                var n, r, i, a;
                mt(t, function (t, e) {
                    if (0 == t) n = e;
                    else if (e) switch (V(e)) {
                    case "number":
                        i = e;
                        break;
                    case "function":
                        a = e;
                        break;
                    default:
                        r = e
                    }
                });
                var e = [];
                if (n) {
                    r ? /HTMLElement|Document/.test(K(r)) || (r = Nt(r, 1)[0]) : r = f;
                    var o = function (t) {
                            if (e.push(t), 0 < i && e.length >= i) return !1
                        },
                        s = it(a) ? function (t) {
                            if (!1 !== kt(a, this, [t])) return o(t)
                        } : o,
                        c = function (t) {
                            if (0 < i && e.length >= i) return !1;
                            if (t) switch (K(t)) {
                            case "HTMLElement":
                                return s(t);
                            case "String":
                                if (/<[\w\d]+.*>/.test(t)) qt(t, r, function (t) {
                                    return s(t)
                                });
                                else if (r) {
                                    var n;
                                    if (t = gt(t), 1 === i && r.querySelector) {
                                        try {
                                            n = r.querySelector(t)
                                        } catch (t) {}
                                        n && s(n)
                                    } else if (r.querySelectorAll) {
                                        try {
                                            n = r.querySelectorAll(t)
                                        } catch (t) {}
                                        mt(n, function (t, e) {
                                            return s(e)
                                        })
                                    } else /^([a-z0-9_-]*|\*)$/i.exec(t) ? mt(r.getElementsByTagName(t), function (t, e) {
                                        return s(e)
                                    }) : (n = /^#([a-z0-9_-]*)$/i.exec(t)) ? mt(r.getElementsByTagName("*"), function (t, e) {
                                        if (e.id === n[1]) return s(e)
                                    }) : (n = /^\.([a-z0-9_-]*)$/i.exec(t)) && r.getElementsByClassName && mt(r.getElementsByClassName(n[1]), function (t, e) {
                                        return s(e)
                                    })
                                }
                                break;
                            default:
                                mt(t, function (t, e) {
                                    return c(e)
                                })
                            }
                        };
                    c(n)
                }
                return e
            },
            Ft = function () {
                return Mt(arguments)
            },
            Nt = function () {
                var n, r = [];
                return mt(arguments, function (t, e) {
                    it(e) ? n = e : r.push(e)
                }), r.push(function (t) {
                    if (1 !== t.nodeType || !1 === kt(n, this, [t])) return !1
                }), Mt(r)
            },
            Pt = function (t, r, e) {
                var n = [],
                    i = it(e) ? function (t) {
                        !1 !== kt(e, this, [t]) && n.push(t)
                    } : function (t) {
                        n.push(t)
                    };
                return function (t) {
                    var e = K(t);
                    if ("String" === e) Nt(t, r, i);
                    else if (/^(Window|Document|HTMLElement|XMLHttpRequest)$/.test(e)) i(t);
                    else {
                        var n = arguments.callee;
                        mt(t, function (t, e) {
                            n(e)
                        })
                    }
                }(t), n
            },
            Ht = function (t) {
                var n = [];
                return t && mt(t.changedTouches, function (t, e) {
                    e && n.push({
                        x: e.pageX,
                        y: e.pageY
                    })
                }), n.length || n.push({
                    x: t.pageX || t.clientX || 0,
                    y: t.pageY || t.clientY || 0
                }), n
            },
            jt = function (t) {
                var e = /^[0xl]/i.test(t) ? ["scrollX", "scrollLeft"] : ["scrollY", "scrollTop"];
                return s[e[0]] || Lt()[e[1]] || f.body && f.body[e[1]] || 0
            },
            Ut = function (t, n) {
                var r = /^[0xl]/i.test(t) ? ["scrollLeft", "overflowX"] : ["scrollTop", "overflowY"];
                mt([Lt(), f.body], function (t, e) {
                    if (e && "hidden" !== At(e, r[1])) return e[r[0]] = n, !1
                })
            },
            Rt = function (e, t) {
                var n = t + "";
                try {
                    if (!O.test(n)) return void(e.innerHTML = n);
                    e.innerHTML = ""
                } catch (t) {
                    for (; e.firstChild;) e.removeChild(e.firstChild)
                }
                qt(n, e)
            },
            qt = function (t, e, n) {
                var r;
                e = Nt(e, 1)[0];
                var i = V(t);
                if ("string" == i && /<.*>/.test(t)) {
                    var a = f.createElement("DIV"),
                        o = O.exec(t);
                    for (o ? "style" === (o = o[1].toLocaleLowerCase()) ? (a.innerHTML = "&nbsp;" + t, a.removeChild(a.firstChild)) : a = "tr" === o ? (a.innerHTML = "<table><tbody>" + t + "</tbody></table>", a.getElementsByTagName("tbody")[0]) : /^(td|th)$/.test(o) ? (a.innerHTML = "<table><tr>" + t + "</tr></table>", a.getElementsByTagName("tr")[0]) : (/^(option|optgroup)$/i.test(o) ? a.innerHTML = "<select>" + t + "</select>" : a.innerHTML = "<table>" + t + "</table>", a.firstChild) : a.innerHTML = t;
                        (r = a.firstChild) && (e ? e.appendChild(r) : a.removeChild(r), !1 !== kt(n, r, [r])););
                } else /^(boolean|number|string)$/.test(i) && "" !== t && (r = f.createTextNode(t), e && e.appendChild(r), kt(n, r, [r]))
            },
            $t = function (t) {
                if (ot(t)) {
                    var e = [];
                    return ht(t, function (n, t) {
                        var r = arguments.callee;
                        at(t) ? mt(t, function (t, e) {
                            r(n, e)
                        }) : t !== R && (n = bt(n), t = bt(ot(t) ? Bt(t) : t), e.push(n + "=" + (t || "")))
                    }), e.join("&")
                }
                return ""
            },
            Bt = function (t, n) {
                var r, i = arguments.callee,
                    e = V(t);
                return "object" == e ? (r = [], ht(t, function (t, e) {
                    r.push(i(t, n) + ":" + i(e, n))
                }), "{" + r.join(",") + "}") : "array" == e ? (r = [], mt(t, function (t, e) {
                    r.push(i(e, n))
                }), "[" + r.join(",") + "]") : /^(null|undefined|number|boolean)/.test(e) ? t + "" : (t = (t + "").replace(/([\\"])/g, function (t) {
                    return "\\" + t
                }), '"' + (!1 !== n ? wt(t, /[^\x20-\x7E"]/g) : t) + '"')
            },
            zt = function (t, e, n) {
                if (!t || t.length <= 0) return [];
                if (at(t)) return t.slice(e, n);
                var r = [];
                return mt(t, function (t, e) {
                    r.push(e)
                }, e, n), r
            },
            Ot = (p = {}, d = "mn-events", h = function (t, e, n, r) {
                /^touch/.test(e) && !("passive" in r) && i && i.passive && (r.passive = !0), t.addEventListener(e, n, r)
            }, m = function (t, e, n, r) {
                t.removeEventListener(e, n, r)
            }, r = function () {
                if (r = null, mt([
                    ["transitionend", "webkitTransitionEnd"],
                    ["animationstart", "webkitAnimationStart"],
                    ["animationend", "webkitAnimationEnd"],
                    ["animationiteration", "webkitAnimationIteration"],
                    ["touchstart", "mousedown"],
                    ["touchmove", "mousemove"],
                    ["touchend", "mouseup"]
                ], function (t, e) {
                    !("on" + e[0] in s) && "on" + e[1].toLowerCase() in s && (p[e[0]] = e[1])
                }), "onmousewheel" in s || (p.mousewheel = "DOMMouseScroll"), s.addEventListener) {
                    if (j.defineProperty) {
                        var n = {};
                        mt(["capture", "passive", "once"], function (t, e) {
                            j.defineProperty(n, e, {
                                get: function () {
                                    return (i = i || {})[e] = !0
                                }
                            })
                        }), s.addEventListener("", null, n)
                    }
                    i || (h = function (t, e, n, r) {
                        t.addEventListener(e, n, r.capture)
                    }, m = function (t, e, n, r) {
                        t.removeEventListener(e, n, r.capture)
                    })
                } else if (s.attachEvent) {
                    var e = {
                        1: 1,
                        2: 3,
                        4: 2,
                        3: 1
                    };
                    l = function (t) {
                        t.which = e[t.button], t.stopPropagation = function () {
                            t.cancelBubble = !0
                        }, t.preventDefault = function () {
                            t.returnValue = !1
                        }
                    }, h = function (t, e, n, r) {
                        t.attachEvent("on" + e, n, r.capture)
                    }, m = function (t, e, n, r) {
                        t.detachEvent("on" + e, n, r.capture)
                    }
                }
            }, a = function (a, n, r, i, o) {
                var t = !i.keepEvent && p[n.toLowerCase()] || n,
                    s = function (t, e) {
                        l && l(t), t.target = e, t.sourceTarget = a;
                        try {
                            r.call(a, t)
                        } catch (t) {
                            dt(t.stack)
                        }
                        i.once && g(a, n, r, i, o)
                    },
                    e = function (t) {
                        var e = (t = t || {}).target || t.srcElement || null;
                        if (o && e && e.parentNode) {
                            var n, r, i = Nt(o, a);
                            if (i.length)
                                do {
                                    for (n = 0; r = i[n++];)
                                        if (r == e) return void s(t, e)
                                } while (e = e.parentNode)
                        } else s(t, e)
                    },
                    c = a[d] || (a[d] = {});
                (c = c[t] || (c[t] = [])).push([e, r, o, i.capture]), h(a, t, e, i)
            }, g = function (t, e, n, r, i) {
                var a = p[e.toLowerCase()] || e,
                    o = t[d];
                if (o && (o = o[a])) {
                    for (var s = o.length - 1; 0 <= s; s--) {
                        var c = o[s];
                        c[1] === n && c[2] === i && c[3] === r.capture && (m(t, a, c[0], r), o.splice(s, 1))
                    }
                    o.length || delete t[d][a]
                }
                m(t, a, n, r)
            }, o = function (u, t) {
                r && r();
                var e = Pt(t[0]);
                0 < e.length && function (t) {
                    var r = arguments.callee,
                        i = [],
                        a = [],
                        o = {},
                        s = [],
                        n = {},
                        c = function (t, e) {
                            t && (n[t] ? n[t].push(e) : n[t] = [e])
                        };
                    mt(t, function (t, e) {
                        switch (V(e)) {
                        case "function":
                            a.push(e);
                            break;
                        case "string":
                            if (e = e.replace(/^[\s,]+|[\s,]+$/g, "")) {
                                var n = !0;
                                /^[a-z0-9,\s]+$/.test(e) || (n = !1, e = e.replace(/^\?/, "")), mt(e.split(/\s*,+\s*/), n ? function (t, e) {
                                    e && i.push(e)
                                } : function (t, e) {
                                    e && s.push(e)
                                })
                            }
                            break;
                        case "object":
                            ht(e, function (t, r) {
                                switch (V(r)) {
                                case "boolean":
                                    o[t] = r;
                                    break;
                                case "function":
                                    mt(t.split(/,+/), function (t, e) {
                                        c(e, r)
                                    });
                                    break;
                                case "array":
                                    mt(t.split(/,+/), function (t, n) {
                                        mt(r, function (t, e) {
                                            "function" === V(e) && c(n, e)
                                        })
                                    })
                                }
                            });
                            break;
                        case "array":
                            r(e)
                        }
                    }), s = s.join(","), o.capture = !!o.capture, mt(e, function (t, r) {
                        ht(n, function (n, t) {
                            mt(t, function (t, e) {
                                u(r, n, e, o, s)
                            })
                        }), a.length && mt(i, function (t, n) {
                            mt(a, function (t, e) {
                                u(r, n, e, o, s)
                            })
                        })
                    })
                }(zt(t, 1))
            }, {
                on: function () {
                    o(a, arguments)
                }, off: function () {
                    o(g, arguments)
                }
            }),
            Wt = (y = [], w = function () {
                v = 0, te(s).off("load", w), te(f).off({
                    readystatechange: b,
                    DOMContentLoaded: w
                }), mt(y, function (t, e) {
                    try {
                        e()
                    } catch (t) {
                        dt(t.stack)
                    }
                })
            }, b = function () {
                "complete" == f.readyState && w()
            }, function (t) {
                it(t) && ("complete" == f.readyState ? t() : (y.push(t), v || (v = 1, te(s).on("load", w), te(f).on({
                    readystatechange: b,
                    DOMContentLoaded: w
                }))))
            }),
            Vt = (k = function (t) {
                return bt(gt(t), /[=;]/g)
            }, _ = function (t) {
                return bt(gt(t), /[;]/g)
            }, function () {
                var n = arguments,
                    t = n[0];
                switch (V(t)) {
                case "object":
                    var r = n.callee;
                    ht(t, function (t, e) {
                        r(t, e, n[1])
                    });
                    break;
                case "string":
                    var i = k(t);
                    if (n.length <= 1) {
                        var a = [];
                        return mt(f.cookie.split(/\s*;\s*/), function (t, e) {
                            0 === e.indexOf(i + "=") && a.push(e.substring(e.indexOf("=") + 1))
                        }), 1 === a.length ? a[0] : 1 < a.length ? a : ""
                    }
                    var e = n[2];
                    0 < e ? e = {
                        expires: 1 * new Date + 36e5 * e
                    } : ot(e) || (e = {});
                    var o = n[1];
                    !1 === o && (o = "", e.expires = 0);
                    var s = [i + "=" + _(o)];
                    ht(e, function (t, e) {
                        "expires" == t ? st(e = new Date(e)) && s.push("expires=" + e.toGMTString()) : s.push(k(t) + "=" + _(e))
                    }), f.cookie = s.join(";")
                }
                return f.cookie
            }),
            Kt = function (n, t) {
                switch (V(n)) {
                case "undefined":
                    n = new Date;
                    break;
                case "number":
                    n = new Date(n);
                    break;
                case "string":
                    if (/^\d+$/.test(n)) n = new Date(parseInt(n));
                    else {
                        var e = new Date(n);
                        n = /Invalid Date/.test(e) ? new Date(n.replace(/-/g, "/")) : e
                    }
                }
                var r, i = st(n) ? function (t) {
                    var e;
                    switch (t[0]) {
                    case "y":
                        e = n.getFullYear();
                        break;
                    case "M":
                        e = n.getMonth() + 1;
                        break;
                    case "d":
                        e = n.getDate();
                        break;
                    case "H":
                        e = n.getHours();
                        break;
                    case "m":
                        e = n.getMinutes();
                        break;
                    case "s":
                        e = n.getSeconds();
                        break;
                    case "S":
                        e = n.getMilliseconds()
                    }
                    return J(e, t.length)
                } : function (t) {
                    return J(0, t.length)
                };
                return t && /^(function|string)$/.test(r = V(t)) || (r = "string", t = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}"), "function" === r ? kt(t, this, [{
                    y: i("yyyy"),
                    M: i("MM"),
                    d: i("dd"),
                    H: i("HH"),
                    m: i("mm"),
                    s: i("ss"),
                    S: i("SSS")
                }]) : t.replace(/\{(y+|M+|d+|H+|m+|s+|S+)\}/g, function (t, e) {
                    return i(e)
                })
            },
            Xt = (x = function (t, n, r) {
                if (t) switch (V(t)) {
                case "function":
                    return kt(t, n, r);
                case "array":
                    mt(t, function (t, e) {
                        x(e, n, r)
                    });
                    break;
                case "string":
                    t = t.split("."), _t({
                        type: 1 < t.length && t[0],
                        name: t[t.length - 1]
                    }, n, r);
                    break;
                default:
                    _t(t, n, r)
                }
            }, function (t, e) {
                return x(t, e, zt(arguments, 2))
            }),
            Gt = (S = function (t, n) {
                return mt(t, function (t, e) {
                    n.push(e)
                }), n
            }, T = function (t, n) {
                return ht(t, function (t, e) {
                    e !== R && (n[t] = function (t) {
                        switch (V(t)) {
                        case "object":
                            return T(t, {});
                        case "array":
                            return S(t, [])
                        }
                        return t
                    }(e))
                }), n
            }, function () {
                var n = {};
                return mt(arguments, function (t, e) {
                    T(e, n)
                }), n
            }),
            Yt = (C = !!/Android|Chrome/.test(B) && null, E = [], function (t) {
                if (null !== C) kt(t, this, [C]);
                else if (E.push(t), !D) {
                    D = 1;
                    var e = new Image;
                    e.onload = e.onerror = function () {
                        D = 0, C = !(!e.width || !e.height), mt(E, function (t, e) {
                            kt(e, this, [C])
                        }), E = []
                    }, e.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAgA0JaQAA3AA/vuUAAA="
                }
                return C
            }),
            Qt = (A = {}, function (t) {
                if (t) {
                    var e = arguments;
                    return !1 === e[1] ? delete A[t] : 1 < e.length ? A[t] = e[1] : t in A || (A[t] = vt()), A[t]
                }
            }),
            Jt = (I = {}, L = function (t) {
                var i = [];
                return t && nt(t) && mt(t.split(","), function (t, e) {
                    var n = I[e];
                    if (n)
                        if (2 < n.length) i.push(n[2]);
                        else {
                            var r = M(n[0], n[1]);
                            n.push(r), i.push(r)
                        } else i.push(null)
                }), i
            }, (M = function (t, e) {
                try {
                    return t.apply(te, [te].concat(L(e)))
                } catch (t) {
                    dt(t.stack)
                }
            }).set = function (t, e, n) {
                return I[t] = [e, n]
            }, M.get = function (t) {
                return I[t]
            }, M.query = L, M.remove = function (t) {
                return t in I && (delete I[t], !0)
            }, M),
            Zt = (F = 0, N = function () {
                var n, r;
                if (n = s.XMLHttpRequest) try {
                    return (N = function () {
                        return new n
                    })()
                } catch (t) {}
                if (n = s.ActiveXObject) return mt(["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"], function (t, e) {
                    try {
                        return r = (N = function () {
                            return new n(e)
                        })(), !1
                    } catch (t) {}
                }), r
            }, P = {
                ajax: {
                    init: function () {
                        return N()
                    }, ready: function (t, n) {
                        /^(get|post)$/i.test(t.method) || (t.method = "get");
                        try {
                            n.open(t.method, "post" === t.method ? t.url : Dt(t.url, t.data), !1 !== t.async), ht(t.headers, function (t, e) {
                                n.setRequestHeader(t, e)
                            })
                        } catch (t) {
                            return !1
                        }
                    }, send: function (t, e, n) {
                        e.onreadystatechange = function () {
                            4 === e.readyState && (e.onreadystatechange = function () {}, n(e.response, !/^(200|0)$/.test(e.status) && {}))
                        };
                        var r = null;
                        "post" === t.method && (r = t.data, "object" === V(r) && (e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r = $t(r)));
                        try {
                            e.send(r)
                        } catch (t) {
                            n(e.response, t || {})
                        }
                    }
                },
                script: {
                    init: function () {
                        return f.createElement("script")
                    }, ready: function (t, e) {
                        e.type = "text/javascript", e.async = !0, "object" !== V(t.data) && (t.data = {}), t.jsonp && "string" === V(t.jsonp) && (t.data[t.jsonp] = this.jsonpKey = "mn_c" + F+++"t" + 1 * new Date)
                    }, send: function (t, n, r) {
                        var i = this,
                            e = function (t, e) {
                                if (n.onerror = n.onload = n.onreadystatechange = function () {}, n.parentNode && n.parentNode.removeChild(n), i.jsonpKey) {
                                    s[i.jsonpKey] = null;
                                    try {
                                        delete s[i.jsonpKey]
                                    } catch (t) {}
                                }
                                r(e, 0 === t)
                            };
                        n.onerror = function () {
                            e(1, null)
                        }, n.onload = function () {
                            e(0, null)
                        }, n.onreadystatechange = function () {
                            /loaded|complete/.test(n.readyState) && e(1, null)
                        }, i.jsonpKey && (s[i.jsonpKey] = function (t) {
                            e(1, t)
                        }), n.src = Dt(t.url, t.data), (f.getElementsByTagName("head")[0] || f.getElementsByTagName("html")[0]).appendChild(n)
                    }
                }
            }, function () {
                var i, n = arguments;
                switch (V(n[0])) {
                case "string":
                    i = {
                        url: n[0]
                    }, mt(n, function (t, e) {
                        switch (V(n[1])) {
                        case "function":
                            i.callback = e;
                            break;
                        case "object":
                            i.data = e
                        }
                    }, 1);
                    break;
                case "object":
                    i = n[0]
                }
                if (i) {
                    var t = i.type;
                    "jsonp" === t ? (i.type = "script", i.jsonp || (i.jsonp = "callback")) : "get" === t ? (i.type = "ajax", i.method = "get") : "post" === t ? (i.type = "ajax", i.method = "post") : /^(ajax|script)$/.test(t) || (i.type = "script");
                    var a = {
                            counter: 0,
                            params: i
                        },
                        r = function (t, e, n) {
                            var r = i.responseFormat;
                            r && "json" !== r || "string" !== V(t) || (t = St(t)), (e || kt(i.retryCheck, a, [t, e])) && a.counter <= i.retryCount && !1 !== n ? 0 < i.retryInterval ? a._timeoutSend = setTimeout(o, i.retryInterval) : o() : kt(i.callback, a, [t, e])
                        },
                        o = function () {
                            delete a.core, clearTimeout(a._timeoutSend);
                            var t = P[i.type],
                                e = a.core = kt(t.init, a, [i]);
                            e && !1 !== kt(i.before, a, [i, e]) && "string" === V(i.url) && !1 !== kt(t.ready, a, [i, e]) && !1 !== kt(i.ready, a, [i, e]) ? (a.counter++, kt(t.send, a, [i, e, r])) : r(null, !0, !1)
                        };
                    return o(), a
                }
            });
        ! function (n) {
            n.length = 0;
            var e = function (t, e) {
                    var n = t[e + "ElementSibling"];
                    if (n !== R) return n;
                    for (n = t; n = n[e + "Sibling"];)
                        if (1 == n.nodeType) return n
                },
                r = function (t) {
                    var n = [];
                    return mt(t.children || t.childNodes, function (t, e) {
                        1 === e.nodeType && n.push(e)
                    }), n
                },
                i = function (t, e) {
                    return G(t.children || r(t), e)
                },
                a = function (t, e) {
                    return ct(t) && e.appendChild(t)
                },
                o = function (t, e, n) {
                    return ct(t) && e.insertBefore(t, n)
                },
                s = function (t, n) {
                    var r = n && n.parentNode;
                    r && mt(t, function (t, e) {
                        o(e, r, n)
                    })
                },
                c = function (t, e) {
                    var n = e && e.parentNode;
                    if (n) {
                        var r, i = e.nextSibling;
                        mt(t, i ? function (t, e) {
                            (r = o(e, n, i)) && (i = r)
                        } : function (t, e) {
                            a(e, n)
                        })
                    }
                },
                u = function (t, n, e) {
                    if (n) {
                        var r = i(n, e);
                        r ? (e < 0 ? c : s)(t, r) : mt(t, function (t, e) {
                            a(e, n)
                        })
                    }
                },
                l = function (t, e, n, r) {
                    var i = e[0];
                    if (i) {
                        var a = V(i);
                        if ("string" == a && 1 == e.length) return ct(t[0]) ? n(t[0], i) : null;
                        var o = {};
                        switch (a) {
                        case "string":
                            o[i] = e[1];
                            break;
                        case "object":
                            o = i
                        }
                        mt(t, function (t, n) {
                            ct(n) && ht(o, function (t, e) {
                                r(n, t, e)
                            })
                        })
                    }
                };
            ht({
                child: function (t, e) {
                    return i(t, e)
                }, first: function (t) {
                    return i(t, 0)
                }, last: function (t) {
                    return i(t, -1)
                }, prev: function (t) {
                    return e(t, "previous")
                }, next: function (t) {
                    return e(t, "next")
                }, parent: function (t) {
                    return t.parentNode
                }
            }, function (t, e) {
                n[t] = function () {
                    return new et(/^(Text|HTMLElement|Document)$/.test(K(this[0])) ? e.call(this, this[0], arguments[0]) : null)
                }
            }), ht({
                remove: function (t) {
                    t.parentNode && t.parentNode.removeChild(t)
                }, html: function (t, e) {
                    var n = e[0];
                    /^(string|number|boolean)$/.test(V(n)) ? Rt(t, n, e[1], e[2]) : n && (Rt(t, ""), (lt(n) || /^(MNElement|HTMLElement|Text)$/.test(K(n))) && (Rt(t, ""), this.append(n)))
                }, text: function (t, e) {
                    Rt(t, ""), t.appendChild(f.createTextNode(e[0]))
                }
            }, function (t, i) {
                n[t] = function () {
                    var n = this,
                        r = arguments;
                    return mt(n, function (t, e) {
                        ct(e) && i.call(n, e, r)
                    }), n
                }
            }), ht({
                on: function (t) {
                    Ot.on.apply(this, [this].concat(zt(t)))
                }, off: function (t) {
                    Ot.off.apply(this, [this].concat(zt(t)))
                }, query: function (t) {
                    var e = t[0];
                    return new et(e ? e + "" : "*", this)
                }, item: function (t) {
                    return new et(G(this, t[0]))
                }, children: function () {
                    var n = [];
                    return mt(this, function (t, e) {
                        ct(e) && (n = n.concat(r(e)))
                    }), new et(n)
                }, appendBefore: function (t) {
                    s(this, /^(Text|HTMLElement)$/.test(K(t[0])) ? t[0] : Ft(t[0])[0])
                }, appendAfter: function (t) {
                    c(this, /^(Text|HTMLElement)$/.test(K(t[0])) ? t[0] : Ft(t[0])[0])
                }, appendTo: function (t) {
                    var n, r;
                    mt(t, function (t, e) {
                        rt(e) ? r = e : e && (n = Ft(e, 1)[0])
                    }), u(this, n, r)
                }, append: function (t) {
                    var n, r = [];
                    return mt(t, function (t, e) {
                        rt(e) ? n = e : e && (r = r.concat(Ft(e)))
                    }), u(r, ct(this[0]) && this[0], n), new et(r)
                }, cls: function (t) {
                    switch (t.length) {
                    case 0:
                        return ct(this[0]) ? this[0].className : "";
                    case 1:
                        var n = t[0];
                        nt(n) && (n = gt(n, 1), mt(this, function (t, e) {
                            ct(e) && (e.className = n)
                        }));
                        break;
                    default:
                        var r, e;
                        if (!1 === t[1] ? e = t[0] : !0 === t[1] ? r = t[0] : (r = t[0], e = t[1]), r = gt(r || "", 1), e = gt(e || "", 1), r || e) {
                            var i = new RegExp("(?:^|\\s)(?:" + wt(gt(r + " " + e), /[^a-z0-9\s]/g).replace(/\s+/g, "|") + ")(?=\\s|$)", "g");
                            mt(this, function (t, e) {
                                ct(e) && (e.className = gt(e.className.replace(i, "") + " " + r))
                            })
                        }
                    }
                }, css: function (t) {
                    return l(this, t, At, function (t, e, n) {
                        if (e = Et(e))
                            if (/(transitionProperty|transition)$/.test(e) && /[^\s]*transform/.test(n)) {
                                var r = "transform",
                                    i = Lt().style;
                                r in i || mt(z, function (t, e) {
                                    if (e + "Transform" in i) return r = e + "Transform", !1
                                }), t.style[e] = n.replace(/[^\s,]*transform/g, r)
                            } else t.style[e] = n
                    })
                }, attr: function (t) {
                    return l(this, t, function (t, e) {
                        return t.getAttribute(e)
                    }, function (t, e, n) {
                        !1 === n || null === n ? t.removeAttribute(e) : t.setAttribute(e, n)
                    })
                }, innerSize: function () {
                    var t = this[0],
                        e = It(t),
                        n = 0,
                        r = 0;
                    return ct(t) && (n = t.offsetWidth - t.clientWidth || 0, r = t.offsetHeight - t.clientHeight || 0), {
                        width: e.width - n,
                        height: e.height - r
                    }
                }, view: function () {
                    return It(this[0], !0)
                }
            }, function (t, e) {
                n[t] = function () {
                    var t = e.call(this, arguments);
                    return t === R ? this : t
                }
            })
        }(et.prototype);
        var te = function () {
            var t = [arguments];
            return kt(te.init, this, t, function () {
                kt(ft, this, t)
            })
        };
        return ht({
            space: Jt,
            events: Ot,
            MNElement: et,
            init: ft,
            log: pt,
            formatDate: Kt,
            formatTime: function (n, t) {
                var r, e;
                if (0 < (n = parseInt(n))) {
                    var i = [];
                    mt([864e5, 36e5, 6e4, 1e3], function (t, e) {
                        i.push(parseInt(n / e)), n %= e
                    }), i.push(n), r = function (t) {
                        var e;
                        switch (t[0]) {
                        case "d":
                            e = i[0];
                            break;
                        case "h":
                            e = i[1];
                            break;
                        case "H":
                            e = 24 * i[0] + i[1];
                            break;
                        case "m":
                            e = i[2];
                            break;
                        case "s":
                            e = i[3];
                            break;
                        case "S":
                            e = i[4]
                        }
                        return J(e, t.length)
                    }
                } else r = function (t) {
                    return J(0, t.length)
                };
                return t && /^(function|string)$/.test(e = V(t)) || (e = "string", t = "{HH}:{mm}:{ss}"), "function" === e ? kt(t, this, [{
                    d: r("dd"),
                    h: r("hh"),
                    H: r("HH"),
                    m: r("mm"),
                    s: r("ss"),
                    S: r("SSS")
                }]) : t.replace(/\{(d+|h+|H+|m+|s+|S+)\}/g, function (t, e) {
                    return r(e)
                })
            }, firstUpperCase: yt,
            trim: gt,
            scroll: function () {
                var t = arguments,
                    e = t.length;
                if (!e) {
                    var n = jt(0),
                        r = jt(1);
                    return {
                        x: n,
                        y: r,
                        0: n,
                        1: r
                    }
                }
                var i = t[0],
                    a = t[1];
                switch (V(i)) {
                case "string":
                    var o = /^(x|l)/i.test(i) ? 0 : 1;
                    if (!(2 <= e)) return jt(o);
                    Ut(o, a);
                    break;
                case "object":
                    rt(i.x) && Ut(0, i.x), rt(i.y) && Ut(1, a.y);
                    break;
                default:
                    rt(i) && Ut(0, i), rt(a) && Ut(1, a)
                }
            }, cookie: Vt,
            ready: Wt,
            merge: Gt,
            timer: function () {
                var n, r, i, t = arguments;
                if (mt(t, function (t, e) {
                    switch (V(e)) {
                    case "function":
                        n = e;
                        break;
                    case "number":
                        r = parseInt(e);
                        break;
                    case "object":
                        i = e
                    }
                }), i && (i.frame && (s.cancelAnimationFrame && s.cancelAnimationFrame(i.frame), delete i.frame), i.timeout && (clearTimeout(i.timeout), delete i.timeout)), n) {
                    if (i = {}, 0 < r) {
                        var e = t.callee,
                            a = function () {
                                n(), e(i)
                            };
                        s.requestAnimationFrame && function (t) {
                            var e = arguments.callee;
                            i.frame = s.requestAnimationFrame(function () {
                                new Date - t >= r ? a() : e(t)
                            })
                        }(new Date), i.timeout = setTimeout(a, r)
                    } else n();
                    return i
                }
            }, webp: Yt,
            request: Zt,
            trigger: Xt,
            fireEvent: _t,
            fireFunction: kt,
            shuffle: function (t, e) {
                if (t && t.length)
                    for (var n, r, i = t.length; i;) n = parseInt(Math.random() * i), r = t[--i], t[i] = t[n], t[n] = r, kt(e, t, [t[i]]);
                return t
            }, randomKey: vt,
            mapping: Qt,
            each: function (t, e) {
                return t && "function" === V(e) && (0 <= t.length ? Y : Q)(arguments)
            }, eachArray: mt,
            eachObject: ht,
            unicode: wt,
            uricode: bt,
            htmlcode: function (t, e) {
                return (t + "").replace(e || /[^\w\s]+/g, function (t) {
                    for (var e = [], n = 0; e.push("&#" + (/[\uD800-\uDBFF]/.test(t[n]) && /[\uDC00-\uDFFF]/.test(t[n + 1]) ? 1024 * (t[n].charCodeAt(0) - 55296) + t[++n].charCodeAt(0) + 9216 : t[n].charCodeAt(0)) + ";"), t[++n];);
                    return e.join("")
                })
            }, toArray: zt,
            toJSONStr: Bt,
            toSearchStr: $t,
            parseURL: Tt,
            parseJSONStr: St,
            parseSearchStr: xt,
            isMNElement: lt,
            isHTMLElement: ct,
            isDocument: function (t) {
                return t && (t === f || "Document" === K(t))
            }, isWindow: ut,
            isEmpty: function (t) {
                var e = V(t);
                switch (e) {
                case "string":
                    return !t;
                case "array":
                    return !t.length;
                case "object":
                    var n = !0;
                    return ht(t, function () {
                        return n = !1
                    }), n
                }
                return /^(null|undefined|Invalid Date)$/.test(e)
            }, isText: function (t) {
                return t && "Text" === K(t)
            }, isObject: ot,
            isArray: at,
            isBoolean: function (t) {
                return "boolean" === V(t)
            }, isFunction: it,
            isString: nt,
            isNumber: rt,
            isInt: function (t) {
                return "number" === V(t) && t % 1 == 0
            }, isDate: st,
            isRegExp: function (t) {
                return t && "RegExp" === K(t)
            }, getType: function (t, e) {
                return !0 === e ? V(t) : K(t)
            }, getWindow: function (t) {
                return ut(t) ? t : (t = Ct(t)).defaultView || t.parentWindow || s
            }, getDocument: Ct,
            getHTMLNodes: Ft,
            getHTMLElements: Nt,
            getCurrentStyle: At,
            getEventPoints: Ht,
            getEventPoint: function (t) {
                var e = Ht(t);
                return e[e.length - 1]
            }, getRequestURL: Dt,
            getViewSize: function (t) {
                if (/^(w|0)/i.test(t)) return Z(0);
                if (/^(h|1)/i.test(t)) return Z(1);
                var e = Z(0),
                    n = Z(1);
                return {
                    width: e,
                    height: n,
                    0: e,
                    1: n
                }
            }
        }, function (t, e) {
            te[t] = e
        }), te
    }(document, window);
    v.ver = "1.0", v("@mn.data.jsonp", function (p) {
        var d = window,
            h = 0,
            m = function (e, n, t) {
                e._core && e._core._destroy(), e.responseData = n;
                var r, i = e.params,
                    a = function () {
                        var t = p.trigger(i.responseFilter, e, n);
                        void 0 !== t && (n = t)
                    };
                e.requestCount <= i.retryCount ? (!t || p.trigger(i.retryCheck, e, n) ? r = !0 : (a(), !1 !== p.trigger(i.onSuccess, e, n) && !1 !== p.trigger(i.callback, e, n) || (r = !0)), r && (0 < i.retryInterval ? e._retryTimeout = setTimeout(function () {
                    o(e)
                }, i.retryInterval) : o(e))) : (a(), p.trigger(i[t ? "onSuccess" : "onError"], e, n), p.trigger(i.callback, e, n))
            },
            g = function (t) {
                if (d[t]) {
                    d[t] = null;
                    try {
                        delete d[t]
                    } catch (t) {}
                }
            },
            o = function (e) {
                var t = e.params,
                    n = {};
                /^(number|string|boolean)$/.test(t.data) ? n.data = t.data : t.data && p.each(t.data, function (t, e) {
                    n[t] = e
                });
                var r, i = t.callbackName,
                    a = t.callbackValue;
                i && (p.isFunction(a) && (a = p.fireFunction(a, this)), a && p.isString(a) || (a = "mn_c" + (h++).toString(36) + "t" + 1 * new Date), p.isFunction(d[a]) || (r = d[a] = function (t) {
                    m(e, t, 1)
                }), n[i] = a), p.each(p.fireFunction(t.requestFilter, e, [n]), function (t, e) {
                    n[t] = e
                });
                var o, s, c, u, l = document,
                    f = e._core = l.createElement("script");
                f.type = "text/javascript", f.async = !1 !== t.async, f.defer = !0, f.onerror = function () {
                    m(e, null, 0)
                }, f.onload = function () {
                    m(e, null, 1)
                }, f.onreadystatechange = function () {
                    /loaded|complete/.test(f.readyState) && m(e, null, 1)
                }, f._destroy = function () {
                    e._core = null, clearTimeout(e._retryTimeout), f.parentNode && f.parentNode.removeChild(f), f.onerror = f.onload = f.onreadystatechange = function () {}, r && d[a] === r && g(a)
                }, f._abort = function () {
                    var t = r && d[a] === r;
                    f._destroy(), t && (d[a] = f.onerror = f.onload = f.onreadystatechange = function () {
                        g(a)
                    })
                }, f.src = e.requestURL = (o = t.url, s = n, c = p.parseURL(o), u = p.toSearchStr(s), u = c.search && u ? c.search + "&" + u : u ? "?" + u : c.search, c.origin + c.pathname + u), l.getElementsByTagName("head")[0].appendChild(f), e.requestCount++
            },
            e = function (t) {
                var e = this;
                e.params = p.merge(n.params, t), e.requestCount = 0, e.requestURL, e.requestData, e.responseData, e.abort = function () {
                    e._core && e._core._abort()
                }, e.send = function () {
                    e.abort(), o(e)
                }, e.params.sendNow && e.send()
            },
            n = function () {
                var n = {},
                    t = arguments;
                return 1 == t.length && p.isObject(t[0]) ? n = t[0] : p.eachArray(t, function (t, e) {
                    switch (typeof e) {
                    case "function":
                        n.callback = e;
                        break;
                    case "string":
                        n.url = e;
                        break;
                    case "boolean":
                        n.async = e;
                        break;
                    case "number":
                        n.retry = e;
                        break;
                    case "object":
                        n.data = e
                    }
                }), new e(n)
            };
        return n.params = {
            url: "",
            data: null,
            async: !0,
            sendNow: !0,
            retryCount: 0,
            retryCheck: null,
            retryInterval: null,
            requestFilter: null,
            responseFilter: null,
            callbackName: "callback",
            callbackValue: null,
            callback: null,
            onSuccess: null,
            onError: null
        }, n
    }), v("@mn.support.tap", function (d) {
        var n, h = d(document),
            r = 0,
            i = function (t) {
                t.stopPropagation(), t.preventDefault(), m(0)
            },
            m = function (t) {
                if (clearTimeout(n), t && (n = setTimeout(function () {
                    m(0)
                }, 400)), r !== t) {
                    r = t;
                    var e = document.body;
                    e && "pointerEvents" in e.style ? e.style.pointerEvents = t ? "none" : "" : h[t ? "on" : "off"]("click", i)
                }
            },
            e = function (t) {
                var s, e, n, r, c = this,
                    u = this.params = d.merge(g.params, t),
                    i = function (t) {
                        var e = [],
                            n = !1,
                            r = null,
                            i = t.target;
                        do {
                            if (!i || !i.tagName) break;
                            if (/^(A|AREA)$/.test(i.tagName) && (n = !0), u.captureMap)
                                for (var a in u.captureMap)
                                    if (null !== i.getAttribute(a)) {
                                        e.push(i);
                                        var o = i.getAttribute(u.captureHold);
                                        /^(false|0)$/i.test(o) ? r = !1 : /^(true|1)$/i.test(o) && (r = !0);
                                        break
                                    }
                        } while (i !== s[0] && (i = i.parentNode));
                        return u.captureMap || e.push(t.target), {
                            doms: e,
                            date: new Date,
                            hold: r,
                            linkWrap: n,
                            xy: d.getEventPoint(t)
                        }
                    },
                    a = function (i) {
                        if (n && n.doms.length) {
                            var a, o, s, e = u.captureMap;
                            d.each(n.doms, function (t, r) {
                                if (e && d.each(e, function (t, e) {
                                    if (null !== (a = r.getAttribute(t)))
                                        if ("function" == typeof e) {
                                            if (i.captureData = a, !1 === d.fireFunction(e, c, [i, r, a])) return !(s = !0)
                                        } else if (e[o = a.replace(/(\?|:).*$/, "")]) {
                                        var n = null;
                                        if (/:/.test(a) ? n = a.replace(/^.*?:/, "") : /\?/.test(a) && (n = d.parseSearchStr(a.replace(/^.*?\?/, ""))), i.captureData = n, !1 === d.fireFunction(e[o], c, [i, r, n])) return !(s = !0)
                                    }
                                }), s || !1 === d.fireFunction(u.handle, c, [i, r])) return !1
                            })
                        }
                    },
                    o = function (t) {
                        t !== r && h[(r = t) ? "on" : "off"]("touchend", f, {
                            keepEvent: !0
                        })
                    },
                    l = function (t) {
                        n = null, e = i(t), o(e.doms.length ? 1 : 0)
                    },
                    f = function (t) {
                        n = i(t), Math.abs(e.xy.x - n.xy.x) <= 6 && Math.abs(e.xy.y - n.xy.y) <= 6 && n.date - e.date < 2e3 && n.doms[0] === e.doms[0] && (a(t), (!0 === n.hold || !n.linkWrap && null === n.hold) && m(1))
                    },
                    p = function (t) {
                        e ? (n || (n = i(t), a(t)), m(0), o(0)) : (n = i(t), a(t)), e = n = null
                    };
                c.off = function () {
                    s && (s.off("touchstart", l, {
                        keepEvent: !0
                    }), s.off("click", p), s = null)
                }, c.init = function (t) {
                    c.off(), (s = d(t)).on("touchstart", l, {
                        keepEvent: !0
                    }), s.on("click", p)
                }, c.init(u.owner)
            },
            g = function () {
                var t = arguments;
                if (1 < t.length) {
                    var n = {};
                    return d.eachArray(t, function (t, e) {
                        switch (typeof e) {
                        case "function":
                            n.handle = e;
                            break;
                        default:
                            e && (e.constructor == Object ? n.captureMap = e : n.owner = e)
                        }
                    }), new e(n)
                }
                return new e(t[0])
            };
        return g.params = {
            owner: null,
            handle: null,
            captureMap: null,
            captureHold: "tap-hold"
        }, g
    });
    var e, S = /^[^.]*(test|daily|pre|local)[^.]*/.test(location.host),
        T = S || location.search.replace(/.*[?&]enableAdLog=([^&]+).*|.*/, "$1") ? function (t, e, n) {
            v.log("function" == typeof t ? t() : t, {
                mark: {
                    style: "padding:0 5px;color:#fff;font-weight:bold;line-height:1.5;border-radius:3px;background:" + (n || "rgb(34,177,76)") + ";",
                    text: "PlayerSDK" + (e ? "-" + e : "") + " [{time}]"
                }
            })
        } : function () {},
        y = function (r) {
            var i = function (t) {
                    return (t < 10 ? "0" : "") + t
                },
                a = [];
            return v.each([3600, 60], function (t, e) {
                var n = parseInt(r / e);
                a.push(i(n)), r %= e
            }), a.push(i(r)), a.join(":")
        },
        c = (e = {}, function (t) {
            return e[t] || (e[t] = Math.random().toString(36).replace(/^0\./, parseInt(10 + 26 * Math.random()).toString(36)))
        }),
        u = function (t) {
            return "string" == typeof t ? t.replace(/^http:\/\//, "//") : ""
        },
        o = function (t) {
            return "string" == typeof t ? t.replace(/\s+(class|tap|src)=('[^']*'|"[^"]*"|[^\s]+)/g, function (t, e, n) {
                switch (n = n.replace(/^('|")(.*)\1$/, "$2"), e) {
                case "class":
                    for (var r, i = [], a = 0, o = n.split(/\s+/), s = o.length; a < s; a++)(r = o[a]) && i.push(c(r));
                    n = i.join(" ");
                    break;
                case "src":
                    n = u(n);
                    break;
                case "tap":
                    e = c(e)
                }
                return " " + e + '="' + n + '"'
            }) : ""
        },
        D = function (t) {
            if (t && t.length)
                for (var e, n = parseInt(new Date / 1e3), r = 0, i = t.length; r < i; r++)(e = t[r]) && (a = "string" == e ? e : e.U, o = n, (a = u(a)) && ((new Image).src = a.replace(/__TIMESTAMP__/g, o || parseInt(new Date / 1e3))));
            var a, o
        },
        C = function (t) {
            var e;
            if (e = t.match(/Android\s([\d.]+)/)) return ["android", e[1]];
            if (/iPhone|iPad/.test(t)) return (e = t.match(/OS\s([\d_]+)/)) ? ["ios", e[1]] : ["ios", ""];
            if (/Windows/.test(t)) {
                if (e = t.match(/Windows\sPhone\sOS\s([\d.]+)/)) return ["winphone", e[1]];
                var n = ["win", ""];
                if (e = t.match(/Windows\sNT\s([\d.]+)/)) switch (e[1]) {
                case "5.0":
                    n[1] = "2000";
                    break;
                case "5.1":
                    n[1] = "xp";
                    break;
                case "5.2":
                    n[1] = "2003";
                    break;
                case "6.0":
                    n[1] = "vista";
                    break;
                case "6.1":
                    n[1] = "7";
                    break;
                case "6.2":
                    n[1] = "8";
                    break;
                case "6.3":
                    n[1] = "8.1";
                    break;
                case "10.0":
                    n[1] = "10"
                }
                return n
            }
            return /Mac/.test(t) ? ["mac", ""] : /Unix/.test(t) ? ["unix", ""] : /Linux/.test(t) ? ["linux", ""] : ["other", ""]
        }(navigator.userAgent),
        A = window.sessionStorage ? function (t, e) {
            if ("string" == typeof t && t) return !1 === e ? sessionStorage.removeItem(t) : 1 < arguments.length && sessionStorage.setItem(t, e), sessionStorage.getItem(t)
        } : function (t, e) {
            return !1 === e ? v.cookie(t, !1, {
                path: "/"
            }) : 1 < arguments.length && v.cookie(t, e, {
                path: "/"
            }), v.cookie(t)
        },
        I = function (t, e) {
            var n = {};
            n[c("tap")] = e, v("!mn.support.tap", t, n)
        },
        w = function (t, e) {
            e ? t._playerLoading || (t._playerLoading = 1, t.callPlayer("wakeUpLoading", !0, 0)) : t._playerLoading && (delete t._playerLoading, t.callPlayer("wakeUpLoading", !1))
        },
        b = function (t, e) {
            e ? t._playerProgressDis || (t._playerProgressDis = 1, t.callPlayer("disableProgress")) : t._playerProgressDis && (delete t._playerProgressDis, t.callPlayer("enableProgress"))
        };
    v(function (t) {
        var n = t.init;
        t.init = function (t) {
            var e = t[0];
            return "string" == typeof e && (/<[\s\S]+>/.test(e) ? t[0] = o(e).replace(/<style>([\s\S]+?)<\/style>/g, function (t, e) {
                return "<style>" + e.replace(/([^@{}()]+)(?=\{)/g, function (t, e) {
                    return e.replace(/\.([\w-]+)/g, function (t, e) {
                        return "." + c(e)
                    })
                }) + "</style>"
            }) : /^[@!?]/.test(e) || (t[0] = e.replace(/\.([\w-]+)/g, function (t, e) {
                return "." + c(e)
            }))), n.call(this, t)
        };
        var e = t.MNElement.prototype,
            r = e.html;
        e.html = function (t) {
            return r.call(this, "string" == typeof t ? o(t) : t)
        };
        var i = e.cls;
        e.cls = function () {
            var r = [];
            return t.each(arguments, function (t, e) {
                if (e && "string" == typeof e) {
                    var n = [];
                    e.replace(/[^\s]+/g, function (t) {
                        n.push(c(t))
                    }), e = n.join(" ")
                }
                r.push(e)
            }), i.apply(this, r)
        };
        var a = 0;
        t("@mn.data.jsonp").params.callbackValue = function () {
            return "adplayersdkc" + a+++"t" + 1 * new Date
        }, t("<style>" + ["@font-face {font-family:adfont;src: url('//at.alicdn.com/t/font_1027320_xepxf1v24vn.eot');src: url('//at.alicdn.com/t/font_1027320_xepxf1v24vn.eot?#iefix') format('embedded-opentype'),url('//at.alicdn.com/t/font_1027320_xepxf1v24vn.woff2') format('woff2'),url('//at.alicdn.com/t/font_1027320_xepxf1v24vn.woff') format('woff'),url('//at.alicdn.com/t/font_1027320_xepxf1v24vn.ttf') format('truetype'),url('//at.alicdn.com/t/font_1027320_xepxf1v24vn.svg#iconfont') format('svg');}.marks{position:absolute;z-index:50;margin:0;padding:0;}", ".mark{display:inline-block;height:20px;margin:0 2px 0 0;padding:0 4px;line-height:20px;text-align:center;font-size:12px;color:#fff;background:#000;background:rgba(0,0,0,0.5);border-radius:2px;}"].join("\n") + "</style>").appendTo("head", 0)
    }), v("@request.get", function (i, a) {
        return function (t, e, n, r) {
            e && a({
                url: e,
                data: t.getRequestData("adext,site,ccode,os,osv,vs,pver,sver,partnerid,wintype,paid,sid,v,td,tt,vip,pltype,atm,atm,emb,vit,rst,fu,ti,d,u,k,s,ct,cs,vl,vr,tt,uk,isvert,aw,bt,dq", n),
                retryCount: 2,
                retryInterval: 200,
                retryTest: function (t) {
                    return !t
                }, callback: function (t) {
                    (t = t || {}).VAL = t.VAL || [], i.isFunction(r) && r(t)
                }
            })
        }
    }, "mn.data.jsonp"), v("@request.dot", function (a, o) {
        return function (t, e) {
            for (var n = ""; n.length < 3;) n += parseInt(10 * Math.random());
            n = 1 * new Date + n;
            var r = "",
                i = t._params || t._ykPlayer;
            i && (r = i.v), o({
                url: "//vals.atm.youku.com/dot/video",
                retryCount: 2,
                retryInterval: 200,
                retryTest: function (t) {
                    return !t
                }, data: t.getRequestData("adext,site,ccode,os,osv,vs,pver,sver,partnerid,wintype,paid,sid,v,td,tt,vip,pltype,atm,atm,emb,vit,rst,fu,ti,d,u,k,s,ct,cs,vl,vr,tt,uk,isvert,aw,bt,dq", {
                    rid: n,
                    vid: r,
                    v: r,
                    custom: 1,
                    ver: "2.0"
                }),
                callback: function (t) {
                    a.isFunction(e) && e((t || {}).ITEM || [])
                }
            })
        }
    }, "mn.data.jsonp"), v("@view.toast", function (a) {
        var o, s = [".toast{position:absolute;left:50%;bottom:120px;z-index:50;width:140px;height:38px;line-height:38px;margin:0 0 0 -70px;font-size:13px;text-align:center;color:#fff;background:rgba(0,0,0,.4);border-radius:5px;}"].join("\n"),
            e = function (t) {
                var n, e, r = this,
                    i = r.params = a.merge(c.params, t);
                r.show = function (t, e) {
                    o = o || a("<style>" + s + "</style>", "head"), r.destroy(), (n = a("<div class='toast'>" + t + "</div>", e || i.to)).css({
                        transition: "all .5s",
                        transform: "translate3d(0,100%,0)",
                        bottom: 0,
                        opacity: 0
                    })[0].offsetWidth, n.css({
                        transform: "translate3d(0,0,0)",
                        bottom: "",
                        opacity: ""
                    }), a.trigger(i.onShow, r)
                }, r.hide = function (t) {
                    n && (clearTimeout(e), e = 0 < t ? setTimeout(function () {
                        r.hide()
                    }, t) : (n.css({
                        transform: "translate3d(0,100%,0)",
                        bottom: 0,
                        opacity: 0
                    }), a.trigger(i.onHide, r), setTimeout(function () {
                        r.destroy()
                    }, 500)))
                }, r.destroy = function () {
                    n && (clearTimeout(e), n.remove(), n = e = null, a.trigger(i.onDestroy, r))
                }
            },
            c = function (t) {
                return new e(t)
            };
        return c.params = {
            to: null,
            onShow: null,
            onHide: null,
            onDestroy: null
        }, c
    }), v("@view.layer", function (h) {
        var n, a = [".layer{position:absolute;z-index:50;user-select:none;}", ".layer .area{position:absolute;left:0;top:0;z-index:10;width:100%;height:100%;}", ".layer .mask{z-index:20;}", ".layer .marks_lb{left:2px;bottom:2px;}", ".layer .close{position:absolute;right:2px;top:2px;z-index:50;width:25px;height:25px;text-align:center;color:#fff;background:#000;background:rgba(0,0,0,0.5);border-radius:100%;cursor:pointer;transition:color .3s;}", ".layer .close:hover{color:#0d9bff;}", ".layer .close:after{content:'\\e616 ';font-size:120%;font-family:adfont;display:block;line-height:26px;}"].join("\n"),
            e = function (t) {
                n = n || h("<style>" + a + "</style>", "head");
                var e = this,
                    r = e.params = h.merge(o.params, t),
                    i = e.$el = h("<div class='layer " + ("string" == typeof r.cls ? r.cls.replace(/[\x3c\x3e]/g, "") : "") + "'></div>", r.to);
                e.html = function (t) {
                    var e = [];
                    "string" == typeof t && e.push(t), r.close && e.push("<div class='close' tap='close'></div>");
                    var n = [];
                    h.each(r.marks, function (t, e) {
                        "string" == typeof e && n.push("<span class='mark'>" + e + "</span>")
                    }), n.length && e.push("<div class='marks marks_lb'>" + n.join("") + "</div>"), i.html(e.join(""))
                }, e.adjust = function () {
                    ! function (t) {
                        var e = t.$el,
                            n = e.parent();
                        if (!(n.length <= 0)) {
                            var r = t.params,
                                i = r.x,
                                a = r.y,
                                o = parseFloat(r.width) || 0,
                                s = parseFloat(r.height) || 0,
                                c = n[0].offsetWidth,
                                u = n[0].offsetHeight,
                                l = parseFloat(r.relativeWidth),
                                f = parseFloat(r.relativeHeight);
                            0 < l == 0 || 0 < f == 0 ? (l = c, f = u) : l / f <= c / u ? c = l / f * u : u = f / l * c;
                            var p = {
                                x: i,
                                y: a,
                                width: o = o / l * c,
                                height: s = s / f * u,
                                viewWidth: c,
                                viewHeight: u,
                                relativeWidth: l,
                                relativeHeight: f
                            };
                            if (!1 !== h.trigger(r.onAdjust, self, p)) {
                                0 < p.width && (o = p.width), 0 < p.height && (s = p.height), p.x && (i = p.x), p.y && (a = p.y);
                                var d = {
                                    width: o + "px",
                                    height: s + "px"
                                };
                                /left/i.test(i) ? (d.left = 38 / 1334 * 100 + "%", d.right = "", d.marginLeft = 0) : /right/i.test(i) ? (d.left = "", d.right = 38 / 1334 * 100 + "%", d.marginLeft = 0) : /center|middle/i.test(i) ? (d.left = "50%", d.right = "", d.marginLeft = "-" + o / 2 + "px") : isNaN(i) || (d.left = "50%", d.right = "", d.marginLeft = i / l * c - c / 2 + "px"), /top/i.test(a) ? (d.top = 38 / 750 * 100 + "%", d.bottom = "", d.marginTop = 0) : /bottom/i.test(a) ? (d.top = "", d.bottom = 38 / 750 * 100 + "%", d.marginTop = 0) : /center|middle/i.test(a) ? (d.top = "50%", d.bottom = "", d.marginTop = "-" + s / 2 + "px") : isNaN(a) || (d.top = "50%", d.bottom = "", d.marginTop = a / f * u - u / 2 + "px"), e.css(d)
                            }
                        }
                    }(e)
                }, e.show = function () {
                    i.appendTo(r.to), e.adjust(), h.trigger(r.onShow, e)
                }, e.destroy = function () {
                    i.remove(), h.trigger(r.onDestroy, e)
                }, i.on("dragstart", function (t) {
                    t.preventDefault()
                }), I(i, {
                    click: function () {
                        h.trigger(r.onClick, e)
                    }, close: function () {
                        e.destroy(), h.trigger(r.onCloseClick, e)
                    }
                }), e.html(r.htmlContent), e.show()
            },
            o = function (t) {
                return new e(t)
            };
        return o.params = {
            to: null,
            close: !0,
            htmlContent: "",
            x: null,
            y: null,
            width: null,
            height: null,
            relativeWidth: null,
            relativeHeight: null,
            onAdjust: null,
            onShow: null,
            onDestroy: null,
            onClick: null,
            onCloseClick: null
        }, o.getADContent = function (t) {
            var e = [];
            switch (t.RST) {
            case "img":
                e.push("<img class='area' src='" + t.RS + "'/>");
                break;
            case "html":
                e.push("<iframe class='area' src='" + t.RS + "' scrolling='no' frameborder='0' allowtransparency='true' style='opacity:0;' onload='this.style.opacity=\"\";'></iframe>")
            }
            return e.length && t.CU && t.CU && e.push("<div class='area mask' style='cursor:pointer;' tap='click'></div>"), e
        }, o
    }), v("@view.cinema", function (T) {
        var D, C = [".cinema,.cinema .error{position:absolute;left:0;top:0;z-index:200;width:100%;height:100%;background:#000;user-select:none;}", ".cinema video{z-index:10;}", ".cinema .click{cursor:pointer;transition:color .3s;}", ".cinema .click:hover{color:#0d9bff;}", ".cinema .area{position:absolute;left:0;top:0;width:100%;height:100%;}", ".cinema .mask{z-index:40;}", ".cinema .mark{position:relative;display:inline-block;height:28px;line-height:28px;margin:0 0 0 5px;padding:0 12px;text-align:center;vertical-align:top;font-size:14px;color:#fff;background:#000;background:rgba(0,0,0,0.6);border-radius:14px;}", ".cinema .mark em{color:#FF5240;font-style:normal;padding:0 1px;}", ".cinema .mark *{display:inline-block;vertical-align:top;height:100%;}", ".cinema .mark .split{width:1px;height:7px;background:#B6B2A2;margin:0 5px;vertical-align:middle;}", ".cinema .marks{position:absolute;z-index:50;white-space:nowrap;text-align:center;}", ".cinema .marks_rt{right:12px;top:12px;}", ".cinema .marks_rb{right:12px;bottom:12px;}", ".cinema .marks_lb{left:12px;bottom:12px;z-index:30;}", ".cinema .marks_lb .mark{background:#ddd;background:rgba(255,255,255,.5);padding:0 6px;margin:0 5px 0 0;height:20px;line-height:20px;color:#333;text-align:center;border-radius:2px;}", ".cinema .more{background:linear-gradient(135deg,#00b7ff,#00d3ff);}", ".cinema .more a{color:#fff;}", ".cinema .iconbtn{width:28px;padding:0;font-family:adfont;}", ".cinema .iconbtn:after{font-size:20px;}", ".cinema .sound:after{content:'\\e61a ';}", ".cinema .sound.off:after{content:'\\e620 ';}", ".cinema .full{background:none;}", ".cinema .full:after{content:'\\e617 ';}", ".cinema .full.off:after{content:'\\e618 ';}", ".cinema .error{z-index:10;}", ".cinema .error_tip{position:absolute;left:0;top:50%;width:100%;height:160px;margin:-80px 0 0 0;text-align:center;}", ".cinema .error_tip h2{font-size:20px;color:#fff;margin:20px auto;line-height:1.4;padding:0 10px;}", ".cinema .error_tip h3{font-size:16px;color:#aaa;margin:10px auto;line-height:1.4;padding:0 10px;}", ".cinema.mini .marks_rt,.cinema.mini .marks_rb{display:none;}"].join("\n"),
            e = function (t) {
                var n, e, r, i = this,
                    a = this.params = T.merge(E.params, t),
                    o = i.$el = T("<div class='cinema'><div class='area mask' tap='click'></div><div class='marks marks_rt'><div class='mark'><span class='timer'></span><span class='skip' tap='skip'></span></div><div class='mark click vip' tap='vip'>\u4f1a\u5458\u53ef\u5173\u95ed\u5e7f\u544a</div></div><div class='marks marks_rb'><span class='mark more' style='display:none;' tap='click'>\u4e86\u89e3\u8be6\u60c5</span><span class='mark click iconbtn sound' tap='sound'></span><span class='mark click iconbtn full' tap='fullscreen'></span></div><div class='marks marks_lb'><span class='mark'>\u5e7f\u544a</span><span class='mark dspname' style='display:none;'></span></div></div>"),
                    s = T(".timer", o),
                    c = T(".skip", o),
                    u = T(".sound", o),
                    l = T(".full", o),
                    f = T(".dspname", o),
                    p = T(".more", o),
                    d = T(".mask", o),
                    h = T(".vip", o),
                    m = [],
                    g = null,
                    v = 0,
                    y = !1,
                    w = T("!view.cinemaErrorLayer", {
                        to: o,
                        onTimeUpdate: function (t) {
                            b(t), t <= 0 && i.destroy()
                        }
                    }),
                    b = function (t) {
                        s.html(120 < t ? "<em>" + parseInt(t / 60) + "</em><span>\u5206</span><em>" + t % 60 + "</em><span>\u79d2</span>" : "<em>" + t + "</em><span>\u79d2</span>");
                        var e = m[g];
                        if (e) {
                            var n = e.skip;
                            if (!e.allowSkip && n) {
                                var r = n.delay - (v - t);
                                r <= 0 && (e.allowSkip = !0), c.html("<span class='split'></span>" + (e.allowSkip ? "<span class='click'>" + (n.txt2 || "\u5173\u95ed\u5e7f\u544a") + "</span>" : (n.txt1 || "|\u79d2\u540e\u53ef\u5173\u95ed\u5e7f\u544a").replace(/([^|]+)|(\|+)/g, function (t, e, n) {
                                    return n ? "<em>" + r + "</em>" : "<span>" + e + "</span>"
                                })))
                            }
                        }
                    },
                    k = function (t) {
                        l.cls("off", !!t)
                    },
                    _ = function (t) {
                        n !== (t = !!t) && (n = t, u.cls("off", n), A("adsdk_muted", !!n && 1), r && r.updateMuted(n))
                    },
                    x = function (t, e) {
                        var n = e._item || {};
                        if (n.data) return T.trigger(a[t], e, n.data, n.index)
                    },
                    S = function () {
                        i.pause(), v = 0, m = [], g = null, w.hide(), r && r.clear()
                    };
                i.destroy = function () {
                    S(), o.parent().length && (o.remove(), T.trigger(a.onDestroy, i))
                }, i.play = function () {
                    w.visible ? w.start() : r && r.play()
                }, i.pause = function () {
                    w.visible ? w.pause() : r && r.pause()
                }, i.muted = function (t) {
                    _(t)
                }, i.fullscreen = function (t) {
                    k(t), i.adjust()
                }, i.adjust = function () {
                    clearTimeout(e), e = setTimeout(function () {
                        var t = o[0].offsetWidth < 500;
                        y !== t && (y = t, o.cls("mini", y))
                    }, 300)
                }, i.show = function (t) {
                    S();
                    var e = [];
                    t && (T.isArray(t) ? e = t : T.isArray(t.items) && (e = t.items), T.each(e, function (t, e) {
                        e && (e.index = m.length, e._start = v, v += e.time, m.push(e))
                    })), m.length ? (D || (D = T("<style>" + C + "</style>", "head")), _(A("adsdk_muted")), o.appendTo(a.to), i.adjust(), T.trigger(a.onShow, i), b(v), r = T("!view.cinemaQueuePlayer", {
                        to: o,
                        muted: n,
                        items: m,
                        autoplay: a.autoplay,
                        mutedUpdate: function (t, e) {
                            t.volume = e ? 0 : 1, t.muted = !!e
                        }, tryPlay: function (t, e) {
                            t.muted = e;
                            var n = t.play();
                            n ? n.catch(function () {
                                e || (t.muted = !0, t.play().catch(function () {}))
                            }) : t.paused && !e && (t.muted = !0, t.play())
                        }, onItemStart: function (t, e, n) {
                            x("onItemStart", t), g = n, w.hide(), u.css("display", "").cls("off", t.muted), c.css("display", e.skip ? "" : "none"), f.css("display", e.dspname ? "" : "none").html(e.dspname || ""), e.link ? (d.css("cursor", "pointer"), p.css({
                                display: "",
                                cursor: "pointer"
                            })) : (d.css("cursor", ""), p.css({
                                display: "none",
                                cursor: ""
                            }))
                        }, onItemEnd: function (t) {
                            x("onItemEnd", t)
                        }, onItemPause: function (t) {
                            x("onItemPause", t)
                        }, onItemError: function (t) {
                            x("onItemError", t)
                        }, onItemTimeUpdate: function (t, e) {
                            b(e), x("onItemTimeUpdate", t)
                        }, onAllError: function () {
                            u.css("display", "none"), w.show(a.autoplay ? v : null)
                        }, onAllEnd: function () {
                            i.destroy()
                        }, onMutedChange: function (t, e) {
                            _(e)
                        }
                    })) : (i.destroy(), T.trigger(a.onEmpty, i))
                }, o.on("dragstart", function (t) {
                    t.preventDefault()
                }), I(o, {
                    click: function () {
                        if (w.visible) w.start();
                        else if (r) {
                            var t = r.getPlayingVideo();
                            t ? x("onItemClick", t) : r.play()
                        }
                    }, skip: function () {
                        if (r) {
                            var t = r.getPlayingVideo();
                            t && t._item.allowSkip && (x("onItemSkip", t), i.destroy())
                        }
                    }, sound: function () {
                        _(!n)
                    }, fullscreen: function () {
                        T.trigger(a.onFullClick, i)
                    }, vip: function () {
                        T.trigger(a.onVipClick, i)
                    }
                }), k(a.fullscreen), i.show(a.data), h[0].className += " youku_vip_pay_btn"
            },
            E = function (t) {
                return new e(t)
            };
        return E.params = {
            to: null,
            data: null,
            autoplay: !0,
            fullscreen: !1,
            onShow: null,
            onEmpty: null,
            onDestroy: null,
            onVipClick: null,
            onFullClick: null,
            onItemClick: null,
            onItemSkip: null,
            onItemEnd: null,
            onItemStart: null,
            onItemPause: null,
            onItemError: null,
            onItemPlayFail: null,
            onItemTimeUpdate: null
        }, E
    }), v("@view.cinemaErrorLayer", function (u) {
        var e = function (e) {
            var n, t, r, i = this,
                a = function () {
                    clearTimeout(t)
                },
                o = function (t) {
                    a(), 0 <= t && (r = t), 0 < r && s()
                },
                s = function () {
                    u.trigger(e.onTimeUpdate, this, r), 0 < r ? t = setTimeout(function () {
                        r--, s()
                    }, 1e3) : c()
                },
                c = function () {
                    i.visible && (i.visible = 0, a(), n.remove())
                };
            this.show = function (t) {
                i.visible || (i.visible = 1, n || (n = u("<div class='error'><div class='error_tip'><h2>\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25\uff0c\u89c6\u9891\u7a0d\u540e\u53ef\u6b63\u5e38\u89c2\u770b</h2><h3>\u51fa\u73b0\u6b64\u79cd\u60c5\u51b5\uff0c\u8bf7\u4f18\u5148\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u72b6\u6001</h3><h3>\u5982\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u88c5\u4e86\u5e7f\u544a\u63d2\u4ef6\uff0c\u5378\u8f7d\u6216\u5173\u95ed\u540e\u53ef\u6062\u590d\u6b63\u5e38\u89c2\u770b\u72b6\u6001</h3></div></div>")), n.appendTo(e.to)), o(t)
            }, this.hide = c, this.start = o, this.pause = a
        };
        return function (t) {
            return new e(t)
        }
    }), v("@view.cinemaQueuePlayer", function (b) {
        var e = function (i) {
            var a, o, s, c = this,
                u = 0,
                l = null,
                f = i.items,
                p = !!i.muted,
                d = function (t, e) {
                    o && b.trigger(i[t], c, o[0], f[e], e)
                },
                h = function (t) {
                    t._error || (t._error = 1, m(), d("onItemError", l), w())
                },
                m = function () {
                    var t = a;
                    t && (a = null, t.css({
                        transition: "opacity .3s",
                        opacity: 0
                    }), setTimeout(function () {
                        t.remove()
                    }, 300))
                },
                g = {
                    timeupdate: function () {
                        var t = this.currentTime;
                        if (0 < t && !this._end) {
                            var e = this.duration,
                                n = this._item;
                            if (e <= n.time - 1) h(n);
                            else {
                                this._start || (this._start = !0, delete n._error, m(), d("onItemStart", l));
                                var r = Math.min(Math.round(t), n.time);
                                this._currentTime !== r && (this._currentTime = r, v(this), b.trigger(i.onItemTimeUpdate, c, this, u - r)), 0 < e && e - .3 <= t && (this._end = 1, d("onItemEnd", l), w())
                            }
                        }
                    }, pause: function () {
                        !this._end && d("onItemPause", l)
                    }, ended: function () {
                        this._end || (this._end = 1, d("onItemEnd", l), w())
                    }, volumechange: function () {
                        var t = !0 === this.muted || 0 === this.volume;
                        p !== t && (p = t, b.trigger(i.onMutedChange, c, this, p))
                    }, error: function () {
                        h(this._item)
                    }
                },
                v = function (n) {
                    var t = n._skipRange;
                    if (t) {
                        var r = parseInt(n.currentTime);
                        b.each(t, function (t, e) {
                            if (!e.skip && r >= e.start && r <= e.end) return e.skip = 1, (r = e.end + 1) >= n.duration ? w() : n.currentTime = r, !1
                        })
                    }
                },
                y = function (t) {
                    if (t) {
                        var e = t.src,
                            n = b("<video preload='auto' class='area' style='display:none;'></video>", i.to),
                            r = n[0];
                        return r._item = t, r.src = e, n
                    }
                },
                w = function () {
                    var t = f.length;
                    if (0 < t) {
                        (a = o) && a.off(g).css("zIndex", 20), u = 0;
                        var e = f[l = null == l ? 0 : l + 1];
                        if (e) {
                            for (var n = t - 1; l <= n; n--) u += f[n].time;
                            (o = s || y(e)).css("display", "").on(g), s = y(f[l + 1]), (0 < l || i.autoplay) && b.trigger(i.tryPlay, c, o[0], p)
                        } else {
                            o = l = null;
                            var r = 0;
                            b.each(f, function (t, e) {
                                e._error && r++
                            }), b.trigger(t <= r ? i.onAllError : i.onAllEnd, c)
                        }
                    }
                };
            c.updateMuted = function (t) {
                o && b.trigger(i.mutedUpdate, c, o[0], t)
            }, c.getPlayingVideo = function () {
                if (o && !o[0].paused) return o[0]
            }, c.clear = function () {
                f = [], u = 0, l = null, o && (o.off(g), !o[0].paused && o[0].pause(), o.remove(), o = null), a && (a.remove(), a = null), s && (s.remove(), s = null)
            }, c.pause = function () {
                o && !o[0].paused && o[0].pause()
            }, c.play = function () {
                o && o[0].paused && (o[0].src = o[0].src, o[0].play())
            }, w()
        };
        return function (t) {
            return new e(t)
        }
    }), v("@ad.corner", function (_, x, r) {
        var S, T = [".layer.corner .close{width:15px;height:15px;}", ".layer.corner .close:after{line-height:16px;font-size:11px;}", ".layer.corner .marks{left:2px;bottom:2px;}"].join("\n"),
            n = function (m, t) {
                var g, v = this,
                    y = v.params = _.merge(e.params, t),
                    w = null,
                    b = 0,
                    n = [],
                    k = 0;
                v.show = function (t, e) {
                    if (v.destroy(), t && t.RS && /^(html|img)$/.test(t.RST)) {
                        if (!1 === _.trigger(y.onShowBefore, v, {
                            data: t,
                            dot: e
                        })) return;
                        S = S || _("<style>" + T + "</style>", "head");
                        var n = !1,
                            r = ["\u5e7f\u544a"],
                            i = parseInt(t.AL);
                        i = 0 < i ? i : 0;
                        var a, o, s, c, u, l, f = x.getADContent(t);
                        35 != t.EF && ("html" == t.RST && /^[12]$/.test(t.CF) || "img" == t.RST) && (n = !0, t.DSPNAME && r.push(t.DSPNAME));
                        var p = t.LOT || {};
                        if (440 == p.WIDTH || 1 != t.CF) {
                            s = t.W, c = t.H, l = u = 0;
                            var d, h = t.LOC + "";
                            a = (d = h.match(/LEFT|RIGHT|CENTER/i)) ? d[0] : "RIGHT", o = (d = h.match(/TOP|BOTTOM|MIDDLE/i)) ? d[0] : "BOTTOM"
                        } else a = p.X, o = p.Y, s = p.WIDTH, c = p.HEIGHT, u = p.INITWIDTH || 1334, l = p.INITHEIGHT || 750;
                        x({
                            to: m._container,
                            htmlContent: f.join(""),
                            cls: "corner",
                            close: n,
                            marks: r,
                            x: a,
                            y: o,
                            width: s,
                            height: c,
                            relativeWidth: u,
                            relativeHeight: l,
                            onCloseClick: function () {
                                k = 1, D(((t.EM || {}).CLOSE || {}).IMP)
                            }, onClick: function () {
                                t.CU && (D(t.CUM), window.open(t.CU))
                            }, onShow: function () {
                                b = 1, w = {
                                    view: this,
                                    data: t,
                                    dot: e
                                }, D(t.SUS), _.trigger(y.onShow, v, w), g = setTimeout(function () {
                                    v.destroy()
                                }, 1e3 * i)
                            }, onDestroy: function () {
                                b = 0, clearTimeout(g), D(t.SUE), _.trigger(y.onDestroy, v, w), w = null
                            }
                        })
                    }
                }, v.checkDots = function () {
                    var t = m.getDuration(),
                        e = n[0];
                    e && e.time <= t && (w || !1 === _.trigger(y.onLoadBefore, v) || (b = -1, r(m, y.requestURL, [{
                        p: 5,
                        ps: e._ps,
                        vt: t,
                        ft: m.getCurrentTime(),
                        closed: k
                    }, "pw,ph"], function (t) {
                        -1 === b && v.show(t.VAL[0], e)
                    })), n.shift())
                }, v.init = function () {
                    k = 0, r(m, y.requestURL, [{
                        p: 5,
                        ps: -1,
                        vt: 0,
                        ft: 0,
                        closed: 0
                    }, "pw,ph"], function (t) {
                        n = [], _.each(t.ATS, function (t, e) {
                            0 <= e && n.push({
                                time: e,
                                _ps: t
                            })
                        })
                    })
                }, v.resize = function () {
                    w && w.view.adjust()
                }, v.destroy = function () {
                    w && w.view.destroy()
                }, v.checkCurrent = function (t) {
                    if (w && _.isFunction(t)) return t(w)
                }
            },
            e = function (t, e) {
                return new n(t, e)
            };
        return e.params = {
            requestURL: "//valc.atm.youku.com/vc",
            onLoadBefore: null,
            onShowBefore: null,
            onShow: null,
            onDestroy: null
        }, e
    }, "view.layer,request.get"), v("@ad.pause", function (s, c, u) {
        var l, f = [".layer.pause{z-index:100;background:#fff url(//gw.alicdn.com/tfs/TB1ZjLDvOMnBKNjSZFoXXbOSFXa-80-54.png) no-repeat center;}", ".layer.pause .shadow{cursor:pointer;position:absolute;bottom:0;left:0;z-index:20;width:100%;height:80px;background-image:linear-gradient(-180deg,rgba(0,0,0,0.00) 2%,rgba(0,0,0,0.60) 99%);}", ".layer.pause .hint{position: absolute; width: 134px; height: 38px; left: 6px; bottom: 8px; z-index: 30;}", ".layer.pause .hint_img{float:left;width:38px;height:38px;background:url(//r1.ykimg.com/material/0A03/AD_guoqiang/20180326/PCClick_S.png) no-repeat center center;}", ".layer.pause .hint_txt{float:right;width:96px;height:38px;line-height:38px;font-family:'\u5fae\u8f6f\u96c5\u9ed1';font-size:16px;color:#fff;text-shadow: 0 2px 8px rgba(0,0,0,0.50); }", ".layer.pause .marks{left:2px;bottom:2px;}"].join("\n"),
            n = function (r, t) {
                var i = this,
                    a = i.params = s.merge(p.params, t),
                    o = null,
                    e = 0,
                    n = 0;
                i.show = function (t) {
                    if (i.destroy(), t && t.RS) {
                        if (!1 === s.trigger(a.onShowBefore, i, {
                            data: t
                        })) return;
                        l = l || s("<style>" + f + "</style>", "head");
                        var e = [],
                            n = c.getADContent(t);
                        t.SHOWID && 159 == t.EF ? n.push("<div class='shadow'></div><div class='hint'><div class='hint_img'></div><div class='hint_txt'>\u7acb\u5373\u524d\u5f80\u89c2\u770b</div></div>") : (e = ["\u5e7f\u544a"], t.DSPNAME && e.push(t.DSPNAME)), c({
                            to: r._container,
                            x: "CENTER",
                            y: "MIDDLE",
                            width: t.W,
                            height: t.H,
                            cls: "pause",
                            close: !0,
                            marks: e,
                            htmlContent: n.join(""),
                            onAdjust: function (t) {
                                var e = Math.min(.5 * t.viewWidth, 400),
                                    n = e * t.height / t.width;
                                n > .8 * t.viewHeight && (e = (n = .8 * t.viewHeight) * t.width / t.height), t.width = e, t.height = n
                            }, onCloseClick: function () {
                                D(((t.EM || {}).CLOSE || {}).IMP)
                            }, onClick: function () {
                                t.CU && (D(t.CUM), window.open(t.CU))
                            }, onShow: function () {
                                o = {
                                    data: t,
                                    view: this
                                }, D(t.SUS), s.trigger(a.onShow, i, o)
                            }, onDestroy: function () {
                                D(t.SUE), s.trigger(a.onDestroy, i, o), o = null
                            }
                        })
                    }
                }, i.get = function () {
                    !(e = 1) !== s.trigger(a.onLoadBefore, i) && 0 === n && (n = 1, u(r, a.requestURL, [{
                        p: 4
                    }, "pw,ph"], function (t) {
                        n = 0, 1 === e && i.show(t.VAL[0])
                    }))
                }, i.destroy = function () {
                    e = 0, o && o.view.destroy()
                }, i.resize = function () {
                    o && o.view.adjust()
                }, i.checkCurrent = function (t) {
                    if (o && s.isFunction(t)) return t(o)
                }
            },
            p = function (t, e) {
                return new n(t, e)
            };
        return p.params = {
            requestURL: "//valp.atm.youku.com/vp",
            onLoadBefore: null,
            onShowBefore: null,
            onShow: null,
            onDestroy: null
        }, p
    }, "view.layer,request.get"), v("@ad.scene", function (d, h, a, e) {
        var m, g = [".layer.scene .close{width:15px;height:15px;}", ".layer.scene .close:after{line-height:16px;font-size:11px;}", ".layer.scene .marks{left:2px;bottom:2px;}"].join("\n"),
            n = function (l, t) {
                var f = this,
                    p = f.params = d.merge(r.params, t),
                    i = [],
                    o = function (e, n) {
                        e._loading || "_data" in e || /^(0|103|104)$/.test(e.type) && (e._loading = 1, a(l, p.scRequestURL, {
                            vt: l.getDuration(),
                            rs: e.ResourceType,
                            ps: e._ps,
                            pt: e.KFTS[0],
                            ft: e.KFTS[0],
                            sc: e.CSCENE[e.CSCENE.length - 1] || "",
                            gd: e.CPRODUCT.join("|")
                        }, function (t) {
                            delete e._loading, e._data = t.VAL[0], d.isFunction(n) && n(e._data)
                        }))
                    };
                f.stash = function () {
                    d.each(i, function (t, e) {
                        var n = e._view;
                        n && (n.$el.css("display", "none"), n._stopVideoTime = l.getActCurrentTime())
                    })
                }, f.recover = function () {
                    d.each(i, function (t, e) {
                        var n = e._view;
                        n && (n.$el.css("display", ""), n._endVideoTime = n._endVideoTime - n._stopVideoTime, delete n._stopVideoTime)
                    })
                }, f.show = function (n) {
                    var r = n && n._data;
                    if (r && /^https?:\/\/.+/.test(r.RS) && /^(html|img)$/.test(r.RST) && !1 !== d.trigger(p.onShowBefore, f, {
                        data: r,
                        dot: n
                    })) {
                        m = m || d("<style>" + g + "</style>", "head");
                        var t = r.LOT || {},
                            e = parseFloat(t.X || n.X),
                            i = parseFloat(t.Y || n.Y),
                            a = parseFloat(t.WIDTH || r.W || n.WIDTH),
                            o = parseFloat(t.HEIGHT || r.H || n.HEIGHT),
                            s = parseFloat(t.INITWIDTH || n.initWidth || 860),
                            c = parseFloat(t.INITHEIGHT || n.initHeight || 483),
                            u = [];
                        1 != n.type && u.push("\u5e7f\u544a"), r.DSPNAME && u.push(r.DSPNAME), h({
                            to: l._container,
                            htmlContent: h.getADContent(r).join(""),
                            cls: "scene",
                            close: 103 === n.type,
                            marks: u,
                            x: e,
                            y: i,
                            width: a,
                            height: o,
                            relativeWidth: s,
                            relativeHeight: c,
                            onCloseClick: function () {
                                D(((r.EM || {}).CLOSE || {}).IMP)
                            }, onClick: function () {
                                r.CU && (D(r.CUM), window.open(r.CU))
                            }, onShow: function () {
                                var t = n._view = this,
                                    e = 0;
                                e = 0 < n.DURATION ? parseFloat(n.DURATION) : 0 < r.AL ? parseFloat(r.AL) : r.KFTS[1] - r.KFTS[0], t._duration = e, t._startVideoTime = l.getActCurrentTime(), t._endVideoTime = t._startVideoTime + e, D(r.SUS), d.trigger(p.onShow, f, {
                                    data: r,
                                    dot: n
                                })
                            }, onDestroy: function () {
                                n._view === this && delete n._view, D(r.SUE), d.trigger(p.onDestroy, f, {
                                    data: r,
                                    dot: n
                                })
                            }
                        })
                    }
                }, f.checkDots = function () {
                    var a = l.getActCurrentTime();
                    d.each(i, function (t, e) {
                        var n, r, i;
                        e._view ? (n = e) && (i = n._view) && !i._stopVideoTime && (r || (r = l.getActCurrentTime()), (r < i._startVideoTime || r > i._endVideoTime) && (clearTimeout(i._reTimeout), i.destroy())) : a >= e.KFTS[0] && a <= e.KFTS[1] ? e._enter || !1 === d.trigger(p.onLoadBefore, f, e) || (e._enter = 1, 8 === e.type ? D(e.IMP) : "_data" in e ? f.show(e) : o(e, function () {
                            f.show(e)
                        }), T(e, "\u8fdb\u5165\u573a\u666f\u70b9\u4f4d", "#ffb600")) : (delete e._enter, a >= e.KFTS[0] - 5 && a < e.KFTS[0] && o(e))
                    })
                }, f.init = function () {
                    e(l, function (t) {
                        i = [];
                        var e = 0,
                            r = {};
                        d.each(t, function (t, n) {
                            n && n.KFTS && 0 <= n.KFTS[0] && n.KFTS[1] > n.KFTS[0] && (i.push(n), n._ps = t, d.isArray(n.CPRODUCT) || (n.CPRODUCT = []), d.isArray(n.CSCENE) || (n.CSCENE = []), 1 == n.type && (e = 1, n._data = null, d.each(n.CSCENE, function (t, e) {
                                r[e] = n
                            })))
                        }), e && a(l, p.vsRequestURL, {
                            p: 24,
                            gd: ""
                        }, function (t) {
                            d.each(t.VAL, function (t, e) {
                                e && r[e.SC] && (e.CU = "", r[e.SC]._data = e)
                            })
                        }), i.length && T(function () {
                            var n = [],
                                r = {
                                    0: "\u538b\u5c4f\u6761",
                                    1: "\u81ea\u5b9a\u4e49\u6d6e\u5c42",
                                    8: "\u8f6f\u5e7f\u6253\u70b9",
                                    103: "\u89d2\u6807",
                                    104: "\u4e0b\u538b\u6d6e\u5c42"
                                };
                            return d.each(i, function (t, e) {
                                n.push(y(e.KFTS[0]) + " - " + y(e.KFTS[1]) + " - type=" + e.type + "(" + (r[e.type] || "\u672a\u77e5") + ")")
                            }), "\n" + n.sort().join("\n")
                        }, "\u573a\u666f\u70b9\u4f4d", "#ffb600")
                    })
                }, f.resize = function () {
                    d.each(i, function (t, e) {
                        e._view && e._view.adjust()
                    })
                }, f.destroy = function () {
                    d.each(i, function (t, e) {
                        e._view && e._view.destroy()
                    })
                }, f.checkCurrent = function (t) {
                    if (d.isFunction(t)) {
                        var n = {};
                        return d.each(i, function (t, e) {
                            e._view && (n[e.type] = e)
                        }), t(n)
                    }
                }
            },
            r = function (t, e) {
                return new n(t, e)
            };
        return r.params = {
            scRequestURL: "//vals.atm.youku.com/sc",
            vsRequestURL: "//vals.atm.youku.com/vs",
            onLoadBefore: null,
            onShowBefore: null,
            onShow: null,
            onDestroy: null
        }, r
    }, "view.layer,request.get,request.dot"), v("@ad.film", function (d, h, e, n) {
        var r, i = function () {
                if (r) {
                    var t = r.$el;
                    r = null, t.css("transform", "translate3d(0,-100%,0)"), setTimeout(function () {
                        t.remove()
                    }, 500)
                }
            },
            m = function (t) {
                if (t && t.BRS) {
                    if (r && r.data.BRS === t.BRS) return;
                    i(), (r = {
                        data: t,
                        $el: d("<" + (t.CU ? "a href='" + t.CU + "' target='_blank'" : "div") + " style='position:absolute;left:0;top:0;z-index:999;width:100%;height:100%;overflow:hidden;transform:translate3d(0,100%,0);transition:transform .5s;'><div style='position:absolute;left:50%;top:0;width:400%;height:100%;margin:0 0 0 -200%;text-align: center;'><img src='" + t.BRS + "' style='width:auto;height:100%;margin:0 auto;border:0;'/></div></" + (t.CU ? "a" : "div") + ">", "#right-title-ad-banner")
                    }).$el[0].offsetWidth, r.$el.css("transform", "translate3d(0,0,0)"), T(t, "\u5c55\u73b0\u4e92\u52a8\u5e7f\u544a", "#ffb600")
                } else i()
            },
            a = function (a, t) {
                var o = this,
                    s = null,
                    c = 0,
                    u = o.params = d.merge(g.params, t),
                    i = [],
                    l = e(),
                    f = function (t) {
                        var a = [],
                            o = [],
                            s = 0;
                        if (t) {
                            if (t._items) return t;
                            d.eachArray(t.VAL, function (t, e) {
                                if ("video" === e.RST) {
                                    var n = {
                                            src: e.RS,
                                            link: e.CU,
                                            dspname: e.DSPNAME,
                                            time: parseInt(e.AL) || 0,
                                            data: e
                                        },
                                        r = (e.EM || {}).SKIP;
                                    if (r) {
                                        var i = parseInt(r.T);
                                        n.skip = {
                                            txt1: r.TX1 || "|\u79d2\u540e\u53ef\u5173\u95ed\u5e7f\u544a",
                                            txt2: r.TX2 || "\u5173\u95ed\u5e7f\u544a",
                                            delay: 0 < i ? i : 0
                                        }
                                    }
                                    e.BRS && s++, o.push({
                                        F1: e.BRS,
                                        CU: e.CU
                                    }), a.push(n)
                                }
                            })
                        } else t = {};
                        return t._pipCount = s, t._pipList = o, t._items = a, t
                    },
                    r = function (t, e) {
                        n(a, u.requestURL, [{
                                p: 3,
                                rst: "mp4"
                            },
                            u.requestData, t
                        ], function (t) {
                            d.isFunction(e) && e(t)
                        })
                    },
                    p = function (e, n) {
                        e._loading || (e._loding = 1, r({
                            ps: e._ps,
                            pt: e.start
                        }, function (t) {
                            e._loding = 0, e._data = t, d.isFunction(n) && n(e._data)
                        }))
                    };
                o.show = function (t, e) {
                    o.destroy();
                    var n = f(t),
                        r = n._items,
                        i = r.length;
                    if (i) {
                        if (!1 === d.trigger(u.onShowBefore, o, {
                            data: r,
                            dot: e
                        })) return;
                        h({
                            to: a._container,
                            data: {
                                items: r
                            },
                            autoplay: u.autoplay,
                            fullscreen: a.getFullState(),
                            onItemClick: function (t) {
                                t.CU && (D(t.CUM), window.open(t.CU))
                            }, onItemSkip: function (t) {
                                D((((t || {}).EM || {}).SKIP || {}).IMP)
                            }, onItemPlayFail: function (t, e) {
                                w(a, !1), d.trigger(u.onItemPlayFail, o, t, e)
                            }, onItemStart: function (t, e) {
                                D(t.SUS), w(a, !1), a.callPlayer("adMessage", "indexChange", {
                                    type: u.type,
                                    data: t,
                                    index: e,
                                    totalCount: i,
                                    pipList: n._pipList,
                                    pipCount: n._pipCount
                                }), m(t), d.trigger(u.onItemStart, o, t, e)
                            }, onItemPause: function (t, e) {
                                d.trigger(u.onItemPause, o, t, e)
                            }, onItemEnd: function (t) {
                                D(t.SUE)
                            }, onItemTimeUpdate: function (t) {
                                var n = this._currentTime,
                                    r = [];
                                d.each(t.SU, function (t, e) {
                                    e._sent || e.T != n || (e._sent = 1, r.push(e))
                                }), r.length && D(r)
                            }, onItemError: function (t) {
                                ! function (t) {
                                    var e = "/mmyk.yksdk.fail",
                                        n = ["type=" + (t.type || ""), "reqid=" + (t.reqid || ""), "ie=" + (t.ie || "")],
                                        r = function () {
                                            (new Image).src = "//gm.mmstat.com" + e + "?" + n.concat(["cna=" + (v.cookie("cna") || ""), "t=" + 1 * new Date]).join("&")
                                        };
                                    if (window.goldlog) try {
                                        window.goldlog.record(e, "EXP", n.join("&"), "GET")
                                    } catch (t) {
                                        r()
                                    } else r()
                                }({
                                    type: u.type,
                                    reqid: t.REQID || "",
                                    ie: t.IE
                                })
                            }, onFullClick: function () {
                                a.getFullState() ? (a.callPlayer("exitFullscreen"), this.fullscreen(!1)) : (a.callPlayer("fullScreen"), this.fullscreen(!0))
                            }, onShow: function () {
                                c = 1, s = {
                                    view: this,
                                    data: r,
                                    dot: e
                                }, u.autoplay && w(a, !0), b(!1), a.callPlayer("adFreeze", {
                                    type: u.type,
                                    data: {
                                        totalAdCount: i
                                    }
                                }), d.trigger(u.onShow, o, s)
                            }, onDestroy: function () {
                                c = 0, w(a, !1), a.callPlayer("adThaw", {
                                    type: u.type,
                                    data: {
                                        totalAdCount: i
                                    }
                                }), m(null), d.trigger(u.onDestroy, o, s), s = null
                            }
                        })
                    } else a.callPlayer("adThaw", {
                        type: u.type,
                        data: {
                            totalAdCount: 0
                        }
                    })
                }, o.play = function () {
                    s && s.view.play()
                }, o.pause = function () {
                    s && s.view.pause()
                }, o.muted = function (t) {
                    s && s.view.muted(t)
                }, o.fullscreen = function (t) {
                    s && s.view.fullscreen(t)
                }, o.get = function (t) {
                    r(t, function (t) {
                        o.show(t)
                    })
                }, o.checkDots = function () {
                    if (!s) {
                        var r = a.getCurrentTime();
                        d.each(i, function (t, e) {
                            if (!e._showed) {
                                var n = parseInt(e.start / 1e3);
                                if (n <= r && r <= n + 30) return T(e, "\u8fdb\u5165\u4e2d\u63d2\u70b9\u4f4d", "#ffb600"), (!a._filmLastDate || 1 * a._filmLastDate + 18e4 < new Date) && !1 !== d.trigger(u.onLoadBefore, o) && ("_data" in e ? (e._showed = 1, o.show(e._data, e)) : (c = -1, p(e, function (t) {
                                    -1 === c && (e._showed = 1, o.show(t, e))
                                }))), !1;
                                if (n - 10 <= r && r < n - 2 && "_data" in e) return f(e._data)._items.length && !e._toast && (!a._filmLastDate || 1 * a._filmLastDate + 18e4 < 1 * new Date + 1e3 * (n - r)) && (e._toast = 1, l.show(n - r + "\u79d2\u540e\u8fdb\u5165\u5e7f\u544a\u64ad\u653e", a._container), l.hide(3e3), b(!0)), !1;
                                if (n - 60 <= r && r < n && !("_data" in e)) return T(e, "\u4e2d\u63d2\u9884\u8bf7\u6c42", "#ffb600"), p(e), !1
                            }
                        })
                    }
                }, o.init = function (t) {
                    i = [], d.each(t, function (t, e) {
                        e && 0 < e.start && (e._ps = t, i.push(e))
                    }), i.length && T(function () {
                        var n = [];
                        return d.each(i, function (t, e) {
                            n.push(y(parseInt(e.start / 1e3)))
                        }), "\n" + n.sort().join("\n")
                    }, "\u4e2d\u63d2\u70b9\u4f4d", "#ffb600")
                }, o.resize = function () {
                    s && s.view.adjust()
                }, o.destroy = function () {
                    s && s.view.destroy(), l.destroy()
                }, o.checkCurrent = function (t) {
                    if (s && d.isFunction(t)) return t(s)
                }
            },
            g = function (t, e) {
                return new a(t, e)
            };
        return g.params = {
            type: "",
            autoplay: !0,
            requestURL: "",
            requestData: null,
            onItemStart: null,
            onItemPause: null,
            onItemPlayFail: null,
            onLoadBefore: null,
            onShow: null,
            onDestroy: null
        }, g
    }, "view.cinema,view.toast,request.get"), v("@ad.stream", function (u) {
        var n = function (i, t) {
                var a = this,
                    o = a.params = u.merge(r.params, t),
                    s = null,
                    c = [],
                    e = function () {
                        s && (u.trigger(o.onDestroy, a, s), i.callPlayer("adMessage", "cutStartend", {
                            index: s.dot._ps,
                            data: s.dot
                        }), s = null)
                    };
                a.checkDots = function () {
                    var r = i.getCurrentTime();
                    if (s) {
                        var t = s.dot;
                        if (r >= t._start && r < t._end) return;
                        r >= t._end && r < t._end + 2 && (t._sentEnd || (t._sentEnd = 1, D(t.SUE))), e()
                    }
                    u.each(c, function (t, e) {
                        if (r >= e._start && r < e._end) return s = {
                            dot: n = e
                        }, n._sentStart || (n._sentStart = 1, D(n.SUS)), u.trigger(o.onShow, a, s), i.callPlayer("adMessage", "cutStartplay", {
                            index: n._ps,
                            data: n
                        }), !1;
                        var n
                    })
                }, a.init = function (t) {
                    var n, r, i = 0,
                        a = {};
                    c = [], u.each(t, function (t, e) {
                        e && 0 < (r = parseInt(e.AL)) && e.DOT && 0 <= (n = parseInt(e.DOT.STA)) && (a[n] = a[n] || {
                            before: i,
                            time: 0
                        }, e._start = a[n].before + a[n].time + n, e._end = e._start + r, e._ps = t, c.push(e), a[n].time += r, i += r)
                    })
                }, a.destroy = e, a.checkCurrent = function (t) {
                    if (s && u.isFunction(t)) return t(s)
                }
            },
            r = function (t, e) {
                return new n(t, e)
            };
        return r.params = {
            onShow: null,
            onDestroy: null
        }, r
    }), v(function (x) {
        window.ykSDK = window.adPlayerSDK = function (d) {
            var e, c, u, l, n, a, o, h = this,
                f = 0,
                s = "",
                p = 0,
                m = {},
                g = {
                    "\u672a\u77e5": 0,
                    "\u672a\u4f20": 1,
                    "\u6b63\u7247": 2,
                    "\u9884\u544a\u7247": 3,
                    "\u82b1\u7d6e": 4,
                    "\u666e\u901a\u89c6\u9891": 5,
                    "\u8d44\u8baf": 6,
                    MV: 7,
                    "\u9996\u6620\u5f0f": 8,
                    "\u4f2a\u6b63\u7247": 9
                },
                v = [h.AD_FRONT = x("!ad.film", h, {
                    type: "frontad",
                    autoplay: !0,
                    requestURL: "//valf.atm.youku.com/vf",
                    requestData: {
                        p: 1
                    },
                    onItemPlayFail: function () {
                        h.callPlayer("adMessage", "abort")
                    }, onDestroy: function () {
                        h._filmLastDate = new Date
                    }
                }), h.AD_MIDDLE = x("!ad.film", h, {
                    type: "contentad",
                    requestURL: "//valo.atm.youku.com/vo",
                    requestData: {
                        p: 3,
                        tict: 0
                    },
                    onDestroy: function () {
                        h._filmLastDate = new Date
                    }
                }), h.AD_BEHIND = x("!ad.film", h, {
                    type: "endad",
                    requestURL: "//valb.atm.youku.com/vb",
                    requestData: {
                        p: 2,
                        tict: 0
                    }
                }), h.AD_SCENE = x("!ad.scene", h, {
                    onLoadBefore: function (t) {
                        if (0 == t.type && h.AD_SCENE.checkCurrent(function (t) {
                            return t[104]
                        })) return !1
                    }, onShow: function (t) {
                        /^[01]$/.test(t.dot.type) && h.AD_SCENE.checkCurrent(function (t) {
                            t[103] && t[103].view.destroy()
                        })
                    }
                }), h.AD_PAUSE = x("!ad.pause", h, {
                    onLoadBefore: function () {
                        if (h.AD_SCENE.checkCurrent(function (t) {
                            return t[0] || t[104]
                        })) return !1
                    }, onShow: function () {
                        h.AD_SCENE.checkCurrent(function (t) {
                            return t[103]
                        }) && h.AD_SCENE.stash()
                    }
                }), h.AD_STREAM = x("!ad.stream", h, {
                    onShow: function () {
                        h.AD_SCENE.checkCurrent(function (t) {
                            return t[0] || t[1] || t[103]
                        }) && h.AD_SCENE.stash()
                    }, onDestroy: function () {
                        h.AD_SCENE.checkCurrent(function (t) {
                            return t[0] || t[1]
                        }) && h.AD_SCENE.recover()
                    }
                })],
                r = {
                    getRequestParam: function (t) {
                        k(), w();
                        var e = _("adext,vs,pver,sver,site,aw,fu,d,bt,os,osv,dq,atm,partnerid,wintype,isvert,vip,emb", {
                            p: 1,
                            rst: "mp4",
                            needbf: 2
                        });
                        return t.ev && "-1" !== t.ev && (e.ev = t.ev), e
                    }, init: function (t) {
                        t = t || {}, b(), p = 0, l = c = u = null, m = {}, f = t.fullscreen ? 1 : 0, h._ups = t.upsData, h._player = t.player || h._player, h._container = t.container || h._container, k(), w();
                        var e, n, r = t.upsData || {},
                            i = r.adData || {},
                            a = ((h._player || {}).global || {}).initConfig || {};
                        "adPretest" in a ? e = a.adPretest : S && (e = /[?&]adPretest=[^&]+/.test(location.search)), e && (x("@mn.data.jsonp").params.requestFilter = function () {
                            var t = this.params.url;
                            /val[a-z]\.atm\.youku\.com/.test(t) && (this.params.url = t.replace(/val[a-z]\.atm\.youku\.com/, "pre-uts.youku.com"))
                        }), "adIgnoreFront" in a ? n = a.adIgnoreFront : S && (n = /[?&]adIgnoreFront=[^&]+/.test(location.search)), h.AD_FRONT.show(n ? null : i), h.AD_STREAM.init(i.BFVAL), h.AD_SCENE.init();
                        var o = [],
                            s = 0;
                        x.each((r.dvdinfo || {}).insertPoints, function (t, e) {
                            e && "standard" == e.ctype && (0 < e.start && (e._ps = s, o.push(e)), s++)
                        }), h.AD_MIDDLE.init(o)
                    }, play: function () {
                        p = 1, i(), h.AD_PAUSE.destroy()
                    }, pause: function () {
                        i(!(p = 0)), h.AD_PAUSE.get()
                    }, timeUpdate: function (t) {
                        t = t || {};
                        var e = Math.round(t.currentTime),
                            n = Math.round(t.actCurrentTime);
                        n === u && e === c || (u = n, c = e, p && i())
                    }, fullscreen: function (t) {
                        f = t ? 1 : 0, x.each(v, function (t, e) {
                            x.trigger(e.fullscreen, h, f)
                        }), w(), y()
                    }, volumechange: function (t) {
                        clearTimeout(n), n = setTimeout(function () {
                            t && (t.volume <= 0 || t.muted) && A("adsdk_muted", 1)
                        }, 500)
                    }, behindStart: function (t) {
                        var e = {};
                        t && t.continuePlay && (e.ctu = 1), h.AD_BEHIND.get(e)
                    }, freeze: function () {
                        h.AD_FRONT.pause(), h.AD_MIDDLE.pause(), h.AD_BEHIND.pause()
                    }, thaw: function () {
                        h.AD_FRONT.play(), h.AD_MIDDLE.play(), h.AD_BEHIND.play()
                    }
                },
                y = function (t) {
                    if (0 < t) a = setTimeout(function () {
                        y()
                    }, t);
                    else {
                        o = new Date, clearTimeout(a);
                        var e = h._container;
                        if (e) {
                            var n = e.offsetWidth,
                                r = e.offsetHeight,
                                i = n + "," + r;
                            s != i && (s = i, x.each(v, function (t, e) {
                                x.trigger(e.resize, h, n, r)
                            }))
                        }
                    }
                },
                w = function () {
                    e && e.remove();
                    var t = (e = x('<iframe frameborder="0" scrolling="0" allowtransparency="true" style="position:absolute;left:0;top:0;z-index:-1;width:100%;height:100%;visibility:hidden;"></iframe>', h._container))[0];
                    x(t.contentWindow).on("resize", function () {
                        var t = new Date;
                        !o || 100 < t - o ? y() : y(t - o)
                    })
                },
                b = function () {
                    x.each(v, function (t, e) {
                        x.trigger(e.destroy, h)
                    })
                },
                i = function (t) {
                    var e = l,
                        n = m.count,
                        r = new Date;
                    n || (n = 0), m.date && (n += r - m.date), l = parseInt((m.count = n) / 1e3), t ? m.date = null : (m.date = r, e !== l && p && (h.AD_MIDDLE.checkDots(), h.AD_SCENE.checkDots(), h.AD_STREAM.checkDots()))
                },
                k = function () {
                    var t = {
                            partnerid: "null",
                            wintype: "interior",
                            pltype: "h5",
                            sver: "2.0",
                            pver: "",
                            rst: "h5,img",
                            atm: "",
                            emb: "",
                            bt: "pc",
                            vs: "1.0",
                            dq: "auto",
                            aw: "w",
                            ti: "",
                            cs: "",
                            ct: "",
                            uk: "",
                            bd: "",
                            u: "",
                            k: "",
                            isvert: 0,
                            site: 1,
                            paid: 0,
                            vip: 0,
                            vit: 0,
                            td: 0,
                            vl: 0,
                            vr: 0,
                            d: 0,
                            s: 0,
                            os: C[0],
                            osv: C[1]
                        },
                        e = (h._player || {}).global || d || {};
                    e.version && (t.pver = e.version);
                    var n = e.initConfig;
                    if (n) {
                        n.ccode && (t.ccode = n.ccode), n.winType && (t.wintype = n.winType), n.adext && (t.adext = n.adext), (n.pid || n.Fid) && (t.d = n.pid || n.Fid), /^(0505|050F)$/.test(n.ccode) && (t.site = -1);
                        var r = n.customParam;
                        r && (r.client_id && (t.partnerid = r.client_id), r.atm && (t.atm = r.atm));
                        var i = n.vvlogconfig;
                        i && i.embedid && (t.emb = i.embedid), h.AD_FRONT && (h.AD_FRONT.params.autoplay = !1 !== n.autoplay)
                    }
                    var a = h._ups;
                    if (a) {
                        var o = a.videoData,
                            s = a.trialData,
                            c = a.userData,
                            u = a.showData,
                            l = a.upsData,
                            f = a.feeData;
                        if (o) {
                            o.id && (t.v = o.id), o.userid && (t.u = o.userid), o.source && (t.td = o.source), o.title && (t.ti = o.title), o.category_letter_id && (t.ct = o.category_letter_id), o.panorama && (t.vr = 1), 0 < o.seconds && (t.vl = parseInt(o.seconds)), x.isArray(o.tags) && (t.k = o.tags.join("|")), /fee|channel_vip/.test(o.type) && (t.paid = 1);
                            var p = [];
                            x.each(o.subcategories, function (t, e) {
                                p.push(e.id)
                            }), p.length && (t.cs = p.join("|"))
                        }
                        f && (t.paid = 1, f.trial_type && (t.tt = f.trial_type)), s && (0 < s.time && (t.vl = parseInt(s.time) - 1), s.type && (t.tt = s.type)), c && c.vip && (t.vip = 1), l && l.psid && (t.sid = l.psid), u && (u.id && (t.s = u.id), u.pay && (t.paid = 1), u.show_videotype && (t.vit = g[u.show_videotype] || 0))
                    }
                    h._params = t
                },
                _ = h.getRequestData = function () {
                    var r = {},
                        i = h._params;
                    return x.eachArray(arguments, function (t, e) {
                        ! function (t) {
                            switch (x.getType(t)) {
                            case "String":
                                t && x.each(t.split(","), function (t, e) {
                                    "fu" == e ? r[e] = f : "pw" == e ? h._container && (r[e] = h._container.offsetWidth) : "ph" == e ? h._container && (r[e] = h._container.offsetHeight) : e in i && (r[e] = i[e])
                                });
                                break;
                            case "Object":
                                x.each(t, function (t, e) {
                                    r[t] = e
                                });
                                break;
                            case "Array":
                                var n = arguments.callee;
                                x.each(t, function (t, e) {
                                    n(e)
                                })
                            }
                        }(e)
                    }), r
                };
            h.getDuration = function () {
                return l
            }, h.getCurrentTime = function () {
                return c
            }, h.getActCurrentTime = function () {
                return u
            }, h.getFullState = function () {
                return f
            }, h.getPlayerSize = function () {
                return h._container ? [h._container.offsetWidth, h._container.offsetHeight] : [0, 0]
            }, h.callPlayer = function (t) {
                var e = x.toArray(arguments);
                try {
                    T(e, "CallPlayer", "#2692ff"), h._player[t].apply(h._player, e.slice(1))
                } catch (t) {
                    T(e, "CallPlayer", "#ff0000")
                }
            }, h.destroy = function () {
                b(), T(null, "PlayerDestroy")
            }, h.invoke = function (t) {
                var e = x.toArray(arguments),
                    n = r[t];
                if (n) return "timeUpdate" != t && T(e, "PlayerInvoke"), n.apply(this, e.slice(1));
                T(e, "PlayerInvoke", "#ccc")
            }
        }
    })
}();