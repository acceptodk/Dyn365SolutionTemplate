import { WebAPI } from "../Utils/WebAPI";

export module Account.Form {
    export const OnLoad = async (context: Xrm.Events.EventContext) => {
        const user = await WebAPI.getUserCRMInfo(
            Xrm.Utility.getGlobalContext().userSettings.userId
        );

        // Print user info
        console.log(user?.username);
        console.log(user?.userBusinessUnitname);
        console.log(user?.userid);

        // Print attribute "name"
        console.log(context.getFormContext().getAttribute("name").getValue());

        // Create OnChange event on field:
        context
            .getFormContext()
            .getAttribute("name")
            .addOnChange(() => {
                console.log(`name changed`);
            });
    };
}
