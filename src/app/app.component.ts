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
    { id: '1', name: 'fatih', role: 'developer' },
    { id: '2', name: 'eren', role: 'titan killer' },
    { id: '3', name: 'mikasa', role: 'housekeeping' },
  ])
}
