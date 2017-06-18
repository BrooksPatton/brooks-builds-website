$().ready(function() {
  getStreamingStatus(clientId, channelId)
})

function getStreamingStatus(clientId, channelId) {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + channelId,
    headers: {'Client-ID': clientId}
  })
  .then(function(result) {
    console.log(result)
    var status = result.stream

    displayStreaming(status)
  })
  .catch(function(e) {
    console.error(e)
  })
}

function displayStreaming(isOnline) {
  var $el = $('#stream-status')

  if(isOnline) {
    $el.text('online')
    $el.removeClass('status-online')
    $el.addClass('status-offline')
  } else {
    $el.text('offline')
    $el.addClass('status-online')
    $el.removeClass('status-offline')
  }
}
