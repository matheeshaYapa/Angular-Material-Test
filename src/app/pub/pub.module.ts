import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PubRoutingModule} from './pub.routing.module';
import {LayoutComponent} from './common/layout/layout.component';
import {HeaderMenuComponent} from './common/layout/header-menu/header-menu.component';
import {MainNavigationComponent} from './common/layout/main-navigation/main-navigation.component';
import {SidenavListComponent} from './common/layout/sidenav-list/sidenav-list.component';
import {SidenavProfileComponent} from './common/layout/sidenav-profile/sidenav-profile.component';
import {LiquorComponent} from './pages/liquor/liquor/liquor.component';
import {AddLiquorComponent} from './pages/liquor/liquor/add-liquor/add-liquor.component';
import {ViewLiquorComponent} from './pages/liquor/liquor/view-liquor/view-liquor.component';
import {ManageUserComponent} from './pages/manage-user/manage-user.component';
import {UserCreateComponent} from './pages/manage-user/user-create/user-create.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PubRoutingModule,
    SharedModule
  ]
})
export class PubModule { }
