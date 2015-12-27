///<reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component("holiday-hacking-app")
class HolidayHackingApp extends polymer.Base
{

    @property({type: Boolean, value: false})
    public led1: boolean;
​
    @property({type: Boolean, value: false})
    public led2: boolean;
​
    @observe("led1")
    led1Observer()
    {
      var out = {
        type : 'led1',
        state : this.led1
      }

      var xws: any = document.querySelector('x-websocket');
      xws.send(JSON.stringify(out));
    }

    @observe("led2")
    led2Observer()
    {
      var out = {
        type : 'led2',
        state : this.led2
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
      if(obj.type == 'led1'){
        this.led1 = obj.state;
      }
      if(obj.type == 'led2'){
        this.led2 = obj.state;
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
