"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const home_view_model_1 = require("./home-view-model");
const firebase = require("nativescript-plugin-firebase");
let page;
let homeViewModel;
function onNavigatingTo(args) {
    page = args.object;
    homeViewModel = new home_view_model_1.HomeViewModel(page);
    page.bindingContext = homeViewModel;
    /*const listView = page.getViewById<ListView>("homeList")
    page.bindingContext.homeListItems.push({ title: "Game of Thrones" })
    // Manually trigger the update so that the new color is shown.
    listView.refresh()*/
    firebase.init({}).then(() => {
        console.log("firebase.init done");
    }, error => {
        console.log(`firebase.init error: ${error}`);
    });
}
exports.onNavigatingTo = onNavigatingTo;
function onListViewLoaded(args) {
    const listView = args.object;
}
exports.onListViewLoaded = onListViewLoaded;
function onItemTap(args) {
    const index = args.index;
    console.log(`Second ListView item tap ${index}`);
}
exports.onItemTap = onItemTap;
function onTapHome(args) {
    const button = args.object;
    console.log("home");
    homeViewModel.switchPage(home_view_model_1.PageState.Home);
}
exports.onTapHome = onTapHome;
function onTapAdventure(args) {
    const button = args.object;
    console.log("adventure");
    homeViewModel.switchPage(home_view_model_1.PageState.Adventure);
}
exports.onTapAdventure = onTapAdventure;
function onTapEncounter(args) {
    const button = args.object;
    console.log("encounter");
    homeViewModel.switchPage(home_view_model_1.PageState.Encounter);
}
exports.onTapEncounter = onTapEncounter;
function onTapTabern(args) {
    const button = args.object;
    console.log("tabern");
    homeViewModel.switchPage(home_view_model_1.PageState.Tabern);
}
exports.onTapTabern = onTapTabern;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUdGLHVEQUE0RDtBQUk1RCx5REFBd0Q7QUFFeEQsSUFBSSxJQUFVLENBQUE7QUFDZCxJQUFJLGFBQTRCLENBQUE7QUFFaEMsd0JBQStCLElBQW1CO0lBQzlDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBRXhCLGFBQWEsR0FBRyxJQUFJLCtCQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7SUFHbkM7Ozt3QkFHb0I7SUFFcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUdiLENBQUMsQ0FBQyxJQUFJLENBQ0gsR0FBRyxFQUFFO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQ3JDLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDcEQsQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDO0FBdkJELHdDQXVCQztBQUVELDBCQUFpQyxJQUFlO0lBQzVDLE1BQU0sUUFBUSxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUE7QUFDMUMsQ0FBQztBQUZELDRDQUVDO0FBRUQsbUJBQTBCLElBQW1CO0lBQ3pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsS0FBSyxFQUFFLENBQUMsQ0FBQTtBQUNwRCxDQUFDO0FBSEQsOEJBR0M7QUFFRCxtQkFBMEIsSUFBZTtJQUNyQyxNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkIsYUFBYSxDQUFDLFVBQVUsQ0FBQywyQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzVDLENBQUM7QUFKRCw4QkFJQztBQUNELHdCQUErQixJQUFlO0lBQzFDLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN4QixhQUFhLENBQUMsVUFBVSxDQUFDLDJCQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDakQsQ0FBQztBQUpELHdDQUlDO0FBQ0Qsd0JBQStCLElBQWU7SUFDMUMsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3hCLGFBQWEsQ0FBQyxVQUFVLENBQUMsMkJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNqRCxDQUFDO0FBSkQsd0NBSUM7QUFDRCxxQkFBNEIsSUFBZTtJQUN2QyxNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckIsYUFBYSxDQUFDLFVBQVUsQ0FBQywyQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzlDLENBQUM7QUFKRCxrQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiXG5pbXBvcnQgeyBIb21lVmlld01vZGVsLCBQYWdlU3RhdGUgfSBmcm9tIFwiLi9ob21lLXZpZXctbW9kZWxcIlxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCJcbmltcG9ydCB7IExpc3RWaWV3LCBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIlxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIlxuXG5sZXQgcGFnZTogUGFnZVxubGV0IGhvbWVWaWV3TW9kZWw6IEhvbWVWaWV3TW9kZWxcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3RcblxuICAgIGhvbWVWaWV3TW9kZWwgPSBuZXcgSG9tZVZpZXdNb2RlbChwYWdlKVxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBob21lVmlld01vZGVsXG4gICAgXG4gICAgXG4gICAgLypjb25zdCBsaXN0VmlldyA9IHBhZ2UuZ2V0Vmlld0J5SWQ8TGlzdFZpZXc+KFwiaG9tZUxpc3RcIilcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0LmhvbWVMaXN0SXRlbXMucHVzaCh7IHRpdGxlOiBcIkdhbWUgb2YgVGhyb25lc1wiIH0pXG4gICAgLy8gTWFudWFsbHkgdHJpZ2dlciB0aGUgdXBkYXRlIHNvIHRoYXQgdGhlIG5ldyBjb2xvciBpcyBzaG93bi5cbiAgICBsaXN0Vmlldy5yZWZyZXNoKCkqL1xuXG4gICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4gICAgfSkudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIilcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxpc3RWaWV3TG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGxpc3RWaWV3ID0gPExpc3RWaWV3PmFyZ3Mub2JqZWN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJncy5pbmRleFxuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25UYXBIb21lKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3RcbiAgICBjb25zb2xlLmxvZyhcImhvbWVcIilcbiAgICBob21lVmlld01vZGVsLnN3aXRjaFBhZ2UoUGFnZVN0YXRlLkhvbWUpXG59XG5leHBvcnQgZnVuY3Rpb24gb25UYXBBZHZlbnR1cmUoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdFxuICAgIGNvbnNvbGUubG9nKFwiYWR2ZW50dXJlXCIpXG4gICAgaG9tZVZpZXdNb2RlbC5zd2l0Y2hQYWdlKFBhZ2VTdGF0ZS5BZHZlbnR1cmUpXG59XG5leHBvcnQgZnVuY3Rpb24gb25UYXBFbmNvdW50ZXIoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdFxuICAgIGNvbnNvbGUubG9nKFwiZW5jb3VudGVyXCIpXG4gICAgaG9tZVZpZXdNb2RlbC5zd2l0Y2hQYWdlKFBhZ2VTdGF0ZS5FbmNvdW50ZXIpXG59XG5leHBvcnQgZnVuY3Rpb24gb25UYXBUYWJlcm4oYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdFxuICAgIGNvbnNvbGUubG9nKFwidGFiZXJuXCIpXG4gICAgaG9tZVZpZXdNb2RlbC5zd2l0Y2hQYWdlKFBhZ2VTdGF0ZS5UYWJlcm4pXG59Il19