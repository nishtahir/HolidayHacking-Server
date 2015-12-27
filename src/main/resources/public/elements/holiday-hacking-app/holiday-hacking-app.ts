///<reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component("holiday-hacking-app")
class HolidayHackingApp extends polymer.Base
{

    @property({type: Boolean, value: false})
    public toggle: boolean;
​
    @observe("toggle")
    toggleObserver()
    {
      var out = {
        type : 'led',
        state : this.toggle
      }

      var xws: any = document.querySelector('x-websocket');
      xws.send(JSON.stringify(out));
    }

    @listen("message")
    wsMessageHandler(){
      //This is probably weird syntax, but i did this to
      //quiet my linter
      var evt: any = event;
      var obj = JSON.parse(evt.detail.data)
      if(obj.type == 'led'){
        this.toggle = obj.state;
      }
    }
​
    sendRequest(){
        this.$.ajax.generateRequest();
    }
​
    handleFeedbackResponse(e, response){
        console.log(response);
    }

    @listen("submitFeedback.tap")
    sendFeedback() {
       console.log('firing ajax');
       this.$.ajax.generateRequest();
    }

    @listen("open")
    open(){
      console.log("opened socket");
    }

}

HolidayHackingApp.register();
