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
        if(this.toggle) this.sendRequest();
    }
​
    sendRequest(){
        this.$.ajax.generateRequest();
    }
​
    handleFeedbackResponse(e, response){
        console.log(response);
    }

    sendFeedback() {
       console.log('firing ajax');
       this.$.ajax.generateRequest();
    }

}

HolidayHackingApp.register();
