import { Component, OnInit, Input } from '@angular/core';

import { Build } from '../models/Build';

@Component({
  selector: 'app-build-status-badge',
  templateUrl: './build-status-badge.component.html',
  styleUrls: ['./build-status-badge.component.scss']
})
export class BuildStatusBadgeComponent implements OnInit {
  @Input() status: string;

  constructor() {
    this.status = status;
  }

  ngOnInit() { }

  running(status) {
    if (status === 'Running') {
      return true;
    }
  }

  calculateIconClass(status) {
    switch (status) {
      case 'Succeeded':
        return 'icon ion-md-checkmark-circle';
      case 'Failed':
        return 'icon ion-md-close-circle';
      case 'Pending':
        return 'icon ion-md-clock';
      default:
        return 'icon ion-md-radio-button-off';
    }
  }
}
