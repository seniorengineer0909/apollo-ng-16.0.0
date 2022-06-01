import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

interface Product{
    name: string;
    price: string;
    code: string;
    sku: string;
    status: string;
    tags: string[];
    category: string;
    colors: string[];
    stock: string;
    inStock: boolean;
    description: string;
    images: string[];
}

@Component({
    selector: 'app-newproduct',
    templateUrl: './app.newproduct.component.html',
    styleUrls: ['./app.newproduct.component.scss','../../../../assets/demo/editor.scss']
})
export class AppNewProductComponent {

    @ViewChildren('buttonEl') buttonEl: QueryList<ElementRef>; 

    text: string;

    categoryOptions = ['Sneakers', 'Apparel', 'Socks'];

    colorOptions: any[] = [
      {name: 'Black', background: "bg-gray-900"},
      {name: 'Orange', background: "bg-orange-500"},
      {name: 'Navy', background: "bg-blue-500"}
    ];

    product: Product = {
      name: '',
      price: '',
      code: '',
      sku: '',
      status: 'Draft',
      tags: ['Nike', 'Sneaker'],
      category: 'Sneakers',
      colors: ['Blue'],
      stock: 'Sneakers',
      inStock: true,
      description: '',
      images: []
    };

    uploadedFiles: any[] = [];

    showRemove: boolean = false;

    constructor(private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        {label: 'New Product'},
      ]);
    }
    
    onChipRemove(item) {
      this.product.tags = this.product.tags.filter(i => i !== item);
    }

    onColorSelect(color) {
      this.product.colors.indexOf(color) == -1 ? this.product.colors.push(color) : this.product.colors.splice(this.product.colors.indexOf(color), 1);
    }

    onUpload(event) {
      for(let file of event.files) {
        this.product.images.push(file);
      }
    }

    onImageMouseOver(file) {
      this.buttonEl.toArray().forEach(el => {
        el.nativeElement.id === file.name ? el.nativeElement.style.display = 'flex' : null;
      })
    }

    onImageMouseLeave(file) {
      this.buttonEl.toArray().forEach(el => {
        el.nativeElement.id === file.name ? el.nativeElement.style.display = 'none' : null;
      })
    }

    removeImage(file) {
      this.product.images = this.product.images.filter(i => i !== file);
    }

}
