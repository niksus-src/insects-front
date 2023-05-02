import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable()
export class ToastService {

  constructor(private messageService: MessageService) { }

  public showError(desc: string) {
    this.messageService.add({severity:'error', summary: 'Ошибка', detail: desc});
  }

  public showSucces(desc: string) {
    this.messageService.add({severity:'success', summary: 'Успешно', detail: desc});
  }
}
