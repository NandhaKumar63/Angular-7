import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hasPermissions]'
})
export class HasPermissionDirective {
  private currentUser;
  private permissions = [];

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.getUserPermissions();
    this.updateView();
  }

  getUserPermissions(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  @Input()
  hasPermissions=[];


  // @Input()
  // set hasPermissions(val) {
  //   this.permissions = val;
  //   this.updateView();
  // }



  private updateView() {
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    let hasPermission = false;
    if (this.currentUser && this.currentUser.permissions) {
      hasPermission = this.permissions.every(x => this.currentUser.permissions.indexOf(x) > -1);
    }
    return hasPermission;
  }

}
