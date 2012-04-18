
dump("[PERF][" + new Date().getTime() + "] Content script loaded\n");

let divs = document.querySelectorAll("div");
for each(let div in divs) {
  div.innerHTML = "updated content";
}

dump("[PERF][" + new Date().getTime() + "] DOM Updated\n");
