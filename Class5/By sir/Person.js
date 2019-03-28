Ext.define('Person',{
	name:'',
	constructor:function(name){
		if(name){
			this.name=name;
		}
	},
	getName:function(){
		return this.name;
	}
});