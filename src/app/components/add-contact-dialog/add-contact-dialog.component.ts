import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.scss'],
})
export class AddContactDialogComponent implements OnInit {
  name: any = new FormControl('', [Validators.required]);
  avatars: string[] = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  user!: User;

  constructor(
    private dialogRef: MatDialogRef<AddContactDialogComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = {} as User;
  }

  save() {
    this.userService.addUser(this.user).then((user) => {
      this.dialogRef.close(user);
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a Name' : '';
  }
}
