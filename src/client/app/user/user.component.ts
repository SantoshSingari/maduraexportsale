import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/index';
import { User,Status,Country} from '../_models/index';
import { SelectItem } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { Message } from 'primeng/primeng';


@Component({
  moduleId: module.id,
  templateUrl: 'user.component.html',
  providers: [UserService]
})

export class UserComponent implements OnInit {
  users: User[];
 

  constructor(private userService: UserService) {
   
  }

  ngOnInit() {

  }
 
  
}


