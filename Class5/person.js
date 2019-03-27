Ext.require('employee');
Ext.require('student');
Ext.define('Person',{
   //extend:'Employee',
   //extend:'Student',
   pname: 'Rabby',
   id:1,
   age:99,
   show:function()
   {
   	console.log("name :"+this.pname);
   	console.log("age : "+this.age);
      //console.log(employee.y);
   },
   constructor : function(pname,name)
   {
   	//return this.name=name;
   	//console.log(this.pname=pname);
      this.callParent(arguments);
      this.pname=pname;
   }

});

var p = Ext.create('Person','Rabby');
p.show();
var p1= Ext.create('Person','kamal');
p1.show();