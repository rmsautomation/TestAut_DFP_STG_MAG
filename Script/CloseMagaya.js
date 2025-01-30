function closeExpExpl() {
  try {
    var appName = "ExpExpl";
    //var process = Sys.Process(appName);
    
    if ( Sys.Process(appName).Exists) {
      process.Terminate(); 
      Log.Message("Process '" + appName + "' was closed.");
    } else {
      Log.Message("Process '" + appName + "' is not executed");
    }
  } catch (e) {
    Log.Error("The proccess was not closed'ExpExpl.exe': " + e.message);
  }
}
