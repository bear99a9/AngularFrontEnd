import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has been created';
  serverName = "";
  userName: string = "";
  serverCreated = false;
  servers = ['TestServer', 'LiveServer'];

  constructor() { 
    setTimeout(() => {this.allowNewServer = true;}, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server ${ this.serverName } was created`;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

  resetUsername(){
    this.userName = "";
  }

  ngOnInit(): void {
  }

}
