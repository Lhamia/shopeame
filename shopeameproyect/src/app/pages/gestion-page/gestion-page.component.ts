import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss'],
})
export class GestionPageComponent implements OnInit {
  gestionForm!: FormGroup;
  submitted: boolean = false;
  createdProduct: any;
  constructor(private formBuilder: FormBuilder, public productsService: ProductsService) {
    this.gestionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      precio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      opinion: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.gestionForm);
    console.log(this.gestionForm.value);
    this.submitted = true;
    if (this.gestionForm.valid) {
      const newProduct: any = {
        nombre: this.gestionForm.get('nombre')?.value,
        precio: this.gestionForm.get('precio')?.value,
        descripcion: this.gestionForm.get('descripcion')?.value,
        opinion: this.gestionForm.get('opinion')?.value,
        image: this.gestionForm.get('image')?.value,
      };
      console.log('Este seria el nuevo producto:', newProduct);
      this.createdProduct = newProduct;
      console.log(this.createdProduct);
      this.productsService.postProduct(this.createdProduct)
    }
  }

  ngOnInit(): void {
    this.gestionForm.valueChanges.subscribe((changes) => {
      console.log(changes);
    });
    console.log(this.createdProduct);
  }
}
