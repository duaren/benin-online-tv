const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const channel_list_container = document.querySelector('.channel-list-container');

floating_btn.addEventListener('click', () => {
    channel_list_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    channel_list_container.classList.remove('visible')
});

var divs = ["Channel1", "Channel2", "Channel3", "Channel4", "Channel5"];
var visibleId = null;
function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}
function hide() {
  var div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
