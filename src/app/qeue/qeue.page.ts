import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qeue',
  templateUrl: './qeue.page.html',
  styleUrls: ['./qeue.page.scss'],
})
export class QeuePage implements OnInit {

  foodDetails: string = '';
  queueNumber: string = '';

  constructor(private alertController: AlertController) { }

  

  async showQueueNumber() {
    this.queueNumber = 'A' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const alert = await this.alertController.create({
      header: 'หมายเลขคิวของคุณ',
      message: `เลขคิวของคุณคือ: ${this.queueNumber}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
