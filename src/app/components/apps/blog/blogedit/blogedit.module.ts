import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ChipModule } from "primeng/chip";
import { DropdownModule } from "primeng/dropdown";
import { EditorModule } from "primeng/editor";
import { FileUploadModule } from "primeng/fileupload";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { BlogeditRoutingModule } from "./blogedit-routing.module";
import { BlogeditComponent } from "./blogedit.component";


@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        FormsModule,
        RippleModule,
        BlogeditRoutingModule,
        ChipModule,
        FileUploadModule,
        InputSwitchModule,
        EditorModule,
        ChipModule

    ],
    declarations: [BlogeditComponent]
  })
  export class BlogeditModule { }



