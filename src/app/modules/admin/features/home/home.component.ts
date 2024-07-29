import { Component, OnInit } from '@angular/core';
import {NotificationService} from "@core/services/notification.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private notificationService:NotificationService
  ) { }

  ngOnInit(): void {
  }


  btns(text:string){
    if(text === 'success'){
      this.notificationService.toastSuccess('Hoàn thành ','Thông báo',false);
    }
    if(text === 'warning'){
      this.notificationService.toastWarning('Cảnh báo ','Thông báo',false);

    }
    if(text === 'danger'){
      this.notificationService.toastError('Báo Lỗi ','Thông báo',false);
    }
    if(text === 'info'){
      this.notificationService.toastInfo('Thông tin ','Thông báo',false);
    }
  }

}
