import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DataTableComponent } from './data-table/data-table.component';
import {SharedModule} from './shared/shared.module';
import {PubModule} from './pub/pub.module';
import {LayoutComponent} from './pub/common/layout/layout.component';
import {HeaderMenuComponent} from './pub/common/layout/header-menu/header-menu.component';
import {MainNavigationComponent} from './pub/common/layout/main-navigation/main-navigation.component';
import {SidenavListComponent} from './pub/common/layout/sidenav-list/sidenav-list.component';
import {SidenavProfileComponent} from './pub/common/layout/sidenav-profile/sidenav-profile.component';
import {LiquorComponent} from './pub/pages/liquor/liquor/liquor.component';
import {AddLiquorComponent} from './pub/pages/liquor/liquor/add-liquor/add-liquor.component';
import {ViewLiquorComponent} from './pub/pages/liquor/liquor/view-liquor/view-liquor.component';
import {ManageUserComponent} from './pub/pages/manage-user/manage-user.component';
import {UserCreateComponent} from './pub/pages/manage-user/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DataTableComponent,
    LayoutComponent,
    HeaderMenuComponent,
    MainNavigationComponent,
    SidenavListComponent,
    SidenavProfileComponent,
    LiquorComponent,
    AddLiquorComponent,
    ViewLiquorComponent,
    ManageUserComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
