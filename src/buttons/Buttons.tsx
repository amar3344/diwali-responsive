import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  fontsize:string
  borderRadius:string
  padd:string
  mar:string
  fontWeight:string,
  fontColor:string
  fontFamily:string,
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    fontsize,
    borderRadius,
    padd,
    mar,
    fontFamily,
    fontWeight,
    fontColor
  }) => { 
  return (
    <button 
      style={{
         backgroundColor: color,
         border,
         borderRadius:borderRadius,
         fontSize:fontsize,
         padding:padd,
         margin:mar,
         fontFamily:fontFamily,
         fontWeight:fontWeight,
         color:fontColor
      }}
    >
    {children}
    </button>
  );
}

export default Button;