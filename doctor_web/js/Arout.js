﻿
(function (q, d, C) {
    'use strict'; function v(r, k, h) {
        return {
            restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (a, f, b, c, y) {
                function z() { l && (h.cancel(l), l = null); m && (m.$destroy(), m = null); n && (l = h.leave(n), l.then(function () { l = null }), n = null) } function x() {
                    var b = r.current && r.current.locals; if (d.isDefined(b && b.$template)) {
                        var b = a.$new(), c = r.current; n = y(b, function (b) { h.enter(b, null, n || f).then(function () { !d.isDefined(t) || t && !a.$eval(t) || k() }); z() }); m = c.scope = b; m.$emit("$viewContentLoaded");
                        m.$eval(w)
                    } else z()
                } var m, n, l, t = b.autoscroll, w = b.onload || ""; a.$on("$routeChangeSuccess", x); x()
            }
        }
    } function A(d, k, h) { return { restrict: "ECA", priority: -400, link: function (a, f) { var b = h.current, c = b.locals; f.html(c.$template); var y = d(f.contents()); b.controller && (c.$scope = a, c = k(b.controller, c), b.controllerAs && (a[b.controllerAs] = c), f.data("$ngControllerController", c), f.children().data("$ngControllerController", c)); y(a) } } } q = d.module("ngRoute", ["ng"]).provider("$route", function () {
        function r(a, f) {
            return d.extend(Object.create(a),
            f)
     } function k(a, d) { var b = d.caseInsensitiveMatch, c = { originalPath: a, regexp: a }, h = c.keys = []; a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, d, b, c) { a = "?" === c ? c : null; c = "*" === c ? c : null; h.push({ name: b, optional: !!a }); d = d || ""; return "" + (a ? "" : d) + "(?:" + (a ? d : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "") }).replace(/([\/$\*])/g, "\\$1"); c.regexp = new RegExp("^" + a + "$", b ? "i" : ""); return c } var h = {}; this.when = function (a, f) {
            var b = d.copy(f); d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);
            d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch); h[a] = d.extend(b, a && k(a, b)); if (a) { var c = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/"; h[c] = d.extend({ redirectTo: a }, k(c, b)) } return this
        }; this.caseInsensitiveMatch = !1; this.otherwise = function (a) { "string" === typeof a && (a = { redirectTo: a }); this.when(null, a); return this }; this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (a, f, b, c, k, q, x) {
            function m(b) {
                var e = s.current;
                (v = (p = l()) && e && p.$$route === e.$$route && d.equals(p.pathParams, e.pathParams) && !p.reloadOnSearch && !w) || !e && !p || a.$broadcast("$routeChangeStart", p, e).defaultPrevented && b && b.preventDefault()
            } function n() {
                var u = s.current, e = p; if (v) u.params = e.params, d.copy(u.params, b), a.$broadcast("$routeUpdate", u); else if (e || u) w = !1, (s.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? f.path(t(e.redirectTo, e.params)).search(e.params).replace() : f.url(e.redirectTo(e.pathParams, f.path(), f.search())).replace()), c.when(e).then(function () {
                    if (e) {
                        var a =
                        d.extend({}, e.resolve), b, g; d.forEach(a, function (b, e) { a[e] = d.isString(b) ? k.get(b) : k.invoke(b, null, null, e) }); d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(g = e.templateUrl) && (d.isFunction(g) && (g = g(e.params)), g = x.getTrustedResourceUrl(g), d.isDefined(g) && (e.loadedTemplateUrl = g, b = q(g))); d.isDefined(b) && (a.$template = b); return c.all(a)
                    }
                }).then(function (c) { e == s.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast("$routeChangeSuccess", e, u)) }, function (b) {
                    e == s.current && a.$broadcast("$routeChangeError",
                    e, u, b)
                })
            } function l() { var a, b; d.forEach(h, function (c, h) { var g; if (g = !b) { var k = f.path(); g = c.keys; var m = {}; if (c.regexp) if (k = c.regexp.exec(k)) { for (var l = 1, n = k.length; l < n; ++l) { var p = g[l - 1], q = k[l]; p && q && (m[p.name] = q) } g = m } else g = null; else g = null; g = a = g } g && (b = r(c, { params: d.extend({}, f.search(), a), pathParams: a }), b.$$route = c) }); return b || h[null] && r(h[null], { params: {}, pathParams: {} }) } function t(a, b) {
                var c = []; d.forEach((a || "").split(":"), function (a, d) {
                    if (0 === d) c.push(a); else {
                        var f = a.match(/(\w+)(?:[?*])?(.*)/),
                        h = f[1]; c.push(b[h]); c.push(f[2] || ""); delete b[h]
                    }
                }); return c.join("")
            } var w = !1, p, v, s = { routes: h, reload: function () { w = !0; a.$evalAsync(function () { m(); n() }) }, updateParams: function (a) { if (this.current && this.current.$$route) a = d.extend({}, this.current.params, a), f.path(t(this.current.$$route.originalPath, a)), f.search(a); else throw B("norout"); } }; a.$on("$locationChangeStart", m); a.$on("$locationChangeSuccess", n); return s
        }]
    }); var B = d.$$minErr("ngRoute"); q.provider("$routeParams", function () { this.$get = function () { return {} } });
    q.directive("ngView", v); q.directive("ngView", A); v.$inject = ["$route", "$anchorScroll", "$animate"]; A.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map
