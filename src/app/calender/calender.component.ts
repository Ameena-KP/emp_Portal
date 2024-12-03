import { Component, model } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { Data } from '@angular/router';


@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [MatCardModule,MatDatepickerModule],
  providers:[provideNativeDateAdapter()],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {

  selected = model<Data | null>(null);

}
