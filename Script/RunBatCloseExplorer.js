function RunBatCloseExplorer() {
  Project.Variables.project_path = Project.Path;
  Project.Variables.upload_path = Project.Variables.project_path + "Stores\\Files\\closeExpExpl.bat";
  Log.Message("Project Path is: " + Project.Variables.project_path);
  Log.Message("Bat path is: " + Project.Variables.upload_path);
  var shell = Sys.OleObject("WScript.Shell");
  shell.Run('"' + Project.Variables.upload_path + '"', 0, true); 
}

function Hooks_OnStartTestCase(Sender, StartTestCaseParams)
{
  Project.Variables.project_path = Project.Path;

  Project.Variables.upload_path = Project.Variables.project_path + "Stores\\Files\\closeExpExpl.bat";

  Log.Message("Project Path is: " + Project.Variables.project_path);
  Log.Message("Bat Folder is: " + Project.Variables.upload_path);

  var shell = Sys.OleObject("WScript.Shell");
  shell.Run('"' + Project.Variables.upload_path + '"', 0, true); 
  
}