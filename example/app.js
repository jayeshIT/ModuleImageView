// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});
var testmodule = require('com.testmodule');

var foo = testmodule.createView({
	//"color" : "red",
	"width" : 200,
	"height" : 200,
	"BackgrounImage" : 'Default.png'
});
win.add(foo);

win.open();

