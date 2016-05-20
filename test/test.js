"use strict";
/// <reference path="../ts/typings/index.d.ts" />
var early = require("../dist/index.js");
describe("early", function () {
    it(".start()", function (done) {
        this.timeout(10000);
        early.start("early test");
        setTimeout(done, 5000);
    });
    it(".stop()", function () {
        early.stop();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDtBQUNqRCxJQUFPLEtBQUssV0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTNDLFFBQVEsQ0FBQyxPQUFPLEVBQUM7SUFDYixFQUFFLENBQUMsVUFBVSxFQUFDLFVBQVMsSUFBSTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsVUFBVSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxTQUFTLEVBQUM7UUFDVCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCBlYXJseSA9IHJlcXVpcmUoXCIuLi9kaXN0L2luZGV4LmpzXCIpO1xyXG5cclxuZGVzY3JpYmUoXCJlYXJseVwiLGZ1bmN0aW9uKCl7XHJcbiAgICBpdChcIi5zdGFydCgpXCIsZnVuY3Rpb24oZG9uZSl7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0KDEwMDAwKTtcclxuICAgICAgICBlYXJseS5zdGFydChcImVhcmx5IHRlc3RcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChkb25lLDUwMDApO1xyXG4gICAgfSk7XHJcbiAgICBpdChcIi5zdG9wKClcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGVhcmx5LnN0b3AoKTtcclxuICAgIH0pXHJcbn0pIl19
