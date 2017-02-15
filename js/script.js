$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

if ($("#start-video").length) {
  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'start-video' element with an <iframe> and
  // YouTube player after the API code downloads.
  function onYouTubePlayerAPIReady() {
    function onPlayerReady(event) {
      event.target.mute();
      event.target.playVideo();
    }

    var player = new YT.Player('start-video', {
      videoId: 'INyxIOWEAaY',
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        loop: 1,
        modestbranding: 1,
        playlist: 'INyxIOWEAaY',
        playsinline: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }
}
