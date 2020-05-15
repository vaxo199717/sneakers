import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';

    constructor() {

    }
          

    openForm() {
      document.getElementById("myForm").style.display = "block";
      document.getElementById("open").style.display = "none";
      document.getElementById("close").style.display = "block";
      
    }
    
    closeForm() {
      document.getElementById("myForm").style.display = "none";
      document.getElementById("close").style.display = "none";
      document.getElementById("open").style.display = "block";
    }
    
}
