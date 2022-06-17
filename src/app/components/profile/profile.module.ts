import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ButtonModule } from 'primeng/button';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AppOverviewComponent } from './overview/app.overview.component';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AppFollowersComponent } from './followers/app.followers.component';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { AppSettingsComponent } from './settings/app.settings.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipModule,
    ColorPickerModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KnobModule,
    ListboxModule,
    MultiSelectModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    SliderModule,
    ToggleButtonModule,
    AvatarModule,
    FormsModule,
    ButtonModule,
    CommonModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    ToggleButtonModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    ChipModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    MenuModule,
    TableModule,
    RippleModule,
    DividerModule
  ],
  declarations: [ProfileComponent, AppOverviewComponent, AppSettingsComponent, AppFollowersComponent]
})
export class ProfileModule { }
