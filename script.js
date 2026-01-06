// Add hover functionality to popover triggers similar to Wikipedia
// Falls back to working HTML if Popover API/JS is not supported
(function () {
  // Check if Popover API is supported
  if (typeof HTMLElement.prototype.showPopover !== "function") {
    return;
  }

  document.querySelectorAll("[popovertarget]").forEach(function (trigger) {
    var popoverId = trigger.getAttribute("popovertarget");
    var popover = document.getElementById(popoverId);

    if (popover) {
      var hideTimeout;

      // Position popover near the trigger element
      function positionPopover() {
        var triggerRect = trigger.getBoundingClientRect();
        var viewportWidth = window.innerWidth;
        var popoverHeight = popover.offsetHeight;
        var popoverWidth = popover.offsetWidth;

        // Position so bottom of popover is above the top of the trigger
        var top = triggerRect.top + window.scrollY - popoverHeight - 8;
        var left = triggerRect.left + window.scrollX;

        // Adjust if popover would go off-screen horizontally
        if (left + popoverWidth > viewportWidth) {
          left = viewportWidth - popoverWidth - 20;
        }
        if (left < 10) {
          left = 10;
        }

        // Adjust if popover would go off-screen vertically, show below instead
        if (top < window.scrollY + 10) {
          top = triggerRect.bottom + window.scrollY + 8;
        }

        popover.style.top = top + "px";
        popover.style.left = left + "px";
      }

      trigger.addEventListener("mouseenter", function () {
        clearTimeout(hideTimeout);

        popover.style.opacity = "0";
        popover.showPopover();

        // Position after showing to get accurate offsetHeight
        positionPopover();

        // Fade in popover
        popover.style.opacity = "";
      });

      // Keep popover open when hovering over it
      popover.addEventListener("mouseenter", function () {
        clearTimeout(hideTimeout);
      });

      trigger.addEventListener("mouseleave", function () {
        hideTimeout = setTimeout(function () {
          popover.hidePopover();
        }, 200);
      });

      popover.addEventListener("mouseleave", function () {
        hideTimeout = setTimeout(function () {
          popover.hidePopover();
        }, 200);
      });
    }
  });
})();

// Redirect outdated manual links with fragments to the new manual location
(function () {
  const hash = window.location.hash;
  const CURRENT_MANUAL_URL = "https://docs.ankidroid.org/";

  if (hash.substring(1) && !document.getElementById(hash.substring(1))) {
    window.location.replace(CURRENT_MANUAL_URL + hash);
  }
})();
