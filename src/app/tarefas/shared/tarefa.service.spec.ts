import { TestBed, inject } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.model';

describe('TarefaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('o serviço deve ser criado', () => {
    const service: TarefaService = TestBed.get(TarefaService);
    expect(service).toBeTruthy();
  });  
});
