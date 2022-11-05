---
title: "Exchange 2010 SP1 Multi Tenant"
publishDate: "2012-07-13"
categories: 
  - "general"
---

When trying to assign full mailbox rights on an Exchange Multi Tenant installation, you receive this error:

**Add-MailboxPermission -Identity** [**usera@domain**](mailto:usera@domain) **-User** [**userb**](mailto:userb@domain)[**@**](mailto:userb@y)**domain** **-AccessRights 'FullAccess'**

The operation on mailbox [usera@domain](mailto:usera@domain) failed because it's  
out of the current user's write scope. The object 'userb' must be within the read scope before and after it's modified. Can't perform the save operation.  
    + CategoryInfo          : NotSpecified: (ehosting.local/...C/Administrator:ADObjectId) \[Add-MailboxPermission\], Ta  
   skInvalidOperationException  
    + FullyQualifiedErrorId : CFE6232C,Microsoft.Exchange.Management.RecipientTasks.AddMailboxPermission

The fix to this is to simply log into the hosted exchange as the admin for the organisation and run the command again and it works. :-)
