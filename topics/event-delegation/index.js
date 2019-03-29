(function(q) {
        var e = q
            , n = document
            , v = e.location;
        if (!e.TJ58) {
            e.TJ58 = !0;
            null == e.String.prototype.trim && (e.String.prototype.trim = function() {
                    return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }
            );
            e.TJ58Obj = {};
            var d = {
                curURL: v.href,
                referrer: n.referrer,
                protocol: v.protocol,
                window_size: n.documentElement.clientWidth + "x" + n.documentElement.clientHeight,
                screen_size: e.screen.width + "," + e.screen.height,
                domain: function() {
                    var a = v.host.toLowerCase()
                        , c = /.*?([^\.]+\.(com|org|net|biz|edu|cc)(\.[^\.]+)?)/;
                    return c.test(a) ? "." + a.replace(c, "$1") : ""
                }(),
                navigation_type: function() {
                    var a = "-1";
                    try {
                        a = e.performance.navigation.type
                    } catch (c) {
                        return "-1"
                    }
                    return a
                }(),
                setCookie: function() {
                    if (!n.cookie)
                        return !1;
                    var a = new Date;
                    2 < arguments.length ? a.setTime(a.getTime() + 864E5 * arguments[2]) : a.setTime(a.getTime() + 18E5);
                    2 <= arguments.length && (n.cookie = arguments[0] + "=" + escape(arguments[1]) + "; expires=" + a.toGMTString() + "; domain=" + d.domain + "; path=/")
                },
                getCookie: function(a) {
                    if (!n.cookie)
                        return "";
                    var c;
                    return (c = n.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"))) ? unescape(c[2]) : ""
                },
                ajaxsend: function(a) {
                    (new Image).src = a
                },
                getGTID: function(a, c, b) {
                    function e(a, c, b) {
                        a = ("" + a).length < c ? (Array(c + 1).join("0") + a).slice(-c) : "" + a;
                        return -1 == b ? a : a.substring(0, b) + "-" + a.substring(b)
                    }
                    var g = {
                        home: "1",
                        index: "2",
                        list: "3",
                        detail: "4",
                        post: "5",
                        special: "6"
                    };
                    a = g[a] ? parseInt(g[a]).toString(16) : 0;
                    c = c.split(",");
                    c = c[c.length - 1];
                    c = parseInt(c) ? parseInt(c).toString(16) : 0;
                    b = b.split(",");
                    b = b[b.length - 1];
                    b = parseInt(b) ? parseInt(b).toString(16) : 0;
                    g = (13).toString(16);
                    return "llpccccc-tttt-txxx-xxxx-xxxxxxxxxxxx".replace(/x/g, function(a) {
                        return (16 * Math.random() | 0).toString(16)
                    }).replace(/ccccc/, e(c, 5, -1)).replace(/tttt-t/, e(b, 5, 4)).replace(/p/, e(a, 1, -1)).replace(/ll/, e(g, 2, -1))
                },
                setLocalStorage: function(a, c) {
                    try {
                        e.localStorage && e.localStorage.setItem(a, c)
                    } catch (b) {}
                },
                getLocalStorage: function(a) {
                    try {
                        return e.localStorage ? e.localStorage.getItem(a) : ""
                    } catch (c) {
                        return ""
                    }
                },
                getUUID: function(a) {
                    var c = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                        var c = 16 * e.Math.random() | 0;
                        return ("x" == a ? c : c & 3 | 8).toString(16)
                    })
                        , c = this.getCookie(a) || this.getLocalStorage(a) || c;
                    this.setCookie(a, c, 365);
                    this.setLocalStorage(a, c);
                    return c
                },
                getRandom: function() {
                    return e.Math.random()
                },
                bindElem: function(a, c, b) {
                    if (e.$ && "string" == typeof a && "string" == typeof c && "function" == typeof b)
                        if ("function" === typeof $(n).on)
                            $(n).on(c, a, b);
                        else
                            "function" === typeof $(n).delegate ? $(n).delegate(a, c, b) : "function" === typeof $(a).bind && $(a).bind(c, b)
                },
                loadScript: function(a, c) {
                    try {
                        var b = n.createElement("script");
                        b.type = "text/javascript";
                        b.readyState ? b.onreadystatechange = function() {
                                if ("loaded" == b.readyState || "complete" == b.readyState)
                                    b.onreadystatechange = null,
                                    c && c()
                            }
                            : b.onload = function() {
                                c && c()
                            }
                        ;
                        b.src = a;
                        n.body.appendChild(b)
                    } catch (e) {}
                },
                xxzlLoadJs: function(a) {
                    function c() {
                        var c = n.createElement("script");
                        c.src = a;
                        n.body.appendChild(c)
                    }
                    e.addEventListener ? e.addEventListener("load", c, !1) : e.attachEvent ? e.attachEvent("onload", c) : e.onload = c
                }
            }
                , f = {
                config: {
                    trackLog: {
                        server: "tracklog.58.com/m/empty.js.gif",
                        allParams: "site_name tag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL rand_id".split(" "),
                        uniqParams: ["tag", "rand_id"]
                    },
                    loadMorePageLog: {
                        server: "tracklog.58.com/m/empty.js.gif",
                        allParams: "site_name tag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL EventTag rand_id".split(" "),
                        uniqParams: ["tag", "EventTag", "rand_id"]
                    },
                    listShowLog: {
                        server: "tracklog.58.com/Mv1/listshow/empty.js.gif",
                        allParams: "tag bangbangid referrer site_name info_data trackURL rand_id".split(" "),
                        uniqParams: ["tag", "info_data", "rand_id"]
                    },
                    listClickLog: {
                        server: "tracklog.58.com/Mv1/listclick/empty.js.gif",
                        allParams: "tag bangbangid referrer site_name info_data trackURL ClickID rand_id".split(" "),
                        uniqParams: ["tag", "info_data", "rand_id"]
                    },
                    clickLog: {
                        server: "tracklog.58.com/m/click/empty.js.gif",
                        allParams: "site_name tag from trackURL ClickID bangbangid referrer rand".split(" "),
                        uniqParams: ["tag", "from", "rand"]
                    },
                    diaTrackLog: {
                        server: "dialog.58.com/transfer",
                        allParams: "DIATag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL rand_id".split(" "),
                        uniqParams: ["DIATag", "rand_id"]
                    },
                    diaClickLog: {
                        server: "dialog.58.com/transfer",
                        allParams: "DIATag from trackURL ClickID bangbangid referrer rand".split(" "),
                        uniqParams: ["DIATag", "from", "rand"]
                    },
                    diaShowLog: {
                        server: "dialog.58.com/transfer",
                        allParams: "DIATag trackURL ClickID bangbangid referrer rand".split(" "),
                        uniqParams: ["DIATag", "rand"]
                    },
                    gdtTrackLog: {
                        server: "gdt.cm.58.com/gdtcm",
                        allParams: ["city", "cate", "plat"],
                        uniqParams: ["city", "plat"]
                    },
                    gdtTrackLog2: {
                        server: "gdtcm.58.com/gdtcm",
                        allParams: ["city", "cate", "plat"],
                        uniqParams: ["city", "plat"]
                    }
                },
                filterList: function(a) {
                    var c = ".58.com.cn portal.58.com faw-vw-dasweltauto.58.com 5858.com lieche.58.com dict.58.com/xiaoqu about.58.com m.58.com/city.html lieche.m.58.com".split(" "), b;
                    for (b in c)
                        if (-1 !== a.indexOf(c[b]))
                            return "YES";
                    return "NO"
                },
                isRealIndexPage: function(a) {
                    var c = [/^http:\/\/m.58.com\/[^\/]*\/job.shtml/, /^http:\/\/m.58.com\/[^\/]*\/house.shtml/, /^http:\/\/m.58.com\/[^\/]*\/car.shtml/, /^http:\/\/m.58.com\/[^\/]*\/sale.shtml/, /^http:\/\/m.58.com\/[^\/]*\/jianzhi.shtml/, /^http:\/\/m.58.com\/[^\/]*\/pets.shtml/, /^http:\/\/m.58.com\/[^\/]*\/shenghuo.shtml/, /^http:\/\/m.58.com\/[^\/]*\/bendishenghuo.shtml/, /^http:\/\/m.58.com\/[^\/]*\/bendishangwu.shtml/, /^http:\/\/m.58.com\/[^\/]*\/huangye.shtml/], b;
                    for (b in c)
                        if (a.match(c[b]))
                            return "YES";
                    return "NO"
                },
                getBaseInfo: function() {
                    var a = q.site_name || "M58"
                        , c = q.encodeURIComponent(d.referrer)
                        , b = d.curURL
                        , k = d.getUUID("58tj_uuid")
                        , g = d.getCookie("bangbangid")
                        , G = d.window_size
                        , t = d.navigation_type
                        , f = d.screen_size
                        , l = q.____json4fe ? q.____json4fe : {}
                        , p = l._trackPagetype || ""
                        , m = l._trackURL || ""
                        , h = l._trackParams || []
                        , n = l.GA_pageview || ""
                        , v = l.infoid || ""
                        , S = l.userid || ""
                        , T = l.smsc || ""
                        , l = l.sid || ""
                        , y = q._trackURL || m || "NA"
                        , s = {};
                    try {
                        s = "NA" === y ? {} : eval("(" + y + ")")
                    } catch (aa) {
                        s = {}
                    }
                    var p = s.pagetype || p || q.page_type || "NA"
                        , m = s.post_count || q.post_count || -1
                        , n = s.Ga_pageview || n || ""
                        , B = s.cate || ""
                        , U = "" === B ? "" : B.split(",")[0]
                        , V = "" === B && -1 === B.indexOf(",") ? "" : B.split(",")[1]
                        , I = s.area || ""
                        , Q = "" === I ? "" : I.split(",")[0]
                        , W = s.actiontype || ""
                        , R = d.getGTID(p, B, I)
                        , X = s.ROI || ""
                        , s = s.teemo || ""
                        , Y = d.getCookie("br58") || ""
                        , N = d.getCookie("myLat") || ""
                        , r = d.getCookie("myLon") || ""
                        , N = N + "_" + r
                        , r = e._trackParams || h || []
                        , C = []
                        , h = "";
                    if (r instanceof Array) {
                        for (var h = 0, O = r.length; h < O; h++)
                            r[h] && r[h].I && r[h].V && "string" === typeof r[h].V && C.push(r[h].I + ":" + r[h].V.replace(/\|/g, "*"));
                        h = encodeURIComponent(C.join("@@"))
                    }
                    var C = (r = d.curURL.match(/[\?&]iuType=[a-z]*_[0-9]*/)) ? r[0].split("=")[1].split("_") : ["", ""], r = C[0], C = C[1], O = d.getCookie("als"), P = d.getCookie("utm_source"), Z = d.getCookie("utm_campaign"), J = d.getCookie("spm"), D, H, K;
                    "" != d.getCookie("new_session") ? (D = d.getCookie("init_refer"),
                        H = "0") : (D = q.encodeURIComponent(d.referrer),
                        H = "1");
                    K = "" != d.getCookie("new_uv") ? parseInt(d.getCookie("new_uv")) + ("0" == H ? 0 : 1) : 1;
                    d.setCookie("new_session", H);
                    d.setCookie("new_uv", K, 365);
                    var u = !1
                        , x = d.referrer.split("/")[2] || ""
                        , E = d.curURL.split("/")[2] || ""
                        , z = this.getValByUrl(d.curURL, "utm_source")
                        , A = this.getValByUrl(d.curURL, "spm")
                        , L = d.getCookie("qz_gdt")
                        , F = this.getValByUrl(d.curURL, "qz_gdt");
                    "NA" == F || "" == F ? (F = !1,
                        "NA" == A || "" == A ? x && -1 === x.indexOf(".58.com") && -1 === x.indexOf(".5858.com") && -1 === x.indexOf(".58cdn.com.cn") && (F = !0) : ("NA" == A ? "" : A) != J && (F = !0),
                    F && (L = "")) : L = F;
                    d.setCookie("qz_gdt", L);
                    if ("NA" != this.getValByUrl(d.curURL, "-15") || E && -1 != E.indexOf("luna.58.com"))
                        u = "NA";
                    d.referrer || "NA" == z && "NA" == A ? d.referrer || "NA" != z || "NA" != A || "1" !== H ? x && -1 === x.indexOf(".58.com") && -1 === x.indexOf(".5858.com") && -1 === x.indexOf(".58cdn.com.cn") && (D = q.encodeURIComponent(d.referrer),
                        u = "NA" == u ? !1 : !0) : (D = "",
                        u = "NA" == u ? !1 : !0) : (D = "",
                        u = "NA" == u ? !1 : !0);
                    u && "NA" != u && (P = "NA" === z ? "" : z,
                        J = "NA" === A ? "" : A);
                    d.setCookie("utm_source", P);
                    d.setCookie("spm", J);
                    d.setCookie("init_refer", D);
                    var u = "1.1.1.1.1." + K, x = d.getCookie("bbsession_uid"), E = [], z = y.indexOf("{"), t = {
                        GTID: R,
                        infoid: v,
                        infotype: r,
                        usertype: C,
                        als: O,
                        utm_source: P,
                        utm_campaign: Z,
                        spm: J,
                        qz_gdt: L,
                        br58: Y,
                        coords: N,
                        new_session: H,
                        init_refer: D,
                        new_uv: K,
                        UUID: k,
                        bangbangid: x,
                        navtype: t,
                        sc: f,
                        sid: l
                    }, M;
                    for (M in t)
                        t.hasOwnProperty(M) && E.push("'" + M + "':'" + t[M] + "'");
                    E.join(",");
                    y = "NA" !== y && -1 !== z ? y.substring(0, z + 1) + E + "," + y.substring(z + 1) : "{" + E + "}";
                    return {
                        site_name: a,
                        referrer: c,
                        UUID: k,
                        bangbangid: g,
                        pagetype: p,
                        post_count: m,
                        cate: B,
                        cate1: U,
                        cate2: V,
                        area: I,
                        area1: Q,
                        city: Q,
                        actiontype: W,
                        GTID: R,
                        ClickID: 1,
                        ROI: X,
                        curURL: b,
                        _trackParams: h,
                        userid: S,
                        smsc: T,
                        window_size: G,
                        trackURL: y,
                        Ga_pageview: n,
                        _ga_utma: u,
                        ClickIDPlus: function() {
                            this.ClickID += 1
                        },
                        curIndex: 0,
                        curPageNum: 1,
                        teemo: s
                    }
                },
                getValByUrl: function(a, c) {
                    var b;
                    b = a.match(RegExp("[&?]" + c + "=([^&|^#]*)"));
                    return b instanceof Array ? b[1] : "NA"
                },
                sendLog: function(a, c) {
                    var b = this.baseInfo
                        , e = this.config[a];
                    if (a && e && c && "object" === typeof c) {
                        for (var g = [], G = e.allParams, t = 0, f = G.length; t < f; t++)
                            g.push(G[t] + "=" + (c[G[t]] || b[G[t]] || ""));
                        d.ajaxsend(d.protocol + "//" + e.server + "?" + g.join("&"))
                    }
                },
                trackLog: function() {
                    var a = this.baseInfo;
                    this.sendLog("trackLog", {
                        tag: "pvstatall",
                        rand_id: d.getRandom()
                    });
                    if ("list" === a.pagetype || "detail" === a.pagetype)
                        "https:" == d.protocol ? this.sendLog("gdtTrackLog2", {
                            city: a.area,
                            plat: "M"
                        }) : this.sendLog("gdtTrackLog", {
                            city: a.area,
                            plat: "M"
                        })
                },
                clickLog: function(a) {
                    var c = ""
                        , c = null != a && "from=" === a.substring(0, 5) ? a.replace("from=", "") : "default&" + a;
                    this.sendLog("clickLog", {
                        tag: "pvsiters",
                        from: c,
                        rand: d.getRandom()
                    });
                    setTimeout("GCIDPlus()", 300)
                },
                listClickLog: function() {
                    var a = this
                        , c = this.baseInfo;
                    if (e.$ && "list" === c.pagetype && "NA" != c.trackURL) {
                        var b = function(b) {
                            if (b) {
                                var e = $(b).parents("[logr]");
                                b = e.attr("logr");
                                var k = ""
                                    , k = "";
                                if (b) {
                                    var f = [];
                                    b = b.split("_");
                                    f.push(b[0], b[1], b[2], b[3]);
                                    if (4 < b.length)
                                        var l = b[b.length - 1]
                                            , l = l.replace("ses^", "ses:")
                                            , k = k + l;
                                    l = e.attr("pos");
                                    k += l ? "@pos:" + l : "";
                                    if ("9224" == c.cate1 || "13941" == c.cate1)
                                        l = e.attr("_pos"),
                                            e = e.attr("sortid"),
                                            k = k + (l ? "@npos:" + l : "") + (e ? "@sortid:" + e : "");
                                    "" != k && (0 === k.indexOf("@") && (k = k.substring(1)),
                                        f.push(k));
                                    k = f.join("_");
                                    "NO" == a.filterList(c.curURL) && -1 != c.curURL.indexOf(".58.com") && (e = $(this).attr("href") || "#",
                                    -1 != e.indexOf("javascript:") || "#" == e.substring(0, 1) || "NO" != a.filterList(e) || "/" != e.substring(0, 1) && -1 == e.indexOf(".58.com") || e.match(/[\?&]iuType=/) || $(this).attr("href", e.trim() + (-1 == e.indexOf("?") ? "?" : "&") + "iuType=" + b[0] + "_" + b[1]));
                                    a.sendLog("listClickLog", {
                                        tag: "mlistclick",
                                        info_data: k,
                                        rand_id: d.getRandom()
                                    });
                                    setTimeout("GCIDPlus()", 300)
                                }
                            }
                        }
                            , k = $("[tongji_label=listclick]");
                        k && 0 < k.length ? d.bindElem("[logr] [tongji_label=listclick]", "click", function() {
                            b($(this))
                        }) : d.bindElem("li[logr] a", "click", function() {
                            var a = $(this).attr("class");
                            "function" == typeof $(this).parents && "diyu_sale" != a && "company_job" != a && b($(this))
                        })
                    }
                },
                oldListClickLog: function(a) {
                    this.sendLog("oldListClickLog", {
                        tag: "mlistclick",
                        bi_val_pos: a.replace("&bi_val_pos=", ""),
                        rand: d.getRandom()
                    });
                    setTimeout("GCIDPlus()", 300)
                },
                listShowLog: function() {
                    var a = this.baseInfo
                        , c = a.cate1
                        , b = a.trackURL.length + a.referrer.length
                        , k = [];
                    if (e.$ && "list" === a.pagetype && "function" == typeof $("li[logr]").attr) {
                        for (var g = $("li[logr]"), f = g.length, n = a.curPageNum, w = 0, l = a.curIndex; l < f; l++) {
                            var p = $(g[l])
                                , w = p.attr("logr")
                                , m = p.attr("pagenum");
                            if (1 === n || n === m) {
                                if (w) {
                                    var w = []
                                        , h = p.attr("logr").split("_")
                                        , m = "";
                                    w.push(h[0], h[1], h[2], h[3]);
                                    4 < h.length && (h = h[h.length - 1],
                                        h = h.replace("ses^", "ses:"),
                                        m += h);
                                    h = p.attr("pos");
                                    m += h ? "@pos:" + h : "";
                                    if ("9224" === c || "13941" === c)
                                        h = p.attr("_pos"),
                                            p = p.attr("sortid"),
                                            m += h ? "@npos:" + h : "",
                                            m += p ? "@sortid:" + p : "";
                                    "" != m && (0 === m.indexOf("@") && (m = m.substring(1)),
                                        w.push(m));
                                    p = w.join("_")
                                } else {
                                    var w = p.attr("post_type")
                                        , m = p.attr("enum_user")
                                        , h = p.attr("uid")
                                        , q = p.attr("infoid")
                                        , p = w + "_" + m + "_" + h + "_" + q;
                                    q && "function" === typeof $("[infoid]").index && (h = $("[infoid]").index($(this)) + 1,
                                        p += "_@pos:" + h)
                                }
                                w = p.length;
                                m = k.join(",");
                                4096 < b + w + m.length && (this.sendLog("listShowLog", {
                                    tag: "mlistshow",
                                    info_data: m,
                                    rand_id: d.getRandom()
                                }),
                                    k = []);
                                k.push(p)
                            } else if (!(n > m))
                                break
                        }
                        a.curIndex = l;
                        0 != k.length && this.sendLog("listShowLog", {
                            tag: "mlistshow",
                            info_data: k.join(","),
                            rand_id: d.getRandom()
                        })
                    }
                },
                bindTongji_tag: function() {
                    if (e.$) {
                        var a = this;
                        d.bindElem("[tongji_tag]", "click", function() {
                            var c = $(this).attr("tongji_tag")
                                , b = $(this).text().trim();
                            a.clickLog("from=" + c + "&text=" + encodeURIComponent(b) + "&tongji_type=tongji_tag")
                        })
                    }
                },
                bindTongji_id: function() {
                    if (e.$) {
                        var a = this;
                        d.bindElem("[tongji_id]", "click", function(c) {
                            var b = c.srcElement ? c.srcElement : c.target;
                            "A" == b.tagName.toUpperCase() && (c = $(b).attr("href") || "#",
                                b = $(b).text(),
                            -1 == c.indexOf("javascript:") && "#" != c.substring(0, 1) && a.clickLog("from=" + $(this).attr("tongji_id") + "&text=" + encodeURIComponent(b) + "&to=" + encodeURIComponent(c) + "&tongji_type=tongji_id"))
                        })
                    }
                },
                diaShowLog: function(a) {},
                loadMorePageLog: function(a) {
                    var c = this.baseInfo;
                    if (a && -1 != a.indexOf("pagenum=")) {
                        var b = a.split("=", -1)[1];
                        c.trackURL = c.trackURL.replace(/'pagenum':[^,}&]*/, "'pagenum':'" + b + "'");
                        c.curPageNum = b
                    }
                    this.sendLog("loadMorePageLog", {
                        tag: "pvstatall",
                        EventTag: "loadMorePage&" + a,
                        rand_id: d.getRandom()
                    });
                    this.listShowLog()
                },
                bindAlsTag: function() {
                    if (!d.getCookie("als") && e.$ && "function" === typeof $("body").one)
                        $("body").one("mouseover", function() {
                            d.setCookie("als", "0", 365)
                        });
                    d.getCookie("isSpider") && d.setCookie("isSpider", "", 0)
                },
                bindHomeHeatMap: function() {
                    var a = this.baseInfo;
                    if (e.$ && "home" === a.pagetype && "m_zhuzhan" === a.actiontype)
                        for (var c = $("[tongji_tag]"), b = 0; b < c.length; b++) {
                            var d = c[b]
                                , g = $(d).attr("href") || "#"
                                , f = $(d).attr("tongji_tag") || "NA";
                            -1 == g.indexOf("javascript:") && "#" != g.substring(0, 1) && (g = g.match(/[\?&]58hm=[^&]*/) ? g.replace(/58hm=[^&]*/, "58hm=" + f) : g.trim() + (-1 == g.indexOf("?") ? "?" : "&") + "58hm=" + f,
                                g = g.match(/[\?&]58cid=[^&]*/) ? g.replace(/58cid=[^&]*/, "58cid=" + a.area1) : g.trim() + (-1 == g.indexOf("?") ? "?" : "&") + "58cid=" + a.area1,
                                $(d).attr("href", g))
                        }
                },
                bindIndexHeatMap: function() {
                    var a = this.baseInfo;
                    if (e.$ && "index" === a.pagetype && "m_zhuzhan" === a.actiontype && "YES" == this.isRealIndexPage(a.curURL))
                        for (var c = $("[tongji_tag]"), b = 0; b < c.length; b++) {
                            var d = c[b]
                                , g = $(d).attr("href") || "#"
                                , f = $(d).attr("tongji_tag") || "NA";
                            -1 == g.indexOf("javascript:") && "#" != g.substring(0, 1) && (g = g.match(/[\?&]58ihm=[^&]*/) ? g.replace(/58ihm=[^&]*/, "58ihm=" + f) : g.trim() + (-1 == g.indexOf("?") ? "?" : "&") + "58ihm=" + f,
                                g = g.match(/[\?&]58cid=[^&]*/) ? g.replace(/58cid=[^&]*/, "58cid=" + a.area1) : g.trim() + (-1 == g.indexOf("?") ? "?" : "&") + "58cid=" + a.area1,
                                $(d).attr("href", g))
                        }
                },
                bindAddGTIDtoURL: function() {
                    var a = this
                        , c = this.baseInfo;
                    e.$ && d.bindElem("a", "click", function() {
                        if ("NO" == a.filterList(c.curURL) && -1 != c.curURL.indexOf(".58.com")) {
                            var b = $(this).attr("href") || "#";
                            if (-1 == b.indexOf("javascript:") && "#" != b.substring(0, 1) && "NO" == a.filterList(b) && ("/" == b.substring(0, 1) || -1 != b.indexOf(".58.com")))
                                if (b.match(/[\?&]ClickID=\d*/))
                                    $(this).attr("href", b.replace(/ClickID=\d*/, "ClickID=" + c.ClickID));
                                else {
                                    var e = b.indexOf("?");
                                    -1 != e && -1 != b.substring(e).indexOf("statmark=t") && -1 != b.substring(e).indexOf("#") ? (e = b.indexOf("statmark=t"),
                                        $(this).attr("href", b.substring(0, e + 10) + "&PGTID=" + c.GTID + "&ClickID=" + c.ClickID + b.substring(e + 10))) : $(this).attr("href", b.trim() + (-1 == e ? "?" : "&") + "PGTID=" + c.GTID + "&ClickID=" + c.ClickID)
                                }
                        }
                    })
                },
                insertMiGuan: function() {
                    try {
                        var a = "default";
                        switch (this.baseInfo.cate1) {
                            case "9224":
                            case "9225":
                            case "13941":
                            case "13952":
                                a = "yewu";
                                break;
                            case "1":
                                a = "ershoufang";
                                break;
                            case "5":
                                a = "shouji";
                                break;
                            case "832":
                                a = "dog";
                                break;
                            case "4":
                                a = "ershouche";
                                break;
                            default:
                                a = "shenghuo"
                        }
                        var c = Math.ceil(1E14 * Math.random())
                            , e = document.getElementsByTagName("body")[0]
                            , f = document.createElement("div");
                        f.id = "addInfo";
                        f.style.display = "none";
                        var g = document.createElement("a");
                        g.href = d.protocol + "//tracklog.58.com/detail/m/" + a + "/" + c + "x.shtml";
                        g.text = "\u63a8\u8350\u4fe1\u606f";
                        f.appendChild(g);
                        e.appendChild(f)
                    } catch (n) {}
                },
                bindUndefinedClickLog: function() {
                    if (e.limited_show) {
                        var a = limited_show.replace(/\[/g, "").replace(/\]/g, "").trim().split(","), c;
                        for (c in a)
                            a[c].trim() && this.clickLog(a[c].trim())
                    }
                    if (e._statisArr)
                        for (a = e._statisArr; a instanceof Array && 0 < a.length; )
                            c = a.shift(),
                                c instanceof Array ? this.clickLog("from=" + c[0] + "&sumval=" + c[1]) : this.clickLog(c)
                },
                performanceLog: function() {
                    var a = this.baseInfo, c = !1, b = "home index list special post detail tongzhen".split(" "), d;
                    for (d in b)
                        if (a.pagetype == b[d]) {
                            c = !0;
                            break
                        }
                    if (c && e.performance && e.performance.timing) {
                        var f = e.onload;
                        q.onload = function() {
                            function a(c, e, b) {
                                return "number" === typeof c && "number" === typeof e ? (c -= e,
                                    c = Math.floor(0 > c ? -1 : c),
                                    -1 == c && b ? b : c) : -1
                            }
                            function c(b) {
                                var d = e.performance.timing
                                    , d = {
                                    loadPage: 0 == d.navigationStart ? a(d.loadEventEnd, d.fetchStart, b) : a(d.loadEventEnd, d.navigationStart, b),
                                    domReady: a(d.domComplete, d.responseEnd, b),
                                    redirect: a(d.redirectEnd, d.redirectStart, b),
                                    lookupDomain: a(d.domainLookupEnd, d.domainLookupStart, b),
                                    ttfb: 0 == d.navigationStart ? a(d.responseStart, d.fetchStart, b) : a(d.responseStart, d.navigationStart, b),
                                    request: a(d.responseEnd, d.requestStart, b),
                                    loadEvent: a(d.loadEventEnd, d.loadEventStart, b),
                                    appcache: a(d.domainLookupStart, d.fetchStart, b),
                                    unloadEvent: a(d.unloadEventEnd, d.unloadEventStart, b),
                                    connect: a(d.connectEnd, d.connectStart, b),
                                    DOMContentLoaded: a(d.domContentLoadedEventEnd, d.fetchStart, b)
                                };
                                b = [];
                                for (var f in d)
                                    d.hasOwnProperty(f) && b.push("'" + f + "':'" + d[f] + "'");
                                b.join(",");
                                f = getTrackURL();
                                d = f.indexOf("{");
                                f = "NA" !== f && -1 !== d ? f.substring(0, d + 1) + b + "," + f.substring(d + 1) : "{" + b + "}";
                                b = [];
                                b.push("site_name=58");
                                b.push("tag=performance");
                                b.push("referrer=" + q.encodeURIComponent(document.referrer));
                                b.push("trackURL=" + f);
                                b.push("rand_id=" + e.Math.random());
                                b = v.protocol + "//tracklog.58.com/Mv1/performance/empty.js.gif?" + b.join("&");
                                (new Image).src = b;
                                e.TJ58Obj.send = !0;
                                clearInterval(e.TJ58Obj.PFORMINTERVAL)
                            }
                            f && "function" == typeof e.onload && f();
                            if ("undefined" == typeof e.TJ58Obj.send) {
                                e.TJ58Obj.PFORMCOUNT = -1;
                                e.TJ58Obj.send = !1;
                                var b = e.unload;
                                e.unload = function() {
                                    b && "function" == typeof e.unload && b();
                                    e.TJ58Obj.send || c("close_" + Math.floor(e.performance.now()))
                                }
                                ;
                                e.TJ58Obj.PFORMINTERVAL = setInterval(function() {
                                    e.TJ58Obj.PFORMCOUNT++;
                                    6 < e.TJ58Obj.PFORMCOUNT && clearInterval(e.TJ58Obj.PFORMINTERVAL);
                                    try {
                                        0 < e.performance.timing.loadEventEnd ? c() : 6 <= e.TJ58Obj.PFORMCOUNT && c("TIMEOUT_" + Math.floor(e.performance.now()))
                                    } catch (a) {
                                        clearInterval(e.TJ58Obj.PFORMINTERVAL)
                                    }
                                }, 500)
                            }
                        }
                    }
                },
                DMloadByTag: function() {
                    try {
                        var a = this.getValByUrl(d.curURL, "dm-statistic-detect")
                            , c = d.getCookie("dm-statistic-detect");
                        if (a = ("NA" == a ? "" : a) || c || "")
                            if (e.TJ58ecdata = {},
                                    e.TJ58ecdata.platform = "58M",
                                "https:" != v.protocol)
                                switch (a) {
                                    case "2":
                                        d.loadScript(v.protocol + "//stat.58corp.com/static/js/referrer_alert.js");
                                        break;
                                    case "3":
                                        d.loadScript(v.protocol + "//stat.58corp.com/static/js/referrer_visual.js")
                                }
                    } catch (b) {}
                },
                xxzlLoadFn: function() {
                    try {
                        if ("t" == this.baseInfo.teemo) {
                            var a = (new Date).getTime();
                            d.xxzlLoadJs(v.protocol + "//j1.58cdn.com.cn/git/xxzl/teemo/teemo_init.js?dt=" + a + "&appkey=49f15a01b252219bfmm")
                        }
                    } catch (c) {}
                }
            };
            f.baseInfo = f.getBaseInfo();
            f.trackLog();
            f.listShowLog();
            f.listClickLog();
            f.bindAlsTag();
            f.bindTongji_tag();
            f.bindTongji_id();
            f.bindHomeHeatMap();
            f.bindIndexHeatMap();
            f.bindAddGTIDtoURL();
            f.bindUndefinedClickLog();
            f.insertMiGuan();
            e.clickLog = function(a) {
                f.clickLog(a)
            }
            ;
            e.showLog = function(a) {}
            ;
            e.loadMorePage = function(a) {
                f.loadMorePageLog(a)
            }
            ;
            e.ajaxlog_mlistshow = function() {
                f.listShowLog()
            }
            ;
            e.GCIDPlus = function() {
                f.baseInfo.ClickIDPlus()
            }
            ;
            e.listClickLog = function(a) {}
            ;
            e.reTrackLog = function() {
                f.baseInfo = f.getBaseInfo();
                f.trackLog();
                f.listShowLog()
            }
            ;
            e.getGTID = function() {
                return f.baseInfo.GTID
            }
            ;
            e.getTrackURL = function() {
                return f.baseInfo.trackURL
            }
            ;
            f.performanceLog();
            f.xxzlLoadFn();
            e._gaq = e._gaq || [];
            f.DMloadByTag()
        }
    }
)(window);
