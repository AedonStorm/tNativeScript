"use strict";
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("application");
var fontIconConverter_1 = require("./utils/fontIconConverter");
app.setResources((_a = {}, _a['fontIconConverter'] = fontIconConverter_1.default, _a));
app.run({ moduleName: "app-root" });
var _a;
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLGlDQUFtQztBQUNuQywrREFBMEQ7QUFFMUQsR0FBRyxDQUFDLFlBQVksV0FBRSxHQUFDLG1CQUFtQixJQUFJLDJCQUFpQixNQUFFLENBQUE7QUFFN0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDOztBQUVwQzs7O0VBR0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxuKi9cblxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IGZvbnRJY29uQ29udmVydGVyIGZyb20gJy4vdXRpbHMvZm9udEljb25Db252ZXJ0ZXInO1xuXG5hcHAuc2V0UmVzb3VyY2VzKHtbJ2ZvbnRJY29uQ29udmVydGVyJ10gOiBmb250SWNvbkNvbnZlcnRlcn0pXG5cbmFwcC5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG4iXX0=