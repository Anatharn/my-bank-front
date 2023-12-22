import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Account } from 'src/app/domain/account/account';

@Component({
  selector: 'app-account-lines-upload',
  templateUrl: './account-lines-upload.component.html',
  styleUrls: ['./account-lines-upload.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule
  ]
})
export class AccountLinesUploadComponent {

  @Input() account?: Account;
  @Output() importAccountLineEvent: EventEmitter<string> = new EventEmitter()
  fileName: string = "";
  currentFile?: File;
 

  constructor(private fileUploadService: FileUploadService) {}

  upload(){
    if (this.currentFile && this.account) {
      this.fileUploadService.upload(this.currentFile, this.account._links.self.href).subscribe(
          response => {
            this.currentFile = undefined
            this.importAccountLineEvent.emit("ok");
          });
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
