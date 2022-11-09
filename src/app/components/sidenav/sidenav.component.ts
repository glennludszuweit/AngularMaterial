import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

const SMALL_SCREEN_WIDTH = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  darkTheme: boolean = false;
  isSmallScreen: boolean = false;
  users: Observable<User[]> | undefined;

  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width:${SMALL_SCREEN_WIDTH}px)`])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });

    this.users = this.userService.users;

    this.userService.getUsers();

    this.users.subscribe((data) => {
      if (data.length) this.router.navigate(['/contact-manager', data[0].id]);
    });

    this.router.events.subscribe(() => {
      if (this.isSmallScreen) {
        this.sidenav?.close();
      }
    });
  }
}
