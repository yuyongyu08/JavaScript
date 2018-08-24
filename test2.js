!function() {
    "use strict";
    function e(e) {
        return "function" == typeof String.prototype.trim ? String.prototype.trim.call(e) : e.replace(/^\s+(.*?)\s+$/g, "$1")
    }
    function t(e) {
        return encodeURIComponent(JSON.stringify(e))
    }
    function a() {
        var e = new Date
            , t = e.getUTCFullYear()
            , a = e.getUTCMonth()
            , i = e.getUTCDate();
        return new Date(t,a,i).getTime() + 1152e5
    }
    function i() {
        var e = !1
            , t = document.referrer.indexOf("m.baidu.com")
            , a = g.get("utm_source") || ""
            , i = g.get("spm") || ""
            , n = g.get("init_refer") || ""
            , r = Boolean("baidu" == m);
        switch (!0) {
            case t > -1:
            case r:
            case n.indexOf("baidu.com") > -1:
            case a.indexOf("baidu") > -1 && -1 == a.indexOf("wm"):
            case /b-31580022738699-me-f-8(23|24|25|58)[^0-9]/gi.test(i):
                e = !0
        }
        return e
    }
    function n() {
        if (!d)
            return !1;
        var e = Boolean(h.isAndroid)
            , t = Boolean(h.isIOS)
            , a = (Boolean("weixin" == m),
            Boolean("safari" == m))
            , n = Boolean("uc" == m)
            , r = (v.tradeline,
            i())
            , o = window.location.pathname;
        return !(window.location.href.match(/utm_source=market&spm=u-2cz3cfkfe3v43nkdq9g.ceshi_xiecheng_zhaopin/i) || r || "/" == o || "gongchengc" == v.cateSecond || t && a || e && n || g.get("nonLaunch"))
    }
    function r(e) {
        if (e[v.cate])
            return e[v.cate];
        for (var t in e)
            if (t == v.tradeline)
                return e[t]
    }
    function o(e) {
        if (!d)
            return !0;
        if (1 == g.get("nonLaunch"))
            return !0;
        var t = g.get("hasLaunchPage") ? g.get("hasLaunchPage") : "|";
        if (t.split("|").indexOf(e) > -1)
            return !0;
        var i = a()
            , n = new Date;
        return n.setTime(i),
            g.set("hasLaunchPage", t + e + "|", n),
            !1
    }
    function s(e) {
        var t = g.get("launchFlag") ? g.get("launchFlag") : 0
            , i = !0
            , n = a()
            , r = new Date;
        return r.setTime(n),
            3 == t ? (g.remove("launchFlag"),
                g.set("nonLaunch", 1, r),
                i = !1) : t < 3 && (o(e) ? i = !1 : g.set("launchFlag", ++t, r)),
            i
    }
    function l(e, t) {
        var a = {
            sale: ["pets", "ershoujiaoyi", "danche", "zixingche"],
            job: ["jianzhi"],
            huangye: ["shenghuo", "zhuangxiujc", "shangwu", "zhaoshang"]
        };
        for (var i in a)
            for (var n = a[i], r = 0; r < n.length; r++)
                if (n[r] === e || n[r] === t)
                    return i;
        return e
    }
    function c(e) {
        return "job" == e ? "qzzp" : e
    }
    function u(e) {
        function t(e) {
            for (var t = e.catelist[0].listname, a = ["shenghuo", "zhuangxiujc", "shangwu", "zhaoshang", "qichefw", "jiaoyu", "hunjiehunqing", "lvyouxiuxian", "xiuxianyl", "liren", "shop", "canyin", "yiliaobaojian", "nonglinmy"], i = 0; i < a.length; i++)
                t === a[i] && (t = "huangye");
            return "piaowu" == t && (t = "sale"),
            "jianzhi" == t && (t = "job"),
            "pets" == t && (t = "sale"),
                t
        }
        function a(t) {
            t.pid = s.getAttribute("data-pid"),
                t.wlmode = "sc",
                t.wltype = e.wltype ? e.wltype : "bro",
                t.wlsour = e.wlsour ? e.wlsour : m;
            var a = [];
            for (var i in l)
                l[i] && a.push(i + "=" + l[i]);
            var n = a.join("&");
            o += n ? "&" + n : ""
        }
        if (f) {
            var i = Boolean(h.isIOS)
                , n = Boolean("uc" == m)
                , r = Boolean("qq" == m)
                , o = "wbmain://";
            i && (n || r) && (o = "wbcore://");
            var s = e.container
                , l = {};
            if (!(s instanceof HTMLElement))
                return !1;
            Array.isArray;
            switch (f) {
                case "main":
                    o += "nativejump?pagetype=main",
                        a(l);
                    break;
                case "cate":
                    var c = e.type ? e.type : d.catelist[0].listname;
                    if ("huangye" == c && (c = "hyshangjie"),
                        "shenghuo" == c && (c = "jiazheng"),
                        "jianzhi" == c) {
                        var u = d.locallist[0].listname
                            , p = s.getAttribute("data-pid")
                            , g = e.wlsour ? e.wlsour : m;
                        o += "jump/job/partTimeCate?local=" + u + "&pid=" + p + "&wlsour=" + g + "&params=%7B%22list_name%22%3A%22jianzhi%22%2C%22showsift%22%3Atrue%2C%22pagetype%22%3A%22open_pt_cate%22%2C%22title%22%3A%22%E5%85%BC%E8%81%8C%22%2C%22url%22%3A%22https%3A%2F%2Fapp.58.com%2Fapi%2Flist%2Fjianzhi%22%7D"
                    } else if ("car" == c) {
                        var u = d.locallist[0].listname
                            , p = s.getAttribute("data-pid")
                            , g = e.wlsour ? e.wlsour : m;
                        o += "jump/car/usedCarTab?params=%7B%22cate%22%3A%7B%22title%22%3A%22%E4%BA%8C%E6%89%8B%E8%BD%A6%22%2C%22list_name%22%3A%22car%22%2C%22showpub%22%3Atrue%2C%22url%22%3A%22https%3A%2F%2Fapp.58.com%2Fweb%2Flist%2F%40local%40%2Fershouche%3F-20%3Desccate%26showtab%3Dtrue%22%2C%22search_title%22%3A%22%E5%93%81%E7%89%8C%E6%88%96%E8%BD%A6%E7%B3%BB%22%7D%2C%22service%22%3A%7B%22title%22%3A%22%E6%9C%8D%E5%8A%A1%22%2C%22url%22%3A%22https%3A%2F%2Fj1.58cdn.com.cn%2Fm58%2Fm3%2Fhtml%2Fcar%2Fappcate%2Fservicecar.html%22%7D%2C%22defaultindex%22%3A0%2C%22list%22%3A%7B%22cateid%22%3A%2229%22%2C%22item_tpl%22%3A%22ershouche%22%2C%22use_cache%22%3Afalse%2C%22show_sift%22%3Atrue%2C%22meta_url%22%3A%22https%3A%2F%2Fapp.58.com%2Fapi%2Flist%22%2C%22recovery%22%3Afalse%2C%22data_url%22%3A%22https%3A%2F%2Fwireless.58.com%2Fapi%2Flist%22%2C%22show_publish_btn%22%3Atrue%2C%22show_search_btn%22%3Atrue%2C%22title%22%3A%22%E4%BA%8C%E6%89%8B%E8%BD%A6%22%2C%22local_name%22%3A%22%22%2C%22show_thumb%22%3Atrue%2C%22list_name%22%3A%22ershouche%22%2C%22search_title%22%3A%22%E5%93%81%E7%89%8C%E6%88%96%E8%BD%A6%E7%B3%BB%22%2C%22filterparams%22%3A%7B%7D%2C%22cate_fullpath%22%3A%224%2C29%22%7D%2C%22publish%22%3A%7B%22title%22%3A%22%E5%8D%96%E8%BD%A6%22%2C%22url%22%3A%22https%3A%2F%2Fj1.58cdn.com.cn%2Fm58%2Fm3%2Fhtml%2Fcar%2Fappcate%2Fpublishcar.html%22%7D%7D"
                    } else
                        l = {
                            type: c,
                            local: d.locallist[0].listname,
                            jumptype: "web",
                            title: d.catelist[0].name
                        },
                            o += "webnative?pagetype=cate",
                            a(l);
                    break;
                case "list":
                    l = {
                        tradeline: t(d),
                        list_name: d.catelist.length > 2 ? d.catelist[2].listname : d.catelist[1].listname,
                        cateid: d.catelist.length > 2 ? d.catelist[2].dispid : d.catelist[1].dispid,
                        jumptype: e.jumptype ? e.jumptype : "native",
                        title: d.catelist.length > 2 ? d.catelist[2].name : d.catelist[1].name,
                        local_name: d.locallist[0].listname,
                        filterParams: e.filterParams ? e.filterParams : ""
                    },
                        o += "nativejump?pagetype=list",
                        a(l);
                    break;
                case "detail":
                    l = {
                        topcate: t(d),
                        list_name: d.catelist[1].listname,
                        local_name: d.locallist[0].listname,
                        infoID: ____json4fe.infoid,
                        jumptype: e.jumptype ? e.jumptype : "native",
                        title: "详情",
                        full_path: (d.catelist[0].dispid ? d.catelist[0].dispid : "") + "," + (d.catelist[1].dispid ? d.catelist[1].dispid : "")
                    },
                        l.meta_url = "https://app.58.com/dict/list",
                        o += "nativejump?pagetype=detail",
                        a(l)
            }
            var v = s.getAttribute("data-jumpUrl");
            v && "" != v && (v += strPara ? "&pagetype=" + f + "&" + strPara : "");
            var y = s.getAttribute("tongji_tag") || "appLaunch"
                , A = i ? "ios" : "andr"
                , e = {
                openAppUrl: o,
                jumpUrl: v,
                clickLog: y + "_" + A
            };
            return e
        }
    }
    function p(e) {
        var t = Boolean(h.isIOS)
            , a = h.iosVersion
            , i = e.openAppUrl || ""
            , n = e.jumpUrl || "";
        if (i) {
            if (window.clickLog && clickLog("from=" + e.clickLog),
                t && a && a >= 9)
                if (n && "" != n) {
                    var r = n.split("?")
                        , o = r.length > 1 ? r[1] : "";
                    e.type && "2" == e.type ? n += "#app" : n = "//app.58.com/api/windex/callappback?" + o + "#app"
                } else
                    window.location.href = i;
            else {
                var s = document.createElement("iframe");
                s.style.display = "none",
                    s.src = i,
                    document.body.appendChild(s)
            }
            n && setTimeout(function() {
                window.location.href = n
            }, 300)
        }
    }
    var m = function() {
        var e = {
            weixin: /micromessenger\//gi,
            momo: /momowebview\//gi,
            qq: /mqqbrowser\/|\sqq\//gi,
            baidu: /baidu/gi,
            uc: /ucbrowser/gi,
            xiaomi: /xiaomi\//gi,
            firefox: /firefox/gi,
            opera: /opr\/|opera/gi,
            sogou: /sogoumobilebrowser/gi,
            liebao: /liebao/gi,
            oppo: /oppobrowser/gi,
            360: /360 aphone browser/gi,
            safari: /version\/([0-9]+\.\d[\.\d]*)\s+mobile\/\w+\s+safari\/([0-9]+\.\d[\.\d]*)/gi,
            chrome: /chrome\/([0-9]+\.\d[\.\d]*)+\s+mobile\s+safari\/([0-9]+\.\d[\.\d]*)$|crios/gi
        }
            , t = "other"
            , a = navigator.userAgent.toLocaleLowerCase();
        for (var i in e)
            if (e[i].test(a)) {
                t = i;
                break
            }
        return t
    }()
        , h = function() {
        var e = navigator.userAgent
            , t = e.match(/(Android);?[\s\/]+([\d.]+)?/)
            , a = e.match(/(iPhone\sOS)\s([\d_]+)/);
        if (a)
            var i = /[\S\s]*os ([\d_]+) like/gi.exec(e)
                , n = parseInt(i[1], 10);
        return {
            isAndroid: t,
            isIOS: a,
            iosVersion: n
        }
    }()
        , d = function() {
        var e = {};
        if ("undefined" == typeof ____json4fe)
            return {};
        var t = ____json4fe;
        if (t.locallist) {
            var a, i;
            $.isArray(t.locallist) ? (a = t.locallist[0],
                i = t.locallist) : (a = t.locallist,
                i = [a]),
                e.city = a,
                e.locallist = i
        }
        if (t.catentry) {
            var n, r, o;
            $.isArray(t.catentry) ? (r = t.catentry[t.catentry.length - 1],
                o = t.catentry) : (r = t.catentry,
                o = [r]),
            t.rootcatentry && o.unshift(t.rootcatentry),
                n = o[0],
                e.rootcate = n,
                e.cate = r,
                e.catelist = o
        }
        t.metaUrl && (e.metaUrl = t.metaUrl);
        var s = t.modules;
        return e.j = t,
            e.isHome = "home" == s || "homepage" == s,
            e.isList = "list" == s || "listpage" == s,
            e.isFinal = "final" == s || "finalpage" == s,
            e.isMy = "my" == s || "mypage" == s,
            e.isPost = "post" == s || "postpage" == s,
            e
    }()
        , f = function() {
        var e = d;
        return e ? e.isFinal ? "detail" : 1 == e.catelist.length && parseInt(e.catelist[0].dispid) > 0 ? "cate" : e.catelist.length > 1 && !e.isFinal ? "list" : "main" : ""
    }()
        , g = {
        get: function(t, a) {
            a = !1 !== a;
            var i = null;
            if (!t)
                return cookievalue;
            var n = t.length + 1
                , r = document.cookie;
            if (r)
                for (var o = r.split(";"), s = 0, l = o.length; s < l; s++) {
                    var c = e(o[s]);
                    if (c.substring(0, n) == t + "=") {
                        i = c.substring(n),
                            i = a ? decodeURIComponent(i) : i;
                        break
                    }
                }
            return i
        },
        getname: function(e, t) {
            var a = this.get(e);
            if (!a)
                return "";
            var i = new RegExp("[?&]" + encodeURIComponent(t) + "\\=([^&#]+)")
                , n = (a.match(i) || ["", ""])[1];
            return decodeURIComponent(n)
        },
        set: function(e, t, a, i, n, r) {
            var o = {
                expiresDay: 30,
                path: "/",
                domain: ".58.com"
            };
            null === t ? (t = "",
                a = -1) : void 0 === a && (a = o.expiresDay);
            var s = "";
            if (a) {
                var l;
                "number" == typeof a ? (l = new Date,
                    l.setTime(l.getTime() + 24 * a * 60 * 60 * 1e3)) : a.toUTCString && (l = a),
                    s = "; expires=" + l.toUTCString()
            }
            var i = void 0 === i ? o.path : i
                , c = i ? "; path=" + i : "";
            n = void 0 === n ? o.domain : n;
            var u = n ? "; domain=" + n : ""
                , p = !0 === r ? "; secure" : "";
            document.cookie = [e, "=", encodeURIComponent(t), s, c, u, p].join("")
        },
        remove: function(e) {
            this.set(e, "", new Date(1970,1,1))
        }
    }
        , v = function() {
        var e = d.catelist[0].listname ? d.catelist[0].listname : ""
            , t = d.catelist[1] && d.catelist[1].listname ? d.catelist[1].listname : "";
        return {
            cate: e,
            cateSecond: t,
            cateType: c(e),
            tradeline: l(e, t)
        }
    }()
        , y = function() {
        var e = "";
        switch (f) {
            case "main":
                e = "index";
                break;
            case "cate":
                e = "c_" + v.cateType;
                break;
            case "list":
                e = "l_" + v.cateType + "_" + d.catelist[1].listname;
                break;
            case "detail":
                e = "d_" + v.cateType + "_" + d.catelist[1].listname + "_" + d.j.infoid
        }
        return e
    }();
    $(function() {
        if (window == window.top && n() && s(y)) {
            var e, a = document.createElement("div");
            switch (f) {
                case "main":
                    a.setAttribute("data-pid", "963"),
                        e = u({
                            container: a
                        });
                    break;
                case "cate":
                    var i = {
                        house: "969",
                        sale: "953",
                        job: "966",
                        car: "972",
                        huangye: "975",
                        zhaoshang: "1106"
                    };
                    a.setAttribute("data-pid", r(i));
                    var e = u({
                        container: a,
                        type: v.cateType
                    });
                    break;
                case "list":
                    var i = {
                        house: "970",
                        sale: "964",
                        job: "967",
                        car: "973",
                        huangye: "976",
                        zhaoshang: "1106"
                    };
                    if (a.setAttribute("data-pid", r(i)),
                            v.cate) {
                        var o = "undefined" == typeof filterParams ? "" : filterParams
                            , l = t(o);
                        if ("duanzu" == v.cateSecond || "cheliangjyfu" == v.cateSecond)
                            var e = u({
                                container: a,
                                tradeline: v.tradeline,
                                jumptype: "web",
                                filterParams: l
                            });
                        else
                            var e = u({
                                container: a,
                                tradeline: v.tradeline,
                                filterParams: l
                            })
                    }
                    break;
                case "detail":
                    var i = {
                        house: "971",
                        sale: "965",
                        job: "968",
                        car: "974",
                        huangye: "977",
                        zhaoshang: "1106"
                    };
                    if (a.setAttribute("data-pid", r(i)),
                            v.cate)
                        if ("duanzu" == v.cateSecond || "cheliangjyfu" == v.cateSecond)
                            var e = u({
                                container: a,
                                topcate: v.tradeline,
                                jumptype: "web"
                            });
                        else
                            var e = u({
                                container: a,
                                topcate: v.tradeline
                            })
            }
            e && p(e)
        }
    })
}();
