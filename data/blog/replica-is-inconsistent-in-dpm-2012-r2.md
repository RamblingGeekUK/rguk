---
title: "Replica is inconsistent in DPM 2012 R2"
publishDate: "2016-12-07"
categories: 
  - "general"
---

If you keep receiving the "replica is inconsistent" error message, check the following:

- Windows Backup Installed.
- Windows Update has been run to ensure the agent is the latest version.

If those have been checked, then you may have run into a known issue.  WinRE, the Windows Recovery Environment partition is getting in the way, you can disable it by disabling WinRE on the server you wish to protect by running the following command:

plaintext
reagentc /disable
```

Now check replication again and it should now return OK.

Ensure you reenable WinRE with the following command:

plaintext
reagentc /enable
```

Source: [https://social.technet.microsoft.com/Forums/en-US/17b6f662-a639-4762-9619-3beff1bfb185/dpm-2012-r2-and-bare-metal-recoverysystem-state-system-protection-hyperv-generation-2-vm-support?forum=dpmhypervbackup](https://social.technet.microsoft.com/Forums/en-US/17b6f662-a639-4762-9619-3beff1bfb185/dpm-2012-r2-and-bare-metal-recoverysystem-state-system-protection-hyperv-generation-2-vm-support?forum=dpmhypervbackup)
