function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function(fn){
    this.observers.push(fn);
  },

  unsubscribe: function(fnToRemove){
    this.observers = this.observers.filter(fn => fn != fnToRemove);
  },

  fire: function(){
    console.log('-------------------')
    this.observers.forEach(fn => fn.call())
    console.log('-------------------')
  }
};


const subject = new Subject();

const fn = () => {
  console.log('sdsdsds');
}
const fn2 = () => {
  console.log('DIleepa');
}
subject.subscribe(fn)
subject.subscribe(fn2)
subject.fire()
subject.unsubscribe(fn)
subject.fire()