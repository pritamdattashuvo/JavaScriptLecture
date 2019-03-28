Ext.define('Student',{
	extend:'Person',
	schooleName:'Unknown',
	constructor:function(name,schooleName){
		this.callParent(arguments);
		this.schooleName=schooleName ||'UnKnown';
	},
	getSchoolName:function(){
		return "From Parent Class /n"+this.schooleName + 'Name = ' +this.name;
	}
});