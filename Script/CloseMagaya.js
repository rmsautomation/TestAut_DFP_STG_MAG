function closeExpExpl() {
  try {
    var appName = "ExpExpl";
    var process = Sys.Process(appName);
    
    if (process.Exists) {
      process.Terminate(); // Termina el proceso si está activo
      Log.Message("El proceso '" + appName + "' fue cerrado exitosamente.");
    } else {
      Log.Message("El proceso '" + appName + "' no está en ejecución.");
    }
  } catch (e) {
    Log.Warning("No se pudo cerrar el proceso 'ExpExpl.exe': " + e.message);
  }
}
