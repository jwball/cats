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
qx.Theme.define("Cats.theme.Color", {
    extend: qx.theme.simple.Color,
    colors: {
        "light-background": "#C0CCDF",
        "button-box-bright": "#B0BCCF"
    }
});
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
qx.Theme.define("Cats.theme.Decoration", {
    extend: qx.theme.simple.Decoration,
    decorations: {
        "button-box": {
            style: {
                radius: 3,
                width: 1,
                color: "button-border",
                backgroundColor: "button-box-bright"
            }
        }
    }
});
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
qx.Theme.define("Cats.theme.Font", {
    extend: qx.theme.simple.Font,
    fonts: {}
});
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
function noDecorator() {
    return {
        base: true,
        style: function (states) {
            return { decorator: undefined };
        }
    };
}

qx.Theme.define("Cats.theme.Appearance", {
    extend: qx.theme.simple.Appearance,
    appearances: {
        "tabview-page/button": {
            base: true,
            style: function (states) {
                return {
                    padding: [6, 6, 6, 6]
                };
            }
        },
        "splitpane": {
            style: function (states) {
                return {
                    backgroundColor: "light-background",
                    decorator: undefined
                };
            }
        },
        "__virtual-tree": noDecorator(),
        "__toolbar-button": noDecorator(),
        "__tabview/pane": {
            base: true,
            style: function (states) {
                return {
                    padding: [0, 0, 0, 0]
                };
            }
        }
    }
});
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
qx.Theme.define("Cats.theme.Theme", {
    meta: {
        color: Cats.theme.Color,
        decoration: Cats.theme.Decoration,
        font: Cats.theme.Font,
        icon: qx.theme.icon.Oxygen,
        appearance: Cats.theme.Appearance
    }
});
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
* This contain the common interfaces and enumerations that are being used to
* transfer data between the worker and the main thread.
*/
var Cats;
(function (Cats) {
    (function (Severity) {
        Severity[Severity["Info"] = 0] = "Info";
        Severity[Severity["Warning"] = 1] = "Warning";
        Severity[Severity["Error"] = 2] = "Error";
    })(Cats.Severity || (Cats.Severity = {}));
    var Severity = Cats.Severity;
})(Cats || (Cats = {}));
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
var Events = require('events');
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
var OS;
(function (OS) {
    /**
    * This module abstracts out the native File IO. Right now it uses Nodejs, but this
    * could be easily changed to another implementation like a cloud storage API.
    *
    * @TODO make this an async api.
    */
    (function (File) {
        var FS = require("fs");
        var exec = require('child_process').exec;
        var glob = require("glob");

        /**
        * Create recursively directories if they don't exist yet
        * @param path The directory path to create
        */
        function mkdirRecursiveSync(path) {
            if (!FS.existsSync(path)) {
                mkdirRecursiveSync(PATH.dirname(path));
                FS.mkdirSync(path, 509); //, 0775);
            }
        }
        File.mkdirRecursiveSync = mkdirRecursiveSync;

        /**
        * Used to integrate external build tools
        */
        function executeProcess(cmd, options, callback) {
            var child = exec(cmd, options, callback);
        }
        File.executeProcess = executeProcess;

        /**
        * Remove a file or empty directory
        * @param path the path of the file or directory
        */
        function remove(path) {
            var isFile = FS.statSync(path).isFile();
            if (isFile)
                FS.unlinkSync(path);
            else
                FS.rmdirSync(path);
        }
        File.remove = remove;

        var PlatForm = (function () {
            function PlatForm() {
            }
            PlatForm.OSX = "darwin";
            return PlatForm;
        })();
        File.PlatForm = PlatForm;

        function find(pattern, rootDir, cb) {
            glob(pattern, { cwd: rootDir }, cb);
        }
        File.find = find;

        /**
        * Get platform
        */
        function platform() {
            return process.platform;
        }
        File.platform = platform;

        /**
        * Rename a file or directory
        * @param oldName the old name of the file or directory
        * @param newName the new name of the file or directory
        */
        function rename(oldName, newName) {
            FS.renameSync(oldName, newName);
        }
        File.rename = rename;

        /**
        * Write text content to a file. If a directory doesn't exist, create it
        * @param name The full name of the file
        * @param value The content of the file
        */
        function writeTextFile(name, value) {
            mkdirRecursiveSync(PATH.dirname(name));
            FS.writeFileSync(name, value, "utf8");
        }
        File.writeTextFile = writeTextFile;

        function switchToForwardSlashes(path) {
            return path.replace(/\\/g, "/");
        }
        File.switchToForwardSlashes = switchToForwardSlashes;

        // Sort first on directory versus file and then on alphabet
        function sort(a, b) {
            if ((!a.isDirectory) && b.isDirectory)
                return 1;
            if (a.isDirectory && (!b.isDirectory))
                return -1;
            if (a.name > b.name)
                return 1;
            if (b.name > a.name)
                return -1;
            return 0;
        }

        /**
        * Read the files from a directory
        * @param directory The directory name that should be read
        */
        function readDir(directory, sorted) {
            if (typeof sorted === "undefined") { sorted = false; }
            var files = FS.readdirSync(directory);
            var result = [];
            files.forEach(function (file) {
                var fullName = PATH.join(directory, file);
                var stats = FS.statSync(fullName);
                result.push({
                    name: file,
                    fullName: switchToForwardSlashes(fullName),
                    isFile: stats.isFile(),
                    isDirectory: stats.isDirectory()
                });
            });
            if (sorted)
                result.sort(sort);
            return result;
        }
        File.readDir = readDir;

        /**
        * Read the files from a directory
        * @param directory The directory name that should be read
        */
        function readDir2(directory, cb) {
            var files = FS.readdirSync(directory);
            var result = [];
            files.forEach(function (file) {
                var fullName = PATH.join(directory, file);
                var stats = FS.statSync(fullName);
                result.push({
                    name: file,
                    fullName: switchToForwardSlashes(fullName),
                    isFile: stats.isFile(),
                    isDirectory: stats.isDirectory()
                });
            });
            cb(result);
        }
        File.readDir2 = readDir2;

        /**
        * Read the content from a text file
        * @param name The full name/path of the file
        */
        function readTextFile(name) {
            if (name === "Untitled")
                return "";

            var data = FS.readFileSync(name, "utf8");

            // Use single character line returns
            data = data.replace(/\r\n?/g, "\n");

            // Remove the BOM (only MS uses BOM for UTF8)
            data = data.replace(/^\uFEFF/, '');
            return data;
        }
        File.readTextFile = readTextFile;

        /**
        * Read the content from a text file
        * @param name The full name/path of the file
        */
        function readTextFile2(name, cb) {
            if (name === "Untitled")
                return "";

            var data = FS.readFileSync(name, "utf8");

            // Use single character line returns
            data = data.replace(/\r\n?/g, "\n");

            // Remove the BOM (only MS uses BOM for UTF8)
            data = data.replace(/^\uFEFF/, '');
            cb(data);
        }
        File.readTextFile2 = readTextFile2;

        /**
        * Return stats info about a path
        * @param name The fulle name/path of the file
        */
        function stat(path) {
            return FS.statSync(path);
        }
        File.stat = stat;

        /**
        * Return a watcher object on a file
        * @param name The fulle name/path of the file
        */
        function watch(path) {
            return FS.watch(path);
        }
        File.watch = watch;
    })(OS.File || (OS.File = {}));
    var File = OS.File;
})(OS || (OS = {}));
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
var Cats;
(function (Cats) {
    var Ide = (function () {
        // mainEditor: TextEditor;
        function Ide() {
            this.infoBus = new Events.EventEmitter();
            this.mainMenu = null;
            this.catsHomeDir = process.cwd();
            this.config = this.loadConfig();
        }
        Ide.prototype.getActiveEditor = function () {
            var page = this.sessionTabView.getSelection()[0];
            if (!page)
                return null;
            var editor = page.getChildren()[0];
            return editor;
        };

        Object.defineProperty(Ide.prototype, "sessions", {
            get: function () {
                return this.sessionTabView.getSessions();
            },
            enumerable: true,
            configurable: true
        });

        Ide.prototype.init = function (rootDoc) {
            Cats.Commands.init();
            this.layout(rootDoc);

            // this.toolBar.init();
            this.mainMenu = Cats.Menu.createMenuBar();
            this.initFileDropArea();
        };

        Ide.prototype.layout = function (rootDoc) {
            // container layout
            qx.theme.manager.Meta.getInstance().setTheme(Cats.theme.Theme);

            var layout = new qx.ui.layout.VBox();

            // main container
            var mainContainer = new qx.ui.container.Composite(layout);
            rootDoc.add(mainContainer, { edge: 0 });

            this.toolBar = new ToolBar();

            mainContainer.add(this.toolBar, { flex: 0 });

            // mainsplit, contains the editor splitpane and the info splitpane
            var mainsplit = new qx.ui.splitpane.Pane("horizontal");

            // mainsplit.set({ decorator: null });
            // ********************* Navigator Pane ********************
            this.navigatorPane = new TabView(["files", "bookmarks"]);
            this.bookmarks = new ResultTable(["Bookmark"]);
            this.navigatorPane.getPage("bookmarks").add(this.bookmarks, { edge: 0 });

            mainsplit.add(this.navigatorPane, 1); // navigator

            var editorSplit = new qx.ui.splitpane.Pane("vertical");

            // editorSplit.setDecorator(null);
            var infoSplit = new qx.ui.splitpane.Pane("horizontal");
            this.sessionTabView = new SessionTabView();

            // infoSplit.set({ decorator: null });
            infoSplit.add(this.sessionTabView, 4); // editor

            this.infoPane = new TabView(["outline", "properties"]);
            this.outlineNavigator = new OutlineNavigator();
            this.infoPane.getChildren()[0].add(this.outlineNavigator, { edge: 0 });
            infoSplit.add(this.infoPane, 1); // todo

            editorSplit.add(infoSplit, 4);

            // **********************  Problem Pane ***************************
            this.problemPane = new TabView(["problems", "search", "console"]);
            editorSplit.add(this.problemPane, 2); // Info

            this.console = new ConsoleLog();
            this.problemResult = new ResultTable();
            this.searchResult = new ResultTable();
            this.problemPane.getChildren()[0].add(this.problemResult, { edge: 0 });
            this.problemPane.getChildren()[1].add(this.searchResult, { edge: 0 });
            this.problemPane.getChildren()[2].add(this.console, { edge: 0 });

            this.problemPane.selectPage("console");

            // this.problemPane.setSelection([this.problemPane.getChildren()[2]]);
            mainsplit.add(editorSplit, 4); // main area

            mainContainer.add(mainsplit, { flex: 1 });

            // ************************ Status Bar *****************************
            this.statusBar = new StatusBar();
            mainContainer.add(this.statusBar, { flex: 0 });
        };

        /**
        * Attach the drag n' drop event listeners to the document
        *
        * @author  LordZardeck <sean@blackfireweb.com>
        */
        Ide.prototype.initFileDropArea = function () {
            // Listen onto file drop events
            document.documentElement.addEventListener('drop', this.acceptFileDrop.bind(this), false);

            // Prevent the browser from redirecting to the file
            document.documentElement.addEventListener('dragover', function (event) {
                event.stopPropagation();
                event.preventDefault();
                event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
            }, false);
        };

        /**
        * Process the file and open it inside a new ACE session
        *
        * @param   event       {DragEvent}
        * @author  LordZardeck <sean@blackfireweb.com>
        */
        Ide.prototype.acceptFileDrop = function (event) {
            event.stopPropagation();
            event.preventDefault();

            // Loop over each file dropped. More than one file
            // can be added at a time
            var files = event.dataTransfer.files;

            for (var i = 0; i < files.length; i++) {
                this.openSession(files[i].path);
            }
        };

        /**
        * Load the projects and files that were open last time before the
        * IDE was closed.
        */
        Ide.prototype.restorePreviousProjects = function () {
            var _this = this;
            console.info("restoring previous project and sessions.");
            if (this.config.projects && this.config.projects.length) {
                var projectDir = this.config.projects[0];
                this.addProject(new Cats.Project(projectDir));
            }

            if (this.config.sessions) {
                console.info("Found previous sessions: ", this.config.sessions.length);
                this.config.sessions.forEach(function (session) {
                    try  {
                        _this.openSession(session.path);
                    } catch (err) {
                        console.error("error " + err);
                        alert("Couldn't open file " + session.path);
                    }
                });
            }
        };

        /**
        * Are there any session that have unsaved changes
        */
        Ide.prototype.hasUnsavedSessions = function () {
            if (!this.sessions)
                return false;
            for (var i = 0; i < this.sessions.length; i++) {
                if (this.sessions[i].getChanged())
                    return true;
            }
            return false;
        };

        /**
        * Get the first session based on its filename
        * @param name The name of the session
        */
        Ide.prototype.getSession = function (name) {
            var sessions = this.sessions;
            for (var i = 0; i < sessions.length; i++) {
                var session = sessions[i];
                if (session.name === name)
                    return session;
            }
        };

        /**
        * Indicate whether the IDE is busy with some (background) task
        * @param isBusy true if busy, false otherwise
        */
        Ide.prototype.busy = function (isBusy) {
            this.statusBar.setBusy(isBusy);
        };

        /**
        * Get the directory where the icons for the IDE can be found
        */
        Ide.prototype.getIconDir = function () {
            return this.config.iconDir || "static/img/eclipse/";
        };

        /**
        * Load the configuration for the IDE
        */
        Ide.prototype.loadConfig = function () {
            var defaultConfig = {
                version: "1",
                theme: "cats",
                fontSize: 13,
                iconDir: "static/img/eclipse/",
                rightMargin: 80,
                sessions: [],
                projects: [PATH.join(process.cwd(), "samples", "greeter")]
            };

            var configStr = localStorage[Ide.STORE_KEY];

            if (configStr) {
                try  {
                    var config = JSON.parse(configStr);
                    if (config.version === "1")
                        return config;
                } catch (err) {
                    console.error("Error during parsing config " + err);
                }
            }

            return defaultConfig;
        };

        /**
        * Persist the current IDE configuration to a file
        */
        Ide.prototype.saveConfig = function () {
            try  {
                var config = this.config;
                config.sessions = [];
                config.projects = [];

                this.sessions.forEach(function (session) {
                    config.sessions.push({
                        path: session.name
                    });
                });

                if (this.project)
                    config.projects.push(this.project.projectDir);
                var configStr = JSON.stringify(config);
                localStorage[Ide.STORE_KEY] = configStr;
            } catch (err) {
                console.error(err);
            }
        };

        /**
        * Open an existing session or if it doesn't exist yet create
        * a new one.
        */
        Ide.prototype.openSession = function (name, pos) {
            var session;
            if (name)
                session = this.getSession(name);
            if (!session) {
                var content = "";
                if (name) {
                    var mode = Cats.Session.determineMode(name);
                    if (mode === "binary") {
                        var validate = confirm("This might be a binary file, are you sure ?");
                        if (!validate)
                            return;
                    }
                    content = OS.File.readTextFile(name);
                }
                session = new Cats.Session(name, content);
                if (session.isTypeScript()) {
                    this.project.iSense.addScript(name, content);
                }
                var p = IDE.sessionTabView.addSession(session, pos);
            } else {
                this.sessionTabView.navigateTo(session, pos);
            }

            var project = session.project;
            return session;
        };

        /**
        * Set the theme of the IDE
        * @param theme The name of the new theme
        */
        Ide.prototype.setTheme = function (theme) {
            this.config.theme = theme;
            // IDE.mainEditor.setTheme(theme);
        };

        /**
        * Add a new project to the IDE
        * @param projectDir the directory of the new project
        */
        Ide.prototype.addProject = function (project) {
            this.project = project;

            if (this.project) {
                var fileTree = new FileNavigator(this.project);
                this.navigatorPane.getChildren()[0].add(fileTree, { edge: 0 });
            }
        };

        /**
        * Close an open project
        * @param project to be closed
        */
        Ide.prototype.closeProject = function (project) {
            // TODO put code on IDE
            this.project.close();
            this.project = null;
        };
        Ide.STORE_KEY = "cats.config";
        return Ide;
    })();
    Cats.Ide = Ide;
})(Cats || (Cats = {}));
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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Cats;
(function (Cats) {
    var Session = (function (_super) {
        __extends(Session, _super);
        /**
        * Create a new session
        *
        * @param project The project the session belongs to
        * @param name The name of the session
        * @param content The content of the session
        */
        function Session(name, content) {
            _super.call(this);
            this.name = name;
            this.content = content;
            this.changed = false;
            this.errors = [];
            this.mode = Session.determineMode(name);
        }
        Object.defineProperty(Session.prototype, "project", {
            get: function () {
                return IDE.project;
            },
            enumerable: true,
            configurable: true
        });

        Session.prototype.isTypeScript = function () {
            return this.mode === "typescript";
        };

        Session.prototype.isActive = function () {
            return (IDE.sessionTabView.getActiveSession() === this);
        };

        Object.defineProperty(Session.prototype, "shortName", {
            get: function () {
                if (!this.name)
                    return "Untitled";
                return PATH.basename(this.name);
            },
            enumerable: true,
            configurable: true
        });

        Session.prototype.setContent = function (content) {
            var page = IDE.sessionTabView.getPageBySession(this);
            return page.editor.setContent(content);
        };

        Session.prototype.getChanged = function () {
            return this.changed;
        };

        Session.prototype.setChanged = function (value) {
            this.changed = value;
            this.emit("setChanged", this.changed);
        };

        Session.prototype.getContent = function () {
            var page = IDE.sessionTabView.getPageBySession(this);
            return page.editor.getContent();
        };

        /**
        * Persist the edit session
        */
        Session.prototype.persist = function (shouldConfirm) {
            // Select proper folder separator according to platform used
            if (typeof shouldConfirm === "undefined") { shouldConfirm = false; }
            var dirSlash = process.platform == "win32" ? "\\" : "/";

            if (this.name == null) {
                this.name = prompt("Please enter the file name", IDE.project.projectDir + dirSlash);
                if (!this.name)
                    return;
            }

            OS.File.writeTextFile(this.name, this.getContent());
            this.setChanged(false);

            if (this.mode === "typescript")
                this.project.validate();

            if (IDE.project.config.buildOnSave && (this.mode === "typescript"))
                Cats.Commands.runCommand(35 /* project_build */);
        };

        Session.prototype.setErrors = function (errors) {
            if ((this.errors.length === 0) && (errors.length === 0))
                return;
            this.errors = errors;
            this.emit("errors", this.errors);
        };

        Session.prototype.setOutline = function (outline) {
            this.outline = outline;
            if (this.isActive())
                IDE.outlineNavigator.setData(this, this.outline);
            this.emit("outline", this.outline);
        };

        Session.prototype.updateContent = function (content) {
            this.content = content;
            IDE.project.iSense.updateScript(this.name, content);
            this.getDiagnostics();
        };

        Session.prototype.getDiagnostics = function () {
            var _this = this;
            if (this.isTypeScript()) {
                IDE.project.iSense.getErrors(this.name, function (err, result) {
                    _this.setErrors(result);
                });
            }
        };

        Session.prototype.getOutline = function (timeout) {
            var _this = this;
            if (typeof timeout === "undefined") { timeout = 5000; }
            if (this.isTypeScript()) {
                // Clear any pending updates
                clearTimeout(this.outlineTimer);
                this.outlineTimer = setTimeout(function () {
                    IDE.project.iSense.getScriptLexicalStructure(_this.name, function (err, data) {
                        _this.setOutline(data);
                    });
                }, timeout);
            } else {
                this.setOutline([]);
            }
        };

        Session.prototype.sync = function () {
            this.getDiagnostics();
            this.getOutline(10);
        };

        /**
        * Determine the edit mode based on the file name
        * @param name File name
        */
        Session.determineMode = function (name) {
            var ext = PATH.extname(name);
            var result = Session.MODES[ext] || Session.DEFAULT_MODE;
            return result;
        };
        Session.MODES = {
            ".js": "javascript",
            ".ts": "typescript",
            ".xhtml": "html",
            ".xhtm": "html",
            ".html": "html",
            ".htm": "html",
            ".css": "css",
            ".less": "less",
            ".md": "markdown",
            ".svg": "svg",
            ".yaml": "yaml",
            ".yml": "yaml",
            ".xml": "xml",
            ".json": "json",
            ".png": "binary",
            ".gif": "binary",
            ".jpg": "binary",
            ".jpeg": "binary"
        };

        Session.DEFAULT_MODE = "text";
        return Session;
    })(qx.event.Emitter);
    Cats.Session = Session;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    (function (Commands) {
        /**
        * List of known commands
        */
        (function (CMDS) {
            CMDS[CMDS["help_devTools"] = 0] = "help_devTools";
            CMDS[CMDS["help_shortcuts"] = 1] = "help_shortcuts";
            CMDS[CMDS["help_processInfo"] = 2] = "help_processInfo";
            CMDS[CMDS["help_about"] = 3] = "help_about";

            CMDS[CMDS["file_new"] = 4] = "file_new";
            CMDS[CMDS["file_open"] = 5] = "file_open";
            CMDS[CMDS["file_close"] = 6] = "file_close";
            CMDS[CMDS["file_closeOther"] = 7] = "file_closeOther";
            CMDS[CMDS["file_closeAll"] = 8] = "file_closeAll";
            CMDS[CMDS["file_save"] = 9] = "file_save";
            CMDS[CMDS["file_saveAs"] = 10] = "file_saveAs";
            CMDS[CMDS["file_saveAll"] = 11] = "file_saveAll";

            CMDS[CMDS["edit_undo"] = 12] = "edit_undo";
            CMDS[CMDS["edit_redo"] = 13] = "edit_redo";
            CMDS[CMDS["edit_cut"] = 14] = "edit_cut";
            CMDS[CMDS["edit_copy"] = 15] = "edit_copy";
            CMDS[CMDS["edit_paste"] = 16] = "edit_paste";
            CMDS[CMDS["edit_find"] = 17] = "edit_find";
            CMDS[CMDS["edit_findNext"] = 18] = "edit_findNext";
            CMDS[CMDS["edit_findPrev"] = 19] = "edit_findPrev";
            CMDS[CMDS["edit_replace"] = 20] = "edit_replace";
            CMDS[CMDS["edit_replaceAll"] = 21] = "edit_replaceAll";
            CMDS[CMDS["edit_toggleInvisibles"] = 22] = "edit_toggleInvisibles";
            CMDS[CMDS["edit_toggleRecording"] = 23] = "edit_toggleRecording";
            CMDS[CMDS["edit_replayMacro"] = 24] = "edit_replayMacro";

            CMDS[CMDS["edit_toggleComment"] = 25] = "edit_toggleComment";
            CMDS[CMDS["edit_indent"] = 26] = "edit_indent";
            CMDS[CMDS["edit_outdent"] = 27] = "edit_outdent";
            CMDS[CMDS["edit_gotoLine"] = 28] = "edit_gotoLine";

            CMDS[CMDS["source_format"] = 29] = "source_format";
            CMDS[CMDS["source_openDeclaration"] = 30] = "source_openDeclaration";
            CMDS[CMDS["source_findRef"] = 31] = "source_findRef";
            CMDS[CMDS["source_findDecl"] = 32] = "source_findDecl";

            CMDS[CMDS["project_open"] = 33] = "project_open";
            CMDS[CMDS["project_close"] = 34] = "project_close";
            CMDS[CMDS["project_build"] = 35] = "project_build";
            CMDS[CMDS["project_validate"] = 36] = "project_validate";
            CMDS[CMDS["project_run"] = 37] = "project_run";
            CMDS[CMDS["project_debug"] = 38] = "project_debug";
            CMDS[CMDS["project_refresh"] = 39] = "project_refresh";
            CMDS[CMDS["project_properties"] = 40] = "project_properties";
            CMDS[CMDS["project_dependencies"] = 41] = "project_dependencies";

            CMDS[CMDS["refactor_rename"] = 42] = "refactor_rename";

            CMDS[CMDS["ide_quit"] = 43] = "ide_quit";
            CMDS[CMDS["ide_theme"] = 44] = "ide_theme";
            CMDS[CMDS["ide_fontSize"] = 45] = "ide_fontSize";
            CMDS[CMDS["ide_rightMargin"] = 46] = "ide_rightMargin";
            CMDS[CMDS["ide_toggleView"] = 47] = "ide_toggleView";
        })(Commands.CMDS || (Commands.CMDS = {}));
        var CMDS = Commands.CMDS;

        var commands = [];
        var commandList = [];

        function getAllCommands() {
            return commands;
        }
        Commands.getAllCommands = getAllCommands;

        /**
        * When a command has no function declared,
        * use this one
        */
        function nop() {
            alert("Not yet implemented");
        }

        /**
        * Register a new command
        */
        function register(command) {
            if (!command.command)
                command.command = nop;
            commands[command.name] = command;
            commandList.push(command);
        }
        Commands.register = register;

        // TODO i18n
        function addShortcut(label, shortCut) {
            var result = label;
            var tabs = 5 - Math.floor((result.length / 4));

            // console.log("Label " + result + " has tabs: " + tabs);
            result = result + "     " + "\t\t\t\t\t\t".substring(0, tabs) + shortCut;

            // result += "\u0007" + shortCut;
            // result += "      " + shortCut;
            // result += shortCut;
            return result;
        }

        

        function getMenuCommand(name, label) {
            var params = [];
            for (var _i = 0; _i < (arguments.length - 2); _i++) {
                params[_i] = arguments[_i + 2];
            }
            var cmd = commands[name];
            if (!cmd) {
                console.error("No implementation available for command " + name);
                return new GUI.MenuItem({ label: "Unknow command" });
            }
            var click;
            if (params.length > 0) {
                // lets generate a closure
                click = function () {
                    cmd.command.apply(this, params);
                };
            } else {
                click = cmd.command;
            }
            var item = {
                label: label || cmd.label,
                click: click
            };

            // if (cmd.shortcut) item.label += " [" + cmd.shortcut + "]";
            if (cmd.shortcut)
                item.label = addShortcut(item.label, cmd.shortcut);

            // if (cmd.icon) item.icon = "static/resource/qx/icon/Oxygen/22/" + cmd.icon;
            return new GUI.MenuItem(item);
        }
        Commands.getMenuCommand = getMenuCommand;

        function runCommand(name) {
            commands[name].command();
        }
        Commands.runCommand = runCommand;

        function get(name) {
            return commands[name];
        }
        Commands.get = get;

        /**
        * Call the different command implementers so they can register
        * themselves
        */
        function init() {
            Commands.EditorCommands.init(register);
            Commands.FileCommands.init(register);
            Commands.HelpCommands.init(register);
            Commands.ProjectCommands.init(register);
            Commands.IdeCommands.init(register);
            Commands.RefactorCommands.init(register);
        }
        Commands.init = init;
    })(Cats.Commands || (Cats.Commands = {}));
    var Commands = Cats.Commands;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    // This module contains all the global commands pertaining to the edit functionality
    // Much of it is already provided by the Ace editor and just wraps this functionality
    (function (Commands) {
        /*
        // Just wrap the Ace command.
        function editorCommand(commandName: string) {
        return function() { IDE.getActiveEditor().execCommand(commandName); }
        }
        */
        function formatText() {
            var session = IDE.sessionTabView.getActiveSession();
            if (session) {
                session.project.iSense.getFormattedTextForRange(session.name, 0, -1, function (err, result) {
                    if (!err) {
                        var pos = IDE.getActiveEditor().getPosition();
                        session.setContent(result);
                        if (pos)
                            IDE.getActiveEditor().moveToPosition(pos);
                    }
                });
            }
        }

        /*
        function getShortcut(commandName: string) {
        
        var platform = IDE.getActiveEditor().commands.platform;
        var command = IDE.getActiveEditor().commands.byName[commandName];
        
        if (command && command.bindKey) {
        var key = command.bindKey[platform];
        return key;
        }
        
        return null;
        
        }
        
        
        // TODO i18n
        function addShortcut(label, commandName: string) {
        var result = label;
        var platform = IDE.getActiveEditor().commands.platform;
        var command = IDE.getActiveEditor().commands.byName[commandName];
        
        if (command && command.bindKey) {
        var tabs = 5 - Math.floor((result.length / 4) - 0.01);
        result = result + "\t\t\t\t\t\t".substring(0, tabs);
        var key = command.bindKey[platform];
        if (key) result += key;
        }
        return result;
        }
        
        function toggleInvisibles() {
        IDE.getActiveEditor().setShowInvisibles(!IDE.mainEditor.aceEditor.getShowInvisibles());
        }
        
        */
        function editorCommand(commandName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                //@TODO fix,don't access private var
                var aceEditor = IDE.getActiveEditor()["aceEditor"];

                // var command:Function = aceEditor.commands.byName[commandName];
                aceEditor.execCommand(commandName);
            };
        }

        var EditorCommands = (function () {
            function EditorCommands() {
            }
            EditorCommands.init = function (registry) {
                var editorCommands = [
                    { id: 12 /* edit_undo */, label: "Undo", icon: "actions/edit-undo.png" },
                    { id: 13 /* edit_redo */, label: "Redo", icon: "actions/edit-redo.png" },
                    { id: 26 /* edit_indent */, label: "Indent", icon: "actions/format-indent-more.png" },
                    { id: 27 /* edit_outdent */, label: "Outdent", icon: "actions/format-indent-less.png" },
                    /*{ id: Cats.Commands.CMDS.edit_cut, label: "Cut" },
                    { id: Cats.Commands.CMDS.edit_copy, label: "Copy" },
                    { id: Cats.Commands.CMDS.edit_paste, label: "Paste" },*/
                    { id: 17 /* edit_find */, label: "Find", cmd: "find", icon: "actions/edit-find.png" },
                    { id: 18 /* edit_findNext */, label: "Find Next", cmd: "findnext" },
                    { id: 19 /* edit_findPrev */, label: "Find Previous", cmd: "findprevious" },
                    { id: 20 /* edit_replace */, label: "Find/Replace", cmd: "replace", icon: "actions/edit-find-replace.png" },
                    { id: 21 /* edit_replaceAll */, label: "Replace All", cmd: "replaceall" },
                    { id: 25 /* edit_toggleComment */, label: "Toggle Comment", cmd: "togglecomment", icon: "comment.png" },
                    { id: 23 /* edit_toggleRecording */, label: "Start/Stop Recording", cmd: "togglerecording", icon: "actions/media-record.png" },
                    { id: 24 /* edit_replayMacro */, label: "Playback Macro", cmd: "replaymacro", icon: "actions/media-playback-start.png" },
                    { id: 28 /* edit_gotoLine */, label: "Goto Line", cmd: "gotoline" }
                ];

                editorCommands.forEach(function (config) {
                    if (!config.cmd)
                        config.cmd = config.label.toLowerCase();

                    // var label = addShortcut(config.label, config.cmd);
                    var item = {
                        name: config.id,
                        label: config.label,
                        icon: config.icon,
                        shortcut: null,
                        //             command:null
                        //            shortcut: getShortcut(config.cmd),
                        command: editorCommand(config.cmd)
                    };

                    // if (config.icon) item.icon = config.icon;
                    registry(item);
                });

                // registry({name:CMDS.edit_toggleInvisibles, label:"Toggle Invisible Characters", command: toggleInvisibles, icon: "invisibles.png"});
                registry({ name: 29 /* source_format */, label: "Format Code", command: formatText });
            };
            return EditorCommands;
        })();
        Commands.EditorCommands = EditorCommands;
    })(Cats.Commands || (Cats.Commands = {}));
    var Commands = Cats.Commands;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    // This module contains all the global commands pertaining to the file functionality
    (function (Commands) {
        /**
        * Create a new edit session
        */
        function newFile() {
            IDE.openSession();
        }

        /**
        * Close the active edit session
        */
        function closeFile() {
            IDE.sessionTabView.close();
        }

        /**
        * Close all edit sessions
        */
        function closeAllFiles() {
            IDE.sessionTabView.closeAll();
        }

        /**
        * Close all edit sessions except the active session
        */
        function closeOtherFiles() {
            IDE.sessionTabView.closeOther();
        }

        /**
        * Save all edit sessions that have changed
        */
        function saveAll() {
            var sessions = IDE.sessions;
            for (var i = 0; i < sessions.length; i++) {
                var session = sessions[i];
                if (session.getChanged())
                    session.persist();
            }
        }

        /**
        * Save the active sessions under a different name
        */
        function saveAs() {
            var session = IDE.sessionTabView.getActiveSession();
            if (session) {
                var newName = prompt("Enter new name", session.name);
                if (newName) {
                    session.name = newName;
                    session.persist();
                }
            }
        }

        /**
        * Save the active session
        */
        function saveFile() {
            var session = IDE.sessionTabView.getActiveSession();
            if (session)
                session.persist();
        }

        var FileCommands = (function () {
            function FileCommands() {
            }
            FileCommands.init = function (registry) {
                registry({ name: 4 /* file_new */, label: "New File", command: newFile, icon: "actions/document-new.png" });
                registry({ name: 6 /* file_close */, label: "Close File", command: closeFile, icon: "actions/project-development-close.png" });
                registry({ name: 7 /* file_closeOther */, label: "Close Other Files", command: closeOtherFiles });
                registry({ name: 8 /* file_closeAll */, label: "Close All Files", command: closeAllFiles, icon: "actions/project-development-close-all.png" });
                registry({ name: 9 /* file_save */, label: "Save File", command: saveFile, icon: "actions/document-save.png" });
                registry({ name: 11 /* file_saveAll */, label: "Save All", command: saveAll, icon: "actions/document-save-all.png" });
                registry({ name: 10 /* file_saveAs */, label: "Save As...", command: saveAs, icon: "actions/document-save-as.png" });
            };
            return FileCommands;
        })();
        Commands.FileCommands = FileCommands;
    })(Cats.Commands || (Cats.Commands = {}));
    var Commands = Cats.Commands;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    // This module contains all the global commands pertaining to the help functionality
    (function (Commands) {
        /**
        * Show the available keyboard shortcuts
        */
        function showShortcuts() {
            var w = window.open("keyboard_shortcuts.html", "_blank", "width=800; height=595");
            /*
            var isDark = document.getElementsByClassName("ace_dark").length > 0;
            var elem = <HTMLElement>document.getElementsByClassName("ace_scroller")[0];
            var bg = window.getComputedStyle(elem, null).backgroundColor;
            elem = document.getElementById("editor");
            var fg = window.getComputedStyle(elem, null).color;
            var w = window.open("keyboard_shortcuts.html", "_blank", "width=800; height=595");
            
            
            w.onload = () => {
            
            var body = w.document.body;
            
            $(body)
            .css("background-color", bg)
            .css("color", fg);
            
            if (isDark) {
            $(body).addClass("dark");
            }
            
            };
            */
        }

        /**
        * Show the version of CATS
        */
        function showAbout() {
            alert("Code Assisitant for TypeScript, version 1.0.1\nCreated by JBaron\n");
        }

        /**
        * Open the webkit developers tools for debugging etc.
        */
        function showDevTools() {
            GUI.Window.get().showDevTools();
        }

        /**
        * Show process info like current memory usage
        */
        function showProcess() {
            var mem = process.memoryUsage();
            var display = "memory used: " + mem.heapUsed;
            display += "\nmemory total: " + mem.heapTotal;
            display += "\nplatform: " + process.platform;
            display += "\nworking directory: " + process.cwd();
            alert(display);
        }

        var HelpCommands = (function () {
            function HelpCommands() {
            }
            HelpCommands.init = function (registry) {
                registry({ name: 3 /* help_about */, label: "About", command: showAbout });
                registry({ name: 0 /* help_devTools */, label: "Developer Tools", command: showDevTools });
                registry({ name: 1 /* help_shortcuts */, label: "Shortcuts", command: showShortcuts });
                registry({ name: 2 /* help_processInfo */, label: "Process Info", command: showProcess });
            };
            return HelpCommands;
        })();
        Commands.HelpCommands = HelpCommands;
    })(Cats.Commands || (Cats.Commands = {}));
    var Commands = Cats.Commands;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    /**
    * This module contains all the global commands pertaining to IDE functionality
    */
    (function (Commands) {
        /**
        * Quit CATS
        */
        function quit() {
            if (IDE.hasUnsavedSessions()) {
                if (!confirm("There are unsaved files!\nDo you really want to quit?"))
                    return;
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
        function setTheme(theme) {
            IDE.setTheme(theme);
        }

        /**
        * Set the font size
        */
        function setFontSize(size) {
            SourceEditor.CONFIG["setFontSize"](size + "px");
            //  IDE.infoBus.emit("editor.fontSize",size);
        }

        function setRightMargin(margin) {
            IDE.infoBus.emit("editor.rightMargin", margin);
        }

        function toggleView(component) {
            component.toggle();
            // infoBus.IDE.emit("toggleView", name);
        }

        /**
        * Register the IDE commands
        */
        var IdeCommands = (function () {
            function IdeCommands() {
            }
            IdeCommands.init = function (registry) {
                registry({ name: 43 /* ide_quit */, label: "Quit", command: quit });
                registry({ name: 44 /* ide_theme */, label: "Theme", command: setIdeTheme });
                registry({ name: 45 /* ide_fontSize */, label: "Font Size", command: setFontSize });
                registry({ name: 46 /* ide_rightMargin */, label: "Right Margin", command: setRightMargin });
                registry({ name: 47 /* ide_toggleView */, label: "Toggle View", command: toggleView });
            };
            return IdeCommands;
        })();
        Commands.IdeCommands = IdeCommands;
    })(Cats.Commands || (Cats.Commands = {}));
    var Commands = Cats.Commands;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    // This module contains all the global commands pertaining to project related functionality
    (function (Commands) {
        function closeAllProjects() {
            IDE.closeProject(IDE.project);
        }

        /**
        * Close the project
        */
        function closeProject() {
            IDE.closeProject(IDE.project);
        }

        /**
        * Run the project
        */
        function runProject() {
            IDE.project.run();
        }
        ;

        /**
        * Run the project
        */
        function showDependency() {
            IDE.project.iSense.getDependencyGraph(function (err, data) {
                data.forEach(function (entry) {
                    var refs = entry.ref;
                    var d = PATH.dirname(entry.src);
                    for (var i = 0; i < refs.length; i++) {
                        refs[i] = OS.File.switchToForwardSlashes(PATH.join(d, refs[i]));
                    }
                    ;
                });

                window["dependencies"] = data;
                var startPage = "uml.html";
                console.info("Opening file: " + startPage);
                var win2 = window.open(startPage, "dependencies", "status=1,resizable=1,menubar=1,location=1,toolbar=1,titlebar=1,scrollbars=1");
                win2["dependencies"] = data;
            });
            // win2.reloadIgnoringCache()
        }
        ;

        /**
        * Compile all the sources without saving them
        */
        function validateProject() {
            var project = IDE.project;
            project.validate();
        }

        /**
        * Build the project
        */
        function buildProject() {
            IDE.project.build();
        }

        /**
        * Refresh the project so everything is in sync again.
        */
        function refreshProject() {
            IDE.project.refresh();
        }

        /**
        * Configure the properties of a project
        */
        function propertiesProject() {
            IDE.project.editConfig();
        }

        /**
        * Open a project. If current windows doesn't have a project yet, opene there.
        * Otherwise open the project in a new window
        */
        function openProject() {
            var chooser = document.getElementById('fileDialog');
            chooser.onchange = function (evt) {
                var projectPath = this.value;
                if (!IDE.project) {
                    IDE.addProject(new Cats.Project(projectPath));
                } else {
                    var param = encodeURIComponent(projectPath);
                    this.value = ""; // Make sure the change event goes off next tome
                    window.open('index.html?project=' + param, '_blank');
                }
                /*
                var gui = require('nw.gui');
                gui.Window.open(
                'index.html?project=' + param,
                {"new-instance":true}
                );
                */
            };
            chooser.click();
        }
        ;

        var ProjectCommands = (function () {
            function ProjectCommands() {
            }
            ProjectCommands.init = function (registry) {
                registry({ name: 33 /* project_open */, label: "Open Project...", command: openProject, icon: "actions/project-open.png" });
                registry({ name: 34 /* project_close */, label: "Close project", command: closeProject, icon: "actions/project-development-close.png" });
                registry({ name: 35 /* project_build */, label: "Build Project", command: buildProject, icon: "categories/applications-development.png" });
                registry({ name: 36 /* project_validate */, label: "Validate Project", command: validateProject });
                registry({ name: 39 /* project_refresh */, label: "Refresh Project", command: refreshProject, icon: "actions/view-refresh.png" });
                registry({ name: 37 /* project_run */, label: "Run Project", command: runProject, icon: "actions/arrow-right.png" });

                // registry({ name: CMDS.project_debug, label: "Debug Project", command: null, icon: "debug.png" });
                registry({ name: 40 /* project_properties */, label: "Properties", command: propertiesProject });
                // registry({ name: CMDS.project_dependencies, label: "Show Dependencies", command: showDependency });
            };
            return ProjectCommands;
        })();
        Commands.ProjectCommands = ProjectCommands;
    })(Cats.Commands || (Cats.Commands = {}));
    var Commands = Cats.Commands;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    (function (Commands) {
        var Range = ace.require("ace/range").Range;

        function refactor(rows, name) {
            rows.forEach(function (data) {
                var session = IDE.openSession(data.fileName);
                var p = IDE.sessionTabView.getPageBySession(session);
                var r = data.range;
                var range = new Range(r.start.row, r.start.column, r.end.row, r.end.column);
                p.editor.replace(range, name);
            });
        }

        function rename() {
            var rows = IDE.searchResult.getData();
            if (rows.length === 0) {
                alert("Need search results to refactor");
                return;
            }
            var msg = "Using the search results. \n Going to rename " + rows.length + " instances.\nPlease enter new name";
            var newName = prompt(msg);
            if (!newName)
                return;
            refactor(rows, newName);
        }

        var RefactorCommands = (function () {
            function RefactorCommands() {
            }
            RefactorCommands.init = function (registry) {
                registry({ name: 42 /* refactor_rename */, label: "Rename", command: rename });
            };
            return RefactorCommands;
        })();
        Commands.RefactorCommands = RefactorCommands;
    })(Cats.Commands || (Cats.Commands = {}));
    var Commands = Cats.Commands;
})(Cats || (Cats = {}));
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
/*
var formatting_options = {
public IndentSize: number;
public TabSize: number;
public NewLineCharacter: string;
public ConvertTabsToSpaces: bool;
public InsertSpaceAfterCommaDelimiter: bool;
public InsertSpaceAfterSemicolonInForStatements: bool;
public InsertSpaceBeforeAndAfterBinaryOperators: bool;
public InsertSpaceAfterKeywordsInControlFlowStatements: bool;
public InsertSpaceAfterFunctionKeywordForAnonymousFunctions: bool;
public InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: bool;
public PlaceOpenBraceOnNewLineForFunctions: bool;
public PlaceOpenBraceOnNewLineForControlBlocks: bool;
}
*/
var Cats;
(function (Cats) {
    /**
    *  Loads the configuration for a project. If no configuration file is found, it
    *  returns sensible defaults that will be used instead.
    */
    var ProjectConfig = (function () {
        function ProjectConfig(projectRoot) {
            this.projectRoot = projectRoot;
        }
        /**
        * Get the name of the configuation file
        */
        ProjectConfig.prototype.getFileName = function () {
            return PATH.join(this.projectRoot, ".settings", "config.json");
        };

        /**
        * Load the configuration for this project
        */
        ProjectConfig.prototype.load = function () {
            var fileName = this.getFileName();
            try  {
                var content = OS.File.readTextFile(fileName);
                return JSON.parse(content);
            } catch (err) {
                console.info("Couldn't find project configuration, loading defaults");
                return this.loadDefault();
            }
        };

        /**
        * Load the default configuration for a project
        */
        ProjectConfig.prototype.loadDefault = function () {
            return {
                version: "1.0",
                main: "index.html",
                src: null,
                buildOnSave: false,
                compiler: {
                    useDefaultLib: true,
                    outFileOption: "",
                    emitComments: false,
                    generateDeclarationFiles: false,
                    mapSourceFiles: false,
                    codeGenTarget: 1,
                    moduleGenTarget: 0
                },
                minify: false,
                rememberOpenFiles: false,
                editor: {
                    newLineMode: "unix",
                    useSoftTabs: true,
                    tabSize: 4
                },
                completionMode: "strict"
            };
        };
        return ProjectConfig;
    })();
    Cats.ProjectConfig = ProjectConfig;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    /**
    * Load the TSWorker and handles the communication with the web worker
    * This implementation uses internally a JSON-RPC style message format
    * for the communication.
    */
    var TSWorkerProxy = (function () {
        function TSWorkerProxy(project) {
            this.project = project;
            this.messageId = 0;
            this.registry = {};
            // Create a new webworker
            this.worker = new Worker("../lib/tsworker.js");
            this.initWorker();
        }
        TSWorkerProxy.prototype.stop = function () {
            this.worker.terminate();
        };

        TSWorkerProxy.prototype.getErrors = function (fileName, cb) {
            this.perform("getErrors", fileName, cb);
        };

        TSWorkerProxy.prototype.getAllDiagnostics = function (cb) {
            this.perform("getAllDiagnostics", cb);
        };

        TSWorkerProxy.prototype.getFormattedTextForRange = function (sessionName, start, end, cb) {
            this.perform("getFormattedTextForRange", sessionName, start, end, cb);
        };

        TSWorkerProxy.prototype.getDefinitionAtPosition = function (sessionName, cursor, cb) {
            this.perform("getDefinitionAtPosition", sessionName, cursor, cb);
        };

        TSWorkerProxy.prototype.getInfoAtPosition = function (type, sessionName, cursor, cb) {
            this.perform("getInfoAtPosition", type, sessionName, cursor, cb);
        };

        TSWorkerProxy.prototype.compile = function (cb) {
            this.perform("compile", cb);
        };

        TSWorkerProxy.prototype.getScriptLexicalStructure = function (sessionName, cb) {
            this.perform("getScriptLexicalStructure", sessionName, cb);
        };

        TSWorkerProxy.prototype.getTypeAtPosition = function (name, docPos, cb) {
            this.perform("getTypeAtPosition", name, docPos, cb);
        };

        TSWorkerProxy.prototype.getCompletions = function (fileName, cursor, cb) {
            this.perform("getCompletions", fileName, cursor, cb);
        };

        TSWorkerProxy.prototype.getDependencyGraph = function (cb) {
            this.perform("getDependencyGraph", cb);
        };

        TSWorkerProxy.prototype.setCompilationSettings = function (settings) {
            this.perform("setCompilationSettings", settings, null);
        };

        TSWorkerProxy.prototype.addScript = function (fileName, content) {
            this.perform("addScript", fileName, content, null);
        };

        TSWorkerProxy.prototype.updateScript = function (fileName, content) {
            this.perform("updateScript", fileName, content, null);
        };

        TSWorkerProxy.prototype.autoComplete = function (cursor, name, cb) {
            this.perform("autoComplete", cursor, name, cb);
        };

        TSWorkerProxy.prototype.initialize = function () {
            this.perform("initialize", null);
        };

        /**
        * Invoke a method on the worker using JSON-RPC message structure
        */
        TSWorkerProxy.prototype.perform = function (method) {
            var data = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                data[_i] = arguments[_i + 1];
            }
            var handler = data.pop();
            this.messageId++;
            var message = {
                id: this.messageId,
                method: method,
                params: data
            };
            this.worker.postMessage(message);
            console.info("Send message: " + message.method);
            if (handler)
                this.registry[this.messageId] = handler;
        };

        /**
        * Clear any pending handlers
        */
        TSWorkerProxy.prototype.clear = function () {
            this.registry = {};
        };

        /**
        * Setup the message communication with the worker
        */
        TSWorkerProxy.prototype.initWorker = function () {
            var _this = this;
            // Setup the message handler
            this.worker.onmessage = function (e) {
                var msg = e.data;

                // console.log("Received message " + JSON.stringify(msg) + " from worker");
                // console.log("Received message reply " + msg.id + " from worker.");
                if (msg.error) {
                    console.error("Got error back !!! ");
                    console.error(msg.error.stack);
                }

                // @TODO handle exceptions better and call callback
                var id = msg.id;
                if (id) {
                    var handler = _this.registry[id];
                    if (handler) {
                        delete _this.registry[id];
                        handler(msg.error, msg.result);
                    }
                } else {
                    if (msg.method && (msg.method === "setBusy")) {
                        IDE.statusBar.setBusy(msg.data);
                    } else {
                        console.info(msg.data);
                    }
                }
            };
        };
        return TSWorkerProxy;
    })();
    Cats.TSWorkerProxy = TSWorkerProxy;
})(Cats || (Cats = {}));
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
var Cats;
(function (Cats) {
    (function (Menu) {
        /**
        * This class creates the main menubar.
        */
        var Menubar = (function () {
            function Menubar() {
                this.fontSizes = [8, 10, 12, 13, 14, 16, 18, 20, 24];
                this.themes = [
                    { theme: Cats.theme.Theme, label: "CATS" },
                    { theme: qx.theme.Classic, label: "Classic" },
                    { theme: qx.theme.Indigo, label: "Indigo" },
                    { theme: qx.theme.Modern, label: "Modern" },
                    { theme: qx.theme.Simple, label: "Simple" }
                ];
                this.themes2 = [
                    { theme: "cats", label: "CATS" },
                    { theme: "chrome", label: "Chrome" },
                    { theme: "clouds", label: "Clouds" },
                    { theme: "crimson_editor", label: "Crimson Editor" },
                    { theme: "dawn", label: "Dawn" },
                    { theme: "dreamweaver", label: "Dreamweaver" },
                    { theme: "eclipse", label: "Eclipse" },
                    { theme: "github", label: "GitHub" },
                    { theme: "solarized_light", label: "Solarized Light" },
                    { theme: "textmate", label: "TextMate" },
                    { theme: "tomorrow", label: "Tomorrow" },
                    { theme: "xcode", label: "XCode" },
                    { theme: null, label: "seperator dark themes" },
                    { theme: "ambiance", label: "Ambiance" },
                    { theme: "clouds_midnight", label: "Clouds Midnight" },
                    { theme: "cobalt", label: "Cobalt" },
                    { theme: "idle_fingers", label: "idleFingers" },
                    { theme: "kr_theme", label: "krTheme" },
                    { theme: "merbivore", label: "Merbivore" },
                    { theme: "merbivore_soft", label: "Merbivore Soft" },
                    { theme: "mono_industrial", label: "Mono Industrial" },
                    { theme: "monokai", label: "Monokai" },
                    { theme: "pastel_on_dark", label: "Pastel on dark" },
                    { theme: "solarized_dark", label: "Solarized Dark" },
                    { theme: "twilight", label: "Twilight" },
                    { theme: "tomorrow_night", label: "Tomorrow Night" },
                    { theme: "tomorrow_night_blue", label: "Tomorrow Night Blue" },
                    { theme: "tomorrow_night_bright", label: "Tomorrow Night Bright" },
                    { theme: "tomorrow_night_eighties", label: "Tomorrow Night 80s" },
                    { theme: "vibrant_ink", label: "Vibrant Ink" }
                ];
                var menubar = new GUI.Menu({ type: 'menubar' });

                // @TODO fix a bit nicer
                if ((OS.File.platform() === OS.File.PlatForm.OSX) && menubar.createMacBuiltin) {
                    menubar.createMacBuiltin("CATS");
                    GUI.Window.get().menu = menubar;
                }

                var getCmd = Cats.Commands.getMenuCommand;
                var CMDS = Cats.Commands.CMDS;

                var file = new GUI.Menu();
                file.append(getCmd(4 /* file_new */));
                file.append(new GUI.MenuItem({ type: "separator" }));
                file.append(getCmd(9 /* file_save */));
                file.append(getCmd(10 /* file_saveAs */));
                file.append(getCmd(11 /* file_saveAll */));
                file.append(new GUI.MenuItem({ type: "separator" }));
                file.append(getCmd(6 /* file_close */));
                file.append(getCmd(8 /* file_closeAll */));
                file.append(getCmd(7 /* file_closeOther */));
                file.append(new GUI.MenuItem({ type: "separator" }));
                file.append(getCmd(43 /* ide_quit */));

                var edit = new GUI.Menu();

                // edit.append(this.editorCommand("undo"));
                edit.append(getCmd(12 /* edit_undo */));
                edit.append(getCmd(13 /* edit_redo */));

                /*edit.append(new GUI.MenuItem({ type: "separator" }));
                edit.append(getCmd(CMDS.edit_cut));
                edit.append(getCmd(CMDS.edit_copy));
                edit.append(getCmd(CMDS.edit_paste));*/
                edit.append(new GUI.MenuItem({ type: "separator" }));
                edit.append(getCmd(17 /* edit_find */));
                edit.append(getCmd(18 /* edit_findNext */));
                edit.append(getCmd(19 /* edit_findPrev */));
                edit.append(getCmd(20 /* edit_replace */));
                edit.append(getCmd(21 /* edit_replaceAll */));

                edit.append(new GUI.MenuItem({ type: "separator" }));

                // edit.append(getCmd(CMDS.edit_toggleInvisibles));
                edit.append(getCmd(23 /* edit_toggleRecording */));
                edit.append(getCmd(24 /* edit_replayMacro */));
                edit.append(getCmd(28 /* edit_gotoLine */));

                var source = new GUI.Menu();
                source.append(getCmd(25 /* edit_toggleComment */));
                source.append(getCmd(26 /* edit_indent */));
                source.append(getCmd(27 /* edit_outdent */));
                source.append(getCmd(29 /* source_format */));

                var refactor = new GUI.Menu();
                refactor.append(getCmd(42 /* refactor_rename */));

                var proj = new GUI.Menu();
                proj.append(getCmd(33 /* project_open */));
                proj.append(getCmd(34 /* project_close */));
                proj.append(new GUI.MenuItem({ type: "separator" }));
                proj.append(getCmd(35 /* project_build */));
                proj.append(getCmd(36 /* project_validate */));

                var buildOnSaveItem = new GUI.MenuItem({ label: 'Build on Save', checked: false, type: "checkbox" });
                proj.append(buildOnSaveItem);
                buildOnSaveItem.click = function () {
                    IDE.project.config.buildOnSave = buildOnSaveItem.checked;
                };
                proj.append(getCmd(39 /* project_refresh */));
                proj.append(getCmd(40 /* project_properties */));

                // proj.append(getCmd(CMDS.project_dependencies));
                var run = new GUI.Menu();
                run.append(getCmd(37 /* project_run */));

                // run.append(getCmd(CMDS.project_debug));
                var window = new GUI.Menu();
                window.append(new GUI.MenuItem({ label: 'Theme', submenu: this.createThemeMenu() }));
                window.append(new GUI.MenuItem({ label: 'Font Size', submenu: this.createFontSizeMenu() }));
                window.append(new GUI.MenuItem({ label: 'Right Margin', submenu: this.createMarginMenu() }));
                window.append(new GUI.MenuItem({ label: 'Views', submenu: this.createViewMenu() }));

                var help = new GUI.Menu();
                help.append(getCmd(1 /* help_shortcuts */));
                help.append(getCmd(2 /* help_processInfo */));
                help.append(getCmd(0 /* help_devTools */));
                help.append(getCmd(3 /* help_about */));

                menubar.append(new GUI.MenuItem({ label: 'File', submenu: file }));
                menubar.append(new GUI.MenuItem({ label: 'Edit', submenu: edit }));
                menubar.append(new GUI.MenuItem({ label: 'Source', submenu: source }));
                menubar.append(new GUI.MenuItem({ label: 'Refactor', submenu: refactor }));
                menubar.append(new GUI.MenuItem({ label: 'Project', submenu: proj }));
                menubar.append(new GUI.MenuItem({ label: 'Run', submenu: run }));
                menubar.append(new GUI.MenuItem({ label: 'Window', submenu: window }));
                menubar.append(new GUI.MenuItem({ label: 'Help', submenu: help }));

                var win = GUI.Window.get();
                win.menu = menubar;
            }
            Menubar.prototype.createFontSizeMenu = function () {
                var getCmd = Cats.Commands.getMenuCommand;
                var CMDS = Cats.Commands.CMDS;
                var menu = new GUI.Menu();
                this.fontSizes.forEach(function (size) {
                    var item = getCmd(45 /* ide_fontSize */, size + "px", size);
                    menu.append(item);
                });
                return menu;
            };

            Menubar.prototype.createMarginMenu = function () {
                var getCmd = Cats.Commands.getMenuCommand;
                var CMDS = Cats.Commands.CMDS;
                var menu = new GUI.Menu();
                [80, 100, 120, 140, 160, 180, 200].forEach(function (margin) {
                    var item = getCmd(46 /* ide_rightMargin */, margin.toString(), margin);
                    menu.append(item);
                });
                return menu;
            };

            Menubar.prototype.createViewMenu = function () {
                var getCmd = Cats.Commands.getMenuCommand;
                var CMDS = Cats.Commands.CMDS;
                var menu = new GUI.Menu();
                var views = [
                    { id: IDE.toolBar, name: "Toggle Toolbar" },
                    { id: IDE.statusBar, name: "Toggle Statusbar" }
                ];
                views.forEach(function (view) {
                    var item = getCmd(47 /* ide_toggleView */, view.name, view.id);
                    menu.append(item);
                });
                return menu;
            };

            Menubar.prototype.createThemeMenu = function () {
                var getCmd = Cats.Commands.getMenuCommand;
                var CMDS = Cats.Commands.CMDS;
                var menu = new GUI.Menu();
                this.themes.forEach(function (theme) {
                    if (theme.theme) {
                        var item = getCmd(44 /* ide_theme */, theme.label, theme.theme);
                        menu.append(item);
                    } else {
                        menu.append(new GUI.MenuItem({
                            type: "separator"
                        }));
                    }
                });
                return menu;
            };
            return Menubar;
        })();
        Menu.Menubar = Menubar;

        function createMenuBar() {
            return new Menubar();
        }
        Menu.createMenuBar = createMenuBar;
    })(Cats.Menu || (Cats.Menu = {}));
    var Menu = Cats.Menu;
})(Cats || (Cats = {}));
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
//
var Cats;
(function (Cats) {
    var Project = (function () {
        /**
        * Set the project to a new directory and make sure
        * we remove old artifacts.
        */
        function Project(projectDir) {
            IDE.project = this;
            this.projectDir = PATH.resolve(projectDir);
            this.refresh();
        }
        Project.prototype.getConfigFileName = function () {
            return PATH.join(this.projectDir, ".settings", "config.json");
        };

        Project.prototype.editConfig = function () {
            var existing = IDE.getSession(this.getConfigFileName());
            if (existing) {
                IDE.sessionTabView.select(existing);
            } else {
                var content = JSON.stringify(this.config, null, 4);
                var session = new Cats.Session(this.getConfigFileName(), content);
                IDE.sessionTabView.addSession(session);
            }
        };

        Project.prototype.hasUnsavedSessions = function () {
            var sessions = IDE.sessions;
            for (var i = 0; i < sessions.length; i++) {
                if (sessions[i].getChanged())
                    return true;
            }
            return false;
        };

        /**
        * Close the project
        */
        Project.prototype.close = function () {
            if (this.hasUnsavedSessions()) {
                var c = confirm("You have some unsaved changes that will get lost.\n Continue anyway ?");
                if (!c)
                    return;
            }
            IDE.sessionTabView.closeAll();
            IDE.navigatorPane.getPage("files").removeAll();
            IDE.outlineNavigator.clear();
            IDE.problemResult.clear();
            IDE.searchResult.clear();
            if (this.iSense)
                this.iSense.stop();
        };

        /**
        * Show the errors on a project level
        */
        Project.prototype.validate = function () {
            // @TODO don't compile just get the errors
            this.iSense.getAllDiagnostics(function (err, data) {
                if (data) {
                    IDE.problemResult.setData(data);
                    if (data.length === 0) {
                        IDE.console.log("Project has no errors");
                        IDE.problemPane.selectPage("console");
                    } else {
                        IDE.problemPane.selectPage("problems");
                    }
                }
            });
        };

        Project.prototype.build = function () {
            var _this = this;
            IDE.console.log("Start building project " + this.name + " ...");
            if (this.config.customBuild) {
                IDE.busy(true);

                // IDE.resultbar.selectOption(2);
                var cmd = this.config.customBuild.command;
                var options = this.config.customBuild.options || {};

                if (!options.cwd) {
                    options.cwd = this.projectDir;
                }

                var child = OS.File.executeProcess(cmd, options, function (error, stdout, stderr) {
                    if (stdout)
                        IDE.console.log(stdout);
                    if (stderr)
                        IDE.console.log(stderr, 2);
                    if (error !== null)
                        IDE.console.log('Execution error: ' + error, 2);
                    IDE.busy(false);
                    IDE.console.log("Done building project " + this.name + " ...");
                });
            } else {
                this.iSense.compile(function (err, data) {
                    _this.showCompilationResults(data);
                    if (data.errors && (data.errors.length > 0))
                        return;
                    var sources = data.source;
                    sources.forEach(function (source) {
                        OS.File.writeTextFile(source.fileName, source.content);
                    });
                    IDE.console.log("Done building project " + _this.name + " ...");
                });
            }
        };

        /**
        *  Refreshes the project and loads required artifacts
        *  again from the filesystem to be fully in sync
        */
        Project.prototype.refresh = function () {
            var _this = this;
            var projectConfig = new Cats.ProjectConfig(this.projectDir);
            this.config = projectConfig.load();
            this.name = this.config.name || PATH.basename(this.projectDir);
            document.title = "CATS | " + this.name;

            // this.initJSSense();
            if (this.iSense)
                this.iSense.stop();
            this.iSense = new Cats.TSWorkerProxy(this);

            if (this.config.compiler.outFileOption) {
                this.config.compiler.outFileOption = PATH.join(this.projectDir, this.config.compiler.outFileOption);
                console.info("Compiler output: " + this.config.compiler.outFileOption);
            }

            this.iSense.setCompilationSettings(this.config.compiler);

            if (this.config.compiler.useDefaultLib) {
                var fullName = PATH.join(IDE.catsHomeDir, "typings/lib.d.ts");
                var libdts = OS.File.readTextFile(fullName);
                this.iSense.addScript(fullName, libdts);
            }

            var srcs = [].concat(this.config.src);
            srcs.forEach(function (src) {
                _this.loadTypeScriptFiles(src);
            });
        };

        /**
        * Compile without actually saving the result
        */
        Project.prototype.trialCompile = function () {
            var _this = this;
            this.iSense.compile(function (err, data) {
                _this.showCompilationResults(data);
            });
        };

        Project.prototype.showCompilationResults = function (data) {
            if (data.errors && (data.errors.length > 0)) {
                IDE.problemResult.setData(data.errors);
                return;
            }

            IDE.problemResult.setData([]);
            IDE.console.log("Successfully compiled " + Object.keys(data.source).length + " file(s).");
        };

        Project.prototype.run = function () {
            var main = this.config.main;
            if (!main) {
                alert("Please specify the main html file to run in the project settings.");
                return;
            }
            var startPage = this.getStartURL();
            console.info("Opening file: " + startPage);
            var win2 = GUI.Window.open(startPage, {
                toolbar: true,
                webkit: {
                    "page-cache": false
                }
            });
        };

        /**
        * Get the URl for running the project
        */
        Project.prototype.getStartURL = function () {
            var url = PATH.join(this.projectDir, this.config.main);
            return "file://" + url;
        };

        /**
        * Load all the script that are part of the project into the tsworker
        * @param directory The source directory where to start the scan
        */
        Project.prototype.loadTypeScriptFiles = function (pattern) {
            var _this = this;
            if (!pattern)
                pattern = "**/*.ts";
            OS.File.find(pattern, this.projectDir, function (err, files) {
                files.forEach(function (file) {
                    try  {
                        var fullName = path.join(_this.projectDir, file);
                        OS.File.readTextFile2(fullName, function (content) {
                            _this.iSense.addScript(fullName, content);
                        });
                    } catch (err) {
                        console.error("Got error while handling file " + fullName);
                        console.error(err);
                    }
                });
            });
        };
        return Project;
    })();
    Cats.Project = Project;
})(Cats || (Cats = {}));
/**
* Basic logging widget that can be used to write
* logging information that are of interest to the user.
*
*/
var ConsoleLog = (function (_super) {
    __extends(ConsoleLog, _super);
    function ConsoleLog() {
        var _this = this;
        _super.call(this, null);
        this.printTime = true;
        this.setPadding(2, 2, 2, 2);
        this.setDecorator(null);

        //var w = new qx.ui.core.Widget();
        // this.add(w);
        this.setOverflow("auto", "auto");
        this.addListenerOnce("appear", function () {
            _this.container = _this.getContentElement().getDomElement();
        });
        this.setContextMenu(this.createContextMenu());
    }
    ConsoleLog.prototype.insertLine = function (line, severity) {
        if (line.trim()) {
            var span = document.createElement("SPAN");
            span.innerText = line;
            if (severity)
                span.style.color = "red";
            this.container.appendChild(span);
        }
        this.container.appendChild(document.createElement('BR'));
    };

    /**
    * Log a message to the console widget. This should only be used for
    * logging mesages that are useful to the enduser (= developer) and not for
    * debug information.
    *
    * @TODO implement a better performing solution using addChild
    */
    ConsoleLog.prototype.log = function (msg, severity) {
        var _this = this;
        if (typeof severity === "undefined") { severity = 0; }
        IDE.problemPane.selectPage("console");
        if (this.container) {
            var prefix = "";
            if (this.printTime) {
                var dt = new Date();
                prefix = dt.toLocaleTimeString() + " ";
            }
            var lines = msg.split("\n");
            lines.forEach(function (line) {
                if (line.trim())
                    line = prefix + line;
                _this.insertLine(line, severity);
            });

            this.container.scrollTop = this.container.scrollHeight;
        }
    };

    ConsoleLog.prototype.createContextMenu = function () {
        var _this = this;
        var menu = new qx.ui.menu.Menu();
        var item1 = new qx.ui.menu.Button("Clear Output");
        item1.addListener("execute", function () {
            _this.clear();
        });
        menu.add(item1);

        var item2 = new qx.ui.menu.Button("Toggle Print Time");
        item2.addListener("execute", function () {
            _this.printTime = !_this.printTime;
        });
        menu.add(item2);

        return menu;
    };

    ConsoleLog.prototype.clear = function () {
        if (this.container)
            this.container.innerHTML = "";
    };
    return ConsoleLog;
})(qx.ui.embed.Html);
var path = require("path");

var rootTop = {
    label: "qx-cats",
    fullPath: "/Users/peter/Development/qx-cats/",
    directory: true,
    children: [{
            label: "Loading",
            icon: "loading",
            directory: false
        }],
    loaded: false
};

/**
* File navigator widget for CATS
*/
var FileNavigator = (function (_super) {
    __extends(FileNavigator, _super);
    function FileNavigator(project) {
        var _this = this;
        _super.call(this, null, "label", "children");
        this.project = project;
        this.directoryModels = {};
        this.iconsForMime = {};
        var directory = project.projectDir;
        rootTop.fullPath = directory;
        rootTop.label = path.basename(directory);
        var root = qx.data.marshal.Json.createModel(rootTop, true);
        this.setModel(root);

        // this.setItemHeight(18);
        // this.setLabelPath("label");
        // this.setChildProperty("children");
        this.setDecorator(null);
        this.setPadding(0, 0, 0, 0);

        this.setupDelegate();

        var contextMenu = new FileContextMenu(this);
        this.setContextMenu(contextMenu);
        this.setup();

        console.info("Icon path:" + this.getIconPath());
        this.addListener("dblclick", function () {
            var file = _this.getSelectedFile();
            if (file) {
                IDE.openSession(file.getFullPath());
            }
        });

        // Force a relaod after a close
        this.addListener("close", function (event) {
            var data = event.getData();
            data.setLoaded(false);
        });

        this.loadAvailableIcons();
    }
    FileNavigator.prototype.getSelectedFile = function () {
        var item = this.getSelection().getItem(0);
        if (!item)
            return null;
        if (!item.getDirectory)
            return null;
        if (!item.getDirectory()) {
            return item;
        }
        return null;
    };

    /**
    * Get all available icons for mime-types
    */
    FileNavigator.prototype.loadAvailableIcons = function () {
        var _this = this;
        var iconFolder = "./static/resource/qx/icon/Oxygen/16/mimetypes";
        var files = OS.File.readDir(iconFolder);
        files.forEach(function (file) {
            if (file.isFile) {
                var mimetype = path.basename(file.name, ".png");
                _this.iconsForMime[mimetype] = file.name;
            }
        });
    };

    /**
    * Get an icon for a file based on its mimetype
    */
    FileNavigator.prototype.getIconForFile = function (fileName) {
        var mimetype = MimeTypeFinder.lookup(fileName).replace("/", "-");

        var icon = this.iconsForMime[mimetype];
        if (!icon)
            icon = this.iconsForMime["text-plain"];
        icon = "./resource/qx/icon/Oxygen/16/mimetypes/" + icon;

        // IDE.console.log("Icon: " + icon);
        return icon;
    };

    FileNavigator.prototype.setup = function () {
        var _this = this;
        this.setIconPath("");
        this.setIconOptions({
            converter: function (value, model) {
                if (value.getDirectory()) {
                    return "./resource/qx/icon/Oxygen/16/places/folder.png";
                }
                return _this.getIconForFile(value.getLabel());
            }
        });
    };

    FileNavigator.prototype.setupDelegate = function () {
        var self = this;
        var delegate = {
            bindItem: function (controller, item, index) {
                controller.bindDefaultProperties(item, index);

                controller.bindProperty("", "open", {
                    converter: function (value, model, source, target) {
                        var isOpen = target.isOpen();
                        if (isOpen && !value.getLoaded()) {
                            value.setLoaded(true);

                            setTimeout(function () {
                                value.getChildren().removeAll();
                                self.readDir(value);
                            }, 0);
                        }
                        return isOpen;
                    }
                }, item, index);
            }
        };
        this.setDelegate(delegate);
    };

    FileNavigator.prototype.refreshDir = function (dir) {
        var value;
        setTimeout(function () {
            // alert("refreshing tree");
            var node = {
                label: "Loading",
                fullPath: "asasasa/dss",
                directory: false
            };
            value.getChildren().removeAll();
            value.getChildren().push(qx.data.marshal.Json.createModel(node, true));
        }, 0);
    };

    /**
    * Read the files from a directory
    * @param directory The directory name that should be read
    */
    FileNavigator.prototype.readDir = function (parent) {
        var entries = OS.File.readDir(parent.getFullPath(), true);
        entries.forEach(function (entry) {
            var node = {
                label: entry.name,
                fullPath: entry.fullName,
                loaded: !entry.isDirectory,
                directory: entry.isDirectory,
                children: entry.isDirectory ? [{
                        label: "Loading",
                        icon: "loading",
                        directory: false
                    }] : null
            };
            parent.getChildren().push(qx.data.marshal.Json.createModel(node, true));
        });
    };
    FileNavigator.COUNT = 0;
    return FileNavigator;
})(qx.ui.tree.VirtualTree);
/**
* Create a simple Tree to mimic outline functionality
*/
var OutlineNavigator = (function (_super) {
    __extends(OutlineNavigator, _super);
    function OutlineNavigator() {
        var _this = this;
        var tableModel = new qx.ui.table.model.Simple();

        tableModel.setColumns(OutlineNavigator.HEADERS);
        tableModel.setData([]);

        var custom = {
            tableColumnModel: function (obj) {
                return new qx.ui.table.columnmodel.Resize(obj);
            }
        };

        _super.call(this, tableModel, custom);

        this.setDecorator(null);
        this.getSelectionModel().addListener("changeSelection", function (data) {
            var selectedRow = _this.getSelectionModel().getLeadSelectionIndex();
            var data = _this.getTableModel().getRowData(selectedRow);

            // IDE.console.log("Selected row:" + selectedRow);
            if (data)
                IDE.sessionTabView.navigateTo(_this.session, data[2].start);
        });
    }
    OutlineNavigator.prototype.clear = function () {
        this.setData(null, []);
    };

    OutlineNavigator.prototype.rangeToPosition = function (range) {
        return (range.start.row + 1) + ":" + (range.start.column + 1);
    };

    /**
    * Set the data for this outline.
    */
    OutlineNavigator.prototype.setData = function (session, data) {
        var _this = this;
        this.session = session;
        var indentation = ["", " -- ", " ---- ", " ------ ", " -------- "];

        var tableModel = new qx.ui.table.model.Simple();
        var rows = [];
        data.forEach(function (item) {
            var prefix = "";
            var nrSpaces = item.containerName.split(".").length;
            if (item.containerName && (nrSpaces > 0))
                prefix = indentation[nrSpaces];

            rows.push([
                prefix + item.name,
                _this.rangeToPosition(item.range),
                item.range,
                item.kind
            ]);
        });

        // tableModel.setColumns(["Name", "Position"]);
        // tableModel.setData(rows);
        // this.setTableModel(tableModel);
        this.getTableModel().setData(rows);
        this.getSelectionModel().resetSelection();
    };
    OutlineNavigator.HEADERS = ["Name", "Position"];
    return OutlineNavigator;
})(qx.ui.table.Table);
/**
* This table displays problems and search result
*/
var ResultTable = (function (_super) {
    __extends(ResultTable, _super);
    function ResultTable(headers) {
        if (typeof headers === "undefined") { headers = ["Message", "File", "Position"]; }
        var _this = this;
        var tableModel = new qx.ui.table.model.Simple();
        tableModel.setColumns(headers);
        tableModel.setData([]);

        var custom = {
            tableColumnModel: function (obj) {
                return new qx.ui.table.columnmodel.Resize(obj);
            }
        };
        _super.call(this, tableModel, custom);
        this.setDecorator(null);

        this.setPadding(0, 0, 0, 0);

        this.getSelectionModel().addListener("changeSelection", function (data) {
            var selectedRow = _this.getSelectionModel().getLeadSelectionIndex();
            var data = _this.getTableModel().getRowData(selectedRow);

            // IDE.console.log("Selected row:" + selectedRow);
            if (data)
                IDE.openSession(data[1], data[3].start);
        });

        this.setContextMenu(this.createContextMenu());
    }
    ResultTable.prototype.rangeToPosition = function (range) {
        return (range.start.row + 1) + ":" + (range.start.column + 1);
    };

    ResultTable.prototype.clear = function () {
        this.setData([]);
    };

    ResultTable.prototype.convert = function (row) {
        return [
            row.message,
            row.fileName,
            this.rangeToPosition(row.range),
            row.range
        ];
    };

    ResultTable.prototype.getData = function () {
        return this.data;
    };

    ResultTable.prototype.setData = function (data) {
        var _this = this;
        this.data = data;
        var tableModel = new qx.ui.table.model.Simple();
        var rows = [];
        if (data) {
            data.forEach(function (row) {
                rows.push(_this.convert(row));
            });
        }

        // tableModel.setColumns(ResultTable.HEADERS);
        // tableModel.setData(rows);
        // this.setTableModel(tableModel);
        this.getTableModel().setData(rows);
        this.getSelectionModel().resetSelection();
    };

    ResultTable.prototype.addData = function (row) {
        this.getTableModel().addRows([this.convert(row)]);
    };

    ResultTable.prototype.createContextMenu = function () {
        var _this = this;
        var menu = new qx.ui.menu.Menu();
        var item1 = new qx.ui.menu.Button("Clear Output");
        item1.addListener("execute", function () {
            _this.clear();
        });
        menu.add(item1);

        return menu;
    };
    return ResultTable;
})(qx.ui.table.Table);
/**
* Wrapper around the ACE editor. The rest of the code base should not use
* ACE editor directly so it can be easily changed for another editor if required.
*/
var SourceEditor = (function (_super) {
    __extends(SourceEditor, _super);
    function SourceEditor(session, pos) {
        var _this = this;
        _super.call(this);
        this.session = session;
        this.pendingWorkerUpdate = false;
        this.setDecorator(null);
        this.setFont(null);
        this.setAppearance(null);
        this.editSession = new ace.EditSession(session.content, "ace/mode/" + session.mode);
        this.editSession.setNewLineMode(IDE.project.config.editor.newLineMode);

        this.editSession.on("change", this.onChangeHandler.bind(this));

        this.addListenerOnce("appear", function () {
            var container = _this.getContentElement().getDomElement();
            container.style.lineHeight = "normal";

            // this.configEditor(this.project.config.editor);
            _this.aceEditor = _this.createAceEditor(container);
            _this.aceEditor.setSession(_this.editSession);

            // var aceSession = this.aceEditor.getSession();
            // aceSession.setMode("ace/mode/" + session.mode)
            // aceSession.setValue(session.content);
            if (session.mode === "binary") {
                _this.aceEditor.setReadOnly(true);
            } else {
                _this.aceEditor.setReadOnly(false);
            }

            _this.createContextMenu();

            if (session.isTypeScript()) {
                _this.autoCompletePopup = new AutoCompletePopup(_this.aceEditor);
                _this.autoCompletePopup.show();
                _this.autoCompletePopup.hide();
            }

            if (pos)
                setTimeout(function () {
                    _this.moveToPosition(pos);
                }, 100);

            _this.aceEditor.on("changeSelection", function () {
                IDE.infoBus.emit("editor.position", _this.aceEditor.getCursorPosition());
            });
        }, this);

        this.addListener("appear", function () {
            _this.session.sync();
            _this.updateWorld();
        });

        session.on("errors", function (errors) {
            _this.showErrors(errors);
        });
        this.addListener("resize", function () {
            _this.resizeHandler();
        });

        SourceEditor.CONFIG.addListener("changeFontSize", function (ev) {
            _this.aceEditor.setFontSize(ev.getData());
        });

        SourceEditor.CONFIG.addListener("changePrintMarginColumn", function (ev) {
            _this.aceEditor.setPrintMarginColumn(ev.getData());
        });

        IDE.infoBus.on("editor.fontSize", function (size) {
            _this.aceEditor.setFontSize(size + "px");
        });
        IDE.infoBus.on("editor.rightMargin", function (margin) {
            _this.aceEditor.setPrintMarginColumn(margin);
        });
    }
    SourceEditor.prototype.setContent = function (content) {
        this.aceEditor.getSession().setValue(content);
    };

    SourceEditor.prototype.updateWorld = function () {
        IDE.infoBus.emit("editor.overwrite", this.aceEditor.getSession().getOverwrite());
        IDE.infoBus.emit("editor.mode", this.session.mode);
        IDE.infoBus.emit("editor.position", this.aceEditor.getCursorPosition());
    };

    SourceEditor.prototype.replace = function (range, content) {
        this.editSession.replace(range, content);
    };

    SourceEditor.prototype.getContent = function () {
        return this.aceEditor.getSession().getValue();
    };

    /**
    * Keep track of changes made to the content and update the
    * worker if required.
    */
    SourceEditor.prototype.onChangeHandler = function (event) {
        var _this = this;
        if (!this.session.getChanged())
            this.session.setChanged(true);

        this.pendingWorkerUpdate = true;

        if (!this.session.isTypeScript())
            return;

        clearTimeout(this.updateSourceTimer);

        // Don't send too many updates to the worker, wait for people to
        // finsih typing at least 1 second.
        this.updateSourceTimer = setTimeout(function () {
            if (_this.pendingWorkerUpdate)
                _this.update();
        }, 1000);
    };

    SourceEditor.prototype.createToolTip = function () {
        var tooltip = new qx.ui.tooltip.ToolTip("");
        tooltip.exclude();
        tooltip.setRich(true);
        tooltip.setMaxWidth(500);

        // tooltip.setWidth(300);
        this.setToolTip(tooltip);
        return tooltip;
    };

    SourceEditor.prototype.resizeHandler = function () {
        var _this = this;
        if (!this.isSeeable()) {
            this.addListenerOnce("appear", function () {
                _this.resizeEditor();
            });
        } else {
            this.resizeEditor();
        }
    };

    SourceEditor.prototype.resizeEditor = function () {
        var _this = this;
        setTimeout(function () {
            _this.aceEditor.resize();
        }, 100);
    };

    SourceEditor.prototype.setupEvents = function () {
        var session = this.aceEditor.getSession();
        session.on("changeOverwrite", function (a) {
            IDE.infoBus.emit("editor.overwrite", session.getOverwrite());
        });
    };

    SourceEditor.prototype.moveToPosition = function (pos) {
        this.aceEditor.clearSelection();
        this.aceEditor.moveCursorToPosition(pos);
        this.aceEditor.centerSelection();
    };

    SourceEditor.prototype.getPosition = function () {
        return this.aceEditor.getCursorPosition();
    };

    /**
    * Get the Position based on mouse x,y coordinates
    */
    SourceEditor.prototype.getPositionFromScreenOffset = function (x, y) {
        var r = this.aceEditor.renderer;

        // var offset = (x + r.scrollLeft - r.$padding) / r.characterWidth;
        var offset = (x - r.$padding) / r.characterWidth;

        // @BUG: Quickfix for strange issue with top
        var correction = r.scrollTop ? 7 : 0;

        var row = Math.floor((y + r.scrollTop - correction) / r.lineHeight);
        var col = Math.round(offset);

        var docPos = this.aceEditor.getSession().screenToDocumentPosition(row, col);
        return docPos;
    };

    /**
    * Show info at Screen location
    */
    SourceEditor.prototype.showToolTipAt = function (ev) {
        // if (this.mode !== "typescript") return;
        var _this = this;
        var docPos = this.getPositionFromScreenOffset(ev.offsetX, ev.offsetY);
        var project = IDE.project;

        project.iSense.getTypeAtPosition(this.session.name, docPos, function (err, data) {
            if (!data)
                return;
            var member = data.memberName;
            if (!member)
                return;

            var tip = data.description;
            if (data.docComment) {
                tip += '<hr>' + data.docComment;
            }

            if (tip && tip.trim()) {
                var tooltip = _this.getToolTip();
                if (!tooltip)
                    tooltip = _this.createToolTip();
                tooltip.setLabel(tip);
                tooltip.moveTo(ev.x, ev.y + 10);
                tooltip.show();
            }
            // IDE.mainEditor.toolTip.show(ev.x, ev.y, tip);
        });
    };

    /**
    * Update the worker with the latest version of the content of this
    * session.
    */
    SourceEditor.prototype.update = function () {
        if (this.session.isTypeScript()) {
            var source = this.aceEditor.getSession().getValue();
            this.session.updateContent(source);
            clearTimeout(this.updateSourceTimer);
            this.pendingWorkerUpdate = false;
        }
        ;
    };

    /**
    * Perform code autocompletion. Right now support for TS.
    */
    SourceEditor.prototype.showAutoComplete = function (cursor) {
        var _this = this;
        if (!this.session.isTypeScript())
            return;

        // Any pending changes that are not yet send to the worker?
        if (this.pendingWorkerUpdate)
            this.update();

        IDE.project.iSense.autoComplete(cursor, this.session.name, function (err, completes) {
            if (completes != null)
                _this.autoCompletePopup.showCompletions(completes.entries);
        });
    };

    SourceEditor.prototype.autoComplete = function () {
        if (this.session.mode === "typescript") {
            var cursor = this.aceEditor.getCursorPosition();
            this.showAutoComplete(cursor);
        }
    };

    /**
    * Check if there are any errors for this session and show them.
    */
    SourceEditor.prototype.showErrors = function (result) {
        var annotations = [];
        result.forEach(function (error) {
            annotations.push({
                row: error.range.start.row,
                column: error.range.start.column,
                type: error.severity === 2 /* Error */ ? "error" : "warning",
                text: error.message
            });
        });
        this.aceEditor.getSession().setAnnotations(annotations);
    };

    /**
    * @TODO Put all the typescript feauture setup in here
    */
    SourceEditor.prototype.setupTypeScriptFeatures = function () {
    };

    // Initialize the editor
    SourceEditor.prototype.createAceEditor = function (rootElement) {
        var _this = this;
        var editor = ace.edit(rootElement);

        editor.commands.addCommands([
            {
                name: "autoComplete",
                bindKey: {
                    win: "Ctrl-Space",
                    mac: "Ctrl-Space"
                },
                exec: function () {
                    _this.autoComplete();
                }
            },
            {
                name: "gotoDeclaration",
                bindKey: {
                    win: "F12",
                    mac: "F12"
                },
                exec: function () {
                    _this.gotoDeclaration();
                }
            },
            {
                name: "save",
                bindKey: {
                    win: "Ctrl-S",
                    mac: "Command-S"
                },
                exec: function () {
                    _this.session.persist();
                }
            }
        ]);

        var originalTextInput = editor.onTextInput;
        editor.onTextInput = function (text) {
            originalTextInput.call(editor, text);
            if (text === ".")
                _this.autoComplete();
        };

        var elem = rootElement;
        elem.onmousemove = this.onMouseMove.bind(this);
        elem.onmouseout = function () {
            if (_this.getToolTip() && _this.getToolTip().isSeeable())
                _this.getToolTip().exclude();
            clearTimeout(_this.mouseMoveTimer);
        };

        return editor;
    };

    SourceEditor.prototype.gotoDeclaration = function () {
        var session = this.session;

        session.project.iSense.getDefinitionAtPosition(session.name, this.getPosition(), function (err, data) {
            if (data && data.fileName)
                IDE.openSession(data.fileName, data.range.start);
        });
    };

    SourceEditor.prototype.getInfoAt = function (type) {
        IDE.problemPane.selectPage("search");

        this.session.project.iSense.getInfoAtPosition(type, this.session.name, this.getPosition(), function (err, data) {
            console.debug("Called getInfoAt for with results #" + data.length);
            IDE.searchResult.setData(data);
        });
    };

    SourceEditor.prototype.findReferences = function () {
        return this.getInfoAt("getReferencesAtPosition");
    };

    SourceEditor.prototype.findOccurences = function () {
        return this.getInfoAt("getOccurrencesAtPosition");
    };

    SourceEditor.prototype.findImplementors = function () {
        return this.getInfoAt("getImplementorsAtPosition");
    };

    SourceEditor.prototype.createContextMenuItem = function (name, fn) {
        var button = new qx.ui.menu.Button(name);
        button.addListener("execute", fn);
        return button;
    };

    SourceEditor.prototype.bookmark = function () {
        var name = prompt("please provide bookmark name");
        if (name) {
            var pos = this.getPosition();
            IDE.bookmarks.addData({
                message: name,
                fileName: this.session.name,
                range: {
                    start: pos,
                    end: pos
                }
            });
        }
    };

    SourceEditor.prototype.createContextMenu = function () {
        var CMDS = Cats.Commands.CMDS;
        var menu = new qx.ui.menu.Menu();
        if (this.session.isTypeScript()) {
            menu.add(this.createContextMenuItem("Goto Declaration", this.gotoDeclaration.bind(this)));
            menu.add(this.createContextMenuItem("Find References", this.findReferences.bind(this)));
            menu.add(this.createContextMenuItem("Find Occurences", this.findOccurences.bind(this)));
            menu.add(this.createContextMenuItem("FInd Implementations", this.findImplementors.bind(this)));
            menu.addSeparator();
        }
        menu.add(this.createContextMenuItem("Bookmark", this.bookmark.bind(this)));

        this.setContextMenu(menu);
    };

    SourceEditor.prototype.onMouseMove = function (ev) {
        var _this = this;
        if (this.getToolTip() && this.getToolTip().isSeeable())
            this.getToolTip().exclude();
        clearTimeout(this.mouseMoveTimer);
        var elem = ev.srcElement;
        if (elem.className !== "ace_content")
            return;
        this.mouseMoveTimer = setTimeout(function () {
            _this.showToolTipAt(ev);
        }, 800);
    };
    SourceEditor.CONFIG = qx.data.marshal.Json.createModel({
        fontSize: "12px",
        printMarginColumn: 100
    }, true);
    return SourceEditor;
})(qx.ui.core.Widget);
/**
* Used for all the tabs execpt the session tab
*/
var TabView = (function (_super) {
    __extends(TabView, _super);
    function TabView(tabNames) {
        var _this = this;
        _super.call(this);
        this.iconFolder = "./resource/qx/icon/Oxygen/16/";
        this.iconMapping = {
            "search": {
                label: "Search",
                icon: "actions/edit-find.png"
            },
            "console": {
                icon: "apps/utilities-terminal.png"
            },
            "files": {
                label: "Project Explorer",
                icon: "actions/view-list-tree.png"
            },
            "outline": {
                icon: "actions/code-class.png"
            },
            "bookmarks": {
                icon: "actions/bookmarks-organize.png"
            },
            "todo": {
                icon: "actions/view-pim-tasks.png"
            },
            "properties": {
                icon: "actions/document-properties.png"
            },
            "problems": {
                icon: "status/task-attention.png"
            }
        };
        this.setPadding(0, 0, 0, 0);
        this.setContentPadding(0, 0, 0, 0);
        tabNames.forEach(function (name) {
            _this.addPage(name);
        });
    }
    TabView.prototype.getLabel = function (name) {
        var label;
        var entry = this.iconMapping[name];
        if (entry)
            label = entry.label;
        if (!label)
            label = qx.Bootstrap.firstUp(name);
        return label;
    };

    TabView.prototype.getIconName = function (name) {
        var entry = this.iconMapping[name];
        if (entry)
            return this.iconFolder + entry.icon;
    };

    TabView.prototype.addPage = function (id, tooltipText) {
        var tab = new qx.ui.tabview.Page(this.getLabel(id), this.getIconName(id));
        tab[TabView.IDNAME] = id;
        tab.setLayout(new qx.ui.layout.Canvas());

        var button = tab.getButton();
        button.setContextMenu(this.createContextMenu(tab));

        if (tooltipText) {
            var tooltip = new qx.ui.tooltip.ToolTip(tooltipText);
            button.setToolTip(tooltip);
            button.setBlockToolTip(false);
        }
        this.add(tab);
        return tab;
    };

    TabView.prototype.createContextMenu = function (tab) {
        var _this = this;
        var menu = new qx.ui.menu.Menu();
        var item1 = new qx.ui.menu.Button("Close");
        item1.addListener("execute", function () {
            _this.remove(tab);
        });

        var item2 = new qx.ui.menu.Button("Close other");
        var item3 = new qx.ui.menu.Button("Close all");
        menu.add(item1);
        menu.add(item2);
        menu.add(item3);
        return menu;
    };

    TabView.prototype.getPage = function (id) {
        var pages = this.getChildren();
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (page[TabView.IDNAME] === id) {
                return page;
            }
        }
        return null;
    };

    TabView.prototype.selectPage = function (id) {
        var page = this.getPage(id);
        if (page)
            this.setSelection([page]);
    };
    TabView.IDNAME = "___ID___";
    return TabView;
})(qx.ui.tabview.TabView);
/**
* The toolbar for CATS
*/
var ToolBar = (function (_super) {
    __extends(ToolBar, _super);
    function ToolBar() {
        _super.call(this);
        this.themes = ["Modern", "Indigo", "Simple", "Cats", "Classic"];
        this.iconFolder = "resource/qx/icon/Oxygen/22/";
        this.commands = [
            4 /* file_new */,
            6 /* file_close */,
            8 /* file_closeAll */,
            9 /* file_save */,
            11 /* file_saveAll */,
            10 /* file_saveAs */,
            null,
            33 /* project_open */,
            34 /* project_close */,
            35 /* project_build */,
            37 /* project_run */,
            39 /* project_refresh */,
            null,
            17 /* edit_find */,
            20 /* edit_replace */,
            26 /* edit_indent */,
            27 /* edit_outdent */
        ];
        this.init();
        // this.setPadding(0,0,0,0);
    }
    ToolBar.prototype.createButton = function (cmd) {
        var icon = this.iconFolder + cmd.icon;
        var button = new qx.ui.toolbar.Button(cmd.label, icon);
        button.setShow("icon");
        button.getChildControl("icon").set({
            width: 22,
            height: 22,
            scale: true
        });
        var tooltip = new qx.ui.tooltip.ToolTip(cmd.label, null);
        button.setToolTip(tooltip);
        button.setBlockToolTip(false);

        // button.setDecorator(null);
        // button.setPadding(0,0,0,0);
        button.addListener("click", function () {
            cmd.command();
        });
        return button;
    };

    ToolBar.prototype.init = function () {
        var _this = this;
        this.commands.forEach(function (cmdEnum) {
            if (cmdEnum === null) {
                _this.addSeparator();
            } else {
                var cmd = Cats.Commands.get(cmdEnum);
                if (cmd && cmd.icon) {
                    var button = _this.createButton(cmd);
                    _this.add(button);
                }
            }
        });
        return;
        var cmds = Cats.Commands.getAllCommands();
        cmds.forEach(function (cmd) {
            if (cmd.icon) {
                var button = _this.createButton(cmd);
                _this.add(button);
            }
        });
        // this.addThemeButtons();
    };

    ToolBar.prototype.toggle = function () {
        if (this.isVisible()) {
            this.exclude();
        } else {
            this.show();
        }
    };

    ToolBar.prototype.addThemeButtons = function () {
        var _this = this;
        this.themes.forEach(function (theme) {
            var themeButton = new qx.ui.toolbar.Button(theme);
            themeButton.addListener("click", function () {
                qx.theme.manager.Meta.getInstance().setTheme(qx.theme[theme]);
            });
            _this.add(themeButton);
        });
    };
    return ToolBar;
})(qx.ui.toolbar.ToolBar);
/**
* This class represents a page holding a session. Typically that means a
* editor
*/
var SessionPage = (function (_super) {
    __extends(SessionPage, _super);
    function SessionPage(session, pos) {
        _super.call(this, session.shortName);
        this.session = session;
        this.setShowCloseButton(true);
        this.setLayout(new qx.ui.layout.Canvas());
        this.setPadding(0, 0, 0, 0);
        this.setMargin(0, 0, 0, 0);

        // this.setDecorator(null);
        this.editor = new SourceEditor(session, pos);
        this.add(this.editor, { edge: 0 });
        this.createContextMenu();
        this.createToolTip();
        this.getButton().setShow("both");

        this.session.on("setChanged", this.setChanged.bind(this));
        this.session.on("errors", this.setHasErrors.bind(this));
    }
    SessionPage.prototype.createToolTip = function () {
        var button = this.getButton();
        var tooltip = new qx.ui.tooltip.ToolTip(this.session.name);
        button.setToolTip(tooltip);
    };

    SessionPage.prototype.createContextMenu = function () {
        var _this = this;
        var button = this.getButton();
        var menu = new qx.ui.menu.Menu();

        var item1 = new qx.ui.menu.Button("Close");
        item1.addListener("execute", function () {
            IDE.sessionTabView.close(_this);
        });

        var item2 = new qx.ui.menu.Button("Close other");
        item2.addListener("execute", function () {
            IDE.sessionTabView.closeOther(_this);
        });

        var item3 = new qx.ui.menu.Button("Close all");
        item3.addListener("execute", function () {
            IDE.sessionTabView.closeAll();
        });

        menu.add(item1);
        menu.add(item2);
        menu.add(item3);
        button.setContextMenu(menu);
    };

    /**
    * Tell the Page that the editor on it has detected some errors in the code
    */
    SessionPage.prototype.setHasErrors = function (errors) {
        if (errors.length > 0) {
            this.setIcon("./resource/qx/icon/Oxygen/16/status/task-attention.png");
            // this.getButton().setShow("both");
        } else {
            this.resetIcon();
            // this.getButton().setShow("label");
        }
    };

    SessionPage.prototype.setChanged = function (changed) {
        var button = this.getButton();

        if (changed) {
            button.setLabel("*" + this.session.shortName);
        } else {
            button.setLabel(this.session.shortName);
        }
    };
    return SessionPage;
})(qx.ui.tabview.Page);

var SessionTabView = (function (_super) {
    __extends(SessionTabView, _super);
    function SessionTabView() {
        _super.call(this);
        this.setPadding(0, 0, 0, 0);
        this.setContentPadding(0, 0, 0, 0);
    }
    SessionTabView.prototype.addSession = function (session, pos) {
        var page = new SessionPage(session, pos);

        // page.exclude();
        this.add(page);
        page.fadeIn(500);
        this.setSelection([page]);
    };

    /**
    * close all open pages
    */
    SessionTabView.prototype.closeAll = function () {
        var _this = this;
        var pages = this.getChildren().concat();
        pages.forEach(function (page) {
            _this.remove(page);
        });
    };

    /**
    * close one page
    */
    SessionTabView.prototype.close = function (page) {
        if (typeof page === "undefined") { page = this.getActivePage(); }
        this.remove(page);
    };

    /**
    * Close the other pages
    */
    SessionTabView.prototype.closeOther = function (closePage) {
        var _this = this;
        if (typeof closePage === "undefined") { closePage = this.getActivePage(); }
        var pages = this.getChildren().concat();
        pages.forEach(function (page) {
            if (page !== closePage)
                _this.remove(page);
        });
    };

    /**
    * Get all the open sessions
    */
    SessionTabView.prototype.getSessions = function () {
        var result = [];
        this.getChildren().forEach(function (child) {
            result.push(child.session);
        });
        return result;
    };

    /**
    * Get the currently active session
    */
    SessionTabView.prototype.getActiveSession = function () {
        var page = this.getSelection()[0];
        if (!page)
            return null;
        return page.session;
    };

    SessionTabView.prototype.navigateTo = function (session, pos) {
        var page = this.getPageBySession(session);
        this.setSelection([page]);
        if (pos)
            page.editor.moveToPosition(pos);
    };

    /**
    * Find a page by its session
    */
    SessionTabView.prototype.getPageBySession = function (session) {
        var pages = this.getChildren();
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (page.session === session)
                return page;
        }
        return null;
    };

    SessionTabView.prototype.getActivePage = function () {
        return this.getSelection()[0];
    };

    SessionTabView.prototype.select = function (session) {
        var page = this.getPageBySession(session);
        if (page)
            this.setSelection([page]);
    };
    return SessionTabView;
})(qx.ui.tabview.TabView);
/**
* The toolbar for CATS
*/
var StatusBar = (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar() {
        _super.call(this);
        this.init();
        this.setupListeners();
    }
    StatusBar.prototype.createButton = function (label, icon) {
        var button = new qx.ui.toolbar.Button(label, icon);

        // button.setPadding(1,1,1,1);
        button.setMargin(0, 10, 0, 10);
        button.setMinWidth(100);
        button.setDecorator(null);
        return button;
    };

    StatusBar.prototype.init = function () {
        this.positionInfo = this.createButton("-:-");
        this.add(this.positionInfo);

        this.modeInfo = this.createButton("Unknown");
        this.add(this.modeInfo);
        this.addSpacer();

        this.busyInfo = this.createButton("", "./resource/cats/loader.gif");
        this.busyInfo.setShow("icon");
        this.add(this.busyInfo);

        this.overwriteInfo = this.createButton("INSERT");
        this.add(this.overwriteInfo);
    };

    StatusBar.prototype.setBusy = function (busy) {
        if (busy) {
            this.busyInfo.setIcon("./resource/cats/loader_anim.gif");
        } else {
            this.busyInfo.setIcon("./resource/cats/loader.gif");
        }
    };

    StatusBar.prototype.toggle = function () {
        if (this.isVisible()) {
            this.exclude();
        } else {
            this.show();
        }
    };

    StatusBar.prototype.setupListeners = function () {
        var _this = this;
        IDE.infoBus.on("editor.overwrite", function (value) {
            _this.overwriteInfo.setLabel(value ? "OVERWRITE" : "INSERT");
        });

        IDE.infoBus.on("editor.mode", function (value) {
            _this.modeInfo.setLabel(value.toUpperCase());
        });

        IDE.infoBus.on("editor.position", function (value) {
            var label = (value.row + 1) + ":" + (value.column + 1);
            _this.positionInfo.setLabel(label);
        });
    };

    StatusBar.prototype.initStatusBar = function () {
        var overwriteMode = document.getElementById("overwritemode");
        /*
        infoBus.SESSION.on("overwrite",(mode: boolean) => {
        overwriteMode.innerText = mode ? "overwrite" : "insert";
        });
        
        
        overwriteMode.onclick = (e:MouseEvent)=>{
        var s = <Cats.AceSession>IDE.activeSession;
        if (s && s.editSession) s.editSession.setOverwrite(! s.editSession.getOverwrite());
        };
        
        var aceEditor = <any>IDE.mainEditor.aceEditor;
        aceEditor.on("changeSelection", this.updateSelectionText);
        
        var sessionMode = document.getElementById("sessionmode");
        aceEditor.on("changeMode", () => {
        var mode = aceEditor.getSession().getMode();
        sessionMode.innerText = PATH.basename(mode.$id);
        });
        
        var recordingMode = document.getElementById("recordingmode");
        aceEditor.on("changeStatus", () => {
        setTimeout(() => {
        recordingMode.innerText = aceEditor.commands.recording ? "RECORDING" : "";
        }, 100);
        });
        recordingMode.onclick = (e:MouseEvent) => {
        aceEditor.commands.toggleRecording(aceEditor);
        };
        */
    };

    StatusBar.prototype.updateSelectionText = function () {
        /*
        var aceEditor = <any>IDE.mainEditor.aceEditor;
        var lead = aceEditor.selection.lead;
        var text: string;
        
        if (aceEditor.selection.isEmpty()) {
        text = (lead.row + 1) + " : " + (lead.column + 1);
        } else {
        var copyText = aceEditor.getCopyText();
        var length = copyText.replace("\n", "").length;
        
        text = copyText.split("\n").length + " × " + (lead.column + 1) + " [" + copyText.replace(/\r?\n/g, "").length + "]";
        }
        
        document.getElementById("selection").innerText = text;
        */
    };
    return StatusBar;
})(qx.ui.toolbar.ToolBar);
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
var HashHandler = ace.require('ace/keyboard/hash_handler').HashHandler;

/**
* This class takes care of the autocomplete popup and deals with
* the key events and filtering of the results while you are typing
*/
var AutoCompletePopup = (function (_super) {
    __extends(AutoCompletePopup, _super);
    function AutoCompletePopup(editor) {
        _super.call(this, new qx.ui.layout.Flow());
        this.editor = editor;
        this.cursorPos = 0;

        // this.setDecorator(null);
        this.setPadding(0, 0, 0, 0);
        this.setMargin(0, 0, 0, 0);
        this.setWidth(300);
        this.setHeight(200);
        this.createList();
        this.initHandler();
        this.addListener("disappear", this.hidePopup, this);
    }
    /**
    * Create the list that hold the completions
    */
    AutoCompletePopup.prototype.createList = function () {
        var _this = this;
        var self = this;

        // Creates the list and configures it
        var list = new qx.ui.list.List(null).set({
            scrollbarX: "on",
            selectionMode: "single",
            // height: 280,
            width: 300,
            labelPath: "label",
            iconPath: "icon",
            iconOptions: { converter: function (data) {
                    return _this.getIconForKind(data);
                } }
        });

        list.setDecorator(null);

        this.add(list);
        this.list = list;
    };

    /**
    * Get the text between cursor and start
    */
    AutoCompletePopup.prototype.getInputText = function () {
        var cursor = this.editor.getCursorPosition();
        var text = this.editor.session.getLine(cursor.row).slice(0, cursor.column);

        // console.log("input text:" + text);
        var matches = text.match(/[a-zA-Z_0-9\$]*$/);
        if (matches && matches[0])
            return matches[0];
        else
            return "";
    };

    // ALternative immplementation to get the text between cursor and start
    AutoCompletePopup.prototype.getInputText2 = function () {
        var pos = this.editor.getCursorPosition();
        var result = this.editor.getSession().getTokenAt(pos.row, pos.column);
        if (result && result.value)
            return result.value.trim();
        else
            return "";
    };

    AutoCompletePopup.prototype.matchText = function (text, completion) {
        if (!text)
            return true;
        if (completion.indexOf(text) === 0)
            return true;
        return false;
    };

    /**
    * Filter the available completions based on the users text input
    * so far.
    */
    AutoCompletePopup.prototype.updateFilter = function () {
        var _this = this;
        var text = this.getInputText();
        var lastItem = this.listModel.getItem(this.listModel.getLength() - 1);
        var counter = 0;

        this.filtered = [];
        var delegate = {};
        delegate["filter"] = function (data) {
            var label = data.getLabel();
            var result = _this.matchText(text, label);
            if (result)
                _this.filtered.push(data);
            if (data === lastItem) {
                // IDE.console.log("filtered items: " + this.filtered.length);
                // @TODO check for selected
                var selection = _this.list.getSelection().getItem(0);
                if (!(selection && (_this.filtered.indexOf(selection) > -1))) {
                    _this.cursorPos = 0;
                    _this.moveCursor(0);
                }
            }
            return result;
        };
        this.list.setDelegate(delegate);
    };

    AutoCompletePopup.prototype.moveCursor = function (row) {
        this.cursorPos += row;

        var len = this.filtered.length - 1;
        if (this.cursorPos > len)
            this.cursorPos = len;
        if (this.cursorPos < 0)
            this.cursorPos = 0;

        var item = this.filtered[this.cursorPos];
        this.list.resetSelection();
        this.list.getSelection().push(item);
        // IDE.console.log("Cursor:" + this.cursorPos);
    };

    /**
    * Setup the different keybindings that would go to the
    * popup window and not the editor
    */
    AutoCompletePopup.prototype.initHandler = function () {
        var _this = this;
        this.handler = new HashHandler();
        this.handler.bindKey("Home", function () {
            _this.moveCursor(-10000);
        });
        this.handler.bindKey("End", function () {
            _this.moveCursor(10000);
        });
        this.handler.bindKey("Down", function () {
            _this.moveCursor(1);
        });
        this.handler.bindKey("PageDown", function () {
            _this.moveCursor(10);
        });
        this.handler.bindKey("Up", function () {
            _this.moveCursor(-1);
        });
        this.handler.bindKey("PageUp", function () {
            _this.moveCursor(-10);
        });
        this.handler.bindKey("Esc", function () {
            _this.hidePopup();
        });
        this.handler.bindKey("Return|Tab", function () {
            var current = _this.list.getSelection().getItem(0);
            ;
            if (current) {
                var inputText = _this.getInputText();
                for (var i = 0; i < inputText.length; i++) {
                    _this.editor.remove("left");
                }
                var label = current.getLabel();
                _this.editor.insert(label);
            }
            _this.hidePopup();
        });
    };

    AutoCompletePopup.prototype.getIconForKind = function (name) {
        var iconPath = "./resource/qx/icon/Oxygen/16/types/";
        switch (name) {
            case "function":
            case "keyword":
            case "method":
                return iconPath + "method.png";
            case "constructor":
                return iconPath + "constructor.png";
            case "module":
                return iconPath + "module.png";
            case "interface":
                return iconPath + "interface.png";
            case "enum":
                return iconPath + "enum.png";
            case "class":
                return iconPath + "class.png";
            case "var":
                return iconPath + "variable.png";
            default:
                return iconPath + "method.png";
        }
    };

    /**
    * Show the popup and make sure the keybinding is in place
    *
    */
    AutoCompletePopup.prototype.showPopup = function (coords, completions) {
        var _this = this;
        this.editor.keyBinding.addKeyboardHandler(this.handler);
        this.moveTo(coords.pageX, coords.pageY + 20);

        var rawData = [];
        completions.forEach(function (completion) {
            var extension = "";
            if (completion.kind === "method")
                extension = "()";
            rawData.push({
                label: completion.name + extension,
                icon: completion.kind
            });
        });

        this.listModel = qx.data.marshal.Json.createModel(rawData, false);

        this.list.setModel(this.listModel);
        this.updateFilter();

        this.cursorPos = 0;
        this.moveCursor(0);

        this.show();

        this.changeListener = function (ev) {
            return _this.onChange(ev);
        };

        // this.editor.getSession().removeAllListeners('change');
        this.editor.getSession().on("change", this.changeListener);
    };

    /**
    * Hide the popup and remove all keybindings
    *
    */
    AutoCompletePopup.prototype.hidePopup = function () {
        this.editor.keyBinding.removeKeyboardHandler(this.handler);
        this.exclude();

        this.editor.getSession().removeListener('change', this.changeListener);
        // this.editor.getSession().removeAllListeners('change');
        // this.editor.getSession().on("change",CATS.onChangeHandler);
        // this.editor.getSession().removeAllListeners('change');
    };

    /**
    * Determines if the specified character may be part of a JS identifier
    */
    AutoCompletePopup.isJsIdentifierPart = function (ch) {
        ch |= 0; //tell JIT that ch is an int
        return ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90 || ch >= 48 && ch <= 57 || ch === 95 || ch === 36 || ch > 127;
    };

    /**
    * Check wether the typed character is reason to stop
    * the auto-complete task
    */
    AutoCompletePopup.prototype.onChange = function (ev) {
        var _this = this;
        var key = ev.data.text;
        if (!AutoCompletePopup.isJsIdentifierPart(key.charCodeAt(0))) {
            this.hidePopup();
            return;
        }

        // hack to get the cursor updated before we render
        // TODO find out how to force update without a timer delay
        setTimeout(function () {
            _this.updateFilter();
        }, 0);
    };

    AutoCompletePopup.prototype.showCompletions = function (completions) {
        if (this.list.isSeeable() || (completions.length === 0))
            return;
        console.debug("Received completions: " + completions.length);
        var cursor = this.editor.getCursorPosition();
        var coords = this.editor.renderer.textToScreenCoordinates(cursor.row, cursor.column);
        this.showPopup(coords, completions);
    };
    return AutoCompletePopup;
})(qx.ui.popup.Popup);
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
var FileContextMenu = (function (_super) {
    __extends(FileContextMenu, _super);
    function FileContextMenu(fileNavigator) {
        _super.call(this);
        this.fileNavigator = fileNavigator;
        this.init();
    }
    FileContextMenu.prototype.getSelectedItem = function () {
        return this.fileNavigator.getSelection().getItem(0);
    };

    FileContextMenu.prototype.getFullPath = function () {
        var fileName = this.getSelectedItem().getFullPath();
        return fileName;
    };

    FileContextMenu.prototype.init = function () {
        var refreshButton = new qx.ui.menu.Button("Refresh");

        var renameButton = new qx.ui.menu.Button("Rename");
        renameButton.addListener("execute", this.rename, this);

        var deleteButton = new qx.ui.menu.Button("Delete");
        deleteButton.addListener("execute", this.deleteFile, this);

        var newFileButton = new qx.ui.menu.Button("New File");
        newFileButton.addListener("execute", this.newFile, this);

        var newDirButton = new qx.ui.menu.Button("New Directory");
        newDirButton.addListener("execute", this.newFolder, this);

        this.add(refreshButton);
        this.add(renameButton);
        this.add(deleteButton);
        this.add(newFileButton);
        this.add(newDirButton);
    };

    FileContextMenu.prototype.refresh = function () {
        var item = this.getSelectedItem();
        // IDE.project.getTreeView().refresh();
    };

    FileContextMenu.prototype.deleteFile = function () {
        var _this = this;
        var fullName = this.getFullPath();
        var basename = PATH.basename(fullName);
        var sure = confirm("Delete " + basename + "?");
        if (sure) {
            OS.File.remove(fullName);
        }
        setTimeout(function () {
            _this.refresh();
        }, 100);
    };

    FileContextMenu.prototype.getBaseDir = function () {
        var item = this.getSelectedItem();
        var fullPath = this.getFullPath();

        if (item.getDirectory()) {
            return fullPath;
        } else {
            return PATH.dirname(fullPath);
        }
    };

    FileContextMenu.prototype.newFile = function () {
        var basedir = this.getBaseDir();

        var name = prompt("Enter new file name in directory " + basedir);
        if (name == null)
            return;
        var fullName = PATH.join(basedir, name);
        OS.File.writeTextFile(fullName, "");
        this.refresh();
    };

    FileContextMenu.prototype.newFolder = function () {
        var basedir = this.getBaseDir();

        var name = prompt("Enter new folder name in directory " + basedir);
        if (name == null)
            return;
        var fullName = PATH.join(basedir, name);
        OS.File.mkdirRecursiveSync(fullName);
        this.refresh();
    };

    FileContextMenu.prototype.rename = function () {
        var fullName = this.getFullPath();
        var dirname = PATH.dirname(fullName);
        var basename = PATH.basename(fullName);
        var name = prompt("Enter new name", basename);
        if (name == null)
            return;
        var c = confirm("Going to rename " + basename + " to " + name);
        if (c) {
            try  {
                OS.File.rename(fullName, PATH.join(dirname, name));
            } catch (err) {
                alert(err);
            }
        }
    };
    return FileContextMenu;
})(qx.ui.menu.Menu);
/**
* Some help to find based on the file name extension either the computer language (for the editor)
* or the mimetype (for the icons in the file navigator)
*/
var MimeTypeFinder = (function () {
    function MimeTypeFinder() {
        this.supportedModes = {
            ABAP: ["abap"],
            ActionScript: ["as"],
            ADA: ["ada|adb"],
            Apache_Conf: ["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],
            AsciiDoc: ["asciidoc"],
            Assembly_x86: ["asm"],
            AutoHotKey: ["ahk"],
            BatchFile: ["bat|cmd"],
            C9Search: ["c9search_results"],
            C_Cpp: ["cpp|c|cc|cxx|h|hh|hpp"],
            Cirru: ["cirru|cr"],
            Clojure: ["clj|cljs"],
            Cobol: ["CBL|COB"],
            coffee: ["coffee|cf|cson|^Cakefile"],
            ColdFusion: ["cfm"],
            CSharp: ["cs"],
            CSS: ["css"],
            Curly: ["curly"],
            D: ["d|di"],
            Dart: ["dart"],
            Diff: ["diff|patch"],
            Dockerfile: ["^Dockerfile"],
            Dot: ["dot"],
            Erlang: ["erl|hrl"],
            EJS: ["ejs"],
            Forth: ["frt|fs|ldr"],
            FTL: ["ftl"],
            Gherkin: ["feature"],
            Gitignore: ["^.gitignore"],
            Glsl: ["glsl|frag|vert"],
            golang: ["go"],
            Groovy: ["groovy"],
            HAML: ["haml"],
            Handlebars: ["hbs|handlebars|tpl|mustache"],
            Haskell: ["hs"],
            haXe: ["hx"],
            HTML: ["html|htm|xhtml"],
            HTML_Ruby: ["erb|rhtml|html.erb"],
            INI: ["ini|conf|cfg|prefs"],
            Jack: ["jack"],
            Jade: ["jade"],
            Java: ["java"],
            JavaScript: ["js|jsm"],
            JSON: ["json"],
            JSONiq: ["jq"],
            JSP: ["jsp"],
            JSX: ["jsx"],
            Julia: ["jl"],
            LaTeX: ["tex|latex|ltx|bib"],
            LESS: ["less"],
            Liquid: ["liquid"],
            Lisp: ["lisp"],
            LiveScript: ["ls"],
            LogiQL: ["logic|lql"],
            LSL: ["lsl"],
            Lua: ["lua"],
            LuaPage: ["lp"],
            Lucene: ["lucene"],
            Makefile: ["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],
            MATLAB: ["matlab"],
            Markdown: ["md|markdown"],
            MEL: ["mel"],
            MySQL: ["mysql"],
            MUSHCode: ["mc|mush"],
            Nix: ["nix"],
            ObjectiveC: ["m|mm"],
            OCaml: ["ml|mli"],
            Pascal: ["pas|p"],
            Perl: ["pl|pm"],
            pgSQL: ["pgsql"],
            PHP: ["php|phtml"],
            Powershell: ["ps1"],
            Prolog: ["plg|prolog"],
            Properties: ["properties"],
            Protobuf: ["proto"],
            Python: ["py"],
            R: ["r"],
            RDoc: ["Rd"],
            RHTML: ["Rhtml"],
            Ruby: ["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],
            Rust: ["rs"],
            SASS: ["sass"],
            SCAD: ["scad"],
            Scala: ["scala"],
            Smarty: ["smarty|tpl"],
            Scheme: ["scm|rkt"],
            SCSS: ["scss"],
            SH: ["sh|bash|^.bashrc"],
            SJS: ["sjs"],
            Space: ["space"],
            snippets: ["snippets"],
            Soy_Template: ["soy"],
            SQL: ["sql"],
            Stylus: ["styl|stylus"],
            SVG: ["svg"],
            Tcl: ["tcl"],
            Tex: ["tex"],
            Text: ["txt"],
            Textile: ["textile"],
            Toml: ["toml"],
            Twig: ["twig"],
            Typescript: ["ts|typescript|str"],
            Vala: ["vala"],
            VBScript: ["vbs"],
            Velocity: ["vm"],
            Verilog: ["v|vh|sv|svh"],
            XML: ["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl"],
            XQuery: ["xq"],
            YAML: ["yaml|yml"]
        };
    }
    /**
    * Find the mimetype for a file name
    */
    MimeTypeFinder.lookup = function (filename, fallback) {
        return this.types[path.extname(filename)] || fallback || this.default_type;
    };

    MimeTypeFinder.default_type = 'application/octet-stream';

    MimeTypeFinder.types = {
        ".3gp": "video/3gpp",
        ".a": "application/octet-stream",
        ".ai": "application/postscript",
        ".aif": "audio/x-aiff",
        ".aiff": "audio/x-aiff",
        ".arj": "application/x-arj-compressed",
        ".asc": "application/pgp-signature",
        ".asf": "video/x-ms-asf",
        ".asm": "text/x-asm",
        ".asx": "video/x-ms-asf",
        ".atom": "application/atom+xml",
        ".au": "audio/basic",
        ".avi": "video/x-msvideo",
        ".bat": "application/x-msdownload",
        ".bcpio": "application/x-bcpio",
        ".bin": "application/octet-stream",
        ".bmp": "image/bmp",
        ".bz2": "application/x-bzip2",
        ".c": "text/x-c",
        ".cab": "application/vnd.ms-cab-compressed",
        ".cc": "text/x-c",
        ".ccad": "application/clariscad",
        ".chm": "application/vnd.ms-htmlhelp",
        ".class": "application/octet-stream",
        ".cod": "application/vnd.rim.cod",
        ".com": "application/x-msdownload",
        ".conf": "text/plain",
        ".cpio": "application/x-cpio",
        ".cpp": "text/x-c",
        ".cpt": "application/mac-compactpro",
        ".crt": "application/x-x509-ca-cert",
        ".csh": "application/x-csh",
        ".css": "text/css",
        ".csv": "text/csv",
        ".cxx": "text/x-c",
        ".dart": "application/dart",
        ".deb": "application/x-debian-package",
        ".der": "application/x-x509-ca-cert",
        ".diff": "text/x-diff",
        ".djv": "image/vnd.djvu",
        ".djvu": "image/vnd.djvu",
        ".dl": "video/dl",
        ".dll": "application/x-msdownload",
        ".dmg": "application/octet-stream",
        ".doc": "application/msword",
        ".dot": "application/msword",
        ".drw": "application/drafting",
        ".dtd": "application/xml-dtd",
        ".dvi": "application/x-dvi",
        ".dwg": "application/acad",
        ".dxf": "application/dxf",
        ".dxr": "application/x-director",
        ".ear": "application/java-archive",
        ".eml": "message/rfc822",
        ".eps": "application/postscript",
        ".etx": "text/x-setext",
        ".exe": "application/x-msdownload",
        ".ez": "application/andrew-inset",
        ".f": "text/x-fortran",
        ".f77": "text/x-fortran",
        ".f90": "text/x-fortran",
        ".fli": "video/x-fli",
        ".flv": "video/x-flv",
        ".for": "text/x-fortran",
        ".gem": "application/octet-stream",
        ".gemspec": "text/x-script.ruby",
        ".gif": "image/gif",
        ".gl": "video/gl",
        ".gtar": "application/x-gtar",
        ".gz": "application/x-gzip",
        ".h": "text/x-c",
        ".hdf": "application/x-hdf",
        ".hh": "text/x-c",
        ".hqx": "application/mac-binhex40",
        ".htm": "text/html",
        ".html": "text/html",
        ".ice": "x-conference/x-cooltalk",
        ".ico": "image/vnd.microsoft.icon",
        ".ics": "text/calendar",
        ".ief": "image/ief",
        ".ifb": "text/calendar",
        ".igs": "model/iges",
        ".ips": "application/x-ipscript",
        ".ipx": "application/x-ipix",
        ".iso": "application/octet-stream",
        ".jad": "text/vnd.sun.j2me.app-descriptor",
        ".jar": "application/java-archive",
        ".java": "text/x-java-source",
        ".jnlp": "application/x-java-jnlp-file",
        ".jpeg": "image/jpeg",
        ".jpg": "image/jpeg",
        ".js": "application/javascript",
        ".json": "application/json",
        ".latex": "application/x-latex",
        ".log": "text/plain",
        ".lsp": "application/x-lisp",
        ".lzh": "application/octet-stream",
        ".m": "text/plain",
        ".m3u": "audio/x-mpegurl",
        ".m4v": "video/mp4",
        ".man": "text/troff",
        ".mathml": "application/mathml+xml",
        ".mbox": "application/mbox",
        ".mdoc": "text/troff",
        ".me": "text/troff",
        ".mid": "audio/midi",
        ".midi": "audio/midi",
        ".mif": "application/x-mif",
        ".mime": "www/mime",
        ".mml": "application/mathml+xml",
        ".mng": "video/x-mng",
        ".mov": "video/quicktime",
        ".movie": "video/x-sgi-movie",
        ".mp3": "audio/mpeg",
        ".mp4": "video/mp4",
        ".mp4v": "video/mp4",
        ".mpeg": "video/mpeg",
        ".mpg": "video/mpeg",
        ".mpga": "audio/mpeg",
        ".ms": "text/troff",
        ".msi": "application/x-msdownload",
        ".nc": "application/x-netcdf",
        ".oda": "application/oda",
        ".odp": "application/vnd.oasis.opendocument.presentation",
        ".ods": "application/vnd.oasis.opendocument.spreadsheet",
        ".odt": "application/vnd.oasis.opendocument.text",
        ".ogg": "application/ogg",
        ".ogm": "application/ogg",
        ".p": "text/x-pascal",
        ".pas": "text/x-pascal",
        ".pbm": "image/x-portable-bitmap",
        ".pdf": "application/pdf",
        ".pem": "application/x-x509-ca-cert",
        ".pgm": "image/x-portable-graymap",
        ".pgn": "application/x-chess-pgn",
        ".pgp": "application/pgp",
        ".pkg": "application/octet-stream",
        ".pl": "text/x-script.perl",
        ".pm": "application/x-perl",
        ".png": "image/png",
        ".pnm": "image/x-portable-anymap",
        ".ppm": "image/x-portable-pixmap",
        ".pps": "application/vnd.ms-powerpoint",
        ".ppt": "application/vnd.ms-powerpoint",
        ".ppz": "application/vnd.ms-powerpoint",
        ".pre": "application/x-freelance",
        ".prt": "application/pro_eng",
        ".ps": "application/postscript",
        ".psd": "image/vnd.adobe.photoshop",
        ".py": "text/x-script.python",
        ".qt": "video/quicktime",
        ".ra": "audio/x-realaudio",
        ".rake": "text/x-script.ruby",
        ".ram": "audio/x-pn-realaudio",
        ".rar": "application/x-rar-compressed",
        ".ras": "image/x-cmu-raster",
        ".rb": "text/x-script.ruby",
        ".rdf": "application/rdf+xml",
        ".rgb": "image/x-rgb",
        ".rm": "audio/x-pn-realaudio",
        ".roff": "text/troff",
        ".rpm": "application/x-redhat-package-manager",
        ".rss": "application/rss+xml",
        ".rtf": "text/rtf",
        ".rtx": "text/richtext",
        ".ru": "text/x-script.ruby",
        ".s": "text/x-asm",
        ".scm": "application/x-lotusscreencam",
        ".set": "application/set",
        ".sgm": "text/sgml",
        ".sgml": "text/sgml",
        ".sh": "application/x-sh",
        ".shar": "application/x-shar",
        ".sig": "application/pgp-signature",
        ".silo": "model/mesh",
        ".sit": "application/x-stuffit",
        ".skt": "application/x-koan",
        ".smil": "application/smil",
        ".snd": "audio/basic",
        ".so": "application/octet-stream",
        ".sol": "application/solids",
        ".spl": "application/x-futuresplash",
        ".src": "application/x-wais-source",
        ".stl": "application/SLA",
        ".stp": "application/STEP",
        ".sv4cpio": "application/x-sv4cpio",
        ".sv4crc": "application/x-sv4crc",
        ".svg": "image/svg+xml",
        ".svgz": "image/svg+xml",
        ".swf": "application/x-shockwave-flash",
        ".t": "text/troff",
        ".tar": "application/x-tar",
        ".tbz": "application/x-bzip-compressed-tar",
        ".tcl": "application/x-tcl",
        ".tex": "application/x-tex",
        ".texi": "application/x-texinfo",
        ".texinfo": "application/x-texinfo",
        ".text": "text/plain",
        ".tgz": "application/x-tar-gz",
        ".tif": "image/tiff",
        ".tiff": "image/tiff",
        ".torrent": "application/x-bittorrent",
        ".tr": "text/troff",
        ".ts": "application/x-typescript",
        ".tsi": "audio/TSP-audio",
        ".tsp": "application/dsptype",
        ".tsv": "text/tab-separated-values",
        ".txt": "text/plain",
        ".unv": "application/i-deas",
        ".ustar": "application/x-ustar",
        ".vcd": "application/x-cdlink",
        ".vcf": "text/x-vcard",
        ".vcs": "text/x-vcalendar",
        ".vda": "application/vda",
        ".vivo": "video/vnd.vivo",
        ".vrm": "x-world/x-vrml",
        ".vrml": "model/vrml",
        ".war": "application/java-archive",
        ".wav": "audio/x-wav",
        ".wax": "audio/x-ms-wax",
        ".wma": "audio/x-ms-wma",
        ".wmv": "video/x-ms-wmv",
        ".wmx": "video/x-ms-wmx",
        ".wrl": "model/vrml",
        ".wsdl": "application/wsdl+xml",
        ".wvx": "video/x-ms-wvx",
        ".xbm": "image/x-xbitmap",
        ".xhtml": "application/xhtml+xml",
        ".xls": "application/vnd.ms-excel",
        ".xlw": "application/vnd.ms-excel",
        ".xml": "application/xml",
        ".xpm": "image/x-xpixmap",
        ".xsl": "application/xml",
        ".xslt": "application/xslt+xml",
        ".xwd": "image/x-xwindowdump",
        ".xyz": "chemical/x-pdb",
        ".yaml": "text/yaml",
        ".yml": "text/yaml",
        ".zip": "application/zip"
    };
    return MimeTypeFinder;
})();
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
if (args.indexOf("--debug") === -1) {
    console.info = function () {
    };
    console.debug = function () {
    };
}

var IDE = new Cats.Ide();

/**
* This is the file that is included in the index.html and
* bootstraps the starting of CATS.
*/
/**
* Main module of the CATS IDE
*/
var Cats;
(function (Cats) {
    /**
    * Get a parameter from the URL
    */
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    /**
    * Determine which project(s) we should load during
    * startup.
    */
    function determineProject() {
        var projectName = getParameterByName("project");
        if (!projectName) {
            var args = GUI.App.argv;
            var i = args.indexOf("--project");
            if (i > -1)
                projectName = args[i + 1];
        }
        return projectName;
    }

    // Catch unhandled expections so they don't showup in the IDE.
    process.on('uncaughtException', function (err) {
        console.error("Uncaught exception occured: " + err);
        console.error(err.stack);
        alert(err);
    });

    // Catch the close of the windows in order to save any unsaved changes
    var win = GUI.Window.get();
    win.on("close", function () {
        /*
        if (IDE.hasUnsavedSessions()) {
        if (! confirm("There are unsaved files!\nDo you really want to quit?")) return;
        }
        
        
        IDE.saveConfig();
        */
        this.close(true);
    });

    function main(app) {
        IDE.init(app.getRoot());

        var prjName = determineProject();
        if (prjName) {
            IDE.addProject(new Cats.Project(prjName));
        } else {
            if (args.indexOf("--restore") > -1)
                IDE.restorePreviousProjects();
        }
    }

    qx.registry.registerMainMethod(main);
})(Cats || (Cats = {}));
