Ext.define('Employee',{
	//extend:'Person',
   name: 'pritam',
   id:1,
   show:function()
   {
   	console.log("name :"+this.name);
   },
   constructor : function(name)
   {
   	//return this.name=name;
   	console.log(this.name=name);
   },
   statics:{
      y:10
   }
   

});

var emp = Ext.create('Employee');
emp.show();
console.log(Employee.y);
