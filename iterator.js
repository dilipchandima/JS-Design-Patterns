const array = [1, "dsdsd", true, 2.45, "sdsdsd", "sdsd", 4];

function Iterator(items) {
  this.items = items;
  this.index = 0;

  this.hasNext = () => {
    return this.index < this.items.length;
  };

  this.next = () => {
    return this.items[this.index++];
  };
}

const itt = new Iterator(array);

while (itt.hasNext()) console.log(itt.next());
