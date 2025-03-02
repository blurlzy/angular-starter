import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-layout',
  imports: [ ReactiveFormsModule, RouterOutlet, RouterLink, CommonModule],
  template: `
      <nav class="navbar navbar-expand-md navbar-light bg-white border-bottom fixed-top">
        <div class="container">
          <a class="navbar-brand head-title" routerLink=""> ZL </a>
          <button  class="navbar-toggler" type="button" (click)="toggleNav()">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div [ngClass]="collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'">
          <!--  <ul class="navbar-nav ms-auto">

              <li class="nav-item head-item">
                <a class="nav-link" [routerLink]="['/']" [queryParams]="{ keywords: 'Item 1', type: 'tag' }">Item 1</a>
              </li>
              <li class="nav-item head-item">
                <a class="nav-link" [routerLink]="['/']" [queryParams]="{ keywords: 'Item 2', type: 'tag' }">Item 2</a>
              </li>
              <li class="nav-item head-item">
                <a class="nav-link" [routerLink]="['/']" [queryParams]="{ keywords: 'About', type: 'tag' }">About</a>
              </li>

            </ul> -->
          </div>

          <form class="d-flex ms-auto ms-3" role="search">
            <input class="form-control me-2 ms-1" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-light me-2"><i class="bi bi-search"></i></button>
          </form>
        </div>
      </nav>

      <main class="container-xl main-content">
        <router-outlet></router-outlet>
      </main>

      <footer class="border-top py-3 text-center">
        <p class="mb-2" style="font-family: 'Comic Sans MS', Courier, monospace; ">
          &copy; 2025 ZL. All rights reserved. 
          <a href="https://x.com/dczl1047" class="link-dark" target="_blank"><i class="bi bi-twitter-x ms-2 me-2 larger-icon"></i></a>  
          <a href="https://github.com/blurlzy/zl-blog" class="link-dark" target="_blank"><i class="bi bi-github ms-1 larger-icon"></i></a>         
        </p>           
      </footer>
  `,
  styles: `
      .main-content {
        margin-top: 80px;
      }

      @media screen and (max-width: 768px) {
        .main-content {
          margin-top: 100px;
        }
      }
  `
})
export class MainLayoutComponent {
  // nav responsive (mobile view)
  collapsed = true;

  toggleNav(): void {
    this.collapsed = !this.collapsed;
  }
}
