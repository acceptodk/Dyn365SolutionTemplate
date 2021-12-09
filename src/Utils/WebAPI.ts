export module WebAPI {
    /**
     * Get the users detail from CRM
     * @param userId
     * @returns userid, username, userBusinessUnitname
     */
    export const getUserCRMInfo = async (userId: string) => {
        try {
            const result = await Xrm.WebApi.retrieveRecord(
                "systemuser",
                userId,
                "?$select=domainname,_businessunitid_value"
            );

            return {
                userid: result.systemuserid,
                username: result.domainname.split("@")[0],
                userBusinessUnitname:
                    result[
                        "_businessunitid_value@OData.Community.Display.V1.FormattedValue"
                    ],
            };
        } catch (e) {
            console.log("error");
        }
    };
}
