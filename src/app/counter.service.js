export const CounterSerivce = (app) => {
   app.service('CounterSerivce', [function() {
     var counter = 10;

     this.getCounter = () => counter;

     this.setCounter = (newCounter) => {
       counter = newCounter;
     }
   }]);
}
