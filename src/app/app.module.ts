import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container/container.component';
import { LoggerLevel, setLoggerLevel } from './core/utils/logger';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

setLoggerLevel(LoggerLevel.DEBUG);
