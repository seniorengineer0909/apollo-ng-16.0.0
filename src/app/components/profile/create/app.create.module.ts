import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCreateRoutingModule } from './app.create-routing.module';
import { AppCreateComponent } from './app.create.component';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppCreateRoutingModule,
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
  ],
  declarations: [AppCreateComponent]
})
export class AppCreateModule { }
