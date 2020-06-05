import { Component, ViewChild } from '@angular/core';
import { ComboBox } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('geoCombo') geoCombo: ComboBox;

  flatPickrOptions = {
    minDate: '2020-06-10',
    maxDate: '2020-06-20'
  }

  geos: Geo[] = [{content: 'Toronto', selected: false, data: 1}, {content: 'Montreal', selected: false, data: 1}, {content: 'Vancouver', selected: false, data: 1}, {content: 'Ottawa', selected: false, data: 1}]

  selectGeo(geo) {
    console.log({geo})
  }

  clearGeo() {
    this.geos = this.geos.map(geo => ({ ...geo, selected: false }));
    console.log({geos: this.geos})
  }

  clearGeoComplex() {
    this.geos = this.geos.map((geo) => ({ ...geo, selected: false }));

    setTimeout(() => {
      this.geoCombo.showClearButton = false;
      this.geoCombo.selectedValue = '';
      this.geoCombo.clearSelected();
    }, 0);
  }
}

export interface Geo {
  content: string;
  selected: boolean;
  data: number;
}
