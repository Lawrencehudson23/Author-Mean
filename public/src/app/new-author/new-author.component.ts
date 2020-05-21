import { Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css'],
})
export class NewAuthorComponent implements OnInit {
  newAuthor = {
    name: '',
    age: '',
  };
  errors = [];
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.errors = [];

    this._httpService.createAuthor(this.newAuthor).subscribe((data: any) => {
      if (data.hasOwnProperty('errors')) {
        for (let key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      } else {
        this._router.navigate(['/']);
      }
    });
  }
}
