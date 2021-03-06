/**
 * The toolbar for CATS
 */
class ToolBar extends qx.ui.toolbar.ToolBar {

    private themes = ["Modern", "Indigo", "Simple", "Cats", "Classic"];
    private iconFolder = "resource/qx/icon/Oxygen/22/";

    private commands = [
        Cats.Commands.CMDS.file_new,
        Cats.Commands.CMDS.file_close,
        Cats.Commands.CMDS.file_closeAll,
        Cats.Commands.CMDS.file_save,
        Cats.Commands.CMDS.file_saveAll,
        Cats.Commands.CMDS.file_saveAs,
        null,
        Cats.Commands.CMDS.project_open,
        Cats.Commands.CMDS.project_close,
        Cats.Commands.CMDS.project_build,
        Cats.Commands.CMDS.project_run,
        Cats.Commands.CMDS.project_refresh,
        null,
        Cats.Commands.CMDS.edit_find,
        Cats.Commands.CMDS.edit_replace,
        Cats.Commands.CMDS.edit_indent,
        Cats.Commands.CMDS.edit_outdent
 //       Cats.Commands.CMDS.edit_toggleComment
    ]


    constructor() {
        super();
        this.init();
        // this.setPadding(0,0,0,0);
    }
 
    private createButton(cmd:Cats.Commands.Command) {
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
        button.addListener("click", () => {
            cmd.command();
        });
        return button;
    }

    private init() {
        this.commands.forEach((cmdEnum) => {
            if (cmdEnum === null) {
                this.addSeparator();
            } else {
                var cmd = Cats.Commands.get(cmdEnum);
                if (cmd && cmd.icon) {
                  var button = this.createButton(cmd);
                  this.add(button);
                }
            }
        });
        return;
        var cmds = Cats.Commands.getAllCommands();
        cmds.forEach((cmd) => {
            if (cmd.icon) {
                    var button = this.createButton(cmd)
                    this.add(button);
            }
        });
        
       // this.addThemeButtons();
    }

    toggle() {
        if (this.isVisible()) { 
            this.exclude();    
        } else {
            this.show();
        }
    }


    private addThemeButtons() {
        this.themes.forEach((theme) => {
            var themeButton = new qx.ui.toolbar.Button(theme);
            themeButton.addListener("click", () => { qx.theme.manager.Meta.getInstance().setTheme(qx.theme[theme]); });
            this.add(themeButton);
        });
    }

}