import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {


  // css block and none property
  guardianVisible: boolean = false;

  // toggle function for guardian
  toggleGuard(event: any) {
    const checked = event.target.checked;
    this.guardianVisible = checked;
  }

  // form of motherdetails
  MotherDetails: FormGroup;
  ngOnInit(): void {
    this.MotherDetails = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      occupation: new FormControl(null, Validators.required),
      education: new FormControl(null, Validators.required),
      annualincome: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.maxLength(2), Validators.required]),
      employer: new FormControl(null, Validators.required),
      mobileno: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      pan: new FormControl(null, [Validators.maxLength(11), Validators.required]),
      caste: new FormControl(null, Validators.required),
      skills: new FormArray([
        new FormControl(null),
      ])
    });
  }

  submit(event:any){
    console.log(this.MotherDetails)
  }
remove(index:number){
const control = <FormArray>this.MotherDetails.get('skills')
control.removeAt(index)
  }

 
}
