import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modalgeneric',
  templateUrl: './modalgeneric.component.html',
  styleUrl: './modalgeneric.component.css'
})
export class ModalgenericComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalgenericComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  animal: string;
  name: string;
}