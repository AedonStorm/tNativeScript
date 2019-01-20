"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const home_view_model_1 = require("./home-view-model");
const observable_1 = require("tns-core-modules/data/observable");
let page;
let model;
function onNavigatingTo(args) {
    page = args.object;
    model = new home_view_model_1.HomeViewModel(page);
    page.bindingContext = loadList();
    const listView = page.getViewById("homeList");
    page.bindingContext.homeListItems.push({ title: "Game of Thrones" });
    // Manually trigger the update so that the new color is shown.
    listView.refresh();
    const firebase = require("nativescript-plugin-firebase");
    firebase.init({}).then(() => {
        console.log("firebase.init done");
    }, error => {
        console.log(`firebase.init error: ${error}`);
    });
}
exports.onNavigatingTo = onNavigatingTo;
function loadList() {
    return observable_1.fromObject({
        // Setting the listview binding source
        homeListItems: [
            { title: "The Da Vinci Code" },
            { title: "Harry Potter and the Chamber of Secrets" },
            { title: "The Alchemist" },
            { title: "The Godfather" },
            { title: "Goodnight Moon" },
            { title: "The Hobbit" }
        ]
    });
}
exports.loadList = loadList;
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
    model.switchPage(home_view_model_1.PageState.Home);
}
exports.onTapHome = onTapHome;
function onTapAdventure(args) {
    const button = args.object;
    console.log("adventure");
    model.switchPage(home_view_model_1.PageState.Adventure);
}
exports.onTapAdventure = onTapAdventure;
function onTapEncounter(args) {
    const button = args.object;
    console.log("encounter");
    model.switchPage(home_view_model_1.PageState.Encounter);
}
exports.onTapEncounter = onTapEncounter;
function onTapTabern(args) {
    const button = args.object;
    console.log("tabern");
    model.switchPage(home_view_model_1.PageState.Tabern);
}
exports.onTapTabern = onTapTabern;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUdGLHVEQUE0RDtBQUM1RCxpRUFBd0U7QUFJeEUsSUFBSSxJQUFVLENBQUE7QUFDZCxJQUFJLEtBQW9CLENBQUE7QUFFeEIsd0JBQStCLElBQW1CO0lBQzlDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3hCLEtBQUssR0FBRyxJQUFJLCtCQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLEVBQUUsQ0FBQTtJQUVoQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFXLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUE7SUFDcEUsOERBQThEO0lBQzlELFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUVsQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUV4RCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBR2IsQ0FBQyxDQUFDLElBQUksQ0FDUCxHQUFHLEVBQUU7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDckMsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUNoRCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUF0QkQsd0NBc0JDO0FBRUQ7SUFDSSxNQUFNLENBQUMsdUJBQVUsQ0FBQztRQUNkLHNDQUFzQztRQUN0QyxhQUFhLEVBQUU7WUFDWCxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtZQUM5QixFQUFFLEtBQUssRUFBRSx5Q0FBeUMsRUFBRTtZQUNwRCxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7WUFDMUIsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFO1lBQzFCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFO1lBQzNCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtTQUMxQjtLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFaRCw0QkFZQztBQUVELDBCQUFpQyxJQUFlO0lBQzVDLE1BQU0sUUFBUSxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUE7QUFDMUMsQ0FBQztBQUZELDRDQUVDO0FBRUQsbUJBQTBCLElBQW1CO0lBQ3pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsS0FBSyxFQUFFLENBQUMsQ0FBQTtBQUNwRCxDQUFDO0FBSEQsOEJBR0M7QUFFRCxtQkFBMEIsSUFBZTtJQUNyQyxNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkIsS0FBSyxDQUFDLFVBQVUsQ0FBQywyQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3BDLENBQUM7QUFKRCw4QkFJQztBQUNELHdCQUErQixJQUFlO0lBQzFDLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN4QixLQUFLLENBQUMsVUFBVSxDQUFDLDJCQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDekMsQ0FBQztBQUpELHdDQUlDO0FBQ0Qsd0JBQStCLElBQWU7SUFDMUMsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3hCLEtBQUssQ0FBQyxVQUFVLENBQUMsMkJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN6QyxDQUFDO0FBSkQsd0NBSUM7QUFDRCxxQkFBNEIsSUFBZTtJQUN2QyxNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckIsS0FBSyxDQUFDLFVBQVUsQ0FBQywyQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3RDLENBQUM7QUFKRCxrQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiXG5pbXBvcnQgeyBIb21lVmlld01vZGVsLCBQYWdlU3RhdGUgfSBmcm9tIFwiLi9ob21lLXZpZXctbW9kZWxcIlxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCJcbmltcG9ydCB7IExpc3RWaWV3LCBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIlxuXG5sZXQgcGFnZTogUGFnZVxubGV0IG1vZGVsOiBIb21lVmlld01vZGVsXG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0XG4gICAgbW9kZWwgPSBuZXcgSG9tZVZpZXdNb2RlbChwYWdlKVxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBsb2FkTGlzdCgpXG4gICAgXG4gICAgY29uc3QgbGlzdFZpZXcgPSBwYWdlLmdldFZpZXdCeUlkPExpc3RWaWV3PihcImhvbWVMaXN0XCIpXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dC5ob21lTGlzdEl0ZW1zLnB1c2goeyB0aXRsZTogXCJHYW1lIG9mIFRocm9uZXNcIiB9KVxuICAgIC8vIE1hbnVhbGx5IHRyaWdnZXIgdGhlIHVwZGF0ZSBzbyB0aGF0IHRoZSBuZXcgY29sb3IgaXMgc2hvd24uXG4gICAgbGlzdFZpZXcucmVmcmVzaCgpXG5cbiAgICBjb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpXG5cbiAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cbiAgICB9KS50aGVuKFxuICAgICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIilcbiAgICB9LFxuICAgIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZExpc3QoKSB7XG4gICAgcmV0dXJuIGZyb21PYmplY3Qoe1xuICAgICAgICAvLyBTZXR0aW5nIHRoZSBsaXN0dmlldyBiaW5kaW5nIHNvdXJjZVxuICAgICAgICBob21lTGlzdEl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRpdGxlOiBcIlRoZSBEYSBWaW5jaSBDb2RlXCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiSGFycnkgUG90dGVyIGFuZCB0aGUgQ2hhbWJlciBvZiBTZWNyZXRzXCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIEFsY2hlbWlzdFwiIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIlRoZSBHb2RmYXRoZXJcIiB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJHb29kbmlnaHQgTW9vblwiIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIlRoZSBIb2JiaXRcIiB9XG4gICAgICAgIF1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25MaXN0Vmlld0xvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBsaXN0VmlldyA9IDxMaXN0Vmlldz5hcmdzLm9iamVjdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuaW5kZXhcbiAgICBjb25zb2xlLmxvZyhgU2Vjb25kIExpc3RWaWV3IGl0ZW0gdGFwICR7aW5kZXh9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwSG9tZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBidXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0XG4gICAgY29uc29sZS5sb2coXCJob21lXCIpXG4gICAgbW9kZWwuc3dpdGNoUGFnZShQYWdlU3RhdGUuSG9tZSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRhcEFkdmVudHVyZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBidXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0XG4gICAgY29uc29sZS5sb2coXCJhZHZlbnR1cmVcIilcbiAgICBtb2RlbC5zd2l0Y2hQYWdlKFBhZ2VTdGF0ZS5BZHZlbnR1cmUpXG59XG5leHBvcnQgZnVuY3Rpb24gb25UYXBFbmNvdW50ZXIoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdFxuICAgIGNvbnNvbGUubG9nKFwiZW5jb3VudGVyXCIpXG4gICAgbW9kZWwuc3dpdGNoUGFnZShQYWdlU3RhdGUuRW5jb3VudGVyKVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwVGFiZXJuKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3RcbiAgICBjb25zb2xlLmxvZyhcInRhYmVyblwiKVxuICAgIG1vZGVsLnN3aXRjaFBhZ2UoUGFnZVN0YXRlLlRhYmVybilcbn0iXX0=