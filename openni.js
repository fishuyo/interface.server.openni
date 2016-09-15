var EventEmitter = require( 'events' ).EventEmitter,
    openni = require('openni')

OpenNI = {
  inputs: {},
  outputs: {},
  devices:[],
  getDeviceNames: function() {},
  init: function() {
    if( this.onload ) this.onload()

   	this.context = openni();
    this.context.emit = function(){ 
      // console.log(arguments)
      args = arguments
      args = Object.keys(args).map( function(k){ return args[k] })
      event = args[0]
      // args = if(arguments.length > 2) arguments.slice(1) else arguments
      self.outputs[event] = {min:0, max:0, value:0}
      OpenNI.emit(event, args.slice(1));
    }
    
    OpenNI.devices.push( OpenNI )    
    this.emit( 'new device', 'openni', OpenNI )

    var self = this
  },

  
}
OpenNI.__proto__ = new EventEmitter()
module.exports = OpenNI
