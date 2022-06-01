import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.component.html',
})
export class FolderComponent{
    @Input() folder: any;
}
