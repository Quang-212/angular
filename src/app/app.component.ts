import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-pipe';
  constructor(private http: HttpClient) {}

  backendPing() {
    return this.http.get('http://18.142.57.242:8080/api/WeatherForecast');
  }

  getEmployeeById(id: string) {
    return this.http.get(`http://18.142.57.242:8080/api/Employee/${id}`);
  }

  ngOnInit(): void {
    this.backendPing().subscribe((data) => console.log(data));
    this.getEmployeeById('11131abd-1b99-688b-96f6-423b4e874d0f').subscribe(
      (employee) => console.log(employee)
    );
  }
}
