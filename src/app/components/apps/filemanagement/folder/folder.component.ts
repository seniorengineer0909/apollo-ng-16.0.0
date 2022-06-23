import { Component, Input } from '@angular/core';
import { Folder } from 'src/app/api/folder';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.component.html',
})
export class FolderComponent{
    @Input() data: Folder;
}
