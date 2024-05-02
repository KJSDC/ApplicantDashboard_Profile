import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  form: FormGroup;
  formTypes: string[] = ['form1', 'form2', 'form3', 'form4', 'form5'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      temp: this.formBuilder.array([]),
    });
    this.motherdetails = new FormGroup({
      firstname: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      annualincome: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.maxLength(2),
        Validators.required,
      ]),
      employer: new FormControl('', Validators.required),
      mobileno: new FormControl('', [
        Validators.required,
        Validators.maxLength(11),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      pan: new FormControl('', [
        Validators.maxLength(11),
        Validators.required,
      ]),
      caste: new FormControl('', Validators.required),
      skills: new FormArray([new FormControl('')]),
    });
  }
  selectedNationality: string = '';
  onNationalitySelect(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    this.selectedNationality = selectedValue;
  }

  private readonly MCA_ID: number = 1;
  private readonly BCA_ID: number = 2;

  // Rest of your component code...

  onSubmit() {
    if (this.form.valid) {
      const formData = {};
      const tempArray = this.form.get('temp') as FormArray;
      tempArray.controls.forEach((control, index) => {
        const formType = this.formTypes[index];
        formData[formType] = control.value;
      });

      if (this.selectedNationality === 'mca') {
        const mcaData = {
          id: this.MCA_ID,
          // Other fields for mca
        };
        formData['mca'] = mcaData;
      } else if (this.selectedNationality === 'bca') {
        const bcaData = {
          id: this.BCA_ID,
          // Other fields for bca
        };
        formData['bca'] = bcaData;
      }

      const jsonString = JSON.stringify(formData);
      console.log(jsonString);
    } else {
      alert('Please fill out all required fields.');
    }
  }

  addForm(formType: string) {
    let formGroup: FormGroup;
    switch (formType) {
      case 'form1':
        formGroup = this.formBuilder.group({
          form1: this.formBuilder.group({
            firstName: [''],
            dob: [''],
            nationality: [''],
            religion: [''],
            caste: [''],
            subcaste: [''],
            birthtown: [''],
            lang: [''],
            wno: [''],
            alterno: [''],
            address: [''],
            country: [''],
            pincode: [''],
          }),
        });
        break;
      case 'form2':
        formGroup = this.formBuilder.group({
          form2: this.formBuilder.group({
            email: [''],
            phoneNumber: [''],
          }),
        });
        break;
      case 'form3':
        formGroup = this.formBuilder.group({
          form3: this.formBuilder.group({
            email: [''],
            phoneNumber: [''],
          }),
        });
        break;
    }
    const formArray = this.form.get('temp') as FormArray;
    formArray.push(formGroup);
  }
  hidetemp: boolean = false;
  disable(event: any) {
    const checked = event.target.checked;
    this.hidetemp = checked;
  }

  disableperson: boolean = false;
  disablepersonal(event: any) {
    const checked = event.target.checked;
    this.disableperson = checked;
  }
  guard: FormGroup;
  guardianVisible: boolean = false;
  motherdetails: FormGroup;

  submit(event: any) {
    console.log(this.motherdetails);
  }
  remove(index: number) {
    const control = <FormArray>this.motherdetails.get('skills');
    control.removeAt(index);
  }

  toggleGuard(event: any) {
    const checked = event.target.checked;
    this.guardianVisible = checked;
  }
}
