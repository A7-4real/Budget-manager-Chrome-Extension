$(function () {
  $("#saveLimit").on("click", function () {
    var limit = $("#limit").val();

    if (limit) {
      chrome.storage.sync.set({ limit: limit }, function () {
        close();
      });
    }
  });

  $("#ResetTotal").on("click", function () {
    chrome.storage.sync.set({ total: 0 }, function () {
      var notifOptions = {
        type: "basic",
        iconUrl: "icon48.png",
        title: "Total reset!",
        message: "Total has been reset to 0!",
      };
      chrome.notifications.create("limitNotif", notifOptions);
      close();
    });
  });
});
