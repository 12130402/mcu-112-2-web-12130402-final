import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../product';
import { IProductForm } from '../interface/product-form.interface';

@Component({
  selector: 'app-product-form-page',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.css',
})
export class ProductFormPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private readonly route = inject(ActivatedRoute);

  form = new FormGroup<IProductForm>({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null),
    company: new FormControl<string | null>(null),
    isShow: new FormControl<boolean>(false, { nonNullable: true }),
    price: new FormControl<string | null>(null),
  });

  product!: Product;
}
