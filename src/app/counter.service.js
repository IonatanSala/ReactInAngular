export const CounterSerivce = (app) => {
   app.service('CounterSerivce', [function() {
     let counter = 10;
     let subscriptions = [];

     this.getCounter = () => counter;

     this.setCounter = (newCounter) => {
       counter = newCounter;

       subscriptions.forEach((sub) => {
         sub(counter);
       });
     }

     this.subscribe = (subCallback) => {
       subscriptions.push(subCallback);
     };
   }]);
}
