import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pdfSrc = 'https://example.com/my-pdf-file.pdf';

  //   employees:any;
  //   constructor(private http: HttpClient) {
  //     this.data()
  //   }

  //   ngOnInit() {
  //     this.http
  //       .get(
  //         'https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ=='
  //       )
  //       .subscribe((data) => {
  //         console.log(data)
  //         this.employees= data
  //         console.log(this.employees)

  //       });
  //       console.log(this.employees)
  //   }
  //   data(){
  //     console.log(this.employees)
  //   }

  // }

  // timeEntries: any;

  //   constructor(private http: HttpClient) {
  //     console.log(this.timeEntries)
  //   }

  //   ngOnInit() {
  //     this.http.get<any[]>('https://mocki.io/v1/f2778cfa-85b2-4a41-9aa1-08e96d1a956a')
  //       .subscribe(data => {
  //         this.timeEntries = data;
  //         console.log(this.timeEntries)
  //       });
  //       this.delay()
  //   }

  //   isMarkBelow100(mark: number): boolean {
  //     return mark < 100;
  //   }

  //  delay(){
  //   setTimeout(() => {
  //     console.log(this.timeEntries)
  //   }, 3000)
  //  }
  ngOnInit(): void {}
  openPdfInNewTab(url: string) {
    const viewerUrl = `ngx-extended-pdf-viewer:${url}`;
    window.open(viewerUrl, '_blank');
  }
}
