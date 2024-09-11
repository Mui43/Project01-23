import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-histoey',
  templateUrl: './histoey.page.html',
  styleUrls: ['./histoey.page.scss'],
})
export class HistoeyPage implements OnInit {

  bookings = [
    { code: 'A001', status: 'เสร็จสิ้น', date: '08/12/2567', time: '9.59', details: 'รายละเอียดอาหาร' },
    { code: 'A002', status: 'รอการยืนยัน', date: '09/12/2567', time: '10.30', details: 'รายละเอียดอาหาร' },
    { code: 'A003', status: 'เสร็จสิ้น', date: '10/12/2567', time: '9.57', details: 'รายละเอียดอาหาร' },
    { code: 'A004', status: 'รอการยืนยัน', date: '11/12/2567', time: '9.50', details: 'รายละเอียดอาหาร' },
    { code: 'A005', status: 'เสร็จสิ้น', date: '12/12/2567', time: '9.55', details: 'รายละเอียดอาหาร' },
    { code: 'A006', status: 'รอการยืนยัน', date: '13/12/2567', time: '9.56', details: 'รายละเอียดอาหาร' },
    // เพิ่มรายการอื่น ๆ ที่ต้องการ
  ];

  constructor(private alertController: AlertController) { }

  async onCancelBooking(index: number) {
    const alert = await this.alertController.create({
      header: 'ยืนยันการยกเลิก',
      message: 'คุณต้องการยกเลิกการจองนี้หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.bookings.splice(index, 1); // ลบรายการที่ถูกเลือก
            console.log('รายการที่เหลือ:', this.bookings);
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
