let shadoks = document.getElementsByTagName("img")[0];

shadoks.addEventListener('mouseover',  function grandir() { 
  shadoks.style.height = '600px';
  }
);
shadoks.addEventListener('mouseout', function retrecir() { 
  shadoks.style.height = '50px';
});