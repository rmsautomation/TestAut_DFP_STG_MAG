function RunBat() {
  Project.Variables.project_path = Project.Path;
  Project.Variables.upload_path = Project.Variables.project_path + "Stores\\Files\\closeExpExpl.bat";
  Log.Message("Ruta del proyecto: " + Project.Variables.project_path);
  Log.Message("Ruta del archivo .bat: " + Project.Variables.upload_path);
  var shell = Sys.OleObject("WScript.Shell");
  shell.Run('"' + Project.Variables.upload_path + '"', 0, true); 
}

function Hooks_OnStartTestCase(Sender, StartTestCaseParams)
{
  Project.Variables.project_path = Project.Path;

  Project.Variables.upload_path = Project.Variables.project_path + "Stores\\Files\\closeExpExpl.bat";

  Log.Message("Ruta del proyecto: " + Project.Variables.project_path);
  Log.Message("Ruta del archivo .bat: " + Project.Variables.upload_path);

  var shell = Sys.OleObject("WScript.Shell");
  shell.Run('"' + Project.Variables.upload_path + '"', 0, true); 
  
}