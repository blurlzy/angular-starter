import { Component } from '@angular/core';

@Component({
  selector: 'app-default-screen',
  imports: [],
  template: `
  <div class="container text-center" style="padding-top: 100px; padding-bottom: 200px;">
      <h1>本站已于近日正式关闭，10秒后跳转到新网站</h1>
      <p>Sorry, this site has been permanently closed. .</p>

    </div>
  `,
  styles: ``
})
export class DefaultScreenComponent {
  // The two external URLs
  private externalSites: string[] = [
    'https://zongyi.me',
    'https://laozaoshanghai.com'
  ];


  ngOnInit() {
    // After 5 seconds, pick one URL at random and redirect
    setTimeout(() => {
      const randIndex = Math.floor(Math.random() * this.externalSites.length);
      console.log(randIndex);
      window.location.href = this.externalSites[randIndex];
    }, 1000 * 5);
  }
}
