var EventEmitter = require( 'events' ).EventEmitter,
    openni = require('openni')

OpenNI = {
  inputs: {},
  outputs:{},
  devices:[],
  getDeviceNames: function() {},
  init: function() {
    if( this.onload ) this.onload()

   	this.context = openni();
    this.context.emit = function(){ OpenNI.emit(arguments); }
    
    OpenNI.devices.push( OpenNI )    
    this.emit( 'new device', 'openni', OpenNI )

    var self = this
  },

  
}
OpenNI.__proto__ = new EventEmitter()
module.exports = OpenNI
