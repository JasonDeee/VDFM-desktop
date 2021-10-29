const theFrame = document.querySelector(".MainNews iframe");

function ResizeIframe() {
  console.log(theFrame.contentWindow.document.body.clientHeight);
  theFrame.style.height =
    20 + theFrame.contentWindow.document.body.clientHeight + "px";
  let Timer = setTimeout(() => {
    theFrame.style.height =
      20 + theFrame.contentWindow.document.body.clientHeight + "px";

    clearTimeout(Timer);
  }, 1000);
}
ResizeIframe();

theFrame.addEventListener("resize", ResizeIframe);
