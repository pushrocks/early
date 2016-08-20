"use strict";
require("typings-test");
const early = require("../dist/index");
describe("early", function () {
    it(".start()", function (done) {
        this.timeout(10000);
        early.start("early");
        setTimeout(done, 5000);
    });
    it(".stop()", function (done) {
        early.stop()
            .then(done);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsTUFBTyxLQUFLLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFFeEMsUUFBUSxDQUFDLE9BQU8sRUFBQztJQUNiLEVBQUUsQ0FBQyxVQUFVLEVBQUMsVUFBUyxJQUFJO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixVQUFVLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLFNBQVMsRUFBQyxVQUFTLElBQUk7UUFDdEIsS0FBSyxDQUFDLElBQUksRUFBRTthQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=