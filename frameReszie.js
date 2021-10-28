const theFrame = document.querySelector(".MainNews iframe");

function ResizeIframe() {
  console.log(theFrame.contentWindow.document.documentElement.scrollHeight);
  theFrame.style.height =
    theFrame.contentWindow.document.documentElement.scrollHeight + "px";
}
ResizeIframe();

window.addEventListener("resize", ResizeIframe);
