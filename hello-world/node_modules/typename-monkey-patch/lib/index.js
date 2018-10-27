"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var objectKeyFilter = require("object-key-filter");
var reactApollo = require('react-apollo');
exports.originalGraphql = reactApollo.graphql;
exports.graphqlWithoutTypename = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (Component) {
        var SubstituteComponent = function (_a) {
            var data = _a.data, props = __rest(_a, ["data"]);
            var dataWithoutTypename = typeof data === 'object' ? objectKeyFilter(data, ['__typename'], true) : data;
            return React.createElement(Component, __assign({}, props, { data: dataWithoutTypename }));
        };
        return exports.originalGraphql.apply(void 0, args)(SubstituteComponent);
    };
};
reactApollo.graphql = exports.graphqlWithoutTypename;
//# sourceMappingURL=index.js.map