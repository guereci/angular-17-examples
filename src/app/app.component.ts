import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserInterface } from './interfaces/UserInterface'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = signal<UserInterface[]>([
    { id: '1', name: 'Fatih', role: 'developer' },
    { id: '2', name: 'Eren', role: 'titan killer' },
    { id: '3', name: 'Mikasa', role: 'housekeeping' },
  ])

  user1 = this.users()[1] //data for if example
  user2 = this.users()[2] //data for switch example
}
