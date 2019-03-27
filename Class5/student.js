Ext.define('Student', function(){
    //extend:'Person',
    name:'Rabby',
    function add()
    {
    	var x=10;
    }
    
    
    return{
    // 	add:function()
    // {
    // 	var x=10;

    // },
        constructor : function(name){
            this.name = name;
        },
        getName : function(){
            //alert('Student name is ' + this.name);
            console.log(this.name);
        }
    };
});

//create an object of Student class
var studentObj = Ext.create('Student','XYZ');
studentObj.getName();
console.log(studentObj.name);
console.log(studentObj.x);