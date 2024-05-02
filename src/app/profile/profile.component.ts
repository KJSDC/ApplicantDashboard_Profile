import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isClicked: boolean = false;

  enableInput(): void {
    const inputElement = document.getElementById('phone-input') as HTMLInputElement;
    inputElement.disabled = false;
    inputElement.focus();
    this.isClicked = true; 
  }
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
    isContainerVisible = false;
    
    toggleContainerVisibility() {
    this.isContainerVisible = !this.isContainerVisible;
    }
    
        

}
