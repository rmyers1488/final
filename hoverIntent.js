// JavaScript source code
(function ($) {
    $.fn.hoverIntent = function (f, g) {
        //default config options
        let cfg = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        //overide config opt w/ user supplied object
        cfg = $.extend(cfg, g ? { over: f, out: g } : f);
        //instant variables
        let cX, cY, pX, pY;
        //get mouse positon
        let track = function (ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };
        //comparing mouse position
        let compare = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            //mouse past thrushold?
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                //hover inteant set true, so mouseout can be called
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev]);
            } else {
                pX = cX; pY = cY;
                ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval);
            }
        };
        //delay mouseOut function
        let delay = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev]);
        };
        //mouse hovering
        let handleHover = function (e) {
            let p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
            while (p && p != this) { try { p = p.parentNode; } catch (e) { p = this; } }
            if (p == this) { return false; }
            //copy objects passed into t, requreid for IE
            let ev = jQuery.extend({}, e);
            let ob = this;
            //cancel hoverinte timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimout) (ob.hoverIntent_t); }
            //e.type = onmouseover
            if (e.type == "onmouseover") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).bind("mousemove", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); } cfg.interval);
                }
            } else {
                $(ob).unbind("mousemove", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function () { delay(ev, ob); }, cfg.timeout);
                }
            }
            return this.mouseover(handleHover).mouseout(handleHover);
        };
    }
});