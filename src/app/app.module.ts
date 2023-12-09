import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {EngineComponent} from './engine/engine.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person-card/person.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EngineComponent,
    NoteComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
