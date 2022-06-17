import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DataViewModule } from "primeng/dataview";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { BlogCommentsListComponent } from "./blog-comments-list/blog-comments-list.component";
import { BlogCommentsComponent } from "./blog-comments/blog-comments.component";
import { BlogDetailComponent } from "./blog-detail.component";
import { BlogDetailRoutingModule } from "./blogdetail-routing.module";


@NgModule({
    imports: [
        CommonModule,
        BlogDetailRoutingModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        InputNumberModule,
        TableModule,
        CheckboxModule,
        FormsModule,
        RippleModule,
        DividerModule,
        AvatarModule,
        DataViewModule

    ],
    declarations: [BlogCommentsComponent, BlogCommentsListComponent, BlogDetailComponent]
  })
  export class BlogDetailModule { }

