/* GRAB THE DAILY BIBLE VERSE
https://dailyverses.net/website */
  $(document).ready(function() {
    $.ajax({
      url: 'https://dailyverses.net/getdailyverse.ashx?language=niv&isdirect=1&url=' + window.location.hostname,
      dataType: 'JSONP',
      success: function(json) {
        $(".dailyVersesWrapper").append(json.html);
      }
    });
  });
