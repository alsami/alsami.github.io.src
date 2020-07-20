import { LayoutComponent } from '@alsami/core/containers';
import { MaterialModule } from '@alsami/material/material.module';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

const CONTAINERS = [];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LayoutComponent],
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
