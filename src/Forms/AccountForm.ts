export const AccountForm = {
    OnLoad: (context: Xrm.Events.EventContext) => {
        //alert(context.getFormContext().getAttribute("name").getValue());

        // Create OnChange event on field:
        context
            .getFormContext()
            .getAttribute("name")
            .addOnChange(() => {
                console.log(`name changed`);
            });
    },
};

