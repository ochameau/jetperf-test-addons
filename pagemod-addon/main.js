const { PageMod } = require("addon-kit/page-mod");

let testURL = require("self").data.url("document.html")
PageMod({
  include: testURL,
  contentScriptFile: require("self").data.url("content-script.js")
});

require("addon-kit/tabs").open(testURL);

dump("[PERF][" + new Date().getTime() + "] Addon running\n");
