import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorNote]'
})
export class ColorNoteDirective {

  @Input() appColorNote: string = 'white';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appColorNote;
  }


}
