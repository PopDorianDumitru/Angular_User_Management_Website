import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment/environment';
import { User } from './models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(environment.baseURL + '/users');
  }

  getUsersByRole(role:string){
    if(role.length == 0)
      return this.http.get(environment.baseURL + '/users');
    return this.http.get(environment.baseURL + '/users?role=' + role);
  }

  getUsersByName(name:string){
    if(name.length == 0)
      return this.http.get(environment.baseURL + '/users');
    return this.http.get(environment.baseURL + '/users?name=' + name);
  }

  isUser(obj: any) : obj is User{
    return obj && typeof obj.id === 'string' && typeof obj.name === 'string' && typeof obj.username === 'string' && typeof obj.password === 'string' && typeof obj.age === 'number' && typeof obj.role === 'string' && typeof obj.profile === 'string' && typeof obj.email === 'string' && typeof obj.webpage === 'string';
  }

  getUserById(id:string){
    return this.http.get(environment.baseURL + '/users/details?id=' + id);
  }

  deleteUserById(id:string){
    return this.http.delete(environment.baseURL + '/users?id=' + id);
  }

  updateUserById(id: string, user: Partial<User>){
    return this.http.patch(environment.baseURL + '/users?id=' + id, user);
  }

  createUser(user: Partial<User>){
    return this.http.post(environment.baseURL + '/users', user);
  }

}
