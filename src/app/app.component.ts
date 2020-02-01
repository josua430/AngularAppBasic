import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularApp XYZ';
  listado = ['uno','dos','tres','cuatro'];
  usuarios:string[] = ['Amanda','Kenneth','Sofia'];
  
  user:string ='Jose';
  age:number = 38;
  listadoPublicaciones = [];

  constructor(private dataservice: DataService){
    this.dataservice.getdata().subscribe(data => {
      this.listadoPublicaciones = data;
    });
  }
  mostrarHola(){
    alert('Hola amigos!');
  }
  agregaUsuario(usuario){
    //console.log(usuario.value);
    this.usuarios.push(usuario.value);
    usuario.value ='';
    usuario.focus();
    return false;
  }
  eliminausuario(usuario){
    for (let i = 0; i< this.usuarios.length; i++)
    {
      if (usuario==this.usuarios[i])
      {
        this.usuarios.splice(i, 1);
      }
    }
    
  }
}
