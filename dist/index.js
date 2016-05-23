"use strict";
var path = require("path");
var childProcess = require("child_process");
var earlyChild;
// exports
exports.start = function (moduleNameArg, loaderLengthArg) {
    if (moduleNameArg === void 0) { moduleNameArg = ""; }
    if (loaderLengthArg === void 0) { loaderLengthArg = "10"; }
    earlyChild = childProcess.fork(path.join(__dirname, "early.child.js"), [], {
        env: {
            moduleNameArg: moduleNameArg,
            loaderLengthArg: loaderLengthArg,
            CI: process.env.CI
        }
    });
};
exports.stop = function () {
    earlyChild.kill();
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFPLElBQUksV0FBVyxNQUFNLENBQUMsQ0FBQztBQUU5QixJQUFPLFlBQVksV0FBVyxlQUFlLENBQUMsQ0FBQztBQUMvQyxJQUFJLFVBQVUsQ0FBQztBQUNmLFVBQVU7QUFDQyxhQUFLLEdBQUcsVUFBUyxhQUF5QixFQUFDLGVBQTZCO0lBQXZELDZCQUF5QixHQUF6QixrQkFBeUI7SUFBQywrQkFBNkIsR0FBN0Isc0JBQTZCO0lBQy9FLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBRSxFQUFDO1FBQ3BFLEdBQUcsRUFBRTtZQUNELGFBQWEsRUFBQyxhQUFhO1lBQzNCLGVBQWUsRUFBQyxlQUFlO1lBQy9CLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7U0FDckI7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFUyxZQUFJLEdBQUc7SUFDZCxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdEIsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuaW1wb3J0IGNvbG9ycyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcblxyXG5pbXBvcnQgY2hpbGRQcm9jZXNzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XHJcbmxldCBlYXJseUNoaWxkO1xyXG4vLyBleHBvcnRzXHJcbmV4cG9ydCBsZXQgc3RhcnQgPSBmdW5jdGlvbihtb2R1bGVOYW1lQXJnOnN0cmluZyA9IFwiXCIsbG9hZGVyTGVuZ3RoQXJnOnN0cmluZyA9IFwiMTBcIil7XHJcbiAgICBlYXJseUNoaWxkID0gY2hpbGRQcm9jZXNzLmZvcmsocGF0aC5qb2luKF9fZGlybmFtZSxcImVhcmx5LmNoaWxkLmpzXCIpLFtdLHtcclxuICAgICAgICBlbnY6IHtcclxuICAgICAgICAgICAgbW9kdWxlTmFtZUFyZzptb2R1bGVOYW1lQXJnLFxyXG4gICAgICAgICAgICBsb2FkZXJMZW5ndGhBcmc6bG9hZGVyTGVuZ3RoQXJnLFxyXG4gICAgICAgICAgICBDSTogcHJvY2Vzcy5lbnYuQ0lcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBlYXJseUNoaWxkLmtpbGwoKTtcclxufTtcclxuXHJcbiJdfQ==
