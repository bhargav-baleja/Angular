import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnglishComponent } from './component-factory-resolver/english/english.component';
import { GujaratiComponent } from './component-factory-resolver/gujarati/gujarati.component';
import { DynamicComponentDirective } from './directive/dynamic-component.directive';
import { PortalModule} from '@angular/cdk/portal'
import { OverlayModule } from '@angular/cdk/overlay'
import { CommonModule } from '@angular/common';
import { ChineseComponent } from './cdk-portal/chinese/chinese.component';
import { HindiComponent } from './cdk-portal/hindi/hindi.component';
import { MarathiComponent } from './overlay/marathi/marathi.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglishComponent,
    GujaratiComponent,
    DynamicComponentDirective,
    ChineseComponent,
    HindiComponent,
    MarathiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PortalModule,
    OverlayModule
  ],
  entryComponents:[EnglishComponent,GujaratiComponent,ChineseComponent,HindiComponent,MarathiComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
