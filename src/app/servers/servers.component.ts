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

  constructor() { 
    setTimeout(() => {this.allowNewServer = true;}, 2000)
  }

  onCreateServer(){
    this.serverCreationStatus = `Server ${ this.serverName } was created`
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
