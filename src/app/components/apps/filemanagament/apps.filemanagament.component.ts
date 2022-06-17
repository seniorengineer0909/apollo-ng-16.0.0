import { Component, ElementRef, QueryList, ViewChildren, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';


interface File {
    name: string;
    image: string;
    date: string;
    fileSize: string;
}

@Component({
    selector: 'app-apps.filemanagament',
    templateUrl: './apps.filemanagament.component.html',
    styleUrls: ['./apps.filemanagament.scss']
})
export class AppsFilemanagamentComponent {

    cards = [
        {
            title: "Cloud Storage",
            icon: "pi pi-ellipsis-v",
            fieldColor: "bg-yellow-500",
            color: "bg-yellow-100",
            files: "123,232 Files",
            fileSize: "1.5GB",
            items: [
                { label: 'Cloud Storage' },
            ]

        },
        {
            title: "Dropbox Storage",
            icon: "pi pi-ellipsis-v",
            fieldColor: "bg-pink-500",
            color: "bg-pink-100",
            files: "123,232 Files",
            fileSize: "4.1GB",
            items: [
                { label: 'Dropbox Storage' },
            ]

        },
        {
            title: "Google Drive Storage",
            icon: "pi pi-ellipsis-v",
            fieldColor: "bg-green-500",
            color: "bg-green-100",
            files: "123,232 Files",
            fileSize: "1.3GB",
            items: [
                { label: 'Google Drive Storage'},
            ]

        },
        {
            title: "Internal Storage",
            icon: "pi pi-ellipsis-v",
            fieldColor: "bg-indigo-500",
            color: "bg-indigo-100",
            files: "123,232 Files",
            fileSize: "5.3GB",
            items: [
                { label: 'Internal Storage'},
            ]

        }

    ];

    files: File[] = [
        {
            name: "Jing Lee.jpeg",
            image: "assets/demo/images/avatar/elwinsharvill.png",
            date: "29 Jul 2021",
            fileSize: "12 MB"
        },
        {
            name: "Tableart.jpeg",
            image: "assets/demo/images/avatar/bernardodominic.png",
            date: "29 Jul 2021",
            fileSize: "6 MB"
        },
        {
            name: "Deeppassion.waw",
            image: "assets/demo/images/avatar/ionibowcher.png",
            date: "29 Jul 2021",
            fileSize: "32 MB"
        },
        {
            name: "Clock.png",
            image: "assets/demo/images/avatar/bernardodominic.png",
            date: "29 Jul 2021",
            fileSize: "12 MB"
        },
        {
            name: "CV.pdf",
            image: "assets/demo/images/avatar/profile.jpg",
            date: "29 Jul 2021",
            fileSize: "1.6 MB"
        },
        {
            name: "Abstract.png",
            image: "assets/demo/images/avatar/amyelsner.png",
            date: "29 Jul 2021",
            fileSize: "1.8 MB"
        }
    ];

    accounts = [
        {

            name: "Document Files",
            icon: "pi pi-folder",
            size: "1.8 GB"
        }, {

            name: "Document Files",
            icon: "pi pi-images",
            size: "23 GB"
        },
        {

            name: "Other Files",
            icon: "pi pi-folder-open",
            size: "1.8 GB"
        },
        {

            name: "Unknown Files",
            icon: "pi pi-folder-open",
            size: "16 GB"
        },
    ];


    folders = [
        {

            name: "Miami 2022",
            icon: "pi pi-folder",
            size: "12"
        }, {

            name: "Protoype",
            icon: "pi pi-folder",
            size: "1"
        },
        {

            name: "Other Files",
            icon: "pi pi-folder",
            size: "53"
        },
        {

            name: "Antalya Holiday",
            icon: "pi pi-folder",
            size: "1"
        },
        {

            name: "Studio Photograpy",
            icon: "pi pi-folder",
            size: "3"
        },
        {

            name: "Server Backup",
            icon: "pi pi-folder-open",
            size: "9"
        },
        {

            name: "Document Files",
            icon: "pi pi-folder",
            size: "53"
        },
        {

            name: "Vocals",
            icon: "pi pi-image",
            size: "0"
        },
        {

            name: "Volces",
            icon: "pi pi-folder-open",
            size: "6"
        },
    ];

    cols = [
        { field: 'name', header: 'Name' },
        { field: 'date', header: 'Date' },
        { field: 'file size', header: 'File Size' },
        { field: 'status', header: 'Status' },
    ];

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'File Managament' }
        ]);
    }

}