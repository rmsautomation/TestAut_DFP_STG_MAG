﻿function Event_OnLogWarning(Sender, LogParams) {
    // Check if the warning message contains the word "disabled"
    var locked = aqString.Find(LogParams.Str, "disabled");
    // Also check if the warning message mentions "The browser is already running"
    var browserRunning = aqString.Find(LogParams.Str, "The browser is already running");
    
    var replace = aqString.Find(LogParams.Str, "object was replaced with a similar object");   
    var controlVisible = aqString.Find(LogParams.Str, "The action may be performed incorrectly, because the control is not visible"); 
    var blocks = aqString.Find(LogParams.Str, " blocks were found by the text"); 
    
  

    // If the word "disabled" or "The browser is already running" is found
    if (locked != -1 || browserRunning != -1 || replace != -1 || controlVisible != -1 || blocks != -1) {
        // Block the warning message from being logged
        LogParams.Locked = true;
    } else {
        // Otherwise, allow the warning message to be logged
        LogParams.Locked = false;
    }
}
