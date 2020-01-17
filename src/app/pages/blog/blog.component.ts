import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  Blogs: Blog[] = [
    {
      imgUrl: 'assets/images/blog-04.jpg',
      Date: ' 28 Dec, 2018',
      Title: ' Black Friday Guide: Best Sales & Discount Codes',
      Author: 'Admin',
      Tags: 'Cooking, Food',
      Comments: 8,
      // tslint:disable-next-line:max-line-length
      Content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius'
    },
    {
      imgUrl: 'assets/images/blog-05.jpg',
      Date: ' 26 Dec, 2018',
      Title: 'The White Sneakers Nearly Every Fashion Girls Own',
      Author: 'Admin',
      Tags: 'Fashion, Life style',
      Comments: 8,
      // tslint:disable-next-line:max-line-length
      Content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius'
    },
    {
      imgUrl: 'assets/images/blog-08.jpg',
      Date: ' 22 Dec, 2018',
      Title: ' Black Friday Guide: Best Sales & Discount Codes',
      Author: 'Admin',
      Tags: ' Cooking, Food',
      Comments: 8,
      // tslint:disable-next-line:max-line-length
      Content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius'
    },
    {
      imgUrl: 'assets/images/blog-02.jpg',
      Date: ' 18 Dec, 2018',
      Title: ' Black Friday Guide: Best Sales & Discount Codes',
      Author: 'Admin',
      Tags: ' Cooking, Food',
      Comments: 8,
      // tslint:disable-next-line:max-line-length
      Content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius'
    },
    {
      imgUrl: 'assets/images/blog-03.jpg',
      Date: ' 16 Dec, 2018',
      Title: ' Black Friday Guide: Best Sales & Discount Codes',
      Author: 'Admin',
      Tags: ' Cooking, Food',
      Comments: 8,
      // tslint:disable-next-line:max-line-length
      Content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius'
    },
  ];

  ngOnInit() {
  }
}
