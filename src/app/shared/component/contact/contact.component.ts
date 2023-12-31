import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from 'src/app/material/validation';
import { SnackbarService } from '../snackbar.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent implements OnInit {

  constructor(private _snackbar: SnackbarService) { }



  ngOnInit(): void {
  }


  postform: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [ Validators.required, Validators.pattern(CustomRegex.email) ]),
    Message: new FormControl(null, Validators.required),
  })



  Onpostformsubmit() {
    if (
      this.postform.valid) {
      console.log(this.postform.value)
      this.postform.reset()
      this._snackbar.openSnackbar('Email send succesfull!!')

    }

  }
}
