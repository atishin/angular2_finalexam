import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "app/services/authorization.service";
import { MdDialogRef } from "@angular/material";
import { User, UserRegister } from "app/models/user";

@Component({
    selector: 'app-authorization-login',
    templateUrl: '/authorization.component.html',
    styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
    error = false;

    constructor(private authorizationService: AuthorizationService, 
    public dialogRef:MdDialogRef<AuthorizationComponent>) {}

    ngOnInit(){
    }

    closeDialog() {
        this.dialogRef.close();
    }

    login() {
        this.authorizationService.Login(this.model.username, this.model.password).subscribe(
            data => {
                this.closeDialog();
                this.error = false;
            },
            error => {
                this.loading = false;
                this.error = true;
            }
        );
    }
}

@Component({
    selector: 'app-authorization-register',
    templateUrl: '/register.component.html',
    styleUrls: ['./authorization.component.scss']
})
export class AuthRegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    error = false;

    constructor(private authorizationService: AuthorizationService,
        public dialogRef: MdDialogRef<AuthRegisterComponent>){}

        closeDialog() {
            this.dialogRef.close();
        }

        register(){
            this.loading = true;
            const user:UserRegister = {
                username: this.model.username,
                password: this.model.password,
                confirmPassword: this.model.confirmPassword,
            }
            this.authorizationService.RegisterUser(user)
                .subscribe(
                    data => {
                        this.login();
                        this.closeDialog();
                        this.error = false;
                    },
                    error => {
                        this.loading = false;
                        this.error = true;
                    }
                );
        }

        private login() {
            this.loading = true;
            this.authorizationService.Login(this.model.username, this.model.password)
                .subscribe(
                    data => {
                        this.error = false;
                    },
                    error => {
                        this.loading = false;
                        this.error = true;
                    }
                );
        }

        ngOnInit(){
        }
}
