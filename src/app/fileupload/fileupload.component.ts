import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css'],
})
export class FileuploadComponent implements OnInit {




  // 1th standard form details ⬇️

  Form_11thStandard: FormGroup;

  ngOnInit(): void {
    this.Form_11thStandard = new FormGroup({
      english: new FormControl(null),
      maths: new FormControl(null),
      phy: new FormControl(null),
      chem: new FormControl(null),
      accounts: new FormControl(null),
      marks: new FormControl(Number),
      //Array to capture dynamic  fields of 11th standard
      Marks_11thStandard: new FormArray([]),
    });
  }

 // Disable The add button after the condition is met 
 Disable_Add_Button: boolean = true;

 //Function to add new rows of 11th Standard into the form array
   Add_New_11thRows(event: any) {
     const newtempArray = this.  Form_11thStandard.get('Marks_11thStandard') as FormArray;
     if (newtempArray.length < 3) {
       newtempArray.push(new FormControl(null));
     } else {
       this. Disable_Add_Button = false;
     
     }
   }
 
   Remove_Inserted_11thRows(index: number) {
     const control = <FormArray>this.Form_11thStandard.get('Marks_11thStandard');
     this. Disable_Add_Button = true;
     control.removeAt(index);
   }

  status = [{ status: 'awaiting' }, { status: 'declared' }];
  //  result status

  hidemarks: boolean = false;
// hidding  the UI of  11th until anyone option is selected
  standard: string = 'Null';
  //intial property

  select(event: any) {
    const selected = event.target.value;
    if (selected == 'awaiting') {
      this.standard = 'awaiting';
      this.hidemarks = true;
    } else if (selected == 'declared') {
      this.standard = 'declared';
      this.hidemarks = true;
    } else {
      this.standard = '';
      this.hidemarks = false;
    }
  }

  // Changing Inner Html Labels Field
  // Labels of 10TH  Standard⬇️

  Lablel10_Marks_Grades_Scored: string = 'Select';
  Lablel10_Marks_Grades_Maximum_Scored: string = 'Select';

  // Labels of 12TH  Standard⬇️
  Lablel12_Marks_Grades_Scored: string = 'Select';
  Lablel12_Marks_Grades_Maximum_Scored: string = 'Select';


//Function of changing labels of 10th marks and grades  scored
  update_LabelOf_10th_Scored(event: any) {
    if (event.target.checked) {
      this. Lablel10_Marks_Grades_Scored = 'Marks Scored';
      this.  Lablel10_Marks_Grades_Maximum_Scored = 'Maximum Marks Scored';
    }
  }

  
//Function of changing labels of 10th max_marks and max_grades  scored
  update_Labelof_10th_Max_Scored_Grades(event: any) {
    if (event.target.checked) {
      this.Lablel10_Marks_Grades_Scored = 'Grade Scored';
      this.Lablel10_Marks_Grades_Maximum_Scored = 'Grades Percentage';
    }
  }
//Function of changing labels of 12th marks and grades  scored
  update_LabelOf_12th_Scored(event: any) {
    if (event.target.checked) {
      this.Lablel12_Marks_Grades_Scored = 'Marks';
      this.Lablel10_Marks_Grades_Maximum_Scored = 'Maximum Marks Scored';
    }
  }

  
//Function of changing labels of 12th marks and grades  scored
  update_Labelof_12th_Max_Scored_Grades(event: any) {
    if (event.target.checked) {
      this.Lablel12_Marks_Grades_Scored = 'Grade';
      this.Lablel10_Marks_Grades_Maximum_Scored= 'Grades Percentage';
    }
  }


  // Function to add file name of 10th Standard
  fileName_10th: string | null = '';

  handleFileInput(event: Event) {
      const file = (event.target as HTMLInputElement).files[0];
      if (file) {
          this.fileName_10th = file.name;
      }
  }
  
  removeFile() {
      this.fileName_10th = '';
  }
  
}
