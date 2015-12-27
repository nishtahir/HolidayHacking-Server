var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HolidayHackingApp = (function (_super) {
    __extends(HolidayHackingApp, _super);
    function HolidayHackingApp() {
        _super.apply(this, arguments);
    }
    HolidayHackingApp.prototype.toggleObserver = function () {
        var out = {
            type: 'led',
            state: this.toggle
        };
        var xws = document.querySelector('x-websocket');
        xws.send(JSON.stringify(out));
    };
    HolidayHackingApp.prototype.wsMessageHandler = function () {
        var evt = event;
        var obj = JSON.parse(evt.detail.data);
        if (obj.type == 'led') {
            this.toggle = obj.state;
        }
    };
    HolidayHackingApp.prototype.sendRequest = function () {
        this.$.ajax.generateRequest();
    };
    HolidayHackingApp.prototype.handleFeedbackResponse = function (e, response) {
        console.log(response);
    };
    HolidayHackingApp.prototype.sendFeedback = function () {
        console.log('firing ajax');
        this.$.ajax.generateRequest();
    };
    HolidayHackingApp.prototype.open = function () {
        console.log("opened socket");
    };
    __decorate([
        property({ type: Boolean, value: false }), 
        __metadata('design:type', Boolean)
    ], HolidayHackingApp.prototype, "toggle", void 0);
    __decorate([
        observe("toggle"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HolidayHackingApp.prototype, "toggleObserver", null);
    __decorate([
        listen("message"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HolidayHackingApp.prototype, "wsMessageHandler", null);
    __decorate([
        listen("submitFeedback.tap"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HolidayHackingApp.prototype, "sendFeedback", null);
    __decorate([
        listen("open"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HolidayHackingApp.prototype, "open", null);
    HolidayHackingApp = __decorate([
        component("holiday-hacking-app"), 
        __metadata('design:paramtypes', [])
    ], HolidayHackingApp);
    return HolidayHackingApp;
})(polymer.Base);
HolidayHackingApp.register();
