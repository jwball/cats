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


/** 
 * This module contains all the global commands pertaining to IDE functionality
 */
module Cats.Commands {

    /**
     * Quit CATS
     */ 
    function quit() {
         if (IDE.hasUnsavedSessions()) {
            if (! confirm("There are unsaved files!\nDo you really want to quit?")) return;
        }
        IDE.saveConfig();
        GUI.App.quit();
    }


    function setIdeTheme(theme) {            
        qx.theme.manager.Meta.getInstance().setTheme(theme);
    }

    /**
     * Set the theme
     */ 
    function setTheme(theme:string) {
        IDE.setTheme(theme);
    }

    /**
     * Set the font size
     */ 
    function setFontSize(size:number) {
        SourceEditor.CONFIG["setFontSize"](size + "px");
       //  IDE.infoBus.emit("editor.fontSize",size);
    }

    function setRightMargin(margin:number) {
        IDE.infoBus.emit("editor.rightMargin",margin);
    }

    function toggleView(component) {
        component.toggle();
        // infoBus.IDE.emit("toggleView", name);
    }
    

    /**
     * Register the IDE commands
     */ 
    export class IdeCommands {
        static init(registry:(cmd:Command)=>void) {
            registry({ name: CMDS.ide_quit, label: "Quit", command: quit });
            registry({ name: CMDS.ide_theme, label: "Theme", command: setIdeTheme });
            registry({ name: CMDS.ide_fontSize, label: "Font Size", command: setFontSize });
            registry({ name: CMDS.ide_rightMargin, label : "Right Margin", command: setRightMargin });
            registry({ name: CMDS.ide_toggleView, label : "Toggle View", command: toggleView });
        }
    }


}