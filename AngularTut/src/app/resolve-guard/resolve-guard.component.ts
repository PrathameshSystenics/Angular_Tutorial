import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../data/products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'resolve-guard',
  templateUrl: './resolve-guard.component.html',
})
export class ResolveGuardComponent implements OnInit {
  productItems: Products[] = [];
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  // getting the data from the resolve property
  ngOnInit(): void {
    this.productItems = this.activatedRoute.snapshot.data['products'];
  }
}
