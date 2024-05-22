import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

const app = platformBrowserDynamic().bootstrapModule(AppModule).catch(
  err => console.log(err)
)
