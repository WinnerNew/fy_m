(function () {
    var h = {}, mt = {}, c = {
        id: "1f0848fcf2f2246768526dbb2cccace9",
        dm: ["m.shiguangkey.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        cetrk: [],
        icon: '',
        ctrk: true,
        align: 0,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        kbtrk: 0,
        pt: 0,
        spa: 0,
        aet: '',
        hca: 'B725524A01909C11',
        conv: 0,
        med: 0,
        cvcc: '',
        cvcf: [],
        apps: ''
    };
    var t = void 0, v = !0, w = null, x = !1;
    mt.cookie = {};
    mt.cookie.set = function (b, a, k) {
        var e;
        k.M && (e = new Date, e.setTime(e.getTime() + k.M));
        document.cookie = b + "=" + a + (k.domain ? "; domain=" + k.domain : "") + (k.path ? "; path=" + k.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (k.mc ? "; secure" : "")
    };
    mt.cookie.get = function (b) {
        return (b = RegExp("(^| )" + b + "=([^;]*)(;|$)").exec(document.cookie)) ? b[2] : w
    };
    mt.cookie.Jb = function (b, a) {
        try {
            var k = "Hm_ck_" + +new Date;
            mt.cookie.set(k, "is-cookie-enabled", {domain: b, path: a, M: t});
            var e = "is-cookie-enabled" === mt.cookie.get(k) ? "1" : "0";
            mt.cookie.set(k, "", {domain: b, path: a, M: -1});
            return e
        } catch (f) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.e = function (b, a) {
        return "[object " + a + "]" === {}.toString.call(b)
    };
    mt.lang.Ga = function (b) {
        return mt.lang.e(b, "Number") && isFinite(b)
    };
    mt.lang.ma = function () {
        return mt.lang.e(c.aet, "String")
    };
    mt.lang.g = function (b) {
        return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
    };
    mt.lang.trim = function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.I = function (b, a) {
        var k = x;
        if (b == w || !mt.lang.e(b, "Array") || a === t) return k;
        if (Array.prototype.indexOf) k = -1 !== b.indexOf(a); else for (var e = 0; e < b.length; e++) if (b[e] === a) {
            k = v;
            break
        }
        return k
    };
    (function () {
        var b = mt.lang;
        mt.f = {};
        mt.f.Aa = function (a) {
            return document.getElementById(a)
        };
        mt.f.pb = function (a) {
            if (!a) return w;
            try {
                for (var b = a.split(">"), e = document.body, f = b.length - 1; 0 <= f; f--) if (-1 < b[f].indexOf("#")) {
                    var d = b[f].split("#")[1];
                    (e = document.getElementById(d)) || (e = document.getElementById(decodeURIComponent(d)));
                    b = b.splice(f + 1, b.length - (f + 1));
                    break
                }
                for (a = 0; e && a < b.length;) {
                    var m = String(b[a]).toLowerCase();
                    if (!("html" === m || "body" === m)) {
                        var f = 0, n = b[a].match(/\[(\d+)\]/i), d = [];
                        if (n) f = n[1] - 1, m =
                            m.split("[")[0]; else if (1 !== e.childNodes.length) {
                            for (var p = 0, u = 0, g = e.childNodes.length; u < g; u++) {
                                var l = e.childNodes[u];
                                1 === l.nodeType && l.nodeName.toLowerCase() === m && p++;
                                if (1 < p) return w
                            }
                            if (1 !== p) return w
                        }
                        for (p = 0; p < e.childNodes.length; p++) 1 === e.childNodes[p].nodeType && e.childNodes[p].nodeName.toLowerCase() === m && d.push(e.childNodes[p]);
                        if (!d[f]) return w;
                        e = d[f]
                    }
                    a++
                }
                return e
            } catch (r) {
                return w
            }
        };
        mt.f.ia = function (a, b) {
            var e = [], f = [];
            if (!a) return f;
            for (; a.parentNode != w;) {
                for (var d = 0, m = 0, n = a.parentNode.childNodes.length,
                         p = 0; p < n; p++) {
                    var u = a.parentNode.childNodes[p];
                    if (u.nodeName === a.nodeName && (d++, u === a && (m = d), 0 < m && 1 < d)) break
                }
                if ((n = "" !== a.id) && b) {
                    e.unshift("#" + encodeURIComponent(a.id));
                    break
                } else n && (n = "#" + encodeURIComponent(a.id), n = 0 < e.length ? n + ">" + e.join(">") : n, f.push(n)), e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < d ? "[" + m + "]" : ""));
                a = a.parentNode
            }
            f.push(e.join(">"));
            return f
        };
        mt.f.Da = function (a) {
            return (a = mt.f.ia(a, v)) && a.length ? String(a[0]) : ""
        };
        mt.f.wb = function (a) {
            return mt.f.ia(a, x)
        };
        mt.f.mb =
            function (a) {
                var b;
                for (b = "A"; (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
                return w
            };
        mt.f.ob = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.f.ub = function (a) {
            var b = {top: 0, left: 0};
            if (!a) return b;
            var e = mt.f.ob(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
            return {
                top: b.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: b.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }
        };
        mt.f.getAttribute = function (a, b) {
            var e =
                a.getAttribute && a.getAttribute(b) || w;
            if (!e && a.attributes && a.attributes.length) for (var f = a.attributes, d = f.length, m = 0; m < d; m++) f[m].nodeName === b && (e = f[m].nodeValue);
            return e
        };
        mt.f.U = function (a) {
            var b = "document";
            a.tagName !== t && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.f.yb = function (a) {
            var k = "";
            a.textContent ? k = b.trim(a.textContent) : a.innerText && (k = b.trim(a.innerText));
            k && (k = k.replace(/\s+/g, " ").substring(0, 255));
            return k
        };
        mt.f.Ba = function (a) {
            var b = mt.f.U(a);
            "input" === b && ("button" === a.type || "submit" ===
                a.type) ? a = a.value || "" : "img" === b ? (b = mt.f.getAttribute, a = b(a, "alt") || b(a, "title") || b(a, "src")) : a = "body" === b || "html" === b ? ["(hm-default-content-for-", b, ")"].join("") : mt.f.yb(a);
            return String(a).substring(0, 255)
        };
        (function () {
            (mt.f.Qb = function () {
                function a() {
                    if (!a.W) {
                        a.W = v;
                        for (var b = 0, e = f.length; b < e; b++) f[b]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(b, 1);
                        return
                    }
                    a()
                }

                var e = x, f = [], d;
                document.addEventListener ? d = function () {
                    document.removeEventListener("DOMContentLoaded",
                        d, x);
                    a()
                } : document.attachEvent && (d = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", d), a())
                });
                (function () {
                    if (!e) if (e = v, "complete" === document.readyState) a.W = v; else if (document.addEventListener) document.addEventListener("DOMContentLoaded", d, x), window.addEventListener("load", a, x); else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", d);
                        window.attachEvent("onload", a);
                        var f = x;
                        try {
                            f = window.frameElement == w
                        } catch (n) {
                        }
                        document.documentElement.doScroll &&
                        f && b()
                    }
                })();
                return function (b) {
                    a.W ? b() : f.push(b)
                }
            }()).W = x
        })();
        return mt.f
    })();
    mt.event = {};
    mt.event.d = function (b, a, k) {
        b.attachEvent ? b.attachEvent("on" + a, function (a) {
            k.call(b, a)
        }) : b.addEventListener && b.addEventListener(a, k, x)
    };
    mt.event.preventDefault = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = x
    };
    (function () {
        var b = mt.event;
        mt.i = {};
        mt.i.la = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.i.Hb = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : t;
        mt.i.cookieEnabled = navigator.cookieEnabled;
        mt.i.javaEnabled = navigator.javaEnabled();
        mt.i.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.i.Tb = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.i.colorDepth = window.screen.colorDepth || 0;
        mt.i.O = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.i.H = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.i.orientation = 0;
        (function () {
            function a() {
                var a = 0;
                window.orientation !== t && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== t) && (a = screen.orientation.angle);
                mt.i.orientation = a
            }

            a();
            b.d(window, "orientationchange", a)
        })();
        return mt.i
    })();
    mt.o = {};
    mt.o.parse = function (b) {
        return (new Function("return (" + b + ")"))()
    };
    mt.o.stringify = function () {
        function b(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var b = k[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function a(a) {
            return 10 > a ? "0" + a : a
        }

        var k = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (e) {
            switch (typeof e) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "string":
                    return b(e);
                case "boolean":
                    return String(e);
                default:
                    if (e === w) return "null";
                    if (e instanceof Array) {
                        var f = ["["], d = e.length, m, k, p;
                        for (k = 0; k < d; k++) switch (p = e[k], typeof p) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                m && f.push(","), f.push(mt.o.stringify(p)), m = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (e instanceof Date) return '"' + e.getFullYear() + "-" + a(e.getMonth() + 1) + "-" + a(e.getDate()) + "T" + a(e.getHours()) + ":" + a(e.getMinutes()) + ":" + a(e.getSeconds()) + '"';
                    m = ["{"];
                    k = mt.o.stringify;
                    for (d in e) if (Object.prototype.hasOwnProperty.call(e, d)) switch (p =
                        e[d], typeof p) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            f && m.push(","), f = 1, m.push(k(d) + ":" + k(p))
                    }
                    m.push("}");
                    return m.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.aa = function () {
        if (!mt.localStorage.l) try {
            mt.localStorage.l = document.createElement("input"), mt.localStorage.l.type = "hidden", mt.localStorage.l.style.display = "none", mt.localStorage.l.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)
        } catch (b) {
            return x
        }
        return v
    };
    mt.localStorage.set = function (b, a, k) {
        var e = new Date;
        e.setTime(e.getTime() + k || 31536E6);
        try {
            window.localStorage ? (a = e.getTime() + "|" + a, window.localStorage.setItem(b, a)) : mt.localStorage.aa() && (mt.localStorage.l.expires = e.toUTCString(), mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.setAttribute(b, a), mt.localStorage.l.save(document.location.hostname))
        } catch (f) {
        }
    };
    mt.localStorage.get = function (b) {
        if (window.localStorage) {
            if (b = window.localStorage.getItem(b)) {
                var a = b.indexOf("|"), k = b.substring(0, a) - 0;
                if (k && k > (new Date).getTime()) return b.substring(a + 1)
            }
        } else if (mt.localStorage.aa()) try {
            return mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.getAttribute(b)
        } catch (e) {
        }
        return w
    };
    mt.localStorage.remove = function (b) {
        if (window.localStorage) window.localStorage.removeItem(b); else if (mt.localStorage.aa()) try {
            mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.removeAttribute(b), mt.localStorage.l.save(document.location.hostname)
        } catch (a) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (b, a) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(b, a)
        } catch (k) {
        }
    };
    mt.sessionStorage.get = function (b) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(b) : w
        } catch (a) {
            return w
        }
    };
    mt.sessionStorage.remove = function (b) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(b)
        } catch (a) {
        }
    };
    mt.Na = {};
    mt.Na.log = function (b, a) {
        var k = new Image, e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = k;
        k.onload = function () {
            k.onload = w;
            k = window[e] = w;
            a && a(b)
        };
        k.src = b
    };
    mt.ra = {};
    mt.ra.zb = function () {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            a && a.description && (b = a.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (b = a.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (k) {
        }
        return b
    };
    mt.ra.ic = function (b, a, k, e, f) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + b + '" width="' + k + '" height="' + e + '"><param name="movie" value="' + a + '" /><param name="flashvars" value="' + (f || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + b + '" width="' + k + '" height="' + e + '" src="' + a + '" flashvars="' + (f || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.m = function (b, a) {
        var k = b.match(RegExp("(^|&|\\?|#)(" + a + ")=([^&#]*)(&|$|#)", ""));
        return k ? k[3] : w
    };
    mt.url.jc = function (b) {
        return (b = b.match(/^(https?:)\/\//)) ? b[1] : w
    };
    mt.url.rb = function (b) {
        return (b = b.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? b[2].replace(/.*@/, "") : w
    };
    mt.url.N = function (b) {
        return (b = mt.url.rb(b)) ? b.replace(/:\d+$/, "") : b
    };
    mt.url.ia = function (b) {
        return (b = b.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? b[2].replace(/[\?#].*/, "").replace(/^$/, "/") : w
    };
    (function () {
        function b() {
            for (var a = x, b = document.getElementsByTagName("script"), e = b.length, e = 100 < e ? 100 : e, f = 0; f < e; f++) {
                var d = b[f].src;
                if (d && 0 === d.indexOf("https://hm.baidu.com/h")) {
                    a = v;
                    break
                }
            }
            return a
        }

        return h.lb = b
    })();
    var A = h.lb;
    h.s = {
        kc: "http://tongji.baidu.com/hm-web/welcome/ico",
        qa: "hm.baidu.com/hm.gif",
        Wa: /^(tongji|hmcdn).baidu.com$/,
        Pa: "tongji.baidu.com",
        Eb: "hmmd",
        Fb: "hmpl",
        ec: "utm_medium",
        Db: "hmkw",
        gc: "utm_term",
        Bb: "hmci",
        dc: "utm_content",
        Gb: "hmsr",
        fc: "utm_source",
        Cb: "hmcu",
        bc: "utm_campaign",
        J: 0,
        F: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        X: A() || "https:" === document.location.protocol ? "https:" : "http:",
        lc: 0,
        cb: 6E5,
        Kb: 6E5,
        Ub: 5E3,
        eb: 5,
        L: 1024,
        bb: 1,
        K: 2147483647,
        Oa: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
        P: v,
        xa: ["a", "input", "button"],
        Ya: {
            id: "data-hm-id",
            da: "data-hm-class",
            ua: "data-hm-xpath",
            content: "data-hm-content",
            sa: "data-hm-tag",
            link: "data-hm-link"
        },
        wa: "data-hm-enabled",
        va: "data-hm-disabled",
        Ob: "https://hmcdn.baidu.com/static/tongji/plugins/",
        Ja: ["UrlChangeTracker"]
    };
    (function () {
        var b = {
            B: {}, d: function (a, b) {
                this.B[a] = this.B[a] || [];
                this.B[a].push(b)
            }, G: function (a, b) {
                this.B[a] = this.B[a] || [];
                for (var e = this.B[a].length, f = 0; f < e; f++) this.B[a][f](b)
            }
        };
        return h.A = b
    })();
    (function () {
        function b(b, e) {
            var f = document.createElement("script");
            f.charset = "utf-8";
            a.e(e, "Function") && (f.readyState ? f.onreadystatechange = function () {
                if ("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = w, e()
            } : f.onload = function () {
                e()
            });
            f.src = b;
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(f, d)
        }

        var a = mt.lang;
        return h.load = b
    })();
    (function () {
        var b = mt.lang, a = mt.f, k = {
            S: function (b, f) {
                return function (d) {
                    var m = d.target || d.srcElement;
                    if (m) {
                        var n = m.getAttribute(b.$);
                        d = d.clientX + ":" + d.clientY;
                        if (n && n === d) m.removeAttribute(b.$); else if (f && 0 < f.length && (m = a.wb(m)) && m.length) if (n = m.length, d = m[m.length - 1], 1E4 > n * d.split(">").length) for (d = 0; d < n; d++) k.Ma(b, m[d]); else k.Ma(b, d)
                    }
                }
            }, Ma: function (a, f) {
                for (var d = {}, m = String(f).split(">").length, k = 0; k < m; k++) d[f] = "", f = f.substring(0, f.lastIndexOf(">"));
                a && (b.e(a, "Object") && a.ya) && a.ya(d)
            }, Rb: function (a,
                             b) {
                return function (d) {
                    (d.target || d.srcElement).setAttribute(a.$, d.clientX + ":" + d.clientY);
                    a && a.r && (b ? a.r(b) : a.r("#" + encodeURIComponent(this.id), d.type))
                }
            }
        };
        return h.fa = k
    })();
    (function () {
        var b = mt.f, a = mt.o, k = mt.event, e = mt.lang, f = h.fa, d = {
            $: "HM_ce", Ra: function () {
                if (c.cetrk && c.cetrk.length) {
                    k.d(document, "click", f.S(d, c.cetrk));
                    for (var e = 0, n = c.cetrk.length; e < n; e++) {
                        var p;
                        try {
                            p = a.parse(decodeURIComponent(String(c.cetrk[e])))
                        } catch (u) {
                            p = {}
                        }
                        var g = p.p || "";
                        -1 === g.indexOf(">") && (0 === g.indexOf("#") && (g = g.substring(1)), (g = b.Aa(g)) && k.d(g, "click", f.Rb(d, p)))
                    }
                }
            }, ya: function (b) {
                if (c.cetrk && c.cetrk.length) for (var e = 0, f = c.cetrk.length; e < f; e++) {
                    var u;
                    try {
                        u = a.parse(decodeURIComponent(String(c.cetrk[e])))
                    } catch (g) {
                        u =
                            {}
                    }
                    b.hasOwnProperty(u.p) && d.r(u)
                }
            }, r: function (a) {
                h.b.c.et = 7;
                var f = a && a.k || "", f = e.g(f), d = [];
                if (a && a.a && e.e(a.a, "Object")) for (var u in a.a) if (a.a.hasOwnProperty(u)) {
                    d.push(e.g(u));
                    var g = b.pb(a.a[u] || ""), g = g ? b.Ba(g) : "";
                    d.push(e.g(g))
                }
                a = "";
                d.length && (a = "*" + d.join("*"));
                h.b.c.ep = "ce!_iden*" + f + a;
                h.b.j()
            }
        };
        h.A.d("pv-b", d.Ra);
        return d
    })();
    (function () {
        var b = mt.f, a = mt.lang, k = mt.event, e = mt.i, f = h.s, d = h.A, m = [], n = {
            Qa: function () {
                c.ctrk && (k.d(document, "mouseup", n.ab()), k.d(window, "unload", function () {
                    n.Y()
                }), setInterval(function () {
                    n.Y()
                }, f.cb))
            }, ab: function () {
                return function (a) {
                    a = n.nb(a);
                    if ("" !== a) {
                        var b = (f.X + "//" + f.qa + "?" + h.b.La().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
                        b + (f.K + "").length > f.L || (b + encodeURIComponent(m.join("!") + (m.length ? "!" : "")).length + (f.K + "").length > f.L && n.Y(), m.push(a), (m.length >= f.eb || /\*a\*/.test(a)) &&
                        n.Y())
                    }
                }
            }, nb: function (d) {
                var g = d.target || d.srcElement;
                if (0 === f.bb) {
                    var l = (g.tagName || "").toLowerCase();
                    if ("embed" == l || "object" == l) return ""
                }
                var r;
                e.la ? (r = Math.max(document.documentElement.scrollTop, document.body.scrollTop), l = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), l = d.clientX + l, r = d.clientY + r) : (l = d.pageX, r = d.pageY);
                d = n.tb(d, g, l, r);
                var s = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        l -= s / 2;
                        break;
                    case 2:
                        l -= s
                }
                s =
                    [];
                s.push(l);
                s.push(r);
                s.push(d.Lb);
                s.push(d.Mb);
                s.push(d.Pb);
                s.push(a.g(d.Nb));
                s.push(d.hc);
                s.push(d.Ab);
                (g = "a" === (g.tagName || "").toLowerCase() ? g : b.mb(g)) ? (s.push("a"), s.push(a.g(encodeURIComponent(g.href)))) : s.push("b");
                return s.join("*")
            }, tb: function (f, g, l, d) {
                f = b.Da(g);
                var s = 0, q = 0, y = 0, z = 0;
                if (g && (s = g.offsetWidth || g.clientWidth, q = g.offsetHeight || g.clientHeight, z = b.ub(g), y = z.left, z = z.top, a.e(g.getBBox, "Function") && (q = g.getBBox(), s = q.width, q = q.height), "html" === (g.tagName || "").toLowerCase())) s = Math.max(s,
                    g.clientWidth), q = Math.max(q, g.clientHeight);
                return {
                    Lb: Math.round(100 * ((l - y) / s)),
                    Mb: Math.round(100 * ((d - z) / q)),
                    Pb: e.orientation,
                    Nb: f,
                    hc: s,
                    Ab: q
                }
            }, Y: function () {
                0 !== m.length && (h.b.c.et = 2, h.b.c.ep = m.join("!"), h.b.j(), m = [])
            }
        }, p = {
            Ua: function () {
                c.ctrk && setInterval(p.Vb, f.Ub)
            }, Vb: function () {
                var a = e.O() + e.H();
                0 < a - h.b.c.vl && (h.b.c.vl = a)
            }
        };
        d.d("pv-b", n.Qa);
        d.d("pv-b", p.Ua);
        return n
    })();
    (function () {
        var b = mt.lang, a = mt.f, k = mt.event, e = mt.i, f = h.s, d = h.A, m = +new Date, n = [], p = {
            S: function () {
                return function (e) {
                    if (h.b && h.b.P && c.aet && c.aet.length) {
                        var d = e.target || e.srcElement;
                        if (d) {
                            var l = h.b.xa, r = a.getAttribute(d, f.wa) != w ? v : x;
                            if (a.getAttribute(d, f.va) == w) if (r) p.ba(p.ha(d, e)); else {
                                var s = a.U(d);
                                if (b.I(l, "*") || b.I(l, s)) p.ba(p.ha(d, e)); else for (; d.parentNode != w;) {
                                    var r = d.parentNode, s = a.U(r), q = "a" === s && b.I(l, "a") ? v : x,
                                        s = "button" === s && b.I(l, "button") ? v : x,
                                        y = a.getAttribute(r, f.wa) != w ? v : x;
                                    if (a.getAttribute(r,
                                        f.va) == w && (q || s || y)) {
                                        p.ba(p.ha(r, e));
                                        break
                                    }
                                    d = d.parentNode
                                }
                            }
                        }
                    }
                }
            }, ha: function (d, g) {
                var l = {}, r = f.Ya;
                l.id = a.getAttribute(d, r.id) || a.getAttribute(d, "id") || "";
                l.da = a.getAttribute(d, r.da) || a.getAttribute(d, "class") || "";
                l.ua = a.getAttribute(d, r.ua) || a.Da(d);
                l.content = a.getAttribute(d, r.content) || a.Ba(d);
                l.sa = a.getAttribute(d, r.sa) || a.U(d);
                l.link = a.getAttribute(d, r.link) || a.getAttribute(d, "href") || "";
                l.type = g.type || "click";
                r = b.Ga(d.offsetTop) ? d.offsetTop : 0;
                "click" === g.type ? r = e.la ? g.clientY + Math.max(document.documentElement.scrollTop,
                    document.body.scrollTop) : g.pageY : "touchend" === g.type && (g.oa && b.e(g.oa.changedTouches, "Array") && g.oa.changedTouches.length) && (r = g.oa.changedTouches[0].pageY);
                l.ac = r;
                return l
            }, ba: function (a) {
                var e = b.g;
                a = [+new Date - (h.b.C !== t ? h.b.C : m), e(a.id), e(a.da), e(a.sa), e(a.ua), e(a.link), e(a.content), a.type, a.ac].join("*");
                p.ca(a);
                b.e(this.R(), "Function") && this.R()()
            }, ca: function (a) {
                a.length > f.L || (encodeURIComponent(n.join("!") + a).length > f.L && (p.r(n.join("!")), n = []), n.push(a))
            }, r: function (a) {
                h.b.c.et = 5;
                h.b.c.ep =
                    a;
                h.b.j()
            }, R: function () {
                return function () {
                    n && n.length && (p.r(n.join("!")), n = [])
                }
            }
        };
        b.ma() && "" !== c.aet && d.d("pv-b", function () {
            k.d(document, "click", p.S());
            "ontouchend" in document && k.d(window, "touchend", p.S());
            k.d(window, "unload", p.R())
        });
        return p
    })();
    (function () {
        var b = mt.event, a = mt.i, k = h.s, e = h.A, f = +new Date, d = [], m = w, n = {
            hb: function () {
                return function () {
                    h.b && (h.b.P && c.aet && c.aet.length) && (window.clearTimeout(m), m = window.setTimeout(function () {
                        n.Ta(a.O() + a.H())
                    }, 150))
                }
            }, Ta: function (a) {
                n.ca([+new Date - (h.b.C !== t ? h.b.C : f), a].join("*"))
            }, ca: function (a) {
                if (encodeURIComponent(d.join("!") + a).length > k.L || 3 < d.length) n.r(d.join("!")), d = [];
                d.push(a)
            }, r: function (b) {
                h.b.c.et = 6;
                h.b.c.vh = a.H();
                h.b.c.ep = b;
                h.b.j()
            }, R: function () {
                return function () {
                    d && d.length && (n.r(d.join("!")),
                        d = [])
                }
            }
        };
        mt.lang.ma() && "" !== c.aet && e.d("pv-b", function () {
            b.d(window, "scroll", n.hb());
            b.d(window, "unload", n.R())
        });
        return n
    })();
    (function () {
        function b() {
            return function () {
                h.b.c.nv = 0;
                h.b.c.st = 4;
                h.b.c.et = 3;
                h.b.c.ep = h.ea.vb() + "," + h.ea.qb();
                h.b.j()
            }
        }

        function a() {
            clearTimeout(z);
            var b;
            q && (b = "visible" == document[q]);
            y && (b = !document[y]);
            n = "undefined" == typeof b ? v : b;
            if ((!m || !p) && n && u) s = v, l = +new Date; else if (m && p && (!n || !u)) s = x, r += +new Date - l;
            m = n;
            p = u;
            z = setTimeout(a, 100)
        }

        function k(a) {
            var l = document, b = "";
            if (a in l) b = a; else for (var q = ["webkit", "ms", "moz", "o"], e = 0; e < q.length; e++) {
                var d = q[e] + a.charAt(0).toUpperCase() + a.slice(1);
                if (d in l) {
                    b =
                        d;
                    break
                }
            }
            return b
        }

        function e(l) {
            if (!("focus" == l.type || "blur" == l.type) || !(l.target && l.target != window)) u = "focus" == l.type || "focusin" == l.type ? v : x, a()
        }

        var f = mt.event, d = h.A, m = v, n = v, p = v, u = v, g = +new Date, l = g, r = 0, s = v,
            q = k("visibilityState"), y = k("hidden"), z;
        a();
        (function () {
            var l = q.replace(/[vV]isibilityState/, "visibilitychange");
            f.d(document, l, a);
            f.d(window, "pageshow", a);
            f.d(window, "pagehide", a);
            "object" == typeof document.onfocusin ? (f.d(document, "focusin", e), f.d(document, "focusout", e)) : (f.d(window, "focus", e),
                f.d(window, "blur", e))
        })();
        h.ea = {
            vb: function () {
                return +new Date - g
            }, qb: function () {
                return s ? +new Date - l + r : r
            }
        };
        d.d("pv-b", function () {
            f.d(window, "unload", b())
        });
        d.d("duration-send", b());
        d.d("duration-done", function () {
            l = g = +new Date;
            r = 0
        });
        return h.ea
    })();
    (function () {
        var b = mt.lang, a = h.s, k = h.load, e = {
            Ib: function (e) {
                if ((window._dxt === t || b.e(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var d = h.b.T();
                    k([a.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(d)].join(""), e)
                }
            }, $b: function (a) {
                if (b.e(a, "String") || b.e(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
            }
        };
        return h.fb = e
    })();
    (function () {
        function b(a, b, e, q) {
            if (!(a === t || b === t || q === t)) {
                if ("" === a) return [b, e, q].join("*");
                a = String(a).split("!");
                for (var d, f = x, g = 0; g < a.length; g++) if (d = a[g].split("*"), String(b) === d[0]) {
                    d[1] = e;
                    d[2] = q;
                    a[g] = d.join("*");
                    f = v;
                    break
                }
                f || a.push([b, e, q].join("*"));
                return a.join("!")
            }
        }

        function a(l) {
            for (var b in l) if ({}.hasOwnProperty.call(l, b)) {
                var d = l[b];
                e.e(d, "Object") || e.e(d, "Array") ? a(d) : l[b] = String(d)
            }
        }

        var k = mt.url, e = mt.lang, f = mt.o, d = mt.i, m = h.s, n = h.A, p = h.fb, u = h.load, g = {
            Q: [], Z: 0, Ha: x, z: {ta: "", page: ""},
            init: function () {
                g.h = 0;
                n.d("pv-b", function () {
                    g.gb();
                    g.ib()
                });
                n.d("pv-d", function () {
                    g.jb();
                    g.z.page = ""
                });
                n.d("stag-b", function () {
                    h.b.c.api = g.h || g.Z ? g.h + "_" + g.Z : "";
                    h.b.c.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), g.z.ta, g.z.page].join("!")
                });
                n.d("stag-d", function () {
                    h.b.c.api = 0;
                    g.h = 0;
                    g.Z = 0
                })
            }, gb: function () {
                var a = window._hmt || [];
                if (!a || e.e(a, "Array")) window._hmt = {
                    id: c.id, cmd: {}, push: function () {
                        for (var a = window._hmt, l = 0; l < arguments.length; l++) {
                            var b = arguments[l];
                            e.e(b, "Array") && (a.cmd[a.id].push(b),
                            "_setAccount" === b[0] && (1 < b.length && /^[0-9a-f]{32}$/.test(b[1])) && (b = b[1], a.id = b, a.cmd[b] = a.cmd[b] || []))
                        }
                    }
                }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
            }, ib: function () {
                var a = window._hmt;
                if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], e = /^_track(Event|MobConv|Order|RTEvent)$/, q = 0, d = b.length; q < d; q++) {
                    var f = b[q];
                    e.test(f[0]) ? g.Q.push(f) : g.pa(f)
                }
                a.cmd[c.id] = {push: g.pa}
            }, jb: function () {
                if (0 < g.Q.length) for (var a = 0, b = g.Q.length; a < b; a++) g.pa(g.Q[a]);
                g.Q = w
            }, pa: function (a) {
                var b = a[0];
                if (g.hasOwnProperty(b) &&
                    e.e(g[b], "Function")) g[b](a)
            }, _setAccount: function (a) {
                1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (g.h |= 1)
            }, _setAutoPageview: function (a) {
                if (1 < a.length && (a = a[1], x === a || v === a)) g.h |= 2, h.b.Ea = a
            }, _trackPageview: function (a) {
                if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                    g.h |= 4;
                    h.b.c.sn = h.b.Ca();
                    h.b.c.et = 0;
                    h.b.c.ep = "";
                    h.b.c.vl = d.O() + d.H();
                    h.b.c.kb = 0;
                    h.b.ka ? (h.b.c.nv = 0, h.b.c.st = 4) : h.b.ka = v;
                    var b = h.b.c.u, e = h.b.c.su;
                    h.b.c.u = m.protocol + "//" + document.location.host + a[1];
                    g.Ha || (h.b.c.su = document.location.href);
                    h.b.j();
                    h.b.c.u = b;
                    h.b.c.su = e;
                    h.b.C = +new Date
                }
            }, _trackEvent: function (a) {
                2 < a.length && (g.h |= 8, h.b.c.nv = 0, h.b.c.st = 4, h.b.c.et = 4, h.b.c.ep = e.g(a[1]) + "*" + e.g(a[2]) + (a[3] ? "*" + e.g(a[3]) : "") + (a[4] ? "*" + e.g(a[4]) : ""), h.b.j())
            }, _setCustomVar: function (a) {
                if (!(4 > a.length)) {
                    var b = a[1], d = a[4] || 3;
                    if (0 < b && 6 > b && 0 < d && 4 > d) {
                        g.Z++;
                        for (var q = (h.b.c.cv || "*").split("!"), y = q.length; y < b - 1; y++) q.push("*");
                        q[b - 1] = d + "*" + e.g(a[2]) + "*" + e.g(a[3]);
                        h.b.c.cv = q.join("!");
                        a = h.b.c.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g,
                            "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Sb("Hm_cv_" + c.id)
                    }
                }
            }, _setUserTag: function (a) {
                if (!(3 > a.length)) {
                    var d = e.g(a[1]);
                    a = e.g(a[2]);
                    if (d !== t && a !== t) {
                        var f = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), f = b(f, d, 1, a);
                        h.b.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age)
                    }
                }
            }, _setVisitTag: function (a) {
                if (!(3 > a.length)) {
                    var d = e.g(a[1]);
                    a = e.g(a[2]);
                    if (d !== t && a !== t) {
                        var f = g.z.ta, f = b(f, d, 2, a);
                        g.z.ta = f
                    }
                }
            }, _setPageTag: function (a) {
                if (!(3 > a.length)) {
                    var d = e.g(a[1]);
                    a = e.g(a[2]);
                    if (d !== t && a !== t) {
                        var f = g.z.page, f = b(f, d, 3, a);
                        g.z.page = f
                    }
                }
            }, _setReferrerOverride: function (a) {
                1 < a.length && (h.b.c.su = a[1].charAt && "/" === a[1].charAt(0) ? m.protocol + "//" + window.location.host + a[1] : a[1], g.Ha = v)
            }, _trackOrder: function (b) {
                b = b[1];
                e.e(b, "Object") && (a(b), g.h |= 16, h.b.c.nv = 0, h.b.c.st = 4, h.b.c.et = 94, h.b.c.ep = f.stringify(b), h.b.j())
            }, _trackMobConv: function (a) {
                if (a = {
                    webim: 1,
                    tel: 2,
                    map: 3,
                    sms: 4,
                    callback: 5,
                    share: 6
                }[a[1]]) g.h |= 32, h.b.c.et = 93, h.b.c.ep = a, h.b.j()
            }, _trackRTPageview: function (b) {
                b = b[1];
                e.e(b, "Object") &&
                (a(b), b = f.stringify(b), 512 >= encodeURIComponent(b).length && (g.h |= 64, h.b.c.rt = b))
            }, _trackRTEvent: function (b) {
                b = b[1];
                if (e.e(b, "Object")) {
                    a(b);
                    b = encodeURIComponent(f.stringify(b));
                    var d = function (a) {
                        var b = h.b.c.rt;
                        g.h |= 128;
                        h.b.c.et = 90;
                        h.b.c.rt = a;
                        h.b.j();
                        h.b.c.rt = b
                    }, k = b.length;
                    if (900 >= k) d.call(this, b); else for (var k = Math.ceil(k / 900), q = "block|" + Math.round(Math.random() * m.K).toString(16) + "|" + k + "|", y = [], z = 0; z < k; z++) y.push(z), y.push(b.substring(900 * z, 900 * z + 900)), d.call(this, q + y.join("|")), y = []
                }
            }, _setUserId: function (a) {
                a =
                    a[1];
                p.Ib();
                p.$b(a)
            }, _setAutoTracking: function (a) {
                if (1 < a.length && (a = a[1], x === a || v === a)) h.b.Fa = a
            }, _setAutoEventTracking: function (a) {
                if (1 < a.length && (a = a[1], x === a || v === a)) h.b.P = a
            }, _trackPageDuration: function (a) {
                1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.b.c.et = 3, h.b.c.ep = a, h.b.j())) : n.G("duration-send");
                n.G("duration-done")
            }, _require: function (a) {
                1 < a.length && (a = a[1], m.Wa.test(k.N(a)) && u(a))
            }, _providePlugin: function (a) {
                if (1 < a.length) {
                    var b = window._hmt, d = a[1];
                    a = a[2];
                    if (e.I(m.Ja, d) && e.e(a, "Function") &&
                        (b.plugins = b.plugins || {}, b.D = b.D || {}, b.plugins[d] = a, b.w = b.w || [], a = b.w.slice(), d && a.length && a[0][1] === d)) for (var q = 0, f = a.length; q < f; q++) {
                        var g = a[q][2] || {};
                        if (b.plugins[d] && !b.D[d]) b.D[d] = new b.plugins[d](g), b.w.shift(); else break
                    }
                }
            }, _requirePlugin: function (a) {
                if (1 < a.length) {
                    var b = window._hmt, d = a[1], q = a[2] || {};
                    if (e.I(m.Ja, d)) if (b.plugins = b.plugins || {}, b.D = b.D || {}, b.plugins[d] && !b.D[d]) b.D[d] = new b.plugins[d](q); else {
                        b.w = b.w || [];
                        for (var q = 0, f = b.w.length; q < f; q++) if (b.w[q][1] === d) return;
                        b.w.push(a);
                        g._require([w,
                            m.Ob + d + ".js"])
                    }
                }
            }, _trackCustomEvent: function (a) {
                if (1 < a.length) {
                    var b = e.g(a[1]), d = "";
                    a = a[2];
                    if (e.e(a, "Object")) {
                        var d = [], q;
                        for (q in a) a.hasOwnProperty(q) && (d.push(e.g(q)), d.push(e.g(a[q])));
                        d = "*" + d.join("*")
                    }
                    h.b.c.et = 7;
                    h.b.c.ep = "ce!_iden*" + b + d;
                    h.b.j()
                }
            }
        };
        g.init();
        h.Xa = g;
        return h.Xa
    })();
    (function () {
        function b() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = v, this.c = {}, this.Fa = this.Ea = v, this.P = l.P, this.xa = f.ma() && 0 < c.aet.length ? c.aet.split(",") : "", this.ka = x, this.init())
        }

        var a = mt.url, k = mt.Na, e = mt.ra, f = mt.lang, d = mt.cookie, m = mt.i, n = mt.localStorage,
            p = mt.sessionStorage, u = mt.o, g = mt.event, l = h.s, r = h.load, s = h.A;
        b.prototype = {
            na: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, Ia: function (a,
                             b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, V: function (b) {
                for (var d = 0; d < c.dm.length; d++) if (-1 < c.dm[d].indexOf("/")) {
                    if (this.Ia(b, c.dm[d])) return v
                } else {
                    var e = a.N(b);
                    if (e && this.na(e, c.dm[d])) return v
                }
                return x
            }, T: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.na(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, ga: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.Ia(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            }, xb: function () {
                if (!document.referrer) return l.F - l.J > c.vdur ? 1 : 4;
                var b = x;
                this.V(document.referrer) && this.V(document.location.href) ? b = v : (b = a.N(document.referrer), b = this.na(b || "", document.location.hostname));
                return b ? l.F - l.J > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return d.get(a) || p.get(a) || n.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, e) {
                try {
                    d.set(a, b, {domain: this.T(), path: this.ga(), M: e}), e ? n.set(a, b, e) : p.set(a, b)
                } catch (f) {
                }
            }, Sb: function (a) {
                try {
                    d.set(a, "", {
                        domain: this.T(), path: this.ga(),
                        M: -1
                    }), p.remove(a), n.remove(a)
                } catch (b) {
                }
            }, Yb: function () {
                var a, b, e, f, g;
                l.J = this.getData("Hm_lpvt_" + c.id) || 0;
                13 === l.J.length && (l.J = Math.round(l.J / 1E3));
                b = this.xb();
                a = 4 !== b ? 1 : 0;
                if (e = this.getData("Hm_lvt_" + c.id)) {
                    f = e.split(",");
                    for (g = f.length - 1; 0 <= g; g--) 13 === f[g].length && (f[g] = "" + Math.round(f[g] / 1E3));
                    for (; 2592E3 < l.F - f[0];) f.shift();
                    g = 4 > f.length ? 2 : 3;
                    for (1 === a && f.push(l.F); 4 < f.length;) f.shift();
                    e = f.join(",");
                    f = f[f.length - 1]
                } else e = l.F, f = "", g = 1;
                this.setData("Hm_lvt_" + c.id, e, c.age);
                this.setData("Hm_lpvt_" +
                    c.id, l.F);
                e = d.Jb(this.T(), this.ga());
                if (0 === c.nv && this.V(document.location.href) && ("" === document.referrer || this.V(document.referrer))) a = 0, b = 4;
                this.c.nv = a;
                this.c.st = b;
                this.c.cc = e;
                this.c.lt = f;
                this.c.lv = g
            }, La: function () {
                for (var a = [], b = this.c.et, d = +new Date, e = 0, f = l.Oa.length; e < f; e++) {
                    var g = l.Oa[e], k = this.c[g];
                    "undefined" !== typeof k && "" !== k && ("tt" !== g || "tt" === g && 0 === b) && (("ct" !== g || "ct" === g && 0 === b) && ("kb" !== g || "kb" === g && 3 === b)) && a.push(g + "=" + encodeURIComponent(k))
                }
                switch (b) {
                    case 0:
                        this.c.rt && a.push("rt=" +
                            encodeURIComponent(this.c.rt));
                        break;
                    case 5:
                        a.push("_lpt=" + this.C);
                        a.push("_ct=" + d);
                        break;
                    case 6:
                        a.push("_lpt=" + this.C);
                        a.push("_ct=" + d);
                        break;
                    case 90:
                        this.c.rt && a.push("rt=" + this.c.rt)
                }
                return a.join("&")
            }, Zb: function () {
                this.Yb();
                this.c.si = c.id;
                this.c.sn = this.Ca();
                this.c.su = document.referrer;
                this.c.hh = window.location.hash;
                this.c.ds = m.Tb;
                this.c.cl = m.colorDepth + "-bit";
                this.c.ln = String(m.language).toLowerCase();
                this.c.ja = m.javaEnabled ? 1 : 0;
                this.c.ck = m.cookieEnabled ? 1 : 0;
                this.c.lo = "number" === typeof _bdhm_top ?
                    1 : 0;
                this.c.fl = e.zb();
                this.c.v = "1.2.50";
                this.c.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.c.tt = document.title || "";
                this.c.vl = m.O() + m.H();
                var b = document.location.href;
                this.c.cm = a.m(b, l.Eb) || "";
                this.c.cp = a.m(b, l.Fb) || a.m(b, l.ec) || "";
                this.c.cw = a.m(b, l.Db) || a.m(b, l.gc) || "";
                this.c.ci = a.m(b, l.Bb) || a.m(b, l.dc) || "";
                this.c.cf = a.m(b, l.Gb) || a.m(b, l.fc) || "";
                this.c.cu = a.m(b, l.Cb) || a.m(b, l.bc) || ""
            }, init: function () {
                try {
                    this.Zb(), 0 === this.c.nv ? this.Xb() : this.za(), h.b = this, this.$a(), this.Za(), s.G("pv-b"),
                        this.Wb()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    k.log(l.X + "//" + l.qa + "?" + b.join("&"))
                }
            }, Wb: function () {
                function a() {
                    s.G("pv-d")
                }

                this.Ea ? (this.ka = v, this.c.et = 0, this.c.ep = "", this.c.vl = m.O() + m.H(), this.j(a)) : a();
                this.C = +new Date
            }, j: function (a) {
                if (this.Fa) {
                    var b = this;
                    b.c.rnd = Math.round(Math.random() * l.K);
                    s.G("stag-b");
                    var d = l.X + "//" + l.qa + "?" + b.La();
                    s.G("stag-d");
                    b.Va(d);
                    k.log(d,
                        function (d) {
                            b.Ka(d);
                            f.e(a, "Function") && a.call(b)
                        })
                }
            }, $a: function () {
                var b = document.location.hash.substring(1), d = RegExp(c.id),
                    e = a.N(document.referrer) === l.Pa ? 1 : 0, f = a.m(b, "jn"),
                    g = /^heatlink$|^select$|^pageclick$/.test(f);
                b && (d.test(b) && e && g) && (this.c.rnd = Math.round(Math.random() * l.K), b = document.createElement("script"), b.setAttribute("type", "text/javascript"), b.setAttribute("charset", "utf-8"), b.setAttribute("src", l.protocol + "//" + c.js + f + ".js?" + this.c.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(b,
                    f))
            }, Za: function () {
                if (window.postMessage && window.self !== window.parent) {
                    var b = this;
                    g.d(window, "message", function (d) {
                        if (a.N(d.origin) === l.Pa) {
                            var e = d.data || {};
                            d = e.sd || "";
                            var e = e.jn || "", f = /^customevent$/.test(e);
                            RegExp(c.id).test(d) && f && (b.c.rnd = Math.round(Math.random() * l.K), r(l.protocol + "//" + c.js + e + ".js?" + b.c.rnd))
                        }
                    });
                    window.parent.postMessage({
                        id: c.id,
                        url: document.location.href,
                        status: "__Messenger__hmLoaded"
                    }, "*")
                }
            }, Va: function (a) {
                var b;
                try {
                    b = u.parse(p.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e =
                    this.c.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                p.set("Hm_unsent_" + c.id, u.stringify(b))
            }, Ka: function (a) {
                var b;
                try {
                    b = u.parse(p.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                        b.splice(e, 1);
                        break
                    }
                    b.length ? p.set("Hm_unsent_" + c.id, u.stringify(b)) : this.za()
                }
            }, za: function () {
                p.remove("Hm_unsent_" + c.id)
            }, Xb: function () {
                var a = this,
                    b;
                try {
                    b = u.parse(p.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) for (var e = function (b) {
                    k.log(l.X + "//" + b, function (b) {
                        a.Ka(b)
                    })
                }, f = 0; f < b.length; f++) e(b[f])
            }, Ca: function () {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new b
    })();
    (function () {
        var b = mt.event, a = mt.lang, k = h.s;
        if (c.kbtrk && "undefined" !== typeof h.b) {
            h.b.c.kb = a.Ga(h.b.c.kb) ? h.b.c.kb : 0;
            var e = function () {
                h.b.c.et = 85;
                h.b.c.ep = h.b.c.kb;
                h.b.j()
            };
            b.d(document, "keyup", function () {
                h.b.c.kb++
            });
            b.d(window, "unload", function () {
                e()
            });
            setInterval(e, k.Kb)
        }
    })();
    var B = h.s, C = h.load;
    c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    (function () {
        var b = mt.i, a = mt.lang, k = mt.event, e = mt.o;
        if ("undefined" !== typeof h.b && (c.med || (!b.la || 7 < b.Hb) && c.cvcc)) {
            var f, d, m, n, p = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, u = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === x) return x
            }, g = function (b, d) {
                var g = {};
                g.n = f;
                g.t = "clk";
                g.v = b;
                if (d) {
                    var k = d.getAttribute("href"), l = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : w,
                        n = d.getAttribute("id") || "";
                    m.test(k) ? (g.sn = "mediate",
                        g.snv = k) : a.e(l, "String") && m.test(l) && (g.sn = "wrap", g.snv = l);
                    g.id = n
                }
                h.b.c.et = 86;
                h.b.c.ep = e.stringify(g);
                h.b.j();
                for (g = +new Date; 400 >= +new Date - g;) ;
            };
            if (c.med) d = "/zoosnet", f = "swt", m = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, n = {
                click: function () {
                    for (var a = [], b = p(document.getElementsByTagName("a")), b = [].concat.apply(b, p(document.getElementsByTagName("area"))), b = [].concat.apply(b, p(document.getElementsByTagName("img"))), d, e, f = 0, g = b.length; f < g; f++) d = b[f], e = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (m.test(e) || m.test(d)) && a.push(b[f]);
                    return a
                }
            }; else if (c.cvcc) {
                d = "/other-comm";
                f = "other";
                m = c.cvcc.q || t;
                var l = c.cvcc.id || t;
                n = {
                    click: function () {
                        for (var a = [], b = p(document.getElementsByTagName("a")), b = [].concat.apply(b, p(document.getElementsByTagName("area"))), b = [].concat.apply(b, p(document.getElementsByTagName("img"))), d, e, f, g = 0, k = b.length; g < k; g++) d = b[g], m !== t ? (e = d.getAttribute("onclick"), f = d.getAttribute("href"), l ? (d = d.getAttribute("id"), (m.test(e) || m.test(f) || l.test(d)) &&
                        a.push(b[g])) : (m.test(e) || m.test(f)) && a.push(b[g])) : l !== t && (d = d.getAttribute("id"), l.test(d) && a.push(b[g]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof n && "undefined" !== typeof m) {
                var r;
                d += /\/$/.test(d) ? "" : "/";
                var s = function (b, e) {
                    if (r === e) return g(d + b, e), x;
                    if (a.e(e, "Array") || a.e(e, "NodeList")) for (var f = 0, k = e.length; f < k; f++) if (r === e[f]) return g(d + b + "/" + (f + 1), e[f]), x
                };
                k.d(document, "mousedown", function (b) {
                    b = b || window.event;
                    r = b.target || b.srcElement;
                    var d = {};
                    for (u(n, function (b, e) {
                        d[b] = a.e(e, "Function") ? e() : document.getElementById(e)
                    }); r &&
                         r !== document && u(d, s) !== x;) r = r.parentNode
                })
            }
        }
    })();
    (function () {
        var b = mt.f, a = mt.lang, k = mt.event, e = mt.o;
        if ("undefined" !== typeof h.b && a.e(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var f = {
                Sa: function () {
                    for (var a = c.cvcf.length, e, n = 0; n < a; n++) (e = b.Aa(decodeURIComponent(c.cvcf[n]))) && k.d(e, "click", f.fa())
                }, fa: function () {
                    return function () {
                        h.b.c.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.b.c.ep = e.stringify(a);
                        h.b.j()
                    }
                }
            };
            b.Qb(function () {
                f.Sa()
            })
        }
    })();
    (function () {
        var b = mt.event, a = mt.o;
        if (c.med && "undefined" !== typeof h.b) {
            var k = +new Date, e = {n: "anti", sb: 0, kb: 0, clk: 0}, f = function () {
                h.b.c.et = 86;
                h.b.c.ep = a.stringify(e);
                h.b.j()
            };
            b.d(document, "click", function () {
                e.clk++
            });
            b.d(document, "keyup", function () {
                e.kb = 1
            });
            b.d(window, "scroll", function () {
                e.sb++
            });
            b.d(window, "unload", function () {
                e.t = +new Date - k;
                f()
            });
            b.d(window, "load", function () {
                setTimeout(f, 5E3)
            })
        }
    })();
    c.spa !== t && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]));
})();
