/// <reference path="../ts/typings/index.d.ts" />
import early = require("../dist/index.js");

describe("early",function(){
    it(".start()",function(done){
        this.timeout(10000);
        early.start("early test");
        setTimeout(done,5000);
    });
    it(".stop()",function(){
        early.stop();
    })
})