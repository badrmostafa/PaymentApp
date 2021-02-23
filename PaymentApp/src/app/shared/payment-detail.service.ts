import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }
readonly url = 'http://localhost:61401/api/PaymentDetail'
list:PaymentDetail[]
formData:PaymentDetail = new PaymentDetail();
postPaymentDetail()
{
  return this.http.post(this.url,this.formData);
}

putPaymentDetail()
{
  return this.http.put(`${this.url}/${this.formData.paymentDetailId}`,this.formData);
}
deletePaymentDetail(id:number)
{
  return this.http.delete(`${this.url}/${id}`);
}

refreshList()
{
  this.http.get(this.url).toPromise().then(result => this.list = result as PaymentDetail[]);
}

}
