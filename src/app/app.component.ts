import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LR11';
  notes: Note[] = [
    {id: 1, date: new Date, name: 'Записка', text: 'Что-то очень важное'},
  ];

  add_title: string;
  add_text: string;

  onAddNote ()
  {
    let note: Note = 
    {id: this.notes.length + 1, date: new Date, name: this.add_title, text: this.add_text}
    this.notes.push(note);
    this.add_title = "";
    this.add_text = '';
  }

  onDeleteNote(id: number)
  {
    let index = this.notes.findIndex( (note) => note.id === id);
    if(index !== -1)
    this.notes.splice(index, 1);
    
  }

}

interface Note
{
  id: number;
  date: Date;
  name: string;
  text: string;
}

