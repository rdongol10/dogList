import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dogList';

  constructor(private token: TokenStorageService, private route: Router) { }

  isLogedIn(): boolean {

    console.log(this.token.getToken() != null);
    if (this.token.getToken()) {
      return true;
    }
    return false;
  }

  logout(): void {
    this.token.signOut();
    this.route.navigateByUrl('/home');
  }

}
