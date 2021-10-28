const theFrame = document.querySelector(".MainNews iframe");

function ResizeIframe() {
  console.log(theFrame.contentWindow.document.documentElement.clientHeight);
  theFrame.style.height =
    theFrame.contentWindow.document.document.documentElement.clientHeight +
    "px";
}
ResizeIframe();
window.addEventListener("resize", ResizeIframe);
