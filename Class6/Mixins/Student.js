Ext.define('Student',{
	schooleName:'Unknown',
	mixins:{
		getName:'Person',
		getAge:'Person'
	},
	constructor:function(name,age,schooleName){
		this.name = name;
		this.age = age;
		this.callParent(arguments);
		this.schooleName=schooleName ||'UnKnown';
	},
	getSchoolName:function(){
		return "From Parent Class </br>School: "+this.schooleName+'</br>' + 'Name: ' +this.name+'</br>Age: '+this.age;
	}
});