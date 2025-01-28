import React from "react";
import { Link } from "react-router-dom";
import cn from "../../lib/cn";

const Pic = ({className,alt,src,target,href,picName}) => {
  return (
    <div className={cn(picName)}>
      <Link to={href} target={target}>
        <picture>
          <img src={src} alt={alt} className={cn(className)} />
        </picture>
      </Link>
    </div>
  );
};

export default Pic;
