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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQix1Q0FBdUM7QUFFdkMsUUFBUSxDQUFDLE9BQU8sRUFBQztJQUNiLEVBQUUsQ0FBQyxVQUFVLEVBQUMsVUFBUyxJQUFJO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixVQUFVLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLFNBQVMsRUFBQyxVQUFTLElBQUk7UUFDdEIsS0FBSyxDQUFDLElBQUksRUFBRTthQUNQLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=