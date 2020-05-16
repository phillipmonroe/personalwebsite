import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "experience.component.html"
})
export class ExperienceComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("experience-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("experience-page");
  }
}
