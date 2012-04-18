const { Widget } = require("addon-kit/widget");

Widget({
  id: "addon-widget",
  label: "Tooltip text",
  contentURL: require("self").data.url("widget.html"),
  width: 50,
  contentScriptFile: require("self").data.url("content-script.js")
});

dump("[PERF][" + new Date().getTime() + "] Addon running\n");
