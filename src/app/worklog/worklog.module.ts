import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WorklogRoutingModule } from "./worklog-routing.module";
import { WorklogComponent } from "./pages/worklog/worklog.component";

@NgModule({
  declarations: [WorklogComponent],
  imports: [CommonModule, WorklogRoutingModule]
})
export class WorklogModule {}