import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() images: string[] = [];
  currentPage: number = 0;

  checkIndex(i: number): boolean {
    return Math.abs(this.currentPage - i) < 5;
  }
}
