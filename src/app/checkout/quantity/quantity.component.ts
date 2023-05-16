import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css'],
})
export class QuantityComponent {
  @Input() currentCount!: number;
  @Output() countChange = new EventEmitter<number>();

  counts = Array.from({ length: 10 }, (_, i) => i + 1);
  toastActive = false;

  constructor(private toastService: ToastService) {}

  onCountChange(event: Event) {
    let target = event.target as HTMLInputElement;
    let value = target.value;
    let count = Number(value);
    this.countChange.emit(count);
    this.triggerToast();
  }

  triggerToast() {
    this.toastService.show();
  }

  ngOnInit(): void {
    this.toastService.toastStatus.subscribe((status: boolean) => {
      this.toastActive = status;
    });
  }
}
