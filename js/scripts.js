const theGoods = document.getElementById('the-goods');
const cakesCove = document.getElementById('cakes-cove');

window.addEventListener("load", function() {
    setTimeout(function(){
        theGoods.classList.add("fade-in");
        cakesCove.classList.add("hidden");
        
      }, 3000);
});

