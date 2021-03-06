//
// Copyright (c) JBaron.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

var PATH = require("path");
var GUI = require('nw.gui');

var args = GUI.App.argv;
if (args.indexOf("--debug") === -1 ) {
    console.info = function() { /* NOP */};
    console.debug = function() { /* NOP */};
}

var IDE = new Cats.Ide();

/**
 * This is the file that is included in the index.html and 
 * bootstraps the starting of CATS.
 */
 
/**
 * Main module of the CATS IDE
 */  
module Cats {

    /**
     * Get a parameter from the URL
     */ 
    function getParameterByName(name:string):string {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null) {
            return "";
        } else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    }

    /**
     * Determine which project(s) we should load during 
     * startup.
     */ 
    function determineProject():string {
        var projectName = getParameterByName("project");
        if (!projectName) {
            var args = GUI.App.argv;
            var i = args.indexOf("--project");
            if (i > -1) projectName = args[i+1];
        }
        return projectName;
    }
   
    // Catch unhandled expections so they don't showup in the IDE.
    process.on("uncaughtException", function (err:any) {
        console.error("Uncaught exception occured: " + err);
        console.error(err.stack);
        alert(err);
    });
   
   
    // Catch the close of the windows in order to save any unsaved changes
    var win = GUI.Window.get();
    win.on("close", function() {
	    try {
        if (IDE.hasUnsavedSessions()) {
            if (! confirm("There are unsaved files!\nDo you really want to quit?")) return;
        }
        IDE.saveConfig();
	    } catch (err) { } // lets ignore this
        this.close(true);
    });

    function main(app:qx.application.Standalone) {

		IDE.init(<qx.ui.container.Composite>app.getRoot());		
        
        var prjName = determineProject();
        if (prjName) {
            IDE.addProject(new Project(prjName));
        } else {
            if (args.indexOf("--restore") > -1) IDE.restorePreviousProjects();
        }
    }
    
    qx.registry.registerMainMethod(main);

}



