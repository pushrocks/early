"use strict";
/// <reference path="./typings/index.d.ts" />
var colors = require("colors");
var readline = require("readline");
var childProcess = require("child_process");
var earlyChild;
// exports
exports.start = function (moduleNameArg, loaderLengthArg) {
    if (moduleNameArg === void 0) { moduleNameArg = ""; }
    if (loaderLengthArg === void 0) { loaderLengthArg = "10"; }
    earlyChild = childProcess.fork("./dist/early.child.js", [], {
        env: {
            moduleNameArg: moduleNameArg,
            loaderLengthArg: loaderLengthArg
        }
    });
};
exports.stop = function () {
    earlyChild.kill();
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNkM7QUFDN0MsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVuQyxJQUFPLFlBQVksV0FBVyxlQUFlLENBQUMsQ0FBQztBQUMvQyxJQUFJLFVBQVUsQ0FBQztBQUNmLFVBQVU7QUFDQyxhQUFLLEdBQUcsVUFBUyxhQUF5QixFQUFDLGVBQTZCO0lBQXZELDZCQUF5QixHQUF6QixrQkFBeUI7SUFBQywrQkFBNkIsR0FBN0Isc0JBQTZCO0lBQy9FLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFDLEVBQUUsRUFBQztRQUN0RCxHQUFHLEVBQUU7WUFDRCxhQUFhLEVBQUMsYUFBYTtZQUMzQixlQUFlLEVBQUMsZUFBZTtTQUNsQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVTLFlBQUksR0FBRztJQUNkLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5sZXQgY29sb3JzID0gcmVxdWlyZShcImNvbG9yc1wiKTtcclxubGV0IHJlYWRsaW5lID0gcmVxdWlyZShcInJlYWRsaW5lXCIpO1xyXG5cclxuaW1wb3J0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xyXG5sZXQgZWFybHlDaGlsZDtcclxuLy8gZXhwb3J0c1xyXG5leHBvcnQgbGV0IHN0YXJ0ID0gZnVuY3Rpb24obW9kdWxlTmFtZUFyZzpzdHJpbmcgPSBcIlwiLGxvYWRlckxlbmd0aEFyZzpzdHJpbmcgPSBcIjEwXCIpe1xyXG4gICAgZWFybHlDaGlsZCA9IGNoaWxkUHJvY2Vzcy5mb3JrKFwiLi9kaXN0L2Vhcmx5LmNoaWxkLmpzXCIsW10se1xyXG4gICAgICAgIGVudjoge1xyXG4gICAgICAgICAgICBtb2R1bGVOYW1lQXJnOm1vZHVsZU5hbWVBcmcsXHJcbiAgICAgICAgICAgIGxvYWRlckxlbmd0aEFyZzpsb2FkZXJMZW5ndGhBcmdcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBlYXJseUNoaWxkLmtpbGwoKTtcclxufTtcclxuXHJcbiJdfQ==
