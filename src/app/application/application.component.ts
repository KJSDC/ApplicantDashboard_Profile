import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent  implements OnInit{

  // css property

HideTemporaryAddress: boolean =false;
// fuction to toggle off temporary address
DisableTemporaryAddress(event:any){
  const checked = event.target.checked;
  this.HideTemporaryAddress =checked;

}

personal:FormGroup
ngOnInit(): void {

  this.personal= new FormGroup({
    english: new FormControl(null),
    maths:new FormControl(null),
    phy:new FormControl(null),
    chem:new FormControl(null),
    accounts:new FormControl(null),
    marks:new FormControl(null),

  })
}
}
