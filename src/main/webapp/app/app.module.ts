import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JihipstertestSharedModule } from 'app/shared/shared.module';
import { JihipstertestCoreModule } from 'app/core/core.module';
import { JihipstertestAppRoutingModule } from './app-routing.module';
import { JihipstertestHomeModule } from './home/home.module';
import { JihipstertestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JihipstertestSharedModule,
    JihipstertestCoreModule,
    JihipstertestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JihipstertestEntityModule,
    JihipstertestAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JihipstertestAppModule {}
