let spisok = document.createElement('ul');
    document.body.append(spisok);
let a = prompt("введите кооличество элементов списка", "");
for(i=0; i<a;i++ ){
    let text = prompt("vvedite text", "");
    let da = document.createElement('li');
    da.textContent = text;
    spisok.append(da);
}

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};


function createTree(container, obj) {
   container.append(createTreeDom(obj));
}
function createTreeDom(obj) {
    if (!Object.keys(obj).length) {
        return;
    }
      let ul = document.createElement('ul');

      for (let elem in obj) {
        let li = document.createElement('li');
        li.innerHTML = elem;
        let MiniElem = createTreeDom(obj[elem]);
        if (MiniElem) {
          li.append(MiniElem);
        }
        ul.append(li);
      }
      return ul;
}
let container = document.getElementById('container');
createTree(container, data);
