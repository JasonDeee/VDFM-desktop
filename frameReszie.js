const theFrame = document.querySelector(".MainNews iframe");

function ResizeIframe() {
  console.log(theFrame.contentWindow.document.body.clientHeight);
  theFrame.style.height =
    theFrame.contentWindow.document.document.body.clientHeight + "px";
}
ResizeIframe();
window.addEventListener("resize", ResizeIframe);
