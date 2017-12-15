import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pageTitle: string;
  clientCode: string;
  client: string;
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.client = 'Integrated Diagnostics';
    this.clientCode = 'IN';
    this.pageTitle = 'Interface Cross-Reference Menu';
  }
  open(content) {
    this.modalService.open(content, { size: 'lg', windowClass: '.modal-dialog', container: '', keyboard: true });
  }
}
