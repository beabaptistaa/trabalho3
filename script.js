// When the user scrolls down 50px from the top of the document, resize the navbar's padding and the logo's font size
/*window.onscroll = function() {scrollFunction()};


      function scrollFunction() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
          document.getElementById("nav_id").style.fontSize = "2.5rem";
        } else {
          /*document.getElementById("nav_id").style.fontSize = "5.625rem";
          document.getElementById("nav_id").style.fontSize = "0.5rem";
        }
      }
*/

/* ----- INDEX ANIMATION ----- */

var star = document.getElementById("star-icon");
var circle = document.getElementById("circle-icon");
window.addEventListener('scroll', function() {
	var value = window.scrollY;
	star.style.transform = `translatex(-50%) translatey(-50%) rotate(${value * 0.40}deg)`; 
  circle.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});


/* --- ABOUT ME --- */

// Roleta -----------------------------
var roulette = document.querySelector('#window');
var arrow = document.querySelector('#arrowup');
var item = document.querySelector('#list');
var items = item.querySelectorAll(".list li");

var offset = 0;
var maxOffset = items.length * 200;

var wheel = {
  speed: 100,
  
  getSpeed: function() {
    this.speed = this.speed - Math.round(Math.random() * 1);
    if (this.speed < 0)
      return 0;
    return this.speed;
  },
  resetSpeed: function() { this.speed = 100 }
}

/*items.forEach(function(e) {

  console.log('item: ', item);
  console.log('items before: ', items);

  var newItem = item.cloneNode(true);
  item.appendChild(newItem);

  /*item.appendChild(newItem);

  newItem.querySelector('li').classList.add(e[0]);
  items.appendChild(newItem);

  console.log('items after: ', items);

});*/
                        
function spin() {
  
  console.log('maxOffset: ', maxOffset);
  console.log('offset: ', offset);

  newList = document.querySelector('#list');

  console.log('list', document.querySelector('#list'));

  clonedList = newList.cloneNode(true);
  clonedList.id = 'cloned-list';
  newList.appendChild(clonedList);

  timer = setInterval(function() {
    offset = offset + wheel.getSpeed();
    //offset = offset + Math.pow(Math.floor(Math.random() * 16) + 10, 2);
    
    console.log(offset + ' < ' + maxOffset);

    if ((offset > maxOffset) || (offset < 0)) {
      offset = 0;
      newList.removeChild(newList.firstChild);
    }
    roulette.style.transform = 'translateX(-'+offset+'px)';
    roulette.style.animationDuration = "5s";
  }, 10);
  
  setTimeout(function() {
    clearInterval(timer);
    wheel.resetSpeed();
    var selected = Math.floor( (150 + offset) / (maxOffset / items.length) );
  }, 1000);

}

