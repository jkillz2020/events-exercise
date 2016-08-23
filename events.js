var timesFired = 0;
var container = document.getElementById("container");

var clickEvent = function (e){
    var aboutContainer = document.getElementById('aboutContainer');
    var blogContainer = document.getElementById('blogContainer');
    var storeContainer = document.getElementById('storeContainer');

  if (e.target.id == 'about') {
      aboutContainer.classList.add('show');
      aboutContainer.classList.remove('hidden');

      blogContainer.classList.remove('show');
      blogContainer.classList.add('hidden');
      storeContainer.classList.remove('show');
      storeContainer.classList.add('hidden');
  }
  if (e.target.id == 'blog') {
      blogContainer.classList.add('show');
      blogContainer.classList.remove('hidden');
      
      aboutContainer.classList.remove('show');
      aboutContainer.classList.add('hidden');
      storeContainer.classList.remove('show');
      storeContainer.classList.add('hidden');
  }
  if (e.target.id == 'store') {
    
      storeContainer.classList.add('show');
      storeContainer.classList.remove('hidden');
      
      aboutContainer.classList.remove('show');
      aboutContainer.classList.add('hidden');
      blogContainer.classList.remove('show');
      blogContainer.classList.add('hidden');
  }

};


document.getElementById("about").addEventListener('click', clickEvent);
document.getElementById("blog").addEventListener('click', clickEvent);
document.getElementById("store").addEventListener('click', clickEvent);