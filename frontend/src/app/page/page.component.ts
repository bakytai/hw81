import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LinksService } from '../services/links.service';
import { Link } from '../link.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  @ViewChild('url') url!: ElementRef;
  showLink = false;
  shortedLink!: Link;
  apiUrl = environment.apiUrl;

  constructor(private linkService: LinksService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const originalUrl = this.url.nativeElement.value;
    this.linkService.shortLink(originalUrl).subscribe(link => {
      this.showLink = true;
      this.shortedLink = link;
    })
  }
}
