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
        a.exports = c(24)
    }, 24: function (a, b, c) {
        function d(a) {
            this.dataset = {}, this.context = a, this.init()
        }
        var e = (Txplayer.util, c(25)),
            f = c(26),
            g = Txplayer.$;
        d.prototype = {
            init: function () {
                this.disableDefn() || (this.write(), this.addEventListener())
            }, write: function () {
                var a = {
                        hideClass: Txplayer.dataset.hideClass,
                        definitionBtn: "txp-h5-ui-control-definitionbtn",
                        tabindex: Txplayer.dataset.tabindex++,
                        definitionLayer: "txp-h5-ui-control-definitionLayer",
                        definitionOpenapp: "txp-h5-ui-hd-banner"
                    },
                    b = Txplayer.$.tmpl(e, a);
                this.context.$mod.$buttonsrightmod.append(b), this.dataset.$definitionBtn = this.context.$mod.$buttonsrightmod.find('[data-role="' + a.definitionBtn + '"]');
                var c = Txplayer.$.tmpl(f, a);
                this.context.$mod.$playermod.append(c), this.dataset.$definitionLayer = this.context.$mod.$playermod.find('[data-role="' + a.definitionLayer + '"]'), this.dataset.$definitionWrap = this.dataset.$definitionLayer.find(".txp_defn_wrap"), this.hideLayer(), this.context.dataset.definitionList && this.setDefn({
                    DefinitionList: this.context.dataset.definitionList,
                    dltype: this.context.dataset.getinfoJSON.dltype
                })
            }, hideLayer: function () {
                this.dataset.$definitionLayer && this.dataset.$definitionLayer.addClass(Txplayer.dataset.hideClass), this.context.userMsg.broadcast("definitionLayerShow", !1)
            }, showLayer: function () {
                this.dataset.$definitionLayer && this.dataset.$definitionLayer.removeClass(Txplayer.dataset.hideClass), this.context.userMsg.broadcast("definitionLayerShow", !0)
            }, remove: function () {
                this.dataset.$definitionBtn && this.dataset.$definitionBtn.remove()
            }, disableDefn: function () {
                return !this.context.config.enableMoblieDefn
            }, setDefn: function (a) {
                var b = this;
                3 == a.dltype ? (b.dataset.$definitionWrap.empty(), g.each(a.DefinitionList, function (a, c) {
                    if (c && c.cname && c.name) {
                        var d = "",
                            e = "";
                        1 == c.sl && (d = " txp_defn_selected", b.dataset.$definitionBtn.find(".txp_label").text(c.cname.split(";")[0])), 1 == c.lmt && (e = " VIP\u5c0a\u4eab");
                        var f = '<div class="txp_defn_btn ' + d + '" data-name="' + c.name + '">' + c.cname.replace(";", " ").replace("(", "").replace(")", "") + e + "</div>";
                        b.dataset.$definitionWrap.prepend(f)
                    }
                })) : (b.dataset.$definitionWrap.empty(), g.each(a.DefinitionList, function (a, c) {
                    if (c && c.cname && c.name) {
                        var d = "",
                            e = "";
                        if (1 == c.sl) {
                            d = " txp_defn_selected", b.dataset.$definitionBtn.find(".txp_label").text(c.cname.split(";")[0]);
                            var f = '<div class="txp_defn_btn ' + d + '" data-name="' + c.name + '">' + c.cname.replace(";", " ").replace("(", "").replace(")", "") + e + "</div>";
                            b.dataset.$definitionWrap.prepend(f)
                        }
                    }
                }))
            }, addEventListener: function () {
                var a = this;
                this.dataset.$definitionBtn.on(Txplayer.dataset.clickEventName, function () {
                    a.showLayer()
                }), this.dataset.$definitionLayer.on(Txplayer.dataset.clickEventName, function (b) {
                    a.hideLayer()
                }).on(Txplayer.dataset.clickEventName, ".txp_defn_btn", function () {
                    var b = g(this).attr("data-name");
                    a.context.msg.broadcast("mobileSwitchDefn", b)
                }), this.context.msg.on("updateDefnInfo", function (b) {
                    a.setDefn(b)
                })
            }
        }, Txplayer.register("H5Defn", d)
    }, 25: function (a, b) {
        a.exports = '<button data-role="<%=definitionBtn%>" class="txp_btn txp_btn_definition" data-status="false" aria-label="\u9ad8\u6e05">\n\t<txpdiv class="txp_label">\u9ad8\u6e05</txpdiv>\n</button>'
    }, 26: function (a, b) {
        a.exports = '<div data-role="<%=definitionLayer%>" class="txp_overlay_hint <%=hideClass%>">\n    <style>\n        .txp_defn_wrap{\n            text-align: center;\n        }\n        .txp_defn_selected{\n            border: 1px solid #ff7000;\n            border-radius: 35px;\n            padding: 5px 15px !important;\n            color:#ff7000;\n            background:black\n\n        }\n        .txp_defn_btn{\n            margin-bottom: 5px;\n            padding: 6px 15px;\n\n        }\n    </style>\n    <div class="txp_defn_wrap">\n            <div class="txp_defn_selected txp_defn_btn">\u6807\u6e05</div>          \n    </div>\n    \n    \n\t<a data-role="<%=definitionOpenapp%>" href="javascript:;" class="tvp_btn_normal"></a>\n</div>'
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
        a.exports = c(89)
    }, 89: function (a, b, c) {
        function d(a) {
            this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.util,
            f = c(90),
            g = c(91);
        d.prototype = {
            init: function () {
                this.dataset.browserFullscreenClass = "txp_fullscreen_mode", this.context.dataset.isWindowFullscreen = !1, this.context.dataset.isBrowserFullscreen = !1, this.dataset.isFakeFullsreen = false && this.context.config.isHtml5UseFakeFullScreen, this.write(), this.addEventListerner(), this.exportsModuleApis(), g(this)
            }, write: function () {
                var a = {
                        fullscreenBtn: "txp-ui-control-fullscreenbtn",
                        toolTip: "window-fullscreen",
                        tabindex: Txplayer.dataset.tabindex++
                    },
                    b = Txplayer.$.tmpl(f, a);
                this.context.$mod.$buttonsrightmod.append(b), this.dataset.$fullscreenBtn = this.context.$mod.$buttonsrightmod.find('[data-role="' + a.fullscreenBtn + '"]'), this.dataset.$playermod = this.context.$mod.$playermod, this.dataset.$fullscreenContainer = this.context.$mod.$playermod[0]
            }, remove: function () {
                this.dataset.$fullscreenBtn.remove()
            }, toggleFullScreen: function () {
                //这里必须修改，默认是假全屏，必须使用window方法
                this.context.dataset.isWindowFullscreen ? this.exitWindowFullscreen() : this.enterWindowFullscreen();
            }, requestFullScreen: function (a, b, c) {
                 //也里可以简化一下
                b === "enter" ? this.context.msg.broadcast("videoRequestFullScreen")  : this.context.msg.broadcast("videoExitFullScreen");
            }, isFullScreen: function () {
                var a = document.mozFullScreen || document.webkitIsFullScreen;
                return a
            }, exitWindowFullscreen: function (a) {
                var b = this;
                //APP里退出横屏
                if(window.qgjs) window.qgjs.setScreenOrientation(false);
                b.dataset.$fullscreenBtn.attr("data-status", false), b.context.dataset.isWindowFullscreen = false, a || b.requestFullScreen(null, "exit")
            }, enterWindowFullscreen: function (a) {
                var b = this;
                //APP里进入横屏
                if(window.qgjs) window.qgjs.setScreenOrientation(true);
                b.dataset.$fullscreenBtn.attr("data-status", true), b.context.dataset.isWindowFullscreen = true, a || b.requestFullScreen(null, "enter")
            }, enterBrowserFullscreen: function () {
                this.enterWindowFullscreen();
            }, exitBrowserFullscreen: function (a) {
                this.exitWindowFullscreen();
            }, addEventListerner: function () {
                var a = this;
                this.dataset.$fullscreenBtn.on(Txplayer.dataset.clickEventName, function () {
                    a.toggleFullScreen()
                }), Txplayer.$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function (b) {
                    a.context.dataset.isWindowFullscreen = a.isFullScreen();
                }), this.context.msg.on("videoEnd", function (b) {
                    if (a.context.dataset.isWindowFullscreen) a.exitWindowFullscreen();
                })
            }, exportsModuleApis: function () {
                var a = this;
                this.dataset.moduleApis = {}, this.dataset.userApi = {}, this.dataset.moduleApis.toggleFullScreen = a.toggleFullScreen.bind(this), this.dataset.moduleApis.enterWindowFullscreen = a.enterWindowFullscreen.bind(this), this.dataset.moduleApis.exitWindowFullscreen = a.exitWindowFullscreen.bind(this), this.dataset.userApi.enterBrowserFullscreen = a.enterBrowserFullscreen.bind(this), this.dataset.userApi.exitBrowserFullscreen = a.exitBrowserFullscreen.bind(this), this.dataset.moduleApis.isWindowFullscreen = function () {
                    return a.context.dataset.isWindowFullscreen || a.context.dataset.isBrowserFullscreen
                }, Txplayer.$.extend(this.context.userApi, this.dataset.moduleApis), Txplayer.$.extend(this.context.userApi, this.dataset.userApi), Txplayer.$.each(this.dataset.moduleApis, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }
        }, Txplayer.register("H5UiFullScreen", d)
    }, 90: function (a, b) {
        a.exports = '<button class="txp_btn txp_btn_fullscreen" data-role="<%=fullscreenBtn%>" data-status="false" data-report="window-fullscreen" aria-label="\u5168\u5c4f">\n  <svg class="txp_icon txp_icon_fullscreen" viewBox="0 0 24 24" >\n    <use class="txp_svg_fullscreen" xlink:href="<%=svgPrefix%>#txp_svg_fullscreen" />\n    <use class="txp_svg_fullscreen_true" xlink:href="<%=svgPrefix%>#txp_svg_fullscreen_true" />\n  </svg>\n</button>'
    }, 91: function (a, b) {
        function c(a) {
            var b = d.os.ipad && d.browser.safari && navigator.vendor && navigator.vendor.indexOf("Apple") !== -1;
            if (!b) {
                var c = !1,
                    e = 0,
                    f = 0,
                    g = 0,
                    h = function () {
                        return a.context.dataset.isPlayingAd || "film" !== a.context.dataset.currentPlayListType || a.context.dataset.isControlTouch || !a.context.dataset.currentTime || 0 == a.context.dataset.playState || a.dataset.disable
                    },
                    i = function (a, b) {
                        return Math.sqrt(a * a + b * b)
                    };
                a.context.dataset.$playermod.on("touchstart", function (b) {
                    if (!h() && (1 === a.context.dataset.playState ? c = !1 : c || 2 !== a.context.dataset.playState || (c = !0), b = b.originalEvent ? b.originalEvent : b, b && b.touches && b.touches.length > 1)) {
                        var d = b.touches[0],
                            f = b.touches[1],
                            g = Math.abs(f.pageX - d.pageX),
                            j = Math.abs(f.pageY - d.pageY);
                        e = i(g, j)
                    }
                }).on("touchmove", function (a) {
                    h() || (a = a.originalEvent ? a.originalEvent : a, a && a.touches && a.touches.length > 1 && (a.preventDefault(), f = Math.abs(a.touches[0].pageX - a.touches[1].pageX), g = Math.abs(a.touches[1].pageY - a.touches[1].pageY)))
                }).on("touchend", function () {
                    if (!h()) {
                        var b = i(f, g) - e;
                        b > 0 ? a.enterWindowFullscreen() : b < 0 && a.exitWindowFullscreen(), f = g = e = 0
                    }
                })
            }
        }
        var d = Txplayer.util;
        a.exports = c
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
        a.exports = c(65)
    }, 30: function (module, exports) {
        var AppHelper = {},
            util = Txplayer.util,
            api = Txplayer.apiList,
            isChecking = !1,
            checked = !1,
            md5 = "",
            config = {
                mqqBrowserApiUrl: "//res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js",
                mqqApiUrl: "//pub.idqqimg.com/qqmobile/qqapi.js"
            },
            appConfig = {
                qqlive: {
                    md5Cgi: "//commdata.v.qq.com/commdatav2?cmd=39&otype=json&confid=${id}",
                    md5Cgi_https: "https://sec.video.qq.com/p/mcgi.v/commdatav2?cmd=39&otype=json&confid=${id}",
                    payUrl: "http://film.qq.com/weixin/detail/${index}/${cid}.html",
                    scheme: "tenvideo2://",
                    openUrl: "tenvideo2://?action=5&video_id=${vid}",
                    liveOpenUrl: "tenvideo2://?action=8&channel_id=${lid}",
                    downloadUrl: function () {
                        return util.os.iphone ? "https://itunes.apple.com/cn/app/id458318329?mt=8" : util.os.ipod ? "https://itunes.apple.com/cn/app/id458318329?mt=8" : util.os.ipad ? "https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8" : util.os.android ? "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=${promotionId}&platform=aphone" : void 0
                    }(),
                    VIA: "ANDROIDQQ.QQLIVE",
                    appId: "100730521",
                    packageName: util.os.ios ? "com.tencent.live4iphone" : "com.tencent.qqlive",
                    packageUrl: "tenvideo2://can_open_me_if_install_and_regeister_this_scheme",
                    appName: "\u817e\u8baf\u89c6\u9891"
                }
            };
        AppHelper.loadMqqBrowserAPI = function () {
            if (Txplayer.dataset.loadMqqBrowserAPIDefer) return Txplayer.dataset.loadMqqBrowserAPIDefer;
            var a = Txplayer.$.Deferred();
            if (Txplayer.dataset.loadMqqBrowserAPIDefer = a, window.x5) a.resolve();
            else {
                var b = config.mqqBrowserApiUrl;
                Txplayer.$.getScript(b, function () {
                    window.x5 ? a.resolve() : a.reject()
                })
            }
            return setTimeout(function () {
                a.reject()
            }, 5e3), a
        }, AppHelper.loadMqqAPI = function () {
            if (Txplayer.dataset.loadQQClientDefer) return Txplayer.dataset.loadQQClientDefer;
            var a = Txplayer.$.Deferred();
            if (Txplayer.dataset.loadQQClientDefer = a, window.mqq || window.QQApi) a.resolve();
            else {
                var b = config.mqqApiUrl;
                "undefined" == typeof Txplayer.$.getScript && (Txplayer.$.getScript = function (a, b) {
                    var c = document.createElement("script");
                    c.async = "async", c.src = a, b && (c.onload = b), document.getElementsByTagName("head")[0].appendChild(c)
                }), Txplayer.$.getScript(b, function () {
                    a.resolve()
                })
            }
            return setTimeout(function () {
                a.reject()
            }, 3e3), a
        }, AppHelper.getWechatOpenid = function () {
            var a = "";
            return util.browser.wechat && (a = util.getUrlParam("openid", window != top ? top.location.href.toString() : "")), a
        }, AppHelper.getAppMd5 = function (a, b) {
            var c = Txplayer.$.Deferred();
            a = a || 140, b = b || "qqlive";
            var d = appConfig[b].md5Cgi,
                e = d.replace("${id}", a);
            return md5 ? c.resolve({
                md5: md5
            }) : (Txplayer.$.ajax({
                url: e,
                dataType: "jsonp",
                jsonpCallback: "getmd5_callback_" + parseInt(1e6 * Math.random())
            }).then(function (a) {
                c.resolve(a && a.data ? a.data : a)
            }), setTimeout(function () {
                c.resolve({
                    md5: ""
                })
            }, 2e3)), c
        }, AppHelper.OnWechatReady = function () {
            var a = Txplayer.$.Deferred(),
                b = window === top ? document : top.document;
            return b.addEventListener("WeixinJSBridgeReady", function () {
                a.resolve()
            }), a
        }, AppHelper.isAppInstalled = function (a) {
            a = a || {};
            var b = Txplayer.$.Deferred(),
                c = {
                    hasApp: -1,
                    openUrl: "",
                    downloadUrl: "",
                    promotionId: a.promotionId || 140
                };
            util.os.ios || util.os.android || (c.hasApp = -2, b.resolve(c));
            var d = "";
            a.appName || (a.appName = "qqlive");
            var e = appConfig[a.appName];
            c.openUrl = e.openUrl, c.downloadUrl = e.downloadUrl, c.appTitleName = e.appName, a.vid && (c.openUrl = c.openUrl.replace(/\$\{vid\}/gi, a.vid)), c.promotionId && (c.openUrl.indexOf("from=") > -1 ? c.openUrl = c.openUrl.replace(/\&from=(\d)+/, "&from=" + a.promotionId) : c.openUrl += "&from=" + a.promotionId, c.downloadUrl = c.downloadUrl.replace(/\$\{promotionId\}/gi, a.promotionId)), util.browser.wechat && (d = AppHelper.getWechatOpenid(), d && c.openUrl.indexOf("wxplugopenid=") === -1 && (c.openUrl += "&wxplugopenid=" + d)), util.browser.wechat ? c.openUrl += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1" : util.browser.mqq && (c.openUrl += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ"), a.openUrl && (c.openUrl = util.xss(a.openUrl));
            var f = function () {
                    window === top ? document : top.document;
                    Txplayer.util.fiddlerLog("taskInWechat");
                    var d = function () {
                        if (Txplayer.util.fiddlerLog("taskInWechat.invoke"), !top.WeixinJSBridge || !top.WeixinJSBridge.invoke) return Txplayer.util.fiddlerLog("taskInWechat.invoke no api"), void b.resolve(c);
                        var d = {
                            packageUrl: e.packageUrl,
                            packageName: e.packageName
                        };
                        Txplayer.util.fiddlerLog("taskInWechat.invoke exec api"), top.WeixinJSBridge.invoke("getInstallState", d, function (d) {
                            Txplayer.util.fiddlerLog({
                                "taskInWechat.invoke": d
                            });
                            var e = d.err_msg;
                            e.indexOf("get_install_state:yes") > -1 ? (c.hasApp = 1, b.resolve(c)) : (c.hasApp = 0, AppHelper.getAppMd5(c.promotionId, a.appName).done(function (a) {
                                a && a.md5 && (c.md5 = a.md5), b.resolve(c)
                            }).fail(function () {
                                c.md5 = "-1", b.resolve(c)
                            }))
                        })
                    };
                    top.WeixinJSBridge ? d() : AppHelper.OnWechatReady().done(function () {
                        d()
                    }), setTimeout(function () {
                        b.resolve(c)
                    }, 6e3)
                },
                g = function () {
                    var a = util.os.ios ? e.packageUrl : e.packageName,
                        d = function () {
                            c.appid = e.appId, c.packageName = e.packageName, c.via = e.VIA, !util.os.ios && window.QQApi && window.QQApi.checkAppInstalled ? window.QQApi.checkAppInstalled(a, function (a) {
                                c.hasApp = a && 0 != a ? 1 : 0, b.resolve(c)
                            }) : window.mqq && window.mqq.app && window.mqq.app.isAppInstalled ? window.mqq.app.isAppInstalled(a, function (a) {
                                c.hasApp = a ? 1 : 0, b.resolve(c)
                            }) : b.resolve(0)
                        };
                    AppHelper.loadMqqAPI().done(function () {
                        d()
                    })
                },
                h = function () {
                    !util.os.iphone && window.QQApi && QQApi.checkAppInstalled && g();
                    var a = function () {
                        window.x5 && x5.ios && x5.ios.getMobileAppSupport ? x5.ios.getMobileAppSupport({
                            scheme: e.packageUrl
                        }, function (a) {
                            a ? (c.hasApp = 1 == a.isSupportApp ? 1 : 0, b.resolve(c)) : b.resolve(0)
                        }, function () {
                            b.resolve(0)
                        }) : b.resolve(0), setTimeout(function () {
                            b.resolve(0)
                        }, 300)
                    };
                    if (!util.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                        var d = window.x5mtt.isApkInstalled('{"packagename": "com.tencent.qqlive"}');
                        c.hasApp = d == -1 ? 0 : 1, b.resolve(c)
                    } else util.os.iphone && parseInt(util.os.version) > 5 ? AppHelper.loadMqqBrowserAPI().done(function () {
                        a()
                    }).fail(function () {
                        b.resolve(0)
                    }) : b.resolve(0);
                    setTimeout(function () {
                        b.resolve(0)
                    }, 3e3)
                };
            return util.browser.wechat ? f() : util.browser.mqq ? g() : util.browser.mqqbrowser ? h() : b.resolve(c), b
        }, AppHelper.checkHasApp = function (a) {
            a = a || {};
            var b = -1,
                c = Txplayer.$.Deferred();
            util.os.ios || util.os.android || (b = -2, c.resolve(b)), a.appName || (a.appName = "qqlive");
            var d = appConfig[a.appName],
                e = function () {
                    var a = function () {
                        if (!top.WeixinJSBridge || !top.WeixinJSBridge.invoke) return void c.resolve(util.getData("txv-download-hasapp") || -1);
                        var a = {
                            packageUrl: d.packageUrl,
                            packageName: d.packageName
                        };
                        top.WeixinJSBridge.invoke("getInstallState", a, function (a) {
                            var d = a.err_msg;
                            b = d.indexOf("get_install_state:yes") > -1 ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                        })
                    };
                    top && top.WeixinJSBridge || window.WeixinJSBridge ? a() : AppHelper.OnWechatReady().done(function () {
                        a()
                    }), setTimeout(function () {
                        c.resolve(util.getData("txv-download-hasapp") || -1)
                    }, 6e3)
                },
                f = function () {
                    var a = util.os.ios ? d.packageUrl : d.packageName,
                        e = function () {
                            !util.os.ios && window.QQApi && window.QQApi.checkAppInstalled ? window.QQApi.checkAppInstalled(a, function (a) {
                                b = a && 0 != a ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                            }) : window.mqq && window.mqq.app && window.mqq.app.isAppInstalled ? window.mqq.app.isAppInstalled(a, function (a) {
                                b = "object" == typeof a ? a.result ? 1 : 2 : a ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                            }) : c.resolve(util.getData("txv-download-hasapp") || -1)
                        };
                    AppHelper.loadMqqAPI().done(function () {
                        e()
                    })
                },
                g = function () {
                    !util.os.iphone && window.QQApi && QQApi.checkAppInstalled && f();
                    var a = function () {
                        window.x5 && x5.ios && x5.ios.getMobileAppSupport ? x5.ios.getMobileAppSupport({
                            scheme: d.packageUrl
                        }, function (a) {
                            a ? (b = 1 == a.isSupportApp ? 1 : 2, c.resolve(b)) : c.resolve(-1)
                        }, function () {
                            c.resolve(-1)
                        }) : c.resolve(-1), setTimeout(function () {
                            c.resolve(-1)
                        }, 300)
                    };
                    if (!util.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                        var e = window.x5mtt.isApkInstalled('{"packagename": "com.tencent.qqlive"}');
                        b = e == -1 ? 2 : 1, c.resolve(b)
                    } else util.os.iphone && parseInt(util.os.version) > 5 ? AppHelper.loadMqqBrowserAPI().done(function () {
                        a()
                    }).fail(function () {
                        c.resolve(-1)
                    }) : c.resolve(-1);
                    setTimeout(function () {
                        c.resolve(-1)
                    }, 3e3)
                };
            return util.browser.wechat ? e() : util.browser.mqq ? f() : util.browser.mqqbrowser ? g() : c.resolve(-1), c
        }, AppHelper.check = function () {
            isChecking || checked || (isChecking = !0, AppHelper.checkHasApp().done(function (a) {
                util.log("app-helper checkHasApp", a), Txplayer.dataset.hasApp = a, Txplayer.msg.broadcast("onCheckHasApp", a)
            }).always(function () {
                isChecking = !1, checked = !0
            }))
        }, AppHelper.getPromotionIdByPtag = function () {
            var a = util.getPTAG() || "";
            Txplayer.$.Deferred();
            if (a) {
                var b = " http://growth.video.qq.com/fcgi-bin/h5_player_ptag",
                    c = {
                        appid: 1,
                        appkey: 1,
                        ptag: a
                    };
                Txplayer.$.ajax({
                    url: b,
                    data: c,
                    dataType: "jsonp",
                    jsonpCallback: "getmd5_callback_" + parseInt(1e6 * Math.random())
                }).then(function (a) {
                    util.log(a)
                })
            }
        }, AppHelper.getAppInfo = function (a) {
            a = a || {};
            var b = Txplayer.$.Deferred(),
                c = {
                    vid: a.vid || "",
                    promotionId: a.promotionId || 140
                },
                d = "";
            a.appName || (a.appName = "qqlive");
            var e = appConfig[a.appName];
            return c.openUrl = e.openUrl, c.downloadUrl = e.downloadUrl || "", c.appTitleName = e.appName, a.vid && (c.openUrl = c.openUrl.replace(/\$\{vid\}/gi, a.vid)), c.promotionId && (c.openUrl.indexOf("from=") > -1 ? c.openUrl = c.openUrl.replace(/\&from=(\d)+/, "&from=" + a.promotionId) : c.openUrl += "&from=" + a.promotionId, c.downloadUrl = c.downloadUrl.replace(/\$\{promotionId\}/gi, a.promotionId), c.downloaderUrl = c.downloadUrl), util.browser.miuibrowser && "xiaomiqj" === util.getPTAG() && (c.downloadUrl = "market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true"), util.browser.wechat ? (d = AppHelper.getWechatOpenid(), d && c.openUrl.indexOf("wxplugopenid=") === -1 && (c.openUrl += "&wxplugopenid=" + d), c.openUrl += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1", util.os.android ? AppHelper.getAppMd5(c.promotionId, a.appName).done(function (a) {
                a && a.md5 && (c.md5 = a.md5, md5 = a.md5), b.resolve(c)
            }).fail(function () {
                c.md5 = "", b.resolve(c)
            }) : b.resolve(c)) : util.browser.mqq ? (c.openUrl += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ", c.appid = e.appId, c.packageName = e.packageName, c.via = e.VIA, b.resolve(c)) : b.resolve(c), b
        }, AppHelper.tryOpenApp = function (a) {
            if (a && a.length && !util.browser.wechat && !util.browser.mqq) {
                var b = a.attr("data-openurl"),
                    c = a.attr("data-downloadurl");
                if (b && c) {
                    var d = function () {
                            if (Txplayer.util.fiddlerLog("openApp"), util.os.ios && util.compareVersion(util.os.version, "9.0") > -1) try {
                                Txplayer.util.fiddlerLog({
                                    openurl: b,
                                    s: "\u76f4\u63a5\u6253\u5f00"
                                }), window.location.href = b
                            } catch (a) {} else {
                                Txplayer.util.fiddlerLog({
                                    openurl: b,
                                    s: "iframe\u6253\u5f00"
                                });
                                var a = document.createElement("iframe");
                                a.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;", a.src = b, document.body.appendChild(a)
                            }
                        },
                        e = function () {
                            Txplayer.util.fiddlerLog({
                                downloadurl: c,
                                s: "downloadApp"
                            }), window.location.href = c
                        },
                        f = function () {
                            d();
                            var a = (new Date).valueOf();
                            setTimeout(function () {
                                var b = (new Date).valueOf();
                                b - a < 1550 && e()
                            }, 1500)
                        };
                    a.off("click.try-open-app").on("click.try-open-app", f)
                }
            }
        }, AppHelper.fixOpenUrl = function (vid, openUrl) {
            if (!vid || !openUrl) return openUrl;
            var re = eval("/(video_id=)([^&]*)/gi"),
                nUrl = openUrl.replace(re, "video_id=" + vid);
            return nUrl
        }, AppHelper.fixCidOpenUrl = function (cid, openUrl) {
            if (cid && openUrl) {
                var re = eval("/(video_id=)([^&]*)/gi"),
                    nUrl = openUrl.replace(re, "cover_id=" + cid);
                return nUrl
            }
        }, AppHelper.fixFromOpenUrl = function (from, openUrl) {
            if (from && openUrl) {
                var re = eval("/(from=)([^&]*)/gi"),
                    nUrl = openUrl.replace(re, "from=" + from);
                return nUrl
            }
        }, module.exports = AppHelper
    }, 65: function (a, b, c) {
        function d(a) {
            f = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var e = c(66),
            f = Txplayer.$,
            g = Txplayer.util,
            h = c(30);
        g.AppHelper = h;
        var i = c(69),
            j = c(70);
        d.prototype = {
            init: function () {
                var a = this;
                if (this.isShowTips() || g.browser.toutiao || Object.hasOwnProperty("_is_offline_closed")) return void this.showBanError();
                if (Object.defineProperty(window, "_is_offline_closed", {
                    get: function () {
                        return this.a
                    }, set: function (b) {
                        window.txplayerShowTips = !0, a.showBanError(), a.pause(), a.context.msg.broadcast("vidChange"), this.a = b
                    }, configurable: !0
                }), !g.validVid(this.context.config.vid)) return void this.showError(!0);
                this.isEnableAdBlockTips() || (this.context.config.disableAdBlock = !0), this.dataset.hasVideoPlayed = !1, this.dataset.isNeedPay = this.context.config.isNeedPay, this.dataset.playStartTime = this.context.config.playStartTime, this.dataset.skipPrelude = this.context.config.skipPrelude, this.dataset.mobileDefnChangeSeekTime = 0, this.context.dataset.cid = this.context.config.cid, this.context.dataset.vid = this.context.config.vid, this.context.dataset.tpid = this.context.config.tpid, this.context.dataset.autoplay = this.context.config.autoplay, this.context.dataset.authext = this.context.config.authext || "", this.context.dataset.eduext = this.context.config.eduext || "", this.context.dataset.authfrom = this.context.config.authfrom || "";
                var b = {
                        vid: this.context.config.vid,
                        charge: this.context.config.isNeedPay ? 1 : 0
                    },
                    c = {
                        msg: this.context.msg,
                        config: b,
                        dataset: this.dataset,
                        sdtfrom: g.getStdfrom(),
                        guid: this.context.dataset.guid,
                        authfrom: this.context.config.authfrom
                    };
                if ("ipadh5" === this.context.config.playerType && (c.defn = "mp4"), this.getinfo = new e(c, this.context), this.auth = new i({
                    context: this.context
                }), this.addEventListener(), this.exportsModuleApis(), this.context.config.autoplay && this.canAutoplay() || g.isNewsPlugin() || g.isNews() || this.getStaticVideoInfo(), this.context.config && "function" === f.type(this.context.config.getUserType)) try {
                    Txplayer.dataset.isvip = 2 === this.context.config.getUserType()
                } catch (d) {}
                this.play({
                    vid: this.context.dataset.vid
                })
            }, recordPlayParam: function (a) {
                if (a.hasOwnProperty("vid") && this.setVid(a.vid), a.hasOwnProperty("title") && (a.title = g.xss(a.title)), a.hasOwnProperty("playEndTime") && a.playEndTime && a.hasOwnProperty("duration")) {
                    var b = parseInt(a.duration) - parseInt(a.playEndTime);
                    a.playEndTime = b < 0 ? null : b
                }
                a.playStartTime = a.playStartTime || 0, a.playStartTime = a.hasOwnProperty("connectionPlayType") || 0;
                var c = this;
                Object.keys(a).forEach(function (b) {
                    j.indexOf(b) !== -1 && (c.context.dataset[b] = a[b])
                }), this.dataset.hasVideoPlayed = !1, a.hasOwnProperty("isNeedPay") && (this.dataset.isNeedPay = a.isNeedPay), a.hasOwnProperty("columnId") && (this.dataset.columnId = a.columnId)
            }, play: function (a) {
                if (this.isShowTips() || g.browser.toutiao) return void this.showBanError();
                var b = function () {
                        return !!("string" === f.type(a) || "object" === f.type(a) && a.vid)
                    },
                    c = this;
                if (this.context.dataset.isPlayingAd && !b()) return void this.context.msg.broadcast("play");
                if (!this.dataset.loadingAdError) {
                    if (this.dataset.hasRequestloadingAd && !(a && a.vid && a.vid !== this.context.dataset.vid || "string" === f.type(a) && a !== this.context.dataset.vid)) return void(this.context.dataset.getinfoJSON || this.context.dataset.isLoadingAdEmpty === !1 ? this.context.msg.broadcast("play") : this.loadVideoUrls({
                        autoplay: !0
                    }));
                    if (1 !== this.context.dataset.playState && !this.context.dataset.isPlayingAd || !(a === this.context.dataset.vid || a && a.vid === this.context.dataset.vid)) {
                        if (("undefined" === f.type(a) || "object" === f.type(a) && !a.vid) && this.dataset.hasVideoPlayed) return void this.context.msg.broadcast("play");
                        "string" === f.type(a) ? a = {
                            vid: a,
                            autoplay: !0
                        } : ("object" === f.type(a) && !a.vid || "undefined" === f.type(a)) && (a || (a = {}), a.autoplay = !0), this.recordPlayParam(a), this.context.msg.broadcast("playerReInit"), this.context.msg.broadcast("beforeVideoPlay"), this.context.dataset.hasOwnProperty("isPlayingAd") || (g.log("\u6ca1\u6709\u5e7f\u544a\u63d2\u4ef6"), c.dataset.hasAdPluginCheck || c.context.config.disableAdBlock ? c.loadVideoUrls({
                            autoplay: c.context.dataset.autoplay
                        }) : (c.dataset.hasAdPluginCheck = !0, c.context.msg.broadcast("adError"), c.context.msg.on("adBlockTipsFinish", function () {
                            c.loadVideoUrls({
                                autoplay: c.context.dataset.autoplay
                            })
                        })))
                    }
                }
            }, load: function (a) {
                var b = function () {
                        return !!a
                    },
                    c = this;
                if (this.context.dataset.isPlayingAd && !b()) return void this.context.msg.broadcast("play");
                if (!this.dataset.loadingAdError) {
                    if (this.dataset.hasRequestloadingAd && !(a && a.vid && a.vid !== this.context.dataset.vid || "string" === f.type(a) && a !== this.context.dataset.vid)) return void(this.context.dataset.getinfoJSON || this.context.dataset.isLoadingAdEmpty === !1 ? this.context.msg.broadcast("play") : this.loadVideoUrls({
                        autoplay: !1
                    }));
                    if (1 !== this.context.dataset.playState && !this.context.dataset.isPlayingAd || !(a === this.context.dataset.vid || a && a.vid === this.context.dataset.vid)) {
                        if (("undefined" === f.type(a) || "object" === f.type(a) && !a.vid) && this.dataset.hasVideoPlayed) return void this.context.msg.broadcast("play");
                        "string" === f.type(a) ? a = {
                            vid: a,
                            autoplay: !1
                        } : ("object" === f.type(a) && !a.vid || "undefined" === f.type(a)) && (a || (a = {}), a.autoplay = !0), this.recordPlayParam(a), this.context.msg.broadcast("playerReInit"), this.context.msg.broadcast("beforeVideoPlay"), this.context.dataset.hasOwnProperty("isPlayingAd") || (g.log("\u6ca1\u6709\u5e7f\u544a\u63d2\u4ef6"), c.dataset.hasAdPluginCheck || c.context.config.disableAdBlock ? c.loadVideoUrls({
                            autoplay: c.context.dataset.autoplay
                        }) : (c.dataset.hasAdPluginCheck = !0, c.context.msg.broadcast("adError"), c.context.msg.on("adBlockTipsFinish", function () {
                            c.loadVideoUrls({
                                autoplay: c.context.dataset.autoplay
                            })
                        })))
                    }
                }
            }, pause: function () {
                this.context.msg.broadcast("pause")
            }, seekTo: function (a, b) {
                g.showInfo("seekTo", a);
                var c = this,
                    d = !b,
                    e = parseInt(this.context.dataset.currentTime),
                    f = +new Date,
                    h = this.context.msg.getData("checkTimeisInBufferdRange", a);
                this.context.msg.broadcast("seekStart", {
                    type: "film",
                    seekTime: a,
                    isUserAction: d,
                    currentTimeWhenSeekStart: e,
                    seekStartTime: f,
                    isSeekTimeInBuffer: h
                }), this.context.msg.broadcast("setFocusVideoCurrentTime", a, !0, b), this.context.msg.once("videoPlaying.h5playercontrolSeek", function () {
                    var b = +new Date,
                        g = a;
                    c.context.msg.broadcast("seekEnd", {
                        type: "film",
                        seekStartTime: f,
                        seekEndTime: b,
                        seekTime: a,
                        currentTimeWhenSeekStart: e,
                        currentTimeWhenSeekEnd: g,
                        isUserAction: d,
                        isSeekTimeInBuffer: h
                    }), c.context.userMsg.broadcast("seekEnd")
                })
            }, togglePlayPause: function () {
                1 === this.context.dataset.playState ? this.pause() : this.play()
            }, getStaticVideoInfo: function () {
                if (this.getinfo && this.getinfo.getStaticVideoInfo) {
                    var a = this;
                    this.auth({
                        eduext: this.context.config.eduext || "",
                        authext: this.context.config.authext || "",
                        vid: this.context.dataset.vid
                    }).done(function (b) {
                        a.getinfo.getStaticVideoInfo({
                            platform: b.param.platform || "",
                            vid: a.context.dataset.vid
                        }).done(function (b) {
                            a.context.dataset.videoStaticInfo = b, a.context.msg.broadcast("getVideoStaticInfoSuccess")
                        })
                    })
                }
            }, loadVideoUrls: function (a) {
                if (a = a || {}, !this.dataset.isGettingInfo) {
                    this.dataset.hasLoadVideoUrl = !0, this.context.dataset.hasVideoRetry = 0;
                    var b = this,
                        c = {};
                    this.context.msg.once("getVideoUrlSuccess.loadVideoUrls", function (c) {
                        c && (b.context.msg.broadcast("addUrls2Player", [{
                            url: c,
                            type: "film"
                        }]), a.autoplay && (b.context.dataset.autoplay = !0), b.context.dataset.isPlayingAd && !b.context.dataset.isPlayingAdHasError || (b.dataset.hasVideoPlayed = !0, b.context.msg.broadcast("play", {
                            url: c,
                            autoplay: b.context.dataset.autoplay
                        })))
                    }), c = f.extend({}, {
                        vid: a.vid,
                        charge: a.charge,
                        autoplay: a.autoplay,
                        defn: a.defn || "auto",
                        fhdswitch: a.fhdswitch || "",
                        defnsrc: a.options || "",
                        fmt: "auto"
                    });
                    var d = function () {
                        delete c.autoplay, b.requestVideoUrlsByVid(c)
                    };
                    this.auth({
                        eduext: this.context.config.eduext || "",
                        authext: this.context.config.authext || "",
                        vid: this.context.dataset.vid
                    }).done(function (a) {
                        a && a.cgi && (c.cgi = a.cgi), a && a.param && (c = f.extend(c, a.param)), b.context.dataset.platform = c.platform || "11001", d()
                    }).fail(function () {
                        d()
                    })
                }
            }, requestVideoUrlsByVid: function (a) {
                a = a || {};
                var b = {
                    vid: this.context.dataset.vid,
                    defn: "auto",
                    charge: this.dataset.isNeedPay ? 1 : 0,
                    fhdswitch: 0,
                    show1080p: this.context.config.show1080p,
                    platform: "11001",
                    dtype: this.isEnableHls() ? 3 : 1,
                    sphls: this.isEnableHls() ? 1 : "",
                    clip: this.isEnableHls() ? "" : 4
                };
                this.context.dataset.supportHevc && (b.hevclv = 21);
                var c = this;
                f.extend(b, a), this.context.msg.broadcast("getinfoStart"), this.dataset.isGettingInfo = !0, this.getinfo.requestGetinfo(b).done(function (a, b, d, e) {
                    c.dataset.isGettingInfo = !1, c.context.dataset.getinfoJSON = e, c.context.dataset.filmVideoData = b, c.context.dataset.backupUrls = b[0].urlArray, c.context.dataset.duration = c.getDuration(), c.context.dataset.userPayStatus = c.getUserPayStatus(), c.context.dataset.definitionList = d, e && e.vl && e.vl.vi && "object" === f.type(e.vl.vi[0]) && (c.context.dataset.videoWidth = e.vl.vi[0].vw, c.context.dataset.videoHeight = e.vl.vi[0].vh, c.context.dataset.tpid = e.vl.vi[0].videotype, e.vl.vi[0].wl && e.vl.vi[0].wl.wi && e.vl.vi[0].wl.wi.length && c.context.msg.broadcast("getWatermarkSuccess", {
                        wi: e.vl.vi[0].wl.wi,
                        action: e.vl.vi[0].wl.action || !1
                    })), c.context.dataset.fileTitle = c.getFileTitle(), c.context.msg.broadcast("updateDefnInfo", {
                        DefinitionList: d,
                        dltype: e.dltype
                    }), c.context.msg.broadcast("getVideoUrlSuccess", a)
                }).fail(function (a, b) {
                    c.context.msg.off("getVideoUrlSuccess.loadVideoUrls"), c.dataset.isGettingInfo = !1;
                    var d, e = a.code;
                    c.context.dataset.getinfoJSON = b, c.context.dataset.userPayStatus = c.getUserPayStatus(), d = Txplayer.errcode[a.code], "object" === f.type(d) && (d = d[a.exem], d = d || Txplayer.errcode[a.code].defaultMsg);
                    try {
                        c.context.userMsg.broadcast("error", {
                            flowId: c.context.dataset.flowid,
                            code: e,
                            msg: d,
                            type: "cgi"
                        })
                    } catch (h) {}
                    if (a && a.code && 91 == a.code) {
                        var i = c.context.dataset.vid,
                            j = c.context.dataset.cid || "",
                            k = g.os.ios ? "ios" : "android",
                            l = g.getPayUrl("1080", i, j, k);
                        window.self == top ? window.location.href = l : top.location.href = l
                    } else c.context.msg.broadcast("error", {
                        code: e,
                        msg: d || Txplayer.errcode.defaultMsg,
                        type: "cgi"
                    })
                })
            }, setVid: function (a) {
                if (a && a !== this.context.dataset.vid) {
                    this.context.dataset.vid = a, this.context.msg.broadcast("vidChange", a);
                    try {
                        this.context.userMsg.broadcast("vidChange", a)
                    } catch (b) {}
                }
            }, getVid: function () {
                return this.context.dataset.vid
            }, getCid: function () {
                return this.context.dataset.cid
            }, getColumnId: function () {
                return this.context.dataset.columnId
            }, getDuration: function () {
                if (!this.context.dataset.getinfoJSON) return 0;
                var a = this.context.dataset.getinfoJSON.preview;
                return 0 === this.context.dataset.getinfoJSON.exem && this.context.dataset.getinfoJSON.vl && this.context.dataset.getinfoJSON.vl.vi && this.context.dataset.getinfoJSON.vl.vi[0] && this.context.dataset.getinfoJSON.vl.vi[0].td && 2 == this.context.dataset.getinfoJSON.vl.vi[0].st && (a = parseInt(this.context.dataset.getinfoJSON.vl.vi[0].td)), a
            }, getUserPayStatus: function () {
                var a = this.context.dataset.getinfoJSON,
                    b = null;
                return a && (!a.preview || 1 != a.exem && 2 != a.exem && 4 != a.exem ? a.preview || 83 != a.iRetCode ? a.vl && a.vl.vi && a.vl.vi.length && a.vl.vi[0] && (b = a.vl.vi[0].ch) : b = 2 : b = 1), b
            }, getCurrentTime: function () {
                if (this.context.dataset.isPlayingAd) return 0;
                var a = this.context.dataset.currentTime;
                return parseInt(a)
            }, getVideoSize: function () {
                return {
                    width: this.context.dataset.videoWidth,
                    height: this.context.dataset.videoHeight
                }
            }, getVideoType: function () {
                return this.context.config.videoType
            }, getPlayerType: function () {
                return this.context.config.playerType
            }, getFileTitle: function () {
                var a = this.context.dataset.getinfoJSON;
                return a && a.vl && a.vl.vi && a.vl.vi.length && a.vl.vi[0] && a.vl.vi[0].ti ? a.vl.vi[0].ti : 0
            }, getDefinition: function () {
                if (this.context.dataset.definitionList && this.context.dataset.definitionList[0]) return this.context.dataset.definitionList[0].cname
            }, showError: function (a) {
                a ? this.context.msg.broadcast("error", {
                    type: "film",
                    code: "3333"
                }) : this.context.msg.broadcast("adError")
            }, showBanError: function () {
                this.context.msg.broadcast("banError"), this.context.userMsg.broadcast("error", {
                    type: "tips"
                })
            }, addEventListener: function () {
                var a = this;
                this.dataset.eventsList = {}, this.dataset.eventsList[g.getUniqueMsgKey("loadingAdDataReady")] = function (b) {
                    if (!a.dataset.hasRequestloadingAd && (a.dataset.hasRequestloadingAd = !0, b && "array" === f.type(b) && b.length)) {
                        var c = [];
                        f(b).each(function (a, b) {
                            var d = "array" === f.type(b.image) ? b.image[0].cs : b.image.cs;
                            b.image.url && c.push({
                                url: b.image.url,
                                type: "loadingad",
                                data: {
                                    bytesTotal: d
                                }
                            })
                        }), 0 !== c.length && (a.context.dataset.isLoadingAdEmpty = !1, a.context.msg.broadcast("addUrls2Player", c), a.context.msg.broadcast("play"))
                    }
                }, this.dataset.eventsList[g.getUniqueMsgKey("loadingadIsEmpty")] = function () {
                    a.context.dataset.isLoadingAdEmpty = !0, a.dataset.hasRequestloadingAd = !0;
                    var b = {
                        playStartTime: a.context.dataset.skipOpeningSongTime,
                        autoplay: a.context.dataset.autoplay || !1
                    };
                    a.isDisableGetinfo() ? g.os.ios ? a.context.dataset.autoplay && a.loadVideoUrls(b) : (a.dataset.idReplay && a.loadVideoUrls(b), a.dataset.idReplay = !1) : a.loadVideoUrls(b)
                }, this.dataset.eventsList[g.getUniqueMsgKey("endingAdDataReady")] = function (b) {
                    if (b && "array" === f.type(b) && b.length) {
                        var c = [];
                        f(b).each(function (a, b) {
                            b.image.url && c.push({
                                url: b.image.url,
                                type: "endingad"
                            })
                        }), 0 !== c.length && (a.context.msg.broadcast("addUrls2Player", c), a.context.msg.broadcast("play"))
                    }
                }, this.dataset.eventsList[g.getUniqueMsgKey("loadingAdRequestError")] = function () {
                    if (!a.dataset.hasGetAdError)
                        if (a.dataset.hasGetAdError = !0, a.dataset.hasAdPluginCheck || a.context.config.disableAdBlock) {
                            a.context.dataset.isLoadingAdEmpty = !0, a.dataset.hasRequestloadingAd = !0;
                            var b = {};
                            a.loadVideoUrls(b)
                        } else a.dataset.hasAdPluginCheck = !0, a.context.dataset.isLoadingAdEmpty = !0, a.dataset.hasRequestloadingAd = !0, a.dataset.loadingAdError = !0, a.context.msg.on("adBlockTipsFinish", function () {
                            a.dataset.loadingAdError = !1;
                            var b = {};
                            a.loadVideoUrls(b)
                        }), a.context.msg.broadcast("adError")
                }, this.dataset.eventsList[g.getUniqueMsgKey("allTheLoadingAdIsError")] = function () {
                    a.context.dataset.isLoadingAdEmpty = !0;
                    var b = {
                        playStartTime: a.context.dataset.skipOpeningSongTime
                    };
                    b.autoplay = !0, a.context.dataset.isPlayingAdHasError = !0, a.loadVideoUrls(b)
                }, this.dataset.eventsList[g.getUniqueMsgKey("videoPlay")] = function (b) {
                    b && "film" === b.playListType && (a.dataset.hasVideoPlayed = !0)
                }, this.dataset.eventsList[g.getUniqueMsgKey("videoPlaying")] = function (b) {
                    if (b && "film" === b.playListType) a.dataset.hasVideoPlayed = !0, a.dataset.hasRequestLoadingAd = !1;
                    else {
                        if (a.context.dataset.isLoadingAdEmpty) return;
                        if (a.dataset.hasLoadVideoUrl) return;
                        if ("endingad" === b.playListType) return;
                        a.loadVideoUrls()
                    }
                }, this.context.msg.on("videoEnd", function (b) {
                    b.playListTypeEnd && "film" === b.playListType && (a.dataset.hasVideoPlayed = !1, a.dataset.hasLoadVideoUrl = !1, a.context.dataset.getinfoJSON = null, a.dataset.hasRequestloadingAd = !1), b.playListType && "film" === b.playListType || (a.updateCurrentTime(0, "videoEnd"), a.context.msg.broadcast("videoTimeUpdate"))
                }), this.context.msg.on("vidChange", function () {
                    a.dataset.hasVideoPlayed = !1, a.dataset.hasLoadVideoUrl = !1, a.context.dataset.getinfoJSON = null, a.context.dataset.isLoadingAdEmpty = null, a.dataset.hasRequestloadingAd = null, a.context.dataset.currentTime = 0, a.dataset.idReplay = !0
                }), this.context.msg.on("beforeVideoRePlay", function () {
                    a.dataset.idReplay = !0, a.updateCurrentTime(0, "beforeVideoRePlay"), a.dataset.hasRequestloadingAd = null
                }), this.context.userMsg.on("1080pVipGuideClose", function (b) {
                    b && "closeSkipAd" === b.action && a.play()
                }), f.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                }), this.context.msg.on("getInfoRetry", function () {
                    a.loadVideoUrls({
                        autoplay: !0
                    })
                }), this.context.msg.on("mobileSwitchDefn", function (b) {
                    a.changeDefn(b)
                })
            }, replay: function () {
                var a = this;
                a.context.msg.broadcast("beforeVideoRePlay"), a.context.msg.broadcast("androidHack"), a.context.msg.broadcast("playControl", {
                    autoplay: !0
                })
            }, exportsModuleApis: function () {
                var a = this;
                this.dataset.moduleApis = {}, this.dataset.moduleApis.pause = this.pause.bind(this), this.dataset.moduleApis.play = this.play.bind(this), this.dataset.moduleApis.replay = this.replay.bind(this), this.dataset.moduleApis.togglePlayPause = this.togglePlayPause.bind(this), this.dataset.moduleApis.seekTo = this.seekTo.bind(this), this.dataset.moduleApis.load = this.load.bind(this), this.dataset.moduleApis.getVid = this.getVid.bind(this), this.dataset.moduleApis.getCid = this.getCid.bind(this), this.dataset.moduleApis.getColumnId = this.getColumnId.bind(this), this.dataset.moduleApis.getDuration = this.getDuration.bind(this), this.dataset.moduleApis.getCurrentTime = this.getCurrentTime.bind(this), this.dataset.moduleApis.getVideoSize = this.getVideoSize.bind(this), this.dataset.moduleApis.getPlayerType = a.getPlayerType.bind(this), this.dataset.moduleApis.getVideoType = a.getVideoType.bind(this), this.dataset.moduleApis.getDefinition = a.getDefinition.bind(this), this.dataset.moduleApis.changeDefn = a.changeDefn.bind(this), this.dataset.moduleApis.showError = a.showError.bind(this), f.extend(this.context.userApi, this.dataset.moduleApis), this.dataset.privateApis = {}, this.dataset.privateApis.playControl = this.play.bind(this), this.dataset.privateApis.seekTo = this.seekTo.bind(this), f.each(this.dataset.privateApis, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }, canAutoplay: function () {
                return !(g.browser.safari || g.browser.safari_1 || g.browser.safari_2) && !!g.os.ios
            }, isEnableHls: function () {
                return this.context.config.enableMobileHls = !0, !(!this.context.config.enableMobileHls || !this.isSupportHls() || this.context.dataset.hasGetinfoRetry || !this.context.config.enableMoblieDefn)
            }, isSupportHls: function () {
                return g.mobile
            }, changeDefn: function (a) {
                var b = this;
                a && (b.loadVideoUrls({
                    defn: a,
                    fhdswitch: 1,
                    defnsrc: 1,
                    autoplay: !0
                }), b.dataset.mobileDefnChangeSeekTime = b.context.dataset.currentTime || 0, b.context.dataset.mobileDefnChangeSeekTime = b.dataset.mobileDefnChangeSeekTime, b.context.userMsg.broadcast("definitionChange", {
                    definition: a
                }))
            }, updateCurrentTime: function (a, b) {
                "number" === f.type(a) && (this.context.dataset.currentTime = a)
            }, isEnableAdBlockTips: function () {
                var a = ["m.v.qq.com/x/play", "m.v.qq.com/play", "m.v.qq.com/x/cover", "m.v.qq.com/x/page"],
                    b = !1;
                return f.each(a, function (a, c) {
                    location.href.indexOf(c) > -1 && (b = !0)
                }), !(!b || g.browser.wechat || g.browser.mqq)
            }, isShowTips: function () {
                return !!(window.txplayerShowTips || window.ToutiaoJSBridge || window.toutiao || window.JS2NativeBridge)
            }, isDisableGetinfo: function () {
                return g.isNewsPlugin() || g.isNews() || "yoo.qq.com" === window.location.hostname
            }
        }, Txplayer.register("H5PlayerControl", d)
    }, 66: function (a, b, c) {
        function d(a, b) {
            f = Txplayer.$, this.context = a, this.gContext = b, this.dataset = {}
        }
        var e = c(67),
            f = Txplayer.$,
            g = c(68),
            h = g.definitionMap,
            i = Txplayer.util,
            j = ["83", "80"];
        d.prototype = {
            getDefinitionListFromData: function (a) {
                var b = [],
                    c = location.hostname;
                if (top !== window) try {
                    c = top.location.hostname
                } catch (d) {}
                if ("o" === a.s && a.fl && a.fl.fi && "array" === f.type(a.fl.fi) && a.fl.fi.length && a.fl.fi[0])
                    for (var e = 0, g = a.fl.fi.length; e < g; e++) a.fl.fi[e].name in h && ("fhd" == a.fl.fi[e].name && "fhd" != a.fl.fi[e].name || b.push({
                        name: a.fl.fi[e].name,
                        cname: a.fl.fi[e].cname,
                        sl: a.fl.fi[e].sl,
                        format: a.fl.fi[e].id,
                        lmt: a.fl.fi[e].lmt,
                        fs: a.fl.fi[e].fs,
                        br: a.fl.fi[e].br
                    }));
                return b
            }, getHlsFromData: function (a) {
                var b = [];
                return 3 === a.dltype && "o" === a.s && a.vl && a.vl.vi && a.vl.vi.length && a.vl.vi[0] && a.vl.vi[0].ul && a.vl.vi[0].ul.ui && a.vl.vi[0].ul.ui.length && f.each(a.vl.vi[0].ul.ui, function (a, c) {
                    c.url && c.hls && c.hls.pt && b.push(c.url + c.hls.pt)
                }), b
            }, checkGetInfoData: function (a) {
                return !!a && (a && 0 !== a.em && "o" !== a.s ? 85 === a.em && a.type === -3 ? -1 : -2 : 1)
            }, checkGetinfoRetCode: function (a) {
                var b, c, d = 0;
                return a && a.s ? "o" !== a.s ? (d = a.em || 50, c = a.exem) : a.vl && a.vl.vi && f.isArray(a.vl.vi) && 0 !== a.vl.cnt ? b = a.vl.vi[0] : d = 68 : d = 50, 0 !== d || 5 === b.fst && f.isPlainObject(b.ul) && f.isArray(b.ul.ui) && 0 !== b.ul.ui.length ? 0 === d && 2 !== b.st && (8 != b.st ? d = 62 : 0 == a.preview && (d = 83, c = b.ch)) : d = 62, this.dataset.isQQMusicAuth && 83 === d && (c = -3), Txplayer.util.isQQBuLuoHost() && (c = 0), {
                    exVal: c,
                    iRetCode: d,
                    vi: b
                }
            }, getRequestUrl: function (a) {
                a = a || {};
                var b, c = {},
                    d = ["av.video.qq.com", "bkvv.video.qq.com", "h5vv.video.qq.com"],
                    e = a.retryTimes ? a.retryTimes - 1 : 0;
                return Txplayer.util.mobile ? location.href.indexOf("debugvideomark=1") > -1 ? c.domain = "testvv.video.qq.com" : c.domain = "h5vv.video.qq.com" : c.domain = "vv.video.qq.com", a.retry && (Txplayer.util.mobile ? c.domain = "bkh5vv.video.qq.com" : c.domain = d[e] || d[0]), "getinfo" === c.type && (i.browser.mqq || i.browser.wechat) && "view.inews.qq.com" === location.hostname && (c.domain = "h5wx.video.qq.com"), !a.retry && this.gContext && this.gContext.dataset && this.gContext.dataset.businessId && (this.gContext.dataset.authext || this.gContext.dataset.authfrom) && ("11" == this.gContext.dataset.businessId || this.gContext.dataset.businessId >= 200) && (c.domain = "sv.video.qq.com"), "http:" === location.protocol ? c.protocol = "http:" : c.protocol = "https:", "getinfo" === a.type ? c.path = "/getinfo?" : "getvinfo" === a.type ? c.path = "/getvinfo?" : "getkey" === a.type && (c.path = "/getkey?"), b = c.protocol + "//" + c.domain + c.path, a.disableCallback || (b += "callback=?&"), b
            }, getPcVideoMp4Url: function (a) {
                function b(a, b) {
                    if (0 === b) return a;
                    var c = a.lastIndexOf("."),
                        d = a.substr(0, c) + "." + b + a.substring(c);
                    return d
                }

                function c(a) {
                    var b = a.indexOf("."),
                        c = a.substr(b);
                    return c
                }

                function d(a, b, c, d) {
                    for (var e = [], f = {}, g = {}, h = a.ui.length, j = 0; j < h; j++) f = a.ui[j], g = {}, f.url && (f.url && f.url.indexOf(b + ".flv") === -1 && f.url.indexOf(b + ".mp4") === -1 ? g.url = f.url + c : g.url = f.url, f.vt && (g.vt = parseInt(f.vt)), g.url.indexOf("sdtfrom") === -1 && (g.url.indexOf("?") > -1 ? g.url += "&sdtfrom=" + i.gContext.dataset.sdtfrom : g.url += "?sdtfrom=" + i.gContext.dataset.sdtfrom, g.url += "&guid=" + i.gContext.dataset.guid), e.push(g));
                    return e
                }
                var e, f, g, h, i = this,
                    j = a.vl,
                    k = j.vi,
                    l = k[0],
                    m = [],
                    n = l.fn;
                if (3 == a.dltype) {
                    e = {}, e.vid = l.lnk, e.width = parseInt(l.vw), e.height = parseInt(l.vh), e.bytesTotal = parseInt(l.fs), e.byteRate = l.br, e.filename = l.fn, f = l.fn, e.newFileName = f, e.fileNameSuffix = c(f);
                    var o = i.getHlsFromData(a);
                    e.urlArray = [], h = o.length;
                    for (var p = 0; p < h; p++) e.urlArray.push({
                        url: o[p]
                    });
                    return e.vt = l.ul.ui[0].vt, e.duration = parseInt(l.td, 10), m.push(e), m
                }
                if (h = l.cl.fc, !l.cl.ci && l.fvkey && l.fn && l.ul && l.ul.ui && l.ul.ui.length) return e = {}, e.vid = l.lnk, e.width = parseInt(l.vw), e.height = parseInt(l.vh), e.bytesTotal = parseInt(l.fs), e.byteRate = l.br, e.filename = l.fn, f = l.fn, e.newFileName = f, e.fileNameSuffix = c(f), e.urlArray = d(l.ul, l.lnk, f, e.fileNameSuffix), e.vt = l.ul.ui[0].vt, e.duration = parseInt(l.td, 10), m.push(e), m;
                if (l.cl.ci && h === l.cl.ci.length) {
                    for (var q = 0; q < h; q++) g = l.cl.ci[q], e = {}, e.vid = l.lnk, e.width = parseInt(l.vw), e.height = parseInt(l.vh), e.bytesTotal = parseInt(g.cs), e.duration = parseFloat(g.cd), e.byteRate = l.br, e.filename = l.fn, f = b(n, q + 1), e.newFileName = f, e.fileNameSuffix = c(f), e.urlArray = d(l.ul, l.lnk, f, e.fileNameSuffix), e.vt = l.ul.ui[0].vt, m.push(e);
                    return m
                }
            }, requestGetinfo: function (a, b) {
                b = b || {};
                var c = "";
                try {
                    c = location.href.replace(location.search, ""), i.isInIframe() && (c = i.removeUrlParams(top.location.href || ""))
                } catch (d) {}
                var g = window != top ? i.removeUrlParams(document.referrer || "") : document.location.host,
                    h = {
                        charge: 0,
                        defaultfmt: "auto",
                        otype: "json",
                        guid: this.gContext.dataset.guid,
                        flowid: this.gContext.dataset.flowid,
                        platform: this.gContext.dataset.platform,
                        sdtfrom: this.gContext.dataset.sdtfrom,
                        defnpayver: 1,
                        appVer: Txplayer.dataset.ver,
                        host: location.host,
                        ehost: c,
                        refer: g,
                        sphttps: "https:" === location.protocol ? 1 : 0,
                        sphls: a.sphls,
                        _rnd: i.getTimeStampStr(),
                        spwm: 4
                    };
                this.gContext.dataset.unid && (h.unid = this.gContext.dataset.unid), this.gContext.dataset.authfrom && (h.auth_from = this.gContext.dataset.authfrom), this.gContext.dataset.authext && (h.auth_ext = this.gContext.dataset.authext);
                var j = f.extend(h, a);
                "auto" != j.defn && j.defn ? j.defsrc = 2 : j.defsrc = 1;
                var k = b.isRetry && b.cgi ? b.cgi : this.getRequestUrl({
                    type: "getinfo"
                });
                a.cgiType && (k = this.getRequestUrl({
                    type: a.cgiType
                }));
                var l = e.$xx(j.platform, j.vids || j.vid, j.sdtfrom, 1, h._rnd);
                l && l.u1 && l.u2 && l.c && (j._qv_rmt = l.u1, j._qv_rmt2 = l.u2, i.cookie.set("qv_als", l.c));
                var m = this,
                    n = f.Deferred(),
                    o = +new Date;
                this.dataset.videoFormat = j.defn, this.dataset.vid = j.vid;
                var p = arguments.callee;
                b.isEmRetry && b.defer && (n = b.defer), b.isRetry && b.cgi && (k = b.cgi), b.isRetry && b.defer && (n = b.defer), a.show1080p || (j.defnpayver = 0), this.context.msg.broadcast("getinfoStart", {
                    getinfoURL: k + "&" + f.param(j),
                    time: +new Date
                });
                var q = function (a) {
                        var c = +new Date,
                            d = {
                                endTime: c,
                                startTime: o,
                                getinfoURL: k + "&" + f.param(j),
                                costTime: c - o
                            };
                        a && "object" === f.type(a) ? (d.err = "error", d = f.extend(d, a)) : a && "string" === f.type(a) && (d.err = a, "timeout" == a && (d.code = 600)), "string" === f.type(a) ? "timeout" == a ? d.errCode = Txplayer.errcode.getPlatformErrorCode("getinfo", "neterror", "03") : d.errCode = Txplayer.errcode.getPlatformErrorCode("getinfo", "neterror", "01") : a && a.code ? d.errCode = Txplayer.errcode.getPlatformErrorCode("getinfo", "cgiInnerError", a.code) : a && (d.errCode = Txplayer.errcode.getPlatformErrorCode("getinfo", "neterror", "04")), b && b.isRetry && b.retryTimes >= 3 && (d.isLastRetry = 1), b && b.isEmRetry && (d.isLastRetry = 1), d.errCode && d.exem && (d.errCode += "." + d.exem), m.context.msg.broadcast("getinfoFinish", d)
                    },
                    r = function (a) {
                        a = a || {}, "444" == a.code ? a.timeout ? a.errCode = Txplayer.errcode.getPlatformErrorCode("getinfo", "neterror", "03") : a.errCode = Txplayer.errcode.getPlatformErrorCode("getinfo", "neterror", "01") : a.code ? a.errCode = Txplayer.errcode.getPlatformErrorCode("getinfo", "cgiInnerError", a.code) : a.errCode = Txplayer.errcode.getPlatformErrorCode("getinfo", "cgiInnerError", "04"), a.errCode && a.exem && (a.errCode += "." + a.exem), n.reject(a)
                    },
                    s = function (a) {
                        var b = "";
                        return f.each(a, function (a, c) {
                            "mp4" == c.name && (b = c.id)
                        }), b
                    };
                delete j.cgi;
                var t = f.jsonp({
                    url: k,
                    data: j,
                    timeout: 6e3,
                    callback: Txplayer.util.getJsonpCallbackName("getinfo")
                }).done(function (c) {
                    var d, e, g, h = m.checkGetInfoData(c),
                        k = {};
                    if (1 === h) {
                        if (m.gContext.dataset.currentDefinitionFormat = s(c.fl.fi), d = m.checkGetinfoRetCode(c), c.iRetCode = d.iRetCode, 83 === d.iRetCode) return i.showInfo("\u4ed8\u8d39\u4fe1\u606f", "\u5f53\u524d\u89c6\u9891\u9700\u8981\u4ed8\u8d39\u89c2\u770b,vid=" + j.vids), void n.reject({
                            code: 83
                        }, c);
                        if (0 !== d.iRetCode) return Txplayer.util.error(d.iRetCode), void r(c);
                        try {
                            m.gContext.dataset.reportClip = d.vi.fc || d.vi.cl.fc, m.gContext.dataset.reportStatus = d.vi.vst, m.gContext.dataset.reportType = d.vi.type, m.gContext.dataset.reportTestId = c.tstid, m.gContext.dataset.reportUsrIP = c.ip, m.gContext.dataset.cdnID = d.vi.ul.ui[0].vt, m.gContext.dataset.currentDefinitionRate = d.vi.br
                        } catch (l) {}
                        1 == c.dltype ? (e = m.getPcVideoMp4Url(c), e || 83 !== d.iRetCode || n.reject({
                            code: 83
                        }, c), "array" === f.type(e) && e.length && e[0].urlArray && e[0].urlArray.length && (e[0].urlArray.forEach(function (a, b) {
                            a.url = a.url + "&vkey=" + d.vi.fvkey + "&platform=2"
                        }), g = e[0].urlArray[0].url), m.dataset.sectionsData = e, m.dataset.firstSectionUrl = g, m.dataset.getinfoData = c, m.dataset.definitionList = m.getDefinitionListFromData(c), n.resolve(g, e, m.dataset.definitionList, c), m.context.msg.broadcast("reportGetinfo", {
                            filename: d.vi.fn,
                            cdnIp: Txplayer.util.getHostNameByUrl(d.vi.ul.ui[0].url),
                            cdnId: d.vi.ul.ui[0].vt,
                            vkey: d.vi.fvkey
                        }), q(null)) : 3 == c.dltype && (e = m.getPcVideoMp4Url(c), "array" === f.type(e) && e.length && e[0] && e[0].urlArray && e[0].urlArray[0] && e[0].urlArray[0].url && (g = e[0].urlArray[0].url), m.dataset.sectionsData = e, m.dataset.firstSectionUrl = g, m.dataset.getinfoData = c, m.dataset.definitionList = m.getDefinitionListFromData(c), n.resolve(g, e, m.dataset.definitionList, c), m.context.msg.broadcast("reportGetinfo", {
                            filename: d.vi.fn,
                            cdnIp: Txplayer.util.getHostNameByUrl(d.vi.ul.ui[0].url),
                            cdnId: d.vi.ul.ui[0].vt
                        }), q(null))
                    } else {
                        k = {
                            exem: c.exem,
                            code: c.em
                        }, q(k);
                        var o;
                        b.isEmRetry ? r(k) : (o = {
                            defer: n,
                            isEmRetry: !0
                        }, 85 == c.em && c.exem == -3 && c.curTime ? m.getRetryCkey(c.curTime, m.dataset.vid).done(function (b) {
                            f.extend(a, b.param), p.call(m, a, o)
                        }).fail(function () {
                            p.call(m, a, o)
                        }) : p.call(m, a, o))
                    }
                }).fail(function (c, d) {
                    if (!d || "abort" !== d) {
                        q(d);
                        var e;
                        b && b.retryTimes && b.retryTimes >= 3 ? r({
                            code: 444,
                            timeout: "timeout" === d,
                            costTime: +new Date - o
                        }) : (b.hasOwnProperty("retryTimes") ? b.retryTimes++ : b.retryTimes = 1, e = {
                            defer: n,
                            isRetry: !0,
                            retryTimes: b.retryTimes,
                            cgi: m.getRequestUrl({
                                type: "getinfo",
                                retry: !0,
                                retryTimes: b.retryTimes
                            })
                        }, p.call(m, a, e))
                    }
                });
                return this.context.msg.off("vidChange.requestGetinfo").on("vidChange.requestGetinfo", function () {
                    t && t.abort && t.abort()
                }), this.context.msg.off("seekStart.requestGetinfo").on("seekStart.requestGetinfo", function () {
                    t && t.abort && t.abort()
                }), this.context.msg.off("userStopVideo.requestGetinfo").on("userStopVideo.requestGetinfo", function () {
                    t && t.abort && t.abort()
                }), n
            }, getHDVideoVkey: function (a) {
                function b(a) {
                    for (var b = 0, c = a.length; b < c; b++)
                        if (1 == a[b].sl) return a[b].id;
                    return -1
                }
                var c = this,
                    d = f.Deferred(),
                    g = this.getRequestUrl({
                        type: "getkey"
                    }),
                    h = {
                        otype: "json",
                        vid: a.vid,
                        format: b(this.dataset.getinfoData.fl.fi),
                        filename: a.newFileName,
                        platform: this.gContext.dataset.platform,
                        appVer: Txplayer.dataset.ver,
                        vt: a.vt,
                        sdtfrom: this.gContext.dataset.sdtfrom,
                        guid: this.gContext.dataset.guid,
                        flowid: this.gContext.dataset.flowid,
                        linkver: 2,
                        lnk: this.gContext.dataset.getinfoJSON.vl.vi[0].lnk,
                        charge: a.isNeedPay ? 1 : 0,
                        _rnd: i.getTimeStampStr()
                    };
                this.gContext.dataset.unid && (h.unid = this.gContext.dataset.unid), this.gContext.dataset.authfrom && (h.auth_from = this.gContext.dataset.authfrom), this.gContext.dataset.authext && (h.auth_ext = this.gContext.dataset.authext);
                var k = e.$xx(h.platform, h.vid || h.vids, h.sdtfrom, 1, h._rnd);
                k && k.u1 && k.u2 && k.c && (h._qv_rmt = k.u1, h._qv_rmt2 = k.u2, i.cookie.set("qv_als", k.c));
                var l, m = function () {
                        return r > c.gContext.config.keyRetryTimes
                    },
                    n = +new Date,
                    o = function (a) {
                        var b = +new Date,
                            d = {
                                endTime: b,
                                startTime: n,
                                getkeyURL: g + "&" + f.param(h),
                                costTime: b - n,
                                isLastRetry: m()
                            };
                        a && "object" === f.type(a) ? (d.err = "error", d = f.extend(d, a), a.em && (d.code = a.em)) : a && "string" === f.type(a) && (d.err = a, "timeout" == a && (d.code = 600)), d.errCode = p(a), c.context.msg.broadcast("getkeyFinish", d)
                    },
                    p = function (a) {
                        a = a || {}, !a.err && a.em && (a.err = "error"), !a.code && a.em && (a.code = a.em);
                        var b = "";
                        return "error" === a ? b = Txplayer.errcode.getPlatformErrorCode("getkey", "neterror", "01") : "timeout" === a ? b = Txplayer.errcode.getPlatformErrorCode("getkey", "neterror", "03") : a.errCode ? b = a.errCode : "timeout" === a.err ? b = Txplayer.errcode.getPlatformErrorCode("getkey", "neterror", "03") : "no key" === a.err ? b = Txplayer.errcode.getPlatformErrorCode("getkey", "neterror", "04") : a.err && !a.hasOwnProperty("code") ? b = Txplayer.errcode.getPlatformErrorCode("getkey", "neterror", "01") : a.err && a.hasOwnProperty("code") && (b = Txplayer.errcode.getPlatformErrorCode("getkey", "cgiInnerError", a.code + "")), b && a.exem && (b += "." + a.exem), b
                    },
                    q = function (a) {
                        return a = a || {}, a.code = a.code || a.em, delete a.em, "445" == a.code ? a.timeout ? a.errCode = Txplayer.errcode.getPlatformErrorCode("getkey", "neterror", "03") : a.errCode = Txplayer.errcode.getPlatformErrorCode("getkey", "neterror", "01") : !a || f.isEmptyObject(a) || a.code || a.key ? a.errCode = Txplayer.errcode.getPlatformErrorCode("getkey", "cgiInnerError", a.code || "") : a.errCode = Txplayer.errcode.getPlatformErrorCode("getkey", "neterror", "04"), a.errCode && a.exem && (a.errCode += "." + a.exem), a && a.code && f.inArray(a.code + "", j) > -1 ? void d.reject(a) : m() ? (a.code || (a.code = 445), void d.reject(a)) : (r++, c.context.msg.broadcast("getkeyStart"), void(l = f.jsonp({
                            url: a.url || g,
                            data: h,
                            timeout: 6e3,
                            callback: Txplayer.util.getJsonpCallbackName("getkey")
                        }).done(function (b) {
                            b && b.key ? (d.resolve(b.key), o(null)) : (b.code || (b.code = a.em), a.em && !b.key && (b.err = "no key"), o(b), q(b))
                        }).fail(function (a, b) {
                            b && "abort" === b || (o(b), q({
                                code: 445,
                                url: c.getRequestUrl({
                                    type: "getkey",
                                    retry: !0,
                                    retryTimes: r
                                }),
                                timeout: "timeout" === b
                            }))
                        })))
                    },
                    r = 0;
                return q(), this.context.msg.off("vidChange.getHDVideoVkey").on("vidChange.getHDVideoVkey", function () {
                    l && l.abort && l.abort()
                }), this.context.msg.off("userStopVideo.getHDVideoVkey").on("userStopVideo.getHDVideoVkey", function () {
                    l && l.abort && l.abort()
                }), d
            }, getStaticVideoInfo: function (a) {
                var b, c = f.Deferred(),
                    d = {
                        otype: "json",
                        vid: a.vid,
                        platform: a.platform || "11001",
                        h5flag: 1
                    };
                (i.browser.mqq || i.browser.wechat) && "view.inews.qq.com" === location.hostname ? (d.platform = "20701", b = "http://h5wx.video.qq.com/getextinfo?callback=?&", "https:" === location.protocol && (b = "https://h5wx.video.qq.com/getextinfo?callback=?&")) : (b = "http://h5vv.video.qq.com/getextinfo?callback=?&", "https:" === location.protocol && (b = "https://h5vv.video.qq.com/getextinfo?callback=?&"));
                var e = this.context.msg.getData("isInAuthRuleList");
                e && (d.haskey = 1);
                var g, h = function () {
                    return g = f.ajax({
                        url: b,
                        data: d,
                        dataType: "jsonp",
                        jsonpCallback: Txplayer.util.getJsonpCallbackName("getextinfo")
                    }).done(function (a) {
                        a ? c.resolve(a) : c.reject()
                    }).fail(function () {
                        c.reject()
                    }), c
                };
                return this.context.msg.off("vidChange.getStaticVideoInfo").on("vidChange.getStaticVideoInfo", function () {
                    g && g.abort && g.abort()
                }), h()
            }, getRetryCkey: function (a, b) {
                var c, d, e = f.Deferred(),
                    g = function () {
                        var c, d, f = {
                            vid: b,
                            timestamp: a
                        };
                        i.os.ios ? (c = window.x5.ios.getBrowserSignature, d = i.os.ipad ? f : "vid:" + f.vid + "[" + f.timestamp + "]") : (c = window.x5.android.getBrowserSignature, d = "vid:" + f.vid + "[" + f.timestamp + "]"), c(d, function (b) {
                            var c;
                            "object" == typeof b && b.key && b.ver && b.platform ? (c = {
                                param: {
                                    cKey: b.key,
                                    encryptVer: b.ver,
                                    platform: b.platform,
                                    _rnd: a
                                }
                            }, e.resolve(c)) : "object" == typeof b && b.data ? (c = {
                                param: {
                                    cKey: b.data,
                                    encryptVer: "4.0",
                                    platform: "161001",
                                    _rnd: a
                                }
                            }, e.resolve(c)) : "string" == typeof b ? (c = {
                                param: {
                                    cKey: b,
                                    encryptVer: "4.0",
                                    platform: "161001",
                                    _rnd: a
                                }
                            }, e.resolve(c)) : e.reject()
                        }, function () {
                            e.reject()
                        })
                    };
                return c = window.x5 && window.x5.ios && "function" === f.type(window.x5.ios.getBrowserSignature), d = window.x5 && "function" === f.type(window.x5.getBrowserSignature), c || d ? g() : e.reject(), e
            }
        }, a.exports = d
    }, 67: function (a, b) {
        var c = {};
        c.ha = function (a) {
            function b(a, b) {
                return ((a >> 1) + (b >> 1) << 1) + (1 & a) + (1 & b)
            }
            for (var c = [], d = 0; d < 64;) c[d] = 0 | 4294967296 * Math.abs(Math.sin(++d));
            var e = function (d) {
                for (var e, f, g, h, i = [], j = window.unescape(encodeURI(d)), k = j.length, l = [e = 1732584193, f = -271733879, ~e, ~f], m = 0; m <= k;) i[m >> 2] |= (j.charCodeAt(m) || 128) << 8 * (m++ % 4);
                for (i[d = (k + 8 >> 6) * a + 14] = 8 * k, m = 0; m < d; m += a) {
                    for (k = l, h = 0; h < 64;) k = [g = k[3], b(e = k[1], (g = b(b(k[0], [e & (f = k[2]) | ~e & g, g & e | ~g & f, e ^ f ^ g, f ^ (e | ~g)][k = h >> 4]), b(c[h], i[[h, 5 * h + 1, 3 * h + 5, 7 * h][k] % a + m]))) << (k = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, a, 23, 6, 10, 15, 21][4 * k + h++ % 4]) | g >>> 32 - k), e, f];
                    for (h = 4; h;) l[--h] = b(l[h], k[h])
                }
                for (d = ""; h < 32;) d += (l[h >> 3] >> 4 * (1 ^ 7 & h++) & 15).toString(a);
                return d
            };
            return e
        }(16), c.stringToHex = function (a) {
            for (var b = "", c = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), d = 0; d < a.length; d++) b += c[a.charCodeAt(d) >> 4] + c[15 & a.charCodeAt(d)];
            return b
        }, c.hexToString = function (a) {
            for (var b = "", c = "0x" == a.substr(0, 2) ? 2 : 0; c < a.length; c += 2) b += String.fromCharCode(parseInt(a.substr(c, 2), 16));
            return b
        }, c._Seed = "#$#@#*ad", c.tempcalc = function (a, b) {
            for (var c = "", d = 0; d < a.length; d++) c += String.fromCharCode(a.charCodeAt(d) ^ b.charCodeAt(d % 4));
            return c
        }, c.u1 = function (a, b) {
            for (var c = "", d = b; d < a.length; d += 2) c += a.charAt(d);
            return c
        }, c._urlStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c.urlenc = function (a, b, d) {
            for (var e, f, g, h, i, j, k, l = "", m = 0; m < a.length;) e = a.charCodeAt(m++), f = a.charCodeAt(m++), g = a.charCodeAt(m++), 15 == m && (l += "A", l += b, l += d), h = e >> 2, i = (3 & e) << 4 | f >> 4, j = (15 & f) << 2 | g >> 6, k = 63 & g, isNaN(f) ? j = k = 64 : isNaN(g) && (k = 64), l = l + c._urlStr.charAt(h) + c._urlStr.charAt(i) + c._urlStr.charAt(j) + c._urlStr.charAt(k);
            return l
        }, c.$xx = function (a, b, d, e, f) {
            f = f || parseInt(+new Date / 1e3), e = ("" + e).charAt(0);
            var g = "",
                h = "",
                i = {
                    plt: a || "",
                    vid: b || "",
                    std: d || "",
                    sts: e || "",
                    ts: f,
                    rf: g,
                    ua: h
                };
            i = window.JSON ? JSON.stringify(i) : function () {
                var a = [];
                for (var b in i) a.push('"' + b + '":"' + i[b] + '"');
                return "{" + a.join(",") + "}"
            }(i);
            var j = c.hexToString(c.ha(a + b + f + c._Seed + g + h + e.charAt(0) + d)),
                k = c.urlenc(c.tempcalc(j, c._Seed), e.charAt(0), f),
                l = c.urlenc(c.tempcalc(j, "86FG@hdf"), e.charAt(0), f),
                m = c.u1(k, 0),
                n = c.u1(k, 1);
            return {
                p: i,
                u: k,
                c: l,
                u1: m,
                u2: n,
                t: f
            }
        }, a.exports = c
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
    }, 69: function (a, b) {
        function c(a) {
            var b = {
                getinfo: ["http://h5vv.video.qq.com/getinfo?callback=?", "https://h5vv.video.qq.com/getinfo?callback=?"],
                edugetvinfo: ["http://sv.video.qq.com/edugetvinfo?callback=?", "https://sv.video.qq.com/edugetvinfo?callback=?"],
                mvgetinfo: ["http://sv.video.qq.com/mvgetinfo?callback=?", "https://sv.video.qq.com/mvgetinfo?callback=?"],
                getinfoInews: ["http://h5wx.video.qq.com/getinfo?callback=?", "https://h5wx.video.qq.com/getinfo?callback=?"],
                getvinfo: ["http://h5vv.video.qq.com/getvinfo?callback=?", "https://h5vv.video.qq.com/getvinfo?callback=?"],
                getkey: ["http://h5vv.video.qq.com/getkey?callback=?", "https://h5vv.video.qq.com/getkey?callback=?"],
                mvgetkey: ["http://sv.video.qq.com/mvgetkey?callback=?", "https://sv.video.qq.com/mvgetkey?callback=?"],
                getkeyInews: ["http://h5wx.video.qq.com/getkey?callback=?", "https://h5wx.video.qq.com/getkey?callback=?"],
                zb: ["http://info.zb.video.qq.com/?callback=?", "https://info.zb.video.qq.com/?callback=?"],
                rmd_mobile: ["http://like.video.qq.com/fcgi-bin/rmd_mobile?callback=?", "https://like.video.qq.com/fcgi-bin/rmd_mobile?callback=?"],
                like: ["http://like.video.qq.com/fcgi-bin/like?", "https://like.video.qq.com/fcgi-bin/like?"],
                dataout_ex: ["http://sns.video.qq.com/fcgi-bin/dlib/dataout_ex?", "https://sns.video.qq.com/fcgi-bin/dlib/dataout_ex?"],
                get_dtype: ["http://h5vv.video.qq.com/getdtype?", "https://h5vv.video.qq.com/getdtype?"]
            };
            return "https:" === window.location.protocol ? b[a][1] : b[a][0]
        }

        function d(a) {
            return e = Txplayer.$, this.context = a.context, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = f.AppHelper,
            h = [{
                reg: function () {
                    return !!this.cfg.noAuth
                }, request: function (a) {
                    var b = this;
                    a.resolve({
                        param: {
                            vids: b.cfg.vid,
                            defaultfmt: b.cfg.fmt
                        }
                    })
                }
            }, {
                reg: function () {
                    var a;
                    return a = f.isInIframe() ? f.getHostname(document.referrer) : window.location.hostname, !!(a && a.indexOf("weishi.qq.com") > -1)
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "110701",
                            sdtfrom: "v7015"
                        }
                    })
                }
            }, {
                reg: function () {
                    return !(!this.cfg.eduext && !this.cfg.authext || location.href.indexOf("campus.qq.com") !== -1)
                }, request: function (a) {
                    var b = this;
                    a.resolve({
                        cgi: c("edugetvinfo"),
                        param: {
                            eduext: b.cfg.eduext,
                            platform: f.mobile ? "261001" : "260201",
                            vid: b.cfg.vid,
                            defn: b.cfg.fmt
                        }
                    })
                }
            }, {
                reg: function () {
                    return "kuaibao.qq.com" === location.hostname
                }, request: function (a) {
                    var b = this;
                    a.resolve({
                        cgi: c("getinfo"),
                        param: {
                            platform: "570701",
                            vid: b.cfg.vid,
                            sdtfrom: "v7152"
                        }
                    })
                }
            }, {
                reg: function () {
                    return 1 === this.cfg.classType
                }, request: function (a) {
                    var b = this;
                    a.resolve({
                        cgi: c("edugetvinfo"),
                        param: {
                            platform: 221001,
                            vid: b.cfg.vid,
                            defn: b.cfg.fmt
                        }
                    })
                }
            }, {
                reg: function () {
                    if (window !== top && "v.qq.com" === location.hostname && "/iframe/player.html" === location.pathname) {
                        var a = f.getParams(location.href);
                        if (a && a.cKey && a.encryptVer && a.platform) return this.params = a, !0
                    }
                    return !1
                }, request: function (a) {
                    var b, d = this,
                        e = {
                            cgi: c("getinfo"),
                            param: {
                                encryptVer: d.params.encryptVer,
                                platform: d.params.platform,
                                cKey: d.params.cKey,
                                vids: d.cfg.vid,
                                defaultfmt: d.cfg.fmt
                            }
                        };
                    try {
                        b = window.parent.location.href
                    } catch (f) {}
                    b && (e.param.wxrefer = b), a.resolve(e)
                }
            }, {
                reg: function () {
                    return !(!f.browser.mqq || "xiaoqu.qq.com" !== window.location.hostname && "buluo.qq.com" !== window.location.hostname)
                }, request: function (a) {
                    if (!window.getBrowserSignature) return void a.reject();
                    var b = this;
                    window.getBrowserSignature(b.cfg.vid, function (c) {
                        var d;
                        if (c && c.data) try {
                            var e = JSON.parse(c.data);
                            e && e.result && e.result.token && (d = e.result.token)
                        } catch (g) {}
                        d ? a.resolve({
                            param: {
                                cKey: d,
                                encryptVer: "6.4",
                                platform: f.os.ios ? "170408" : "170308",
                                vids: b.cfg.vid,
                                defaultfmt: b.cfg.fmt
                            }
                        }) : a.reject()
                    })
                }
            }, {
                reg: function () {
                    return "qzs.qq.com" == window.location.hostname && (window.location.href.indexOf("//qzs.qq.com/open/mobile") > -1 || window.location.href.indexOf("//qzs.qq.com/open/yyb/") > -1)
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "2730701",
                            sdtfrom: "v7002"
                        }
                    })
                }
            }, {
                reg: function () {
                    return "viewlite.inews.qq.com" == window.location.hostname || "rl.inews.qq.com" == window.location.hostname || "album.sparta.html5.qq.com" == window.location.hostname
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "5750701",
                            sdtfrom: "v7003"
                        }
                    })
                }
            }, {
                reg: function () {
                    return !!(window.location.hostname && window.location.hostname.indexOf("lexiangla.com") > -1)
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "3570701",
                            sdtfrom: "v7005"
                        }
                    })
                }
            }, {
                reg: function () {
                    return !(!f.browser.mqqbrowser || f.browser.mqq || f.browser.wechat || f.browser.qqdownloader || window !== top)
                }, request: function (a) {
                    var b, d, h = this,
                        i = "undefined" != typeof h.cfg.svr_time ? h.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "",
                        j = function () {
                            var b, d, e = {
                                vid: h.cfg.vid
                            };
                            e.timestamp = i, f.os.ios ? (b = window.x5.ios.getBrowserSignature, d = f.os.ipad ? e : "vid:" + e.vid + "[" + e.timestamp + "]") : (b = window.x5.android.getBrowserSignature, d = "vid:" + e.vid + "[" + e.timestamp + "]"), b(d, function (b) {
                                var d;
                                "object" == typeof b && b.key && b.ver && b.platform ? (d = {
                                    cgi: c("getvinfo"),
                                    param: {
                                        cKey: b.key,
                                        encryptVer: b.ver,
                                        platform: b.platform,
                                        vid: h.cfg.vid,
                                        defn: h.cfg.fmt,
                                        cgiType: "getvinfo"
                                    }
                                }, a.resolve(d)) : "object" == typeof b && b.data ? (d = {
                                    cgi: c("getvinfo"),
                                    param: {
                                        cKey: b.data,
                                        encryptVer: "4.0",
                                        platform: "161001",
                                        vid: h.cfg.vid,
                                        defn: h.cfg.fmt,
                                        cgiType: "getvinfo"
                                    }
                                }, a.resolve(d)) : "string" == typeof b ? (d = {
                                    cgi: c("getvinfo"),
                                    param: {
                                        cKey: b,
                                        encryptVer: "4.0",
                                        platform: "161001",
                                        vid: h.cfg.vid,
                                        defn: h.cfg.fmt,
                                        cgiType: "getvinfo"
                                    }
                                }, a.resolve(d)) : a.reject()
                            }, function () {
                                a.reject()
                            })
                        };
                    b = window.x5 && window.x5.ios && "function" === e.type(window.x5.ios.getBrowserSignature), d = window.x5 && "function" === e.type(window.x5.getBrowserSignature), b || d ? j() : g.loadMqqBrowserAPI().done(function () {
                        b = window.x5 && window.x5.ios && "function" === e.type(window.x5.ios.getBrowserSignature), d = window.x5 && "function" === e.type(window.x5.getBrowserSignature), b || d ? j() : a.reject()
                    }).fail(function () {
                        a.reject()
                    })
                }
            }, {
                reg: function () {
                    return !!f.browser.kuaibao
                }, request: function (a) {
                    var b, c, d, e = this,
                        g = e.cfg.vid,
                        h = "undefined" != typeof e.cfg.svr_time ? e.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "",
                        i = "TVP_KUAIBAO_CB_" + h.substr(-4, 4);
                    if (window.top !== window) {
                        try {
                            var j = window.top.location.href;
                            j && (b = window.top, c = b.document)
                        } catch (k) {
                            d = !0
                        }
                        if (d) return void a.reject()
                    } else b = window, c = b.document;
                    b[i] = function (b) {
                        var c;
                        try {
                            c = JSON.parse(b)
                        } catch (d) {}
                        if (c && c.key && c.ver && c.platform && c.sdtfrom) {
                            var f = {
                                param: {
                                    cKey: c.key,
                                    encryptVer: c.ver,
                                    platform: c.platform,
                                    sdtfrom: c.sdtfrom,
                                    vid: e.cfg.vid,
                                    defaultfmt: "mp4",
                                    clip: 4
                                }
                            };
                            a.resolve(f)
                        } else a.reject()
                    };
                    var l = function () {
                            var a = {
                                    method: "getCKey",
                                    types: ["string", "string", "string"],
                                    args: [g, h, i],
                                    instanceName: "TencentNewsScriptControllerJsInterface"
                                },
                                b = "jsbridge://get_with_json_data?json=" + encodeURIComponent(JSON.stringify(a)) + "&_t=" + h,
                                c = new Image;
                            c.src = b
                        },
                        m = function () {
                            var a = function () {
                                b.getBrowserSignature(g, h, i)
                            };
                            "function" == typeof b.getBrowserSignature ? (a(), c.addEventListener("TencentNewsJSInjectionComplete", function () {
                                a()
                            })) : c.addEventListener("TencentNewsJSInjectionComplete", function () {
                                a()
                            })
                        };
                    f.os.ios ? m() : f.os.android ? l() : a.reject()
                }
            }, {
                reg: function () {
                    return !(!f.browser.qqnews || f.browser.qqnewsAd)
                }, request: function (a) {
                    var b, c, d, g = this,
                        h = g.cfg.vid,
                        i = "undefined" != typeof g.cfg.svr_time ? g.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "",
                        j = "TVP_KUAIBAO_CB_" + i.substr(-4, 4);
                    if (window.top !== window) {
                        try {
                            var k = window.top.location.href;
                            k && (b = window.top, c = b.document)
                        } catch (l) {
                            d = !0
                        }
                        if (d) return void a.reject()
                    } else b = window, c = b.document;
                    b[j] = function (b) {
                        var c;
                        try {
                            c = JSON.parse(b)
                        } catch (d) {}
                        if (c && c.key && c.ver && c.platform && c.sdtfrom) {
                            var e = {
                                param: {
                                    cKey: c.key,
                                    encryptVer: c.ver,
                                    platform: c.platform,
                                    sdtfrom: c.sdtfrom,
                                    vid: g.cfg.vid,
                                    defaultfmt: "mp4",
                                    clip: 4
                                }
                            };
                            a.resolve(e)
                        } else a.reject()
                    };
                    var m = function () {
                            var a = function () {
                                window.TencentNews.invoke("getCKey", h, i, j)
                            };
                            window.TencentNews && window.TencentNews.invoke ? a() : e.getScript("//mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1", function () {
                                window.TencentNews && window.TencentNews.invoke && a()
                            })
                        },
                        n = function () {
                            var a = function () {
                                b.getBrowserSignature(h, i, j)
                            };
                            "function" == typeof b.getBrowserSignature ? (a(), c.addEventListener("TencentNewsJSInjectionComplete", function () {
                                a()
                            })) : c.addEventListener("TencentNewsJSInjectionComplete", function () {
                                a()
                            })
                        };
                    f.os.ios ? n() : f.os.android ? m() : a.reject()
                }
            }, {
                reg: function () {
                    return !(!f.browser.douban && !f.browser.liebao)
                }, request: function (a) {
                    var b, c = this,
                        d = "undefined" != typeof c.cfg.svr_time ? c.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "",
                        e = function () {
                            if (!window.getBrowserSignature) return void a.reject();
                            try {
                                b = window.getBrowserSignature(c.cfg.vid, d)
                            } catch (e) {}
                            if (b && b.key && b.ver && b.platform) {
                                var f = {
                                    param: {
                                        cKey: b.key,
                                        encryptVer: b.ver,
                                        platform: b.platform,
                                        vid: c.cfg.vid,
                                        defaultfmt: c.cfg.fmt
                                    }
                                };
                                a.resolve(f)
                            } else a.reject()
                        };
                    e()
                }
            }, {
                reg: function () {
                    return !(!f.browser.mqq || "mqqcartoon" !== f.getUrlParam("openS"))
                }, request: function (a) {
                    var b = this,
                        d = "undefined" != typeof b.cfg.svr_time ? b.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "";
                    e.getScript("http://imgcache.qq.com/club/client/comic/release/js/util/qqComicVideoAuth.js?t=" + d, function () {
                        "function" === e.type(window.getBrowserSignature) ? window.getBrowserSignature(b.cfg.vid, function (d) {
                            if (d && d !== -1) {
                                var e = {
                                    cgi: c("getvinfo"),
                                    param: {
                                        cKey: d,
                                        encryptVer: "6.4",
                                        platform: "170101",
                                        vid: b.cfg.vid,
                                        defn: b.cfg.fmt
                                    }
                                };
                                a.resolve(e)
                            }
                        }) : a.reject()
                    })
                }
            }, {
                reg: function () {
                    return f.isNews()
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "20701"
                        }
                    })
                }
            }, {
                reg: function () {
                    return f.isNewsPlugin()
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "5430701",
                            sdtfrom: "v7013"
                        }
                    })
                }
            }, {
                reg: function () {
                    return "yoo.qq.com" === window.location.hostname
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "4450701",
                            sdtfrom: "v7158"
                        }
                    })
                }
            }, {
                reg: function () {
                    function a(a, b) {
                        var c = a.replace(/\?/g, ".").replace(/#/g, "\\d").replace(/\*+/g, ".*");
                        return new RegExp("^" + c + "$", "i").test(b)
                    }
                    var b = ["lol.qq.com", "lolm.qq.com", "lole.qq.com", "lpl.qq.com"],
                        c = ["*.lol.qq.com", "*.lolm.qq.com", "*.lole.qq.com", "*.lpl.qq.com"];
                    if (b.indexOf(window.location.hostname) > -1) return !0;
                    for (var d = 0, e = c.length; d < e; d++)
                        if (a(c[d], window.location.hostname)) return !0;
                    return !1
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "5290701",
                            sdtfrom: "v7012"
                        }
                    })
                }
            }, {
                reg: function () {
                    return "qc.vip.qq.com" == window.location.hostname || "cdn.vip.qq.com" == window.location.hostname
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "4860701",
                            sdtfrom: "v7159"
                        }
                    })
                }
            }, {
                reg: function () {
                    return "h5.maobing.qq.com" == window.location.hostname || "h5test.maobing.qq.com" == window.location.hostname
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "5020701",
                            sdtfrom: "v7161"
                        }
                    })
                }
            }, {
                reg: function () {
                    return "m.v.qq.com" != window.location.hostname && "v.qq.com" != window.location.hostname
                }, request: function (a) {
                    a.resolve({
                        param: {
                            platform: "4810701",
                            sdtfrom: "v7157"
                        }
                    })
                }
            }];
        d.prototype = {
            init: function () {
                return this.exportsModuleApis(), this.reg_request
            }, reg_request: function (a, b) {
                var c = this;
                c.cfg = a, c.cfg2 = b;
                var d = e.Deferred(),
                    f = !1;
                return e(h).each(function (a, b) {
                    return "function" !== e.type(b.reg) || ("function" !== e.type(b.request) || (!b.reg.call(c) || (f = !0, b.request.call(c, d), !1)))
                }), f || d.reject(), setTimeout(function () {
                    d.reject()
                }, 6e3), d
            }, exportsModuleApis: function () {
                var a = this;
                this.context.msg.setData("isInAuthRuleList", function (b, c) {
                    var d = !1;
                    a.cfg = {}, a.cfg2 = {}, e(h).each(function (b, c) {
                        return "function" !== e.type(c.reg) || (!c.reg.call(a) || (d = !0, !1))
                    }), c.data = d
                })
            }
        }, a.exports = d
    }, 70: function (a, b) {
        var c = ["cid", "autoplay", "title", "playEndTime", "playStartTime", "connectionPlayType", "isInteract", "tpid", "authext", "eduext", "authfrom"];
        a.exports = c
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
        a.exports = c(171)
    }, 171: function (a, b) {
        function c(a) {
            d = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }
        var d = Txplayer.$,
            e = Txplayer.util;
        c.prototype = {
            init: function () {
                if (this.context.config.isContinuePlay || this.context.config.showVipTips) {
                    this.dataset.key = "txp_continue_play_time", this.dataset.tipsKey = "txp_vip_tips_time", this.dataset.max = 5, this.dataset.hasSkiped = !1;
                    var a = this.context.dataset.vid || this.context.config.vid,
                        b = this.getLocalStorage(a);
                    this.context.dataset.continuePlayTime = b, this.context.dataset.reconnectPlaytime = "", this.write(), this.addEventListener()
                }
            }, write: function () {}, getLocalStorage: function (a) {
                var b = e.getData(this.dataset.key),
                    c = 0;
                if (b) {
                    try {
                        b = JSON.parse(b)
                    } catch (f) {}
                    return d.each(b, function (b, e) {
                        if ("string" === d.type(e)) {
                            var f = e.split("|");
                            f && 2 === f.length && f[0] === a && (c = f[1])
                        }
                    }), parseInt(c, 10)
                }
            }, setLocalStorage: function (a, b) {
                var c = this,
                    f = e.getData(this.dataset.key);
                if (f) {
                    try {
                        f = JSON.parse(f)
                    } catch (g) {}
                    var h = [];
                    d(f).each(function (b, c) {
                        if ("string" === d.type(c)) {
                            var e = c.split("|");
                            e && 2 === e.length && e[0] !== a && (h.push(f[b]), h.length >= 5 && h.shift())
                        }
                    }), b && h.push(a + "|" + b), e.setData(c.dataset.key, JSON.stringify(h))
                } else f = [], f.push(a + "|" + b), e.setData(this.dataset.key, JSON.stringify(f))
            }, getTipsLoacalStorage: function () {
                var a = e.getData(this.dataset.tipsKey);
                return a
            }, setTipsLoacalStorage: function (a) {
                e.setData(this.dataset.tipsKey, a)
            }, setPlayTime: function () {
                if (!this.context.dataset.isPlayingAd && "film" === this.context.dataset.currentPlayListType) {
                    var a = parseInt(this.context.dataset.currentTime, 10),
                        b = this.context.dataset.duration,
                        c = this.context.dataset.vid || this.context.config.vid;
                    if (!(a < 5)) return b - a < 5 ? void this.setLocalStorage(c) : void(0 !== a && a % 3 === 0 && this.setLocalStorage(c, a))
                }
            }, show: function (a) {}, hide: function () {}, skipToPlayTime: function () {
                if (e.os.ios && e.compareVersion(e.os.version, "8.0") < 0) return void this.context.msg.off("videoPlaying.continuePlay");
                if (!this.dataset.hasSkiped && !this.context.dataset.isPlayingAd && "film" === this.context.dataset.currentPlayListType) {
                    this.dataset.hasSkiped = !0;
                    if (this.context.dataset.continuePlayTime) this.context.msg.broadcast("showContinuePlay", this.context.dataset.continuePlayTime), this.context.msg.broadcast("seekTo", this.context.dataset.continuePlayTime, !0), this.context.msg.off("videoPlaying.continuePlay");
                    else if (Txplayer.dataset.isVip && this.context.dataset.isLoadingAdEmpty) {
                        var a = e.cookie.get("hasShowVipTips");
                        a || (this.context.msg.broadcast("showVipTips"), e.cookie.set("hasShowVipTips", "true", "", "", 24))
                    }
                }
            }, reconnectPlay: function () {
                this.context.dataset.reconnectPlaytime && (this.context.msg.broadcast("seekTo", this.context.dataset.reconnectPlaytime, !0), this.context.dataset.reconnectPlaytime = "")
            }, addEventListener: function () {
                this.context.msg.on("videoTimeUpdate", this.setPlayTime.bind(this)), this.context.msg.on("videoPlaying.continuePlay", this.skipToPlayTime.bind(this)), this.context.msg.on("videoPlaying.reconnectPlay", this.reconnectPlay.bind(this))
            }
        }, Txplayer.register("UiContinuePlay", c)
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
        a.exports = c(27)
    }, 27: function (a, b, c) {
        function d(a) {
            this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = (Txplayer.apiList, c(28));
        d.prototype = {
            init: function () {
                !this.context.config.downloadBanner || this.context.config.followBanner || f && f.browser && f.browser.qqlive || (this.dataset.bannerWrapper = this.context.config.bannerWrapper ? e(this.context.config.bannerWrapper).empty() : this.context.dataset.$playermod.parent(), this.dataset.reportPromotionId = "333", this.dataset.status = {
                    1: "down",
                    2: "downloading",
                    3: "pause",
                    4: "install",
                    5: "install",
                    6: "open",
                    7: "open",
                    8: "down"
                }, this.dataset.statusText = {
                    1: this.context.config.freeBannerDownloadText || "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerDownloadText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u66f4\u591a",
                    3: "\u7ee7\u7eed\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u66f4\u591a",
                    4: this.context.config.freeBannerOpenText || "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    5: this.context.config.freeBannerOpenText || "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    6: this.context.config.freeBannerOpenText || "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    7: this.context.config.freeBannerOpenText || "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    8: this.context.config.freeBannerDownloadText || "\u5230\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerDownloadText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267")
                }, this.write(), this.addEventListener())
            }, write: function () {
                var a = {};
                this.dataset.renderData = a;
                var b = e(e.tmpl(g, a));
                this.dataset.bannerWrapper.append(b), this.dataset.$download = b, this.dataset.$downloadBanner = b.find('[data-role="txp-h5-downloadBanner"]'), this.dataset.$downloadBannerText = this.dataset.$downloadBanner.find('[data-role="txp-h5-downloadBannerText"]'), this.dataset.$downloadBannerPro = this.dataset.$downloadBanner.find('[data-role="txp-h5-downloadBannerPro"]'), this.hide()
            }, updateBanner: function (a) {
                1 == a ? (this.changeStatus(6), this.stepReport(6)) : 2 == a ? (this.changeStatus(1), this.stepReport(1)) : a == -1 && (this.changeStatus(8), this.stepReport(1)), this.show(), this.bindClickReport()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$downloadBanner.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.context.dataset.vid,
                        openUrl: a.context.config.openUrl || ""
                    })
                })
            }, changeStatus: function (a) {
                a && (this.dataset.$downloadBanner.attr("data-status", this.dataset.status[a]), this.dataset.$downloadBannerText.attr("data-text", this.dataset.statusText[a]), f.log("d-data-status:" + this.dataset.status[a]))
            }, changeProgress: function (a) {
                this.dataset.$downloadBanner.addClass("txp_nonauto"), a && (f.log(a), this.dataset.$downloadBannerPro.css("width", a + "%"), this.dataset.$downloadBannerText.attr("data-text", "\u4e0b\u8f7d\u4e2d " + a + "%"))
            }, hide: function () {
                this.dataset.$download && this.dataset.$download.addClass(Txplayer.dataset.hideClass)
            }, show: function () {
                this.dataset.$download && this.dataset.$download.removeClass(Txplayer.dataset.hideClass)
            }, stepReport: function (a, b) {
                var c = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || ""
                };
                this.context.msg.broadcast("bannerReport", c)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("beforeAppChecked", function (b) {
                    a.changeStatus(b), a.show()
                }), a.context.msg.on("appChecked", function (b) {
                    a.updateBanner(b)
                }), a.context.msg.on("bannerDownloadStateChange", function (b, c) {
                    b && a.changeStatus(b), void 0 !== c && "2" == b && a.changeProgress(c)
                })
            }
        }, Txplayer.register("H5DownloadBanner", d)
    }, 28: function (a, b) {
        a.exports = '<div class="txp_appbar">\n    <a class="txp_app_btn" data-role="txp-h5-downloadBanner" href="javascript:;">\n        <div class="txp_progress">\n            <div class="txp_progress_current" data-role="txp-h5-downloadBannerPro"></div>\n        </div>\n        <div class="txp_btn_text" data-text="" data-role="txp-h5-downloadBannerText">\n            <div class="txp_app_logo"></div>\n        </div>\n    </a>\n</div>'
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
        a.exports = c(38)
    }, 28: function (a, b) {
        a.exports = '<div class="txp_appbar">\n    <a class="txp_app_btn" data-role="txp-h5-downloadBanner" href="javascript:;">\n        <div class="txp_progress">\n            <div class="txp_progress_current" data-role="txp-h5-downloadBannerPro"></div>\n        </div>\n        <div class="txp_btn_text" data-text="" data-role="txp-h5-downloadBannerText">\n            <div class="txp_app_logo"></div>\n        </div>\n    </a>\n</div>'
    }, 38: function (a, b, c) {
        function d(a) {
            this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(39),
            h = c(28);
        d.prototype = {
            init: function () {
                !this.context.config.followBanner || f && f.browser && f.browser.qqlive || f.isInIframe() || (this.dataset.bannerWrapper = this.context.config.bannerWrapper ? e(this.context.config.bannerWrapper).empty() : this.context.dataset.$playermod.parent(), this.dataset.reportPromotionId = "333", this.dataset.status = {
                    1: "down",
                    2: "downloading",
                    3: "pause",
                    4: "install",
                    5: "install",
                    6: "open",
                    7: "open",
                    8: "down"
                }, this.dataset.statusText = {
                    1: this.context.config.freeBannerDownloadText || "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerDownloadText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.freeBannerDownloadingText || "\u89c2\u770b\u66f4\u591a"),
                    3: "\u7ee7\u7eed\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.freeBannerDownloadingText || "\u89c2\u770b\u66f4\u591a"),
                    4: this.context.config.freeBannerOpenText || "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    5: this.context.config.freeBannerOpenText || "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    6: this.context.config.freeBannerOpenText || "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    7: this.context.config.freeBannerOpenText || "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    8: this.context.config.freeBannerDownloadText || "\u5230\u817e\u8baf\u89c6\u9891\uff0c" + (this.context.config.bannerDownloadText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267")
                }, this.write(), this.addEventListener())
            }, write: function () {
                var a = {};
                this.dataset.renderData = a;
                var b = e(e.tmpl(h, a));
                this.dataset.bannerWrapper.append(b), this.dataset.$download = b, this.dataset.$downloadBanner = b.find('[data-role="txp-h5-downloadBanner"]'), this.dataset.$downloadBannerText = this.dataset.$downloadBanner.find('[data-role="txp-h5-downloadBannerText"]'), this.dataset.$downloadBannerPro = this.dataset.$downloadBanner.find('[data-role="txp-h5-downloadBannerPro"]');
                var c = e(e.tmpl(g, a));
                this.dataset.bannerWrapper.append(c), this.dataset.$follow = c, this.dataset.$followBanner = c.find('[data-role="txp-h5-followBanner"]'), this.dataset.$followOpenBanner = c.find('[data-role="txp-h5-followOpenBanner"]'), this.dataset.$followOpenBannerText = c.find('[data-role="txp-h5-followOpenBanner-text"]'), this.dataset.$followOpenBannerText.attr("data-text", this.context.config.freeBannerOpenText || this.context.config.freeBannerDownloadText || this.context.config.bannerOpenText || this.context.config.bannerDownloadText || "\u6253\u5f00\u817e\u8baf\u89c6\u9891"), this.hideDownloadBanner(), this.hideFollowBanner()
            }, updateBanner: function (a) {
                1 == a ? (this.changeStatus(6), this.stepReport(6, "", "444")) : 2 == a ? (this.changeStatus(1), this.stepReport(1)) : a == -1 && (this.changeStatus(8), this.stepReport(1)), this.add(), this.bindClickReport()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$downloadBanner.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.context.dataset.vid
                    })
                }), this.dataset.$followOpenBanner.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: "444",
                        vid: a.context.dataset.vid,
                        openUrl: a.context.config.openUrl || ""
                    })
                })
            }, changeStatus: function (a) {
                a && (this.dataset.$downloadBanner.attr("data-status", this.dataset.status[a]), this.dataset.$downloadBannerText.attr("data-text", this.dataset.statusText[a])), 6 == a ? (this.showFollowBanner(), this.hideDownloadBanner()) : (this.showDownloadBanner(), this.hideFollowBanner())
            }, changeProgress: function (a) {
                this.dataset.$downloadBanner.addClass("txp_nonauto"), a && (this.dataset.$downloadBannerPro.css("width", a + "%"), this.dataset.$downloadBannerText.attr("data-text", "\u4e0b\u8f7d\u4e2d " + a + "%"))
            }, add: function () {
                var a = this;
                if (!this.dataset.isAdd) {
                    this.dataset.isAdd = !0;
                    var b = encodeURIComponent(e.param(this.getFollowParams()));
                    this.dataset.$followBanner.on("click", function () {
                        a.context.msg.broadcast("bannerClick", {
                            reportPromotionId: "789",
                            vid: a.context.dataset.vid,
                            openUrl: a.context.config.attentionOpenUrl || a.context.dataset.appData.openUrl + "&notice=1&attent_url=" + b
                        })
                    })
                }
            }, getFollowParams: function (a) {
                var b = {};
                switch (a) {
                case 1:
                    b.cmd = 3;
                    break;
                case 2:
                    b.cmd = 5
                }
                return b.vid = this.context.dataset.vid, f.browser.wechat && (b.marketid = 3, b.n_weixin = f.getUrlParam("openid", window != top ? top.location.href.toString() : ""), "" === b.n_weixin && (b.n_weixin = f.getUrlParam("mmuin", window != top ? top.location.href.toString() : ""))), f.browser.mqq && (b.marketid = 4, b.n_qq = f.getUin()), f.os.iphone ? b.platform = 4 : b.platform = 2, b
            }, hideDownloadBanner: function () {
                this.dataset.$download && this.dataset.$download.addClass(Txplayer.dataset.hideClass)
            }, showDownloadBanner: function () {
                this.dataset.$download && this.dataset.$download.removeClass(Txplayer.dataset.hideClass)
            }, hideFollowBanner: function () {
                this.dataset.$follow && this.dataset.$follow.addClass(Txplayer.dataset.hideClass)
            }, showFollowBanner: function () {
                this.dataset.$follow && this.dataset.$follow.removeClass(Txplayer.dataset.hideClass)
            }, stepReport: function (a, b, c) {
                var d = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: c || this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || ""
                };
                this.context.msg.broadcast("bannerReport", d)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("appChecked", function (b) {
                    a.updateBanner(b)
                }), a.context.msg.on("beforeAppChecked", function (b) {
                    a.changeStatus(b)
                }), a.context.msg.on("bannerDownloadStateChange", function (b, c) {
                    b && a.changeStatus(b), void 0 !== c && "2" == b && a.changeProgress(c)
                })
            }
        }, Txplayer.register("H5FollowBanner", d)
    }, 39: function (a, b) {
        a.exports = '<div class="txp_appbar txp_appbar_follow">\n    <a class="txp_app_btn" data-status="open" href="javascript:;" data-role="txp-h5-followOpenBanner">\n        <div class="txp_progress">\n            <div class="txp_progress_current"></div>\n        </div>\n        <div class="txp_btn_text" data-role="txp-h5-followOpenBanner-text">\n            <div class="txp_app_logo"></div>\n        </div>\n    </a>\n    <a class="txp_app_btn_follow" href="javascript:;" data-status="follow" data-role="txp-h5-followBanner">\n        <div class="txp_follow_text">\u52a0\u5165\u770b\u5355</div>\n    </a>\n</div>'
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
        a.exports = c(58)
    }, 58: function (a, b, c) {
        function d(a) {
            this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.util,
            f = c(59);
        d.prototype = {
            init: function () {
                !this.context.config.pauseBanner || e && e.browser && e.browser.qqlive || e.isInIframe() || (this.dataset.reportPromotionId = "222", this.dataset.status = {
                    1: "down",
                    2: "downloading",
                    3: "pause",
                    4: "install",
                    5: "install",
                    6: "open",
                    7: "open",
                    8: "down"
                }, this.dataset.statusText = {
                    1: "\u4e0b\u8f7d",
                    2: "\u4e0b\u8f7d",
                    3: "\u6682\u505c",
                    4: "\u5b89\u88c5",
                    5: "\u5b89\u88c5",
                    6: "\u6253\u5f00",
                    7: "\u6253\u5f00",
                    8: "\u4e0b\u8f7d"
                }, this.write(), this.addEventListener())
            }, write: function () {
                var a = {
                    hideClass: Txplayer.dataset.hideClass,
                    status: "txp-h5-ui-pause-status",
                    progress: "txp-h5-ui-pause-progress",
                    pauseLayer: "txp-h5-ui-pause-layer",
                    btn: "txp-h5-ui-banner-btn"
                };
                this.dataset.renderData = a;
                var b = Txplayer.$.tmpl(f, a);
                this.context.dataset.$playermod.append(b), this.dataset.$status = this.context.dataset.$playermod.find('[data-role="' + a.status + '"]'), this.dataset.$progress = this.context.dataset.$playermod.find('[data-role="' + a.progress + '"]'), this.dataset.$pauseLayer = this.context.dataset.$playermod.find('[data-role="' + a.pauseLayer + '"]'), this.dataset.$btn = this.context.dataset.$playermod.find('[data-role="' + a.btn + '"]')
            }, updateBanner: function (a) {
                1 == a ? this.changeStatus(6) : 2 == a ? this.changeStatus(1) : a == -1 && this.changeStatus(8), this.bindClickReport()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$btn.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.context.dataset.vid
                    })
                })
            }, changeProgress: function (a) {
                this.dataset.$status.addClass("txp_nonauto"), a && this.dataset.$progress.css("width", a + "%")
            }, changeStatus: function (a) {
                a && (this.dataset.$status.attr("data-status", this.dataset.status[a]), this.dataset.$btn.attr("data-text", this.dataset.statusText[a]))
            }, hide: function () {
                this.dataset.$pauseLayer.addClass(Txplayer.dataset.hideClass)
            }, show: function () {
                this.dataset.$pauseLayer.removeClass(Txplayer.dataset.hideClass)
            }, remove: function () {
                this.dataset.$pauseLayer && this.dataset.$pauseLayer.remove()
            }, stepReport: function (a, b) {
                var c = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || ""
                };
                this.context.msg.broadcast("bannerReport", c)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("appChecked", function (b) {
                    a.updateBanner(b)
                }), a.context.msg.on("bannerDownloadStateChange", function (b, c) {
                    b && a.changeStatus(b), void 0 !== c && "2" == b && a.changeProgress(c)
                }), this.dataset.eventsList = {}, this.dataset.eventsList[e.getUniqueMsgKey("videoPlay")] = function () {
                    a.hide()
                }, this.dataset.eventsList[e.getUniqueMsgKey("userPausePlayer")] = function () {
                    a.show()
                }, Txplayer.$.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }
        }, Txplayer.register("H5PauseBanner", d)
    }, 59: function (a, b) {
        a.exports = '<div data-role="<%=pauseLayer%>" class="txp_appbanner txp_appbanner_pause <%=hideClass%>">\n\t<div class="txp_banner_inner">\n\t\t<div class="txp_app_logo" style="background-image:url(//i.gtimg.cn/qqlive/images/20150608/logo_app.png )"></div>\n\t\t<div class="txp_app_wording">\n\t\t\t<div class="txp_wording_title" data-text="\u89c2\u770b\u66f4\u591a\u7cbe\u5f69\u5c0f\u89c6\u9891"></div>\n\t\t\t<div class="txp_wording_desc" data-text="\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891"></div>\n\t\t</div>\n\t\t<div data-role="<%=status%>" class="txp_app_btn" data-status="down" >\n\t\t\t<div class="txp_progress">\n\t\t\t\t<div class="txp_progress_current" data-role="<%=progress%>"></div>\n\t\t\t</div>\n\t\t\t<a data-role="<%=btn%>" class="txp_btn_text" data-text="\u5b89\u88c5" href="javascript:;"></a>\n\t\t</div>\n\t</div>\n</div>'
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
        a.exports = c(40)
    }, 40: function (a, b, c) {
        function d(a) {
            this.dataset = {}, this.context = a, !this.context.config.isShowDurationLimit || e && e.browser && e.browser.qqlive || e.isInIframe() || this.getLimit()
        }
        var e = Txplayer.util,
            f = c(41);
        d.prototype = {
            getLimit: function () {
                return false;
            }, init: function () {
            }, write: function () {
            }, remove: function () {
            }, show: function () {
               
            }, hide: function () {
                
            }, updateBanner: function (a) {
            }, bindClickReport: function () {
                
            }, stepReport: function (a, b) {
            }, addEventListener: function () {
            }, exportsModuleApis: function () {
                var a = this;
                this.dataset.eventsList = {}, this.dataset.eventsList[e.getUniqueMsgKey("videoPlay")] = function (b) {
                    b && "film" == b.playListType && 2 != a.dataset.downloadState && 3 != a.dataset.downloadState && a.show(), b && "film" !== b.playListType && a.hide()
                }, this.dataset.eventsList[e.getUniqueMsgKey("videoEnd")] = function () {
                    a.hide()
                }, this.dataset.eventsList.hideLimitBtn = function () {
                    a.hide()
                }, Txplayer.$.each(this.dataset.eventsList, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }
        }, Txplayer.register("H5FullBanner", d)
    }, 41: function (a, b) {
        a.exports = '<a data-role="<%=fullBtn%>" class="txp_btn_full txp_btn_full_top <%=hideClass%>">\u770b\u5b8c\u6574\u7248</a>'
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
        a.exports = c(81)
    }, 81: function (a, b, c) {
        function d(a) {
            this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(82);
        d.prototype = {
            init: function () {
                f.isInIframe() || (this.dataset.status = {
                    1: "down",
                    2: "downloading",
                    3: "pause",
                    4: "install",
                    5: "install",
                    6: "open",
                    7: "open",
                    8: "down"
                }, this.dataset.statusText = {
                    1: "\u4e0b\u8f7d",
                    2: "\u6b63\u5728\u4e0b\u8f7d",
                    3: "\u6682\u505c",
                    4: "\u5b89\u88c5",
                    5: "\u5b89\u88c5",
                    6: "\u6253\u5f00",
                    7: "\u6253\u5f00",
                    8: "\u6253\u5f00"
                }, this.write(), this.addEventListener())
            }, write: function () {
                var a = {};
                this.dataset.renderData = a;
                var b = e(e.tmpl(g, a));
                this.context.dataset.$playermod.append(b), this.dataset.downloadState = 1, this.dataset.$downloadBanner = b, this.dataset.$downloadBannerText = this.dataset.$downloadBanner.find('[data-role="txp-h5-topBannerText"]'), this.dataset.$downloadBannerPro = this.dataset.$downloadBanner.find('[data-role="txp-h5-topBannerPro"]'), this.hideDownloadBanner()
            }, updateBanner: function () {
                if (this.dataset.appData) {
                    var a = this.dataset.hasApp;
                    1 == a ? this.changeStatus(6) : 2 == a ? this.changeStatus(1) : a == -1 && this.changeStatus(6)
                }
                this.bindClickReport()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$downloadBanner.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.context.dataset.vid
                    })
                })
            }, changeStatus: function (a) {
                a && (this.dataset.$downloadBanner.attr("data-status", this.dataset.status[a]), this.dataset.$downloadBannerText.html(this.dataset.statusText[a])), this.dataset.downloadState = a, 2 == a || 3 == a ? (this.showDownloadBanner(), this.context.msg.broadcast("hideLimitBtn")) : this.hideDownloadBanner()
            }, hideDownloadBanner: function () {
                this.dataset.$downloadBannerPro.addClass(Txplayer.dataset.hideClass), this.dataset.$downloadBanner.addClass(Txplayer.dataset.hideClass)
            }, showDownloadBanner: function () {
                !this.context.dataset.fullBannerShowed && !this.context.dataset.hdClicked || 1 !== this.context.dataset.playState && 2 !== this.context.dataset.playState || (this.dataset.$downloadBannerPro.removeClass(Txplayer.dataset.hideClass), this.dataset.$downloadBanner.removeClass(Txplayer.dataset.hideClass))
            }, stepReport: function (a, b) {
                var c = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || ""
                };
                this.context.msg.broadcast("bannerReport", c)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("appChecked", function (b) {
                    a.updateBanner(b)
                }), a.context.msg.on("bannerDownloadStateChange", function (b) {
                    b && a.changeStatus(b)
                }), a.context.msg.on("setTopReportId", function (b) {
                    a.dataset.reportPromotionId = b
                }), this.context.msg.on("videoPlay", function (b) {
                    !b || "film" !== b.playListType || 2 != a.dataset.downloadState && 3 != a.dataset.downloadState ? a.hideDownloadBanner() : a.showDownloadBanner()
                })
            }
        }, Txplayer.register("H5TopBanner", d)
    }, 82: function (a, b) {
        a.exports = '<txpdiv class="txp_download_helper txp_none" data-status="down" data-role="txp-h5-topBanner">\n    <txpdiv class="txp_dl_text" data-role="txp-h5-topBannerText"></txpdiv>\n    <txpdiv class="txp_progress txp_none" data-role="txp-h5-topBannerPro"><txpdiv class="txp_progress_current"></txpdiv></txpdiv>\n</txpdiv>'
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
        a.exports = c(74)
    }, 74: function (a, b, c) {
        function d(a) {
            this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(75),
            h = c(76),
            i = c(77),
            j = c(78),
            k = c(79),
            l = "//node.video.qq.com/x/vlikecgi/related_rec";
        d.prototype = {
            init: function () {
                this.context.config.recommendBanner && !f.isInIframe() && (this.context.config.endScreenConfig && 2 == this.context.config.endScreenConfig.type || (this.dataset.hasApp = -1, this.dataset.downloadState = 1, this.dataset.reportPromotionId = "111", this.dataset.reportPage = [0], this.dataset.afterAd = !1, this.dataset.rendered = !1, this.dataset.status = {
                    1: "down",
                    2: "downloading",
                    3: "pause",
                    4: "install",
                    5: "install",
                    6: "open",
                    7: "open",
                    8: "down"
                }, this.dataset.downloadText = {
                    1: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    3: "\u6682\u505c\uff0c\u70b9\u51fb\u7ee7\u7eed\u4e0b\u8f7d",
                    4: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    5: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    6: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    7: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    8: "\u5230\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b"
                }, this.write(), this.addEventListener()))
            }, write: function () {
                var a = {},
                    b = e(e.tmpl(g, a));
                this.dataset.$recommend = b, this.context.dataset.$playermod.append(b);
                var c = b.find('[data-role="h5-recommend-relateBox"]'),
                    d = b.find('[data-role="h5-recommend-changeDot"]'),
                    f = b.find('[data-role="h5-recommend-replay"]');
                this.dataset.$changeDot = d, this.dataset.$relateBox = c, this.dataset.$replay = f, this.dataset.$recommend.addClass(Txplayer.dataset.hideClass);
                var h = e(e.tmpl(j, a));
                this.dataset.$recommendBtm = h, this.dataset.$recommendBtm.addClass(Txplayer.dataset.hideClass), this.context.dataset.$playermod.after(this.dataset.$recommendBtm);
                var k = h.find('[data-role="h5-recommend-bottomBox"]');
                this.dataset.$btmBox = k;
                var l = e(e.tmpl(i, a));
                this.dataset.$download = l, this.dataset.$downloadText = l.find(".txp_dl_hint"), this.context.dataset.$playermod.append(l), this.hideDownloadBanner(), this.hideRecommend()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$relateBox.delegate(".txp_videowall_item", "click", function () {
                    var b = e(this).attr("data-vid"),
                        c = e(this).attr("data-cid");
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: b ? b : "",
                        cid: c ? c : "",
                        str5: 1
                    })
                }), this.dataset.$btmBox.delegate(".txp_related_item", "click", function () {
                    var b = e(this).attr("data-vid"),
                        c = e(this).attr("data-cid");
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: b ? b : "",
                        cid: c ? c : "",
                        str5: 1
                    })
                }), this.dataset.$download.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.context.dataset.vid,
                        str5: 1
                    })
                })
            }, changeStatus: function (a) {
                this.dataset.downloadState = a, this.dataset.rendered && (2 == a || 3 == a ? (this.hideUpperRecommend(), this.showDownloadBanner()) : (this.hideDownloadBanner(), this.showRecommend()), this.dataset.$download.attr("data-status", this.dataset.status[a]), this.dataset.$downloadText.text(this.dataset.downloadText[a]))
            }, hideDownloadBanner: function () {
                this.dataset.$download.addClass(Txplayer.dataset.hideClass)
            }, showDownloadBanner: function () {
                0 === this.context.dataset.playState && this.dataset.$download.removeClass(Txplayer.dataset.hideClass)
            }, listenStateChangeEvent: function () {}, renderRecommendList: function () {
                var a = this;
                this.getRecommendList().done(function (b) {
                    var c = e.tmpl(h),
                        d = e.tmpl(k),
                        g = "";
                    b.recItemList && b.recItemList.length && e.each(b.recItemList, function (e, h) {
                        if (h.unionInfo) {
                            var i = c({
                                imgUrl: h.unionInfo.horizontal_pic_url || h.unionInfo.pic160x90,
                                title: f.xss(h.unionInfo.title),
                                vid: h.unionInfo.vid || "",
                                cid: h.unionInfo.cover_id || ""
                            });
                            e % 2 === 0 && (i = '<txpdiv class="txp_videowall_unit">' + i), e % 2 != 1 && e != b.recItemList.length - 1 || (i += "</txpdiv>"), g += i, a.dataset.$btmBox.append("" + d({
                                imgUrl: h.unionInfo.horizontal_pic_url || h.unionInfo.pic160x90,
                                title: f.xss(h.unionInfo.title),
                                vid: h.unionInfo.vid,
                                cid: h.unionInfo.cover_id || ""
                            }))
                        }
                    }), a.dataset.$relateBox.append(g);
                    var i = Math.ceil(b.recItemList.length / 2);
                    if (a.dataset.recommendListLength = i, i > 1)
                        for (var j = 0; j < i; j++) a.dataset.$changeDot.append('<txpdiv class="txp_dot"></txpdiv>');
                    a.dataset.$changeDotList = a.dataset.$changeDot.find(".txp_dot"), a.changeDot(0), a.context.msg.broadcast("RecommendListReady")
                }).fail(function () {})
            }, getRecommendList: function () {
                var a = e.Deferred(),
                    b = {
                        rec_num: 8,
                        vid: this.context.config.vid
                    };
                return e.ajax({
                    data: b,
                    url: l,
                    dataType: "jsonp"
                }).then(function (b) {
                    f.log(b), 0 === b.ret && b.data && a.resolve(b.data)
                }), a
            }, bindTouch: function () {
                var a = this,
                    b = {},
                    c = !1;
                this.dataset.currentIndex = 0, this.changeDot(0), this.dataset.$relateBox.off("touchstart").off("touchmove").off("touchend").off("touchcancel").on("touchstart", function (a) {
                    a = a && a.touches && a.touches.length ? a.touches[0] : a, b.x1 = a.pageX, b.y1 = a.pageY, f.log("e.pageX:" + a.pageX + "e.pageY" + a.pageY), b.x2 = 0, b.x2 = 0, c = !1
                }).on("touchmove", function (a) {
                    if (a = a && a.touches && a.touches.length ? a.touches[0] : a, b.x2 = a.pageX, b.y2 = a.pageY, c = !!(b.x2 && Math.abs(b.x1 - b.x2) > 6)) return !1
                }).on("touchend touchcancel", function (d) {
                    c && (b.x2 - b.x1 < 0 ? a.move("left") : a.move("right"))
                })
            }, move: function (a) {
                var b, c = this.dataset,
                    d = 0,
                    e = c.currentIndex || 0,
                    f = 0,
                    g = c.$recommend.width();
                b = c.recommendListLength - 1, "left" == a && (d = e + 1), "right" == a && (d = e - 1), a || (d = e), d < 0 || d > b || (f -= d * g, this.dataset.$relateBox.css({
                    "-webkit-transition": "0.5s ease-out",
                    "-webkit-transform": "translateX(" + f + "px)"
                }), c.currentIndex = d, this.changeDot(d, e))
            }, changeDot: function (a, b) {
                this.dataset.$changeDotList && (void 0 !== b && e(this.dataset.$changeDotList[b]).removeClass("txp_current"), e(this.dataset.$changeDotList[a]).addClass("txp_current")), e.inArray(+a, this.dataset.reportPage) == -1 && (this.dataset.reportPage.push(+a), this.stepReport(this.dataset.downloadState))
            }, setListToPageOne: function () {
                this.dataset.$relateBox.css({
                    "-webkit-transform": "translateX(0px)"
                }), this.changeDot(0, this.dataset.currentIndex), this.dataset.currentIndex = 0, this.dataset.reportPage = [0]
            }, showRecommend: function () {
                !this.dataset.afterAd && 0 === this.context.dataset.playState && this.dataset.$recommend.removeClass(Txplayer.dataset.hideClass), this.dataset.afterAd && this.dataset.$recommendBtm.removeClass(Txplayer.dataset.hideClass), this.context.msg.broadcast("hideUiControl")
            }, hideRecommend: function () {
                this.dataset.$recommend.addClass(Txplayer.dataset.hideClass), this.dataset.$recommendBtm.addClass(Txplayer.dataset.hideClass)
            }, hideUpperRecommend: function () {
                this.dataset.$recommend.addClass(Txplayer.dataset.hideClass)
            }, stepReport: function (a, b) {
                var c = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || "",
                    str5: 1
                };
                this.context.msg.broadcast("bannerReport", c)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("appChecked", function (b) {
                    a.dataset.hasApp = b, 1 == b ? a.dataset.downloadState = 6 : a.dataset.downloadState = 1
                }), this.context.msg.on("videoEnd", function (b) {
                    a.context.dataset.isLimit || b && ("film" !== b.playListType || b.isAllEnd || (a.dataset.afterAd = !0), "film" === b.playListType && (a.dataset.rendered || (a.renderRecommendList(), a.bindTouch(), a.dataset.rendered = !0), a.showRecommend(), a.stepReport(a.dataset.downloadState)))
                }), this.context.msg.on("RecommendListReady", function () {
                    a.bindClickReport()
                }), a.context.msg.on("bannerDownloadStateChange", function (b) {
                    b && a.changeStatus(b)
                }), this.dataset.$replay.on("click", function () {
                    a.context.msg.once("videoPlay.recommand", function () {
                        a.hideRecommend()
                    }), a.context.msg.broadcast("beforeVideoRePlay"), a.context.msg.broadcast("androidHack"), a.context.msg.broadcast("playControl", {
                        autoplay: !0
                    }), a.context.msg.broadcast("userPlayPlayer"), a.setListToPageOne()
                })
            }
        }, Txplayer.register("H5RcdBanner", d)
    }, 75: function (a, b) {
        a.exports = '<txpdiv class="txp_endscreen txp_none">\n    <txpdiv class="txp_videowall_dots" data-role="h5-recommend-changeDot">\n\n    </txpdiv>\n    <txpdiv class="txp_replay" data-role="h5-recommend-replay">\n        <svg class="txp_icon txp_icon_replay" viewBox="0 0 30 30"><use class="txp_svg_replay" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=svgPrefix%>#txp_svg_replay"></use></svg>\n        <txpdiv class="txp_text">\u91cd\u65b0\u64ad\u653e</txpdiv>\n    </txpdiv>\n    <txpdiv class="txp_videowall" data-role="h5-recommend-relateBox">\n    </txpdiv >\n</txpdiv>'
    }, 76: function (a, b) {
        a.exports = '<a class="txp_videowall_item" data-vid="<%=vid%>" data-cid="<%=cid%>">\n    <txpdiv class="txp_videowall_image" style="background-image:url(<%=imgUrl%>)"></txpdiv>\n    <txpdiv class="txp_videowall_title"><%=title%></txpdiv>\n</a>'
    }, 77: function (a, b) {
        a.exports = '<txpdiv class="txp_overlay_download" >\n    <txpdiv class="txp_dl_hint">\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b</txpdiv>\n    <txpdiv class="txp_dl_progress"><txpdiv class="txp_dl_progress_current"></txpdiv></txpdiv>\n</txpdiv>'
    }, 78: function (a, b) {
        a.exports = '<div class="txp_related_roll txp_none">\n    <div class="txp_related_roll_inner" data-role="h5-recommend-bottomBox">\n    </div>\n</div>'
    }, 79: function (a, b) {
        a.exports = '<a class="txp_related_item" data-vid="<%=vid%>" data-cid="<%=cid%>">\n    <txpdiv class="txp_related_image" style="background-image:url(<%=imgUrl%>)"></txpdiv>\n    <txpdiv class="txp_related_title"><%=title%></txpdiv>\n</a>'
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
        a.exports = c(157)
    }, 51: function (a, b) {
        a.exports = '<txpdiv class="txp_endscreen_trial txp_none">\n    <txpdiv class="txp_desc" data-role="tiny-recommend-text">\u6253\u5f00\u817e\u8baf\u89c6\u9891</txpdiv>\n    <a class="txp_btn_em" href="javascript:;" data-role="tiny-recommend-banner">\u770b\u5b8c\u6574\u7248</a>\n    <a class="txp_replay" href="javascript:;" data-role="tiny-recommend-replay">\n        <svg class="txp_icon txp_icon_replay" viewBox="0 0 30 30"><use class="txp_svg_replay" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=svgPrefix%>#txp_svg_replay"></use></svg>\n        <txpdiv class="txp_text">\u91cd\u65b0\u64ad\u653e</txpdiv>\n    </a>\n</txpdiv>'
    }, 52: function (a, b) {
        a.exports = '<txpdiv class="txp_overlay_download txp_none" >\n    <txpdiv class="txp_dl_hint">\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b</txpdiv>\n    <txpdiv class="txp_dl_progress"><txpdiv class="txp_dl_progress_current"></txpdiv></txpdiv>\n</txpdiv>'
    }, 157: function (a, b, c) {
        function d(a) {
            this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(51),
            h = c(52);
        d.prototype = {
            init: function () {
                if (!f.isInIframe()) {
                    if ("h5" == this.context.config.playerType) {
                        if (!this.context.config.recommendBanner) return;
                        if (!this.context.config.endScreenConfig || 2 != this.context.config.endScreenConfig.type) return
                    }
                    this.dataset.reportPromotionId = "666", this.dataset.vid = this.context.config.longVid || this.context.dataset.vid || this.context.config.vid, this.context.config.endScreenConfig && this.context.config.endScreenConfig.vid && (this.dataset.vid = this.context.config.endScreenConfig.vid), this.context.config.endScreenConfig && this.context.config.endScreenConfig.cid && (this.dataset.cid = this.context.config.endScreenConfig.cid), this.context.config.endScreenConfig && this.context.config.endScreenConfig.text && (this.context.config.shortVideoBtnTitle = this.context.config.endScreenConfig.text), this.dataset.downloadState = 1, this.dataset.status = {
                        1: "down",
                        2: "downloading",
                        3: "pause",
                        4: "install",
                        5: "install",
                        6: "open",
                        7: "open"
                    }, this.dataset.downloadText = {
                        1: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                        2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                        3: "\u6682\u505c\uff0c\u70b9\u51fb\u7ee7\u7eed\u4e0b\u8f7d",
                        4: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                        5: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                        6: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                        7: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b"
                    }, this.dataset.bannerText = {
                        1: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891",
                        2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891",
                        3: "\u70b9\u51fb\u7ee7\u7eed\u4e0b\u8f7d",
                        4: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891",
                        5: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891",
                        6: "\u6253\u5f00\u817e\u8baf\u89c6\u9891",
                        7: "\u6253\u5f00\u817e\u8baf\u89c6\u9891",
                        8: "\u5230\u817e\u8baf\u89c6\u9891"
                    }, this.dataset.showRec = !1, this.write(), this.addEventListener()
                }
            }, write: function () {
                var a = {},
                    b = e(e.tmpl(g, a));
                this.context.dataset.$playermod.append(b), this.dataset.$recommend = b, this.dataset.$banner = b.find('[data-role="tiny-recommend-banner"]'), this.dataset.$replay = b.find('[data-role="tiny-recommend-replay"]'), this.dataset.$text = b.find('[data-role="tiny-recommend-text"]'), f && f.browser && f.browser.qqlive && this.dataset.$text.hide(), this.context.config.shortVideoBtnTitle ? this.dataset.$banner.text(this.context.config.shortVideoBtnTitle) : this.context.dataset.fileTitle && this.dataset.$banner.text(this.context.dataset.fileTitle);
                var c = e(e.tmpl(h, a));
                this.dataset.$download = c, this.dataset.$downloadText = c.find(".txp_dl_hint"), this.context.dataset.$playermod.append(c), this.hideRecommend()
            }, updateBanner: function (a) {
                1 == a ? this.dataset.downloadState = 6 : 2 == a ? this.dataset.downloadState = 1 : a == -1 && (this.dataset.downloadState = 1), this.bindClickReport()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$banner.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.dataset.vid,
                        cid: a.dataset.cid,
                        str5: 2,
                        openUrl: a.context.config.openUrl
                    })
                }), this.dataset.$download.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.dataset.vid,
                        str5: 2
                    })
                })
            }, changeStatus: function (a) {
                f.log("type", a), this.dataset.downloadState = a, 2 == a || 3 == a || 4 == a ? (this.showDownload(), this.hideRecommend()) : (this.hideDownload(), this.showRecommend()), this.dataset.$banner.attr("data-status", this.dataset.status[a]), this.dataset.$download.attr("data-status", this.dataset.status[a]), this.dataset.$downloadText.text(this.dataset.downloadText[a]), this.dataset.$text.text(this.dataset.bannerText[a])
            }, showRecommend: function () {
                this.dataset.showRec && this.dataset.$recommend.removeClass(Txplayer.dataset.hideClass)
            }, hideRecommend: function () {
                this.dataset.$recommend.addClass(Txplayer.dataset.hideClass)
            }, showDownload: function () {
                this.dataset.showRec && this.dataset.$download.removeClass(Txplayer.dataset.hideClass)
            }, hideDownload: function () {
                this.dataset.$download.addClass(Txplayer.dataset.hideClass)
            }, stepReport: function (a, b) {
                var c = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || "",
                    str5: 2
                };
                this.context.msg.broadcast("bannerReport", c)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("appChecked", function (b) {
                    a.updateBanner(b)
                }), a.context.msg.on("bannerDownloadStateChange", function (b, c) {
                    b && a.changeStatus(b)
                }), !a.context.config.shortVideoBtnTitle && a.context.msg.on("getVideoUrlSuccess", function () {
                    a.dataset.$banner.text(a.context.dataset.fileTitle)
                }), this.context.msg.on("videoEnd", function (b) {
                    b && b.isAllEnd && (a.dataset.showRec = !0, a.showRecommend(), a.stepReport(a.dataset.downloadState))
                }), this.context.msg.on("videoPlay", function (b) {
                    b && "film" === b.playListType && (a.dataset.showRec = !1)
                }), this.context.msg.on("videoPlay", function (b) {
                    a.hideRecommend()
                }), this.dataset.$replay.on(Txplayer.dataset.clickEventName, function () {
                    a.context.msg.broadcast("beforeVideoRePlay"), a.context.msg.broadcast("androidHack"), a.context.msg.broadcast("playControl", {
                        autoplay: !0
                    }), a.context.msg.broadcast("userPlayPlayer")
                })
            }
        }, Txplayer.register("TinyRcdBanner", d)
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
        a.exports = c(53)
    }, 53: function (a, b, c) {
        function d(a) {
            this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.util,
            f = c(54);
        d.prototype = {
            init: function () {
                location.href.indexOf("ptag=baidu") == -1 && location.href.indexOf("ptag=sogou") == -1 || e.isInIframe() || (this.dataset.timer, this.dataset.bufferTimer, this.dataset.originTime = 0, this.dataset.isBadNetwork = !1, this.dataset.reportPromotionId = "87", this.dataset.showed = !1, this.dataset.reported = !1, this.dataset.status = {
                    1: "down",
                    2: "downloading",
                    3: "pause",
                    4: "install",
                    5: "install",
                    6: "open",
                    7: "open",
                    8: "down"
                }, this.dataset.statusText = {
                    1: "\u4e0b\u8f7d",
                    2: "\u4e0b\u8f7d",
                    3: "\u4e0b\u8f7d",
                    4: "\u5b89\u88c5",
                    5: "\u5b89\u88c5",
                    6: "\u6253\u5f00",
                    7: "\u6253\u5f00",
                    8: "\u6253\u5f00"
                }, this.write(), this.addEventListener())
            }, write: function () {
                var a = {
                    progress: "txp-h5-limit-progress",
                    limitLayer: "txp-h5-limit-layer",
                    btn: "txp-h5-limit-btn",
                    text: "txp-h5-limit-text",
                    percent: "txp-h5-limit-percent",
                    current: "txp-h5-limit-current"
                };
                this.dataset.renderData = a;
                var b = Txplayer.$.tmpl(f, a);
                this.context.dataset.$playermod.append(b), this.dataset.$progress = this.context.dataset.$playermod.find('[data-role="' + a.progress + '"]'), this.dataset.$limitLayer = this.context.dataset.$playermod.find('[data-role="' + a.limitLayer + '"]'), this.dataset.$btn = this.context.dataset.$playermod.find('[data-role="' + a.btn + '"]'), this.dataset.$text = this.context.dataset.$playermod.find('[data-role="' + a.text + '"]'), this.dataset.$percent = this.context.dataset.$playermod.find('[data-role="' + a.percent + '"]'), this.dataset.$current = this.context.dataset.$playermod.find('[data-role="' + a.current + '"]'), e.os.android && e.browser.mqq && this.dataset.$limitLayer.addClass("txp_nonauto")
            }, updateBanner: function (a) {
                1 == a ? this.changeStatus(6) : 2 == a ? this.changeStatus(1) : a == -1 && this.changeStatus(8), this.bindClickReport()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$limitLayer.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.context.dataset.vid
                    })
                })
            }, changeProgress: function (a) {
                this.dataset.$percent.text(a + "%"), this.dataset.$current.css("width", a + "%")
            }, changeStatus: function (a) {
                a && this.dataset.$text.html(this.dataset.statusText[a]), 2 == a ? (this.showProgress(), this.hideBtn(), this.context.msg.broadcast("showSogouTips")) : (this.showBtn(), this.hideProgress())
            }, hide: function () {
                this.dataset.$limitLayer.addClass("txp_none")
            }, show: function () {
                !this.dataset.showed && this.stepReport(this.dataset.downloadState), this.dataset.$limitLayer.removeClass("txp_none")
            }, showBtn: function () {
                this.dataset.$btn.removeClass("txp_none")
            }, hideBtn: function () {
                this.dataset.$btn.addClass("txp_none")
            }, showProgress: function () {
                this.dataset.$progress.removeClass("txp_none")
            }, hideProgress: function () {
                this.dataset.$progress.addClass("txp_none")
            }, remove: function () {}, stepReport: function (a, b) {
                var c = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || ""
                };
                this.context.msg.broadcast("bannerReport", c)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("playStateChange", function (b) {
                    a.dataset.bufferTimer && clearInterval(a.dataset.bufferTimer), 1 == b ? (a.dataset.originTime = a.context.dataset.currentTime, a.dataset.counter = 0, a.dataset.bufferTimer = setInterval(function () {
                        a.context.dataset.currentTime - a.dataset.originTime < .65 && a.context.dataset.currentTime - a.dataset.originTime >= 0 ? (a.dataset.counter > 1 && a.context.msg.broadcast("h5networkBadStart"), a.dataset.counter++) : (a.context.msg.broadcast("h5networkBadEnd"), a.dataset.counter = 0), a.dataset.originTime = a.context.dataset.currentTime
                    }, 1e3)) : 3 != b && a.context.msg.broadcast("h5networkBadEnd")
                }), a.context.msg.on("h5networkBadStart", function () {
                    a.dataset.isBadNetwork || (a.dataset.isBadNetwork = !0, a.context.msg.broadcast("showSogouTips"))
                }), a.context.msg.on("h5networkBadEnd", function () {
                    a.dataset.isBadNetwork && (a.dataset.isBadNetwork = !1, a.context.msg.broadcast("hideSogouTips"))
                }), a.context.msg.on("videoWaiting", function () {
                    a.context.msg.broadcast("showSogouTips")
                }), a.context.msg.on("videoPlaying", function () {
                    a.context.msg.broadcast("hideSogouTips")
                }), a.context.msg.on("showSogouTips", function (b) {
                    a.context.dataset.currentTime && a.context.dataset.currentTime > 120 && (a.show(), a.dataset.showed = !0, a.dataset.timer && clearTimeout(a.dataset.timer))
                }), a.context.msg.on("hideSogouTips", function () {
                    a.dataset.showed && 2 != a.dataset.downloadState && (a.dataset.timer && clearTimeout(a.dataset.timer), a.dataset.timer = setTimeout(function () {
                        a.hide(), a.dataset.showed = !1
                    }, 2e3))
                }), a.context.msg.on("videoEnd", function () {
                    a.hide(), a.dataset.showed = !1
                }), a.context.msg.on("appChecked", function (b) {
                    a.updateBanner(b)
                }), a.context.msg.on("bannerDownloadStateChange", function (b, c) {
                    a.dataset.downloadState = b, b && a.changeStatus(b), void 0 !== c && "2" == b && a.changeProgress(c)
                })
            }
        }, Txplayer.register("H5LimitBanner", d)
    }, 54: function (a, b) {
        a.exports = '<txpdiv class="txp_hint_toast txp_none" data-role="<%=limitLayer%>">\n    <!--\u4e0b\u8f7d\u63d0\u793a-->\n    <txpdiv class="txp_hint_bait txp_none" data-role="<%=btn%>">\n        \u7f51\u901f\u4e0d\u597d\uff0c<span data-role="<%=text%>">\u6253\u5f00</span>App\u63d0\u9ad8<txpdiv class="txp_hl">3\u500d\u6d41\u7545\u5ea6</txpdiv>\u54e6\uff01\n    </txpdiv>\n    <!-- \u4e0b\u8f7d\u8fdb\u5ea6 -->\n    <txpdiv class="txp_hint_dl txp_none" data-role="<%=progress%>">\n        <txpdiv class="txp_hint_txt">\u6b63\u5728\u4e0b\u8f7d <span data-role="<%=percent%>"></span> </txpdiv>\n        <txpdiv class="txp_hint_progress">\n            <txpdiv class="txp_hint_progress_current" data-role="<%=current%>"></txpdiv>\n        </txpdiv>\n    </txpdiv>\n</txpdiv>'
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
        a.exports = c(50)
    }, 50: function (a, b, c) {
        function d(a) {
            this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = c(51),
            h = c(52);
        d.prototype = {
            init: function () {
                this.context.config.isInteract && (this.dataset.reportPromotionId = "666", this.dataset.vid = this.context.dataset.vid, this.dataset.cid = this.context.dataset.cid || "", this.context.config.shortVideoBtnTitle = "\u89e3\u9501\u4e92\u52a8\u5267\u60c5", this.dataset.downloadState = 1, this.dataset.status = {
                    1: "down",
                    2: "downloading",
                    3: "pause",
                    4: "install",
                    5: "install",
                    6: "open",
                    7: "open"
                }, this.dataset.downloadText = {
                    1: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    3: "\u6682\u505c\uff0c\u70b9\u51fb\u7ee7\u7eed\u4e0b\u8f7d",
                    4: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    5: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    6: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b",
                    7: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b"
                }, this.dataset.bannerText = {
                    1: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891",
                    2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891",
                    3: "\u70b9\u51fb\u7ee7\u7eed\u4e0b\u8f7d",
                    4: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891",
                    5: "\u5b89\u88c5\u817e\u8baf\u89c6\u9891",
                    6: "\u6253\u5f00\u817e\u8baf\u89c6\u9891",
                    7: "\u6253\u5f00\u817e\u8baf\u89c6\u9891",
                    8: "\u5230\u817e\u8baf\u89c6\u9891"
                }, this.dataset.showRec = !1, this.write(), this.addEventListener())
            }, write: function () {
                var a = {},
                    b = e(e.tmpl(g, a));
                this.context.dataset.$playermod.append(b), this.dataset.$recommend = b, this.dataset.$banner = b.find('[data-role="tiny-recommend-banner"]'), this.dataset.$replay = b.find('[data-role="tiny-recommend-replay"]'), this.dataset.$text = b.find('[data-role="tiny-recommend-text"]'), f && f.browser && f.browser.qqlive && this.dataset.$text.hide(), this.dataset.$banner.text(this.context.config.shortVideoBtnTitle), this.dataset.$replay.hide();
                var c = e(e.tmpl(h, a));
                this.dataset.$download = c, this.dataset.$downloadText = c.find(".txp_dl_hint"), this.context.dataset.$playermod.append(c), this.hideRecommend()
            }, updateBanner: function (a) {
                1 == a ? this.dataset.downloadState = 6 : 2 == a ? this.dataset.downloadState = 1 : a == -1 && (this.dataset.downloadState = 1), this.bindClickReport()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$banner.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.dataset.vid,
                        cid: a.dataset.cid,
                        str5: 2,
                        openUrl: a.context.config.openUrl
                    })
                }), this.dataset.$download.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.dataset.vid,
                        str5: 2,
                        cid: a.dataset.cid
                    })
                })
            }, changeStatus: function (a) {
                f.log("type", a), this.dataset.downloadState = a, 2 == a || 3 == a || 4 == a ? (this.showDownload(), this.hideRecommend()) : (this.hideDownload(), this.showRecommend()), this.dataset.$banner.attr("data-status", this.dataset.status[a]), this.dataset.$download.attr("data-status", this.dataset.status[a]), this.dataset.$downloadText.text(this.dataset.downloadText[a]), this.dataset.$text.text(this.dataset.bannerText[a])
            }, showRecommend: function () {
                this.dataset.showRec && this.dataset.$recommend.removeClass(Txplayer.dataset.hideClass)
            }, hideRecommend: function () {
                this.dataset.$recommend.addClass(Txplayer.dataset.hideClass)
            }, showDownload: function () {
                this.dataset.showRec && this.dataset.$download.removeClass(Txplayer.dataset.hideClass)
            }, hideDownload: function () {
                this.dataset.$download.addClass(Txplayer.dataset.hideClass)
            }, stepReport: function (a, b) {
                var c = {
                    vid: this.context.dataset.vid,
                    reportPromotionId: this.dataset.reportPromotionId,
                    reportStep: a,
                    limitCase: b || "",
                    str5: 2
                };
                this.context.msg.broadcast("bannerReport", c)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("appChecked", function (b) {
                    a.updateBanner(b)
                }), a.context.msg.on("bannerDownloadStateChange", function (b, c) {
                    b && a.changeStatus(b)
                }), !a.context.config.shortVideoBtnTitle && a.context.msg.on("getVideoUrlSuccess", function () {
                    a.dataset.$banner.text(a.context.dataset.fileTitle)
                }), this.context.msg.on("videoPlay", function (b) {
                    a.dataset.showRec = !0, a.showRecommend(), a.stepReport(a.dataset.downloadState), a.context.msg.broadcast("pause")
                }), this.dataset.$replay.on(Txplayer.dataset.clickEventName, function () {
                    a.context.msg.broadcast("beforeVideoRePlay"), a.context.msg.broadcast("androidHack"), a.context.msg.broadcast("playControl", {
                        autoplay: !0
                    }), a.context.msg.broadcast("userPlayPlayer")
                })
            }
        }, Txplayer.register("H5InteractBanner", d)
    }, 51: function (a, b) {
        a.exports = '<txpdiv class="txp_endscreen_trial txp_none">\n    <txpdiv class="txp_desc" data-role="tiny-recommend-text">\u6253\u5f00\u817e\u8baf\u89c6\u9891</txpdiv>\n    <a class="txp_btn_em" href="javascript:;" data-role="tiny-recommend-banner">\u770b\u5b8c\u6574\u7248</a>\n    <a class="txp_replay" href="javascript:;" data-role="tiny-recommend-replay">\n        <svg class="txp_icon txp_icon_replay" viewBox="0 0 30 30"><use class="txp_svg_replay" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=svgPrefix%>#txp_svg_replay"></use></svg>\n        <txpdiv class="txp_text">\u91cd\u65b0\u64ad\u653e</txpdiv>\n    </a>\n</txpdiv>'
    }, 52: function (a, b) {
        a.exports = '<txpdiv class="txp_overlay_download txp_none" >\n    <txpdiv class="txp_dl_hint">\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b</txpdiv>\n    <txpdiv class="txp_dl_progress"><txpdiv class="txp_dl_progress_current"></txpdiv></txpdiv>\n</txpdiv>'
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
        a.exports = c(57)
    }, 28: function (a, b) {
        a.exports = '<div class="txp_appbar">\n    <a class="txp_app_btn" data-role="txp-h5-downloadBanner" href="javascript:;">\n        <div class="txp_progress">\n            <div class="txp_progress_current" data-role="txp-h5-downloadBannerPro"></div>\n        </div>\n        <div class="txp_btn_text" data-text="" data-role="txp-h5-downloadBannerText">\n            <div class="txp_app_logo"></div>\n        </div>\n    </a>\n</div>'
    }, 30: function (module, exports) {
        var AppHelper = {},
            util = Txplayer.util,
            api = Txplayer.apiList,
            isChecking = !1,
            checked = !1,
            md5 = "",
            config = {
                mqqBrowserApiUrl: "//res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js",
                mqqApiUrl: "//pub.idqqimg.com/qqmobile/qqapi.js"
            },
            appConfig = {
                qqlive: {
                    md5Cgi: "//commdata.v.qq.com/commdatav2?cmd=39&otype=json&confid=${id}",
                    md5Cgi_https: "https://sec.video.qq.com/p/mcgi.v/commdatav2?cmd=39&otype=json&confid=${id}",
                    payUrl: "http://film.qq.com/weixin/detail/${index}/${cid}.html",
                    scheme: "tenvideo2://",
                    openUrl: "tenvideo2://?action=5&video_id=${vid}",
                    liveOpenUrl: "tenvideo2://?action=8&channel_id=${lid}",
                    downloadUrl: function () {
                        return util.os.iphone ? "https://itunes.apple.com/cn/app/id458318329?mt=8" : util.os.ipod ? "https://itunes.apple.com/cn/app/id458318329?mt=8" : util.os.ipad ? "https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8" : util.os.android ? "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=${promotionId}&platform=aphone" : void 0
                    }(),
                    VIA: "ANDROIDQQ.QQLIVE",
                    appId: "100730521",
                    packageName: util.os.ios ? "com.tencent.live4iphone" : "com.tencent.qqlive",
                    packageUrl: "tenvideo2://can_open_me_if_install_and_regeister_this_scheme",
                    appName: "\u817e\u8baf\u89c6\u9891"
                }
            };
        AppHelper.loadMqqBrowserAPI = function () {
            if (Txplayer.dataset.loadMqqBrowserAPIDefer) return Txplayer.dataset.loadMqqBrowserAPIDefer;
            var a = Txplayer.$.Deferred();
            if (Txplayer.dataset.loadMqqBrowserAPIDefer = a, window.x5) a.resolve();
            else {
                var b = config.mqqBrowserApiUrl;
                Txplayer.$.getScript(b, function () {
                    window.x5 ? a.resolve() : a.reject()
                })
            }
            return setTimeout(function () {
                a.reject()
            }, 5e3), a
        }, AppHelper.loadMqqAPI = function () {
            if (Txplayer.dataset.loadQQClientDefer) return Txplayer.dataset.loadQQClientDefer;
            var a = Txplayer.$.Deferred();
            if (Txplayer.dataset.loadQQClientDefer = a, window.mqq || window.QQApi) a.resolve();
            else {
                var b = config.mqqApiUrl;
                "undefined" == typeof Txplayer.$.getScript && (Txplayer.$.getScript = function (a, b) {
                    var c = document.createElement("script");
                    c.async = "async", c.src = a, b && (c.onload = b), document.getElementsByTagName("head")[0].appendChild(c)
                }), Txplayer.$.getScript(b, function () {
                    a.resolve()
                })
            }
            return setTimeout(function () {
                a.reject()
            }, 3e3), a
        }, AppHelper.getWechatOpenid = function () {
            var a = "";
            return util.browser.wechat && (a = util.getUrlParam("openid", window != top ? top.location.href.toString() : "")), a
        }, AppHelper.getAppMd5 = function (a, b) {
            var c = Txplayer.$.Deferred();
            a = a || 140, b = b || "qqlive";
            var d = appConfig[b].md5Cgi,
                e = d.replace("${id}", a);
            return md5 ? c.resolve({
                md5: md5
            }) : (Txplayer.$.ajax({
                url: e,
                dataType: "jsonp",
                jsonpCallback: "getmd5_callback_" + parseInt(1e6 * Math.random())
            }).then(function (a) {
                c.resolve(a && a.data ? a.data : a)
            }), setTimeout(function () {
                c.resolve({
                    md5: ""
                })
            }, 2e3)), c
        }, AppHelper.OnWechatReady = function () {
            var a = Txplayer.$.Deferred(),
                b = window === top ? document : top.document;
            return b.addEventListener("WeixinJSBridgeReady", function () {
                a.resolve()
            }), a
        }, AppHelper.isAppInstalled = function (a) {
            a = a || {};
            var b = Txplayer.$.Deferred(),
                c = {
                    hasApp: -1,
                    openUrl: "",
                    downloadUrl: "",
                    promotionId: a.promotionId || 140
                };
            util.os.ios || util.os.android || (c.hasApp = -2, b.resolve(c));
            var d = "";
            a.appName || (a.appName = "qqlive");
            var e = appConfig[a.appName];
            c.openUrl = e.openUrl, c.downloadUrl = e.downloadUrl, c.appTitleName = e.appName, a.vid && (c.openUrl = c.openUrl.replace(/\$\{vid\}/gi, a.vid)), c.promotionId && (c.openUrl.indexOf("from=") > -1 ? c.openUrl = c.openUrl.replace(/\&from=(\d)+/, "&from=" + a.promotionId) : c.openUrl += "&from=" + a.promotionId, c.downloadUrl = c.downloadUrl.replace(/\$\{promotionId\}/gi, a.promotionId)), util.browser.wechat && (d = AppHelper.getWechatOpenid(), d && c.openUrl.indexOf("wxplugopenid=") === -1 && (c.openUrl += "&wxplugopenid=" + d)), util.browser.wechat ? c.openUrl += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1" : util.browser.mqq && (c.openUrl += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ"), a.openUrl && (c.openUrl = util.xss(a.openUrl));
            var f = function () {
                    window === top ? document : top.document;
                    Txplayer.util.fiddlerLog("taskInWechat");
                    var d = function () {
                        if (Txplayer.util.fiddlerLog("taskInWechat.invoke"), !top.WeixinJSBridge || !top.WeixinJSBridge.invoke) return Txplayer.util.fiddlerLog("taskInWechat.invoke no api"), void b.resolve(c);
                        var d = {
                            packageUrl: e.packageUrl,
                            packageName: e.packageName
                        };
                        Txplayer.util.fiddlerLog("taskInWechat.invoke exec api"), top.WeixinJSBridge.invoke("getInstallState", d, function (d) {
                            Txplayer.util.fiddlerLog({
                                "taskInWechat.invoke": d
                            });
                            var e = d.err_msg;
                            e.indexOf("get_install_state:yes") > -1 ? (c.hasApp = 1, b.resolve(c)) : (c.hasApp = 0, AppHelper.getAppMd5(c.promotionId, a.appName).done(function (a) {
                                a && a.md5 && (c.md5 = a.md5), b.resolve(c)
                            }).fail(function () {
                                c.md5 = "-1", b.resolve(c)
                            }))
                        })
                    };
                    top.WeixinJSBridge ? d() : AppHelper.OnWechatReady().done(function () {
                        d()
                    }), setTimeout(function () {
                        b.resolve(c)
                    }, 6e3)
                },
                g = function () {
                    var a = util.os.ios ? e.packageUrl : e.packageName,
                        d = function () {
                            c.appid = e.appId, c.packageName = e.packageName, c.via = e.VIA, !util.os.ios && window.QQApi && window.QQApi.checkAppInstalled ? window.QQApi.checkAppInstalled(a, function (a) {
                                c.hasApp = a && 0 != a ? 1 : 0, b.resolve(c)
                            }) : window.mqq && window.mqq.app && window.mqq.app.isAppInstalled ? window.mqq.app.isAppInstalled(a, function (a) {
                                c.hasApp = a ? 1 : 0, b.resolve(c)
                            }) : b.resolve(0)
                        };
                    AppHelper.loadMqqAPI().done(function () {
                        d()
                    })
                },
                h = function () {
                    !util.os.iphone && window.QQApi && QQApi.checkAppInstalled && g();
                    var a = function () {
                        window.x5 && x5.ios && x5.ios.getMobileAppSupport ? x5.ios.getMobileAppSupport({
                            scheme: e.packageUrl
                        }, function (a) {
                            a ? (c.hasApp = 1 == a.isSupportApp ? 1 : 0, b.resolve(c)) : b.resolve(0)
                        }, function () {
                            b.resolve(0)
                        }) : b.resolve(0), setTimeout(function () {
                            b.resolve(0)
                        }, 300)
                    };
                    if (!util.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                        var d = window.x5mtt.isApkInstalled('{"packagename": "com.tencent.qqlive"}');
                        c.hasApp = d == -1 ? 0 : 1, b.resolve(c)
                    } else util.os.iphone && parseInt(util.os.version) > 5 ? AppHelper.loadMqqBrowserAPI().done(function () {
                        a()
                    }).fail(function () {
                        b.resolve(0)
                    }) : b.resolve(0);
                    setTimeout(function () {
                        b.resolve(0)
                    }, 3e3)
                };
            return util.browser.wechat ? f() : util.browser.mqq ? g() : util.browser.mqqbrowser ? h() : b.resolve(c), b
        }, AppHelper.checkHasApp = function (a) {
            a = a || {};
            var b = -1,
                c = Txplayer.$.Deferred();
            util.os.ios || util.os.android || (b = -2, c.resolve(b)), a.appName || (a.appName = "qqlive");
            var d = appConfig[a.appName],
                e = function () {
                    var a = function () {
                        if (!top.WeixinJSBridge || !top.WeixinJSBridge.invoke) return void c.resolve(util.getData("txv-download-hasapp") || -1);
                        var a = {
                            packageUrl: d.packageUrl,
                            packageName: d.packageName
                        };
                        top.WeixinJSBridge.invoke("getInstallState", a, function (a) {
                            var d = a.err_msg;
                            b = d.indexOf("get_install_state:yes") > -1 ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                        })
                    };
                    top && top.WeixinJSBridge || window.WeixinJSBridge ? a() : AppHelper.OnWechatReady().done(function () {
                        a()
                    }), setTimeout(function () {
                        c.resolve(util.getData("txv-download-hasapp") || -1)
                    }, 6e3)
                },
                f = function () {
                    var a = util.os.ios ? d.packageUrl : d.packageName,
                        e = function () {
                            !util.os.ios && window.QQApi && window.QQApi.checkAppInstalled ? window.QQApi.checkAppInstalled(a, function (a) {
                                b = a && 0 != a ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                            }) : window.mqq && window.mqq.app && window.mqq.app.isAppInstalled ? window.mqq.app.isAppInstalled(a, function (a) {
                                b = "object" == typeof a ? a.result ? 1 : 2 : a ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                            }) : c.resolve(util.getData("txv-download-hasapp") || -1)
                        };
                    AppHelper.loadMqqAPI().done(function () {
                        e()
                    })
                },
                g = function () {
                    !util.os.iphone && window.QQApi && QQApi.checkAppInstalled && f();
                    var a = function () {
                        window.x5 && x5.ios && x5.ios.getMobileAppSupport ? x5.ios.getMobileAppSupport({
                            scheme: d.packageUrl
                        }, function (a) {
                            a ? (b = 1 == a.isSupportApp ? 1 : 2, c.resolve(b)) : c.resolve(-1)
                        }, function () {
                            c.resolve(-1)
                        }) : c.resolve(-1), setTimeout(function () {
                            c.resolve(-1)
                        }, 300)
                    };
                    if (!util.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                        var e = window.x5mtt.isApkInstalled('{"packagename": "com.tencent.qqlive"}');
                        b = e == -1 ? 2 : 1, c.resolve(b)
                    } else util.os.iphone && parseInt(util.os.version) > 5 ? AppHelper.loadMqqBrowserAPI().done(function () {
                        a()
                    }).fail(function () {
                        c.resolve(-1)
                    }) : c.resolve(-1);
                    setTimeout(function () {
                        c.resolve(-1)
                    }, 3e3)
                };
            return util.browser.wechat ? e() : util.browser.mqq ? f() : util.browser.mqqbrowser ? g() : c.resolve(-1), c
        }, AppHelper.check = function () {
            isChecking || checked || (isChecking = !0, AppHelper.checkHasApp().done(function (a) {
                util.log("app-helper checkHasApp", a), Txplayer.dataset.hasApp = a, Txplayer.msg.broadcast("onCheckHasApp", a)
            }).always(function () {
                isChecking = !1, checked = !0
            }))
        }, AppHelper.getPromotionIdByPtag = function () {
            var a = util.getPTAG() || "";
            Txplayer.$.Deferred();
            if (a) {
                var b = " http://growth.video.qq.com/fcgi-bin/h5_player_ptag",
                    c = {
                        appid: 1,
                        appkey: 1,
                        ptag: a
                    };
                Txplayer.$.ajax({
                    url: b,
                    data: c,
                    dataType: "jsonp",
                    jsonpCallback: "getmd5_callback_" + parseInt(1e6 * Math.random())
                }).then(function (a) {
                    util.log(a)
                })
            }
        }, AppHelper.getAppInfo = function (a) {
            a = a || {};
            var b = Txplayer.$.Deferred(),
                c = {
                    vid: a.vid || "",
                    promotionId: a.promotionId || 140
                },
                d = "";
            a.appName || (a.appName = "qqlive");
            var e = appConfig[a.appName];
            return c.openUrl = e.openUrl, c.downloadUrl = e.downloadUrl || "", c.appTitleName = e.appName, a.vid && (c.openUrl = c.openUrl.replace(/\$\{vid\}/gi, a.vid)), c.promotionId && (c.openUrl.indexOf("from=") > -1 ? c.openUrl = c.openUrl.replace(/\&from=(\d)+/, "&from=" + a.promotionId) : c.openUrl += "&from=" + a.promotionId, c.downloadUrl = c.downloadUrl.replace(/\$\{promotionId\}/gi, a.promotionId), c.downloaderUrl = c.downloadUrl), util.browser.miuibrowser && "xiaomiqj" === util.getPTAG() && (c.downloadUrl = "market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true"), util.browser.wechat ? (d = AppHelper.getWechatOpenid(), d && c.openUrl.indexOf("wxplugopenid=") === -1 && (c.openUrl += "&wxplugopenid=" + d), c.openUrl += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1", util.os.android ? AppHelper.getAppMd5(c.promotionId, a.appName).done(function (a) {
                a && a.md5 && (c.md5 = a.md5, md5 = a.md5), b.resolve(c)
            }).fail(function () {
                c.md5 = "", b.resolve(c)
            }) : b.resolve(c)) : util.browser.mqq ? (c.openUrl += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ", c.appid = e.appId, c.packageName = e.packageName, c.via = e.VIA, b.resolve(c)) : b.resolve(c), b
        }, AppHelper.tryOpenApp = function (a) {
            if (a && a.length && !util.browser.wechat && !util.browser.mqq) {
                var b = a.attr("data-openurl"),
                    c = a.attr("data-downloadurl");
                if (b && c) {
                    var d = function () {
                            if (Txplayer.util.fiddlerLog("openApp"), util.os.ios && util.compareVersion(util.os.version, "9.0") > -1) try {
                                Txplayer.util.fiddlerLog({
                                    openurl: b,
                                    s: "\u76f4\u63a5\u6253\u5f00"
                                }), window.location.href = b
                            } catch (a) {} else {
                                Txplayer.util.fiddlerLog({
                                    openurl: b,
                                    s: "iframe\u6253\u5f00"
                                });
                                var a = document.createElement("iframe");
                                a.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;", a.src = b, document.body.appendChild(a)
                            }
                        },
                        e = function () {
                            Txplayer.util.fiddlerLog({
                                downloadurl: c,
                                s: "downloadApp"
                            }), window.location.href = c
                        },
                        f = function () {
                            d();
                            var a = (new Date).valueOf();
                            setTimeout(function () {
                                var b = (new Date).valueOf();
                                b - a < 1550 && e()
                            }, 1500)
                        };
                    a.off("click.try-open-app").on("click.try-open-app", f)
                }
            }
        }, AppHelper.fixOpenUrl = function (vid, openUrl) {
            if (!vid || !openUrl) return openUrl;
            var re = eval("/(video_id=)([^&]*)/gi"),
                nUrl = openUrl.replace(re, "video_id=" + vid);
            return nUrl
        }, AppHelper.fixCidOpenUrl = function (cid, openUrl) {
            if (cid && openUrl) {
                var re = eval("/(video_id=)([^&]*)/gi"),
                    nUrl = openUrl.replace(re, "cover_id=" + cid);
                return nUrl
            }
        }, AppHelper.fixFromOpenUrl = function (from, openUrl) {
            if (from && openUrl) {
                var re = eval("/(from=)([^&]*)/gi"),
                    nUrl = openUrl.replace(re, "from=" + from);
                return nUrl
            }
        }, module.exports = AppHelper
    }, 31: function (a, b, c) {
        function d(a) {
            g.reportAppBanner({
                vid: l.vid,
                promotionId: l.reportPromotionId,
                appCase: 1 == Txplayer.dataset.hasApp ? 3 : 1,
                reportStep: a,
                limitCase: "",
                reportFrom: l.reportFrom,
                guid: l.guid
            })
        }

        function e() {
            this.init()
        }
        var f = (Txplayer.$, Txplayer.util),
            g = c(32),
            h = c(33),
            i = {
                2: "bannerStartDownload",
                3: "bannerPause",
                4: "bannerDownloaded",
                5: "bannerStartInstall",
                6: "bannerInstallFinish"
            },
            j = {
                1: "down",
                2: "downloading",
                3: "pause",
                4: "install",
                5: "install",
                6: "open",
                7: "open",
                8: "down"
            },
            k = "",
            l = {
                reportPromotionId: "",
                vid: "",
                reportFrom: "",
                str5: "",
                guid: ""
            };
        e.prototype = {
            init: function () {
                Txplayer.dataset.hasApp == -1 ? (Txplayer.dataset.downloadStatus = 1, this.tryOpenApp()) : f.browser.wechat ? this.WechatDownloader() : f.browser.mqq ? this.QQDownloader() : f.browser.mqqbrowser && this.QBDownloader()
            }, tryOpenApp: function () {
                Txplayer.msg.on("triggerBanner", function (a) {
                    if (!f.browser.wechat && !f.browser.mqq) {
                        var b = a.openUrl,
                            c = a.downloadUrl;
                        if (b && c) {
                            var d = function () {
                                    if (Txplayer.util.fiddlerLog("openApp"), f.os.ios && f.compareVersion(f.os.version, "9.0") > -1) try {
                                        Txplayer.util.fiddlerLog({
                                            openUrl: b,
                                            s: "\u76f4\u63a5\u6253\u5f00"
                                        }), window.location.href = b
                                    } catch (a) {} else {
                                        Txplayer.util.fiddlerLog({
                                            openUrl: b,
                                            s: "iframe\u6253\u5f00"
                                        });
                                        var a = document.createElement("iframe");
                                        a.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;", a.src = b, document.body.appendChild(a)
                                    }
                                },
                                e = function () {
                                    Txplayer.util.fiddlerLog({
                                        downloadUrl: c,
                                        s: "downloadApp"
                                    }), window.location.href = c
                                },
                                g = function () {
                                    d();
                                    var a = (new Date).valueOf();
                                    setTimeout(function () {
                                        var b = (new Date).valueOf();
                                        b - a < 1550 && (f && f.browser && f.browser.qqlive || e())
                                    }, 1500)
                                };
                            g()
                        }
                    }
                })
            }, WechatDownloader: function () {
                function a() {
                    "undefined" != typeof WeixinJSBridge && WeixinJSBridge.on && (WeixinJSBridge.invoke && o(), document.addEventListener("wxdownloader:state_change", function (a) {
                        b(a.detail)
                    }), WeixinJSBridge.on("wxdownload:state_change", function (a) {
                        document.dispatchEvent(new CustomEvent("wxdownloader:state_change", {
                            detail: a
                        }))
                    }))
                }

                function b(a) {
                    a && a.state && ("download_succ" != a.state || a.download_id != k && "" != a.download_id || (q(4), d(4), p(), d(5)), "default" == a.state, "downloading" == a.state, "download_fail" == a.state, "download_removed" == a.state && q(1))
                }

                function c() {
                    Txplayer.msg.on("triggerBanner", function (a) {
                        l.vid = a.vid, l.reportPromotionId = a.reportPromotionId, l.reportFrom = a.reportFrom, l.str5 = a.str5, l.guid = a.guid, e(a)
                    })
                }

                function e(a) {
                    var b = j[Txplayer.dataset.downloadStatus];
                    switch (b) {
                    case "open":
                        n(a);
                        break;
                    case "install":
                        m(a);
                        break;
                    case "downloading":
                        i();
                        break;
                    case "pause":
                    case "down":
                        g(a)
                    }
                }

                function g(a) {
                    WeixinJSBridge.invoke("addDownloadTask", {
                        task_name: a.appTitleName,
                        task_url: a.downloaderUrl,
                        file_md5: a.md5,
                        thumb_url: "http://i.gtimg.cn/qqlive/images/20150608/logo_app.png"
                    }, function (a) {
                        var b = a.err_msg;
                        b.indexOf("add_download_task:ok") > -1 ? (k = a.download_id, q(2)) : b.indexOf("add_download_task:cancel") > -1 && q(1)
                    })
                }

                function i() {
                    WeixinJSBridge.invoke("cancelDownloadTask", {
                        download_id: k
                    }, function (a) {
                        var b = a.err_msg;
                        b.indexOf("cancel_download_task:ok") > -1 && q(3)
                    })
                }

                function m() {
                    WeixinJSBridge.invoke("installDownloadTask", {
                        download_id: k
                    }, function (a) {
                        var b = a.err_msg;
                        b.indexOf("install_download_task:ok") > -1
                    })
                }

                function n(a) {
                    WeixinJSBridge.invoke("installDownloadTask", {
                        download_id: k
                    }, function (b) {
                        var c = b.err_msg;
                        c.indexOf("install_download_task:ok") > -1 || r(a.openUrl)
                    })
                }

                function o() {
                    WeixinJSBridge.invoke("queryDownloadTask", {
                        download_id: k
                    }, function (a) {
                        b(a)
                    })
                }

                function p() {
                    WeixinJSBridge.invoke("getInstallState", {
                        packageUrl: "tenvideo2://can_open_me_if_install_and_regeister_this_scheme",
                        packageName: "com.tencent.qqlive"
                    }, function (a) {
                        var b = a.err_msg;
                        b.indexOf("get_install_state:yes") > -1 ? (d(6), q(6)) : setTimeout(p, 5e3)
                    })
                }

                function q(a) {
                    Txplayer.dataset.downloadStatus = a, Txplayer.msg.broadcast("bannerDownloadStateChange")
                }

                function r(a) {
                    f.browser.wechat.version && f.compareVersion(f.browser.wechat.version, "6.5.5") > -1 ? f.os.ipad ? WeixinJSBridge.invoke("launchApplication", {
                        schemeUrl: a
                    }, function (a) {
                        "launchApplication:ok" != a.err_msg && f.log("open fail")
                    }) : WeixinJSBridge.invoke("launchApplication", {
                        appID: "wxca942bbff22e0e51",
                        extInfo: a,
                        parameter: a
                    }, function (b) {
                        "launchApplication:ok" != b.err_msg && h({
                            appId: "wx5a3178167066897b"
                        }, function () {
                            wx.invoke("launchApplication", {
                                appID: "wxca942bbff22e0e51",
                                extInfo: a,
                                parameter: a
                            }, function (a) {
                                "launchApplication:ok" != a.err_msg && f.log("open fail")
                            })
                        })
                    }) : window.location.href = a
                }
                2 == Txplayer.dataset.hasApp ? (Txplayer.dataset.downloadStatus = 1, f.os.ios ? Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.downloadUrl && (window.location.href = a.downloadUrl)
                }) : f.os.android && (window != top && (WeixinJSBridge = top.WeixinJSBridge), a(), c())) : 1 == Txplayer.dataset.hasApp && (Txplayer.dataset.downloadStatus = 6, Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.openUrl && r(a.openUrl)
                }))
            }, QQDownloader: function () {
                function a() {
                    Txplayer.msg.on("triggerBanner", function (a) {
                        l.vid = a.vid, l.reportPromotionId = a.reportPromotionId, l.reportFrom = a.reportFrom, l.str5 = a.str5, l.guid = a.guid, c(a)
                    })
                }

                function b(a, c) {
                    var e = {
                        appid: c.appid,
                        url: c.downloaderUrl,
                        packageName: c.packageName,
                        via: c.via,
                        appName: c.appTitleName,
                        actionCode: a
                    };
                    window.mqq.app.downloadApp(e, function (a) {
                        a.state && (20 == a.state && (a.state = 2), !!i[a.state] && g(a.state, a), 4 == a.state && (d(4), d(5), b(5, c)), 6 == a.state && (d(6), g(6)))
                    })
                }

                function c(a) {
                    var c = j[Txplayer.dataset.downloadStatus];
                    switch (c) {
                    case "open":
                        e(a);
                        break;
                    case "install":
                        b(5, a);
                        break;
                    case "downloading":
                        b(3, a);
                        break;
                    case "pause":
                    case "down":
                        b(2, a)
                    }
                }

                function e(a) {
                    mqq.app.checkAppInstalled && mqq.app.checkAppInstalled(a.packageName, function (c) {
                        0 == c ? b(5) : (g(7), window.location.href = a.openUrl)
                    })
                }

                function g(a, b) {
                    Txplayer.dataset.downloadStatus = a, b && (Txplayer.dataset.downloadProcess = b.pro), Txplayer.msg.broadcast("bannerDownloadStateChange")
                }
                if (2 == Txplayer.dataset.hasApp) {
                    if (Txplayer.dataset.downloadStatus = 1, f.os.ios) f.os.ios && Txplayer.msg.on("triggerBanner", function (a) {
                        a && a.downloadUrl && (window.location.href = a.downloadUrl)
                    });
                    else if (f.os.android) {
                        if (!window.mqq || !window.mqq.app || !window.mqq.app.downloadApp) return;
                        a()
                    }
                } else 1 == Txplayer.dataset.hasApp && (Txplayer.dataset.downloadStatus = 6, Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.downloadUrl && (window.location.href = a.openUrl)
                }))
            }, QBDownloader: function () {
                2 == Txplayer.dataset.hasApp ? (Txplayer.dataset.downloadStatus = 1, Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.downloadUrl && (window.location.href = a.downloadUrl)
                })) : 1 == Txplayer.dataset.hasApp && (Txplayer.dataset.downloadStatus = 6, Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.downloadUrl && (window.location.href = a.openUrl)
                }))
            }
        }, a.exports = function () {
            var a;
            return {
                initDownloader: function () {
                    if (!a) try {
                        a = new e
                    } catch (b) {
                        f.log("\u4e0b\u8f7d\u5668\u521d\u59cb\u5316\u5931\u8d25")
                    }
                    return a
                }
            }
        }()
    }, 32: function (a, b) {
        function c(a, b) {
            var c = b.config.playerType,
                d = b.config.videoType,
                h = {
                    version: Txplayer.dataset.ver,
                    uid: b.dataset.guid,
                    pid: b.dataset.playerId,
                    vid: b.dataset.vid,
                    player_type: c,
                    video_type: "vod" === d ? 1 : 2,
                    platform: b.dataset.platform,
                    url: document.URL,
                    filename: Txplayer.dataset.filename,
                    sub_version: Txplayer.dataset.flashVersion,
                    error_code: a.code || "",
                    error_msg: encodeURIComponent(a.msg) || "",
                    error_stack: a.stack || "",
                    file_lastupdate: Txplayer.dataset.lastModify,
                    qq_openid: e(),
                    browser: Txplayer.util.getBrowserBrand(),
                    osname: f(),
                    osver: Txplayer.util.os.version,
                    hc_uin: Txplayer.util.getQQFromCookie(),
                    hc_main_login: Txplayer.util.cookie.get("main_login"),
                    hc_vuserid: Txplayer.util.cookie.get("vuserid"),
                    hc_openid: Txplayer.util.cookie.get("openid"),
                    hc_appid: Txplayer.util.cookie.get("appid"),
                    hc_ua: Txplayer.util.getReportUA(),
                    hh_ref: Txplayer.util.getTopFrameUrl()
                };
            "flash" !== h.player_type && (h.sub_version = g(h.browser)), h.error_msg += "", h.error_stack += "", h.error_msg = h.error_msg.replace(/\$/g, ""), h.error_stack = h.error_stack.replace(/\$/g, ""), Txplayer.util.showInfo("\u9519\u8bef\u4e0a\u62a5", h);
            var i = "//btrace.video.qq.com/kvcollect?BossId=3720&Pwd=1814753491&";
            i += Txplayer.util.param(h), Txplayer.util.report(i)
        }

        function d(a) {
            function b() {
                var a;
                if (!(Txplayer && Txplayer.dataset && Txplayer.dataset._instance)) return a;
                for (var b in Txplayer.dataset._instance) {
                    a = Txplayer.dataset._instance[b];
                    break
                }
                return a
            }
            if (a && a.filename && a.message && a.filename.indexOf("//vm.gtimg.cn/tencentvideo/txp/js/") !== -1) {
                var c, d, f, g, h, i, j = b();
                try {
                    j && j.constructor === Txplayer && (c = j.getUserId(), d = j.getPlayerId(), f = j.getVid(), g = j.getPlayerType(), h = j.getVideoType(), i = j.getPlatform())
                } catch (k) {}
                var l = ["line=" + a.lineno, "column=" + a.colno].join(" "),
                    m = {
                        version: Txplayer.dataset.ver,
                        uid: c,
                        pid: d,
                        vid: f,
                        player_type: g,
                        video_type: "vod" === h ? 1 : 2,
                        platform: i,
                        url: document.URL,
                        filename: a.filename,
                        sub_version: Txplayer.dataset.flashVersion,
                        error_code: "3000",
                        error_msg: a.message,
                        error_stack: l,
                        file_lastupdate: Txplayer.dataset.lastModify,
                        qq_openid: e(),
                        hc_uin: Txplayer.util.getQQFromCookie(),
                        hc_main_login: Txplayer.util.cookie.get("main_login"),
                        hc_vuserid: Txplayer.util.cookie.get("vuserid"),
                        hc_openid: Txplayer.util.cookie.get("openid"),
                        hc_appid: Txplayer.util.cookie.get("appid"),
                        hc_ua: Txplayer.util.getReportUA()
                    };
                Txplayer.util.showInfo("\u9519\u8bef\u4e0a\u62a5", m);
                var n = "//btrace.video.qq.com/kvcollect?BossId=3720&Pwd=1814753491&";
                n += Txplayer.util.param(m), Txplayer.util.report(n)
            }
        }

        function e() {
            var a = Txplayer.util.cookie.get("openid") || Txplayer.util.getQQFromCookie();
            return a
        }

        function f() {
            var a = Txplayer.util.os;
            return a.windows ? "windows" : a.mac ? "mac" : a.linux ? "linux" : a.ipad ? "ipad" : a.iphone ? "iphone" : a.android ? "android" : "-1"
        }

        function g(a) {
            var b = "";
            if (a && Txplayer.util.browser && Txplayer.util.browser[a] && Txplayer.util.browser[a].version) return Txplayer.util.browser[a].version;
            for (var c in Txplayer.util.browser) {
                if (b) break;
                Txplayer.util.browser[c].version && (b = Txplayer.util.browser[c].version)
            }
            return b
        }

        function h(a, b) {
            var c = {
                version: Txplayer.dataset.ver,
                uid: a.dataset.guid,
                pid: a.dataset.playerId,
                vid: a.dataset.vid || a.config.vid,
                player_type: b.playType,
                video_type: "vod" === b.videoType ? 1 : 2,
                platform: a.dataset.platform,
                url: document.URL,
                filename: Txplayer.dataset.filename,
                sub_version: Txplayer.dataset.flashVersion,
                _dc: Math.random(),
                browser: Txplayer.util.getBrowserBrand(),
                osname: f(),
                osver: Txplayer.util.os.version,
                hc_uin: Txplayer.util.getQQFromCookie(),
                hc_main_login: Txplayer.util.cookie.get("main_login"),
                hc_vuserid: Txplayer.util.cookie.get("vuserid"),
                hc_openid: Txplayer.util.cookie.get("openid"),
                hc_appid: Txplayer.util.cookie.get("appid"),
                hc_ua: Txplayer.util.getReportUA(),
                hh_ref: Txplayer.util.getTopFrameUrl()
            };
            "flash" !== c.player_type && (c.sub_version = g(c.browser));
            var d = "//btrace.video.qq.com/kvcollect?BossId=3721&Pwd=1636975887&";
            d += Txplayer.util.param(c), !Txplayer.util.isNewsPlugin && Txplayer.util.report(d)
        }

        function i(a, b) {
            var c = b.config.playerType,
                d = b.config.videoType,
                e = {
                    version: Txplayer.dataset.ver,
                    uid: b.dataset.guid,
                    pid: b.dataset.playerId,
                    vid: b.dataset.vid,
                    player_type: c,
                    video_type: "vod" === d ? 1 : 2,
                    platform: b.dataset.platform,
                    usr_action: a.usr_action || "",
                    usr_action_detail: a.usr_action_detail || "",
                    url: document.URL
                };
            Txplayer.util.showInfo("\u7528\u6237\u884c\u4e3a\u4e0a\u62a5", e);
            var f = "//btrace.video.qq.com/kvcollect?BossId=3717&Pwd=1055758521&";
            f += Txplayer.util.param(e), Txplayer.util.report(f)
        }

        function j(a, b) {
            var c = {
                    gid: b.dataset.guid,
                    plt: b.dataset.platform,
                    uin: Txplayer.util.getQQFromCookie(),
                    vid: b.dataset.vid,
                    cts: +new Date,
                    sdt: b.dataset.stdfrom,
                    fne: a.filename,
                    dip: a.cdnIp,
                    cdn: a.cdnId,
                    vky: a.vkey || ""
                },
                d = "//btrace.video.qq.com/kvcollect?BossId=2594&Pwd=0&";
            d += Txplayer.util.param(c), !Txplayer.util.isNewsPlugin() && Txplayer.util.report(d)
        }

        function k(a, b) {
            var c = {
                url: encodeURIComponent(Txplayer.util.getTopFrameUrl()),
                ver: Txplayer.dataset.ver,
                ua: Txplayer.util.getReportUA(),
                iSta: "3537",
                val: 1,
                int1: Txplayer.util.getDeviceCode(),
                int2: Txplayer.util.getPlatformCode(),
                int3: 0,
                int4: 0,
                str1: "",
                str2: Txplayer.dataset.filename,
                str8: Txplayer.util.getUrlParam("mmuin"),
                __tm: Txplayer.util.dateFormat("yyyy-M-d h:m:s:S"),
                hc_openid: Txplayer.util.cookie.get("openid")
            };
            c.vid = a.vid, c.int6 = a.promotionId, c.str4 = a.appCase, c.int5 = a.reportStep, c.str5 = a.str5 || "", c.str6 = Txplayer.util.getUrlParam("openid", Txplayer.util.getTopFrameUrl()), c.str6 = c.str6 || "", c.str3 = a.reportFrom || "", c.str7 = a.guid || "", Txplayer.util.showInfo("AppBanner\u4e0a\u62a5", c);
            var d = "//btrace.video.qq.com/kvcollect?BossId=4046&Pwd=176231195&_dc=" + Math.random();
            d += "&" + Txplayer.util.param(c), Txplayer.util.isNewsPlugin() && location.href.indexOf("newsdebug=1") == -1 ? Txplayer.util.getChance(10) && Txplayer.util.report(d) : Txplayer.util.report(d)
        }

        function l(a, b) {
            a = a || {};
            var c = {
                version: Txplayer.dataset.ver,
                pid: b.dataset.guid,
                vid: b.dataset.vid,
                level: b.dataset.reportVideoLevel,
                val: b.dataset.userRealPlayedTime,
                bi: b.dataset.videoDuration,
                bt: b.dataset.duration,
                vt: b.dataset.reportCDNChannelId,
                step: 5,
                val1: a.isend ? 1 : 2,
                platform: 11,
                url: document.URL,
                cpay: b.dataset.isNeedPay ? 1 : 0,
                tpay: b.dataset.userPayStatus,
                ctime: Txplayer.util.dateFormat("yyyy-MM-dd hh:mm S"),
                ptime: b.dataset.currentTime,
                type: b.dataset.reportBusinessType,
                cmid: b.dataset.guid,
                ptag: Txplayer.util.getPTAG(),
                isvip: -1,
                tpid: b.dataset.videoCategoryId,
                login_type: Txplayer.util.cookie.get("main_login"),
                uin: Txplayer.util.getQQFromCookie(),
                vuserid: Txplayer.util.cookie.get("vuserid"),
                abi: b.dataset.userTotalPlayedTime
            };
            b.config && "function" === Txplayer.$.type(b.config.getUserType) && (c.isvip = 2 == b.config.getUserType() ? 1 : 0);
            var d = "//btrace.video.qq.com/kvcollect?BossId=3893&Pwd=1920472984&";
            d += Txplayer.util.param(c), Txplayer.util.showInfo("\u6210\u957f\u4f53\u7cfb\u65f6\u957f\u4e0a\u62a5", c), Txplayer.util.report(d)
        }

        function m(a, b) {
            a = a || {};
            var c = (Txplayer.util.getLoginID(), b.dataset.platform, {
                    flowid: b.dataset.flowid
                }),
                d = {
                    name: a.name || "",
                    ptime: b.dataset.currentTime || 0,
                    stime: a.requestStartTime,
                    etime: +new Date,
                    url: a.url || ""
                },
                e = "4564";
            a.hasOwnProperty("bossid") && (e = a.bossid), "4501" == e && "50" == a.step && (d = {
                reason: "",
                code: a.code || "",
                etime: +new Date
            }), c = Txplayer.$.extend(c, {
                data: JSON.stringify(d)
            }), c.step = a.step, a.hasOwnProperty("step") || (c.step = 61);
            var f = "//btrace.video.qq.com/kvcollect?BossId=" + e + "&Pwd=213967996&";
            f += Txplayer.$.param(c), Txplayer.util.fetch({
                url: f,
                credentials: "include"
            })
        }

        function n() {
            var a = {
                name: "",
                ver: ""
            };
            if (Txplayer.util.browser) {
                var b = Txplayer.util.browser;
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        if (d) {
                            a.name = c, a.ver = d.version;
                            break
                        }
                    }
            }
            return a
        }

        function o() {
            var a = "",
                b = location.hostname || "",
                c = location.href;
            try {
                Txplayer.util.inNewIframe() ? a = "iframe" : (a = b.replace(/\./gi, "_"), /http(s?):\/\/v.qq.com\/x\/(cover|page|)/.test(c) && (a += "_play"))
            } catch (d) {}
            return a
        }

        function p(a, b) {
            if ("LD" === a.adtype) {
                var c = a.ext_info || "";
                c += ";existblock:" + (TxpCreativePlayer && TxpCreativePlayer.adBlockEnabled ? 1 : 0);
                var d = "",
                    e = a.step_code;
                if (a.src) try {
                    if (0 == a.step_code) d = a.src;
                    else {
                        var f = "undefined" != typeof window.btoa ? btoa(a.src) : a.src;
                        d = f
                    }
                    var g = Txplayer.util.getDomainOfURL(a.src);
                    c += ";cdn:" + g
                } catch (h) {}
                if (!(a.step_duration < 0)) {
                    var i = n(),
                        j = {
                            flowid: b.dataset.flowid,
                            vid: b.dataset.vid,
                            type: a.adtype || "",
                            step: a.step || "",
                            step_duration: a.step_duration || "",
                            step_code: e,
                            step_index: a.step_index,
                            version: window.TxpCreativePlayer && window.TxpCreativePlayer.version || a.version,
                            platform: 1,
                            firstview_duration: a.firstview_duration,
                            client_version: "",
                            ext_info: c,
                            req_from: o(),
                            play_type: Txplayer.util.getVideoType(),
                            page_first_load: b.dataset.hasCallSetVid ? 0 : 1,
                            v_src: d,
                            url: document.URL,
                            step_dcode: a.step_dcode || 0,
                            browser: i.name,
                            browser_ver: i.ver
                        },
                        k = "//btrace.video.qq.com/kvcollect?BossId=6072&Pwd=1133018508&";
                    k += Txplayer.$.param(j), 1 == Txplayer.util.getUrlParam("debugadreport") ? window.console && window.console.log && window.console.log(j) : Txplayer.imgRpt ? Txplayer.util.requestViaImage(k) : Txplayer.util.fetch({
                        url: k,
                        credentials: "include"
                    })
                }
            }
        }

        function q(a) {
            a.msg.on("reportError", function (b) {
                c(b, a)
            }), a.msg.on("reportUsrAction", function (b) {
                i(b, a)
            }), a.msg.on("reportGetinfo", function (b) {
                j(b, a)
            }), a.msg.on("reportAppBanner", function (b) {
                k(b, a)
            }), a.msg.on("reportLoginUserPlayTime", function (b) {
                l(b, a)
            }), a.msg.on("reportPluginLoadError", function (b) {
                m(b, a)
            }), a.msg.on("reportAdInfo", function (b) {
                p(b, a)
            })
        }
        window.addEventListener ? window.addEventListener("error", d) : window.attachEvent && window.attachEvent("onerror", d), a.exports = {
            reportTxplayer: h,
            reportError: c,
            reportAppBanner: k,
            exportsReportApi: q
        }
    }, 33: function (a, b, c) {
        "use strict";

        function d(a, b) {
            b = k.once(b || e);
            var c = k.extend({
                debug: !1,
                beta: !0,
                appId: n
            }, a);
            l(c.api || "//video.qq.com/fcgi-bin/get_js_signature", {
                otype: "json",
                appid: c.appId,
                url: location.href.split("#")[0]
            }, function (a, d) {
                function e() {
                    wx.config({
                        beta: c.beta,
                        debug: c.debug,
                        appId: c.appId,
                        timestamp: d.timestamp,
                        nonceStr: d.ramdon_str,
                        signature: d.signature,
                        jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "onVoicePlayEnd", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard", "launchApplication"].concat(c.jsApiList || [])
                    }), wx.ready(function () {
                        b(null, d)
                    }), wx.error(function (a) {
                        b(a || "WX sign error.", d)
                    })
                }
                return d && 0 === d.ret ? void(window.wx ? e() : document.addEventListener("WeixinJSBridgeReady", e)) : b(a || d && d.msg || "error")
            }, {
                pn: "callback_func"
            })
        }

        function e() {}

        function f(a, b) {
            return b = b || e, m.isWX() ? j ? void b(null, i) : (h || (g = a, h = k.delegator(function (a) {
                return d(g, function (b, c) {
                    b || (j = !0, i = c), a(b, c)
                })
            }), window.addEventListener("popstate", function () {
                i = j = null, h()
            }), o && (history.pushstate = function () {
                return setTimeout(function () {
                    i = j = null, h()
                }, 0), o.apply(history, arguments)
            })), h(b)) : void b("Only work for wx app")
        }
        var g, h, i, j, k = c(34),
            l = c(35),
            m = c(37),
            n = "wx5a3178167066897b",
            o = history.pushstate;
        f.appId = n, f.ready = function (a) {
            function b() {
                wx.ready(a)
            }
            a && (window.wx ? b() : document.addEventListener("WeixinJSBridgeReady", b))
        }, a.exports = f
    }, 34: function (a, b) {
        "use strict";

        function c(a, b) {
            return a && a.hasOwnProperty && a.hasOwnProperty(b)
        }

        function d() {
            var a = this;
            return function () {
                setTimeout.apply(a, arguments)
            }
        }
        var e = void 0,
            f = {
                escape: function (a) {
                    return a ? String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
                }, type: function (a) {
                    if (null === a) return "null";
                    if (a === e) return "undefined";
                    var b = /\[object (\w+)\]/.exec(Object.prototype.toString.call(a));
                    return b ? b[1].toLowerCase() : ""
                }, keys: function (a) {
                    var b = [];
                    return a ? Object.keys ? Object.keys(a) : (this.objEach(a, function (a) {
                        b.push(a)
                    }), b) : b
                }, bind: function (a, b) {
                    return a.bind ? a.bind(b) : function () {
                        return a.apply(b, arguments)
                    }
                }, extend: function (a) {
                    if ("object" != this.type(a) && "function" != this.type(a)) return a;
                    for (var b, d, e = 1, f = arguments.length; e < f; e++) {
                        b = arguments[e];
                        for (d in b) c(b, d) && (a[d] = b[d])
                    }
                    return a
                }, trim: function (a) {
                    return a.trim ? a.trim() : a.replace(/^\s+|\s+$/gm, "")
                }, indexOf: function (a, b) {
                    if (a.indexOf) return a.indexOf(b);
                    var c = -1;
                    return f.some(a, function (a, d) {
                        if (a === b) return c = d, !0
                    }), c
                }, forEach: function (a, b) {
                    if (a.forEach) return a.forEach(b);
                    for (var c = a.length, d = 0; d < c; d++) b(a[d], d);
                    return a
                }, some: function (a, b) {
                    if (a.some) return a.some(b);
                    for (var c = a.length, d = !1, e = 0; e < c; e++)
                        if (b(a[e], e)) {
                            d = !0;
                            break
                        }
                    return d
                }, map: function (a, b) {
                    if (a.map) return a.map(b);
                    for (var c = a.length, d = [], e = 0; e < c; e++) d.push(b(a[e], e));
                    return d
                }, objEach: function (a, b) {
                    if (a)
                        for (var d in a)
                            if (c(a, d) && b(d, a[d]) === !1) break
                }, reduce: function (a, b) {
                    if ("function" != f.type(b)) throw new TypeError("Array.prototype.reduce callback must be a function");
                    var c = a.length;
                    if (0 === c && 2 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                    var d, e = 0;
                    if (arguments.length >= 3) d = arguments[2];
                    else
                        for (;;) {
                            if (e in a) {
                                d = a[e++];
                                break
                            }
                            if (++e >= c) throw new TypeError("reduceRight of empty array with no initial value")
                        }
                    for (; e < c; e++) d = b(d, a[e], e, a);
                    return d
                }, filter: function (a, b, c) {
                    if (a.filter) return a.filter(b);
                    for (var d = a.length, e = [], f = 0; f < d; f++) {
                        var g = a[f];
                        b.call(c, g, f, a) && e.push(g)
                    }
                    return e
                }, nextTick: d(),
                lock: function (a) {
                    var b;
                    return function () {
                        if (!b) {
                            b = !0;
                            var c = [].slice.call(arguments, 0);
                            return c.unshift(function () {
                                b = !1
                            }), a.apply(this, c)
                        }
                    }
                }, queue: function (a, b) {
                    function c() {
                        var a = d.shift();
                        if (!a) return void(e = b);
                        e--;
                        var f = a[0],
                            g = a[1],
                            h = a[2];
                        h.unshift(function () {
                            e++, c.apply(this, arguments);
                        }), setTimeout(function () {
                            f.apply(g, h)
                        })
                    }
                    b = b || 1;
                    var d = [],
                        e = b;
                    return function () {
                        if (d.push([a, this, [].slice.call(arguments, 0)]), e) return c()
                    }
                }, delegator: function (a) {
                    var b, c = [];
                    return function (d) {
                        return b ? c.push(d) : (b = !0, void a.call(this, function () {
                            b = !1;
                            var a = this,
                                e = arguments;
                            d && d.apply(a, e);
                            var g = c;
                            c = [], f.forEach(g, function (b) {
                                b && b.apply(a, e)
                            })
                        }))
                    }
                }, once: function (a) {
                    var b, c = arguments;
                    return function () {
                        if (!b && a) return b = !0, a.apply(c.length >= 2 ? c[1] : null, arguments)
                    }
                }, verCompare: function (a, b) {
                    if (a === b) return 0;
                    a = a.split("."), b = b.split(".");
                    for (var c = a.length >= b.length ? a.length : b.length, d = 0, e = 0; c--;) {
                        var f = Number(a[d] || 0),
                            g = Number(b[d++] || 0);
                        if (g > f) return 1;
                        if (g < f) return -1
                    }
                    return e
                }, batchTimeout: function (a, b) {
                    function c(a) {
                        return h.push(a), g ? void i.push(+new Date) : (f = +new Date, i.push(f), g = !0, void setTimeout(function () {
                            var a = Math.round(d.reduce(i, function (a, b) {
                                return a + (b - f)
                            }, 0) / i.length);
                            g = !1, i = [];
                            var c = h.slice(0);
                            h = [], setTimeout(function () {
                                c.forEach(function (a) {
                                    try {
                                        a && a()
                                    } catch (b) {}
                                })
                            }, Math.max(b - e - a, 0))
                        }, e))
                    }
                    var d = this,
                        e = b / a;
                    (!e || e < 1) && (a = 1, e = b), e = Math.round(e);
                    var f, g = !1,
                        h = [],
                        i = [];
                    return c
                }
            };
        a.exports = f
    }, 35: function (a, b, c) {
        "use strict";

        function d() {}

        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }

        function f(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }

        function g(a, b, c) {
            var g = arguments;
            return h(function (h, p) {
                var q;
                if ("object" == typeof b && (q = b, b = c, c = g[3]), q = q || {}, c = c || {}, b = b || d, "function" != typeof b) throw Error("illegal jsonp callback function:", b);
                var r = document.getElementsByTagName("head") ? document.getElementsByTagName("head")[0] : document.body,
                    s = document.createElement("script");
                s.charset = "UTF-8";
                var t = [c.ns || k, m++, e()].join("_"),
                    u = !0,
                    v = "_t",
                    w = c.time;
                c.callbackid && (t = c.callbackid), w === !1 ? u = !1 : w && (v = w), q[c.pn || c.callbackName || l] = t, u && (q[v] = +new Date);
                var x = function (a) {
                        f(s), b(null, a), h && h(a)
                    },
                    y = function (a) {
                        f(s), b(a || "error"), window[t] = x = y = d, p && p(a || error)
                    },
                    z = window[t];
                window[t] = function (a) {
                    window[t] = d;
                    try {
                        z && z(a)
                    } finally {
                        x(a), x = y = d
                    }
                }, s.onerror = s.onabort = function (a) {
                    y(a ? a.type : "error")
                }, i.forEach(o, function (b) {
                    "function" == i.type(b) && (a = b(a, q) || a)
                }), s.src = j.queryJoin(a, q), r.appendChild(s), setTimeout(function () {
                    y("timeout")
                }, c.timeout || n)
            })
        }

        function h(a) {
            return window.Promise ? new Promise(a) : void a(d, d)
        }
        var i = c(34),
            j = c(36),
            k = "_jsonp",
            l = "callback",
            m = 0,
            n = 2e4,
            o = [];
        g.timeout = function (a) {
            n = a
        }, g.ns = function (a) {
            k = a
        }, g.pn = function (a) {
            l = a
        }, g.before = function (a) {
            o.push(a)
        }, a.exports = g
    }, 36: function (a, b, c) {
        "use strict";
        var d = c(34),
            e = {
                queryParse: function (a, b) {
                    if (!a) return {};
                    b = b || "&";
                    var c = a.replace(/^\?/, ""),
                        e = {},
                        f = c ? c.split(b) : null;
                    return f && f.length > 0 && d.forEach(f, function (a) {
                        a = a.split("=");
                        var b = a.splice(0, 1),
                            c = a.join("=");
                        e[b] = decodeURIComponent(c)
                    }), e
                }, queryJoin: function (a) {
                    var b = [].slice.call(arguments);
                    b[0] = {};
                    var c = e.queryStringify(d.extend.apply(d, b));
                    if (!c) return a;
                    var f;
                    return f = /[\?&]$/.test(a) ? "" : ~a.indexOf("?") ? "&" : "?", a + f + c
                }, queryStringify: function (a, b) {
                    return a ? d.map(d.keys(a), function (b) {
                        return b + "=" + encodeURIComponent(a[b])
                    }).join(b || "&") : ""
                }
            };
        a.exports = e
    }, 37: function (a, b) {
        "use strict";
        var c = navigator.userAgent,
            d = c.toLowerCase();
        a.exports = {
            isIE: function () {
                return /; msie\b|; trident\b|\bedge\//.test(d)
            }, isWX: function () {
                return /micromessenger/.test(d)
            }, isQQ: function () {
                return /\bqq\b/.test(d)
            }, isQQBrowser: function () {
                return /mqqbrowser/.test(d)
            }, isQQLive: function () {
                return /qqlive/.test(d)
            }, isQQLiveBroadcast: function () {
                return /qqlivebroadcast/.test(d)
            }, isMobile: function () {
                return !!(c.match(/Android/i) || c.match(/android/i) || c.match(/iPhone/i) || c.match(/iPod/i) || c.match(/webOS/i) || c.match(/BlackBerry/i) || c.match(/BB/i) || c.match(/Windows Phone/i) || c.match(/iPad.*MicroMessenger/i) || c.match(/IEMobile/i))
            }, isIOS: function () {
                return /iPad|iPhone|iPod/.test(c) && !window.MSStream
            }, isMac: function () {
                return /\bmac\b/.test(d)
            }, isPC: function () {
                return /Win/.test(c)
            }, isAndroid: function () {
                return /android/.test(d)
            }, isChrome: function () {
                return /Chrome\//.test(c)
            }, wxVer: function () {
                var a = d.match(/micromessenger\/([\d\.]+)/);
                return a ? a[1] : ""
            }, androidVer: function () {
                var a = d.match(/android\s([0-9\.]*)/);
                return a ? a[1] : ""
            }
        }
    }, 57: function (a, b, c) {
        function d(a) {
            this.msg = new Txplayer.Events, this.dataset = {}, this.context = {}, this.context.msg = this.msg, this.context.dataset = this.dataset, a.news && (this.initBanner(a), this.init(a))
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = f.AppHelper || c(30),
            h = f.downloader || c(31);
        f.downloader = h;
        var i = c(28),
            j = c(32);
        d.prototype = {
            stepReport: function (a) {
                var b = this;
                j.reportAppBanner({
                    vid: b.dataset.vid || "",
                    promotionId: b.context.dataset.promotionId,
                    appCase: 1 == Txplayer.dataset.hasApp ? 3 : 1,
                    reportStep: a,
                    limitCase: "",
                    reportFrom: b.context.dataset.reportFrom,
                    guid: ""
                })
            }, init: function (a) {
                this.dataset.vid = a.vid, this.context.dataset.openUrl = a.openUrl, this.context.dataset.promotionId = a.promotionId || "140", this.context.dataset.reportFrom = a.reportFrom || "", this.addEventListener(), this.checkAppInstalled()
            }, initBanner: function (a) {
                this.dataset.bannerWrapper = e(a.bannerWrapper).empty(), this.dataset.status = {
                    1: "down",
                    2: "downloading",
                    3: "pause",
                    4: "install",
                    5: "install",
                    6: "open",
                    7: "open",
                    8: "down"
                };
                var b = a.freeBannerDownloadText || "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c" + (a.bannerDownloadText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    c = a.freeBannerOpenText || "\u5b89\u88c5\u817e\u8baf\u89c6\u9891\uff0c" + (a.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    d = a.freeBannerOpenText || "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c" + (a.bannerOpenText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267"),
                    f = a.freeBannerDownloadText || "\u5230\u817e\u8baf\u89c6\u9891\uff0c" + (a.bannerDownloadText || "\u770b\u66f4\u591a\u70ed\u95e8\u7f8e\u5267");
                this.dataset.statusText = {
                    1: b,
                    2: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c" + (a.freeBannerDownloadingText || "\u89c2\u770b\u66f4\u591a"),
                    3: "\u7ee7\u7eed\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c" + (a.freeBannerDownloadingText || "\u89c2\u770b\u66f4\u591a"),
                    4: c,
                    5: c,
                    6: d,
                    7: d,
                    8: f
                }, this.write(), this.addBannerEventListener()
            }, write: function () {
                var a = {};
                this.dataset.renderData = a;
                var b = e(e.tmpl(i, a));
                this.dataset.bannerWrapper.append(b), this.dataset.$download = b, this.dataset.$downloadBanner = b.find('[data-role="txp-h5-downloadBanner"]'), this.dataset.$downloadBannerText = this.dataset.$downloadBanner.find('[data-role="txp-h5-downloadBannerText"]'), this.dataset.$downloadBannerPro = this.dataset.$downloadBanner.find('[data-role="txp-h5-downloadBannerPro"]'), this.hide()
            }, changeStatus: function (a) {
                a && (this.dataset.$downloadBanner.attr("data-status", this.dataset.status[a]), this.dataset.$downloadBannerText.attr("data-text", this.dataset.statusText[a]), f.log("d-data-status:" + this.dataset.status[a]))
            }, changeProgress: function (a) {
                this.dataset.$downloadBanner.addClass("txp_nonauto"), a && (f.log(a), this.dataset.$downloadBannerPro.css("width", a + "%"), this.dataset.$downloadBannerText.attr("data-text", "\u4e0b\u8f7d\u4e2d " + a + "%"))
            }, hide: function () {
                this.dataset.$download && this.dataset.$download.addClass(Txplayer.dataset.hideClass)
            }, show: function () {
                this.dataset.$download && this.dataset.$download.removeClass(Txplayer.dataset.hideClass)
            }, checkAppInstalled: function () {
                var a = this;
                g.check(), a.context.msg.broadcast("beforeAppChecked", f.getData("txv-download-state") || 8), g.getAppInfo({
                    vid: this.context.dataset.vid,
                    promotionId: this.context.dataset.promotionId
                }).done(function (b) {
                    a.context.dataset.appData = b, a.dataset.hasApp = Txplayer.dataset.hasApp || null, null === a.dataset.hasApp ? Txplayer.msg.once("onCheckHasApp", function (b) {
                        a.dataset.hasApp = b, a.context.msg.broadcast("appChecked", a.dataset.hasApp)
                    }) : a.context.msg.broadcast("appChecked", a.dataset.hasApp)
                })
            }, onBannerClick: function (a) {
                var b = {
                    1: 2,
                    2: 3,
                    3: 2,
                    4: 5,
                    6: 7
                };
                this.stepReport(b[Txplayer.dataset.downloadStatus]);
                var c = e.extend({}, this.context.dataset.appData, {
                    openUrl: this.openUrlFix(a),
                    reportPromotionId: this.context.dataset.promotionId,
                    reportFrom: this.dataset.reportFrom || "",
                    str5: a.str5 || "",
                    guid: ""
                });
                Txplayer.msg.broadcast("triggerBanner", c)
            }, openUrlFix: function (a) {
                var b;
                return b = a.openUrl ? a.openUrl : a.cid ? g.fixCidOpenUrl(a.cid, this.context.dataset.appData.openUrl) : g.fixOpenUrl(a.vid, this.context.dataset.appData.openUrl), b = "859" == a.reportPromotionId || "860" == a.reportPromotionId || "87" == a.reportPromotionId ? g.fixFromOpenUrl(a.reportPromotionId, b) : g.fixFromOpenUrl(this.context.dataset.vid || a.reportPromotionId || "140", b), b + "&jsapi=1"
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("bannerClick", function (b) {
                    a.onBannerClick(b)
                }), a.context.msg.on("appChecked", function () {
                    f.downloader.initDownloader(), a.context.msg.broadcast("bannerDownloadStateChange", Txplayer.dataset.downloadStatus, Txplayer.dataset.downloadProcess), f.setData("txv-download-state", Txplayer.dataset.downloadStatus), Txplayer.msg.on("bannerDownloadStateChange", function () {
                        f.setData("txv-download-state", Txplayer.dataset.downloadStatus);
                        var b = Txplayer.dataset.downloadStatus,
                            c = Txplayer.dataset.downloadProcess;
                        a.context.msg.broadcast("bannerDownloadStateChange", b, c)
                    })
                })
            }, addBannerEventListener: function () {
                var a = this;
                a.context.msg.on("appChecked", function (b) {
                    a.updateBanner(b)
                }), a.context.msg.on("beforeAppChecked", function (b) {
                    a.changeStatus(b), a.show()
                }), a.context.msg.on("bannerDownloadStateChange", function (b, c) {
                    b && a.changeStatus(b), void 0 !== c && "2" == b && a.changeProgress(c)
                })
            }, updateBanner: function (a) {
                1 == a ? (this.changeStatus(6), this.stepReport(6)) : 2 == a ? (this.changeStatus(1), this.stepReport(1)) : a == -1 && (this.changeStatus(8), this.stepReport(1)), this.show(), this.bindClickReport()
            }, bindClickReport: function () {
                var a = this;
                this.dataset.$downloadBanner.on("click", function () {
                    a.context.msg.broadcast("bannerClick", {
                        reportPromotionId: a.dataset.reportPromotionId,
                        vid: a.context.dataset.vid,
                        openUrl: a.context.dataset.openUrl
                    })
                })
            }
        }, Txplayer.register("H5PageBanner", d)
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
}([
    function (a, b, c) {
        a.exports = c(29)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (a, b, c) {
        function d(a) {
            this.msg = new Txplayer.Events, this.dataset = {}, this.context = a, this.init()
        }
        var e = Txplayer.$,
            f = Txplayer.util,
            g = f.AppHelper || c(30),
            h = f.downloader || c(31);
        f.downloader = h, d.prototype = {
            init: function () {
                this.dataset.vid = this.context.dataset.vid || this.context.config.vid, this.dataset.promotionId = this.context.config.promotionId || "140", this.dataset.reportFrom = this.context.config.reportFrom || "", this.addEventListener(), this.checkAppInstalled()
            }, checkAppInstalled: function () {
                var a = this;
                g.check(), a.context.msg.broadcast("beforeAppChecked", f.getData("txv-download-state") || 8), g.getAppInfo({
                    vid: a.dataset.vid,
                    promotionId: a.dataset.promotionId
                }).done(function (b) {
                    a.context.dataset.appData = b, a.dataset.hasApp = Txplayer.dataset.hasApp || null, null === a.dataset.hasApp ? Txplayer.msg.once("onCheckHasApp", function (b) {
                        a.dataset.hasApp = b, a.context.msg.broadcast("appChecked", a.dataset.hasApp)
                    }) : a.context.msg.broadcast("appChecked", a.dataset.hasApp)
                })
            }, onBannerClick: function (a) {
                var b = {
                    1: 2,
                    2: 3,
                    3: 2,
                    4: 5,
                    6: 7
                };
                this.stepReport({
                    reportStep: b[Txplayer.dataset.downloadStatus],
                    reportPromotionId: a.reportPromotionId,
                    str5: a.str5 || ""
                });
                var c = e.extend({}, this.context.dataset.appData, {
                    openUrl: this.openUrlFix(a),
                    reportPromotionId: "859" == a.reportPromotionId || "860" == a.reportPromotionId || "87" == a.reportPromotionId ? a.reportPromotionId : this.context.config.promotionId || a.reportPromotionId || "140",
                    reportFrom: this.dataset.reportFrom || "",
                    str5: a.str5 || "",
                    guid: this.context.dataset.guid || ""
                });
                Txplayer.msg.broadcast("triggerBanner", c)
            }, openUrlFix: function (a) {
                var b;
                return b = a.openUrl ? a.openUrl : a.cid ? g.fixCidOpenUrl(a.cid, this.context.dataset.appData.openUrl) : g.fixOpenUrl(a.vid, this.context.dataset.appData.openUrl), b = "859" == a.reportPromotionId || "860" == a.reportPromotionId || "87" == a.reportPromotionId ? g.fixFromOpenUrl(a.reportPromotionId, b) : g.fixFromOpenUrl(this.context.config.promotionId || a.reportPromotionId || "140", b), b + "&jsapi=1"
            }, stepReport: function (a) {
                var b = {
                    vid: a.vid || this.context.dataset.vid,
                    promotionId: "859" == a.reportPromotionId || "860" == a.reportPromotionId || "87" == a.reportPromotionId ? a.reportPromotionId : this.context.config.promotionId || a.reportPromotionId || "140",
                    appCase: 1 === this.dataset.hasApp ? 3 : 1,
                    reportStep: a.reportStep || "",
                    limitCase: a.limitCase || "",
                    reportFrom: this.dataset.reportFrom || "",
                    str5: a.str5 || "",
                    guid: this.context.dataset.guid || ""
                };
                this.context.msg.broadcast("reportAppBanner", b)
            }, addEventListener: function () {
                var a = this;
                a.context.msg.on("bannerReport", function (b) {
                    a.stepReport(b)
                }), a.context.msg.on("bannerClick", function (b) {
                    a.onBannerClick(b)
                }), a.context.msg.on("appChecked", function () {
                    f.downloader.initDownloader(), a.context.msg.broadcast("bannerDownloadStateChange", Txplayer.dataset.downloadStatus, Txplayer.dataset.downloadProcess), f.setData("txv-download-state", Txplayer.dataset.downloadStatus), Txplayer.msg.on("bannerDownloadStateChange", function () {
                        f.setData("txv-download-state", Txplayer.dataset.downloadStatus), a.context.msg.broadcast("bannerDownloadStateChange", Txplayer.dataset.downloadStatus, Txplayer.dataset.downloadProcess)
                    })
                })
            }
        }, Txplayer.register("H5Downloader", d)
    },
    function (module, exports) {
        var AppHelper = {},
            util = Txplayer.util,
            api = Txplayer.apiList,
            isChecking = !1,
            checked = !1,
            md5 = "",
            config = {
                mqqBrowserApiUrl: "//res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js",
                mqqApiUrl: "//pub.idqqimg.com/qqmobile/qqapi.js"
            },
            appConfig = {
                qqlive: {
                    md5Cgi: "//commdata.v.qq.com/commdatav2?cmd=39&otype=json&confid=${id}",
                    md5Cgi_https: "https://sec.video.qq.com/p/mcgi.v/commdatav2?cmd=39&otype=json&confid=${id}",
                    payUrl: "http://film.qq.com/weixin/detail/${index}/${cid}.html",
                    scheme: "tenvideo2://",
                    openUrl: "tenvideo2://?action=5&video_id=${vid}",
                    liveOpenUrl: "tenvideo2://?action=8&channel_id=${lid}",
                    downloadUrl: function () {
                        return util.os.iphone ? "https://itunes.apple.com/cn/app/id458318329?mt=8" : util.os.ipod ? "https://itunes.apple.com/cn/app/id458318329?mt=8" : util.os.ipad ? "https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8" : util.os.android ? "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=${promotionId}&platform=aphone" : void 0
                    }(),
                    VIA: "ANDROIDQQ.QQLIVE",
                    appId: "100730521",
                    packageName: util.os.ios ? "com.tencent.live4iphone" : "com.tencent.qqlive",
                    packageUrl: "tenvideo2://can_open_me_if_install_and_regeister_this_scheme",
                    appName: "\u817e\u8baf\u89c6\u9891"
                }
            };
        AppHelper.loadMqqBrowserAPI = function () {
            if (Txplayer.dataset.loadMqqBrowserAPIDefer) return Txplayer.dataset.loadMqqBrowserAPIDefer;
            var a = Txplayer.$.Deferred();
            if (Txplayer.dataset.loadMqqBrowserAPIDefer = a, window.x5) a.resolve();
            else {
                var b = config.mqqBrowserApiUrl;
                Txplayer.$.getScript(b, function () {
                    window.x5 ? a.resolve() : a.reject()
                })
            }
            return setTimeout(function () {
                a.reject()
            }, 5e3), a
        }, AppHelper.loadMqqAPI = function () {
            if (Txplayer.dataset.loadQQClientDefer) return Txplayer.dataset.loadQQClientDefer;
            var a = Txplayer.$.Deferred();
            if (Txplayer.dataset.loadQQClientDefer = a, window.mqq || window.QQApi) a.resolve();
            else {
                var b = config.mqqApiUrl;
                "undefined" == typeof Txplayer.$.getScript && (Txplayer.$.getScript = function (a, b) {
                    var c = document.createElement("script");
                    c.async = "async", c.src = a, b && (c.onload = b), document.getElementsByTagName("head")[0].appendChild(c)
                }), Txplayer.$.getScript(b, function () {
                    a.resolve()
                })
            }
            return setTimeout(function () {
                a.reject()
            }, 3e3), a
        }, AppHelper.getWechatOpenid = function () {
            var a = "";
            return util.browser.wechat && (a = util.getUrlParam("openid", window != top ? top.location.href.toString() : "")), a
        }, AppHelper.getAppMd5 = function (a, b) {
            var c = Txplayer.$.Deferred();
            a = a || 140, b = b || "qqlive";
            var d = appConfig[b].md5Cgi,
                e = d.replace("${id}", a);
            return md5 ? c.resolve({
                md5: md5
            }) : (Txplayer.$.ajax({
                url: e,
                dataType: "jsonp",
                jsonpCallback: "getmd5_callback_" + parseInt(1e6 * Math.random())
            }).then(function (a) {
                c.resolve(a && a.data ? a.data : a)
            }), setTimeout(function () {
                c.resolve({
                    md5: ""
                })
            }, 2e3)), c
        }, AppHelper.OnWechatReady = function () {
            var a = Txplayer.$.Deferred(),
                b = window === top ? document : top.document;
            return b.addEventListener("WeixinJSBridgeReady", function () {
                a.resolve()
            }), a
        }, AppHelper.isAppInstalled = function (a) {
            a = a || {};
            var b = Txplayer.$.Deferred(),
                c = {
                    hasApp: -1,
                    openUrl: "",
                    downloadUrl: "",
                    promotionId: a.promotionId || 140
                };
            util.os.ios || util.os.android || (c.hasApp = -2, b.resolve(c));
            var d = "";
            a.appName || (a.appName = "qqlive");
            var e = appConfig[a.appName];
            c.openUrl = e.openUrl, c.downloadUrl = e.downloadUrl, c.appTitleName = e.appName, a.vid && (c.openUrl = c.openUrl.replace(/\$\{vid\}/gi, a.vid)), c.promotionId && (c.openUrl.indexOf("from=") > -1 ? c.openUrl = c.openUrl.replace(/\&from=(\d)+/, "&from=" + a.promotionId) : c.openUrl += "&from=" + a.promotionId, c.downloadUrl = c.downloadUrl.replace(/\$\{promotionId\}/gi, a.promotionId)), util.browser.wechat && (d = AppHelper.getWechatOpenid(), d && c.openUrl.indexOf("wxplugopenid=") === -1 && (c.openUrl += "&wxplugopenid=" + d)), util.browser.wechat ? c.openUrl += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1" : util.browser.mqq && (c.openUrl += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ"), a.openUrl && (c.openUrl = util.xss(a.openUrl));
            var f = function () {
                    window === top ? document : top.document;
                    Txplayer.util.fiddlerLog("taskInWechat");
                    var d = function () {
                        if (Txplayer.util.fiddlerLog("taskInWechat.invoke"), !top.WeixinJSBridge || !top.WeixinJSBridge.invoke) return Txplayer.util.fiddlerLog("taskInWechat.invoke no api"), void b.resolve(c);
                        var d = {
                            packageUrl: e.packageUrl,
                            packageName: e.packageName
                        };
                        Txplayer.util.fiddlerLog("taskInWechat.invoke exec api"), top.WeixinJSBridge.invoke("getInstallState", d, function (d) {
                            Txplayer.util.fiddlerLog({
                                "taskInWechat.invoke": d
                            });
                            var e = d.err_msg;
                            e.indexOf("get_install_state:yes") > -1 ? (c.hasApp = 1, b.resolve(c)) : (c.hasApp = 0, AppHelper.getAppMd5(c.promotionId, a.appName).done(function (a) {
                                a && a.md5 && (c.md5 = a.md5), b.resolve(c)
                            }).fail(function () {
                                c.md5 = "-1", b.resolve(c)
                            }))
                        })
                    };
                    top.WeixinJSBridge ? d() : AppHelper.OnWechatReady().done(function () {
                        d()
                    }), setTimeout(function () {
                        b.resolve(c)
                    }, 6e3)
                },
                g = function () {
                    var a = util.os.ios ? e.packageUrl : e.packageName,
                        d = function () {
                            c.appid = e.appId, c.packageName = e.packageName, c.via = e.VIA, !util.os.ios && window.QQApi && window.QQApi.checkAppInstalled ? window.QQApi.checkAppInstalled(a, function (a) {
                                c.hasApp = a && 0 != a ? 1 : 0, b.resolve(c)
                            }) : window.mqq && window.mqq.app && window.mqq.app.isAppInstalled ? window.mqq.app.isAppInstalled(a, function (a) {
                                c.hasApp = a ? 1 : 0, b.resolve(c)
                            }) : b.resolve(0)
                        };
                    AppHelper.loadMqqAPI().done(function () {
                        d()
                    })
                },
                h = function () {
                    !util.os.iphone && window.QQApi && QQApi.checkAppInstalled && g();
                    var a = function () {
                        window.x5 && x5.ios && x5.ios.getMobileAppSupport ? x5.ios.getMobileAppSupport({
                            scheme: e.packageUrl
                        }, function (a) {
                            a ? (c.hasApp = 1 == a.isSupportApp ? 1 : 0, b.resolve(c)) : b.resolve(0)
                        }, function () {
                            b.resolve(0)
                        }) : b.resolve(0), setTimeout(function () {
                            b.resolve(0)
                        }, 300)
                    };
                    if (!util.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                        var d = window.x5mtt.isApkInstalled('{"packagename": "com.tencent.qqlive"}');
                        c.hasApp = d == -1 ? 0 : 1, b.resolve(c)
                    } else util.os.iphone && parseInt(util.os.version) > 5 ? AppHelper.loadMqqBrowserAPI().done(function () {
                        a()
                    }).fail(function () {
                        b.resolve(0)
                    }) : b.resolve(0);
                    setTimeout(function () {
                        b.resolve(0)
                    }, 3e3)
                };
            return util.browser.wechat ? f() : util.browser.mqq ? g() : util.browser.mqqbrowser ? h() : b.resolve(c), b
        }, AppHelper.checkHasApp = function (a) {
            a = a || {};
            var b = -1,
                c = Txplayer.$.Deferred();
            util.os.ios || util.os.android || (b = -2, c.resolve(b)), a.appName || (a.appName = "qqlive");
            var d = appConfig[a.appName],
                e = function () {
                    var a = function () {
                        if (!top.WeixinJSBridge || !top.WeixinJSBridge.invoke) return void c.resolve(util.getData("txv-download-hasapp") || -1);
                        var a = {
                            packageUrl: d.packageUrl,
                            packageName: d.packageName
                        };
                        top.WeixinJSBridge.invoke("getInstallState", a, function (a) {
                            var d = a.err_msg;
                            b = d.indexOf("get_install_state:yes") > -1 ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                        })
                    };
                    top && top.WeixinJSBridge || window.WeixinJSBridge ? a() : AppHelper.OnWechatReady().done(function () {
                        a()
                    }), setTimeout(function () {
                        c.resolve(util.getData("txv-download-hasapp") || -1)
                    }, 6e3)
                },
                f = function () {
                    var a = util.os.ios ? d.packageUrl : d.packageName,
                        e = function () {
                            !util.os.ios && window.QQApi && window.QQApi.checkAppInstalled ? window.QQApi.checkAppInstalled(a, function (a) {
                                b = a && 0 != a ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                            }) : window.mqq && window.mqq.app && window.mqq.app.isAppInstalled ? window.mqq.app.isAppInstalled(a, function (a) {
                                b = "object" == typeof a ? a.result ? 1 : 2 : a ? 1 : 2, util.setData("txv-download-hasapp", b), c.resolve(b)
                            }) : c.resolve(util.getData("txv-download-hasapp") || -1)
                        };
                    AppHelper.loadMqqAPI().done(function () {
                        e()
                    })
                },
                g = function () {
                    !util.os.iphone && window.QQApi && QQApi.checkAppInstalled && f();
                    var a = function () {
                        window.x5 && x5.ios && x5.ios.getMobileAppSupport ? x5.ios.getMobileAppSupport({
                            scheme: d.packageUrl
                        }, function (a) {
                            a ? (b = 1 == a.isSupportApp ? 1 : 2, c.resolve(b)) : c.resolve(-1)
                        }, function () {
                            c.resolve(-1)
                        }) : c.resolve(-1), setTimeout(function () {
                            c.resolve(-1)
                        }, 300)
                    };
                    if (!util.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                        var e = window.x5mtt.isApkInstalled('{"packagename": "com.tencent.qqlive"}');
                        b = e == -1 ? 2 : 1, c.resolve(b)
                    } else util.os.iphone && parseInt(util.os.version) > 5 ? AppHelper.loadMqqBrowserAPI().done(function () {
                        a()
                    }).fail(function () {
                        c.resolve(-1)
                    }) : c.resolve(-1);
                    setTimeout(function () {
                        c.resolve(-1)
                    }, 3e3)
                };
            return util.browser.wechat ? e() : util.browser.mqq ? f() : util.browser.mqqbrowser ? g() : c.resolve(-1), c
        }, AppHelper.check = function () {
            isChecking || checked || (isChecking = !0, AppHelper.checkHasApp().done(function (a) {
                util.log("app-helper checkHasApp", a), Txplayer.dataset.hasApp = a, Txplayer.msg.broadcast("onCheckHasApp", a)
            }).always(function () {
                isChecking = !1, checked = !0
            }))
        }, AppHelper.getPromotionIdByPtag = function () {
            var a = util.getPTAG() || "";
            Txplayer.$.Deferred();
            if (a) {
                var b = " http://growth.video.qq.com/fcgi-bin/h5_player_ptag",
                    c = {
                        appid: 1,
                        appkey: 1,
                        ptag: a
                    };
                Txplayer.$.ajax({
                    url: b,
                    data: c,
                    dataType: "jsonp",
                    jsonpCallback: "getmd5_callback_" + parseInt(1e6 * Math.random())
                }).then(function (a) {
                    util.log(a)
                })
            }
        }, AppHelper.getAppInfo = function (a) {
            a = a || {};
            var b = Txplayer.$.Deferred(),
                c = {
                    vid: a.vid || "",
                    promotionId: a.promotionId || 140
                },
                d = "";
            a.appName || (a.appName = "qqlive");
            var e = appConfig[a.appName];
            return c.openUrl = e.openUrl, c.downloadUrl = e.downloadUrl || "", c.appTitleName = e.appName, a.vid && (c.openUrl = c.openUrl.replace(/\$\{vid\}/gi, a.vid)), c.promotionId && (c.openUrl.indexOf("from=") > -1 ? c.openUrl = c.openUrl.replace(/\&from=(\d)+/, "&from=" + a.promotionId) : c.openUrl += "&from=" + a.promotionId, c.downloadUrl = c.downloadUrl.replace(/\$\{promotionId\}/gi, a.promotionId), c.downloaderUrl = c.downloadUrl), util.browser.miuibrowser && "xiaomiqj" === util.getPTAG() && (c.downloadUrl = "market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true"), util.browser.wechat ? (d = AppHelper.getWechatOpenid(), d && c.openUrl.indexOf("wxplugopenid=") === -1 && (c.openUrl += "&wxplugopenid=" + d), c.openUrl += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1", util.os.android ? AppHelper.getAppMd5(c.promotionId, a.appName).done(function (a) {
                a && a.md5 && (c.md5 = a.md5, md5 = a.md5), b.resolve(c)
            }).fail(function () {
                c.md5 = "", b.resolve(c)
            }) : b.resolve(c)) : util.browser.mqq ? (c.openUrl += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ", c.appid = e.appId, c.packageName = e.packageName, c.via = e.VIA, b.resolve(c)) : b.resolve(c), b
        }, AppHelper.tryOpenApp = function (a) {
            if (a && a.length && !util.browser.wechat && !util.browser.mqq) {
                var b = a.attr("data-openurl"),
                    c = a.attr("data-downloadurl");
                if (b && c) {
                    var d = function () {
                            if (Txplayer.util.fiddlerLog("openApp"), util.os.ios && util.compareVersion(util.os.version, "9.0") > -1) try {
                                Txplayer.util.fiddlerLog({
                                    openurl: b,
                                    s: "\u76f4\u63a5\u6253\u5f00"
                                }), window.location.href = b
                            } catch (a) {} else {
                                Txplayer.util.fiddlerLog({
                                    openurl: b,
                                    s: "iframe\u6253\u5f00"
                                });
                                var a = document.createElement("iframe");
                                a.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;", a.src = b, document.body.appendChild(a)
                            }
                        },
                        e = function () {
                            Txplayer.util.fiddlerLog({
                                downloadurl: c,
                                s: "downloadApp"
                            }), window.location.href = c
                        },
                        f = function () {
                            d();
                            var a = (new Date).valueOf();
                            setTimeout(function () {
                                var b = (new Date).valueOf();
                                b - a < 1550 && e()
                            }, 1500)
                        };
                    a.off("click.try-open-app").on("click.try-open-app", f)
                }
            }
        }, AppHelper.fixOpenUrl = function (vid, openUrl) {
            if (!vid || !openUrl) return openUrl;
            var re = eval("/(video_id=)([^&]*)/gi"),
                nUrl = openUrl.replace(re, "video_id=" + vid);
            return nUrl
        }, AppHelper.fixCidOpenUrl = function (cid, openUrl) {
            if (cid && openUrl) {
                var re = eval("/(video_id=)([^&]*)/gi"),
                    nUrl = openUrl.replace(re, "cover_id=" + cid);
                return nUrl
            }
        }, AppHelper.fixFromOpenUrl = function (from, openUrl) {
            if (from && openUrl) {
                var re = eval("/(from=)([^&]*)/gi"),
                    nUrl = openUrl.replace(re, "from=" + from);
                return nUrl
            }
        }, module.exports = AppHelper
    },
    function (a, b, c) {
        function d(a) {
            g.reportAppBanner({
                vid: l.vid,
                promotionId: l.reportPromotionId,
                appCase: 1 == Txplayer.dataset.hasApp ? 3 : 1,
                reportStep: a,
                limitCase: "",
                reportFrom: l.reportFrom,
                guid: l.guid
            })
        }

        function e() {
            this.init()
        }
        var f = (Txplayer.$, Txplayer.util),
            g = c(32),
            h = c(33),
            i = {
                2: "bannerStartDownload",
                3: "bannerPause",
                4: "bannerDownloaded",
                5: "bannerStartInstall",
                6: "bannerInstallFinish"
            },
            j = {
                1: "down",
                2: "downloading",
                3: "pause",
                4: "install",
                5: "install",
                6: "open",
                7: "open",
                8: "down"
            },
            k = "",
            l = {
                reportPromotionId: "",
                vid: "",
                reportFrom: "",
                str5: "",
                guid: ""
            };
        e.prototype = {
            init: function () {
                Txplayer.dataset.hasApp == -1 ? (Txplayer.dataset.downloadStatus = 1, this.tryOpenApp()) : f.browser.wechat ? this.WechatDownloader() : f.browser.mqq ? this.QQDownloader() : f.browser.mqqbrowser && this.QBDownloader()
            }, tryOpenApp: function () {
                Txplayer.msg.on("triggerBanner", function (a) {
                    if (!f.browser.wechat && !f.browser.mqq) {
                        var b = a.openUrl,
                            c = a.downloadUrl;
                        if (b && c) {
                            var d = function () {
                                    if (Txplayer.util.fiddlerLog("openApp"), f.os.ios && f.compareVersion(f.os.version, "9.0") > -1) try {
                                        Txplayer.util.fiddlerLog({
                                            openUrl: b,
                                            s: "\u76f4\u63a5\u6253\u5f00"
                                        }), window.location.href = b
                                    } catch (a) {} else {
                                        Txplayer.util.fiddlerLog({
                                            openUrl: b,
                                            s: "iframe\u6253\u5f00"
                                        });
                                        var a = document.createElement("iframe");
                                        a.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;", a.src = b, document.body.appendChild(a)
                                    }
                                },
                                e = function () {
                                    Txplayer.util.fiddlerLog({
                                        downloadUrl: c,
                                        s: "downloadApp"
                                    }), window.location.href = c
                                },
                                g = function () {
                                    d();
                                    var a = (new Date).valueOf();
                                    setTimeout(function () {
                                        var b = (new Date).valueOf();
                                        b - a < 1550 && (f && f.browser && f.browser.qqlive || e())
                                    }, 1500)
                                };
                            g()
                        }
                    }
                })
            }, WechatDownloader: function () {
                function a() {
                    "undefined" != typeof WeixinJSBridge && WeixinJSBridge.on && (WeixinJSBridge.invoke && o(), document.addEventListener("wxdownloader:state_change", function (a) {
                        b(a.detail)
                    }), WeixinJSBridge.on("wxdownload:state_change", function (a) {
                        document.dispatchEvent(new CustomEvent("wxdownloader:state_change", {
                            detail: a
                        }))
                    }))
                }

                function b(a) {
                    a && a.state && ("download_succ" != a.state || a.download_id != k && "" != a.download_id || (q(4), d(4), p(), d(5)), "default" == a.state, "downloading" == a.state, "download_fail" == a.state, "download_removed" == a.state && q(1))
                }

                function c() {
                    Txplayer.msg.on("triggerBanner", function (a) {
                        l.vid = a.vid, l.reportPromotionId = a.reportPromotionId, l.reportFrom = a.reportFrom, l.str5 = a.str5, l.guid = a.guid, e(a)
                    })
                }

                function e(a) {
                    var b = j[Txplayer.dataset.downloadStatus];
                    switch (b) {
                    case "open":
                        n(a);
                        break;
                    case "install":
                        m(a);
                        break;
                    case "downloading":
                        i();
                        break;
                    case "pause":
                    case "down":
                        g(a)
                    }
                }

                function g(a) {
                    WeixinJSBridge.invoke("addDownloadTask", {
                        task_name: a.appTitleName,
                        task_url: a.downloaderUrl,
                        file_md5: a.md5,
                        thumb_url: "http://i.gtimg.cn/qqlive/images/20150608/logo_app.png"
                    }, function (a) {
                        var b = a.err_msg;
                        b.indexOf("add_download_task:ok") > -1 ? (k = a.download_id, q(2)) : b.indexOf("add_download_task:cancel") > -1 && q(1)
                    })
                }

                function i() {
                    WeixinJSBridge.invoke("cancelDownloadTask", {
                        download_id: k
                    }, function (a) {
                        var b = a.err_msg;
                        b.indexOf("cancel_download_task:ok") > -1 && q(3)
                    })
                }

                function m() {
                    WeixinJSBridge.invoke("installDownloadTask", {
                        download_id: k
                    }, function (a) {
                        var b = a.err_msg;
                        b.indexOf("install_download_task:ok") > -1
                    })
                }

                function n(a) {
                    WeixinJSBridge.invoke("installDownloadTask", {
                        download_id: k
                    }, function (b) {
                        var c = b.err_msg;
                        c.indexOf("install_download_task:ok") > -1 || r(a.openUrl)
                    })
                }

                function o() {
                    WeixinJSBridge.invoke("queryDownloadTask", {
                        download_id: k
                    }, function (a) {
                        b(a)
                    })
                }

                function p() {
                    WeixinJSBridge.invoke("getInstallState", {
                        packageUrl: "tenvideo2://can_open_me_if_install_and_regeister_this_scheme",
                        packageName: "com.tencent.qqlive"
                    }, function (a) {
                        var b = a.err_msg;
                        b.indexOf("get_install_state:yes") > -1 ? (d(6), q(6)) : setTimeout(p, 5e3)
                    })
                }

                function q(a) {
                    Txplayer.dataset.downloadStatus = a, Txplayer.msg.broadcast("bannerDownloadStateChange")
                }

                function r(a) {
                    f.browser.wechat.version && f.compareVersion(f.browser.wechat.version, "6.5.5") > -1 ? f.os.ipad ? WeixinJSBridge.invoke("launchApplication", {
                        schemeUrl: a
                    }, function (a) {
                        "launchApplication:ok" != a.err_msg && f.log("open fail")
                    }) : WeixinJSBridge.invoke("launchApplication", {
                        appID: "wxca942bbff22e0e51",
                        extInfo: a,
                        parameter: a
                    }, function (b) {
                        "launchApplication:ok" != b.err_msg && h({
                            appId: "wx5a3178167066897b"
                        }, function () {
                            wx.invoke("launchApplication", {
                                appID: "wxca942bbff22e0e51",
                                extInfo: a,
                                parameter: a
                            }, function (a) {
                                "launchApplication:ok" != a.err_msg && f.log("open fail")
                            })
                        })
                    }) : window.location.href = a
                }
                2 == Txplayer.dataset.hasApp ? (Txplayer.dataset.downloadStatus = 1, f.os.ios ? Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.downloadUrl && (window.location.href = a.downloadUrl)
                }) : f.os.android && (window != top && (WeixinJSBridge = top.WeixinJSBridge), a(), c())) : 1 == Txplayer.dataset.hasApp && (Txplayer.dataset.downloadStatus = 6, Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.openUrl && r(a.openUrl)
                }))
            }, QQDownloader: function () {
                function a() {
                    Txplayer.msg.on("triggerBanner", function (a) {
                        l.vid = a.vid, l.reportPromotionId = a.reportPromotionId, l.reportFrom = a.reportFrom, l.str5 = a.str5, l.guid = a.guid, c(a)
                    })
                }

                function b(a, c) {
                    var e = {
                        appid: c.appid,
                        url: c.downloaderUrl,
                        packageName: c.packageName,
                        via: c.via,
                        appName: c.appTitleName,
                        actionCode: a
                    };
                    window.mqq.app.downloadApp(e, function (a) {
                        a.state && (20 == a.state && (a.state = 2), !!i[a.state] && g(a.state, a), 4 == a.state && (d(4), d(5), b(5, c)), 6 == a.state && (d(6), g(6)))
                    })
                }

                function c(a) {
                    var c = j[Txplayer.dataset.downloadStatus];
                    switch (c) {
                    case "open":
                        e(a);
                        break;
                    case "install":
                        b(5, a);
                        break;
                    case "downloading":
                        b(3, a);
                        break;
                    case "pause":
                    case "down":
                        b(2, a)
                    }
                }

                function e(a) {
                    mqq.app.checkAppInstalled && mqq.app.checkAppInstalled(a.packageName, function (c) {
                        0 == c ? b(5) : (g(7), window.location.href = a.openUrl)
                    })
                }

                function g(a, b) {
                    Txplayer.dataset.downloadStatus = a, b && (Txplayer.dataset.downloadProcess = b.pro), Txplayer.msg.broadcast("bannerDownloadStateChange")
                }
                if (2 == Txplayer.dataset.hasApp) {
                    if (Txplayer.dataset.downloadStatus = 1, f.os.ios) f.os.ios && Txplayer.msg.on("triggerBanner", function (a) {
                        a && a.downloadUrl && (window.location.href = a.downloadUrl)
                    });
                    else if (f.os.android) {
                        if (!window.mqq || !window.mqq.app || !window.mqq.app.downloadApp) return;
                        a()
                    }
                } else 1 == Txplayer.dataset.hasApp && (Txplayer.dataset.downloadStatus = 6, Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.downloadUrl && (window.location.href = a.openUrl)
                }))
            }, QBDownloader: function () {
                2 == Txplayer.dataset.hasApp ? (Txplayer.dataset.downloadStatus = 1, Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.downloadUrl && (window.location.href = a.downloadUrl)
                })) : 1 == Txplayer.dataset.hasApp && (Txplayer.dataset.downloadStatus = 6, Txplayer.msg.on("triggerBanner", function (a) {
                    a && a.downloadUrl && (window.location.href = a.openUrl)
                }))
            }
        }, a.exports = function () {
            var a;
            return {
                initDownloader: function () {
                    if (!a) try {
                        a = new e
                    } catch (b) {
                        f.log("\u4e0b\u8f7d\u5668\u521d\u59cb\u5316\u5931\u8d25")
                    }
                    return a
                }
            }
        }()
    },
    function (a, b) {
        function c(a, b) {
            var c = b.config.playerType,
                d = b.config.videoType,
                h = {
                    version: Txplayer.dataset.ver,
                    uid: b.dataset.guid,
                    pid: b.dataset.playerId,
                    vid: b.dataset.vid,
                    player_type: c,
                    video_type: "vod" === d ? 1 : 2,
                    platform: b.dataset.platform,
                    url: document.URL,
                    filename: Txplayer.dataset.filename,
                    sub_version: Txplayer.dataset.flashVersion,
                    error_code: a.code || "",
                    error_msg: encodeURIComponent(a.msg) || "",
                    error_stack: a.stack || "",
                    file_lastupdate: Txplayer.dataset.lastModify,
                    qq_openid: e(),
                    browser: Txplayer.util.getBrowserBrand(),
                    osname: f(),
                    osver: Txplayer.util.os.version,
                    hc_uin: Txplayer.util.getQQFromCookie(),
                    hc_main_login: Txplayer.util.cookie.get("main_login"),
                    hc_vuserid: Txplayer.util.cookie.get("vuserid"),
                    hc_openid: Txplayer.util.cookie.get("openid"),
                    hc_appid: Txplayer.util.cookie.get("appid"),
                    hc_ua: Txplayer.util.getReportUA(),
                    hh_ref: Txplayer.util.getTopFrameUrl()
                };
            "flash" !== h.player_type && (h.sub_version = g(h.browser)), h.error_msg += "", h.error_stack += "", h.error_msg = h.error_msg.replace(/\$/g, ""), h.error_stack = h.error_stack.replace(/\$/g, ""), Txplayer.util.showInfo("\u9519\u8bef\u4e0a\u62a5", h);
            var i = "//btrace.video.qq.com/kvcollect?BossId=3720&Pwd=1814753491&";
            i += Txplayer.util.param(h), Txplayer.util.report(i)
        }

        function d(a) {
            function b() {
                var a;
                if (!(Txplayer && Txplayer.dataset && Txplayer.dataset._instance)) return a;
                for (var b in Txplayer.dataset._instance) {
                    a = Txplayer.dataset._instance[b];
                    break
                }
                return a
            }
            if (a && a.filename && a.message && a.filename.indexOf("//vm.gtimg.cn/tencentvideo/txp/js/") !== -1) {
                var c, d, f, g, h, i, j = b();
                try {
                    j && j.constructor === Txplayer && (c = j.getUserId(), d = j.getPlayerId(), f = j.getVid(), g = j.getPlayerType(), h = j.getVideoType(), i = j.getPlatform())
                } catch (k) {}
                var l = ["line=" + a.lineno, "column=" + a.colno].join(" "),
                    m = {
                        version: Txplayer.dataset.ver,
                        uid: c,
                        pid: d,
                        vid: f,
                        player_type: g,
                        video_type: "vod" === h ? 1 : 2,
                        platform: i,
                        url: document.URL,
                        filename: a.filename,
                        sub_version: Txplayer.dataset.flashVersion,
                        error_code: "3000",
                        error_msg: a.message,
                        error_stack: l,
                        file_lastupdate: Txplayer.dataset.lastModify,
                        qq_openid: e(),
                        hc_uin: Txplayer.util.getQQFromCookie(),
                        hc_main_login: Txplayer.util.cookie.get("main_login"),
                        hc_vuserid: Txplayer.util.cookie.get("vuserid"),
                        hc_openid: Txplayer.util.cookie.get("openid"),
                        hc_appid: Txplayer.util.cookie.get("appid"),
                        hc_ua: Txplayer.util.getReportUA()
                    };
                Txplayer.util.showInfo("\u9519\u8bef\u4e0a\u62a5", m);
                var n = "//btrace.video.qq.com/kvcollect?BossId=3720&Pwd=1814753491&";
                n += Txplayer.util.param(m), Txplayer.util.report(n)
            }
        }

        function e() {
            var a = Txplayer.util.cookie.get("openid") || Txplayer.util.getQQFromCookie();
            return a
        }

        function f() {
            var a = Txplayer.util.os;
            return a.windows ? "windows" : a.mac ? "mac" : a.linux ? "linux" : a.ipad ? "ipad" : a.iphone ? "iphone" : a.android ? "android" : "-1"
        }

        function g(a) {
            var b = "";
            if (a && Txplayer.util.browser && Txplayer.util.browser[a] && Txplayer.util.browser[a].version) return Txplayer.util.browser[a].version;
            for (var c in Txplayer.util.browser) {
                if (b) break;
                Txplayer.util.browser[c].version && (b = Txplayer.util.browser[c].version)
            }
            return b
        }

        function h(a, b) {
            var c = {
                version: Txplayer.dataset.ver,
                uid: a.dataset.guid,
                pid: a.dataset.playerId,
                vid: a.dataset.vid || a.config.vid,
                player_type: b.playType,
                video_type: "vod" === b.videoType ? 1 : 2,
                platform: a.dataset.platform,
                url: document.URL,
                filename: Txplayer.dataset.filename,
                sub_version: Txplayer.dataset.flashVersion,
                _dc: Math.random(),
                browser: Txplayer.util.getBrowserBrand(),
                osname: f(),
                osver: Txplayer.util.os.version,
                hc_uin: Txplayer.util.getQQFromCookie(),
                hc_main_login: Txplayer.util.cookie.get("main_login"),
                hc_vuserid: Txplayer.util.cookie.get("vuserid"),
                hc_openid: Txplayer.util.cookie.get("openid"),
                hc_appid: Txplayer.util.cookie.get("appid"),
                hc_ua: Txplayer.util.getReportUA(),
                hh_ref: Txplayer.util.getTopFrameUrl()
            };
            "flash" !== c.player_type && (c.sub_version = g(c.browser));
            var d = "//btrace.video.qq.com/kvcollect?BossId=3721&Pwd=1636975887&";
            d += Txplayer.util.param(c), !Txplayer.util.isNewsPlugin && Txplayer.util.report(d)
        }

        function i(a, b) {
            var c = b.config.playerType,
                d = b.config.videoType,
                e = {
                    version: Txplayer.dataset.ver,
                    uid: b.dataset.guid,
                    pid: b.dataset.playerId,
                    vid: b.dataset.vid,
                    player_type: c,
                    video_type: "vod" === d ? 1 : 2,
                    platform: b.dataset.platform,
                    usr_action: a.usr_action || "",
                    usr_action_detail: a.usr_action_detail || "",
                    url: document.URL
                };
            Txplayer.util.showInfo("\u7528\u6237\u884c\u4e3a\u4e0a\u62a5", e);
            var f = "//btrace.video.qq.com/kvcollect?BossId=3717&Pwd=1055758521&";
            f += Txplayer.util.param(e), Txplayer.util.report(f)
        }

        function j(a, b) {
            var c = {
                    gid: b.dataset.guid,
                    plt: b.dataset.platform,
                    uin: Txplayer.util.getQQFromCookie(),
                    vid: b.dataset.vid,
                    cts: +new Date,
                    sdt: b.dataset.stdfrom,
                    fne: a.filename,
                    dip: a.cdnIp,
                    cdn: a.cdnId,
                    vky: a.vkey || ""
                },
                d = "//btrace.video.qq.com/kvcollect?BossId=2594&Pwd=0&";
            d += Txplayer.util.param(c), !Txplayer.util.isNewsPlugin() && Txplayer.util.report(d)
        }

        function k(a, b) {
            var c = {
                url: encodeURIComponent(Txplayer.util.getTopFrameUrl()),
                ver: Txplayer.dataset.ver,
                ua: Txplayer.util.getReportUA(),
                iSta: "3537",
                val: 1,
                int1: Txplayer.util.getDeviceCode(),
                int2: Txplayer.util.getPlatformCode(),
                int3: 0,
                int4: 0,
                str1: "",
                str2: Txplayer.dataset.filename,
                str8: Txplayer.util.getUrlParam("mmuin"),
                __tm: Txplayer.util.dateFormat("yyyy-M-d h:m:s:S"),
                hc_openid: Txplayer.util.cookie.get("openid")
            };
            c.vid = a.vid, c.int6 = a.promotionId, c.str4 = a.appCase, c.int5 = a.reportStep, c.str5 = a.str5 || "", c.str6 = Txplayer.util.getUrlParam("openid", Txplayer.util.getTopFrameUrl()), c.str6 = c.str6 || "", c.str3 = a.reportFrom || "", c.str7 = a.guid || "", Txplayer.util.showInfo("AppBanner\u4e0a\u62a5", c);
            var d = "//btrace.video.qq.com/kvcollect?BossId=4046&Pwd=176231195&_dc=" + Math.random();
            d += "&" + Txplayer.util.param(c), Txplayer.util.isNewsPlugin() && location.href.indexOf("newsdebug=1") == -1 ? Txplayer.util.getChance(10) && Txplayer.util.report(d) : Txplayer.util.report(d)
        }

        function l(a, b) {
            a = a || {};
            var c = {
                version: Txplayer.dataset.ver,
                pid: b.dataset.guid,
                vid: b.dataset.vid,
                level: b.dataset.reportVideoLevel,
                val: b.dataset.userRealPlayedTime,
                bi: b.dataset.videoDuration,
                bt: b.dataset.duration,
                vt: b.dataset.reportCDNChannelId,
                step: 5,
                val1: a.isend ? 1 : 2,
                platform: 11,
                url: document.URL,
                cpay: b.dataset.isNeedPay ? 1 : 0,
                tpay: b.dataset.userPayStatus,
                ctime: Txplayer.util.dateFormat("yyyy-MM-dd hh:mm S"),
                ptime: b.dataset.currentTime,
                type: b.dataset.reportBusinessType,
                cmid: b.dataset.guid,
                ptag: Txplayer.util.getPTAG(),
                isvip: -1,
                tpid: b.dataset.videoCategoryId,
                login_type: Txplayer.util.cookie.get("main_login"),
                uin: Txplayer.util.getQQFromCookie(),
                vuserid: Txplayer.util.cookie.get("vuserid"),
                abi: b.dataset.userTotalPlayedTime
            };
            b.config && "function" === Txplayer.$.type(b.config.getUserType) && (c.isvip = 2 == b.config.getUserType() ? 1 : 0);
            var d = "//btrace.video.qq.com/kvcollect?BossId=3893&Pwd=1920472984&";
            d += Txplayer.util.param(c), Txplayer.util.showInfo("\u6210\u957f\u4f53\u7cfb\u65f6\u957f\u4e0a\u62a5", c), Txplayer.util.report(d)
        }

        function m(a, b) {
            a = a || {};
            var c = (Txplayer.util.getLoginID(), b.dataset.platform, {
                    flowid: b.dataset.flowid
                }),
                d = {
                    name: a.name || "",
                    ptime: b.dataset.currentTime || 0,
                    stime: a.requestStartTime,
                    etime: +new Date,
                    url: a.url || ""
                },
                e = "4564";
            a.hasOwnProperty("bossid") && (e = a.bossid), "4501" == e && "50" == a.step && (d = {
                reason: "",
                code: a.code || "",
                etime: +new Date
            }), c = Txplayer.$.extend(c, {
                data: JSON.stringify(d)
            }), c.step = a.step, a.hasOwnProperty("step") || (c.step = 61);
            var f = "//btrace.video.qq.com/kvcollect?BossId=" + e + "&Pwd=213967996&";
            f += Txplayer.$.param(c), Txplayer.util.fetch({
                url: f,
                credentials: "include"
            })
        }

        function n() {
            var a = {
                name: "",
                ver: ""
            };
            if (Txplayer.util.browser) {
                var b = Txplayer.util.browser;
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        if (d) {
                            a.name = c, a.ver = d.version;
                            break
                        }
                    }
            }
            return a
        }

        function o() {
            var a = "",
                b = location.hostname || "",
                c = location.href;
            try {
                Txplayer.util.inNewIframe() ? a = "iframe" : (a = b.replace(/\./gi, "_"), /http(s?):\/\/v.qq.com\/x\/(cover|page|)/.test(c) && (a += "_play"))
            } catch (d) {}
            return a
        }

        function p(a, b) {
            if ("LD" === a.adtype) {
                var c = a.ext_info || "";
                c += ";existblock:" + (TxpCreativePlayer && TxpCreativePlayer.adBlockEnabled ? 1 : 0);
                var d = "",
                    e = a.step_code;
                if (a.src) try {
                    if (0 == a.step_code) d = a.src;
                    else {
                        var f = "undefined" != typeof window.btoa ? btoa(a.src) : a.src;
                        d = f
                    }
                    var g = Txplayer.util.getDomainOfURL(a.src);
                    c += ";cdn:" + g
                } catch (h) {}
                if (!(a.step_duration < 0)) {
                    var i = n(),
                        j = {
                            flowid: b.dataset.flowid,
                            vid: b.dataset.vid,
                            type: a.adtype || "",
                            step: a.step || "",
                            step_duration: a.step_duration || "",
                            step_code: e,
                            step_index: a.step_index,
                            version: window.TxpCreativePlayer && window.TxpCreativePlayer.version || a.version,
                            platform: 1,
                            firstview_duration: a.firstview_duration,
                            client_version: "",
                            ext_info: c,
                            req_from: o(),
                            play_type: Txplayer.util.getVideoType(),
                            page_first_load: b.dataset.hasCallSetVid ? 0 : 1,
                            v_src: d,
                            url: document.URL,
                            step_dcode: a.step_dcode || 0,
                            browser: i.name,
                            browser_ver: i.ver
                        },
                        k = "//btrace.video.qq.com/kvcollect?BossId=6072&Pwd=1133018508&";
                    k += Txplayer.$.param(j), 1 == Txplayer.util.getUrlParam("debugadreport") ? window.console && window.console.log && window.console.log(j) : Txplayer.imgRpt ? Txplayer.util.requestViaImage(k) : Txplayer.util.fetch({
                        url: k,
                        credentials: "include"
                    })
                }
            }
        }

        function q(a) {
            a.msg.on("reportError", function (b) {
                c(b, a)
            }), a.msg.on("reportUsrAction", function (b) {
                i(b, a)
            }), a.msg.on("reportGetinfo", function (b) {
                j(b, a)
            }), a.msg.on("reportAppBanner", function (b) {
                k(b, a)
            }), a.msg.on("reportLoginUserPlayTime", function (b) {
                l(b, a)
            }), a.msg.on("reportPluginLoadError", function (b) {
                m(b, a)
            }), a.msg.on("reportAdInfo", function (b) {
                p(b, a)
            })
        }
        window.addEventListener ? window.addEventListener("error", d) : window.attachEvent && window.attachEvent("onerror", d), a.exports = {
            reportTxplayer: h,
            reportError: c,
            reportAppBanner: k,
            exportsReportApi: q
        }
    },
    function (a, b, c) {
        "use strict";

        function d(a, b) {
            b = k.once(b || e);
            var c = k.extend({
                debug: !1,
                beta: !0,
                appId: n
            }, a);
            l(c.api || "//video.qq.com/fcgi-bin/get_js_signature", {
                otype: "json",
                appid: c.appId,
                url: location.href.split("#")[0]
            }, function (a, d) {
                function e() {
                    wx.config({
                        beta: c.beta,
                        debug: c.debug,
                        appId: c.appId,
                        timestamp: d.timestamp,
                        nonceStr: d.ramdon_str,
                        signature: d.signature,
                        jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "onVoicePlayEnd", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard", "launchApplication"].concat(c.jsApiList || [])
                    }), wx.ready(function () {
                        b(null, d)
                    }), wx.error(function (a) {
                        b(a || "WX sign error.", d)
                    })
                }
                return d && 0 === d.ret ? void(window.wx ? e() : document.addEventListener("WeixinJSBridgeReady", e)) : b(a || d && d.msg || "error")
            }, {
                pn: "callback_func"
            })
        }

        function e() {}

        function f(a, b) {
            return b = b || e, m.isWX() ? j ? void b(null, i) : (h || (g = a, h = k.delegator(function (a) {
                return d(g, function (b, c) {
                    b || (j = !0, i = c), a(b, c)
                })
            }), window.addEventListener("popstate", function () {
                i = j = null, h()
            }), o && (history.pushstate = function () {
                return setTimeout(function () {
                    i = j = null, h()
                }, 0), o.apply(history, arguments)
            })), h(b)) : void b("Only work for wx app")
        }
        var g, h, i, j, k = c(34),
            l = c(35),
            m = c(37),
            n = "wx5a3178167066897b",
            o = history.pushstate;
        f.appId = n, f.ready = function (a) {
            function b() {
                wx.ready(a)
            }
            a && (window.wx ? b() : document.addEventListener("WeixinJSBridgeReady", b))
        }, a.exports = f
    },
    function (a, b) {
        "use strict";

        function c(a, b) {
            return a && a.hasOwnProperty && a.hasOwnProperty(b)
        }

        function d() {
            var a = this;
            return function () {
                setTimeout.apply(a, arguments)
            }
        }
        var e = void 0,
            f = {
                escape: function (a) {
                    return a ? String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
                }, type: function (a) {
                    if (null === a) return "null";
                    if (a === e) return "undefined";
                    var b = /\[object (\w+)\]/.exec(Object.prototype.toString.call(a));
                    return b ? b[1].toLowerCase() : ""
                }, keys: function (a) {
                    var b = [];
                    return a ? Object.keys ? Object.keys(a) : (this.objEach(a, function (a) {
                        b.push(a)
                    }), b) : b
                }, bind: function (a, b) {
                    return a.bind ? a.bind(b) : function () {
                        return a.apply(b, arguments)
                    }
                }, extend: function (a) {
                    if ("object" != this.type(a) && "function" != this.type(a)) return a;
                    for (var b, d, e = 1, f = arguments.length; e < f; e++) {
                        b = arguments[e];
                        for (d in b) c(b, d) && (a[d] = b[d])
                    }
                    return a
                }, trim: function (a) {
                    return a.trim ? a.trim() : a.replace(/^\s+|\s+$/gm, "")
                }, indexOf: function (a, b) {
                    if (a.indexOf) return a.indexOf(b);
                    var c = -1;
                    return f.some(a, function (a, d) {
                        if (a === b) return c = d, !0
                    }), c
                }, forEach: function (a, b) {
                    if (a.forEach) return a.forEach(b);
                    for (var c = a.length, d = 0; d < c; d++) b(a[d], d);
                    return a
                }, some: function (a, b) {
                    if (a.some) return a.some(b);
                    for (var c = a.length, d = !1, e = 0; e < c; e++)
                        if (b(a[e], e)) {
                            d = !0;
                            break
                        }
                    return d
                }, map: function (a, b) {
                    if (a.map) return a.map(b);
                    for (var c = a.length, d = [], e = 0; e < c; e++) d.push(b(a[e], e));
                    return d
                }, objEach: function (a, b) {
                    if (a)
                        for (var d in a)
                            if (c(a, d) && b(d, a[d]) === !1) break
                }, reduce: function (a, b) {
                    if ("function" != f.type(b)) throw new TypeError("Array.prototype.reduce callback must be a function");
                    var c = a.length;
                    if (0 === c && 2 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                    var d, e = 0;
                    if (arguments.length >= 3) d = arguments[2];
                    else
                        for (;;) {
                            if (e in a) {
                                d = a[e++];
                                break
                            }
                            if (++e >= c) throw new TypeError("reduceRight of empty array with no initial value")
                        }
                    for (; e < c; e++) d = b(d, a[e], e, a);
                    return d
                }, filter: function (a, b, c) {
                    if (a.filter) return a.filter(b);
                    for (var d = a.length, e = [], f = 0; f < d; f++) {
                        var g = a[f];
                        b.call(c, g, f, a) && e.push(g)
                    }
                    return e
                }, nextTick: d(),
                lock: function (a) {
                    var b;
                    return function () {
                        if (!b) {
                            b = !0;
                            var c = [].slice.call(arguments, 0);
                            return c.unshift(function () {
                                b = !1
                            }), a.apply(this, c)
                        }
                    }
                }, queue: function (a, b) {
                    function c() {
                        var a = d.shift();
                        if (!a) return void(e = b);
                        e--;
                        var f = a[0],
                            g = a[1],
                            h = a[2];
                        h.unshift(function () {
                            e++, c.apply(this, arguments)
                        }), setTimeout(function () {
                            f.apply(g, h)
                        })
                    }
                    b = b || 1;
                    var d = [],
                        e = b;
                    return function () {
                        if (d.push([a, this, [].slice.call(arguments, 0)]), e) return c()
                    }
                }, delegator: function (a) {
                    var b, c = [];
                    return function (d) {
                        return b ? c.push(d) : (b = !0, void a.call(this, function () {
                            b = !1;
                            var a = this,
                                e = arguments;
                            d && d.apply(a, e);
                            var g = c;
                            c = [], f.forEach(g, function (b) {
                                b && b.apply(a, e)
                            })
                        }))
                    }
                }, once: function (a) {
                    var b, c = arguments;
                    return function () {
                        if (!b && a) return b = !0, a.apply(c.length >= 2 ? c[1] : null, arguments)
                    }
                }, verCompare: function (a, b) {
                    if (a === b) return 0;
                    a = a.split("."), b = b.split(".");
                    for (var c = a.length >= b.length ? a.length : b.length, d = 0, e = 0; c--;) {
                        var f = Number(a[d] || 0),
                            g = Number(b[d++] || 0);
                        if (g > f) return 1;
                        if (g < f) return -1
                    }
                    return e
                }, batchTimeout: function (a, b) {
                    function c(a) {
                        return h.push(a), g ? void i.push(+new Date) : (f = +new Date, i.push(f), g = !0, void setTimeout(function () {
                            var a = Math.round(d.reduce(i, function (a, b) {
                                return a + (b - f)
                            }, 0) / i.length);
                            g = !1, i = [];
                            var c = h.slice(0);
                            h = [], setTimeout(function () {
                                c.forEach(function (a) {
                                    try {
                                        a && a()
                                    } catch (b) {}
                                })
                            }, Math.max(b - e - a, 0))
                        }, e))
                    }
                    var d = this,
                        e = b / a;
                    (!e || e < 1) && (a = 1, e = b), e = Math.round(e);
                    var f, g = !1,
                        h = [],
                        i = [];
                    return c
                }
            };
        a.exports = f
    },
    function (a, b, c) {
        "use strict";

        function d() {}

        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }

        function f(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }

        function g(a, b, c) {
            var g = arguments;
            return h(function (h, p) {
                var q;
                if ("object" == typeof b && (q = b, b = c, c = g[3]), q = q || {}, c = c || {}, b = b || d, "function" != typeof b) throw Error("illegal jsonp callback function:", b);
                var r = document.getElementsByTagName("head") ? document.getElementsByTagName("head")[0] : document.body,
                    s = document.createElement("script");
                s.charset = "UTF-8";
                var t = [c.ns || k, m++, e()].join("_"),
                    u = !0,
                    v = "_t",
                    w = c.time;
                c.callbackid && (t = c.callbackid), w === !1 ? u = !1 : w && (v = w), q[c.pn || c.callbackName || l] = t, u && (q[v] = +new Date);
                var x = function (a) {
                        f(s), b(null, a), h && h(a)
                    },
                    y = function (a) {
                        f(s), b(a || "error"), window[t] = x = y = d, p && p(a || error)
                    },
                    z = window[t];
                window[t] = function (a) {
                    window[t] = d;
                    try {
                        z && z(a)
                    } finally {
                        x(a), x = y = d
                    }
                }, s.onerror = s.onabort = function (a) {
                    y(a ? a.type : "error")
                }, i.forEach(o, function (b) {
                    "function" == i.type(b) && (a = b(a, q) || a)
                }), s.src = j.queryJoin(a, q), r.appendChild(s), setTimeout(function () {
                    y("timeout")
                }, c.timeout || n)
            })
        }

        function h(a) {
            return window.Promise ? new Promise(a) : void a(d, d)
        }
        var i = c(34),
            j = c(36),
            k = "_jsonp",
            l = "callback",
            m = 0,
            n = 2e4,
            o = [];
        g.timeout = function (a) {
            n = a
        }, g.ns = function (a) {
            k = a
        }, g.pn = function (a) {
            l = a
        }, g.before = function (a) {
            o.push(a)
        }, a.exports = g
    },
    function (a, b, c) {
        "use strict";
        var d = c(34),
            e = {
                queryParse: function (a, b) {
                    if (!a) return {};
                    b = b || "&";
                    var c = a.replace(/^\?/, ""),
                        e = {},
                        f = c ? c.split(b) : null;
                    return f && f.length > 0 && d.forEach(f, function (a) {
                        a = a.split("=");
                        var b = a.splice(0, 1),
                            c = a.join("=");
                        e[b] = decodeURIComponent(c)
                    }), e
                }, queryJoin: function (a) {
                    var b = [].slice.call(arguments);
                    b[0] = {};
                    var c = e.queryStringify(d.extend.apply(d, b));
                    if (!c) return a;
                    var f;
                    return f = /[\?&]$/.test(a) ? "" : ~a.indexOf("?") ? "&" : "?", a + f + c
                }, queryStringify: function (a, b) {
                    return a ? d.map(d.keys(a), function (b) {
                        return b + "=" + encodeURIComponent(a[b])
                    }).join(b || "&") : ""
                }
            };
        a.exports = e
    },
    function (a, b) {
        "use strict";
        var c = navigator.userAgent,
            d = c.toLowerCase();
        a.exports = {
            isIE: function () {
                return /; msie\b|; trident\b|\bedge\//.test(d)
            }, isWX: function () {
                return /micromessenger/.test(d)
            }, isQQ: function () {
                return /\bqq\b/.test(d)
            }, isQQBrowser: function () {
                return /mqqbrowser/.test(d)
            }, isQQLive: function () {
                return /qqlive/.test(d)
            }, isQQLiveBroadcast: function () {
                return /qqlivebroadcast/.test(d)
            }, isMobile: function () {
                return !!(c.match(/Android/i) || c.match(/android/i) || c.match(/iPhone/i) || c.match(/iPod/i) || c.match(/webOS/i) || c.match(/BlackBerry/i) || c.match(/BB/i) || c.match(/Windows Phone/i) || c.match(/iPad.*MicroMessenger/i) || c.match(/IEMobile/i))
            }, isIOS: function () {
                return /iPad|iPhone|iPod/.test(c) && !window.MSStream
            }, isMac: function () {
                return /\bmac\b/.test(d)
            }, isPC: function () {
                return /Win/.test(c)
            }, isAndroid: function () {
                return /android/.test(d)
            }, isChrome: function () {
                return /Chrome\//.test(c)
            }, wxVer: function () {
                var a = d.match(/micromessenger\/([\d\.]+)/);
                return a ? a[1] : ""
            }, androidVer: function () {
                var a = d.match(/android\s([0-9\.]*)/);
                return a ? a[1] : ""
            }
        }
    }
]);