var shuffleAndSortObj = (function shuffleAndSort() {
    const array = [{ text:1, class: 'colorGrp1' }, { text:2, class: 'colorGrp2' }, { text:3, class: 'colorGrp3' }, { text:4, class: 'colorGrp2' }, { text:5, class: 'colorGrp3' }, { text:6, class: 'colorGrp4' }, { text: 7, class: 'colorGrp4' },{ text:8, class: 'colorGrp1' }, { text:9, class: 'colorGrp3' }];
function shuffle() {
    let ctr = array.length;
    let temp;
    let index;

    
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    render(array);
}
function sort() {
    array.sort(function (x, y) {
        return x.text - y.text;
    });
    render(array);
}
function render(array) {
    document.getElementById('shuffle').innerHTML = '';
  for(var i = 0; i < array.length; i++)
  {
    var card = document.createElement("div");
    var value = document.createElement("div");
    card.className = "col-md-4 col-sm-4 col-xs-12 square card "+ array[i].class;
    value.className = "value";

    value.innerHTML = array[i].text;
    card.appendChild(value);

    document.getElementById("shuffle").appendChild(card);
  }
}
return {
    shuffle, sort
}
})();
function load()
{
  shuffleAndSortObj.sort();
}
window.onload = load;