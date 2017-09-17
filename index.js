function getFirstSelector(test) {
  return document.querySelector(test)}

function nestedTarget(){
     var pop = document.querySelector('#nested .target');
     return pop}

function increaseRankBy(n){
        var zzz = document.querySelectorAll('ul.ranked-list li')
        for (let i = 0; i < zzz.length; i++){
              zzz[i].innerHTML = parseInt(zzz[i].innerHTML) + n}}
function deepestChild(){
  function find(node, critera){
    
  }
}