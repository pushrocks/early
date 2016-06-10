import "typings-test";
import early = require("../dist/index");

describe("early",function(){
    it(".start()",function(done){
        this.timeout(10000);
        early.start("early");
        setTimeout(done,5000);
    });
    it(".stop()",function(){
        early.stop();
    })
})