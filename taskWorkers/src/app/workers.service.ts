import { Injectable } from '@angular/core';

export interface Worker{
  firstName: string,
  lastName: string,
  patronymic: string,
  department: string
}

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor() { }

  workers:Worker[] = [
    {firstName: "Антон", lastName: "Власович", patronymic:"Андреевич", department: "IT отдел"},
    {firstName: "Михаил", lastName: "Кудрявых", patronymic:"Игорьевич", department: "Отдел продаж"},
    {firstName: "Кирилл", lastName: "Кирсанов", patronymic:"Григорьевич", department: "Отдел доставки"},
    {firstName: "Семен", lastName: "Валуев", patronymic:"Анатольевич", department: "Юридический отдел"},
  ];

  addWorker(worker:Worker){
    this.workers.unshift(worker);
  }

  delWorker(worker:Worker){
    for (let i = 0; i < this.workers.length; i++) {
      if (this.workers[i] == worker) {
        this.workers.splice(i, 1);
      }
    }
  } 
}
