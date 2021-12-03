export namespace AccountForm {
    // Functional way
    export const OnLoad = (context: Xrm.Events.EventContext) => {
        alert("test");
        alert(context.getFormContext().getAttribute("name").getValue());

        // Create OnChange event on field:
        context
            .getFormContext()
            .getAttribute("name")
            .addOnChange(() => {
                console.log(`name changed`);
            });
    };
}
