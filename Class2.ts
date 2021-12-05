class Student{
    public id:number=0;
    private name1:string;
    display(){
        var strToDisplay=`Id:${this.id} \n Name:${this.name1}`;
        console.log(strToDisplay);

    }
    setName(name){
        this.name1=name;
    }
}
var studentObj= new Student;
studentObj.id=220;
// studentObj.name1='Sayendeep Mahanty';
studentObj.display();
studentObj.setName('Ram Mohan');
studentObj.display();
