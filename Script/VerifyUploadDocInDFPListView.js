function verifyListViewForMultipleTexts() {
  var listView = Aliases.ExpExpl.dlg.page327702.ListView; 
  var targetTexts = [
    "RoundPriceUpdated",
    "test",
    "test1",
    "Testing Attachments",
    "test2"
  ]; 
  var foundTexts = []; 
  var missingTexts = []; 

  try {
    if (listView.Exists) {
      var itemCount = listView.wItemCount; 
      Log.Message("Number of elements in ListView: " + itemCount);
      for (var i = 0; i < targetTexts.length; i++) {
        var textFound = false;

        for (var j = 0; j < itemCount; j++) {
          var itemText = listView.wItem(j); 

          if (itemText === targetTexts[i]) {
            textFound = true;
            foundTexts.push(targetTexts[i]);
            Log.Checkpoint("Text found: '" + targetTexts[i] + "' in element " + (j + 1));
            break; 
          }
        }

        if (!textFound) {
          missingTexts.push(targetTexts[i]);
        }
      }
      if (missingTexts.length === 0) {
        Log.Message("All required texts were found: " + foundTexts.join(", "));
      } else {
        Log.Error(
          "The following texts were not found: " + missingTexts.join(", ")
        );
      }
    } else {
      Log.Error("The ListView object was not found.");
    }
  } catch (e) {
    Log.Error("An error occurred while processing the ListView: " + e.message);
  }
}


function verifyListViewForMultipleTextsParameters(targetTexts) {
  var listView = Aliases.ExpExpl.dlg.page327702.ListView;
  var foundTexts = [];
  var missingTexts = [];

  try {
    if (listView.Exists) {
      var itemCount = listView.wItemCount;
      Log.Message("Number of elements in ListView: " + itemCount);

      for (var i = 0; i < targetTexts.length; i++) {
        var textFound = false;

        for (var j = 0; j < itemCount; j++) {
          var itemText = listView.wItem(j);

          if (itemText === targetTexts[i]) {
            textFound = true;
            foundTexts.push(targetTexts[i]);
            Log.Checkpoint("Text found: '" + targetTexts[i] + "' in element " + (j + 1));
            break;
          }
        }

        if (!textFound) {
          missingTexts.push(targetTexts[i]);
        }
      }

      if (missingTexts.length === 0) {
        Log.Message("All required texts were found: " + foundTexts.join(", "));
      } else {
        Log.Error(
          "The following texts were not found: " + missingTexts.join(", ")
        );
      }
    } else {
      Log.Error("The ListView object was not found.");
    }
  } catch (e) {
    Log.Error("An error occurred while processing the ListView: " + e.message);
  }
}
