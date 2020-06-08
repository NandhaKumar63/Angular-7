import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less'],
  providers: [
    { provide: 'Window', useValue: window }
  ]
})
export class ProductDetailComponent implements OnInit, AfterViewInit {


  productDetail: IProduct;
  img: string;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute, private router: Router,
    @Inject('Window') private window: Window) { }

  ngOnInit() {
    // const id = this.routerState.snapshot.params['id'];

    this.activatedRoute.params.subscribe((params) => {
      const yourID = params['id'];
      this.getProductByID(yourID);
    });

  }

  ngAfterViewInit(): void {

  }
  
  getProductByID(id: number): void {
    this.productService.getProductByID(id).subscribe((product: IProduct) => {
      this.productDetail = product;
      const fragmentId = this.activatedRoute.snapshot.fragment;
      setTimeout(() => {
        const ele = document.getElementById(fragmentId);
        // ele.focus();
      });
    });
  }

  gotoProducts(): void {
    this.router.navigate(['../products'], {
      relativeTo: this.activatedRoute
    });
  }

  download() {


    // var doc = new jsPDF();
    const ele = document.getElementById('reviews');
    // doc.fromHTML(ele,20, 30);
    // doc.text(20, 20, 'Hello world!');
    // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    // doc.addPage();
    // doc.text(20, 20, 'Do you like that?');
    // doc.output('blob');
    // Save the PDF
    // doc.save('Test.pdf');

    //     var pdf = new jsPDF('p', 'pt', 'letter');
    //  pdf.addHTML(ele, ()=> {
    //      pdf.save('Test.pdf');
    //  })

    let doc = new jsPDF('p', 'pt', 'a4');
    doc.addHTML(ele, () => {
      // doc.save('html.pdf');
      debugger
    });

  }

}
