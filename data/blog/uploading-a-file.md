---
title: "Uploading a File"
publishDate: "2012-07-02"
categories: 
  - "general"
---

So I wanted to upload a file or files from a Windows Application that I was developing, so a quick lookup on MSDN provided the following ([link](https://msdn.microsoft.com/en-us/library/w3kksch7(v=vs.90).aspx)): -

My.Computer.Network.UploadFile ( "C:My DocumentsOrder.txt", \_
[https://www.cohowinery.com/upload.aspx](https://www.cohowinery.com/upload.aspx))

.csharpcode, .csharpcode pre
{
	font-size: small;
	color: black;
	font-family: consolas, "Courier New", courier, monospace;
	background-color: #ffffff;
	/\*white-space: pre;\*/
}
.csharpcode pre { margin: 0em; }
.csharpcode .rem { color: #008000; }
.csharpcode .kwrd { color: #0000ff; }
.csharpcode .str { color: #006080; }
.csharpcode .op { color: #0000c0; }
.csharpcode .preproc { color: #cc6633; }
.csharpcode .asp { background-color: #ffff00; }
.csharpcode .html { color: #800000; }
.csharpcode .attr { color: #ff0000; }
.csharpcode .alt 
{
	background-color: #f4f4f4;
	width: 100%;
	margin: 0em;
}
.csharpcode .lnum { color: #606060; } 

On the face of it it couldn’t be easier.  If you take a look at the How To article, you can see that it doesn’t explain how to code the web side of the app or what's required.

After much Googling, I finally come up with the answer, UploadFile is a wrapped for the WebClient.UploadFile Method.   Reading this [article](https://msdn.microsoft.com/en-us/library/36s52zhs.aspx) provides more information.

The receiving ASPX page or upload.aspx as in the above example, requires the following code.

<%@ Import Namespace\="System"%>
<%@ Import Namespace\="System.IO"%>
<%@ Import Namespace\="System.Net"%>
<%@ Import NameSpace\="System.Web"%>

<Script language="VB" runat=server>
    Sub Page\_Load(ByVal sender As Object, ByVal e As EventArgs)

        Dim f As String
        Dim file
        For Each f In Request.Files.AllKeys
            file = Request.Files(f)
            file.SaveAs("c:inetpubtestUploadedFiles" & file.FileName)
        Next f

    End Sub

</Script>
<html>
<body>
<p> Upload complete. </p>
</body>
</html>

.csharpcode, .csharpcode pre { font-size: small; color: black; font-family: consolas, "Courier New", courier, monospace; background-color: #ffffff; /\*white-space: pre;\*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt { background-color: #f4f4f4; width: 100%; margin: 0em; } .csharpcode .lnum { color: #606060; }
