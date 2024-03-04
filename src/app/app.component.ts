import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
ngOnInit(): void {
  this.moviesInTheaters =[
    {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  },
  {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  },
  {
    title: 'moana',
    releaseDate: new Date('2016-11-14'),
    price : 14090.99
  },
  {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  },
  {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  },
  {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  },
  {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  },
  {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  },
  {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  },
  {
    title: 'Spiderman',
    releaseDate: new Date(),
    price : 1400.99
  }
];


this.moviesFutureReleases = [

  {
    title: 'moana',
    releaseDate: new Date('2016-11-14'),
    price : 14090.99
  }
];

}

  moviesInTheaters;
  moviesFutureReleases;
  title = 'any value'; 


// duplicateNumber(n: number){
//   return n*2;
// }





}
