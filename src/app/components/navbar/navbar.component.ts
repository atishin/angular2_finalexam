import {Component, OnInit, Input} from '@angular/core';
import { MdDialog } from '@angular/material';

import {AuthorizationComponent, AuthRegisterComponent} from '../authorization/authorization.component';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { 
    username: string;
    constructor(public dialog: MdDialog,
        public authorizationSevice: AuthorizationService) {}

        ngOnInit(){
            this.verifyUser();
        }
    
        verifyUser(){
            if (this.authorizationSevice.isLoggedIn()){
                var currentUser = JSON.parse(localStorage.getItem('user'));
                this.username = currentUser.user.username;
            }
        }

        loggedIn(){
            return this.authorizationSevice.isLoggedIn();
        }

        openLoginDialog(){
            this.dialog.open(AuthorizationComponent);
        }

        openRegisterDialog(){
            this.dialog.open(AuthRegisterComponent);
        }

        logout(){
            this.authorizationSevice.LogOut();
            this.username = null;
        }

}