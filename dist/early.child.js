"use strict";
require("typings-global");
var colors = require("colors");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var moduleName;
var loaderLength;
var frameCounter = 0;
var makeFrame = function () {
    var resultString = "["
        + "/".green.repeat(frameCounter)
        + " ".repeat(loaderLength - frameCounter)
        + "]"
        + " starting "
        + moduleName.cyan;
    if (frameCounter == loaderLength) {
        frameCounter = 0;
    }
    else {
        frameCounter++;
    }
    return resultString;
};
var logEarlyAbort = false;
var logEarly = function () {
    rl.write(null, { ctrl: true, name: 'u' });
    rl.write(makeFrame());
    setTimeout(function () {
        if (!logEarlyAbort)
            logEarly();
    }, 80);
};
var start = function (moduleNameArg, loaderLengthArg) {
    if (moduleNameArg === void 0) { moduleNameArg = ""; }
    if (loaderLengthArg === void 0) { loaderLengthArg = "10"; }
    moduleName = moduleNameArg;
    loaderLength = parseInt(loaderLengthArg);
    logEarly();
};
start(process.env.moduleNameArg, process.env.loaderLengthArg);
process.on('SIGINT', function () {
    logEarlyAbort = true;
    rl.write(null, { ctrl: true, name: 'u' });
    rl.close();
    rl.on("close", function () {
        console.log("\n");
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhcmx5LmNoaWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDOUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFJLFVBQWlCLENBQUM7QUFDdEIsSUFBSSxZQUFtQixDQUFDO0FBQ3hCLElBQUksWUFBWSxHQUFVLENBQUMsQ0FBQztBQUU1QixJQUFJLFNBQVMsR0FBRztJQUNaLElBQUksWUFBWSxHQUFVLEdBQUc7VUFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1VBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztVQUN2QyxHQUFHO1VBQ0gsWUFBWTtVQUNaLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFdEIsRUFBRSxDQUFBLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxDQUFBLENBQUM7UUFDN0IsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixZQUFZLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDMUIsSUFBSSxRQUFRLEdBQUc7SUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLFVBQVUsQ0FBQztRQUNQLEVBQUUsQ0FBQSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBSSxLQUFLLEdBQUcsVUFBUyxhQUF5QixFQUFDLGVBQTZCO0lBQXZELDZCQUF5QixHQUF6QixrQkFBeUI7SUFBQywrQkFBNkIsR0FBN0Isc0JBQTZCO0lBQ3hFLFVBQVUsR0FBRyxhQUFhLENBQUM7SUFDM0IsWUFBWSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QyxRQUFRLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTdELE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2pCLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNYLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImVhcmx5LmNoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcbmxldCBjb2xvcnMgPSByZXF1aXJlKFwiY29sb3JzXCIpO1xuaW1wb3J0IHJlYWRsaW5lID0gcmVxdWlyZShcInJlYWRsaW5lXCIpO1xubGV0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0XG59KTtcblxubGV0IG1vZHVsZU5hbWU6c3RyaW5nO1xubGV0IGxvYWRlckxlbmd0aDpudW1iZXI7XG5sZXQgZnJhbWVDb3VudGVyOm51bWJlciA9IDA7XG5cbmxldCBtYWtlRnJhbWUgPSAoKTpzdHJpbmcgPT4ge1xuICAgIGxldCByZXN1bHRTdHJpbmc6c3RyaW5nID0gXCJbXCJcbiAgICAgICAgKyBcIi9cIi5ncmVlbi5yZXBlYXQoZnJhbWVDb3VudGVyKVxuICAgICAgICArIFwiIFwiLnJlcGVhdChsb2FkZXJMZW5ndGggLSBmcmFtZUNvdW50ZXIpXG4gICAgICAgICsgXCJdXCJcbiAgICAgICAgKyBcIiBzdGFydGluZyBcIlxuICAgICAgICArIG1vZHVsZU5hbWUuY3lhbjtcblxuICAgIGlmKGZyYW1lQ291bnRlciA9PSBsb2FkZXJMZW5ndGgpe1xuICAgICAgICBmcmFtZUNvdW50ZXIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZyYW1lQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xufTtcblxubGV0IGxvZ0Vhcmx5QWJvcnQgPSBmYWxzZTtcbmxldCBsb2dFYXJseSA9ICgpID0+IHtcbiAgICBybC53cml0ZShudWxsLCB7Y3RybDogdHJ1ZSwgbmFtZTogJ3UnfSk7XG4gICAgcmwud3JpdGUobWFrZUZyYW1lKCkpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWxvZ0Vhcmx5QWJvcnQpIGxvZ0Vhcmx5KCk7XG4gICAgfSw4MCk7XG59O1xuXG5sZXQgc3RhcnQgPSBmdW5jdGlvbihtb2R1bGVOYW1lQXJnOnN0cmluZyA9IFwiXCIsbG9hZGVyTGVuZ3RoQXJnOnN0cmluZyA9IFwiMTBcIil7XG4gICAgbW9kdWxlTmFtZSA9IG1vZHVsZU5hbWVBcmc7XG4gICAgbG9hZGVyTGVuZ3RoID0gcGFyc2VJbnQobG9hZGVyTGVuZ3RoQXJnKTtcbiAgICBsb2dFYXJseSgpO1xufTtcblxuc3RhcnQocHJvY2Vzcy5lbnYubW9kdWxlTmFtZUFyZyxwcm9jZXNzLmVudi5sb2FkZXJMZW5ndGhBcmcpO1xuXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCAoKSA9PiB7XG4gICAgbG9nRWFybHlBYm9ydCA9IHRydWU7XG4gICAgcmwud3JpdGUobnVsbCwge2N0cmw6IHRydWUsIG5hbWU6ICd1J30pO1xuICAgIHJsLmNsb3NlKCk7XG4gICAgcmwub24oXCJjbG9zZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpO1xuICAgIH0pXG59KTsiXX0=
