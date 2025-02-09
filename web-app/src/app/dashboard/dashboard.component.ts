import { Component, OnInit } from '@angular/core';

import { Fornecedor } from '../fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fornecedor: Fornecedor = new Fornecedor();

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.fornecedorService.getFornecedor()
    .then( (res) => {
      this.fornecedor = res;
    })
    .catch ( (err) => {
      console.log("deu erro");
      console.log(err);
    });
  }

  logout(){
    this.fornecedorService.logOut();
  }

}
