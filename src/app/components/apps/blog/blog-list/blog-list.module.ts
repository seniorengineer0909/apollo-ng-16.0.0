import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ColorPickerModule } from "primeng/colorpicker";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from "primeng/knob";
import { ListboxModule } from "primeng/listbox";
import { MenuModule } from "primeng/menu";
import { MultiSelectModule } from "primeng/multiselect";
import { PaginatorModule } from "primeng/paginator";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { SelectButtonModule } from "primeng/selectbutton";
import { SliderModule } from "primeng/slider";
import { TableModule } from "primeng/table";
import { ToggleButtonModule } from "primeng/togglebutton";
import { DataViewModule } from 'primeng/dataview';
import { BlogListCardComponent } from "./blog-list-card/blog-list-card.component";
import { BlogListComponent } from "./blog-list.component";
import { BlogListRoutingModule } from "./blog-list-routing.module";

@NgModule({
    imports: [
        CommonModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        ColorPickerModule,
        CascadeSelectModule,
        MultiSelectModule,
        ToggleButtonModule,
        SliderModule,
        InputTextareaModule,
        RadioButtonModule,
        InputTextModule,
        RatingModule,
        ChipModule,
        KnobModule,
        InputSwitchModule,
        ListboxModule,
        SelectButtonModule,
        CheckboxModule,
        ButtonModule,
        AvatarModule,
        FormsModule,
        TableModule,
        RippleModule,
        MenuModule,
        BlogListRoutingModule,
        PaginatorModule,
        DataViewModule
    ],
    declarations: [BlogListComponent, BlogListCardComponent]
  })
  export class BlogListModule { }
