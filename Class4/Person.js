Ext.define('Person',{
	name:'Pritam Datta',//javascript is type responsive
	id:101,
	age:44,
	show:function(){
		console.log(this.name);
		console.log(this.id);
		console.log(this.age);
	},
	constructor: function(name){
		return this.name = name;
	}
});

//var personobj = Ext.create('Person');

var personobj = Ext.create('Person','Pritam Datta shuvo');
personobj.show();
var personobj1 = Ext.create('Person','MG rabby');
personobj1.show();