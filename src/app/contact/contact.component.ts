import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  inputValue: string = '';
  inputAgeValue: string = '';
  inputEmailValue: string = '';
  inputPassValue:string='';
}
