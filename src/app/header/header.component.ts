import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  query: string = '';
  queryCtrnl: FormControl = new FormControl('');

  constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.queryCtrnl
          .valueChanges
          .pipe(
            debounceTime(500),
            distinctUntilChanged()
          ).subscribe(
             query => this.updateQueryParams(query)
          )
  }

  updateQueryParams(query: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { query },
        queryParamsHandling: 'merge'
      });
  };

}
