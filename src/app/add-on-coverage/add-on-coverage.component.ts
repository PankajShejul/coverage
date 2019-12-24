import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-on-coverage',
  templateUrl: './add-on-coverage.component.html',
  styleUrls: ['./add-on-coverage.component.css']
})
export class AddOnCoverageComponent implements OnInit {
  @Input() addOnPremium:number;
  @Output() addOnPremiumAmount = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.addOnPremiumAmount.emit(this.addOnPremium);
  }
}
