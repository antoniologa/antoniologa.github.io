import React from 'react';
import ToolbarComponent from "../../components/ToolbarComponent"

const Main = ({children}) =>
    <div>
      <ToolbarComponent/>
      <div>
        {children}
      </div>
    </div>

export default Main;
