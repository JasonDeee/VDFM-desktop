let theFrame = document.querySelector(".MainNews iframe");

console.log(theFrame.contentWindow.document.documentElement.scrollHeight);
theFrame.style.height =
  theFrame.contentWindow.document.documentElement.scrollHeight + "px";
