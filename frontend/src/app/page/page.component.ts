import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LinksService } from '../services/links.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  showLink = false;

  constructor(private linkService: LinksService) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
