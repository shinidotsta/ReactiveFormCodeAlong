import { Component, OnInit } from '@angular/core';
import   { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-profileeditor',
  templateUrl: './profileeditor.component.html',
  styleUrls: ['./profileeditor.component.scss']
})
export class ProfileeditorComponent  {
profileform=new FormGroup({
  firstName : new FormControl(''),
  lastname  : new FormControl('')
});
 
onSubmit()
{
  console.warn(this.profileform.value);
}
}
