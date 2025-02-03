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


function closeExpExplNew() {
  try {
    var appName = "ExpExpl";
    
    // Check if the process exists before trying to access it
    if (Sys.WaitProcess(appName, 1000).Exists) {
      var process = Sys.Process(appName); // Now it's safe to access the process
      process.Terminate();
      Log.Message("Process '" + appName + "' was closed.");
    } else {
      Log.Message("Process '" + appName + "' is not running. Continuing test execution.");
    }
  } catch (e) {
    Log.Warning("Could not close process '" + appName + "': " + e.message);
  }
}


