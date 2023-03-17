import { HasHtmlFormat } from "./HasHtmlFormat.js";

export interface HasRender{
    render(docObj: HasHtmlFormat, docType: string): void;
}