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
        style : function(states:any) { return { decorator : undefined }; } 
    };    
}

qx.Theme.define("Cats.theme.Appearance",
{
  extend : qx.theme.simple.Appearance,

  appearances :
  {
      
      
    "tabview-page/button" : {
      base : true,    
      style : function(states) {
        return {
          padding : [6, 6, 6, 6]
        };
      }
    },
    
     "splitpane" : {
       style : function(states) {
       return {
           backgroundColor : "light-background",
           decorator: undefined
        };
      }     
    },
    
    
    "__virtual-tree" : noDecorator(),
    
    "__toolbar-button" : noDecorator(),

    "__tabview/pane" : {
       base : true,    
       style : function(states) {
       return {
          padding : [0, 0, 0, 0]
        };
      }     
    }
      
  }
});
