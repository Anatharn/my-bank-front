import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-navigation',
  templateUrl: './my-navigation.component.html',
  styleUrls: ['./my-navigation.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, AppRoutingModule]
})
export class MyNavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
