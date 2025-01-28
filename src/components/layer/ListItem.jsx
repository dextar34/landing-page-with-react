import React from "react";
import { Link } from "react-router-dom";
import cn from "../../lib/cn";

const ListItem = ({liClass,href,target,className,children}) => {
  return (
    <li className={cn(liClass)}>
      <Link to={href} target={target}>
        <div className={cn(className)}>{children}</div>
      </Link>
    </li>
  );
};

export default ListItem;
