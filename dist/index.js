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
            loaderLengthArg: loaderLengthArg
        }
    });
};
exports.stop = function () {
    earlyChild.kill();
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFPLElBQUksV0FBVyxNQUFNLENBQUMsQ0FBQztBQUU5QixJQUFPLFlBQVksV0FBVyxlQUFlLENBQUMsQ0FBQztBQUMvQyxJQUFJLFVBQVUsQ0FBQztBQUNmLFVBQVU7QUFDQyxhQUFLLEdBQUcsVUFBUyxhQUF5QixFQUFDLGVBQTZCO0lBQXZELDZCQUF5QixHQUF6QixrQkFBeUI7SUFBQywrQkFBNkIsR0FBN0Isc0JBQTZCO0lBQy9FLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBRSxFQUFDO1FBQ3BFLEdBQUcsRUFBRTtZQUNELGFBQWEsRUFBQyxhQUFhO1lBQzNCLGVBQWUsRUFBQyxlQUFlO1NBQ2xDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRVMsWUFBSSxHQUFHO0lBQ2QsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCBjb2xvcnMgPSByZXF1aXJlKFwiY29sb3JzXCIpO1xyXG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5cclxuaW1wb3J0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xyXG5sZXQgZWFybHlDaGlsZDtcclxuLy8gZXhwb3J0c1xyXG5leHBvcnQgbGV0IHN0YXJ0ID0gZnVuY3Rpb24obW9kdWxlTmFtZUFyZzpzdHJpbmcgPSBcIlwiLGxvYWRlckxlbmd0aEFyZzpzdHJpbmcgPSBcIjEwXCIpe1xyXG4gICAgZWFybHlDaGlsZCA9IGNoaWxkUHJvY2Vzcy5mb3JrKHBhdGguam9pbihfX2Rpcm5hbWUsXCJlYXJseS5jaGlsZC5qc1wiKSxbXSx7XHJcbiAgICAgICAgZW52OiB7XHJcbiAgICAgICAgICAgIG1vZHVsZU5hbWVBcmc6bW9kdWxlTmFtZUFyZyxcclxuICAgICAgICAgICAgbG9hZGVyTGVuZ3RoQXJnOmxvYWRlckxlbmd0aEFyZ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBzdG9wID0gZnVuY3Rpb24oKXtcclxuICAgIGVhcmx5Q2hpbGQua2lsbCgpO1xyXG59O1xyXG5cclxuIl19
