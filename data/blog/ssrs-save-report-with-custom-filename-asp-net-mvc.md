---
title: "SSRS Save Report With Custom Filename - ASP.NET MVC"
publishDate: "2017-02-17"
categories: 
  - "general"
tags: 
  - "c"
  - "mvc"
  - "programming"
  - "ssrs"
---

I spent some time with this one..  As you can't use the Report Viewer as you can with Web Forms, I have been using the URL Access to grab the form pass parameters and download.

The problem with this approach is that there is no way to change the name of the file that is downloaded.

This is the solution that I've come up with.

public ActionResult GetPDFReport(int? id)
{
   string filename = "Generate Filename Here"

   NetworkCredential nwc = new NetworkCredential("username", "password");
   WebClient client = new WebClient();
   client.Credentials = nwc;
            
   string reportURL = "http://servername//ReportServer?PO&rs:Format=PDF&rs:ClearSession=true&Param1=" + id;
   return File(client.DownloadData(reportURL), "application/pdf", filename);
}

Have fun! :-)
