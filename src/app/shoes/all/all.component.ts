import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  isLoading: boolean = true;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService
        .fetchAllProducts()
        .pipe(
          delay(2000)
        )
        .subscribe(data => this.isLoading = false );
  }


}
