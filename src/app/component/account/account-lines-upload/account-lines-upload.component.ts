import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadService } from 'src/app/service/file-upload.service';

@Component({
  selector: 'app-account-lines-upload',
  templateUrl: './account-lines-upload.component.html',
  styleUrls: ['./account-lines-upload.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule
  ]
})
export class AccountLinesUploadComponent {

  fileName: string = "";
  currentFile?: File;

  constructor(private fileUploadService: FileUploadService) {}

  upload(){
    if (this.currentFile) {
      this.fileUploadService.upload(this.currentFile).subscribe(
          response => this.currentFile = undefined);
    }
  }
  selectFile(event: any){
    console.log("select file", event)
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }
}
