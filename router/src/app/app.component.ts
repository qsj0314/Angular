import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //
  //toProductDetails 会用到一个路由对象  这个对象从构造函数里面过来
  constructor(private router:Router){}

  toProductDetails(){
  //  导航到一个路由上（用router中的navigate方法）
    this.router.navigate(['/product']);
  }

//  使用Angular Router

//  在路由时传递数据
//  1.在查询参数中传递数据
//
}
