let Name=["Rice", "Dal", "Salt"];
let Quantity=[2, 3, 1];
let  Price=[60, 50, 20];
let data=[];
     for(let i=0;i<Name.length;i++){
        obj={};
        obj.name=Name[i];
        obj.quatity=Quantity[i];
        obj.price=Price[i];
        obj.total=function(){
           return this.quatity*this.price;
        }
        console.log(obj.total());
        data.push(obj);
   };
   console.log(data)
//    var ans=data.reduce((acc,cur)=>{
//       acc+cur
//    },0);
//    console.log(ans)


 let totalValue = data.reduce((acc, item) => acc + item.total(), 0);
 console.log(totalValue); 
