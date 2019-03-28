Ext.define('Person',{
	name:'',
	age:'',
	constructor:function(name,age){
		if(name && age){
			this.name=name;
			this.age = age;
		}
	},
	getName:function(){
		return this.name;
	},
	getAge:function(){
		return this.age;
	}
});