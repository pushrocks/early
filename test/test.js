"use strict";
require("typings-test");
const early = require("../dist/index");
describe('early', function () {
    it('.start()', function (done) {
        this.timeout(10000);
        early.start('early');
        setTimeout(done, 5000);
    });
    it('.stop()', function (done) {
        early.stop()
            .then(() => {
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQix1Q0FBdUM7QUFFdkMsUUFBUSxDQUFDLE9BQU8sRUFBRTtJQUNoQixFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsSUFBSTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxJQUFJO1FBQzFCLEtBQUssQ0FBQyxJQUFJLEVBQUU7YUFDVCxJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9