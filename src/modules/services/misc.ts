import { Component } from '@angular/core';
import {LoadingController, AlertController } from 'ionic-angular';

export class Misc {
    
    constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController) {

    }

    createLoader(msg: string = "Please wait...") : any { 
        return this.loadingCtrl.create({
        content: msg
        });
    }

    createAlert(title: string = "Error", subTitle: string = "Error...", buttons: Array<String>) : any {
        return this.alertCtrl.create({
        title: title,
        subTitle: subTitle,
        buttons: buttons
        });
    }
}