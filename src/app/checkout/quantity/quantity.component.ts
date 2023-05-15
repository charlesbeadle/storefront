import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css'],
})
export class QuantityComponent {
  @Input() currentCount!: number;
  @Output() countChange = new EventEmitter<number>();

  counts = Array.from({ length: 10 }, (_, i) => i + 1);

  onCountChange(event: Event) {
    let target = event.target as HTMLInputElement;
    let value = target.value;
    let count = Number(value);
    this.countChange.emit(count);
  }
}
