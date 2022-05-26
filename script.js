let num=document.querySelectorAll(".box1");
let inp=document.querySelectorAll(".box2");
let id;
num.forEach((item) => {
    item.ondragstart = function () {
      id = this.id;
    };
  });
  inp.forEach((item) => {
    (item.ondragover = function (e) {
      e.preventDefault();
    }),
      (item.ondrop = function () {
        let num = document.getElementById(id);
        if (id=="i" && this.id=="a1") {
            this.append(num);
        } 
        else if (id=="i1" && this.id=="a2") {
            this.append(num); 
          }
        else if (id=="i2" && this.id=="a3") {
            this.append(num);
        }
        else{
          alert("wrong");
        }
      });
  });
// num.forEach((item)=>{
//     item.ondragstart = function(){
//       id = this.id;
//     };
// });
// inp.forEach((i)=>{
//     i.ondragover=function(ev){
//         ev.preventDefault();
//     },
//     (i.ondrop=function(){
//         let numm=document.getElementById(id);
//         if (id==i && this.id==a1) {
//             this.append(numm)
//         }
//         else if(id==i1 && this.id==a2){
//             this.append(numm)
//         }
//         else if(id==i2 && this.id==a3){
//             this.append(numm)
//         }
//     })
// })



// num.ondragstart=function(ev){
//     ev.dataTransfer.setData("id",this.id)
// }
// inp.forEach(i=>{
//     i.ondragover=function(ev){
//         ev.preventDefault();
//     }
// })
// inp.forEach(i=>{
//     i.ondrop=function(ev){
//         let id=ev.dataTransfer.getData("id");
//         let numm=document.getElementById(id);
//         i.append(numm);
//         if (id==i && this.id==a1) {
//             this.append(numm)
//         }
//         else if(id==i1 && this.id==a2){
//             this.append(numm)
//         }
//         else if(id==i2 && this.id==a3){
//             this.append(numm)
//         }
//     }
// })