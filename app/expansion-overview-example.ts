import {Component} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenCount = 0;
  panelOpenState = false;
  openPanel = -1;


  onPanelOpened(index:any){
    this.panelOpenCount = this.panelOpenCount+1;
    this.openPanel = index;
    console.log('panel', index, 'open')
  }

  onPanelClosed(index:any){
    this.panelOpenCount = this.panelOpenCount-1;
    if(this.panelOpenCount === 0) this.openPanel = -1;
    console.log('panel', index, 'closed')
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */