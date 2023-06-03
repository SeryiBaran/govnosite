// Let's check if the browser supports notifications
if (!("Notification" in window)) {
  alert("This browser does not support desktop notification");
}

// Let's check whether notification permissions have already been granted
else if (Notification.permission === "granted") {
  // If it's okay let's create a notification
  var notification = new Notification("Hi there!");
}

// Otherwise, we need to ask the user for permission
else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(function (permission) {
    // If the user accepts, let's create a notification
    if (permission === "granted") {
      var notification = new Notification("Hi there!");
    }
  });
}

$(window).on("scroll", function () {
  for (var i = 0; i < 10; i++) {
    console.log("scrolled" + " " + i);
  }
});

document.write("");

for (let i = 0; i < 500; i++) {
  if (Math.random() > 0.5) {
    console.error(
      ((t = 21) =>
        crypto
          .getRandomValues(new Uint8Array(t))
          .reduce(
            (t, e) =>
              (t +=
                (e &= 63) < 36
                  ? e.toString(36)
                  : e < 62
                  ? (e - 26).toString(36).toUpperCase()
                  : e > 62
                  ? "-"
                  : "_"),
            ""
          ))()
    );
  } else {
    console.warn(
      ((t = 21) =>
        crypto
          .getRandomValues(new Uint8Array(t))
          .reduce(
            (t, e) =>
              (t +=
                (e &= 63) < 36
                  ? e.toString(36)
                  : e < 62
                  ? (e - 26).toString(36).toUpperCase()
                  : e > 62
                  ? "-"
                  : "_"),
            ""
          ))()
    );
  }
}

throw new Error("error");
