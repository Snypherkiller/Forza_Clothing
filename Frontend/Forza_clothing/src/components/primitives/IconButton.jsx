import React from "react";

import "./IconButton.css";

/*
    content
    iconb - icon before
    icona - icon after
    w - width
    h - height
    bg - background color
    c - color
    is - icon size
    ts - text size 

    lm - left margin
    rm - right margin
    tm - top margin
    bm - bottom margin
*/

function IconButton({ content, title, iconb, icona, w, h, bg, c, is, ts, rm, lm, tm, bm, extraClass, onClick }) {
  return (
    <button title={title} className={`icon-btn btn-width-${w} btn-height-${h} btn-bg-${bg} btn-clr-${c} btn-right-margin-${rm} btn-left-margin-${lm} ${extraClass}`} onClick={onClick}>
      {(iconb && content && <span className={`btn__icon btn__icon-${is}`}>{iconb || ""}</span>) || (iconb && <span className={`btn__icon btn__icon-${is}`}>{iconb || ""}</span>)}
      {content && <span className={`btn__text btn__text-${ts}`}>{content}</span>}
      {(icona && content && <span className={`btn__icon btn__icon-${is}`}>{icona || ""}</span>) || (icona && <span className={`btn__icon btn__icon-${is}`}>{icona || ""}</span>)}
    </button>
  );
}

export default IconButton;