import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.template, {
        index: i
      })
    }
  }
}
