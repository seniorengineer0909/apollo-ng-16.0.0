import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboards',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'E-Commerce',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                      {
                          label: 'Banking',
                          icon: 'pi pi-fw pi-image',
                          routerLink: ['/dashboard-banking'],

                      },
                      {
                        label: 'Analytics',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/dashboard-analytics']
                    }
                ]
            },
            {
                label: 'Apps',
                icon: 'pi-th-large',
                items: [
                    {
                        label: 'File Managament',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['apps/filemanagament']
                    },
                    {
                        label: 'Task List',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['apps/tasklist']
                    },
                    {
                        label: 'Chat',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['apps/chat']
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['apps/calendar']
                    },
                    {
                        label: 'Mail',
                        icon:'pi pi-envelope',
                        items: [
                            {
                                label: 'Inbox',
                                icon: 'pi pi-fw pi-inbox',
                                routerLink: ['apps/mail/inbox']
                            },
                            {
                                label: 'Compose',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['apps/mail/compose']
                            },
                            {
                                label: 'Mail Detail',
                                icon: 'pi pi-fw pi-comment',
                                routerLink: ['apps/mail/detail/1000']
                            },
                        ]
                    },
                    {
                        label: 'Kanban',
                        icon:'pi pi-envelope',
                        items: [
                            {
                                label: 'Board',
                                icon: 'pi pi-fw pi-th-large',
                                routerLink: ['apps/kanban']
                            },
                        ]
                    },

                ]
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/uikit'],
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/uikit/formlayout'],
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/uikit/input'],
                    },
                    {
                        label: 'Float Label',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/uikit/floatlabel'],
                    },
                    {
                        label: 'Invalid State',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/uikit/invalidstate'],
                    },
                    {
                        label: 'Button',
                        icon: 'pi pi-fw pi-mobile',
                        routerLink: ['/uikit/button'],
                        class: 'rotated-icon',
                    },
                    {
                        label: 'Table',
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/uikit/table'],
                    },
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/uikit/list'],
                    },
                    {
                        label: 'Tree',
                        icon: 'pi pi-fw pi-share-alt',
                        routerLink: ['/uikit/tree'],
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-fw pi-tablet',
                        routerLink: ['/uikit/panel'],
                    },
                    {
                        label: 'Overlay',
                        icon: 'pi pi-fw pi-clone',
                        routerLink: ['/uikit/overlay'],
                    },
                    {
                        label: 'Media',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/uikit/media'],
                    },
                    {
                        label: 'Menu',
                        icon: 'pi pi-fw pi-bars',
                        routerLink: ['/uikit/menu'],
                        routerLinkActiveOptions: {exact: false}
                    },
                    {
                        label: 'Message',
                        icon: 'pi pi-fw pi-comment',
                        routerLink: ['/uikit/message'],
                    },
                    {
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/uikit/file'],
                    },
                    {
                        label: 'Chart',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/uikit/charts'],
                    },
                    {
                        label: 'Misc',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/uikit/misc'],
                    },
                ],
            },
            {
                label: 'Prime Blocks',
                icon: 'pi pi-fw pi-prime',
                routerLink: ['/blocks'],
                items: [
                    {
                        label: 'Free Blocks',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/blocks'],
                    },
                    {
                        label: 'All Blocks',
                        icon: 'pi pi-fw pi-globe',
                        url: ['https://www.primefaces.org/primeblocks-ng'],
                        target: '_blank',
                    },
                ]
            },
            { separator: true },
            {
                label: 'Utilities',
                icon: 'pi pi-fw pi-compass',
                routerLink: ['/utilities'],
                items: [
                    {
                        label: 'PrimeIcons',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['utilities/icons'],
                    },
                    {
                        label: 'PrimeFlex',
                        icon: 'pi pi-fw pi-desktop',
                        url: ['https://www.primefaces.org/primeflex/'],
                        target: '_blank',
                    },
                ]
            },
            { separator: true },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud'],
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline'],
                    },
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing'],
                    },
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/login'],
                    },
                    {
                        label: 'Invoice',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/pages/invoice'],
                    },
                    {
                        label: 'About Us',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/pages/aboutus'],
                    },
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/pages/help'],
                    },
                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['error'],
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['notfound'],
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['access'],
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty'],
                    },
                    {
                        label: 'FAQ',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/pages/faq'],
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/pages/contact'],
                    },
                    {
                        label: 'Register',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['/register'],
                    },
                    {
                        label: 'Forgot Password',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/forgotpassword'],
                    },
                    {
                        label: 'New Password',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: ['/newpassword'],
                    },
                    {
                        label: 'Email Verification',
                        icon: 'pi pi-fw pi-envelope',
                        routerLink: ['/emailverification'],
                    },
                    {
                        label: 'Two-Step Verification',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/twostepverification'],
                    },
                    {
                        label: 'Lock Screen',
                        icon: 'pi pi-fw pi-eye-slash',
                        routerLink: ['/lockscreen'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-wallet',
                items: [
                    {
                        label: 'Product Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['ecommerce/productoverview'],
                    },
                    {
                        label: 'Shop',
                        icon: 'pi pi-fw pi-shopping-bag',
                        routerLink: ['ecommerce/shop'],
                    },
                    {
                        label: 'Shopping Cart',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['ecommerce/shopping-cart'],
                    },
                    {
                        label: 'Checkout',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['ecommerce/checkout'],
                    },
                    {
                        label: 'New Product',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['ecommerce/newproduct'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'E-Commerce Admin',
                icon: 'pi pi-fw pi-shield',
                items: [
                    {
                        label: 'Product List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['ecommerce-admin/productlist'],
                    },
                    {
                        label: 'Orders',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['ecommerce-admin/orders'],
                    },
                    {
                        label: 'Order Details',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: ['ecommerce-admin/orderdetails'],
                    },
                    {
                        label: 'Order History',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['ecommerce-admin/orderhistory'],
                    },
                    {
                        label: 'Edit Order',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['ecommerce-admin/editorder'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'User Managament',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Profile Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['profile/overview'],

                    },
                    {
                        label: 'Profile List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['profile/profilelist'],
                    },
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['profile/create'],
                    },
                ],
            },
            { separator: true },
            {
              label: 'Blog',
              icon: 'pi pi-fw pi-comment',
              items: [
                  {
                      label: 'Blog List',
                      icon: 'pi pi-fw pi-image',
                      routerLink: ['blog/list'],

                  },
                  {
                      label: 'Blog Detail',
                      icon: 'pi pi-fw pi-list',
                      routerLink: ['blog/detail'],

                  },
                  {
                      label: 'Blog Edit',
                      icon: 'pi pi-fw pi-pencil',
                      routerLink: ['blog/edit'],

                  }
              ]
          },
            {
                label: 'Hierarchy',
                icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.3',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 2.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Start',
                icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now',
                        icon: 'pi pi-fw pi-shopping-cart',
                        url: ['https://www.primefaces.org/store'],
                    },
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink: ['/documentation'],
                    },
                ],
            }
        ];
    }
}
