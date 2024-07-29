import {Component, Input, OnInit} from '@angular/core';
import {BUTTON_CLOSED, OvicButton} from "@core/models/buttons";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input() head = 'Xác nhận hành động';

  @Input() body = 'Vui lòng xác nhận hành động';

  @Input() buttons : OvicButton[] = [ BUTTON_CLOSED ];

  constructor( private ngbActiveModal : NgbActiveModal ) {}

  ngOnInit() : void {
  }

  confirmAction( button : OvicButton ) {
    this.ngbActiveModal.close( button );
  }

  close() {
    this.ngbActiveModal.close( BUTTON_CLOSED );
  }
}
