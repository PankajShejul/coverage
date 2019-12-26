import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  premiums:number[]=[1000,2000,3000,4000];
  lastPremium=0;
  lastAddOnPremium=0;
  flagPremium:boolean[]=[false,false,false,false];


  mobileNumbers:string[]=['9857461478','8874122145','7456321890','85213469','7412365890'];

  addOnPremiums:number[]=[50,80];
  totalAmount:number=0;
  onCoverage(premium:number,ind:number){
    this.totalAmount-=this.lastPremium;
    this.totalAmount+=premium;
    this.lastPremium=premium;
    for(let i=0;i<this.flagPremium.length;i++)
    {
      if(ind==i)
      {
        this.flagPremium[i]=true;
      }else{
        this.flagPremium[i]=false;
      }
    }
  }

  onAddOn(addOnPremium:number){
    this.totalAmount-=this.lastAddOnPremium;
    this.totalAmount+=addOnPremium;
    this.lastAddOnPremium=addOnPremium;
  }
  
  selectedCoverage(){

  }
  
}
