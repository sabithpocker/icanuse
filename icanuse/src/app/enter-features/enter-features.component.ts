import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enter-features',
  templateUrl: './enter-features.component.html',
  styleUrls: ['./enter-features.component.css']
})
export class EnterFeaturesComponent implements OnInit {
  features: string[];
  filteredFeatures: Observable<string[]>;
  selectedFeatures: string[] = [];
  featureCtrl: FormControl;
  constructor() { 
  	this.featureCtrl = new FormControl();
  	this.filteredFeatures = this.featureCtrl.valueChanges
  		.startWith(null)
  		.map(x=>this.filterFeatures(x));
  }

  async ngOnInit() {
  	this.features = Object.keys((await System.import('caniuse-db/data.json')).data);
  }

  addFeature(feature: string){
  	console.log("addFeature", feature)
  	this.selectedFeatures = Array.from(new Set([...this.selectedFeatures,feature]));
  	this.featureCtrl.patchValue(null);
  }

  removeFeature(feature: string){
  	let set = new Set(this.selectedFeatures);
  	set.delete(feature);
  	this.selectedFeatures = Array.from(set);
  }

  filterFeatures(query: string){
  	return query ? this.features.filter(feature => new RegExp(`^${query}`, 'gi').test(feature))
               : this.features;
  }

}
