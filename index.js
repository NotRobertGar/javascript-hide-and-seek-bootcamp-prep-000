function getFirstSelector(test) {
  return document.querySelector(test)}
function nestedTarget(){
  var nested = document.querySelector('#nested .target');
  return nested
  }
  function deepestChild(){}


  function increaseRankBy(n){
    var blab = document.querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < blab.length; i++){
      blab[i].innerHTML = parseInt(blab[i].innerHTML) + n
    }
  }

function deepestChild(){
  var deepestC = document.getElementById('grand-node').querySelectorAll('div')
  return deepestC[deepestC.length-1]
}
