import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  images = [
    {
      mainBannerImg:'../../assets/images/shutterstock_65529072431696.jpg',
      subBannerImg:'../../assets/images/shutterstock_44927773631696.jpg',
      patternBannerImg:'../../assets/images/icons/n-img_03.png'
    },
    {
      mainBannerImg:'../../assets/images/shutterstock_65529072431696.jpg',
      subBannerImg:'../../assets/images/shutterstock_44927773631696.jpg',
      patternBannerImg:'../../assets/images/icons/n-img_03.png'
    },
    {
      mainBannerImg:'../../assets/images/shutterstock_65529072431696.jpg',
      subBannerImg:'../../assets/images/shutterstock_44927773631696.jpg',
      patternBannerImg:'../../assets/images/icons/n-img_03.png'
    },
    {
      mainBannerImg:'../../assets/images/shutterstock_65529072431696.jpg',
      subBannerImg:'../../assets/images/shutterstock_44927773631696.jpg',
      patternBannerImg:'../../assets/images/icons/n-img_03.png'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
