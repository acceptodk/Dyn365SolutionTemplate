export module Contact.Form {
    export const OnLoad = (context: Xrm.Events.EventContext) => {
        debugger;
        // Print attribute "firstname"
        console.log(
            context.getFormContext().getAttribute("firstname").getValue()
        );
    };
}
