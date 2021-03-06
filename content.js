//downloading from browser storage
let mainColor, switchButton;
  chrome.storage.sync.get("color", ({ color }) => {
    mainColor = color;
  });
  chrome.storage.sync.get("onOffButton", ({ onOffButton }) => {
    switchButton = onOffButton;
  });

//main function
setTimeout(function () {
  if (switchButton == true) {

    (function () {
      // list of ads to mark
      const toDel = '[id*="google_ads"], [id^=spons], [id*="onet-ad"], [id^="googleads"], [src*="googleads"], [src*="creativecdn"], [src*="googlesyndication"], [href*="googleads"] ';
      setTimeout(function () {
        selecting(toDel);
      }, 1500);
      observer(toDel);
    })();


    function selecting(name) {
      document.querySelectorAll(name).forEach(el => { markAd(el); })
    }

    function markAd(el) {
      el.style.border = `10px solid ${mainColor}`;
      el.style.borderRadius = "10px";
      el.style.position = "relative";
      newDiv = document.createElement("div");
      newDiv.innerHTML = `<div
    style="
      color: ${mainColor};
      font-size: calc(24px + 6 * ((100vw - 320px) / 680));
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 700;
      z-index: 99999;
    ">WARNING!</div>`;
      el.append(newDiv);
    }
    // function thats watching for changes on page
    function observer(elementToMark) {
      //////////////////////////////////////////
      // observer
      var mutationObserver = new MutationObserver(function () {
        throttleFunction(function () {
          setTimeout(function () {
            selecting(elementToMark);
          }, 100);
        });
      });

      // Starts listening for changes in the root HTML element of the page.
      mutationObserver.observe(document.documentElement, {
        attributes: false,
        characterData: false,
        childList: true,
        subtree: true,
        attributeOldValue: false,
        characterDataOldValue: false
      });

      var timerId;
      // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
      var throttleFunction = function (func, delay) {
        // If setTimeout is already scheduled, no need to do anything
        if (timerId) {
          return
        }
        // Schedule a setTimeout after delay seconds
        timerId = setTimeout(function () {
          func()
          // Once setTimeout function execution is finished, timerId = undefined so that in <br>
          // the next scroll event function execution can be scheduled by the setTimeout
          timerId = undefined;
        }, delay)
      }
    }
  }
}, 100);



