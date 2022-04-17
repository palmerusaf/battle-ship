export const pubsub = {
    events: {},
    subscribe: function(eventName, callbackFuncToSub) {
      console.info(`PUBSUB: someone just subscribed to know about ${eventName}`);
      //add an event with a name as new or to existing list
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(callbackFuncToSub);
    },
    unsubscribe: function(eventName, callbackFuncToUnSub) {
      console.info(`PUBSUB: someone just UNsubscribed from ${eventName}`);
      //remove an event function by name
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(callbackFunc => callbackFunc !== callbackFuncToUnSub);
      }
    },
    publish: function(eventName, data) {
      console.info(`PUBSUB: Making an broadcast about ${eventName} with `,data);
      //emit|publish|announce the event to anyone who is subscribed
      if (this.events[eventName]) {
        this.events[eventName].forEach(callbackFunc => {
          callbackFunc(data);
        });
      }
    }
  };