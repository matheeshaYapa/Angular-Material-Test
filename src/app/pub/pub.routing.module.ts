import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
import {LiquorComponent} from './pages/liquor/liquor/liquor.component';
import {AddLiquorComponent} from './pages/liquor/liquor/add-liquor/add-liquor.component';
import {ViewLiquorComponent} from './pages/liquor/liquor/view-liquor/view-liquor.component';
import {ManageUserComponent} from './pages/manage-user/manage-user.component';
import {UserCreateComponent} from './pages/manage-user/user-create/user-create.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'manage-liquor/liquor',
        pathMatch: 'full'
      },
      {
        path: 'manage-liquor/liquor',
        component: LiquorComponent
      },
      {
        path: 'manage-liquor/liquor/add-liquor',
        component: AddLiquorComponent
      },
      {
        path: 'manage-liquor/liquor/:id/view',
        component: ViewLiquorComponent
      },
      {
        path: 'manage-user',
        component: ManageUserComponent
      },
      {
        path: 'manage-user/create',
        component: UserCreateComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PubRoutingModule { }
