define("util/postClickLog", [], function() {
    return {
        send: function(t) {
            try {
                this.sendJson("from=" + t)
            } catch (e) {}
        },
        sendJson: function(t) {
            try {
                window.clickLog(t)
            } catch (e) {}
        },
        sendRealTimeError: function(t, e) {
            if (void 0 !== t && void 0 !== e && window.____json4fe && 12 == window.____json4fe.catentry[1].dispid && ("xiaoqu" == t || "MinPrice0" == t || "jibenxinxi" == t)) {
                var i = {
                    from: "fcpcReleaseError"
                };
                i[t] = encodeURIComponent(e);
                try {
                    this.sendJson($.param(i))
                } catch (n) {}
            }
        }
    }
}),
    define("component/block/js/block", ["util/postClickLog"], function(i) {
        function t(t) {
            this.opts = $.extend(!0, {}, this.constructor.opts, t),
                this.init()
        }
        return t.opts = {
            type: "block",
            title: "",
            className: "",
            defaultClassName: {
                wrap: "block_wrap",
                title: "block_title",
                content: "block_content"
            }
        },
            t.prototype = {
                constructor: t,
                init: function() {
                    this.createElem()
                },
                createElem: function() {
                    this.createElemByDefault(),
                        this.setExtraAttr()
                },
                createElemByDefault: function() {
                    var t, e = this.opts;
                    t = this.opts.view && this.opts.view.hasTitleContent ? $("<div>").addClass(e.defaultClassName.title).append("<h2>" + e.title + '</h2><span class="promise_hint inline_block">填写保障承诺的信息将在列表页被<font class="c_f00">优先排序</font>，您所勾选承诺的保障服务将接受58和用户的<font class="c_f00">监督</font>。</span>') : this.opts.view && this.opts.view.desc ? $("<div>").addClass(e.defaultClassName.title).append("<h2>" + e.title + "</h2>").append($("<span>").addClass("title_desc").append("(&nbsp;" + e.view.desc + "&nbsp;)")) : $("<div>").addClass(e.defaultClassName.title).append("<h2>" + e.title + "</h2>"),
                        this.contentElem = $("<div>").addClass(e.defaultClassName.content),
                        this.containerElem = $("<div>").addClass(e.defaultClassName.wrap),
                        this.containerElem.append(t),
                        this.containerElem.append(this.contentElem),
                    !0 === e.hasToggleBtn && this.initToggleBtn()
                },
                initToggleBtn: function() {
                    var t = this
                        , e = this.createToggleBtn();
                    e.find(".block_toggle_btn").bind("click", function() {
                        $(this).hasClass("toggle_show") ? ($(this).removeClass("toggle_show").addClass("toggle_hide"),
                            $(this).find(".toggle_text span").html("收起选填信息"),
                            t.moveByBtn("slideDown"),
                        12 == ____json4fe.catentry[1].dispid && i.send("pc_post_xtopen")) : ($(this).addClass("toggle_show").removeClass("toggle_hide"),
                            $(this).find(".toggle_text span").html("更多选填信息"),
                            t.moveByBtn("slideUp"),
                        12 == ____json4fe.catentry[1].dispid && i.send("pc_post_xtclose"))
                    }).bind("mouseover", function() {
                        $(this).addClass("block_toggle_btn_mouseover")
                    }).bind("mouseout", function() {
                        $(this).removeClass("block_toggle_btn_mouseover")
                    }),
                        this.containerElem.append(e)
                },
                createToggleBtn: function() {
                    var t = "toggle_hide";
                    return this.opts.displayStatus && "hide" !== this.opts.displayStatus || (!0,
                        t = "toggle_show",
                        this.moveByBtn("hide")),
                        $('<div class="clearfix block_toggle_wrap"><div class="block_toggle_btn ' + t + '"><span class="icon"></span><div class="toggle_text"><span>更多选填信息</span><p>丰富内容可使成交加速一倍</p></div></div></div>')
                },
                setExtraAttr: function() {
                    var t = this.opts;
                    "string" == typeof t.className && 0 < t.className.length && this.containerElem.addClass(t.className)
                },
                render: function() {
                    this.containerElem.appendTo("#postForm")
                },
                hideTitle: function() {
                    this.containerElem.find("." + this.opts.defaultClassName.title).hide()
                },
                showTitle: function() {
                    this.containerElem.find("." + this.opts.defaultClassName.title).show()
                },
                moveByBtn: function(t) {
                    var e;
                    "string" == typeof t && (this.containerElem && "function" == typeof this.containerElem[t] && (this.contentElem[t](),
                        e = this.containerElem.find("." + this.opts.defaultClassName.title)),
                    e && "function" == typeof e[t] && e[t]())
                }
            },
            t
    }),
    define("libs/json2.min", [], function() {
        return "object" != typeof JSON && (JSON = {}),
            function() {
                "use strict";
                function f(t) {
                    return t < 10 ? "0" + t : t
                }
                function quote(t) {
                    return escapable.lastIndex = 0,
                        escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                            var e = meta[t];
                            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + t + '"'
                }
                function str(t, e) {
                    var i, n, a, o, s, r = gap, c = e[t];
                    switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(t)),
                    "function" == typeof rep && (c = rep.call(e, t, c)),
                        typeof c) {
                        case "string":
                            return quote(c);
                        case "number":
                            return isFinite(c) ? c + "" : "null";
                        case "boolean":
                        case "null":
                            return c + "";
                        case "object":
                            if (!c)
                                return "null";
                            if (gap += indent,
                                    s = [],
                                "[object Array]" === Object.prototype.toString.apply(c)) {
                                for (o = c.length,
                                         i = 0; i < o; i += 1)
                                    s[i] = str(i, c) || "null";
                                return a = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + r + "]" : "[" + s.join(",") + "]",
                                    gap = r,
                                    a
                            }
                            if (rep && "object" == typeof rep)
                                for (o = rep.length,
                                         i = 0; i < o; i += 1)
                                    "string" == typeof rep[i] && ((a = str(n = rep[i], c)) && s.push(quote(n) + (gap ? ": " : ":") + a));
                            else
                                for (n in c)
                                    Object.prototype.hasOwnProperty.call(c, n) && ((a = str(n, c)) && s.push(quote(n) + (gap ? ": " : ":") + a));
                            return a = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + r + "}" : "{" + s.join(",") + "}",
                                gap = r,
                                a
                    }
                }
                var cx, escapable, gap, indent, meta, rep;
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }
                        ,
                        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                            return this.valueOf()
                        }
                ),
                "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        meta = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        },
                        JSON.stringify = function(t, e, i) {
                            var n;
                            if (indent = gap = "",
                                "number" == typeof i)
                                for (n = 0; n < i; n += 1)
                                    indent += " ";
                            else
                                "string" == typeof i && (indent = i);
                            if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                                throw Error("JSON.stringify");
                            return str("", {
                                "": t
                            })
                        }
                ),
                "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        JSON.parse = function(text, reviver) {
                            function walk(t, e) {
                                var i, n, a = t[e];
                                if (a && "object" == typeof a)
                                    for (i in a)
                                        Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (n = walk(a, i)) ? a[i] = n : delete a[i]);
                                return reviver.call(t, e, a)
                            }
                            var j;
                            if (text += "",
                                    cx.lastIndex = 0,
                                cx.test(text) && (text = text.replace(cx, function(t) {
                                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                                })),
                                    /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                                return j = eval("(" + text + ")"),
                                    "function" == typeof reviver ? walk({
                                        "": j
                                    }, "") : j;
                            throw new SyntaxError("JSON.parse")
                        }
                )
            }(),
            JSON
    }),
    define("Controller/Controller", ["util/postClickLog", "libs/json2.min"], function(Log, JSON) {
        var CaseValueFuncs = {
            eq: function(t, e) {
                var i = Controller.records.get(t.name)[t.sourceFuncName]()
                    , n = !1;
                if ("string" == typeof t.checkVal)
                    if (-1 < t.checkVal.indexOf("&&")) {
                        for (var a = t.checkVal.split("&&"), o = 0; o < a.length; o++)
                            if (i == a[o]) {
                                n = !0;
                                break
                            }
                    } else
                        i == t.checkVal && (n = !0);
                else
                    i == t.checkVal && (n = !0);
                return n
            },
            notEq: function(t, e) {
                var i = Controller.records.get(t.name)[t.sourceFuncName]()
                    , n = !1;
                if (-1 < t.checkVal.indexOf("&&")) {
                    for (var a = t.checkVal.split("&&"), o = 0; o < a.length; o++)
                        if (i != a[o]) {
                            n = !0;
                            break
                        }
                } else
                    i != t.checkVal && (n = !0);
                return n
            }
        }
            , Controller = {
            setValue: function(t, e, i) {
                var n = this.records.get(t);
                if (n)
                    if ("[object Array]" === Object.prototype.toString.call(n))
                        for (var a = 0; a < n.length; a++) {
                            var o;
                            1 != (o = n[a]).opts.isFreeze && "function" == typeof o.setValue && o.setValue(e, "", i)
                        }
                    else
                        1 != n.opts.isFreeze && "function" == typeof n.setValue && n.setValue(e, "", i)
            },
            triggerCustomEvent: function(t, e) {
                if (e)
                    for (var i, n, a = 0, o = e.length, s = this.records.get(t), r = function(t) {
                        if (t) {
                            for (var e = !0, i = t.length, n = 0; n < i; n++)
                                if (!CaseValueFuncs[t[n].checkFunc](t[n])) {
                                    e = !1;
                                    break
                                }
                            return e
                        }
                    }; a < o; a++)
                        if (!e[a].caseValue || r(e[a].caseValue)) {
                            var c = (i = e[a]).target;
                            n = this.records.get(c.name);
                            var l = c.dataFrom;
                            l && this.getDataFrom(s, i.funcName, l);
                            var d = c.dataTo;
                            if (d && this.setDataTo(i, s),
                                    n)
                                !d && !l && n && n[i.funcName] ? n[i.funcName](t, s, i.showRow) : n && n.container && 0 < n.container.length && n.container.triggerHandler(i.funcName);
                            else if ("undefined" != typeof c.name && -1 < c.name.indexOf("&&"))
                                for (var p = c.name.split("&&"), h = 0, u = p.length; h < u; h++)
                                    n = this.records.get(p[h]),
                                        !d && !l && n && n[i.funcName] ? n[i.funcName](t, s, i.showRow) : n && 0 < n.container.length && n.container.triggerHandler(i.funcName)
                        }
            },
            setDataTo: function(t, e) {
                var i = t.target
                    , n = i.dataTo
                    , a = t.funcName
                    , o = this.records.get(i.name);
                if (e || o) {
                    if ("string" == typeof n.sourceFuncName)
                        var s = e[n.sourceFuncName]();
                    if (n.caseValue)
                        for (var r = 0; r < n.caseValue.length; r++)
                            if (!CaseValueFuncs[n.caseValue[r].checkFunc](n.caseValue[r], e))
                                return !1;
                    if ("string" == typeof n.apiUrl) {
                        var c = {};
                        c[n.sourceKey] = s,
                            $.ajax({
                                url: n.apiUrl,
                                type: n.apiType,
                                data: c,
                                dataType: n.dataType || "json",
                                success: function(t) {
                                    n.key && (t = t[n.key]),
                                        o[a](t)
                                },
                                error: function() {}
                            })
                    } else
                        "string" == typeof n.toUrl ? o && a && o[a] && o[a](n.toUrl) : "undefined" != typeof n.param ? o && a && o[a] && o[a](n.param) : (s && n.sourceKey && (s = s[n.sourceKey]),
                        o && a && o[a] && o[a](s))
                }
            },
            getDataFrom: function(e, i, n) {
                var t = n.sources
                    , a = []
                    , o = {};
                if (n.caseValue)
                    for (var s = 0; s < n.caseValue.length; s++)
                        if (!CaseValueFuncs[n.caseValue[s].checkFunc](n.caseValue[s], e))
                            return !1;
                for (s = 0; s < t.length; s++) {
                    var r = this.records.get(t[s].name);
                    if (a[s] = "",
                        r && t[s].checkNull) {
                        var c = r[t[s].checkNull]();
                        if (!(c && 0 < c.length)) {
                            a[s] = "";
                            continue
                        }
                    }
                    null != r && ("undefined" != typeof r[t[s].funcName] ? a[s] = r[t[s].funcName]() : "undefined" != typeof r[0] ? a[s] = r[0][t[s].funcName]() : "undefined" != typeof r.elems && (a[s] = r.elems[0].item[t[s].funcName]())),
                    t[s].sourceKey && 0 < t[s].sourceKey.length && a[s] && (a[s] = a[s][t[s].sourceKey],
                    a[s] || (a[s] = "")),
                    t[s].maxLength && 0 < t[s].maxLength && a[s] && 0 < a[s].length && (a[s] = a[s].substring(0, t[s].maxLength)),
                    a[s] && 0 < a[s].length && t[s].template && 0 < t[s].template.length && ("huxingting" == t[s].name ? a[s] = t[s].template.replace("%s%", a[s]).replace(" ", "") : a[s] = t[s].template.replace("%s%", a[s])),
                        o[t[s].key] = a[s]
                }
                for (; 60 <= a.join("").length && 1 < a.length; )
                    -1 < a[a.length - 1].indexOf("<a") ? a.splice(a.length - 2, 1) : a.pop();
                "string" == typeof n.apiUrl ? $.ajax({
                    url: n.apiUrl,
                    data: o,
                    type: n.apiType || "get",
                    dataType: n.dataType || "json",
                    success: function(t) {
                        n.key && (t = t[n.key]),
                            e[i](t)
                    },
                    error: function() {}
                }) : "joinText" == n.type ? (e[i].call(e, a.join(n.joinSpe ? n.joinSpe : "")),
                n.afterFuncName != undefined && "string" == typeof n.afterFuncName && e[n.afterFuncName].call(e)) : e[i].apply(e, a)
            },
            triggerEvent: function(t) {
                this.triggerCustomEvent(t.sourceName, t.data)
            },
            triggerCheck: function(t) {
                if (t)
                    for (var e, i, n = 0, a = t.length; n < a; n++)
                        e = t[n],
                        (i = this.records.get(e.target.name)) && i[e.funcName] && i[e.funcName]()
            },
            isFormValidate: function() {
                for (var t = !(this.bFocus = !1), e = {
                    from: "PostFail"
                }, i = 0; i < this.records.list.length; i++) {
                    var n = this.records.list[i];
                    if (!("submit" === n.type || n.opts && !0 === n.opts.isFreeze && ("undefined" == typeof n.shouldCheck || 1 != n.shouldCheck) || n.opts && n.opts.hideNoCheck && n.rows.containerElem.is(":hidden")) && ("undefined" == typeof n.opts || !n.opts.hideTipIcon)) {
                        var a = {
                            bValid: !0,
                            msg: ""
                        };
                        "function" == typeof n.doCheck && (a = n.doCheck()),
                        "function" == typeof n.doWukongCheck && n.doWukongCheck(),
                        a.bValid || (e[n.opts.name] = encodeURIComponent(a.msg),
                        !1 === this.bFocus && (this.bFocus = !0,
                            n.scrollTo()),
                            t = a.bValid)
                    }
                }
                return !1 === t && Log.sendJson($.param(e)),
                    t
            },
            setFormData: function(t, e) {
                for (var i in t)
                    if ("xiaoqu" === i && t.xiaoquname) {
                        var n = this.records.get("xiaoqu");
                        n.setText(t.xiaoquname),
                            "baiduAPI" == t.xiaoqutype ? n.values = {
                                type: "baiduAPI",
                                s: t.dizhi,
                                lat: t.latitude,
                                lon: t.longitude,
                                k: t.xiaoquname,
                                input: t.xiaoquname
                            } : n.values = {
                                type: "panshiAPI",
                                r: t.localArea,
                                m: t.localDiduan,
                                id: t.xiaoqu,
                                k: t.xiaoquname,
                                s: t.dizhi,
                                input: t.xiaoquname
                            }
                    } else {
                        if ("dizhi" === i && t.dizhi && ____json4fe && ____json4fe.hasOwnProperty("catentry") && 2 <= ____json4fe.catentry.length) {
                            var a = Number(____json4fe.catentry[1].dispid);
                            if (15 === a || 14 === a) {
                                var o = this.records.get("dizhi")
                                    , s = {
                                    latitude: t.latitude || "",
                                    longitude: t.longitude || "",
                                    dizhi: t.dizhi
                                };
                                if (o.setValue(s, "frommap"),
                                    t.latitude && t.longitude) {
                                    (r = this.records.get("map")) ? (window.mapRenderSign = !1,
                                        r.init(s, o.container)) : window.mapRenderSign = !0;
                                    continue
                                }
                            }
                            if (13 === a) {
                                o = this.records.get("dizhi"),
                                    s = {
                                        latitude: t.latitude || "",
                                        longitude: t.longitude || "",
                                        dizhi: t.dizhi
                                    };
                                if (o.setValue(s, "frommap"),
                                    t.latitude && t.longitude) {
                                    var r;
                                    (r = this.records.get("map")) ? (window.mapRenderSign = !1,
                                        r.init(s, o.container)) : window.mapRenderSign = !0;
                                    continue
                                }
                            }
                        }
                        this.setValue(i, t[i], e)
                    }
            },
            getFormData: function() {
                for (var data = {}, i = 0; i < this.records.list.length; i++) {
                    var obj = this.records.list[i];
                    if (obj.opts && !obj.opts.isFreeze && "rearLogin" != obj.opts.type && "map" != obj.opts.type) {
                        var objVal = obj.getValue();
                        "object" == typeof objVal ? $.extend(data, objVal) : data[obj.dataName] = objVal
                    }
                }
                if ("310" == ____json4fe.catentry[1].dispid) {
                    var joinData = function(t, e) {
                        var i, n = Controller.records.get(t), a = Controller.records.get(e);
                        if (n)
                            i = a ? n.getValue() + "|" + a.getValue() : n.getValue();
                        else {
                            if (!a)
                                return;
                            i = a.getValue()
                        }
                        return i
                    };
                    data.hunchepinpai = joinData("touchepinpai", "genchepinpai"),
                        data.hunchechexi = joinData("touchechexi", "genchechexi"),
                        data.huncheyanse = joinData("toucheyanse", "gencheyanse")
                }
                if ("undefined" != typeof userid ? (data.userid = userid,
                        data.postparam_userid = userid) : data.userid = datasrc.userid,
                        data.hidPostParam = 0,
                        this.records.get("community_name")) {
                    var instance = this.records.get("community_name");
                    if ("undefiend" != typeof instance.opts.aliasName && "ershoufang_xinjianxiaoqu" == instance.opts.aliasName)
                        return data
                }
                data.captcha_type = $("#captcha_type_iqas").val() || "",
                    data.captcha_input = $("#captcha_input").val() || "",
                "undefined" != typeof iqas_mcvalue && "undefined" != typeof iqas_mcformula && (data.iqas_mcresult = eval(iqas_mcformula.replace("checkValue", iqas_mcvalue)));
                var yzminstance = Controller.records.get("yzm");
                yzminstance && !yzminstance.rows.containerElem.is(":hidden") && yzminstance.captchaConfigs && yzminstance.captchaConfigs.post_captcha_biz && (data.post_captcha_biz = yzminstance.captchaConfigs.post_captcha_biz,
                    data.captcha_type = yzminstance.captchaConfigs.type,
                    data.captcha_input = yzminstance.getValue(),
                    data.captcha_responseid = Controller.limit.responseid,
                    data.captcha_encryptedKey = 400 == yzminstance.captchaConfigs.type ? yzminstance.captchaConfigs.msg_encryptedKey : yzminstance.captchaConfigs.voice_encryptedKey);
                var bizComp = Controller.records.get("isBiz");
                if (void 0 !== bizComp) {
                    var bizVal = bizComp.getValue(), initBizVal;
                    "undefined" != typeof bizDefault ? initBizVal = bizDefault : "undefined" != typeof infoDetail && (initBizVal = infoDetail.isBiz),
                        data.selectBiz = 1 == bizVal && initBizVal != bizVal ? 1 : 0
                }
                return data.GTID = "function" == typeof getGTID ? getGTID() : "",
                    data
            },
            getFormText: function() {
                for (var t = {}, e = 0; e < this.records.list.length; e++) {
                    var i = this.records.list[e];
                    if (i.opts && "rearLogin" != i.opts.type) {
                        var n = i.getValue();
                        "object" == typeof n ? $.extend(t, n) : t[i.opts.name] = n
                    }
                    !i.opts || "selector" !== i.opts.type && "checkbox" !== i.opts.type && "radio" !== i.opts.type || (t[i.opts.name] = i.getText())
                }
                return t
            },
            showCheckTips: function(t) {
                Controller.callRecordFunc(t.name, "showCheckTip", t)
            },
            bUseServerCheck: function() {
                return 1 == this.getUrlParam("server_check")
            },
            getUrlParam: function(t) {
                var e, i, n = location.href, a = {};
                for (e = 0; i = n.substring(n.indexOf("?") + 1, n.length).split("&")[e]; e++)
                    a[i.substring(0, i.indexOf("=")).toLowerCase()] = i.substring(i.indexOf("=") + 1, i.length);
                var o = a[t.toLowerCase()];
                return void 0 === o ? "" : o
            },
            setSubmit: function(t) {
                this.submit = t
            },
            callRecordFunc: function(t, e, i) {
                var n = this.records.get(t);
                if ("[object Array]" === Object.prototype.toString.call(n))
                    for (var a = 0; a < n.length; a++) {
                        var o = n[a];
                        o && "function" == typeof o[e] && o[e](i)
                    }
                else
                    n && "function" == typeof n[e] && n[e](i)
            },
            records: {
                data: {},
                list: [],
                get: function(t) {
                    return this.data[t]
                },
                set: function(t, e) {
                    (this.data[t] = e).opts && e.dataName === e.opts.dataName && (this.data[e.dataName] || (this.data[e.dataName] = []),
                        this.data[e.dataName].push(e)),
                        this.list.push(e)
                },
                remove: function(t) {
                    this.data[t] = null;
                    for (var e = this.list.length - 1; 0 < e; e--)
                        this.list[e].opts && this.list[e].opts.name === t && this.list.splice(e, 1)
                }
            },
            getValByName: function(t) {
                var e = Controller.records.data[t];
                if (e && e.getValue)
                    return e.getValue();
                throw new Error("对象 " + t + "不存在，或者没有getValue方法")
            },
            triggerSubmit: function() {
                this.submit.send()
            },
            canSubmit: function() {
                var e = this
                    , t = this.records.get("rearLogin")
                    , i = !1;
                return !1 === (i = t ? t.isLogin() : "undefined" != typeof userid && "0" != userid) && void 0 !== t && (t.show(),
                    t.doLogin()),
                    this.captcha && !e.bCaptchaValid ? (this.captcha.check(function(t) {
                        e.bCaptchaValid = t,
                        i && t && e.triggerSubmit()
                    }),
                        !1) : i
            },
            anylizeObserve: function(n, a) {
                Controller.records.get(n);
                for (var t = a.targets, o = {}, s = [], e = 0; e < t.length; e++)
                    !function(e, i) {
                        var t = e.name + "." + e.action;
                        s[i] = {
                            name: e.name,
                            value: null
                        },
                            Controller.observor.subscribe(t, function(t) {
                                t && (s[i].value = t,
                                    o[e.name] = t),
                                    Controller.observor.publish(n + "." + a.action, s)
                            })
                    }(t[e], e)
            },
            observor: {
                map: {},
                subscribe: function(t, e) {
                    this.map[t] || (this.map[t] = [],
                        this.map[t].push(e))
                },
                publish: function(t, e) {
                    if (this.map[t])
                        for (var i = this.map[t], n = 0; n < i.length; n++) {
                            (0,
                                i[n])(e)
                        }
                }
            },
            showCaptcha: function(t) {
                var e = require("component/captcha/js/captcha");
                if (!this.captcha) {
                    this.captcha = e;
                    var n = new (require("component/rows/js/rows"))({
                        title: "验证码"
                    });
                    this.submit.rows.containerElem.before(n.containerElem)
                }
                this.captcha.init(t, {
                    appendToDOM: function(t, e, i) {
                        t.appendTo(n.contentElem)
                    },
                    phoneId: "Phone"
                })
            },
            handlers: {
                records: {},
                trigger: function(t, e) {
                    var i = Controller.records[t];
                    if (i)
                        for (var n in i)
                            if (i.hasOwnProperty(n)) {
                                var a = i[n];
                                if (a && 0 < a.length) {
                                    a.length;
                                    for (var o = 0; o < a.length; o++)
                                        "function" == typeof a[o] && a[o](e)
                                }
                            }
                },
                bind: function(t, e, i) {
                    var n = Controller.records[t];
                    n || (Controller.records[t] = {},
                        n = Controller.records[t]),
                    e && (n[e] || (n[e] = []),
                        n[e].push(i))
                },
                unbind: function(t, e) {
                    if (!("string" != typeof t || t.length < 1)) {
                        var i = Controller.records[t];
                        if (i)
                            if (e && "string" == typeof e) {
                                var n = i[e] || [];
                                !n || n.length < 1 || (n = [])
                            } else
                                i = {}
                    }
                }
            }
        };
        return Controller
    }),
    define("component/rows/js/rows", ["Controller/Controller"], function(i) {
        function t(t) {
            this.opts = $.extend(!0, {}, this.constructor.opts, t),
                this.validMap = {},
                this.createElem()
        }
        return t.opts = {
            type: "rows",
            title: "",
            className: "",
            defaultClassName: {
                wrap: "rows_wrap",
                title: "rows_title",
                content: "rows_content"
            }
        },
            t.prototype = {
                constructor: t,
                type: "rows",
                title: "基础信息",
                className: "rows_wrap",
                init: function() {
                    this.createElem()
                },
                createElem: function() {
                    this.createElemByDefault(),
                        this.setExtraAttr()
                },
                createElemByDefault: function() {
                    var t = this.opts
                        , e = $("<div>").addClass(t.defaultClassName.title).append("<span>" + t.title + "</span>");
                    this.contentElem = $("<div>"),
                        this.contentElem.append('<div class="tip"></div>'),
                        this.containerElem = $("<div>").attr("class", t.defaultClassName.wrap).addClass("clearfix"),
                        this.containerElem.append(this.contentElem),
                        1 !== this.opts.columNum ? (this.containerElem.append(e),
                            this.contentElem.addClass(t.defaultClassName.content)) : this.contentElem.addClass(t.defaultClassName.content + this.opts.columNum),
                    "hide" === this.opts.displayStatus && this.hide()
                },
                addStar: function() {
                    if ("undefined" == typeof this.bAddStar) {
                        this.bAddStar = !0;
                        var t = this.containerElem.find("." + this.opts.defaultClassName.title + " span")
                            , e = t.html();
                        t.html('<span class="rows_title_star">*</span>' + e)
                    }
                },
                hide: function() {
                    this.containerElem.hide();
                    var t = this.containerElem.parents(".block_content")
                        , e = !0;
                    t.children().each(function() {
                        $(this).is(":hidden") || (e = !1)
                    }),
                    1 == e && t.parents(".block_wrap").hide(),
                        this.hideBlock()
                },
                hideBlock: function() {
                    var t = this.containerElem.parents(".block_content")
                        , e = !0;
                    t.children().each(function() {
                        $(this).is(":hidden") || (e = !1)
                    }),
                    1 == e && t.parents(".block_wrap").hide()
                },
                hideValidateSuccessTip: function() {
                    for (var t in this.validMap) {
                        var e = i.records.get(t);
                        if (e && e.container && 1 == e.container.is(":hidden")) {
                            this.containerElem.find(".validate_success").hide();
                            break
                        }
                    }
                },
                show: function() {
                    if (this.containerElem.show(),
                        0 < this.containerElem.find(".optiondef").length) {
                        this.containerElem.find(".optiondef").hide();
                        var t = this.containerElem.find(".focus");
                        if (t.length)
                            for (var e = 0; e < t.length; e++)
                                $(t[e]).hasClass("selectordef") && $(t[e]).removeClass("focus")
                    }
                    this.containerElem.find(".validate_success").css({
                        left: this.getChildWidth()
                    }),
                        this.containerElem.parents(".block_wrap").show()
                },
                setExtraAttr: function() {
                    var t = this.opts;
                    "string" == typeof t.className && 0 < t.className.length && this.containerElem.addClass(t.className)
                },
                render: function(t, e) {
                    e ? e.after(this.containerElem) : this.containerElem.appendTo(t)
                },
                setValidateStatus: function(t, e) {
                    this.validMap[t] = e
                },
                getValidateStatus: function() {
                    for (var t in this.validMap)
                        if (!1 === this.validMap[t])
                            return !1;
                    return !0
                },
                getTriggerArray: function() {
                    var t = [];
                    for (var e in this.validMap)
                        t.push({
                            funcName: "doCheck",
                            target: {
                                name: e
                            }
                        });
                    return t
                },
                getChildWidth: function() {
                    var t, e = this.containerElem.find("." + this.opts.defaultClassName.content + ">div:last-child");
                    return this.opts.children && this.opts.children[0].needAddCate && (e = $(this.containerElem.find("." + this.opts.defaultClassName.content + " div")[1])),
                    (e.offset() || e.outerWidth()) && (t = "none" === e.css("display") ? e.prev().offset().left + e.prev().outerWidth() - this.contentElem.offset().left : e.offset().left + e.outerWidth() - this.contentElem.offset().left),
                        t
                },
                doCheck: function() {
                    i.triggerCheck(this.getTriggerArray())
                },
                changeTitle: function(t) {
                    if ("string" == typeof t) {
                        var e = this.containerElem.find("." + this.opts.defaultClassName.title + " span");
                        this.bAddStar ? e.html('<span class="rows_title_star">*</span>' + t) : e.html(t)
                    }
                }
            },
            t
    }),
    define("component/validate/js/validate", ["Controller/Controller", "util/postClickLog"], function(h, c) {
        var t = {
            check: function(t, e, i, n) {
                t = t || [];
                for (var a = i.containerElem.find(".tip"), o = 0; o < t.length; o++) {
                    if ("orNotCannull" == (r = t[o]).type)
                        return s = u.orNotCannull(r.value, e, r.msg, t)
                }
                for (o = 0; o < t.length; o++) {
                    var s, r = t[o];
                    if (!1 === (s = u[r.type](r.value, e, r.msg, a)).bValid)
                        return c.sendRealTimeError(n, r.msg),
                            s
                }
                return {
                    bValid: !0,
                    msg: ""
                }
            },
            showTip: function(t, e, i, n) {
                i || (i = "error"),
                    t.html("<i></i>" + e).show().attr("class", "tip validate_" + i),
                    "success" === i ? t.css({
                        left: n + 12
                    }) : t.css({
                        left: 0
                    })
            },
            hideTip: function(t) {
                t.html("").hide().attr("class", "tip")
            },
            showLoading: function(t, e, i, n) {
                return t.html("<i></i>" + e).show().attr("class", "tip validate_" + i),
                    "success" === i ? t.css({
                        left: n + 12
                    }) : t.css({
                        left: 0
                    }),
                    t
            },
            hideLoading: function() {
                tipElem.html("").hide().attr("class", "tip")
            }
        }
            , u = {
            maxLength: function(t, e, i, n) {
                var a = !0;
                return e.length > t && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            minLength: function(t, e, i, n) {
                var a = !0;
                return e.length < t && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            reg: function(t, e, i, n) {
                var a = i;
                return regexp = new RegExp(t),
                    regexp.test(e) ? {
                        bValid: !0
                    } : {
                        bValid: !1,
                        msg: a
                    }
            },
            regf: function(t, e, i, n) {
                var a = i;
                return regexp = new RegExp(t),
                    regexp.test(e) ? {
                        bValid: !1,
                        msg: a
                    } : {
                        bValid: !0
                    }
            },
            lessThan: function(t, e, i, n) {
                var a = !0;
                return parseInt(e) < t && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            lessThanDecimals: function(t, e, i, n) {
                var a = !0;
                return parseFloat(e) < t && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            moreThan: function(t, e, i, n) {
                var a = !0;
                return parseInt(e, 10) > t && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            moreThanDecimals: function(t, e, i, n) {
                var a = !0;
                return parseFloat(e, 10) > t && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            step: function(t, e, i, n) {
                var a = !0
                    , o = e / t;
                return o.toFixed(0) / 1 !== o && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            maxValue: function(t, e, i, n) {
                var a = !0
                    , o = h.records.get(t);
                if (o && o.opts && 1 == o.opts.isFreeze)
                    return {
                        bValid: a,
                        msg: i
                    };
                var s = o.getValue();
                return void 0 !== s && parseInt(e, 10) > parseInt(s, 10) && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            minValue: function(t, e, i, n) {
                var a = !0
                    , o = h.records.get(t);
                if (o && o.opts && 1 == o.opts.isFreeze)
                    return {
                        bValid: a,
                        msg: i
                    };
                var s = o.getValue();
                return void 0 !== s && parseInt(e, 10) < parseInt(s, 10) && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            maxValueDecimals: function(t, e, i, n) {
                var a = !0
                    , o = h.records.get(t).getValue();
                return void 0 !== o && parseFloat(e, 10) > parseFloat(o, 10) && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            maxValueDecimalsEq: function(t, e, i, n) {
                var a = !0
                    , o = h.records.get(t).getValue();
                return void 0 !== o && parseFloat(e, 10) >= parseFloat(o, 10) && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            minValueDecimals: function(t, e, i, n) {
                var a = !0
                    , o = h.records.get(t).getValue();
                return void 0 !== o && parseFloat(e, 10) < parseFloat(o, 10) && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            minValueDecimalsEq: function(t, e, i, n) {
                var a = !0
                    , o = h.records.get(t).getValue();
                return void 0 !== o && parseFloat(e, 10) <= parseFloat(o, 10) && (a = !1),
                    {
                        bValid: a,
                        msg: i
                    }
            },
            notIn: function(t, e, i, n) {
                for (var a = !0, o = 0; o < t.length; o++)
                    if (parseIntvalue == t[o]) {
                        a = !1;
                        break
                    }
                return {
                    bValid: a,
                    msg: i
                }
            },
            "in": function(t, e, i, n) {
                for (var a = !1, o = 0; o < t.length; o++)
                    if (e == t[o]) {
                        a = !0;
                        break
                    }
                return {
                    bValid: a,
                    msg: i
                }
            },
            hasContact: function(t, e, i, n) {
                var a = /([0-9０１２３４５６７８９零一二三四五六七八九壹贰叁肆伍陆柒捌玖]{7})/
                    , o = new RegExp(a)
                    , s = o.test(e);
                return s || (a = /(([qｑQＱ]+)(.?|.{1,5})(([0-9]|[０-９]|[零一二三四五六七八九]|[①-⑨]|[㈠-㈨])[-_@\~\#\$\%\^\&\*]*){5,13})|((([0-9]|[０-９]|[零一二三四五六七八九]|[①-⑨]|[㈠-㈨])[-_@\~\#\$\%\^\&\*]*){5,13}(.?|.{1,5})([qｑQＱ]+))/,
                    s = (o = new RegExp(a)).test(e)),
                    {
                        bValid: !s,
                        msg: i
                    }
            },
            orNotCannull: function(t, e, i, n) {
                var a = !0
                    , o = new RegExp("^[\\s]*$")
                    , s = h.records.get(t).getValue()
                    , r = o.test(e)
                    , c = o.test(s);
                if (r && c)
                    a = !1;
                else if (!r)
                    for (var l = 0; l < n.length; l++) {
                        var d = n[l];
                        if ("orNotCannull" != d.type) {
                            var p = u[d.type](d.value, e, d.msg);
                            if (!1 === p.bValid)
                                return p
                        }
                    }
                return a && (i = ""),
                    {
                        bValid: a,
                        msg: i
                    }
            }
        };
        return t
    }),
    define("component/base/js/base", ["Controller/Controller", "component/validate/js/validate"], function(a, n) {
        function o(t, e) {
            this.init(t, e)
        }
        return o.EVENT = {
            KEY_CODE: {
                BackSpace: 8,
                TAB: 9,
                Space: 32,
                LeftArrow: 37,
                UpArrow: 38,
                RightArrow: 39,
                DwArrow: 40,
                Enter: 13,
                Zero: 48,
                Nine: 57,
                ZeroNumKeyboard: 96,
                NineNumKeyboard: 105,
                Delete: 46,
                F5: 116
            },
            TYPE: {
                INPUT: "oninput"in document ? "input" : "propertychange"
            }
        },
            o.opts = {
                type: "",
                name: "",
                view: {
                    placeholder: "",
                    afterText: "",
                    beforeText: "",
                    width: ""
                },
                attr: {},
                checkRuler: [],
                funcs: []
            },
            o.SETTING = {
                CLASS: {},
                STATUS: {
                    HOVER: "hover",
                    FOCUS: "focus",
                    WARN: "warning",
                    SUCCESS: "success",
                    ERROR: "error"
                }
            },
            o.prototype = {
                constructor: o,
                init: function(t, e) {
                    if (this.opts = $.extend(!0, {}, this.constructor.opts, t),
                            this.data = e,
                            this.items = [],
                            this.value = "",
                            this.createElem(),
                            this.initHandler(),
                            this.dataName = this.opts.dataName || this.opts.name,
                        "string" != typeof this.dataName)
                        throw new Error("init " + this.opts.name + " error: dataName must be string")
                },
                createElem: function() {},
                setElemView: function() {},
                initHandler: function() {
                    this.bindCustomEvent(),
                        this.bindDomEvent()
                },
                bindDomEvent: function() {},
                bindCustomEvent: function() {
                    for (var t, e = this, i = e.opts.funcs, n = i.length, a = 0; a < n; a++)
                        t = i[a],
                            e.container.bind(t.evt, t.handlers, function(t) {
                                e.customEvent(t)
                            })
                },
                customEvent: function(t) {
                    t.sourceName = this.opts.name,
                        a.triggerEvent(t)
                },
                render: function(t) {
                    !1 === this.opts.canNull && this.rows.addStar(),
                    this.container && 0 < this.container.length && this.container.appendTo(t)
                },
                focusTo: function() {},
                autoFill: function() {},
                setValue: function(t) {},
                getValue: function() {},
                doCheck: function() {
                    if (a.bUseServerCheck())
                        return {
                            bValid: !0,
                            msg: ""
                        };
                    var t = !1
                        , e = this.getCheckValue ? this.getCheckValue() : this.getValue();
                    return e = void 0 === e ? "" : e,
                        this.opts.canNull && !e && "timeTravel" != this.opts.type ? {
                            bValid: !0,
                            msg: ""
                        } : this.opts.defaultValue && this.opts.defaultValue === e || "undefined" != typeof this.opts.defaultValue && this.opts.defaultValue.replace(/(^\s+)|(\s+$)/g, "") && "" === e ? (this.showCheckTip({
                            bValid: !0,
                            msg: ""
                        }),
                            {
                                bValid: !0,
                                msg: ""
                            }) : (t = n.check(this.opts.checkRuler, e, this.rows),
                            this.showCheckTip(t),
                            t)
                },
                scrollTo: function() {
                    this.rows && window.scrollTo(0, this.rows.containerElem.offset().top - 20)
                },
                getCheckValue: null,
                showCheckTip: function(t) {
                    var e = t.bValid ? o.SETTING.STATUS.SUCCESS : o.SETTING.STATUS.ERROR;
                    this.setClassByStatus(e),
                        this.rows.setValidateStatus(this.opts.name, t.bValid);
                    var i = this.rows.getChildWidth();
                    "radio" === this.opts.type && !0 === t.bValid || (!0 === this.rows.getValidateStatus() ? (n.showTip(this.rows.containerElem.find(".tip"), t.msg, e, i),
                        this.rows.hideValidateSuccessTip()) : !t.bValid && n.showTip(this.rows.containerElem.find(".tip"), t.msg, e, i))
                },
                showTips: function(t) {
                    n.showTip(this.rows.containerElem.find(".tip"), t, o.SETTING.STATUS.WARN)
                },
                hideTips: function() {
                    n.hideTip(this.rows.containerElem.find(".tip"))
                },
                setClassByStatus: function(t) {
                    this.container && 0 < this.container.length && this.container.removeClass(["hover", "focus", "active", "success", "error"].join(" ")).addClass(t)
                },
                subscribe: function(t, e) {
                    a.observor.subscribe(t, e)
                },
                publish: function(t, e) {
                    a.observor.publish(t, e)
                },
                showRows: function() {
                    this.rows && this.rows.show()
                },
                hideRows: function() {
                    this.rows && this.rows.hide()
                },
                activate: function(t, e, i) {
                    if (this.opts.isFreeze = !1,
                        -1 < this.opts.type.indexOf("Volatile") && (a.records.get(this.opts.name).opts.isFreeze = !1),
                            i) {
                        if (this.container)
                            $(this.container).show();
                        else if (this.items && this.items.length)
                            for (var n = 0; n < this.items.length; n++)
                                $(this.items[n]).show()
                    } else
                        this.showRows()
                },
                freeze: function(t, e, i) {
                    if (this.opts.isFreeze = !0,
                        -1 < this.opts.type.indexOf("Volatile") && (a.records.get(this.opts.name).opts.isFreeze = !0),
                            i) {
                        if (this.container)
                            $(this.container).hide();
                        else if (this.items && this.items.length)
                            for (var n = 0; n < this.items.length; n++)
                                $(this.items[n]).hide()
                    } else
                        this.hideRows()
                },
                freezeComponent: function() {
                    this.opts.isFreeze = !0,
                        this.opts.canNull = !0,
                    this.container && this.container.hide(),
                    "zhongzhilouceng" == this.dataName && this.setValue("")
                },
                freezeComponentNotHideRow: function() {
                    if (this.opts.isFreeze = !0,
                        -1 < this.opts.type.indexOf("Volatile") && (a.records.get(this.opts.name).opts.isFreeze = !0),
                            this.container)
                        $(this.container).hide();
                    else if (this.items && this.items.length)
                        for (var t = 0; t < this.items.length; t++)
                            $(this.items[t]).hide()
                },
                activateComponent: function() {
                    this.opts.isFreeze = !1,
                        this.opts.canNull = !1,
                    this.container && this.container.show()
                },
                freezeNotHide: function() {
                    this.opts.isFreeze = !0,
                    -1 < this.opts.type.indexOf("Volatile") && (a.records.get(this.opts.name).opts.isFreeze = !0)
                }
            },
            o
    }),
    define("util/Class", [], function() {
        function n(t) {
            if (!(this instanceof n) && l(t))
                return o(t)
        }
        function a(t) {
            var e, i;
            for (e in t)
                i = t[e],
                    n.Mutators.hasOwnProperty(e) ? n.Mutators[e].call(this, i) : this.prototype[e] = i
        }
        function o(t) {
            return t.extend = n.extend,
                t.implement = a,
                t
        }
        function e() {}
        n.create = function(t, e) {
            function i() {
                t.apply(this, arguments),
                this.constructor === i && this.initialize && this.initialize.apply(this, arguments)
            }
            return l(t) || (e = t,
                t = null),
            e || (e = {}),
            t || (t = e.Extends || n),
            (e.Extends = t) !== n && r(i, t, t.StaticsWhiteList),
                a.call(i, e),
                o(i)
        }
            ,
            n.extend = function(t) {
                return t || (t = {}),
                    t.Extends = this,
                    n.create(t)
            }
            ,
            n.Mutators = {
                Extends: function(t) {
                    var e = this.prototype
                        , i = s(t.prototype);
                    r(i, e),
                        (i.constructor = this).prototype = i,
                        this.superclass = t.prototype
                },
                Implements: function(t) {
                    c(t) || (t = [t]);
                    for (var e, i = this.prototype; e = t.shift(); )
                        r(i, e.prototype || e)
                },
                Statics: function(t) {
                    r(this, t)
                }
            };
        var s = Object.__proto__ ? function(t) {
                return {
                    __proto__: t
                }
            }
            : function(t) {
                return e.prototype = t,
                    new e
            }
        ;
        function r(t, e, i) {
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    if (i && -1 === d(i, n))
                        continue;
                    "prototype" !== n && (t[n] = e[n])
                }
        }
        var i = Object.prototype.toString
            , c = Array.isArray || function(t) {
                return "[object Array]" === i.call(t)
            }
            , l = function(t) {
                return "[object Function]" === i.call(t)
            }
            , d = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            }
            : function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }
        ;
        return n
    }),
    define("util/cookie", [], function() {
        return {
            get: function(t, e) {
                for (var i = t + "=", n = i.length, a = document.cookie.length, o = 0, s = 0; o < a; ) {
                    if (s = o + n,
                        document.cookie.substring(o, s) == i)
                        return this.getCookieVal(s, e);
                    if (0 == (o = document.cookie.indexOf(" ", o) + 1))
                        break
                }
                return null
            },
            set: function(t, e, i, n, a, o) {
                var s = arguments
                    , r = arguments.length
                    , c = new Date;
                i = 2 < r ? s[2] : new Date(c.getFullYear(),c.getMonth() + 1,c.getUTCDate()),
                    n = 3 < r ? s[3] : "/",
                    a = 4 < r ? s[4] : ".58.com",
                    o = 5 < r && s[5];
                document.cookie = t + "=" + escape(e) + (null == i ? "" : "; expires=" + i.toGMTString()) + (null == n ? "" : "; path=" + n) + (null == a ? "" : "; domain=" + a) + (1 == o ? "; secure" : "")
            },
            remove: function(t) {
                this.get(t) && this.set(t, "", new Date(1970,1,1))
            },
            getCookieVal: function(t, e) {
                var i = document.cookie.indexOf(";", t);
                return -1 == i && (i = document.cookie.length),
                    0 == e ? document.cookie.substring(t, i) : unescape(document.cookie.substring(t, i))
            }
        }
    }),
    define("component/popTip/js/popTip", ["component/base/js/base", "util/Class"], function(t, e) {
        var i = e.extend(t);
        return i.prototype.CLASS = {
            WRAP: "poptip_wrap",
            TITLE: "poptip_title",
            CONTENT: "poptip_content",
            MULTI: "clearfix"
        },
            i.prototype.type = "poptip",
            i.prototype.createElem = function() {
                this.opts;
                this.container = $("<div>").addClass(this.CLASS.WRAP),
                    this.setElemView()
            }
            ,
            i.prototype.show = function(t) {
                this.container.html(t).show()
            }
            ,
            i.prototype.hide = function() {
                this.container.html("").hide()
            }
            ,
            i.prototype.bindDomEvent = function() {}
            ,
            i.prototype.getValue = function() {
                return this.elem.val()
            }
            ,
            i
    }),
    define("component/inputText/js/inputText", ["component/base/js/base", "util/Class", "util/cookie", "component/popTip/js/popTip", "Controller/Controller", "util/postClickLog"], function(t, e, a, o, r, c) {
        var l = e.extend(t);
        return l.prototype.CLASS = {
            WRAP: "input_text_wrap",
            TITLE: "input_text_title",
            CONTENT: "input_text_content",
            MULTI: "clearfix"
        },
            l.prototype.type = "inputText",
            l.prototype.createElem = function() {
                var e = this
                    , t = this.opts;
                for (var i in this.container = $("<div>"),
                    this.container.addClass(this.CLASS.WRAP),
                    this.container.attr("name", t.name),
                    this.container.css("position", "relative"),
                    this.elem = $("<input>"),
                    this.elem.attr("type", t.type),
                    this.elem.attr("tabindex", t.tabIndex),
                    this.elem.attr("id", t.name),
                t.needAddCate && (this.elemBtn = $('<span class="add-cate esf-icons" id="addCate"></span>'),
                    this.aliasList = $('<ul class="aliasname-list"></ul>')),
                    t.attr)
                    t.attr.hasOwnProperty(i) && this.elem.attr(i, t.attr[i]);
                this.setElemView();
                var n = t.defaultValue;
                n && (e.elem.val(n),
                    e.elem.bind("focus", function(t) {
                        e.elem.val() === n && e.elem.val("")
                    }),
                    e.elem.bind("blur", function(t) {
                        "" === e.elem.val().replace(/^\s+|\s+$/gi, "") && e.elem.val(n)
                    }))
            }
            ,
            l.prototype.focusTo = function() {
                this.elem.focus()
            }
            ,
            l.prototype.setElemView = function() {
                var t = this.opts;
                t.view.width && this.elem.css("width", t.view.width),
                t.view.placeholder && ("placeholder"in document.createElement("input") || this.fixPlaceHolder(t.view.placeholder, t.name),
                    this.elem.attr("placeholder", t.view.placeholder)),
                    this.container.append(this.elem),
                t.needAddCate && (this.container.append(this.elemBtn),
                    this.container.after(this.aliasList),
                    this.opts.aliasLength = 0),
                (t.view.afterText || t.view.beforeText) && (this.container.append($(t.view.afterText)),
                    this.container.prepend($(t.view.beforeText)),
                    this.container.addClass(this.CLASS.MULTI))
            }
            ,
            l.prototype.fixPlaceHolder = function(t, e) {
                var i = this.elem
                    , n = $("<label>");
                n.html(t),
                    n.attr("for", e),
                    this.container.prepend(n),
                    n.css({
                        color: "#a9a9a9",
                        "line-height": "34px",
                        cursor: "text",
                        position: "absolute",
                        left: "8px"
                    }),
                "" !== i.val() && n.hide(),
                    i.on("focus", function() {
                        n.hide()
                    }),
                    i.get(0).attachEvent("onpropertychange", function() {
                        "value" === window.event.propertyName && "" !== window.event.srcElement.value && n.hide()
                    }),
                    i.on("blur", function() {
                        "" === i.val().replace(/^\s+$/gi, "") && n.show()
                    })
            }
            ,
            l.prototype.bindDomEvent = function() {
                var o = this
                    , i = this.opts;
                o.elem.bind("blur", function(t) {
                    o.setClassByStatus();
                    t.relatedTarget;
                    o.elem.val($.trim(o.elem.val()));
                    var e = o.doCheck();
                    o.container.triggerHandler("blur"),
                    i.needAddCate || (o.publish(o.opts.name + ".valueChange", o.getValue()),
                        o.container.trigger("change", [o.getValue()])),
                    !0 === e.bValid && !0 !== o.rows.getValidateStatus() && o.hideTips(),
                    "undefined" != typeof o.opts.suggestSetting && "undefined" != typeof o.opts.suggestSetting.getHouseUserTypeFun && o.opts.suggestSetting.getHouseUserTypeFun(r, e.bValid);
                    try {
                        8 == ____json4fe.catentry[1].dispid && "jushishuru" == o.opts.name && function(t) {
                            if (t)
                                for (var e = 0; e < t.length; e++) {
                                    if (12288 == t.charCodeAt(e))
                                        return !0;
                                    if (65280 < t.charCodeAt(e) && t.charCodeAt(e) < 65375)
                                        return !0
                                }
                            return !1
                        }(o.elem.val()) && c.send("pc_post_quanjiao")
                    } catch (t) {}
                }),
                    o.elem.bind("focus", function() {
                        o.opts.view.tips && o.showTips(o.opts.view.tips),
                            o.setClassByStatus(l.SETTING.STATUS.FOCUS),
                            o.elem.triggerHandler("focusin");
                        var t = o.opts;
                        t && t.view && t.view.notAllowInput && o.elem.trigger("blur"),
                        o.opts.suggestSetting && o.opts.suggestSetting.setCookie && o.opts.suggestSetting.setCookie(o.opts.suggestSetting, a)
                    });
                for (var t = o.opts.funcs, s = !1, e = 0, n = t.length; e < n; e++)
                    if ("immediatelyCheckOk" == t[e].evt || "immediatelyCheckError" == t[e].evt) {
                        s = !0;
                        break
                    }
                o.elem.bind(l.EVENT.TYPE.INPUT, function(t) {
                    if (t.KeyCode === l.EVENT.KEY_CODE.TAB && o.elem.triggerHandler("inputover"),
                            s) {
                        var e = o.doCheck()
                            , i = o.getValue();
                        !0 === e.bValid && /^1[3|4|5|7|8]\d{9}$/.test(i) ? o.container.triggerHandler("immediatelyCheckOk") : o.container.triggerHandler("immediatelyCheckError")
                    }
                    var n = $(this).attr("maxLength")
                        , a = $(this).val();
                    n && a.length >= parseInt(n, 10) && o.elem.trigger("inputover")
                }),
                i.needAddCate && (o.elemBtn.on("click", function() {
                    var t = o.elem.val();
                    t && (o.addAliasCate(t),
                        o.elem.val(""))
                }),
                    o.aliasList.on("click", ".aliasname-del", function() {
                        $(this).parents(".aliasname-item").remove(),
                            --i.aliasLength,
                            o.elemBtn.show()
                    }))
            }
            ,
            l.prototype.showPopTip = function(t) {
                t && this.showPriceTip(t)
            }
            ,
            l.prototype.addAliasCate = function(t) {
                var e = this.opts
                    , i = $('<li class="aliasname-item" data-val="' + t + '">' + t + '<i class="aliasname-del esf-icons"></i></li>');
                this.aliasList.append(i),
                    this.elemBtn.show(),
                    e.aliasLength++,
                5 <= e.aliasLength && this.elemBtn.hide()
            }
            ,
            l.prototype.showPriceTip = function(t) {
                var e = '<div class="arrow_outer"><div class="arrow_inner"></div></div><div class="title">' + t.suozaidi + t.huxingshi + '室</div><div class="content">当前均价:<span>' + t.avgprice + '元/月</span></div><div class="content">价格区间:<span>' + t.minprice + "元/月&nbsp;-&nbsp;" + t.maxprice + "元/月<span></div>";
                this.popTip || (this.popTip = new o,
                    this.popTip.render(this.rows.containerElem)),
                    this.popTip.show(e);
                var i = this;
                function n() {
                    i.popTip.hide(),
                        $(document).unbind("click keydown", n)
                }
                setTimeout(function() {
                    $(document).bind("click keydown", n)
                }, 150)
            }
            ,
            l.prototype.getCheckValue = function() {
                return this.elem.val()
            }
            ,
            l.prototype.getValue = function() {
                var t = this.opts
                    , e = this.elem.val();
                return !this.opts.view || e !== this.opts.view.placeholder || "placeholder"in document.createElement("input") || (e = ""),
                this.opts.allowSubmitDefaultValue || this.opts.defaultValue && this.opts.defaultValue == e && (e = this.opts.defaultValue),
                t.needAddCate && (e = this.getArrayValue()),
                    e
            }
            ,
            l.prototype.getArrayValue = function() {
                for (var t = $(this.aliasList).find("li"), e = [], i = 0; i < t.length; i++) {
                    var n = $(t[i]);
                    e.push(n.attr("data-val"))
                }
                return e.join(",")
            }
            ,
            l.prototype.setValue = function(t, e, i) {
                !0 === i && this.rows.show(),
                null != t && (this.elem.val(t),
                "Title" == this.opts.name && this.doCheck())
            }
            ,
            l.prototype.setFixTitle = function(t, e) {
                var i = ""
                    , n = e.split("|");
                i = "" == e || "string" != typeof t ? "" : 1 == n.length ? n[0] + " " + t : n[0] + "等 " + t,
                    this.setValue(i)
            }
            ,
            l.prototype.setDefTitle = function(t, e, i) {
                var n = ____json4fe.locallist.name + i + "至" + t + "(" + e + ")";
                this.setValue(n)
            }
            ,
            l.prototype.disable = function() {
                this.opts.disabled && (this.elem.attr("disabled", "disabled"),
                    this.elem.css({
                        color: "#ccc"
                    }))
            }
            ,
            l
    }),
    define("component/commpop/js/commpop", [], function() {
        var t = function(t) {
            if (this.config = t,
                    this.src = this.src || t.src,
                    this.title = this.title || t.title,
                    this.titleCenter = this.titleCenter || t.titleCenter,
                    this.width = this.width || t.width,
                    this.height = this.height || t.height,
                    this.canClose = this.canClose || t.canClose,
                    this.callbackfn = this.callbackfn || t.callbackfn,
                    this.extParm = this.extParm || t.extParm,
                    this.constructor.instance)
                return this.constructor.instance;
            this.topheight = t.topheight || 66,
            this.title || (this.topheight = 0),
                this.init(this.config),
                this.constructor.instance = this
        };
        return t.prototype = {
            constructor: t,
            init: function() {
                this.initMask(),
                    this.initForm()
            },
            isIE: function() {
                return !!document.all
            },
            isIE6: function() {
                return this.isIE() && 6 == /MSIE (\d+)\.0/i.exec(navigator.userAgent)[1]
            },
            initMask: function() {
                var t = screen.width
                    , e = screen.height
                    , i = this.isIE() ? "absolute" : "fixed";
                this.maskIframe = $("<iframe>").attr("id", "feComPopMaskIframe"),
                    this.mask = $("<div>").addClass("feComPopMask").attr("id", "feComPopMask"),
                    this.mask.css({
                        width: t,
                        height: e,
                        position: i
                    }),
                    this.mask.append(this.maskIframe),
                    $(top.document.body).append(this.mask),
                    this.isIE() ? (top.document.getElementsByTagName("html")[0].style.overflow = "hidden",
                        top.document.getElementsByTagName("html")[0].style.paddingRight = "17px") : (top.document.body.style.overflow = "hidden",
                        top.document.body.style.paddingRight = "16px"),
                this.isIE() && (this.mask[0].style.top = (top.document.documentElement.scrollTop || top.document.body.scrollTop) + "px")
            },
            initForm: function() {
                this.createComPop(),
                    this.installComPop(),
                    this.loadContains()
            },
            createComPop: function() {
                this.createForm(),
                    this.createWrap(),
                    this.createFrame(),
                    this.createContains(),
                    this.createTopBar(),
                    this.createLoading(),
                    this.createIframe(),
                    this.createElemDom()
            },
            installComPop: function() {
                var t = this;
                t.form.append(t.wrap),
                    t.wrap.append(t.frame),
                    t.wrap.append(t.contains),
                    t.contains.append(t.topbar),
                    t.contains.append(t.loading),
                    t.contains.append(t.iframeContains),
                    t.contains.append(t.domContains),
                    $(top.document.body).append(t.form)
            },
            loadContains: function() {
                this.src && (this.src instanceof jQuery ? this.loadDomContains(this.src) : this.loadIframeContains(this.url))
            },
            delMask: function() {
                this.mask.remove(),
                    this.form.remove(),
                    this.isIE() ? (top.document.getElementsByTagName("html")[0].style.overflow = "",
                        top.document.getElementsByTagName("html")[0].style.paddingRight = "") : (top.document.body.style.overflow = "",
                        top.document.body.style.paddingRight = ""),
                    this.constructor.instance = null
            },
            createForm: function() {
                var t = $('<div class="feComPop" id="feComPop"></div>')
                    , e = -this.width / 2 + "px"
                    , i = -this.height / 2 + "px";
                t.css({
                    marginLeft: e,
                    marginTop: i
                }),
                this.isIE6() && (t[0].style.top = (document.documentElement.scrollTop || document.body.scrollTop) + Math.round(50 * (document.documentElement.offsetHeight || document.body.clientHeight) / 100)),
                    this.form = t
            },
            createWrap: function() {
                var t = $('<div class="feComPopWrap" ></div>');
                this.wrap = t
            },
            createFrame: function() {
                var t = $("<div>").addClass("feComPopframe").css({
                    height: this.height,
                    width: this.width
                }).hide();
                this.frame = t
            },
            createContains: function() {
                var t = $("<div>").addClass("feComPopContains").css({
                    height: this.height,
                    width: this.width,
                    overflow: "hidden"
                });
                this.contains = t
            },
            createTopBar: function() {
                var t = this;
                t.title = t.title || "";
                var e = $('<div class="feComPopTopbar"><span><a class="feComPopClosebtn" href="javascript:void(0);">&#10005;</a></span><span class="feComPopTitle">' + t.title + "</span></div>");
                if (!t.canClose && e.find(".feComPopClosebtn").hide(),
                    t.title || e.hide(),
                    t.titleCenter && e.css("textAlign", "center"),
                    "object" == typeof t.config.titleStyle)
                    for (var i in t.config.titleStyle)
                        e.css(i, t.config.titleStyle[i]);
                e.find(".feComPopClosebtn").parent().click(function() {
                    t.delMask()
                }),
                    this.topbar = e
            },
            createLoading: function() {
                this.height,
                    this.topheight;
                var t = $("<div>加载中...</div>").addClass("feComPopload");
                if (t.css("height", "value"),
                    "object" == typeof this.config.loadingStyle)
                    for (var e in this.config.loadingStyle)
                        t.css(e, this.config.loadingStyle[e]);
                this.loading = t
            },
            createIframe: function() {
                var t = this.height - this.topheight
                    , e = $("<iframe>").attr({
                    frameborder: "0",
                    scrolling: "no"
                }).addClass("feComPopiframe").css("height", t);
                this.title || e.css("borderRadius", 4),
                    this.iframeContains = e
            },
            createElemDom: function() {
                var t = this.height - this.topheight
                    , e = $("<div>").addClass("feComPopDom").css("height", t);
                this.domContains = e
            },
            loadIframeContains: function() {
                var e = this;
                e.domContains.hide(),
                    e.iframeContains.attr("src", this.src),
                    e.iframeContains.load(function() {
                        if ("object" == typeof e.config.iframeStyle)
                            for (var t in e.config.iframeStyle)
                                e.iframeContains.css(t, e.config.iframeStyle[t]);
                        e.loading.hide()
                    })
            },
            loadDomContains: function() {
                this.iframeContains.hide(),
                    this.domContains.append(this.src).show(),
                    this.loading.hide()
            }
        },
            window.commPop = t
    }),
    define("component/radio/js/radio", ["component/base/js/base", "util/Class", "Controller/Controller", "component/rows/js/rows", "component/commpop/js/commpop"], function(t, e, l, d, i) {
        var o = e.extend(t);
        return o.prototype.CLASS = {
            WRAP: "radio_wrap",
            TITLE: "radio_title",
            CONTENT: "radio_content",
            MULTI: "clearfix",
            ITEM: "radio",
            DEFAULT: "custom"
        },
            o.prototype.type = "radio",
            o.prototype.createElem = function() {
                this.container = $("<div>"),
                    this.container.addClass(this.CLASS.WRAP),
                    this.container.attr("name", this.opts.name),
                this.data && this.data.values.id && this.container.attr("nameid", this.data.values.id),
                ____json4fe && 14 == ____json4fe.catentry[1].dispid && this.data && this.data.id && this.container.attr("nameid", this.data.id),
                this.data && (this.renderChild(),
                    this.setElemView(),
                    this.setValueTimes = 0)
            }
            ,
            o.prototype.renderChild = function() {
                for (var t, e, i, n = this, a = n.opts.customStyles || {}, o = 0; o < n.data.values.length; o++) {
                    var s = n.data.values[o]
                        , r = (t = s.val,
                        e = s.text,
                        void 0,
                        i = '<div tabindex="' + n.opts.tabIndex + '" class="' + n.CLASS.ITEM + '" data-value="' + t + '"><i></i><label>' + e + "</label></div>",
                        $(i));
                    a[s.val] && (n.container.addClass(n.CLASS.DEFAULT),
                        r.find("i").addClass(a[s.val])),
                        n.items.push(r),
                        n.container.append(r)
                }
                for (var c in n.opts.attr)
                    n.opts.attr.hasOwnProperty(c) && $(n.items).each(function() {
                        $(this).attr(c, n.opts.attr[c])
                    })
            }
            ,
            o.prototype.flushChild = function() {
                _self.items = []
            }
            ,
            o.prototype.disabled = function() {
                this.unbindEvent(),
                    this.container.addClass("radio_disabled")
            }
            ,
            o.prototype.unbindEvent = function() {
                var t = "." + this.CLASS.ITEM;
                this.container.find(t).unbind("focus blur"),
                    this.container.unbind("click keydown")
            }
            ,
            o.prototype.setElemView = function() {
                (this.opts.view.afterText || this.opts.view.beforeText) && (this.container.prepend(this.opts.view.afterText),
                    this.container.append(this.opts.view.beforeText)),
                this.opts.className && this.container.addClass(this.opts.className),
                    this.container.addClass(this.CLASS.MULTI)
            }
            ,
            o.prototype.focusTo = function() {
                this.items[0].focus()
            }
            ,
            o.prototype.bindDomEvent = function() {
                var n = "." + this.CLASS.ITEM
                    , a = this;
                a.container.find(n).bind("focus", function(t) {
                    a.container.find(n).removeClass("hover"),
                        $(this).addClass("hover")
                }),
                    a.container.find(n).bind("blur", function(t) {
                        var e = $(t.relatedTarget);
                        !1 === e.hasClass(a.CLASS.ITEM) && e.parents(a.CLASS.WRAP).length < 1 && (a.container.find(n).removeClass("hover"),
                        !0 === a.doCheck().bValid && a.hideTips(),
                            a.container.triggerHandler("inputover"))
                    }),
                    a.container.bind("click", function(t) {
                        a.container.focus();
                        var e = t.target;
                        if (!($(e).hasClass("focus") || 0 < $(e).parents(".focus").length) && !($(e).hasClass("disabled") || 0 < $(e).parents(".disabled").length) && ($(e).hasClass(a.CLASS.ITEM) || 0 < $(e).parents("." + a.CLASS.ITEM).length && (e = $(e).parents(n)[0]))) {
                            var i = $(e).index();
                            a.select(i)
                        }
                    }),
                    a.container.bind("keydown", function(t) {
                        var e = t.keyCode;
                        if (o.EVENT.KEY_CODE.LeftArrow === e || o.EVENT.KEY_CODE.UpArrow === e)
                            a.changeItem(-1);
                        else if (o.EVENT.KEY_CODE.RightArrow === e || o.EVENT.KEY_CODE.DwArrow === e)
                            a.changeItem(1);
                        else if (o.EVENT.KEY_CODE.Space === e) {
                            t.preventDefault();
                            var i = $(t.target).index();
                            a.select(i)
                        }
                    })
            }
            ,
            o.prototype.changeItem = function(t) {
                var e = this.container.find(".focus").index();
                e = ((e = e < 0 ? 0 : e) + t + this.items.length) % this.items.length,
                    this.select(e)
            }
            ,
            o.prototype.select = function(t, e) {
                var i = this.items[t];
                i && (this.container.find("." + this.CLASS.ITEM).removeClass("focus"),
                    "isBiz" !== this.container.attr("name") || 1 != i.data("value") || 252 != ____json4fe.catentry[1].dispid || this.checkUserIdentity() ? (i.focus().addClass("focus"),
                        this.value = i.data("value"),
                    1 !== e && (this.container.trigger("displayToggle"),
                        this.container.trigger("change", [this.getValue()]),
                    1 == this.setValueTimes && "undefined" != typeof infoDetail || this.container.trigger("changenotinit"),
                        this.handleRelateComp()),
                    !0 === this.doCheck().bValid && this.hideTips()) : this.value = "")
            }
            ,
            o.prototype.resetSelector = function() {
                this.container.find("." + this.CLASS.ITEM).removeClass("focus"),
                    this.value = "",
                    this.hideTips()
            }
            ,
            o.prototype.selectFirst = function() {
                this.select(0)
            }
            ,
            o.prototype.getValue = function() {
                return this.value
            }
            ,
            o.prototype.setValue = function(t, e, i) {
                if (typeof t == undefined || 0 == this.container.find('[data-value="' + t + '"]').length)
                    this.value = "",
                        this.container.find("." + this.CLASS.ITEM).removeClass("focus").removeClass("hover"),
                        this.hideTips(),
                        this.container.trigger("change", [this.getValue()]);
                else {
                    var n = this.container.find('[data-value="' + t + '"]').index();
                    this.setValueTimes += 1,
                        this.select(n, i)
                }
            }
            ,
            o.prototype.getText = function() {
                return this.container.find(".focus label").html()
            }
            ,
            o.prototype.pageJump = function(t) {
                t && (window.location = t)
            }
            ,
            o.prototype.disabledOne = function(t) {
                var e = this.container.find('[data-value="' + t + '"]');
                e && e.removeClass("hover").removeClass("focus").addClass("disabled").unbind("focus blur")
            }
            ,
            o.prototype.setDataName = function(t) {
                "string" == typeof t && 0 < t.length && (this.dataName = t)
            }
            ,
            o.prototype.getDataName = function() {
                return this.dataName
            }
            ,
            o.prototype.resetData = function(t) {
                this.data = t,
                    this.items = [],
                    this.container.html(""),
                    this.renderChild(),
                    this.value = "",
                    this.handleRelateComp()
            }
            ,
            o.prototype.getParamId = function() {
                return this.data.id || this.data.pid
            }
            ,
            o.prototype.getCurValId = function() {
                for (var t = this.getValue(), e = null, i = 0; i < this.data.values.length; i++) {
                    var n = this.data.values[i];
                    if (n.val == t) {
                        e = n.valId;
                        break
                    }
                }
                return e
            }
            ,
            o.prototype.addNewRow = function(t) {
                for (var e, i, n, a, o = 0; o < t.length; o++) {
                    if (e = t[o],
                            l.records.get(e.name)) {
                        l.records.get(e.name).activate();
                        break
                    }
                    var s = (i = e.type,
                        a = n = e,
                        new (require("component/" + i + "/js/" + i))(n,a));
                    this.addRelateComp(s);
                    var r = l.records.get(this.opts.name)
                        , c = new d({
                        type: "rows",
                        title: e.title
                    });
                    c.setValidateStatus(e.name, !e.checkRuler),
                        s.rows = c,
                        s.block = this.block,
                        r.rows.containerElem.after(c.containerElem),
                        s.render(c.contentElem),
                        l.records.set(e.name, s)
                }
            }
            ,
            o.prototype.addRelateComp = function(t) {
                this.relatedCompMap || (this.relatedCompMap = {});
                var e = this.relatedCompMap[this.getValue()];
                e || (e = this.relatedCompMap[this.getValue()] = []),
                    e.push(t)
            }
            ,
            o.prototype.handleRelateComp = function() {
                if (this.relatedCompMap) {
                    var t = 0
                        , e = this.getValue();
                    for (var i in this.opts.isFreeze && (e = ""),
                        this.relatedCompMap)
                        if (i == e)
                            for (t = 0; t < this.relatedCompMap[i].length; t++)
                                this.relatedCompMap[i][t].activate();
                        else
                            for (t = 0; t < this.relatedCompMap[i].length; t++)
                                this.relatedCompMap[i][t].freeze()
                }
            }
            ,
            o.prototype.freeze = function() {
                this.constructor.superclass.freeze.call(this),
                    this.handleRelateComp()
            }
            ,
            o.prototype.checkUserIdentity = function() {
                var t = !0;
                return extMap && !extMap.isNameOrLicenseVerified && (this.renderBizDialog(),
                    t = !1),
                    t
            }
            ,
            o.prototype.renderBizDialog = function() {
                var t = '<div id="pet_01"><p class="pet_pop_in">您好，为增加商家信誉，促进交易达成，即日起在本类别发布信息<br>需进行身份认证或营业执照认证。</p><div class="pet_pop_kuang clearfix pb10"><a target="_top" href="' + window.location.protocol + '//my.58.com/authrealname?realNameAuthClientId=14" class="fl"><p class="tc f14"><span>立刻认证身份证</span></p></a><div class="or"></div><a class="fl" target="_top" href="' + window.location.protocol + '//my.58.com/authbiz/"><p class="tc f14 pl15"><span>立刻认证营业执照</span><b class="jian"></b></p></a></div></div><div class="pop_more"><span class="fb">您还可以：</span><a href="' + window.location.protocol + '//my.58.com/index/" target="_top"><b class="pop_zhiding"></b>置顶</a>&nbsp;或&nbsp;<a href="' + window.location.protocol + '//jingzhun.58.com/" target="_top"><b class="accurate"></b>精准</a>&nbsp;信息，获得更大流量提升效果。</div>';
                new i({
                    src: $(t),
                    title: "发布提示",
                    width: "560",
                    height: "300",
                    canClose: !0
                })
            }
            ,
            o.prototype.toggleFreezeList = function() {
                for (var t = ["xinxuetongzhengshu", "cunzhongbaozhang", "baozhangshijian", "fujiabaozhangshijian"], e = 0; e < t.length; e++)
                    if ("block" === $("[name=" + t[e] + "]").closest(".rows_wrap").css("display"))
                        for (var i = 0; i < l.records.list.length; i++)
                            t[e] === l.records.list[i].dataName && (l.records.list[i].opts.isFreeze = !1)
            }
            ,
            o
    }),
    define("component/checkbox/js/checkbox", ["component/base/js/base", "util/Class", "component/popTip/js/popTip"], function(t, e, i) {
        var o = e.extend(t);
        return o.prototype.type = "checkbox",
            o.prototype.CLASS = {
                WRAP: "checkbox_wrap",
                TITLE: "checkbox_title",
                CONTENT: "checkbox_content",
                MULTI: "clearfix",
                ITEM: "checkbox"
            },
            o.prototype.init = function() {
                this.constructor.superclass.init.apply(this, arguments),
                    this.bSelectAll = !1,
                window.infoDetail && window.infoDetail[this.opts.dataName || this.opts.name] && this.setValue(window.infoDetail[this.opts.dataName || this.opts.name])
            }
            ,
            o.prototype.createElem = function() {
                var t, e, i, n, a = this;
                if (this.container = $("<div>"),
                        this.container.addClass(this.CLASS.WRAP),
                        this.container.attr("name", this.opts.name),
                    this.data && this.data.id && this.container.attr("nameid", this.data.id),
                    a.data && a.data.values)
                    for (var o = 0; o < a.data.values.length; o++) {
                        var s = a.data.values[o]
                            , r = (t = s.val,
                            e = s.text,
                            n = void 0,
                            i = '<div tabindex="' + a.opts.tabIndex + '" class="' + a.CLASS.ITEM + '" data-value="' + t + '"><i></i><label>' + e + "</label></div>",
                            n = $(i),
                        a.opts.view.width && n.css("width", a.opts.view.width),
                            n);
                        a.items.push(r),
                            a.container.append(r)
                    }
                a.setElemView(),
                !0 === a.opts.bSelectAll && a.initSelectAllElem(),
                "undefined" != typeof a.opts.hideCount && a.initHideSomeItem(),
                this.opts.view.width && a.container.find("." + a.CLASS.ITEM).width(this.opts.view.width),
                a.opts.suggestSetting && a.opts.suggestSetting.hideElement && a.opts.suggestSetting.hideElement(a)
            }
            ,
            o.prototype.initSelectAllElem = function() {
                var t = this
                    , e = $('<div class="select_all"><span>全选</span></div>');
                e.bind("click", function() {
                    t.bSelectAll = !t.bSelectAll,
                        t.selectAll(t.bSelectAll),
                        e.find("span").html(t.bSelectAll ? "取消" : "全选")
                }),
                    t.container.append(e)
            }
            ,
            o.prototype.initHideSomeItem = function() {
                var t = this
                    , e = $('<div class="hide_some"><span>更多</span></div>');
                t.bShowAll = !1,
                    t.toggleSomeItem(!1),
                    e.bind("click", function() {
                        t.bShowAll = !t.bShowAll,
                            t.toggleSomeItem(t.bShowAll),
                            e.find("span").html(t.bShowAll ? "收起" : "更多")
                    }),
                    t.container.append(e)
            }
            ,
            o.prototype.toggleSomeItem = function(t) {
                var e = this;
                if (1 == t)
                    e.container.children("." + e.CLASS.ITEM).show();
                else {
                    var i = e.container.children("." + e.CLASS.ITEM)
                        , n = i.length
                        , a = e.opts.hideCount;
                    if (n <= a)
                        return;
                    for (var o = a; o < n; o++)
                        i.eq(o).hide()
                }
            }
            ,
            o.prototype.setElemView = function() {
                (this.opts.view.afterText || this.opts.view.beforeText) && (this.container.prepend(this.opts.view.afterText),
                    this.container.append(this.opts.view.beforeText)),
                    this.setViewPopTip(),
                    this.container.addClass(this.CLASS.MULTI)
            }
            ,
            o.prototype.focusTo = function() {
                this.items[0].focus()
            }
            ,
            o.prototype.bindDomEvent = function() {
                var i = "." + this.CLASS.ITEM
                    , n = this;
                if (n.container.find(i).bind("focus", function(t) {
                        n.container.find(i).removeClass("hover"),
                            $(this).addClass("hover")
                    }),
                        n.container.find(i).bind("blur", function(t) {
                            var e = $(t.relatedTarget);
                            !1 === e.hasClass(n.CLASS.ITEM) && e.parents(n.CLASS.WRAP).length < 1 && (n.container.find(i).removeClass("hover"),
                                n.doCheck(),
                                n.container.triggerHandler("inputover"))
                        }),
                        n.opts.maxSelectOptions) {
                    function a() {
                        var t = 0 != $(n.container).siblings(".tip").length ? $(n.container).siblings(".tip") : $(n.container).parent().parent().siblings(".tip")
                            , e = t.html();
                        e && -1 != e.indexOf("最多") && -1 != t.attr("class").indexOf("validate_warning") || (e = "<i></i>",
                            t.attr("class", "tip validate_warning").html(e + "最多选择" + n.opts.maxSelectOptions + "项").css("left", 0))
                    }
                    a()
                }
                n.container.bind("click", function(t) {
                    var e = t.target;
                    if ($(e).hasClass(n.CLASS.ITEM) || 0 < $(e).parents(i).length && (e = $(e).parents(i)[0])) {
                        if (n.opts.maxSelectOptions)
                            if (a(),
                                $(n.container).find(".focus").length >= parseInt(n.opts.maxSelectOptions) && !$(e).hasClass("focus"))
                                return;
                        $(e).toggleClass("focus"),
                            n.container.trigger("displayToggle")
                    }
                }),
                    n.container.bind("keydown", function(t) {
                        var e = t.keyCode;
                        if (o.EVENT.KEY_CODE.Space === e) {
                            var i = $(t.target).index();
                            n.items[i].focus().toggleClass("focus"),
                                n.container.trigger("displayToggle")
                        }
                    })
            }
            ,
            o.prototype.changeItem = function(t) {
                var e = this.container.find(".focus").index();
                e = ((e = e < 0 ? 0 : e) + t + this.items.length) % this.items.length,
                    this.items[e].focus().toggleClass("focus"),
                    this.container.trigger("displayToggle"),
                    this.container.trigger("change", [this.getValueList()])
            }
            ,
            o.prototype.selectById = function(t) {
                this.container.find("." + this.CLASS.ITEM).removeClass("hover"),
                    this.container.find('[data-value="' + t + '"]').addClass("focus")
            }
            ,
            o.prototype.getValue = function() {
                var i = [];
                this.container.find(".focus").each(function(t, e) {
                    i.push($(e).data("value"))
                });
                var t = this;
                return t.opts.hiddenHandle && "string" == typeof t.opts.hiddenHandle.name && "string" == typeof t.opts.hiddenHandle.funcName ? t[t.opts.hiddenHandle.funcName](i) : i.join("|")
            }
            ,
            o.prototype.getCheckValue = function() {
                var t = this.getValue();
                if (this.opts.hiddenHandle && "string" == typeof this.opts.hiddenHandle.name && "string" == typeof this.opts.hiddenHandle.funcName) {
                    var i = [];
                    this.container.find(".focus").each(function(t, e) {
                        i.push($(e).data("value"))
                    }),
                        t = i.join("|")
                }
                return t
            }
            ,
            o.prototype.getHiddenValueFuwufanwei = function(t) {
                var e = {}
                    , i = t.length;
                if (0 == i)
                    return e[this.opts.name] = "",
                        e[this.opts.hiddenHandle.name] = "",
                        e;
                var n = this.data.values[0].val;
                if (1 == i && t[0] == n)
                    return e[this.opts.name] = "",
                        e[this.opts.hiddenHandle.name] = "0",
                        e;
                for (var a = 0; a < i; a++) {
                    t[a] == n && t.splice(a, 1)
                }
                return e[this.opts.name] = t.join("|"),
                    e[this.opts.hiddenHandle.name] = "2",
                    e
            }
            ,
            o.prototype.getValueList = function() {
                var i = [];
                return this.container.find(".focus").each(function(t, e) {
                    i.push($(e).data("value"))
                }),
                    i.join(",")
            }
            ,
            o.prototype.setValue = function(t, e, i) {
                !0 === i && (this.rows.show(),
                    this.selectAll(!1)),
                isNaN(t) || (t = t.toString());
                for (var n = t.split("|"), a = 0; a < n.length; a++)
                    this.selectById(n[a])
            }
            ,
            o.prototype.getText = function() {
                var i = []
                    , n = "";
                return this.container.find(".focus").each(function(t, e) {
                    n = $(e).find("label").html(),
                        i.push(n)
                }),
                    i.join("|")
            }
            ,
            o.prototype.setClassByStatus = function(t) {}
            ,
            o.prototype.setViewPopTip = function() {
                if (this.opts.view.popTip) {
                    var t = "<div></div>";
                    this.opts.view.popTip.content && (t = "<div><div class='arrow_outer'><i class='arrow_inner'></i></div>" + this.opts.view.popTip.content + "</div>"),
                        this.container.append('<div class="view_poptip"></div>'),
                    this.popTip || (this.popTip = new i,
                        this.popTip.render(this.container.find(".view_poptip")),
                        this.popTip.hide());
                    var e = this;
                    e.container.find(".view_poptip").hover(function() {
                        e.popTip.show(t)
                    }, function() {
                        e.popTip.hide()
                    })
                }
            }
            ,
            o.prototype.disabled = function() {
                this.unbindEvent(),
                    this.container.addClass("checkbox_disabled")
            }
            ,
            o.prototype.unbindEvent = function() {
                var t = "." + this.CLASS.ITEM;
                this.container.find(t).unbind("focus blur"),
                    this.container.unbind("click keydown")
            }
            ,
            o.prototype.hideOneCheckbox = function(t) {
                var e = this.container.find('[data-value="' + t + '"]');
                e && (e.removeClass("focus"),
                    e.hide())
            }
            ,
            o.prototype.selectAll = function(t) {
                for (var e = t ? "addClass" : "removeClass", i = this.items, n = i.length, a = 0; a < n; a++) {
                    i[a][e]("focus")
                }
                this.container.trigger("displayToggle"),
                    this.container.trigger("change", [this.getValueList()])
            }
            ,
            o.prototype.hasSelected = function() {
                return !!this.container.find(".focus").length
            }
            ,
            o.prototype.hasOneSelected = function() {
                return 598818 == this.container.find(".focus").data("value")
            }
            ,
            o
    }),
    define("component/editor/js/editor", ["component/base/js/base", "util/Class", "component/validate/js/validate", "Controller/Controller"], function(t, e, n, a) {
        var o = e.extend(t);
        return o.prototype.type = "editor",
            o.prototype.CLASS = {
                WRAP: "editor"
            },
            o.prototype.getContentTxt = function() {
                var t;
                try {
                    -1 < (t = this.ue.getContentTxt()).indexOf("window.parent.UE.instants['ueditorInstant0']._setup(document);") && (t = t.replace("window.parent.UE.instants['ueditorInstant0']._setup(document);", ""))
                } catch (e) {
                    t = ""
                }
                return t
            }
            ,
            o.prototype.render = function(t) {
                !1 === this.opts.canNull && this.rows.addStar();
                var e = this;
                this.describeElem && this.describeElem.appendTo(this.containerElem),
                    this.containerElem.appendTo(t),
                    this.ue = function(t) {
                        var i = {
                            id: "editor",
                            theme: "default",
                            defaultTxt: "",
                            autoHeight: !1,
                            width: 530,
                            height: 150,
                            focusHeight: 150,
                            iframeCssUrl: window.location.protocol + "//img.58cdn.com.cn/fuwenben/themes/iframe.css",
                            maxWordsLen: 2e3
                        };
                        for (var e in t)
                            t[e] && (i[e] = t[e]);
                        i.focusHeight < i.height && (i.focusHeight = i.height);
                        var n = [];
                        t.delEditStyle || (n = [["fontsize", "forecolor", "backcolor", "Bold", "underline", "Undo", "Redo"]]),
                        t.toolbars && (n = t.toolbars),
                            UE.getEditor("editor", {
                                iframeCssUrl: i.iframeCssUrl,
                                theme: i.theme,
                                toolbars: n,
                                autoClearinitialContent: !0,
                                wordCount: !1,
                                maximumWords: i.maxWordsLen,
                                elementPathEnabled: !1,
                                initialStyle: "body{font-size:12px}",
                                minFrameHeight: i.height,
                                initialFrameWidth: i.width,
                                initialFrameHeight: i.height,
                                autoHeightEnabled: i.autoHeight,
                                removeFormatTags: "a",
                                removeFormatAttributes: "class,style,lang,width,height,align,hspace,valign",
                                initialContent: i.defaultTxt,
                                serialize: {
                                    blackList: {
                                        a: 1,
                                        style: 1,
                                        script: 1
                                    }
                                }
                            });
                        var a = UE.getEditor("editor");
                        return a.focusEvents = [],
                            a.blurEvents = [],
                            a.addListener("ready", function() {
                                window.FE58.UEEditorDone = !0
                            }),
                            a.onfocus = function(t) {
                                if ("focus" != t)
                                    a.focusEvents.push(t);
                                else {
                                    this.getContentTxt().toLowerCase() == i.defaultTxtWithoutStyle && this.setContent(" ");
                                    for (var e = 0; e < a.focusEvents.length; e++)
                                        a.focusEvents[e]()
                                }
                            }
                            ,
                            a.onblur = function(t) {
                                if ("blur" != t)
                                    a.blurEvents.push(t);
                                else {
                                    "" != this.getContentTxt() && " " != this.getContentTxt() || this.setContent(i.defaultTxt);
                                    for (var e = 0; e < a.blurEvents.length; e++)
                                        a.blurEvents[e]()
                                }
                            }
                            ,
                            a.addListener("wordCountOverflow", function(t, e) {}),
                            a.addListener("beforeSetContent", function(t, e) {}),
                            a.addListener("beforePaste", function(t, e) {
                                for (var i = e.html, n = ["a", "img", "script", "style", "link", "input", "form", "textarea", "object", "embed", "button", "li"], a = 0, o = n.length; a < o; a++) {
                                    var s = new RegExp("</?" + n[a] + "[^>]*>","gi");
                                    i = i.replace(s, "")
                                }
                                if (r = /<img[\s\S]+?>|<a\s[\s\S]+?>[\s\S]+?<\/a>|<object[\s\S]+?>[\s\S]+?<\/object>/gi,
                                        c = /style="[^"]*"/gi,
                                        !-[1]) {
                                    var r = /<?xml[\s\S]+?\/>/gi
                                        , c = /<\/?(v|o):[\s\S]+?>/gi;
                                    i = i.replace(r, "").replace(c, "")
                                }
                                e.html = i
                            }),
                            a.getText = function() {
                                return a.body.textContent ? a.body.textContent : a.body.innerText
                            }
                            ,
                            a.defaultSetContent = a.setContent,
                            a.setContent = function(t) {
                                var e = this;
                                !function() {
                                    e.body ? e.defaultSetContent(t) : setTimeout(arguments.callee, 300)
                                }()
                            }
                            ,
                            a.defaultGetContent = a.getContent,
                            a.getContent = function() {
                                return a.body.innerHTML
                            }
                            ,
                            a
                    }(this.opts.UEopts);
                var i = e.opts.UEopts.defaultTxtWithoutStyle;
                e.ue.onblur(function() {
                    var t = e.rows.containerElem.find(".tip");
                    "" != e.getContentTxt() && e.getContentTxt() != i || n.showTip(t, "房源描述不能为空。", o.SETTING.STATUS.ERROR),
                        e.doCheck()
                }),
                    e.ue.onfocus(function() {
                        if (e.opts.view.tips) {
                            var t = e.rows.containerElem.find(".tip");
                            n.showTip(t, e.opts.view.tips, o.SETTING.STATUS.WARN)
                        }
                    })
            }
            ,
            o.prototype.getValue = function() {
                var t = this.ue.getContent();
                return void 0 !== t && -1 < t.indexOf("window.parent.UE.instants['ueditorInstant0']._setup(document);") && (t = (t = t.replace("<script>window.parent.UE.instants['ueditorInstant0']._setup(document);<\/script>", "")).replace("window.parent.UE.instants['ueditorInstant0']._setup(document);", "")),
                void 0 !== t && t === this.opts.UEopts.defaultTxt && (t = ""),
                    t
            }
            ,
            o.prototype.getCheckValue = function() {
                var t = this.getContentTxt();
                return void 0 !== t && -1 < t.indexOf("window.parent.UE.instants['ueditorInstant0']._setup(document);") && (t = t.replace("window.parent.UE.instants['ueditorInstant0']._setup(document);", "")),
                void 0 !== t && t === this.opts.UEopts.defaultTxtWithoutStyle && (t = ""),
                    t
            }
            ,
            o.prototype.createElem = function() {
                this.containerElem = $("<div>").attr("id", this.opts.UEopts.id).attr("class", this.CLASS.WRAP),
                    this.initFillHelper()
            }
            ,
            o.prototype.initFillHelper = function() {
                var t = {};
                if (this.opts.view && this.opts.view.fillHelper && (t = this.opts.view.fillHelper),
                        t.btnText) {
                    var e = "string" != typeof t.displayStatus ? "block" : t.displayStatus;
                    this.describeElem = $('<div id="miaoshu" style="display:' + e + ';">' + (t.text || "") + '<a href="javascript:void(0)" id="miaoshuBtn" >' + t.btnText + "</a></div>"),
                        this.bindFillHelperEvent()
                }
                t.needSubscribe && this.subscribeValueChange(),
                t.needDialog && this.createDescDialog()
            }
            ,
            o.prototype.bindFillHelperEvent = function() {
                var t = this
                    , e = this.opts.view.fillHelper;
                if (e.content || e.api) {
                    var i = t.describeElem.find("#miaoshuBtn");
                    this.opts.view.fillHelper.content ? i.bind("click", function() {
                        t.showHelperContent(e.content)
                    }) : i.bind("click", function() {
                        t.showContentByApi(e.api.url, e.api.contentKey)
                    })
                }
            }
            ,
            o.prototype.showContentByApi = function(t) {
                var e = this
                    , i = a.getFormText();
                $.ajax({
                    url: t,
                    type: "get",
                    data: i,
                    dataType: "json",
                    success: function(t) {
                        e.showHelperContent(t.content)
                    },
                    error: function() {}
                }),
                    e.showDescDialog()
            }
            ,
            o.prototype.showHelperContent = function(t) {
                !0 === this.opts.view.fillHelper.needDialog ? this.setDescDialogContent(t) : this.ue.setContent(t)
            }
            ,
            o.prototype.subscribeValueChange = function() {
                var a = this;
                a.subscribe(this.opts.name + ".valueChange", function(t) {
                    for (var e = !0, i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (null === n.value || "Object" == typeof n) {
                            e = !1;
                            break
                        }
                    }
                    1 == e ? $("#miaoshu").show() : a.hideMiaoshu()
                })
            }
            ,
            o.prototype.hideMiaoshu = function() {
                $("#miaoshu").hide(),
                    $("#fyms").hide()
            }
            ,
            o.prototype.bindDomEvent = function() {}
            ,
            o.prototype.setValue = function(t) {
                this.ue.setContent(t)
            }
            ,
            o.prototype.setDescDialogContent = function(t) {
                this.describDialog.find(".fymsDiv").html(t)
            }
            ,
            o.prototype.showDescDialog = function(t) {
                this.describDialog.find(".fymsDiv").html(t),
                    $("#fyms").show()
            }
            ,
            o.prototype.createDescDialog = function(t) {
                var e = this;
                e.describDialog = $('<div id="fyms" class="fyms" style="height:' + $(window).height() + 'px;"><div class="fymsBg"></div><dl id="fymsdl" class="fymsdl"><dt><span class="fr fyms_close">×</span><b>1秒生成房源描述</b></dt><dd><p>根据您填写的资料，我们为您自动生成了如下房源描述：</p><div class="fymsDiv"></div><a class="fymsBtn" href="javascript:void(0)"><span>就这样写</span></a></dd></dl></div>'),
                    e.describDialog.find(".fyms_close").bind("click", function() {
                        $("#fyms").hide()
                    }),
                    e.describDialog.find(".fymsBtn span").bind("click", function() {
                        var t = e.describDialog.find(".fymsDiv").html();
                        e.ue.setContent(t),
                            $("#fyms").hide()
                    }),
                    $(document.body).append(e.describDialog)
            }
            ,
            o.prototype.setCanNull = function() {
                this.opts.canNull = !0
            }
            ,
            o.prototype.setNotNull = function() {
                this.opts.canNull = !1
            }
            ,
            o
    }),
    define("component/util/js/util", [], function() {
        var t = {
            navigator: {}
        };
        return t.navigator.isIE = !!document.all,
            t.navigator.isIE6 = t.navigator.isIE && 6 == /MSIE (\d+)\.0/i.exec(navigator.userAgent)[1],
            t
    }),
    define("component/popwin/js/popwin", ["component/base/js/base", "util/Class", "Controller/Controller", "component/util/js/util"], function(t, e, i, n) {
        var a = n.navigator.isIE
            , h = n.navigator.isIE6;
        window.setbg = function(t, e, i, n, a, o) {
            return a = "false" != a && 0 != a,
                s.show(t, e, i, n, a, o),
                s
        }
            ,
            window.closeopendiv = function() {
                s.hide()
            }
        ;
        var s = new function() {
                this.id = "fe_window",
                    this.title = null,
                    this.url = null,
                    this.width = 400,
                    this.minWidth = 300,
                    this.height = 200,
                    this.minHeight = 200,
                    this.top = 0,
                    this.left = 0,
                    this.closeable = !0,
                    this.mask = null,
                    this.form = null,
                    this._topheight = 47,
                    this._bottomheight = 0,
                    this._framepadding = 33,
                    this._containsarea = null,
                    this._frame = null,
                    this._toparea = null,
                    this._titleid = null,
                    this._iframeareaid = null,
                    this._loadarea = null,
                    this._htmlCon = null,
                    this._bottomarea = null,
                    this._cssform = "display:none;left:50%;margin:0px 0px 0px 0px;" + (h ? "top:;" : "top:45%;"),
                    this.mode = "iframe",
                    this.modal = !0,
                    this.html = "",
                    this.createMask = function() {
                        var t = $('<div class="fe_window_mask" style="' + (a ? "display:none;position:absolute;width:" + screen.width + "px;height:" + screen.height + "px;" : "display:none;position:fixed;width:" + screen.width + "px;height:" + screen.height) + 'px;"></div>')
                            , e = $('<iframe style="width:100%;height:100%;background-color:#000;filter:alpha(Opacity=0);opacity:0;"></iframe>');
                        t.append(e),
                            $(document.body).append(t),
                            this.mask = t,
                            this.maskIframe = e
                    }
                    ,
                    this.createForm = function() {
                        var a = this
                            , t = $('<div class="fe_window" style="' + a._cssform + ";margin-left:-" + a.width / 2 + "px;margin-top:-" + a.height / 2 + 'px" ></div>');
                        h && (t[0].style.top = (document.documentElement.scrollTop || document.body.scrollTop) + Math.round(50 * (document.documentElement.offsetHeight || document.body.clientHeight) / 100));
                        var e, i = $('<div class="outer" ></div>'), n = $('<div class="frame" style="display:none;padding' + a._framepadding + ";height:" + a.height + "px;width:" + a.width + 'px" ></div>');
                        if (a._topheight) {
                            var o = a.title ? "display:block;" : "display:none";
                            a.title || (a._topheight = 0),
                                (e = $('<div class="topbar" style="height:' + a._topheight + "px;" + o + '"><span><a class="closebtn" href="javascript:void(0);" style="' + (a.closeable ? "" : "display:none") + '" target="_self">&#10005;</a></span><span class="title">' + (a.title || "") + "</span></div>")).find("a").parent().click(function() {
                                    a.hide()
                                }),
                                this._titleid = e.find(".title")
                        }
                        var s = $("<div class='contains' style='width: " + a.width + "px; height:" + a.height + "px; top: " + a._framepadding + "px; left: " + a._framepadding + "px; '></div>")
                            , r = $("<div class='load' style='display:block;height:" + (a.height - a._topheight - a._bottomheight) + "px;background:zhaopin_files/loading.gif;z-index:9998;'>加载中...</div>");
                        window._loadAction = function() {
                            var t = dom.get(a._iframeareaid);
                            try {
                                t.style.cssText = string.format("height:{0}px;width:100%;", a.minHeight - a._topheight - a._bottomheight);
                                var e = Math.max(t.contentWindow.document.documentElement.scrollWidth, t.contentWindow.document.body.scrollWidth)
                                    , i = Math.max(t.contentWindow.document.documentElement.scrollHeight, t.contentWindow.document.body.scrollHeight);
                                a.resize(e, i + a._topheight + a._bottomheight)
                            } catch (n) {}
                            a.showLoad(!1),
                                a.center()
                        }
                            ,
                            a._iframeareaid = a.id + "_iframe";
                        var c, l = a.title ? ";" : "border-radius:4px;", d = '<iframe id="' + a._bottomheight + '" frameborder="0" scrolling="no" style="height:' + (a.height - (a.title ? a._topheight : 0) - a._bottomheight) + "px;" + l + ' width: 100%;" class="fe_window_iframe" ></iframe>';
                        0 < a._bottomheight && (c = $("<div class='bottombar' style='height:" + a._bottomheight + "px'></div>")),
                            t.append(i),
                            i.append(n),
                            i.append(s),
                            s.html(d),
                        a._topheight && s.children(":last").before(e),
                            s.children(":last").before(r);
                        var p = $('<div style="height:' + (a.height - a._topheight - a._bottomheight) + 'px; width: 100%;" class="fe_window_htmlcon" ></div>');
                        s.children(":last").before(p),
                        0 < a._bottomheight && s.append(c),
                            $(document.body).append(t),
                            this.form = t,
                            this._frame = n,
                            this._loadarea = r,
                            this._containsarea = s,
                            this._toparea = e,
                            this._bottomarea = c,
                            this._htmlCon = p
                    }
                    ,
                    this.showMask = function(t) {
                        t ? (this.mask.show(),
                            a ? (document.getElementsByTagName("html")[0].style.overflow = "hidden",
                                document.getElementsByTagName("html")[0].style.paddingRight = "17px") : (document.body.style.overflow = "hidden",
                                document.body.style.paddingRight = "16px"),
                        a && (this.mask[0].style.top = (document.documentElement.scrollTop || document.body.scrollTop) + "px")) : (this.mask && this.mask.hide(),
                            a ? (document.getElementsByTagName("html")[0].style.overflow = "",
                                document.getElementsByTagName("html")[0].style.paddingRight = "") : (document.body.style.overflow = "",
                                document.body.style.paddingRight = ""))
                    }
                    ,
                    this.showLoad = function(t) {
                        var e = this;
                        e._loadarea && (t ? (e._loadarea.show(),
                            $("." + e._iframeareaid).hide()) : (e._loadarea.hide(),
                            $("." + e._iframeareaid).show()))
                    }
                    ,
                    this.showForm = function(t) {
                        this.form && (t ? this.form.show() : this.form.hide())
                    }
                    ,
                    this.setTitle = function(t) {
                        if (!this._titleid)
                            return !1;
                        this.title = t,
                            this._titleid.html(this.title)
                    }
                    ,
                    this.setUrl = function(t) {
                        if (!this._iframeareaid)
                            return !1;
                        this._loadarea.show(),
                            this._htmlCon.hide(),
                            $("." + this._iframeareaid)[0].src = t || this.url
                    }
                    ,
                    this.setHTML = function(t) {
                        $("." + this._iframeareaid).hide(),
                            this._loadarea.hide(),
                            this._htmlCon.html("").append(t).show()
                    }
                    ,
                    this.show = function(t, e, i, n, a, o) {
                        var s = this;
                        t && (this.title = t),
                        this.mask || this.createMask(),
                        this.form || this.createForm(),
                            this.showLoad(!0),
                            this.setTitle(this.title),
                        e && (e instanceof jQuery ? (this._containsarea.find(".fe_window_iframe").remove(),
                            this.showHTML = e,
                            this.setHTML(this.showHTML)) : (this.url = e,
                            this.setUrl(this.url))),
                        i && (this.minWidth = i),
                        n && (this.minHeight = n),
                            this.closeable = a,
                        $(this.id + "_closebtn") && (a ? this._toparea.find(".closebtn").show() : this._toparea.find(".closebtn").hide(),
                        "function" == typeof o && this._toparea.find(".closebtn").unbind("click", this.closeCallback).click(function() {
                            o.apply(s, arguments)
                        })),
                            this.resize(0, 0),
                            this.showMask(!0),
                            this.showForm(!0),
                            this.center()
                    }
                    ,
                    this.showDIV = function() {}
                    ,
                    this.hide = function() {
                        this.showMask(!1),
                            this.showForm(!1)
                    }
                    ,
                    this.close = function() {
                        this.form.remove(),
                            this.form = null,
                            this.mask.remove(),
                            this.mask = null,
                            a ? (document.getElementsByTagName("html")[0].style.overflow = "",
                                document.getElementsByTagName("html")[0].style.paddingRight = "") : (document.body.style.overflow = "",
                                document.body.style.paddingRight = "")
                    }
                    ,
                    this.move = function(t, e) {
                        this.top = t,
                            this.left = e,
                            this.form.css("top", this.top),
                            this.form.css("left", this.left)
                    }
                    ,
                    this.center = function() {
                        if (this.form && !(this.form.length < 1)) {
                            var t = "-" + this.height / 2 + "px 0px 0px -" + this.width / 2 + "px";
                            this.form.css("margin", t),
                            h && (this.form[0].style.top = (document.documentElement.scrollTop || document.body.scrollTop) + Math.round(50 * (document.documentElement.offsetHeight || document.body.clientHeight) / 100))
                        }
                    }
                    ,
                    this.resize = function(t, e) {
                        var i = this;
                        t = Math.max(i.minWidth, t),
                            e = Math.max(i.minHeight, e),
                            i.width = t,
                            i.height = e,
                            i._frame.css({
                                width: i.width + "px",
                                height: i.height + "px",
                                padding: i._framepadding + "px"
                            }),
                            i._containsarea.css({
                                width: i.width + "px",
                                height: i.height + "px",
                                top: i._framepadding + "px",
                                left: i._framepadding + "px"
                            }),
                            i._loadarea.css({
                                height: i.height - i._topheight - i._bottomheight + "px",
                                lineHeight: i.height - i._topheight - i._bottomheight + "px"
                            }),
                            $("." + i._iframeareaid).height(i.height - i._topheight - i._bottomheight)
                    }
            }
        ;
        return s
    }),
    define("component/resetCommercial/js/resetCommercial", [], function() {
        return function(t) {
            t && (commercial.local = t,
            window.commercial_issue && "[object object]" === Object.prototype.toString.call(window.commercial_issue).toLowerCase() && "function" == typeof window.commercial_issue.init && window.commercial_issue.init())
        }
    }),
    define("component/resetCommercial/js/getCommercial", ["./resetCommercial"], function(e) {
        return function(t) {
            t && $.ajax({
                url: "/zufang/ajax/getLocal",
                data: {
                    displocalid: t
                },
                type: "get",
                success: function(t) {
                    200 == t.code && t.data && t.data.localId && e(t.data.localId)
                }
            })
        }
    }),
    define("component/selector/js/selector", ["component/base/js/base", "util/Class", "Controller/Controller", "component/popwin/js/popwin", "component/resetCommercial/js/getCommercial"], function(t, e, n, a, s) {
        var i = e.extend(t);
        return i.opts = {
            name: "",
            pnames: [],
            type: "selector",
            view: {
                placeholder: null,
                afterText: "",
                beforeText: "",
                overFocus: !1,
                outBlur: !1,
                width: "150px",
                optionsWidth: ""
            },
            suggestSetting: {
                isFirstStatusTab1: 0,
                isFirstStatusTab2: 0,
                isFirstStatusTab3: 0,
                isFirstStatusTab4: 0,
                isNewView: !1,
                descArr: [],
                descObj: {},
                getValFunc: function() {},
                getEventClickFun: function() {}
            },
            notnull: !0,
            funcs: []
        },
            i.prototype.CLASS = {
                WRAP: "input_text_wrap",
                TITLE: "input_text_title",
                CONTENT: "input_text_content",
                MULTI: "clearfix"
            },
            i.prototype.type = "selector",
            i.prototype.createElem = function() {
                var t = this.opts.view.placeholder ? this.opts.view.placeholder : "请选择"
                    , e = this.createOption();
                this.container = this.elem = $('<div class="selectordef" name="' + this.opts.name + '" style="z-index:' + (1500 - this.opts.tabIndex) + '"  tabindex="' + this.opts.tabIndex + '"><div class="title"><span class="seled">' + t + "</span><div class='arrow'></div></div><div class='optiondef'>" + e + "</div></div>"),
                    this.container.attr("nameid", this.id),
                    this.setElemView(),
                this.data && 1 === this.data.values.length && (this.setValue(this.data.values[0].val, "", ""),
                    this.container.find(".optiondef").hide(),
                5 == ____json4fe.catentry[0].dispid && this.hide()),
                    this.isEmptyShangquan = !1,
                this.opts.hideStatus && this.elem.hide(),
                this.opts.suggestSetting && this.opts.suggestSetting.hideElement && this.opts.suggestSetting.hideElement(this)
            }
            ,
            i.prototype.setElemView = function() {
                this.elem.css("width", this.opts.view.width),
                    this.opts.view.optionsWidth && 0 < this.opts.view.optionsWidth.length ? this.elem.find(".optiondef").css("width", this.opts.view.optionsWidth) : this.elem.find(".optiondef").css("width", parseInt(this.opts.view.width) - 3),
                0 < this.opts.view.afterText.length && this.elem.find(".title").append("<span>" + this.opts.view.afterText + "</span>"),
                0 < this.opts.view.beforeText.length && this.elem.find(".title").prepend("<span>" + this.opts.view.beforeText + "</span>")
            }
            ,
            i.prototype.bindDomEvent = function() {
                var o = this;
                o.elem.bind("keydown", function(t) {
                    if ("disabled" != o.elem.attr("disabled")) {
                        var e = t.keyCode
                            , i = o.elem.find(".sel");
                        if (40 == e) {
                            if (0 < i.length) {
                                var n = i.removeClass("sel").next();
                                0 == n.length && (n = o.elem.find("li").first()),
                                    n.addClass("sel")
                            } else
                                o.elem.find("li").first().addClass("sel");
                            return !1
                        }
                        if (38 == e) {
                            if (0 < i.length) {
                                var a = i.removeClass("sel").prev();
                                0 == a.length && (a = o.elem.find("li").last()),
                                    a.addClass("sel")
                            } else
                                o.elem.find("li").last().addClass("sel");
                            return !1
                        }
                        return 32 == e || 13 == e ? (o.setValue(i.attr("val"), i.html()),
                            !1) : void 0
                    }
                }),
                    o.elem.find("li").bind("mouseenter", function(t) {
                        o.elem.find(".sel").removeClass("sel"),
                            $(this).addClass("sel")
                    }).bind("click", function(t) {
                        var e = $(this)
                            , i = e.attr("val");
                        if (o.opts.suggestSetting.getValFunc && o.opts.suggestSetting.getValFunc(i, e, a, o.value, n),
                            !o.opts.suggestSetting.isCityBj || 683039 != i)
                            return (o.opts.suggestSetting.isContinue || o.opts.suggestSetting.isContinue == undefined) && o.setValue(i, e.html()),
                            !0 === o.doCheck().bValid && !0 !== o.rows.getValidateStatus() && o.hideTips(),
                                o.publish(o.opts.name + ".valueChange", o.getValue()),
                            0 < o.elem.parents(".volatile_wrap").length && setTimeout(function() {
                                for (var t = o.elem.next(); t && t.hasClass("selectordef") && "none" === t.css("display") && t.next(); )
                                    t = t.next();
                                e.attr("val") && t && t.hasClass("selectordef") && t.focus()
                            }, 300),
                            0 < o.elem.parents(".optional_wrap").length && setTimeout(function() {
                                for (var t = o.elem.parents(".optional_wrap").next().find(".selectordef"); t && "none" === t.css("display") && 0 < t.parents(".optional_wrap").next().find(".selectordef").length; )
                                    t = t.parents(".optional_wrap").next().find(".selectordef");
                                e.attr("val") && t && t.hasClass("selectordef") && t.focus()
                            }, 300),
                                !1
                    }),
                    o.elem.click(function(t) {
                        "disabled" != o.elem.attr("disabled") && $(this).focus()
                    }),
                    o.elem.bind("blur", function() {
                        "disabled" != o.elem.attr("disabled") && (o.rows.containerElem.css("zIndex", ""),
                            o.block.containerElem.css("zIndex", ""),
                            o.elem.removeClass("focus"),
                            $(this).find(".optiondef").hide())
                    }),
                    o.elem.bind("focus", function(t) {
                        o.opts.suggestSetting.getEventClickFun && o.opts.suggestSetting.getEventClickFun($(this), a),
                        "disabled" != o.elem.attr("disabled") && (o.rows.containerElem.css("zIndex", 1800),
                            o.block.containerElem.css("zIndex", 1800),
                            o.elem.addClass("focus"),
                            $(this).find(".optiondef").show())
                    }),
                    o.elem.bind("mouseout", function() {
                        "disabled" != o.elem.attr("disabled") && (o.elem.removeClass("hover"),
                        o.opts.view.outBlur && o.elem.blur())
                    }),
                    o.elem.bind("mouseover", function() {
                        "disabled" != o.elem.attr("disabled") && (o.elem.addClass("hover"),
                        o.opts.view.overFocus && ($(this).find(".optiondef").show(),
                            o.elem.focus()))
                    })
            }
            ,
            i.prototype.focusTo = function() {
                this.container.focus()
            }
            ,
            i.prototype.setValue = function(t, e, i) {
                if (1 !== i || 0 === t || 0 != t) {
                    var n = !0;
                    if (this.opts.suggestSetting.getEventTypeVal && (n = this.opts.suggestSetting.getEventTypeVal(this.opts)),
                        "panshi_property_type" !== this.opts.name && t === this.getValue() && n)
                        this.container.blur();
                    else {
                        this.value = t,
                            this.text = e;
                        var a = !1;
                        if (this.data && this.data[0] && (this.data = this.data[0]),
                            this.data && this.data.values)
                            for (var o = 0; o < this.data.values.length; o++)
                                if (this.data.values[o].val == t) {
                                    a = !0,
                                        this.objVal = this.data.values[o],
                                    this.text && "" != this.text.length || (this.text = this.objVal.text);
                                    break
                                }
                        if ("" == t && (a = !0),
                            !1 === a)
                            return this.value = "",
                                void (this.text = "");
                        "" == t && (this.objVal = null),
                            this.container.triggerHandler("inputover"),
                            this.container.blur(),
                            2 === i ? this.opts.isFreeze || this.rows.show() : this.container.triggerHandler("autoSet"),
                            this.elem.find(".seled").html(this.text),
                            this.container.trigger("change", [this.getValue()]),
                        this.opts.suggestSetting.resetLocal && this.opts.suggestSetting.resetLocal(t, this.objVal, s)
                    }
                }
            }
            ,
            i.prototype.setValueId = function(t) {
                var e = t;
                if (null != e && "" != e) {
                    (i = this.elem.find("li[val=" + t + "]").html()) || (e = ""),
                        this.setValue(e, i)
                } else {
                    this.value = t;
                    var i = this.elem.find("li[val=" + t + "]").html();
                    this.setValue(e, i)
                }
            }
            ,
            i.prototype.getValue = function() {
                var t, e = this;
                1 == e.isEmptyShangquan && (t = e.opts.areaName ? n.records.get(e.opts.areaName) : n.records.get("localArea"),
                    e.value = t.getValue());
                return e.value
            }
            ,
            i.prototype.getText = function() {
                return "undefined" != typeof this.opts.view.placeholder && this.text != this.opts.view.placeholder ? this.text : ""
            }
            ,
            i.prototype.getNotFreezeText = function() {
                return this.opts.isFreeze || "undefined" == typeof this.opts.view.placeholder || this.text == this.opts.view.placeholder ? "" : this.text
            }
            ,
            i.prototype.setText = function(t) {
                this.elem.find(".seled").html(t),
                    this.text = t,
                    this.value = t
            }
            ,
            i.prototype.getCurValId = function() {
                for (var t = this.getValue(), e = null, i = 0; i < this.data.values.length; i++) {
                    var n = this.data.values[i];
                    if (n.val === t) {
                        e = n.valId;
                        break
                    }
                }
                return e
            }
            ,
            i.prototype.getObjValue = function() {
                return this.objVal
            }
            ,
            i.prototype.resetOption = function(t) {
                var i = this
                    , e = t && "undefined" != typeof t[0] && t[0];
                if ((null !== e && e.values || {}).length <= 0 && i.opts.suggestSetting.hideElement)
                    i.opts.suggestSetting.hideElement(i);
                else {
                    if (i.opts.suggestSetting.showElement && i.opts.suggestSetting.showElement(i),
                            t) {
                        var n = t;
                        if ("undefined" != typeof t[0])
                            n = t[0];
                        n.values && 0 == n.values.length ? "undefined" != typeof i.opts.canNull && 0 == i.opts.canNull && (i.isEmptyShangquan = !0) : i.opts.isFreeze = !1
                    }
                    if (t) {
                        if (!t.values) {
                            for (var a = 0; a < t.length; a++)
                                if (t[a].name == this.opts.name) {
                                    t = t[a];
                                    break
                                }
                            "yimiaozhonglei" === this.dataName && (this.isEmptyShangquan = !1,
                                this.container.show())
                        }
                        this.data = t.values;
                        var o, s = this.createOption(t);
                        if (this.elem.find(".optiondef").html(s),
                                o = this.elem.find("li[val=" + this.value + "]").html())
                            this.elem.find(".seled").html(o);
                        else
                            this.setValueId(""),
                            (o = this.elem.find("li[val='']").html()) && this.elem.find(".seled").html(o);
                        this.elem.find("li").bind("mouseenter", function(t) {
                            i.elem.find(".sel").removeClass("sel"),
                                $(this).addClass("sel")
                        }).bind("click", function(t) {
                            var e = $(t.target);
                            return i.setValue(e.attr("val"), e.html()),
                                i.doCheck(),
                            0 < i.elem.parents(".volatile_wrap").length && setTimeout(function() {
                                for (var t = i.elem.next(); t && t.hasClass("selectordef") && "none" === t.css("display") && t.next(); )
                                    t = t.next();
                                e.attr("val") && t && t.hasClass("selectordef") && t.focus()
                            }, 300),
                            0 < i.elem.parents(".optional_wrap").length && setTimeout(function() {
                                for (var t = i.elem.parents(".optional_wrap").next().find(".selectordef"); t && "none" === t.css("display") && 0 < t.parents(".optional_wrap").next().find(".selectordef").length; )
                                    t = t.parents(".optional_wrap").next().find(".selectordef");
                                e.attr("val") && t && t.hasClass("selectordef") && t.focus()
                            }, 300),
                                !1
                        })
                    } else {
                        "yimiaozhonglei" === this.dataName && (this.container.hide(),
                            this.opts.isFreeze = !0),
                            this.data = [],
                            this.elem.find(".optiondef").html(""),
                            this.setValueId("");
                        var r = "";
                        this.opts.view.hideOptionEmpty || this.opts.view.placeholder && 0 < this.opts.view.placeholder.length && (r = this.opts.view.placeholder),
                            this.elem.find(".seled").html(r)
                    }
                    "undefined" != typeof infoDetail && this.setValue(infoDetail[this.opts.dataName ? this.opts.dataName : this.opts.name])
                }
            }
            ,
            i.prototype.createOption = function(t) {
                if (t)
                    var e = t;
                else
                    e = this.data;
                if (e && e.id && (this.id = e.id),
                        !e)
                    return "";
                this.data = e;
                var i = "";
                if (!this.opts.view.hideOptionEmpty) {
                    i = "<li val=''>" + (this.opts.view.placeholder && 0 < this.opts.view.placeholder.length ? this.opts.view.placeholder : "请选择" + e.text || "") + "</li>"
                }
                var n = ""
                    , a = "<ul >";
                if ("" != (n = this.opts.view.optionsWidth && 0 < this.opts.view.optionsWidth.length ? this.opts.view.optionsWidth : parseInt(this.opts.view.width) - 3))
                    a = "<ul style='width:" + n + "px;'>";
                if (0 < i.length && (a += i),
                    e && e[0] && (e = e[0]),
                        e.values)
                    for (var o = 0; o < e.values.length; o++) {
                        var s = "";
                        if (!this.opts.suggestSetting.isCityBj || !this.opts.suggestSetting.biz || "经纪人" != e.values[o].text) {
                            e.values[o].val === this.value && (s = "sel");
                            var r = this.opts.suggestSetting.descObj;
                            if (e.values[o])
                                if (this.opts.suggestSetting.isNewView) {
                                    var c = r[e.values[o].val] || "";
                                    a += "<li val='" + e.values[o].val + "' tongji_tag='" + c.tongji + "' class='newlist " + s + c["class"] + "'><h4>" + e.values[o].text + "</h4><span>" + c.txt + "</span></li>"
                                } else
                                    a += "<li val='" + e.values[o].val + "' class='" + s + "'>" + e.values[o].text + "</li>"
                        }
                    }
                return a += "</ul>"
            }
            ,
            i.prototype.pageJump = function(t) {
                t && (window.location = t)
            }
            ,
            i.prototype.hide = function() {
                this.container.hide()
            }
            ,
            i.prototype.activate = function(t, e, i) {
                !this.data || !this.data.values || this.data.values.length < 1 || this.constructor.superclass.activate.apply(this, [t, e, i])
            }
            ,
            i.prototype.emptyText = function() {
                this.elem.find(".seled").html("请选择"),
                    this.text = "",
                    this.value = ""
            }
            ,
            i.prototype.changeRowTitle = function(t) {
                this.rows.changeTitle(t)
            }
            ,
            i.prototype.disable = function() {
                this.opts.disabled && (this.elem.attr("disabled", "disabled"),
                    this.elem.css({
                        color: "#ccc"
                    }))
            }
            ,
            i
    }),
    define("component/imgBox/js/imgBox", ["libs/json2.min", "util/postClickLog"], function(t, e) {
        function i(t) {
            this.opts = $.extend(!0, {}, this.constructor.defaultOpt, t);
            var e = "undefined" != typeof ____json4fe ? ____json4fe : undefined;
            this.category = e ? e.catentry[0].dispid + "," + e.catentry[1].dispid + "," + e.locallist.dispid : undefined,
                this.status = "init",
                this.logObj = {
                    from: "Post_PicUpload",
                    category: this.category,
                    resultState: "success",
                    uploadType: this.constructor.prototype.logObj.uploadType,
                    client: "pc",
                    zipBeginTime: "",
                    uploadBeginTime: "",
                    uploadEndTime: "",
                    thumbShowTime: "",
                    FileName: "",
                    beforeZipWeight: "",
                    beforeZipHeight: "",
                    beforeZipSize: "",
                    afterZipWeight: "",
                    afterZipHeight: "",
                    afterZipSize: ""
                },
                this.createElem()
        }
        return i.defaultOpt = {
            loadingUrl: window.location.protocol + "//img.58cdn.com.cn/ui7/post/pc/imgs/loading.gif",
            className: {
                container: "img_box",
                toolbar: "toolbar_wrap",
                prevBtn: "prev_pos",
                nextBtn: "next_pos",
                deleteBtn: "delete",
                editBtn: "edit"
            }
        },
            i.prototype.logObj = {
                uploadType: "",
                flashVersion: null
            },
            i.prototype.setLog = function(t, e) {
                this.logObj[t] = e
            }
            ,
            i.prototype.createElem = function() {
                var t = this.opts.className;
                this.container = $("<li>").addClass(t.container).data("indexId", this.opts.id),
                    this.container.attr("data-index", this.opts.id),
                    this.img = $("<img>").attr("src", this.opts.loadingUrl),
                    this.container.append(this.img),
                    this.container.append($("<div>").addClass("img_cover"))
            }
            ,
            i.prototype.getToolbarHtml = function() {
                var t = this.opts.className;
                if (this.opts.needEdit && this.opts.isSupportEdit)
                    var e = '<div class="' + t.toolbar + '">\t<div class="opacity"></div>\t<div class="toolbar">\t\t<a href="javascript:;" class="' + t.editBtn + '"></a>\t\t<a href="javascript:;" class="' + t.deleteBtn + '"></a>\t</div></div>';
                else
                    e = '<div class="' + t.toolbar + '">\t<div class="opacity"></div>\t<div class="toolbar">\t\t<a href="javascript:;" class="' + t.prevBtn + '"></a>\t\t<a href="javascript:;" class="' + t.nextBtn + '"></a>\t\t<a href="javascript:;" class="' + t.deleteBtn + '"></a>\t</div></div>';
                return e
            }
            ,
            i.prototype.appendTo = function(t) {
                this.container.appendTo(t)
            }
            ,
            i.prototype.setImageUrl = function(t, e) {
                var i = this;
                this.img.unbind("load").bind("load", function() {
                    i.setLog("thumbShowTime", (new Date).getTime()),
                    "initData" === i.status || e || i.sendLog()
                }),
                "success" === this.status && (t = t.replace(".jpg", "_130_100.jpg")),
                    this.img.attr("src", t),
                    this.container.attr("draggable", "true"),
                    this.container.append(this.getToolbarHtml()),
                    $(this.container).on("mousedown", "a", function(t) {
                        $(t.currentTarget).hasClass("edit") ? $(t.currentTarget).attr("id", "edit_active") : $(t.currentTarget).hasClass("delete") && $(t.currentTarget).attr("id", "delete_active")
                    }),
                    $(this.container).on("mouseup", "a", function(t) {
                        $(t.currentTarget).hasClass("edit") ? $(t.currentTarget).attr("id", "") : $(t.currentTarget).hasClass("delete") && $(t.currentTarget).attr("id", "")
                    });
                var n = t.split("/")
                    , a = n[n.length - 1].replace("_130_100.jpg", ".jpg");
                i.setLog("FileName", a)
            }
            ,
            i.prototype.destroy = function() {
                this.img.unbind("load"),
                    this.container.remove()
            }
            ,
            i.prototype.sendLog = function() {
                e.sendJson($.param(this.logObj))
            }
            ,
            i.prototype.setStatus = function(t) {
                this.status = t
            }
            ,
            i.prototype.forward = function() {
                this.container.insertBefore(this.container.prev())
            }
            ,
            i.prototype.backward = function() {
                this.container.insertAfter(this.container.next())
            }
            ,
            i.prototype.getValue = function() {
                return this.img.attr("src")
            }
            ,
            i.prototype.setValue = function(t) {
                this.img.attr("src", t)
            }
            ,
            i
    }),
    define("component/imgUpload/js/html5Process", [], function() {
        function t(t) {
            this.init(t)
        }
        return t.prototype = {
            constructor: t,
            init: function(t) {
                this.opts = $.extend(!0, {}, this.defaultOpts, t),
                    this.createElement(),
                    this.bindDomEvent()
            },
            createElement: function() {
                var t = this.opts;
                for (var e in this.container = $("<div>"),
                    this.container.addClass("html5"),
                    this.elem = $("<input>"),
                    this.elem.attr("type", "file"),
                    this.elem.attr("name", t.name),
                    this.elem.attr("multiple", "multiple"),
                    this.elem.attr("tabindex", t.tabIndex),
                    t.attr)
                    t.attr.hasOwnProperty(e) && this.elem.attr(e, t.attr[e]);
                this.container.append(this.elem)
            },
            render: function(t) {
                this.container.appendTo(t)
            },
            execute: function(t) {
                if (t.size > this.opts.disabledByteSize)
                    alert("上传的图片超过" + this.opts.disabledByteSize / 1024 / 1024 + "M，请重新上传");
                else if (t.size < 5120)
                    alert("上传的图片小于5K，请重新上传");
                else {
                    var e = this.opts.startIndex++;
                    this.opts.beforeCompress({
                        id: e,
                        fileName: t.name,
                        size: t.size
                    });
                    var i = this.opts.getImgNum();
                    if (!(i.hazNum > i.maxNum)) {
                        var n = URL.createObjectURL(t)
                            , a = new Image;
                        a.onload = this.getFinalImgData.bind(this, a, e, t),
                            a.src = n
                    }
                }
            },
            getFinalImgData: function(t, e, i) {
                var n, a = 100, o = 1, s = this.opts.widthHeight.max, r = this.opts.widthHeight.min;
                for (!0 === this.opts.defCompress.enable && i.size > this.opts.defCompress.maxSize && (a = this.opts.defCompress.quality,
                    n = this.compress(t, a, o)),
                     !0 === s.enable && (o = s.width / t.width < s.height / t.height ? s.width / t.width : s.height / t.height) < 1 && (n = this.compress(t, a, o)),
                     !0 === r.enable && t.width < r.width && t.height < r.height && (o = r.width / t.width < r.height / t.height ? r.width / t.width : r.height / t.height,
                         n = this.compress(t, a, o)); (this.getBase64Size(n) > this.opts.maxByteSize || i.size > this.opts.maxByteSize) && a > this.opts.powerZip.minQuality; )
                    a -= this.opts.powerZip.step,
                        n = this.compress(t, a, o);
                n || (n = this.compress(t)),
                    this.opts.compressComplete({
                        id: e,
                        size: this.getBase64Size(n),
                        originWidth: t.width,
                        originHeight: t.height,
                        width: t.width * o,
                        height: t.height * o
                    });
                Math.random(),
                    name;
                this.postImage(e, n, name)
            },
            getBase64Size: function(t) {
                return (t = t || "").length / 4 * 3
            },
            compress: function(t, e, i) {
                e = e || 100,
                    i = i || 1;
                var n, a = document.createElement("canvas");
                return a.width = t.width * i,
                    a.height = t.height * i,
                    a.getContext("2d").drawImage(t, 0, 0, a.width, a.height),
                    n = a.toDataURL("image/jpeg", e / 100),
                    a = null,
                    n.substring(22)
            },
            bindDomEvent: function() {
                var c = this;
                ____json4fe.catentry[0].dispid;
                c.elem.bind("change", function(t) {
                    for (var e = t.target.files, i = 0; i < e.length; i++) {
                        var n = e[i];
                        if (e[i].type.match("image.*")) {
                            for (var a = !1, o = c.opts.disableType, s = 0, r = o.length; s < r; s++)
                                if (-1 < e[i].type.indexOf(o[s])) {
                                    a = !0,
                                        alert("不支持" + o[s] + "格式的图片！");
                                    break
                                }
                            a || c.execute(n)
                        }
                    }
                }),
                    c.elem.bind("click", function() {
                        "function" == typeof clickLog && clickLog("from=pc_escpost_chuantu")
                    })
            },
            postImage: function(n, i, a) {
                var o = this;
                o.opts.beforeUpload({
                    id: n,
                    fileName: a
                });
                var t = ""
                    , s = "/p1/big/";
                ____json4fe && ____json4fe.catentry && 2 <= ____json4fe.catentry.length && 8 == (t = ____json4fe.catentry[1]).dispid && "zufang" == t.listname && (s = "/dwater/fang/big/");
                var e = {
                    "Pic-Size": "0*0",
                    "Pic-Encoding": "base64",
                    "Pic-Path": s,
                    "Pic-Data": i.substring(1)
                };
                $.ajax({
                    url: window.location.protocol + "//upload.58cdn.com.cn/json",
                    type: "POST",
                    data: JSON.stringify(e),
                    processData: !1,
                    success: function(t) {
                        var e = "data:image/jpeg;base64" + i;
                        t = window.location.protocol + "//pic1.58cdn.com.cn" + s + t;
                        o.opts.uploadComplete({
                            id: n,
                            url: t,
                            fileName: a,
                            imgData4Edit: e
                        }),
                            e = null
                    },
                    error: function(t, e, i) {
                        o.opts.uploadError({
                            id: n,
                            errorMsg: t.status + "&" + e + "&" + i
                        })
                    }
                })
            },
            disableUploadBtn: function() {
                this.elem.attr("disabled", "disabled")
            },
            enableUploadBtn: function() {
                this.elem.removeAttr("disabled")
            }
        },
            t
    }),
    define("libs/swfobject", [], function() {
        var U = function() {
            var c, l, d, p, r, h, v = "undefined", y = "object", u = "Shockwave Flash", f = "application/x-shockwave-flash", m = "SWFObjectExprInst", t = "onreadystatechange", g = window, b = document, w = navigator, _ = !1, a = [function() {
                _ ? function() {
                    var e = b.getElementsByTagName("body")[0]
                        , i = F(y);
                    i.setAttribute("type", f);
                    var n = e.appendChild(i);
                    if (n) {
                        var a = 0;
                        !function() {
                            if (typeof n.GetVariable != v) {
                                var t = n.GetVariable("$version");
                                t && (t = t.split(" ")[1].split(","),
                                    T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                            } else if (a < 10)
                                return a++,
                                    setTimeout(arguments.callee, 10);
                            e.removeChild(i),
                                n = null,
                                I()
                        }()
                    } else
                        I()
                }() : I()
            }
            ], C = [], x = [], s = [], o = !1, k = !1, n = !0, T = function() {
                var t = typeof b.getElementById != v && typeof b.getElementsByTagName != v && typeof b.createElement != v
                    , e = w.userAgent.toLowerCase()
                    , i = w.platform.toLowerCase()
                    , n = /win/.test(i || e)
                    , a = /mac/.test(i || e)
                    , o = !!/webkit/.test(e) && parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1"))
                    , s = !1
                    , r = [0, 0, 0]
                    , c = null;
                if (typeof w.plugins != v && typeof w.plugins[u] == y)
                    !(c = w.plugins[u].description) || typeof w.mimeTypes != v && w.mimeTypes[f] && !w.mimeTypes[f].enabledPlugin || (s = !(_ = !0),
                        c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
                        r[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10),
                        r[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
                        r[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if (typeof g.ActiveXObject != v)
                    try {
                        var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        l && (c = l.GetVariable("$version")) && (s = !0,
                            c = c.split(" ")[1].split(","),
                            r = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)])
                    } catch (d) {}
                return {
                    w3: t,
                    pv: r,
                    wk: o,
                    ie: s,
                    win: n,
                    mac: a
                }
            }();
            T.w3 && ((typeof b.readyState != v && "complete" == b.readyState || typeof b.readyState == v && (b.getElementsByTagName("body")[0] || b.body)) && e(),
            o || (typeof b.addEventListener != v && b.addEventListener("DOMContentLoaded", e, !1),
            T.ie && T.win && (b.attachEvent(t, function() {
                "complete" == b.readyState && (b.detachEvent(t, arguments.callee),
                    e())
            }),
            g == top && function() {
                if (!o) {
                    try {
                        b.documentElement.doScroll("left")
                    } catch (t) {
                        return setTimeout(arguments.callee, 0)
                    }
                    e()
                }
            }()),
            T.wk && function() {
                o || (/loaded|complete/.test(b.readyState) ? e() : setTimeout(arguments.callee, 0))
            }(),
                $(e)));
            function e() {
                if (!o) {
                    try {
                        var t = b.getElementsByTagName("body")[0].appendChild(F("span"));
                        t.parentNode.removeChild(t)
                    } catch (n) {
                        return
                    }
                    o = !0;
                    for (var e = a.length, i = 0; i < e; i++)
                        a[i]()
                }
            }
            function i(t) {
                o ? t() : a[a.length] = t
            }
            function $(t) {
                if (typeof g.addEventListener != v)
                    g.addEventListener("load", t, !1);
                else if (typeof b.addEventListener != v)
                    b.addEventListener("load", t, !1);
                else if (typeof g.attachEvent != v)
                    n = "onload",
                        a = t,
                        (i = g).attachEvent(n, a),
                        s[s.length] = [i, n, a];
                else if ("function" == typeof g.onload) {
                    var e = g.onload;
                    g.onload = function() {
                        e(),
                            t()
                    }
                } else
                    g.onload = t;
                var i, n, a
            }
            function I() {
                var t = C.length;
                if (0 < t)
                    for (var e = 0; e < t; e++) {
                        var i = C[e].id
                            , n = C[e].callbackFn
                            , a = {
                            success: !1,
                            id: i
                        };
                        if (0 < T.pv[0]) {
                            var o = A(i);
                            if (o)
                                if (!V(C[e].swfVersion) || T.wk && T.wk < 312)
                                    if (C[e].expressInstall && S()) {
                                        var s = {};
                                        s.data = C[e].expressInstall,
                                            s.width = o.getAttribute("width") || "0",
                                            s.height = o.getAttribute("height") || "0",
                                        o.getAttribute("class") && (s.styleclass = o.getAttribute("class")),
                                        o.getAttribute("align") && (s.align = o.getAttribute("align"));
                                        for (var r = {}, c = o.getElementsByTagName("param"), l = c.length, d = 0; d < l; d++)
                                            "movie" != c[d].getAttribute("name").toLowerCase() && (r[c[d].getAttribute("name")] = c[d].getAttribute("value"));
                                        j(s, r, i, n)
                                    } else
                                        D(o),
                                        n && n(a);
                                else
                                    O(i, !0),
                                    n && (a.success = !0,
                                        a.ref = E(i),
                                        n(a))
                        } else if (O(i, !0),
                                n) {
                            var p = E(i);
                            p && typeof p.SetVariable != v && (a.success = !0,
                                a.ref = p),
                                n(a)
                        }
                    }
            }
            function E(t) {
                var e = null
                    , i = A(t);
                if (i && "OBJECT" == i.nodeName)
                    if (typeof i.SetVariable != v)
                        e = i;
                    else {
                        var n = i.getElementsByTagName(y)[0];
                        n && (e = n)
                    }
                return e
            }
            function S() {
                return !k && V("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
            }
            function j(t, e, i, n) {
                d = n || null,
                    p = {
                        success: !(k = !0),
                        id: i
                    };
                var a = A(i);
                if (a) {
                    "OBJECT" == a.nodeName ? (c = L(a),
                        l = null) : (c = a,
                        l = i),
                        t.id = m,
                    (typeof t.width == v || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) && (t.width = "310"),
                    (typeof t.height == v || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) && (t.height = "137"),
                        b.title = b.title.slice(0, 47) + " - Flash Player Installation";
                    var o = T.ie && T.win ? "ActiveX" : "PlugIn"
                        , s = "MMredirectURL=" + encodeURI(window.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + o + "&MMdoctitle=" + b.title;
                    if (typeof e.flashvars != v ? e.flashvars += "&" + s : e.flashvars = s,
                        T.ie && T.win && 4 != a.readyState) {
                        var r = F("div");
                        i += "SWFObjectNew",
                            r.setAttribute("id", i),
                            a.parentNode.insertBefore(r, a),
                            a.style.display = "none",
                            function() {
                                4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
                            }()
                    }
                    M(t, e, i)
                }
            }
            function D(t) {
                if (T.ie && T.win && 4 != t.readyState) {
                    var e = F("div");
                    t.parentNode.insertBefore(e, t),
                        e.parentNode.replaceChild(L(t), e),
                        t.style.display = "none",
                        function() {
                            4 == t.readyState ? t.parentNode.removeChild(t) : setTimeout(arguments.callee, 10)
                        }()
                } else
                    t.parentNode.replaceChild(L(t), t)
            }
            function L(t) {
                var e = F("div");
                if (T.win && T.ie)
                    e.innerHTML = t.innerHTML;
                else {
                    var i = t.getElementsByTagName(y)[0];
                    if (i) {
                        var n = i.childNodes;
                        if (n)
                            for (var a = n.length, o = 0; o < a; o++)
                                1 == n[o].nodeType && "PARAM" == n[o].nodeName || 8 == n[o].nodeType || e.appendChild(n[o].cloneNode(!0))
                    }
                }
                return e
            }
            function M(t, e, i) {
                var n, a = A(i);
                if (T.wk && T.wk < 312)
                    return n;
                if (a)
                    if (typeof t.id == v && (t.id = i),
                        T.ie && T.win) {
                        var o = "";
                        for (var s in t)
                            t[s] != Object.prototype[s] && ("data" == s.toLowerCase() ? e.movie = t[s] : "styleclass" == s.toLowerCase() ? o += ' class="' + t[s] + '"' : "classid" != s.toLowerCase() && (o += " " + s + '="' + t[s] + '"'));
                        var r = "";
                        for (var c in e)
                            e[c] != Object.prototype[c] && (r += '<param name="' + c + '" value="' + e[c] + '" />');
                        a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + r + "</object>",
                            x[x.length] = t.id,
                            n = A(t.id)
                    } else {
                        var l = F(y);
                        for (var d in l.setAttribute("type", f),
                            t)
                            t[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? l.setAttribute("class", t[d]) : "classid" != d.toLowerCase() && l.setAttribute(d, t[d]));
                        for (var p in e)
                            e[p] != Object.prototype[p] && "movie" != p.toLowerCase() && z(l, p, e[p]);
                        a.parentNode.replaceChild(l, a),
                            n = l
                    }
                return n
            }
            function z(t, e, i) {
                var n = F("param");
                n.setAttribute("name", e),
                    n.setAttribute("value", i),
                    t.appendChild(n)
            }
            function P(t) {
                var e = A(t);
                e && "OBJECT" == e.nodeName && (T.ie && T.win ? (e.style.display = "none",
                    function() {
                        4 == e.readyState ? function(t) {
                            var e = A(t);
                            if (e) {
                                for (var i in e)
                                    "function" == typeof e[i] && (e[i] = null);
                                e.parentNode.removeChild(e)
                            }
                        }(t) : setTimeout(arguments.callee, 10)
                    }()) : e.parentNode.removeChild(e))
            }
            function A(t) {
                var e = null;
                try {
                    e = b.getElementById(t)
                } catch (i) {}
                return e
            }
            function F(t) {
                return b.createElement(t)
            }
            function V(t) {
                var e = T.pv
                    , i = t.split(".");
                return i[0] = parseInt(i[0], 10),
                    i[1] = parseInt(i[1], 10) || 0,
                    i[2] = parseInt(i[2], 10) || 0,
                e[0] > i[0] || e[0] == i[0] && e[1] > i[1] || e[0] == i[0] && e[1] == i[1] && e[2] >= i[2]
            }
            function N(t, e, i, n) {
                if (!T.ie || !T.mac) {
                    var a = b.getElementsByTagName("head")[0];
                    if (a) {
                        var o = i && "string" == typeof i ? i : "screen";
                        if (n && (h = r = null),
                            !r || h != o) {
                            var s = F("style");
                            s.setAttribute("type", "text/scss"),
                                s.setAttribute("media", o),
                                r = a.appendChild(s),
                            T.ie && T.win && typeof b.styleSheets != v && 0 < b.styleSheets.length && (r = b.styleSheets[b.styleSheets.length - 1]),
                                h = o
                        }
                        T.ie && T.win ? r && typeof r.addRule == y && r.addRule(t, e) : r && typeof b.createTextNode != v && r.appendChild(b.createTextNode(t + " {" + e + "}"))
                    }
                }
            }
            function O(t, e) {
                if (n) {
                    var i = e ? "visible" : "hidden";
                    o && A(t) ? A(t).style.visibility = i : N("#" + t, "visibility:" + i)
                }
            }
            function B(t) {
                return null != /[\\\"<>\.;]/.exec(t) && typeof encodeURIComponent != v ? encodeURIComponent(t) : t
            }
            T.ie && T.win && window.attachEvent("onunload", function() {
                for (var t = s.length, e = 0; e < t; e++)
                    s[e][0].detachEvent(s[e][1], s[e][2]);
                for (var i = x.length, n = 0; n < i; n++)
                    P(x[n]);
                for (var a in T)
                    T[a] = null;
                for (var o in T = null,
                    U)
                    U[o] = null;
                U = null
            });
            return {
                registerObject: function(t, e, i, n) {
                    if (T.w3 && t && e) {
                        var a = {};
                        a.id = t,
                            a.swfVersion = e,
                            a.expressInstall = i,
                            a.callbackFn = n,
                            C[C.length] = a,
                            O(t, !1)
                    } else
                        n && n({
                            success: !1,
                            id: t
                        })
                },
                getObjectById: function(t) {
                    if (T.w3)
                        return E(t)
                },
                embedSWF: function(s, r, c, l, d, p, h, u, f, m) {
                    var g = {
                        success: !1,
                        id: r
                    };
                    T.w3 && !(T.wk && T.wk < 312) && s && r && c && l && d ? (O(r, !1),
                        i(function() {
                            c += "",
                                l += "";
                            var t = {};
                            if (f && typeof f === y)
                                for (var e in f)
                                    t[e] = f[e];
                            t.data = s,
                                t.width = c,
                                t.height = l;
                            var i = {};
                            if (u && typeof u === y)
                                for (var n in u)
                                    i[n] = u[n];
                            if (h && typeof h === y)
                                for (var a in h)
                                    typeof i.flashvars != v ? i.flashvars += "&" + a + "=" + h[a] : i.flashvars = a + "=" + h[a];
                            if (V(d)) {
                                var o = M(t, i, r);
                                t.id == r && O(r, !0),
                                    g.success = !0,
                                    g.ref = o
                            } else {
                                if (p && S())
                                    return t.data = p,
                                        void j(t, i, r, m);
                                O(r, !0)
                            }
                            m && m(g)
                        })) : m && m(g)
                },
                switchOffAutoHideShow: function() {
                    n = !1
                },
                ua: T,
                getFlashPlayerVersion: function() {
                    return {
                        major: T.pv[0],
                        minor: T.pv[1],
                        release: T.pv[2]
                    }
                },
                hasFlashPlayerVersion: V,
                createSWF: function(t, e, i) {
                    return T.w3 ? M(t, e, i) : undefined
                },
                showExpressInstall: function(t, e, i, n) {
                    T.w3 && S() && j(t, e, i, n)
                },
                removeSWF: function(t) {
                    T.w3 && P(t)
                },
                createCSS: function(t, e, i, n) {
                    T.w3 && N(t, e, i, n)
                },
                addDomLoadEvent: i,
                addLoadEvent: $,
                getQueryParamValue: function(t) {
                    var e = b.location.search || b.location.hash;
                    if (e) {
                        if (/\?/.test(e) && (e = e.split("?")[1]),
                            null == t)
                            return B(e);
                        for (var i = e.split("&"), n = 0; n < i.length; n++)
                            if (i[n].substring(0, i[n].indexOf("=")) == t)
                                return B(i[n].substring(i[n].indexOf("=") + 1))
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (k) {
                        var t = A(m);
                        t && c && (t.parentNode.replaceChild(c, t),
                        l && (O(l, !0),
                        T.ie && T.win && (c.style.display = "block")),
                        d && d(p)),
                            k = !1
                    }
                }
            }
        }();
        return U
    }),
    define("component/imgUpload/js/flashProcess", ["libs/swfobject", "libs/json2.min"], function(a, t) {
        var e = "/p1/big/"
            , i = "";
        function n(t) {
            SWFUP.opts = $.extend(!0, {}, this.opts, t)
        }
        return ____json4fe && ____json4fe.catentry && 2 <= ____json4fe.catentry.length && 8 == (i = ____json4fe.catentry[1]).dispid && "zufang" == i.listname && (e = "/dwater/fang/big/"),
            n.prototype.render = function(t) {
                var e = window.location.protocol + "//img.58cdn.com.cn/ui7/fang/post/img/playerProductInstall.swf"
                    , i = {
                    quality: "high",
                    bgcolor: "#ffffff",
                    allowscriptaccess: "always",
                    allowfullscreen: "false",
                    wmode: "opaque"
                }
                    , n = {
                    id: "PictureUpload",
                    name: "PictureUpload",
                    align: "center"
                };
                a.embedSWF(window.location.protocol + "//img.58cdn.com.cn/ui7/post/PictureUpload_postv1.swf", t.attr("id"), "96", "90", "10.2.0", e, {}, i, n),
                    a.createCSS("#flashContent", "display:block;text-align:center;")
            }
            ,
            n.prototype.enableUploadBtn = function() {
                try {
                    SWFUP.getSWF(SWFUP.name).setImgUpAble(!0)
                } catch (e) {
                    var t = arguments.callee;
                    window.setTimeout(t, 3e3)
                }
            }
            ,
            n.prototype.disableUploadBtn = function() {
                try {
                    SWFUP.getSWF(SWFUP.name).setImgUpAble(!1)
                } catch (e) {
                    var t = arguments.callee;
                    window.setTimeout(t, 3e3)
                }
            }
            ,
            window.SWFUP = {
                url: window.location.protocol + "//upload.58cdn.com.cn",
                picpath: e,
                picsize: "640*0,240*0,100*75*3",
                picbulk: "0,0,0",
                dpi: "0,0,0",
                piccut: "0*0*0*0,0*0*0*0,0*0*100*75",
                picwater: "True,False,False",
                extension: "jpg",
                btImg0: window.location.protocol + "//img.58cdn.com.cn/ui7/post/pc/imgs/upload-large.jpg",
                btImg1: window.location.protocol + "//img.58cdn.com.cn/ui7/post/pc/imgs/upload-large-hover.jpg",
                btImg2: window.location.protocol + "//img.58cdn.com.cn/ui7/post/pc/imgs/upload-large-disabled.jpg",
                btImg3: window.location.protocol + "//img.58cdn.com.cn/ui7/post/pc/imgs/upload-large.jpg",
                picMaxSize: 10485760,
                paralleNum: 3,
                getFlashBtn: function() {},
                getImgNum: function() {
                    return this.opts.getImgNum()
                },
                getUpsetting: function() {
                    return {
                        url: this.url,
                        picpath: this.picpath,
                        picsize: this.picsize,
                        picbulk: this.picbulk,
                        dpi: this.dpi,
                        piccut: this.piccut,
                        picwater: this.picwater,
                        extension: this.extension,
                        btImg0: this.btImg0,
                        btImg1: this.btImg1,
                        btImg2: this.btImg2,
                        btImg3: this.btImg3,
                        picMaxSize: this.picMaxSize,
                        disableType: this.opts.disableType,
                        compressOpt: {
                            maxByteSize: this.opts.maxByteSize,
                            defCompress: this.opts.defCompress,
                            widthHeight: this.opts.widthHeight,
                            powerZip: this.opts.powerZip
                        }
                    }
                },
                beginAdd: function(t) {
                    return this.generateId(t.num)
                },
                generateId: function(t) {
                    for (var e = -1, i = [], n = 0; n < t; n++)
                        e = this.opts.startIndex++,
                            this.opts.beforeCompress({
                                id: e
                            }),
                            i.push(e);
                    return i
                },
                addImg: function(t) {
                    var e = this.picpath.split(",")
                        , i = window.location.protocol + "//pic1.58cdn.com.cn" + e[0] + t.picName;
                    this.opts.uploadComplete({
                        id: t.code,
                        url: i,
                        fileName: t.picName
                    })
                },
                addImgLoad: function() {},
                getSWF: function(t) {
                    return -1 != navigator.appName.indexOf("Microsoft") ? document.getElementById(t) : document[t]
                },
                delImg: function(t) {
                    SWFUP.getSWF(SWFUP.name).imgDel(t)
                },
                showError: function(t) {
                    this.opts.uploadError({
                        id: t.infoCode
                    })
                },
                scrollFunc: function() {},
                initFlashBtn: function(t) {
                    t.name && (this.name = t.name)
                },
                setUpstate: function(t) {
                    this.opts.beforeUpload({
                        id: t.code
                    })
                }
            },
            n
    }),
    define("component/imgUpload/js/formProcess", [], function() {
        var s = {
            url: "",
            picSize: -1,
            picurl: "p1",
            createIframe: function() {},
            addImg: function(t, e, i) {
                1 == t ? (e = window.location.protocol + "//pic1.58cdn.com.cn/" + s.picurl + "/big" + e.substr(e.lastIndexOf("/")),
                    s.opts.uploadComplete({
                        url: e,
                        id: i
                    })) : s.opts.uploadError({
                    id: i
                }),
                    $("iframe[name='frmUpload_" + i + "']").remove()
            },
            addImgLoad: function() {
                if ("" != $(this).val()) {
                    var t = 1e3 * Math.random();
                    if (s.getFileSize($("#fileUploadInput")[0])) {
                        if (0 < s.picSize) {
                            if (s.picSize > s.opts.maxByteSize)
                                return alert("不能上传大于" + s.opts.maxByteSize / 1024 / 1024 + "M的图片"),
                                    void s.setFilePos();
                            for (var e = !1, i = s.opts.disableType, n = s.picType, a = 0, o = i.length; a < o; a++)
                                if (-1 < n.indexOf(i[a])) {
                                    e = !0,
                                        alert("不支持" + i[a] + "格式的图片！");
                                    break
                                }
                            if (e)
                                return
                        }
                        s.initForm({
                            code: t
                        })
                    } else
                        setTimeout(function() {
                            if (0 < s.picSize && s.picSize > s.opts.maxByteSize)
                                return alert("不能上传大于" + s.opts.maxByteSize / 1024 / 1024 + "M的图片"),
                                    void s.setFilePos();
                            s.initForm({
                                code: t
                            })
                        }, 700);
                    s.setFilePos()
                }
            },
            initForm: function(t) {
                s.opts.beforeCompress({
                    id: t.code
                }),
                    $("#backFunction").after('<iframe width="1" height="1" name="frmUpload_' + t.code + '" ></iframe>'),
                    $("#SINGLEUP")[0].target = "frmUpload_" + t.code,
                    $("#PicPos").val(t.code),
                    $("#SINGLEUP").submit()
            },
            enableSingleBtn: function() {
                s.content.removeClass("w_localn").addClass("w_local"),
                    s.btnCon.show()
            },
            disableSingleBtn: function() {
                s.content.removeClass("w_local").addClass("w_localn"),
                    s.btnCon.hide()
            },
            delImg: function() {
                s.setFilePos()
            },
            setFilePos: function() {},
            getFileSize: function(t) {
                var e = !1;
                try {
                    if (t.files)
                        s.picSize = t.files[0].size,
                            s.picType = t.files[0].type,
                            e = !0;
                    else {
                        var i = new Image;
                        i.onload = function() {
                            s.picSize = i.fileSize,
                                i.onload = i.onerror = null,
                                delete i
                        }
                            ,
                            i.onerror = function() {
                                s.picSize = -1,
                                    i.onload = i.onerror = null,
                                    delete i
                            }
                            ,
                            i.src = t.value
                    }
                } catch (n) {
                    s.picSize = -1
                }
                return e
            },
            initBtn: function(t) {
                if (s.url = t.url,
                    $("#SINGLEUP").length <= 0) {
                    var e = ['<form id="SINGLEUP" name="SINGLEUP" method="post" target="frmUpload_' + t.code + '" action="' + s.url + '" enctype="multipart/form-data">', '<span style="display:none"><input type="text" id="name" name="name" value="Jeky" />', '<input type="hidden" id="backFunction" name="backFunction" value="SINGLEUP.addImg" /><input type="hidden" name="__pic_dir" value="' + s.picurl + '" />', '<input type="hidden" name="PicPos" id="PicPos" value="' + t.code + '" /></span>', '<div id="singleCon" style="position:absolute;overflow:hidden"><input type="file" name="fileUploadInput" id="fileUploadInput" style="cursor:pointer" ></div></form>'];
                    s.content.append(e.join(""))
                }
                $("#fileUploadInput").change(s.addImgLoad),
                    s.content = $(),
                    s.content.html(""),
                    s.content.mouseover(s.setFilePos),
                    $("#singleCon").mouseover(s.setFilePos),
                    s.btnCon = $("#singleCon"),
                    s.btnCon.css({
                        width: "120px",
                        height: "125px"
                    }),
                    s.setFilePos(),
                    s.upbtn = $("#fileUploadInput"),
                    s.upbtn.mouseover(function(t) {
                        s.content.css({
                            color: "#000",
                            "text-decoration": "none"
                        })
                    }).mouseout(function(t) {
                        s.content.css({
                            color: "#666",
                            "text-decoration": "none"
                        })
                    })
            }
        };
        function t(t) {
            s.opts = t
        }
        return window.SINGLEUP = {
            addImg: s.addImg
        },
            t.prototype.render = function(t) {
                s.content = t,
                    s.initBtn({
                        url: window.location.protocol + "//postimage.58.com/upload"
                    })
            }
            ,
            t
    }),
    define("component/imgUpload/js/wxProcess", [], function() {
        function t(t) {
            this.opts = {
                containerSelector: "."
            },
                this.opts = $.extend(!0, {}, this.opts, t),
                this.init()
        }
        return t.prototype.init = function() {
            this.cachedImages = [],
                this.needAddImages = [],
                this.createElem()
        }
            ,
            t.prototype.createElem = function() {
                this.container = $("<div>").addClass("wx_img_wrap"),
                    this.img = $("<img>").css({
                        width: 94,
                        height: 94
                    });
                var t = $('<div class="wxTxt">').html('使用<i class="wx">微信</i>扫描左侧二维码<br>关注58公众号后<br>将图片<i class="fs">发送</i>给公众号即可传图');
                this.container.append(this.img),
                    this.container.append(t)
            }
            ,
            t.prototype.requestQRCode = function(i) {
                var n = this;
                $.ajax({
                    url: window.location.protocol + "//weixin.58.com/sns/upimg/show?uptype=release",
                    type: "get",
                    dataType: "jsonp",
                    success: function(t) {
                        n.scenestr = t.scenestr;
                        var e = t.url;
                        e && (e = e.replace(/https?:\/\//, window.location.protocol + "//")),
                            n.img.attr("src", e),
                        "function" == typeof i && i(),
                            setTimeout(function() {
                                n.requestQRCode()
                            }, 9e5)
                    },
                    error: function(t) {}
                })
            }
            ,
            t.prototype.requestImages = function() {
                var a = this
                    , o = ____json4fe.catentry[0].dispid;
                $.ajax({
                    url: window.location.protocol + "//weixin.58.com/sns/upimg/list?scenestr=" + a.scenestr,
                    type: "get",
                    dataType: "jsonp",
                    jsonp: "callback",
                    success: function(t) {
                        if (t.url && 0 < t.url.length) {
                            if ("1" == o) {
                                for (var e = t.url.length, i = [], n = 0; n < e; n++)
                                    -1 < t.url[n].indexOf(".gif") ? alert("请上传 jpg/jpeg/png格式的图片！") : i.push(t.url[n]);
                                t.url = i
                            }
                            a.needAddImages = a.array_diff(t.url, a.cachedImages),
                            0 < a.needAddImages.length && a.addImages(),
                                a.cachedImages = t.url
                        }
                        a.requestImages()
                    },
                    error: function(t) {
                        a.requestImages()
                    }
                })
            }
            ,
            t.prototype.addImages = function() {
                for (var t = this, e = 0, i = t.needAddImages.length; e < i; e++) {
                    var n = {
                        id: "wx_" + t.opts.startIndex++,
                        url: window.location.protocol + "//pic1.58cdn.com.cn" + t.needAddImages[e]
                    };
                    if (t.opts.isExceed(n))
                        return void t.abortQuery();
                    t.opts.beforeCompress(n),
                        t.opts.uploadComplete(n)
                }
            }
            ,
            t.prototype.abortQuery = function() {
                $.ajax({
                    url: window.location.protocol + "//weixin.58.com/sns/upimg/alert?scenestr=" + this.scenestr,
                    type: "get",
                    dataType: "jsonp",
                    jsonp: "callback",
                    success: function(t) {}
                })
            }
            ,
            t.prototype.array_diff = function(t, e) {
                for (var i = {}, n = 0, a = e.length; n < a; n++)
                    i[e[n]] = !0;
                var o = [];
                for (n = 0,
                         a = t.length; n < a; n++) {
                    var s = t[n];
                    i[s] || o.push(s)
                }
                return o
            }
            ,
            t.prototype.render = function(t) {
                this.intervalId = null;
                var e = this;
                e.container.appendTo(t),
                    e.intervalId = setInterval(function() {
                        !0 === window.FE58.UEEditorDone && (e.requestQRCode(function() {
                            e.requestImages()
                        }),
                            clearInterval(e.intervalId),
                            e.intervalId = null)
                    }, 1e3)
            }
            ,
            t
    }),
    define("component/imgUpload/js/qqProcess", [], function() {
        function t(t) {
            this.opts = {
                containerSelector: "."
            },
                this.opts = $.extend(!0, {}, this.opts, t),
                this.init()
        }
        return t.prototype.init = function() {
            this.cachedImages = [],
                this.needAddImages = [],
                this.createElem()
        }
            ,
            t.prototype.createElem = function() {
                this.container = $("<div>").addClass("qq_img_wrap"),
                    this.img = $("<img>").css({
                        width: 94,
                        height: 94
                    });
                var t = $('<div class="qqTxt">').html('使用<i class="sjqq">手机QQ</i>扫描左侧二维码<br>关注58公众号后<br>将图片<i class="fs">发送</i>给公众号即可传图');
                this.container.append(this.img),
                    this.container.append(t)
            }
            ,
            t.prototype.requestQRCode = function(i) {
                var n = this;
                $.ajax({
                    url: window.location.protocol + "//qq.58.com/sns/upimg/show?uptype=release",
                    type: "get",
                    dataType: "jsonp",
                    success: function(t) {
                        n.scenestr = t.scenestr;
                        var e = t.url;
                        e && (e = e.replace(/https?:\/\//, window.location.protocol + "//")),
                            n.img.attr("src", e),
                        "function" == typeof i && i(),
                            setTimeout(function() {
                                n.requestQRCode()
                            }, 18e5)
                    },
                    error: function(t) {}
                })
            }
            ,
            t.prototype.requestImages = function() {
                var a = this
                    , o = ____json4fe.catentry[0].dispid;
                $.ajax({
                    url: window.location.protocol + "//qq.58.com/sns/upimg/list?scenestr=" + a.scenestr,
                    type: "get",
                    dataType: "jsonp",
                    jsonp: "callback",
                    success: function(t) {
                        if (t.url && 0 < t.url.length) {
                            var e = t.url.length
                                , i = [];
                            if ("1" == o) {
                                for (var n = 0; n < e; n++)
                                    -1 < t.url[n].indexOf(".gif") ? alert("请上传 jpg/jpeg/png格式的图片！") : i.push(t.url[n]);
                                t.url = i
                            }
                            a.needAddImages = a.array_diff(t.url, a.cachedImages),
                            0 < a.needAddImages.length && a.addImages(),
                                a.cachedImages = t.url
                        }
                        a.requestImages()
                    },
                    error: function(t) {
                        a.requestImages()
                    }
                })
            }
            ,
            t.prototype.addImages = function() {
                for (var t = this, e = 0, i = t.needAddImages.length; e < i; e++) {
                    var n = {
                        id: "qq_" + t.opts.startIndex++,
                        url: t.needAddImages[e]
                    };
                    if (t.opts.isExceed(n))
                        return void t.abortQuery();
                    t.opts.beforeCompress(n),
                        t.opts.uploadComplete(n)
                }
            }
            ,
            t.prototype.abortQuery = function() {
                $.ajax({
                    url: window.location.protocol + "//qq.58.com/sns/upimg/alert?scenestr=" + this.scenestr,
                    type: "get",
                    dataType: "jsonp",
                    jsonp: "callback",
                    success: function(t) {}
                })
            }
            ,
            t.prototype.array_diff = function(t, e) {
                for (var i = {}, n = 0, a = e.length; n < a; n++)
                    i[e[n]] = !0;
                var o = [];
                for (n = 0,
                         a = t.length; n < a; n++) {
                    var s = t[n];
                    i[s] || o.push(s)
                }
                return o
            }
            ,
            t.prototype.render = function(t) {
                this.intervalId = null;
                var e = this;
                e.container.appendTo(t),
                    e.intervalId = setInterval(function() {
                        !0 === window.FE58.UEEditorDone && (e.requestQRCode(function() {
                            e.requestImages()
                        }),
                            clearInterval(e.intervalId),
                            e.intervalId = null)
                    }, 1500)
            }
            ,
            t
    }),
    define("component/editPic/js/editPic", [], function() {
        function t(t) {
            this.defaultopts = {
                url: "",
                indexId: "",
                item: "",
                degree: -90,
                lineWeight: [5, 10, 15]
            },
                this.opts = $.extend(!0, {}, this.defaultopts, t),
                this.canvas = "",
                this.context = "",
                this.editFrame = "",
                this.canvasFrame = "",
                this.clipFrame = "",
                this.emptyEditHistory(),
                this.hasSendUv = !1,
                this.init()
        }
        return t.prototype = {
            init: function() {
                var t = this
                    , e = "EVENT_OF_BIND_DOM_EVENT";
                $("body").bind(e, function() {
                    t.bindDomEvent()
                }),
                    t.createDom(e),
                    t.initDone()
            },
            emptyEditHistory: function() {
                this.editHistory = [],
                    this.currentEditObj = {
                        editType: "",
                        initImg: ""
                    },
                    this.mosaicAble = !1,
                    this.clipAble = !1,
                    this.initSuccess = !1,
                    this.resizeRate = 1,
                    this.clipOpenTime = null,
                    this.clipCompleteTime = null
            },
            initDone: function() {
                var t = this;
                $("body").bind("selectstart", function() {
                    return !1
                }),
                    t.changeWindowScroll("forbid"),
                    t.listenOptionsShow("start"),
                    setTimeout(function() {
                        t.initSuccess || "none" == $("#editFrame").css("display") || (alert("图片初始化失败，请重试"),
                            t.hideEditFrame())
                    }, 2e4)
            },
            resetImgItem: function(t) {
                var e = this;
                e.opts = $.extend(!0, {}, e.defaultopts, t),
                    $("#shadeFrame").show(),
                    $(e.editFrame).show(),
                    $(e.loadingTip).show(),
                    e.emptyEditHistory(),
                    e.initResizeCanvas(),
                    $(e.btn.restoreBtn).addClass("restoreDisable"),
                    $(e.btn.clipBtn).attr("class", "button1 clipDefault"),
                    $(e.btn.rotateBtn).attr("class", "button1 rotateDefault"),
                    $(e.btn.mosaicBtn).attr("class", "button1 mosaicDefault"),
                    e.initDone()
            },
            createDom: function(t) {
                var e = this;
                $("body").append('<div id="shadeFrame"></div><div id="editFrame"><div class="editTitle"><span>编辑图片</span><div id="btnClose"></div></div><div id="canvasFrame"><canvas id="canvas">你的浏览器不支持编辑功能</canvas><span id="loadingTip">图片加载中……</span></div><div class="buttonBar"><div class="lineWeightOptions"><div class="listIcon"><div class=""></div></div><div class="options"><div class="sLine"><span></span> 小范围</div><div class="mLine"><span></span> 中范围</div><div class="bLine"><span></span> 大范围</div></div></div><div class="editBtnBar"><div class="button1 rotateDefault" id="rotate"><div class="editBtnIcon"></div><span>旋转</span></div><div class="button1 clipDefault" id="clip"><div class="editBtnIcon"></div><span>剪裁</span></div><div class="button1 mosaicDefault" id="mosaic"><div class="editBtnIcon"></div><span>模糊</span></div></div><div id="restore" class="restoreDisable"><div class="restoreIcon"></div><span>撤销</span></div></div><div id="submitImage">完成</div></div>'),
                    e.canvas = document.getElementById("canvas"),
                    e.canvasFrame = document.getElementById("canvasFrame"),
                    e.editFrame = document.getElementById("editFrame"),
                    e.loadingTip = document.getElementById("loadingTip");
                try {
                    e.context = e.canvas.getContext("2d")
                } catch (i) {
                    return alert("你的浏览器不支持图片编辑功能，请升级浏览器或使用其他浏览器重试"),
                        void e.hideEditFrame()
                }
                e.btn = {
                    clipBtn: document.getElementById("clip"),
                    rotateBtn: document.getElementById("rotate"),
                    mosaicBtn: document.getElementById("mosaic"),
                    restoreBtn: document.getElementById("restore"),
                    submitBtn: document.getElementById("submitImage"),
                    closeBtn: document.getElementById("btnClose")
                },
                    e.initResizeCanvas(t)
            },
            bindDomEvent: function() {
                var n = this;
                function t(t) {
                    if (n.initSuccess) {
                        var e = $(this).attr("id");
                        $(this).hasClass(e + "Click") || $(this).addClass(e + "Hover")
                    }
                }
                function e(t) {
                    if (n.initSuccess) {
                        var e = $(this).attr("id");
                        $(this).removeClass(e + "Hover")
                    }
                }
                function i(t) {
                    if (n.initSuccess) {
                        var e = $(this).attr("id");
                        n.setEditBtnStyle(t),
                        "mosaic" != e && (n.setCursorAndBtn(),
                            n.mosaicAble = !1,
                            $(n.canvas).off("mousedown.mosaic"),
                            $(".listIcon").hide(),
                            $(".options").hide());
                        var i = n.currentEditObj.editType;
                        if (n.clipAble) {
                            if ("clip" == e)
                                return;
                            "clip" != i && n.justChangeEditObj("clip"),
                                n.applyClipOrNot(e)
                        } else {
                            if ("" == i)
                                return void n.changeEditType(e);
                            if ("rotate" == i)
                                "rotate" == e ? n.rotate() : n.changeEditType(e);
                            else if ("mosaic" == i)
                                if ("mosaic" == e) {
                                    if (n.mosaicAble)
                                        return;
                                    n.mosaic()
                                } else
                                    n.changeEditType(e);
                            else
                                n.changeEditType(e)
                        }
                    }
                }
                $(n.btn.clipBtn).on("mouseover", t).on("mouseout", e).on("click", i),
                    $(n.btn.rotateBtn).on("mouseover", t).on("mouseout", e).on("click", i),
                    $(n.btn.mosaicBtn).on("mouseover", t).on("mouseout", e).on("click", i),
                    $(".listIcon").on("click", function() {
                        $(".options").show(),
                        "function" == typeof clickLog && clickLog("from=pc_photouploading_mosaicpulldown_click")
                    });
                var a = ["s", "m", "b"];
                $(".options").on("click", "div", function(t) {
                    var e = $(t.currentTarget).attr("class")[0]
                        , i = a.indexOf(e);
                    "function" == typeof clickLog && clickLog("from=pc_photouploading_" + ("b" == e ? "l" : e) + "mosaic_click"),
                        n.lineWeight = n.opts.lineWeight[i],
                        n.setCursorAndBtn(e)
                }),
                    $(n.btn.restoreBtn).on("mouseover", function() {
                        $(this).hasClass("restoreDisable") || $(this).attr("class", "restoreHover")
                    }).on("mouseout", function() {
                        $(this).removeClass("restoreHover")
                    }).on("click", function() {
                        if (!$(this).hasClass("restoreDisable")) {
                            "function" == typeof clickLog && clickLog("from=pc_photouploading_redo_click");
                            var t = n.currentEditObj;
                            if ("submitImage" == (e = t.editType) || "clip" == e && "undefined" == typeof t.isAppClip || "rotate" == e && "undefined" == typeof t.step || "mosaic" == e && "undefined" == typeof t.track) {
                                n.changeEditObjWhenRestore();
                                var e = n.currentEditObj.editType
                            }
                            switch (e) {
                                case "rotate":
                                    n.restoreRotate();
                                    break;
                                case "clip":
                                    n.restoreClip();
                                    break;
                                case "mosaic":
                                    n.restoreMosaic();
                                    break;
                                default:
                                    return
                            }
                        }
                    }),
                    $(n.btn.submitBtn).on("click", function() {
                        if (n.initSuccess) {
                            "function" == typeof clickLog && clickLog("from=pc_photouploading_done_click");
                            var t = n.currentEditObj.editType;
                            n.clipAble ? ("clip" != t && n.justChangeEditObj("clip"),
                                n.applyClipOrNot("submitImage")) : "submitImage" == t ? n.submitImage() : n.changeEditType("submitImage")
                        }
                    }),
                    $("#btnClose").on("click", function() {
                        n.hideEditFrame(),
                        "function" == typeof clickLog && clickLog("from=pc_photouploading_close_click")
                    })
            },
            changeWindowScroll: function(t) {
                if ("forbid" == t) {
                    $("body").on("mousewheel.editPic", function(t) {
                        return !1
                    }).on("DOMMouseScroll.editPic", function(t) {
                        return !1
                    });
                    var e = document.documentElement.scrollTop || document.body.scrollTop;
                    $(window).on("scroll.editPic", function(t) {
                        $(window).scrollTop(e)
                    })
                } else {
                    if ("allow" != t)
                        return;
                    $("body").off("mousewheel.editPic").off("DOMMouseScroll.editPic"),
                        $(window).off("scroll.editPic")
                }
            },
            listenOptionsShow: function(t) {
                "start" == t ? $("body").on("click.listenOptions", function(t) {
                    if ("none" != $(".options").css("display")) {
                        var e = t.target
                            , i = $(e).hasClass("listIcon")
                            , n = $(e).parent().hasClass("listIcon");
                        i || n || $(".options").hide()
                    }
                }) : "over" == t && $("body").off("click.listenOptions")
            },
            setEditBtnStyle: function(t) {
                var e = $(t.currentTarget).attr("id");
                siblings = $(t.currentTarget).siblings();
                for (var i = 0, n = siblings.length; i < n; i++)
                    $(siblings[i]).removeClass($(siblings[i]).attr("id") + "Click");
                "mosaic" != e && $("#mosaic").attr("class", "button1 mosaicDefault"),
                    $(t.currentTarget).removeClass(e + "Hover"),
                "rotate" != e && $(t.currentTarget).addClass(e + "Click")
            },
            loadImg: function(t, e, i) {
                var n = new Image;
                i && (n.crossOrigin = "anonymous"),
                    n.onload = e,
                    n.src = t
            },
            initResizeCanvas: function(i) {
                var n = this
                    , t = function() {
                    $(n.loadingTip).hide(),
                        n.resizeRate = n.resetCanvas(this.naturalWidth, this.naturalHeight, !1);
                    var t = n.canvas;
                    n.context.drawImage(this, 0, 0, this.width, this.height, 0, 0, t.width, t.height);
                    try {
                        n.currentEditObj.initImg = t.toDataURL("image/jpeg", 1),
                        i && $("body").trigger(i),
                            n.initSuccess = !0,
                            $(n.canvas).show()
                    } catch (e) {
                        n.hideEditFrame(),
                            alert("你的浏览器暂不支持图片编辑功能，请升级或使用其他浏览器")
                    }
                };
                "undefined" != typeof n.opts.item.imgData4Edit ? n.loadImg(n.opts.item.imgData4Edit, t) : n.loadImg(n.opts.url, t, !0),
                    n.sendPvLog(),
                n.hasSendUv || (n.sendUvLog(),
                    n.hasSendUv = !0)
            },
            resetCanvas: function(t, e, i) {
                var n, a = t, o = e, s = this.canvas, r = this.canvasFrame, c = a / $(r).width(), l = o / $(r).height(), d = function() {
                    l <= c ? (n = c,
                        s.width = $(r).width(),
                        s.height = Math.round(o / n)) : (n = l,
                        s.width = Math.round(a / n),
                        s.height = $(r).height())
                };
                return 1 < c || 1 < l ? d() : i && 1 == i ? d() : (s.width = a,
                    s.height = o,
                    n = 1),
                    this.resetCanvasPos(),
                    n
            },
            resetCanvasPos: function() {
                var t = this.canvas
                    , e = this.canvasFrame
                    , i = $(e).width() - t.width
                    , n = $(e).height() - t.height;
                $(t).css({
                    left: parseInt(i / 2) + "px",
                    top: parseInt(n / 2) + "px"
                })
            },
            submitImage: function() {
                var t = this
                    , e = t.canvas
                    , i = t.resizeRate
                    , n = e.toDataURL("image/jpeg", 1);
                if (1 != t.resizeRate) {
                    var a = document.createElement("canvas");
                    a.width = parseInt(e.width * i),
                        a.height = parseInt(e.height * i);
                    var o = a.getContext("2d");
                    t.loadImg(n, function() {
                        o.drawImage(this, 0, 0, this.width, this.height, 0, 0, a.width, a.height),
                            n = a.toDataURL("image/jpeg", 1),
                            t.postImage(t.opts.indexId, n.substring(22), t.opts.url)
                    })
                } else
                    t.postImage(t.opts.indexId, n.substring(22), t.opts.url)
            },
            postImage: function(t, i, e) {
                var n = this
                    , a = ""
                    , o = "/p1/big/";
                ____json4fe && ____json4fe.catentry && 2 <= ____json4fe.catentry.length && 8 == (a = ____json4fe.catentry[1]).dispid && "zufang" == a.listname && (o = "/dwater/fang/big/");
                var s = {
                    "Pic-Size": "0*0",
                    "Pic-Encoding": "base64",
                    "Pic-Path": o,
                    "Pic-Data": i.substring(1)
                };
                $.ajax({
                    url: window.location.protocol + "//upload.58cdn.com.cn/json",
                    type: "POST",
                    data: JSON.stringify(s),
                    processData: !1,
                    success: function(t) {
                        var e = "data:image/jpeg;base64" + i;
                        t = window.location.protocol + "//pic1.58cdn.com.cn" + o + t;
                        n.successHandler(t),
                            n.opts.item.imgData4Edit = e,
                            e = null
                    },
                    error: function(t, e, i) {
                        n.errorHandler(t.status + "&" + e + "&" + i)
                    }
                })
            },
            successHandler: function(t) {
                var e = /.\w+$/.exec(t)
                    , i = t.indexOf(e);
                t = t.substring(0, i) + "_130_100" + t.substring(i),
                    this.opts.item.setValue(t),
                    this.hideEditFrame()
            },
            errorHandler: function(t) {
                var e = this.opts.item;
                e.setLog("errorMsg", t),
                    e.sendLog(),
                    alert("上传失败，请重试")
            },
            rotate: function() {
                var e = this
                    , i = e.currentEditObj;
                "function" == typeof clickLog && clickLog("from=pc_photouploading_xuanzhuan_click"),
                "undefined" == typeof i.step && (i.step = 0),
                    i.step += 1;
                var t = i.initImg;
                e.loadImg(t, function() {
                    var t = i.step * e.opts.degree % 360;
                    e.doRotation(this, t),
                        $(e.btn.restoreBtn).removeClass("restoreDisable")
                })
            },
            doRotation: function(t, e) {
                var i, n, a = e * Math.PI / 180, o = Math.cos(a), s = Math.sin(a);
                s < 0 && (s = -s),
                o < 0 && (o = -o),
                    i = t.naturalHeight * s + t.naturalWidth * o,
                    n = t.naturalHeight * o + t.naturalWidth * s;
                var r = this.resetCanvas(parseInt(i), parseInt(n), !1)
                    , c = this.canvas
                    , l = c.width / 2
                    , d = c.height / 2
                    , p = this.context;
                p.save(),
                    p.clearRect(0, 0, c.width, c.height),
                    p.translate(l, d),
                    p.rotate(a);
                var h = -t.naturalWidth / r / 2
                    , u = -t.naturalHeight / r / 2
                    , f = e / 90 % 2 == 0 ? c.width : c.height
                    , m = e / 90 % 2 == 0 ? c.height : c.width;
                p.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight, h, u, f, m),
                    p.restore()
            },
            restoreRotate: function() {
                var e = this
                    , t = e.currentEditObj
                    , i = t.step;
                if (!(i <= 0)) {
                    i -= 1,
                        t.step -= 1;
                    e.loadImg(t.initImg, function() {
                        var t = i * e.opts.degree;
                        e.doRotation(this, t),
                        0 == i && e.changeEditObjWhenRestore(),
                        "" != e.clipFrame && "none" != $(e.clipFrame).css("display") && e.resetClipFrameWhenRestore()
                    })
                }
            },
            clip: function() {
                var t = this;
                if (!t.clipAble) {
                    if (t.clipAble = !0,
                        "" == t.clipFrame) {
                        $(t.canvasFrame).append('<div id="clipFrame"><div class="toNW"></div><div class="toN"></div><div class="toNE"></div><div class="toE"></div><div class="toSE"></div><div class="toS"></div><div class="toSW"></div><div class="toW"></div></div>'),
                            t.clipFrame = document.getElementById("clipFrame")
                    } else
                        $("#clipFrame").show();
                    "function" == typeof clickLog && clickLog("pc_photouploading_cut_click"),
                        t.clipOpenTime = (new Date).getTime();
                    t.initClipFramePos();
                    t.bindResetClipFrame()
                }
            },
            initClipFramePos: function() {
                var t = $(this.canvas)
                    , e = parseInt(t.position().left)
                    , i = parseInt(t.position().top)
                    , n = parseInt(t.width() - 2)
                    , a = parseInt(t.height() - 2);
                return $(this.clipFrame).css({
                    left: e + "px",
                    top: i + "px",
                    width: n + "px",
                    height: a + "px"
                }),
                    this.resetKeyPoint(),
                    [e, i, n, a]
            },
            resetClipFrameWhenRestore: function() {
                var t = $(this.canvas)
                    , e = $(this.clipFrame)
                    , i = e.position().left
                    , n = e.position().top
                    , a = e.width()
                    , o = e.height()
                    , s = t.position().left
                    , r = t.position().top
                    , c = t.width()
                    , l = t.height();
                i < s && e.css({
                    left: s + "px",
                    width: a - (s - i) + "px"
                }),
                s + c - 2 < i + a && e.css({
                    width: e.width() - (i + a - (s + c - 2)) + "px"
                }),
                n < r && e.css({
                    top: r + "px",
                    height: o - (r - n) + "px"
                }),
                r + l - 2 < n + o && e.css({
                    height: e.height() - (n + o - (r + l - 2)) + "px"
                }),
                    this.resetKeyPoint()
            },
            isFullClipFrame: function() {
                var t = $(this.clipFrame).width()
                    , e = $(this.clipFrame).height()
                    , i = $(this.canvas).width()
                    , n = $(this.canvas).height();
                return i <= t + 2 && n <= e + 2
            },
            setClipAndCanvasInfo: function() {
                var t = $(this.canvas)
                    , e = $(this.clipFrame);
                this.clipAndCanvasInfo = {
                    canvasLeft: t.offset().left,
                    canvasTop: t.offset().top,
                    canvasWidth: t.width(),
                    canvasHeight: t.height(),
                    clipLeft: e.offset().left,
                    clipTop: e.offset().top,
                    clipWidth: e.width(),
                    clipHeight: e.height()
                }
            },
            bindResetClipFrame: function() {
                var a, o, i, n = !1, s = !1, c = 2, l = this, d = $(l.clipFrame);
                l.resetKeyPoint();
                var e = {
                    toNW: function(t) {
                        var e = d.offset()
                            , i = l.oldMousePos[0] - t.clientX
                            , n = l.oldMousePos[1] - t.clientY
                            , a = e.left - i
                            , o = e.top - n
                            , s = d.width() + i
                            , r = d.height() + n;
                        e.left - i - c < l.clipAndCanvasInfo.canvasLeft && (a = l.clipAndCanvasInfo.canvasLeft,
                            s = d.width() + (e.left - l.clipAndCanvasInfo.canvasLeft)),
                        e.top - n - c < l.clipAndCanvasInfo.canvasTop && (o = l.clipAndCanvasInfo.canvasTop,
                            r = d.height() + (e.top - l.clipAndCanvasInfo.canvasTop)),
                        (e.left != l.clipAndCanvasInfo.canvasLeft || 0 < t.clientX - l.oldMousePos[0]) && 25 < s && (d.width(s),
                            d.offset({
                                left: a
                            })),
                        (e.top != l.clipAndCanvasInfo.canvasTop || 0 < t.clientY - l.oldMousePos[1]) && 25 < r && (d.height(r),
                            d.offset({
                                top: o
                            })),
                            l.oldMousePos = [t.clientX, t.clientY]
                    },
                    toN: function(t) {
                        var e = d.offset()
                            , i = l.oldMousePos[1] - t.clientY
                            , n = e.top - i
                            , a = d.height() + i;
                        d.offset().top - i - c < l.clipAndCanvasInfo.canvasTop && (n = l.clipAndCanvasInfo.canvasTop,
                            a = d.height() + (e.top - l.clipAndCanvasInfo.canvasTop)),
                        (e.top != l.clipAndCanvasInfo.canvasTop || 0 < t.clientY - l.oldMousePos[1]) && 25 < a && (d.height(a),
                            d.offset({
                                top: n
                            })),
                            l.oldMousePos = [t.clientX, t.clientY]
                    },
                    toNE: function(t) {
                        var e = d.offset()
                            , i = l.oldMousePos[0] - t.clientX
                            , n = l.oldMousePos[1] - t.clientY
                            , a = e.top - n
                            , o = d.width() - i
                            , s = d.height() + n;
                        e.left + d.width() - i + c > l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth && (o = l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth - e.left - 2),
                        e.top - n - c < l.clipAndCanvasInfo.canvasTop && (a = l.clipAndCanvasInfo.canvasTop,
                            s = d.height() + (e.top - l.clipAndCanvasInfo.canvasTop)),
                        (e.left + d.width() != l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth - 2 || t.clientX - l.oldMousePos[0] < 0) && 25 < o && d.width(o),
                        (e.top != l.clipAndCanvasInfo.canvasTop || 0 < t.clientY - l.oldMousePos[1]) && 25 < s && (d.height(s),
                            d.offset({
                                top: a
                            })),
                            l.oldMousePos = [t.clientX, t.clientY]
                    },
                    toE: function(t) {
                        var e = d.offset()
                            , i = l.oldMousePos[0] - t.clientX
                            , n = d.width() - i;
                        e.left + d.width() - i + c > l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth && (n = l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth - e.left - 2),
                        (e.left + d.width() != l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth - 2 || t.clientX - l.oldMousePos[0] < 0) && 25 < n && d.width(n),
                            l.oldMousePos = [t.clientX, t.clientY]
                    },
                    toSE: function(t) {
                        var e = d.offset()
                            , i = l.oldMousePos[0] - t.clientX
                            , n = l.oldMousePos[1] - t.clientY
                            , a = d.width() - i
                            , o = d.height() - n;
                        e.left + d.width() - i + c > l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth && (a = l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth - e.left - 2),
                        e.top + d.height() - n + c > l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight && (o = l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight - e.top - 2),
                        (e.left + d.width() != l.clipAndCanvasInfo.canvasLeft + l.clipAndCanvasInfo.canvasWidth - 2 || t.clientX - l.oldMousePos[0] < 0) && 25 < a && d.width(a),
                        (e.top + d.height() != l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight - 2 || t.clientY - l.oldMousePos[1] < 0) && 25 < o && d.height(o),
                            l.oldMousePos = [t.clientX, t.clientY]
                    },
                    toS: function(t) {
                        var e = d.offset()
                            , i = l.oldMousePos[1] - t.clientY
                            , n = d.height() - i;
                        e.top + d.height() - i + c > l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight && (n = l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight - e.top - 2),
                        (e.top + d.height() != l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight - 2 || t.clientY - l.oldMousePos[1] < 0) && 25 < n && d.height(n),
                            l.oldMousePos = [t.clientX, t.clientY]
                    },
                    toSW: function(t) {
                        var e = d.offset()
                            , i = l.oldMousePos[0] - t.clientX
                            , n = l.oldMousePos[1] - t.clientY
                            , a = e.left - i
                            , o = d.width() + i;
                        height = d.height() - n,
                        e.left - i - c < l.clipAndCanvasInfo.canvasLeft && (a = l.clipAndCanvasInfo.canvasLeft,
                            o = d.width() + (e.left - l.clipAndCanvasInfo.canvasLeft)),
                        e.top + d.height() - n + c > l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight && (height = l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight - e.top - 2),
                        (e.left != l.clipAndCanvasInfo.canvasLeft || 0 < t.clientX - l.oldMousePos[0]) && 25 < o && (d.width(o),
                            d.offset({
                                left: a
                            })),
                        (e.top + d.height() != l.clipAndCanvasInfo.canvasTop + l.clipAndCanvasInfo.canvasHeight - 2 || t.clientY - l.oldMousePos[1] < 0) && 25 < height && d.height(height),
                            l.oldMousePos = [t.clientX, t.clientY]
                    },
                    toW: function(t) {
                        var e = d.offset()
                            , i = l.oldMousePos[0] - t.clientX
                            , n = e.left - i
                            , a = d.width() + i;
                        e.left - i - c < l.clipAndCanvasInfo.canvasLeft && (n = l.clipAndCanvasInfo.canvasLeft,
                            a = d.width() + (e.left - l.clipAndCanvasInfo.canvasLeft)),
                        (e.left != l.clipAndCanvasInfo.canvasLeft || 0 < t.clientX - l.oldMousePos[0]) && 25 < a && (d.width(a),
                            d.offset({
                                left: n
                            })),
                            l.oldMousePos = [t.clientX, t.clientY]
                    }
                };
                function r(t) {
                    if (n)
                        if (s) {
                            l.clipAndCanvasInfo;
                            e[i](t),
                                l.resetKeyPoint()
                        } else
                            !function(t) {
                                var e = t.clientX - a
                                    , i = t.clientY - o
                                    , n = l.clipAndCanvasInfo;
                                t.clientX - a - c <= n.canvasLeft && (e = n.canvasLeft);
                                t.clientX - a + c >= n.canvasLeft + n.canvasWidth - n.clipWidth - 2 && (e = n.canvasLeft + n.canvasWidth - n.clipWidth - 2);
                                t.clientY - o - c <= n.canvasTop && (i = n.canvasTop);
                                t.clientY - o + c >= n.canvasTop + n.canvasHeight - n.clipHeight - 2 && (i = n.canvasTop + n.canvasHeight - n.clipHeight - 2);
                                d.offset({
                                    left: e,
                                    top: i
                                })
                            }(t);
                    return !1
                }
                function p(t) {
                    $(document).off("mousemove", r),
                        $(document).off("mouseup", p),
                        n = !1,
                        $("body").css("cursor", "default"),
                        $(l.clipFrame).find("div").css({
                            "background-color": "",
                            border: "1px solid white"
                        })
                }
                d.off("mousedown.clip"),
                    d.on("mousedown.clip", function(t) {
                        if (a = t.clientX - $(this).offset().left,
                                o = t.clientY - $(this).offset().top,
                                l.oldMousePos = [t.clientX, t.clientY],
                                n = !0,
                                l.setClipAndCanvasInfo(),
                            "clipFrame" != $(t.target).attr("id")) {
                            s = !0,
                                i = $(t.target).attr("class"),
                                $(t.target).css({
                                    "background-color": "#ED6D06",
                                    border: 0
                                });
                            var e = $(t.target).css("cursor");
                            $("body").css("cursor", e)
                        } else
                            $("body").css("cursor", "move"),
                                s = !1;
                        $(document).on("mousemove", r),
                            $(document).on("mouseup", p)
                    })
            },
            resetKeyPoint: function() {
                var t = $(this.clipFrame)
                    , e = t.width()
                    , i = t.height();
                $(".toN").css("left", e / 2 - 4),
                    $(".toE").css("top", i / 2 - 4),
                    $(".toS").css("left", e / 2 - 4),
                    $(".toW").css("top", i / 2 - 4)
            },
            computeRectAndClip: function(t) {
                var e = this
                    , i = $(e.canvas)
                    , n = e.clipFrame ? $(e.clipFrame) : $("#clipFrame")
                    , a = n.width()
                    , o = n.height()
                    , s = n.offset().left - i.offset().left
                    , r = n.offset().top - i.offset().top;
                e.doClips(e.currentEditObj.initImg, [s, r, a, o], t),
                    e.currentEditObj.isAppClip = !0
            },
            doClips: function(t, e, i) {
                var n = this
                    , a = n.canvas;
                n.resetCanvas(e[2], e[3], !0);
                var o = n.context;
                n.loadImg(t, function() {
                    o.drawImage(this, e[0], e[1], e[2], e[3], 0, 0, a.width, a.height),
                        n.hideClipFrame(),
                    i && n.changeEditType(i, !0),
                        $(n.btn.restoreBtn).removeClass("restoreDisable"),
                        n.clipCompleteTime = (new Date).getTime(),
                    "function" == typeof clickLog && clickLog("pc_photouploading_edit_cliptime=" + (n.clipCompleteTime - n.clipOpenTime))
                })
            },
            restoreClip: function() {
                var t = this;
                t.loadImg(t.currentEditObj.initImg, function() {
                    t.resetCanvas(this.naturalWidth, this.naturalHeight, !0),
                        t.context.drawImage(this, 0, 0),
                        t.changeEditObjWhenRestore()
                })
            },
            mosaic: function() {
                var c = this
                    , l = c.canvas
                    , d = (c.context,
                    !1);
                c.setCursorAndBtn("m"),
                    c.lineWeight = c.opts.lineWeight[1],
                    $(".listIcon").show(),
                "function" == typeof clickLog && clickLog("pc_photouploading_mosaic_click"),
                    $(l).off("mousedown.mosaic"),
                    c.mosaicAble = !0,
                    $(l).on("mousedown.mosaic", function(t) {
                        if (c.mosaicAble) {
                            "mosaic" != c.currentEditObj.editType && c.justChangeEditObj("mosaic");
                            var e = c.currentEditObj;
                            d = !0;
                            var o = []
                                , s = $(l).offset()
                                , i = t.clientX - (s.left - (document.documentElement.scrollLeft || document.body.scrollLeft))
                                , n = t.clientY - (s.top - (document.documentElement.scrollTop || document.body.scrollTop))
                                , a = c.drawMosaic([i, n]);
                            o.push(a);
                            var r = c.lineWeight;
                            $(l).on("mousemove.mosaic", function(t) {
                                if (d) {
                                    var e = t.clientX - (s.left - (document.documentElement.scrollLeft || document.body.scrollLeft))
                                        , i = t.clientY - (s.top - (document.documentElement.scrollTop || document.body.scrollTop))
                                        , n = o.length;
                                    if (Math.floor(e / r) != Math.floor(o[n - 1][0] / r) || Math.floor(i / r) != Math.floor(o[n - 1][1] / r)) {
                                        var a = c.drawMosaic([e, i]);
                                        o.push(a)
                                    }
                                }
                            }),
                                $(document).on("mouseup.mosaic", function() {
                                    $(l).off("mousemove.mosaic"),
                                        $(document).off("mouseup.mosaic"),
                                        d = !1,
                                    "undefined" == typeof e.track && (e.track = []),
                                        e.track.push(o),
                                        $(c.btn.restoreBtn).removeClass("restoreDisable")
                                })
                        }
                    })
            },
            drawMosaic: function(t) {
                var e = this.canvas
                    , i = this.context
                    , n = e.width
                    , a = e.height;
                if ("undefined" == typeof t[2]) {
                    var o = this.lineWeight
                        , s = Math.floor(t[0] / o) * o
                        , r = Math.floor(t[1] / o) * o
                        , c = i.getImageData(t[0], t[1], 1, 1).data
                        , l = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + c[3] + ")";
                    t[2] = l,
                        t[3] = s,
                        t[4] = r,
                        t[5] = s + o < n ? o : n - s,
                        t[6] = r + o < a ? o : a - r
                }
                return i.fillStyle = t[2],
                    i.fillRect(t[3], t[4], t[5], t[6]),
                    t
            },
            restoreMosaic: function() {
                var t = this
                    , e = t.currentEditObj
                    , i = e.track.length;
                if (!(i <= 0)) {
                    i -= 1,
                        e.track.pop();
                    t.loadImg(e.initImg, function() {
                        t.context.drawImage(this, 0, 0),
                            t.reDrawMosaic(),
                        0 == i && t.changeEditObjWhenRestore()
                    })
                }
            },
            reDrawMosaic: function() {
                for (var t = this.currentEditObj.track, e = t.length, i = 0; i < e; i++)
                    for (var n = 0, a = t[i].length; n < a; n++)
                        this.drawMosaic(t[i][n])
            },
            setCursorAndBtn: function(t) {
                var e = window.location.protocol + "//img.58cdn.com.cn/ui7/post/pc/imgs/"
                    , i = $(this.canvas).attr("style");
                if (!t)
                    return i = i.replace(/cursor:.+pointer;/, ""),
                        void $(this.canvas).attr("style", i);
                i = (i ? i + ";" : "") + ("cursor:url(" + e + t + "CursorIco.ico),pointer;"),
                    $(this.canvas).attr("style", i),
                    this.setSelectedLine(t);
                var n = "mosaic" + t.toUpperCase() + "Line";
                $("#mosaic").attr("class", "button1 mosaicClick " + n)
            },
            setSelectedLine: function(t) {
                $(".options").children("div").removeClass("selectedLine"),
                    $(".options").children("." + t + "Line").addClass("selectedLine")
            },
            justChangeEditObj: function(t) {
                this.storageEditHistory(t)
            },
            changeEditType: function(t) {
                this.storageEditHistory(t),
                    this[t]()
            },
            storageEditHistory: function(t) {
                var e = this
                    , i = $.extend(!0, {}, e.currentEditObj);
                switch (i.editType) {
                    case "":
                        e.editHistory.push(i),
                            n();
                        break;
                    case "rotate":
                        0 != ("undefined" != typeof i.step ? i.step : 0) && e.editHistory.push(i),
                            n();
                        break;
                    case "mosaic":
                        0 != ("undefined" != typeof i.track ? i.track : []).length && e.editHistory.push(i),
                            n();
                        break;
                    case "clip":
                        "undefined" != typeof i.isAppClip && 1 == i.isAppClip && e.editHistory.push(i),
                            n();
                        break;
                    case "submitImage":
                        n()
                }
                function n() {
                    e.currentEditObj = {},
                        e.currentEditObj.editType = t,
                        e.currentEditObj.initImg = e.canvas.toDataURL("image/jpeg", 1)
                }
            },
            changeEditObjWhenRestore: function() {
                var t = this
                    , e = t.editHistory.length;
                e <= 1 && $(t.btn.restoreBtn).addClass("restoreDisable"),
                    t.currentEditObj = $.extend(!0, {}, t.editHistory[e - 1]),
                    t.editHistory.pop()
            },
            enableAllBtn: function() {
                var t = this.btn;
                for (var e in t)
                    $(t[e]).removeClass("edit_disabled_btn")
            },
            disableAllBtn: function() {
                var t = this.btn;
                for (var e in t)
                    $(t[e]).addClass("edit_disabled_btn")
            },
            applyClipOrNot: function(e) {
                var i = this;
                if ($(i.clipFrame).off("mousedown"),
                        i.disableAllBtn(),
                    0 != $("#dialog4MakeSure").length)
                    $("#shade4MakeSure").show(),
                        $("#dialog4MakeSure").show();
                else {
                    $(i.editFrame).append('<div id="shade4MakeSure"></div><div id="dialog4MakeSure"><span>是否应用当前修改?</span><br><input type="button" class="application" value="应用"><input type="button" class="giveUp" value="放弃"></div>')
                }
                $("#dialog4MakeSure input").off("click.makeSure"),
                    $("#dialog4MakeSure input").on("click.makeSure", function(t) {
                        "应用" == $(t.target).attr("value") ? (i.computeRectAndClip(e),
                        "function" == typeof clickLog && clickLog("from=pc_photouploading_use_click")) : (i.changeEditType(e),
                            i.hideClipFrame(),
                        "function" == typeof clickLog && clickLog("from=pc_photouploading_giveup_click")),
                            i.hideMakeSureFrame()
                    })
            },
            hideMakeSureFrame: function() {
                $("#shade4MakeSure").hide(),
                    $("#dialog4MakeSure").hide(),
                    this.enableAllBtn()
            },
            hideClipFrame: function() {
                this.clipAble = !1,
                    $("#clipFrame").hide()
            },
            hideEditFrame: function() {
                var t = this;
                $(t.canvas).hide(),
                    $("#shadeFrame").hide(),
                    $("#editFrame").hide(),
                    t.hideMakeSureFrame(),
                    t.hideClipFrame(),
                    $(".options").hide(),
                    $(".listIcon").hide(),
                    t.setCursorAndBtn(),
                    $("body").off("selectstart"),
                    t.listenOptionsShow("over"),
                    t.changeWindowScroll("allow")
            },
            sendUvLog: function() {
                "function" == typeof clickLog && clickLog("from=pc_photouploading_edit_uv")
            },
            sendPvLog: function() {
                "function" == typeof clickLog && clickLog("from=pc_photouploading_edit_pv")
            }
        },
            t
    }),
    define("libs/jquery.sortable", [], function() {
        var r, c, l;
        return r = jQuery,
            l = r(),
            r.fn.sortable = function(t) {
                return t = t || {},
                    this.each(function() {
                        if (/^enable|disable|destroy$/.test(t)) {
                            var e = r(this).children(r(this).data("items")).attr("draggable", "enable" == t);
                            "destroy" == t && e.add(this).removeData("connectWith").removeData("items").unbind("dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s")
                        } else {
                            e = r(this).children(t.items);
                            var i, n, a = t.connectWith || !1, o = r("<" + e[0].tagName + ' class="sortable-placeholder">'), s = t.handle;
                            e.find(s).mousedown(function() {
                                n = !0
                            }).mouseup(function() {
                                n = !1
                            }),
                                r(this).data("items", t.items),
                                l = l.add(o),
                            a && r(a).add(this).data("connectWith", a),
                                e.attr("draggable", "true").bind("dragstart.h5s", function(t) {
                                    if (s && !n)
                                        return !1;
                                    n = !1;
                                    var e = t.originalEvent.dataTransfer;
                                    e.effectAllowed = "move",
                                        e.setData("Text", "dummy"),
                                        c = r(this).addClass("sortable-dragging"),
                                        i = c.index()
                                }).bind("dragend.h5s", function() {
                                    c.removeClass("sortable-dragging").fadeIn(),
                                        l.detach(),
                                    i != c.index() && e.parent().trigger("sortupdate"),
                                        c = null
                                }).not("a[href], img").bind("selectstart.h5s", function() {
                                    return this.dragDrop && this.dragDrop(),
                                        !1
                                }).end().add([this, o]).bind("dragover.h5s dragenter.h5s drop.h5s", function(t) {
                                    return !e.is(c) && a !== r(c).parent().data("connectWith") || ("drop" == t.type ? (t.stopPropagation(),
                                        l.filter(":visible").after(c)) : (t.preventDefault(),
                                        t.originalEvent.dataTransfer.dropEffect = "move",
                                    e.is(this) && (c.hide(),
                                        r(this)[o.index() < r(this).index() ? "after" : "before"](o),
                                        l.not(o).detach())),
                                        !1)
                                })
                        }
                    })
            }
            ,
            ""
    }),
    define("component/imgUpload/js/imgUpload", ["component/base/js/base", "util/Class", "component/imgBox/js/imgBox", "component/imgUpload/js/html5Process", "component/imgUpload/js/flashProcess", "component/imgUpload/js/formProcess", "libs/swfobject", "component/imgUpload/js/wxProcess", "component/imgUpload/js/qqProcess", "component/validate/js/validate", "component/editPic/js/editPic", "libs/jquery.sortable"], function(t, e, a, i, n, o, s, r, c, l, d, p) {
        var h = e.extend(t);
        return h.prototype.CLASS = {
            WRAP: "imgbar_wrap",
            TITLE: "imgbar_title",
            CONTENT: "imgbar_content",
            MULTI: "clearfix"
        },
            h.prototype.type = "ImgsBar",
            h.prototype.defaultOpts = {
                maxLength: 24,
                disabledByteSize: 10485760,
                disableType: []
            },
            h.prototype.init = function() {
                this.constructor.superclass.init.apply(this, arguments),
                    this.imgList = [];
                var t = 0
                    , e = window.infoDetail && infoDetail.Pic ? infoDetail.Pic : "";
                e && (t = e.split("|").length);
                var i = $.extend(!0, {
                    startIndex: t
                }, this.getCallbackOpt(), this.opts.picProcess);
                "undefined" == typeof i.disableType && (i.disableType = this.defaultOpts.disableType);
                var n = this.process;
                this.imgProcess = new n(i),
                    this.wxProcess = new r(i),
                    this.qqProcess = new c(i)
            }
            ,
            h.prototype.getProcess = function() {
                var t = s.getFlashPlayerVersion();
                return this.isSupportHtml5() ? (a.prototype.logObj.uploadType = "h5",
                    this.uploadType = "h5",
                    i) : this.isSupportFlash() && (10 < t.major || 10 <= t.major && 3 <= t.minor) ? (a.prototype.logObj.uploadType = "flash",
                    this.uploadType = "flash",
                    n) : (a.prototype.logObj.uploadType = "form",
                    this.uploadType = "form",
                    a.prototype.logObj.flashVersion = t.major + "." + t.minor,
                    o)
            }
            ,
            h.prototype.isSupportFlash = function() {
                for (var t = !1, e = "flash", i = 0; i < navigator.plugins.length; i++)
                    if (-1 < navigator.plugins[i].name.toLowerCase().indexOf(e)) {
                        t = !0;
                        break
                    }
                if (!t)
                    try {
                        e = "ShockwaveFlash.ShockwaveFlash",
                            new ActiveXObject(e),
                            t = !0
                    } catch (n) {
                        t = !1
                    }
                return t
            }
            ,
            h.prototype.isSupportHtml5 = function() {
                var t = window.File && window.FileReader && window.FileList && window.Blob
                    , e = !!document.createElement("canvas").getContext;
                return !(!t || !e || "undefined" == typeof URL)
            }
            ,
            h.prototype.supportEditOK = "",
            h.prototype.isSupportEdit = function() {
                if (!0 === this.supportEditOK)
                    return !0;
                if (!1 === this.supportEditOK)
                    return !1;
                var t = !!document.createElement("canvas").getContext
                    , e = -1 != navigator.userAgent.indexOf("MSIE")
                    , i = "undefined" != typeof window.infoDetail;
                return this.supportEditOK = !!(!i && t || i && t && !e)
            }
            ,
            h.prototype.createElem = function() {
                var t = this.opts;
                this.maxLength = 0 < parseInt(t.attr.maxLength) ? t.attr.maxLength : this.defaultOpts.maxLength,
                "undefined" == typeof t.picProcess.disabledByteSize && (t.picProcess.disabledByteSize = this.defaultOpts.disabledByteSize);
                var e = t.picProcess.disabledByteSize;
                this.process = this.getProcess(),
                "form" == this.uploadType && (e = t.picProcess.maxByteSize),
                    this.container = $("<div>").addClass(this.CLASS.WRAP);
                var i = '<ul class="clearfix img_list"><li class="first_icon"><i></i></li></ul><div class="upload_wrap">\t<div class="upload">     <div class="localUpload_wrap">\t\t    <div class="localTitle">上传电脑中图片</div>\t\t    <div class="localUpload">\t\t\t    <div class="imgUpload" id="imgUpload"></div>\t\t\t    <div class="maxlength_cover"></div>\t\t\t    <div class="maxlength_cover">' + this.maxLength + '</div>\t\t    </div>\t\t</div>\t\t<div class="separate">或</div>     <div class="wxqqUpload_wrap">\t\t    <div class="wxqqTitle">\t\t        <span class="wxTitle tabOn"><i class="wxlogo"></i>微信传图</span>\t\t        <span class="qqTitle"><i class="qqlogo"></i>手机QQ传图</span>         </div>\t\t    <div class="wxqqUpload">\t\t        <div class="wxUpload tabOn"></div>\t\t        <div class="qqUpload"></div>\t\t    </div>\t\t</div>\t</div> <div class="info">' + this.opts.attr.preTip + "，最多上传<span>" + this.maxLength + "</span>张，每张最大<span>" + e / 1024 / 1024 + "M</span>" + (this.opts.attr.afterTip || "") + "</div></div>";
                this.container.html(i),
                t.delWxQqSign && (this.container.find(".separate").remove(),
                    this.container.find(".wxqqUpload_wrap").remove()),
                    this.container.addClass(this.CLASS.WRAP),
                    this.container.attr("id", "flashflashContent"),
                    this.setElemView()
            }
            ,
            h.prototype.focusTo = function() {
                this.elem.focus()
            }
            ,
            h.prototype.setElemView = function() {
                this.opts;
                this.container.append(this.elem)
            }
            ,
            h.prototype.bindDomEvent = function() {
                var o = this
                    , s = a.defaultOpt.className
                    , r = "";
                o.container.find(".img_list").delegate("." + s.container, "click", function(t) {
                    var e = t.target.className
                        , i = $(this).data("indexId")
                        , n = o.getItemById(i);
                    switch (e) {
                        case s.editBtn:
                            if (!o.isSupportEdit())
                                return;
                            var a = {
                                indexId: i,
                                url: n.getValue().replace("_130_100", ""),
                                item: n
                            };
                            r ? r.resetImgItem(a) : r = new d(a),
                                clickLog("from=pc_photouploading_edit_click");
                            break;
                        case s.prevBtn:
                            n.forward(),
                                clickLog("from=pc_photouploading_before_click");
                            break;
                        case s.nextBtn:
                            n.backward(),
                                clickLog("from=pc_photouploading_after_click");
                            break;
                        case s.deleteBtn:
                            o.removeItem(i),
                                n.destroy(),
                                clickLog("from=pc_photouploading_photodelete_click")
                    }
                }).delegate("." + s.container, "mouseover", function() {
                    $(this).addClass(s.container + "_" + h.SETTING.STATUS.HOVER)
                }).delegate("." + s.container, "mouseout", function() {
                    $(this).removeClass(s.container + "_" + h.SETTING.STATUS.HOVER)
                }),
                    o.container.find(".localUpload").bind("mouseover", function(t) {
                        $(this).addClass("local_" + h.SETTING.STATUS.HOVER)
                    }).bind("mouseout", function(t) {
                        $(this).removeClass("local_" + h.SETTING.STATUS.HOVER)
                    }),
                    o.container.find(".wxTitle,.qqTitle").bind("click", function(t) {
                        if (!$(this).hasClass("tabOn")) {
                            var e;
                            $(this).removeClass("tabHover"),
                                $(this).addClass("tabOn").siblings().removeClass("tabOn");
                            var i = "";
                            $(this).hasClass("wxTitle") ? (e = o.container.find(".wxUpload"),
                                i = "from=weixin_upload_pic") : (e = o.container.find(".qqUpload"),
                                i = "from=shouq_upload_pic"),
                                e.addClass("tabOn").siblings().removeClass("tabOn");
                            try {
                                clickLog != undefined && "function" == typeof clickLog && clickLog(i)
                            } catch (t) {}
                        }
                    }).bind("mouseover", function(t) {
                        $(this).hasClass("tabOn") || $(this).addClass("tabHover")
                    }).bind("mouseout", function(t) {
                        $(this).hasClass("tabOn") || $(this).removeClass("tabHover")
                    })
            }
            ,
            h.prototype.removeItem = function(t) {
                for (var e = -1, i = 0, n = this.imgList.length; i < n; i++)
                    this.imgList[i].id === t && (e = i);
                this.imgList.splice(e, 1),
                this.imgList.length < 1 && this.container.find(".img_list .first_icon").hide(),
                    l.hideTip(this.rows.containerElem.find(".tip")),
                    this.enableUploadBtn()
            }
            ,
            h.prototype.getCallbackOpt = function() {
                var t = this;
                return {
                    getImgNum: function() {
                        return t.getImgNum.apply(t, arguments)
                    },
                    uploadError: function() {
                        t.uploadError.apply(t, arguments)
                    },
                    isExceed: function() {
                        t.isExceed.apply(t, arguments)
                    },
                    beforeUpload: function() {
                        t.beforeUpload.apply(t, arguments)
                    },
                    uploadComplete: function() {
                        t.uploadComplete.apply(t, arguments)
                    },
                    beforeCompress: function() {
                        t.beforeCompress.apply(t, arguments)
                    },
                    compressComplete: function() {
                        t.compressComplete.apply(t, arguments)
                    }
                }
            }
            ,
            h.prototype.render = function(t) {
                this.constructor.superclass.render.call(this, t),
                    this.imgProcess.render(this.container.find(".imgUpload")),
                    this.wxProcess.render(this.container.find(".wxUpload")),
                    this.qqProcess.render(this.container.find(".qqUpload"))
            }
            ,
            h.prototype.beforeCompress = function(t) {
                this.addToShow(t)
            }
            ,
            h.prototype.getImgNum = function() {
                for (var t = 0, e = 0; e < this.imgList.length; e++)
                    "init" !== this.imgList[e].item.status && t++;
                return {
                    hazNum: t,
                    maxNum: this.maxLength
                }
            }
            ,
            h.prototype.compressComplete = function(t) {
                var e = this.getItemById(t.id);
                e && e.setLog != undefined && (e.setLog("afterZipWeight", t.width),
                    e.setLog("afterZipHeight", t.height),
                    e.setLog("beforeZipWeight", t.originWidth),
                    e.setLog("beforeZipHeight", t.originHeight),
                    e.setLog("afterZipSize", t.size))
            }
            ,
            h.prototype.beforeUpload = function(t) {
                var e = this.getItemById(t.id);
                e && (e.setStatus != undefined && e.setStatus("loading"),
                e.setLog != undefined && e.setLog("uploadBeginTime", (new Date).getTime()))
            }
            ,
            h.prototype.uploadComplete = function(t) {
                this.updateSortable();
                var e = this.getItemById(t.id);
                e && ("undefined" != typeof t.imgData4Edit && (e.imgData4Edit = t.imgData4Edit),
                e.setLog != undefined && e.setLog("uploadEndTime", (new Date).getTime()),
                e.setStatus != undefined && e.setStatus("success"),
                e.setImageUrl != undefined && e.setImageUrl(t.url))
            }
            ,
            h.prototype.updateSortable = function() {
                var e = this
                    , t = e.container.find(".img_list");
                t.sortable("destroy"),
                    t.off("sortupdate"),
                    t.sortable({
                        items: ".img_box"
                    }).on("sortupdate", function(t) {
                        e.dropHandler(t)
                    })
            }
            ,
            h.prototype.uploadError = function(t) {
                l.showTip(this.rows.containerElem.find(".tip"), "您有图片上传失败，可删除后重新上传", "error");
                var e = this.getItemById(t.id);
                e && (e.setImageUrl(window.location.protocol + "//img.58cdn.com.cn/ui7/post/pc/imgs/img-upload-error.jpg"),
                    e.setStatus("error"),
                    e.setLog("resultState", "failed"),
                "undefined" != typeof t.errorMsg && e.setLog("errorMsg", t.errorMsg),
                    e.sendLog())
            }
            ,
            h.prototype.isExceed = function() {
                var t = this.getImgNum()
                    , e = !1;
                return t.hazNum > t.maxNum - 1 && (e = !0),
                    e
            }
            ,
            h.prototype.sortImgList = function() {
                for (var t = this.container.find(".img_box"), e = [], i = 0, n = t.length; i < n; i++) {
                    var a = t.eq(i).attr("data-index");
                    e.push(this.getItemObjById(a))
                }
                this.imgList = e
            }
            ,
            h.prototype.getValue = function() {
                this.sortImgList();
                for (var t, e = [], i = 0, n = this.imgList.length; i < n; i++)
                    if ("success" === (t = this.imgList[i].item).status) {
                        var a = t.getValue();
                        a = a.replace("_130_100.jpg", ".jpg").replace(/https?:\/\//, "").replace("pic.58.com", "").replace("pic1.58cdn.com.cn", ""),
                            e.push(a)
                    }
                return e.join("|")
            }
            ,
            h.prototype.setValue = function(t) {
                if (t) {
                    for (var e = t.split("|"), i = 0; i < e.length; i++)
                        this.addToShow({
                            id: i,
                            url: window.location.protocol + "//pic1.58cdn.com.cn" + e[i]
                        }, "success", !0);
                    this.updateSortable()
                }
            }
            ,
            h.prototype.addToShow = function(t, e, i) {
                if (this.imgList.length > this.maxLength - 1)
                    l.showTip(this.rows.containerElem.find(".tip"), "您上传的图片张数已经达到上限，可删除后再重新上传", "error");
                else {
                    var n = new a({
                        id: t.id,
                        isSupportEdit: this.isSupportEdit(),
                        needEdit: "undefined" == typeof this.opts.needEdit || this.opts.needEdit
                    });
                    e && n.setStatus(e),
                    t.url && n.setImageUrl(t.url, i),
                        this.imgList.push({
                            id: t.id,
                            item: n
                        }),
                    0 < this.imgList.length && this.container.find(".img_list .first_icon").show(),
                        n.appendTo(this.container.find(".img_list")),
                    this.opts.hideTipIcon || this.showCheckTip({
                        bValid: !0,
                        msg: ""
                    }),
                    i || (n.setLog("zipBeginTime", (new Date).getTime()),
                        n.setLog("beforeZipSize", t.size)),
                    this.imgList.length >= this.maxLength && this.disableUploadBtn()
                }
            }
            ,
            h.prototype.disableUploadBtn = function() {
                this.container.find(".localUpload").addClass("disabled_btn"),
                    this.imgProcess.disableUploadBtn(),
                -1 == $(".localUpload").prop("outerHTML").indexOf("jQuery") && this.container.find(".maxlength_cover").show()
            }
            ,
            h.prototype.enableUploadBtn = function() {
                this.container.find(".localUpload").removeClass("disabled_btn"),
                    this.imgProcess.enableUploadBtn(),
                    this.container.find(".maxlength_cover").hide()
            }
            ,
            h.prototype.getItemById = function(t) {
                for (var e, i = null, n = 0, a = this.imgList.length; n < a; n++)
                    (e = this.imgList[n]).id === t && (i = e.item);
                return i
            }
            ,
            h.prototype.getItemObjById = function(t) {
                for (var e, i = 0, n = this.imgList.length; i < n && (e = this.imgList[i]).id != t; i++)
                    ;
                return e
            }
            ,
            h.prototype.dropHandler = function(t) {}
            ,
            h
    }),
    define("component/rearLogin58/js/rearLogin58", ["Controller/Controller", "util/cookie", "util/postClickLog"], function(e, r, c) {
        if ("undefined" != typeof userid && "0" != userid && "" !== userid || 1 == extMap.wkLimitPost)
            return function() {
                this.type = "rearLogin58",
                    this.init = function() {}
                    ,
                    this.render = function(t) {}
                    ,
                    this.showLogin = function() {}
                    ,
                    this.isLogin = function() {
                        return !0
                    }
            }
                ;
        var i = {
            isLogin: "undefined" != typeof userid && "0" != userid && "" !== userid,
            reartab: function() {
                i.qieHuanTab(".usertab a", ".userlogin_bd .userlogintab")
            },
            qieHuanTab: function(t, e) {
                $($(t).selector).bind("click", function() {
                    $(this).hasClass("on") || ($(this).addClass("on").siblings().removeClass("on"),
                        $($(e).selector).eq($(this).index()).show().siblings().hide())
                })
            },
            loginsuccess: function(t) {
                if (this.isLogin = !0,
                        !t)
                    t = {
                        userid: ""
                    };
                $(".rearlogin58").hide();
                $('<div class="loginsuccess"><p class="login_ok">恭喜您登录成功</p><p class="logintip">您可以继续发布了</p></div>').insertAfter(".rearlogin58"),
                window.HP && window.HP.user && (HP.user.containerid = "login",
                    HP.user.show()),
                    e.triggerSubmit()
            }
        };
        function t() {
            $(".rearlogin58 .usertab .phonenum ").hasClass("on") ? $("#pptmobilecodeloginButton").trigger("click") : $("#loginButton").trigger("click")
        }
        function n() {
            this.init()
        }
        return window.mobileloginSuccessFunction = function(t) {
            var e = new Date;
            e = new Date(e.getFullYear() + 1,e.getMonth(),e.getUTCDate());
            r.set("lastlogtype", "mobile", e),
                i.loginsuccess(t)
        }
            ,
            window.successFunction = function(t) {
                var e = new Date;
                e = new Date(e.getFullYear() + 1,e.getMonth(),e.getUTCDate());
                r.set("lastlogtype", "userpwd", e),
                    i.loginsuccess(t)
            }
            ,
            window.emailsuccessFunction = function(t) {
                var e = new Date;
                e = new Date(e.getFullYear() + 1,e.getMonth(),e.getUTCDate());
                r.set("lastlogtype", "userpwd", e),
                    closeopendiv(),
                    $("#pptRegForm").hide().insertAfter($("#loginFrame")),
                    i.loginsuccess(t)
            }
            ,
            $("#fabubtn").bind("click", t),
            $("#pptRegForm").hide(),
            $("#emailreg").click(function() {
                c.send("pc_post_login_tab_namepassword_emailregister"),
                    require(["component/popwin/js/popwin"], function(t) {
                        var e = $("#pptRegForm").show();
                        t.show("用户注册", e, 440, 380, !0, function() {
                            $("#pptRegForm").hide().insertAfter($("#loginFrame"))
                        })
                    })
            }),
            i.reartab(),
            n.prototype.type = "rearLogin58",
            n.prototype.init = function() {
                this.elem = $(".rearlogin58")
            }
            ,
            n.prototype.isLogin = function() {
                return i.isLogin
            }
            ,
            n.prototype.doLogin = function() {
                t()
            }
            ,
            n.prototype.firstShow = !0,
            n.prototype.bindDomEvent = function() {}
            ,
            n.prototype.showLogin = function(t, e) {
                if (!this.isLogin()) {
                    if (this.show(),
                            this.firstShow) {
                        this.firstShow = !1;
                        var i = r.get("lastlogtype")
                            , n = "";
                        "mobile" == i ? n = "pc_post_login_tab_fastlogin_default" : "userpwd" == i && ($("a.usernum").click(),
                            n = "pc_post_login_tab_namepassword_default"),
                        0 < n.length && c.send(n),
                            $(".usertab a").click(function() {
                                $(this).hasClass("phonenum") ? c.send("pc_post_login_tab_fastlogin_click") : c.send("pc_post_login_tab_namepassword_click")
                            }),
                            $(".reg-a").click(function() {
                                c.send("pc_post_login_tab_namepassword_forgetpassword")
                            }),
                            $("#pptmobilecodeloginresendbtn").click(function() {
                                c.send("pc_post_login_tab_fastlogin_getcode")
                            })
                    }
                    var a = new RegExp("^(13|14|15|17|18)\\d{9}$")
                        , o = e.getValue();
                    o && 0 < o.length && a.test(o) && ($("#pptmobilecodeloginmobile").val(o),
                        $("#pptmobilecodeloginresendbtn").addClass("show_color"));
                    var s = $(".submit_wrap").offset();
                    setTimeout(function() {
                        window.scrollTo("", s.top - 550)
                    }, 300)
                }
            }
            ,
            n.prototype.render = function(t) {
                t[0].appendChild(this.elem[0]),
                    this.bindDomEvent(),
                    this.hide()
            }
            ,
            n.prototype.show = function() {
                this.rows.containerElem.show(),
                    this.elem.show()
            }
            ,
            n.prototype.hide = function() {
                this.rows.containerElem.hide(),
                    this.elem.hide()
            }
            ,
            n
    }),
    define("component/cubetg/js/cubetg", ["Controller/Controller"], function(w) {
        var _ = {
            tg_dispLocalId: ____json4fe.locallist.dispid,
            tg_dispCateId: ____json4fe.catentry[1].dispid,
            tg_para: {},
            tg_source: 1501,
            tg_userType: 0
        }
            , C = function(i, n) {
            i.bind("change", function(t, e) {
                x(i.attr("nameid"), e, n)
            })
        }
            , x = function(t, e, i) {
            if ("" != userid && "0" != userid) {
                1 == i ? _.tg_dispCateId = -1 == e || "" == e ? ____json4fe.catentry[1].dispid : e : 300 <= i && i < 400 ? _.tg_para[t] = e : 20 == i || 21 == i || 29 == i ? _.tg_dispLocalId = -1 == e || "" == e ? ____json4fe.locallist.dispid : e : 50 != i && 51 != i && 52 != i || (e == undefined ? _.tg_userType = 0 : _.tg_userType = e);
                var n = window.location.protocol + "//cube.58.com/cube/loadPromotionData?dispLocalId=" + _.tg_dispLocalId + "&dispCateId=" + _.tg_dispCateId
                    , a = "";
                for (prop in _.tg_para)
                    a = a + prop + ":" + _.tg_para[prop] + ";";
                "" != (a = a.substring(0, a.length - 1)) && (n = n + "&para=" + a),
                    n = (n = n + "&source=" + _.tg_source) + "&userType=" + _.tg_userType;
                var o = $("#tg_iframe");
                o.css("height", "0px"),
                    o.attr("src", n)
            }
        }
            , e = function(t) {
            if ("" != userid) {
                var e = window.location.href;
                urlParts = e.split("/"),
                "v" == urlParts[3].slice(0, 1) && (_.tg_source = 1507),
                0 == $('*[name="IsBiz"]').length && 0 == $('*[name="isBiz"]').length && 0 == $('*[name="faburen"]').length && (_.tg_userType = 1);
                for (var i = ["isBiz", "faburen"], n = 0, a = i.length; n < a; n++) {
                    var o = $('*[name="' + i[n] + '"]');
                    if (1 < o.length && "radio" == o.eq(0).attr("type")) {
                        0 == $('input[name="' + i[n] + '"]:checked').length ? _.tg_userType = 1 : _.tg_userType = $('input[name="' + i[n] + '"]:checked').val();
                        break
                    }
                }
                1 == $('*[name="IsBiz"]').length && "INPUT" == $('*[name="IsBiz"]').attr("tagName") && ($('*[name="IsBiz"]').attr("style") == undefined || $('*[name="IsBiz"]').attr("style").indexOf("none") < 0) && (1 == $('input[name="IsBiz"]:checked').length ? _.tg_userType = 1 : _.tg_userType = 0),
                "9224" == ____json4fe.catentry[0].dispid && "13901" == ____json4fe.catentry[1].dispid && $(".naddList span[k=select]").each(function() {
                    if (!$(this).hasClass("off")) {
                        var t = $(this).parent().attr("locals").split(",");
                        _.tg_dispLocalId = t[t.length - 1]
                    }
                });
                var s, r, c = ____json4fe.catentry[0].dispid;
                s = t,
                    r = window.location.protocol + "//cube.58.com/cube/loadPromotionData?dispLocalId=" + _.tg_dispLocalId + "&dispCateId=" + _.tg_dispCateId + "&source=" + _.tg_source + "&userType=" + _.tg_userType,
                    s.append('<iframe id="tg_iframe" name="tg_iframe" src="' + r + '" height="0px" width="850px" frameborder="0"></iframe><div id="commercial"></div>');
                $("#tg_iframe");
                if (29 == _.tg_dispCateId && ($("#ObjectType").live("change", function() {
                        x(2539, $(this).val(), 388)
                    }),
                        $("#brand").live("change", function() {
                            x(5866, $(this).val(), 388)
                        })),
                    8444 != _.tg_dispCateId && 23065 != _.tg_dispCateId && 145 != _.tg_dispCateId || $("#servicerange_post_val").bind("change", function() {
                        x(9066, $("#servicerange_post_val").val(), 388)
                    }),
                    14502 == _.tg_dispCateId && $('select[name="post_subcate_3"]').bind("change", function() {
                        x(0, $('select[name="post_subcate_3"]').find("option:selected").val(), 1)
                    }),
                    14256 != _.tg_dispCateId && 14255 != _.tg_dispCateId || $("#guojiaid a").bind("click", function() {
                        x($.cmcs.rootPara[0].nameid, $(this).attr("data"), 398)
                    }),
                    9224 == c && ($('span[name="cate"]').click(function() {
                        x(0, $(this).attr("value"), 1)
                    }),
                        $("#city-select-list li").click(function() {
                            x(0, $(this).attr("localid"), 29)
                        }),
                        $("#divJobCate a").click(function() {
                            x(0, $(this).attr("para").split(",")[1], 1)
                        }),
                        $("#tr_city").delegate("span[k=select]", "click", function() {
                            var t = $(this).siblings("p.disJob").find("span").attr("locals").split(",");
                            x(0, t[t.length - 1], 20)
                        })),
                    13941 == c && $("#seleJobCateList a").click(function() {
                        x(0, $(this).attr("para").split(",")[0], 1)
                    }),
                    12 != _.tg_dispCateId && 10 != _.tg_dispCateId && 8 != _.tg_dispCateId || ($("#hiddenBtnArea").removeAttr("onclick"),
                        $("#hiddenBtnArea").bind("click", function(t) {
                            getCityAreaID(),
                                T()
                        })),
                    9 == ____json4fe.catentry[1].dispid)
                    if ((u = w.records.get("type")) && 0 == u.getValue()) {
                        var l = w.records.get("fangwudizhi");
                        l && l.container.bind("changeTuiguang", function(t, e) {
                            var i = e.split(",");
                            x(0, i.pop(), 20)
                        })
                    }
                for (var d = [{
                    type: 20,
                    name: "localArea",
                    except: [241, 23089, 47, 46, 43, 48, 8502, 23436, 23437, 36, 38483, 38484, 37, 35, 39, 508, 38, 40, 45, 41, 44, 246, 23224, 23435, 27970, 50, 30, 13978, 239, 23275, 250, 38575, 254, 249, 9198]
                }, {
                    type: 21,
                    name: "localDiduan",
                    except: [241, 23089, 47, 46, 43, 48, 8502, 23436, 23437, 36, 38483, 38484, 37, 35, 39, 508, 38, 40, 45, 41, 44, 246, 23224, 23435, 27970, 50, 30, 13978, 239, 23275, 250, 38575, 254, 249, 9198]
                }, {
                    type: 300,
                    name: "ObjectType",
                    except: [9, 15, 253, 114, 19, 254, 13, 14, 251, 12, 14256, 14255, 239]
                }, {
                    type: 301,
                    name: "shenqingxueli",
                    except: [14255]
                }, {
                    type: 302,
                    name: "fuwuleixing",
                    except: [14455, 14526, 14354]
                }, {
                    type: 303,
                    name: "kechengsc",
                    except: [14526, 14455]
                }, {
                    type: 304,
                    name: "kemu",
                    except: []
                }, {
                    type: 305,
                    name: "xingcheng",
                    except: [8659]
                }, {
                    type: 306,
                    name: "tongdao",
                    except: []
                }, {
                    type: 307,
                    name: "type",
                    except: [9, 12, 15, 239, 31, 114, 23275, 19, 250, 38575, 254, 13, 249, 9198, 23004, 14, 251]
                }, {
                    type: 308,
                    name: "pinpai",
                    except: []
                }, {
                    type: 309,
                    name: "fuwubaohan",
                    except: []
                }, {
                    type: 310,
                    name: "pinzhong",
                    except: []
                }, {
                    type: 311,
                    name: "xiaozhiwei",
                    except: []
                }, {
                    type: 312,
                    name: "fuwuduixiang",
                    except: [14354]
                }, {
                    type: 313,
                    name: "fenlei",
                    except: []
                }, {
                    type: 314,
                    name: "esqgleibie",
                    except: []
                }, {
                    type: 315,
                    name: "MinPriceqj",
                    except: []
                }, {
                    type: 316,
                    name: "gongxiao",
                    except: []
                }, {
                    type: 317,
                    name: "brand",
                    except: []
                }, {
                    type: 318,
                    name: "oldlevel",
                    except: [46, 43, 23436, 36, 38483, 38484, 37, 35, 39, 508, 38, 40, 45, 41, 44, 246, 23224, 50, 253, 239, 240]
                }, {
                    type: 319,
                    name: "fenzhiwei",
                    except: []
                }, {
                    type: 320,
                    name: "renjun",
                    except: []
                }, {
                    type: 321,
                    name: "ObjectType0",
                    except: []
                }, {
                    type: 322,
                    name: "objecttype",
                    except: [250, 38575]
                }, {
                    type: 323,
                    name: "brand",
                    except: []
                }, {
                    type: 50,
                    name: "IsBiz",
                    except: [23065, 8444, 8445, 23087, 22431, 8442, 29389, 156, 118]
                }, {
                    type: 51,
                    name: "isBiz",
                    except: []
                }, {
                    type: 52,
                    name: "faburen",
                    except: []
                }, {
                    type: 1,
                    name: "xiaozhiweiGroup",
                    except: []
                }], p = 0, h = d.length; p < h; p++) {
                    for (var u = d[p].type, f = d[p].name, m = d[p].except, g = !1, v = 0, y = m.length; v < y; v++)
                        if (m[v] == _.tg_dispCateId) {
                            g = !0;
                            break
                        }
                    1 != g && (obj = $("*[name=" + f + "]"),
                    0 < obj.length && C(obj, u))
                }
                var b = $("#aspnetForm");
                0 != b.length && (b.append('<input type="hidden" name="cube_post_jsonkey" id="cube_post_jsonkey">'),
                    fabuButton.hover(k))
            }
        }
            , k = function() {
            if (window.frames.tg_iframe != undefined)
                try {
                    if ("function" == typeof window.frames.tg_iframe.operationBeforeCommit) {
                        var t = window.frames.tg_iframe.operationBeforeCommit();
                        $("#cube_post_jsonkey").val(t)
                    }
                } catch (e) {}
        }
            , T = function() {
            if (12 == _.tg_dispCateId || 10 == _.tg_dispCateId || 8 == _.tg_dispCateId) {
                var t = $("#fabu");
                0 != t.length && t.attr("outtg") == undefined && "" === userid && (_PE.xq.attr("m") == undefined ? x(0, ____json4fe.locallist.dispid, 29) : "0" == _PE.xq.attr("m") ? x(0, _PE.xq.attr("r"), 29) : x(0, _PE.xq.attr("m"), 29))
            }
        };
        window.tgEcsFrame = function(t) {
            29 == _.tg_dispCateId && "" === userid && self == top && (1 == t ? $("#tg_iframe_w").css("left", "149px") : 0 == t && $("#tg_iframe_w").css("left", "76px"))
        }
            ,
            document.domain = "58.com";
        var p = 9999
            , h = 0;
        function t(t, e) {
            this.init(t, e),
                this.dataName = t.dataName || t.name
        }
        return $(function() {
            $("<style type='text/scss'>.fancybox-lock-test {overflow-y: hidden !important;}</style>").appendTo("head");
            var t = $(window).width();
            $("html").addClass("fancybox-lock-test");
            var e = $(window).width();
            $("html").removeClass("fancybox-lock-test"),
                $("<style type='text/scss'>.fancybox-margin{margin-right:" + (e - t) + 'px;overflow-y:hidden;}.tg_overlay{width:100%;height:100%; position:fixed; _position:absolute;top:0;left:0;filter:Alpha(Opacity=40);opacity:0.4;background-color:#000;z-index:100000; _top:expression(documentElement.scrollTop + "px"); }</style>').appendTo("head")
        }),
            window.showTuiguangPanel = function(t, e, i) {
                var n = "tgPanel_" + ++h
                    , a = "tgPanelOverlay_" + h;
                zIndex_overlay = p++,
                    zIndex_panel = p++,
                    $("body").append('<div id="' + a + '" class="tg_overlay" ><iframe scrolling="no" frameborder="0" width="100%" height="100%" style="background-color:#000;filter:Alpha(Opacity=0);opacity:0" src="about:blank"></iframe></div>'),
                    $("#" + a).css("zIndex", zIndex_overlay),
                    0 == e ? $("body").append('<div id="' + n + '" class="fe_window2" style="min-height:200px;_height:200px; width:' + t + "px; z-index: " + zIndex_panel + ';display:block;position:absolute;border:5px solid #5F5F5F;background:#FFFFFF;margin:0;">' + i + "</div>") : $("body").append('<div class="fe_window2" id="' + n + '" style="height:' + e + "px; width:" + t + "px; z-index: " + zIndex_panel + ';display:block;position:absolute;border:5px solid #5F5F5F;background:#FFFFFF;margin:0;">' + i + "</div>"),
                    $(".fe_window2 .contains1").css("zIndex", zIndex_panel).css("left", "0px").css("top", "0px").css("position", "static"),
                    $("html").addClass("fancybox-margin");
                var o = $("#" + n)
                    , s = $(document).scrollTop()
                    , r = $(window).height()
                    , c = $(window).width()
                    , l = o.height()
                    , d = o.width();
                return _posiTop = (r - l) / 2 + s,
                    _posiLeft = (c - d) / 2,
                    self == top ? o.css({
                        left: _posiLeft + "px",
                        top: _posiTop + "px",
                        display: "block"
                    }) : ($("body").css("position", "relative"),
                        o.css({
                            left: _posiLeft + "px",
                            bottom: "200px",
                            display: "block"
                        })),
                    n
            }
            ,
            window.resizeTuiguangPanel = function(t, e, i) {
                var n = $("#" + t)
                    , a = $(document).scrollTop()
                    , o = $(window).height()
                    , s = $(window).width();
                _posiTop = (o - i) / 2 + a,
                    _posiLeft = (s - e) / 2,
                    self == top ? n.animate({
                        top: _posiTop,
                        left: _posiLeft,
                        height: i,
                        width: e
                    }, "fast") : n.height() < i ? n.animate({
                        bottom: "100px",
                        left: _posiLeft,
                        height: i,
                        width: e
                    }, "fast") : n.animate({
                        bottom: "200px",
                        left: _posiLeft,
                        height: i,
                        width: e
                    }, "fast")
            }
            ,
            window.closeTuiguangPanel = function(t) {
                var e = "tgPanelOverlay_" + t
                    , i = $("#" + ("tgPanel_" + t))
                    , n = $("#" + e);
                0 != i.length && 0 != n.length && (i.remove(),
                    n.remove(),
                    h--,
                0 == $(".tg_overlay").length && ($("html").removeClass("fancybox-margin"),
                    p = 9999))
            }
            ,
            t.prototype.init = function(t, e) {
                this.opts = $.extend(!0, {}, this.constructor.opts, t)
            }
            ,
            t.prototype.doCheck = function() {
                return {
                    bValid: !0,
                    msg: ""
                }
            }
            ,
            t.prototype.getValue = function() {
                var t = "";
                if (window.frames.tg_iframe != undefined)
                    try {
                        "function" == typeof window.frames.tg_iframe.operationBeforeCommit && (t = window.frames.tg_iframe.operationBeforeCommit())
                    } catch (e) {}
                return t
            }
            ,
            t.prototype.render = function(t) {
                "undefined" != typeof userid && "0" != userid && "" !== userid ? e(t) : this.rows.hide()
            }
            ,
            t
    }),
    define("util/util", [], function() {
        var e = {};
        return function(t) {
            for (var e = ["String", "Function", "Object", "Array", "Number", "Null", "Undefined", "Boolean"], i = 0; i < e.length; i++) {
                !function(e) {
                    t["is" + e] = function(t) {
                        return Object.prototype.toString.call(t) === "[object " + e + "]"
                    }
                }(e[i])
            }
        }(e),
            e.isNaN = function(t) {
                return e.isNumber(t) && t !== +t
            }
            ,
            e.mixin = function(t, e) {
                for (var i in e)
                    e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }
            ,
            e.isArray = function(t) {
                var e = !1;
                return "object" == typeof t && "[object Array]" === Object.prototype.toString.call(t) && (e = !0),
                    e
            }
            ,
            e
    }),
    define("component/paypost/js/paypost", ["util/util", "component/commpop/js/commpop", "util/cookie"], function(f, m, t) {
        var e = function(t) {
            this.url4ajaxPayState = window.location.protocol + "//post.58.com/repo/payment/paystate",
                this.defPopParam = {
                    src: "",
                    title: "标题",
                    titleCenter: "true",
                    width: "560",
                    height: "360",
                    canClose: !1
                },
                this.defPayParam = f.mixin({}, t)
        };
        return e.prototype = {
            constructor: e,
            init: function(t, e) {
                var i = ____json4fe.locallist.listname
                    , n = ____json4fe.catentry[1].listname
                    , a = t.bizExt.payType
                    , o = {
                    identityCheckPay: "i",
                    monthlyLimitPay: "m",
                    dailyLimitPay: "d"
                };
                o[a] || (o[a] = a.split("")[0]),
                    this.log4citycateway = i + "_" + n + "_" + o[a] + "_",
                    this.cate = n,
                    this.payType = t.bizExt.payType;
                var s = (this.j = t).bizExt
                    , r = "付费发帖";
                "identityCheckPay" == s.payType && (r = "支付认证",
                "string" == typeof s.identityTitle && 0 < $.trim(s.identityTitle).length && (r = s.identityTitle)),
                    this.payUrl = s.payUrl,
                    this.payInfoId = s.payInfoId,
                    this.orderId = s.orderId,
                    this.payTip = s.payTip,
                    this.useMorePayWay = s.useMorePayWay,
                    this.payParam = f.mixin(this.defPayParam, s.payParam),
                    this.zmrzUrl = s.zmrzUrl,
                    this.zmrzParam = s.zmrzParam;
                var c, l = {
                    0: "347",
                    1: "347",
                    def: "347"
                };
                this.payIsBiz = s.payIsBiz,
                    c = "undefined" != typeof this.payIsBiz ? l[this.payIsBiz] : "0" === s.payIsLicenseVerified ? l[s.payIsLicenseVerified] : l.def,
                    this.popHeight = c;
                var d = this.getPayGuidePage(this.payParam, this.zmrzParam)
                    , p = void 0 !== e && e.canClose || !1
                    , h = f.mixin(this.defPopParam, {
                    src: d,
                    title: r,
                    titleCenter: "true",
                    width: "560",
                    height: c,
                    canClose: p,
                    payType: this.payType,
                    cate: this.cate
                });
                this.guidePageParm = h,
                    this.payGuidePop = new m(h),
                    clickLog("from=" + this.log4citycateway + "pc_release_pay_show"),
                    this.bindGuidePageEvents();
                var u = "";
                u = "identityCheckPay" === this.payType ? "zfrz_i_pc_releasepop_show_" + this.cate : "ftsx_i_pc_releasepop_show_" + this.cate,
                    clickLog(u)
            },
            getPayGuidePage: function(t, e) {
                var i = t.buyAccountId
                    , n = this.payUrl + "?channelId=" + t.weixinChannelId + "&buyAccountId=" + i
                    , a = this.payUrl + "?channelId=" + t.alipayChannelId + "&buyAccountId=" + i
                    , o = this.payUrl + "?buyAccountId=" + i;
                for (var s in t)
                    "weixinChannelId" != s && "alipayChannelId" != s && "buyAccountId" != s && (n += "&" + s + "=" + t[s],
                        a += "&" + s + "=" + t[s],
                        o += "&" + s + "=" + t[s]);
                var r = ""
                    , c = "";
                this.useMorePayWay ? (r = '<li id="payListsWX"><a data-ajax-href="' + n + '" href="' + n + '" class="payicon payListsWXicon" target="_blank"></a>微信支付<span class="payListsEm">￥' + t.orderMoney + "</span></li>",
                    c = '<li id="payListsOT"><a href="' + o + '" class="payicon payListsOTicon"></a>更多付款方式</li>') : r = '<li id="payListsWX" class = "noMorePayWay"><a data-ajax-href="' + n + '" href="' + n + '" class="payicon payListsWXicon" target="_blank"></a>微信支付<span class="payListsEm">￥' + t.orderMoney + "</span></li>";
                var l = $('<div class="payGuide"><div class="payGuideTip"><div>' + this.payTip + '</div></div><div class="payListsWrap"><ul class="payLists clearfix">' + r + '<li id="payListsAL"><a href="' + a + '" class="payicon payListsALicon" target="_blank"></a>支付宝支付<span class="payListsEm">￥' + t.orderMoney + "</span></li>" + c + "</ul></div></div>");
                if ("identityCheckPay" == this.j.bizExt.payType && this.j.bizExt.useZhima && this.j.bizExt.zmrzUrl) {
                    var d = this.zmrzUrl + "?payInfoId=" + this.payInfoId + "&orderId=" + this.orderId;
                    if ("object" == typeof e)
                        for (var p in e)
                            d += "&" + p + "=" + e[p];
                    var h = "";
                    h = /^(13|14|15|18|17)\d{9}$/.test(e.Phone) ? '<li id="payListsZM"><a data-href="' + d + '" href="javascript:void(0);" class="payicon payListsZMicon"></a>芝麻信用<span class="payListsEm">免费认证</span></li>' : '<li id="payListsZM" class = "greyPayListsZM"><a href="javascript:void(0);" class="payicon greyPayListsZMicon"></a>芝麻信用<span class="greyPayListsEm">免费认证</span><p style="font-size: 12px; margin: 0;">(联系人电话非手机号码)</p></li>',
                        l = $('<div class="payGuide"><div class="payGuideTip"><div>' + this.payTip + '</div></div><div class="payListsWrap"><ul class="payLists rzLists clearfix">' + h + '<li id="payListsWX"><a data-ajax-href="' + n + '" href="' + n + '" class="payicon payListsWXicon" target="_blank"></a>微信支付<span class="payListsEm">￥' + t.orderMoney + '</span></li><li id="payListsAL"><a href="' + a + '" class="payicon payListsALicon" target="_blank"></a>支付宝支付<span class="payListsEm">￥' + t.orderMoney + "</span></li></ul></div></div>")
                }
                return this.guidePage = l,
                    this.payWXEwm = this.guidePage.find("#payListsWX"),
                    this.payWX = this.guidePage.find(".payListsWXicon"),
                    this.payAL = this.guidePage.find(".payListsALicon"),
                    this.payOT = this.guidePage.find(".payListsOTicon"),
                    this.payZM = this.guidePage.find(".payListsZMicon"),
                    l
            },
            bizRefresh: function() {
                this.guidePage.addClass("payGuideRefresh");
                var t = $('<p class="refresh">\t\t\t\t已有帖子未获得效果？刷新获取更多效果！\t\t\t\t\t<a href="' + window.location.protocol + '//my.58.com/" target="_blank">\t\t\t\t\t\t免费去刷新&gt;&gt;\t\t\t\t\t</a>\t\t\t\t</p>')
                    , e = $('<p class="refresh">\t\t\t\t已有职位的招聘效果不理想？刷新职位，吸引更多人才！\t\t\t\t\t<a href="' + window.location.protocol + '//my.58.com/" target="_blank">\t\t\t\t\t\t去刷新&gt;&gt;\t\t\t\t\t</a>\t\t\t\t</p>');
                if (this.j.bizExt.payIsLicenseVerified != undefined || this.j.bizExt.payIsLicenseVerified == undefined && this.payIsBiz == undefined ? this.guidePage.append(e) : this.guidePage.append(t),
                    "0" == this.payIsBiz) {
                    var i = $('<p class="bizRefresh">\t\t\t\t\t若您是商家，请以商家身份获得更多免费发布条数！\t\t\t\t\t\t<a href="' + window.location.protocol + '//post.58.com/" target="_blank">\t\t\t\t\t\t\t以商家身份发帖&gt;&gt;\t\t\t\t\t\t</a>\t\t\t\t\t</p>');
                    this.guidePage.append(i)
                } else if ("0" == this.j.bizExt.payIsLicenseVerified) {
                    var n = $('<p class="bizRefresh">\t\t\t\t第三方认证营业执照，可将账户发布条数提升至30条！\t\t\t\t\t<a href="' + window.location.protocol + '//my.58.com/pro/safeset/authbiz" target="_blank">\t\t\t\t\t\t去认证营业执照&gt;&gt;\t\t\t\t\t</a>\t\t\t\t</p>')
                        , a = $('<p class="bizRefresh">\t\t\t\t立即认证营业执照，获得更多免费发帖数！\t\t\t\t\t<a href="' + window.location.protocol + '//my.58.com/pro/safeset/authbiz" target="_blank">\t\t\t\t\t\t去认证&gt;&gt;\t\t\t\t\t</a>\t\t\t\t</p>');
                    "9224" == ____json4fe.catentry[0].dispid ? this.guidePage.append(n) : this.guidePage.append(a)
                }
            },
            getPayStatePage: function() {
                var t = $('<div class="payState"><div class="payStateTip"><div>请在新打开的支付页面上完成付款，付款完成前请不要关闭此窗口。 如您在支付过程中遇到问题，请联系客服：  <span class="payim"><span class="payimicon"></span><a class="paycontact" href="' + window.location.protocol + '//about.58.com/">联系客服</a></span></div></div><div class="payStateBtn"><ul><li id="paySuccess"><div class="payBtn">已完成支付</div></li><li id="payAgain"><div class="payBtn">重新支付</div></li></ul></div></div>');
                return this.statePage = t,
                    this.payFinish = this.statePage.find("#paySuccess"),
                    this.payAgain = this.statePage.find("#payAgain"),
                    t
            },
            bindStatePageEvents: function() {
                var e = this
                    , i = this.log4citycateway;
                this.payFinish.on("click", function(t) {
                    clickLog("from=" + i + "pc_releasepop_payfinish"),
                        e.ajaxPayState(function(t) {
                            t.errorCode,
                                window.location.href = t.data.url
                        })
                }),
                    this.payAgain.on("click", function(t) {
                        clickLog("from=" + i + "pc_releasepop_payagain"),
                            e.ajaxPayState(function(t) {
                                0 == t.errorCode ? window.location.href = t.data.url : (e.payStatePop.delMask(),
                                    e.ajaxPayParams(function(t) {
                                        e.init(t)
                                    }))
                            })
                    })
            },
            ajaxPayState: function(e) {
                var i = this;
                $.ajax({
                    url: i.url4ajaxPayState,
                    type: "get",
                    data: {
                        infoid: i.payInfoId,
                        platfrom: "pc",
                        paytype: i.j.bizExt.payType,
                        orderid: i.orderId
                    },
                    success: function(t) {
                        e && e.call(i, t)
                    }
                })
            },
            ajaxPayParams: function(e) {
                var i = this;
                $.ajax({
                    url: "//post.58.com/repo/payment/payparams",
                    dataType: "jsonp",
                    async: !1,
                    data: {
                        infoid: i.payInfoId,
                        platfrom: "pc"
                    },
                    success: function(t) {
                        e.call(i, t)
                    },
                    error: function(t) {}
                })
            },
            bindGuidePageEvents: function() {
                var e = this.log4citycateway
                    , i = this;
                this.payOT && this.payOT.on("click", function(t) {
                    clickLog("from=" + e + "pc_releasepop_morepay")
                }),
                    this.payWX.on("click", function(t) {
                        var e = "";
                        e = "identityCheckPay" === i.payType ? "zfrz_i_pc_releasepop_wechatpay_" + i.cate : "ftsx_i_pc_releasepop_wechatpay_" + i.cate,
                            clickLog("from=" + e)
                    }),
                    this.payAL.on("click", function(t) {
                        var e = "";
                        e = "identityCheckPay" === i.payType ? "zfrz_i_pc_releasepop_alipay_" + i.cate : "ftsx_i_pc_releasepop_alipay_" + i.cate,
                            clickLog("from=" + e)
                    }),
                    this.guidePage.on("click", ".payListsWXicon, .payListsALicon", function(t) {
                        i.payGuidePop.delMask(),
                            i.payStatePop = new commPop({
                                src: i.getPayStatePage(),
                                title: "支付提示信息",
                                titleCenter: "true",
                                width: "560",
                                height: "250",
                                canClose: !1
                            }),
                            i.bindStatePageEvents()
                    }),
                this.payZM && (this.payZM.on("click", function(t) {
                    clickLog("from=zfrz_i_pc_releasepop_zhima_" + i.cate)
                }),
                    this.guidePage.on("click", ".payListsZMicon", function(t) {
                        var e = $(this).attr("data-href");
                        "undefined" != e && "string" == typeof e && $.ajax({
                            url: e,
                            type: "get",
                            dataType: "json",
                            success: function(t) {
                                i.zmxyUrl = t.zmxyUrl,
                                    i.initZmrzAfterFourPop(),
                                    window.initZmrzResult = function(t) {
                                        if ("object" == typeof t && i.zmrzAfterFourPop && i.zmrzAfterFourPop.topbar) {
                                            var e = i.zmrzAfterFourPop.topbar.find(".feComPopGoBackbtn");
                                            "true" == t.certify_result && 0 < e.length ? e.hide() : e.attr("certify_errorcode", t.certify_errorcode)
                                        }
                                    }
                                    ,
                                    window.goPayPostGuidePage = function(t, e) {
                                        "string" == typeof e && "zmrzTryAgain" == e ? (i.initZmrzAfterFourPop(),
                                            clickLog("from=" + i.log4citycateway + "pc_releasepop_zmrz_identitynumber_tryagain")) : i.zmrzToGuidePage(t)
                                    }
                            }
                        })
                    }))
            },
            initZmrzAfterFourPop: function() {
                var t = this;
                t.payGuidePop && t.payGuidePop.delMask(),
                t.zmrzAfterFourPop && t.zmrzAfterFourPop.delMask(),
                    t.zmrzAfterFourPop = new commPop({
                        src: t.zmxyUrl,
                        url: t.zmxyUrl,
                        title: "<span class='feComPopGoBackbtn'><i></i>返回</span>",
                        titleStyle: {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            border: "none"
                        },
                        loadingStyle: {
                            height: t.popHeight,
                            padding: "0px"
                        },
                        width: "560",
                        height: t.popHeight,
                        iframeStyle: {
                            height: "604",
                            margin: "-174px 0px 0px -40px"
                        },
                        canClose: !1
                    }),
                    t.bindZmrzPageEvents()
            },
            bindZmrzPageEvents: function() {
                var e = this;
                e.zmrzAfterFourPop && e.zmrzAfterFourPop.topbar && e.zmrzAfterFourPop.topbar.find(".feComPopGoBackbtn").on("click", function(t) {
                    e.zmrzToGuidePage(),
                        void 0 === $(this).attr("certify_errorcode") ? clickLog("from=" + e.log4citycateway + "pc_releasepop_zmrz_identitynumber_return") : clickLog("from=" + e.log4citycateway + "pc_releasepop_zmrz_fail_return")
                })
            },
            zmrzToGuidePage: function(t) {
                var e = this;
                e.zmrzAfterFourPop && (e.zmrzAfterFourPop.delMask(),
                    window.goPayPostGuidePage = null,
                    window.initZmrzResult = null),
                    e.init(e.j),
                "object" == typeof t && clickLog("from=" + e.log4citycateway + "pc_releasepop_zmrz_identitynumber_other")
            }
        },
            new e
    }),
    define("component/verifyPop/js/verifyPop", [], function() {
        var t = function(t) {};
        return t.prototype = {
            popVerify: function(t) {
                var e = null;
                if ("undefined" != typeof window.y58) {
                    e = {
                        callback: "",
                        isConflict: !0,
                        terminal: "PC",
                        cateId: "",
                        level: "",
                        infoId: "",
                        appId: "",
                        sessionId: "",
                        style: ""
                    };
                    var i = t.bizExt;
                    if (i && "object" == typeof i) {
                        try {
                            for (var n in i)
                                i.hasOwnProperty(n) && (e[n] = i[n])
                        } catch (a) {
                            e = i
                        }
                        e.callback = window.location.protocol + "//my.58.com",
                            e.isConflict = !0,
                            e.terminal = "PC",
                            e.style = "",
                            window.y58.yConfig(e)
                    }
                }
            }
        },
            t
    }),
    define("component/autoCompleteWuyedizhi/js/validateWuyedizhi", ["util/postClickLog", "component/popwin/js/popwin"], function(s, r) {
        return {
            check: function(t, e, i) {
                var n = this
                    , a = e;
                if ("683039" != t.HouseUserType) {
                    var o = {
                        xiaoqu: t.xiaoqu || "",
                        louhao: t.louhao || "",
                        danyuanhao: t.danyuanhao || "",
                        menpaihao: t.menpaihao || "",
                        isadd: isadd ? 1 : 0,
                        isbiz: extMap.isBiz,
                        infoid: infoId || 0
                    };
                    $.ajax({
                        url: window.location.protocol + "//housepostbaseapi.58.com/wuyedizhi/check?callback=?",
                        type: "get",
                        dataType: "jsonp",
                        data: o,
                        success: function(t) {
                            if (0 != t.code) {
                                if (a.attr("disabled", !1).html("发布"),
                                    1 == t.bizExt.count) {
                                    var e = {
                                        info: "当前房子地址已经发布过了哦，请前往进行编辑",
                                        btn: "去编辑",
                                        url: window.location.protocol + "//post.58.com/fang/update/" + t.bizExt.infoid
                                    };
                                    n.showError(e)
                                } else {
                                    e = {
                                        info: "当前房子地址已经发布过了哦，请先下架其他重复房源",
                                        btn: "去下架",
                                        url: "https://my.58.com/index/"
                                    };
                                    n.showError(e)
                                }
                                i(!1)
                            }
                            i(!0)
                        }
                    })
                } else
                    i(!0)
            },
            showError: function(t) {
                s.send("post_zhengzu_wuyuxiangtong_show");
                var e = $("<div>").addClass("error_wrap")
                    , i = $("<div>").addClass("content").addClass("tj_Window");
                e.append(i),
                    i.append('<p class="content_tjWindow">' + t.info + "</p>");
                var n = $('<a href="javascript:;" class="btn-white">关闭</a>')
                    , a = $('<a href="javascript:;">' + t.btn + "</a>");
                n.on("click", function() {
                    s.send("post_zhengzu_wuyexiangtong_jixufabu"),
                        r.hide()
                }),
                    a.on("click", function() {
                        s.send("post_zhengzu_wuyexiangtong_shangjia"),
                            window.location.href = t.url
                    });
                var o = $('<div class="btn_group btn_tjWindow">').append(n, a);
                i.append(o),
                    r.show("已经发布", e, 548, 248, !0, function() {})
            }
        }
    }),
    define("component/popFangbenAttest/js/popFangbenAttest", [], function() {
        var n = !0;
        function t() {
            this.url = window.location.protocol + "//housepostbaseapi.58.com/fblist/rz_p?callback=?",
                this.changeIdentUrl = "//housepostbaseapi.58.com/fblist/fbchangeAgent",
                this.dialogCont = '<div class="fangbenAttest-layer"><div class="fangben-wrap"><i class="icon-biankuang"></i><i class="fangben-code" id="fbCode"></i><p class="fangben-info">{{info}}</p><div class="fangben-button-wrap"><a href="//my.58.com/" class="fangben-button white">稍后认证</a><a class="fangben-button" href="//my.58.com/">我已提交认证</a></div><div class="fangben-change" id="fangbenChange" style="display: {{status}}">我是经纪人</div></div></div>',
                this.changeDialogCont = '<div class="changeIdent-layer"><div class="changeIdent-text"><p class="text">{{tipMsg}}</p><div class="changeIdent-button"><span class="btn white btn-cancel">取消</span><span class="btn yellow btn-continue">知道了</span></div></div></div>',
                this.toastCont = '<div class="toast-layer">{{tipMsg}}</div>'
        }
        return t.prototype = {
            init: function(t, e, i) {
                n && (n = !1,
                t && (this.infoid = t,
                    this.userid = e || "",
                    this.urlParam = i || 1335,
                    this.loadJs()))
            },
            loadJs: function() {
                var t = this
                    , e = document.getElementsByTagName("HEAD")[0]
                    , i = document.createElement("script");
                i.type = "text/javascript",
                    i.src = "//j1.58cdn.com.cn/ui7/post/pc/libs/jquery.qrcode.min.js",
                    i.onload = function() {
                        1334 == t.urlParam ? (t.tipmsg = "请使用 58同城APP 扫描下方二维码，进行认证操作。",
                            t.showFirstDialog()) : t.getFangbenAjax()
                    }
                    ,
                    e.appendChild(i)
            },
            getFangbenAjax: function() {
                var i = this
                    , t = i.url
                    , e = {
                    infoids: this.infoid
                };
                $.ajax({
                    url: t,
                    type: "get",
                    dataType: "jsonp",
                    data: e,
                    success: function(t) {
                        if (0 == t.code && 0 < t.result.length) {
                            var e = t.result[0];
                            i.tipmsg = e.tipmsg || "",
                                i.infoid = e.infoid ? e.infoid : i.infoid,
                                i.showFirstDialog()
                        } else
                            n = !0
                    }
                })
            },
            showFirstDialog: function() {
                var t = this
                    , e = this.dialogCont
                    , i = this.userid
                    , n = this.infoid
                    , a = this.urlParam
                    , o = this.tipmsg
                    , s = 1335 == a && i && 1 != ____json4fe.locallist.dispid ? "block" : "none";
                top.window.$(".fangbenAttest-layer").remove(),
                    top.window.$(".changeIdent-layer").remove(),
                    e = (e = e.replace("{{info}}", o || "")).replace("{{status}}", s),
                    top.window.$("body").append(e),
                    $("#fbCode").qrcode({
                        render: "canvas",
                        width: 146,
                        height: 146,
                        background: "#ffffff",
                        foreground: "#000",
                        text: "http://pwebapp.58.com/fang/appdown.html?from=pc&pid=" + a + "&pcuid=" + i + "&infoid=" + n
                    }),
                    $("#fangbenChange").on("click", function() {
                        t.showPopwin("经纪人身份选择后不可修改，请慎重选择。")
                    })
            },
            showPopwin: function(t) {
                var e = this
                    , i = this.changeDialogCont;
                i = i.replace("{{tipMsg}}", t || ""),
                    top.window.$(".fangbenAttest-layer").remove(),
                    top.window.$(".changeIdent-layer").remove(),
                    top.window.$("body").append(i),
                    top.window.$("body").on("click", ".btn-continue", function() {
                        e.getChangeIdentAjax()
                    }),
                    top.window.$("body").on("click", ".btn-cancel", function() {
                        e.showFirstDialog()
                    })
            },
            showToast: function(t) {
                var e = this.toastCont;
                e = e.replace("{{tipMsg}}", t || ""),
                    top.window.$("body").append(e),
                    setTimeout(function() {
                        top.window.$(".toast-layer").remove()
                    }, 5e3)
            },
            getChangeIdentAjax: function() {
                var e = this
                    , t = this.userid
                    , i = this.infoid
                    , n = this.changeIdentUrl + "?infoid=" + i + "&userid=" + t;
                $.ajax({
                    url: n,
                    type: "get",
                    dataType: "jsonp",
                    success: function(t) {
                        t && 0 == t.code ? window.location.href = "//post.58.com/fang/postsuccess/0/" + i + "/" : (e.showToast(t.msg || "转换失败，请重试"),
                            e.showFirstDialog())
                    }
                })
            }
        },
            t
    }),
    define("component/submit/js/submit", ["component/base/js/base", "util/Class", "component/popwin/js/popwin", "Controller/Controller", "util/postClickLog", "component/validate/js/validate", "component/paypost/js/paypost", "component/verifyPop/js/verifyPop", "component/autoCompleteWuyedizhi/js/validateWuyedizhi", "component/popFangbenAttest/js/popFangbenAttest"], function(t, e, s, d, p, r, i, c, h, l) {
        var n = e.extend(t);
        return n.prototype.CLASS = {
            WRAP: "submit_wrap",
            TITLE: "input_text_title",
            CONTENT: "input_text_content",
            MULTI: "clearfix"
        },
            n.prototype.type = "submit",
            n.prototype.createElem = function() {
                var t = this.opts;
                for (var e in this.container = $("<div>").addClass(this.CLASS.WRAP),
                    this.elem = $("<span>").html("发布"),
                    this.container.append(this.elem),
                    t.attr)
                    t.attr.hasOwnProperty(e) && this.elem.attr(e, t.attr[e]);
                this.setElemView()
            }
            ,
            n.prototype.focusTo = function() {
                this.elem.focus()
            }
            ,
            n.prototype.bindDomEvent = function() {
                var l = this;
                l.elem.bind("blur", function(t) {
                    var e = t.relatedTarget;
                    l.doCheck(),
                    $(e).parents(".rows_wrap")[0] !== l.rows.containerElem[0] && (l.rows.doCheck(),
                    window.navigator.userAgent.toUpperCase().match("MSIE 6.0") && l.elem.parent().parent().find(".tip").html(""))
                }),
                    l.elem.bind("focus", function() {
                        l.setClassByStatus(n.SETTING.STATUS.FOCUS),
                            l.elem.triggerHandler("focusin"),
                        window.navigator.userAgent.toUpperCase().match("MSIE 6.0") && l.elem.parent().css("border", "none")
                    }),
                    l.elem.bind("click", function(t, e) {
                        var i = "";
                        i = ____json4fe.catentry[1].dispid ? ____json4fe.catentry[1].dispid : "",
                            p.send("post_fill_release@leibie=" + i),
                            t.preventDefault(),
                            console.log(d.getFormData());
                        var n = d.isFormValidate()
                            , a = l.elem.attr("disabled");
                        if (d.canSubmit() && "disabled" !== a) {
                            if (n) {
                                p.sendJson("from=Post_TriggerEventTime&key=formSubmit&eventTime=" + (new Date).getTime()),
                                    l.elem.attr("disabled", "disabled");
                                document.location;
                                var o = d.getFormData();
                                if ("undefined" != typeof l.opts.typeFrom && "esf_xinjianxiaoqu" === l.opts.typeFrom)
                                    return l.elem.html("正在提交..."),
                                        void l.esfXinjianxiaoquForm(o);
                                if (l.elem.html("正在发布..."),
                                    e && "object" == typeof e && $.extend(o, e),
                                        commercial) {
                                    var s = JSON.stringify(commercial);
                                    o.commercial = s
                                }
                                var r = l.getNewdizhiFromFormData(o);
                                if (r && $.extend(o, r),
                                    8 === i)
                                    h.check(o, l.elem, c);
                                else
                                    c(!0);
                                function c(t) {
                                    if (t) {
                                        p.send("post_fill_success");
                                        var e = window.location.protocol + "//post.58.com" + document.location.pathname + "/submit" + document.location.search;
                                        $.ajax({
                                            url: e,
                                            type: "post",
                                            dataType: "json",
                                            data: o,
                                            timeout: 3e4,
                                            success: function(t) {
                                                p.sendJson("from=Post_TriggerEventTime&key=resultFeedback&eventTime=" + (new Date).getTime()),
                                                t && "redirect" == t.bizCode && t.bizExt && t.bizExt.url && l.statisticshouse(t.bizExt.url),
                                                    l.analysResponse(t),
                                                    l.elem.removeAttr("disabled"),
                                                    l.elem.html("发布")
                                            },
                                            error: function() {
                                                p.sendJson("from=Post_TriggerEventTime&key=resultFeedback&eventTime=" + (new Date).getTime()),
                                                    l.elem.removeAttr("disabled"),
                                                    l.elem.html("发布")
                                            }
                                        })
                                    }
                                }
                            }
                            "undefined" != typeof l.opts.typeFrom && "esf_xinjianxiaoqu" === l.opts.typeFrom && "" == d.getFormData().Pic && $(".imgbar_wrap").siblings(".tip").removeClass(".validate_success").find("i").remove()
                        }
                    })
            }
            ,
            n.prototype.isUploadImg = function(t) {
                if ("" === t.Pic) {
                    return this.errorTipsCab({
                        msg: "请上传小区图片"
                    }),
                        $(".imgbar_wrap").siblings(".tip").removeClass(".validate_success").find("i").remove(),
                        !1
                }
                return !0
            }
            ,
            n.prototype.esfXinjianxiaoquForm = function(i) {
                var n = this
                    , a = window.location.protocol + "//dict.58.com/feedback/add";
                if (n.isUploadImg(i)) {
                    if ("undefiend" != typeof i.Pic) {
                        for (var t = i.Pic.split("|"), e = [], o = 0; o < t.length; o++)
                            e[o] = window.location.protocol + "//pic1.58cdn.com.cn" + t[o];
                        i.base_images = e.join(";"),
                            i.Pic = ""
                    }
                    i.cityid = ____json4fe.locallist.dispid;
                    var s = d.records.get("yzm");
                    setTimeout(function() {
                        !function() {
                            if (!s.canContinue) {
                                var t = s.rows.containerElem
                                    , e = t.find(".tip");
                                return r.showTip(e, "验证码输入错误", "error", 0),
                                    n.errorTipsCab()
                            }
                            p.send("200000000294000100000010"),
                                $.ajax({
                                    url: a,
                                    type: "post",
                                    dataType: "json",
                                    data: i,
                                    timeout: 3e4,
                                    success: function(t) {
                                        if (t && 0 == t.code) {
                                            $("#formWrap").html('<div class="post-success"><div class="suc-title"><i class="suc-icon"></i><span class="suc-info">申请成功</span></div><div class="suc-desc">感谢您的反馈！表单将在1-2个工作日里进行审核处理，审核通过后您的反馈将被采用。</div></div>')
                                        } else {
                                            n.errorTipsCab({
                                                msg: "信息提交失败，请稍微再试。"
                                            })
                                        }
                                    },
                                    error: function() {
                                        n.errorTipsCab({
                                            msg: "信息提交失败，请稍微再试。"
                                        })
                                    }
                                })
                        }()
                    }, 2500)
                }
            }
            ,
            n.prototype.errorTipsCab = function(t) {
                t && this.showError(t),
                    this.elem.removeAttr("disabled"),
                    this.elem.html("提交")
            }
            ,
            n.prototype.getNewdizhiFromFormData = function(t) {
                var e = null;
                try {
                    var i = d.records.get("servicerange")
                        , n = d.records.get("localArea")
                        , a = d.records.get("localDiduan");
                    if (i && n && a && "serviceArea" == i.opts.type && "selector" == n.opts.type && "selector" == a.opts.type && t && t.newdizhi == undefined) {
                        var o = t.localArea;
                        "" != t.localDiduan && (o += "|" + t.localDiduan),
                            e = {
                                newdizhi: o
                            }
                    }
                } catch (s) {}
                return e
            }
            ,
            n.prototype.send = function() {
                this.elem.trigger("click")
            }
            ,
            n.prototype.triggerHandler = function(t, e) {
                d.handlers.trigger(t, e),
                    this.container.parents("form").triggerHandler(t, e)
            }
            ,
            n.prototype.handleWkBeforeLogin = function(t) {
                if ("phoneVerifyCode" == t.bizCode)
                    d.limit.initEventBind(),
                        d.limit.handleNeedYzm(t);
                else if ("userNeedBind" == t.bizCode) {
                    var e = "";
                    if (____json4fe && ____json4fe.catentry && 2 <= ____json4fe.catentry.length) {
                        var i = ____json4fe.catentry[1];
                        8 == i.dispid && "zufang" == i.listname ? e = "zhengzu-pc" : 10 == i.dispid && "hezu" == i.listname ? e = "hezu-pc" : 9 == i.dispid && "duanzu" == i.listname ? e = "duanzu-pc" : 12 == i.dispid && "ershoufang" == i.listname ? e = "ershoufang-pc" : 14 == i.dispid && "shangpu" == i.listname ? e = "shangpu-pc" : 13 == i.dispid && "zhaozu" == i.listname ? e = "xiezilou-pc" : 15 == i.dispid && "fangchan" == i.listname ? e = "changfang-pc" : 11 == i.dispid && "qiuzu" == i.listname && (e = "qiuzu-pc")
                    }
                    function n() {
                        CL.invoke("popuplogin", {
                            source: e,
                            path: window.location.href,
                            isShowClsBtn: !1,
                            showwin: "scanCode"
                        })
                    }
                    "undefined" != typeof CL ? n() : setTimeout(function() {
                        n()
                    }, 1e3)
                } else if ("checkCaptchaFail" == t.bizCode) {
                    var a = d.records.get("yzm").rows.containerElem.find(".tip");
                    r.showTip(a, "验证码输入错误", "error", 0)
                } else if ("phoneAssociateTooManyAccounts" == t.bizCode) {
                    d.records.get("yzm"),
                        a = d.records.get("Phone").rows.containerElem.find(".tip");
                    r.showTip(a, "关联账号过多", "error", 0)
                }
            }
            ,
            n.prototype.handlePayPost = function(t) {
                "paymentPage" == t.bizCode && i.init(t)
            }
            ,
            n.prototype.analysResponse = function(t) {
                var e = t.bizCode
                    , i = t.bizExt;
                if (this.triggerHandler("afterSubmit", {
                        action: e,
                        ext: i
                    }),
                    401 == t.code && 20 == t.bizExt.level && t.bizExt.infoId) {
                    var n = new l
                        , a = userid || ""
                        , o = 1335;
                    n.init(t.bizExt.infoId, a, o)
                } else if (401 == t.code && 1 == t.bizExt.level && t.bizExt.infoId) {
                    n = new l,
                        a = userid || "",
                        o = 1334;
                    n.init(t.bizExt.infoId, a, o)
                } else
                    switch (5 == t.code && this.handleWkBeforeLogin(t),
                    6 == t.code && this.handlePayPost(t),
                        e) {
                        case "redirect":
                            this.redirect(i.url);
                            break;
                        case "formValidation":
                            this.showFormValidation(i);
                            break;
                        case "verificationCode":
                            this.showVerification(i);
                            break;
                        case "iqas":
                        case "errMsg":
                        case "cdata":
                            this.showError(i);
                            break;
                        case "xiaobao":
                        case "pet_0":
                        case "pet_1":
                        case "pet_2":
                        case "huangye_0":
                            break;
                        case "baiqiangxian_confirm":
                            this.baiqiangxianConfirm(t);
                            break;
                        case "baiqiangxian_forbidden":
                            this.baiqiangxianForbidden(t);
                            break;
                        case "need_verify":
                            var s = new c;
                            1 == Number(t.bizExt.level) && (t.bizExt.style = "fangchan_zz",
                                t.bizExt.fc_zzstate = "2",
                                t.bizExt.appId = "xfsOuUwy");
                            s.popVerify(t)
                    }
            }
            ,
            n.prototype.baiqiangxianConfirm = function(t) {
                var e = this
                    , i = $("<div>").addClass("error_wrap")
                    , n = $('<div style="float:none">').addClass("content");
                i.append(n),
                    n.append('<p>您好！<font color="#ed6d06">' + t.msg + '</font>已经独立建站，您的信息将发布到<font color="#ed6d06">' + t.msg + "</font>市！</p>");
                var a = $('<a href="javascript:;">确定</a>');
                a.bind("click", function() {
                    e.elem.triggerHandler("click", {
                        topost: "1"
                    })
                });
                var o = $('<div class="btn_group" style="text-align:center">').append(a);
                n.append(o),
                    s.show("", i, 640, 300, !1, function() {})
            }
            ,
            n.prototype.baiqiangxianForbidden = function(t) {
                var e = $("<div>").addClass("error_wrap");
                e.append('<i><img src="' + window.location.protocol + '//img.58cdn.com.cn/ui7/post/pc/imgs/error.png"></i>');
                var i = $("<div>").addClass("content");
                e.append(i),
                    i.append('<p>对不起，<font color="#ed6d06">' + t.msg + '</font>已经独立建站，只能选择<font color="#ed6d06">' + t.msg + "</font>或其他区域！</p>");
                var n = $('<a href="javascript:;">返回修改</a>');
                n.bind("click", function() {
                    s.hide()
                });
                var a = $('<div class="btn_group">').append(n);
                i.append(a),
                    s.show("", e, 640, 300, !1, function() {})
            }
            ,
            n.prototype.redirect = function(t) {
                setTimeout(function() {
                    document.location.href = t
                }, 1e3)
            }
            ,
            n.prototype.statisticshouse = function(t) {
                try {
                    var e = "";
                    if (____json4fe && ____json4fe.catentry && ____json4fe.catentry[1] && (e = ____json4fe.catentry[1].dispid),
                        8 != e && 10 != e)
                        return;
                    var i = "";
                    if ("string" == typeof t && "" != t) {
                        var n = t.split("?");
                        0 < n.length && 0 < (n = n[0].split("/")).length && "" == (i = n.pop()) && (i = n.pop())
                    }
                    if ("" == i)
                        return;
                    var a = ""
                        , o = d.records.get("Phone");
                    o && (a = o.getValue());
                    var s = window.location.protocol + "//statisticshouse.58.com/statistics/Api_report_publish_pc?infoId=" + i + "&phone=" + a;
                    $.ajax({
                        url: s,
                        type: "get",
                        dataType: "jsonp",
                        jsonp: "jsoncallback",
                        success: function(t) {},
                        error: function(t) {}
                    })
                } catch (r) {}
            }
            ,
            n.prototype.showFormValidation = function(t) {
                for (var e, i = 0; i < t.length; i++)
                    (e = t[i]).bValid = !1,
                        d.showCheckTips(e),
                        d.triggerEvent({
                            data: [{
                                funcName: "scrollTo",
                                target: {
                                    name: e.name
                                }
                            }]
                        })
            }
            ,
            n.prototype.showVerification = function(t) {
                d.showCaptcha(t.vcode)
            }
            ,
            n.prototype.showIqasTip = function() {}
            ,
            n.prototype.showError = function(t) {
                var e = $("<div>").addClass("error_wrap");
                e.append('<i><img src="' + window.location.protocol + '//img.58cdn.com.cn/ui7/post/pc/imgs/error.png"></i>');
                var i = $("<div>").addClass("content");
                if (e.append(i),
                        i.append("<h2>非常抱歉！</h2>"),
                        i.append("<p>" + t.msg + "</p>"),
                        t.noButton)
                    var n = $('<a style="display:none"></a>');
                else
                    (n = $('<a href="javascript:;">知道了</a>')).bind("click", function() {
                        s.hide()
                    });
                var a = $('<div class="btn_group">').append(n);
                i.append(a),
                    s.show("", e, 640, 300, !0, function() {})
            }
            ,
            n.prototype.getFormValue = function() {
                return this.elem.val()
            }
            ,
            n.prototype.setValue = function(t) {
                return this.elem.val(t)
            }
            ,
            n.prototype.setText = function(t) {
                this.elem.text(t)
            }
            ,
            n
    }),
    define("libs/jquery-ui-datepicker", [], function() {
        var t, e, i, n, a;
        function o(t, e) {
            var i, n, a, o = t.nodeName.toLowerCase();
            return "area" === o ? (n = (i = t.parentNode).name,
            !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && (!!(a = $("img[usemap='#" + n + "']")[0]) && s(a))) : (/^(input|select|textarea|button|object)$/.test(o) ? !t.disabled : "a" === o && t.href || e) && s(t)
        }
        function s(t) {
            return $.expr.filters.visible(t) && !$(t).parents().addBack().filter(function() {
                return "hidden" === $.css(this, "visibility")
            }).length
        }
        function r() {
            this._curInst = null,
                this._keyEvent = !1,
                this._disabledInputs = [],
                this._datepickerShowing = !1,
                this._inDialog = !1,
                this._mainDivId = "ui-datepicker-div",
                this._inlineClass = "ui-datepicker-inline",
                this._appendClass = "ui-datepicker-append",
                this._triggerClass = "ui-datepicker-trigger",
                this._dialogClass = "ui-datepicker-dialog",
                this._disableClass = "ui-datepicker-disabled",
                this._unselectableClass = "ui-datepicker-unselectable",
                this._currentClass = "ui-datepicker-current-day",
                this._dayOverClass = "ui-datepicker-days-cell-over",
                this.regional = [],
                this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                },
                this._defaults = {
                    todayDay: (new Date).getDate(),
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                },
                $.extend(this._defaults, this.regional[""]),
                this.regional.en = $.extend(!0, {}, this.regional[""]),
                this.regional["en-US"] = $.extend(!0, {}, this.regional.en),
                this.dpDiv = c($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }
        function c(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(e, "mouseout", function() {
                $(this).removeClass("ui-state-hover"),
                -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"),
                -1 !== this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
            }).delegate(e, "mouseover", l)
        }
        function l() {
            $.datepicker._isDisabledDatepicker(a.inline ? a.dpDiv.parent()[0] : a.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
                $(this).addClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
        }
        function p(t, e) {
            for (var i in $.extend(t, e),
                e)
                null == e[i] && (t[i] = e[i]);
            return t
        }
        return $.ui = $.ui || {},
            $.extend($.ui, {
                version: "1.11.4",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }),
            $.fn.extend({
                scrollParent: function(t) {
                    var e = this.css("position")
                        , i = "absolute" === e
                        , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                        , a = this.parents().filter(function() {
                        var t = $(this);
                        return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                    return "fixed" !== e && a.length ? a : $(this[0].ownerDocument || document)
                },
                uniqueId: (t = 0,
                        function() {
                            return this.each(function() {
                                this.id || (this.id = "ui-id-" + ++t)
                            })
                        }
                ),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && $(this).removeAttr("id")
                    })
                }
            }),
            $.extend($.expr[":"], {
                data: $.expr.createPseudo ? $.expr.createPseudo(function(e) {
                    return function(t) {
                        return !!$.data(t, e)
                    }
                }) : function(t, e, i) {
                    return !!$.data(t, i[3])
                }
                ,
                focusable: function(t) {
                    return o(t, !isNaN($.attr(t, "tabindex")))
                },
                tabbable: function(t) {
                    var e = $.attr(t, "tabindex")
                        , i = isNaN(e);
                    return (i || 0 <= e) && o(t, !i)
                }
            }),
        $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function(t, i) {
            var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
                , n = i.toLowerCase()
                , o = {
                innerWidth: $.fn.innerWidth,
                innerHeight: $.fn.innerHeight,
                outerWidth: $.fn.outerWidth,
                outerHeight: $.fn.outerHeight
            };
            function s(t, e, i, n) {
                return $.each(a, function() {
                    e -= parseFloat($.css(t, "padding" + this)) || 0,
                    i && (e -= parseFloat($.css(t, "border" + this + "Width")) || 0),
                    n && (e -= parseFloat($.css(t, "margin" + this)) || 0)
                }),
                    e
            }
            $.fn["inner" + i] = function(t) {
                return t === undefined ? o["inner" + i].call(this) : this.each(function() {
                    $(this).css(n, s(this, t) + "px")
                })
            }
                ,
                $.fn["outer" + i] = function(t, e) {
                    return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                        $(this).css(n, s(this, t, !0, e) + "px")
                    })
                }
        }),
        $.fn.addBack || ($.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        ),
        $("<a>").data("a-b", "a").removeData("a-b").data("a-b") && ($.fn.removeData = (e = $.fn.removeData,
                function(t) {
                    return arguments.length ? e.call(this, $.camelCase(t)) : e.call(this)
                }
        )),
            $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
            $.fn.extend({
                focus: (n = $.fn.focus,
                        function(e, i) {
                            return "number" == typeof e ? this.each(function() {
                                var t = this;
                                setTimeout(function() {
                                    $(t).focus(),
                                    i && i.call(t)
                                }, e)
                            }) : n.apply(this, arguments)
                        }
                ),
                disableSelection: (i = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
                        function() {
                            return this.bind(i + ".ui-disableSelection", function(t) {
                                t.preventDefault()
                            })
                        }
                ),
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                },
                zIndex: function(t) {
                    if (t !== undefined)
                        return this.css("zIndex", t);
                    if (this.length)
                        for (var e, i, n = $(this[0]); n.length && n[0] !== document; ) {
                            if (("absolute" === (e = n.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(n.css("zIndex"), 10),
                                !isNaN(i) && 0 !== i))
                                return i;
                            n = n.parent()
                        }
                    return 0
                }
            }),
            $.ui.plugin = {
                add: function(t, e, i) {
                    var n, a = $.ui[t].prototype;
                    for (n in i)
                        a.plugins[n] = a.plugins[n] || [],
                            a.plugins[n].push([e, i[n]])
                },
                call: function(t, e, i, n) {
                    var a, o = t.plugins[e];
                    if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                        for (a = 0; a < o.length; a++)
                            t.options[o[a][0]] && o[a][1].apply(t.element, i)
                }
            },
            $.extend($.ui, {
                datepicker: {
                    version: "1.11.4"
                }
            }),
            $.extend(r.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                _widgetDatepicker: function() {
                    return this.dpDiv
                },
                setDefaults: function(t) {
                    return p(this._defaults, t || {}),
                        this
                },
                _attachDatepicker: function(t, e) {
                    var i, n, a;
                    n = "div" === (i = t.nodeName.toLowerCase()) || "span" === i,
                    t.id || (this.uuid += 1,
                        t.id = "dp" + this.uuid),
                        (a = this._newInst($(t), n)).settings = $.extend({}, e || {}),
                        "input" === i ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
                },
                _newInst: function(t, e) {
                    return {
                        id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                        input: t,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: e,
                        dpDiv: e ? c($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                    }
                },
                _connectDatepicker: function(t, e) {
                    var i = $(t);
                    e.append = $([]),
                        e.trigger = $([]),
                    i.hasClass(this.markerClassName) || (this._attachments(i, e),
                        i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
                        this._autoSize(e),
                        $.data(t, "datepicker", e),
                    e.settings.disabled && this._disableDatepicker(t))
                },
                _attachments: function(t, e) {
                    var i, n, a, o = this._get(e, "appendText"), s = this._get(e, "isRTL");
                    e.append && e.append.remove(),
                    o && (e.append = $("<span class='" + this._appendClass + "'>" + o + "</span>"),
                        t[s ? "before" : "after"](e.append)),
                        t.unbind("focus", this._showDatepicker),
                    e.trigger && e.trigger.remove(),
                    "focus" !== (i = this._get(e, "showOn")) && "both" !== i || t.focus(this._showDatepicker),
                    "button" !== i && "both" !== i || (n = this._get(e, "buttonText"),
                        a = this._get(e, "buttonImage"),
                        e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                            src: a,
                            alt: n,
                            title: n
                        }) : $("<button type='button'></button>").addClass(this._triggerClass).html(a ? $("<img/>").attr({
                            src: a,
                            alt: n,
                            title: n
                        }) : n)),
                        t[s ? "before" : "after"](e.trigger),
                        e.trigger.click(function() {
                            return $.datepicker._datepickerShowing && $.datepicker._lastInput === t[0] ? $.datepicker._hideDatepicker() : ($.datepicker._datepickerShowing && $.datepicker._lastInput !== t[0] && $.datepicker._hideDatepicker(),
                                $.datepicker._showDatepicker(t[0])),
                                !1
                        }))
                },
                _autoSize: function(t) {
                    if (this._get(t, "autoSize") && !t.inline) {
                        var e, i, n, a, o = new Date(2009,11,20), s = this._get(t, "dateFormat");
                        s.match(/[DM]/) && (e = function(t) {
                            for (a = n = i = 0; a < t.length; a++)
                                t[a].length > i && (i = t[a].length,
                                    n = a);
                            return n
                        }
                            ,
                            o.setMonth(e(this._get(t, s.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                            o.setDate(e(this._get(t, s.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
                            t.input.attr("size", this._formatDate(t, o).length)
                    }
                },
                _inlineDatepicker: function(t, e) {
                    var i = $(t);
                    i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv),
                        $.data(t, "datepicker", e),
                        this._setDate(e, this._getDefaultDate(e), !0),
                        this._updateDatepicker(e),
                        this._updateAlternate(e),
                    e.settings.disabled && this._disableDatepicker(t),
                        e.dpDiv.css("display", "block"))
                },
                _dialogDatepicker: function(t, e, i, n, a) {
                    var o, s, r, c, l, d = this._dialogInst;
                    return d || (this.uuid += 1,
                        o = "dp" + this.uuid,
                        this._dialogInput = $("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"),
                        this._dialogInput.keydown(this._doKeyDown),
                        $("body").append(this._dialogInput),
                        (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {},
                        $.data(this._dialogInput[0], "datepicker", d)),
                        p(d.settings, n || {}),
                        e = e && e.constructor === Date ? this._formatDate(d, e) : e,
                        this._dialogInput.val(e),
                        this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null,
                    this._pos || (s = document.documentElement.clientWidth,
                        r = document.documentElement.clientHeight,
                        c = document.documentElement.scrollLeft || document.body.scrollLeft,
                        l = document.documentElement.scrollTop || document.body.scrollTop,
                        this._pos = [s / 2 - 100 + c, r / 2 - 150 + l]),
                        this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                        d.settings.onSelect = i,
                        this._inDialog = !0,
                        this.dpDiv.addClass(this._dialogClass),
                        this._showDatepicker(this._dialogInput[0]),
                    $.blockUI && $.blockUI(this.dpDiv),
                        $.data(this._dialogInput[0], "datepicker", d),
                        this
                },
                _destroyDatepicker: function(t) {
                    var e, i = $(t), n = $.data(t, "datepicker");
                    i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(),
                        $.removeData(t, "datepicker"),
                        "input" === e ? (n.append.remove(),
                            n.trigger.remove(),
                            i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || i.removeClass(this.markerClassName).empty(),
                    a === n && (a = null))
                },
                _enableDatepicker: function(e) {
                    var t, i, n = $(e), a = $.data(e, "datepicker");
                    n.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1,
                        a.trigger.filter("button").each(function() {
                            this.disabled = !1
                        }).end().filter("img").css({
                            opacity: "1.0",
                            cursor: ""
                        })) : "div" !== t && "span" !== t || ((i = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
                        i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                        this._disabledInputs = $.map(this._disabledInputs, function(t) {
                            return t === e ? null : t
                        }))
                },
                _disableDatepicker: function(e) {
                    var t, i, n = $(e), a = $.data(e, "datepicker");
                    n.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0,
                        a.trigger.filter("button").each(function() {
                            this.disabled = !0
                        }).end().filter("img").css({
                            opacity: "0.5",
                            cursor: "default"
                        })) : "div" !== t && "span" !== t || ((i = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
                        i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
                        this._disabledInputs = $.map(this._disabledInputs, function(t) {
                            return t === e ? null : t
                        }),
                        this._disabledInputs[this._disabledInputs.length] = e)
                },
                _isDisabledDatepicker: function(t) {
                    if (!t)
                        return !1;
                    for (var e = 0; e < this._disabledInputs.length; e++)
                        if (this._disabledInputs[e] === t)
                            return !0;
                    return !1
                },
                _getInst: function(t) {
                    try {
                        return $.data(t, "datepicker")
                    } catch (e) {
                        throw "Missing instance data for this datepicker"
                    }
                },
                _optionDatepicker: function(t, e, i) {
                    var n, a, o, s, r = this._getInst(t);
                    if (2 === arguments.length && "string" == typeof e)
                        return "defaults" === e ? $.extend({}, $.datepicker._defaults) : r ? "all" === e ? $.extend({}, r.settings) : this._get(r, e) : null;
                    n = e || {},
                    "string" == typeof e && ((n = {})[e] = i),
                    r && (this._curInst === r && this._hideDatepicker(),
                        a = this._getDateDatepicker(t, !0),
                        o = this._getMinMaxDate(r, "min"),
                        s = this._getMinMaxDate(r, "max"),
                        p(r.settings, n),
                    null !== o && n.dateFormat !== undefined && n.minDate === undefined && (r.settings.minDate = this._formatDate(r, o)),
                    null !== s && n.dateFormat !== undefined && n.maxDate === undefined && (r.settings.maxDate = this._formatDate(r, s)),
                    "disabled"in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
                        this._attachments($(t), r),
                        this._autoSize(r),
                        this._setDate(r, a),
                        this._updateAlternate(r),
                        this._updateDatepicker(r))
                },
                _changeDatepicker: function(t, e, i) {
                    this._optionDatepicker(t, e, i)
                },
                _refreshDatepicker: function(t) {
                    var e = this._getInst(t);
                    e && this._updateDatepicker(e)
                },
                _setDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    i && (this._setDate(i, e),
                        this._updateDatepicker(i),
                        this._updateAlternate(i))
                },
                _getDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    return i && !i.inline && this._setDateFromField(i, e),
                        i ? this._getDate(i) : null
                },
                _doKeyDown: function(t) {
                    var e, i, n, a = $.datepicker._getInst(t.target), o = !0, s = a.dpDiv.is(".ui-datepicker-rtl");
                    if (a._keyEvent = !0,
                            $.datepicker._datepickerShowing)
                        switch (t.keyCode) {
                            case 9:
                                $.datepicker._hideDatepicker(),
                                    o = !1;
                                break;
                            case 13:
                                return (n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", a.dpDiv))[0] && $.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]),
                                    (e = $.datepicker._get(a, "onSelect")) ? (i = $.datepicker._formatDate(a),
                                        e.apply(a.input ? a.input[0] : null, [i, a])) : $.datepicker._hideDatepicker(),
                                    !1;
                            case 27:
                                $.datepicker._hideDatepicker();
                                break;
                            case 33:
                                $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(a, "stepBigMonths") : -$.datepicker._get(a, "stepMonths"), "M");
                                break;
                            case 34:
                                $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(a, "stepBigMonths") : +$.datepicker._get(a, "stepMonths"), "M");
                                break;
                            case 35:
                                (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target),
                                    o = t.ctrlKey || t.metaKey;
                                break;
                            case 36:
                                (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target),
                                    o = t.ctrlKey || t.metaKey;
                                break;
                            case 37:
                                (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? 1 : -1, "D"),
                                    o = t.ctrlKey || t.metaKey,
                                t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(a, "stepBigMonths") : -$.datepicker._get(a, "stepMonths"), "M");
                                break;
                            case 38:
                                (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"),
                                    o = t.ctrlKey || t.metaKey;
                                break;
                            case 39:
                                (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? -1 : 1, "D"),
                                    o = t.ctrlKey || t.metaKey,
                                t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(a, "stepBigMonths") : +$.datepicker._get(a, "stepMonths"), "M");
                                break;
                            case 40:
                                (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"),
                                    o = t.ctrlKey || t.metaKey;
                                break;
                            default:
                                o = !1
                        }
                    else
                        36 === t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : o = !1;
                    o && (t.preventDefault(),
                        t.stopPropagation())
                },
                _doKeyPress: function(t) {
                    var e, i, n = $.datepicker._getInst(t.target);
                    if ($.datepicker._get(n, "constrainInput"))
                        return e = $.datepicker._possibleChars($.datepicker._get(n, "dateFormat")),
                            i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode),
                        t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)
                },
                _doKeyUp: function(t) {
                    var e = $.datepicker._getInst(t.target);
                    if (e.input.val() !== e.lastVal)
                        try {
                            $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e)) && ($.datepicker._setDateFromField(e),
                                $.datepicker._updateAlternate(e),
                                $.datepicker._updateDatepicker(e))
                        } catch (i) {}
                    return !0
                },
                _showDatepicker: function(t) {
                    var e, i, n, a, o, s, r;
                    ("input" !== (t = t.target || t).nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]),
                    $.datepicker._isDisabledDatepicker(t) || $.datepicker._lastInput === t) || (e = $.datepicker._getInst(t),
                    $.datepicker._curInst && $.datepicker._curInst !== e && ($.datepicker._curInst.dpDiv.stop(!0, !0),
                    e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0])),
                    !1 !== (n = (i = $.datepicker._get(e, "beforeShow")) ? i.apply(t, [t, e]) : {}) && (p(e.settings, n),
                        e.lastVal = null,
                        $.datepicker._lastInput = t,
                        $.datepicker._setDateFromField(e),
                    $.datepicker._inDialog && (t.value = ""),
                    $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t),
                        $.datepicker._pos[1] += t.offsetHeight),
                        a = !1,
                        $(t).parents().each(function() {
                            return !(a |= "fixed" === $(this).css("position"))
                        }),
                        o = {
                            left: $.datepicker._pos[0],
                            top: $.datepicker._pos[1]
                        },
                        $.datepicker._pos = null,
                        e.dpDiv.empty(),
                        e.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }),
                        $.datepicker._updateDatepicker(e),
                        o = $.datepicker._checkOffset(e, o, a),
                        e.dpDiv.css({
                            position: $.datepicker._inDialog && $.blockUI ? "static" : a ? "fixed" : "absolute",
                            display: "none",
                            left: o.left + "px",
                            top: o.top + "px"
                        }),
                    e.inline || (s = $.datepicker._get(e, "showAnim"),
                        r = $.datepicker._get(e, "duration"),
                        e.dpDiv.css("z-index", function(t) {
                            for (var e, i; t.length && t[0] !== document; ) {
                                if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10),
                                    !isNaN(i) && 0 !== i))
                                    return i;
                                t = t.parent()
                            }
                            return 0
                        }($(t)) + 1),
                        $.datepicker._datepickerShowing = !0,
                        $.effects && $.effects.effect[s] ? e.dpDiv.show(s, $.datepicker._get(e, "showOptions"), r) : e.dpDiv[s || "show"](s ? r : null),
                    $.datepicker._shouldFocusInput(e) && e.input.focus(),
                        $.datepicker._curInst = e)))
                },
                _updateDatepicker: function(t) {
                    this.maxRows = 4,
                        (a = t).dpDiv.empty().append(this._generateHTML(t)),
                        this._attachHandlers(t);
                    var e, i = this._getNumberOfMonths(t), n = i[1];
                    t.dpDiv.find("." + this._dayOverClass + " a");
                    t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                    1 < n && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"),
                        t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                        t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                    t === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(t) && t.input.focus(),
                    t.yearshtml && (e = t.yearshtml,
                        setTimeout(function() {
                            e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                                e = t.yearshtml = null
                        }, 0))
                },
                _shouldFocusInput: function(t) {
                    return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
                },
                _checkOffset: function(t, e, i) {
                    var n = t.dpDiv.outerWidth()
                        , a = t.dpDiv.outerHeight()
                        , o = t.input ? t.input.outerWidth() : 0
                        , s = t.input ? t.input.outerHeight() : 0
                        , r = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft())
                        , c = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                    return e.left -= this._get(t, "isRTL") ? n - o : 0,
                        e.left -= i && e.left === t.input.offset().left ? $(document).scrollLeft() : 0,
                        e.top -= i && e.top === t.input.offset().top + s ? $(document).scrollTop() : 0,
                        e.left -= Math.min(e.left, e.left + n > r && n < r ? Math.abs(e.left + n - r) : 0),
                        e.top -= Math.min(e.top, e.top + a > c && a < c ? Math.abs(a + s) : 0),
                        e
                },
                _findPos: function(t) {
                    for (var e, i = this._getInst(t), n = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || $.expr.filters.hidden(t)); )
                        t = t[n ? "previousSibling" : "nextSibling"];
                    return [(e = $(t).offset()).left, e.top]
                },
                _hideDatepicker: function(t) {
                    var e, i, n, a, o = this._curInst;
                    !o || t && o !== $.data(t, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"),
                        i = this._get(o, "duration"),
                        n = function() {
                            $.datepicker._tidyDialog(o)
                        }
                        ,
                        $.effects && ($.effects.effect[e] || $.effects[e]) ? o.dpDiv.hide(e, $.datepicker._get(o, "showOptions"), i, n) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, n),
                    e || n(),
                        this._datepickerShowing = !1,
                    (a = this._get(o, "onClose")) && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]),
                        this._lastInput = null,
                    this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }),
                    $.blockUI && ($.unblockUI(),
                        $("body").append(this.dpDiv))),
                        this._inDialog = !1)
                },
                _tidyDialog: function(t) {
                    t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                },
                _checkExternalClick: function(t) {
                    if ($.datepicker._curInst) {
                        var e = $(t.target)
                            , i = $.datepicker._getInst(e[0]);
                        (e[0].id === $.datepicker._mainDivId || 0 !== e.parents("#" + $.datepicker._mainDivId).length || e.hasClass($.datepicker.markerClassName) || e.closest("." + $.datepicker._triggerClass).length || !$.datepicker._datepickerShowing || $.datepicker._inDialog && $.blockUI) && (!e.hasClass($.datepicker.markerClassName) || $.datepicker._curInst === i) || $.datepicker._hideDatepicker()
                    }
                },
                _adjustDate: function(t, e, i) {
                    var n = $(t)
                        , a = this._getInst(n[0]);
                    this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, e + ("M" === i ? this._get(a, "showCurrentAtPos") : 0), i),
                        this._updateDatepicker(a))
                },
                _gotoToday: function(t) {
                    var e, i = $(t), n = this._getInst(i[0]);
                    this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay,
                        n.drawMonth = n.selectedMonth = n.currentMonth,
                        n.drawYear = n.selectedYear = n.currentYear) : (e = new Date,
                        n.selectedDay = e.getDate(),
                        n.drawMonth = n.selectedMonth = e.getMonth(),
                        n.drawYear = n.selectedYear = e.getFullYear()),
                        this._notifyChange(n),
                        this._adjustDate(i)
                },
                _selectMonthYear: function(t, e, i) {
                    var n = $(t)
                        , a = this._getInst(n[0]);
                    a["selected" + ("M" === i ? "Month" : "Year")] = a["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10),
                        this._notifyChange(a),
                        this._adjustDate(n)
                },
                _selectDay: function(t, e, i, n) {
                    var a, o = $(t);
                    $(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || ((a = this._getInst(o[0])).selectedDay = a.currentDay = $("a", n).html() == a.settings.todayDay ? (new Date).getDate() : $("a", n).html(),
                        a.selectedMonth = a.currentMonth = e,
                        a.selectedYear = a.currentYear = i,
                        this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
                },
                _clearDate: function(t) {
                    var e = $(t);
                    this._selectDate(e, "")
                },
                _selectDate: function(t, e) {
                    var i, n = $(t), a = this._getInst(n[0]);
                    e = null != e ? e : this._formatDate(a),
                    a.input && a.input.val(e),
                        this._updateAlternate(a),
                        (i = this._get(a, "onSelect")) ? i.apply(a.input ? a.input[0] : null, [e, a]) : a.input && a.input.trigger("change"),
                        a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(),
                            this._lastInput = a.input[0],
                        "object" != typeof a.input[0] && a.input.focus(),
                            this._lastInput = null)
                },
                _updateAlternate: function(t) {
                    var e, i, n, a = this._get(t, "altField");
                    a && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                        i = this._getDate(t),
                        n = this.formatDate(e, i, this._getFormatConfig(t)),
                        $(a).each(function() {
                            $(this).val(n)
                        }))
                },
                noWeekends: function(t) {
                    var e = t.getDay();
                    return [0 < e && e < 6, ""]
                },
                iso8601Week: function(t) {
                    var e, i = new Date(t.getTime());
                    return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
                        e = i.getTime(),
                        i.setMonth(0),
                        i.setDate(1),
                    Math.floor(Math.round((e - i) / 864e5) / 7) + 1
                },
                parseDate: function(i, o, t) {
                    if (null == i || null == o)
                        throw "Invalid arguments";
                    if ("" === (o = "object" == typeof o ? o.toString() : o + ""))
                        return null;
                    var n, e, a, s, r = 0, c = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), d = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort, p = (t ? t.dayNames : null) || this._defaults.dayNames, h = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort, u = (t ? t.monthNames : null) || this._defaults.monthNames, f = -1, m = -1, g = -1, v = -1, y = !1, b = function(t) {
                        var e = n + 1 < i.length && i.charAt(n + 1) === t;
                        return e && n++,
                            e
                    }, w = function(t) {
                        var e = b(t)
                            , i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                            , n = new RegExp("^\\d{" + ("y" === t ? i : 1) + "," + i + "}")
                            , a = o.substring(r).match(n);
                        if (!a)
                            throw "Missing number at position " + r;
                        return r += a[0].length,
                            parseInt(a[0], 10)
                    }, _ = function(t, e, i) {
                        var n = -1
                            , a = $.map(b(t) ? i : e, function(t, e) {
                            return [[e, t]]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                        if ($.each(a, function(t, e) {
                                var i = e[1];
                                if (o.substr(r, i.length).toLowerCase() === i.toLowerCase())
                                    return n = e[0],
                                        r += i.length,
                                        !1
                            }),
                            -1 !== n)
                            return n + 1;
                        throw "Unknown name at position " + r
                    }, C = function() {
                        if (o.charAt(r) !== i.charAt(n))
                            throw "Unexpected literal at position " + r;
                        r++
                    };
                    for (n = 0; n < i.length; n++)
                        if (y)
                            "'" !== i.charAt(n) || b("'") ? C() : y = !1;
                        else
                            switch (i.charAt(n)) {
                                case "d":
                                    g = w("d");
                                    break;
                                case "D":
                                    _("D", d, p);
                                    break;
                                case "o":
                                    v = w("o");
                                    break;
                                case "m":
                                    m = w("m");
                                    break;
                                case "M":
                                    m = _("M", h, u);
                                    break;
                                case "y":
                                    f = w("y");
                                    break;
                                case "@":
                                    f = (s = new Date(w("@"))).getFullYear(),
                                        m = s.getMonth() + 1,
                                        g = s.getDate();
                                    break;
                                case "!":
                                    f = (s = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(),
                                        m = s.getMonth() + 1,
                                        g = s.getDate();
                                    break;
                                case "'":
                                    b("'") ? C() : y = !0;
                                    break;
                                default:
                                    C()
                            }
                    if (r < o.length && (a = o.substr(r),
                            !/^\s+/.test(a)))
                        throw "Extra/unparsed characters found in date: " + a;
                    if (-1 === f ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= l ? 0 : -100)),
                        -1 < v)
                        for (m = 1,
                                 g = v; ; ) {
                            if (g <= (e = this._getDaysInMonth(f, m - 1)))
                                break;
                            m++,
                                g -= e
                        }
                    if ((s = this._daylightSavingAdjust(new Date(f,m - 1,g))).getFullYear() !== f || s.getMonth() + 1 !== m || s.getDate() !== g)
                        throw "Invalid date";
                    return s
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
                formatDate: function(i, t, e) {
                    if (!t)
                        return "";
                    var n, a = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, o = (e ? e.dayNames : null) || this._defaults.dayNames, s = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort, r = (e ? e.monthNames : null) || this._defaults.monthNames, c = function(t) {
                        var e = n + 1 < i.length && i.charAt(n + 1) === t;
                        return e && n++,
                            e
                    }, l = function(t, e, i) {
                        var n = "" + e;
                        if (c(t))
                            for (; n.length < i; )
                                n = "0" + n;
                        return n
                    }, d = function(t, e, i, n) {
                        return c(t) ? n[e] : i[e]
                    }, p = "", h = !1;
                    if (t)
                        for (n = 0; n < i.length; n++)
                            if (h)
                                "'" !== i.charAt(n) || c("'") ? p += i.charAt(n) : h = !1;
                            else
                                switch (i.charAt(n)) {
                                    case "d":
                                        p += l("d", t.getDate(), 2);
                                        break;
                                    case "D":
                                        p += d("D", t.getDay(), a, o);
                                        break;
                                    case "o":
                                        p += l("o", Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime() - new Date(t.getFullYear(),0,0).getTime()) / 864e5), 3);
                                        break;
                                    case "m":
                                        p += l("m", t.getMonth() + 1, 2);
                                        break;
                                    case "M":
                                        p += d("M", t.getMonth(), s, r);
                                        break;
                                    case "y":
                                        p += c("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                        break;
                                    case "@":
                                        p += t.getTime();
                                        break;
                                    case "!":
                                        p += 1e4 * t.getTime() + this._ticksTo1970;
                                        break;
                                    case "'":
                                        c("'") ? p += "'" : h = !0;
                                        break;
                                    default:
                                        p += i.charAt(n)
                                }
                    return p
                },
                _possibleChars: function(i) {
                    var n, t = "", e = !1, a = function(t) {
                        var e = n + 1 < i.length && i.charAt(n + 1) === t;
                        return e && n++,
                            e
                    };
                    for (n = 0; n < i.length; n++)
                        if (e)
                            "'" !== i.charAt(n) || a("'") ? t += i.charAt(n) : e = !1;
                        else
                            switch (i.charAt(n)) {
                                case "d":
                                case "m":
                                case "y":
                                case "@":
                                    t += "0123456789";
                                    break;
                                case "D":
                                case "M":
                                    return null;
                                case "'":
                                    a("'") ? t += "'" : e = !0;
                                    break;
                                default:
                                    t += i.charAt(n)
                            }
                    return t
                },
                _get: function(t, e) {
                    return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
                },
                _setDateFromField: function(t, e) {
                    if (t.input.val() !== t.lastVal) {
                        var i = this._get(t, "dateFormat")
                            , n = t.lastVal = t.input ? t.input.val() : null
                            , a = this._getDefaultDate(t)
                            , o = a
                            , s = this._getFormatConfig(t);
                        try {
                            o = this.parseDate(i, n, s) || a
                        } catch (r) {
                            n = e ? "" : n
                        }
                        t.selectedDay = o.getDate(),
                            t.drawMonth = t.selectedMonth = o.getMonth(),
                            t.drawYear = t.selectedYear = o.getFullYear(),
                            t.currentDay = n ? o.getDate() : 0,
                            t.currentMonth = n ? o.getMonth() : 0,
                            t.currentYear = n ? o.getFullYear() : 0,
                            this._adjustInstDate(t)
                    }
                },
                _getDefaultDate: function(t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                },
                _determineDate: function(c, t, e) {
                    var i, n, a = null == t || "" === t ? e : "string" == typeof t ? function(t) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(c, "dateFormat"), t, $.datepicker._getFormatConfig(c))
                        } catch (r) {}
                        for (var e = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(c) : null) || new Date, i = e.getFullYear(), n = e.getMonth(), a = e.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, s = o.exec(t); s; ) {
                            switch (s[2] || "d") {
                                case "d":
                                case "D":
                                    a += parseInt(s[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    a += 7 * parseInt(s[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    n += parseInt(s[1], 10),
                                        a = Math.min(a, $.datepicker._getDaysInMonth(i, n));
                                    break;
                                case "y":
                                case "Y":
                                    i += parseInt(s[1], 10),
                                        a = Math.min(a, $.datepicker._getDaysInMonth(i, n))
                            }
                            s = o.exec(t)
                        }
                        return new Date(i,n,a)
                    }(t) : "number" == typeof t ? isNaN(t) ? e : (i = t,
                        (n = new Date).setDate(n.getDate() + i),
                        n) : new Date(t.getTime());
                    return (a = a && "Invalid Date" === a.toString() ? e : a) && (a.setHours(0),
                        a.setMinutes(0),
                        a.setSeconds(0),
                        a.setMilliseconds(0)),
                        this._daylightSavingAdjust(a)
                },
                _daylightSavingAdjust: function(t) {
                    return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0),
                        t) : null
                },
                _setDate: function(t, e, i) {
                    var n = !e
                        , a = t.selectedMonth
                        , o = t.selectedYear
                        , s = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                    t.selectedDay = t.currentDay = s.getDate(),
                        t.drawMonth = t.selectedMonth = t.currentMonth = s.getMonth(),
                        t.drawYear = t.selectedYear = t.currentYear = s.getFullYear(),
                    a === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t),
                        this._adjustInstDate(t),
                    t.input && t.input.val(n ? "" : this._formatDate(t))
                },
                _getDate: function(t) {
                    return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))
                },
                _attachHandlers: function(t) {
                    var e = this._get(t, "stepMonths")
                        , i = "#" + t.id.replace(/\\\\/g, "\\");
                    t.dpDiv.find("[data-handler]").map(function() {
                        var t = {
                            prev: function() {
                                $.datepicker._adjustDate(i, -e, "M")
                            },
                            next: function() {
                                $.datepicker._adjustDate(i, +e, "M")
                            },
                            hide: function() {
                                $.datepicker._hideDatepicker()
                            },
                            today: function() {
                                $.datepicker._gotoToday(i)
                            },
                            selectDay: function() {
                                return $.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                                    !1
                            },
                            selectMonth: function() {
                                return $.datepicker._selectMonthYear(i, this, "M"),
                                    !1
                            },
                            selectYear: function() {
                                return $.datepicker._selectMonthYear(i, this, "Y"),
                                    !1
                            }
                        };
                        $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(t) {
                    var e, i, n, a, o, s, r, c, l, d, p, h, u, f, m, g, v, y, b, w, _, C, x, k, T, $, I, E, S, j, D, L, M, z, P, A, F, V, N, O = new Date, B = this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())), U = this._get(t, "isRTL"), q = this._get(t, "showButtonPanel"), H = this._get(t, "hideIfNoPrevNext"), W = this._get(t, "navigationAsDateFormat"), R = this._getNumberOfMonths(t), Y = this._get(t, "showCurrentAtPos"), K = this._get(t, "stepMonths"), G = 1 !== R[0] || 1 !== R[1], Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), X = this._getMinMaxDate(t, "min"), Z = this._getMinMaxDate(t, "max"), J = t.drawMonth - Y, tt = t.drawYear;
                    if (J < 0 && (J += 12,
                            tt--),
                            Z)
                        for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(),Z.getMonth() - R[0] * R[1] + 1,Z.getDate())),
                                 e = X && e < X ? X : e; this._daylightSavingAdjust(new Date(tt,J,1)) > e; )
                            --J < 0 && (J = 11,
                                tt--);
                    for (t.drawMonth = J,
                             t.drawYear = tt,
                             i = this._get(t, "prevText"),
                             i = W ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt,J - K,1)), this._getFormatConfig(t)) : i,
                             n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + i + "</span></a>" : H ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + i + "</span></a>",
                             a = this._get(t, "nextText"),
                             a = W ? this.formatDate(a, this._daylightSavingAdjust(new Date(tt,J + K,1)), this._getFormatConfig(t)) : a,
                             o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + a + "</span></a>" : H ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + a + "</span></a>",
                             s = this._get(t, "currentText"),
                             r = this._get(t, "gotoCurrent") && t.currentDay ? Q : B,
                             s = W ? this.formatDate(s, r, this._getFormatConfig(t)) : s,
                             c = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
                             l = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? c : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + s + "</button>" : "") + (U ? "" : c) + "</div>" : "",
                             d = parseInt(this._get(t, "firstDay"), 10),
                             d = isNaN(d) ? 0 : d,
                             p = this._get(t, "showWeek"),
                             h = this._get(t, "dayNames"),
                             u = this._get(t, "dayNamesMin"),
                             f = this._get(t, "monthNames"),
                             m = this._get(t, "monthNamesShort"),
                             g = this._get(t, "beforeShowDay"),
                             v = this._get(t, "showOtherMonths"),
                             y = this._get(t, "selectOtherMonths"),
                             b = this._getDefaultDate(t),
                             w = "",
                             C = 0; C < R[0]; C++) {
                        for (x = "",
                                 this.maxRows = 4,
                                 k = 0; k < R[1]; k++) {
                            if (T = this._daylightSavingAdjust(new Date(tt,J,t.selectedDay)),
                                    $ = " ui-corner-all",
                                    I = "",
                                    G) {
                                if (I += "<div class='ui-datepicker-group",
                                    1 < R[1])
                                    switch (k) {
                                        case 0:
                                            I += " ui-datepicker-group-first",
                                                $ = " ui-corner-" + (U ? "right" : "left");
                                            break;
                                        case R[1] - 1:
                                            I += " ui-datepicker-group-last",
                                                $ = " ui-corner-" + (U ? "left" : "right");
                                            break;
                                        default:
                                            I += " ui-datepicker-group-middle",
                                                $ = ""
                                    }
                                I += "'>"
                            }
                            for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + $ + "'>" + (/all|left/.test($) && 0 === C ? U ? o : n : "") + (/all|right/.test($) && 0 === C ? U ? n : o : "") + this._generateMonthYearHeader(t, J, tt, X, Z, 0 < C || 0 < k, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                                     E = p ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                                     _ = 0; _ < 7; _++)
                                E += "<th scope='col'" + (5 <= (_ + d + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[S = (_ + d) % 7] + "'>" + u[S] + "</span></th>";
                            for (I += E + "</tr></thead><tbody>",
                                     j = this._getDaysInMonth(tt, J),
                                 tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, j)),
                                     D = (this._getFirstDayOfMonth(tt, J) - d + 7) % 7,
                                     L = Math.ceil((D + j) / 7),
                                     M = G && this.maxRows > L ? this.maxRows : L,
                                     this.maxRows = M,
                                     z = this._daylightSavingAdjust(new Date(tt,J,1 - D)),
                                     P = 0; P < M; P++) {
                                for (I += "<tr>",
                                         A = p ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "",
                                         _ = 0; _ < 7; _++)
                                    F = g ? g.apply(t.input ? t.input[0] : null, [z]) : [!0, ""],
                                        N = (V = z.getMonth() !== J) && !y || !F[0] || X && z < X || Z && Z < z,
                                        A += "<td class='" + (5 <= (_ + d + 6) % 7 ? " ui-datepicker-week-end" : "") + (V ? " ui-datepicker-other-month" : "") + (z.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (V && !v ? "" : " " + F[1] + (z.getTime() === Q.getTime() ? " " + this._currentClass : "") + (z.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (V && !v || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (V && !v ? "&#xa0;" : N ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === B.getTime() ? " ui-state-highlight" : "") + (z.getTime() === Q.getTime() ? " ui-state-active" : "") + (V ? " ui-priority-secondary" : "") + "' href='#'>" + (z.getTime() === B.getTime() ? t.settings.todayDay : z.getDate()) + "</a>") + "</td>",
                                        z.setDate(z.getDate() + 1),
                                        z = this._daylightSavingAdjust(z);
                                I += A + "</tr>"
                            }
                            11 < ++J && (J = 0,
                                tt++),
                                x += I += "</tbody></table>" + (G ? "</div>" + (0 < R[0] && k === R[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                        }
                        w += x
                    }
                    return w += l,
                        t._keyEvent = !1,
                        w
                },
                _generateMonthYearHeader: function(t, e, i, n, a, o, s, r) {
                    var c, l, d, p, h, u, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), y = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", w = "";
                    if (o || !g)
                        w += "<span class='ui-datepicker-month'>" + s[e] + "</span>";
                    else {
                        for (c = n && n.getFullYear() === i,
                                 l = a && a.getFullYear() === i,
                                 w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                                 d = 0; d < 12; d++)
                            (!c || d >= n.getMonth()) && (!l || d <= a.getMonth()) && (w += "<option value='" + d + "'" + (d === e ? " selected='selected'" : "") + ">" + r[d] + "</option>");
                        w += "</select>"
                    }
                    if (y || (b += w + (!o && g && v ? "" : "&#xa0;")),
                            !t.yearshtml)
                        if (t.yearshtml = "",
                            o || !v)
                            b += "<span class='ui-datepicker-year'>" + i + this._get(t, "yearSuffix") + "</span>";
                        else {
                            for (p = this._get(t, "yearRange").split(":"),
                                     h = (new Date).getFullYear(),
                                     f = (u = function(t) {
                                             var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? h + parseInt(t, 10) : parseInt(t, 10);
                                             return isNaN(e) ? h : e
                                         }
                                     )(p[0]),
                                     m = Math.max(f, u(p[1] || "")),
                                     f = n ? Math.max(f, n.getFullYear()) : f,
                                     m = a ? Math.min(m, a.getFullYear()) : m,
                                     t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++)
                                t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                            t.yearshtml += "</select>",
                                b += t.yearshtml,
                                t.yearshtml = null
                        }
                    return y && (b = (b += (!o && g && v ? "" : "&#xa0;") + w).replace(/&#xa0;/gi, "")),
                        b += "</div>"
                },
                _adjustInstDate: function(t, e, i) {
                    var n = t.drawYear + ("Y" === i ? e : 0)
                        , a = t.drawMonth + ("M" === i ? e : 0)
                        , o = Math.min(t.selectedDay, this._getDaysInMonth(n, a)) + ("D" === i ? e : 0)
                        , s = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n,a,o)));
                    t.selectedDay = s.getDate(),
                        t.drawMonth = t.selectedMonth = s.getMonth(),
                        t.drawYear = t.selectedYear = s.getFullYear(),
                    "M" !== i && "Y" !== i || this._notifyChange(t)
                },
                _restrictMinMax: function(t, e) {
                    var i = this._getMinMaxDate(t, "min")
                        , n = this._getMinMaxDate(t, "max")
                        , a = i && e < i ? i : e;
                    return n && n < a ? n : a
                },
                _notifyChange: function(t) {
                    var e = this._get(t, "onChangeMonthYear");
                    e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                },
                _getNumberOfMonths: function(t) {
                    var e = this._get(t, "numberOfMonths");
                    return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
                },
                _getMinMaxDate: function(t, e) {
                    return this._determineDate(t, this._get(t, e + "Date"), null)
                },
                _getDaysInMonth: function(t, e) {
                    return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
                },
                _getFirstDayOfMonth: function(t, e) {
                    return new Date(t,e,1).getDay()
                },
                _canAdjustMonth: function(t, e, i, n) {
                    var a = this._getNumberOfMonths(t)
                        , o = this._daylightSavingAdjust(new Date(i,n + (e < 0 ? e : a[0] * a[1]),1));
                    return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
                        this._isInRange(t, o)
                },
                _isInRange: function(t, e) {
                    var i, n, a = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), s = null, r = null, c = this._get(t, "yearRange");
                    return c && (i = c.split(":"),
                        n = (new Date).getFullYear(),
                        s = parseInt(i[0], 10),
                        r = parseInt(i[1], 10),
                    i[0].match(/[+\-].*/) && (s += n),
                    i[1].match(/[+\-].*/) && (r += n)),
                    (!a || e.getTime() >= a.getTime()) && (!o || e.getTime() <= o.getTime()) && (!s || e.getFullYear() >= s) && (!r || e.getFullYear() <= r)
                },
                _getFormatConfig: function(t) {
                    var e = this._get(t, "shortYearCutoff");
                    return {
                        shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames")
                    }
                },
                _formatDate: function(t, e, i, n) {
                    e || (t.currentDay = t.selectedDay,
                        t.currentMonth = t.selectedMonth,
                        t.currentYear = t.selectedYear);
                    var a = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
                    return this.formatDate(this._get(t, "dateFormat"), a, this._getFormatConfig(t))
                }
            }),
            $.fn.datepicker = function(t) {
                if (!this.length)
                    return this;
                $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick),
                    $.datepicker.initialized = !0),
                0 === $("#" + $.datepicker._mainDivId).length && $("body").append($.datepicker.dpDiv);
                var e = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function() {
                    "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
                }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
            }
            ,
            $.datepicker = new r,
            $.datepicker.initialized = !1,
            $.datepicker.uuid = (new Date).getTime(),
            $.datepicker.version = "1.11.4",
            $.datepicker
    }),
    define("component/inputDate/js/inputDate", ["component/base/js/base", "util/Class", "Controller/Controller", "libs/jquery-ui-datepicker"], function(t, e, i, n) {
        var a = e.extend(t);
        a.prototype.CLASS = {
            WRAP: "input_date_wrap",
            TITLE: "input_date_title",
            CONTENT: "input_date_content",
            MULTI: "clearfix"
        },
            a.prototype.type = "inputDate";
        return a.prototype.createElem = function() {
            this.container = $("<div>"),
                this.container.addClass(this.CLASS.WRAP),
                this.container.attr("name", this.opts.name);
            var t = this.opts.defaultValue ? this.opts.defaultValue : ""
                , e = this.opts.view.placeholder ? this.opts.view.placeholder : "";
            "" == e && (e = t),
                this.elem = $('<div class="' + this.CLASS.TITLE + '" tabindex="' + this.opts.tabIndex + '"><span class="date_text">' + e + '</span><span class="date_icon"></span><input type="hidden" name="' + this.opts.name + '" value="' + t + '"></div>'),
                this.container.append(this.elem),
                this.datepickerElem = $('<div id="datepicker_' + this.opts.tabIndex + '" style="display:none;"></div>'),
                this.container.append(this.datepickerElem),
                this.setDatepicker(),
                this.setValue(t, "", 1)
        }
            ,
            a.prototype.setDatepicker = function() {
                var i = this
                    , t = {
                    inline: !0,
                    showMonthAfterYear: !0,
                    yearSuffix: "年",
                    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
                    firstDay: 1,
                    defaultDate: new Date,
                    todayDay: "今天",
                    gotoCurrent: !0,
                    dateFormat: "yy-mm-dd",
                    navigationAsDateFormat: !0,
                    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                    minDate: new Date,
                    maxDate: new Date((new Date).setDate((new Date).getDate() + 30)),
                    nextText: "",
                    prevText: "",
                    onSelect: function(t, e) {
                        i.datepickerOnSelect(t, e)
                    }
                };
                this.opts.view && this.opts.view.datepicker && "object" == typeof this.opts.view.datepicker && (t = $.extend(!0, {}, t, this.opts.view.datepicker)),
                    this.datepickerElem.datepicker(t)
            }
            ,
            a.prototype.datepickerOnSelect = function(t, e) {
                var i = this;
                i.setValue(t, "", 2),
                !0 === i.doCheck().bValid && !0 !== i.rows.getValidateStatus() && i.hideTips(),
                    i.hideDatepicker()
            }
            ,
            a.prototype.hideDatepicker = function() {
                this.rows.containerElem.css("zIndex", ""),
                    this.block.containerElem.css("zIndex", ""),
                    this.container.removeClass("focus"),
                    this.datepickerElem.hide()
            }
            ,
            a.prototype.bindDomEvent = function() {
                var e = this;
                e.elem.bind("focus", function(t) {
                    e.rows.containerElem.css("zIndex", 1601),
                        e.block.containerElem.css("zIndex", 1601),
                        e.container.addClass("focus"),
                        e.datepickerElem.show()
                }),
                    e.elem.click(function(t) {
                        return $(this).focus(),
                            !1
                    }),
                    e.container.bind("mouseleave", function() {
                        clearTimeout(t);
                        var t = setTimeout(function() {
                            e.hideDatepicker()
                        }, 300)
                    })
            }
            ,
            a.prototype.setValue = function(t, e, i) {
                this.value = t,
                    this.datepickerElem.datepicker("setDate", t),
                1 != i && (this.elem.find("span[class='date_text']").text(t),
                    this.elem.find("input[type='hidden']").val(t))
            }
            ,
            a.prototype.getValue = function() {
                return this.value
            }
            ,
            a
    }),
    define("component/preCheck/js/preCheck", ["component/popwin/js/popwin", "component/commpop/js/commpop"], function(s, n) {
        return {
            execute: function(t) {
                return !!(t && t.bizExt && t.bizExt.msg) && (1 == t.bizExt.isBlackList ? this.showExeCubeTip(t.bizExt.msg, !t.bizExt.unablePost) : this.showTips(t.bizExt.msg, !t.bizExt.unablePost),
                    t.bizExt.unablePost)
            },
            showTips: function(t, e) {
                var i = $("<div>").addClass("error_wrap")
                    , n = $("<div>").addClass("content");
                if (i.append(n),
                        i.append('<i><img src="' + window.location.protocol + '//img.58cdn.com.cn/ui7/post/pc/imgs/error.png"></i>'),
                        n.append("<h2>非常抱歉！</h2>"),
                        n.append("<p>" + t + "</p>"),
                        e) {
                    var a = $('<a href="javascript:;">知道了</a>');
                    a.bind("click", function() {
                        s.hide()
                    });
                    var o = $('<div class="btn_group">').append(a);
                    n.append(o)
                }
                s.show("", i, 600, 300, e, function() {})
            },
            showExeCubeTip: function(t, e) {
                window.location.protocol;
                var i = this.getExeCubeTip(t);
                new n({
                    src: i,
                    title: "",
                    titleCenter: "true",
                    width: "543",
                    height: "321",
                    canClose: e
                })
            },
            getExeCubeTip: function(t) {
                return $('<div class="ecWrap"><div class="ecContentLeft"><div class="eclImg"></div><div><div class="eclTipImg"></div><li class="eclTip">禁止发布虚假欺诈信息</li></div></div><div class="ecContentRight"><div class="ecrImg"></div><div class="ecrTip">' + t + '</div><a href="' + window.location.protocol + '//about.58.com/28.html#q" class="gotoAbout">查看详情</a></div></div>')
            }
        }
    }),
    define("component/captcha/js/captcha", [], function() {
        var r, c = !!window.navigator.userAgent.toUpperCase().match("MSIE 6.0"), l = !!window.navigator.userAgent.toUpperCase().match(/(MSIE 7\.0)|(Trident\/7\.0)/), s = /\br(\d)c(\d)\b/i, t = window.____json4fe ? window.____json4fe.catentry : [], i = t[0] ? t[0].dispid : "", a = t[1] ? t[1].dispid : "", e = "9224" === i && ("13889" !== a && "13890" !== a && "13891" !== a && "13892" !== a && "15890" !== a), d = $.extend(!0, {}, {
            btnId: "fabu",
            isEnt: !1,
            isCommon: !e,
            countDown: 60,
            autoMakeCall: !1,
            getUrl: window.location.protocol + "//verifycode.58.com/captcha/get",
            validateUrl: window.location.protocol + "//verifycode.58.com/captcha/validate",
            IE6GetImageUrl: window.location.protocol + "//verifycode.58.com/captcha/generateImg",
            phoneId: e ? "lianxifangshi" : "Phone",
            appendToDOM: function(t, e, i) {
                var n;
                e && 0 < $("#tgWrapTr").size() && (n = $("#tgWrapTr")),
                    n = i ? e ? $("#ModyBaseInfo").find("tr").filter(":last") : $("#ModyContractInfo").find("tr").filter(":last") : e ? $("#fabu").closest("13889" === a ? "div.post-form-item" : "tr") : $("#ModyBaseInfo").find("tr").filter(":last"),
                    d.isCommon ? t.insertBefore(n) : t.insertAfter(n)
            },
            formValidator: function(t, e, i) {
                var n = e.type
                    , a = e.cptrType
                    , o = {
                    tipid: "cptrTip",
                    q2b: !0,
                    defaultvalue: ""
                }
                    , s = {}
                    , r = {}
                    , c = {
                    url: e.url,
                    type: "get",
                    datatype: "jsonp",
                    jsonp: "callback",
                    lastValid: "-1",
                    data: "captcha_type=" + n
                };
                if ("function" != typeof $.fn.formValidator)
                    return !1;
                o.empty = "Bsc" !== a && "Msg" !== a,
                    o.onfocus = e.focusTip,
                    s.onerror = e.emptyTip,
                    r.regexp = e.regexp,
                    r.onerror = e.regexErrorTip,
                    c.onerror = e.ajaxErrorTip,
                    c.onwait = e.ajaxOnWaitTip,
                    c.success = i,
                    t.formValidator(o).inputValidator(s).regexValidator(r).ajaxValidator(c)
            },
            validatorOption: {
                focusTip: {
                    100: "请填写下面图片所示的数字和字母",
                    180: "请填写下面图片所示的数字和字母",
                    200: "请填写下面图片所示算式的运算结果",
                    300: "请点击九宫格文字",
                    400: "请填写短信收到的验证码",
                    500: "请填写语音收听到的验证码",
                    600: "请点击九宫格数字",
                    700: "请填写语音收听到的验证码",
                    1100: "请填写短信收到的验证码"
                },
                emptyTip: {
                    100: "请输入验证码",
                    180: "请输入验证码",
                    200: "请输入验证码",
                    400: "请输入验证码",
                    500: "请输入验证码",
                    700: "请输入验证码",
                    1100: "请输入验证码"
                },
                regexp: {
                    100: "^[0-9a-zA-Z]{4,5}$",
                    180: "^[0-9a-zA-Z]{4,6}$",
                    200: "^[0-9-]{1,3}$",
                    300: "^[0-9]{4}$",
                    400: "^[0-9]{5,6}$",
                    500: "^[0-9]{5,6}$",
                    600: "^[0-9]{1,6}$",
                    700: "^[0-9]{5,6}$",
                    1100: "^[0-9]{5,6}$"
                },
                regexErrorTip: {
                    100: "输入的字符有误",
                    180: "输入的字符有误",
                    200: "输入的字符有误",
                    300: "输入有误",
                    400: "输入的字符有误",
                    500: "输入的字符有误",
                    600: "输入有误",
                    700: "输入的字符有误",
                    1100: "输入的字符有误"
                },
                ajaxErrorTip: {
                    100: "验证码错误",
                    180: "验证码错误",
                    200: "验证码错误",
                    300: "验证码错误，请重新点击九宫格",
                    400: "验证码错误",
                    500: "验证码错误",
                    600: "验证码错误，请重新点击九宫格",
                    700: "验证码错误",
                    1100: "验证码错误"
                },
                ajaxOnWaitTip: "正在校验中..."
            }
        }), p = {
            0: "Error",
            100: "Bsc",
            200: "Bsc",
            300: "Sqr",
            400: "Msg",
            500: "Msg",
            600: "Cmb",
            700: "Msg",
            180: "Bsc",
            1100: "Msg"
        }, n = {
            1: {
                8: "post-ui7",
                10: "post-ui7",
                12: "post-ui7"
            },
            4: {
                29: "post-ui7",
                30: "post-ui7",
                240: "post-ui7"
            },
            5: "post-ui7",
            832: {
                252: "pet-post"
            },
            8640: {
                8645: "post-ui7",
                8658: "post-ui7"
            },
            9224: {
                "*": "post-hire",
                13889: "post-hirenew",
                13890: "post-hirenew",
                13891: "post-hirenew",
                13892: "post-hirenew",
                15890: "post-hirenew"
            },
            13941: "post-hire"
        }, o = {
            common: {
                cptrTable: '<table id="cptrTable" class="character"><tbody><tr><td></td><td></td><td></td><td></td><td class="backspace"></td></tr></tbody></table>',
                cptrTablePlus: '<table id="cptrTable" class="character"><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td class="backspace"></td></tr></tbody></table>',
                sqrTable: '<table id="sqrTable" class="character"><tbody><tr><td class="r1c1"></td><td class="r1c2"></td><td class="r1c3"></td></tr><tr><td class="r2c1"></td><td class="r2c2"></td><td class="r2c3"></td></tr><tr><td class="r3c1"></td><td class="r3c2"></td><td class="r3c3"></td></tr></tbody></table>',
                hiddenInput: '<input id="captcha_input" class="cptrHidden" type="text" name="captcha_input" maxlength="6" />',
                hiddenType: '<input id="captcha_type_iqas" type="hidden" name="captcha_type_iqas" />',
                cptrImage: '<div id="cptrImage"></div>',
                tip: '<span id="cptrTip"></span>',
                cptrPrompt: '<span id="cptrPrompt"></span>',
                cptrReget: '<span id="reget"><a href="javascript:void(0)">获取验证码</a></span>',
                cptrCd: '<span id="cptrCd"><a href="javascript:void(0)">获取验证码</a><span></span></span>'
            }
        };
        o.stylesheet = {
            sqr: "#cptrTable {margin-right: 10px;display: inline-block;_zoom: 1;*display: inline;}#sqrTable,#cptrTable{margin-bottom: 10px;border-collapse: collapse;border: 1px solid #ccc}#sqrTable td,#cptrTable td{padding: 0;width: 50px;height: 47px;text-align: center;}#sqrTable td{cursor: pointer; border:1px solid #ccc;}#sqrTable td.typed{background: #ccc;}#cptrTable td.backspace{cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;background: url(" + window.location.protocol + "//verifycode.58.com/captcha/del.png?v=20140521) no-repeat 0 -47px;}" + (d.isEnt || !d.isCommon ? "#cptrTable .chenggong{ display: inline-block; width: 19px; height: 19px; background: url(//img.58cdn.com.cn/n/images/post/background.gif) no-repeat -162px -79px; vertical-align: middle; padding-right: 5px; }" : "") + '#cptrTable td.backspace.hover{background-position: 0 0;}#cptrTable .chenggong{margin: 0;padding:0;}#cptrImage{font-size: 13px;height:40px;background-position: 0 0;padding-left: 180px;padding-top:0px;background-repeat: no-repeat;width: auto;line-height: 40px;margin-bottom: 10px;}#cptrImage a{text-decoration: underline;}#sqrTable.loading td,#cptrImage.loading{background-image: url("' + window.location.protocol + '//verifycode.58.com/captcha/loading.gif?v=20140703")}#cptrImage.loading.bgfix{background-position: 0px 20px;}#cptrCd,#reget{margin-left: 10px;}.cptrHidden{width: 0;height: 0;position: absolute;visibility: hidden;left: -9999px;}.r1c1{background-position: 0px -40px;}.r1c2{background-position: -50px -40px;}.r1c3{background-position: -100px -40px;}.r2c1{background-position: 0px -87px;}.r2c2{background-position: -50px -87px;}.r2c3{background-position: -100px -87px;}.r3c1{background-position: 0px -134px;}.r3c2{background-position: -50px -134px;}.r3c3{background-position: -100px -134px;}',
            sqrBg: "#sqrTable td,#cptrTable td.typed,#cptrImage{background-image: url(#{picUrl});}"
        },
            o["post-ui7"] = {
                wrapper: '<div id="captcha"></div>',
                th: "",
                Bsc: {
                    td: "<div>" + o.common.hiddenType + '<input id="captcha_input" class="txt w60 c_999 mr10" name="captcha_input" maxlength="6" autocomplete="off"/>' + o.common.tip + o.common.cptrImage + "</div>"
                },
                Msg: {
                    td: "<div>" + o.common.hiddenType + '<p style="margin-bottom: 10px;">' + o.common.cptrPrompt + o.common.cptrCd + '</p><input id="captcha_input" class="txt w60 c_999 mr10" name="captcha_input" maxlength="6" autocomplete="off"/>' + o.common.tip + "</div>"
                },
                Sqr: {
                    td: "<td>" + o.common.hiddenType + o.common.hiddenInput + o.common.cptrTable + o.common.tip + o.common.cptrImage + o.common.sqrTable + "</td>"
                },
                Cmb: {
                    td: "<td>" + o.common.hiddenType + o.common.hiddenInput + '<p style="margin-bottom: 10px;">' + o.common.cptrPrompt + o.common.cptrCd + "</p>" + o.common.cptrTablePlus + o.common.tip + o.common.sqrTable + "</td>"
                },
                Error: {
                    td: "<div>" + o.common.cptrPrompt + o.common.cptrReget + "</div>"
                },
                Loading: {
                    td: '<div style="color:red">' + o.common.cptrPrompt + "</div>"
                }
            },
            o["post-ui6"] = {
                wrapper: '<div id="captcha"></div>',
                th: "",
                Bsc: {
                    td: "<div>" + o.common.hiddenType + '<input class="text2" type="text" id="captcha_input" name="captcha_input" maxlength="6" autocomplete="off"/>' + o.common.tip + o.common.cptrImage + "</div>"
                },
                Msg: {
                    td: "<div>" + o.common.hiddenType + '<p style="margin-bottom: 10px;">' + o.common.cptrPrompt + o.common.cptrCd + '</p><input class="text2" type="text" id="captcha_input" name="captcha_input" maxlength="6" autocomplete="off"/>' + o.common.tip + "</div>"
                },
                Sqr: {
                    td: "<td>" + o.common.hiddenType + o.common.hiddenInput + o.common.cptrTable + o.common.tip + o.common.cptrImage + o.common.sqrTable + "</td>"
                },
                Cmb: {
                    td: "<td>" + o.common.hiddenType + o.common.hiddenInput + '<p style="margin-bottom: 10px;">' + o.common.cptrPrompt + o.common.cptrCd + "</p>" + o.common.cptrTablePlus + o.common.tip + o.common.sqrTable + "</td>"
                },
                Error: {
                    td: "<div>" + o.common.cptrPrompt + o.common.cptrReget + "</div>"
                },
                Loading: {
                    td: '<div style="color:red">' + o.common.cptrPrompt + "</div>"
                }
            },
            o["post-hire"] = {
                wrapper: '<tr id="captcha"></tr>',
                th: "<th><span><i>*</i>验证码</span></th>",
                Bsc: {
                    td: '<td><div style="height: 34px;margin-bottom: 6px;">' + o.common.hiddenType + '<input class="textstyle" type="text" id="captcha_input" name="captcha_input" maxlength="6" autocomplete="off"/>' + o.common.tip + "</div>" + o.common.cptrImage + "</td>"
                },
                Msg: {
                    td: '<td><div class="naddList">' + o.common.hiddenType + '<p style="margin: 10px 0;">' + o.common.cptrPrompt + o.common.cptrCd + '</p><input class="textstyle" type="text" id="captcha_input" name="captcha_input" maxlength="6" autocomplete="off"/>' + o.common.tip + "</div></td>"
                },
                Sqr: {
                    td: "<td>" + o.common.hiddenType + o.common.hiddenInput + o.common.cptrTable + o.common.tip + o.common.cptrImage + o.common.sqrTable + "</td>"
                },
                Cmb: {
                    td: '<td><div class="naddList">' + o.common.hiddenType + o.common.hiddenInput + '<p style="margin: 10px 0;">' + o.common.cptrPrompt + o.common.cptrCd + "</p>" + o.common.cptrTablePlus + o.common.tip + o.common.sqrTable + "</div></td>"
                },
                Error: {
                    td: "<td>" + o.common.cptrPrompt + o.common.cptrReget + "</td>"
                },
                Loading: {
                    td: '<td style="color:red">' + o.common.cptrPrompt + "</td>"
                }
            },
            o["post-hirenew"] = {
                wrapper: '<div id="captcha" class="post-form-item fn-clear"></div>',
                th: '<label class="post-label"><span class="post-form-required">*</span>验证码</label>',
                Bsc: {
                    td: '<div class="post-item-section" style="height: auto">' + o.common.hiddenType + '<input class="post-input" type="text" id="captcha_input" name="captcha_input" maxlength="6" autocomplete="off"/><span class="post-form-explain">' + o.common.tip + "</span>" + o.common.cptrImage + "</div>"
                },
                Msg: {
                    td: '<div class="post-item-section"  style="height: auto;padding-top: 5px;"><div class="naddList">' + o.common.hiddenType + '<p style="margin-bottom: 10px;">' + o.common.cptrPrompt + o.common.cptrCd + '</p><input id="captcha_input" class="post-input" name="captcha_input" maxlength="6" autocomplete="off"/><span class="post-form-explain">' + o.common.tip + "</span></div></div>"
                },
                Sqr: {
                    td: '<div class="post-item-section" style="height: auto">' + o.common.hiddenType + o.common.hiddenInput + o.common.cptrTable + '<span class="post-form-explain" style="position: absolute; margin-top: 10px;">' + o.common.tip + "</span>" + o.common.cptrImage + o.common.sqrTable + "</div>"
                },
                Cmb: {
                    td: '<div class="post-item-section" style="height: auto;padding-top: 5px;">' + o.common.hiddenType + o.common.hiddenInput + '<p style="margin-bottom: 10px;">' + o.common.cptrPrompt + o.common.cptrCd + "</p>" + o.common.cptrTablePlus + '<span class="post-form-explain" style="position: absolute; margin-top: 10px;">' + o.common.tip + "</span>" + o.common.sqrTable + "</div>"
                },
                Error: {
                    td: '<div class="post-item-section" style="padding-top: 5px;">' + o.common.cptrPrompt + o.common.cptrReget + "</div>"
                },
                Loading: {
                    td: '<div class="post-item-section" style="padding-top: 5px;color:red">' + o.common.cptrPrompt + "</div>"
                }
            },
            o["pet-post"] = {
                wrapper: '<tr id="captcha"></tr>',
                th: "<th><b>*&nbsp;</b>验证码</th>",
                Bsc: {
                    td: "<td>" + o.common.hiddenType + '<input class="tit_text" type="text" id="captcha_input" name="captcha_input" maxlength="6" autocomplete="off"/>' + o.common.tip + "</td>"
                },
                Msg: {
                    td: "<td>" + o.common.hiddenType + '<p style="margin-bottom: 10px;">' + o.common.cptrPrompt + o.common.cptrCd + '</p><input class="tit_text" type="text" id="captcha_input" name="captcha_input" maxlength="6" autocomplete="off"/>' + o.common.tip + "</td>"
                },
                Sqr: {
                    td: "<td>" + o.common.hiddenType + o.common.hiddenInput + o.common.cptrTable + o.common.tip + o.common.cptrImage + o.common.sqrTable + "</td>"
                },
                Cmb: {
                    td: "<td>" + o.common.hiddenType + o.common.hiddenInput + '<p style="margin-bottom: 10px;">' + o.common.cptrPrompt + o.common.cptrCd + "</p>" + o.common.cptrTablePlus + o.common.tip + o.common.sqrTable + "</td>"
                },
                Error: {
                    td: "<td>" + o.common.cptrPrompt + o.common.cptrReget + "</td>"
                },
                Loading: {
                    td: '<td style="color:red">' + o.common.cptrPrompt + "</td>"
                }
            };
        var h = function(t, e) {
            this.settings = {},
                this.settings = "object" == typeof e ? $.extend({}, d, e) : "string" == typeof e && "highrisk" === e ? $.extend({}, d, h.highriskOptions) : d,
                this.type = -100,
                this.cptrType = "",
                this.cptrKey = t || "",
                this.state = "loading",
                this.picUrl = c || l ? this.settings.IE6GetImageUrl : "",
                this.getUrl = this.settings.getUrl,
                this.validateUrl = this.settings.validateUrl,
                this.$elem = null,
                this.$input = null,
                this.$image = null,
                this.errorCount = 0,
                this.ysnkt = 0,
                this.injector = null,
                this.init(this.cptrKey)
        };
        h.highriskOptions = {
            getUrl: window.location.protocol + "//post.58.com/ajax?action=highrisksendcaptcha",
            validateUrl: window.location.protocol + "//post.58.com/ajax?action=highriskcheckcaptcha"
        },
            h.prototype = {
                constructor: h,
                init: function(t) {
                    var i, n = this, a = n.settings.isCommon, o = n.settings.isEnt;
                    if (n.cptrType = "Loading",
                            n.createStyle(),
                        0 < $("#captcha").length || u)
                        return n.refactor(n.cptrKey),
                            !1;
                    n.requestCaptcha(n.getUrl, function(t, e) {
                        0 < $("#captcha").length && $("#captcha").remove(),
                            i = e.call(n, t),
                            n.settings.appendToDOM(i, a, o),
                            n.$elem.find("#captcha_type_iqas").val(n.type),
                            n.initValidator(),
                            n.$input.focus(),
                        700 == n.type && n.settings.autoMakeCall && n.refactor(n.cptrKey)
                    })
                },
                refactor: function(t, e) {
                    var i = this
                        , n = i.type
                        , a = i.settings.isCommon
                        , o = i.settings.isEnt
                        , s = $("#captcha");
                    void 0 !== t && (i.cptrKey = t),
                        "object" == typeof e ? i.settings = $.extend({}, d, e) : "string" == typeof e && "highrisk" === e && (i.settings = $.extend({}, d, h.highriskOptions),
                            i.picUrl = c || l ? i.settings.IE6GetImageUrl : "",
                            i.validateUrl = i.settings.validateUrl),
                        i.getUrl = i.settings.getUrl,
                        i.requestCaptcha(i.getUrl, function(t, e) {
                            clearInterval(r),
                                i.$input.removeAttr("disabled"),
                                i.type !== n || "Cmb" === i.type ? (i.setBgStyle(),
                                    $captcha = e.call(i, t),
                                    s.remove(),
                                    i.$elem = $captcha,
                                    i.settings.appendToDOM($captcha, a, o),
                                    i.$elem.find("#captcha_type_iqas").val(i.type),
                                    i.initValidator(),
                                    i.$input.focus()) : (i.resetGrid(),
                                    i.$input.val(""),
                                    i.setPrompt(t && t.tip),
                                "Msg" !== i.cptrType && "Cmb" !== i.cptrType || i.setCooldownState(),
                                i.$input.is(":hidden") || i.$input.focus())
                        })
                },
                getVoiceCaptcha: function(t) {
                    var e = this
                        , i = setTimeout(function() {
                        "loading" === e.state && e.setErrorState()
                    }, 1e4);
                    if ("loading" === e.state)
                        return !1;
                    e.setLoadingState(),
                        $.ajax({
                            url: t,
                            type: "get",
                            async: !0,
                            dataType: "jsonp",
                            success: function(t) {
                                clearTimeout(i),
                                    t && "0" == t.code ? (e.setReadyState(),
                                        e.resetGrid(),
                                        e.$input.val("").show(),
                                        e.$elem.find("#cptrTip").show(),
                                        e.$input.focus(),
                                        e.setCooldownState()) : t && "200" == t.code ? e.setErrorState("获取语音验证码次数超出限制！") : e.setErrorState("获取语音验证码失败！")
                            }
                        })
                },
                destroy: function() {
                    return this.$elem.remove(),
                        !1
                },
                initValidator: function() {
                    var t = this
                        , e = {}
                        , i = t.settings.validatorOption;
                    for (var n in e.type = t.type,
                        e.cptrType = t.cptrType,
                        e.url = t.validateUrl,
                        i) {
                        if ("string" == typeof i[n]) {
                            e[n] = i[n];
                            break
                        }
                        "undefined" != typeof i[n][t.type] && (e[n] = i[n][t.type])
                    }
                    t.settings.formValidator(t.$input, e, t.afterValidateCaptcha())
                },
                getSnippet: function(t) {
                    var e = "";
                    return e = "string" == typeof n[i] ? n[i] : "object" == typeof n[i] ? "string" == typeof n[i][a] ? n[i][a] : "string" == typeof n[i]["*"] ? n[i]["*"] : "post-ui6" : "post-ui6",
                    this.settings.isEnt && (e = "post-hire"),
                        t in o.common ? $(o.common[t]) : t in o[e] ? $(o[e][t]) : $(o[e][this.cptrType][t])
                },
                createStyle: function() {
                    var t = document.getElementsByTagName("head")[0]
                        , e = (document.createElement("style"),
                        document.createElement("style"),
                        document.createElement("div"))
                        , i = document.createElement("div");
                    return !(0 < $("#cptrStyle").size()) && (!(0 < $("#sqrBgStyle").size()) && (e.innerHTML = '_<style type="text/scss" id="cptrStyle">' + o.stylesheet.sqr + "</style>",
                        i.innerHTML = '_<style type="text/scss" id="sqrBgStyle">' + o.stylesheet.sqrBg.replace("#{picUrl}", this.picUrl) + "</style>",
                        e.removeChild(e.firstChild),
                        i.removeChild(i.firstChild),
                        t.appendChild(e.firstChild),
                        void t.appendChild(i.firstChild)))
                },
                setBgStyle: function() {
                    document.createElement("style");
                    var t = document.getElementsByTagName("head")[0]
                        , e = document.createElement("div");
                    e.innerHTML = '_<style type="text/scss" id="sqrBgStyle">' + o.stylesheet.sqrBg.replace("#{picUrl}", this.picUrl) + "</style>",
                        e.removeChild(e.firstChild),
                        $("#sqrBgStyle").remove(),
                        t.appendChild(e.firstChild)
                },
                requestCaptcha: function(t, o) {
                    var e, i, s = this, n = $("#" + s.settings.phoneId).val(), a = s.cptrKey ? "&str=" + s.cptrKey : "", r = setTimeout(function() {
                        "loading" === s.state && (i = "获取验证码超时，请检查网络连接！",
                            s.setErrorState(i),
                            s.injector = s.renderErrorCaptcha,
                        "function" == typeof o && o(i, s.injector))
                    }, 1e4);
                    e = "tel_number=" + n,
                        s.setLoadingState(),
                        s.injector = s.renderLoadingCaptcha,
                        o("正在获取验证码...", s.injector),
                        $.ajax({
                            url: t,
                            type: "get",
                            async: !0,
                            data: e + a,
                            dataType: "jsonp",
                            success: function(t) {
                                var e, i, n, a = "?v=" + (new Date).getTime();
                                if (clearTimeout(r),
                                    "error" === s.state)
                                    return !1;
                                t && "0" == t.code ? (e = t.data,
                                    s.setReadyState(),
                                    s.ysnkt = (i = e.ysnkt,
                                        (n = parseInt(i + "", 16) + "").charAt(n.length - 4)),
                                    "string" == typeof p[e.type] ? (s.type = e.type,
                                        s.cptrType = p[e.type],
                                        s.injector = s["render" + s.cptrType + "Captcha"]) : (e = "获取验证码失败！",
                                        s.setErrorState(e),
                                        s.injector = s.renderErrorCaptcha),
                                700 == s.type && e.callphoneurl && (s.getUrl = e.callphoneurl),
                                    e.img ? (s.picUrl = c || l ? s.settings.IE6GetImageUrl + a : "data:image/png;base64," + e.img,
                                        s.setBgStyle()) : s.picUrl = "") : (e = t.message,
                                    s.setErrorState(e),
                                    s.injector = s.renderErrorCaptcha),
                                "function" == typeof o && o(e, s.injector)
                            }
                        })
                },
                setPrompt: function(t) {
                    0 < $("#cptrPrompt").length && $("#cptrPrompt").html(t)
                },
                renderBscCaptcha: function(t) {
                    var e = this
                        , i = e.getSnippet("wrapper")
                        , n = e.getSnippet("th")
                        , a = e.getSnippet("td");
                    return e.$input = a.find("#captcha_input"),
                        e.$image = a.find("#cptrImage"),
                        e.$image.addClass("bgfix").css({
                            height: "80px",
                            "line-height": "80px"
                        }),
                        e.$image.html('<a href="javascript:void(0)">看不清</a>'),
                        i.append(n).append(a),
                        e.$elem = i,
                        e.$image.find("a").bind("click", function(t) {
                            t.preventDefault(),
                                e.$input.attr("disabled", !0),
                                e.refactor(e.cptrKey)
                        }),
                        i
                },
                renderMsgCaptcha: function(t) {
                    var e = this
                        , i = e.getSnippet("wrapper")
                        , n = e.getSnippet("th")
                        , a = e.getSnippet("td");
                    return e.$input = a.find("#captcha_input"),
                        a.find("#cptrPrompt").html(t.tip),
                    700 === e.type && (a.find("#cptrTip").hide(),
                        e.$input.hide()),
                        i.append(n).append(a),
                        e.$elem = i,
                    700 != e.type && e.setCooldownState(),
                        a.find("#cptrCd a").bind("click", function(t) {
                            t.preventDefault(),
                                700 == e.type ? e.getVoiceCaptcha(e.getUrl) : e.refactor(e.cptrKey)
                        }),
                        i
                },
                renderSqrCaptcha: function(t) {
                    var a = this
                        , e = a.getSnippet("wrapper")
                        , i = a.getSnippet("th")
                        , o = a.getSnippet("td");
                    return a.$input = o.find("#captcha_input"),
                        a.$image = o.find("#cptrImage"),
                        a.$image.html(t.tip + '<a href="javascript:void(0)">看不清</a>'),
                    a.settings.isEnt && o.find("#cptrTip").css("position", "absolute"),
                        e.append(i).append(o),
                        a.$elem = e,
                        o.find("#sqrTable td").bind("click", function(t) {
                            var e = $(this)
                                , i = o.find("#cptrTable td").not(".backspace")
                                , n = e.attr("class").match(s)[0];
                            return "loading" !== a.state && !e.hasClass("typed") && (0 !== i.not(".typed").length && (e.addClass("typed"),
                                void a.appendGrid(n)))
                        }),
                        o.find(".backspace").bind("click", function(t) {
                            a.removeGrid()
                        }).bind("mouseover", function(t) {
                            $(this).addClass("hover")
                        }).bind("mouseout", function(t) {
                            $(this).removeClass("hover")
                        }),
                        a.$image.find("a").bind("click", function(t) {
                            t.preventDefault(),
                                a.refactor(a.cptrKey)
                        }),
                        e
                },
                renderCmbCaptcha: function(t) {
                    var a = this
                        , e = a.getSnippet("wrapper")
                        , i = a.getSnippet("th")
                        , o = a.getSnippet("td");
                    return a.$input = o.find("#captcha_input"),
                        o.find("#cptrPrompt").html(t.tip),
                    a.settings.isEnt && o.find("#cptrTip").css("position", "absolute"),
                        e.append(i).append(o),
                        a.$elem = e,
                        a.setCooldownState(),
                        o.find("#sqrTable td").bind("click", function(t) {
                            var e = $(this)
                                , i = o.find("#cptrTable td").not(".backspace")
                                , n = e.attr("class").match(s)[0];
                            return "loading" !== a.state && !e.hasClass("typed") && (0 !== i.not(".typed").length && (e.addClass("typed"),
                                void a.appendGrid(n)))
                        }),
                        o.find(".backspace").bind("click", function(t) {
                            a.removeGrid()
                        }).bind("mouseover", function(t) {
                            $(this).addClass("hover")
                        }).bind("mouseout", function(t) {
                            $(this).removeClass("hover")
                        }),
                        o.find("#cptrCd a").bind("click", function(t) {
                            t.preventDefault(),
                                a.refactor(a.cptrKey)
                        }),
                        e
                },
                renderLoadingCaptcha: function(t) {
                    var e = this
                        , i = e.getSnippet("wrapper")
                        , n = e.getSnippet("th")
                        , a = e.getSnippet("td");
                    return e.$input = a.find("#captcha_input"),
                        a.find("#cptrPrompt").html(t),
                        i.append(n).append(a),
                        e.$elem = i
                },
                renderErrorCaptcha: function(t) {
                    var e = this
                        , i = e.getSnippet("wrapper")
                        , n = e.getSnippet("th")
                        , a = e.getSnippet("td");
                    return e.$input = a.find("#captcha_input"),
                        a.find("#cptrPrompt").html(t),
                        i.append(n).append(a),
                        e.$elem = i,
                        a.find("#reget a").bind("click", function(t) {
                            if (t.preventDefault(),
                                "A" !== t.target.tagName.toUpperCase())
                                return !1;
                            e.refactor(e.cptrKey)
                        }),
                        i
                },
                appendGrid: function(t) {
                    var e, i = this, n = i.$elem.find("#cptrTable td").not(".backspace,.typed").eq(0);
                    if (0 === n.length)
                        return !1;
                    n.addClass(t).addClass("typed"),
                        e = 3 * (parseInt(s.exec(t)[1], 10) - 1) + parseInt(s.exec(t)[2], 10) - 1,
                        i.$input.val(i.$input.val() + e.toString()),
                        "Sqr" === i.cptrType ? 4 === i.$input.val().length && i.$input.blur() : "Cmb" === i.cptrType && i.$input.val().length == i.ysnkt && i.$input.blur()
                },
                removeGrid: function() {
                    var t, e, i, n = $("#cptrTable").find(".typed").filter(":last"), a = this.$elem.find("#sqrTable"), o = this.$input.val();
                    if (0 === n.length)
                        return !1;
                    t = n.attr("class").match(s)[0],
                        e = parseInt(s.exec(t)[1], 10),
                        i = parseInt(s.exec(t)[2], 10),
                        n.removeClass("typed").removeClass(t),
                        a.find("tr").eq(e - 1).find("td").eq(i - 1).addClass(t).removeClass("typed"),
                        this.$input.val(o.substr(0, o.length - 1))
                },
                resetGrid: function() {
                    var t;
                    if (this.$input.val(""),
                        -1 === "Sqr,Cmb".indexOf(this.cptrType))
                        return !1;
                    t = $("#cptrTable td").not(".backspace"),
                        this.$elem.find("#sqrTable td").removeClass("typed"),
                        t.attr("class", "")
                },
                setLoadingState: function() {
                    var t = this;
                    t.state = "loading";
                    try {
                        t.$elem.find("#reget a").html("获取中..."),
                            t.$elem.find("#cptrCd a").html("获取中..."),
                            t.$elem.find("#sqrTable").addClass("loading"),
                            t.$image.addClass("loading")
                    } catch (e) {}
                },
                setReadyState: function() {
                    var t = this;
                    t.state = "ready";
                    try {
                        t.$elem.find("#reget a").html("获取验证码"),
                            t.$elem.find("#cptrCd a").html("获取验证码"),
                            t.$elem.find("#sqrTable").removeClass("loading"),
                            t.$image.removeClass("loading")
                    } catch (e) {}
                },
                setCooldownState: function() {
                    var t = this
                        , e = t.settings.countDown
                        , i = t.$elem.find("#cptrCd");
                    r = setInterval(function() {
                        0 === e ? (t.setReadyState(),
                            i.find("span").hide(),
                            i.find("a").show(),
                            clearInterval(r)) : i.find("span").html(e-- + "秒后可重新发送")
                    }, 1e3),
                        t.state = "cooldown",
                        i.find("a").hide().html("获取验证码"),
                        i.find("span").html(e-- + "秒后可重新发送").show()
                },
                setSuccessState: function() {
                    var t = this
                        , e = t.$elem.find("td.backspace")
                        , i = t.$elem.find("#cptrTip")
                        , n = null;
                    $tds = t.$elem.find("#cptrTable td").not(".backspace"),
                        t.state = "success",
                        t.$input.attr("readonly", "readonly"),
                        "Bsc" === t.cptrType || "Msg" === t.cptrType ? (i.empty().removeAttr("id"),
                            i.attr("class", "chenggong")) : (t.$elem.find("#sqrTable").remove(),
                            (n = $("<td></td>")).css({
                                border: "0"
                            }).html('<span class="chenggong"></span>'),
                            e.hide(),
                            i.remove(),
                            $tds.not(".typed").remove(),
                            n.insertAfter(e),
                            e.remove()),
                        clearInterval(r),
                        t.$elem.find("#cptrCd").remove(),
                        t.$elem.find("#cptrPrompt").closest("p").remove(),
                        t.$elem.find("#cptrImage").remove()
                },
                setErrorState: function(t) {
                    var e = this;
                    t = t || "验证码加载失败";
                    try {
                        e.$elem.find("#reget a").html("获取验证码"),
                            e.$elem.find("#cptrCd a").html("获取验证码"),
                            e.$elem.find("#sqrTable").removeClass("loading"),
                            e.$image.removeClass("loading")
                    } catch (i) {}
                    e.state = "error",
                        e.type = 0,
                        e.cptrType = "Error",
                        e.setPrompt(t)
                },
                setFailState: function() {
                    return !1
                },
                afterValidateCaptcha: function(i) {
                    var n = this;
                    return function(t) {
                        var e = !1;
                        if (t && "0" == t.code)
                            if (t.data.result + "" == "true")
                                n.setSuccessState(),
                                    n.$elem.find("#cptrTip").removeAttr("id"),
                                    e = !0;
                            else if (n.errorCount++,
                                "Sqr" === n.cptrType || "Cmb" === n.cptrType) {
                                if (n.resetGrid(),
                                    "cooldown" === n.state)
                                    return !1;
                                n.refactor(n.cptrKey),
                                    n.$input.val(""),
                                    n.$input.focus()
                            }
                        return "function" == typeof i && i(e, n.state),
                            e
                    }
                },
                check: function(t) {
                    var e = this;
                    "success" === e.state && "function" == typeof t && t(!0);
                    var i = {
                        captcha_input: e.$input.val(),
                        captcha_type: e.type
                    };
                    $.ajax({
                        url: e.validateUrl,
                        type: "get",
                        dataType: "jsonp",
                        jsonp: "callback",
                        lastValid: "-1",
                        data: i,
                        success: e.afterValidateCaptcha(t),
                        error: e.afterValidateCaptcha(t)
                    })
                }
            };
        var u = null;
        return {
            init: function(t, e) {
                !0,
                    u ? u.refactor(t, e) : u = new h(t,e)
            },
            destroy: function() {
                !1,
                u && (u.destroy(),
                    u = null)
            },
            check: function(t) {
                u && u.check(t)
            }
        }
    }),
    define("component/textShow/js/textShow", ["component/base/js/base", "util/Class"], function(t, e) {
        var i = e.extend(t);
        return i.prototype.CLASS = {
            WRAP: "textshow",
            TITLE: "input_text_title",
            CONTENT: "input_text_content",
            MULTI: "clearfix"
        },
            i.opts = {
                type: "textshow",
                name: "",
                view: {
                    icoClass: "",
                    textClass: "",
                    maxLength: ""
                },
                funcs: []
            },
            i.prototype.type = "textShow",
            i.prototype.createElem = function() {
                var t = this.opts;
                this.container = $("<div>"),
                    this.container.addClass(this.CLASS.WRAP),
                    this.container.attr("name", t.name),
                    this.elem = $("<span><span class='" + this.opts.view.icoClass + "'></span><span class='textcon " + this.opts.view.textClass + "'></span></span>"),
                    this.elem.attr("type", t.type),
                    this.elem.attr("id", t.name),
                    this.setElemView()
            }
            ,
            i.prototype.setElemView = function() {
                this.container.append(this.elem),
                    this.container.addClass(this.CLASS.MULTI)
            }
            ,
            i.prototype.bindDomEvent = function() {
                var e = this;
                e.elem.bind("click", function(t) {
                    this.btnId = $(t.target).attr("id"),
                    this.btnId && 0 < this.btnId.length && e.container.triggerHandler("clickevent")
                })
            }
            ,
            i.prototype.getValue = function(t) {
                return this.btnId
            }
            ,
            i.prototype.setValue = function(t) {
                if (t && "--" !== t) {
                    if (this.opts.view.maxLength) {
                        var e = this.opts.view.maxLength
                            , i = t.indexOf("<");
                        if (-1 === i)
                            t = t.substring(0, e) + "...";
                        else {
                            t.substring(0, i);
                            var n = t.substring(i + 1);
                            e < i && (t = t.substring(0, e) + "...<" + n)
                        }
                    }
                    this.elem.find(".textcon").html(t)
                } else
                    this.container.triggerHandler("clickevent")
            }
            ,
            i.prototype.activate = function() {
                this.opts.isFreeze = !1;
                this.getValue();
                this.container.trigger("setAutoAddress")
            }
            ,
            i.prototype.freeze = function() {
                this.opts.isFreeze = !0,
                    this.hideRows()
            }
            ,
            i
    }),
    define("component/text/js/text", ["component/base/js/base", "util/Class", "component/popTip/js/popTip", "Controller/Controller"], function(t, e, i, n) {
        var a = function(t) {
            this.opts = $.extend(!0, {}, t),
                this.init()
        };
        return a.prototype.CLASS = {
            WRAP: "sep_wrap"
        },
            a.prototype = {
                constructor: a,
                type: "text",
                CLASS: {
                    WRAP: "sep_wrap"
                },
                init: function() {
                    this.createElem()
                },
                createElem: function() {
                    var t = ""
                        , e = this.addStarHtml();
                    try {
                        t = this.opts.view.classEle ? '<div class="' + this.CLASS.WRAP + '" style="' + this.opts.view.classEle + '">' + e + this.opts.view.text + "</div>" : '<div class="' + this.CLASS.WRAP + '">' + e + this.opts.view.text + "</div>"
                    } catch (i) {}
                    t && (this.elem = $(t)),
                    this.opts.hideStatus && this.elem.hide()
                },
                addStarHtml: function() {
                    var t = "";
                    return "boolean" == typeof this.opts.view.addStar && 1 == this.opts.view.addStar && (t = '<span class="text_title_star">*</span>'),
                        t
                },
                getValue: function() {},
                setValue: function() {},
                bindEvent: function() {},
                render: function(t) {
                    this.elem && t.append(this.elem)
                },
                activate: function() {
                    console.log("text activate")
                },
                freeze: function() {
                    console.log("text freeze")
                },
                activateComponent: function() {
                    this.elem.show()
                },
                freezeComponent: function() {
                    this.elem.hide()
                }
            },
            a
    }),
    define("util/explanjson4fe", [], function() {
        var t = {};
        return t.curCity = ____json4fe.locallist,
            t.localId = t.curCity.dispid,
            t.rootCatentry = ____json4fe.catentry[0],
            t.rootCate = t.rootCatentry,
            t.curCatentry = ____json4fe.catentry[1],
            t.curCate = t.curCatentry,
            t
    }),
    define("component/qqInput/js/qqInput", ["component/base/js/base", "util/Class", "Controller/Controller", "component/popwin/js/popwin"], function(t, e, i, n) {
        (window.QQlink = {}).addone = function(t) {
            if (t && 0 == t.code && t.data) {
                window.closeopendiv(),
                    $("#addQQ").hide();
                var e = $("#qqlink");
                e.find(".mos-text").hide(),
                    e.find(".mos-text-del").html('<em class="qq-thumb"><input type="hidden" name="globalQQOpenId" value="' + t.data.key + '"  ><input type="hidden" name="postparam_openidtype" value="2"  ><img src="' + t.data.figureurl + '"/></em>' + t.data.nickname).show(),
                    e.removeClass("focus")
            }
        }
        ;
        var a = e.extend(t);
        a.prototype.CLASS = {
            WRAP: "qq_input_wrap",
            TITLE: "qq_input_title",
            CONTENT: "qq_input_content",
            MULTI: "clearfix"
        },
            a.prototype.type = "qqInput";
        function o(t) {
            t.elemOption.hide(),
                t.rows.containerElem.css("zIndex", ""),
                t.block.containerElem.css("zIndex", ""),
            "" == t.elem.find(".mos-text-del").text() && (t.elem.find(".mos-text").show(),
                t.elem.find(".mos-text-del").hide())
        }
        return a.prototype.createElem = function() {
            this.container = $("<div>"),
                this.container.addClass(this.CLASS.WRAP),
                this.container.attr("name", this.opts.name),
                this.container.attr("id", "qqlink"),
                this.elem = $('<div class="moselect" tabindex="' + this.opts.tabIndex + '"><span class="mos-text"><em class="qq-thumb"><img src="' + window.location.protocol + '//img.58cdn.com.cn/ui7/post/pc/imgs/qqinput_figure24.png"/></em>点击此处添加QQ联系人</span><span class="mos-text-del" style="display:none"><em class="qq-thumb"><img src=""/></em></span><span class="qq-arrow"><span class="top"></span><span class="bot"></span></span></div>'),
                this.container.append(this.elem),
                this.elemOption = $('<div class="moselect-con">' + this.createOption() + '<a href="javascript:void(0);" class="addcontact">+ 新增QQ联系人</a></div>'),
                this.container.append(this.elemOption)
        }
            ,
            a.prototype.createOption = function(t) {
                if (t)
                    var e = t;
                else
                    e = this.data;
                if (!e)
                    return "";
                var i = "";
                if (0 < e.values.length) {
                    i = '<ul class="moselect-item">';
                    for (var n = 0; n < e.values.length; n++)
                        e.values[n] && (i += '<li openid="' + e.values[n].val + '" idtype="1"><a href="javascript:void(0);"><em class="qq-thumb"><img src="' + e.values[n].icon + '"/></em>' + e.values[n].text + "</a></li>");
                    i += "</ul>"
                }
                return i
            }
            ,
            a.prototype.bindDomEvent = function() {
                var i = this;
                i.elem.bind("click", function(t) {
                    i.container.addClass("focus"),
                        0 < i.elemOption.find("li").length ? ("block" != i.elemOption[0].style.display ? (i.elemOption.show(),
                            i.elem.find(".mos-text").hide(),
                            i.rows.containerElem.css("zIndex", 1602),
                            i.block.containerElem.css("zIndex", 1602)) : o(i),
                            $(document).one("click", function() {
                                o(i),
                                    i.container.removeClass("focus")
                            }),
                            t.stopPropagation()) : i.elemOption.find(".addcontact").click()
                }),
                    i.elem.find(".mos-text-del").hover(function() {
                        i.elem.find(".mos-text-del").append('<i class="ico-textdel">×</i>').addClass("greybg")
                    }, function() {
                        i.elem.find(".mos-text-del i").remove(".ico-textdel"),
                            i.elem.find(".mos-text-del").removeClass("greybg")
                    }),
                    i.elem.find(".mos-text-del").bind("click", function(t) {
                        if ($(t.target).hasClass("ico-textdel"))
                            return i.elem.find(".mos-text-del").hide().removeClass("greybg").empty(),
                                i.elem.find(".mos-text").show(),
                                !1
                    }),
                    i.elemOption.bind("click", function(t) {
                        if ("a" == t.target.tagName.toLowerCase() && "li" == $(t.target).parent()[0].tagName.toLowerCase()) {
                            var e = $(t.target).parent();
                            i.setMosTextDelValue(e.attr("openid"), e.attr("idtype"), e.find("img")[0].src, e.text())
                        }
                    }),
                    i.elemOption.find(".addcontact").bind("click", function(t) {
                        window.setbg("添加QQ联系人", "about:blank", 400, 396, !0, function() {
                            $("#qqlink").removeClass("focus"),
                                $("#addQQ").hide()
                        }),
                            $(".fe_window_mask").css({
                                height: document.documentElement.clientHeight + "px",
                                width: document.documentElement.clientWidth + "px"
                            }),
                            $(".fe_window .load").hide(),
                            0 < $("#addQQ").length ? $("#addQQ").show() : $(".fe_window iframe").after("<div id='addQQ'></div>"),
                            $(".fe_window iframe").hide(),
                            $.getJSON(window.location.protocol + "//passport.58.com/qqauthscriptui?source=huangye&successFunction=QQlink.addone&callback=?", function(t) {
                                $(".fe_window_iframe").hide(),
                                    setTimeout(function() {
                                        $(".fe_window_iframe").hide()
                                    }, 300),
                                    $("#addQQ").html(t)
                            })
                    })
            }
            ,
            a.prototype.setMosTextDelValue = function(t, e, i, n) {
                this.elem.find(".mos-text").hide(),
                    this.elem.find(".mos-text-del").html('<em class="qq-thumb"><input type="hidden" name="globalQQOpenId" value="' + t + '"  ><input type="hidden" name="postparam_openidtype" value="' + e + '"><img src="' + i + '"/></em>' + n).show(),
                    this.container.removeClass("focus")
            }
            ,
            a.prototype.setValue = function(t, e, i) {
                if (this.data) {
                    var n = null;
                    if (0 < this.data.values.length)
                        for (var a = 0; a < this.data.values.length; a++)
                            if (this.data.values[a] && this.data.values[a].val == t) {
                                n = this.data.values[a];
                                break
                            }
                    null != n && this.setMosTextDelValue(n.val, 1, n.icon, n.text)
                }
            }
            ,
            a.prototype.getValue = function() {
                var t = $("#qqlink .mos-text-del");
                return t && 1 == t.is(":visible") ? {
                    globalQQOpenId: t.find("input[name='globalQQOpenId']").val(),
                    postparam_openidtype: t.find("input[name='postparam_openidtype']").val()
                } : {
                    globalQQOpenId: "",
                    postparam_openidtype: ""
                }
            }
            ,
            a
    }),
    define("component/captchaInput/js/captchaInput", ["util/Class", "component/inputText/js/inputText", "Controller/Controller"], function(t, e, i) {
        var n = t.extend(e);
        return n.prototype.type = "captchaInput",
            n.prototype.setElemView = function() {
                var t = this.opts;
                if (t.view.width && this.elem.css("width", t.view.width),
                    t.view.placeholder && ("placeholder"in document.createElement("input") || this.fixPlaceHolder(t.view.placeholder, t.name),
                        this.elem.attr("placeholder", t.view.placeholder)),
                        this.container.append(this.elem),
                    (t.view.afterText || t.view.beforeText) && (this.container.append($(t.view.afterText)),
                        this.container.prepend($(t.view.beforeText)),
                        this.container.addClass(this.CLASS.MULTI)),
                        t.view.aText) {
                    var e = $(t.view.aText).addClass("getYzm");
                    this.yzmel = e,
                        this.container.after(e)
                }
                var i = $('<div class="vYzmTip"><span>没有收到短信，试试<a class="vioceYzm">语音验证码</a>吧!</span></div>');
                this.container.after(i),
                    this.vtipContainer = i,
                    this.vtip = this.vtipContainer.find(".vioceYzm")
            }
            ,
            n.prototype.doWukongCheck = function() {
                return i.limit.validateYzm()
            }
            ,
            n
    }),
    define("component/popwinfix/js/popwinfix", ["component/popwin/js/popwin", "util/Class", "Controller/Controller", "component/util/js/util"], function(t, e, i, n) {
        var a = function() {};
        return (a.prototype = t).type = "popwinfix",
            a.prototype.CLASS = {
                TITLE: "popwinfix_title",
                TOPBAR: "popwinfix_topbar",
                CLOSE: "popwinfix_close"
            },
            a.prototype.showPop = window.setbg,
            a.prototype.fix = function(t) {
                this._containsarea.find(".topbar").addClass(this.CLASS.TOPBAR),
                    this._containsarea.find(".closebtn").addClass(this.CLASS.CLOSE),
                    this._containsarea.find(".title").addClass(this.CLASS.TITLE);
                var e = this._containsarea.find(".fe_window_iframe").height();
                return this._containsarea.find(".fe_window_iframe").css("height", e - 5 + "px"),
                t && t.top && this._containsarea.css("top", t.top),
                t && t.overflowhidden && this._containsarea.css("overflow", "hidden"),
                    this
            }
            ,
            window.Popwinfix = new a,
            a
    }),
    define("component/limitpost/js/limitpost", ["Controller/Controller", "util/util", "component/popwinfix/js/popwinfix", "component/validate/js/validate"], function(s, i, t, r) {
        var e = function(t) {
            var e = {
                validateStateUrl: "https://passport.58.com/wukong/userstate",
                autofillphoneUrl: window.location.protocol + "//post.58.com/repo/autofillphone",
                validatePhoneUrl: window.location.protocol + "//post.58.com/repo/checkphoneV2",
                getUrl: window.location.protocol + "//verifycode.58.com/captcha/getV2?",
                getVoiceUrl: window.location.protocol + "//verifycode.58.com/captcha/voice",
                validateUrl: window.location.protocol + "//verifycode.58.com/captcha/validateV2",
                client_type: "pc"
            };
            this.defaultConfig = e,
                this.config = i.mixin(e, t),
                this.stepe = null,
                this.state = !1,
                this.init(this.config)
        };
        return e.prototype = {
            init: function(t) {
                this.config = i.mixin(this.config, t),
                    this.stepe = 0,
                    this.validateState()
            },
            initEventBind: function() {
                var i = this
                    , e = s.records.get("yzm")
                    , t = s.records.get("Phone").elem
                    , n = e.elem
                    , a = e.yzmel
                    , o = e.vtipContainer;
                t.on("blur", function(t) {
                    t.preventDefault();
                    var e = $(this).val();
                    i.validatePhone(e)
                }),
                    n.on("blur", function(t) {
                        t.preventDefault();
                        var e = $(this).val();
                        i.validateYzm(e)
                    }),
                    a.on("click", function(t) {
                        t.preventDefault(),
                            i.initYzmTimer(),
                            i.getMsgYzm()
                    }),
                    o.on("click", ".vioceYzm", function(t) {
                        t.preventDefault(),
                            e.getVoiceNode = e.vtipContainer.children().clone(),
                            i.getVoiceYzm()
                    })
            },
            addValidate: function(t, e) {},
            delValidate: function(t) {},
            ajaxValidate: function(t, e, i, n) {
                if (t) {
                    i = i || {},
                        !1;
                    var a = "json"
                        , o = window.location.host;
                    (-1 == t.indexOf("post.58.com") && -1 == t.indexOf("p.m.58.com") || -1 !== o.indexOf("dict.58.com")) && (a = "jsonp"),
                        $.ajax({
                            url: t,
                            type: "get",
                            data: i,
                            cache: !1,
                            dataType: a,
                            async: !1,
                            success: function(t) {
                                e && e(t)
                            }
                        })
                }
            },
            pollClickLog: function(t) {
                i && clearTimeout(timer);
                var e = arguments.callee;
                if ("function" == typeof clickLog)
                    clickLog("from=" + t);
                else
                    var i = setTimeout(function() {
                        e()
                    }, 500)
            },
            validateState: function() {
                var e = this
                    , t = "";
                if (____json4fe && ____json4fe.catentry && 2 <= ____json4fe.catentry.length) {
                    var i = ____json4fe.catentry[1];
                    8 == i.dispid && "zufang" == i.listname ? t = "zhengzu-pc" : 10 == i.dispid && "hezu" == i.listname ? t = "hezu-pc" : 9 == i.dispid && "duanzu" == i.listname ? t = "duanzu-pc" : 12 == i.dispid && "ershoufang" == i.listname ? t = "ershoufang-pc" : 14 == i.dispid && "shangpu" == i.listname ? t = "shangpu-pc" : 13 == i.dispid && "zhaozu" == i.listname ? t = "xiezilou-pc" : 15 == i.dispid && "fangchan" == i.listname ? t = "changfang-pc" : 11 == i.dispid && "qiuzu" == i.listname && (t = "qiuzu-pc")
                }
                function n() {
                    CL.invoke("popuplogin", {
                        source: t,
                        path: window.location.href,
                        isShowClsBtn: !1,
                        showwin: "scanCode"
                    })
                }
                this.ajaxValidate(e.config.validateStateUrl, function(t) {
                    window.beforelogindata = t,
                        0 < $("#passportLayer").length ? 0 == t.isLogin && 0 == t.isBind ? (e.state = !0,
                            e.autofillphone()) : (e.pollClickLog("iframe_login_show1"),
                            "undefined" != typeof CL ? n() : setTimeout(function() {
                                n()
                            }, 1e3)) : 0 == t.isLogin ? 0 == t.isBind ? (e.state = !0,
                            e.autofillphone()) : (e.pollClickLog("iframe_bind_show1"),
                            "undefined" != typeof CL ? n() : setTimeout(function() {
                                n()
                            }, 1e3)) : (e.pollClickLog("iframe_login_show1"),
                            "undefined" != typeof CL ? n() : setTimeout(function() {
                                n()
                            }, 1e3))
                }, {}, !1)
            },
            autofillphone: function() {
                var e = this;
                extMap && "undefined" != typeof extMap.isShowZjwr && extMap.isShowZjwr && s.records.get("gobguanximihao") && s.records.get("gobguanximihao").setDefaultValue(),
                "undefined" != typeof isadd && 0 != isadd && this.ajaxValidate(e.config.autofillphoneUrl, function(t) {
                    0 == t.errorCode && (e.state = !0,
                        window.infoDetail = {},
                        window.infoDetail.Phone = t.data.phone,
                    s.records.get("Phone") && s.records.get("Phone").setValue(t.data.phone),
                        s.records.get("yzm").canContinue = !0);
                    -1 == t.errorCode || t.errorCode
                }, null, !1)
            },
            initPostForm: function() {
                s.pagController.ingInitForm()
            },
            validatePhone: function(t) {
                var e = this;
                "undefined" == typeof isadd && (isadd = !0);
                var i = s.records.get("yzm")
                    , n = s.records.get("Phone");
                if (0 != n.rows.getValidateStatus()) {
                    var a = n.rows.containerElem.find(".tip");
                    r.showLoading(a, "正在验证手机号码", "loading", 0),
                        e.ajaxValidate(e.config.validatePhoneUrl + "?client=" + e.config.client_type, function(t) {
                            -2 == t.errorCode ? (e.handleNeedYzm(t),
                                r.showTip(a, "", "success", 258)) : 0 == t.errorCode ? (i.rows.containerElem.hide(),
                                r.showTip(a, "", "success", 258)) : -1 == t.errorCode && (i.rows.containerElem.hide(),
                                r.showTip(a, "使用该联系电话的58账户过多，请填写其他电话", "error", 0))
                        }, {
                            phone: t,
                            dispcateid: ____json4fe.catentry[1].dispid,
                            dispcityid: ____json4fe.locallist.dispid,
                            isadd: isadd
                        })
                }
            },
            handleNeedYzm: function(t) {
                var e = s.records.get("yzm");
                e.rows.containerElem.show(),
                "undefined" == typeof e.captchaConfigs && (e.captchaConfigs = {}),
                    e.captchaConfigs.msg_encryptedKey = t.data ? t.data.msg_encryptedKey : t.bizExt.msg_encryptedKey,
                    e.captchaConfigs.voice_encryptedKey = t.data ? t.data.voice_encryptedKey : t.bizExt.voice_encryptedKey,
                    e.captchaConfigs.post_captcha_biz = "phone_verify"
            },
            validateYzm: function() {
                var e = s.records.get("yzm");
                if (e.canContinue = !1,
                    e.captchaConfigs && e.captchaConfigs.type) {
                    var t = e.getValue();
                    if (/^\d+$/g.test(t)) {
                        var i = s.records.get("Phone").getValue()
                            , n = "";
                        n += "?captcha_input=" + t,
                            n += "&captcha_type=" + e.captchaConfigs.type,
                            n += "&tel_number=" + i,
                            n += "&responseid=" + this.responseid,
                            n += "&str=" + e.captchaConfigs.voice_encryptedKey,
                            n += "&captcha_url=" + window.location.href;
                        var a = e.rows.containerElem.find(".tip");
                        r.showLoading(a, "正在校验验证码", "loading", 0);
                        var o = {};
                        return $.ajax({
                            url: this.config.validateUrl + n + "&callback=?",
                            async: !1,
                            cache: !1,
                            dataType: "jsonp",
                            success: function(t) {
                                t && "0" == t.code && 1 == t.data.result ? (e.canContinue = !0,
                                    r.showTip(a, "", "success", 610),
                                    o = {
                                        bValid: !0,
                                        msg: ""
                                    }) : (e.canContinue = !1,
                                    r.showTip(a, "验证码输入错误", "error", 0),
                                s.bFocus || (e.scrollTo(),
                                    s.bFocus = !0))
                            }
                        }),
                            o
                    }
                }
            },
            getVoiceYzm: function() {
                var e = this
                    , t = ""
                    , i = s.records.get("yzm");
                t += "&tel_number=" + s.records.get("Phone").getValue(),
                    t += "&str=" + i.captchaConfigs.voice_encryptedKey,
                    t += "&captcha_url=" + window.location.href;
                var n = i.rows.containerElem.find(".tip");
                $.ajax({
                    url: e.config.getUrl + t + "&callback=?",
                    async: !1,
                    cache: !1,
                    dataType: "jsonp",
                    success: function(t) {
                        t && "0" == t.code ? (i.voice_captcha = t.data.captcha,
                            i.captchaConfigs.type = t.data.type,
                            e.responseid = t.data.id,
                            $.ajax({
                                async: !1,
                                cache: !1,
                                dataType: "jsonp",
                                url: e.config.getVoiceUrl + "?str=" + i.captchaConfigs.voice_encryptedKey + "&responseid=" + e.responseid + "&callback=?",
                                success: function() {}
                            }),
                            e.disableVoiceYzm()) : r.showTip(n, "获取语音验证码出错", "error", 0)
                    }
                })
            },
            getMsgYzm: function() {
                var e = this
                    , t = ""
                    , i = s.records.get("yzm");
                t += "&tel_number=" + s.records.get("Phone").getValue(),
                    t += "&str=" + i.captchaConfigs.msg_encryptedKey,
                    i.canContinue = !1;
                var n = i.rows.containerElem.find(".tip");
                $.ajax({
                    url: e.config.getUrl + t + "&callback=?",
                    dataType: "jsonp",
                    async: !1,
                    cache: !1,
                    success: function(t) {
                        t && "0" == t.code ? (i.msg_captcha = t.data.captcha,
                            i.captchaConfigs.type = t.data.type,
                            e.responseid = t.data.id,
                            i.canContinue = !0) : (r.showTip(n, "获取语音验证码出错", "error", 0),
                            i.canContinue = !1)
                    }
                })
            },
            initYzmTimer: function() {
                var e = this
                    , i = s.records.get("yzm");
                i.yzmel.off("click").addClass("yzmcount").html("60s重发"),
                    i.vtipContainer.removeClass("fixyzmleft");
                var t = 59
                    , n = setInterval(function() {
                    0 == t ? (i.yzmel.on("click", function(t) {
                        e.initYzmTimer(),
                            e.getMsgYzm(),
                            i.vtipContainer.hide()
                    }),
                        i.yzmel.html("发送验证码").removeClass("yzmcount"),
                        i.vtipContainer.addClass("fixyzmleft"),
                        clearInterval(n),
                        n = null,
                        e.enableVoiceYzm()) : i.yzmel.html(t-- + "s重发"),
                    t <= 50 && i.vtipContainer.show()
                }, 1e3)
            },
            disableVoiceYzm: function() {
                var t = s.records.get("yzm")
                    , e = s.records.get("Phone").getValue();
                t.vtipContainer.html("我们将拨打您尾号为" + e.substring(e.length - 4) + "的电话以告知您验证码")
            },
            enableVoiceYzm: function() {
                var t = s.records.get("yzm");
                s.records.get("Phone");
                "undefined" != typeof t.getVoiceNode && t.vtipContainer.html("").append(t.getVoiceNode)
            }
        },
            e
    }),
    define("component/privacyNew/js/privacyNew", ["component/base/js/base", "util/Class", "Controller/Controller"], function(t, e, i) {
        var n = e.extend(t);
        return n.prototype.CLASS = {
            WRAP: "privacy_wrap privacy_new",
            TITLE: "privacy_title",
            CONTENT: "privacy_content",
            MULTI: "clearfix"
        },
            n.prototype.type = "privacy",
            n.prototype.titleOpt = {
                title: "已开启隐私保护"
            },
            n.prototype.createElem = function() {
                var t = this
                    , e = "58隐私保护介绍<br>1.设置后您的手机号码将被隐藏，别人只能通过虚拟的手机号与您沟通。<br>2.别人只能在58同城客户端获得虚拟的手机号。<br>3.虚拟的手机号不唯一，且可能是外地号。<br>4.暂不支持固话和小灵通。";
                "undefined" != typeof extMap && "undefined" != typeof extMap.yinsiShowType && 1 == extMap.yinsiShowType && (e = "58隐私保护介绍<br>1.设置后您的手机号码将被隐藏，别人只能通过虚拟的手机号与您沟通。<br>2.虚拟的手机号不唯一，且可能是外地号。<br>3.暂不支持固话和小灵通。"),
                    this.container = $("<div>").addClass(this.CLASS.WRAP);
                var i = "<div><a class='blueTips' href='javascript:void(0)'></a><span class='check_box privacynew_check'></span><span class='title'>" + t.titleOpt.title + "</span></div><div class='declaration'><span class='triangle'></span><p>" + e + "</p></div>";
                if (this.container.append(i),
                        this.hideFunc(),
                    "undefined" != typeof extMap && "undefined" != typeof extMap.isBiz) {
                    var n = extMap.isBiz;
                    0 == n ? setTimeout(function() {
                        t.showFunc()
                    }, 300) : 1 == n && setTimeout(function() {
                        t.hideFunc()
                    }, 300)
                }
            }
            ,
            n.prototype.bindDomEvent = function() {
                this.container.find(".blueTips").mouseover(function() {
                    $(".declaration").show()
                }).mouseout(function() {
                    $(".declaration").hide()
                })
            }
            ,
            n.prototype.setDefaultValue = function() {
                var t = this;
                if ("undefined" != typeof extMap && "undefined" != typeof extMap.isBiz) {
                    var e = extMap.isBiz;
                    0 == e ? setTimeout(function() {
                        t.showFunc()
                    }, 300) : 1 == e && setTimeout(function() {
                        t.hideFunc()
                    }, 300)
                }
            }
            ,
            n.prototype.getValue = function() {
                return this.container.find(".selected").length
            }
            ,
            n.prototype.setValue = function(t) {
                1 == t ? this.container.find(".check_box").addClass("selected") : this.container.find(".check_box").removeClass("selected")
            }
            ,
            n.prototype.showFunc = function() {
                this.activate(),
                    this.setValue(1)
            }
            ,
            n.prototype.hideFunc = function() {
                this.freeze(),
                    this.setValue(0)
            }
            ,
            n
    }),
    define("component/agent/js/agent", ["component/base/js/base", "util/Class", "Controller/Controller"], function(t, e, i) {
        var n = e.extend(t);
        return n.prototype.CLASS = {
            WRAP: "privacy_wrap agent_wrap",
            TITLE: "privacy_title",
            CONTENT: "privacy_content",
            MULTI: "clearfix"
        },
            n.prototype.type = "agent",
            n.prototype.titleOpt = {
                title: "开启中介勿扰，将有效减少中介来电"
            },
            n.prototype.createElem = function() {
                var t = this;
                this.container = $("<div>").addClass(this.CLASS.WRAP);
                var e = "<div><span class='check_box agent_check'></span><span class='title'>" + t.titleOpt.title + "</span></div>";
                if (this.container.append(e),
                    "undefined" == typeof infoDetail && "undefined" != typeof extMap && "undefined" != typeof extMap.isBiz) {
                    var i = extMap.isBiz;
                    0 == i ? setTimeout(function() {
                        t.showFunc()
                    }, 300) : 1 == i && setTimeout(function() {
                        t.hideFunc()
                    }, 300)
                }
            }
            ,
            n.prototype.bindDomEvent = function() {
                this.container.on("click", ".check_box", function() {
                    $(this).toggleClass("selected")
                })
            }
            ,
            n.prototype.getValue = function() {
                return this.container.find(".selected").length
            }
            ,
            n.prototype.setValue = function(t) {
                1 == t ? this.container.find(".check_box").addClass("selected") : this.container.find(".check_box").removeClass("selected")
            }
            ,
            n.prototype.showFunc = function() {
                this.activate(),
                    this.setValue(1)
            }
            ,
            n.prototype.hideFunc = function() {
                this.freeze(),
                    this.setValue(0)
            }
            ,
            n
    }),
    define("component/mountIframe/js/mountIframe", [], function() {
        function i(t, e) {
            this.init(t, e)
        }
        return document.domain = "58.com",
            i.resize = function() {
                var t, e;
                try {
                    t = $($("#jz_refresh_post_key")[0].contentDocument.body).height() + "px",
                        e = $($("#jz_refresh_post_key")[0].contentDocument.body).width() + "px"
                } catch (i) {
                    t = $($("#jz_refresh_post_key")[0].contentWindow.document.body).height() + "px",
                        e = $($("#jz_refresh_post_key")[0].contentWindow.document.body).width() + "px"
                }
                $("#jz_refresh_post_key")[0].style.height = t,
                    $("#jz_refresh_post_key")[0].style.width = e
            }
            ,
            i.prototype.init = function(t, e) {
                this.opts = $.extend(!0, {}, this.constructor.opts, t),
                    this.dataName = t.dataName || t.name,
                    this.urlParameter = {
                        dispLocalId: ____json4fe.locallist.dispid,
                        dispCateId: ____json4fe.catentry[0].dispid,
                        dispCate2Id: ____json4fe.catentry[1] && ____json4fe.catentry[1].dispid,
                        userType: extMap.userType
                    }
            }
            ,
            i.prototype.loadIframe = function(t) {
                var e = window.location.protocol + "//refresh.vip.58.com/common/novipprice?dispLocalId=" + this.urlParameter.dispLocalId + "&dispCateId=" + this.urlParameter.dispCateId + "&dispCate2Id=" + this.urlParameter.dispCate2Id + "&userType=" + this.urlParameter.userType;
                t.append('<iframe id="jz_refresh_post_key" name="jz_refresh_post_key" src="' + e + '" height="0px" width="850px" frameborder="0" scrolling = "no"></iframe>'),
                    $("#jz_refresh_post_key").on("load", function(t) {
                        i.resize()
                    })
            }
            ,
            i.prototype.getValue = function() {
                var t = "0";
                if (window.frames.jz_refresh_post_key !== undefined)
                    try {
                        "function" == typeof window.frames.jz_refresh_post_key.getDay && (t = window.frames.jz_refresh_post_key.getDay())
                    } catch (e) {}
                return t
            }
            ,
            i.prototype.checkLogin = function() {
                return !("undefined" == typeof userid || !userid || "0" === userid)
            }
            ,
            i.prototype.render = function(t) {
                this.checkLogin() ? this.loadIframe(t) : this.rows.hide()
            }
            ,
            i
    }),
    define("component/authenticationPop/js/authenticationPop", [], function() {
        var t = function() {};
        return t.prototype = {
            constructor: t,
            init: function(t, e) {
                var o = this
                    , i = t ? "first" : "second"
                    , s = {
                    first: "second",
                    second: "third"
                }
                    , r = ""
                    , c = ""
                    , l = !!extMap.needVerify && (o.localStorageGetItem("sfrenzheng") && null != o.localStorageGetItem("sfrenzheng") && "all_verify" === extMap.needVerify.bizCode);
                this.data = {
                    cateid: ____json4fe.catentry[1].dispid || "8",
                    cityid: ____json4fe.locallist.dispid || "1",
                    isadd: isadd,
                    client: "pc",
                    usertype: ""
                },
                1 == this.data.cityid && (this.pageTempl.first.content[3].label = "根据北京住建委要求，禁止独立经纪人发布信息",
                    this.pageTempl.first.content[3]["class"] = "gray"),
                    this.userTypeDefault = e,
                    this.cityid = this.data.cityid,
                l && (!0,
                    i = "third"),
                    o.renderView(i, s, l),
                    $("body").on("click", ".authent-radio-box a", function() {
                        if (!$(this).hasClass("radio-item-third") && !$(this).hasClass("gray")) {
                            $(this).addClass("radio-item-selected").siblings().removeClass("radio-item-selected");
                            var t = $(this).data("id") || ""
                                , e = $(this).data("src") || "";
                            c = $(this).data("jumptype") || "",
                                683037 === (t = parseInt(t)) || 683038 === t || 4 === t ? $(".authent-tips").addClass("show") : $(".authent-tips").removeClass("show"),
                                o.data.usertype = t,
                                r = e,
                                $(".authent-button").removeClass("authent-button-next"),
                                $(".authent-button").addClass("authent-button-next")
                        }
                    }),
                    $("body").on("click", ".icons-close", function() {
                        window.location.href = window.location.protocol + "//post.58.com/" + o.data.cityid + "/?PGTID=0d100000-0000-1a08-7108-4212547c2cf3&ClickID=1"
                    }),
                    $("body").on("click", ".authent-back-button", function() {
                        var t = $(this).data("id");
                        if (t) {
                            o.renderView(t, s),
                                o.localStorageRomoveItem("sfrenzheng");
                            var e = $(this).attr("tongji_tag");
                            clickLog("from=" + e)
                        }
                    }),
                    $("body").on("click", ".authent-button", function() {
                        var t = $(this).data("id")
                            , e = $(this).hasClass("authent-button-next");
                        if ("undefined" != t && "" != t) {
                            if (e)
                                switch (t) {
                                    case "second":
                                        "" != o.data.usertype;
                                        var i = window.location.protocol + "//housepostbaseapi.58.com/usertype/add";
                                        $.ajax({
                                            url: i,
                                            type: "GET",
                                            data: o.data,
                                            dataType: "jsonp",
                                            success: function(t) {
                                                location.reload()
                                            },
                                            error: function(t) {
                                                console.log("error: " + t)
                                            }
                                        });
                                        break;
                                    case "third":
                                        var n = c ? "_" + c : "";
                                        if ("" != r && "undefined" == r) {
                                            o.renderView(t, s),
                                                o.localStorageRomoveItem("sfrenzheng");
                                            var a = $(this).attr("tongji_tag");
                                            clickLog("from=" + a)
                                        } else
                                            window.open(r, n),
                                                setTimeout(function() {
                                                    o.renderView("four", s, l)
                                                }, 600),
                                                $("body").on("click", ".double-button", function() {
                                                    location.reload()
                                                })
                                }
                        } else
                            location.reload(),
                                o.localStorageSetItem("sfrenzheng", "renzheng2x"),
                                setTimeout(function() {
                                    $(".authentication-toast").remove()
                                }, 3e3)
                    })
            },
            localStorageSetItem: function(t, e) {
                if (window.localStorage && window.localStorage.setItem)
                    return window.localStorage.setItem(t, e)
            },
            localStorageGetItem: function(t) {
                if (window.localStorage && window.localStorage.getItem)
                    return window.localStorage.getItem(t)
            },
            localStorageRomoveItem: function(t) {
                if (window.localStorage && window.localStorage.removeItem)
                    return window.localStorage.removeItem(t)
            },
            renderView: function(t, e, i) {
                var n = ""
                    , a = []
                    , o = !1;
                n += this.baseTempl.before,
                    n += this.baseTempl.content,
                    n += this.baseTempl.after,
                    $(".authentication-layer").remove(),
                    n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace("{{title}}", this.pageTempl[t].title || "")).replace("{{label}}", this.pageTempl[t].label || "")).replace("{{addWrapClass}}", this.pageTempl[t].addWrapClass || "")).replace("{{numIndex}}", t)).replace("{{closeIndex}}", t)).replace("{{dataId}}", e[t] || "")).replace("{{buttonTxt}}", this.pageTempl[t].buttonTxt || "下一步")).replace("{{buttonBack}}", this.pageTempl[t].buttonBack || "")).replace("{{className}}", this.pageTempl[t].className || "")).replace("{{toast}}", this.pageTempl[t].toast || "")).replace("{{checkTips}}", this.pageTempl[t].checkTips || "");
                for (var s = this.pageTempl[t].content || [], r = 0; r < s.length; r++) {
                    var c = this.pageTempl[t].contentTempl.join("")
                        , l = "";
                    s[r].pid === this.userTypeDefault && (o = !0,
                        s[r].selected = "radio-item-selected",
                        this.data.usertype = s[r].pid),
                        c = (c = (c = (c = (c = (c = (c = (c = (c = (c = c.replace("{{title}}", s[r].title || "")).replace("{{tongji}}", s[r].tongji || "")).replace("{{label}}", s[r].label || "")).replace("{{selected}}", s[r].selected || "")).replace("{{class}}", s[r]["class"] || "")).replace("{{icon}}", s[r].icon || "")).replace("{{num}}", s[r].num || "")).replace("{{src}}", s[r].src || "undefined")).replace("{{jumpType}}", s[r].jumpType || "")).replace("{{cityid}}", this.cityid),
                    this.pageTempl[t].isUserType && (l = s[r].pid || ""),
                        c = c.replace("{{val}}", l),
                        a.push(c)
                }
                n = 0 == s.length ? n.replace("{{content}}", this.pageTempl[t].contentTempl.join("")) : n.replace("{{content}}", a.join("")),
                    $("body").html(n),
                o && ($(".authent-button").removeClass("authent-button-next"),
                    $(".authent-button").addClass("authent-button-next")),
                "third" == t && $("#qrCode").qrcode({
                    render: "canvas",
                    width: 146,
                    height: 146,
                    background: "#ffffff",
                    foreground: "#000",
                    text: window.location.protocol + "//pwebapp.58.com/fang/appdown.html?pid=1334&pcuid=" + (userid || "")
                }),
                    setTimeout(function() {
                        $(".authentication-toast").remove()
                    }, 3e3)
            },
            baseTempl: {
                before: '<div class="authentication-layer"><div class="authent-wrap {{addWrapClass}}">{{toast}}<i tongji_tag="pc_post_sfrenzheng_close_{{closeIndex}}" class="authent-icons icons-close"></i>{{buttonBack}}<div class="authent-box">',
                content: '<h2 class="authent-title">{{title}}</h2><span class="authent-desc">{{label}}</span><div class="authent-radio-box">{{content}}',
                after: '</div></div><div class="authent-tips">{{checkTips}}</div><div tongji_tag="pc_post_sfrenzheng_next_{{numIndex}}" class="{{className}}" data-id="{{dataId}}">{{buttonTxt}}</div></div>'
            },
            pageTempl: {
                first: {
                    title: "请选择您的身份",
                    label: "我们会对每种身份设定合理的发帖权限",
                    buttonTxt: "下一步",
                    className: "authent-button",
                    isUserType: !0,
                    checkTips: "变更身份后，新建、修改、恢复帖子需提交房源认证，方可展示",
                    contentTempl: ['<a class="radio-item radio-item-first {{selected}} {{class}}" data-id="{{val}}" tongji_tag="{{tongji}}">', '<h2 class="r-item radio-item-title">{{title}}</h2>', '<span class="r-item radio-item-desc">{{label}}</span>', '<i class="authent-icons icon-circle icon-circle-first"></i>', "</a>"],
                    content: [{
                        pid: "683037",
                        title: "个人房东",
                        label: "房屋所有者，具备认证房本的资质",
                        tongji: "pc_post_sfrenzheng_gerenfangdong",
                        "class": ""
                    }, {
                        pid: "683038",
                        title: "个人转租",
                        label: "转让自己承租的房子",
                        tongji: "pc_post_sfrenzheng_gerenzhuanzu",
                        "class": ""
                    }, {
                        pid: "4",
                        title: "职业房东",
                        label: "管理多房源的个人",
                        tongji: "pc_post_sfrenzheng_zhiyefangdong",
                        "class": ""
                    }, {
                        pid: "683039",
                        title: "经纪人",
                        label: "房产中介，拥有更专业的展示空间",
                        tongji: "pc_post_sfrenzheng_jingjiren",
                        "class": ""
                    }]
                },
                second: {
                    title: "请完成实名认证",
                    label: '根据国家相关规定，您需要通过实名认证才能发布房源。58将严格保护您的隐私信息。<br><i class="authent-icons icon-renzhengtips"></i>租客更加信赖，出租更快<i class="authent-icons icon-renzhengtips ml10"></i>排序更加优先，更多曝光<i class="authent-icons icon-renzhengtips ml10"></i>维护租房环境，人人有责',
                    buttonTxt: "下一步",
                    addWrapClass: "authent-wrap-second",
                    className: "authent-button",
                    contentTempl: ['<a class="radio-item {{selected}} radio-item-second" data-src="{{src}}" tongji_tag="{{tongji}}" data-jumptype="{{jumpType}}">', '<i class="authent-icons icon-second {{icon}}"></i>', '<h2 class="r-item-title radio-item-title">{{title}}</h2>', '<span class="r-item-info radio-item-desc">{{label}}</span>', '<i class="authent-icons icon-circle icon-selected-second"></i>', "</a>"],
                    content: [{
                        title: '微信认证<em class="radio-item-label-img authent-icons"></em>',
                        label: "一分钱快捷认证",
                        src: "https://authcenter.58.com/authcenter/wxpay?appId=QtBjPFpw",
                        icon: "icon-weixin",
                        jumpType: "blank",
                        tongji: "pc_post_sfrenzheng_weixin"
                    }, {
                        title: "芝麻实名认证",
                        label: "支付宝授权",
                        src: window.location.protocol + "//thirdcredit.58.com/thirdcredit/zhimaRealNameAuth/toZhiMaRealNameAuthIndex?realNameAuthClientId=1&dynamicCallBackUrl=post.58.com/fang/{{cityid}}/8/s5",
                        icon: "icon-zhima",
                        jumpType: "self",
                        tongji: "pc_post_sfrenzheng_zhima"
                    }, {
                        title: "银行卡认证",
                        label: "输入相关信息完成认证",
                        src: window.location.protocol + "//bankcardauth.58.com/bankcardauth/bank/indexPage?appId=xfsOuUwy",
                        icon: "icon-bank",
                        jumpType: "blank",
                        tongji: "pc_post_sfrenzheng_yinhang"
                    }]
                },
                third: {
                    buttonTxt: "完成认证",
                    addWrapClass: "authent-wrap-third",
                    className: "authent-button authent-button-next",
                    toast: '<div class="authentication-toast">认证失败! 请先在58App上完成认证</div>',
                    contentTempl: ['<div class="radio-item-third">', '<h2 class="radio-item-title">扫描二维码去认证</h2>', '<i class="authent-icons icon-biankuang"></i>', '<i class="authent-icons icon-logo_app" id="qrCode"></i>', '<p class="radio-item-desc"><i class="authent-icons icon-jingshi"></i>若未安装58App，请先扫码安装，完成后再扫码认证。</p>', "</div>"],
                    buttonBack: '<div data-id="second" class="authent-back-button" tongji_tag="pc_post_sfrenzheng_back_third"><i class="authent-icons icon-back"></i>上一步</div>'
                },
                four: {
                    buttonTxt: '<div class="double-button left-button">未完成，重新认证</div><div class="double-button right-button">已完成</div>',
                    addWrapClass: "authent-wrap-four",
                    className: "authent-button-wrap",
                    contentTempl: ["您是否已完成认证？"]
                }
            }
        },
            t
    }),
    define("component/bdMap/js/bdMap", [], function() {
        function t() {}
        return t.prototype.createMap = function(t, e) {
            var i = this;
            i.valueObj = t || i.valueObj;
            var n = i.opts.currentCity || i.opts.defaultCity
                , a = new BMap.Map(i.opts.id,{
                enableMapClick: !1
            });
            (i.opts.map = a).setMinZoom(i.opts.minZoom),
                a.centerAndZoom(n, 12);
            var o = new BMap.NavigationControl;
            a.addControl(o),
            e || setTimeout(function() {
                i.setValue(i.valueObj)
            }, 800)
        }
            ,
            t.prototype.addEnableScroll = function() {
                this.opts.map.enableScrollWheelZoom()
            }
            ,
            t.prototype.setMapCenter = function(t, e) {
                this.opts.map.setZoom(e),
                    this.opts.map.panTo(t, e)
            }
            ,
            t.prototype.getMapPoint = function(t, e) {
                return new BMap.Point(t,e)
            }
            ,
            t.prototype.getMapCenter = function() {
                return this.opts.map.getCenter()
            }
            ,
            t.prototype.getMapZoom = function() {
                return this.opts.map.getZoom()
            }
            ,
            t.prototype.clearMap = function() {
                this.opts.map.clearOverlays()
            }
            ,
            t.prototype.addMapMarker = function(t) {
                this.opts.map.addOverlay(t)
            }
            ,
            t.prototype.getGeoLocation = function(i, n) {
                var t = this.getMapPoint(i.lng, i.lat);
                (new BMap.Geocoder).getLocation(t, function(t) {
                    var e = {
                        longitude: i.lng,
                        latitude: i.lat,
                        rs: t || ""
                    };
                    n(e)
                })
            }
            ,
            t.prototype.getPoiList = function(t, e, i, n) {
                if (t) {
                    var a, o = this.opts, s = {
                        pageCapacity: o.pagePoiListNum,
                        onSearchComplete: function(t) {
                            o.isFirstSearchPOI && (o.isFirstSearchPOI = !1,
                                a.getStatus() == BMAP_STATUS_SUCCESS ? i.call(e, {
                                    num: t.getCurrentNumPois(),
                                    list: t
                                }) : n.call(e))
                        }
                    };
                    setTimeout(function() {
                        (a = new BMap.LocalSearch(o.map,s)).search(t)
                    }, 50)
                }
            }
            ,
            t.prototype.addMarkers = function(t) {
                if (t && !(t.length <= 0)) {
                    var e = t.length
                        , i = this.opts;
                    this.clearMap(),
                        this.setMapCenter(this.getMapPoint(t[0].lng, t[0].lat), 14);
                    for (var n = 0; n < e; n++) {
                        var a = this.getMapPoint(t[n].lng, t[n].lat)
                            , o = new BMap.Icon(i.markerIconUrl,new BMap.Size(i.markerIconWidth,i.markerIconHeight))
                            , s = new BMap.Marker(a,{
                            icon: o
                        });
                        this.addMapMarker(s)
                    }
                }
            }
            ,
            t.prototype.addMarker = function(t, e) {
                if (t || e) {
                    this.clearMap();
                    var i = this.getMapPoint(t, e)
                        , n = new BMap.Icon("//img.58cdn.com.cn/ui7/post/pc/imgs/location_pressed.png",new BMap.Size(53,60))
                        , a = new BMap.Marker(i,{
                        icon: n
                    });
                    this.addMapMarker(a)
                }
            }
            ,
            t
    }),
    define("component/baiduMapXiaoqu/js/baiduMapXiaoqu", ["component/bdMap/js/bdMap", "Controller/Controller", "util/postClickLog"], function(t, n, a) {
        function e() {
            this.opts = {
                type: "map",
                map: "",
                id: "",
                minZoom: 12,
                listZoom: 13,
                defaultCity: "北京",
                currentCity: "",
                pagePoiListNum: 20,
                markerIconUrl: window.location.protocol + "//img.58cdn.com.cn/ui7/post/pc/imgs/location_pressed.png",
                markerIconWidth: 53,
                markerIconHeight: 60,
                divContainer: "",
                divKeyword: "",
                divLeftList: "",
                divAddressCont: "",
                divAddress: "",
                isFirstSearchPOI: !0,
                isLoadMapEvent: !1
            }
        }
        return ((e.prototype = t.prototype).constructor = e).prototype.init = function(t) {
            a.send("post_zhengzu_maptianjia"),
                this.opts.keyword = t,
            ____json4fe && ____json4fe.locallist && ____json4fe.locallist.name && (this.opts.currentCity = ____json4fe.locallist.name),
                this.opts.isLoadMapEvent = !1,
                this.opts.isFirstSearchPOI = !0,
                a.send("post_zhengzu_mapshow"),
                this.opts.divContainer ? this.actived() : this.firstLoad()
        }
            ,
            e.prototype.firstLoad = function() {
                var e = this
                    , i = e.opts;
                !function() {
                    var t = '<div class="map-container" id="mapContainer">       <div class="map-mark"></div>       <div class="map-main">           <div class="map-close"></div>           <div class="map-left">               <div class="map-title"><h4 class="m-title m-keyword">' + i.keyword + '</h4><p class="m-info">为您找到以下“<i class=" m-keyword">' + i.keyword + '</i>” 相关结果</p></div>               <div class="map-list">                   <ul class="map-item-list" id="mapItem"></ul>               </div>           </div>           <div class="map-right">               <div class="mapall" id="mapAll"></div>               <div class="map-marker map-hide" id="mapMarker"></div>               <div class="map-show-tips map-hide">拖动地图可以调整小区所在位置</div>           </div>           <div class="label-content map-hide">               <span class="label-title">房子所在位置</span>               <p class="label-adr" id="label-adr"></p>               <button class="label-btn">确定</button>               <div class="label-arrow"></div>           </div>       </div>      </div>';
                    $("body").append(t),
                        i.divContainer = $("#mapContainer"),
                        i.divKeyword = $(".m-keyword"),
                        i.divLeftList = $("#mapItem"),
                        i.divAddressCont = $(".label-content"),
                        i.divAddress = $("#label-adr"),
                        i.id = "mapAll",
                    i.map || (e.createMap(i.keyword, !0),
                        e.addEnableScroll(),
                        e.getList(i.keyword));
                    setTimeout(function() {
                        e.bindDomEvent(),
                            e.bindMapEvent()
                    }, 2e3)
                }()
            }
            ,
            e.prototype.actived = function() {
                var t = this.opts
                    , e = t.currentCity || t.defaultCity;
                t.divContainer.show(),
                    t.divKeyword.html(this.opts.keyword),
                    t.divLeftList.html(""),
                    this.clearMap(),
                    this.setMapCenter(e, 12),
                    this.hideIcon(),
                    this.getList(t.keyword)
            }
            ,
            e.prototype.bindDomEvent = function() {
                var e = this
                    , i = this.opts;
                $(i.divContainer).on("click", ".map-close", function() {
                    e.opts.divContainer.hide(),
                        a.send("post_zhengzu_mapexit")
                }),
                    $(i.divContainer).on("click", ".label-btn", function() {
                        var t = {
                            s: $("#label-adr").attr("address") || "",
                            k: $("#label-adr").attr("name") || "",
                            lat: $("#label-adr").attr("lat") || "",
                            lon: $("#label-adr").attr("lon") || "",
                            type: $("#label-adr").attr("type") || "",
                            input: $("#label-adr").attr("name") || ""
                        };
                        a.send("post_zhengzu_maptijiao"),
                            n.records.get("xiaoqu").setValue(t, "", "", "fromMap"),
                            i.divContainer.hide()
                    }),
                    $(i.divLeftList).on("click", "li", function() {
                        $(this).addClass("map-current").find(".item-icon").show().end().siblings("li").removeClass("map-current").find(".item-icon").hide();
                        var t = {
                            xiaoqu: $(this).attr("xiaoqu"),
                            dizhi: $(this).attr("dizhi"),
                            longitude: $(this).attr("longitude"),
                            latitude: $(this).attr("latitude")
                        };
                        e.clickFunc(t, 17, "click"),
                            e.setTopTipsShow()
                    }),
                    $(i.divLeftList).on("mouseover", "li", function() {
                        $(this).addClass("map-hover").siblings("li").removeClass("map-hover")
                    }),
                    $(i.divLeftList).on("mouseout", "li", function() {
                        $(this).removeClass("map-hover")
                    })
            }
            ,
            e.prototype.bindMapEvent = function() {
                var t = this
                    , e = (this.opts,
                    this.opts.map);
                e.addEventListener("dragstart", function() {
                    t.eventStartCallback()
                }),
                    e.addEventListener("zoomstart", function() {
                        t.eventStartCallback()
                    }),
                    e.addEventListener("dragend", function() {
                        t.eventEndCallback(t.getMapCenter())
                    }),
                    e.addEventListener("zoomend", function() {
                        t.eventEndCallback(t.getMapCenter())
                    })
            }
            ,
            e.prototype.eventStartCallback = function() {
                var t = this.opts;
                t.isLoadMapEvent && (this.clearMap(),
                    this.showIcon(),
                    $(t.divAddressCont).addClass("map-hide").find(t.divAddress).html(""),
                    $(t.divLeftList).find("li").removeClass("map-current").find(".item-icon").hide())
            }
            ,
            e.prototype.eventEndCallback = function(t) {
                var e = this.opts;
                e.isLoadMapEvent && (e.map.clearOverlays(),
                    this.getGeoLocationCab(t))
            }
            ,
            e.prototype.getGeoLocationCab = function(t) {
                var e = this;
                this.opts.isLoadMapEvent && this.getGeoLocation(t, function(t) {
                    t.dizhi = t.rs.address || "",
                        e.addCurrentMarker(t)
                })
            }
            ,
            e.prototype.getList = function(t) {
                this.getPoiList(t, this, this.drawList, this.noResult)
            }
            ,
            e.prototype.noResult = function() {
                var e = this
                    , t = e.opts
                    , i = t.currentCity || t.defaultCity;
                t.divLeftList.html('<li class="item"><span class="item-name">未检测到匹配地点</span><span class="item-adr">试试搜索其他地点或拖动地图</span></li>'),
                    this.setMapCenter(i, 13),
                    setTimeout(function() {
                        var t = e.getMapCenter();
                        e.addMarker(t.lng, t.lat)
                    }, 100),
                    setTimeout(function() {
                        t.isLoadMapEvent = !0
                    }, 2e3)
            }
            ,
            e.prototype.drawList = function(t) {
                if (t) {
                    var e = this.opts
                        , i = ""
                        , n = []
                        , a = t.list;
                    e.isLoadMapEvent = !1;
                    for (var o = 0; o < t.num; o++) {
                        var s = a.getPoi(o);
                        n[o] = s.point,
                            i += '<li class="item" xiaoqu="' + s.title + '" dizhi="' + s.address + '" longitude="' + s.point.lng + '" latitude="' + s.point.lat + '"><span class="item-name">' + s.title + '</span><span class="item-adr">' + s.address + '</span><span class="item-icon"></span></li>'
                    }
                    e.divLeftList.html(i),
                        this.addMarkers(n)
                }
            }
            ,
            e.prototype.addCurrentMarker = function(t, e, i) {
                var n = this.opts;
                this.clearMap();
                var a = this.getMapPoint(t.longitude, t.latitude);
                this.setMapCenter(a, e || ""),
                    n.divAddress.attr({
                        lon: t.longitude,
                        lat: t.latitude,
                        address: t.dizhi || "",
                        name: i ? t.xiaoqu : n.keyword,
                        type: "baiduAPI"
                    }),
                t.dizhi && (n.divAddress.html(t.dizhi),
                    this.showIcon(),
                    this.setAddressConStyle(t.dizhi)),
                    setTimeout(function() {
                        n.isLoadMapEvent = !0
                    }, 1500)
            }
            ,
            e.prototype.setTopTipsShow = function() {
                var t = this.opts;
                t.divContainer.find(".map-show-tips").removeClass("map-hide"),
                    setTimeout(function() {
                        t.divContainer.find(".map-show-tips").addClass("map-hide")
                    }, 5e3)
            }
            ,
            e.prototype.showIcon = function() {
                this.opts.divContainer.find("#mapMarker").removeClass("map-hide")
            }
            ,
            e.prototype.hideIcon = function() {
                this.opts.divContainer.find("#mapMarker").addClass("map-hide"),
                    this.opts.divAddressCont.addClass("map-hide")
            }
            ,
            e.prototype.clickFunc = function(t, e, i) {
                t && t.latitude && t.longitude && (this.opts.isLoadMapEvent = !1,
                    this.addCurrentMarker(t, e, i))
            }
            ,
            e.prototype.setAddressConStyle = function(t) {
                var e = this.opts;
                e.divAddressCont.removeClass("map-hide"),
                    e.divAddress.html(t),
                    setTimeout(function() {
                        var t = e.divAddressCont.height();
                        e.divAddressCont.css({
                            height: t + "px",
                            "margin-top": -(t / 2 + t) + "px"
                        })
                    }, 200)
            }
            ,
            e
    }),
    define("component/autoCompleteXiaoqu/js/autoCompleteXiaoqu", ["component/inputText/js/inputText", "util/Class", "Controller/Controller", "component/baiduMapXiaoqu/js/baiduMapXiaoqu", "util/postClickLog", "component/resetCommercial/js/getCommercial"], function(i, t, s, r, e, a) {
        var n = t.extend(i);
        return n.opts = {
            type: "text",
            name: "",
            view: {
                placeholder: "",
                afterText: "",
                beforeText: "",
                maxHeight: "",
                width: ""
            },
            returnTemp: null,
            attr: {
                autocomplete: "off",
                disableautocomplete: !0
            },
            suggestSetting: {
                commonShow: {
                    dataPath: "",
                    liKeys: [],
                    liTemp: "",
                    url: "",
                    setValFunc: function() {}
                },
                defShow: {
                    dataPath: "",
                    liKeys: [],
                    liTemp: "",
                    defUrl: "",
                    getValFunc: function() {}
                }
            },
            checkRuler: [],
            funcs: []
        },
            n.prototype.clickFunc = function(t) {
                var e = this.opts.suggestSetting.commonShow;
                e.setValFunc ? this.setValue(e.setValFunc(t)) : this.setValue(t.html())
            }
            ,
            n.prototype.bindDomEvent = function() {
                var e = this;
                if (this.listData = [],
                        this.showList = function() {
                            this.elem.position();
                            this.list.show(),
                                this.list.css({
                                    width: this.elem.width() + 16 + "px",
                                    top: this.elem.height() + parseInt(this.elem.css("paddingTop")) + parseInt(this.elem.css("paddingBottom")) + "px",
                                    left: parseInt(this.elem.css("paddingLeft")) + 10 + "px"
                                })
                        }
                        ,
                    0 < this.elem.length) {
                    var t = this.opts.view.maxHeight;
                    "" != t && (t = "max-height:" + t + "px;_height:" + t + "px;"),
                        this.list = $("<div class='tooltip' style=' margin:1px 0 0 -10px;" + t + "overflow-y:auto;overflow-x:hidden;border:1px solid #ccc;position:absolute;z-index:" + (9999 - this.opts.tabIndex) + ";display:none'><ul class='autoCompleteul' style='margin:0; padding:0; display:block; width: 100%; " + t + '; border:0;background:#fff\'></ul><iframe frameborder="0" width="100%" height="100%" src="about:blank" style="z-index: -1; position: absolute; top: 0px; left: 0px; border: 0px none;"></iframe></div>'),
                        this.elem.after(this.list),
                        e.elem.bind("focus", function() {
                            e.opts.view.tips && e.showTips(e.opts.view.tips),
                                e.setClassByStatus(i.SETTING.STATUS.FOCUS),
                                e.elem.triggerHandler("focusin")
                        }),
                        this.elem.bind("keyup", e, function(t) {
                            var a = t.data
                                , o = a.elem.val();
                            if (o) {
                                var e = "";
                                if ("38" == t.keyCode) {
                                    if (a.list.is(":visible") && 0 < a.list.find("li").length) {
                                        var i = a.list.find("li");
                                        0 == (n = a.list.find("li.over")).length ? i.eq(i.length - 1).addClass("over") : (0 < n.prev().length ? n.prev().addClass("over") : i.eq(i.length - 1).addClass("over"),
                                            n.removeClass("over"))
                                    }
                                } else if ("40" == t.keyCode) {
                                    if (a.list.is(":visible") && 0 < a.list.find("li").length) {
                                        var n;
                                        i = a.list.find("li");
                                        0 == (n = a.list.find("li.over")).length ? i.eq(0).addClass("over") : (0 < n.next().length ? n.next().addClass("over") : i.eq(0).addClass("over"),
                                            n.removeClass("over"))
                                    }
                                } else
                                    "13" == t.keyCode || "37" == t.keyCode || "39" == t.keyCode || (a.setId(""),
                                        a.resetValues(),
                                    a.opts.suggestSetting.commonShow.additionalParaFunc && (e += a.opts.suggestSetting.commonShow.additionalParaFunc()),
                                        "" != o ? $.getJSON((a.opts.suggestSetting.commonShow.url + "&" + e).replace("^^", o), function(t) {
                                            var e = a.opts.suggestSetting.commonShow;
                                            e.dataPath && 0 < e.dataPath.length && (t = t[e.dataPath]);
                                            var i = "";
                                            if (t && 0 < t.length) {
                                                a.listData = t;
                                                for (var n = 0; n < t.length; n++)
                                                    e.liCreater && (i += e.liCreater(t[n]));
                                                a.list.find("ul").html(i),
                                                    a.showList()
                                            } else
                                                i = '<li class="xiaoqu-empty"><span class="s1">搜不到“' + o + '”</span><span class="s2">尝试搜索其它名称或添加地址</span><span class="btn-xiaoquEmpty">去添加</span></li>',
                                                    a.list.show().find("ul").html(i),
                                                    a.listData = [],
                                                    $(".btn-xiaoquEmpty").on("click", function() {
                                                        var t = s.records.get("map");
                                                        t || (t = new r,
                                                            s.records.set("map", t)),
                                                            a.list.hide(),
                                                            t.init(o)
                                                    })
                                        }) : a.list.hide())
                            } else
                                a.list.hide()
                        }).blur(function() {
                            setTimeout(function() {
                                e.rows.containerElem.css("zIndex", ""),
                                    e.block.containerElem.css("zIndex", ""),
                                    e.list.hide()
                            }, 200),
                            "" == e.values && e.elem.val(""),
                                e.doCheck()
                        }).bind("keydown", e, function(t) {
                            if ("13" == t.keyCode) {
                                var e = t.data;
                                if (0 < e.list.find("li.xiaoqu-empty").length)
                                    return;
                                var i = e.list.find("li.over");
                                return 0 == i.length ? 0 < e.list.find("ul li:eq(0)").length && e.clickFunc(e.list.find("ul li:eq(0)")) : e.clickFunc(i),
                                    e.list.hide(),
                                    !1
                            }
                        }).focus(function() {
                            e.rows.containerElem.css("zIndex", 1600),
                                e.block.containerElem.css("zIndex", 1600)
                        }),
                        this.list.find("ul").click(function(t) {
                            0 < $(this).find("li.xiaoqu-empty").length || ("li" == t.target.tagName.toLowerCase() ? e.clickFunc($(t.target)) : e.clickFunc($(this).find("li.over")))
                        }).bind("mouseover", function(t) {
                            e.opts.suggestSetting.commonShow.canHide = !1,
                            "li" == t.target.tagName.toLowerCase() && ($(this).find("li").removeClass("over"),
                                $(t.target).addClass("over"))
                        }).bind("mouseleave", function(t) {
                            e.opts.suggestSetting.commonShow.canHide = !0,
                            "li" == t.target.tagName.toLowerCase() && $(t.target).removeClass("over")
                        })
                }
            }
            ,
            n.prototype.focusTo = function() {
                this.elem.focus()
            }
            ,
            n.prototype.resetValues = function() {
                for (var t in this.values)
                    this.values.hasOwnProperty(t) && (this.values[t] = "")
            }
            ,
            n.prototype.setValue = function(t, e, i, n) {
                t && t.input ? (this.elem.val(t.input),
                    this.values = t,
                    this.setText(t.input)) : "string" == typeof t && (isNaN(parseInt(t, 10)) ? this.elem.val(t) : this.values ? this.values.id = t : this.values = {
                    id: t
                }),
                    t.m && "0" != t.m ? a(t.m) : t.r && "0" != t.r && a(t.r),
                i || (this.publish(this.opts.name + ".valueChange", this.getId()),
                    this.container.triggerHandler("inputover")),
                    this.doCheck(),
                    this.rows.containerElem.css("zIndex", ""),
                    this.block.containerElem.css("zIndex", "")
            }
            ,
            n.prototype.setText = function(t) {
                this.elem.val(t),
                    this.text = t
            }
            ,
            n.prototype.getText = function() {
                var t = this.getAllValues();
                return this.text ? this.text : t && "" != t && "object" == typeof t && t.k || ""
            }
            ,
            n.prototype.getCheckValue = function() {
                return this.constructor.superclass.getValue.apply(this, arguments)
            }
            ,
            n.prototype.getValue = function() {
                if (this.opts.returnTemp) {
                    var t = {}
                        , e = this.opts.returnTemp
                        , i = this.values;
                    if (i && "object" == typeof i)
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                if ("id" == n && "baiduAPI" == i.type) {
                                    t.xiaoqu = i.input || "";
                                    continue
                                }
                                t[e[n]] = i[n] || ""
                            }
                    return t
                }
                return this.values && this.values.id ? this.values.id : this.constructor.superclass.getValue.apply(this, arguments)
            }
            ,
            n.prototype.getAllValues = function() {
                return this.values
            }
            ,
            n.prototype.getAllValuesOrText = function() {
                var t = this.getAllValues();
                return t && "" != t && "object" == typeof t ? t : this.elem.val()
            }
            ,
            n.prototype.getAllValues = function() {
                return this.values
            }
            ,
            n.prototype.setId = function(t) {
                return this.values && this.values.id ? this.values.id = t : this.values = t
            }
            ,
            n.prototype.getId = function() {
                return this.values && this.values.id || ""
            }
            ,
            n.prototype.disable = function() {
                this.opts.disabled && (this.elem.attr("disabled", "disabled"),
                    this.elem.css({
                        color: "#ccc"
                    }))
            }
            ,
            n
    }),
    define("component/autoCompleteWuyedizhi/js/autoCompleteWuyedizhi", ["component/inputText/js/inputText", "util/Class", "Controller/Controller", "util/postClickLog"], function(t, e, i, s) {
        var n = e.extend(t);
        return n.opts = {
            type: "text",
            name: "",
            view: {
                placeholder: "",
                afterText: "",
                beforeText: "",
                maxHeight: "",
                width: ""
            },
            returnTemp: null,
            attr: {
                autocomplete: "off",
                disableautocomplete: !0
            },
            suggestSetting: {
                commonShow: {
                    dataPath: "",
                    liKeys: [],
                    liTemp: "",
                    url: "",
                    setValFunc: function() {}
                }
            },
            checkRuler: [],
            funcs: []
        },
            n.prototype.clickFunc = function(t) {
                this.setValue(t.attr("v"))
            }
            ,
            n.prototype.bindDomEvent = function() {
                var e = this;
                if (this.listData = [],
                        this.isContinueLoading = !0,
                        this.showList = function() {
                            this.elem.position();
                            this.list.show(),
                                this.list.css({
                                    width: this.elem.width() + 16 + "px",
                                    top: this.elem.height() + parseInt(this.elem.css("paddingTop")) + parseInt(this.elem.css("paddingBottom")) + "px",
                                    left: parseInt(this.elem.css("paddingLeft")) + 10 + "px"
                                })
                        }
                        ,
                    0 < this.elem.length) {
                    this.list = $("<div class='tooltip' style=' margin:1px 0 0 -10px;overflow:hidden;border:1px solid #ccc;background:#fff;position:absolute;z-index:" + (9e3 - this.opts.tabIndex) + ";display:none'><div class='wuye-wrap'><ul class='autoCompleteul'></ul></div></div>"),
                        this.elem.after(this.list);
                    var t = e.opts.suggestSetting.commonShow;
                    this.list.on("click", ".autoCompleteul li", function() {
                        var t = $(this);
                        e.clickFunc(t, e)
                    }).mouseover(function() {
                        $(this).addClass("over").siblings("li").removeClass("over")
                    }).mouseleave(function() {
                        $(this).removeClass("over")
                    }),
                        this.list.on("click", ".wuye-pass", function() {
                            e.setValue(t.defaultValue),
                                e.list.hide().find(".wuye-pass").remove(),
                                s.send(t.defaultTagLog)
                        }),
                        this.elem.bind("focus", function() {
                            s.send(t.clickTagLog),
                                e.list.find("ul").html(""),
                                t.targetPage = 1,
                                t.bindScrollEvent = !0,
                                e.isContinueLoading = !0,
                                e.isShowLoading = !0,
                                e.appendDate(),
                            e.list.find(".wuye-pass").length <= 0 && e.list.append('<div class="wuye-pass">' + t.suggestTipValue + "</div>"),
                                e.showList(),
                                e.elem.triggerHandler("focusin"),
                                e.rows.containerElem.css("zIndex", 1600),
                                e.block.containerElem.css("zIndex", 1600),
                                e.onScrollEvent(e.list)
                        }).blur(function() {
                            setTimeout(function() {
                                e.rows.containerElem.css("zIndex", ""),
                                    e.block.containerElem.css("zIndex", ""),
                                    e.list.hide().find(".wuye-pass").remove(),
                                    e.elem.removeClass("focus"),
                                e.opts.isEdit && e.elem.val() === e.text || e.elem.val() && (e.setValue(e.elem.val()),
                                    e.container.triggerHandler("inputover")),
                                !e.doCheck().bValid && t.errorTagLog && s.send(t.errorTagLog)
                            }, 150)
                        })
                }
            }
            ,
            n.prototype.focusTo = function() {
                this.elem.focus()
            }
            ,
            n.prototype.appendDate = function() {
                var a = this
                    , o = a.opts.suggestSetting.commonShow;
                o.bindScrollEvent = !1;
                var t = o.getAjaxUrlFn(i.records);
                this.isContinueLoading && t && (this.isShowLoading && this.showLoading("加载中..."),
                    $.getJSON(t, function(t) {
                        if (a.isContinueLoading = !1,
                                o.targetPage++,
                            o.dataPath && 0 < o.dataPath.length)
                            t = t[o.dataPath];
                        s.send(o.suggestShowTagLog);
                        var e = "";
                        if (t && 0 < t.length) {
                            var i = t.length;
                            a.listData = t;
                            for (var n = 0; n < i; n++)
                                o.liCreater && (e += o.liCreater(t[n]));
                            a.hideLoading(),
                                a.list.find("ul").append(e)
                        } else
                            setTimeout(function() {
                                a.hideLoading()
                            }, 500);
                        setTimeout(function() {
                            t && 20 <= t.length ? (o.bindScrollEvent = !0,
                                a.isContinueLoading = !0,
                                a.isShowLoading = !0) : o.bindScrollEvent = !1
                        }, 300)
                    }))
            }
            ,
            n.prototype.resetValues = function() {
                for (var t in this.values)
                    this.values.hasOwnProperty(t) && (this.values[t] = "")
            }
            ,
            n.prototype.setValue = function(t, e, i) {
                t && (this.elem.val(t),
                    this.value = t),
                    this.publish(this.opts.name + ".valueChange", this.getValue()),
                this.rows.containerElseem && this.rows.containerElseem.css("zIndex", ""),
                    this.block.containerElem.css("zIndex", ""),
                !0 === this.doCheck().bValid && !0 !== this.rows.getValidateStatus() && this.hideTips()
            }
            ,
            n.prototype.setText = function(t) {
                this.elem.val(t + this.opts.suggestSetting.commonShow.type),
                    this.text = t
            }
            ,
            n.prototype.getText = function() {
                var t = this.getValue();
                return this.text ? this.text : t && "" != t && "object" == typeof t && t.k || ""
            }
            ,
            n.prototype.getCheckValue = function() {
                return this.constructor.superclass.getValue.apply(this, arguments)
            }
            ,
            n.prototype.getValue = function() {
                return this.value
            }
            ,
            n.prototype.getAllValuesOrText = function() {
                var t = this.getValue();
                return t && "" != t && "object" == typeof t ? t : this.elem.val()
            }
            ,
            n.prototype.setId = function(t) {
                return this.values && this.values.id ? this.values.id = t : this.values = t
            }
            ,
            n.prototype.getId = function() {
                return this.values && this.values.id || ""
            }
            ,
            n.prototype.disable = function() {
                this.opts.disabled && (this.elem.attr("disabled", "disabled"),
                    this.elem.css({
                        color: "#ccc"
                    }))
            }
            ,
            n.prototype.onScrollEvent = function(t) {
                var n = this;
                $(t).find(".wuye-wrap").scroll(function() {
                    var t = $(this).scrollTop()
                        , e = $(this).find(".autoCompleteul").height()
                        , i = $(this).height();
                    n.opts.suggestSetting.commonShow.bindScrollEvent && e - 40 <= t + i && n.appendDate()
                })
            }
            ,
            n.prototype.showLoading = function() {
                this.isShowLoading = !1,
                    this.list.find("ul").append('<li class="wuye-loading">加载中...</li>')
            }
            ,
            n.prototype.hideLoading = function() {
                this.list.find("ul").find(".wuye-loading").remove()
            }
            ,
            n
    }),
    define("component/realHousePop/js/realHousePop", [], function() {
        var t = function() {};
        return t.prototype = {
            status: "first",
            apiContentUrl: "//housepostbaseapi.58.com/fang/protocol?callback=?",
            init: function() {
                var t = this;
                t.pageTemp.second.desc ? this.renderView(this.status) : t.requestContent(this.status),
                    $("body").on("click", "#realHouseDeal", function() {
                        "second" !== t.status && (t.status = "second",
                            t.renderView(t.status))
                    }),
                    $("body").on("click", "#realHouseClick", function() {
                        var t = $(this).find(".icon-choose")
                            , e = $("#realHouseButton");
                        t.hasClass("checked") ? (t.removeClass("checked"),
                            e.removeClass("checked")) : (t.addClass("checked"),
                            e.addClass("checked"))
                    }),
                    $("body").on("click", "#realHouseBack", function() {
                        t.status = "first",
                            t.renderView(t.status)
                    }),
                    $("body").on("click", "#realHouseButton", function() {
                        $(this).hasClass("checked") && $(".realhouse-pop").remove()
                    })
            },
            requestContent: function(e) {
                var i = this;
                $.ajax({
                    url: this.apiContentUrl,
                    type: "get",
                    dataType: "jsonp",
                    jsonp: "jsoncallback",
                    jsoncallback: "jsoncallback",
                    success: function(t) {
                        t && t.data && t.data.content && (i.pageTemp.second.desc = t.data.content,
                            i.pageTemp.second.title = t.data.name,
                            i.pageTemp.second.dealTitle = t.data.name,
                            i.pageTemp.first.dealTitle = t.data.name,
                            i.renderView(e))
                    },
                    error: function() {
                        console.log("content is error")
                    }
                })
            },
            renderView: function(t) {
                var e = ""
                    , i = this.pageTemp[t];
                if (e += this.baseTemp.before,
                        e += this.baseTemp.after,
                        $(".realhouse-pop").remove(),
                        e = (e = (e = (e = (e = (e = e.replace("{{content}}", i.contentTemp || "")).replace("{{contentClass}}", i["class"] || "")).replace("{{title}}", i.title || "")).replace("{{desc}}", i.desc || "")).replace("{{dealTitle}}", i.dealTitle || "")).replace("{{status}}", i.status || ""),
                    i.listContent && 0 < i.listContent.length) {
                    for (var n = "", a = (t = 0,
                        i.listContent.length); t < a; t++) {
                        var o = i.listTemp
                            , s = i.listContent[t];
                        n += o = (o = (o = o.replace("{{class}}", s["class"])).replace("{{itemTitle}}", s.itemTitle)).replace("{{itemDesc}}", s.itemDesc)
                    }
                    e = e.replace("{{list}}", n || "")
                }
                $("body").append(e)
            },
            baseTemp: {
                before: '<div class="realhouse-pop"><div class="realhouse-layer"></div><div class="realhouse"><div class="icon-back realhouse-icon {{status}}" id="realHouseBack"></div><div class="container {{contentClass}}">{{content}}',
                after: '</div><div class="promise"><div class="handlerClick" id="realHouseClick"><div class="icon-choose realhouse-icon"></div>我承诺房源真实并同意</div><span class="deal" id="realHouseDeal">《{{dealTitle}}》</span><div class="button" id="realHouseButton">立即发布</div></div></div></div>'
            },
            pageTemp: {
                first: {
                    "class": "first",
                    title: "发帖真实性承诺",
                    desc: "为维护真房源环境，请据实发帖。如发现虚假，平台将封禁账号并扣除保证金",
                    dealTitle: "",
                    status: "",
                    contentTemp: '<div class="title">{{title}}</div><div class="title-desc">{{desc}}</div><div class="house-list"><ul>{{list}}</ul></div>',
                    listTemp: '<li class="item {{class}}"><div class="item-icon realhouse-icon"></div><div class="item-desc"><div class="t1">{{itemTitle}}</div><div class="t2">{{itemDesc}}</div></div></li>',
                    listContent: [{
                        "class": "ident",
                        itemTitle: "身份真实",
                        itemDesc: "依据真实身份发帖"
                    }, {
                        "class": "image",
                        itemTitle: "上传实拍图片",
                        itemDesc: "上传与房源相关的真实图片"
                    }, {
                        "class": "desc",
                        itemTitle: "房源如实描述",
                        itemDesc: "房源真实在租，位置及厅室等信息真实有效"
                    }, {
                        "class": "price",
                        itemTitle: "房租标价合理",
                        itemDesc: "标明实际租住价格，承诺不收取额外费用"
                    }]
                },
                second: {
                    "class": "second",
                    title: "",
                    desc: "",
                    status: "show",
                    contentTemp: '<div class="title">{{title}}</div><div class="desc-wrap"><div class="desc-content">{{desc}}</div></div>'
                }
            }
        },
            t
    }),
    define("component/bmap/js/loadMapJs", [], function() {
        return function() {
            var t = document.createElement("script");
            t.src = "//api.map.baidu.com/api?v=2.0&ak=KInqDZvO0zhyuQpoEYpOVolgaD057x1W&callback=baiduMapInitialize&t=20180427194914",
                document.body.appendChild(t)
        }
    }),
    require(["component/block/js/block", "component/rows/js/rows", "component/inputText/js/inputText", "component/radio/js/radio", "component/checkbox/js/checkbox", "component/editor/js/editor", "component/selector/js/selector", "component/imgUpload/js/imgUpload", "component/rearLogin58/js/rearLogin58", "component/cubetg/js/cubetg", "component/submit/js/submit", "component/inputDate/js/inputDate", "Controller/Controller", "component/preCheck/js/preCheck", "component/captcha/js/captcha", "component/textShow/js/textShow", "component/text/js/text", "libs/json2.min", "util/postClickLog", "util/cookie", "util/explanjson4fe", "component/qqInput/js/qqInput", "component/captchaInput/js/captchaInput", "component/limitpost/js/limitpost", "component/privacyNew/js/privacyNew", "component/agent/js/agent", "component/mountIframe/js/mountIframe", "component/verifyPop/js/verifyPop", "component/authenticationPop/js/authenticationPop", "component/autoCompleteXiaoqu/js/autoCompleteXiaoqu", "component/autoCompleteWuyedizhi/js/autoCompleteWuyedizhi", "component/popFangbenAttest/js/popFangbenAttest", "component/bdMap/js/bdMap", "component/baiduMapXiaoqu/js/baiduMapXiaoqu", "component/popwin/js/popwin", "component/realHousePop/js/realHousePop", "component/bmap/js/loadMapJs"], function(t, e, i, n, a, o, s, r, c, l, d, p, h, u, f, m, g, v, y, b, w, _, C, x, k, T, I, E, S, D, L, M, z, P, A, F, V) {
        if (____json4fe && ____json4fe.locallist && 1 == ____json4fe.locallist.dispid && extMap && 1 == extMap.isBiz) {
            var N = $("<div>").addClass("newtip-wrap mt30")
                , O = $("<div>").addClass("content").addClass("tj_Window");
            N.append(O),
                O.append('<p class="content_tjWindow">根据北京住建委要求，禁止独立经纪人发布免费信息，<br>如需发布房源请购买会员发布</p>');
            var B = $('<a href="javascript:;">关闭</a>');
            B.on("click", function() {
                window.location.href = "//www.58.com"
            });
            var U = $('<div class="btn_group btn_tjWindow">').append(B);
            O.append(U),
                A.show("  ", N, 548, 248, !1, function() {})
        }
        if (extMap && "undefined" != typeof extMap.isExpire90Days && extMap.isExpire90Days && (alert("由于该条信息90天内没有任何操作，已过期，请重新发布信息"),
                window.location.href = "//my.58.com"),
            "undefined" == typeof iqasData || !u.execute(iqasData)) {
            1 == extMap.wkLimitPost && (h.limit = new x);
            var q = {
                from: "58clientErrorReport",
                "58clientPdType": "post",
                clientErrorLocation: location.href || "unknown",
                resultState: "failed",
                client: "pc",
                browserType: navigator.userAgent || "unknown",
                clientErrorMsg: "unknown",
                clientErrorUrl: "unknown",
                clientErrorDate: "unknown",
                clientErrorLine: "unknown"
            };
            if (window.onerror = function(t, e, i) {
                    if (!e || e.indexOf("zufang_v") < 0)
                        return;
                    q.clientErrorMsg = t,
                        q.clientErrorUrl = e,
                        q.clientErrorLine = i,
                        q.clientErrorDate = (new Date).getTime();
                    var n = $.param(q);
                    y.sendJson(n)
                }
                    ,
                datasrc.zujinyibaohanfeiyong != undefined)
                for (var H = datasrc.zujinyibaohanfeiyong.values, W = 0; W < H.length; W++)
                    H[W].text = H[W].text + "费";
            kt("phoneStartTime", 0, "07:00"),
                kt("phoneEndTime", 0, "22:00"),
            "undefined" == typeof window.FE58 && (window.FE58 = {});
            var R = {};
            window.FE58.pageTrack = {},
                window.FE58.pageTrack.formStartTime = (new Date).getTime();
            for (var Y, K, G, Q, X, Z, J = 1, tt = (W = j = mt = 0,
                formDefine.length); W < tt; W++) {
                var et;
                for (blockOpt = formDefine[W],
                         (et = new t(blockOpt)).render(),
                         Y = blockOpt.children.length,
                         j = 0; j < Y; j++)
                    if (rowsOpt = blockOpt.children[j],
                        !1 !== rowsOpt.required) {
                        var it = new e(rowsOpt);
                        for (it.render(et.contentElem),
                                 K = rowsOpt.children.length,
                                 mt = 0; mt < K; mt++) {
                            var nt = rowsOpt.children[mt];
                            "Phone" == nt.name && 1 == extMap.wkLimitPost && nt.funcs,
                                nt.tabIndex = J++;
                            var at = null
                                , ot = null;
                            try {
                                ot = (at = datasrc[nt.dataName || nt.name]).defaultValue
                            } catch (Tt) {
                                at = null
                            }
                            var st = (G = nt.type,
                                Q = nt,
                                X = at,
                                Z = void 0,
                            (Z = R[G]) || (Z = require("component/" + G + "/js/" + G),
                                R[G] = Z),
                                new Z(Q,X));
                            if (it.setValidateStatus(nt.name, !nt.checkRuler),
                                    st.rows = it,
                                    st.block = et,
                                    st.render(it.contentElem),
                                    h.records.set(nt.name, st),
                                null != ot && "" != ot) {
                                "undefined" != typeof infoDetail && "qqlist" != nt.name || st.setValue(ot, "", 1);
                                var rt = "undefined" == typeof infoDetail
                                    , ct = "undefined" != typeof infoDetail && infoDetail.NewPostbiaozhi != undefined && 1 != infoDetail.NewPostbiaozhi;
                                "NewPostbiaozhi" == nt.name && (rt || ct) && st.setValue("2", "", 1)
                            }
                            nt.observe && h.anylizeObserve(nt.name, nt.observe)
                        }
                    }
            }
            (et = new t).render(),
                et.hideTitle(),
                (it = new e).render(et.contentElem),
                (st = new d).rows = it,
                st.block = et,
                h.setSubmit(st),
                st.render(it.contentElem),
                (pt = h.records.get("Title")).disable();
            var lt = h.records.get("HouseUserType");
            if (extMap.userTypeModify != undefined && "0" == extMap.userTypeModify && lt.disable(),
                extMap.lastHouseusertype && (lt.setValueId(extMap.lastHouseusertype),
                "683039" == extMap.lastHouseusertype && lt.disable()),
                    window.clickLog = window.clickLog || {},
                    setTimeout(function() {
                        V()
                    }, 100),
                    window.baiduMapInitialize = function() {}
                    ,
                "undefined" != typeof infoDetail) {
                h.records.get("louhao").activate(),
                    h.setFormData(infoDetail, 2);
                var dt = h.records.get("HireType")
                    , pt = h.records.get("Title");
                "undefined" != typeof infoDetail.daoqishijian && h.setValue("daoqishijian", infoDetail.daoqishijian, 2),
                infoDetail.Title && pt.setValue(infoDetail.Title),
                    dt.setValue(datasrc.HireType.defaultValue),
                    dt.disabled();
                var ht = ["xiaoqu", "huxingshi", "huxingting", "huxingwei", "area", "Toward", "Floor", "zonglouceng", "HouseUserType"];
                for (W = 0; W < ht.length; W++)
                    if (ht[W] != undefined) {
                        var ut = h.records.get(ht[W]);
                        infoDetail[ht[W]] != undefined && "" != infoDetail[ht[W]] && ut.disable()
                    }
                if (infoDetail.louhao != undefined && "" != infoDetail.louhao || infoDetail.danyuanhao != undefined && "" != infoDetail.danyuanhao || infoDetail.menpaihao != undefined && "" != infoDetail.menpaihao)
                    for (var ft = ["louhao", "danyuanhao", "menpaihao"], mt = 0; mt < 3; mt++) {
                        (ut = h.records.get(ft[mt])).opts.disabled = !0,
                            ut.disable()
                    }
            }
            var gt = h.records.get("isBiz");
            if ("undefined" != typeof bizDefault && gt.setValue(bizDefault),
                1 == isBizDisable && gt.disabled(),
                "undefined" != typeof infoDetail && "undefined" != typeof infoDetail.qqOpenid && 0 < infoDetail.qqOpenid.length)
                h.records.get("qqlist").setValue(infoDetail.qqOpenid, "", 2);
            1 == extMap.wkLimitPost && h.limit.initEventBind(),
                window.FE58.pageTrack.formEnd = (new Date).getTime();
            var vt = setInterval(function() {
                "function" == typeof window.clickLog && (y.sendJson("from=Post_TriggerEventTime&key=formEnd&eventTime=" + window.FE58.pageTrack.formEnd),
                    y.sendJson("from=Post_TriggerEventTime&key=formStart&eventTime=" + window.FE58.pageTrack.formStartTime),
                    clearInterval(vt),
                    vt = null)
            }, 300)
                , yt = "" === extMap.lastHouseusertype && extMap.lastHouseusertype != undefined;
            if (yt) {
                var bt = extMap.userTypeDefault || "";
                (new S).init(yt, bt)
            }
            if (extMap && "683039" != extMap.lastHouseusertype && extData && extData.punishBzj)
                (new F).init();
            if (extMap.needVerify) {
                if ("undefined" != typeof extMap.needVerify.code && 1101 == extMap.needVerify.code) {
                    N = $("<div>").addClass("tips-dialog");
                    var wt = $("<div>").addClass("btn-wrap")
                        , _t = $('<a tongji_tag="" class="right-button" href="javascript:;">知道了</a>')
                        , Ct = extMap.needVerify.msg || "";
                    return N.append('<div style="text-align: center;margin-top: 60px;font-size: 16px;color: #333;">' + Ct + "</div>"),
                        wt.append(_t),
                        N.append(wt),
                        _t.bind("click", function() {
                            window.location.href = "https://my.58.com/"
                        }),
                        void A.show("", N, 548, 206, !1, function() {})
                }
                if ("all_verify" === extMap.needVerify.bizCode && !yt && extMap.isIdentityCity && (0 < (extMap.lastUserPhone || "").length || window.CL == undefined))
                    (new S).init(yt);
                if ("need_verify" === extMap.needVerify.bizCode) {
                    var xt = new E;
                    1 == Number(extMap.needVerify.bizExt.level) && (extMap.needVerify.bizExt.style = "fangchan_zz",
                        extMap.needVerify.bizExt.fc_zzstate = "1",
                        extMap.needVerify.bizExt.appId = "xfsOuUwy"),
                        xt.popVerify(extMap.needVerify)
                }
            }
        }
        function kt(t, e, i) {
            if (datasrc) {
                null == datasrc[t] && (datasrc[t] = {});
                var n, a, o, s = datasrc[t];
                if (!s.values)
                    for (s.values = [],
                             n = 0; n < 24; n++)
                        (a = n) < 10 && (a = "0" + n),
                            o = a + ":00",
                            s.values[n] = {
                                val: o,
                                text: o
                            };
                s.defaultValue || (s.defaultValue = i),
                s.text || (s.text = "接听开始时段")
            }
        }
    }),
    define("category/zufang/zufang", function() {});
