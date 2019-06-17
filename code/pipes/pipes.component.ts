import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  tiles = [];
  hobbies=[];

users:any[] = [
  {id:101,name:'john',city:'Delhi',salary:'30000',dob:new Date('06/10/1990')},
  {id:102,name:'petr',city:'Mumbai',salary:'40000',dob:new Date('06/10/1988')},

  {id:103,name:'abrm',city:'Gurgaon',salary:'50000',dob:new Date('06/10/1987')},

  {id:104,name:'doe',city:'Goa',salary:'60000',dob:new Date('06/10/1981')}

]

  constructor() {
    this.hobbies = ['dancing','singing','other','driving']
    this.tiles = 
    [
      {
          "app":"CRB",
               "story":"Loreum ipsum dolor sit amet apppsdim ,kmi sdafs,my way to loerum...1",
               "colr":"brownapp"
      },
      {
          "app":"SAM",
               "story":"Loreum ipsum dolor sit amet apppsdim ,kmi sdafs,my way to loerum..2",
               "colr":"yellownapp"
      },
      {
          "app":"UBF",
               "story":"Loreum ipsum dolor sit amet apppsdim ,kmi sdafs,my way to loerum..3",
               "colr":"rednapp"
      },
      {
          "app":"CSC",
               "story":"Loreum ipsum dolor sit amet apppsdim ,kmi sdafs,my way to loerum..4",
               "colr":"blacknapp"
      },
      {
          "app":"KBC",
               "story":"Loreum ipsum dolor sit amet apppsdim ,kmi sdafs,my way to loerum..5",
               "colr":"violatenapp"
      }
      ]
   }


  ngOnInit() {
    
  }
//lowercase 
lower:string = 'LowercaseEaxmple';

//uppercase 
upper:string = 'LowercaseEaxmple';
//title case 
name =  'Welcome to angular pipes project';  
//slice pipe 
name1 = 'AngularPipes';  
months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
//date pipe
birthday = new Date(1993, 8, 14);

//json pipe
jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

}
 


