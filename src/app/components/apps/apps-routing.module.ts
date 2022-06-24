import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'calendar', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./calendar/calendar.app.module').then(m => m.CalendarAppModule) },
        { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/apps.tasklist.module').then(m => m.AppsTaskListModule) },
        { path: 'chat', data: { breadcrumb: 'Chat' }, loadChildren: () => import('./chat/apps.chat.module').then(m => m.AppsChatModule) },
        { path: 'file-management', data: { breadcrumb: 'File Management' }, loadChildren: () => import('./filemanagement/apps.filemanagement.module').then(m => m.AppsFileManagementModule) },
        { path: 'mail', data: { breadcrumb: 'Mail' }, loadChildren: () => import('./mail/apps.mail.module').then(m => m.AppsMailModule) },
        { path: 'kanban', data: { breadcrumb: 'Kanban' }, loadChildren: () => import('./kanban/apps.kanban.module').then(m => m.AppsKanbanModule) },
        { path: 'blog', data: { breadcrumb: 'Blog' }, loadChildren: () => import('./blog/blog.app.module').then(m => m.BlogAppModule) }
    ])],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
