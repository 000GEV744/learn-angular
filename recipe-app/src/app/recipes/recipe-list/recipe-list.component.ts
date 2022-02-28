import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe("A Test Recipe-1",
    "This is simply first Test",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F02%2F12%2Froast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg"),
    new Recipe("A Test Recipe-2",
    "This is simply second Test",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgSYpK5wPy8HbphJ3yPuy13pv72-DAPW5bw&usqp=CAU")
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
