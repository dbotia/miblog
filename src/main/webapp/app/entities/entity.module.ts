import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MiblogBlogModule } from './blog/blog.module';
import { MiblogEntryModule } from './entry/entry.module';
import { MiblogTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MiblogBlogModule,
        MiblogEntryModule,
        MiblogTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MiblogEntityModule {}
